import React, { useState, useEffect } from 'react'
import ChatBox from './ChatBox'
import InputMessage from './InputMessage'
import ClearHistoryButton from './ClearHistoryButton'
import { loadSession } from '../lib/sessionStorage/sessionStorage'
import { loadState, clearState } from '../lib/localStorage/localStorage'
import InputNickname from './InputNickname'

function MainPage() {
  const [nickname, setNickname] = useState('')
  const [message, setMessage] = useState('')
  const [chatHistory, setChatHistory] = useState([])
  const user = loadSession('user') //check if we already have user
  const history = loadState('history') || [] //check if we already have history

  useEffect(() => {
    if (!chatHistory.length && history.length) {
      setChatHistory(history)
    }
  }, [chatHistory, history])

  useEffect(() => {
    if (user) {
      setNickname(user)
      document.title = user
    }
  }, [user])

  const handleClear = () => {
    clearState('history')
    setChatHistory([])
  }

  return (
    <>
      <div>
        <h2>Онлайн чат</h2>
      </div>
      <div className="mainPage">
        <InputNickname
          user={user}
          nickname={nickname}
          setNickname={setNickname}
        />
        <ChatBox chatHistory={chatHistory} />
        <InputMessage
          nickname={nickname}
          message={message}
          setMessage={setMessage}
          chatHistory={chatHistory}
          setChatHistory={setChatHistory}
        />
        <ClearHistoryButton onClear={handleClear} />
      </div>
    </>
  )
}

export default MainPage
