import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { Card, CardContent, CardHeader, CardFooter, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useRegistrationForm } from '@/hooks/useRegistrationForm';
import type { RegistrationFormData } from '@/interfaces';

const RegistrationForm = () => {
  const {
    formData,
    showNotes,
    submittedData,
    setShowNotes,
    handleChange,
    handleLearningPathChange,
    handleSubmit
  } = useRegistrationForm();

  const handleFormSubmit = (e: React.FormEvent) => {
    const data = handleSubmit(e);
    toast.success('Registration successful!', {
      description: `Welcome ${data.fullName || 'new student'}!`,
      action: {
        label: 'View',
        onClick: () => {
          const element = document.getElementById('submitted-data');
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  };

  const learningPaths = ['Frontend', 'Backend', 'DevOps', 'UI/UX'] as const;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="bg-gradient-to-br from-indigo-50 to-purple-100 rounded-2xl shadow-xl border-0">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center text-gray-800">
              Bootcamp Registration
            </CardTitle>
            <CardDescription className="text-center text-gray-600">
              Join our intensive learning program
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => handleChange('fullName', e.target.value)}
                  onFocus={() => console.log('Full Name focused')}
                  onBlur={() => console.log('Full Name blurred')}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  onFocus={() => console.log('Email focused')}
                  onBlur={() => console.log('Email blurred')}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleChange('password', e.target.value)}
                  onFocus={() => console.log('Password focused')}
                  onBlur={() => console.log('Password blurred')}
                  placeholder="Create a strong password"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Age */}
                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                    Age
                  </label>
                  <Input
                    id="age"
                    type="number"
                    value={formData.age}
                    onChange={(e) => handleChange('age', parseInt(e.target.value))}
                    onFocus={() => console.log('Age focused')}
                    onBlur={() => console.log('Age blurred')}
                    min={18}
                    max={100}
                    required
                  />
                </div>

                {/* Birthdate */}
                <div>
                  <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700 mb-1">
                    Birthdate
                  </label>
                  <Input
                    id="birthdate"
                    type="date"
                    value={formData.birthdate}
                    onChange={(e) => handleChange('birthdate', e.target.value)}
                    onFocus={() => console.log('Birthdate focused')}
                    onBlur={() => console.log('Birthdate blurred')}
                    required
                  />
                </div>
              </div>

              {/* Gender */}
              <div>
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                  Gender
                </label>
                <Select
                  id="gender"
                  value={formData.gender}
                  onChange={(e) => handleChange('gender', e.target.value as RegistrationFormData['gender'])}
                  onFocus={() => console.log('Gender focused')}
                  onBlur={() => console.log('Gender blurred')}
                  required
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </Select>
              </div>

              {/* Learning Path */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Learning Path
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {learningPaths.map((path) => (
                    <Checkbox
                      key={path}
                      id={`path-${path}`}
                      label={path}
                      checked={formData.learningPath.includes(path)}
                      onChange={() => handleLearningPathChange(path)}
                    />
                  ))}
                </div>
              </div>

              {/* Add Notes? */}
              <div className="pt-2">
                <Checkbox
                  id="addNotes"
                  label="Add Notes?"
                  checked={showNotes}
                  onChange={() => setShowNotes(!showNotes)}
                />
              </div>

              {/* Notes (Conditional) */}
              {showNotes && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                >
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Notes
                  </label>
                  <Textarea
                    id="notes"
                    value={formData.notes || ''}
                    onChange={(e) => handleChange('notes', e.target.value)}
                    onFocus={() => console.log('Notes focused')}
                    onBlur={() => console.log('Notes blurred')}
                    placeholder="Any special requirements or notes..."
                    rows={3}
                  />
                </motion.div>
              )}

              <CardFooter className="flex justify-center p-0 pt-4">
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-md shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
                >
                  Register Now
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </motion.div>

      {/* Submitted Data */}
      {submittedData.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8"
          id="submitted-data"
        >
          <Card className="bg-gradient-to-br from-indigo-50 to-purple-100 rounded-2xl shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center text-gray-800">
                Registered Participants
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {submittedData.map((data, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-4 rounded-lg shadow"
                  >
                    <pre className="text-sm overflow-x-auto">
                      {JSON.stringify(data, null, 2)}
                    </pre>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
};

export default RegistrationForm;