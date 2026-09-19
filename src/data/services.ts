export type ClinicService = {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  src: string;
  alt: string;
};

export const services: ClinicService[] = [
  {
    id: "1",
    title: "General Dentistry",
    shortTitle: "General Care",
    description:
      "Routine examinations, cleanings, fillings, and preventive care designed to keep your oral health on track.",

    src: "https://images.unsplash.com/photo-1667133295352-ef4c83620e8e?q=80&w=729&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "general-dentistry",
  },
  {
    id: "2",
    title: "Cosmetic Dentistry",
    shortTitle: "Cosmetic Care",
    description:
      "Thoughtful aesthetic treatments that improve the appearance of your smile while keeping results natural.",
    src: "https://plus.unsplash.com/premium_photo-1661436629100-ba3c5ea70514?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "cosmetic-dentistry",
  },
  {
    id: "3",
    title: "Dental Implants",
    shortTitle: "Implants",
    description:
      "Modern implant solutions designed to restore missing teeth with stability, function, and a natural appearance.",
    src: "https://images.unsplash.com/photo-1593022356769-11f762e25ed9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "dental-implants",
  },
  {
    id: "4",
    title: "Orthodontics",
    shortTitle: "Alignment",
    description:
      "Personalised approaches to improve tooth alignment, bite function, and long-term oral health.",
    src: "https://images.unsplash.com/photo-1720685193975-3b449a7cb905?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "orthodontics",
  },
  {
    id: "5",
    title: "Oral Screening",
    shortTitle: "Screening",
    description:
      "Detailed examinations to identify dental problems early and create an appropriate treatment plan.",

    src: "https://images.unsplash.com/photo-1667133295315-820bb6481730?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "oral screening",
  },
  {
    id: "6",
    title: "Gum Care",
    shortTitle: "Periodontal Care",
    description:
      "Preventive and therapeutic care for healthy gums and the supporting structures around your teeth.",
    src: "https://images.unsplash.com/photo-1664529845836-433c172142ca?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "gum-care",
  },
  {
    id: "7",
    title: "Teeth Whitening",
    shortTitle: "Whitening",
    description:
      "Professional whitening treatments designed to brighten your smile while maintaining a natural appearance.",
    src: "https://images.unsplash.com/photo-1655807946138-811bb2340d34?q=80&w=971&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "professional teeth whitening treatment",
  },
  {
    id: "8",
    title: "Root Canal Treatment",
    shortTitle: "Root Canal",
    description:
      "Treatment for infected or damaged teeth focused on relieving discomfort and preserving the natural tooth.",
    src: "https://images.unsplash.com/photo-1777793389944-f7165259a05c?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "root canal dental treatment",
  },
  {
    id: "9",
    title: "Smile Makeover",
    shortTitle: "Smile Design",
    description:
      "A personalised combination of cosmetic and restorative treatments planned around your smile.",
    src: "https://images.unsplash.com/photo-1769559893692-c6d0623bf8e4?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "smile makeover dental treatment",
  },
];
