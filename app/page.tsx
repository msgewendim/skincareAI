import Hero from './components/Hero';
import AboutUs from './components/About';
import AIChatPreview from './components/AIChatPreview';
import CameraIntegration from './components/CameraIntegration';
import Pricing from './components/Pricing';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs /> 
      <AIChatPreview />
      <CameraIntegration />
      <Pricing />
    </main>
  );
}