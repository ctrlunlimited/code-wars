// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives 
// one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand
//  is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

function DNAStrand(dna) {
    const complements = { A: "T", T: "A", C: "G", G: "C" };
    return dna.replace(/./g, char => complements[char]);
  }