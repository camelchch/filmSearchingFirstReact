import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Search from './components/search/Search';

class App extends Component {
  render() {
    return (
        <MuiThemeProvider >
            <div>
                <Header />
                <Search />
                <Footer />
            < /div>
        </MuiThemeProvider>
    );
  }
}

export default App;
