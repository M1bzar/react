import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { BarChart, LineChart, ScatterChart } from "react-native-chart-kit";
import data from "/csv.json"; // Assuming the data file is in the same directory

const DatosApi4 = ({ navigation }) => { // Pass the navigation prop

    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {
        setJsonData(data);
    }, []);

    return (
        <View style={styles.container}>

            <Text style={styles.heading}>Data Display</Text>
            {/* Render JSON data rows */}
            {jsonData.map((item, index) => (
                Object.keys(item).length > 0 && (
                    <View key={index} style={styles.dataRow}>
                        <Text>Period Unit: {item.PeriodUnit}</Text>
                        <Text><Image source={require("../img/mexico.jpg")} style={{ width: 30, height: 20 }}/> Mexican Peso: {item["Mexican peso"]}</Text>
                        <Text><Image source={require("../img/uk.png")} style={{ width: 30, height: 20 }}/> UK pound sterling: {item["UK pound sterling"]}</Text>
                    </View>
                )
            ))}


            <View style={styles.footerButtonsContainer}>


                <TouchableOpacity style={[styles.footerButton, styles.userButton]} onPress={() => navigation.navigate("HomeUser")}>
                    <Ionicons name="person" size={24} color="white" style={styles.buttonIcon} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.footerButton, styles.tableButton]} onPress={() => navigation.navigate("TaskFormScreen")}>
                    <Ionicons name="analytics-outline" size={24} color="white" style={styles.buttonIcon} />
                </TouchableOpacity>

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
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
        position: "relative",
        backgroundColor: "white"
    },
    footerButtonsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        bottom: 20, // Adjust as needed
        left: 0,
        right: 0,
    },
    footerButton: {
        padding: 20,
        borderRadius: 30,
        marginHorizontal: 10,
    },
    userButton: {
        backgroundColor: "#1D9BF6",
    },
    tableButton: {
        backgroundColor: "#1D9BF6",
    },
    buttonIcon: {
        fontSize: 24,
        color: "white",
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover", // Ajustar imagen al tamaño de la pantalla
        justifyContent: "center",
        alignItems: "center",
    },
    loginButton: {
        paddingVertical: 20,
        paddingHorizontal: 40,
        borderRadius: 15,
        backgroundColor: "#1D9BF6",
    },
    buttonText: {
        color: "#ffffff",
        fontSize: 18,
    },
});

export default DatosApi4;
