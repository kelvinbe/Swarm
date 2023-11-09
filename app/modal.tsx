import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';


interface IProps {
  Topics?:  {
    id: number,
    title: string,
    checked: false,
    posts: number,
    views: number,
  }[]

}

export default function ModalScreen(props: IProps) {

  const {Topics} = props


  useEffect(() => {
    console.log('topics', Topics)
  }, [Topics])
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
          {Topics?.map((topic, index) => {
            return <Text key={index}>{topic.checked === true ? topic.title: null }</Text>
          })}
      <StatusBar style={Platform.OS === 'android' ? 'dark' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
