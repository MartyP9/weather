// Map weather codes
const weatherCodeToString: {
    [key: number]: {
        icon: string;
        label: string;
    };
} = {
    0: {
        icon: "c01d",
        label: "Clear sky",
    },
    1: {
        icon: "c02d",
        label: "Mainly clear",
    },
    2: {
        icon: "c03d",
        label: "Partly cloudy",
    },
    3: {
        icon: "c04d",
        label: "Overcast",
    },
    45: {
        icon: "s05d",
        label: "Fog",
    },
    48: {
        icon: "s06d",
        label: "Depositing rime fog",
    },
    51: {
        icon: "d01d",
        label: "Light drizzle",
    },
    53: {
        icon: "s08d",
        label: "Moderate drizzle",
    },
    55: {
        icon: "s09d",
        label: "Dense intensity drizzle",
    },
    56: {
        icon: "s10d",
        label: "Light freezing drizzle",
    },
    57: {
        icon: "s11d",
        label: "Dense intensity freezing drizzle",
    },
    61: {
        icon: "r01d",
        label: "Light rain",
    },
    63: {
        icon: "s14d",
        label: "Moderate rain",
    },
    65: {
        icon: "s15d",
        label: "Heavy intensity rain",
    },
    66: {
        icon: "s16d",
        label: "Very heavy intensity rain",
    },
    67: {
        icon: "s17d",
        label: "Extreme intensity rain",
    },
    71: {
        icon: "s18d",
        label: "Slight snow fall",
    },
    73: {
        icon: "s19d",
        label: "Moderate snow fall",
    },
    75: {
        icon: "s20d",
        label: "Heavy snow fall",
    },
    77: {
        icon: "s21d",
        label: "Snow grains",
    },
    80: {
        icon: "s22d",
        label: "Slight rain showers",
    },
    81: {
        icon: "s23d",
        label: "Moderate rain showers",
    },
    82: {
        icon: "s24d",
        label: "Heavy rain showers",
    },
    85: {
        icon: "s25d",
        label: "Slight snow showers",
    },
    86: {
        icon: "s26d",
        label: "Heavy snow showers",
    },
    95: {
        icon: "s27d",
        label: "Thunderstorm",
    },
    96: {
        icon: "s28d",
        label: "Thunderstorm with slight hail",
    },
    99: {
        icon: "s29d",
        label: "Thunderstorm with heavy hail",
    },
};
export default weatherCodeToString;