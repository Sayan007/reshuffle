export function setupCounter(element) {
  let counter = 0
  const setOrderedItems = () => {
    let orderedItems = ''
    let separatedItems = {};
    let shufledItems = document.querySelector('#shuffledOrder').value;
    let items = shufledItems.split('');
    items.forEach((item, key) => {
      separatedItems[item] = separatedItems[item] ? separatedItems[item] + item : item;
    })
    for(let key in separatedItems){
      orderedItems += separatedItems[key]
    }
    element.innerHTML = `count is ${orderedItems}`
  }
  element.innerHTML = 'Click Me';
  element.addEventListener('click', () => setOrderedItems())
}
