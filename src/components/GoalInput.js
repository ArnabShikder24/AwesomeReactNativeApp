import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native";

const GoalInput = ({goalHandler, isOpen, setIsOpen}) => {
    const [text, setText] = useState('');
  return (
    <Modal visible={isOpen} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.images} source={require('../assets/goal.png')}/>
          <TextInput style={styles.textInput} placeholder='Your Goal!'  placeholderTextColor="#ccc" onChangeText={e => setText(e)} value={text} />
        <View style={styles.buttonsGroup}>
          <View style={styles.button}>
              <Button title='Add Goal' onPress={() => {
                  goalHandler(text)
                  setText('')
                  setIsOpen(false)
              }} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color='#ef233c' onPress={() => setIsOpen(false)}/>
          </View>
          </View>
          </View>
      </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#303952'
  },
  images: {
    width: 150,
    height: 150
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#fff',
    width: '85%',
    padding: 8,
    marginVertical: 14,
    borderRadius: 6,
    color: 'white'
  },
  buttonsGroup: {
    flexDirection: 'row'
  },
  button: {
    width: '40%',
    marginHorizontal: 8
  }
});