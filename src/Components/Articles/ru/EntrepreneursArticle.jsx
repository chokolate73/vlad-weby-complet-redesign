"use client";

import React from "react";
import Link from "next/link";
import {
  AwardFill,
  Search,
  ShieldFill,
  TrophyFill,
  CheckCircleFill,
  XCircleFill,
  FileTextFill,
  CurrencyEuro,
  TelephoneFill,
  StarFill,
  PersonFill,
  GeoAltFill,
  RocketTakeoff,
  LayersFill,
  Robot,
  ArrowRight,
  Clock,
  Calendar3,
  BrushFill,
  CalculatorFill,
  Cake2Fill,
} from "react-bootstrap-icons";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const reasons = [
  {
    icon: AwardFill,
    title: "\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0435 \u0432\u043f\u0435\u0447\u0430\u0442\u043b\u0435\u043d\u0438\u0435",
    description:
      "Первое впечатление решает всё. 75% людей оценивают надёжность компании по её сайту. Профессиональный сайт формирует доверие ещё до того, как клиент вам позвонит.",
  },
  {
    icon: Search,
    title: "Клиенты найдут вас в Google",
    description:
      "88% людей ищут местные услуги через Google. Без сайта вы для них не существуете. С собственным сайтом вы видимы 24/7 \u2014 даже когда спите или в отпуске.",
  },
  {
    icon: ShieldFill,
    title: "Независимость от социальных сетей",
    description:
      "Instagram и Facebook меняют алгоритмы, ограничивают охват и могут в любой момент заблокировать ваш аккаунт. Ваш сайт \u2014 это ваша платформа, которую никто не отнимет.",
  },
  {
    icon: TrophyFill,
    title: "Конкурентное преимущество",
    description:
      "Большинство предпринимателей до сих пор не имеют профессионального сайта. Имея его, вы автоматически выделяетесь на фоне конкурентов и привлекаете клиентов, которых конкуренты теряют.",
  },
];

const mustHaveItems = [
  {
    icon: FileTextFill,
    title: "Чёткое описание услуг",
    description:
      "Посетитель должен за 5 секунд понять, что вы предлагаете. Никаких расплывчатых фраз \u2014 конкретные услуги, для кого они предназначены и какую проблему решают.",
  },
  {
    icon: CurrencyEuro,
    title: "Прайс-лист или ценовой диапазон",
    description:
      "Люди хотят знать, сколько это стоит. Хотя бы ориентировочный прайс отсеет нереальные запросы и сэкономит время и вам, и клиенту.",
  },
  {
    icon: TelephoneFill,
    title: "Контактная форма + телефон",
    description:
      "Сделайте связь максимально простой. Контактная форма, номер телефона в один клик и, в идеале, WhatsApp или Messenger.",
  },
  {
    icon: StarFill,
    title: "Отзывы / портфолио",
    description:
      "Покажите, что вы уже сделали. Фотографии работ, отзывы клиентов или логотипы компаний, с которыми вы сотрудничали.",
  },
  {
    icon: PersonFill,
    title: "\u00abО нас\u00bb",
    description:
      "Люди покупают у людей. Короткая история о том, кто вы, почему занимаетесь тем, чем занимаетесь, и ваше фото \u2014 всё это формирует доверие.",
  },
  {
    icon: GeoAltFill,
    title: "Google Карты",
    description:
      "Если вы работаете локально, встроенная Google Карта поможет клиентам найти вас. Одновременно это помогает в локальном SEO.",
  },
];

const pricingTiers = [
  {
    icon: RocketTakeoff,
    name: "Базовый сайт",
    price: "от \u20ac390",
    description:
      "Одностраничный лендинг. Идеален для предпринимателей, которые хотят быстро начать с онлайн-присутствия.",
    includes: [
      "1 страница (лендинг)",
      "Контактная форма",
      "Мобильный дизайн",
      "Базовое SEO",
      "Готовность за 3\u20135 дней",
    ],
  },
  {
    icon: LayersFill,
    name: "Стандартный сайт",
    price: "от \u20ac599",
    description:
      "Многостраничный корпоративный сайт с полным SEO, блогом и контактными формами. Самый популярный выбор.",
    includes: [
      "До 5 подстраниц",
      "SEO-оптимизация",
      "Раздел блога",
      "Google Analytics",
      "CMS для редактирования контента",
    ],
  },
  {
    icon: Robot,
    name: "Премиум сайт",
    price: "от \u20ac999",
    description:
      "Полноценный сайт с интернет-магазином, системой бронирования или AI-чатботом. Для предпринимателей, которые хотят автоматизировать процессы.",
    includes: [
      "Всё из стандартного сайта",
      "Интернет-магазин или система бронирования",
      "AI-чатбот",
      "Автоматический сбор лидов",
      "Приоритетная поддержка",
    ],
  },
];

