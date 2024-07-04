import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import { BASE_URL, API_KEY } from './constant';
import { useState, useEffect } from 'react';
import { WeatherData } from './src/types/app';

export default function App() {
  const [weatherData, setWeatherData] = useState<WeatherData>();
  const searchWeather = () => {
    axios
      .get(`${BASE_URL}&appid=${API_KEY}`)
      .then((response) => {
        const data = response.data;
        console.log(data);
        setWeatherData(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    searchWeather();
  }, []);

  return (
    <View style={styles.container}>
       <Text>Cuaca saat ini {weatherData?.list[0].weather[0].main}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
