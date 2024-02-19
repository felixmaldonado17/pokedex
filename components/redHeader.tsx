import React, { useState } from "react";
import { Input } from "@rneui/base";
import { RedHeader } from "../styles/components";
import PropTypes from "prop-types";
import { View, Image, TouchableOpacity, Text } from "react-native";

interface PropsTypes {
  buttonAction: () => any,
  buttonType: string
};

export function ReadHeader(props: PropsTypes) {
  const { buttonAction, buttonType } = props;
  return (
    <View style={RedHeader.container}>
      <TouchableOpacity onPress={buttonAction}>
        <View style={RedHeader.OffButton}>
          {
            buttonType == 'OFF' ?
              <Image source={require('../assets/offButton.png')} />
              :
              <Image source={require('../assets/back.png')} />
          }

        </View>
      </TouchableOpacity>
      <View style={RedHeader.lights}>
        <Image source={require('../assets/lights.png')} />
      </View>
    </View>
  );
}


