import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { BarChart, LineChart, ScatterChart } from "react-native-chart-kit";

import data from "../Datos/csv.json"; // Assuming the data file is in the same directory

const DataDisplayScreen = () => {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    setJsonData(data);
  }, []);

  const chartData = jsonData.map((item) => ({
    periodUnit: new Date(item.PeriodUnit),
    mexicanPeso: parseFloat(item["Mexican peso"]),
  }));

  const chartLabels = chartData.map((item) => item.periodUnit);
  const chartValues = chartData.map((item) => item.mexicanPeso);

  const lineChartData2003To2006 = chartData.filter(
    (item) =>
      item.periodUnit.getFullYear() >= 2003 && // Adjust as needed
      item.periodUnit.getFullYear() <= 2006  // Adjust as needed
  );

  const lineChartData2008To2013 = chartData.filter(
    (item) =>
      item.periodUnit.getFullYear() >= 2008 &&
      item.periodUnit.getFullYear() <= 2013
  );

  const lineChartData2020To2023 = chartData.filter(
    (item) =>
      item.periodUnit.getFullYear() >= 2020 &&
      item.periodUnit.getFullYear() <= 2023
  );

  const lineChartData2006To2008 = chartData.filter(
    (item) =>
      item.periodUnit.getFullYear() >= 2006 &&
      item.periodUnit.getFullYear() <= 2008
  );

  
  const lineChartData2018To2020 = chartData.filter(
    (item) =>
      item.periodUnit.getFullYear() >= 2018 &&
      item.periodUnit.getFullYear() <= 2020
  );

  const lineChartData2023To2023 = chartData.filter(
    (item) =>
      item.periodUnit.getFullYear() >= 2023 &&
      item.periodUnit.getFullYear() <= 2023
  );

  const lineChartLabels2008To2013 = lineChartData2008To2013.map(
    (item) => item.periodUnit
  );

  const lineChartValues2008To2013 = lineChartData2008To2013.map(
    (item) => item.mexicanPeso
  );

  const lineChartLabels2003To2006 = lineChartData2003To2006.map(
    (item) => item.periodUnit
  );

  const lineChartValues2003To2006 = lineChartData2003To2006.map(
    (item) => item.mexicanPeso
  );

  const lineChartLabels2020To2023 = lineChartData2020To2023.map(
    (item) => item.periodUnit
  );

  const lineChartValues2020To2023 = lineChartData2020To2023.map(
    (item) => item.mexicanPeso
  );

  const lineChartLabels2006To2008 = lineChartData2006To2008.map(
    (item) => item.periodUnit
  );

  const lineChartValues2006To2008 = lineChartData2006To2008.map(
    (item) => item.mexicanPeso
  );

  const lineChartLabels2018To2020 = lineChartData2018To2020.map(
    (item) => item.periodUnit
  );

  const lineChartValues2018To2020 = lineChartData2018To2020.map(
    (item) => item.mexicanPeso
  );

  const lineChartLabels2023To2023 = lineChartData2023To2023.map(
    (item) => item.periodUnit
  );

  const lineChartValues2023To2023 = lineChartData2023To2023.map(
    (item) => item.mexicanPeso
  );





  return (
    <View style={styles.container}>
      {/* Bar Chart */}
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Gráfico de Barras</Text>
        <BarChart
          data={{
            labels: chartLabels,
            datasets: [{ data: chartValues }],
          }}
          width={500}
          height={350}
          yAxisLabel="$"
          chartConfig={{
            backgroundGradientFrom: "#f0f0f0",
            backgroundGradientTo: "#f0f0f0",
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
        />
      </View>
      {/* Line Chart */}

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Gráfico de Línea (2003-2006)</Text>
        <LineChart
          data={{
            labels: lineChartLabels2003To2006,
            datasets: [{ data: lineChartValues2003To2006 }],
          }}
          width={500}
          height={350}
          yAxisLabel="$"
          chartConfig={{
            backgroundGradientFrom: "#f0f0f0",
            backgroundGradientTo: "#f0f0f0",
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
        />
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Gráfico de Línea (2006-2008)</Text>
        <LineChart
          data={{
            labels: lineChartLabels2006To2008,
            datasets: [{ data: lineChartValues2006To2008 }],
          }}
          width={500}
          height={350}
          yAxisLabel="$"
          chartConfig={{
            backgroundGradientFrom: "#f0f0f0",
            backgroundGradientTo: "#f0f0f0",
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
        />
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Gráfico de Línea (2008-2013)</Text>
        <LineChart
          data={{
            labels: lineChartLabels2008To2013,
            datasets: [{ data: lineChartValues2008To2013 }],
          }}
          width={500}
          height={350}
          yAxisLabel="$"
          chartConfig={{
            backgroundGradientFrom: "#f0f0f0",
            backgroundGradientTo: "#f0f0f0",
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
        />
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Gráfico de Línea (2018-2020)</Text>
        <LineChart
          data={{
            labels: lineChartLabels2018To2020,
            datasets: [{ data: lineChartValues2018To2020 }],
          }}
          width={500}
          height={350}
          yAxisLabel="$"
          chartConfig={{
            backgroundGradientFrom: "#f0f0f0",
            backgroundGradientTo: "#f0f0f0",
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
        />
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Gráfico de Línea (2020-2023)</Text>
        <LineChart
          data={{
            labels: lineChartLabels2020To2023,
            datasets: [{ data: lineChartValues2020To2023 }],
          }}
          width={500}
          height={350}
          yAxisLabel="$"
          chartConfig={{
            backgroundGradientFrom: "#f0f0f0",
            backgroundGradientTo: "#f0f0f0",
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
        />
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Gráfico de Línea (2023 Present)</Text>
        <LineChart
          data={{
            labels: lineChartLabels2023To2023,
            datasets: [{ data: lineChartValues2023To2023 }],
          }}
          width={500}
          height={350}
          yAxisLabel="$"
          chartConfig={{
            backgroundGradientFrom: "#f0f0f0",
            backgroundGradientTo: "#f0f0f0",
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
        />
      </View>
      
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    width: "100%",
    alignContent: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  dataRow: {
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
    borderColor: "#ccc",
  },
  chartContainer: {
    marginTop: 20,
    alignContent: "center",
    justifyContent: "center",
  }, chartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default DataDisplayScreen;
