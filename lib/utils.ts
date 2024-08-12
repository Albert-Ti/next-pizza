import {type ClassValue, clsx} from 'clsx'
import {twMerge} from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function observer(target: HTMLElement, callback: (value: string) => void) {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log('Element is intersecting')
        callback(target.textContent || '')
      } else {
        console.log('Element is not intersecting')
      }
    })
  })

  console.log('Observer started observing the element')
  observer.observe(target)
  return () => {
    observer.unobserve(target)
    console.log('Observer stopped observing the element')
  }
}
