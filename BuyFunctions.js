function buyShack() {
    if (Cash >= ShackCost) {
      Cash = Cash - ShackCost;
      Shack = Shack + 1;
      ShackCost = Math.round(ShackCost * 1.05);
      document.getElementById("Cash").innerHTML = Cash;
      document.getElementById("Shack").innerHTML = Shack;
      document.getElementById("ShackCost").innerHTML = ShackCost;

      if (Shack >= 5) {
        document.getElementById("VisibleText_Apartment").style.visibility = "hidden";
        document.getElementById("HiddenText_Apartment").style.visibility = "visible";
        document.getElementById("HiddenApartmentName").style.visibility = "visible";
        document.getElementById("VisibleApartmentName").style.visibility = "hidden";
      } else {
        document.getElementById("VisibleText_Apartment").style.visibility = "visible";
        document.getElementById("HiddenText_Apartment").style.visibility = "hidden";
        document.getElementById("HiddenApartmentName").style.visibility = "hidden";
        document.getElementById("VisibleApartmentName").style.visibility = "visible";
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

      if (Shack >= 5) {
        document.getElementById("VisibleText_Apartment").style.visibility = "hidden";
        document.getElementById("HiddenText_Apartment").style.visibility = "visible";
        document.getElementById("HiddenApartmentName").style.visibility = "visible";
        document.getElementById("VisibleApartmentName").style.visibility = "hidden";
      } else {
        document.getElementById("VisibleText_Apartment").style.visibility = "visible";
        document.getElementById("HiddenText_Apartment").style.visibility = "hidden";
        document.getElementById("HiddenApartmentName").style.visibility = "hidden";
        document.getElementById("VisibleApartmentName").style.visibility = "visible";
      }
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

     if (Shack >= 5) {
      document.getElementById("VisibleText_Apartment").style.visibility = "hidden";
      document.getElementById("HiddenText_Apartment").style.visibility = "visible";
      document.getElementById("HiddenApartmentName").style.visibility = "visible";
      document.getElementById("VisibleApartmentName").style.visibility = "hidden";
    } else {
      document.getElementById("VisibleText_Apartment").style.visibility = "visible";
      document.getElementById("HiddenText_Apartment").style.visibility = "hidden";
      document.getElementById("HiddenApartmentName").style.visibility = "hidden";
      document.getElementById("VisibleApartmentName").style.visibility = "visible";
    }
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

     if (Apartment >= 5) {
      document.getElementById("VisibleText_House").style.visibility = "hidden";
      document.getElementById("HiddenText_House").style.visibility = "visible";
      document.getElementById("HiddenHouseName").style.visibility = "visible";
      document.getElementById("VisibleHouseName").style.visibility = "hidden";
    } else {
      document.getElementById("VisibleText_House").style.visibility = "visible";
      document.getElementById("HiddenText_House").style.visibility = "hidden";
      document.getElementById("HiddenHouseName").style.visibility = "hidden";
      document.getElementById("VisibleHouseName").style.visibility = "visible";
    }
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

     if (Apartment >= 5) {
      document.getElementById("VisibleText_House").style.visibility = "hidden";
      document.getElementById("HiddenText_House").style.visibility = "visible";
      document.getElementById("HiddenHouseName").style.visibility = "visible";
      document.getElementById("VisibleHouseName").style.visibility = "hidden";
    } else {
      document.getElementById("VisibleText_House").style.visibility = "visible";
      document.getElementById("HiddenText_House").style.visibility = "hidden";
      document.getElementById("HiddenHouseName").style.visibility = "hidden";
      document.getElementById("VisibleHouseName").style.visibility = "visible";
    }
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

     if (Apartment >= 5) {
      document.getElementById("VisibleText_House").style.visibility = "hidden";
      document.getElementById("HiddenText_House").style.visibility = "visible";
      document.getElementById("HiddenHouseName").style.visibility = "visible";
      document.getElementById("VisibleHouseName").style.visibility = "hidden";
    } else {
      document.getElementById("VisibleText_House").style.visibility = "visible";
      document.getElementById("HiddenText_House").style.visibility = "hidden";
      document.getElementById("HiddenHouseName").style.visibility = "hidden";
      document.getElementById("VisibleHouseName").style.visibility = "visible";
    }
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

     if (House >= 5) {
      document.getElementById("VisibleText_Motel").style.visibility = "hidden";
      document.getElementById("HiddenText_Motel").style.visibility = "visible";
      document.getElementById("HiddenMotelName").style.visibility = "visible";
      document.getElementById("VisibleMotelName").style.visibility = "hidden";
    } else {
      document.getElementById("VisibleText_Motel").style.visibility = "visible";
      document.getElementById("HiddenText_Motel").style.visibility = "hidden";
      document.getElementById("HiddenMotelName").style.visibility = "hidden";
      document.getElementById("VisibleMotelName").style.visibility = "visible";
    }
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

     if (House >= 5) {
      document.getElementById("VisibleText_Motel").style.visibility = "hidden";
      document.getElementById("HiddenText_Motel").style.visibility = "visible";
      document.getElementById("HiddenMotelName").style.visibility = "visible";
      document.getElementById("VisibleMotelName").style.visibility = "hidden";
    } else {
      document.getElementById("VisibleText_Motel").style.visibility = "visible";
      document.getElementById("HiddenText_Motel").style.visibility = "hidden";
      document.getElementById("HiddenMotelName").style.visibility = "hidden";
      document.getElementById("VisibleMotelName").style.visibility = "visible";
    }
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

     if (House >= 5) {
      document.getElementById("VisibleText_Motel").style.visibility = "hidden";
      document.getElementById("HiddenText_Motel").style.visibility = "visible";
      document.getElementById("HiddenMotelName").style.visibility = "visible";
      document.getElementById("VisibleMotelName").style.visibility = "hidden";
    } else {
      document.getElementById("VisibleText_Motel").style.visibility = "visible";
      document.getElementById("HiddenText_Motel").style.visibility = "hidden";
      document.getElementById("HiddenMotelName").style.visibility = "hidden";
      document.getElementById("VisibleMotelName").style.visibility = "visible";
    }
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

     if (Motel >= 5) {
      document.getElementById("VisibleText_ApartmentComplex").style.visibility = "hidden";
      document.getElementById("HiddenText_ApartmentComplex").style.visibility = "visible";
      document.getElementById("HiddenApartmentComplexName").style.visibility = "visible";
      document.getElementById("VisibleApartmentComplexName").style.visibility = "hidden";
    } else {
      document.getElementById("VisibleText_ApartmentComplex").style.visibility = "visible";
      document.getElementById("HiddenText_ApartmentComplex").style.visibility = "hidden";
      document.getElementById("HiddenApartmentComplexName").style.visibility = "hidden";
      document.getElementById("VisibleApartmentComplexName").style.visibility = "visible";
    }
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

     if (Motel >= 5) {
      document.getElementById("VisibleText_ApartmentComplex").style.visibility = "hidden";
      document.getElementById("HiddenText_ApartmentComplex").style.visibility = "visible";
      document.getElementById("HiddenApartmentComplexName").style.visibility = "visible";
      document.getElementById("VisibleApartmentComplexName").style.visibility = "hidden";
    } else {
      document.getElementById("VisibleText_ApartmentComplex").style.visibility = "visible";
      document.getElementById("HiddenText_ApartmentComplex").style.visibility = "hidden";
      document.getElementById("HiddenApartmentComplexName").style.visibility = "hidden";
      document.getElementById("VisibleApartmentComplexName").style.visibility = "visible";
    }
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

     if (Motel >= 5) {
      document.getElementById("VisibleText_ApartmentComplex").style.visibility = "hidden";
      document.getElementById("HiddenText_ApartmentComplex").style.visibility = "visible";
      document.getElementById("HiddenApartmentComplexName").style.visibility = "visible";
      document.getElementById("VisibleApartmentComplexName").style.visibility = "hidden";
    } else {
      document.getElementById("VisibleText_ApartmentComplex").style.visibility = "visible";
      document.getElementById("HiddenText_ApartmentComplex").style.visibility = "hidden";
      document.getElementById("HiddenApartmentComplexName").style.visibility = "hidden";
      document.getElementById("VisibleApartmentComplexName").style.visibility = "visible";
    }
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

      if (ApartmentComplex >= 5) {
        document.getElementById("VisibleText_Tower").style.visibility = "hidden";
        document.getElementById("HiddenText_Tower").style.visibility = "visible";
        document.getElementById("HiddenTowerName").style.visibility = "visible";
        document.getElementById("VisibleTowerName").style.visibility = "hidden";
      } else {
        document.getElementById("VisibleText_Tower").style.visibility = "visible";
        document.getElementById("HiddenText_Tower").style.visibility = "hidden";
        document.getElementById("HiddenTowerName").style.visibility = "hidden";
        document.getElementById("VisibleTowerName").style.visibility = "visible";
      }
    }
  }
function buyTower10() {
   if (Cash >= 10 * ApartmentComplexCost) {
     Cash = Cash - (10 * ApartmentComplexCost);
     ApartmentComplex = ApartmentComplex + 10;
     ApartmentComplexCost = Math.round(0.96 * (ApartmentComplexCost * (1.05 ** 10)));
     document.getElementById("Cash").innerHTML = Cash;
     document.getElementById("ApartmentComplex").innerHTML = ApartmentComplex;
     document.getElementById("ApartmentComplexCost").innerHTML = ApartmentComplexCost;

     if (ApartmentComplex >= 5) {
      document.getElementById("VisibleText_Tower").style.visibility = "hidden";
      document.getElementById("HiddenText_Tower").style.visibility = "visible";
      document.getElementById("HiddenTowerName").style.visibility = "visible";
      document.getElementById("VisibleTowerName").style.visibility = "hidden";
    } else {
      document.getElementById("VisibleText_Tower").style.visibility = "visible";
      document.getElementById("HiddenText_Tower").style.visibility = "hidden";
      document.getElementById("HiddenTowerName").style.visibility = "hidden";
      document.getElementById("VisibleTowerName").style.visibility = "visible";
    }
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

     if (ApartmentComplex >= 5) {
      document.getElementById("VisibleText_Tower").style.visibility = "hidden";
      document.getElementById("HiddenText_Tower").style.visibility = "visible";
      document.getElementById("HiddenTowerName").style.visibility = "visible";
      document.getElementById("VisibleTowerName").style.visibility = "hidden";
    } else {
      document.getElementById("VisibleText_Tower").style.visibility = "visible";
      document.getElementById("HiddenText_Tower").style.visibility = "hidden";
      document.getElementById("HiddenTowerName").style.visibility = "hidden";
      document.getElementById("VisibleTowerName").style.visibility = "visible";
    }
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

     if (Tower >= 5) {
      document.getElementById("VisibleText_Skyscraper").style.visibility = "hidden";
      document.getElementById("HiddenText_Skyscraper").style.visibility = "visible";
      document.getElementById("HiddenSkyscraperName").style.visibility = "visible";
      document.getElementById("VisibleSkyscraperName").style.visibility = "hidden";
    } else {
      document.getElementById("VisibleText_Skyscraper").style.visibility = "visible";
      document.getElementById("HiddenText_Skyscraper").style.visibility = "hidden";
      document.getElementById("HiddenSkyscraperName").style.visibility = "hidden";
      document.getElementById("VisibleSkyscraperName").style.visibility = "visible";
    }
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

     if (Tower >= 5) {
      document.getElementById("VisibleText_Skyscraper").style.visibility = "hidden";
      document.getElementById("HiddenText_Skyscraper").style.visibility = "visible";
      document.getElementById("HiddenSkyscraperName").style.visibility = "visible";
      document.getElementById("VisibleSkyscraperName").style.visibility = "hidden";
    } else {
      document.getElementById("VisibleText_Skyscraper").style.visibility = "visible";
      document.getElementById("HiddenText_Skyscraper").style.visibility = "hidden";
      document.getElementById("HiddenSkyscraperName").style.visibility = "hidden";
      document.getElementById("VisibleSkyscraperName").style.visibility = "visible";
    }
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

     if (Tower >= 5) {
      document.getElementById("VisibleText_Skyscraper").style.visibility = "hidden";
      document.getElementById("HiddenText_Skyscraper").style.visibility = "visible";
      document.getElementById("HiddenSkyscraperName").style.visibility = "visible";
      document.getElementById("VisibleSkyscraperName").style.visibility = "hidden";
    } else {
      document.getElementById("VisibleText_Skyscraper").style.visibility = "visible";
      document.getElementById("HiddenText_Skyscraper").style.visibility = "hidden";
      document.getElementById("HiddenSkyscraperName").style.visibility = "hidden";
      document.getElementById("VisibleSkyscraperName").style.visibility = "visible";
    }
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
