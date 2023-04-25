import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <div className="top-bar">
      <header id="header" className="d-flex position-relative">
        <div className="header-overlay"></div>
        <div className="icons-action-left d-flex">
          <button className="d-flex justify-content-center align-items-center">
            <i className="fa-solid fa-chevron-left"></i>
          </button>

          <button className="d-flex justify-content-center align-items-center ms-3">
            <i className="fa-solid fa-chevron-right "></i>
          </button>
        </div>

        <div className="d-flex ms-auto">
          <NavLink to="/faq">
            <button className="btn-upgrade">FAQ</button>
          </NavLink>
        </div>
      </header>
    </div>
  )
}
