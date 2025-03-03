import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { destinationsData } from "../constants/index";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import { HeartIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

export default function Destination() {
    const navigation=useNavigation();
  return (
    <ScrollView
      style={{ marginHorizontal: 20, marginTop: 10,marginBottom:28 }}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
        {destinationsData.map((item, index) => {
          return <DesitinationCard navigation={navigation}item={item} key={index} />;
        })}
      </View>
    </ScrollView>
  );
}

const DesitinationCard = ({ item,navigation }) => {
    const [isFavourite,toggleFavourite]=useState(false);
return (
    <TouchableOpacity onPress={()=>navigation.navigate('Destination',{...item})}
        style={{
            width: wp(42), // Adjusted width to fit two images side by side
            height: wp(70),
            justifyContent: "flex-end",
            position: "relative",
            padding: 16,
            paddingBottom: 24,
            marginHorizontal: wp(2.5) / 2, // Adjusted margin to ensure equal spacing
            
        }}
    >
        <Image
            source={item.image}
            style={{
                width: wp(42), // Adjusted width to fit within the TouchableOpacity
                height: wp(65),
                borderRadius: 35,
                position: "absolute",
                flexDirection: "row",
                // elevation:15
            }}
        />
        <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.5)"]}
            style={{ width: wp(42), height: hp(15), borderRadius: 35, position: "absolute", bottom: 0 }}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
        />
        <TouchableOpacity onPress={()=>toggleFavourite(!isFavourite)}style={{backgroundColor:"#bbb",opacity:0.65, position: "absolute", top: 36, right: 20, borderRadius: 50, padding: 5 }}>
            <HeartIcon size={wp(5)} color={isFavourite?"red":"white"} />
        </TouchableOpacity>
        <Text style={{ fontSize: wp(4), fontWeight: "bold", color: "#fff" }}>{item.title}</Text>
        <Text style={{ fontSize: wp(2.8), fontWeight: "600", color: "#aaa" }}>{item.shortDescription}</Text>
    </TouchableOpacity>
);
};
