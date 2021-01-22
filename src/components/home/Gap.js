import imageTwo from '../../assets/images/image-2.jpg';

const Gap = () => {
  return (
    <section data-component="Bridging the Gap" data-scroll-section>
      <div className="c-gap-image-info">
        <div className="o-container">
          <div className="c-gap-image-info__inner">
            <div className="c-gap-image-info__layout o-layout -flex -middle">
              <div className="c-gap-image-info__layout-item o-layout__item u-1/1 u-1/2@medium">
                <div className="c-gap-image-info__content l-layout__content -left">
                  <div className="l-layout__content-inner">
                    <h2 className="l-layout__content-title">Bridging the Gap</h2>
                    <p className="l-layout__content-text">
                      ESports are a relatively new market. We understand that existing gamblers may
                      be hesitant to adopt a new avenue of betting, so we have tailored our
                      interface to be simple, clear, and efficient. All betting pools are clearly
                      explained and well laid out so that people new to eSports will quickly
                      understand what they are watching and potentially betting on. A watchable live
                      stream is available for all matches covered by Ultimate Tournament.
                    </p>
                    <p className="l-layout__content-text">
                      To connect gamers to wagering, we have implemented an experience and leveling
                      system to make the wagering process more immersive and involved than ever
                      before. Users will be able to create accounts, follow friends, chat with other
                      players, and level up how they interact with the site. We aim to connect and
                      create a community that rallies around their favorite teams and places bets to
                      maximize the action.
                    </p>
                  </div>
                </div>
              </div>
              <div className="c-gap-image-info__layout-item o-layout__item u-1/1 u-1/2@medium">
                <div
                  className="c-gap-image-info__background o-reveal"
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
                        backgroundImage: `url(${imageTwo})`,
                      }}
                    />
                  </div>
                  <div className="o-reveal__background-reveal" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gap;
