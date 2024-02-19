import React from "react";
import { Button as RNEButton, ButtonProps, Icon } from "@rneui/base";
import { Button as StleButton, Typography } from "../styles";
import { COLORS } from "../styles/vars";


export interface IButtonProps extends ButtonProps {
  onPress: () => void
}

export const Button = {
  // eslint-disable-next-line react/display-name
  Primary: ({ onPress, title, disabled }: IButtonProps) => (
    <RNEButton
      disabled={disabled}
      onPress={() => onPress()}
      buttonStyle={StleButton.primary}
      titleStyle={StleButton.primaryText}
      disabledStyle={StleButton.disabledPrimary}
      disabledTitleStyle={StleButton.disabledPrimaryText}
      title={title}
    />
  ),
  // eslint-disable-next-line react/display-name
  Secundary: ({ title, disabled, onPress }: IButtonProps) => (
    <RNEButton
      disabled={disabled}
      onPress={() => onPress()}
      buttonStyle={StleButton.secundary}
      titleStyle={StleButton.secundaryText}
      title={title}
    />
  ),
  Start: ({ title, disabled, onPress }: IButtonProps) => (
    <RNEButton
      disabled={disabled}
      onPress={() => onPress()}
      buttonStyle={StleButton.Start}
      titleStyle={StleButton.outlineText}
      title={title}
      icon={<Icon
        name="power"
        type="ionicon"
        style={StleButton.outlineText}
        size={40}
      />}
    />
  ),
};