import React, { Component } from 'react';
import November from '../fonts/November-Regular.ttf';
import RobotoRegular from '../fonts/Roboto-Regular.ttf';
import RobotoMedium from '../fonts/Roboto-Medium.ttf';

const styles = <style jsx global>{`
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

  * {
    margin: 0px;
    border: 0px;
    padding: 0px;
  }

  html, body {
    height: 100%;
  }

  body {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    color: #FFFFFF;
  }

  #root {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`}</style>;

export default class Container extends Component {
  render() {
    const urlParams = new URLSearchParams(this.props.location.search);
    const backgroundColor = (urlParams.get('background') !== null) ? `#${urlParams.get('background')}` : 'transparent';

    return (
      <div className="container">
        <div className="shown">

        </div>

        <div className="not-shown">

        </div>

        { styles }

        <style jsx global>{`
          body {
            background-color: ${backgroundColor};
          }
        `}</style>

        <style jsx>{`
          .container {
            position: relative;
            width: 86px;
            height: 513px;
            display: flex;
            flex-direction: column;
            align-items: center;
            align-content: center;
            justify-content: space-between;

            .shown {
              background: yellow;
              width: 50px;
              height: 50px;
            }

            .not-shown {
              background: red;
              width: 50px;
              height: 50px;
            }
          }
        `}</style>
      </div>
    );
  }
}
