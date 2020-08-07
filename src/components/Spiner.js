import React from "react"
import "./Spiner.css"
import styled from "styled-components"
import logo from "../images/Ustanak_logo_senka.png"

const Logo = styled.img`
  padding: 30px 30px;
  margin-bottom: 0 !important;
  z-index: 1;
`

// const Back = styled.img`
//   z-index: -1 !important;
//   position: absolute;
// `

const Spiner = () => {
  return (
    <div className="containerCircle">
      {/*<Back src={back} />*/}
      <div className="lds-circle">
        <div>
          <Logo src={logo} />
          {/*<h1>Kafana Ustanak</h1>*/}
        </div>
      </div>
    </div>
  )
}

export default Spiner
