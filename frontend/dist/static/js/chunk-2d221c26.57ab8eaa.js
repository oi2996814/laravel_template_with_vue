(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d221c26"],{cc5e:function(e,n,t){"use strict";t.r(n),t.d(n,"getInfo",function(){return r}),t.d(n,"getRoles",function(){return u}),t.d(n,"getInfoById",function(){return i}),t.d(n,"updateInfo",function(){return c}),t.d(n,"deleteInfoById",function(){return s}),t.d(n,"addInfo",function(){return d});var o=t("1c1e");function r(){return Object(o["a"])({url:"/api/roles",method:"get"})}function u(){return Object(o["a"])({url:"/api/getRoles",method:"get"})}function i(e){return Object(o["a"])({url:"/api/roles/"+e,method:"get"})}function c(e,n){return n.permissions=n.permissions.join(","),Object(o["a"])({url:"/api/roles/"+e,method:"PATCH",data:n})}function s(e){return Object(o["a"])({url:"/api/roles/"+e,method:"delete"})}function d(e){return e.permissions=e.permissions.join(","),Object(o["a"])({url:"/api/roles",method:"post",data:e})}}}]);