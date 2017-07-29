var quotes = [
  {tqt: "Chocolate does not ask silly questions. Chocolate understands.",
  author: "unknown"},
  {tqt: "You can't be sad when you are holding a cupcake.",
  author: "unknown"},
  {tqt: "Do not take life too seriously. You will never get out of it alive.",
  author: "Elbert Hubbard"},
  {tqt: "The only mystery in life is why the kamikaze pilots wore helmets.",
  author: "Al McGuire"},
  {tqt: "When I die, I want to go peacefully like my grandfather did–in his sleep. Not yelling and screaming like the passengers in his car.",
  author: "Bob Monkhouse"}
];

  $(document).ready(function() {

$("#twt-btn").on("click", function(){
  var url = "https://twitter.com/intent/tweet?text=";
  var text = '\'' +  document.getElementById("quoteDisplay").textContent + "'";

  window.open(url + text);
});

$("#getQuote").on("click", function(){

  var randIndex = Math.floor(Math.random() * quotes.length);

   var htmlQuote  = quotes[randIndex]["tqt"];
 var authorQuote =  quotes[randIndex]["author"];

  var html = "<div class='quotes'>" + htmlQuote + ' - ' + authorQuote + "</div>";





   $(".quote").html(html);


  //quotePrint = quotes[1]["tqt"]
  });
});
