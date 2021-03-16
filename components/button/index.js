import React from "react";
import {Button} from "react-native";

import styles from "./styles";

const onPress = () => {
  alert("Hello");
}

const Index = (props) => {

  return(
    <>
      <Button
        onPress={onPress}
        style={styles.button}
        title={props.title}
      />
    </>
  )
}

export default Index;