import React from "react";
import {View, FlatList, Dimensions, Text, Image, TextInput} from "react-native";
import styles from "./styles";
import { StatusBar } from 'expo-status-bar';

import { Formik } from "formik";
import { PrivateValueStore } from "@react-navigation/native";


const Login = () => {
    return(
        <View style={styles.outterContainer}>
            
            <View style={styles.logoContainer}>
                <Image source={require("../../assets/otherPics/logoNew.png")} style={styles.logo} />
            </View>
            
            <View style={styles.titles}>
                <Text style={styles.title}>Account Login</Text>
            </View>

            <Formik
                initialValues={{email: '', password: ''}}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {({handleChange, handleBlur, handleSubmit, values}) => (
                    <View style={{width: "100%", alignItems: "center"}}>
                        
                        <View style={{width: "80%", paddingTop: 70}}>
                            
                            <Text style={{color: "white", textAlign: "left"}}>Email Address</Text>
                        
                            <TextInput style={styles.inputField}
                            textAlign={"left"}
                            placeholder="andyj@gmail.com"
                            placeholderTextColor="grey"
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            keyboardType='email-address'
                            autoCapitalize={"none"}
                            />


                            <Text style={{color: "white", textAlign: "left", paddingTop: 25}}>Password</Text>
                        
                            <TextInput style={styles.inputField}
                            textAlign={"left"}
                            placeholder="* * * * * * * *"
                            placeholderTextColor="grey"
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry={true}
                            autoCapitalize={"none"}
                            />
                        </View>

                       


                    </View>
                )}
            </Formik>
        
        
        
        </View>
        
    );
};

export default Login;
