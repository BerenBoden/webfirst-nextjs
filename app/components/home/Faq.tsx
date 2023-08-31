"use client";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "What is the process from start to finish?",

    answer:
      "We adopt a three-step process: Design, Development, and Deployment. Initially, we create a design tailored to your audience for your review, with unlimited revisions. Then we develop the site using Next.js. Finally, we deploy the website live on your domain name. This process may slightly differ based on project specifics.",
  },

  {
    question: "Do you do copywriting? How much does it cost?",

    answer:
      "We do provide copy writing with AI as an experimental feature. This may be subject to change in the future. For every 1500 words the price is $20",
  },

  {
    question: "Do you provide social engagements and advertisements?",

    answer:
      "Unfortunately we do not run ad campaigns or provide management for your social media accounts. However, we collect analytics from your website so that you can create your own ad campaigns through Google, or Facebook, etc... you can also hire a third party to manage your ad campaigns.",
  },

  {
    question: "What is Next.js?",

    answer:
      "Next.js is a technology used to build dynamic and engaging web applications. In comparison to traditional WordPress, Next.js offers superior interactivity and responsiveness, leading to improved user engagement. The component-based design promotes reusability and streamlines maintenance, reducing development costs. By leveraging JavaScript with type safety for both front and back-end development, Next.js outperforms WordPress, which uses PHP, in terms of efficiency and scalability. Additionally, Next.js applications inherently possess enhanced SEO (Search Engine Optimization) capabilities and performance metrics, factors critical for search engine ranking. Whereas, achieving similar performance and SEO optimization with WordPress often requires extra plugins and tweaking, not only increasing security vulnerabilities but slowing down your website as well. Thus, for businesses aiming to build a high-performance, scalable web applications with better SEO, security, and performance out-of-the-box, opting for Next.js offers a decisive advantage over traditional WordPress.",
  },

  {
    question: "What is the turnaround time?",

    answer:
      "Local Business – Between 3 - 4 weeks. Startup Package – Between 1 - 2 months. Enterprise Package – Between 2 - 6 months.",
  },

  {
    question: "Do you provide free website hosting?",

    answer:
      "Yes, we wil provide free web hosting with AWS, Vercel, and Digital Ocean for your newly created website. We will automatically choose the best hosting option for your application. And, if you require a custom hosting solution, we can set that up aswell.",
  },
];
export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto  divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      {faq.answer.split("##").map((paragraph, index) => (
                        <p key={index} className="text-sm text-gray-600 mt-4">
                          {paragraph}
                        </p>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
