const { innerWidth: width, innerHeight: height } = window;
// console.log(width);
// console.log(height);

const guidelineBaseWidth = 1920;
const guidelineBaseHeight = 1080;

// const screenSize = Math.sqrt(width * height) / 100;
// console.log(screenSize);

const horizontalScale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;

const moderateScale = (size, factor = 0.5) =>
	size + (horizontalScale(size) - size) * factor;

const screenWidth = width;
const screenHeight = height;

export {
	horizontalScale,
	verticalScale,
	moderateScale,
	screenWidth,
	screenHeight,
};
