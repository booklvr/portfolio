// import { useState, useEffect } from 'react'

// export const useScroll = (ref) => {
//   // Set a single object `{ x: ..., y: ..., direction: ... }` once on init
//   const [scroll, setScroll] = useState({
//     x: ref.getBoundingClientRect().left,
//     y: ref.getBoundingClientRect().top,
//     direction: '',
//   })

//   const listener = (e) => {
//     // `prev` provides us the previous state: https://reactjs.org/docs/hooks-reference.html#functional-updates
//     setScroll((prev) => ({
//       x: ref.getBoundingClientRect().left,
//       y: -ref.getBoundingClientRect().top,
//       // Here we’re comparing the previous state to the current state to get the scroll direction
//       direction: prev.y > -ref.getBoundingClientRect().top ? 'up' : 'down',
//     }))
//   }

//   useEffect(() => {
//     window.addEventListener('scroll', listener)
//     // cleanup function occurs on unmount
//     return () => window.removeEventListener('scroll', listener)
//     // Run `useEffect` only once on mount, so add `, []` after the closing curly brace }
//   }, [listener])

//   return scroll
// }