const commonMistakes = [
  {
    title: "Не иметь сайт вообще",
    description:
      "\u00abУ меня есть Facebook, этого достаточно\u00bb \u2014 нет, недостаточно. Facebook ограничивает охват, и вы не контролируете ни контент, ни дизайн. Без сайта вы теряете клиентов, которые ищут ваши услуги через Google.",
  },
  {
    title: "Сделать сайт самому на бесплатном конструкторе",
    description:
      "Wix, Webnode, бесплатные шаблоны WordPress \u2014 результат выглядит непрофессионально. Медленная загрузка, плохое SEO, никакой уникальности. Клиент это видит и уходит к конкурентам.",
  },
  {
    title: "Не инвестировать в SEO",
    description:
      "Красивый сайт без SEO \u2014 как билборд на пустынной дороге. Если Google вас не находит, клиенты вас не найдут. SEO-оптимизация должна быть частью сайта с самого начала.",
  },
  {
    title: "Не иметь мобильной версии",
    description:
      "60%+ посещений приходится на мобильные устройства. Если ваш сайт на мобильном выглядит плохо или неудобен в использовании, клиент уходит. Google также понижает в выдаче сайты без мобильной версии.",
  },
  {
    title: "Устаревшая информация на сайте",
    description:
      "Неактуальный номер телефона, старый адрес, несуществующие услуги \u2014 всё это разрушает доверие. Сайт необходимо регулярно обновлять, иначе он вредит вам больше, чем помогает.",
  },
];

const steps = [
  {
    number: "01",
    title: "Напишите мне",
    description:
      "Опишите, чем вы занимаетесь и чего ожидаете от сайта. Достаточно нескольких предложений через контактную форму, e-mail или WhatsApp. Я отвечу в течение 24 часов с необязывающим ценовым предложением.",
  },
  {
    number: "02",
    title: "Согласуем детали",
    description:
      "Вместе определим структуру сайта, дизайн и контент. Если у вас нет текстов или фотографий, я создам их за вас. Этот этап занимает 2\u20133 дня и проходит онлайн.",
  },
  {
    number: "03",
    title: "Готовый сайт за 1\u20132 недели",
    description:
      "Вы получите полностью функциональный сайт, оптимизированный для Google и мобильных устройств. Весь процесс от первого контакта до запуска обычно занимает 7\u201314 дней.",
  },
];

