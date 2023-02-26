import { LinearGradient } from "expo-linear-gradient"
import React, { PropsWithChildren } from "react"
import { SafeAreaView, Text, ViewStyle } from "react-native"

const BORDERRADIUS = 25

type TextProps = {
    size?: number
    faded?: boolean
    style?: ViewStyle
}

const LightText = ({ children, size = 20, faded = false, style }: PropsWithChildren<TextProps>) => {
    return (
        <Text style={{ color: faded ? '#ffffffaa' : 'white', fontSize: size, fontWeight: 'bold', textAlign: 'center', ...style }}>
            {children}
        </Text>
    )
}

const Header = () => {
    return (
        <SafeAreaView style={{ backgroundColor: 'hsl(252, 100%, 67%)', borderBottomEndRadius: BORDERRADIUS, borderBottomStartRadius: BORDERRADIUS }}>
            <LinearGradient style={{ borderBottomEndRadius: BORDERRADIUS, borderBottomStartRadius: BORDERRADIUS, padding: 20, alignItems: 'center' }} colors={['hsl(252, 100%, 67%)', 'hsl(241, 81%, 54%)']}>
                <LightText faded>Your Result</LightText>
                <LinearGradient style={{ margin: 40, aspectRatio: 1 / 1, padding: 20, borderRadius: '100%', alignItems: 'center', justifyContent: 'center' }} colors={['hsla(256, 72%, 46%, 1)', 'hsla(241, 72%, 46%, 0)']}>
                    <LightText size={64}>76</LightText>
                    <LightText faded size={16}>of 100</LightText>
                </LinearGradient>
                <LightText size={30}>Great</LightText>
                <LightText style={{ marginHorizontal: 20, marginTop: 10, marginBottom: 20 }} size={16} faded>You scored higher than 65% of the people who taken these tests.</LightText>
            </LinearGradient>
        </SafeAreaView>
    )
}

export default Header