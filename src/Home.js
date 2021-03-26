import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "Hey Gorge", body: "lore ipsum...", author: "Gottmik", id: 1 },
    { title: "Backwards shoe", body: "lore ipsum...", author: "Rosé", id: 2 },
    {
      title: "Icy spicy for u im too pricey",
      body: "lore ipsum...",
      author: "Denali",
      id: 3,
    },
  ]);

  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by: {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
