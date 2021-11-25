import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../../../assets/theme/colors';
import styles from './styles';

const Message = ({
  message,
  onDismiss,
  retry,
  retryFn,
  primary,
  danger,
  info,
  success,
}) => {
  const [userDismissed, setDismissed] = useState(false);
  const getBackgroundColor = () => {
    if (primary) {
      return colors.primary;
    }
    if (danger) {
      return colors.danger;
    }
    if (success) {
      return colors.success;
    }
    if (info) {
      return colors.secondary;
    }
  };
  return (
    <>
      {userDismissed ? null : (
        <TouchableOpacity
          style={[styles.wrapper, { backgroundColor: getBackgroundColor() }]}
        >
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text
              style={{
                color: colors.white,
              }}
            >
              {message}
            </Text>
            {retry && !typeof onDismiss === 'function' && (
              <TouchableOpacity onPress={retryFn}>
                <Text
                  style={{
                    color: colors.white,
                  }}
                >
                  Retry
                </Text>
              </TouchableOpacity>
            )}
            {typeof onDismiss === 'function' && (
              <TouchableOpacity
                onPress={() => {
                  setDismissed(true);
                  onDismiss;
                }}
              >
                <Text
                  style={{
                    color: colors.white,
                  }}
                >
                  X
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default Message;
