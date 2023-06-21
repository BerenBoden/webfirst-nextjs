"use client";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "What is the process from start to finish?",
    answer:
      "We adopt a three-step process: Design, Development, and Deployment. Initially, we create a design tailored to your audience for your review, with unlimited revisions. Post-approval, we develop the site using Next.js and Strapi. Finally, after your review and approval on our test server, we deploy the website live. This process may slightly differ based on project specifics.",
  },
  {
    question: "How many rounds of revision you do?",
    answer:
      "We commit to adjusting and refining our designs until they meet your satisfaction, given they align with the initial project overview. However, if a significant shift in design direction or substantial additions to the brief occur, we'll provide a new estimate to reflect these changes.",
  },
  {
    question: "Do you do copywriting? How much does it cost?",
    answer:
      "If you require copywriting services, we are equipped to handle this need. Depending on the volume and complexity of the content, pricing may range from a modest to a more substantial fee. We will provide a detailed quote based on your specific needs.",
  },
  {
    question: "What is Next.js and React?",
    answer:
      "Next.js and React are technologies used to build dynamic and engaging web applications. React, conceived by and running Facebook, is a JavaScript library renowned for developing robust user interfaces. It enhances development efficiency by enabling the creation of reusable UI components. Next.js builds upon React, providing a framework that supports SEO, for a better result in the Google search results. Essentially, Next.js augments React with additional features, increasing its suitability for large-scale, enterprise applications.####In comparison to traditional WordPress, Next.js and React offer superior interactivity and responsiveness, leading to improved user engagement. The component-based design promotes reusability and streamlines maintenance, reducing development costs. By leveraging JavaScript for both front and back-end development, Next.js and React outperform WordPress, which uses PHP, in terms of efficiency and scalability. Additionally, Next.js and React applications inherently possess enhanced SEO capabilities and performance metrics, factors critical for search engine ranking. Whereas, achieving similar performance and SEO optimization with WordPress often requires extra plugins and tweaking, not only increasing attack vectors but slowing down your website as well. Thus, for businesses aiming to build a high-performance, scalable web application with better SEO, security, and performance out-of-the-box, opting for Next.js and React offers a decisive advantage over traditional WordPress.",
  },
  {
    question: "What is the turnaround time?",
    answer:
      "Local Business – Between 1-2 weeks. Startup Package – Between 6-8 weeks. Enterprise Package – Between 8-10 weeks. The timeline also depends on when we get website content including images and text from you.",
  },
  {
    question: "Do you provide website hosting?",
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
                        <p
                          key={index}
                          className="text-sm text-gray-600 mt-4"
                        >
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
