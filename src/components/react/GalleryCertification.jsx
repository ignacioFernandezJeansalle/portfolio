import { useState } from "react";
import { CERTIFICATIONS } from "@/const/certification";

export default function GalleryCertification() {
  const [active, setActive] = useState(0);

  const handleClick = (index) => {
    setActive(index);
  };

  return (
    <article className="mt-10 flex flex-col sm:flex-row items-center sm:items-start sm:justify-center gap-4 p-4 sm:p-10 bg-slate-200 border rounded">
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
      <nav className="flex sm:flex-col gap-2 max-w-[400px] sm:max-w-[80px] md:max-w-[100px] sm:order-1">
        {CERTIFICATIONS.map(({ thumbnail, alt }, index) => (
          <div key={index}>
            <img
              className={` block w-full h-auto aspect-[500/389] rounded cursor-pointer ${
                index === active ? "" : "opacity-50 hover:opacity-100"
              }`}
              src={thumbnail}
              alt={alt}
              onClick={() => handleClick(index)}
              role="button"
            />
          </div>
        ))}
      </nav>
    </article>
  );
}
