import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';

export default function App() {
  return (

  <ScrollView style={styles.scflex}>

    <View style={styles.container}>

        <Text>Digite aqui:</Text>
        <TextInput placeholder='teste'></TextInput>
        <Button onPress='' title='Aperte'></Button>

    </View>
    
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scflex: {
    flex: 1,
    backgroundColor: '#fa0606',
  },
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
