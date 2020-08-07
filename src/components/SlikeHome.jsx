import React, { Component } from "react"
import styled from "styled-components"
import slike from "../config/SlikeData"
import d1 from "../images/slider/Untitled-1.png"
import d2 from "../images/slider/Untitled-2.png"
import d3 from "../images/slider/Untitled-5.png"
import d4 from "../images/slider/Untitled-6.png"
import d5 from "../images/slider/Untitled-3.png"
import d6 from "../images/slider/Untitled-4.png"
import p1 from "../images/slider/pice-1.png"
import p2 from "../images/slider/pice-2.png"
import p3 from "../images/slider/pice-3.png"
import p4 from "../images/slider/pice-5.png"
import p5 from "../images/slider/pice-4.png"
import p6 from "../images/slider/pice-6.png"
import r6 from "../images/chicken-3183558.jpg"
import r4 from "../images/jenn-kosar-9Er-MNdzrPA-unsplash.jpg"
import r3 from "../images/emerson-vieira-cpkPJ-U9eUM-unsplash.jpg"
import r2 from "../images/jenn-kosar-9Er-MNdzrPA-unsplash.jpg"
import r5 from "../images/slika5.png"
import r1 from "../images/slika6.png"
import s1 from "../images/chicken-3183558.jpg"
import s2 from "../images/jenn-kosar-9Er-MNdzrPA-unsplash.jpg"
import s6 from "../images/emerson-vieira-cpkPJ-U9eUM-unsplash.jpg"
import s4 from "../images/jenn-kosar-9Er-MNdzrPA-unsplash.jpg"
import s5 from "../images/slika5.png"
import s3 from "../images/slika6.png"
import k4 from "../images/chicken-3183558.jpg"
import k5 from "../images/jenn-kosar-9Er-MNdzrPA-unsplash.jpg"
import k1 from "../images/emerson-vieira-cpkPJ-U9eUM-unsplash.jpg"
import k2 from "../images/jenn-kosar-9Er-MNdzrPA-unsplash.jpg"
import k3 from "../images/slika5.png"
import k6 from "../images/slika6.png"

const SlikeContainer = styled.div`
  position: absolute;
  width: calc(100vw - 162px - 162px);
  //position: relative;
  margin: auto;
  max-height: 100vh;
  top: 110vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: center;
  @media only screen and (max-width: 1100px) {
    flex-direction: column;
    justify-content: center;
    position: relative;
    top: 400px;
    width: calc(100vw - 60px);
  }
`

const ImgContainer = styled.div`
  //position: absolute;
  display: grid;
  grid-template-rows: 75px 75px 75px 75px 75px 75px 75px;
  grid-template-columns: 140px 140px 140px 140px 140px 140px 140px 140px;
  flex-basis: 50%;
  @media only screen and (max-width: 1500px) {
    //display: flex;
    //flex-direction: row;
    //justify-content: center;
    //flex-wrap: wrap;
    //align-items: flex-end;
    grid-template-rows: 30vw 30vw 30vw;
    grid-template-columns: 20vh 20vh 20vh 20vh;
  }
`

const Img1 = styled.div`
  grid-column: 1 / 3;
  grid-row: 3 / 5;
  width: 100%;
  max-height: 100%;
  overflow: hidden;
  //padding: 5px;
  border: 5px solid white;
  img {
    width: 100%;
    height: auto;
  }
  @media only screen and (max-width: 1100px) {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    //width: 200px;
    //height: 100px;
  }
`

const Img2 = styled.div`
  grid-column: 1 / 3;
  grid-row: 5 / 7;
  width: 100%;
  max-height: 100%;
  overflow: hidden;
  //padding: 5px;
  border: 5px solid white;
  img {
    width: 100%;
    height: auto;
  }
  @media only screen and (max-width: 1100px) {
    grid-column: 3 / 4;
    grid-row: 1 / 3;
    //width: 200px;
    //height: 100px;
  }
`

