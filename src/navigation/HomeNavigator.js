import {StatusBar, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Home from '../screens/Home';
import {Icons} from '../icons';
import Cart from '../screens/Cart';
import Shop from '../screens/Shop';
import Discount from '../screens/Discount';
import TermsCondition from '../screens/TermsCondition';

const HomeNavigator = props => {
  const Stack = createStackNavigator();
  return (
    <>
      <StatusBar translucent />
      <Stack.Navigator
        screenOptions={{
          headerMode: 'screen',
          ...TransitionPresets.SlideFromRightIOS,
          headerTitleAlign: 'left',
          headerStyle: {
            elevation: 2,
          },
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: {
              backgroundColor: '#D70F64',
            },
            headerTitle: () => (
              <Text style={styles.headerTitle}>
                Deliver To:{' '}
                <Text style={styles.coloredText}>Current Location</Text>
              </Text>
            ),
            headerLeft: () => (
              <TouchableOpacity
                style={{marginLeft: 15}}
                onPress={() => props.navigation.openDrawer()}>
                <Icons name="menu" style={{color: '#FFF'}} />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                style={{marginRight: 15}}
                onPress={() => props.navigation.navigate('Cart')}>
                <Icons name="cart" style={{color: '#FFF'}} />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen name="Cart" component={Cart} />

        <Stack.Screen name="Shop" component={Shop} />

        <Stack.Screen name="Discount" component={Discount} />

        <Stack.Screen
          options={{
            headerTitle: 'Terms & Condition',
            ...TransitionPresets.FadeFromBottomAndroid,
          }}
          name="TermsAndCondition"
          component={TermsCondition}
        />
      </Stack.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 14,
    color: '#FFF',
  },
  coloredText: {
    fontWeight: 'bold',
  },
});

export default HomeNavigator;
