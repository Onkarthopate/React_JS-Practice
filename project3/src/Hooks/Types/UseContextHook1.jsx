import { useContext } from "react";
import {UserContext} from "./UseContextHook"; // ✅ import the context

function Profile() {

        const info = useContext(UserContext);
    
    return ( 
        <div>
                <h2>
                    Welcome , {info.name}
                </h2>
                <h3>
                    Your Role {info.role}
                </h3>
                <h6>
                    Age is {info.age}
                </h6>
        </div>
     );
}

export default Profile;