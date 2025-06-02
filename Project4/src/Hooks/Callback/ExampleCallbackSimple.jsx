import { useCallback, useState , useRef } from "react";

const item = ["Apple", "Mongo", "Jerry", "Banana", "Strobery"];


function SearchComponent() {

    const [searchItem, setSearchItem] = useState("");
    const inputRef = useRef(null);

    const handleChange = useCallback((event) => {
        setSearchItem(event.target.value);  
    },[])

   const FilteredItem = item.filter((item) => {
        return item.toLowerCase().includes(searchItem.toLowerCase());
    })

    const foucsInput = ()=>{
        inputRef.current.focus();
    }



    return (
        <div>
            <h4>Search Here : </h4>
            <input type="text" onChange={handleChange} value={searchItem}  ref={inputRef} className="form-control"/>
            <br />

            <ul>
                {
                    FilteredItem.length > 0 ? (
                        FilteredItem.map((item, index) => (
                            <li key={index}> {item}</li>
                        ))) :
                        (
                            <li>No item Found</li>
                        )
                }
            </ul>

            <button onClick={foucsInput}>click here</button>
        </div>
    );
}

export default SearchComponent;