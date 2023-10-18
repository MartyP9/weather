
enum WindDirection {
    N = 'N',
    NNE = 'NNE',
    NE = 'NE',
    ENE = 'ENE',
    E = 'E',
    ESE = 'ESE',
    SE = 'SE',
    SSE = 'SSE',
    S = 'S',
    SSW = 'SSW',
    SW = 'SW',
    WSW = 'WSW',
    W = 'W',
    WNW = 'WNW',
    NW = 'NW',
    NNW = 'NNW',
    NoWindData = 'No Wind Data'
  }
  
  export default function getWindDirection(degrees: number): WindDirection {
    if (!degrees) return WindDirection.NoWindData
    if (degrees >= 348.75 && degrees <= 360 || degrees >= 0 && degrees < 11.25) {
      return WindDirection.N;
    } else if (degrees >= 11.25 && degrees < 33.75){
      return WindDirection.NNE;
    } else if (degrees >= 33.75 && degrees < 56.25) {
      return WindDirection.NE;
    } else if (degrees >= 56.25 && degrees < 78.75) {
      return WindDirection.ENE;
    } else if (degrees >= 78.75 && degrees < 101.25) {
      return WindDirection.E;
    } else if (degrees >= 101.25 && degrees < 123.75) {
        return WindDirection.ESE;
    } else if (degrees >= 123.75 && degrees < 146.25) {
      return WindDirection.SE;
    } else if (degrees >= 146.25 && degrees < 168.75) {
      return WindDirection.SSE;
    } else if (degrees >= 168.75 && degrees < 191.25) {
      return WindDirection.S;
    } else if (degrees >= 191.25 && degrees < 213.75) {
      return WindDirection.SSW;
    } else if (degrees >= 213.75 && degrees < 236.25) {
      return WindDirection.SW;
    } else if (degrees >= 236.25 && degrees < 258.75) {
      return WindDirection.WSW;
    } else if (degrees >= 258.75 && degrees < 281.25) {
      return WindDirection.W;
    } else if (degrees >= 281.25 && degrees < 303.75) {
      return WindDirection.WNW;
    } else if (degrees >= 303.75 && degrees < 326.25) {
      return WindDirection.NNW;
    } return WindDirection.NoWindData
  }
