import React from 'react';
import { View, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { styles } from './styles';
import { Header } from '../../components/Header';
import { MessaList } from '../../components/MessaList';
import { SignBox } from '../../components/SignBox';
import { SendMenssageForm } from '../../components/SendMenssageForm';
import { useAuth } from '../../hooks/auth';

export function Home() {
  const { user } = useAuth();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
    <View style={styles.container}>
      <Header />
      <MessaList />
      {user ? <SendMenssageForm /> : <SignBox />}
    </View>
    </KeyboardAvoidingView>
  );
}
