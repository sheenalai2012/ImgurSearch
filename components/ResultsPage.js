import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TextInput } from 'react-native';
import Results from './Results';
import { Component } from 'react';


const CLIENT_ID = "c70aeb3eabcd8cb";

export default class ResultsPage extends Component{
  constructor(props) {
    super(props);
    this.state = {
      results: "start",
      load: false
    }
  }
  search(query) {
      this.setState({load:true})
      if (query == "") {
          this.state = {
              results: "start"
          };
          return;
      }
      query = encodeURIComponent(query)
      fetch(`https://api.imgur.com/3/gallery/search?q=${query}`, {
      method: 'GET',
      headers: {
          'content-type': 'application/json',
          'Authorization': "Client-ID " + CLIENT_ID
      },
      })
      .then(response => response.json())
      .then((data) => {
          this.setState({
              results:data.data,
              load:false
          });
             
      })
      .catch(err => {
          console.log(err)
      });
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TextInput onSubmitEditing={(event) => this.search(event.nativeEvent.text)} placeholder="search" style={styles.input}/>
        <Results load={this.state.load}data={this.state.results}/>
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    margin: 10,
    height: 30,
    paddingHorizontal: 10,
    width: "95%",
    borderRadius: 10,
    borderWidth: 1,
    alignItems: "center",
}
});
