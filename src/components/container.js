import React, { Component } from 'react';

// import LightWorldMap from './lightWorldMap';
// import DarkWorldMap from './darkWorldMap';
import Tracker from './tracker';
import Timer from './timer';
import LayoutToggles from './layoutToggles';
import Basic from '../fonts/Basic-Regular.ttf';
import November from '../fonts/November-Regular.ttf';
import RobotoRegular from '../fonts/Roboto-Regular.ttf';
import RobotoMedium from '../fonts/Roboto-Medium.ttf';

export default class Container extends Component {
  render() {
    return (
      <div className="container">
        <div className="shown">
          <img className="logo" src="public/images/logo-large.png" alt="Logo" />
          <hr />
          <Tracker dimension={ this.props.match.params.dimension } />
          <hr />

          <div>
            <img className="go-mode" src="public/images/items/gomode.png" height="24" alt="Go Mode" />
          </div>

          <Timer />
        </div>

        <div className="not-shown">
          {/* <LightWorldMap />
          <DarkWorldMap /> */}
        </div>

        <LayoutToggles />

        <style jsx global>{`
          @font-face {
            font-family: 'Roboto';
            font-weight: 400;
            src: url('${RobotoRegular}') format('truetype');
          }

          @font-face {
            font-family: 'Roboto';
            font-weight: 600;
            src: url('${RobotoMedium}') format('truetype');
          }

          @font-face {
            font-family: 'November';
            font-weight: 400;
            src: url('${November}') format('truetype');
          }

          @font-face {
            font-family: 'Basic';
            font-weight: 400;
            src: url('${Basic}') format('truetype');
          }

          * {
            margin: 0px;
            border: 0px;
            padding: 0px;
          }

          html, body, #root {
            height: 100%;
          }

          body, #root {
            position: relative;
            width: 100%;
            display: flex;
            flex-direction: column;
          }

          body {
            font-family: 'Roboto', sans-serif;
            color: #FFFFFF;
            background-color: #000000;
          }

          img {
            image-rendering: pixelated;
          }
        `}</style>

        <style jsx>{`
          .container {
            position: relative;
            width: 100%;
            height: 100%;
            display: flex;

            .shown,
            .not-shown {
              position: relative;
              display: flex;
              flex-direction: column;
              height: 100%;
            }

            .shown {
              box-shadow: 0 2px 2px 0 rgba(0,0,0,.16), 0 0 2px 0 rgba(0,0,0,.12);
              background: #212121;
              width: 248px;
              z-index: 1;
              user-select: none;

              .logo {
                width: 100%;
                padding: 8px;
                box-sizing: border-box;
              }

              hr {
                height: 1px;
                margin: 0 8px;
                background: rgba(255, 255, 255, 0.03);
              }
            }

            .not-shown {
              flex: 1;
              background: #303030;
            }
          }
        `}</style>
      </div>
    );
  }
}
