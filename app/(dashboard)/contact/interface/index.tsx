export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  numberOfTravellers?: number;
  tripDuration?: number;
  plannedArrivalDate?: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
  status: string;
}

export interface ContactResponse {
  status: boolean;
  message: string;
  data: Contact | null;
}

export interface ContactListResponse {
  status: boolean;
  message: string;
  data: Contact[] | null;
}