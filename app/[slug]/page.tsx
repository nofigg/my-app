import { projects } from "@/lib/projects"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { format } from "date-fns"

function toTitleCase(str: string) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound()
  }

  const date = new Date(project.date);
  const formattedDate = format(date, 'MMM yyyy');

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold tracking-tight">{toTitleCase(project.title)}</h1>
          <time className="text-sm text-muted-foreground" dateTime={project.date}>
            {formattedDate}
          </time>
        </div>
        <p className="text-muted-foreground">{project.description}</p>
      </div>

      {project.slug === 'cad-services-logo' && (
        <div className="relative w-full aspect-[2/1] bg-white -mx-4 sm:-mx-6 rounded-none sm:rounded-lg overflow-hidden">
          <Image
            src="/projects/cad-logo.png"
            alt="CAD Services Logo"
            fill
            className="object-contain p-4 sm:p-8"
            priority
          />
        </div>
      )}

      <div className="prose prose-gray max-w-none dark:prose-invert">
        {project.content}
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Technologies Used</h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <div
              key={tech}
              className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Challenges</h2>
        <ul className="list-disc list-inside space-y-2">
          {project.challenges.map((challenge, index) => (
            <li key={index} className="text-muted-foreground">
              {challenge}
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Outcomes</h2>
        <ul className="list-disc list-inside space-y-2">
          {project.outcomes.map((outcome, index) => (
            <li key={index} className="text-muted-foreground">
              {outcome}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-center pt-8">
        <Link
          href="/"
          className="inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90"
        >
          ← Back to Projects
        </Link>
      </div>
    </div>
  )
}
