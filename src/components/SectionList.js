/**
 * Created by biantaiwen on 2017/6/7.
 */

import React ,{Component} from 'react'

import {SectionList,View,Text,StyleSheet} from 'react-native'


let rootArr = [
    {
        title:'语文',
        key:'yw1',
        data:[
            {
                itemTitle:'语文1'
            },
            {
                itemTitle:'语文2'
            },
            {
                itemTitle:'语文3'
            },
            {
                itemTitle:'语文4'
            },
            {
                itemTitle:'语文5'
            },
            {
                itemTitle:'语文6'
            },
            {
                itemTitle:'语文7'
            },
            {
                itemTitle:'语文8'
            },
            {
                itemTitle:'语文9'
            },
            {
                itemTitle:'语文10'
            },
            {
                itemTitle:'语文11'
            },
            {
                itemTitle:'语文12'
            },
        ]
    },
    {
        title:'数学',
        key:'sx1',
        data:[
            {
                itemTitle:'数学1'
            },
            {
                itemTitle:'数学2'
            },
            {
                itemTitle:'数学3'
            },
            {
                itemTitle:'数学4'
            },
            {
                itemTitle:'数学5'
            },
            {
                itemTitle:'数学6'
            },
            {
                itemTitle:'数学7'
            },
            {
                itemTitle:'数学8'
            },
            {
                itemTitle:'数学9'
            },
            {
                itemTitle:'数学10'
            },
            {
                itemTitle:'数学11'
            },
            {
                itemTitle:'数学12'
            },
        ]
    }
]


class SectionListComponent extends Component {

    constructor (props){
        super (props)
        this.state={
            rootData:rootArr
        }
    }
    _renderItem({item,index}){
        return (
            <View style={{
                height:40,
                justifyContent:'center',
                backgroundColor:'#fff',
                paddingLeft:10
            }}>
                <Text style={{fontSize:16}}>{item.itemTitle}</Text>
            </View>
        )
    }
    _renderSectionHeader({section}){
        // console.log(section)
        return(
            <View style={{
                height:30,
                justifyContent:'center',
                backgroundColor:'#ccc',
                paddingLeft:5
            }}>
                <Text style={{fontSize:18}}>{section.title}</Text>
            </View>
        )
    }
    _ItemSeparatorComponent(){
        return (
            <View style={{height:1,borderBottomColor:'#000',borderBottomWidth:StyleSheet.hairlineWidth,marginLeft:10}}></View>
        )
    }

    _keyExtractor(item,index){
        return item.itemTitle+index
    }
    render (){

        return (
            <View style={{flex:1}}>
                <SectionList
                    style={{flex:1}}
                    renderItem={this._renderItem.bind(this)}
                    renderSectionHeader={this._renderSectionHeader.bind(this)}
                    sections={this.state.rootData}
                    keyExtractor={this._keyExtractor.bind(this)}
                    ItemSeparatorComponent={this._ItemSeparatorComponent.bind(this)}
                />
            </View>
        )

    }

}


export default SectionListComponent
