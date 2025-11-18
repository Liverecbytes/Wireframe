"use client";

import { useState } from "react";

export default function WireframeHelpCenter() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I create a profile?",
      answer: "Click on 'Register' in the header, fill in your details, upload your resume, and complete your profile. It takes just 5 minutes!",
    },
    {
      question: "How does the AI job matching work?",
      answer: "Our AI analyzes your skills, experience, and preferences to match you with relevant job opportunities. The more complete your profile, the better the matches.",
    },
    {
      question: "Is it free to apply for jobs?",
      answer: "Yes! You can apply to 5 jobs per month with a free account. Upgrade to Premium for unlimited applications and additional features.",
    },
    {
      question: "How do I express interest in a job?",
      answer: "Simply click the 'Express Interest' button on any job listing. Employers will see your profile and can reach out directly if interested.",
    },
    {
      question: "Can I apply for jobs without a resume?",
      answer: "While you can browse jobs without a resume, we recommend uploading one for better visibility and faster applications.",
    },
    {
      question: "How do I become a recruiter?",
      answer: "Click on 'Become a Pro Recruiter' and fill out the registration form. Our team will verify your credentials and activate your account.",
    },
  ];

  return (
    <section className="border-b-2 border-gray-300 bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-black border-2 border-gray-400 p-4 mb-4">
            Help Center
          </h2>
          <p className="text-lg text-black">
            Find answers to common questions
          </p>
        </div>

        <div className="space-y-3 mb-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-2 border-gray-400 bg-white">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
              >
                <span className="font-semibold text-black">{faq.question}</span>
                <span className="text-black">{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 text-black border-t-2 border-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-black mb-4">Still have questions?</p>
          <div className="inline-block px-8 py-3 bg-gray-800 text-white border-2 border-gray-900">
            Visit Help Center
          </div>
        </div>
      </div>
    </section>
  );
}

