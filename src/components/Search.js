import React, {useState} from "react";
import DisplayFoodItems from "./DisplayFoodItems";



function Search({details}){

    const [searchField, setSearchField] = useState("");
    
    const filtered = details.filter((entry) => {
        return entry.name.toLowerCase().includes(searchField.toLocaleLowerCase());
    });

    return (
        <div>
            <div>
                <input 
                ClassName = "form-control"
                type = "text" 
                placeholder="Search ...."
                onChange={(e) => setSearchField(e.target.value)}
                />
            </div>
            <DisplayFoodItems foodList={filtered}/>
        </div>
    );

}

export default Search;