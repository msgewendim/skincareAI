// app/components/Footer.tsx
"use client"

import Link from "next/link"
import { Github, Twitter, Linkedin, } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const socialLinks = [
  { 
    icon: Github, 
    href: "https://github.com/yourusername",
    label: "GitHub" 
  },
  { 
    icon: Twitter, 
    href: "https://twitter.com/yourusername",
    label: "Twitter" 
  },
  { 
    icon: Linkedin, 
    href: "https://linkedin.com/in/yourusername",
    label: "LinkedIn" 
  }
]

const footerNavigation = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Camera Analysis", href: "#camera" },
    { name: "AI Chat", href: "#ai-chat" }
  ],
  company: [
    { name: "About", href: "#about" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
    { name: "Contact", href: "/contact" }
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" }
  ]
}

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="text-2xl font-bold">
              Your Brand
            </Link>
            <p className="text-gray-600 max-w-xs">
              Revolutionizing skincare with AI-powered analysis and personalized recommendations.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link 
                  key={social.label}
                  href={social.href} 
                  target="_blank"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-8 grid grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              {footerNavigation.product.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-600 hover:text-primary py-1 text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              {footerNavigation.company.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-600 hover:text-primary py-1 text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              {footerNavigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-600 hover:text-primary py-1 text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter and Copyright */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Your Brand. All rights reserved.
            </div>
            
            {/* Newsletter Signup */}
            <div className="flex w-full max-w-sm items-center space-x-2 mt-4 md:mt-0">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow"
              />
              <Button type="submit">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
