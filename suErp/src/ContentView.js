import React, { Component } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

const myUrl = 'http://sue.su.edu.bd:5081/sonargaon_erp/';

const ContentView =  () => {
    <View style={styles.container}>
        <WebView 
            src={{ uri: myUrl }}
            javaScriptEnabled={true}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%'
    }
});

export default ContentView;