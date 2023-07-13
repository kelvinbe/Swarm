import React from 'react';
import { makeStyles, ThemeConsumer } from '@rneui/themed';
import { Input, InputProps } from '@rneui/base';

interface IProps {
  fullWidth?: boolean;
  width?: number | string;
  placeholder?: string;
}

type Props = IProps & InputProps;

const useStyles = makeStyles((theme, props: Props) => {
  return {
    containerStyle: {
      borderWidth: 1,
      borderColor: theme.colors.stroke1,
      borderRadius: 8,
      padding: 0,
      margin: 0,
      fontSize: 16,
      lineHeight: 24,
      fontWeight: '400',
      color: theme.colors.grey3,
      width: props?.fullWidth ? '100%' : props?.width ? props.width : 'auto',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputStyle: {
      borderWidth: 0,
      paddingHorizontal: 20,
      paddingLeft: 10,
      margin: 0,
      marginTop: 10,
      paddingTop: 5,
    },
    inputContainerStyle: {
      borderBottomWidth: 0,
      margin: 0,
      padding: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    style: {
      borderWidth: 0,
      margin: 0,
      padding: 0,
    },
    errorStyle: {
      height: 0,
      margin: 0,
    },
    container: {
      width: props?.fullWidth ? '100%' : props?.width ? props.width : 'auto',
    },
    labelStyle: {
      color: theme.colors.text,
      width: '100%',
      fontWeight: '700',
      fontSize: 16,
    },
  };
});

const BaseInput = (props: Props) => {
  const styles = useStyles(props);
  const { width, fullWidth, containerStyle, labelStyle, placeholder, ref, ...rest } = props
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <Input
          inputContainerStyle={styles.inputContainerStyle}
          style={styles.style}
          errorStyle={styles.errorStyle}
          containerStyle={[containerStyle, styles.containerStyle]}
          placeholder={placeholder?placeholder:''}
          placeholderTextColor={theme.colors.grey3}
          underlineColorAndroid="transparent"
          labelStyle={[labelStyle, styles.labelStyle]}
          {...rest}
        />
      )}
    </ThemeConsumer>
  );
};

export default BaseInput;

