(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[146],{2093:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return j}));var n=t(51),s=t(13),r=t(14),i=t(16),l=t(15),o=t(0),c=t.n(o),m=t(1093),u=t(1094),d=t(1091),f=t(1092),p=t(1095),b=t(173),h=t(1098),g=t(807),v=t(803),E=t(797),k=t(41),y=t.n(k),O=t(27),j=function(e){Object(i.a)(t,e);var a=Object(l.a)(t);function t(e){var r;return Object(s.a)(this,t),(r=a.call(this,e)).changeHandler1=function(e){r.setState({status:e.target.value})},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault();var a=r.props.match.params.id;y.a.post("http://3.108.185.7/nodejs/api/dealer/updateonebank/".concat(a),r.state).then((function(e){console.log(e),r.props.history.push("/app/setting/bank/bankList")})).catch((function(e){console.log(e)}))},r.state={name_of_bank:"",credit_limit_of_bank:"",intrest_rates:""},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;y.a.get("http://3.108.185.7/nodejs/api/dealer/getonebank/".concat(a)).then((function(a){console.log(a),e.setState({name_of_bank:a.data.data.name_of_bank,credit_limit_of_bank:a.data.data.credit_limit_of_bank,intrest_rates:a.data.data.intrest_rates})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(m.a,null,c.a.createElement(u.a,{sm:"12"},c.a.createElement("div",null,c.a.createElement(d.a,{listTag:"div"},c.a.createElement(f.a,{href:"/analyticsDashboard",tag:"a"},"Home"),c.a.createElement(f.a,{href:"/app/setting/bank/bankList",tag:"a"},"Bank List"),c.a.createElement(f.a,{active:!0},"Edit Bank"))))),c.a.createElement(p.a,null,c.a.createElement(m.a,{className:"m-2"},c.a.createElement(u.a,null,c.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Bank")),c.a.createElement(u.a,null,c.a.createElement(b.a,{className:" btn btn-danger float-right",onClick:function(){return O.a.push("/app/setting/bank/bankList")}},"Back"))),c.a.createElement(h.a,null,c.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},c.a.createElement(m.a,null,c.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(v.a,null,"Name of Bank"),c.a.createElement(E.a,{type:"text",name:"name_of_bank",value:this.state.name_of_bank,onChange:this.changeHandler})),c.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(v.a,null,"Credit Limit Of Bank"),c.a.createElement(E.a,{type:"number",name:"credit_limit_of_bank",value:this.state.credit_limit_of_bank,onChange:this.changeHandler})),c.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(v.a,null,"Intrest Rates"),c.a.createElement(E.a,{type:"text",name:"intrest_rates",value:this.state.intrest_rates,onChange:this.changeHandler}))),c.a.createElement(m.a,null,c.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(b.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add")))))))}}]),t}(o.Component)},797:function(e,a,t){"use strict";var n=t(5),s=t(9),r=t(11),i=t(12),l=t(0),o=t.n(l),c=t(1),m=t.n(c),u=t(4),d=t.n(u),f=t(3),p=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:f.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(i.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,i=e.bsSize,l=e.valid,c=e.invalid,m=e.tag,u=e.addon,b=e.plaintext,h=e.innerRef,g=Object(s.a)(e,p),v=["radio","checkbox"].indexOf(r)>-1,E=new RegExp("\\D","g"),k=m||("select"===r||"textarea"===r?r:"input"),y="form-control";b?(y+="-plaintext",k=m||"input"):"file"===r?y+="-file":"range"===r?y+="-range":v&&(y=u?null:"form-check-input"),g.size&&E.test(g.size)&&(Object(f.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),i=g.size,delete g.size);var O=Object(f.mapToCssModules)(d()(a,c&&"is-invalid",l&&"is-valid",!!i&&"form-control-"+i,y),t);return("input"===k||m&&"function"===typeof m)&&(g.type=r),g.children&&!b&&"select"!==r&&"string"===typeof k&&"select"!==k&&(Object(f.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),o.a.createElement(k,Object(n.a)({},g,{ref:h,className:O,"aria-invalid":c}))},a}(o.a.Component);h.propTypes=b,h.defaultProps={type:"text"},a.a=h},803:function(e,a,t){"use strict";var n=t(5),s=t(9),r=t(0),i=t.n(r),l=t(1),o=t.n(l),c=t(4),m=t.n(c),u=t(3),d=["className","cssModule","hidden","widths","tag","check","size","for"],f=o.a.oneOfType([o.a.number,o.a.string]),p=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:f,order:f,offset:f})]),b={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:u.tagPropType,className:o.a.string,cssModule:o.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:o.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,r=e.hidden,l=e.widths,o=e.tag,c=e.check,f=e.size,p=e.for,b=Object(s.a)(e,d),h=[];l.forEach((function(a,n){var s=e[a];if(delete b[a],s||""===s){var r,i=!n;if(Object(u.isObject)(s)){var l,o=i?"-":"-"+a+"-";r=g(i,a,s.size),h.push(Object(u.mapToCssModules)(m()(((l={})[r]=s.size||""===s.size,l["order"+o+s.order]=s.order||0===s.order,l["offset"+o+s.offset]=s.offset||0===s.offset,l))),t)}else r=g(i,a,s),h.push(r)}}));var v=Object(u.mapToCssModules)(m()(a,!!r&&"sr-only",!!c&&"form-check-label",!!f&&"col-form-label-"+f,h,!!h.length&&"col-form-label"),t);return i.a.createElement(o,Object(n.a)({htmlFor:p},b,{className:v}))};v.propTypes=b,v.defaultProps=h,a.a=v},807:function(e,a,t){"use strict";var n=t(5),s=t(9),r=t(11),i=t(12),l=t(0),o=t.n(l),c=t(1),m=t.n(c),u=t(4),d=t.n(u),f=t(3),p=["className","cssModule","inline","tag","innerRef"],b={children:m.a.node,inline:m.a.bool,tag:f.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(i.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,i=e.tag,l=e.innerRef,c=Object(s.a)(e,p),m=Object(f.mapToCssModules)(d()(a,!!r&&"form-inline"),t);return o.a.createElement(i,Object(n.a)({},c,{ref:l,className:m}))},a}(l.Component);h.propTypes=b,h.defaultProps={tag:"form"},a.a=h}}]);
//# sourceMappingURL=146.66d08225.chunk.js.map