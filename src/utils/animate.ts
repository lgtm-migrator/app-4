import { LayoutAnimation } from 'react-native';

export function animate(duration: number) {
  LayoutAnimation.configureNext(
    LayoutAnimation.create(duration, 'easeInEaseOut', 'opacity')
  );
}