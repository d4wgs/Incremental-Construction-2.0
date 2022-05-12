function buyReputation() {
  if (Skyscraper >= ReputationCost) {
    Skyscraper = Skyscraper - ReputationCost;
    Reputation = Reputation + 1;
    Reputation = Reputation;
    document.getElementById("Skyscraper").innerHTML = Skyscraper;
    document.getElementById("Reputation").innerHTML = Reputation;
    document.getElementById("ReputationCost").innerHTML = ReputationCost;

    if (Skyscraper >= 1) {
      document.getElementById("BuyRep").style.visibility = "visible";
    } else {
      document.getElementById("BuyRep").style.visibility = "hidden";
    }
  }
}
function buyGDRep() {
  if (Reputation >= GDRepCost) {
    Reputation = Reputation - GDRepCost;
    GDRep = GDRep + 1;
    GDRepCost = Math.round(GDRepCost * 3.5);
    GDRepCost = GDRepCost;
    GDRep = GDRep;
    document.getElementById("Reputation").innerHTML = Reputation;
    document.getElementById("GDRep").innerHTML = GDRep;
    document.getElementById("GDRepCost").innerHTML = GDRepCost;

    if (Reputation >= 1) {
      document.getElementById("BuyGD").style.visibility = "visible";
    } else {
      document.getElementById("BuyGD").style.visibility = "hidden";
    }
    if (GDRep >= 1) {
      document.getElementById("GDTot").style.visibility = "visible";
    } else {
      document.getElementById("GDTot").style.visibility = "hidden";
    }
  }
}
function buyVSRep() {
  if (Reputation >= VSRepCost) {
    Reputation = Reputation - VSRepCost;
    VSRep = VSRep + 1;
    VSRepCost = Math.round(VSRepCost * 3.5);
    VSRep = VSRep;
    VSRepCost = VSRepCost;
    document.getElementById("Reputation").innerHTML = Reputation;
    document.getElementById("VSRepCost").innerHTML = VSRepCost;
    document.getElementById("VSRep").innerHTML = VSRep;

    if (Reputation >= 3) {
      document.getElementById("BuyVS").style.visibility = "visible";
    } else {
      document.getElementById("BuyVS").style.visibility = "hidden";
    }
    if (VSRep >= 1) {
      document.getElementById("VSTot").style.visibility = "visible";
    } else {
      document.getElementById("VSTot").style.visibility = "hidden";
    }
  }
}
function buyOTRep() {
  if (Reputation >= OTRepCost) {
    Reputation = Reputation - OTRepCost;
    OTRep = OTRep + 1;
    OTRepCost = Math.round(OTRepCost * 3.5);
    OTRep = OTRep;
    OTRepCost = OTRepCost;
    document.getElementById("Reputation").innerHTML = Reputation;
    document.getElementById("OTRepCost").innerHTML = OTRepCost;
    document.getElementById("OTRep").innerHTML = OTRep;

    if (Reputation >= 10) {
      document.getElementById("BuyOT").style.visibility = "visible";
    } else {
      document.getElementById("BuyOT").style.visibility = "hidden";
    }
    if (OTRep >= 1) {
      document.getElementById("OTTot").style.visibility = "visible";
    } else {
      document.getElementById("OTTot").style.visibility = "hidden";
    }
  }
}
function buyETRep() {
  if (Reputation >= ETRepCost) {
    Reputation = Reputation - ETRepCost;
    ETRep = ETRep + 1;
    ETRepCost = Math.round(ETRepCost * 3.5);
    ETRep = ETRep;
    ETRepCost = ETRepCost;
    document.getElementById("Reputation").innerHTML = Reputation;
    document.getElementById("ETRepCost").innerHTML = ETRepCost;
    document.getElementById("ETRep").innerHTML = ETRep;

    if (Reputation >= 25) {
      document.getElementById("BuyET").style.visibility = "visible";
    } else {
      document.getElementById("BuyET").style.visibility = "hidden";
    }
    if (ETRep >= 1) {
      document.getElementById("ETTot").style.visibility = "visible";
    } else {
      document.getElementById("ETTot").style.visibility = "hidden";
    }
  }
}
function buyHCRep() {
  if (Reputation >= HCRepCost) {
    Reputation = Reputation - HCRepCost;
    HCRep = HCRep + 1;
    HCRepCost = Math.round(HCRepCost * 3.5);
    HCRep = HCRep;
    HCRepCost = HCRepCost;
    document.getElementById("Reputation").innerHTML = Reputation;
    document.getElementById("HCRepCost").innerHTML = HCRepCost;
    document.getElementById("HCRep").innerHTML = HCRep;

    if (Reputation >= 60) {
      document.getElementById("BuyHC").style.visibility = "visible";
    } else {
      document.getElementById("BuyHC").style.visibility = "hidden";
    }
    if (HCRep >= 1) {
      document.getElementById("HCTot").style.visibility = "visible";
    } else {
      document.getElementById("HCTot").style.visibility = "hidden";
    }
  }
}
function buyMSARep() {
  if (Reputation >= MSARepCost) {
    Reputation = Reputation - MSARepCost;
    MSARep = MSARep + 1;
    MSARepCost = Math.round(MSARepCost * 3.5);
    MSARep = MSARep;
    MSARepCost = MSARepCost;
    document.getElementById("Reputation").innerHTML = Reputation;
    document.getElementById("MSARepCost").innerHTML = MSARepCost;
    document.getElementById("MSARep").innerHTML = MSARep;

    if (Reputation >= 125) {
      document.getElementById("BuyMSA").style.visibility = "visible";
    } else {
      document.getElementById("BuyMSA").style.visibility = "hidden";
    }
    if (MSARep >= 1) {
      document.getElementById("MSATot").style.visibility = "visible";
    } else {
      document.getElementById("MSATot").style.visibility = "hidden";
    }
  }
}
