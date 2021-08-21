import React from 'react';
import {Text, View, Image } from 'react-native';
import styles from './styles';
import AddButton from '../Addbutton';

const FoodItem = (props) => {

  const {name, price, image, desc} = props.food;

    return(
        <View style={styles.foodContainer}>
      
        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subTitle}>{price}</Text>
        </View>

        <Image
          source={image}
          style={styles.image}
          />

        <View style={styles.description}>
          <Text style={styles.dogDescription}>{desc}</Text>
        </View>

        <View style={styles.buttonContainer}>
        <AddButton/>
        </View>

      </View>
    );
}

export default FoodItem;