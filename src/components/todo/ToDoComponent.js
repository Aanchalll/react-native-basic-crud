
import { useState } from 'react';
import { Button, FlatList, Text, TextInput, View } from 'react-native';

export default function ToDoComponent({ styles }) {
    const [text, setText] = useState('')
    const [error, setError] = useState('')
    const [list, setList] = useState([])

    function Add(val) {
        if (val) {
            setList((prev) => {
                const newList = [...prev, val]
                return newList;
            })
            setText('')
            setError('')
        }
        else {
            setError('Please add a task to add.')
        }
    }

    return (
        <View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input1}
                    placeholder="Start Typing"
                    onChangeText={newText => setText(newText)}
                    defaultValue={text}
                />
                <Button title='Add'
                    onPress={() => { Add(text); }}
                    style={styles.inputButton}
                />
            </View>

            {error ? <Text style={styles.error}>{error}</Text> : ''}

            {list && list?.length > 0 && <Text style={styles.taskHeading}>Task List:</Text>}

            <FlatList
                data={list}
                renderItem={({ item, index }) => <Text style={styles.item}>{(index + 1) + '. ' + item}</Text>}
            />

        </View>
    );
}

