function upgradeShack() {
    if (Cash >= ShackUpgradeCost) {
      Cash = Cash - ShackUpgradeCost;
      ShackOut = Math.round(ShackOut * 1.5);
      ShackUpgradeCost = Math.round(ShackUpgradeCost * 3.5);
      CPS = (Shack * ShackOut) + (Apartment * ApartmentOut) + (House * HouseOut) + (Motel * MotelOut) + (ApartmentComplex * ApartmentComplexOut) + (Tower * TowerOut) + (Skyscraper * SkyscraperOut) + (GDRep * 1000) + (GDRep * 1000) + (GDRep * 1000) + (GDRep * 1000) + (GDRep * 1000) + (GDRep * 1000) + (GDRep * 1000) + (GDRep * 1000) + (GDRep * 1000);

      document.getElementById("Cash").innerHTML = Cash;
      document.getElementById("ShackOut").innerHTML = ShackOut;
      document.getElementById("ShackUpgradeCost").innerHTML = ShackUpgradeCost;
      document.getElementById("CPS").innerHTML = CPS;
    }
  }
function upgradeApartment() {
    if (Cash >= ApartmentUpgradeCost) {
      Cash = Cash - ApartmentUpgradeCost;
      ApartmentOut = Math.round(ApartmentOut * 1.5);
      ApartmentUpgradeCost = Math.round(ApartmentUpgradeCost * 3.5);
      CPS = (Shack * ShackOut) + (Apartment * ApartmentOut) + (House * HouseOut) + (Motel * MotelOut) + (ApartmentComplex * ApartmentComplexOut) + (Tower * TowerOut) + (Skyscraper * SkyscraperOut) + (GDRep * 1000) + (GDRep * 1000) + (GDRep * 1000) + (GDRep * 1000) + (GDRep * 1000) + (GDRep * 1000) + (GDRep * 1000) + (GDRep * 1000) + (GDRep * 1000);

      document.getElementById("Cash").innerHTML = Cash;
      document.getElementById("ApartmentOut").innerHTML = ApartmentOut;
      document.getElementById("ApartmentUpgradeCost").innerHTML = ApartmentUpgradeCost;
      document.getElementById("CPS").innerHTML = CPS;
    }
  }
function upgradeHouse() {
    if (Cash >= HouseUpgradeCost) {
      Cash = Cash - HouseUpgradeCost;
      HouseOut = Math.round(HouseOut * 1.5);
      HouseUpgradeCost = Math.round(HouseUpgradeCost * 3.5);
      CPS = (Shack * ShackOut) + (Apartment * ApartmentOut) + (House * HouseOut) + (Motel * MotelOut) + (ApartmentComplex * ApartmentComplexOut) + (Tower * TowerOut) + (Skyscraper * SkyscraperOut) + (GDRep * 1000) + (GDRep * 1000) + (GDRep * 1000) + (GDRep * 1000) + (GDRep * 1000) + (GDRep * 1000) + (GDRep * 1000) + (GDRep * 1000) + (GDRep * 1000);

      document.getElementById("Cash").innerHTML = Cash;
      document.getElementById("HouseOut").innerHTML = HouseOut;
      document.getElementById("HouseUpgradeCost").innerHTML = HouseUpgradeCost;
      document.getElementById("CPS").innerHTML = CPS;
    }
  }
function upgradeMotel() {
    if (Cash >= MotelUpgradeCost) {
      Cash = Cash - MotelUpgradeCost;
      MotelOut = Math.round(MotelOut * 1.5);
      MotelUpgradeCost = Math.round(MotelUpgradeCost * 3.5);
      CPS = (Shack * ShackOut) + (Apartment * ApartmentOut) + (House * HouseOut) + (Motel * MotelOut) + (ApartmentComplex * ApartmentComplexOut) + (Tower * TowerOut) + (Skyscraper * SkyscraperOut) + (GDRep * 1000) + (GDRep * 1000) + (GDRep * 1000) + (GDRep * 1000) + (GDRep * 1000) + (GDRep * 1000) + (GDRep * 1000) + (GDRep * 1000) + (GDRep * 1000);

      document.getElementById("Cash").innerHTML = Cash;
      document.getElementById("MotelOut").innerHTML = MotelOut;
      document.getElementById("MotelUpgradeCost").innerHTML = MotelUpgradeCost;
      document.getElementById("CPS").innerHTML = CPS;
    }
  }
