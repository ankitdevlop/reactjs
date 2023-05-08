import React from 'react'
import PropTypes from 'prop-types'


export default function Navabar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
             Home
              </li>
            
         
             
              <li className="nav-item">
                <a className="nav-link" href="/">{props.about}</a>
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggalemode} />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault " id='btn'><strong>🌞</strong></label>
            </div>
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'red' : 'light'}`}>
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggalemode2} />
              <label className="form-check-label text-red" htmlFor="flexSwitchCheckDefault " id='btn2'><strong>Enable red mode</strong></label>
            </div>
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'pink' : 'light'}`}>
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggalemode4} />
              <label className="form-check-label text-red" htmlFor="flexSwitchCheckDefault " id='btn3'><strong>Enable pink mode</strong></label>
            </div>
          </div>
        </div>
      </nav>

    </>
  )
}
Navabar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,

}
// Navabar.defaultProps={
// title:"this is text utel ",
// }
