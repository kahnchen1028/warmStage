import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    d3.select('.chart').append('svg').attr('width', '100%').attr('height', '100%')
    this.rendering()
    d3.select(window).on('resize', this.rendering);
  }
  rendering() {
    const margin = { top: 60, right: 40, bottom: 50, left: 60 };
    let n = 30;
    var dataset = [];
    let divelement = d3.select('.chart')
    let svgelement = divelement.select('svg')

    svgelement.html('')


    for (var i = 0; i < 50; i++) {
      var newNum = n + (5 - Math.floor(Math.random() * 10));
      dataset.push({ x: i, y: newNum });
      n = newNum;
    }
    console.log(dataset)

    let height = svgelement.property('clientHeight')
    let width = svgelement.property('clientWidth')

    console.log(height, width);
    let xscale = d3.scaleLinear()
      .domain([0, dataset.length])
      .range([0, width - margin.right - margin.left]);


    let yscale = d3.scaleLinear()
      .domain([0, d3.max(dataset)])
      .range([height - margin.top - margin.bottom, 0]);

    let x_axis = d3.axisBottom(xscale)
    let y_axis = d3.axisLeft(yscale)

    let xAxisTranslate = height - margin.bottom;
    let yAxisTranslate = 0 + margin.top;
    svgelement.append('g')
      .attr('transform', 'translate(' + margin.left + ', ' + xAxisTranslate + ')')
      .call(x_axis);
    svgelement.append('g')
      .attr('transform', 'translate(' + margin.left + ', ' + yAxisTranslate + ')')
      .call(y_axis);


    var line = d3.line()
      .x((d, i) => { return xscale(i + 1) + margin.left; }) // set the x values for the line generator
      .y((d, i) => { return yscale(d.y) + margin.top }) // set the y values for the line generator 
      .curve(d3.curveMonotoneX)

    svgelement.append("path")
      .datum(dataset) // 10. Binds data to the line 
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", line); // 11. Calls the line generator 

    // let line = d3.line().x((d, i) => i + 1).y((d) => d)
    let circle = svgelement.selectAll('circle').data(dataset);

    circle.enter().append('circle').attr('cx', (d, i) => xscale(i + 1) + margin.left).attr('cy', (d, i) => yscale(d) + margin.top)
      .attr('r', 10)
      .attr('fill', 'steelblue')
    // .on("mouseover", function (a, b, c) {
    //   console.log(b)
    //   // this.attr('class', 'focus')
    // })
    circle.enter().append('circle').attr('cx', (d, i) => xscale(i + 1) + margin.left).attr('cy', (d, i) => yscale(d) + margin.top).attr('r', 5).attr('fill', 'white')

    let lineData = dataset.map((v, idx) => { return { x: idx, y: v } });



  }
}
