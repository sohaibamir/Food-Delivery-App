import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  Image,
  Platform,
  TouchableOpacity,
} from 'react-native';
import logo from '../assets/logo.png';
import {global} from '../styles/global';
import theme from '../styles/theme';
import {useForm} from 'react-hook-form';
import InputField from '../components/InputField';
import {Icons} from '../icons';
import AppButton from '../components/AppButton';

const Login = ({navigation}) => {
  const {control, handleSubmit} = useForm();
  const [isPassword, setIsPassword] = useState(true);
  const [loading, setLoading] = useState(false);
  const {height} = useWindowDimensions();
  const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const onSubmit = async credentials => {
    // setLoading(true);
    // try {
    //   const response = await axiosInstance.post("/auth/login", credentials);
    //   const { user, tokens } = response.data;
    //   setLoading(false);
    // } catch (error) {
    //   if (error.response && error.response.status === 401) {
    //     console.error("Server Error:", error.response.data);
    //   } else {
    //     console.error("Error:", error.message);
    //   }
    //   setLoading(false);
    // }
    navigation.navigate('MainScreen');
  };

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={[
        styles.wrapper,
        {minHeight: height - (Platform.OS === 'android' ? -27 : 0)},
      ]}>
      <Image
        style={styles.logo}
        source={logo}
        alt="logo"
        resizeMode="contain"
      />
      <View style={{width: '100%'}}>
        <Text style={global.h1}>Welcome</Text>
        <Text style={[theme.defaultColor]}>Sign in to continue!</Text>
      </View>
      <View style={styles.form}>
        <InputField
          control={control}
          name="email"
          label="Email"
          placeholder="Enter email"
          required={true}
          type="email-address"
          rules={{
            required: 'Email is required field',
            pattern: {value: EMAIL_REGEX, message: 'Invalid email address'},
          }}
          onSubmit={handleSubmit(onSubmit)}
        />
        <View>
          <InputField
            control={control}
            name="password"
            label="Password"
            placeholder="Enter password"
            required={true}
            type="default"
            rules={{
              required: 'Password is required field',
            }}
            passwordField={isPassword}
            onSubmit={handleSubmit(onSubmit)}
          />
          <TouchableOpacity
            onPress={() => setIsPassword(!isPassword)}
            style={styles.icon}>
            <Icons name={isPassword ? 'showPassword' : 'hidePassword'} />
          </TouchableOpacity>
        </View>
        <View style={{gap: 14}}>
          <AppButton
            title="Login"
            loading={loading}
            onPress={handleSubmit(onSubmit)}
          />
          <Text style={[global.text, {textDecorationLine: 'underline'}]}>
            Don't have an account?{' '}
            <Text
              onPress={() => navigation.navigate('Signup')}
              style={{
                fontWeight: 'bold',
              }}>
              Signup
            </Text>
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={global.text}>© 2024 Sohaib Amir.</Text>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 30,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  form: {
    gap: 20,
    marginTop: 30,
  },
  icon: {
    position: 'absolute',
    right: 5,
    top: 30,
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  footer: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
  },
});
