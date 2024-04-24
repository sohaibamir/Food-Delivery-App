import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import {global} from '../styles/global';
import {useForm} from 'react-hook-form';
import InputField from '../components/InputField';
import {Icons} from '../icons';
import AppButton from '../components/AppButton';

const Signup = ({navigation}) => {
  const {control, handleSubmit} = useForm();
  const [isPassword, setIsPassword] = useState(true);
  const {height} = useWindowDimensions();
  const [loading, setLoading] = useState(false);
  const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const onSubmit = async credentials => {
    // setLoading(true);
    // try {
    //   const response = await axiosInstance.post('/auth/register', credentials);
    //   const {user, tokens} = response.data;
    //   console.log(user, tokens);
    //   setLoading(false);
    // } catch (error) {
    //   if (error.response && error.response.status === 400) {
    //     console.error('Server Error:', error.response.data);
    //   } else {
    //     console.error('Error:', error.message);
    //   }
    //   setLoading(false);
    // }
  };

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={[styles.wrapper, {minHeight: height}]}>
      <Icons name="splash" style={styles.splash} />
      <View style={{width: '100%'}}>
        <Text style={global.h2}>Create New Account</Text>
        <View style={styles.form}>
          <InputField
            control={control}
            name="name"
            label="Name"
            placeholder="Enter name"
            required={true}
            type="default"
            rules={{
              required: 'Name is required field',
            }}
            onSubmit={handleSubmit(onSubmit)}
          />
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
              title="Sign up"
              loading={loading}
              onPress={handleSubmit(onSubmit)}
            />
            <Text style={[global.text, {textDecorationLine: 'underline'}]}>
              Already have an account?{' '}
              <Text
                onPress={() => navigation.navigate('Login')}
                style={{
                  fontWeight: 'bold',
                }}>
                Login
              </Text>
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={global.text}>© 2024 Sohaib Amir.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    justifyContent: 'center',
  },
  form: {
    gap: 20,
    marginTop: 30,
  },
  splash: {
    position: 'absolute',
    opacity: 0.5,
    zIndex: -1,
    top: 3,
    alignSelf: 'center',
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

export default Signup;
