import {
  DrawerContentScrollView,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Icons} from '../icons';
import {global} from '../styles/global';
import HomeNavigator from './HomeNavigator';

const DrawerComponent = () => {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#D70F64" />
      <Drawer.Navigator
        drawerContent={props => (
          <DrawerContentScrollView {...props}>
            <View style={[styles.header, styles.headerWrapper]}>
              <View style={styles.headerContent}>
                <TouchableOpacity>
                  <Text style={styles.headerText}>Log in / Create account</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={[styles.headerWrapper, {gap: 25}]}>
              <TouchableOpacity style={styles.row}>
                <Icons name="order" style={styles.drawerIcon} />
                <Text style={global.text}>My Orders</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.row}>
                <Icons name="help" style={styles.drawerIcon} />

                <Text style={global.text}>Help Center</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text style={global.text}>Settings</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => props.navigation.navigate('TermsAndCondition')}>
                <Text style={global.text}>Terms & Conditions / Privacy</Text>
              </TouchableOpacity>
            </View>
          </DrawerContentScrollView>
        )}
        screenOptions={{
          drawerActiveTintColor: '#D70F64',
          drawerInactiveTintColor: 'black',
          headerPressColor: 'blue',
        }}>
        <Drawer.Screen
          options={{
            headerShown: false,
          }}
          name="home"
          component={HomeNavigator}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#D70F64',
    marginTop: -4,
  },
  headerWrapper: {
    padding: 15,
  },
  headerContent: {
    height: 180,
    justifyContent: 'flex-end',
  },
  headerText: {
    color: 'white',
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  drawerIcon: {
    fontSize: 18,
    marginRight: 20,
    color: '#D70F64',
  },
});

export default DrawerComponent;
