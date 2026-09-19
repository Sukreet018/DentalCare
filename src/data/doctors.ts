export type Doctor = {
  id: string;
  name: string;
  specialty: string;
  qualifications: string;
  experience: string;
  image: string;
  description: string;
};

export const doctors: Doctor[] = [
  {
    id: "dr-marshal-pentecost",
    name: "Dr. Marshal Pentecost",
    specialty: "Consultant Dentist",
    qualifications: "BDS, MDS",
    experience: "12+ years experience",
    image:
      "https://images.unsplash.com/photo-1667133295308-9ef24f71952e?q=80&w=757&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Focused on preventive, restorative, and patient-centred dental care with a calm clinical approach.",
  },
  {
    id: "dr-raleigh-becket",
    name: "Dr. Raleigh Becket",
    specialty: "Cosmetic & Restorative Dentist",
    qualifications: "BDS, MDS",
    experience: "10+ years experience",
    image:
      "https://images.unsplash.com/photo-1674775372058-c4c8813c6611?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Specialising in aesthetic dentistry, restorative treatments, and creating natural-looking smiles.",
  },
];