import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    d3.select('.chart')
      .append('svg')
      .attr('width', '100%')
      .attr('height', '100%');
    this.rendering();
    d3.select(window).on('resize', this.rendering);
  }
  rendering() {
    const margin = { top: 60, right: 40, bottom: 50, left: 60 };
    let n = 30;
    const dataset = [];
    const divelement = d3.select('.chart');
    const svgelement = divelement.select('svg');

    svgelement.html('');

    for (let i = 0; i < 50; i++) {
      const newNum = n + (5 - Math.floor(Math.random() * 10));
      dataset.push({ x: i, y: newNum });
      n = newNum;
      // console.log(dataset);
    }
    console.log('dataset', dataset);

    const height = svgelement.property('clientHeight');
    const width = svgelement.property('clientWidth');

    const xscale = d3
      .scaleLinear()
      .domain([0, dataset.length])
      .range([0, width - margin.right - margin.left]);
    console.log('max:', () => d3.max(dataset, d => d.y));
    const yscale = d3
      .scaleLinear()
      .domain([0, d3.max(dataset, d => d.y)])
      .range([height - margin.top - margin.bottom, 0]);

    const x_axis = d3.axisBottom(xscale);
    const y_axis = d3.axisLeft(yscale);

    const xAxisTranslate = height - margin.bottom;
    const yAxisTranslate = 0 + margin.top;
    svgelement
      .append('g')
      .attr(
        'transform',
        'translate(' + margin.left + ', ' + xAxisTranslate + ')'
      )
      .call(x_axis);
    svgelement
      .append('g')
      .attr(
        'transform',
        'translate(' + margin.left + ', ' + yAxisTranslate + ')'
      )
      .call(y_axis);

    const line = d3
      .line()
      .x(d => {
        console.log('x:', xscale(d.x));
        return xscale(d.x) + margin.left;
      }) // set the x values for the line generator
      .y(d => {
        console.log('y:', yscale(d.y));
        return yscale(d.y) + margin.top;
      }) // set the y values for the line generator
      .curve(d3.curveMonotoneX);

    svgelement
      .append('path')
      .datum(dataset) // 10. Binds data to the line
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 1.5)
      .attr('d', line); // 11. Calls the line generator

    // let line = d3.line().x((d, i) => i + 1).y((d) => d)
    const circle = svgelement.selectAll('circle').data(dataset);

    const mouseG = svgelement.append('g').attr('class', 'mouse-over-effects');

    mouseG
      .append('path') // this is the black vertical line to follow mouse
      .attr('class', 'mouse-line')
      .style('stroke', 'black')
      .style('stroke-width', '1px')
      .style('opacity', '0');

    circle
      .enter()
      .append('circle')
      .attr('cx', (d, i) => {
        return xscale(d.x) + margin.left;
      })
      .attr('cy', (d, i) => {
        console.log(d);
        return yscale(d.y) + margin.top;
      })
      .attr('r', 10)
      .style('stroke', 'steelblue')
      .style('fill', 'white')
      .style('stroke-width', '2px')

      .on('mouseover', function(a, b, c) {
        console.log(a);
        console.log(b);
        console.log(c);
        d3.select('.mouse-line').style('opacity', '1');
        d3.select(this).attr('r', 15);
      })
      .on('mouseout', function(a, b, c) {
        console.log(a);
        console.log(b);
        console.log(c);
        d3.select('.mouse-line').style('opacity', '0');
        d3.select(this).attr('r', 10);
      });

    const lineData = dataset.map((v, idx) => {
      return { x: idx, y: v };
    });
  }
}
