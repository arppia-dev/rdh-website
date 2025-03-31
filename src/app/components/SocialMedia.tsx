import { faFacebookF, faPinterest, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Suspense } from 'react'
// import configPromise from '@payload-config'
// import { getPayload } from 'payload'

export default function SocialMedia() {
  // const payload = await getPayload({ config: configPromise })

  /*const socialMedias = await payload.find({
    collection: 'social-media',
    overrideAccess: false,
    select: {
      name: true,
      link: true,
    },
  })*/

  return (
    <Suspense>
      <div className="flex items-center gap-5">
        <a href="#" className="hover:text-gray-300">
          <FontAwesomeIcon icon={faFacebookF} className="h-4 w-4" />
        </a>
        <a href="#" className="hover:text-gray-300">
          <FontAwesomeIcon icon={faTwitter} className="h-4 w-4" />
        </a>
        <a href="#" className="hover:text-gray-300">
          <FontAwesomeIcon icon={faYoutube} className="h-4 w-4" />
        </a>
        <a href="#" className="hover:text-gray-300">
          <FontAwesomeIcon icon={faPinterest} className="h-4 w-4" />
        </a>
      </div>
    </Suspense>
  )
}
