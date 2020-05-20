import { StyleSheet, StatusBar, StatusBarIOS } from 'react-native';
import {Dimensions} from 'react-native';
import Constants from "expo-constants";
export const globalStyles = StyleSheet.create({
  container:{
    backgroundColor:"#FFFFFF",
    paddingTop: Constants.statusBarHeight,
    marginBottom:Dimensions.get('screen').height-Dimensions.get('window').height,
    height:Dimensions.get('screen').height
  },

  roundImage:{
    width:100, 
    height:100,
    borderRadius:50
  },

  roundButton:{
    marginRight:10,
    padding:15,
    width:70,
    height:70,
    alignItems:'center',
    backgroundColor:'rgba(0,150,245,1)',
    borderRadius:50,
  },
  item:{
    marginTop:3,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    fontSize:20,
    textAlign:"center"
  },
  formInput:{
    textAlign: "center",
    borderWidth: 1,
    marginTop:10,
    fontSize:30,
    marginLeft:30,
    marginRight:30,
    height:40,
    borderRadius:10,
  },
  formButton:{
    marginRight:70,
    marginLeft:70,
    marginTop:30,
    padding:10,
    alignItems:'center',
    backgroundColor:'rgba(0,150,245,1)',
    borderRadius:10,
  }
});