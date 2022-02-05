import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';

const Home = () => {
    return (
        <SafeAreaView style={{ marginTop: 0 }}>
            <ScrollView>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
                            Smart way
                        </Text>
                        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
                            to buy insurance.
                        </Text>
                        <View style={{ width: '80%' }}>
                            <Text style={{ fontSize: 15, textAlign: 'center', color: '#74769e' }}>
                                Compare insurance policies, rate, detail, & buy instantly in less than five minutes!
                            </Text>
                        </View>
                    </View>
                    <View style={{ width: '90%', backgroundColor: 'rgb(255, 223, 210)', justifyContent: 'center', alignItems: 'center', padding: 20, borderRadius: 15, marginTop: 15 }}>
                        <View>
                            <Image source={require('../assets/car-image.png')} />
                        </View>
                        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
                            AUTO INSURANCE
                        </Text>
                        <Text style={{ fontSize: 15, textAlign: 'center', color: '#74769e' }}>
                            Auto insurance is designed to protect yourself and others agains many various risks
                        </Text>
                    </View>
                    <View style={{ width: '90%', backgroundColor: 'rgb(212, 229, 251)', justifyContent: 'center', alignItems: 'center', padding: 20, borderRadius: 15, marginTop: 15 }}>
                        <View>
                            <Image source={require('../assets/life.png')} />
                        </View>
                        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
                            LIFE INSURANCE
                        </Text>
                        <Text style={{ fontSize: 15, textAlign: 'center', color: '#74769e' }}>
                            Prepare for your family's future in the case of an unexpected tragedy. Insurance helps you.
                        </Text>
                    </View>
                    <View style={{ width: '90%', backgroundColor: 'rgb(255, 223, 210)', justifyContent: 'center', alignItems: 'center', padding: 20, borderRadius: 15, marginTop: 15 }}>
                        <View>
                            <Image source={require('../assets/car-image.png')} />
                        </View>
                        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
                            AUTO INSURANCE
                        </Text>
                        <Text style={{ fontSize: 15, textAlign: 'center', color: '#74769e' }}>
                            Auto insurance is designed to protect yourself and others agains many various risks

                        </Text>
                    </View>
                    <View style={{ width: '90%', backgroundColor: 'rgb(255, 223, 210)', justifyContent: 'center', alignItems: 'center', padding: 20, borderRadius: 15, marginTop: 15 }}>
                        <View>
                            <Image source={require('../assets/car-image.png')} />
                        </View>
                        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
                            AUTO INSURANCE
                        </Text>
                        <Text style={{ fontSize: 15, textAlign: 'center', color: '#74769e' }}>
                            Auto insurance is designed to protect yourself and others agains many various risks

                        </Text>
                    </View>
                </View>
            </ScrollView>

        </SafeAreaView>

    );
};

export default Home;