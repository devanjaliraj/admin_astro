(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[120],{2008:function(e,a,t){"use strict";t.r(a);var n=t(13),l=t(14),s=t(16),c=t(15),r=t(0),i=t.n(r),m=t(1093),o=t(1094),u=t(1091),d=t(1092),E=t(1095),f=t(173),h=t(1098),v=t(27),p=(t(833),t(796),t(117)),b=function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).state={data:{}},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;p.a.get("/user/viewoneuser/".concat(a)).then((function(a){console.log(a.data.data),e.setState({data:a.data.data})})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",null,i.a.createElement(m.a,null,i.a.createElement(o.a,{sm:"12"},i.a.createElement("div",null,i.a.createElement(u.a,{listTag:"div"},i.a.createElement(d.a,{href:"/analyticsDashboard",tag:"a"},"Home"),i.a.createElement(d.a,{href:"/app/userride/userRideList",tag:"a"},"User List"),i.a.createElement(d.a,{active:!0},"View User"))))),i.a.createElement(E.a,{className:"overflow-hidden app-ecommerce-details"},i.a.createElement(m.a,{className:"m-2"},i.a.createElement(o.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"View User")),i.a.createElement(o.a,null,i.a.createElement(f.a,{className:" btn btn-danger float-right",onClick:function(){return v.a.push("/app/user/userList")}},"Back"))),i.a.createElement(h.a,{className:"pb-0"},i.a.createElement(m.a,{className:"ml-4"},i.a.createElement(o.a,{sm:"9",md:"12",lg:"12"},i.a.createElement("div",{className:"users-page-view-table"},i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"Name"),i.a.createElement("div",{className:"text-truncate"},i.a.createElement("span",null,this.state.data.fullname))),i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"Email"),i.a.createElement("div",{className:"text-truncate"},i.a.createElement("span",null,this.state.data.email))),i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"Mobile"),i.a.createElement("div",{className:"text-truncate"},i.a.createElement("span",null,this.state.data.mobile))))))))))}}]),t}(i.a.Component);a.default=b},796:function(e,a,t){},833:function(e,a,t){}}]);
//# sourceMappingURL=120.35c5ce66.chunk.js.map