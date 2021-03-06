import React from "react";
import {View, Text, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform} from "react-native";
import styles from "./styles";
import { StatusBar } from 'expo-status-bar';

import { Formik } from "formik";
import * as yup from 'yup';


const reviewSchema= yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().min(5),
})


const Login = ({navigation}) => {
    return(
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <View style={styles.outterContainer}>
            
            <View style={styles.logoContainer}>
                <Image source={require("../../assets/otherPics/logoNew.png")} style={styles.logo} />
            </View>
            
            <View style={styles.titles}>
                <Text style={styles.title}>Account Login</Text>
            </View>

            <Formik
                initialValues={{email: '', password: ''}}
                validationSchema={reviewSchema}
                onSubmit={(values, actions) => {
                    console.log(values);
                    actions.resetForm();
                    navigation.navigate('Foods');
                }}
            >
                {({handleChange, handleBlur, handleSubmit, values, ...props}) => (

                    <View style={{width: "100%", alignItems: "center"}}>
                        
                        <View style={{width: "80%", paddingTop: "10%"}}>
                            
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
                            <Text style={styles.errorText}>{props.touched.email && props.errors.email}</Text>


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
                            <Text style={styles.errorText}>{props.touched.password && props.errors.password}</Text>

                            <View style={{top: "15%"}}>
                            <TouchableOpacity 
                                style={{backgroundColor: "white", height: 40, borderRadius: 25, justifyContent: "center", alignItems: "center"}}
                                onPress={handleSubmit}
                            >
                                <Text style={{color: "black", fontSize: 20, fontWeight: "700", fontStyle: "italic"}}>SUBMIT</Text>
                            </TouchableOpacity>
                            </View>

                        </View>

                    </View>
                )}
            </Formik>   

            <View style={{height: 1, backgroundColor: "white", width: "80%", top: "10%"}}/>

            <View style={styles.linkContainer}>
                    <Text style={styles.linkQuestion}>Dont have a account? </Text>
                    
                    <TouchableOpacity onPress={() => {navigation.navigate('Create')}}>
                    <Text style={styles.linkText}>Signup here!</Text>
                    </TouchableOpacity>
            </View>

        </View>                    
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>

        
    );
};

export default Login;
