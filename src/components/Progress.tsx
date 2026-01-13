interface ProgressProps {
  percent: number
}

export default function Progress({ percent }: ProgressProps) {
  return (
    <div className="w-full flex items-center space-x-4">
      <div className="relative flex-1 bg-muted h-2 rounded-full overflow-hidden">
        <div
          className="absolute left-0 top-0 h-full bg-primary transition-all duration-300 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
      <span className="w-16 text-right font-mono text-sm font-semibold text-primary">
        {percent.toFixed(0)}%
      </span>
    </div>
  )
}
