import React, { Component } from 'react';

class ServicesMenu extends Component {

  render() {
      return (
        <div x-data="{ isOpen: false }">
        <button
          onClick={ () => this.props.toggleDropdownMenu('isServicesOpen') }
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
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            />
          </svg>
        </button>

        { /* Dropdown */ }
        { /* @keydown.escape="isOpen = false" */ }
        { /* x-show.transition.opacity="isOpen" */ }
        <div
           className={this.props.isServicesOpen ? 
              "absolute mt-3 transform bg-white rounded-md shadow-lg z-10 -translate-x-3/4 min-w-max" :
              "absolute mt-3 transform bg-white rounded-md shadow-lg z-10 -translate-x-3/4 min-w-max hidden"}
        >
          <div className="p-4 text-lg font-medium border-b">Web apps & services</div>
          <ul className="flex flex-col p-2 my-3 space-y-3">
            <li>
              <a href="/" className="flex items-start px-2 py-1 space-x-2 rounded-md hover:bg-gray-100">
                <span className="block mt-1">
                  <svg
                    className="w-6 h-6 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path
                      fill="#fff"
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                </span>
                <span className="flex flex-col">
                  <span className="text-lg">Atlassian</span>
                  <span className="text-sm text-gray-400">Lorem ipsum dolor sit.</span>
                </span>
              </a>
            </li>
            <li>
              <a href="/" className="flex items-start px-2 py-1 space-x-2 rounded-md hover:bg-gray-100">
                <span className="block mt-1">
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
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
                <span className="flex flex-col">
                  <span className="text-lg">Slack</span>
                  <span className="text-sm text-gray-400"
                    >Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span
                  >
                </span>
              </a>
            </li>
          </ul>
          <div className="flex items-center justify-center p-4 text-blue-700 underline border-t">
            <a href="/">Show all apps</a>
          </div>
        </div>
      </div>

      );
  }
}

export default ServicesMenu;