function upgradeApartmentComplex() {
    if (Cash >= ApartmentComplexUpgradeCost) {
      Cash = Cash - ApartmentComplexUpgradeCost;
      ApartmentComplexOut = Math.round(ApartmentComplexOut * 1.5);
      ApartmentComplexUpgradeCost = Math.round(ApartmentComplexUpgradeCost * 3.5);
      CPS = (Shack * ShackOut) + (Apartment * ApartmentOut) + (House * HouseOut) + (Motel * MotelOut) + (ApartmentComplex * ApartmentComplexOut) + (Tower * TowerOut) + (Skyscraper * SkyscraperOut) + (GDRep * 1000) + (GDRep * 1000) + (GDRep * 1000) + (GDRep * 1000) + (GDRep * 1000) + (GDRep * 1000) + (GDRep * 1000) + (GDRep * 1000) + (GDRep * 1000);

      document.getElementById("Cash").innerHTML = Cash;
      document.getElementById("ApartmentComplexOut").innerHTML = ApartmentComplexOut;
      document.getElementById("ApartmentComplexUpgradeCost").innerHTML = ApartmentComplexUpgradeCost;
      document.getElementById("CPS").innerHTML = CPS;
    }
  }
function upgradeTower() {
    if (Cash >= TowerUpgradeCost) {
      Cash = Cash - TowerUpgradeCost;
      TowerOut = Math.round(TowerOut * 1.5);
      TowerUpgradeCost = Math.round(TowerUpgradeCost * 3.5);
      CPS = (Shack * ShackOut) + (Apartment * ApartmentOut) + (House * HouseOut) + (Motel * MotelOut) + (ApartmentComplex * ApartmentComplexOut) + (Tower * TowerOut) + (Skyscraper * SkyscraperOut) + (GDRep * 1000) + (GDRep * 1000) + (GDRep * 1000) + (GDRep * 1000) + (GDRep * 1000) + (GDRep * 1000) + (GDRep * 1000) + (GDRep * 1000) + (GDRep * 1000);

      document.getElementById("Cash").innerHTML = Cash;
      document.getElementById("TowerOut").innerHTML = TowerOut;
      document.getElementById("TowerUpgradeCost").innerHTML = TowerUpgradeCost;
      document.getElementById("CPS").innerHTML = CPS;
    }
  }
function upgradeSkyscraper() {
    if (Cash >= SkyscraperUpgradeCost) {
      Cash = Cash - SkyscraperUpgradeCost;
      SkyscraperOut = Math.round(SkyscraperOut * 1.5);
      SkyscraperUpgradeCost = Math.round(SkyscraperUpgradeCost * 3.5);
      CPS = (Shack * ShackOut) + (Apartment * ApartmentOut) + (House * HouseOut) + (Motel * MotelOut) + (ApartmentComplex * ApartmentComplexOut) + (Tower * TowerOut) + (Skyscraper * SkyscraperOut) + (GDRep * 1000) + (GDRep * 1000) + (GDRep * 1000) + (GDRep * 1000) + (GDRep * 1000) + (GDRep * 1000) + (GDRep * 1000) + (GDRep * 1000);

      document.getElementById("Cash").innerHTML = Cash;
      document.getElementById("SkyscraperOut").innerHTML = SkyscraperOut;
      document.getElementById("SkyscraperUpgradeCost").innerHTML = SkyscraperUpgradeCost;
      document.getElementById("CPS").innerHTML = CPS;
    }
  }
