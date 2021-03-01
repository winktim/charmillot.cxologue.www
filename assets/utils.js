// The debounce function receives our function as a parameter
export function debounce(fn) {
  // This holds the requestAnimationFrame reference, so we can cancel it if we wish
  let frame
  // The debounce function returns a new function that can receive a variable number of arguments
  return (...params) => {
    // If the frame variable has been defined, clear it now, and queue for next frame
    if (frame) {
      cancelAnimationFrame(frame)
    }
    // Queue our function call for the next frame
    frame = requestAnimationFrame(() => {
      // Call our function and pass any params we received
      fn(...params)
    })
  }
}

const MAX_SHOWN_ACTUALITE_DOTS = 3
const MAX_SHOWN_ACTUALITE_DOTS_EACH_SIDE = 1

/**
 * Should the given Actualite index be displayed in full size
 * @param {number} i index to check for full size
 * @param {number} current currently selected index
 * @returns {boolean} true if `i` should be displayed full size
 */
export function shouldBeFullSize(i, current, total) {
  if (total <= MAX_SHOWN_ACTUALITE_DOTS) {
    return true
  }

  if (current === 0 && i < MAX_SHOWN_ACTUALITE_DOTS) {
    return true
  }
  const last = total - 1

  if (current === last && i > last - MAX_SHOWN_ACTUALITE_DOTS) {
    return true
  }

  if (i > current) {
    return i - current <= MAX_SHOWN_ACTUALITE_DOTS_EACH_SIDE
  }

  return current - i <= MAX_SHOWN_ACTUALITE_DOTS_EACH_SIDE
}
