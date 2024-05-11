import React, {useState} from 'react';
import {Component} from 'react';
import {RndBtn, CalendarModal} from '../../components';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';

import CalendarPicker from 'react-native-calendar-picker';
import Modalcontext from '../../components/modalContext/Modalcontext';

const windowWidth = Dimensions.get('window').width;

const AcademicAppointment = props => {
  const [visible, setVisible] = useState(false);
  const {navigation} = props;
  const [selectedStartDate, setSelectedStartDate] = useState(new Date());
  const modalfunc = () => {
    setVisible(!visible);
  };
  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <View style={styles.assignsHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.BackContainer}>
              <Image
                style={styles.BackIcon}
                source={require('../../assets/icons/back.png')}
              />
              <Text style={{color: 'white', alignSelf: 'center'}}>Back</Text>
            </View>
          </TouchableOpacity>
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
                <Text style={styles.txtDownld}>Ofis Saatlerini indir</Text>
              </View>
            </View>
          </View>
        </View>
        <App
          selectedStartDate={selectedStartDate}
          setSelectedDate={setSelectedStartDate}
        />
      </ScrollView>
      <CalendarModal AcceptBtn={modalfunc} visible={visible}>
        <Modalcontext selectedDate={selectedStartDate} />
      </CalendarModal>
      <RndBtn modalfunc={modalfunc} />
    </View>
  );
};
const App = props => {
  const {selectedStartDate, setSelectedDate, selectedEndDate} = props;

  const onDateChange = date => {
    setSelectedDate(date);
  };

  const startDate = selectedStartDate ? selectedStartDate.toString() : '';
  return (
    <View style={styles.calendarContainer}>
      <CalendarPicker
        onDateChange={onDateChange}
        selectedStartDate={selectedStartDate}
        selectedEndDate={selectedEndDate}
        onPressDay={onDateChange}
      />
      <Text>SELECTED DATE:{selectedStartDate.toString()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
    fontSize: windowWidth * 0.04,
    color: 'white',
  },
});

export default AcademicAppointment;
