import { NumericLiteral } from "@babel/types";
import React, { useState } from "react";
import { Button, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

function inputBoxColor(charLeft: number) {
  //console.log(charLeft)
  if (charLeft > 10) {
    return "#008000"
  } else if (charLeft > 0) {
    return "#FFA400"
  } else {
    //console.log("inside neg")
    return "#DE1A1A"
  }
}

function inputBoxBackgroundColor(charLeft: number) {
  //console.log(charLeft)
  if (charLeft > 10) {
    return "#d6ffd6"
  } else if (charLeft > 0) {
    return "#FFF1D6"
  } else {
    //console.log("inside neg")
    return "#FBDADA"
  }
}

const TweetBox = () => {
  const [cnt, setCount] = useState(0)
  const [str, setString] = useState("")
  const LengthLimit = 20
  return (<SafeAreaView style={styles(LengthLimit, str).background}>
    <View style={styles(LengthLimit, str).inputViewStyle}>
      <TextInput
        style={styles(LengthLimit, str).input}
        onChangeText={setString}
        value={str}
        textAlignVertical={"top"}
        multiline={true}
      />
    </View>
    <TouchableOpacity style={styles(LengthLimit, str).button} >
      <Button title={(LengthLimit - str.length).toString()} disabled={LengthLimit - str.length <= 0 ? true : false} color={LengthLimit - str.length > 0 ? "#23496C" : "808080"} />
    </TouchableOpacity>
  </SafeAreaView>
  );
}
//whenever u want to pass variables to function which doesn't take any
// wrap that function inside a function and pass those variables
const styles = (LengthLimit: number, str: string) => StyleSheet.create({
  input: {
    height: 200,
    margin: 0,
    borderWidth: 1,
    padding: 10,
    color: "#000000",
    wrap: true,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0
  },
  background: {
    backgroundColor: "#FFFFFF",
    flex: 1
    //color: "#FFFFFF"
  },
  button: {
    margin: 17,
    width: 356,
    //height: 400
  },
  inputViewStyle: {
    borderRadius: 20,
    borderColor: inputBoxColor(LengthLimit - str.length),
    width: 370,
    borderWidth: 5,
    padding: 0,
    margin: 10,
    backgroundColor: inputBoxBackgroundColor(LengthLimit - str.length)
  }
});
export default TweetBox;