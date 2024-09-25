function changeDisplay(displayValue) {
  const container = document.getElementById("displayContainer");
  container.style.display = displayValue;

  // Remove any previous class
  container.classList.remove("grid", "flex");

  // Add class for specific layouts
  if (displayValue === "grid" || displayValue === "flex") {
    container.classList.add(displayValue);
  }

  // Adjust item styles based on display value
  const items = container.getElementsByClassName("item");
  for (let item of items) {
    if (displayValue === "inline") {
      item.style.display = "inline-block";
      item.style.width = "auto";
    } else {
      item.style.display = "block";
      item.style.width = displayValue === "block" ? "100%" : "auto";
    }
  }
}

// Initialize with block display
changeDisplay("block");
