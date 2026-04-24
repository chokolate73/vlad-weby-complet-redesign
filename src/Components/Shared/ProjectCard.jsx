import Link from "next/link";
import Image from "next/image";
import React from "react";
import { ArrowUpRight } from "react-bootstrap-icons";

const ProjectCard = ({
  image,
  heading,
  subHeading,
  index,
  openLightbox,
  navigate,
  url,
  placeholder,
}) => {
  const hasExternalUrl = Boolean(url);
  const mediaLabel = placeholder?.label || subHeading || heading || "Project";
  const gradientClasses = placeholder?.gradient || "from-[#1D1D1D] to-[#3a3a3a]";

  const handleMediaClick = () => {
    if (image && typeof openLightbox === "function") {
      openLightbox(index);
    } else if (hasExternalUrl && typeof window !== "undefined") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const titleContent = (
    <>
      <span className="text-clr_base xl:mb-4 mb-2 block uppercase xl:text-lg text-base">
        {heading}
      </span>
      <h3 className="xl:text-[30px] sm:text-2xl text-xl font-semibold text-white">
        {subHeading}
      </h3>
    </>
  );

  return (
    <div
      className={`overflow-hidden group ${(index === 2 || index === 5) ? "md:mb-0 mb-[30px]" : "xl:mb-[60px] lg:mb-[50px] mb-[30px]"}`}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div
        onClick={handleMediaClick}
        className="overflow-hidden lg:mb-[30px] mb-[20px] block w-full cursor-pointer"
      >
        {image ? (
          <Image
            src={image}
            alt={subHeading || heading || "Project screenshot"}
            width={1296}
            height={760}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-full h-auto overflow-hidden duration-500 rounded-[10px] group-hover:scale-105"
          />
        ) : (
          <div
            className={`w-full aspect-[4/3] rounded-[10px] duration-500 group-hover:scale-105 bg-gradient-to-br ${gradientClasses} flex items-center justify-center p-6 text-center`}
            role="img"
            aria-label={mediaLabel}
          >
            <span className="text-white font-semibold sm:text-3xl text-2xl tracking-wide">
              {mediaLabel}
            </span>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between gap-1">
        {hasExternalUrl ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="left__cont"
          >
            {titleContent}
          </a>
        ) : (
          <Link href={navigate || "/portfolio-details"} className="left__cont">
            {titleContent}
          </Link>
        )}
        {hasExternalUrl ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${subHeading || heading}`}
            className="h-[45px] w-[45px] sm:w-[60px] sm:h-[60px] rounded-md bg-[#1D1D1D] flex justify-center items-center duration-500 group-hover:bg-clr_base cursor-pointer"
          >
            <ArrowUpRight className="duration-500 group-hover:text-clr_title text-lg sm:text-xl text-white " />
          </a>
        ) : (
          <div
            onClick={() => image && openLightbox(index)}
            className="h-[45px] w-[45px] sm:w-[60px] sm:h-[60px] rounded-md bg-[#1D1D1D] flex justify-center items-center duration-500 group-hover:bg-clr_base cursor-pointer"
          >
            <ArrowUpRight className="duration-500 group-hover:text-clr_title text-lg sm:text-xl text-white " />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
