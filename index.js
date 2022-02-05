import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { Navigation } from 'react-native-navigation';
import SideMenu from './components/sidebar/SideMenu';
import TopBar from './components/topBar/TopBar';
import Home from './view/Home';

Navigation.registerComponent('Home', () => Home);
Navigation.registerComponent('Side', () => SideMenu);
Navigation.registerComponent('topbar', () => TopBar);

Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.setRoot({
        root: {
            sideMenu: {
                center: {
                    stack: {
                        children: [
                            {
                                component: {
                                    name: 'Home',
                                    options: {
                                        topBar: {   
                                            leftButtons: {
                                                id: 'sideBar',
                                                icon: require('./assets/blackMenu.png')
                                            },
                                            rightButtons: {
                                                id: 'cartIcon',
                                                icon: require('./assets/login.png')
                                            },
                                            title: {
                                                component: {
                                                    name: 'topbar'
                                                }
                                            }
                                        }
                                    },
                                }
                            },
                        ]
                    }
                },
                left: {
                    component: {
                        name: 'Side'
                    }
                }
            }
        }
    });
});