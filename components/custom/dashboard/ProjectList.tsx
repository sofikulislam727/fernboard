"use client"

import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Clock3, Search } from "lucide-react"
import { useState } from "react"

const projects = [
  {
    name: "Website refresh",
    description: "Plan and shape the next version of the website.",
    category: "Design",
    updatedAt: "Updated today",
    accent: "bg-sky-100 dark:bg-sky-950/50",
    blocks: ["bg-sky-300", "bg-indigo-200", "bg-white dark:bg-slate-800"],
    initials: ["JD", "MK", "AL"],
  },
  {
    name: "Product launch",
    description: "Keep launch tasks, content, and timelines together.",
    category: "Marketing",
    updatedAt: "Updated yesterday",
    accent: "bg-amber-100 dark:bg-amber-950/40",
    blocks: ["bg-amber-300", "bg-orange-200", "bg-white dark:bg-slate-800"],
    initials: ["AL", "SR"],
  },
  {
    name: "Ideas & inspiration",
    description: "A place to collect references and early ideas.",
    category: "Ideas",
    updatedAt: "Updated Oct 10",
    accent: "bg-fuchsia-100 dark:bg-fuchsia-950/40",
    blocks: ["bg-fuchsia-300", "bg-pink-200", "bg-white dark:bg-slate-800"],
    initials: ["MK", "JD"],
  },
]

const ProjectList = () => {
  const [query, setQuery] = useState("")
  const filteredProjects = projects.filter((project) =>
    `${project.name} ${project.description} ${project.category}`
      .toLowerCase()
      .includes(query.trim().toLowerCase())
  )

  return (
    <section aria-labelledby="projects-heading" className="space-y-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 id="projects-heading" className="text-xl font-semibold tracking-tight">
            Your boards
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Pick up where you left off or explore a project.
          </p>
        </div>

        <label className="relative block w-full sm:max-w-xs">
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            aria-label="Search boards"
            className="h-10 rounded-lg bg-card pl-9"
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search boards..."
            type="search"
            value={query}
          />
        </label>
      </div>

      {filteredProjects.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <Card
              key={project.name}
              className="group gap-0 rounded-xl border border-border/70 py-0 shadow-none transition-colors hover:border-primary/30 hover:shadow-sm"
            >
              <div
                aria-hidden="true"
                className={`relative h-36 overflow-hidden border-b border-border/60 p-4 ${project.accent}`}
              >
                <div className="absolute left-5 top-5 w-[62%] rounded-lg border border-black/5 bg-white/90 p-3 shadow-sm dark:border-white/10 dark:bg-card/95">
                  <div className="mb-3 flex items-center gap-1.5">
                    <span className={`size-2 rounded-full ${project.blocks[0]}`} />
                    <span className="h-1.5 w-14 rounded-full bg-muted-foreground/20" />
                  </div>
                  <div className="space-y-2">
                    <span className="block h-2 w-4/5 rounded-full bg-muted" />
                    <span className="block h-2 w-3/5 rounded-full bg-muted" />
                  </div>
                </div>
                <div className="absolute right-5 top-9 grid w-16 gap-2">
                  <span className={`h-8 rounded-md ${project.blocks[1]}`} />
                  <span className={`h-8 rounded-md ${project.blocks[2]}`} />
                </div>
              </div>

              <div className="space-y-3 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="truncate text-sm font-semibold text-card-foreground">
                      {project.name}
                    </h3>
                    <p className="mt-1 line-clamp-2 min-h-10 text-xs leading-5 text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-md bg-secondary px-2 py-1 text-[11px] font-medium text-secondary-foreground">
                    {project.category}
                  </span>
                </div>

                <div className="flex items-center justify-between border-t border-border/70 pt-3">
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock3 aria-hidden="true" className="size-3.5" />
                    {project.updatedAt}
                  </span>
                  <div
                    aria-label={`${project.initials.length} collaborators`}
                    className="flex -space-x-2"
                  >
                    {project.initials.map((initials) => (
                      <span
                        key={initials}
                        className="flex size-7 items-center justify-center rounded-full border-2 border-card bg-muted text-[9px] font-semibold text-muted-foreground"
                      >
                        {initials}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-border bg-card/50 px-6 py-12 text-center">
          <p className="text-sm font-medium">No boards match “{query}”</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Try searching with a different name or category.
          </p>
        </div>
      )}
    </section>
  )
}

export default ProjectList
