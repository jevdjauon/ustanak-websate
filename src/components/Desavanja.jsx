import React, { Component } from "react"
import styled from "styled-components"
import desavanja from "../config/DesavanjaData"
import "./Desavanja.css"
import { useSpring, animated } from "react-spring"

const DesavanjaContainer = styled.div`
  width: calc(100vw - 162px - 162px);
  margin: auto;
  padding: 50px 0 100px;
  height: 100vh;
  @media only screen and (max-width: 1200px) {
    width: 100vw;
    margin-bottom: 200px;
    height: 100vh;
  }
`

const HeadLines = styled.h1`
  font-size: 80px;
  font-weight: 700;
  line-height: 55px;
  margin-bottom: 40px;
  @media only screen and (max-width: 1100px) {
    font-size: 30px;
    font-weight: 700;
    line-height: 55px;
    margin-bottom: 0;
  }
`

const Text = styled.p`
  font-size: 15px;
  letter-spacing: 0.6px;
  line-height: 15px;
`

const Event = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: -162px;
  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    justify-content: flex-start !important;
    width: 100vw;
  }
`

const EventHead = styled.h3``

const EventImg = styled.img`
  position: relative;
  width: 900px;
  height: 600px;
  @media only screen and (max-width: 1200px) {
    width: 100vw;
    height: auto;
  }
`

const EventContainer = styled.div`
  flex-basis: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 50px;
  margin-right: 50px;
  @media only screen and (max-width: 1200px) {
    order: 2;
    flex-basis: 100%;
    width: 90vw;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
`

const BtnContainer = styled.div`
  margin-top: 50px;
  div {
    border-bottom: 1px solid #c8c8c8;
    border-top: 1px solid #c8c8c8;
    width: 150px;
    height: 40px;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
    a {
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
      color: black;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  }
  @media only screen and (max-width: 1100px) {
    margin-bottom: 50px;
  }
`

const EventDate = styled.p`
  color: gray;
  font-size: 15px;
  line-height: 55px;
`

const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-height: 600px;
  margin-top: 50px;
  @media only screen and (max-width: 1600px) {
    //margin-top: 50px;
    //max-height: auto;
    flex-direction: column;
    justify-content: flex-start;
  }
`

const Navigate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-basis: 25%;
  @media only screen and (max-width: 1600px) {
    flex-basis: 100%;
    flex-wrap: nowrap;
  }
`

const Date = styled.div`
  //width: 80px;
  @media only screen and (max-width: 1600px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`

const Day = styled.p`
  font-size: 50px;
  font-weight: 700;
  line-height: 55px;
  text-align: center;
  margin: 0 !important;
  @media only screen and (max-width: 1600px) {
    font-size: 10px;
    font-weight: 700;
    line-height: 13px;
    margin-right: 5px !important;
  }
`

const Month = styled.p`
  font-size: 13px;
  font-weight: 700;
  //line-height: 55px;
  text-align: center;
  height: 25px;
  @media only screen and (max-width: 1600px) {
    font-size: 10px;
    font-weight: 700;
    line-height: 13px;
  }
`

const Right = styled.div`
  flex-basis: 75%;
  @media only screen and (max-width: 1600px) {
    flex-basis: 100%;
  }
`

const Head = styled.div`
  @media only screen and (max-width: 1600px) {
    text-align: center;
    //height: 200px;
  }
  @media only screen and (max-width: 1200px) {
    //height: 350px;
  }
`

class Desavanja extends Component {
  state = {
    activeKey: "18 Jul",
    expanded: false,
  }

  handleClick = activeKey => {
    this.setState({ activeKey })
    this.setState({ expanded: false })
  }

  readMore = () => {
    this.setState({
      expanded: !this.state.expanded,
    })
  }

  render() {
    let { activeKey } = this.state
    let { expanded } = this.state
    // console.log(desavanja[activeKey].naziv)
    return (
      <DesavanjaContainer>
        <Head>
          <HeadLines>Novosti</HeadLines>
          <Text>Budite u toku sa našim događajima</Text>
        </Head>
        <DateContainer>
          <Navigate>
            {/*{Object.keys(desavanja)*/}
            {/*  .reverse()*/}
            {/*  .map(key => {*/}
            {Object.keys(desavanja).map(key => {
              const { date, day, month } = desavanja[key]
              return (
                <div
                  key={date}
                  onClick={() => this.handleClick(key)}
                  className={`desavanja ${activeKey === key &&
                    "activeDesavanja"}`}
                >
                  <Date>
                    <Day>{day}</Day>
                    <Month>{month}</Month>
                  </Date>
                </div>
              )
            })}
          </Navigate>
          <Right>
            <Event>
              <EventContainer>
                <EventHead>{desavanja[activeKey].naziv}</EventHead>
                <EventDate>{desavanja[activeKey].date}</EventDate>
                <Text>
                  {desavanja[activeKey].detalji}
                  <span>
                    {expanded === true ? desavanja[activeKey].vise : null}
                  </span>
                </Text>
                <BtnContainer>
                  <div>
                    <a onClick={this.readMore}>
                      {expanded === false ? "Detaljnije" : "Manje"}
                    </a>
                  </div>
                </BtnContainer>
              </EventContainer>
              <EventImg src={desavanja[activeKey].src} />
            </Event>
          </Right>
        </DateContainer>
      </DesavanjaContainer>
    )
  }
}

export default Desavanja
