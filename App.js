import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, StatusBar, TouchableOpacity } from 'react-native';

export default function App() {

  const btns = []
  const [result,setResult] = useState('')


  useEffect(()=>{
  if (result.length >= 10) setResult(result.slice(0,10))
  },[result])

  function toggleButton(title)
  {
    if (result.length >= 10) setResult(result.slice(0,-1))
    setResult(prev => prev + title)
  }

  for (let i=0; i<10; i++)
  {
    let title = i.toString()
    btns.push(
    <TouchableOpacity
      style={styles.btn}
      key={i}
      onPress={()=>toggleButton(title)}
    >
      <Text style={{fontSize: 30}}>{title}</Text>
    </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.results}>{result}</Text>
      <View style={styles.btnContainer}>
        <TouchableOpacity>
        </TouchableOpacity>
        {btns}
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'green',
    padding: 20,
    position: 'absolute',
    bottom: 0,
    top: 200,
    left: 0,
    right: 0
  },
  btn: {
    margin: 20,
    padding: 10,
    backgroundColor: 'grey',
    transitionDuration: '0s'
  },
  results: {
    backgroundColor: 'red',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 200,
    fontSize: 30,
    textAlign: 'right',
    padding: 20
  }
});
