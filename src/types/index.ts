export interface Service {
  id: string;
  title: string;
  description: string;
  deliverables: string;
  icon?: React.ReactNode;
}

export interface Testimonial {
  id: string;
  content: string;
  author: string;
  position: string;
  company: string;
  avatar?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  avatar?: string;
  linkedIn?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  company: string;
  message: string;
}
