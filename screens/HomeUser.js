import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, PanResponder,  ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const HomeUser = () => {
  const navigation = useNavigation();

  const handlePesoMexicanoBanortePress = () => {
    navigation.navigate("PesoMexicanoBanorteScreen");
  };

  const handlePesoMexicanoBancoPress = () => {
    navigation.navigate("PesoMexicanoBancoScreen");
  };

  const handleGraficasPress = () => {
    navigation.navigate("TaskFormScreen");
  };

  const handleDatosOwnApiPress = () => {
    navigation.navigate("DatosApi");
  };

  const handleDatosOwnApiPress2 = () => {
    navigation.navigate("DatosApi2");
  };
  const handleDatosOwnApiPress3 = () => {
    navigation.navigate("DatosApi3");
  };

  const handleDatosOwnApiPress4 = () => {
    navigation.navigate("DatosApi4");
  };
  const handleDatosOwnApiPress5 = () => {
    navigation.navigate("DatosApi5");
  };

  const handleDatosOwnApiPress6 = () => {
    navigation.navigate("DatosApi6");
  };

  const handleUserButtonPress = () => {
    navigation.navigate("HomeUser");
  };

  const handleTableButtonPress = () => {
    navigation.navigate("TaskFormScreen");
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) => {
      if (gestureState.dx < 10) { // Cambiado el signo a ">"
        navigation.navigate("TaskFormScreen");
      }
    },
  });

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
    <ImageBackground source={require("../img/images.jpg")} style={styles.backgroundImage}>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button2} onPress={handlePesoMexicanoBanortePress}>
          <Text style={styles.buttonText}>Peso Mexicano Banorte</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={handlePesoMexicanoBancoPress}>
          <Text style={styles.buttonText}>Peso Mexicano Banco</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={handleGraficasPress}>
          <Text style={styles.buttonText}>Gráficas de valores peso Mexicano</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={handleDatosOwnApiPress}>
          <Text style={styles.buttonText}>Mexican Peso VS USA dollar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={handleDatosOwnApiPress2}>
          <Text style={styles.buttonText}>Mexican Peso VS Australian dollar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={handleDatosOwnApiPress3}>
          <Text style={styles.buttonText}>Mexican Peso VS Canadian dollar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={handleDatosOwnApiPress4}>
          <Text style={styles.buttonText}>Mexican Peso VS UK pound sterling</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={handleDatosOwnApiPress5}>
          <Text style={styles.buttonText}>Mexican Peso VS UK Japanese yen</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={handleDatosOwnApiPress6}>
          <Text style={styles.buttonText}>Mexican Peso VS UK Turkish lira</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container2}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.userButton]} onPress={handleUserButtonPress}>
            <Ionicons name="person" size={24} color="white" style={styles.buttonIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.tableButton]} onPress={handleTableButtonPress}>
            <Ionicons name="analytics-outline" size={24} color="white" style={styles.buttonIcon} />
          </TouchableOpacity>
        </View>
      </View>

    </ImageBackground>
  </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    container2: {
      flex: 1,
      flexDirection: "column-reverse",
      backgroundColor: "transparent",
      width: "100%",
    },
    buttonsContainer: {
      marginTop: 20,
      width: "100%",
    },
    button: {
      marginBottom: 5,
      paddingVertical: 10,
      paddingHorizontal: 30,
      borderRadius: 20,
      backgroundColor: "#1D9BF6",
    },
    button2: {
      marginBottom: 20,
      paddingVertical: 10,
      paddingHorizontal: 30,
      borderRadius: 20,
      backgroundColor: "#1D9BF6",
    },
    buttonText: {
      color: "#ffffff",
      fontSize: 16,
      textAlign: "center",
    },
    buttonContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      paddingVertical: 5,
      paddingHorizontal: 40,
      backgroundColor: "rgba(0, 0, 0, 0.4)", // Color del fondo del contenedor de botones
    },
    userButton: {
      backgroundColor: "#1D9BF6",
      marginTop: 10,
    },
    tableButton: {
      backgroundColor: "#29313b",
      marginTop: 10,
    },
    buttonIcon: {
      fontSize: 30,
      marginRight: 10,
    },
    backgroundImage: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      alignItems: "center",
    },
  });
  
export default HomeUser;
