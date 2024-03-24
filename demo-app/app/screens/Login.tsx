import { View, Text, StyleSheet, TextInput, ActivityIndicator, Button, KeyboardAvoidingView } from 'react-native';
import React from 'react';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const auth = FIREBASE_AUTH;

    const signIn = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
        } catch (error) {
            console.error(error);
            alert('Error signing in!');
        } finally {
            setLoading(false);
        }
    }

    const signUp = async () => {
        setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response);
            alert('Check your email!');
        } catch (error) {
            console.error(error);
            alert('Error signing up!');
        } finally {
            setLoading(false);
        }
    }

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView behavior='padding'>
                <TextInput
                    style={styles.input}
                    placeholder='email@example.com'
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize='none'
                />
                <TextInput
                    style={styles.input}
                    placeholder='**********'
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                {loading ?
                    <ActivityIndicator size='large' color={'#0000ff'} />
                    :
                    <>
                        <Button title='Login' onPress={signIn}></Button>
                        <Button title='Register' onPress={signUp}></Button>
                    </>
                }
            </KeyboardAvoidingView>
        </View>
    );
};
export default Login;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        marginVertical: 4,
        height: 50,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#fff',
    },
});