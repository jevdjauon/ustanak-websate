import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import a1 from "../images/arrow-top-right-line-oblique-lg (1).png"
import a2 from "../images/arrow-top-right-line-oblique-lg.png"
import a3 from "../images/arrow-top-right-line-oblique-lg (2).png"
import btn1 from "../images/Path.png"
import HeaderText from "../UI/HeaderText"
import { animated } from "react-spring"
import InlineSVG from "svg-inline-react"
import { face, gplus, insta, twitter, youtube } from "../config/svg"

const HeadContainer = styled.div`
  z-index: 1;
`

const TestImageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: -2;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media only screen and (max-width: 1100px) {
  }
`

const HeadImg = styled.div`
  //opacity: 0.5;
  filter: brightness(50%);
  //max-height: 100vh;
  //width: 100vw;
  //z-index: -2;
  //position: absolute;
  //top: 0;
  //left: 0;
  width: 100%;
  height: auto;
  overflow: hidden;
  @media only screen and (max-width: 1100px) {
    width: auto;
    min-width: 1100px;
    img {
      min-height: 100vh;
    }
  }
`

const HeaderContent = styled.div`
  width: calc(100vw - 162px - 162px);
  height: 100vh;
  margin: auto;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  align-items: center;
  position: relative;
`

const HeadLines = styled.h1`
  font-size: 80px;
  font-weight: 700;
  line-height: 75px;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 40px;
  @media only screen and (max-width: 1100px) {
    color: white;
    font-size: 30px;
    font-weight: 700;
    line-height: 75px;
    margin-bottom: 0;
    margin-top: 100px;
  }
`

const HeadLinesSmall = styled.h3`
  font-size: 30px;
  font-weight: 700;
  line-height: 40px;
  text-align: center;
  text-transform: uppercase;
  margin-top: 30px;
  @media only screen and (max-width: 1100px) {
    color: white;
    font-size: 15px;
    font-weight: 700;
    line-height: 20px;
    margin-top: 30px;
  }
`

const Text = styled.p`
  font-size: 15px;
  line-height: 15px;
  text-align: center;
  max-width: 410px;
  margin: auto;
  @media only screen and (max-width: 1100px) {
    color: white;
    font-size: 12px;
    line-height: 20px;
    max-width: 250px;
    margin: auto;
    text-align: center;
  }
`

const HeadCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
`

const HeadLeft = styled.div`
  a {
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    font-size: 15px;
    font-weight: 700;
    line-height: 24px;
    align-items: center;
    text-decoration: none;
    border-bottom: 2px solid rgba(253, 253, 253, 0.8);
    width: 200px;
    height: 45px;
    p {
      margin-left: 30px;
      
    }
  }
  @media only screen and (max-width: 1100px) {
    a {
      font-size: 12px;
      font-weight: 700;
      line-height: 20px;
      border-bottom: 0;
      flex-direction: column;
      width: auto;
      height: auto;
      p {
        margin-left: 0;
      }
    }
`

const HeadRight = styled.div`
  a {
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    font-size: 15px;
    font-weight: 700;
    line-height: 24px;
    align-items: center;
    text-decoration: none;
    border-bottom: 2px solid rgba(253, 253, 253, 0.8);
    width: 200px;
    height: 45px;
    p {
      margin-right: 30px;
    }
  }
  @media only screen and (max-width: 1100px) {
    a {
      border-bottom: 0;
      font-size: 12px;
      font-weight: 700;
      line-height: 20px;
      border-bottom: 0;
      flex-direction: column;
      width: auto;
      height: auto;
      p {
        margin-right: 0;
      }
    }
  }
`

const Arrow = styled.img`
  //margin: 0 50px;
  z-index: 10;
`
const ArrowBtn = styled.img`
  z-index: 100;
  position: absolute;
  margin-left: 84px;
  margin-top: 50px;
`

const HeaderBottom = styled.div`
  //background-color: white;
  z-index: 1;
  height: 100px;
  width: 100vw;
  position: absolute;
  bottom: 0;
  p {
    color: white;
  }
`

const BtnImg = styled.img`
  //margin: 0 auto;
  z-index: 99;
  position: absolute;
  margin-top: 20px;
`

const BottomText = styled.p`
  width: 202px;
  text-align: center;
  //margin: auto;
  margin: auto;
  margin-top: -25px;
`

const HeaderContentRes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
  //height: 100vh;
  position: relative;
`

const TestAnime = styled.div``

const HeaderTopRes = styled.div`
  //margin-top: 140px;
`

const HeaderBotRes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: calc(100vw - 60px);
  margin: 140px auto 0 auto;
`

const SocialContainer = styled.div`
  //width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: absolute;
  bottom: 80px;
  left: calc(50vw - 125px / 2);
`

const Social = styled.a`
  width: 15px;
  height: 15px;
  margin: 0 0 0 10px;
  path {
    fill: white;
  }
`

const SocialFlex = styled.div``

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      screenWidth: "",
    }
  }

  componentDidMount = () => {
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
      <HeadContainer id="header">
        <TestAnime>
          <TestImageContainer>
            <HeadImg>
              <img alt="" src={this.props.image} />
            </HeadImg>
          </TestImageContainer>
        </TestAnime>
        {screenWidth <= 1100 ? (
          <HeaderContentRes>
            <HeaderTopRes>
              <HeaderText>
                <HeadLines>{this.props.head}</HeadLines>
                <Text>{this.props.text}</Text>
                <HeadLinesSmall>{this.props.smallHead}</HeadLinesSmall>
              </HeaderText>
            </HeaderTopRes>
            {window.location.pathname === "/" ? (
              <HeaderBotRes>
                <HeadLeft>
                  <HeaderText>
                    <Link to="/">
                      <p>Left</p>
                      <Arrow src={a1} />
                    </Link>
                  </HeaderText>
                </HeadLeft>
                <HeadRight>
                  <HeaderText>
                    <Link to="/">
                      <p>Right</p>
                      <Arrow src={a2} />
                    </Link>
                  </HeaderText>
                </HeadRight>
              </HeaderBotRes>
            ) : null}
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
          </HeaderContentRes>
        ) : (
          <HeaderContent>
            {window.location.pathname === "/" ? (
              <HeadLeft>
                <HeaderText>
                  <Link to="/">
                    <Arrow src={a1} />
                    <p>Left</p>
                  </Link>
                </HeaderText>
              </HeadLeft>
            ) : null}
            <HeadCenter>
              <HeaderText>
                <HeadLines>{this.props.head}</HeadLines>
                <Text>{this.props.text}</Text>
                <HeadLinesSmall>{this.props.smallHead}</HeadLinesSmall>
              </HeaderText>
            </HeadCenter>
            {window.location.pathname === "/" ? (
              <HeadRight>
                <HeaderText>
                  <Link to="/">
                    <p>Right</p>
                    <Arrow src={a2} />
                  </Link>
                </HeaderText>
              </HeadRight>
            ) : null}
          </HeaderContent>
        )}
        {screenWidth <= 1100 ? null : (
          <HeaderBottom>
            <BottomText>
              <HeaderText>Uzivajte u boravku</HeaderText>
            </BottomText>
            <div
              style={{
                width: "202px",
                margin: "auto",
                position: "relative",
                height: "auto",
              }}
            >
              <a href="#first">
                <BtnImg src={btn1} />
                <ArrowBtn src={a3} />
              </a>
            </div>
          </HeaderBottom>
        )}
      </HeadContainer>
    )
  }
}

export default Header
