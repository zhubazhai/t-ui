(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{835:function(e,l,n){"use strict";n.r(l);var t={data:function(){return{money:null,day:null,money2:null,percent:null,tel:""}},methods:{blurVal:function(e){console.log("获取输入的值",e)},blurVal1:function(e){console.log("获取输入的值1",e)},blurVal2:function(e){console.log("获取输入的值2",e)}}},o=n(2),a=Object(o.a)(t,(function(){var e=this,l=e.$createElement,n=e._self._c||l;return n("div",{staticClass:"t-input",staticStyle:{"min-height":"100px",width:"100%",padding:"10px"}},[n("div",[e._v("默认方式显示金额")]),e._v(" "),n("t-input",{attrs:{placeholder:"请输入金额"},on:{numblur:e.blurVal},model:{value:e.money,callback:function(l){e.money=l},expression:"money"}}),e._v(" "),n("div",[e._v("显示金额tip（大写）控制isTip")]),e._v(" "),n("t-input",{attrs:{placeholder:"请输入金额",isTip:""},model:{value:e.money2,callback:function(l){e.money2=l},expression:"money2"}}),e._v(" "),n("div",[e._v("显示天数")]),e._v(" "),n("t-input",{attrs:{placeholder:"请输入天数",inputType:"days",appendTitle:"天"},on:{numblur:e.blurVal1},model:{value:e.day,callback:function(l){e.day=l},expression:"day"}}),e._v(" "),n("div",[e._v("显示百分比")]),e._v(" "),n("t-input",{attrs:{placeholder:"请输入",inputType:"percent",appendTitle:"%"},model:{value:e.percent,callback:function(l){e.percent=l},expression:"percent"}}),e._v(" "),n("div",[e._v("显示电话号码")]),e._v(" "),n("t-input",{attrs:{placeholder:"请输入电话号码",isShow:!1,inputType:"tel"},on:{numblur:e.blurVal2},model:{value:e.tel,callback:function(l){e.tel=l},expression:"tel"}})],1)}),[],!1,null,null,null);l.default=a.exports}}]);