import phoneOne from '../../assets/images/phone-1.png';
import coinOne from '../../assets/images/ut-coin01.png';
import coinTwo from '../../assets/images/ut-coin02.png';

const Offer = () => {
  return (
    <section data-compontent="offer">
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
        </div>
      </div>
    </section>
  );
};

export default Offer;
