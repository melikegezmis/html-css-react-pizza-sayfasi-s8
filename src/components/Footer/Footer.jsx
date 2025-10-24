import "./footer.css"

import logo from "../../../images/iteration-2-images/footer/logo-footer.svg";

import icon1 from "../../../images/iteration-2-images/footer/icons/icon-1.png";
import icon2 from "../../../images/iteration-2-images/footer/icons/icon-2.png";
import icon3 from "../../../images/iteration-2-images/footer/icons/icon-3.png";

import insta0 from "../../../images/iteration-2-images/footer/insta/li-0.png";
import insta1 from "../../../images/iteration-2-images/footer/insta/li-1.png";
import insta2 from "../../../images/iteration-2-images/footer/insta/li-2.png";
import insta3 from "../../../images/iteration-2-images/footer/insta/li-3.png";
import insta4 from "../../../images/iteration-2-images/footer/insta/li-4.png";
import insta5 from "../../../images/iteration-2-images/footer/insta/li-5.png";

export default function Footer(){
    return(
        <footer>
            <section className="footer-section">
                <div className="footer-kisim-1">
                    <div className="iletisim">
                        <img className="footer-logo" src={logo} />
                        <div className="icons-iletisim">
                            <p><img src={icon1} /> 341 Londonderry Road, İstanbul Türkiye</p>
                            <p><img src={icon2} /> aciktim@teknolojikyemekler.com</p>
                            <p><img src={icon3} /> +90 216 123 45 67</p>
                        </div>
                    </div>

                    <div className="hot-menu">
                        <h5>Hot Menu</h5>
                        <p>Terminal Pizza</p>
                        <p>5 Kisilik Hackathlon Pizza</p>
                        <p>useEffect Tavuklu Pizza</p>
                        <p>Beyaz Console Frosty</p>
                        <p>Testler Geçti Mutlu Burger</p>
                        <p>Position Absolute Acı Burger</p>
                    </div>

                    <div className="instagram">
                        <h5>Instagram</h5>
                        <img src={insta0} />
                        <img src={insta1} />
                        <img src={insta2} />
                        <img src={insta3} />
                        <img src={insta4} />
                        <img src={insta5} />
                    </div>
                    </div>
                

                
                <div className="son-yazi">
                    <div className="son-yazi-elemanlari">
                        <p>© 2023 Teknolojik Yemekler.</p>
                        <img src="https://img.icons8.com/?size=100&id=60014&format=png&color=FFFFFF" />
                    </div>
                </div>
            </section>
        </footer>
    )
}