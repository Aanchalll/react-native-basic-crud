import { Text, Platform } from 'react-native';
import Svg, { Defs, G, Path, Rect, Use } from 'svgs';


export const CreateIcon = (children, viewBox) => (props) => { // eslint-disable-line import/prefer-default-export
    const { testID, viewBox: propsViewBox, width, height, fill, color, customStyles, aspectRatio } = props;
    const Icon = (
        <Svg
            data-testid = {testID || 'svg-img'}
            viewBox = {propsViewBox || viewBox || `0 0 ${width} ${height}`}
            width = {width}
            height = {height}
            fill = {fill || '#000'}
            color = {color || '#000'}
            // style = {Platform.OS === 'web' ? customStyles : null}
            preserveAspectRatio = {aspectRatio || 'none'}
        >
            {children}
        </Svg>
    );
    // Icon.propTypes = {
    //     // style:  //Text.propTypes.style
    // };
    return Icon;
};

export const CheckboxOnIconWeb = CreateIcon(
    <G>
        <Defs>
            <Path id="CheckboxOnIconWeb" d="M4.9 9.556l2.867 2.866L15.089 5.1l1.567 1.567-8.89 8.889-4.433-4.434z"/>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="currentColor" stroke="currentColor" strokeWidth="2" d="M17.778 1H2.222C1.552 1 1 1.552 1 2.222v15.556C1 18.448 1.552 19 2.222 19h15.556c.67 0 1.222-.552 1.222-1.222V2.222C19 1.552 18.448 1 17.778 1z"/>
            <Path fill="currentColor" fillRule="nonzero" d="M16.778 17.778H3.222a1 1 0 0 1-1-1V3.222a1 1 0 0 1 1-1h13.556a1 1 0 0 1 1 1v13.556a1 1 0 0 1-1 1z"/>
            <Use fill="#FFF" fillRule="nonzero" xlinkHref="#CheckboxOnIconWeb"/>
        </G>
    </G>,
	'0 0 20 20'
);

export const CheckboxOffIconWeb = CreateIcon(
	<G fill="#FFF" fillRule="evenodd">
        <Rect width="100%" height="100%" rx="10%"/>
        <Path stroke="currentColor" strokeWidth="2" d="M18.778 1.222v17.556H1.222V1.222h17.556zm-1-.222H2.222C1.552 1 1 1.552 1 2.222v15.556C1 18.448 1.552 19 2.222 19h15.556c.67 0 1.222-.552 1.222-1.222V2.222C19 1.552 18.448 1 17.778 1z"/>
    </G>,
	'0 0 20 20'
);

