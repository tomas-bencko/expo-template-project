import React from 'react';
import Svg, { type SvgProps } from 'react-native-svg';

import type { ViewStyle } from 'react-native';

export interface IconProps extends SvgProps {
  size?: number;
  color?: string;
  style?: ViewStyle;
}

interface BaseIconProps extends IconProps {
  children: React.ReactNode;
  viewBox?: string;
}

export function BaseIcon({
  size = 42,
  color: _color = 'currentColor',
  style,
  children,
  viewBox = '0 0 16 16',
  ...props
}: BaseIconProps) {
  const iconStyle = [
    {
      width: size,
      height: size,
      flexShrink: 0,
    },
    style,
  ];

  return (
    <Svg width={size} height={size} viewBox={viewBox} style={iconStyle} {...props}>
      {children}
    </Svg>
  );
}
