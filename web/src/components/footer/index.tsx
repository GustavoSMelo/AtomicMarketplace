import React from 'react'
import { Container } from './styled'
import { FaComments, FaStore, FaWhatsapp, FaUsers } from 'react-icons/fa'

const Footer = () => {
  return (
    <Container>
      <section>
        <span>
          <FaComments size={32} />
          <strong>FAQ</strong>
        </span>

        <span>
          <FaStore size={32} />
          <strong>Retire na loja</strong>
        </span>

        <span>
          <FaWhatsapp size={32} />
          <strong>Atendimento</strong>
        </span>

        <span>
          <FaUsers size={32} />
          <strong>Conheça nossa empresa</strong>
        </span>
      </section>
      <article>
        <ul>
          <li>Entrar na conta de fretador</li>
          <li>Se registrar como fretador</li>
          <li>Area restrita</li>
          <li>Termos de uso</li>
          <li>Licença do projeto</li>
        </ul>
      </article>
    </Container>
  )
}

export default Footer
