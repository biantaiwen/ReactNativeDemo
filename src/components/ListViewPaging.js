/**
 * Created by biantaiwen on 2017/6/7.
 */
import React,{Component} from 'react'
import {View,Text,StyleSheet,ListView} from 'react-native'


let rootArr = [
    {
        title:'语文',
        key:'yw1',
        // chile:[
        //     {
        //         itemTitle:'语文1'
        //     },
        //     {
        //         itemTitle:'语文2'
        //     },
        //     {
        //         itemTitle:'语文3'
        //     },
        //     {
        //         itemTitle:'语文4'
        //     },
        //     {
        //         itemTitle:'语文5'
        //     },
        //     {
        //         itemTitle:'语文6'
        //     },
        // ]
    },
    {
        title:'数学',
        key:'sx1',
        // chile:[
        //     {
        //         itemTitle:'数学1'
        //     },
        //     {
        //         itemTitle:'数学2'
        //     },
        //     {
        //         itemTitle:'数学3'
        //     },
        //     {
        //         itemTitle:'数学4'
        //     },
        //     {
        //         itemTitle:'数学5'
        //     },
        //     {
        //         itemTitle:'数学6'
        //     },
        // ]
    }
]


class ListViewPaging extends Component {

    constructor (props) {
        super (props)
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,

        });
        this.state = {
            dataSource: ds.cloneWithRows(rootArr),
        };
    }
    componentDidMount (){
        // console.log(this.state.dataSource)
        // this.setState({
        //     dataSource:this.state.dataSource.cloneWithRowsAndSections(rootArr)
        // })
    }
    _renderRow(rowData, sectionID, rowID){
        // console.log(rowData, sectionID, rowID,'`````');
        return (
            <Text>{rowData.title}</Text>
        )
    }
    render (){
        return (
            <View style={{flex:1}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow.bind(this)}
                />
            </View>
        )
    }

}

export default ListViewPaging

