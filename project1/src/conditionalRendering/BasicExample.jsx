function BasicExample() {

    const isLoggedIn = false;

    // let message;

    // if (isLoggedIn) {
    //     message = <h2>Hello You are logged In </h2>
    // }
    // else {
    //     message = <h2 style={{ color: "red" }}>Sorry Your Session is Expired</h2>

    // }

    return (
        <div>
            {
               isLoggedIn ? <h1>Hello You are logged In </h1> : 
                <h1 style={{color:"red"}}>Sorry Your Session is Expired</h1>
            }

            {/* <h2>Status : {message}</h2> */}

        </div>
    );
}

export default BasicExample;