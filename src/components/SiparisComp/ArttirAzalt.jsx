import {
  InputGroup,
  InputGroupText,
  Button
} from 'reactstrap';

export default function ArttirAzalt({adet, setAdet}) {

  const azalt = () => {
    if (adet > 1) { 
        setAdet(adet - 1)
    };
  };

  const arttir = () => {
    setAdet(adet + 1);
  };

  return (
    <InputGroup >
      <Button color="warning" onClick={azalt} style={{width:"45px", height:"45px", fontWeight: "900"}}>-</Button>
      <InputGroupText 
      style={{width:"45px", height:"45px", display: "flex", justifyContent: "center", backgroundColor:"#FAF7F2"}}>
        {adet}
      </InputGroupText>
      <Button color="warning" onClick={arttir} style={{width:"45px", height:"45px", fontWeight: "900"}}>+</Button>
    </InputGroup>
  );
}