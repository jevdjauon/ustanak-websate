import React, { Component } from "react"
import menu from "../config/MenuData"
import styled from "styled-components"
import "./Meni.css"
import Topbar from "../components/Topbar"
import Header from "../components/Header"
import Footer from "../components/Footer"
import s1 from "../images/rachel-park-hrlvr2ZlUNk-unsplash.jpg"
import Spiner from "../components/Spiner"

const MenuOption = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  cursor: pointer;
  height: 50px;
  align-items: center;
  margin: 0 0 5px 0;
  @media only screen and (max-width: 1100px) {
    flex-direction: row;
    margin: 0;
  }
`

const Num = styled.p`
  padding: 0 20px;
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  margin: 0 !important;
  @media only screen and (max-width: 1100px) {
    display: none;
  }
`

const Container = styled.div`
  width: 80vw;
  margin: auto;
`

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  @media only screen and (max-width: 1100px) {
    flex-direction: column;
  }
`

const Text = styled.p`
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  margin: 0 !important;
  @media only screen and (max-width: 1100px) {
    text-align: center !important;
    white-space: nowrap;
    margin: 0 20px 0 0 !important;
    font-size: 12px;
    font-weight: 700;
    line-height: 15px;
  }
`

const WhiteSpace = styled.div`
  height: 100px;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 40px;
  p {
    margin: 0 !important;
    white-space: nowrap;
    //width: 100vw;
  }
  @media only screen and (max-width: 1100px) {
    width: 80vw;
  }
`

const MenuIndex = styled.div`
  flex-basis: 50%;
`

const Dots = styled.div`
  border-bottom: 1px dotted gray;
  //min-width: 70%;
  width: 100%;
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
`

const Name = styled.p`
  flex-basis: 5%;
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
`

const Price = styled.p`
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
`

const Headline = styled.h1`
  font-size: 60px;
  font-weight: 700;
  line-height: 75px;
  @media only screen and (max-width: 1100px) {
    font-size: 30px;
    font-weight: 700;
    line-height: 22px;
    text-align: center;
  }
`

const UnderHead = styled.h1`
  font-size: 30px;
  font-weight: 700;
  line-height: 75px;
  @media only screen and (max-width: 1100px) {
    font-size: 15px;
    font-weight: 700;
    line-height: 22px;
    text-align: center;
    margin-top: 40px;
  }
`

class Meni extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
      activeKey: "Hladna Predjela",
      screenWidth: "",
    }
  }

  // state = {
  //   activeKey: "Hladna Predjela",
  // }

  handleClick = activeKey => {
    // ReactPixel.trackCustom("Klik na meni (Desktop)", { menu: activeKey })
    this.setState({ activeKey })
  }

  componentDidMount = () => {
    let screenWidth = window.innerWidth
    this.setState({ screenWidth: screenWidth })
    window.addEventListener("resize", this.updateWindowDimensions)
    this.timer = setInterval(() => this.setState({ loaded: true }), 500)
  }

  componentWillUnmount = () => {
    clearInterval(this.timer)
    window.removeEventListener("resize", this.updateWindowDimensions)
  }

  updateWindowDimensions = () => {
    this.setState({
      screenWidth: window.screen.width,
    })
  }

  render() {
    let { activeKey } = this.state
    let screenWidth = this.state.screenWidth
    return (
      <>
        {this.state.loaded === false ? (
          <Spiner />
        ) : (
          <>
            <div>
              <Topbar />
              <Header
                image={s1}
                head="Ustanak Meni"
                text="Pogledajte našu ponudu"
              />
            </div>
            <div id="first" />
            <Container>
              <Headline>Naša ponuda</Headline>
              <Content>
                <div
                  className={`left ${screenWidth <= 1100 ? "flexRow" : null}`}
                >
                  {Object.keys(menu).map(key => {
                    const { title, number } = menu[key]
                    return (
                      <div
                        key={title}
                        onClick={() => this.handleClick(key)}
                        className={`menu ${activeKey === key &&
                          "activeMenuItem"} ${
                          screenWidth <= 1100 ? "borderLeft" : null
                        }`}
                      >
                        <MenuOption>
                          <Num>{number}</Num>
                          <Text>{title}</Text>
                        </MenuOption>
                      </div>
                    )
                  })}
                </div>
                <MenuIndex>
                  <UnderHead>{menu[activeKey].title}</UnderHead>
                  {menu[activeKey].items.map(item => (
                    <Row>
                      <Name key={item.text}>{item.text}</Name>
                      <Dots />
                      <Price key={item.price}>{item.price}</Price>
                    </Row>
                  ))}
                </MenuIndex>
              </Content>
            </Container>
            <WhiteSpace />
            <Footer />
          </>
        )}
      </>
    )
  }
}

export default Meni
