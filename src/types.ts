export interface RSVPData {
  nombreCompleto: string;
  cantidadInvitados: string; // Keep as string for empty placeholder/uncontrolled flexibility
  asistira: 'si' | 'no' | null;
  mensaje: string;
}

export interface GuestPhoto {
  id: string;
  url: string;
  timestamp: string;
  caption?: string;
}

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isOver: boolean;
}
