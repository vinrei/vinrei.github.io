function checkDupes(inputString){
    const regex = /\b\d{4}\b/g;
    const found = inputString.match(regex);
    // const numbers = input.split(',').map(num => num.trim());
    const duplicates = [];

    const seen = new Set();
    if (found) {
        found.forEach(num => {
            if (num.length === 4 && !isNaN(num)) {
                if (seen.has(num)) {
                    duplicates.push(num);
                } else {
                    seen.add(num);
                }
            }
        });
    }
  
    return duplicates
}