// app/about/overview/page.tsx
"use client";

import { useEffect, useState } from 'react';
import HeroSection from './components/HeroSection';
import GeneralInfoSection from './components/GeneralInfoSection';
import HistoryHeritageSection from './components/HistoryHeritageSection';
import GeographyResourcesSection from './components/GeographyResourcesSection';
import EconomyIndustrySection from './components/EconomyIndustrySection';
import CultureTraditionSection from './components/CultureTraditionSection';
import TourismPlacesSection from './components/TourismPlacesSection';

export default function Overview() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const observerOptions: IntersectionObserverInit = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
      observer.disconnect();
    };
  }, [isMounted]);

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-1/4 mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <HeroSection />
      <GeneralInfoSection />
      <HistoryHeritageSection />
      <GeographyResourcesSection />
      <EconomyIndustrySection />
      <CultureTraditionSection />
      <TourismPlacesSection />

      <style jsx global>{`
        @keyframes fadeIn {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .fade-in {
          opacity: 0;
        }
      `}</style>
    </div>
  );
}