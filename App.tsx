import {Modal, StyleSheet, View} from 'react-native';
import NetworkError from './src/components/NetworkError';
import {useNetInfo} from '@react-native-community/netinfo';
// import Routes from './src/navigation/Routes';
import DrawerComponent from './src/navigation/Drawer';
import ContextProvider from './src/context';

function App(): React.JSX.Element {
  const {isConnected} = useNetInfo();

  return (
    <View style={{flex: 1}}>
      <ContextProvider>
        {/* <Routes /> */}
        <DrawerComponent />
      </ContextProvider>
      <Modal animationType="slide" visible={!isConnected}>
        <View style={styles.centeredView}>
          <NetworkError />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
