import { Project } from "@/models/projects"
import ProjectCard from "./projectCard"

export default function ProjectsTree({projects}: {projects: Project[]}) {
    return (
        <div className="projectsTree">
            {projects.map((project, index) => {
                return (
                    <div key={index}>
                        <ProjectCard title={project.name} gitlink={project.gitlink} translations={project.translations}
                            image={project.image} />
                    </div>
                )
            })}
        </div>
    )
}