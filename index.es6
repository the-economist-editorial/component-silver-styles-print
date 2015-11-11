/* Style components do no more than:
    pass on arguments from SilverBullet
    override default CSS with specific styles
    */
import React from 'react';
import SilverChartWrapper from '@economist/component-silver-chartwrapper';
// printconfig.json currently defines marginal strings x/y coords only
import printConfig from './assets/printconfig.json';
// print_background.jsxon currently yields an array of background elements
// with complete SVG inline styles
import printBackground from './assets/print_background.json';

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

  // CONSTRUCTOR
  // State amends config with context-specifics
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     config: props.config,
  //   };
  // }
  // CONSTRUCTOR ends

  // AMEND CONFIG is called from render to
  // add context-specific properties to the
  // inherited props.config...
  amendConfig(config) {
    const target = config.strings;
    const strList = Object.keys(target);
    const source = printConfig;
    for (const i in strList) {
      const str = strList[i];
      // Assign new vals to default config object
      target[str] = Object.assign(target[str], source[str]);
    }
    // Append background element definitions:
    config.background = printBackground;
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
