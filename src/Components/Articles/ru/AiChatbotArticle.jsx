"use client";

import React from "react";
import Link from "next/link";
import {
  Robot,
  ChatDots,
  Clock,
  People,
  GraphUpArrow,
  Stars,
  CheckCircleFill,
  XCircleFill,
  LightningChargeFill,
  Calendar3,
  Person,
  Scissors,
  Cart4,
  Briefcase,
  Wrench,
  CpuFill,
  ListCheck,
  RocketTakeoff,
  ArrowRight,
} from "react-bootstrap-icons";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const reasons = [
  {
    icon: Clock,
    number: "1",
    title: "Доступность 24/7",
    description:
      "Ваш чат-бот отвечает клиентам даже в три часа ночи. Ни одно сообщение не пропущено, ни один недовольный клиент не уходит к конкурентам.",
  },
  {
    icon: LightningChargeFill,
    number: "2",
    title: "Мгновенные ответы",
    description:
      "Больше никакого ожидания ответа на электронную почту. Клиент получает информацию за секунды, а не за часы.",
  },
  {
    icon: People,
    number: "3",
    title: "Экономия времени",
    description:
      "Чат-бот автоматически обрабатывает повторяющиеся вопросы — часы работы, цены, наличие. Вы можете сосредоточиться на том, что действительно важно.",
  },
  {
    icon: GraphUpArrow,
    number: "4",
    title: "Больше конверсий",
    description:
      "Чат-бот проактивно вовлекает посетителей, которые иначе бы ушли. Он помогает им найти то, что они ищут, и превращает интерес в заказ.",
  },
  {
    icon: Stars,
    number: "5",
    title: "Профессиональное впечатление",
    description:
      "AI чат-бот на вашем сайте показывает, что вы современная компания, идущая в ногу со временем. Клиенты это ценят.",
  },
];

const useCases = [
  {
    icon: Scissors,
    business: "Салон красоты",
    description:
      "Чат-бот отвечает на вопросы о прайс-листе, доступных датах и часах работы. Клиенты могут сразу записаться на приём — без звонков.",
    examples: [
      "\u00ABКакие даты свободны в пятницу?\u00BB",
      "\u00ABСколько стоит стрижка + окрашивание?\u00BB",
      "\u00ABГде вы находитесь и где можно припарковаться?\u00BB",
    ],
  },
  {
    icon: Cart4,
    business: "Интернет-магазин",
    description:
      "Автоматическая информация о статусе заказа, процедуре возврата и рекомендации товаров на основе предпочтений клиента.",
    examples: [
      "\u00ABГде мой заказ #12345?\u00BB",
      "\u00ABКак вернуть товар?\u00BB",
      "\u00ABЕсть ли этот товар в размере M?\u00BB",
    ],
  },
  {
    icon: Briefcase,
    business: "Юридическая фирма",
    description:
      "Чат-бот предварительно оценивает, по какому вопросу обращается клиент, собирает базовую информацию и запрашивает необходимые документы до консультации.",
    examples: [
      "\u00ABМне нужна помощь с трудовым договором.\u00BB",
      "\u00ABСколько стоит первичная консультация?\u00BB",
      "\u00ABКакие документы мне подготовить?\u00BB",
    ],
  },
  {
    icon: Wrench,
    business: "Ремонтные услуги",
    description:
      "Клиенты могут запросить предварительную оценку стоимости через чат-бот, проверить доступные даты и описать, что нужно отремонтировать — в любое время.",
    examples: [
      "\u00ABМне нужно починить протекающий кран.\u00BB",
      "\u00ABЕсть ли свободные даты на следующей неделе?\u00BB",
      "\u00ABСколько примерно стоит замена замка?\u00BB",
    ],
  },
];

const withoutChatbot = [
  "Пропущенное сообщение = потерянный клиент",
  "Медленные ответы на типичные вопросы",
  "Клиенты уходят к конкурентам",
  "Повторение одних и тех же ответов каждый день",
];

const withChatbot = [
  "Мгновенные ответы на каждый вопрос",
  "Довольные клиенты, которые возвращаются",
  "Больше конверсий и заказов",
  "Время для более важных дел в вашем бизнесе",
];

