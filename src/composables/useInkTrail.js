const listeners = new Set()
let listenerAdded = false

function globalMouseMoveHandler(e) {
  const x = e.clientX
  const y = e.clientY
  const now = Date.now()

  for (const entry of listeners) {
    const { callback, throttleMs, lastRun } = entry
    if (throttleMs > 0 && now - lastRun < throttleMs) continue
    entry.lastRun = now
    callback(x, y)
  }
}

export function useInkTrail(callback, throttleMs = 80) {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReducedMotion) {
    return () => {}
  }

  const entry = {
    callback,
    throttleMs,
    lastRun: 0,
  }

  listeners.add(entry)

  if (!listenerAdded) {
    window.addEventListener('mousemove', globalMouseMoveHandler, { passive: true })
    listenerAdded = true
  }

  const stopInkTrail = () => {
    listeners.delete(entry)
    if (listeners.size === 0 && listenerAdded) {
      window.removeEventListener('mousemove', globalMouseMoveHandler)
      listenerAdded = false
    }
  }

  return stopInkTrail
}
