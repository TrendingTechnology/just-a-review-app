import { StyleSheet, ViewStyle } from 'react-native';

export default StyleSheet.create<{
  separator: ViewStyle;
  header: ViewStyle;
}>({
  separator: { height: 20 },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#9f9f9f',
    backgroundColor: '#f6f6f6',
  },
});