import "@/public/styles/globals.css";
import { ProfileCard } from "./components/shared";
import { profileData } from "./data";

export function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 p-4">
      <ProfileCard
        name={profileData.name}
        description={profileData.description}
        image={profileData.image}
        socialMedia={profileData.socialMedia}
      />
    </div>
  );
}

export default App;
