import React, { useState } from 'react'
import { saveState } from '../lib/localStorage/localStorage'

function InputMessage({
  nickname,
  message,
  setMessage,
  chatHistory,
  setChatHistory,
}) {
  const [validateError, setValidateError] = useState('')

  const handleOnChange = (event) => {
    setMessage(event.target.value)
  }

  const handleOnBlur = (event) => {
    const { value } = event.target
    const regex = /^[a-zA-Z\s]+$/
    if (!value.match(regex)) {
      setValidateError('Введите текст')
    } else {
      setValidateError('')
    }
  }

  const handleSubmit = () => {
    const data = { nickname: nickname, message: message, time: Date.now() }
    const newHistory = [...chatHistory, data]
    setChatHistory(newHistory)
    saveState('history', newHistory)
    setMessage('')
  }

  return (
    <div className="container">
      <form className="form-inline">
        <div className="form-group">
          <label htmlFor="comment" className="">
            Введите сообщение:
          </label>
          <input
            value={message}
            type="text"
            className="m-lg-2 "
            id="comment"
            required
            onBlur={handleOnBlur}
            onChange={handleOnChange}
          />
          <button
            className="btn btn-secondary m-lg-2"
            type="submit"
            onClick={handleSubmit}
          >
            Отправить
          </button>
          {validateError && (
            <div className="container">
              <p className="small text-danger">Ошибка: {validateError}</p>
            </div>
          )}
        </div>
      </form>
    </div>
  )
}

export default InputMessage
