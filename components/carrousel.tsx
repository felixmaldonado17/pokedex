import React from "react";
import { View, Text, Image } from "react-native";
import Swiper from "react-native-swiper";
import { Carrousel as Style } from "../styles";
import { PokemonChainItem } from "../interfaces/pokemonChainItem";
import { Icon } from "@rneui/base";
import { BarChart } from "react-native-gifted-charts";
import { barDataItem } from "react-native-gifted-charts";

interface PropsTypes {
  slide1Info: PokemonChainItem[]
  barChartData: barDataItem[]
};

export function Carrousel(props: PropsTypes) {
  const { slide1Info, barChartData } = props

  return (
    <Swiper
      showsButtons={false}
      showsPagination={true}
      containerStyle={Style.container}
      loop={false}
      dot={<View style={Style.dot} />}
      activeDot={<View style={[Style.dot, Style.activeDot]} />}
    >
      {slide1Info.length > 0 && <View style={Style.slide}>
        <Text style={Style.slideTitle}>Evolution Chain</Text>
        <View style={Style.evolutionChainContainer}>
          {
            slide1Info.map((si) =>
              <View key={si.from.name} style={Style.evolutionChainItemContainer}>
                <View style={Style.imageContainer}>
                  <Image style={Style.image} source={{ uri: si.from.url }} />
                </View>
                <View style={Style.separator}>
                  <Icon
                    name="arrow-forward"
                    type="ionicon"
                    style={Style.separatorIcon}
                    size={24}
                  />
                  <Text style={Style.separatorText}> {`Lvl ${si.level}`}</Text>
                </View >
                <View style={Style.imageContainer}>
                  <Image style={Style.image} source={{ uri: si.to.url }} />
                </View>
              </View>)
          }
        </View>
      </View>}

      <View style={Style.slide}>
        <Text style={Style.slideTitle}>Base Stats</Text>
        <View style={Style.rotatedView}>
          <BarChart data={barChartData} horizontal showValuesAsTopLabel maxValue={100} hideAxesAndRules xAxisLabelTextStyle={Style.labelStyle} barStyle={Style.barStyle} />
        </View>
      </View>
    </Swiper>
  );
}


