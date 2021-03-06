import * as React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from 'src/theme/colors';
import { capitalize } from 'src/utils/strings';

import styles from './styles';

function HeaderFormInputButton(props: {
  onPress?(): void;
  value?: string;
  title?: string;
}) {
  const { value, title, onPress } = props;

  const Title = () => {
    if (!title) {
      return null;
    }
    return <Text style={styles.title}>{title}</Text>;
  };
  const Value = () => {
    if (!value) {
      return null;
    }
    return <Text>{capitalize(value)}</Text>;
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.header}>
        <Title />
        <Value />
        <Icon color={colors.lynch} name="menu-down" size={16} />
      </View>
    </TouchableOpacity>
  );
}

export default HeaderFormInputButton;
