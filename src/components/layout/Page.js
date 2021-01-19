import Guides from '../global/Guides';
import Loader from '../global/Loader';
// import Cursor from "../global/Cursor";
import Header from './Header';
import Footer from './Footer';
import logo from '../../assets/images/logo.png';

export default function Page(props) {
  return (
    <main>
      <Loader />
      {/* <div className="o-loader__next"></div> */}
      {/* <Cursor /> */}
      <Header logo={logo} />
      <div className="o-scroll">
        <div className="o-wrap">
          {props.children}
          <Footer logo={logo} />
        </div>
      </div>
      <Guides />
    </main>
  );
}
