import { ELottieAnimationName } from './lottieAnimationConsts'

export function getLottieAnimationProps(animationName: ELottieAnimationName) {
  switch (animationName) {
    case ELottieAnimationName.MOON:
      return {
        width: 265,
        height: 265,
        animationData: require('../../assets/lotties/moon.json'),
      }
    case ELottieAnimationName.SPLASH:
      return {
        width: 265,
        height: 265,
        animationData: require('../../assets/lotties/splash.json'),
      }
    default:
      return {
        width: 265,
        height: 265,
        animationData: require('../../assets/lotties/moon.json'),
      }
  }
}
