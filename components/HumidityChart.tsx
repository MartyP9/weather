"use client"

import { Card, AreaChart, Title } from "@tremor/react"
type Props = {
    results: Root;
}
const HumidityChart = ({ results}: Props) => {
    const hourly = results?.hourly.time.map(time => new Date(time).toLocaleString('en-US',{
        hour: 'numeric',
        hour12: false
        })).slice(1,25)

    const data = hourly.map((hour, i)=> {
        return {
            time: Number(hour),
            "Humidity (%)": results.hourly.relativehumidity_2m[i],
        }
    })
    const dataFormatter = (number: number) => `${number} %`
  return (
    <div>
        <Card>
            <Title>Relative Humidity</Title>
                <AreaChart 
                className="mt-6"
                data={data}
                showLegend
                index="time"
                categories={["Humidity (%)"]}
                colors={["teal"]}
                minValue={0}
                maxValue={100}
                valueFormatter={dataFormatter}
                yAxisWidth={45}
                />
            
        </ Card>
    </div>
  )
}

export default HumidityChart