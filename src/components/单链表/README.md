## 单链表

### 实现

- 通过`LinkedList`的类创建链表实例，链表下有添加，查找，删除，显示节点等方法
- 链表初始默认有一个"_head"头部节点，使用时隐藏
- 按**元素/索引** 添加、删除，未找到时返回**错误**，查找未找到时返回null或-1
- `let obj = new LinkedList()`

### 方法介绍

**查找**

- `obj.find(item)`通过item元素内容查找到该元素
- `obj.findIndex(index)`通过index索引查找到该元素
- `obj.findIndexOf(item)`通过item元素内容查找到该元素索引
- `obj.findPrev(item)`通过item元素查找上一个节点元素

**添加**

- `obj.insert(item,newElement)`在item元素后插入新元素
- `obj.push(item)`在链表末尾插入item元素
- `obj.insertIndex(index,newElement)`在index索引处插入新元素

**删除**

- `obj.remove(item)`删除item元素
- `obj.removeIndex(index)`删除index索引处节点

**其他**

- `obj.size()`返回该链表的长度
- `obj.display()`数组形式返回该链表，便于观察，测试

### 方法代码

**链表类LinkedList**

```javascript
      function LinkedList (...rest) {
        this._head = new Node('_head') // 链表头节点
        this.find = find
        this.findPrev = findPrev
        this.findIndex = findIndex
        this.findIndexOf = findIndexOf
        this.push = push
        this.insert = insert
        this.insertIndex = insertIndex
        this.remove = remove
        this.removeIndex = removeIndex
        this.display = display
        this.size = size
        // 如果new时有传进值，则添加到实例中
        if (rest.length) {
          this.insert(rest[0], '_head')
          for (let i = 1; i < rest.length; i++) {
            this.insert(rest[i], rest[i - 1])
          }
        }
      }
```

**创建新节点类**

```javascript
      function Node (element) {
        this.element = element
        this.next = null
      }
```

**obj.find(item)**

```javascript
        function find (item) {
          let currNode = this._head
          while (currNode !== null && currNode.element !== item) {
            currNode = currNode.next
          }
          if (currNode !== null) {
            return currNode
          } else {
            return null
          }
        }
```

**obj.findIndex(index)**

```javascript
        function findIndex (index) {
          let currNode = this._head
          let tmpIndex = 0
          while (currNode !== null) {
            // 找到该index位置，返回当前节点，出去头结点
            if (tmpIndex === index + 1) {
              return currNode
            }
            tmpIndex += 1
            currNode = currNode.next
          }
          return null
        }
```

**obj.findIndexOf(item)**

```javascript
        function findIndexOf (item) {
          let currNode = this._head
          let tmpIndex = 0
          while (currNode.next !== null && currNode.next.element !== item) {
            tmpIndex += 1
            currNode = currNode.next
          }
          if (currNode !== null) {
            return tmpIndex
          } else {
            return -1
          }
        }
```

**obj.findPrev(item)**

```javascript
        function findPrev (item) {
          let currNode = this._head
          while (currNode.next !== null && currNode.next.element !== item) {
            currNode = currNode.next
          }
          if (currNode.next !== item) {
            return currNode
          } else {
            return null
          }
        }
```

**obj.insert(item,newElement)**

```javascript
        function insert (newElement, item) {
          let newNode = new Node(newElement)
          let currNode = this.find(item)
          if (currNode) {
            newNode.next = currNode.next
            currNode.next = newNode
          } else {
            console.error(`insert error：链表中不存在「${item}」节点`)
          }
        }
```

**obj.insertIndex(index,newElement)**

```javascript
        function insertIndex (newElement, index) {
          let newNode = new Node(newElement)
          let currNode = this.findIndex(index)
          if (currNode) {
            newNode.next = currNode.next
            currNode.next = newNode
          } else {
            console.error(`insertIndex error：链表中不存在「${index}」索引节点`)
          }
        }
```

**obj.push(item)**

```javascript
        function push (element) {
          let newNode = new Node(element)
          let currNode = this._head
          while (currNode.next !== null) {
            currNode = currNode.next
          }
          currNode.next = newNode
        }
```

**obj.remove(item)**

```javascript
        function remove (item) {
          // 找到当前和上一个节点，让上一个节点的next指向item下一个节点
          let tmpPrev = this.findPrev(item)
          let tmpNext = this.find(item)
          if (tmpPrev && tmpNext) {
            tmpPrev.next = tmpNext.next
          } else {
            console.error(`remove error：链表中不存在「${item}」节点`)
          }
        }
```

**obj.removeIndex(index)**

```javascript
        function removeIndex (index) {
          let tmpPrev = this.findIndex(index - 1)
          let currNode = this.findIndex(index)
          if (tmpPrev && currNode) {
            tmpPrev.next = currNode.next
          } else {
            console.error(`removeIndex error：链表中不存在「${index}」索引节点`)
          }
        }
```

**obj.size()**

```javascript
        function size () {
          let currNode = this._head
          let tmpSize = 0
          while (currNode.next !== null) {
            tmpSize += 1
            currNode = currNode.next
          }
          return tmpSize // 不计算头部节点
        }
```

**obj.display()**

```javascript
        function display () {
          // 链表展示和使用，默认头部不存在
          let currNode = this._head.next
          let tmpArr = []
          while (currNode !== null) {
            tmpArr.push(currNode)
            currNode = currNode.next
          }
          return tmpArr
        }
```

**实例测试**

```javascript
      // 运行测试
      let obj = new LinkedList('节点0', '节点1', '节点2', '节点3', '节点4', '节点5')
      console.log('---实例对象')
      console.log(obj)
      console.log('---末尾插入元素')
      obj.push('push插入')
      console.log(obj.display())
      console.log('---元素后插入元素')
      obj.insert('元素插入', '节点2')
      console.log(obj.display())
      console.log('---索引处插入元素')
      obj.insertIndex('索引插入', 5)
      console.log(obj.display())
      console.log('---查找元素位置')
      console.log(obj.find('节点4'))
      console.log('---移除元素')
      obj.remove('节点5')
      console.log(obj.display())
      console.log('---移除索引元素')
      obj.removeIndex(5)
      console.log(obj.display())
      console.log('---元素长度')
      console.log(obj.size())
      console.log('---索引查找')
      console.log(obj.findIndex(2))
      console.log('---元素查找索引')
      console.log(obj.findIndexOf('节点3'))
```

