import pureJimpStrategy, { incrementalReducer, jimpWorkerStrategy, lightenReducer } from './steps/merge-frames/pure-jimp-strategy.mjs';
import { cleanAll, extractFrames } from './steps/helpers/utils.mjs'

console.time('all')
const [videoFile, fps] = process.argv.slice(2);

cleanAll(['frames', 'darkroom'])
.then(() => extractFrames(videoFile, fps))
.then(jimpWorkerStrategy(8))
.then()
.then(() => console.timeEnd('all'))


