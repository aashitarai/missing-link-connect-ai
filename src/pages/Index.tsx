
import React, { useState } from 'react';
import { MapPin, ShieldCheck, Bell, User, Building2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import LoginModal from '@/components/LoginModal';
import FeatureCard from '@/components/FeatureCard';
import StepCard from '@/components/StepCard';
import NavBar from '@/components/NavBar';

const Index = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleReportClick = () => {
    setShowLoginModal(true);
  };

  const handleClose = () => {
    setShowLoginModal(false);
  };

  const features = [
    {
      icon: <MapPin className="text-blue-600" size={48} />,
      title: "AI Facial Recognition",
      description: "Advanced AI technology to match and identify missing persons across our network."
    },
    {
      icon: <ShieldCheck className="text-blue-600" size={48} />,
      title: "Secure Data Handling",
      description: "Your information is encrypted and shared only with verified authorities."
    },
    {
      icon: <Bell className="text-blue-600" size={48} />,
      title: "Real-Time Notifications",
      description: "Instant alerts and updates to keep families informed throughout the search process."
    }
  ];

  const steps = [
    {
      number: 1,
      title: "Report Missing",
      description: "Users report a missing person through our secure portal."
    },
    {
      number: 2,
      title: "AI Matching",
      description: "Our AI system matches facial features with available databases."
    },
    {
      number: 3,
      title: "Alert Authorities",
      description: "Relevant authorities are notified and mobilized to assist."
    },
    {
      number: 4,
      title: "Find the Missing",
      description: "The person is safely reunited with their family."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-green-500 to-blue-600">
      {/* Navigation */}
      <NavBar />

      {/* Hero Section */}
      <header className="pt-32 container mx-auto text-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
          AI-Powered Missing Person Assistance
        </h1>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          Leveraging advanced AI and facial recognition to help reunite families 
          and support authorities in finding missing individuals.
        </p>
        <div className="flex justify-center">
          <Button 
            onClick={handleReportClick}
            className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-6 rounded-full text-xl"
          >
            Report a Missing Person
          </Button>
        </div>
        
        {/* Hero Image Section */}
        <div className="mt-12 mb-16">
          <div className="relative overflow-hidden rounded-lg shadow-xl h-[300px] md:h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
              alt="Missing Persons Support" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <p className="text-white text-2xl font-bold">Reuniting Families Through Technology</p>
            </div>
          </div>
        </div>
      </header>

      {/* Login Modal */}
      <LoginModal show={showLoginModal} onClose={handleClose} />

      {/* Key Features */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">How We Help</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-white">How It Works</h2>
          
          {/* Timeline Display */}
          <div className="hidden md:flex justify-center items-center space-x-4 mb-8">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="bg-blue-100 p-4 rounded-full w-10 h-10 flex items-center justify-center font-bold">
                  {step.number}
                </div>
                {index < steps.length - 1 && <div className="w-24 h-1 bg-blue-200"></div>}
              </React.Fragment>
            ))}
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 mt-8">
            {steps.map((step, index) => (
              <StepCard 
                key={index}
                number={step.number}
                title={`Step ${step.number}: ${step.title}`}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-blue-700 text-white py-12">
        <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold mb-6">MissingLink</h3>
          <p className="text-lg mb-8">Have questions or need help?</p>
          <Button className="bg-white text-blue-700 hover:bg-gray-200 px-6 py-3 rounded-full font-semibold">
            Contact Us
          </Button>
          <div className="mt-10 text-blue-100">
            <p>&copy; {new Date().getFullYear()} MissingLink. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
