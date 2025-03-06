// 1. returnFirstTwoDrivers()
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));
  // => ['Antonia', 'Nuru']
  
  // 2. returnLastTwoDrivers()
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  // Example usage:
  console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));
  // => ['Amari', 'Mo']
  
  // 3. selectingDrivers
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // Example usage:
  console.log(selectingDrivers[0](['Antonia', 'Nuru', 'Amari', 'Mo'])); // First two drivers
  console.log(selectingDrivers[1](['Antonia', 'Nuru', 'Amari', 'Mo'])); // Last two drivers
  
  // 4. createFareMultiplier()
  const createFareMultiplier = function(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  };
  
  // 5. fareDoubler
  const fareDoubler = createFareMultiplier(2);
  
  // Example usage:
  console.log(fareDoubler(10)); // => 20
  
  // 6. fareTripler
  const fareTripler = createFareMultiplier(3);
  
  // Example usage:
  console.log(fareTripler(10)); // => 30
  
  // 7. selectDifferentDrivers()
  const selectDifferentDrivers = function(drivers, selectFunction) {
    return selectFunction(drivers);
  };
  
  // Example usage:
  console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers)); // => ['Antonia', 'Nuru']
  console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnLastTwoDrivers)); // => ['Amari', 'Mo']
  