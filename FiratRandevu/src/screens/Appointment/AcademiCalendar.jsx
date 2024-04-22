import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
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
      {/* I'll leave the grid generation to you, since it's quite lengthy */}
      <View style={{backgroundColor: '#fff', height: windowHeight}}>
        <View style={{flexDirection: 'row'}}>
          <View style={{margin: windowWidth * 0.1,shadowOpacity:0.5}}>
            <Image
              style={styles.nextPervius}
              source={require('../../assets/icons/pervius.png')}
            />
          </View>
          <View style={{margin: windowWidth * 0.06}}>
            <Text style={{fontSize: windowWidth * 0.08, fontWeight: '700'}}>
              October
            </Text>
          </View>
          <View style={{margin: windowWidth * 0.1,shadowOpacity:0.5}}>
            <Image
              style={styles.nextPervius}
              source={require('../../assets/icons/next.png')}
            />
          </View>
          <View style={{margin: windowWidth * 0.06}}></View>
        </View>
        {/* I'll leave the grid generation to you, since it's quite lengthy */}
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <View>
            <Text style={{fontWeight: '700'}}>Pt</Text>
          </View>
          <View>
            <Text style={{fontWeight: '700'}}>Sa</Text>
          </View>
          <View>
            <Text style={{fontWeight: '700'}}>Çar</Text>
          </View>
          <View>
            <Text style={{fontWeight: '700'}}>Per</Text>
          </View>
          <View>
            <Text style={{fontWeight: '700'}}>Cum</Text>
          </View>
          <View>
            <Text style={{fontWeight: '700'}}>Cts</Text>
          </View>
          <View>
            <Text style={{fontWeight: '700'}}>Pz</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: windowWidth * 0.08,
            marginLeft: windowWidth * 0.04,
          }}>
          <View>
            <Text style={{fontWeight: '700'}}></Text>
          </View>
          <View>
            <Text style={{fontWeight: '700'}}></Text>
          </View>
          <View>
            <Text style={{fontWeight: '700'}}></Text>
          </View>
          <View>
            <Text style={{fontWeight: '700'}}>1</Text>
          </View>
          <View>
            <Text style={{fontWeight: '700'}}>2</Text>
          </View>
          <View>
            <Text style={{fontWeight: '700'}}>3</Text>
          </View>
          <View>
            <Text style={{fontWeight: '700'}}>4</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: windowWidth * 0.08,
            marginLeft: windowWidth * 0.03,
          }}>
          <View>
            <Text style={{fontWeight: '700'}}>5</Text>
          </View>
          <View>
            <Text style={{fontWeight: '700'}}>6</Text>
          </View>
          <View>
            <Text style={{fontWeight: '700'}}> 7</Text>
          </View>
          <View>
            <Text style={{fontWeight: '700'}}> 8</Text>
          </View>
          <View>
            <Text style={{fontWeight: '700'}}> 9</Text>
          </View>
          <View>
            <Text style={{fontWeight: '700'}}> 10</Text>
          </View>
          <View>
            <Text style={{fontWeight: '700'}}> 11</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: windowWidth * 0.08,
            marginLeft: windowWidth * 0.01,
          }}>
          <View>
            <Text style={{fontWeight: '700'}}>12</Text>
          </View>
          <View>
            <Text style={{fontWeight: '700'}}>13</Text>
          </View>
          <View>
            <Text style={{fontWeight: '700'}}>14</Text>
          </View>
          <View>
            <Text style={{fontWeight: '700'}}>15</Text>
          </View>
          <View
            style={{
              backgroundColor: '#78113E',
              width: windowWidth * 0.1,
              height: windowWidth * 0.1,
              borderRadius: windowWidth * 0.03,
              position: 'relative',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: -windowWidth * 0.02,
            }}>
            <Text
              style={{
                fontWeight: '700',
                color: 'white',
              }}>
              16
            </Text>
          </View>
          <View>
            <Text style={{fontWeight: '700'}}>17</Text>
          </View>
          <View>
            <Text style={{fontWeight: '700'}}>18</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: windowWidth * 0.04,
            marginLeft: windowWidth * 0.01,
          }}>
          <View>
            <Text style={{fontWeight: '700'}}>19</Text>
          </View>
          <View>
            <Text style={{fontWeight: '700'}}>20</Text>
          </View>
          <View>
            <Text style={{fontWeight: '700'}}>21</Text>
          </View>
          <View>
            <Text style={{fontWeight: '700'}}>22</Text>
          </View>
          <View>
            <Text style={{fontWeight: '700'}}>23</Text>
          </View>
          <View>
            <Text style={{fontWeight: '700'}}>24</Text>
          </View>
          <View>
            <Text style={{fontWeight: '700'}}>25</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: windowWidth * 0.08,
            marginLeft: windowWidth * 0.01,
          }}>
          <View>
            <Text style={{fontWeight: '700'}}>26</Text>
          </View>
          <View>
            <Text style={{fontWeight: '700'}}>27</Text>
          </View>
          <View>
            <Text style={{fontWeight: '700'}}>28</Text>
          </View>
          <View>
            <Text style={{fontWeight: '700'}}>29</Text>
          </View>
          <View>
            <Text style={{fontWeight: '700'}}>30</Text>
          </View>
          <View>
            <Text style={{fontWeight: '700'}}>31</Text>
          </View>
          <View></View>
          {/* Diğer takvim kısımları buraya gelecek */}
        </View>
      </View>
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
  nextPervius: {
    width: windowWidth * 0.09,
    height: windowWidth * 0.09,
  },
});
