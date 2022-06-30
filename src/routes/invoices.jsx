import { Outlet } from "react-router-dom";
import { getData } from "../data/medicalData";
import { useSearchParams } from "react-router-dom";
import QueryNavLink from "./queryNavLink";


export default function Invoices() {
  let medicalData = getData();
  let [searchParams, setSearchParams] = useSearchParams();
  return (
    <div style={{ display: "flex" }}>
      <nav style={{ width: "25%", borderRight: "solid 1px", padding: "1px" }}>
        <input
          type="text"
          value={searchParams.get("filter") || ""}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        {medicalData
          .filter((medicalDatum) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            else {
              let description = medicalDatum.Description.toLowerCase();
              return description.includes(filter.toLowerCase());
            }
          })
          .map((medicalDatum) => (
            <QueryNavLink
              style={
                        ({isActive}) => {
                            return {
                                display: "block",
                                color: isActive? "red":"",
                                margin: "1rem 0",
                            }
                        }
                    }
              to={`/invoices/${medicalDatum.id}`}
              key={medicalDatum.id}
            >
              {medicalDatum.Description}
            </QueryNavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
}
