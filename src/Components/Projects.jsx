'use client'
import React, { useState } from "react";
import Title from "./Shared/Title";
import Lightbox from "./Shared/LightBox";
import ProjectCard from "./Shared/ProjectCard";
import { imagesList } from "../Utlits/projectList";
import CircleBox from "./Shared/CircleBox";
import { useTranslations } from 'next-intl';

const projectKeys = ['pro1', 'pro2', 'pro3', 'pro4', 'pro5', 'pro6'];
const projectImages = [
  "/img/project/pro1.png",
  "/img/project/pro3.png",
  "/img/project/pro5.png",
  "/img/project/pro2.png",
  "/img/project/pro4.png",
  "/img/project/pro6.png",
];
const projectCategories = [
  ["services", "website", "all"],
  ["services", "landing_page", "all"],
  ["website", "services", "all"],
  ["landing_page", "website", "all"],
  ["services", "website", "all"],
  ["landing_page", "website", "all"],
];

const Projects = () => {
  const t = useTranslations('projects');
  const [currentId, setCurrentId] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const projectList = projectKeys.map((key, index) => ({
    id: index + 1,
    image: projectImages[index],
    heading: t(`items.${key}.heading`),
    subHeading: t(`items.${key}.subHeading`),
    category: projectCategories[index],
  }));

  const openLightbox = (index) => {
    setCurrentId(index);
    setLightboxOpen(true);
  };

  return (
    <section className="pt_120 pb_120" id="portfolio">
      <div className="container">
        <Title
          mainTitle={t('mainTitle')}
          sortTitle={t('sortTitle')}
        />

        <div
          className={`md:columns-2 col-span-1 xxl:gap-[58px] lg:gap-12 md:gap-[30px] `}
        >
          {projectList.map(({ heading, id, image, subHeading }, index) => (
            <ProjectCard
              key={id}
              image={image}
              heading={heading}
              subHeading={subHeading}
              openLightbox={openLightbox}
              index={index}
              navigate="/protfolio"
            />
          ))}
        </div>

        <div className="mt-[100px] flex justify-center">
          <CircleBox />
        </div>
      </div>
      {lightboxOpen && (
        <Lightbox
          images={imagesList}
          setLightboxOpen={setLightboxOpen}
          currentId={currentId}
        />
      )}
    </section>
  );
};

export default Projects;
