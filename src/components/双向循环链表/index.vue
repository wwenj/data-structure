<template>
  <div>单链表</div>
</template>
<script>
export default {
  mounted () {
    this.init()
  },
  methods: {
    /* 单链表实现
       通过LinkedList的类创建链表实例，链表下有添加，查找，删除，显示节点的方法
       链表初始默认有一个"_head"头部节点，链表中不显示
    */
    init () {
      // 创建节点类 Node
      function Node (element) {
        this.element = element
        this.next = null
      }
      // 创建单链表对象实例类
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
        // 查找函数，在链表中查找item的位置，并把它返回，未找到返回-1
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
        // 通过元素的索引返回该元素
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
        // 寻找目标节点item的上一个节点，未找到返回-1
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
        // 插入节点，找到要插入到的item的节点位置，把新节点插到item后面
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
        // 插入节点，新节点插到index索引下
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
        // 在链表最后一位添加元素
        function push (element) {
          let newNode = new Node(element)
          let currNode = this._head
          while (currNode.next !== null) {
            currNode = currNode.next
          }
          currNode.next = newNode
        }
        // 删除节点，找到删除的位置，删除，未找到提示错误
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
        // 删除某个索引下的节点
        function removeIndex (index) {
          let tmpPrev = this.findIndex(index - 1)
          let currNode = this.findIndex(index)
          if (tmpPrev && currNode) {
            tmpPrev.next = currNode.next
          } else {
            console.error(`removeIndex error：链表中不存在「${index}」索引节点`)
          }
        }
        // 返回链表的长度
        function size () {
          let currNode = this._head
          let tmpSize = 0
          while (currNode.next !== null) {
            tmpSize += 1
            currNode = currNode.next
          }
          return tmpSize // 不计算头部节点
        }
        // 链表的展示
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
      }
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
    }
  }
}
</script>
