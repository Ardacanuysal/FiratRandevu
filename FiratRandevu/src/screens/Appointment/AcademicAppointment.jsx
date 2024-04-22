import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const AcademicAppointment = () => {
  return (
    <View>
      <View style={styles.Header}>
        <View style={styles.assignsHeader}>
          <View style={styles.BackContainer}>
            <Image
              style={styles.BackIcon}
              source={require('../../assets/icons/back.png')}
            />
            <Text style={{color: 'white', alignSelf: 'center'}}>Back</Text>
          </View>
          <View style={styles.LogoContainer}>
            <Image
              style={styles.HeaderIcon}
              source={require('../../assets/images/Logo.png')}
            />
          </View>
        </View>
      </View>
      <ScrollView style={{height: windowWidth * 1}}>
        <View style={styles.Card}>
          <Image
            style={styles.img}
            source={require('../../assets/images/ibrahimtrkogl.png')}></Image>
          <View style={styles.gryCard}>
            <View style={styles.infoContain}>
              <Text style={{color: '#78113E'}}>Prof.Dr</Text>
              <Text style={{color: '#78113E', fontSize: windowWidth * 0.05}}>
                İBRAHİM TÜRKOĞLU
              </Text>
            </View>
            <View style={styles.downloadBtn}>
              <Text>dslaşaksd</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AcademicAppointment;

const styles = StyleSheet.create({
  Header: {
    backgroundColor: '#78113E',
    width: windowWidth * 1,
    height: windowWidth * 0.25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: windowWidth * 0.05,
  },
  LogoContainer: {
    width: windowWidth * 0.09,
    height: windowWidth * 0.09,
    alignSelf: 'center',
  },
  HeaderIcon: {
    width: windowWidth * 0.09,
    height: windowWidth * 0.09,
    alignSelf: 'center',
    marginLeft: windowWidth * 0.6,
  },
  BackContainer: {
    width: windowWidth * 0.09,
    height: windowWidth * 0.09,
    marginTop: windowWidth * 0,
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  BackIcon: {
    width: windowWidth * 0.035,
    height: windowWidth * 0.035,
    alignSelf: 'center',
  },
  assignsHeader: {
    flexDirection: 'row',
    marginTop: windowWidth * 0.1,
  },
  Card: {
    backgroundColor: '#78113E',
    marginTop: windowWidth * 0.03,
    marginLeft: windowWidth * 0.03,
    marginRight: windowWidth * 0.3,
    width: windowWidth * 0.94,
    height: windowWidth * 0.3,
    borderRadius: windowWidth * 0.02,
    flexDirection: 'row',
  },
  img: {
    width: windowWidth * 0.25,
    height: windowWidth * 0.25,
    marginLeft: windowWidth * 0.03,
    alignSelf: 'center',
    borderBottomStartRadius: windowWidth * 0.03,
    borderTopLeftRadius: windowWidth * 0.03,
  },
  gryCard: {
    alignSelf: 'center',
    backgroundColor: '#D9D9D9',
    width: windowWidth * 0.63,
    height: windowWidth * 0.25,
    borderEndEndRadius: windowWidth * 0.03,
    borderTopRightRadius: windowWidth * 0.03,
    borderWidth: windowWidth * 0.01,
    borderLeftWidth: windowWidth * 0,
    borderColor: '#ffff',
  },
  infoContain: {
    backgroundColor: 'red',
    marginLeft: windowWidth * 0.04,
    marginTop: windowWidth * 0.02,
    width: windowWidth * 0.55,
    height: windowWidth * 0.1,
  },
  downloadBtn: {
    backgroundcolor: '#78113E',
    width: windowWidth * 1,
    height: windowWidth * 1,
    marginLeft: windowWidth * 3,
  },
});
