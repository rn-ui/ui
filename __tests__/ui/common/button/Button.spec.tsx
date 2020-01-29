import React from 'react';
import {
  Image,
  ImageProps,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import {
  render,
  shallow,
  fireEvent,
  RenderAPI,
} from 'react-native-testing-library';
import Theme, {ThemeProvider} from '@southem/theme';
import {
  darkTheme,
  Button,
  ButtonProps,
} from '@southem/ui';

Theme.registerDefaultTheme(darkTheme);

const Mock = (props?: ButtonProps): React.ReactElement<{}> => {
  return (
    <ThemeProvider
      theme={'default'}>
      <Button {...props} />
    </ThemeProvider>
  );
};

const renderComponent = (props?: ButtonProps): RenderAPI => {
  return render(
    <Mock {...props} />,
  );
};

describe('@button: matches snapshot', () => {

  describe('* interaction', () => {
    it('* stateless', () => {
      const component: RenderAPI = renderComponent();
      const {output} = shallow(component.getByType(Button));

      expect(output).toMatchSnapshot();
    });
  });

  describe('* appearance', () => {

    const iconSource: ImageSourcePropType = {uri: 'https://akveo.github.io/eva-icons/fill/png/128/star.png'};

    const icon = (style): React.ReactElement<ImageProps> => {
      return (
        <Image
          source={iconSource}
          style={style}
        />
      );
    };

    const text: React.ReactText = 'BUTTON';

    it('* empty', () => {
      const component: RenderAPI = renderComponent();
      const {output} = shallow(component.getByType(Button));

      expect(output).toMatchSnapshot();
    });

    it('* icon', () => {
      // @ts-ignore
      const component: RenderAPI = renderComponent({
        icon,
      });
      const {output} = shallow(component.getByType(Button));

      expect(output).toMatchSnapshot();
    });

    it('* text', () => {
      // @ts-ignore
      const component: RenderAPI = renderComponent({
        children: text,
      });
      const {output} = shallow(component.getByType(Button));

      expect(output).toMatchSnapshot();
    });

    it('* icon and text', () => {
      // @ts-ignore
      const component: RenderAPI = renderComponent({
        icon,
        children: text,
      });
      const {output} = shallow(component.getByType(Button));

      expect(output).toMatchSnapshot();
    });

    it('* icon and text (styled)', () => {
      // @ts-ignore
      const component: RenderAPI = renderComponent({
        icon,
        children: text,
        size: 'big',
        textStyle: {
          fontSize: 32,
          lineHeight: 34,
        },
      });
      const {output} = shallow(component.getByType(Button));

      expect(output).toMatchSnapshot();
    });
  });
});

describe('@button: component checks', () => {

  it('* emits onPress', () => {
    const onPress = jest.fn();

    // @ts-ignore
    const component: RenderAPI = renderComponent({
      onPress,
    });

    fireEvent.press(component.getByType(TouchableOpacity));

    expect(onPress).toBeCalled();
  });
});
