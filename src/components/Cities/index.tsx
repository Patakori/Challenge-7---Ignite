import { Grid, Heading } from "@chakra-ui/react";
import City from "./City";

export default function Cities() {
  return (
    <>
      <Heading fontWeight="500" fontSize={["2xl","4xl"]} mb="10">Cidades +100</Heading>
      <Grid templateColumns={["1fr","1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]} gap={['20px','45px']} alignItems="center" justifyContent="center" px={["30px", "0"]}> 
        <City photo={"/img/londres.jpg"} city={"Londres"} country={"Reino Unido"} flag={"/flags/flagReinoUnido.png"} />
        <City photo={"/img/Paris.jpg"} city={"Paris"} country={"França"} flag={"/flags/flagFranca.png"} />
        <City photo={"/img/Roma.jpg"} city={"Roma"} country={"Itália"} flag={"/flags/flagItalia.png"} />
        <City photo={"/img/Praga.jpg"} city={"Praga"} country={"República Tcheca"} flag={"/flags/flagRepublicaTcheca.png"} />
        <City photo={"/img/Amsterdam.jpg"} city={"Amsterdam"} country={"Holanda"} flag={"/flags/flagHolanda.jpg"} />
      </Grid>
    </>
  )
 }