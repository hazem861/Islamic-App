var arrayOfQuotes = [
  "سبحان الله",
  "الحمدلله",
  "  الله اكبر",
  "لا اله الا الله",
];

function generateQuote(){
  var box = Math.floor(Math.random()*arrayOfQuotes.length);
  document.getElementById("tasbe7a").innerHTML =arrayOfQuotes[box]
  
  
}

// ----------------------------------------------



var arrayOfQuote = [
  "اللهم بك أصبحنا وبك أمسينا، وبك نحيا وبك نموت وإليك المصير.",
  "الحمد لله الذي أحيانا بعد ما أماتنا وإليه النشور.",
  "اللهم إني أصبحت أشهدك، وأشهد حملة عرشك، وملائكتك، وجميع خلقك، أنك أنت الله لا إله إلا أنت وحدك لا شريك لك وأن محمدًا عبدك ورسولك.",
  "رضيت بالله رباً، وبالإسلام ديناً، وبمحمد صلى الله عليه وسلم نبياً.",
  "اللهم إني أعوذ بك من الهم والحزن، وأعوذ بك من العجز والكسل، وأعوذ بك من الجبن والبخل، وأعوذ بك من غلبة الدين وقهر الرجال."
];

function generateQuotee(){
  var boox = Math.floor(Math.random()*arrayOfQuote.length);
  document.getElementById("Azkar").innerHTML =arrayOfQuote[boox]
  
  
}

// ------------------------------------------
var incrementButton = ""
var counterElement =""

var counterValue = 0;


function incrementCounter() {
  counterValue++;
  if (counterValue > 33) {
    counterValue = 0;
  }
   document.getElementById("count").innerHTML=counterValue
}

