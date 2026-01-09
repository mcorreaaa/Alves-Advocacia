import React from 'react';

export interface ServiceItem {
  icon: React.ElementType;
  title: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  imageAlt: string;
}