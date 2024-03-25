import * as React from 'react'
import {isMobile} from 'react-device-detect'

const HoverElem = ({
    price
}: {
    price: string
}) => {
    return (
        <div className="absolute bg-dark-brown rounded-sm text-center p-1 -mt-9 mb-1 -mx-1.5">
            <span className="text-white">{price}</span>
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

    return (
        <div
            className="cursor-pointer"
            onMouseEnter={() => setIsMouseOver(true)}
            onMouseLeave={() => setIsMouseOver(false)}
        >
            {!isMobile && isMouseOver && day === 'wed' ? (
                <HoverElem price="$52.36" />
            ) : !isMobile && isMouseOver && day === 'thu' ? (
                <HoverElem price="$31.01" />
            ) : ''}

            <div className={`w-10 ${height} ${isCurrentDay ? 'bg-cyan' : 'bg-soft-red'} rounded-sm`}></div>
            <span className='block mt-2 text-medium-brown'>{day}</span>
        </div>
    )
}

export default BarChartItem