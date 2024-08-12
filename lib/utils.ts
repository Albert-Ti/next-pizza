import {type ClassValue, clsx} from 'clsx'
import {twMerge} from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function observer(target: HTMLElement, callback: (value: string) => void) {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          callback(target.textContent || '')
        } else {
          console.log('Элемент не пересекается')
        }
      })
    },
    {
      threshold: 0.4,
    }
  )

  observer.observe(target)
  return () => {
    observer.unobserve(target)
  }
}
