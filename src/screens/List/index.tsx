import React, { FC, useState } from 'react';
import { Text, ScrollView,View, Alert, Dimensions, TouchableOpacity, Modal} from 'react-native';
import styled from 'styled-components/native';
import Colors from '../../constans/Colors';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import AddPage from '../AddNote';
import {globalStyles} from '../../styles/globalStyle';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const ListText = styled.Text`
    margin: 50px 20px;
    font-size: 16px;
    color: ${Colors.black};
`;


interface IListProps {
    myProps: string;
}
const Tab = createBottomTabNavigator();

const List: FC<IListProps> = props => {
    const [modalOpen,SetModalOpen]=useState(false);
    return (
        <View style={globalStyles.container}>
            <ScrollView style={{height:Dimensions.get('window').height}}>
                <ListText>List {props.myProps}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                Lorem 
                </ListText>
                    
            </ScrollView>
            <View style={{alignItems: 'flex-end', marginTop:Dimensions.get('screen').height-130,width:Dimensions.get('window').width, position:"absolute"}}>
                <Modal visible={modalOpen} animationType='slide'>
                    <View>
                    <TouchableOpacity onPress={()=> SetModalOpen(false)}>
                        <Icon
                            name="chevron-left"
                            size={40}
                            style={{marginTop:10}}
                        />
                        </TouchableOpacity>
                        <AddPage></AddPage>

                    </View>
                </Modal>
                <TouchableOpacity onPress={()=> SetModalOpen(true)}>
                    <View style={{marginRight:10,
                            padding:15,
                            width:70,
                            height:70,
                            alignItems:'center',
                            backgroundColor:'rgba(0,150,245,1)',
                            borderRadius:50,}}>
                        <Icon
                        name="plus"
                        size={40}
                        
                        />
                    </View>
                </TouchableOpacity>
                
            </View>
        </View>
    );
};

export default List;