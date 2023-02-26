import React from "react"
import { View, Text } from "react-native"

type DashBoardCardProps = {
    label: string
    points: string | number
    hslColor: string
}

const DashboardCard = ({ label, points, hslColor }: DashBoardCardProps) => {
    return (
        <View style={{ backgroundColor: `hsla(${hslColor}, 0.1)`, marginHorizontal: 30, marginVertical: 10, borderRadius: 8, padding: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: `hsla(${hslColor}, 1)`, fontSize: 20 }}>{label}</Text>
            <Text style={{ color: '#00000088', fontSize: 20, fontWeight: 'bold' }}><Text style={{ fontWeight: 'bold', color: '#000' }}>{points} </Text>/ 100</Text>
        </View>
    )
}

export default DashboardCard