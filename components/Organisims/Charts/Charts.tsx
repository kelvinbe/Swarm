import React, {useState, useEffect} from 'react'
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
import {View, Text, Dimensions, StyleSheet} from 'react-native'


const Charts = () => {
  const [backgroundColor, setBackgroundColor] = useState(getRandomColor());

  const [data, setData] = useState({
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
        ],
      },
    ],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) => {
        const newData = {
          labels: prevData.labels,
          datasets: [
            {
              data: prevData.datasets[0].data.map(() => Math.random() * 100),
            },
          ],
        };
        return newData;
      });
    }, 5000); // Change the interval time as per your requirement (in milliseconds)

    return () => clearInterval(interval); // Cleanup function to clear the interval when the component unmounts or rerenders
  }, []);

  function getRandomColor() {
    const colors = ['#e26a00', '#fb8c00', '#ffa726', '#00bcd4', '#4caf50']; // Add more colors as needed
    return colors[Math.floor(Math.random() * colors.length)];
  }

  return (
    <View>
    <Text style={styles.heading}>Realtor Market Prices</Text>
    <LineChart
      data={data}
      width={Dimensions.get("window").width} // from react-native
      height={220}
      yAxisLabel="$"
      yAxisSuffix="k"
      yAxisInterval={1} // optional, defaults to 1
      chartConfig={{
        backgroundColor: "#e26a00",
        backgroundGradientFrom: "#fb8c00",
        backgroundGradientTo: "#ffa726",
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
          borderRadius: 16
        },
        propsForDots: {
          r: "6",
          strokeWidth: "2",
          stroke: "#ffa726"
        }
      }}
      bezier
      style={{
        marginVertical: 8,
        borderRadius: 16
      }}
    />
  </View>
  );
}

export default Charts


const styles = StyleSheet.create({

    heading: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})