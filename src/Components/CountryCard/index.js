import { Link } from "react-router-dom";

export function CountryCard(props) {
    return(
    <div class="container">
           
            <div class="row">
    
            <div class="col-5" style= {{maxHeight: '90vh'}}>
                <div class="list-group">
                
                   
                    <Link className="list-group-item list-group-item-action " to={`/${props.countryCode}`}>
                    <img src= {`https://flagpedia.net/data/flags/icon/72x54/${props.alpha2Code.toLowerCase()}.png`} alt="país"/>
                        {props.countryName}
                    </Link>
                    
                </div>
            </div>
            </div>

    </div>
    );
}