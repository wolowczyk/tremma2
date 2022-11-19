import React, {Component} from 'react';
import './App.css';
import logo from './logo.svg';
import Header, {HeaderProps} from './containers/Header';

const headerProps: HeaderProps = {
  title: 'Tremma. Haptic Navigation System',
  description: 'This is example app to send position from map below to bluetooth Tremma device.',
  links: [
  ],
};

const App: React.FC = () =>  {

    return (
    <main className="App">
       <Header
      title={headerProps.title}
      description={headerProps.description}
      links={headerProps.links}
    />
    </main>
    );
}

export default App;