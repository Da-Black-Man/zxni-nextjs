import React, { useEffect, useState, useContext } from 'react';

import Guides from '../global/Guides';
import Loader from '../global/Loader';
// import Cursor from "../global/Cursor";
import Header from './Header';
import Footer from './Footer';
import logo from '../../assets/images/logo.png';
import { SmoothScrollContext } from '../../contexts/SmoothScroll.context';

export default function Page(props) {
  const { scroll } = useContext(SmoothScrollContext);

  useEffect(() => {
    const root = document.documentElement;
    scroll &&
      scroll.on('scroll', (instance) => {
        const scrollBottom = instance.scroll.y + window.innerHeight;

        instance.scroll.y > 20
          ? root.classList.add('has-scrolled')
          : root.classList.contains('has-scrolled') && root.classList.remove('has-scrolled');

        instance.scroll.y > 300
          ? root.classList.add('has-nav')
          : root.classList.contains('has-nav') && root.classList.remove('has-nav');

        scrollBottom > document.body.clientHeight - 100
          ? root.classList.add('has-scrolled-bottom')
          : root.classList.contains('has-scrolled-bottom') &&
            root.classList.remove('has-scrolled-bottom');
      });
  });

  return (
    <main>
      <Loader />
      {/* <div className="o-loader__next"></div> */}
      {/* <Cursor /> */}
      <Header logo={logo} />
      <div data-scroll-container className="o-scroll">
        <div className="o-wrap">
          {props.children}
          <Footer logo={logo} />
        </div>
      </div>
      <Guides />
    </main>
  );
}
