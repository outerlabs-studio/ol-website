'use client'

import gsap from 'gsap'

export const animatePageIn = () => {
  const transitionElement = document.getElementById('transition-element')

  if (transitionElement) {
    const tl = gsap.timeline()

    tl.to(gsap.utils.toArray('.transition-column'), {
      height: '0%',
      stagger: 0.05,
      duration: 0.4,
      delay: 0.3,
      ease: 'power3.inOut',
    }).set(transitionElement, { autoAlpha: 0 })
  }
}

export const animatePageOut = (href, router, pathName) => {
  if (pathName === href) return null
  if (pathName === '/' && href === '/#projects') return null

  const animationWrapper = document.getElementById('transition-element')

  if (animationWrapper) {
    const tl = gsap.timeline()

    tl.set(animationWrapper, { autoAlpha: 1 }, 0).to(
      gsap.utils.toArray('.transition-column'),
      {
        height: '100%',
        stagger: 0.05,
        duration: 0.4,
        ease: 'power3.inOut',
        onComplete: () => {
          router.push(href)
        },
      },
      0,
    )
  }
}

export default animatePageOut
