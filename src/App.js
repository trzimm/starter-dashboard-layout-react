import React, { Component } from 'react';
import {isMobile} from 'react-device-detect';

import Sidebar from './components/Navigation/Sidebar';
import Navbar from './components/Navigation/Navbar';
import Footer from './components/Navigation/Footer';
import ImportDataCard from './components/ImportDataCard';
import MonthlyChartCard from './components/MonthlyChartCard';
import Table from './components/Table';
import ChartCards from './components/ChartCards';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isSidebarOpen: ! isMobile,
      isSearchBoxOpen: false,
      isNotificationsOpen: false,
      isServicesOpen: false,
      isOptionsOpen: false,
      isProfileOpen: false
    };

    this.toggleSidbarMenu = this.toggleSidbarMenu.bind(this);
    this.toggleSearchBoxOpen = this.toggleSearchBoxOpen.bind(this);
    this.toggleDropdownMenu = this.toggleDropdownMenu.bind(this);
  }
  
  toggleSidbarMenu() {
    this.setState({
      isSidebarOpen: ! this.state.isSidebarOpen
    });
  };

  toggleSearchBoxOpen() {
    this.setState({
      isSearchBoxOpen: ! this.state.isSearchBoxOpen
    });
  };
  
  toggleDropdownMenu(menu) {
    this.setState({
      isNotificationsOpen: false,
      isServicesOpen: false,
      isOptionsOpen: false,
      isProfileOpen: false,
      [menu]: ! this.state[menu]
    });
  };

  render() {
    return (
      <div className="flex h-screen overflow-y-hidden bg-white" >
        <Sidebar toggleSidbarMenu={this.toggleSidbarMenu} isSidebarOpen={this.state.isSidebarOpen} />
        
        <div className="flex flex-col flex-1 h-full overflow-hidden">
          <Navbar toggleSidbarMenu={this.toggleSidbarMenu} 
                  toggleDropdownMenu={this.toggleDropdownMenu} 
                  toggleSearchBoxOpen={this.toggleSearchBoxOpen}
                  {...this.state}
          />
  
          { /* Main content */ }
          <main className="flex-1 max-h-full p-5 overflow-hidden overflow-y-scroll">
            { /* Main content header */ }
            <div className="flex flex-col items-start justify-between pb-6 space-y-4 border-b lg:items-center lg:space-y-0 lg:flex-row">
              <h1 className="text-2xl font-semibold whitespace-nowrap">Dashboard</h1>

              <a
                href="https://github.com/trzimm/starter-dashboard-layout-react"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-4 py-1 space-x-1 bg-gray-200 rounded-md shadow hover:bg-opacity-20"
              >
                <span>
                  <svg className="w-4 h-4 text-gray-500" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                    ></path>
                  </svg>
                </span>
                <span>View on Github</span>
              </a>
            </div>
  
            { /* Start content */ }

            { /* Chart cards (Four columns grid) */ }
            <ChartCards />

            { /* Two column grid */ }
            <div className="grid grid-cols-1 gap-6 mt-6 lg:grid-cols-2 xl:grid-cols-4">
              <ImportDataCard />
              <MonthlyChartCard />
            </div>
  
            { /* Table */ }
            <Table />
          </main>
          <Footer />
        </div>
      </div>
    );
  }

}

export default App;
