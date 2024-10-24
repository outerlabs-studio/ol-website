'use client'

import { useRef, useCallback } from 'react'
import { useDrag } from '@use-gesture/react'
import { DVDScreenWrap } from './styles'
import Elastica, {
  AxisAlignedBoundaryBox,
  initalConditionsPresets,
  useElastica,
} from '@darkroom.engineering/elastica/react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const params = {
  gridSize: 8,
  collisions: true,
  borders: 'periodic',
  velocity: {
    x: -0.3,
    y: -0.1,
  },
  dumpingFactor: 0.001,
}

const labels = [
  'Apps',
  'Design',
  'Cloud infrastructure',
  'Branding',
  'Animation',
  'SEO',
  'Social media',
  'Websites',
  'UI',
  'UX',
  'Developing',
  'Messaging',
  'Motion',
  'Print',
  'Wireframing',
  'Discovery',
  'Ecommerce',
]

const DVDScreen = () => {
  const isHovered = useRef(labels.map(() => false))

  return (
    <DVDScreenWrap>
      <Elastica
        config={{
          gridSize: 8,
          collisions: true,
          borders: 'periodic',
          dumpingFactor: 0.001,
        }}
        initialCondition={initalConditionsPresets.random}
        update={({
          boxes,
          positions,
          velocities,
          externalForces,
          deltaTime,
        }) => {
          boxes.forEach((_, index) => {
            let velocity = velocities[index]
            let position = positions[index]
            let draggin = externalForces[index]
            const stVel = [params.velocity.x, -params.velocity.y]

            if (isHovered.current[index]) {
              velocities[index] = velocity.map(
                (v, i) =>
                  v - deltaTime * params.dumpingFactor * (v - 4 * draggin[i]),
              )
            } else {
              velocities[index] = velocity.map(
                (v, i) =>
                  v -
                  deltaTime *
                    params.dumpingFactor *
                    (v - 4 * draggin[i] + stVel[i]),
              )
            }

            positions[index] = position = position.map(
              (pos, i) => pos + velocity[i] * deltaTime,
            )

            externalForces[index] = [0, 0]
          })
        }}
      >
        {labels.map((name, index) => (
          <Item key={index} name={name} index={index} isHovered={isHovered} />
        ))}
      </Elastica>
    </DVDScreenWrap>
  )
}

function Item({ name, index, isHovered }) {
  const { elastica } = useElastica()
  const itemRef = useRef()

  useGSAP(() => {
    gsap.from(itemRef.current, {
      scale: 0,
      duration: 1,
      ease: 'elastic(2, 1)',
      delay: 1 + 0.06 * index,
    })
  })

  const onDragStop = useCallback(
    (newDir) => {
      const { externalForces } = elastica

      let norm = newDir.map((pos) => pos * pos).reduce((a, b) => a + b)
      norm = Math.sqrt(norm)

      if (norm === 0) return

      externalForces[index] = newDir.map((pos) => pos / norm)
    },
    [elastica],
  )

  const bind = useDrag(({ down, movement: [mx, my] }) => {
    if (down) {
      onDragStop([mx, my])
    }
  })

  return (
    <AxisAlignedBoundaryBox key={index} className="wrapper" {...bind()}>
      <div
        ref={itemRef}
        className="item"
        onMouseEnter={({ target }) => {
          isHovered.current[index] = true
          target.classList.toggle('grabbed', true)
        }}
        onMouseLeave={({ target }) => {
          isHovered.current[index] = false
          target.classList.toggle('grabbed', false)
        }}
      >
        {name}
      </div>
    </AxisAlignedBoundaryBox>
  )
}

export default DVDScreen
