(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{823:function(e,t,l){"use strict";l.r(t);l(20),l(106),l(7);var a={name:"TEditTableDemo",data:function(){return{table:{border:!0,firstColumn:{type:"index",label:"序列"},data:[],columns:[{prop:"name",label:"姓名",minWidth:"100",configEdit:{label:"姓名",type:"input",editComponent:"el-input"}},{prop:"hobby",label:"爱好",minWidth:"180",configEdit:{label:"爱好",type:"select-arr",editComponent:"el-select",list:"hobbyList",arrLabel:"label",arrKey:"value"}},{prop:"number",label:"计数器",minWidth:"220",configEdit:{label:"计数器",type:"inputNumber",bind:{controls:!1,min:2,max:99},editComponent:"el-input-number"}},{prop:"checkbox",label:"复选框",minWidth:"220",configEdit:{label:"复选框",type:"checkbox",list:"hobbyList",editComponent:"el-checkbox-group"}}],operator:[{type:"danger",text:"删除",fun:this.del}]},listTypeInfo:{hobbyList:[{label:"吉他",value:"0"},{label:"看书",value:"1"},{label:"美剧",value:"2"},{label:"旅游",value:"3"},{label:"音乐",value:"4"}]}}},methods:{add:function(){console.log("新增");this.table.data.push({name:"",hobby:"",checkbox:[],number:0})},del:function(e,t){t.splice(e,1),console.log("删除",t,e)},save:function(e){e.some((function(e){return""===e.hobby}))?this.$message.error("爱好不能为空"):console.log("保存",e)}}},i=l(2),n=Object(i.a)(a,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"t-edit-table-demo"},[t("t-layout",{attrs:{sectionTitle:"编辑table",isShowTitle:!1}},[t("div",{staticClass:"content-main"},[t("div",{staticClass:"card-wrap"},[t("t-edit-table",{attrs:{table:this.table,listTypeInfo:this.listTypeInfo},on:{add:this.add,save:this.save}})],1)])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);