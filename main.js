if (navigator.getBattery) {
  navigator.getBattery().then((battery) => {
    (function updateAllBatteryInfo() {
      updateChargeInfo();
      updateLevelInfo();
      updateChargingInfo();
      updateDischargingInfo();
    })();

    battery.addEventListener("chargingchange", () => {
      updateChargeInfo();
    });
    function updateChargeInfo() {
      const chargingSpan = document.querySelector("#charging-change");
      chargingSpan.textContent = `${battery.charging ? "Yes" : "No"}`
    }

    battery.addEventListener("levelchange", () => {
      updateLevelInfo();
    });
    function updateLevelInfo() {
      const levelSpan = document.querySelector("#level-change");
      levelSpan.textContent = `${battery.level * 100}%`;
    }

    battery.addEventListener("chargingtimechange", () => {
      updateChargingInfo();
    });
    function updateChargingInfo() {
      const chargingTimeSpan = document.querySelector("#charging-time-change");
      chargingTimeSpan.textContent = `${(battery.chargingTime / 3600).toFixed(1)} hours to full charge.`;
    }

    battery.addEventListener("dischargingtimechange", () => {
      updateDischargingInfo();
    });
    function updateDischargingInfo() {
      const dischargingTimeSpan = document.querySelector(
        "#discharging-time-change"
      );
      if (battery.dischargingTime === Infinity) {
        dischargingTimeSpan.textContent = "Fully charged";
      } else {
        dischargingTimeSpan.textContent = `${(battery.dischargingTime / 3600).toFixed(1)} hours to discharge`;
      }
    }
  });
}
