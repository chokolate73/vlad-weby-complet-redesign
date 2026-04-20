"use client";

import React from "react";
import Link from "next/link";
import {
  CheckCircleFill,
  XCircleFill,
  LightningChargeFill,
  ShieldFill,
  Search,
  Globe2,
  PaletteFill,
  GearFill,
  Clock,
  Calendar3,
  PersonFill,
  ArrowRight,
  HddFill,
  CodeSlash,
  GraphUpArrow,
  Scissors,
  RocketTakeoff,
  Cup,
  ArrowRepeat,
} from "react-bootstrap-icons";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const comparisonData = [
  {
    aspect: "Скорость загрузки",
    icon: LightningChargeFill,
    wordpress: { good: false, text: "Медленнее — много плагинов, тяжёлые темы" },
    modern: { good: true, text: "Молниеносно — статические страницы, CDN" },
  },
  {
    aspect: "Безопасность",
    icon: ShieldFill,
    wordpress: { good: false, text: "Частые атаки, требуются регулярные обновления" },
    modern: { good: true, text: "Минимальная поверхность атаки, нет базы данных" },
  },
  {
    aspect: "SEO",
    icon: Search,
    wordpress: { good: false, text: "Хорошо с плагинами (Yoast, RankMath)" },
    modern: { good: true, text: "Отлично нативно — скорость, метаданные, Core Web Vitals" },
  },
  {
    aspect: "Стоимость эксплуатации",
    icon: HddFill,
    wordpress: { good: false, text: "Хостинг €5–20/мес + платные плагины" },
    modern: { good: true, text: "Часто бесплатно или €0–5/мес (Vercel, Netlify)" },
  },
  {
    aspect: "Удобство редактирования",
    icon: GearFill,
    wordpress: { good: true, text: "Да — админ-панель, визуальный редактор" },
    modern: { good: false, text: "Через CMS или разработчика" },
  },
  {
    aspect: "Дизайн",
    icon: PaletteFill,
    wordpress: { good: false, text: "Шаблоны — ограниченные, типичный вид" },
    modern: { good: true, text: "Без ограничений — индивидуальный дизайн на заказ" },
  },
  {
    aspect: "Масштабируемость",
    icon: GraphUpArrow,
    wordpress: { good: false, text: "Ограниченная — замедляется при росте" },
    modern: { good: true, text: "Отличная — глобальный CDN, edge computing" },
  },
];

const wordpressUseCases = [
  {
    title: "Блогеры и создатели контента",
    description:
      "Если вы пишете десятки статей в неделю и вам нужен простой способ управления контентом без разработчика.",
  },
  {
    title: "Проекты «сделай сам» с минимальным бюджетом",
    description:
      "Если вы хотите создать сайт самостоятельно за несколько евро в месяц и вам не нужна выдающаяся производительность.",
  },
  {
    title: "Крупные контентные сайты",
    description:
      "Управление тысячами статей с несколькими авторами, где экосистема плагинов WordPress незаменима.",
  },
  {
    title: "Интернет-магазин на WooCommerce",
    description:
      "Если у вас уже есть работающий магазин на WooCommerce и миграция обошлась бы слишком дорого.",
  },
];

const modernWebUseCases = [
  {
    title: "Малый бизнес, для которого важны скорость и SEO",
    description:
      "Когда вам нужно, чтобы клиенты находили вас в Google, а сайт загружался мгновенно.",
  },
  {
    title: "Компании, которые ценят свой бренд",
    description:
      "Уникальный индивидуальный дизайн, который выделяет вас среди конкурентов с одинаковыми шаблонами WordPress.",
  },
  {
    title: "Предприниматели, которые не хотят заниматься обслуживанием",
    description:
      "Никаких обновлений плагинов, никаких патчей безопасности, никаких падающих страниц.",
  },
  {
    title: "Профессионалы и фрилансеры",
    description:
      "Портфолио, лендинг или корпоративная презентация, которая производит профессиональное впечатление.",
  },
];

