import { useState } from "react";
import BlogList from "./BlogList";

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

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "Gottmik")}
        title="Mik's blogs"
      />
    </div>
  );
};

export default Home;
