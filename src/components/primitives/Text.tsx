import React from 'react';
import { Text as RNText, type TextProps as RNTextProps } from 'react-native';

import type { AlignToken, ColorToken, SizeToken, WeightToken } from '../../types/designTokens';

interface TextProps extends Omit<RNTextProps, 'className'> {
  weight?: WeightToken;
  size?: SizeToken;
  color?: ColorToken;
  align?: AlignToken;
  className?: RNTextProps['className'];
}

const FONT_FAMILY_MAP: Record<WeightToken, string> = {
  normal: 'font-roboto',
  medium: 'font-roboto-medium',
  bold: 'font-roboto-bold',
};

export function Text({ weight = 'normal', size = 'base', color, align, className, ...props }: TextProps) {
  const fontFamily = FONT_FAMILY_MAP[weight];
  const textSize = `text-${size}`;
  const colorClass = color && `color-${color}`;
  const alignClass = align && `text-${align}`;
  const classList = [fontFamily, textSize, colorClass, alignClass, className].filter(Boolean).join(' ');

  return <RNText className={classList} {...props} />;
}
