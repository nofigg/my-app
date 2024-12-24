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

  return (
    <div className="space-y-8">
      <div className="pb-4">
        <Link
          href="/"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back to Projects
        </Link>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold tracking-tight">{toTitleCase(project.title)}</h1>
        </div>
        <p className="text-muted-foreground">{project.description}</p>
      </div>

      {project.slug === 'cad-services-logo' && (
        <div className="relative w-full aspect-[2/1] bg-white">
          <Image
            src="/projects/cad-logo.png"
            alt="CAD Services Logo"
            fill
            className="object-cover w-full h-full"
            priority
          />
        </div>
      )}

      {project.slug === 'maze-runner-game' && (
        <div className="relative w-full aspect-square bg-[#b366ff] rounded-lg overflow-hidden mb-8">
          <Image
            src="/projects/maze-runner.png"
            alt="Maze Runner Game Screenshot"
            layout="responsive"
            width={800}
            height={800}
            className="object-contain"
            priority
          />
        </div>
      )}

      <div className="prose prose-gray max-w-none dark:prose-invert">
        <div className="space-y-4" dangerouslySetInnerHTML={{ 
          __html: project.content.split('\n\n').map(paragraph => 
            paragraph.startsWith('•') 
              ? `<li class="list-none my-4"><span class="text-primary">${paragraph}</span></li>`
              : paragraph === 'Gameplay'
                ? `<h2 class="text-xl font-semibold mt-8 mb-2">${paragraph}</h2>`
              : paragraph.startsWith('Check it out:') 
                ? `<h3 class="font-semibold text-lg mt-8 mb-4">${paragraph}</h3>`
                : `<p>${paragraph}</p>`
          ).join('')
          .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-primary/90 underline">$1</a>')
        }} />

        {project.technologies && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="badge inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {project.challenges && project.challenges.length > 0 && (
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
      )}

      {project.outcomes && project.outcomes.length > 0 && (
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
      )}

      {project.slug === 'maze-runner-game' && (
        <div className="text-sm text-muted-foreground italic text-center">
          This game was inspired by and created for my son, Levi, combining his love for rockets and colorful adventures.
        </div>
      )}

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
