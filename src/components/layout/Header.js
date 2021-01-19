import ActiveLink from '../global/ActiveLink';

export default function Header() {
  return (
    <header className="c-header-navigation u-anime -delay-4" id="main__menu">
      <div className="c-header-navigation__content">
        <a className="c-header-navigation__logo" href="/" target="_blank">
          <svg className="c-header-navigation__logo--desktop" role="img">
            <use xlinkHref="#svg-logo" />
          </svg>
          <svg className="c-header-navigation__logo--mobile" role="img">
            <use xlinkHref="#svg-logo" />
          </svg>
        </a>
        <nav className="c-header-navigation__nav">
          <ul className="c-header-navigation__list">
            <li className="c-header-navigation__item">
              <ActiveLink href="/" activeClassName="active">
                <a className="c-header-navigation__link">Our Offer</a>
              </ActiveLink>
            </li>
            <li className="c-header-navigation__item">
              <ActiveLink href="/example" activeClassName="active">
                <a className="c-header-navigation__link">Why UT</a>
              </ActiveLink>
            </li>
            <li className="c-header-navigation__item">
              <a href="#" className="c-header-navigation__link">
                Bridging the Gap
              </a>
            </li>
            <li className="c-header-navigation__item">
              <a href="#" className="c-header-navigation__link -cta-btn">
                Contact
                <span className="c-header-navigation__link-icon o-button__icon">
                  <svg>
                    <use xlinkHref="#svg-contact" />
                  </svg>
                </span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="c-header-navigation__menu">
          <div className="c-header-navigation__menu-wrap u-vertical-center">
            <button className="c-header-navigation__button" type="button">
              <div>
                <span className="c-header-navigation__button-line" />
                <span className="c-header-navigation__button-line" />
                <span className="c-header-navigation__button-line" />
              </div>
            </button>
          </div>
        </div>
        <div id="c-mega-menu" className="c-mega-menu">
          <div className="c-mega-menu__wrap">
            <ul className="c-mega-menu__level" aria-label="all" role="menu" data-menu="main">
              <li className="c-mega-menu__item" role="menuitem">
                <a className="c-mega-menu__item-link" href="/">
                  Lorem
                </a>
              </li>
              <li className="c-mega-menu__item" role="menuitem">
                <a className="c-mega-menu__item-link" href="/">
                  Lorem
                </a>
              </li>
              <li className="c-mega-menu__item" role="menuitem">
                <a className="c-mega-menu__item-link" href="/">
                  Lorem
                </a>
              </li>
              <li className="c-mega-menu__item" role="menuitem">
                <a className="c-mega-menu__item-link" href="/">
                  Lorem
                </a>
              </li>
              <li className="c-mega-menu__item" role="menuitem">
                <a className="c-mega-menu__item-link" href="/">
                  Lorem
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="o-overlay" />
    </header>
  );
}
