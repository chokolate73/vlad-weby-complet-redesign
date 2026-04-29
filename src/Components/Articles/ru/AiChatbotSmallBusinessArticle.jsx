"use client";

import React from "react";
import Link from "next/link";
import {
  Calendar3,
  Clock,
  Person,
  ArrowRight,
  CheckCircleFill,
  XCircleFill,
  Robot,
  ChatDots,
  Scissors,
  Cart4,
  Wrench,
  Globe2,
  Stars,
  CurrencyEuro,
  ListCheck,
  LightningChargeFill,
  GraphUpArrow,
  ExclamationTriangleFill,
} from "react-bootstrap-icons";
import { serviceUrl } from "@/lib/localizedPaths";

const LOCALE = "ru";

const capabilities = [
  "Отвечает на вопросы об услугах, ценах и доступности — мгновенно, 24/7.",
  "Собирает контактные данные и пересылает их на почту или в CRM.",
  "Помогает с бронированием и оформлением заказов.",
  "Общается на нескольких языках без найма дополнительных сотрудников.",
  "Отвечает последовательно — не путает прайс-лист, не забывает про акции.",
];

const limitations = [
  "Не заменяет личный контакт при сложных консультациях.",
  "Не подходит для работы с жалобами — там клиент хочет говорить с человеком.",
  "Не будет работать хорошо без качественной информации о вашем бизнесе.",
];

const targetGroups = [
  {
    icon: Scissors,
    title: "Салоны, клиники, студии",
    text: "Клиенты спрашивают об услугах и записи даже в нерабочее время. Чат-бот ответит и соберёт контакт.",
  },
  {
    icon: Cart4,
    title: "Интернет-магазины",
    text: "Покупатели хотят знать о наличии, доставке или возврате. Чат-бот отвечает на 80% типичных вопросов без участия человека.",
  },
  {
    icon: Wrench,
    title: "Мастера и сервисные компании",
    text: "Сантехник, электрик, клининговая фирма. Клиент ищет быстрый ответ. Кто ответит первым — тот получит заказ.",
  },
  {
    icon: Globe2,
    title: "Бизнесы с многоязычной аудиторией",
    text: "Если вы работаете с клиентами на русском, немецком или английском, чат-бот справится со всеми языками без дополнительных затрат.",
  },
];

const noFitSignals = [
  "У вас 2–3 клиента в месяц и вы общаетесь с ними лично — объём не окупит вложения.",
  "Ваш бизнес строится исключительно на личных отношениях и индивидуальных консультациях.",
  "Ваши клиенты предпочитают телефонные звонки и не пишут сообщения.",
];

const automations = [
  {
    icon: ChatDots,
    text: "Автоматические ответы на сообщения в Instagram и Facebook — тот же чат-бот, только на другой платформе.",
  },
  {
    icon: ListCheck,
    text: "Подключение контактной формы к CRM — новый контакт записывается автоматически, без ручного ввода данных.",
  },
  {
    icon: LightningChargeFill,
    text: "Уведомления о новых заказах — письмо или SMS приходит мгновенно, без необходимости проверять панель управления.",
  },
  {
    icon: GraphUpArrow,
    text: "Автоматические follow-up письма — клиент получает подтверждение и следующие шаги сразу после отправки формы.",
  },
];

const steps = [
  {
    icon: ChatDots,
    step: "1",
    title: "Бесплатная консультация",
    text: "Вместе рассмотрим ваш сайт и процессы, определим, где вы теряете время или клиентов.",
  },
  {
    icon: ListCheck,
    step: "2",
    title: "Индивидуальное решение",
    text: "Не всем нужен чат-бот. Иногда достаточно лучшей формы, автоответа или интеграции уже имеющихся инструментов.",
  },
  {
    icon: Robot,
    step: "3",
    title: "Запуск за 3–5 дней",
    text: "Никаких месяцев разработки. Я быстро настраиваю и тестирую чат-бот или автоматизацию, затем передаю в рабочем виде.",
  },
];

