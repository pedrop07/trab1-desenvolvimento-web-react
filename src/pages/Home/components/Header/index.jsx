import { NavLink } from "react-router-dom"

export function Header(){
    return (
        <div class="top-bar">
        <header id="header" class="d-flex position-relative">
          <div class="header-overlay"></div>
          <div class="icons-action-left d-flex">
            <button class="d-flex justify-content-center align-items-center">
              <i class="fa-solid fa-chevron-left"></i>
            </button>

            <button class="d-flex justify-content-center align-items-center ms-3">
              <i class="fa-solid fa-chevron-right "></i>
            </button>
          </div>

          <div class="d-flex ms-auto">
            <NavLink to='/faq'>
              <button class="btn-upgrade">FAQ</button>
            </NavLink>
          </div>
        </header>
      </div>
    )
}