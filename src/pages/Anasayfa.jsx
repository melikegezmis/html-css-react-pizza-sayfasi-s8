import { useHistory } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import "./anasayfa.css";

import logo from "../../images/iteration-1-images/logo.svg";

import icon1 from "../../images/iteration-2-images/icons/1.svg";
import icon2 from "../../images/iteration-2-images/icons/2.svg";
import icon3 from "../../images/iteration-2-images/icons/3.svg";
import icon4 from "../../images/iteration-2-images/icons/4.svg";
import icon5 from "../../images/iteration-2-images/icons/5.svg";
import icon6 from "../../images/iteration-2-images/icons/6.svg";

import food1 from "../../images/iteration-2-images/pictures/food-1.png";
import food2 from "../../images/iteration-2-images/pictures/food-2.png";
import food3 from "../../images/iteration-2-images/pictures/food-3.png";

export default function Anasayfa() {
  const history = useHistory();

  return (
    <div className="Anasayfa">
      <header className="baslangic">
        <img className="logo-anasayfa" src={logo} alt="Logo" />
        <p>fırsatı kaçırma</p>
        <h1>KOD ACIKTIRIR PİZZA, DOYURUR</h1>
        <button
          className="aciktim-buton"
          onClick={() => history.push("./siparis")}
          data-cy="anasayfa-buton"
        >
          ACIKTIM
        </button>
      </header>

      <main className="anasayfa-main">
        <section className="yemek-turu-nav-section">
          <nav className="yemek-turu-nav">
            <a href="#"><img src={icon1} alt="Kore" />YENİ! Kore</a>
            <a href="#"><img src={icon2} alt="Pizza" />Pizza</a>
            <a href="#"><img src={icon3} alt="Burger" />Burger</a>
            <a href="#"><img src={icon4} alt="Kızartmalar" />Kızartmalar</a>
            <a href="#"><img src={icon5} alt="Fast food" />Fast food</a>
            <a href="#"><img src={icon6} alt="Gazlı içecek" />Gazlı içecek</a>
          </nav>
        </section>

        <section className="yemek-karti-section">
          <div className="kart-1">
            <h3>Özel Lezzetus</h3>
            <p>Position:Absolute Acı Burger</p>
            <button>SİPARİŞ VER</button>
          </div>
          <div className="kart-2-ve-3">
            <div className="kart-2">
              <h4>Hackathlon Burger Menü</h4>
              <button>SİPARİŞ VER</button>
            </div>
            <div className="kart-3">
              <h4>
                <span>Çoooook</span> hızlı npm gibi kurye
              </h4>
              <button>SİPARİŞ VER</button>
            </div>
          </div>
        </section>

        <section className="ortadaki-yazilar">
          <p>en çok paketlenen menüler</p>
          <h4>Acıktıran Kodlara Doyuran Lezzetler</h4>
        </section>

        <section className="yemek-yuvarlak-nav-section">
          <nav className="yemek-yuvarlak-nav">
            <a href="#"><img src={icon1} alt="Ramen" />Ramen</a>
            <a href="#"><img src={icon2} alt="Pizza" />Pizza</a>
            <a href="#"><img src={icon3} alt="Burger" />Burger</a>
            <a href="#"><img src={icon4} alt="French fries" />French fries</a>
            <a href="#"><img src={icon5} alt="Fast food" />Fast food</a>
            <a href="#"><img src={icon6} alt="Soft drinks" />Soft drinks</a>
          </nav>
        </section>

        <section className="pizza-burger-kart">
          <div className="food-1">
            <img src={food1} alt="Terminal Pizza" />
            <h6>Terminal Pizza</h6>
            <div className="kart-para">
              <p>4.9</p>
              <p>(200)</p>
              <p>60₺</p>
            </div>
          </div>

          <div className="food-2">
            <img src={food2} alt="Position Absolute Acı Pizza" />
            <h6>Position Absolute Acı Pizza</h6>
            <div className="kart-para">
              <p>4.9</p>
              <p>(200)</p>
              <p>60₺</p>
            </div>
          </div>

          <div className="food-3">
            <img src={food3} alt="useEffect Tavuklu Burger" />
            <h6>useEffect Tavuklu Burger</h6>
            <div className="kart-para">
              <p>4.9</p>
              <p>(200)</p>
              <p>60₺</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
