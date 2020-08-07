import React from "react"
import Carousel from "nuka-carousel"
import styled from "styled-components"
import s1 from "../images/_.png"

const object = [
  {
    name: "Igor Stefanovic",
    text:
      "Verujem da je ovo najbolje mesto u gradu sa tako ukusnim ćevapima i siguran sam da ne postoji lepinja koja može da se približi ukusom Ustanak lepinji. Sve preporuke.",
  },
  {
    name: "Milan Stanojević",
    text:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap",
  },
  {
    name: "Nikola Licic",
    text:
      "the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
]

const MsgText = styled.p`
  font-size: 15px;
  letter-spacing: 0.6px;
  line-height: 15px;
  text-align: center;
  max-width: 800px;
  margin: auto;
  margin-bottom: 50px !important;
  opacity: 0.5;
  @media only screen and (max-width: 1100px) {
    width: 80%;
  }
`

const Container = styled.div`
  min-height: 300px;
  outline: none !important;
`

const Background = styled.div`
  background-color: rgba(244, 244, 244, 0.6);
  //width: 1500px;
`

const MscContainer = styled.div`
  width: 1500px;
  border-top: 1px solid rgba(175, 175, 175, 0.3);
  border-bottom: 1px solid rgba(175, 175, 175, 0.3);
  margin-left: auto;
  margin-right: auto;
  min-height: 120px;
  padding: 50px 0 0 0;
  @media only screen and (max-width: 1100px) {
    width: 80vw;
  }
`

const MsgArea = styled.div`
  position: relative;
  margin: auto;
  width: 850px;
  height: 50px;
  margin-bottom: 50px;
  @media only screen and (max-width: 1100px) {
    width: 80vw;
  }
`

const Icon1 = styled.img`
  position: absolute;
  top: 0;
  left: 0;
`

const Icon2 = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
`

const Slide = () => {
  return (
    <Carousel
      slidesToShow={1}
      dragging={true}
      // easing="easeInOutElastic"S
    >
      {object.map(({ i, name, text }) => (
        <Container>
          <Background>
            <MscContainer>
              <MsgArea>
                <Icon1 src={s1} />
                <MsgText id={i}>{text}</MsgText>
                <Icon2 src={s1} />
              </MsgArea>
              <MsgText id={i}>{name}</MsgText>
            </MscContainer>
          </Background>
        </Container>
      ))}
    </Carousel>
  )
}

export default Slide
