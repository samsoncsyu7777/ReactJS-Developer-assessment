export function q1(number: number) {
    let other = true;
    if (number % 2 === 0) {
      console.log('candy');
      other = false;
    }
    if (number % 11 === 0) {
      console.log('bar');
      other = false;
    }
    if (number % 22 === 0) {
      console.log('candybar');
      other = false;
    }
    if (other) {
      console.log(number);
    }
  }