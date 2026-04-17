'use client'
import React from "react";
import PageHeader from "@/Components/Shared/PageHeader";
import Link from "next/link";
import { useTranslations } from 'next-intl';

const PrivacyPolicy = () => {
  const t = useTranslations('pages.privacyPolicy');

  const dataTypes = t.raw('s3items');
  const purposes = t.raw('s4items');
  const legalBases = t.raw('s5items');
  const recipients = t.raw('s6items');
  const retention = t.raw('s7items');
  const rights = t.raw('s9items');

  return (
    <>
      <PageHeader heading={t('heading')} page={t('page')} />
      <section className="pb_120">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div data-aos="fade-up" data-aos-duration="1000">
              <p className="text-clr_pra text-lg mb-6">{t('lastUpdated')}</p>

              <h2 className="text-white text-2xl font-semibold mb-4">{t('s1title')}</h2>
              <p className="text-clr_pra mb-8">{t('s1text')}</p>

              <h2 className="text-white text-2xl font-semibold mb-4">{t('s2title')}</h2>
              <p className="text-clr_pra mb-4">{t('s2text')}</p>
              <div className="bg-[rgb(29_29_29)] rounded-xl p-6 mb-8">
                <p className="text-white font-medium mb-1">Bc. Vladislav Khvorov</p>
                <p className="text-white font-medium mb-2">Vlad Weby</p>
                <p className="text-clr_pra mb-1">Bottova 2A, 811 09 Staré Mesto, Bratislava</p>
                <p className="text-clr_pra mb-1">{t('country')}</p>
                <p className="text-clr_pra mb-1">
                  Email:{" "}
                  <Link href="mailto:v.hvorov73@gmail.com" className="text-clr_base duration-500 hover:opacity-80">
                    v.hvorov73@gmail.com
                  </Link>
                </p>
                <p className="text-clr_pra">
                  {t('phoneLabel')}:{" "}
                  <Link href="tel:+421919208426" className="text-clr_base duration-500 hover:opacity-80">
                    +421 919 208 426
                  </Link>
                </p>
              </div>

              <h2 className="text-white text-2xl font-semibold mb-4">{t('s3title')}</h2>
              <p className="text-clr_pra mb-4">{t('s3text')}</p>
              <ul className="list-disc list-inside text-clr_pra mb-8 space-y-2 pl-4">
                {dataTypes.map((item, i) => (
                  <li key={i}>
                    <span className="text-white font-medium">{item.label}</span> — {item.text}
                  </li>
                ))}
              </ul>

              <h2 className="text-white text-2xl font-semibold mb-4">{t('s4title')}</h2>
              <p className="text-clr_pra mb-4">{t('s4text')}</p>
              <ul className="list-disc list-inside text-clr_pra mb-8 space-y-2 pl-4">
                {purposes.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <h2 className="text-white text-2xl font-semibold mb-4">{t('s5title')}</h2>
              <p className="text-clr_pra mb-4">{t('s5text')}</p>
              <ul className="list-disc list-inside text-clr_pra mb-8 space-y-2 pl-4">
                {legalBases.map((item, i) => (
                  <li key={i}>
                    <span className="text-white font-medium">{item.label}</span> — {item.text}
                  </li>
                ))}
              </ul>

              <h2 className="text-white text-2xl font-semibold mb-4">{t('s6title')}</h2>
              <p className="text-clr_pra mb-4">{t('s6text')}</p>
              <ul className="list-disc list-inside text-clr_pra mb-8 space-y-2 pl-4">
                {recipients.map((item, i) => (
                  <li key={i}>
                    <span className="text-white font-medium">{item.label}</span> — {item.text}
                  </li>
                ))}
              </ul>

              <h2 className="text-white text-2xl font-semibold mb-4">{t('s7title')}</h2>
              <p className="text-clr_pra mb-4">{t('s7text')}</p>
              <ul className="list-disc list-inside text-clr_pra mb-8 space-y-2 pl-4">
                {retention.map((item, i) => (
                  <li key={i}>
                    <span className="text-white font-medium">{item.label}</span> — {item.text}
                  </li>
                ))}
              </ul>

              <h2 className="text-white text-2xl font-semibold mb-4">{t('s8title')}</h2>
              <p className="text-clr_pra mb-8">{t('s8text')}</p>

              <h2 className="text-white text-2xl font-semibold mb-4">{t('s9title')}</h2>
              <p className="text-clr_pra mb-4">{t('s9text')}</p>
              <ul className="list-disc list-inside text-clr_pra mb-8 space-y-2 pl-4">
                {rights.map((item, i) => (
                  <li key={i}>
                    <span className="text-white font-medium">{item.label}</span> — {item.text}
                  </li>
                ))}
              </ul>
              <p className="text-clr_pra mb-8">{t('s9contact')}</p>

              <h2 className="text-white text-2xl font-semibold mb-4">{t('s10title')}</h2>
              <p className="text-clr_pra mb-4">{t('s10text')}</p>
              <div className="bg-[rgb(29_29_29)] rounded-xl p-6 mb-8">
                <p className="text-white font-medium mb-1">Úrad na ochranu osobných údajov Slovenskej republiky</p>
                <p className="text-clr_pra mb-1">Hraničná 12, 820 07 Bratislava 27</p>
                <p className="text-clr_pra mb-1">{t('country')}</p>
                <p className="text-clr_pra mb-1">
                  {t('webLabel')}:{" "}
                  <Link href="https://dataprotection.gov.sk" target="_blank" rel="noopener noreferrer" className="text-clr_base duration-500 hover:opacity-80">
                    dataprotection.gov.sk
                  </Link>
                </p>
                <p className="text-clr_pra">
                  Email:{" "}
                  <Link href="mailto:statny.dozor@pdp.gov.sk" className="text-clr_base duration-500 hover:opacity-80">
                    statny.dozor@pdp.gov.sk
                  </Link>
                </p>
              </div>

              <h2 className="text-white text-2xl font-semibold mb-4">{t('s11title')}</h2>
              <p className="text-clr_pra mb-8">{t('s11text')}</p>

              <h2 className="text-white text-2xl font-semibold mb-4">{t('s12title')}</h2>
              <p className="text-clr_pra mb-8">{t('s12text')}</p>

              <h2 className="text-white text-2xl font-semibold mb-4">{t('s13title')}</h2>
              <p className="text-clr_pra mb-8">{t('s13text')}</p>

              <h2 className="text-white text-2xl font-semibold mb-4">{t('s14title')}</h2>
              <p className="text-clr_pra mb-4">{t('s14text')}</p>
              <div className="bg-[rgb(29_29_29)] rounded-xl p-6">
                <p className="text-clr_pra mb-1">
                  Email:{" "}
                  <Link href="mailto:v.hvorov73@gmail.com" className="text-clr_base duration-500 hover:opacity-80">
                    v.hvorov73@gmail.com
                  </Link>
                </p>
                <p className="text-clr_pra">
                  {t('phoneLabel')}:{" "}
                  <Link href="tel:+421919208426" className="text-clr_base duration-500 hover:opacity-80">
                    +421 919 208 426
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
