var Cash = 1000000000;

var ShackCost = 50;
var Shack = 0;
var ShackTot = 0;
var ShackTotCost1 = 50;

var ApartmentCost = 300;
var Apartment = 0;
var ApartmentTot = 0;
var ApartmentTotCost1 = 300;

var HouseCost = 1000;
var House = 0;
var HouseTot = 0;
var HouseTotCost1 = 1000;

var MotelCost = 10000;
var Motel = 0;
var MotelTot = 0;
var MotelTotCost1 = 10000;

var ApartmentComplexCost = 50000;
var ApartmentComplex = 0;
var ApartmentComplexTot = 0;
var ApartmentComplexTotCost1 = 50000;

var TowerCost = 300000;
var Tower = 0;
var TowerTot = 0;
var TowerTotCost1 = 300000;

var SkyscraperCost = 1000000;
var Skyscraper = 0;
var SkyscraperTot = 0;
var SkyscraperTotCost1 = 1000000;

var Reputation = 0;
var ReputationCost = 3;
var ReputationTot = 0;

var GDRepCost = 3;
var GDRep = 0;
var GDRepTot = 0;
var GDRepTotCost1 = 3;

var VSRepCost = 10;
var VSRep = 0;
var VSRepTot = 0;
var VSRepTotCost1 = 10;

var OTRepCost = 25;
var OTRep = 0;
var OTRepTot = 0;
var OTRepTotCost1 = 25;

var ETRepCost = 60;
var ETRep = 0;
var ETRepTot = 0;
var ETRepTotCost1 = 60;

var HCRepCost = 125;
var HCRep = 0;
var HCRepTot = 0;
var HCRepTotCost1 = 125;

var MSARepCost = 1000;
var MSARep = 0;
var MSARepTot = 0;
var MSARepTotCost1 = 100;

setInterval(function() {
  Cash = Cash + Shack * ShackOut;
  Cash = Cash + Apartment * ApartmentOut;
  Cash = Cash + House * HouseOut;
  Cash = Cash + Motel * MotelOut;
  Cash = Cash + ApartmentComplex * ApartmentComplexOut;
  Cash = Cash + Tower * TowerOut;
  Cash = Cash + Skyscraper * SkyscraperOut;
  Cash = Cash + GDRep * 1000
  document.getElementById("Cash").innerHTML = Cash;
}, 250);
