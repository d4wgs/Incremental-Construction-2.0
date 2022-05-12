function LoadButton() {
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
