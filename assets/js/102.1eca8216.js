(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{887:function(t,e,n){"use strict";n.r(e);var a={data:function(){return{table:{total:0,currentPage:1,pageSize:10,firstColumn:{type:"selection"},data:[{id:"1",date:"2019-09-25",name:"张三",status:"2",address:"广东省广州市天河区"},{id:"2",date:"2019-09-26",name:"张三1",status:"1",address:"广东省广州市天广东省广州市天河区2广东省广州市天河区2河区2"},{id:"2",date:"2019-09-26",name:"张三1",status:"1",address:"广东省广州市天广东省广州市天河区2广东省广州市天河区2河区2",canBatchAudit:!1},{id:"2",date:"2019-09-26",name:"张三1",status:"1",address:"广东省广州市天广东省广州市天河区2广东省广州市天河区2河区2"}]},columns:[{prop:"name",label:"姓名",minWidth:"100",noShowColumn:!0},{prop:"date",label:"日期",minWidth:"180",noShowColumn:!0},{prop:"address",label:"地址",minWidth:"220",noShowColumn:!0},{prop:"date1",label:"日期",minWidth:"180",noShowColumn:!0},{prop:"address2",label:"地址",minWidth:"220",noShowColumn:!0}]}},mounted:function(){console.log("TTable实例的方法",this.$refs.tableCheckbox)},methods:{selectionChange:function(t){console.log("复选框选中值",t)},cancelCheck:function(){this.$refs.tableCheckbox.clearSelection()}}},o=n(2),s=Object(o.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"t-table",staticStyle:{width:"100%"}},[e("t-table",{ref:"tableCheckbox",attrs:{columnSetting:"",table:this.table,columns:this.columns,isShowPagination:""},on:{"selection-change":this.selectionChange}}),this._v(" "),e("el-button",{attrs:{type:"danger"},on:{click:this.cancelCheck}},[this._v("取消选中")])],1)}),[],!1,null,null,null);e.default=s.exports}}]);