import { Image, SafeAreaView, StyleSheet, Text, View, Dimensions, ScrollView, ActivityIndicator} from 'react-native';
import { Component } from 'react';
import Comment from './Comment';
import { HeaderBackButton } from '@react-navigation/elements';


const CLIENT_ID = "c70aeb3eabcd8cb";
const win = Dimensions.get('window');


export default class ItemPage extends Component{
  constructor(props) {
    super(props);
    this.state = {
        comments: [],
    }
    this.comments(this.props.route.params.image.id, this.props.route.params.image.is_album)
    
  }
  comments(id, is_album) {
    if (is_album) {
        var url = `https://api.imgur.com/3/gallery/album/${id}/comments`;
    }
    else {
        var url = `https://api.imgur.com/3/gallery/iamge/${id}/comments`;

    }
    fetch(url, {
    method: 'GET',
    headers: {
        'content-type': 'application/json',
        'Authorization': "Client-ID " + CLIENT_ID
    },
    })
    .then(response => response.json())
      .then((data) => {
          this.setState({
              comments:data.data,

          });
             
      })
      .catch(err => {
          console.log(err)
      });
   
}
  render() {
    const styles = StyleSheet.create({
    container: {
      flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
        title: {
          fontWeight: "bold",
          fontSize: 18
      },
      image: {
          width: win.width, 
          aspectRatio: this.props.route.params.aspectRatio, 
          resizeMode: 'contain', 
      },
      top: {
        padding: 15,
        backgroundColor: "#ede8e8",

      },
      });
      const { navigation } = this.props;

    
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
        <HeaderBackButton onPress={()=>{navigation.navigate('Search')}}/>
        <View style={styles.top}>
        <Text style={styles.title}>{this.props.route.params.image.title}</Text>
        <Text>{this.props.route.params.image.account_url}</Text>
        </View>
        <Image defaultSource={require('../assets/empty.webp')} style={styles.image} source={{uri: this.props.route.params.url}}/>
        {this.state.comments.length == 0 && <ActivityIndicator style={styles.container} size="large" />}
        {this.state.comments.map((comment) => {
        return (
          <View>
            <Comment comment={comment}/>
          </View>
        );})}
        </ScrollView>
      </SafeAreaView>
    );
  }
}


