import React from 'react'

function ClearHistoryButton({ onClear }) {
  return (
    <div>
      <button type="button" className="btn btn-danger " onClick={onClear}>
        Очистить историю
      </button>
    </div>
  )
}

export default ClearHistoryButton
