import { useRef } from 'react'
import { useIntersection } from 'react-use'
import { styled } from 'styled-components'

const StyledMarquee = styled.div`
  display: flex;
  overflow: hidden;
  will-change: transform;
  z-index: 1;
  text-transform: uppercase;

  @include reduced-motion {
    --duration: 50s !important;
  }

  .inner {
    display: flex;
    align-items: center;
    white-space: nowrap;
    animation: marquee var(--duration) linear infinite;
    animation-play-state: var(--animation-status);
  }

  &.inverted {
    .inner {
      animation: marquee-inverted var(--duration) linear infinite;
      animation-play-state: var(--animation-status);
    }
  }

  @keyframes marquee {
    0% {
      transform: translate3d(calc(var(--offset) * -1), 0, 0);
    }

    100% {
      transform: translate3d(calc(-100% - var(--offset)), 0, 0);
    }
  }

  @keyframes marquee-inverted {
    0% {
      transform: translate3d(calc(-100% - var(--offset)), 0, 0);
    }

    100% {
      transform: translate3d(calc(var(--offset) * -1), 0, 0);
    }
  }
`

const Marquee = ({
  children,
  repeat = 2,
  duration = 5,
  offset = 0,
  $inverted = false,
  animationStart = true,
  style,
  ...props
}) => {
  const ref = useRef()

  const intersection = useIntersection(ref, { threshold: 0 })

  return (
    <StyledMarquee
      ref={ref}
      {...props}
      className={`${$inverted && 'inverted'}${
        intersection?.isIntersecting && ' running'
      }`}
      style={{
        '--duration': duration + 's',
        '--offset': (offset % 100) + '%',
        '--animation-status':
          intersection?.isIntersecting && animationStart ? 'running' : 'paused',
      }}
    >
      {new Array(repeat).fill(children).map((_, i) => (
        <div key={i} className="inner">
          {children}
        </div>
      ))}
    </StyledMarquee>
  )
}

export default Marquee
