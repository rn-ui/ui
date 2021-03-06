import {
    Animated,
    Easing,
} from 'react-native';

import {DriverBase} from './DriverBase';

interface ITouchableViewProps {
    onPressIn: Function;
    onPressOut: Function;
}

/**
 * Returns the default animation callback to use.
 *
 * @param {Animated.Value} value
 * @param {double} toValue
 * @param {Object} animationOptions
 * @returns {CompositeAnimation}
 */
function defaultAnimation(value, toValue, animationOptions) {
    return Animated.timing(
        value,
        {
            toValue,
            ...animationOptions,
        },
    );
}

/**
 * Animation driver that creates an animated value changed on press events.
 *
 * Assign onPressIn and onPressOut props of React Native Touchable*, and
 * pass instance to any @southem/animation animation to run it
 * e.g.:
 * driver = new TouchableDriver();
 * ...
 * <TouchableOpacity {...driver.touchableViewProps}>
 * ...
 * <ZoomIn driver={driver}>
 */
export class TouchableDriver extends DriverBase {
    private touchableViewProps: ITouchableViewProps;
    private animationOptions: Object;

    /**
     * @param {Object} options Animation options.
     */
    constructor(options) {
        super();

        this.animationOptions = {
            easing: Easing.elastic(1),
            duration: 150,
            ...options,
        };
        this.onPressIn = this.onPressIn.bind(this);
        this.onPressOut = this.onPressOut.bind(this);
        this.touchableViewProps = {
            onPressIn: this.onPressIn,
            onPressOut: this.onPressOut,
        };
    }

    onPressIn() {
        defaultAnimation(this.value, 1, this.animationOptions).start();
    }

    onPressOut() {
        defaultAnimation(this.value, 0, this.animationOptions).start();
    }
}
