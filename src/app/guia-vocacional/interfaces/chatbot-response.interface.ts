export interface ChatbotResponse {
  data: Data[];
}

export interface Data {
  country?:        string;
  created_at?:     Date;
  form_submission: null;
  id:              string;
  messages:        Message[];
  min_score:       number;
  source:          string;
}

export interface Message {
  role:    Role;
  content: string;
}

export enum Role {
  Assistant = "assistant",
  User = "user",
}

export interface AptitudesVocaciones {
  vocaciones:     string[];
  aptitudes:      string[];
}
