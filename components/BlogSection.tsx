import Link from "next/link";

export default function BlogSection() {
  const blogPosts = [
    {
      title: "10 In-Demand Skills for 2024",
      excerpt: "Discover the top skills that employers are looking for in 2024 and how to develop them.",
      category: "Career Tips",
      date: "Jan 15, 2024",
      readTime: "5 min read",
    },
    {
      title: "How to Ace Your Next Interview",
      excerpt: "Expert tips and strategies to help you stand out in your next job interview.",
      category: "Interview Prep",
      date: "Jan 12, 2024",
      readTime: "7 min read",
    },
    {
      title: "Remote Work: Best Practices",
      excerpt: "Learn how to excel in remote work environments and maintain work-life balance.",
      category: "Workplace",
      date: "Jan 10, 2024",
      readTime: "6 min read",
    },
    {
      title: "Salary Negotiation Guide",
      excerpt: "Master the art of salary negotiation with our comprehensive guide.",
      category: "Career Tips",
      date: "Jan 8, 2024",
      readTime: "8 min read",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Knowledge Center
            </h2>
            <p className="text-lg text-gray-600">
              Expert insights, tips, and resources to advance your career
            </p>
          </div>
          <Link
            href="/blog"
            className="hidden md:block text-blue-600 hover:text-blue-700 font-semibold"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post, index) => (
            <Link
              key={index}
              href={`/blog/${post.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all border border-gray-200 group"
            >
              <div className="mb-3">
                <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                  {post.category}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
              <div className="flex items-center text-xs text-gray-500">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link
            href="/blog"
            className="inline-block text-blue-600 hover:text-blue-700 font-semibold"
          >
            View All Articles →
          </Link>
        </div>
      </div>
    </section>
  );
}

