import { useState } from 'react'

export const useToggle = () => {
  const [toggle, setSToggle] = useState(false)

  const onToggle = () => setSToggle(!toggle)

  const setToggle = (toggle: boolean) => setSToggle(toggle)

  return {
    toggle,
    onToggle,
    setToggle
  }
}
