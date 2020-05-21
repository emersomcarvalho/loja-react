import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { MdShoppingCart } from 'react-icons/md'

import { colors } from 'styles'
import { Container, Cart } from './styles'

import logo from '../../assets/images/pok5.png'

export const Header = () => {
  const counter = useSelector((state) => state.cart.length)

  return (
    <Container>
      <Link to="/">
        <img src={logo}  width={300} alt="pokelogo" />
      </Link>
      <Cart to="/cart">
        <strong>My Cart</strong>
        <span>{counter}</span>
        <MdShoppingCart size={36} color={colors.black} />
      </Cart>
    </Container>
  )
}
