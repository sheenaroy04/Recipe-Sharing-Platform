import { View, Text } from 'react-native'
import React from 'react'
import Frame from '../components/Frame'

const Login = () => {
  return (
    <Frame>
      <Text tw='text-2xl'>The issue with the red underline under children in your TypeScript (TSX) file likely arises from TypeScript's type checking. The Frame component is expected to receive a children prop, but TypeScript needs explicit types defined for props to understand what children is and what types of values it can hold. When you don't provide a type definition for the props that a component expects, TypeScript will warn you about these potential type errors.

To resolve the issue, you should define an interface or type for the props that your Frame component expects. In this case, you can use the React.ReactNode type for the children prop to indicate that it can hold any valid React node. Here's how you can adjust your Frame component to include type definitions:</Text>
    </Frame>
  )
}

export default Login