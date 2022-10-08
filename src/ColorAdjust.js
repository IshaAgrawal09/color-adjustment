import React, { useState } from "react";
import { Button, Drawer, List } from "@mui/material";

const ColorAdjust = () => {
  const color = [
    "#006FB4",
    "#89399C",
    "#E00034",
    "#E26721",
    "#009F9F",
    "#2B8230",
    "#fff",
    "#000",
  ];
  const [state, setState] = useState(false);
  const [theme, setTheme] = useState({
    bg: "#fff",
    color: "#000",
  });

  const dark = () => {
    setTheme({
      bg: "#808080",
      color: "#fff",
    });
  };
  const light = () => {
    setTheme({
      bg: "#fff",
      color: "#808080",
    });
  };
  const high = () => {
    setTheme({
      bg: "#fff",
      color: "#000",
    });
  };

  return (
    <div
      className="main"
      style={{ backgroundColor: theme.bg, color: theme.color }}
    >
      <div>
        <h2> What is Lorem Ipsum?</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div>
        <h2>Where does it come from?</h2>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32.
        </p>
      </div>
      <div>
        <h2>Why do we use it?</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident
        </p>
      </div>
      <div className="drawerDiv">
        <div className="divDrawer">
          <Button onClick={() => setState(true)}>
            <i className="fa-solid fa-person"></i>
          </Button>
          <Drawer
            anchor={"right"}
            open={state}
            onClose={() => setState(false)}
            className="drawer"
          >
            <List style={{ width: "390px" }} className="listDrawer">
              <div className="firstSection">
                <div className="childSection" onClick={dark}>
                  <i className="fa-solid fa-moon"></i>
                  <p>Dark Contrast</p>
                </div>
                <div className="childSection" onClick={light}>
                  <i className="fa-solid fa-sun"></i>
                  <p>Light Contrast</p>
                </div>
                <div className="childSection" onClick={high}>
                  <i className="fa-solid fa-circle-half-stroke"></i>
                  <p>High Contrast</p>
                </div>
              </div>

              <div className="secondSection">
                <p>Adjust Text Colors</p>
                <div className="TextColor">
                  {color.map((item, index) => {
                    return <div style={{ color: item }}>{index}</div>;
                  })}
                </div>
              </div>
            </List>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default ColorAdjust;
