import { FunctionComponent } from 'react';
import { Text, TextProps } from 'react-native';
import { useTheme } from 'styled-components/native';

type MyTextProps = TextProps & {
  fontFamily?: string;
  children: string;
};

export const MyText: FunctionComponent<MyTextProps> = (props) => {
  const { FONT_FAMILY } = useTheme();
  return (
    <Text {...props} style={[{ fontFamily: FONT_FAMILY.REGULAR }, props.style]}>
      {props.children}
    </Text>
  );
};

// TODO: Should we remove this component and modify the <MyText> to do the same?
export const MyTextBold: FunctionComponent<MyTextProps> = (props) => {
  const { FONT_FAMILY } = useTheme();
  const texts = props.children?.toString().split(/(<bold>[\S\s]*?<bold>)/);
  const newText = texts.map((text, index: number) => {
    if (text.startsWith('<bold>')) {
      text = text.replace(/<bold>/g, '');
      return <MyText style={{ fontFamily: props.fontFamily ?? FONT_FAMILY.BOLD }} key={index}>{text}</MyText>;
    }

    return <MyText key={index}>{text}</MyText>;
  });

  return <Text {...props}>{newText}</Text>;
};