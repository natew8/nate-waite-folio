import React, { useState } from "react"
import axios from "axios"
import { Link } from "gatsby"
import Layout from "../components/Layout/Layout"
import contactStyle from "./pageStyles/contact.module.scss"

const MyForm = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    if (ok) {
      form.reset()
    }
  }
  const handleOnSubmit = e => {
    e.preventDefault()
    const form = e.target
    setServerState({ submitting: true })
    axios({
      method: "post",
      url: "https://getform.io/f/383bfd94-a853-46a9-b8d0-d05f6efc5522",
      data: new FormData(form),
    })
      .then(r => {
        handleServerResponse(
          true,
          "Thank you! I will get back to you as soon as i can.",
          form
        )
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form)
      })
  }
  return (
    <Layout>
      <div className={contactStyle.formContainer}>
        <h1>Contact Me</h1>
        <p>
          Im interested in any opportunities, big or small, in the music or web
          development field.
          <br></br>
          The more creative and ambitious the better.
          <br></br>
          If you have any questions, comments, or just want to say 'Hey', please
          don't hesitate to reach out.
        </p>
        <form
          className={contactStyle.form}
          action="https://getform.io/f/383bfd94-a853-46a9-b8d0-d05f6efc5522"
          onSubmit={handleOnSubmit}
        >
          <div className={contactStyle.formGroup}>
            <input
              type="text"
              name="name"
              className="form-control"
              id="exampleInputName"
              placeholder="name"
              required="required"
            />
            <input
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="email"
            />
          </div>
          <div className={contactStyle.formGroup}>
            <textarea
              name="message"
              id="exampleFormControlMessage"
              required="required"
              placeholder="Message"
              rows={10}
            />
          </div>
          <button
            type="submit"
            className={contactStyle.submitButton}
            disabled={serverState.submitting}
          >
            send
          </button>
          {serverState.status && (
            <p
              className={
                !serverState.status.ok
                  ? contactStyle.error
                  : contactStyle.confirm
              }
            >
              {serverState.status.msg}
            </p>
          )}
        </form>
      </div>
    </Layout>
  )
}

export default MyForm
