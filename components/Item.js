import { Image, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import cruz from '../assets/cruz.svg';
import { useState } from "react";

const Item = (id, value, deleteFunction, completedFunction) => {
    const [itemState, setItemState] = useState(value);
    const [ModalState, setModalState] = useState(itemState);
    const [modalView, setView] = useState(false);

    const handleModalInput = (text) => {
        setModalState(text)
    };

    return (
        <View>
            <Text> {itemState} </Text>
            <Pressable onPress={() => { deleteFunction }}>
                <Text> Borrar </Text>
            </Pressable>
            <Pressable onPress={() => { completedFunction }}>
                <Text> Marcar Como Completado</Text>
            </Pressable>
            <Pressable onPress={() => { setView(true) }}>
                <Text>Modificar</Text>
            </Pressable>

            <Modal
                animationType="fade"
                onDismiss={() => {
                    setItemState(ModalState)
                }}
                visible={modalView}>
                <View
                    style={styles.modalFath}>
                    <View
                        style={styles.modalHeader}>
                        <TouchableOpacity
                            onPress={() => { setView(false) }}>
                            <Image
                                source={cruz}
                                style={styles.closeIcon}
                            />
                        </TouchableOpacity>

                    </View>
                    <View
                        style={styles.modalChild}>
                        <Text>Modifique aquí su item de lista</Text>
                        <TextInput
                            style={styles.modalInput}
                            onChangeText={handleModalInput}
                            value={ModalState}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    modalFath: {
        flex: 1,
        backgroundColor: 'rgba(1,1,1,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalChild: {
        height: '30%',
        width: '90%',
        backgroundColor: '#FFF'
    },
    modalInput: {
        color: 'black',
    },
    modalHeader: {
        height: 45,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 10
    },
    closeIcon: {
        width: 30,
        height: 30,
    }
});

export default Item;