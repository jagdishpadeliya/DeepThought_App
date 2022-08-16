import React, { useState } from "react";
import { View,FlatList, } from 'react-native'
import Card from "./Card";
import data from "../data";
import TextInput from "./TextInput";
const Explore = () => {
    const [userData, setUserData] = useState(data);
    return (
        <View style={{ flex: 1, padding: 10,backgroundColor:"white" }}>
            {/* <TextInput/> */}
            <FlatList
                data={userData}
                renderItem={(props)=><Card {...props}/>}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                // ListHeaderComponent={() =><TextInput/>}
            />
        </View>
    )
}

export default Explore;