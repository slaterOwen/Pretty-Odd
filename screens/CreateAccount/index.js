import React from "react";
import {View, Text, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform} from "react-native";
import styles from "./styles";

import { Formik } from "formik";
import * as yup from 'yup';


const reviewSchema= yup.object({    
    email: yup.string().required('Email Address is a required field').email('Please enter a valid email'),
    password: yup.string().required('Password is a required field').min(5, 'Password must at least be 5 characters'),
    name: yup.string().required('Name is a required field'),
    number: yup.string().required('Phone Number is a required field').min(10, 'Phone Number must be 10 characters').max(10, 'Phone Number must be 10 characters'),
})


const CreateAccount = () => {
    return(
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <View style={styles.outterContainer}>
            
            <View style={styles.logoContainer}>
                <Image source={require("../../assets/otherPics/logoNew.png")} style={styles.logo} />
            </View>
            
            <View style={styles.titles}>
                <Text style={styles.title}>Create Account</Text>
            </View>

            <Formik
                initialValues={{email: '', password: '', name: '', number: ''}}
                validationSchema={reviewSchema}
                onSubmit={(values, actions) => {
                    console.log(values);
                    actions.resetForm();
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


                            <Text style={{color: "white", textAlign: "left"}}>Password</Text>                       
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

                            <Text style={{color: "white", textAlign: "left"}}>Full Name</Text>                       
                            <TextInput style={styles.inputField}
                            textAlign={"left"}
                            placeholder="Andy Johnson"
                            placeholderTextColor="grey"
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur('name')}
                            value={values.name}
                            autoCapitalize={"words"}
                            />
                            <Text style={styles.errorText}>{props.touched.name && props.errors.name}</Text>

                            <Text style={{color: "white", textAlign: "left"}}>Phone Number</Text>                       
                            <TextInput style={styles.inputField}
                            textAlign={"left"}
                            placeholder="1234567890"
                            placeholderTextColor="grey"
                            onChangeText={handleChange('number')}
                            onBlur={handleBlur('number')}
                            value={values.number}
                            keyboardType={'number-pad'}
                            />
                            <Text style={styles.errorText}>{props.touched.number && props.errors.number}</Text>

                            <View style={{top: "10%"}}>
                            <TouchableOpacity 
                                style={{backgroundColor: "white", height: 40, borderRadius: 25, justifyContent: "center", alignItems: "center"}}
                                onPress={handleSubmit}
                            >
                                <Text style={{color: "black", fontSize: 20, fontWeight: "700", fontStyle: "italic"}}>CREATE ACCOUNT</Text>
                            </TouchableOpacity>
                            </View>

                        </View>

                    </View>
                )}
            </Formik>   
        </View>                    
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>

        
    );
};

export default CreateAccount;
