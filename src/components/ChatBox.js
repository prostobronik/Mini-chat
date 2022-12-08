import React from 'react'

function ChatBox({ chatHistory }) {
  return (
    <div className="container border">
      {chatHistory.length
        ? chatHistory.map((item) => (
            <div key={item.time}>
              <span className="text-primary font-weight-bold">
                {item.nickname}:
              </span>{' '}
              {item.message}
            </div>
          ))
        : 'Начать чат'}
    </div>
  )
}

export default ChatBox
