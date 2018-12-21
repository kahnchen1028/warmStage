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
    let divelement = d3.select('.chart')
    let svgelement = divelement.select('svg')

    svgelement.html('')
    const padding = { top: 20, left: 20, bottom: 20, right: 20 }
    const rectGap = 20;
    let radiusDS = [100, 60, 30];

    let height = svgelement.property('clientHeight')
    let width = svgelement.property('clientWidth')
    console.log(height, width);
    let xscale = d3.scaleLinear()
      .domain([0, d3.max(radiusDS)])
      .range([0, width - 50]);
    let x_axis = d3.axisBottom(xscale)
    let xAxisTranslate = height - 50;
    svgelement.append('g')
      .attr('transform', 'translate(20, ' + xAxisTranslate + ')')
      .call(x_axis)
  }


}
