var quotes = [
  "“Maybe life is random, but I doubt it.” — Steven Tyler",
  "“My life was a sort of series of random disasters.” — Claire Tomalin",
  "“Sometimes in life, random things can blind-side you.” — Michelle Ryan",
  "“Random chance plays a huge part in everybody’s life.” — Gary Gygax",
  "“I believe life is an intelligent thing: that things aren’t random.” — Steve Jobs",
  "“There’s no such thing as a typical day because I lead a very random life.” — Mick Hucknall",
  "“I’m constantly complimented for my voice, even by random people at the airport!” — Kabir Bedi",
  "“The social risks that worry us are not a random bundle of frights.” — Ian Hacking",
  "“Together we can change the world, just one random act of kindness at a time.” — Ron Hall",
  "“Luck really has nothing to do with human existence since God is not a random God.” — Monica Johnson",
];
function display() {
    var lastRandomNumber = +localStorage.getItem("lastRandomNumber");
    var randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * quotes.length);
    } while (randomNumber === lastRandomNumber);
    localStorage.setItem("lastRandomNumber", randomNumber);
    document.getElementById(
      "contDisplay"
    ).innerHTML = `<div class="bg-secondary text-center p-4 border border-2 border-black">
          ${quotes[randomNumber]}
        </div>`;
  }