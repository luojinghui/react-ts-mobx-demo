/**
 * http ajax tools
 * @authors Luo-jinghui (luojinghui424@gmail.com)
 * @date  2018-05-26 22:08:49
 */

export default class Http {
	// 基于 fetch 封装的 GET请求
	static getFecth(url) {
		return new Promise((resolve, reject) => {
			fetch(url, {
				headers: {
					'Content-type': 'application/json'
				}
			})
				.then((response) => {
					if (response.ok) {
						return response.json();
					} else {
						reject({
							status: response.status
						});
					}
				})
				.then((response) => {
					resolve(response);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}
	// 基于 fetch 封装的 POST请求
	static postFatch(url, params) {
		return new Promise((resolve, reject) => {
			fetch(url, {
				body: JSON.stringify(params),
				header: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				method: 'POST'
			})
				.then((response) => {
					if (response.ok) {
						return response.json();
					} else {
						reject({ status: response.status });
					}
				})
				.then((response) => {
					//成功返回
					resolve(response);
				})
				.catch((error) => {
					//失败返回
					reject(error);
				});
		});
	}
}
