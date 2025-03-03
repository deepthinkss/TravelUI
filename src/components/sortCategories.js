import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { sortCategoryData } from "../constants";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function SortCategories() {
  const [activeSort, setActiveSort] = React.useState("popular");
  return (
    <View
      style={{
        marginHorizontal: 10,
        marginBottom: 10,
        backgroundColor: "#f5f5f5",
        padding: 10,
        // elevation:50,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 14,
        paddingHorizontal: 4,
        marginTop: 18,
        elevation: 5
      }}
    >
      {sortCategoryData.map((sort, index) => {
        let isActive = activeSort === sort;
        let activeBtn = isActive ? "#fff" : "#f5f5f5";
      
        return (
          <TouchableOpacity
            onPress={() => setActiveSort(sort)}
            key={index}
            style={{
              paddingHorizontal: 15,
              marginRight: 10,
              backgroundColor: (activeBtn = isActive ? "#fff" : "#f5f5f5"),
              paddingVertical: 5,
              borderRadius: 10,
              elevation:(isActive?5:0)
            }}
          >
            <Text style={{fontSize:wp(3.8),color:isActive?'orange':'#333',fontWeight:'bold'}}>{sort}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
