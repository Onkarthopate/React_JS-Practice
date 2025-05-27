function CompB({user}) {
    return (
        <div style={{ alignItems: "center", padding: "1rem",justifyItems:"start" }}>
            <p>Name : {user.Name} </p>
            <p>Email : {user.Email} </p>
            <p>DOB : {user.DOB} </p>
            <p>Address : {user.Address} </p>
            <p>Role : {user.Role} </p>
        </div>
    );
}

export default CompB;