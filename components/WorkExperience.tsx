import experienceData from '@/data/work/experience'
import Link from './Link'

const Card = ({ title, description, company, window, location, companyHref }) => (
  <div className="py-4">
    <div className="overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700">
      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">{title}</h2>
        <div className="flex flex-wrap flex-row justify-between">
          <Link href={companyHref} aria-label={`Link to ${title}`}>
            <span className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">
              {company} | {location}
            </span>
          </Link>
          <span>{description}</span>
          <span className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{window}</span>
        </div>
      </div>
    </div>
  </div>
)

export default function WorkExperience() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h2 className="text-2xl font-bold leading-8 tracking-tight">Professional Journey</h2>
        </div>
        <div className="container py-6">
          {experienceData.map((d) => (
            <Card
              key={d.title}
              title={d.title}
              description={d.description}
              company={d.company}
              location={d.location}
              window={d.window}
              companyHref={d.companyHref}
            />
          ))}
        </div>
      </div>
    </>
  )
}
