import phoneTwo from '../../assets/images/phone-2.png';

const Why = () => {
  return (
    <section data-compontent="why">
      <div className="c-why">
        <div className="o-container">
          <div className="c-why-image-info">
            <div className="c-why-image-info__inner">
              <div className="c-why-image-info__layout o-layout -flex -middle">
                <div className="c-why-image-info__layout-item o-layout__item u-1/1 u-1/2@medium">
                  <div className="c-why-image-info__content">
                    <div className="l-layout__content-inner">
                      <h2 className="l-layout__content-title"> Why Ultimate Tournament</h2>
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
                <div className="c-why-image-info__layout-item o-layout__item u-1/1 u-1/2@medium">
                  <div className="c-why-image-info__phone">
                    <div className="c-why-image-info__phone-wrap">
                      <div className="c-why-image-info__phone-content">
                        <p className="c-why-image-info__phone-text">
                          White Label
                          <span>Rebrand with ease</span>
                        </p>
                      </div>
                      <img className="c-why-image-info__phone-img" alt="phone2" src={phoneTwo} />
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

export default Why;
