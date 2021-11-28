import React, { useState, useEffect } from 'react';
import { getNextStep, getRandomWave, pathToString, updatePaths } from '../utils'
import { useAnimationFrame } from '../hooks';

export const Lines = ({ isOnHomePage=false}) => {
    // this keeps track of the plotted paths for each line in the illustration.
    // the entire array should be updated every frame to be slightly different.
    const numberOfLines = 40;
    const svgWidth = 300;
    const [wavePaths, setWavePaths] = useState([]);
    const [targetWave, setTargetWave] = useState(getRandomWave(svgWidth));

    // so we'll accept delta time inside of the hook, and prevCount...
    // but we're passing in the state setter.
    useAnimationFrame(() => {
        if (targetWave) {
            setWavePaths(prevWaves => {
                let newPaths = updatePaths(prevWaves, targetWave, svgWidth, setTargetWave);
                return newPaths;
            });
        }
    })

    // wave and targetWave are the two different states that the animation is morphing between
    // I have a nasty feeling that this is actually just the same logic as `updatePaths` 
    useEffect(() => {
        let newPaths = [];
        let wave = getRandomWave(svgWidth); // the current, frontmost wave
        // generate the first batch of waves.
        for (let i = 0; i < numberOfLines; i++) {
            let nextStep = Object.assign({}, getNextStep({ wave, targetWave, svgWidth, setTargetWave }));
            wave = nextStep;
            newPaths.push(nextStep);
        }
        setWavePaths(newPaths);
    }, []);
    

    return (
        <svg 
            className={`${isOnHomePage ? 'home-lines' : 'project-lines'}`}
            viewBox="0 20 200 200"
            version="1.1"
        >
            <title>a flowing water model</title>
            <desc>a bunch of lines</desc>
            {
                wavePaths.map((wave, index) => {
                    return <path key={index} className="line" d={pathToString(wave, index)}/>
                })
            }
        </svg>
    )
}