import phoneExamples from "../assets/images/PhoneExamples.png";
import "../App.css";
import googlePlayBadgeNoBG from "../assets/images/googlePlayBadgeNoBG.png";
import AppleAppStoreBadge from "../assets/images/AppleAppStoreBadge.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake, faClock, faEye } from "@fortawesome/free-solid-svg-icons";
import BidIcon from "../assets/images/noun-auction-4831153.svg";

function App() {
  return (
    <div className="App">
      <div className="landing-row">
        <div>
          <p className="landing-row-item">
            At Shift It, we prodvide a marketplace for workers to swap shifts
          </p>
          <div className="badges-container">
            <a href="https://apps.apple.com/au/app/shift-it/id6449267356">
              <img
                src={AppleAppStoreBadge}
                alt="Apple App Store Badge"
                className="badge badge-apple "
              />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.macla7.shift_it">
              <img
                src={googlePlayBadgeNoBG}
                alt="google play store badge"
                className="badge"
              />
            </a>
          </div>
        </div>
        <div className="landing-row-item">
          <img
            src={phoneExamples}
            alt="home screen IPhone example"
            className="home-screen"
          />
        </div>
      </div>
      <div className="features-container">
        <div className="feature">
          <div className="feature-icon-container">
            <div id="feature-icon-1" className="feature-icon">
              <FontAwesomeIcon icon={faEye} color="white" size="2xl" />
            </div>
          </div>
          <p className="feature-title">More visiblity</p>
          <p className="feature-body">
            A centralized place for overseeing employee shift swaps
          </p>
        </div>
        <div className="feature">
          <div id="feature-icon-2" className="feature-icon">
            <FontAwesomeIcon icon={faHandshake} color="white" size="2xl" />
          </div>
          <p className="feature-title">Easier Swapping</p>
          <div className="feature-body">
            A bidding system that promotes flexibility in shift swapping
          </div>
        </div>
        <div className="feature">
          <div id="feature-icon-3" className="feature-icon">
            <FontAwesomeIcon icon={faClock} color="white" size="2xl" />
          </div>
          <p className="feature-title">Save manager's time</p>
          <div className="feature-body">
            Managers can avoid the hassle of finding covers or dealing with
            understaffing
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
