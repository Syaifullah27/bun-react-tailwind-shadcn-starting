import { ProfileCard } from '@/components/shared'
import { profileData } from '@/data'
import React from 'react'

const Profilepage = () => {
    
    return (
        <div className=' flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900'>
            <ProfileCard name={profileData.name} description={profileData.description} image={profileData.image} socialMedia={profileData.socialMedia} />
        </div>
    )
}

export default Profilepage