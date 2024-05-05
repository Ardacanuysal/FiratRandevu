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

export class Main extends Component {
  render() {
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
        <View style={styles.rectangleContainer}>
          <View style={[styles.rectangle, {width: rectangleWidth}]}>
            <View style={styles.infoContainer}>
              <Text style={styles.studentName}>Arda Can Uysal</Text>
              <Text style={styles.department}>Yazılım Mühendisliği</Text>
              <Text style={styles.grade}>3. Sınıf</Text>
            </View>
          </View>
          <View style={styles.facultyContainer}>
            <Text style={styles.faculty}>TENOLOJİ FAKÜLTESİ</Text>
            <Text style={styles.role}>Akademik Kadro</Text>
          </View>
        </View><ScrollView>
        <View
          style={{backgroundColor: 'gray', height: windowWidth * 0.002}}></View>
        <View>
          <View style={styles.Card}>
            <Image
              style={styles.infoTeachimg}
              source={require('../../assets/images/engin.png')}></Image>
            <View style={styles.infoTeachbox}>
              <Text style={styles.infoTeachtxt}>Bölüm Başkanı Prof. Dr.</Text>
              <Text style={styles.infoTeachName}>Engin Avci</Text>
              <Text style={styles.infoTeachMail}>
                email: enginavci@firat.edu.tr
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={styles.infoTeachIcons}
                  source={require('../../assets/icons/linkedin.png')}></Image>
                <Image
                  style={styles.infoTeachIcons}
                  source={require('../../assets/icons/medium.png')}></Image>
              </View>
            </View>
            <View style={styles.cardBtn}>
              <View style={styles.Btn}>
                <Text style={styles.btnTxt}>Randevu Al</Text>
              </View>
            </View>
          </View>
          <View style={styles.Card}>
            <Image
              style={styles.infoTeachimg}
              source={require('../../assets/images/engin.png')}></Image>
            <View style={styles.infoTeachbox}>
              <Text style={styles.infoTeachtxt}>Bölüm Başkanı Prof. Dr.</Text>
              <Text style={styles.infoTeachName}>Engin Avci</Text>
              <Text style={styles.infoTeachMail}>
                email: enginavci@firat.edu.tr
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={styles.infoTeachIcons}
                  source={require('../../assets/icons/linkedin.png')}></Image>
                <Image
                  style={styles.infoTeachIcons}
                  source={require('../../assets/icons/medium.png')}></Image>
              </View>
            </View>
            <View style={styles.cardBtn}>
              <View style={styles.Btn}>
                <Text style={styles.btnTxt}>Randevu Al</Text>
              </View>
            </View>
          </View>
          <View style={styles.Card}>
            <Image
              style={styles.infoTeachimg}
              source={require('../../assets/images/engin.png')}></Image>
            <View style={styles.infoTeachbox}>
              <Text style={styles.infoTeachtxt}>Bölüm Başkanı Prof. Dr.</Text>
              <Text style={styles.infoTeachName}>Engin Avci</Text>
              <Text style={styles.infoTeachMail}>
                email: enginavci@firat.edu.tr
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={styles.infoTeachIcons}
                  source={require('../../assets/icons/linkedin.png')}></Image>
                <Image
                  style={styles.infoTeachIcons}
                  source={require('../../assets/icons/medium.png')}></Image>
              </View>
            </View>
            <View style={styles.cardBtn}>
              <View style={styles.Btn}>
                <Text style={styles.btnTxt}>Randevu Al</Text>
              </View>
            </View>
          </View>
          <View style={styles.Card}>
            <Image
              style={styles.infoTeachimg}
              source={require('../../assets/images/engin.png')}></Image>
            <View style={styles.infoTeachbox}>
              <Text style={styles.infoTeachtxt}>Bölüm Başkanı Prof. Dr.</Text>
              <Text style={styles.infoTeachName}>Engin Avci</Text>
              <Text style={styles.infoTeachMail}>
                email: enginavci@firat.edu.tr
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={styles.infoTeachIcons}
                  source={require('../../assets/icons/linkedin.png')}></Image>
                <Image
                  style={styles.infoTeachIcons}
                  source={require('../../assets/icons/medium.png')}></Image>
              </View>
            </View>
            <View style={styles.cardBtn}>
              <View style={styles.Btn}>
                <Text style={styles.btnTxt}>Randevu Al</Text>
              </View>
            </View>
          </View>
          <View style={styles.Card}>
            <Image
              style={styles.infoTeachimg}
              source={require('../../assets/images/engin.png')}></Image>
            <View style={styles.infoTeachbox}>
              <Text style={styles.infoTeachtxt}>Bölüm Başkanı Prof. Dr.</Text>
              <Text style={styles.infoTeachName}>Engin Avci</Text>
              <Text style={styles.infoTeachMail}>
                email: enginavci@firat.edu.tr
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={styles.infoTeachIcons}
                  source={require('../../assets/icons/linkedin.png')}></Image>
                <Image
                  style={styles.infoTeachIcons}
                  source={require('../../assets/icons/medium.png')}></Image>
              </View>
            </View>
            <View style={styles.cardBtn}>
              <View style={styles.Btn}>
                <Text style={styles.btnTxt}>Randevu Al</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      </View>
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
  Card: {
    backgroundColor: '#EEEEEE',
    flexDirection: 'row',
    marginTop: windowWidth * 0.008,
    width: windowWidth * 1,
    height: windowWidth * 0.3,
  },
  infoTeachimg: {
    marginLeft: windowWidth * 0.01,
    width: windowWidth * 0.3,
    height: windowWidth * 0.3,
  },
  infoTeachbox: {
    marginTop: windowWidth * 0.02,
    paddingLeft: windowWidth * 0.02,
  },
  infoTeachtxt: {
    fontSize: windowWidth * 0.02,
    color: '#78113E',
  },
  infoTeachName: {
    fontSize: windowWidth * 0.06,
    color: '#78113E',
  },
  infoTeachMail: {
    fontWeight: '600',
    fontsize: windowWidth * 0.03,
  },
  infoTeachIcons: {
    width: windowWidth * 0.05,
    height: windowWidth * 0.05,
    marginLeft: windowWidth * 0.01,
  },
  cardBtn: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: windowWidth * 0.22,
    marginHorizontal: windowWidth * -0.2,
  },
  Btn: {
    backgroundColor: '#78113E',
    width: windowWidth * 0.3,
    height: windowWidth * 0.06,
    borderRadius: windowWidth * 1,
  },
  btnTxt: {
    paddingTop: windowWidth * 0.01,
    alignSelf: 'center',
    margin: 'center',
    alignItems: 'center',
    color: '#fff',
    fontsize: windowWidth * 0.09,
  },
});

export default Main;
