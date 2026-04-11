"use client";

import React from "react";
import Link from "next/link";
import {
  FileText,
  LightningChargeFill,
  PhoneFill,
  PenFill,
  GeoAltFill,
  Link45deg,
  TypeH1,
  ImageFill,
  CodeSlash,
  BarChartFill,
  CheckCircleFill,
  XCircleFill,
  Calendar3,
  Clock,
  Person,
  ArrowRight,
} from "react-bootstrap-icons";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const tips = [
  {
    number: "01",
    icon: FileText,
    title: "Оптимизируйте title-теги и мета-описания",
    content: (
      <>
        <p className="text-clr_pra leading-relaxed mb-4">
          Title-тег &mdash; это первое, что Google (и люди) видят в результатах
          поиска. Мета-описание &mdash; это короткий текст под заголовком, который
          решает, кликнет ли кто-то на вашу ссылку. Эти два элемента работают
          как ваша &quot;витрина&quot; в Google &mdash; если они не привлекательны и
          не релевантны, люди просто кликнут на конкурентов. Хорошо написанные
          title-тег и мета-описание могут повысить кликабельность (CTR) на
          30-50%, что напрямую влияет на вашу посещаемость.
        </p>
        <p className="text-clr_pra leading-relaxed mb-4">
          <strong className="text-white">Как это сделать:</strong> Title-тег
          должен быть 50-60 символов и содержать основное ключевое слово.
          Мета-описание должно быть 150-160 символов и мотивировать к клику.
          Всегда указывайте название города или региона, если вы предоставляете
          локальные услуги.
        </p>
        <div className="bg-[rgb(20,20,20)] rounded-xl p-4 text-sm">
          <p className="text-clr_pra mb-1">
            <strong className="text-white">Пример title-тега:</strong>
          </p>
          <p className="text-clr_base font-medium mb-3">
            &quot;Создание сайтов Братислава | Современные сайты от
            &euro;390&quot;
          </p>
          <p className="text-clr_pra mb-1">
            <strong className="text-white">Пример мета-описания:</strong>
          </p>
          <p className="text-clr_base font-medium">
            &quot;Профессиональное создание сайтов для компаний и
            предпринимателей. Быстрые, современные и SEO-оптимизированные сайты.
            Готовность за 5 дней.&quot;
          </p>
        </div>
      </>
    ),
  },
  {
    number: "02",
    icon: LightningChargeFill,
    title: "Обеспечьте быструю загрузку сайта",
    content: (
      <>
        <p className="text-clr_pra leading-relaxed mb-4">
          Скорость сайта &mdash; один из важнейших факторов ранжирования в
          Google. Медленный сайт теряет посетителей &mdash; 53% мобильных
          пользователей покидают страницу, если она не загружается за 3 секунды.
          С 2021 года так называемые Core Web Vitals (LCP, FID, CLS) являются
          официальным фактором ранжирования в Google.
        </p>
        <p className="text-clr_pra leading-relaxed mb-4">
          <strong className="text-white">Что можно сделать:</strong> Начните с
          тестирования сайта с помощью{" "}
          <strong className="text-white">Google PageSpeed Insights</strong> и{" "}
          <strong className="text-white">GTmetrix</strong>. Цель &mdash;
          достичь оценки 90+ на мобильных устройствах.
        </p>
        <ul className="space-y-2 text-clr_pra">
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            Протестируйте сайт через Google PageSpeed Insights &mdash; цель 90+
          </li>
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            Сжимайте изображения и используйте современные форматы (WebP, AVIF)
          </li>
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            Минимизируйте JavaScript и CSS &mdash; удалите неиспользуемый код
          </li>
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            Используйте качественный хостинг с быстрыми серверами
          </li>
        </ul>
      </>
    ),
  },
  {
    number: "03",
    icon: PhoneFill,
    title: "Используйте mobile-first дизайн",
    content: (
      <>
        <p className="text-clr_pra leading-relaxed mb-4">
          Google использует{" "}
          <strong className="text-white">mobile-first индексирование</strong> &mdash;
          это значит, что он оценивает ваш сайт в первую очередь по мобильной
          версии. Если ваш сайт плохо работает на мобильных устройствах, вы
          потеряете позиции и на десктопе.
        </p>
        <p className="text-clr_pra leading-relaxed mb-4">
          Более 60% всех посещений сайтов приходится на мобильные
          устройства. Адаптивный дизайн &mdash; это не роскошь, а необходимость.
        </p>
        <p className="text-clr_pra leading-relaxed">
          <strong className="text-white">Совет:</strong> Протестируйте свой
          сайт с помощью{" "}
          <strong className="text-white">Google Mobile-Friendly Test</strong>{" "}
          и проверьте, что тексты читаемы без масштабирования, кнопки достаточно
          большие, а макет адаптирован для маленьких экранов.
        </p>
      </>
    ),
  },
  {
    number: "04",
    icon: PenFill,
    title: "Создавайте качественный контент",
    content: (
      <>
        <p className="text-clr_pra leading-relaxed mb-4">
          Google стремится показать пользователям лучший ответ на их вопрос. Если
          ваш контент отвечает на реальные вопросы ваших клиентов, Google
          вознаградит его более высокой позицией.
        </p>
        <p className="text-clr_pra leading-relaxed mb-4">
          <strong className="text-white">
            Пишите для людей, а не для роботов.
          </strong>{" "}
          Вместо повторения ключевых слов сосредоточьтесь на:
        </p>
        <ul className="space-y-2 text-clr_pra">
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            Ответах на конкретные вопросы ваших клиентов
          </li>
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            Понятной структуре с заголовками и списками
          </li>
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            Обновлении контента &mdash; устаревшая информация падает в рейтинге
          </li>
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            Уникальном контенте &mdash; не копируйте тексты с других сайтов
          </li>
        </ul>
      </>
    ),
  },
  {
    number: "05",
    icon: GeoAltFill,
    title: "Настройте Google Business профиль",
    content: (
      <>
        <p className="text-clr_pra leading-relaxed mb-4">
          Для локального бизнеса{" "}
          <strong className="text-white">Google Business Profile</strong>{" "}
          (ранее Google My Business) &mdash; один из важнейших SEO-инструментов.
          Профиль, заполненный на 100%, имеет в 7 раз больше шансов получить
          клики, чем неполный профиль. Кроме того, он отображается в Google Maps,
          что критически важно для локального бизнеса.
        </p>
        <p className="text-clr_pra leading-relaxed mb-4">
          <strong className="text-white">Полностью заполните профиль:</strong>{" "}
          Добавьте точные часы работы, включая праздники, описание ваших услуг
          и категории бизнеса. Активно отвечайте на отзывы. Добавляйте
          публикации минимум раз в неделю &mdash; компании, которые регулярно
          публикуют, получают в среднем на 42% больше запросов маршрута и на 35%
          больше кликов на сайт.
        </p>
        <ul className="space-y-2 text-clr_pra">
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            Точный адрес, телефон, часы работы и сайт
          </li>
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            Качественные фотографии вашего бизнеса (экстерьер, интерьер, продукты)
          </li>
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            Активно собирайте отзывы от довольных клиентов
          </li>
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            Регулярно добавляйте публикации и новости
          </li>
        </ul>
      </>
    ),
  },
  {
    number: "06",
    icon: Link45deg,
    title: "Получите обратные ссылки (backlinks)",
    content: (
      <>
        <p className="text-clr_pra leading-relaxed mb-4">
          Обратные ссылки &mdash; это ссылки с других сайтов на ваш. Google
          рассматривает их как &quot;голоса доверия&quot; &mdash; чем больше
          качественных ссылок у вас есть, тем выше вы окажетесь в результатах поиска.
        </p>
        <p className="text-clr_pra leading-relaxed mb-4">
          <strong className="text-white">
            Качество важнее количества.
          </strong>{" "}
          Одна ссылка с авторитетного сайта ценнее 100 ссылок со спам-страниц.
        </p>
        <ul className="space-y-2 text-clr_pra">
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            Локальные бизнес-каталоги и справочники
          </li>
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            Сайты партнёров и поставщиков
          </li>
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            Отраслевые ассоциации и объединения
          </li>
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            Гостевые публикации &mdash; пишите статьи для других сайтов вашей отрасли
          </li>
        </ul>
      </>
    ),
  },
  {
    number: "07",
    icon: TypeH1,
    title: "Используйте правильные заголовки (H1-H6)",
    content: (
      <>
        <p className="text-clr_pra leading-relaxed mb-4">
          Заголовки помогают Google понять структуру вашего контента. Правильная
          иерархия заголовков &mdash; как оглавление книги, позволяющее быстро
          ориентироваться.
        </p>
        <ul className="space-y-2 text-clr_pra">
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            <span>
              <strong className="text-white">Один H1 на страницу</strong> &mdash;
              главный заголовок, содержащий основное ключевое слово
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            <span>
              <strong className="text-white">H2 для основных разделов</strong>{" "}
              &mdash; разделите контент на логические блоки
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            <span>
              <strong className="text-white">H3-H6 для подразделов</strong>{" "}
              &mdash; соблюдайте иерархию (не перескакивайте с H2 на H4)
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            Ключевые слова вставляйте естественно &mdash; не пишите заголовки только для
            Google
          </li>
        </ul>
      </>
    ),
  },
  {
    number: "08",
    icon: ImageFill,
    title: "Оптимизируйте изображения",
    content: (
      <>
        <p className="text-clr_pra leading-relaxed mb-4">
          Изображения часто составляют 50-80% размера веб-страницы.
          Неоптимизированные изображения &mdash; самая частая причина медленной
          загрузки и плохой SEO-оценки.
        </p>
        <ul className="space-y-2 text-clr_pra">
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            <span>
              <strong className="text-white">Alt-тексты</strong> &mdash; каждое
              изображение должно иметь описательный alt-текст
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            <span>
              <strong className="text-white">Сжатие</strong> &mdash; уменьшите
              размер без видимой потери качества (TinyPNG, Squoosh)
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            <span>
              <strong className="text-white">Правильные форматы</strong> &mdash;
              WebP и AVIF на 30-50% меньше JPEG
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            <span>
              <strong className="text-white">Lazy loading</strong> &mdash;
              изображения ниже видимой области загружайте только при прокрутке
            </span>
          </li>
        </ul>
      </>
    ),
  },
  {
    number: "09",
    icon: CodeSlash,
    title: "Добавьте Schema-разметку (структурированные данные)",
    content: (
      <>
        <p className="text-clr_pra leading-relaxed mb-4">
          Schema-разметка &mdash; это специальный код, который помогает Google лучше
          понять содержание вашей страницы. Благодаря ней вы можете получить{" "}
          <strong className="text-white">rich snippets</strong> &mdash; расширенные
          результаты в поиске со звёздочками, ценами или FAQ, которые значительно
          повышают видимость и кликабельность.
        </p>
        <p className="text-clr_pra leading-relaxed mb-4">
          <strong className="text-white">Наиболее полезные типы Schema:</strong>
        </p>
        <ul className="space-y-2 text-clr_pra">
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            <span>
              <strong className="text-white">LocalBusiness</strong> &mdash; для
              локального бизнеса (адрес, часы работы, контакты)
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            <span>
              <strong className="text-white">FAQ Schema</strong> &mdash;
              вопросы и ответы отображаются прямо в результатах поиска
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            <span>
              <strong className="text-white">Product / Service</strong> &mdash;
              для продуктов и услуг с ценами и рейтингами
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            <span>
              <strong className="text-white">BlogPosting</strong> &mdash; для
              статей и блог-постов
            </span>
          </li>
        </ul>
      </>
    ),
  },
  {
    number: "10",
    icon: BarChartFill,
    title: "Отслеживайте результаты и корректируйте стратегию",
    content: (
      <>
        <p className="text-clr_pra leading-relaxed mb-4">
          SEO без измерений &mdash; как езда без спидометра. Вам нужно знать, что
          работает, а что нет.
        </p>
        <p className="text-clr_pra leading-relaxed mb-4">
          <strong className="text-white">Основные инструменты (бесплатные):</strong>
        </p>
        <ul className="space-y-2 text-clr_pra mb-4">
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            <span>
              <strong className="text-white">Google Search Console</strong>{" "}
              &mdash; позиции, индексация, технические ошибки
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
            <span>
              <strong className="text-white">Google Analytics</strong> &mdash;
              посещаемость, поведение пользователей, конверсии
            </span>
          </li>
        </ul>
        <p className="text-clr_pra leading-relaxed">
          <strong className="text-white">Что отслеживать:</strong> позиции
          ключевых слов, органический трафик, показатель отказов, количество и
          качество обратных ссылок, и самое главное &mdash; конверсии: сколько
          посетителей становятся клиентами.
        </p>
      </>
    ),
  },
];

