import React from "react";
import { FlatList, Text, TouchableOpacity, View, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

import { selectOrigin } from "../slices/navSlice";

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: require("../assets/1988880_car_front_vehicle_icon.png"),
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order food",
    image: require("../assets/6457565_delivery_food_internet_online_order_icon.png"),
    screen: "OrderScreen",
  },
];

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
          disabled={!origin}
        >
          <View style={tw`${!origin && "opacity-20"}`}>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={item.image}
            />
            <Text style={tw`mt-2 text-lg text-center font-semibold`}>
              {item.title}
            </Text>
            <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4 ml-auto mr-auto`}
              name="arrowright"
              color="white"
              type="antdesign"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
