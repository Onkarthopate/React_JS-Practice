import { useEffect, useState } from "react";

function UseEffectAPIFetching() {

    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const responce = await fetch('https://fakestoreapi.com/products');
            const res = await responce.json();
            // console.log(res);
            setData(res);
        } catch (error) {
            console.log("Error :", error.message);
        }
    }

    useEffect(() => {
        fetchData();
}, [data])
    return (
        <>
            <h2 className="text-success p-4">
                Fetching API From Dummy Server!
            </h2>

            <div>
                <ul>
                    {data.map((data, index) => (
                        <h2 key={index}>
                            <li>ID : {data.id}</li>
                            <li>Title :{data.title}</li>
                            <li>Price : {data.price}</li>
                            <hr />
                        </h2>

                    ))}
                </ul>
            </div>
        </>
    );
}

export default UseEffectAPIFetching;