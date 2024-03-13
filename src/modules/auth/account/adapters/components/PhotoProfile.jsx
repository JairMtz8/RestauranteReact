import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Avatar } from '@rneui/base'
import * as ImagePicker from 'expo-image-picker'
import * as MediaLibrary from 'expo-media-library';
import { getAuth, updateProfile } from 'firebase/auth'
import { getStorage, ref, uploadBytes, getDownloadURL, storage, } from 'firebase/storage'
import userPhoto from '../../../../../../assets/img/usuario.png'
import Loading from '../../../../../kernel/components/Loading';

export default function PhotoProfile(props) {

    const { infoUser: { uid, photoURL, displayName, email } } = props;
    const [loading, setLoading] = useState(false)

    const uploadPhotoUrl = () => {

        const storage = getStorage();
        getDownloadURL(ref(storage, `avatar/${uid}`)).then((url) => {
            const auth = getAuth();
            updateProfile(auth.currentUser, {
                photoURL: url,
            });
        });

    };

    const uploadImage = async (uri) => {
        try {
            const response = await fetch(uri);
            const blob = await response.blob();
            const storageRef = ref(storage, `avatar/${uid}`);
            return uploadBytes(storageRef, blob);
        } catch (error) {
            console.log("error", error)
        }

    };

    const changeAvatar = async () => {
        const resultPermissions = await MediaLibrary.requestPermissionsAsync(MediaLibrary.MediaType.photoLibrary)
        if (resultPermissions.status === "granted") {

            const result = await ImagePicker.launchCameraAsync({
                allowsEditing: true,
                aspect: [4, 3],
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 1,
                //base64: true
            });
            if (!result.canceled) {
                setLoading(true);
                uploadImage(result.assets[0].uri)
                    .then(() => {
                        uploadPhotoUrl();
                    })
                    .catch((error) => {
                        alert("Subir imagen");
                        console.log("Error al subir la imagen", error);
                    }).finally(() => {
                        setLoading(false);
                    })
            }
        } else {
            alert("Necesitas dar el permiso de tu camara");
            return;
        }
    };

    return (
        <View>
            <View style={styles.row}>

                <Avatar
                    size={64}
                    rounded
                    source={photoURL ? { uri: photoURL } : userPhoto}
                    icon={{ name: 'adb', type: 'material' }}
                    containerStyle={{ backgroundColor: 'orange' }}
                >
                    <Avatar.Accessory
                        size={24}
                        onPress={changeAvatar}
                    />
                </Avatar>
                <View style={styles.column}>

                    <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{displayName || 'Anonimo'}  </Text>
                    <Text style={{ fontSize: 12 }}>{email || ''}</Text>

                </View>
            </View>
            <Loading isShow={loading} title="Cambiando foto de perfil" />
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        marginBottom: 16,
        padding: 16
    },
    column: {
        flexDirection: 'column',
        marginLeft: 16
    }
})