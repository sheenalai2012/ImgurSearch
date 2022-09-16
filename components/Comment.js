import { Text, View, StyleSheet } from "react-native";

export default function Comment(props) {
    return (
        <View style={styles.container}>
        <Text style={styles.author}>{props.comment.author}</Text>
        <Text style={styles.comment}>{props.comment.comment}</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#ede8e8",
    },
    author: {
      fontWeight: "bold" ,
    },
    comment: {
        
    }
  });