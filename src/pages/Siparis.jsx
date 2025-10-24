import "./siparis.css"

import { useHistory } from "react-router-dom";

import PizzaForm from "../components/SiparisComp/PizzaForm"

import Footer from "/src/components/Footer/Footer";

import logo from "../../images/iteration-1-images/logo.svg";

import formBanner from "../../images/iteration-2-images/pictures/form-banner.png";



export default function Siparis({setSuccessVeri}) {

    const history = useHistory();

    return(
        <div className="siparis-sayfasi">
            <header className="logo-section">
                    <div className="logo">
                        <img src={logo}/>
                    </div>
                </header>

            <main>
                <section className="sekmeler-section">
                    <img src={formBanner} />
                    <nav className="sekmeler">
                            <button onClick={() => history.goBack()}>Anasayfa</button>
                            <p>- </p>
                            <button>Sipariş Oluştur</button>
                        </nav>
                </section>

                <section className="bilgi-section">
                    <div className="bilgi"> 
                        <h4>Position Absolute Acı Pizza</h4>
                        <div className="pizza-para">
                            <p>85.50₺</p>
                            <p>4.9</p>
                            <p>(200)</p>    
                        </div>
                        <article>Frontent Dev olarak hala position:absolute kullanıyorsan 
                            bu çok acı pizza tam sana göre. Pizza, domates, peynir 
                            ve genellikle çeşitli diğer malzemelerle kaplanmış, 
                            daha sonra geleneksel olarak odun ateşinde bir fırında 
                            yüksek sıcaklıkta pişirilen, genellikle yuvarlak, 
                            düzleştirilmiş mayalı buğday bazlı hamurdan oluşan 
                            İtalyan kökenli lezzetli bir yemektir...
                            Küçük bir pizzaya bazen pizzetta denir.
                        </article>
                    </div>
                </section>
                <section className="form">
                    <PizzaForm setSuccessVeri={setSuccessVeri}/>
                </section>
            </main>
            <Footer />
        </div>
    )
}