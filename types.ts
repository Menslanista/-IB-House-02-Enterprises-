import type { LucideProps } from 'lucide-react';
import type React from 'react';

export interface NavLink {
  href: string;
  label: string;
}

export interface RoomType {
  name: string;
  price: string;
  image: string;
  features: string[];
}

export interface Amenity {
  icon: React.FC<LucideProps>;
  name: string;
  description: string;
}

export interface Testimonial {
  name: string;
  rating: number;
  text: string;
  avatar: string;
}

export interface FeatureItem {
  title: string;
  content: string;
}

export interface SocialLink {
  icon: React.FC<LucideProps>;
  href: string;
  label: string;
}
