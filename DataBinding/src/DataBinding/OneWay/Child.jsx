function Child({increment , decrement , count}) {
    return ( 
        <div>
            <h3>
                Hello From Child Components
            </h3> 

            <button onClick={increment}>+</button>
            <h2>{count}</h2>
            <button onClick={decrement}>-</button>
        </div>
     );
}

export default Child;