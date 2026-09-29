import { NextIcon } from "@/components/icons";
import { CssFile02Icon, Github01Icon, HtmlFile02Icon, JavaScriptIcon, PhpIcon, ReactIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export const skills = [
  {
    name: "React",
    icon: <HugeiconsIcon icon={ReactIcon} />,
    value: 85,
  },
  {
    name: "Next.js",
    icon: <NextIcon />,
    value: 90,
  },
  {
    name: "GitHub",
    icon: <HugeiconsIcon icon={Github01Icon} />,
    value: 80,
  },
  {
    name: "JavaScript",
    icon: <HugeiconsIcon icon={JavaScriptIcon} />,
    value: 90,
  },
  {
    name: "PHP",
    icon: <HugeiconsIcon icon={PhpIcon} />,
    value: 45,
  },
  {
    name: "HTML",
    icon: <HugeiconsIcon icon={HtmlFile02Icon} />,
    value: 90,
  },
  {
    name: "CSS",
    icon: <HugeiconsIcon icon={CssFile02Icon} />,
    value: 60,
  },
];
