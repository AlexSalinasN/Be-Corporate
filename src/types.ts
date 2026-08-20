export interface SystemStage {
  n: string;
  name: string;
  desc: string;
  deliverable: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
}

export interface LeadFormData {
  nombre: string;
  email: string;
  empresa: string;
  cargo: string;
  telefono: string;
  participantes: string;
  desafioPrincipal: string;
  fecha?: string;
  hora?: string;
}
