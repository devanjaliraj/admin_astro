(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[82],{2034:function(e,a,t){"use strict";t.r(a);var l=t(13),m=t(14),c=t(16),n=t(15),s=t(0),r=t.n(s),o=t(1093),d=t(1094),i=t(1091),u=t(1092),h=t(1095),b=t(173),E=t(1098),p=t(860),g=t(27),N=(t(833),t(796),t(794),t(861)),f=t.n(N),v=t(117),y=(t(41),function(e){Object(c.a)(t,e);var a=Object(n.a)(t);function t(e){var m;return Object(l.a)(this,t),(m=a.call(this,e)).state={data:{}},m}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;v.a.get("/admin/viewoneProduct/".concat(a)).then((function(a){console.log(a.data.data),e.setState({data:a.data.data})})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){var e,a,t;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(o.a,null,r.a.createElement(d.a,{sm:"12"},r.a.createElement("div",null,r.a.createElement(i.a,{listTag:"div"},r.a.createElement(u.a,{href:"/analyticsDashboard",tag:"a"},"Product Detail"),r.a.createElement(u.a,{href:"/app/productmanager/product/productList",tag:"a"},"Product Management"),r.a.createElement(u.a,{active:!0},"Product Detail"))))),r.a.createElement(h.a,{className:"overflow-hidden app-ecommerce-details"},r.a.createElement(o.a,{className:"m-2"},r.a.createElement(d.a,null,r.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"View Product")),r.a.createElement(d.a,null,r.a.createElement(b.a,{className:" btn btn-danger float-right",onClick:function(){return g.a.push("/app/productmanager/product/productList")}},"Back"))),r.a.createElement(E.a,{className:"pb-0"},r.a.createElement(o.a,{className:"ml-4"},r.a.createElement(d.a,{sm:"9",md:"12",lg:"12"},r.a.createElement("div",{className:"users-page-view-table"},r.a.createElement(o.a,{className:"ml-4"},r.a.createElement(d.a,{sm:"9",md:"12",lg:"12"},r.a.createElement(o.a,{className:"mb-5 mt-2"},r.a.createElement(d.a,{md:"6",sm:"12",className:"mb-4"},r.a.createElement("h4",null,"Title"),r.a.createElement("h6",{className:""}," ",this.state.data.title)),r.a.createElement(d.a,{md:"6",sm:"12",className:"mb-4"},r.a.createElement("h4",null,"Product Name"),r.a.createElement("h6",{className:""}," ",this.state.data.productname)),r.a.createElement(d.a,{md:"6",sm:"12",className:"mb-4"},r.a.createElement("h4",null,"price "),r.a.createElement("h6",{className:""}," ",this.state.data.price)),r.a.createElement(d.a,{md:"6",sm:"12",className:"mb-4"},r.a.createElement("h4",null,"Category Name "),r.a.createElement("h6",{className:""}," ",null===(e=this.state.data.category)||void 0===e?void 0:e.name)),r.a.createElement(d.a,{md:"6",sm:"12",className:"mb-4"},r.a.createElement("h4",null,"Description"),r.a.createElement("h6",{className:""}," ",f()(this.state.data.desc))),r.a.createElement(d.a,{className:"pl-0",sm:"12",lg:"6"},r.a.createElement("h4",null,"Image"),r.a.createElement(p.a,{className:"d-sm-flex d-block"},r.a.createElement(p.a,{className:"mt-md-1 mt-0",left:!0},null===(a=this.state.data)||void 0===a||null===(t=a.image)||void 0===t?void 0:t.map((function(e){return r.a.createElement("img",{className:"border-black m-0",src:e,alt:"user avatar",height:"100"})}))),r.a.createElement(p.a,{body:!0}))),r.a.createElement(d.a,{md:"6",sm:"12",className:"mb-4"},r.a.createElement("h4",null,"Status"),r.a.createElement("h6",{className:""}," ",this.state.data.status))))))))))))}}]),t}(r.a.Component));a.default=y},796:function(e,a,t){},833:function(e,a,t){},860:function(e,a,t){"use strict";var l=t(5),m=t(9),c=t(0),n=t.n(c),s=t(1),r=t.n(s),o=t(4),d=t.n(o),i=t(3),u=["body","bottom","className","cssModule","heading","left","list","middle","object","right","tag","top"],h={body:r.a.bool,bottom:r.a.bool,children:r.a.node,className:r.a.string,cssModule:r.a.object,heading:r.a.bool,left:r.a.bool,list:r.a.bool,middle:r.a.bool,object:r.a.bool,right:r.a.bool,tag:i.tagPropType,top:r.a.bool},b=function(e){var a,t=e.body,c=e.bottom,s=e.className,r=e.cssModule,o=e.heading,h=e.left,b=e.list,E=e.middle,p=e.object,g=e.right,N=e.tag,f=e.top,v=Object(m.a)(e,u);a=o?"h4":v.href?"a":v.src||p?"img":b?"ul":"div";var y=N||a,j=Object(i.mapToCssModules)(d()(s,{"media-body":t,"media-heading":o,"media-left":h,"media-right":g,"media-top":f,"media-bottom":c,"media-middle":E,"media-object":p,"media-list":b,media:!t&&!o&&!h&&!g&&!f&&!c&&!E&&!p&&!b}),r);return n.a.createElement(y,Object(l.a)({},v,{className:j}))};b.propTypes=h,a.a=b},862:function(e,a){}}]);
//# sourceMappingURL=82.fb8ec237.chunk.js.map