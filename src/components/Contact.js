import './contact.css';

export default function Contact() {
  return (
    <div>
        <h1>Contact Us</h1>

        <form>
            <label>First Name: </label> 
            <input type="text" name="firstname" required /> <br />                    
            
            <label>Last Name: </label>
            <input type="text" name="lastname" required /> <br />                     

            <label>Email: </label>
            <input type="text" name="email" required /> <br />                     

            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}
