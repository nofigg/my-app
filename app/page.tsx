import { projects } from "@/lib/projects"
import ProjectList from "@/components/project-list"

export default function Home() {
  return (
    <main className="space-y-8 sm:space-y-12">
      <section>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
          I build stuff, dream big, and have a knack for turning wild ideas into real change.
        </h1>
        <div className="mb-6 sm:mb-8">
          <p className="text-sm sm:text-base text-muted-foreground mb-2">
            <span className="font-bold text-foreground">My Toolkit:</span> Figma, Sketch, Adobe Creative Suite, HTML, CSS, JavaScript, AI, and&nbsp;much&nbsp;more.
          </p>
        </div>
        <div>
          <a
            href="mailto:nfigueroa06@gmail.com?subject=Inquiry%20from%20Your%20Website&body=Hello%20Nolan,%0D%0A%0D%0AI%20visited%20your%20website%20and%20would%20like%20to%20connect%20with%20you%20about..."
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 sm:px-6 text-sm text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            <span className="font-bold">Email Me</span>
          </a>
        </div>
      </section>
      <ProjectList projects={projects} />
    </main>
  )
}
