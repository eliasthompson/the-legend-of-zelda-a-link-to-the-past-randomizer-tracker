import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { detectOption } from '../actions/options';

export class LayoutToggle extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (!e.currentTarget.classList.contains('selected')) this.props.detectOption({ layout: `${this.props.width}x${this.props.height}` });
  }

  render() {
    const selected = (this.props.options.layout === `${this.props.width}x${this.props.height}`) ? ' selected' : '';

    return (
      <div className={ `layout-toggle${selected}` } onMouseDown={ this.handleClick }>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox={ `0 0 ${this.props.width} ${this.props.height}` }>
          <rect width={ this.props.width } height={ this.props.height }/>
        </svg>

        <span>{ this.props.width }x{ this.props.height }</span>

        <style jsx>{`
          .layout-toggle {
            display: flex;
            position: relative;
            box-sizing: border-box;
            flex-direction: column;
            align-items: center;
            align-content: center;
            justify-content: center;
            text-align: center;
            color: #FFFFFF;
            width: 48px;
            height: 48px;
            padding: 4px;
            cursor: pointer;
            user-select: none;
            transition: background-color 0.2s ease;

            &:hover {
              background-color: rgba(255, 255, 255, 0.12);
            }

            &.selected {
              background-color: rgba(0, 0, 0, 0.12);
              cursor: default;
            }

            svg {
              flex: 1;
              fill: #FFFFFF;
            }

            span {
              padding-top: 4px;
              font-size: 12.5%;
            }
          }
        `}</style>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  options: state.options,
});

export default connect(
  mapStateToProps,
  { detectOption },
)(LayoutToggle);

LayoutToggle.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};
