'use client'
import React from "react";
import PageHeader from "@/Components/Shared/PageHeader";
import Link from "next/link";
import { useTranslations } from 'next-intl';

const CookiePolicy = () => {
  const t = useTranslations('pages.cookies');

  return (
    <>
      <PageHeader heading={t('heading')} page={t('page')} />
      <section className="pb_120">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div data-aos="fade-up" data-aos-duration="1000">
              <p className="text-clr_pra text-lg mb-6">
                {t('lastUpdated')}
              </p>

              <h2 className="text-white text-2xl font-semibold mb-4">{t('s1title')}</h2>
              <p className="text-clr_pra mb-8">
                {t('s1text')}
              </p>

              <h2 className="text-white text-2xl font-semibold mb-4">{t('s2title')}</h2>
              <p className="text-clr_pra mb-4">
                {t('s2text')}
              </p>
              <ul className="list-disc list-inside text-clr_pra mb-8 space-y-2 pl-4">
                <li><span className="text-white font-medium">{t('s2essential')}</span> {t('s2essentialText')}</li>
                <li><span className="text-white font-medium">{t('s2preference')}</span> {t('s2preferenceText')}</li>
                <li><span className="text-white font-medium">{t('s2analytics')}</span> {t('s2analyticsText')}</li>
              </ul>

              <h2 className="text-white text-2xl font-semibold mb-4">{t('s3title')}</h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-clr_cusborder">
                      <th className="text-left text-white py-3 pr-4">{t('s3cookieName')}</th>
                      <th className="text-left text-white py-3 pr-4">{t('s3type')}</th>
                      <th className="text-left text-white py-3 pr-4">{t('s3duration')}</th>
                      <th className="text-left text-white py-3">{t('s3purpose')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-clr_cusborder">
                      <td className="text-clr_base py-3 pr-4 font-mono text-sm">cookie_consent</td>
                      <td className="text-clr_pra py-3 pr-4">{t('s3essential')}</td>
                      <td className="text-clr_pra py-3 pr-4">{t('s3persistent')}</td>
                      <td className="text-clr_pra py-3">{t('s3consentPurpose')}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-white text-2xl font-semibold mb-4">{t('s4title')}</h2>
              <p className="text-clr_pra mb-4">
                {t('s4text')}
              </p>
              <ul className="list-disc list-inside text-clr_pra mb-8 space-y-2 pl-4">
                <li>{t('s4right1')}</li>
                <li>{t('s4right2')}</li>
                <li>{t('s4right3')}</li>
                <li>{t('s4right4')}</li>
                <li>{t('s4right5')}</li>
                <li>{t('s4right6')}</li>
              </ul>

              <h2 className="text-white text-2xl font-semibold mb-4">{t('s5title')}</h2>
              <p className="text-clr_pra mb-4">
                {t('s5text')}
              </p>
              <ul className="list-disc list-inside text-clr_pra mb-8 space-y-2 pl-4">
                <li><span className="text-white font-medium">{t('s5banner')}</span> {t('s5bannerText')}</li>
                <li><span className="text-white font-medium">{t('s5browser')}</span> {t('s5browserText')}</li>
                <li><span className="text-white font-medium">{t('s5clear')}</span> {t('s5clearText')}</li>
              </ul>

              <h2 className="text-white text-2xl font-semibold mb-4">{t('s6title')}</h2>
              <p className="text-clr_pra mb-8">
                {t('s6text')}
              </p>

              <h2 className="text-white text-2xl font-semibold mb-4">{t('s7title')}</h2>
              <p className="text-clr_pra mb-4">
                {t('s7text')}
              </p>
              <div className="bg-[rgb(29_29_29)] rounded-xl p-6 mb-8">
                <p className="text-white mb-1">Vlad Weby</p>
                <p className="text-clr_pra mb-1">Bottova 2A, 811 09 Bratislava, Slovakia</p>
                <p className="text-clr_pra">
                  Email:{" "}
                  <Link href="mailto:v.hvorov73@gmail.com" className="text-clr_base duration-500 hover:opacity-80">
                    v.hvorov73@gmail.com
                  </Link>
                </p>
              </div>

              <h2 className="text-white text-2xl font-semibold mb-4">{t('s8title')}</h2>
              <p className="text-clr_pra mb-8">
                {t('s8text')}
              </p>

              <h2 className="text-white text-2xl font-semibold mb-4">{t('s9title')}</h2>
              <p className="text-clr_pra mb-4">
                {t('s9text')}
              </p>
              <div className="bg-[rgb(29_29_29)] rounded-xl p-6">
                <p className="text-clr_pra mb-1">
                  Email:{" "}
                  <Link href="mailto:v.hvorov73@gmail.com" className="text-clr_base duration-500 hover:opacity-80">
                    v.hvorov73@gmail.com
                  </Link>
                </p>
                <p className="text-clr_pra">
                  Phone:{" "}
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

export default CookiePolicy;
