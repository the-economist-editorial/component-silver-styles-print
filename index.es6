/* Style components seem to be stateless and do no more than:
    - pass on arguments from SilverBullet
    - override default CSS with specific styles
    - append style-specific config properties
    */
import React from 'react';
import SilverChartWrapper from '@economist/component-silver-chartwrapper';
// Print-specific config properties
import printConfig from './assets/complete_printconfig.json';

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

  // AMEND CONFIG is called from render to
  // add context-specific properties to the
  // inherited props.config...
  amendConfig(config) {
    const target = config.strings;
    // String (title, etc) properties
    const strList = Object.keys(target);
    const source = printConfig.background.strings;
    for (const i in strList) {
      const str = strList[i];
      // Assign new vals to default config object
      target[str] = Object.assign(target[str], source[str]);
    }
    // Append background element definitions:
    config.backgroundShapes = printConfig.background.shapes;
    // ...and style-specific outerbox and margins:
    // NOTE: Outer box size is now user-set/confirmed in Editor...
    // config.dimensions.outerbox = {...printConfig.background.dimensions.outerbox};
    // But margins are context-specific:
    config.dimensions.margins = {...printConfig.background.dimensions.margins};
    return config;
  }
  // AMEND CONFIG ends

  // RENDER
  // Child component is the 'waist' in the hierarchy. Props from SilverBullet are:
  // cloned config object, getSvg flag, and the svg callback...
  render() {
    // Clone inherited config and append context-specific properties
    // (ESLint errors this)
    const configClone = { ...this.props.config };
    const config = this.amendConfig(configClone);
    return (
      <SilverChartWrapper
        config={config}
        getSvg={this.props.getSvg} passSvg={this.props.passSvg}
      />
    );
  }
  // RENDER ends
}
