import React, { Component } from 'react';

import Sidebar from './components/Navigation/Sidebar';
import Navbar from './components/Navigation/Navbar';
import Footer from './components/Navigation/Footer';
import ImportDataCard from './components/ImportDataCard';
import MonthlyChartCard from './components/MonthlyChartCard';
import Table from './components/Table';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isSidebarOpen: true,
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
            </div>
  
            { /* Start content */ }
  
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
