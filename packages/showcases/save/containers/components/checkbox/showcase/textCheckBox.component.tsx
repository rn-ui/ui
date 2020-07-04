import React from 'react';
import {
  CheckBox,
  CheckBoxProps,
} from '@southem/ui';

interface CheckBoxShowcaseComponentState {
  checked: boolean;
}

class CheckBoxShowcaseComponent extends React.Component<CheckBoxProps, CheckBoxShowcaseComponentState> {

  static defaultProps: CheckBoxProps = {
    checked: true,
  };

  public state: CheckBoxShowcaseComponentState = {
    // @ts-ignore
    checked: this.props.checked,
  };

  private onChange = (checked: boolean) => {
    this.setState({ checked });
  };

  public render(): React.ReactElement<CheckBoxProps> {
    return (
      <CheckBox
        {...this.props}
        checked={this.state.checked}
        onChange={this.onChange}
      />
    );
  }
}

export const TextCheckBox = (props?: CheckBoxProps): React.ReactElement<CheckBoxProps> => {
  return (
    <CheckBoxShowcaseComponent
      text='Place your text'
      {...props}
    />
  );
};