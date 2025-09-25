import Footer from "/src/components/Footer/Footer";

import { useEffect } from "react";

import "./success.css"

export default function Success({successVeri}) {
    if (!successVeri) {
        return <p className="success-p">Veri yükleniyor...</p>; 
    }


    useEffect(() => {
      window.scrollTo(0, 0); 
    }, []);



    return(
        <div className="success">
            <header className="success-siparisiniz-alindi">
                <img className="success-logo" src="/images/iteration-1-images/logo.svg" />
                <p>lezzetin yolda</p>
                <h3>SİPARİŞ ALINDI</h3>
            </header>
            <main className="success-veriler">
                <p>Position Absolute Acı Pizza</p>
                <section className="veriler-section">
                    <p>Boyut: <span>{successVeri.boyut}</span></p>
                    <p>Hamur: <span>{successVeri.hamur_kalinligi}</span></p>
                    <p>Ek Malzemeler: <span>{successVeri.malzemeler.join(", ")}</span></p>
                </section>
                <section className="fiyat-section">
                    <h6>Sipariş Toplamı</h6>
                    <div className="fiyatlar">
                        <p>Seçimler <span> {successVeri.malzemeler.length*5}.00₺</span></p>
                        <p>Toplam <span> {(successVeri.malzemeler.length*5+85.50*successVeri.adet).toFixed(2)}₺</span></p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}