import React from "react";
import { View, Text, Image, Button, TouchableOpacity } from "react-native";
const Card = ({item}) => {
    const {topicName, topicDescription, learningOutcome, preRequisites, projectAuthor, imgLink} = item;
    return (
        <View style={{ width: "100%", overflow: 'hidden', borderWidth: 1, borderRadius: 10, padding: 10, borderColor: 'grey', marginBottom: 20 }}>
            <View style={{ display: 'flex', flexDirection: "row", }}>
                <View style={{}}>
                    <Image source={require("../first.jpeg")} style={{ aspectRatio: 1, width: 150, height: 150, borderRadius: 20 }} />
                </View>
                <View style={{ paddingLeft: 25, marginTop: 15 }}>
                    <Text style={{ fontWeight: "bold", color: 'black', marginBottom: 10 }}>Selection by</Text>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: "center" }}>
                        <View>
                            <Image source={require("../first.jpeg")} style={{ width: 50, height: 50, borderRadius: 25 }} />
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Text>{projectAuthor}</Text>
                            <Text style={{ color: '#0029ff' }}>DeepThought</Text>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <View style={{ width: 90, height: 40, backgroundColor: "#0029ff", borderRadius: 17, display: 'flex', justifyContent: 'center', alignItems: "center", marginTop: 10 }}>
                            <Text style={{ color: "white", fontSize: 15 }}>Explore</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ marginTop: 10 }}>
                <View>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>{topicName}</Text>
                    <Text style={{ textAlign: 'justify', fontSize: 15, fontWeight: '500' }}>{topicDescription}</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>Learning Outcomes</Text>
                    <Text style={{ textAlign: 'justify', fontSize: 15, fontWeight: '500' }}>{learningOutcome}</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', marginTop:15 }}>Pre-requisites</Text>
                    <Text style={{ textAlign: 'justify', fontSize: 15, fontWeight: '500' }}>{preRequisites}</Text>
                </View>
            </View>
        </View>
    )
}

export default Card;