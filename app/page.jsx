import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <p>
        <Link href="/blogs">Go to Blogs</Link>
      </p>
    </div>
  );
};

export default HomePage;