const myths = [
  {
    title: "SEO \u2014 это не разовая акция",
    description:
      "Многие компании думают, что SEO достаточно сделать один раз и забыть. Реальность другая \u2014 SEO \u2014 это непрерывный процесс. Google постоянно меняет алгоритмы, конкуренты улучшаются, и контент нужно регулярно обновлять.",
  },
  {
    title: "SEO \u2014 это не только ключевые слова",
    description:
      "Ключевые слова важны, но они лишь один кусочек пазла. Google оценивает и скорость сайта, мобильную оптимизацию, структуру страницы, качество контента и пользовательский опыт (UX).",
  },
  {
    title: "Результаты SEO не появятся за неделю",
    description:
      "SEO \u2014 это марафон, а не спринт. Реалистичный срок \u2014 3-6 месяцев для видимых результатов. Локальное SEO в менее конкурентных областях может принести результаты быстрее, но и здесь речь идёт о неделях, а не о днях.",
  },
];

const checklist = [
  { bold: "Title-тег", text: "содержит основное ключевое слово + город" },
  { bold: "Мета-описание", text: "написано для людей, а не для роботов" },
  { bold: null, text: "Сайт загружается менее чем за 3 секунды на мобильных и десктопе" },
  { bold: null, text: "Сайт полностью адаптивный и работает на всех устройствах" },
  { bold: "Google Business профиль", text: "заполнен на 100%" },
  { bold: null, text: "Каждая страница имеет уникальный H1-заголовок с ключевым словом" },
  { bold: null, text: "У изображений заполнены alt-тексты и они сжаты" },
  { bold: "SSL-сертификат", text: "(HTTPS) установлен \u2014 без него Google отмечает сайт как небезопасный" },
  { bold: "Google Search Console", text: "зарегистрирован и не имеет критических ошибок" },
  { bold: "Schema-разметка", text: "внедрена (как минимум LocalBusiness или FAQ)" },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

const SeoArticle = () => {
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
            9 мин чтения
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Person className="text-xs" />
            Владислав Хворов
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6 leading-tight">
          Как улучшить SEO вашего сайта &mdash;{" "}
          <span className="text-clr_base">10 практических советов</span>
        </h1>

        <p className="text-lg text-clr_pra leading-relaxed mb-6">
          SEO не должно быть сложным. Существуют конкретные шаги, которые вы
          можете предпринять уже сегодня, чтобы ваш сайт занимал более высокие
          позиции в Google. В этой статье я покажу вам 10 практических советов
          по оптимизации сайта, которые работают для малого бизнеса и
          предпринимателей. Никакого технического жаргона &mdash; только понятные
          рекомендации, которые принесут результат.
        </p>

        <p className="text-base text-clr_pra leading-relaxed">
          SEO (Search Engine Optimization) &mdash; это набор техник, которые
          помогают вашему сайту занимать более высокие позиции в результатах
          Google. Это не магия и не обман &mdash; это систематическая работа над тем,
          чтобы ваш сайт был быстрым, релевантным и авторитетным. Локальное
          SEO особенно важно, потому что большинство ваших клиентов ищут услуги
          в своём городе.
        </p>
      </div>

      {/* 10 SEO Tips */}
      <div className="space-y-6 mb-16">
        {tips.map((tip) => (
          <section
            key={tip.number}
            className="bg-[rgb(30,30,30)] rounded-xl p-6 md:p-8"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="flex items-start gap-4 mb-4">
              <span className="w-12 h-12 bg-clr_base/10 rounded-xl flex items-center justify-center shrink-0">
                <tip.icon className="text-clr_base text-xl" />
              </span>
              <div>
                <span className="text-sm font-bold text-clr_base">
                  {tip.number}
                </span>
                <h2 className="text-xl md:text-2xl font-bold text-white">
                  {tip.title}
                </h2>
              </div>
            </div>
            {tip.content}
          </section>
        ))}
      </div>

      {/* Bonus: Что НЕ является SEO */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-8">
          Бонус: Что НЕ является SEO
        </h2>

        <div className="bg-[rgb(30,30,30)] rounded-2xl p-8 md:p-12">
          <p className="text-clr_pra mb-6">
            Помимо того, что нужно делать, важно знать и распространённые мифы
            о SEO:
          </p>
          <div className="space-y-6">
            {myths.map((myth) => (
              <div key={myth.title} className="flex items-start gap-4">
                <XCircleFill className="text-red-500 text-lg shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {myth.title}
                  </h3>
                  <p className="text-clr_pra text-sm leading-relaxed">
                    {myth.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO-чеклист */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-8">
          SEO-чеклист для малого бизнеса
        </h2>

        <div className="bg-clr_base/5 border border-clr_base/10 rounded-xl p-8 md:p-12">
          <p className="text-clr_pra mb-6 leading-relaxed">
            Вот краткий обзор самых важных вещей, которые должен иметь каждый
            сайт малого бизнеса. Используйте этот список как контрольный лист:
          </p>
          <ul className="space-y-4 text-clr_pra">
            {checklist.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircleFill className="text-clr_base shrink-0 mt-0.5" />
                <span>
                  {item.bold && (
                    <strong className="text-white">{item.bold} </strong>
                  )}
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section
        className="bg-clr_base/5 border border-clr_base/10 rounded-xl p-8 md:p-12 text-center"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
          Нужна помощь с SEO?
        </h2>
        <p className="text-clr_pra mb-8 max-w-xl mx-auto">
          Если вы не хотите заниматься SEO самостоятельно, я с радостью помогу.
          Проведу SEO-аудит вашего сайта, предложу стратегию и внедрю изменения,
          которые принесут результат.
        </p>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-clr_base text-clr_title rounded-full font-medium hover:opacity-90 transition-opacity"
        >
          Хочу SEO-консультацию
          <ArrowRight />
        </Link>
      </section>
    </article>
  );
};

export default SeoArticle;
