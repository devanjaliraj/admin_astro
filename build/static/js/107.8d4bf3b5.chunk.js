(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[107],{2033:function(e,t,a){"use strict";a.r(t),a.d(t,"EditProduct",(function(){return P}));var n=a(825),r=a(51),l=a(13),o=a(14),s=a(16),c=a(15),i=a(0),m=a.n(i),d=a(1095),u=a(1093),p=a(1094),g=a(173),f=a(1098),h=a(807),b=a(803),v=a(797),E=a(783),y=a(117),N=(a(804),a(56)),C=a(794),O=a(849),S=a.n(O),j=a(834),w=a(835),P=(a(837),a(805),a(898),function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(e){var o;return Object(l.a)(this,a),(o=t.call(this,e)).onChangeHandler=function(e){o.setState({selectedFile:e.target.files[0]}),o.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},o.onChangeHandler=function(e){o.setState({selectedFile:e.target.files}),o.setState({selectedName:e.target.files.name}),console.log(e.target.files)},o.uploadImageCallBack=function(e){return new Promise((function(t,a){var n=new XMLHttpRequest;n.open("POST","https://api.imgur.com/3/image"),n.setRequestHeader("Authorization","Client-ID 7e1c3e366d22aa3");var r=new FormData;r.append("image",e),n.send(r),n.addEventListener("load",(function(){var e=JSON.parse(n.responseText);t(e)})),n.addEventListener("error",(function(){var e=JSON.parse(n.responseText);a(e)}))}))},o.onEditorStateChange=function(e){o.setState({editorState:e,desc:S()(Object(w.convertToRaw)(e.getCurrentContent()))})},o.changeHandler1=function(e){o.setState({status:e.target.value})},o.changeHandler=function(e){o.setState(Object(r.a)({},e.target.name,e.target.value))},o.changeHandler1=function(e){o.setState({status:e.target.value})},o.changeHandler=function(e){o.setState(Object(r.a)({},e.target.name,e.target.value))},o.submitHandler=function(e){e.preventDefault(),console.log(o.props.match.params,o.state);var t=new FormData;t.append("title",o.state.title),t.append("productname",o.state.productname),t.append("category",o.state.category),t.append("desc",o.state.desc),t.append("price",o.state.price),t.append("limit",o.state.limit),t.append("status",o.state.status),null!==o.state.selectedFile&&t.append("image",o.state.selectedFile,o.state.selectedName);var a,r=Object(n.a)(t.values());try{for(r.s();!(a=r.n()).done;){var l=a.value;console.log(l)}}catch(d){r.e(d)}finally{r.f()}var s,c=Object(n.a)(t.keys());try{for(c.s();!(s=c.n()).done;){var i=s.value;console.log(i)}}catch(d){c.e(d)}finally{c.f()}var m=o.props.match.params.id;y.a.post("/admin/editproduct/".concat(m),t).then((function(e){console.log(e),o.props.history.push("/app/productmanager/product/productList")})).catch((function(e){console.log(e)}))},o.state={title:"",productname:"",category:"",image:"",desc:"",price:"",limit:"",selectedFile:void 0,selectedName:"",status:"",editorState:w.EditorState.createEmpty()},o.state={categoryP:[]},o}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;y.a.get("/admin/getproductcalegory").then((function(t){console.log(t),e.setState({categoryP:t.data.data})})).catch((function(e){console.log(e)})),console.log(this.props.match.params);var t=this.props.match.params.id;y.a.get("admin/viewoneProduct/".concat(t)).then((function(t){console.log(t),e.setState({title:t.data.data.title,productname:t.data.data.productname,category:t.data.data.category,image:t.data.data.image,desc:t.data.data.desc,price:t.data.data.price,limit:t.data.data.limit,status:t.data.data.status})}))}},{key:"render",value:function(){var e,t=this;return m.a.createElement("div",null,m.a.createElement(C.a,{breadCrumbTitle:"Edit Product",breadCrumbParent:" Product Management",breadCrumbActive:"Edit Product"}),m.a.createElement(d.a,null,m.a.createElement(u.a,{className:"m-2"},m.a.createElement(p.a,null,m.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Product")),m.a.createElement(p.a,null,m.a.createElement(N.b,{render:function(e){var t=e.history;return m.a.createElement(g.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/customer/customerList")}},"Back")}}))),m.a.createElement(f.a,null,m.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},m.a.createElement(u.a,null,m.a.createElement(p.a,{lg:"4",md:"4",sm:"4",className:"mb-2"},m.a.createElement(b.a,null,"Product Title"),m.a.createElement(v.a,{required:!0,type:"text",name:"title",placeholder:"Enter Title",value:this.state.title,onChange:this.changeHandler})),m.a.createElement(p.a,{lg:"4",md:"4",sm:"4",className:"mb-2"},m.a.createElement(b.a,null,"Product Name"),m.a.createElement(v.a,{required:!0,type:"text",name:"productname",placeholder:"Enter Title",value:this.state.productname,onChange:this.changeHandler})),m.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(b.a,null,"Product Category"),m.a.createElement(E.a,{type:"select",name:"category",value:this.state.category,onChange:this.changeHandler},m.a.createElement("option",null,"Select Product Category"),null===(e=this.state.categoryP)||void 0===e?void 0:e.map((function(e){return m.a.createElement("option",{value:null===e||void 0===e?void 0:e._id,key:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.name)})))),m.a.createElement(p.a,{lg:"4",md:"4",sm:"4",className:"mb-2"},m.a.createElement(b.a,null,"Price(MRP)"),m.a.createElement(v.a,{required:!0,type:"number",name:"price",placeholder:"Enter price",value:this.state.price,onChange:this.changeHandler})),m.a.createElement(p.a,{lg:"4",md:"4",sm:"4",className:"mb-2"},m.a.createElement(b.a,null,"limit"),m.a.createElement(v.a,{required:!0,type:"number",name:"limit",placeholder:"Enter limit",value:this.state.limit,onChange:this.changeHandler})),m.a.createElement(p.a,{lg:"4",md:"4",sm:"4",className:"mb-2"},m.a.createElement(b.a,null,"Thumnail Image"),m.a.createElement(b.a,null,"Image"),m.a.createElement(E.a,{type:"file",onChange:this.onChangeHandler})),m.a.createElement(p.a,{lg:"12",md:"12",sm:"12",className:"mb-2"},m.a.createElement(b.a,null,"Description"),m.a.createElement("br",null),m.a.createElement(j.Editor,{wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",onEditorStateChange:this.onEditorStateChange,toolbar:{inline:{inDropdown:!0},list:{inDropdown:!0},textAlign:{inDropdown:!0},link:{inDropdown:!0},history:{inDropdown:!0},image:{uploadCallback:this.uploadImageCallBack,previewImage:!0,alt:{present:!0,mandatory:!0}}}}))),m.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(b.a,{className:"mb-1"},"Status"),m.a.createElement("div",{className:"form-label-group",onChange:function(e){return t.changeHandler1(e)}},m.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),m.a.createElement("span",{style:{marginRight:"20px"}},"Active"),m.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),m.a.createElement("span",{style:{marginRight:"3px"}},"Inactive"))),m.a.createElement(u.a,null,m.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(g.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add")))))))}}]),a}(i.Component));t.default=P},803:function(e,t,a){"use strict";var n=a(5),r=a(9),l=a(0),o=a.n(l),s=a(1),c=a.n(s),i=a(4),m=a.n(i),d=a(3),u=["className","cssModule","hidden","widths","tag","check","size","for"],p=c.a.oneOfType([c.a.number,c.a.string]),g=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:p,order:p,offset:p})]),f={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:d.tagPropType,className:c.a.string,cssModule:c.a.object,xs:g,sm:g,md:g,lg:g,xl:g,widths:c.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},b=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},v=function(e){var t=e.className,a=e.cssModule,l=e.hidden,s=e.widths,c=e.tag,i=e.check,p=e.size,g=e.for,f=Object(r.a)(e,u),h=[];s.forEach((function(t,n){var r=e[t];if(delete f[t],r||""===r){var l,o=!n;if(Object(d.isObject)(r)){var s,c=o?"-":"-"+t+"-";l=b(o,t,r.size),h.push(Object(d.mapToCssModules)(m()(((s={})[l]=r.size||""===r.size,s["order"+c+r.order]=r.order||0===r.order,s["offset"+c+r.offset]=r.offset||0===r.offset,s))),a)}else l=b(o,t,r),h.push(l)}}));var v=Object(d.mapToCssModules)(m()(t,!!l&&"sr-only",!!i&&"form-check-label",!!p&&"col-form-label-"+p,h,!!h.length&&"col-form-label"),a);return o.a.createElement(c,Object(n.a)({htmlFor:g},f,{className:v}))};v.propTypes=f,v.defaultProps=h,t.a=v},805:function(e,t,a){},807:function(e,t,a){"use strict";var n=a(5),r=a(9),l=a(11),o=a(12),s=a(0),c=a.n(s),i=a(1),m=a.n(i),d=a(4),u=a.n(d),p=a(3),g=["className","cssModule","inline","tag","innerRef"],f={children:m.a.node,inline:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(l.a)(a)),a.submit=a.submit.bind(Object(l.a)(a)),a}Object(o.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,l=e.inline,o=e.tag,s=e.innerRef,i=Object(r.a)(e,g),m=Object(p.mapToCssModules)(u()(t,!!l&&"form-inline"),a);return c.a.createElement(o,Object(n.a)({},i,{ref:s,className:m}))},t}(s.Component);h.propTypes=f,h.defaultProps={tag:"form"},t.a=h},825:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(91);function r(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l,o=!0,s=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return o=e.done,e},e:function(e){s=!0,l=e},f:function(){try{o||null==r.return||r.return()}finally{if(s)throw l}}}}}}]);
//# sourceMappingURL=107.8d4bf3b5.chunk.js.map