const implementationSteps = [
  {
    icon: ListCheck,
    step: "1",
    title: "Соберите самые частые вопросы клиентов",
    description:
      "Просмотрите вашу электронную почту, сообщения в соцсетях и звонки. Какие вопросы возникают чаще всего? Они станут основой для вашего чат-бота.",
  },
  {
    icon: CpuFill,
    step: "2",
    title: "Обучите чат-бот на ваших данных",
    description:
      "Чат-бот будет учиться на вашем FAQ, прайс-листе, информации о товарах и условиях обслуживания. Чем лучше данные вы предоставите, тем точнее он будет отвечать.",
  },
  {
    icon: RocketTakeoff,
    step: "3",
    title: "Запуск и постоянное улучшение",
    description:
      "Мы разворачиваем чат-бот на вашем сайте и отслеживаем его работу. На основе реальных разговоров мы постоянно улучшаем его для ещё лучших результатов.",
  },
];

const chooseCriteria = [
  {
    title: "Можно ли его обучить на ваших данных?",
    description:
      "Качественный чат-бот должен быть обучен на вашем FAQ, прайс-листе, описаниях услуг и других материалах компании. Только тогда он будет отвечать точно и по делу — а не общими фразами.",
  },
  {
    title: "Поддерживает ли он ваш язык и понимает ли ваших клиентов?",
    description:
      "Многие чат-бот решения хорошо работают на английском, но с трудом справляются с другими языками. Убедитесь, что чат-бот понимает местные выражения, сленг и ошибки в написании, которые обычно допускают клиенты.",
  },
  {
    title: "Может ли он передать разговор живому оператору?",
    description:
      "Даже лучший чат-бот столкнётся с ситуацией, которую не сможет решить сам. В этом случае он должен уметь плавно передать разговор вам или вашей команде — включая всю историю переписки.",
  },
  {
    title: "Легко ли его интегрировать в ваш существующий сайт?",
    description:
      "Идеальное решение не требует перестройки всего сайта. Чат-бот должен легко размещаться на любой странице — достаточно добавить короткий фрагмент кода, и он готов общаться с вашими посетителями.",
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

const AiChatbotArticle = () => {
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
            8 мин чтения
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Person className="text-xs" />
            Владислав Хворов
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6 leading-tight">
          AI чат-бот для бизнеса &mdash; как автоматизировать{" "}
          <span className="text-clr_base">поддержку клиентов</span>
        </h1>

        <p className="text-lg text-clr_pra leading-relaxed">
          AI чат-боты — это больше не научная фантастика. Даже малый бизнес
          сегодня может использовать их для экономии времени, улучшения
          обслуживания клиентов и увеличения продаж. В этой статье я расскажу,
          что такое AI чат-бот, зачем он вам нужен и как внедрить его на ваш
          сайт.
        </p>
      </div>

      {/* ------------------------------------------------------------ */}
      {/*  1. Что такое AI чат-бот и как он работает?                   */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-6">
          Что такое AI чат-бот и как он работает?
        </h2>

        <div className="space-y-4">
          {[
            {
              icon: ChatDots,
              title: "Традиционный чат-бот vs AI чат-бот",
              text: (
                <>
                  Традиционный чат-бот работает по принципу заранее
                  запрограммированных ответов &mdash; он понимает только те
                  фразы, которые в него заложили. AI чат-бот работает иначе. Он
                  использует искусственный интеллект для понимания{" "}
                  <strong className="text-white">естественного языка</strong>.
                  Клиент может задать вопрос по-разному, и чат-бот поймёт, что
                  он имеет в виду.
                </>
              ),
            },
            {
              icon: CpuFill,
              title: "Как AI понимает естественный язык",
              text: "AI чат-бот анализирует намерение, стоящее за вопросом, а не просто ключевые слова. Когда клиент пишет «когда вы работаете», «какой у вас график» или «работаете ли вы по субботам» — чат-бот понимает, что все они спрашивают об одном и том же, и отвечает правильно.",
            },
            {
              icon: Robot,
              title: "Обучен на данных вашей компании",
              text: "Мы обучаем чат-бот на ваших конкретных данных — FAQ, прайс-лист, информация о товарах, условия обслуживания. Благодаря этому он отвечает точно и по делу, а не общими фразами. Это как виртуальный сотрудник, который идеально знает вашу компанию.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-[rgb(30,30,30)] rounded-xl p-6"
            >
              <div className="flex items-start gap-4">
                <span className="w-12 h-12 bg-clr_base/10 rounded-xl flex items-center justify-center shrink-0">
                  <item.icon className="text-clr_base text-xl" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-clr_pra leading-relaxed">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  1b. Чем AI чат-бот НЕ является                              */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
          Чем AI чат-бот{" "}
          <span className="text-clr_base">НЕ</span> является
        </h2>
        <p className="text-clr_pra mb-6 leading-relaxed">
          Вокруг чат-ботов существует множество мифов. Давайте развеем самые
          распространённые:
        </p>

        <div className="space-y-4">
          {[
            {
              title: "Миф: «Чат-бот заменит сотрудников»",
              text: (
                <>
                  <strong className="text-white">Нет.</strong> Чат-бот
                  обрабатывает рутинные вопросы, которые составляют
                  70&ndash;80% всех обращений &mdash; часы работы, прайс-лист,
                  статус заказа. Сложные случаи, жалобы или индивидуальные
                  запросы автоматически перенаправляются вам или вашей команде.
                  Это{" "}
                  <strong className="text-white">помощник</strong>, а не замена.
                </>
              ),
            },
            {
              title: "Миф: «Это только для крупных компаний»",
              text: (
                <>
                  <strong className="text-white">Нет.</strong> Малый бизнес на
                  самом деле получает от чат-бота наибольшую выгоду. У крупной
                  компании есть колл-центр и команда поддержки. Малый
                  предприниматель часто не может мгновенно ответить на каждое
                  сообщение &mdash; и именно здесь чат-бот заполняет пробел.
                </>
              ),
            },
            {
              title: "Миф: «Клиенты не хотят разговаривать с роботом»",
              text: (
                <>
                  <strong className="text-white">Не совсем.</strong>{" "}
                  Исследования показывают, что{" "}
                  <strong className="text-white">
                    69% потребителей предпочитают чат-бот
                  </strong>{" "}
                  для быстрых ответов на простые вопросы. Главное — чат-бот
                  должен знать, когда передать разговор живому человеку &mdash;
                  и именно так работает наш чат-бот.
                </>
              ),
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-[rgb(30,30,30)] rounded-xl p-6"
            >
              <div className="flex items-start gap-4">
                <span className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center shrink-0">
                  <XCircleFill className="text-red-500 text-xl" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-clr_pra leading-relaxed">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  2. 5 причин, почему вашему бизнесу нужен AI чат-бот          */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-8">
          5 причин, почему вашему бизнесу нужен AI чат-бот
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-clr_base/5 border border-clr_base/10 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 bg-clr_base/10 rounded-xl flex items-center justify-center shrink-0">
                  <reason.icon className="text-clr_base" />
                </span>
                <span className="text-2xl font-bold text-clr_base">
                  {reason.number}.
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-clr_pra leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  3. Примеры использования                                     */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-8">
          Примеры использования
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {useCases.map((useCase) => (
            <div
              key={useCase.business}
              className="bg-[rgb(30,30,30)] rounded-xl p-6"
            >
              <div className="flex items-start gap-4">
                <span className="w-12 h-12 bg-clr_base/10 rounded-xl flex items-center justify-center shrink-0">
                  <useCase.icon className="text-clr_base text-xl" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {useCase.business}
                  </h3>
                  <p className="text-sm text-clr_pra leading-relaxed mb-3">
                    {useCase.description}
                  </p>
                  <div className="space-y-1.5">
                    <span className="text-xs font-medium text-clr_base uppercase tracking-wide">
                      Примеры вопросов:
                    </span>
                    {useCase.examples.map((example) => (
                      <p
                        key={example}
                        className="text-sm text-clr_pra/80 italic pl-3 border-l-2 border-clr_base/30"
                      >
                        {example}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  4. Сколько стоит AI чат-бот?                                 */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-8">
          Сколько стоит AI чат-бот?
        </h2>

        <div className="space-y-4">
          <div className="bg-clr_base/5 border border-clr_base/10 rounded-xl p-6 md:p-8">
            <h3 className="text-xl text-white font-bold mb-2">
              Базовый AI чат-бот
            </h3>
            <p className="text-clr_pra mb-4">
              Отвечает на самые частые вопросы клиентов (FAQ), предоставляет
              информацию о ценах, часах работы и основных услугах.
            </p>
            <div className="bg-[rgb(20,20,20)] rounded-xl p-4 mb-4">
              <span className="block text-sm font-medium text-clr_pra mb-1">
                Включено в пакет AI Growth Engine
              </span>
              <span className="text-2xl font-bold text-clr_base">
                от &euro;999
              </span>
            </div>
            <ul className="space-y-2">
              {[
                "Настройка и обучение на ваших данных",
                "Развёртывание на вашем сайте",
                "Первый месяц доработки включён",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-clr_pra"
                >
                  <CheckCircleFill className="text-clr_base shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-clr_base/5 border border-clr_base/10 rounded-xl p-6 md:p-8">
            <h3 className="text-xl text-white font-bold mb-2">
              Продвинутый AI чат-бот
            </h3>
            <p className="text-clr_pra mb-4">
              Индивидуальное обучение, интеграция с вашими системами (CRM,
              календарь, интернет-магазин), продвинутые сценарии и автоматизации.
            </p>
            <div className="bg-[rgb(20,20,20)] rounded-xl p-4 mb-4">
              <span className="block text-sm font-medium text-clr_pra mb-1">
                Индивидуальный расчёт стоимости
              </span>
              <span className="text-2xl font-bold text-clr_base">
                по запросу
              </span>
            </div>
            <ul className="space-y-2">
              {[
                "Интеграция с вашими системами",
                "Продвинутые сценарии разговоров",
                "Постоянная оптимизация и отчётность",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-clr_pra"
                >
                  <CheckCircleFill className="text-clr_base shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[rgb(30,30,30)] rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-2">
              ROI: Окупается ли это?
            </h3>
            <p className="text-clr_pra leading-relaxed">
              Если чат-бот экономит хотя бы{" "}
              <strong className="text-white">2 часа в день</strong> на
              поддержке клиентов, при средней почасовой ставке &euro;15, это
              означает экономию в{" "}
              <strong className="text-white">&euro;660 в месяц</strong>.
              Инвестиция окупается за несколько недель &mdash; а после этого
              чат-бот работает бесплатно, 24 часа в сутки, 365 дней в году.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  5. Как внедрить AI чат-бот на ваш сайт                      */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-8">
          Как внедрить AI чат-бот на ваш сайт
        </h2>

        <div className="space-y-4">
          {implementationSteps.map((item) => (
            <div
              key={item.step}
              className="bg-[rgb(30,30,30)] rounded-xl p-6 flex items-start gap-4"
            >
              <span className="w-12 h-12 bg-clr_base/10 rounded-xl flex items-center justify-center shrink-0">
                <item.icon className="text-clr_base text-xl" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  <span className="text-clr_base">Шаг {item.step}:</span>{" "}
                  {item.title}
                </h3>
                <p className="text-clr_pra leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  6. Без чат-бота vs С чат-ботом                               */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <div className="bg-[rgb(30,30,30)] rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">
            Без чат-бота vs С чат-ботом
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-red-500">
                <XCircleFill />
                Без чат-бота
              </h3>
              <ul className="space-y-3">
                {withoutChatbot.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-clr_pra"
                  >
                    <XCircleFill className="text-red-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-clr_base">
                <CheckCircleFill />
                С AI чат-ботом
              </h3>
              <ul className="space-y-3">
                {withChatbot.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-clr_pra"
                  >
                    <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  Как выбрать правильный чат-бот                               */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
          Как выбрать правильный чат-бот для вашей компании
        </h2>
        <p className="text-clr_pra mb-6 leading-relaxed">
          Не все чат-боты одинаковы. Прежде чем выбрать решение, убедитесь, что
          оно соответствует следующим ключевым критериям:
        </p>

        <div className="bg-[rgb(30,30,30)] rounded-xl p-6 md:p-8 space-y-5">
          {chooseCriteria.map((item) => (
            <div key={item.title} className="flex items-start gap-3">
              <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-clr_pra leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  CTA                                                         */}
      {/* ------------------------------------------------------------ */}
      <section className="text-center" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
          Хотите AI чат-бот для вашего бизнеса?
        </h2>
        <p className="text-clr_pra mb-8 max-w-xl mx-auto">
          Напишите мне, и мы разберёмся, как AI чат-бот может помочь вам
          сэкономить время и привлечь больше клиентов. Бесплатная консультация
          без обязательств.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-clr_base text-clr_title rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Хочу AI чат-бот
            <ArrowRight />
          </Link>
          <Link
            href="/all-blog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[rgb(30,30,30)] text-white rounded-full font-medium hover:bg-[rgb(40,40,40)] transition-colors"
          >
            Все статьи
            <Robot />
          </Link>
        </div>
      </section>
    </article>
  );
};

export default AiChatbotArticle;
