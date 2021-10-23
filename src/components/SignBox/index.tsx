import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { Button } from '../Button';
import { COLORS } from '../../theme';
import { useAuth } from '../../hooks/auth';

export function SignBox() {
  const {signIn, isSigningIn} = useAuth();

  return (
    <View style={styles.container}>
      <Button
        title='Entrar com o GITHUB'
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
        icon='github'
        onPress={signIn}
        isLoading={isSigningIn}
      />
    </View>
  );
}
