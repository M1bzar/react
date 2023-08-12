import React from "react";
import { StyleSheet, View } from "react-native";
import { WebView } from 'react-native-webview';

const BancoAzteca = () => {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://www.banorte.com/wps/portal/ixe/Home/indicadores/tipo-de-cambio' }}
        style={{ flex: 1 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BancoAzteca;
