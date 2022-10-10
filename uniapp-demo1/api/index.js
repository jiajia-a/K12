// import request from '@/http/httpload.js'
import request from '../common/request/request.js'//导入http下的httpload.js
		/* 测试Api */
	export function getData(params){
		// get请求 可以拼接url或者传入数据对象 二选一
            // 传入的data对象  {ip:'121.00.00.01'}; 
			return request.get( `/xhr/globalinfo//query.json`,params);
		}
	export function postData(data){
		// 传入的data对象  {ip:'xxxxxx'};
			return request.post( `/posts`,data);
		}
		// post请求
		// postData(url,data){
		// 	 
		// 	return request.post(url,data);
		// },
		// // put请求
		// putData(url,data){
		// 	// 传入的data对象  {ip:'xxxxxx'}; 
		// 	return request.put(url,data);
		// },
		// // delete请求
		// deleteData(url,data){
		// 	// 传入的data对象  {ip:'xxxxxx'}; 
		// 	return request.delete(url,data);
		// }
	
	

