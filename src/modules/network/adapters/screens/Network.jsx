import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const Network = () => {
    const [admins, setAdmins] = useState([]);

    useEffect(() => {
        const fetchAdmins = async () => {
            try {
                const response = await axios.get('http://192.168.100.93:8080/apisiprev1/admin/');
                setAdmins(response.data);
            } catch (error) {
                console.error('Error fetching admins:', error);
            }
        };

        fetchAdmins();
    }, []); // El segundo parámetro [] asegura que useEffect se ejecute solo una vez al montar el componente

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Administradores</Text>
            <View>
                {admins.map(admin => (
                    <Text key={admin.id}>{admin.name} {admin.apellido}</Text>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default Network;