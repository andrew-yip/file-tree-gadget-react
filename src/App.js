import React, { useState } from "react";

function App() {
  return (
    <div>
      <Folder name="desktop">
        <Folder name="music">
          <File name="song1.mp3"></File>
          <File name="song2.mp3"></File>
        </Folder>
        <File name="pic1.jpeg" />
        <File name="pic2.png" />
        <Folder name="projects" />
        <Folder name="school" />
      </Folder>
      <Folder name="andrewyip" />
      <Folder name="applications" />
      <Folder name="documents" />
    </div>
  );
}

const Folder = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  /* const handleClick = () => {
    setIsOpen(!isOpen);
  }; */

  const { name, children } = props; // destructuring object
  const direction = isOpen ? "down" : "right";
  return (
    <div>
      <span onClick={() => setIsOpen(!isOpen)}>
        <i className="blue folder icon"></i>
        <i className={`caret ${direction} icon`}></i>{" "}
        {/* string interprelation */}
      </span>
      {name}
      <div style={{ marginLeft: "17px" }}>{isOpen ? children : null}</div>
    </div>
  );
};

const File = (props) => {
  const { name } = props;
  const fileExtension = name.split(".")[1]; // splits everything before and after the '.'
  const fileIcons = {
    mp3: "headphones",
    jpeg: "file image",
    png: "file image outline",
  };

  return (
    <div>
      <i className={`${fileIcons[fileExtension]} icon`}></i>{" "}
      {/* string interprelation */}
      {name}
    </div>
  );
};

export default App;
