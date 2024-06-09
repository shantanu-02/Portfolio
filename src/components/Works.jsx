import React from "react";
import Card from "./Card";
import { Tilt } from "react-tilt";
import wechatImage from "../../public/img/wechat.png";
import drawingToolImage from "../../public/img/Drawing-tool.png";
import dashboardImage from "../../public/img/dashboard.png";

const defaultOptions = {
  reverse: false,
  max: 35,
  perspective: 1000,
  scale: 1.1,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

const projects = [
  {
    image: wechatImage,
    title: "WeChat",
    description: "Wechat is a versatile and user-friendly messaging web-app designed to bring people closer, whether for personal conversations or staying in touch with loved ones. With a commitment to user privacy and security, Wechat is a platform for communication.",
    link: "https://github.com/shantanu-02/wechat"
  },
  {
    image: drawingToolImage,
    title: "Canvas - Drawing tool",
    description: "A drawing tool which allows users to collaborate and fill the canvas with their ideas. It's main features includes ability to draw with various colors and sizes of brush, to be able to erase it, undo it, redo it and an option to download.",
    link: "https://github.com/shantanu-02/Drawing-Tool"
  },
  {
    image: dashboardImage,
    title: "Admin dashboard",
    description: "The Admin Dashboard displays tabs for multiple pages that provides data correctness and required administrative actions with responsivness. These pages contain the results of detailed analyses, represented images, graphs and pie charts.",
    link: "https://github.com/shantanu-02/Admin-dashboard"
  },
];

const Works = () => {
  const cards = projects.map((project) => (
    <div id="works" key={project.title}>
      <Tilt options={defaultOptions} style={{ height: 250, width: 340 }}>
        <Card
          img={project.image}
          title={project.title}
          info={project.description}
          link={project.link}
        />
      </Tilt>
    </div>
  ));

  return (
    <div className="works">
      <div className="top">
        <p className="topic">My work</p>
        <h1 className="h1">Projects.</h1>
        <div className="do">
          <p className="lineText">What I have been doing so far.</p>
          <p className="lineTexts">
            Following projects showcases my skills through real-world examples
            of my work. It reflects my abilities of full stack development,
            working with different technologies and manage projects effectively.
          </p>
        </div>
      </div>
      <section className="cardList">{cards}</section>
    </div>
  );
};

export default Works;
