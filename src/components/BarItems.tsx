function BarItems() {
    const date = new Date().toDateString()
    const currentDay = date.split(' ')[0].toLowerCase()

    return (
        <div className="mt-12 flex items-end gap-3">
            <div className="bart">
                <div className="w-8 h-12 bg-cyan rounded-sm"></div>
                <span className='block mt-2 text-medium-brown'>mon</span>
            </div>

            <div className="bart">
                <div className="w-8 h-24 bg-soft-red rounded-sm"></div>
                <span className='block mt-2 text-medium-brown'>tue</span>
            </div>

            <div className="bart">
                <div className="w-8 h-36 bg-soft-red rounded-sm"></div>
                <span className='block mt-2 text-medium-brown'>wed</span>
            </div>

            <div className="bart">
                <div className="w-8 h-24 bg-soft-red rounded-sm"></div>
                <span className='block mt-2 text-medium-brown'>thu</span>
            </div>

            <div className="bart">
                <div className="w-8 h-16 bg-soft-red rounded-sm"></div>
                <span className='block mt-2 text-medium-brown'>fri</span>
            </div>

            <div className="bart">
                <div className="w-8 h-32 bg-soft-red rounded-sm"></div>
                <span className='block mt-2 text-medium-brown'>sat</span>
            </div>

            <div className="bart">
                <div className="w-8 h-20 bg-soft-red rounded-sm"></div>
                <span className='block mt-2 text-medium-brown'>sun</span>
            </div>
        </div>
    )
}

export default BarItems