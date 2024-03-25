import BarItem from "./BarItem"

function BarItems() {
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
        <div className="mt-12 flex items-end gap-3">
            {bars.map((bar, i) => {
                const [day, height] = bar as [string, number]
                
                return (
                    <BarItem
                        day={day}
                        height={height}
                        key={i}
                    />
                )
            })}
        </div>
    )
}

export default BarItems