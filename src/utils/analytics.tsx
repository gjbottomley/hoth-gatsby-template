import { useEffect } from "react"
import ReactGA from "react-ga4"

export function usePageTracker() {
  const urlLocation = typeof window !== "undefined" ? window.location.href : ""

  useEffect(() => {
    if (!process.env.GATSBY_GTRACKING) return

    ReactGA.send({ hitType: "pageview", page: urlLocation })
  }, [urlLocation])
}

export const useAnayltics = () => {
  useEffect(() => {
    if (!process.env.GATSBY_GTRACKING) return
    ReactGA.initialize(`${process.env.GATSBY_GTRACKING}`)
  }, [])
}

export const trackEvent = ({
  category,
  action,
  label,
}: {
  category: string
  action: string
  label?: string
}) => {
  if (!process.env.GATSBY_GTRACKING) return

  ReactGA.event({
    category: category,
    action: action,
    label: label,
  })
}
