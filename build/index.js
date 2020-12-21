"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
var HtmlReport_1 = require("./reportTargets/HtmlReport");
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var Summary_1 = require("./Summary");
// Composition solution
// Create an object that statisfies the "DataReader" interface
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
// Create an instance od MatchReader and pass in something statisfying
// the "DataReader" interface
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Man United'), new HtmlReport_1.HtmlReport());
summary.buildAndPrintReport(matchReader.matches);
