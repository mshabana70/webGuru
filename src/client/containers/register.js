<h1>register</h1>;


export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    function signUp() {
        if (email.match(!emailAn) && password.match(!passwordAn)) {
            
            console.log("sign up Admin");
            return true;
        } else if (email.match(emailSt) && password.match(passwordSt)) {
            console.log("Great Success Student");
            return true;
        } else {
            console.log("No Success");
            return false;
        }
    }