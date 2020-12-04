import React from 'react';
import { Text, StyleSheet, Image, View, FlatList, SafeAreaView } from 'react-native';
import singleImage1 from '../../assets/singleImage1.jpg'
import singleImage2 from '../../assets/singleImage2.jpg'
import singleImage3 from '../../assets/singleImage3.jpg'
import singleImage4 from '../../assets/singleImage4.jpg'
import singleImage5 from '../../assets/singleImage5.jpg'

const Data = [
    {
        key: '1',
        title: "Julian Dasilva",
        imgUrl: singleImage1,
        msg: 'lorem ipsum dolor sit amet, consectetur',
        activeTime: '1 hour ago'
    },
    {
        key: '2',
        title: "Cricket Group",
        imgUrl: singleImage2,
        msg: 'lorem ipsum dolor sit amet, consectetur',
        activeTime: '1 hour ago'
    },
    {
        key: '3',
        title: "Clair Kumas",
        imgUrl: singleImage3,
        msg: 'lorem ipsum dolor sit amet, consectetur',
        activeTime: '1 hour ago'
    },
    {
        key: '4',
        title: "Blair dota",
        imgUrl: singleImage4,
        msg: 'lorem ipsum dolor sit amet, consectetur',
        activeTime: '1 hour ago'
    },
    {
        key: '5',
        title: "Molly Klair",
        imgUrl: singleImage5,
        msg: 'lorem ipsum dolor sit amet, consectetur',
        activeTime: '1 hour ago'
    }
];
const MessageList = () => {
    return (
        <SafeAreaView>
                <FlatList
                    data={Data}
                    keyExtractor={item => item.key}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.listContainer}>
                                <View style={{ flex: 1, flexDirection: 'row', borderBottom: '1px solid #ddd', marginVertical: 10, backgroundColor: '#fff', paddingBottom: 10 }}>
                                    <View style={{ position: 'relative' }}>
                                        <Image source={{ uri: item.imgUrl }} style={{ width: 60, height: 60, borderRadius: 50 }} />
                                        <View style={{ position: 'absolute', right: 2, top: 2, borderRadius: 6, height: 12, width: 12, backgroundColor: '#00ff00' ,border: '2px solid #fff'}}>
                                        </View>
                                    </View>
                                    <View style={styles.infoStyle}>
                                        <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
                                        <Text style={{ color: "#b3b3b3" }}>{item.msg}</Text>
                                    </View>
                                    <View>
                                        <Text style={{ color: "#b3b3b3" }}>{item.activeTime}</Text>
                                    </View>
                                </View>
                            </View>
                        );
                    }}
                />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    infoStyle: {
        marginHorizontal: 20
    }
})
export default MessageList;