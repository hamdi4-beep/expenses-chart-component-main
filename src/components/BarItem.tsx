function BarItem({
    day,
    height
}: {
    day: string,
    height: number
}) {
    const currentDay = new Date().toDateString().split(' ')[0].toLowerCase()
    const isCurrentDay = currentDay === day

    return (
        <div className="bart">
            <div className={`w-8 h-${height} ${isCurrentDay ? 'bg-cyan' : 'bg-soft-red'} rounded-sm`}></div>
            <span className='block mt-2 text-medium-brown'>{day}</span>
        </div>
    )
}

export default BarItem