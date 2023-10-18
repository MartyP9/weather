export const cleanData = (data:Root, city: string) => {
    const {
        current_weather,
        timezone,
        hourly,
        hourly_units,
        timezone_abbreviation,
    } = data;
    const {
        temperature,
        time,
        weathercode,
        winddirection,
        windspeed,
    } = current_weather;

    const {
        temperature_2m,
        snowfall,
        rain,
        relativehumidity_2m,
        precipitation_probability,
        uv_index,
    } = hourly;
    return {
        current_weather: {
            temperature,
            time,
            weathercode,
            winddirection,
            windspeed,
        },
        hourly: {
            temperature_2m: temperature_2m.slice(1,24),
            snowfall: snowfall.slice(1,24),
            rain: rain.slice(1,24),
            relativehumidity_2m: relativehumidity_2m.slice(1,24),
            precipitation_probability: precipitation_probability.slice(1,24),
            uv_index: uv_index.slice(1,24),
        },
        timezone,
        timezone_abbreviation,
        city,
        hourly_units,
    }
}