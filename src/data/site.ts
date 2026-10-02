import {
  Award,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Gem,
  Globe2,
  Hammer,
  Home,
  Layers3,
  Mail,
  MapPin,
  MessageCircle,
  PanelsTopLeft,
  Phone,
  ShieldCheck,
  SunMedium,
  Volume2,
  Wind,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import acpCladdingSolutions from "../assets/acp-cladding-solutions.png";
import panoramicSlidingSystem from "../assets/panoramic-sliding-system.png";
import upvcCasementWindow from "../assets/upvc-casement-window.png";
import upvcSlidingSystem from "../assets/upvc-sliding-system.png";

export const contact = {
  company: "Gulf uPVC & Allied Industries",
  phone: "+917558802222",
  displayPhone: "+91 75588 02222",
  whatsapp: "+917558802222",
  email: "info@gulfupvcindia.com",
  website: "www.gulfupvcindia.com",
  gstin: "33BAQPA4598A1ZU",
  addressLines: ["10/7/2, Tenkasi Main Road", "Elathur, Achampudur", "Tamil Nadu - 627803"],
  mapQuery:
    "Gulf uPVC & Allied Industries, 10/7/2 Tenkasi Main Road, Elathur, Achampudur, Tamil Nadu 627803",
};

export const whatsappUrl = `https://wa.me/${contact.whatsapp.replace("+", "")}?text=${encodeURIComponent(
  "Hello GULF uPVC, I would like to enquire about your architectural solutions.",
)}`;

export const navItems = [
  ["Home", "home"],
  ["About", "about"],
  ["Products", "products"],
  ["Why Us", "why-us"],
  ["Projects", "projects"],
  ["Testimonials", "testimonials"],
  ["Contact", "contact"],
] as const;

export type Product = {
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  icon: LucideIcon;
  benefits: string[];
  applications: string[];
  feature?: boolean;
  imageAspect?: string;
};

export const architecturalImages = {
  hero:
    "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=2200&q=85",
  about: upvcCasementWindow,
  sliding: panoramicSlidingSystem,
  facade:
    "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1800&q=85",
  office:
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1500&q=85",
  cta:
    "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=2200&q=85",
};

export const values = [
  { title: "Premium Quality", copy: "Carefully selected systems and finishes for refined, lasting spaces.", icon: Gem },
  { title: "Expert Workmanship", copy: "Detail-led installation by teams focused on clean execution.", icon: Hammer },
  { title: "Customisable Solutions", copy: "Door, window, glass and cladding options adapted to each site.", icon: PanelsTopLeft },
  { title: "Customer Satisfaction", copy: "Responsive guidance from enquiry through final finishing.", icon: BadgeCheck },
];

export const products: Product[] = [
  {
    title: "Premium uPVC Windows",
    eyebrow: "Keep the noise out and the coolness in.",
    description:
      "High-insulation uPVC systems for peaceful, energy-efficient living.",
    image: upvcSlidingSystem,
    icon: Home,
    benefits: ["Durable construction", "Sound insulation", "Dust and rain protection", "Low maintenance"],
    applications: ["Sliding windows", "Casement windows", "Combination windows", "Residential and commercial openings"],
    feature: true,
  },
  {
    title: "Premium Glass Facade Solutions",
    eyebrow: "Modern Look. Maximum Light.",
    description:
      "Contemporary glass facade solutions that create striking elevations, expansive daylight and a refined architectural identity.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85",
    icon: Building2,
    benefits: ["Modern elevations", "Natural daylight", "Sleek commercial presence", "Professional installation"],
    applications: ["Commercial buildings", "Showrooms", "Office fronts", "Premium residential elevations"],
  },
  {
    title: "Premium Glass Partitions",
    eyebrow: "Elegant. Functional. Versatile.",
    description:
      "Bright, sophisticated partition systems designed to maintain visual openness while defining functional interior spaces.",
    image: architecturalImages.office,
    icon: Layers3,
    benefits: ["Modern aesthetics", "Natural light flow", "Space optimization", "Ideal for offices"],
    applications: ["Workspaces", "Cabins", "Meeting rooms", "Retail interiors"],
  },
  {
    title: "ACP Cladding Solutions",
    eyebrow: "Strength. Style. Durability.",
    description:
      "Modern ACP cladding solutions designed to give commercial and residential elevations a clean, contemporary architectural finish.",
    image: acpCladdingSolutions,
    icon: PanelsTopLeft,
    benefits: ["Weather resistant", "Low maintenance", "Wide range of finishes", "Customisable exterior applications"],
    applications: ["Exterior elevations", "Commercial fronts", "Residential facades", "Architectural feature panels"],
    imageAspect: "aspect-[1.5]",
  },
];

export const performanceBenefits = [
  { title: "Noise Insulation", copy: "Reduce unwanted external noise and create quieter interiors.", icon: Volume2 },
  { title: "Energy Efficiency", copy: "Improve everyday thermal comfort with better-sealed openings.", icon: SunMedium },
  { title: "Weather Resistance", copy: "Designed to withstand regular exposure to dust, rain and changing weather.", icon: Wind },
  { title: "Low Maintenance", copy: "Easy-to-maintain surfaces for long-term residential and commercial use.", icon: CheckCircle2 },
  { title: "Security", copy: "Modern locking options and durable construction for added confidence.", icon: ShieldCheck },
  { title: "Modern Design", copy: "Configurations and finishes suited to contemporary architecture.", icon: Award },
];

export const projectImages = [
  { category: "Residential", title: "Window and door systems", image: architecturalImages.about },
  { category: "Commercial", title: "Glass facade concept", image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1300&q=85" },
  { category: "Office", title: "Glass partition applications", image: architecturalImages.office },
  { category: "Sliding Systems", title: "Wide opening aluminium systems", image: architecturalImages.sliding },
  { category: "ACP Cladding", title: "Exterior cladding applications", image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1300&q=85" },
];

export const testimonials = [
  {
    name: "Homeowner",
    quote:
      "The team handled the windows and doors professionally, with a clean finish and a noticeable improvement in indoor comfort.",
  },
  {
    name: "Commercial Client",
    quote:
      "Product quality, installation coordination and final detailing were handled with care from measurement to completion.",
  },
  {
    name: "Verified Customer",
    quote:
      "The new frames feel sturdy and modern, and the rooms are quieter than before. The finishing made a real difference.",
  },
];

export const contactHighlights = [
  { label: "Call", value: contact.displayPhone, icon: Phone, href: `tel:${contact.phone}` },
  { label: "WhatsApp", value: "Chat on WhatsApp", icon: MessageCircle, href: whatsappUrl },
  { label: "Email", value: contact.email, icon: Mail, href: `mailto:${contact.email}` },
  { label: "Website", value: contact.website, icon: Globe2, href: "https://www.gulfupvcindia.com" },
  { label: "Visit", value: "Elathur, Achampudur", icon: MapPin, href: "#location" },
];
