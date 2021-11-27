// Generates the string path defining the shape of the <path> element
export const pathToString = (pathData, index) => {
    const { spaceBetweenLines, waveInterval, waveHeights } = pathData;
    const spacer = spaceBetweenLines * index;
    return `M${waveInterval[0]},${spacer} Q${waveInterval[1]},${waveHeights[0] +
      spacer} ${waveInterval[2]},${spacer} T${waveInterval[3]},${waveHeights[1] +
      spacer}`;
};

// here we get random values which we'll use to generate the first path
export const getRandomWave = svgWidth => {
    const wave = {};
    wave.spaceBetweenLines = 6; // this might change based on page height?
    wave.waveInterval = getWaveIntervals(svgWidth); // we pass in the svg width for proportions!
    wave.waveHeights = []; // two random values.
    wave.waveHeights[0] = getWaveHeight(svgWidth);
    wave.waveHeights[1] = getWaveHeight(svgWidth);
    return wave;
};

// This is a helper function for `getRandomWave`
// as I recall, basically each is like, a variable location for each peak
const getWaveIntervals = svgWidth => {
    const waves = [];
    for (let i = 0; i < 4; i++) {
      waves[i] = getOneWaveInterval(svgWidth, i);
    }
    return waves;
};

//Wave interval makers!
const getOneWaveInterval = (svgWidth, waveIntervalIndex) => {
    switch (waveIntervalIndex) {
      case 0:
        return Math.round(Math.random() * (svgWidth / 5) * -1);
        break;
      case 1:
        return Math.round(Math.random() * (svgWidth / 2));
        break;
      case 2:
        return Math.round(Math.random() * (svgWidth / 2) + svgWidth / 2);
        break;
      case 3:
        return Math.round((Math.random() + 2) * svgWidth);
        break;
      default:
        console.log("That's not a valid wave interval...");
    }
  };

const getWaveHeight = svgWidth => {
    return Math.round((Math.random() * svgWidth) / 2 - svgWidth / 10);
};

export const getNextStep = ({ wave, targetWave, svgWidth, setTargetWave }) => {
    let waveInterval = [0, 0, 0, 0];
    let waveHeights = [0, 0];
    let spaceBetweenLines = 6;
  
    for (let i = 0; i < waveInterval.length; i++) {
      if (wave.waveInterval[i] > targetWave.waveInterval[i]) {
        waveInterval[i] = wave.waveInterval[i] - 1;
      } else if (wave.waveInterval[i] < targetWave.waveInterval[i]) {
        waveInterval[i] = wave.waveInterval[i] + 1;
      } else {
        targetWave.waveInterval[i] = getOneWaveInterval(svgWidth, i);
        setTargetWave(targetWave);
        waveInterval[i] = wave.waveInterval[i];
      }
    }
  
    for (let j = 0; j < waveHeights.length; j++) {
      if (wave.waveHeights[j] > targetWave.waveHeights[j]) {
        waveHeights[j] = wave.waveHeights[j] - 1;
      } else if (wave.waveHeights[j] < targetWave.waveHeights[j]) {
        waveHeights[j] = wave.waveHeights[j] + 1;
      } else {
        targetWave.waveHeights[j] = getWaveHeight(svgWidth);
        setTargetWave(targetWave);
        waveHeights[j] = wave.waveHeights[j];
      }
    }
    const newWave = { spaceBetweenLines, waveHeights, waveInterval };
    return newWave;
  };

// Can't say I remember how this works.
// Like...we're basically snipping the oldest path off and adding another one
// I *think* this might sort of shuffle the paths FORWARD. 
export const updatePaths = (paths, targetWave, svgWidth, setTargetWave) => {
    const newPaths = paths.slice(1);
    const lastPath = paths[paths.length - 1];
    // Appallingly unclear code. The paths array is one shorter than usual because THIS one hasn't been pushed on yet
    const nextPath = getNextStep({wave: lastPath, targetWave, svgWidth, setTargetWave});
    newPaths.push(nextPath);
    return newPaths;
};