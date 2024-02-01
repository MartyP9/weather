import { getClient } from "@/apollo-client";
import CalloutCard from "@/components/CalloutCard";
import HumidityChart from "@/components/HumidityChart";
import InformationPanel from "@/components/InformationPanel";
import RainChart from "@/components/RainChart";
import StatCard from "@/components/StatCard";
import TempChart from "@/components/TempChart";
import fetchWeatherQuery from "@/graphql/queries/fetchWeatherQueries";
import { cleanData } from "@/lib/cleanData";
import getBasePath from "@/lib/getbasePath";
import getWindDirection from "@/lib/windConverter";

//refreshes cache every 2hr
export const revalidate = 7200;

type Props = {
   params: {
    city: string
    lat: string
    long: string
  };
};
const WeatherPage = async ({params: { city, lat, long}}: Props) => {
  const client = getClient()
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone

  const { data } = await client.query({
    query: fetchWeatherQuery,
    variables:{
      current_weather: "true",
      longitude: long,
      latitude: lat,
      timezone: timezone,
    }
  });
  const results: Root = data.myQuery;

  let wind = getWindDirection(results.current_weather.winddirection)

  const dataToSend = cleanData(results, city)
  const res = await  fetch(`${getBasePath()}/api/getWeatherSummary`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ weatherData: dataToSend }),
  })
  const GPTdata = await res.json();
  

  return (
    <div className="flex flex-col min-h-screen md:flex-row ">
       <InformationPanel 
        city={city}
        results={results} 
        lat={lat}
        long={long}
      />
       <div className="flex-1 p-5 lg:p-10">
        <div className="p-5">
          <div className="pb-5">
            <h2 className="text-xl font-bold">Today&apos;s Overview</h2>
            <p className="text-sm text-gray-400">Last updated at: {" "}
              {new Date(results.current_weather.time).toLocaleString()}
              ({results.timezone})
            </p>
          </div>
          <div className="m-2 mb-10">
            <CalloutCard message={GPTdata} />
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 m-2">
            <StatCard 
              title="Today's High Temperature" 
              metric={`${results.daily.temperature_2m_max[0].toFixed(1)}°C`}
              color='yellow' />
            <StatCard 
              title="Today's Low Temperature" 
              metric={`${results.daily.temperature_2m_min[0].toFixed(1)}°C`}
              color='green' />
            <div className="flex space-x-3">
            
              <StatCard 
                title="UV Index" 
                metric={`${results.daily.uv_index_max[0].toFixed(1)}`}
                color='rose' />
                <StatCard 
                title="Precipitation" 
                metric={`${results.daily.precipitation_sum[0].toFixed(1)} mm`}
                color='blue' />
            </div>
            <div className="flex space-x-3">
              <StatCard 
                title="Wind Speed" 
                metric={`${results.current_weather.windspeed.toFixed(1)} km/h`}
                color='cyan' />
              <StatCard 
                title="Wind Direction" 
                metric={wind}
                color='violet' />
            </div>
          </div>
          {Number(results.daily.uv_index_max[0].toFixed(1)) > 5 && (
                  <CalloutCard 
                    message={"The UV Index high today, be sure to limit time in direct sunlight"}
                    warning />
                )} 
        </div>
        <hr className="mb-5"/>
        <div className="space-y-3">
          <TempChart results={results} />
          <RainChart results={results} />
          <HumidityChart results={results} />
        </div>
       </div>
    </div>
  )
}

export default WeatherPage
