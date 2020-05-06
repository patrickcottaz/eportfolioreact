import React from 'react';
import { Bar } from 'react-chartjs-2';

export class ChartTechnos extends React.Component {

  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
    this.state = {
      labels: null,
      datasets: null,
    };
  }

  componentDidMount() {
    const arrayLabels = [];
    /*eslint array-callback-return: [0, { allowImplicit: true }]*/
    this.props.items.map((item) => {
      arrayLabels.push(item.title);
      this.setState({
        labels: arrayLabels,
      });
    });
    const backgroundColors = [];
    const hoverBackgroundColors = [];
    const datas = [];
    this.props.items.map((item) => {
      backgroundColors.push(item.color);
      hoverBackgroundColors.push(item.hover_color);
      datas.push(item.data);
    });
    this.setState({
      datasets: [{
        backgroundColor: backgroundColors,
        hoverBackgroundColor: hoverBackgroundColors,
        data: datas,
      }],
    });
  }

  render() {
    return (
      <Bar
        ref={this.chartRef}
        data={{
          labels: this.state.labels,
          datasets: this.state.datasets,
        }}
        options={{
          aspectRatio: 1,
          legend: {
            display: false,
          },
          tooltips: {
            callbacks: {
              label(tooltipItem) {
                return ' ' + tooltipItem.yLabel + ' %';
              },
            },
          },
          scales: {
            yAxes: [{
              ticks: {
                min: 0,
                max: 100,
              },
            }],
          },
        }}
      />
    )
  }
}
