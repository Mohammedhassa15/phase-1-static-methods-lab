class Formatter {
  // Capitalizes the first letter of a string
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // Removes all non-alphanumeric characters except dash, single quote, and space
  static sanitize(str) {
    return str.replace(/[^a-zA-Z0-9-' ]/g, '');
  }

  // Capitalizes all words except certain ones, always capitalizes the first word
  static titleize(sentence) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const words = sentence.split(' ');

    return words
      .map((word, index) => {
        if (index === 0 || !exceptions.includes(word.toLowerCase())) {
          return word.charAt(0).toUpperCase() + word.slice(1);
        } else {
          return word.toLowerCase();
        }
      })
      .join(' ');
  }
}

// Export the class if you're using modules
// module.exports = Formatter; // Uncomment if needed in your environment
