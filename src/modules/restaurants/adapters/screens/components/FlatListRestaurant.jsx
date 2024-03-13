import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AirbnbRating, Image } from '@rneui/base';

export default function FlatListRestaurant(props) {
    const { image, title, description, rating } = props
    return (
        <View style={styles.listRestaurants}>
            <Image
                source={{ uri: `${image}` }}
                style={styles.image}
            />
            <View style={styles.containerText}>
                <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                    <Text style={styles.title}> {title}</Text>
                    <AirbnbRating
                        count={5}
                        isDisabled={true}
                        defaultRating={rating}
                        size={12}
                        showRating={false}
                    />
                </View>

                <Text style={styles.description}>
                    {description}
                </Text>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({

    listRestaurants: {
        flex: 1,
        flexDirection: "row",
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        padding: 8
    },
    image: {
        width: 115,
        height: 115,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        marginRight: 16
    },
    description: {
        fontSize: 12,
    },
    containerText: {
        flex: 1,
        flexDirection: 'column',
        padding: 8
    },

})