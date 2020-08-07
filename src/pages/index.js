import React, { Component } from "react"
// import { Link } from "gatsby"
//
// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"
import Topbar from "../components/Topbar"
import Header from "../components/Header"
import SlikeHome from "../components/SlikeHome"
import styled from "styled-components"
import OnamaHome from "../components/OnamaHome"
import Pohvale from "../components/Pohvale"
import Desavanja from "../components/Desavanja"
import Footer from "../components/Footer"
import s1 from "../images/meat-1155132_1920.jpg"
import Spiner from "../components/Spiner"

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

const TopContainer = styled.div`
  @media only screen and (max-width: 1200px) {
    height: 100vh;
  }
`

class IndexPage extends Component {
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
            <TopContainer>
              <Topbar />
              <Header
                image={s1}
                head="Kafana Ustanak"
                text="Želimo vam prijatan obrok i nadamo se da ćete i vi biti jedan od naših zadovoljnih gostiju. Stojimo vam na raspolaganju"
                smallHead="Dobro Došli"
              />
            </TopContainer>
            <div id="first" />
            <SlikeHome />
            <OnamaHome />
            <Pohvale />
            <Desavanja />
            <Footer />
          </Container>
        )}
      </>
    )
  }
}

export default IndexPage
