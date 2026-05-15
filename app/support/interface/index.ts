
export interface EnquiryPayloadInterface {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  numberOfTravellers: number;
  tripDuration: number;
  plannedArrivalDate: string; // "YYYY-MM-DD"
  message: string;
}