var Cash = 75;

var ShackCost = 50;
var Shack = 0;
var ShackTot = 0;
var ShackCount = 1;

var ApartmentCost = 300;
var Apartment = 0;
var ApartmentTot = 0;

var HouseCost = 1000;
var House = 0;
var HouseTot = 0;

var MotelCost = 10000;
var Motel = 0;
var MotelTot = 0;

var ApartmentComplexCost = 50000;
var ApartmentComplex = 0;
var ApartmentComplexTot = 0;

var TowerCost = 300000;
var Tower = 0;
var TowerTot = 0;

var SkyscraperCost = 1000000;
var Skyscraper = 0;
var SkyscraperTot = 0;

var Reputation = 0;
var ReputationCost = 3;
var ReputationTot = 0;

var GDRepCost = 3;
var GDRep = 0;
var GDRepTot = 0;

var VSRepCost = 10;
var VSRep = 0;
var VSRepTot = 0;

var OTRepCost = 25;
var OTRep = 0;
var OTRepTot = 0;

var ETRepCost = 60;
var ETRep = 0;
var ETRepTot = 0;

var HCRepCost = 125;
var HCRep = 0;
var HCRepTot = 0;

var MSARepCost = 1000;
var MSARep = 0;
var MSARepTot = 0;

setInterval(function() {
  Cash = Cash + Shack * ShackOut;
  Cash = Cash + Apartment * ApartmentOut;
  Cash = Cash + House * HouseOut;
  Cash = Cash + Motel * MotelOut;
  Cash = Cash + ApartmentComplex * ApartmentComplexOut;
  Cash = Cash + Tower * TowerOut;
  Cash = Cash + Skyscraper * SkyscraperOut;
  Cash = Cash + GDRep * 1000;
  document.getElementById("Cash").innerHTML = Cash;
}, 250);

var ShackOut = 1;
var ShackUpgradeCost = 1000;

var ApartmentOut = 3;
var ApartmentUpgradeCost = 6000;

var HouseOut = 7;
var HouseUpgradeCost = 20000;

var MotelOut = 10;
var MotelUpgradeCost = 200000;

var ApartmentComplexOut = 12;
var ApartmentComplexUpgradeCost = 1000000;

var TowerOut = 15;
var TowerUpgradeCost = 6000000;

var SkyscraperOut = 25;
var SkyscraperUpgradeCost = 20000000;

var Bricks = 0;

setInterval(function() {
  Bricks = Bricks + VSRep * 1;
  Bricks = Bricks + OTRep * 3;
  Bricks = Bricks + ETRep * 7;
  Bricks = Bricks + HCRep * 13;
  Bricks = Bricks + MSARep * 18;
  document.getElementById("Bricks").innerHTML = Bricks;
}, 1000);
