const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
};

const multiply = function(a: number, b: number): number {
  return a * b;
}; // anonymous function assigned to a variable

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): never => {
  if (!message) {
    throw new Error(message);
  }
}; // never go to the end of the function, once errow thrown, exit the function

const todaysWeather = {
  date: new Date(),
  weather: "sunny"
};

const logWeather = (forecast: {date: Date, weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
}

logWeather(todaysWeather);

// Optimiaztion - ES2015 syntax
const loggWeather = ({ date, weather }: {date: Date, weather: string }): void => {
  console.log(date);
  console.log(weather);
}

logWeather(todaysWeather);