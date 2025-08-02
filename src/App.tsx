import "@/public/styles/globals.css";
import { ProfileCard, RegistrationForm } from "./components/shared";
import { profileData } from "./data";
import { useState } from "react";
import { Toaster } from "sonner";

export function App() {
  const [showRegistration, setShowRegistration] = useState(false);
  return (
    // <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 p-4">
    //   <ProfileCard
    //     name={profileData.name}
    //     description={profileData.description}
    //     image={profileData.image}
    //     socialMedia={profileData.socialMedia}
    //   />
    // </div>

      <div className="min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <div className="flex space-x-4 bg-white p-2 rounded-full shadow-md">
            <button
              onClick={() => setShowRegistration(false)}
              className={`px-6 py-2 rounded-full transition-colors ${
                !showRegistration 
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Profile Card
            </button>
            <button
              onClick={() => setShowRegistration(true)}
              className={`px-6 py-2 rounded-full transition-colors ${
                showRegistration 
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Registration Form
            </button>
          </div>
        </div>

        {showRegistration ? (
          <RegistrationForm />
        ) : (
          <div className="flex justify-center">
            <ProfileCard
              name={profileData.name}
              description={profileData.description}
              image={profileData.image}
              socialMedia={profileData.socialMedia}
            />
          </div>
        )}
      </div>
      <Toaster position="top-right" richColors expand={true} />
    </div>



  );
}

export default App;
