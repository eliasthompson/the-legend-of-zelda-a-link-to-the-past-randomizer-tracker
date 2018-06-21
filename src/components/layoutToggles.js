import React, { Component } from 'react';

import LayoutToggle from './layoutToggle';

export default class LayoutToggles extends Component {
  render() {
    return (
      <div className="layout-toggles">
        <LayoutToggle width={1} height={42} />
        <LayoutToggle width={2} height={21} />
        <LayoutToggle width={3} height={14} />
        <LayoutToggle width={6} height={7} />
        <LayoutToggle width={7} height={6} />
        <LayoutToggle width={14} height={3} />
        <LayoutToggle width={21} height={2} />
        <LayoutToggle width={42} height={1} />

        <style jsx>{`
          .layout-toggles {
            position: absolute;
            bottom: 20px;
            right: 20px;
            display: flex;
            background: #424242;
            border-radius: 2px;
            box-shadow: 0 2px 2px 0 rgba(0,0,0,.16), 0 0 2px 0 rgba(0,0,0,.12);
            z-index: 10;
          }
        `}</style>
      </div>
    );
  }
}
