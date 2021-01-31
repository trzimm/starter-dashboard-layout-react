function ImportDataCard() {
    return (
        // Import data card 
        <div className="border rounded-lg shadow-sm">
          { /*  Card header */ }
          <div className="flex items-center justify-between px-4 py-2 border-b">
            <h5 className="font-semibold">Import Data</h5>
            { /*  Dots button */ }
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
          <p className="px-4 py-6 text-gray-600">See and talk to your users and import them into your platform.</p>
          <ul className="px-4 pb-4 space-y-4 divide-y">
            <h5 className="font-semibold">Import Users from:</h5>
            <li className="flex items-start justify-between pt-4">
              <div className="flex items-start space-x-3">
                { /*  Twitter icon */ }
                <span className="flex items-center pt-1">
                  <svg fill="currentColor" className="w-5 h-5 text-blue-500">
                    <path
                      d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                    ></path>
                  </svg>
                </span>
                <div>
                  <h5 className="font-semibold">Twitter</h5>
                  <span className="text-sm font-medium text-gray-400">Users</span>
                </div>
              </div>
              <a href="/" className="flex items-center px-2 py-1 space-x-2 text-sm text-white bg-blue-600 rounded-md">
                <span>Launch</span>
                <span className="">
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </span>
              </a>
            </li>
            <li className="flex items-start justify-between pt-4">
              <div className="flex items-start space-x-3">
                { /*  Github icon */ }
                <span className="flex items-center pt-1">
                  <svg width="24" height="24" fill="currentColor" className="text-black">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"
                    ></path>
                  </svg>
                </span>
                <div>
                  <h5 className="font-semibold">Github</h5>
                  <span className="text-sm font-medium text-gray-400">Users</span>
                </div>
              </div>
              <a href="/" className="flex items-center px-2 py-1 space-x-2 text-sm text-white bg-blue-600 rounded-md">
                <span>Launch</span>
                <span className="">
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </span>
              </a>
            </li>
            <li className="pt-4 text-sm font-medium text-gray-400">
              <p>
                Or you can
                <span>&nbsp;</span>
                <a href="/" className="font-normal text-blue-500 hover:underline whitespace-nowrap"
                  >sync data to your dashboard</a
                >
                <span>&nbsp;</span>
                to ensure data is always up to date.
              </p>
            </li>
          </ul>
        </div>
    );

}

export default ImportDataCard;