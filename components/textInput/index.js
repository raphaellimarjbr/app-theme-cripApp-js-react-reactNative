import React from 'react';
import { TextInput } from 'react-native';

import styles from './styles';

const Index = (props) => { 
  return (
    <>
      <TextInput 
        style={styles.textInput}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
      />
    </>
  );
};

export default Index;
