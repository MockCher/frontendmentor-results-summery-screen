import React from "react"
import { SafeAreaView, View, Text } from "react-native"
import DashboardCard from "./src/DashBoardCard"
import Header from "./src/Header"

const App = () => {
  return (
    <View>
      <Header />
      <Text style={{ fontSize: 24, marginHorizontal: 30, marginVertical: 20 }}>Summery</Text>
      <DashboardCard label='Reaction' points='80' hslColor='0, 100%, 67%' />
      <DashboardCard label='Memory' points='92' hslColor='39, 100%, 56%' />
      <DashboardCard label='Verbal' points='61' hslColor='166, 100%, 37%' />
      <DashboardCard label='Visual' points='72' hslColor='234, 85%, 45%' />
    </View>
  )
}

export default App