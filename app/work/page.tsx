import { genPageMetadata } from 'app/seo'
import WorkExperience from '@/components/WorkExperience'

export const metadata = genPageMetadata({ title: 'Work' })

export default function Projects() {
  return (
    <>
      <WorkExperience />
    </>
  )
}
