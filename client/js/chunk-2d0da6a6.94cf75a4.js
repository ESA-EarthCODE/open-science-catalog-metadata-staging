(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0da6a6"],{"6c03":function(t,o,n){"use strict";n.r(o);var c=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("b-button",t._b({attrs:{variant:t.copyColor},on:{click:t.copy}},"b-button",t.buttonProps,!1),[n(t.copyIcon,{tag:"component"}),t._t("default")],2)},i=[],r=(n("2ca0"),n("7386")),e={name:"CopyButton",components:{BIconClipboard:r["i"],BIconClipboardCheck:r["j"]},props:{copyText:{type:String,required:!0},variant:{type:String,default:"primary"},buttonProps:{type:Object,default:function(){return{}}}},data:function(){return{copyConfirm:!1}},computed:{copyColor:function(){return this.copyConfirm?this.variant.startsWith("outline-")?"outline-success":"success":this.variant},copyIcon:function(){return this.copyConfirm?"b-icon-clipboard-check":"b-icon-clipboard"}},methods:{copy:function(){var t=this;this.copyConfirm=!0,this.$clipboard(this.copyText),setTimeout((function(){return t.copyConfirm=!1}),2500)}}},p=e,u=n("2877"),a=Object(u["a"])(p,c,i,!1,null,null,null);o["default"]=a.exports}}]);
//# sourceMappingURL=chunk-2d0da6a6.94cf75a4.js.map