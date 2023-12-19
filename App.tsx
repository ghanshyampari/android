/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Animated,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [text, setText] = React.useState('Happy New Year 2024 in Advance!');

  const LeftActions = (progress: any, dragX: { interpolate: (arg0: { inputRange: number[]; outputRange: number[]; extrapolate: string; }) => any; }) => {

    const scale = dragX.interpolate({

      inputRange: [0, 100],

      outputRange: [0, 1],

      extrapolate: 'clamp'

    })

    return (

      <View

        style={{ flex: 1, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center' }}>

        <Animated.Text

          style={{

            color: 'white',

            paddingHorizontal: 10,

            fontWeight: '600',

            transform: [{ scale }]

          }}>

          Undo

        </Animated.Text>

      </View>

    )

  }

  const RightActions = (progress: any, dragX: { interpolate: (arg0: { inputRange: number[]; outputRange: number[]; }) => any; }) => {

    const scale = dragX.interpolate({

      inputRange: [-100, 0],

      outputRange: [0.7, 0.5]

    })

    return (

      <>

        <View style={{ backgroundColor: 'red', justifyContent: 'center' }}>

          <Animated.Text

            style={{

              color: 'white',

              paddingHorizontal: 10,

              fontWeight: '600',

              transform: [{ scale }]

            }}>

            Delete

          </Animated.Text>

        </View>

        <View style={{ backgroundColor: 'green', justifyContent: 'center' }}>

          <Animated.Text

            style={{

              color: 'white',

              paddingHorizontal: 10,

              fontWeight: '600',

              transform: [{ scale }]

            }}>

            Archive

          </Animated.Text>

        </View>

      </>

    )

  }


  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <GestureHandlerRootView>
        <Swipeable
          renderLeftActions={LeftActions} renderRightActions={RightActions}
          containerStyle={{ alignItems: 'center', backgroundColor: 'blue' }}
        >
          <View style={styles.item}>
            <Text style={{ color: '#fff' }}>{text}</Text>
          </View>
        </Swipeable>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  item: {
    width: 360,
    height: 60,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent"
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    backgroundColor: "white"
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
