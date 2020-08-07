import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import logo from "../images/Ustanak_logo_senka.png"
import InlineSVG from "svg-inline-react"
import { insta, face, gplus, twitter, youtube } from "../config/svg"
import "./Topbar.css"

const TopbarContainer = styled.div`
  background: transparent;
  height: 150px;
  position: relative;
  width: calc(100vw - 162px - 162px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  color: white;
  margin: auto;
  @media only screen and (max-width: 1400px) {
    width: 90vw;
    margin: auto;
  }
`

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-basis: 50%;
  a {
    min-width: 140px;
    color: white !important;
    text-decoration: none;
    font-size: 15px;
    font-weight: 700;
    line-height: 24px;
    text-align: center;
    cursor: pointer;
  }
  @media only screen and (max-width: 1400px) {
    a {
      font-size: 13px;
      font-weight: 600;
      line-height: 18px;
    }
  }
`

const style = {
  color: "white",
  opacity: "0.8",
  padding: "40px 40px",
  whiteSpace: "nowrap",
  borderBottom: "1px transparent",
}

const activeStyle = {
  borderBottom: "1px solid white",
  opacity: "1",
  padding: "40px 40px",
}

const Logo = styled.img`
  padding: 40px 40px;
  margin-bottom: 0 !important;
`

const LogoRes = styled.div`
  //padding: 40px 40px;
  margin-bottom: 0 !important;
  width: 44px;
  height: 44px;
`

const Number = styled.a`
  font-size: 15px;
  letter-spacing: 0.3px;
  line-height: 15px;
  color: white;
  text-decoration: none;
  text-align: center;
`

const SocialContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

const Social = styled.a`
  width: 15px;
  height: 15px;
  margin: 0 0 0 10px;
  path {
    fill: white;
  }
`

const TopbarRes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90vw;
  margin: 20px auto auto auto;
`

const MenuRes = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 5;
  width: 100vw;
  height: 100vh;
  background: #840d0c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: none;
    font-family: "Cinzel", serif;
    color: white;
    font-size: 30px;
    font-weight: 700;
    line-height: 75px;
    text-align: center;
    margin-bottom: 45px;
  }
`

class Topbar extends Component {
  state = {
    screenWidth: "",
    display: false,
    active: false,
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

  openNav = () => {
    this.setState({ display: !this.state.display })
    const currentState = this.state.active
    this.setState({ active: !currentState })
  }

  closeNav = () => {
    this.setState({ display: false })
  }

  toggleClass() {
    const currentState = this.state.active
    this.setState({ active: !currentState })
  }

  render() {
    let screenWidth = this.state.screenWidth
    let display = this.state.display
    return (
      <>
        {screenWidth <= 1200 ? (
          <>
            <TopbarRes>
              <LogoRes>
                <img alt="" src={logo} />
              </LogoRes>
              <Number href="tel:381-61-203-5550">+381 61 20 35 550</Number>
              <div
                className={this.state.active ? "menuBtn" : "active"}
                onClick={this.openNav}
              >
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
              </div>
            </TopbarRes>
            {display === true ? (
              <>
                <MenuRes>
                  <Link to="/">Početna</Link>
                  <Link to="/Onama">O Nama</Link>
                  <Link to="/Meni">Meni</Link>
                  <Link to="/Kontakt">Kontakt</Link>
                </MenuRes>
              </>
            ) : null}
          </>
        ) : (
          <TopbarContainer>
            <Number style={{ width: "20%" }} href="tel:381-11-203-5550">
              +381 61 20 35 550
            </Number>
            <Menu>
              <Link style={style} activeStyle={activeStyle} to="/">
                Početna
              </Link>
              <Link style={style} activeStyle={activeStyle} to="/Onama">
                O Nama
              </Link>
              <Logo src={logo} />
              <Link style={style} activeStyle={activeStyle} to="/Meni">
                Meni
              </Link>
              <Link style={style} activeStyle={activeStyle} to="/Kontakt">
                Kontakt
              </Link>
            </Menu>
            <div style={{ width: "20%" }}>
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
            </div>
          </TopbarContainer>
        )}
      </>
    )
  }
}

export default Topbar
