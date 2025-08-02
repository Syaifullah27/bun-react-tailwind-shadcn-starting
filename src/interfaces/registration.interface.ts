export interface RegistrationFormData {
  fullName: string;
  email: string;
  password: string;
  age: number;
  birthdate: string;
  gender: 'Male' | 'Female' | 'Other';
  learningPath: ('Frontend' | 'Backend' | 'DevOps' | 'UI/UX')[];
  notes?: string;
}

export type FormField = keyof RegistrationFormData;