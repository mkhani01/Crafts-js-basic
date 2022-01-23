import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts'
import PieChart  from 'highcharts-react-official'
import { useNode } from '@craftjs/core';



export const Pinechart = () => 
{
    const {
        connectors: { connect, drag },
      } = useNode();

    const options = {
      chart: {
        type: "pie"
      },
        title: {
          text: 'My chart'
        },
        series: [{
          name: 'Brands',
          colorByPoint: true,
          data: [{
              name: 'Chrome',
              y: 61.41,
          }, {
              name: 'Internet Explorer',
              y: 11.84
          }, {
              name: 'Firefox',
              y: 10.85
          }, {
              name: 'Edge',
              y: 4.67
          }, {
              name: 'Safari',
              y: 4.18
          }, {
              name: 'Sogou Explorer',
              y: 1.64
          }, {
              name: 'Opera',
              y: 1.6
          }, {
              name: 'QQ',
              y: 1.2
          }, {
              name: 'Other',
              y: 2.61
          }]
      }]
      }
    return (
 <div
      ref={(ref) => connect(drag(ref))}
    >
  <PieChart
    highcharts={Highcharts}
    options={options}
  />
</div>
    )
}
export const PiechartSettings = () => {

    return (
        <></>
    );
  };