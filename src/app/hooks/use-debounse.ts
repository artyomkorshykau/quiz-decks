import { useEffect, useState } from 'react'

export const useDebounse = <T>(value: T, delay: number = 1000) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(timeout)
    }
  }, [value])

  return debouncedValue
}
