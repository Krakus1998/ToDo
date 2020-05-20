import React, { FC } from 'react';
import {Text,View, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import { TextInput } from 'react-native-gesture-handler';
import {globalStyles} from '../../styles/globalStyle';

export default function ReviewForm({addNote}) {
    
    return(
        <View style={globalStyles.container}>
            <Formik 
            initialValues={{title:'',body:''}}
            onSubmit={(values)=>{
            addNote(values);
            console.log(values);
            }}
            >
                {(props)=>(
                    <View>
                        <TextInput
                            style={globalStyles.formInput}
                            placeholder="Tytuł"
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                        />
                        <TextInput
                            style={globalStyles.formInput}
                            placeholder="Treść"
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                        />
                        <TouchableOpacity onPress={props.handleSubmit}>
                            <View style={globalStyles.formButton}>
                                <Text>Dodaj</Text>
                            </View>
                        </TouchableOpacity>
                        {/* <Button title="submit" style={globalStyles.formButton} onPress={props.handleSubmit}/> */}
                    </View>
                )}
            </Formik>
        </View>
    )    
}