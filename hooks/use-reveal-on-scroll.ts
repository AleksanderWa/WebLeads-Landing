import { useEffect, useState, type RefObject } from "react"

export type RevealPhase = "static" | "armed" | "revealed"

export function useRevealOnScroll(targetRef: RefObject<HTMLElement | null>, reducedMotion: boolean): RevealPhase {
  const [phase, setPhase] = useState<RevealPhase>("static")

  useEffect(() => {
    const target = targetRef.current
    if (!target || reducedMotion || typeof IntersectionObserver === "undefined") return
    let isFirstReport = true
    const observer = new IntersectionObserver(
      ([entry]) => {
        const wasFirstReport = isFirstReport
        isFirstReport = false
        if (wasFirstReport && entry.isIntersecting) return observer.disconnect()
        if (wasFirstReport) return setPhase("armed")
        if (!entry.isIntersecting) return
        setPhase("revealed")
        observer.disconnect()
      },
      { rootMargin: "0px 0px -10% 0px" },
    )
    observer.observe(target)
    return () => observer.disconnect()
  }, [targetRef, reducedMotion])

  return reducedMotion ? "static" : phase
}
