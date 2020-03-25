import { StyleSheet, StatusBar, StatusBarIOS } from 'react-native';
import {Dimensions} from 'react-native';
export const globalStyles = StyleSheet.create({
  container:{
    backgroundColor:"#FFCC10", 
    height:Dimensions.get('screen').height
  }
});