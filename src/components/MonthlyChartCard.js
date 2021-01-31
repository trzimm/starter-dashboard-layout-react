function MonthlyChartCard () {
    return (
        <div className="border rounded-lg shadow-sm xl:col-span-3 bg-white">
          { /* Card header */ }
          <div className="flex items-center justify-between px-4 py-2 border-b">
            <h5 className="font-semibold">Monthly Expenses</h5>
            { /* Dots button */ }
            <button className="p-2 rounded-full">
              <svg
                className="w-6 h-6 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </button>
          </div>
          { /* Card content */ }
          <div className="flex items-center p-4 space-x-4">
            <span className="text-3xl font-medium">45%</span>
            <span className="flex items-center px-2 space-x-2 text-sm text-green-800 bg-green-100 rounded">
              <span>
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path
                    fillRule="evenodd"
                    d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
              <span>39.2%</span>
            </span>
          </div>
          { /*  Chart */ }
          <div className="relative min-w-0 p-4 h-80">
            <canvas id="updatingMonthlyChart"></canvas>
          </div>
        </div>
    );
}

export default MonthlyChartCard;