import { View, Text } from 'react-native'
import React from 'react'

const cardstyle = () => {
  return (
    <View>
      <Text>cardstyle</Text>
    </View>
  )
}

export default cardstyle

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
    width: windowWidth * 1,
  },
});