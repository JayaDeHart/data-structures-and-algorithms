# Trees
Trees are a type of datastructure. Every node can have multiple child nodes. Binary trees are a subset of trees where any node cannot have more than two nodes.
## Challenge
1. Create a binary tree class with methods for traversing it
2. Create a binary search tree class, with methods for adding to it and checking if it contains certain values

## Approach & Efficiency
For trees recursion is a very effective strategy in most cases. For example, to traverse a tree you make a method to go left and right, and call the same function recursively to traverse the whole tree. 
## Whiteboard
![treewhiteboard](https://user-images.githubusercontent.com/71462092/132145666-e0b5b4a4-a170-4132-9c9c-e1cdccc05dd7.jpg)

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Trees - Max
Trees are a type of datastructure. Every node can have multiple child nodes. Binary trees are a subset of trees where any node cannot have more than two nodes.

## Challenge
1. Create a method on the binary tree class that returns the max value in the tree;

## Approach & Efficiency
For trees recursion is a very effective strategy in most cases. For this method, I am traversing it in the same way as earlier, but at every node I am checking the value of that node against my max value and reassigning max as necessary. Should be O(n) efficiency
## Whiteboard
![treewhiteboard](https://user-images.githubusercontent.com/71462092/132145666-e0b5b4a4-a170-4132-9c9c-e1cdccc05dd7.jpg)

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Trees - Breadth First
Trees are a type of datastructure. Every node can have multiple child nodes. Binary trees are a subset of trees where any node cannot have more than two nodes.

## Challenge
1. Create a method on the binary tree class that traverses the tree following a breadth first approach.

## Approach & Efficiency
For this problem I am using a queue. Every node gets put on a queue. This ensures we push each node's value gets pushed to our output array in the correct order. Big O would be O(n) since we interact with each node once as it passes through the queueue
## Whiteboard
![breadthfirstwhiteboard](https://user-images.githubusercontent.com/71462092/132592767-29f6f5bd-2318-4035-889a-0ed62efba728.jpg)
