import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Button,
  Image,
  TouchableHighlight,
  Alert,
} from "react-native";

export default function Index() {
  const [imageHidden, setImageHidden] = useState(true);

  function handleButtonClick() {
    setImageHidden(!imageHidden);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello React Native!</Text>
      {/* Number of lines to 1 with make text end with "..." instead of wrapping to the next line. */}
      <Text numberOfLines={1}>
        This is some really really long text. I want to make this even longer
        than it already is.
      </Text>
      {/* This button will reveal the image upon press. */}
      <Button
        title={imageHidden ? "Reveal Image" : "Hide Image"}
        onPress={handleButtonClick}
      />
      <Image
        source={require("../assets/images/landscape.jpg")}
        style={styles.image}
        blurRadius={imageHidden ? 20 : 0} // blur set to 20 if its supposed to be hidden, otherwise 0.
      />

      {/* There are 3 kinds of Touchables in React Native. TouchableHighlight is one.
        Whenever the user presses on a touchable highligh, it gives feedback to the touch by highlighting a little. */}
      <TouchableHighlight onPress={() => "TouchableHighlight pressed"}>
        <View style={{ backgroundColor: "#22BE56" }}>
          <Text style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
            I am a TouchableHighlight. I give a small highlight feedback when
            being pressed.
          </Text>
        </View>
      </TouchableHighlight>

      {/* Alerts! Using the alert API to send native alerts */}
      {/* Multiple style objects can be applied by passing them as a list. (Last one takes precedent) */}
      <View style={[styles.alertsContainer, styles.borderPurple]}>
        <Text>Alerts:</Text>
        {/* Basic Alert */}
        <Button
          title="Try a basic alert"
          onPress={() => alert("This is an alert!")}
        />
        {/* Customized alert with feedback */}
        <Button
          title="Customized alert with feedback"
          onPress={() =>
            // Using the Alert object form react-native.
            Alert.alert("My Alert Title", "My alert message", [
              // These are alert buttons
              { text: "Yes", onPress: () => console.log("Yes option pressed") },
              { text: "No", onPress: () => console.log("No option pressed") },
            ])
          }
        />
        {/* Prompt alert (text input) IOS ONLY */}
        <Button
          title="Prompt alert (text input) IOS ONLY"
          onPress={() =>
            Alert.prompt("Enter something", "Enter a message or sum", (input) =>
              console.log(input)
            )
          }
        />
      </View>
    </SafeAreaView>
  );
}

// We can define our styles like so, and apply them as needed.
// Style property names are inspired by CSS, but they are not CSS.
const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: "auto",
    backgroundColor: "lightblue",
    // SafeAreaView has troubles on android, so this is the workaround.
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  image: {
    width: "80%",
    height: 200,
  },
  alertsContainer: {
    marginTop: 20,
    gap: 10,
    height: "auto",
    paddingVertical: 20,
  },
  borderPurple: {
    borderWidth: 2,
    borderColor: "#9C188C",
  },
});
