/**
 * Created by biantaiwen on 2017/6/2.
 */

import React ,{Component} from 'react'
import {View,Text} from 'react-native'

import FadeInView from './Animated/FadeInView'

class AnimatedComponent extends Component {



    render () {

        return (
            <FadeInView>
                <View>
                    <Text style={{fontSize:40}}>AnimatedComponent</Text>
                </View>
            </FadeInView>
        )
    }

}


export default AnimatedComponent
