import React, { Component } from 'react';

class NotificationsMenu extends Component {

  render() {
      return (
        <div className="relative" x-data="{ isOpen: false }">
        { /* red dot */ }
        <div className="absolute right-0 p-1 bg-red-400 rounded-full animate-ping"></div>
        <div className="absolute right-0 p-1 bg-red-400 border rounded-full"></div>
        <button
          onClick={ () => this.props.toggleDropdownMenu('isNotificationsOpen') }
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
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </button>

        { /* Dropdown card */ }
        { /*  */ }
        <div
           className={this.props.isNotificationsOpen ? 
              "absolute w-48 max-w-md mt-3 transform bg-white rounded-md shadow-lg z-10 -translate-x-3/4 min-w-max" :
              "absolute w-48 max-w-md mt-3 transform bg-white rounded-md shadow-lg z-10 -translate-x-3/4 min-w-max hidden"}
        >
          <div className="p-4 font-medium border-b">
            <span className="text-gray-800">Notification</span>
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

export default NotificationsMenu;