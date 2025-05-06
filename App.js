import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
export default function App() {
 return (
 <View style={stiluri.container}>
 {/* Titlul aplicației */}
 <Text style={stiluri.titlu}>Lista de sarcini</Text>
 {/* Input + Buton pentru adăugarea de sarcini */}
 <View style={stiluri.inputContainer}>
 <TextInput
 style={stiluri.input}
 placeholder="Adaugă o sarcină"
 />
 <Button title="Adaugă" onPress={() => { /* acțiune adăugare */ }} />
 </View>
 {/* Lista de sarcini va veni aici (pasul următor) */}
 </View>
 );
}


const stiluri = StyleSheet.create({
  container: {
  flex: 1, // ocupă întreg ecranul
  padding: 20, // margini interne
  backgroundColor: '#fff'
  },
  titlu: {
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 20,
  textAlign: 'center'
  },
  inputContainer: {
  flexDirection: 'row', // pune inputul și butonul pe orizontală
  marginBottom: 20,
  alignItems: 'center'
  },
  input: {
  flex: 1, // ocupă tot spațiul rămas în rând
  borderColor: '#ccc',
  borderWidth: 1,
  padding: 8,
  marginRight: 10, // spațiu între câmpul text și buton
  borderRadius: 5
  }
 });
 
