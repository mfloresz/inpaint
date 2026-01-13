type SliderProps = {
  label?: any
  value?: number
  min?: number
  max?: number
  onChange: (value: number) => void
  onStart?: () => void
}

export default function Slider(props: SliderProps) {
  const { value, label, min, max, onChange, onStart } = props

  const step = ((max || 100) - (min || 0)) / 100

  return (
    <div className="inline-flex items-center space-x-4 text-foreground font-medium">
      <span className="text-sm uppercase tracking-wider opacity-70">
        {label}
      </span>
      <input
        className="appearance-none rounded-full h-1.5 bg-muted cursor-pointer accent-primary hover:accent-primary/80 transition-all duration-200"
        type="range"
        step={step}
        min={min}
        max={max}
        value={value}
        onPointerDown={onStart}
        onChange={ev => {
          ev.preventDefault()
          ev.stopPropagation()
          onChange(parseInt(ev.currentTarget.value, 10))
        }}
      />
    </div>
  )
}
