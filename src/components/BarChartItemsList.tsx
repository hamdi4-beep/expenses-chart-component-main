import BarChartItem from "./BarChartItem"

function BarChartItemsList() {
    const bars = [
        ['mon', 'h-12'],
        ['tue', 'h-24'],
        ['wed', 'h-36'],
        ['thu', 'h-24'],
        ['fri', 'h-16'],
        ['sat', 'h-32'],
        ['sun', 'h-20']
    ]

    return (
        <div className="mt-14 flex justify-between items-end gap-3">
            {bars.map((bar, i) => {
                const [day, height] = bar

                return (
                    <BarChartItem
                        day={day}
                        height={height}
                        key={i}
                    />
                )
            })}
        </div>
    )
}

export default BarChartItemsList