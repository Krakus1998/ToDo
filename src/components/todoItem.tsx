import React from 'react'
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

export default function TodoItem({ pressHandler, item }) {
  return (
    <TouchableOpacity style={styles.item} onPress={() => pressHandler(item.key)}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.body}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },
  title:{
    fontSize:20,
    textAlign:"center",
    fontWeight:"bold",
  }
});