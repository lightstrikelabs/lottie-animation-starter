import { getLottieAnimationProps } from './lottieProps'
import LottieView from 'lottie-react-native'
import type { ILottieAnimationDynamicProps } from './LottieAnimationDynamic'

export default function LottieAnimationDynamic({
  animationName,
  shouldLoop = true,
}: ILottieAnimationDynamicProps): JSX.Element {
  const animationProps = getLottieAnimationProps(animationName)

  return (
    <LottieView
      source={animationProps.animationData}
      style={{ width: animationProps.width, height: animationProps.height }}
      autoPlay
      loop={shouldLoop}
    />
  )
}
