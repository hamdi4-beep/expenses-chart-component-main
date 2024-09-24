import * as React from 'react'
import {isMobile} from 'react-device-detect'

const AmountTag = ({
    amount
}: {
    amount: number
}) => {
    return (
        <div className="absolute bg-neutral-dark-brown rounded-sm text-center p-1 -mt-9 mb-1 -mx-1">
            <span className="text-white">${amount}</span>
        </div>
    )
}

function BarChartItem({
    day,
    height,
    amount
}: {
    day: string,
    height: string,
    amount: number
}) {
    const [isMouseOver, setIsMouseOver] = React.useState(false)
    const currentDay = new Date().toDateString().split(' ')[0].toLowerCase()

    const isCurrentDay = currentDay === day
    const isDesktop = !isMobile && isMouseOver

    return (
        <div
            className="text-center cursor-pointer"
            onMouseEnter={() => setIsMouseOver(true)}
            onMouseLeave={() => setIsMouseOver(false)}
        >
            {isDesktop && <AmountTag amount={amount} />}

            <div className={`md:w-10 w-8 ${height} ${isCurrentDay ? 'bg-primary-cyan' : 'bg-primary-soft-red'} rounded-md`}></div>
            <span className='inline-block mt-2 text-neutral-medium-brown'>{day}</span>
        </div>
    )
}

export default BarChartItem