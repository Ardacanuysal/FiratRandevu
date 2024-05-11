import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  Touchable,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Login = props => {
  const {navigation} = props;
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View style={{margintop: windowWidth * 19}}>
        <View style={{alignItems: 'center'}}>
          <View>
            <Image source={require('../../assets/images/firatLogo.png')} />
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <View>
            <Text
              style={{
                fontSize: windowWidth * 0.08,
                fontWeight: '600',
                color: 'black',
              }}>
              Akademisyen Girişi
            </Text>
          </View>
        </View>
        <View style={{alignItems: 'center', marginTop: 12}}>
          <View
            style={{
              borderWidth: 1,
              width: windowWidth * 0.85,
              height: windowWidth * 0.1,
              borderRadius: windowWidth * 0.02,
              borderColor: '#78113E',
            }}>
            <View style={{position: 'absolute'}}>
              <View
                style={{
                  bottom: windowWidth * 0.02,
                  left: windowWidth * 0.05,
                  backgroundColor: 'white',
                  paddingHorizontal: windowWidth * 0.03,
                }}>
                <Text
                  style={{
                    fontSize: windowWidth * 0.035,
                    color: 'grey',
                  }}>
                  Kullanıcı Adı
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              borderWidth: 1,
              width: windowWidth * 0.85,
              height: windowWidth * 0.1,
              borderRadius: windowWidth * 0.02,
              borderColor: '#78113E',
              marginTop: windowWidth * 0.05,
            }}>
            <View style={{position: 'absolute'}}>
              <View
                style={{
                  bottom: windowWidth * 0.02,
                  left: windowWidth * 0.05,
                  backgroundColor: 'white',
                  paddingHorizontal: windowWidth * 0.03,
                }}>
                <Text
                  style={{
                    fontSize: windowWidth * 0.035,
                    color: 'grey',
                  }}>
                  Şifre
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <View style={{width: windowWidth * 0.85, alignItems: 'flex-end'}}>
            <View style={{borderBottomWidth: 1, borderColor: '#78113E'}}>
              <Text style={{fontSize: windowWidth * 0.035, color: '#78113E'}}>
                Şifreni mi unuttun?
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: windowWidth * 0.08,
            marginRight: windowWidth * 0.04,
            height: windowWidth * 0.1,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#78113E',
              paddingHorizontal: windowWidth * 0.03,
              paddingVertical: windowWidth * 0.01,
              borderRadius: windowWidth * 0.07,
              width: windowWidth * 0.3,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
              style={{flexDirection: 'row'}}>
              <Image
                style={{
                  height: windowWidth * 0.05,
                  width: windowWidth * 0.05,
                }}
                source={require('../../assets/icons/SignIn.png')}></Image>
              <View
                style={{alignSelf: 'center', marginLeft: windowWidth * 0.06}}>
                <Text style={{color: 'white', fontWeight: windowWidth * 0.3}}>
                  Giriş
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: windowWidth * 0.04,
            marginRight: windowWidth * 0.04,
            height: windowWidth * 0.1,
          }}>
          <View>
            <View
              style={{
                justifyContent: 'center',
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#78113E',
                marginTop: windowWidth * 0.01,
                paddingHorizontal: windowWidth * 0.03,
                paddingVertical: windowWidth * 0.01,
                borderRadius: windowWidth * 0.07,
                width: windowWidth * 0.5,
                height: windowWidth * 0.1,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={{
                    height: windowWidth * 0.05,
                    width: windowWidth * 0.05,
                  }}
                  source={require('../../assets/icons/SignIn.png')}></Image>
              </View>
              <View
                style={{alignSelf: 'center', marginLeft: windowWidth * 0.06}}>
                <Text style={{color: 'white', fontWeight: windowWidth * 0.3}}>
                  Öğrenci Girişi
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Login;
