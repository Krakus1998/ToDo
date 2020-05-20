import React, { FC, useState } from 'react';
import { Text,View,Dimensions, TouchableOpacity, Modal,FlatList} from 'react-native';
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import AddPage from '../AddNote';
import TodoItem from '../../components/todoItem';
import ReviewForm from '../AddNote';
import {globalStyles} from '../../styles/globalStyle';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { setNestedObjectValues } from 'formik';



interface IListProps {
    myProps: string;
}
const Tab = createBottomTabNavigator();

const List: FC<IListProps> = props => {
    const [modalOpen,SetModalOpen]=useState(false);

    const [todos, setTodos] = useState([
        { title: 'Zrobić przelew',body: 'przelew za zakupy', key: '1' },

      ]);
    const addNote = (note) => {
        note.key = Math.random().toString();
        setTodos((curNotes)=>{
            return [note, ...curNotes];
        });
        SetModalOpen(false);
    }
      const pressHandler = (key) => {
        setTodos(prevTodos => {
          return prevTodos.filter(todo => todo.key != key);
        });
      };
    return (
        <View style={globalStyles.container}>
            <View >
                <View >
                    {/* add todo form */}
                    <View>
                    <FlatList
                        data={todos}
                        renderItem={({ item }) => (
                        <TodoItem item={item} pressHandler={pressHandler} />
                        )}
                    />
                    </View>
                </View>
                </View>

            <View style={{alignItems: 'flex-end', bottom:120,width:Dimensions.get('window').width, position:"absolute"}}>
                <Modal visible={modalOpen} animationType='slide'>
                    <View style={globalStyles.container}>
                    <TouchableOpacity style={{marginLeft:10}} onPress={()=> SetModalOpen(false)}>
                        <Icon
                            name="chevron-left"
                            size={30}
                        >
                        <Text>Wróć</Text>
                        </Icon>
                        </TouchableOpacity>
                        <AddPage addNote={addNote}></AddPage>

                    </View>
                </Modal>
                <TouchableOpacity onPress={()=> SetModalOpen(true)}>
                    <View style={globalStyles.roundButton}>
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