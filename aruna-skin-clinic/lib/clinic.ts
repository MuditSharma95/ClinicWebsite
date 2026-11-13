export const clinic = {
  name: "Aruna Skin Clinic",
  doctor: "Dr. Sachin Goyal",
  qualification: "MBBS, MD (DVL)",
  specialties: "Dermatology | Venereology | Leprosy & Dermatosurgery",
  city: "Khatima, Uttarakhand",
  // Confirm this is still the clinic's WhatsApp number before launch.
  whatsappNumber: "917010501030",
  displayPhone: "+91 70105 01030",
  // Address and timings transcribed from the clinic information poster; verify before launch.
  address: "टनकपुर रोड, ओम हॉस्पिटल के पास",
  hours: "प्रतिदिन सुबह 10:00 बजे से रात 8:00 बजे तक",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Aruna+Skin+Clinic%2C+Tanakpur+Road%2C+near+Om+Hospital%2C+Khatima%2C+Uttarakhand",
  // Add the clinic's approved logo at public/images/logo.svg.
  logoPath: "/images/logo.svg",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${clinic.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
