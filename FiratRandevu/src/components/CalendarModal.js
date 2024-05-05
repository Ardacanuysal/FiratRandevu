import {
  Modal,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;
import Modalcontext from './modalContext/Modalcontext';

export default function CalendarModal(props) {
  const {AcceptBtn, visible} = props;
  return (
    <Modal visible={visible} transparent={true}>
      <View style={styles.Modal}>
        <TouchableOpacity style={styles.btnOnay} onPress={AcceptBtn}>
          <View style>
            <Text>ONAYLA</Text>
          </View>
         <Modalcontext></Modalcontext>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  BtnsContainer: {
    marginTop: windowWidth * 3,
    
  },
  Modal: {
    width: windowWidth * 1,
    height: windowWidth * 1,
    backgroundColor: '#F3F3F3',
    marginTop: windowWidth * 1.3,
  },
  btnOnay: {                                                    
    backgroundColor: 'red',
    padding: windowWidth * 0.04,    
    width: windowWidth * 0.4,   
    alignSelf: 'center',
    borderRadius: windowWidth * 0.03,
  },
});
