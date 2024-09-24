import BarChartItem from "./BarChartItem"
import data from '../data.json'

function BarChartItemsList() {
    const bars = data.reduce((p, a, i) => {
        return [
            ...p, {
            ...a,
            height: ['h-12', 'h-24', 'h-36', 'h-24', 'h-16', 'h-32', 'h-20'][i]
        }]
    }, [] as any[])

    console.log(bars)

    return (
        <div className="mt-14 flex justify-between items-end">
            {bars.map((bar: {
                day: string,
                amount: number,
                height: string
            }, i) => {
                return (
                    <BarChartItem
                        day={bar.day}
                        height={bar.height}
                        amount={bar.amount}
                        key={i}
                    />
                )
            })}
        </div>
    )
}

export default BarChartItemsList