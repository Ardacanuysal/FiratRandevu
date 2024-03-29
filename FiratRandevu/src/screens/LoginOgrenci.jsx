import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
} from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;

const App = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <ImageBackground>
        <View style={{alignItems: 'center'}}>
          <View>
            <Image source={require('./Logo1.png')} />
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
              Öğrenci Girişi
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
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#78113E',
              paddingHorizontal: windowWidth * 0.03,
              paddingVertical: windowWidth * 0.01,
              borderRadius: windowWidth * 0.07,
              justifyContent: 'space-around',
              width: windowWidth * 0.3,
            }}>
            <View>
              <Image source={require('./Login.png')} />
            </View>
            <View>
              <Text
                style={{
                  fontSize: windowWidth * 0.04,
                  fontWeight: '700',
                  color: 'white',
                }}>
                Giriş
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
