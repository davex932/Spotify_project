import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors, Radius, Typography, Spacing } from '../theme';

export default function RegisterScreen({ navigation }: any) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.logoContainer}>
          <Text style={styles.logoTitle}>Inscription</Text>
          <Text style={styles.logoSubtitle}>
            Rejoignez la révolution musicale
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Nom complet</Text>
          <View style={styles.inputWrapper}>
            <Icon
              name="person-outline"
              size={18}
              color={Colors.textMuted}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Charles Konan"
              placeholderTextColor={Colors.textMuted}
              value={fullName}
              onChangeText={setFullName}
            />
          </View>

          <Text style={styles.label}>Email</Text>
          <View style={styles.inputWrapper}>
            <Icon
              name="at-outline"
              size={18}
              color={Colors.textMuted}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="nom@exemple.com"
              placeholderTextColor={Colors.textMuted}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <Text style={styles.label}>Mot de passe</Text>
          <View style={styles.inputWrapper}>
            <Icon
              name="lock-closed-outline"
              size={18}
              color={Colors.textMuted}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="••••••••"
              placeholderTextColor={Colors.textMuted}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('MainTabs')}
            activeOpacity={0.8}
          >
            <Text style={styles.btnText}>Créer un compte</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Vous avez déjà un compte ? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.footerLink}>Se connecter</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  scrollContent: {
    padding: Spacing.containerPadding,
    flexGrow: 1,
    justifyContent: 'center',
  },
  logoContainer: { alignItems: 'center', marginBottom: 24 },
  logoTitle: { ...Typography.headlineLg, color: Colors.primary },
  logoSubtitle: {
    ...Typography.bodySm,
    color: Colors.textMuted,
    textAlign: 'center',
    marginTop: 4,
  },
  card: {
    backgroundColor: Colors.surface,
    padding: Spacing.containerPadding,
    borderRadius: Radius.xl,
    borderWidth: 1,
    borderColor: Colors.borderSubtle,
  },
  label: {
    ...Typography.labelMd,
    color: Colors.onSurfaceVariant,
    marginBottom: 6,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.background,
    borderRadius: Radius.md,
    borderWidth: 1,
    borderColor: Colors.outlineVariant,
    paddingHorizontal: 12,
    height: 48,
    marginBottom: 16,
  },
  inputIcon: { marginRight: 8 },
  input: { flex: 1, color: Colors.onSurface, ...Typography.bodySm },
  btn: {
    backgroundColor: Colors.primary,
    height: 48,
    borderRadius: Radius.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  btnText: { ...Typography.labelMd, fontSize: 14, color: '#000' },
  footer: { flexDirection: 'row', justifyContent: 'center', marginTop: 24 },
  footerText: { ...Typography.bodySm, color: Colors.textMuted },
  footerLink: {
    ...Typography.bodySm,
    fontFamily: 'Inter-Bold',
    color: Colors.primary,
  },
});
