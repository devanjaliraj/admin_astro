(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[83],{2054:function(e,t,a){"use strict";a.r(t),a.d(t,"EditProduct",(function(){return S}));var n=a(815),r=a(51),o=a(13),c=a(14),s=a(16),l=a(15),i=a(0),u=a.n(i),d=a(1095),m=a(1093),h=a(1094),f=a(173),p=a(1098),g=a(808),y=a(806),v=a(797),E=a(783),O=a(117),b=(a(798),a(56)),T=a(794),C=a(804),R=a.n(C),N=a(824),I=a(825),S=(a(816),a(803),a(894),function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(e){var c;return Object(o.a)(this,a),(c=t.call(this,e)).onChangeHandler=function(e){c.setState({selectedFile:e.target.files[0]}),c.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},c.onChangeHandler=function(e){c.setState({selectedFile:e.target.files}),c.setState({selectedName:e.target.files.name}),console.log(e.target.files)},c.uploadImageCallBack=function(e){return new Promise((function(t,a){var n=new XMLHttpRequest;n.open("POST","https://api.imgur.com/3/image"),n.setRequestHeader("Authorization","Client-ID 7e1c3e366d22aa3");var r=new FormData;r.append("image",e),n.send(r),n.addEventListener("load",(function(){var e=JSON.parse(n.responseText);t(e)})),n.addEventListener("error",(function(){var e=JSON.parse(n.responseText);a(e)}))}))},c.onEditorStateChange=function(e){c.setState({editorState:e,desc:R()(Object(I.convertToRaw)(e.getCurrentContent()))})},c.changeHandler1=function(e){c.setState({status:e.target.value})},c.changeHandler=function(e){c.setState(Object(r.a)({},e.target.name,e.target.value))},c.changeHandler1=function(e){c.setState({status:e.target.value})},c.changeHandler=function(e){c.setState(Object(r.a)({},e.target.name,e.target.value))},c.submitHandler=function(e){e.preventDefault(),console.log(c.props.match.params,c.state);var t=new FormData;t.append("title",c.state.title),t.append("productname",c.state.productname),t.append("category",c.state.category),t.append("desc",c.state.desc),t.append("price",c.state.price),t.append("limit",c.state.limit),t.append("status",c.state.status),null!==c.state.selectedFile&&t.append("image",c.state.selectedFile,c.state.selectedName);var a,r=Object(n.a)(t.values());try{for(r.s();!(a=r.n()).done;){var o=a.value;console.log(o)}}catch(d){r.e(d)}finally{r.f()}var s,l=Object(n.a)(t.keys());try{for(l.s();!(s=l.n()).done;){var i=s.value;console.log(i)}}catch(d){l.e(d)}finally{l.f()}var u=c.props.match.params.id;O.a.post("/admin/editproduct/".concat(u),t).then((function(e){console.log(e),c.props.history.push("/app/productmanager/product/productList")})).catch((function(e){console.log(e)}))},c.state={title:"",productname:"",category:"",image:"",desc:"",price:"",limit:"",selectedFile:void 0,selectedName:"",status:"",editorState:I.EditorState.createEmpty()},c.state={categoryP:[]},c}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;O.a.get("/admin/getproductcalegory").then((function(t){console.log(t),e.setState({categoryP:t.data.data})})).catch((function(e){console.log(e)})),console.log(this.props.match.params);var t=this.props.match.params.id;O.a.get("admin/viewoneProduct/".concat(t)).then((function(t){console.log(t),e.setState({title:t.data.data.title,productname:t.data.data.productname,category:t.data.data.category,image:t.data.data.image,desc:t.data.data.desc,price:t.data.data.price,limit:t.data.data.limit,status:t.data.data.status})}))}},{key:"render",value:function(){var e,t=this;return u.a.createElement("div",null,u.a.createElement(T.a,{breadCrumbTitle:"Edit Product",breadCrumbParent:" Product Management",breadCrumbActive:"Edit Product"}),u.a.createElement(d.a,null,u.a.createElement(m.a,{className:"m-2"},u.a.createElement(h.a,null,u.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Product")),u.a.createElement(h.a,null,u.a.createElement(b.b,{render:function(e){var t=e.history;return u.a.createElement(f.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/customer/customerList")}},"Back")}}))),u.a.createElement(p.a,null,u.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},u.a.createElement(m.a,null,u.a.createElement(h.a,{lg:"4",md:"4",sm:"4",className:"mb-2"},u.a.createElement(y.a,null,"Product Title"),u.a.createElement(v.a,{required:!0,type:"text",name:"title",placeholder:"Enter Title",value:this.state.title,onChange:this.changeHandler})),u.a.createElement(h.a,{lg:"4",md:"4",sm:"4",className:"mb-2"},u.a.createElement(y.a,null,"Product Name"),u.a.createElement(v.a,{required:!0,type:"text",name:"productname",placeholder:"Enter Title",value:this.state.productname,onChange:this.changeHandler})),u.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(y.a,null,"Product Category"),u.a.createElement(E.a,{type:"select",name:"category",value:this.state.category,onChange:this.changeHandler},u.a.createElement("option",null,"Select Product Category"),null===(e=this.state.categoryP)||void 0===e?void 0:e.map((function(e){return u.a.createElement("option",{value:null===e||void 0===e?void 0:e._id,key:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.name)})))),u.a.createElement(h.a,{lg:"4",md:"4",sm:"4",className:"mb-2"},u.a.createElement(y.a,null,"Price(MRP)"),u.a.createElement(v.a,{required:!0,type:"number",name:"price",placeholder:"Enter price",value:this.state.price,onChange:this.changeHandler})),u.a.createElement(h.a,{lg:"4",md:"4",sm:"4",className:"mb-2"},u.a.createElement(y.a,null,"limit"),u.a.createElement(v.a,{required:!0,type:"number",name:"limit",placeholder:"Enter limit",value:this.state.limit,onChange:this.changeHandler})),u.a.createElement(h.a,{lg:"4",md:"4",sm:"4",className:"mb-2"},u.a.createElement(y.a,null,"Thumnail Image"),u.a.createElement(y.a,null,"Image"),u.a.createElement(E.a,{type:"file",onChange:this.onChangeHandler})),u.a.createElement(h.a,{lg:"12",md:"12",sm:"12",className:"mb-2"},u.a.createElement(y.a,null,"Description"),u.a.createElement("br",null),u.a.createElement(N.Editor,{wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",onEditorStateChange:this.onEditorStateChange,toolbar:{inline:{inDropdown:!0},list:{inDropdown:!0},textAlign:{inDropdown:!0},link:{inDropdown:!0},history:{inDropdown:!0},image:{uploadCallback:this.uploadImageCallBack,previewImage:!0,alt:{present:!0,mandatory:!0}}}}))),u.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(y.a,{className:"mb-1"},"Status"),u.a.createElement("div",{className:"form-label-group",onChange:function(e){return t.changeHandler1(e)}},u.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),u.a.createElement("span",{style:{marginRight:"20px"}},"Active"),u.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),u.a.createElement("span",{style:{marginRight:"3px"}},"Inactive"))),u.a.createElement(m.a,null,u.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(f.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add")))))))}}]),a}(i.Component));t.default=S},803:function(e,t,a){},804:function(e,t,a){e.exports=function(){"use strict";function e(e,t){if(e)for(var a in e)({}).hasOwnProperty.call(e,a)&&t(a,e[a])}var t={unstyled:"p","header-one":"h1","header-two":"h2","header-three":"h3","header-four":"h4","header-five":"h5","header-six":"h6","unordered-list-item":"ul","ordered-list-item":"ol",blockquote:"blockquote",code:"pre"};function a(e){return e&&t[e]}function n(t){var a="";return e(t,(function(e,t){t&&(a+="".concat(e,":").concat(t,";"))})),a}function r(e,t){var a={};return e.COLOR[t]&&(a.COLOR=e.COLOR[t]),e.BGCOLOR[t]&&(a.BGCOLOR=e.BGCOLOR[t]),e.FONTSIZE[t]&&(a.FONTSIZE=e.FONTSIZE[t]),e.FONTFAMILY[t]&&(a.FONTFAMILY=e.FONTFAMILY[t]),e.UNDERLINE[t]&&(a.UNDERLINE=!0),e.ITALIC[t]&&(a.ITALIC=!0),e.BOLD[t]&&(a.BOLD=!0),e.STRIKETHROUGH[t]&&(a.STRIKETHROUGH=!0),e.CODE[t]&&(a.CODE=!0),e.SUBSCRIPT[t]&&(a.SUBSCRIPT=!0),e.SUPERSCRIPT[t]&&(a.SUPERSCRIPT=!0),a}function o(e,t,a){var n=!0;return a>0&&a<e.length?t.forEach((function(t){n=n&&e[t][a]===e[t][a-1]})):n=!1,n}function c(e,t,a,n){var r=e[t];if("function"===typeof n){var o=n(r,a);if(o)return o}if("MENTION"===r.type)return'<a href="'.concat(r.data.url,'" class="wysiwyg-mention" data-mention data-value="').concat(r.data.value,'">').concat(a,"</a>");if("LINK"===r.type){var c=r.data.targetOption||"_self";return'<a href="'.concat(r.data.url,'" target="').concat(c,'">').concat(a,"</a>")}if("IMAGE"===r.type){var s=r.data.alignment;return s&&s.length?'<div style="text-align:'.concat(s,';"><img src="').concat(r.data.src,'" alt="').concat(r.data.alt,'" style="height: ').concat(r.data.height,";width: ").concat(r.data.width,'"/></div>'):'<img src="'.concat(r.data.src,'" alt="').concat(r.data.alt,'" style="height: ').concat(r.data.height,";width: ").concat(r.data.width,'"/>')}return"EMBEDDED_LINK"===r.type?'<iframe width="'.concat(r.data.width,'" height="').concat(r.data.height,'" src="').concat(r.data.src,'" frameBorder="0"></iframe>'):a}function s(e,t,a,n){var c=[],s=Array.from(e.text);if(s.length>0)for(var l,i=function(e){var t=e.text,a=e.inlineStyleRanges,n={BOLD:new Array(t.length),ITALIC:new Array(t.length),UNDERLINE:new Array(t.length),STRIKETHROUGH:new Array(t.length),CODE:new Array(t.length),SUPERSCRIPT:new Array(t.length),SUBSCRIPT:new Array(t.length),COLOR:new Array(t.length),BGCOLOR:new Array(t.length),FONTSIZE:new Array(t.length),FONTFAMILY:new Array(t.length),length:t.length};return a&&a.length>0&&a.forEach((function(e){for(var t=e.offset,a=t+e.length,r=t;r<a;r+=1)0===e.style.indexOf("color-")?n.COLOR[r]=e.style.substring(6):0===e.style.indexOf("bgcolor-")?n.BGCOLOR[r]=e.style.substring(8):0===e.style.indexOf("fontsize-")?n.FONTSIZE[r]=e.style.substring(9):0===e.style.indexOf("fontfamily-")?n.FONTFAMILY[r]=e.style.substring(11):n[e.style]&&(n[e.style][r]=!0)})),n}(e),u=a;u<n;u+=1)u!==a&&o(i,t,u)?(l.text.push(s[u]),l.end=u+1):(l={styles:r(i,u),text:[s[u]],start:u,end:u+1},c.push(l));return c}function l(t,a){var n=s(t,["BOLD","ITALIC","UNDERLINE","STRIKETHROUGH","CODE","SUPERSCRIPT","SUBSCRIPT"],a.start,a.end),r="";return n.forEach((function(t){r+=function(t){var a=t.styles,n=function(e){return e&&e.length>0?e.map((function(e){switch(e){case"\n":return"<br>";case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";default:return e}})).join(""):""}(t.text);return e(a,(function(e,t){n=function(e,t){return"BOLD"===e?"<strong>".concat(t,"</strong>"):"ITALIC"===e?"<em>".concat(t,"</em>"):"UNDERLINE"===e?"<ins>".concat(t,"</ins>"):"STRIKETHROUGH"===e?"<del>".concat(t,"</del>"):"CODE"===e?"<code>".concat(t,"</code>"):"SUPERSCRIPT"===e?"<sup>".concat(t,"</sup>"):"SUBSCRIPT"===e?"<sub>".concat(t,"</sub>"):t}(e,n)})),n}(t)})),r=function(e,t){if(e&&(e.COLOR||e.BGCOLOR||e.FONTSIZE||e.FONTFAMILY)){var a='style="';return e.COLOR&&(a+="color: ".concat(e.COLOR,";")),e.BGCOLOR&&(a+="background-color: ".concat(e.BGCOLOR,";")),e.FONTSIZE&&(a+="font-size: ".concat(e.FONTSIZE).concat(/^\d+$/.test(e.FONTSIZE)?"px":"",";")),e.FONTFAMILY&&(a+="font-family: ".concat(e.FONTFAMILY,";")),"<span ".concat(a+='"',">").concat(t,"</span>")}return t}(a.styles,r)}function i(e,t,a,n){var r=[],o=function(e,t){var a=[],n=0,r=e.entityRanges.map((function(e){return{offset:e.offset,length:e.length,key:e.key,type:"ENTITY"}}));return(r=(r=r.concat(function(e,t){var a=[];if(t)for(var n=0,r=0,o=e,c=t.trigger||"#",s=t.separator||" ";o.length>0&&r>=0;)if(o[0]===c?(r=0,n=0,o=o.substr(c.length)):(r=o.indexOf(s+c))>=0&&(o=o.substr(r+(s+c).length),n+=r+s.length),r>=0){var l=o.indexOf(s)>=0?o.indexOf(s):o.length,i=o.substr(0,l);i&&i.length>0&&a.push({offset:n,length:i.length+c.length,type:"HASHTAG"}),n+=c.length}return a}(e.text,t))).sort((function(e,t){return e.offset-t.offset}))).forEach((function(e){e.offset>n&&a.push({start:n,end:e.offset}),a.push({start:e.offset,end:e.offset+e.length,entityKey:e.key,type:e.type}),n=e.offset+e.length})),n<e.text.length&&a.push({start:n,end:e.text.length}),a}(e,a);return o.forEach((function(a,i){var u=function(e,t,a,n){var r=[];s(e,["COLOR","BGCOLOR","FONTSIZE","FONTFAMILY"],a.start,a.end).forEach((function(t){r.push(l(e,t))}));var o=r.join("");return"ENTITY"===a.type?void 0!==a.entityKey&&null!==a.entityKey&&(o=c(t,a.entityKey,o,n)):"HASHTAG"===a.type&&(o='<a href="'.concat(o,'" class="wysiwyg-hashtag">').concat(o,"</a>")),o}(e,t,a,n);0===i&&(u=function(e){if(e){for(var t=e,a=0;a<t.length&&" "===e[a];a+=1)t=t.replace(" ","&nbsp;");return t}return e}(u)),i===o.length-1&&(u=function(e){if(e){for(var t=e,a=t.length-1;a>=0&&" "===t[a];a-=1)t="".concat(t.substring(0,a),"&nbsp;").concat(t.substring(a+1));return t}return e}(u)),r.push(u)})),r.join("")}function u(e,t,r,o,c){var s,l=[],d=[];return e.forEach((function(e){var m=!1;if(s?s.type!==e.type?(l.push("</".concat(a(s.type),">\n")),l.push("<".concat(a(e.type),">\n"))):s.depth===e.depth?d&&d.length>0&&(l.push(u(d,t,r,o,c)),d=[]):(m=!0,d.push(e)):l.push("<".concat(a(e.type),">\n")),!m){l.push("<li");var h=n(e.data);h&&l.push(' style="'.concat(h,'"')),o&&l.push(' dir = "auto"'),l.push(">"),l.push(i(e,t,r,c)),l.push("</li>\n"),s=e}})),d&&d.length>0&&l.push(u(d,t,r,o,c)),l.push("</".concat(a(s.type),">\n")),l.join("")}return function(e,t,r,o){var s=[];if(e){var l=e.blocks,d=e.entityMap;if(l&&l.length>0){var m=[];if(l.forEach((function(e){if("unordered-list-item"===(f=e.type)||"ordered-list-item"===f)m.push(e);else{if(m.length>0){var l=u(m,d,t,o);s.push(l),m=[]}var h=function(e,t,r,o,s){var l=[];if(function(e){return e.entityRanges.length>0&&(void 0===(t=e.text)||null===t||0===t.length||0===t.trim().length||"atomic"===e.type);var t}(e))l.push(c(t,e.entityRanges[0].key,void 0,s));else{var u=a(e.type);if(u){l.push("<".concat(u));var d=n(e.data);d&&l.push(' style="'.concat(d,'"')),o&&l.push(' dir = "auto"'),l.push(">"),l.push(i(e,t,r,s)),l.push("</".concat(u,">"))}}return l.push("\n"),l.join("")}(e,d,t,r,o);s.push(h)}var f})),m.length>0){var h=u(m,d,t,r,o);s.push(h),m=[]}}}return s.join("")}}()},806:function(e,t,a){"use strict";var n=a(5),r=a(9),o=a(0),c=a.n(o),s=a(1),l=a.n(s),i=a(4),u=a.n(i),d=a(3),m=["className","cssModule","hidden","widths","tag","check","size","for"],h=l.a.oneOfType([l.a.number,l.a.string]),f=l.a.oneOfType([l.a.bool,l.a.string,l.a.number,l.a.shape({size:h,order:h,offset:h})]),p={children:l.a.node,hidden:l.a.bool,check:l.a.bool,size:l.a.string,for:l.a.string,tag:d.tagPropType,className:l.a.string,cssModule:l.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:l.a.array},g={tag:"label",widths:["xs","sm","md","lg","xl"]},y=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},v=function(e){var t=e.className,a=e.cssModule,o=e.hidden,s=e.widths,l=e.tag,i=e.check,h=e.size,f=e.for,p=Object(r.a)(e,m),g=[];s.forEach((function(t,n){var r=e[t];if(delete p[t],r||""===r){var o,c=!n;if(Object(d.isObject)(r)){var s,l=c?"-":"-"+t+"-";o=y(c,t,r.size),g.push(Object(d.mapToCssModules)(u()(((s={})[o]=r.size||""===r.size,s["order"+l+r.order]=r.order||0===r.order,s["offset"+l+r.offset]=r.offset||0===r.offset,s))),a)}else o=y(c,t,r),g.push(o)}}));var v=Object(d.mapToCssModules)(u()(t,!!o&&"sr-only",!!i&&"form-check-label",!!h&&"col-form-label-"+h,g,!!g.length&&"col-form-label"),a);return c.a.createElement(l,Object(n.a)({htmlFor:f},p,{className:v}))};v.propTypes=p,v.defaultProps=g,t.a=v},808:function(e,t,a){"use strict";var n=a(5),r=a(9),o=a(11),c=a(12),s=a(0),l=a.n(s),i=a(1),u=a.n(i),d=a(4),m=a.n(d),h=a(3),f=["className","cssModule","inline","tag","innerRef"],p={children:u.a.node,inline:u.a.bool,tag:h.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(o.a)(a)),a.submit=a.submit.bind(Object(o.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,o=e.inline,c=e.tag,s=e.innerRef,i=Object(r.a)(e,f),u=Object(h.mapToCssModules)(m()(t,!!o&&"form-inline"),a);return l.a.createElement(c,Object(n.a)({},i,{ref:s,className:u}))},t}(s.Component);g.propTypes=p,g.defaultProps={tag:"form"},t.a=g},815:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(91);function r(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,c=!0,s=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){s=!0,o=e},f:function(){try{c||null==r.return||r.return()}finally{if(s)throw o}}}}}}]);
//# sourceMappingURL=83.55ded439.chunk.js.map