(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[250],{2035:function(e,a,t){"use strict";t.r(a),t.d(a,"HoroscopeEdit",(function(){return H}));var n=t(51),c=t(13),o=t(14),r=t(16),l=t(15),s=t(0),i=t.n(s),m=t(1095),u=t(1093),d=t(1094),p=t(173),g=t(1098),h=t(806),E=t(804),v=t(783),y=t(797),b=t(117),f=(t(802),t(56)),C=t(794),N=(t(832),t(814)),_=t.n(N),H=function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(e){var o;return Object(c.a)(this,t),(o=a.call(this,e)).changeHandler1=function(e){o.setState({status:e.target.value})},o.changeHandler=function(e){o.setState(Object(n.a)({},e.target.name,e.target.value))},o.submitHandler=function(e){e.preventDefault();var a=o.props.match.params.id;b.a.post("admin/editComision/".concat(a),o.state).then((function(e){console.log(e),_()("Success!","Submitted SuccessFull!","success"),o.props.history.push("/app/packagemanager/Commission")})).catch((function(e){console.log(e)}))},o.state={product:"",comision_name:"",comision_rate:"",status:""},o.state={categoryList:[],productList:[]},o}return Object(o.a)(t,[{key:"componentDidUpdate",value:function(){var e=this;b.a.get("/user/productbycategory/".concat(this.state.category)).then((function(a){console.log(a.data.data),e.setState({productList:a.data.data})})).catch((function(e){console.log(e)}))}},{key:"componentDidMount",value:function(){var e=this;console.log(this.state.category),b.a.get("/admin/getproductcalegory").then((function(a){console.log(a.data.data),e.setState({categoryList:a.data.data})})).catch((function(e){console.log(e)}))}},{key:"componentDidMount1",value:function(){var e=this,a=this.props.match.params.id;b.a.get("/admin/getOneComision/".concat(a)).then((function(a){console.log(a),e.setState({product:a.data.data.product,comision_name:a.data.data.comision_name,comision_rate:a.data.data.comision_rate,status:a.data.data.status})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e,a,t=this;return i.a.createElement("div",null,i.a.createElement(C.a,{breadCrumbTitle:"Add Horoscope Category",breadCrumbParent:" home",breadCrumbActive:"Edit Horoscope Category"}),i.a.createElement(m.a,null,i.a.createElement(u.a,{className:"m-2"},i.a.createElement(d.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Horoscope")),i.a.createElement(d.a,null,i.a.createElement(f.b,{render:function(e){var a=e.history;return i.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/packagemanager/Commission")}},"Back")}}))),i.a.createElement(g.a,null,i.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(u.a,null,i.a.createElement(d.a,{lg:"4",md:"4",sm:"4",className:"mb-2"},i.a.createElement(E.a,null,"Category Name"),i.a.createElement(v.a,{required:!0,type:"select",name:"category",placeholder:"Enter Title",value:this.state.category,onChange:this.changeHandler},i.a.createElement("option",null,"Select....."),null===(e=this.state.categoryList)||void 0===e?void 0:e.map((function(e){return i.a.createElement("option",{key:e._id,value:e._id},e.name)})))),i.a.createElement(d.a,{lg:"4",md:"4",sm:"4",className:"mb-2"},i.a.createElement(E.a,null,"Product Name"),i.a.createElement(v.a,{required:!0,type:"select",name:"product",placeholder:"Enter Title",value:this.state.product,onChange:this.changeHandler},i.a.createElement("option",null,"Select....."),null===(a=this.state.productList)||void 0===a?void 0:a.map((function(e){return i.a.createElement("option",{key:e._id,value:e._id},e.productname)})))),i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(E.a,null,"Commission Name"),i.a.createElement(y.a,{required:!0,type:"text",name:"comision_name",placeholder:"Commission Name",value:this.state.comision_name,onChange:this.changeHandler})),i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(E.a,null,"Commission Rate"),i.a.createElement(y.a,{required:!0,type:"text",name:"comision_rate",placeholder:"Enter Commision Rate",value:this.state.comision_rate,onChange:this.changeHandler})),i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(E.a,{className:"mb-1"},"Status"),i.a.createElement("div",{className:"form-label-group",onChange:function(e){return t.changeHandler1(e)}},i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),i.a.createElement("span",{style:{marginRight:"20px"}},"Active"),i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),i.a.createElement("span",{style:{marginRight:"3px"}},"Inactive")))),i.a.createElement(u.a,null,i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(p.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Save")))))))}}]),t}(s.Component);a.default=H}}]);
//# sourceMappingURL=250.9c1d4015.chunk.js.map