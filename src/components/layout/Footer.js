import PropTypes from 'prop-types';

const Footer = ({ logo }) => {
  return (
    <footer className="c-footer js-section" data-scroll-section>
      <div className="c-footer__content">
        <a className="c-footer-navigation__logo" href="/" target="_blank">
          <img className="c-footer-navigation__logo--desktop" alt="logo" src={logo} />
          <img className="c-footer-navigation__logo--mobile" alt="logo" src={logo} />
        </a>
        <nav className="c-footer-navigation__nav u-vertical-center">
          <div>
            <ul className="c-footer-navigation__list">
              <li className="c-footer-navigation__item">
                <a className="c-footer-navigation__link" href="/">
                  Lorem
                </a>
              </li>
              <li className="c-footer-navigation__item">
                <a className="c-footer-navigation__link" href="/">
                  Lorem
                </a>
              </li>
              <li className="c-footer-navigation__item">
                <a className="c-footer-navigation__link" href="/">
                  Lorem
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="c-footer__info">
        <div className="o-container">
          <div className="c-footer__info-layout o-layout -flex -middle">
            <div className="o-layout__item">
              <div className="c-footer__contact-info">
                <div className="c-footer__contact-address">
                  <span>Address</span>
                  <p>
                    123 can i get ahooyah,
                    <br />
                    MD 21111
                  </p>
                </div>
                <div className="c-footer__contact-phone">
                  <span>Phone</span>
                  <p>1-111-111-1111</p>
                </div>

                <div className="c-footer__contact-hours">
                  <span>Normal Office Hours</span>
                  <p>8 a.m. – 4:30 p.m.</p>
                </div>
              </div>
            </div>
            <div className="o-layout__item">
              <div className="c-footer__eeo">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nisi alias
                  similique maxime nihil beatae provident ad molestiae tempora laudantium ut
                  ducimus, assumenda eum a. Incidunt accusamus quaerat mollitia ipsum?
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="c-footer__copy-right">
          <div className="o-container">
            <div className="c-footer__copy-right-layout o-layout -gutter-small -flex">
              <div className="o-layout__item u-1/1 u-3/4@medium">
                <p>© Lorem Ipsum</p>
              </div>
              <div className="o-layout__item u-1/1 u-1/4@medium">
                <p>
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    ZXNI
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="__back-to js-scrollto">
        <div className="__back-to-link">
          <div className="__back-to-icon">
            <svg>
              <use xlinkHref="#svg-arrow-long" />
            </svg>
          </div>
          <div className="__back-to-label">Back To Top</div>
        </div>
      </div>
    </footer>
  );
};
Footer.propTypes = {
  logo: PropTypes.string.isRequired,
};
export default Footer;
