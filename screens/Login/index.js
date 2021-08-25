import React from "react";
import {View, FlatList, Dimensions, Text, Image} from "react-native";
import styles from "./styles";
import { StatusBar } from 'expo-status-bar';

import { Formik } from "formik";


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
                    <View style={{width: "90%"}}>


                    </View>
                )}
            </Formik>
        
        
        
        </View>
        
    );
};

export default Login;
