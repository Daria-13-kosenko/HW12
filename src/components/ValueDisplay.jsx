import { useRef, useEffect } from 'react'

function ValueDisplay({ value }) {
  const prevValue = useRef('')
  useEffect(() => {
    prevValue.current = value
  }, [value])

  return (
    <div>
      <p>
        <strong>Current Value:</strong>
        {value}
      </p>
      <p>
        <strong>Previous Value:</strong>
        {prevValue.current}
      </p>
    </div>
  )
}
export default ValueDisplay
