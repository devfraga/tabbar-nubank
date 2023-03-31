import 'react-native-reanimated'

import { NavigationContainer } from '@react-navigation/native'
import { Routes } from './src/routes'

export default function App() {
  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  );
}

