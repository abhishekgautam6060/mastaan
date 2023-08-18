import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Linking } from 'react-native';

export default function App() {
  const openUrl = () => {
    const url = 'https://telegram.dog/+rPOSP07bG2IwNDNl'; // Replace with the desired URL
    Linking.openURL(url);
  };
  return (
    <View style={styles.container}>
      <Text style = {styles.main}>Mastaan Baba</Text>
      <Image
  // source={{uri: 'https://expertphotography.b-cdn.net/wp-content/uploads/2020/07/social-media-for-photographers-follow-1.jpg'}}
  source={{uri: 'https://t4.ftcdn.net/jpg/05/55/73/07/360_F_555730741_M9uMumgtMA7aUoP7SyQ6Ju1njcwemgmD.jpg'}}
  style={{width: 400, height: 500}}
  
/>
<Text style = {styles.lower}>
  This is the Best app where you can 
  
  <Text> find Best Prediction.</Text>
  </Text>
  <Text style = {styles.lower2}> For more information </Text>

<Button
  onPress={openUrl}
  title="Join Now"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9A2222',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
 main: {
  fontSize: 25,
  marginTop: 20,
  marginBottom:10,
  color: '#E4F0F4'
 },
 lower:{
  color: '#E4F0F4',
  fontSize: 16,
  alignItems: 'center',
  textAlign:'center',
  justifyContent: 'center',
  marginLeft:20,
  marginRight:20
 },
 lower2:{
  color: '#E4F0F4',
  fontSize: 16,
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft:20,
  marginRight:20,
  marginBottom:10,
 }
});
