import { Text, ScrollView, SafeAreaView, View } from "react-native"; 
import { useState } from 'react';
import { Stack, useRouter } from 'expo-router'
import { SIZES } from "../constants";
import { Nearbyjobs, Popularjobs, Welcome } from "../components";



export const Home = () => {

    const router = useRouter();

    return (
        <SafeAreaView style={{flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={{padding: SIZES.medium,}}>
                    <Welcome 
                    
                    />
                    <Popularjobs />
                    <Nearbyjobs />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}