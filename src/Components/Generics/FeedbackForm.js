import React, { useState } from 'react'

const FeedbackForm = () => {

  const [name, setName] = useState ("")
  const [nameError, setNameError] = useState (false)
  const [email, setEmail] = useState ("")
  const [emailError, setEmailError] = useState (false)
  const [message, setMessage] = useState ("")
  const [messageError, setMessageError] = useState (false)
  const [validationMessage, setValidationMessage] = useState (false)
  const [errorMessage, setErrorMessage] = useState (false)

  const handleChange = async (e) => {
    console.log(e.target.type)

    switch (e.target.name) {
      case "name":
        setName(e.target.value)
        setNameError(validateLength(e.target.value))
        break
      case "email":
        setEmail(e.target.value)
        setEmailError(validateLength(e.target.value, 3))
        break
      case "message":
        setMessage(e.target.value)
        setMessageError(validateLength(e.target.value, 2))
    }
  }

    const validateLength = (value, minLength = 1) => {
      if (value.length < minLength)
        return true
      return false
    }

    const handleSubmit = async (e) => {
      e.preventDefault()
      setErrorMessage("")

      for(let element of e.target) {
        switch (element.name){
          case "name":
            setName(element.value)
            setNameError(validateLength(element.value))
            break
          case "email":
            setEmail(element.value)
            setEmailError(validateLength(element.value, 3))
            break
          case "message":
            setMessage(element.value)
            setMessageError(validateLength(element.value, 2))
        }
      }

      if (!nameError && !emailError && !messageError) {
        const result = await fetch ("https://win23-assignment.azurewebsites.net/api/contactform", {
          method: "post",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify({
            name, email, message
          })
        })
        console.log(result)
        if (result.status === 200)
          setValidationMessage("User has been created")
        else
          setErrorMessage("Something went wrong")
      }
    }

  return (
    <form onSubmit={handleSubmit}  noValidate className="feedback-form" method="post">
        <p className='errormessage'>{errorMessage}</p>
        <p className='validationmessage'>{validationMessage}</p>
        <div className="name">
            <input value={name} onChange={(e) => handleChange(e)} className="form-input" type="text" tabindex="1" id="name" name="name" placeholder="Name*"></input>
            <label className={`${nameError ? "error": ""}`}>{`Name ${nameError ? "must be written": ""}`}</label>
        </div>
        <div className="email">
            <input value={email} onChange={(e) => handleChange(e)} className="form-input" type="email" tabindex="3" id="email" name="email" placeholder="Email*"></input>
            <label className={`${emailError ? "error": ""}`}>{`Email ${emailError ? "must be valid": ""}`}</label>
        </div>
        <div className="text">
            <textarea value={message} onChange={(e) => handleChange(e)} className="form-input" name="message" id="text" placeholder="Your Feedback*"></textarea>
            <label className={`${messageError ? "error": ""}`}>{`Message ${messageError ? "can't be empty": ""}`}</label>
        </div>
        <div className="feedback-btn">
          <button type='submit' className="btn-yellow-long">Send Message <i className="fa-regular fa-arrow-up-right"></i></button>
      </div>
    </form>
  )
}

export default FeedbackForm