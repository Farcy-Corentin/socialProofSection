import {Ratings} from "./components/Ratings.jsx";
import {SocialCards} from "./components/SocialCards.jsx";

function App() {

  return (
    <div className="container">
        <div className="hero">
            <div className="hero__intro">
                <h1 className="hero__intro__title">10,000+ of our users love our products.</h1>
                <p className="hero__intro__description">
                    We only provide greats products combined with excellent customer service.
                    See what our satisfied customers are saying about our services.
                </p>
            </div>
            <Ratings />
        </div>
        <SocialCards />
    </div>
  )
}

export default App
