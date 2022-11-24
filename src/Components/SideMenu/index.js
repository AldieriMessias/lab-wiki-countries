import { CountryCard } from "../CountryCard";
import countries from "../../countries.json"

export function SideMenu(){
    return(
    <div> {countries.map((cE)=> {
        return <CountryCard countryName= {cE.name.common} countryCode= {cE.alpha3Code}  alpha2Code={cE.alpha2Code} />
        
    })} 
   
    

    </div>


    )
}