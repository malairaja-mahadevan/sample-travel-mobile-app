import React from "react";
import { useDispatch } from "react-redux";
import { StyleSheet, SafeAreaView, View, Image, Text } from "react-native";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import NavFavourites from "../components/NavFavourites";
import NavOptions from "../components/NavOptions";

import { GOOGLE_MAPS_APIKEY } from "@env";

import { setDestination, setOrigin } from "../slices/navSlice";

const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{ width: 120, height: 120, resizeMode: "contain" }}
          source={require("../assets/uber.png")}
        />
        <Text style={tw`text-center py-5 text-xl`}>Choose Pick up point</Text>
        <GooglePlacesAutocomplete
          placeholder="Pick up point"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );

            dispatch(setDestination(null));
          }}
          enablePoweredByContainer={false}
          fetchDetails={true}
          returnKeyType={"search"}
          minLength={2}
          nearbyPlacesAPI="GooglePlacesSearch"
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          debounce={400}
        />
        <NavOptions />
        <NavFavourites />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
