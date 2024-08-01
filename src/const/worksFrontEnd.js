import { TAGS } from "@/const/tags";

export const FRONTEND_WORKS = [
  {
    position: "Desarrollo web",
    company: "Atlántida Diving School",
    date: "[01.2024 - Presente]",
    description: `<span class="text-emphasis">Refactorización del sitio y mantenimiento.</span> La primera versión la realicé de manera autodidacta en el año 2019 utilizando HTML, CSS, JavaScript y PHP.<br /> En esta ocasión, me concentré en optimizar el rendimiento, semántica, accesibilidad y SEO.`,
    descriptionImg: "/img/mockups/atlantida-diving-school-lighthouse.webp",
    descriptionImgAlt: "Resultado de la evaluación de Lighthouse en Chrome",
    tags: [TAGS.ASTRO, TAGS.HTML, TAGS.CSS, TAGS.SASS, TAGS.JAVASCRIPT, TAGS.TYPESCRIPT],
    thumbnail: "/img/mockups/atlantida-diving-school.webp",
    thumbnailAlt: "Captura de pantalla de la web de Atlántida Diving School",
    repository: "https://github.com/ignacioFernandezJeansalle/web-atlantida-diving-school",
    deploy: "https://www.divingschool.com.ar/",
  },
  {
    position: "Desarrollo web",
    company: "Sobrenatural Nutrición",
    date: "[12.2022 - 01.2023]",
    description: `<span class="text-emphasis">Premio por TOP 10 en el curso de Desarrollo web de Coderhouse.</span> Realizamos el proyecto en equipo junto a alumnos de otros cursos de PM y UX/UI.`,
    descriptionImg: "",
    descriptionImgAlt: "",
    tags: [TAGS.HTML, TAGS.CSS, TAGS.SASS, TAGS.BOOTSTRAP, TAGS.JAVASCRIPT],
    thumbnail: "/img/mockups/sobrenatural-nutricion.webp",
    thumbnailAlt: "Captura de pantalla de la web de Sobrenatural Nutrición",
    repository: "https://github.com/ignacioFernandezJeansalle/web-sobrenatural",
    deploy: "https://ignaciofernandezjeansalle.github.io/web-sobrenatural/",
  },
];
