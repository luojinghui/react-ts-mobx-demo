import { observable, computed, action } from 'mobx';

class AppStore {
    @observable public TODOS = [];    // todos列表
    @observable public NEWTODO = "";  // 新添加的todo
    @observable public LOADING = true;  // Table-loading
    @observable public KEY = 0;    // key
    @observable public TOTAL = 0;   // 数据量

    constructor() {
        this.KEY = 0
    }

    @action public fetchTodoAdd(){
        fetch('http://localhost/api/todos/add',{
            body: JSON.stringify({
                key: this.KEY,
            }),
            headers: {
                "Content-type":"application/json"
            },
            method:'POST'
        })
            .then((response) => {
                // console.log(response);
                response.json().then(function(data: any){
                    console.log(data);
                    /*成功添加 总数加1 添加失败 最大_key恢复原有*/
                
                }.bind(this));
            })
            .catch((err) => {
                console.log(err);
            })
    }

    // 添加
    @action public AddTodo = () => {
        this.KEY += 1;
        this.fetchTodoAdd();
    };

    // 计算长度
    @computed get TodoListCount() {
        return this.TODOS.length;
    }

}

export default AppStore;