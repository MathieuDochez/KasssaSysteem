import { useEffect, useState } from 'react'

// Runs an async loader once and tracks loading / error / data.
// `loader` must be stable (a module-level function or a useCallback).
export function useAsync(loader) {
  const [state, setState] = useState({ status: 'loading', data: null, error: null })

  useEffect(() => {
    let active = true
    loader().then(
      (data) => active && setState({ status: 'success', data, error: null }),
      (error) => active && setState({ status: 'error', data: null, error }),
    )
    return () => {
      active = false
    }
  }, [loader])

  return state
}
