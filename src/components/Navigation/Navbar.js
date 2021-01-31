import React, { Component } from 'react';
import DesktopSearch from './Search/DesktopSearch';
import MobileSearch from './Search/MobileSearch';
import NotificationsMenu from './DropdownMenus/NotificationsMenu';
import ServicesMenu from './DropdownMenus/ServicesMenu';
import OptionsMenu from './DropdownMenus/OptionsMenu';
import ProfileMenu from './DropdownMenus/ProfileMenu';

class Navbar extends Component {

  render() {
     return (
      <header className="flex-shrink-0 border-b">
        <div className="flex items-center justify-between p-2">
          { /* Navbar left */ }
          <div className="flex items-center space-x-3">
            <span className="p-2 text-xl font-semibold tracking-wider uppercase lg:hidden">K-WD</span>
            { /* Toggle sidebar button */ }
            <button onClick={ () => this.props.toggleSidbarMenu() } className="p-2 rounded-md focus:outline-none focus:ring">
              <svg
                className={! this.props.isSidebarOpen ? 
                        "w-4 h-4 text-gray-600" :
                        "w-4 h-4 text-gray-600 transform transition-transform -rotate-180" }
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            </button>
          </div>

         <DesktopSearch />
         <MobileSearch toggleSearchBoxOpen={this.props.toggleSearchBoxOpen} isSearchBoxOpen={this.props.isSearchBoxOpen} />

          { /* Navbar right */ }
          <div className="relative flex items-center space-x-3">
          { /* search button */ }
            <button
              onClick={ () => this.props.toggleSearchBoxOpen() }
              className="p-2 bg-gray-100 rounded-full md:hidden focus:outline-none focus:ring hover:bg-gray-200"
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            <div className="items-center hidden space-x-3 md:flex">
              { /* Notification Button */ }
              <NotificationsMenu toggleDropdownMenu={this.props.toggleDropdownMenu} isNotificationsOpen={this.props.isNotificationsOpen} />

              { /* Services Button */ }
              <ServicesMenu toggleDropdownMenu={this.props.toggleDropdownMenu} isServicesOpen={this.props.isServicesOpen} />

              { /* Options Button */ }
              <OptionsMenu toggleDropdownMenu={this.props.toggleDropdownMenu} isOptionsOpen={this.props.isOptionsOpen} />

            </div>

            { /* Profile / Avatar button */ }
            <ProfileMenu toggleDropdownMenu={this.props.toggleDropdownMenu} isProfileOpen={this.props.isProfileOpen} />

          </div>
        </div>
      </header>
    );
  };
};

export default Navbar;