const recommendationPoints = [
  "Быстрая загрузка = лучшие позиции в Google",
  "Минимальное обслуживание = меньше забот и расходов",
  "Безопасность без постоянных обновлений",
  "Индивидуальный дизайн, который выделяет вас среди конкурентов",
  "Более низкие эксплуатационные расходы (хостинг часто бесплатный)",
  "Лучшие Core Web Vitals = лучшее SEO",
];

const caseStudies = [
  {
    icon: Scissors,
    iconBg: "bg-pink-500/10",
    iconColor: "text-pink-500",
    title: "Парикмахерская в Братиславе",
    text: (
      <>
        У небольшого салона был сайт на WordPress, который загружался за{" "}
        <strong className="text-white">4,2 секунды</strong> и дважды был
        взломан. После перехода на современный сайт время загрузки сократилось до{" "}
        <strong className="text-white">0,8 секунды</strong>, проблемы с
        безопасностью полностью исчезли, а благодаря улучшенным Core Web Vitals
        позиции в Google значительно выросли. Количество новых клиентов из
        интернета увеличилось на треть.
      </>
    ),
  },
  {
    icon: RocketTakeoff,
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-500",
    title: "IT-стартап в Кошице",
    text: (
      <>
        Команда молодых разработчиков сначала попробовала WordPress, но быстро
        столкнулась с ограничениями &mdash; шаблоны не могли обеспечить{" "}
        <strong className="text-white">уникальный, пиксельно точный дизайн</strong>,{" "}
        необходимый для их бренда. Переход на современный сайт на React дал им
        полный контроль над каждой деталью. Молниеносная страница с анимациями,
        которая впечатляет инвесторов и клиентов. И всё это с бесплатным
        хостингом на Vercel.
      </>
    ),
  },
  {
    icon: Cup,
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-500",
    title: "Ресторан в Жилине",
    text: (
      <>
        Семейный ресторан использовал WordPress с{" "}
        <strong className="text-white">12 плагинами</strong> &mdash; контактная
        форма, галерея, карты, система бронирования и другое. Каждый месяц
        что-то переставало работать после обновления. После миграции на
        современный сайт &mdash;{" "}
        <strong className="text-white">ноль плагинов, ноль обслуживания</strong>.
        Всё встроено прямо в код, работает надёжно, а владелец наконец может
        сосредоточиться на том, что он делает лучше всего.
      </>
    ),
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

const WordpressVsModernArticle = () => {
  return (
    <article className="container max-w-[800px] pb_120">
      {/* Article header */}
      <div className="mb-12" data-aos="fade-up" data-aos-duration="800">
        <div className="flex flex-wrap items-center gap-4 text-sm text-clr_pra mb-6">
          <span className="inline-flex items-center gap-1.5">
            <Calendar3 className="text-xs" />
            12 февраля 2026
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="text-xs" />
            7 мин чтения
          </span>
          <span className="inline-flex items-center gap-1.5">
            <PersonFill className="text-xs" />
            Владислав Хворов
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6 leading-tight">
          WordPress vs Современный сайт &mdash;{" "}
          <span className="text-clr_base">
            Что лучше для малого бизнеса?
          </span>
        </h1>

        <p className="text-lg text-clr_pra leading-relaxed mb-4">
          Вечный вопрос &mdash; WordPress или что-то современное? Если вы
          сейчас думаете о новом сайте или ищете лучшее решение для своего
          бизнеса, эта статья для вас. Мы объективно сравним оба варианта
          &mdash; без предвзятости, с фактами и цифрами.
        </p>
        <p className="text-base text-clr_pra leading-relaxed">
          WordPress доминирует в вебе &mdash; по оценкам,{" "}
          <strong className="text-white">
            около 43% всех сайтов в мире работают на WordPress
          </strong>
          . Однако то, что быстро разворачивается, не обязательно быстро
          загружается. И именно здесь на сцену выходит современный веб, который
          пока использует лишь небольшой процент компаний &mdash; но те, кто
          перешёл, уже не возвращаются.
        </p>
      </div>

      {/* ------------------------------------------------------------ */}
      {/*  Что такое WordPress?                                        */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-6">
          Что такое WordPress?
        </h2>
        <div className="bg-[rgb(30,30,30)] rounded-xl p-6 md:p-8 space-y-4">
          <p className="text-clr_pra leading-relaxed">
            WordPress &mdash; это система управления контентом (CMS) с открытым
            исходным кодом, появившаяся в 2003 году.{" "}
            <strong className="text-white">
              Приблизительно 43% всех сайтов
            </strong>{" "}
            в интернете работают на нём &mdash; от простых блогов до крупных
            интернет-магазинов.
          </p>
          <p className="text-clr_pra leading-relaxed">
            Его сила заключается в огромной экосистеме &mdash; тысячи тем и
            плагинов, которые позволяют добавить практически любую
            функциональность без программирования. Сайт на WordPress можно
            создать даже без технических знаний.
          </p>
          <p className="text-clr_pra leading-relaxed">
            С другой стороны, популярность WordPress делает его самой частой
            мишенью для хакеров. А чем больше плагинов вы добавляете, тем
            медленнее и нестабильнее становится сайт.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  Что такое современный сайт?                                 */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-6">
          Что такое современный сайт?
        </h2>
        <div className="bg-clr_base/5 border border-clr_base/10 rounded-xl p-6 md:p-8 space-y-4">
          <p className="text-clr_pra leading-relaxed">
            Современный сайт использует такие технологии, как{" "}
            <strong className="text-white">React, Next.js, Astro</strong> и
            подход Jamstack. Вместо того чтобы сервер генерировал каждую
            страницу при каждом посещении, современный сайт заранее генерирует
            страницы в виде статических HTML-файлов.
          </p>
          <p className="text-clr_pra leading-relaxed">
            Результат? Молниеносная загрузка, лучшее SEO, минимальные риски
            безопасности и хостинг, который зачастую полностью бесплатный. Для
            управления контентом headless CMS предоставляет удобную
            админ-панель, не замедляя сайт.
          </p>
          <p className="text-clr_pra leading-relaxed">
            Современный сайт &mdash; это как автомобиль, собранный на заказ
            &mdash; точно под ваши потребности, без лишнего веса. WordPress
            &mdash; это как подержанный автомобиль от дилера &mdash; работает,
            но подходит не всем.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  Сравнительная таблица                                       */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-8">
          Сравнение: WordPress vs Современный сайт
        </h2>

        {/* Desktop header */}
        <div className="hidden md:grid md:grid-cols-[1fr_1fr_1fr] gap-4 mb-4 px-4">
          <span className="text-sm font-semibold text-clr_pra uppercase tracking-wide">
            Аспект
          </span>
          <span className="text-sm font-semibold text-clr_pra uppercase tracking-wide text-center">
            WordPress
          </span>
          <span className="text-sm font-semibold text-clr_pra uppercase tracking-wide text-center">
            Современный сайт
          </span>
        </div>

        <div className="space-y-3">
          {comparisonData.map((item, i) => (
            <div key={i} className="bg-[rgb(30,30,30)] rounded-xl p-4 md:p-6">
              {/* Desktop */}
              <div className="hidden md:grid md:grid-cols-[1fr_1fr_1fr] gap-4 items-center">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 bg-clr_base/10 rounded-xl flex items-center justify-center shrink-0">
                    <item.icon className="text-clr_base" />
                  </span>
                  <span className="font-semibold text-white">{item.aspect}</span>
                </div>
                <div className="flex items-start gap-2">
                  {item.wordpress.good ? (
                    <CheckCircleFill className="text-green-500 shrink-0 mt-0.5" />
                  ) : (
                    <XCircleFill className="text-red-500 shrink-0 mt-0.5" />
                  )}
                  <span className="text-sm text-clr_pra">
                    {item.wordpress.text}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  {item.modern.good ? (
                    <CheckCircleFill className="text-green-500 shrink-0 mt-0.5" />
                  ) : (
                    <XCircleFill className="text-red-500 shrink-0 mt-0.5" />
                  )}
                  <span className="text-sm text-clr_pra">
                    {item.modern.text}
                  </span>
                </div>
              </div>

              {/* Mobile */}
              <div className="md:hidden space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 bg-clr_base/10 rounded-xl flex items-center justify-center shrink-0">
                    <item.icon className="text-clr_base" />
                  </span>
                  <span className="font-semibold text-white">{item.aspect}</span>
                </div>
                <div className="pl-2 space-y-2">
                  <div className="flex items-start gap-2">
                    {item.wordpress.good ? (
                      <CheckCircleFill className="text-green-500 shrink-0 mt-0.5" />
                    ) : (
                      <XCircleFill className="text-red-500 shrink-0 mt-0.5" />
                    )}
                    <span className="text-sm text-clr_pra">
                      <strong className="text-white">WP:</strong>{" "}
                      {item.wordpress.text}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    {item.modern.good ? (
                      <CheckCircleFill className="text-green-500 shrink-0 mt-0.5" />
                    ) : (
                      <XCircleFill className="text-red-500 shrink-0 mt-0.5" />
                    )}
                    <span className="text-sm text-clr_pra">
                      <strong className="text-white">Совр.:</strong>{" "}
                      {item.modern.text}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  Реальный опыт                                               */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
          Реальный опыт
        </h2>
        <p className="text-clr_pra mb-8">
          Цифры и сравнения — это хорошо, но различия лучше всего видны на
          реальных примерах:
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {caseStudies.map((cs, i) => (
            <div key={i} className="bg-[rgb(30,30,30)] rounded-xl p-6">
              <span
                className={`w-10 h-10 ${cs.iconBg} rounded-xl flex items-center justify-center mb-4`}
              >
                <cs.icon className={`${cs.iconColor} text-lg`} />
              </span>
              <h3 className="text-lg font-semibold text-white mb-2">
                {cs.title}
              </h3>
              <p className="text-sm text-clr_pra leading-relaxed">{cs.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  Для кого WordPress?                                         */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-6">
          Для кого WordPress?
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {wordpressUseCases.map((uc, i) => (
            <div
              key={i}
              className="bg-[rgb(30,30,30)] rounded-xl p-6 flex gap-4"
            >
              <span className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center shrink-0">
                <Globe2 className="text-orange-500" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {uc.title}
                </h3>
                <p className="text-sm text-clr_pra">{uc.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  Для кого современный сайт?                                  */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-6">
          Для кого современный сайт?
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {modernWebUseCases.map((uc, i) => (
            <div
              key={i}
              className="bg-clr_base/5 border border-clr_base/10 rounded-xl p-6 flex gap-4"
            >
              <span className="w-10 h-10 bg-clr_base/10 rounded-xl flex items-center justify-center shrink-0">
                <CodeSlash className="text-clr_base" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {uc.title}
                </h3>
                <p className="text-sm text-clr_pra">{uc.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  Наша рекомендация                                           */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-6">
          Наша рекомендация
        </h2>
        <div className="bg-[rgb(30,30,30)] rounded-2xl p-8 md:p-12">
          <p className="text-lg text-clr_pra leading-relaxed mb-6">
            Для большинства малых предприятий{" "}
            <strong className="text-clr_base">
              современный сайт — однозначно лучшая инвестиция
            </strong>
            . Вот почему:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {recommendationPoints.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircleFill className="text-clr_base shrink-0" />
                <span className="text-clr_pra text-sm">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-clr_pra leading-relaxed mb-4">
            У WordPress по-прежнему есть своё место &mdash; в основном для
            крупных контентных сайтов и блогеров. Но если вы малый бизнес,
            индивидуальный предприниматель или профессионал, которому нужен
            быстрый, безопасный и профессионально выглядящий сайт, современные
            технологии — очевидный выбор.
          </p>
          <p className="text-clr_pra leading-relaxed mb-4">
            Конкретные цифры: малый бизнес обычно инвестирует{" "}
            <strong className="text-clr_base">
              &euro;300 &ndash; &euro;1 000
            </strong>{" "}
            в сайт. С WordPress добавьте &euro;5&ndash;20/мес за хостинг,
            &euro;50&ndash;100/год за платные плагины и часы на обновления. С
            современным сайтом эксплуатационные расходы практически нулевые
            &mdash; хостинг на Vercel бесплатный, никаких плагинов, никаких
            патчей безопасности.
          </p>
          <p className="text-clr_pra leading-relaxed">
            ROI современного сайта просто лучше &mdash; вы платите меньше за
            обслуживание и зарабатываете больше благодаря лучшей видимости в
            Google.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  Миграция с WordPress                                        */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-6">
          Миграция с WordPress
        </h2>
        <div className="bg-clr_base/5 border border-clr_base/10 rounded-xl p-6 md:p-8">
          <div className="flex items-start gap-4">
            <span className="w-10 h-10 bg-clr_base/10 rounded-xl flex items-center justify-center shrink-0 mt-1">
              <ArrowRepeat className="text-clr_base" />
            </span>
            <div className="space-y-4">
              <p className="text-clr_pra leading-relaxed">
                Уже есть WordPress и думаете о переходе? Хорошая новость
                &mdash; миграция{" "}
                <strong className="text-white">проще, чем вы думаете</strong>.
                Ваш существующий контент &mdash; тексты, изображения, структура
                страниц &mdash; может быть полностью перенесён на новое решение.
              </p>
              <p className="text-clr_pra leading-relaxed">
                Что касается SEO, ваши позиции в Google будут сохранены. С{" "}
                <strong className="text-white">
                  правильно настроенными 301-редиректами
                </strong>{" "}
                все существующие URL будут перенаправлены на новые, так что ни
                Google, ни посетители не заметят никаких перебоев.
              </p>
              <p className="text-clr_pra leading-relaxed">
                Весь процесс миграции обычно занимает{" "}
                <strong className="text-white">1&ndash;2 недели</strong>{" "}
                в зависимости от размера сайта. На протяжении всего процесса ваш
                оригинальный сайт на WordPress работает в обычном режиме &mdash;
                переключение происходит только тогда, когда новый сайт полностью
                готов и протестирован.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  Связанные статьи                                            */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <div className="bg-[rgb(30,30,30)] rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">
            Связанные статьи
          </h3>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/ru/blog/skolko-stoit-sajt"
              className="inline-flex items-center gap-2 text-clr_base hover:underline text-sm"
            >
              Сколько стоит сайт? <ArrowRight />
            </Link>
            <Link
              href="/ru/blog/sajt-dlya-predprinimatelej"
              className="inline-flex items-center gap-2 text-clr_base hover:underline text-sm"
            >
              Сайт для предпринимателей <ArrowRight />
            </Link>
            <Link
              href="/ru/blog/kak-uluchshit-seo"
              className="inline-flex items-center gap-2 text-clr_base hover:underline text-sm"
            >
              Как улучшить SEO <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  CTA                                                         */}
      {/* ------------------------------------------------------------ */}
      <section className="text-center" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
          Хотите современный сайт для своего бизнеса?
        </h2>
        <p className="text-clr_pra mb-8 max-w-xl mx-auto">
          Напишите мне, и вместе мы найдём лучшее решение для вашей компании.
          Бесплатная консультация, необязывающее предложение в течение 24 часов.
        </p>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-clr_base text-clr_title rounded-full font-medium hover:opacity-90 transition-opacity"
        >
          Хочу современный сайт
          <ArrowRight />
        </Link>
      </section>
    </article>
  );
};

export default WordpressVsModernArticle;
