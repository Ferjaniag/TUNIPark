import { StyleSheet,  View } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { ApplicationProvider, Layout, Input, Text, Select, IndexPath,SelectItem } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';


export default function duration() {

    const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  return (
    <ApplicationProvider {...eva} theme={eva.light}>  
    <Layout style={styles.container} level='1'>
        <Text> Helooooooooooo</Text>
    <Select
        selectedIndex={selectedIndex}
        onSelect={index => setSelectedIndex(index)}>
        <SelectItem title='Option 1'/>
        <SelectItem title='Option 2'/>
        <SelectItem title='Option 3'/>
      </Select>
    </Layout>
  </ApplicationProvider> 
  
  )
}

const styles = StyleSheet.create({
    container: {
        minHeight: 128, 
        width: 150
      },
})