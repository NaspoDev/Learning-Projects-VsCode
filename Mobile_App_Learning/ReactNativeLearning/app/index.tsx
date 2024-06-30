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
      ></Button>
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

      {/* The alert() function: displays a default alert popup. */}
      <Button title="Try alerts!" onPress={() => alert("This is an alert!")} />
    </SafeAreaView>
  );
}

// We can define our styles like so, and apply them as needed.
const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: "50%",
    backgroundColor: "lightblue",
    // SafeAreaView has troubles on android, so this is the workaround.
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  image: {
    width: "80%",
    height: "50%",
  },
});