const AiChatbotSmallBusinessArticle = () => {
  return (
    <article className="container max-w-[800px] pb_120">
      {/* Article header */}
      <div className="mb-12" data-aos="fade-up" data-aos-duration="800">
        <div className="flex flex-wrap items-center gap-4 text-sm text-clr_pra mb-6">
          <span className="inline-flex items-center gap-1.5">
            <Calendar3 className="text-xs" />
            29 апреля 2026
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="text-xs" />
            7 мин чтения
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Person className="text-xs" />
            Владислав Хворов
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6 leading-tight">
          AI-чатбот на сайте:{" "}
          <span className="text-clr_base">
            Как малый бизнес получает клиентов даже ночью
          </span>
        </h1>

        <p className="text-lg text-clr_pra leading-relaxed mb-4">
          Большинство малых предприятий теряют клиентов в тот момент, когда
          никто не сидит за компьютером. Клиент пишет вопрос через сайт в 22:00,
          не получает ответа — и утром обращается к конкуренту. Не потому что
          вы хуже, а потому что вас не было на месте.
        </p>
        <p className="text-clr_pra leading-relaxed">
          AI-чатбот решает эту проблему. И в 2026 году это уже не технология
          только для крупных корпораций — запуск занимает дни, а не месяцы, и
          стоит{" "}
          <strong className="text-white">
            долю зарплаты дополнительного сотрудника
          </strong>
          .
        </p>
      </div>

      {/* ------------------------------------------------------------ */}
      {/*  1. What AI chatbot does                                     */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
          Что AI-чатбот реально умеет (и чего нет)
        </h2>
        <p className="text-clr_pra mb-6 leading-relaxed">
          Забудьте про надоедливые окошки 2018 года, которые умели только
          отвечать «Напишите нам на почту». Современный AI-чатбот понимает
          естественный язык — клиент спрашивает{" "}
          <em>«Есть ли у вас место в пятницу во второй половине дня?»</em> и
          чат-бот отвечает конкретно, опираясь на доступные ему данные.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-clr_base/5 border border-clr_base/10 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <CheckCircleFill className="text-clr_base" />
              Что чат-бот умеет
            </h3>
            <ul className="space-y-2">
              {capabilities.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-clr_pra"
                >
                  <CheckCircleFill className="text-clr_base shrink-0 mt-0.5 text-xs" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[rgb(30,30,30)] rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <XCircleFill className="text-red-500" />
              Что чат-бот не умеет
            </h3>
            <ul className="space-y-2">
              {limitations.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-clr_pra"
                >
                  <XCircleFill className="text-red-500 shrink-0 mt-0.5 text-xs" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-[rgb(30,30,30)] rounded-xl p-6">
          <p className="text-clr_pra leading-relaxed">
            Главное — чат-бот{" "}
            <strong className="text-white">не должен заменять вас</strong>. Он
            должен перехватить клиента в тот момент, когда вы недоступны.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  2. Case study                                               */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
          Как это выглядит на практике: велнес-студия в Германии
        </h2>
        <p className="text-clr_pra mb-6 leading-relaxed">
          Это не теоретический пример. Я внедрил AI-чатбот для велнес-студии{" "}
          <strong className="text-white">Beauty in Perfection</strong> в
          Германии.
        </p>

        <div className="space-y-4">
          <div className="bg-[rgb(30,30,30)] rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <ExclamationTriangleFill className="text-yellow-500" />
              До чат-бота
            </h3>
            <p className="text-clr_pra leading-relaxed">
              Студия получала обращения через сайт, Instagram и WhatsApp — на
              немецком, английском и русском. Владелица не успевала отвечать
              вовремя, особенно в нерабочее время и по выходным. Потенциальные
              клиенты либо ждали, либо уходили к другим.
            </p>
          </div>

          <div className="bg-clr_base/5 border border-clr_base/10 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <Stars className="text-clr_base" />
              Что мы сделали
            </h3>
            <ul className="space-y-2">
              {[
                "Чат-бот автоматически отвечает на вопросы о процедурах, ценах и доступности.",
                "Общается на трёх языках — немецком, английском, русском.",
                "Собирает контактные данные и запросы на бронирование.",
                "Работает 24/7 на сайте и в социальных сетях.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-clr_pra">
                  <CheckCircleFill className="text-clr_base shrink-0 mt-1 text-xs" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[rgb(30,30,30)] rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <GraphUpArrow className="text-clr_base" />
              Результат
            </h3>
            <p className="text-clr_pra leading-relaxed">
              Студия начала перехватывать спрос, который раньше просто
              уходил. Клиенты, писавшие вечером или в выходные, получали
              мгновенный ответ — и большинство из них записывались. Владелица
              заходила утром и видела готовые контакты, а не непрочитанные
              сообщения.
            </p>
            <p className="text-clr_pra leading-relaxed mt-3">
              Проект занял{" "}
              <strong className="text-white">несколько дней</strong> — не
              недель. И не потребовал никаких технических знаний со стороны
              клиента.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  3. Who it's for                                             */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
          Кому подходит AI-чатбот
        </h2>
        <p className="text-clr_pra mb-6 leading-relaxed">
          Не каждому бизнесу нужен чат-бот. Но если вы узнаёте себя хотя бы в
          одном из этих пунктов — он, скорее всего, вам поможет:
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {targetGroups.map((group) => (
            <div
              key={group.title}
              className="bg-[rgb(30,30,30)] rounded-xl p-6"
            >
              <div className="flex items-start gap-3">
                <span className="w-10 h-10 bg-clr_base/10 rounded-xl flex items-center justify-center shrink-0">
                  <group.icon className="text-clr_base" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-white mb-1">
                    {group.title}
                  </h3>
                  <p className="text-sm text-clr_pra leading-relaxed">
                    {group.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[rgb(30,30,30)] rounded-xl p-6">
          <h3 className="text-base font-semibold text-white mb-3">
            Когда чат-бот{" "}
            <span className="text-clr_base">не имеет смысла</span>
          </h3>
          <ul className="space-y-2">
            {noFitSignals.map((signal) => (
              <li key={signal} className="flex items-start gap-2 text-clr_pra">
                <ExclamationTriangleFill className="text-yellow-500 shrink-0 mt-1 text-xs" />
                <span className="text-sm">{signal}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  4. Costs                                                    */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
          Сколько стоит чат-бот и что он экономит
        </h2>
        <p className="text-clr_pra mb-6 leading-relaxed">
          Большинство малых предприятий представляют чат-бот как дорогую
          технологию. Реальность 2026 года другая.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-[rgb(30,30,30)] rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 bg-clr_base/10 rounded-xl flex items-center justify-center shrink-0">
                <CurrencyEuro className="text-clr_base" />
              </span>
              <h3 className="text-base font-semibold text-white">
                Стоимость внедрения
              </h3>
            </div>
            <p className="text-clr_pra text-sm leading-relaxed">
              Единовременная настройка с интеграцией данных и тестированием
              обходится{" "}
              <strong className="text-white">в несколько сотен евро</strong> —
              не тысяч. Ежемесячные расходы на работу AI обычно ниже цены
              одного бизнес-ланча в день.
            </p>
          </div>
          <div className="bg-clr_base/5 border border-clr_base/10 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 bg-clr_base/10 rounded-xl flex items-center justify-center shrink-0">
                <GraphUpArrow className="text-clr_base" />
              </span>
              <h3 className="text-base font-semibold text-white">
                Что вы экономите
              </h3>
            </div>
            <ul className="space-y-2 text-sm text-clr_pra">
              <li className="flex items-start gap-2">
                <CheckCircleFill className="text-clr_base shrink-0 mt-0.5 text-xs" />
                <span>
                  Время на ответы на одинаковые вопросы — около часа в день.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircleFill className="text-clr_base shrink-0 mt-0.5 text-xs" />
                <span>Упущенных клиентов, ушедших без ответа.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircleFill className="text-clr_base shrink-0 mt-0.5 text-xs" />
                <span>
                  Расходы на многоязычную поддержку без дополнительного
                  сотрудника.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-[rgb(30,30,30)] rounded-xl p-6">
          <p className="text-clr_pra leading-relaxed text-sm">
            Принцип прост:{" "}
            <strong className="text-white">
              если вы теряете клиентов из-за недоступности, чат-бот — это
              инвестиция с быстрой окупаемостью
            </strong>
            . Если хотя бы один клиент в месяц уходит к конкуренту, потому что
            вы не ответили вовремя, чат-бот окупает сам себя.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  5. Automation beyond chatbot                                */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
          Автоматизация за рамками чат-бота
        </h2>
        <p className="text-clr_pra mb-6 leading-relaxed">
          Чат-бот — это часто лишь первый шаг. Когда AI уже работает на вашем
          сайте, открывается возможность для дальнейшей автоматизации, которая
          экономит время и снижает количество ошибок.
        </p>

        <div className="space-y-3">
          {automations.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="bg-[rgb(30,30,30)] rounded-xl p-4 flex items-start gap-4"
            >
              <span className="w-10 h-10 bg-clr_base/10 rounded-xl flex items-center justify-center shrink-0">
                <Icon className="text-clr_base" />
              </span>
              <p className="text-clr_pra leading-relaxed text-sm">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  6. CTA                                                      */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-6">
          Как начать
        </h2>

        <div className="space-y-4 mb-8">
          {steps.map((item) => (
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
                <p className="text-clr_pra leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-clr_base/5 border border-clr_base/10 rounded-2xl p-8 md:p-10 text-center">
          <h3 className="text-2xl text-white font-bold mb-3">
            Ваш сайт может работать за вас — даже пока вы спите
          </h3>
          <p className="text-clr_pra mb-8 max-w-xl mx-auto leading-relaxed">
            Технические знания не нужны. Большой бюджет не нужен. Достаточно
            знать, где вы теряете клиентов.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-clr_base text-clr_title rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Бесплатная консультация
              <ArrowRight />
            </Link>
            <Link
              href={serviceUrl("ai-chatbot", LOCALE)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[rgb(30,30,30)] text-white rounded-full font-medium hover:bg-[rgb(40,40,40)] transition-colors"
            >
              Подробнее об услуге
              <Robot />
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
};

export default AiChatbotSmallBusinessArticle;
