import {
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Card,
  CardTitle,
  CardText,
  Button,
} from 'reactstrap';

import axios from "axios";

import ArttirAzalt from './ArttirAzalt';

import "./pizzaform.css"

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';




export default function PizzaForm({setSuccessVeri}) {

    const history = useHistory();

    const [secim, setSecim] = useState({
        isim: "",
        boyut: "",
        hamur_kalinligi: "",
        malzemeler: [],
        siparis_notu: "",
        adet: 1,
    });

    const [AxiosHata, setAxiosHata] = useState("");

    const [malzeme, setMalzeme] = useState(["Pepperoni", "Domates", "Biber", "Sosis", "Mısır" ,"Zeytin", 
        "Kanada Jambonu", "Sucuk" ,"Ananas", "Tavuk Izgara", "Jalepeno", "Kabak", "Soğan", "Sarımsak"]);

    const [boyutlar, setBoyutlar] = useState(["S", "M", "L"]);

    const [isValid, setIsValid] = useState(false);

    const notify = () => toast.error("İnternet'e bağlanılamadı.");




    useEffect(()=>{
        const isimKural = secim.isim.length>3;
        const malzemelerKural = secim.malzemeler.length>3;
        const hamurKalinlik = secim.hamur_kalinligi !== "";
        const pizzaBoyutu = secim.boyut !== "";

        setIsValid(isimKural && malzemelerKural && hamurKalinlik && pizzaBoyutu);
    },[secim])




    function handleChange(e) {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            if (checked) {
                if(secim.malzemeler.length < 10) { 
                    setSecim({
                        ...secim,
                        malzemeler: [...secim.malzemeler, value],
                    }
                )};
            } else {
                setSecim({
                    ...secim,
                    malzemeler: secim.malzemeler.filter((eleman) => eleman !== value),
            });
            }
        } else {
            setSecim({ ...secim, [name]: value });
        }
    }



    function handleSubmit(e) {
        e.preventDefault(); 
  
        if(isValid) {
            axios.post("https://reqres.in/api/pizza", secim, {
                headers: {"x-api-key": "reqres_41be704f08354b7bb154fda3a2b2faa0"},
            })
            .then(response => {
                console.log(response.data);
                setSuccessVeri(response.data);
                history.push("/success");
            })
            .catch(error => {
                console.log(error);
                setAxiosHata("error");
            })
        }
    }



    return(
        <Form onSubmit={handleSubmit} className="PizzaForm"> 
            <section className='boyut-ve-hamur'>
                <div className='boyut'>
                    <h5>Boyut Seç <span>*</span></h5>
                    {boyutlar.map((eleman) => (
                        <FormGroup check className='radio' key={eleman}>
                            <Input
                            name="boyut"
                            type="radio"
                            id= {eleman}
                            value={eleman}
                            checked={secim.boyut === eleman}
                            onChange={handleChange}
                            />
                            <Label check className='radio-input' htmlFor={eleman}>
                            {eleman}
                            </Label>
                        </FormGroup>
                        ))}
                </div>

                <div className='hamur'>
                    <h5>Hamur Seç <span>*</span></h5>
                    <Input
                        bsSize="sm"
                        className="hamur-tipi"
                        name= "hamur_kalinligi"
                        type="select"
                        onChange={handleChange}
                        daya-cy="hamur"
                    >
                        <option value="">— Hamur Kalınlığı Seç —</option>
                        <option value="Süpper İnce">Süpper İnce</option>
                        <option value="İnce">İnce</option>
                        <option value="Orta">Orta</option>
                        <option value="Kalın">Kalın</option>
                        <option value="Süpper Kalın">Süpper Kalın</option>
                    </Input>
                </div>
            </section>


            <section className='ek-malzemeler'>
                <h5>Ek Malzemeler <span>*</span></h5>
                <p>Buradan 4-10 malzeme seçebilirsiniz. 5₺ </p>
                {(secim.malzemeler.length < 4 || secim.malzemeler.length === 10) && (
                    <FormFeedback style={{ display: "block" }} data-cy="malzeme">
                        {secim.malzemeler.length < 4
                        ? "En az 4 malzeme seçmelisiniz*"
                        : "En fazla 10 malzeme seçebilirsiniz*"}
                    </FormFeedback>
                )}
                <div className='malzemeler'> 
                 {malzeme.map((eleman)=>{
                    return(
                    <FormGroup
                        check
                        inline
                        key={eleman}
                        className='malzeme'
                    >
                        <Input type="checkbox"
                        name="malzemeler"
                        className='malzemeler-checkbox'
                        value={eleman}
                        id={eleman}
                        onChange={handleChange} 
                        checked={secim.malzemeler.includes(eleman)}
                        />
                        <Label check htmlFor={eleman}>
                        {eleman}
                        </Label>
                    </FormGroup>
                    )})}
                </div>
            </section>


            <section className="isim">
                <FormGroup>
                    <Label htmlFor="isim" className='input-baslik'>
                        İsminiz <span>*</span>
                    </Label>
                    <Input 
                    name= "isim"
                    id="isim" 
                    onChange={handleChange}
                    invalid={secim.isim.length<4}
                    data-cy="siparis-isim-input"
                    />
                   <FormFeedback> En az 3 karakter olmalıdır*</FormFeedback>
                </FormGroup>
            </section>


            <section className="siparis-notu">
                <FormGroup>
                    <Label htmlFor="siparis-notu" className='input-baslik'>
                        Sipariş Notu
                    </Label>
                    <Input 
                    type="textarea"
                    name= "siparis_notu"
                    id="siparis-notu" 
                    placeholder='Siparişine eklemek istediğin bir not var mı?'
                    onChange={handleChange}
                    />
                </FormGroup>
            </section>


            <section className='adet-ve-siparis-toplam'>
                    <div className='ArttirAzalt'>
                        <ArttirAzalt 
                        adet={secim.adet} 
                        setAdet={(sayi) => setSecim({ ...secim, adet: sayi})}/>
                    </div>

                    <div className='siparis-ver'>
                        <Card
                            body
                            className="siparis-ver-card"
                            >
                            <div className='siparis-yazilar'>
                                <CardTitle tag="h5" className='siparis-toplami'>
                                    Sipariş Toplamı
                                </CardTitle>
                                <CardText className="secimler">
                                    <p>Seçimler</p>
                                    <p>{secim.malzemeler.length*5}.00₺</p>
                                </CardText>
                                <CardText className='toplam'>
                                    <p>Toplam</p>
                                    <p>{(secim.malzemeler.length*5+85.50*secim.adet).toFixed(2)}₺</p>
                                </CardText>
                            </div>
                        </Card>
                        <Button color="warning" className='siparis-buton' disabled={!isValid} 
                            onClick={AxiosHata !== "" ? notify : handleSubmit}>
                                SİPARİŞ VER
                        </Button>
                        <ToastContainer 
                            position="top-center" 
                            theme='colored'
                            autoClose={4000} 
                        />                    
                    </div>
            </section>
            <span className='kural' style={{display: isValid ? "none" : "block"}}>
                Yıldızlı (*) alanların doldurulması zorunludur.
            </span>
        </Form>
    )   
}