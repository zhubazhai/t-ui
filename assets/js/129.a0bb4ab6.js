(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{919:function(t,e,n){"use strict";n.r(e);n(20);var i={data:function(){var t=this,e=this.$createElement;return{table:{data:[],operator:[{text:"新增",fun:this.add},{text:"编辑",fun:this.edit},{text:"删除",render:function(n,i){return e("el-popconfirm",{attrs:{title:"你确定要删除吗？"},on:{confirm:function(){return t.del(i)}}},[e("div",{slot:"reference",attrs:{type:"link"}},["删除"])])}}],operatorConfig:{fixed:"right",width:280,label:"操作"},columns:[{prop:"id",label:"序列",minWidth:80,fixed:!0},{prop:"name",label:"姓名",minWidth:120},{prop:"code",label:"code",minWidth:80},{prop:"address",label:"地址",minWidth:240},{prop:"address",label:"地址",minWidth:240},{prop:"address",label:"地址",minWidth:240},{prop:"status",label:"状态",minWidth:120}]}}},created:function(){this.initData()},methods:{initData:function(){for(var t=0;t<1e4;t++)this.table.data.push({id:t+1,code:t+1,status:"待维修"+t,name:"张三"+t,address:"广东省广东省广州市白云广东省广州市白云广州市白云区"+t})},add:function(t){console.log("新增",t)},edit:function(t){console.log("编辑",t)},del:function(t){var e=this;this.$confirm("是否永久删除该项, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){console.log("删除",t)})).catch((function(){e.$message.info("已取消删除")}))}}},a=n(2),o=Object(a.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"t-table",staticStyle:{width:"100%"}},[e("t-table",{attrs:{table:this.table,"use-virtual":"",maxHeight:400,columns:this.table.columns}})],1)}),[],!1,null,null,null);e.default=o.exports}}]);