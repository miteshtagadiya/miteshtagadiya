import React, { Component } from "react";
import reactWindowSize from "react-window-size";

class SelectionSort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addtask: 0,
      tasks: [23, 43, 12, 54, 23],
      disabled: true,
    };
    this.updateInput = this.updateInput.bind(this);
  }

  componentDidMount() {
    this.container = document.querySelector(".data-container1");
    this.generateBlocks(this.state.tasks);
    this.selectionSort();
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
      block.classList.add("fun-block1");
      block.style.height = `${arr[i] * 3}px`;
      block.style.transform = `translateX(${i * 30}px)`;

      const blockLabel = document.createElement("label");
      blockLabel.classList.add("fun-block__id1");
      blockLabel.innerHTML = arr[i];

      block.appendChild(blockLabel);
      this.container.appendChild(block);
    }
  };

  swapSelectionSort = (el1, el2) => {
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
          var temp = document.createElement("div");
          el1.parentNode.insertBefore(temp, el1);

          // move elobj1 to right before obj2
          el2.parentNode.insertBefore(el1, el2);

          // move obj2 to right before where obj1 used to be
          temp.parentNode.insertBefore(el2, temp);

          // remove temporary marker node
          temp.parentNode.removeChild(temp);
          // container.insertBefore(el2, el1);
          resolve();
        }, 250);
      });
    });
  };

  async selectionSort(delay = 500) {
    if (delay && typeof delay !== "number") {
      alert("sort: First argument must be a typeof Number");
      return;
    }
    let blocks = document.querySelectorAll(".fun-block1");
    var minIdx,
      len = blocks.length;
    for (let i = 0; i < blocks.length; i++) {
      minIdx = i;
      for (let j = i + 1; j < len; j += 1) {
        const value1 = Number(blocks[minIdx].childNodes[0].innerHTML);
        const value2 = Number(blocks[j].childNodes[0].innerHTML);

        if (value2 < value1) {
          minIdx = j;
        }
      }

      if (minIdx !== i) {
        blocks[i].style.backgroundColor = "#ff033e";
        blocks[minIdx].style.backgroundColor = "#ff033e";
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, delay)
        );
        await this.swapSelectionSort(blocks[minIdx], blocks[i]);
        blocks = document.querySelectorAll(".fun-block1");
      }

      blocks[minIdx].style.backgroundColor = "#58B7FF";
      blocks[i].style.backgroundColor = "#58B7FF";

      blocks[i].style.backgroundColor = "#38e715";
    }
    this.setState({
      disabled: false,
    });
  }

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
          <label style={{ padding: 15, fontSize: 22 }}>Selection Sort</label>
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
                if (!this.state.disabled) {
                  this.setState({
                    disabled: true,
                  });
                  this.generateBlocks(this.state.tasks);
                  this.selectionSort();
                }
              }}
            >
              Sort
            </div>
          </div>
          <div style={{ padding: 25 }}>
            <div className="data-container1" />
          </div>
        </div>
      </div>
    );
  }
}

export default reactWindowSize(SelectionSort);
