import request from "@/utils/request";
const url = "/tables";

export function index(page = 1, pageSize = 100, searchObj = {}) {
  let params = Object.assign({}, { page, pageSize }, searchObj)
  return request({
    url: `${url}`,
    method: "get",
    params
  });
}

export function show(id, searchObj = {}) {
  let params = Object.assign({}, searchObj)
  return request({
    url: `${url}/${id}`,
    method: "get",
    params
  });
}

export function store(data) {
  return request({
    url: `${url}`,
    method: "post",
    data
  });
}

export function update(data) {
  return request({
    url: `${url}/${data.id}`,
    method: "patch",
    data
  });
}

export function destroy(id) {
  return request({
    url: `${url}/${id}`,
    method: "delete"
  });
}
