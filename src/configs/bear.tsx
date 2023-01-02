import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "i-fa-solid:paw",
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: "i-la:dragon",
        excerpt: "Un apasionado desarrollador de software..."
      },
      {
        id: "github-stats",
        title: "Github Stats",
        file: "markdown/github-stats.md",
        icon: "i-icon-park-outline:github",
        excerpt: "Aquí hay algunos estados sobre mi cuenta de github..."
      },
      {
        id: "about-site",
        title: "About This Site",
        file: "markdown/about-site.md",
        icon: "i-octicon:browser",
        excerpt: "Algo sobre este sitio de portafolio personal..."
      }
    ]
  },
  {
    id: "project",
    title: "Projects",
    icon: "i-octicon:repo",
    md: [
      {
        id: "ghm",
        title: "GHM",
        file: "https://raw.githubusercontent.com/alanmgg/GHM/main/README.md",
        icon: "i-heroicons-solid:truck",
        excerpt: "Grupo Hospitalario de México...",
        link: "https://github.com/alanmgg/GHM"
      }
    ]
  }
];

export default bear;
