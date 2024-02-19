import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import { Typography as TypographyStyle } from "../styles";

interface ITypography {
  message: string
  color?: string
}

export const Typography = {
  // eslint-disable-next-line react/display-name
  HeadLine: ({ message, color }: ITypography) => (
    <Text style={{ ...TypographyStyle.headLine, fontWeight: "bold", color: color  }}>{message}</Text>
  ),
  // eslint-disable-next-line react/display-name
  SubtitleLarge: ({ message, color }:ITypography) => <Text style={{ ...TypographyStyle.subtitleLarge,  color: color}}>{message}</Text>,
  // eslint-disable-next-line react/display-name
  SubtitleMedium: ({ message, color }:ITypography) => <Text style={{ ...TypographyStyle.subtitleMedium ,  color: color}}>{message}</Text>,
  // eslint-disable-next-line react/display-name
  BodyMedium: ({ message, color }:ITypography) => <Text style={{ ...TypographyStyle.bodyMedium,  color: color}}>{message}</Text>,
  // eslint-disable-next-line react/display-name
  Caption: ({ message, color }:ITypography) => <Text style={{ ...TypographyStyle.caption,  color: color}}>{message}</Text>,
  // eslint-disable-next-line react/display-name
  Buttons: ({ message, color }:ITypography) => <Text style={TypographyStyle.buttons}>{message}</Text>,
};

