function foo(a, b) {
  // Type checking to ensure inputs are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    console.warn('Error: Inputs must be numbers.');
    return NaN; // Return NaN to signal an error
  }

  if (a === null || b === null) {
    return null; // Handle null values
  }

  return a + b;
}