const Img3 = styled.div`
  grid-column: 3 / 5;
  grid-row: 1 / 5;
  width: 100%;
  max-height: 100%;
  overflow: hidden;
  //padding: 5px;
  border: 5px solid white;
  img {
    width: 100%;
    height: auto;
  }
  @media only screen and (max-width: 1100px) {
    //width: 200px;
    //height: 100px;
    grid-column: 1 / 2;
    grid-row: 2 / 4;
  }
`

const Img4 = styled.div`
  grid-column: 3 / 5;
  grid-row: 5 / 8;
  width: 100%;
  max-height: 100%;
  overflow: hidden;
  border: 5px solid white;
  img {
    width: 100%;
    height: auto;
  }
  @media only screen and (max-width: 1100px) {
    //width: 200px;
    //height: 100px;
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
`

const Img5 = styled.div`
  grid-column: 5 / 8;
  grid-row: 2 / 4;
  width: 100%;
  max-height: 100%;
  overflow: hidden;
  //padding: 5px;
  border: 5px solid white;
  img {
    width: 100%;
    height: auto;
  }
  @media only screen and (max-width: 1100px) {
    //width: 200px;
    //height: 100px;
    grid-column: 2 / 3;
    grid-row: 3 / 4;
  }
`

const Img6 = styled.div`
  grid-column: 5 / 9;
  grid-row: 4 / 8;
  width: 100%;
  max-height: 100%;
  overflow: hidden;
  //padding: 5px;
  border: 5px solid white;
  img {
    width: 100%;
    height: auto;
  }
  @media only screen and (max-width: 1100px) {
    //width: 200px;
    //height: 100px;
    grid-column: 3 / 4;
    grid-row: 3 / 4;
  }
`

const Btn1 = styled.a`
  grid-column: 1 / 2;
  grid-row: 7 / end;
  background: black;
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  //border: 5px solid white;
  cursor: pointer;
  margin: 5px;
`

const Btn2 = styled.a`
  grid-column: 2 / 3;
  grid-row: 7 / end;
  background: black;
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  //border: 5px solid white;
  cursor: pointer;
  margin: 5px;
`

const Navigate = styled.div`
  flex-basis: 50%;
`

const Text = styled.p`
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  margin: 0 !important;
`

const MenuOption = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  cursor: pointer;
  height: 50px;
  align-items: center;
  margin: 0 0 5px 0;
