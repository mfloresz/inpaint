import { ReactNode, useState } from 'react'

interface ButtonProps {
  children: ReactNode
  className?: string
  icon?: ReactNode
  primary?: boolean
  style?: {
    [key: string]: string
  }
  onClick?: () => void
  onDown?: () => void
  onUp?: () => void
  onEnter?: () => void
  onLeave?: () => void
}

export default function Button(props: ButtonProps) {
  const {
    children,
    className,
    icon,
    primary,
    style,
    onClick,
    onDown,
    onUp,
    onEnter,
    onLeave,
  } = props
  const [active, setActive] = useState(false)
  let background = ''
  if (primary) {
    background =
      'bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm transition-all duration-200 active:scale-95'
  } else if (active) {
    background =
      'bg-accent text-accent-foreground shadow-sm transition-all duration-200'
  } else {
    background =
      'hover:bg-accent hover:text-accent-foreground transition-all duration-200 active:scale-95'
  }
  return (
    <div
      role="button"
      onKeyDown={() => {
        onDown?.()
      }}
      onClick={onClick}
      onPointerDown={() => {
        setActive(true)
        onDown?.()
      }}
      onPointerUp={() => {
        setActive(false)
        onUp?.()
      }}
      onPointerEnter={() => {
        onEnter?.()
      }}
      onPointerLeave={() => {
        onLeave?.()
      }}
      tabIndex={-1}
      className={[
        'inline-flex items-center space-x-3 py-2.5 px-5 rounded-md cursor-pointer font-medium',
        background,
        className,
      ].join(' ')}
      style={style}
    >
      {icon}
      <span className="select-none">{children}</span>
    </div>
  )
}
