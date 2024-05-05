import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const windowWidth = Dimensions.get('window').width;
const RndBtn = (props) => {
    const {modalfunc} = props
  return (
    <View>
      <TouchableOpacity style={styles.randevuAl} onPress={modalfunc}>
        <View style={styles.btnRandevuAl}>
          <Text style={styles.txtRandevuAl}>RANDEVU AL</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RndBtn;

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
});
