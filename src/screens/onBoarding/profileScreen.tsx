import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {handleSignOut} from '../../store/redux/action/auth';

import {RootStackParamList} from '../../navigations/types';
import {useDispatch} from 'react-redux';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, 'SignIn'>;
}

const ProfileScreen: React.FC<Props> = ({
  navigation: {navigate, reset, replace},
}) => {
  const dispatch = useDispatch();

  const onSignout = () => {
    dispatch(handleSignOut());
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => ''}>
        <TouchableOpacity onPress={() => onSignout()}>
          <Text>Profile Screen</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
