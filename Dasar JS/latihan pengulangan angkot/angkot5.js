var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

for (noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= 6) {
    console.log("angkot no. " + noAngkot + " beroperasi dengan baik");
  } else if (noAngkot === 8 || noAngkot === 10) {
    console.log("angkot no. " + noAngkot + " sedang lembur");
  } else {
    console.log("angkot no. " + noAngkot + " tidak beroperasi");
  }
}
