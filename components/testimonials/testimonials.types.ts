export interface Testimonial {
  id: string;

  name: string;

  role: string;

  company: string;

  review: string;

  rating: number;

  avatar: string;

  source:
    | "Upwork"
    | "Facebook"
    | "LinkedIn"
    | "Direct Client"
    | "Google";

  date: string;
}