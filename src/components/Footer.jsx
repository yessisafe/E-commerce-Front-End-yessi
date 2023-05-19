import React from 'react'
import { Link } from 'react-router-dom'
import tonal from '../assets/logo-tonal.png'
import '../styles/footer.css'

const Footer = () => {
  return (
    <div>
      <footer className='text white py-5 bg-dark'>
        <div className='container'>
          <nav className='row gap-5 align-items-center'>
            <Link to='/' className='col-12 col-md-3 d-flex aling-items-center justify-content-center'>
              <img src={tonal} alt='logo' className='mx-2' />
            </Link>
            <ul className='col-12 col-md-6 list-unstyled d-flex gap-5 justify-content-center align-items-center mb-0 '>
              <li className='font-weight-bol sub  '>
                <p className='text-footer mb-0'>Descubre tu destino, abraza tu legado. </p>
              </li>
              <i className='fa-brands fa-instagram text-white fa-2x' />
              <i className='fa-brands fa-facebook text-white fa-2x' />
              <i className='fa-brands fa-twitter text-white fa-2x' />
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  )
}
export default Footer
