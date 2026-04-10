import React from "react";
import { PlayFill, ArrowRight, ChevronRight } from "react-bootstrap-icons";
import PageHeader from "@/Components/Shared/PageHeader";
import Accordion from "@/Components/Accordion";
import Link from "next/link";


const accordionList = [
  {
    id: "cmnid4",
    heading: "Simple process for workflow?",
    para: ` All the Lorem Ipsum generators on the Internet tend
    to repeat predefined chunks as necessary, making
    this the first true generator on the Internet.`,
  },
  {
    id: "cmnid5",
    heading: "Unique brand identity and strategy",
    para: ` All the Lorem Ipsum generators on the Internet tend
    to repeat predefined chunks as necessary, making
    this the first true generator on the Internet.`,
  },
  {
    id: "cmnid6",
    heading: "Tailor-made digital products",
    para: ` All the Lorem Ipsum generators on the Internet tend
    to repeat predefined chunks as necessary, making
    this the first true generator on the Internet.`,
  },
];

const serviceList = [
  "Illustration Design",
  "Business Branding",
  "Web UI/UX Design",
  "Application Design",
  " Digital Marketing",
  "Web Development",
];
const ServiceDetails = () => {
  return (
    <>
      <PageHeader heading={"Business Branding"} page={"Business Branding"} />
      <section className="pb_120">
        <div className="container">
          <div className="grid lg:grid-cols-[66%_auto] gap-6">
            <div>
              <div>
                <div className="w-full mb-[60px]">
                  <img src={"/img/project/ser-dv1.png"} alt="img" className="w-full" />
                </div>
                <div
                  className="xl:mb-[60px] mb-10 "
                  data-aos="fade-up"
                  data-aos-duration="1400"
                >
                  <h3 className="block xl:text-4xl text-2xl xl:mb-[30px] font-semibold mb-5 text-white">
                    About Business Branding Service
                  </h3>
                  <p className="md:text-base text-sm text-clr_pra xl:mb-7 mb-4 ttext__one">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni voluptatem sequi
                    nesciunt.
                  </p>
                </div>
                <div className="relative w-full mb-[60px] before:absolute before:w-full before:h-full  before:inset-0  before:content-['']  before:rounded-[10px]  before:bg-[rgb(12_12_12)] before:bg-opacity-60">
                  <img src={"/img/project/ser-dv2.png"} alt="img" className="rounded-[10px]" />
                  <Link
                    href={""}
                    className="cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 xl:w-20 xl:h-20 w-[60px] h-[60px] flex justify-center items-center rounded-full border border-clr_white before:absolute before:border-2 before:border-clr_white before:w-full before:h-full before:content:[''] before:rounded-full before:animate-scales "
                  >
                    <i className="text-clr_white text-[42px] ">
                      <PlayFill />
                    </i>
                  </Link>
                </div>
                <div>
                  <h2 className="text-white mb-[3rem] lg:text-4xl text-3xl  font-semibold leading-[120%]">Questions ? You&apos;re Covered</h2>
                  <div >
                    {accordionList.map(({ id, heading, para }) => (
                      <Accordion
                        key={id}
                        id={id}
                        heading={heading}
                        para={para}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="lg:mb-[30px] mb-5 xl:p-[30px] p-5 border border-clr_cusborder rounded-lg ">
                  <h3 className="text-3xl text-white mb-[30px] font-semibold">
                    Service List
                  </h3>
                  {serviceList.map((list, index) => (
                    <Link
                      href={""}
                      key={index}
                      className="lg:mb-4 mb-[10px] lg:py-7 md:py-5 py-4 lg:pr-[26px] md:pr-4 pr-3 lg:pl-5 pl-3 rounded-[10px] border border-clr_cusborder flex items-center justify-between text-white lg:text-2xl md:xl text-base duration-500 hover:bg-clr_base hover:border-clr_base hover:text-clr_title group"
                    >
                      {list}
                      <i className="text-white text-[22px] duration-500 group-hover:text-clr_title">
                        <ChevronRight />
                      </i>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetails;
