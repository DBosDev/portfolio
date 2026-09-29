import { Card } from "@heroui/card";
import { Spacer } from "@heroui/spacer";
import { useTranslations } from "next-intl";

import { normalText, subtitle, title } from "@/components/primitives";
import SkillsBar from "@/components/skillsBar";
import { HugeiconsIcon } from "@hugeicons/react";
import { CssFile02Icon, Github01Icon, HtmlFile02Icon, JavaScriptIcon, PhpIcon, ReactIcon } from "@hugeicons/core-free-icons";
import { NextIcon } from "@/components/icons";
import { skills } from "@/data/skills";

export default function AboutPage() {
  const t = useTranslations("About");

  return (
    <div>
      <h1 className={title()}>{t("title")}</h1>

      <Card className="mt-6 p-6">
        <h2 className={subtitle()}>{t("sd")}</h2>
        <p className={normalText({ size: "sm" })}>{t("about_sd")}</p>
        <Spacer y={6} />

        <h2 className={subtitle()}>{t("hobbies")}</h2>
        <p className={normalText({ size: "sm" })}>{t("about_hobbies")}</p>
        <Spacer y={6} />

        <h2 className={subtitle()}>{t("skills")}</h2>
        <p className={normalText({ size: "sm" })}>{t("about_skills")}</p>

        <div className="mt-2">
          {skills.map((skill) => (
            <SkillsBar
              key={skill.name}
              skill={skill.name}
              icon={skill.icon}
              value={skill.value}
            />
          ))}
        </div>
      </Card >
    </div >
  );
}
