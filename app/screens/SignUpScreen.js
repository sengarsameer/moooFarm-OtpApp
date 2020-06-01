import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, Button, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Total_Width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    headerText: {
        color: '#262626',
        marginVertical: 10,
        fontSize: 20,
        fontWeight: "bold"
    },
    info: {
        color: '#262626',
    },
    divider: {
        width: 50,
        height: 7,
        backgroundColor: "#298b2f",
        marginVertical: 15
    },
    button: {
        width: '80%',
        height: 45,
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
        marginBottom: 10
    },
    buttonGradient: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
    },
    textInputContainer: {
        width: "80%",
        height: 50,
        flexDirection: "row",
        alignItems: 'center',
        marginVertical: 20,
    },
    textInput: {
        flex: 1,
        height: 40,
        borderStyle: 'dotted',
        borderBottomWidth: 1,
        fontSize: 18,
        marginHorizontal: 10,
        borderRadius: 1,
    },
    imageOverlay: {
        width: 70,
        height: 70,
        borderRadius: 100,
        backgroundColor: "rgba(255,255,255,0.2)",
        justifyContent: "center",
        alignItems: "center"
    },
    linearGradient: {
        height: "35%",
        width: '120%',
        justifyContent: "center",
        alignItems: "center",
        borderBottomLeftRadius: Total_Width,
        borderBottomRightRadius: Total_Width,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
    }
});



const SignUp = (props) => {
    const [isFocus, setFocus] = useState(false);
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#298b2f', '#a7e381']}
                style={styles.linearGradient}
                start={[0.5, 0.9]}
                end={[0.1, 0]}
            >
                <View style={styles.imageOverlay}>
                    <Image source={require('./../assets/smartphone.png')} resizeMode="contain"
                        style={{ width: 30, height: 30 }} />
                </View>
            </LinearGradient>
            <Text style={styles.headerText}>Phone Number Verification</Text>
            <Text style={styles.info}>Please enter your mobile number to</Text>
            <Text style={styles.info}>receive One Time Password.</Text>
            <View style={styles.divider} />
            <View style={styles.textInputContainer}>
                <Text style={{ color: "#262626", fontSize: 18 }}>+91</Text>
                <TextInput
                    style={[styles.textInput, { borderBottomColor: isFocus ? 'pink' : "#262626" }]}
                    keyboardType='phone-pad'
                    onFocus={() => { setFocus(true) }}
                    onBlur={() => { setFocus(false) }} />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => { props.navigation.navigate('Otp') }}>
                <LinearGradient
                    colors={['#7bb058', '#298b2f']}
                    style={[styles.buttonGradient, {
                        height: "100%",
                        width: '100%',
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 50
                    }]}
                    start={[0.7, 0.2]}
                    end={[0.2, 0.6]}
                >
                    <Text style={{ color: "white" }}>SEND OTP</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
}

export default SignUp;