
(function () {
  const quoteText = document.getElementById('quoteText');
  const quoteAuthor = document.getElementById('quoteAuthor');
  const newQuoteBtn = document.getElementById('newQuoteBtn');

  if (!quoteText || !newQuoteBtn) return;

  const API_URL = 'https://dummyjson.com/quotes/random';

 
  const fallbackQuotes = [
    { quote: 'The best way to get started is to quit talking and begin doing.', author: 'Walt Disney' },
    { quote: "Don't watch the clock; do what it does. Keep going.", author: 'Sam Levenson' },
    { quote: 'It always seems impossible until it is done.', author: 'Nelson Mandela' },
  ];

  function renderQuote(quote, author) {
    quoteText.classList.remove('fade-quote');
    void quoteText.offsetWidth; // restart animation
    quoteText.textContent = `\u201c${quote}\u201d`;
    quoteText.classList.add('fade-quote');
    quoteAuthor.textContent = `\u2014 ${author}`;
  }

  function setLoadingState() {
    quoteText.textContent = 'Loading a fresh quote...';
    quoteAuthor.textContent = '';
    newQuoteBtn.disabled = true;
    newQuoteBtn.classList.add('opacity-60', 'cursor-not-allowed');
  }

  function clearLoadingState() {
    newQuoteBtn.disabled = false;
    newQuoteBtn.classList.remove('opacity-60', 'cursor-not-allowed');
  }

  async function fetchQuote() {
    setLoadingState();
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      renderQuote(data.quote, data.author);
    } catch (err) {
      console.error('Could not fetch quote from API, using fallback:', err);
      const fallback = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
      renderQuote(fallback.quote, fallback.author);
    } finally {
      clearLoadingState();
    }
  }

  newQuoteBtn.addEventListener('click', fetchQuote);

  fetchQuote();
})();