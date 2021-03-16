import React, { useState, Component } from 'react';
import { View } from 'react-native';
import styles from './styles';

import Title from './components/title/index';

import Text from './components/text/index';
import TextInput from './components/textInput/index';
import Button from './components/button/index';

import md5 from 'md5';

const App = () => {
  let app = {
    name: 'Crip/App',
    author: '@raphaellima',
  };

  let [text, setText] = useState('');

  const verify = () => {
    if (text == '' || text == null) {
      return app.author;
    } else {
      return md5(text);
    }
  };

  return (
    <View style={styles.view}>
      <Title value={app.name} />
      <View style={styles.container}>
        <TextInput
          placeholder="DIGITE ALGUMA SENHA"
          onChangeText={(text) => setText(text)}
        />
      </View>
      <Text value={verify()} />
    </View>
  );
};

export default App;
