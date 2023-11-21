import React, { Component } from "react";
import reactWindowSize from "react-window-size";

function swap(el1, el2) {
  const container = document.querySelector(".data-container-bubble-sort");
  return new Promise((resolve) => {
    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);

    const transform1 = style1.getPropertyValue("transform");
    const transform2 = style2.getPropertyValue("transform");

    el1.style.transform = transform2;
    el2.style.transform = transform1;

    // Wait for the transition to end!
    window.requestAnimationFrame(function () {
      setTimeout(() => {
        container.insertBefore(el2, el1);
        resolve();
      }, 250);
    });
  });
}

async function bubbleSort(delay = 100) {
  if (delay && typeof delay !== "number") {
    alert("sort: First argument must be a typeof Number");
    return;
  }
  let blocks = document.querySelectorAll(".fun-block-bubble-sort");
  for (let i = blocks.length - 1; i >= 0; i--) {
    for (let j = 1; j <= i; j += 1) {
      blocks[j].style.backgroundColor = "#ff033e";
      blocks[j - 1].style.backgroundColor = "#ff033e";

      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );

      const value1 = Number(blocks[j - 1].childNodes[0].innerHTML);
      const value2 = Number(blocks[j].childNodes[0].innerHTML);

      if (value1 > value2) {
        await swap(blocks[j - 1], blocks[j]);
        blocks = document.querySelectorAll(".fun-block-bubble-sort");
      }

      blocks[j].style.backgroundColor = "#58B7FF";
      blocks[j - 1].style.backgroundColor = "#58B7FF";
    }

    blocks[i].style.backgroundColor = "#38e715";
  }
}

class BubbleSort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addtask: 0,
      tasks: [23, 43, 12, 54, 23],
    };
    this.updateInput = this.updateInput.bind(this);
  }

  componentDidMount() {
    this.container = document.querySelector(".data-container-bubble-sort");
    this.generateBlocks(this.state.tasks);
    bubbleSort();
  }

  generateBlocks = (arr) => {
    // if (num && typeof num !== "number") {
    //   alert("First argument must be a typeof Number");
    //   return;
    // }
    this.container.innerHTML = "";
    for (let i = 0; i < arr.length; i += 1) {
      // const value = Math.floor(Math.random() * 100);

      const block = document.createElement("div");
      block.classList.add("fun-block-bubble-sort");
      block.style.height = `${arr[i] * 3}px`;
      block.style.transform = `translateX(${i * 30}px)`;

      const blockLabel = document.createElement("label");
      blockLabel.classList.add("fun-block__id-bubble-sort");
      blockLabel.innerHTML = arr[i];

      block.appendChild(blockLabel);
      this.container.appendChild(block);
    }
  };

  updateInput(evt) {
    this.setState({ tasks: evt.target.value.split(",") });
  }

  renderLength() {
    if (this.props.windowWidth >= 1024) {
      return 85;
    } else if (this.props.windowWidth >= 720 && this.props.windowWidth < 1024) {
      return 58;
    } else if (this.props.windowWidth >= 520 && this.props.windowWidth < 720) {
      return 35;
    } else if (this.props.windowWidth < 520) {
      return 20;
    }
  }

  render() {
    return (
      <div className="container-fluid" style={{ padding: 0 }}>
        <div
          style={{
            border: "2px solid #7ef0ff",
            borderRadius: 10,
            marginTop: 50,
          }}
        >
          {/* <ParticleComponent /> */}
          <label style={{ padding: 15, fontSize: 22 }}>Bubble Sort</label>
          <br />
          <div className="row" style={{ justifyContent: "center" }}>
            <input
              type="text"
              maxLength={this.renderLength()}
              placeholder="23,43,12,54,23,65"
              style={{
                color: "#7ef0ff",
                padding: 15,
                borderRadius: "5px",
                border: "2px solid #7ef0ff",
                background: "transparent",
              }}
              onChange={this.updateInput}
            />
            <br />

            <div
              style={{
                marginLeft: 15,
                cursor: "pointer",
                color: "#7ef0ff",
                padding: "15px 25px",
                borderRadius: "5px",
                border: "2px solid #7ef0ff",
                background: "transparent",
              }}
              onClick={() => {
                this.generateBlocks(this.state.tasks);
                bubbleSort();
              }}
            >
              Sort
            </div>
          </div>
          <div style={{ padding: 25 }}>
            <div className="data-container-bubble-sort" />
          </div>
        </div>
      </div>
    );
  }
}

export default reactWindowSize(BubbleSort);
