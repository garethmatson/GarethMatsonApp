import React from 'react'
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  Image,
  View,
} from 'react-native'
import CompanyLogo from 'src/images/journey-logo.png'
import {Colors} from 'react-native/Libraries/NewAppScreen'

const Main = () => {
  const isDarkMode = useColorScheme() === 'dark'
  return (
    <SafeAreaView
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? Colors.darker : Colors.lighter},
      ]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View>
        <Image source={CompanyLogo} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
})

export default Main
