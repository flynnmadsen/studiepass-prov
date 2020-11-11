
// 1. Varför loggas ingenting ut när man kör det här skriptet? 
// Det finns två fel. SVAR: ____fel 1. det som vill loggas ut skrivs som en string men har inte "" så det blir ingen string utan variabler
// fel 2. man kallar inte på funktionen____

// 2. Ändra scriptet så att "Hello, how are you today?" verkligen loggas ut.

function hello() {
    console.log("Hello, how are you today?")
}
hello()

// 3. Uppdatera funktionen hello så att den tar ett namn som argument
// Gör så att den hälsar med namn, t.ex. "Hello Fredrik, how are you today?"
function hello() {
    let name = "Dracula"
    console.log("Hello " + name + " how are you today?")
}
hello()