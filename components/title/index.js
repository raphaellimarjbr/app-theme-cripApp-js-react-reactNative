import React from "react";
import {Text} from "react-native";

import styles from "./styles";

const index = (props) => {
  return(
    <>
      <Text style={styles.title} >{props.value}</Text>
    </>
  )
}

export default index;