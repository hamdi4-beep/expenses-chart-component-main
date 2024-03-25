import BarChartItem from "./BarChartItem"

function BarChartItemsList() {
    const bars = [
        ['mon', 12],
        ['tue', 24],
        ['wed', 36],
        ['thu', 24],
        ['fri', 16],
        ['sat', 32],
        ['sun', 20]
    ]

    return (
        <div className="mt-14 flex justify-between items-end gap-3">
            {bars.map((bar, i) => {
                const [day, height] = bar as [string, number]
        
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