import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { categoryData } from "../constants/index";
import { useNavigation } from '@react-navigation/native';

export default function Categories() {
  const navigation = useNavigation();

  return (
    <View style={{ marginHorizontal: 10, marginBottom: 10 }}>
      <View style={{ marginHorizontal: 5, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Text style={{ fontSize: wp(4), fontWeight: 'semi-bold', color: '700', marginHorizontal: 18, marginTop: 10 }}>Categories</Text>
        <View>
          <TouchableOpacity >
            <Text style={{ fontSize: wp(4), color: 'orange', textAlign: 'center', marginVertical: 20 }}>
              See All
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={{ marginTop: 10 }} horizontal contentContainerStyle={{ paddingHorizontal: 15 }} showsHorizontalScrollIndicator={false}>
        {categoryData.map((cat, index) => {
          return (
            <TouchableOpacity key={index} style={{ alignItems: 'center', marginRight: 20 }}>
              <Image source={cat.image} style={{ height: hp(10), width: wp(20), borderRadius: 20, marginTop: 20 }} />
              <Text style={{ fontSize: wp(3.5), color: 'gray', fontWeight: "bold", marginTop: 10 }}>{cat.title}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}