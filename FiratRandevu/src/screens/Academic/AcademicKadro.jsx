import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Dimensions,
  StyleSheet,
  Image,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const rectangleWidth = windowWidth * 0.9;

export class Main extends Component {
  render() {
    return (
      <SafeAreaView>
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
        <View style={styles.rectangleContainer}>
          <View style={[styles.rectangle, {width: rectangleWidth}]}>
            <View style={styles.infoContainer}>
              <Text style={styles.studentName}>Arda Can Usyal</Text>
              <Text style={styles.department}>Yazılım Mühendisliği</Text>
              <Text style={styles.grade}>3. Sınıf</Text>
            </View>
          </View>
          <View style={styles.facultyContainer}>
            <Text style={styles.faculty}>TENOLOJİ FAKÜLTESİ</Text>
            <Text style={styles.role}>Akademik Kadro</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
} 

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
  rectangleContainer: {
    margin: windowWidth * 0.02,
    alignItems: 'center',
  },
  rectangle: {
    height: windowWidth * 0.3,
    backgroundColor: '#78113E',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    alignItems: 'center',
  },
  studentName: {
    fontSize: windowWidth * 0.1,
    color: '#fff',
  },
  department: {
    fontSize: windowWidth * 0.05,
    color: '#fff',
    marginTop: windowWidth * 0.02,
  },
  grade: {
    fontSize: windowWidth * 0.05,
    color: '#fff',
    marginTop: windowWidth * 0.02,
  },
  facultyContainer: {
    marginTop: windowWidth * 0.05,
    alignItems: 'center',
  },
  faculty: {
    fontWeight: '700',
    fontSize: windowWidth * 0.05,
    color: 'black',
  },
  role: {
    color: 'black',
  },
});

export default Main;
