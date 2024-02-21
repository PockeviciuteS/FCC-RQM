const QUOTE = [
    {
        qoute: "Coding like poetry should be short and concise.",
        author: "Santosh Kalwar"
    },
    {
        qoute: "Its not a bug; its an undocumented feature",
        author: "Anonymous"
    },
    {
        qoute: "First, solve the problem. Then, write the code.",
        author: "John Johnson"
    },
    {
        qoute: "Code is like humor. When you have to explain it, its bad.",
        author: "Cory House"
    },
    {
        qoute: "Make it work, make it right, make it fast",
        author: " Kent Beck"
    },
    {
        qoute: "Clean code always looks like it was written by someone who cares.",
        author: " Robert C. Martin"
    },
    {
        qoute: "Of course, bad code can be cleaned up. But its very expensive",
        author: " Robert C. Martin"
    }
    ];
  window.onload = init;
  function init() {
    generateQuote()
  };

  function generateQuote() {
    let wordlength = QUOTE.length;
    let randomIndex = Math.floor(Math.random() * wordlength);
    let randomdata = QUOTE[randomIndex];
    
    document.getElementById("text").innerText = randomdata.qoute;
    document.getElementById("author").innerText = randomdata.author;
    console.log("Generate new");  
       };