import React from "react"
import styled from "styled-components"
import a3 from "../images/arrow-top-right-line-oblique-lg 1.png"
import btn1 from "../images/PathBlack.png"
import InlineSVG from "svg-inline-react"
import { insta, face, gplus, twitter, youtube } from "../config/svg"

const FooterContainer = styled.div`
  height: 620px;
  background: #2d2d2d;
  display: flex;
  flex-direction: row;
  justify-content: center;
  //align-self: center;
  @media only screen and (max-width: 1200px) {
    height: auto;
  }
`

const ArrowBtn = styled.img`
  z-index: 100;
  position: absolute;
  margin-left: 84px;
  margin-top: -50px;
  cursor: pointer;
`

const BtnImg = styled.img`
  //margin: 0 auto;
  z-index: 99;
  position: absolute;
  margin-top: -80px;
`

const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: calc(100vw - 260px - 260px);
  margin: auto;
  color: white;
  h3 {
    font-size: 30px;
    font-weight: 700;
    line-height: 55px;
    text-align: center;
  }
  p {
    font-size: 12px;
    letter-spacing: 0.48px;
    line-height: 15px;
    opacity: 0.6;
  }
  @media only screen and (max-width: 1200px) {
    width: 90vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
  }
`

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media only screen and (max-width: 1200px) {
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 45px;
  }
`
const Hours = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media only screen and (max-width: 1200px) {
    justify-content: center;
    align-items: center;
    text-align: center;
    order: -1;
  }
`

const Onama = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 25%;
  @media only screen and (max-width: 1200px) {
    justify-content: center;
    text-align: center;
    max-width: 100%;
    margin-top: 45px;
    margin-bottom: 45px;
  }
`

const SocialDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

const SocialContainer = styled.div`
  //width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Social = styled.a`
  margin: 0 5px;
  width: 15px;
  height: 15px;
  path {
    fill: white;
  }
`

const BtnContainer = styled.div`
  width: 202px;
  margin: auto;
  position: relative;
  height: auto;
  @media only screen and (max-width: 1200px) {
    //margin-top: 350px !important;
    margin-top: 0 !important;
  }
`

const Container = styled.div`
  //margin-top: 200px;
  @media only screen and (max-width: 1200px) {
    //margin-top: 300px;
  }
`

const Footer = props => {
  return (
    <Container>
      <BtnContainer>
        <a href="#header">
          <BtnImg src={btn1} />
          <ArrowBtn src={a3} />
        </a>
      </BtnContainer>
      <FooterContainer>
        <FooterContent>
          <Menu>
            <h3>Menu</h3>
            <p>Specijaliteti</p>
            <p>Pića</p>
            <p>Jela sa roštilja</p>
            <p>Kuvana jela</p>
            <p>Domaći kolači</p>
          </Menu>
          <Hours>
            <h3>Radno Vreme</h3>
            <p>Ponedeljak-Petak</p>
            <p>09:00-22:00</p>
            <p>Subota</p>
            <p>10:00-23:00</p>
            <p>Nedelja</p>
            <p>08:00-20:00</p>
          </Hours>
          <Onama>
            <h3>Kafana ustanak</h3>
            <p>
              Već 14 godina, ovaj restoran, odoleva novim trendovima u
              beogradskom ugostiteljstvu koje je uglavnom podeljeno između
              blaziranog novo-evrpskog stila i restorana brze hrane. Ovde, kao
              da traje neko drugo vreme koje prkosi svim tim ugostiteljskim
              novotarijama.
            </p>
          </Onama>
          <div>
            <p>input</p>
            <SocialDiv>
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
            </SocialDiv>
          </div>
        </FooterContent>
      </FooterContainer>
    </Container>
  )
}

export default Footer
