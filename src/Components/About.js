import React, { useState } from "react";

export default function About() {
  const [buttonText, setbuttonText] = useState("");

  const [Style, setStyle] = useState({
    backgroundColor: "white",
    color: "black",
  });

  const colorToggle = () => {
    if (Style.color === "black") {
      setStyle({
        backgroundColor: "black",
        color: "white",
      });
      setbuttonText("enable light mode");
    } else {
      setStyle({
        backgroundColor: "white",
        color: "black",
      });
      setbuttonText("enable dark mode");
    }
  };

  return (
    <>
      <div className="container-fluid" style={Style}>
        <div>
          <h1>About us:</h1>
        </div>
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={Style}
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              style={Style}
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body"></div>
            </div>
          </div>
          <div class="accordion-item" style={Style}>
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={Style}
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
              style={Style}
            >
              <div className="accordion-body"></div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={Style}
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body"></div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <button onClick={colorToggle}>{buttonText}</button>
      </div>
    </>
  );
}
