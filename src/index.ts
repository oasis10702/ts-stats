import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';

// Composition solution
// Create an object that statisfies the "DataReader" interface
const csvFileReader = new CsvFileReader('football.csv');

// Create an instance od MatchReader and pass in something statisfying
// the "DataReader" interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(new WinsAnalysis('Man United'), new ConsoleReport());

summary.buildAndPrintReport(matchReader.matches);
