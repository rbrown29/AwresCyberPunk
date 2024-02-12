import React, { type ReactElement, Fragment } from "react";
import { createRoot } from "react-dom/client";
import { Global } from "@emotion/react";
import { type AppTheme, createAppTheme } from "@arwes/theme";
import { Animator } from "@arwes/react-animator";
import { MovingLines } from "@arwes/react-bgs";

const t = createAppTheme({
  settings: {
    hues: {
      primary: 200,
      secondary: 200,
    },
    fontFamilies: {
      title: 'Copperplate, Copper, "Comic Sans"',
      body: "Tahoma, Techno, Trebuchet",
    },
  },
});

const Header = () => (
  <header
    style={{
      padding: t.space(4),
      textAlign: "center",
      background: `linear-gradient(
      to bottom right,
      ${t.colors.primary.ol(2)},
      ${t.colors.primary.ol(4)}
    distance: 0.5rem,
    blur: 0.5rem,
    spread: 0.5rem,
    mask-image: radial-gradient(
      circle at 50% 50%,
      transparent 99%,
      ${t.colors.primary.main(5)} 100%
    )`,
      color: t.colors.primary.ol(5),
      height: "100%",
    }}
  >
    <h1 style={{ margin: 0 }}>CyberPunk Universe</h1>
  </header>
);

const Footer = () => (
  <footer
    style={{
      padding: t.space(4),
      textAlign: "center",
      background: `linear-gradient(
      to bottom right,
      ${t.colors.primary.ol(2)},
      ${t.colors.primary.ol(4)}
    distance: 0.5rem,
    blur: 0.5rem,
    spread: 0.5rem,
    mask-image: radial-gradient(
      circle at 50% 50%,
      transparent 99%,
      ${t.colors.primary.main(5)} 100%
    )`,
      color: t.colors.primary.ol(5),
      marginTop: t.space(5),
    }}
  >
    <p>© 2024 Richard Brown. All rights reserved.</p>
  </footer>
);

const MainElement = ({ data }) => (
  <main
    style={{
      border: `1px solid ${t.colors.primary.deco(5)}`,
      padding: t.space([4, 8]),
      maxWidth: 400,
      borderRadius: t.space(4),
      background: `linear-gradient(
      to bottom right,
      ${t.colors.primary.ol(2)},
      ${t.colors.primary.ol(4)}
    distance: 0.5rem,
    blur: 0.5rem,
    spread: 0.5rem,
    mask-image: radial-gradient(
      circle at 50% 50%,
      transparent 99%,
      ${t.colors.primary.main(5)} 100%
    )`,
      boxShadow: `0 0 1rem ${t.colors.primary.deco(5)}`,
      transform: "rotate(1deg)",
      transition: "transform 0.5s ease-in-out",
    }}
  >
    <h1>{data.title}</h1>
    <hr />
    <p>{data.description}</p>
    <img src={data.image} alt={data.title} />
  </main>
);

const App = () => {
  const mainData = [
    {
      title: "Gadget-Junkie",
      description:
        "Gadget Junkie Is A Simple E-Commerce Website Built With React. It Is A Responsive Website That Can Be Viewed On Any Device. It Has A Cart Functionality That Allows Users To Add And Remove Items From The Cart.",
      image: "https://64.media.tumblr.com/d07fe7cab009ab15c44a68a7ba12271c/tumblr_inline_p7gd9vcH971sm9nnd_500.gifv",
    },
    {
      title: "Jobster",
      description:
        "This Is A Simple Job Application Tracker Built With React And NodeJs Backend That Allows Users To Keep Track Of Their Job Applications. Users Can Add, Edit, And Delete Job Applications.",
      image: "cyberpunk.gif",
    },
    {
      title: "Nasa Mission Control",
      description:
        "A Web Application That Allows Users To Schedule A Mission To One Of The Kepler Exoplanets. The Application Is Built Using The MERN Stack And Arwes- A Futuristic Sci-Fi UI Web Framework.",
      image: "giphy1.gif",
    },
  ];

  return (
    <Fragment>
      <Global
        styles={{
          html: {
            margin: t.space(5),
            lineHeight: 1.6,
            backgroundColor: t.colors.primary.ol(5),
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            flexWrap: "wrap",
          },
          h1: {
            ...t.typography.title(0),
            margin: t.space([0, 0, 4]),
            color: t.colors.primary.text(4),
            background: `-webkit-linear-gradient(
            0deg,
            ${t.colors.primary.main(4)},
            ${t.colors.secondary.main(4)}
          )`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          },
          hr: {
            margin: t.space([0, 0, 4]),
            border: "none",
            height: 2,
            background: `linear-gradient(
            90deg,
            ${t.colors.primary.deco(5)},
            ${t.colors.secondary.deco(10)}
          )`,
          },
          p: {
            margin: t.space([0, 0, 4]),
            ...t.typography.body(1),
            color: t.colors.primary.text(5),
          },
          img: {
            margin: 0,
            maxWidth: "100%",
            borderRadius: t.space(2),
          },
        }}
      />
      <Animator duration={{ enter: 0.2, exit: 0.2, interval: 8 }}>
        <MovingLines lineColor="hsla(180, 100%, 75%, 0.5)" />
        <Header />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            flexWrap: "wrap",
            padding: t.space(50),
            gap: t.space(25),
          }}
        >
          {mainData.map((data, index) => (
            <MainElement key={index} data={data} />
          ))}
        </div>
        <Footer />
      </Animator>
    </Fragment>
  );
};

createRoot(document.querySelector("#root") as HTMLElement).render(<App />);
export default App;
