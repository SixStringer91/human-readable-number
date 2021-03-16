module.exports = (numb) => {
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (numb === 0) return 'zero'
    if (numb < 10) return ones[numb]
    if (numb >= 10 && numb < 20) return teens[numb - 10];
    if (numb >= 20 && numb < 100) return (`${tens[Math.floor(numb / 10)]} ${ones[Math.floor(numb % 10)]}`).trim()
    if (numb >= 100 && numb < 1000) return (`${ones[Math.floor(numb / 100)] + ' hundred'} ${((numb % 100)) >= 20 ? tens[Math.floor((numb % 100) / 10)] : (teens[Math.floor((numb % 100) - 10)]?teens[Math.floor((numb % 100) - 10)]:'')} ${((numb % 100)) < 10 || ((numb % 100)) > 20 ? ones[Math.floor(numb % 10)] : ''}`).trim().replace('  ',' ')

   
  }
  









