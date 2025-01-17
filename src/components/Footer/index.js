import styles from './Footer.module.scss'
import {
  FaFacebook,
  FaTwitter,
  FaInstagram
} from 'react-icons/fa'

const iconeProps = {
  color: 'white',
  size: 24
}

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <FaFacebook {...iconeProps} />
        <FaTwitter {...iconeProps} />
        <FaInstagram {...iconeProps} />
      </div>

      <span>
        Desenvolvido por Vinicius Farias
      </span>
    </footer>
  )
}

export default Footer;