function buyShack() {
    if (Cash >= ShackCost) {
      Cash = Cash - ShackCost;
      Shack = Shack + 1;
      ShackCost = Math.round(ShackCost * 1.05);
      ShackCount = Shack;
      ShackTotCost1 = ShackCost;

      document.getElementById("Cash").innerHTML = Cash;
      document.getElementById("ShackTot").innerHTML = ShackCount;
      document.getElementById("ShackTotCost").innerHTML = ShackTotCost1;
    }
  }
function buyShack10() {
    if (Cash >= ShackCost) {
      Cash = Cash - ShackCost;
      Shack = Shack + 10;
      ShackCost = Math.round(0.96 * (ShackCost * (1.05 ** 10)));
      ShackCount = Shack;
      ShackTotCost1 = ShackCost;
      ShackTotCost10  = ShackTotCost1 * 10;

      document.getElementById("Cash").innerHTML = Cash;
      document.getElementById("ShackTot").innerHTML = ShackCount;
      document.getElementById("ShackTotCost").innerHTML = ShackTotCost1;
      document.getElementById("ShackTotCost10").innerHTML = ShackTotCost10;
    }
  }
function buyShack100() {
   if (Cash >= ShackCost) {
     Cash = Cash - ShackCost;
     Shack = Shack + 100;
     ShackCost = Math.round(0.9 * (ShackCost * (1.05 ** 100)));
     ShackCount = Shack;
     ShackTotCost1 = ShackCost;
     ShackTotCost100  = ShackTotCost1 * 100;

     document.getElementById("Cash").innerHTML = Cash;
     document.getElementById("ShackTot").innerHTML = ShackCount;
     document.getElementById("ShackTotCost").innerHTML = ShackTotCost1;
     document.getElementById("ShackTotCost100").innerHTML = ShackTotCost100;
   }
 }
function buyApartment() {
   if (Cash >= ApartmentCost) {
     Cash = Cash - ApartmentCost;
     Apartment = Apartment + 1;
     ApartmentCost = Math.round(ApartmentCost * 1.05);
     ApartmentCount = Apartment;
     ApartmentTotCost1 = ApartmentCost;

     document.getElementById("Cash").innerHTML = Cash;
     document.getElementById("ApartmentTot").innerHTML = ApartmentCount;
     document.getElementById("ApartmentTotCost").innerHTML = ApartmentTotCost1;
   }
 }
function buyApartment10() {
   if (Cash >= ApartmentCost) {
     Cash = Cash - ApartmentCost;
     Apartment = Apartment + 10;
     ApartmentCost = Math.round(0.96 * (ApartmentCost * (1.05 ** 10)));
     ApartmentCount = Apartment;
     ApartmentTotCost1 = ApartmentCost;
     ApartmentTotCost10  = ApartmentTotCost1 * 10;

     document.getElementById("Cash").innerHTML = Cash;
     document.getElementById("ApartmentTot").innerHTML = ApartmentCount;
     document.getElementById("ApartmentTotCost").innerHTML = ApartmentTotCost1;
     document.getElementById("ApartmentTotCost10").innerHTML = ApartmentTotCost10;
   }
 }
function buyApartment100() {
   if (Cash >= ApartmentCost) {
     Cash = Cash - ApartmentCost;
     Apartment = Apartment + 100;
     ApartmentCost = Math.round(0.9 * (ApartmentCost * (1.05 ** 100)));
     ApartmentCount = Apartment;
     ApartmentTotCost1 = ApartmentCost;
     ApartmentTotCost100  = ApartmentTotCost1 * 100;

     document.getElementById("Cash").innerHTML = Cash;
     document.getElementById("ApartmentTot").innerHTML = ApartmentCount;
     document.getElementById("ApartmentTotCost").innerHTML = ApartmentTotCost1;
     document.getElementById("ApartmentTotCost100").innerHTML = ApartmentTotCost100;
   }
 }
function buyHouse() {
   if (Cash >= HouseCost) {
     Cash = Cash - HouseCost;
     House = House + 1;
     HouseCost = Math.round(HouseCost * 1.05);
     HouseCount = House;
     HouseTotCost1 = HouseCost;

     document.getElementById("Cash").innerHTML = Cash;
     document.getElementById("HouseTot").innerHTML = HouseCount;
     document.getElementById("HouseTotCost").innerHTML = HouseTotCost1;
   }
 }
