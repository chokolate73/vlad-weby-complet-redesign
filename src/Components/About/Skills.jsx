import React from "react";

const skillGroups = [
  {
    label: "Web Development",
    tags: ["Next.js", "React", "Tailwind CSS", "Supabase", "Stripe"],
  },
  {
    label: "AI & Automation",
    tags: ["Claude API", "OpenAI API", "n8n", "Power Automate", "Pinecone"],
  },
  {
    label: "SEO & Tools",
    tags: ["Google Analytics", "SEO", "HubSpot", "Vercel"],
  },
];

const Skills = ({ isTabActive }) => {
  return (
    <div className={`w-full duration-700 ${isTabActive === "skills" ? "z-10 opacity-100 translate-y-0" : "translate-y-20 -z-10 opacity-0 absolute  top-0 "} `}>
      <div className="bg-common_bg bg-center bg-no-repeat bg-cover rounded-[10px] overflow-hidden sm:p-[60px] py-[30px] px-[10px]">
        <div className="grid lg:grid-cols-[41%_auto] gap-6 lg:items-start items-center">
          <div>
            <div>
              <img src={"/img/about/personal-infothumb.png"} alt="img" />
            </div>
          </div>
          <div>
            <div>
              <h2 className="text-[42px] font-semibold text-clr_white mb-5">Tech Stack</h2>
              <p className="text-lg text-clr_pra mb-0">
                Modern stack for high-performance websites and AI-powered automation.
              </p>
              <div className="mt-10 flex flex-col gap-8">
                {skillGroups.map(({ label, tags }) => (
                  <div key={label}>
                    <span className="text-clr_base font-medium text-base mb-3 block">
                      {label}
                    </span>
                    <div className="flex flex-wrap gap-3">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-sm text-gray-300 border border-[#333] bg-[#1e1e1e] rounded-full px-4 py-[6px]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
