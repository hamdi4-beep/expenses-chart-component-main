import BarChartItem from "./BarChartItem"
import data from '../data.json'

export type BarData = {
    day: string,
    amount: number,
    height: string
}

function BarChartItemsList() {
    const heights = ['h-12', 'h-24', 'h-36', 'h-24', 'h-16', 'h-32', 'h-20']

    const bars = data.reduce((p, a, i) => {
        return [
            ...p, {
            ...a,
            height: heights[i]
        }]
    }, [] as any[])

    return (
        <div className="mt-14 flex justify-between items-end">
            {bars.map((bar: BarData, i) => {
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