function buyHouse10() {
   if (Cash >= HouseCost) {
     Cash = Cash - HouseCost;
     House = House + 10;
     HouseCost = Math.round(0.96 * (HouseCost * (1.05 ** 10)));
     HouseCount = House;
     HouseTotCost1 = HouseCost;
     HouseTotCost10  = HouseTotCost1 * 10;

     document.getElementById("Cash").innerHTML = Cash;
     document.getElementById("HouseTot").innerHTML = HouseCount;
     document.getElementById("HouseTotCost").innerHTML = HouseTotCost1;
     document.getElementById("HouseTotCost10").innerHTML = HouseTotCost10;
   }
 }
function buyHouse100() {
   if (Cash >= HouseCost) {
     Cash = Cash - HouseCost;
     House = House + 100;
     HouseCost = Math.round(0.9 * (HouseCost * (1.05 ** 100)));
     HouseCount = House;
     HouseTotCost1 = HouseCost;
     HouseTotCost100  = HouseTotCost1 * 100;

     document.getElementById("Cash").innerHTML = Cash;
     document.getElementById("HouseTot").innerHTML = HouseCount;
     document.getElementById("HouseTotCost").innerHTML = HouseTotCost1;
     document.getElementById("HouseTotCost100").innerHTML = HouseTotCost100;
   }
 }
function buyMotel() {
    if (Cash >= MotelCost) {
     Cash = Cash - MotelCost;
     Motel = Motel + 1;
     MotelCost = Math.round(MotelCost * 1.05);
     MotelCount = Motel;
     MotelTotCost1 = MotelCost;

     document.getElementById("Cash").innerHTML = Cash;
     document.getElementById("MotelTot").innerHTML = MotelCount;
     document.getElementById("MotelTotCost").innerHTML = MotelTotCost1;
   }
 }
function buyMotel10() {
   if (Cash >= MotelCost) {
     Cash = Cash - MotelCost;
     Motel = Motel + 10;
     MotelCost = Math.round(0.96 * (MotelCost * (1.05 ** 100)));
     MotelCount = Motel;
     MotelTotCost1 = MotelCost;
     MotelTotCost10  = MotelTotCost1 * 10;

     document.getElementById("Cash").innerHTML = Cash;
     document.getElementById("MotelTot").innerHTML = MotelCount;
     document.getElementById("MotelTotCost").innerHTML = MotelTotCost1;
     document.getElementById("MotelTotCost10").innerHTML = MotelTotCost10;
   }
 }
function buyMotel100() {
   if (Cash >= MotelCost) {
     Cash = Cash - MotelCost;
     Motel = Motel + 100;
     MotelCost = Math.round(0.9 * (MotelCost * (1.05 ** 100)));
     MotelCount = Motel;
     MotelTotCost1 = MotelCost;
     MotelTotCost100  = MotelTotCost1 * 100;

     document.getElementById("Cash").innerHTML = Cash;
     document.getElementById("MotelTot").innerHTML = MotelCount;
     document.getElementById("MotelTotCost").innerHTML = MotelTotCost1;
     document.getElementById("MotelTotCost100").innerHTML = MotelTotCost100;
   }
 }
  function buyApartmentComplex() {
    if (Cash >= ApartmentComplexCost) {
      Cash = Cash - ApartmentComplexCost;
      ApartmentComplex = ApartmentComplex + 1;
      ApartmentComplexCost = Math.round(ApartmentComplexCost * 1.05);
      ApartmentComplexCount = ApartmentComplex;
      ApartmentComplexTotCost1 = ApartmentComplexCost;

      document.getElementById("Cash").innerHTML = Cash;
      document.getElementById("ApartmentComplexTot").innerHTML = ApartmentComplexCount;
      document.getElementById("ApartmentComplexTotCost").innerHTML = ApartmentComplexTotCost1;
    }
  }
function buyApartmentComplex10() {
   if (Cash >= ApartmentComplexCost) {
     Cash = Cash - ApartmentComplexCost;
     ApartmentComplex = ApartmentComplex + 10;
     ApartmentComplexCost = Math.round(0.96 * (ApartmentComplexCost * (1.05 ** 10)));
     ApartmentComplexCount = ApartmentComplex;
     ApartmentComplexTotCost1 = ApartmentComplexCost;
     ApartmentComplexTotCost10  = ApartmentComplexTotCost1 * 10;

     document.getElementById("Cash").innerHTML = Cash;
     document.getElementById("ApartmentComplexTot").innerHTML = ApartmentComplexCount;
     document.getElementById("ApartmentComplexTotCost").innerHTML = ApartmentComplexTotCost1;
     document.getElementById("ApartmentComplexTotCost10").innerHTML = ApartmentComplexTotCost10;
   }
 }
