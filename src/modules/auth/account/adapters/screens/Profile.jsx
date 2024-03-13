import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getAuth, signOut, updateProfile } from "firebase/auth";
import { Image, Button } from '@rneui/base';
import { Avatar } from '@rneui/themed';
import PhotoProfile from '../components/PhotoProfile';
import ActionProfile from '../components/ActionProfile';

export default function Profile(props) {
    const { navigation } = props;
    const [userProfile, setUserProfile] = useState(null);
    const auth = getAuth();
    const user = auth.currentUser

    useEffect(() => {
        if (user !== null) {
            user.providerData.forEach((profile) => {
                setUserProfile(profile)
            });
        }
    }, [])

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigation.navigation("UseGuest")
        }).catch((error) => {
            // An error happened.
        });
    };

    return (
        <View style={styles.container}>
            {
                userProfile && (<PhotoProfile infoUser={userProfile} />)
            }
            {
                userProfile && <ActionProfile infoUser={userProfile} />
            }
            <Button
                title={"Cerrar Sesion"}
                type='clear'
                onPress={handleSignOut}
                buttonStyle={{ backgroundColor: '#DDDDDD' }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16
    },

});
