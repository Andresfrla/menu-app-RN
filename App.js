import { StatusBar, StyleSheet, View } from 'react-native';
import CategoryScreen from './screens/CategoryScreen';

export default function App() {
  return (
    <>
      <StatusBar styles='light'/>
      <CategoryScreen />
    </>
  );
}

const styles = StyleSheet.create({
});
