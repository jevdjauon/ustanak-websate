import React, { Component } from "react"
// import { Link } from "gatsby"
// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"
import Topbar from "../components/Topbar"
import Header from "../components/Header"
import styled from "styled-components"
import Footer from "../components/Footer"
import i1 from "../images/Group 3.png"
import s1 from "../images/chef-sign.png"
import Slide from "../components/Courasel"
import ImgSlide from "../components/ImgCourasel"
import sl1 from "../images/christiann-koepke-YiMRF2kO4Aw-unsplash.jpg"
import Spiner from "../components/Spiner"
import InlineSVG from "svg-inline-react"
import { face, gplus, insta, twitter, youtube } from "../config/svg"
import s2 from "../images/Group.png"

const Container = styled.div`
  //overflow: hidden;
  width: 100vw;
  //height: 100vh;
  z-index: -1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden !important;
`

const Content = styled.div`
  width: calc(100vw - 355px - 355px);
  margin: auto;
  @media only screen and (max-width: 1200px) {
    width: 90vw;
    //margin-top: 300px;
  }
`

const HeadContainer = styled.div`
  width: 300px;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  margin: 90px auto 60px;
  @media only screen and (max-width: 1100px) {
    width: 90vw;
    margin-top: 0px;
  }
`

const HeadLine = styled.h3`
  font-size: 60px;
  font-weight: 700;
  line-height: 55px;
  @media only screen and (max-width: 1100px) {
    font-size: 30px;
    font-weight: 700;
    line-height: 22px;
  }
`

const HeadText = styled.p`
  font-size: 15px;
  letter-spacing: 0.38px;
  line-height: 15px;
  text-align: center;
  @media only screen and (max-width: 1100px) {
    font-size: 12px;
    line-height: 9px;
  }
`

const Text = styled.p`
  font-size: 15px;
  letter-spacing: 0.38px;
  line-height: 15px;
  text-align: center;
  @media only screen and (max-width: 1100px) {
    font-size: 15px;
    letter-spacing: 0.38px;
    line-height: 25px;
  }
`

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 600px;
  padding-top: 60px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  margin: auto auto 60px;
  @media only screen and (max-width: 1200px) {
    width: 90vw;
  }
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 300px;
  margin: auto;
  @media only screen and (max-width: 1200px) {
    justify-content: center;
    width: 50vw;
    text-align: center;
  }
  @media only screen and (max-width: 450px) {
    width: 90vw;
  }
`

const WhiteSpace = styled.div`
  height: 280px;
`

const SocialContainer = styled.div`
  width: 150px;
  margin: -60px auto auto;
  padding-bottom: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Social = styled.a`
  //margin: 0 5px;
  width: 15px;
  height: 15px;
  path {
    fill: black;
  }
`

const BottomImg = styled.div`
  img {
    width: 100vw;
    height: auto;
  }
`

class Onama extends Component {
  constructor(props) {
    super(props)
    this.state = { loaded: false }
  }

  componentDidMount = () => {
    this.timer = setInterval(() => this.setState({ loaded: true }), 600)
  }

  componentWillUnmount = () => {
    clearInterval(this.timer)
  }

  render() {
    return (
      <>
        {this.state.loaded === false ? (
          <Spiner />
        ) : (
          <Container>
            {/*<SEO title="Home" />*/}
            <div>
              <Topbar />
              <Header image={sl1} head="Nešto malo o nama" />
            </div>
            <div id="first" />
            <Content>
              <HeadContainer>
                <HeadLine>O Nama</HeadLine>
                <HeadText>Kafana Ustanak- Kafana sa tradicijom</HeadText>
              </HeadContainer>
              <Text>
                Već 14 godina, ovaj restoran, odoleva novim trendovima u
                beogradskom ugostiteljstvu koje je uglavnom podeljeno između
                blaziranog novo-evrpskog stila i restorana brze hrane. Ovde,
                kao` da traje neko drugo vreme koje prkosi svim tim
                ugostiteljskim novotarijama.
              </Text>
              <Text>
                Tradicija oca i sina, sa više decenijskim iskustvom u
                ugostiteljstvu, danas vode restoran negujući, davno izgubljeni,
                duh onih starih beogradskih kafana. Zbog toga to je postalo
                kultno mesto okupljanja svih onih gurmanlija koji žele, uz
                sasvim prihvatljive cene u prijatnoj i opuštenoj atmosferi, da
                uživaju u dobrom vinu i čarima nacionalne domaće kuhinje.Tu se
                neguje baš ono najbolje što su prave srpske kafane imale da
                ponude svojim probirljivim gostima, zato na meniu ima brojnih
                starih ali i novijih kuvanih jela, naravno i onih bez kojih se
                srpska kuhinja ne može zamisliti, spremljenih ispod sača ili sa
                roštilja na ćumur.
              </Text>
              <Bottom>
                <Row>
                  <img alt="" src={i1} />
                  <img
                    alt=""
                    style={{ width: "70px", height: "70px" }}
                    src={s1}
                  />
                </Row>
                <SocialContainer>
                  <Social href="/">
                    <InlineSVG src={insta} />
                  </Social>
                  <Social href="/">
                    <InlineSVG src={twitter} />
                  </Social>
                  <Social href="/">
                    <InlineSVG src={youtube} />
                  </Social>
                  <Social href="/">
                    <InlineSVG src={face} />
                  </Social>
                  <Social href="/">
                    <InlineSVG src={gplus} />
                  </Social>
                </SocialContainer>
              </Bottom>
            </Content>
            <BottomImg>
              <img src={s2} alt="" />
            </BottomImg>
            <Slide />
            <WhiteSpace />
            <Footer />
          </Container>
        )}
      </>
    )
  }
}
export default Onama
