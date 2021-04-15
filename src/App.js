import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";

function MyComponent(props) {
  return (
    <View {...props} style={{ flex: 1 }}>
      <Text>My Component</Text>
    </View>
  );
}

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <TouchableOpacity
          underlayColor="#DDDDDD"
          onPress={() => alert("Pressed!")}
        >
          <MyComponent />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  }
});

export default App;
