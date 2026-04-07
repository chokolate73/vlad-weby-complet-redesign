import React from "react";
import PageHeader from "../../Components/Shared/PageHeader";
import Form from "../../Components/Shared/Form";
import Link from "next/link";

const Contact = () => {
  return (
    <>
      <PageHeader
        heading={"Send Me a Message"}
        page={"Contact"}
      />
      <section className="contact__section">
        <div className="container">
          <div className="grid lg:grid-cols-[66.66%_auto] grid-cols-1 gap-6">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div>
                <Form isColTwo={false} />
              </div>
            </div>
            <div
              className="col-lg-4"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div className="bg-common_bg py-[30px] px-4 sm:px-5 xl:px-[30px] xl:py-[60px]">
                <h4 className="lg:mb-[30px] mb-5xl xl:text-2xl text-xl font-semibold text-white capitalize ">I'll respond within 24 hours</h4>
                <div className="lg:mb-5 mb-4 rounded-[10px] bg-[rgb(29_29_29)] xl:p-[30px] p-4">
                  <span className="mb-[14px] block text-clr_pra capitalize">Email</span>
                  <Link href={"mailto:v.hvorov73@gmail.com"} className="text-white xl:text-xl text-base block">v.hvorov73@gmail.com</Link>
                </div>
                <div className="lg:mb-5 mb-4 rounded-[10px] bg-[rgb(29_29_29)] xl:p-[30px] p-4">
                  <span className="mb-[14px] block text-clr_pra capitalize">Phone</span>
                  <Link href={"tel:+421919208426"} className="text-white xl:text-xl text-base block capitalize">+421 919 208 426</Link>
                </div>
                <div className="lg:mb-5 mb-4 rounded-[10px] bg-[rgb(29_29_29)] xl:p-[30px] p-4">
                  <span className="mb-[14px] block text-clr_pra capitalize">Address</span>
                  <span className="text-white xl:text-xl text-base block capitalize">Bottova 2A, 811 09 Bratislava</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
