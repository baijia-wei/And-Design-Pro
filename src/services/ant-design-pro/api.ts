// @ts-ignore
/* eslint-disable */
import { history } from 'umi';
import { extend } from 'umi-request';

// 获取toke
function getCookie(name: any) {
  var prefix = name + "="
  var start = document.cookie.indexOf(prefix)

  if (start == -1) {
    return '';
  }

  var end = document.cookie.indexOf(";", start + prefix.length)
  if (end == -1) {
    end = document.cookie.length;
  }

  var value = document.cookie.substring(start + prefix.length, end)
  return unescape(value);
}
if (getCookie("toke") === "") {
  history.push('/');
}
const request = extend({
  prefix: 'http://13.245.39.119:2018',
  timeout: 10000,
  headers: {
    'Access-Control-Request-Headers': 'Bearer ' + getCookie("toke"),
    "lang": "zh_cn",
  },
});
const requestw = extend({

});


/** 获取当前的用户 GET /api/currentUser */
export async function currentUser(options?: { [key: string]: any }) {
  return requestw<{ data: API.CurrentUser }>('/api/currentUser', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 退出登录接口 POST /api/login/outLogin */
export async function outLogin(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/login/outLogin', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 登录接口 POST /api/login/account */ //完成
export async function login(body: API.LoginParams, options?: { [key: string]: any }) {
  return request<API.LoginResult>('/security/login', {
    method: 'POST',
    params: body,
    ...(options),
  });


}

/** 此处后端没有提供注释 GET /api/notices */
export async function getNotices(options?: { [key: string]: any }) {
  return request<API.NoticeIconList>('/api/notices', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取规则列表 GET /api/rule */
export async function rule(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.RuleList>('/api/rule', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新建规则 PUT /api/rule */
export async function updateRule(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/api/rule', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** 新建规则 POST /api/rule */
export async function addRule(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/api/rule', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 删除规则 DELETE /api/rule */
export async function removeRule(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/rule', {
    method: 'DELETE',
    ...(options || {}),
  });
}



/** 删除规则 DELETE /api/rule */
export async function getgetVerifyCode(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/security/getVerifyCode', {
    method: "get",
  });
}


