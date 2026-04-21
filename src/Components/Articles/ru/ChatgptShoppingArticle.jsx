"use client";

import React from "react";
import Link from "next/link";
import {
  Calendar3,
  Clock,
  Person,
  ArrowRight,
  Cart4,
  Robot,
  Search,
  GraphUpArrow,
  ChatDots,
  CheckCircleFill,
  XCircleFill,
  Stars,
  People,
  CpuFill,
  CodeSlash,
  Tags,
  Speedometer2,
  ListCheck,
  RocketTakeoff,
  ShieldCheck,
  QuestionCircleFill,
} from "react-bootstrap-icons";
import { blogUrl, serviceUrl } from "@/lib/localizedPaths";

const LOCALE = "ru";

const howItWorks = [
  {
    icon: ChatDots,
    title: "Уточняет запрос",
    text: "ChatGPT задаёт уточняющие вопросы (какая площадь, есть ли питомцы, как часто пылесосите), чтобы сузить выбор.",
  },
  {
    icon: Search,
    title: "Ищет по вебу",
    text: "Приоритет — у надёжных магазинов и производителей, а не у страниц, которые просто перепродают чужие товары.",
  },
  {
    icon: Cart4,
    title: "Показывает визуальное сравнение",
    text: "3–8 товаров с ценами, отзывами, ключевыми характеристиками и ссылками напрямую на продавцов.",
  },
];

const whyItMatters = [
  {
    icon: People,
    title: "Объём",
    text: "ChatGPT используют более 700 миллионов человек в неделю. В США AI-трафик на retail-сайты вырос на сотни процентов. Для Центральной Европы волна приходит с отставанием 6–12 месяцев.",
  },
  {
    icon: ShieldCheck,
    title: "Низкая конкуренция",
    text: "Магазины в регионе практически невидимы в AI-поиске. Если у ваших карточек товаров есть чистая Schema.org и нормальные описания, вы можете появиться в результатах раньше, чем конкуренты узнают об этом.",
  },
  {
    icon: Stars,
    title: "Новые правила",
    text: "Классическое SEO оптимизирует под клик из Google. AI-поиск оптимизирует под цитату в ответе. Другие приоритеты — преимущество у тех, кто разберётся первым.",
  },
];

const acpPaths = [
  {
    title: "Через Shopify",
    text: "Если ваш магазин на Shopify, товары автоматически интегрируются в ChatGPT через Shopify Catalog. Самый простой путь.",
  },
  {
    title: "Через Stripe",
    text: "Если вы уже используете Stripe для платежей, Stripe предлагает ACP-интеграцию как расширение.",
  },
  {
    title: "Собственная реализация",
    text: "Для WooCommerce, PrestaShop, Magento или кастомных платформ — подключение к ACP-эндпоинтам через API.",
  },
];

const checklist = [
  {
    icon: CodeSlash,
    title: "Schema.org на каждой карточке товара",
    text: "Минимум: Product, Offer, AggregateRating, Review. Без этого AI полагается на парсинг HTML — а он ненадёжен.",
  },
  {
    icon: Tags,
    title: "Полные и единообразные атрибуты",
    text: "Размер, вес, материал, совместимость, питание, страна производства, гарантия. Товар с 20 атрибутами опережает товар с тремя строчками описания.",
  },
  {
    icon: Stars,
    title: "Отзывы вне вашего сайта",
    text: "68% цитирований в AI-ответах приходят с третьих сторон. Google Reviews, Яндекс.Маркет, Amazon — весят больше, чем ваши собственные тексты.",
  },
  {
    icon: Speedometer2,
    title: "Быстрый и чистый сайт",
    text: "ChatGPT проверяет информацию напрямую на сайте. Медленный сайт с попапами и сломанными мета-тегами = AI предпочтёт другой источник.",
  },
  {
    icon: Robot,
    title: "Описания для людей, не ключевые слова",
    text: "AI понимает естественный язык. Описание, охватывающее сценарии использования, работает лучше, чем текст, набитый keywords.",
  },
  {
    icon: GraphUpArrow,
    title: "Отслеживайте AI-трафик в GA4",
    text: "Создайте канал «AI Referral» для chatgpt.com, openai.com, perplexity.ai, claude.ai, gemini.google.com — иначе клики спрячутся под Direct.",
  },
];

