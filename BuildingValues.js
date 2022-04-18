        var Cash = 100000000;
        var CPStot = ShackTot * ShackOut;
        
        var ShackCost = 50;
        var Shack = 0;
        var ShackTot = 0;
        var ShackTotCost1 = 50;
        var ShackOut = 1;
        var ShackUpgradeCost = 1000;

        var ApartmentCost = 300;
        var Apartment = 0;
        var ApartmentTot = 0;
        var ApartmentTotCost1 = 300;
        var ApartmentOut = 3;
        var ApartmentUpgradeCost = 6000;

        var HouseCost = 1000;
        var House = 0;
        var HouseTot = 0;
        var HouseTotCost1 = 1000;
        var HouseOut = 7;
        var HouseUpgradeCost = 20000;

        var MotelCost = 10000;
        var Motel = 0;
        var MotelTot = 0;
        var MotelTotCost1 = 10000;
        var MotelOut = 10;
        var MotelUpgradeCost = 200000;

        var ApartmentComplexCost = 50000;
        var ApartmentComplex = 0;
        var ApartmentComplexTot = 0;
        var ApartmentComplexTotCost1 = 50000;
        var ApartmentComplexOut = 12;
        var ApartmentComplexUpgradeCost = 1000000;

        var TowerCost = 300000;
        var Tower = 0;
        var TowerTot = 0;
        var TowerTotCost1 = 300000;
        var TowerOut = 15;
        var TowerUpgradeCost = 6000000;

        var SkyscraperCost = 1000000;
        var Skyscraper = 0;
        var SkyscraperTot = 0;
        var SkyscraperTotCost1 = 1000000;
        var SkyscraperOut = 25;
        var SkyscraperkUpgradeCost = 20000000;

        var Reputation = 0;
        var ReputationCost = 15;
        var ReputationTot = 0;
        var ReputationTotCost1 = 15;

        var ESBuildingCost = 3;
        var buyESBuilding = 0;
        var buyESBuildingTot = 0;
        var buyESBuildingTotCost1 = 3;
        
        setInterval(function() {
          Cash = Cash + Shack * ShackOut;
          Cash = Cash + Apartment * ApartmentOut;
          Cash = Cash + House * HouseOut;
          Cash = Cash + Motel * MotelOut;
          Cash = Cash + ApartmentComplex * ApartmentComplexOut;
          Cash = Cash + Tower * TowerOut;
          Cash = Cash + Skyscraper * SkyscraperOut;
          document.getElementById("Cash").innerHTML = Cash;
        }, 250);