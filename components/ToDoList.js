import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Item from "./Item";

const ToDoList = (arrayItmes) => {
    const [completedTasks, setCompletedTasks] = useState([]);


    const deleteFunction = () => {
        //esta función debería eleminar el task existente
        //se resuelve facil con un filter

    }

    const completedFunction = () => {
        // esta función debería tomar el item y pasarlo a estado completo
        // para lograr esto podríamos tratar los tasks como objetos con tres propiedes = id(identificador que vuelva único al task), value(que es la info del task) y estado del mismo

    }

    const createtItem = () => {
        //esta función se llama cuando se desea crear un task

    }

    return (
        <View style={styles.fatherContainer}>
            <View style={styles.toDoFath}>

                <Text> To Do List : </Text>
                {arrayItmes.length > 0
                    ? arrayItmes.map(item => <Item value={item.value} deleteFunction={deleteFunction} completedFunction={completedFunction} />)
                    : createFirstItem()
                }
            </View>
            <View style={styles.completedFath}>
                {completedTasks.length > 0
                    ? completedTasks.map(e => )
                    : createtItem()
                }


            </View>




        </View>
    );
}

const styles = StyleSheet.create({
    fatherContainer: {
        flexDirection: 'row',


    },
    toDoFath: {

    },
    completedFath: {

    }

});
export default ToDoList

