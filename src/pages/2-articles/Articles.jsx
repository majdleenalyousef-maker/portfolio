import React, { useState } from "react";
import "./articles.css";

const articlesData = [
  {
    id: 1,
    title: "Building Scalable ERP Frontends with React",
    summary:
      "Learn how to architect user-friendly and scalable ERP interfaces using React.js and best UX practices.",
    date: "June 1, 2024",
    content: `
In this article, we explore the fundamental principles of building scalable ERP frontends using React. We discuss component-based architecture, state management solutions like Redux and Context API, and how to optimize rendering performance for large data sets typical in ERP systems.

Additionally, best practices for designing reusable UI components and maintaining clean, maintainable codebases are highlighted.

You will also find practical examples of how to structure your application to accommodate future business requirements while maintaining excellent user experience and responsiveness.
    `,
  },
  {
    id: 2,
    title: "The Role of UI/UX in Enterprise Software",
    summary:
      "A practical look at how design decisions impact usability and adoption in large-scale applications.",
    date: "May 15, 2024",
    content: `
Enterprise software often faces challenges related to user adoption and productivity. This article delves into how thoughtful UI/UX design improves usability, reduces errors, and enhances user satisfaction.

Topics covered include designing intuitive navigation, consistent visual language, accessibility considerations, and conducting user research within enterprise environments.

Real-world case studies demonstrate how UI/UX directly affects the success of software deployments in organizations.
    `,
  },
  {
    id: 3,
    title: "React Performance Optimization Techniques",
    summary:
      "Techniques to improve rendering speed and maintain clean code in React-based systems.",
    date: "April 10, 2024",
    content: `
Performance is critical in complex React applications. This article covers key optimization techniques such as memoization with React.memo, useCallback and useMemo hooks, code splitting with React.lazy, and avoiding unnecessary re-renders.

You will learn how to identify performance bottlenecks using React Developer Tools and profiling, and strategies to refactor your components for efficiency.

Best practices for balancing performance improvements without sacrificing code readability are also discussed.
    `,
  },
  {
    id: 4,
    title: "Designing for Arabic Interfaces: UX Challenges",
    summary:
      "Explore the nuances of RTL (right-to-left) design and how to create smooth experiences in Arabic web applications.",
    date: "March 5, 2024",
    content: `
Designing interfaces for Arabic users requires special consideration of right-to-left (RTL) layouts, cultural norms, and language-specific typography.

This article explores common UX challenges such as mirroring layouts, handling mixed-direction content, and ensuring readability and accessibility.

Techniques for implementing RTL support in React apps, including CSS strategies and internationalization libraries, are covered with practical examples.

You will also gain insights into testing and validating your designs to provide a seamless user experience for Arabic-speaking audiences.
    `,
  },
];


export default function Articles() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArticle, setSelectedArticle] = useState(null);

  const filteredArticles = articlesData.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // لما تضغط على رابط المقال أو العنوان نحفظ المقال المختار
  const openArticle = (article) => {
    setSelectedArticle(article);
  };

  // للرجوع لقائمة المقالات
  const goBack = () => {
    setSelectedArticle(null);
  };

  return (
    <section className="articles-section">
      <h1>Articles</h1>

      {/* إذا لا يوجد مقال محدد نعرض البحث والقائمة */}
      {!selectedArticle ? (
        <>
          <input
            type="search"
            placeholder="Search articles..."
            className="search-input"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <div className="articles-list">
            {filteredArticles.length > 0 ? (
              filteredArticles.map(({ id, title, summary, date }) => (
                <article key={id} className="article-card">
                  {/* بدل رابط نستخدم زر أو span مع onClick */}
                  <h2
                    onClick={() => openArticle({ id, title, summary, date, content: articlesData.find(a => a.id === id).content })}
                    style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}
                  >
                    {title}
                  </h2>
                  <p className="date">{date}</p>
                  <p>{summary}</p>
                  <button
                    className="read-more"
                    onClick={() => openArticle({ id, title, summary, date, content: articlesData.find(a => a.id === id).content })}
                  >
                    Read More →
                  </button>
                </article>
              ))
            ) : (
              <p>No articles found.</p>
            )}
          </div>
        </>
      ) : (
        // عرض تفاصيل المقال
        <article className="article-detail">
          <button onClick={goBack} style={{ marginBottom: "1rem" }}>
            ← Back to Articles
          </button>
          <h2>{selectedArticle.title}</h2>
          <p className="date">{selectedArticle.date}</p>
          <div className="article-content" style={{ whiteSpace: "pre-wrap" }}>
            {selectedArticle.content}
          </div>
        </article>
      )}
    </section>
  );
}
