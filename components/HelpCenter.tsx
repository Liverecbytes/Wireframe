"use client";

import { useState } from "react";
import Link from "next/link";

export default function HelpCenter() {
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
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Help Center
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions
          </p>
        </div>

        <div className="space-y-4 mb-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <Link
            href="/help"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Visit Help Center
          </Link>
        </div>
      </div>
    </section>
  );
}

