import type { NavLink, RoomType, Amenity, Testimonial, FeatureItem, SocialLink } from './types';
import { Wifi, Coffee, Shield, Users, Facebook, Twitter, Instagram, Linkedin, Zap, MapPin, Sparkles, Lock } from 'lucide-react';

export const WHATSAPP_LINK = "https://wa.me/message/E562AOP4Q6H7D1";
export const LOGO_URL = "https://iili.io/fBciH9j.png";

export const NAV_LINKS: NavLink[] = [
  { href: '#home', label: 'Home' },
  { href: '#rooms', label: 'Rooms' },
  { href: '#features', label: 'Features' },
  { href: '#amenities', label: 'Amenities' },
  { href: '#contact', label: 'Contact' },
];

export const HERO_IMAGES: string[] = [
  'https://iili.io/fBciJAx.jpg', // Main requested image
  'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop', // Luxury Bedroom
  'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop', // Modern Interior
  'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980&auto=format&fit=crop'  // Apartment
];

export const ROOM_TYPES: RoomType[] = [
  {
    name: 'Deluxe Room',
    price: '₦120,000',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop',
    features: ['King Bed', 'City View', 'Free WiFi', 'Breakfast Included', 'Smart TV']
  },
  {
    name: 'Executive Suite',
    price: '₦200,000',
    image: 'https://images.unsplash.com/photo-1590490360182-f33d5e6a385c?q=80&w=2072&auto=format&fit=crop',
    features: ['Separate Living Area', 'Panoramic View', 'Premium Amenities', 'Concierge Service', 'Minibar']
  },
  {
    name: 'Presidential Suite',
    price: '₦350,000',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop',
    features: ['Private Terrace', 'Butler Service', 'Luxury Interior', 'Airport Transfer', 'Jacuzzi']
  }
];

export const AMENITIES: Amenity[] = [
  { icon: Wifi, name: 'Free WiFi', description: 'High-speed fibre internet throughout the property.' },
  { icon: Coffee, name: 'Gourmet Dining', description: 'Premium in-house catering & dining options.' },
  { icon: Shield, name: '24/7 Security', description: 'Professional security personnel and CCTV surveillance.' },
  { icon: Users, name: 'Event Hosting', description: 'Exclusive space for corporate & private events.' }
];

export const FEATURES_LIST: FeatureItem[] = [
  {
    title: 'Uninterrupted Power Supply',
    content: 'Experience 24/7 electricity with our dedicated industrial generators and solar backup systems, ensuring your comfort is never compromised. We guarantee zero downtime during your stay.'
  },
  {
    title: 'Prime Location & Accessibility',
    content: 'Located at 2 Jehovah Street, we are centrally situated in Lagos, offering easy access to major business districts, shopping malls, and entertainment hubs while maintaining a serene environment.'
  },
  {
    title: 'Daily Housekeeping & Concierge',
    content: 'Our professional housekeeping team ensures your space remains pristine with daily cleaning services, fresh linens, and premium toiletries. Our concierge is available 24/7 to assist with any requests.'
  },
  {
    title: 'Smart Home Integration',
    content: 'Enjoy modern living with smart TVs, automated lighting systems, and keyless entry for a seamless and secure experience. High-speed internet keeps you connected to what matters.'
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    rating: 5,
    text: 'Exceptional service and luxurious accommodations. The attention to detail was impeccable.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    name: 'Michael Chen',
    rating: 5,
    text: 'Perfect location with stunning views. The staff went above and beyond to make our stay memorable.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    name: 'Emma Rodriguez',
    rating: 5,
    text: 'World-class amenities and breathtaking architecture. Truly a five-star experience.',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
  }
];