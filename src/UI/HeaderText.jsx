import React from "react"
import { animated, useSpring } from "react-spring"
import styled from "styled-components"

const HeaderText = props => {
  const fromLeft = useSpring({
    opacity: 1,
    transform: "translateX(0)",
    from: { opacity: 0, transform: "translateX(-100vw)" },
  })

  const TestAnime = styled(animated.div)``

  return <TestAnime style={fromLeft}>{props.children}</TestAnime>
}

export default HeaderText
