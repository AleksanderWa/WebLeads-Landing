import { useEffect, useState, type RefObject } from "react"

export type RevealPhase = "static" | "armed" | "revealed"

const isBelowViewport = (element: HTMLElement): boolean => element.getBoundingClientRect().top > window.innerHeight

const canArmReveal = (reducedMotion: boolean): boolean =>
  !reducedMotion && typeof IntersectionObserver !== "undefined" && window.location.hash === ""

export function useRevealOnScroll(targetRef: RefObject<HTMLElement | null>, reducedMotion: boolean): RevealPhase {
  const [phase, setPhase] = useState<RevealPhase>("static")

  useEffect(() => {
    const target = targetRef.current
    if (!target || !canArmReveal(reducedMotion)) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setPhase("revealed")
        observer.disconnect()
      },
      { rootMargin: "0px 0px -10% 0px" },
    )
    const armOnFirstScroll = () => {
      if (window.location.hash !== "" || !isBelowViewport(target)) return
      setPhase("armed")
      observer.observe(target)
    }
    window.addEventListener("scroll", armOnFirstScroll, { once: true, passive: true })
    return () => {
      window.removeEventListener("scroll", armOnFirstScroll)
      observer.disconnect()
    }
  }, [targetRef, reducedMotion])

  return reducedMotion ? "static" : phase
}
