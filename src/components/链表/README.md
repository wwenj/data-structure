## 单链表

### 实现

- 通过`LinkedList`的类创建链表实例，链表下有添加，查找，删除，显示节点等方法
- 链表初始默认有一个"_head"头部节点，使用时隐藏
- 按**元素/索引** 添加、删除未找到时返回**错误**，查找未找到时返回null或-1

### 方法

**查找**

- `obj.find(item)`通过元素内容查找到该元素
- `obj.findIndex(index)`通过元素索引查找到该元素
- `obj.findIndexOf(item)`通过元素内容查找到该元素索引
- `obj.findPrev(tem)`查找item元素的上一个节点

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

