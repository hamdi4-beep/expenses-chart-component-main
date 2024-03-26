import * as React from 'react'
import {isMobile} from 'react-device-detect'

const AmountTag = ({
    amount
}: {
    amount: string
}) => {
    return (
        <div className="absolute bg-neutral-dark-brown rounded-sm text-center p-1 -mt-9 mb-1 -mx-2">
            <span className="text-white">{amount}</span>
        </div>
    )
}

function BarChartItem({
    day,
    height
}: {
    day: string,
    height: string
}) {
    const [isMouseOver, setIsMouseOver] = React.useState(false)
    const currentDay = new Date().toDateString().split(' ')[0].toLowerCase()

    const isCurrentDay = currentDay === day
    const isDesktop = !isMobile && isMouseOver

    return (
        <div
            className="cursor-pointer"
            onMouseEnter={() => setIsMouseOver(true)}
            onMouseLeave={() => setIsMouseOver(false)}
        >
            {isDesktop && day === 'wed' ? (
                <AmountTag amount="$52.36" />
            ) : isDesktop && day === 'thu' ? (
                <AmountTag amount="$31.01" />
            ) : ''}

            <div className={`md:w-10 w-8 ${height} ${isCurrentDay ? 'bg-primary-cyan' : 'bg-primary-soft-red'} rounded-sm`}></div>
            <span className='inline-block mt-2 text-neutral-medium-brown'>{day}</span>
        </div>
    )
}

export default BarChartItem