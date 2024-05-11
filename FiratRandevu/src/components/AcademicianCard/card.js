import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {person} from '../../assets/images';
const Card = props => {
  const {
    personImage = person,
    title = 'Prof. Dr.',
    name = 'Engin Avci',
    email = 'email: enginavci@firat.edu.tr',
  } = props;
  return (
    <View style={styles.Card}>
      <Image style={styles.infoTeachimg} source={personImage}></Image>
      <View style={styles.infoTeachbox}>
        <Text style={styles.infoTeachtxt}>{title}</Text>
        <Text style={styles.infoTeachName}>{name}</Text>
        <Text style={styles.infoTeachMail}>{email}</Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Image
              style={styles.infoTeachIcons}
              source={require('../../assets/icons/linkedin.png')}></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.infoTeachIcons}
              source={require('../../assets/icons/medium.png')}></Image>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.cardBtn}>
        <View style={styles.Btn}>
          <Text style={styles.btnTxt}>Randevu Al</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;
