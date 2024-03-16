////չի ստացվել, բայց սա եմ ուղարկում՝ console.log(res.apply(obj,[5,6]))
function sum(a, b) {
  console.log("asd", this);
  return a + b;
}

function helloDecorator(fn) {
  function result(...rest) {
    console.log("Hello this is Decorator function");
    return fn(...rest);
  }
  return result;
}

let res = helloDecorator(sum);
let obj = {
  asd: "dsa",
  sum,
  res,
};

//console.log(obj.sum(5,6))
console.log(res.apply(obj, [5, 6]));

///Ծառի ծնդիրը
function Tree1(nodes) {
  const tree = {};
  const root = nodes.find((node) => node.parentId === null);

  function builTree1(nodeId) {
    const subtree = {};
    nodes
      .filter((node) => node.parentId === nodeId)
      .forEach((childNode) => {
        subtree[childNode.id] = builTree1(childNode.id);
      });
    return subtree;
  }

  tree[root.id] = builTree1(root.id);
  return tree;
}

function Tree2(nodes) {
  const root = nodes.find((node) => node.parentId === null);
  let tree = {
    id: root.id,
    children: builTree2(root.id),
  };

  function builTree2(nodeId) {
    const children = [];
    nodes
      .filter((node) => node.parentId === nodeId)
      .forEach((childNode) => {
        children.push({
          id: childNode.id,
          children: builTree2(childNode.id),
        });
      });
    return children;
  }

  return tree;
}

let nodes = [
  { id: 1, parentId: null },
  { id: 2, parentId: 1 },
  { id: 3, parentId: 1 },
  { id: 4, parentId: 2 },
  { id: 5, parentId: 2 },
  { id: 6, parentId: 3 },
  { id: 7, parentId: 4 },
  { id: 8, parentId: 7 },
  { id: 9, parentId: 8 },
];
console.log(Tree1(nodes));
console.log(Tree2(nodes));
