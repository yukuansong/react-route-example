import data from "./mydata.json";

var dataCleaned= data.filter(
  (arr, index, self) =>
    index ===
    self.findIndex((t) => t.Description === arr.Description));

export default function MedicalData() {
  return (
    <div>
      {dataCleaned.map((data) => (
        <div>
          <h2>Id: {data.id}</h2>
          <h3>Description: {data.Description}</h3>
          <h3>Doctor: {data.Doctor}</h3>
          <h3>Patient: {data.Patient}</h3>
        </div>
      ))}
    </div>
  );
}

export function getData() {
    return dataCleaned;
}

export function getDatum(id) {
    return dataCleaned.find((datum) => (
        datum.id === id
    ))
}
