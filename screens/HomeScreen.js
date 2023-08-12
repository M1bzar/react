import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate("HomeUser");
  };

  return (
    <View style={styles.container}>
      {/* Imagen de fondo */}
      <ImageBackground source={require("../img/images.jpg")} style={styles.backgroundImage}>
        {/* Contenido de la pantalla */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
          <Text style={styles.buttonText}>Iniciar 📈 !! </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

export default HomeScreen;
