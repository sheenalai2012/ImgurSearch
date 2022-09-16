import {View, Text, StyleSheet, Image, Dimensions, Pressable} from 'react-native';
import React from 'react';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/core';

const win = Dimensions.get('window');

export default function ResultCard(props) {
    const navigation = useNavigation();
    const styles = StyleSheet.create({
        image: {
            width: win.width * .5 - 10, 
            aspectRatio: props.aspectRatio, 
            resizeMode: 'contain', 
        },
        container: {
           margin: 5,
        borderRadius: 10,
        backgroundColor: "#ede8e8"
           
        },
        statsContainter: {
            flexDirection: "row",
            alignItems: 'center',
            padding: 7
            
        },
        stat: {
            flex: 2,
        },
        icon: {
            bottom: -8,
            height: 25
        },
        iconContainer: {
            flex: 1
        },
        author: {
            fontWeight: "600"
        },
        top: {
            padding: 7
        }
    });
    return (
      <Pressable onPress={() => {navigation.navigate("Item", {image: props.data, url: props.url, aspectRatio: props.aspectRatio})}} style={styles.container}>
          <View style={styles.top}>
          <Text style={styles.author}>{ props.data.account_url === null ? 'Anonymous' : props.data.account_url}</Text>
          <Text>{props.data.title}</Text>
          </View>
          <Image defaultSource={require('../assets/empty.webp')} style={styles.image} source={{uri: props.url}}/>

          <View style={styles.statsContainter}>
          <Text style={styles.iconContainer}><Icon style={styles.icon}size={15} name='favorite-border' /></Text><Text style={styles.stat}>{props.data.ups}</Text>
          <Text style={styles.iconContainer}><Icon style={styles.icon}size={15} name='chat-bubble-outline' /></Text><Text style={styles.stat}>{props.data.comment_count}</Text>
          </View>
          
        
      </Pressable>
    );
}
