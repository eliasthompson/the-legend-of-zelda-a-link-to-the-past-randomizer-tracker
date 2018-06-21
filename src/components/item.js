import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { updateItems } from '../actions/items';
import { updateDungeon } from '../actions/dungeons';

export class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentItem: 0,
      currentMarker: 0,
      currentCount: (props.countDirection === 'desc') ? props.count : 0,
      grayscale: true,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let grayscale = true;

    nextProps.items.forEach((item) => {
      if (grayscale === true && item.has === true) {
        grayscale = false;
      }
    });

    if (nextProps.label && nextProps.label.has) {
      grayscale = false;
    }

    return {
      ...prevState,
      grayscale,
    };
  }

  handleClick(e) {
    const currentItem = _.clone(this.state.currentItem);
    let nextItem = currentItem;

    if (e.buttons === 2) {
      nextItem = ((this.state.currentItem + 1) !== this.props.items.length) ? (this.state.currentItem + 1) : 0;

      this.setState(() => ({
        currentItem: nextItem,
      }));
    }

    if (!this.props.label && ((!this.state.grayscale && e.buttons === 2) || (e.buttons === 1 && typeof this.props.count === 'undefined'))) {
      // const items = [{
      //   id: this.props.items[currentItem].id,
      //   count: 0,
      // }];
      // item[this.props.items[nextItem].id] = (e.buttons === 1) ? this.state.grayscale : !this.state.grayscale;
      //
      // this.props.updateItems(items);
    } else if (this.props.label) {
      const dungeons = {};
      let nextMarker = _.clone(this.state.currentMarker);
      let completed = (currentItem !== 0) ? this.state.grayscale : false;

      if (e.buttons === 2) completed = (nextItem !== 0) ? !this.state.grayscale : false;
      if (e.buttons === 4) nextMarker = ((this.state.currentMarker + 1) !== this.props.markers.length) ? (this.state.currentMarker + 1) : 0;

      dungeons[this.props.label.id] = {
        chests: this.state.currentCount,
        reward: this.props.items[(e.buttons === 2) ? nextItem : currentItem].id,
        medallion: (this.props.markers) ? this.props.markers[nextMarker] : null,
        completed,
      };

      this.props.updateDungeon(dungeons);

      if (e.buttons === 4) {
        this.setState(() => ({
          currentMarker: nextMarker,
        }));
      }
    }
  }

  handleScroll(e) {
    let nextCount = 0;

    if (e.deltaY > 0) nextCount = (this.state.currentCount - 1);
    else if (e.deltaY < 0) nextCount = (this.state.currentCount + 1);

    nextCount = (nextCount >= 0 && nextCount <= this.props.count) ? nextCount : this.state.currentCount;

    if (!this.props.label && this.props.count) {
      const item = {};

      if (nextCount > 0) item[this.props.items[0].id] = true;
      else if (nextCount < 1) item[this.props.items[0].id] = false;

      this.props.updateItems(item);
    }

    if (this.props.label) {
      const dungeons = {};
      dungeons[this.props.label.id] = {
        chests: nextCount,
        reward: this.props.items[this.state.currentItem].id,
        medallion: (this.props.markers) ? this.props.markers[this.state.currentMarker] : null,
        completed: !this.state.grayscale,
      };
      this.props.updateDungeon(dungeons);
    }

    this.setState(() => ({
      currentCount: nextCount,
    }));
  }

  render() {
    const count = (this.props.count) ? (this.props.count + 1) : 0;
    const [cols, rows] = this.props.options.layout.split('x');
    const grid = { cols, rows };
    const styleInfo = {};

    if (this.props.options.layout === '14x3' || this.props.options.layout === '21x2' || this.props.options.layout === '42x1') {
      styleInfo.baseMetric = 'height: ';
      styleInfo.gridValue = Number(grid.rows);
      styleInfo.gridValueAlt = Number(grid.cols);
      styleInfo.paddingDirection = 'padding-left: 100%;';
    } else {
      styleInfo.baseMetric = 'width: ';
      styleInfo.gridValue = Number(grid.cols);
      styleInfo.gridValueAlt = Number(grid.rows);
      styleInfo.paddingDirection = 'padding-top: 100%;';
    }

    styleInfo.margin = (232 / ((styleInfo.gridValue * 4) + (styleInfo.gridValue - 1)));
    styleInfo.baseMetric += `${(styleInfo.margin * 4)}px;`;

    return (
      <div
        className="item"
        onMouseDown={ this.handleClick }
        onWheel={ this.handleScroll }
        onContextMenu={ (e) => { e.preventDefault(); } }
      >
        <div className={ `overlay ${(this.state.grayscale) ? 'grayscale' : ''}` }>
          { this.props.items.map((item, i) => (
            <img
              key={ item.id }
              className={ (i !== this.state.currentItem) ? 'hidden' : '' }
              src={ `public/images/items/${item.id}.png` }
              alt={ item.name }
            />
          )) }
        </div>


        { (count) ? (
          <div className="overlay">
            { _.times(count, (i) => {
              if (i === 0) return <div key={ i } className={ (i !== this.state.currentCount) ? 'hidden' : '' } />;

              return (
                <img
                  key={ i }
                  className={ (i !== this.state.currentCount) ? 'hidden' : '' }
                  src={ (i) ? `public/images/markers/${i}.png` : null }
                  alt={ i || null }
                />
              );
            }) }
          </div>
        ) : null }

        { (this.props.label) ? <img className="overlay" src={ `public/images/labels/${this.props.label.id}.png` } alt={this.props.label.name} /> : null }

        { (this.props.markers) ? (
          <div className="overlay">
            { this.props.markers.map((marker, i) => {
              if (i === 0) return <div key={ i } className={ (i !== this.state.currentMarker) ? 'hidden' : '' } />;

              return (
                <img
                  key={ i }
                  className={ (i !== this.state.currentMarker) ? 'hidden' : '' }
                  src={ (marker) ? `public/images/markers/${marker}.png` : null }
                  alt={ marker || null }
                />
              );
            }) }
          </div>
        ) : null }

        <style jsx>{`
          .item {
            ${styleInfo.baseMetric}
            max-width: 32px;
            max-height: 32px;
            position: relative;
            display: flex;
            align-items: center;
            align-content: center;
            justify-content: center;
            text-align: center;
            margin: 0 ${(styleInfo.margin > 8) ? 4 : (styleInfo.margin / 2)}px;
            cursor: ${((!this.props.label && this.props.count) || this.props.items[this.state.currentItem].id === 'unknown') ? 'default' : 'pointer'};

            &::before {
              content: '';
              display: block;
              ${styleInfo.paddingDirection}
            }

            &:first-child {
              margin-left: 0;
            }

            &:last-child {
              margin-right: 0;
            }

            .overlay {
              position: absolute;
              top: 0;
              left: 0;
              display: flex;
              width: 100%;
              height: 100%;

              &.grayscale {
                filter: brightness(50%) grayscale(100%);
              }

              img {
                width: 100%;

                &.hidden {
                  display: none;
                }
              }
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
  { updateItems, updateDungeon },
)(Item);

Item.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string, name: PropTypes.string, has: PropTypes.bool })).isRequired,
  count: PropTypes.number,
  countDirection: PropTypes.string,
  label: PropTypes.shape({ id: PropTypes.string, name: PropTypes.string }),
  markers: PropTypes.arrayOf(PropTypes.string),
};
