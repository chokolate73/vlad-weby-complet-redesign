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
    title: "24/7 Availability",
    description:
      "Your chatbot answers customers even at three in the morning. No message is missed, no dissatisfied customer leaves for competitors.",
  },
  {
    icon: LightningChargeFill,
    number: "2",
    title: "Instant Responses",
    description:
      "No more waiting for an email reply. The customer gets information in seconds, not hours.",
  },
  {
    icon: People,
    number: "3",
    title: "Time Savings",
    description:
      "The chatbot automatically handles repetitive questions \u2014 opening hours, prices, availability. You can focus on what really matters.",
  },
  {
    icon: GraphUpArrow,
    number: "4",
    title: "More Conversions",
    description:
      "The chatbot proactively engages visitors who would otherwise leave. It helps them find what they\u2019re looking for and turns interest into an order.",
  },
  {
    icon: Stars,
    number: "5",
    title: "Professional Impression",
    description:
      "An AI chatbot on your website shows that you\u2019re a modern company keeping up with the times. Customers appreciate this.",
  },
];

const useCases = [
  {
    icon: Scissors,
    business: "Beauty Salon",
    description:
      "The chatbot answers questions about the price list, available dates, and opening hours. Clients can immediately book an appointment \u2014 without calling.",
    examples: [
      "\u00ABWhat dates are available on Friday?\u00BB",
      "\u00ABHow much does a haircut + coloring cost?\u00BB",
      "\u00ABWhere are you located and where can I park?\u00BB",
    ],
  },
  {
    icon: Cart4,
    business: "Online Store",
    description:
      "Automatic information about order status, return procedures, and product recommendations based on customer preferences.",
    examples: [
      "\u00ABWhere is my order #12345?\u00BB",
      "\u00ABHow do I return a product?\u00BB",
      "\u00ABIs this item available in size M?\u00BB",
    ],
  },
  {
    icon: Briefcase,
    business: "Law Firm",
    description:
      "The chatbot pre-evaluates what problem the client is contacting about, collects basic information, and requests necessary documents before the consultation.",
    examples: [
      "\u00ABI need help with an employment contract.\u00BB",
      "\u00ABHow much does an initial consultation cost?\u00BB",
      "\u00ABWhat documents should I prepare?\u00BB",
    ],
  },
  {
    icon: Wrench,
    business: "Repair Services",
    description:
      "Customers can request a cost estimate through the chatbot, check available dates, and describe what needs to be repaired \u2014 at any time.",
    examples: [
      "\u00ABI need to fix a leaking faucet.\u00BB",
      "\u00ABAre there any available dates next week?\u00BB",
      "\u00ABHow much does a lock replacement roughly cost?\u00BB",
    ],
  },
];

const withoutChatbot = [
  "Missed message = lost customer",
  "Slow responses to typical questions",
  "Customers leave for competitors",
  "Repeating the same answers every day",
];

const withChatbot = [
  "Instant answers to every question",
  "Satisfied customers who come back",
  "More conversions and orders",
  "Time for more important things in your business",
];

const implementationSteps = [
  {
    icon: ListCheck,
    step: "1",
    title: "Collect the most frequent customer questions",
    description:
      "Review your email, social media messages, and calls. Which questions come up most often? They will become the foundation for your chatbot.",
  },
  {
    icon: CpuFill,
    step: "2",
    title: "Train the chatbot on your data",
    description:
      "The chatbot will learn from your FAQ, price list, product information, and service details. The better the data you provide, the more accurately it will respond.",
  },
  {
    icon: RocketTakeoff,
    step: "3",
    title: "Launch and continuous improvement",
    description:
      "We deploy the chatbot on your website and monitor its performance. Based on real conversations, we continuously improve it for even better results.",
  },
];

