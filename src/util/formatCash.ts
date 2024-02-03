export function formattedPounds(number) {
    return number.toLocaleString("en-GB", {
      style: "currency",
      currency: "GBP",
    });
  }
  