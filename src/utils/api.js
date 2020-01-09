import fetch from './fetch.js'

var url = '/soso/fcgi-bin/client_search_cp?ct=24&qqmusic_ver=1298&new_json=1&remoteplace=txt.yqq.song&searchid=71763345902546850&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=1&n=10&w=%E5%BC%A0%E5%AD%A6%E5%8F%8B&g_tk=1824762314&loginUin=846874551&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0'
export function fetchMusic(){
	return fetch({
		method: 'GET',
		url: url
	})
}
