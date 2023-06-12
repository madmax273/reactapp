import React, { useState } from "react";

export default function TextForm(props) {
  const [Text, setText] = useState("enter your text");
  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleOnClick = () => {
    let newtext = Text.toUpperCase();
    setText(newtext);
  };

  const handleLower = () => {
    let newtext = Text.toLowerCase();
    setText(newtext);
  };
  const clearText = () => {
    let newtext = Text.toLowerCase();
    setText("");
  };
  return (
    <>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <div className="mb-3">
          <label forHtml="mybox" className="form-label">
            {props.title}
          </label>
          <textarea
            className="form-control"
            id="mybox"
            value={Text}
            onChange={handleOnChange}
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <submit
          type="button"
          className="btn btn-primary mb-3"
          onClick={handleOnClick}
        >
          convert to uppercase
        </submit>
        <submit className="btn btn-primary mb-3" onClick={handleLower}>
          convert to lowercase
        </submit>
        <submit className="btn btn-primary mb-3" onClick={clearText}>
          clear text
        </submit>
      </div>
    </>
  );
}
