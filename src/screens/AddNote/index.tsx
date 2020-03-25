import React, { FC } from 'react';
import {StyleSheet,Button,View,Text} from 'react-native';
import {Formik} from 'formik';
import { TextInput } from 'react-native-gesture-handler';

export default function ReviewForm() {
    
    return(
        <View>
            <Formik initialValues={{title:'',body:''}}
            onSubmit={(values)=>{
            console.log(values);
            }}
            >
                {(props)=>(
                    <View>
                        <TextInput
                            placeholder="reviewtitle"
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                        />
                        <TextInput
                            placeholder="body"
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                        />
                        <Button title='submit' color='maroon' onPress={props.handleSubmit}/>
                    </View>
                )}
            </Formik>
        </View>
    )    
}