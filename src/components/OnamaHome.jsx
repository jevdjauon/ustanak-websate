import React, { Component } from "react"
import styled from "styled-components"
import s1 from "../images/jon-tyson-kctt4tL1dkE-unsplash.jpg"
import s2 from "../images/jon-tyson-kctt4tL1dkE-unsplashRES.jpg"

const OnamaContainer = styled.div`
  margin-top: 100vh;
  height: 850px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media only screen and (max-width: 1100px) {
    height: auto;
    flex-direction: column;
    background: #840d0c;
    margin-top: 80vh;
  }
`

const Left = styled.div`
  flex-basis: 50%;
  background: #840d0c;
  height: inherit;
`
const Right = styled.div`
  flex-basis: 50%;
  height: inherit;
  overflow: hidden;
  //position: relative;
  img {
    //position: absolute;
    min-height: 850px;
    min-width: 800px;
    height: auto;
    width: 100%;
    //top: 0;
    //right: 0;
  }
  @media only screen and (max-width: 1100px) {
    margin-top: 50px;
    width: 100%;
    //height: 300px;
    max-height: 300px;
    img {
      //height: 200px;
    }
  }
`

const HeadLines = styled.h1`
  font-size: 60px;
  font-weight: 700;
  line-height: 55px;
  text-transform: uppercase;
  color: white;
  margin-top: 110px;
  text-align: center;
  @media only screen and (max-width: 1100px) {
    font-size: 30px;
    font-weight: 700;
    line-height: 55px;
    margin-top: 45px;
  }
`

const Line = styled.div`
  width: 300px;
  height: 1px;
  background: rgba(255, 255, 255, 0.5);
  margin: auto;
  @media only screen and (max-width: 1100px) {
    width: 35%;
  }
`

const Text = styled.p`
  font-size: 15px;
  letter-spacing: 0.38px;
  line-height: 15px;
  text-align: center;
  color: white;
  max-width: 640px;
  margin: auto;
  @media only screen and (max-width: 1100px) {
    width: calc(100% - 60px);
    margin: 0 auto 30px auto;
    font-size: 12px;
    letter-spacing: 0.3px;
    line-height: 15px;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
  height: 100%;
  max-height: 375px;
  margin-top: 85px;
  @media only screen and (max-width: 1100px) {
    margin-top: 40px;
  }
`

const BtnContainer = styled.a`
  cursor: pointer;
  margin-top: 60px;
  text-decoration: none;
  width: 150px;
  max-width: 150px !important;
  div {
    border-bottom: 1px solid #c8c8c8;
    border-top: 1px solid #c8c8c8;
    width: 150px;
    height: 40px;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    p {
      font-family: "Cinzel", serif !important;
      width: 120px;
      margin-top: -6px;
      margin-left: auto;
      margin-right: auto;
      border-bottom: 1px solid #c8c8c8;
      border-top: 1px solid #c8c8c8;
      font-size: 14px;
      font-weight: 700;
      line-height: 55px;
      height: 50px;
      color: white;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  }
  @media only screen and (max-width: 1100px) {
    margin-top: 50px !important;
    margin-bottom: 500px;
  }
`

const ImgContainer = styled.div``

class OnamaHome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      screenWidth: "",
    }
  }

  componentWillMount = () => {
    let screenWidth = window.innerWidth
    this.setState({ screenWidth: screenWidth })
    window.addEventListener("resize", this.updateWindowDimensions)
  }

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateWindowDimensions)
  }

  updateWindowDimensions = () => {
    this.setState({
      screenWidth: window.screen.width,
    })
  }

  render() {
    let screenWidth = this.state.screenWidth
    return (
      <OnamaContainer>
        <Left>
          <HeadLines>Ukratko o nama</HeadLines>
          <Line />
          <Content>
            <Text>
              Dobrodošli u restoran Ustanak. Pravu, tradicionalnu srpsku kafanu
              koja baštini najbolje nasleđe domaće kuhinje, beskompromisnog
              gostoprimstva i poštovanja prema svakom gostu.
            </Text>
            <Text>
              Restoran Ustanak je kruna trodecenijskog ugostiteljskog iskustva
              porodice Živić. Za to vreme, počev od 1981. godine, bilo je mnogo
              situacija kada smo pristajali na kompromise. Međutim, nikada nismo
              imali kompromis kada je reč o kvalitetu. Hrane, usluge i
              jedinstvene atomsfere koju prave baš – naši gosti.
            </Text>
            <Text>
              Vremenom smo postali simbol dobre kuhinje, slasnog i bogatog
              zalogaja, ali i uvek vesele, opuštene i meraklijske atmosfere.
            </Text>
            <Text>
              Ono što nas čini jedinstvenim je, pored već čuvenog roštilja
              spremljenog na poseban način koji je plod iskustva porodice Živić,
              činjenica da se naši gosti u Ustanku osećaju kao kod kuće. I uvek
              nam se vraćaju.
            </Text>
          </Content>

          <BtnContainer href="/Onama">
            <div>
              <p>Saznaj više</p>
            </div>
          </BtnContainer>
        </Left>

        <Right>
          <ImgContainer>
            <img alt="" src={s1} />
          </ImgContainer>
        </Right>
      </OnamaContainer>
    )
  }
}

export default OnamaHome