const chooseCriteria = [
  {
    title: "Can it be trained on your data?",
    description:
      "A quality chatbot should be trained on your FAQ, price list, service descriptions, and other company materials. Only then will it respond accurately and to the point \u2014 not with generic phrases.",
  },
  {
    title: "Does it support your language and understand your customers?",
    description:
      "Many chatbot solutions work well in English but struggle with other languages. Make sure the chatbot understands local phrases, slang, and spelling mistakes that customers typically make.",
  },
  {
    title: "Can it hand over the conversation to a live agent?",
    description:
      "Even the best chatbot will encounter a situation it can\u2019t resolve on its own. In that case, it should be able to smoothly hand over the conversation to you or your team \u2014 including the entire conversation history.",
  },
  {
    title: "Is it easy to integrate into your existing website?",
    description:
      "The ideal solution doesn\u2019t require rebuilding your entire website. The chatbot should be easy to place on any page \u2014 just add a short piece of code and it\u2019s ready to chat with your visitors.",
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
            February 12, 2026
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="text-xs" />
            8 min read
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Person className="text-xs" />
            Vladislav Khvorov
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6 leading-tight">
          AI Chatbot for Business &mdash; How to Automate{" "}
          <span className="text-clr_base">Customer Support</span>
        </h1>

        <p className="text-lg text-clr_pra leading-relaxed">
          AI chatbots are no longer science fiction. Even small businesses today
          can use them to save time, improve customer service, and increase
          sales. In this article, I&apos;ll explain what an AI chatbot is, why
          you need one, and how to implement it on your website.
        </p>
      </div>

      {/* ------------------------------------------------------------ */}
      {/*  1. What Is an AI Chatbot and How Does It Work?              */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-6">
          What Is an AI Chatbot and How Does It Work?
        </h2>

        <div className="space-y-4">
          {[
            {
              icon: ChatDots,
              title: "Traditional Chatbot vs AI Chatbot",
              text: (
                <>
                  A traditional chatbot works on the principle of pre-programmed
                  responses &mdash; it only understands phrases that were built
                  into it. An AI chatbot works differently. It uses artificial
                  intelligence to understand{" "}
                  <strong className="text-white">natural language</strong>. A
                  customer can ask a question in different ways, and the chatbot
                  will understand what they mean.
                </>
              ),
            },
            {
              icon: CpuFill,
              title: "How AI Understands Natural Language",
              text: 'An AI chatbot analyzes the intent behind a question, not just keywords. When a customer writes "when are you open," "what are your hours," or "do you work on Saturdays" \u2014 the chatbot understands they\u2019re all asking about the same thing and responds correctly.',
            },
            {
              icon: Robot,
              title: "Trained on Your Company\u2019s Data",
              text: "We train the chatbot on your specific data \u2014 FAQ, price list, product information, service terms. Thanks to this, it responds accurately and to the point, not with generic phrases. It\u2019s like having a virtual employee who knows your company perfectly.",
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
      {/*  1b. What an AI Chatbot Is NOT                               */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
          What an AI Chatbot Is{" "}
          <span className="text-clr_base">NOT</span>
        </h2>
        <p className="text-clr_pra mb-6 leading-relaxed">
          There are many myths surrounding chatbots. Let&apos;s debunk the most
          common ones:
        </p>

        <div className="space-y-4">
          {[
            {
              title: 'Myth: "A chatbot will replace employees"',
              text: (
                <>
                  <strong className="text-white">No.</strong> A chatbot handles
                  routine questions that make up 70&ndash;80% of all inquiries
                  &mdash; opening hours, price list, order status. Complex cases,
                  complaints, or individual requests are automatically forwarded
                  to you or your team. It&apos;s an{" "}
                  <strong className="text-white">assistant</strong>, not a
                  replacement.
                </>
              ),
            },
            {
              title: 'Myth: "It\u2019s only for large companies"',
              text: (
                <>
                  <strong className="text-white">No.</strong> Small businesses
                  actually benefit the most from a chatbot. A large company has a
                  call center and a support team. A small entrepreneur often
                  can&apos;t respond to every message instantly &mdash; and
                  that&apos;s exactly where a chatbot fills the gap.
                </>
              ),
            },
            {
              title: 'Myth: "Customers don\u2019t want to talk to a robot"',
              text: (
                <>
                  <strong className="text-white">Not quite.</strong> Research
                  shows that{" "}
                  <strong className="text-white">
                    69% of consumers prefer a chatbot
                  </strong>{" "}
                  for quick answers to simple questions. The key is that the
                  chatbot should know when to hand over the conversation to a
                  live person &mdash; and that&apos;s exactly how our chatbot
                  works.
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
      {/*  2. 5 Reasons Why Your Business Needs an AI Chatbot          */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-8">
          5 Reasons Why Your Business Needs an AI Chatbot
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
      {/*  3. Use Cases                                                */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-8">
          Use Cases
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
                      Example questions:
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
      {/*  4. How Much Does an AI Chatbot Cost?                        */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-8">
          How Much Does an AI Chatbot Cost?
        </h2>

        <div className="space-y-4">
          <div className="bg-clr_base/5 border border-clr_base/10 rounded-xl p-6 md:p-8">
            <h3 className="text-xl text-white font-bold mb-2">
              Basic AI Chatbot
            </h3>
            <p className="text-clr_pra mb-4">
              Answers the most frequent customer questions (FAQ), provides
              information about prices, opening hours, and basic services.
            </p>
            <div className="bg-[rgb(20,20,20)] rounded-xl p-4 mb-4">
              <span className="block text-sm font-medium text-clr_pra mb-1">
                Included in the AI Growth Engine package
              </span>
              <span className="text-2xl font-bold text-clr_base">
                from &euro;999
              </span>
            </div>
            <ul className="space-y-2">
              {[
                "Setup and training on your data",
                "Deployment on your website",
                "First month of refinement included",
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
              Advanced AI Chatbot
            </h3>
            <p className="text-clr_pra mb-4">
              Custom training, integrations with your systems (CRM, calendar,
              online store), advanced scenarios, and automations.
            </p>
            <div className="bg-[rgb(20,20,20)] rounded-xl p-4 mb-4">
              <span className="block text-sm font-medium text-clr_pra mb-1">
                Custom price quote
              </span>
              <span className="text-2xl font-bold text-clr_base">
                on request
              </span>
            </div>
            <ul className="space-y-2">
              {[
                "Integration with your systems",
                "Advanced conversation scenarios",
                "Ongoing optimization and reporting",
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
              ROI: Does It Pay Off?
            </h3>
            <p className="text-clr_pra leading-relaxed">
              If the chatbot saves at least{" "}
              <strong className="text-white">2 hours per day</strong> on
              customer support, at an average hourly rate of &euro;15, that means
              savings of{" "}
              <strong className="text-white">&euro;660 per month</strong>. The
              investment pays for itself within weeks &mdash; and after that, the
              chatbot works for free, 24 hours a day, 365 days a year.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  5. How to Implement an AI Chatbot on Your Website           */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-8">
          How to Implement an AI Chatbot on Your Website
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
                  <span className="text-clr_base">Step {item.step}:</span>{" "}
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
      {/*  6. Without Chatbot vs With Chatbot                          */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <div className="bg-[rgb(30,30,30)] rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">
            Without Chatbot vs With Chatbot
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-red-500">
                <XCircleFill />
                Without Chatbot
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
                With AI Chatbot
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
      {/*  How to Choose the Right Chatbot                             */}
      {/* ------------------------------------------------------------ */}
      <section className="mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
          How to Choose the Right Chatbot for Your Company
        </h2>
        <p className="text-clr_pra mb-6 leading-relaxed">
          Not all chatbots are the same. Before choosing a solution, make sure it
          meets the following key criteria:
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
          Want an AI Chatbot for Your Business?
        </h2>
        <p className="text-clr_pra mb-8 max-w-xl mx-auto">
          Write to me, and we&apos;ll figure out how an AI chatbot can help you
          save time and attract more customers. Free consultation with no
          obligations.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-clr_base text-clr_title rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            I Want an AI Chatbot
            <ArrowRight />
          </Link>
          <Link
            href="/sk/all-blog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[rgb(30,30,30)] text-white rounded-full font-medium hover:bg-[rgb(40,40,40)] transition-colors"
          >
            All Articles
            <Robot />
          </Link>
        </div>
      </section>
    </article>
  );
};

export default AiChatbotArticle;
