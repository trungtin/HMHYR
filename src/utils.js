function wordsCount(node, recursive) {
  let count = 0;
  let childElement = node.children;
  [].forEach.call(node.childNodes, child => {
    if ([].indexOf.call(childElement, child) === -1) {
      count += (child.textContent.match(/.+?([ ,\n]+).+?/gi) || []).length + 1;
    } else if (recursive) {
      count += wordsCount(child, true)
    }
  })
  return count;
}

function recursiveWordsCount(node) {
  return wordsCount(node, true);
}

module.exports = {
  wordsCount,
  recursiveWordsCount
}