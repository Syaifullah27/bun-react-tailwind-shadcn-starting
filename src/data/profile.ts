import type { ProfileData } from '../interfaces';
import myprofileImage from '../public/assets/images/my-profile.png';
import luffyImage from '../public/assets/images/luffy-2.jpeg';

export const profileData: ProfileData = {
  name: "SYAIFULLAH",
  description: "Frontend Developer, ",
  image: luffyImage,
  socialMedia: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/syaifullah-a04a19328"
    },
    {
      name: "GitHub",
      url: "https://github.com/syaifullah27"
    },
    {
      name: "Twitter",
      url: "https://x.com/gibran_tweet"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/jokowi/"
    }
  ]
};