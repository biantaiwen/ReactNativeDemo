/**
 * Created by biantaiwen on 2017/6/1.
 */
import React,{Component} from 'react'
import {View,Text,ScrollView,TouchableOpacity,StyleSheet} from 'react-native'
import {StackNavigator} from 'react-navigation'

class App extends Component {


    render () {

        return (
            <View style={{flex:1}}>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <View>
                        <TouchableOpacity>
                            <Text onPress={()=>{this.props.navigation.navigate('text')}}>Hello</Text>
                        </TouchableOpacity>
                    </View>


                </ScrollView>
            </View>
        )
    }

}
class TextComponent extends Component {


    render () {

        return (
            <View>
                <Text style={{fontSize:40}}>Text</Text>
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
    text:{
        screen:TextComponent
    }
},{
    cardStyle:{
        backgroundColor:'#fff'
    }
})

export default Router



const styles = StyleSheet.create({
    contentContainer:{
        height:50,
        marginHorizontal:20,
        borderBottomColor:'#ccc',
        borderBottomWidth:StyleSheet.hairlineWidth,
    }
})