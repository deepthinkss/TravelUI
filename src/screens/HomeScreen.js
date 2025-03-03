import React from 'react';
import {
  Image,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import Categories from '../components/categories';
import SortCategories from '../components/sortCategories';
import Desitination from '../components/destinations';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 20, marginTop: 40 }}
      >
        <View
          style={{
            marginHorizontal: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 40,
          }}
        >
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Lets Discover</Text>
          <TouchableOpacity>
            <Image
              source={require('../assets/avatar.jpg')}
              style={{
                height: wp(12),
                width: wp(12),
                borderRadius: wp(6),
                marginLeft: 10,
              }}
            />
          </TouchableOpacity>
        </View>
        {/* search bar code */}
        <View style={{ marginHorizontal: 10, marginBottom: 10 }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#f2f2f2',
              padding: 4,
              borderRadius: 18,
              marginHorizontal: 15,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 6,
                backgroundColor: 'black',
              }}
            ></View>
            <MagnifyingGlassIcon name="search" size={20} color="black" />
            <TextInput
              placeholder="Search Desitination"
              style={{
                fontSize: wp(4),
                marginLeft: 10,
                padding: 10,
                flex: 1,
                marginBottom: 1,
                paddingLeft: 5,
              }}
            />
          </View>
        </View>
        {/* category */}
        <View>
          <Categories />
        </View>
        {/* sort categories */}
        <View>
          <SortCategories />
        </View>
        {/* destinations */}
        <View>
          <Desitination />
        </View>
        {/* see all categories */}
        
      </ScrollView>
    </SafeAreaView>
  );
}
