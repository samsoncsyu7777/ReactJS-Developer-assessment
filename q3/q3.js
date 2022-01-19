if (recipe == 'SPANISH') {
  fudge = SPANISH_FUDGE;
  amt = base * SPANISH_FUDGE;
} else if ((recipe == 'FRENCH') || (recipe == 'ENGLISH')) {
  if (recipe == 'FRENCH') {
    fudge = FRENCH_FUDGE;
    chocolate = 7;
  } else {
    fudge = ENGLISH_FUDGE;
  }
  amt = base * fudge;
} else {
  fudge = 1;
  amt = base;
}
sugar = 2 * bottom(amt) + top(amt) * 1.17;
