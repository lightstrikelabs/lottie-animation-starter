import { ELottieAnimationName } from './lottieAnimationConsts'
import LottieAnimationDynamic from './LottieAnimationDynamic'

export interface ILottieAnimationProps {
  animationName: ELottieAnimationName
  shouldLoop?: boolean
}

//NOTE: This file is to simplify the usage of LottieAnimationDynamic, which is a dynamic import of LottieAnimation component
export function LottieAnimation({
  animationName,
  shouldLoop = false,
}: ILottieAnimationProps): JSX.Element {
  return (
    <LottieAnimationDynamic
      animationName={animationName}
      shouldLoop={shouldLoop}
    />
  )
}
