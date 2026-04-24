import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Telephone, Envelope, Whatsapp, Globe } from "react-bootstrap-icons";
import AddContactButton from "@/Components/AddContactButton";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getPageMetadata('businesscard', locale);
}

const contactInfo = [
  {
    id: 1,
    icon: <Telephone />,
    label: "Phone",
    value: "+421 919 208 426",
    href: "tel:+421919208426",
  },
  {
    id: 2,
    icon: <Envelope />,
    label: "Email",
    value: "v.hvorov73@gmail.com",
    href: "mailto:v.hvorov73@gmail.com",
  },
  {
    id: 3,
    icon: <Whatsapp />,
    label: "WhatsApp",
    value: "+421 919 208 426",
    href: "https://wa.me/421919208426",
  },
  {
    id: 4,
    icon: <Globe />,
    label: "Website",
    value: "vladkhvorov.com",
    href: "https://vladkhvorov.com",
  },
];

const BusinessCard = () => {
  return (
    <section className="pt_120 pb_120">
      <div className="container">
        <div className="flex justify-center">
          <div className="w-full max-w-[480px]">
            <div className="bg-[rgb(29_29_29)] rounded-[20px] overflow-hidden border border-clr_cusborder">
              <div className="flex justify-center pt-8 sm:pt-10 pb-4">
                <div className="w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] rounded-full overflow-hidden border-4 border-clr_base">
                  <Image
                    src="/img/hero/hero-man.png"
                    alt="Vladislav Khvorov"
                    width={360}
                    height={360}
                    sizes="(max-width: 640px) 140px, 180px"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <div className="text-center pb-2">
                <h1 className="text-white text-2xl sm:text-3xl font-bold">
                  Vladislav Khvorov
                </h1>
                <p className="text-clr_base mt-1 font-caveat text-xl sm:text-2xl">
                  Web Developer & AI Specialist
                </p>
              </div>
              <div className="p-5 sm:p-8 pt-6 sm:pt-8 grid gap-3 sm:gap-4">
                {contactInfo.map(({ id, icon, label, value, href }) => (
                  <Link
                    key={id}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    className="flex items-center gap-4 bg-[rgb(18_18_18)] rounded-[12px] p-4 sm:p-5 hover:border-clr_base border border-transparent transition-all duration-300 group"
                  >
                    <div className="w-[44px] h-[44px] sm:w-[50px] sm:h-[50px] rounded-full bg-clr_base flex items-center justify-center shrink-0">
                      <i className="text-clr_body text-lg sm:text-xl">{icon}</i>
                    </div>
                    <div>
                      <span className="block text-clr_pra text-xs sm:text-sm uppercase tracking-wider">
                        {label}
                      </span>
                      <span className="block text-white text-sm sm:text-base mt-0.5 group-hover:text-clr_base transition-colors">
                        {value}
                      </span>
                    </div>
                  </Link>
                ))}
                <AddContactButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessCard;
