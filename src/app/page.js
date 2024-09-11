"use client";
import homeStyles from "@/app/page.module.css";

export default function Home() {
  const footerStyle = {
    height: "10vh",
    backgroundColor: "lightslategray",
  };

  return (
    <main>
      <nav className={homeStyles.homeNav}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
      <section
        style={{
          height: "80vh",
          backgroundColor: "blanchedalmond",
        }}
      ></section>
      <footer style={footerStyle}></footer>
    </main>
  );
}
