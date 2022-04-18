function buyESBuilding() {
    if (ReputationTot >= ESBuildingCost) {
      ReputationTot = ReputationTot - ESBuildingCost;
      ESBuilding = ESBuilding + 1;
      ESBuildingCost = Math.round(ESBuildingCost * 1.05);
      ESBuildingCount = ESBuilding;
      ESBuildingTotCost1 = ESBuildingCost;
      ESBuildingTotCost10  = ESBuildingTotCost1 * 10;
      ESBuildingTotCost100  = ESBuildingTotCost1 * 100;

      document.getElementById("ReputationTot").innerHTML = ReputationTot;
      document.getElementById("ESBuildingTot").innerHTML = ESBuildingCount;
      document.getElementById("ESBuildingTotCost").innerHTML = ESBuildingTotCost1;
    }
  }