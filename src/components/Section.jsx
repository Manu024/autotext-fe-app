import React from "react";
import PostList from "./PostList";

const Section = ({ data }) => {
  return (
    <section className="section">
      <h2>Posts</h2>
      <PostList posts={data} />
    </section>
  );
};

export default Section;