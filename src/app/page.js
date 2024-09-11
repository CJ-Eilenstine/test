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

          padding: "10vh",
        }}
      >
        <h1 style={{ fontFamily: "helvetica" }}>
          Mistborn Era 1 LeatherBounds
        </h1>
        <div
          style={{
            height: "200px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "100px",
          }}
        >
          <div>
            <h3 style={{ fontFamily: "helvetica" }}>
              Mistborn The Final Empire LeatherBound
            </h3>
            <p style={{ fontWeight: "600", fontFamily: "helvetica" }}>$125</p>
            <img
              src="//www.dragonsteelbooks.com/cdn/shop/files/Mistborn_Back_Standing.jpg?"
              style={{
                width: "120px",
                height: "120px",
                border: "solid 1px black",
                borderRadius: "20px",
              }}
            />
          </div>
          <div>
            <h3 style={{ fontFamily: "helvetica" }}>
              Mistborn The Well of Ascension LeatherBound
            </h3>
            <p style={{ fontWeight: "600", fontFamily: "helvetica" }}>$125</p>
            <img
              src="//www.dragonsteelbooks.com/cdn/shop/files/WOA_Back_Standing.jpg?"
              style={{
                width: "120px",
                height: "120px",
                border: "solid 1px black",
                borderRadius: "20px",
              }}
            />
          </div>
          <div>
            <h3 style={{ fontFamily: "helvetica" }}>
              Mistborn The Hero of Ages LeatherBound
            </h3>
            <p style={{ fontWeight: "600", fontFamily: "helvetica" }}>$125</p>
            <img
              src="//www.dragonsteelbooks.com/cdn/shop/files/HOA_Front_Standing.jpg?"
              style={{
                width: "120px",
                height: "120px",
                border: "solid 1px black",
                borderRadius: "20px",
              }}
            />
          </div>
        </div>
      </section>
      <footer style={footerStyle}></footer>
    </main>
  );
}
