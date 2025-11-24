import React from "react";
import "../styles/Blogs.css";
import blog1 from "../Assets/10images/blog1.jpg";


function Blogs() {
  const featuredBlog = {
    date: "10 AUG, 2025",
    title: "The Ivory Experience Luxury Wedding Photography in India",
    description:
      "At Ivory Films, we believe your wedding story is more than a timeline of events — it’s a tapestry of emotions, traditions, and fleeting moments that deserve to be preserved with heart and artistry.",
    image:
      blog1,
    link: "readmore",
  };

  const blogs = [
    {
      id: 1,
      date: "11 APR, 2025",
      title:
        "Aashka and Shanil Unforgettable Wedding Celebration at Fairmont and Raffles Jaipur",
      description:
        "Aashka and Shanil’s wedding at Fairmont & Raffles Jaipur was a spectacular celebration...",
      image:
        "https://ivoryfilms.in/assets/img/blogs/67f8ba0e7368c/thumb-1744353806_68b5dccb8ccd13cd318d.jpg",
      link: "readmore1",
    },
    {
      id: 2,
      date: "13 FEB, 2025",
      title: "Piyush Ariva Grand Wedding Celebration",
      description:
        "Piyush and Ariva’s ten days long wedding celebration wasn’t just a fusion of love, but a powerful tribute to their families and traditions.",
      image:
        "https://ivoryfilms.in/assets/img/blogs/67b05dc653d66/thumb-1739611590_0ffb8334d7e793c3b59a.jpg",
      link: "readmore2",
    },
    {
      id: 3,
      date: "15 JAN, 2025",
      title: "Anaya and Veer’s Royal Destination Wedding in Udaipur",
      description:
        "Anaya and Veer’s royal Udaipur wedding was filled with grandeur, love, and unforgettable cultural moments.",
      image:
        "https://ivoryfilms.in/assets/img/blogs/66f7cea64feba/thumb-1727516326_63b3fa0364666135c7da.jpg",
      link: "readmore3",
    },
    {
      id: 4,
      date: "22 NOV, 2024",
      title: "Riya & Kabir’s Magical Palace Wedding at Jaipur",
      description:
        "A royal affair with pastel tones and regal decor, Riya and Kabir’s wedding at Jaipur was pure cinematic perfection.",
      image:
        "https://ivoryfilms.in/assets/img/blogs/66f7ce1850000/thumb-1727516184_4bb480999f4a58d33fb7.jpg",
      link: "readmore4",
    },
    {
      id: 5,
      date: "30 OCT, 2024",
      title: "Dev & Aisha’s Intimate Beach Wedding in Goa",
      description:
        "Set by the waves and kissed by the sun, Dev and Aisha’s beach wedding in Goa was the perfect mix of elegance and fun.",
      image:
        "https://ivoryfilms.in/assets/img/blogs/6683889a447af/thumb-1719896218_358e31c1f8adb0c09c65.jpg",
      link: "readmore5",
    },
    {
      id: 6,
      date: "05 SEP, 2024",
      title: "Mira & Rohan’s Grand Celebration at Leela Palace, Udaipur",
      description:
        "A union of luxury and tradition, Mira & Rohan’s wedding at Leela Palace was a stunning showcase of elegance and love.",
      image:
        "https://ivoryfilms.in/assets/img/blogs/6687888600b8a/thumb-1720158342_e9c0cee02ab8a121bef5.jpg",
      link: "readmore6",
    },
  ];

  return (
    <section className="blogs-section">
      <h1 className="blogs-title">Blogs</h1>

      {/* Featured Blog Section */}
      <div className="featured-blog">
        <div className="featured-image">
          <img src={featuredBlog.image} alt={featuredBlog.title} />
        </div>
        <div className="featured-content">
          <p className="blog-date">{featuredBlog.date}</p>
          <h2 className="featured-heading">{featuredBlog.title}</h2>
          <p className="blog-description">{featuredBlog.description}</p>
          <a
            href={featuredBlog.link}
            target="_blank"
            rel="noopener noreferrer"
            className="read-more"
          >
            READ MORE →
          </a>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="blogs-grid">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <div className="blog-image">
              <img src={blog.image} alt={blog.title} />
            </div>
            <div className="blog-info">
              <p className="blog-date">{blog.date}</p>
              <h2 className="blog-heading">{blog.title}</h2>
              <p className="blog-description">{blog.description}</p>
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="read-more"
              >
                READ MORE →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blogs;
