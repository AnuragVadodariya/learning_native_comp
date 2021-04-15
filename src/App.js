import React from "react";
import { View, TouchableHighlight, StyleSheet, Text } from "react-native";

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
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => alert("Pressed!")}
        >
          <MyComponent />
        </TouchableHighlight>
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
