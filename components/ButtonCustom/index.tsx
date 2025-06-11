import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonCustomProps {
  text: string;
  color: string;
  onPress: () => void;
}

const ButtonCustom: React.FC<ButtonCustomProps> = ({ text, color, onPress }) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ButtonCustom;
