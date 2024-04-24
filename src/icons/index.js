import {Text} from 'react-native';
import {ShowPassword} from './ShowPassword';
import {HidePassword} from './HidePassword';
import {Splash} from './Splash';
import {Search} from './Search';
import {Help} from './Help';
import {Order} from './Order';
import {Menu} from './Menu';
import {Cart} from './Cart';

export function Icons({name, style}) {
  switch (name) {
    case 'showPassword':
      return <ShowPassword />;

    case 'hidePassword':
      return <HidePassword />;

    case 'splash':
      return <Splash style={style} />;

    case 'search':
      return <Search />;

    case 'help':
      return <Help style={style} />;

    case 'order':
      return <Order style={style} />;

    case 'menu':
      return <Menu style={style} />;

    case 'cart':
      return <Cart style={style} />;

    default:
      return <Text>null</Text>;
  }
}
