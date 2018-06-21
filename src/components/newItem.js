import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { updateItems } from '../actions/items';
import { updateDungeon } from '../actions/dungeons';

export class Item extends Component {
  constructor(props) {
    super(props);

    this.updateCount = this.updateCount.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   let grayscale = true;
  //
  //   nextProps.items.forEach((item) => {
  //     if (grayscale === true && item.has === true) {
  //       grayscale = false;
  //     }
  //   });
  //
  //   if (nextProps.label && nextProps.label.has) {
  //     grayscale = false;
  //   }
  //
  //   return {
  //     ...prevState,
  //     grayscale,
  //   };
  // }

  updateCount(direction) {
    const newItem = _.cloneDeep(this.props.activeItem);
    let { count } = this.props.activeItem;

    if (direction === 'up') {
      if ((count + 1) <= this.props.activeItem.limit) count += 1;
    } else if (direction === 'down') {
      if (count !== 0) count -= 1;
    }

    newItem.count = count;
    this.props.updateItems(newItem);
  }

  handleClick(e) {
    // Left Click
    if (e.buttons === 1) {
      this.updateCount('up');

    // Right Click
    } else if (e.buttons === 2) {
      const activeIndex = _.findIndex(this.props.stateItems, { visible: true });
      const newItems = _.map(this.props.stateItems, (item, i) => {
        const newItem = _.cloneDeep(item);
        let visible = false;

        if (i === 0 && (activeIndex + 1) === this.props.stateItems.length) visible = true;
        else if (i === (activeIndex + 1)) visible = true;

        newItem.visible = visible;
        return newItem;
      });

      this.props.updateItems(newItems);

    // Middle Click
    } else if (e.buttons === 4) {

    }
  }

  handleScroll(e) {
    // Scroll Up
    if (e.deltaY < 0) this.updateCount('up');

    // Scroll Down
    else if (e.deltaY > 0) this.updateCount('down');
  }

  render() {
    const [cols, rows] = this.props.options.layout.split('x');
    const styleInfo = {};
    let found = false;

    // console.log(this.props.activeItem);

    if (this.props.options.layout === '14x3' || this.props.options.layout === '21x2' || this.props.options.layout === '42x1') {
      styleInfo.baseMetric = 'height: ';
      styleInfo.gridValue = Number(rows);
      styleInfo.gridValueAlt = Number(cols);
      styleInfo.paddingDirection = 'padding-left: 100%;';
    } else {
      styleInfo.baseMetric = 'width: ';
      styleInfo.gridValue = Number(cols);
      styleInfo.gridValueAlt = Number(rows);
      styleInfo.paddingDirection = 'padding-top: 100%;';
    }

    styleInfo.margin = (232 / ((styleInfo.gridValue * 4) + (styleInfo.gridValue - 1)));
    styleInfo.baseMetric += `${(styleInfo.margin * 4)}px;`;

    this.props.stateItems.forEach((item) => {
      if (!found && item.count) found = true;
    });

    if (this.props.dungeon) found = this.props.dungeon.completed;

    return (
      <div
        className="item"
        onMouseDown={ this.handleClick }
        onWheel={ this.handleScroll }
        onContextMenu={ (e) => { e.preventDefault(); } }
      >
        <div className={ `overlay${(!found) ? ' grayscale' : ''}` }>
          { _.map(this.props.items, (item) => {
            let visible = false;

            if (this.props.dungeon) visible = (this.props.dungeon.reward === item.id);
            else ({ visible } = _.find(this.props.stateItems, { id: item.id }));

            return <img
              key={ item.id }
              className={ (!visible) ? 'hidden' : '' }
              src={ `public/images/items/${item.id}.png` }
              alt={ item.name }
            />;
          }) }
        </div>


        { (!this.props.dungeon && this.props.activeItem.limit > 1 && this.props.activeItem.count) ? <div className="count">{ this.props.activeItem.count }</div> : null }
        { (this.props.label) ? <div className="label">{this.props.label.text}</div> : null }

        {/* { (this.props.markers) ? (
          <div className="overlay">
            { _.map(this.props.markers, (marker, i) => {
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
        ) : null } */}

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
            font-family: 'Basic';
            margin: 0 ${(styleInfo.margin > 8) ? 4 : (styleInfo.margin / 2)}px;
            cursor: ${(this.props.dungeon && this.props.dungeon.reward === 'unknown') ? 'default' : 'pointer'};

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
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;

                &.hidden {
                  display: none;
                }
              }
            }

            .count,
            .label {
              position: absolute;
              left: 0;

              /* TODO: Change to 1px text-shadow and transform/scale up using pixelate filter */
              /* -webkit-text-stroke: 2px #000000;
              paint-order: stroke fill; */
            }

            .count {
              bottom: 0;
            }

            .label {
              top: 0;
            }
          }
        `}</style>
      </div>
    );
  }
}

export const mapStateToProps = (state, props) => {
  const items = _.filter(state.items, (ref) => {
    const item = _.find(props.items, { id: ref.id });

    return item && ref.id === item.id;
  });

  return {
    options: state.options,
    dungeon: (props.label) ? state.dungeons[props.label.id] : null,
    stateItems: items,
    activeItem: _.find(items, { visible: true }),
  };
};

export default connect(
  mapStateToProps,
  { updateItems, updateDungeon },
)(Item);

Item.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string, name: PropTypes.string })).isRequired,
  label: PropTypes.shape({ id: PropTypes.string, text: PropTypes.string }),
  markers: PropTypes.arrayOf(PropTypes.string),
};
