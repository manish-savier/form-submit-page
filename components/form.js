import { useState } from 'react';

const Form = () => {

    const [fullName, setFullName] = useState({fName:"", lName:""});
    const userName = (e) => {
        e.target.style.border = "none";
        const name = e.target.name;
        const val = e.target.value;
        setFullName((pre)=>{
            return ({
                ...pre,
                [name]: val
            })

        });
    }
    const submitForm = (e) =>{
        e.preventDefault();
        if (fullName.fName && fullName.lName){
        alert(`Hello ${fullName.fName} ${fullName.lName}! Your Name Submitted Successfully!`);
        setFullName({fName:"", lName:""});
        } else if (!fullName.fName) {
            const input = document.getElementById("fName");
            input.style.border = "1px solid red";
            input.focus();
        } else if (!fullName.lName) {
            const input = document.getElementById("lName");
            input.style.border = "1px solid red";
            input.focus();
        }
        
    }

    return <>
    <div className="container">
          <p>Hello {fullName.fName} {fullName.lName}</p>
          <form>
            <input id="fName" name="fName" value={fullName.fName} onChange={userName} type="text" placeholder='First Name' />
            <input id="lName" name="lName" value={fullName.lName} onChange={userName} type="text" placeholder='Last Name' />
            <button onClick={submitForm} type='submit'>Submit Now</button>
          </form>
        </div>
    </>
}

export default Form;