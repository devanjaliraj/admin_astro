(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[212],{2069:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return x}));var n=t(51),s=t(13),l=t(14),c=t(16),r=t(15),i=t(0),o=t.n(i),u=t(1093),m=t(1094),d=t(1091),p=t(1092),h=t(1095),f=t(173),b=t(1098),g=t(807),E=t(803),v=t(797),y=t(117),j=(t(27),t(819)),O=t.n(j),N=t(56),x=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(e){var l;return Object(s.a)(this,t),(l=a.call(this,e)).changeHandler1=function(e){l.setState({status:e.target.value})},l.changeHandler=function(e){l.setState(Object(n.a)({},e.target.name,e.target.value))},l.submitHandler=function(e){e.preventDefault(),y.a.post("admin/add_contactus",l.state).then((function(e){console.log(e.data),O()("Success!","Submitted SuccessFull!","success"),l.props.history.push("/app/pagesetup/contactus/contactUsList")})).catch((function(e){console.log(e)}))},l.state={name:"",email:"",msg:"",subject:""},l}return Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(u.a,null,o.a.createElement(m.a,{sm:"12"},o.a.createElement("div",null,o.a.createElement(d.a,{listTag:"div"},o.a.createElement(p.a,{href:"/analyticsDashboard",tag:"a"},"Home"),o.a.createElement(p.a,{href:"/app/pagesetup/contactus/contactUsList",tag:"a"},"Contact Us List"),o.a.createElement(p.a,{active:!0},"Add Contact Us"))))),o.a.createElement(h.a,null,o.a.createElement(u.a,{className:"m-2"},o.a.createElement(m.a,null,o.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Contact Us")),o.a.createElement(m.a,null,o.a.createElement(N.b,{render:function(e){var a=e.history;return o.a.createElement(f.a,{className:" btn btn-success float-right",onClick:function(){return a.push("/app/pagesetup/contactus/contactUsList")}},"Back")}}))),o.a.createElement(b.a,null,o.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},o.a.createElement(u.a,null,o.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(E.a,null,"Name"),o.a.createElement(v.a,{required:!0,type:"text",name:"name",placeholder:"",value:this.state.name,onChange:this.changeHandler})),o.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(E.a,null,"Email Id"),o.a.createElement(v.a,{required:!0,type:"email",name:"email",placeholder:"",value:this.state.email,onChange:this.changeHandler})),o.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(E.a,null,"Subject"),o.a.createElement(v.a,{required:!0,type:"text",name:"subject",placeholder:"",value:this.state.subject,onChange:this.changeHandler})),o.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(E.a,null,"Message"),o.a.createElement(v.a,{required:!0,type:"text",name:"msg",placeholder:"",value:this.state.msg,onChange:this.changeHandler}))),o.a.createElement(u.a,null,o.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(f.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add")))))))}}]),t}(i.Component)},797:function(e,a,t){"use strict";var n=t(5),s=t(9),l=t(11),c=t(12),r=t(0),i=t.n(r),o=t(1),u=t.n(o),m=t(4),d=t.n(m),p=t(3),h=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],f={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(l.a)(t)),t.focus=t.focus.bind(Object(l.a)(t)),t}Object(c.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.type,c=e.bsSize,r=e.valid,o=e.invalid,u=e.tag,m=e.addon,f=e.plaintext,b=e.innerRef,g=Object(s.a)(e,h),E=["radio","checkbox"].indexOf(l)>-1,v=new RegExp("\\D","g"),y=u||("select"===l||"textarea"===l?l:"input"),j="form-control";f?(j+="-plaintext",y=u||"input"):"file"===l?j+="-file":"range"===l?j+="-range":E&&(j=m?null:"form-check-input"),g.size&&v.test(g.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),c=g.size,delete g.size);var O=Object(p.mapToCssModules)(d()(a,o&&"is-invalid",r&&"is-valid",!!c&&"form-control-"+c,j),t);return("input"===y||u&&"function"===typeof u)&&(g.type=l),g.children&&!f&&"select"!==l&&"string"===typeof y&&"select"!==y&&(Object(p.warnOnce)('Input with a type of "'+l+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),i.a.createElement(y,Object(n.a)({},g,{ref:b,className:O,"aria-invalid":o}))},a}(i.a.Component);b.propTypes=f,b.defaultProps={type:"text"},a.a=b}}]);
//# sourceMappingURL=212.e1a4ec31.chunk.js.map