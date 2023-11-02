import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image , TouchableOpacity } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.profileImage} source={require('./assets/linkedin1.png')} />

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

      <View style={styles.section}>
      <TouchableOpacity onPress={() => navigation.navigate('Portifolio')}>
        <Text>Acessar Portfólio</Text>
      </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

function PortfolioScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>OLÁ - Esta é a tela do Portfólio</Text>
    </ScrollView>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Portifolio" component={PortfolioScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  section: {
    marginBottom: 16,
    marginTop: 60,
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    justifyContent: 'center',
    textAlign: 'center',
  },
  profileImage: {
    marginTop: 30,
    marginLeft: 158,
  },
});