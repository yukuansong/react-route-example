
import  {useParams} from "react-router-dom"
import {getDatum} from "../data/medicalData";

export default function Invoice() {
    let params = useParams();
    let medicalDatum = getDatum(parseInt(params.invoiceId), 10);
    return (
        <main style={{padding: "1rem"}}>
            <h3>Patient: {medicalDatum.Patient}</h3>
            <h3>Doctor: {medicalDatum.Doctor}</h3>
         </main>
    )
}