import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class TopicContainer extends Component {
	render() {
		return (
			<p style={{'color': '#fff', 'fontSize': '18px', 'textAlign': 'center'}}>机器人正在马不停蹄地收集数据中, 敬请期待! </p>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {};
}

export default connect(mapStateToProps)(TopicContainer);