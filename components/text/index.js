import React from 'react';
import { Text } from 'react-native';

import styles from "./styles";

const Index = (props) => {
  return (
    <>
      <Text style={styles.text} >{props.value}</Text>
    </>
  );
};

export default Index;
