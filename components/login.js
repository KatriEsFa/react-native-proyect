import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

import { useState } from "react";

const LogIn = () => {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    const handleUserInput = (text) => setUser(text);
    const handlePassInput = (pass) => setPass(pass);

    const clgPressable = () => {
        console.log("Aprestaste Entrar")
    }
    return (
        <>
            <View>
                <TextInput
                    style={styles.userInput}
                    onChangeText={handleUserInput}
                    value={user}
                    placeholder="Usuario"
                />
                <TextInput
                    style={styles.userInput}
                    secureTextEntry={true}
                    onChangeText={handlePassInput}
                    value={pass}
                    placeholder="Contraseña"
                />
                <Pressable onPress={() => clgPressable()} disabled={user.length > 1 || pass.length > 1 ? true : false}>
                    <Text> Entrar </Text>
                </Pressable>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    userInput: {
        borderWidth: 2,
        borderColor: 'white',
        padding: 10,
        height: 40,
        margin: 12,
        color: 'white',
        //styles del input
    }
})

export default LogIn