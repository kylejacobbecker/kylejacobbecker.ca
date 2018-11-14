'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Content } from './Content';
import { Sidebar } from './Sidebar';
import { Tab } from './Tab';
import { classes } from './classes';

export class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: ['Home', 'Chess'],
      open: [true, false]
    };
    this.changeTab = this.changeTab.bind(this);
  }

  render() {
    return(
      <div id="container">
        <header>
          <ul className={classes.headerUL}>
            <Tab name={this.state.tabs[0]} open={this.state.open[0]} onClick={this.changeTab} />
            <Tab name={this.state.tabs[1]} open={this.state.open[1]} onClick={this.changeTab} />
          </ul>
        </header>
        <main className={classes.main}>
          <Content open={this.state.open} />
          <Sidebar open={this.state.open} />
        </main>
      </div>
    );
  }

  changeTab(name) {
    let openNew = [];

    for (let count = 0; count < this.state.tabs.length; count++) {
      if (this.state.tabs[count] === name) {
        openNew.push(true);
      } else {
        openNew.push(false);
      }
    }

    this.setState({
      tabs: this.state.tabs,
      open: openNew
    });
  }
};

ReactDOM.render(
  <Page />,
  document.getElementById('page')
);