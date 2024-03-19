// react-native-augmentations.d.ts
import 'react-native';

declare module 'react-native' {
  import { ViewProps as OriginalViewProps,
             TextProps as OriginalTextProps, 
             ScrollViewProps as OriginalScrollViewProps, 
             TextInputProps as OriginalTextInputProps,
            TouchableOpacityProps as OriginalTouchableOpacityProps } from 'react-native';

  export interface ViewProps extends OriginalViewProps {
    tw?: string;
  }

  export interface TextProps extends OriginalTextProps {
    tw?: string;
  }

  export interface ScrollViewProps extends OriginalScrollViewProps {
    tw?: string;
  }

  export interface TextInputProps extends OriginalTextInputProps {
    tw?: string;
  }
  export interface TouchableOpacityProps extends OriginalTouchableOpacityProps{
    tw? : string;
  }

  // Extend other component props as needed
}