`

const Num = styled.p`
  padding: 0 20px;
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  margin: 0 !important;
`

class SlikeHome extends Component {
  state = {
    activeKey: "Doručak",
  }

  handleClick = activeKey => {
    // ReactPixel.trackCustom("Klik na meni (Desktop)", { menu: activeKey })
    this.setState({ activeKey })
  }

  dorucakLeft = () => {
    this.setState({
      activeKey: "Kafana unutra",
    })
  }

  dorucakRight = () => {
    this.setState({
      activeKey: "Pića",
    })
  }

  piceLeft = () => {
    this.setState({
      activeKey: "Doručak",
    })
  }

  piceRight = () => {
    this.setState({
      activeKey: "Jela sa roštilja",
    })
  }

  rostiljLeft = () => {
    this.setState({
      activeKey: "Pića",
    })
  }

  rostiljRight = () => {
    this.setState({
      activeKey: "Specijaliteti",
    })
  }

  specLeft = () => {
    this.setState({
      activeKey: "Jela sa roštilja",
    })
  }

  specRight = () => {
    this.setState({
      activeKey: "Kafana unutra",
    })
  }

  kafanaLeft = () => {
    this.setState({
      activeKey: "Specijaliteti",
    })
  }

  kafanaRight = () => {
    this.setState({
      activeKey: "Doručak",
    })
  }

  render() {
    let { activeKey } = this.state

    return (
      <SlikeContainer>
        {/*<p>test</p>*/}
        <Navigate>
          <h3>slike naših specijaliteta</h3>
          <p>Pogledajte našu ponudu</p>
          {Object.keys(slike).map(key => {
            const { title, number } = slike[key]
            return (
              <div
                key={title}
                onClick={() => this.handleClick(key)}
                className={`menu ${activeKey === key && "activeMenuItem"}`}
              >
                <MenuOption>
                  <Num>{number}</Num>
                  <Text>{title}</Text>
                </MenuOption>
              </div>
            )
          })}
        </Navigate>
        {/*<div className="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>*/}
        {/*  <animated.div className="card1" style={{ transform: props.xy.interpolate(trans1) }}/>*/}
        {activeKey === "Doručak" ? (
          <ImgContainer>
            <Img1>
              <img alt="" src={d1} />
            </Img1>
            <Img2>
              <img alt="" src={d2} />
            </Img2>
            <Img3>
              <img alt="" src={d3} />
            </Img3>
            <Img4>
              <img alt="" src={d4} />
            </Img4>
            <Img5>
              <img alt="" src={d5} />
            </Img5>
            <Img6>
              <img alt="" src={d6} />
            </Img6>
            <Btn1 onClick={this.dorucakLeft} />
            <Btn2 onClick={this.dorucakRight} />
          </ImgContainer>
        ) : null}
        {activeKey === "Pića" ? (
          <ImgContainer>
            <Img1>
              <img alt="" src={p1} />
            </Img1>
            <Img2>
              <img alt="" src={p2} />
            </Img2>
            <Img3>
              <img alt="" src={p3} />
            </Img3>
            <Img4>
              <img alt="" src={p4} />
            </Img4>
            <Img5>
              <img alt="" src={p5} />
            </Img5>
            <Img6>
              <img alt="" src={p6} />
            </Img6>
            <Btn1 onClick={this.piceLeft} />
            <Btn2 onClick={this.piceRight} />
          </ImgContainer>
        ) : null}
        {activeKey === "Jela sa roštilja" ? (
          <ImgContainer>
            <Img1>
              <img alt="" src={r1} />
            </Img1>
            <Img2>
              <img alt="" src={r2} />
            </Img2>
            <Img3>
              <img alt="" src={r3} />
            </Img3>
            <Img4>
              <img alt="" src={r4} />
            </Img4>
            <Img5>
              <img alt="" src={r5} />
            </Img5>
            <Img6>
              <img alt="" src={r6} />
            </Img6>
            <Btn1 onClick={this.rostiljLeft} />
            <Btn2 onClick={this.rostiljRight} />
          </ImgContainer>
        ) : null}
        {activeKey === "Specijaliteti" ? (
          <ImgContainer>
            <Img1 alt="" src={s1} />
            <Img2 alt="" src={s2} />
            {/*<ImgDiv2 />*/}
            <Img3 alt="" src={s3} />
            <Img4>
              <img alt="" src={s4} />
            </Img4>
            <Img5>
              <img alt="" src={s5} />
            </Img5>
            <Img6>
              <img alt="" src={s6} />
            </Img6>
            <Btn1 onClick={this.specLeft} />
            <Btn2 onClick={this.specRight} />
          </ImgContainer>
        ) : null}
        {activeKey === "Kafana unutra" ? (
          <ImgContainer>
            <Img1 alt="" src={k1} />
            <Img2 alt="" src={k2} />
            {/*<ImgDiv2 />*/}
            <Img3 alt="" src={k3} />
            <Img4>
              <img alt="" src={k4} />
            </Img4>
            <Img5>
              <img alt="" src={k5} />
            </Img5>
            <Img6>
              <img alt="" src={k6} />
            </Img6>
            <Btn1 onClick={this.kafanaLeft} />
            <Btn2 onClick={this.kafanaRight} />
          </ImgContainer>
        ) : null}
      </SlikeContainer>
    )
  }
}
export default SlikeHome
