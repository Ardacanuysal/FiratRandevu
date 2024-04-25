import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

const windowWidth = Dimensions.get('window').width;

const AcademicAppointment = () => {
  return (
    <View style={styles.container}>
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
      <ScrollView style={styles.scrollView}>
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
              <View style={styles.btnDownld}>
                <Text stlye={styles.txtDownld}>Ofis Saatlerini indir</Text>
              </View>
            </View>
          </View>
        </View>
        <App />
      </ScrollView>
      <View style={styles.randevuAl}>
        <View style={styles.btnRandevuAl}>
          <Text style={styles.txtRandevuAl}>RANDEVU AL</Text>
        </View>
      </View>
    </View>
  );
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }
  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }
  render() {
    const {selectedStartDate} = this.state;
    const startDate = selectedStartDate
      ? selectedStartDate.toString(selectedStartDate)
      : '';
    return (
      <View style={styles.calendarContainer}>
        <CalendarPicker onDateChange={this.onDateChange} />
        <Text>SELECTED DATE:{startDate}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  txtRandevuAl: {color: '#fff'},
  btnRandevuAl: {
    width: windowWidth * 0.8,
    height: windowWidth * 0.1,
    justifyContent: 'center',
    borderRadius: windowWidth * 0.2,
    alignSelf: 'center',
    backgroundColor: '#78113E',
    flexDirection: 'row',
    alignItems: 'center',
  },
  randevuAl: {
    width: windowWidth * 1,
    height: windowWidth * 0.2,
  },
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  calendarContainer: {
    flex: 1,
    alignSelf: 'flex-start',
    flexDirection: 'column',
  },
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
    marginLeft: windowWidth * 0.04,
    marginTop: windowWidth * 0.02,
    width: windowWidth * 0.55,
    height: windowWidth * 0.1,
  },
  btnDownld: {
    backgroundColor: '#78113E',
    width: windowWidth * 0.5,
    height: windowWidth * 0.08,
    borderRadius: windowWidth * 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: windowWidth * 0.02,
    flexDirection: 'row',
  },
  txtDownld: {
    fontSize: windowWidth * 0.05,
    color: '#fff',
  },
});

export default AcademicAppointment;
