import React from "react";
import Card from "./Card";
import { Tilt } from "react-tilt";
import { useState } from "react";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const projects = [
  {
<<<<<<< HEAD
    image: "../../public/img/wechat.png",
=======
    image: ".././public/img/wechat.png",
>>>>>>> 6f10683890911f429deda2e2dfad776d9623e8c1
    title: "WeChat",
    description:
      "Wechat is a versatile and user-friendly messaging web-app designed to bring people closer, whether for personal conversations or staying in touch with loved ones. With a commitment to user privacy and security, Wechat is a platform for communication.",
    link: "https://github.com/shantanu-02/wechat"
  },
  {
<<<<<<< HEAD
    image: "../../public/img/drawing-tool.png",
=======
    image: ".././public/img/drawing-tool.png",
>>>>>>> 6f10683890911f429deda2e2dfad776d9623e8c1
    title: "Canvas - Drawing tool",
    description:
      "A drawing tool which allows users to collaborate and fill the canvas with their ideas. It's main features includes ability to draw with various colors and sizes of brush, to be able to erase it, undo it, redo it and an option to download.",
    link: "https://github.com/shantanu-02/Drawing-Tool"
  },
  {
<<<<<<< HEAD
    image: "../../public/img/dashboard.png",
=======
    image: ".././public/img/dashboard.png",
>>>>>>> 6f10683890911f429deda2e2dfad776d9623e8c1
    title: "Admin dashboard",
    description:
      "The Admin Dashboard displays tabs for multiple pages that provides data correctness and required administrative actions with responsivness. These pages contain the results of detailed analyses, represented images, graphs and pie charts.",
    link: "https://github.com/shantanu-02/Admin-dashboard"
  },
];

const Works = () => {

  const cards = projects.map((project) => {
    return (
      <div id="works">
      <Tilt options={defaultOptions} style={{ height: 250, width: 340 }}>
        <Card
          key={project.title}
          img={project.image}
          title={project.title}
          info={project.description}
          link={project.link}
        />
      </Tilt>
      </div>
    );
  });

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
            working with different technologies and manage projects effectively.{" "}
          </p>
        </div>
      </div>
      <section className="cardList">{cards}</section>
    </div>
  );
};

export default Works;
