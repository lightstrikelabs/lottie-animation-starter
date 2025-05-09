# Lottie Animation Starter

## Steps

To add a new animation:

1. Add the `.json` lottie file to the folder `assets/lotties`

2. In `components/lottie/lottieAnimationConsts.ts`, add a new row in the enum `ELottieAnimationName`.

For example, `LOADING = 'loading'`

3. In `components/lottie/lottieProps.tsx`, create a new `case` for this new lottie. Update the width and height to be your desired pixels. Update the animation data with the name of the actual json file.

For example,
    case ELottieAnimationName.LOADING:
      return {
        width: 265,
        height: 265,
        animationData: require('../../assets/lotties/loading.json'),
      }


4. That's it. You should now see this automatically as a selection option on the animation screen.
