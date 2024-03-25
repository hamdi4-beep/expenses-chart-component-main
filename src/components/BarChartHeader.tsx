import logoSrc from '../assets/logo.svg'

function BarChartHeader() {
    return (
        <div className="bg-soft-red p-5 py-6 rounded-lg flex justify-between">
            <div className="text-white">
                <p>My balance</p>
                <span className='font-bold text-2xl'>$921.48</span>
            </div>

            <img src={logoSrc} alt="logo image" />
        </div>
    )
}

export default BarChartHeader