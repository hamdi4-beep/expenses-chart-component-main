import BarItems from './BarItems'
import logoSrc from '../assets/logo.svg'

function BartChartContainer() {
    return (
        <div className="max-w-sm mx-auto p-5">
            <div className="bg-soft-red p-5 py-6 rounded-lg flex justify-between">
                <div className="text-white">
                    <p>My balance</p>
                    <span className='font-bold text-2xl'>$921.48</span>
                </div>

                <img src={logoSrc} alt="logo image" />
            </div>

            <div className="bg-white p-5 mt-4 rounded-lg">
                <span className="font-bold text-2xl">Spending - Last 7 Days</span>
                <BarItems />
            </div>
        </div>
    )
}

export default BartChartContainer