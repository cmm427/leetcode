var TreeNode = function(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// step1：根节点为空，返回 false
// step2：初始化根节点的 sum 值
// step3：判断是否是叶子节点，若是，将 sum 值存入数组中
// step4：判断左右子树，若一个非空，一个空，递归处理非空子树，若都不为空，递归处理左右子树
var hasPathSum = function(root, targetSum) {
    if (!root) {
        return false
    }
    var arr = []
    var nodeSum = function(node) {
        // 根节点，初始时没有 sum 字段
        if (typeof(node.sum) === 'undefined') {
            node.sum = node.val
        }
        if (!node.left && !node.right) {
            arr.push(node.sum)
        } else if (!node.left && node.right) {
            node.right.sum = node.sum + node.right.val
            nodeSum(node.right)
        } else if (node.left && !node.right) {
            node.left.sum = node.sum + node.left.val
            nodeSum(node.left)
        } else {
            node.left.sum = node.sum + node.left.val
            nodeSum(node.left)
            node.right.sum = node.sum + node.right.val
            nodeSum(node.right)
        }
    }
    nodeSum(root)
    return arr.includes(targetSum)
};