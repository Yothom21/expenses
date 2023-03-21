import React from 'react';

import ChartBar from './ChartBar'
import './Chart.css'

const Chart = (props:any) => {


    const dataPointValue = props.dataPoints.map((dataPoint:any) => dataPoint.value);
    const totalMax = Math.max(...dataPointValue);

    return (
      <div className="chart">
          {props.dataPoints.map((dataPoint:any)=><ChartBar key={dataPoint.id} value={dataPoint.value} maxValue={totalMax} label={dataPoint.label}/>)}
      </div>
    );
}

export default Chart;