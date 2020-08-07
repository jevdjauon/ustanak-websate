import React from "react"
import Carousel from "nuka-carousel"
import styled from "styled-components"
import s1 from "../images/Group.png"

const imgObj = [
  {
    name: "Img1",
    src: s1,
  },
  {
    name: "Img2",
    src: s1,
  },
  {
    name: "Img3",
    src: s1,
  },
  {
    name: "Img4",
    src: s1,
  },
  {
    name: "Img5",
    src: s1,
  },
]

const Container = styled.div`
  img {
    width: 100vw;
    height: 100%;
  }
  outline: none;
`

const ImgSlide = () => {
  return (
    <Carousel
      slidesToShow={1}
      dragging={true}

      // easing="easeInOutElastic"
    >
      {imgObj.map(({ i, name, src }) => (
        <Container>
          <img alt="" src={src} />
        </Container>
      ))}
    </Carousel>
  )
}

export default ImgSlide
