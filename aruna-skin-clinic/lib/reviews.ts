export type PatientReview = {
  id: string;
  quote: string;
  author: string;
  context?: string;
};

// Add only genuine feedback supplied by patients and approved for publication.
// Do not publish identifiable health details or imply a typical medical outcome.
export const patientReviews: PatientReview[] = [];
