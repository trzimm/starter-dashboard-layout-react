import React, { Component } from 'react';

class ProfileMenu extends Component {

  render() {
      return (
        <div className="relative" x-data="{ isOpen: false }">
        <button 
            onClick={ () => this.props.toggleDropdownMenu('isProfileOpen') }
            className="p-1 bg-gray-200 rounded-full focus:outline-none focus:ring"
        >
          <img
            className="object-cover w-8 h-8 rounded-full"
            src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png"
            alt="First Last"
          />
        </button>

        { /* green dot */ }
        <div className="absolute right-0 p-1 bg-green-400 rounded-full bottom-3 animate-ping"></div>
        <div className="absolute right-0 p-1 bg-green-400 border border-white rounded-full bottom-3"></div>

        { /* Dropdown card */ }
        { /* x-show.transition.opacity="isOpen" */ }
        <div
            className={this.props.isProfileOpen ? 
              "absolute mt-3 transform -translate-x-full bg-white rounded-md shadow-lg min-w-max z-10" :
              "absolute mt-3 transform -translate-x-full bg-white rounded-md shadow-lg min-w-max z-10 hidden"}
        >
          <div className="flex flex-col p-4 space-y-1 font-medium border-b">
            <span className="text-gray-800">First Last</span>
            <span className="text-sm text-gray-400">first.last@example.com</span>
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
            <a href="/">Logout</a>
          </div>
        </div>
      </div>

      );
  }
}

export default ProfileMenu;