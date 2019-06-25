/* eslint-disable */
import * as React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Sector,
  Legend,
  Text,
  ResponsiveContainer
} from "recharts";
import { Tooltip } from "antd";
import "./SimplePieChart.sass";

class SimplePieChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      width: window.innerWidth
    };
    this.onPieEnter = this.onPieEnter.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    this.setState({
      activeIndex: 0
    });
    window.addEventListener("resize", this.updateDimensions);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return typeof nextState.activeIndex !== "object";
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions() {
    this.setState({
      width: window.innerWidth
    });
  }

  renderActiveShape = props => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      value
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 10;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
      <g>
        <Tooltip placement="bottomLeft" title={payload.name}>
          <Text
            width={25}
            x={cx}
            y={cy}
            dy={8}
            className="overflowtext recharts-text"
            textAnchor="middle"
            fill={fill}
          >
            {payload.name.length > 30
              ? payload.name.slice(0, 30) + "..."
              : payload.name}
            {/* {`${prettifyNumber(value, value)} ${
            this.props.labelname ? this.props.labelname : null
          }`}
          {`(${(percent * 100).toFixed(2)}%)`} */}
          </Text>
        </Tooltip>
        {this.state.width <= 425 ? (
          <Text
            width={25}
            x={cx}
            y={cy + 40}
            dy={1}
            className="overflowtext"
            textAnchor="middle"
            fill={fill}
          >
            {`${textAnchor + (" (" + (percent * 100).toFixed(2)) + "%)"}`}
          </Text>
        ) : null}
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        {this.state.width > 425 ? (
          <path
            d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
            stroke={fill}
            fill="none"
          />
        ) : null}
        {this.state.width > 425 ? (
          <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        ) : null}
        {this.state.width > 425 ? (
          <text
            x={ex + (cos >= 0 ? 1 : -1) * 12}
            y={ey}
            textAnchor={textAnchor}
            fill="#333"
          >{``}</text>
        ) : null}
        {this.state.width > 425 ? (
          <text
            x={ex + (cos >= 0 ? 1 : -1) * 12}
            y={ey}
            dy={18}
            textAnchor={textAnchor}
            fill="#999"
          >
            {`(${(percent * 100).toFixed(2)}%)`}
          </text>
        ) : null}
      </g>
    );
  };

  getInitialState() {
    return {
      activeIndex: 0
    };
  }

  onPieEnter(data, index) {
    this.setState({
      activeIndex: index
    });
  }

  renderLegend = props => {
    const { payload } = props;
    //entry.color
    return (
      <div>
        <div className="row" style={{ justifyContent: "center" }}>
          {payload.map((entry, index) => (
            <p
              key={`item-${index}`}
              onClick={
                this.props.onplot === true
                  ? e => {
                      entry.value.length > 0
                        ? this.props.onPlotClick(entry.value)
                        : "";
                    }
                  : null
              }
              className="overflowtext"
            >
              <Tooltip placement="bottomLeft" title={entry.value}>
                <Icon
                  icon="square"
                  className="f-s-12 m-r-3 m-l-5"
                  style={{ color: entry.color }}
                />

                {entry.value}
              </Tooltip>
            </p>
          ))}
        </div>
      </div>
    );
  };

  COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  render() {
    let data = this.props.data
      ? this.props.data
      : [
          { name: "Frontend", value: 50 },
          { name: "Backend", value: 50 },
          { name: "Programming Langaages & Others", value: 50 }
        ];
    return (
      <div className="container-piechart">
        <ResponsiveContainer width="99%">
          <PieChart
            className="pie-chart"
            width={this.props.width ? this.props.width : 500}
            height={375}
            onMouseEnter={this.onPieEnter}
          >
            <Pie
              dataKey="value"
              data={data}
              // cx={250}
              // cy={100}
              activeIndex={
                this.state.activeIndex === undefined
                  ? 0
                  : this.state.activeIndex
              }
              activeShape={this.renderActiveShape}
              outerRadius={
                this.state.width <= 1025 && this.state.width > 768 ? 80 : 100
              }
              innerRadius={
                this.state.width <= 1025 && this.state.width > 768 ? 65 : 85
              }
              fill="#8884d8"
              onMouseEnter={this.onPieEnter}
              onClick={
                this.props.onplot === true
                  ? e => this.props.onPlotClick(e.name)
                  : null
              }
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={this.COLORS[index % this.COLORS.length]}
                />
              ))}
            </Pie>
            {this.props.customLabel === true ? (
              this.state.width >= 321 ? (
                <Legend
                  height={36}
                  margin={{ top: 10 }}
                  content={this.renderLegend}
                />
              ) : null
            ) : this.state.width >= 321 ? (
              <Legend height={36} margin={{ top: 10 }} />
            ) : null}
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
export default SimplePieChart;
