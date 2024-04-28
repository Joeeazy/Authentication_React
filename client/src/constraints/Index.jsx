import { Banana } from "lucide-react";
import { Dumbbell } from "lucide-react";
import { Bike } from "lucide-react";
import { TreePalm } from "lucide-react";
import { PersonStanding } from "lucide-react";
import { Waves } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const features = [
  {
    icon: <Bike />,
    text: "Cardio Area:",
    description:
      "Equipped with treadmills, elliptical trainers, stationary bikes, rowing machines, and other cardio equipment.",
  },
  {
    icon: <PersonStanding />,
    text: "Personal Training",
    description:
      "Access to certified personal trainers who can create customized workout plans and provide guidance.",
  },
  {
    icon: <Waves />,
    text: "Swimming Pool",
    description:
      "Some gyms offer indoor pools for swimming laps, aquatic classes, or rehabilitation exercises.",
  },
  {
    icon: <TreePalm />,
    text: "Outdoor Area",
    description:
      "Some gyms offer outdoor spaces for activities like outdoor yoga, boot camps, or functional training.",
  },
  {
    icon: <Dumbbell />,
    text: "Equipment Maintenance",
    description:
      "Regular maintenance and cleaning of equipment to ensure safety and functionality.",
  },
  {
    icon: <Banana />,
    text: "Nutritional Guidance",
    description:
      " Nutrition counseling or workshops to help members make healthy dietary choices.",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Beginner",
    price: "$50",
    features: [
      "Cardio Area",
      "Strength Training Area",
      "Group Exercise Classes",
      "Stretching Zone",
      "Outdoor Area",
    ],
  },
  {
    title: "Intermediate",
    price: "$100",
    features: [
      "Swimming Pool",
      "Locker Rooms",
      "Cafeteria/Juice Bar",
      "Entertainment Options",
      "Plus Beginner facilities",
    ],
  },
  {
    title: "Expert",
    price: "$200",
    features: [
      "Sauna/Steam Room",
      "Personal Training",
      "Health Assessments",
      "Nutritional Guidance",
      "Plus Intermediate and Beginner facilities",
    ],
  },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Nairobi",
    image: user1,
    text: "Thanks to FitSpotter, I've discovered amazing gyms I never knew existed. The variety of classes and flexible booking options make staying fit easier than ever. Highly recommended!",
  },
  {
    user: "Jane Smith",
    company: "Nakuru",
    image: user2,
    text: "FitSpotter helped me find the perfect gym to fit my busy schedule. The booking process was a breeze, and the gym facilities exceeded my expectations. I've never felt more motivated to work out",
  },
  {
    user: "David Johnson",
    company: "Mombasa",
    image: user3,
    text: "FitSpotter made finding a gym in Kenya effortless. From yoga studios to high-tech fitness centers, there's something for everyone. I'm thrilled with the quality and convenience!",
  },
  {
    user: "Ronee Brown",
    company: "Kisumu",
    image: user4,
    text: "FitSpotter exceeded my expectations. The seamless booking process, diverse gym options, and exclusive deals make it the go-to platform for fitness enthusiasts in Kenya. I'm impressed and grateful!",
  },
  {
    user: "Michael Wilson",
    company: "Thika",
    image: user5,
    text: "FitSpotter is a game-changer for fitness enthusiasts like me. The user-friendly platform, reliable bookings, and fantastic gym options have elevated my workout experience. I'm hooked!",
  },
  {
    user: "Emily Davis",
    company: "Kakamega",
    image: user6,
    text: "FitSpotter helped me kickstart my fitness journey with ease. The gym I found through the platform offers top-notch equipment and friendly staff. I feel motivated and excited to work out!",
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
