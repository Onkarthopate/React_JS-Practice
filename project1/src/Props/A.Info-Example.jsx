import CompB from "./B.Info-Example";

function CompA() {

    const userInfo = [
        {
        
        Name : "Arayn Shivay",
        Email: "aryan@gmail.com",
        DOB : "18/09/2003",
        Address : "Mumbai",
        Role : "SD1"
    },
    {
         Name : "John Doe",
        Email: "john@gmail.com",
        DOB : "12/02/2005",
        Address : "Pune",
        Role : "Administration"
    }
]
    return ( 
        <div>
            <h2>Display User Informations:</h2>
            {
                userInfo.map((user)=>(
                   <CompB user={user}/>

                ))
            }
        </div>
     );
}

export default CompA;
