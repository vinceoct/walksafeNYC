import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import city from '../assets/city.png'
import axios from 'axios'
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"



const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/




const CreateAnAccount = () => {

    const userRef = useRef()
    const errRef = useRef()


    const [emailInput, setEmail] = useState('')
    const [passwordInput, setPassword] = useState('')
    const [validPassword, setValidPassword] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState('')
    const [validConfirmedPassword, setValidConfirmedPassword] = useState(false)
    const [confirmedPasswordFocus, setConfirmedPasswordFocus] = useState(false)
    const [emailFocus, setEmailFocus] = useState(false)
    const [passwordFocus, setPasswordFocus] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [firstNameFocus, setFirstNameFocus] = useState(false)
    const [lastName, setLastName] = useState('')
    const [lastNameFocus, setLastNameFocus] = useState(false)
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [dateOfBirthFocus, setDateOfBirthFocus] = useState(false)
    const [genderInput, setGender] = useState('')
    const [genderFocus, setGenderFocus] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        const result = PWD_REGEX.test(passwordInput)
        console.log(result)
        console.log(passwordInput)
        setValidPassword(result)
        const match = passwordInput === confirmPassword
        setValidConfirmedPassword(match)
    }, [passwordInput, confirmPassword])

    useEffect(() => {
        setErrorMessage('')
    }, [passwordInput, confirmPassword])



    const handleSubmit = async (e) => {
        e.preventDefault()
        const isPasswordValid = PWD_REGEX.test(passwordInput)
        if (!isPasswordValid) {
            setErrorMessage("Invalid Entry")
            return
        }
        try {
           const response = await axios.post(`https://walksafenyc-api-production.up.railway.app/api/users`, {
           first_name: firstName,
           last_name: lastName,
           email: emailInput,
           password: passwordInput,
           date_of_birth: dateOfBirth,
           gender: genderInput 
        })
        console.log(response.data)
        setSuccess(true)
        } catch (err) {
            if (!err?.response) {
                setErrorMessage('No server response')
            } else {
                setErrorMessage('Registration failed')
            }
            errRef.current.focus()
        }
    }


    return (
        <section className="create-account-page">
            {success ? (
                <section>
                    <h1>Account successfully created.</h1>
                    <p>
                    <Link className="login" to="/login"><button id="already-have-account" className="submit-button">Log in.</button></Link> 
                    </p>
                </section>
            ) : (
            <section className='form-container'>
              <section>
                <p ref={errRef} className={errorMessage ? "errorMessage" : "offscreen"} aria-live="assertive">{errorMessage}</p>
              </section>
            <form className="create-account-form" onSubmit={handleSubmit}>
                <h4>Create an account</h4>
                <section className="account-question">
                    <label htmlFor="firstName">First Name:</label>
                    <input onChange={(e)=>setFirstName(e.target.value)} 
                    required  
                    type="text" 
                    ref={userRef} 
                    autoComplete="off" 
                    placeholder="First Name" 
                    value={firstName} 
                    name="firstName" 
                    id="firstName" 
                    onFocus={() => setFirstNameFocus(true)} 
                    onBlur={() => setFirstNameFocus(false)}
                    />
                </section>
                <section className="account-question">
                    <label htmlFor="lastName">Last Name:</label>
                    <input onChange={(e)=>setLastName(e.target.value)}
                    type="text" 
                    placeholder="Last Name" 
                    value={lastName} 
                    name="lastName" 
                    id="lastName" 
                    ref={userRef} 
                    autoComplete="off" 
                    onFocus={() => setLastNameFocus(true)} 
                    onBlur={() => setLastNameFocus(false)}
                    />
                </section>
                <section className="account-question">
                    <label htmlFor="dateOfBirth">Date of Birth:</label>
                    <input onChange={(e)=>setDateOfBirth(e.target.value)}
                    type="date" 
                    placeholder="Date of Birth" 
                    value={dateOfBirth} 
                    name="dateOfBirth" 
                    id="dateOfBirth" 
                    ref={userRef} 
                    autoComplete="off" 
                    required 
                    onFocus={() => setDateOfBirthFocus(true)} 
                    onBlur={() => setDateOfBirthFocus(false)}/>
                </section>
                <section className="account-question">
                    <label htmlFor="gender">Gender:</label>
                    <input onChange={(e)=>setGender(e.target.value)}
                    type="text" 
                    placeholder="gender" 
                    value={genderInput} 
                    name="gender" 
                    id="gender" 
                    ref={userRef} 
                    autoComplete="off" 
                    required 
                    onFocus={() => setGenderFocus(true)} 
                    onBlur={() => setGenderFocus(false)}/>
                </section>
                <section className="account-question">
                    <label htmlFor="email">Email:</label>
                    <input value={emailInput} 
                    onChange={(e) => setEmail(e.target.value)} 
                    name="email" 
                    id="email" 
                    type="email" 
                    placeholder="youremail@gmail.com" 
                    ref={userRef} 
                    autoComplete="off" 
                    required 
                    onFocus={() => setEmailFocus(true)} 
                    onBlur={() => setEmailFocus(false)}
                    />
                </section>
                <section className="account-question">
                    <label htmlFor="password">
                        Password:
                        <FontAwesomeIcon icon={faCheck} className={validPassword ? "valid" : "hide"} />
                        <FontAwesomeIcon icon={faTimes} className={validPassword || !passwordInput ? "hide" : "invalid"} />
                    </label>
                    <input
                    onChange={(e) => setPassword(e.target.value)} 
                    name="password" 
                    value={passwordInput}
                    id="password" 
                    type="password" 
                    placeholder="*******" 
                    ref={userRef} 
                    autoComplete="off" 
                    required  
                    aria-invalid={validPassword ? "false" : "true"} 
                    onFocus={() => setPasswordFocus(true)} 
                    onBlur={() => setPasswordFocus(false)}
                    aria-describedby="pwdnote"
                    />
                </section>
                <p id="pwdnote" className={passwordFocus && !validPassword ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    8 to 24 characters.<br />
                    Must include uppercase and lowercase letters, a number and a special charcter. <br />
                    Allowed special characters: <span aria-label="exclamation mark">!</span>
                    <span aria-label="at symbol">@</span>
                    <span aria-label="hashtag">#</span>
                    <span aria-label="percent">%</span>
                </p>
                <section className="account-question">
                    <label htmlFor="confirmPassword">
                        Confirm Password:
                        <FontAwesomeIcon icon={faCheck}  className={validConfirmedPassword && confirmPassword ? "valid" : "hide"}/>
                        <FontAwesomeIcon icon={faTimes} className={validConfirmedPassword || !confirmPassword ? "hide" : "invalid"}/>
                    </label>
                    <input 
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                    name="confirmPassword"
                    value={confirmPassword} 
                    id="confirmPassword" 
                    type="password" 
                    placeholder="*******" 
                    ref={userRef} 
                    autoComplete="off" 
                    required  
                    aria-invalid={validConfirmedPassword ? "false" : "true"} 
                    onFocus={() => setConfirmedPasswordFocus(true)} 
                    onBlur={() => setConfirmedPasswordFocus(false)}
                    aria-describedby="confirmnote"
                    />
                </section>
                <p id="confirmnote" className={confirmedPasswordFocus && !validConfirmedPassword ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                   Must match the first password input field.
                </p>
                <button disabled={!validPassword || !validConfirmedPassword ? true : false} id="create-account-button" className="submit-button" type="submit">Create Account</button>
                <Link className="login" to="/login"><button id="already-have-account" className="submit-button">Already have an account? Log in here.</button></Link>
            </form>
            <img src={city}/>
            </section>
        )}
        </section>
    )
}



export default CreateAnAccount