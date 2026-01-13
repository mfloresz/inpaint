import { ReactNode } from 'react'

interface ModalProps {
  children?: ReactNode
}

export default function Modal(props: ModalProps) {
  const { children } = props
  return (
    <div
      className={[
        'absolute inset-0 z-50 flex justify-center items-center',
        'bg-background/40 backdrop-blur-sm',
      ].join(' ')}
    >
      <div className="bg-card border border-border p-8 sm:p-12 rounded-2xl shadow-xl max-w-4xl text-card-foreground">
        {children}
      </div>
    </div>
  )
}
