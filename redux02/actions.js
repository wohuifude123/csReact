/*
 * action 类型
 */

// 是为了后面在 reducer中可以匹配到对应到 type
export const ADD_TODO = 'ADD_TODO';

/*
 * 其它的常量
 */

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action 创建函数
 */

// 暴露出这个方法，其他地方可以调用这个方法去触发这个 action
export function addTodo(text) {
    return { type: ADD_TODO, text }
}

/*
    为什么 export const ADD_TODO 还要 export function addTodo

    解答：问这个问题说明你还没有搞清redux的工作原理。

    我们拿银行来做类比，首先银行会有有一个专门的地方存放，而这个存钱的地方就是redux的store。
    我们现实生活中要存钱或者取钱，肯定不能让你直接去存钱的地方拿钱吧！
    你得提交申请，银行审核通过之后，银行柜台才能帮你存钱或者取钱吧。
    这里对应redux就是，你想修改或者读取store的数据，你是不能直接操作store的，你得发起一个申请，
    这个申请就是action。发出申请之后，得有人来审核，那这个人就是reducer。
    他会判断你要做类型的事情，比如存钱还是取钱，然后再帮你去store进行相应的操作。
    知道原理之后，我们来理一下这个两个东西是干嘛的。

    ADD_TODO在这里就相当于业务类型，为什么要暴露出来，你的addTodo这个申请对应的业务类型就是ADD_TODO，
    你不暴露给reducer，reducer怎么判断要进行什么操作？

*/
