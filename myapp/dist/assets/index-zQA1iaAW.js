function s1(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function o1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var X0={exports:{}},Ac={},J0={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ua=Symbol.for("react.element"),a1=Symbol.for("react.portal"),l1=Symbol.for("react.fragment"),u1=Symbol.for("react.strict_mode"),c1=Symbol.for("react.profiler"),h1=Symbol.for("react.provider"),d1=Symbol.for("react.context"),f1=Symbol.for("react.forward_ref"),p1=Symbol.for("react.suspense"),m1=Symbol.for("react.memo"),g1=Symbol.for("react.lazy"),C_=Symbol.iterator;function _1(t){return t===null||typeof t!="object"?null:(t=C_&&t[C_]||t["@@iterator"],typeof t=="function"?t:null)}var Z0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},eE=Object.assign,tE={};function Ws(t,e,n){this.props=t,this.context=e,this.refs=tE,this.updater=n||Z0}Ws.prototype.isReactComponent={};Ws.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ws.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function nE(){}nE.prototype=Ws.prototype;function wp(t,e,n){this.props=t,this.context=e,this.refs=tE,this.updater=n||Z0}var Tp=wp.prototype=new nE;Tp.constructor=wp;eE(Tp,Ws.prototype);Tp.isPureReactComponent=!0;var R_=Array.isArray,rE=Object.prototype.hasOwnProperty,Ip={current:null},iE={key:!0,ref:!0,__self:!0,__source:!0};function sE(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)rE.call(e,r)&&!iE.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ua,type:t,key:s,ref:o,props:i,_owner:Ip.current}}function y1(t,e){return{$$typeof:Ua,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Sp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ua}function v1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var A_=/\/+/g;function Bh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?v1(""+t.key):e.toString(36)}function Jl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ua:case a1:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Bh(o,0):r,R_(i)?(n="",t!=null&&(n=t.replace(A_,"$&/")+"/"),Jl(i,e,n,"",function(c){return c})):i!=null&&(Sp(i)&&(i=y1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(A_,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",R_(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+Bh(s,a);o+=Jl(s,e,n,u,i)}else if(u=_1(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+Bh(s,a++),o+=Jl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Al(t,e,n){if(t==null)return t;var r=[],i=0;return Jl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function E1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Tt={current:null},Zl={transition:null},w1={ReactCurrentDispatcher:Tt,ReactCurrentBatchConfig:Zl,ReactCurrentOwner:Ip};function oE(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:Al,forEach:function(t,e,n){Al(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Al(t,function(){e++}),e},toArray:function(t){return Al(t,function(e){return e})||[]},only:function(t){if(!Sp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=Ws;ee.Fragment=l1;ee.Profiler=c1;ee.PureComponent=wp;ee.StrictMode=u1;ee.Suspense=p1;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=w1;ee.act=oE;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=eE({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ip.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)rE.call(e,u)&&!iE.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Ua,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:d1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:h1,_context:t},t.Consumer=t};ee.createElement=sE;ee.createFactory=function(t){var e=sE.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:f1,render:t}};ee.isValidElement=Sp;ee.lazy=function(t){return{$$typeof:g1,_payload:{_status:-1,_result:t},_init:E1}};ee.memo=function(t,e){return{$$typeof:m1,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=Zl.transition;Zl.transition={};try{t()}finally{Zl.transition=e}};ee.unstable_act=oE;ee.useCallback=function(t,e){return Tt.current.useCallback(t,e)};ee.useContext=function(t){return Tt.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return Tt.current.useDeferredValue(t)};ee.useEffect=function(t,e){return Tt.current.useEffect(t,e)};ee.useId=function(){return Tt.current.useId()};ee.useImperativeHandle=function(t,e,n){return Tt.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return Tt.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return Tt.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return Tt.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return Tt.current.useReducer(t,e,n)};ee.useRef=function(t){return Tt.current.useRef(t)};ee.useState=function(t){return Tt.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return Tt.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return Tt.current.useTransition()};ee.version="18.3.1";J0.exports=ee;var j=J0.exports;const aE=o1(j),T1=s1({__proto__:null,default:aE},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I1=j,S1=Symbol.for("react.element"),C1=Symbol.for("react.fragment"),R1=Object.prototype.hasOwnProperty,A1=I1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,k1={key:!0,ref:!0,__self:!0,__source:!0};function lE(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)R1.call(e,r)&&!k1.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:S1,type:t,key:s,ref:o,props:i,_owner:A1.current}}Ac.Fragment=C1;Ac.jsx=lE;Ac.jsxs=lE;X0.exports=Ac;var E=X0.exports,Vd={},uE={exports:{}},$t={},cE={exports:{}},hE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(W,Q){var X=W.length;W.push(Q);e:for(;0<X;){var Se=X-1>>>1,de=W[Se];if(0<i(de,Q))W[Se]=Q,W[X]=de,X=Se;else break e}}function n(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var Q=W[0],X=W.pop();if(X!==Q){W[0]=X;e:for(var Se=0,de=W.length,Oe=de>>>1;Se<Oe;){var Dn=2*(Se+1)-1,Ln=W[Dn],Mn=Dn+1,Fn=W[Mn];if(0>i(Ln,X))Mn<de&&0>i(Fn,Ln)?(W[Se]=Fn,W[Mn]=X,Se=Mn):(W[Se]=Ln,W[Dn]=X,Se=Dn);else if(Mn<de&&0>i(Fn,X))W[Se]=Fn,W[Mn]=X,Se=Mn;else break e}}return Q}function i(W,Q){var X=W.sortIndex-Q.sortIndex;return X!==0?X:W.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],d=1,f=null,m=3,C=!1,v=!1,k=!1,P=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(W){for(var Q=n(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=W)r(c),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(c)}}function b(W){if(k=!1,S(W),!v)if(n(u)!==null)v=!0,io(F);else{var Q=n(c);Q!==null&&bn(b,Q.startTime-W)}}function F(W,Q){v=!1,k&&(k=!1,w(_),_=-1),C=!0;var X=m;try{for(S(Q),f=n(u);f!==null&&(!(f.expirationTime>Q)||W&&!N());){var Se=f.callback;if(typeof Se=="function"){f.callback=null,m=f.priorityLevel;var de=Se(f.expirationTime<=Q);Q=t.unstable_now(),typeof de=="function"?f.callback=de:f===n(u)&&r(u),S(Q)}else r(u);f=n(u)}if(f!==null)var Oe=!0;else{var Dn=n(c);Dn!==null&&bn(b,Dn.startTime-Q),Oe=!1}return Oe}finally{f=null,m=X,C=!1}}var B=!1,I=null,_=-1,T=5,R=-1;function N(){return!(t.unstable_now()-R<T)}function O(){if(I!==null){var W=t.unstable_now();R=W;var Q=!0;try{Q=I(!0,W)}finally{Q?A():(B=!1,I=null)}}else B=!1}var A;if(typeof y=="function")A=function(){y(O)};else if(typeof MessageChannel<"u"){var Ht=new MessageChannel,Jr=Ht.port2;Ht.port1.onmessage=O,A=function(){Jr.postMessage(null)}}else A=function(){P(O,0)};function io(W){I=W,B||(B=!0,A())}function bn(W,Q){_=P(function(){W(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(W){W.callback=null},t.unstable_continueExecution=function(){v||C||(v=!0,io(F))},t.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<W?Math.floor(1e3/W):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(W){switch(m){case 1:case 2:case 3:var Q=3;break;default:Q=m}var X=m;m=Q;try{return W()}finally{m=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(W,Q){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var X=m;m=W;try{return Q()}finally{m=X}},t.unstable_scheduleCallback=function(W,Q,X){var Se=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?Se+X:Se):X=Se,W){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=X+de,W={id:d++,callback:Q,priorityLevel:W,startTime:X,expirationTime:de,sortIndex:-1},X>Se?(W.sortIndex=X,e(c,W),n(u)===null&&W===n(c)&&(k?(w(_),_=-1):k=!0,bn(b,X-Se))):(W.sortIndex=de,e(u,W),v||C||(v=!0,io(F))),W},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(W){var Q=m;return function(){var X=m;m=Q;try{return W.apply(this,arguments)}finally{m=X}}}})(hE);cE.exports=hE;var P1=cE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N1=j,zt=P1;function V(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var dE=new Set,sa={};function Fi(t,e){Ps(t,e),Ps(t+"Capture",e)}function Ps(t,e){for(sa[t]=e,t=0;t<e.length;t++)dE.add(e[t])}var tr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ud=Object.prototype.hasOwnProperty,x1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,k_={},P_={};function O1(t){return Ud.call(P_,t)?!0:Ud.call(k_,t)?!1:x1.test(t)?P_[t]=!0:(k_[t]=!0,!1)}function b1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function D1(t,e,n,r){if(e===null||typeof e>"u"||b1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function It(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var tt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){tt[t]=new It(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];tt[e]=new It(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){tt[t]=new It(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){tt[t]=new It(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){tt[t]=new It(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){tt[t]=new It(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){tt[t]=new It(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){tt[t]=new It(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){tt[t]=new It(t,5,!1,t.toLowerCase(),null,!1,!1)});var Cp=/[\-:]([a-z])/g;function Rp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Cp,Rp);tt[e]=new It(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Cp,Rp);tt[e]=new It(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Cp,Rp);tt[e]=new It(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){tt[t]=new It(t,1,!1,t.toLowerCase(),null,!1,!1)});tt.xlinkHref=new It("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){tt[t]=new It(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ap(t,e,n,r){var i=tt.hasOwnProperty(e)?tt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(D1(e,n,i,r)&&(n=null),r||i===null?O1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var lr=N1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,kl=Symbol.for("react.element"),ns=Symbol.for("react.portal"),rs=Symbol.for("react.fragment"),kp=Symbol.for("react.strict_mode"),jd=Symbol.for("react.profiler"),fE=Symbol.for("react.provider"),pE=Symbol.for("react.context"),Pp=Symbol.for("react.forward_ref"),Bd=Symbol.for("react.suspense"),zd=Symbol.for("react.suspense_list"),Np=Symbol.for("react.memo"),mr=Symbol.for("react.lazy"),mE=Symbol.for("react.offscreen"),N_=Symbol.iterator;function vo(t){return t===null||typeof t!="object"?null:(t=N_&&t[N_]||t["@@iterator"],typeof t=="function"?t:null)}var ke=Object.assign,zh;function bo(t){if(zh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);zh=e&&e[1]||""}return`
`+zh+t}var $h=!1;function Wh(t,e){if(!t||$h)return"";$h=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{$h=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?bo(t):""}function L1(t){switch(t.tag){case 5:return bo(t.type);case 16:return bo("Lazy");case 13:return bo("Suspense");case 19:return bo("SuspenseList");case 0:case 2:case 15:return t=Wh(t.type,!1),t;case 11:return t=Wh(t.type.render,!1),t;case 1:return t=Wh(t.type,!0),t;default:return""}}function $d(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case rs:return"Fragment";case ns:return"Portal";case jd:return"Profiler";case kp:return"StrictMode";case Bd:return"Suspense";case zd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case pE:return(t.displayName||"Context")+".Consumer";case fE:return(t._context.displayName||"Context")+".Provider";case Pp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Np:return e=t.displayName||null,e!==null?e:$d(t.type)||"Memo";case mr:e=t._payload,t=t._init;try{return $d(t(e))}catch{}}return null}function M1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $d(e);case 8:return e===kp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ur(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function gE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function F1(t){var e=gE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Pl(t){t._valueTracker||(t._valueTracker=F1(t))}function _E(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=gE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Tu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Wd(t,e){var n=e.checked;return ke({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function x_(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ur(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function yE(t,e){e=e.checked,e!=null&&Ap(t,"checked",e,!1)}function Hd(t,e){yE(t,e);var n=Ur(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?qd(t,e.type,n):e.hasOwnProperty("defaultValue")&&qd(t,e.type,Ur(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function O_(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function qd(t,e,n){(e!=="number"||Tu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Do=Array.isArray;function _s(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ur(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Gd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(V(91));return ke({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function b_(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(V(92));if(Do(n)){if(1<n.length)throw Error(V(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ur(n)}}function vE(t,e){var n=Ur(e.value),r=Ur(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function D_(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function EE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Kd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?EE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Nl,wE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Nl=Nl||document.createElement("div"),Nl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Nl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function oa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var jo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},V1=["Webkit","ms","Moz","O"];Object.keys(jo).forEach(function(t){V1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),jo[e]=jo[t]})});function TE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||jo.hasOwnProperty(t)&&jo[t]?(""+e).trim():e+"px"}function IE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=TE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var U1=ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qd(t,e){if(e){if(U1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(V(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(V(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(V(61))}if(e.style!=null&&typeof e.style!="object")throw Error(V(62))}}function Yd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xd=null;function xp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Jd=null,ys=null,vs=null;function L_(t){if(t=za(t)){if(typeof Jd!="function")throw Error(V(280));var e=t.stateNode;e&&(e=Oc(e),Jd(t.stateNode,t.type,e))}}function SE(t){ys?vs?vs.push(t):vs=[t]:ys=t}function CE(){if(ys){var t=ys,e=vs;if(vs=ys=null,L_(t),e)for(t=0;t<e.length;t++)L_(e[t])}}function RE(t,e){return t(e)}function AE(){}var Hh=!1;function kE(t,e,n){if(Hh)return t(e,n);Hh=!0;try{return RE(t,e,n)}finally{Hh=!1,(ys!==null||vs!==null)&&(AE(),CE())}}function aa(t,e){var n=t.stateNode;if(n===null)return null;var r=Oc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(V(231,e,typeof n));return n}var Zd=!1;if(tr)try{var Eo={};Object.defineProperty(Eo,"passive",{get:function(){Zd=!0}}),window.addEventListener("test",Eo,Eo),window.removeEventListener("test",Eo,Eo)}catch{Zd=!1}function j1(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Bo=!1,Iu=null,Su=!1,ef=null,B1={onError:function(t){Bo=!0,Iu=t}};function z1(t,e,n,r,i,s,o,a,u){Bo=!1,Iu=null,j1.apply(B1,arguments)}function $1(t,e,n,r,i,s,o,a,u){if(z1.apply(this,arguments),Bo){if(Bo){var c=Iu;Bo=!1,Iu=null}else throw Error(V(198));Su||(Su=!0,ef=c)}}function Vi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function PE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function M_(t){if(Vi(t)!==t)throw Error(V(188))}function W1(t){var e=t.alternate;if(!e){if(e=Vi(t),e===null)throw Error(V(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return M_(i),t;if(s===r)return M_(i),e;s=s.sibling}throw Error(V(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(V(189))}}if(n.alternate!==r)throw Error(V(190))}if(n.tag!==3)throw Error(V(188));return n.stateNode.current===n?t:e}function NE(t){return t=W1(t),t!==null?xE(t):null}function xE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=xE(t);if(e!==null)return e;t=t.sibling}return null}var OE=zt.unstable_scheduleCallback,F_=zt.unstable_cancelCallback,H1=zt.unstable_shouldYield,q1=zt.unstable_requestPaint,be=zt.unstable_now,G1=zt.unstable_getCurrentPriorityLevel,Op=zt.unstable_ImmediatePriority,bE=zt.unstable_UserBlockingPriority,Cu=zt.unstable_NormalPriority,K1=zt.unstable_LowPriority,DE=zt.unstable_IdlePriority,kc=null,An=null;function Q1(t){if(An&&typeof An.onCommitFiberRoot=="function")try{An.onCommitFiberRoot(kc,t,void 0,(t.current.flags&128)===128)}catch{}}var dn=Math.clz32?Math.clz32:J1,Y1=Math.log,X1=Math.LN2;function J1(t){return t>>>=0,t===0?32:31-(Y1(t)/X1|0)|0}var xl=64,Ol=4194304;function Lo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ru(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Lo(a):(s&=o,s!==0&&(r=Lo(s)))}else o=n&~i,o!==0?r=Lo(o):s!==0&&(r=Lo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-dn(e),i=1<<n,r|=t[n],e&=~i;return r}function Z1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function eA(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-dn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=Z1(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function tf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function LE(){var t=xl;return xl<<=1,!(xl&4194240)&&(xl=64),t}function qh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ja(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-dn(e),t[e]=n}function tA(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-dn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function bp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-dn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ce=0;function ME(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var FE,Dp,VE,UE,jE,nf=!1,bl=[],Rr=null,Ar=null,kr=null,la=new Map,ua=new Map,_r=[],nA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function V_(t,e){switch(t){case"focusin":case"focusout":Rr=null;break;case"dragenter":case"dragleave":Ar=null;break;case"mouseover":case"mouseout":kr=null;break;case"pointerover":case"pointerout":la.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ua.delete(e.pointerId)}}function wo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=za(e),e!==null&&Dp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function rA(t,e,n,r,i){switch(e){case"focusin":return Rr=wo(Rr,t,e,n,r,i),!0;case"dragenter":return Ar=wo(Ar,t,e,n,r,i),!0;case"mouseover":return kr=wo(kr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return la.set(s,wo(la.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ua.set(s,wo(ua.get(s)||null,t,e,n,r,i)),!0}return!1}function BE(t){var e=li(t.target);if(e!==null){var n=Vi(e);if(n!==null){if(e=n.tag,e===13){if(e=PE(n),e!==null){t.blockedOn=e,jE(t.priority,function(){VE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function eu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=rf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Xd=r,n.target.dispatchEvent(r),Xd=null}else return e=za(n),e!==null&&Dp(e),t.blockedOn=n,!1;e.shift()}return!0}function U_(t,e,n){eu(t)&&n.delete(e)}function iA(){nf=!1,Rr!==null&&eu(Rr)&&(Rr=null),Ar!==null&&eu(Ar)&&(Ar=null),kr!==null&&eu(kr)&&(kr=null),la.forEach(U_),ua.forEach(U_)}function To(t,e){t.blockedOn===e&&(t.blockedOn=null,nf||(nf=!0,zt.unstable_scheduleCallback(zt.unstable_NormalPriority,iA)))}function ca(t){function e(i){return To(i,t)}if(0<bl.length){To(bl[0],t);for(var n=1;n<bl.length;n++){var r=bl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Rr!==null&&To(Rr,t),Ar!==null&&To(Ar,t),kr!==null&&To(kr,t),la.forEach(e),ua.forEach(e),n=0;n<_r.length;n++)r=_r[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<_r.length&&(n=_r[0],n.blockedOn===null);)BE(n),n.blockedOn===null&&_r.shift()}var Es=lr.ReactCurrentBatchConfig,Au=!0;function sA(t,e,n,r){var i=ce,s=Es.transition;Es.transition=null;try{ce=1,Lp(t,e,n,r)}finally{ce=i,Es.transition=s}}function oA(t,e,n,r){var i=ce,s=Es.transition;Es.transition=null;try{ce=4,Lp(t,e,n,r)}finally{ce=i,Es.transition=s}}function Lp(t,e,n,r){if(Au){var i=rf(t,e,n,r);if(i===null)nd(t,e,r,ku,n),V_(t,r);else if(rA(i,t,e,n,r))r.stopPropagation();else if(V_(t,r),e&4&&-1<nA.indexOf(t)){for(;i!==null;){var s=za(i);if(s!==null&&FE(s),s=rf(t,e,n,r),s===null&&nd(t,e,r,ku,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else nd(t,e,r,null,n)}}var ku=null;function rf(t,e,n,r){if(ku=null,t=xp(r),t=li(t),t!==null)if(e=Vi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=PE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ku=t,null}function zE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(G1()){case Op:return 1;case bE:return 4;case Cu:case K1:return 16;case DE:return 536870912;default:return 16}default:return 16}}var Ir=null,Mp=null,tu=null;function $E(){if(tu)return tu;var t,e=Mp,n=e.length,r,i="value"in Ir?Ir.value:Ir.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return tu=i.slice(t,1<r?1-r:void 0)}function nu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Dl(){return!0}function j_(){return!1}function Wt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Dl:j_,this.isPropagationStopped=j_,this}return ke(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Dl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Dl)},persist:function(){},isPersistent:Dl}),e}var Hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fp=Wt(Hs),Ba=ke({},Hs,{view:0,detail:0}),aA=Wt(Ba),Gh,Kh,Io,Pc=ke({},Ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Io&&(Io&&t.type==="mousemove"?(Gh=t.screenX-Io.screenX,Kh=t.screenY-Io.screenY):Kh=Gh=0,Io=t),Gh)},movementY:function(t){return"movementY"in t?t.movementY:Kh}}),B_=Wt(Pc),lA=ke({},Pc,{dataTransfer:0}),uA=Wt(lA),cA=ke({},Ba,{relatedTarget:0}),Qh=Wt(cA),hA=ke({},Hs,{animationName:0,elapsedTime:0,pseudoElement:0}),dA=Wt(hA),fA=ke({},Hs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),pA=Wt(fA),mA=ke({},Hs,{data:0}),z_=Wt(mA),gA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_A={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=yA[t])?!!e[t]:!1}function Vp(){return vA}var EA=ke({},Ba,{key:function(t){if(t.key){var e=gA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=nu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?_A[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vp,charCode:function(t){return t.type==="keypress"?nu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?nu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),wA=Wt(EA),TA=ke({},Pc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$_=Wt(TA),IA=ke({},Ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vp}),SA=Wt(IA),CA=ke({},Hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),RA=Wt(CA),AA=ke({},Pc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),kA=Wt(AA),PA=[9,13,27,32],Up=tr&&"CompositionEvent"in window,zo=null;tr&&"documentMode"in document&&(zo=document.documentMode);var NA=tr&&"TextEvent"in window&&!zo,WE=tr&&(!Up||zo&&8<zo&&11>=zo),W_=" ",H_=!1;function HE(t,e){switch(t){case"keyup":return PA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var is=!1;function xA(t,e){switch(t){case"compositionend":return qE(e);case"keypress":return e.which!==32?null:(H_=!0,W_);case"textInput":return t=e.data,t===W_&&H_?null:t;default:return null}}function OA(t,e){if(is)return t==="compositionend"||!Up&&HE(t,e)?(t=$E(),tu=Mp=Ir=null,is=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return WE&&e.locale!=="ko"?null:e.data;default:return null}}var bA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function q_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!bA[t.type]:e==="textarea"}function GE(t,e,n,r){SE(r),e=Pu(e,"onChange"),0<e.length&&(n=new Fp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var $o=null,ha=null;function DA(t){iw(t,0)}function Nc(t){var e=as(t);if(_E(e))return t}function LA(t,e){if(t==="change")return e}var KE=!1;if(tr){var Yh;if(tr){var Xh="oninput"in document;if(!Xh){var G_=document.createElement("div");G_.setAttribute("oninput","return;"),Xh=typeof G_.oninput=="function"}Yh=Xh}else Yh=!1;KE=Yh&&(!document.documentMode||9<document.documentMode)}function K_(){$o&&($o.detachEvent("onpropertychange",QE),ha=$o=null)}function QE(t){if(t.propertyName==="value"&&Nc(ha)){var e=[];GE(e,ha,t,xp(t)),kE(DA,e)}}function MA(t,e,n){t==="focusin"?(K_(),$o=e,ha=n,$o.attachEvent("onpropertychange",QE)):t==="focusout"&&K_()}function FA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Nc(ha)}function VA(t,e){if(t==="click")return Nc(e)}function UA(t,e){if(t==="input"||t==="change")return Nc(e)}function jA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var mn=typeof Object.is=="function"?Object.is:jA;function da(t,e){if(mn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ud.call(e,i)||!mn(t[i],e[i]))return!1}return!0}function Q_(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Y_(t,e){var n=Q_(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Q_(n)}}function YE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?YE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function XE(){for(var t=window,e=Tu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Tu(t.document)}return e}function jp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function BA(t){var e=XE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&YE(n.ownerDocument.documentElement,n)){if(r!==null&&jp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Y_(n,s);var o=Y_(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var zA=tr&&"documentMode"in document&&11>=document.documentMode,ss=null,sf=null,Wo=null,of=!1;function X_(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;of||ss==null||ss!==Tu(r)||(r=ss,"selectionStart"in r&&jp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wo&&da(Wo,r)||(Wo=r,r=Pu(sf,"onSelect"),0<r.length&&(e=new Fp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ss)))}function Ll(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var os={animationend:Ll("Animation","AnimationEnd"),animationiteration:Ll("Animation","AnimationIteration"),animationstart:Ll("Animation","AnimationStart"),transitionend:Ll("Transition","TransitionEnd")},Jh={},JE={};tr&&(JE=document.createElement("div").style,"AnimationEvent"in window||(delete os.animationend.animation,delete os.animationiteration.animation,delete os.animationstart.animation),"TransitionEvent"in window||delete os.transitionend.transition);function xc(t){if(Jh[t])return Jh[t];if(!os[t])return t;var e=os[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in JE)return Jh[t]=e[n];return t}var ZE=xc("animationend"),ew=xc("animationiteration"),tw=xc("animationstart"),nw=xc("transitionend"),rw=new Map,J_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hr(t,e){rw.set(t,e),Fi(e,[t])}for(var Zh=0;Zh<J_.length;Zh++){var ed=J_[Zh],$A=ed.toLowerCase(),WA=ed[0].toUpperCase()+ed.slice(1);Hr($A,"on"+WA)}Hr(ZE,"onAnimationEnd");Hr(ew,"onAnimationIteration");Hr(tw,"onAnimationStart");Hr("dblclick","onDoubleClick");Hr("focusin","onFocus");Hr("focusout","onBlur");Hr(nw,"onTransitionEnd");Ps("onMouseEnter",["mouseout","mouseover"]);Ps("onMouseLeave",["mouseout","mouseover"]);Ps("onPointerEnter",["pointerout","pointerover"]);Ps("onPointerLeave",["pointerout","pointerover"]);Fi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),HA=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mo));function Z_(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,$1(r,e,void 0,t),t.currentTarget=null}function iw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;Z_(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;Z_(i,a,c),s=u}}}if(Su)throw t=ef,Su=!1,ef=null,t}function _e(t,e){var n=e[hf];n===void 0&&(n=e[hf]=new Set);var r=t+"__bubble";n.has(r)||(sw(e,t,2,!1),n.add(r))}function td(t,e,n){var r=0;e&&(r|=4),sw(n,t,r,e)}var Ml="_reactListening"+Math.random().toString(36).slice(2);function fa(t){if(!t[Ml]){t[Ml]=!0,dE.forEach(function(n){n!=="selectionchange"&&(HA.has(n)||td(n,!1,t),td(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ml]||(e[Ml]=!0,td("selectionchange",!1,e))}}function sw(t,e,n,r){switch(zE(e)){case 1:var i=sA;break;case 4:i=oA;break;default:i=Lp}n=i.bind(null,e,n,t),i=void 0,!Zd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function nd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=li(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}kE(function(){var c=s,d=xp(n),f=[];e:{var m=rw.get(t);if(m!==void 0){var C=Fp,v=t;switch(t){case"keypress":if(nu(n)===0)break e;case"keydown":case"keyup":C=wA;break;case"focusin":v="focus",C=Qh;break;case"focusout":v="blur",C=Qh;break;case"beforeblur":case"afterblur":C=Qh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=B_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=uA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=SA;break;case ZE:case ew:case tw:C=dA;break;case nw:C=RA;break;case"scroll":C=aA;break;case"wheel":C=kA;break;case"copy":case"cut":case"paste":C=pA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=$_}var k=(e&4)!==0,P=!k&&t==="scroll",w=k?m!==null?m+"Capture":null:m;k=[];for(var y=c,S;y!==null;){S=y;var b=S.stateNode;if(S.tag===5&&b!==null&&(S=b,w!==null&&(b=aa(y,w),b!=null&&k.push(pa(y,b,S)))),P)break;y=y.return}0<k.length&&(m=new C(m,v,null,n,d),f.push({event:m,listeners:k}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",C=t==="mouseout"||t==="pointerout",m&&n!==Xd&&(v=n.relatedTarget||n.fromElement)&&(li(v)||v[nr]))break e;if((C||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,C?(v=n.relatedTarget||n.toElement,C=c,v=v?li(v):null,v!==null&&(P=Vi(v),v!==P||v.tag!==5&&v.tag!==6)&&(v=null)):(C=null,v=c),C!==v)){if(k=B_,b="onMouseLeave",w="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(k=$_,b="onPointerLeave",w="onPointerEnter",y="pointer"),P=C==null?m:as(C),S=v==null?m:as(v),m=new k(b,y+"leave",C,n,d),m.target=P,m.relatedTarget=S,b=null,li(d)===c&&(k=new k(w,y+"enter",v,n,d),k.target=S,k.relatedTarget=P,b=k),P=b,C&&v)t:{for(k=C,w=v,y=0,S=k;S;S=Xi(S))y++;for(S=0,b=w;b;b=Xi(b))S++;for(;0<y-S;)k=Xi(k),y--;for(;0<S-y;)w=Xi(w),S--;for(;y--;){if(k===w||w!==null&&k===w.alternate)break t;k=Xi(k),w=Xi(w)}k=null}else k=null;C!==null&&ey(f,m,C,k,!1),v!==null&&P!==null&&ey(f,P,v,k,!0)}}e:{if(m=c?as(c):window,C=m.nodeName&&m.nodeName.toLowerCase(),C==="select"||C==="input"&&m.type==="file")var F=LA;else if(q_(m))if(KE)F=UA;else{F=FA;var B=MA}else(C=m.nodeName)&&C.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(F=VA);if(F&&(F=F(t,c))){GE(f,F,n,d);break e}B&&B(t,m,c),t==="focusout"&&(B=m._wrapperState)&&B.controlled&&m.type==="number"&&qd(m,"number",m.value)}switch(B=c?as(c):window,t){case"focusin":(q_(B)||B.contentEditable==="true")&&(ss=B,sf=c,Wo=null);break;case"focusout":Wo=sf=ss=null;break;case"mousedown":of=!0;break;case"contextmenu":case"mouseup":case"dragend":of=!1,X_(f,n,d);break;case"selectionchange":if(zA)break;case"keydown":case"keyup":X_(f,n,d)}var I;if(Up)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else is?HE(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(WE&&n.locale!=="ko"&&(is||_!=="onCompositionStart"?_==="onCompositionEnd"&&is&&(I=$E()):(Ir=d,Mp="value"in Ir?Ir.value:Ir.textContent,is=!0)),B=Pu(c,_),0<B.length&&(_=new z_(_,t,null,n,d),f.push({event:_,listeners:B}),I?_.data=I:(I=qE(n),I!==null&&(_.data=I)))),(I=NA?xA(t,n):OA(t,n))&&(c=Pu(c,"onBeforeInput"),0<c.length&&(d=new z_("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=I))}iw(f,e)})}function pa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Pu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=aa(t,n),s!=null&&r.unshift(pa(t,s,i)),s=aa(t,e),s!=null&&r.push(pa(t,s,i))),t=t.return}return r}function Xi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ey(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=aa(n,s),u!=null&&o.unshift(pa(n,u,a))):i||(u=aa(n,s),u!=null&&o.push(pa(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var qA=/\r\n?/g,GA=/\u0000|\uFFFD/g;function ty(t){return(typeof t=="string"?t:""+t).replace(qA,`
`).replace(GA,"")}function Fl(t,e,n){if(e=ty(e),ty(t)!==e&&n)throw Error(V(425))}function Nu(){}var af=null,lf=null;function uf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var cf=typeof setTimeout=="function"?setTimeout:void 0,KA=typeof clearTimeout=="function"?clearTimeout:void 0,ny=typeof Promise=="function"?Promise:void 0,QA=typeof queueMicrotask=="function"?queueMicrotask:typeof ny<"u"?function(t){return ny.resolve(null).then(t).catch(YA)}:cf;function YA(t){setTimeout(function(){throw t})}function rd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ca(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ca(e)}function Pr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ry(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var qs=Math.random().toString(36).slice(2),Sn="__reactFiber$"+qs,ma="__reactProps$"+qs,nr="__reactContainer$"+qs,hf="__reactEvents$"+qs,XA="__reactListeners$"+qs,JA="__reactHandles$"+qs;function li(t){var e=t[Sn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[nr]||n[Sn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ry(t);t!==null;){if(n=t[Sn])return n;t=ry(t)}return e}t=n,n=t.parentNode}return null}function za(t){return t=t[Sn]||t[nr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function as(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(V(33))}function Oc(t){return t[ma]||null}var df=[],ls=-1;function qr(t){return{current:t}}function Ee(t){0>ls||(t.current=df[ls],df[ls]=null,ls--)}function pe(t,e){ls++,df[ls]=t.current,t.current=e}var jr={},gt=qr(jr),kt=qr(!1),Ei=jr;function Ns(t,e){var n=t.type.contextTypes;if(!n)return jr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Pt(t){return t=t.childContextTypes,t!=null}function xu(){Ee(kt),Ee(gt)}function iy(t,e,n){if(gt.current!==jr)throw Error(V(168));pe(gt,e),pe(kt,n)}function ow(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(V(108,M1(t)||"Unknown",i));return ke({},n,r)}function Ou(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||jr,Ei=gt.current,pe(gt,t),pe(kt,kt.current),!0}function sy(t,e,n){var r=t.stateNode;if(!r)throw Error(V(169));n?(t=ow(t,e,Ei),r.__reactInternalMemoizedMergedChildContext=t,Ee(kt),Ee(gt),pe(gt,t)):Ee(kt),pe(kt,n)}var $n=null,bc=!1,id=!1;function aw(t){$n===null?$n=[t]:$n.push(t)}function ZA(t){bc=!0,aw(t)}function Gr(){if(!id&&$n!==null){id=!0;var t=0,e=ce;try{var n=$n;for(ce=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}$n=null,bc=!1}catch(i){throw $n!==null&&($n=$n.slice(t+1)),OE(Op,Gr),i}finally{ce=e,id=!1}}return null}var us=[],cs=0,bu=null,Du=0,qt=[],Gt=0,wi=null,Wn=1,Hn="";function ii(t,e){us[cs++]=Du,us[cs++]=bu,bu=t,Du=e}function lw(t,e,n){qt[Gt++]=Wn,qt[Gt++]=Hn,qt[Gt++]=wi,wi=t;var r=Wn;t=Hn;var i=32-dn(r)-1;r&=~(1<<i),n+=1;var s=32-dn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Wn=1<<32-dn(e)+i|n<<i|r,Hn=s+t}else Wn=1<<s|n<<i|r,Hn=t}function Bp(t){t.return!==null&&(ii(t,1),lw(t,1,0))}function zp(t){for(;t===bu;)bu=us[--cs],us[cs]=null,Du=us[--cs],us[cs]=null;for(;t===wi;)wi=qt[--Gt],qt[Gt]=null,Hn=qt[--Gt],qt[Gt]=null,Wn=qt[--Gt],qt[Gt]=null}var Vt=null,Ft=null,Ie=!1,on=null;function uw(t,e){var n=Kt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function oy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Vt=t,Ft=Pr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Vt=t,Ft=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=wi!==null?{id:Wn,overflow:Hn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Kt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Vt=t,Ft=null,!0):!1;default:return!1}}function ff(t){return(t.mode&1)!==0&&(t.flags&128)===0}function pf(t){if(Ie){var e=Ft;if(e){var n=e;if(!oy(t,e)){if(ff(t))throw Error(V(418));e=Pr(n.nextSibling);var r=Vt;e&&oy(t,e)?uw(r,n):(t.flags=t.flags&-4097|2,Ie=!1,Vt=t)}}else{if(ff(t))throw Error(V(418));t.flags=t.flags&-4097|2,Ie=!1,Vt=t}}}function ay(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Vt=t}function Vl(t){if(t!==Vt)return!1;if(!Ie)return ay(t),Ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!uf(t.type,t.memoizedProps)),e&&(e=Ft)){if(ff(t))throw cw(),Error(V(418));for(;e;)uw(t,e),e=Pr(e.nextSibling)}if(ay(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(V(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ft=Pr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ft=null}}else Ft=Vt?Pr(t.stateNode.nextSibling):null;return!0}function cw(){for(var t=Ft;t;)t=Pr(t.nextSibling)}function xs(){Ft=Vt=null,Ie=!1}function $p(t){on===null?on=[t]:on.push(t)}var ek=lr.ReactCurrentBatchConfig;function So(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(V(309));var r=n.stateNode}if(!r)throw Error(V(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(V(284));if(!n._owner)throw Error(V(290,t))}return t}function Ul(t,e){throw t=Object.prototype.toString.call(e),Error(V(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ly(t){var e=t._init;return e(t._payload)}function hw(t){function e(w,y){if(t){var S=w.deletions;S===null?(w.deletions=[y],w.flags|=16):S.push(y)}}function n(w,y){if(!t)return null;for(;y!==null;)e(w,y),y=y.sibling;return null}function r(w,y){for(w=new Map;y!==null;)y.key!==null?w.set(y.key,y):w.set(y.index,y),y=y.sibling;return w}function i(w,y){return w=br(w,y),w.index=0,w.sibling=null,w}function s(w,y,S){return w.index=S,t?(S=w.alternate,S!==null?(S=S.index,S<y?(w.flags|=2,y):S):(w.flags|=2,y)):(w.flags|=1048576,y)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function a(w,y,S,b){return y===null||y.tag!==6?(y=hd(S,w.mode,b),y.return=w,y):(y=i(y,S),y.return=w,y)}function u(w,y,S,b){var F=S.type;return F===rs?d(w,y,S.props.children,b,S.key):y!==null&&(y.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===mr&&ly(F)===y.type)?(b=i(y,S.props),b.ref=So(w,y,S),b.return=w,b):(b=uu(S.type,S.key,S.props,null,w.mode,b),b.ref=So(w,y,S),b.return=w,b)}function c(w,y,S,b){return y===null||y.tag!==4||y.stateNode.containerInfo!==S.containerInfo||y.stateNode.implementation!==S.implementation?(y=dd(S,w.mode,b),y.return=w,y):(y=i(y,S.children||[]),y.return=w,y)}function d(w,y,S,b,F){return y===null||y.tag!==7?(y=gi(S,w.mode,b,F),y.return=w,y):(y=i(y,S),y.return=w,y)}function f(w,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return y=hd(""+y,w.mode,S),y.return=w,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case kl:return S=uu(y.type,y.key,y.props,null,w.mode,S),S.ref=So(w,null,y),S.return=w,S;case ns:return y=dd(y,w.mode,S),y.return=w,y;case mr:var b=y._init;return f(w,b(y._payload),S)}if(Do(y)||vo(y))return y=gi(y,w.mode,S,null),y.return=w,y;Ul(w,y)}return null}function m(w,y,S,b){var F=y!==null?y.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return F!==null?null:a(w,y,""+S,b);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case kl:return S.key===F?u(w,y,S,b):null;case ns:return S.key===F?c(w,y,S,b):null;case mr:return F=S._init,m(w,y,F(S._payload),b)}if(Do(S)||vo(S))return F!==null?null:d(w,y,S,b,null);Ul(w,S)}return null}function C(w,y,S,b,F){if(typeof b=="string"&&b!==""||typeof b=="number")return w=w.get(S)||null,a(y,w,""+b,F);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case kl:return w=w.get(b.key===null?S:b.key)||null,u(y,w,b,F);case ns:return w=w.get(b.key===null?S:b.key)||null,c(y,w,b,F);case mr:var B=b._init;return C(w,y,S,B(b._payload),F)}if(Do(b)||vo(b))return w=w.get(S)||null,d(y,w,b,F,null);Ul(y,b)}return null}function v(w,y,S,b){for(var F=null,B=null,I=y,_=y=0,T=null;I!==null&&_<S.length;_++){I.index>_?(T=I,I=null):T=I.sibling;var R=m(w,I,S[_],b);if(R===null){I===null&&(I=T);break}t&&I&&R.alternate===null&&e(w,I),y=s(R,y,_),B===null?F=R:B.sibling=R,B=R,I=T}if(_===S.length)return n(w,I),Ie&&ii(w,_),F;if(I===null){for(;_<S.length;_++)I=f(w,S[_],b),I!==null&&(y=s(I,y,_),B===null?F=I:B.sibling=I,B=I);return Ie&&ii(w,_),F}for(I=r(w,I);_<S.length;_++)T=C(I,w,_,S[_],b),T!==null&&(t&&T.alternate!==null&&I.delete(T.key===null?_:T.key),y=s(T,y,_),B===null?F=T:B.sibling=T,B=T);return t&&I.forEach(function(N){return e(w,N)}),Ie&&ii(w,_),F}function k(w,y,S,b){var F=vo(S);if(typeof F!="function")throw Error(V(150));if(S=F.call(S),S==null)throw Error(V(151));for(var B=F=null,I=y,_=y=0,T=null,R=S.next();I!==null&&!R.done;_++,R=S.next()){I.index>_?(T=I,I=null):T=I.sibling;var N=m(w,I,R.value,b);if(N===null){I===null&&(I=T);break}t&&I&&N.alternate===null&&e(w,I),y=s(N,y,_),B===null?F=N:B.sibling=N,B=N,I=T}if(R.done)return n(w,I),Ie&&ii(w,_),F;if(I===null){for(;!R.done;_++,R=S.next())R=f(w,R.value,b),R!==null&&(y=s(R,y,_),B===null?F=R:B.sibling=R,B=R);return Ie&&ii(w,_),F}for(I=r(w,I);!R.done;_++,R=S.next())R=C(I,w,_,R.value,b),R!==null&&(t&&R.alternate!==null&&I.delete(R.key===null?_:R.key),y=s(R,y,_),B===null?F=R:B.sibling=R,B=R);return t&&I.forEach(function(O){return e(w,O)}),Ie&&ii(w,_),F}function P(w,y,S,b){if(typeof S=="object"&&S!==null&&S.type===rs&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case kl:e:{for(var F=S.key,B=y;B!==null;){if(B.key===F){if(F=S.type,F===rs){if(B.tag===7){n(w,B.sibling),y=i(B,S.props.children),y.return=w,w=y;break e}}else if(B.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===mr&&ly(F)===B.type){n(w,B.sibling),y=i(B,S.props),y.ref=So(w,B,S),y.return=w,w=y;break e}n(w,B);break}else e(w,B);B=B.sibling}S.type===rs?(y=gi(S.props.children,w.mode,b,S.key),y.return=w,w=y):(b=uu(S.type,S.key,S.props,null,w.mode,b),b.ref=So(w,y,S),b.return=w,w=b)}return o(w);case ns:e:{for(B=S.key;y!==null;){if(y.key===B)if(y.tag===4&&y.stateNode.containerInfo===S.containerInfo&&y.stateNode.implementation===S.implementation){n(w,y.sibling),y=i(y,S.children||[]),y.return=w,w=y;break e}else{n(w,y);break}else e(w,y);y=y.sibling}y=dd(S,w.mode,b),y.return=w,w=y}return o(w);case mr:return B=S._init,P(w,y,B(S._payload),b)}if(Do(S))return v(w,y,S,b);if(vo(S))return k(w,y,S,b);Ul(w,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,y!==null&&y.tag===6?(n(w,y.sibling),y=i(y,S),y.return=w,w=y):(n(w,y),y=hd(S,w.mode,b),y.return=w,w=y),o(w)):n(w,y)}return P}var Os=hw(!0),dw=hw(!1),Lu=qr(null),Mu=null,hs=null,Wp=null;function Hp(){Wp=hs=Mu=null}function qp(t){var e=Lu.current;Ee(Lu),t._currentValue=e}function mf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ws(t,e){Mu=t,Wp=hs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Rt=!0),t.firstContext=null)}function Xt(t){var e=t._currentValue;if(Wp!==t)if(t={context:t,memoizedValue:e,next:null},hs===null){if(Mu===null)throw Error(V(308));hs=t,Mu.dependencies={lanes:0,firstContext:t}}else hs=hs.next=t;return e}var ui=null;function Gp(t){ui===null?ui=[t]:ui.push(t)}function fw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Gp(e)):(n.next=i.next,i.next=n),e.interleaved=n,rr(t,r)}function rr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var gr=!1;function Kp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Yn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Nr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,rr(t,n)}return i=r.interleaved,i===null?(e.next=e,Gp(r)):(e.next=i.next,i.next=e),r.interleaved=e,rr(t,n)}function ru(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,bp(t,n)}}function uy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Fu(t,e,n,r){var i=t.updateQueue;gr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,d=c=u=null,a=s;do{var m=a.lane,C=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:C,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,k=a;switch(m=e,C=n,k.tag){case 1:if(v=k.payload,typeof v=="function"){f=v.call(C,f,m);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=k.payload,m=typeof v=="function"?v.call(C,f,m):v,m==null)break e;f=ke({},f,m);break e;case 2:gr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else C={eventTime:C,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=C,u=f):d=d.next=C,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ii|=o,t.lanes=o,t.memoizedState=f}}function cy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(V(191,i));i.call(r)}}}var $a={},kn=qr($a),ga=qr($a),_a=qr($a);function ci(t){if(t===$a)throw Error(V(174));return t}function Qp(t,e){switch(pe(_a,e),pe(ga,t),pe(kn,$a),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Kd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Kd(e,t)}Ee(kn),pe(kn,e)}function bs(){Ee(kn),Ee(ga),Ee(_a)}function mw(t){ci(_a.current);var e=ci(kn.current),n=Kd(e,t.type);e!==n&&(pe(ga,t),pe(kn,n))}function Yp(t){ga.current===t&&(Ee(kn),Ee(ga))}var Ce=qr(0);function Vu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var sd=[];function Xp(){for(var t=0;t<sd.length;t++)sd[t]._workInProgressVersionPrimary=null;sd.length=0}var iu=lr.ReactCurrentDispatcher,od=lr.ReactCurrentBatchConfig,Ti=0,Re=null,Ve=null,ze=null,Uu=!1,Ho=!1,ya=0,tk=0;function ot(){throw Error(V(321))}function Jp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!mn(t[n],e[n]))return!1;return!0}function Zp(t,e,n,r,i,s){if(Ti=s,Re=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,iu.current=t===null||t.memoizedState===null?sk:ok,t=n(r,i),Ho){s=0;do{if(Ho=!1,ya=0,25<=s)throw Error(V(301));s+=1,ze=Ve=null,e.updateQueue=null,iu.current=ak,t=n(r,i)}while(Ho)}if(iu.current=ju,e=Ve!==null&&Ve.next!==null,Ti=0,ze=Ve=Re=null,Uu=!1,e)throw Error(V(300));return t}function em(){var t=ya!==0;return ya=0,t}function In(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?Re.memoizedState=ze=t:ze=ze.next=t,ze}function Jt(){if(Ve===null){var t=Re.alternate;t=t!==null?t.memoizedState:null}else t=Ve.next;var e=ze===null?Re.memoizedState:ze.next;if(e!==null)ze=e,Ve=t;else{if(t===null)throw Error(V(310));Ve=t,t={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},ze===null?Re.memoizedState=ze=t:ze=ze.next=t}return ze}function va(t,e){return typeof e=="function"?e(t):e}function ad(t){var e=Jt(),n=e.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=t;var r=Ve,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var d=c.lane;if((Ti&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,Re.lanes|=d,Ii|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,mn(r,e.memoizedState)||(Rt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Re.lanes|=s,Ii|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ld(t){var e=Jt(),n=e.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);mn(s,e.memoizedState)||(Rt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function gw(){}function _w(t,e){var n=Re,r=Jt(),i=e(),s=!mn(r.memoizedState,i);if(s&&(r.memoizedState=i,Rt=!0),r=r.queue,tm(Ew.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ze!==null&&ze.memoizedState.tag&1){if(n.flags|=2048,Ea(9,vw.bind(null,n,r,i,e),void 0,null),qe===null)throw Error(V(349));Ti&30||yw(n,e,i)}return i}function yw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Re.updateQueue,e===null?(e={lastEffect:null,stores:null},Re.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function vw(t,e,n,r){e.value=n,e.getSnapshot=r,ww(e)&&Tw(t)}function Ew(t,e,n){return n(function(){ww(e)&&Tw(t)})}function ww(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!mn(t,n)}catch{return!0}}function Tw(t){var e=rr(t,1);e!==null&&fn(e,t,1,-1)}function hy(t){var e=In();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:t},e.queue=t,t=t.dispatch=ik.bind(null,Re,t),[e.memoizedState,t]}function Ea(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Re.updateQueue,e===null?(e={lastEffect:null,stores:null},Re.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Iw(){return Jt().memoizedState}function su(t,e,n,r){var i=In();Re.flags|=t,i.memoizedState=Ea(1|e,n,void 0,r===void 0?null:r)}function Dc(t,e,n,r){var i=Jt();r=r===void 0?null:r;var s=void 0;if(Ve!==null){var o=Ve.memoizedState;if(s=o.destroy,r!==null&&Jp(r,o.deps)){i.memoizedState=Ea(e,n,s,r);return}}Re.flags|=t,i.memoizedState=Ea(1|e,n,s,r)}function dy(t,e){return su(8390656,8,t,e)}function tm(t,e){return Dc(2048,8,t,e)}function Sw(t,e){return Dc(4,2,t,e)}function Cw(t,e){return Dc(4,4,t,e)}function Rw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Aw(t,e,n){return n=n!=null?n.concat([t]):null,Dc(4,4,Rw.bind(null,e,t),n)}function nm(){}function kw(t,e){var n=Jt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Jp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Pw(t,e){var n=Jt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Jp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Nw(t,e,n){return Ti&21?(mn(n,e)||(n=LE(),Re.lanes|=n,Ii|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Rt=!0),t.memoizedState=n)}function nk(t,e){var n=ce;ce=n!==0&&4>n?n:4,t(!0);var r=od.transition;od.transition={};try{t(!1),e()}finally{ce=n,od.transition=r}}function xw(){return Jt().memoizedState}function rk(t,e,n){var r=Or(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ow(t))bw(e,n);else if(n=fw(t,e,n,r),n!==null){var i=wt();fn(n,t,r,i),Dw(n,e,r)}}function ik(t,e,n){var r=Or(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ow(t))bw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,mn(a,o)){var u=e.interleaved;u===null?(i.next=i,Gp(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=fw(t,e,i,r),n!==null&&(i=wt(),fn(n,t,r,i),Dw(n,e,r))}}function Ow(t){var e=t.alternate;return t===Re||e!==null&&e===Re}function bw(t,e){Ho=Uu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Dw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,bp(t,n)}}var ju={readContext:Xt,useCallback:ot,useContext:ot,useEffect:ot,useImperativeHandle:ot,useInsertionEffect:ot,useLayoutEffect:ot,useMemo:ot,useReducer:ot,useRef:ot,useState:ot,useDebugValue:ot,useDeferredValue:ot,useTransition:ot,useMutableSource:ot,useSyncExternalStore:ot,useId:ot,unstable_isNewReconciler:!1},sk={readContext:Xt,useCallback:function(t,e){return In().memoizedState=[t,e===void 0?null:e],t},useContext:Xt,useEffect:dy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,su(4194308,4,Rw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return su(4194308,4,t,e)},useInsertionEffect:function(t,e){return su(4,2,t,e)},useMemo:function(t,e){var n=In();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=In();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=rk.bind(null,Re,t),[r.memoizedState,t]},useRef:function(t){var e=In();return t={current:t},e.memoizedState=t},useState:hy,useDebugValue:nm,useDeferredValue:function(t){return In().memoizedState=t},useTransition:function(){var t=hy(!1),e=t[0];return t=nk.bind(null,t[1]),In().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Re,i=In();if(Ie){if(n===void 0)throw Error(V(407));n=n()}else{if(n=e(),qe===null)throw Error(V(349));Ti&30||yw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,dy(Ew.bind(null,r,s,t),[t]),r.flags|=2048,Ea(9,vw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=In(),e=qe.identifierPrefix;if(Ie){var n=Hn,r=Wn;n=(r&~(1<<32-dn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ya++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=tk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ok={readContext:Xt,useCallback:kw,useContext:Xt,useEffect:tm,useImperativeHandle:Aw,useInsertionEffect:Sw,useLayoutEffect:Cw,useMemo:Pw,useReducer:ad,useRef:Iw,useState:function(){return ad(va)},useDebugValue:nm,useDeferredValue:function(t){var e=Jt();return Nw(e,Ve.memoizedState,t)},useTransition:function(){var t=ad(va)[0],e=Jt().memoizedState;return[t,e]},useMutableSource:gw,useSyncExternalStore:_w,useId:xw,unstable_isNewReconciler:!1},ak={readContext:Xt,useCallback:kw,useContext:Xt,useEffect:tm,useImperativeHandle:Aw,useInsertionEffect:Sw,useLayoutEffect:Cw,useMemo:Pw,useReducer:ld,useRef:Iw,useState:function(){return ld(va)},useDebugValue:nm,useDeferredValue:function(t){var e=Jt();return Ve===null?e.memoizedState=t:Nw(e,Ve.memoizedState,t)},useTransition:function(){var t=ld(va)[0],e=Jt().memoizedState;return[t,e]},useMutableSource:gw,useSyncExternalStore:_w,useId:xw,unstable_isNewReconciler:!1};function rn(t,e){if(t&&t.defaultProps){e=ke({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function gf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ke({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Lc={isMounted:function(t){return(t=t._reactInternals)?Vi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=wt(),i=Or(t),s=Yn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Nr(t,s,i),e!==null&&(fn(e,t,i,r),ru(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=wt(),i=Or(t),s=Yn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Nr(t,s,i),e!==null&&(fn(e,t,i,r),ru(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=wt(),r=Or(t),i=Yn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Nr(t,i,r),e!==null&&(fn(e,t,r,n),ru(e,t,r))}};function fy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!da(n,r)||!da(i,s):!0}function Lw(t,e,n){var r=!1,i=jr,s=e.contextType;return typeof s=="object"&&s!==null?s=Xt(s):(i=Pt(e)?Ei:gt.current,r=e.contextTypes,s=(r=r!=null)?Ns(t,i):jr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Lc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function py(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Lc.enqueueReplaceState(e,e.state,null)}function _f(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Kp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Xt(s):(s=Pt(e)?Ei:gt.current,i.context=Ns(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(gf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Lc.enqueueReplaceState(i,i.state,null),Fu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ds(t,e){try{var n="",r=e;do n+=L1(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function ud(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function yf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var lk=typeof WeakMap=="function"?WeakMap:Map;function Mw(t,e,n){n=Yn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){zu||(zu=!0,kf=r),yf(t,e)},n}function Fw(t,e,n){n=Yn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){yf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){yf(t,e),typeof r!="function"&&(xr===null?xr=new Set([this]):xr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function my(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new lk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Tk.bind(null,t,e,n),e.then(t,t))}function gy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function _y(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Yn(-1,1),e.tag=2,Nr(n,e,1))),n.lanes|=1),t)}var uk=lr.ReactCurrentOwner,Rt=!1;function Et(t,e,n,r){e.child=t===null?dw(e,null,n,r):Os(e,t.child,n,r)}function yy(t,e,n,r,i){n=n.render;var s=e.ref;return ws(e,i),r=Zp(t,e,n,r,s,i),n=em(),t!==null&&!Rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ir(t,e,i)):(Ie&&n&&Bp(e),e.flags|=1,Et(t,e,r,i),e.child)}function vy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!cm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Vw(t,e,s,r,i)):(t=uu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:da,n(o,r)&&t.ref===e.ref)return ir(t,e,i)}return e.flags|=1,t=br(s,r),t.ref=e.ref,t.return=e,e.child=t}function Vw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(da(s,r)&&t.ref===e.ref)if(Rt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Rt=!0);else return e.lanes=t.lanes,ir(t,e,i)}return vf(t,e,n,r,i)}function Uw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(fs,Lt),Lt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,pe(fs,Lt),Lt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,pe(fs,Lt),Lt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,pe(fs,Lt),Lt|=r;return Et(t,e,i,n),e.child}function jw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function vf(t,e,n,r,i){var s=Pt(n)?Ei:gt.current;return s=Ns(e,s),ws(e,i),n=Zp(t,e,n,r,s,i),r=em(),t!==null&&!Rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ir(t,e,i)):(Ie&&r&&Bp(e),e.flags|=1,Et(t,e,n,i),e.child)}function Ey(t,e,n,r,i){if(Pt(n)){var s=!0;Ou(e)}else s=!1;if(ws(e,i),e.stateNode===null)ou(t,e),Lw(e,n,r),_f(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Xt(c):(c=Pt(n)?Ei:gt.current,c=Ns(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&py(e,o,r,c),gr=!1;var m=e.memoizedState;o.state=m,Fu(e,r,o,i),u=e.memoizedState,a!==r||m!==u||kt.current||gr?(typeof d=="function"&&(gf(e,n,d,r),u=e.memoizedState),(a=gr||fy(e,n,a,r,m,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,pw(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:rn(e.type,a),o.props=c,f=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Xt(u):(u=Pt(n)?Ei:gt.current,u=Ns(e,u));var C=n.getDerivedStateFromProps;(d=typeof C=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==u)&&py(e,o,r,u),gr=!1,m=e.memoizedState,o.state=m,Fu(e,r,o,i);var v=e.memoizedState;a!==f||m!==v||kt.current||gr?(typeof C=="function"&&(gf(e,n,C,r),v=e.memoizedState),(c=gr||fy(e,n,c,r,m,v,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Ef(t,e,n,r,s,i)}function Ef(t,e,n,r,i,s){jw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&sy(e,n,!1),ir(t,e,s);r=e.stateNode,uk.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Os(e,t.child,null,s),e.child=Os(e,null,a,s)):Et(t,e,a,s),e.memoizedState=r.state,i&&sy(e,n,!0),e.child}function Bw(t){var e=t.stateNode;e.pendingContext?iy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&iy(t,e.context,!1),Qp(t,e.containerInfo)}function wy(t,e,n,r,i){return xs(),$p(i),e.flags|=256,Et(t,e,n,r),e.child}var wf={dehydrated:null,treeContext:null,retryLane:0};function Tf(t){return{baseLanes:t,cachePool:null,transitions:null}}function zw(t,e,n){var r=e.pendingProps,i=Ce.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),pe(Ce,i&1),t===null)return pf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Vc(o,r,0,null),t=gi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Tf(n),e.memoizedState=wf,t):rm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return ck(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=br(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=br(a,s):(s=gi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Tf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=wf,r}return s=t.child,t=s.sibling,r=br(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function rm(t,e){return e=Vc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function jl(t,e,n,r){return r!==null&&$p(r),Os(e,t.child,null,n),t=rm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ck(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=ud(Error(V(422))),jl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Vc({mode:"visible",children:r.children},i,0,null),s=gi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Os(e,t.child,null,o),e.child.memoizedState=Tf(o),e.memoizedState=wf,s);if(!(e.mode&1))return jl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(V(419)),r=ud(s,r,void 0),jl(t,e,o,r)}if(a=(o&t.childLanes)!==0,Rt||a){if(r=qe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,rr(t,i),fn(r,t,i,-1))}return um(),r=ud(Error(V(421))),jl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Ik.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ft=Pr(i.nextSibling),Vt=e,Ie=!0,on=null,t!==null&&(qt[Gt++]=Wn,qt[Gt++]=Hn,qt[Gt++]=wi,Wn=t.id,Hn=t.overflow,wi=e),e=rm(e,r.children),e.flags|=4096,e)}function Ty(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),mf(t.return,e,n)}function cd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function $w(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Et(t,e,r.children,n),r=Ce.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ty(t,n,e);else if(t.tag===19)Ty(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(pe(Ce,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Vu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),cd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Vu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}cd(e,!0,n,null,s);break;case"together":cd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ou(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ir(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ii|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(V(153));if(e.child!==null){for(t=e.child,n=br(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=br(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function hk(t,e,n){switch(e.tag){case 3:Bw(e),xs();break;case 5:mw(e);break;case 1:Pt(e.type)&&Ou(e);break;case 4:Qp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;pe(Lu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(pe(Ce,Ce.current&1),e.flags|=128,null):n&e.child.childLanes?zw(t,e,n):(pe(Ce,Ce.current&1),t=ir(t,e,n),t!==null?t.sibling:null);pe(Ce,Ce.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return $w(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),pe(Ce,Ce.current),r)break;return null;case 22:case 23:return e.lanes=0,Uw(t,e,n)}return ir(t,e,n)}var Ww,If,Hw,qw;Ww=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};If=function(){};Hw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ci(kn.current);var s=null;switch(n){case"input":i=Wd(t,i),r=Wd(t,r),s=[];break;case"select":i=ke({},i,{value:void 0}),r=ke({},r,{value:void 0}),s=[];break;case"textarea":i=Gd(t,i),r=Gd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Nu)}Qd(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(sa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(sa.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&_e("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};qw=function(t,e,n,r){n!==r&&(e.flags|=4)};function Co(t,e){if(!Ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function at(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function dk(t,e,n){var r=e.pendingProps;switch(zp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(e),null;case 1:return Pt(e.type)&&xu(),at(e),null;case 3:return r=e.stateNode,bs(),Ee(kt),Ee(gt),Xp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Vl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,on!==null&&(xf(on),on=null))),If(t,e),at(e),null;case 5:Yp(e);var i=ci(_a.current);if(n=e.type,t!==null&&e.stateNode!=null)Hw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(V(166));return at(e),null}if(t=ci(kn.current),Vl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Sn]=e,r[ma]=s,t=(e.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(i=0;i<Mo.length;i++)_e(Mo[i],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":x_(r,s),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},_e("invalid",r);break;case"textarea":b_(r,s),_e("invalid",r)}Qd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Fl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Fl(r.textContent,a,t),i=["children",""+a]):sa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&_e("scroll",r)}switch(n){case"input":Pl(r),O_(r,s,!0);break;case"textarea":Pl(r),D_(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Nu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=EE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Sn]=e,t[ma]=r,Ww(t,e,!1,!1),e.stateNode=t;e:{switch(o=Yd(n,r),n){case"dialog":_e("cancel",t),_e("close",t),i=r;break;case"iframe":case"object":case"embed":_e("load",t),i=r;break;case"video":case"audio":for(i=0;i<Mo.length;i++)_e(Mo[i],t);i=r;break;case"source":_e("error",t),i=r;break;case"img":case"image":case"link":_e("error",t),_e("load",t),i=r;break;case"details":_e("toggle",t),i=r;break;case"input":x_(t,r),i=Wd(t,r),_e("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ke({},r,{value:void 0}),_e("invalid",t);break;case"textarea":b_(t,r),i=Gd(t,r),_e("invalid",t);break;default:i=r}Qd(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?IE(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&wE(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&oa(t,u):typeof u=="number"&&oa(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(sa.hasOwnProperty(s)?u!=null&&s==="onScroll"&&_e("scroll",t):u!=null&&Ap(t,s,u,o))}switch(n){case"input":Pl(t),O_(t,r,!1);break;case"textarea":Pl(t),D_(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ur(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?_s(t,!!r.multiple,s,!1):r.defaultValue!=null&&_s(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Nu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return at(e),null;case 6:if(t&&e.stateNode!=null)qw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(V(166));if(n=ci(_a.current),ci(kn.current),Vl(e)){if(r=e.stateNode,n=e.memoizedProps,r[Sn]=e,(s=r.nodeValue!==n)&&(t=Vt,t!==null))switch(t.tag){case 3:Fl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Fl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Sn]=e,e.stateNode=r}return at(e),null;case 13:if(Ee(Ce),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ie&&Ft!==null&&e.mode&1&&!(e.flags&128))cw(),xs(),e.flags|=98560,s=!1;else if(s=Vl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(V(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(V(317));s[Sn]=e}else xs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;at(e),s=!1}else on!==null&&(xf(on),on=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ce.current&1?Ue===0&&(Ue=3):um())),e.updateQueue!==null&&(e.flags|=4),at(e),null);case 4:return bs(),If(t,e),t===null&&fa(e.stateNode.containerInfo),at(e),null;case 10:return qp(e.type._context),at(e),null;case 17:return Pt(e.type)&&xu(),at(e),null;case 19:if(Ee(Ce),s=e.memoizedState,s===null)return at(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Co(s,!1);else{if(Ue!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Vu(t),o!==null){for(e.flags|=128,Co(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return pe(Ce,Ce.current&1|2),e.child}t=t.sibling}s.tail!==null&&be()>Ls&&(e.flags|=128,r=!0,Co(s,!1),e.lanes=4194304)}else{if(!r)if(t=Vu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Co(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ie)return at(e),null}else 2*be()-s.renderingStartTime>Ls&&n!==1073741824&&(e.flags|=128,r=!0,Co(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=be(),e.sibling=null,n=Ce.current,pe(Ce,r?n&1|2:n&1),e):(at(e),null);case 22:case 23:return lm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Lt&1073741824&&(at(e),e.subtreeFlags&6&&(e.flags|=8192)):at(e),null;case 24:return null;case 25:return null}throw Error(V(156,e.tag))}function fk(t,e){switch(zp(e),e.tag){case 1:return Pt(e.type)&&xu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return bs(),Ee(kt),Ee(gt),Xp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Yp(e),null;case 13:if(Ee(Ce),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(V(340));xs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ee(Ce),null;case 4:return bs(),null;case 10:return qp(e.type._context),null;case 22:case 23:return lm(),null;case 24:return null;default:return null}}var Bl=!1,ct=!1,pk=typeof WeakSet=="function"?WeakSet:Set,H=null;function ds(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ne(t,e,r)}else n.current=null}function Sf(t,e,n){try{n()}catch(r){Ne(t,e,r)}}var Iy=!1;function mk(t,e){if(af=Au,t=XE(),jp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,d=0,f=t,m=null;t:for(;;){for(var C;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(C=f.firstChild)!==null;)m=f,f=C;for(;;){if(f===t)break t;if(m===n&&++c===i&&(a=o),m===s&&++d===r&&(u=o),(C=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=C}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(lf={focusedElem:t,selectionRange:n},Au=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var k=v.memoizedProps,P=v.memoizedState,w=e.stateNode,y=w.getSnapshotBeforeUpdate(e.elementType===e.type?k:rn(e.type,k),P);w.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(V(163))}}catch(b){Ne(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return v=Iy,Iy=!1,v}function qo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Sf(e,n,s)}i=i.next}while(i!==r)}}function Mc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Cf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Gw(t){var e=t.alternate;e!==null&&(t.alternate=null,Gw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Sn],delete e[ma],delete e[hf],delete e[XA],delete e[JA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Kw(t){return t.tag===5||t.tag===3||t.tag===4}function Sy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Kw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Rf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Nu));else if(r!==4&&(t=t.child,t!==null))for(Rf(t,e,n),t=t.sibling;t!==null;)Rf(t,e,n),t=t.sibling}function Af(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Af(t,e,n),t=t.sibling;t!==null;)Af(t,e,n),t=t.sibling}var Qe=null,sn=!1;function fr(t,e,n){for(n=n.child;n!==null;)Qw(t,e,n),n=n.sibling}function Qw(t,e,n){if(An&&typeof An.onCommitFiberUnmount=="function")try{An.onCommitFiberUnmount(kc,n)}catch{}switch(n.tag){case 5:ct||ds(n,e);case 6:var r=Qe,i=sn;Qe=null,fr(t,e,n),Qe=r,sn=i,Qe!==null&&(sn?(t=Qe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Qe.removeChild(n.stateNode));break;case 18:Qe!==null&&(sn?(t=Qe,n=n.stateNode,t.nodeType===8?rd(t.parentNode,n):t.nodeType===1&&rd(t,n),ca(t)):rd(Qe,n.stateNode));break;case 4:r=Qe,i=sn,Qe=n.stateNode.containerInfo,sn=!0,fr(t,e,n),Qe=r,sn=i;break;case 0:case 11:case 14:case 15:if(!ct&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Sf(n,e,o),i=i.next}while(i!==r)}fr(t,e,n);break;case 1:if(!ct&&(ds(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ne(n,e,a)}fr(t,e,n);break;case 21:fr(t,e,n);break;case 22:n.mode&1?(ct=(r=ct)||n.memoizedState!==null,fr(t,e,n),ct=r):fr(t,e,n);break;default:fr(t,e,n)}}function Cy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new pk),e.forEach(function(r){var i=Sk.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function nn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Qe=a.stateNode,sn=!1;break e;case 3:Qe=a.stateNode.containerInfo,sn=!0;break e;case 4:Qe=a.stateNode.containerInfo,sn=!0;break e}a=a.return}if(Qe===null)throw Error(V(160));Qw(s,o,i),Qe=null,sn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ne(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Yw(e,t),e=e.sibling}function Yw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(nn(e,t),wn(t),r&4){try{qo(3,t,t.return),Mc(3,t)}catch(k){Ne(t,t.return,k)}try{qo(5,t,t.return)}catch(k){Ne(t,t.return,k)}}break;case 1:nn(e,t),wn(t),r&512&&n!==null&&ds(n,n.return);break;case 5:if(nn(e,t),wn(t),r&512&&n!==null&&ds(n,n.return),t.flags&32){var i=t.stateNode;try{oa(i,"")}catch(k){Ne(t,t.return,k)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&yE(i,s),Yd(a,o);var c=Yd(a,s);for(o=0;o<u.length;o+=2){var d=u[o],f=u[o+1];d==="style"?IE(i,f):d==="dangerouslySetInnerHTML"?wE(i,f):d==="children"?oa(i,f):Ap(i,d,f,c)}switch(a){case"input":Hd(i,s);break;case"textarea":vE(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var C=s.value;C!=null?_s(i,!!s.multiple,C,!1):m!==!!s.multiple&&(s.defaultValue!=null?_s(i,!!s.multiple,s.defaultValue,!0):_s(i,!!s.multiple,s.multiple?[]:"",!1))}i[ma]=s}catch(k){Ne(t,t.return,k)}}break;case 6:if(nn(e,t),wn(t),r&4){if(t.stateNode===null)throw Error(V(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(k){Ne(t,t.return,k)}}break;case 3:if(nn(e,t),wn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ca(e.containerInfo)}catch(k){Ne(t,t.return,k)}break;case 4:nn(e,t),wn(t);break;case 13:nn(e,t),wn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(om=be())),r&4&&Cy(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(ct=(c=ct)||d,nn(e,t),ct=c):nn(e,t),wn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(H=t,d=t.child;d!==null;){for(f=H=d;H!==null;){switch(m=H,C=m.child,m.tag){case 0:case 11:case 14:case 15:qo(4,m,m.return);break;case 1:ds(m,m.return);var v=m.stateNode;if(typeof v.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(k){Ne(r,n,k)}}break;case 5:ds(m,m.return);break;case 22:if(m.memoizedState!==null){Ay(f);continue}}C!==null?(C.return=m,H=C):Ay(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=TE("display",o))}catch(k){Ne(t,t.return,k)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(k){Ne(t,t.return,k)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:nn(e,t),wn(t),r&4&&Cy(t);break;case 21:break;default:nn(e,t),wn(t)}}function wn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Kw(n)){var r=n;break e}n=n.return}throw Error(V(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(oa(i,""),r.flags&=-33);var s=Sy(t);Af(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Sy(t);Rf(t,a,o);break;default:throw Error(V(161))}}catch(u){Ne(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function gk(t,e,n){H=t,Xw(t)}function Xw(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Bl;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||ct;a=Bl;var c=ct;if(Bl=o,(ct=u)&&!c)for(H=i;H!==null;)o=H,u=o.child,o.tag===22&&o.memoizedState!==null?ky(i):u!==null?(u.return=o,H=u):ky(i);for(;s!==null;)H=s,Xw(s),s=s.sibling;H=i,Bl=a,ct=c}Ry(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):Ry(t)}}function Ry(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ct||Mc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ct)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:rn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&cy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}cy(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&ca(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(V(163))}ct||e.flags&512&&Cf(e)}catch(m){Ne(e,e.return,m)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function Ay(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function ky(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Mc(4,e)}catch(u){Ne(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ne(e,i,u)}}var s=e.return;try{Cf(e)}catch(u){Ne(e,s,u)}break;case 5:var o=e.return;try{Cf(e)}catch(u){Ne(e,o,u)}}}catch(u){Ne(e,e.return,u)}if(e===t){H=null;break}var a=e.sibling;if(a!==null){a.return=e.return,H=a;break}H=e.return}}var _k=Math.ceil,Bu=lr.ReactCurrentDispatcher,im=lr.ReactCurrentOwner,Yt=lr.ReactCurrentBatchConfig,oe=0,qe=null,Me=null,Ze=0,Lt=0,fs=qr(0),Ue=0,wa=null,Ii=0,Fc=0,sm=0,Go=null,Ct=null,om=0,Ls=1/0,zn=null,zu=!1,kf=null,xr=null,zl=!1,Sr=null,$u=0,Ko=0,Pf=null,au=-1,lu=0;function wt(){return oe&6?be():au!==-1?au:au=be()}function Or(t){return t.mode&1?oe&2&&Ze!==0?Ze&-Ze:ek.transition!==null?(lu===0&&(lu=LE()),lu):(t=ce,t!==0||(t=window.event,t=t===void 0?16:zE(t.type)),t):1}function fn(t,e,n,r){if(50<Ko)throw Ko=0,Pf=null,Error(V(185));ja(t,n,r),(!(oe&2)||t!==qe)&&(t===qe&&(!(oe&2)&&(Fc|=n),Ue===4&&yr(t,Ze)),Nt(t,r),n===1&&oe===0&&!(e.mode&1)&&(Ls=be()+500,bc&&Gr()))}function Nt(t,e){var n=t.callbackNode;eA(t,e);var r=Ru(t,t===qe?Ze:0);if(r===0)n!==null&&F_(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&F_(n),e===1)t.tag===0?ZA(Py.bind(null,t)):aw(Py.bind(null,t)),QA(function(){!(oe&6)&&Gr()}),n=null;else{switch(ME(r)){case 1:n=Op;break;case 4:n=bE;break;case 16:n=Cu;break;case 536870912:n=DE;break;default:n=Cu}n=sT(n,Jw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Jw(t,e){if(au=-1,lu=0,oe&6)throw Error(V(327));var n=t.callbackNode;if(Ts()&&t.callbackNode!==n)return null;var r=Ru(t,t===qe?Ze:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Wu(t,r);else{e=r;var i=oe;oe|=2;var s=eT();(qe!==t||Ze!==e)&&(zn=null,Ls=be()+500,mi(t,e));do try{Ek();break}catch(a){Zw(t,a)}while(!0);Hp(),Bu.current=s,oe=i,Me!==null?e=0:(qe=null,Ze=0,e=Ue)}if(e!==0){if(e===2&&(i=tf(t),i!==0&&(r=i,e=Nf(t,i))),e===1)throw n=wa,mi(t,0),yr(t,r),Nt(t,be()),n;if(e===6)yr(t,r);else{if(i=t.current.alternate,!(r&30)&&!yk(i)&&(e=Wu(t,r),e===2&&(s=tf(t),s!==0&&(r=s,e=Nf(t,s))),e===1))throw n=wa,mi(t,0),yr(t,r),Nt(t,be()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(V(345));case 2:si(t,Ct,zn);break;case 3:if(yr(t,r),(r&130023424)===r&&(e=om+500-be(),10<e)){if(Ru(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){wt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=cf(si.bind(null,t,Ct,zn),e);break}si(t,Ct,zn);break;case 4:if(yr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-dn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*_k(r/1960))-r,10<r){t.timeoutHandle=cf(si.bind(null,t,Ct,zn),r);break}si(t,Ct,zn);break;case 5:si(t,Ct,zn);break;default:throw Error(V(329))}}}return Nt(t,be()),t.callbackNode===n?Jw.bind(null,t):null}function Nf(t,e){var n=Go;return t.current.memoizedState.isDehydrated&&(mi(t,e).flags|=256),t=Wu(t,e),t!==2&&(e=Ct,Ct=n,e!==null&&xf(e)),t}function xf(t){Ct===null?Ct=t:Ct.push.apply(Ct,t)}function yk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!mn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function yr(t,e){for(e&=~sm,e&=~Fc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-dn(e),r=1<<n;t[n]=-1,e&=~r}}function Py(t){if(oe&6)throw Error(V(327));Ts();var e=Ru(t,0);if(!(e&1))return Nt(t,be()),null;var n=Wu(t,e);if(t.tag!==0&&n===2){var r=tf(t);r!==0&&(e=r,n=Nf(t,r))}if(n===1)throw n=wa,mi(t,0),yr(t,e),Nt(t,be()),n;if(n===6)throw Error(V(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,si(t,Ct,zn),Nt(t,be()),null}function am(t,e){var n=oe;oe|=1;try{return t(e)}finally{oe=n,oe===0&&(Ls=be()+500,bc&&Gr())}}function Si(t){Sr!==null&&Sr.tag===0&&!(oe&6)&&Ts();var e=oe;oe|=1;var n=Yt.transition,r=ce;try{if(Yt.transition=null,ce=1,t)return t()}finally{ce=r,Yt.transition=n,oe=e,!(oe&6)&&Gr()}}function lm(){Lt=fs.current,Ee(fs)}function mi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,KA(n)),Me!==null)for(n=Me.return;n!==null;){var r=n;switch(zp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&xu();break;case 3:bs(),Ee(kt),Ee(gt),Xp();break;case 5:Yp(r);break;case 4:bs();break;case 13:Ee(Ce);break;case 19:Ee(Ce);break;case 10:qp(r.type._context);break;case 22:case 23:lm()}n=n.return}if(qe=t,Me=t=br(t.current,null),Ze=Lt=e,Ue=0,wa=null,sm=Fc=Ii=0,Ct=Go=null,ui!==null){for(e=0;e<ui.length;e++)if(n=ui[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ui=null}return t}function Zw(t,e){do{var n=Me;try{if(Hp(),iu.current=ju,Uu){for(var r=Re.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Uu=!1}if(Ti=0,ze=Ve=Re=null,Ho=!1,ya=0,im.current=null,n===null||n.return===null){Ue=1,wa=e,Me=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=Ze,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var C=gy(o);if(C!==null){C.flags&=-257,_y(C,o,a,s,e),C.mode&1&&my(s,c,e),e=C,u=c;var v=e.updateQueue;if(v===null){var k=new Set;k.add(u),e.updateQueue=k}else v.add(u);break e}else{if(!(e&1)){my(s,c,e),um();break e}u=Error(V(426))}}else if(Ie&&a.mode&1){var P=gy(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),_y(P,o,a,s,e),$p(Ds(u,a));break e}}s=u=Ds(u,a),Ue!==4&&(Ue=2),Go===null?Go=[s]:Go.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=Mw(s,u,e);uy(s,w);break e;case 1:a=u;var y=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(xr===null||!xr.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var b=Fw(s,a,e);uy(s,b);break e}}s=s.return}while(s!==null)}nT(n)}catch(F){e=F,Me===n&&n!==null&&(Me=n=n.return);continue}break}while(!0)}function eT(){var t=Bu.current;return Bu.current=ju,t===null?ju:t}function um(){(Ue===0||Ue===3||Ue===2)&&(Ue=4),qe===null||!(Ii&268435455)&&!(Fc&268435455)||yr(qe,Ze)}function Wu(t,e){var n=oe;oe|=2;var r=eT();(qe!==t||Ze!==e)&&(zn=null,mi(t,e));do try{vk();break}catch(i){Zw(t,i)}while(!0);if(Hp(),oe=n,Bu.current=r,Me!==null)throw Error(V(261));return qe=null,Ze=0,Ue}function vk(){for(;Me!==null;)tT(Me)}function Ek(){for(;Me!==null&&!H1();)tT(Me)}function tT(t){var e=iT(t.alternate,t,Lt);t.memoizedProps=t.pendingProps,e===null?nT(t):Me=e,im.current=null}function nT(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=fk(n,e),n!==null){n.flags&=32767,Me=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ue=6,Me=null;return}}else if(n=dk(n,e,Lt),n!==null){Me=n;return}if(e=e.sibling,e!==null){Me=e;return}Me=e=t}while(e!==null);Ue===0&&(Ue=5)}function si(t,e,n){var r=ce,i=Yt.transition;try{Yt.transition=null,ce=1,wk(t,e,n,r)}finally{Yt.transition=i,ce=r}return null}function wk(t,e,n,r){do Ts();while(Sr!==null);if(oe&6)throw Error(V(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(V(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(tA(t,s),t===qe&&(Me=qe=null,Ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||zl||(zl=!0,sT(Cu,function(){return Ts(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Yt.transition,Yt.transition=null;var o=ce;ce=1;var a=oe;oe|=4,im.current=null,mk(t,n),Yw(n,t),BA(lf),Au=!!af,lf=af=null,t.current=n,gk(n),q1(),oe=a,ce=o,Yt.transition=s}else t.current=n;if(zl&&(zl=!1,Sr=t,$u=i),s=t.pendingLanes,s===0&&(xr=null),Q1(n.stateNode),Nt(t,be()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(zu)throw zu=!1,t=kf,kf=null,t;return $u&1&&t.tag!==0&&Ts(),s=t.pendingLanes,s&1?t===Pf?Ko++:(Ko=0,Pf=t):Ko=0,Gr(),null}function Ts(){if(Sr!==null){var t=ME($u),e=Yt.transition,n=ce;try{if(Yt.transition=null,ce=16>t?16:t,Sr===null)var r=!1;else{if(t=Sr,Sr=null,$u=0,oe&6)throw Error(V(331));var i=oe;for(oe|=4,H=t.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(H=c;H!==null;){var d=H;switch(d.tag){case 0:case 11:case 15:qo(8,d,s)}var f=d.child;if(f!==null)f.return=d,H=f;else for(;H!==null;){d=H;var m=d.sibling,C=d.return;if(Gw(d),d===c){H=null;break}if(m!==null){m.return=C,H=m;break}H=C}}}var v=s.alternate;if(v!==null){var k=v.child;if(k!==null){v.child=null;do{var P=k.sibling;k.sibling=null,k=P}while(k!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:qo(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,H=w;break e}H=s.return}}var y=t.current;for(H=y;H!==null;){o=H;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,H=S;else e:for(o=y;H!==null;){if(a=H,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Mc(9,a)}}catch(F){Ne(a,a.return,F)}if(a===o){H=null;break e}var b=a.sibling;if(b!==null){b.return=a.return,H=b;break e}H=a.return}}if(oe=i,Gr(),An&&typeof An.onPostCommitFiberRoot=="function")try{An.onPostCommitFiberRoot(kc,t)}catch{}r=!0}return r}finally{ce=n,Yt.transition=e}}return!1}function Ny(t,e,n){e=Ds(n,e),e=Mw(t,e,1),t=Nr(t,e,1),e=wt(),t!==null&&(ja(t,1,e),Nt(t,e))}function Ne(t,e,n){if(t.tag===3)Ny(t,t,n);else for(;e!==null;){if(e.tag===3){Ny(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xr===null||!xr.has(r))){t=Ds(n,t),t=Fw(e,t,1),e=Nr(e,t,1),t=wt(),e!==null&&(ja(e,1,t),Nt(e,t));break}}e=e.return}}function Tk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=wt(),t.pingedLanes|=t.suspendedLanes&n,qe===t&&(Ze&n)===n&&(Ue===4||Ue===3&&(Ze&130023424)===Ze&&500>be()-om?mi(t,0):sm|=n),Nt(t,e)}function rT(t,e){e===0&&(t.mode&1?(e=Ol,Ol<<=1,!(Ol&130023424)&&(Ol=4194304)):e=1);var n=wt();t=rr(t,e),t!==null&&(ja(t,e,n),Nt(t,n))}function Ik(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),rT(t,n)}function Sk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(V(314))}r!==null&&r.delete(e),rT(t,n)}var iT;iT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||kt.current)Rt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Rt=!1,hk(t,e,n);Rt=!!(t.flags&131072)}else Rt=!1,Ie&&e.flags&1048576&&lw(e,Du,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ou(t,e),t=e.pendingProps;var i=Ns(e,gt.current);ws(e,n),i=Zp(null,e,r,t,i,n);var s=em();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Pt(r)?(s=!0,Ou(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Kp(e),i.updater=Lc,e.stateNode=i,i._reactInternals=e,_f(e,r,t,n),e=Ef(null,e,r,!0,s,n)):(e.tag=0,Ie&&s&&Bp(e),Et(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ou(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Rk(r),t=rn(r,t),i){case 0:e=vf(null,e,r,t,n);break e;case 1:e=Ey(null,e,r,t,n);break e;case 11:e=yy(null,e,r,t,n);break e;case 14:e=vy(null,e,r,rn(r.type,t),n);break e}throw Error(V(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rn(r,i),vf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rn(r,i),Ey(t,e,r,i,n);case 3:e:{if(Bw(e),t===null)throw Error(V(387));r=e.pendingProps,s=e.memoizedState,i=s.element,pw(t,e),Fu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ds(Error(V(423)),e),e=wy(t,e,r,n,i);break e}else if(r!==i){i=Ds(Error(V(424)),e),e=wy(t,e,r,n,i);break e}else for(Ft=Pr(e.stateNode.containerInfo.firstChild),Vt=e,Ie=!0,on=null,n=dw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xs(),r===i){e=ir(t,e,n);break e}Et(t,e,r,n)}e=e.child}return e;case 5:return mw(e),t===null&&pf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,uf(r,i)?o=null:s!==null&&uf(r,s)&&(e.flags|=32),jw(t,e),Et(t,e,o,n),e.child;case 6:return t===null&&pf(e),null;case 13:return zw(t,e,n);case 4:return Qp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Os(e,null,r,n):Et(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rn(r,i),yy(t,e,r,i,n);case 7:return Et(t,e,e.pendingProps,n),e.child;case 8:return Et(t,e,e.pendingProps.children,n),e.child;case 12:return Et(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,pe(Lu,r._currentValue),r._currentValue=o,s!==null)if(mn(s.value,o)){if(s.children===i.children&&!kt.current){e=ir(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Yn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),mf(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(V(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),mf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Et(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ws(e,n),i=Xt(i),r=r(i),e.flags|=1,Et(t,e,r,n),e.child;case 14:return r=e.type,i=rn(r,e.pendingProps),i=rn(r.type,i),vy(t,e,r,i,n);case 15:return Vw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rn(r,i),ou(t,e),e.tag=1,Pt(r)?(t=!0,Ou(e)):t=!1,ws(e,n),Lw(e,r,i),_f(e,r,i,n),Ef(null,e,r,!0,t,n);case 19:return $w(t,e,n);case 22:return Uw(t,e,n)}throw Error(V(156,e.tag))};function sT(t,e){return OE(t,e)}function Ck(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kt(t,e,n,r){return new Ck(t,e,n,r)}function cm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Rk(t){if(typeof t=="function")return cm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Pp)return 11;if(t===Np)return 14}return 2}function br(t,e){var n=t.alternate;return n===null?(n=Kt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function uu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")cm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case rs:return gi(n.children,i,s,e);case kp:o=8,i|=8;break;case jd:return t=Kt(12,n,e,i|2),t.elementType=jd,t.lanes=s,t;case Bd:return t=Kt(13,n,e,i),t.elementType=Bd,t.lanes=s,t;case zd:return t=Kt(19,n,e,i),t.elementType=zd,t.lanes=s,t;case mE:return Vc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case fE:o=10;break e;case pE:o=9;break e;case Pp:o=11;break e;case Np:o=14;break e;case mr:o=16,r=null;break e}throw Error(V(130,t==null?t:typeof t,""))}return e=Kt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function gi(t,e,n,r){return t=Kt(7,t,r,e),t.lanes=n,t}function Vc(t,e,n,r){return t=Kt(22,t,r,e),t.elementType=mE,t.lanes=n,t.stateNode={isHidden:!1},t}function hd(t,e,n){return t=Kt(6,t,null,e),t.lanes=n,t}function dd(t,e,n){return e=Kt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ak(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qh(0),this.expirationTimes=qh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function hm(t,e,n,r,i,s,o,a,u){return t=new Ak(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Kt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kp(s),t}function kk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ns,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function oT(t){if(!t)return jr;t=t._reactInternals;e:{if(Vi(t)!==t||t.tag!==1)throw Error(V(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Pt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(V(171))}if(t.tag===1){var n=t.type;if(Pt(n))return ow(t,n,e)}return e}function aT(t,e,n,r,i,s,o,a,u){return t=hm(n,r,!0,t,i,s,o,a,u),t.context=oT(null),n=t.current,r=wt(),i=Or(n),s=Yn(r,i),s.callback=e??null,Nr(n,s,i),t.current.lanes=i,ja(t,i,r),Nt(t,r),t}function Uc(t,e,n,r){var i=e.current,s=wt(),o=Or(i);return n=oT(n),e.context===null?e.context=n:e.pendingContext=n,e=Yn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Nr(i,e,o),t!==null&&(fn(t,i,o,s),ru(t,i,o)),o}function Hu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function xy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function dm(t,e){xy(t,e),(t=t.alternate)&&xy(t,e)}function Pk(){return null}var lT=typeof reportError=="function"?reportError:function(t){console.error(t)};function fm(t){this._internalRoot=t}jc.prototype.render=fm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(V(409));Uc(t,e,null,null)};jc.prototype.unmount=fm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Si(function(){Uc(null,t,null,null)}),e[nr]=null}};function jc(t){this._internalRoot=t}jc.prototype.unstable_scheduleHydration=function(t){if(t){var e=UE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<_r.length&&e!==0&&e<_r[n].priority;n++);_r.splice(n,0,t),n===0&&BE(t)}};function pm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Bc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Oy(){}function Nk(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Hu(o);s.call(c)}}var o=aT(e,r,t,0,null,!1,!1,"",Oy);return t._reactRootContainer=o,t[nr]=o.current,fa(t.nodeType===8?t.parentNode:t),Si(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Hu(u);a.call(c)}}var u=hm(t,0,!1,null,null,!1,!1,"",Oy);return t._reactRootContainer=u,t[nr]=u.current,fa(t.nodeType===8?t.parentNode:t),Si(function(){Uc(e,u,n,r)}),u}function zc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=Hu(o);a.call(u)}}Uc(e,o,t,i)}else o=Nk(n,e,t,i,r);return Hu(o)}FE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Lo(e.pendingLanes);n!==0&&(bp(e,n|1),Nt(e,be()),!(oe&6)&&(Ls=be()+500,Gr()))}break;case 13:Si(function(){var r=rr(t,1);if(r!==null){var i=wt();fn(r,t,1,i)}}),dm(t,1)}};Dp=function(t){if(t.tag===13){var e=rr(t,134217728);if(e!==null){var n=wt();fn(e,t,134217728,n)}dm(t,134217728)}};VE=function(t){if(t.tag===13){var e=Or(t),n=rr(t,e);if(n!==null){var r=wt();fn(n,t,e,r)}dm(t,e)}};UE=function(){return ce};jE=function(t,e){var n=ce;try{return ce=t,e()}finally{ce=n}};Jd=function(t,e,n){switch(e){case"input":if(Hd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Oc(r);if(!i)throw Error(V(90));_E(r),Hd(r,i)}}}break;case"textarea":vE(t,n);break;case"select":e=n.value,e!=null&&_s(t,!!n.multiple,e,!1)}};RE=am;AE=Si;var xk={usingClientEntryPoint:!1,Events:[za,as,Oc,SE,CE,am]},Ro={findFiberByHostInstance:li,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ok={bundleType:Ro.bundleType,version:Ro.version,rendererPackageName:Ro.rendererPackageName,rendererConfig:Ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:lr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=NE(t),t===null?null:t.stateNode},findFiberByHostInstance:Ro.findFiberByHostInstance||Pk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$l.isDisabled&&$l.supportsFiber)try{kc=$l.inject(Ok),An=$l}catch{}}$t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xk;$t.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pm(e))throw Error(V(200));return kk(t,e,null,n)};$t.createRoot=function(t,e){if(!pm(t))throw Error(V(299));var n=!1,r="",i=lT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=hm(t,1,!1,null,null,n,!1,r,i),t[nr]=e.current,fa(t.nodeType===8?t.parentNode:t),new fm(e)};$t.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(V(188)):(t=Object.keys(t).join(","),Error(V(268,t)));return t=NE(e),t=t===null?null:t.stateNode,t};$t.flushSync=function(t){return Si(t)};$t.hydrate=function(t,e,n){if(!Bc(e))throw Error(V(200));return zc(null,t,e,!0,n)};$t.hydrateRoot=function(t,e,n){if(!pm(t))throw Error(V(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=lT;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=aT(e,null,t,1,n??null,i,!1,s,o),t[nr]=e.current,fa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new jc(e)};$t.render=function(t,e,n){if(!Bc(e))throw Error(V(200));return zc(null,t,e,!1,n)};$t.unmountComponentAtNode=function(t){if(!Bc(t))throw Error(V(40));return t._reactRootContainer?(Si(function(){zc(null,null,t,!1,function(){t._reactRootContainer=null,t[nr]=null})}),!0):!1};$t.unstable_batchedUpdates=am;$t.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Bc(n))throw Error(V(200));if(t==null||t._reactInternals===void 0)throw Error(V(38));return zc(t,e,n,!1,r)};$t.version="18.3.1-next-f1338f8080-20240426";function uT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uT)}catch(t){console.error(t)}}uT(),uE.exports=$t;var bk=uE.exports,by=bk;Vd.createRoot=by.createRoot,Vd.hydrateRoot=by.hydrateRoot;/**
 * @remix-run/router v1.19.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ta(){return Ta=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ta.apply(this,arguments)}var Cr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Cr||(Cr={}));const Dy="popstate";function Dk(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Of("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:qu(i)}return Mk(e,n,null,t)}function Fe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function cT(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Lk(){return Math.random().toString(36).substr(2,8)}function Ly(t,e){return{usr:t.state,key:t.key,idx:e}}function Of(t,e,n,r){return n===void 0&&(n=null),Ta({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Gs(e):e,{state:n,key:e&&e.key||r||Lk()})}function qu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Gs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Mk(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Cr.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(Ta({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){a=Cr.Pop;let P=d(),w=P==null?null:P-c;c=P,u&&u({action:a,location:k.location,delta:w})}function m(P,w){a=Cr.Push;let y=Of(k.location,P,w);c=d()+1;let S=Ly(y,c),b=k.createHref(y);try{o.pushState(S,"",b)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;i.location.assign(b)}s&&u&&u({action:a,location:k.location,delta:1})}function C(P,w){a=Cr.Replace;let y=Of(k.location,P,w);c=d();let S=Ly(y,c),b=k.createHref(y);o.replaceState(S,"",b),s&&u&&u({action:a,location:k.location,delta:0})}function v(P){let w=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof P=="string"?P:qu(P);return y=y.replace(/ $/,"%20"),Fe(w,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,w)}let k={get action(){return a},get location(){return t(i,o)},listen(P){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Dy,f),u=P,()=>{i.removeEventListener(Dy,f),u=null}},createHref(P){return e(i,P)},createURL:v,encodeLocation(P){let w=v(P);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:m,replace:C,go(P){return o.go(P)}};return k}var My;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(My||(My={}));function Fk(t,e,n){return n===void 0&&(n="/"),Vk(t,e,n,!1)}function Vk(t,e,n,r){let i=typeof e=="string"?Gs(e):e,s=mm(i.pathname||"/",n);if(s==null)return null;let o=hT(t);Uk(o);let a=null;for(let u=0;a==null&&u<o.length;++u){let c=Yk(s);a=Kk(o[u],c,r)}return a}function hT(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Fe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Dr([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(Fe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),hT(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:qk(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of dT(s.path))i(s,o,u)}),e}function dT(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=dT(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function Uk(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Gk(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const jk=/^:[\w-]+$/,Bk=3,zk=2,$k=1,Wk=10,Hk=-2,Fy=t=>t==="*";function qk(t,e){let n=t.split("/"),r=n.length;return n.some(Fy)&&(r+=Hk),e&&(r+=zk),n.filter(i=>!Fy(i)).reduce((i,s)=>i+(jk.test(s)?Bk:s===""?$k:Wk),r)}function Gk(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Kk(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=Vy({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!f&&c&&n&&!r[r.length-1].route.index&&(f=Vy({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:Dr([s,f.pathname]),pathnameBase:eP(Dr([s,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(s=Dr([s,f.pathnameBase]))}return o}function Vy(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Qk(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:m,isOptional:C}=d;if(m==="*"){let k=a[f]||"";o=s.slice(0,s.length-k.length).replace(/(.)\/+$/,"$1")}const v=a[f];return C&&!v?c[m]=void 0:c[m]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function Qk(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),cT(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Yk(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return cT(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function mm(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Xk(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Gs(t):t;return{pathname:n?n.startsWith("/")?n:Jk(n,e):e,search:tP(r),hash:nP(i)}}function Jk(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function fd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Zk(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function fT(t,e){let n=Zk(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function pT(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Gs(t):(i=Ta({},t),Fe(!i.pathname||!i.pathname.includes("?"),fd("?","pathname","search",i)),Fe(!i.pathname||!i.pathname.includes("#"),fd("#","pathname","hash",i)),Fe(!i.search||!i.search.includes("#"),fd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}a=f>=0?e[f]:"/"}let u=Xk(i,a),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const Dr=t=>t.join("/").replace(/\/\/+/g,"/"),eP=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),tP=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,nP=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function rP(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const mT=["post","put","patch","delete"];new Set(mT);const iP=["get",...mT];new Set(iP);/**
 * React Router v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ia(){return Ia=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ia.apply(this,arguments)}const gm=j.createContext(null),sP=j.createContext(null),Ui=j.createContext(null),$c=j.createContext(null),Kr=j.createContext({outlet:null,matches:[],isDataRoute:!1}),gT=j.createContext(null);function oP(t,e){let{relative:n}=e===void 0?{}:e;Wa()||Fe(!1);let{basename:r,navigator:i}=j.useContext(Ui),{hash:s,pathname:o,search:a}=vT(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Dr([r,o])),i.createHref({pathname:u,search:a,hash:s})}function Wa(){return j.useContext($c)!=null}function Wc(){return Wa()||Fe(!1),j.useContext($c).location}function _T(t){j.useContext(Ui).static||j.useLayoutEffect(t)}function Ha(){let{isDataRoute:t}=j.useContext(Kr);return t?vP():aP()}function aP(){Wa()||Fe(!1);let t=j.useContext(gm),{basename:e,future:n,navigator:r}=j.useContext(Ui),{matches:i}=j.useContext(Kr),{pathname:s}=Wc(),o=JSON.stringify(fT(i,n.v7_relativeSplatPath)),a=j.useRef(!1);return _T(()=>{a.current=!0}),j.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=pT(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Dr([e,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[e,r,o,s,t])}function yT(){let{matches:t}=j.useContext(Kr),e=t[t.length-1];return e?e.params:{}}function vT(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=j.useContext(Ui),{matches:i}=j.useContext(Kr),{pathname:s}=Wc(),o=JSON.stringify(fT(i,r.v7_relativeSplatPath));return j.useMemo(()=>pT(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function lP(t,e){return uP(t,e)}function uP(t,e,n,r){Wa()||Fe(!1);let{navigator:i}=j.useContext(Ui),{matches:s}=j.useContext(Kr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Wc(),d;if(e){var f;let P=typeof e=="string"?Gs(e):e;u==="/"||(f=P.pathname)!=null&&f.startsWith(u)||Fe(!1),d=P}else d=c;let m=d.pathname||"/",C=m;if(u!=="/"){let P=u.replace(/^\//,"").split("/");C="/"+m.replace(/^\//,"").split("/").slice(P.length).join("/")}let v=Fk(t,{pathname:C}),k=pP(v&&v.map(P=>Object.assign({},P,{params:Object.assign({},a,P.params),pathname:Dr([u,i.encodeLocation?i.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?u:Dr([u,i.encodeLocation?i.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),s,n,r);return e&&k?j.createElement($c.Provider,{value:{location:Ia({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Cr.Pop}},k):k}function cP(){let t=yP(),e=rP(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},e),n?j.createElement("pre",{style:i},n):null,null)}const hP=j.createElement(cP,null);class dP extends j.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?j.createElement(Kr.Provider,{value:this.props.routeContext},j.createElement(gT.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function fP(t){let{routeContext:e,match:n,children:r}=t,i=j.useContext(gm);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(Kr.Provider,{value:e},r)}function pP(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||Fe(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:m,errors:C}=n,v=f.route.loader&&m[f.route.id]===void 0&&(!C||C[f.route.id]===void 0);if(f.route.lazy||v){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,f,m)=>{let C,v=!1,k=null,P=null;n&&(C=a&&f.route.id?a[f.route.id]:void 0,k=f.route.errorElement||hP,u&&(c<0&&m===0?(v=!0,P=null):c===m&&(v=!0,P=f.route.hydrateFallbackElement||null)));let w=e.concat(o.slice(0,m+1)),y=()=>{let S;return C?S=k:v?S=P:f.route.Component?S=j.createElement(f.route.Component,null):f.route.element?S=f.route.element:S=d,j.createElement(fP,{match:f,routeContext:{outlet:d,matches:w,isDataRoute:n!=null},children:S})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?j.createElement(dP,{location:n.location,revalidation:n.revalidation,component:k,error:C,children:y(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):y()},null)}var ET=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(ET||{}),Gu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Gu||{});function mP(t){let e=j.useContext(gm);return e||Fe(!1),e}function gP(t){let e=j.useContext(sP);return e||Fe(!1),e}function _P(t){let e=j.useContext(Kr);return e||Fe(!1),e}function wT(t){let e=_P(),n=e.matches[e.matches.length-1];return n.route.id||Fe(!1),n.route.id}function yP(){var t;let e=j.useContext(gT),n=gP(Gu.UseRouteError),r=wT(Gu.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function vP(){let{router:t}=mP(ET.UseNavigateStable),e=wT(Gu.UseNavigateStable),n=j.useRef(!1);return _T(()=>{n.current=!0}),j.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Ia({fromRouteId:e},s)))},[t,e])}function jn(t){Fe(!1)}function EP(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Cr.Pop,navigator:s,static:o=!1,future:a}=t;Wa()&&Fe(!1);let u=e.replace(/^\/*/,"/"),c=j.useMemo(()=>({basename:u,navigator:s,static:o,future:Ia({v7_relativeSplatPath:!1},a)}),[u,a,s,o]);typeof r=="string"&&(r=Gs(r));let{pathname:d="/",search:f="",hash:m="",state:C=null,key:v="default"}=r,k=j.useMemo(()=>{let P=mm(d,u);return P==null?null:{location:{pathname:P,search:f,hash:m,state:C,key:v},navigationType:i}},[u,d,f,m,C,v,i]);return k==null?null:j.createElement(Ui.Provider,{value:c},j.createElement($c.Provider,{children:n,value:k}))}function wP(t){let{children:e,location:n}=t;return lP(bf(e),n)}new Promise(()=>{});function bf(t,e){e===void 0&&(e=[]);let n=[];return j.Children.forEach(t,(r,i)=>{if(!j.isValidElement(r))return;let s=[...e,i];if(r.type===j.Fragment){n.push.apply(n,bf(r.props.children,s));return}r.type!==jn&&Fe(!1),!r.props.index||!r.props.children||Fe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=bf(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Df(){return Df=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Df.apply(this,arguments)}function TP(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function IP(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function SP(t,e){return t.button===0&&(!e||e==="_self")&&!IP(t)}const CP=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],RP="6";try{window.__reactRouterVersion=RP}catch{}const AP="startTransition",Uy=T1[AP];function kP(t){let{basename:e,children:n,future:r,window:i}=t,s=j.useRef();s.current==null&&(s.current=Dk({window:i,v5Compat:!0}));let o=s.current,[a,u]=j.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=j.useCallback(f=>{c&&Uy?Uy(()=>u(f)):u(f)},[u,c]);return j.useLayoutEffect(()=>o.listen(d),[o,d]),j.createElement(EP,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const PP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",NP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Mt=j.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:u,to:c,preventScrollReset:d,unstable_viewTransition:f}=e,m=TP(e,CP),{basename:C}=j.useContext(Ui),v,k=!1;if(typeof c=="string"&&NP.test(c)&&(v=c,PP))try{let S=new URL(window.location.href),b=c.startsWith("//")?new URL(S.protocol+c):new URL(c),F=mm(b.pathname,C);b.origin===S.origin&&F!=null?c=F+b.search+b.hash:k=!0}catch{}let P=oP(c,{relative:i}),w=xP(c,{replace:o,state:a,target:u,preventScrollReset:d,relative:i,unstable_viewTransition:f});function y(S){r&&r(S),S.defaultPrevented||w(S)}return j.createElement("a",Df({},m,{href:v||P,onClick:k||s?r:y,ref:n,target:u}))});var jy;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(jy||(jy={}));var By;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(By||(By={}));function xP(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,u=Ha(),c=Wc(),d=vT(t,{relative:o});return j.useCallback(f=>{if(SP(f,n)){f.preventDefault();let m=r!==void 0?r:qu(c)===qu(d);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[c,u,d,r,i,n,t,s,o,a])}var zy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $=function(t,e){if(!t)throw Ks(e)},Ks=function(t){return new Error("Firebase Database ("+TT.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},OP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},_m={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,f=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,C=c&63;u||(C=64,o||(m=64)),r.push(n[d],n[f],n[m],n[C])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(IT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):OP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new bP;const m=s<<2|a>>4;if(r.push(m),c!==64){const C=a<<4&240|c>>2;if(r.push(C),f!==64){const v=c<<6&192|f;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class bP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ST=function(t){const e=IT(t);return _m.encodeByteArray(e,!0)},Ku=function(t){return ST(t).replace(/\./g,"")},Qu=function(t){try{return _m.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DP(t){return CT(void 0,t)}function CT(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!LP(n)||(t[n]=CT(t[n],e[n]));return t}function LP(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FP=()=>MP().__FIREBASE_DEFAULTS__,VP=()=>{if(typeof process>"u"||typeof zy>"u")return;const t=zy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},UP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Qu(t[1]);return e&&JSON.parse(e)},Hc=()=>{try{return FP()||VP()||UP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},RT=t=>{var e,n;return(n=(e=Hc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},AT=t=>{const e=RT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},kT=()=>{var t;return(t=Hc())===null||t===void 0?void 0:t.config},PT=t=>{var e;return(e=Hc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ku(JSON.stringify(n)),Ku(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_t())}function jP(){var t;const e=(t=Hc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function BP(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function xT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function OT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function zP(){const t=_t();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function bT(){return TT.NODE_ADMIN===!0}function $P(){return!jP()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function DT(){try{return typeof indexedDB=="object"}catch{return!1}}function LT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function WP(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HP="FirebaseError";class vn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=HP,Object.setPrototypeOf(this,vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ji.prototype.create)}}class ji{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?qP(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new vn(i,a,r)}}function qP(t,e){return t.replace(GP,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const GP=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sa(t){return JSON.parse(t)}function Xe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MT=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Sa(Qu(s[0])||""),n=Sa(Qu(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},KP=function(t){const e=MT(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},QP=function(t){const e=MT(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ms(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Lf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Yu(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Ca(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if($y(s)&&$y(o)){if(!Ca(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function $y(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Fo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Vo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YP{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const m=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(m<<1|m>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],u=this.chain_[4],c,d;for(let f=0;f<80;f++){f<40?f<20?(c=a^s&(o^a),d=1518500249):(c=s^o^a,d=1859775393):f<60?(c=s&o|a&(s|o),d=2400959708):(c=s^o^a,d=3395469782);const m=(i<<5|i>>>27)+c+u+d+r[f]&4294967295;u=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=m}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function XP(t,e){const n=new JP(t,e);return n.subscribe.bind(n)}class JP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ZP(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=pd),i.error===void 0&&(i.error=pd),i.complete===void 0&&(i.complete=pd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ZP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function pd(){}function eN(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tN=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,$(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},qc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nN=1e3,rN=2,iN=4*60*60*1e3,sN=.5;function Wy(t,e=nN,n=rN){const r=e*Math.pow(n,t),i=Math.round(sN*r*(Math.random()-.5)*2);return Math.min(iN,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(t){return t&&t._delegate?t._delegate:t}class Zt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ym;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(lN(e))try{this.getOrInitializeService({instanceIdentifier:oi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=oi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=oi){return this.instances.has(e)}getOptions(e=oi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:aN(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=oi){return this.component?this.component.multipleInstances?e:oi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function aN(t){return t===oi?void 0:t}function lN(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new oN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Z||(Z={}));const cN={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},hN=Z.INFO,dN={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},fN=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=dN[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class qa{constructor(e){this.name=e,this._logLevel=hN,this._logHandler=fN,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cN[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const pN=(t,e)=>e.some(n=>t instanceof n);let Hy,qy;function mN(){return Hy||(Hy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gN(){return qy||(qy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const FT=new WeakMap,Mf=new WeakMap,VT=new WeakMap,md=new WeakMap,Em=new WeakMap;function _N(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Lr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&FT.set(n,t)}).catch(()=>{}),Em.set(e,t),e}function yN(t){if(Mf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Mf.set(t,e)}let Ff={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Mf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||VT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Lr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function vN(t){Ff=t(Ff)}function EN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(gd(this),e,...n);return VT.set(r,e.sort?e.sort():[e]),Lr(r)}:gN().includes(t)?function(...e){return t.apply(gd(this),e),Lr(FT.get(this))}:function(...e){return Lr(t.apply(gd(this),e))}}function wN(t){return typeof t=="function"?EN(t):(t instanceof IDBTransaction&&yN(t),pN(t,mN())?new Proxy(t,Ff):t)}function Lr(t){if(t instanceof IDBRequest)return _N(t);if(md.has(t))return md.get(t);const e=wN(t);return e!==t&&(md.set(t,e),Em.set(e,t)),e}const gd=t=>Em.get(t);function UT(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Lr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Lr(o.result),u.oldVersion,u.newVersion,Lr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const TN=["get","getKey","getAll","getAllKeys","count"],IN=["put","add","delete","clear"],_d=new Map;function Gy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(_d.get(e))return _d.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=IN.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||TN.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return _d.set(e,s),s}vN(t=>({...t,get:(e,n,r)=>Gy(e,n)||t.get(e,n,r),has:(e,n)=>!!Gy(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(CN(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function CN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vf="@firebase/app",Ky="0.10.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr=new qa("@firebase/app"),RN="@firebase/app-compat",AN="@firebase/analytics-compat",kN="@firebase/analytics",PN="@firebase/app-check-compat",NN="@firebase/app-check",xN="@firebase/auth",ON="@firebase/auth-compat",bN="@firebase/database",DN="@firebase/data-connect",LN="@firebase/database-compat",MN="@firebase/functions",FN="@firebase/functions-compat",VN="@firebase/installations",UN="@firebase/installations-compat",jN="@firebase/messaging",BN="@firebase/messaging-compat",zN="@firebase/performance",$N="@firebase/performance-compat",WN="@firebase/remote-config",HN="@firebase/remote-config-compat",qN="@firebase/storage",GN="@firebase/storage-compat",KN="@firebase/firestore",QN="@firebase/vertexai",YN="@firebase/firestore-compat",XN="firebase",JN="11.0.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf="[DEFAULT]",ZN={[Vf]:"fire-core",[RN]:"fire-core-compat",[kN]:"fire-analytics",[AN]:"fire-analytics-compat",[NN]:"fire-app-check",[PN]:"fire-app-check-compat",[xN]:"fire-auth",[ON]:"fire-auth-compat",[bN]:"fire-rtdb",[DN]:"fire-data-connect",[LN]:"fire-rtdb-compat",[MN]:"fire-fn",[FN]:"fire-fn-compat",[VN]:"fire-iid",[UN]:"fire-iid-compat",[jN]:"fire-fcm",[BN]:"fire-fcm-compat",[zN]:"fire-perf",[$N]:"fire-perf-compat",[WN]:"fire-rc",[HN]:"fire-rc-compat",[qN]:"fire-gcs",[GN]:"fire-gcs-compat",[KN]:"fire-fst",[YN]:"fire-fst-compat",[QN]:"fire-vertex","fire-js":"fire-js",[XN]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu=new Map,ex=new Map,jf=new Map;function Qy(t,e){try{t.container.addComponent(e)}catch(n){sr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function gn(t){const e=t.name;if(jf.has(e))return sr.debug(`There were multiple attempts to register component ${e}.`),!1;jf.set(e,t);for(const n of Xu.values())Qy(n,t);for(const n of ex.values())Qy(n,t);return!0}function Qr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Cn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Mr=new ji("app","Firebase",tx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Zt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi=JN;function jT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Uf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Mr.create("bad-app-name",{appName:String(i)});if(n||(n=kT()),!n)throw Mr.create("no-options");const s=Xu.get(i);if(s){if(Ca(n,s.options)&&Ca(r,s.config))return s;throw Mr.create("duplicate-app",{appName:i})}const o=new uN(i);for(const u of jf.values())o.addComponent(u);const a=new nx(n,r,o);return Xu.set(i,a),a}function Gc(t=Uf){const e=Xu.get(t);if(!e&&t===Uf&&kT())return jT();if(!e)throw Mr.create("no-app",{appName:t});return e}function xt(t,e,n){var r;let i=(r=ZN[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),sr.warn(a.join(" "));return}gn(new Zt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rx="firebase-heartbeat-database",ix=1,Ra="firebase-heartbeat-store";let yd=null;function BT(){return yd||(yd=UT(rx,ix,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ra)}catch(n){console.warn(n)}}}}).catch(t=>{throw Mr.create("idb-open",{originalErrorMessage:t.message})})),yd}async function sx(t){try{const n=(await BT()).transaction(Ra),r=await n.objectStore(Ra).get(zT(t));return await n.done,r}catch(e){if(e instanceof vn)sr.warn(e.message);else{const n=Mr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});sr.warn(n.message)}}}async function Yy(t,e){try{const r=(await BT()).transaction(Ra,"readwrite");await r.objectStore(Ra).put(e,zT(t)),await r.done}catch(n){if(n instanceof vn)sr.warn(n.message);else{const r=Mr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});sr.warn(r.message)}}}function zT(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ox=1024,ax=30*24*60*60*1e3;class lx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new cx(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Xy();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=ax}),this._storage.overwrite(this._heartbeatsCache))}catch(r){sr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Xy(),{heartbeatsToSend:r,unsentEntries:i}=ux(this._heartbeatsCache.heartbeats),s=Ku(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return sr.warn(n),""}}}function Xy(){return new Date().toISOString().substring(0,10)}function ux(t,e=ox){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Jy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Jy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class cx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return DT()?LT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await sx(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Yy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Yy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Jy(t){return Ku(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hx(t){gn(new Zt("platform-logger",e=>new SN(e),"PRIVATE")),gn(new Zt("heartbeat",e=>new lx(e),"PRIVATE")),xt(Vf,Ky,t),xt(Vf,Ky,"esm2017"),xt("fire-js","")}hx("");var dx="firebase",fx="11.0.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xt(dx,fx,"app");const $T="@firebase/installations",wm="0.6.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT=1e4,HT=`w:${wm}`,qT="FIS_v2",px="https://firebaseinstallations.googleapis.com/v1",mx=60*60*1e3,gx="installations",_x="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yx={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ci=new ji(gx,_x,yx);function GT(t){return t instanceof vn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KT({projectId:t}){return`${px}/projects/${t}/installations`}function QT(t){return{token:t.token,requestStatus:2,expiresIn:Ex(t.expiresIn),creationTime:Date.now()}}async function YT(t,e){const r=(await e.json()).error;return Ci.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function XT({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function vx(t,{refreshToken:e}){const n=XT(t);return n.append("Authorization",wx(e)),n}async function JT(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Ex(t){return Number(t.replace("s","000"))}function wx(t){return`${qT} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tx({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=KT(t),i=XT(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:qT,appId:t.appId,sdkVersion:HT},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await JT(()=>fetch(r,a));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:QT(c.authToken)}}else throw await YT("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZT(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ix(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sx=/^[cdef][\w-]{21}$/,Bf="";function Cx(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Rx(t);return Sx.test(n)?n:Bf}catch{return Bf}}function Rx(t){return Ix(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kc(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI=new Map;function tI(t,e){const n=Kc(t);nI(n,e),Ax(n,e)}function nI(t,e){const n=eI.get(t);if(n)for(const r of n)r(e)}function Ax(t,e){const n=kx();n&&n.postMessage({key:t,fid:e}),Px()}let hi=null;function kx(){return!hi&&"BroadcastChannel"in self&&(hi=new BroadcastChannel("[Firebase] FID Change"),hi.onmessage=t=>{nI(t.data.key,t.data.fid)}),hi}function Px(){eI.size===0&&hi&&(hi.close(),hi=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nx="firebase-installations-database",xx=1,Ri="firebase-installations-store";let vd=null;function Tm(){return vd||(vd=UT(Nx,xx,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ri)}}})),vd}async function Ju(t,e){const n=Kc(t),i=(await Tm()).transaction(Ri,"readwrite"),s=i.objectStore(Ri),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&tI(t,e.fid),e}async function rI(t){const e=Kc(t),r=(await Tm()).transaction(Ri,"readwrite");await r.objectStore(Ri).delete(e),await r.done}async function Qc(t,e){const n=Kc(t),i=(await Tm()).transaction(Ri,"readwrite"),s=i.objectStore(Ri),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&tI(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Im(t){let e;const n=await Qc(t.appConfig,r=>{const i=Ox(r),s=bx(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Bf?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Ox(t){const e=t||{fid:Cx(),registrationStatus:0};return iI(e)}function bx(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ci.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Dx(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Lx(t)}:{installationEntry:e}}async function Dx(t,e){try{const n=await Tx(t,e);return Ju(t.appConfig,n)}catch(n){throw GT(n)&&n.customData.serverCode===409?await rI(t.appConfig):await Ju(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Lx(t){let e=await Zy(t.appConfig);for(;e.registrationStatus===1;)await ZT(100),e=await Zy(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Im(t);return r||n}return e}function Zy(t){return Qc(t,e=>{if(!e)throw Ci.create("installation-not-found");return iI(e)})}function iI(t){return Mx(t)?{fid:t.fid,registrationStatus:0}:t}function Mx(t){return t.registrationStatus===1&&t.registrationTime+WT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fx({appConfig:t,heartbeatServiceProvider:e},n){const r=Vx(t,n),i=vx(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:HT,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await JT(()=>fetch(r,a));if(u.ok){const c=await u.json();return QT(c)}else throw await YT("Generate Auth Token",u)}function Vx(t,{fid:e}){return`${KT(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sm(t,e=!1){let n;const r=await Qc(t.appConfig,s=>{if(!sI(s))throw Ci.create("not-registered");const o=s.authToken;if(!e&&Bx(o))return s;if(o.requestStatus===1)return n=Ux(t,e),s;{if(!navigator.onLine)throw Ci.create("app-offline");const a=$x(s);return n=jx(t,a),a}});return n?await n:r.authToken}async function Ux(t,e){let n=await ev(t.appConfig);for(;n.authToken.requestStatus===1;)await ZT(100),n=await ev(t.appConfig);const r=n.authToken;return r.requestStatus===0?Sm(t,e):r}function ev(t){return Qc(t,e=>{if(!sI(e))throw Ci.create("not-registered");const n=e.authToken;return Wx(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function jx(t,e){try{const n=await Fx(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Ju(t.appConfig,r),n}catch(n){if(GT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await rI(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ju(t.appConfig,r)}throw n}}function sI(t){return t!==void 0&&t.registrationStatus===2}function Bx(t){return t.requestStatus===2&&!zx(t)}function zx(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+mx}function $x(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Wx(t){return t.requestStatus===1&&t.requestTime+WT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hx(t){const e=t,{installationEntry:n,registrationPromise:r}=await Im(e);return r?r.catch(console.error):Sm(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qx(t,e=!1){const n=t;return await Gx(n),(await Sm(n,e)).token}async function Gx(t){const{registrationPromise:e}=await Im(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kx(t){if(!t||!t.options)throw Ed("App Configuration");if(!t.name)throw Ed("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ed(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ed(t){return Ci.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI="installations",Qx="installations-internal",Yx=t=>{const e=t.getProvider("app").getImmediate(),n=Kx(e),r=Qr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Xx=t=>{const e=t.getProvider("app").getImmediate(),n=Qr(e,oI).getImmediate();return{getId:()=>Hx(n),getToken:i=>qx(n,i)}};function Jx(){gn(new Zt(oI,Yx,"PUBLIC")),gn(new Zt(Qx,Xx,"PRIVATE"))}Jx();xt($T,wm);xt($T,wm,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu="analytics",Zx="firebase_id",eO="origin",tO=60*1e3,nO="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Cm="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot=new qa("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rO={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ut=new ji("analytics","Analytics",rO);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iO(t){if(!t.startsWith(Cm)){const e=Ut.create("invalid-gtag-resource",{gtagURL:t});return Ot.warn(e.message),""}return t}function aI(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function sO(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function oO(t,e){const n=sO("firebase-js-sdk-policy",{createScriptURL:iO}),r=document.createElement("script"),i=`${Cm}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function aO(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function lO(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await aI(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(a){Ot.error(a)}t("config",i,s)}async function uO(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await aI(n);for(const u of o){const c=a.find(f=>f.measurementId===u),d=c&&e[c.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Ot.error(s)}}function cO(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,u]=o;await uO(t,e,n,a,u)}else if(s==="config"){const[a,u]=o;await lO(t,e,n,r,a,u)}else if(s==="consent"){const[a,u]=o;t("consent",a,u)}else if(s==="get"){const[a,u,c]=o;t("get",a,u,c)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){Ot.error(a)}}return i}function hO(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=cO(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function dO(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Cm)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fO=30,pO=1e3;class mO{constructor(e={},n=pO){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const lI=new mO;function gO(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function _O(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:gO(r)},s=nO.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(a=u.error.message)}catch{}throw Ut.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function yO(t,e=lI,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Ut.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Ut.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new wO;return setTimeout(async()=>{a.abort()},tO),uI({appId:r,apiKey:i,measurementId:s},o,a,e)}async function uI(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=lI){var s;const{appId:o,measurementId:a}=t;try{await vO(r,e)}catch(u){if(a)return Ot.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw u}try{const u=await _O(t);return i.deleteThrottleMetadata(o),u}catch(u){const c=u;if(!EO(c)){if(i.deleteThrottleMetadata(o),a)return Ot.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw u}const d=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?Wy(n,i.intervalMillis,fO):Wy(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(o,f),Ot.debug(`Calling attemptFetch again in ${d} millis`),uI(t,f,r,i)}}function vO(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Ut.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function EO(t){if(!(t instanceof vn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class wO{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function TO(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IO(){if(DT())try{await LT()}catch(t){return Ot.warn(Ut.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Ot.warn(Ut.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function SO(t,e,n,r,i,s,o){var a;const u=yO(t);u.then(C=>{n[C.measurementId]=C.appId,t.options.measurementId&&C.measurementId!==t.options.measurementId&&Ot.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${C.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(C=>Ot.error(C)),e.push(u);const c=IO().then(C=>{if(C)return r.getId()}),[d,f]=await Promise.all([u,c]);dO(s)||oO(s,d.measurementId),i("js",new Date);const m=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return m[eO]="firebase",m.update=!0,f!=null&&(m[Zx]=f),i("config",d.measurementId,m),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CO{constructor(e){this.app=e}_delete(){return delete Qo[this.app.options.appId],Promise.resolve()}}let Qo={},tv=[];const nv={};let wd="dataLayer",RO="gtag",rv,cI,iv=!1;function AO(){const t=[];if(xT()&&t.push("This is a browser extension environment."),WP()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Ut.create("invalid-analytics-context",{errorInfo:e});Ot.warn(n.message)}}function kO(t,e,n){AO();const r=t.options.appId;if(!r)throw Ut.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ot.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ut.create("no-api-key");if(Qo[r]!=null)throw Ut.create("already-exists",{id:r});if(!iv){aO(wd);const{wrappedGtag:s,gtagCore:o}=hO(Qo,tv,nv,wd,RO);cI=s,rv=o,iv=!0}return Qo[r]=SO(t,tv,nv,e,rv,wd,n),new CO(t)}function PO(t=Gc()){t=nt(t);const e=Qr(t,Zu);return e.isInitialized()?e.getImmediate():NO(t)}function NO(t,e={}){const n=Qr(t,Zu);if(n.isInitialized()){const i=n.getImmediate();if(Ca(e,n.getOptions()))return i;throw Ut.create("already-initialized")}return n.initialize({options:e})}function xO(t,e,n,r){t=nt(t),TO(cI,Qo[t.app.options.appId],e,n,r).catch(i=>Ot.error(i))}const sv="@firebase/analytics",ov="0.10.10";function OO(){gn(new Zt(Zu,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return kO(r,i,n)},"PUBLIC")),gn(new Zt("analytics-internal",t,"PRIVATE")),xt(sv,ov),xt(sv,ov,"esm2017");function t(e){try{const n=e.getProvider(Zu).getImmediate();return{logEvent:(r,i,s)=>xO(n,r,i,s)}}catch(n){throw Ut.create("interop-component-reg-failed",{reason:n})}}}OO();function Rm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function hI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bO=hI,dI=new ji("auth","Firebase",hI());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec=new qa("@firebase/auth");function DO(t,...e){ec.logLevel<=Z.WARN&&ec.warn(`Auth (${Bi}): ${t}`,...e)}function cu(t,...e){ec.logLevel<=Z.ERROR&&ec.error(`Auth (${Bi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(t,...e){throw Am(t,...e)}function Pn(t,...e){return Am(t,...e)}function fI(t,e,n){const r=Object.assign(Object.assign({},bO()),{[e]:n});return new ji("auth","Firebase",r).create(e,{appName:t.name})}function Xn(t){return fI(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Am(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return dI.create(t,...e)}function G(t,e,...n){if(!t)throw Am(e,...n)}function qn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw cu(e),new Error(e)}function or(t,e){t||qn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function LO(){return av()==="http:"||av()==="https:"}function av(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(LO()||xT()||"connection"in navigator)?navigator.onLine:!0}function FO(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,n){this.shortDelay=e,this.longDelay=n,or(n>e,"Short delay should be less than long delay!"),this.isMobile=vm()||OT()}get(){return MO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function km(t,e){or(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;qn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;qn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;qn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UO=new Ga(3e4,6e4);function Yr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Xr(t,e,n,r,i={}){return mI(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Qs(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return BP()||(c.referrerPolicy="no-referrer"),pI.fetch()(gI(t,t.config.apiHost,n,a),c)})}async function mI(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},VO),e);try{const i=new BO(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Wl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Wl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Wl(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw fI(t,d,c);_n(t,d)}}catch(i){if(i instanceof vn)throw i;_n(t,"network-request-failed",{message:String(i)})}}async function Ka(t,e,n,r,i={}){const s=await Xr(t,e,n,r,i);return"mfaPendingCredential"in s&&_n(t,"multi-factor-auth-required",{_serverResponse:s}),s}function gI(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?km(t.config,i):`${t.config.apiScheme}://${i}`}function jO(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class BO{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Pn(this.auth,"network-request-failed")),UO.get())})}}function Wl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Pn(t,e,r);return i.customData._tokenResponse=n,i}function lv(t){return t!==void 0&&t.enterprise!==void 0}class zO{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return jO(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function $O(t,e){return Xr(t,"GET","/v2/recaptchaConfig",Yr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WO(t,e){return Xr(t,"POST","/v1/accounts:delete",e)}async function _I(t,e){return Xr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function HO(t,e=!1){const n=nt(t),r=await n.getIdToken(e),i=Pm(r);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Yo(Td(i.auth_time)),issuedAtTime:Yo(Td(i.iat)),expirationTime:Yo(Td(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Td(t){return Number(t)*1e3}function Pm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return cu("JWT malformed, contained fewer than 3 sections"),null;try{const i=Qu(n);return i?JSON.parse(i):(cu("Failed to decode base64 JWT payload"),null)}catch(i){return cu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function uv(t){const e=Pm(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Aa(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof vn&&qO(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function qO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Yo(this.lastLoginAt),this.creationTime=Yo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Aa(t,_I(n,{idToken:r}));G(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?yI(s.providerUserInfo):[],a=QO(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=u?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new $f(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function KO(t){const e=nt(t);await tc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function QO(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function yI(t){return t.map(e=>{var{providerId:n}=e,r=Rm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YO(t,e){const n=await mI(t,{},async()=>{const r=Qs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=gI(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",pI.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function XO(t,e){return Xr(t,"POST","/v2/accounts:revokeToken",Yr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):uv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=uv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await YO(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Is;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(G(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Is,this.toJSON())}_performRefresh(){return qn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Gn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Rm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new GO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new $f(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Aa(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return HO(this,e)}reload(){return KO(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Gn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await tc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Cn(this.auth.app))return Promise.reject(Xn(this.auth));const e=await this.getIdToken();return await Aa(this,WO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,C=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(a=n.tenantId)!==null&&a!==void 0?a:void 0,P=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,w=(c=n.createdAt)!==null&&c!==void 0?c:void 0,y=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:S,emailVerified:b,isAnonymous:F,providerData:B,stsTokenManager:I}=n;G(S&&I,e,"internal-error");const _=Is.fromJSON(this.name,I);G(typeof S=="string",e,"internal-error"),pr(f,e.name),pr(m,e.name),G(typeof b=="boolean",e,"internal-error"),G(typeof F=="boolean",e,"internal-error"),pr(C,e.name),pr(v,e.name),pr(k,e.name),pr(P,e.name),pr(w,e.name),pr(y,e.name);const T=new Gn({uid:S,auth:e,email:m,emailVerified:b,displayName:f,isAnonymous:F,photoURL:v,phoneNumber:C,tenantId:k,stsTokenManager:_,createdAt:w,lastLoginAt:y});return B&&Array.isArray(B)&&(T.providerData=B.map(R=>Object.assign({},R))),P&&(T._redirectEventId=P),T}static async _fromIdTokenResponse(e,n,r=!1){const i=new Is;i.updateFromServerResponse(n);const s=new Gn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await tc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];G(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?yI(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Is;a.updateFromIdToken(r);const u=new Gn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new $f(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cv=new Map;function Kn(t){or(t instanceof Function,"Expected a class definition");let e=cv.get(t);return e?(or(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,cv.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}vI.type="NONE";const hv=vI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(t,e,n){return`firebase:${t}:${e}:${n}`}class Ss{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=hu(this.userKey,i.apiKey,s),this.fullPersistenceKey=hu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Gn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ss(Kn(hv),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Kn(hv);const o=hu(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const f=Gn._fromJSON(e,d);c!==s&&(a=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Ss(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Ss(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(II(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(EI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(CI(e))return"Blackberry";if(RI(e))return"Webos";if(wI(e))return"Safari";if((e.includes("chrome/")||TI(e))&&!e.includes("edge/"))return"Chrome";if(SI(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function EI(t=_t()){return/firefox\//i.test(t)}function wI(t=_t()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function TI(t=_t()){return/crios\//i.test(t)}function II(t=_t()){return/iemobile/i.test(t)}function SI(t=_t()){return/android/i.test(t)}function CI(t=_t()){return/blackberry/i.test(t)}function RI(t=_t()){return/webos/i.test(t)}function Nm(t=_t()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function JO(t=_t()){var e;return Nm(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ZO(){return zP()&&document.documentMode===10}function AI(t=_t()){return Nm(t)||SI(t)||RI(t)||CI(t)||/windows phone/i.test(t)||II(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kI(t,e=[]){let n;switch(t){case"Browser":n=dv(_t());break;case"Worker":n=`${dv(_t())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Bi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tb(t,e={}){return Xr(t,"GET","/v2/passwordPolicy",Yr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nb=6;class rb{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:nb,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fv(this),this.idTokenSubscription=new fv(this),this.beforeStateQueue=new eb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Kn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ss.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await _I(this,{idToken:e}),r=await Gn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Cn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await tc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=FO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Cn(this.app))return Promise.reject(Xn(this));const n=e?nt(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Cn(this.app)?Promise.reject(Xn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Cn(this.app)?Promise.reject(Xn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Kn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await tb(this),n=new rb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ji("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await XO(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Kn(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await Ss.create(this,[Kn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=kI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&DO(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function zi(t){return nt(t)}class fv{constructor(e){this.auth=e,this.observer=null,this.addObserver=XP(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function sb(t){Yc=t}function PI(t){return Yc.loadJS(t)}function ob(){return Yc.recaptchaEnterpriseScript}function ab(){return Yc.gapiScript}function lb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class ub{constructor(){this.enterprise=new cb}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class cb{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const hb="recaptcha-enterprise",NI="NO_RECAPTCHA";class db{constructor(e){this.type=hb,this.auth=zi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{$O(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new zO(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;lv(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(NI)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new ub().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&lv(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=ob();u.length!==0&&(u+=a),PI(u).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function pv(t,e,n,r=!1,i=!1){const s=new db(t);let o;if(i)o=NI;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const u=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const u=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Wf(t,e,n,r,i){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await pv(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await pv(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fb(t,e){const n=Qr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ca(s,e??{}))return i;_n(i,"already-initialized")}return n.initialize({options:e})}function pb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Kn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function mb(t,e,n){const r=zi(t);G(r._canInitEmulator,r,"emulator-config-failed"),G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=xI(e),{host:o,port:a}=gb(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),_b()}function xI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function gb(t){const e=xI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:mv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:mv(o)}}}function mv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function _b(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return qn("not implemented")}_getIdTokenResponse(e){return qn("not implemented")}_linkToIdToken(e,n){return qn("not implemented")}_getReauthenticationResolver(e){return qn("not implemented")}}async function yb(t,e){return Xr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vb(t,e){return Ka(t,"POST","/v1/accounts:signInWithPassword",Yr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eb(t,e){return Ka(t,"POST","/v1/accounts:signInWithEmailLink",Yr(t,e))}async function wb(t,e){return Ka(t,"POST","/v1/accounts:signInWithEmailLink",Yr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka extends xm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ka(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ka(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wf(e,n,"signInWithPassword",vb);case"emailLink":return Eb(e,{email:this._email,oobCode:this._password});default:_n(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wf(e,r,"signUpPassword",yb);case"emailLink":return wb(e,{idToken:n,email:this._email,oobCode:this._password});default:_n(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cs(t,e){return Ka(t,"POST","/v1/accounts:signInWithIdp",Yr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tb="http://localhost";class Ai extends xm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ai(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):_n("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Rm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ai(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Cs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Cs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Cs(e,n)}buildRequest(){const e={requestUri:Tb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Qs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ib(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Sb(t){const e=Fo(Vo(t)).link,n=e?Fo(Vo(e)).deep_link_id:null,r=Fo(Vo(t)).deep_link_id;return(r?Fo(Vo(r)).link:null)||r||n||e||t}class Om{constructor(e){var n,r,i,s,o,a;const u=Fo(Vo(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,f=Ib((i=u.mode)!==null&&i!==void 0?i:null);G(c&&d&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Sb(e);try{return new Om(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(){this.providerId=Ys.PROVIDER_ID}static credential(e,n){return ka._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Om.parseLink(n);return G(r,"argument-error"),ka._fromEmailAndCode(e,r.code,r.tenantId)}}Ys.PROVIDER_ID="password";Ys.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ys.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa extends OI{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends Qa{constructor(){super("facebook.com")}static credential(e){return Ai._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vr.credential(e.oauthAccessToken)}catch{return null}}}vr.FACEBOOK_SIGN_IN_METHOD="facebook.com";vr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends Qa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ai._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Er.credentialFromTaggedObject(e)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Er.credential(n,r)}catch{return null}}}Er.GOOGLE_SIGN_IN_METHOD="google.com";Er.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr extends Qa{constructor(){super("github.com")}static credential(e){return Ai._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wr.credential(e.oauthAccessToken)}catch{return null}}}wr.GITHUB_SIGN_IN_METHOD="github.com";wr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr extends Qa{constructor(){super("twitter.com")}static credential(e,n){return Ai._fromParams({providerId:Tr.PROVIDER_ID,signInMethod:Tr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Tr.credentialFromTaggedObject(e)}static credentialFromError(e){return Tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Tr.credential(n,r)}catch{return null}}}Tr.TWITTER_SIGN_IN_METHOD="twitter.com";Tr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cb(t,e){return Ka(t,"POST","/v1/accounts:signUp",Yr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Gn._fromIdTokenResponse(e,r,i),o=gv(r);return new ki({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=gv(r);return new ki({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function gv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc extends vn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,nc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new nc(e,n,r,i)}}function bI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?nc._fromErrorAndOperation(t,s,e,r):s})}async function Rb(t,e,n=!1){const r=await Aa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ki._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ab(t,e,n=!1){const{auth:r}=t;if(Cn(r.app))return Promise.reject(Xn(r));const i="reauthenticate";try{const s=await Aa(t,bI(r,i,e,t),n);G(s.idToken,r,"internal-error");const o=Pm(s.idToken);G(o,r,"internal-error");const{sub:a}=o;return G(t.uid===a,r,"user-mismatch"),ki._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&_n(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DI(t,e,n=!1){if(Cn(t.app))return Promise.reject(Xn(t));const r="signIn",i=await bI(t,r,e),s=await ki._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function kb(t,e){return DI(zi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LI(t){const e=zi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Pb(t,e,n){if(Cn(t.app))return Promise.reject(Xn(t));const r=zi(t),o=await Wf(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Cb).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&LI(t),u}),a=await ki._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function Nb(t,e,n){return Cn(t.app)?Promise.reject(Xn(t)):kb(nt(t),Ys.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&LI(t),r})}function xb(t,e,n,r){return nt(t).onIdTokenChanged(e,n,r)}function Ob(t,e,n){return nt(t).beforeAuthStateChanged(e,n)}function MI(t,e,n,r){return nt(t).onAuthStateChanged(e,n,r)}function bb(t){return nt(t).signOut()}const rc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(rc,"1"),this.storage.removeItem(rc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Db=1e3,Lb=10;class VI extends FI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=AI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);ZO()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Lb):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Db)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}VI.type="LOCAL";const Mb=VI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI extends FI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}UI.type="SESSION";const jI=UI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Xc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await Fb(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=bm("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(){return window}function Ub(t){Nn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BI(){return typeof Nn().WorkerGlobalScope<"u"&&typeof Nn().importScripts=="function"}async function jb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Bb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function zb(){return BI()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI="firebaseLocalStorageDb",$b=1,ic="firebaseLocalStorage",$I="fbase_key";class Ya{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Jc(t,e){return t.transaction([ic],e?"readwrite":"readonly").objectStore(ic)}function Wb(){const t=indexedDB.deleteDatabase(zI);return new Ya(t).toPromise()}function Hf(){const t=indexedDB.open(zI,$b);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ic,{keyPath:$I})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ic)?e(r):(r.close(),await Wb(),e(await Hf()))})})}async function _v(t,e,n){const r=Jc(t,!0).put({[$I]:e,value:n});return new Ya(r).toPromise()}async function Hb(t,e){const n=Jc(t,!1).get(e),r=await new Ya(n).toPromise();return r===void 0?null:r.value}function yv(t,e){const n=Jc(t,!0).delete(e);return new Ya(n).toPromise()}const qb=800,Gb=3;class WI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Gb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return BI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xc._getInstance(zb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await jb(),!this.activeServiceWorker)return;this.sender=new Vb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Bb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hf();return await _v(e,rc,"1"),await yv(e,rc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>_v(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Hb(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>yv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Jc(i,!1).getAll();return new Ya(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}WI.type="LOCAL";const Kb=WI;new Ga(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qb(t,e){return e?Kn(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm extends xm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Cs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Cs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Cs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Yb(t){return DI(t.auth,new Dm(t),t.bypassAuthState)}function Xb(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),Ab(n,new Dm(t),t.bypassAuthState)}async function Jb(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),Rb(n,new Dm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Yb;case"linkViaPopup":case"linkViaRedirect":return Jb;case"reauthViaPopup":case"reauthViaRedirect":return Xb;default:_n(this.auth,"internal-error")}}resolve(e){or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zb=new Ga(2e3,1e4);class ps extends HI{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ps.currentPopupAction&&ps.currentPopupAction.cancel(),ps.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){or(this.filter.length===1,"Popup operations only handle one event");const e=bm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Pn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Pn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ps.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Pn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Zb.get())};e()}}ps.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eD="pendingRedirect",du=new Map;class tD extends HI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=du.get(this.auth._key());if(!e){try{const r=await nD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}du.set(this.auth._key(),e)}return this.bypassAuthState||du.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nD(t,e){const n=sD(e),r=iD(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function rD(t,e){du.set(t._key(),e)}function iD(t){return Kn(t._redirectPersistence)}function sD(t){return hu(eD,t.config.apiKey,t.name)}async function oD(t,e,n=!1){if(Cn(t.app))return Promise.reject(Xn(t));const r=zi(t),i=Qb(r,e),o=await new tD(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aD=10*60*1e3;class lD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!uD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!qI(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Pn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=aD&&this.cachedEventUids.clear(),this.cachedEventUids.has(vv(e))}saveEventToCache(e){this.cachedEventUids.add(vv(e)),this.lastProcessedEventTime=Date.now()}}function vv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function qI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function uD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qI(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cD(t,e={}){return Xr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dD=/^https?/;async function fD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await cD(t);for(const n of e)try{if(pD(n))return}catch{}_n(t,"unauthorized-domain")}function pD(t){const e=zf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!dD.test(n))return!1;if(hD.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mD=new Ga(3e4,6e4);function Ev(){const t=Nn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function gD(t){return new Promise((e,n)=>{var r,i,s;function o(){Ev(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ev(),n(Pn(t,"network-request-failed"))},timeout:mD.get()})}if(!((i=(r=Nn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Nn().gapi)===null||s===void 0)&&s.load)o();else{const a=lb("iframefcb");return Nn()[a]=()=>{gapi.load?o():n(Pn(t,"network-request-failed"))},PI(`${ab()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw fu=null,e})}let fu=null;function _D(t){return fu=fu||gD(t),fu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yD=new Ga(5e3,15e3),vD="__/auth/iframe",ED="emulator/auth/iframe",wD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},TD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ID(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?km(e,ED):`https://${t.config.authDomain}/${vD}`,r={apiKey:e.apiKey,appName:t.name,v:Bi},i=TD.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Qs(r).slice(1)}`}async function SD(t){const e=await _D(t),n=Nn().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:ID(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wD,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Pn(t,"network-request-failed"),a=Nn().setTimeout(()=>{s(o)},yD.get());function u(){Nn().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},RD=500,AD=600,kD="_blank",PD="http://localhost";class wv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ND(t,e,n,r=RD,i=AD){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},CD),{width:r.toString(),height:i.toString(),top:s,left:o}),c=_t().toLowerCase();n&&(a=TI(c)?kD:n),EI(c)&&(e=e||PD,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[C,v])=>`${m}${C}=${v},`,"");if(JO(c)&&a!=="_self")return xD(e||"",a),new wv(null);const f=window.open(e||"",a,d);G(f,t,"popup-blocked");try{f.focus()}catch{}return new wv(f)}function xD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OD="__/auth/handler",bD="emulator/auth/handler",DD=encodeURIComponent("fac");async function Tv(t,e,n,r,i,s){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Bi,eventId:i};if(e instanceof OI){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Lf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof Qa){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const u=await t._getAppCheckToken(),c=u?`#${DD}=${encodeURIComponent(u)}`:"";return`${LD(t)}?${Qs(a).slice(1)}${c}`}function LD({config:t}){return t.emulator?km(t,bD):`https://${t.authDomain}/${OD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id="webStorageSupport";class MD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jI,this._completeRedirectFn=oD,this._overrideRedirectResult=rD}async _openPopup(e,n,r,i){var s;or((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Tv(e,n,r,zf(),i);return ND(e,o,bm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Tv(e,n,r,zf(),i);return Ub(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(or(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await SD(e),r=new lD(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Id,{type:Id},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Id];o!==void 0&&n(!!o),_n(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=fD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return AI()||wI()||Nm()}}const FD=MD;var Iv="@firebase/auth",Sv="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function jD(t){gn(new Zt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kI(t)},c=new ib(r,i,s,u);return pb(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),gn(new Zt("auth-internal",e=>{const n=zi(e.getProvider("auth").getImmediate());return(r=>new VD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),xt(Iv,Sv,UD(t)),xt(Iv,Sv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BD=5*60,zD=PT("authIdTokenMaxAge")||BD;let Cv=null;const $D=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>zD)return;const i=n==null?void 0:n.token;Cv!==i&&(Cv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function WD(t=Gc()){const e=Qr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=fb(t,{popupRedirectResolver:FD,persistence:[Kb,Mb,jI]}),r=PT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=$D(s.toString());Ob(n,o,()=>o(n.currentUser)),xb(n,a=>o(a))}}const i=RT("auth");return i&&mb(n,`http://${i}`),n}function HD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}sb({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Pn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",HD().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});jD("Browser");var Rv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var GI;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,_){function T(){}T.prototype=_.prototype,I.D=_.prototype,I.prototype=new T,I.prototype.constructor=I,I.C=function(R,N,O){for(var A=Array(arguments.length-2),Ht=2;Ht<arguments.length;Ht++)A[Ht-2]=arguments[Ht];return _.prototype[N].apply(R,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,_,T){T||(T=0);var R=Array(16);if(typeof _=="string")for(var N=0;16>N;++N)R[N]=_.charCodeAt(T++)|_.charCodeAt(T++)<<8|_.charCodeAt(T++)<<16|_.charCodeAt(T++)<<24;else for(N=0;16>N;++N)R[N]=_[T++]|_[T++]<<8|_[T++]<<16|_[T++]<<24;_=I.g[0],T=I.g[1],N=I.g[2];var O=I.g[3],A=_+(O^T&(N^O))+R[0]+3614090360&4294967295;_=T+(A<<7&4294967295|A>>>25),A=O+(N^_&(T^N))+R[1]+3905402710&4294967295,O=_+(A<<12&4294967295|A>>>20),A=N+(T^O&(_^T))+R[2]+606105819&4294967295,N=O+(A<<17&4294967295|A>>>15),A=T+(_^N&(O^_))+R[3]+3250441966&4294967295,T=N+(A<<22&4294967295|A>>>10),A=_+(O^T&(N^O))+R[4]+4118548399&4294967295,_=T+(A<<7&4294967295|A>>>25),A=O+(N^_&(T^N))+R[5]+1200080426&4294967295,O=_+(A<<12&4294967295|A>>>20),A=N+(T^O&(_^T))+R[6]+2821735955&4294967295,N=O+(A<<17&4294967295|A>>>15),A=T+(_^N&(O^_))+R[7]+4249261313&4294967295,T=N+(A<<22&4294967295|A>>>10),A=_+(O^T&(N^O))+R[8]+1770035416&4294967295,_=T+(A<<7&4294967295|A>>>25),A=O+(N^_&(T^N))+R[9]+2336552879&4294967295,O=_+(A<<12&4294967295|A>>>20),A=N+(T^O&(_^T))+R[10]+4294925233&4294967295,N=O+(A<<17&4294967295|A>>>15),A=T+(_^N&(O^_))+R[11]+2304563134&4294967295,T=N+(A<<22&4294967295|A>>>10),A=_+(O^T&(N^O))+R[12]+1804603682&4294967295,_=T+(A<<7&4294967295|A>>>25),A=O+(N^_&(T^N))+R[13]+4254626195&4294967295,O=_+(A<<12&4294967295|A>>>20),A=N+(T^O&(_^T))+R[14]+2792965006&4294967295,N=O+(A<<17&4294967295|A>>>15),A=T+(_^N&(O^_))+R[15]+1236535329&4294967295,T=N+(A<<22&4294967295|A>>>10),A=_+(N^O&(T^N))+R[1]+4129170786&4294967295,_=T+(A<<5&4294967295|A>>>27),A=O+(T^N&(_^T))+R[6]+3225465664&4294967295,O=_+(A<<9&4294967295|A>>>23),A=N+(_^T&(O^_))+R[11]+643717713&4294967295,N=O+(A<<14&4294967295|A>>>18),A=T+(O^_&(N^O))+R[0]+3921069994&4294967295,T=N+(A<<20&4294967295|A>>>12),A=_+(N^O&(T^N))+R[5]+3593408605&4294967295,_=T+(A<<5&4294967295|A>>>27),A=O+(T^N&(_^T))+R[10]+38016083&4294967295,O=_+(A<<9&4294967295|A>>>23),A=N+(_^T&(O^_))+R[15]+3634488961&4294967295,N=O+(A<<14&4294967295|A>>>18),A=T+(O^_&(N^O))+R[4]+3889429448&4294967295,T=N+(A<<20&4294967295|A>>>12),A=_+(N^O&(T^N))+R[9]+568446438&4294967295,_=T+(A<<5&4294967295|A>>>27),A=O+(T^N&(_^T))+R[14]+3275163606&4294967295,O=_+(A<<9&4294967295|A>>>23),A=N+(_^T&(O^_))+R[3]+4107603335&4294967295,N=O+(A<<14&4294967295|A>>>18),A=T+(O^_&(N^O))+R[8]+1163531501&4294967295,T=N+(A<<20&4294967295|A>>>12),A=_+(N^O&(T^N))+R[13]+2850285829&4294967295,_=T+(A<<5&4294967295|A>>>27),A=O+(T^N&(_^T))+R[2]+4243563512&4294967295,O=_+(A<<9&4294967295|A>>>23),A=N+(_^T&(O^_))+R[7]+1735328473&4294967295,N=O+(A<<14&4294967295|A>>>18),A=T+(O^_&(N^O))+R[12]+2368359562&4294967295,T=N+(A<<20&4294967295|A>>>12),A=_+(T^N^O)+R[5]+4294588738&4294967295,_=T+(A<<4&4294967295|A>>>28),A=O+(_^T^N)+R[8]+2272392833&4294967295,O=_+(A<<11&4294967295|A>>>21),A=N+(O^_^T)+R[11]+1839030562&4294967295,N=O+(A<<16&4294967295|A>>>16),A=T+(N^O^_)+R[14]+4259657740&4294967295,T=N+(A<<23&4294967295|A>>>9),A=_+(T^N^O)+R[1]+2763975236&4294967295,_=T+(A<<4&4294967295|A>>>28),A=O+(_^T^N)+R[4]+1272893353&4294967295,O=_+(A<<11&4294967295|A>>>21),A=N+(O^_^T)+R[7]+4139469664&4294967295,N=O+(A<<16&4294967295|A>>>16),A=T+(N^O^_)+R[10]+3200236656&4294967295,T=N+(A<<23&4294967295|A>>>9),A=_+(T^N^O)+R[13]+681279174&4294967295,_=T+(A<<4&4294967295|A>>>28),A=O+(_^T^N)+R[0]+3936430074&4294967295,O=_+(A<<11&4294967295|A>>>21),A=N+(O^_^T)+R[3]+3572445317&4294967295,N=O+(A<<16&4294967295|A>>>16),A=T+(N^O^_)+R[6]+76029189&4294967295,T=N+(A<<23&4294967295|A>>>9),A=_+(T^N^O)+R[9]+3654602809&4294967295,_=T+(A<<4&4294967295|A>>>28),A=O+(_^T^N)+R[12]+3873151461&4294967295,O=_+(A<<11&4294967295|A>>>21),A=N+(O^_^T)+R[15]+530742520&4294967295,N=O+(A<<16&4294967295|A>>>16),A=T+(N^O^_)+R[2]+3299628645&4294967295,T=N+(A<<23&4294967295|A>>>9),A=_+(N^(T|~O))+R[0]+4096336452&4294967295,_=T+(A<<6&4294967295|A>>>26),A=O+(T^(_|~N))+R[7]+1126891415&4294967295,O=_+(A<<10&4294967295|A>>>22),A=N+(_^(O|~T))+R[14]+2878612391&4294967295,N=O+(A<<15&4294967295|A>>>17),A=T+(O^(N|~_))+R[5]+4237533241&4294967295,T=N+(A<<21&4294967295|A>>>11),A=_+(N^(T|~O))+R[12]+1700485571&4294967295,_=T+(A<<6&4294967295|A>>>26),A=O+(T^(_|~N))+R[3]+2399980690&4294967295,O=_+(A<<10&4294967295|A>>>22),A=N+(_^(O|~T))+R[10]+4293915773&4294967295,N=O+(A<<15&4294967295|A>>>17),A=T+(O^(N|~_))+R[1]+2240044497&4294967295,T=N+(A<<21&4294967295|A>>>11),A=_+(N^(T|~O))+R[8]+1873313359&4294967295,_=T+(A<<6&4294967295|A>>>26),A=O+(T^(_|~N))+R[15]+4264355552&4294967295,O=_+(A<<10&4294967295|A>>>22),A=N+(_^(O|~T))+R[6]+2734768916&4294967295,N=O+(A<<15&4294967295|A>>>17),A=T+(O^(N|~_))+R[13]+1309151649&4294967295,T=N+(A<<21&4294967295|A>>>11),A=_+(N^(T|~O))+R[4]+4149444226&4294967295,_=T+(A<<6&4294967295|A>>>26),A=O+(T^(_|~N))+R[11]+3174756917&4294967295,O=_+(A<<10&4294967295|A>>>22),A=N+(_^(O|~T))+R[2]+718787259&4294967295,N=O+(A<<15&4294967295|A>>>17),A=T+(O^(N|~_))+R[9]+3951481745&4294967295,I.g[0]=I.g[0]+_&4294967295,I.g[1]=I.g[1]+(N+(A<<21&4294967295|A>>>11))&4294967295,I.g[2]=I.g[2]+N&4294967295,I.g[3]=I.g[3]+O&4294967295}r.prototype.u=function(I,_){_===void 0&&(_=I.length);for(var T=_-this.blockSize,R=this.B,N=this.h,O=0;O<_;){if(N==0)for(;O<=T;)i(this,I,O),O+=this.blockSize;if(typeof I=="string"){for(;O<_;)if(R[N++]=I.charCodeAt(O++),N==this.blockSize){i(this,R),N=0;break}}else for(;O<_;)if(R[N++]=I[O++],N==this.blockSize){i(this,R),N=0;break}}this.h=N,this.o+=_},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var _=1;_<I.length-8;++_)I[_]=0;var T=8*this.o;for(_=I.length-8;_<I.length;++_)I[_]=T&255,T/=256;for(this.u(I),I=Array(16),_=T=0;4>_;++_)for(var R=0;32>R;R+=8)I[T++]=this.g[_]>>>R&255;return I};function s(I,_){var T=a;return Object.prototype.hasOwnProperty.call(T,I)?T[I]:T[I]=_(I)}function o(I,_){this.h=_;for(var T=[],R=!0,N=I.length-1;0<=N;N--){var O=I[N]|0;R&&O==_||(T[N]=O,R=!1)}this.g=T}var a={};function u(I){return-128<=I&&128>I?s(I,function(_){return new o([_|0],0>_?-1:0)}):new o([I|0],0>I?-1:0)}function c(I){if(isNaN(I)||!isFinite(I))return f;if(0>I)return P(c(-I));for(var _=[],T=1,R=0;I>=T;R++)_[R]=I/T|0,T*=4294967296;return new o(_,0)}function d(I,_){if(I.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(I.charAt(0)=="-")return P(d(I.substring(1),_));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=c(Math.pow(_,8)),R=f,N=0;N<I.length;N+=8){var O=Math.min(8,I.length-N),A=parseInt(I.substring(N,N+O),_);8>O?(O=c(Math.pow(_,O)),R=R.j(O).add(c(A))):(R=R.j(T),R=R.add(c(A)))}return R}var f=u(0),m=u(1),C=u(16777216);t=o.prototype,t.m=function(){if(k(this))return-P(this).m();for(var I=0,_=1,T=0;T<this.g.length;T++){var R=this.i(T);I+=(0<=R?R:4294967296+R)*_,_*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(v(this))return"0";if(k(this))return"-"+P(this).toString(I);for(var _=c(Math.pow(I,6)),T=this,R="";;){var N=b(T,_).g;T=w(T,N.j(_));var O=((0<T.g.length?T.g[0]:T.h)>>>0).toString(I);if(T=N,v(T))return O+R;for(;6>O.length;)O="0"+O;R=O+R}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function v(I){if(I.h!=0)return!1;for(var _=0;_<I.g.length;_++)if(I.g[_]!=0)return!1;return!0}function k(I){return I.h==-1}t.l=function(I){return I=w(this,I),k(I)?-1:v(I)?0:1};function P(I){for(var _=I.g.length,T=[],R=0;R<_;R++)T[R]=~I.g[R];return new o(T,~I.h).add(m)}t.abs=function(){return k(this)?P(this):this},t.add=function(I){for(var _=Math.max(this.g.length,I.g.length),T=[],R=0,N=0;N<=_;N++){var O=R+(this.i(N)&65535)+(I.i(N)&65535),A=(O>>>16)+(this.i(N)>>>16)+(I.i(N)>>>16);R=A>>>16,O&=65535,A&=65535,T[N]=A<<16|O}return new o(T,T[T.length-1]&-2147483648?-1:0)};function w(I,_){return I.add(P(_))}t.j=function(I){if(v(this)||v(I))return f;if(k(this))return k(I)?P(this).j(P(I)):P(P(this).j(I));if(k(I))return P(this.j(P(I)));if(0>this.l(C)&&0>I.l(C))return c(this.m()*I.m());for(var _=this.g.length+I.g.length,T=[],R=0;R<2*_;R++)T[R]=0;for(R=0;R<this.g.length;R++)for(var N=0;N<I.g.length;N++){var O=this.i(R)>>>16,A=this.i(R)&65535,Ht=I.i(N)>>>16,Jr=I.i(N)&65535;T[2*R+2*N]+=A*Jr,y(T,2*R+2*N),T[2*R+2*N+1]+=O*Jr,y(T,2*R+2*N+1),T[2*R+2*N+1]+=A*Ht,y(T,2*R+2*N+1),T[2*R+2*N+2]+=O*Ht,y(T,2*R+2*N+2)}for(R=0;R<_;R++)T[R]=T[2*R+1]<<16|T[2*R];for(R=_;R<2*_;R++)T[R]=0;return new o(T,0)};function y(I,_){for(;(I[_]&65535)!=I[_];)I[_+1]+=I[_]>>>16,I[_]&=65535,_++}function S(I,_){this.g=I,this.h=_}function b(I,_){if(v(_))throw Error("division by zero");if(v(I))return new S(f,f);if(k(I))return _=b(P(I),_),new S(P(_.g),P(_.h));if(k(_))return _=b(I,P(_)),new S(P(_.g),_.h);if(30<I.g.length){if(k(I)||k(_))throw Error("slowDivide_ only works with positive integers.");for(var T=m,R=_;0>=R.l(I);)T=F(T),R=F(R);var N=B(T,1),O=B(R,1);for(R=B(R,2),T=B(T,2);!v(R);){var A=O.add(R);0>=A.l(I)&&(N=N.add(T),O=A),R=B(R,1),T=B(T,1)}return _=w(I,N.j(_)),new S(N,_)}for(N=f;0<=I.l(_);){for(T=Math.max(1,Math.floor(I.m()/_.m())),R=Math.ceil(Math.log(T)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),O=c(T),A=O.j(_);k(A)||0<A.l(I);)T-=R,O=c(T),A=O.j(_);v(O)&&(O=m),N=N.add(O),I=w(I,A)}return new S(N,I)}t.A=function(I){return b(this,I).h},t.and=function(I){for(var _=Math.max(this.g.length,I.g.length),T=[],R=0;R<_;R++)T[R]=this.i(R)&I.i(R);return new o(T,this.h&I.h)},t.or=function(I){for(var _=Math.max(this.g.length,I.g.length),T=[],R=0;R<_;R++)T[R]=this.i(R)|I.i(R);return new o(T,this.h|I.h)},t.xor=function(I){for(var _=Math.max(this.g.length,I.g.length),T=[],R=0;R<_;R++)T[R]=this.i(R)^I.i(R);return new o(T,this.h^I.h)};function F(I){for(var _=I.g.length+1,T=[],R=0;R<_;R++)T[R]=I.i(R)<<1|I.i(R-1)>>>31;return new o(T,I.h)}function B(I,_){var T=_>>5;_%=32;for(var R=I.g.length-T,N=[],O=0;O<R;O++)N[O]=0<_?I.i(O+T)>>>_|I.i(O+T+1)<<32-_:I.i(O+T);return new o(N,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,GI=o}).apply(typeof Rv<"u"?Rv:typeof self<"u"?self:typeof window<"u"?window:{});var Hl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var KI,Uo,QI,pu,qf,YI,XI,JI;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,h,p){return l==Array.prototype||l==Object.prototype||(l[h]=p.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Hl=="object"&&Hl];for(var h=0;h<l.length;++h){var p=l[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(l,h){if(h)e:{var p=r;l=l.split(".");for(var g=0;g<l.length-1;g++){var x=l[g];if(!(x in p))break e;p=p[x]}l=l[l.length-1],g=p[l],h=h(g),h!=g&&h!=null&&e(p,l,{configurable:!0,writable:!0,value:h})}}function s(l,h){l instanceof String&&(l+="");var p=0,g=!1,x={next:function(){if(!g&&p<l.length){var D=p++;return{value:h(D,l[D]),done:!1}}return g=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}i("Array.prototype.values",function(l){return l||function(){return s(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var h=typeof l;return h=h!="object"?h:l?Array.isArray(l)?"array":h:"null",h=="array"||h=="object"&&typeof l.length=="number"}function c(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function d(l,h,p){return l.call.apply(l.bind,arguments)}function f(l,h,p){if(!l)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,g),l.apply(h,x)}}return function(){return l.apply(h,arguments)}}function m(l,h,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,m.apply(null,arguments)}function C(l,h){var p=Array.prototype.slice.call(arguments,1);return function(){var g=p.slice();return g.push.apply(g,arguments),l.apply(this,g)}}function v(l,h){function p(){}p.prototype=h.prototype,l.aa=h.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(g,x,D){for(var z=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)z[fe-2]=arguments[fe];return h.prototype[x].apply(g,z)}}function k(l){const h=l.length;if(0<h){const p=Array(h);for(let g=0;g<h;g++)p[g]=l[g];return p}return[]}function P(l,h){for(let p=1;p<arguments.length;p++){const g=arguments[p];if(u(g)){const x=l.length||0,D=g.length||0;l.length=x+D;for(let z=0;z<D;z++)l[x+z]=g[z]}else l.push(g)}}class w{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function y(l){return/^[\s\xa0]*$/.test(l)}function S(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function b(l){return b[" "](l),l}b[" "]=function(){};var F=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function B(l,h,p){for(const g in l)h.call(p,l[g],g,l)}function I(l,h){for(const p in l)h.call(void 0,l[p],p,l)}function _(l){const h={};for(const p in l)h[p]=l[p];return h}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(l,h){let p,g;for(let x=1;x<arguments.length;x++){g=arguments[x];for(p in g)l[p]=g[p];for(let D=0;D<T.length;D++)p=T[D],Object.prototype.hasOwnProperty.call(g,p)&&(l[p]=g[p])}}function N(l){var h=1;l=l.split(":");const p=[];for(;0<h&&l.length;)p.push(l.shift()),h--;return l.length&&p.push(l.join(":")),p}function O(l){a.setTimeout(()=>{throw l},0)}function A(){var l=Q;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class Ht{constructor(){this.h=this.g=null}add(h,p){const g=Jr.get();g.set(h,p),this.h?this.h.next=g:this.g=g,this.h=g}}var Jr=new w(()=>new io,l=>l.reset());class io{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let bn,W=!1,Q=new Ht,X=()=>{const l=a.Promise.resolve(void 0);bn=()=>{l.then(Se)}};var Se=()=>{for(var l;l=A();){try{l.h.call(l.g)}catch(p){O(p)}var h=Jr;h.j(l),100>h.h&&(h.h++,l.next=h.g,h.g=l)}W=!1};function de(){this.s=this.s,this.C=this.C}de.prototype.s=!1,de.prototype.ma=function(){this.s||(this.s=!0,this.N())},de.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Oe(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}Oe.prototype.h=function(){this.defaultPrevented=!0};var Dn=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,h),a.removeEventListener("test",p,h)}catch{}return l}();function Ln(l,h){if(Oe.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,g=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget){if(F){e:{try{b(h.nodeName);var x=!0;break e}catch{}x=!1}x||(h=null)}}else p=="mouseover"?h=l.fromElement:p=="mouseout"&&(h=l.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Mn[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Ln.aa.h.call(this)}}v(Ln,Oe);var Mn={2:"touch",3:"pen",4:"mouse"};Ln.prototype.h=function(){Ln.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Fn="closure_listenable_"+(1e6*Math.random()|0),kR=0;function PR(l,h,p,g,x){this.listener=l,this.proxy=null,this.src=h,this.type=p,this.capture=!!g,this.ha=x,this.key=++kR,this.da=this.fa=!1}function ul(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function cl(l){this.src=l,this.g={},this.h=0}cl.prototype.add=function(l,h,p,g,x){var D=l.toString();l=this.g[D],l||(l=this.g[D]=[],this.h++);var z=vh(l,h,g,x);return-1<z?(h=l[z],p||(h.fa=!1)):(h=new PR(h,this.src,D,!!g,x),h.fa=p,l.push(h)),h};function yh(l,h){var p=h.type;if(p in l.g){var g=l.g[p],x=Array.prototype.indexOf.call(g,h,void 0),D;(D=0<=x)&&Array.prototype.splice.call(g,x,1),D&&(ul(h),l.g[p].length==0&&(delete l.g[p],l.h--))}}function vh(l,h,p,g){for(var x=0;x<l.length;++x){var D=l[x];if(!D.da&&D.listener==h&&D.capture==!!p&&D.ha==g)return x}return-1}var Eh="closure_lm_"+(1e6*Math.random()|0),wh={};function Rg(l,h,p,g,x){if(Array.isArray(h)){for(var D=0;D<h.length;D++)Rg(l,h[D],p,g,x);return null}return p=Pg(p),l&&l[Fn]?l.K(h,p,c(g)?!!g.capture:!!g,x):NR(l,h,p,!1,g,x)}function NR(l,h,p,g,x,D){if(!h)throw Error("Invalid event type");var z=c(x)?!!x.capture:!!x,fe=Ih(l);if(fe||(l[Eh]=fe=new cl(l)),p=fe.add(h,p,g,z,D),p.proxy)return p;if(g=xR(),p.proxy=g,g.src=l,g.listener=p,l.addEventListener)Dn||(x=z),x===void 0&&(x=!1),l.addEventListener(h.toString(),g,x);else if(l.attachEvent)l.attachEvent(kg(h.toString()),g);else if(l.addListener&&l.removeListener)l.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return p}function xR(){function l(p){return h.call(l.src,l.listener,p)}const h=OR;return l}function Ag(l,h,p,g,x){if(Array.isArray(h))for(var D=0;D<h.length;D++)Ag(l,h[D],p,g,x);else g=c(g)?!!g.capture:!!g,p=Pg(p),l&&l[Fn]?(l=l.i,h=String(h).toString(),h in l.g&&(D=l.g[h],p=vh(D,p,g,x),-1<p&&(ul(D[p]),Array.prototype.splice.call(D,p,1),D.length==0&&(delete l.g[h],l.h--)))):l&&(l=Ih(l))&&(h=l.g[h.toString()],l=-1,h&&(l=vh(h,p,g,x)),(p=-1<l?h[l]:null)&&Th(p))}function Th(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[Fn])yh(h.i,l);else{var p=l.type,g=l.proxy;h.removeEventListener?h.removeEventListener(p,g,l.capture):h.detachEvent?h.detachEvent(kg(p),g):h.addListener&&h.removeListener&&h.removeListener(g),(p=Ih(h))?(yh(p,l),p.h==0&&(p.src=null,h[Eh]=null)):ul(l)}}}function kg(l){return l in wh?wh[l]:wh[l]="on"+l}function OR(l,h){if(l.da)l=!0;else{h=new Ln(h,this);var p=l.listener,g=l.ha||l.src;l.fa&&Th(l),l=p.call(g,h)}return l}function Ih(l){return l=l[Eh],l instanceof cl?l:null}var Sh="__closure_events_fn_"+(1e9*Math.random()>>>0);function Pg(l){return typeof l=="function"?l:(l[Sh]||(l[Sh]=function(h){return l.handleEvent(h)}),l[Sh])}function rt(){de.call(this),this.i=new cl(this),this.M=this,this.F=null}v(rt,de),rt.prototype[Fn]=!0,rt.prototype.removeEventListener=function(l,h,p,g){Ag(this,l,h,p,g)};function yt(l,h){var p,g=l.F;if(g)for(p=[];g;g=g.F)p.push(g);if(l=l.M,g=h.type||h,typeof h=="string")h=new Oe(h,l);else if(h instanceof Oe)h.target=h.target||l;else{var x=h;h=new Oe(g,l),R(h,x)}if(x=!0,p)for(var D=p.length-1;0<=D;D--){var z=h.g=p[D];x=hl(z,g,!0,h)&&x}if(z=h.g=l,x=hl(z,g,!0,h)&&x,x=hl(z,g,!1,h)&&x,p)for(D=0;D<p.length;D++)z=h.g=p[D],x=hl(z,g,!1,h)&&x}rt.prototype.N=function(){if(rt.aa.N.call(this),this.i){var l=this.i,h;for(h in l.g){for(var p=l.g[h],g=0;g<p.length;g++)ul(p[g]);delete l.g[h],l.h--}}this.F=null},rt.prototype.K=function(l,h,p,g){return this.i.add(String(l),h,!1,p,g)},rt.prototype.L=function(l,h,p,g){return this.i.add(String(l),h,!0,p,g)};function hl(l,h,p,g){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();for(var x=!0,D=0;D<h.length;++D){var z=h[D];if(z&&!z.da&&z.capture==p){var fe=z.listener,Ke=z.ha||z.src;z.fa&&yh(l.i,z),x=fe.call(Ke,g)!==!1&&x}}return x&&!g.defaultPrevented}function Ng(l,h,p){if(typeof l=="function")p&&(l=m(l,p));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(l,h||0)}function xg(l){l.g=Ng(()=>{l.g=null,l.i&&(l.i=!1,xg(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class bR extends de{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:xg(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function so(l){de.call(this),this.h=l,this.g={}}v(so,de);var Og=[];function bg(l){B(l.g,function(h,p){this.g.hasOwnProperty(p)&&Th(h)},l),l.g={}}so.prototype.N=function(){so.aa.N.call(this),bg(this)},so.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ch=a.JSON.stringify,DR=a.JSON.parse,LR=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Rh(){}Rh.prototype.h=null;function Dg(l){return l.h||(l.h=l.i())}function Lg(){}var oo={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ah(){Oe.call(this,"d")}v(Ah,Oe);function kh(){Oe.call(this,"c")}v(kh,Oe);var Zr={},Mg=null;function dl(){return Mg=Mg||new rt}Zr.La="serverreachability";function Fg(l){Oe.call(this,Zr.La,l)}v(Fg,Oe);function ao(l){const h=dl();yt(h,new Fg(h))}Zr.STAT_EVENT="statevent";function Vg(l,h){Oe.call(this,Zr.STAT_EVENT,l),this.stat=h}v(Vg,Oe);function vt(l){const h=dl();yt(h,new Vg(h,l))}Zr.Ma="timingevent";function Ug(l,h){Oe.call(this,Zr.Ma,l),this.size=h}v(Ug,Oe);function lo(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},h)}function uo(){this.g=!0}uo.prototype.xa=function(){this.g=!1};function MR(l,h,p,g,x,D){l.info(function(){if(l.g)if(D)for(var z="",fe=D.split("&"),Ke=0;Ke<fe.length;Ke++){var ae=fe[Ke].split("=");if(1<ae.length){var it=ae[0];ae=ae[1];var st=it.split("_");z=2<=st.length&&st[1]=="type"?z+(it+"="+ae+"&"):z+(it+"=redacted&")}}else z=null;else z=D;return"XMLHTTP REQ ("+g+") [attempt "+x+"]: "+h+`
`+p+`
`+z})}function FR(l,h,p,g,x,D,z){l.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+x+"]: "+h+`
`+p+`
`+D+" "+z})}function Gi(l,h,p,g){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+UR(l,p)+(g?" "+g:"")})}function VR(l,h){l.info(function(){return"TIMEOUT: "+h})}uo.prototype.info=function(){};function UR(l,h){if(!l.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var g=p[l];if(!(2>g.length)){var x=g[1];if(Array.isArray(x)&&!(1>x.length)){var D=x[0];if(D!="noop"&&D!="stop"&&D!="close")for(var z=1;z<x.length;z++)x[z]=""}}}}return Ch(p)}catch{return h}}var fl={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},jg={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ph;function pl(){}v(pl,Rh),pl.prototype.g=function(){return new XMLHttpRequest},pl.prototype.i=function(){return{}},Ph=new pl;function cr(l,h,p,g){this.j=l,this.i=h,this.l=p,this.R=g||1,this.U=new so(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Bg}function Bg(){this.i=null,this.g="",this.h=!1}var zg={},Nh={};function xh(l,h,p){l.L=1,l.v=yl(Vn(h)),l.m=p,l.P=!0,$g(l,null)}function $g(l,h){l.F=Date.now(),ml(l),l.A=Vn(l.v);var p=l.A,g=l.R;Array.isArray(g)||(g=[String(g)]),r_(p.i,"t",g),l.C=0,p=l.j.J,l.h=new Bg,l.g=w_(l.j,p?h:null,!l.m),0<l.O&&(l.M=new bR(m(l.Y,l,l.g),l.O)),h=l.U,p=l.g,g=l.ca;var x="readystatechange";Array.isArray(x)||(x&&(Og[0]=x.toString()),x=Og);for(var D=0;D<x.length;D++){var z=Rg(p,x[D],g||h.handleEvent,!1,h.h||h);if(!z)break;h.g[z.key]=z}h=l.H?_(l.H):{},l.m?(l.u||(l.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,h)):(l.u="GET",l.g.ea(l.A,l.u,null,h)),ao(),MR(l.i,l.u,l.A,l.l,l.R,l.m)}cr.prototype.ca=function(l){l=l.target;const h=this.M;h&&Un(l)==3?h.j():this.Y(l)},cr.prototype.Y=function(l){try{if(l==this.g)e:{const st=Un(this.g);var h=this.g.Ba();const Yi=this.g.Z();if(!(3>st)&&(st!=3||this.g&&(this.h.h||this.g.oa()||c_(this.g)))){this.J||st!=4||h==7||(h==8||0>=Yi?ao(3):ao(2)),Oh(this);var p=this.g.Z();this.X=p;t:if(Wg(this)){var g=c_(this.g);l="";var x=g.length,D=Un(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ei(this),co(this);var z="";break t}this.h.i=new a.TextDecoder}for(h=0;h<x;h++)this.h.h=!0,l+=this.h.i.decode(g[h],{stream:!(D&&h==x-1)});g.length=0,this.h.g+=l,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=p==200,FR(this.i,this.u,this.A,this.l,this.R,st,p),this.o){if(this.T&&!this.K){t:{if(this.g){var fe,Ke=this.g;if((fe=Ke.g?Ke.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(fe)){var ae=fe;break t}}ae=null}if(p=ae)Gi(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,bh(this,p);else{this.o=!1,this.s=3,vt(12),ei(this),co(this);break e}}if(this.P){p=!0;let tn;for(;!this.J&&this.C<z.length;)if(tn=jR(this,z),tn==Nh){st==4&&(this.s=4,vt(14),p=!1),Gi(this.i,this.l,null,"[Incomplete Response]");break}else if(tn==zg){this.s=4,vt(15),Gi(this.i,this.l,z,"[Invalid Chunk]"),p=!1;break}else Gi(this.i,this.l,tn,null),bh(this,tn);if(Wg(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),st!=4||z.length!=0||this.h.h||(this.s=1,vt(16),p=!1),this.o=this.o&&p,!p)Gi(this.i,this.l,z,"[Invalid Chunked Response]"),ei(this),co(this);else if(0<z.length&&!this.W){this.W=!0;var it=this.j;it.g==this&&it.ba&&!it.M&&(it.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Uh(it),it.M=!0,vt(11))}}else Gi(this.i,this.l,z,null),bh(this,z);st==4&&ei(this),this.o&&!this.J&&(st==4?__(this.j,this):(this.o=!1,ml(this)))}else r1(this.g),p==400&&0<z.indexOf("Unknown SID")?(this.s=3,vt(12)):(this.s=0,vt(13)),ei(this),co(this)}}}catch{}finally{}};function Wg(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function jR(l,h){var p=l.C,g=h.indexOf(`
`,p);return g==-1?Nh:(p=Number(h.substring(p,g)),isNaN(p)?zg:(g+=1,g+p>h.length?Nh:(h=h.slice(g,g+p),l.C=g+p,h)))}cr.prototype.cancel=function(){this.J=!0,ei(this)};function ml(l){l.S=Date.now()+l.I,Hg(l,l.I)}function Hg(l,h){if(l.B!=null)throw Error("WatchDog timer not null");l.B=lo(m(l.ba,l),h)}function Oh(l){l.B&&(a.clearTimeout(l.B),l.B=null)}cr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(VR(this.i,this.A),this.L!=2&&(ao(),vt(17)),ei(this),this.s=2,co(this)):Hg(this,this.S-l)};function co(l){l.j.G==0||l.J||__(l.j,l)}function ei(l){Oh(l);var h=l.M;h&&typeof h.ma=="function"&&h.ma(),l.M=null,bg(l.U),l.g&&(h=l.g,l.g=null,h.abort(),h.ma())}function bh(l,h){try{var p=l.j;if(p.G!=0&&(p.g==l||Dh(p.h,l))){if(!l.K&&Dh(p.h,l)&&p.G==3){try{var g=p.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var x=g;if(x[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)Sl(p),Tl(p);else break e;Vh(p),vt(18)}}else p.za=x[1],0<p.za-p.T&&37500>x[2]&&p.F&&p.v==0&&!p.C&&(p.C=lo(m(p.Za,p),6e3));if(1>=Kg(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else ni(p,11)}else if((l.K||p.g==l)&&Sl(p),!y(h))for(x=p.Da.g.parse(h),h=0;h<x.length;h++){let ae=x[h];if(p.T=ae[0],ae=ae[1],p.G==2)if(ae[0]=="c"){p.K=ae[1],p.ia=ae[2];const it=ae[3];it!=null&&(p.la=it,p.j.info("VER="+p.la));const st=ae[4];st!=null&&(p.Aa=st,p.j.info("SVER="+p.Aa));const Yi=ae[5];Yi!=null&&typeof Yi=="number"&&0<Yi&&(g=1.5*Yi,p.L=g,p.j.info("backChannelRequestTimeoutMs_="+g)),g=p;const tn=l.g;if(tn){const Rl=tn.g?tn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Rl){var D=g.h;D.g||Rl.indexOf("spdy")==-1&&Rl.indexOf("quic")==-1&&Rl.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Lh(D,D.h),D.h=null))}if(g.D){const jh=tn.g?tn.g.getResponseHeader("X-HTTP-Session-Id"):null;jh&&(g.ya=jh,ge(g.I,g.D,jh))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),g=p;var z=l;if(g.qa=E_(g,g.J?g.ia:null,g.W),z.K){Qg(g.h,z);var fe=z,Ke=g.L;Ke&&(fe.I=Ke),fe.B&&(Oh(fe),ml(fe)),g.g=z}else m_(g);0<p.i.length&&Il(p)}else ae[0]!="stop"&&ae[0]!="close"||ni(p,7);else p.G==3&&(ae[0]=="stop"||ae[0]=="close"?ae[0]=="stop"?ni(p,7):Fh(p):ae[0]!="noop"&&p.l&&p.l.ta(ae),p.v=0)}}ao(4)}catch{}}var BR=class{constructor(l,h){this.g=l,this.map=h}};function qg(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Gg(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Kg(l){return l.h?1:l.g?l.g.size:0}function Dh(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function Lh(l,h){l.g?l.g.add(h):l.h=h}function Qg(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}qg.prototype.cancel=function(){if(this.i=Yg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Yg(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const p of l.g.values())h=h.concat(p.D);return h}return k(l.i)}function zR(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var h=[],p=l.length,g=0;g<p;g++)h.push(l[g]);return h}h=[],p=0;for(g in l)h[p++]=l[g];return h}function $R(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var h=[];l=l.length;for(var p=0;p<l;p++)h.push(p);return h}h=[],p=0;for(const g in l)h[p++]=g;return h}}}function Xg(l,h){if(l.forEach&&typeof l.forEach=="function")l.forEach(h,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,h,void 0);else for(var p=$R(l),g=zR(l),x=g.length,D=0;D<x;D++)h.call(void 0,g[D],p&&p[D],l)}var Jg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function WR(l,h){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var g=l[p].indexOf("="),x=null;if(0<=g){var D=l[p].substring(0,g);x=l[p].substring(g+1)}else D=l[p];h(D,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function ti(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof ti){this.h=l.h,gl(this,l.j),this.o=l.o,this.g=l.g,_l(this,l.s),this.l=l.l;var h=l.i,p=new po;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),Zg(this,p),this.m=l.m}else l&&(h=String(l).match(Jg))?(this.h=!1,gl(this,h[1]||"",!0),this.o=ho(h[2]||""),this.g=ho(h[3]||"",!0),_l(this,h[4]),this.l=ho(h[5]||"",!0),Zg(this,h[6]||"",!0),this.m=ho(h[7]||"")):(this.h=!1,this.i=new po(null,this.h))}ti.prototype.toString=function(){var l=[],h=this.j;h&&l.push(fo(h,e_,!0),":");var p=this.g;return(p||h=="file")&&(l.push("//"),(h=this.o)&&l.push(fo(h,e_,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(fo(p,p.charAt(0)=="/"?GR:qR,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",fo(p,QR)),l.join("")};function Vn(l){return new ti(l)}function gl(l,h,p){l.j=p?ho(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function _l(l,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);l.s=h}else l.s=null}function Zg(l,h,p){h instanceof po?(l.i=h,YR(l.i,l.h)):(p||(h=fo(h,KR)),l.i=new po(h,l.h))}function ge(l,h,p){l.i.set(h,p)}function yl(l){return ge(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function ho(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function fo(l,h,p){return typeof l=="string"?(l=encodeURI(l).replace(h,HR),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function HR(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var e_=/[#\/\?@]/g,qR=/[#\?:]/g,GR=/[#\?]/g,KR=/[#\?@]/g,QR=/#/g;function po(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function hr(l){l.g||(l.g=new Map,l.h=0,l.i&&WR(l.i,function(h,p){l.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=po.prototype,t.add=function(l,h){hr(this),this.i=null,l=Ki(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(h),this.h+=1,this};function t_(l,h){hr(l),h=Ki(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function n_(l,h){return hr(l),h=Ki(l,h),l.g.has(h)}t.forEach=function(l,h){hr(this),this.g.forEach(function(p,g){p.forEach(function(x){l.call(h,x,g,this)},this)},this)},t.na=function(){hr(this);const l=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let g=0;g<h.length;g++){const x=l[g];for(let D=0;D<x.length;D++)p.push(h[g])}return p},t.V=function(l){hr(this);let h=[];if(typeof l=="string")n_(this,l)&&(h=h.concat(this.g.get(Ki(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)h=h.concat(l[p])}return h},t.set=function(l,h){return hr(this),this.i=null,l=Ki(this,l),n_(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},t.get=function(l,h){return l?(l=this.V(l),0<l.length?String(l[0]):h):h};function r_(l,h,p){t_(l,h),0<p.length&&(l.i=null,l.g.set(Ki(l,h),k(p)),l.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var g=h[p];const D=encodeURIComponent(String(g)),z=this.V(g);for(g=0;g<z.length;g++){var x=D;z[g]!==""&&(x+="="+encodeURIComponent(String(z[g]))),l.push(x)}}return this.i=l.join("&")};function Ki(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function YR(l,h){h&&!l.j&&(hr(l),l.i=null,l.g.forEach(function(p,g){var x=g.toLowerCase();g!=x&&(t_(this,g),r_(this,x,p))},l)),l.j=h}function XR(l,h){const p=new uo;if(a.Image){const g=new Image;g.onload=C(dr,p,"TestLoadImage: loaded",!0,h,g),g.onerror=C(dr,p,"TestLoadImage: error",!1,h,g),g.onabort=C(dr,p,"TestLoadImage: abort",!1,h,g),g.ontimeout=C(dr,p,"TestLoadImage: timeout",!1,h,g),a.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=l}else h(!1)}function JR(l,h){const p=new uo,g=new AbortController,x=setTimeout(()=>{g.abort(),dr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:g.signal}).then(D=>{clearTimeout(x),D.ok?dr(p,"TestPingServer: ok",!0,h):dr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(x),dr(p,"TestPingServer: error",!1,h)})}function dr(l,h,p,g,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),g(p)}catch{}}function ZR(){this.g=new LR}function e1(l,h,p){const g=p||"";try{Xg(l,function(x,D){let z=x;c(x)&&(z=Ch(x)),h.push(g+D+"="+encodeURIComponent(z))})}catch(x){throw h.push(g+"type="+encodeURIComponent("_badmap")),x}}function vl(l){this.l=l.Ub||null,this.j=l.eb||!1}v(vl,Rh),vl.prototype.g=function(){return new El(this.l,this.j)},vl.prototype.i=function(l){return function(){return l}}({});function El(l,h){rt.call(this),this.D=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}v(El,rt),t=El.prototype,t.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=h,this.readyState=1,go(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(h.body=l),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,mo(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,go(this)),this.g&&(this.readyState=3,go(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;i_(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function i_(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?mo(this):go(this),this.readyState==3&&i_(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,mo(this))},t.Qa=function(l){this.g&&(this.response=l,mo(this))},t.ga=function(){this.g&&mo(this)};function mo(l){l.readyState=4,l.l=null,l.j=null,l.v=null,go(l)}t.setRequestHeader=function(l,h){this.u.append(l,h)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=h.next();return l.join(`\r
`)};function go(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(El.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function s_(l){let h="";return B(l,function(p,g){h+=g,h+=":",h+=p,h+=`\r
`}),h}function Mh(l,h,p){e:{for(g in p){var g=!1;break e}g=!0}g||(p=s_(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):ge(l,h,p))}function Pe(l){rt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}v(Pe,rt);var t1=/^https?$/i,n1=["POST","PUT"];t=Pe.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,h,p,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ph.g(),this.v=this.o?Dg(this.o):Dg(Ph),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(D){o_(this,D);return}if(l=p||"",p=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var x in g)p.set(x,g[x]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const D of g.keys())p.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(p.keys()).find(D=>D.toLowerCase()=="content-type"),x=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(n1,h,void 0))||g||x||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,z]of p)this.g.setRequestHeader(D,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{u_(this),this.u=!0,this.g.send(l),this.u=!1}catch(D){o_(this,D)}};function o_(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.m=5,a_(l),wl(l)}function a_(l){l.A||(l.A=!0,yt(l,"complete"),yt(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,yt(this,"complete"),yt(this,"abort"),wl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),wl(this,!0)),Pe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?l_(this):this.bb())},t.bb=function(){l_(this)};function l_(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Un(l)!=4||l.Z()!=2)){if(l.u&&Un(l)==4)Ng(l.Ea,0,l);else if(yt(l,"readystatechange"),Un(l)==4){l.h=!1;try{const z=l.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var g;if(g=z===0){var x=String(l.D).match(Jg)[1]||null;!x&&a.self&&a.self.location&&(x=a.self.location.protocol.slice(0,-1)),g=!t1.test(x?x.toLowerCase():"")}p=g}if(p)yt(l,"complete"),yt(l,"success");else{l.m=6;try{var D=2<Un(l)?l.g.statusText:""}catch{D=""}l.l=D+" ["+l.Z()+"]",a_(l)}}finally{wl(l)}}}}function wl(l,h){if(l.g){u_(l);const p=l.g,g=l.v[0]?()=>{}:null;l.g=null,l.v=null,h||yt(l,"ready");try{p.onreadystatechange=g}catch{}}}function u_(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Un(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Un(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),DR(h)}};function c_(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function r1(l){const h={};l=(l.g&&2<=Un(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<l.length;g++){if(y(l[g]))continue;var p=N(l[g]);const x=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const D=h[x]||[];h[x]=D,D.push(p)}I(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function _o(l,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||h}function h_(l){this.Aa=0,this.i=[],this.j=new uo,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=_o("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=_o("baseRetryDelayMs",5e3,l),this.cb=_o("retryDelaySeedMs",1e4,l),this.Wa=_o("forwardChannelMaxRetries",2,l),this.wa=_o("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new qg(l&&l.concurrentRequestLimit),this.Da=new ZR,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=h_.prototype,t.la=8,t.G=1,t.connect=function(l,h,p,g){vt(0),this.W=l,this.H=h||{},p&&g!==void 0&&(this.H.OSID=p,this.H.OAID=g),this.F=this.X,this.I=E_(this,null,this.W),Il(this)};function Fh(l){if(d_(l),l.G==3){var h=l.U++,p=Vn(l.I);if(ge(p,"SID",l.K),ge(p,"RID",h),ge(p,"TYPE","terminate"),yo(l,p),h=new cr(l,l.j,h),h.L=2,h.v=yl(Vn(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=h.v,p=!0),p||(h.g=w_(h.j,null),h.g.ea(h.v)),h.F=Date.now(),ml(h)}v_(l)}function Tl(l){l.g&&(Uh(l),l.g.cancel(),l.g=null)}function d_(l){Tl(l),l.u&&(a.clearTimeout(l.u),l.u=null),Sl(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Il(l){if(!Gg(l.h)&&!l.s){l.s=!0;var h=l.Ga;bn||X(),W||(bn(),W=!0),Q.add(h,l),l.B=0}}function i1(l,h){return Kg(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=h.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=lo(m(l.Ga,l,h),y_(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const x=new cr(this,this.j,l);let D=this.o;if(this.S&&(D?(D=_(D),R(D,this.S)):D=this.S),this.m!==null||this.O||(x.H=D,D=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var g=this.i[p];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=p_(this,x,h),p=Vn(this.I),ge(p,"RID",l),ge(p,"CVER",22),this.D&&ge(p,"X-HTTP-Session-Id",this.D),yo(this,p),D&&(this.O?h="headers="+encodeURIComponent(String(s_(D)))+"&"+h:this.m&&Mh(p,this.m,D)),Lh(this.h,x),this.Ua&&ge(p,"TYPE","init"),this.P?(ge(p,"$req",h),ge(p,"SID","null"),x.T=!0,xh(x,p,null)):xh(x,p,h),this.G=2}}else this.G==3&&(l?f_(this,l):this.i.length==0||Gg(this.h)||f_(this))};function f_(l,h){var p;h?p=h.l:p=l.U++;const g=Vn(l.I);ge(g,"SID",l.K),ge(g,"RID",p),ge(g,"AID",l.T),yo(l,g),l.m&&l.o&&Mh(g,l.m,l.o),p=new cr(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),h&&(l.i=h.D.concat(l.i)),h=p_(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Lh(l.h,p),xh(p,g,h)}function yo(l,h){l.H&&B(l.H,function(p,g){ge(h,g,p)}),l.l&&Xg({},function(p,g){ge(h,g,p)})}function p_(l,h,p){p=Math.min(l.i.length,p);var g=l.l?m(l.l.Na,l.l,l):null;e:{var x=l.i;let D=-1;for(;;){const z=["count="+p];D==-1?0<p?(D=x[0].g,z.push("ofs="+D)):D=0:z.push("ofs="+D);let fe=!0;for(let Ke=0;Ke<p;Ke++){let ae=x[Ke].g;const it=x[Ke].map;if(ae-=D,0>ae)D=Math.max(0,x[Ke].g-100),fe=!1;else try{e1(it,z,"req"+ae+"_")}catch{g&&g(it)}}if(fe){g=z.join("&");break e}}}return l=l.i.splice(0,p),h.D=l,g}function m_(l){if(!l.g&&!l.u){l.Y=1;var h=l.Fa;bn||X(),W||(bn(),W=!0),Q.add(h,l),l.v=0}}function Vh(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=lo(m(l.Fa,l),y_(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,g_(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=lo(m(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,vt(10),Tl(this),g_(this))};function Uh(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function g_(l){l.g=new cr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var h=Vn(l.qa);ge(h,"RID","rpc"),ge(h,"SID",l.K),ge(h,"AID",l.T),ge(h,"CI",l.F?"0":"1"),!l.F&&l.ja&&ge(h,"TO",l.ja),ge(h,"TYPE","xmlhttp"),yo(l,h),l.m&&l.o&&Mh(h,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=yl(Vn(h)),p.m=null,p.P=!0,$g(p,l)}t.Za=function(){this.C!=null&&(this.C=null,Tl(this),Vh(this),vt(19))};function Sl(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function __(l,h){var p=null;if(l.g==h){Sl(l),Uh(l),l.g=null;var g=2}else if(Dh(l.h,h))p=h.D,Qg(l.h,h),g=1;else return;if(l.G!=0){if(h.o)if(g==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var x=l.B;g=dl(),yt(g,new Ug(g,p)),Il(l)}else m_(l);else if(x=h.s,x==3||x==0&&0<h.X||!(g==1&&i1(l,h)||g==2&&Vh(l)))switch(p&&0<p.length&&(h=l.h,h.i=h.i.concat(p)),x){case 1:ni(l,5);break;case 4:ni(l,10);break;case 3:ni(l,6);break;default:ni(l,2)}}}function y_(l,h){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*h}function ni(l,h){if(l.j.info("Error code "+h),h==2){var p=m(l.fb,l),g=l.Xa;const x=!g;g=new ti(g||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||gl(g,"https"),yl(g),x?XR(g.toString(),p):JR(g.toString(),p)}else vt(2);l.G=0,l.l&&l.l.sa(h),v_(l),d_(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function v_(l){if(l.G=0,l.ka=[],l.l){const h=Yg(l.h);(h.length!=0||l.i.length!=0)&&(P(l.ka,h),P(l.ka,l.i),l.h.i.length=0,k(l.i),l.i.length=0),l.l.ra()}}function E_(l,h,p){var g=p instanceof ti?Vn(p):new ti(p);if(g.g!="")h&&(g.g=h+"."+g.g),_l(g,g.s);else{var x=a.location;g=x.protocol,h=h?h+"."+x.hostname:x.hostname,x=+x.port;var D=new ti(null);g&&gl(D,g),h&&(D.g=h),x&&_l(D,x),p&&(D.l=p),g=D}return p=l.D,h=l.ya,p&&h&&ge(g,p,h),ge(g,"VER",l.la),yo(l,g),g}function w_(l,h,p){if(h&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Ca&&!l.pa?new Pe(new vl({eb:p})):new Pe(l.pa),h.Ha(l.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function T_(){}t=T_.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Cl(){}Cl.prototype.g=function(l,h){return new Dt(l,h)};function Dt(l,h){rt.call(this),this.g=new h_(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(l?l["X-WebChannel-Client-Profile"]=h.va:l={"X-WebChannel-Client-Profile":h.va}),this.g.S=l,(l=h&&h.Sb)&&!y(l)&&(this.g.m=l),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!y(h)&&(this.g.D=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new Qi(this)}v(Dt,rt),Dt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Dt.prototype.close=function(){Fh(this.g)},Dt.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=Ch(l),l=p);h.i.push(new BR(h.Ya++,l)),h.G==3&&Il(h)},Dt.prototype.N=function(){this.g.l=null,delete this.j,Fh(this.g),delete this.g,Dt.aa.N.call(this)};function I_(l){Ah.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const p in h){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}v(I_,Ah);function S_(){kh.call(this),this.status=1}v(S_,kh);function Qi(l){this.g=l}v(Qi,T_),Qi.prototype.ua=function(){yt(this.g,"a")},Qi.prototype.ta=function(l){yt(this.g,new I_(l))},Qi.prototype.sa=function(l){yt(this.g,new S_)},Qi.prototype.ra=function(){yt(this.g,"b")},Cl.prototype.createWebChannel=Cl.prototype.g,Dt.prototype.send=Dt.prototype.o,Dt.prototype.open=Dt.prototype.m,Dt.prototype.close=Dt.prototype.close,JI=function(){return new Cl},XI=function(){return dl()},YI=Zr,qf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},fl.NO_ERROR=0,fl.TIMEOUT=8,fl.HTTP_ERROR=6,pu=fl,jg.COMPLETE="complete",QI=jg,Lg.EventType=oo,oo.OPEN="a",oo.CLOSE="b",oo.ERROR="c",oo.MESSAGE="d",rt.prototype.listen=rt.prototype.K,Uo=Lg,Pe.prototype.listenOnce=Pe.prototype.L,Pe.prototype.getLastError=Pe.prototype.Ka,Pe.prototype.getLastErrorCode=Pe.prototype.Ba,Pe.prototype.getStatus=Pe.prototype.Z,Pe.prototype.getResponseJson=Pe.prototype.Oa,Pe.prototype.getResponseText=Pe.prototype.oa,Pe.prototype.send=Pe.prototype.ea,Pe.prototype.setWithCredentials=Pe.prototype.Ha,KI=Pe}).apply(typeof Hl<"u"?Hl:typeof self<"u"?self:typeof window<"u"?window:{});const Av="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ut.UNAUTHENTICATED=new ut(null),ut.GOOGLE_CREDENTIALS=new ut("google-credentials-uid"),ut.FIRST_PARTY=new ut("first-party-uid"),ut.MOCK_USER=new ut("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xs="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=new qa("@firebase/firestore");function es(){return Pi.logLevel}function q(t,...e){if(Pi.logLevel<=Z.DEBUG){const n=e.map(Lm);Pi.debug(`Firestore (${Xs}): ${t}`,...n)}}function Ni(t,...e){if(Pi.logLevel<=Z.ERROR){const n=e.map(Lm);Pi.error(`Firestore (${Xs}): ${t}`,...n)}}function sc(t,...e){if(Pi.logLevel<=Z.WARN){const n=e.map(Lm);Pi.warn(`Firestore (${Xs}): ${t}`,...n)}}function Lm(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(t="Unexpected state"){const e=`FIRESTORE (${Xs}) INTERNAL ASSERTION FAILED: `+t;throw Ni(e),new Error(e)}function xe(t,e){t||te()}function me(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends vn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class qD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ut.UNAUTHENTICATED))}shutdown(){}}class GD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class KD{constructor(e){this.t=e,this.currentUser=ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){xe(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new _i;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new _i,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new _i)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(xe(typeof r.accessToken=="string"),new ZI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return xe(e===null||typeof e=="string"),new ut(e)}}class QD{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ut.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class YD{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new QD(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class XD{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class JD{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){xe(this.o===void 0);const r=s=>{s.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(xe(typeof n.token=="string"),this.R=n.token,new XD(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=ZD(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ue(t,e){return t<e?-1:t>e?1:0}function Fs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{static now(){return Ge.fromMillis(Date.now())}static fromDate(e){return Ge.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ge(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new K(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{static fromTimestamp(e){return new Te(e)}static min(){return new Te(new Ge(0,0))}static max(){return new Te(new Ge(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e,n,r){n===void 0?n=0:n>e.length&&te(),r===void 0?r=e.length-n:r>e.length-n&&te(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Pa.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Pa?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Le extends Pa{construct(e,n,r){return new Le(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Le(n)}static emptyPath(){return new Le([])}}const eL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Je extends Pa{construct(e,n,r){return new Je(e,n,r)}static isValidIdentifier(e){return eL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Je.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Je(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new K(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new K(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new K(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new K(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Je(n)}static emptyPath(){return new Je([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.path=e}static fromPath(e){return new J(Le.fromString(e))}static fromName(e){return new J(Le.fromString(e).popFirst(5))}static empty(){return new J(Le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new J(new Le(e.slice()))}}function tL(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Te.fromTimestamp(r===1e9?new Ge(n+1,0):new Ge(n,r));return new Br(i,J.empty(),e)}function nL(t){return new Br(t.readTime,t.key,-1)}class Br{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Br(Te.min(),J.empty(),-1)}static max(){return new Br(Te.max(),J.empty(),-1)}}function rL(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=J.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iL="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sL{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mm(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==iL)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new M((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function oL(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Xa(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Fm.oe=-1;function Vm(t){return t==null}function oc(t){return t===0&&1/t==-1/0}function aL(t){return typeof t=="number"&&Number.isInteger(t)&&!oc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lL(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=kv(e)),e=uL(t.get(n),e);return kv(e)}function uL(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function kv(t){return t+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Js(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function tS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yn=class Gf{constructor(e,n){this.comparator=e,this.root=n||Fr.EMPTY}insert(e,n){return new Gf(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Fr.BLACK,null,null))}remove(e){return new Gf(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Fr.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ql(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ql(this.root,e,this.comparator,!1)}getReverseIterator(){return new ql(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ql(this.root,e,this.comparator,!0)}},ql=class{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Fr=class Bn{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Bn.RED,this.left=i??Bn.EMPTY,this.right=s??Bn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Bn(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Bn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Bn.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Bn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Bn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw te();const e=this.left.check();if(e!==this.right.check())throw te();return e+(this.isRed()?0:1)}};Fr.EMPTY=null,Fr.RED=!0,Fr.BLACK=!1;Fr.EMPTY=new class{constructor(){this.size=0}get key(){throw te()}get value(){throw te()}get color(){throw te()}get left(){throw te()}get right(){throw te()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Fr(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.comparator=e,this.data=new yn(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Nv(this.data.getIterator())}getIteratorFrom(e){return new Nv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof et)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new et(this.comparator);return n.data=e,n}}class Nv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this.fields=e,e.sort(Je.comparator)}static empty(){return new cn([])}unionWith(e){let n=new et(Je.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new cn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Fs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cL extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new cL("Invalid base64 string: "+s):s}}(e);return new xn(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new xn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xn.EMPTY_BYTE_STRING=new xn("");const hL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xi(t){if(xe(!!t),typeof t=="string"){let e=0;const n=hL.exec(t);if(xe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ye(t.seconds),nanos:Ye(t.nanos)}}function Ye(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Vs(t){return typeof t=="string"?xn.fromBase64String(t):xn.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Um(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function jm(t){const e=t.mapValue.fields.__previous_value__;return Um(e)?jm(e):e}function ac(t){const e=xi(t.mapValue.fields.__local_write_time__.timestampValue);return new Ge(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dL{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class lc{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new lc("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof lc&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Oi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Um(t)?4:pL(t)?9007199254740991:fL(t)?10:11:te()}function On(t,e){if(t===e)return!0;const n=Oi(t);if(n!==Oi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ac(t).isEqual(ac(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=xi(i.timestampValue),a=xi(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Vs(i.bytesValue).isEqual(Vs(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ye(i.geoPointValue.latitude)===Ye(s.geoPointValue.latitude)&&Ye(i.geoPointValue.longitude)===Ye(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ye(i.integerValue)===Ye(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ye(i.doubleValue),a=Ye(s.doubleValue);return o===a?oc(o)===oc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Fs(t.arrayValue.values||[],e.arrayValue.values||[],On);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Pv(o)!==Pv(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!On(o[u],a[u])))return!1;return!0}(t,e);default:return te()}}function Na(t,e){return(t.values||[]).find(n=>On(n,e))!==void 0}function Us(t,e){if(t===e)return 0;const n=Oi(t),r=Oi(e);if(n!==r)return ue(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Ye(s.integerValue||s.doubleValue),u=Ye(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return xv(t.timestampValue,e.timestampValue);case 4:return xv(ac(t),ac(e));case 5:return ue(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Vs(s),u=Vs(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const d=ue(a[c],u[c]);if(d!==0)return d}return ue(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ue(Ye(s.latitude),Ye(o.latitude));return a!==0?a:ue(Ye(s.longitude),Ye(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Ov(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,u,c,d;const f=s.fields||{},m=o.fields||{},C=(a=f.value)===null||a===void 0?void 0:a.arrayValue,v=(u=m.value)===null||u===void 0?void 0:u.arrayValue,k=ue(((c=C==null?void 0:C.values)===null||c===void 0?void 0:c.length)||0,((d=v==null?void 0:v.values)===null||d===void 0?void 0:d.length)||0);return k!==0?k:Ov(C,v)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Gl.mapValue&&o===Gl.mapValue)return 0;if(s===Gl.mapValue)return 1;if(o===Gl.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let f=0;f<u.length&&f<d.length;++f){const m=ue(u[f],d[f]);if(m!==0)return m;const C=Us(a[u[f]],c[d[f]]);if(C!==0)return C}return ue(u.length,d.length)}(t.mapValue,e.mapValue);default:throw te()}}function xv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=xi(t),r=xi(e),i=ue(n.seconds,r.seconds);return i!==0?i:ue(n.nanos,r.nanos)}function Ov(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Us(n[i],r[i]);if(s)return s}return ue(n.length,r.length)}function js(t){return Kf(t)}function Kf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=xi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Vs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return J.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Kf(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Kf(n.fields[o])}`;return i+"}"}(t.mapValue):te()}function mu(t){switch(Oi(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=jm(t);return e?16+mu(e):16;case 5:return 2*t.stringValue.length;case 6:return Vs(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+mu(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Js(r.fields,(s,o)=>{i+=s.length+mu(o)}),i}(t.mapValue);default:throw te()}}function Qf(t){return!!t&&"integerValue"in t}function Bm(t){return!!t&&"arrayValue"in t}function gu(t){return!!t&&"mapValue"in t}function fL(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Xo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Js(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Xo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Xo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function pL(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){this.value=e}static empty(){return new ln({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!gu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xo(n)}setAll(e){let n=Je.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Xo(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());gu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return On(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];gu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Js(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ln(Xo(this.value))}}function nS(t){const e=[];return Js(t.fields,(n,r)=>{const i=new Je([n]);if(gu(r)){const s=nS(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new cn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new an(e,0,Te.min(),Te.min(),Te.min(),ln.empty(),0)}static newFoundDocument(e,n,r,i){return new an(e,1,n,Te.min(),r,i,0)}static newNoDocument(e,n){return new an(e,2,n,Te.min(),Te.min(),ln.empty(),0)}static newUnknownDocument(e,n){return new an(e,3,n,Te.min(),Te.min(),ln.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ln.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ln.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof an&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new an(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e,n){this.position=e,this.inclusive=n}}function bv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=J.comparator(J.fromName(o.referenceValue),n.key):r=Us(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Dv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!On(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e,n="asc"){this.field=e,this.dir=n}}function mL(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{}class We extends rS{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new _L(e,n,r):n==="array-contains"?new EL(e,r):n==="in"?new wL(e,r):n==="not-in"?new TL(e,r):n==="array-contains-any"?new IL(e,r):new We(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new yL(e,r):new vL(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Us(n,this.value)):n!==null&&Oi(this.value)===Oi(n)&&this.matchesComparison(Us(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return te()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class zr extends rS{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new zr(e,n)}matches(e){return iS(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function iS(t){return t.op==="and"}function sS(t){return gL(t)&&iS(t)}function gL(t){for(const e of t.filters)if(e instanceof zr)return!1;return!0}function Yf(t){if(t instanceof We)return t.field.canonicalString()+t.op.toString()+js(t.value);if(sS(t))return t.filters.map(e=>Yf(e)).join(",");{const e=t.filters.map(n=>Yf(n)).join(",");return`${t.op}(${e})`}}function oS(t,e){return t instanceof We?function(r,i){return i instanceof We&&r.op===i.op&&r.field.isEqual(i.field)&&On(r.value,i.value)}(t,e):t instanceof zr?function(r,i){return i instanceof zr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&oS(o,i.filters[a]),!0):!1}(t,e):void te()}function aS(t){return t instanceof We?function(n){return`${n.field.canonicalString()} ${n.op} ${js(n.value)}`}(t):t instanceof zr?function(n){return n.op.toString()+" {"+n.getFilters().map(aS).join(" ,")+"}"}(t):"Filter"}class _L extends We{constructor(e,n,r){super(e,n,r),this.key=J.fromName(r.referenceValue)}matches(e){const n=J.comparator(e.key,this.key);return this.matchesComparison(n)}}class yL extends We{constructor(e,n){super(e,"in",n),this.keys=lS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class vL extends We{constructor(e,n){super(e,"not-in",n),this.keys=lS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function lS(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>J.fromName(r.referenceValue))}class EL extends We{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Bm(n)&&Na(n.arrayValue,this.value)}}class wL extends We{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Na(this.value.arrayValue,n)}}class TL extends We{constructor(e,n){super(e,"not-in",n)}matches(e){if(Na(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Na(this.value.arrayValue,n)}}class IL extends We{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Bm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Na(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SL{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function Lv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new SL(t,e,n,r,i,s,o)}function zm(t){const e=me(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Yf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Vm(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>js(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>js(r)).join(",")),e.ue=n}return e.ue}function $m(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!mL(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!oS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Dv(t.startAt,e.startAt)&&Dv(t.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function CL(t,e,n,r,i,s,o,a){return new Zc(t,e,n,r,i,s,o,a)}function RL(t){return new Zc(t)}function Mv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function AL(t){return t.collectionGroup!==null}function Jo(t){const e=me(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new et(Je.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new cc(s,r))}),n.has(Je.keyField().canonicalString())||e.ce.push(new cc(Je.keyField(),r))}return e.ce}function yi(t){const e=me(t);return e.le||(e.le=kL(e,Jo(t))),e.le}function kL(t,e){if(t.limitType==="F")return Lv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new cc(i.field,s)});const n=t.endAt?new uc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new uc(t.startAt.position,t.startAt.inclusive):null;return Lv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Xf(t,e,n){return new Zc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function uS(t,e){return $m(yi(t),yi(e))&&t.limitType===e.limitType}function cS(t){return`${zm(yi(t))}|lt:${t.limitType}`}function Ao(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>aS(i)).join(", ")}]`),Vm(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>js(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>js(i)).join(",")),`Target(${r})`}(yi(t))}; limitType=${t.limitType})`}function Wm(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):J.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Jo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=bv(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,Jo(r),i)||r.endAt&&!function(o,a,u){const c=bv(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,Jo(r),i))}(t,e)}function PL(t){return(e,n)=>{let r=!1;for(const i of Jo(t)){const s=NL(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function NL(t,e,n){const r=t.field.isKeyField()?J.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?Us(u,c):te()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return te()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Js(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return tS(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xL=new yn(J.comparator);function hc(){return xL}const hS=new yn(J.comparator);function Kl(...t){let e=hS;for(const n of t)e=e.insert(n.key,n);return e}function dS(t){let e=hS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function di(){return Zo()}function fS(){return Zo()}function Zo(){return new $i(t=>t.toString(),(t,e)=>t.isEqual(e))}const OL=new yn(J.comparator),bL=new et(J.comparator);function ht(...t){let e=bL;for(const n of t)e=e.add(n);return e}const DL=new et(ue);function LL(){return DL}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:oc(e)?"-0":e}}function pS(t){return{integerValue:""+t}}function ML(t,e){return aL(e)?pS(e):Hm(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(){this._=void 0}}function FL(t,e,n){return t instanceof dc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Um(s)&&(s=jm(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof xa?gS(t,e):t instanceof Oa?_S(t,e):function(i,s){const o=mS(i,s),a=Fv(o)+Fv(i.Pe);return Qf(o)&&Qf(i.Pe)?pS(a):Hm(i.serializer,a)}(t,e)}function VL(t,e,n){return t instanceof xa?gS(t,e):t instanceof Oa?_S(t,e):n}function mS(t,e){return t instanceof fc?function(r){return Qf(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class dc extends eh{}class xa extends eh{constructor(e){super(),this.elements=e}}function gS(t,e){const n=yS(e);for(const r of t.elements)n.some(i=>On(i,r))||n.push(r);return{arrayValue:{values:n}}}class Oa extends eh{constructor(e){super(),this.elements=e}}function _S(t,e){let n=yS(e);for(const r of t.elements)n=n.filter(i=>!On(i,r));return{arrayValue:{values:n}}}class fc extends eh{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Fv(t){return Ye(t.integerValue||t.doubleValue)}function yS(t){return Bm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function UL(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof xa&&i instanceof xa||r instanceof Oa&&i instanceof Oa?Fs(r.elements,i.elements,On):r instanceof fc&&i instanceof fc?On(r.Pe,i.Pe):r instanceof dc&&i instanceof dc}(t.transform,e.transform)}class jL{constructor(e,n){this.version=e,this.transformResults=n}}class Jn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Jn}static exists(e){return new Jn(void 0,e)}static updateTime(e){return new Jn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _u(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class th{}function vS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new wS(t.key,Jn.none()):new Ja(t.key,t.data,Jn.none());{const n=t.data,r=ln.empty();let i=new et(Je.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Wi(t.key,r,new cn(i.toArray()),Jn.none())}}function BL(t,e,n){t instanceof Ja?function(i,s,o){const a=i.value.clone(),u=Uv(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Wi?function(i,s,o){if(!_u(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Uv(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(ES(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ea(t,e,n,r){return t instanceof Ja?function(s,o,a,u){if(!_u(s.precondition,o))return a;const c=s.value.clone(),d=jv(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Wi?function(s,o,a,u){if(!_u(s.precondition,o))return a;const c=jv(s.fieldTransforms,u,o),d=o.data;return d.setAll(ES(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return _u(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function zL(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=mS(r.transform,i||null);s!=null&&(n===null&&(n=ln.empty()),n.set(r.field,s))}return n||null}function Vv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Fs(r,i,(s,o)=>UL(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ja extends th{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Wi extends th{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function ES(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Uv(t,e,n){const r=new Map;xe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,VL(o,a,n[i]))}return r}function jv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,FL(s,o,e))}return r}class wS extends th{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $L extends th{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WL{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&BL(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ea(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ea(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=fS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=vS(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Te.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ht())}isEqual(e){return this.batchId===e.batchId&&Fs(this.mutations,e.mutations,(n,r)=>Vv(n,r))&&Fs(this.baseMutations,e.baseMutations,(n,r)=>Vv(n,r))}}class qm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){xe(e.mutations.length===r.length);let i=function(){return OL}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new qm(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HL{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De,re;function qL(t){switch(t){default:return te();case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0}}function GL(t){if(t===void 0)return Ni("GRPC error has no .code"),U.UNKNOWN;switch(t){case De.OK:return U.OK;case De.CANCELLED:return U.CANCELLED;case De.UNKNOWN:return U.UNKNOWN;case De.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case De.INTERNAL:return U.INTERNAL;case De.UNAVAILABLE:return U.UNAVAILABLE;case De.UNAUTHENTICATED:return U.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case De.NOT_FOUND:return U.NOT_FOUND;case De.ALREADY_EXISTS:return U.ALREADY_EXISTS;case De.PERMISSION_DENIED:return U.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case De.ABORTED:return U.ABORTED;case De.OUT_OF_RANGE:return U.OUT_OF_RANGE;case De.UNIMPLEMENTED:return U.UNIMPLEMENTED;case De.DATA_LOSS:return U.DATA_LOSS;default:return te()}}(re=De||(De={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new GI([4294967295,4294967295],0);class KL{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Jf(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function QL(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function YL(t,e){return Jf(t,e.toTimestamp())}function Rs(t){return xe(!!t),Te.fromTimestamp(function(n){const r=xi(n);return new Ge(r.seconds,r.nanos)}(t))}function TS(t,e){return Zf(t,e).canonicalString()}function Zf(t,e){const n=function(i){return new Le(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function XL(t){const e=Le.fromString(t);return xe(sM(e)),e}function ep(t,e){return TS(t.databaseId,e.path)}function JL(t){const e=XL(t);return e.length===4?Le.emptyPath():eM(e)}function ZL(t){return new Le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function eM(t){return xe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Bv(t,e,n){return{name:ep(t,e),fields:n.value.mapValue.fields}}function tM(t,e){let n;if(e instanceof Ja)n={update:Bv(t,e.key,e.value)};else if(e instanceof wS)n={delete:ep(t,e.key)};else if(e instanceof Wi)n={update:Bv(t,e.key,e.data),updateMask:iM(e.fieldMask)};else{if(!(e instanceof $L))return te();n={verify:ep(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof dc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof xa)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Oa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof fc)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw te()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:YL(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:te()}(t,e.precondition)),n}function nM(t,e){return t&&t.length>0?(xe(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Rs(i.updateTime):Rs(s);return o.isEqual(Te.min())&&(o=Rs(s)),new jL(o,i.transformResults||[])}(n,e))):[]}function rM(t){let e=JL(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){xe(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(f){const m=IS(f);return m instanceof zr&&sS(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(v){return new cc(ts(v.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,Vm(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(f){const m=!!f.before,C=f.values||[];return new uc(C,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,C=f.values||[];return new uc(C,m)}(n.endAt)),CL(e,i,o,s,a,"F",u,c)}function IS(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ts(n.unaryFilter.field);return We.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ts(n.unaryFilter.field);return We.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ts(n.unaryFilter.field);return We.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ts(n.unaryFilter.field);return We.create(o,"!=",{nullValue:"NULL_VALUE"});default:return te()}}(t):t.fieldFilter!==void 0?function(n){return We.create(ts(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return te()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return zr.create(n.compositeFilter.filters.map(r=>IS(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return te()}}(n.compositeFilter.op))}(t):te()}function ts(t){return Je.fromServerFormat(t.fieldPath)}function iM(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function sM(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oM{constructor(e){this.ht=e}}function aM(t){const e=rM({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Xf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lM{constructor(){this.ln=new uM}addToCollectionParentIndex(e,n){return this.ln.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(Br.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(Br.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class uM{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new et(Le.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new et(Le.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class St{static withCacheSize(e){return new St(e,St.DEFAULT_COLLECTION_PERCENTILE,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */St.DEFAULT_COLLECTION_PERCENTILE=10,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,St.DEFAULT=new St(41943040,St.DEFAULT_COLLECTION_PERCENTILE,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),St.DISABLED=new St(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new Bs(0)}static Qn(){return new Bs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $v([t,e],[n,r]){const i=ue(t,n);return i===0?ue(e,r):i}class cM{constructor(e){this.Gn=e,this.buffer=new et($v),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();$v(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class hM{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){q("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Xa(n)?q("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Mm(n)}await this.Yn(3e5)})}}class dM{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(Fm.oe);const r=new cM(n);return this.Zn.forEachTarget(e,i=>r.Hn(i.sequenceNumber)).next(()=>this.Zn.er(e,i=>r.Hn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Zn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(q("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(zv)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),zv):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let r,i,s,o,a,u,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,n))).next(f=>(s=f,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(c=Date.now(),es()<=Z.DEBUG&&q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(u-a)+`ms
	Removed ${f} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function fM(t,e){return new dM(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pM{constructor(){this.changes=new $i(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,an.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mM{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gM{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ea(r.mutation,i,cn.empty(),Ge.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ht()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ht()){const i=di();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Kl();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=di();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ht()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=hc();const o=Zo(),a=function(){return Zo()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Wi)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),ea(d.mutation,c,d.mutation.getFieldMask(),Ge.now())):o.set(c.key,cn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var f;return a.set(c,new mM(d,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Zo();let i=new yn((o,a)=>o-a),s=ht();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||cn.empty();d=a.applyToLocalView(c,d),r.set(u,d);const f=(i.get(a.batchId)||ht()).add(u);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,d=u.value,f=fS();d.forEach(m=>{if(!s.has(m)){const C=vS(n.get(m),r.get(m));C!==null&&f.set(m,C),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return J.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):AL(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):M.resolve(di());let a=-1,u=s;return o.next(c=>M.forEach(c,(d,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(d)?M.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ht())).next(d=>({batchId:a,changes:dS(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new J(n)).next(r=>{let i=Kl();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Kl();return this.indexManager.getCollectionParents(e,s).next(a=>M.forEach(a,u=>{const c=function(f,m){return new Zc(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,an.newInvalidDocument(d)))});let a=Kl();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&ea(d.mutation,c,cn.empty(),Ge.now()),Wm(n,c)&&(a=a.insert(u,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _M{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return M.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Rs(i.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(i){return{name:i.name,query:aM(i.bundledQuery),readTime:Rs(i.readTime)}}(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yM{constructor(){this.overlays=new yn(J.comparator),this.Er=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=di();return M.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.Tt(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Er.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Er.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=di(),s=n.length+1,o=new J(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new yn((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=di(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const a=di(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>a.set(c,d)),!(a.size()>=i)););return M.resolve(a)}Tt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Er.get(i.largestBatchId).delete(r.key);this.Er.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new HL(n,r));let s=this.Er.get(n);s===void 0&&(s=ht(),this.Er.set(n,s)),this.Er.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vM{constructor(){this.sessionToken=xn.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(){this.dr=new et(Be.Ar),this.Rr=new et(Be.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,n){const r=new Be(e,n);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gr(new Be(e,n))}pr(e,n){e.forEach(r=>this.removeReference(r,n))}yr(e){const n=new J(new Le([])),r=new Be(n,e),i=new Be(n,e+1),s=[];return this.Rr.forEachInRange([r,i],o=>{this.gr(o),s.push(o.key)}),s}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new J(new Le([])),r=new Be(n,e),i=new Be(n,e+1);let s=ht();return this.Rr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Be(e,0),r=this.dr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Be{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return J.comparator(e.key,n.key)||ue(e.br,n.br)}static Vr(e,n){return ue(e.br,n.br)||J.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EM{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new et(Be.Ar)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new WL(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.vr=this.vr.add(new Be(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Fr(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Be(n,0),i=new Be(n,Number.POSITIVE_INFINITY),s=[];return this.vr.forEachInRange([r,i],o=>{const a=this.Cr(o.br);s.push(a)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new et(ue);return n.forEach(i=>{const s=new Be(i,0),o=new Be(i,Number.POSITIVE_INFINITY);this.vr.forEachInRange([s,o],a=>{r=r.add(a.br)})}),M.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;J.isDocumentKey(s)||(s=s.child(""));const o=new Be(new J(s),0);let a=new et(ue);return this.vr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.br)),!0)},o),M.resolve(this.Mr(a))}Mr(e){const n=[];return e.forEach(r=>{const i=this.Cr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){xe(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return M.forEach(n.mutations,i=>{const s=new Be(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,n){const r=new Be(n,0),i=this.vr.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wM{constructor(e){this.Nr=e,this.docs=function(){return new yn(J.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Nr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():an.newInvalidDocument(n))}getEntries(e,n){let r=hc();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():an.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=hc();const o=n.path,a=new J(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||rL(nL(d),r)<=0||(i.has(d.key)||Wm(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,n,r,i){te()}Lr(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new TM(this)}getSize(e){return M.resolve(this.size)}}class TM extends pM{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.hr.addEntry(e,i)):this.hr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IM{constructor(e){this.persistence=e,this.Br=new $i(n=>zm(n),$m),this.lastRemoteSnapshotVersion=Te.min(),this.highestTargetId=0,this.kr=0,this.qr=new Gm,this.targetCount=0,this.Qr=Bs.qn()}forEachTarget(e,n){return this.Br.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.kr&&(this.kr=n),M.resolve()}Un(e){this.Br.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new Bs(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Un(n),M.resolve()}removeTargetData(e,n){return this.Br.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Br.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Br.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.Br.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.qr.mr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.qr.pr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.qr.Sr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.qr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{constructor(e,n){this.Kr={},this.overlays={},this.$r=new Fm(0),this.Ur=!1,this.Ur=!0,this.Wr=new vM,this.referenceDelegate=e(this),this.Gr=new IM(this),this.indexManager=new lM,this.remoteDocumentCache=function(i){return new wM(i)}(r=>this.referenceDelegate.zr(r)),this.serializer=new oM(n),this.jr=new _M(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new yM,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Kr[e.toKey()];return r||(r=new EM(n,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const i=new SM(this.$r.next());return this.referenceDelegate.Hr(),r(i).next(s=>this.referenceDelegate.Jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Yr(e,n){return M.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,n)))}}class SM extends sL{constructor(e){super(),this.currentSequenceNumber=e}}class Km{constructor(e){this.persistence=e,this.Zr=new Gm,this.Xr=null}static ei(e){return new Km(e)}get ti(){if(this.Xr)return this.Xr;throw te()}addReference(e,n,r){return this.Zr.addReference(r,n),this.ti.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Zr.removeReference(r,n),this.ti.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),M.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(i=>this.ti.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.ti.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.ti,r=>{const i=J.fromPath(r);return this.ni(e,i).next(s=>{s||n.removeEntry(i,Te.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(r=>{r?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return M.or([()=>M.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class pc{constructor(e,n){this.persistence=e,this.ri=new $i(r=>lL(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=fM(this,n)}static ei(e,n){return new pc(e,n)}Hr(){}Jr(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}nr(e){let n=0;return this.er(e,r=>{n++}).next(()=>n)}er(e,n){return M.forEach(this.ri,(r,i)=>this.ir(e,r,i).next(s=>s?M.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.Lr(e,o=>this.ir(e,o,n).next(a=>{a||(r++,s.removeEntry(o,Te.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),M.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=mu(e.data.value)),n}ir(e,n,r){return M.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.ri.get(n);return M.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Wi=r,this.Gi=i}static zi(e,n){let r=ht(),i=ht();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Qm(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CM{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RM{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return $P()?8:oL(_t())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Xi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.es(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new CM;return this.ts(e,n,o).next(a=>{if(s.result=a,this.Hi)return this.ns(e,n,o,a.size)})}).next(()=>s.result)}ns(e,n,r,i){return r.documentReadCount<this.Ji?(es()<=Z.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",Ao(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),M.resolve()):(es()<=Z.DEBUG&&q("QueryEngine","Query:",Ao(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Yi*i?(es()<=Z.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",Ao(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,yi(n))):M.resolve())}Xi(e,n){if(Mv(n))return M.resolve(null);let r=yi(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Xf(n,null,"F"),r=yi(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ht(...s);return this.Zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.rs(n,a);return this.ss(n,c,o,u.readTime)?this.Xi(e,Xf(n,null,"F")):this.os(e,c,n,u)}))})))}es(e,n,r,i){return Mv(n)||i.isEqual(Te.min())?M.resolve(null):this.Zi.getDocuments(e,r).next(s=>{const o=this.rs(n,s);return this.ss(n,o,r,i)?M.resolve(null):(es()<=Z.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ao(n)),this.os(e,o,n,tL(i,-1)).next(a=>a))})}rs(e,n){let r=new et(PL(e));return n.forEach((i,s)=>{Wm(e,s)&&(r=r.add(s))}),r}ss(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ts(e,n,r){return es()<=Z.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",Ao(n)),this.Zi.getDocumentsMatchingQuery(e,n,Br.min(),r)}os(e,n,r,i){return this.Zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AM{constructor(e,n,r,i){this.persistence=e,this._s=n,this.serializer=i,this.us=new yn(ue),this.cs=new $i(s=>zm(s),$m),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new gM(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function kM(t,e,n,r){return new AM(t,e,n,r)}async function CS(t,e){const n=me(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Ps(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=ht();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){a.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ts:c,removedBatchIds:o,addedBatchIds:a}))})})}function PM(t,e){const n=me(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.hs.newChangeBuffer({trackRemovals:!0});return function(a,u,c,d){const f=c.batch,m=f.keys();let C=M.resolve();return m.forEach(v=>{C=C.next(()=>d.getEntry(u,v)).next(k=>{const P=c.docVersions.get(v);xe(P!==null),k.version.compareTo(P)<0&&(f.applyToRemoteDocument(k,c),k.isValidDocument()&&(k.setReadTime(c.commitVersion),d.addEntry(k)))})}),C.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=ht();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function NM(t){const e=me(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function xM(t,e){const n=me(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class Wv{constructor(){this.activeTargetIds=LL()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class OM{constructor(){this._o=new Wv,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,r){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Wv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bM{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ql=null;function Sd(){return Ql===null?Ql=function(){return 268435456+Math.round(2147483648*Math.random())}():Ql++,"0x"+Ql.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LM{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt="WebChannelConnection";class MM extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+n.host,this.Mo=`projects/${i}/databases/${s}`,this.xo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Oo(n,r,i,s,o){const a=Sd(),u=this.No(n,r.toUriEncodedString());q("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(c,s,o),this.Bo(n,u,c,i).then(d=>(q("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw sc("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",u,"request:",i),d})}ko(n,r,i,s,o,a){return this.Oo(n,r,i,s,o)}Lo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Xs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}No(n,r){const i=DM[n];return`${this.Fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,n,r,i){const s=Sd();return new Promise((o,a)=>{const u=new KI;u.setWithCredentials(!0),u.listenOnce(QI.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case pu.NO_ERROR:const d=u.getResponseJson();q(lt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case pu.TIMEOUT:q(lt,`RPC '${e}' ${s} timed out`),a(new K(U.DEADLINE_EXCEEDED,"Request time out"));break;case pu.HTTP_ERROR:const f=u.getStatus();if(q(lt,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const C=m==null?void 0:m.error;if(C&&C.status&&C.message){const v=function(P){const w=P.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(w)>=0?w:U.UNKNOWN}(C.status);a(new K(v,C.message))}else a(new K(U.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new K(U.UNAVAILABLE,"Connection failed."));break;default:te()}}finally{q(lt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);q(lt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}qo(e,n,r){const i=Sd(),s=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=JI(),a=XI(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Lo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");q(lt,`Creating RPC '${e}' stream ${i}: ${d}`,u);const f=o.createWebChannel(d,u);let m=!1,C=!1;const v=new LM({Eo:P=>{C?q(lt,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(m||(q(lt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),q(lt,`RPC '${e}' stream ${i} sending:`,P),f.send(P))},Ao:()=>f.close()}),k=(P,w,y)=>{P.listen(w,S=>{try{y(S)}catch(b){setTimeout(()=>{throw b},0)}})};return k(f,Uo.EventType.OPEN,()=>{C||(q(lt,`RPC '${e}' stream ${i} transport opened.`),v.So())}),k(f,Uo.EventType.CLOSE,()=>{C||(C=!0,q(lt,`RPC '${e}' stream ${i} transport closed`),v.Do())}),k(f,Uo.EventType.ERROR,P=>{C||(C=!0,sc(lt,`RPC '${e}' stream ${i} transport errored:`,P),v.Do(new K(U.UNAVAILABLE,"The operation could not be completed")))}),k(f,Uo.EventType.MESSAGE,P=>{var w;if(!C){const y=P.data[0];xe(!!y);const S=y,b=(S==null?void 0:S.error)||((w=S[0])===null||w===void 0?void 0:w.error);if(b){q(lt,`RPC '${e}' stream ${i} received error:`,b);const F=b.status;let B=function(T){const R=De[T];if(R!==void 0)return GL(R)}(F),I=b.message;B===void 0&&(B=U.INTERNAL,I="Unknown error status: "+F+" with message "+b.message),C=!0,v.Do(new K(B,I)),f.close()}else q(lt,`RPC '${e}' stream ${i} received:`,y),v.vo(y)}}),k(a,YI.STAT_EVENT,P=>{P.stat===qf.PROXY?q(lt,`RPC '${e}' stream ${i} detected buffering proxy`):P.stat===qf.NOPROXY&&q(lt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.bo()},0),v}}function Cd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(t){return new KL(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(e,n,r=1e3,i=1.5,s=6e4){this.li=e,this.timerId=n,this.Qo=r,this.Ko=i,this.$o=s,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),i=Math.max(0,n-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,i,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FM{constructor(e,n,r,i,s,o,a,u){this.li=e,this.Yo=r,this.Zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new RS(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(Ni(n.toString()),Ni("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Xo===n&&this.I_(r,i)},r=>{e(()=>{const i=new K(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(i)})})}I_(e,n){const r=this.T_(this.Xo);this.stream=this.d_(e,n),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(i=>{r(()=>this.E_(i))}),this.stream.onMessage(i=>{r(()=>++this.n_==1?this.A_(i):this.onNext(i))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class VM extends FM{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,n){return this.connection.qo("Write",e,n)}A_(e){return xe(!!e.streamToken),this.lastStreamToken=e.streamToken,xe(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){xe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const n=nM(e.writeResults,e.commitTime),r=Rs(e.commitTime);return this.listener.y_(r,n)}w_(){const e={};e.database=ZL(this.serializer),this.c_(e)}g_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>tM(this.serializer,r))};this.c_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UM extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.S_=!1}b_(){if(this.S_)throw new K(U.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,r,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Oo(e,Zf(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new K(U.UNKNOWN,s.toString())})}ko(e,n,r,i,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.ko(e,Zf(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new K(U.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class jM{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Ni(n),this.C_=!1):q("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BM{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=s,this.Q_.uo(o=>{r.enqueueAndForget(async()=>{el(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=me(u);c.k_.add(4),await Za(c),c.K_.set("Unknown"),c.k_.delete(4),await rh(c)}(this))})}),this.K_=new jM(r,i)}}async function rh(t){if(el(t))for(const e of t.q_)await e(!0)}async function Za(t){for(const e of t.q_)await e(!1)}function el(t){return me(t).k_.size===0}async function AS(t,e,n){if(!Xa(e))throw e;t.k_.add(1),await Za(t),t.K_.set("Offline"),n||(n=()=>NM(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await rh(t)})}function kS(t,e){return e().catch(n=>AS(t,n,e))}async function ih(t){const e=me(t),n=$r(e);let r=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;zM(e);)try{const i=await xM(e.localStore,r);if(i===null){e.L_.length===0&&n.a_();break}r=i.batchId,$M(e,i)}catch(i){await AS(e,i)}PS(e)&&NS(e)}function zM(t){return el(t)&&t.L_.length<10}function $M(t,e){t.L_.push(e);const n=$r(t);n.s_()&&n.f_&&n.g_(e.mutations)}function PS(t){return el(t)&&!$r(t).i_()&&t.L_.length>0}function NS(t){$r(t).start()}async function WM(t){$r(t).w_()}async function HM(t){const e=$r(t);for(const n of t.L_)e.g_(n.mutations)}async function qM(t,e,n){const r=t.L_.shift(),i=qm.from(r,e,n);await kS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ih(t)}async function GM(t,e){e&&$r(t).f_&&await async function(r,i){if(function(o){return qL(o)&&o!==U.ABORTED}(i.code)){const s=r.L_.shift();$r(r).__(),await kS(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ih(r)}}(t,e),PS(t)&&NS(t)}async function qv(t,e){const n=me(t);n.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const r=el(n);n.k_.add(3),await Za(n),r&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await rh(n)}async function KM(t,e){const n=me(t);e?(n.k_.delete(2),await rh(n)):e||(n.k_.add(2),await Za(n),n.K_.set("Unknown"))}function $r(t){return t.G_||(t.G_=function(n,r,i){const s=me(n);return s.b_(),new VM(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Ro:()=>Promise.resolve(),mo:WM.bind(null,t),po:GM.bind(null,t),p_:HM.bind(null,t),y_:qM.bind(null,t)}),t.q_.push(async e=>{e?(t.G_.__(),await ih(t)):(await t.G_.stop(),t.L_.length>0&&(q("RemoteStore",`Stopping write stream with ${t.L_.length} pending writes`),t.L_=[]))})),t.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new _i,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Ym(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xS(t,e){if(Ni("AsyncQueue",`${e}: ${t}`),Xa(t))return new K(U.UNAVAILABLE,`${e}: ${t}`);throw t}class QM{constructor(){this.queries=Gv(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,r){const i=me(n),s=i.queries;i.queries=Gv(),s.forEach((o,a)=>{for(const u of a.J_)u.onError(r)})})(this,new K(U.ABORTED,"Firestore shutting down"))}}function Gv(){return new $i(t=>cS(t),uS)}function YM(t){t.X_.forEach(e=>{e.next()})}var Kv,Qv;(Qv=Kv||(Kv={})).na="default",Qv.Cache="cache";class XM{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new $i(a=>cS(a),uS),this.Oa=new Map,this.Na=new Set,this.La=new yn(J.comparator),this.Ba=new Map,this.ka=new Gm,this.qa={},this.Qa=new Map,this.Ka=Bs.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function JM(t,e,n){const r=n2(t);try{const i=await function(o,a){const u=me(o),c=Ge.now(),d=a.reduce((C,v)=>C.add(v.key),ht());let f,m;return u.persistence.runTransaction("Locally write mutations","readwrite",C=>{let v=hc(),k=ht();return u.hs.getEntries(C,d).next(P=>{v=P,v.forEach((w,y)=>{y.isValidDocument()||(k=k.add(w))})}).next(()=>u.localDocuments.getOverlayedDocuments(C,v)).next(P=>{f=P;const w=[];for(const y of a){const S=zL(y,f.get(y.key).overlayedDocument);S!=null&&w.push(new Wi(y.key,S,nS(S.value.mapValue),Jn.exists(!0)))}return u.mutationQueue.addMutationBatch(C,c,w,a)}).next(P=>{m=P;const w=P.applyToLocalDocumentSet(f,k);return u.documentOverlayCache.saveOverlays(C,P.batchId,w)})}).then(()=>({batchId:m.batchId,changes:dS(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.qa[o.currentUser.toKey()];c||(c=new yn(ue)),c=c.insert(a,u),o.qa[o.currentUser.toKey()]=c}(r,i.batchId,n),await sh(r,i.changes),await ih(r.remoteStore)}catch(i){const s=xS(i,"Failed to persist write");n.reject(s)}}function Yv(t,e,n){const r=me(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.xa.forEach((s,o)=>{const a=o.view.ea(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=me(o);u.onlineState=a;let c=!1;u.queries.forEach((d,f)=>{for(const m of f.J_)m.ea(a)&&(c=!0)}),c&&YM(u)}(r.eventManager,e),i.length&&r.Ma.R_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ZM(t,e){const n=me(t),r=e.batch.batchId;try{const i=await PM(n.localStore,e);bS(n,r,null),OS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await sh(n,i)}catch(i){await Mm(i)}}async function e2(t,e,n){const r=me(t);try{const i=await function(o,a){const u=me(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,a).next(f=>(xe(f!==null),d=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);bS(r,e,n),OS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await sh(r,i)}catch(i){await Mm(i)}}function OS(t,e){(t.Qa.get(e)||[]).forEach(n=>{n.resolve()}),t.Qa.delete(e)}function bS(t,e,n){const r=me(t);let i=r.qa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.qa[r.currentUser.toKey()]=i}}async function sh(t,e,n){const r=me(t),i=[],s=[],o=[];r.xa.isEmpty()||(r.xa.forEach((a,u)=>{o.push(r.Ua(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(d=void 0)===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=Qm.zi(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Ma.R_(i),await async function(u,c){const d=me(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>M.forEach(c,m=>M.forEach(m.Wi,C=>d.persistence.referenceDelegate.addReference(f,m.targetId,C)).next(()=>M.forEach(m.Gi,C=>d.persistence.referenceDelegate.removeReference(f,m.targetId,C)))))}catch(f){if(!Xa(f))throw f;q("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const C=d.us.get(m),v=C.snapshotVersion,k=C.withLastLimboFreeSnapshotVersion(v);d.us=d.us.insert(m,k)}}}(r.localStore,s))}async function t2(t,e){const n=me(t);if(!n.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const r=await CS(n.localStore,e);n.currentUser=e,function(s,o){s.Qa.forEach(a=>{a.forEach(u=>{u.reject(new K(U.CANCELLED,o))})}),s.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await sh(n,r.Ts)}}function n2(t){const e=me(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ZM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=e2.bind(null,e),e}class mc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=nh(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return kM(this.persistence,new RM,e.initialUser,this.serializer)}ja(e){return new SS(Km.ei,this.serializer)}za(e){return new OM}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}mc.provider={build:()=>new mc};class r2 extends mc{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){xe(this.persistence.referenceDelegate instanceof pc);const r=this.persistence.referenceDelegate.garbageCollector;return new hM(r,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?St.withCacheSize(this.cacheSizeBytes):St.DEFAULT;return new SS(r=>pc.ei(r,n),this.serializer)}}class tp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Yv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=t2.bind(null,this.syncEngine),await KM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new QM}()}createDatastore(e){const n=nh(e.databaseInfo.databaseId),r=function(s){return new MM(s)}(e.databaseInfo);return function(s,o,a,u){return new UM(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new BM(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Yv(this.syncEngine,n,0),function(){return Hv.p()?new Hv:new bM}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,d){const f=new XM(i,s,o,a,u,c);return d&&(f.$a=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=me(i);q("RemoteStore","RemoteStore shutting down."),s.k_.add(5),await Za(s),s.Q_.shutdown(),s.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}tp.provider={build:()=>new tp};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i2{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ut.UNAUTHENTICATED,this.clientId=eS.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{q("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _i;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=xS(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Rd(t,e){t.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await CS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Xv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await s2(t);q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>qv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>qv(e.remoteStore,i)),t._onlineComponents=e}async function s2(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await Rd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===U.FAILED_PRECONDITION||i.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;sc("Error using user provided cache. Falling back to memory cache: "+n),await Rd(t,new mc)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await Rd(t,new r2(void 0));return t._offlineComponents}async function o2(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await Xv(t,t._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await Xv(t,new tp))),t._onlineComponents}function a2(t){return o2(t).then(e=>e.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l2(t,e,n){if(!n)throw new K(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function u2(t,e,n,r){if(e===!0&&r===!0)throw new K(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Zv(t){if(!J.isDocumentKey(t))throw new K(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Xm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":te()}function np(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Xm(t);throw new K(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new K(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}u2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=DS((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new K(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new K(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new K(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Jm{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new e0({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new e0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new qD;switch(r.type){case"firstParty":return new YD(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Jv.get(n);r&&(q("ComponentProvider","Removing Datastore"),Jv.delete(n),r.terminate())}(this),Promise.resolve()}}function c2(t,e,n,r={}){var i;const s=(t=np(t,Jm))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&sc("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=ut.MOCK_USER;else{a=NT(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new K(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new ut(c)}t._authCredentials=new GD(new ZI(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Zm(this.firestore,e,this._query)}}class Zn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ba(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Zn(this.firestore,e,this._key)}}class ba extends Zm{constructor(e,n,r){super(e,n,RL(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Zn(this.firestore,null,new J(e))}withConverter(e){return new ba(this.firestore,e,this._path)}}function h2(t,e,...n){if(t=nt(t),arguments.length===1&&(e=eS.newId()),l2("doc","path",e),t instanceof Jm){const r=Le.fromString(e,...n);return Zv(r),new Zn(t,null,new J(r))}{if(!(t instanceof Zn||t instanceof ba))throw new K(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return Zv(r),new Zn(t.firestore,t instanceof ba?t.converter:null,new J(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new RS(this,"async_queue_retry"),this.fu=()=>{const r=Cd();r&&q("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const n=Cd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const n=Cd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const n=new _i;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Xa(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Ni("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ru=!1,r))));return this.gu=n,n}enqueueAfterDelay(e,n,r){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const i=Ym.createAndSchedule(this,e,n,r,s=>this.Su(s));return this.du.push(i),i}pu(){this.Au&&te()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}class LS extends Jm{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new t0,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new t0(e),this._firestoreClient=void 0,await e}}}function d2(t,e){const n=typeof t=="object"?t:Gc(),r=typeof t=="string"?t:"(default)",i=Qr(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=AT("firestore");s&&c2(i,...s)}return i}function f2(t){if(t._terminated)throw new K(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||p2(t),t._firestoreClient}function p2(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,d){return new dL(a,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,DS(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new i2(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Da(xn.fromBase64String(e))}catch(n){throw new K(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Da(xn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VS{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m2=/^__.*__$/;class g2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Wi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ja(e,this.data,n,this.fieldTransforms)}}function jS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw te()}}class eg{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Fu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new eg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.xu({path:r,Nu:!1});return i.Lu(e),i}Bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.xu({path:r,Nu:!1});return i.Fu(),i}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return gc(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(jS(this.Mu)&&m2.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class _2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||nh(e)}$u(e,n,r,i=!1){return new eg({Mu:e,methodName:n,Ku:r,path:Je.emptyPath(),Nu:!1,Qu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function y2(t){const e=t._freezeSettings(),n=nh(t._databaseId);return new _2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function v2(t,e,n,r,i,s={}){const o=t.$u(s.merge||s.mergeFields?2:0,e,n,i);WS("Data must be an object, but it was:",o,r);const a=zS(r,o);let u,c;if(s.merge)u=new cn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const m=E2(e,f,n);if(!o.contains(m))throw new K(U.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);I2(d,m)||d.push(m)}u=new cn(d),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new g2(new ln(a),u,c)}function BS(t,e){if($S(t=nt(t)))return WS("Unsupported field value:",e,t),zS(t,e);if(t instanceof FS)return function(r,i){if(!jS(i.Mu))throw i.qu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.qu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=BS(a,i.ku(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=nt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ML(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ge.fromDate(r);return{timestampValue:Jf(i.serializer,s)}}if(r instanceof Ge){const s=new Ge(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Jf(i.serializer,s)}}if(r instanceof VS)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Da)return{bytesValue:QL(i.serializer,r._byteString)};if(r instanceof Zn){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:TS(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof US)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.qu("VectorValues must only contain numeric values.");return Hm(a.serializer,u)})}}}}}}(r,i);throw i.qu(`Unsupported field value: ${Xm(r)}`)}(t,e)}function zS(t,e){const n={};return tS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Js(t,(r,i)=>{const s=BS(i,e.Ou(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function $S(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ge||t instanceof VS||t instanceof Da||t instanceof Zn||t instanceof FS||t instanceof US)}function WS(t,e,n){if(!$S(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Xm(n);throw r==="an object"?e.qu(t+" a custom object"):e.qu(t+" "+r)}}function E2(t,e,n){if((e=nt(e))instanceof MS)return e._internalPath;if(typeof e=="string")return T2(t,e);throw gc("Field path arguments must be of type string or ",t,!1,void 0,n)}const w2=new RegExp("[~\\*/\\[\\]]");function T2(t,e,n){if(e.search(w2)>=0)throw gc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new MS(...e.split("."))._internalPath}catch{throw gc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function gc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new K(U.INVALID_ARGUMENT,a+t+u)}function I2(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S2(t,e,n){let r;return r=t?t.toFirestore(e):e,r}function C2(t,e,n){t=np(t,Zn);const r=np(t.firestore,LS),i=S2(t.converter,e);return R2(r,[v2(y2(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Jn.none())])}function R2(t,e){return function(r,i){const s=new _i;return r.asyncQueue.enqueueAndForget(async()=>JM(await a2(r),i,s)),s.promise}(f2(t),e)}(function(e,n=!0){(function(i){Xs=i})(Bi),gn(new Zt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new LS(new KD(r.getProvider("auth-internal")),new JD(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new K(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new lc(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),xt(Av,"4.7.5",e),xt(Av,"4.7.5","esm2017")})();var n0={};const r0="@firebase/database",i0="1.0.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let HS="";function A2(t){HS=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k2{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Xe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Sa(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P2{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ur(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qS=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new k2(e)}}catch{}return new P2},fi=qS("localStorage"),N2=qS("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As=new qa("@firebase/database"),x2=function(){let t=1;return function(){return t++}}(),GS=function(t){const e=tN(t),n=new YP;n.update(e);const r=n.digest();return _m.encodeByteArray(r)},tl=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=tl.apply(null,r):typeof r=="object"?e+=Xe(r):e+=r,e+=" "}return e};let ta=null,s0=!0;const O2=function(t,e){$(!e,"Can't turn on custom loggers persistently."),As.logLevel=Z.VERBOSE,ta=As.log.bind(As)},dt=function(...t){if(s0===!0&&(s0=!1,ta===null&&N2.get("logging_enabled")===!0&&O2()),ta){const e=tl.apply(null,t);ta(e)}},nl=function(t){return function(...e){dt(t,...e)}},rp=function(...t){const e="FIREBASE INTERNAL ERROR: "+tl(...t);As.error(e)},ar=function(...t){const e=`FIREBASE FATAL ERROR: ${tl(...t)}`;throw As.error(e),new Error(e)},jt=function(...t){const e="FIREBASE WARNING: "+tl(...t);As.warn(e)},b2=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&jt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},KS=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},D2=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},zs="[MIN_NAME]",bi="[MAX_NAME]",Zs=function(t,e){if(t===e)return 0;if(t===zs||e===bi)return-1;if(e===zs||t===bi)return 1;{const n=o0(t),r=o0(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},L2=function(t,e){return t===e?0:t<e?-1:1},ko=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Xe(e))},tg=function(t){if(typeof t!="object"||t===null)return Xe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Xe(e[r]),n+=":",n+=tg(t[e[r]]);return n+="}",n},QS=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function en(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const YS=function(t){$(!KS(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,u;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(u=n;u;u-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(u=e;u;u-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const d=c.join("");let f="";for(u=0;u<64;u+=8){let m=parseInt(d.substr(u,8),2).toString(16);m.length===1&&(m="0"+m),f=f+m}return f.toLowerCase()},M2=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},F2=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},V2=new RegExp("^-?(0*)\\d{1,10}$"),U2=-2147483648,j2=2147483647,o0=function(t){if(V2.test(t)){const e=Number(t);if(e>=U2&&e<=j2)return e}return null},rl=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw jt("Exception was thrown by user callback.",n),e},Math.floor(0))}},B2=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},na=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z2{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){jt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $2{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(dt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',jt(e)}}class yu{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}yu.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng="5",XS="v",JS="s",ZS="r",eC="f",tC=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,nC="ls",rC="p",ip="ac",iC="websocket",sC="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(e,n,r,i,s=!1,o="",a=!1,u=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=fi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&fi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function W2(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function aC(t,e,n){$(typeof e=="string","typeof type must == string"),$(typeof n=="object","typeof params must == object");let r;if(e===iC)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===sC)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);W2(t)&&(n.ns=t.namespace);const i=[];return en(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H2{constructor(){this.counters_={}}incrementCounter(e,n=1){ur(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return DP(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad={},kd={};function rg(t){const e=t.toString();return Ad[e]||(Ad[e]=new H2),Ad[e]}function q2(t,e){const n=t.toString();return kd[n]||(kd[n]=e()),kd[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G2{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&rl(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a0="start",K2="close",Q2="pLPCommand",Y2="pRTLPCB",lC="id",uC="pw",cC="ser",X2="cb",J2="seg",Z2="ts",eF="d",tF="dframe",hC=1870,dC=30,nF=hC-dC,rF=25e3,iF=3e4;class ms{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=nl(e),this.stats_=rg(n),this.urlFn=u=>(this.appCheckToken&&(u[ip]=this.appCheckToken),aC(n,sC,u))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new G2(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(iF)),D2(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ig((...s)=>{const[o,a,u,c,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===a0)this.id=a,this.password=u;else if(o===K2)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[a0]="t",r[cC]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[X2]=this.scriptTagHolder.uniqueCallbackIdentifier),r[XS]=ng,this.transportSessionId&&(r[JS]=this.transportSessionId),this.lastSessionId&&(r[nC]=this.lastSessionId),this.applicationId&&(r[rC]=this.applicationId),this.appCheckToken&&(r[ip]=this.appCheckToken),typeof location<"u"&&location.hostname&&tC.test(location.hostname)&&(r[ZS]=eC);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ms.forceAllow_=!0}static forceDisallow(){ms.forceDisallow_=!0}static isAvailable(){return ms.forceAllow_?!0:!ms.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!M2()&&!F2()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=ST(n),i=QS(r,nF);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[tF]="t",r[lC]=e,r[uC]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Xe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ig{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=x2(),window[Q2+this.uniqueCallbackIdentifier]=e,window[Y2+this.uniqueCallbackIdentifier]=n,this.myIFrame=ig.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){dt("frame writing exception"),a.stack&&dt(a.stack),dt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||dt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[lC]=this.myID,e[uC]=this.myPW,e[cC]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+dC+r.length<=hC;){const o=this.pendingSegs.shift();r=r+"&"+J2+i+"="+o.seg+"&"+Z2+i+"="+o.ts+"&"+eF+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(rF)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{dt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sF=16384,oF=45e3;let _c=null;typeof MozWebSocket<"u"?_c=MozWebSocket:typeof WebSocket<"u"&&(_c=WebSocket);class un{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=nl(this.connId),this.stats_=rg(n),this.connURL=un.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[XS]=ng,typeof location<"u"&&location.hostname&&tC.test(location.hostname)&&(o[ZS]=eC),n&&(o[JS]=n),r&&(o[nC]=r),i&&(o[ip]=i),s&&(o[rC]=s),aC(e,iC,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,fi.set("previous_websocket_failure",!0);try{let r;bT(),this.mySock=new _c(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){un.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&_c!==null&&!un.forceDisallow_}static previouslyFailed(){return fi.isInMemoryStorage||fi.get("previous_websocket_failure")===!0}markConnectionHealthy(){fi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Sa(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if($(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=QS(n,sF);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(oF))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}un.responsesRequiredToBeHealthy=2;un.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{static get ALL_TRANSPORTS(){return[ms,un]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=un&&un.isAvailable();let r=n&&!un.previouslyFailed();if(e.webSocketOnly&&(n||jt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[un];else{const i=this.transports_=[];for(const s of La.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);La.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}La.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aF=6e4,lF=5e3,uF=10*1024,cF=100*1024,Pd="t",l0="d",hF="s",u0="r",dF="e",c0="o",h0="a",d0="n",f0="p",fF="h";class pF{constructor(e,n,r,i,s,o,a,u,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=u,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=nl("c:"+this.id+":"),this.transportManager_=new La(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=na(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>cF?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>uF?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Pd in e){const n=e[Pd];n===h0?this.upgradeIfSecondaryHealthy_():n===u0?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===c0&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ko("t",e),r=ko("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:f0,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:h0,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:d0,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ko("t",e),r=ko("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ko(Pd,e);if(l0 in e){const r=e[l0];if(n===fF){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===d0){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===hF?this.onConnectionShutdown_(r):n===u0?this.onReset_(r):n===dF?rp("Server Error: "+r):n===c0?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):rp("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),ng!==r&&jt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),na(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(aF))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):na(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(lF))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:f0,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(fi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(e){this.allowedEvents_=e,this.listeners_={},$(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){$(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc extends pC{static getInstance(){return new yc}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!vm()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return $(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p0=32,m0=768;class we{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function he(){return new we("")}function ie(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Wr(t){return t.pieces_.length-t.pieceNum_}function ve(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new we(t.pieces_,e)}function mC(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function mF(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function gC(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function _C(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new we(e,0)}function He(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof we)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new we(n,0)}function ne(t){return t.pieceNum_>=t.pieces_.length}function Qt(t,e){const n=ie(t),r=ie(e);if(n===null)return e;if(n===r)return Qt(ve(t),ve(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function yC(t,e){if(Wr(t)!==Wr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function hn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Wr(t)>Wr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class gF{constructor(e,n){this.errorPrefix_=n,this.parts_=gC(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=qc(this.parts_[r]);vC(this)}}function _F(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=qc(e),vC(t)}function yF(t){const e=t.parts_.pop();t.byteLength_-=qc(e),t.parts_.length>0&&(t.byteLength_-=1)}function vC(t){if(t.byteLength_>m0)throw new Error(t.errorPrefix_+"has a key path longer than "+m0+" bytes ("+t.byteLength_+").");if(t.parts_.length>p0)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+p0+") or object contains a cycle "+ai(t))}function ai(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg extends pC{static getInstance(){return new sg}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return $(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po=1e3,vF=60*5*1e3,g0=30*1e3,EF=1.3,wF=3e4,TF="server_kill",_0=3;class er extends fC{constructor(e,n,r,i,s,o,a,u){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=u,this.id=er.nextPersistentConnectionId_++,this.log_=nl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Po,this.maxReconnectDelay_=vF,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u&&!bT())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");sg.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&yc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Xe(s)),$(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new ym,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),$(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),$(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const u=a.d,c=a.s;er.warnOnListenWarnings_(u,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,u))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ur(e,"w")){const r=Ms(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();jt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||QP(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=g0)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=KP(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),$(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Xe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):rp("Unrecognized action received from server: "+Xe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){$(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Po,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Po,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>wF&&(this.reconnectDelay_=Po),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*EF)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+er.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const u=function(){a?a.close():(o=!0,r())},c=function(f){$(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:u,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,m]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?dt("getToken() completed but was canceled"):(dt("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=m&&m.token,a=new pF(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,C=>{jt(C+" ("+this.repoInfo_.toString()+")"),this.interrupt(TF)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&jt(f),u())}}}interrupt(e){dt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){dt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Lf(this.interruptReasons_)&&(this.reconnectDelay_=Po,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>tg(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new we(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){dt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=_0&&(this.reconnectDelay_=g0,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){dt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=_0&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+HS.replace(/\./g,"-")]=1,vm()?e["framework.cordova"]=1:OT()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=yc.getInstance().currentlyOnline();return Lf(this.interruptReasons_)&&e}}er.nextPersistentConnectionId_=0;er.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new se(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new se(zs,e),i=new se(zs,n);return this.compare(r,i)!==0}minPost(){return se.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yl;class EC extends oh{static get __EMPTY_NODE(){return Yl}static set __EMPTY_NODE(e){Yl=e}compare(e,n){return Zs(e.name,n.name)}isDefinedOn(e){throw Ks("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return se.MIN}maxPost(){return new se(bi,Yl)}makePost(e,n){return $(typeof e=="string","KeyIndex indexValue must always be a string."),new se(e,Yl)}toString(){return".key"}}const ks=new EC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class $e{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??$e.RED,this.left=i??At.EMPTY_NODE,this.right=s??At.EMPTY_NODE}copy(e,n,r,i,s){return new $e(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return At.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return At.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}$e.RED=!0;$e.BLACK=!1;class IF{copy(e,n,r,i,s){return this}insert(e,n,r){return new $e(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class At{constructor(e,n=At.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new At(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,$e.BLACK,null,null))}remove(e){return new At(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,$e.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Xl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Xl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Xl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Xl(this.root_,null,this.comparator_,!0,e)}}At.EMPTY_NODE=new IF;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SF(t,e){return Zs(t.name,e.name)}function og(t,e){return Zs(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sp;function CF(t){sp=t}const wC=function(t){return typeof t=="number"?"number:"+YS(t):"string:"+t},TC=function(t){if(t.isLeafNode()){const e=t.val();$(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ur(e,".sv"),"Priority must be a string or number.")}else $(t===sp||t.isEmpty(),"priority of unexpected type.");$(t===sp||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let y0;class je{static set __childrenNodeConstructor(e){y0=e}static get __childrenNodeConstructor(){return y0}constructor(e,n=je.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,$(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),TC(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new je(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:je.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ne(e)?this:ie(e)===".priority"?this.priorityNode_:je.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:je.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ie(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:($(r!==".priority"||Wr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,je.__childrenNodeConstructor.EMPTY_NODE.updateChild(ve(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+wC(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=YS(this.value_):e+=this.value_,this.lazyHash_=GS(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===je.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof je.__childrenNodeConstructor?-1:($(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=je.VALUE_TYPE_ORDER.indexOf(n),s=je.VALUE_TYPE_ORDER.indexOf(r);return $(i>=0,"Unknown leaf type: "+n),$(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}je.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let IC,SC;function RF(t){IC=t}function AF(t){SC=t}class kF extends oh{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Zs(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return se.MIN}maxPost(){return new se(bi,new je("[PRIORITY-POST]",SC))}makePost(e,n){const r=IC(e);return new se(n,new je("[PRIORITY-POST]",r))}toString(){return".priority"}}const mt=new kF;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PF=Math.log(2);class NF{constructor(e){const n=s=>parseInt(Math.log(s)/PF,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const vc=function(t,e,n,r){t.sort(e);const i=function(u,c){const d=c-u;let f,m;if(d===0)return null;if(d===1)return f=t[u],m=n?n(f):f,new $e(m,f.node,$e.BLACK,null,null);{const C=parseInt(d/2,10)+u,v=i(u,C),k=i(C+1,c);return f=t[C],m=n?n(f):f,new $e(m,f.node,$e.BLACK,v,k)}},s=function(u){let c=null,d=null,f=t.length;const m=function(v,k){const P=f-v,w=f;f-=v;const y=i(P+1,w),S=t[P],b=n?n(S):S;C(new $e(b,S.node,k,null,y))},C=function(v){c?(c.left=v,c=v):(d=v,c=v)};for(let v=0;v<u.count;++v){const k=u.nextBitIsOne(),P=Math.pow(2,u.count-(v+1));k?m(P,$e.BLACK):(m(P,$e.BLACK),m(P,$e.RED))}return d},o=new NF(t.length),a=s(o);return new At(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nd;const Ji={};class Qn{static get Default(){return $(Ji&&mt,"ChildrenNode.ts has not been loaded"),Nd=Nd||new Qn({".priority":Ji},{".priority":mt}),Nd}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Ms(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof At?n:null}hasIndex(e){return ur(this.indexSet_,e.toString())}addIndex(e,n){$(e!==ks,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(se.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=vc(r,e.getCompare()):a=Ji;const u=e.toString(),c=Object.assign({},this.indexSet_);c[u]=e;const d=Object.assign({},this.indexes_);return d[u]=a,new Qn(d,c)}addToIndexes(e,n){const r=Yu(this.indexes_,(i,s)=>{const o=Ms(this.indexSet_,s);if($(o,"Missing index implementation for "+s),i===Ji)if(o.isDefinedOn(e.node)){const a=[],u=n.getIterator(se.Wrap);let c=u.getNext();for(;c;)c.name!==e.name&&a.push(c),c=u.getNext();return a.push(e),vc(a,o.getCompare())}else return Ji;else{const a=n.get(e.name);let u=i;return a&&(u=u.remove(new se(e.name,a))),u.insert(e,e.node)}});return new Qn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Yu(this.indexes_,i=>{if(i===Ji)return i;{const s=n.get(e.name);return s?i.remove(new se(e.name,s)):i}});return new Qn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let No;class le{static get EMPTY_NODE(){return No||(No=new le(new At(og),null,Qn.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&TC(this.priorityNode_),this.children_.isEmpty()&&$(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||No}updatePriority(e){return this.children_.isEmpty()?this:new le(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?No:n}}getChild(e){const n=ie(e);return n===null?this:this.getImmediateChild(n).getChild(ve(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if($(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new se(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?No:this.priorityNode_;return new le(i,o,s)}}updateChild(e,n){const r=ie(e);if(r===null)return n;{$(ie(e)!==".priority"||Wr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ve(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(mt,(o,a)=>{n[o]=a.val(e),r++,s&&le.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+wC(this.getPriority().val())+":"),this.forEachChild(mt,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":GS(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new se(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new se(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new se(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,se.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,se.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===il?-1:0}withIndex(e){if(e===ks||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new le(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ks||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(mt),i=n.getIterator(mt);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ks?null:this.indexMap_.get(e.toString())}}le.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class xF extends le{constructor(){super(new At(og),le.EMPTY_NODE,Qn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return le.EMPTY_NODE}isEmpty(){return!1}}const il=new xF;Object.defineProperties(se,{MIN:{value:new se(zs,le.EMPTY_NODE)},MAX:{value:new se(bi,il)}});EC.__EMPTY_NODE=le.EMPTY_NODE;je.__childrenNodeConstructor=le;CF(il);AF(il);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OF=!0;function ft(t,e=null){if(t===null)return le.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),$(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new je(n,ft(e))}if(!(t instanceof Array)&&OF){const n=[];let r=!1;if(en(t,(o,a)=>{if(o.substring(0,1)!=="."){const u=ft(a);u.isEmpty()||(r=r||!u.getPriority().isEmpty(),n.push(new se(o,u)))}}),n.length===0)return le.EMPTY_NODE;const s=vc(n,SF,o=>o.name,og);if(r){const o=vc(n,mt.getCompare());return new le(s,ft(e),new Qn({".priority":o},{".priority":mt}))}else return new le(s,ft(e),Qn.Default)}else{let n=le.EMPTY_NODE;return en(t,(r,i)=>{if(ur(t,r)&&r.substring(0,1)!=="."){const s=ft(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ft(e))}}RF(ft);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bF extends oh{constructor(e){super(),this.indexPath_=e,$(!ne(e)&&ie(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Zs(e.name,n.name):s}makePost(e,n){const r=ft(e),i=le.EMPTY_NODE.updateChild(this.indexPath_,r);return new se(n,i)}maxPost(){const e=le.EMPTY_NODE.updateChild(this.indexPath_,il);return new se(bi,e)}toString(){return gC(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DF extends oh{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Zs(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return se.MIN}maxPost(){return se.MAX}makePost(e,n){const r=ft(e);return new se(n,r)}toString(){return".value"}}const LF=new DF;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MF(t){return{type:"value",snapshotNode:t}}function FF(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function VF(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function v0(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function UF(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=mt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return $(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return $(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:zs}hasEnd(){return this.endSet_}getIndexEndValue(){return $(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return $(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:bi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return $(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===mt}copy(){const e=new ag;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function E0(t){const e={};if(t.isDefault())return e;let n;if(t.index_===mt?n="$priority":t.index_===LF?n="$value":t.index_===ks?n="$key":($(t.index_ instanceof bF,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Xe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Xe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Xe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Xe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Xe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function w0(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==mt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec extends fC{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:($(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=nl("p:rest:"),this.listens_={}}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Ec.getListenId_(e,r),a={};this.listens_[o]=a;const u=E0(e._queryParams);this.restRequest_(s+".json",u,(c,d)=>{let f=d;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(s,f,!1,r),Ms(this.listens_,o)===a){let m;c?c===401?m="permission_denied":m="rest_error:"+c:m="ok",i(m,null)}})}unlisten(e,n){const r=Ec.getListenId_(e,n);delete this.listens_[r]}get(e){const n=E0(e._queryParams),r=e._path.toString(),i=new ym;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Qs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let u=null;if(a.status>=200&&a.status<300){try{u=Sa(a.responseText)}catch{jt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,u)}else a.status!==401&&a.status!==404&&jt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jF{constructor(){this.rootNode_=le.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(){return{value:null,children:new Map}}function CC(t,e,n){if(ne(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ie(e);t.children.has(r)||t.children.set(r,wc());const i=t.children.get(r);e=ve(e),CC(i,e,n)}}function op(t,e,n){t.value!==null?n(e,t.value):BF(t,(r,i)=>{const s=new we(e.toString()+"/"+r);op(i,s,n)})}function BF(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zF{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&en(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T0=10*1e3,$F=30*1e3,WF=5*60*1e3;class HF{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new zF(e);const r=T0+($F-T0)*Math.random();na(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;en(e,(i,s)=>{s>0&&ur(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),na(this.reportStats_.bind(this),Math.floor(Math.random()*2*WF))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Rn||(Rn={}));function RC(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function AC(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function kC(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Rn.ACK_USER_WRITE,this.source=RC()}operationForChild(e){if(ne(this.path)){if(this.affectedTree.value!=null)return $(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new we(e));return new Tc(he(),n,this.revert)}}else return $(ie(this.path)===e,"operationForChild called for unrelated child."),new Tc(ve(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Rn.OVERWRITE}operationForChild(e){return ne(this.path)?new Di(this.source,he(),this.snap.getImmediateChild(e)):new Di(this.source,ve(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Rn.MERGE}operationForChild(e){if(ne(this.path)){const n=this.children.subtree(new we(e));return n.isEmpty()?null:n.value?new Di(this.source,he(),n.value):new Ma(this.source,he(),n)}else return $(ie(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ma(this.source,ve(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ne(e))return this.isFullyInitialized()&&!this.filtered_;const n=ie(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function qF(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(UF(o.childName,o.snapshotNode))}),xo(t,i,"child_removed",e,r,n),xo(t,i,"child_added",e,r,n),xo(t,i,"child_moved",s,r,n),xo(t,i,"child_changed",e,r,n),xo(t,i,"value",e,r,n),i}function xo(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,u)=>KF(t,a,u)),o.forEach(a=>{const u=GF(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(u,t.query_))})})}function GF(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function KF(t,e,n){if(e.childName==null||n.childName==null)throw Ks("Should only compare child_ events.");const r=new se(e.childName,e.snapshotNode),i=new se(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PC(t,e){return{eventCache:t,serverCache:e}}function ra(t,e,n,r){return PC(new lg(e,n,r),t.serverCache)}function NC(t,e,n,r){return PC(t.eventCache,new lg(e,n,r))}function ap(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Li(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xd;const QF=()=>(xd||(xd=new At(L2)),xd);class ye{static fromObject(e){let n=new ye(null);return en(e,(r,i)=>{n=n.set(new we(r),i)}),n}constructor(e,n=QF()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:he(),value:this.value};if(ne(e))return null;{const r=ie(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ve(e),n);return s!=null?{path:He(new we(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ne(e))return this;{const n=ie(e),r=this.children.get(n);return r!==null?r.subtree(ve(e)):new ye(null)}}set(e,n){if(ne(e))return new ye(n,this.children);{const r=ie(e),s=(this.children.get(r)||new ye(null)).set(ve(e),n),o=this.children.insert(r,s);return new ye(this.value,o)}}remove(e){if(ne(e))return this.children.isEmpty()?new ye(null):new ye(null,this.children);{const n=ie(e),r=this.children.get(n);if(r){const i=r.remove(ve(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new ye(null):new ye(this.value,s)}else return this}}get(e){if(ne(e))return this.value;{const n=ie(e),r=this.children.get(n);return r?r.get(ve(e)):null}}setTree(e,n){if(ne(e))return n;{const r=ie(e),s=(this.children.get(r)||new ye(null)).setTree(ve(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new ye(this.value,o)}}fold(e){return this.fold_(he(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(He(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,he(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(ne(e))return null;{const s=ie(e),o=this.children.get(s);return o?o.findOnPath_(ve(e),He(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,he(),n)}foreachOnPath_(e,n,r){if(ne(e))return this;{this.value&&r(n,this.value);const i=ie(e),s=this.children.get(i);return s?s.foreachOnPath_(ve(e),He(n,i),r):new ye(null)}}foreach(e){this.foreach_(he(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(He(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this.writeTree_=e}static empty(){return new pn(new ye(null))}}function ia(t,e,n){if(ne(e))return new pn(new ye(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Qt(i,e);return s=s.updateChild(o,n),new pn(t.writeTree_.set(i,s))}else{const i=new ye(n),s=t.writeTree_.setTree(e,i);return new pn(s)}}}function I0(t,e,n){let r=t;return en(n,(i,s)=>{r=ia(r,He(e,i),s)}),r}function S0(t,e){if(ne(e))return pn.empty();{const n=t.writeTree_.setTree(e,new ye(null));return new pn(n)}}function lp(t,e){return Hi(t,e)!=null}function Hi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Qt(n.path,e)):null}function C0(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(mt,(r,i)=>{e.push(new se(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new se(r,i.value))}),e}function Vr(t,e){if(ne(e))return t;{const n=Hi(t,e);return n!=null?new pn(new ye(n)):new pn(t.writeTree_.subtree(e))}}function up(t){return t.writeTree_.isEmpty()}function $s(t,e){return xC(he(),t.writeTree_,e)}function xC(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?($(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=xC(He(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(He(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OC(t,e){return FC(e,t)}function YF(t,e,n,r,i){$(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=ia(t.visibleWrites,e,n)),t.lastWriteId=r}function XF(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function JF(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);$(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&ZF(a,r.path)?i=!1:hn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return eV(t),!0;if(r.snap)t.visibleWrites=S0(t.visibleWrites,r.path);else{const a=r.children;en(a,u=>{t.visibleWrites=S0(t.visibleWrites,He(r.path,u))})}return!0}else return!1}function ZF(t,e){if(t.snap)return hn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&hn(He(t.path,n),e))return!0;return!1}function eV(t){t.visibleWrites=bC(t.allWrites,tV,he()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function tV(t){return t.visible}function bC(t,e,n){let r=pn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)hn(n,o)?(a=Qt(n,o),r=ia(r,a,s.snap)):hn(o,n)&&(a=Qt(o,n),r=ia(r,he(),s.snap.getChild(a)));else if(s.children){if(hn(n,o))a=Qt(n,o),r=I0(r,a,s.children);else if(hn(o,n))if(a=Qt(o,n),ne(a))r=I0(r,he(),s.children);else{const u=Ms(s.children,ie(a));if(u){const c=u.getChild(ve(a));r=ia(r,he(),c)}}}else throw Ks("WriteRecord should have .snap or .children")}}return r}function DC(t,e,n,r,i){if(!r&&!i){const s=Hi(t.visibleWrites,e);if(s!=null)return s;{const o=Vr(t.visibleWrites,e);if(up(o))return n;if(n==null&&!lp(o,he()))return null;{const a=n||le.EMPTY_NODE;return $s(o,a)}}}else{const s=Vr(t.visibleWrites,e);if(!i&&up(s))return n;if(!i&&n==null&&!lp(s,he()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(hn(c.path,e)||hn(e,c.path))},a=bC(t.allWrites,o,e),u=n||le.EMPTY_NODE;return $s(a,u)}}}function nV(t,e,n){let r=le.EMPTY_NODE;const i=Hi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(mt,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Vr(t.visibleWrites,e);return n.forEachChild(mt,(o,a)=>{const u=$s(Vr(s,new we(o)),a);r=r.updateImmediateChild(o,u)}),C0(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Vr(t.visibleWrites,e);return C0(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function rV(t,e,n,r,i){$(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=He(e,n);if(lp(t.visibleWrites,s))return null;{const o=Vr(t.visibleWrites,s);return up(o)?i.getChild(n):$s(o,i.getChild(n))}}function iV(t,e,n,r){const i=He(e,n),s=Hi(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Vr(t.visibleWrites,i);return $s(o,r.getNode().getImmediateChild(n))}else return null}function sV(t,e){return Hi(t.visibleWrites,e)}function oV(t,e,n,r,i,s,o){let a;const u=Vr(t.visibleWrites,e),c=Hi(u,he());if(c!=null)a=c;else if(n!=null)a=$s(u,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],f=o.getCompare(),m=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let C=m.getNext();for(;C&&d.length<i;)f(C,r)!==0&&d.push(C),C=m.getNext();return d}else return[]}function aV(){return{visibleWrites:pn.empty(),allWrites:[],lastWriteId:-1}}function cp(t,e,n,r){return DC(t.writeTree,t.treePath,e,n,r)}function LC(t,e){return nV(t.writeTree,t.treePath,e)}function R0(t,e,n,r){return rV(t.writeTree,t.treePath,e,n,r)}function Ic(t,e){return sV(t.writeTree,He(t.treePath,e))}function lV(t,e,n,r,i,s){return oV(t.writeTree,t.treePath,e,n,r,i,s)}function ug(t,e,n){return iV(t.writeTree,t.treePath,e,n)}function MC(t,e){return FC(He(t.treePath,e),t.writeTree)}function FC(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uV{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;$(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),$(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,v0(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,VF(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,FF(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,v0(r,e.snapshotNode,i.oldSnap));else throw Ks("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cV{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const VC=new cV;class cg{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new lg(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ug(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Li(this.viewCache_),s=lV(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}function hV(t,e){$(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),$(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function dV(t,e,n,r,i){const s=new uV;let o,a;if(n.type===Rn.OVERWRITE){const c=n;c.source.fromUser?o=hp(t,e,c.path,c.snap,r,i,s):($(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ne(c.path),o=Sc(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===Rn.MERGE){const c=n;c.source.fromUser?o=pV(t,e,c.path,c.children,r,i,s):($(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=dp(t,e,c.path,c.children,r,i,a,s))}else if(n.type===Rn.ACK_USER_WRITE){const c=n;c.revert?o=_V(t,e,c.path,r,i,s):o=mV(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===Rn.LISTEN_COMPLETE)o=gV(t,e,n.path,r,s);else throw Ks("Unknown operation type: "+n.type);const u=s.getChanges();return fV(e,o,u),{viewCache:o,changes:u}}function fV(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=ap(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(MF(ap(e)))}}function UC(t,e,n,r,i,s){const o=e.eventCache;if(Ic(r,n)!=null)return e;{let a,u;if(ne(n))if($(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Li(e),d=c instanceof le?c:le.EMPTY_NODE,f=LC(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const c=cp(r,Li(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=ie(n);if(c===".priority"){$(Wr(n)===1,"Can't have a priority with additional path components");const d=o.getNode();u=e.serverCache.getNode();const f=R0(r,n,d,u);f!=null?a=t.filter.updatePriority(d,f):a=o.getNode()}else{const d=ve(n);let f;if(o.isCompleteForChild(c)){u=e.serverCache.getNode();const m=R0(r,n,o.getNode(),u);m!=null?f=o.getNode().getImmediateChild(c).updateChild(d,m):f=o.getNode().getImmediateChild(c)}else f=ug(r,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,d,i,s):a=o.getNode()}}return ra(e,a,o.isFullyInitialized()||ne(n),t.filter.filtersNodes())}}function Sc(t,e,n,r,i,s,o,a){const u=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(ne(n))c=d.updateFullNode(u.getNode(),r,null);else if(d.filtersNodes()&&!u.isFiltered()){const C=u.getNode().updateChild(n,r);c=d.updateFullNode(u.getNode(),C,null)}else{const C=ie(n);if(!u.isCompleteForPath(n)&&Wr(n)>1)return e;const v=ve(n),P=u.getNode().getImmediateChild(C).updateChild(v,r);C===".priority"?c=d.updatePriority(u.getNode(),P):c=d.updateChild(u.getNode(),C,P,v,VC,null)}const f=NC(e,c,u.isFullyInitialized()||ne(n),d.filtersNodes()),m=new cg(i,f,s);return UC(t,f,n,i,m,a)}function hp(t,e,n,r,i,s,o){const a=e.eventCache;let u,c;const d=new cg(i,e,s);if(ne(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),u=ra(e,c,!0,t.filter.filtersNodes());else{const f=ie(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),u=ra(e,c,a.isFullyInitialized(),a.isFiltered());else{const m=ve(n),C=a.getNode().getImmediateChild(f);let v;if(ne(m))v=r;else{const k=d.getCompleteChild(f);k!=null?mC(m)===".priority"&&k.getChild(_C(m)).isEmpty()?v=k:v=k.updateChild(m,r):v=le.EMPTY_NODE}if(C.equals(v))u=e;else{const k=t.filter.updateChild(a.getNode(),f,v,m,d,o);u=ra(e,k,a.isFullyInitialized(),t.filter.filtersNodes())}}}return u}function A0(t,e){return t.eventCache.isCompleteForChild(e)}function pV(t,e,n,r,i,s,o){let a=e;return r.foreach((u,c)=>{const d=He(n,u);A0(e,ie(d))&&(a=hp(t,a,d,c,i,s,o))}),r.foreach((u,c)=>{const d=He(n,u);A0(e,ie(d))||(a=hp(t,a,d,c,i,s,o))}),a}function k0(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function dp(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,c;ne(n)?c=r:c=new ye(null).setTree(n,r);const d=e.serverCache.getNode();return c.children.inorderTraversal((f,m)=>{if(d.hasChild(f)){const C=e.serverCache.getNode().getImmediateChild(f),v=k0(t,C,m);u=Sc(t,u,new we(f),v,i,s,o,a)}}),c.children.inorderTraversal((f,m)=>{const C=!e.serverCache.isCompleteForChild(f)&&m.value===null;if(!d.hasChild(f)&&!C){const v=e.serverCache.getNode().getImmediateChild(f),k=k0(t,v,m);u=Sc(t,u,new we(f),k,i,s,o,a)}}),u}function mV(t,e,n,r,i,s,o){if(Ic(i,n)!=null)return e;const a=e.serverCache.isFiltered(),u=e.serverCache;if(r.value!=null){if(ne(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return Sc(t,e,n,u.getNode().getChild(n),i,s,a,o);if(ne(n)){let c=new ye(null);return u.getNode().forEachChild(ks,(d,f)=>{c=c.set(new we(d),f)}),dp(t,e,n,c,i,s,a,o)}else return e}else{let c=new ye(null);return r.foreach((d,f)=>{const m=He(n,d);u.isCompleteForPath(m)&&(c=c.set(d,u.getNode().getChild(m)))}),dp(t,e,n,c,i,s,a,o)}}function gV(t,e,n,r,i){const s=e.serverCache,o=NC(e,s.getNode(),s.isFullyInitialized()||ne(n),s.isFiltered());return UC(t,o,n,r,VC,i)}function _V(t,e,n,r,i,s){let o;if(Ic(r,n)!=null)return e;{const a=new cg(r,e,i),u=e.eventCache.getNode();let c;if(ne(n)||ie(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=cp(r,Li(e));else{const f=e.serverCache.getNode();$(f instanceof le,"serverChildren would be complete if leaf node"),d=LC(r,f)}d=d,c=t.filter.updateFullNode(u,d,s)}else{const d=ie(n);let f=ug(r,d,e.serverCache);f==null&&e.serverCache.isCompleteForChild(d)&&(f=u.getImmediateChild(d)),f!=null?c=t.filter.updateChild(u,d,f,ve(n),a,s):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(u,d,le.EMPTY_NODE,ve(n),a,s):c=u,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=cp(r,Li(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Ic(r,he())!=null,ra(e,c,o,t.filter.filtersNodes())}}function yV(t,e){const n=Li(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ne(e)&&!n.getImmediateChild(ie(e)).isEmpty())?n.getChild(e):null}function P0(t,e,n,r){e.type===Rn.MERGE&&e.source.queryId!==null&&($(Li(t.viewCache_),"We should always have a full cache before handling merges"),$(ap(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=dV(t.processor_,i,e,n,r);return hV(t.processor_,s.viewCache),$(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,vV(t,s.changes,s.viewCache.eventCache.getNode())}function vV(t,e,n,r){const i=t.eventRegistrations_;return qF(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let N0;function EV(t){$(!N0,"__referenceConstructor has already been defined"),N0=t}function hg(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return $(s!=null,"SyncTree gave us an op for an invalid query."),P0(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(P0(o,e,n,r));return s}}function dg(t,e){let n=null;for(const r of t.views.values())n=n||yV(r,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let x0;function wV(t){$(!x0,"__referenceConstructor has already been defined"),x0=t}class O0{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ye(null),this.pendingWriteTree_=aV(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function TV(t,e,n,r,i){return YF(t.pendingWriteTree_,e,n,r,i),i?lh(t,new Di(RC(),e,n)):[]}function gs(t,e,n=!1){const r=XF(t.pendingWriteTree_,e);if(JF(t.pendingWriteTree_,e)){let s=new ye(null);return r.snap!=null?s=s.set(he(),!0):en(r.children,o=>{s=s.set(new we(o),!0)}),lh(t,new Tc(r.path,s,n))}else return[]}function ah(t,e,n){return lh(t,new Di(AC(),e,n))}function IV(t,e,n){const r=ye.fromObject(n);return lh(t,new Ma(AC(),e,r))}function SV(t,e,n,r){const i=$C(t,r);if(i!=null){const s=WC(i),o=s.path,a=s.queryId,u=Qt(o,e),c=new Di(kC(a),u,n);return HC(t,o,c)}else return[]}function CV(t,e,n,r){const i=$C(t,r);if(i){const s=WC(i),o=s.path,a=s.queryId,u=Qt(o,e),c=ye.fromObject(n),d=new Ma(kC(a),u,c);return HC(t,o,d)}else return[]}function jC(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const u=Qt(o,e),c=dg(a,u);if(c)return c});return DC(i,e,s,n,!0)}function lh(t,e){return BC(e,t.syncPointTree_,null,OC(t.pendingWriteTree_,he()))}function BC(t,e,n,r){if(ne(t.path))return zC(t,e,n,r);{const i=e.get(he());n==null&&i!=null&&(n=dg(i,he()));let s=[];const o=ie(t.path),a=t.operationForChild(o),u=e.children.get(o);if(u&&a){const c=n?n.getImmediateChild(o):null,d=MC(r,o);s=s.concat(BC(a,u,c,d))}return i&&(s=s.concat(hg(i,t,r,n))),s}}function zC(t,e,n,r){const i=e.get(he());n==null&&i!=null&&(n=dg(i,he()));let s=[];return e.children.inorderTraversal((o,a)=>{const u=n?n.getImmediateChild(o):null,c=MC(r,o),d=t.operationForChild(o);d&&(s=s.concat(zC(d,a,u,c)))}),i&&(s=s.concat(hg(i,t,r,n))),s}function $C(t,e){return t.tagToQueryMap.get(e)}function WC(t){const e=t.indexOf("$");return $(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new we(t.substr(0,e))}}function HC(t,e,n){const r=t.syncPointTree_.get(e);$(r,"Missing sync point for query tag that we're tracking");const i=OC(t.pendingWriteTree_,e);return hg(r,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new fg(n)}node(){return this.node_}}class pg{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=He(this.path_,e);return new pg(this.syncTree_,n)}node(){return jC(this.syncTree_,this.path_)}}const RV=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},b0=function(t,e,n){if(!t||typeof t!="object")return t;if($(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return AV(t[".sv"],e,n);if(typeof t[".sv"]=="object")return kV(t[".sv"],e);$(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},AV=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:$(!1,"Unexpected server value: "+t)}},kV=function(t,e,n){t.hasOwnProperty("increment")||$(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&$(!1,"Unexpected increment value: "+r);const i=e.node();if($(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},PV=function(t,e,n,r){return mg(e,new pg(n,t),r)},NV=function(t,e,n){return mg(t,new fg(e),n)};function mg(t,e,n){const r=t.getPriority().val(),i=b0(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=b0(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new je(a,ft(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new je(i))),o.forEachChild(mt,(a,u)=>{const c=mg(u,e.getImmediateChild(a),n);c!==u&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function _g(t,e){let n=e instanceof we?e:new we(e),r=t,i=ie(n);for(;i!==null;){const s=Ms(r.node.children,i)||{children:{},childCount:0};r=new gg(i,r,s),n=ve(n),i=ie(n)}return r}function eo(t){return t.node.value}function qC(t,e){t.node.value=e,fp(t)}function GC(t){return t.node.childCount>0}function xV(t){return eo(t)===void 0&&!GC(t)}function uh(t,e){en(t.node.children,(n,r)=>{e(new gg(n,t,r))})}function KC(t,e,n,r){n&&!r&&e(t),uh(t,i=>{KC(i,e,!0,r)}),n&&r&&e(t)}function OV(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function sl(t){return new we(t.parent===null?t.name:sl(t.parent)+"/"+t.name)}function fp(t){t.parent!==null&&bV(t.parent,t.name,t)}function bV(t,e,n){const r=xV(n),i=ur(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,fp(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,fp(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DV=/[\[\].#$\/\u0000-\u001F\u007F]/,LV=/[\[\].#$\u0000-\u001F\u007F]/,Od=10*1024*1024,QC=function(t){return typeof t=="string"&&t.length!==0&&!DV.test(t)},MV=function(t){return typeof t=="string"&&t.length!==0&&!LV.test(t)},FV=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),MV(t)},YC=function(t,e,n){const r=n instanceof we?new gF(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ai(r));if(typeof e=="function")throw new Error(t+"contains a function "+ai(r)+" with contents = "+e.toString());if(KS(e))throw new Error(t+"contains "+e.toString()+" "+ai(r));if(typeof e=="string"&&e.length>Od/3&&qc(e)>Od)throw new Error(t+"contains a string greater than "+Od+" utf8 bytes "+ai(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(en(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!QC(o)))throw new Error(t+" contains an invalid key ("+o+") "+ai(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);_F(r,o),YC(t,a,r),yF(r)}),i&&s)throw new Error(t+' contains ".value" child '+ai(r)+" in addition to actual children.")}},VV=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!QC(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!FV(n))throw new Error(eN(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UV{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function jV(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!yC(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function qi(t,e,n){jV(t,n),BV(t,r=>hn(r,e)||hn(e,r))}function BV(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(zV(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function zV(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();ta&&dt("event: "+n.toString()),rl(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $V="repo_interrupt",WV=25;class HV{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new UV,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=wc(),this.transactionQueueTree_=new gg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function qV(t,e,n){if(t.stats_=rg(t.repoInfo_),t.forceRestClient_||B2())t.server_=new Ec(t.repoInfo_,(r,i,s,o)=>{D0(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>L0(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Xe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new er(t.repoInfo_,e,(r,i,s,o)=>{D0(t,r,i,s,o)},r=>{L0(t,r)},r=>{KV(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=q2(t.repoInfo_,()=>new HF(t.stats_,t.server_)),t.infoData_=new jF,t.infoSyncTree_=new O0({startListening:(r,i,s,o)=>{let a=[];const u=t.infoData_.getNode(r._path);return u.isEmpty()||(a=ah(t.infoSyncTree_,r._path,u),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),yg(t,"connected",!1),t.serverSyncTree_=new O0({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,u)=>{const c=o(a,u);qi(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function GV(t){const n=t.infoData_.getNode(new we(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function XC(t){return RV({timestamp:GV(t)})}function D0(t,e,n,r,i){t.dataUpdateCount++;const s=new we(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const u=Yu(n,c=>ft(c));o=CV(t.serverSyncTree_,s,u,i)}else{const u=ft(n);o=SV(t.serverSyncTree_,s,u,i)}else if(r){const u=Yu(n,c=>ft(c));o=IV(t.serverSyncTree_,s,u)}else{const u=ft(n);o=ah(t.serverSyncTree_,s,u)}let a=s;o.length>0&&(a=Eg(t,s)),qi(t.eventQueue_,a,o)}function L0(t,e){yg(t,"connected",e),e===!1&&YV(t)}function KV(t,e){en(e,(n,r)=>{yg(t,n,r)})}function yg(t,e,n){const r=new we("/.info/"+e),i=ft(n);t.infoData_.updateSnapshot(r,i);const s=ah(t.infoSyncTree_,r,i);qi(t.eventQueue_,r,s)}function QV(t){return t.nextWriteId_++}function YV(t){JC(t,"onDisconnectEvents");const e=XC(t),n=wc();op(t.onDisconnect_,he(),(i,s)=>{const o=PV(i,s,t.serverSyncTree_,e);CC(n,i,o)});let r=[];op(n,he(),(i,s)=>{r=r.concat(ah(t.serverSyncTree_,i,s));const o=eU(t,i);Eg(t,o)}),t.onDisconnect_=wc(),qi(t.eventQueue_,he(),r)}function XV(t){t.persistentConnection_&&t.persistentConnection_.interrupt($V)}function JC(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),dt(n,...e)}function ZC(t,e,n){return jC(t.serverSyncTree_,e,n)||le.EMPTY_NODE}function vg(t,e=t.transactionQueueTree_){if(e||ch(t,e),eo(e)){const n=tR(t,e);$(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&JV(t,sl(e),n)}else GC(e)&&uh(e,n=>{vg(t,n)})}function JV(t,e,n){const r=n.map(c=>c.currentWriteId),i=ZC(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const d=n[c];$(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const f=Qt(e,d.path);s=s.updateChild(f,d.currentOutputSnapshotRaw)}const a=s.val(!0),u=e;t.server_.put(u.toString(),a,c=>{JC(t,"transaction put response",{path:u.toString(),status:c});let d=[];if(c==="ok"){const f=[];for(let m=0;m<n.length;m++)n[m].status=2,d=d.concat(gs(t.serverSyncTree_,n[m].currentWriteId)),n[m].onComplete&&f.push(()=>n[m].onComplete(null,!0,n[m].currentOutputSnapshotResolved)),n[m].unwatcher();ch(t,_g(t.transactionQueueTree_,e)),vg(t,t.transactionQueueTree_),qi(t.eventQueue_,e,d);for(let m=0;m<f.length;m++)rl(f[m])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{jt("transaction at "+u.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}Eg(t,e)}},o)}function Eg(t,e){const n=eR(t,e),r=sl(n),i=tR(t,n);return ZV(t,i,r),r}function ZV(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const u=e[a],c=Qt(n,u.path);let d=!1,f;if($(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)d=!0,f=u.abortReason,i=i.concat(gs(t.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=WV)d=!0,f="maxretry",i=i.concat(gs(t.serverSyncTree_,u.currentWriteId,!0));else{const m=ZC(t,u.path,o);u.currentInputSnapshot=m;const C=e[a].update(m.val());if(C!==void 0){YC("transaction failed: Data returned ",C,u.path);let v=ft(C);typeof C=="object"&&C!=null&&ur(C,".priority")||(v=v.updatePriority(m.getPriority()));const P=u.currentWriteId,w=XC(t),y=NV(v,m,w);u.currentOutputSnapshotRaw=v,u.currentOutputSnapshotResolved=y,u.currentWriteId=QV(t),o.splice(o.indexOf(P),1),i=i.concat(TV(t.serverSyncTree_,u.path,y,u.currentWriteId,u.applyLocally)),i=i.concat(gs(t.serverSyncTree_,P,!0))}else d=!0,f="nodata",i=i.concat(gs(t.serverSyncTree_,u.currentWriteId,!0))}qi(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,function(m){setTimeout(m,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}ch(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)rl(r[a]);vg(t,t.transactionQueueTree_)}function eR(t,e){let n,r=t.transactionQueueTree_;for(n=ie(e);n!==null&&eo(r)===void 0;)r=_g(r,n),e=ve(e),n=ie(e);return r}function tR(t,e){const n=[];return nR(t,e,n),n.sort((r,i)=>r.order-i.order),n}function nR(t,e,n){const r=eo(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);uh(e,i=>{nR(t,i,n)})}function ch(t,e){const n=eo(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,qC(e,n.length>0?n:void 0)}uh(e,r=>{ch(t,r)})}function eU(t,e){const n=sl(eR(t,e)),r=_g(t.transactionQueueTree_,e);return OV(r,i=>{bd(t,i)}),bd(t,r),KC(r,i=>{bd(t,i)}),n}function bd(t,e){const n=eo(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?($(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):($(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(gs(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?qC(e,void 0):n.length=s+1,qi(t.eventQueue_,sl(e),i);for(let o=0;o<r.length;o++)rl(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tU(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function nU(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):jt(`Invalid query segment '${n}' in query '${t}'`)}return e}const M0=function(t,e){const n=rU(t),r=n.namespace;n.domain==="firebase.com"&&ar(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&ar("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||b2();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new oC(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new we(n.pathString)}},rU=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",u=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(d,f)),d<f&&(i=tU(t.substring(d,f)));const m=nU(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",u=parseInt(e.substring(c+1),10)):c=e.length;const C=e.slice(0,c);if(C.toLowerCase()==="localhost")n="localhost";else if(C.split(".").length<=2)n=C;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in m&&(s=m.ns)}return{host:e,port:u,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return ne(this._path)?null:mC(this._path)}get ref(){return new to(this._repo,this._path)}get _queryIdentifier(){const e=w0(this._queryParams),n=tg(e);return n==="{}"?"default":n}get _queryObject(){return w0(this._queryParams)}isEqual(e){if(e=nt(e),!(e instanceof wg))return!1;const n=this._repo===e._repo,r=yC(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+mF(this._path)}}class to extends wg{constructor(e,n){super(e,n,new ag,!1)}get parent(){const e=_C(this._path);return e===null?null:new to(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}EV(to);wV(to);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iU="FIREBASE_DATABASE_EMULATOR_HOST",pp={};let sU=!1;function oU(t,e,n,r){t.repoInfo_=new oC(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function aU(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||ar("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),dt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=M0(s,i),a=o.repoInfo,u;typeof process<"u"&&n0&&(u=n0[iU]),u?(s=`http://${u}?ns=${a.namespace}`,o=M0(s,i),a=o.repoInfo):o.repoInfo.secure;const c=new $2(t.name,t.options,e);VV("Invalid Firebase Database URL",o),ne(o.path)||ar("Database URL must point to the root of a Firebase Database (not including a child path).");const d=uU(a,t,c,new z2(t.name,n));return new cU(d,t)}function lU(t,e){const n=pp[e];(!n||n[t.key]!==t)&&ar(`Database ${e}(${t.repoInfo_}) has already been deleted.`),XV(t),delete n[t.key]}function uU(t,e,n,r){let i=pp[e.name];i||(i={},pp[e.name]=i);let s=i[t.toURLString()];return s&&ar("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new HV(t,sU,n,r),i[t.toURLString()]=s,s}class cU{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(qV(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new to(this._repo,he())),this._rootInternal}_delete(){return this._rootInternal!==null&&(lU(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ar("Cannot call "+e+" on a deleted database.")}}function hU(t=Gc(),e){const n=Qr(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=AT("database");r&&dU(n,...r)}return n}function dU(t,e,n,r={}){t=nt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&ar("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&ar('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new yu(yu.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:NT(r.mockUserToken,t.app.options.projectId);s=new yu(o)}oU(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fU(t){A2(Bi),gn(new Zt("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return aU(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),xt(r0,i0,t),xt(r0,i0,"esm2017")}er.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};er.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};fU();const pU={apiKey:"AIzaSyCQoOXNU1ilHdM_lfQauMDRHdMcbrILzBc",authDomain:"pet-world-a1532.firebaseapp.com",projectId:"pet-world-a1532",storageBucket:"pet-world-a1532.appspot.com",messagingSenderId:"1013109850379",appId:"1:1013109850379:web:9107d38d1ab1d7bd32220e",measurementId:"G-B6SXNS7BSQ"},hh=jT(pU),Fa=WD(hh);PO(hh);const mU=d2(hh);hU(hh);function rR(t,e){return function(){return t.apply(e,arguments)}}const{toString:gU}=Object.prototype,{getPrototypeOf:Tg}=Object,dh=(t=>e=>{const n=gU.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),En=t=>(t=t.toLowerCase(),e=>dh(e)===t),fh=t=>e=>typeof e===t,{isArray:no}=Array,Va=fh("undefined");function _U(t){return t!==null&&!Va(t)&&t.constructor!==null&&!Va(t.constructor)&&Bt(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const iR=En("ArrayBuffer");function yU(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&iR(t.buffer),e}const vU=fh("string"),Bt=fh("function"),sR=fh("number"),ph=t=>t!==null&&typeof t=="object",EU=t=>t===!0||t===!1,vu=t=>{if(dh(t)!=="object")return!1;const e=Tg(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},wU=En("Date"),TU=En("File"),IU=En("Blob"),SU=En("FileList"),CU=t=>ph(t)&&Bt(t.pipe),RU=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||Bt(t.append)&&((e=dh(t))==="formdata"||e==="object"&&Bt(t.toString)&&t.toString()==="[object FormData]"))},AU=En("URLSearchParams"),[kU,PU,NU,xU]=["ReadableStream","Request","Response","Headers"].map(En),OU=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ol(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,i;if(typeof t!="object"&&(t=[t]),no(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(r=0;r<o;r++)a=s[r],e.call(null,t[a],a,t)}}function oR(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,i;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const pi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,aR=t=>!Va(t)&&t!==pi;function mp(){const{caseless:t}=aR(this)&&this||{},e={},n=(r,i)=>{const s=t&&oR(e,i)||i;vu(e[s])&&vu(r)?e[s]=mp(e[s],r):vu(r)?e[s]=mp({},r):no(r)?e[s]=r.slice():e[s]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&ol(arguments[r],n);return e}const bU=(t,e,n,{allOwnKeys:r}={})=>(ol(e,(i,s)=>{n&&Bt(i)?t[s]=rR(i,n):t[s]=i},{allOwnKeys:r}),t),DU=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),LU=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},MU=(t,e,n,r)=>{let i,s,o;const a={};if(e=e||{},t==null)return e;do{for(i=Object.getOwnPropertyNames(t),s=i.length;s-- >0;)o=i[s],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Tg(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},FU=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},VU=t=>{if(!t)return null;if(no(t))return t;let e=t.length;if(!sR(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},UU=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Tg(Uint8Array)),jU=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=r.next())&&!i.done;){const s=i.value;e.call(t,s[0],s[1])}},BU=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},zU=En("HTMLFormElement"),$U=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),F0=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),WU=En("RegExp"),lR=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};ol(n,(i,s)=>{let o;(o=e(i,s,t))!==!1&&(r[s]=o||i)}),Object.defineProperties(t,r)},HU=t=>{lR(t,(e,n)=>{if(Bt(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(Bt(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},qU=(t,e)=>{const n={},r=i=>{i.forEach(s=>{n[s]=!0})};return no(t)?r(t):r(String(t).split(e)),n},GU=()=>{},KU=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e,Dd="abcdefghijklmnopqrstuvwxyz",V0="0123456789",uR={DIGIT:V0,ALPHA:Dd,ALPHA_DIGIT:Dd+Dd.toUpperCase()+V0},QU=(t=16,e=uR.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function YU(t){return!!(t&&Bt(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const XU=t=>{const e=new Array(10),n=(r,i)=>{if(ph(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[i]=r;const s=no(r)?[]:{};return ol(r,(o,a)=>{const u=n(o,i+1);!Va(u)&&(s[a]=u)}),e[i]=void 0,s}}return r};return n(t,0)},JU=En("AsyncFunction"),ZU=t=>t&&(ph(t)||Bt(t))&&Bt(t.then)&&Bt(t.catch),cR=((t,e)=>t?setImmediate:e?((n,r)=>(pi.addEventListener("message",({source:i,data:s})=>{i===pi&&s===n&&r.length&&r.shift()()},!1),i=>{r.push(i),pi.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Bt(pi.postMessage)),e4=typeof queueMicrotask<"u"?queueMicrotask.bind(pi):typeof process<"u"&&process.nextTick||cR,L={isArray:no,isArrayBuffer:iR,isBuffer:_U,isFormData:RU,isArrayBufferView:yU,isString:vU,isNumber:sR,isBoolean:EU,isObject:ph,isPlainObject:vu,isReadableStream:kU,isRequest:PU,isResponse:NU,isHeaders:xU,isUndefined:Va,isDate:wU,isFile:TU,isBlob:IU,isRegExp:WU,isFunction:Bt,isStream:CU,isURLSearchParams:AU,isTypedArray:UU,isFileList:SU,forEach:ol,merge:mp,extend:bU,trim:OU,stripBOM:DU,inherits:LU,toFlatObject:MU,kindOf:dh,kindOfTest:En,endsWith:FU,toArray:VU,forEachEntry:jU,matchAll:BU,isHTMLForm:zU,hasOwnProperty:F0,hasOwnProp:F0,reduceDescriptors:lR,freezeMethods:HU,toObjectSet:qU,toCamelCase:$U,noop:GU,toFiniteNumber:KU,findKey:oR,global:pi,isContextDefined:aR,ALPHABET:uR,generateString:QU,isSpecCompliantForm:YU,toJSONObject:XU,isAsyncFn:JU,isThenable:ZU,setImmediate:cR,asap:e4};function Y(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status?i.status:null)}L.inherits(Y,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:L.toJSONObject(this.config),code:this.code,status:this.status}}});const hR=Y.prototype,dR={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{dR[t]={value:t}});Object.defineProperties(Y,dR);Object.defineProperty(hR,"isAxiosError",{value:!0});Y.from=(t,e,n,r,i,s)=>{const o=Object.create(hR);return L.toFlatObject(t,o,function(u){return u!==Error.prototype},a=>a!=="isAxiosError"),Y.call(o,t.message,e,n,r,i),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};const t4=null;function gp(t){return L.isPlainObject(t)||L.isArray(t)}function fR(t){return L.endsWith(t,"[]")?t.slice(0,-2):t}function U0(t,e,n){return t?t.concat(e).map(function(i,s){return i=fR(i),!n&&s?"["+i+"]":i}).join(n?".":""):e}function n4(t){return L.isArray(t)&&!t.some(gp)}const r4=L.toFlatObject(L,{},null,function(e){return/^is[A-Z]/.test(e)});function mh(t,e,n){if(!L.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=L.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(k,P){return!L.isUndefined(P[k])});const r=n.metaTokens,i=n.visitor||d,s=n.dots,o=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&L.isSpecCompliantForm(e);if(!L.isFunction(i))throw new TypeError("visitor must be a function");function c(v){if(v===null)return"";if(L.isDate(v))return v.toISOString();if(!u&&L.isBlob(v))throw new Y("Blob is not supported. Use a Buffer instead.");return L.isArrayBuffer(v)||L.isTypedArray(v)?u&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function d(v,k,P){let w=v;if(v&&!P&&typeof v=="object"){if(L.endsWith(k,"{}"))k=r?k:k.slice(0,-2),v=JSON.stringify(v);else if(L.isArray(v)&&n4(v)||(L.isFileList(v)||L.endsWith(k,"[]"))&&(w=L.toArray(v)))return k=fR(k),w.forEach(function(S,b){!(L.isUndefined(S)||S===null)&&e.append(o===!0?U0([k],b,s):o===null?k:k+"[]",c(S))}),!1}return gp(v)?!0:(e.append(U0(P,k,s),c(v)),!1)}const f=[],m=Object.assign(r4,{defaultVisitor:d,convertValue:c,isVisitable:gp});function C(v,k){if(!L.isUndefined(v)){if(f.indexOf(v)!==-1)throw Error("Circular reference detected in "+k.join("."));f.push(v),L.forEach(v,function(w,y){(!(L.isUndefined(w)||w===null)&&i.call(e,w,L.isString(y)?y.trim():y,k,m))===!0&&C(w,k?k.concat(y):[y])}),f.pop()}}if(!L.isObject(t))throw new TypeError("data must be an object");return C(t),e}function j0(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Ig(t,e){this._pairs=[],t&&mh(t,this,e)}const pR=Ig.prototype;pR.append=function(e,n){this._pairs.push([e,n])};pR.toString=function(e){const n=e?function(r){return e.call(this,r,j0)}:j0;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function i4(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function mR(t,e,n){if(!e)return t;const r=n&&n.encode||i4;L.isFunction(n)&&(n={serialize:n});const i=n&&n.serialize;let s;if(i?s=i(e,n):s=L.isURLSearchParams(e)?e.toString():new Ig(e,n).toString(r),s){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class B0{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){L.forEach(this.handlers,function(r){r!==null&&e(r)})}}const gR={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},s4=typeof URLSearchParams<"u"?URLSearchParams:Ig,o4=typeof FormData<"u"?FormData:null,a4=typeof Blob<"u"?Blob:null,l4={isBrowser:!0,classes:{URLSearchParams:s4,FormData:o4,Blob:a4},protocols:["http","https","file","blob","url","data"]},Sg=typeof window<"u"&&typeof document<"u",_p=typeof navigator=="object"&&navigator||void 0,u4=Sg&&(!_p||["ReactNative","NativeScript","NS"].indexOf(_p.product)<0),c4=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",h4=Sg&&window.location.href||"http://localhost",d4=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Sg,hasStandardBrowserEnv:u4,hasStandardBrowserWebWorkerEnv:c4,navigator:_p,origin:h4},Symbol.toStringTag,{value:"Module"})),pt={...d4,...l4};function f4(t,e){return mh(t,new pt.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,s){return pt.isNode&&L.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function p4(t){return L.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function m4(t){const e={},n=Object.keys(t);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],e[s]=t[s];return e}function _R(t){function e(n,r,i,s){let o=n[s++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),u=s>=n.length;return o=!o&&L.isArray(i)?i.length:o,u?(L.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!a):((!i[o]||!L.isObject(i[o]))&&(i[o]=[]),e(n,r,i[o],s)&&L.isArray(i[o])&&(i[o]=m4(i[o])),!a)}if(L.isFormData(t)&&L.isFunction(t.entries)){const n={};return L.forEachEntry(t,(r,i)=>{e(p4(r),i,n,0)}),n}return null}function g4(t,e,n){if(L.isString(t))try{return(e||JSON.parse)(t),L.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(0,JSON.stringify)(t)}const al={transitional:gR,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,s=L.isObject(e);if(s&&L.isHTMLForm(e)&&(e=new FormData(e)),L.isFormData(e))return i?JSON.stringify(_R(e)):e;if(L.isArrayBuffer(e)||L.isBuffer(e)||L.isStream(e)||L.isFile(e)||L.isBlob(e)||L.isReadableStream(e))return e;if(L.isArrayBufferView(e))return e.buffer;if(L.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return f4(e,this.formSerializer).toString();if((a=L.isFileList(e))||r.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return mh(a?{"files[]":e}:e,u&&new u,this.formSerializer)}}return s||i?(n.setContentType("application/json",!1),g4(e)):e}],transformResponse:[function(e){const n=this.transitional||al.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(L.isResponse(e)||L.isReadableStream(e))return e;if(e&&L.isString(e)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?Y.from(a,Y.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:pt.classes.FormData,Blob:pt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};L.forEach(["delete","get","head","post","put","patch"],t=>{al.headers[t]={}});const _4=L.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),y4=t=>{const e={};let n,r,i;return t&&t.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||e[n]&&_4[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},z0=Symbol("internals");function Oo(t){return t&&String(t).trim().toLowerCase()}function Eu(t){return t===!1||t==null?t:L.isArray(t)?t.map(Eu):String(t)}function v4(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const E4=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Ld(t,e,n,r,i){if(L.isFunction(r))return r.call(this,e,n);if(i&&(e=n),!!L.isString(e)){if(L.isString(r))return e.indexOf(r)!==-1;if(L.isRegExp(r))return r.test(e)}}function w4(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function T4(t,e){const n=L.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(i,s,o){return this[r].call(this,e,i,s,o)},configurable:!0})})}class bt{constructor(e){e&&this.set(e)}set(e,n,r){const i=this;function s(a,u,c){const d=Oo(u);if(!d)throw new Error("header name must be a non-empty string");const f=L.findKey(i,d);(!f||i[f]===void 0||c===!0||c===void 0&&i[f]!==!1)&&(i[f||u]=Eu(a))}const o=(a,u)=>L.forEach(a,(c,d)=>s(c,d,u));if(L.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(L.isString(e)&&(e=e.trim())&&!E4(e))o(y4(e),n);else if(L.isHeaders(e))for(const[a,u]of e.entries())s(u,a,r);else e!=null&&s(n,e,r);return this}get(e,n){if(e=Oo(e),e){const r=L.findKey(this,e);if(r){const i=this[r];if(!n)return i;if(n===!0)return v4(i);if(L.isFunction(n))return n.call(this,i,r);if(L.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Oo(e),e){const r=L.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||Ld(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let i=!1;function s(o){if(o=Oo(o),o){const a=L.findKey(r,o);a&&(!n||Ld(r,r[a],a,n))&&(delete r[a],i=!0)}}return L.isArray(e)?e.forEach(s):s(e),i}clear(e){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const s=n[r];(!e||Ld(this,this[s],s,e,!0))&&(delete this[s],i=!0)}return i}normalize(e){const n=this,r={};return L.forEach(this,(i,s)=>{const o=L.findKey(r,s);if(o){n[o]=Eu(i),delete n[s];return}const a=e?w4(s):String(s).trim();a!==s&&delete n[s],n[a]=Eu(i),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return L.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=e&&L.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(i=>r.set(i)),r}static accessor(e){const r=(this[z0]=this[z0]={accessors:{}}).accessors,i=this.prototype;function s(o){const a=Oo(o);r[a]||(T4(i,o),r[a]=!0)}return L.isArray(e)?e.forEach(s):s(e),this}}bt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);L.reduceDescriptors(bt.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});L.freezeMethods(bt);function Md(t,e){const n=this||al,r=e||n,i=bt.from(r.headers);let s=r.data;return L.forEach(t,function(a){s=a.call(n,s,i.normalize(),e?e.status:void 0)}),i.normalize(),s}function yR(t){return!!(t&&t.__CANCEL__)}function ro(t,e,n){Y.call(this,t??"canceled",Y.ERR_CANCELED,e,n),this.name="CanceledError"}L.inherits(ro,Y,{__CANCEL__:!0});function vR(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new Y("Request failed with status code "+n.status,[Y.ERR_BAD_REQUEST,Y.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function I4(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function S4(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i=0,s=0,o;return e=e!==void 0?e:1e3,function(u){const c=Date.now(),d=r[s];o||(o=c),n[i]=u,r[i]=c;let f=s,m=0;for(;f!==i;)m+=n[f++],f=f%t;if(i=(i+1)%t,i===s&&(s=(s+1)%t),c-o<e)return;const C=d&&c-d;return C?Math.round(m*1e3/C):void 0}}function C4(t,e){let n=0,r=1e3/e,i,s;const o=(c,d=Date.now())=>{n=d,i=null,s&&(clearTimeout(s),s=null),t.apply(null,c)};return[(...c)=>{const d=Date.now(),f=d-n;f>=r?o(c,d):(i=c,s||(s=setTimeout(()=>{s=null,o(i)},r-f)))},()=>i&&o(i)]}const Cc=(t,e,n=3)=>{let r=0;const i=S4(50,250);return C4(s=>{const o=s.loaded,a=s.lengthComputable?s.total:void 0,u=o-r,c=i(u),d=o<=a;r=o;const f={loaded:o,total:a,progress:a?o/a:void 0,bytes:u,rate:c||void 0,estimated:c&&a&&d?(a-o)/c:void 0,event:s,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(f)},n)},$0=(t,e)=>{const n=t!=null;return[r=>e[0]({lengthComputable:n,total:t,loaded:r}),e[1]]},W0=t=>(...e)=>L.asap(()=>t(...e)),R4=pt.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,pt.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(pt.origin),pt.navigator&&/(msie|trident)/i.test(pt.navigator.userAgent)):()=>!0,A4=pt.hasStandardBrowserEnv?{write(t,e,n,r,i,s){const o=[t+"="+encodeURIComponent(e)];L.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),L.isString(r)&&o.push("path="+r),L.isString(i)&&o.push("domain="+i),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function k4(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function P4(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function ER(t,e){return t&&!k4(e)?P4(t,e):e}const H0=t=>t instanceof bt?{...t}:t;function Mi(t,e){e=e||{};const n={};function r(c,d,f,m){return L.isPlainObject(c)&&L.isPlainObject(d)?L.merge.call({caseless:m},c,d):L.isPlainObject(d)?L.merge({},d):L.isArray(d)?d.slice():d}function i(c,d,f,m){if(L.isUndefined(d)){if(!L.isUndefined(c))return r(void 0,c,f,m)}else return r(c,d,f,m)}function s(c,d){if(!L.isUndefined(d))return r(void 0,d)}function o(c,d){if(L.isUndefined(d)){if(!L.isUndefined(c))return r(void 0,c)}else return r(void 0,d)}function a(c,d,f){if(f in e)return r(c,d);if(f in t)return r(void 0,c)}const u={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,d,f)=>i(H0(c),H0(d),f,!0)};return L.forEach(Object.keys(Object.assign({},t,e)),function(d){const f=u[d]||i,m=f(t[d],e[d],d);L.isUndefined(m)&&f!==a||(n[d]=m)}),n}const wR=t=>{const e=Mi({},t);let{data:n,withXSRFToken:r,xsrfHeaderName:i,xsrfCookieName:s,headers:o,auth:a}=e;e.headers=o=bt.from(o),e.url=mR(ER(e.baseURL,e.url),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let u;if(L.isFormData(n)){if(pt.hasStandardBrowserEnv||pt.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((u=o.getContentType())!==!1){const[c,...d]=u?u.split(";").map(f=>f.trim()).filter(Boolean):[];o.setContentType([c||"multipart/form-data",...d].join("; "))}}if(pt.hasStandardBrowserEnv&&(r&&L.isFunction(r)&&(r=r(e)),r||r!==!1&&R4(e.url))){const c=i&&s&&A4.read(s);c&&o.set(i,c)}return e},N4=typeof XMLHttpRequest<"u",x4=N4&&function(t){return new Promise(function(n,r){const i=wR(t);let s=i.data;const o=bt.from(i.headers).normalize();let{responseType:a,onUploadProgress:u,onDownloadProgress:c}=i,d,f,m,C,v;function k(){C&&C(),v&&v(),i.cancelToken&&i.cancelToken.unsubscribe(d),i.signal&&i.signal.removeEventListener("abort",d)}let P=new XMLHttpRequest;P.open(i.method.toUpperCase(),i.url,!0),P.timeout=i.timeout;function w(){if(!P)return;const S=bt.from("getAllResponseHeaders"in P&&P.getAllResponseHeaders()),F={data:!a||a==="text"||a==="json"?P.responseText:P.response,status:P.status,statusText:P.statusText,headers:S,config:t,request:P};vR(function(I){n(I),k()},function(I){r(I),k()},F),P=null}"onloadend"in P?P.onloadend=w:P.onreadystatechange=function(){!P||P.readyState!==4||P.status===0&&!(P.responseURL&&P.responseURL.indexOf("file:")===0)||setTimeout(w)},P.onabort=function(){P&&(r(new Y("Request aborted",Y.ECONNABORTED,t,P)),P=null)},P.onerror=function(){r(new Y("Network Error",Y.ERR_NETWORK,t,P)),P=null},P.ontimeout=function(){let b=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const F=i.transitional||gR;i.timeoutErrorMessage&&(b=i.timeoutErrorMessage),r(new Y(b,F.clarifyTimeoutError?Y.ETIMEDOUT:Y.ECONNABORTED,t,P)),P=null},s===void 0&&o.setContentType(null),"setRequestHeader"in P&&L.forEach(o.toJSON(),function(b,F){P.setRequestHeader(F,b)}),L.isUndefined(i.withCredentials)||(P.withCredentials=!!i.withCredentials),a&&a!=="json"&&(P.responseType=i.responseType),c&&([m,v]=Cc(c,!0),P.addEventListener("progress",m)),u&&P.upload&&([f,C]=Cc(u),P.upload.addEventListener("progress",f),P.upload.addEventListener("loadend",C)),(i.cancelToken||i.signal)&&(d=S=>{P&&(r(!S||S.type?new ro(null,t,P):S),P.abort(),P=null)},i.cancelToken&&i.cancelToken.subscribe(d),i.signal&&(i.signal.aborted?d():i.signal.addEventListener("abort",d)));const y=I4(i.url);if(y&&pt.protocols.indexOf(y)===-1){r(new Y("Unsupported protocol "+y+":",Y.ERR_BAD_REQUEST,t));return}P.send(s||null)})},O4=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let r=new AbortController,i;const s=function(c){if(!i){i=!0,a();const d=c instanceof Error?c:this.reason;r.abort(d instanceof Y?d:new ro(d instanceof Error?d.message:d))}};let o=e&&setTimeout(()=>{o=null,s(new Y(`timeout ${e} of ms exceeded`,Y.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(c=>{c.unsubscribe?c.unsubscribe(s):c.removeEventListener("abort",s)}),t=null)};t.forEach(c=>c.addEventListener("abort",s));const{signal:u}=r;return u.unsubscribe=()=>L.asap(a),u}},b4=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let r=0,i;for(;r<n;)i=r+e,yield t.slice(r,i),r=i},D4=async function*(t,e){for await(const n of L4(t))yield*b4(n,e)},L4=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:r}=await e.read();if(n)break;yield r}}finally{await e.cancel()}},q0=(t,e,n,r)=>{const i=D4(t,e);let s=0,o,a=u=>{o||(o=!0,r&&r(u))};return new ReadableStream({async pull(u){try{const{done:c,value:d}=await i.next();if(c){a(),u.close();return}let f=d.byteLength;if(n){let m=s+=f;n(m)}u.enqueue(new Uint8Array(d))}catch(c){throw a(c),c}},cancel(u){return a(u),i.return()}},{highWaterMark:2})},gh=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",TR=gh&&typeof ReadableStream=="function",M4=gh&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),IR=(t,...e)=>{try{return!!t(...e)}catch{return!1}},F4=TR&&IR(()=>{let t=!1;const e=new Request(pt.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e}),G0=64*1024,yp=TR&&IR(()=>L.isReadableStream(new Response("").body)),Rc={stream:yp&&(t=>t.body)};gh&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!Rc[e]&&(Rc[e]=L.isFunction(t[e])?n=>n[e]():(n,r)=>{throw new Y(`Response type '${e}' is not supported`,Y.ERR_NOT_SUPPORT,r)})})})(new Response);const V4=async t=>{if(t==null)return 0;if(L.isBlob(t))return t.size;if(L.isSpecCompliantForm(t))return(await new Request(pt.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(L.isArrayBufferView(t)||L.isArrayBuffer(t))return t.byteLength;if(L.isURLSearchParams(t)&&(t=t+""),L.isString(t))return(await M4(t)).byteLength},U4=async(t,e)=>{const n=L.toFiniteNumber(t.getContentLength());return n??V4(e)},j4=gh&&(async t=>{let{url:e,method:n,data:r,signal:i,cancelToken:s,timeout:o,onDownloadProgress:a,onUploadProgress:u,responseType:c,headers:d,withCredentials:f="same-origin",fetchOptions:m}=wR(t);c=c?(c+"").toLowerCase():"text";let C=O4([i,s&&s.toAbortSignal()],o),v;const k=C&&C.unsubscribe&&(()=>{C.unsubscribe()});let P;try{if(u&&F4&&n!=="get"&&n!=="head"&&(P=await U4(d,r))!==0){let F=new Request(e,{method:"POST",body:r,duplex:"half"}),B;if(L.isFormData(r)&&(B=F.headers.get("content-type"))&&d.setContentType(B),F.body){const[I,_]=$0(P,Cc(W0(u)));r=q0(F.body,G0,I,_)}}L.isString(f)||(f=f?"include":"omit");const w="credentials"in Request.prototype;v=new Request(e,{...m,signal:C,method:n.toUpperCase(),headers:d.normalize().toJSON(),body:r,duplex:"half",credentials:w?f:void 0});let y=await fetch(v);const S=yp&&(c==="stream"||c==="response");if(yp&&(a||S&&k)){const F={};["status","statusText","headers"].forEach(T=>{F[T]=y[T]});const B=L.toFiniteNumber(y.headers.get("content-length")),[I,_]=a&&$0(B,Cc(W0(a),!0))||[];y=new Response(q0(y.body,G0,I,()=>{_&&_(),k&&k()}),F)}c=c||"text";let b=await Rc[L.findKey(Rc,c)||"text"](y,t);return!S&&k&&k(),await new Promise((F,B)=>{vR(F,B,{data:b,headers:bt.from(y.headers),status:y.status,statusText:y.statusText,config:t,request:v})})}catch(w){throw k&&k(),w&&w.name==="TypeError"&&/fetch/i.test(w.message)?Object.assign(new Y("Network Error",Y.ERR_NETWORK,t,v),{cause:w.cause||w}):Y.from(w,w&&w.code,t,v)}}),vp={http:t4,xhr:x4,fetch:j4};L.forEach(vp,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const K0=t=>`- ${t}`,B4=t=>L.isFunction(t)||t===null||t===!1,SR={getAdapter:t=>{t=L.isArray(t)?t:[t];const{length:e}=t;let n,r;const i={};for(let s=0;s<e;s++){n=t[s];let o;if(r=n,!B4(n)&&(r=vp[(o=String(n)).toLowerCase()],r===void 0))throw new Y(`Unknown adapter '${o}'`);if(r)break;i[o||"#"+s]=r}if(!r){const s=Object.entries(i).map(([a,u])=>`adapter ${a} `+(u===!1?"is not supported by the environment":"is not available in the build"));let o=e?s.length>1?`since :
`+s.map(K0).join(`
`):" "+K0(s[0]):"as no adapter specified";throw new Y("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:vp};function Fd(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new ro(null,t)}function Q0(t){return Fd(t),t.headers=bt.from(t.headers),t.data=Md.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),SR.getAdapter(t.adapter||al.adapter)(t).then(function(r){return Fd(t),r.data=Md.call(t,t.transformResponse,r),r.headers=bt.from(r.headers),r},function(r){return yR(r)||(Fd(t),r&&r.response&&(r.response.data=Md.call(t,t.transformResponse,r.response),r.response.headers=bt.from(r.response.headers))),Promise.reject(r)})}const CR="1.7.9",_h={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{_h[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const Y0={};_h.transitional=function(e,n,r){function i(s,o){return"[Axios v"+CR+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,a)=>{if(e===!1)throw new Y(i(o," has been removed"+(n?" in "+n:"")),Y.ERR_DEPRECATED);return n&&!Y0[o]&&(Y0[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};_h.spelling=function(e){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};function z4(t,e,n){if(typeof t!="object")throw new Y("options must be an object",Y.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;for(;i-- >0;){const s=r[i],o=e[s];if(o){const a=t[s],u=a===void 0||o(a,s,t);if(u!==!0)throw new Y("option "+s+" must be "+u,Y.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Y("Unknown option "+s,Y.ERR_BAD_OPTION)}}const wu={assertOptions:z4,validators:_h},Tn=wu.validators;class vi{constructor(e){this.defaults=e,this.interceptors={request:new B0,response:new B0}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let i={};Error.captureStackTrace?Error.captureStackTrace(i):i=new Error;const s=i.stack?i.stack.replace(/^.+\n/,""):"";try{r.stack?s&&!String(r.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+s):r.stack=s}catch{}}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Mi(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:s}=n;r!==void 0&&wu.assertOptions(r,{silentJSONParsing:Tn.transitional(Tn.boolean),forcedJSONParsing:Tn.transitional(Tn.boolean),clarifyTimeoutError:Tn.transitional(Tn.boolean)},!1),i!=null&&(L.isFunction(i)?n.paramsSerializer={serialize:i}:wu.assertOptions(i,{encode:Tn.function,serialize:Tn.function},!0)),wu.assertOptions(n,{baseUrl:Tn.spelling("baseURL"),withXsrfToken:Tn.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&L.merge(s.common,s[n.method]);s&&L.forEach(["delete","get","head","post","put","patch","common"],v=>{delete s[v]}),n.headers=bt.concat(o,s);const a=[];let u=!0;this.interceptors.request.forEach(function(k){typeof k.runWhen=="function"&&k.runWhen(n)===!1||(u=u&&k.synchronous,a.unshift(k.fulfilled,k.rejected))});const c=[];this.interceptors.response.forEach(function(k){c.push(k.fulfilled,k.rejected)});let d,f=0,m;if(!u){const v=[Q0.bind(this),void 0];for(v.unshift.apply(v,a),v.push.apply(v,c),m=v.length,d=Promise.resolve(n);f<m;)d=d.then(v[f++],v[f++]);return d}m=a.length;let C=n;for(f=0;f<m;){const v=a[f++],k=a[f++];try{C=v(C)}catch(P){k.call(this,P);break}}try{d=Q0.call(this,C)}catch(v){return Promise.reject(v)}for(f=0,m=c.length;f<m;)d=d.then(c[f++],c[f++]);return d}getUri(e){e=Mi(this.defaults,e);const n=ER(e.baseURL,e.url);return mR(n,e.params,e.paramsSerializer)}}L.forEach(["delete","get","head","options"],function(e){vi.prototype[e]=function(n,r){return this.request(Mi(r||{},{method:e,url:n,data:(r||{}).data}))}});L.forEach(["post","put","patch"],function(e){function n(r){return function(s,o,a){return this.request(Mi(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}vi.prototype[e]=n(),vi.prototype[e+"Form"]=n(!0)});class Cg{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(a=>{r.subscribe(a),s=a}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},e(function(s,o,a){r.reason||(r.reason=new ro(s,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=r=>{e.abort(r)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new Cg(function(i){e=i}),cancel:e}}}function $4(t){return function(n){return t.apply(null,n)}}function W4(t){return L.isObject(t)&&t.isAxiosError===!0}const Ep={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ep).forEach(([t,e])=>{Ep[e]=t});function RR(t){const e=new vi(t),n=rR(vi.prototype.request,e);return L.extend(n,vi.prototype,e,{allOwnKeys:!0}),L.extend(n,e,null,{allOwnKeys:!0}),n.create=function(i){return RR(Mi(t,i))},n}const Ae=RR(al);Ae.Axios=vi;Ae.CanceledError=ro;Ae.CancelToken=Cg;Ae.isCancel=yR;Ae.VERSION=CR;Ae.toFormData=mh;Ae.AxiosError=Y;Ae.Cancel=Ae.CanceledError;Ae.all=function(e){return Promise.all(e)};Ae.spread=$4;Ae.isAxiosError=W4;Ae.mergeConfig=Mi;Ae.AxiosHeaders=bt;Ae.formToJSON=t=>_R(L.isHTMLForm(t)?new FormData(t):t);Ae.getAdapter=SR.getAdapter;Ae.HttpStatusCode=Ep;Ae.default=Ae;const H4=()=>{const[t,e]=j.useState(!1),[n,r]=j.useState(""),i=Ha();j.useEffect(()=>{const a=MI(Fa,u=>{e(!!u)});return()=>a()},[]);const s=async()=>{try{await bb(Fa),e(!1),i("/login")}catch(a){console.error("Logout failed: ",a.message)}},o=async a=>{if(a.key==="Enter"&&n.trim()!=="")try{const c=(await Ae.get(`http://localhost:8080/search?name=${n}`)).data;if(c.length===1){const d=c[0];d.category==="dog"?i(`/dog-detailspage/${d.id}`):d.category==="cat"&&i(`/cat-detailspage/${d.id}`)}else alert("No or multiple pets found with that name.")}catch(u){console.error("Error searching for pets:",u),alert("Error searching for pets. Please try again.")}};return E.jsxs("div",{className:"nav-position",children:[E.jsxs("div",{className:"nav1",children:[E.jsx(Mt,{to:"/",children:E.jsx("img",{src:"images/logo.png",height:"80",width:"80",className:"image-logo",alt:"Logo"})}),E.jsx("div",{className:"search-bar-container",children:E.jsx("input",{type:"text",placeholder:"Search pets... and enter",className:"input",value:n,onChange:a=>r(a.target.value),onKeyPress:o})})]}),E.jsx("div",{children:E.jsxs("ul",{className:"list-items",children:[E.jsx("li",{children:E.jsx(Mt,{to:"/",className:"link",children:"Home"})}),E.jsx("li",{children:E.jsx(Mt,{to:"/dogs",className:"link",children:"Dogs"})}),E.jsx("li",{children:E.jsx(Mt,{to:"/cats",className:"link",children:"Cats"})}),E.jsx("li",{children:E.jsx(Mt,{to:"/cart",className:"link",children:"Cart"})}),t?E.jsx("li",{children:E.jsx("button",{onClick:s,className:"link logout-button",children:"Logout"})}):E.jsx("li",{children:E.jsx(Mt,{to:"/login",className:"link",children:"Login"})})]})})]})},q4=[{id:1,image:"images/download.jpeg",name:"Golden retreiver",price:1e4},{id:2,image:"images/download (1).jpeg",name:"Bull Dog",price:10500},{id:3,image:"images/download (2).jpeg",name:"German Shepherd",price:20500},{id:4,image:"images/download (3).jpeg",name:"Siberian Husky",price:30500},{id:5,image:"images/download.webp",name:"Beagle",price:10500}],G4=[{id:10,image:"images/download (4).jpeg",name:"british shorthair",price:1e4},{id:9,image:"images/download (5).jpeg",name:"Persian",price:10500},{id:11,image:"images/download (6).jpeg",name:"saimese",price:20500},{id:12,image:"images/download (7).jpeg",name:"bomay cat",price:30500},{id:13,image:"images/download (5).webp",name:"Sphynx cat",price:10500}],K4=()=>E.jsxs("div",{className:"page-extend",children:[E.jsxs("div",{className:"home-page",children:[E.jsx("div",{className:"part",children:E.jsxs("h1",{children:["WELCOME TO ",E.jsx("span",{style:{color:"red"},children:"PET WORLD"})," ",E.jsx("br",{}),E.jsxs("span",{className:"font",children:["Find Your ",E.jsx("span",{style:{color:"red"},children:"Loyal Friend"})]})]})}),E.jsx("div",{children:E.jsx("img",{src:"images/home.jpg",height:"350",width:"350",className:"img"})})]}),E.jsxs("div",{className:"carousel-items",children:[E.jsxs("div",{id:"carouselExampleControls",class:"carousel slide","data-ride":"carousel",className:"carousel",children:[E.jsxs("div",{class:"carousel-inner",children:[E.jsx("div",{class:"carousel-item active",children:E.jsx("img",{src:"images/images (4).jpeg",class:"d-block w-100",alt:"...",height:"400",width:"200"})}),E.jsx("div",{class:"carousel-item",children:E.jsx("img",{src:"images/images (5).jpeg",class:"d-block w-100",alt:"...",height:"400",width:"200"})}),E.jsx("div",{class:"carousel-item",children:E.jsx("img",{src:"images/images (3).jpeg",class:"d-block w-100",alt:"...",height:"400",width:"200"})})]}),E.jsxs("a",{class:"carousel-control-prev",href:"#carouselExampleControls",role:"button","data-slide":"prev",children:[E.jsx("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),E.jsx("span",{class:"sr-only",children:"Previous"})]}),E.jsxs("a",{class:"carousel-control-next",href:"#carouselExampleControls",role:"button","data-slide":"next",children:[E.jsx("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),E.jsx("span",{class:"sr-only",children:"Next"})]})]}),E.jsxs("div",{className:"text-position",children:[E.jsx("h1",{children:"Choose Your Pet"}),E.jsx("div",{className:"down-symbol",children:E.jsx("h3",{children:E.jsx("i",{class:"fa-solid fa-chevron-down fa-beat"})})})]})]}),E.jsxs("div",{className:"dogs-position",children:[E.jsx("div",{className:"selling-position",children:E.jsx("h1",{children:"Top Selling Dogs"})}),q4.map(t=>E.jsx(Mt,{style:{color:"#000",textDecoration:"none"},to:`/dog-detailspage/${t.id}`,children:E.jsxs("div",{children:[E.jsx("img",{src:t.image,className:"image1"}),E.jsx("h3",{children:t.name}),E.jsx("p",{children:t.price})]})})),E.jsx("button",{className:"button",children:E.jsx(Mt,{to:"/dogs",children:"see more"})})]}),E.jsxs("div",{className:"cats-position",children:[E.jsx("div",{className:"selling-position",children:E.jsx("h1",{children:"Top Selling Cats"})}),G4.map(t=>E.jsx(Mt,{style:{color:"#000",textDecoration:"none"},to:`/cat-detailspage/${t.id}`,children:E.jsxs("div",{children:[E.jsx("img",{src:t.image,className:"image1"}),E.jsx("h3",{children:t.name}),E.jsx("p",{children:t.price})]})})),E.jsx("button",{className:"button",children:E.jsx(Mt,{to:"/cats",children:"see more"})})]}),E.jsxs("div",{className:"back",children:[E.jsx("h1",{children:"Contact Us"}),E.jsxs("div",{className:"contact-position",children:[E.jsx("h3",{children:"Email : muppalaJathin@gmail.com"}),E.jsx("h3",{children:"Phone No : 7305929739"})]}),E.jsxs("div",{className:"align",children:[E.jsx("input",{type:"text",placeholder:"ask queastion",className:"input2"}),E.jsx("button",{className:"input2",children:"post"})]})]})]}),AR=j.createContext(),Q4=({children:t})=>{const[e,n]=j.useState([]),r=s=>{n(o=>[...o,s])},i=s=>{n(o=>o.filter(a=>a.id!==s.id))};return E.jsx(AR.Provider,{value:{cartItems:e,addToCart:r,removeFromCart:i},children:t})},ll=()=>j.useContext(AR),Y4=({data:t})=>{const{addToCart:e}=ll();return E.jsxs("div",{children:[E.jsx("div",{className:"resize",children:E.jsxs("div",{id:"carouselExampleCaptions",class:"carousel slide","data-ride":"carousel",children:[E.jsxs("ol",{class:"carousel-indicators",children:[E.jsx("li",{"data-target":"#carouselExampleCaptions","data-slide-to":"0",class:"active"}),E.jsx("li",{"data-target":"#carouselExampleCaptions","data-slide-to":"1"}),E.jsx("li",{"data-target":"#carouselExampleCaptions","data-slide-to":"2"})]}),E.jsxs("div",{class:"carousel-inner",children:[E.jsxs("div",{class:"carousel-item active",children:[E.jsx("img",{src:"images/images (1).jpeg",class:"d-block w-100",alt:"..."}),E.jsxs("div",{class:"carousel-caption d-none d-md-block",children:[E.jsx("h5",{children:"First slide label"}),E.jsx("p",{children:"Nulla vitae elit libero, a pharetra augue mollis interdum."})]})]}),E.jsxs("div",{class:"carousel-item",children:[E.jsx("img",{src:"images/images (4).jpeg",class:"d-block w-100",alt:"..."}),E.jsxs("div",{class:"carousel-caption d-none d-md-block",children:[E.jsx("h5",{children:"Second slide label"}),E.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})]}),E.jsxs("div",{class:"carousel-item",children:[E.jsx("img",{src:"images/images (4).jpeg",class:"d-block w-100",alt:"..."}),E.jsxs("div",{class:"carousel-caption d-none d-md-block",children:[E.jsx("h5",{children:"Third slide label"}),E.jsx("p",{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur."})]})]})]}),E.jsxs("a",{class:"carousel-control-prev",href:"#carouselExampleCaptions",role:"button","data-slide":"prev",children:[E.jsx("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),E.jsx("span",{class:"sr-only",children:"Previous"})]}),E.jsxs("a",{class:"carousel-control-next",href:"#carouselExampleCaptions",role:"button","data-slide":"next",children:[E.jsx("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),E.jsx("span",{class:"sr-only",children:"Next"})]})]})}),E.jsx("center",{style:{marginTop:"20px",fontSize:"30px",textDecoration:"underline"},children:"Popular Breeds"}),E.jsx("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center"},children:t.map(n=>E.jsxs("div",{style:{margin:"10px",border:"1px solid #ddd",padding:"10px",cursor:"pointer"},children:[E.jsxs(Mt,{style:{color:"#000",textDecoration:"none"},to:`/cat-detailspage/${n.id}`,children:[E.jsx("img",{src:`http://localhost:8080/images/${n.image}`,alt:n.name,style:{width:"300px",height:"300px"}}),E.jsx("h3",{children:n.name}),E.jsxs("p",{children:["Price: ",n.price]})]}),E.jsx("button",{onClick:()=>{e(n),alert(`${n.name} has been added to the cart!`)},className:"btn btn-outline-primary",children:"Add to Cart"})]},n.id))}),E.jsxs("div",{className:"back",children:[E.jsx("h1",{children:"Contact Us"}),E.jsxs("div",{className:"contact-position",children:[E.jsx("h3",{children:"Email : muppalaJathin@gmail.com"}),E.jsx("h3",{children:"Phone No : 7305929739"})]}),E.jsxs("div",{className:"align",children:[E.jsx("input",{type:"text",placeholder:"ask queastion",className:"input2"}),E.jsx("button",{className:"input2",children:"post"})]})]})]})},X4=({data:t})=>{const{addToCart:e}=ll();return E.jsxs("div",{children:[E.jsx("div",{className:"resize",children:E.jsxs("div",{id:"carouselExampleCaptions",class:"carousel slide","data-ride":"carousel",children:[E.jsxs("ol",{class:"carousel-indicators",children:[E.jsx("li",{"data-target":"#carouselExampleCaptions","data-slide-to":"0",class:"active"}),E.jsx("li",{"data-target":"#carouselExampleCaptions","data-slide-to":"1"}),E.jsx("li",{"data-target":"#carouselExampleCaptions","data-slide-to":"2"})]}),E.jsxs("div",{class:"carousel-inner",children:[E.jsxs("div",{class:"carousel-item active",children:[E.jsx("img",{src:"images/cat-dog-lying-together-ground-with-ai-generated_144089-662.jpg",class:"d-block w-100",alt:"..."}),E.jsxs("div",{class:"carousel-caption d-none d-md-block",children:[E.jsx("h5",{children:"First slide label"}),E.jsx("p",{children:"Nulla vitae elit libero, a pharetra augue mollis interdum."})]})]}),E.jsxs("div",{class:"carousel-item",children:[E.jsx("img",{src:"images/images (4).jpeg",class:"d-block w-100",alt:"..."}),E.jsxs("div",{class:"carousel-caption d-none d-md-block",children:[E.jsx("h5",{children:"Second slide label"}),E.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})]}),E.jsxs("div",{class:"carousel-item",children:[E.jsx("img",{src:"images/images (4).jpeg",class:"d-block w-100",alt:"..."}),E.jsxs("div",{class:"carousel-caption d-none d-md-block",children:[E.jsx("h5",{children:"Third slide label"}),E.jsx("p",{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur."})]})]})]}),E.jsxs("a",{class:"carousel-control-prev",href:"#carouselExampleCaptions",role:"button","data-slide":"prev",children:[E.jsx("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),E.jsx("span",{class:"sr-only",children:"Previous"})]}),E.jsxs("a",{class:"carousel-control-next",href:"#carouselExampleCaptions",role:"button","data-slide":"next",children:[E.jsx("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),E.jsx("span",{class:"sr-only",children:"Next"})]})]})}),E.jsx("center",{style:{marginTop:"20px",fontSize:"30px",textDecoration:"underline"},children:"Popular Breeds"}),E.jsx("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center"},children:t.map(n=>E.jsxs("div",{style:{margin:"10px",border:"1px solid #ddd",padding:"10px",cursor:"pointer"},children:[E.jsxs(Mt,{style:{color:"#000",textDecoration:"none"},to:`/dog-detailspage/${n.id}`,children:[E.jsx("img",{src:`http://localhost:8080/images/${n.image}`,alt:n.name,style:{width:"300px",height:"300px"}}),E.jsx("h3",{children:n.name}),E.jsxs("p",{children:["Price: ",n.price]})]}),E.jsx("button",{onClick:()=>{e(n),alert(`${n.name} has been added to the cart!`)},className:"btn btn-outline-primary",children:"Add to Cart"})]},n.id))}),E.jsxs("div",{className:"back",children:[E.jsx("h1",{children:"Contact Us"}),E.jsxs("div",{className:"contact-position",children:[E.jsx("h3",{children:"Email : muppalaJathin@gmail.com"}),E.jsx("h3",{children:"Phone No : 7305929739"})]}),E.jsxs("div",{className:"align",children:[E.jsx("input",{type:"text",placeholder:"ask queastion",className:"input2"}),E.jsx("button",{className:"input2",children:"post"})]})]})]})},J4=()=>{const[t,e]=j.useState(""),[n,r]=j.useState(""),[i,s]=j.useState(""),o=Ha(),a=async u=>{u.preventDefault();try{await Nb(Fa,t,n),o("/")}catch{s("Login failed. Please check your credentials.")}};return E.jsxs("div",{style:Zi.container,children:[i&&E.jsx("p",{style:Zi.error,children:i}),E.jsxs("div",{className:"position",children:[E.jsx("img",{src:"images/images (4).jpeg",height:300,style:{paddingRight:"10px"}}),E.jsxs("form",{onSubmit:a,style:Zi.form,children:[E.jsx("h2",{style:{textDecoration:"underline"},children:"Login"}),E.jsx("input",{type:"email",placeholder:"Email",value:t,onChange:u=>e(u.target.value),required:!0,style:Zi.input}),E.jsx("input",{type:"password",placeholder:"Password",value:n,onChange:u=>r(u.target.value),required:!0,style:Zi.input}),E.jsx("button",{type:"submit",style:Zi.button,children:"Login"}),E.jsxs("p",{children:["create an acc? ",E.jsx(Mt,{to:"/register",children:"register"})]})]})]})]})},Zi={container:{maxWidth:"300px",margin:"50px auto",textAlign:"center"},form:{display:"flex",flexDirection:"column",gap:"10px"},input:{padding:"10px",fontSize:"16px"},button:{padding:"10px",fontSize:"16px",background:"blue",color:"white",border:"none"},error:{color:"red"}},Z4=()=>{const{cartItems:t,removeFromCart:e}=ll(),n=r=>{e(r)};return E.jsxs("div",{style:{fontSize:"20px"},children:[E.jsx("center",{style:{textDecoration:"underline"},children:"Cart Page"}),t.length===0?E.jsx("center",{children:"No items in the cart"}):E.jsx("ul",{style:{listStyleType:"none",padding:0},children:t.map((r,i)=>E.jsxs("li",{style:{display:"flex",alignItems:"center",marginBottom:"10px",border:"1px solid #ddd",padding:"10px"},children:[E.jsx("img",{src:`http://localhost:8080/images/${r.image}`,alt:r.name,style:{width:"100px",height:"100px",marginRight:"10px"}}),E.jsxs("div",{style:{flexGrow:1},children:[E.jsx("h3",{children:r.name}),E.jsxs("p",{children:["Price: $",r.price]})]}),E.jsx("button",{onClick:()=>n(r),style:{backgroundColor:"#dc3545",color:"white",border:"none",padding:"5px 10px",cursor:"pointer"},children:"Remove"})]},i))})]})},ej=()=>{const{id:t}=yT(),{addToCart:e}=ll(),[n,r]=j.useState(null);return j.useEffect(()=>{fetch(`http://localhost:8080/pets/${t}`).then(i=>i.json()).then(i=>r(i)).catch(i=>console.error("Error fetching dog:",i))},[t]),n?E.jsx("div",{className:"position",children:E.jsxs("div",{className:"position-1",children:[E.jsx("img",{src:`http://localhost:8080/images/${n.image}`,alt:n.name,width:"400"}),E.jsxs("div",{className:"position-2",children:[E.jsx("h1",{children:n.name}),E.jsxs("p",{children:["Price: $",n.price]}),E.jsx("p",{children:n.DES}),E.jsx("button",{className:"btn btn-outline-primary",children:"Order Now"})," ",E.jsx("button",{onClick:()=>{e(n),alert(`${n.name} has been added to the cart!`)},className:"btn btn-outline-primary",children:"Add to Cart"})]})]})}):E.jsx("div",{children:"Dog not found"})},tj=()=>{const{id:t}=yT(),{addToCart:e}=ll(),[n,r]=j.useState(null);return j.useEffect(()=>{fetch(`http://localhost:8080/pets/${t}`).then(i=>i.json()).then(i=>r(i)).catch(i=>console.error("Error fetching cat:",i))},[t]),n?E.jsx("div",{className:"position",children:E.jsxs("div",{className:"position-1",children:[E.jsx("img",{src:`http://localhost:8080/images/${n.image}`,alt:n.name,width:"500"}),E.jsxs("div",{className:"position-2",children:[E.jsx("h1",{children:n.name}),E.jsxs("p",{children:["Price: $",n.price]}),E.jsx("p",{children:n.DES}),E.jsx("button",{className:"btn btn-outline-primary",children:"Order Now"})," ",E.jsx("button",{onClick:()=>{e(n),alert(`${n.name} has been added to the cart!`)},className:"btn btn-outline-primary",children:"Add to Cart"})]})]})}):E.jsx("div",{children:"Cat not found"})},nj=()=>{const[t,e]=j.useState(""),[n,r]=j.useState(""),[i,s]=j.useState(""),[o,a]=j.useState(""),u=Ha(),c=async d=>{if(d.preventDefault(),n!==i){a("Passwords do not match.");return}try{const f=await Pb(Fa,t,n);await C2(h2(mU,"users",f.user.uid),{email:f.user.email,uid:f.user.uid}),u("/")}catch{a("Registration failed. Please try again.")}};return E.jsxs("div",{style:ri.container,children:[o&&E.jsx("p",{style:ri.error,children:o}),E.jsxs("div",{className:"position",children:[E.jsx("img",{src:"images/images (4).jpeg",height:300,style:{paddingRight:"10px"}}),E.jsxs("form",{onSubmit:c,style:ri.form,children:[E.jsx("h2",{style:{textDecoration:"underline"},children:"Register"}),E.jsx("input",{type:"email",placeholder:"Email",value:t,onChange:d=>e(d.target.value),required:!0,style:ri.input}),E.jsx("input",{type:"password",placeholder:"Password",value:n,onChange:d=>r(d.target.value),required:!0,style:ri.input}),E.jsx("input",{type:"password",placeholder:"Confirm Password",value:i,onChange:d=>s(d.target.value),required:!0,style:ri.input}),E.jsx("button",{type:"submit",style:ri.button,children:"Register"})]})]})]})},ri={container:{maxWidth:"300px",margin:"50px auto",textAlign:"center"},form:{display:"flex",flexDirection:"column",gap:"10px"},input:{padding:"10px",fontSize:"16px"},button:{padding:"10px",fontSize:"16px",background:"green",color:"white",border:"none"},error:{color:"red"}},rj=()=>{const[t,e]=j.useState([]),[n,r]=j.useState([]),[i,s]=j.useState(null),[o,a]=j.useState(!1),u=Ha();return j.useEffect(()=>{const c=MI(Fa,f=>{a(!!f)}),d=setInterval(()=>{o||u("/register")},15e3);return()=>{c(),clearInterval(d)}},[o,u]),j.useEffect(()=>{Ae.get("http://localhost:8080/dogs/").then(c=>e(c.data)).catch(c=>console.error("Error fetching dogs",c))},[]),j.useEffect(()=>{Ae.get("http://localhost:8080/cats/").then(c=>r(c.data)).catch(c=>console.error("Error fetching cats",c))},[]),j.useEffect(()=>{Ae.get("http://localhost:8080/pets/").then(c=>s(c.data)).catch(c=>console.error("Error fetching pet details",c))},[]),E.jsx(Q4,{children:E.jsxs("div",{children:[E.jsx(H4,{}),E.jsxs(wP,{children:[E.jsx(jn,{path:"/",element:E.jsx(K4,{})}),E.jsx(jn,{path:"/dogs",element:E.jsx(X4,{data:t})}),E.jsx(jn,{path:"/cats",element:E.jsx(Y4,{data:n})}),E.jsx(jn,{path:"/cart/",element:E.jsx(Z4,{})}),E.jsx(jn,{path:"/login",element:E.jsx(J4,{})}),E.jsx(jn,{path:"/dog-detailspage/:id",element:E.jsx(ej,{data:t})}),E.jsx(jn,{path:"/cat-detailspage/:id",element:E.jsx(tj,{data:n})}),E.jsx(jn,{path:"/register",element:E.jsx(nj,{})})]})]})})};Vd.createRoot(document.getElementById("root")).render(E.jsx(aE.StrictMode,{children:E.jsx(kP,{children:E.jsx(rj,{})})}));
