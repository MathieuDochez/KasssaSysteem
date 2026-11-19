import { useEffect, useState } from 'react'

const MINUTE = 60_000
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR

function split(target) {
  const ms = new Date(target).getTime() - Date.now()
  if (ms <= 0) return null
  return [
    ['dagen', Math.floor(ms / DAY)],
    ['uur', Math.floor((ms % DAY) / HOUR)],
    ['min', Math.floor((ms % HOUR) / MINUTE)],
  ]
}

// Returns [[label, value], ...] until the target moment, then null.
export function useCountdown(target) {
  const [parts, setParts] = useState(() => split(target))

  useEffect(() => {
    if (!parts) return
    const id = setInterval(() => setParts(split(target)), 30_000)
    return () => clearInterval(id)
  }, [target, parts])

  return parts
}