function buyApartmentComplex100() {
   if (Cash >= ApartmentComplexCost) {
     Cash = Cash - ApartmentComplexCost;
     ApartmentComplex = ApartmentComplex + 100;
     ApartmentComplexCost = Math.round(0.9 * (ApartmentComplexCost * (1.05 ** 100)));
     ApartmentComplexCount = ApartmentComplex;
     ApartmentComplexTotCost1 = ApartmentComplexCost;
     ApartmentComplexTotCost100  = ApartmentComplexTotCost1 * 100;

     document.getElementById("Cash").innerHTML = Cash;
     document.getElementById("ApartmentComplexTot").innerHTML = ApartmentComplexCount;
     document.getElementById("ApartmentComplexTotCost").innerHTML = ApartmentComplexTotCost1;
     document.getElementById("ApartmentComplexTotCost100").innerHTML = ApartmentComplexTotCost100;
   }
 }
function buyTower() {
   if (Cash >= TowerCost) {
     Cash = Cash - TowerCost;
     Tower = Tower + 1;
     TowerCost = Math.round(TowerCost * 1.05);
     TowerCount = Tower;
     TowerTotCost1 = TowerCost;

     document.getElementById("Cash").innerHTML = Cash;
     document.getElementById("TowerTot").innerHTML = TowerCount;
     document.getElementById("TowerTotCost").innerHTML = TowerTotCost1;
   }
 }
function buyTower10() {
   if (Cash >= TowerCost) {
     Cash = Cash - TowerCost;
     Tower = Tower + 10;
     TowerCost = Math.round(0.96 * (TowerCost * (1.05 ** 10)));
     TowerCount = Tower;
     TowerTotCost1 = TowerCost;
     TowerTotCost10  = TowerTotCost1 * 10;

     document.getElementById("Cash").innerHTML = Cash;
     document.getElementById("TowerTot").innerHTML = TowerCount;
     document.getElementById("TowerTotCost").innerHTML = TowerTotCost1;
     document.getElementById("TowerTotCost10").innerHTML = TowerTotCost10;
   }
 }
function buyTower100() {
   if (Cash >= TowerCost) {
     Cash = Cash - TowerCost;
     Tower = Tower + 100;
     TowerCost = Math.round(0.9 * (TowerCost * (1.05 ** 100)));
     TowerCount = Tower;
     TowerTotCost1 = TowerCost;
     TowerTotCost100  = TowerTotCost1 * 100;

     document.getElementById("Cash").innerHTML = Cash;
     document.getElementById("TowerTot").innerHTML = TowerCount;
     document.getElementById("TowerTotCost").innerHTML = TowerTotCost1;
     document.getElementById("TowerTotCost100").innerHTML = TowerTotCost100;
    }
 }
function buySkyscraper() {
   if (Cash >= SkyscraperCost) {
     Cash = Cash - SkyscraperCost;
     Skyscraper = Skyscraper + 1;
     SkyscraperCost = Math.round(SkyscraperCost * 1.05);
     SkyscraperCount = Skyscraper;
     SkyscraperTotCost1 = SkyscraperCost;

     document.getElementById("Cash").innerHTML = Cash;
     document.getElementById("SkyscraperTot").innerHTML = SkyscraperCount;
     document.getElementById("SkyscraperTotCost").innerHTML = SkyscraperTotCost1;
   }
 }
function buySkyscraper10() {
   if (Cash >= SkyscraperCost) {
     Cash = Cash - SkyscraperCost;
     Skyscraper = Skyscraper + 10;
     SkyscraperCost = Math.round(0.96 * (SkyscraperCost * (1.05 ** 10)));
     SkyscraperCount = Skyscraper;
     SkyscraperTotCost1 = SkyscraperCost;
     SkyscraperTotCost10  = SkyscraperTotCost1 * 10;

     document.getElementById("Cash").innerHTML = Cash;
     document.getElementById("SkyscraperTot").innerHTML = SkyscraperCount;
     document.getElementById("SkyscraperTotCost").innerHTML = SkyscraperTotCost1;
     document.getElementById("SkyscraperTotCost10").innerHTML = SkyscraperTotCost10;
   }
 }
function buySkyscraper100() {
   if (Cash >= SkyscraperCost) {
     Cash = Cash - SkyscraperCost;
     Skyscraper = Skyscraper + 100;
     SkyscraperCost = Math.round(0.9 * (SkyscraperCost * (1.05 ** 100)));
     SkyscraperCount = Skyscraper;
     SkyscraperTotCost1 = SkyscraperCost;
     SkyscraperTotCost100  = SkyscraperTotCost1 * 100;

     document.getElementById("Cash").innerHTML = Cash;
     document.getElementById("SkyscraperTot").innerHTML = SkyscraperCount;
     document.getElementById("SkyscraperTotCost").innerHTML = SkyscraperTotCost1;
     document.getElementById("SkyscraperTotCost100").innerHTML = SkyscraperTotCost100;
   }
 }
