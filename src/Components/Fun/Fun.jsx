import React, { Component } from "react";
import ParticleComponent from "../ParticleComponent";
import SelectionSort from "./SelectionSort";
import BubbleSort from "./BubbleSort";
import reactWindowSize from "react-window-size";

class Fun extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 4,
      result: [],
      test: [],
      showCard: false,
      score: 0,
      highScore: 0
    };
  }

  findCommonElement(a, b) {
    return a.sort().toString() === b.sort().toString();
  }

  componentDidMount() {
    this.setCode();
  }

  setCode() {
    let array = [];
    while (array.length < this.state.count) {
      let random_number =
        Math.floor(Math.random() * (this.state.count * this.state.count)) + 1;
      if (array.indexOf(random_number) === -1) {
        array.push(random_number);
      }
    }

    this.setState({
      result: array,
      showCard: false
    });
    setTimeout(() => {
      this.setState({
        result: [],
        test: array
      });
    }, 700);
  }

  //   componentDidUpdate(prevProps, prevState) {
  //     if (this.state.result.length >= this.state.test.length) {
  //       if (this.findCommonElement(this.state.result, this.state.test)) {
  //         this.setState({
  //           showMessage: true
  //         });
  //       }
  //     }
  //   }

  renderBox() {
    var arr = new Array(this.state.count).fill(this.state.count);
    var counts = Array.from(
      Array(this.state.count * this.state.count),
      (x, index) => index + 1
    );
    return arr.map((data, index) => {
      return (
        <div className="row" key={index}>
          {arr.map((val, index1) => {
            return (
              <div
                onClick={() => {
                  var joined = this.state.result.includes(
                    counts[this.state.count * index + index1]
                  )
                    ? this.state.result.filter(
                        item =>
                          item !== counts[this.state.count * index + index1]
                      )
                    : this.state.result.concat(
                        counts[this.state.count * index + index1]
                      );

                  return this.state.result.includes(
                    counts[this.state.count * index + index1]
                  ) === false
                    ? this.setState({
                        result: joined,
                        showCard: true
                      })
                    : this.setState({
                        result: joined,
                        showCard: true
                      });
                }}
                key={index1}
                style={{
                  borderRadius: 15,
                  background: this.state.result.includes(
                    counts[this.state.count * index + index1]
                  )
                    ? "Green"
                    : "#FAA9F4",
                  border: "5px solid #ff033e",
                  minHeight:
                    (this.props.windowWidth > 1100 ? 400 : 200) /
                    this.state.count,
                  minWidth:
                    (this.props.windowWidth > 1100 ? 400 : 200) /
                    this.state.count
                }}
              ></div>
            );
          })}
        </div>
      );
    });
  }

  render() {
    return (
      <div
        className="container-fluid"
        style={{ marginTop: 70, height: "75vh", overflowY: "scroll" }}
      >
        <ParticleComponent />
        <div className="row" style={{ margin: "auto" }}>
          <div
            className="col-sm-12 col-xl-12 col-lg-12 col-md-12"
            style={{ margin: "auto" }}
          >
            <div
              style={{
                border: "2px solid #7ef0ff",
                borderRadius: 10,
                marginTop: 50
              }}
            >
              <div className="row" style={{ marginTop: 30, marginBottom: 30 }}>
                <div className="col-sm-12 col-lg-4">
                  <label style={{ color: "aqua", padding: 20 }}>
                    The game is just to test your short term memory, Colored
                    boxes light up in a specific pattern. After displaying the
                    pattern, the player must repeat the pattern by clicking the
                    boxes in the same order. every successful completion, the
                    pattern gets longer. If a player selects the wrong pattern
                    the game ends.
                  </label>
                </div>
                <div className="col-sm-12 col-lg-4">
                  <div
                    style={{
                      height: this.props.windowWidth > 1100 ? 400 : 200,
                      width: this.props.windowWidth > 1100 ? 400 : "100%",
                      display: "flex",
                      justifyContent: "center"
                    }}
                  >
                    <div>
                      {this.state.showCard ? (
                        this.state.result.length >= this.state.test.length &&
                        this.state.result.length !== 0 &&
                        this.state.test.length !== 0 ? (
                          this.findCommonElement(
                            this.state.result,
                            this.state.test
                          ) ? (
                            <div
                              style={{
                                position: "absolute",
                                display: "flex",
                                justifyContent: "center",
                                width:
                                  this.props.windowWidth > 1100 ? 400 : 200,
                                marginLeft: -15,
                                background: "black",
                                opacity: 0.9,
                                height:
                                  this.props.windowWidth > 1100 ? 400 : 200,
                                flexDirection: "column",
                                alignItems: "center"
                              }}
                            >
                              <div
                                style={{ color: "aqua", textAlign: "center" }}
                                onClick={() => {
                                  return this.setState(
                                    {
                                      result: [],
                                      count: this.state.count + 1,
                                      highScore:
                                        this.state.score +
                                          this.state.count * 10 >=
                                        this.state.highScore
                                          ? this.state.score +
                                            this.state.count * 10
                                          : this.state.highScore,
                                      score:
                                        this.state.score + this.state.count * 10
                                    },
                                    () => this.setCode()
                                  );
                                }}
                              >
                                <label style={{ fontSize: 40 }}>Great!</label>
                                <br />
                                <label style={{ fontSize: 30 }}>Next</label>
                              </div>
                            </div>
                          ) : (
                            <div
                              style={{
                                position: "absolute",
                                display: "flex",
                                justifyContent: "center",
                                width:
                                  this.props.windowWidth > 1100 ? 400 : 200,
                                marginLeft: -15,
                                background: "black",
                                opacity: 0.9,
                                height:
                                  this.props.windowWidth > 1100 ? 400 : 200,
                                flexDirection: "column",
                                alignItems: "center"
                              }}
                            >
                              <div
                                style={{ color: "aqua", textAlign: "center" }}
                                onClick={() => {
                                  return this.setState(
                                    {
                                      result: [],
                                      count: 4,
                                      test: [],
                                      showCard: false,
                                      highScore:
                                        this.state.score > this.state.highScore
                                          ? this.state.score
                                          : this.state.highScore,
                                      score: 0
                                    },
                                    () => this.setCode()
                                  );
                                }}
                              >
                                <label style={{ fontSize: 30 }}>
                                  Game Over
                                </label>
                              </div>
                            </div>
                          )
                        ) : null
                      ) : null}
                      {this.renderBox()}
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-4">
                  <div
                    style={{
                      textAlign: "center",
                      marginTop: 30,
                      display: "flex",
                      justifyContent: "center"
                    }}
                  >
                    <div
                      style={{
                        padding: "10px 20px",
                        textAlign: "center",
                        color: "aqua",
                        width: 200,
                        border: "2px solid",
                        borderRadius: 20
                      }}
                      onClick={() => this.setCode()}
                    >
                      Start
                    </div>
                  </div>
                  <div
                    style={{
                      textAlign: "center",
                      marginTop: 30,
                      display: "flex",
                      justifyContent: "center"
                    }}
                  >
                    <div
                      style={{
                        padding: "10px 20px",
                        fontSize: 22,
                        textAlign: "center",
                        color: "aqua"
                      }}
                    >
                      Score
                    </div>
                  </div>
                  <div
                    style={{
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center"
                    }}
                  >
                    <div
                      style={{
                        padding: "10px 20px",
                        fontSize: 22,
                        textAlign: "center",
                        color: "aqua"
                      }}
                    >
                      {this.state.score}
                    </div>
                  </div>
                  <div
                    style={{
                      textAlign: "center",
                      marginTop: 30,
                      display: "flex",
                      justifyContent: "center"
                    }}
                  >
                    <div
                      style={{
                        padding: "10px 20px",
                        fontSize: 22,
                        textAlign: "center",
                        color: "aqua"
                      }}
                    >
                      High Score
                    </div>
                  </div>
                  <div
                    style={{
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center"
                    }}
                  >
                    <div
                      style={{
                        padding: "10px 20px",
                        fontSize: 22,
                        textAlign: "center",
                        color: "aqua"
                      }}
                    >
                      {this.state.highScore}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <BubbleSort />
            <SelectionSort />
          </div>
        </div>
      </div>
    );
  }
}

export default reactWindowSize(Fun);
