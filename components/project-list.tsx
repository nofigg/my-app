"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ChevronUp, ChevronDown } from 'lucide-react'
import { Project } from "@/lib/projects"

type SortKey = 'date' | 'type' | 'title';
type SortOrder = 'asc' | 'desc';

interface ProjectListProps {
  projects: Project[]
}

export default function ProjectList({ projects }: ProjectListProps) {
  const router = useRouter();
  const [sortKey, setSortKey] = useState<SortKey>('date');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');

  const sortedProjects = [...projects].sort((a, b) => {
    if (a[sortKey] < b[sortKey]) return sortOrder === 'asc' ? -1 : 1;
    if (a[sortKey] > b[sortKey]) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });

  const toggleSort = (key: SortKey) => {
    if (key === sortKey) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  const SortIcon = ({ columnKey }: { columnKey: SortKey }) => {
    if (sortKey !== columnKey) return null;
    return sortOrder === 'asc' ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />;
  };

  return (
    <div className="overflow-x-auto -mx-4 sm:-mx-6">
      <div className="inline-block min-w-full py-6 align-middle px-4 sm:px-6">
        <h2 className="text-2xl font-bold mb-4 text-left">What Was I Thinkin'</h2>
        <table className="min-w-full text-sm relative">
          <thead>
            <tr className="border-b border-muted">
              <th className="text-left p-2 sm:p-3 text-muted-foreground">
                <button 
                  onClick={() => toggleSort('date')}
                  className="flex items-center hover:text-foreground transition-colors"
                  aria-label={`Sort by date ${sortOrder === 'asc' ? 'descending' : 'ascending'}`}
                >
                  Date
                  <SortIcon columnKey="date" />
                </button>
              </th>
              <th className="text-left p-2 sm:p-3 text-muted-foreground hidden sm:table-cell">
                <button 
                  onClick={() => toggleSort('type')}
                  className="flex items-center hover:text-foreground transition-colors"
                  aria-label={`Sort by type ${sortOrder === 'asc' ? 'descending' : 'ascending'}`}
                >
                  Type
                  <SortIcon columnKey="type" />
                </button>
              </th>
              <th className="text-left p-2 sm:p-3 text-muted-foreground">
                <button 
                  onClick={() => toggleSort('title')}
                  className="flex items-center hover:text-foreground transition-colors"
                  aria-label={`Sort by title ${sortOrder === 'asc' ? 'descending' : 'ascending'}`}
                >
                  Title
                  <SortIcon columnKey="title" />
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedProjects.map((project) => (
              <tr 
                key={project.slug} 
                className="border-b border-muted hover:bg-muted/50 focus-within:bg-muted/50 transition-colors cursor-pointer group"
                onClick={() => router.push(`/${project.slug}`)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    router.push(`/${project.slug}`)
                  }
                }}
                tabIndex={0}
                role="link"
                aria-label={`View ${project.title} project`}
              >
                <td className="text-muted-foreground py-3 px-2 sm:px-3 whitespace-nowrap group-hover:underline group-focus-within:underline relative">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity" />
                  {project.date.split('-')[0]}
                </td>
                <td className="text-muted-foreground py-3 px-2 sm:px-3 hidden sm:table-cell group-hover:underline group-focus-within:underline">{project.type}</td>
                <td className="py-3 px-2 sm:px-3">
                  <span className="font-bold group-hover:underline group-focus-within:underline">
                    {project.title}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
