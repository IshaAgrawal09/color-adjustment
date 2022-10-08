import { Box, Drawer } from "@mui/material";
import React, { useState } from "react";
import { colors } from "./data";

function Home(props) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <div
        className="container"
        style={{
          backgroundColor: props.bgColor ?? "initial",
          filter: `contrast(${props.contrast})`,
        }}
      >
        <div className="accessiblity-tool">
          <a href="#" onClick={() => setIsDrawerOpen(true)}>
            <i className="fa-solid fa-person"></i>
          </a>
        </div>

        <div className="section1 main">
          <div className="row">
            <h2
              style={{
                color: props.titleColor ?? "initial",
              }}
            >
              What is Lorem Ipsum?
            </h2>
            <p
              style={{
                color: props.textColor ?? "initial",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              finibus nisl nec diam convallis pulvinar. Vestibulum iaculis odio
              felis, sit amet congue leo aliquam ac. Nullam dignissim ligula nec
              nunc sollicitudin vestibulum. Proin vestibulum nunc lorem, in
              consectetur leo fringilla non. Nullam sagittis interdum sapien
              vitae molestie. Donec a orci non turpis tincidunt dictum. Etiam id
              quam enim. Proin sit amet fermentum enim. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. In finibus nisl nec diam
              convallis pulvinar. Vestibulum iaculis odio felis, sit amet congue
              leo aliquam ac. Nullam dignissim ligula nec nunc sollicitudin
              vestibulum. Proin vestibulum nunc lorem, in ligula nec nunc
              sollicitudin vestibulum. Proin vestibulum nunc lorem, in
            </p>
          </div>
        </div>
        <div className="section1 main">
          <div className="row">
            <h2
              style={{
                color: props.titleColor ?? "initial",
              }}
            >
              Where does it come from?
            </h2>
            <p
              style={{
                color: props.textColor ?? "initial",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              finibus nisl nec diam convallis pulvinar. Vestibulum iaculis odio
              felis, sit amet congue leo aliquam ac. Nullam dignissim ligula nec
              nunc sollicitudin vestibulum. Proin vestibulum nunc lorem, in
              consectetur leo fringilla non. Nullam sagittis interdum sapien
              vitae molestie. Donec a orci non turpis tincidunt dictum. Etiam id
              quam enim. Proin sit amet fermentum enim.
            </p>
          </div>
        </div>
        <div className="section1 main">
          <div className="row">
            <h2
              style={{
                color: props.titleColor ?? "initial",
              }}
            >
              Why do we use it?
            </h2>
            <p
              style={{
                color: props.textColor ?? "initial",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              finibus nisl nec diam convallis pulvinar. Vestibulum iaculis odio
              felis, sit amet congue leo aliquam ac. Nullam dignissim ligula nec
              nunc sollicitudin vestibulum. Proin vestibulum nunc lorem, in
              consectetur leo fringilla non. Nullam sagittis interdum sapien
              vitae molestie. Donec a orci non turpis tincidunt dictum. Etiam id
              quam enim. Proin sit amet fermentum enim.
            </p>
          </div>
        </div>

        <div className="section1">
          <Drawer
            anchor="right"
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
          >
            <Box p={2} width="250px" textAlign="center" role="presentation">
              <div className="text-color-select">
                <p className="text">Text Color</p>
                {colors.map((color, idx) => {
                  return (
                    <span
                      key={idx}
                      className={`color ${
                        props.textColor === color ? "active" : ""
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={(event) => props.handleTextColor(event, color)}
                    ></span>
                  );
                })}
                {props.textColor.length > 0 && (
                  <>
                    <a
                      className="remove"
                      href="/"
                      onClick={(event) => props.handleTextColor(event, "")}
                    >
                      Remove Effect
                    </a>
                  </>
                )}
              </div>

              <div className="background-color-select">
                <p className="text">Background Color</p>
                {colors.map((color, idx) => {
                  return (
                    <span
                      key={idx}
                      className={`color ${
                        props.bgColor === color ? "active" : ""
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={(event) => props.handleBgColor(event, color)}
                    ></span>
                  );
                })}
                {props.bgColor.length > 0 && (
                  <>
                    <a
                      className="remove"
                      href="/"
                      onClick={(event) => props.handleBgColor(event, "")}
                    >
                      Remove Effect
                    </a>
                  </>
                )}
              </div>

              <div className="title-color-select">
                <p className="text">Title Color</p>
                {colors.map((color, idx) => {
                  return (
                    <span
                      key={idx}
                      className={`color ${
                        props.titleColor === color ? "active" : ""
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={(event) => props.handleTitleColor(event, color)}
                    ></span>
                  );
                })}
                {props.titleColor.length > 0 && (
                  <>
                    <a
                      className="remove"
                      href="/"
                      onClick={(event) => props.handleTitleColor(event, "")}
                    >
                      Remove Effect
                    </a>
                  </>
                )}
              </div>
              <div className="contrast-control">
                <div className="contrast-select">
                  <div
                    onClick={(event) => props.handleContrast(event, "50%")}
                    className={`dark-contrast ${
                      props.contrast === "50%" ? "active" : ""
                    }`}
                  >
                    <div className="contrast-icon">
                      <i class="fa-solid fa-moon"></i>
                    </div>
                    <div className="contrast-icon">Dark Mode</div>
                  </div>
                  <div
                    onClick={(event) => props.handleContrast(event, "100%")}
                    className={`dark-contrast ${
                      props.contrast === "100%" ? "active" : ""
                    }`}
                  >
                    <div className="contrast-icon">
                      <i class="fa-regular fa-sun"></i>
                    </div>
                    <div className="contrast-icon">Light Mode</div>
                  </div>
                  <div
                    onClick={(event) => props.handleContrast(event, "200%")}
                    className={`dark-contrast ${
                      props.contrast === "200%" ? "active" : ""
                    }`}
                  >
                    <div className="contrast-icon">
                      <i class="fa-solid fa-circle-half-stroke"></i>
                    </div>
                    <div className="contrast-icon">High Contrast</div>
                  </div>
                </div>
                <div>
                  {props.contrast.length > 0 && (
                    <>
                      <a
                        className="remove"
                        href="/"
                        onClick={(event) => props.handleContrast(event, "")}
                      >
                        Remove Effect
                      </a>
                    </>
                  )}
                </div>
              </div>
            </Box>
          </Drawer>
        </div>
      </div>
    </>
  );
}

export default Home;
