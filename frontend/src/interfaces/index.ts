export interface Candidate {
  id: string;
  name: string;
  document: number;
  "cv_zonajobs": string;
  "cv_bumeran": string;
  phone: string;
  email: string;
  date: string;
  age: number;
  "has_university": string;
  career: string;
  graduated: string;
  "courses_approved": string;
  location: string;
  "accepts_working_hours": string;
  "desired_salary": string;
  "had_interview": string;
  reason: string
}

export interface CandidatesContextData {
  candidates: Candidate[];
  availableReasons: string[];
  handleCandidateUpdate: (id: string, reason: string) => Promise<void>;
}

export interface ColumnsContextData {
  columns: string[];
  availableColumns: string[];
  handleColumnsUpdate: (columns: string[]) => Promise<void>;
}
