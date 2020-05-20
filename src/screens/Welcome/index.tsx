import React, { FC } from 'react';
import {Image, Text,View, Dimensions } from 'react-native';
import {globalStyles} from '../../styles/globalStyle';

interface IWelcomeProps {
    myProps: string;
}

const Welcome: FC<IWelcomeProps> = props => {
    
    return (

        <View style={globalStyles.container}>

            <Image style={{width:200, height:200, marginLeft:10}} source={require('../../assets/KR-VEC-LOGO.png')}/>
            
            <Text  style={{fontSize:20,flex: 1, flexDirection: 'column',}}>

                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore {"\n"}
                magna aliqua. Ut enim ad{"\n"}
                minim veniam, quis nostrud{"\n"} 
                exercitation ullamco laboris {"\n"}nisi 
                ut aliquip ex ea commodo{"\n"}consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            
            </Text>
            
            <View style={{position:'absolute',alignItems:'flex-end',width:Dimensions.get('window').width,marginTop:310}}>
                
                <Image style={{width:100, height:100}} source={require('../../assets/KR-VEC-LOGO.png')}/>

            </View>
        
        </View>
    );
};

export default Welcome;