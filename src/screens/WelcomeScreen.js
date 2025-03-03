import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";

export default function WelcomeScreen() {
    const navigation = useNavigation();

return (
    <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <Image
            source={require("../assets/Welcome.jpg")}
            style={{ height: "100%", width: "100%", position: "absolute" }}
        />
        <View style={{ padding: 20, paddingBottom: 40, spaceBetween: 20 }}>
        <LinearGradient
            colors={["transparent", "rgba(240, 123, 68, 0.53)"]}
            style={{ width: wp(100), height: hp(20), position: "absolute", bottom: 0 }}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
        />
            <View>
                <Text
                    style={{
                        fontSize: wp(10),
                        fontWeight: "bold",
                        textAlign: "center",
                        color: "white",
                    }}
                >
                    Traveling Made easy !
                </Text>
                <Text style={{ fontSize: wp(4), textAlign: "center", color: "white" }}>
                    Experience the world's best adventure around the world with us{" "}
                </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}
                style={{
                    backgroundColor: "#F07B44",
                    paddingHorizontal: 16,
                    padding: 8,
                    borderRadius: 20,
                    alignSelf: "center",
                    marginTop: 12,
                    elevation:15,
                }}
            >
                <Text style={{ textAlign: "center", fontSize: wp(5.5) ,fontWeight: "bold", color: "white" }}>Let's go!</Text>
            </TouchableOpacity> 
        </View>
       
    </View>
);
}
