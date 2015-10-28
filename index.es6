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
  // add context-specific poperties to the
  // inherited props.config...
  amendConfig(config) {
    config.strings.title.x = 12;
    config.strings.title.y = 15;
    config.strings.subtitle.x = 12;
    config.strings.subtitle.y = 30;
    config.strings.source.x = 12;
    config.strings.source.y = -5;
    config.strings.footnote.x = -12;
    config.strings.footnote.y = -5;
    return config;
  }

  // RENDER
  // Child component is the 'waist' in the hierarchy. Props, bequeathed
  // unchanged from SilverBullet, are data object, getSvg flag,
  // and the svg callback...
  render() {
    // Append context-specific properties to config
    const config = this.amendConfig(this.props.config);
    return (
      <SilverChartWrapper config={config} getSvg={this.props.getSvg} passSvg={this.props.passSvg}/>
    );
  }
  // RENDER ends
}