const stats = [
  { metric: "Недельная аудитория ChatGPT", value: "700+ млн" },
  { metric: "Рост AI-трафика на retail-сайты США (2025)", value: "+693 %" },
  { metric: "AI-цитирования с третьих сторон", value: "68 %" },
  { metric: "Бренды, отслеживающие AI-видимость", value: "16 %" },
  { metric: "Walmart: падение конверсии Instant Checkout vs свой сайт", value: "3× ниже" },
];

const myths = [
  {
    q: "«Нужно платить OpenAI, чтобы мои товары показывались.»",
    a: "Нет. Результаты органические. OpenAI пока не продаёт платные размещения в Shopping-результатах. Это прямо подтверждено в документации Agentic Commerce Protocol.",
  },
  {
    q: "«Это касается только гигантов вроде Target или Sephora.»",
    a: "Они были первыми, но ACP — открытый стандарт. Небольшой магазин с хорошими данными может быть в нишевой категории заметно виднее крупного игрока с хаотичным каталогом.",
  },
  {
    q: "«Достаточно хорошего SEO под Google.»",
    a: "Классическое SEO оптимизирует под клик. AI-поиск оптимизирует под присутствие в ответе. Пересечение большое (оба любят Schema.org, скорость, качественный контент), но не 100%. Нужны оба.",
  },
  {
    q: "«AI выдумает или перепутает мой товар.»",
    a: "Бывает. Именно поэтому важен корректный Schema.org — ChatGPT Shopping Research читает карточки товаров напрямую через структурированные данные. Чем чище фид, тем меньше шанс галлюцинации.",
  },
];

const weeks = [
  {
    icon: ListCheck,
    step: "Неделя 1",
    title: "Аудит каталога товаров",
    text: "Schema.org Product + Offer на всех товарах. Пустые атрибуты. Качество изображений (мин. 1200×1200 px, без водяных знаков).",
  },
  {
    icon: CpuFill,
    step: "Неделя 2",
    title: "Технические основы",
    text: "Core Web Vitals (LCP меньше 2.5 с, CLS 0.1, INP 200 мс). Рабочие sitemap.xml и robots.txt. llms.txt в корне.",
  },
  {
    icon: Stars,
    step: "Неделя 3",
    title: "Отзывы и доверие",
    text: "Письмо через 7 дней после доставки с просьбой об оценке. Регистрация в Google Reviews, Яндекс.Маркете. Ответы на существующие отзывы.",
  },
  {
    icon: RocketTakeoff,
    step: "Неделя 4",
    title: "Интеграция и измерение",
    text: "Shopify Catalog или ACP-коннектор для вашей платформы. Канал AI Referral в GA4. Через месяц — проверьте трафик с chatgpt.com.",
  },
];

const worthNow = [
  "Магазины с 50+ SKU в интересных категориях (электроника, мода, дом, спорт, beauty)",
  "Бренды со своими товарами, которые хотят выделиться среди перепродавцов",
  "Магазины, где товары технически описываемы с чёткими атрибутами",
];

const canWait = [
  "Совсем маленькие магазины без базового SEO — сначала основы",
  "Услуги и нематериальные предложения — ChatGPT Shopping пока только про физические товары",
  "Узко локальные магазины без онлайн-продаж",
];

