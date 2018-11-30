//import libraries for making a component
import React from 'react';
import { Text ,View } from 'react-native';

//make component
const Header = (props) => {
	const {textStyle,viewStyle} = styles;

	return (
		<View style={viewStyle}>
			<Text style={textStyle}> {props.headerText}</Text>
		</View>
		);
};

//styles
const styles = {
	viewStyle : {
		backgroundColor: '#3700B3',
		justifyContent : 'center',
		alignItems : 'center',
		height : 60,
		shadowColor: '#000000',
		shadowOffset: {
			width: 0,
			height: 20
		},
		shadowOpacity : 0.2,
		elevation :2 ,
		position : 'relative'
	},
	textStyle : {
		fontSize : 20,
		color: '#fafafa'
	}
}

//make component available for other component
export { Header };
