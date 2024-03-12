import { StyleSheet, Text, View ,TextProps} from 'react-native'
import React from 'react'

interface PoppinsTextProps extends TextProps{
    style? : TextProps['style'],
    children : React.ReactNode,
    tw? : string
}

const PoppinsText :React.FC<PoppinsTextProps> = ({style , children , tw='' , ...props}) => {
  return (
     <Text style={[{fontFamily : 'Poppins'} , style]} tw={tw} {...props}>
        {children}
    </Text>
    
  )
}

export default PoppinsText

