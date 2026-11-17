import { useEffect, useRef, useState } from "react"

const easeOutCubic = (progress: number): number => 1 - (1 - progress) ** 3

export function useTweenedNumber(target: number, durationMs: number, reducedMotion: boolean): number {
  const [value, setValue] = useState(target)
  const valueRef = useRef(target)

  useEffect(() => {
    const from = valueRef.current
    if (reducedMotion || from === target) {
      valueRef.current = target
      setValue(target)
      return
    }
    const startedAt = performance.now()
    let frame = 0
    const step = (now: number) => {
      const progress = Math.min((now - startedAt) / durationMs, 1)
      const next = progress === 1 ? target : from + (target - from) * easeOutCubic(progress)
      valueRef.current = next
      setValue(next)
      if (progress < 1) frame = requestAnimationFrame(step)
    }
    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [target, durationMs, reducedMotion])

  return value
}
