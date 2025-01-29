"use client";
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Camera, Upload, X, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Image from 'next/image';

const CameraIntegration = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user', width: 1280, height: 720 }        
      });
      
      setStream(mediaStream);
    } catch (error) {
      toast({
        title: "Camera Access Denied",
        description: "Please enable camera access to use this feature",
        variant: "destructive",
      });
      console.error('Error accessing camera:', error);
    }
  };

  useEffect(() => {
    if (stream && videoRef.current) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  const stopCamera = useCallback(() => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
  }, [stream]);

  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      canvasRef.current.width = videoRef.current.videoWidth;
      canvasRef.current.height = videoRef.current.videoHeight;
      context?.drawImage(videoRef.current, 0, 0);
      
      const imageData = canvasRef.current.toDataURL('image/jpeg');
      setCapturedImage(imageData);
      stopCamera();
    }
  };
  console.log("capturedImage", capturedImage)
  const uploadImage = async () => {
    if (!capturedImage) return;
    
    setIsLoading(true);
    try {
      // Convert base64 to blob
      const response = await fetch(capturedImage);
      const blob = await response.blob();
      
      const formData = new FormData();
      formData.append('image', blob, 'skin-analysis.jpg');

      // Replace with your API endpoint
      const uploadResponse = await fetch('/api/analyze-skin', {
        method: 'POST',
        body: formData,
      });

      if (!uploadResponse.ok) throw new Error('Upload failed');

      toast({
        title: "Success!",
        description: "Image uploaded for analysis",
      });

      // Reset state
      setCapturedImage(null);
    } catch (error) {
      toast({
        title: "Upload Failed",
        description: "Please try again",
        variant: "destructive",
      });
      console.error('Error uploading image:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto p-4 sm:p-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              AI Skin Analysis
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Take a clear photo of your face for personalized analysis
            </p>
          </div>

          <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden mb-4">
            {stream && (
              <video 
                ref={videoRef}
                autoPlay
                playsInline
                className="w-full h-full object-cover"
              />
            )}
            
            {capturedImage && (
              <Image
                src={capturedImage}
                alt="Captured"
                layout="fill"
                objectFit="cover"
              />
            )}

            {!stream && !capturedImage && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Camera className="w-12 h-12 text-gray-400" />
              </div>
            )}
          </div>

          <canvas ref={canvasRef} className="hidden" />

          <div className="flex gap-3 justify-center">
            {!stream && !capturedImage && (
              <Button onClick={startCamera} className="bg-pink-600 hover:bg-pink-700">
                <Camera className="w-4 h-4 mr-2" />
                Start Camera
              </Button>
            )}

            {stream && (
              <Button onClick={captureImage} variant="outline">
                Take Photo
              </Button>
            )}

            {capturedImage && (
              <>
                <Button onClick={() => {
                  setCapturedImage(null);
                  startCamera();
                }} variant="outline">
                  <X className="w-4 h-4 mr-2" />
                  Retake
                </Button>
                <Button 
                  onClick={uploadImage} 
                  className="bg-pink-600 hover:bg-pink-700"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  ) : (
                    <Upload className="w-4 h-4 mr-2" />
                  )}
                  {isLoading ? 'Uploading...' : 'Upload for Analysis'}
                </Button>
              </>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CameraIntegration;
