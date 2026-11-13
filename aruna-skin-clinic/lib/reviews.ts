export type PatientReview = {
  id: string;
  quote: string;
  author: string;
  context?: string;
};

// Add only genuine feedback supplied by patients and approved for publication.
// Do not publish identifiable health details or imply a typical medical outcome.
export const patientReviews = [
  {
    id: "review-1",
    author: "Patient 1",
    context: "Verified patient",
    quote: "Actual approved patient feedback."
  },
  {
    id: "review-2",
    author: "Patient 2",
    context: "Verified patient",
    quote: "Actual approved patient feedback."
  },
  {
    id: "review-3",
    author: "Patient 3",
    context: "Verified patient",
    quote: "Actual approved patient feedback."
  },
  {
    id: "review-4",
    author: "Patient 4",
    context: "Verified patient",
    quote: "Actual approved patient feedback."
  }
];
