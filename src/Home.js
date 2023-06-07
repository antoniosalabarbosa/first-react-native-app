import Header from "./components/Header";
import { 
    ScrollView, 
    Image, 
    View,
    Text,
    TouchableOpacity,
    StyleSheet 
} from "react-native";

const Home = ()=>{
    return (
        <>
            <Header title="Home" />

            <ScrollView style={style.container_scroll}>
                <View style={style.container_img}>
                    <Image
                        style={style.img}
                        source={require("../assets/images/background-image.png")}
                    />
                </View>

                <View style={style.content_view}>
                    <Text style={style.title_view}>Título</Text>
                    <Text style={style.p_view}>
                        En este ejemplo, se utiliza el componente Text después del componente Image dentro del contenedor View. El estilo position: 'absolute' se aplica al componente Text, lo que permite superponerlo encima de la imagen. Los valores de las propiedades top, left, right y bottom se establecen en 0 para que el componente Text ocupe todo el espacio disponible dentro del contenedor View.
                    </Text>

                    <Text style={style.title_view}>Título</Text>
                    <Text style={style.p_view}>
                        En este ejemplo, se utiliza el componente Text después del componente Image dentro del contenedor View. El estilo position: 'absolute' se aplica al componente Text, lo que permite superponerlo encima de la imagen. Los valores de las propiedades top, left, right y bottom se establecen en 0 para que el componente Text ocupe todo el espacio disponible dentro del contenedor View.
                    </Text>

                    <Text style={style.title_view}>Título</Text>
                    <Text style={style.p_view}>
                        En este ejemplo, se utiliza el componente Text después del componente Image dentro del contenedor View. El estilo position: 'absolute' se aplica al componente Text, lo que permite superponerlo encima de la imagen. Los valores de las propiedades top, left, right y bottom se establecen en 0 para que el componente Text ocupe todo el espacio disponible dentro del contenedor View.
                    </Text>

                    <TouchableOpacity style={style.button_bg}>
                        <Text style={style.button_text}>Ver Mais</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    );
};

const style = StyleSheet.create({
    container_scroll:{
        flex: 1,
    },
    container_img:{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
    },
    img:{
        width: "100%",
        height: 600
    },

    content_view:{
        width: "80%",
        paddingVertical: 40,
        alignSelf: "center",
    },

    title_view:{
        fontSize: 32,
        fontWeight: "bold",
    },

    p_view:{
        marginBottom: 40,
        fontSize: 20,
        lineHeight: 30
    },

    button_bg:{
        paddingVertical: 20,
        paddingHorizontal: 60,
        alignSelf: "center",
        backgroundColor: "#3498db"
    },
    button_text:{
        color: "#fff",
        fontSize: 24,
    },
});

export default Home;