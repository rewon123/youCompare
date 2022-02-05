import React from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const SideMenu = () => {
    return (
        <ScrollView style={styles.sidebar}>
            {/* <ImageBackground source={require('../../assets/drawable/header.jpg')}
                style={{ width: undefined, padding: 15, paddingTop: 100 }}>
                <Text style={styles.name}>Welcome!</Text>
            </ImageBackground> */}
            <View style={{ flexDirection: 'row' }}>
                <Image style={{ width: '60%', height: 26.5, }} source={require('../../assets/Group.png')} />
                {/* <Image style={{ width: 60, height: 20, }} source={require('../../assets/Group.png')} /> */}
            </View>


            <TouchableOpacity style={{ backgroundColor: '#1482d2', width: '100%', marginTop: 40, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
                <Text style={{ fontSize:15,color:'white'}}>LOGIN</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row' }}>
                {/* <Image style={styles.image} source={require('../../assets/drawable/signin.png')} /> */}
                <Text style={styles.categories}>Insurance Products {'>'}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                {/* <Image style={styles.image} source={require('../../assets/order_history.png')} /> */}
                <Text style={styles.categories}>Policy Renew {'>'} </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                {/* <Image style={styles.image} source={require('../../assets/track_order.png')} /> */}
                <Text style={styles.categories}>File a Claim</Text>
            </View>
            {/* <View style={{ flexDirection: 'row' }}>
                <Image style={styles.image} source={require('../../assets/request_product.png')} />
                <Text style={styles.categories}>Request Product</Text>
            </View>
            <View
                style={{
                    borderBottomColor: 'lightgrey',
                    borderBottomWidth: 0.3,
                    marginTop: 20
                }}
            />
            <Text style={styles.subHeading}>Others</Text>
            <View style={{ flexDirection: 'row' }}>
                <Image style={styles.image} source={require('../../assets/privacy_policy.png')} />
                <Text style={styles.categories}>Privacy Policy</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Image style={styles.image} source={require('../../assets/share.png')} />
                <Text style={styles.categories}>Share this app</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Image style={styles.image} source={require('../../assets/contact.png')} />
                <Text style={styles.categories}>Contact us</Text>
            </View>
            <View
                style={{
                    borderBottomColor: 'lightgrey',
                    borderBottomWidth: 0.3,
                    marginTop: 20
                }}
            /> */}
            {/* <View style={{ flexDirection: 'row', marginHorizontal: '25%', marginTop: 12 }}>
            <Image style={styles.SocialImage} source={require('../../assets/drawable/facebook.png')} />
                <Image style={styles.SocialImage} source={require('../../assets/drawable/twiter.png')} />
                <Image style={styles.SocialImage} source={require('../../assets/drawable/youtube.png')} />
                <Image style={styles.SocialImage} source={require('../../assets/drawable/web.png')} />
            </View> */}

        </ScrollView >
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    name: {
        color: "black",
        fontSize: 30,
        fontWeight: "bold",
    }
    ,
    sidebar: {
        backgroundColor: 'white',
        padding: 20,
    },
    categories: {
        color: "#rgba(0, 0, 0, 0.9);",
        fontSize: 16,
        padding: 21,
        fontWeight: 'bold',
        fontFamily: "Cochin"
    },
    subHeading: {
        color: "gray",
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 25,
        paddingHorizontal: 10
    },
    SocialImage: {
        margin: 4,
        width: 28,
        height: 28
    },
    image:
        { marginTop: 23, marginHorizontal: 19, width: 24, height: 24 }

})


export default SideMenu;