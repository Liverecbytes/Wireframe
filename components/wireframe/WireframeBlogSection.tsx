export default function WireframeBlogSection() {
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
    <section className="border-b-2 border-gray-300 bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black border-2 border-gray-400 p-4 mb-4">
              Knowledge Center
            </h2>
            <p className="text-lg text-black">
              Expert insights, tips, and resources to advance your career
            </p>
          </div>
          <div className="hidden md:block px-4 py-2 border-2 border-gray-400 text-black">
            View All →
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {blogPosts.map((post, index) => (
            <div key={index} className="border-2 border-gray-400 bg-gray-50 p-4">
              <div className="mb-3">
                <div className="inline-block border border-gray-400 px-2 py-1 text-xs text-black">
                  {post.category}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">{post.title}</h3>
              <p className="text-black text-sm mb-3">{post.excerpt}</p>
              <div className="flex items-center text-xs text-black border-t border-gray-300 pt-2">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6 md:hidden">
          <div className="inline-block px-4 py-2 border-2 border-gray-400 text-black">
            View All Articles →
          </div>
        </div>
      </div>
    </section>
  );
}

