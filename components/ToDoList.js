import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
improt { useState }

import Item from "./Item";

const ToDoList = (arrayItmes) => {
    const

    const deleteFunction = () => {

    }

    const completedFunction = () => {

    }

    const createFirstItem = () => {

    }

    return (
        <View style={styles.fatherContainer}>
            <View style={styles.toDoFath}>

                <Text> To Do List : </Text>
                {arrayItmes.length > 0
                    ? arrayItmes.map(item => <Item deleteFunction={deleteFunction} completedFunction={completedFunction} />)
                    : createFirstItem()
                }
            </View>
            <View style={styles.completedFath}>


            </View>




        </View>
    );
}

const styles = StyleSheet.create({
    fatherContainer: {

    },
    toDoFath: {

    },
    completedFath: {

    }

});
export default ToDoList

