import React from 'react'

export const ContactForm = () => {
  return (
    <div>
        <form action="">
            <input type="text" placeholder='Name' />
            <br />
            <input type="email" placeholder='Email' />
            <br />
            <textarea placeholder='message'></textarea>
            <br />
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}
