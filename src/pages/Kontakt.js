import React, { Component } from "react"
import Topbar from "../components/Topbar"
import Header from "../components/Header"
import s1 from "../images/kafana.png"
import Spiner from "../components/Spiner"
import styled from "styled-components"
import Footer from "../components/Footer"

// const infoData = {
//   adresa: {
//     name: "Adresa",
//     text: "Daruvarska 711000 Belgrade, Serbia",
//   },
//   telefon: {
//     name: "Telefon",
//     text: "061 203 5550",
//   },
//   email: {
//     name: "email adresa",
//     text: "info@restoranustanak.rs",
//   },
// }

const Container = styled.div``

const HeadContainer = styled.div`
  width: 500px;
  text-align: center;

  margin: 90px auto 60px;
`

const HeadLine = styled.h3`
  font-size: 60px;
  font-weight: 700;
  line-height: 55px;
`

const Text = styled.p`
  font-size: 15px;
  letter-spacing: 0.38px;
  line-height: 15px;
  text-align: center;
  width: 300px;
  margin: 0 auto 0 auto;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`

const InfoContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: no-wrap;
  width: calc(100vw - 245px * 2);
  margin: auto;
`

const InfoContainer = styled.div`
  width: 30%;
  text-align: center;
  margin: 0 0 40px 0;
  p {
    font-size: 20px;
    font-weight: 700;
    line-height: 55px;
  }
`

class Kontakt extends Component {
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
          <div>
            <div>
              <Topbar />
              <Header image={s1} head="Ovde nas možete naći" />
            </div>
            <div id="first" />
            <Container>
              <HeadContainer>
                <HeadLine>Kafana Ustanak</HeadLine>
                <Text>Bitne Informacije</Text>
              </HeadContainer>
              <InfoContent>
                <InfoContainer>
                  <p>Adresa</p>
                  <p>Daruvarska 7, 11000 Belgrade, Serbia</p>
                </InfoContainer>
                <InfoContainer>
                  <p>Broj telefona</p>
                  <p>061 203 5550</p>
                </InfoContainer>
                <InfoContainer>
                  <p>Email adresa</p>
                  <p>info@restoranustanak.rs</p>
                </InfoContainer>
              </InfoContent>
              <iframe
                title="UstanakLocation"
                style={{
                  width: "100vw",
                  height: "340px",
                  marginBottom: "210px",
                }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.875229146363!2d20.48484701596542!3d44.78334897909877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7061d07ad43b%3A0x6e00ad2cad1632ae!2sKafana+Ustanak!5e0!3m2!1sen!2srs!4v1565097670327!5m2!1sen!2srs"
                frameBorder="0"
                allowFullScreen
              />
            </Container>
            <Footer />
          </div>
        )}
      </>
    )
  }
}

export default Kontakt
