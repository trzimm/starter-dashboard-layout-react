const MobileSearch = (props) => {
  
    return (
        <div
          className={props.isSearchBoxOpen ? 
            "fixed inset-0 z-10 bg-black bg-opacity-20" :
            "fixed inset-0 z-10 bg-black bg-opacity-20 hidden"}         
        >
        { /* Mobile search box */ }
        { /* x-show.transition="isSearchBoxOpen" */ }
        { /* style="backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px)" */ }

            
          <div className="absolute inset-x-0 flex items-center justify-between p-2 bg-white shadow-md">
            <div className="flex items-center flex-1 px-2 space-x-2">
              { /* search icon */ }
              <span>
                <svg
                  className="w-6 h-6 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search"
                className="w-full px-4 py-3 text-gray-600 rounded-md focus:bg-gray-100 focus:outline-none"
              />
            </div>
            { /* close button */ }
            <button 
              onClick={ () => props.toggleSearchBoxOpen() } 
              className="flex-shrink-0 p-4 rounded-md"
            >
              <svg
                className="w-4 h-4 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
    );
}

export default MobileSearch;