import { observable, computed, action, runInAction } from 'mobx';
import Http from '../tools/http';

class AppStore {
	@observable public content:any; // data列表
	@observable public loading = true;

	constructor() {
		this.content = [];
		this.loading = true;
	}

	@action.bound
	public fetchTodoAdd = async () => {
        try {
					const {content: data} = await Http.getFecth("https://www.ainemo.com/benefit/api/rest/donator/page?pageIndex=1&pageSize=10&total=0");

					runInAction("get List data", () => {
						console.log("get data", data);
						console.log("this", this);
						
						this.content = data;
						this.loading = false;
					})
					return data;
				} catch(err) {
					console.log("err: ", err);
				}
	}

	// 添加
	@action
	public AddTodo = () => {
		this.fetchTodoAdd();
	};

	@computed
	get data() {
		return this.content;
	}

	@computed
	get load() {
		return this.loading;
	}

	// 计算长度
	@computed
	get TodoListCount() {
		return this.content.length;
	}
}

export default AppStore;
