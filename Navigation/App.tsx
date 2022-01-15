import * as React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";


type RootStackParamList = {
  Home: undefined,
  Details: { name: string };
};

//type Props = NativeStackScreenProps<>;

type HomeScreenNavigationProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
type ProfileScreenNavigationProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const NavigationApp = () => {
  return (<NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Welcome' }}
      />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>

  </NavigationContainer>);
}

const HomeScreen = ({ navigation }: HomeScreenNavigationProps) => {
  return (
    <Button
      title="Go to Details Screen"
      onPress={() =>
        navigation.navigate('Details', { name: 'Details' })
      }
    />
  );
};
const DetailsScreen = ({ navigation, route }: ProfileScreenNavigationProps) => {
  return (
    <View>
      <Text style={{ color: '#000000' }}>This is {route.params.name}'s page</Text>
    </View>

  );
};

export default NavigationApp;