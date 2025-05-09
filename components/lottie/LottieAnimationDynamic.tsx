import { View } from 'react-native'
import type { ELottieAnimationName } from './lottieAnimationConsts'
import { getLottieAnimationProps } from './lottieProps'
import lottie from 'lottie-web'
import { useEffect, useRef } from 'react'

export interface ILottieAnimationDynamicProps {
  animationName: ELottieAnimationName
  shouldLoop: boolean
}

export default function LottieAnimationDynamic({
  animationName,
  shouldLoop,
}: ILottieAnimationDynamicProps): JSX.Element {
  const animationContainer = useRef<HTMLDivElement>(null)

  const animationProps = getLottieAnimationProps(animationName)

  useEffect(() => {
    if (typeof window !== 'undefined' && animationContainer.current) {
      const anim = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'canvas',
        loop: shouldLoop,
        autoplay: true,
        animationData: animationProps.animationData,
      })
      return () => anim.destroy()
    }
    return
  }, [
    animationName,
    animationContainer,
    animationProps.animationData,
    shouldLoop,
  ])

  return (
    <div
      style={{
        width: animationProps.width,
        height: animationProps.height,
      }}
      ref={animationContainer}
    />
  )
}
