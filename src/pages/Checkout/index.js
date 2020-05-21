import React from 'react'
import { FaReact } from 'react-icons/fa'

import { colors } from 'styles'
import { Container } from './styles'

export const Checkout = () => {
  return (
    <Container>
      <div>
        <FaReact size={200} color={colors.secondary} className="logo" />
        <p>
        Obrigado por finalizar sua compra !
        </p>
        <a
          href="https://github.com/emersomcarvalho"
          rel="noopener noreferrer"
          target="_blank"
        >
         GitHub
        </a>
      </div>
    </Container>
  )
}
