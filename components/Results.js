import {Text, StyleSheet, ActivityIndicator} from 'react-native';
import { Component } from 'react';
import React from 'react';
import ResultCard from './ResultCard';
import MasonryList from '@react-native-seoul/masonry-list';




export default class Results extends Component {
    constructor(props) {
        super(props);
        
    } 
    render() {
        if (this.props.load == true) {
            return <ActivityIndicator style={styles.container} size="large" />
        }
        if (this.props.data == "start") {
            return <Text style={styles.container}>Start searching something.</Text>
        }
        if (this.props.data.length == 0) {
            return <Text style={styles.container}>No results.</Text>
        }
        return (
            <MasonryList
            data={this.props.data}
            style={styles.container}
            numColumns={2}
            renderItem={({item}) => (
                item.is_album ?  
                <ResultCard aspectRatio={item.cover_width / item.cover_height} data={item} url={"https://imgur.com/" + item.cover + ".jpg"} options={{ headerShown: false }} />
                : <ResultCard aspectRatio={item.width / item.height} data={item} url={item.link} options={{ headerShown: false }} /> 
            )}
            />);
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
    },
  });
