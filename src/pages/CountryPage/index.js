import countries from "../../countries.json"
import { useParams } from "react-router-dom";



export function CountryPage() {
    
    const params= useParams()

    const country = countries.filter((cE) => cE.alpha3Code === params.countryCode)[0]


    return (
        <div>
            <div class="col-7">
            <img src= {`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="país"/>
                <h1>{country.name.common}</h1>
                <table class="table">
                <thead></thead>
                <tbody>
                    <tr>
                    <td >Capital</td>
                    <td>{country.capital}</td>
                    </tr>
                    <tr>
                    <td>Area</td>
                    <td>
                        {country.area} km
                        <sup>2</sup>
                    </td>
                    </tr>
                    <tr>
                    <td>Borders</td>
                    <td>
                        <ul>
                        <li><a>{country.borders}</a></li>
                        
                        </ul>
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>

        </div>
    );



}