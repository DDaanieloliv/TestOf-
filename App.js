import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image , TouchableOpacity , handleLinkedInPress , handleGitHubPress , Linking  } from 'react-native';

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
     
      <View style={styles.containers}>
      <Image style={styles.profileImages} source={require('./assets/github.png')} />
      
      

      <View style={styles.section}>
        <TouchableOpacity onPress={() => Linking.openURL('https://github.com/DDaanieloliv')}>
          <Text>GitHub: DDaanieloliv </Text>
        </TouchableOpacity>
      </View>
      
      </View>
     
      <View >
      <Image style={styles.profileImages} source={require('./assets/linkedin2.png')} />
      
      
<View style={styles.section}>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/daniel-oliveira-aba552251/')}>
          <Text>LinkedIn: Daniel Oliveira </Text>
        </TouchableOpacity>
      </View>
     
      </View>
    
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
  profileImages: {
    marginLeft: 80,
    marginTop: 20,
  },
});


// OTHER WAY //

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';

// function HomeScreen({ navigation }) {
//   const handleLinkedInPress = () => {
//     Linking.openURL('https://www.linkedin.com/in/daniel-oliveira-aba552251/');
//   };

//   const handleGitHubPress = () => {
//     Linking.openURL('https://github.com/DDaanieloliv');
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Image style={styles.profileImage} source={require('./assets/linkedin1.png')} />

//       <View style={styles.section}>
//         <Text style={styles.heading}>Informações Pessoais</Text>
//         <Text>Nome: Daniel Roberto</Text>
//         <Text>Email: daniel@example.com</Text>
//         <Text>Telefone: (**) ****-****</Text>
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.heading}>Formação Acadêmica</Text>
//         <Text>Curso: Analise e Desenvolvimento de Sistemas</Text>
//         <Text>Instituição: Faculdade Senac</Text>
//         <Text>Ano de Conclusão: ...</Text>
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.heading}>Experiência Profissional</Text>
//         <Text>Cargo: Desenvolvedor Back-end</Text>
//         <Text>Empresa: *****</Text>
//         <Text>Período: Jan 2020 - Presente</Text>
//         <Text>Descrição: Desenvolvimento de Softwares...</Text>
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.heading}>Habilidades Técnicas</Text>
//         <Text>React Native, JavaScript, Java, C, Node.JS</Text>
//       </View>

//       <View style={styles.section}>
//         <TouchableOpacity onPress={handleLinkedInPress}>
//           <Text>LinkedIn</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={styles.section}>
//         <TouchableOpacity onPress={handleGitHubPress}>
//           <Text>GitHub</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// }

// function PortfolioScreen() {
//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <View style={styles.containers}>
//         <Image style={styles.profileImages} source={require('./assets/github.png')} />

//         <TouchableOpacity onPress={() => Linking.openURL('https://github.com/DDaanieloliv')}>
//           <Text>https://github.com/DDaanieloliv</Text>
//         </TouchableOpacity>
//       </View>

//       <View>
//         <Image style={styles.profileImages} source={require('./assets/linkedin2.png')} />

//         <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/daniel-oliveira-aba552251/')}>
//           <Text>https://www.linkedin.com/in/daniel-oliveira-aba552251/</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// }

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Portifolio" component={PortfolioScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 16,
//   },
//   section: {
//     marginBottom: 16,
//     marginTop: 60,
//     alignItems: 'center',
//   },
//   heading: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 8,
//     justifyContent: 'center',
//     textAlign: 'center',
//   },
//   profileImage: {
//     marginTop: 30,
//     marginLeft: 158,
//   },
//   profileImages: {
//     marginLeft: 80,
//     marginTop: 20,
//   },
// });