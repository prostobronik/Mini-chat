import React, { useState, useEffect } from 'react'
import { saveSession } from '../lib/sessionStorage/sessionStorage'

function InputNickname({ user, nickname, setNickname }) {
  const [validateError, setValidateError] = useState('')
  const [disableInput, setDisableInput] = useState(false)

  useEffect(() => {
    if (user) {
      setDisableInput(true)
    }
  }, [user])

  const handleOnChange = (event) => {
    setNickname(event.target.value)
  }

  const handleOnBlur = (event) => {
    const { value } = event.target
    if (value.length < 3) {
      setValidateError('Введите ваше имя')
    } else {
      setValidateError('')
    }
  }

  const handleSubmit = () => {
    if (nickname !== '') {
      setDisableInput(true)
      saveSession('user', nickname)
      document.title = nickname
    }
  }

  return (
    <div className="container">
      <form className="form-inline">
        <div className="form-group">
          <label htmlFor="comment" className="ms-3">
            Введите ваше имя:
          </label>
          <input
            value={nickname}
            type="text"
            className="m-lg-2"
            id="nickname"
            required
            onBlur={handleOnBlur}
            disabled={disableInput}
            onChange={handleOnChange}
          />
          <button
            type="submit"
            className="btn btn-secondary m-lg-2"
            onClick={handleSubmit}
          >
            Отправить
          </button>
          {validateError && (
            <div className="container">
              <p>Ошибка: {validateError}</p>
            </div>
          )}
        </div>
      </form>
      {nickname && disableInput && (
        <div>
          <p>Добро пожаловать {nickname}</p>
        </div>
      )}
    </div>
  )
}

export default InputNickname
