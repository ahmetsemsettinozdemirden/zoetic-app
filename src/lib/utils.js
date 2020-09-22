
export function nestedCopy(array) {
  return JSON.parse(JSON.stringify(array));
}

export function sleep (milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

export function toIsoDate (date) {
  return date.toISOString().split('T')[0];
}