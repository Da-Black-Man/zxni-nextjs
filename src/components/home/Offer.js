import phoneOne from '../../assets/images/phone-1.png';
import coinOne from '../../assets/images/ut-coin01.png';
import coinTwo from '../../assets/images/ut-coin02.png';
import imageOne from '../../assets/images/image-1.jpg';

const Offer = () => {
  return (
    <section data-compontent="offer" id="intro" data-scroll-section>
      <div className="c-offer">
        <div className="o-container">
          <div className="c-offer__quote">
            <span className="c-offer__quote-text">
              "Don't just be good, be Ultimate
              <em>.</em>"
            </span>
          </div>
          <div className="c-offer-main">
            <div className="c-offer-main__inner">
              <div className="o-layout -flex -middle">
                <div className="o-layout__item u-1/1@medium u-2/5@large">
                  <div className="c-offer-phone">
                    <div className="c-offer-phone__image-wrap">
                      <img className="c-offer-phone__image" alt="phone" src={phoneOne} />
                    </div>

                    <div className="c-offer-phone__image-content">
                      <p className="c-offer-phone__image-text">
                        22 ESports
                        <span>Play by Play Betting</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="o-layout__item u-1/1@medium u-3/5@large">
                  <div className="c-offer-main__content l-layout__content -right">
                    <div className="c-offer-main__coin -double">
                      <div
                        className="c-offer-main__coin-image"
                        style={{
                          backgroundImage: `url(${coinTwo})`,
                        }}
                      />
                    </div>
                    <div className="c-offer-main__content-inner l-layout__content-inner">
                      <h2 className="l-layout__content-title">Our Offer</h2>
                      <p className="l-layout__content-text">
                        We are working to build Ultimate Tournament into the premiere eSports
                        betting turnkey platform in the United States. Ultimate Tournament is a
                        turnkey eSports betting platform that enables play-by-play betting on 22 of
                        the most popular eSports and over 5000 matches every month. Our parimutuel
                        pools offer a wide range of betting options to satisfy any customer’s needs.
                        If you have custom requests for betting options or would like to cover your
                        own specific eSports matches, we are more than happy to implement any
                        request!
                      </p>
                      <p className="l-layout__content-text">
                        Ultimate Tournament also provides advanced odds data covering more than
                        3,000 matches sourced from 40,000 markets and 100,000 selections per month.
                        This gives gamblers more information and insight into the teams and players
                        they are wagering on and enables them to place bets confidently.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="c-offer-main__coin -single">
              <div
                className="c-offer-main__coin-image"
                style={{
                  backgroundImage: `url(${coinOne})`,
                }}
              />
            </div>
          </div>
          <div className="c-offer-count">
            <div className="c-offer-count__list">
              <div className="c-offer-count__list-item">
                <div className="c-offer-count__content">
                  <span className="c-offer-count__title l-layout__content-title">3,0000</span>
                  <p className="c-offer-count__text">Matches</p>
                </div>
              </div>
              <div className="c-offer-count__list-item">
                <div className="c-offer-count__content">
                  <span className="c-offer-count__title l-layout__content-title">100,000</span>
                  <p className="c-offer-count__text">Selections per month</p>
                </div>
              </div>
              <div className="c-offer-count__list-item">
                <div className="c-offer-count__content">
                  <span className="c-offer-count__title l-layout__content-title">40,000</span>
                  <p className="c-offer-count__text">Markets</p>
                </div>
              </div>
            </div>
          </div>
          <div className="c-offer-image-info">
            <div className="c-offer-image-info__inner">
              <div className="c-offer-image-info__layout o-layout -flex -middle">
                <div className="c-offer-image-info__layout-item o-layout__item u-1/1 u-1/2@medium">
                  <div
                    className="c-offer-image-info__background o-reveal"
                    data-scroll
                    data-scroll-class="is-reveal"
                    data-scroll-offset="0.3">
                    <div
                      className="o-background"
                      data-scroll
                      data-scroll-speed="-1"
                      data-scroll-position="middle">
                      <div
                        className="o-background__image-full"
                        style={{
                          backgroundImage: `url(${imageOne})`,
                        }}
                      />
                    </div>
                    <div className="o-reveal__background-reveal" />
                  </div>
                </div>
                <div className="c-offer-image-info__layout-item o-layout__item u-1/1 u-1/2@medium">
                  <div className="c-offer-image-info__content">
                    <div className="l-layout__content-inner">
                      <p className="l-layout__content-text">
                        Ultimate Tournament is ready to go when you need it. The turnkey white label
                        solution can be rapidly branded and deployed in the jurisdiction that you
                        operate in so that customers can immediately login and begin placing bets.
                        Ultimate Tournament is fully managed from the cloud, know your customer, and
                        payment processing. With Ultimate Tournament, you can go from having nothing
                        covering eSports to total custom coverage.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
