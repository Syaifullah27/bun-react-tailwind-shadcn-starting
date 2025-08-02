import { useState } from 'react';
import type { RegistrationFormData } from '@/interfaces';

export const useRegistrationForm = () => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: '',
    email: '',
    password: '',
    age: 18,
    birthdate: '',
    gender: 'Male',
    learningPath: [],
    notes: ''
  });
  
  const [showNotes, setShowNotes] = useState(false);
  const [submittedData, setSubmittedData] = useState<RegistrationFormData[]>([]);

  const handleChange = (field: keyof RegistrationFormData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleLearningPathChange = (path: RegistrationFormData['learningPath'][0]) => {
    setFormData(prev => {
      const newPaths = prev.learningPath.includes(path)
        ? prev.learningPath.filter(p => p !== path)
        : [...prev.learningPath, path];
      
      return { ...prev, learningPath: newPaths };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedData([...submittedData, formData]);
    
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      password: '',
      age: 18,
      birthdate: '',
      gender: 'Male',
      learningPath: [],
      notes: ''
    });
    setShowNotes(false);
    
    return formData;
  };

  return {
    formData,
    showNotes,
    submittedData,
    setShowNotes,
    handleChange,
    handleLearningPathChange,
    handleSubmit
  };
};