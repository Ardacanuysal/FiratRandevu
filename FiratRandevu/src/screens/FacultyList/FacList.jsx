import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Dimensions,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const rectangleWidth = windowWidth * 0.9;

const FacList = () => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <View style={styles.FiratUniversity}>
          <View style={styles.FiratUniversity}>
            <Image
              style={styles.logo}
              source={require('../../assets/images/Logo.png')}
            />
            <Text style={styles.universityName}>Fırat Üniversitesi</Text>
          </View>
        </View>
      </View>
      <ScrollView>
        <View style={styles.FacNameCard}>
          <Text style={styles.FacNametxt}>TEKNOLOJİ FAKÜLTESİ</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default FacList;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#78113E',
    width: '100%',
    height: windowWidth * 0.3,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  FiratUniversity: {
    alignItems: 'center',
    marginTop: windowWidth * 0.08,
    flexDirection: 'row',
  },
  logo: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
  },
  universityName: {
    fontSize: windowWidth * 0.05,
    color: '#ffff',
    marginLeft: 5,
  },
  FacNameCard: {
    marginTop: windowWidth * 0.03,
    width: windowWidth * 0.9,
    height: windowWidth * 0.25,
    backgroundColor: '#78113E',
    alignSelf: 'center',
    borderRadius: windowWidth * 0.02,
    alignItems: 'center',
    justifyContent: 'center',
  },
  FacNametxt: {
    color: '#ffff',
    fontWeight:'600',
    fontSize:windowWidth*0.06,
  },
});
