(this["webpackJsonpcode-creator"]=this["webpackJsonpcode-creator"]||[]).push([[0],{339:function(e,t,a){e.exports=a(670)},344:function(e,t,a){},670:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(4),r=a.n(c),i=(a(344),a(345),a(156)),o=a.n(i),m=(a(347),a(96)),u=a.n(m),s=(a(159),a(146)),f=a.n(s),d=a(35),p=a(63),E=(a(160),a(173),a(79),a(242),a(98),a(130),a(99),a(246),a(131),a(248),a(176),a(249),a(356),a(251),a(181),a(92)),g=a.n(E),b=(a(253),a(152)),h=a.n(b),v=(a(361),a(226)),y=a.n(v),O=(a(182),a(53)),x=a.n(O),j=(a(367),a(119)),k=a.n(j),C=(a(66),a(12)),w=a.n(C),S=(a(80),a(10)),I=a.n(S),T=a(61),A=a(9),N=(a(100),a(3)),F=a.n(N),R=(a(81),a(14)),P=a.n(R),q=a(6),z=(a(255),a(149)),L=a.n(z),V=a(148),W=a(15),M=a.n(W),_=a(332),H=a(333),J=a.n(H),B=a(334),Y=a.n(B);function D(e){return e.prefix&&e.content&&e.suffix?"(?<=".concat(e.prefix,")(").concat(e.content,"*?)(?=").concat(e.suffix,")"):""}var K=function(e){var t=e.onConfirm,a=e.prefix,c=e.content,r=e.suffix,i=Object(n.useState)({prefix:"",content:"",suffix:""}),o=Object(q.a)(i,2),m=o[0],u=o[1],s=F.a.useForm(),f=Object(q.a)(s,1)[0];return Object(n.useEffect)((function(){u({prefix:a,content:c,suffix:r}),f.setFieldsValue({prefix:a,content:c,suffix:r})}),[a,c,r]),l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("div",{style:{width:"100%",margin:"0 auto",backgroundColor:"#fff",padding:20}},l.a.createElement("h2",null,"\u89c4\u5219\u8bbe\u7f6e"),l.a.createElement(F.a,{form:f,onFinish:t,labelCol:{span:6},onValuesChange:function(e,t){return u(t)}},l.a.createElement(F.a.Item,{name:"prefix",label:"\u524d\u7f00",required:!0},l.a.createElement(I.a,{prefix:l.a.createElement("span",{style:{color:"#1890ff",fontWeight:"bold"}},"/(?<="),suffix:l.a.createElement("span",{style:{color:"#1890ff",fontWeight:"bold"}},")"),placeholder:"\u524d\u5339\u914d"})),l.a.createElement(F.a.Item,{name:"content",label:"\u5339\u914d",required:!0},l.a.createElement(I.a,{prefix:l.a.createElement("span",{style:{color:"#1890ff",fontWeight:"bold"}},"("),suffix:l.a.createElement("span",{style:{color:"#1890ff",fontWeight:"bold"}},"*?)"),placeholder:"\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u6b63\u5219\u8868\u8fbe\u5f0f"})),l.a.createElement(F.a.Item,{name:"suffix",label:"\u540e\u7f00",required:!0},l.a.createElement(I.a,{prefix:l.a.createElement("span",{style:{color:"#1890ff",fontWeight:"bold"}},"(?="),suffix:l.a.createElement("span",{style:{color:"#1890ff",fontWeight:"bold"}},")/gm"),placeholder:"\u540e\u5339\u914d"})),l.a.createElement(F.a.Item,{label:"\u9884\u89c8"},l.a.createElement("div",{style:{color:"red",textAlign:"left"}},"/(?<=".concat(m.prefix,")(").concat(m.content,"*?)(?=").concat(m.suffix,")/gm"))),l.a.createElement(F.a.Item,null,l.a.createElement(w.a,{type:"primary",htmlType:"submit"},"\u4fdd\u5b58")))))},$=L.a.TabPane;function G(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function Q(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{prefix:"{{",suffix:"}}"};if(t&&e){var l=G(t);return Object.keys(e).forEach((function(t){l=l.replace(new RegExp("".concat(n.prefix).concat(t).concat(n.suffix),"gm"),'<span class="slot-'.concat(t," ").concat(t===a?"actived-code":"",'">').concat(e[t]||" ","</span>"))})),l}return""}function U(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{prefix:"{{",suffix:"}}"},n=new Blob([X(t,e.code,a)],{type:"text/plain;charset=utf-8"});Object(_.saveAs)(n,e.name)}function X(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{prefix:"{{",suffix:"}}"},n=t;return Object.keys(e).forEach((function(t){n=n.replace(new RegExp("".concat(a.prefix).concat(t).concat(a.suffix),"gm"),e[t])})),n}var Z=function(){var e,t=Object(p.f)(),a=Object(p.g)(),c=a.name,r=a.version,i=Object(n.useState)({name:"",author:"",version:"1.0.0",description:"",files:[]}),o=Object(q.a)(i,2),m=o[0],u=o[1];Object(n.useEffect)((function(){M.a.get("/api/getPackage?name=".concat(c,"&version=").concat(r)).then((function(e){u(e.data.data)}))}),[c,r]);var s=Object(n.useState)(""),f=Object(q.a)(s,2),d=f[0],E=f[1],b=Object(n.useState)([]),v=Object(q.a)(b,2),O=v[0],j=v[1],C=Object(n.useState)([]),S=Object(q.a)(C,2),N=S[0],R=S[1],z=Object(n.useState)({prefix:"",content:"",suffix:""}),W=Object(q.a)(z,2),_=W[0],H=W[1];Object(n.useEffect)((function(){M.a.get("/api/getSetting").then((function(e){e.data?H(e.data):(P.a.error("\u672a\u8bbe\u7f6e\u89c4\u5219\uff0c\u5373\u5c06\u8df3\u8f6c\u8bbe\u7f6e\uff01"),setTimeout((function(){t.push("/settings")}),3e3))}))}),[]),Object(n.useEffect)((function(){oe(d,D(_))}),[_,d]),Object(n.useEffect)((function(){m.files.length>0&&(M.a.all(m.files.map((function(e){return M.a.get(e.template.url)}))).then(M.a.spread((function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];j(t.map((function(e,t){return{name:m.files[t].template.name,code:e.data,description:m.files[t].description}}))),te(t[0].data)})),(function(){P.a.error("\u6a21\u7248\u6587\u4ef6\u52a0\u8f7d\u5931\u8d25")})),M.a.all(m.files.map((function(e){return e.readme?M.a.get(e.readme.url):null}))).then(M.a.spread((function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];console.log(t),R(t.map((function(e,t){return e?{name:m.files[t].readme.name,content:e.data}:null})))})),(function(){P.a.error("readme\u52a0\u8f7d\u5931\u8d25")})))}),[m.files]);var B=Object(n.useState)(0),G=Object(q.a)(B,2),Z=G[0],ee=G[1];Object(n.useEffect)((function(){O&&O.length>0&&te(O[Number(Z)].code)}),[Z,O]);var te=function(e){E(e),oe(e,D(_)),setTimeout(Prism.highlightAll,0)},ae=F.a.useForm(),ne=Object(q.a)(ae,1)[0],le=Object(n.useState)([]),ce=Object(q.a)(le,2),re=ce[0],ie=ce[1],oe=function(e,t){if(e&&t)if(re[Z])ne.setFieldsValue(re[Z]);else{var a=e.match(new RegExp(t,"gm")),n=Object(A.a)(re);a?(n[Z]=function(e){var t={};return e.forEach((function(e){void 0===t[e]&&(t[e]="")})),t}(a),ne.setFieldsValue(n[Z])):(n[Z]={},ne.resetFields(),P.a.error("\u4ee3\u7801\u4e2d\u4e0d\u5b58\u5728\u63d2\u69fd\uff01")),ie(n)}},me=Object(n.useCallback)((function(e){var t=Object(A.a)(re);t[Z]=Object(T.a)({},t[Z],{},e),ie(t),ne.setFieldsValue(t[Z])}),[re,Z]),ue=Object(n.useState)(""),se=Object(q.a)(ue,2),fe=se[0],de=se[1],pe=Object(n.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).map((function(e){return l.a.createElement(F.a.Item,{name:e,key:e,label:e,required:!0},l.a.createElement(I.a,{placeholder:"\u8bf7\u8f93\u5165",onFocus:function(){return de(e)}}))}))}),[me]),Ee=Object(n.useMemo)((function(){return re.length>0?pe(re[Z]):""}),[re,pe,Z]),ge=Object(n.useState)(!1),be=Object(q.a)(ge,2),he=be[0],ve=be[1],ye=Object(n.useState)(""),Oe=Object(q.a)(ye,2),xe=Oe[0],je=Oe[1],ke=Object(n.useState)(!1),Ce=Object(q.a)(ke,2),we=Ce[0],Se=Ce[1];return l.a.createElement("div",{style:{display:"flex",height:"100%",padding:20,flex:1}},l.a.createElement(x.a,{style:{flex:1,display:"flex",flexDirection:"column",overflow:"auto"},headStyle:{flexShrink:0},title:"\u4ee3\u7801\u9884\u89c8\u533a\u57df",extra:l.a.createElement("div",null,""!==fe&&l.a.createElement(w.a,{onClick:function(){de(""),setTimeout(Prism.highlightAll,0)}},"\u4ee3\u7801\u9ad8\u4eae"),l.a.createElement(w.a,{type:"primary",onClick:function(){ve(!0),je(d)}},"\u5bfc\u5165/\u7f16\u8f91\u4ee3\u7801"),l.a.createElement(V.CopyToClipboard,{text:re.length>0&&X(re[Z],d,_),onCopy:function(){return P.a.success("\u590d\u5236\u6210\u529f")}},l.a.createElement(w.a,{type:"primary"},"\u590d\u5236\u4ee3\u7801")),l.a.createElement(w.a,{type:"primary",onClick:function(){return function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{prefix:"{{",suffix:"}}"};e.forEach((function(e,n){U(e,t[n],a)}))}(O,re,_)}},"\u5bfc\u51fa\u6a21\u7248"),l.a.createElement(w.a,{type:"primary",onClick:function(){return Se(!0)}},"\u8bbe\u7f6e\u4e34\u65f6\u89c4\u5219"))},l.a.createElement(k.a,{title:"\u57fa\u672c\u4fe1\u606f"},l.a.createElement(k.a.Item,{label:"\u4f5c\u8005"},m.author),l.a.createElement(k.a.Item,{label:"\u7248\u672c"},m.version),l.a.createElement(k.a.Item,{label:"\u7b80\u4ecb"},m.description)),O&&O.length>0&&l.a.createElement(L.a,{defaultActiveKey:String(Z),onChange:function(e){ee(Number(e))}},O.map((function(e,t){var a;return l.a.createElement($,{tab:e.name,key:String(t)},l.a.createElement("h3",null,"\u7b80\u4ecb\uff1a ",e.description||"\u6682\u65e0"),l.a.createElement("pre",{className:" language-".concat(e.name.split(".")[1])},l.a.createElement("code",{className:"language-".concat(e.name.split(".")[1]),dangerouslySetInnerHTML:{__html:re.length>0?Q(re[t],d,fe,_):""}})),N[t]&&l.a.createElement(x.a,{title:l.a.createElement("div",{style:{color:"#1890ff"}},"Readme")},l.a.createElement("div",{className:"markdown",dangerouslySetInnerHTML:{__html:Y.a.sanitize(J()((null===(a=N[t])||void 0===a?void 0:a.content)||""))}})))})))),l.a.createElement(x.a,{title:"\u3010".concat(null===(e=O[Z])||void 0===e?void 0:e.name,"\u3011\u914d\u7f6e"),style:{width:"500px",marginLeft:20},extra:l.a.createElement(w.a,{type:"primary",onClick:function(){return U(O[Z],re[Z],_)}},"\u5bfc\u51fa\u5f53\u524d\u6587\u4ef6")},l.a.createElement("div",null,l.a.createElement(F.a,{form:ne,labelCol:{span:8},onValuesChange:function(e){return me(e)}},Z>0&&l.a.createElement(F.a.Item,{label:"\u63d2\u69fd\u503c\u7ee7\u627f"},l.a.createElement(y.a,{placeholder:"\u9009\u62e9\u6a21\u7248\u63d2\u69fd\u7ee7\u627f",onSelect:function(e){return function(e){var t=re[Number(e)],a=Object(A.a)(re);a[Z]=Object(T.a)({},re[Z],{},t),ie(a),ne.setFieldsValue(a[Z])}(e)},allowClear:!0},O.map((function(e,t){return l.a.createElement(y.a.Option,{key:t,value:t,disabled:t===Z},e.name)})))),Ee))),l.a.createElement(h.a,{title:"\u4e34\u65f6\u89c4\u5219\u8bbe\u7f6e",placement:"right",width:400,closable:!1,onClose:function(){return Se(!1)},visible:we},l.a.createElement(K,Object.assign({},_,{onConfirm:function(e){Se(!1),H(e)}}))),l.a.createElement(g.a,{visible:he,title:"\u5bfc\u5165\u4ee3\u7801\u3010\u53ef\u7f16\u8f91\u3011",onOk:function(){te(xe),ve(!1)},onCancel:function(){je(""),ve(!1)}},l.a.createElement(I.a.TextArea,{onChange:function(e){var t=e.target;return je(t.value)},value:xe,allowClear:!0,autoSize:{minRows:10}})))};function ee(e){M.a.post("api/updateSetting",e).then((function(){P.a.success("\u8bbe\u7f6e\u6210\u529f")}))}var te=function(){var e=Object(n.useState)({prefix:"",content:"",suffix:""}),t=Object(q.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){M.a.get("/api/getSetting").then((function(e){c(e.data)}))}),[]),l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("div",{style:{width:"680px",margin:"0 auto",backgroundColor:"#fff",padding:20}},l.a.createElement(K,Object.assign({},a,{onConfirm:ee}))))},ae=(a(315),a(154)),ne=a.n(ae),le=a(45),ce=a(678),re=a(679),ie=a(680),oe=function(e){var t=e.value,a=e.onChange,n=Object(le.a)(e,["value","onChange"]);return l.a.createElement(ne.a,Object.assign({},n,{onChange:function(e){"uploading"!==e.file.status&&console.log(e.file,e.fileList),"done"===e.file.status?(a&&a({name:e.file.name,url:e.file.response.data.url}),P.a.success("".concat(e.file.name," file uploaded successfully"))):"error"===e.file.status&&P.a.error("".concat(e.file.name," file upload failed."))},onRemove:function(){a&&a("")}}),!t&&l.a.createElement(w.a,null,l.a.createElement(ce.a,null)," \u70b9\u51fb\u4e0a\u4f20"))},me=function(){var e=F.a.useForm(),t=Object(q.a)(e,1)[0],a=Object(p.f)(),n={name:"file",action:"/api/upload"};return l.a.createElement("div",{style:{height:"100%",overflowY:"auto",display:"flex",alignItems:"center",justifyContent:"center"}},l.a.createElement("div",{style:{width:"680px",margin:"0 auto",backgroundColor:"#fff",padding:20}},l.a.createElement("h1",{style:{textAlign:"center"}},"\u521b\u5efa\u6a21\u7248"),l.a.createElement("p",{style:{textAlign:"right"}},"\u78e8\u5200\u4e0d\u8bef\u780d\u67f4\u5de5"),l.a.createElement(F.a,{form:t,labelCol:{span:4},onFinish:function(e){console.log(e),M.a.post("/api/savePackage",e).then((function(e){e.data.success?(P.a.success("\u64cd\u4f5c\u6210\u529f\uff0c\u8df3\u8f6c\u4e2d..."),setTimeout((function(){a.push("/")}),1e3)):P.a.error(e.data.message)}))}},l.a.createElement(F.a.Item,{name:"name",label:"\u6a21\u7248\u540d",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6a21\u7248\u540d\uff01"}]},l.a.createElement(I.a,null)),l.a.createElement(F.a.Item,{name:"description",label:"\u6982\u8981"},l.a.createElement(I.a.TextArea,{autoSize:{minRows:2}})),l.a.createElement(F.a.Item,{name:"version",label:"\u7248\u672c\u53f7",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7248\u672c\u53f7\uff01"}]},l.a.createElement(I.a,null)),l.a.createElement(F.a.Item,{name:"author",label:"\u4f5c\u8005",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u4f5c\u8005\uff01"}]},l.a.createElement(I.a,null)),l.a.createElement(F.a.Item,{name:"password",label:"\u9501\u5b9a\u5bc6\u7801"},l.a.createElement(I.a,{type:"password",placeholder:"\u8f93\u5165\u5bc6\u7801\u540e\uff0c\u7f16\u8f91\u64cd\u4f5c\u9700\u8981\u5bc6\u7801\u786e\u8ba4\uff01"})),l.a.createElement(F.a.List,{name:"files"},(function(e,t){var a=t.add,c=t.remove;return l.a.createElement("div",null,e.map((function(t,a){return l.a.createElement("div",{key:t.key,className:"template-ctn"},l.a.createElement("p",{className:"template-title"},"\u6a21\u7248\u6587\u4ef6",a+1),l.a.createElement(F.a.Item,{name:[t.name,"template"],label:"\u6a21\u7248\u6587\u4ef6",rules:[{required:!0,message:"\u8bf7\u4e0a\u4f20\u6a21\u7248\uff01"}]},l.a.createElement(oe,n)),l.a.createElement(F.a.Item,{name:[t.name,"description"],label:"\u7b80\u4ecb"},l.a.createElement(I.a.TextArea,{autoSize:{minRows:2}})),l.a.createElement(F.a.Item,{name:[t.name,"readme"],label:"\u8bf4\u660e\u6587\u6863(md)"},l.a.createElement(oe,Object.assign({},n,{accept:".md"}))),e.length>1?l.a.createElement(re.a,{className:"dynamic-delete-button",style:{margin:"0 8px"},onClick:function(){c(t.name)}}):"")})),l.a.createElement(F.a.Item,{label:"\u6a21\u7248"},l.a.createElement(w.a,{type:"dashed",onClick:function(){a()},style:{width:"60%",marginTop:10}},l.a.createElement(ie.a,null)," \u6dfb\u52a0\u6a21\u7248")))})),l.a.createElement(F.a.Item,{style:{textAlign:"center"}},l.a.createElement(w.a,{type:"primary",htmlType:"submit"},"\u4fdd\u5b58")))))},ue=(a(638),a(318),a(256),a(220)),se=a.n(ue),fe=(a(254),a(217)),de=a.n(fe),pe=(a(257),a(221)),Ee=a.n(pe),ge=a(48),be=a.n(ge),he=(a(276),a(95)),ve=a(681),ye=a(682),Oe=function(){var e=Object(n.useState)([]),t=Object(q.a)(e,2),a=t[0],c=t[1],r=Object(p.f)();Object(n.useEffect)((function(){M.a.get("/api/list").then((function(e){c(e.data)}))}),[]);var i=Object(n.useState)(""),o=Object(q.a)(i,2),m=o[0],u=o[1];return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(I.a,{size:"large",style:{width:"300px",marginLeft:10},value:m,onChange:function(e){var t=e.target;return u(t.value)},placeholder:"\u8bf7\u8f93\u5165\u6a21\u7248\u540d\u641c\u7d22"})),l.a.createElement(se.a,null,a&&a.length>0?a.filter((function(e){return-1!==e.name.indexOf(m)})).map((function(e){return l.a.createElement(Ee.a,{key:e.name,xs:24,sm:24,md:12,lg:6,style:{padding:10}},l.a.createElement(x.a,{title:e.name,extra:e.version,onClick:function(){return r.push("/creator/".concat(e.name,"/").concat(e.version))},className:"package-card",actions:[l.a.createElement(ve.a,{key:"edit",onClick:function(t){t.stopPropagation(),r.push("/editPackage/".concat(e.name,"/").concat(e.version))}}),l.a.createElement(ye.a,{key:"delete",onClick:function(t){var a;t.stopPropagation(),a=e,g.a.confirm({title:"\u786e\u5b9a\u8981\u5220\u9664".concat(a.name,"\u6a21\u7248\u5417"),content:"\u5373\u5c06\u5220\u9664\u8be5\u6a21\u7248\uff0c\u5e76\u4e14\u5305\u62ec\u6240\u6709\u7684\u5386\u53f2\u7248\u672c",onOk:function(){var e=Object(he.a)(be.a.mark((function e(){var t;return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.a.post("/api/deletePackage",{name:a.name});case 2:(t=e.sent).data.success?(P.a.success("\u64cd\u4f5c\u6210\u529f"),M.a.get("/api/list").then((function(e){c(e.data)}))):P.a.error(t.data.message);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()})}})]},l.a.createElement("pre",null,e.description||"\u6682\u65e0\u7b80\u4ecb"),l.a.createElement("p",{style:{textAlign:"right"}},"\u4f5c\u8005\uff1a",e.author)))})):l.a.createElement(de.a,null)))};function xe(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{prefix:"{{",suffix:"}}"};if(t&&e){var l=t;return Object.keys(e).forEach((function(t){l=l.replace(new RegExp("".concat(n.prefix).concat(t).concat(n.suffix),"gm"),'<span class="slot-'.concat(t," ").concat(t===a?"actived-code":"",'">').concat(e[t]||" ","</span>"))})),l}return""}function je(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{prefix:"{{",suffix:"}}"},n=t;return Object.keys(e).forEach((function(t){n=n.replace(new RegExp("".concat(a.prefix).concat(t).concat(a.suffix),"gm"),e[t])})),n}var ke=function(){var e=Object(p.f)(),t=Object(n.useState)(""),a=Object(q.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)({prefix:"",content:"",suffix:""}),o=Object(q.a)(i,2),m=o[0],u=o[1];Object(n.useEffect)((function(){M.a.get("/api/getSetting").then((function(t){t.data?u(t.data):(P.a.error("\u672a\u8bbe\u7f6e\u89c4\u5219\uff0c\u5373\u5c06\u8df3\u8f6c\u8bbe\u7f6e\uff01"),setTimeout((function(){e.push("/settings")}),3e3))}))}),[]),Object(n.useEffect)((function(){s(c,D(m))}),[m,c]);var s=function(e,t){if(e&&t){var a=e.match(new RegExp(t,"gm"));a?b(function(e){var t={};return e.forEach((function(e){void 0===t[e]&&(t[e]="")})),t}(a)):P.a.error("\u4ee3\u7801\u4e2d\u4e0d\u5b58\u5728\u63d2\u69fd\uff01")}},f=Object(n.useState)({}),d=Object(q.a)(f,2),E=d[0],b=d[1],v=Object(n.useCallback)((function(e){b(Object(T.a)({},E,{},e))}),[E]),y=Object(n.useState)(""),O=Object(q.a)(y,2),j=O[0],k=O[1],C=Object(n.useCallback)((function(e){return l.a.createElement(F.a,{labelCol:{span:8},onValuesChange:function(e){return v(e)}},Object.keys(e).map((function(e){return l.a.createElement(F.a.Item,{name:e,key:e,label:e,required:!0},l.a.createElement(I.a,{placeholder:"\u8bf7\u8f93\u5165",onFocus:function(){return k(e)}}))})))}),[v]),S=Object(n.useMemo)((function(){return C(E)}),[E,C]),A=Object(n.useState)(!1),N=Object(q.a)(A,2),R=N[0],z=N[1],L=Object(n.useState)(""),W=Object(q.a)(L,2),_=W[0],H=W[1],J=Object(n.useState)(!1),B=Object(q.a)(J,2),Y=B[0],$=B[1];return l.a.createElement("div",{style:{display:"flex",height:"100%",padding:20}},l.a.createElement(x.a,{style:{flex:1},title:"\u4ee3\u7801\u9884\u89c8\u533a\u57df",extra:l.a.createElement("div",null,""!==j&&l.a.createElement(w.a,{onClick:function(){k(""),setTimeout(Prism.highlightAll,0)}},"\u4ee3\u7801\u9ad8\u4eae"),l.a.createElement(w.a,{type:"primary",onClick:function(){z(!0),H(c)}},"\u5bfc\u5165/\u7f16\u8f91\u4ee3\u7801"),l.a.createElement(V.CopyToClipboard,{text:je(E,c,m),onCopy:function(){return P.a.success("\u590d\u5236\u6210\u529f")}},l.a.createElement(w.a,{type:"primary"},"\u590d\u5236\u4ee3\u7801")),l.a.createElement(w.a,{type:"primary",onClick:function(){return $(!0)}},"\u8bbe\u7f6e\u4e34\u65f6\u89c4\u5219"))},l.a.createElement("pre",{className:" language-tsx"},l.a.createElement("code",{className:"language-tsx",dangerouslySetInnerHTML:{__html:c?xe(E,c,j,m):"\u8bf7\u5bfc\u5165\u4ee3\u7801"}}))),l.a.createElement(x.a,{title:"\u6a21\u7248\u4ee3\u7801\u914d\u7f6e",style:{width:"500px",marginLeft:20}},l.a.createElement("div",null,S)),l.a.createElement(g.a,{visible:R,title:"\u5bfc\u5165\u4ee3\u7801\u3010\u53ef\u7f16\u8f91\u3011",onOk:function(){!function(e){r(e),s(e,D(m)),setTimeout(Prism.highlightAll,0)}(_),z(!1)},onCancel:function(){H(""),z(!1)}},l.a.createElement(I.a.TextArea,{onChange:function(e){var t=e.target;return H(t.value)},value:_,allowClear:!0,autoSize:{minRows:10}})),l.a.createElement(h.a,{title:"\u4e34\u65f6\u89c4\u5219\u8bbe\u7f6e",placement:"right",width:400,closable:!1,onClose:function(){return $(!1)},visible:Y},l.a.createElement(K,Object.assign({},m,{onConfirm:function(e){$(!1),u(e)}}))))},Ce=(a(639),a(338)),we=a.n(Ce),Se=function(e){var t=e.value,a=e.onChange,n=Object(le.a)(e,["value","onChange"]);return console.log(t),l.a.createElement(ne.a,Object.assign({},n,{onChange:function(e){"uploading"!==e.file.status&&console.log(e.file,e.fileList),"done"===e.file.status?(a&&a([{name:e.file.name,url:e.file.response.data.url}]),P.a.success("".concat(e.file.name," file uploaded successfully"))):"error"===e.file.status&&P.a.error("".concat(e.file.name," file upload failed."))},onRemove:function(){a&&a([])},defaultFileList:null===t||void 0===t?void 0:t.map((function(e,t){return Object(T.a)({uid:t},e,{fileName:e.name})}))}),0===(null===t||void 0===t?void 0:t.length)&&l.a.createElement(w.a,null,l.a.createElement(ce.a,null)," \u70b9\u51fb\u4e0a\u4f20"))},Ie=function(){var e=F.a.useForm(),t=Object(q.a)(e,1)[0],a=Object(p.f)(),c=Object(n.useState)(!1),r=Object(q.a)(c,2),i=r[0],o=r[1],m=Object(p.g)(),u=m.name,s=m.version,f={name:"file",action:"/api/upload"};var d=Object(n.useState)(!1),E=Object(q.a)(d,2),g=E[0],b=E[1];return Object(n.useEffect)((function(){o(!0),M.a.get("/api/getPackage?name=".concat(u,"&version=").concat(s)).then((function(e){var a=Object(T.a)({},e.data.data);a.needPassword?b(!0):b(!1),a.files=a.files.map((function(e){return{template:e.template?[e.template]:[],description:e.description,readme:e.readme?[e.readme]:[]}})),t.setFieldsValue(a),o(!1)}))}),[u,s]),l.a.createElement("div",{style:{height:"100%",overflowY:"auto",display:"flex",alignItems:"center",justifyContent:"center"}},i?l.a.createElement(we.a,{size:"large"}):l.a.createElement("div",{style:{width:"680px",margin:"0 auto",backgroundColor:"#fff",padding:20}},l.a.createElement("p",{style:{color:"red",fontSize:12,textAlign:"center"}},"\u7f16\u8f91\u6a21\u7248\uff0c\u8bf7\u6ce8\u610f\u5347\u7ea7\u7248\u672c"),l.a.createElement(F.a,{form:t,labelCol:{span:4},onFinish:function(e){for(var t=JSON.parse(JSON.stringify(e)),n=Object(A.a)(e.files),l=0;l<n.length;l++){var c;(null===(c=n[l].template)||void 0===c?void 0:c.length)>0&&(t.files[l].template=n[l].template[0]),n[l].readme.length>0&&(t.files[l].readme=n[l].readme[0])}M.a.post("/api/savePackage",t).then((function(e){e.data.success?(P.a.success("\u64cd\u4f5c\u6210\u529f\uff0c\u8df3\u8f6c\u4e2d..."),setTimeout((function(){a.push("/")}),1e3)):P.a.error(e.data.message)}))}},l.a.createElement(F.a.Item,{name:"name",label:"\u6a21\u7248\u540d",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6a21\u7248\u540d\uff01"}]},l.a.createElement(I.a,{disabled:!0})),l.a.createElement(F.a.Item,{name:"description",label:"\u6982\u8981"},l.a.createElement(I.a.TextArea,{autoSize:{minRows:2}})),l.a.createElement(F.a.Item,{name:"version",label:"\u7248\u672c\u53f7",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7248\u672c\u53f7\uff01"}]},l.a.createElement(I.a,null)),l.a.createElement(F.a.Item,{name:"author",label:"\u4f5c\u8005",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u4f5c\u8005\uff01"}]},l.a.createElement(I.a,null)),g&&l.a.createElement(F.a.Item,{name:"password",label:"\u9501\u5b9a\u5bc6\u7801"},l.a.createElement(I.a,{type:"password",placeholder:"\u8f93\u5165\u5bc6\u7801\u540e\uff0c\u7f16\u8f91\u64cd\u4f5c\u9700\u8981\u5bc6\u7801\u786e\u8ba4\uff01"})),l.a.createElement(F.a.List,{name:"files"},(function(e,t){var a=t.add,n=t.remove;return l.a.createElement("div",null,e.map((function(t,a){return l.a.createElement("div",{key:t.key,className:"template-ctn"},l.a.createElement("p",{className:"template-title"},"\u6a21\u7248\u6587\u4ef6",a+1),l.a.createElement(F.a.Item,{name:[t.name,"template"],label:"\u6a21\u7248\u6587\u4ef6",rules:[{required:!0,message:"\u8bf7\u4e0a\u4f20\u6a21\u7248\uff01"}]},l.a.createElement(Se,f)),l.a.createElement(F.a.Item,{name:[t.name,"description"],label:"\u7b80\u4ecb"},l.a.createElement(I.a.TextArea,{autoSize:{minRows:2}})),l.a.createElement(F.a.Item,{name:[t.name,"readme"],label:"\u8bf4\u660e\u6587\u6863(md)"},l.a.createElement(Se,Object.assign({},f,{accept:".md"}))),e.length>1?l.a.createElement(re.a,{className:"dynamic-delete-button",style:{margin:"0 8px"},onClick:function(){n(t.name)}}):"")})),l.a.createElement(F.a.Item,{label:"\u6a21\u7248"},l.a.createElement(w.a,{type:"dashed",onClick:function(){a()},style:{width:"60%",marginTop:10}},l.a.createElement(ie.a,null)," \u6dfb\u52a0\u6a21\u7248")))})),l.a.createElement(F.a.Item,{style:{textAlign:"center"}},l.a.createElement(w.a,{type:"primary",htmlType:"submit"},"\u4fdd\u5b58")))))},Te=function(){return l.a.createElement(p.c,null,l.a.createElement(p.a,{exact:!0,path:"/creator/:name/:version"},l.a.createElement(Z,null)),l.a.createElement(p.a,{exact:!0,path:"/ezcode"},l.a.createElement(ke,null)),l.a.createElement(p.a,{exact:!0,path:"/settings"},l.a.createElement(te,null)),l.a.createElement(p.a,{exact:!0,path:"/upload"},l.a.createElement(me,null)),l.a.createElement(p.a,{exact:!0,path:"/editPackage/:name/:version"},l.a.createElement(Ie,null)),l.a.createElement(p.a,{exact:!0,path:"/"},l.a.createElement(Oe,null)))};var Ae=function(){return l.a.createElement(d.a,null,l.a.createElement(o.a,{style:{height:"100vh"}},l.a.createElement(o.a.Header,{className:"header"},l.a.createElement(f.a,{overlay:l.a.createElement("div",null,"design by ccc",l.a.createElement("div",null,l.a.createElement("a",{href:"mailto:vic.c2@outlook.com"},"\u54a8\u8be2/\u53cd\u9988\uff1avic.c2@outlook.com"))),placement:"bottom"},l.a.createElement("h1",{style:{color:"#fff",marginRight:60}},"\u4ee3\u7801\u751f\u6210\u5668")),l.a.createElement(u.a,{mode:"horizontal",theme:"dark"},l.a.createElement(u.a.Item,null,l.a.createElement(d.b,{to:"/"},"\u6a21\u7248\u5217\u8868")),l.a.createElement(u.a.Item,null,l.a.createElement(d.b,{to:"/ezcode"},"\u672c\u5730\u64cd\u4f5c\u53f0")),l.a.createElement(u.a.Item,null,l.a.createElement(d.b,{to:"/settings"},"\u8bbe\u7f6e")),l.a.createElement(u.a.Item,null,l.a.createElement(d.b,{to:"/upload"},"\u4e0a\u4f20\u6a21\u7248")))),l.a.createElement(o.a.Content,{style:{padding:20,textAlign:"left"}},l.a.createElement(Te,null))))};a(212),a(652),a(654),a(330),a(663),a(664),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(Ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[339,1,2]]]);
//# sourceMappingURL=main.462c2940.chunk.js.map