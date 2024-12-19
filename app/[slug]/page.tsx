import { projects } from "@/lib/projects"
import Link from "next/link"

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug) || projects[0];

  return (
    <article className="prose dark:prose-invert max-w-none mx-auto">
      <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors inline-block mb-4">
        ← Back home
      </Link>
      <h1 className="mt-4 mb-4 text-2xl sm:text-3xl md:text-4xl font-bold">
        {toTitleCase(project.title)}
      </h1>
      <p className="text-muted-foreground mb-4 text-sm sm:text-base">Blog</p>
      
      <h2 className="text-xl sm:text-2xl mt-8 mb-4 font-bold">Project Details</h2>
      <p className="mb-4">{project.content}</p>
      <p className="mb-4">{project.content}</p>
      
      <h3 className="text-lg sm:text-xl mt-6 mb-3 font-bold">Technologies Used</h3>
      <ul className="mb-6 pl-5 list-disc">
        {project.technologies.concat(project.technologies).map((tech, index) => (
          <li key={index} className="mb-1">{tech}</li>
        ))}
      </ul>
      
      <h3 className="text-lg sm:text-xl mt-6 mb-3 font-bold">Challenges</h3>
      <ul className="mb-6 pl-5 list-disc">
        {project.challenges.concat(project.challenges).map((challenge, index) => (
          <li key={index} className="mb-1">{challenge}</li>
        ))}
      </ul>
      
      <h3 className="text-lg sm:text-xl mt-6 mb-3 font-bold">Outcomes</h3>
      <ul className="mb-6 pl-5 list-disc">
        {project.outcomes.concat(project.outcomes).map((outcome, index) => (
          <li key={index} className="mb-1">{outcome}</li>
        ))}
      </ul>

      <h2 className="text-xl sm:text-2xl mt-8 mb-4 font-bold">Additional Insights</h2>
      <p className="mb-4">{project.content}</p>

      <h3 className="text-lg sm:text-xl mt-6 mb-3 font-bold">Key Features</h3>
      <ul className="mb-6 pl-5 list-disc">
        {project.technologies.concat(project.technologies).map((tech, index) => (
          <li key={`feature-${index}`} className="mb-1">Feature related to {tech}</li>
        ))}
      </ul>

      <h3 className="text-lg sm:text-xl mt-6 mb-3 font-bold">Lessons Learned</h3>
      <ul className="mb-6 pl-5 list-disc">
        {project.challenges.concat(project.challenges).map((challenge, index) => (
          <li key={`lesson-${index}`} className="mb-1">Lesson learned from {challenge}</li>
        ))}
      </ul>

      <h3 className="text-lg sm:text-xl mt-6 mb-3 font-bold">Future Improvements</h3>
      <ul className="mb-6 pl-5 list-disc">
        {project.outcomes.concat(project.outcomes).map((outcome, index) => (
          <li key={`improvement-${index}`} className="mb-1">Potential improvement based on {outcome}</li>
        ))}
      </ul>
    </article>
  )
}
