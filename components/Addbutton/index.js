import React from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import styles from './styles';

const AddButton = () => {
    return(
      <View style={styles.container}>
        
        <Pressable
          style={styles.button}
          onPress={() => {
            console.warn("Add to cart was pressed");
          }}>

            <Text style={styles.text}>Add to cart</Text>

        </Pressable>
      
      
      </View>
    );
}

export default AddButton;