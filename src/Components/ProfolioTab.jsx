'use client'
import React, { useState } from "react";
import ProjectCard from "./Shared/ProjectCard";
import Lightbox from "./Shared/LightBox";
import { imagesList, projectList } from "@/Utlits/projectList";
import { useTranslations } from 'next-intl';

const ProfolioTab = () => {
    const t = useTranslations('pages.portfolio');
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentId, setCurrentId] = useState(0);
    const [currentCategory, setCurrentCategory] = useState("all");

    const categoryList = [
        { id: 1, categoryName: t('filters.all'), value: "all" },
        { id: 2, categoryName: t('filters.services'), value: "services" },
        { id: 3, categoryName: t('filters.business'), value: "business" },
        { id: 4, categoryName: t('filters.beauty'), value: "beauty" },
        { id: 5, categoryName: t('filters.personal'), value: "personal" },
        { id: 6, categoryName: t('filters.demo'), value: "demo" },
    ];

    const filterProject = projectList.filter((project) =>
        project.category.includes(currentCategory)
    );

    const openLightbox = (index) => {
        const imageIndex = imagesList.indexOf(filterProject[index]?.image);
        setCurrentId(imageIndex >= 0 ? imageIndex : 0);
        setLightboxOpen(true);
    };

    return (
        <section className="pb-120">
            <div className="container">
                <div>
                    <ul
                        className="border border-clr_cusborder p-[10px] rounded-lg max-w-[900px] mx-auto md:mb-[60px] mb-10 flex items-center md:flex-nowrap flex-wrap md:justify-center justify-center md:gap-0 gap-[5px] "
                        data-aos="fade-down"
                        data-aos-duration="2000"
                    >
                        {categoryList.map(({ id, categoryName, value }) => (
                            <li
                                key={id}
                                className={`md:border-t-0 md:border-b-0 md:border-l-0 border border-clr_cusborder md:border-r md:border-r-clr_cusborder md:last:border-r-0 `}
                            >
                                <button
                                    className={`border-none text-center md:inline-block block text-lg  md:py-4 md:px-6 py-[11px] px-5 rounded-[5px] ${currentCategory === value ? "bg-clr_base text-clr_title rounded-[5px]" : "text-clr_pra bg-transparent"}`}
                                    onClick={() => setCurrentCategory(value)}
                                >
                                    {categoryName}
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="md:columns-2 col-span-1 xxl:gap-[58px] lg:gap-12 md:gap-[30px]">
                        {filterProject.map(
                            ({ heading, id, image, subHeading, url, placeholder }, index) => (
                                <ProjectCard
                                    key={id}
                                    image={image}
                                    placeholder={placeholder}
                                    heading={heading}
                                    subHeading={subHeading}
                                    openLightbox={openLightbox}
                                    index={index}
                                    navigate="/portfolio-details"
                                    url={url}
                                />
                            )
                        )}
                    </div>
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
    )
}

export default ProfolioTab
