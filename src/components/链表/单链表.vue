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
    */
    init () {
      // 创建节点类 Node
      function Node (element) {
        this.element = element
        this.next = null
      }
      // 创建单链表对象实例类
      function LinkedList () {
        this.head = new Node('head') // 链表头节点
        this.find = find
        this.insert = insert
        this.remove = remove
        this.findPrev = findPrev
        this.display = display
        // 查找函数，在链表中查找item的位置，并把它返回，未找到返回-1
        function find (item) {
          let currNode = this.head
          while (currNode !== null && currNode.element !== item) {
            currNode = currNode.next
          }
          if (currNode !== null) {
            return currNode
          } else {
            return -1
          }
        }
        // 插入节点，找到要插入到的item的节点位置，把新节点插到item后面
        function insert (newElement, item) {
          let newNode = new Node(newElement)
          let currNode = this.find(item)
          newNode.next = currNode.next
          currNode.next = newNode
        }
        // 删除节点，找到删除的位置，删除，未找到提示错误
        function remove (item) {
          // 找到当前和上一个节点，让上一个节点的next指向item下一个节点
          let tmpPrev = this.findPrev(item)
          let tmpNext = this.find(item)
          if (tmpPrev !== -1 && tmpNext !== -1) {
            tmpPrev.next = tmpNext.next
          } else {
            console.error(`remove error：链表中不存在”${item}“节点`)
          }
        }
        // 寻找目标节点item的上一个节点，未找到返回-1
        function findPrev (item) {
          let currNode = this.head
          while (currNode.next !== null && currNode.next.element !== item) {
            currNode = currNode.next
          }
          if (currNode.next !== item) {
            return currNode
          } else {
            return -1
          }
        }
        // 链表的展示
        function display () {
          let currNode = this.head
          let tmpArr = []
          while (currNode !== null) {
            tmpArr.push(currNode)
            currNode = currNode.next
          }
          return tmpArr
        }
      }
      // 运行测试
      let obj = new LinkedList()
      obj.insert('1', 'head')
      obj.insert('2', '1')
      obj.insert('3', '2')
      obj.insert('4', '3')
      obj.insert('5', '4')
      obj.insert('6', '5')
      console.log(obj.display())
      console.log(obj.find('3'))
      obj.remove('5')
      console.log(obj.display())
    }
  }
}
</script>
