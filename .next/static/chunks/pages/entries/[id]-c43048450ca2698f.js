(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[809],{263:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/entries/[id]",function(){return t(6430)}])},867:function(e,n,t){"use strict";t.d(n,{A:function(){return s}});var r=t(5893),o=t(9008),a=t(8377),i=t(2927),s=function(e){var n=e.title,t=void 0===n?"Traffic Task":n,s=e.children;return(0,r.jsxs)(a.Z,{sx:{flexFlow:1},children:[(0,r.jsx)(o.default,{children:(0,r.jsx)("title",{children:t})}),(0,r.jsx)(i.wp,{}),(0,r.jsx)(i.YE,{}),(0,r.jsx)(a.Z,{sx:{padding:"10px 20px"},children:s})]})}},2927:function(e,n,t){"use strict";t.d(n,{fT:function(){return O},wp:function(){return x},Tk:function(){return H},YE:function(){return S}});var r=t(5893),o=t(7294),a=t(1163),i=t(2293),s=t(155),l=t(3946),c=t(9226),d=t(122),u=t(5861),p=t(8833),f=t(9241),h=t(1664),x=function(){var e=(0,o.useContext)(f.QE).openSideMenu;(0,a.useRouter)();return(0,r.jsx)(i.Z,{position:"sticky",elevation:8,children:(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(l.Z,{size:"large",edge:"start",onClick:e,sx:{color:"#fff"},children:(0,r.jsx)(p.Z,{})}),(0,r.jsx)(c.Z,{children:(0,r.jsx)(h.default,{href:"/",passHref:!0,children:(0,r.jsx)(d.Z,{underline:"none",color:"white",children:(0,r.jsx)(u.Z,{variant:"h6",children:"brainon24 Tasks - DDH"})})})})]})})},g=t(8826),m=t(9661),Z=t(8462),b=t(891),v=t(796),j=t(9953),y=t(1519),w=t(210),C=t(6968),k=["Inbox","Starred","Send Email","Drafts"],S=function(){var e=(0,o.useContext)(f.QE),n=e.sidemenuOpen,t=e.closeSideMenu,a=new Date;return(0,r.jsx)(g.ZP,{anchor:"left",open:n,onClose:t,children:(0,r.jsxs)(c.Z,{sx:{width:250},children:[(0,r.jsx)(c.Z,{sx:{padding:"50px 0px 10px 0px"},children:(0,r.jsx)(m.Z,{style:{margin:"auto"},src:"../../public/logo.png",alt:""})}),(0,r.jsx)(Z.Z,{children:k.map((function(e,n){return(0,r.jsxs)(b.ZP,{button:!0,children:[(0,r.jsx)(v.Z,{children:n%2?(0,r.jsx)(w.Z,{}):(0,r.jsx)(C.Z,{})}),(0,r.jsx)(j.Z,{primary:e})]},e)}))}),(0,r.jsx)(y.Z,{}),(0,r.jsx)(Z.Z,{children:k.map((function(e,n){return(0,r.jsxs)(b.ZP,{button:!0,children:[(0,r.jsx)(v.Z,{children:n%2?(0,r.jsx)(w.Z,{}):(0,r.jsx)(C.Z,{})}),(0,r.jsx)(j.Z,{primary:e})]},e)}))}),(0,r.jsxs)(c.Z,{sx:{margin:"40px 0px 10px 0px"},children:[(0,r.jsx)(u.Z,{variant:"h6",style:{textAlign:"center",margin:"0px 10px"},children:" Powered By: Ing. David Diaz H. para brainon24"}),(0,r.jsxs)(u.Z,{variant:"body1",style:{textAlign:"center"},children:[a.getFullYear(),"."]})]})]})})},P=t(5113),R=t(6242),E=t(9974),F=t(4267),N=t(2023),D=t(8510),_=t(6715),I=function(e){var n=e.entry,t=(0,o.useContext)(_.Q),i=t.startDragging,s=t.endDragging,l=(0,a.useRouter)();return(0,r.jsx)(R.Z,{sx:{marginBotom:1,margin:"10px 0px",boxShadow:"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"},draggable:!0,onDragStart:function(e){e.dataTransfer.setData("text",n._id),i()},onDragEnd:function(){s()},onClick:function(){l.push("/entries/".concat(n._id))},children:(0,r.jsxs)(E.Z,{children:[(0,r.jsx)(F.Z,{children:(0,r.jsx)(u.Z,{sx:{whiteSpace:"pre-line"},children:n.description.length>60?n.description.substring(0,60)+"...":n.description})}),(0,r.jsx)(N.Z,{sx:{display:"flex",justifyContent:"end",paddingRight:2},children:(0,r.jsx)(u.Z,{variant:"body2",children:"".concat(D.s(n.createdAt))})})]})})},T=t(7759),B=t(3734),M=t.n(B),O=function(e){var n=e.status,t=(0,o.useContext)(T.te),a=t.entries,i=t.updateEntry,s=(0,o.useContext)(f.QE),l=s.isDragging,c=s.endDragging,d=(0,o.useMemo)((function(){return a.filter((function(e){return e.status===n}))}),[a]);return(0,r.jsx)("div",{onDrop:function(e){var t=e.dataTransfer.getData("text"),r=a.find((function(e){return e._id===t}));r.status=n,i(r),c()},onDragOver:function(e){e.preventDefault()},className:l?M().dragging:"",children:(0,r.jsx)(P.Z,{sx:{height:"calc(100vh - 180px)",overflow:"scroll",backgroundColor:"transparent",padding:"5px 10px"},children:(0,r.jsx)(Z.Z,{sx:{opacity:l?.2:1,transition:"all 0.3s"},children:d.map((function(e){return(0,r.jsx)(I,{entry:e},e._id)}))})})})},z=t(3758),$=t(3321),A=t(332),L=t(5147),q=t(8377),G=t(2719),H=function(){var e=(0,o.useContext)(G.t).addNewEntry,n=(0,o.useContext)(f.QE),t=n.isAddingEntry,a=n.setIsAddingEntry,i=(0,o.useState)(""),s=i[0],l=i[1],c=(0,o.useState)(!1),d=c[0],u=c[1];return(0,r.jsx)(q.Z,{sx:{marginBottom:2,paddingX:2},children:t?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(z.Z,{fullWidth:!0,sx:{marginTop:2,marginBottom:1},autoFocus:!0,multiline:!0,label:"Nueva Tarea",helperText:s.length<=1&&d&&"Ingrese un valor",error:s.length<=1&&d,value:s,onChange:function(e){l(e.target.value)},onBlur:function(){return u(!0)}}),(0,r.jsxs)(q.Z,{display:"flex",justifyContent:"space-between",children:[(0,r.jsx)($.Z,{variant:"text",onClick:function(){return a(!1)},color:"error",children:"Cancelar"}),(0,r.jsx)($.Z,{variant:"outlined",color:"secondary",endIcon:(0,r.jsx)(A.Z,{}),onClick:function(){0!==s.length&&(console.log(s),e(s),a(!1),u(!1),l(""))},children:"Guardar"})]})]}):(0,r.jsx)($.Z,{startIcon:(0,r.jsx)(L.Z,{}),fullWidth:!0,variant:"outlined",onClick:function(){return a(!0)},children:"Agregar Tarea"})})}},6430:function(e,n,t){"use strict";t.r(n),t.d(n,{EntryPage:function(){return ge},__N_SSP:function(){return xe},default:function(){return me}});var r=t(5893),o=t(7294),a=t(7462),i=t(3366),s=t(6010),l=t(7192),c=t(1496),d=t(7623),u=t(8979),p=t(6087);function f(e){return(0,u.Z)("MuiFormGroup",e)}(0,p.Z)("MuiFormGroup",["root","row","error"]);var h=t(4423),x=t(5704);const g=["className","row"],m=(0,c.ZP)("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,t.row&&n.row]}})((({ownerState:e})=>(0,a.Z)({display:"flex",flexDirection:"column",flexWrap:"wrap"},e.row&&{flexDirection:"row"})));var Z=o.forwardRef((function(e,n){const t=(0,d.Z)({props:e,name:"MuiFormGroup"}),{className:o,row:c=!1}=t,u=(0,i.Z)(t,g),p=(0,h.Z)(),Z=(0,x.Z)({props:t,muiFormControl:p,states:["error"]}),b=(0,a.Z)({},t,{row:c,error:Z.error}),v=(e=>{const{classes:n,row:t,error:r}=e,o={root:["root",t&&"row",r&&"error"]};return(0,l.Z)(o,f,n)})(b);return(0,r.jsx)(m,(0,a.Z)({className:(0,s.Z)(v.root,o),ownerState:b,ref:n},u))})),b=t(1705),v=t(2627);var j=o.createContext(void 0),y=t(7909);const w=["actions","children","defaultValue","name","onChange","value"];var C=o.forwardRef((function(e,n){const{actions:t,children:s,defaultValue:l,name:c,onChange:d,value:u}=e,p=(0,i.Z)(e,w),f=o.useRef(null),[h,x]=(0,v.Z)({controlled:u,default:l,name:"RadioGroup"});o.useImperativeHandle(t,(()=>({focus:()=>{let e=f.current.querySelector("input:not(:disabled):checked");e||(e=f.current.querySelector("input:not(:disabled)")),e&&e.focus()}})),[]);const g=(0,b.Z)(n,f),m=(0,y.Z)(c);return(0,r.jsx)(j.Provider,{value:{name:m,onChange:e=>{x(e.target.value),d&&d(e,e.target.value)},value:h},children:(0,r.jsx)(Z,(0,a.Z)({role:"radiogroup",ref:g},p,{children:s}))})})),k=t(5861),S=t(8216);function P(e){return(0,u.Z)("MuiFormControlLabel",e)}var R=(0,p.Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error"]);const E=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","value"],F=(0,c.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[{[`& .${R.label}`]:n.label},n.root,n[`labelPlacement${(0,S.Z)(t.labelPlacement)}`]]}})((({theme:e,ownerState:n})=>(0,a.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${R.disabled}`]:{cursor:"default"}},"start"===n.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===n.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===n.labelPlacement&&{flexDirection:"column",marginLeft:16},{[`& .${R.label}`]:{[`&.${R.disabled}`]:{color:e.palette.text.disabled}}})));var N=o.forwardRef((function(e,n){const t=(0,d.Z)({props:e,name:"MuiFormControlLabel"}),{className:c,componentsProps:u={},control:p,disabled:f,disableTypography:g,label:m,labelPlacement:Z="end"}=t,b=(0,i.Z)(t,E),v=(0,h.Z)();let j=f;"undefined"===typeof j&&"undefined"!==typeof p.props.disabled&&(j=p.props.disabled),"undefined"===typeof j&&v&&(j=v.disabled);const y={disabled:j};["checked","name","onChange","value","inputRef"].forEach((e=>{"undefined"===typeof p.props[e]&&"undefined"!==typeof t[e]&&(y[e]=t[e])}));const w=(0,x.Z)({props:t,muiFormControl:v,states:["error"]}),C=(0,a.Z)({},t,{disabled:j,label:m,labelPlacement:Z,error:w.error}),R=(e=>{const{classes:n,disabled:t,labelPlacement:r,error:o}=e,a={root:["root",t&&"disabled",`labelPlacement${(0,S.Z)(r)}`,o&&"error"],label:["label",t&&"disabled"]};return(0,l.Z)(a,P,n)})(C);return(0,r.jsxs)(F,(0,a.Z)({className:(0,s.Z)(R.root,c),ownerState:C,ref:n},b,{children:[o.cloneElement(p,y),m.type===k.Z||g?m:(0,r.jsx)(k.Z,(0,a.Z)({component:"span",className:R.label},u.typography,{children:m}))]}))})),D=t(1796),_=t(7739);function I(e){return(0,u.Z)("PrivateSwitchBase",e)}(0,p.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const T=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],B=(0,c.ZP)(_.Z)((({ownerState:e})=>(0,a.Z)({padding:9,borderRadius:"50%"},"start"===e.edge&&{marginLeft:"small"===e.size?-3:-12},"end"===e.edge&&{marginRight:"small"===e.size?-3:-12}))),M=(0,c.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1});var O=o.forwardRef((function(e,n){const{autoFocus:t,checked:o,checkedIcon:c,className:d,defaultChecked:u,disabled:p,disableFocusRipple:f=!1,edge:x=!1,icon:g,id:m,inputProps:Z,inputRef:b,name:j,onBlur:y,onChange:w,onFocus:C,readOnly:k,required:P,tabIndex:R,type:E,value:F}=e,N=(0,i.Z)(e,T),[D,_]=(0,v.Z)({controlled:o,default:Boolean(u),name:"SwitchBase",state:"checked"}),O=(0,h.Z)();let z=p;O&&"undefined"===typeof z&&(z=O.disabled);const $="checkbox"===E||"radio"===E,A=(0,a.Z)({},e,{checked:D,disabled:z,disableFocusRipple:f,edge:x}),L=(e=>{const{classes:n,checked:t,disabled:r,edge:o}=e,a={root:["root",t&&"checked",r&&"disabled",o&&`edge${(0,S.Z)(o)}`],input:["input"]};return(0,l.Z)(a,I,n)})(A);return(0,r.jsxs)(B,(0,a.Z)({component:"span",className:(0,s.Z)(L.root,d),centerRipple:!0,focusRipple:!f,disabled:z,tabIndex:null,role:void 0,onFocus:e=>{C&&C(e),O&&O.onFocus&&O.onFocus(e)},onBlur:e=>{y&&y(e),O&&O.onBlur&&O.onBlur(e)},ownerState:A,ref:n},N,{children:[(0,r.jsx)(M,(0,a.Z)({autoFocus:t,checked:o,defaultChecked:u,className:L.input,disabled:z,id:$&&m,name:j,onChange:e=>{if(e.nativeEvent.defaultPrevented)return;const n=e.target.checked;_(n),w&&w(e,n)},readOnly:k,ref:b,required:P,ownerState:A,tabIndex:R,type:E},"checkbox"===E&&void 0===F?{}:{value:F},Z)),D?c:g]}))})),z=t(2066),$=(0,z.Z)((0,r.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),A=(0,z.Z)((0,r.jsx)("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked");const L=(0,c.ZP)("span")({position:"relative",display:"flex"}),q=(0,c.ZP)($)({transform:"scale(1)"}),G=(0,c.ZP)(A)((({theme:e,ownerState:n})=>(0,a.Z)({left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},n.checked&&{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})})));var H=function(e){const{checked:n=!1,classes:t={},fontSize:o}=e,i=(0,a.Z)({},e,{checked:n});return(0,r.jsxs)(L,{className:t.root,ownerState:i,children:[(0,r.jsx)(q,{fontSize:o,className:t.background,ownerState:i}),(0,r.jsx)(G,{fontSize:o,className:t.dot,ownerState:i})]})},W=t(7450);function Q(e){return(0,u.Z)("MuiRadio",e)}var X=(0,p.Z)("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary"]);const Y=["checked","checkedIcon","color","icon","name","onChange","size"],V=(0,c.ZP)(O,{shouldForwardProp:e=>(0,c.FO)(e)||"classes"===e,name:"MuiRadio",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,n[`color${(0,S.Z)(t.color)}`]]}})((({theme:e,ownerState:n})=>(0,a.Z)({color:e.palette.text.secondary,"&:hover":{backgroundColor:(0,D.Fq)("default"===n.color?e.palette.action.active:e.palette[n.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==n.color&&{[`&.${X.checked}`]:{color:e.palette[n.color].main}},{[`&.${X.disabled}`]:{color:e.palette.action.disabled}})));const K=(0,r.jsx)(H,{checked:!0}),U=(0,r.jsx)(H,{});var J=o.forwardRef((function(e,n){var t,s;const c=(0,d.Z)({props:e,name:"MuiRadio"}),{checked:u,checkedIcon:p=K,color:f="primary",icon:h=U,name:x,onChange:g,size:m="medium"}=c,Z=(0,i.Z)(c,Y),b=(0,a.Z)({},c,{color:f,size:m}),v=(e=>{const{classes:n,color:t}=e,r={root:["root",`color${(0,S.Z)(t)}`]};return(0,a.Z)({},n,(0,l.Z)(r,Q,n))})(b),y=o.useContext(j);let w=u;const C=(0,W.Z)(g,y&&y.onChange);let k=x;var P,R;return y&&("undefined"===typeof w&&(P=y.value,w="object"===typeof(R=c.value)&&null!==R?P===R:String(P)===String(R)),"undefined"===typeof k&&(k=y.name)),(0,r.jsx)(V,(0,a.Z)({type:"radio",icon:o.cloneElement(h,{fontSize:null!=(t=U.props.fontSize)?t:m}),checkedIcon:o.cloneElement(p,{fontSize:null!=(s=K.props.fontSize)?s:m}),ownerState:b,classes:v,name:k,checked:w,onChange:C,ref:n},Z))})),ee=t(6886),ne=t(6242),te=t(8445),re=t(4267),oe=t(3758),ae=t(4054),ie=t(476),se=t(2023),le=t(3321),ce=t(332),de=t(867),ue=t(2719),pe=t(8510);function fe(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var he=["pending","in-progress","finished"],xe=!0,ge=function(e){var n=e.entry,t=(0,o.useContext)(ue.t).updateEntry,a=(0,o.useState)(n.description),i=a[0],s=a[1],l=(0,o.useState)(n.status),c=l[0],d=l[1],u=(0,o.useState)(!1),p=u[0],f=u[1],h=(0,o.useMemo)((function(){return i.length<=0&&p}),[i,p]);return(0,r.jsx)(de.A,{title:i.substring(0,25)+"...",children:(0,r.jsx)(ee.ZP,{container:!0,justifyContent:"center",sx:{marginTop:2},children:(0,r.jsx)(ee.ZP,{item:!0,xs:12,sm:8,md:6,children:(0,r.jsxs)(ne.Z,{children:[(0,r.jsx)(ne.Z,{children:(0,r.jsx)(te.Z,{title:"Tarea:",subheader:"".concat(pe.s(n.createdAt))})}),(0,r.jsxs)(re.Z,{children:[(0,r.jsx)(oe.Z,{sx:{marginTop:2,marginBottom:1},fullWidth:!0,placeholder:"Nueva entrada",autoFocus:!0,multiline:!0,label:"Nueva Entrada",value:i,onChange:function(e){s(e.target.value)},onBlur:function(){return f(!0)},helperText:h&&"Ingrese un valor",error:h}),(0,r.jsxs)(ae.Z,{children:[(0,r.jsx)(ie.Z,{children:"Estado:"}),(0,r.jsx)(C,{row:!0,value:c,onChange:function(e){console.log(e.target.value),d(e.target.value)},children:he.map((function(e){return(0,r.jsx)(N,{value:e,control:(0,r.jsx)(J,{}),label:(0,S.Z)(e)},e)}))})]})]}),(0,r.jsx)(se.Z,{children:(0,r.jsx)(le.Z,{startIcon:(0,r.jsx)(ce.Z,{}),variant:"contained",fullWidth:!0,onClick:function(){if(0!==i.trim().length){var e=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){fe(e,n,t[n])}))}return e}({},n,{status:c,description:i});t(e)}},disabled:i.length<=0,children:"Save"})})]})})})})},me=ge},8510:function(e,n,t){"use strict";t.d(n,{s:function(){return a}});var r=t(7174),o=t(3345),a=function(e){var n=(0,r.Z)(e,{locale:o.Z});return"Hace ".concat(n)}},3734:function(e){e.exports={dragging:"EntryList_dragging__vKEe7"}}},function(e){e.O(0,[258,774,888,179],(function(){return n=263,e(e.s=n);var n}));var n=e.O();_N_E=n}]);