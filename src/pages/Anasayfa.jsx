import { useHistory } from "react-router-dom";

import Footer from "../components/Footer/Footer";

import "./anasayfa.css";

export default function Anasayfa() {

    const history = useHistory();

    return(
        <div className="Anasayfa">
            <header className="baslangic">
                <img className="logo-anasayfa" src="/images/iteration-1-images/logo.svg" />
                <p>fırsatı kaçırma</p>
                <h1> KOD ACIKTIRIR PİZZA, DOYURUR</h1>
                <button className="aciktim-buton" 
                    onClick={() => history.push("./siparis")}
                    data-cy="anasayfa-buton">
                    ACIKTIM
                </button>
            </header>

            <main className="anasayfa-main">
                <section className="yemek-turu-nav-section">
                    <nav className="yemek-turu-nav">
                        <a href="#"><img src="/images/iteration-2-images/icons/1.svg"/>YENİ! Kore</a>
                        <a href="#"><img src="/images/iteration-2-images/icons/2.svg"/>Pizza</a>
                        <a href="#"><img src="/images/iteration-2-images/icons/3.svg"/>Burger</a>
                        <a href="#"><img src="/images/iteration-2-images/icons/4.svg"/>Kızartmalar</a>
                        <a href="#"><img src="/images/iteration-2-images/icons/5.svg"/>Fast food</a>
                        <a href="#"><img src="/images/iteration-2-images/icons/6.svg"/>Gazlı İçecek</a>
                    </nav>
                </section>

                <section className="yemek-karti-section">
                    <div className="kart-1">
                        <h3>Özel Lezzetus</h3>
                        <p>Position:Absolute Acı Burger</p>
                        <button>
                            SİPARİŞ VER
                        </button>
                    </div>
                    <div className="kart-2-ve-3">
                        <div className="kart-2">
                            <h4>Hackathlon Burger Menü</h4>
                            <button>
                                SİPARİŞ VER
                            </button>
                        </div>
                        <div className="kart-3">
                            <h4><span>Çoooook</span> hızlı npm gibi kurye</h4>
                            <button>
                                SİPARİŞ VER
                            </button>
                        </div>
                    </div>
                </section>

                <section className="ortadaki-yazilar">
                    <p>en çok paketlenen menüler</p>
                    <h4>Acıktıran Kodlara Doyuran Lezzetler</h4>
                </section>

                <section className="yemek-yuvarlak-nav-section">
                    <nav className="yemek-yuvarlak-nav">
                        <a href="#"><img src="/images/iteration-2-images/icons/1.svg"/>Ramen</a>
                        <a href="#"><img src="/images/iteration-2-images/icons/2.svg"/>Pizza</a>
                        <a href="#"><img src="/images/iteration-2-images/icons/3.svg"/>Burger</a>
                        <a href="#"><img src="/images/iteration-2-images/icons/4.svg"/>French fries</a>
                        <a href="#"><img src="/images/iteration-2-images/icons/5.svg"/>Fast food</a>
                        <a href="#"><img src="/images/iteration-2-images/icons/6.svg"/>Soft drinks</a>
                    </nav>
                </section>

                <section className="pizza-burger-kart">
                    <div className="food-1">
                        <img src="/images/iteration-2-images/pictures/food-1.png"/>
                        <h6>Terminal Pizza</h6>
                        <div className="kart-para">
                            <p>4.9</p>
                            <p>(200)</p>  
                            <p>60₺</p>  
                        </div>
                    </div>

                     <div className="food-2">
                        <img src="/images/iteration-2-images/pictures/food-2.png"/>
                        <h6>Position Absolute Acı Pizza</h6>
                        <div className="kart-para">
                            <p>4.9</p>
                            <p>(200)</p> 
                            <p>60₺</p>   
                        </div>
                    </div>

                    <div className="food-3">
                        <img src="/images/iteration-2-images/pictures/food-3.png"/>
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
    )
}