import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="accordion">
      <button
        className={`accordion__trigger ${open ? 'accordion__trigger--open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label={`${open ? 'Close' : 'Open'} ${title}`}
      >
        <span>{title}</span>
        <ChevronDown size={16} />
      </button>
      <div
        className={`accordion__content ${open ? 'accordion__content--open' : ''}`}
        role="region"
        aria-hidden={!open}
      >
        {children}
      </div>
    </div>
  )
}
