import { useState } from "react";

const CERTIFICATIONS = [
  {
    src: "/img/certifications/202212 Coderhouse - Frontend React Js.webp",
    alt: "Certificado Coderhouse Carrera Frontend React Js - Clasificación Top 10",
    thumbnail: "/img/certifications/202212 Coderhouse - Frontend React Js-thumbnail.webp",
  },
  {
    src: "/img/certifications/202211 Coderhouse - React Js.webp",
    alt: "Certificado Coderhouse React Js - Clasificación Top 10",
    thumbnail: "/img/certifications/202211 Coderhouse - React Js-thumbnail.webp",
  },
  {
    src: "/img/certifications/202209 Coderhouse - Javascript.webp",
    alt: "Certificado Coderhouse Javascript - Clasificación Top 10",
    thumbnail: "/img/certifications/202209 Coderhouse - Javascript-thumbnail.webp",
  },
  {
    src: "/img/certifications/202207 Coderhouse - Desarrollo web.webp",
    alt: "Certificado Coderhouse Desarrollo Web - Clasificación Top 10",
    thumbnail: "/img/certifications/202207 Coderhouse - Desarrollo web-thumbnail.webp",
  },
];

export default function GalleryCertification() {
  const [active, setActive] = useState(0);

  const handleClick = (index) => {
    setActive(index);
  };

  return (
    <article className="mt-10 flex flex-col sm:flex-row items-center sm:items-start sm:justify-center gap-4 p-4 sm:p-10 bg-gray-900/60 border border-gray-700 rounded-md">
      <div className="sm:order-2">
        {
          <img
            key={active}
            className="w-[500px] h-full aspect-[500/389] rounded animate-load-image"
            src={CERTIFICATIONS[active].src}
            alt={CERTIFICATIONS[active].alt}
          />
        }
      </div>
      <nav className="flex sm:flex-col gap-2 max-w-[500px] sm:max-w-[80px] md:max-w-[100px] sm:order-1">
        {CERTIFICATIONS.map(({ thumbnail, alt }, index) => (
          <img
            key={index}
            className={`w-full h-auto aspect-[500/389] rounded cursor-pointer ${
              index === active ? "" : "opacity-50 hover:opacity-100"
            }`}
            src={thumbnail}
            alt={alt}
            onClick={() => handleClick(index)}
            role="button"
          />
        ))}
      </nav>
    </article>
  );
}
