import React from 'react'
import { Container } from './styled'
import {
  FaComments,
  FaStore,
  FaWhatsapp,
  FaUsers,
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaTelegram,
  FaYoutube
} from 'react-icons/fa'

const Footer = () => {
  return (
    <Container>
      <aside>
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
      </aside>
      <article>
        <h2>Area de funcionarios</h2>
        <ul>
          <li>Entrar na conta de vendedor</li>
          <li>Se registrar como vendedor</li>
          <li>Area restrita</li>
        </ul>
      </article>
      <article>
        <h2>Termos e direitos do cliente</h2>
        <ul>
          <li>Termos de uso</li>
          <li>Licença do projeto</li>
          <li>Troca ou devolução de produtos</li>
        </ul>
      </article>
      <section>
        <span>
          <FaFacebookSquare size={32} />
          <strong>Facebook</strong>
        </span>

        <span>
          <FaTwitter size={32} />
          <strong>Twitter</strong>
        </span>

        <span>
          <FaInstagram size={32} />
          <strong>Instagram</strong>
        </span>

        <span>
          <FaGithub size={32} />
          <strong>Github</strong>
        </span>

        <span>
          <FaTelegram size={32} />
          <strong>Telegram</strong>
        </span>

        <span>
          <FaYoutube size={32} />
          <strong>Youtube</strong>
        </span>
      </section>
    </Container>
  )
}

export default Footer
