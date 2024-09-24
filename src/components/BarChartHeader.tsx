function BarChartHeader() {
    return (
        <div className="bg-primary-soft-red p-5 py-6 rounded-lg flex justify-between">
            <div className="text-white">
                <p className='text-md font-light mb-1'>My balance</p>
                <span className='font-bold text-2xl'>$921.48</span>
            </div>

            <img src="/expenses-chart-component-main/assets/logo.svg" alt="logo image of two circles intertwined" />
        </div>
    )
}

export default BarChartHeader