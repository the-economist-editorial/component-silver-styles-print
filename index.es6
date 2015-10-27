/* Style components do no more than:
    pass on arguments from SilverBullet
    override default CSS with specific styles
    */
import React from 'react';
import SilverChartWrapper from '@economist/component-silver-chartwrapper';

export default class SilverStylesPrint extends React.Component {

  // PROP TYPES
  static get propTypes() {
    return {
      config: React.PropTypes.object,
      test: React.PropTypes.string,
      // Flag and callback for svg content
      getSvg: React.PropTypes.bool,
      passSvg: React.PropTypes.func,
    };
  }
  // PROP TYPES ends

  // RENDER
  // Child component is the 'waist' in the hierarchy. Props, bequeathed
  // unchanged from SilverBullet, are data object, getSvg flag,
  // and the svg callback...
  render() {
    return (
      <SilverChartWrapper data={this.props.config} getSvg={this.props.getSvg} passSvg={this.props.passSvg}/>
    );
  }
  // RENDER ends
}
