import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

// import Item from './item';
import NewItem from './newItem';

export class Tracker extends Component {
  render() {
    const [cols, rows] = this.props.options.layout.split('x');

    const dungeonRewards = [
      { id: 'unknown', name: 'Unknown' },
      { id: 'crystal', name: 'Crystal' },
      { id: 'fairycrystal', name: 'Fairy Crystal' },
      { id: 'pendant', name: 'Pendant' },
      { id: 'greenpendant', name: 'Green Pendant' },
    ];

    const items = [
      <NewItem
        key="sword"
        items={ [
          { id: 'sword1', name: 'Fighter Sword' },
          { id: 'sword2', name: 'Master Sword' },
          { id: 'sword3', name: 'Tempered Sword' },
          { id: 'sword4', name: 'Golden Sword' },
        ] }
      />,
      <NewItem
        key="shield"
        items={ [
          { id: 'shield1', name: 'Shield' },
          { id: 'shield2', name: 'Fire Shield' },
          { id: 'shield3', name: 'Mirror Shield' },
        ] }
      />,
      <NewItem
        key="tunic"
        items={ [
          { id: 'tunic1', name: 'Green Tunic' },
          { id: 'tunic2', name: 'Blue Tunic' },
          { id: 'tunic3', name: 'Red Tunic' },
        ] }
      />,
      <NewItem
        key="bow"
        items={ [
          { id: 'bow', name: 'Bow' },
          { id: 'silvers', name: 'Silver Arrows' },
        ] }
      />,
      <NewItem
        key="boomerang1"
        items={ [
          { id: 'boomerang1', name: 'Blue Boomerang' },
        ] }
      />,
      <NewItem
        key="boomerang2"
        items={ [
          { id: 'boomerang2', name: 'Red Boomerang' },
        ] }
      />,
      <NewItem
        key="hookshot"
        items={ [
          { id: 'hookshot', name: 'Hookshot' },
        ] }
      />,
      <NewItem
        key="mushroom"
        items={ [
          { id: 'mushroom', name: 'Mushroom' },
        ] }
      />,
      <NewItem
        key="powder"
        items={ [
          { id: 'powder', name: 'Magic Powder' },
        ] }
      />,
      <NewItem
        key="halfmagic"
        items={ [
          { id: 'halfmagic', name: 'Half Magic' },
        ] }
      />,
      <NewItem
        key="firerod"
        items={ [
          { id: 'firerod', name: 'Fire Rod' },
        ] }
      />,
      <NewItem
        key="icerod"
        items={ [
          { id: 'icerod', name: 'Ice Rod' },
        ] }
      />,
      <NewItem
        key="lantern"
        items={ [
          { id: 'lantern', name: 'Lantern' },
        ] }
      />,
      <NewItem
        key="hammer"
        items={ [
          { id: 'hammer', name: 'Hammer' },
        ] }
      />,
      <NewItem
        key="shovel"
        items={ [
          { id: 'shovel', name: 'Shovel' },
        ] }
      />,
      <NewItem
        key="flute"
        items={ [
          { id: 'flute', name: 'Flute' },
        ] }
      />,
      <NewItem
        key="net"
        items={ [
          { id: 'net', name: 'Net' },
        ] }
      />,
      <NewItem
        key="book"
        items={ [
          { id: 'book', name: 'Book of Mudora' },
        ] }
      />,
      <NewItem
        key="bombos"
        items={ [
          { id: 'bombos', name: 'Bombos Medallion' },
        ] }
      />,
      <NewItem
        key="ether"
        items={ [
          { id: 'ether', name: 'Ether Medallion' },
        ] }
      />,
      <NewItem
        key="quake"
        items={ [
          { id: 'quake', name: 'Quake Medallion' },
        ] }
      />,
      <NewItem
        key="bottle"
        items={ [
          { id: 'bottle', name: 'Bottle' },
        ] }
      />,
      <NewItem
        key="somaria"
        items={ [
          { id: 'somaria', name: 'Cane of Somaria' },
        ] }
      />,
      <NewItem
        key="byrna"
        items={ [
          { id: 'byrna', name: 'Can of Bryna' },
        ] }
      />,
      <NewItem
        key="cape"
        items={ [
          { id: 'cape', name: 'Cape' },
        ] }
      />,
      <NewItem
        key="mirror"
        items={ [
          { id: 'mirror', name: 'Mirror' },
        ] }
      />,
      <NewItem
        key="boots"
        items={ [
          { id: 'boots', name: 'Pegasus Boots' },
        ] }
      />,
      <NewItem
        key="glove"
        items={ [
          { id: 'glove1', name: 'Power Gloves' },
          { id: 'glove2', name: 'Titan\'s Mitts' },
        ] }
      />,
      <NewItem
        key="flippers"
        items={ [
          { id: 'flippers', name: 'Flippers' },
        ] }
      />,
      <NewItem
        key="moonpearl"
        items={ [
          { id: 'moonpearl', name: 'Moon Pearl' },
        ] }
      />,
      <NewItem
        key="heartpiece"
        items={ [
          { id: 'heartpiece', name: 'Heart Piece' },
        ] }
      />,
      <NewItem
        key="heartcontainer"
        items={ [
          { id: 'heartcontainer', name: 'Heart Container' },
        ] }
      />,
      <NewItem
        key="easternpalace"
        label={ { id: 'easternpalace', text: 'EP' } }
        items={ dungeonRewards }
      />,
      <NewItem
        key="desertpalace"
        label={ { id: 'desertpalace', text: 'DP' } }
        items={ dungeonRewards }
      />,
      <NewItem
        key="towerofhera"
        label={ { id: 'towerofhera', text: 'ToH' } }
        items={ dungeonRewards }
      />,
      <NewItem
        key="palaceofdarkness"
        label={ { id: 'palaceofdarkness', text: 'PoD' } }
        items={ dungeonRewards }
      />,
      <NewItem
        key="swamppalace"
        label={ { id: 'swamppalace', text: 'SP' } }
        items={ dungeonRewards }
      />,
      <NewItem
        key="skullwoods"
        label={ { id: 'skullwoods', text: 'SW' } }
        items={ dungeonRewards }
      />,
      <NewItem
        key="thievestown"
        label={ { id: 'thievestown', text: 'TT' } }
        items={ dungeonRewards }
      />,
      <NewItem
        key="icepalace"
        label={ { id: 'icepalace', text: 'IP' } }
        items={ dungeonRewards }
      />,
      <NewItem
        key="miserymire"
        label={ { id: 'miserymire', text: 'MM' } }
        markers={ ['bombos', 'ether', 'quake'] }
        items={ dungeonRewards }
      />,
      <NewItem
        key="turtlerock"
        label={ { id: 'turtlerock', text: 'TR' } }
        markers={ ['bombos', 'ether', 'quake'] }
        items={ dungeonRewards }
      />,
    ];

    return (
      <div className="tracker">
        { _.times(rows, i => (
          <div key={i} className="tracker-row">
            { _.times(cols, j => (
              items[(i * cols) + j]
            )) }
          </div>
        )) }

        <style jsx>{`
          .tracker {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            box-sizing: border-box;
            object-fit: contain;
            padding: 8px;

            .tracker-row {
              position: relative;
              display: flex;
              justify-content: center;
              text-align: center;
              margin-top: 8px;

              &:first-child {
                margin-top: 0;
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
  items: state.items,
  dungeons: state.dungeons,
});

export default connect(
  mapStateToProps,
  null,
)(Tracker);
