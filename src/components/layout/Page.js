import Guides from '../global/Guides';
import Loader from '../global/Loader';
// import Cursor from "../global/Cursor";
import Header from './Header';
import Footer from './Footer';

export default function Page(props) {
  return (
    <main>
      <Loader />
      {/* <div className="o-loader__next"></div> */}
      {/* <Cursor /> */}
      <Header />
      <div className="o-scroll">
        <div className="o-wrap">
          {props.children}
          <Footer />
        </div>
      </div>
      <Guides />
    </main>
  );
}
