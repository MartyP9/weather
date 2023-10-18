"use client"

import { Card, AreaChart, Title } from "@tremor/react"
type Props = {
    results: Root;
}
const TempChart = ({ results}: Props) => {
    const hourly = results?.hourly.time.map(time => new Date(time).toLocaleString('en-US',{
        hour: 'numeric',
        hour12: false
        })).slice(1,25)

    const data = hourly.map((hour, i)=> {
        return {
            time: Number(hour),
            "Temperature (°C)": results.hourly.temperature_2m[i],
            "UV Index": results.hourly.uv_index[i]
        }
    })
    const dataFormatter = (number: number) => `${number}`
  return (
    <div>
        <Card>
            <Title>Temperature and UV Index</Title>
                <AreaChart 
                className="mt-6"
                data={data}
                showLegend
                index="time"
                categories={["Temperature (°C)", "UV Index"]}
                colors={["yellow", "rose"]}
                minValue={0}
                valueFormatter={dataFormatter}
                yAxisWidth={45}
                />   
        </ Card>
    </div>
  )
}

export default TempChart