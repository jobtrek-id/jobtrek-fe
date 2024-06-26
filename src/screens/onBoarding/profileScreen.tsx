import React, {useCallback, useRef} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  Button,
  TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Portal} from 'react-native-paper';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useAppDispatch} from '../../../hook';

import {handleSignOut} from '../../store/redux/action/auth';
import {RootStackParamList} from '../../navigations/types';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, 'SignIn'>;
}

const ProfileScreen: React.FC<Props> = ({
  navigation: {navigate, reset, replace},
}) => {
  const dispatch = useAppDispatch();

  const onSignout = () => {
    dispatch(handleSignOut());
  };

  const textInputRef = useRef<TextInput>(null);

  const handleFocusTextInput = () => {
    // Memanggil metode focus() untuk memberikan fokus ke input teks
    textInputRef.current.blur();
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => onSignout()}>
        <Text>Profile Screen</Text>
        <TextInput ref={textInputRef} placeholder="Masukkan teks di sini" />
        {/* Tombol untuk memanggil metode focus */}
        <Button title="Focus TextInput" onPress={handleFocusTextInput} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default ProfileScreen;
