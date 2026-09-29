import { useTranslations } from "next-intl";
import { title } from "@/components/primitives";
import ProjectsTree from "@/components/projects/projectsTree";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  const t = useTranslations("Projects");

  return (
    <div>
      <h1 className={title()}>{t("title")}</h1>

      <ProjectsTree projects={projects} />
    </div>
  );
}
