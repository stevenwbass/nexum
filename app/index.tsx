import { Alert, Button, GestureResponderEvent, Text, View } from "react-native";

export default function Index() {
  function onYes(event: GestureResponderEvent): void {
    Alert.alert("Incorrect!", "There are no games!");
  }

  function onNo(event: GestureResponderEvent): void {
    Alert.alert("Correct", "There are no games.");
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Would you like to play a game?</Text>
      <Button title="Yes" onPress={onYes} />
      <Button title="No" onPress={onNo} />
    </View>
  );
}