const examples = [
  {
    icon: BrushFill,
    title: "Маляр квартир",
    description:
      "Простой сайт с галереей работ, прайс-листом и контактной формой. За 3 месяца вышел на первую страницу Google. Результат? 5+ новых клиентов в месяц напрямую с сайта \u2014 без платной рекламы.",
  },
  {
    icon: CalculatorFill,
    title: "Бухгалтер в Братиславе",
    description:
      "Лендинг с наглядным описанием услуг и онлайн-записью на консультацию. Сайт полностью заменил необходимость постоянного размещения объявлений. Клиенты записываются на приём сами.",
  },
  {
    icon: Cake2Fill,
    title: "Кондитерская",
    description:
      "Сайт с меню, галереей тортов и формой заказа. Онлайн-заказы составили 40% общего оборота уже через 6 месяцев. Клиенты заказывают торты прямо через сайт даже в полночь.",
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

const EntrepreneursArticle = () => {
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
            10 мин чтения
          </span>
          <span className="inline-flex items-center gap-1.5">
            <PersonFill className="text-xs" />
            Владислав Хворов
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6 leading-tight">
          Сайт для{" "}
          <span className="text-clr_base">предпринимателей</span> &mdash; полное
          руководство
        </h1>

        <p className="text-lg text-clr_pra leading-relaxed mb-6">
          Вы предприниматель или владелец малого бизнеса и до сих пор не имеете
          собственного сайта? В 2025 году сайт для предпринимателя так же важен,
          как визитка 10 лет назад. В этом руководстве вы узнаете, зачем нужен
          сайт, что он должен содержать, сколько инвестировать и как начать &mdash;
          просто и без лишнего технического жаргона.
        </p>

        <p className="text-base text-clr_pra leading-relaxed">
          По статистике до 46% малых компаний до сих пор не имеют собственного
          сайта. При этом 97% потребителей ищут местные услуги через интернет.
          Если у вас нет сайта, вы не существуете для почти половины потенциальных
          клиентов.
        </p>
      </div>

      {/* Почему предпринимателю нужен сайт */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-8">
          Почему предпринимателю нужен сайт
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {reasons.map((reason, i) => (
            <div key={i} className="flex gap-4 p-6 bg-[rgb(30,30,30)] rounded-xl">
              <span className="w-12 h-12 bg-clr_base/10 rounded-xl flex items-center justify-center shrink-0">
                <reason.icon className="text-clr_base text-xl" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {reason.title}
                </h3>
                <p className="text-clr_pra text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Что должен содержать сайт */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-8">
          Что должен содержать сайт предпринимателя
        </h2>
        <div className="bg-clr_base/5 border border-clr_base/10 rounded-xl p-6 md:p-8">
          <ul className="space-y-5">
            {mustHaveItems.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="w-10 h-10 bg-clr_base/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                  <item.icon className="text-clr_base" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-clr_pra text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Примеры успешных сайтов */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
          Примеры успешных сайтов предпринимателей
        </h2>
        <p className="text-clr_pra mb-8">
          Теория &mdash; это одно, но результаты говорят сами за себя. Вот три
          реальных примера того, как простой сайт может изменить бизнес:
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {examples.map((ex, i) => (
            <div key={i} className="bg-[rgb(30,30,30)] rounded-xl p-6">
              <span className="w-12 h-12 bg-clr_base/10 rounded-xl flex items-center justify-center mb-4">
                <ex.icon className="text-clr_base text-xl" />
              </span>
              <h3 className="text-lg font-semibold text-white mb-2">
                {ex.title}
              </h3>
              <p className="text-clr_pra text-sm leading-relaxed">
                {ex.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Сколько инвестировать */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
          Сколько предпринимателю стоит вложить в сайт?
        </h2>
        <p className="text-clr_pra mb-8">
          Стоимость сайта зависит от масштаба и функциональности. Вот реалистичный обзор:
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {pricingTiers.map((tier, i) => (
            <div
              key={i}
              className="bg-[rgb(30,30,30)] rounded-xl p-6 flex flex-col"
            >
              <span className="w-12 h-12 bg-clr_base/10 rounded-xl flex items-center justify-center mb-4">
                <tier.icon className="text-clr_base text-xl" />
              </span>
              <h3 className="text-lg font-semibold text-white mb-1">
                {tier.name}
              </h3>
              <p className="text-2xl font-bold text-clr_base mb-3">
                {tier.price}
              </p>
              <p className="text-sm text-clr_pra mb-4 leading-relaxed">
                {tier.description}
              </p>
              <ul className="space-y-2 mt-auto">
                {tier.includes.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-center gap-2 text-sm text-clr_pra"
                  >
                    <CheckCircleFill className="text-clr_base shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Частые ошибки */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-8">
          Частые ошибки предпринимателей
        </h2>
        <div className="space-y-4">
          {commonMistakes.map((mistake, i) => (
            <div
              key={i}
              className="flex gap-4 p-6 bg-[rgb(30,30,30)] rounded-xl"
            >
              <XCircleFill className="text-red-500 text-lg shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {mistake.title}
                </h3>
                <p className="text-clr_pra text-sm leading-relaxed">
                  {mistake.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Как начать */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-8">
          Как начать?
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-clr_base/5 border border-clr_base/10 rounded-xl p-6"
            >
              <span className="text-3xl font-bold text-clr_base mb-3 block">
                {step.number}
              </span>
              <h3 className="text-lg font-semibold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-clr_pra text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Связанные статьи */}
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
              Стоимость сайта <ArrowRight />
            </Link>
            <Link
              href="/ru/blog/kak-uluchshit-seo"
              className="inline-flex items-center gap-2 text-clr_base hover:underline text-sm"
            >
              Как улучшить SEO <ArrowRight />
            </Link>
            <Link
              href="/ru/blog/ai-chatbot-dlya-biznesa"
              className="inline-flex items-center gap-2 text-clr_base hover:underline text-sm"
            >
              AI чат-бот для бизнеса <ArrowRight />
            </Link>
            <Link
              href="/ru/all-blog"
              className="inline-flex items-center gap-2 text-clr_base hover:underline text-sm"
            >
              Все статьи <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
          Хотите сайт для своего бизнеса?
        </h2>
        <p className="text-clr_pra mb-8 max-w-xl mx-auto">
          Напишите мне о вашем бизнесе, и в течение 24 часов вы получите
          необязывающее предложение на профессиональный сайт. Без скрытых платежей.
        </p>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-clr_base text-clr_title rounded-full font-medium hover:opacity-90 transition-opacity"
        >
          Хочу сайт для бизнеса
          <ArrowRight />
        </Link>
      </section>
    </article>
  );
};

export default EntrepreneursArticle;
