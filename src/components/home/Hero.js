import React, { useState, useEffect } from 'react';
import heroImage from '../../assets/images/hero.jpg';

const test = 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Fronalpstock_big.jpg';

export default function Hero() {
  const [isActive, setActive] = useState('false');

  const socialClick = (e) => {
    e.preventDefault();
    setActive(!isActive);

    (async () => {
      try {
        const TweenMax = (await import('gsap/TweenMax')).default;
        const socialLinks = document.querySelectorAll(
          '.c-main-hero__social-link:not(.-social-hub)'
        );
        socialLinks.forEach(function (item, index) {
          if (!item.classList.contains('show')) {
            item.classList.add('show');
            TweenMax.to(item, 0.4, {
              y: (index - 5) * -10,
              autoAlpha: 1,
            });
          } else {
            TweenMax.staggerTo(socialLinks, 0.2, { y: 0, autoAlpha: 0 }, 0.1, function () {
              document
                .querySelectorAll('.c-main-hero__social-link.show')
                .forEach(function (element) {
                  element.classList.remove('show');
                });
            });
          }
        });
      } catch (error) {
        throw Error(`[GSAP]: ${error}`);
      }
    })();
  };
  return (
    <section data-component="main-hero" data-scroll-section>
      <div className="c-main-hero">
        <div className="c-main-hero__inner">
          <div className="c-main-hero__background">
            <div className="c-main-hero__background-wrap">
              <div
                className="o-background"
                data-scroll
                data-scroll-speed="-1"
                style={{
                  backgroundImage: `url(${heroImage})`,
                }}></div>
              <div className="c-main-hero__overlay" />
            </div>
          </div>
          <div className="c-main-hero__container o-container">
            <div className="c-main-hero__layout o-layout -flex -middle">
              <div className="c-main-hero__layout-item o-layout__item u-3/4@medium">
                <div className="c-main-hero__content">
                  <h1 className="c-main-hero__title">
                    <span className="c-main-hero__title-inner">
                      Lorem Ipsum
                      <span className="-period">.</span>
                      <span className="c-main-hero__title-bg" />
                    </span>
                  </h1>
                  <div className="c-main-hero__subtitle">
                    <div className="c-main-hero__subtitle-content">
                      <p className="c-main-hero__subtitle-message">Lore Impsum</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="c-main-hero__blurb">
                <div className="c-main-hero__blurb-content">
                  <span className="c-main-hero__blurb-title">
                    Lorem
                    <br /> Ipsum
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="__scroll u-anime -delay-4">
            <div className="scroll-wrap">
              <div className="scroll-text">Scroll to explore.</div>
              <div className="scroll-arrow">
                <svg>
                  <use xlinkHref="#svg-arrow-long" />
                </svg>
              </div>
            </div>
          </div>
          <div className="c-main-hero__social u-anime -delay-4">
            <ul className="c-main-hero__social-list">
              <li className="c-main-hero__social-item">
                <a
                  className="c-main-hero__social-link -linkedin"
                  href="/"
                  rel="noopener noreferrer"
                  target="_blank">
                  <svg className="c-main-hero__social-icon" role="img">
                    <use xlinkHref="#svg-linkedin" />
                  </svg>
                </a>
              </li>
              <li className="c-main-hero__social-item">
                <a
                  className="c-main-hero__social-link -twitter"
                  href="/"
                  rel="noopener noreferrer"
                  target="_blank">
                  <svg className="c-main-hero__social-icon" role="img">
                    <use xlinkHref="#svg-twitter" />
                  </svg>
                </a>
              </li>
              <li className="c-main-hero__social-item">
                <a
                  className="c-main-hero__social-link -facebook"
                  href="/"
                  rel="noopener noreferrer"
                  target="_blank">
                  <svg className="c-main-hero__social-icon" role="img">
                    <use xlinkHref="#svg-facebook" />
                  </svg>
                </a>
              </li>
              <li className="c-main-hero__social-item">
                <a
                  className="c-main-hero__social-link -youtube"
                  href="/"
                  rel="noopener noreferrer"
                  target="_blank">
                  <svg className="c-main-hero__social-icon" role="img">
                    <use xlinkHref="#svg-youtube" />
                  </svg>
                </a>
              </li>
              <li className="c-main-hero__social-item">
                <a
                  className="c-main-hero__social-link -instagram"
                  href="/"
                  rel="noopener noreferrer"
                  target="_blank">
                  <svg className="c-main-hero__social-icon" role="img">
                    <use xlinkHref="#svg-instagram" />
                  </svg>
                </a>
              </li>
              <li className="c-main-hero__social-item" id="social-hub">
                <a
                  className={`c-main-hero__social-link -social-hub ${isActive ? '--open' : ''}`}
                  href="#"
                  onClick={socialClick}>
                  <svg className="c-main-hero__social-icon" role="img">
                    <use xlinkHref="#svg-social-hub" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
