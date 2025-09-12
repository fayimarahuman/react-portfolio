import React from "react";
import "../styles/Blog.css";

function Blog() {
  const posts = [
    {
      title: "Getting Started with React",
      date: "Sept 1, 2025",
      description:
        "A beginner-friendly guide to understanding components, props, and state in React.",
      image: "/images/blog1.jpg",
      link: "#",
    },
    {
      title: "Why Dark Mode Improves UX",
      date: "Aug 20, 2025",
      description:
        "Dark mode isn’t just a trend. Discover why it’s essential for accessibility and eye comfort.",
      image: "/images/blog2.jpg",
      link: "#",
    },
    {
      title: "Mastering Flask APIs",
      date: "Aug 5, 2025",
      description:
        "Learn how to create, test, and deploy powerful APIs using Flask and Python.",
      image: "/images/blog3.jpg",
      link: "#",
    },
  ];

  return (
    <section className="blog" id="blog">
      <h2>Blog & Articles</h2>
      <div className="blog-container">
        {posts.map((post, index) => (
          <div className="blog-card fade-in" key={index}>
            <img src={post.image} alt={post.title} />
            <div className="blog-content">
              <h3>{post.title}</h3>
              <span className="blog-date">{post.date}</span>
              <p>{post.description}</p>
              <a href={post.link} className="btn-secondary">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
