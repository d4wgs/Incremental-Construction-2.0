function buyShack() {
    if (Cash >= ShackCost) {
      Cash = Cash - ShackCost;
      Shack = Shack + 1;
      ShackCost = Math.round(ShackCost * 1.05);
      document.getElementById("Cash").innerHTML = Cash;
      document.getElementById("Shack").innerHTML = Shack;
      document.getElementById("ShackCost").innerHTML = ShackCost;

      if (Shack >= 5) {
        document.getElementById("HiddenText_Apartment").style.visibility = "visible";
        document.getElementById("VisibleText_Apartment").style.visibility = "hidden";
      }
    }
  }
function buyShack10() {
    if (Cash >= 10 * ShackCost) {
      Cash = Cash - (10 * ShackCost);
      Shack = Shack + 10;
      ShackCost = Math.round(0.96 * (ShackCost * (1.05 ** 10)));

      document.getElementById("Cash").innerHTML = Cash;
      document.getElementById("Shack").innerHTML = Shack;
      document.getElementById("ShackCost").innerHTML = ShackCost;
    }
  }
function buyShack100() {
   if (Cash >= 100 * ShackCost) {
     Cash = Cash - (100 * ShackCost);
     Shack = Shack + 100;
     ShackCost = Math.round(0.9 * (ShackCost * (1.05 ** 100)));

     document.getElementById("Cash").innerHTML = Cash;
     document.getElementById("Shack").innerHTML = Shack;
     document.getElementById("ShackCost").innerHTML = ShackCost;
   }
 }
function buyApartment() {
   if (Cash >= ApartmentCost) {
     Cash = Cash - ApartmentCost;
     Apartment = Apartment + 1;
     ApartmentCost = Math.round(ApartmentCost * 1.05);

     document.getElementById("Cash").innerHTML = Cash;
     document.getElementById("Apartment").innerHTML = Apartment;
     document.getElementById("ApartmentCost").innerHTML = ApartmentCost;
   }
 }
function buyApartment10() {
   if (Cash >= 10 * ApartmentCost) {
     Cash = Cash - (10 * ApartmentCost);
     Apartment = Apartment + 10;
     ApartmentCost = Math.round(0.96 * (ApartmentCost * (1.05 ** 10)));

     document.getElementById("Cash").innerHTML = Cash;
     document.getElementById("Apartment").innerHTML = Apartment;
     document.getElementById("ApartmentCost").innerHTML = ApartmentCost;
   }
 }
function buyApartment100() {
   if (Cash >= 100 * ApartmentCost) {
     Cash = Cash - (100 * ApartmentCost);
     Apartment = Apartment + 100;
     ApartmentCost = Math.round(0.9 * (ApartmentCost * (1.05 ** 100)));

     document.getElementById("Cash").innerHTML = Cash;
     document.getElementById("Apartment").innerHTML = Apartment;
     document.getElementById("ApartmentCost").innerHTML = ApartmentCost;
   }
 }
function buyHouse() {
   if (Cash >= HouseCost) {
     Cash = Cash - HouseCost;
     House = House + 1;
     HouseCost = Math.round(HouseCost * 1.05);

     document.getElementById("Cash").innerHTML = Cash;
     document.getElementById("House").innerHTML = House;
     document.getElementById("HouseCost").innerHTML = HouseCost;
   }
 }
function buyHouse10() {
   if (Cash >= 10 * HouseCost) {
     Cash = Cash - (10 * HouseCost);
     House = House + 10;
     HouseCost = Math.round(0.96 * (HouseCost * (1.05 ** 10)));

     document.getElementById("Cash").innerHTML = Cash;
     document.getElementById("House").innerHTML = House;
     document.getElementById("HouseCost").innerHTML = HouseCost;
   }
 }
function buyHouse100() {
   if (Cash >= 100 * HouseCost) {
     Cash = Cash - (100 * HouseCost);
     House = House + 100;
     HouseCost = Math.round(0.9 * (HouseCost * (1.05 ** 100)));

     document.getElementById("Cash").innerHTML = Cash;
     document.getElementById("House").innerHTML = House;
     document.getElementById("HouseCost").innerHTML = HouseCost;
   }
 }
function buyMotel() {
    if (Cash >= MotelCost) {
     Cash = Cash - MotelCost;
     Motel = Motel + 1;
     MotelCost = Math.round(MotelCost * 1.05);

     document.getElementById("Cash").innerHTML = Cash;
     document.getElementById("Motel").innerHTML = Motel;
     document.getElementById("MotelCost").innerHTML = MotelCost;
   }
 }
function buyMotel10() {
   if (Cash >= 10 * MotelCost) {
     Cash = Cash - (10 * MotelCost);
     Motel = Motel + 10;
     MotelCost = Math.round(0.96 * (MotelCost * (1.05 ** 100)));

     document.getElementById("Cash").innerHTML = Cash;
     document.getElementById("Motel").innerHTML = Motel;
     document.getElementById("MotelCost").innerHTML = MotelCost;
   }
 }
