import BarChartHeader from './BarChartHeader'
import BarChartItemsList from './BarChartItemsList'

function BartChartContainer() {
    return (
        <div className="md:max-w-lg max-w-md mx-auto p-5">
            <BarChartHeader />

            <div className="bg-white md:py-8 p-5 mt-4 rounded-lg">
                <span className="text-dark-brown font-bold md:text-3xl text-xl">Spending - Last 7 Days</span>
                <BarChartItemsList />
                <div className='border-t border-grey my-6'></div>

                <div className='flex justify-between items-end'>
                    <div>
                        <p className='text-medium-brown'>Total this month</p>
                        <span className='text-dark-brown text-2xl font-bold'>$478.33</span>
                    </div>

                    <div>
                        <p className='text-dark-brown font-bold text-right'>+2.4%</p>
                        <span className='text-medium-brown'>from last month</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BartChartContainer