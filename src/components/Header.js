import { View, Text, StyleSheet } from "react-native";

const Header = ( { title } )=>{
    return(
        <View style={style.header}>
            <Text style={style.text}>{ title }</Text>
        </View>
    );
};

const style = StyleSheet.create({
    header:{
        width: "100%",
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#222"
    },
    text: {
        color: "#fff",
        fontSize: 32
    }
});

export default Header;