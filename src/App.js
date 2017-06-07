/**
 * Created by biantaiwen on 2017/6/1.
 */
import React,{Component} from 'react'
import {View,Text,ScrollView,TouchableOpacity,StyleSheet} from 'react-native'
import {StackNavigator} from 'react-navigation'


//组件
import TextComponent from './components/Text'
import AnimatedComponent from './components/Animated'
import TransformComponent from './components/Transform'
import ListViewPaging from './components/ListViewPaging'
import SectionListComponent from './components/SectionList'
let arrComponent = [
    {
        text:'TextComponent(Text组件)',
        router:'text',
    },
    {
        text:'AnimatedComponent(Animated组件)',
        router:'animated',
    },
    {
        text:'TransformComponent(Transform)',
        router:'transform',
    },
    {
        text:'ListViewPaging(ListView)',
        router:'listviewpaging',
    },
    {
        text:'SectionListComponent(SectionList)',
        router:'sectionlist',
    },
];

let arrRouter = {
    text:{
        screen:TextComponent,
    },
    animated:{
        screen:AnimatedComponent
    },
    transform:{
        screen:TransformComponent
    },
    listviewpaging:{
        screen:ListViewPaging
    },
    sectionlist:{
        screen:SectionListComponent
    }
};



class App extends Component {



    _listItem (item,index){

        return (
            <TouchableOpacity
                key={index}
                onPress={()=>{this.props.navigation.navigate(item.router,{title:item.router})}}
            >
                <View style={styles.textView}>
                    <Text
                        style={styles.text}

                    >
                        {item.text}
                    </Text>
                </View>
            </TouchableOpacity>
        )

    }

    render () {

        return (
            <View style={{flex:1}}>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    {
                        arrComponent.map((item,index)=>this._listItem(item,index))
                    }
                </ScrollView>
            </View>
        )
    }

}

const Router = StackNavigator({
    index:{
        screen:App,
        navigationOptions:{
            title:'首页'
        }
    },
    ...arrRouter
},{
    cardStyle:{
        backgroundColor:'#fff'
    },
    navigationOptions: ({ navigation })=>{
        let title=navigation.state.params?navigation.state.params.title:'首页'
        return {
            title: `${title}`
        }
    }

})

export default Router



const styles = StyleSheet.create({
    contentContainer:{
        marginHorizontal:20,
    },
    textView:{
        flex:1,
        height:51,
        borderBottomColor:'#ccc',
        borderBottomWidth:StyleSheet.hairlineWidth,
    },
    text:{
        fontSize:18,
        lineHeight:50
    }
})