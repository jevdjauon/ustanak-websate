import React from "react"
import styled from "styled-components"
import Slide from "./Courasel"

const object = [
  {
    name: "Igor Stefanovic",
    text:
      "Verujem da je ovo najbolje mesto u gradu sa tako ukusnim ćevapima i siguran sam da ne postoji lepinja koja može da se približi ukusom Ustanak lepinji. Sve preporuke.",
  },
  {
    name: "Milan Stanojević",
    text:
      "Verujem da je ovo najbolje mesto u gradu sa tako ukusnim ćevapima i siguran sam da ne postoji lepinja koja može da se približi ukusom Ustanak lepinji. Sve preporuke.",
  },
  {
    name: "Nikola Licic",
    text:
      "Verujem da je ovo najbolje mesto u gradu sa tako ukusnim ćevapima i siguran sam da ne postoji lepinja koja može da se približi ukusom Ustanak lepinji. Sve preporuke.",
  },
]

const PohvaleContainer = styled.div`
  background: #f9f9f9;
  padding-bottom: 50px;
`

const HeadLines = styled.h1`
  font-size: 60px;
  font-weight: 700;
  line-height: 55px;
  text-transform: uppercase;
  margin-top: 110px;
  text-align: center;
  @media only screen and (max-width: 1100px) {
    font-size: 30px;
    font-weight: 700;
    line-height: 25px;
    width: calc(100vw - 60px * 2);
    //margin: 110px auto 0 auto;
    margin-left: auto;
    margin-right: auto;
  }
`

const Line = styled.div`
  width: 300px;
  height: 1px;
  background: rgba(0, 0, 0, 0.3);
  margin: auto;
`

const Content = styled.div`
  margin-top: 100px;
`

const Pohvale = () => {
  return (
    <PohvaleContainer>
      <HeadLines>Šta naši gosti misle o nama</HeadLines>
      <Line />
      <Content>
        <Slide />
      </Content>
    </PohvaleContainer>
  )
}
export default Pohvale
