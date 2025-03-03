import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { ChevronLeftIcon} from "react-native-heroicons/outline";
import { HeartIcon,ClockIcon ,MapPinIcon, SunIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

export default function DestinationScreen(props) {
  const item = props.route.params;
  const navigation = useNavigation();
  const [isFavourite, toggleFavourite] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ImageBackground
        source={item.image}
        style={{ width: wp(100), height: hp(55) }}
      ></ImageBackground>
      <StatusBar style={"light"} />
      {/*back button */}
      <SafeAreaView
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          position: "absolute",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            padding: 2,
            marginLeft: 4,
            borderRadius: 50,
            backgroundColor: "#aaa",
            opacity: 0.9,
            left: 38,
            top: 60,
          }}
        >
          <ChevronLeftIcon
            size={wp(9)}
            strokeWidth={4}
            color="#fff"
          ></ChevronLeftIcon>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => toggleFavourite(!isFavourite)}
          style={{
            padding: 4.5,
            marginRight: 4,
            borderRadius: 50,
            backgroundColor: "#ccc",
            opacity: 0.9,
            right: 38,
            top: 60,
          }}
        >
          <HeartIcon
            size={wp(8)}
            strokeWidth={3}
            color={isFavourite ? "red" : "white"}
          ></HeartIcon>
        </TouchableOpacity>
      </SafeAreaView>
      {/*title descrioption */}
      <View
        style={{
          paddingHorizontal: 5,
          flex: 1,
          justifyContent: "space-between",
          backgroundColor: "white",
          paddingTop: 8,
          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
          marginTop: -35,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <Text
              style={{ fontSize: wp(6), fontWeight: "bold", marginLeft: 25,marginTop:25}}
            >
              {item?.title}
            </Text>
            <Text
              style={{
                fontSize: wp(6),
                fontWeight: "semi-bold",
                color:'darkorange',
                marginRight: 10,
                marginLeft:20,
                marginTop:25
              }}
            >
              {item?.price}
            </Text>
          </View>
          <Text style={{ fontSize: wp(3.7), marginLeft: 10, marginRight: 10,marginTop:50 }}>
            {item?.longDescription}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 1,
            }}
          >
            <View style={{flexDirection:'row',justifyContent:'space-evenly',alignItems:'flex-start'}}>
                <ClockIcon size={wp(9) } color='skyblue' style={{marginVertical:20,marginLeft:10}}></ClockIcon>
                <View style={{justifyContent:'space-between',marginVertical:15,marginLeft:10}}>
                    <Text style={{fontWeight:'bold',color:'#333',fontSize:wp(4.5)}}>{item.duration}</Text>
                    <Text style={{fontWeight:'bold',color:'#888',fontSize:wp(3.5)}}>Duration</Text>
                    
                </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-evenly',alignItems:'flex-start'}}>
                <MapPinIcon size={wp(9) } color='#f87171' style={{marginVertical:20,marginLeft:18}}></MapPinIcon>
                <View style={{justifyContent:'space-between',marginVertical:15,marginLeft:15}}>
                    <Text style={{fontWeight:'bold',color:'#333',fontSize:wp(4.5)}}>{item.distance}</Text>
                    <Text style={{fontWeight:'bold',color:'#888',fontSize:wp(3.5)}}>Distance</Text>
                    
                </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-evenly',alignItems:'flex-start'}}>
                <SunIcon size={wp(9) } color='orange' style={{marginVertical:20,marginRight:10}}></SunIcon>
                <View style={{justifyContent:'space-between',marginVertical:15,marginRight:15}}>
                    <Text style={{fontWeight:'bold',color:'#333',fontSize:wp(4.5)}}>{item.weather}</Text>
                    <Text style={{fontWeight:'bold',color:'#888',fontSize:wp(3.5)}}>weather</Text>
                    
                </View>
            </View>
          </View>
        </ScrollView>
        <View
            style={{
              flexDirection: "row",
              justifyContent: 'space-evenly',
              // alignItems: "flex-start",
              alignContent:'space-evenly'
            }}
          >
        <TouchableOpacity>
          <View style={{ backgroundColor: "lightblue",
                    paddingHorizontal: 26,
                    padding: 12,
                    borderRadius: 20,
                    marginTop: 12,
                    elevation:15,marginBottom:40}}>
            <Text style={{fontSize:wp(4),fontWeight:'bold'}}>Book Now!</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{ backgroundColor: "orange",
                    paddingHorizontal: 26,
                    padding: 12,
                    borderRadius: 20,
                    marginTop: 12,
                    elevation:15,marginBottom:40}}>
            <Text style={{fontSize:wp(4),fontWeight:'bold'}}>Expore More</Text>
          </View>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
