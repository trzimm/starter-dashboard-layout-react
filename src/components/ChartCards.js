function ChartCards() {
    return (
        // Import data card 
        <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-4">

        {/* Users chart card */}
        <a href="/" className="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
          <div className="flex items-start">
            <div className="flex flex-col flex-shrink-0 space-y-2">
              <span className="text-gray-400">Total Users</span>
              <span className="text-lg font-semibold">100,221</span>
            </div>
            <div className="relative min-w-0 ml-auto h-14">
              <canvas id="usersChart"></canvas>
            </div>
          </div>
          <div>
            <span className="inline-block px-2 text-sm text-white bg-green-300 rounded">14%</span>
            <span>&nbsp;</span>
            <span>from 2019</span>
          </div>
        </a>

        {/* Sessions chart card */}
        <a href="/" className="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
          <div className="flex items-start">
            <div className="flex flex-col flex-shrink-0 space-y-2">
              <span className="text-gray-400">Sessions</span>
              <span className="text-lg font-semibold">40%</span>
            </div>
            <div className="relative min-w-0 ml-auto h-14">
              <canvas id="sessionsChart"></canvas>
            </div>
          </div>
          <div>
            <span className="inline-block px-2 text-sm text-white bg-green-300 rounded">1.2%</span>
            <span>&nbsp;</span>
            <span>from 2019</span>
          </div>
        </a>

        {/* Vists chart card */}
        <a href="/" className="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
          <div className="flex items-start">
            <div className="flex flex-col flex-shrink-0 space-y-2">
              <span className="text-gray-400">Vists</span>
              <span className="text-lg font-semibold">300,527</span>
            </div>
            <div className="relative min-w-0 ml-auto h-14">
              <canvas id="vistsChart"></canvas>
            </div>
          </div>
          <div>
            <span className="inline-block px-2 text-sm text-white bg-green-300 rounded">10%</span>
            <span>&nbsp;</span>
            <span>from 2019</span>
          </div>
        </a>

        {/* Articles chart card */}
        <a href="/" className="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
          <div className="flex items-start">
            <div className="flex flex-col flex-shrink-0 space-y-2">
              <span className="text-gray-400">Articles</span>
              <span className="text-lg font-semibold">600,429</span>
            </div>
            <div className="relative min-w-0 ml-auto h-14">
              <canvas id="articlesChart"></canvas>
            </div>
          </div>
          <div>
            <span className="inline-block px-2 text-sm text-white bg-green-300 rounded">30%</span>
            <span>&nbsp;</span>
            <span>from 2019</span>
          </div>
        </a>
      </div>
    );

}

export default ChartCards;