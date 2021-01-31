import React, { Component } from 'react';

class OptionsMenu extends Component {

  render() {
      return (

        <div className="relative" x-data="{ isOpen: false }">
        <button
          onClick={ () => this.props.toggleDropdownMenu('isOptionsOpen') }
          className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 focus:outline-none focus:ring"
        >
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
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
        </button>

        { /* Dropdown card */ }
        { /* x-show.transition.opacity="isOpen" */ }
        <div
           className={this.props.isOptionsOpen ? 
              "absolute w-40 max-w-sm mt-3 transform bg-white rounded-md shadow-lg z-10 -translate-x-3/4 min-w-max" :
              "absolute w-40 max-w-sm mt-3 transform bg-white rounded-md shadow-lg z-10 -translate-x-3/4 min-w-max hidden"}
        >
          <div className="p-4 font-medium border-b">
            <span className="text-gray-800">Options</span>
          </div>
          <ul className="flex flex-col p-2 my-2 space-y-1">
            <li>
              <a href="/" className="block px-2 py-1 transition rounded-md hover:bg-gray-100">Link</a>
            </li>
            <li>
              <a href="/" className="block px-2 py-1 transition rounded-md hover:bg-gray-100">Another Link</a>
            </li>
          </ul>
          <div className="flex items-center justify-center p-4 text-blue-700 underline border-t">
            <a href="/">See All</a>
          </div>
        </div>
      </div>
    
      );
  }
}

export default OptionsMenu;