import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

const App = () => {
  const onPress = () => {
    alert("press btn");
  };
  return (
    <View style={styles.app}>
      <View style={styles.header}>
        <TouchableOpacity
          accessible={true}
          accessibilityHint="Navigates to the previous screen"
          accessibilityLabel="Tap me!"
          onPress={onPress}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Press me!</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  },
  logo: {
    height: 80
  },
  header: {
    padding: 20
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  text: {
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  link: {
    color: "#1B95E0"
  },
  code: {
    fontFamily: "monospace, monospace"
  }
});

export default App;
