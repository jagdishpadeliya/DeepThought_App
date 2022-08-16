import React, { useState } from "react";
import { View} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
const TextInput = () => {
    const [search, setSearch] = useState();
    return (
        <View style={{ width: 250, borderWidth: 1, borderRadius: 20, display: 'flex', flexDirection: "row", alignItems: "center", borderColor: 'grey', marginBottom: 15 }}>
            <View style={{ width: 210 }}>
                <TextInput
                    value={search}
                    onChangeText={text => setSearch(text)}
                    placeholder="Search project name"
                    style={{ paddingLeft: 10, fontSize: 18, fontWeight: '600', }}
                />
            </View>
            <View>
                <Ionicons name="search" size={30} />
            </View>
        </View>
    )
}

export default TextInput;