const ChatgptShoppingArticle = () => {
  const serviceHref = serviceUrl("chatgpt-shopping", LOCALE);
  const seoHref = blogUrl("improve-website-seo", LOCALE);
  const chatbotHref = blogUrl("ai-chatbot-for-business", LOCALE);
  const costHref = blogUrl("website-cost-2025", LOCALE);

  return (
    <article className="container max-w-[800px] pb_120">
      {/* Header */}
      <div className="mb-12" data-aos="fade-up" data-aos-duration="800">
        <div className="flex flex-wrap items-center gap-4 text-sm text-clr_pra mb-6">
          <span className="inline-flex items-center gap-1.5">
            <Calendar3 className="text-xs" />
            21 апреля 2026
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="text-xs" />
            9 мин чтения
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Person className="text-xs" />
            Владислав Хворов
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6 leading-tight">
          ChatGPT Shopping для магазинов &mdash; как попасть в{" "}
          <span className="text-clr_base">результаты ChatGPT</span> в 2026 году
        </h1>

        <p className="text-lg text-clr_pra leading-relaxed">
          В марте 2026 OpenAI представил новое поколение шопинга внутри ChatGPT.
          Пользователям больше не нужно переключаться между десятком вкладок
          &mdash; ChatGPT сам возвращает визуальное сравнение товаров с ценой,
          отзывами и ключевыми деталями. Для магазинов это новая категория
          органического трафика. В этой статье разбираем, как попасть в ChatGPT
          Shopping и почему имеет смысл начать сейчас, а не через полгода.
        </p>
      </div>

      {/* What is ChatGPT Shopping */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-6">
          Что такое ChatGPT Shopping
        </h2>
        <p className="text-clr_pra leading-relaxed mb-6">
          ChatGPT Shopping — это не рекламная платформа. Это поисково-сравнительный
          слой внутри ChatGPT, который показывает товары{" "}
          <strong className="text-white">органически</strong> &mdash; без
          платных размещений. Когда пользователь пишет, например, «нужен тихий
          беспроводной пылесос для маленькой квартиры до 300 €», ChatGPT делает
          три вещи:
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {howItWorks.map((item) => (
            <div key={item.title} className="bg-[rgb(30,30,30)] rounded-xl p-6">
              <span className="w-12 h-12 bg-clr_base/10 rounded-xl flex items-center justify-center mb-4">
                <item.icon className="text-clr_base text-xl" />
              </span>
              <h3 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-clr_pra leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-clr_base/5 border border-clr_base/10 rounded-xl p-6">
          <p className="text-clr_pra leading-relaxed">
            В марте 2026 OpenAI признал, что попытка встроить сам платёж в
            ChatGPT (<em>Instant Checkout</em>) не сработала &mdash; Walmart
            измерил, что конверсия внутри ChatGPT была{" "}
            <strong className="text-white">в 3 раза ниже</strong>, чем на
            собственном сайте. Поэтому OpenAI сменил направление: ChatGPT
            занимается{" "}
            <strong className="text-white">поиском и сравнением</strong>, клик и
            оплата происходят на сайте магазина. Хорошая новость &mdash; ChatGPT
            присылает продавцу квалифицированный трафик, а не транзакцию с
            низкой маржой.
          </p>
        </div>
      </section>

      {/* Why it matters */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-8">
          Почему это касается и небольших магазинов
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {whyItMatters.map((item) => (
            <div
              key={item.title}
              className="bg-clr_base/5 border border-clr_base/10 rounded-xl p-6"
            >
              <span className="w-10 h-10 bg-clr_base/10 rounded-xl flex items-center justify-center mb-4">
                <item.icon className="text-clr_base" />
              </span>
              <h3 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-clr_pra leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ACP */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-6">
          Как это работает технически &mdash; Agentic Commerce Protocol (ACP)
        </h2>
        <p className="text-clr_pra leading-relaxed mb-6">
          ACP — это открытый стандарт, который OpenAI разрабатывает вместе со
          Stripe. Это интерфейс между магазином и AI-агентом. Вместо того чтобы
          ChatGPT «лазил» по вашему сайту как обычный пользователь, он получает
          структурированные данные напрямую через ACP: полный фид товаров,
          текущие акции, наличие и атрибуты.
        </p>
        <div className="bg-[rgb(30,30,30)] rounded-xl p-6 mb-6">
          <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
            <ShieldCheck className="text-clr_base" />
            ACP не забирает ваш checkout
          </h3>
          <p className="text-sm text-clr_pra leading-relaxed">
            Заказ, оплата, логистика и клиентские данные остаются в вашей
            системе. ACP — это только слой, который обеспечивает ChatGPT ваши
            товары в том же уровне детализации и актуальности, что и посетителю
            на сайте.
          </p>
        </div>
        <h3 className="text-xl text-white font-semibold mb-4">
          Три пути к ACP
        </h3>
        <div className="space-y-3">
          {acpPaths.map((path, i) => (
            <div
              key={path.title}
              className="bg-[rgb(30,30,30)] rounded-xl p-5 flex items-start gap-4"
            >
              <span className="w-10 h-10 bg-clr_base/10 rounded-xl flex items-center justify-center shrink-0 font-bold text-clr_base">
                {i + 1}
              </span>
              <div>
                <h4 className="font-semibold text-white mb-1">{path.title}</h4>
                <p className="text-sm text-clr_pra leading-relaxed">
                  {path.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Checklist */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-6">
          Что нужно сделать, чтобы товары появились
        </h2>
        <p className="text-clr_pra mb-6 leading-relaxed">
          Даже без формальной ACP-интеграции есть базовый уровень оптимизации,
          который повышает шанс, что ChatGPT найдёт ваши товары. Эти шаги имеют
          смысл для любого магазина независимо от размера.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {checklist.map((item) => (
            <div key={item.title} className="bg-[rgb(30,30,30)] rounded-xl p-6">
              <div className="flex items-start gap-4">
                <span className="w-12 h-12 bg-clr_base/10 rounded-xl flex items-center justify-center shrink-0">
                  <item.icon className="text-clr_base text-xl" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-clr_pra leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats table */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-6">
          Что говорят реальные данные
        </h2>
        <p className="text-clr_pra mb-6 leading-relaxed">
          Источники: OpenAI, Erlin, Walmart, Stripe &mdash; 2026.
        </p>
        <div className="bg-[rgb(30,30,30)] rounded-xl overflow-hidden">
          {stats.map((row, i) => (
            <div
              key={row.metric}
              className={`flex items-center justify-between gap-4 p-5 ${
                i !== stats.length - 1 ? "border-b border-[rgb(45,45,45)]" : ""
              }`}
            >
              <span className="text-sm md:text-base text-clr_pra">
                {row.metric}
              </span>
              <span className="text-lg font-bold text-clr_base shrink-0">
                {row.value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Myths (FAQ) */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-6">
          Распространённые мифы
        </h2>
        <div className="space-y-4">
          {myths.map((myth) => (
            <div key={myth.q} className="bg-[rgb(30,30,30)] rounded-xl p-6">
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 bg-red-500/10 rounded-xl flex items-center justify-center shrink-0">
                  <QuestionCircleFill className="text-red-500 text-xl" />
                </span>
                <div>
                  <h3 className="font-semibold text-white mb-2">{myth.q}</h3>
                  <p className="text-sm text-clr_pra leading-relaxed">
                    {myth.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Step by step */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-6">
          Шаг за шагом &mdash; с чего начать
        </h2>
        <div className="space-y-4">
          {weeks.map((w) => (
            <div
              key={w.step}
              className="bg-[rgb(30,30,30)] rounded-xl p-6 flex items-start gap-4"
            >
              <span className="w-12 h-12 bg-clr_base/10 rounded-xl flex items-center justify-center shrink-0">
                <w.icon className="text-clr_base text-xl" />
              </span>
              <div>
                <span className="text-xs font-medium text-clr_base uppercase tracking-wide">
                  {w.step}
                </span>
                <h3 className="text-lg font-semibold text-white mb-1 mt-1">
                  {w.title}
                </h3>
                <p className="text-sm text-clr_pra leading-relaxed">{w.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* When it makes sense */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <div className="bg-[rgb(30,30,30)] rounded-2xl p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">
            Когда стоит, а когда можно подождать
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-clr_base">
                <CheckCircleFill />
                Стоит делать сейчас
              </h3>
              <ul className="space-y-3">
                {worthNow.map((t) => (
                  <li
                    key={t}
                    className="flex items-start gap-3 text-clr_pra text-sm"
                  >
                    <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-red-500">
                <XCircleFill />
                Можно подождать
              </h3>
              <ul className="space-y-3">
                {canWait.map((t) => (
                  <li
                    key={t}
                    className="flex items-start gap-3 text-clr_pra text-sm"
                  >
                    <XCircleFill className="text-red-500 shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
          Итог
        </h2>
        <p className="text-clr_pra leading-relaxed mb-4">
          ChatGPT Shopping — это не надстройка над SEO. Это новый канал
          дистрибуции, где видимость решают{" "}
          <strong className="text-white">
            чистые данные, полные атрибуты, отзывы с третьих сторон и быстрый
            сайт
          </strong>
          . Кто сделает эти основы в 2026 году, получит преимущество, которое
          будет сложно догнать в 2027.
        </p>
        <p className="text-clr_pra leading-relaxed">
          Для большинства магазинов правильный шаг сегодня — это аудит данных о
          товарах и структуры, а не ожидание идеальной ACP-интеграции. Базу
          можно сделать за месяц.
        </p>
      </section>

      {/* CTA */}
      <section
        className="text-center mb-12"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
          Нужна помощь с интеграцией ChatGPT Shopping?
        </h2>
        <p className="text-clr_pra mb-8 max-w-xl mx-auto">
          Напишите мне. Проведу аудит вашего каталога товаров, структуры
          Schema.org и подскажу самый быстрый путь к видимости в ChatGPT.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={serviceHref}
            className="inline-flex items-center gap-2 px-8 py-4 bg-clr_base text-clr_title rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Хочу ChatGPT Shopping аудит
            <ArrowRight />
          </Link>
          <Link
            href="/ru/all-blog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[rgb(30,30,30)] text-white rounded-full font-medium hover:bg-[rgb(40,40,40)] transition-colors"
          >
            Все статьи
            <Cart4 />
          </Link>
        </div>
      </section>

      {/* Related articles */}
      <section data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-xl text-white font-semibold mb-4">
          Связанные статьи
        </h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link
            href={seoHref}
            className="bg-[rgb(30,30,30)] rounded-xl p-5 hover:bg-[rgb(40,40,40)] transition-colors"
          >
            <span className="text-xs text-clr_base uppercase tracking-wide">
              SEO
            </span>
            <p className="text-white font-medium mt-2">
              Как улучшить SEO сайта
            </p>
          </Link>
          <Link
            href={chatbotHref}
            className="bg-[rgb(30,30,30)] rounded-xl p-5 hover:bg-[rgb(40,40,40)] transition-colors"
          >
            <span className="text-xs text-clr_base uppercase tracking-wide">
              AI
            </span>
            <p className="text-white font-medium mt-2">AI-чатбот для бизнеса</p>
          </Link>
          <Link
            href={costHref}
            className="bg-[rgb(30,30,30)] rounded-xl p-5 hover:bg-[rgb(40,40,40)] transition-colors"
          >
            <span className="text-xs text-clr_base uppercase tracking-wide">
              Цены
            </span>
            <p className="text-white font-medium mt-2">
              Сколько стоит сайт в 2026
            </p>
          </Link>
        </div>
      </section>
    </article>
  );
};

export default ChatgptShoppingArticle;
