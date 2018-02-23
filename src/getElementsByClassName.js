// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var nodesArr = []
  function checkClass(node) {
    if (_(node.classList).contains(className)) {
      nodesArr.push(node)
    }
    node.childNodes.forEach(function(child) {
      checkClass(child)
    })
  }
  checkClass(document.body)
  return nodesArr
};
