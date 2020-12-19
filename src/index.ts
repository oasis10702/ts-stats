import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

// Composition solution
// Create an object that statisfies the "DataReader" interface
const csvFileReader = new CsvFileReader('football.csv');

// Create an instance od MatchReader and pass in something statisfying
// the "DataReader" interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

// const reader = new MatchReader('football.csv');
// reader.read();

let manUnitedWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(manUnitedWins);
