/**
 * Created by guoxiaodong on 2017/6/6.
 */
import React ,{Component} from 'react'
import {View,Text,StyleSheet,ScrollView} from 'react-native'



class Transform extends Component {


    render (){

        return(
            <ScrollView>
                <View style={styles.container}>
                    <View style={[styles.box1,{transform:[{rotate:'10deg'}]}]}></View>
                </View>
                <Text style={styles.textCenter}>rotate:10deg</Text>
                <View style={styles.container}>
                    <View style={[styles.box1,{transform:[{rotate:'-10deg'}]}]}></View>
                </View>
                <Text style={styles.textCenter}>rotate:-10deg</Text>
                <View style={styles.container}>
                    <View style={[styles.box1,{transform:[{rotate:'90deg'}]}]}></View>
                </View>
                <Text style={styles.textCenter}>rotate:90deg</Text>
                <View style={styles.container}>
                    <View style={[styles.box1,{transform:[{rotate:'350deg'}]}]}></View>
                </View>
                <Text style={styles.textCenter}>rotate:350deg</Text>
                <View style={styles.container}>
                    <View style={[styles.box1,{transform:[{rotateX:'40deg'}]}]}></View>
                </View>
                <Text style={styles.textCenter}>rotateX:40deg</Text>
                <View style={styles.container}>
                    <View style={[styles.box1,{transform:[{rotateX:'90deg'}]}]}></View>
                </View>
                <Text style={styles.textCenter}>rotateX:90deg</Text>
                <View style={styles.container}>
                    <View style={[styles.box1,{transform:[{rotateX:'350deg'}]}]}></View>
                </View>
                <Text style={styles.textCenter}>rotateX:350deg</Text>
                <View style={styles.container}>
                    <View style={[styles.box1,{transform:[{rotateY:'40deg'}]}]}></View>
                </View>
                <Text style={styles.textCenter}>rotateY:40deg</Text>
                <View style={styles.container}>
                    <View style={[styles.box1,{transform:[{rotateY:'90deg'}]}]}></View>
                </View>
                <Text style={styles.textCenter}>rotateY:90deg</Text>
                <View style={styles.container}>
                    <View style={[styles.box1,{transform:[{rotateY:'350deg'}]}]}></View>
                </View>
                <Text style={styles.textCenter}>rotateY:350deg</Text>
                <View style={styles.container}>
                    <View style={[styles.box1,{transform:[{rotateZ:'40deg'}]}]}></View>
                </View>
                <Text style={styles.textCenter}>rotateZ:40deg</Text>
                <View style={styles.container}>
                    <View style={[styles.box1,{transform:[{rotateZ:'90deg'}]}]}></View>
                </View>
                <Text style={styles.textCenter}>rotateZ:90deg</Text>
                <View style={styles.container}>
                    <View style={[styles.box1,{transform:[{rotateZ:'350deg'}]}]}></View>
                </View>
                <Text style={styles.textCenter}>rotateZ:350deg</Text>

                {/*scale*/}
                <View style={styles.container}>
                    <View style={[styles.box2,{transform:[{scale:2}]}]}></View>
                </View>
                <Text style={styles.textCenter}>scale:2</Text>
                <View style={styles.container}>
                    <View style={[styles.box2,{transform:[{scale:0.5}]}]}></View>
                </View>
                <Text style={styles.textCenter}>scale:0.5</Text>
                <View style={styles.container}>
                    <View style={[styles.box2,{transform:[{scale:-2}]}]}></View>
                </View>
                <Text style={styles.textCenter}>scale:-2</Text>
                <View style={styles.container}>
                    <View style={[styles.box2,{transform:[{scale:-0.5}]}]}></View>
                </View>
                <Text style={styles.textCenter}>scale:-0.5</Text>


                {/*scaleX*/}
                <View style={styles.container}>
                    <View style={[styles.box2,{transform:[{scaleX:2}]}]}></View>
                </View>
                <Text style={styles.textCenter}>scaleX:2</Text>
                <View style={styles.container}>
                    <View style={[styles.box2,{transform:[{scaleX:0.5}]}]}></View>
                </View>
                <Text style={styles.textCenter}>scaleX:0.5</Text>
                <View style={styles.container}>
                    <View style={[styles.box2,{transform:[{scaleX:-2}]}]}></View>
                </View>
                <Text style={styles.textCenter}>scaleX:-2</Text>
                <View style={styles.container}>
                    <View style={[styles.box2,{transform:[{scaleX:-0.5}]}]}></View>
                </View>
                <Text style={styles.textCenter}>scaleX:-0.5</Text>

                {/*scaleY*/}
                <View style={styles.container}>
                    <View style={[styles.box2,{transform:[{scaleY:2}]}]}></View>
                </View>
                <Text style={styles.textCenter}>scaleY:2</Text>
                <View style={styles.container}>
                    <View style={[styles.box2,{transform:[{scaleY:0.5}]}]}></View>
                </View>
                <Text style={styles.textCenter}>scaleY:0.5</Text>
                <View style={styles.container}>
                    <View style={[styles.box2,{transform:[{scaleY:-2}]}]}></View>
                </View>
                <Text style={styles.textCenter}>scaleY:-2</Text>
                <View style={styles.container}>
                    <View style={[styles.box2,{transform:[{scaleY:-0.5}]}]}></View>
                </View>
                <Text style={styles.textCenter}>scaleY:-0.5</Text>

                {/*translateX*/}
                <View style={styles.container}>
                    <View style={[styles.box3,{transform:[{translateX:0}]}]}></View>
                </View>
                <Text style={styles.textCenter}>translateX:0</Text>
                <View style={styles.container}>
                    <View style={[styles.box3,{transform:[{translateX:30}]}]}></View>
                </View>
                <Text style={styles.textCenter}>translateX:30</Text>
                <View style={styles.container}>
                    <View style={[styles.box3,{transform:[{translateX:-30}]}]}></View>
                </View>
                <Text style={styles.textCenter}>translateX:-30</Text>

                {/*translateY*/}

                <View style={styles.container}>
                    <View style={[styles.box3,{transform:[{translateY:0}]}]}></View>
                </View>
                <Text style={styles.textCenter}>translateY:0</Text>
                <View style={styles.container}>
                    <View style={[styles.box3,{transform:[{translateY:30}]}]}></View>
                </View>
                <Text style={styles.textCenter}>translateY:30</Text>
                <View style={styles.container}>
                    <View style={[styles.box3,{transform:[{translateY:-30}]}]}></View>
                </View>
                <Text style={styles.textCenter}>translateY:-30</Text>

                {/*skewX*/}
                <View style={styles.container}>
                    <View style={[styles.box4,{transform:[{skewX:'0deg'}]}]}></View>
                </View>
                <Text style={styles.textCenter}>skewX:0deg</Text>
                <View style={styles.container}>
                    <View style={[styles.box4,{transform:[{skewX:'20deg'}]}]}></View>
                </View>
                <Text style={styles.textCenter}>skewX:20deg</Text>
                <View style={styles.container}>
                    <View style={[styles.box4,{transform:[{skewX:'60deg'}]}]}></View>
                </View>
                <Text style={styles.textCenter}>skewX:60deg</Text>
                <View style={styles.container}>
                    <View style={[styles.box4,{transform:[{skewX:'80deg'}]}]}></View>
                </View>
                <Text style={styles.textCenter}>skewX:80deg</Text>
                <View style={styles.container}>
                    <View style={[styles.box4,{transform:[{skewX:'0deg'}]}]}></View>
                </View>
                <Text style={styles.textCenter}>skewX:0deg</Text>
                <View style={styles.container}>
                    <View style={[styles.box4,{transform:[{skewX:'-20deg'}]}]}></View>
                </View>
                <Text style={styles.textCenter}>skewX:-20deg</Text>
                <View style={styles.container}>
                    <View style={[styles.box4,{transform:[{skewX:'-60deg'}]}]}></View>
                </View>
                <Text style={styles.textCenter}>skewX:60deg</Text>
                <View style={styles.container}>
                    <View style={[styles.box4,{transform:[{skewX:'-80deg'}]}]}></View>
                </View>
                <Text style={styles.textCenter}>skewX:-80deg</Text>

                {/*skewY*/}
                <View style={styles.container}>
                    <View style={[styles.box4,{transform:[{skewY:'0deg'}]}]}></View>
                </View>
                <Text style={styles.textCenter}>skewY:0deg</Text>
                <View style={styles.container}>
                    <View style={[styles.box4,{transform:[{skewY:'20deg'}]}]}></View>
                </View>
                <Text style={styles.textCenter}>skewY:20deg</Text>
                <View style={styles.container}>
                    <View style={[styles.box4,{transform:[{skewY:'60deg'}]}]}></View>
                </View>
                <Text style={styles.textCenter}>skewY:60deg</Text>
                <View style={styles.container}>
                    <View style={[styles.box4,{transform:[{skewY:'80deg'}]}]}></View>
                </View>
                <Text style={styles.textCenter}>skewY:80deg</Text>
                <View style={styles.container}>
                    <View style={[styles.box4,{transform:[{skewY:'0deg'}]}]}></View>
                </View>
                <Text style={styles.textCenter}>skewY:0deg</Text>
                <View style={styles.container}>
                    <View style={[styles.box4,{transform:[{skewY:'-20deg'}]}]}></View>
                </View>
                <Text style={styles.textCenter}>skewY:-20deg</Text>
                <View style={styles.container}>
                    <View style={[styles.box4,{transform:[{skewY:'-60deg'}]}]}></View>
                </View>
                <Text style={styles.textCenter}>skewY:60deg</Text>
                <View style={styles.container}>
                    <View style={[styles.box4,{transform:[{skewY:'-80deg'}]}]}></View>
                </View>
                <Text style={styles.textCenter}>skewY:-80deg</Text>

            </ScrollView>
        )

    }


}


export default Transform

const styles=StyleSheet.create({
    container:{
        flex:1,
        height:100,
        justifyContent:'center',
        alignItems:'center'
    },
    textCenter:{
        textAlign:'center'
    },
    box1:{
        width:50,
        height:50,
        borderRightWidth:1,
        borderRightColor:'red',
        backgroundColor:'#ccc',
    },
    box2:{
        width:30,
        height:30,
        borderRightWidth:1,
        borderRightColor:'red',
        borderTopWidth:1,
        borderTopColor:'red',
        backgroundColor:'#ccc',
    },
    box3:{
        width:30,
        height:30,
        borderRightWidth:1,
        borderRightColor:'red',
        borderTopWidth:1,
        borderTopColor:'red',
        backgroundColor:'#ccc',
    },
    box4:{
        width:50,
        height:50,
        borderRightWidth:1,
        borderRightColor:'red',
        borderTopWidth:1,
        borderTopColor:'red',
        backgroundColor:'#ccc',
    }
})