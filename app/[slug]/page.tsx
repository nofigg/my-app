import { projects } from "@/lib/projects"
import Link from "next/link"
import { notFound } from "next/navigation"

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
    notFound();
  }

  return (
    <article className="prose dark:prose-invert max-w-none mx-auto">
      <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors inline-block mb-4">
        ← Back home
      </Link>
      <h1 className="mt-4 mb-4 text-2xl sm:text-3xl md:text-4xl font-bold">
        {toTitleCase(project.title)}
      </h1>
      <div className="flex items-center gap-3 text-muted-foreground mb-4 text-sm sm:text-base">
        <span>{project.type}</span>
        <span>•</span>
        <time dateTime={project.date}>
          {new Date(project.date).toLocaleDateString('en-US', { 
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </time>
      </div>
      
      <h2 className="text-xl sm:text-2xl mt-8 mb-4 font-bold">Project Details</h2>
      <p className="mb-4">{project.description}</p>
      <p className="mb-4">{project.content}</p>
      
      <h3 className="text-lg sm:text-xl mt-6 mb-3 font-bold">Technologies Used</h3>
      <ul className="mb-6 pl-5 list-disc">
        {project.technologies.map((tech, index) => (
          <li key={`${tech}-${index}`} className="mb-1">{tech}</li>
        ))}
      </ul>
      
      <h3 className="text-lg sm:text-xl mt-6 mb-3 font-bold">Challenges</h3>
      <ul className="mb-6 pl-5 list-disc">
        {project.challenges.map((challenge, index) => (
          <li key={`${challenge}-${index}`} className="mb-1">{challenge}</li>
        ))}
      </ul>
      
      <h3 className="text-lg sm:text-xl mt-6 mb-3 font-bold">Outcomes</h3>
      <ul className="mb-6 pl-5 list-disc">
        {project.outcomes.map((outcome, index) => (
          <li key={`${outcome}-${index}`} className="mb-1">{outcome}</li>
        ))}
      </ul>
    </article>
  )
}
