/* Show a result of Josephus Problem for 7 soldiers.
	•	1 Kills 2
	•	3 Kills 4
	•	5 Kills 6
	•	7 Kills 1
	•	3 Kills 5
	•	7 Kills 3
	•	7 Remains alive */

function findTheLastSurivor(n) {
  // uzupełnianie tablicy do danego n (0...n)
  let josephus = [];
  for (let i = 0; i < n; i++) {
    josephus[i] = i + 1;
  }

  // do takiego momentu krązymy, az zostanie jeden element
  let i = 0;
  while (josephus.length > 1) {
    // warunek przetwarzania
    console.log(i, josephus.length);
    i = (i + 1) % josephus.length; // wyliczanie indeksu do usuniecia
    josephus.splice(i, 1); // usuwamy element na pozycji i
  }

  return josephus;
}

console.log(findTheLastSurivor(7));
