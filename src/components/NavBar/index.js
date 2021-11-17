import { Link } from "gatsby"
import React from "react"
import * as S from "./styled"

const NavBarOption = props => {
  return (
    <>
      {props.isSelected ? (
        <S.NavOptionWrapper onMouseOver={() => props.onMouseOver()}>
          <S.FoxFaceImg></S.FoxFaceImg>
          <Link to={props.to}>
            <S.NavOption>{props.name}</S.NavOption>
          </Link>
        </S.NavOptionWrapper>
      ) : (
        <S.NavOptionWrapper onMouseOver={() => props.onMouseOver()}>
          <S.NullImg></S.NullImg>
          <S.NavOption>{props.name}</S.NavOption>
        </S.NavOptionWrapper>
      )}
    </>
  )
}

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      options: [true, false, false],
    }
  }

  handleMouseHover = ix => {
    let updatedState = { ...this.state }
    updatedState.options = [false, false, false]
    updatedState.options[ix] = true

    this.setState(updatedState)
  }

  render() {
    return (
      <S.NavBarWrapper>
        <NavBarOption
          name="Home"
          to="/"
          onMouseOver={() => this.handleMouseHover(0)}
          isSelected={this.state.options[0]}
        ></NavBarOption>
        <NavBarOption
          name="About me"
          to="/about"
          onMouseOver={() => this.handleMouseHover(1)}
          isSelected={this.state.options[1]}
        ></NavBarOption>
        <NavBarOption
          name="Play"
          to="/game"
          onMouseOver={() => this.handleMouseHover(2)}
          isSelected={this.state.options[2]}
        ></NavBarOption>
      </S.NavBarWrapper>
    )
  }
}

export default NavBar
