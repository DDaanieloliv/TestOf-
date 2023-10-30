import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';


export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
    
    {/* <Image  style={styles.profileImage}
    source={require('assets/perfil.png.jpg')}/> */}
    
    {/* :Jsx: */}

    <View style={styles.section}>
      <Text style={styles.heading}>Informações Pessoais</Text>
      <Text>Nome: Daniel Roberto</Text>
      <Text>Email: daniel@example.com</Text>
      <Text>Telefone: (**) ****-****</Text>
    </View>

    <View style={styles.section}>
      <Text style={styles.heading}>Formação Acadêmica</Text>
      <Text>Curso: Analise e Desenvolvimento de Sistemas</Text>
      <Text>Instituição: Faculdade Senac</Text>
      <Text>Ano de Conclusão: ...</Text>
    </View>

    <View style={styles.section}>
      <Text style={styles.heading}>Experiência Profissional</Text>
      <Text>Cargo: Desenvolvedor Back-end</Text>
      <Text>Empresa: *****</Text>
      <Text>Período: Jan 2020 - Presente</Text>
      <Text>Descrição: Desenvolvimento de Softwares...</Text>
    </View>

    <View style={styles.section}>
      <Text style={styles.heading}>Habilidades Técnicas</Text>
      <Text>React Native, JavaScript, Java, C, Node.JS</Text>
    </View>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  section: {
    marginBottom: 16,
    marginTop: 90 ,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