function buyMotel100() {
   if (Cash >= 100 * MotelCost) {
     Cash = Cash - (100 * MotelCost);
     Motel = Motel + 100;
     MotelCost = Math.round(0.9 * (MotelCost * (1.05 ** 100)));

     document.getElementById("Cash").innerHTML = Cash;
     document.getElementById("Motel").innerHTML = Motel;
     document.getElementById("MotelCost").innerHTML = MotelCost;
   }
 }
  function buyApartmentComplex() {
    if (Cash >= ApartmentComplexCost) {
      Cash = Cash - ApartmentComplexCost;
      ApartmentComplex = ApartmentComplex + 1;
      ApartmentComplexCost = Math.round(ApartmentComplexCost * 1.05);

      document.getElementById("Cash").innerHTML = Cash;
      document.getElementById("ApartmentComplex").innerHTML = ApartmentComplex;
      document.getElementById("ApartmentComplexCost").innerHTML = ApartmentComplexCost;
    }
  }
function buyApartmentComplex10() {
   if (Cash >= 10 * ApartmentComplexCost) {
     Cash = Cash - (10 * ApartmentComplexCost);
     ApartmentComplex = ApartmentComplex + 10;
     ApartmentComplexCost = Math.round(0.96 * (ApartmentComplexCost * (1.05 ** 10)));

     document.getElementById("Cash").innerHTML = Cash;
     document.getElementById("ApartmentComplex").innerHTML = ApartmentComplex;
     document.getElementById("ApartmentComplexCost").innerHTML = ApartmentComplexCost;
   }
 }
function buyApartmentComplex100() {
   if (Cash >= 100 * ApartmentComplexCost) {
     Cash = Cash - (100 * ApartmentComplexCost);
     ApartmentComplex = ApartmentComplex + 100;
     ApartmentComplexCost = Math.round(0.9 * (ApartmentComplexCost * (1.05 ** 100)));

     document.getElementById("Cash").innerHTML = Cash;
     document.getElementById("ApartmentComplex").innerHTML = ApartmentComplex;
     document.getElementById("ApartmentComplexCost").innerHTML = ApartmentComplexCost;
   }
 }
function buyTower() {
   if (Cash >= TowerCost) {
     Cash = Cash - TowerCost;
     Tower = Tower + 1;
     TowerCost = Math.round(TowerCost * 1.05);

     document.getElementById("Cash").innerHTML = Cash;
     document.getElementById("Tower").innerHTML = Tower;
     document.getElementById("TowerCost").innerHTML = TowerCost;
   }
 }
function buyTower10() {
   if (Cash >= 10 * TowerCost) {
     Cash = Cash - (10 * TowerCost);
     Tower = Tower + 10;
     TowerCost = Math.round(0.96 * (TowerCost * (1.05 ** 10)));

     document.getElementById("Cash").innerHTML = Cash;
     document.getElementById("Tower").innerHTML = Tower;
     document.getElementById("TowerCost").innerHTML = TowerCost;
   }
 }
function buyTower100() {
   if (Cash >= 100 * TowerCost) {
     Cash = Cash - (100 * TowerCost);
     Tower = Tower + 100;
     TowerCost = Math.round(0.9 * (TowerCost * (1.05 ** 100)));

     document.getElementById("Cash").innerHTML = Cash;
     document.getElementById("Tower").innerHTML = Tower;
     document.getElementById("TowerCost").innerHTML = TowerCost;
    }
 }
function buySkyscraper() {
   if (Cash >= SkyscraperCost) {
     Cash = Cash - SkyscraperCost;
     Skyscraper = Skyscraper + 1;
     SkyscraperCost = Math.round(SkyscraperCost * 1.05);

     document.getElementById("Cash").innerHTML = Cash;
     document.getElementById("Skyscraper").innerHTML = Skyscraper;
     document.getElementById("SkyscraperCost").innerHTML = SkyscraperCost;
   }
 }
function buySkyscraper10() {
   if (Cash >= 10 * SkyscraperCost) {
     Cash = Cash - (100 * SkyscraperCost);
     Skyscraper = Skyscraper + 10;
     SkyscraperCost = Math.round(0.96 * (SkyscraperCost * (1.05 ** 10)));

     document.getElementById("Cash").innerHTML = Cash;
     document.getElementById("Skyscraper").innerHTML = Skyscraper;
     document.getElementById("SkyscraperCost").innerHTML = SkyscraperCost;
   }
 }
function buySkyscraper100() {
   if (Cash >= 100 * SkyscraperCost) {
     Cash = Cash - (100 * SkyscraperCost);
     Skyscraper = Skyscraper + 100;
     SkyscraperCost = Math.round(0.9 * (SkyscraperCost * (1.05 ** 100)));

     document.getElementById("Cash").innerHTML = Cash;
     document.getElementById("Skyscraper").innerHTML = Skyscraper;
     document.getElementById("SkyscraperCost").innerHTML = SkyscraperCost;
   }
 }
