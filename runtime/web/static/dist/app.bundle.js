var YF=Object.defineProperty;var LF=(_)=>_;function qF(_,$){this[_]=LF.bind(null,$)}var j1=(_,$)=>{for(var j in $)YF(_,j,{get:$[j],enumerable:!0,configurable:!0,set:qF.bind($,j)})};var J_=(_,$)=>()=>(_&&($=_(_=0)),$);var EG={};j1(EG,{useState:()=>C,useRef:()=>g,useReducer:()=>FG,useMemo:()=>G0,useLayoutEffect:()=>e4,useImperativeHandle:()=>EF,useErrorBoundary:()=>zF,useEffect:()=>u,useDebugValue:()=>WF,useContext:()=>DF,useCallback:()=>f,render:()=>Q$,html:()=>F,h:()=>Q3,createContext:()=>HF,Component:()=>n5});function V$(_,$){for(var j in $)_[j]=$[j];return _}function V3(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function Q3(_,$,j){var G,Z,X,Y={};for(X in $)X=="key"?G=$[X]:X=="ref"?Z=$[X]:Y[X]=$[X];if(arguments.length>2&&(Y.children=arguments.length>3?e6.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(X in _.defaultProps)Y[X]===void 0&&(Y[X]=_.defaultProps[X]);return i6(_,Y,G,Z,null)}function i6(_,$,j,G,Z){var X={type:_,props:$,key:j,ref:G,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:Z==null?++jG:Z,__i:-1,__u:0};return Z==null&&I_.vnode!=null&&I_.vnode(X),X}function $2(_){return _.children}function n5(_,$){this.props=_,this.context=$}function s4(_,$){if($==null)return _.__?s4(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?s4(_):null}function QF(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,G=[],Z=[],X=V$({},$);X.__v=$.__v+1,I_.vnode&&I_.vnode(X),N3(_.__P,X,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,G,j==null?s4($):j,!!(32&$.__u),Z),X.__v=$.__v,X.__.__k[X.__i]=X,VG(G,X,Z),$.__e=$.__=null,X.__e!=j&&LG(X)}}function LG(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),LG(_)}function Y3(_){(!_.__d&&(_.__d=!0)&&b$.push(_)&&!t6.__r++||nj!=I_.debounceRendering)&&((nj=I_.debounceRendering)||GG)(t6)}function t6(){try{for(var _,$=1;b$.length;)b$.length>$&&b$.sort(ZG),_=b$.shift(),$=b$.length,QF(_)}finally{b$.length=t6.__r=0}}function qG(_,$,j,G,Z,X,Y,L,K,q,Q){var V,B,N,U,D,E,H,M=G&&G.__k||a6,J=$.length;for(K=NF(j,$,M,K,J),V=0;V<J;V++)(N=j.__k[V])!=null&&(B=N.__i!=-1&&M[N.__i]||s6,N.__i=V,E=N3(_,N,B,Z,X,Y,L,K,q,Q),U=N.__e,N.ref&&B.ref!=N.ref&&(B.ref&&B3(B.ref,null,N),Q.push(N.ref,N.__c||U,N)),D==null&&U!=null&&(D=U),(H=!!(4&N.__u))||B.__k===N.__k?(K=KG(N,K,_,H),H&&B.__e&&(B.__e=null)):typeof N.type=="function"&&E!==void 0?K=E:U&&(K=U.nextSibling),N.__u&=-7);return j.__e=D,K}function NF(_,$,j,G,Z){var X,Y,L,K,q,Q=j.length,V=Q,B=0;for(_.__k=Array(Z),X=0;X<Z;X++)(Y=$[X])!=null&&typeof Y!="boolean"&&typeof Y!="function"?(typeof Y=="string"||typeof Y=="number"||typeof Y=="bigint"||Y.constructor==String?Y=_.__k[X]=i6(null,Y,null,null,null):_2(Y)?Y=_.__k[X]=i6($2,{children:Y},null,null,null):Y.constructor===void 0&&Y.__b>0?Y=_.__k[X]=i6(Y.type,Y.props,Y.key,Y.ref?Y.ref:null,Y.__v):_.__k[X]=Y,K=X+B,Y.__=_,Y.__b=_.__b+1,L=null,(q=Y.__i=BF(Y,j,K,V))!=-1&&(V--,(L=j[q])&&(L.__u|=2)),L==null||L.__v==null?(q==-1&&(Z>Q?B--:Z<Q&&B++),typeof Y.type!="function"&&(Y.__u|=4)):q!=K&&(q==K-1?B--:q==K+1?B++:(q>K?B--:B++,Y.__u|=4))):_.__k[X]=null;if(V)for(X=0;X<Q;X++)(L=j[X])!=null&&(2&L.__u)==0&&(L.__e==G&&(G=s4(L)),NG(L,L));return G}function KG(_,$,j,G){var Z,X;if(typeof _.type=="function"){for(Z=_.__k,X=0;Z&&X<Z.length;X++)Z[X]&&(Z[X].__=_,$=KG(Z[X],$,j,G));return $}_.__e!=$&&(G&&($&&_.type&&!$.parentNode&&($=s4(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function BF(_,$,j,G){var Z,X,Y,L=_.key,K=_.type,q=$[j],Q=q!=null&&(2&q.__u)==0;if(q===null&&L==null||Q&&L==q.key&&K==q.type)return j;if(G>(Q?1:0)){for(Z=j-1,X=j+1;Z>=0||X<$.length;)if((q=$[Y=Z>=0?Z--:X++])!=null&&(2&q.__u)==0&&L==q.key&&K==q.type)return Y}return-1}function pj(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||VF.test($)?j:j+"px"}function r6(_,$,j,G,Z){var X,Y;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof G=="string"&&(_.style.cssText=G=""),G)for($ in G)j&&$ in j||pj(_.style,$,"");if(j)for($ in j)G&&j[$]==G[$]||pj(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")X=$!=($=$.replace(XG,"$1")),Y=$.toLowerCase(),$=Y in _||$=="onFocusOut"||$=="onFocusIn"?Y.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+X]=j,j?G?j[h5]=G[h5]:(j[h5]=K3,_.addEventListener($,X?X3:Z3,X)):_.removeEventListener($,X?X3:Z3,X);else{if(Z=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(L){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function rj(_){return function($){if(this.l){var j=this.l[$.type+_];if($[d6]==null)$[d6]=K3++;else if($[d6]<j[h5])return;return j(I_.event?I_.event($):$)}}}function N3(_,$,j,G,Z,X,Y,L,K,q){var Q,V,B,N,U,D,E,H,M,J,O,T,I,A,k,z=$.type;if($.constructor!==void 0)return null;128&j.__u&&(K=!!(32&j.__u),X=[L=$.__e=j.__e]),(Q=I_.__b)&&Q($);_:if(typeof z=="function")try{if(H=$.props,M=z.prototype&&z.prototype.render,J=(Q=z.contextType)&&G[Q.__c],O=Q?J?J.props.value:Q.__:G,j.__c?E=(V=$.__c=j.__c).__=V.__E:(M?$.__c=V=new z(H,O):($.__c=V=new n5(H,O),V.constructor=z,V.render=UF),J&&J.sub(V),V.state||(V.state={}),V.__n=G,B=V.__d=!0,V.__h=[],V._sb=[]),M&&V.__s==null&&(V.__s=V.state),M&&z.getDerivedStateFromProps!=null&&(V.__s==V.state&&(V.__s=V$({},V.__s)),V$(V.__s,z.getDerivedStateFromProps(H,V.__s))),N=V.props,U=V.state,V.__v=$,B)M&&z.getDerivedStateFromProps==null&&V.componentWillMount!=null&&V.componentWillMount(),M&&V.componentDidMount!=null&&V.__h.push(V.componentDidMount);else{if(M&&z.getDerivedStateFromProps==null&&H!==N&&V.componentWillReceiveProps!=null&&V.componentWillReceiveProps(H,O),$.__v==j.__v||!V.__e&&V.shouldComponentUpdate!=null&&V.shouldComponentUpdate(H,V.__s,O)===!1){$.__v!=j.__v&&(V.props=H,V.state=V.__s,V.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(W){W&&(W.__=$)}),a6.push.apply(V.__h,V._sb),V._sb=[],V.__h.length&&Y.push(V);break _}V.componentWillUpdate!=null&&V.componentWillUpdate(H,V.__s,O),M&&V.componentDidUpdate!=null&&V.__h.push(function(){V.componentDidUpdate(N,U,D)})}if(V.context=O,V.props=H,V.__P=_,V.__e=!1,T=I_.__r,I=0,M)V.state=V.__s,V.__d=!1,T&&T($),Q=V.render(V.props,V.state,V.context),a6.push.apply(V.__h,V._sb),V._sb=[];else do V.__d=!1,T&&T($),Q=V.render(V.props,V.state,V.context),V.state=V.__s;while(V.__d&&++I<25);V.state=V.__s,V.getChildContext!=null&&(G=V$(V$({},G),V.getChildContext())),M&&!B&&V.getSnapshotBeforeUpdate!=null&&(D=V.getSnapshotBeforeUpdate(N,U)),A=Q!=null&&Q.type===$2&&Q.key==null?QG(Q.props.children):Q,L=qG(_,_2(A)?A:[A],$,j,G,Z,X,Y,L,K,q),V.base=$.__e,$.__u&=-161,V.__h.length&&Y.push(V),E&&(V.__E=V.__=null)}catch(W){if($.__v=null,K||X!=null)if(W.then){for($.__u|=K?160:128;L&&L.nodeType==8&&L.nextSibling;)L=L.nextSibling;X[X.indexOf(L)]=null,$.__e=L}else{for(k=X.length;k--;)V3(X[k]);L3($)}else $.__e=j.__e,$.__k=j.__k,W.then||L3($);I_.__e(W,$,j)}else X==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):L=$.__e=FF(j.__e,$,j,G,Z,X,Y,K,q);return(Q=I_.diffed)&&Q($),128&$.__u?void 0:L}function L3(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(L3))}function VG(_,$,j){for(var G=0;G<j.length;G++)B3(j[G],j[++G],j[++G]);I_.__c&&I_.__c($,_),_.some(function(Z){try{_=Z.__h,Z.__h=[],_.some(function(X){X.call(Z)})}catch(X){I_.__e(X,Z.__v)}})}function QG(_){return typeof _!="object"||_==null||_.__b>0?_:_2(_)?_.map(QG):V$({},_)}function FF(_,$,j,G,Z,X,Y,L,K){var q,Q,V,B,N,U,D,E=j.props||s6,H=$.props,M=$.type;if(M=="svg"?Z="http://www.w3.org/2000/svg":M=="math"?Z="http://www.w3.org/1998/Math/MathML":Z||(Z="http://www.w3.org/1999/xhtml"),X!=null){for(q=0;q<X.length;q++)if((N=X[q])&&"setAttribute"in N==!!M&&(M?N.localName==M:N.nodeType==3)){_=N,X[q]=null;break}}if(_==null){if(M==null)return document.createTextNode(H);_=document.createElementNS(Z,M,H.is&&H),L&&(I_.__m&&I_.__m($,X),L=!1),X=null}if(M==null)E===H||L&&_.data==H||(_.data=H);else{if(X=X&&e6.call(_.childNodes),!L&&X!=null)for(E={},q=0;q<_.attributes.length;q++)E[(N=_.attributes[q]).name]=N.value;for(q in E)N=E[q],q=="dangerouslySetInnerHTML"?V=N:q=="children"||(q in H)||q=="value"&&("defaultValue"in H)||q=="checked"&&("defaultChecked"in H)||r6(_,q,null,N,Z);for(q in H)N=H[q],q=="children"?B=N:q=="dangerouslySetInnerHTML"?Q=N:q=="value"?U=N:q=="checked"?D=N:L&&typeof N!="function"||E[q]===N||r6(_,q,N,E[q],Z);if(Q)L||V&&(Q.__html==V.__html||Q.__html==_.innerHTML)||(_.innerHTML=Q.__html),$.__k=[];else if(V&&(_.innerHTML=""),qG($.type=="template"?_.content:_,_2(B)?B:[B],$,j,G,M=="foreignObject"?"http://www.w3.org/1999/xhtml":Z,X,Y,X?X[0]:j.__k&&s4(j,0),L,K),X!=null)for(q=X.length;q--;)V3(X[q]);L||(q="value",M=="progress"&&U==null?_.removeAttribute("value"):U!=null&&(U!==_[q]||M=="progress"&&!U||M=="option"&&U!=E[q])&&r6(_,q,U,E[q],Z),q="checked",D!=null&&D!=_[q]&&r6(_,q,D,E[q],Z))}return _}function B3(_,$,j){try{if(typeof _=="function"){var G=typeof _.__u=="function";G&&_.__u(),G&&$==null||(_.__u=_($))}else _.current=$}catch(Z){I_.__e(Z,j)}}function NG(_,$,j){var G,Z;if(I_.unmount&&I_.unmount(_),(G=_.ref)&&(G.current&&G.current!=_.__e||B3(G,null,$)),(G=_.__c)!=null){if(G.componentWillUnmount)try{G.componentWillUnmount()}catch(X){I_.__e(X,$)}G.base=G.__P=null}if(G=_.__k)for(Z=0;Z<G.length;Z++)G[Z]&&NG(G[Z],$,j||typeof _.type!="function");j||V3(_.__e),_.__c=_.__=_.__e=void 0}function UF(_,$,j){return this.constructor(_,j)}function Q$(_,$,j){var G,Z,X,Y;$==document&&($=document.documentElement),I_.__&&I_.__(_,$),Z=(G=typeof j=="function")?null:j&&j.__k||$.__k,X=[],Y=[],N3($,_=(!G&&j||$).__k=Q3($2,null,[_]),Z||s6,s6,$.namespaceURI,!G&&j?[j]:Z?null:$.firstChild?e6.call($.childNodes):null,X,!G&&j?j:Z?Z.__e:$.firstChild,G,Y),VG(X,_,Y)}function HF(_){function $(j){var G,Z;return this.getChildContext||(G=new Set,(Z={})[$.__c]=this,this.getChildContext=function(){return Z},this.componentWillUnmount=function(){G=null},this.shouldComponentUpdate=function(X){this.props.value!=X.value&&G.forEach(function(Y){Y.__e=!0,Y3(Y)})},this.sub=function(X){G.add(X);var Y=X.componentWillUnmount;X.componentWillUnmount=function(){G&&G.delete(X),Y&&Y.call(X)}}),j.children}return $.__c="__cC"+YG++,$.__=_,$.Provider=$.__l=($.Consumer=function(j,G){return j.children(G)}).contextType=$,$}function t4(_,$){S_.__h&&S_.__h(x_,_,a4||$),a4=0;var j=x_.__H||(x_.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function C(_){return a4=1,FG(UG,_)}function FG(_,$,j){var G=t4(v$++,2);if(G.t=_,!G.__c&&(G.__=[j?j($):UG(void 0,$),function(L){var K=G.__N?G.__N[0]:G.__[0],q=G.t(K,L);K!==q&&(G.__N=[q,G.__[1]],G.__c.setState({}))}],G.__c=x_,!x_.__f)){var Z=function(L,K,q){if(!G.__c.__H)return!0;var Q=G.__c.__H.__.filter(function(B){return B.__c});if(Q.every(function(B){return!B.__N}))return!X||X.call(this,L,K,q);var V=G.__c.props!==L;return Q.some(function(B){if(B.__N){var N=B.__[0];B.__=B.__N,B.__N=void 0,N!==B.__[0]&&(V=!0)}}),X&&X.call(this,L,K,q)||V};x_.__f=!0;var{shouldComponentUpdate:X,componentWillUpdate:Y}=x_;x_.componentWillUpdate=function(L,K,q){if(this.__e){var Q=X;X=void 0,Z(L,K,q),X=Q}Y&&Y.call(this,L,K,q)},x_.shouldComponentUpdate=Z}return G.__N||G.__}function u(_,$){var j=t4(v$++,3);!S_.__s&&F3(j.__H,$)&&(j.__=_,j.u=$,x_.__H.__h.push(j))}function e4(_,$){var j=t4(v$++,4);!S_.__s&&F3(j.__H,$)&&(j.__=_,j.u=$,x_.__h.push(j))}function g(_){return a4=5,G0(function(){return{current:_}},[])}function EF(_,$,j){a4=6,e4(function(){if(typeof _=="function"){var G=_($());return function(){_(null),G&&typeof G=="function"&&G()}}if(_)return _.current=$(),function(){return _.current=null}},j==null?j:j.concat(_))}function G0(_,$){var j=t4(v$++,7);return F3(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function f(_,$){return a4=8,G0(function(){return _},$)}function DF(_){var $=x_.context[_.__c],j=t4(v$++,9);return j.c=_,$?(j.__==null&&(j.__=!0,$.sub(x_)),$.props.value):_.__}function WF(_,$){S_.useDebugValue&&S_.useDebugValue($?$(_):_)}function zF(_){var $=t4(v$++,10),j=C();return $.__=_,x_.componentDidCatch||(x_.componentDidCatch=function(G,Z){$.__&&$.__(G,Z),j[1](G)}),[j[0],function(){j[1](void 0)}]}function OF(){for(var _;_=BG.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(o6),$.__h.some(q3),$.__h=[]}catch(j){$.__h=[],S_.__e(j,_.__v)}}}function JF(_){var $,j=function(){clearTimeout(G),_G&&cancelAnimationFrame($),setTimeout(_)},G=setTimeout(j,35);_G&&($=requestAnimationFrame(j))}function o6(_){var $=x_,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),x_=$}function q3(_){var $=x_;_.__c=_.__(),x_=$}function F3(_,$){return!_||_.length!==$.length||$.some(function(j,G){return j!==_[G]})}function UG(_,$){return typeof $=="function"?$(_):$}function AF(_){var $=$G.get(this);return $||($=new Map,$G.set(this,$)),($=HG(this,$.get(_)||($.set(_,$=function(j){for(var G,Z,X=1,Y="",L="",K=[0],q=function(B){X===1&&(B||(Y=Y.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?K.push(0,B,Y):X===3&&(B||Y)?(K.push(3,B,Y),X=2):X===2&&Y==="..."&&B?K.push(4,B,0):X===2&&Y&&!B?K.push(5,0,!0,Y):X>=5&&((Y||!B&&X===5)&&(K.push(X,0,Y,Z),X=6),B&&(K.push(X,B,0,Z),X=6)),Y=""},Q=0;Q<j.length;Q++){Q&&(X===1&&q(),q(Q));for(var V=0;V<j[Q].length;V++)G=j[Q][V],X===1?G==="<"?(q(),K=[K],X=3):Y+=G:X===4?Y==="--"&&G===">"?(X=1,Y=""):Y=G+Y[0]:L?G===L?L="":Y+=G:G==='"'||G==="'"?L=G:G===">"?(q(),X=1):X&&(G==="="?(X=5,Z=Y,Y=""):G==="/"&&(X<5||j[Q][V+1]===">")?(q(),X===3&&(K=K[0]),X=K,(K=K[0]).push(2,0,X),X=0):G===" "||G==="\t"||G===`
`||G==="\r"?(q(),X=2):Y+=G),X===3&&Y==="!--"&&(X=4,K=K[0])}return q(),K}(_)),$),arguments,[])).length>1?$:$[0]}var e6,I_,jG,KF,b$,nj,GG,ZG,j3,d6,h5,XG,K3,Z3,X3,YG,s6,a6,VF,_2,v$,x_,G3,dj,a4=0,BG,S_,ij,oj,sj,aj,tj,ej,_G,HG=function(_,$,j,G){var Z;$[0]=0;for(var X=1;X<$.length;X++){var Y=$[X++],L=$[X]?($[0]|=Y?1:2,j[$[X++]]):$[++X];Y===3?G[0]=L:Y===4?G[1]=Object.assign(G[1]||{},L):Y===5?(G[1]=G[1]||{})[$[++X]]=L:Y===6?G[1][$[++X]]+=L+"":Y?(Z=_.apply(L,HG(_,L,j,["",null])),G.push(Z),L[0]?$[0]|=2:($[X-2]=0,$[X]=Z)):G.push(L)}return G},$G,F;var T0=J_(()=>{s6={},a6=[],VF=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,_2=Array.isArray;e6=a6.slice,I_={__e:function(_,$,j,G){for(var Z,X,Y;$=$.__;)if((Z=$.__c)&&!Z.__)try{if((X=Z.constructor)&&X.getDerivedStateFromError!=null&&(Z.setState(X.getDerivedStateFromError(_)),Y=Z.__d),Z.componentDidCatch!=null&&(Z.componentDidCatch(_,G||{}),Y=Z.__d),Y)return Z.__E=Z}catch(L){_=L}throw _}},jG=0,KF=function(_){return _!=null&&_.constructor===void 0},n5.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=V$({},this.state),typeof _=="function"&&(_=_(V$({},j),this.props)),_&&V$(j,_),_!=null&&this.__v&&($&&this._sb.push($),Y3(this))},n5.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),Y3(this))},n5.prototype.render=$2,b$=[],GG=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,ZG=function(_,$){return _.__v.__b-$.__v.__b},t6.__r=0,j3=Math.random().toString(8),d6="__d"+j3,h5="__a"+j3,XG=/(PointerCapture)$|Capture$/i,K3=0,Z3=rj(!1),X3=rj(!0),YG=0;BG=[],S_=I_,ij=S_.__b,oj=S_.__r,sj=S_.diffed,aj=S_.__c,tj=S_.unmount,ej=S_.__;S_.__b=function(_){x_=null,ij&&ij(_)},S_.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),ej&&ej(_,$)},S_.__r=function(_){oj&&oj(_),v$=0;var $=(x_=_.__c).__H;$&&(G3===x_?($.__h=[],x_.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(o6),$.__h.some(q3),$.__h=[],v$=0)),G3=x_},S_.diffed=function(_){sj&&sj(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(BG.push($)!==1&&dj===S_.requestAnimationFrame||((dj=S_.requestAnimationFrame)||JF)(OF)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),G3=x_=null},S_.__c=function(_,$){$.some(function(j){try{j.__h.some(o6),j.__h=j.__h.filter(function(G){return!G.__||q3(G)})}catch(G){$.some(function(Z){Z.__h&&(Z.__h=[])}),$=[],S_.__e(G,j.__v)}}),aj&&aj(_,$)},S_.unmount=function(_){tj&&tj(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(G){try{o6(G)}catch(Z){$=Z}}),j.__H=void 0,$&&S_.__e($,j.__v))};_G=typeof requestAnimationFrame=="function";$G=new Map;F=AF.bind(Q3)});function W1(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function K_(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{return}}function F$(_,$=!1){let j=W1(_);if(j===null)return $;return j==="true"}function D4(_,$=null){let j=W1(_);if(j===null)return $;let G=parseInt(j,10);return Number.isFinite(G)?G:$}function U2(_){let $=W1(_);if(!$)return null;try{return JSON.parse($)}catch{return null}}function t3(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function bZ(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let G=j.length===3?j.split("").map((X)=>X+X).join(""):j,Z=parseInt(G,16);return{r:Z>>16&255,g:Z>>8&255,b:Z&255,hex:`#${G.toLowerCase()}`}}function SH(_,$){try{if(document.body){_.style.display="none",document.body.appendChild(_);let j=getComputedStyle(_).color||_.style.color;return document.body.removeChild(_),j}}catch{return $}return $}function uH(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=SH(j,j.style.color).match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!Z)return null;let X=parseInt(Z[1],10),Y=parseInt(Z[2],10),L=parseInt(Z[3],10);if(![X,Y,L].every((q)=>Number.isFinite(q)))return null;let K=`#${[X,Y,L].map((q)=>q.toString(16).padStart(2,"0")).join("")}`;return{r:X,g:Y,b:L,hex:K}}function W4(_){return bZ(_)||uH(_)}function e3(_,$,j){let G=Math.round(_.r+($.r-_.r)*j),Z=Math.round(_.g+($.g-_.g)*j),X=Math.round(_.b+($.b-_.b)*j);return`rgb(${G} ${Z} ${X})`}function H2(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function gH(_){let $=_.r/255,j=_.g/255,G=_.b/255,Z=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),X=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),Y=G<=0.03928?G/12.92:Math.pow((G+0.055)/1.055,2.4);return 0.2126*Z+0.7152*X+0.0722*Y}function bH(_){return gH(_)>0.4?"#000000":"#ffffff"}function vZ(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function _7(_){return SZ[_]||SZ.default}function vH(_){return _.mode==="auto"?vZ():_.mode}function mZ(_,$){let j=_7(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||H$}function U$(_,$,j){let G=W4(_);if(!G)return _;return e3(G,$,j)}function cZ(_,$,j){let G=W4($);if(!G)return _;let X=bZ(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:U$(_.bgPrimary,G,0.08),bgSecondary:U$(_.bgSecondary,G,0.12),bgHover:U$(_.bgHover,G,0.16),textPrimary:U$(_.textPrimary,G,j==="dark"?0.08:0.06),textSecondary:U$(_.textSecondary,G,j==="dark"?0.12:0.1),borderColor:U$(_.borderColor,G,0.1),accent:G.hex,accentHover:X?e3(G,X,0.18):G.hex,warning:U$(_.warning||H$.warning,G,0.14),danger:U$(_.danger,G,0.16),success:U$(_.success,G,0.16)}}function mH(_,$){let j=W4(_?.warning);if(j)return j.hex;let G=W4($==="dark"?W2.warning:H$.warning)||W4(H$.warning),Z=W4(_?.accent);if(G&&Z)return e3(G,Z,$==="dark"?0.18:0.14);return $==="dark"?W2.warning:H$.warning}function cH(_,$){if(typeof document>"u")return;let j=document.documentElement,G=_.accent,Z=W4(G),X=Z?H2(Z,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,Y=Z?H2(Z,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",L=Z?H2(Z,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",K=Z?bH(Z):$==="dark"?"#000000":"#ffffff",q=Z?H2(Z,$==="dark"?0.35:0.25):"rgba(29, 155, 240, 0.25)",Q=mH(_,$),V={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":G,"--accent-hover":_.accentHover||G,"--accent-color-alpha":q,"--accent-soft":Y,"--accent-soft-strong":L,"--accent-contrast-text":K,"--warning-color":Q,"--danger-color":_.danger||H$.danger,"--success-color":_.success||H$.success,"--search-highlight-color":X||"rgba(29, 155, 240, 0.2)"};Object.entries(V).forEach(([B,N])=>{if(N)j.style.setProperty(B,N)})}function lH(){if(typeof document>"u")return;let _=document.documentElement;RH.forEach(($)=>_.style.removeProperty($))}function V5(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,G=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!G)G=document.createElement("meta"),document.head.appendChild(G);if(G.setAttribute("name",_),j)G.setAttribute("id",j);return G}function uZ(_){let $=t3(z4?.theme||"default"),j=z4?.tint?String(z4.tint).trim():null,G=mZ($,_);if($==="default"&&j)G=cZ(G,j,_);if(G?.bgPrimary)return G.bgPrimary;return _==="dark"?W2.bgPrimary:H$.bgPrimary}function hH(_,$){if(typeof document>"u")return;let j=V5("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let G=V5("theme-color",{id:"theme-color-light"});if(G)G.setAttribute("media","(prefers-color-scheme: light)"),G.setAttribute("content",uZ("light"));let Z=V5("theme-color",{id:"theme-color-dark"});if(Z)Z.setAttribute("media","(prefers-color-scheme: dark)"),Z.setAttribute("content",uZ("dark"));let X=V5("msapplication-TileColor");if(X&&_)X.setAttribute("content",_);let Y=V5("msapplication-navbutton-color");if(Y&&_)Y.setAttribute("content",_);let L=V5("apple-mobile-web-app-status-bar-style");if(L)L.setAttribute("content",$==="dark"?"black-translucent":"default")}function nH(){if(typeof window>"u")return;let _={...z4,mode:gZ};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function pH(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function $7(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=t3(_?.theme||"default"),G=_?.tint?String(_.tint).trim():null,Z=_7(j),X=vH(Z),Y=mZ(j,X);z4={theme:j,tint:G},gZ=X;let L=document.documentElement;L.dataset.theme=X,L.dataset.colorTheme=j,L.dataset.tint=G?String(G):"",L.style.colorScheme=X;let K=Y;if(j==="default"&&G)K=cZ(Y,G,X);if(j==="default"&&!G)lH();else cH(K,X);if(hH(K.bgPrimary,X),nH(),$.persist!==!1)if(K_(a3,j),G)K_(D2,G);else K_(D2,"")}function E2(){if(_7(z4.theme).mode!=="auto")return;$7(z4,{persist:!1})}function lZ(){if(typeof window>"u")return()=>{};let _=t3(W1(a3)||"default"),$=(()=>{let j=W1(D2);return j?j.trim():null})();if($7({theme:_,tint:$},{persist:!1}),window.matchMedia&&!s3){let j=window.matchMedia("(prefers-color-scheme: dark)");if(j.addEventListener)j.addEventListener("change",E2);else if(j.addListener)j.addListener(E2);return s3=!0,()=>{if(j.removeEventListener)j.removeEventListener("change",E2);else if(j.removeListener)j.removeListener(E2);s3=!1}}return()=>{}}function Q5(_){if(!_||typeof _!=="object")return;let $=pH(),j=_.chat_jid||_.chatJid||null,G=_.theme??_.name??_.colorTheme,Z=_.tint??null;if(!j||j===$)$7({theme:G||"default",tint:Z},{persist:!1});K_(a3,G||"default"),K_(D2,Z||"")}function hZ(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return vZ()}var a3="piclaw_theme",D2="piclaw_tint",H$,W2,SZ,RH,z4,gZ="light",s3=!1;var e5=J_(()=>{H$={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",warning:"#f0b429",danger:"#f4212e",success:"#00ba7c"},W2={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",warning:"#f0b429",danger:"#f4212e",success:"#00ba7c"},SZ={default:{label:"Default",mode:"auto",light:H$,dark:W2},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},RH=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-color-alpha","--accent-contrast-text","--accent-soft","--accent-soft-strong","--warning-color","--danger-color","--success-color","--search-highlight-color"],z4={theme:"default",tint:null}});function tZ(_=typeof window<"u"?window:null){return _||null}function O2(){if(typeof performance<"u"&&typeof performance.now==="function")return performance.now();return Date.now()}function Z6(_,$){return`${_}:${$}`}function eZ(_){return`${_}-${Math.random().toString(36).slice(2,10)}-${Date.now().toString(36)}`}function _X(_,$){if(_.length<=$)return;_.splice(0,_.length-$)}function J4(_){if(!_||typeof _!=="object")return null;return{..._}}function y4(_){if(!_)return null;return A4.find(($)=>$.id===_)||null}function G7(_,$){if(typeof performance>"u"||typeof performance.mark!=="function")return;try{performance.mark(`piclaw:${_}:${$}`)}catch(j){console.debug("[app-perf] Ignoring performance.mark failure.",j,{traceId:_,phase:$})}}function $X(_){if(typeof performance>"u"||typeof performance.clearMarks!=="function")return;try{performance.clearMarks(`piclaw:${_}:start`);let $=y4(_);if(!$)return;for(let j of $.phases)performance.clearMarks(`piclaw:${_}:${j.phase}`)}catch($){console.debug("[app-perf] Ignoring performance.clearMarks failure.",$,{traceId:_})}}function aZ(_,$,j){let G=k4.get(Z6(_,$));if(G&&y4(G)?.status==="active")G6(G,"cancelled","superseded",{replacementType:_,replacementChatJid:$});let Z=eZ(_),X={id:Z,type:_,chatJid:$,startedAt:O2(),detail:J4(j),phases:[],status:"active"};return A4.push(X),_X(A4,100),k4.set(Z6(_,$),Z),G7(Z,"start"),Z}function G6(_,$,j,G,Z){let X=y4(_);if(!X||X.status!=="active")return;if(j)X.phases.push({phase:j,at:O2(),detail:J4(G)}),G7(X.id,j);if(X.status=$,X.completedAt=O2(),X.durationMs=X.completedAt-X.startedAt,Z!==void 0)X.error=Z instanceof Error?Z.message:String(Z);let Y=Z6(X.type,X.chatJid);if(k4.get(Y)===X.id)k4.delete(Y);$X(X.id)}function NE(_=tZ()){let $=_?.__PICLAW_PERF__;if($)return $;if(_)_.__PICLAW_PERF__=J2;return J2}function N5(_=tZ()){return NE(_)}function jX(_,$,j){return N5().ensureTrace(_,$,j)}function A2(_,$){return N5().getActiveTraceId(_,$)}function X1(_,$,j){N5().markTrace(_,$,j)}function k2(_,$,j="settled",G){let Z=y4(_);if(!Z||Z.status!=="active")return!1;let X=new Set(Z.phases.map((Y)=>Y.phase));if(!$.every((Y)=>X.has(Y)))return!1;return G6(_,"completed",j,G),!0}function GX(_,$,j="failed",G){N5().failTrace(_,$,j,G)}function ZX(_,$="cancelled",j){N5().cancelTrace(_,$,j)}function Z7(_){return N5().recordRequest(_)}var A4,j6,k4,J2;var X6=J_(()=>{A4=[],j6=[],k4=new Map;J2={startTrace(_,$,j){return aZ(_,$,j)},ensureTrace(_,$,j){let G=k4.get(Z6(_,$));if(G&&y4(G)?.status==="active")return G;return aZ(_,$,j)},getActiveTraceId(_,$){let j=k4.get(Z6(_,$));return j&&y4(j)?.status==="active"?j:null},markTrace(_,$,j){let G=y4(_);if(!G||G.status!=="active")return;G.phases.push({phase:$,at:O2(),detail:J4(j)}),G7(G.id,$)},completeTrace(_,$="settled",j){G6(_,"completed",$,j)},failTrace(_,$,j="failed",G){G6(_,"failed",j,G,$)},cancelTrace(_,$="cancelled",j){G6(_,"cancelled",$,j)},recordRequest(_){let $=eZ("req");return j6.push({..._,id:$,detail:J4(_.detail)}),_X(j6,300),$},getTraces(){return A4.map((_)=>({..._,detail:J4(_.detail),phases:_.phases.map(($)=>({...$,detail:J4($.detail)}))}))},getRequests(){return j6.map((_)=>({..._,detail:J4(_.detail)}))},clear(){A4.forEach((_)=>$X(_.id)),A4.splice(0,A4.length),j6.splice(0,j6.length),k4.clear()},printSummary(){let _={traces:J2.getTraces(),requests:J2.getRequests()};return console.table(_.traces.map(($)=>({id:$.id,type:$.type,chatJid:$.chatJid,status:$.status,durationMs:Number($.durationMs||0).toFixed(1),lastPhase:$.phases[$.phases.length-1]?.phase||"start"}))),_}}});function B5(_){let $=Number(_||0);return Number.isFinite($)&&$>0?$:null}function BE(_){try{return Boolean(_?.matchMedia?.("(pointer: coarse)")?.matches)}catch{return!1}}function FE(_){let $=String(_?.navigator?.userAgent||"");return/Android|webOS|iPhone|iPod|Mobile|Windows Phone/i.test($)}function XX(_){let $=String(_?.navigator?.userAgent||"");return/iPad|Tablet|PlayBook|Silk/i.test($)}function YX(_=typeof window<"u"?window:null){let $=B5(_?.innerWidth)??B5(_?.screen?.availWidth)??B5(_?.screen?.width)??0,j=B5(_?.innerHeight)??B5(_?.screen?.availHeight)??B5(_?.screen?.height)??0,G=$&&j?Math.min($,j):$||j,Z=$&&j?Math.max($,j):$||j,X=BE(_),Y=Number(_?.navigator?.maxTouchPoints||0),L=X||Y>1;if(G>0&&G<=640)return"mobile";if(FE(_)&&!XX(_))return"mobile";if(XX(_))return"tablet";if(L&&G>0&&G<=1100)return"tablet";if(Z>0&&Z<=1180&&G>0&&G<=900)return"tablet";return"desktop"}var Q6={};j1(Q6,{uploadWorkspaceFile:()=>w2,uploadMedia:()=>E7,updateWorkspaceFile:()=>dE,updateScheduledTask:()=>K7,submitAdaptiveCardAction:()=>D7,streamSidePrompt:()=>hE,stopAutoresearch:()=>uE,steerAgentQueueItem:()=>mE,setWorkspaceVisibility:()=>K6,setAgentThoughtVisibility:()=>pE,sendPeerAgentMessage:()=>CE,sendAgentMessage:()=>z1,searchPosts:()=>HE,saveWorkspaceSettings:()=>N7,saveWebPushSubscription:()=>U7,saveUiState:()=>V7,saveQuickActionsSettings:()=>Q7,saveEnvironmentOverride:()=>y2,restoreChatBranch:()=>IE,respondToAgentRequest:()=>F5,reorderAgentQueueItem:()=>cE,renameWorkspaceFile:()=>T7,renameChatJid:()=>xE,renameChatBranch:()=>yE,removeAgentQueueItem:()=>vE,reindexWorkspace:()=>k7,purgeChatBranch:()=>TE,pruneChatBranch:()=>wE,moveWorkspaceEntry:()=>x7,mergeChatBranchIntoParent:()=>ME,getWorkspaceTree:()=>q6,getWorkspaceRawUrl:()=>V6,getWorkspaceIndexStatus:()=>A7,getWorkspaceFileStat:()=>M7,getWorkspaceFileDownloadUrl:()=>T2,getWorkspaceFile:()=>y7,getWorkspaceDownloadUrl:()=>x2,getWorkspaceBranch:()=>J7,getWebPushPublicKey:()=>F7,getTimeline:()=>h$,getThumbnailUrl:()=>z7,getThread:()=>EE,getSystemMetrics:()=>L7,getScheduledTasks:()=>q7,getQuickActionsSettings:()=>L6,getPostsByHashtag:()=>Y7,getMediaUrl:()=>u1,getMediaText:()=>rE,getMediaInfo:()=>M2,getMediaBlob:()=>O7,getEnvironmentSettings:()=>B7,getChatBranches:()=>JE,getAutoresearchStatus:()=>SE,getAgents:()=>fE,getAgentThought:()=>nE,getAgentStatus:()=>PE,getAgentQueueState:()=>bE,getAgentModels:()=>M4,getAgentContext:()=>RE,getAgentCommands:()=>Y6,getActiveChatAgents:()=>OE,forkChatBranch:()=>AE,dismissAutoresearch:()=>gE,deleteWorkspaceFile:()=>I7,deleteWebPushSubscription:()=>H7,deletePost:()=>zE,createWorkspaceFile:()=>w7,createRootChatSession:()=>kE,createReply:()=>WE,createPost:()=>DE,completeInstanceOobe:()=>lE,attachWorkspaceFile:()=>iE,addToWhitelist:()=>W7,SSEClient:()=>I2});async function n0(_,$={}){let j=typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now(),G;try{G=await fetch(l_+_,{...$,headers:{"Content-Type":"application/json",...$.headers}})}catch(X){throw Z7({method:String($.method||"GET").toUpperCase(),url:_,startedAt:j,durationMs:(typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now())-j,ok:!1,detail:{failedBeforeResponse:!0}}),X}let Z=(typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now())-j;if(Z7({method:String($.method||"GET").toUpperCase(),url:_,startedAt:j,durationMs:Z,status:G.status,ok:G.ok,requestId:G.headers?.get?.("x-request-id")||null,serverTiming:G.headers?.get?.("Server-Timing")||null}),!G.ok){let X=await G.json().catch(()=>({error:"Unknown error"}));throw Error(X.error||`HTTP ${G.status}`)}return G.json()}function LX(_){let $=String(_||"").split(`
`),j="message",G=[];for(let X of $)if(X.startsWith("event:"))j=X.slice(6).trim()||"message";else if(X.startsWith("data:"))G.push(X.slice(5).trim());let Z=G.join(`
`);if(!Z)return null;try{return{event:j,data:JSON.parse(Z)}}catch{return{event:j,data:Z}}}async function UE(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),G=new TextDecoder,Z="";while(!0){let{value:Y,done:L}=await j.read();if(L)break;Z+=G.decode(Y,{stream:!0});let K=Z.split(`

`);Z=K.pop()||"";for(let q of K){let Q=LX(q);if(Q)$(Q.event,Q.data)}}Z+=G.decode();let X=LX(Z);if(X)$(X.event,X.data)}async function h$(_=10,$=null,j=null){let G=`/timeline?limit=${_}`;if($)G+=`&before=${$}`;if(j)G+=`&chat_jid=${encodeURIComponent(j)}`;return n0(G)}async function Y7(_,$=50,j=0,G=null){let Z=G?`&chat_jid=${encodeURIComponent(G)}`:"";return n0(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${Z}`)}async function HE(_,$=50,j=0,G=null,Z="current",X=null,Y=null){let L=G?`&chat_jid=${encodeURIComponent(G)}`:"",K=Z?`&scope=${encodeURIComponent(Z)}`:"",q=X?`&root_chat_jid=${encodeURIComponent(X)}`:"",Q=Y?.images?"&images=1":"",V=Y?.attachments?"&attachments=1":"";return n0(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${L}${K}${q}${Q}${V}`)}async function EE(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return n0(`/thread/${_}${j}`)}async function L7(){return n0("/agent/system-metrics")}async function q7(_={}){let $=new URLSearchParams;if(_?.id)$.set("id",String(_.id));if(_?.chatJid)$.set("chat_jid",String(_.chatJid));if(_?.status&&_.status!=="all")$.set("status",String(_.status));if(_?.limit)$.set("limit",String(_.limit));if(_?.includeRunLogs)$.set("include_run_logs","1");if(_?.runLogLimit)$.set("run_log_limit",String(_.runLogLimit));let j=$.toString()?`?${$.toString()}`:"";return n0(`/agent/scheduled-tasks${j}`)}async function K7(_,$,j={}){return n0("/agent/scheduled-tasks/action",{method:"POST",body:JSON.stringify({action:_,id:$,allow_internal:j?.allowInternal===!0})})}async function V7(_){return n0("/agent/ui-state",{method:"POST",body:JSON.stringify(_||{})})}async function DE(_,$=[],j=null){let G=j?`?chat_jid=${encodeURIComponent(j)}`:"";return n0(`/post${G}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function WE(_,$,j=[],G=null){let Z=G?`?chat_jid=${encodeURIComponent(G)}`:"";return n0(`/post/reply${Z}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function zE(_,$=!1,j=null){let G=j?`&chat_jid=${encodeURIComponent(j)}`:"",Z=`/post/${_}?cascade=${$?"true":"false"}${G}`;return n0(Z,{method:"DELETE"})}async function z1(_,$,j=null,G=[],Z=null,X=null){let Y=X?`?chat_jid=${encodeURIComponent(X)}`:"",L={content:$,thread_id:j,media_ids:G,client_context:{screen_hint:YX()}};if(Z==="auto"||Z==="queue"||Z==="steer")L.mode=Z;return n0(`/agent/${_}/message${Y}`,{method:"POST",body:JSON.stringify(L)})}async function Y6(_="web:default"){let $=typeof _==="string"&&_.trim()?_.trim():"web:default";return n0(`/agent/commands?chat_jid=${encodeURIComponent($)}`)}async function L6(){return n0("/agent/settings/quick-actions")}async function Q7(_){return n0("/agent/settings/quick-actions",{method:"POST",body:JSON.stringify(_||{})})}async function N7(_){return n0("/agent/settings/workspace",{method:"POST",body:JSON.stringify(_||{})})}async function B7(){return n0("/agent/settings/environment")}async function y2(_){return n0("/agent/settings/environment",{method:"POST",body:JSON.stringify(_||{})})}async function OE(){return n0("/agent/active-chats")}async function JE(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let G=j.toString()?`?${j.toString()}`:"";return n0(`/agent/branches${G}`)}async function AE(_,$={}){return n0("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{}})})}async function kE(_){return n0("/agent/root-session",{method:"POST",body:JSON.stringify({agent_name:_})})}async function yE(_,$={}){return n0("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function ME(_){return n0("/agent/branch-merge-parent",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function wE(_){return n0("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function TE(_){return n0("/agent/branch-purge",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function xE(_,$){return n0("/agent/rename-jid",{method:"POST",body:JSON.stringify({old_jid:_,new_jid:$})})}async function IE(_,$={}){return n0("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function CE(_,$,j,G="auto",Z={}){let X={source_chat_jid:_,content:j,mode:G,...Z?.sourceAgentName?{source_agent_name:Z.sourceAgentName}:{},...Z?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return n0("/agent/peer-message",{method:"POST",body:JSON.stringify(X)})}async function F7(){return n0("/agent/push/vapid-public-key")}async function U7(_,$={}){let j={subscription:_,...$?.deviceId?{device_id:$.deviceId}:{}};return n0("/agent/push/subscription",{method:"POST",body:JSON.stringify(j)})}async function H7(_,$={}){let j={subscription:_,...$?.deviceId?{device_id:$.deviceId}:{}};return n0("/agent/push/subscription",{method:"DELETE",body:JSON.stringify(j)})}async function fE(){return n0("/agent/roster")}async function PE(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return n0(`/agent/status${$}`)}async function RE(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return n0(`/agent/context${$}`)}async function SE(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return n0(`/agent/autoresearch/status${$}`)}async function uE(_=null,$={}){return n0("/agent/autoresearch/stop",{method:"POST",body:JSON.stringify({chat_jid:_||void 0,generate_report:$?.generateReport!==!1})})}async function gE(_=null){return n0("/agent/autoresearch/dismiss",{method:"POST",body:JSON.stringify({chat_jid:_||void 0})})}async function bE(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return n0(`/agent/queue-state${$}`)}async function vE(_,$=null){let j=await fetch(l_+"/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let G=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(G.error||`HTTP ${j.status}`)}return j.json()}async function mE(_,$=null){let j=await fetch(l_+"/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let G=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(G.error||`HTTP ${j.status}`)}return j.json()}async function cE(_,$,j=null){let G=await fetch(l_+"/agent/queue-reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({from_index:_,to_index:$,chat_jid:j||void 0})});if(!G.ok){let Z=await G.json().catch(()=>({error:"Failed to reorder queued item"}));throw Error(Z.error||`HTTP ${G.status}`)}return G.json()}async function M4(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return n0(`/agent/models${$}`)}async function lE(_="provider-ready"){return n0("/agent/oobe/complete",{method:"POST",body:JSON.stringify({kind:_})})}async function E7(_){let $=new FormData;$.append("file",_);let j=await fetch(l_+"/media/upload",{method:"POST",body:$});if(!j.ok){let G=await j.json().catch(()=>({error:"Upload failed"}));throw Error(G.error||`HTTP ${j.status}`)}return j.json()}async function F5(_,$,j=null){let G=await fetch(l_+"/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!G.ok){let Z=await G.json().catch(()=>({error:"Failed to respond"}));throw Error(Z.error||`HTTP ${G.status}`)}return G.json()}async function D7(_){let $=await fetch(l_+"/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function hE(_,$={}){let j=await fetch(l_+"/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let X=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(X.error||`HTTP ${j.status}`)}let G=null,Z=null;if(await UE(j,(X,Y)=>{if($.onEvent?.(X,Y),X==="side_prompt_thinking_delta")$.onThinkingDelta?.(Y?.delta||"");else if(X==="side_prompt_text_delta")$.onTextDelta?.(Y?.delta||"");else if(X==="side_prompt_done")G=Y;else if(X==="side_prompt_error")Z=Y}),Z){let X=Error(Z?.error||"Side prompt failed");throw X.payload=Z,X}return G}async function W7(_,$){let j=await fetch(l_+"/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let G=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(G.error||`HTTP ${j.status}`)}return j.json()}async function nE(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return n0(j)}async function pE(_,$,j){return n0("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function u1(_){return`${l_}/media/${_}`}function z7(_){return`${l_}/media/${_}/thumbnail`}async function M2(_){let $=await fetch(`${l_}/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function rE(_){let $=await fetch(`${l_}/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function O7(_){let $=await fetch(`${l_}/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function q6(_="",$=2,j=!1){let G=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return n0(G)}async function J7(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return n0($)}async function A7(_="all"){let $=`/workspace/index-status?scope=${encodeURIComponent(_||"all")}`;return n0($)}async function k7(_="all"){return n0("/workspace/reindex",{method:"POST",body:JSON.stringify({scope:_})})}async function y7(_,$=20000,j=null){let G=j?`&mode=${encodeURIComponent(j)}`:"",Z=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${G}`;return n0(Z)}async function M7(_){return n0(`/workspace/stat?path=${encodeURIComponent(_)}`)}async function dE(_,$){return n0("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function iE(_){return n0("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}function sE(_,$="",j={}){let G=new URLSearchParams;if($)G.set("path",$);if(j.overwrite)G.set("overwrite","1");let Z=G.toString();return Z?`${_}?${Z}`:_}function aE(){if(globalThis.crypto?.randomUUID)return globalThis.crypto.randomUUID();return`upload-${Date.now()}-${Math.random().toString(36).slice(2)}`}function tE(_,$,j,G){return new Promise((Z,X)=>{let Y=new XMLHttpRequest;Y.open("POST",l_+$);for(let[L,K]of Object.entries(j||{}))if(K!==void 0&&K!==null)Y.setRequestHeader(L,String(K));Y.upload.onprogress=(L)=>{if(typeof G==="function")G({loaded:L.lengthComputable?L.loaded:0,total:L.lengthComputable?L.total:_.size,lengthComputable:L.lengthComputable})},Y.onload=()=>{try{let L=Y.responseText?JSON.parse(Y.responseText):{};if(Y.status>=200&&Y.status<300)Z(L);else{let K=Error(L.error||`HTTP ${Y.status}`);K.status=Y.status,K.code=L.code,X(K)}}catch{let L=Error(`HTTP ${Y.status}`);L.status=Y.status,X(L)}},Y.onerror=()=>X(Error("Upload failed (network error)")),Y.ontimeout=()=>X(Error("Upload timed out")),Y.send(_)})}async function eE(_,$="",j={}){let G=aE(),Z=sE("/workspace/upload-chunk",$,j),X=Math.max(1,Math.min(X7,Number(j.chunkSize)||oE)),Y=Math.max(0,Number(_?.size)||0),L=Math.max(1,Math.ceil(Y/X)),K=0,q=null;for(let Q=0;Q<L;Q+=1){let V=Q*X,B=Math.min(Y,V+X),N=_.slice(V,B),U=N.size;if(q=await tE(N,Z,{"X-Upload-Id":G,"X-Chunk-Index":Q,"X-Chunk-Total":L,"X-File-Name":_?.name||"upload.bin","X-File-Size":Y},(D)=>{if(typeof j.onProgress!=="function")return;let E=Math.min(Y,K+(D?.loaded||0)),H=Y||1;j.onProgress({loaded:E,total:H,percent:Math.round(E/H*100),chunkIndex:Q,chunkTotal:L})}),K+=U,typeof j.onProgress==="function"){let D=Y||1,E=Y?K:D;j.onProgress({loaded:E,total:D,percent:Math.round(E/D*100),chunkIndex:Q+1,chunkTotal:L})}}return q}async function w2(_,$="",j={}){if(_?.size>X7){let G=(_.size/1048576).toFixed(0),Z=(X7/1048576).toFixed(0),X=Error(`File too large (${G} MB). Maximum upload size is ${Z} MB.`);throw X.code="file_too_large",X}return await eE(_,$,j)}async function w7(_,$,j=""){let G=await fetch(l_+"/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!G.ok){let Z=await G.json().catch(()=>({error:"Create failed"})),X=Error(Z.error||`HTTP ${G.status}`);throw X.status=G.status,X.code=Z.code,X}return G.json()}async function T7(_,$){let j=await fetch(l_+"/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let G=await j.json().catch(()=>({error:"Rename failed"})),Z=Error(G.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=G.code,Z}return j.json()}async function x7(_,$){let j=await fetch(l_+"/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let G=await j.json().catch(()=>({error:"Move failed"})),Z=Error(G.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=G.code,Z}return j.json()}async function I7(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return n0($,{method:"DELETE"})}async function K6(_,$=!1){return n0("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function V6(_,$={}){let j=new URLSearchParams({path:String(_||"")});if($.download)j.set("download","1");return`${l_}/workspace/raw?${j.toString()}`}function T2(_){return V6(_,{download:!0})}function x2(_,$=!1){let j=`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`;return`${l_}/workspace/download?${j}`}class I2{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource(l_+"/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(G)=>{this.markActivity(),this.onEvent(j,JSON.parse(G.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),$("ui_meters"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_working_indicator","extension_ui_working_visible","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let G=Math.max(this.cooldownUntil-j,0),Z=Math.max(this.reconnectDelay,G);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},Z),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}var l_="",X7=1073741824,oE=8388608;var f_=J_(()=>{X6()});function H5(_){let $=typeof _==="string"?_.trim():"";return $?$:null}function o1(_={}){if(typeof window>"u")return;let $=H5(_.section);try{if(window.__piclawSettingsOpenRequested=!0,$)window.__piclawSettingsRequestedSection=$;else delete window.__piclawSettingsRequestedSection}catch(j){console.debug("[settings-dialog-events] failed to record open request flags",j)}window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:$?{section:$}:void 0}))}function n7(){if(typeof window>"u")return null;return H5(window.__piclawSettingsRequestedSection)}function R2(){if(typeof window>"u")return{open:!1,section:null};let _=Boolean(window.__piclawSettingsOpenRequested),$=n7();try{window.__piclawSettingsOpenRequested=!1,delete window.__piclawSettingsRequestedSection}catch(j){console.debug("[settings-dialog-events] failed to clear open request flags",j)}return{open:_,section:$}}function r$({children:_,className:$=""}){let[j,G]=C(null);return u(()=>{if(typeof document>"u")return;let Z=document.createElement("div");return document.body.appendChild(Z),G(Z),()=>{try{Q$(null,Z)}finally{Z.remove()}}},[]),u(()=>{if(!j)return;j.className=$||"";return},[$,j]),e4(()=>{if(!j)return;Q$(_,j);return},[_,j]),null}var S2=J_(()=>{T0()});function d$(_){let $=T4.findIndex((j)=>j.id===_.id);if($>=0)T4[$]=_;else T4.push(_);T4.sort((j,G)=>(j.order??500)-(G.order??500))}function iX(_){let $=T4.findIndex((j)=>j.id===_);if($>=0)T4.splice($,1)}function oX(){return[...T4]}function p7(){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent("piclaw:settings-panes-changed"))}var T4;var E5=J_(()=>{T4=[]});function JD(_){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(x4,{detail:{enabled:Boolean(_)}}))}function tX(_){if(typeof fetch!=="function")return;V7({ui_meters:_}).catch(($)=>{console.debug("[meters] Failed to persist meters UI state.",$)})}function AD(_){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(g2,{detail:{collapsed:Boolean(_)}}))}function D6(_=!1){return F$(sX,_)}function eX(_=!1){return F$(aX,_)}function u2(_,$={}){let j=$.persist!==!1,G=$.persistServer!==!1,Z=Boolean(_);if(j)K_(sX,Z?"true":"false");if(G)tX({enabled:Z});return JD(Z),Z}function r7(_,$={}){let j=$.persist!==!1,G=$.persistServer!==!1,Z=Boolean(_);if(j)K_(aX,Z?"true":"false");if(G)tX({collapsed:Z});return AD(Z),Z}function d7(_){let $=typeof _?.mode==="string"?_.mode.trim().toLowerCase():"";if(typeof _?.enabled==="boolean")u2(Boolean(_.enabled),{persistServer:!1});else if($==="toggle"){let j=!D6(!1);u2(j,{persistServer:!1})}if(typeof _?.collapsed==="boolean")r7(Boolean(_.collapsed),{persistServer:!1})}var sX="piclaw_system_meters_enabled",aX="piclaw_system_meters_collapsed",x4="piclaw-meters-change",g2="piclaw-meters-collapsed-change";var b2=J_(()=>{f_()});function _Y(_,$){if(_===""||_===null||_===void 0)return $;let j=Number(_);return Number.isFinite(j)?j:$}function $Y(_,{min:$=-1/0,max:j=1/0}={}){let G=Number.isFinite(Number($))?Number($):-1/0,Z=Number.isFinite(Number(j))?Number(j):1/0;return Math.min(Z,Math.max(G,Number(_)))}function z$(_,{fallback:$=0,min:j=-1/0,max:G=1/0}={}){let Z=_Y(_,$);return $Y(Z,{min:j,max:G})}function kD(_,{direction:$=1,step:j=1,fallback:G=0,min:Z=-1/0,max:X=1/0}={}){let Y=z$(_,{fallback:G,min:Z,max:X}),L=Math.abs(_Y(j,1))||1,K=Number($)<0?-1:1;return $Y(Y+K*L,{min:Z,max:X})}function b_({value:_,min:$,max:j,step:G=1,fallback:Z,width:X="80px",disabled:Y=!1,label:L,onChange:K}){let q=Number.isFinite(Number(Z))?Number(Z):z$(_,{fallback:0,min:$,max:j}),[Q,V]=C(String(_??q)),B=g(!1);u(()=>{if(!B.current)V(String(_??q))},[_,q]);let N=f((D)=>{B.current=!1;let E=z$(D,{fallback:q,min:$,max:j});V(String(E)),K?.(E)},[q,$,j,K]),U=f((D)=>{B.current=!1;let E=kD(_,{direction:D,step:G,fallback:q,min:$,max:j});V(String(E)),K?.(E)},[q,j,$,K,G,_]);return F`
        <span class="settings-number-stepper">
            <button
                type="button"
                class="settings-number-step-btn"
                aria-label=${`Decrease ${L||"value"}`}
                title=${`Decrease ${L||"value"}`}
                disabled=${Y}
                onClick=${()=>U(-1)}
            >−</button>
            <input
                class="settings-number-input"
                type="text"
                inputmode="numeric"
                pattern="[0-9]*"
                value=${Q}
                disabled=${Y}
                style=${`width:${X}`}
                onInput=${(D)=>{B.current=!0,V(D.target.value)}}
                onBlur=${(D)=>N(D.target.value)}
                onKeyDown=${(D)=>{if(D.key==="Enter")D.preventDefault(),N(D.target.value),D.target.blur()}}
            />
            <button
                type="button"
                class="settings-number-step-btn"
                aria-label=${`Increase ${L||"value"}`}
                title=${`Increase ${L||"value"}`}
                disabled=${Y}
                onClick=${()=>U(1)}
            >+</button>
        </span>
    `}var I4=J_(()=>{T0()});function jY(_){let $=String(_||"").trim();if(!$)return"";if($.startsWith("http://")||$.startsWith("https://")||$.startsWith("data:")||$.startsWith("blob:"))return $;if($.startsWith("/workspace/"))return`/workspace/file?path=${encodeURIComponent($.slice(11))}`;if($.startsWith("/"))return"";if(/^[a-zA-Z]:[\\/]/.test($))return"";if($.startsWith("\\\\"))return"";if($.includes("\\"))return"";return`/workspace/file?path=${encodeURIComponent($.replace(/^\.\//,""))}`}function GY({value:_,onChange:$}){let j=g(null),[G,Z]=C(jY(_));u(()=>{Z(jY(_))},[_]);let X=f((Y)=>{let L=Y.target.files?.[0];if(!L)return;let K=new FileReader;K.onload=()=>{let q=K.result;Z(q),$?.(q)},K.readAsDataURL(L)},[$]);return F`
        <div class="settings-avatar-inline" onClick=${()=>j.current?.click()} title="Click to upload">
            ${G?F`<img src=${G} alt="avatar" />`:F`<span class="settings-avatar-placeholder">+</span>`}
            <input type="file" accept="image/*" ref=${j} style="display:none" onChange=${X} />
        </div>
    `}function ZY(_={}){return{userName:_.userName||"",userAvatar:_.userAvatar||"",assistantName:_.assistantName||"",assistantAvatar:_.assistantAvatar||"",composeUploadLimitMb:_.composeUploadLimitMb??32,workspaceUploadLimitMb:_.workspaceUploadLimitMb??256}}function i7({settingsData:_,setStatus:$,mergeSettingsData:j}){let[G,Z]=C(""),[X,Y]=C(""),[L,K]=C(""),[q,Q]=C(""),[V,B]=C(32),[N,U]=C(256),[D,E]=C(""),[H,M]=C(!1),[J,O]=C(!1),[T,I]=C(()=>D6(!1)),[A,k]=C(!1),z=g(""),W=g(null),y=g(!0);u(()=>{return y.current=!0,()=>{y.current=!1}},[]);let x=f((r)=>{let b=ZY(r);Z(b.userName),Y(b.userAvatar),K(b.assistantName),Q(b.assistantAvatar),B(b.composeUploadLimitMb),U(b.workspaceUploadLimitMb),E(r?.widgetToken||""),z.current=JSON.stringify(b)},[]);u(()=>{x(_||{})},[_,x]),u(()=>{let r=(b)=>{I(Boolean(b?.detail?.enabled))};return window.addEventListener(x4,r),()=>window.removeEventListener(x4,r)},[]);let P=G0(()=>JSON.stringify(ZY({userName:G,userAvatar:X,assistantName:L,assistantAvatar:q,composeUploadLimitMb:V,workspaceUploadLimitMb:N})),[G,X,L,q,V,N]);u(()=>{if(P===z.current)return;if(W.current)clearTimeout(W.current);return W.current=setTimeout(async()=>{if(!y.current)return;let r=document.activeElement;if(r&&r.closest?.(".settings-number-stepper"))return;try{let b=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:P}),e=await b.json().catch(()=>({}));if(!y.current)return;if(!b.ok||!e?.ok||!e?.settings)return;z.current=P,j?.(e.settings),k(!0),setTimeout(()=>{if(y.current)k(!1)},4000)}catch(b){console.warn("[settings/general] Failed to persist general settings snapshot.",b)}},800),()=>{if(W.current)clearTimeout(W.current)}},[P,j]);let S=_?.instanceTotp||{configured:!1,issuer:L||"Piclaw",label:G?`${L||"Piclaw"}:${G}`:L||"Piclaw",secret:"",otpauth:"",qrSvg:""},v=f(async()=>{if(!D)return;try{await navigator.clipboard?.writeText(D),M(!0),setTimeout(()=>{if(y.current)M(!1)},3000)}catch(r){console.warn("[settings/general] Failed to copy widget token.",r)}},[D]),l=f(async()=>{if(J)return;if(!confirm("Regenerate the widget token? Existing macOS widgets using the old token will stop updating."))return;O(!0);try{let r=await fetch("/agent/settings/widget-token/regenerate",{method:"POST"}),b=await r.json().catch(()=>({}));if(!r.ok||!b?.ok||!b?.settings)throw Error(b?.error||"Failed to regenerate widget token.");E(b.settings.widgetToken||""),j?.(b.settings),k(!0),setTimeout(()=>{if(y.current)k(!1)},4000)}catch(r){console.warn("[settings/general] Failed to regenerate widget token.",r)}finally{if(y.current)O(!1)}},[J,j]),h=typeof window<"u"&&window.isSecureContext;return F`
        <div class="settings-section">
            ${A&&F`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Settings applied. Changes take effect on the next turn.
                </div>
            `}
            <h3>Identity</h3>
            <div class="settings-row">
                <label>User</label>
                <${GY} value=${X} onChange=${Y} />
                <input type="text" value=${G} onInput=${(r)=>Z(r.target.value)} placeholder="Your name" />
            </div>
            <div class="settings-row">
                <label>Agent</label>
                <${GY} value=${q} onChange=${Q} />
                <input type="text" value=${L} onInput=${(r)=>K(r.target.value)} placeholder="Agent name" />
            </div>

            <h3 style="margin-top:20px">Notifications</h3>
            ${h?F`
                <div class="settings-row">
                    <label>Browser notifications</label>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <span class="settings-hint" style="margin:0">
                            Use the 🔔 bell button in the compose bar to enable/disable notifications.
                            Web Push requires HTTPS or localhost.
                        </span>
                    </div>
                </div>
            `:F`
                <div class="settings-row">
                    <label>Browser notifications</label>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <span class="settings-hint" style="margin:0; color: var(--error-color, #e55)">
                            ⚠ Not available — requires a secure context (HTTPS or localhost).
                            Access via SSH tunnel or reverse proxy with TLS to enable.
                        </span>
                    </div>
                </div>
            `}

            <h3 style="margin-top:20px">Display</h3>
            <div class="settings-row">
                <label>System meters</label>
                <div style="display:flex; align-items:center; gap:10px;">
                    <input type="checkbox" checked=${T}
                        onChange=${()=>{let r=u2(!T);I(r)}} />
                    <span class="settings-hint" style="margin:0">CPU/memory/network meters in the status bar. This browser only.</span>
                </div>
            </div>

            <h3 style="margin-top:20px">Instance Configuration</h3>
            <div class="settings-row">
                <label>Compose upload (MB)</label>
                <${b_}
                    label="compose upload limit"
                    value=${V}
                    min=${1}
                    max=${512}
                    fallback=${32}
                    width="80px"
                    onChange=${B}
                />
                <span class="settings-hint" style="margin:0">chat/media attachments</span>
            </div>
            <div class="settings-row">
                <label>Workspace upload (MB)</label>
                <${b_}
                    label="workspace upload limit"
                    value=${N}
                    min=${1}
                    max=${1024}
                    fallback=${256}
                    width="80px"
                    onChange=${U}
                />
                <span class="settings-hint" style="margin:0">defaults to 256 MB; chunked uploads allow up to 1 GB</span>
            </div>

            <h3 style="margin-top:20px">Authentication</h3>
            <div class="settings-row settings-row-vertical">
                <label>Widget bearer token</label>
                <div style="display:flex; gap:8px; align-items:center; width:100%;">
                    <input type="password" readonly value=${D||""} style="flex:1; min-width:0; font-family: var(--mono-font, monospace);" />
                    <button type="button" onClick=${v} disabled=${!D}>${H?"Copied":"Copy"}</button>
                    <button type="button" onClick=${l} disabled=${J}>${J?"Regenerating…":"Regenerate"}</button>
                </div>
                <span class="settings-hint" style="margin:6px 0 0 0;">
                    Read-only token for <code>GET /api/state</code> and <code>GET /api/state/events</code>. Use as <code>Authorization: Bearer …</code>.
                </span>
            </div>
            <div class="settings-totp-panel">
                <div class="settings-totp-header">
                    <div>
                        <strong>TOTP setup QR</strong>
                        <div class="settings-hint" style="margin:6px 0 0 0;">
                            ${S.configured?"Current web-login authenticator secret. Scan this QR to add another authenticator device.":"TOTP is not configured for this instance yet, so no setup QR is available."}
                        </div>
                    </div>
                </div>
                ${S.configured?F`
                    <div class="settings-totp-grid">
                        <div class="settings-totp-qr" dangerouslySetInnerHTML=${{__html:S.qrSvg}}></div>
                        <div class="settings-totp-meta">
                            <div class="settings-row settings-row-vertical">
                                <label>Issuer</label>
                                <input type="text" readonly value=${S.issuer||""} />
                            </div>
                            <div class="settings-row settings-row-vertical">
                                <label>Label</label>
                                <input type="text" readonly value=${S.label||""} />
                            </div>
                            <div class="settings-row settings-row-vertical">
                                <label>Secret</label>
                                <input type="text" readonly value=${S.secret||""} />
                            </div>
                        </div>
                    </div>
                `:null}
            </div>
        </div>
    `}var XY=J_(()=>{T0();b2();I4()});var LY={};j1(LY,{SessionsSection:()=>yD});function YY(_={}){return{sessionAutoRotate:_.sessionAutoRotate!==!1,sessionMaxSizeMb:_.sessionMaxSizeMb??16,sessionMaxLines:_.sessionMaxLines??4000,sessionMaxCompactions:_.sessionMaxCompactions??3,sessionIsolation:_.sessionIsolation||"none",toolUseBudget:_.toolUseBudget??64}}function yD({settingsData:_,setStatus:$,mergeSettingsData:j}){let[G,Z]=C(!0),[X,Y]=C(16),[L,K]=C(4000),[q,Q]=C(3),[V,B]=C(64),[N,U]=C("none"),[D,E]=C(!1),H=g(""),M=g(null),J=g(!0);u(()=>{return J.current=!0,()=>{J.current=!1}},[]);let O=f((I)=>{let A=YY(I);Z(A.sessionAutoRotate),Y(A.sessionMaxSizeMb),K(A.sessionMaxLines),Q(A.sessionMaxCompactions),B(A.toolUseBudget),U(A.sessionIsolation),H.current=JSON.stringify(A)},[]);u(()=>{O(_||{})},[_,O]);let T=G0(()=>JSON.stringify(YY({sessionAutoRotate:G,sessionMaxSizeMb:X,sessionMaxLines:L,sessionMaxCompactions:q,toolUseBudget:V,sessionIsolation:N})),[G,X,L,q,V,N]);return u(()=>{if(T===H.current)return;if(M.current)clearTimeout(M.current);return M.current=setTimeout(async()=>{if(!J.current)return;let I=document.activeElement;if(I&&I.closest?.(".settings-number-stepper"))return;try{let A=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:T}),k=await A.json().catch(()=>({}));if(!J.current)return;if(!A.ok||!k?.ok||!k?.settings)return;H.current=T,j?.(k.settings),E(!0),setTimeout(()=>{if(J.current)E(!1)},4000)}catch(A){console.warn("[settings/sessions] Failed to persist session settings.",A)}},800),()=>{if(M.current)clearTimeout(M.current)}},[T,j]),F`
        <div class="settings-section">
            ${D&&F`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Settings applied. Changes take effect on the next turn.
                </div>
            `}
            <h3>Session Lifecycle</h3>
            <div class="settings-row">
                <label>Auto-rotate sessions</label>
                <input type="checkbox" checked=${G} onChange=${(I)=>Z(I.target.checked)} />
            </div>
            <div class="settings-row">
                <label>Max session size (MB)</label>
                <${b_}
                    label="max session size"
                    value=${X}
                    min=${1}
                    max=${256}
                    fallback=${32}
                    width="80px"
                    onChange=${Y}
                />
            </div>

            <h3 style="margin-top:20px">Agent Behaviour</h3>
            <div class="settings-row">
                <label>Tool use budget</label>
                <${b_}
                    label="tool use budget"
                    value=${V}
                    min=${8}
                    max=${512}
                    fallback=${64}
                    width="80px"
                    onChange=${B}
                />
                <span class="settings-hint" style="margin:0">max tool-call messages per turn</span>
            </div>
            <div class="settings-row">
                <label>Session isolation</label>
                <select value=${N} onChange=${(I)=>U(I.target.value)}>
                    <option value="none">None — full cross-session visibility</option>
                    <option value="summary">Summary — tools visible, no arguments</option>
                    <option value="full">Full — sessions cannot see each other</option>
                </select>
            </div>
        </div>
    `}var qY=J_(()=>{T0();I4()});var KY={};j1(KY,{CompactionSection:()=>wD});function MD(_={}){return{compactionTimeoutSec:_.compactionTimeoutSec??180,compactionBackoffBaseMin:_.compactionBackoffBaseMin??15,compactionBackoffMaxMin:_.compactionBackoffMaxMin??360,compactionThresholdPercent:_.compactionThresholdPercent??75,compactionBackoffDecayFactor:_.compactionBackoffDecayFactor??0.5,progressWatchdogEnabled:Boolean(_.progressWatchdogEnabled??!1),progressWatchdogTimeoutSec:_.progressWatchdogTimeoutSec??120,compactionBackoffs:Array.isArray(_.compactionBackoffs)?_.compactionBackoffs:[],progressWatchdogPhases:Array.isArray(_.progressWatchdogPhases)?_.progressWatchdogPhases:[]}}function o7(_){let $=String(_||"").trim();if(!$)return"—";let j=new Date($);if(Number.isNaN(j.getTime()))return $;return j.toLocaleString()}function wD({settingsData:_,setStatus:$,mergeSettingsData:j}){let[G,Z]=C(180),[X,Y]=C(15),[L,K]=C(360),[q,Q]=C(75),[V,B]=C(0.5),[N,U]=C(!1),[D,E]=C(120),[H,M]=C([]),[J,O]=C([]),[T,I]=C(!1),A=g(""),k=g(null),z=g(!0);u(()=>{return z.current=!0,()=>{z.current=!1}},[]);let W=f((P)=>{let S=MD(P);Z(S.compactionTimeoutSec),Y(S.compactionBackoffBaseMin),K(S.compactionBackoffMaxMin),Q(S.compactionThresholdPercent),B(S.compactionBackoffDecayFactor),U(S.progressWatchdogEnabled),E(S.progressWatchdogTimeoutSec),M(S.compactionBackoffs),O(S.progressWatchdogPhases),A.current=JSON.stringify({compactionTimeoutSec:S.compactionTimeoutSec,compactionBackoffBaseMin:S.compactionBackoffBaseMin,compactionBackoffMaxMin:S.compactionBackoffMaxMin,compactionThresholdPercent:S.compactionThresholdPercent,compactionBackoffDecayFactor:S.compactionBackoffDecayFactor,progressWatchdogEnabled:S.progressWatchdogEnabled,progressWatchdogTimeoutSec:S.progressWatchdogTimeoutSec})},[]);u(()=>{W(_||{})},[_,W]);let y=G0(()=>JSON.stringify({compactionTimeoutSec:G,compactionBackoffBaseMin:X,compactionBackoffMaxMin:L,compactionThresholdPercent:q,compactionBackoffDecayFactor:V,progressWatchdogEnabled:N,progressWatchdogTimeoutSec:D}),[G,X,L,q,V,N,D]);u(()=>{if(y===A.current)return;if(k.current)clearTimeout(k.current);return k.current=setTimeout(async()=>{if(!z.current)return;let P=document.activeElement;if(P&&P.closest?.(".settings-number-stepper"))return;try{$?.("Saving compaction settings…","info");let S=await fetch("/agent/settings/compaction",{method:"POST",headers:{"Content-Type":"application/json"},body:y}),v=await S.json().catch(()=>({}));if(!z.current)return;if(!S.ok||!v?.ok||!v?.settings){$?.(v?.error||"Failed to save compaction settings.","error");return}A.current=y,j?.(v.settings),W({..._||{},...v.settings||{}}),$?.("Compaction settings saved.","success"),I(!0),setTimeout(()=>{if(z.current)I(!1),$?.(null)},4000)}catch(S){if(console.warn("[settings/compaction] Failed to persist compaction settings.",S),z.current)$?.("Failed to save compaction settings.","error")}},800),()=>{if(k.current)clearTimeout(k.current)}},[y,j,$,W,_]);let x=f(async(P)=>{try{$?.(`Clearing compaction suppression for ${P}…`,"info");let S=await fetch("/agent/settings/compaction/reset-backoff",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chatJid:P})}),v=await S.json().catch(()=>({}));if(!S.ok||!v?.ok||!v?.settings){$?.(v?.error||"Failed to clear compaction suppression.","error");return}j?.(v.settings),W({..._||{},...v.settings||{}}),$?.(`Cleared compaction suppression for ${P}.`,"success")}catch(S){console.warn("[settings/compaction] Failed to clear compaction suppression.",S),$?.("Failed to clear compaction suppression.","error")}},[W,j,$,_]);return F`
        <div class="settings-section">
            ${T&&F`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Compaction settings applied. Existing turns keep their current timers; new turns use the updated values.
                </div>
            `}

            <h3>Automatic compaction</h3>
            <div class="settings-row">
                <label>Compaction threshold (%)</label>
                <${b_}
                    label="compaction threshold"
                    value=${q}
                    min=${10}
                    max=${95}
                    fallback=${75}
                    width="80px"
                    onChange=${Q}
                />
                <span class="settings-hint" style="margin:0">auto-compact when context exceeds this % of window</span>
            </div>
            <div class="settings-row">
                <label>Compaction timeout (sec)</label>
                <${b_}
                    label="compaction timeout"
                    value=${G}
                    min=${1}
                    max=${3600}
                    fallback=${180}
                    width="90px"
                    onChange=${Z}
                />
                <span class="settings-hint" style="margin:0">Abort a stuck pre-prompt/manual compaction instead of hanging forever.</span>
            </div>
            <div class="settings-row">
                <label>Failure backoff base (min)</label>
                <${b_}
                    label="compaction backoff base"
                    value=${X}
                    min=${1}
                    max=${1440}
                    fallback=${15}
                    width="90px"
                    onChange=${Y}
                />
                <span class="settings-hint" style="margin:0">First suppression window after a compaction failure.</span>
            </div>
            <div class="settings-row">
                <label>Failure backoff max (min)</label>
                <${b_}
                    label="compaction backoff max"
                    value=${L}
                    min=${1}
                    max=${10080}
                    fallback=${360}
                    width="90px"
                    onChange=${K}
                />
                <span class="settings-hint" style="margin:0">Upper bound for exponential suppression after repeated failures.</span>
            </div>

            <div class="settings-row">
                <label>Backoff decay factor</label>
                <${b_}
                    label="backoff decay factor"
                    value=${Math.round(V*100)}
                    min=${10}
                    max=${100}
                    fallback=${50}
                    width="80px"
                    onChange=${(P)=>B(P/100)}
                />
                <span class="settings-hint" style="margin:0">% — halves backoff after each successful compaction</span>
            </div>

            <h3 style="margin-top:20px">Stall watchdog</h3>
            <div class="settings-row">
                <label>Enable watchdog</label>
                <div style="display:flex; align-items:center; gap:10px;">
                    <input type="checkbox" checked=${N} onChange=${(P)=>U(Boolean(P.target.checked))} />
                    <span class="settings-hint" style="margin:0">Disabled by default. When enabled, a helper process terminates the runtime if an active phase stops heartbeating.</span>
                </div>
            </div>
            <div class="settings-row">
                <label>Watchdog timeout (sec)</label>
                <${b_}
                    label="watchdog timeout"
                    value=${D}
                    min=${0}
                    max=${3600}
                    fallback=${120}
                    width="90px"
                    disabled=${!N}
                    onChange=${E}
                />
                <span class="settings-hint" style="margin:0">How long an active phase can go without a heartbeat before the watchdog kills the runtime.</span>
            </div>

            <h3 style="margin-top:20px">Active compaction suppressions</h3>
            ${H.length===0?F`
                <p class="settings-hint">No chats are currently under compaction backoff.</p>
            `:F`
                <div class="settings-table-wrapper">
                    <table class="settings-table">
                        <thead>
                            <tr>
                                <th>Chat</th>
                                <th>Failures</th>
                                <th>Suppressed until</th>
                                <th>Last error</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            ${H.map((P)=>F`
                                <tr>
                                    <td><code>${P.chatJid}</code></td>
                                    <td>${P.failureCount}</td>
                                    <td>${o7(P.backoffUntil)}</td>
                                    <td title=${P.lastErrorMessage||""}>${P.lastErrorMessage||"—"}</td>
                                    <td>
                                        <button class="settings-secondary-btn" onClick=${()=>x(P.chatJid)}>
                                            Clear
                                        </button>
                                    </td>
                                </tr>
                            `)}
                        </tbody>
                    </table>
                </div>
            `}

            <h3 style="margin-top:20px">Live watchdog phases</h3>
            ${J.length===0?F`
                <p class="settings-hint">No active tracked phases right now.</p>
            `:F`
                <div class="settings-table-wrapper">
                    <table class="settings-table">
                        <thead>
                            <tr>
                                <th>Chat</th>
                                <th>Phase</th>
                                <th>Started</th>
                                <th>Last heartbeat</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${J.map((P)=>F`
                                <tr>
                                    <td><code>${P.chatJid}</code></td>
                                    <td>${P.phase}</td>
                                    <td>${o7(P.startedAt)}</td>
                                    <td>${o7(P.lastProgressAt)}</td>
                                </tr>
                            `)}
                        </tbody>
                    </table>
                </div>
            `}
        </div>
    `}var VY=J_(()=>{T0();I4()});function NY(_){let $=String(_||"").trim().toLowerCase();if(!$)return null;let j=ID[$]||$;if(/^f(?:[1-9]|1[0-2])$/.test(j))return j;if(CD.has(j))return j;if(j.length===1)return j;if(/^[a-z0-9]+$/.test(j))return j;return null}function D5(_){let $=String(_||"").trim();if(!$)return null;let j=$.split("+").map((X)=>X.trim()).filter(Boolean);if(!j.length)return null;let G={ctrl:!1,meta:!1,alt:!1,shift:!1,key:""};for(let X of j){let Y=X.toLowerCase(),L=xD[Y];if(L){G[L]=!0;continue}if(G.key)return null;let K=NY(X);if(!K||K==="escape")return null;G.key=K}if(!G.key)return null;let Z=[];if(G.ctrl)Z.push("ctrl");if(G.meta)Z.push("meta");if(G.alt)Z.push("alt");if(G.shift)Z.push("shift");return Z.push(G.key),Z.join("+")}function BY(_){return String(_||"").split(/[\n,]/).map(($)=>D5($)).filter(($)=>Boolean($))}function o$(_){return _.join(", ")}function a7(){let _=U2(QY);if(!_||typeof _!=="object")return{};let $={};for(let j of i$){let G=_[j.id];if(!Array.isArray(G))continue;let Z=G.map((X)=>D5(String(X||""))).filter((X)=>Boolean(X));$[j.id]=[...new Set(Z)]}return $}function s7(_){if(K_(QY,JSON.stringify(_)),typeof window<"u")window.dispatchEvent(new CustomEvent("piclaw:keyboard-shortcuts-changed",{detail:{config:_}}))}function FY(_){return TD.get(_)}function W6(_){let $=a7()[_];if(Array.isArray($))return $;return[...FY(_).defaultBindings]}function UY(_,$){let j=a7(),G=FY(_).defaultBindings,Z=[...new Set($.map((X)=>D5(X)).filter((X)=>Boolean(X)))];if(Z.length===G.length&&Z.every((X,Y)=>X===G[Y]))delete j[_];else j[_]=Z;s7(j)}function t7(_){if(!_){s7({});return}let $=a7();delete $[_],s7($)}function v2(){let _={};for(let $ of i$)_[$.id]=W6($.id);return _}function fD(_){let $=typeof _==="string"?_:"";if(!$)return"";if($.length===1)return $.toLowerCase();return NY($)||$.toLowerCase()}function PD(_){let $=D5(_);if(!$)return null;let j={ctrl:!1,meta:!1,alt:!1,shift:!1,key:""};for(let G of $.split("+")){if(G==="ctrl"||G==="meta"||G==="alt"||G==="shift"){j[G]=!0;continue}j.key=G}return j.key?j:null}function RD(_,$){let j=PD($);if(!j)return!1;if(fD(_?.key)!==j.key)return!1;let Z=!j.shift&&j.key.length===1&&/[^a-z0-9]/i.test(j.key);return Boolean(_?.ctrlKey)===j.ctrl&&Boolean(_?.metaKey)===j.meta&&Boolean(_?.altKey)===j.alt&&(Z||Boolean(_?.shiftKey)===j.shift)}function O$(_,$){return W6($).some((j)=>RD(_,j))}var QY="piclaw_keyboard_shortcuts_v1",i$,TD,xD,ID,CD;var m2=J_(()=>{i$=[{id:"openHelp",label:"Open keyboard help",description:"Open Settings → Keyboard. Default: question mark and quote when focus is outside compose and other editable fields.",defaultBindings:["?",'"']},{id:"openSettings",label:"Open settings",description:"Open the settings dialog.",defaultBindings:["ctrl+,","meta+,","alt+,"]},{id:"previousChat",label:"Previous session",description:"Switch to the previous visible chat/session.",defaultBindings:["["]},{id:"nextChat",label:"Next session",description:"Switch to the next visible chat/session.",defaultBindings:["]"]},{id:"toggleDock",label:"Toggle dock",description:"Show or hide the bottom dock panes.",defaultBindings:["ctrl+`"]},{id:"toggleZenMode",label:"Toggle zen mode",description:"Collapse surrounding chrome for a focused chat view.",defaultBindings:["ctrl+shift+z","meta+shift+z"]}],TD=new Map(i$.map((_)=>[_.id,_])),xD={cmd:"meta",command:"meta",meta:"meta",super:"meta",ctrl:"ctrl",control:"ctrl",alt:"alt",option:"alt",shift:"shift"},ID={esc:"escape",return:"enter",spacebar:"space"},CD=new Set(["tab","enter","space","backspace","delete","insert","clear","home","end","pageup","pagedown","up","down","left","right"])});var HY={};j1(HY,{KeyboardSection:()=>uD});function SD(_,$,j){let G=String(_||"").trim().toLowerCase();if(!G)return!0;return[$.label,$.description,j,...$.defaultBindings||[]].some((Z)=>String(Z||"").toLowerCase().includes(G))}function uD({filter:_="",setStatus:$}){let[j,G]=C(()=>{let K=v2();return Object.fromEntries(Object.entries(K).map(([q,Q])=>[q,o$(Q)]))});u(()=>{let K=()=>{let q=v2();G(Object.fromEntries(Object.entries(q).map(([Q,V])=>[Q,o$(V)])))};return window.addEventListener("piclaw:keyboard-shortcuts-changed",K),()=>window.removeEventListener("piclaw:keyboard-shortcuts-changed",K)},[]);let Z=G0(()=>i$.filter((K)=>{let q=String(j[K.id]||"");return SD(_,K,q)}),[j,_]),X=(K)=>{let q=String(j[K]||"").trim(),V=(q?q.split(/[\n,]/).map((N)=>N.trim()).filter(Boolean):[]).filter((N)=>!D5(N));if(V.length>0){$?.(`Invalid shortcut: ${V[0]}. Escape is reserved and cannot be rebound.`,"error");return}let B=BY(q);UY(K,B),G((N)=>({...N,[K]:o$(W6(K))})),$?.("Keyboard shortcuts saved.","success")},Y=(K)=>{t7(K),G((q)=>({...q,[K]:o$(W6(K))})),$?.("Keyboard shortcut reset to default.","success")};return F`
        <div class="settings-section">
            <h3>Keyboard</h3>
            <p class="settings-hint">
                Customize app-wide shortcuts as comma-separated bindings. Changes apply immediately.
                <code>Escape</code> is reserved for dismiss/abort and cannot be rebound.
            </p>
            <p class="settings-hint">
                <code>/help</code> and typing <code>"</code> outside the compose box open this pane.
            </p>

            <div class="settings-row" style="align-items:center; gap:10px; margin-bottom:18px; justify-content:flex-end;">
                <button class="settings-addon-btn" style="min-width:180px; height:40px; font-size:14px;" onClick=${()=>{t7();let K=v2();G(Object.fromEntries(Object.entries(K).map(([q,Q])=>[q,o$(Q)]))),$?.("Keyboard shortcuts reset to defaults.","success")}}>Reset all to defaults</button>
            </div>

            <div class="settings-shortcut-list" style="display:grid; gap:16px;">
                ${Z.map((K)=>F`
                    <div class="settings-shortcut-card" key=${K.id} style="display:grid; grid-template-columns:minmax(240px, 1.25fr) minmax(320px, 1fr); gap:18px; align-items:start; padding:18px 20px; border:1px solid var(--border-color, rgba(120,120,120,.22)); border-radius:16px; background:var(--panel-bg, rgba(255,255,255,.04));">
                        <div class="settings-shortcut-copy" style="min-width:0;">
                            <div class="settings-shortcut-title" style="font-size:17px; font-weight:700; line-height:1.3;">${K.label}</div>
                            <div class="settings-hint" style="margin:6px 0 0 0; font-size:14px; line-height:1.5;">${K.description}</div>
                            <div class="settings-shortcut-default" style="margin-top:10px; font-size:13px; color:var(--text-secondary);">Default: <code style="font-size:13px;">${o$(K.defaultBindings)}</code></div>
                        </div>
                        <div class="settings-shortcut-controls" style="display:grid; gap:10px; min-width:0;">
                            <input
                                type="text"
                                value=${j[K.id]||""}
                                placeholder=${o$(K.defaultBindings)}
                                onInput=${(q)=>G((Q)=>({...Q,[K.id]:q.target.value}))}
                                style="width:100%; min-height:46px; padding:10px 14px; font-size:16px; line-height:1.35; font-family:var(--font-mono, ui-monospace, monospace); border-radius:12px;"
                            />
                            <div class="settings-shortcut-actions" style="display:flex; justify-content:flex-end; align-items:center; gap:10px; flex-wrap:wrap;">
                                <button class="settings-addon-btn settings-addon-btn-install" style="min-width:96px; height:40px; font-size:14px;" onClick=${()=>X(K.id)}>Save</button>
                                <button class="settings-addon-btn" style="min-width:96px; height:40px; font-size:14px;" onClick=${()=>Y(K.id)}>Default</button>
                            </div>
                        </div>
                    </div>
                `)}
                ${Z.length===0&&F`<div class="settings-hint">No shortcuts match this filter.</div>`}
            </div>
        </div>
    `}var EY=J_(()=>{T0();m2()});function DY(_,$=e7){let j=Number(_);if(!Number.isFinite(j))return $;return Math.min(300,Math.max(15,Math.round(j)))}function WY(_,$=_9){let j=Number(_);if(!Number.isFinite(j))return $;return Math.min(8,Math.max(0,Math.round(j)))}function W5(){return{refreshIntervalSec:DY(D4(l2,e7),e7),folderPreviewDepth:WY(D4(h2,_9),_9)}}function zY(_={}){let $=W5(),j={refreshIntervalSec:DY(Object.prototype.hasOwnProperty.call(_,"refreshIntervalSec")?_.refreshIntervalSec:$.refreshIntervalSec,$.refreshIntervalSec),folderPreviewDepth:WY(Object.prototype.hasOwnProperty.call(_,"folderPreviewDepth")?_.folderPreviewDepth:$.folderPreviewDepth,$.folderPreviewDepth)};if(K_(l2,String(j.refreshIntervalSec)),K_(h2,String(j.folderPreviewDepth)),typeof window<"u")window.dispatchEvent(new CustomEvent(c2,{detail:{settings:j}}));return j}var c2="piclaw:workspace-client-settings-updated",l2="workspaceRefreshIntervalSec",h2="workspaceFolderPreviewDepth",e7=60,_9=3;var $9=()=>{};var JY={};j1(JY,{WorkspaceSection:()=>gD});function OY(_={}){let $=_.workspaceSettings||{};return{webTerminalEnabled:$.webTerminalEnabled!==!1,vncAllowDirect:$.vncAllowDirect!==!1,treeMaxDepth:$.treeMaxDepth??4,treeMaxEntries:$.treeMaxEntries??5000}}function gD({settingsData:_,setStatus:$,mergeSettingsData:j}){let[G,Z]=C(!0),[X,Y]=C(!0),[L,K]=C(4),[q,Q]=C(5000),[V,B]=C(60),[N,U]=C(3),[D,E]=C(!1),[H,M]=C(!1),J=g(""),O=g(null),T=g(null),I=g(null),A=g(!0);u(()=>{return A.current=!0,()=>{if(A.current=!1,O.current)clearTimeout(O.current);if(T.current)clearTimeout(T.current);if(I.current)clearTimeout(I.current)}},[]);let k=f((y)=>{let x=OY(y),P=W5();Z(x.webTerminalEnabled),Y(x.vncAllowDirect),K(x.treeMaxDepth),Q(x.treeMaxEntries),B(P.refreshIntervalSec),U(P.folderPreviewDepth),J.current=JSON.stringify(x)},[]);u(()=>{k(_||{})},[_,k]);let z=G0(()=>JSON.stringify(OY({workspaceSettings:{webTerminalEnabled:G,vncAllowDirect:X,treeMaxDepth:L,treeMaxEntries:q}})),[G,X,L,q]);u(()=>{if(z===J.current)return;if(O.current)clearTimeout(O.current);return O.current=setTimeout(async()=>{if(!A.current)return;let y=document.activeElement;if(y&&y.closest?.(".settings-number-stepper"))return;try{let x=await N7(JSON.parse(z));if(!A.current||!x?.ok||!x?.settings)return;if(J.current=z,j?.({workspaceSettings:x.settings}),$?.(null),E(!0),T.current)clearTimeout(T.current);T.current=setTimeout(()=>{if(A.current)E(!1)},4000)}catch(x){$?.(String(x?.message||x),"error")}},800),()=>{if(O.current)clearTimeout(O.current)}},[z,j,$]);let W=f((y)=>{let x=zY(y);if(B(x.refreshIntervalSec),U(x.folderPreviewDepth),M(!0),I.current)clearTimeout(I.current);I.current=setTimeout(()=>{if(A.current)M(!1)},3000)},[]);return F`
        <div class="settings-section">
            ${D&&F`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Workspace settings applied. Server-side limits affect new workspace requests immediately.
                </div>
            `}
            ${H&&F`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Browser workspace settings applied immediately in this tab.
                </div>
            `}

            <h3>Access</h3>
            <div class="settings-row">
                <label>Enable web terminal</label>
                <input type="checkbox" checked=${G} onChange=${(y)=>Z(y.target.checked)} />
            </div>
            <div class="settings-row">
                <label>Allow direct VNC targets</label>
                <input type="checkbox" checked=${X} onChange=${(y)=>Y(y.target.checked)} />
            </div>
            <p class="settings-hint">Terminal access updates immediately. Direct VNC target policy applies to new VNC requests.</p>

            <h3 style="margin-top:20px">Server scan guardrails</h3>
            <div class="settings-row">
                <label>Max tree depth</label>
                <${b_}
                    label="workspace tree max depth"
                    value=${L}
                    min=${1}
                    max=${8}
                    fallback=${4}
                    width="80px"
                    onChange=${K}
                />
                <span class="settings-hint" style="margin:0">caps all <code>/workspace/tree</code> requests</span>
            </div>
            <div class="settings-row">
                <label>Max entries per scan</label>
                <${b_}
                    label="workspace tree max entries"
                    value=${q}
                    min=${250}
                    max=${5000}
                    step=${250}
                    fallback=${5000}
                    width="92px"
                    onChange=${Q}
                />
                <span class="settings-hint" style="margin:0">truncate oversized tree walks earlier</span>
            </div>

            <h3 style="margin-top:20px">This browser</h3>
            <div class="settings-row">
                <label>Refresh interval (seconds)</label>
                <${b_}
                    label="workspace refresh interval"
                    value=${V}
                    min=${15}
                    max=${300}
                    step=${15}
                    fallback=${60}
                    width="92px"
                    onChange=${(y)=>W({refreshIntervalSec:y})}
                />
            </div>
            <div class="settings-row">
                <label>Folder preview scan depth</label>
                <${b_}
                    label="folder preview scan depth"
                    value=${N}
                    min=${0}
                    max=${8}
                    fallback=${3}
                    width="80px"
                    onChange=${(y)=>W({folderPreviewDepth:y})}
                />
                <span class="settings-hint" style="margin:0">set to <code>0</code> to disable folder size preview scans</span>
            </div>
            <p class="settings-hint">Root and folder-expansion tree loads remain shallow; the folder size preview is the deepest workspace scan in the UI.</p>
        </div>
    `}var AY=J_(()=>{T0();f_();$9();I4()});var kY={};j1(kY,{EnvironmentSection:()=>bD});function j9(_={}){let $=_.environmentSettings||_.settings||_.environment||{};return{variables:Array.isArray($.variables)?$.variables:[],overrides:$.overrides&&typeof $.overrides==="object"?$.overrides:{},count:Number($.count||0),overrideCount:Number($.overrideCount||0),keychainEnvNames:Array.isArray($.keychainEnvNames)?$.keychainEnvNames:[]}}function bD({settingsData:_,filter:$="",setStatus:j,mergeSettingsData:G}){let[Z,X]=C(()=>j9(_||{})),[Y,L]=C({}),[K,q]=C(""),[Q,V]=C(""),[B,N]=C(null);u(()=>{X(j9(_||{})),L({})},[_]);let U=f((O)=>{let T=j9({environmentSettings:O?.settings||O});return X(T),G?.({environmentSettings:T}),L({}),T},[G]),D=f(async()=>{try{let O=await B7();if(O?.ok)U(O.settings);j?.("Environment refreshed.","info")}catch(O){j?.(String(O?.message||O),"error")}},[U,j]),E=f(async(O,T)=>{let I=String(O||"").trim();if(!I)return;N(I);try{let A=await y2({action:"set",name:I,value:String(T??"")});if(A?.ok)U(A.settings);if(j?.(`Saved environment override for ${I}.`,"info"),I===K.trim())q(""),V("")}catch(A){j?.(String(A?.message||A),"error")}finally{N(null)}},[U,K,j]),H=f(async(O)=>{let T=String(O||"").trim();if(!T)return;N(T);try{let I=await y2({action:"clear",name:T});if(I?.ok)U(I.settings);j?.(`Cleared environment override for ${T}.`,"info")}catch(I){j?.(String(I?.message||I),"error")}finally{N(null)}},[U,j]),M=G0(()=>{let O=String($||"").trim().toLowerCase(),T=Array.isArray(Z.variables)?Z.variables:[];if(!O)return T;return T.filter((I)=>{return`${I?.name||""} ${I?.value||""} ${I?.source||""}`.toLowerCase().includes(O)})},[Z.variables,$]),J=f((O,T)=>{L((I)=>({...I||{},[O]:T}))},[]);return F`
        <div class="settings-section">
            <div style="display:flex; align-items:flex-start; justify-content:space-between; gap:12px; margin-bottom:12px;">
                <div>
                    <h3 style="margin-top:0">Environment</h3>
                    <p class="settings-hint" style="margin-top:4px">
                        Showing non-keychain environment variables only. Overrides are stored in extension KV and applied to <code>process.env</code>, so subsequent tool calls inherit them.
                    </p>
                </div>
                <button type="button" class="settings-secondary-btn" onClick=${D}>Refresh</button>
            </div>

            <div class="settings-row" style="align-items:flex-start; gap:10px;">
                <label>Add override</label>
                <div style="display:grid; grid-template-columns:minmax(180px, 0.7fr) minmax(240px, 1fr) auto; gap:8px; flex:1;">
                    <input
                        type="text"
                        value=${K}
                        placeholder="VARIABLE_NAME"
                        spellcheck="false"
                        onInput=${(O)=>q(O.target.value)}
                    />
                    <input
                        type="text"
                        value=${Q}
                        placeholder="value"
                        spellcheck="false"
                        onInput=${(O)=>V(O.target.value)}
                    />
                    <button
                        type="button"
                        disabled=${!K.trim()||B===K.trim()}
                        onClick=${()=>E(K,Q)}
                    >Save</button>
                </div>
            </div>

            <p class="settings-hint">
                ${Z.count} variables visible • ${Z.overrideCount} overrides active • ${Z.keychainEnvNames.length} keychain-injected variables hidden
            </p>

            <div class="settings-tool-list" style="max-height:58vh; overflow:auto;">
                ${M.map((O)=>{let T=String(O?.name||""),I=Object.prototype.hasOwnProperty.call(Y,T)?Y[T]:O.value,A=I!==O.value,k=B===T;return F`
                        <div class="settings-tool-row" key=${T} style="grid-template-columns:minmax(180px,0.45fr) minmax(240px,1fr) auto auto; align-items:center;">
                            <span class="settings-tool-name" title=${T}>${T}</span>
                            <input
                                type="text"
                                value=${I}
                                spellcheck="false"
                                onInput=${(z)=>J(T,z.target.value)}
                                style="min-width:0; width:100%; font-family:var(--font-mono, monospace);"
                            />
                            <span class="settings-tool-kind" title=${O.overridden?"Overridden in KV":"Inherited from process environment"}>
                                ${O.overridden?"override":"process"}
                            </span>
                            <span style="display:flex; gap:6px; justify-content:flex-end;">
                                <button type="button" disabled=${k||!A} onClick=${()=>E(T,I)}>Save</button>
                                <button type="button" disabled=${k||!O.overridden} onClick=${()=>H(T)}>Clear</button>
                            </span>
                        </div>
                    `})}
                ${M.length===0&&F`<p class="settings-hint">No environment variables match "${$}".</p>`}
            </div>
        </div>
    `}var yY=J_(()=>{T0();f_()});var MY={};j1(MY,{ProvidersSection:()=>mD});function vD(_){switch(_){case"oauth":return"OAuth";case"api_key":return"API key";case"custom":return"Configured";default:return"Configured"}}function mD({providers:_,setStatus:$}){let[j,G]=C(null),[Z,X]=C(null),[Y,L]=C({}),K=f((E,H)=>{L((M)=>({...M,[E]:H}))},[]),q=f(async(E)=>{let H=(Y.apiKey||"").trim();if(!H){$?.("API key cannot be empty.","error");return}G(E),$?.(`Configuring ${E}…`,"info");try{let M=JSON.stringify({provider:E,method:"api_key",api_key:H}),J=await z1("default",`/login __step2 ${M}`,null,[]);if(J?.command?.status==="error"){$?.(J.command.message,"error");return}$?.(J?.command?.message||`${E} configured.`,"success"),X(null),L({})}catch(M){$?.(String(M.message||M),"error")}finally{G(null)}},[Y,$]),Q=f(async(E,H)=>{G(E),$?.(`Configuring ${E}…`,"info");try{let M={provider:E,method:"custom"};for(let T of H.customFields||[])M[T.key]=(Y[T.key]||"").trim();let J=JSON.stringify(M),O=await z1("default",`/login __step2 ${J}`,null,[]);if(O?.command?.status==="error"){$?.(O.command.message,"error");return}$?.(O?.command?.message||`${E} configured.`,"success"),X(null),L({})}catch(M){$?.(String(M.message||M),"error")}finally{G(null)}},[Y,$]),V=f(async(E)=>{G(E),$?.(`Starting OAuth for ${E}…`,"info");try{let H=JSON.stringify({provider:E}),J=(await z1("default",`/login __step1 ${H}`,null,[]))?.command?.message||"";if(J.includes("http")){let O=J.match(/(https?:\/\/[^\s)]+)/);if(O)window.open(O[1],"_blank","noopener"),$?.("OAuth window opened. Complete the sign-in flow, then close this message.","success");else $?.(J,"success")}else $?.(J||`OAuth flow started for ${E}. Check the chat.`,"success")}catch(H){$?.(String(H.message||H),"error")}finally{G(null)}},[$]),B=f(async(E)=>{if(j)return;G(E),$?.(`Logging out ${E}…`,"info");try{await z1("default",`/logout ${E}`,null,[]),$?.(`Logged out ${E}. Restart may be needed.`,"success")}catch(H){$?.(String(H.message||H),"error")}finally{G(null)}},[j,$]),N=_||[],U=(E)=>Z===E,D=(E)=>{X((H)=>H===E?null:E),L({})};return F`
        <div class="settings-section">
            <h3>Providers</h3>
            <div class="settings-provider-list">
                ${N.map((E)=>F`
                    <div class=${`settings-provider-card${E.configured?" configured":""}`}>
                        <div class="settings-provider-card-header" onClick=${()=>!E.configured&&D(E.id)}>
                            <div class="settings-provider-card-title">
                                <strong>${E.name}</strong>
                                <span class="settings-provider-id">${E.id}</span>
                                ${E.configured&&F`<span class="settings-tag settings-tag-skill">${vD(E.authType)}</span>`}
                            </div>
                            <div class="settings-provider-card-meta">
                                ${E.hasOAuth&&F`<span class="settings-tag">OAuth</span>`}
                                ${E.hasApiKey&&F`<span class="settings-tag">API Key</span>`}
                                ${E.isCustom&&F`<span class="settings-tag">Custom</span>`}
                            </div>
                            <div class="settings-provider-card-actions">
                                ${E.configured?F`
                                    <button class="settings-addon-btn settings-addon-btn-remove"
                                        disabled=${j===E.id} onClick=${(H)=>{H.stopPropagation(),B(E.id)}}
                                    >${j===E.id?"…":"Logout"}</button>
                                    <button class="settings-addon-btn"
                                        disabled=${j===E.id} onClick=${(H)=>{H.stopPropagation(),D(E.id)}}
                                    >Reconfigure</button>
                                `:F`
                                    <button class="settings-addon-btn settings-addon-btn-install"
                                        disabled=${j===E.id} onClick=${(H)=>{H.stopPropagation(),D(E.id)}}
                                    >Set up</button>
                                `}
                            </div>
                        </div>

                        ${U(E.id)&&F`
                            <div class="settings-provider-setup">
                                <p class="settings-hint settings-provider-setup-hint">Sign-in flows open in the browser. In narrow panes the setup form stacks vertically to avoid clipping.</p>
                                ${E.hasOAuth&&F`
                                    <div class="settings-provider-method">
                                        <button class="settings-addon-btn settings-addon-btn-install"
                                            disabled=${j===E.id}
                                            onClick=${()=>V(E.id)}>
                                            ${j===E.id?"Starting…":"Sign in with OAuth"}
                                        </button>
                                    </div>
                                `}
                                ${E.hasApiKey&&F`
                                    <div class="settings-provider-method">
                                        <div class="settings-provider-field-row">
                                            <label>API Key</label>
                                            <input type="password" value=${Y.apiKey||""}
                                                onInput=${(H)=>K("apiKey",H.target.value)}
                                                placeholder=${E.apiKeyHint||"Enter API key"} />
                                            <button class="settings-addon-btn settings-addon-btn-install"
                                                disabled=${j===E.id||!(Y.apiKey||"").trim()}
                                                onClick=${()=>q(E.id)}>
                                                ${j===E.id?"…":"Save"}
                                            </button>
                                        </div>
                                    </div>
                                `}
                                ${E.isCustom&&F`
                                    <div class="settings-provider-method">
                                        ${(E.customFields||[]).map((H)=>F`
                                            <div class="settings-provider-field-row">
                                                <label>${H.label}${H.required?" *":""}</label>
                                                <input type="text" value=${Y[H.key]||""}
                                                    onInput=${(M)=>K(H.key,M.target.value)}
                                                    placeholder=${H.placeholder||""} />
                                            </div>
                                        `)}
                                        <div class="settings-provider-form-actions">
                                            <button class="settings-addon-btn settings-addon-btn-install"
                                                disabled=${j===E.id}
                                                onClick=${()=>Q(E.id,E)}>
                                                ${j===E.id?"Configuring…":"Save configuration"}
                                            </button>
                                        </div>
                                    </div>
                                `}
                            </div>
                        `}
                    </div>
                `)}
            </div>
        </div>
    `}var wY=J_(()=>{T0();f_()});var TY={};j1(TY,{ModelsSection:()=>pD});function hD(_){return typeof _==="string"&&_.toLowerCase()==="anthropic"}function nD({thinkingLevel:_,supportsThinking:$,provider:j,availableLevels:G,onSetLevel:Z,disabled:X}){let Y=hD(j)?cD:lD,L=G&&G.length>1?G:["off","minimal","low","medium","high"],K=Math.max(0,L.indexOf(_??"off"));if(!$)return F`<div class="settings-thinking-slider"><label>Thinking level</label><p class="settings-hint" style="margin:4px 0 0">Current model does not support thinking.</p></div>`;return F`
        <div class="settings-thinking-slider">
            <label>Thinking level: <strong>${Y[L[K]]||L[K]}</strong></label>
            <div class="settings-slider-track">
                <input type="range" min="0" max=${L.length-1} step="1" value=${K} disabled=${X}
                    onInput=${(q)=>Z(L[parseInt(q.target.value,10)])} />
                <div class="settings-slider-labels">
                    ${L.map((q,Q)=>F`<span class=${Q===K?"active":""} onClick=${()=>!X&&Z(q)}>${Y[q]||q}</span>`)}
                </div>
            </div>
        </div>
    `}function pD({filter:_=""}){let[$,j]=C(null),[G,Z]=C(!1),[X,Y]=C("off"),[L,K]=C(!1),[q,Q]=C(["off"]),[V,B]=C(!1),N=f(async()=>{let I=await M4();if(j(I),I.thinking_level)Y(I.thinking_level);if(K(Boolean(I.supports_thinking)),Array.isArray(I.available_thinking_levels)&&I.available_thinking_levels.length>0)Q(I.available_thinking_levels);return I},[]);u(()=>{N().catch(()=>j({models:[],model_options:[]}))},[]);let U=f(async(I)=>{if(G)return;Z(!0);try{await z1("default",`/model ${I}`,null,[]),await N()}catch(A){console.error("Failed to switch model:",A)}finally{Z(!1)}},[G,N]),D=f(async(I)=>{if(V)return;B(!0),Y(I);try{let A=await z1("default",`/thinking ${I}`,null,[]);if(A?.command?.thinking_level)Y(A.command.thinking_level);K(A?.command?.supports_thinking!==!1),await N()}catch(A){console.error("Failed to set thinking:",A),await N().catch((k)=>{})}finally{B(!1)}},[V,N]);if(!$)return F`<div class="settings-loading">Loading models\u2026</div>`;let E=$.model_options||[],H=$.current,J=E.find((I)=>I.label===H)?.provider||"",O=_.toLowerCase(),T=O?E.filter((I)=>I.label.toLowerCase().includes(O)||(I.provider||"").toLowerCase().includes(O)):E;return F`
        <div class="settings-models-split">
            <div class="settings-models-summary settings-hint">Model and provider names may wrap in narrow panes to avoid clipping.</div>
            <div class="settings-models-list">
                <table class="settings-table settings-borderless settings-models-table">
                    <thead><tr><th style="width:32px"></th><th>Model</th><th>Provider</th><th>Context</th><th style="text-align:center">Reasoning</th></tr></thead>
                    <tbody>
                        ${T.map((I)=>F`
                            <tr class=${I.label===H?"settings-row-active":""}>
                                <td><input type="radio" name="settings-model" checked=${I.label===H} disabled=${G} onChange=${()=>U(I.label)} /></td>
                                <td>${I.name||I.label}</td><td>${I.provider}</td>
                                <td>${I.context_window?(I.context_window/1000).toFixed(0)+"K":"—"}</td>
                                <td style="text-align:center">${I.reasoning?"\uD83E\uDDE0":"—"}</td>
                            </tr>
                        `)}
                        ${T.length===0&&F`<tr><td colspan="5" class="settings-empty">No models match "${_}"</td></tr>`}
                    </tbody>
                </table>
            </div>
            <div class="settings-models-footer">
                <${nD}
                    thinkingLevel=${X}
                    supportsThinking=${L}
                    provider=${J}
                    availableLevels=${q}
                    onSetLevel=${D}
                    disabled=${V||G} />
            </div>
        </div>
    `}var cD,lD;var xY=J_(()=>{T0();f_();cD={off:"off",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"max"},lD={off:"off",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"xhigh"}});var CY={};j1(CY,{ThemeSection:()=>rD});function IY(_={}){return{uiTheme:typeof _.uiTheme==="string"&&_.uiTheme.trim()?_.uiTheme.trim():"default",uiTint:typeof _.uiTint==="string"&&_.uiTint.trim()?_.uiTint.trim():""}}function rD({themes:_,colorKeys:$,settingsData:j,setStatus:G,mergeSettingsData:Z}){let[X,Y]=C("default"),[L,K]=C(""),[q,Q]=C(!1),V=g(""),B=g(null),N=g(!0);u(()=>{return N.current=!0,()=>{N.current=!1}},[]);let U=f((J)=>{let O=IY(J);Y(O.uiTheme),K(O.uiTint),V.current=JSON.stringify(O)},[]);u(()=>{if(j){U(j);return}U({uiTheme:document.documentElement.dataset.colorTheme||"default",uiTint:document.documentElement.dataset.tint||""})},[j,U]);let D=f((J,O)=>{Q5({theme:J,tint:O||null}),Y(J||"default"),K(O||"")},[]),E=G0(()=>JSON.stringify(IY({uiTheme:X,uiTint:L})),[X,L]);u(()=>{if(E===V.current)return;if(B.current)clearTimeout(B.current);return B.current=setTimeout(async()=>{if(!N.current)return;Q(!0);try{let J=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:E}),O=await J.json().catch(()=>({}));if(!N.current)return;if(!J.ok||!O?.ok||!O?.settings){G?.(O?.error||"Failed to save appearance settings.","error");return}V.current=E,Z?.(O.settings),G?.("Appearance synced across clients.","success")}catch(J){if(!N.current)return;console.warn("[settings/appearance] Failed to persist appearance settings.",J),G?.("Failed to save appearance settings.","error")}finally{if(N.current)Q(!1)}},250),()=>{if(B.current)clearTimeout(B.current)}},[E,Z,G]);let H=$||[],M=_||[];return F`
        <div class="settings-section">
            ${q&&F`<div class="settings-hint" style="margin:0 0 12px 0;">Syncing appearance…</div>`}
            <div class="settings-tint-row">
                <label class="settings-tint-label">
                    <input type="radio" name="settings-theme"
                        checked=${X==="default"}
                        onChange=${()=>D("default",L)} />
                    <strong>Default</strong>
                    <span class="settings-hint" style="margin:0 0 0 6px">auto (light/dark)</span>
                </label>
                <div class="settings-tint-picker">
                    <label class="settings-hint" style="margin:0">Tint:</label>
                    <input type="color"
                        value=${L||"#1d9bf0"}
                        onInput=${(J)=>{let O=J.target.value;if(K(O),X==="default")Q5({theme:"default",tint:O})}} />
                    ${L&&F`
                        <button class="settings-tint-clear" onClick=${()=>D("default","")}
                            title="Clear tint">\u2715</button>
                    `}
                    <span class="settings-tint-hex">${L||"none"}</span>
                </div>
            </div>

            <table class="settings-table settings-borderless settings-theme-table">
                <thead>
                    <tr>
                        <th></th><th>Theme</th><th>Mode</th>
                        ${H.map((J)=>F`<th class="settings-swatch-header">${J.replace(/([A-Z])/g," $1").trim()}</th>`)}
                    </tr>
                </thead>
                <tbody>
                    ${M.filter((J)=>J.name!=="default").map((J)=>F`
                        <tr class=${J.name===X?"settings-row-active":""}
                            style="cursor:pointer" onClick=${()=>D(J.name,"")}>
                            <td><input type="radio" name="settings-theme" checked=${J.name===X} onChange=${()=>D(J.name,"")} /></td>
                            <td><strong>${J.label}</strong></td>
                            <td>${J.mode}</td>
                            ${H.map((O)=>{let T=J.colors?.[O];return F`<td class="settings-swatch-cell">
                                    ${T?F`<span class="settings-color-swatch" style=${"background:"+T} title=${T}></span>`:"—"}
                                </td>`})}
                        </tr>
                    `)}
                </tbody>
            </table>
        </div>
    `}var fY=J_(()=>{T0();e5()});var RY={};j1(RY,{__scheduledTasksSettingsTest:()=>tD,ScheduledTasksSection:()=>aD});function C4(_){if(!_)return"—";let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}function PY(_){let $=Number(_);if(!Number.isFinite($))return"—";if($<1000)return`${Math.round($)}ms`;return`${($/1000).toFixed($<1e4?1:0)}s`}function G9(_){if(!_)return"—";if(_.schedule_type==="once")return`once · ${C4(_.schedule_value)}`;if(_.schedule_type==="interval")return`interval · ${_.schedule_value}`;if(_.schedule_type==="cron")return`cron · ${_.schedule_value}`;return`${_.schedule_type||"schedule"} · ${_.schedule_value||"—"}`}function Z9(_){let $=_?.task_kind||"agent";return $==="internal"?"internal/protected":$}function X9(_){return(_?.task_kind||"agent")==="internal"}function iD(_){if(!_)return"";let $=String(_).replace(/\s+/g," ").trim();return $.length>180?`${$.slice(0,179)}…`:$}function z5({children:_,type:$="neutral"}){return F`<span class=${`settings-task-pill settings-task-pill-${$}`}>${_}</span>`}function oD({task:_}){let $=Array.isArray(_?.recent_run_logs)?_.recent_run_logs:[];if(!$.length)return F`<p class="settings-hint">No run logs recorded yet.</p>`;return F`
        <div class="settings-task-run-list">
            ${$.map((j)=>F`
                <div class=${`settings-task-run-row settings-task-run-${j.status||"unknown"}`}>
                    <div class="settings-task-run-meta">
                        <${z5} type=${j.status==="error"?"error":"success"}>${j.status||"unknown"}<//>
                        <span>${C4(j.run_at)}</span>
                        <span>${PY(j.duration_ms)}</span>
                    </div>
                    <div class="settings-task-run-summary">
                        ${j.error_summary||iD(j.error)||j.result_summary||j.result||"No summary"}
                    </div>
                </div>
            `)}
        </div>
    `}function sD({task:_,onAction:$}){if(!_)return F`<div class="settings-task-detail-empty">Select a task to inspect schedule, status, and run history.</div>`;let j=X9(_);return F`
        <div class="settings-task-detail">
            <div class="settings-task-detail-header">
                <div>
                    <h4>${_.summary||_.id}</h4>
                    <code>${_.id}</code>
                </div>
                <div class="settings-task-detail-actions">
                    ${_.status==="active"&&F`<button onClick=${()=>$("pause",_)}>Pause</button>`}
                    ${_.status==="paused"&&F`<button onClick=${()=>$("resume",_)}>Resume</button>`}
                    <button class="danger" onClick=${()=>$("delete",_)}>Delete</button>
                </div>
            </div>
            <div class="settings-task-detail-grid">
                <span>Status</span><strong>${_.status||"—"}</strong>
                <span>Kind</span><strong>${Z9(_)}</strong>
                <span>Schedule</span><strong>${G9(_)}</strong>
                <span>Next run</span><strong>${C4(_.next_run)}</strong>
                <span>Last run</span><strong>${C4(_.last_run)}</strong>
                <span>Last result</span><strong>${_.latest_run_log?.status||_.last_result||"—"}</strong>
                <span>Chat</span><code>${_.chat_jid||"—"}</code>
                <span>Model</span><code>${_.model||"default"}</code>
                ${_.cwd&&F`<span>CWD</span><code>${_.cwd}</code>`}
                ${_.timeout_sec&&F`<span>Timeout</span><strong>${_.timeout_sec}s</strong>`}
                ${j&&F`<span>Protection</span><strong>Internal task actions require explicit confirmation.</strong>`}
            </div>
            <div class="settings-task-command-block">
                <strong>${_.task_kind==="shell"?"Command":"Prompt"}</strong>
                <pre>${_.command||_.prompt||_.command_summary||_.prompt_summary||_.summary||"—"}</pre>
            </div>
            <h4>Recent runs</h4>
            <${oD} task=${_} />
        </div>
    `}function aD({filter:_="",setStatus:$}){let[j,G]=C([]),[Z,X]=C({active:0,paused:0,completed:0}),[Y,L]=C("all"),[K,q]=C(""),[Q,V]=C(!0),[B,N]=C(null),[U,D]=C(null),[E,H]=C(null),[M,J]=C(!1),O=f(async(z={})=>{V(!0),N(null);try{let W=await q7({status:Y,chatJid:K.trim()||void 0,limit:50,includeRunLogs:!0,runLogLimit:5});G(W.tasks||[]),X(W.counts||{active:0,paused:0,completed:0});let y=z.selectedId||U,x=(W.tasks||[]).find((P)=>P.id===y)||(W.tasks||[])[0]||null;D(x?.id||null),H(x)}catch(W){N(W?.message||"Failed to load scheduled tasks.")}finally{V(!1)}},[Y,K,U]);u(()=>{O()},[O]);let T=String(_||"").trim().toLowerCase(),I=G0(()=>{if(!T)return j;return j.filter((z)=>[z.id,z.chat_jid,z.status,z.task_kind,z.schedule_type,z.schedule_value,z.summary,z.prompt_summary,z.command_summary,z.latest_run_log?.error_summary].some((W)=>String(W||"").toLowerCase().includes(T)))},[j,T]),A=f((z)=>{D(z?.id||null),H(z||null)},[]),k=f(async(z,W)=>{if(!W||M)return;let y=X9(W),x=W.summary||W.command_summary||W.prompt_summary||W.id,P=z==="delete"?`Delete scheduled task ${W.id}?

${x}`:`${z==="pause"?"Pause":"Resume"} scheduled task ${W.id}?

${x}`;if(!window.confirm(P))return;if(y&&!window.confirm(`Task ${W.id} is internal/protected. Continue with ${z}?`))return;J(!0),$?.(`${z==="delete"?"Deleting":z==="pause"?"Pausing":"Resuming"} ${W.id}…`,"info");try{await K7(z,W.id,{allowInternal:y}),$?.(`Scheduled task ${W.id} ${z==="delete"?"deleted":z==="pause"?"paused":"resumed"}.`,"success"),await O({selectedId:z==="delete"?null:W.id})}catch(S){$?.(S?.message||`Failed to ${z} task.`,"error")}finally{J(!1)}},[M,O,$]);return F`
        <div class="settings-section settings-scheduled-tasks-section">
            <div class="settings-task-toolbar">
                <div class="settings-task-counts">
                    <${z5} type="active">Active ${Z.active||0}<//>
                    <${z5} type="paused">Paused ${Z.paused||0}<//>
                    <${z5} type="completed">Completed ${Z.completed||0}<//>
                </div>
                <div class="settings-task-filters">
                    <select value=${Y} onChange=${(z)=>L(z.target.value)}>
                        ${dD.map((z)=>F`<option value=${z}>${z==="all"?"All statuses":z}</option>`)}
                    </select>
                    <input type="text" placeholder="Filter chat JID…" value=${K} onInput=${(z)=>q(z.target.value)} />
                    <button onClick=${()=>O()} disabled=${Q}>Refresh</button>
                </div>
            </div>

            ${Q&&F`<div class="settings-loading settings-loading-pane"><span class="settings-spinner"></span><span>Loading scheduled tasks…</span></div>`}
            ${B&&F`<div class="settings-error-state">${B}</div>`}
            ${!Q&&!B&&j.length===0&&F`
                <div class="settings-empty-state">
                    <strong>No scheduled tasks found.</strong>
                    <p>Tasks created with reminders, `/j`, or the scheduler tool will appear here.</p>
                </div>
            `}
            ${!Q&&!B&&j.length>0&&F`
                <div class="settings-task-layout">
                    <div class="settings-task-list" role="listbox" aria-label="Scheduled tasks">
                        ${I.map((z)=>F`
                            <button class=${`settings-task-row ${z.id===U?"active":""}`} onClick=${()=>A(z)}>
                                <span class="settings-task-row-main">
                                    <strong>${z.summary||z.id}</strong>
                                    <span>${G9(z)}</span>
                                </span>
                                <span class="settings-task-row-meta">
                                    <${z5} type=${z.status||"neutral"}>${z.status}<//>
                                    <${z5}>${Z9(z)}<//>
                                </span>
                                <span class="settings-task-row-times">Next ${C4(z.next_run)} · Last ${C4(z.last_run)}${z.latest_run_log?.status?` · ${z.latest_run_log.status}`:""}</span>
                            </button>
                        `)}
                        ${I.length===0&&F`<p class="settings-hint">No tasks match “${_}”.</p>`}
                    </div>
                    <${sD} task=${E&&I.some((z)=>z.id===E.id)?E:I[0]} onAction=${k} />
                </div>
            `}
        </div>
    `}var dD,tD;var SY=J_(()=>{T0();f_();dD=["all","active","paused","completed"];tD={formatDateTime:C4,formatDuration:PY,labelForSchedule:G9,kindLabel:Z9,isProtectedTask:X9}});function uY(_){return String(_||"").toLowerCase().replace(/^[@/]+/,"").replace(/\s+/g," ").trim()}function O5(_){return typeof _==="string"&&_.trim().length>0}function Y9(_,...$){let j=uY(_);if(!j)return!0;let G=$.map((Z)=>uY(Z)).filter(Boolean);for(let Z of G)if(Z.startsWith(j)||Z.includes(j))return!0;return!1}function gY(_){if(!Array.isArray(_))return null;let $=[],j=new Set;for(let G of _){let Z=String(G||"").trim();if(!Z)continue;let X=Z.toLowerCase();if(j.has(X))continue;j.add(X),$.push(Z)}return $}function a$(_){let $=_&&typeof _==="object"?_:{};return{workspaceCommands:gY($.workspaceCommands),slashCommands:gY($.slashCommands)}}function bY(_,$){if(!Array.isArray(_))return!0;return _.some((j)=>j.toLowerCase()===$.toLowerCase())}function eD(_){let $=Array.isArray(_?.commands)?_.commands:[],j=a$(_?.settings),G=String(_?.query||"");return $.filter((Z)=>bY(j.workspaceCommands,Z.id)).filter((Z)=>Y9(G,Z.label,Z.description,...Z.keywords||[])).map((Z)=>({key:`workspace:${Z.id}`,kind:"workspace",title:Z.label,subtitle:Z.description,searchText:`${Z.label} ${Z.description} ${(Z.keywords||[]).join(" ")}`.trim(),visualHint:Z.label.slice(0,1).toUpperCase()||"W",categoryLabel:"Workspace",actionHint:"Run",commandId:Z.id}))}function _W(_){let $=Array.isArray(_?.agents)?_.agents:[],j=String(_?.query||""),G=new Set;return $.filter((Z)=>{let X=O5(Z?.chat_jid)?Z.chat_jid.trim():"";if(!X||G.has(X))return!1;if(Z?.archived_at)return!1;return G.add(X),!0}).filter((Z)=>Y9(j,`@${String(Z?.agent_name||"").trim()}`,Z?.session_name,Z?.chat_jid)).map((Z)=>{let X=O5(Z?.agent_name)?Z.agent_name.trim():String(Z?.chat_jid||"").replace(/^[^:]+:/,""),Y=O5(Z?.session_name)?Z.session_name.trim():"",L=String(Z?.chat_jid||"").trim();return{key:`agent:${L}`,kind:"agent",title:`@${X}`,subtitle:Y||L,searchText:`@${X} ${Y} ${L}`.trim(),visualHint:X.slice(0,1).toUpperCase()||"@",categoryLabel:"Agent",actionHint:"Open",chatJid:L}})}function $W(_){let $=Array.isArray(_?.slashCommands)?_.slashCommands:[],j=a$(_?.settings),G=String(_?.query||""),Z=new Set;return $.filter((X)=>{let Y=O5(X?.name)?X.name.trim():"";if(!Y||Z.has(Y.toLowerCase()))return!1;return Z.add(Y.toLowerCase()),bY(j.slashCommands,Y)}).filter((X)=>Y9(G,X?.name,X?.description,X?.source)).map((X)=>{let Y=String(X?.name||"").trim(),L=O5(X?.description)?X.description.trim():"slash command",K=O5(X?.source)?X.source.trim():"";return{key:`slash:${Y}`,kind:"slash",title:Y,subtitle:L,searchText:`${Y} ${L} ${String(X?.source||"")}`.trim(),visualHint:"/",categoryLabel:K||"Slash",actionHint:"Insert",commandName:Y}})}function vY(_){return[..._W({agents:_?.agents,query:_?.query}),...eD({commands:_?.workspaceCommands,settings:_?.settings,query:_?.query}),...$W({slashCommands:_?.slashCommands,settings:_?.settings,query:_?.query})]}var s$;var L9=J_(()=>{s$=[{id:"toggle-workspace",label:"Toggle workspace",description:"Show or hide the workspace sidebar.",keywords:["workspace","sidebar","explorer"]},{id:"open-explorer",label:"Open explorer",description:"Open the workspace explorer sidebar.",keywords:["workspace","explorer","sidebar"]},{id:"toggle-chat-only",label:"Chat-only mode",description:"Toggle chat-only mode.",keywords:["chat","mode","layout"]},{id:"open-terminal-tab",label:"Open terminal in tab",description:"Open the terminal pane in a workspace tab.",keywords:["terminal","shell","tab"]},{id:"open-vnc-tab",label:"Open VNC in tab",description:"Open the VNC viewer in a workspace tab.",keywords:["vnc","remote","desktop","tab"]},{id:"toggle-terminal-dock",label:"Toggle terminal dock",description:"Show or hide the terminal dock.",keywords:["terminal","dock","shell"]},{id:"open-settings",label:"Settings",description:"Open the settings dialog.",keywords:["settings","preferences","config"]}]});var lY={};j1(lY,{QuickActionsSection:()=>jW});function mY(_,...$){let j=String(_||"").trim().toLowerCase();if(!j)return!0;return $.some((G)=>String(G||"").toLowerCase().includes(j))}function cY(_){if(!Array.isArray(_))return null;return new Set(_.map(($)=>String($||"").trim().toLowerCase()).filter(Boolean))}function jW({filter:_="",setStatus:$,mergeSettingsData:j}){let[G,Z]=C(()=>s$.map((I)=>I.id)),[X,Y]=C([]),[L,K]=C([]),[q,Q]=C(!0),[V,B]=C(!1),N=f(async()=>{Q(!0);try{let[I,A]=await Promise.all([L6(),Y6("web:default").catch(()=>({commands:[]}))]),k=a$(I?.settings),z=Array.isArray(A?.commands)?A.commands:[];K(z),Z(Array.isArray(k.workspaceCommands)?k.workspaceCommands:s$.map((W)=>W.id)),Y(Array.isArray(k.slashCommands)?k.slashCommands:z.map((W)=>String(W?.name||"").trim()).filter(Boolean))}catch(I){$?.(String(I?.message||I),"error")}finally{Q(!1)}},[$]);u(()=>{N()},[N]);let U=G0(()=>cY(G),[G]),D=G0(()=>cY(X),[X]),E=G0(()=>s$.filter((I)=>mY(_,I.label,I.description,...I.keywords||[])),[_]),H=G0(()=>L.filter((I)=>mY(_,I?.name,I?.description,I?.source)),[L,_]),M=f((I)=>{Z((A)=>{let k=new Set((Array.isArray(A)?A:[]).map((z)=>String(z||"").trim()).filter(Boolean));if(k.has(I))k.delete(I);else k.add(I);return s$.map((z)=>z.id).filter((z)=>k.has(z))})},[]),J=f((I)=>{Y((A)=>{let k=new Set((Array.isArray(A)?A:[]).map((z)=>String(z||"").trim()).filter(Boolean));if(k.has(I))k.delete(I);else k.add(I);return L.map((z)=>String(z?.name||"").trim()).filter((z)=>z&&k.has(z))})},[L]),O=f(()=>{Z(s$.map((I)=>I.id)),Y(L.map((I)=>String(I?.name||"").trim()).filter(Boolean))},[L]),T=f(async()=>{if(V)return;B(!0),$?.("Saving quick actions…","info");try{let I=await Q7({workspaceCommands:G,slashCommands:X}),A=a$(I?.settings);j?.({quickActions:A}),window.dispatchEvent(new CustomEvent("piclaw:quick-actions-settings-updated",{detail:{settings:A}})),$?.("Quick Actions saved.","success")}catch(I){$?.(String(I?.message||I),"error")}finally{B(!1)}},[j,V,$,X,G]);if(q)return F`<div class="settings-loading">Loading…</div>`;return F`
        <div class="settings-section">
            <h3>Timeline Quick Actions</h3>
            <p class="settings-hint">
                Choose which actions appear in the timeline typeahead. Agents are always pinned first, then workspace commands, then slash commands.
            </p>

            <div class="settings-row" style="align-items:center; gap:10px; margin-bottom:12px;">
                <button class="settings-addon-btn" onClick=${O} disabled=${V}>Enable all</button>
                <button class="settings-addon-btn settings-addon-btn-install" onClick=${T} disabled=${V}>
                    ${V?"Saving…":"Save & apply"}
                </button>
            </div>

            <h3 style="margin-top:8px;">Workspace commands</h3>
            <div class="settings-subsection-list">
                ${E.map((I)=>{let A=U?U.has(I.id.toLowerCase()):!0;return F`
                        <label class="settings-checkbox-row" key=${I.id}>
                            <input type="checkbox" checked=${A} onChange=${()=>M(I.id)} />
                            <div>
                                <div>${I.label}</div>
                                <div class="settings-hint" style="margin:2px 0 0 0;">${I.description}</div>
                            </div>
                        </label>
                    `})}
                ${E.length===0&&F`<div class="settings-hint">No workspace commands match this filter.</div>`}
            </div>

            <h3 style="margin-top:20px;">Slash commands</h3>
            <div class="settings-subsection-list">
                ${H.map((I)=>{let A=String(I?.name||"").trim(),k=D?D.has(A.toLowerCase()):!0;return F`
                        <label class="settings-checkbox-row" key=${A}>
                            <input type="checkbox" checked=${k} onChange=${()=>J(A)} />
                            <div>
                                <div><code>${A}</code></div>
                                <div class="settings-hint" style="margin:2px 0 0 0;">${I?.description||"slash command"}</div>
                            </div>
                        </label>
                    `})}
                ${H.length===0&&F`<div class="settings-hint">No slash commands match this filter.</div>`}
            </div>
        </div>
    `}var hY=J_(()=>{T0();f_();L9()});var nY={};j1(nY,{KeychainSection:()=>XW});function GW(_){if(!_)return"—";try{return new Date(_).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})}catch{return _}}function XW({filter:_=""}){let[$,j]=C([]),[G,Z]=C(!0),[X,Y]=C(null),[L,K]=C(!1),[q,Q]=C(""),[V,B]=C(""),[N,U]=C(""),[D,E]=C(""),[H,M]=C(""),[J,O]=C("secret"),[T,I]=C(!1),[A,k]=C({}),[z,W]=C(null),[y,x]=C(null),[P,S]=C(null),v=g(null),l=g(null),h=g(null),r=f(async()=>{Z(!0),Y(null);try{let j0=await(await fetch("/agent/keychain")).json();if(j0?.ok)j(j0.entries||[]);else Y(j0?.error||"Failed to load keychain.")}catch(d){Y("Failed to load keychain.")}finally{Z(!1)}},[]);u(()=>{r()},[r]);let b=f(async()=>{let d=q.trim(),j0=V;if(!d||!j0)return;I(!0);try{let f0=await(await fetch("/agent/keychain",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:d,secret:j0,type:J,username:N.trim()||void 0,userNote:D,agentNote:H})})).json();if(f0?.ok)Q(""),B(""),U(""),E(""),M(""),O("secret"),K(!1),await r();else Y(f0?.error||"Failed to add entry.")}catch{Y("Failed to add entry.")}finally{I(!1)}},[q,V,N,D,H,J,r]),e=f(async(d)=>{try{let A0=await(await fetch("/agent/keychain",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:d})})).json();if(A0?.ok)x(null),S((f0)=>f0?.name===d?null:f0),await r();else Y(A0?.error||"Failed to delete entry.")}catch{Y("Failed to delete entry.")}},[r]),z0=f(async(d)=>{let j0=d?.name;if(!j0)return;let A0=A[j0]||{},f0=Object.prototype.hasOwnProperty.call(A0,"userNote")?A0.userNote:d.userNote||"",b0=Object.prototype.hasOwnProperty.call(A0,"agentNote")?A0.agentNote:d.agentNote||"";W(j0);try{let X_=await(await fetch("/agent/keychain/notes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:j0,userNote:f0,agentNote:b0})})).json();if(X_?.ok)k((l0)=>{let __={...l0||{}};return delete __[j0],__}),await r();else Y(X_?.error||"Failed to save notes.")}catch{Y("Failed to save notes.")}finally{W(null)}},[A,r]),K0=f((d,j0,A0)=>{k((f0)=>({...f0||{},[d]:{...(f0||{})[d]||{},[j0]:A0}}))},[]),q0=f(async(d,j0,A0)=>{try{let b0=await(await fetch("/agent/keychain/reveal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:d,master_password:j0||void 0,totp_code:A0||void 0})})).json();if(b0?.ok)S({name:d,phase:"revealed",secret:b0.secret,username:b0.username,masterPassword:j0});else if(b0?.needs_master_password)S((c0)=>({name:d,phase:"password",masterPassword:"",error:c0?.name===d&&c0?.masterPassword?b0.error:null})),requestAnimationFrame(()=>l.current?.focus());else if(b0?.needs_totp)S((c0)=>({name:d,phase:"totp",masterPassword:j0,totpCode:"",error:c0?.name===d&&c0?.phase==="totp"&&c0?.totpCode?b0.error:null})),requestAnimationFrame(()=>h.current?.focus());else S({name:d,phase:"error",error:b0?.error||"Failed to reveal."})}catch{S({name:d,phase:"error",error:"Failed to reveal."})}},[]),X0=f((d)=>{if(P?.name===d&&P?.phase==="revealed"){S(null);return}q0(d,null,null)},[P,q0]),N0=f((d)=>{let j0=P?.masterPassword||"";if(!j0)return;q0(d,j0,null)},[P,q0]),_0=f((d)=>{let j0=P?.totpCode||"";if(j0.length<6)return;q0(d,P?.masterPassword,j0)},[P,q0]),Z0=f(async(d)=>{try{await navigator.clipboard.writeText(d)}catch{let j0=document.createElement("textarea");j0.value=d,j0.style.position="fixed",j0.style.opacity="0",document.body.appendChild(j0),j0.select(),document.execCommand("copy"),document.body.removeChild(j0)}},[]);u(()=>{if(L)requestAnimationFrame(()=>v.current?.focus())},[L]);let B0=_.toLowerCase(),W0=G0(()=>{if(!B0)return $;return $.filter((d)=>d.name.toLowerCase().includes(B0)||(d.type||"").toLowerCase().includes(B0)||(d.envVar||"").toLowerCase().includes(B0)||(d.userNote||"").toLowerCase().includes(B0)||(d.agentNote||"").toLowerCase().includes(B0))},[$,B0]);if(G)return F`<div class="settings-section"><div class="settings-loading">Loading keychain…</div></div>`;return F`
        <div class="settings-section">
            ${X&&F`
                <div class="settings-keychain-error" role="alert">
                    ${X}
                    <button class="settings-keychain-dismiss" onClick=${()=>Y(null)}>✕</button>
                </div>
            `}
            <div class="settings-keychain-toolbar" style="display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap;">
                <span class="settings-hint" style="margin:0; display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                    <span>${W0.length} entr${W0.length===1?"y":"ies"}${B0?` matching "${_}"`:""}, encrypted at rest.</span>
                    <span style="display:inline-flex; align-items:center; gap:6px;">
                        <span>Click</span>
                        <span aria-hidden="true" style="display:inline-flex; width:18px; height:18px; align-items:center; justify-content:center; border-radius:999px; border:1px solid var(--border-color, rgba(120,120,120,.22)); background:var(--panel-bg, rgba(255,255,255,.04));">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                        </span>
                        <span>to reveal.</span>
                    </span>
                </span>
                <button class="settings-keychain-add-btn" onClick=${()=>K(!L)}>
                    ${L?"Cancel":"+ Add entry"}
                </button>
            </div>

            ${L&&F`
                <div class="settings-keychain-add-form">
                    <div class="settings-keychain-add-row">
                        <input ref=${v} type="text" placeholder="Entry name (e.g. github/my-token)"
                            value=${q} onInput=${(d)=>Q(d.target.value)}
                            class="settings-keychain-input" />
                        <select value=${J} onChange=${(d)=>O(d.target.value)}
                            class="settings-keychain-select">
                            ${ZW.map((d)=>F`<option value=${d}>${d}</option>`)}
                        </select>
                    </div>
                    <div class="settings-keychain-add-row">
                        <input type="password" placeholder="Secret value"
                            value=${V} onInput=${(d)=>B(d.target.value)}
                            class="settings-keychain-input settings-keychain-secret" />
                        <input type="text" placeholder="Username (optional)"
                            value=${N} onInput=${(d)=>U(d.target.value)}
                            class="settings-keychain-input" style="max-width:200px" />
                        <button class="settings-keychain-save-btn" onClick=${b}
                            disabled=${T||!q.trim()||!V}>
                            ${T?"Saving…":"Save"}
                        </button>
                    </div>
                    <div class="settings-keychain-add-row" style="align-items:stretch">
                        <textarea placeholder="User note (visible in this UI only)"
                            value=${D} onInput=${(d)=>E(d.target.value)}
                            class="settings-keychain-input" rows="2" style="resize:vertical; min-height:56px"></textarea>
                        <textarea placeholder="Agent note (safe to expose to agents)"
                            value=${H} onInput=${(d)=>M(d.target.value)}
                            class="settings-keychain-input" rows="2" style="resize:vertical; min-height:56px"></textarea>
                    </div>
                </div>
            `}

            <div class="settings-keychain-table-wrap">
                <table class="settings-table settings-keychain-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Env var</th>
                            <th>Updated</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        ${W0.length===0&&F`
                            <tr><td colspan="5" class="settings-keychain-empty">
                                ${B0?"No entries match the filter.":"No keychain entries."}
                            </td></tr>
                        `}
                        ${W0.map((d)=>{let j0=P?.name===d.name?P:null,A0=j0?.phase==="revealed",f0=j0?.phase==="password",b0=j0?.phase==="totp",c0=j0?.phase==="error",X_=A[d.name]||{},l0=Object.prototype.hasOwnProperty.call(X_,"userNote")?X_.userNote:d.userNote||"",__=Object.prototype.hasOwnProperty.call(X_,"agentNote")?X_.agentNote:d.agentNote||"",P0=l0!==(d.userNote||"")||__!==(d.agentNote||""),p0=z===d.name;return F`
                            <tr class="settings-keychain-row" key=${d.name}>
                                <td class="settings-keychain-name">${d.name}</td>
                                <td><span class="settings-keychain-type-badge">${d.type}</span></td>
                                <td class="settings-keychain-env">${d.envVar?F`<code>$${d.envVar}</code>`:"—"}</td>
                                <td class="settings-keychain-date">${GW(d.updatedAt)}</td>
                                <td class="settings-keychain-actions">
                                    <button class=${`settings-keychain-reveal-btn${A0?" active":""}`}
                                        onClick=${()=>X0(d.name)}
                                        title=${A0?"Hide secret":"Reveal secret"}>
                                        ${A0?F`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`:F`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`}
                                    </button>
                                    ${y===d.name?F`
                                            <span class="settings-keychain-confirm">Delete?
                                                <button class="settings-keychain-confirm-yes" onClick=${()=>e(d.name)}>Yes</button>
                                                <button class="settings-keychain-confirm-no" onClick=${()=>x(null)}>No</button>
                                            </span>
                                        `:F`<button class="settings-keychain-delete-btn" onClick=${()=>x(d.name)} title="Delete">🗑</button>`}
                                </td>
                            </tr>
                            <tr class="settings-keychain-notes-row" key=${d.name+"-notes"}>
                                <td colspan="5">
                                    <div style="display:grid; grid-template-columns:1fr 1fr auto; gap:8px; align-items:start; padding:8px 0 10px 0;">
                                        <label style="display:flex; flex-direction:column; gap:4px; min-width:0;">
                                            <span class="settings-hint" style="margin:0">User note</span>
                                            <textarea class="settings-keychain-input" rows="2" style="resize:vertical; min-height:52px; width:100%;" placeholder="Human/UI note only"
                                                value=${l0}
                                                onInput=${(R0)=>K0(d.name,"userNote",R0.target.value)}></textarea>
                                        </label>
                                        <label style="display:flex; flex-direction:column; gap:4px; min-width:0;">
                                            <span class="settings-hint" style="margin:0">Agent-readable note</span>
                                            <textarea class="settings-keychain-input" rows="2" style="resize:vertical; min-height:52px; width:100%;" placeholder="Safe guidance for agents"
                                                value=${__}
                                                onInput=${(R0)=>K0(d.name,"agentNote",R0.target.value)}></textarea>
                                        </label>
                                        <button class="settings-keychain-save-btn" style="margin-top:20px" disabled=${!P0||p0} onClick=${()=>z0(d)}>
                                            ${p0?"Saving…":"Save notes"}
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            ${f0&&F`
                                <tr class="settings-keychain-prompt-row" key=${d.name+"-pw"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-prompt">
                                            <span class="settings-keychain-prompt-label">Master password:</span>
                                            <input ref=${l} type="password" autocomplete="off"
                                                placeholder="Enter keychain master password"
                                                class="settings-keychain-prompt-input"
                                                value=${j0?.masterPassword||""}
                                                onInput=${(R0)=>S((d0)=>({...d0,masterPassword:R0.target.value}))}
                                                onKeyDown=${(R0)=>{if(R0.key==="Enter")N0(d.name);if(R0.key==="Escape")S(null)}}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${()=>N0(d.name)}
                                                disabled=${!j0?.masterPassword}>Unlock</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${()=>S(null)}>Cancel</button>
                                            ${j0?.error&&F`<span class="settings-keychain-prompt-error">${j0.error}</span>`}
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${b0&&F`
                                <tr class="settings-keychain-prompt-row" key=${d.name+"-totp"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-prompt">
                                            <span class="settings-keychain-prompt-label">TOTP code:</span>
                                            <input ref=${h} type="text" inputmode="numeric" autocomplete="one-time-code"
                                                maxlength="6" placeholder="000000"
                                                class="settings-keychain-prompt-input" style="width:90px;text-align:center;letter-spacing:0.15em"
                                                value=${j0?.totpCode||""}
                                                onInput=${(R0)=>S((d0)=>({...d0,totpCode:R0.target.value.replace(/\\D/g,"").slice(0,6)}))}
                                                onKeyDown=${(R0)=>{if(R0.key==="Enter")_0(d.name);if(R0.key==="Escape")S(null)}}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${()=>_0(d.name)}
                                                disabled=${(j0?.totpCode||"").length<6}>Verify</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${()=>S(null)}>Cancel</button>
                                            ${j0?.error&&F`<span class="settings-keychain-prompt-error">${j0.error}</span>`}
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${A0&&F`
                                <tr class="settings-keychain-reveal-row" key=${d.name+"-reveal"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-reveal-panel">
                                            ${j0.username&&F`
                                                <div class="settings-keychain-reveal-field">
                                                    <span class="settings-keychain-reveal-label">Username</span>
                                                    <code class="settings-keychain-reveal-value">${j0.username}</code>
                                                    <button class="settings-keychain-copy-btn" onClick=${()=>Z0(j0.username)} title="Copy username">
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                                                    </button>
                                                </div>
                                            `}
                                            <div class="settings-keychain-reveal-field">
                                                <span class="settings-keychain-reveal-label">Secret</span>
                                                <code class="settings-keychain-reveal-value">${j0.secret}</code>
                                                <button class="settings-keychain-copy-btn" onClick=${()=>Z0(j0.secret)} title="Copy secret">
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${c0&&F`
                                <tr class="settings-keychain-reveal-row" key=${d.name+"-error"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-reveal-panel" style="color: var(--error-color, #e55)">${j0.error}</div>
                                    </td>
                                </tr>
                            `}
                        `})}
                    </tbody>
                </table>
            </div>
        </div>
    `}var ZW;var pY=J_(()=>{T0();ZW=["secret","token","password","basic"]});var rY={};j1(rY,{ToolsSection:()=>VW});function VW({toolsets:_,filter:$="",settingsData:j,mergeSettingsData:G}){let Z=_||[],[X,Y]=C(()=>{let B={};for(let N of Z)B[N.name]=!0;return B}),L=f((B)=>{Y((N)=>({...N,[B]:!N[B]}))},[]),K=j?.searchMatchMode||"or",q=f(async()=>{let B=K==="or"?"and":"or";try{let U=await(await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({searchMatchMode:B})})).json().catch(()=>({}));if(U?.ok&&U?.settings)G?.(U.settings)}catch(N){console.warn("[settings/tools] Failed to save search match mode.",N)}},[K,G]),Q=$.toLowerCase(),V=G0(()=>{if(!Q)return Z;return Z.map((B)=>{let N=B.tools.filter((U)=>U.name.toLowerCase().includes(Q)||B.name.toLowerCase().includes(Q)||(U.summary||"").toLowerCase().includes(Q));return N.length>0?{...B,tools:N}:null}).filter(Boolean)},[Z,Q]);if(Z.length===0)return F`<div class="settings-section"><p class="settings-hint">Tool data not available.</p></div>`;return F`
        <div class="settings-section">
            <div class="settings-search-options">
                <h4 style="margin:0 0 8px 0">Search</h4>
                <div class="settings-row">
                    <label>Match mode</label>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <input type="checkbox" checked=${K==="and"} onChange=${q} />
                        <span class="settings-hint" style="margin:0">
                            ${K==="or"?"Any keyword (OR) — results match at least one search term":"All keywords (AND) — results must match every search term"}
                        </span>
                    </div>
                </div>
            </div>
            ${V.map((B)=>{let N=X[B.name]!==!1;return F`
                <div class="settings-toolset">
                    <div class="settings-toolset-header">
                        <label class="settings-toolset-toggle">
                            <input type="checkbox" checked=${N} onChange=${()=>L(B.name)} />
                            <span class="settings-toolset-icon">${YW[B.name]||KW}</span>
                            <strong>${B.name}</strong>
                        </label>
                        <span class="settings-hint" style="margin:0">${B.description}</span>
                    </div>
                    ${N&&F`<div class="settings-tool-list">${B.tools.map((U)=>F`
                        <div class="settings-tool-row">
                            <input type="checkbox" checked disabled />
                            <span class="settings-tool-name">${U.name}</span>
                            <span class="settings-tool-kind" title=${U.kind}>${qW[U.kind]||"?"}</span>
                            ${U.summary&&F`<span class="settings-tool-summary">${U.summary}</span>`}
                            <span class="settings-tool-source">${LW[U.name]||B.name}</span>
                        </div>
                    `)}</div>`}
                </div>
            `})}
            ${V.length===0&&F`<p class="settings-hint">No tools match "${$}"</p>`}
            <p class="settings-hint">Tool activation is managed by the agent runtime. Group checkboxes collapse/expand; individual tools use <code>activate_tools</code>.</p>
        </div>
    `}var YW,LW,qW,KW;var dY=J_(()=>{T0();YW={core:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="17" height="14" rx="2"/><path d="M7.5 10l2.5 2-2.5 2"/><path d="M12.5 15H16"/></svg>`,discovery:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>`,attachments:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>`,"model-control":F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/><path d="M9 15c.83.67 2 1 3 1s2.17-.33 3-1"/></svg>`,data:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,workspace:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,automation:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,remote:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,browser:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,ui:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,experiments:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6v7l4.6 7.7A1 1 0 0 1 18.7 19H5.3a1 1 0 0 1-.9-1.3L9 10z"/><line x1="9" y1="3" x2="15" y2="3"/></svg>`,lifecycle:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>`},LW={read:"pi-core",write:"pi-core",edit:"pi-core",bash:"pi-core",powershell:"pi-core",find:"pi-core",grep:"pi-core",ls:"pi-core",list_tools:"internal-tools",list_internal_tools:"internal-tools",activate_tools:"tool-activation",reset_active_tools:"tool-activation",list_scripts:"runtime-scripts",attach_file:"file-attachments",read_attachment:"file-attachments",export_attachment:"file-attachments",get_model_state:"model-control",list_models:"model-control",switch_model:"model-control",switch_thinking:"model-control",messages:"messages-crud",introspect_sql:"sql-introspect",keychain:"keychain-tools",search_workspace:"workspace-search",refresh_workspace_index:"workspace-search",open_office_viewer:"office-viewer",office_read:"office-viewer",office_write:"office-viewer",open_workspace_file:"open-workspace-file",image_process:"image-processing",schedule_task:"scheduled-tasks",scheduled_tasks:"scheduled-tasks",bun_run:"bun-runner",exec_batch:"exec-batch",search_tool_output:"search-tool-output",ssh:"ssh",proxmox:"proxmox",portainer:"portainer",mcp:"mcp",cdp_browser:"cdp-browser",send_adaptive_card:"send-adaptive-card",send_dashboard_widget:"send-dashboard-widget",start_autoresearch:"autoresearch",stop_autoresearch:"autoresearch",autoresearch_status:"autoresearch",exit_process:"exit-process",env:"env-tools"},qW={"read-only":"\uD83D\uDD0D",mutating:"✏️",mixed:"\uD83D\uDD04"},KW=F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`});var iY={};j1(iY,{AddonsSection:()=>QW});function QW({setStatus:_,filter:$=""}){let[j,G]=C(null),[Z,X]=C(!0),[Y,L]=C(null),[K,q]=C(!1),[Q,V]=C({runtime:"",windowsNative:!1}),[B,N]=C([]),[U,D]=C([]);function E(){let z=new URLSearchParams;try{let y=(localStorage.getItem("piclaw_addons_catalog_url")||"").trim(),x=(localStorage.getItem("piclaw_addons_catalog_urls")||"").split(/\r?\n/).map((S)=>S.trim()).filter(Boolean),P=localStorage.getItem("piclaw_addons_repo_url");if(y)z.append("catalog_url",y);for(let S of x)z.append("catalog_url",S);if(P)z.set("repo_url",P)}catch(y){}let W=z.toString();return W?`?${W}`:""}let H=f(async()=>{try{let[z,W]=await Promise.all([fetch(`/agent/addons${E()}`),fetch("/agent/settings-data")]),y=await z.json();if(y.error)throw Error(y.error);G(y.addons||[]),N(y.sources||[]),D(y.failed_sources||[]);let x=await W.json().catch(()=>({})),P=typeof x?.runtimePlatform==="string"?x.runtimePlatform:"";V({runtime:P,windowsNative:P==="win32"})}catch(z){G(null),_?.(String(z.message||z),"error")}finally{X(!1)}},[_]);u(()=>{H()},[]);let M=f(async(z)=>{if(Y)return;L({slug:z,action:"install"}),_?.(`Installing ${z}…`,"info");try{let y=await(await fetch(`/agent/addons/install${E()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:z})})).json();if(y.error){_?.(y.error,"error");return}q(!0);let x=[y.message,y.warning].filter(Boolean).join(" ");_?.(x||"Add-on installed.","success"),await H()}catch(W){_?.(String(W.message||W),"error")}finally{L(null)}},[Y,H,_]),J=f(async(z)=>{if(Y)return;L({slug:z,action:"remove"}),_?.(`Removing ${z}…`,"info");try{let y=await(await fetch(`/agent/addons/uninstall${E()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:z})})).json();if(y.error){_?.(y.error,"error");return}q(!0);let x=[y.message,y.warning].filter(Boolean).join(" ");_?.(x||"Add-on removed.","success"),await H()}catch(W){_?.(String(W.message||W),"error")}finally{L(null)}},[Y,H,_]),O=f(async()=>{if(Y)return;L({slug:null,action:"restart"}),_?.("Restarting piclaw…","info");try{let W=await(await fetch("/agent/addons/restart",{method:"POST"})).json();if(W.error){_?.(W.error,"error"),L(null);return}_?.(W.message||"Restarting piclaw…","success"),q(!1),(async(x=30,P=2000)=>{for(let S=0;S<x;S++){await new Promise((v)=>setTimeout(v,P));try{if((await fetch("/agent/addons",{signal:AbortSignal.timeout(3000)})).ok){await H(),L(null),_?.("Restart complete — add-ons refreshed.","success");return}}catch(v){}}L(null),_?.("Backend did not return in time. Reload the page manually.","warning")})()}catch(z){_?.(String(z.message||z),"error"),L(null)}},[Y,_,H]);if(Z)return F`<div class="settings-loading">Fetching add-ons\u2026</div>`;if(!j)return F`<div class="settings-section"><p class="settings-hint">Could not load add-ons.</p></div>`;let T=$.toLowerCase(),I=T?j.filter((z)=>z.slug.toLowerCase().includes(T)||(z.description||"").toLowerCase().includes(T)||(z.tags||[]).some((W)=>W.toLowerCase().includes(T))):j,A=Y?.slug||null,k=Y?Y.action==="remove"?`Removing ${Y.slug}…`:Y.action==="restart"?"Restarting piclaw…":`Installing ${Y.slug}…`:"";return F`
        <div class=${`settings-section settings-addon-panel${Y?" busy":""}`} aria-busy=${Y?"true":"false"}>
            <div class="settings-addon-toolbar">
                <div>
                    <p class="settings-hint">
                        ${B.length<=1?F`Catalog from <a href="https://github.com/rcarmo/piclaw-addons" target="_blank">rcarmo/piclaw-addons</a>.`:F`${B.length} catalog sources merged.`}
                        ${" "}Package-first install via Bun; restart required after install/uninstall.
                    </p>
                    ${U.length>0&&F`
                        <div class="settings-addon-error" role="alert">
                            Failed to fetch ${U.length} catalog source${U.length>1?"s":""}:
                            ${U.map((z)=>F` <code style="font-size:0.82em;word-break:break-all">${z}</code>`)}
                        </div>
                    `}
                    ${B.length>1&&F`
                        <details class="settings-hint" style="margin-top:4px">
                            <summary style="cursor:pointer">Active catalog sources (${B.length})</summary>
                            <ul style="margin:4px 0 0 16px;font-size:0.82em">
                                ${B.map((z)=>F`<li style="word-break:break-all"><code>${z}</code></li>`)}
                            </ul>
                        </details>
                    `}
                    ${Q.windowsNative&&F`
                        <div class="settings-addon-error" role="alert">
                            Native Windows add-on installs are higher risk: Bun package installs, symlink cleanup, locked files, and restart timing can all be less predictable than in Linux/WSL. Prefer WSL or a container when possible.
                        </div>
                    `}
                </div>
            </div>
            ${Y&&F`
                <div class="settings-addon-panel-overlay" role="status" aria-live="polite" aria-label=${k}>
                    <div class="settings-addon-panel-overlay-card">
                        <div class="settings-spinner"></div>
                        <span>${k}</span>
                    </div>
                </div>
            `}
            <div class="settings-addon-list">
                ${I.map((z)=>{let W=(z.skills||[]).length>0,y=z.type==="extension",x=W&&y?"extension + skill":W?"skill":"extension",P=W&&!y?"settings-tag-skill":"",S=typeof z.homepage==="string"&&z.homepage.trim()?z.homepage.trim():"";return F`
                    <div class=${`settings-addon-card${z.installed?" installed":""}`}>
                        <div class="settings-addon-card-header">
                            ${S?F`<a class="settings-addon-name-link" href=${S} target="_blank" rel="noopener noreferrer">${z.slug}</a>`:F`<strong>${z.slug}</strong>`}
                            <span class=${`settings-tag settings-tag-type ${P}`}>${x}</span>
                            <span class="settings-addon-version">${z.installed?z.installedVersion||"?":z.version||""}</span>
                            ${z.installKind&&F`<span class="settings-tag">${z.installKind}</span>`}
                            ${z.hasUpdate&&F`<span class="settings-tag settings-tag-skill">\u2191 ${z.version}</span>`}
                            <div class="settings-addon-actions">
                                ${z.installed?F`
                                    ${z.hasUpdate&&F`<button class="settings-addon-btn settings-addon-btn-upgrade" disabled=${Boolean(Y)} onClick=${()=>M(z.slug)}>${A===z.slug?"…":"Update"}</button>`}
                                    <button class="settings-addon-btn settings-addon-btn-remove" disabled=${Boolean(Y)} onClick=${()=>J(z.slug)}>${A===z.slug?"…":"Remove"}</button>
                                `:F`
                                    <button class="settings-addon-btn settings-addon-btn-install" disabled=${Boolean(Y)} onClick=${()=>M(z.slug)}>${A===z.slug?"…":"Install"}</button>
                                `}
                            </div>
                        </div>
                        <div class="settings-addon-card-body">${z.description}</div>
                        <div class="settings-addon-card-footer">
                            <div class="settings-addon-tags">${(z.tags||[]).map((v)=>F`<span class="settings-tag">${v}</span>`)}${(z.skills||[]).map((v)=>F`<span class="settings-tag settings-tag-skill">\ud83d\udcdd ${v}</span>`)}</div>
                        </div>
                    </div>
                `})}
                ${I.length===0&&F`<p class="settings-hint">No add-ons match "${$}"</p>`}
            </div>
            ${K&&F`
                <div class="settings-addon-restart-notice" role="status" aria-live="polite">
                    <span>Extension changes are installed but inactive until piclaw restarts.</span>
                    <button class="settings-addon-btn settings-addon-btn-restart-now" type="button" disabled=${Boolean(Y)} onClick=${O}>Restart Now</button>
                </div>
            `}
        </div>
    `}var oY=J_(()=>{T0()});var DW={};function q9(_,$){try{let j=localStorage.getItem(_);return j===null?$:j==="true"}catch{return $}}function n2(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function NW(_,$){try{return localStorage.getItem(_)||$}catch{return $}}function BW(_,$){try{localStorage.setItem(_,$)}catch(j){}}function FW(_,$,j,G){try{return z$(localStorage.getItem(_),{fallback:$,min:j,max:G})}catch{return z$($,{fallback:$,min:j,max:G})}}function UW(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function HW(){let[_,$]=C(()=>q9("piclaw_vim_mode",!1)),[j,G]=C(()=>q9("piclaw_show_whitespace",!0)),[Z,X]=C(()=>q9("piclaw_md_live_preview",!0)),[Y,L]=C(()=>FW("piclaw_editor_font_size",13,10,24)),[K,q]=C(()=>NW("piclaw_editor_font_family","")),Q=f((V,B,N)=>{let U=!B;N(U),n2(V,U)},[]);return F`
        <div class="settings-section">
            <h3>Editor</h3>
            <div class="settings-row">
                <label>Vim mode</label>
                <input type="checkbox" checked=${_}
                    onChange=${()=>{let V=!_;$(V),n2("piclaw_vim_mode",V)}} />
            </div>
            <div class="settings-row">
                <label>Show whitespace</label>
                <input type="checkbox" checked=${j}
                    onChange=${()=>{let V=!j;G(V),n2("piclaw_show_whitespace",V)}} />
            </div>
            <div class="settings-row">
                <label>Markdown live preview</label>
                <input type="checkbox" checked=${Z}
                    onChange=${()=>{let V=!Z;X(V),n2("piclaw_md_live_preview",V)}} />
            </div>
            <div class="settings-row">
                <label>Font size (px)</label>
                <${b_}
                    label="editor font size"
                    value=${Y}
                    min=${10}
                    max=${24}
                    fallback=${13}
                    width="70px"
                    onChange=${(V)=>{L(V),UW("piclaw_editor_font_size",V)}}
                />
            </div>
            <div class="settings-row">
                <label>Font family</label>
                <input type="text" value=${K}
                    onInput=${(V)=>{let B=V.target.value;q(B),BW("piclaw_editor_font_family",B)}}
                    placeholder="monospace (default)" />
            </div>
            <p class="settings-hint settings-local-only-hint">This browser only. Editor changes are stored in local browser storage and take effect when you next open or reload a file tab.</p>
        </div>
    `}var EW;var sY=J_(()=>{T0();E5();I4();EW=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;d$({id:"editor",label:"Editor",icon:EW,component:HW,order:150})});var AW={};function aY(_,$){try{let j=localStorage.getItem(_);return j===null?$:j==="true"}catch{return $}}function tY(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function WW(_,$,j,G){try{return z$(localStorage.getItem(_),{fallback:$,min:j,max:G})}catch{return z$($,{fallback:$,min:j,max:G})}}function zW(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function OW(){let[_,$]=C(()=>aY("piclaw_mindmap_auto_expand",!0)),[j,G]=C(()=>WW("piclaw_mindmap_node_spacing",40,20,100)),[Z,X]=C(()=>aY("piclaw_mindmap_animate",!0));return F`
        <div class="settings-section">
            <h3>Mind Map</h3>
            <div class="settings-row">
                <label>Auto-expand nodes</label>
                <input type="checkbox" checked=${_}
                    onChange=${()=>{let Y=!_;$(Y),tY("piclaw_mindmap_auto_expand",Y)}} />
            </div>
            <div class="settings-row">
                <label>Node spacing (px)</label>
                <${b_}
                    label="node spacing"
                    value=${j}
                    min=${20}
                    max=${100}
                    fallback=${40}
                    width="70px"
                    onChange=${(Y)=>{G(Y),zW("piclaw_mindmap_node_spacing",Y)}}
                />
            </div>
            <div class="settings-row">
                <label>Animate transitions</label>
                <input type="checkbox" checked=${Z}
                    onChange=${()=>{let Y=!Z;X(Y),tY("piclaw_mindmap_animate",Y)}} />
            </div>
            <p class="settings-hint settings-local-only-hint">This browser only. Opens <code>.mindmap.yaml</code> files. Changes take effect on the next map open.</p>
        </div>
    `}var JW;var eY=J_(()=>{T0();E5();I4();JW=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><circle cx="5" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><line x1="9.5" y1="9.5" x2="6.5" y2="6.5"/><line x1="14.5" y1="9.5" x2="17.5" y2="6.5"/><line x1="9.5" y1="14.5" x2="6.5" y2="17.5"/><line x1="14.5" y1="14.5" x2="17.5" y2="17.5"/></svg>`;d$({id:"mindmap",label:"Mind Map",icon:JW,component:OW,order:170})});var MW={};function K9(_,$){try{let j=localStorage.getItem(_);return j===null?$:j==="true"}catch{return $}}function V9(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function Q9(_,$){try{return localStorage.getItem(_)||$}catch{return $}}function N9(_,$){try{localStorage.setItem(_,$)}catch(j){}}function kW(){let[_,$]=C(()=>K9("piclaw_dev_mode",!1)),[j,G]=C(()=>Q9("piclaw_addons_catalog_url","")),[Z,X]=C(()=>Q9("piclaw_addons_catalog_urls","")),[Y,L]=C(()=>Q9("piclaw_addons_repo_url","")),[K,q]=C(()=>K9("piclaw_debug_sse",!1)),[Q,V]=C(()=>K9("piclaw_debug_tool_calls",!1)),B=f(()=>{let N=!_;$(N),V9("piclaw_dev_mode",N)},[_]);return F`
        <div class="settings-section">
            <h3>Developer</h3>
            <div class="settings-row">
                <label>Developer mode</label>
                <input type="checkbox" checked=${_} onChange=${B} />
            </div>

            <p class="settings-hint settings-local-only-hint">This browser only. Developer-mode toggles and add-on catalog overrides are stored in local browser storage.</p>

            ${_&&F`
                <h3 style="margin-top:16px">Add-on Sources</h3>
                <div class="settings-row">
                    <label>Catalog URL</label>
                    <input type="text" value=${j}
                        onInput=${(N)=>{let U=N.target.value;G(U),N9("piclaw_addons_catalog_url",U)}}
                        placeholder="https://raw.githubusercontent.com/.../catalog.json" style="max-width:400px" />
                </div>
                <p class="settings-hint" style="margin-top:0">Primary add-on catalog URL. Leave empty to use the default (<code>rcarmo/piclaw-addons</code>).</p>
                <div class="settings-row" style="align-items:flex-start;">
                    <label>Additional catalog URLs</label>
                    <textarea
                        value=${Z}
                        onInput=${(N)=>{let U=N.target.value;X(U),N9("piclaw_addons_catalog_urls",U)}}
                        placeholder="One URL per line\nhttps://example.com/catalog.json"
                        style="max-width:400px; min-height:86px; resize:vertical;"
                    ></textarea>
                </div>
                <p class="settings-hint" style="margin-top:0">Fetched in addition to the primary/default catalog. One URL per line.</p>
                <div class="settings-row">
                    <label>Repo URL</label>
                    <input type="text" value=${Y}
                        onInput=${(N)=>{let U=N.target.value;L(U),N9("piclaw_addons_repo_url",U)}}
                        placeholder="https://github.com/.../piclaw-addons.git" style="max-width:400px" />
                </div>
                <p class="settings-hint" style="margin-top:0">Override the git repo used for <code>bun add</code> installs. Leave empty for default.</p>

                <h3 style="margin-top:16px">Debug</h3>
                <div class="settings-row">
                    <label>Log SSE events</label>
                    <input type="checkbox" checked=${K}
                        onChange=${()=>{let N=!K;q(N),V9("piclaw_debug_sse",N)}} />
                </div>
                <div class="settings-row">
                    <label>Log tool calls</label>
                    <input type="checkbox" checked=${Q}
                        onChange=${()=>{let N=!Q;V(N),V9("piclaw_debug_tool_calls",N)}} />
                </div>
                <p class="settings-hint">Debug flags take effect on next page reload.</p>
            `}
        </div>
    `}var yW;var _L=J_(()=>{T0();E5();yW=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`;d$({id:"developer",label:"Developer",icon:yW,component:kW,order:900})});var XL={};j1(XL,{openSettingsDialog:()=>rW,SettingsDialogContent:()=>ZL,SettingsDialog:()=>pW});function O6(_){z6.push({ts:performance.now(),label:_})}function wW(){if(!z6.length)return;let _=z6[0].ts,$=z6.map((j)=>`+${(j.ts-_).toFixed(1)}ms ${j.label}`);console.info(`[settings-dialog perf]
`+$.join(`
`));try{window.__piclawSettingsPerfLog=$}catch(j){}try{fetch("/agent/client-perf",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({label:"settings-dialog",lines:$})}).catch((j)=>{})}catch(j){}z6.length=0}function IW(_){let $=d2.get(_);if($)return Promise.resolve($);let j=p2.get(_);if(j)return j;let G=TW[_]().then((Z)=>{return d2.set(_,Z),p2.delete(_),Z}).catch((Z)=>{throw p2.delete(_),Z});return p2.set(_,G),G}function r2(_="Loading…"){return F`
        <div class="settings-loading settings-loading-pane" role="status" aria-live="polite">
            <span class="settings-spinner"></span>
            <span>${_}</span>
        </div>
    `}function ZL({onClose:_}){O6("SettingsDialogContent-render-start");let[$,j]=C(()=>n7()||"general"),[G,Z]=C($L),[X,Y]=C(null),[L,K]=C(""),[,q]=C(0),[Q,V]=C(()=>Object.fromEntries(d2.entries())),[B,N]=C(null),[U,D]=C({compact:!1,narrow:!1}),E=g(null),H=g(null);u(()=>{O6("SettingsDialogContent-mounted"),wW()},[]),u(()=>{let W=(y)=>{if(y.key==="Escape")_()};return window.addEventListener("keydown",W),()=>window.removeEventListener("keydown",W)},[_]),u(()=>{let W=(y)=>{let x=typeof y?.detail?.section==="string"?y.detail.section.trim():"";if(x)j(x),K("")};return window.addEventListener("piclaw:open-settings",W),()=>window.removeEventListener("piclaw:open-settings",W)},[]),u(()=>{let W=()=>q((y)=>y+1);return window.addEventListener("piclaw:settings-panes-changed",W),()=>window.removeEventListener("piclaw:settings-panes-changed",W)},[]),u(()=>{fetch("/agent/settings-data").then((W)=>W.json()).then((W)=>{$L=W,Z(W)}).catch(()=>Z({}))},[]),u(()=>{let W=H.current;if(!W)return;let y=()=>{let x=W.clientWidth||0;D((P)=>{let S={compact:x>0&&x<=860,narrow:x>0&&x<=720};return P.compact===S.compact&&P.narrow===S.narrow?P:S})};if(y(),typeof ResizeObserver==="function"){let x=new ResizeObserver(()=>y());return x.observe(W),()=>x.disconnect()}return window.addEventListener("resize",y),()=>window.removeEventListener("resize",y)},[]);let M=oX(),J=[...GL,...M.map((W)=>({id:W.id,label:W.label,icon:W.icon,searchable:W.searchable||!1,placeholder:W.searchPlaceholder,order:W.order??500,isExtension:!0,component:W.component}))].sort((W,y)=>(W.order??500)-(y.order??500)),O=J.find((W)=>W.id===$)||GL.find((W)=>W.id===$);u(()=>{if(O?.searchable)requestAnimationFrame(()=>E.current?.focus())},[$]),u(()=>{if(O?.isExtension){N(null);return}let W=!1;if(Q[$]){N(null);return}return N($),IW($).then((y)=>{if(W)return;V((x)=>x?.[$]?x:{...x||{},[$]:y})}).catch((y)=>{if(W)return;console.error(`[settings-dialog] Failed to lazy-load section "${$}".`,y)}).finally(()=>{if(!W)N((y)=>y===$?null:y)}),()=>{W=!0}},[$,O?.isExtension,Q]);let T=f((W,y="info")=>{Y(W?{text:W,type:y}:null)},[]),I=f((W)=>{j(W),K("");let y=xW[W];if(y&&!jL.has(W))jL.add(W),y().then(()=>q((x)=>x+1)).catch((x)=>{})},[]),A=f((W)=>{Z((y)=>({...y||{},...W||{}}))},[]),k=()=>{if(O?.isExtension){if(!O.component)return r2("Loading pane…");let y=O.component;return F`<${y} filter=${L} />`}let W=Q[$];if(!W||B===$)return r2(`Loading ${O?.label||"settings"}…`);switch($){case"general":return F`<${W} settingsData=${G} setStatus=${T} mergeSettingsData=${A} />`;case"sessions":return F`<${W} settingsData=${G} setStatus=${T} mergeSettingsData=${A} />`;case"compaction":return F`<${W} settingsData=${G} setStatus=${T} mergeSettingsData=${A} />`;case"keyboard":return F`<${W} filter=${L} setStatus=${T} />`;case"workspace":return F`<${W} settingsData=${G} setStatus=${T} mergeSettingsData=${A} />`;case"environment":return F`<${W} settingsData=${G} filter=${L} setStatus=${T} mergeSettingsData=${A} />`;case"providers":return F`<${W} providers=${G?.providers} setStatus=${T} />`;case"models":return F`<${W} filter=${L} />`;case"theme":return F`<${W} themes=${G?.themes} colorKeys=${G?.colorKeys} settingsData=${G} setStatus=${T} mergeSettingsData=${A} />`;case"scheduled-tasks":return F`<${W} filter=${L} setStatus=${T} />`;case"quick-actions":return F`<${W} filter=${L} setStatus=${T} mergeSettingsData=${A} />`;case"keychain":return F`<${W} filter=${L} />`;case"tools":return F`<${W} toolsets=${G?.toolsets} filter=${L} settingsData=${G} mergeSettingsData=${A} />`;case"addons":return F`<${W} setStatus=${T} filter=${L} />`;default:return r2("Loading settings…")}},z=!O;return O6("SettingsDialogContent-render-end"),F`
        <div class="settings-dialog-backdrop" onClick=${(W)=>{if(W.target===W.currentTarget)_()}}>
            <div ref=${H} data-testid="settings-dialog" class=${`settings-dialog${U.compact?" settings-dialog-compact":""}${U.narrow?" settings-dialog-narrow":""}`}>
                <div class="settings-dialog-header">
                    <span class="settings-dialog-title">Settings</span>
                    ${O?.searchable&&F`
                        <input ref=${E} type="text" class="settings-header-filter"
                            placeholder=${O.placeholder||"Filter…"}
                            value=${L} onInput=${(W)=>K(W.target.value)} />
                    `}
                    <button class="settings-dialog-close" onClick=${_} title="Close (Esc)">✕</button>
                </div>
                <div class="settings-dialog-body">
                    <nav class="settings-nav">
                        ${J.map((W,y)=>{let x=y>0&&!J[y-1].isExtension,P=W.isExtension&&x;return F`
                                ${P&&F`<div class="settings-nav-separator"></div>`}
                                <button class=${`settings-nav-item ${W.id===$?"active":""}`} onClick=${()=>I(W.id)}>
                                    <span class="settings-nav-icon">${W.icon}</span>
                                    <span class="settings-nav-label">${W.label}</span>
                                </button>
                            `})}
                    </nav>
                    <main class="settings-content">
                        ${z?r2("Loading settings…"):k()}
                    </main>
                </div>
                ${X&&F`
                    <div class=${`settings-status-bar settings-status-bar-${X.type}`}>
                        ${X.type==="info"&&F`<span class="settings-spinner"></span>`}
                        <span>${X.text}</span>
                        ${X.type!=="info"&&F`<button class="settings-status-dismiss" onClick=${()=>Y(null)}>✕</button>`}
                    </div>
                `}
            </div>
        </div>
    `}function pW(){let[_,$]=C(!1);if(u(()=>{let j=(Z)=>{let X=H5(Z?.detail?.section);if(X)try{window.__piclawSettingsRequestedSection=X}catch(Y){}$(!0)};window.addEventListener("piclaw:open-settings",j);let G=R2();if(G.open){if(G.section)try{window.__piclawSettingsRequestedSection=G.section}catch(Z){}$(!0)}return()=>window.removeEventListener("piclaw:open-settings",j)},[]),!_)return null;return F`<${r$} className="settings-portal"><${ZL} onClose=${()=>$(!1)} /><//>`}function rW(_={}){o1(_)}var z6,$L=null,d2,p2,TW,xW,jL,CW,fW,PW,RW,SW,uW,gW,bW,vW,mW,cW,lW,hW,nW,GL;var YL=J_(()=>{T0();S2();E5();XY();z6=[];O6("module-eval-start");O6("imports-done");d2=new Map,p2=new Map;d2.set("general",i7);TW={general:()=>Promise.resolve(i7),sessions:()=>Promise.resolve().then(() => (qY(),LY)).then((_)=>_.SessionsSection),compaction:()=>Promise.resolve().then(() => (VY(),KY)).then((_)=>_.CompactionSection),keyboard:()=>Promise.resolve().then(() => (EY(),HY)).then((_)=>_.KeyboardSection),workspace:()=>Promise.resolve().then(() => (AY(),JY)).then((_)=>_.WorkspaceSection),environment:()=>Promise.resolve().then(() => (yY(),kY)).then((_)=>_.EnvironmentSection),providers:()=>Promise.resolve().then(() => (wY(),MY)).then((_)=>_.ProvidersSection),models:()=>Promise.resolve().then(() => (xY(),TY)).then((_)=>_.ModelsSection),theme:()=>Promise.resolve().then(() => (fY(),CY)).then((_)=>_.ThemeSection),"scheduled-tasks":()=>Promise.resolve().then(() => (SY(),RY)).then((_)=>_.ScheduledTasksSection),"quick-actions":()=>Promise.resolve().then(() => (hY(),lY)).then((_)=>_.QuickActionsSection),keychain:()=>Promise.resolve().then(() => (pY(),nY)).then((_)=>_.KeychainSection),tools:()=>Promise.resolve().then(() => (dY(),rY)).then((_)=>_.ToolsSection),addons:()=>Promise.resolve().then(() => (oY(),iY)).then((_)=>_.AddonsSection)},xW={"editor-settings":()=>Promise.resolve().then(() => (sY(),DW)).then(()=>{}),"mindmap-settings":()=>Promise.resolve().then(() => (eY(),AW)).then(()=>{}),developer:()=>Promise.resolve().then(() => (_L(),MW)).then(()=>{})},jL=new Set;CW=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M8.5 5.9L9.6 2.3h4.8l1.1 3.6 3.7-.8 2.4 4.1-2.6 2.8 2.6 2.8-2.4 4.1-3.7-.8-1.1 3.6H9.6l-1.1-3.6-3.7.8-2.4-4.1L5 12 2.4 9.2l2.4-4.1z"/></svg>`,fW=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,PW=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7"/><polyline points="3 4 3 10 9 10"/><path d="M12 7v5l3 3"/></svg>`,RW=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`,SW=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/><path d="M8 7v10"/><path d="M16 7v10"/></svg>`,uW=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 9h.01"/><path d="M10 9h.01"/><path d="M14 9h.01"/><path d="M18 9h.01"/><path d="M8 13h.01"/><path d="M12 13h.01"/><path d="M16 13h.01"/><path d="M7 17h10"/></svg>`,gW=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,bW=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="9" width="14" height="10" rx="2"/><circle cx="9" cy="14" r="1.5" fill="currentColor" stroke="none"/><circle cx="15" cy="14" r="1.5" fill="currentColor" stroke="none"/><line x1="12" y1="9" x2="12" y2="5"/><circle cx="12" cy="4" r="1.5"/></svg>`,vW=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.1 0 2-.9 2-2 0-.53-.21-1.01-.55-1.36-.34-.36-.55-.84-.55-1.37 0-1.1.9-2 2-2h2.36c3.08 0 5.64-2.56 5.64-5.64C22.9 5.85 18.05 2 12 2z"/><circle cx="8" cy="10" r="1.5" fill="currentColor" stroke="none"/><circle cx="12" cy="7" r="1.5" fill="currentColor" stroke="none"/><circle cx="16" cy="10" r="1.5" fill="currentColor" stroke="none"/></svg>`,mW=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/><path d="M7 3.5 4 6"/><path d="m17 3.5 3 2.5"/></svg>`,cW=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,lW=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,hW=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="14" r="3"/><path d="M11 14h9"/><path d="M16 14v-2"/><path d="M19 14v2"/></svg>`,nW=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,GL=[{id:"general",label:"General",icon:CW,searchable:!1,order:10},{id:"sessions",label:"Sessions",icon:fW,searchable:!1,order:12},{id:"compaction",label:"Compaction",icon:PW,searchable:!1,order:13},{id:"keyboard",label:"Keyboard",icon:uW,searchable:!0,placeholder:"Filter shortcuts…",order:14},{id:"workspace",label:"Workspace",icon:RW,searchable:!1,order:15},{id:"environment",label:"Environment",icon:SW,searchable:!0,placeholder:"Filter environment…",order:16},{id:"providers",label:"Providers",icon:gW,searchable:!1,order:20},{id:"models",label:"Models",icon:bW,searchable:!0,placeholder:"Filter models…",order:30},{id:"theme",label:"Appearance",icon:vW,searchable:!1,order:40},{id:"scheduled-tasks",label:"Scheduled Tasks",icon:mW,searchable:!0,placeholder:"Filter scheduled tasks…",order:65},{id:"quick-actions",label:"Quick Actions",icon:lW,searchable:!0,placeholder:"Filter quick actions…",order:70},{id:"keychain",label:"Keychain",icon:hW,searchable:!0,placeholder:"Filter entries…",order:75},{id:"tools",label:"Tools",icon:cW,searchable:!0,placeholder:"Filter tools…",order:80},{id:"addons",label:"Add-ons",icon:nW,searchable:!0,placeholder:"Filter add-ons…",order:90}]});T0();class DG{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let G of this.extensions.values()){if(G.placement!=="tabs")continue;if(!G.canHandle)continue;try{let Z=G.canHandle(_);if(Z===!1||Z===0)continue;let X=Z===!0?0:typeof Z==="number"?Z:0;if(X>j)j=X,$=G}catch(Z){console.warn(`[PaneRegistry] canHandle() error for "${G.id}":`,Z)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var L_=new DG;var j2=null,U3=null;function kF(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function WG(){if(U3)return Promise.resolve(U3);if(!j2)j2=import(kF()).then((_)=>{return U3=_,_}).catch((_)=>{throw j2=null,_});return j2}class zG{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;queuedDiffMode=void 0;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await WG();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState));if(this.queuedDiffMode!==void 0&&typeof this.real.setDiffMode==="function")this.real.setDiffMode(this.queuedDiffMode)}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}beforeDetachFromHost(_){return this.real?.beforeDetachFromHost?.(_)}afterAttachToHost(_){return this.real?.afterAttachToHost?.(_)}moveHost(_,$){return this.real?.moveHost?.(_,$)??!1}exportHostTransferState(){return this.real?.exportHostTransferState?.()??null}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}setDiffMode(_){this.queuedDiffMode=_,this.real?.setDiffMode?.(_)}}var H3={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new zG(_,$)}};function E3(){WG().catch((_)=>{console.warn("[editor-loader] Background preload failed; the editor will retry on demand.",_)})}function OG(_){try{return typeof _?.crypto?.randomUUID==="function"?_.crypto.randomUUID():null}catch($){return null}}function G2(_,$){try{return _?.removeItem?.($),!0}catch(j){return!1}}var JG="piclaw:editor-popout:",yF=300000;function AG(_){try{return _?.localStorage??null}catch{return null}}function MF(_=Date.now()){return`editor-popout-${_.toString(36)}-${Math.random().toString(36).slice(2,10)}`}function kG(_){return typeof _==="string"?_.trim():""}function yG(_){return(typeof _==="string"?_.trim():"")||null}function MG(_){return typeof _==="string"?_:void 0}function wG(_){if(_===void 0)return;if(typeof _!=="string")return null;return _.trim()||null}function TG(_){if(!_||typeof _!=="object")return null;let $=_,j={};if(typeof $.cursorLine==="number"&&Number.isFinite($.cursorLine))j.cursorLine=$.cursorLine;if(typeof $.cursorCol==="number"&&Number.isFinite($.cursorCol))j.cursorCol=$.cursorCol;if(typeof $.scrollTop==="number"&&Number.isFinite($.scrollTop))j.scrollTop=$.scrollTop;return Object.keys(j).length>0?j:null}function _5(_,$=globalThis){let j=$?.window??$;if(!j?.location?.href)return null;try{let G=new URL(j.location.href),Z=G.searchParams.get(_)?.trim()||"";if(!Z)return null;return G.searchParams.delete(_),j.history?.replaceState?.(j.history.state,j.document?.title||"",G.toString()),Z}catch{return null}}function wF(_,$=globalThis,j=Date.now()){let G=AG($),Z=kG(_?.path);if(!G||!Z)return null;let X={path:Z,content:MG(_?.content),mtime:wG(_?.mtime),paneOverrideId:yG(_?.paneOverrideId),viewState:TG(_?.viewState),capturedAt:j};if(!Boolean(X.content!==void 0||X.paneOverrideId||X.viewState||X.mtime))return null;let L=MF(j);try{return G.setItem(`${JG}${L}`,JSON.stringify(X)),L}catch{return null}}function D3(_,$=globalThis,j=Date.now()){let G=typeof _==="string"?_.trim():"",Z=AG($);if(!G||!Z)return null;let X=`${JG}${G}`,Y="";try{Y=Z.getItem(X)||""}catch{return null}if(!Y)return null;G2(Z,X);try{let L=JSON.parse(Y),K=typeof L?.capturedAt==="number"&&Number.isFinite(L.capturedAt)?L.capturedAt:j;if(K+yF<j)return null;let q=kG(L?.path);if(!q)return null;return{path:q,content:MG(L?.content),mtime:wG(L?.mtime),paneOverrideId:yG(L?.paneOverrideId),viewState:TG(L?.viewState),capturedAt:K}}catch{return null}}function Z2(_,$=globalThis,j=Date.now()){let G=wF(_,$,j);return G?{editor_popout:G}:null}function w1(_){try{return _(),!0}catch($){return!1}}function xG(_){let{ownerWindow:$,themeChangeListener:j,mediaQuery:G,mediaQueryListener:Z,dockResizeListener:X,windowResizeListener:Y,themeObserver:L,resizeObserver:K}=_;w1(()=>{if(j)$?.removeEventListener?.("piclaw-theme-change",j)}),w1(()=>{if(G&&Z){if(G.removeEventListener)G.removeEventListener("change",Z);else if(G.removeListener)G.removeListener(Z)}}),w1(()=>{if(X)$?.removeEventListener?.("dock-resize",X);if(Y)$?.removeEventListener?.("resize",Y)}),w1(()=>{L?.disconnect?.()}),w1(()=>{K?.disconnect?.()})}function IG(_){_.syncHostLayout(),w1(()=>{_.terminal?.renderer?.remeasureFont?.()}),w1(()=>{_.fitAddon?.fit?.()}),w1(()=>{_.terminal?.refresh?.()}),_.syncHostLayout(),_.sendResize()}function CG(_){let{resizeFrame:$=0,cancelAnimationFrameFn:j=cancelAnimationFrame,socket:G,fitAddon:Z,terminal:X,termEl:Y}=_;if($)w1(()=>{j($)});return w1(()=>{G?.close?.()}),w1(()=>{Z?.dispose?.()}),w1(()=>{X?.dispose?.()}),Y?.remove?.(),0}function h1(_){try{return _(),!0}catch($){return!1}}function fG(_){let{termEl:$,bodyEl:j,terminal:G,theme:Z,themeChanged:X=!1,socket:Y,resize:L}=_;if(h1(()=>{if($?.style)$.style.backgroundColor=Z.background,$.style.color=Z.foreground;if(j?.style)j.style.backgroundColor=Z.background,j.style.color=Z.foreground;let K=j?.querySelector?.(".terminal-live-host");if(K&&typeof K==="object"&&"style"in K)K.style.backgroundColor=Z.background,K.style.color=Z.foreground;let q=j?.querySelector?.("canvas");if(q&&typeof q==="object"&&"style"in q)q.style.backgroundColor=Z.background,q.style.color=Z.foreground}),h1(()=>{if(G?.options)G.options.theme=Z}),X)h1(()=>{G?.reset?.()});h1(()=>{G?.renderer?.setTheme?.(Z),G?.renderer?.clear?.()}),h1(()=>{G?.loadFonts?.()}),h1(()=>{G?.renderer?.remeasureFont?.()}),h1(()=>{if(G?.wasmTerm&&G?.renderer?.render)G.renderer.render(G.wasmTerm,!0,G.viewportY||0,G),G.renderer.render(G.wasmTerm,!1,G.viewportY||0,G)}),h1(()=>{L?.()}),h1(()=>{if(X&&Y?.readyState===1)Y.send?.(JSON.stringify({type:"input",data:"\f"}))}),h1(()=>{G?.refresh?.()})}var TF="/static/js/vendor/ghostty-web.js",xF="/static/js/vendor/ghostty-vt.wasm",j5="piclaw://terminal",IF='FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',CF='400 13px "FiraCode Nerd Font Mono"',fF='700 13px "FiraCode Nerd Font Mono"',bG="x-piclaw-terminal-client",PG="piclaw_terminal_client",PF={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},RF={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},X2=null,W3=null;function SF(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function uF(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL(xF,window.location.origin).href,G=(Z,X)=>{let Y=Z instanceof Request?Z.url:Z instanceof URL?Z.href:String(Z);if(!SF(Y))return $(Z,X);if(Z instanceof Request)return $(new Request(j,Z));return $(j,X)};globalThis.fetch=G;try{return await _()}finally{globalThis.fetch=$}}async function gF(){let $=await import(new URL(TF,window.location.origin).href);if(!X2)X2=uF(()=>Promise.resolve($.init?.())).catch((j)=>{throw X2=null,j});return await X2,$}async function bF(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!W3)W3=Promise.allSettled([document.fonts.load(CF),document.fonts.load(fF),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await W3}function RG(_=typeof window<"u"?window:null){try{if(typeof _?.crypto?.randomUUID==="function")return _.crypto.randomUUID()}catch($){console.debug("[terminal-pane] Failed to generate crypto-backed terminal client token; falling back.",$)}return`terminal-client-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}function O3(_=typeof window<"u"?window:null){if(!_)return null;try{let $=_.localStorage,j=typeof $?.getItem==="function"?String($.getItem(PG)||"").trim():"";if(j)return j;let G=RG(_);return $?.setItem?.(PG,G),G}catch($){return RG(_)}}async function vF(_=O3()){let $=await fetch("/terminal/session",{method:"GET",credentials:"same-origin",headers:_?{[bG]:_}:void 0}),j=await $.json().catch(()=>({}));if(!$.ok)throw Error(j?.error||`HTTP ${$.status}`);return j}async function mF(_=O3()){let $=await fetch("/terminal/handoff",{method:"POST",credentials:"same-origin",headers:_?{[bG]:_}:void 0}),j=await $.json().catch(()=>({}));if(!$.ok)throw Error(j?.error||`HTTP ${$.status}`);return typeof j?.handoff?.token==="string"&&j.handoff.token.trim()?j.handoff.token.trim():null}function cF(_,$=null,j=O3()){let G=window.location.protocol==="https:"?"wss:":"ws:",Z=new URL(`${G}//${window.location.host}${_}`);if($)Z.searchParams.set("handoff",String($));if(j)Z.searchParams.set("client",String(j));return Z.toString()}function lF(_=typeof window<"u"?window:null,$=typeof document<"u"?document:null){if(!_||!$)return!1;let{documentElement:j,body:G}=$,Z=j?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(Z==="dark")return!0;if(Z==="light")return!1;if(j?.classList?.contains("dark")||G?.classList?.contains("dark"))return!0;if(j?.classList?.contains("light")||G?.classList?.contains("light"))return!1;return Boolean(_.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function B4(_,$="",j=typeof document<"u"?document:null){if(!j)return $;return getComputedStyle(j.documentElement).getPropertyValue(_)?.trim()||$}function $5(_){let $=String(_||"").trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(/^[0-9a-fA-F]{3}$/.test(j)||/^[0-9a-fA-F]{6}$/.test(j)){let Z=j.length===3?j.split("").map((Y)=>Y+Y).join(""):j,X=parseInt(Z,16);return{r:X>>16&255,g:X>>8&255,b:X&255}}let G=$.match(/rgba?\(\s*(\d+)[,\s]\s*(\d+)[,\s]\s*(\d+)/i);if(G)return{r:parseInt(G[1],10),g:parseInt(G[2],10),b:parseInt(G[3],10)};return null}function SG(_){let $=(j)=>{let G=j/255;return G<=0.03928?G/12.92:Math.pow((G+0.055)/1.055,2.4)};return 0.2126*$(_.r)+0.7152*$(_.g)+0.0722*$(_.b)}function p5(_,$){let j=SG(_),G=SG($),Z=Math.max(j,G),X=Math.min(j,G);return(Z+0.05)/(X+0.05)}function vG(_){let $=$5(_);if(!$)return"#ffffff";let j={r:255,g:255,b:255},G={r:0,g:0,b:0};return p5($,j)>=p5($,G)?"#ffffff":"#000000"}function Y2(_){let $=(j)=>Math.max(0,Math.min(255,Math.round(j||0)));return`#${[_.r,_.g,_.b].map((j)=>$(j).toString(16).padStart(2,"0")).join("")}`}function uG(_,$,j){let G=Math.max(0,Math.min(1,Number.isFinite(j)?j:0));return{r:_.r+($.r-_.r)*G,g:_.g+($.g-_.g)*G,b:_.b+($.b-_.b)*G}}function G1(_,$,j=4.5){let G=$5(_),Z=$5($);if(!G||!Z)return $;if(p5(G,Z)>=j)return Y2(Z);let X=$5(vG(_));if(!X)return Y2(Z);let Y=X,L=1,K=0,q=1;for(let B=0;B<14;B+=1){let N=(K+q)/2,U=uG(Z,X,N);if(p5(G,U)>=j)Y=U,L=N,q=N;else K=N}let Q=Y2(Y),V=$5(Q);while(V&&p5(G,V)<j&&L<1)L=Math.min(1,L+0.01),Q=Y2(uG(Z,X,L)),V=$5(Q);return Q}function hF(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function gG(_=typeof window<"u"?window:null,$=typeof document<"u"?document:null){let j=lF(_,$),G=j?RF:PF,Z=B4("--bg-primary",j?"#000000":"#ffffff",$),X=B4("--text-primary",j?"#e7e9ea":"#0f1419",$),Y=G1(Z,X||vG(Z),7),L=B4("--accent-color","#1d9bf0",$),K=B4("--danger-color",j?"#ff7b72":"#cf222e",$),q=B4("--success-color",j?"#7ee787":"#1a7f37",$),Q=B4("--bg-hover",j?"#1d1f23":"#e8ebed",$),V=B4("--accent-soft-strong",hF(L,j?"47":"33"),$);return{background:Z,foreground:Y,cursor:G1(Z,L,3),cursorAccent:Z,selectionBackground:V,selectionForeground:Y,black:G1(Z,Q,3),red:G1(Z,K,4.5),green:G1(Z,q,4.5),yellow:G1(Z,G.yellow,4.5),blue:G1(Z,L,4.5),magenta:G1(Z,G.magenta,4.5),cyan:G1(Z,G.cyan,4.5),white:Y,brightBlack:G1(Z,G.brightBlack,3),brightRed:G1(Z,G.brightRed,4.5),brightGreen:G1(Z,G.brightGreen,4.5),brightYellow:G1(Z,G.brightYellow,4.5),brightBlue:G1(Z,G.brightBlue,4.5),brightMagenta:G1(Z,G.brightMagenta,4.5),brightCyan:G1(Z,G.brightCyan,4.5),brightWhite:Y}}function mG(_){let $=_?.activeElement;if(!$||$===_?.body||$===_?.documentElement)return!1;if(typeof $.blur!=="function")return!1;return $.blur(),!0}function z3(_,$){let j=[_?.inputElement,_?.textarea,_?.container,$,$?.querySelector?.("textarea")].filter((G,Z,X)=>Boolean(G)&&X.indexOf(G)===Z);for(let G of j)try{let Z=G.ownerDocument?.defaultView||window,X=typeof Z.CompositionEvent==="function"?new Z.CompositionEvent("compositionend",{data:""}):new Z.Event("compositionend");G.dispatchEvent?.(X)}catch(Z){console.debug("[terminal-pane] Failed to dispatch best-effort IME composition reset.",Z)}if(_&&typeof _==="object")_.isComposing=!1,_.pendingKeyAfterComposition=null,_.compositionJustEnded=!1}function nF(_){if(mG(_.ownerDocument),z3(_.terminal,_.terminalHost||null),typeof _.terminal?.focus==="function")_.terminal.focus();else _.termEl?.focus?.();z3(_.terminal,_.terminalHost||null)}class J3{container;ownerDocument;ownerWindow;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;resizeRetryTimers=new Set;lastAppliedThemeSignature=null;lastResizeSignature=null;pendingHandoffToken=null;standbyHandoffToken=null;standbyHandoffRequest=null;constructor(_,$){this.container=_,this.ownerDocument=_.ownerDocument||document,this.ownerWindow=this.ownerDocument.defaultView||window;let j=typeof $?.transferState?.handoffToken==="string"&&$.transferState.handoffToken.trim()?$.transferState.handoffToken.trim():null,G=_5("terminal_handoff");this.pendingHandoffToken=j||G||null,this.termEl=this.ownerDocument.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.termEl.setAttribute("inputmode","none"),this.statusEl=this.ownerDocument.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=this.ownerDocument.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.style.display="flex",this.bodyEl.style.flex="1 1 auto",this.bodyEl.style.minHeight="0",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,G=Number.isFinite(_?.height)?_.height:0,Z=Number.isFinite($?.width)?$.width:0,X=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(G)}:${Math.round(Z)}x${Math.round(X)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;_.style.display="flex",_.style.flex="1 1 auto",_.style.width="100%",_.style.height="100%",_.style.minWidth="0",_.style.minHeight="0",_.style.overflow="hidden";let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.minHeight="0",$.style.flex="1 1 auto",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none",j.style.maxHeight="none"}queueResizeRetries(_=[32,96,180,320,520,900]){if(this.disposed||!this.ownerWindow)return;this.clearResizeRetries();for(let $ of _){let j=this.ownerWindow.setTimeout(()=>{if(this.resizeRetryTimers.delete(j),this.disposed)return;this.scheduleResize(!0)},$);this.resizeRetryTimers.add(j)}}clearResizeRetries(){if(!this.ownerWindow||this.resizeRetryTimers.size===0)return;for(let _ of Array.from(this.resizeRetryTimers))try{this.ownerWindow.clearTimeout(_)}catch($){console.debug("[terminal-pane] Ignoring timeout clear failure during resize retry drain.",$,{timer:_})}this.resizeRetryTimers.clear()}scheduleResize(_=!1){if(this.disposed)return;let $=this.getResizeSignature();if(!_&&this.lastResizeSignature===$)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await gF();if(await bF(),this.disposed)return;this.bodyEl.innerHTML="";let $=this.ownerDocument.createElement("div");$.className="terminal-live-host",$.style.display="flex",$.style.flex="1 1 auto",$.style.width="100%",$.style.height="100%",$.style.minWidth="0",$.style.minHeight="0",$.setAttribute("inputmode","none"),this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:IF,fontSize:13,theme:gG(this.ownerWindow,this.ownerDocument)}),G=null;if(typeof _.FitAddon==="function")G=new _.FitAddon,j.loadAddon?.(G);mG(this.ownerDocument),await j.open($),$.__terminal=j,z3(j,$),this.syncHostLayout(),j.loadFonts?.(),G?.observeResize?.(),this.terminal=j,this.fitAddon=G,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(!0),this.queueResizeRetries([32,96,180,320]),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=gG(this.ownerWindow,this.ownerDocument),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;fG({termEl:this.termEl,bodyEl:this.bodyEl,terminal:this.terminal,theme:_,themeChanged:j,socket:this.socket,resize:()=>this.resize()}),this.lastAppliedThemeSignature=$}installThemeSync(){if(!this.ownerWindow||!this.ownerDocument)return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();this.ownerWindow.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=this.ownerWindow.matchMedia?.("(prefers-color-scheme: dark)"),G=()=>_();if(j?.addEventListener)j.addEventListener("change",G);else if(j?.addListener)j.addListener(G);this.mediaQuery=j,this.mediaQueryListener=G;let Z=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(Z?.observe(this.ownerDocument.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),this.ownerDocument.body)Z?.observe(this.ownerDocument.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=Z}installResizeSync(){if(!this.ownerWindow)return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(this.ownerWindow.addEventListener("dock-resize",_),this.ownerWindow.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),j.observe(this.termEl),j.observe(this.bodyEl),this.resizeObserver=j}}consumeStandbyHandoffToken(){let _=this.standbyHandoffToken||null;return this.standbyHandoffToken=null,_}async ensureStandbyHandoffToken(_=!1){if(this.disposed)return null;if(!_&&this.standbyHandoffToken)return this.standbyHandoffToken;if(this.standbyHandoffRequest)return await this.standbyHandoffRequest;return this.standbyHandoffRequest=mF().then(($)=>{if(!$||this.disposed)return null;return this.standbyHandoffToken=$,$}).catch(($)=>{return console.warn("[terminal-pane] Failed to prepare standby handoff token:",$),null}).finally(()=>{this.standbyHandoffRequest=null}),await this.standbyHandoffRequest}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await vF();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=this.pendingHandoffToken||null,G=new WebSocket(cF($.ws_path||"/terminal/ws",j));this.socket=G,this.setStatus(j?"Transferring…":"Connecting…"),_.onData?.((Z)=>{if(G.readyState===WebSocket.OPEN)G.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:X})=>{if(G.readyState===WebSocket.OPEN)G.send(JSON.stringify({type:"resize",cols:Z,rows:X}))}),G.addEventListener("open",()=>{if(this.disposed)return;if(j&&this.pendingHandoffToken===j)this.pendingHandoffToken=null;this.ensureStandbyHandoffToken(!1),this.setStatus("Connected"),this.scheduleResize(!0),this.queueResizeRetries([24,72,160,320])}),G.addEventListener("message",(Z)=>{if(this.disposed)return;let X=null;try{X=JSON.parse(String(Z.data))}catch{X={type:"output",data:String(Z.data)}}if(X?.type==="session"){let Y=typeof X.session_id==="string"?X.session_id:null;if(_.__piclawSessionMeta={sessionId:Y,createdAt:typeof X.created_at==="string"?X.created_at:null,processPid:typeof X.process_pid==="number"?X.process_pid:null},!this.standbyHandoffToken)this.ensureStandbyHandoffToken(!1);return}if(X?.type==="output"&&typeof X.data==="string"){_.write?.(X.data);return}if(X?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),G.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),G.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}detachHostListeners(){xG({ownerWindow:this.ownerWindow,themeChangeListener:this.themeChangeListener,mediaQuery:this.mediaQuery,mediaQueryListener:this.mediaQueryListener,dockResizeListener:this.dockResizeListener,windowResizeListener:this.windowResizeListener,themeObserver:this.themeObserver,resizeObserver:this.resizeObserver}),this.themeChangeListener=null,this.mediaQuery=null,this.mediaQueryListener=null,this.themeObserver=null,this.resizeObserver=null,this.dockResizeListener=null,this.windowResizeListener=null}beforeDetachFromHost(){this.setStatus("Moving terminal…")}afterAttachToHost(_){let $=typeof _?.transferState?.handoffToken==="string"&&_.transferState.handoffToken.trim()?_.transferState.handoffToken.trim():null;if($)this.pendingHandoffToken=$;if(this.installThemeSync(),this.installResizeSync(),this.socket?.readyState===WebSocket.OPEN)this.setStatus("Connected");else if(this.pendingHandoffToken)this.setStatus("Transferring…");else if(this.socket?.readyState===WebSocket.CONNECTING)this.setStatus("Connecting…");this.scheduleResize(!0),this.queueResizeRetries([32,96,180,320]),requestAnimationFrame(()=>this.focus())}moveHost(_){return!1}exportHostTransferState(){let _=this.standbyHandoffToken||this.pendingHandoffToken||null;return _?{kind:"terminal",live:!1,handoffToken:_}:null}async preparePopoutTransfer(){let _=this.consumeStandbyHandoffToken();if(!_)await this.ensureStandbyHandoffToken(!0),_=this.consumeStandbyHandoffToken();if(!_)return null;return this.pendingHandoffToken=_,{terminal_handoff:_}}getContent(){return}isDirty(){return!1}focus(){let _=this.bodyEl.querySelector(".terminal-live-host");nF({terminal:this.terminal,terminalHost:_,termEl:this.termEl,ownerDocument:this.ownerDocument})}resize(){IG({syncHostLayout:()=>this.syncHostLayout(),terminal:this.terminal,fitAddon:this.fitAddon,sendResize:()=>this.sendResize()})}dispose(){if(this.disposed)return;this.disposed=!0,this.standbyHandoffToken=null,this.standbyHandoffRequest=null,this.clearResizeRetries(),this.detachHostListeners(),this.resizeFrame=CG({resizeFrame:this.resizeFrame,socket:this.socket,fitAddon:this.fitAddon,terminal:this.terminal,termEl:this.termEl})}}var A3={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new J3(_,$)}},k3={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path===j5?1e4:!1},mount(_,$){return new J3(_,$)}};function P1(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((Z)=>{try{return Boolean($.matchMedia(Z)?.matches)}catch{return!1}})}function L2(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let G=String(j?.userAgent||""),Z=Number(j?.maxTouchPoints||0),X=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(G),Y=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(X||Z>1||Y)}function cG(_,$={}){if(P1($))return null;if(L2($))return{target:"_blank",features:void 0,mode:"tab"};return{target:pF(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function y3(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function M3(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),G=String($.message||"Preparing a new branch window…");_.document.title=j;let Z=_.document.body;if(!Z)return;if(typeof _.document.createElement!=="function"){Z.textContent=`${j}
${G}`;return}let X=_.document.createElement("div");X.setAttribute("style","font-family: system-ui, sans-serif; padding: 24px; color: #222;");let Y=_.document.createElement("h1");Y.setAttribute("style","font-size: 18px; margin: 0 0 12px;"),Y.textContent=j;let L=_.document.createElement("p");if(L.setAttribute("style","margin: 0; line-height: 1.5;"),L.textContent=G,X.appendChild(Y),X.appendChild(L),typeof Z.replaceChildren==="function")Z.replaceChildren(X);else Z.innerHTML="",Z.appendChild(X)}catch{return}}function w3(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{return}}function T3(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{return}}function T1(_,$,j={}){let G=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(G.searchParams.set("chat_jid",Z),G.searchParams.delete("branch_loader"),G.searchParams.delete("branch_source_chat_jid"),G.searchParams.delete("pane_popout"),G.searchParams.delete("pane_path"),G.searchParams.delete("pane_label"),j.chatOnly!==!1)G.searchParams.set("chat_only","1");return G.toString()}function x3(_,$,j={}){let G=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(G.searchParams.set("branch_loader","1"),G.searchParams.set("branch_source_chat_jid",Z),G.searchParams.delete("chat_jid"),G.searchParams.delete("pane_popout"),G.searchParams.delete("pane_path"),G.searchParams.delete("pane_label"),j.chatOnly!==!1)G.searchParams.set("chat_only","1");return G.toString()}function lG(_,$,j={}){let G=new URL(String(_||"http://localhost/")),Z=String($||"").trim();if(!Z)return G.toString();if(G.searchParams.set("pane_popout","1"),G.searchParams.set("pane_path",Z),j?.label)G.searchParams.set("pane_label",String(j.label));else G.searchParams.delete("pane_label");if(j?.chatJid)G.searchParams.set("chat_jid",String(j.chatJid));let X=j?.params&&typeof j.params==="object"?j.params:null;if(X)for(let[Y,L]of Object.entries(X)){let K=String(Y||"").trim();if(!K)continue;if(L===null||L===void 0||L==="")G.searchParams.delete(K);else G.searchParams.set(K,String(L))}return G.searchParams.delete("chat_only"),G.searchParams.delete("branch_loader"),G.searchParams.delete("branch_source_chat_jid"),G.toString()}function pF(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function rF(_){return`piclaw-pane-${String(_||"pane").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function hG(_,$={}){if(P1($))return null;if(L2($))return{target:"_blank",features:void 0,mode:"tab"};return{target:rF(_),features:"popup=yes,width=1200,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function F4(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let G=j.toLowerCase();if(G.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(G.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(G.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(G.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(G.includes("failed to fork branch")||G.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function dF(_){try{return JSON.parse(_)}catch{return null}}function iF(_){if(typeof _==="string")return new TextEncoder().encode(_).byteLength;if(_ instanceof ArrayBuffer)return _.byteLength;if(ArrayBuffer.isView(_))return _.byteLength;if(_ instanceof Blob)return _.size;return 0}function oF(_){if(typeof _==="string")return _.length;if(_ instanceof ArrayBuffer)return _.byteLength;if(_ instanceof Blob)return _.size;return Number(_?.size||0)}function nG(_){try{return _?.close?.(),!0}catch($){return!1}}class I3{socket=null;disposed=!1;options;bytesIn=0;bytesOut=0;pendingOutbound=[];constructor(_){this.options=_}connect(){if(this.disposed)return;nG(this.socket);let _=new WebSocket(this.options.url);_.binaryType=this.options.binaryType||"arraybuffer",_.addEventListener("open",()=>{if(this.disposed||this.socket!==_)return;this.flushPendingOutbound(_),this.options.onOpen?.()}),_.addEventListener("message",($)=>{if(this.disposed||this.socket!==_)return;let j=oF($.data);if(this.bytesIn+=j,this.emitMetrics(),typeof $.data==="string"){let G=this.options.parseControlMessage||dF;this.options.onMessage?.({kind:"control",raw:$.data,payload:G($.data)});return}this.options.onMessage?.({kind:"binary",data:$.data,size:j})}),_.addEventListener("close",()=>{if(this.socket===_)this.socket=null;if(this.disposed)return;this.options.onClose?.()}),_.addEventListener("error",()=>{if(this.disposed||this.socket!==_)return;this.options.onError?.()}),this.socket=_}send(_){if(this.disposed)return;let $=this.socket;if(!$||$.readyState!==WebSocket.OPEN){this.pendingOutbound.push(_);return}this.sendNow($,_)}sendControl(_){this.send(JSON.stringify(_??{}))}getMetrics(){return{bytesIn:this.bytesIn,bytesOut:this.bytesOut}}dispose(){if(this.disposed)return;this.disposed=!0,nG(this.socket),this.socket=null}emitMetrics(){this.options.onMetrics?.(this.getMetrics())}sendNow(_,$){let j=iF($);this.bytesOut+=j,this.emitMetrics(),_.send($)}flushPendingOutbound(_){if(this.pendingOutbound.length===0)return;let $=this.pendingOutbound.splice(0);for(let j=0;j<$.length;j+=1){if(this.disposed||this.socket!==_||_.readyState!==WebSocket.OPEN){this.pendingOutbound.unshift(...$.slice(j));return}this.sendNow(_,$[j])}}}var r5=()=>{throw Error("Operation requires compiling with --exportRuntime")},sF=typeof BigUint64Array<"u",d5=Symbol();var aF=new TextDecoder("utf-16le",{fatal:!0});Object.hasOwn=Object.hasOwn||function(_,$){return Object.prototype.hasOwnProperty.call(_,$)};function pG(_,$){let j=new Uint32Array(_)[$+-4>>>2]>>>1,G=new Uint16Array(_,$,j);if(j<=192)return String.fromCharCode(...G);try{return aF.decode(G)}catch{let Z="",X=0;while(j-X>1024)Z+=String.fromCharCode(...G.subarray(X,X+=1024));return Z+String.fromCharCode(...G.subarray(X))}}function rG(_){let $={};function j(Z,X){if(!Z)return"<yet unknown>";return pG(Z.buffer,X)}let G=_.env=_.env||{};return G.abort=G.abort||function(X,Y,L,K){let q=$.memory||G.memory;throw Error(`abort: ${j(q,X)} at ${j(q,Y)}:${L}:${K}`)},G.trace=G.trace||function(X,Y,...L){let K=$.memory||G.memory;console.log(`trace: ${j(K,X)}${Y?" ":""}${L.slice(0,Y).join(", ")}`)},G.seed=G.seed||Date.now,_.Math=_.Math||Math,_.Date=_.Date||Date,$}function dG(_,$){let j=$.exports,G=j.memory,Z=j.table,X=j.__new||r5,Y=j.__pin||r5,L=j.__unpin||r5,K=j.__collect||r5,q=j.__rtti_base,Q=q?(W)=>W[q>>>2]:r5;_.__new=X,_.__pin=Y,_.__unpin=L,_.__collect=K;function V(W){let y=new Uint32Array(G.buffer);if((W>>>=0)>=Q(y))throw Error(`invalid id: ${W}`);return y[(q+4>>>2)+W]}function B(W){let y=V(W);if(!(y&7))throw Error(`not an array: ${W}, flags=${y}`);return y}function N(W){return 31-Math.clz32(W>>>6&31)}function U(W){if(W==null)return 0;let y=W.length,x=X(y<<1,2),P=new Uint16Array(G.buffer);for(let S=0,v=x>>>1;S<y;++S)P[v+S]=W.charCodeAt(S);return x}_.__newString=U;function D(W){if(W==null)return 0;let y=new Uint8Array(W),x=X(y.length,1);return new Uint8Array(G.buffer).set(y,x),x}_.__newArrayBuffer=D;function E(W){if(!W)return null;let y=G.buffer;if(new Uint32Array(y)[W+-8>>>2]!==2)throw Error(`not a string: ${W}`);return pG(y,W)}_.__getString=E;function H(W,y,x){let P=G.buffer;if(x)switch(W){case 2:return new Float32Array(P);case 3:return new Float64Array(P)}else switch(W){case 0:return new(y?Int8Array:Uint8Array)(P);case 1:return new(y?Int16Array:Uint16Array)(P);case 2:return new(y?Int32Array:Uint32Array)(P);case 3:return new(y?BigInt64Array:BigUint64Array)(P)}throw Error(`unsupported align: ${W}`)}function M(W,y=0){let x=y,P=B(W),S=N(P),v=typeof x!=="number",l=v?x.length:x,h=X(l<<S,P&4?W:1),r;if(P&4)r=h;else{Y(h);let b=X(P&2?16:12,W);L(h);let e=new Uint32Array(G.buffer);if(e[b+0>>>2]=h,e[b+4>>>2]=h,e[b+8>>>2]=l<<S,P&2)e[b+12>>>2]=l;r=b}if(v){let b=H(S,P&2048,P&4096),e=h>>>S;if(P&16384)for(let z0=0;z0<l;++z0)b[e+z0]=x[z0];else b.set(x,e)}return r}_.__newArray=M;function J(W){let y=new Uint32Array(G.buffer),x=y[W+-8>>>2],P=B(x),S=N(P),v=P&4?W:y[W+4>>>2],l=P&2?y[W+12>>>2]:y[v+-4>>>2]>>>S;return H(S,P&2048,P&4096).subarray(v>>>=S,v+l)}_.__getArrayView=J;function O(W){let y=J(W),x=y.length,P=Array(x);for(let S=0;S<x;S++)P[S]=y[S];return P}_.__getArray=O;function T(W){let y=G.buffer,x=new Uint32Array(y)[W+-4>>>2];return y.slice(W,W+x)}_.__getArrayBuffer=T;function I(W){if(!Z)throw Error("Operation requires compiling with --exportTable");let y=new Uint32Array(G.buffer)[W>>>2];return Z.get(y)}_.__getFunction=I;function A(W,y,x){return new W(k(W,y,x))}function k(W,y,x){let P=G.buffer,S=new Uint32Array(P);return new W(P,S[x+4>>>2],S[x+8>>>2]>>>y)}function z(W,y,x){_[`__get${y}`]=A.bind(null,W,x),_[`__get${y}View`]=k.bind(null,W,x)}if([Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array].forEach((W)=>{z(W,W.name,31-Math.clz32(W.BYTES_PER_ELEMENT))}),sF)[BigUint64Array,BigInt64Array].forEach((W)=>{z(W,W.name.slice(3),3)});return _.memory=_.memory||G,_.table=_.table||Z,eF(j,_)}function iG(_){return typeof Response<"u"&&_ instanceof Response}function tF(_){return _ instanceof WebAssembly.Module}async function C3(_,$={}){if(iG(_=await _))return q2(_,$);let j=tF(_)?_:await WebAssembly.compile(_),G=rG($),Z=await WebAssembly.instantiate(j,$),X=dG(G,Z);return{module:j,instance:Z,exports:X}}async function q2(_,$={}){if(!WebAssembly.instantiateStreaming)return C3(iG(_=await _)?_.arrayBuffer():_,$);let j=rG($),G=await WebAssembly.instantiateStreaming(_,$),Z=dG(j,G.instance);return{...G,exports:Z}}function eF(_,$={}){let j=_.__argumentsLength?(G)=>{_.__argumentsLength.value=G}:_.__setArgumentsLength||_.__setargc||(()=>{});for(let G of Object.keys(_)){let Z=_[G],X=G.split("."),Y=$;while(X.length>1){let q=X.shift();if(!Object.hasOwn(Y,q))Y[q]={};Y=Y[q]}let L=X[0],K=L.indexOf("#");if(K>=0){let q=L.substring(0,K),Q=Y[q];if(typeof Q>"u"||!Q.prototype){let V=function(...B){return V.wrap(V.prototype.constructor(0,...B))};if(V.prototype={valueOf(){return this[d5]}},V.wrap=function(B){return Object.create(V.prototype,{[d5]:{value:B,writable:!1}})},Q)Object.getOwnPropertyNames(Q).forEach((B)=>Object.defineProperty(V,B,Object.getOwnPropertyDescriptor(Q,B)));Y[q]=V}if(L=L.substring(K+1),Y=Y[q].prototype,/^(get|set):/.test(L)){if(!Object.hasOwn(Y,L=L.substring(4))){let V=_[G.replace("set:","get:")],B=_[G.replace("get:","set:")];Object.defineProperty(Y,L,{get(){return V(this[d5])},set(N){B(this[d5],N)},enumerable:!0})}}else if(L==="constructor")(Y[L]=function(...V){return j(V.length),Z(...V)}).original=Z;else(Y[L]=function(...V){return j(V.length),Z(this[d5],...V)}).original=Z}else if(/^(get|set):/.test(L)){if(!Object.hasOwn(Y,L=L.substring(4)))Object.defineProperty(Y,L,{get:_[G.replace("set:","get:")],set:_[G.replace("get:","set:")],enumerable:!0})}else if(typeof Z==="function"&&Z!==j)(Y[L]=(...q)=>{return j(q.length),Z(...q)}).original=Z;else Y[L]=Z}return $}function f3(_){try{return _?.__collect?.(),!0}catch($){return!1}}var $U="/static/js/vendor/remote-display-decoder.wasm",K2=null;function oG(_){if(_ instanceof ArrayBuffer)return _;if(_.byteOffset===0&&_.byteLength===_.buffer.byteLength)return _.buffer;return _.slice().buffer}async function sG(){if(K2)return K2;return K2=(async()=>{try{let G=function(Z,X,Y,L,K,q,Q){let V=oG(X),B=j.__pin(j.__newArrayBuffer(V));try{return j[Z](B,Y,L,K,q,Q.bitsPerPixel,Q.bigEndian?1:0,Q.trueColor?1:0,Q.redMax,Q.greenMax,Q.blueMax,Q.redShift,Q.greenShift,Q.blueShift)}finally{j.__unpin(B),f3(j)}},_=await fetch($U,{credentials:"same-origin"});if(!_.ok)throw Error(`HTTP ${_.status}`);let j=(typeof q2==="function"?await q2(_,{}):await C3(await _.arrayBuffer(),{})).exports;for(let Z of["initFramebuffer","getFramebufferPtr","getFramebufferLen","getFramebufferWidth","getFramebufferHeight","processRawRect","processCopyRect","processRreRect","processHextileRect","processZrleTileData","decodeRawRectToRgba"])if(typeof j[Z]!=="function")throw Error(`${Z} export is missing.`);return{initFramebuffer(Z,X){j.initFramebuffer(Z,X)},getFramebuffer(){let Z=j.getFramebufferPtr(),X=j.getFramebufferLen();return new Uint8ClampedArray(new Uint8Array(j.memory.buffer,Z,X).slice().buffer)},getFramebufferWidth(){return j.getFramebufferWidth()},getFramebufferHeight(){return j.getFramebufferHeight()},processRawRect(Z,X,Y,L,K,q){return G("processRawRect",Z,X,Y,L,K,q)},processCopyRect(Z,X,Y,L,K,q){return j.processCopyRect(Z,X,Y,L,K,q)},processRreRect(Z,X,Y,L,K,q){return G("processRreRect",Z,X,Y,L,K,q)},processHextileRect(Z,X,Y,L,K,q){return G("processHextileRect",Z,X,Y,L,K,q)},processZrleTileData(Z,X,Y,L,K,q){return G("processZrleTileData",Z,X,Y,L,K,q)},decodeRawRectToRgba(Z,X,Y,L){let K=oG(Z),q=j.__pin(j.__newArrayBuffer(K));try{let Q=j.__pin(j.decodeRawRectToRgba(q,X,Y,L.bitsPerPixel,L.bigEndian?1:0,L.trueColor?1:0,L.redMax,L.greenMax,L.blueMax,L.redShift,L.greenShift,L.blueShift));try{return new Uint8ClampedArray(j.__getArrayBuffer(Q))}finally{j.__unpin(Q)}}finally{j.__unpin(q),f3(j)}}}}catch(_){return console.warn("[remote-display] Failed to load WASM pipeline, using JS fallback.",_),null}})(),K2}function G5(_,$,j){return Math.max($,Math.min(j,_))}function V2(_,$,j){let G=new Uint8Array(6),Z=G5(Math.floor(Number($||0)),0,65535),X=G5(Math.floor(Number(j||0)),0,65535);return G[0]=5,G[1]=G5(Math.floor(Number(_||0)),0,255),G[2]=Z>>8&255,G[3]=Z&255,G[4]=X>>8&255,G[5]=X&255,G}function m$(_){switch(Number(_)){case 0:return 1;case 1:return 2;case 2:return 4;default:return 0}}function R3(_){let $=m$(_?.button);if($)return $;let j=String(_?.pointerType||"").toLowerCase();if(j==="touch"||j==="pen")return m$(0);let G=Number(_?.buttons||0);if(G&1)return m$(0);if(G&4)return m$(1);if(G&2)return m$(2);return 0}function U4(_){let $=String(_?.type||"").toLowerCase();if($==="pointerup"||$==="pointercancel"||$==="lostpointercapture")return!0;let j=Number(_?.buttons);if(Number.isFinite(j)&&j===0&&$!=="pointerdown")return!0;let G=String(_?.pointerType||"").toLowerCase(),Z=Number(_?.pressure);if(G==="touch"||G==="pen"){if($==="pointerleave"||$==="pointerout")return!0;if(Number.isFinite(Z)&&Z<=0&&$!=="pointerdown")return!0}return!1}function aG(_){let $=String(_?.type||"").toLowerCase();if($==="touchend"||$==="touchcancel")return!0;if($==="touchmove")return Number(_?.touches?.length||0)<=0;return!1}function n1(_){return String(_||"").toLowerCase()==="touch"}function jU(_,$,j,G){let Z=Number(j||0)-Number(_||0),X=Number(G||0)-Number($||0);return Math.hypot(Z,X)}function S3(_){let $=Number.isFinite(_?.maxDistancePx)?Number(_.maxDistancePx):14;return jU(_?.startX,_?.startY,_?.clientX,_?.clientY)>$}function tG(_){let $=Number.isFinite(_?.maxElapsedMs)?Number(_.maxElapsedMs):300;if(Number(_?.elapsedMs||0)>$)return!1;return!S3(_)}function eG(_){return String(_||"").toLowerCase()!=="mouse"}function u3(_,$,j,G,Z){let X=Math.max(1,Math.floor(Number(G||0))),Y=Math.max(1,Math.floor(Number(Z||0))),L=Math.max(1,Number(j?.width||0)),K=Math.max(1,Number(j?.height||0)),q=(Number(_||0)-Number(j?.left||0))/L,Q=(Number($||0)-Number(j?.top||0))/K;return{x:G5(Math.floor(q*X),0,Math.max(0,X-1)),y:G5(Math.floor(Q*Y),0,Math.max(0,Y-1))}}function _Z(_,$,j,G=0){let Z=Number(_)<0?8:16,X=G5(Number(G||0)|Z,0,255);return[V2(X,$,j),V2(Number(G||0),$,j)]}function $Z(_,$){let j=new Uint8Array(8),G=Math.max(0,Math.min(4294967295,Number($||0)>>>0));return j[0]=4,j[1]=_?1:0,j[4]=G>>>24&255,j[5]=G>>>16&255,j[6]=G>>>8&255,j[7]=G&255,j}function jZ(_,$,j=!1){if(_==null||$==null)return!1;return Boolean(j)||Number(_)===Number($)}function H4(_){if(typeof _!=="string")return null;return _.length>0?_:null}function GZ(_,$,j,G){let Z=Math.max(1,Math.floor(Number(_||0))),X=Math.max(1,Math.floor(Number($||0))),Y=Math.max(1,Math.floor(Number(j||0))),L=Math.max(1,Math.floor(Number(G||0))),K=Math.min(Z/Y,X/L);if(!Number.isFinite(K)||K<=0)return 1;return Math.max(0.01,K)}var P3={Backspace:65288,Tab:65289,Enter:65293,Escape:65307,Insert:65379,Delete:65535,Home:65360,End:65367,PageUp:65365,PageDown:65366,ArrowLeft:65361,ArrowUp:65362,ArrowRight:65363,ArrowDown:65364,Shift:65505,ShiftLeft:65505,ShiftRight:65506,Control:65507,ControlLeft:65507,ControlRight:65508,Alt:65513,AltLeft:65513,AltRight:65514,Meta:65515,MetaLeft:65515,MetaRight:65516,Super:65515,Super_L:65515,Super_R:65516,CapsLock:65509,NumLock:65407,ScrollLock:65300,Pause:65299,PrintScreen:65377,ContextMenu:65383,Menu:65383," ":32};for(let _=1;_<=12;_+=1)P3[`F${_}`]=65470+(_-1);function g3(_){let $=[_?.key,_?.code];for(let X of $)if(X&&Object.prototype.hasOwnProperty.call(P3,X))return P3[X];let j=String(_?.key||""),G=j?j.codePointAt(0):null,Z=G==null?0:G>65535?2:1;if(G!=null&&j.length===Z){if(G<=255)return G;return(16777216|G)>>>0}return null}var o_=Uint8Array,D1=Uint16Array,r3=Int32Array,Q2=new o_([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),N2=new o_([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),l3=new o_([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),LZ=function(_,$){var j=new D1(31);for(var G=0;G<31;++G)j[G]=$+=1<<_[G-1];var Z=new r3(j[30]);for(var G=1;G<30;++G)for(var X=j[G];X<j[G+1];++X)Z[X]=X-j[G]<<5|G;return{b:j,r:Z}},qZ=LZ(Q2,2),KZ=qZ.b,h3=qZ.r;KZ[28]=258,h3[258]=28;var VZ=LZ(N2,0),GU=VZ.b,ZZ=VZ.r,n3=new D1(32768);for(B_=0;B_<32768;++B_)p1=(B_&43690)>>1|(B_&21845)<<1,p1=(p1&52428)>>2|(p1&13107)<<2,p1=(p1&61680)>>4|(p1&3855)<<4,n3[B_]=((p1&65280)>>8|(p1&255)<<8)>>1;var p1,B_,r1=function(_,$,j){var G=_.length,Z=0,X=new D1($);for(;Z<G;++Z)if(_[Z])++X[_[Z]-1];var Y=new D1($);for(Z=1;Z<$;++Z)Y[Z]=Y[Z-1]+X[Z-1]<<1;var L;if(j){L=new D1(1<<$);var K=15-$;for(Z=0;Z<G;++Z)if(_[Z]){var q=Z<<4|_[Z],Q=$-_[Z],V=Y[_[Z]-1]++<<Q;for(var B=V|(1<<Q)-1;V<=B;++V)L[n3[V]>>K]=q}}else{L=new D1(G);for(Z=0;Z<G;++Z)if(_[Z])L[Z]=n3[Y[_[Z]-1]++]>>15-_[Z]}return L},c$=new o_(288);for(B_=0;B_<144;++B_)c$[B_]=8;var B_;for(B_=144;B_<256;++B_)c$[B_]=9;var B_;for(B_=256;B_<280;++B_)c$[B_]=7;var B_;for(B_=280;B_<288;++B_)c$[B_]=8;var B_,a5=new o_(32);for(B_=0;B_<32;++B_)a5[B_]=5;var B_,ZU=r1(c$,9,0),XU=r1(c$,9,1),YU=r1(a5,5,0),LU=r1(a5,5,1),b3=function(_){var $=_[0];for(var j=1;j<_.length;++j)if(_[j]>$)$=_[j];return $},R1=function(_,$,j){var G=$/8|0;return(_[G]|_[G+1]<<8)>>($&7)&j},v3=function(_,$){var j=$/8|0;return(_[j]|_[j+1]<<8|_[j+2]<<16)>>($&7)},d3=function(_){return(_+7)/8|0},s5=function(_,$,j){if($==null||$<0)$=0;if(j==null||j>_.length)j=_.length;return new o_(_.subarray($,j))};var qU=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],N1=function(_,$,j){var G=Error($||qU[_]);if(G.code=_,Error.captureStackTrace)Error.captureStackTrace(G,N1);if(!j)throw G;return G},KU=function(_,$,j,G){var Z=_.length,X=G?G.length:0;if(!Z||$.f&&!$.l)return j||new o_(0);var Y=!j,L=Y||$.i!=2,K=$.i;if(Y)j=new o_(Z*3);var q=function(j0){var A0=j.length;if(j0>A0){var f0=new o_(Math.max(A0*2,j0));f0.set(j),j=f0}},Q=$.f||0,V=$.p||0,B=$.b||0,N=$.l,U=$.d,D=$.m,E=$.n,H=Z*8;do{if(!N){Q=R1(_,V,1);var M=R1(_,V+1,3);if(V+=3,!M){var J=d3(V)+4,O=_[J-4]|_[J-3]<<8,T=J+O;if(T>Z){if(K)N1(0);break}if(L)q(B+O);j.set(_.subarray(J,T),B),$.b=B+=O,$.p=V=T*8,$.f=Q;continue}else if(M==1)N=XU,U=LU,D=9,E=5;else if(M==2){var I=R1(_,V,31)+257,A=R1(_,V+10,15)+4,k=I+R1(_,V+5,31)+1;V+=14;var z=new o_(k),W=new o_(19);for(var y=0;y<A;++y)W[l3[y]]=R1(_,V+y*3,7);V+=A*3;var x=b3(W),P=(1<<x)-1,S=r1(W,x,1);for(var y=0;y<k;){var v=S[R1(_,V,P)];V+=v&15;var J=v>>4;if(J<16)z[y++]=J;else{var l=0,h=0;if(J==16)h=3+R1(_,V,3),V+=2,l=z[y-1];else if(J==17)h=3+R1(_,V,7),V+=3;else if(J==18)h=11+R1(_,V,127),V+=7;while(h--)z[y++]=l}}var r=z.subarray(0,I),b=z.subarray(I);D=b3(r),E=b3(b),N=r1(r,D,1),U=r1(b,E,1)}else N1(1);if(V>H){if(K)N1(0);break}}if(L)q(B+131072);var e=(1<<D)-1,z0=(1<<E)-1,K0=V;for(;;K0=V){var l=N[v3(_,V)&e],q0=l>>4;if(V+=l&15,V>H){if(K)N1(0);break}if(!l)N1(2);if(q0<256)j[B++]=q0;else if(q0==256){K0=V,N=null;break}else{var X0=q0-254;if(q0>264){var y=q0-257,N0=Q2[y];X0=R1(_,V,(1<<N0)-1)+KZ[y],V+=N0}var _0=U[v3(_,V)&z0],Z0=_0>>4;if(!_0)N1(3);V+=_0&15;var b=GU[Z0];if(Z0>3){var N0=N2[Z0];b+=v3(_,V)&(1<<N0)-1,V+=N0}if(V>H){if(K)N1(0);break}if(L)q(B+131072);var B0=B+X0;if(B<b){var W0=X-b,d=Math.min(b,B0);if(W0+B<0)N1(3);for(;B<d;++B)j[B]=G[W0+B]}for(;B<B0;++B)j[B]=j[B-b]}}if($.l=N,$.p=K0,$.b=B,$.f=Q,N)Q=1,$.m=D,$.d=U,$.n=E}while(!Q);return B!=j.length&&Y?s5(j,0,B):j.subarray(0,B)},N$=function(_,$,j){j<<=$&7;var G=$/8|0;_[G]|=j,_[G+1]|=j>>8},i5=function(_,$,j){j<<=$&7;var G=$/8|0;_[G]|=j,_[G+1]|=j>>8,_[G+2]|=j>>16},m3=function(_,$){var j=[];for(var G=0;G<_.length;++G)if(_[G])j.push({s:G,f:_[G]});var Z=j.length,X=j.slice();if(!Z)return{t:NZ,l:0};if(Z==1){var Y=new o_(j[0].s+1);return Y[j[0].s]=1,{t:Y,l:1}}j.sort(function(T,I){return T.f-I.f}),j.push({s:-1,f:25001});var L=j[0],K=j[1],q=0,Q=1,V=2;j[0]={s:-1,f:L.f+K.f,l:L,r:K};while(Q!=Z-1)L=j[j[q].f<j[V].f?q++:V++],K=j[q!=Q&&j[q].f<j[V].f?q++:V++],j[Q++]={s:-1,f:L.f+K.f,l:L,r:K};var B=X[0].s;for(var G=1;G<Z;++G)if(X[G].s>B)B=X[G].s;var N=new D1(B+1),U=p3(j[Q-1],N,0);if(U>$){var G=0,D=0,E=U-$,H=1<<E;X.sort(function(I,A){return N[A.s]-N[I.s]||I.f-A.f});for(;G<Z;++G){var M=X[G].s;if(N[M]>$)D+=H-(1<<U-N[M]),N[M]=$;else break}D>>=E;while(D>0){var J=X[G].s;if(N[J]<$)D-=1<<$-N[J]++-1;else++G}for(;G>=0&&D;--G){var O=X[G].s;if(N[O]==$)--N[O],++D}U=$}return{t:new o_(N),l:U}},p3=function(_,$,j){return _.s==-1?Math.max(p3(_.l,$,j+1),p3(_.r,$,j+1)):$[_.s]=j},XZ=function(_){var $=_.length;while($&&!_[--$]);var j=new D1(++$),G=0,Z=_[0],X=1,Y=function(K){j[G++]=K};for(var L=1;L<=$;++L)if(_[L]==Z&&L!=$)++X;else{if(!Z&&X>2){for(;X>138;X-=138)Y(32754);if(X>2)Y(X>10?X-11<<5|28690:X-3<<5|12305),X=0}else if(X>3){Y(Z),--X;for(;X>6;X-=6)Y(8304);if(X>2)Y(X-3<<5|8208),X=0}while(X--)Y(Z);X=1,Z=_[L]}return{c:j.subarray(0,G),n:$}},o5=function(_,$){var j=0;for(var G=0;G<$.length;++G)j+=_[G]*$[G];return j},QZ=function(_,$,j){var G=j.length,Z=d3($+2);_[Z]=G&255,_[Z+1]=G>>8,_[Z+2]=_[Z]^255,_[Z+3]=_[Z+1]^255;for(var X=0;X<G;++X)_[Z+X+4]=j[X];return(Z+4+G)*8},YZ=function(_,$,j,G,Z,X,Y,L,K,q,Q){N$($,Q++,j),++Z[256];var V=m3(Z,15),B=V.t,N=V.l,U=m3(X,15),D=U.t,E=U.l,H=XZ(B),M=H.c,J=H.n,O=XZ(D),T=O.c,I=O.n,A=new D1(19);for(var k=0;k<M.length;++k)++A[M[k]&31];for(var k=0;k<T.length;++k)++A[T[k]&31];var z=m3(A,7),W=z.t,y=z.l,x=19;for(;x>4&&!W[l3[x-1]];--x);var P=q+5<<3,S=o5(Z,c$)+o5(X,a5)+Y,v=o5(Z,B)+o5(X,D)+Y+14+3*x+o5(A,W)+2*A[16]+3*A[17]+7*A[18];if(K>=0&&P<=S&&P<=v)return QZ($,Q,_.subarray(K,K+q));var l,h,r,b;if(N$($,Q,1+(v<S)),Q+=2,v<S){l=r1(B,N,0),h=B,r=r1(D,E,0),b=D;var e=r1(W,y,0);N$($,Q,J-257),N$($,Q+5,I-1),N$($,Q+10,x-4),Q+=14;for(var k=0;k<x;++k)N$($,Q+3*k,W[l3[k]]);Q+=3*x;var z0=[M,T];for(var K0=0;K0<2;++K0){var q0=z0[K0];for(var k=0;k<q0.length;++k){var X0=q0[k]&31;if(N$($,Q,e[X0]),Q+=W[X0],X0>15)N$($,Q,q0[k]>>5&127),Q+=q0[k]>>12}}}else l=ZU,h=c$,r=YU,b=a5;for(var k=0;k<L;++k){var N0=G[k];if(N0>255){var X0=N0>>18&31;if(i5($,Q,l[X0+257]),Q+=h[X0+257],X0>7)N$($,Q,N0>>23&31),Q+=Q2[X0];var _0=N0&31;if(i5($,Q,r[_0]),Q+=b[_0],_0>3)i5($,Q,N0>>5&8191),Q+=N2[_0]}else i5($,Q,l[N0]),Q+=h[N0]}return i5($,Q,l[256]),Q+h[256]},VU=new r3([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),NZ=new o_(0),QU=function(_,$,j,G,Z,X){var Y=X.z||_.length,L=new o_(G+Y+5*(1+Math.ceil(Y/7000))+Z),K=L.subarray(G,L.length-Z),q=X.l,Q=(X.r||0)&7;if($){if(Q)K[0]=X.r>>3;var V=VU[$-1],B=V>>13,N=V&8191,U=(1<<j)-1,D=X.p||new D1(32768),E=X.h||new D1(U+1),H=Math.ceil(j/3),M=2*H,J=function(b0){return(_[b0]^_[b0+1]<<H^_[b0+2]<<M)&U},O=new r3(25000),T=new D1(288),I=new D1(32),A=0,k=0,z=X.i||0,W=0,y=X.w||0,x=0;for(;z+2<Y;++z){var P=J(z),S=z&32767,v=E[P];if(D[S]=v,E[P]=S,y<=z){var l=Y-z;if((A>7000||W>24576)&&(l>423||!q)){Q=YZ(_,K,0,O,T,I,k,W,x,z-x,Q),W=A=k=0,x=z;for(var h=0;h<286;++h)T[h]=0;for(var h=0;h<30;++h)I[h]=0}var r=2,b=0,e=N,z0=S-v&32767;if(l>2&&P==J(z-z0)){var K0=Math.min(B,l)-1,q0=Math.min(32767,z),X0=Math.min(258,l);while(z0<=q0&&--e&&S!=v){if(_[z+r]==_[z+r-z0]){var N0=0;for(;N0<X0&&_[z+N0]==_[z+N0-z0];++N0);if(N0>r){if(r=N0,b=z0,N0>K0)break;var _0=Math.min(z0,N0-2),Z0=0;for(var h=0;h<_0;++h){var B0=z-z0+h&32767,W0=D[B0],d=B0-W0&32767;if(d>Z0)Z0=d,v=B0}}}S=v,v=D[S],z0+=S-v&32767}}if(b){O[W++]=268435456|h3[r]<<18|ZZ[b];var j0=h3[r]&31,A0=ZZ[b]&31;k+=Q2[j0]+N2[A0],++T[257+j0],++I[A0],y=z+r,++A}else O[W++]=_[z],++T[_[z]]}}for(z=Math.max(z,y);z<Y;++z)O[W++]=_[z],++T[_[z]];if(Q=YZ(_,K,q,O,T,I,k,W,x,z-x,Q),!q)X.r=Q&7|K[Q/8|0]<<3,Q-=7,X.h=E,X.p=D,X.i=z,X.w=y}else{for(var z=X.w||0;z<Y+q;z+=65535){var f0=z+65535;if(f0>=Y)K[Q/8|0]=q,f0=Y;Q=QZ(K,Q+1,_.subarray(z,f0))}X.i=Y}return s5(L,0,G+d3(Q)+Z)};var BZ=function(){var _=1,$=0;return{p:function(j){var G=_,Z=$,X=j.length|0;for(var Y=0;Y!=X;){var L=Math.min(Y+2655,X);for(;Y<L;++Y)Z+=G+=j[Y];G=(G&65535)+15*(G>>16),Z=(Z&65535)+15*(Z>>16)}_=G,$=Z},d:function(){return _%=65521,$%=65521,(_&255)<<24|(_&65280)<<8|($&255)<<8|$>>8}}},NU=function(_,$,j,G,Z){if(!Z){if(Z={l:1},$.dictionary){var X=$.dictionary.subarray(-32768),Y=new o_(X.length+_.length);Y.set(X),Y.set(_,X.length),_=Y,Z.w=X.length}}return QU(_,$.level==null?6:$.level,$.mem==null?Z.l?Math.ceil(Math.max(8,Math.min(13,Math.log(_.length)))*1.5):20:12+$.mem,j,G,Z)};var FZ=function(_,$,j){for(;j;++$)_[$]=j,j>>>=8};var BU=function(_,$){var j=$.level,G=j==0?0:j<6?1:j==9?3:2;if(_[0]=120,_[1]=G<<6|($.dictionary&&32),_[1]|=31-(_[0]<<8|_[1])%31,$.dictionary){var Z=BZ();Z.p($.dictionary),FZ(_,2,Z.d())}},FU=function(_,$){if((_[0]&15)!=8||_[0]>>4>7||(_[0]<<8|_[1])%31)N1(6,"invalid zlib data");if((_[1]>>5&1)==+!$)N1(6,"invalid zlib data: "+(_[1]&32?"need":"unexpected")+" dictionary");return(_[1]>>3&4)+2};var c3=function(){function _($,j){if(typeof $=="function")j=$,$={};this.ondata=j;var G=$&&$.dictionary&&$.dictionary.subarray(-32768);if(this.s={i:0,b:G?G.length:0},this.o=new o_(32768),this.p=new o_(0),G)this.o.set(G)}return _.prototype.e=function($){if(!this.ondata)N1(5);if(this.d)N1(4);if(!this.p.length)this.p=$;else if($.length){var j=new o_(this.p.length+$.length);j.set(this.p),j.set($,this.p.length),this.p=j}},_.prototype.c=function($){this.s.i=+(this.d=$||!1);var j=this.s.b,G=KU(this.p,this.s,this.o);this.ondata(s5(G,j,this.s.b),this.d),this.o=s5(G,this.s.b-32768),this.s.b=this.o.length,this.p=s5(this.p,this.s.p/8|0),this.s.p&=7},_.prototype.push=function($,j){this.e($),this.c(j)},_}();function UZ(_,$){if(!$)$={};var j=BZ();j.p(_);var G=NU(_,$,$.dictionary?6:2,4);return BU(G,$),FZ(G,G.length-4,j.d()),G}var HZ=function(){function _($,j){c3.call(this,$,j),this.v=$&&$.dictionary?2:1}return _.prototype.push=function($,j){if(c3.prototype.e.call(this,$),this.v){if(this.p.length<6&&!j)return;this.p=this.p.subarray(FU(this.p,this.v-1)),this.v=0}if(j){if(this.p.length<4)N1(6,"invalid zlib data");this.p=this.p.subarray(0,-4)}c3.prototype.c.call(this,j)},_}();var UU=typeof TextDecoder<"u"&&new TextDecoder,HU=0;try{UU.decode(NZ,{stream:!0}),HU=1}catch(_){}var EU=[58,50,42,34,26,18,10,2,60,52,44,36,28,20,12,4,62,54,46,38,30,22,14,6,64,56,48,40,32,24,16,8,57,49,41,33,25,17,9,1,59,51,43,35,27,19,11,3,61,53,45,37,29,21,13,5,63,55,47,39,31,23,15,7],DU=[40,8,48,16,56,24,64,32,39,7,47,15,55,23,63,31,38,6,46,14,54,22,62,30,37,5,45,13,53,21,61,29,36,4,44,12,52,20,60,28,35,3,43,11,51,19,59,27,34,2,42,10,50,18,58,26,33,1,41,9,49,17,57,25],WU=[32,1,2,3,4,5,4,5,6,7,8,9,8,9,10,11,12,13,12,13,14,15,16,17,16,17,18,19,20,21,20,21,22,23,24,25,24,25,26,27,28,29,28,29,30,31,32,1],zU=[16,7,20,21,29,12,28,17,1,15,23,26,5,18,31,10,2,8,24,14,32,27,3,9,19,13,30,6,22,11,4,25],OU=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],JU=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],AU=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1],kU=[[[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],[0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],[4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],[15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13]],[[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10],[3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],[0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],[13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9]],[[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8],[13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],[13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],[1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12]],[[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],[13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],[10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],[3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14]],[[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9],[14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6],[4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14],[11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3]],[[12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11],[10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8],[9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6],[4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13]],[[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1],[13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6],[1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2],[6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12]],[[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7],[1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2],[7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8],[2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11]]],WZ=new Uint8Array(256);for(let _=0;_<256;_+=1){let $=0;for(let j=0;j<8;j+=1)$=$<<1|_>>j&1;WZ[_]=$}function zZ(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function OZ(_){let $=0n,j=zZ(_);for(let G of j)$=$<<8n|BigInt(G);return $}function yU(_,$){let j=new Uint8Array($),G=BigInt(_);for(let Z=$-1;Z>=0;Z-=1)j[Z]=Number(G&0xffn),G>>=8n;return j}function Z5(_,$,j){let G=0n;for(let Z of $){let X=BigInt(_)>>BigInt(j-Z)&1n;G=G<<1n|X}return G}function EZ(_,$){let j=28n,G=(1n<<j)-1n,Z=BigInt($%28);return(_<<Z|_>>j-Z)&G}function MU(_){let $=Z5(OZ(_),OU,64),j=$>>28n&0x0fffffffn,G=$&0x0fffffffn,Z=[];for(let X of AU){j=EZ(j,X),G=EZ(G,X);let Y=j<<28n|G;Z.push(Z5(Y,JU,56))}return Z}function wU(_){let $=0n;for(let j=0;j<8;j+=1){let G=BigInt((7-j)*6),Z=Number(_>>G&0x3fn),X=(Z&32)>>4|Z&1,Y=Z>>1&15;$=$<<4n|BigInt(kU[j][X][Y])}return $}function TU(_,$){let j=Z5(_,WU,32)^BigInt($),G=wU(j);return Z5(G,zU,32)}function DZ(_,$){let j=MU($),G=Z5(OZ(_),EU,64),Z=G>>32n&0xffffffffn,X=G&0xffffffffn;for(let L of j){let K=X,q=(Z^TU(X,L))&0xffffffffn;Z=K,X=q}let Y=X<<32n|Z;return yU(Z5(Y,DU,64),8)}function xU(_){let $=String(_??""),j=new Uint8Array(8);for(let G=0;G<8;G+=1){let Z=G<$.length?$.charCodeAt(G)&255:0;j[G]=WZ[Z]}return j}function JZ(_,$){let j=zZ($);if(j.byteLength!==16)throw Error(`Invalid VNC auth challenge length ${j.byteLength}; expected 16 bytes.`);let G=xU(_),Z=new Uint8Array(16);return Z.set(DZ(j.slice(0,8),G),0),Z.set(DZ(j.slice(8,16),G),8),Z}var S1="vnc";function IU(_){return Number(_)}function CU(_){let $=Array.isArray(_)?_:typeof _==="string"?_.split(",").map((Z)=>Z.trim()).filter((Z)=>Z.length>0):[],j=[],G=new Set;for(let Z of $){let X=IU(Z);if(!Number.isFinite(X))continue;let Y=Number(X);if(!G.has(Y))j.push(Y),G.add(Y)}if(j.length>0)return j;return[5,2,1,0,-223]}function L5(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function fU(_,$){let j=L5(_),G=L5($);if(!j.byteLength)return new Uint8Array(G);if(!G.byteLength)return new Uint8Array(j);let Z=new Uint8Array(j.byteLength+G.byteLength);return Z.set(j,0),Z.set(G,j.byteLength),Z}function PU(_){let $=0;for(let Z of _||[])$+=Z?.byteLength||0;let j=new Uint8Array($),G=0;for(let Z of _||[]){let X=L5(Z);j.set(X,G),G+=X.byteLength}return j}function RU(){return(_)=>{let $=L5(_);try{let j=[],G=new HZ((Z)=>{j.push(new Uint8Array(Z))});if(G.push($,!0),G.err)throw Error(G.msg||"zlib decompression error");return PU(j)}catch(j){try{let G=UZ($);return G instanceof Uint8Array?G:new Uint8Array(G)}catch(G){let Z=G instanceof Error?G.message:"unexpected EOF";throw Error(`unexpected EOF: ${Z}`)}}}}function SU(_){return new TextEncoder().encode(String(_||""))}function X5(_){return new TextDecoder().decode(L5(_))}function uU(_){let $=/^RFB (\d{3})\.(\d{3})\n$/.exec(String(_||""));if(!$)return null;return{major:parseInt($[1],10),minor:parseInt($[2],10),text:$[0]}}function gU(_){if(!_)return`RFB 003.008
`;if(_.major>3||_.minor>=8)return`RFB 003.008
`;if(_.minor>=7)return`RFB 003.007
`;return`RFB 003.003
`}function AZ(_,$=0){return{bitsPerPixel:_.getUint8($),depth:_.getUint8($+1),bigEndian:_.getUint8($+2)===1,trueColor:_.getUint8($+3)===1,redMax:_.getUint16($+4,!1),greenMax:_.getUint16($+6,!1),blueMax:_.getUint16($+8,!1),redShift:_.getUint8($+10),greenShift:_.getUint8($+11),blueShift:_.getUint8($+12)}}function bU(_){let $=new ArrayBuffer(20),j=new DataView($);return j.setUint8(0,0),j.setUint8(1,0),j.setUint8(2,0),j.setUint8(3,0),j.setUint8(4,_.bitsPerPixel),j.setUint8(5,_.depth),j.setUint8(6,_.bigEndian?1:0),j.setUint8(7,_.trueColor?1:0),j.setUint16(8,_.redMax,!1),j.setUint16(10,_.greenMax,!1),j.setUint16(12,_.blueMax,!1),j.setUint8(14,_.redShift),j.setUint8(15,_.greenShift),j.setUint8(16,_.blueShift),new Uint8Array($)}function vU(_){let $=Array.isArray(_)?_:[],j=new ArrayBuffer(4+$.length*4),G=new DataView(j);G.setUint8(0,2),G.setUint8(1,0),G.setUint16(2,$.length,!1);let Z=4;for(let X of $)G.setInt32(Z,Number(X||0),!1),Z+=4;return new Uint8Array(j)}function kZ(_,$,j,G=0,Z=0){let X=new ArrayBuffer(10),Y=new DataView(X);return Y.setUint8(0,3),Y.setUint8(1,_?1:0),Y.setUint16(2,G,!1),Y.setUint16(4,Z,!1),Y.setUint16(6,Math.max(0,$||0),!1),Y.setUint16(8,Math.max(0,j||0),!1),new Uint8Array(X)}function Y5(_,$){let j=Number($||0);if(j<=0)return 0;if(j===255)return _&255;return Math.max(0,Math.min(255,Math.round((_||0)*255/j)))}function MZ(_,$,j,G){if(j===1)return _[$];if(j===2)return G?(_[$]<<8|_[$+1])>>>0:(_[$]|_[$+1]<<8)>>>0;if(j===3)return G?(_[$]<<16|_[$+1]<<8|_[$+2])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16)>>>0;if(j===4)return G?(_[$]<<24>>>0|_[$+1]<<16|_[$+2]<<8|_[$+3])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24>>>0)>>>0;return 0}function mU(_,$,j,G){let Z=G||q5,X=L5(_),Y=Math.max(1,Math.floor(Number(Z.bitsPerPixel||0)/8)),L=Math.max(0,$||0)*Math.max(0,j||0)*Y;if(X.byteLength<L)throw Error(`Incomplete raw rectangle payload: expected ${L} byte(s), got ${X.byteLength}`);if(!Z.trueColor)throw Error("Indexed-colour VNC framebuffers are not supported yet.");let K=new Uint8ClampedArray(Math.max(0,$||0)*Math.max(0,j||0)*4),q=0,Q=0;for(let V=0;V<Math.max(0,$||0)*Math.max(0,j||0);V+=1){let B=MZ(X,q,Y,Z.bigEndian),N=Y5(B>>>Z.redShift&Z.redMax,Z.redMax),U=Y5(B>>>Z.greenShift&Z.greenMax,Z.greenMax),D=Y5(B>>>Z.blueShift&Z.blueMax,Z.blueMax);K[Q]=N,K[Q+1]=U,K[Q+2]=D,K[Q+3]=255,q+=Y,Q+=4}return K}function B$(_,$,j){let G=j||q5,Z=Math.max(1,Math.floor(Number(G.bitsPerPixel||0)/8));if(_.byteLength<$+Z)return null;let X=MZ(_,$,Z,G.bigEndian);return{rgba:[Y5(X>>>G.redShift&G.redMax,G.redMax),Y5(X>>>G.greenShift&G.greenMax,G.greenMax),Y5(X>>>G.blueShift&G.blueMax,G.blueMax),255],bytesPerPixel:Z}}function l$(_,$,j,G,Z,X,Y){if(!Y)return;for(let L=0;L<X;L+=1)for(let K=0;K<Z;K+=1){let q=((G+L)*$+(j+K))*4;_[q]=Y[0],_[q+1]=Y[1],_[q+2]=Y[2],_[q+3]=Y[3]}}function wZ(_,$,j,G,Z,X,Y){for(let L=0;L<X;L+=1){let K=L*Z*4,q=((G+L)*$+j)*4;_.set(Y.subarray(K,K+Z*4),q)}}function yZ(_,$){let j=$,G=1;while(!0){if(_.byteLength<j+1)return null;let Z=_[j++];if(G+=Z,Z!==255)break}return{consumed:j-$,runLength:G}}function cU(_,$,j,G,Z,X,Y){let L=Z||q5,K=Math.max(1,Math.floor(Number(L.bitsPerPixel||0)/8));if(_.byteLength<$+4)return null;let q=new DataView(_.buffer,_.byteOffset+$,4).getUint32(0,!1);if(_.byteLength<$+4+q)return null;let Q=_.slice($+4,$+4+q),V;try{V=Y(Q)}catch{return{consumed:4+q,skipped:!0}}let B=0,N=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,G||0)*4);for(let U=0;U<G;U+=64){let D=Math.min(64,G-U);for(let E=0;E<j;E+=64){let H=Math.min(64,j-E);if(V.byteLength<B+1)return null;let M=V[B++],J=M&127,O=(M&128)!==0;if(!O&&J===0){let T=H*D*K;if(V.byteLength<B+T)return null;let I=X(V.slice(B,B+T),H,D,L);B+=T,wZ(N,j,E,U,H,D,I);continue}if(!O&&J===1){let T=B$(V,B,L);if(!T)return null;B+=T.bytesPerPixel,l$(N,j,E,U,H,D,T.rgba);continue}if(!O&&J>1&&J<=16){let T=[];for(let z=0;z<J;z+=1){let W=B$(V,B,L);if(!W)return null;B+=W.bytesPerPixel,T.push(W.rgba)}let I=J<=2?1:J<=4?2:4,A=Math.ceil(H*I/8),k=A*D;if(V.byteLength<B+k)return null;for(let z=0;z<D;z+=1){let W=B+z*A;for(let y=0;y<H;y+=1){let x=y*I,P=W+(x>>3),S=8-I-(x&7),v=V[P]>>S&(1<<I)-1;l$(N,j,E+y,U+z,1,1,T[v])}}B+=k;continue}if(O&&J===0){let T=0,I=0;while(I<D){let A=B$(V,B,L);if(!A)return null;B+=A.bytesPerPixel;let k=yZ(V,B);if(!k)return null;B+=k.consumed;for(let z=0;z<k.runLength;z+=1)if(l$(N,j,E+T,U+I,1,1,A.rgba),T+=1,T>=H){if(T=0,I+=1,I>=D)break}}continue}if(O&&J>0){let T=[];for(let k=0;k<J;k+=1){let z=B$(V,B,L);if(!z)return null;B+=z.bytesPerPixel,T.push(z.rgba)}let I=0,A=0;while(A<D){if(V.byteLength<B+1)return null;let k=V[B++],z=k,W=1;if(k&128){z=k&127;let x=yZ(V,B);if(!x)return null;B+=x.consumed,W=x.runLength}let y=T[z];if(!y)return null;for(let x=0;x<W;x+=1)if(l$(N,j,E+I,U+A,1,1,y),I+=1,I>=H){if(I=0,A+=1,A>=D)break}}continue}return{consumed:4+q,skipped:!0}}}return{consumed:4+q,rgba:N,decompressed:V}}function lU(_,$,j,G,Z){let X=Z||q5,Y=Math.max(1,Math.floor(Number(X.bitsPerPixel||0)/8));if(_.byteLength<$+4+Y)return null;let K=new DataView(_.buffer,_.byteOffset+$,_.byteLength-$).getUint32(0,!1),q=4+Y+K*(Y+8);if(_.byteLength<$+q)return null;let Q=$+4,V=B$(_,Q,X);if(!V)return null;Q+=V.bytesPerPixel;let B=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,G||0)*4);l$(B,j,0,0,j,G,V.rgba);for(let N=0;N<K;N+=1){let U=B$(_,Q,X);if(!U)return null;if(Q+=U.bytesPerPixel,_.byteLength<Q+8)return null;let D=new DataView(_.buffer,_.byteOffset+Q,8),E=D.getUint16(0,!1),H=D.getUint16(2,!1),M=D.getUint16(4,!1),J=D.getUint16(6,!1);Q+=8,l$(B,j,E,H,M,J,U.rgba)}return{consumed:Q-$,rgba:B}}function hU(_,$,j,G,Z,X){let Y=Z||q5,L=Math.max(1,Math.floor(Number(Y.bitsPerPixel||0)/8)),K=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,G||0)*4),q=$,Q=[0,0,0,255],V=[255,255,255,255];for(let B=0;B<G;B+=16){let N=Math.min(16,G-B);for(let U=0;U<j;U+=16){let D=Math.min(16,j-U);if(_.byteLength<q+1)return null;let E=_[q++];if(E&1){let H=D*N*L;if(_.byteLength<q+H)return null;let M=X(_.slice(q,q+H),D,N,Y);q+=H,wZ(K,j,U,B,D,N,M);continue}if(E&2){let H=B$(_,q,Y);if(!H)return null;Q=H.rgba,q+=H.bytesPerPixel}if(l$(K,j,U,B,D,N,Q),E&4){let H=B$(_,q,Y);if(!H)return null;V=H.rgba,q+=H.bytesPerPixel}if(E&8){if(_.byteLength<q+1)return null;let H=_[q++];for(let M=0;M<H;M+=1){let J=V;if(E&16){let W=B$(_,q,Y);if(!W)return null;J=W.rgba,q+=W.bytesPerPixel}if(_.byteLength<q+2)return null;let O=_[q++],T=_[q++],I=O>>4,A=O&15,k=(T>>4)+1,z=(T&15)+1;l$(K,j,U+I,B+A,k,z,J)}}}}return{consumed:q-$,rgba:K}}var q5={bitsPerPixel:32,depth:24,bigEndian:!1,trueColor:!0,redMax:255,greenMax:255,blueMax:255,redShift:16,greenShift:8,blueShift:0};class B2{protocol=S1;state;framebufferWidth;framebufferHeight;serverName;constructor(_={}){this.shared=_.shared!==!1,this.decodeRawRect=typeof _.decodeRawRect==="function"?_.decodeRawRect:mU,this.pipeline=_.pipeline||null,this.encodings=CU(_.encodings||null),this.state="version",this.buffer=new Uint8Array(0),this.serverVersion=null,this.clientVersionText=null,this.framebufferWidth=0,this.framebufferHeight=0,this.serverName="",this.serverPixelFormat=null,this.clientPixelFormat={...q5},this.password=typeof _.password==="string"&&_.password.length>0?_.password:null,this.inflateZrle=typeof _.inflateZrle==="function"?_.inflateZrle:RU()}receive(_){if(_)this.buffer=fU(this.buffer,_);let $=[],j=[],G=!0;while(G){if(G=!1,this.state==="version"){if(this.buffer.byteLength<12)break;let Z=this.consume(12),X=X5(Z),Y=uU(X);if(!Y)throw Error(`Unsupported RFB version banner: ${X||"<empty>"}`);this.serverVersion=Y,this.clientVersionText=gU(Y),j.push(SU(this.clientVersionText)),$.push({type:"protocol-version",protocol:S1,server:Y.text.trim(),client:this.clientVersionText.trim()}),this.state=Y.minor>=7?"security-types":"security-type-33",G=!0;continue}if(this.state==="security-types"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<5)break;let K=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(1,!1);if(this.buffer.byteLength<5+K)break;this.consume(1);let q=X5(this.consume(4+K).slice(4));throw Error(q||"VNC server rejected the connection.")}if(this.buffer.byteLength<1+Z)break;this.consume(1);let X=Array.from(this.consume(Z));$.push({type:"security-types",protocol:S1,types:X});let Y=null;if(X.includes(2)&&this.password!==null)Y=2;else if(X.includes(1))Y=1;else if(X.includes(2))throw Error("VNC password authentication is required. Enter a password and reconnect.");else throw Error(`Unsupported VNC security types: ${X.join(", ")||"none"}. This viewer currently supports only "None" and password-based VNC auth.`);j.push(Uint8Array.of(Y)),$.push({type:"security-selected",protocol:S1,securityType:Y,label:Y===2?"VNC Authentication":"None"}),this.state=Y===2?"security-challenge":"security-result",G=!0;continue}if(this.state==="security-type-33"){if(this.buffer.byteLength<4)break;let X=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),X===0){if(this.buffer.byteLength<4)break;let L=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength<4+L)break;let K=X5(this.consume(4+L).slice(4));throw Error(K||"VNC server rejected the connection.")}if(X===2){if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");$.push({type:"security-selected",protocol:S1,securityType:2,label:"VNC Authentication"}),this.state="security-challenge",G=!0;continue}if(X!==1)throw Error(`Unsupported VNC security type ${X}. This viewer currently supports only "None" and password-based VNC auth.`);$.push({type:"security-selected",protocol:S1,securityType:1,label:"None"}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",G=!0;continue}if(this.state==="security-challenge"){if(this.buffer.byteLength<16)break;if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");let Z=this.consume(16);j.push(JZ(this.password,Z)),this.state="security-result",G=!0;continue}if(this.state==="security-result"){if(this.buffer.byteLength<4)break;let X=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),X!==0){if(this.buffer.byteLength>=4){let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength>=4+Y){let L=X5(this.consume(4+Y).slice(4));throw Error(L||"VNC authentication failed.")}}throw Error("VNC authentication failed.")}$.push({type:"security-result",protocol:S1,ok:!0}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",G=!0;continue}if(this.state==="server-init"){if(this.buffer.byteLength<24)break;let Z=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength),X=Z.getUint16(0,!1),Y=Z.getUint16(2,!1),L=AZ(Z,4),K=Z.getUint32(20,!1);if(this.buffer.byteLength<24+K)break;let q=this.consume(24),Q=new DataView(q.buffer,q.byteOffset,q.byteLength);if(this.framebufferWidth=Q.getUint16(0,!1),this.framebufferHeight=Q.getUint16(2,!1),this.serverPixelFormat=AZ(Q,4),this.serverName=X5(this.consume(K)),this.state="connected",this.pipeline)this.pipeline.initFramebuffer(this.framebufferWidth,this.framebufferHeight);j.push(bU(this.clientPixelFormat)),j.push(vU(this.encodings)),j.push(kZ(!1,this.framebufferWidth,this.framebufferHeight)),$.push({type:"display-init",protocol:S1,width:X,height:Y,name:this.serverName,pixelFormat:L}),G=!0;continue}if(this.state==="connected"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<4)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint16(2,!1),L=4,K=[],q=!1,Q=!!this.pipeline;for(let B=0;B<Y;B+=1){if(this.buffer.byteLength<L+12){q=!0;break}let N=new DataView(this.buffer.buffer,this.buffer.byteOffset+L,12),U=N.getUint16(0,!1),D=N.getUint16(2,!1),E=N.getUint16(4,!1),H=N.getUint16(6,!1),M=N.getInt32(8,!1);if(L+=12,M===0){let J=Math.max(1,Math.floor(Number(this.clientPixelFormat.bitsPerPixel||0)/8)),O=E*H*J;if(this.buffer.byteLength<L+O){q=!0;break}let T=this.buffer.slice(L,L+O);if(L+=O,Q)this.pipeline.processRawRect(T,U,D,E,H,this.clientPixelFormat),K.push({kind:"pipeline",x:U,y:D,width:E,height:H});else K.push({kind:"rgba",x:U,y:D,width:E,height:H,rgba:this.decodeRawRect(T,E,H,this.clientPixelFormat)});continue}if(M===2){let J=lU(this.buffer,L,E,H,this.clientPixelFormat);if(!J){q=!0;break}if(Q){let O=this.buffer.slice(L,L+J.consumed);this.pipeline.processRreRect(O,U,D,E,H,this.clientPixelFormat),K.push({kind:"pipeline",x:U,y:D,width:E,height:H})}else K.push({kind:"rgba",x:U,y:D,width:E,height:H,rgba:J.rgba});L+=J.consumed;continue}if(M===1){if(this.buffer.byteLength<L+4){q=!0;break}let J=new DataView(this.buffer.buffer,this.buffer.byteOffset+L,4),O=J.getUint16(0,!1),T=J.getUint16(2,!1);if(L+=4,Q)this.pipeline.processCopyRect(U,D,E,H,O,T),K.push({kind:"pipeline",x:U,y:D,width:E,height:H});else K.push({kind:"copy",x:U,y:D,width:E,height:H,srcX:O,srcY:T});continue}if(M===16){let J=cU(this.buffer,L,E,H,this.clientPixelFormat,this.decodeRawRect,this.inflateZrle);if(!J){q=!0;break}if(L+=J.consumed,J.skipped)continue;if(Q&&J.decompressed)this.pipeline.processZrleTileData(J.decompressed,U,D,E,H,this.clientPixelFormat),K.push({kind:"pipeline",x:U,y:D,width:E,height:H});else K.push({kind:"rgba",x:U,y:D,width:E,height:H,rgba:J.rgba});continue}if(M===5){let J=hU(this.buffer,L,E,H,this.clientPixelFormat,this.decodeRawRect);if(!J){q=!0;break}if(Q){let O=this.buffer.slice(L,L+J.consumed);this.pipeline.processHextileRect(O,U,D,E,H,this.clientPixelFormat),K.push({kind:"pipeline",x:U,y:D,width:E,height:H})}else K.push({kind:"rgba",x:U,y:D,width:E,height:H,rgba:J.rgba});L+=J.consumed;continue}if(M===-223){if(this.framebufferWidth=E,this.framebufferHeight=H,Q)this.pipeline.initFramebuffer(E,H);K.push({kind:"resize",x:U,y:D,width:E,height:H});continue}throw Error(`Unsupported VNC rectangle encoding ${M}. This viewer currently supports ZRLE, Hextile, RRE, CopyRect, raw rectangles, and DesktopSize only.`)}if(q)break;this.consume(L);let V={type:"framebuffer-update",protocol:S1,width:this.framebufferWidth,height:this.framebufferHeight,rects:K};if(Q)V.framebuffer=this.pipeline.getFramebuffer();$.push(V),j.push(kZ(!0,this.framebufferWidth,this.framebufferHeight)),G=!0;continue}if(Z===2){this.consume(1),$.push({type:"bell",protocol:S1}),G=!0;continue}if(Z===3){if(this.buffer.byteLength<8)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(4,!1);if(this.buffer.byteLength<8+Y)break;this.consume(8);let L=X5(this.consume(Y));$.push({type:"clipboard",protocol:S1,text:L}),G=!0;continue}throw Error(`Unsupported VNC server message type ${Z}.`)}}return{events:$,outgoing:j}}consume(_){let $=this.buffer.slice(0,_);return this.buffer=this.buffer.slice(_),$}}var i1="piclaw://vnc";function IZ(_){let $=String(_||"").trim();return $?`${i1}/${encodeURIComponent($)}`:i1}var i3="piclaw:vnc-popout:",nU=60000;function CZ(_=globalThis){try{return _?.localStorage??null}catch{return null}}function pU(_=globalThis){let $=OG(_);if($)return $;return`vnc-popout-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}function fZ(_,$=Date.now()){if(!_||typeof _.key!=="function"||!Number.isFinite(_.length))return;let j=[];for(let G=0;G<Number(_.length||0);G+=1){let Z=_.key(G);if(Z&&Z.startsWith(i3))j.push(Z)}for(let G of j)try{let Z=_.getItem(G);if(!Z){_.removeItem(G);continue}let X=JSON.parse(Z),Y=Number(X?.expiresAt||0);if(!Number.isFinite(Y)||Y<=$)_.removeItem(G)}catch{G2(_,G)}}function rU(_,$=globalThis,j=Date.now()){let G=H4(_);if(G===null)return null;let Z=CZ($);if(!Z)return null;fZ(Z,j);let X=pU($);try{return Z.setItem(`${i3}${X}`,JSON.stringify({password:G,expiresAt:j+nU})),X}catch{return null}}function dU(_,$=globalThis,j=Date.now()){let G=String(_||"").trim();if(!G)return null;let Z=CZ($);if(!Z)return null;fZ(Z,j);let X=`${i3}${G}`;try{let Y=Z.getItem(X);if(Z.removeItem(X),!Y)return null;let L=JSON.parse(Y),K=Number(L?.expiresAt||0);if(!Number.isFinite(K)||K<=j)return null;return H4(L?.password)}catch{try{Z.removeItem(X)}catch{}return null}}function iU(_,$,j=globalThis){let G=String(_||"").trim();if(!G)return null;let Z={pane_path:IZ(G)},X=rU($,j);if(X)Z.vnc_secret=X;return Z}function oU(_){let $=String(_||"");if($===i1)return null;if(!$.startsWith(`${i1}/`))return null;let j=$.slice(`${i1}/`.length).trim();if(!j)return null;try{return decodeURIComponent(j)}catch{return j}}function d1(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}async function sU(_=null){let $=_?`/vnc/session?target=${encodeURIComponent(_)}`:"/vnc/session",j=await fetch($,{credentials:"same-origin"}),G=await j.json().catch(()=>({}));if(!j.ok)throw Error(G?.error||`HTTP ${j.status}`);return G}function aU(){if(typeof window>"u")return!1;try{let _=new URLSearchParams(window.location.search).get("pane_popout"),$=String(_||"").trim().toLowerCase();return $==="1"||$==="true"||$==="yes"}catch{return!1}}function tU(_,$=null){let j=window.location.protocol==="https:"?"wss:":"ws:",G=new URL(`${j}//${window.location.host}/vnc/ws`);if(G.searchParams.set("target",String(_||"")),$)G.searchParams.set("handoff",String($));return G.toString()}function eU(_){return String(_||"").trim()||"localhost"}function _H(_,$){let j=eU(_),G=Math.floor(Number($||0));if(!Number.isFinite(G)||G<=0||G>65535)return null;return`${j.includes(":")&&!j.startsWith("[")?`[${j}]`:j}:${G}`}function $H(_={}){let $=Boolean(_?.enabled),j=Boolean(_?.directConnectEnabled);if((Array.isArray(_?.targets)?_.targets.length:Number(_?.targetCount||0))>0)return{title:"",body:""};if(j)return{title:"No saved VNC targets yet.",body:"Connect directly above."};if(!$)return{title:"VNC is not configured yet.",body:"No saved targets are available and direct connect is disabled on this host."};return{title:"No saved VNC targets yet.",body:"This host has no configured VNC targets, and direct connect is disabled."}}function TZ(_){if(typeof window>"u")return null;try{let $=new URL(window.location.href),j=$.searchParams.get(_)?.trim()||"";if(!j)return null;return $.searchParams.delete(_),window.history?.replaceState?.(window.history.state,document.title,$.toString()),j}catch{return null}}function xZ(_){if(!String(_?.handoffToken||"").trim())return!1;return Number(_?.bytesIn||0)<=0&&!Boolean(_?.hasRenderedFrame)&&Number(_?.reconnectAttempts||0)<=0}function jH(_,$){if(!_||!$||typeof $.appendChild!=="function")return!1;try{$.innerHTML=""}catch{}return $.appendChild(_),!0}class PZ{container;root;statusEl;bodyEl;metricsEl;targetSubtitleEl;socketBoundary=null;protocol=null;disposed=!1;targetId=null;targetLabel=null;bytesIn=0;bytesOut=0;canvas=null;canvasCtx=null;displayPlaceholderEl=null;displayInfoEl=null;displayMetaEl=null;displayStageEl=null;chromeEl=null;sessionShellEl=null;resizeObserver=null;displayScale=null;readOnly=!1;pointerButtonMask=0;pointerInputAbortController=null;pressedKeysyms=new Map;passwordInputEl=null;authPassword=null;directHostInputEl=null;directPortInputEl=null;directPasswordInputEl=null;hasRenderedFrame=!1;frameTimeoutId=null;reconnectTimerId=null;reconnectAttempts=0;rawFallbackAttempted=!1;protocolRecovering=!1;pendingHandoffToken=null;constructor(_,$){this.container=_,this.targetId=oU($?.path),this.targetLabel=this.targetId||null,this.pendingHandoffToken=TZ("vnc_handoff");let j=TZ("vnc_secret"),G=dU(j);if(G!==null)this.authPassword=G;this.root=document.createElement("div"),this.root.className="vnc-pane-shell",this.root.style.cssText="display:flex;flex-direction:column;width:100%;height:100%;background:var(--bg-primary);color:var(--text-primary);",this.targetSubtitleEl=null,this.statusEl=document.createElement("div"),this.statusEl.style.cssText="display:none;",this.statusEl.textContent="",this.bodyEl=document.createElement("div"),this.bodyEl.style.cssText="flex:1;min-height:0;display:flex;align-items:stretch;justify-content:stretch;padding:12px;",this.metricsEl=document.createElement("div"),this.metricsEl.style.cssText="display:none;",this.updateMetrics(),this.root.append(this.statusEl,this.bodyEl),this.container.appendChild(this.root),this.load()}setStatus(_){this.statusEl.textContent=String(_||"")}setSessionChromeVisible(_){if(this.chromeEl)this.chromeEl.style.display=_?"grid":"none";if(this.sessionShellEl?.style)this.sessionShellEl.style.gridTemplateRows=_?"auto minmax(0,1fr)":"1fr";if(this.displayStageEl?.style)this.displayStageEl.style.padding=_?"12px":"0",this.displayStageEl.style.border=_?"1px solid var(--border-color)":"none",this.displayStageEl.style.borderRadius=_?"16px":"0",this.displayStageEl.style.background=_?"#0a0a0a":"#000";if(this.displayPlaceholderEl?.style)this.displayPlaceholderEl.style.display=_&&!this.hasRenderedFrame?"block":"none"}clearReconnectTimer(){if(this.reconnectTimerId)clearTimeout(this.reconnectTimerId),this.reconnectTimerId=null}scheduleReconnect(_=null){if(this.disposed||!this.targetId)return;this.clearReconnectTimer();let $=Math.min(8000,1500+this.reconnectAttempts*1000),j=Number.isFinite(_)?Math.max(0,Number(_)):$;this.reconnectAttempts+=1,this.reconnectTimerId=setTimeout(()=>{if(this.reconnectTimerId=null,this.disposed||!this.targetId)return;this.connectSocket()},j)}updateMetrics(){this.metricsEl.textContent=`Transport bytes — in: ${this.bytesIn} / out: ${this.bytesOut}`}applyMetrics(_){this.bytesIn=Number(_?.bytesIn||0),this.bytesOut=Number(_?.bytesOut||0),this.updateMetrics()}openTargetTab(_,$){if(this.targetId=String(_||"").trim()||null,this.targetLabel=String($||_||"").trim()||this.targetId||"VNC",this.targetId)this.renderTargetSession({direct_connect_enabled:!0,target:{id:this.targetId,label:this.targetLabel,read_only:!1,direct_connect:!0}}),this.setStatus("Connecting…"),this.updateDisplayInfo("Connecting…"),this.updateDisplayMeta("connecting");this.load()}requestPanePopout(_,$){this.container.dispatchEvent(new CustomEvent("pane:popout",{bubbles:!0,detail:{path:_,label:$}}))}resetLiveSession(){this.clearReconnectTimer(),this.reconnectAttempts=0,this.protocol=null;try{this.socketBoundary?.dispose?.()}catch{}this.socketBoundary=null;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=null;try{this.pointerInputAbortController?.abort?.()}catch{}if(this.pointerInputAbortController=null,this.canvas=null,this.canvasCtx=null,this.displayPlaceholderEl=null,this.displayInfoEl=null,this.displayMetaEl=null,this.displayStageEl=null,this.displayScale=null,this.passwordInputEl=null,this.directHostInputEl=null,this.directPortInputEl=null,this.directPasswordInputEl=null,this.hasRenderedFrame=!1,this.rawFallbackAttempted=!1,this.protocolRecovering=!1,this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;this.pressedKeysyms.clear()}renderTargets(_){this.resetLiveSession();let $=Array.isArray(_?.targets)?_.targets:[],j=Boolean(_?.direct_connect_enabled),G=$H({enabled:_?.enabled,directConnectEnabled:j,targets:$});this.bodyEl.innerHTML=`
            <div style="width:100%;height:100%;min-height:0;display:grid;align-content:start;justify-items:center;gap:16px;overflow:auto;padding:24px;box-sizing:border-box;">
                ${j?`
                    <div style="width:min(540px,100%);padding:16px 16px 18px;border:1px solid var(--border-color);border-radius:10px;background:transparent;display:grid;gap:12px;box-shadow:none;">
                        <div style="display:grid;gap:6px;">
                            <div style="font-size:18px;font-weight:700;">Connect to VNC</div>
                            <div style="font-size:12px;color:var(--text-secondary);">Enter a server target to start a direct session.</div>
                        </div>
                        <div style="display:grid;gap:10px;align-items:end;">
                            <label style="display:grid;gap:6px;min-width:0;">
                                <span style="font-size:12px;color:var(--text-secondary);">Server</span>
                                <input type="text" data-vnc-direct-host value="localhost" placeholder="localhost" spellcheck="false" style="width:100%;padding:10px 12px;border:1px solid var(--border-color);border-radius:8px;background:transparent;color:inherit;" />
                            </label>
                            <label style="display:grid;gap:6px;min-width:0;">
                                <span style="font-size:12px;color:var(--text-secondary);">Port</span>
                                <input type="number" data-vnc-direct-port min="1" max="65535" step="1" placeholder="5900" style="width:100%;padding:10px 12px;border:1px solid var(--border-color);border-radius:8px;background:transparent;color:inherit;" />
                            </label>
                            <label style="display:grid;gap:6px;min-width:0;">
                                <span style="font-size:12px;color:var(--text-secondary);">Password</span>
                                <input type="password" data-vnc-direct-password placeholder="Optional" autocomplete="current-password" style="width:100%;padding:10px 12px;border:1px solid var(--border-color);border-radius:8px;background:transparent;color:inherit;" />
                            </label>
                            <button type="button" data-direct-open-tab="1" style="padding:10px 12px;border:1px solid var(--border-color);border-radius:8px;background:transparent;cursor:pointer;color:inherit;min-height:40px;font-weight:500;">Connect</button>
                        </div>
                    </div>
                `:""}
                ${$.length?`
                    <div style="width:min(100%,900px);min-height:0;display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));align-content:start;">
                        ${$.map((X)=>`
                            <div style="text-align:left;padding:14px;border:1px solid var(--border-color);border-radius:10px;background:transparent;color:inherit;display:flex;flex-direction:column;gap:10px;">
                                <div>
                                    <div style="font-weight:600;margin-bottom:6px;">${d1(X.label||X.id)}</div>
                                    <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);">${d1(X.id)}</div>
                                    <div style="margin-top:8px;font-size:12px;color:var(--text-secondary);">${X.readOnly?"Read-only target":"Interactive target"}</div>
                                </div>
                                <div style="display:flex;flex-wrap:wrap;gap:8px;">
                                    <button type="button" data-target-open-tab="${d1(X.id)}" data-target-label="${d1(X.label||X.id)}" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:8px;background:transparent;cursor:pointer;color:inherit;">Connect</button>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                `:`
                    <div style="min-height:0;display:grid;place-items:center;justify-items:center;">
                        <div style="width:min(100%,540px);text-align:center;padding:24px 20px;border:1px dashed var(--border-color);border-radius:10px;background:transparent;font-size:13px;color:var(--text-secondary);line-height:1.5;display:grid;gap:6px;">
                            <div style="font-weight:600;color:var(--text-primary);">${d1(G.title)}</div>
                            <div>${d1(G.body)}</div>
                        </div>
                    </div>
                `}
            </div>
        `,this.directHostInputEl=this.bodyEl.querySelector("[data-vnc-direct-host]"),this.directPortInputEl=this.bodyEl.querySelector("[data-vnc-direct-port]"),this.directPasswordInputEl=this.bodyEl.querySelector("[data-vnc-direct-password]");let Z=()=>{let X=_H(this.directHostInputEl?.value,this.directPortInputEl?.value);if(!X)return;this.authPassword=H4(this.directPasswordInputEl?this.directPasswordInputEl.value:this.authPassword),this.openTargetTab(X,X)};this.directHostInputEl?.addEventListener("keydown",(X)=>{if(X.key!=="Enter")return;X.preventDefault(),Z()}),this.directPortInputEl?.addEventListener("keydown",(X)=>{if(X.key!=="Enter")return;X.preventDefault(),Z()}),this.directPasswordInputEl?.addEventListener("keydown",(X)=>{if(X.key!=="Enter")return;X.preventDefault(),Z()}),this.bodyEl.querySelector("[data-direct-open-tab]")?.addEventListener("click",()=>Z());for(let X of Array.from(this.bodyEl.querySelectorAll("[data-target-open-tab]")))X.addEventListener("click",()=>{let Y=X.getAttribute("data-target-open-tab"),L=X.getAttribute("data-target-label")||Y||"VNC";if(!Y)return;this.openTargetTab(Y,L)})}renderTargetSession(_){this.resetLiveSession();let $=_?.target||{},j=$?.label||this.targetId||"VNC target",G=aU();if(this.targetLabel=j,this.readOnly=Boolean($.read_only),this.pointerButtonMask=0,this.hasRenderedFrame=!1,this.pressedKeysyms.clear(),this.bodyEl.innerHTML=G?`
                <div data-vnc-session-shell style="width:100%;height:100%;min-height:0;display:grid;grid-template-rows:auto minmax(0,1fr);gap:6px;">
                    <div data-vnc-session-chrome style="padding:6px 8px;border:1px solid var(--border-color);border-radius:8px;background:transparent;display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
                        <div data-display-info style="min-width:0;flex:1 1 240px;font-size:12px;color:var(--text-secondary);line-height:1.3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Negotiating remote display…</div>
                        <input type="password" data-vnc-password placeholder="Password" autocomplete="current-password" style="width:150px;max-width:100%;padding:6px 8px;border:1px solid var(--border-color);border-radius:6px;background:transparent;color:inherit;" />
                        <button type="button" data-vnc-reconnect="1" style="padding:6px 10px;border:1px solid var(--border-color);border-radius:6px;background:transparent;cursor:pointer;color:inherit;">Reconnect</button>
                    </div>
                    <div data-display-stage style="min-height:0;height:100%;border:1px solid var(--border-color);border-radius:8px;background:#0a0a0a;display:flex;align-items:center;justify-content:center;padding:4px;position:relative;overflow:hidden;">
                        <canvas data-display-canvas tabindex="0" style="display:none;max-width:100%;max-height:100%;width:auto;height:auto;image-rendering:auto;box-shadow:none;border-radius:2px;background:#000;"></canvas>
                        <div data-display-placeholder style="max-width:520px;text-align:center;color:#d7d7d7;line-height:1.5;">
                            <div style="font-weight:600;font-size:14px;margin-bottom:6px;">${d1(j)}</div>
                            <div style="font-size:12px;color:#b7b7b7;">Waiting for the VNC/RFB handshake and first framebuffer update…</div>
                        </div>
                    </div>
                </div>
            `:`
                <div data-vnc-session-shell style="width:100%;height:100%;min-height:0;display:grid;grid-template-rows:auto minmax(0,1fr);gap:12px;">
                    <div data-vnc-session-chrome style="padding:10px 12px;border:1px solid var(--border-color);border-radius:10px;background:transparent;display:grid;gap:10px;">
                        <div style="display:grid;gap:4px;min-width:0;">
                            <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${d1($.id||this.targetId||"")} · ${$.read_only?"read-only":"interactive"} · websocket → TCP proxy</div>
                            <div data-display-info style="font-size:13px;color:var(--text-primary);line-height:1.4;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Negotiating remote display…</div>
                            <div data-display-meta style="font:11px var(--font-family-mono, monospace);color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"></div>
                        </div>
                        <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:end;">
                            <label style="display:grid;gap:4px;min-width:160px;flex:1 1 180px;">
                                <span style="font-size:11px;color:var(--text-secondary);">VNC password</span>
                                <input type="password" data-vnc-password placeholder="Optional" autocomplete="current-password" style="width:100%;padding:8px 10px;border:1px solid var(--border-color);border-radius:8px;background:transparent;color:inherit;" />
                            </label>
                            <button type="button" data-vnc-reconnect="1" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:8px;background:transparent;cursor:pointer;color:inherit;">Reconnect</button>
                            <button type="button" data-open-target-picker="1" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:8px;background:transparent;cursor:pointer;color:inherit;">Target</button>
                        </div>
                    </div>
                    <div data-display-stage style="min-height:0;height:100%;border:1px solid var(--border-color);border-radius:10px;background:#0a0a0a;display:flex;align-items:center;justify-content:center;padding:8px;position:relative;overflow:hidden;">
                        <canvas data-display-canvas tabindex="0" style="display:none;max-width:100%;max-height:100%;width:auto;height:auto;image-rendering:auto;box-shadow:none;border-radius:4px;background:#000;"></canvas>
                        <div data-display-placeholder style="max-width:520px;text-align:center;color:#d7d7d7;line-height:1.6;">
                            <div style="font-weight:700;font-size:18px;margin-bottom:8px;">${d1(j)}</div>
                            <div style="font-size:13px;color:#b7b7b7;">Waiting for the VNC/RFB handshake and first framebuffer update…</div>
                        </div>
                    </div>
                </div>
            `,this.sessionShellEl=this.bodyEl.querySelector("[data-vnc-session-shell]"),this.chromeEl=this.bodyEl.querySelector("[data-vnc-session-chrome]"),this.displayStageEl=this.bodyEl.querySelector("[data-display-stage]"),this.canvas=this.bodyEl.querySelector("[data-display-canvas]"),this.displayPlaceholderEl=this.bodyEl.querySelector("[data-display-placeholder]"),this.displayInfoEl=this.bodyEl.querySelector("[data-display-info]"),this.displayMetaEl=this.bodyEl.querySelector("[data-display-meta]"),this.canvasCtx=this.canvas?.getContext?.("2d",{alpha:!1})||null,this.canvasCtx)this.canvasCtx.imageSmoothingEnabled=!0,this.canvasCtx.imageSmoothingQuality="high";if(this.updateDisplayInfo("Waiting for VNC protocol negotiation…"),this.updateDisplayMeta(),this.setSessionChromeVisible(!0),this.attachDisplayResizeObserver(),this.attachCanvasPointerHandlers(),this.attachCanvasKeyboardHandlers(),this.passwordInputEl=this.bodyEl.querySelector("[data-vnc-password]"),this.passwordInputEl&&this.authPassword!==null)this.passwordInputEl.value=this.authPassword;this.passwordInputEl?.addEventListener("input",()=>{this.authPassword=H4(this.passwordInputEl.value)}),this.passwordInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),this.connectSocket()}),this.bodyEl.querySelector("[data-vnc-reconnect]")?.addEventListener("click",()=>{this.authPassword=H4(this.passwordInputEl?this.passwordInputEl.value:this.authPassword),this.connectSocket()}),this.bodyEl.querySelector("[data-open-target-picker]")?.addEventListener("click",()=>{this.openTargetTab("","VNC")})}updateDisplayInfo(_){if(this.displayInfoEl)this.displayInfoEl.textContent=String(_||"")}updateDisplayMeta(_=""){if(!this.displayMetaEl)return;let $=this.protocol?.state?`state=${this.protocol.state}`:"state=idle",j=this.protocol?.framebufferWidth&&this.protocol?.framebufferHeight?`${this.protocol.framebufferWidth}×${this.protocol.framebufferHeight}`:"pending",G=this.protocol?.serverName?` · name=${this.protocol.serverName}`:"",Z=this.displayScale?` · scale=${Math.round(this.displayScale*100)}%`:"",X=_?` · ${_}`:"";this.displayMetaEl.textContent=`${$} · framebuffer=${j}${G}${Z}${X}`}ensureCanvasSize(_,$,j={}){if(!this.canvas||!this.canvasCtx||!_||!$)return;if(this.canvas.width!==_||this.canvas.height!==$)this.canvas.width=_,this.canvas.height=$;let G=j?.reveal===!0;if(this.canvas.style.display=G||this.hasRenderedFrame?"block":"none",this.canvas.style.aspectRatio=`${_} / ${$}`,this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=G||this.hasRenderedFrame?"none":"";this.updateCanvasScale()}attachDisplayResizeObserver(){if(!this.displayStageEl||typeof ResizeObserver>"u")return;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=new ResizeObserver(()=>{this.updateCanvasScale()}),this.resizeObserver.observe(this.displayStageEl)}updateCanvasScale(){if(!this.canvas||!this.displayStageEl||!this.canvas.width||!this.canvas.height)return;requestAnimationFrame(()=>{if(!this.canvas||!this.displayStageEl)return;let _=this.displayStageEl.getBoundingClientRect?.(),$=Math.max(1,Math.floor(_?.width||this.displayStageEl.clientWidth||0)-32),j=Math.max(1,Math.floor(_?.height||this.displayStageEl.clientHeight||0)-32);if(!$||!j)return;let G=GZ($,j,this.canvas.width,this.canvas.height);this.displayScale=G,this.canvas.style.width=`${Math.max(1,Math.round(this.canvas.width*G))}px`,this.canvas.style.height=`${Math.max(1,Math.round(this.canvas.height*G))}px`,this.updateDisplayMeta()})}getFramebufferPointFromEvent(_){if(!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let $=this.canvas.getBoundingClientRect?.();if(!$||!$.width||!$.height)return null;return u3(_.clientX,_.clientY,$,this.protocol.framebufferWidth,this.protocol.framebufferHeight)}sendPointerEvent(_,$,j){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(V2(_,$,j))}attachCanvasPointerHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.style.cursor="crosshair",this.canvas.style.touchAction="none";try{this.pointerInputAbortController?.abort?.()}catch{}let _=new AbortController;this.pointerInputAbortController=_;let $=_.signal,j=this.canvas.ownerDocument||document,G=j.defaultView||window,Z=new Map,X=new Map,Y=new Map,L=new Map,K=new Set,q=!1,Q=(A)=>this.getFramebufferPointFromEvent(A)||X.get(A?.pointerId)||{x:0,y:0},V=(A)=>{if(!A||!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let k=this.canvas.getBoundingClientRect?.();if(!k||!k.width||!k.height)return null;return u3(A.clientX,A.clientY,k,this.protocol.framebufferWidth,this.protocol.framebufferHeight)},B=(A)=>{let k=Y.get(A);if(k)G.clearTimeout(k),Y.delete(A)},N=(A)=>{let k=L.get(A);if(k?.holdTimer)G.clearTimeout(k.holdTimer);L.delete(A)},U=()=>{for(let A of L.keys())N(A)},D=()=>{if(!K.size)q=!1},E=(A,k=80)=>{let z=String(A?.pointerType||"").toLowerCase();if(!eG(z))return;let W=Number(A?.pointerId);if(!Number.isFinite(W))return;B(W);let y=G.setTimeout(()=>{if(Y.delete(W),!Z.has(W)&&!this.pointerButtonMask)return;M({pointerId:W,pointerType:z,type:"pointercancel",clientX:A?.clientX,clientY:A?.clientY},{resetAll:!0})},k);Y.set(W,y)},H=(A=null)=>{if(!Z.size&&!this.pointerButtonMask&&!L.size)return;for(let z of Y.keys())B(z);U(),K.clear(),q=!1;let k=A||X.values().next().value||{x:0,y:0};Z.clear(),X.clear(),this.pointerButtonMask=0,this.sendPointerEvent(0,k.x,k.y)},M=(A,k={})=>{if(k.resetAll){let P=Number(A?.pointerId);B(P),H(Q(A));try{this.canvas?.releasePointerCapture?.(P)}catch{}return}let z=Q(A),W=Number(A?.pointerId);B(W),N(W),K.delete(W),D();let y=Z.has(W),x=Z.get(W)??R3(A);if(!y&&!x&&!this.pointerButtonMask)return;if(Z.delete(W),X.delete(W),x)this.pointerButtonMask&=~x;else if(!Z.size)this.pointerButtonMask=0;this.sendPointerEvent(this.pointerButtonMask,z.x,z.y);try{this.canvas?.releasePointerCapture?.(W)}catch{}},J=(A)=>{if(q)return;let k=L.get(A);if(!k||k.dragActivated)return;k.dragActivated=!0,k.holdTimer=null;let z=m$(0);if(!z)return;Z.set(A,(Z.get(A)??0)|z),this.pointerButtonMask|=z,E({pointerId:A,pointerType:"touch",clientX:k.lastClientX,clientY:k.lastClientY}),this.sendPointerEvent(this.pointerButtonMask,k.lastPoint.x,k.lastPoint.y)},O=(A,k,z={})=>{let W=L.get(A);if(!W)return!1;let y=k||W.lastPoint||{x:0,y:0},x=Number.isFinite(z.clientX)?Number(z.clientX):W.lastClientX,P=Number.isFinite(z.clientY)?Number(z.clientY):W.lastClientY;if(K.delete(A),z.cancelled||q){if(N(A),D(),Z.has(A)||this.pointerButtonMask)H(y);return!0}if(W.dragActivated||Z.has(A))return M({pointerId:A,pointerType:"touch",type:"pointerup",clientX:x,clientY:P}),D(),!0;let S=Date.now()-W.startedAt,v=tG({startX:W.startClientX,startY:W.startClientY,clientX:x,clientY:P,elapsedMs:S});if(B(A),N(A),X.delete(A),D(),v){let l=m$(0);this.sendPointerEvent(l,y.x,y.y),this.sendPointerEvent(0,y.x,y.y)}else this.sendPointerEvent(this.pointerButtonMask,y.x,y.y);return!0};this.canvas.addEventListener("contextmenu",(A)=>{A.preventDefault()},{signal:$}),this.canvas.addEventListener("pointermove",(A)=>{let k=this.getFramebufferPointFromEvent(A);if(!k)return;let z=String(A?.pointerType||"").toLowerCase(),W=n1(z);if(X.set(A.pointerId,k),W){let y=L.get(A.pointerId);if(y){if(y.lastClientX=Number(A?.clientX||0),y.lastClientY=Number(A?.clientY||0),y.lastPoint=k,!y.dragActivated&&S3({startX:y.startClientX,startY:y.startClientY,clientX:y.lastClientX,clientY:y.lastClientY}))N(A.pointerId),L.set(A.pointerId,{...y,holdTimer:null,dragActivated:!1});if(!y.dragActivated){this.sendPointerEvent(this.pointerButtonMask,k.x,k.y);return}}if(q)return}if(Z.has(A.pointerId)&&U4(A)){M(A,{resetAll:!0});return}if(this.pointerButtonMask&&!Z.has(A.pointerId)&&U4(A)){H(k);return}if(Z.has(A.pointerId))E(A);this.sendPointerEvent(this.pointerButtonMask,k.x,k.y)},{signal:$}),this.canvas.addEventListener("pointerdown",(A)=>{let k=this.getFramebufferPointFromEvent(A);if(!k)return;let z=String(A?.pointerType||"").toLowerCase(),W=n1(z);if(A.preventDefault(),this.canvas?.focus?.(),X.set(A.pointerId,k),W){if(K.add(A.pointerId),K.size>1){let P=[...K];q=!0,H(k);for(let S of P)K.add(S);q=!0;return}N(A.pointerId);let x={startClientX:Number(A?.clientX||0),startClientY:Number(A?.clientY||0),lastClientX:Number(A?.clientX||0),lastClientY:Number(A?.clientY||0),startedAt:Date.now(),lastPoint:k,holdTimer:null,dragActivated:!1};x.holdTimer=G.setTimeout(()=>{J(A.pointerId)},260),L.set(A.pointerId,x),this.sendPointerEvent(this.pointerButtonMask,k.x,k.y);return}if(z==="mouse")try{this.canvas?.setPointerCapture?.(A.pointerId)}catch{}let y=R3(A);if(!y)return;Z.set(A.pointerId,(Z.get(A.pointerId)??0)|y),this.pointerButtonMask|=y,E(A),this.sendPointerEvent(this.pointerButtonMask,k.x,k.y)},{signal:$,passive:!1}),this.canvas.addEventListener("pointerup",(A)=>{if(A.preventDefault(),n1(A?.pointerType)){let k=Q(A);if(O(A.pointerId,k,{clientX:A?.clientX,clientY:A?.clientY}))return}M(A)},{signal:$,passive:!1}),this.canvas.addEventListener("pointercancel",(A)=>{if(A.preventDefault(),n1(A?.pointerType)){let k=Q(A);if(O(A.pointerId,k,{clientX:A?.clientX,clientY:A?.clientY,cancelled:!0}))return}M(A,{resetAll:!0})},{signal:$,passive:!1}),this.canvas.addEventListener("pointerleave",(A)=>{if(L.has(A.pointerId)&&n1(A?.pointerType)){O(A.pointerId,Q(A),{clientX:A?.clientX,clientY:A?.clientY,cancelled:!0});return}if(!Z.has(A.pointerId))return;if(!U4(A))return;M(A,{resetAll:!0})},{signal:$}),this.canvas.addEventListener("pointerout",(A)=>{if(L.has(A.pointerId)&&n1(A?.pointerType)){O(A.pointerId,Q(A),{clientX:A?.clientX,clientY:A?.clientY,cancelled:!0});return}if(!Z.has(A.pointerId))return;if(!U4(A))return;M(A,{resetAll:!0})},{signal:$}),this.canvas.addEventListener("lostpointercapture",(A)=>{M(A,{resetAll:!0})},{signal:$}),G.addEventListener("pointermove",(A)=>{if(!Z.size&&!this.pointerButtonMask||!U4(A))return;if(!Z.has(A.pointerId)&&!this.pointerButtonMask)return;M(A,{resetAll:!0})},{signal:$}),G.addEventListener("pointerup",(A)=>{if(!Z.has(A.pointerId)&&!this.pointerButtonMask&&!L.has(A.pointerId))return;if(A.preventDefault?.(),n1(A?.pointerType)){let k=Q(A);if(O(A.pointerId,k,{clientX:A?.clientX,clientY:A?.clientY}))return}M(A,{resetAll:!Z.has(A.pointerId)})},{signal:$,passive:!1}),G.addEventListener("pointercancel",(A)=>{if(!Z.has(A.pointerId)&&!this.pointerButtonMask&&!L.has(A.pointerId))return;if(A.preventDefault?.(),n1(A?.pointerType)){let k=Q(A);if(O(A.pointerId,k,{clientX:A?.clientX,clientY:A?.clientY,cancelled:!0}))return}M(A,{resetAll:!0})},{signal:$,passive:!1});let T=(A)=>{if(!Z.size&&!this.pointerButtonMask&&!L.size)return;if(!aG(A))return;let k=A?.changedTouches?.[0]||A?.touches?.[0]||null,z=V(k)||X.values().next().value||L.values().next().value?.lastPoint||{x:0,y:0};if(!Z.size&&!this.pointerButtonMask&&L.size===1){let[W]=L.entries().next().value||[];if(Number.isFinite(W)){O(W,z,{clientX:k?.clientX,clientY:k?.clientY,cancelled:A?.type==="touchcancel"});return}}H(z)},I=(A,k={})=>{if(!Z.size&&!this.pointerButtonMask&&!L.has(A?.pointerId))return;if(!U4(A))return;if(A?.preventDefault?.(),n1(A?.pointerType)){let z=Q(A);if(O(A.pointerId,z,{clientX:A?.clientX,clientY:A?.clientY,cancelled:k.resetAll===!0}))return}M(A,{resetAll:k.resetAll===!0||!Z.has(A?.pointerId)})};this.canvas.addEventListener("touchend",T,{signal:$,passive:!0,capture:!0}),this.canvas.addEventListener("touchcancel",T,{signal:$,passive:!0,capture:!0}),j.addEventListener("touchend",T,{signal:$,passive:!0,capture:!0}),j.addEventListener("touchcancel",T,{signal:$,passive:!0,capture:!0}),G.addEventListener("touchend",T,{signal:$,passive:!0,capture:!0}),G.addEventListener("touchcancel",T,{signal:$,passive:!0,capture:!0}),j.addEventListener("pointerup",(A)=>{I(A)},{signal:$,passive:!1,capture:!0}),j.addEventListener("pointercancel",(A)=>{I(A,{resetAll:!0})},{signal:$,passive:!1,capture:!0}),G.addEventListener("mouseup",()=>{if(!Z.size&&!this.pointerButtonMask&&!L.size)return;H()},{signal:$}),G.addEventListener("blur",()=>{if(!Z.size&&!this.pointerButtonMask&&!L.size)return;H()},{signal:$}),j.addEventListener("visibilitychange",()=>{if(j.visibilityState==="hidden")H()},{signal:$}),this.canvas.addEventListener("wheel",(A)=>{let k=this.getFramebufferPointFromEvent(A);if(!k)return;A.preventDefault();for(let z of _Z(A.deltaY,k.x,k.y,this.pointerButtonMask))this.socketBoundary?.send?.(z)},{signal:$,passive:!1})}sendKeyEvent(_,$){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send($Z(_,$))}releasePressedKeys(){for(let _ of this.pressedKeysyms.values())this.sendKeyEvent(!1,_);this.pressedKeysyms.clear()}attachCanvasKeyboardHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.addEventListener("keydown",(_)=>{let $=g3(_);if($==null)return;let j=_.code||_.key,G=this.pressedKeysyms.get(j);if(jZ(G,$,_.repeat)){_.preventDefault();return}_.preventDefault(),this.pressedKeysyms.set(j,$),this.sendKeyEvent(!0,$)}),this.canvas.addEventListener("keyup",(_)=>{let $=_.code||_.key,j=this.pressedKeysyms.get($)??g3(_);if(j==null)return;_.preventDefault(),this.pressedKeysyms.delete($),this.sendKeyEvent(!1,j)}),this.canvas.addEventListener("blur",()=>{this.releasePressedKeys()})}drawRgbaRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=new ImageData(_.rgba,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}copyCanvasRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=this.canvasCtx.getImageData(_.srcX,_.srcY,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}scheduleRawFallbackTimeout(){if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.rawFallbackAttempted||this.protocolRecovering)return;this.frameTimeoutId=setTimeout(()=>{if(this.hasRenderedFrame||this.rawFallbackAttempted||this.protocolRecovering)return;if(this.protocol&&this.socketBoundary)this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.setStatus("No framebuffer update yet; retrying with RAW encoding."),this.updateDisplayInfo("No framebuffer update yet. Retrying with RAW encoding."),this.updateDisplayMeta("reconnect-encoding-fallback"),this.connectWithEncodings("0")},2200)}applyRemoteDisplayEvent(_){if(!_)return;switch(_.type){case"protocol-version":this.setStatus(`Negotiated ${_.protocol.toUpperCase()} ${_.server} → ${_.client}.`),this.updateDisplayInfo(`Negotiated ${_.server} → ${_.client}.`),this.updateDisplayMeta();return;case"security-types":this.setStatus(`Server offered security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayInfo(`Security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayMeta();return;case"security-selected":this.setStatus(`Using ${_.protocol.toUpperCase()} security type ${_.label}.`),this.updateDisplayInfo(`Security: ${_.label}.`),this.updateDisplayMeta();return;case"security-result":this.setStatus("Security negotiation complete. Waiting for server init…"),this.updateDisplayInfo("Security negotiation complete. Waiting for server init…"),this.updateDisplayMeta();return;case"display-init":this.ensureCanvasSize(_.width,_.height),this.setSessionChromeVisible(!1),this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for first framebuffer update (${_.width}×${_.height}).`),this.updateDisplayInfo(`Connected to ${_.name||this.targetLabel||this.targetId||"remote display"}. Waiting for first framebuffer update…`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"framebuffer-update":if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;let $=!1,j=(_.rects||[]).some((G)=>G.kind==="pipeline");if(_.framebuffer&&_.framebuffer.length>0&&_.width>0&&_.height>0&&j){this.ensureCanvasSize(_.width,_.height,{reveal:!0});for(let Z of _.rects||[])if(Z.kind==="resize")this.ensureCanvasSize(Z.width,Z.height);let G=this.canvas?.getContext("2d",{alpha:!1});if(G){let Z=new ImageData(new Uint8ClampedArray(_.framebuffer),_.width,_.height);G.putImageData(Z,0,0),$=!0}}else for(let G of _.rects||[]){if(G.kind==="resize"){this.ensureCanvasSize(G.width,G.height);continue}if(G.kind==="copy"){this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.copyCanvasRect(G),$=!0;continue}if(G.kind==="rgba")this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.drawRgbaRect(G),$=!0}if($||this.hasRenderedFrame)this.protocolRecovering=!1,this.setStatus(`Rendering live framebuffer — ${_.width}×${_.height}.`),this.updateDisplayInfo(`Framebuffer update applied (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta();else this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for painted framebuffer data.`),this.updateDisplayInfo(`Framebuffer update received, but no paintable rects yet (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"clipboard":this.setStatus("Remote clipboard updated."),this.updateDisplayInfo(`Clipboard text received (${_.text.length} chars).`),this.updateDisplayMeta();return;case"bell":this.setStatus("Remote display bell received."),this.updateDisplayInfo("Remote display bell received."),this.updateDisplayMeta();return}}async handleSocketMessage(_){if(_?.kind==="control"){let j=_.payload;if(j?.type==="vnc.error"){this.setStatus(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayInfo(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayMeta("proxy-error");return}if(j?.type==="vnc.connected"){let G=j?.target?.label||this.targetLabel||this.targetId;this.setStatus(`Connected to ${G}. Waiting for VNC/RFB data…`),this.updateDisplayInfo(`Connected to ${G}. Waiting for VNC handshake…`),this.updateDisplayMeta();return}if(j?.type==="pong")return;return}let $=this.protocol||(this.protocol=new B2);try{let j=_.data instanceof Blob?await _.data.arrayBuffer():_.data,G=$.receive(j);for(let Z of G.outgoing||[])this.socketBoundary?.send?.(Z);for(let Z of G.events||[])this.applyRemoteDisplayEvent(Z)}catch(j){let G=j?.message||"Unknown error";if(this.setSessionChromeVisible(!0),this.setStatus(`Display protocol error: ${G}`),this.updateDisplayInfo(`Display protocol error: ${G}`),this.updateDisplayMeta("protocol-error"),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(!this.rawFallbackAttempted&&!this.protocolRecovering&&/unexpected eof|zlib|decompress|protocol|buffer|undefined|not an object|reading '0'/i.test(G))this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.connectWithEncodings("0")}}async connectSocket(_=null){if(!this.targetId||this.disposed)return;if(this.clearReconnectTimer(),this.protocolRecovering&&_==null)this.protocolRecovering=!1;try{this.socketBoundary?.dispose?.()}catch{}if(_==null)this.rawFallbackAttempted=!1,this.protocolRecovering=!1;let $=this.pendingHandoffToken||null,j=_==null?null:String(_).trim(),G=await sG(),Z={};if(G)Z.pipeline=G,Z.decodeRawRect=(L,K,q,Q)=>G.decodeRawRectToRgba(L,K,q,Q);let X=H4(this.authPassword);if(X!==null)Z.password=X;if(j)Z.encodings=j;let Y=Boolean(this.canvas&&this.hasRenderedFrame);if(this.protocol=new B2(Z),this.hasRenderedFrame=Y,this.frameTimeoutId=null,this.canvas)this.canvas.style.display=Y?"block":"none";if(this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=Y?"none":"";this.socketBoundary=new I3({url:tU(this.targetId,$),binaryType:"arraybuffer",onOpen:()=>{if($&&this.pendingHandoffToken===$)this.pendingHandoffToken=null;this.reconnectAttempts=0,this.setStatus(`Connected to proxy for ${this.targetId}. Waiting for VNC/RFB data…`),this.updateDisplayInfo("WebSocket proxy connected. Waiting for handshake…"),this.updateDisplayMeta(),this.socketBoundary?.sendControl?.({type:"ping"})},onMetrics:(L)=>{this.applyMetrics(L)},onMessage:(L)=>{this.handleSocketMessage(L)},onClose:()=>{if(this.setSessionChromeVisible(!0),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.disposed)return;if(xZ({handoffToken:$,bytesIn:this.bytesIn,hasRenderedFrame:this.hasRenderedFrame,reconnectAttempts:this.reconnectAttempts})){this.pendingHandoffToken=null,this.setStatus("Transferred VNC session was not ready yet. Retrying…"),this.updateDisplayInfo("Transferred VNC session was not ready yet. Retrying without handoff…"),this.updateDisplayMeta("handoff-retrying"),this.scheduleReconnect(150);return}if(this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("Remote display connection lost. Reconnecting…"),this.updateDisplayInfo("Remote display transport closed. Attempting to reconnect…"),this.updateDisplayMeta("reconnecting"),this.scheduleReconnect();return}this.setStatus(this.bytesIn>0?`Proxy closed after receiving ${this.bytesIn} byte(s).`:"Proxy closed."),this.updateDisplayInfo(this.bytesIn>0?"Remote display transport closed after receiving data.":"Remote display transport closed."),this.updateDisplayMeta("closed")},onError:()=>{if(this.setSessionChromeVisible(!0),xZ({handoffToken:$,bytesIn:this.bytesIn,hasRenderedFrame:this.hasRenderedFrame,reconnectAttempts:this.reconnectAttempts})){this.pendingHandoffToken=null,this.setStatus("Transferred VNC session was not ready yet. Retrying…"),this.updateDisplayInfo("Transferred VNC session was not ready yet. Retrying without handoff…"),this.updateDisplayMeta("handoff-retrying"),this.scheduleReconnect(150);return}if(this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("WebSocket proxy connection failed. Reconnecting…"),this.updateDisplayInfo("WebSocket proxy connection failed. Attempting to reconnect…"),this.updateDisplayMeta("socket-reconnecting"),this.scheduleReconnect();return}this.setStatus("WebSocket proxy connection failed."),this.updateDisplayInfo("WebSocket proxy connection failed."),this.updateDisplayMeta("socket-error")}}),this.socketBoundary.connect()}connectWithEncodings(_){return this.connectSocket(_)}async load(){this.setStatus("");try{let _=await sU(this.targetId);if(!_?.enabled){this.renderTargets(_),this.setStatus("");return}if(!this.targetId){this.renderTargets(_),this.setStatus("");return}this.renderTargetSession(_),await this.connectSocket()}catch(_){this.resetLiveSession(),this.bodyEl.innerHTML=`
                <div style="max-width:620px;text-align:center;padding:28px;border:1px dashed var(--border-color);border-radius:14px;background:var(--bg-secondary);">
                    <div style="font-size:32px;margin-bottom:10px;">⚠️</div>
                    <div style="font-weight:600;margin-bottom:6px;">Failed to load VNC session</div>
                    <div style="color:var(--text-secondary);font-size:13px;line-height:1.5;">${d1(_?.message||"Unknown error")}</div>
                </div>
            `,this.setStatus(`Session load failed: ${_?.message||"Unknown error"}`)}}beforeDetachFromHost(){this.releasePressedKeys(),this.setStatus("Moving VNC session…"),this.updateDisplayInfo("Moving VNC session to a new window…"),this.updateDisplayMeta("moving")}afterAttachToHost(){this.attachDisplayResizeObserver(),this.updateCanvasScale(),requestAnimationFrame(()=>this.focus())}moveHost(_){if(this.disposed||!this.root)return!1;if(this.releasePressedKeys(),this.container=_,!jH(this.root,_))return!1;return this.afterAttachToHost(),!0}async preparePopoutTransfer(){return iU(this.targetId,this.authPassword)}getContent(){return}isDirty(){return!1}focus(){this.canvas?.focus?.(),this.root?.focus?.()}resize(){this.updateCanvasScale()}dispose(){if(this.disposed)return;this.disposed=!0,this.resetLiveSession(),this.root?.remove?.()}}var o3={id:"vnc-viewer",label:"VNC",icon:"display",capabilities:["preview"],placement:"tabs",canHandle(_){let $=String(_?.path||"");return $===i1||$.startsWith(`${i1}/`)?9000:!1},mount(_,$){return new PZ(_,$)}};import{classHighlighter as GH,highlightTree as ZH,StreamLanguage as K5,cssLanguage as XH,cppLanguage as YH,goLanguage as LH,htmlLanguage as qH,javascriptLanguage as KH,jsxLanguage as VH,tsxLanguage as QH,typescriptLanguage as NH,jsonLanguage as BH,markdownLanguage as FH,pythonLanguage as UH,rustLanguage as HH,StandardSQL as EH,xmlLanguage as DH,yamlLanguage as WH,dockerFile as zH,powerShell as OH,ruby as JH,shell as AH,swift as kH,toml as yH}from"#editor-vendor/codemirror";function E4(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var MH={js:"JavaScript",javascript:"JavaScript",ts:"TypeScript",typescript:"TypeScript",jsx:"JSX",tsx:"TSX",py:"Python",python:"Python",sh:"Shell",shell:"Shell",bash:"Bash",zsh:"Zsh",ps1:"PowerShell",powershell:"PowerShell",md:"Markdown",markdown:"Markdown",yml:"YAML",yaml:"YAML",json:"JSON",html:"HTML",css:"CSS",sql:"SQL",go:"Go",c:"C",cc:"C++",cpp:"C++","c++":"C++",cxx:"C++",h:"C/C++",hh:"C++",hpp:"C++",hxx:"C++",rust:"Rust",rs:"Rust",ruby:"Ruby",swift:"Swift",toml:"TOML",dockerfile:"Dockerfile"},wH=K5.define(AH).parser,TH=K5.define(OH).parser,xH=K5.define(zH).parser,IH=K5.define(JH).parser,CH=K5.define(kH).parser,fH=K5.define(yH).parser;function RZ(_){let $=String(_||"").trim().toLowerCase();if(!$)return"text";return MH[$]||String(_||"").trim()}function PH(_){switch(String(_||"").trim().toLowerCase()){case"js":case"javascript":return KH.parser;case"ts":case"typescript":return NH.parser;case"jsx":return VH.parser;case"tsx":return QH.parser;case"py":case"python":return UH.parser;case"json":return BH.parser;case"css":return XH.parser;case"html":return qH.parser;case"xml":return DH.parser;case"yaml":case"yml":return WH.parser;case"md":case"markdown":return FH.parser;case"sql":return EH.language.parser;case"go":return LH.parser;case"c":case"cc":case"cpp":case"cxx":case"c++":case"h":case"hh":case"hpp":case"hxx":return YH.parser;case"sh":case"bash":case"shell":case"zsh":return wH;case"ps1":case"powershell":return TH;case"dockerfile":return xH;case"rb":case"ruby":return IH;case"rs":case"rust":return HH.parser;case"swift":return CH;case"toml":return fH;default:return null}}function F2(_,$){let j=PH($);if(!j)return E4(_);let G=[];try{let Y=j.parse(_);ZH(Y,GH,(L,K,q)=>{if(!q||L>=K)return;G.push({from:L,to:K,cls:q})})}catch{return E4(_)}if(!G.length)return E4(_);G.sort((Y,L)=>Y.from-L.from||Y.to-L.to);let Z=0,X="";for(let Y of G){if(Y.from>Z)X+=E4(_.slice(Z,Y.from));X+=`<span class="${E4(Y.cls)}">${E4(_.slice(Y.from,Y.to))}</span>`,Z=Math.max(Z,Y.to)}if(Z<_.length)X+=E4(_.slice(Z));return X}e5();var z2=/#(\w+)/g,rH=new Set(["strong","em","b","i","u","s","del","ins","sub","sup","mark","small","br","p","ul","ol","li","blockquote","ruby","rt","rp","span","input"]),dH=new Set(["a","abbr","blockquote","br","code","del","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","input","ins","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","small","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),iH=new Set(["class","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),nZ={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"]),input:new Set(["type","checked","disabled"])},oH=new Set(["http:","https:","mailto:",""]);function sH(_,$){let j=String(_||"").toLowerCase(),G=String($||"").toLowerCase();if(!G||G.startsWith("on"))return!1;if(G.startsWith("data-")||G.startsWith("aria-"))return!0;return(nZ[j]||new Set).has(G)||iH.has(G)}function j7(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function O4(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let G=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!oH.has(G.protocol))return null;return G.href}catch{return null}}function pZ(_,$={}){if(!_)return"";if($?.sanitize===!1)return _;let j=new DOMParser().parseFromString(_,"text/html"),G=[],Z=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),X;while(X=Z.nextNode())G.push(X);for(let Y of G){let L=Y.tagName.toLowerCase();if(!dH.has(L)){let q=Y.parentNode;if(!q)continue;while(Y.firstChild)q.insertBefore(Y.firstChild,Y);q.removeChild(Y);continue}let K=nZ[L]||new Set;for(let q of Array.from(Y.attributes)){let Q=q.name.toLowerCase(),V=q.value;if(Q.startsWith("on")){Y.removeAttribute(q.name);continue}if(sH(L,Q)){if(Q==="href"){let B=O4(V);if(!B)Y.removeAttribute(q.name);else if(Y.setAttribute(q.name,B),L==="a"){if(!Y.getAttribute("rel"))Y.setAttribute("rel","noopener noreferrer");if(/^https?:\/\//i.test(B))Y.setAttribute("target","_blank")}}else if(Q==="src"){let B=L==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(V):V,N=O4(B,{allowDataImage:L==="img"});if(!N)Y.removeAttribute(q.name);else Y.setAttribute(q.name,N)}continue}Y.removeAttribute(q.name)}}return j.body.innerHTML}function rZ(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function _6(_,$=2){if(!_)return _;let j=_;for(let G=0;G<$;G+=1){let Z=rZ(j);if(Z===j)break;j=Z}return j}function aH(_){if(!_)return{text:"",frontmatter:null};let $=_.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!$.startsWith(`---
`))return{text:$,frontmatter:null};let j=$.split(`
`),G=-1;for(let Y=1;Y<j.length;Y+=1)if(/^(---|\.\.\.)\s*$/.test(j[Y])){G=Y;break}if(G<=0)return{text:$,frontmatter:null};let Z=j.slice(1,G).join(`
`);return{text:j.slice(G+1).join(`
`).replace(/^\n+/,""),frontmatter:Z}}function tH(_){let{text:$,frontmatter:j}=aH(_);if(j===null)return $;return["<!--frontmatter-block-start-->","```yaml",j,"```","<!--frontmatter-block-end-->",$].filter(Boolean).join(`

`)}function eH(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=[],Z=[],X=!1,Y=[];for(let L of j){if(!X&&L.trim().match(/^```mermaid\s*$/i)){X=!0,Y=[];continue}if(X&&L.trim().match(/^```\s*$/)){let K=G.length;G.push(Y.join(`
`)),Z.push(`@@MERMAID_BLOCK_${K}@@`),X=!1,Y=[];continue}if(X)Y.push(L);else Z.push(L)}if(X)Z.push("```mermaid"),Z.push(...Y);return{text:Z.join(`
`),blocks:G}}function _E(_){if(!_)return _;return _6(_,5)}function $E(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let G of $)j+=String.fromCharCode(G);return btoa(j)}function jE(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let G=0;G<$.length;G+=1)j[G]=$.charCodeAt(G);return new TextDecoder().decode(j)}function GE(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,G)=>{let Z=Number(G),X=$[Z]??"",Y=_E(X);return`<div class="mermaid-container" data-mermaid="${$E(Y)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function dZ(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}function ZE(_){if(!_)return _;return _.replace(/<pre><code(?:\s+class="language-([A-Za-z0-9_+-]+)")?>([\s\S]*?)<\/code><\/pre>/g,(j,G,Z)=>{let X=String(G||"").trim().toLowerCase(),Y=_6(Z,2),L=X||"plaintext",K=F2(Y,X);return`<pre><code class="hljs language-${j7(L)}">${K}</code></pre>`}).replace(/<!--frontmatter-block-start-->\s*<pre>/g,'<pre class="frontmatter-block">').replace(/<\/pre>\s*<!--frontmatter-block-end-->/g,"</pre>")}var XE={span:new Set(["title","class","lang","dir"]),input:new Set(["type","checked","disabled"])};function YE(_,$){let j=XE[_];if(!j||!$)return"";let G=[],Z=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,X;while(X=Z.exec($)){let Y=(X[1]||"").toLowerCase();if(!Y||Y.startsWith("on")||!j.has(Y))continue;let L=X[2]??X[3]??X[4]??"";G.push(` ${Y}="${j7(L)}"`)}return G.join("")}function iZ(_){if(!_)return _;return _.replace(/&lt;((?:[^"'<>]|"[^"]*"|'[^']*')*?)(?:&gt;|>)/g,($,j)=>{let G=j.trim(),Z=G.startsWith("/"),X=Z?G.slice(1).trim():G,L=X.endsWith("/")?X.slice(0,-1).trim():X,[K=""]=L.split(/\s+/,1),q=K.toLowerCase();if(!q||!rH.has(q))return $;if(q==="br")return Z?"":"<br>";if(Z)return`</${q}>`;let Q=L.slice(K.length).trim(),V=YE(q,Q);return`<${q}${V}>`})}function oZ(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,G)=>`<pre><code>${$(G)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,G)=>`<code>${$(G)}</code>`)}function sZ(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),G=(X)=>X.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),Z;while(Z=j.nextNode()){if(!Z.nodeValue)continue;let X=G(Z.nodeValue);if(X!==Z.nodeValue)Z.nodeValue=X}return $.body.innerHTML}function LE(_){if(!window.katex)return _;let $=(Y)=>rZ(Y).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(Y)=>{let L=[],K=Y.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(q)=>{let Q=L.length;return L.push(q),`@@CODE_BLOCK_${Q}@@`});return K=K.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(q)=>{let Q=L.length;return L.push(q),`@@CODE_INLINE_${Q}@@`}),{html:K,blocks:L}},G=(Y,L)=>{if(!L.length)return Y;return Y.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(K,q)=>{let Q=Number(q);return L[Q]??""})},Z=j(_),X=Z.html;return X=X.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(Y,L,K)=>{try{let q=katex.renderToString($(K.trim()),{displayMode:!0,throwOnError:!1});return`${L}${q}`}catch(q){return`<span class="math-error" title="${j7(q.message)}">${Y}</span>`}}),G(X,Z.blocks)}function qE(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),G=[],Z;while(Z=j.nextNode())G.push(Z);for(let X of G){let Y=X.nodeValue;if(!Y)continue;if(z2.lastIndex=0,!z2.test(Y))continue;z2.lastIndex=0;let L=X.parentElement;if(L&&(L.closest("a")||L.closest("code")||L.closest("pre")))continue;let K=Y.split(z2);if(K.length<=1)continue;let q=$.createDocumentFragment();K.forEach((Q,V)=>{if(V%2===1){let B=$.createElement("a");B.setAttribute("href","#"),B.className="hashtag",B.setAttribute("data-hashtag",Q),B.textContent=`#${Q}`,q.appendChild(B)}else q.appendChild($.createTextNode(Q))}),X.parentNode?.replaceChild(q,X)}return $.body.innerHTML}function KE(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=[],Z=!1;for(let X of j){if(!Z&&X.trim().match(/^```(?:math|katex|latex)\s*$/i)){Z=!0,G.push("$$");continue}if(Z&&X.trim().match(/^```\s*$/)){Z=!1,G.push("$$");continue}G.push(X)}return G.join(`
`)}function VE(_){let $=tH(_||""),j=KE($),{text:G,blocks:Z}=eH(j),X=_6(G,2),L=dZ(X).replace(/</g,"&lt;");return{safeHtml:iZ(L),mermaidBlocks:Z}}function Z1(_,$,j={}){if(!_)return"";let{safeHtml:G,mermaidBlocks:Z}=VE(_),X=window.marked?marked.parse(G,{headerIds:!1,mangle:!1}):G.replace(/\n/g,"<br>");return X=oZ(X),X=sZ(X),X=ZE(X),X=LE(X),X=qE(X),X=GE(X,Z),X=pZ(X,j),X}function $6(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=_6($,2),Z=dZ(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),X=iZ(Z),Y=window.marked?marked.parse(X):X.replace(/\n/g,"<br>");return Y=oZ(Y),Y=sZ(Y),Y=pZ(Y),Y}function QE(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,G,Z,X)=>{let Y=Z.trim().split(/\s+/).map((K)=>{let[q,Q]=K.split(",").map(Number);return{x:q,y:Q}});if(Y.length<3)return`<polyline${G}points="${Z}"${X}/>`;let L=[`M ${Y[0].x},${Y[0].y}`];for(let K=1;K<Y.length-1;K++){let q=Y[K-1],Q=Y[K],V=Y[K+1],B=Q.x-q.x,N=Q.y-q.y,U=V.x-Q.x,D=V.y-Q.y,E=Math.sqrt(B*B+N*N),H=Math.sqrt(U*U+D*D),M=Math.min($,E/2,H/2);if(M<0.5){L.push(`L ${Q.x},${Q.y}`);continue}let J=Q.x-B/E*M,O=Q.y-N/E*M,T=Q.x+U/H*M,I=Q.y+D/H*M,k=B*D-N*U>0?1:0;L.push(`L ${J},${O}`),L.push(`A ${M},${M} 0 0 ${k} ${T},${I}`)}return L.push(`L ${Y[Y.length-1].x},${Y[Y.length-1].y}`),`<path${G}d="${L.join(" ")}"${X}/>`})}async function E$(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,Z=hZ()==="dark"?j["tokyo-night"]:j["github-light"],X=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let Y of X)try{let L=Y.dataset.mermaid,K=jE(L||""),q=_6(K,2),Q=await $(q,{...Z,transparent:!0});Q=QE(Q),Y.innerHTML=Q,Y.removeAttribute("data-mermaid")}catch(L){console.error("Mermaid render error:",L);let K=document.createElement("pre");K.className="mermaid-error",K.textContent=`Diagram error: ${L.message}`,Y.innerHTML="",Y.appendChild(K),Y.removeAttribute("data-mermaid")}}f_();function qX(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let G=new Date-$,Z=G/1000,X=86400000;if(G<X){if(Z<60)return"just now";if(Z<3600)return`${Math.floor(Z/60)}m`;return`${Math.floor(Z/3600)}h`}if(G<5*X){let K=$.toLocaleDateString(void 0,{weekday:"short"}),q=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${K} ${q}`}let Y=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),L=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${Y} ${L}`}function N6(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function e_(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function w4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}function n$(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function _D(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let G=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),Z=G?.[1]||j,X=G?.[2]||"",Y=G?.[3]||"",L=String($||"").split("/").slice(0,-1).join("/"),q=Z.startsWith("/")?Z:`${L?`${L}/`:""}${Z}`,Q=[];for(let B of q.split("/")){if(!B||B===".")continue;if(B===".."){if(Q.length>0)Q.pop();continue}Q.push(B)}let V=Q.join("/");return`${V6(V)}${X}${Y}`}function B6(_){return _?.preview||null}function $D(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),G=j>=0?$.slice(j+1):$,Z=G.lastIndexOf(".");if(Z<=0||Z===G.length-1)return"none";return G.slice(Z+1)}function jD(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function GD(_,$){let j=$?.path||_?.path||"",G=[];if($?.content_type)G.push(`<span><strong>type:</strong> ${n$($.content_type)}</span>`);if(typeof $?.size==="number")G.push(`<span><strong>size:</strong> ${n$(e_($.size))}</span>`);if($?.mtime)G.push(`<span><strong>modified:</strong> ${n$(w4($.mtime))}</span>`);if(G.push(`<span><strong>kind:</strong> ${n$(jD($))}</span>`),G.push(`<span><strong>extension:</strong> ${n$($D(j))}</span>`),j)G.push(`<span><strong>path:</strong> ${n$(j)}</span>`);if($?.truncated)G.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${G.join("")}</div>`}function ZD(_){let $=B6(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=GD(_,$);if($.kind==="image"){let G=$.url||($.path?V6($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${n$(G)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let G=Z1($.text||"",null,{rewriteImageSrc:(Z)=>_D(Z,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${G}</div>`}return`${j}<pre class="workspace-preview-text"><code>${n$($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class C7{container;context;disposed=!1;host;constructor(_,$){this.container=_,this.context=$,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=ZD(this.context)}getContent(){let _=B6(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=B6(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var f7={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=B6(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new C7(_,$)}},P7={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return B6(_)||_?.path?1:!1},mount(_,$){return new C7(_,$)}};var XD=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),YD={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},LD={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function VX(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function KX(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class QX{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"document",Z=VX(j),X=LD[Z]||"\uD83D\uDCC4",Y=YD[Z]||"Office Document",L=document.createElement("div");L.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",L.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${X}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${KX(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${KX(Y)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(L);let K=L.querySelector("#ov-open-tab");if(K)K.addEventListener("click",()=>{let q=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class NX{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"document",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,X=`/office-viewer/?url=${encodeURIComponent(Z)}&name=${encodeURIComponent(G)}`;this.iframe=document.createElement("iframe"),this.iframe.src=X,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var R7={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=VX(_?.path);if(!$||!XD.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new QX(_,$);return new NX(_,$)}};var qD=/\.(csv|tsv)$/i;function BX(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class FX{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"table.csv",Z=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",X=document.createElement("div");X.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",X.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${BX(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${BX(Z)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(X);let Y=X.querySelector("#csv-open-tab");if(Y)Y.addEventListener("click",()=>{let L=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(L)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class UX{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var S7={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!qD.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new FX(_,$);return new UX(_,$)}};var KD=/\.pdf$/i;function VD(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class HX{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"document.pdf",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${VD(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let X=Z.querySelector("#pdf-open-tab");if(X)X.addEventListener("click",()=>{let Y=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Y)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class EX{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var u7={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!KD.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new HX(_,$);return new EX(_,$)}};var QD=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function g7(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class DX{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"image",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,X=document.createElement("div");X.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",X.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${g7(Z)}" alt="${g7(G)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${g7(G)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(X);let Y=X.querySelector("#img-open-tab");if(Y)Y.addEventListener("click",()=>{let L=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(L)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class WX{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var b7={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!QD.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new DX(_,$);return new WX(_,$)}};var ND=/\.(html|htm)$/i;function zX(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class OX{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"index.html",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:24px;">
                <div style="text-align:center;">
                    <div style="font-size:48px;margin-bottom:12px;">\uD83C\uDF10</div>
                    <div style="font-size:14px;color:var(--text-primary,#e2e8f0);font-weight:500;margin-bottom:4px;">${zX(G)}</div>
                    <div style="font-size:12px;color:var(--text-secondary,#94a3b8);">HTML document</div>
                </div>
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${zX(j)}</div>
                <div style="display:flex;gap:8px;flex-shrink:0;">
                    <button id="html-edit-btn" style="padding:5px 14px;background:var(--surface-color,rgba(148,163,184,.12));color:var(--text-primary,#e2e8f0);
                        border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;
                        transition:background 0.15s;">
                        Edit Source
                    </button>
                    <button id="html-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                        border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;
                        transition:background 0.15s;"
                        onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                        onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                        Preview in Tab
                    </button>
                </div>
            </div>
        `,_.appendChild(Z);let X=Z.querySelector("#html-open-tab");if(X)X.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("html-viewer:open-tab",{bubbles:!0,detail:{path:j}}))});let Y=Z.querySelector("#html-edit-btn");if(Y)Y.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("html-viewer:edit-source",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class JX{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/html-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#fff;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var v7={id:"html-viewer",label:"HTML Preview",icon:"code",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!ND.test($))return!1;return 30},mount(_,$){if($?.mode==="view")return new OX(_,$);return new JX(_,$)}};var BD=/\.(mp4|m4v|mov|webm|ogv)$/i;function FD(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class AX{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"video.mp4",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${FD(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let X=Z.querySelector("#video-open-tab");if(X)X.addEventListener("click",()=>{let Y=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Y)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class kX{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var m7={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!BD.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new AX(_,$);return new kX(_,$)}};f_();function UD(_){let $=_.includes(".")?_.slice(_.lastIndexOf(".")):"",j=_.includes(".")?_.slice(0,_.lastIndexOf(".")):_,G=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19);return`${j}.${G}${$}`}function yX(_){let{path:$,getCurrentMtime:j,anchorParent:G,anchorBefore:Z,onReload:X,onSaveCopy:Y,onOverwrite:L,pollMs:K=3000,ownerDocument:q=document}=_,Q=null,V=null,B=!1,N=!1,U=!1;async function D(){if(N||U||B)return;let O=j();if(!O)return;try{let T=await M7($);if(N||U||!T?.mtime)return;if(T.mtime!==O)B=!0,H(),M()}catch(T){if(typeof console<"u")console.debug("[file-conflict-monitor] mtime poll skipped:",T)}}function E(){if(H(),N)return;Q=setInterval(D,K)}function H(){if(Q)clearInterval(Q),Q=null}function M(){if(V||N)return;let O=q.createElement("div");O.className="editor-conflict-bar",O.innerHTML=`
      <span class="editor-conflict-text">File changed on disk</span>
      <div class="editor-conflict-actions">
        <button class="editor-conflict-btn" data-action="reload" title="Discard and reload from disk">Reload</button>
        <button class="editor-conflict-btn" data-action="save-copy" title="Save current content with a new name">Save copy</button>
        <button class="editor-conflict-btn" data-action="overwrite" title="Overwrite the disk version">Overwrite</button>
        <button class="editor-conflict-btn editor-conflict-dismiss" data-action="dismiss" title="Dismiss">×</button>
      </div>
    `,O.addEventListener("click",(T)=>{let I=T.target.closest("[data-action]");if(!I)return;let A=I.getAttribute("data-action");if(A==="reload")J(),X();else if(A==="save-copy"){let k=UD($);Y(k)}else if(A==="overwrite")J(),L();else if(A==="dismiss")J()}),V=O,G.insertBefore(O,Z)}function J(){if(V)V.remove(),V=null;B=!1,E()}return{start(){E()},stop(){H()},onSaved(O){B=!1,U=!1,E()},dispose(){if(N=!0,H(),V)V.remove(),V=null}}}var HD=/\.mindmap\.ya?ml$/i,C2=String(Date.now());function ED(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function MX(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function c7(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let G=document.querySelector(`script[src="${$}"]`);if(G)G.remove();return new Promise((Z,X)=>{let Y=document.createElement("script");Y.src=_,Y.dataset.src=$,Y.onload=()=>Z(),Y.onerror=()=>X(Error(`Failed to load ${_}`)),document.head.appendChild(Y)})}function DD(_){let $=_.split("?")[0],j=document.querySelector(`link[data-href="${$}"]`);if(j&&j.href.endsWith(_))return;document.querySelectorAll(`link[data-href="${$}"], link[href="${$}"]`).forEach((Z)=>Z.remove());let G=document.createElement("link");G.rel="stylesheet",G.href=_,G.dataset.href=$,document.head.appendChild(G)}function WD(_){let $=document.createElementNS("http://www.w3.org/2000/svg","svg");$.id="mindmap-svg",$.setAttribute("width","100%"),$.setAttribute("height","100%"),$.style.cssText="display:block;position:absolute;inset:0;",_.appendChild($);let j=document.createElement("div");j.id="toolbar",j.className="mindmap-toolbar",j.innerHTML=`
        <select id="layout-select">
            <option value="horizontal-tree">Horizontal Tree</option>
            <option value="vertical-tree">Vertical Tree</option>
            <option value="radial">Radial</option>
            <option value="force-directed">Force Directed</option>
        </select>
        <button type="button" id="zoom-fit" title="Fit to view">⊞</button>
        <button type="button" id="zoom-in"  title="Zoom in">+</button>
        <button type="button" id="zoom-out" title="Zoom out">−</button>
        <button type="button" id="mindmap-undo" title="Undo (Ctrl+Z)" disabled>Undo</button>
        <button type="button" id="mindmap-redo" title="Redo (Ctrl+Shift+Z)" disabled>Redo</button>
        <button type="button" id="reset-layout" title="Reset layout">↻</button>
    `,_.appendChild(j);let G=document.createElement("div");G.id="context-menu",G.className="context-menu hidden",G.innerHTML=`
        <button data-action="cut">Cut</button>
        <button data-action="copy">Copy</button>
        <button data-action="paste">Paste</button>
        <hr/>
        <button data-action="add-child">Add child</button>
        <button data-action="add-sibling">Add sibling</button>
        <hr/>
        <button data-action="delete">Delete</button>
    `,_.appendChild(G)}class wX{container;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"mindmap",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83E\uDDE0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${ED(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Mindmap Editor</div>
                <button id="mm-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">Edit in Tab</button>
            </div>`,_.appendChild(Z),Z.querySelector("#mm-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("mindmap:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class TX{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;mindmapEl=null;pendingContent=null;lastContent="";currentMtime=null;conflictMonitor=null;themeListener=()=>{window.__mindmapEditor?.setTheme?.(MX())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{let j=await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json();if(j?.mtime)this.currentMtime=j.mtime;return j?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;if(this.lastContent=$,DD("/static/css/mindmap.css?v="+C2),await Promise.all([c7("/static/js/vendor/d3-mindmap.min.js?v="+C2),c7("/static/js/vendor/js-yaml.min.js?v="+C2)]),this.disposed)return;this.mindmapEl=document.createElement("div"),this.mindmapEl.id="mindmap-container",this.mindmapEl.tabIndex=-1,this.mindmapEl.style.cssText="width:100%;height:100%;overflow:hidden;position:relative;outline:none;",this.container.appendChild(this.mindmapEl),WD(this.mindmapEl);let j=MX(),G=this.filePath.replace(/\/[^/]+$/,"")||"/";try{if(await c7("/static/js/vendor/mindmap-editor.js?v="+C2),this.disposed)return;let Z=window.__mindmapEditor;if(!Z)throw Error("__mindmapEditor not found");if(Z.mount({content:$,isDark:j,onEdit:(X)=>{this.lastContent=X,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(X)},resolveImagePath:(X)=>{if(X.startsWith("data:")||X.startsWith("http"))return X;return`/workspace/raw?path=${encodeURIComponent(G+"/"+X)}`}}),this.pendingContent!==null)Z.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener),this.initConflictMonitor()}catch(Z){if(console.error("[mindmap] Failed to load mindmap renderer:",Z),this.mindmapEl)this.mindmapEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load mindmap editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);let j=await $.json().catch(()=>({}));this.currentMtime=j?.mtime||this.currentMtime,this.conflictMonitor?.onSaved(this.currentMtime),this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[mindmap] Save failed:",$)}}initConflictMonitor(){if(this.conflictMonitor?.dispose(),!this.filePath)return;this.conflictMonitor=yX({path:this.filePath,getCurrentMtime:()=>this.currentMtime,anchorParent:this.container,anchorBefore:this.mindmapEl||this.container.firstElementChild,onReload:async()=>{try{let $=await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json();if(this.disposed)return;this.currentMtime=$?.mtime||null;let j=$?.text||"";this.lastContent=j;let G=window.__mindmapEditor;if(G?.update)G.update(j);this.dirty=!1,this.dirtyCallback?.(!1),this.conflictMonitor?.onSaved(this.currentMtime)}catch(_){console.error("[mindmap] Reload failed:",_)}},onSaveCopy:async(_)=>{try{await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,content:this.lastContent})})}catch($){console.error("[mindmap] Save copy failed:",$)}},onOverwrite:()=>this.saveToWorkspace(this.lastContent)}),this.conflictMonitor.start()}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__mindmapEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.mindmapEl?.focus()}resize(){window.dispatchEvent(new Event("resize"))}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,this.conflictMonitor?.dispose(),window.removeEventListener("piclaw-theme-change",this.themeListener),window.__mindmapEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var l7={id:"mindmap-editor",label:"Mindmap Editor",icon:"mindmap",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!HD.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new wX(_,$);return new TX(_,$)}};class xX{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch(G){console.warn("[tab-store] Change listener failed:",G)}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((G)=>G!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let G=this.tabs.get(_);if(!G)return;if(this.tabs.delete(_),G.id=$,G.path=$,G.label=j||$.split("/").pop()||$,this.tabs.set($,G),this.mruOrder=this.mruOrder.map((Z)=>Z===_?$:Z),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((G)=>G.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((G)=>G.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var $_=new xX;var U5=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};T0();function IX(){let[_,$]=C(null),[j,G]=C({text:"",totalLines:0}),[Z,X]=C(""),[Y,L]=C({text:"",totalLines:0}),[K,q]=C(null),[Q,V]=C(null),[B,N]=C(null),U=g(null),D=g(0),E=g(!1),H=g(""),M=g(""),J=g(!1),O=g(0),T=g(null),I=g(null),A=g(null),k=g(null),z=g(!1),W=g(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:G,agentPlan:Z,setAgentPlan:X,agentThought:Y,setAgentThought:L,pendingRequest:K,setPendingRequest:q,currentTurnId:Q,setCurrentTurnId:V,steerQueuedTurnId:B,setSteerQueuedTurnId:N,lastAgentEventRef:U,lastSilenceNoticeRef:D,isAgentRunningRef:E,draftBufferRef:H,thoughtBufferRef:M,previewResyncPendingRef:J,previewResyncGenerationRef:O,pendingRequestRef:T,stalledPostIdRef:I,currentTurnIdRef:A,steerQueuedTurnIdRef:k,thoughtExpandedRef:z,draftExpandedRef:W}}T0();var zD=0.1,SX=4,uX=4,CX=160,fX=1600,PX=200,RX=1600;function D$(){if(typeof window>"u")return 0;return Number(window.innerWidth)||0}function gX(_=D$()){return _>0?Math.floor(_*zD):0}function F6(_,$=D$(),j=0){let G=gX($)+SX+(j>0?uX+Math.max(0,j):0),Z=$>0?Math.floor($-G):fX;return Math.min(Math.max(Number(_)||0,CX),Math.max(CX,Math.min(fX,Z)))}function U6(_,$=D$(),j=0){let G=gX($)+uX+(j>0?SX+Math.max(0,j):0),Z=$>0?Math.floor($-G):RX;return Math.min(Math.max(Number(_)||0,PX),Math.max(PX,Math.min(RX,Z)))}function bX({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:G}){let Z=g((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let B=Q.clientX,N=$.current||280,U=Q.currentTarget;U.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let D=B,E=(M)=>{D=M.clientX;let J=F6(N+(M.clientX-B),D$(),j?.current||0);V.style.setProperty("--sidebar-width",`${J}px`),$.current=J},H=()=>{let M=F6(N+(D-B),D$(),j?.current||0);$.current=M,U.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",K_("sidebarWidth",String(Math.round(M))),document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",H)};document.addEventListener("mousemove",E),document.addEventListener("mouseup",H)}).current,X=g((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let B=Q.touches[0];if(!B)return;let N=B.clientX,U=$.current||280,D=Q.currentTarget;D.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let E=(M)=>{let J=M.touches[0];if(!J)return;M.preventDefault();let O=F6(U+(J.clientX-N),D$(),j?.current||0);V.style.setProperty("--sidebar-width",`${O}px`),$.current=O},H=()=>{D.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.userSelect="",K_("sidebarWidth",String(Math.round($.current||U))),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",H),document.removeEventListener("touchcancel",H)};document.addEventListener("touchmove",E,{passive:!1}),document.addEventListener("touchend",H),document.addEventListener("touchcancel",H)}).current,Y=g((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let B=Q.clientX,N=j.current||$.current||280,U=Q.currentTarget;U.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let D=B,E=(M)=>{D=M.clientX;let J=U6(N+(M.clientX-B),D$(),$?.current||0);V.style.setProperty("--editor-width",`${J}px`),j.current=J},H=()=>{let M=U6(N+(D-B),D$(),$?.current||0);j.current=M,U.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",K_("editorWidth",String(Math.round(M))),document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",H)};document.addEventListener("mousemove",E),document.addEventListener("mouseup",H)}).current,L=g((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let B=Q.touches[0];if(!B)return;let N=B.clientX,U=j.current||$.current||280,D=Q.currentTarget;D.classList.add("dragging"),document.body.style.userSelect="none";let E=(M)=>{let J=M.touches[0];if(!J)return;M.preventDefault();let O=U6(U+(J.clientX-N),D$(),$?.current||0);V.style.setProperty("--editor-width",`${O}px`),j.current=O},H=()=>{D.classList.remove("dragging"),document.body.style.userSelect="",K_("editorWidth",String(Math.round(j.current||U))),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",H),document.removeEventListener("touchcancel",H)};document.addEventListener("touchmove",E,{passive:!1}),document.addEventListener("touchend",H),document.addEventListener("touchcancel",H)}).current,K=g((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let B=Q.clientY,N=G?.current||200,U=Q.currentTarget;U.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let D=B,E=(M)=>{D=M.clientY;let J=Math.min(Math.max(N-(M.clientY-B),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${J}px`),G)G.current=J;window.dispatchEvent(new CustomEvent("dock-resize"))},H=()=>{let M=Math.min(Math.max(N-(D-B),100),window.innerHeight*0.5);if(G)G.current=M;U.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",K_("dockHeight",String(Math.round(M))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",H)};document.addEventListener("mousemove",E),document.addEventListener("mouseup",H)}).current,q=g((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let B=Q.touches[0];if(!B)return;let N=B.clientY,U=G?.current||200,D=Q.currentTarget;D.classList.add("dragging"),document.body.style.userSelect="none";let E=(M)=>{let J=M.touches[0];if(!J)return;M.preventDefault();let O=Math.min(Math.max(U-(J.clientY-N),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${O}px`),G)G.current=O;window.dispatchEvent(new CustomEvent("dock-resize"))},H=()=>{D.classList.remove("dragging"),document.body.style.userSelect="",K_("dockHeight",String(Math.round(G?.current||U))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",H),document.removeEventListener("touchcancel",H)};document.addEventListener("touchmove",E,{passive:!1}),document.addEventListener("touchend",H),document.addEventListener("touchcancel",H)}).current;return{handleSplitterMouseDown:Z,handleSplitterTouchStart:X,handleEditorSplitterMouseDown:Y,handleEditorSplitterTouchStart:L,handleDockSplitterMouseDown:K,handleDockSplitterTouchStart:q}}T0();function h7(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},G=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,Z=j[_]??window[G],X=Number(Z);return Number.isFinite(X)?X:$}catch{return $}}var vX=h7("warning",30000),mX=h7("finalize",120000),cX=h7("refresh",30000),lX=30000;function hX(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function H6(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function nX(_=30000){let[,$]=C(0);u(()=>{let j=setInterval(()=>$((G)=>G+1),_);return()=>clearInterval(j)},[_])}function pX(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((G,Z)=>G+Math.max(1,Math.ceil(Z.length/$)),0)}function f2(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function OD(_){if(!_||typeof _!=="object")return null;let $=_.retry_at??_.retryAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function p$(_){if(!_||typeof _!=="object")return null;let $=_.last_event_at??_.lastEventAt??_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function W$(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function P2(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return W$(_)?"Compacting context":"Working..."}function rX(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,G=Math.floor($/60)%60,Z=Math.floor($/3600);if(Z>0)return`${Z}:${String(G).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${G}:${String(j).padStart(2,"0")}`}function E6(_,$=Date.now()){let j=f2(_);if(j===null)return null;return rX(Math.max(0,$-j))}function dX(_,$=Date.now()){let j=OD(_);if(j===null)return null;let G=j-$;if(G<=0)return"retrying now";return`retry in ${rX(G)}`}T0();function LL(_={}){o1(_)}function qL(){let[_,$]=C(!1);if(u(()=>{let Z=(Y)=>{let L=H5(Y?.detail?.section);if(L)try{window.__piclawSettingsRequestedSection=L}catch(K){}$(!0)};window.addEventListener("piclaw:open-settings",Z);let X=R2();if(X.open){if(X.section)try{window.__piclawSettingsRequestedSection=X.section}catch(Y){}$(!0)}return()=>window.removeEventListener("piclaw:open-settings",Z)},[]),!_)return null;let[j,G]=C(null);if(u(()=>{Promise.resolve().then(() => (YL(),XL)).then((Z)=>{G(()=>Z.SettingsDialogContent)})},[]),!j)return F`
            <div class="settings-dialog-backdrop" onClick=${()=>$(!1)}>
                <div class="settings-dialog settings-dialog-loading-shell" data-testid="settings-dialog">
                    <div class="settings-loading-shell-body">
                        <span class="settings-spinner"></span>
                        <span>Loading settings…</span>
                    </div>
                </div>
            </div>
        `;return F`
        <div class="settings-dialog-backdrop" onClick=${(Z)=>{if(Z.target===Z.currentTarget)$(!1)}}>
            <${j} onClose=${()=>$(!1)} />
        </div>
    `}T0();function dW(_,$){return new URL(String(_||""),$).toString()}function KL(){let[_,$]=C(()=>typeof window>"u"?"http://localhost/":window.location.href);u(()=>{if(typeof window>"u")return;let Z=()=>$(window.location.href);return window.addEventListener("popstate",Z),()=>window.removeEventListener("popstate",Z)},[]);let j=f((Z,X={})=>{if(typeof window>"u")return;let{replace:Y=!1}=X||{},L=dW(Z,window.location.href);if(Y)window.history.replaceState(null,"",L);else window.history.pushState(null,"",L);$(window.location.href)},[]);return{locationParams:G0(()=>new URL(_).searchParams,[_]),navigate:j}}T0();T0();function VL(_,$,j,G){try{let Z=_?.getItem?.($),X=Z?Number(Z):Number.NaN;return Number.isFinite(X)&&X>=j?X:G}catch(Z){return G}}function B9(_,$,j){try{return _?.setItem?.($,String(Math.round(j))),!0}catch(G){return!1}}var iW=400,F9=60,oW=220,U9="mdPreviewHeight";function sW(){return VL(localStorage,U9,F9,oW)}function i2({getContent:_,path:$,onClose:j}){let[G,Z]=C(""),[X,Y]=C(sW),L=g(null),K=g(null),q=g(""),Q=g(_);return Q.current=_,u(()=>{let N=()=>{let D=Q.current?.()||"";if(D===q.current)return;q.current=D;try{let E=Z1(D,null);Z(E)}catch{Z('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};N();let U=setInterval(N,iW);return()=>clearInterval(U)},[]),u(()=>{if(L.current&&G)E$(L.current).catch((N)=>{console.debug("[markdown-preview] Mermaid rendering failed for the live preview.",N,{path:$})})},[G]),F`
        <div
            class="md-preview-splitter"
            onMouseDown=${(N)=>{N.preventDefault();let U=N.clientY,D=K.current?.offsetHeight||X,E=K.current?.parentElement,H=E?E.offsetHeight*0.7:500,M=N.currentTarget;M.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let J=(T)=>{let I=Math.min(Math.max(D-(T.clientY-U),F9),H);Y(I)},O=()=>{M.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",B9(localStorage,U9,K.current?.offsetHeight||X),document.removeEventListener("mousemove",J),document.removeEventListener("mouseup",O)};document.addEventListener("mousemove",J),document.addEventListener("mouseup",O)}}
            onTouchStart=${(N)=>{N.preventDefault();let U=N.touches[0];if(!U)return;let D=U.clientY,E=K.current?.offsetHeight||X,H=K.current?.parentElement,M=H?H.offsetHeight*0.7:500,J=N.currentTarget;J.classList.add("dragging"),document.body.style.userSelect="none";let O=(I)=>{let A=I.touches[0];if(!A)return;I.preventDefault();let k=Math.min(Math.max(E-(A.clientY-D),F9),M);Y(k)},T=()=>{J.classList.remove("dragging"),document.body.style.userSelect="",B9(localStorage,U9,K.current?.offsetHeight||X),document.removeEventListener("touchmove",O),document.removeEventListener("touchend",T),document.removeEventListener("touchcancel",T)};document.addEventListener("touchmove",O,{passive:!1}),document.addEventListener("touchend",T),document.addEventListener("touchcancel",T)}}
        ></div>
        <div class="md-preview-panel" ref=${K} style=${{height:X+"px"}}>
            <div class="md-preview-header">
                <span class="md-preview-title">Preview</span>
                <button class="md-preview-close" onClick=${j} title="Close preview" aria-label="Close preview">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>
            <div
                class="md-preview-body post-content"
                ref=${L}
                dangerouslySetInnerHTML=${{__html:G}}
            />
        </div>
    `}function QL(_){if(_.branchLoaderMode)return"branch-loader";if(_.panePopoutMode)return"pane-popout";return"main"}function aW(_){return _==="error"?"Could not open branch window":"Opening branch…"}function NL(_){return F`
    <div class="app-shell chat-only">
      <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
        <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
          <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
            ${aW(_.status)}
          </h1>
          <p style=${{margin:0,lineHeight:1.6}}>${_.message}</p>
        </div>
      </div>
    </div>
  `}function BL(_){let{appShellRef:$,editorOpen:j,hidePanePopoutControls:G,panePopoutHasMenuActions:Z,panePopoutTitle:X,tabStripTabs:Y,tabStripActiveId:L,handleTabActivate:K,previewTabs:q,diffTabs:Q,handleTabTogglePreview:V,handleTabToggleDiff:B,editorContainerRef:N,getPaneContent:U,panePopoutPath:D}=_,E=j&&!G&&Z,H=X?`Pane window controls for ${X}`:"Pane window controls";return F`
    <div class=${`app-shell pane-popout${j?" editor-open":""}`} ref=${$}>
      <div class="editor-pane-container pane-popout-container">
        ${E&&F`
          <div class="pane-popout-hover-zone" aria-hidden="true"></div>
          <div class="pane-popout-controls" role="toolbar" aria-label=${H}>
            <details class="pane-popout-controls-menu">
              <summary
                class="pane-popout-controls-trigger pane-popout-controls-icon-button"
                aria-label=${H}
                title=${H}
              >
                <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M3 4.75h10" />
                  <path d="M5 8h8" />
                  <path d="M7 11.25h6" />
                </svg>
              </summary>
              <div class="pane-popout-controls-panel">
                ${Y.length>1&&F`
                  <div class="pane-popout-controls-section">
                    <div class="pane-popout-controls-section-title">Open panes</div>
                    <div class="pane-popout-controls-list">
                      ${Y.map((M)=>F`
                        <button
                          type="button"
                          class=${`pane-popout-controls-item${M.id===L?" active":""}`}
                          onClick=${(J)=>{K(M.id),J.currentTarget.closest("details")?.removeAttribute("open")}}
                        >
                          ${M.label}
                        </button>
                      `)}
                    </div>
                  </div>
                `}
                ${L&&Q.has(L)&&F`
                  <button
                    type="button"
                    class="pane-popout-controls-action"
                    onClick=${(M)=>{B(L),M.currentTarget.closest("details")?.removeAttribute("open")}}
                  >
                    Hide diff
                  </button>
                `}
                ${L&&q.has(L)&&F`
                  <button
                    type="button"
                    class="pane-popout-controls-action"
                    onClick=${(M)=>{V(L),M.currentTarget.closest("details")?.removeAttribute("open")}}
                  >
                    Hide preview
                  </button>
                `}
              </div>
            </details>
          </div>
        `}
        ${j?F`<div class="editor-pane-host" ref=${N}></div>`:F`
            <div class="card" style=${{margin:"24px",padding:"24px",maxWidth:"640px"}}>
              <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>Opening pane…</h1>
              <p style=${{margin:0,lineHeight:1.6}}>${D||"No pane path provided."}</p>
            </div>
          `}
        ${j&&L&&q.has(L)&&F`
          <${i2}
            getContent=${U}
            path=${L}
            onClose=${()=>V(L)}
          />
        `}
      </div>
    </div>
  `}T0();T0();function o2(_){return String(_||"").toLowerCase().replace(/^@/,"").replace(/\s+/g," ").trim()}function tW(_,$){let j=o2(_),G=o2($);if(!G)return!1;return j.startsWith(G)||j.includes(G)}function J6(_){if(!_)return!1;if(_.isComposing)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;return typeof _.key==="string"&&_.key.length===1&&/\S/.test(_.key)}function H9(_,$,j=Date.now(),G=700){let Z=_&&typeof _==="object"?_:{value:"",updatedAt:0},X=String($||"").trim().toLowerCase();if(!X)return{value:"",updatedAt:j};return{value:!Z.value||!Number.isFinite(Z.updatedAt)||j-Z.updatedAt>G?X:`${Z.value}${X}`,updatedAt:j}}function eW(_,$){let j=Math.max(0,Number(_)||0);if(j<=0)return[];let Z=((Number.isInteger($)?$:0)%j+j)%j,X=[];for(let Y=0;Y<j;Y+=1)X.push((Z+Y)%j);return X}function _z(_,$,j=0,G=(Z)=>Z){let Z=o2($);if(!Z)return-1;let X=Array.isArray(_)?_:[],Y=eW(X.length,j),L=X.map((K)=>o2(G(K)));for(let K of Y)if(L[K].startsWith(Z))return K;for(let K of Y)if(L[K].includes(Z))return K;return-1}function E9(_,$,j=-1,G=(Z)=>Z){let Z=Array.isArray(_)?_:[];if(j>=0&&j<Z.length){let X=G(Z[j]);if(tW(X,$))return j}return _z(Z,$,0,G)}f_();function s2(_){return String(_||"").trim().toLowerCase()}function D9(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return s2($[1]||"")}function $z(_){let $=new Set,j=[];for(let G of Array.isArray(_)?_:[]){let Z=s2(G?.agent_name);if(!Z||$.has(Z))continue;$.add(Z),j.push(G)}return j}function FL(_,$,j={}){let G=D9($);if(G==null)return[];let Z=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return $z(_).filter((X)=>{if(Z&&X?.chat_jid===Z)return!1;return s2(X?.agent_name).startsWith(G)})}function W9(_){let $=s2(_);return $?`@${$} `:""}function UL(_={}){if(_.searchMode)return!1;return Boolean(_.showSessionSwitcherButton)}function HL(_,$,j={}){if(!_||_.isComposing)return!1;if(!UL(j))return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;if(_.key!=="@")return!1;return String($||"")===""}function z9(_,$={}){if(!UL($))return!1;return String(_||"")==="@"}function O9(_){let $=J9(_);return $?`@${$}`:""}function J9(_){return String(_||"").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")}function a2(_,$=""){let j=String(_||""),G=J9(j),Z=J9($);if(!j.trim())return{normalized:G,handle:"",canSubmit:!1,kind:"error",message:"Enter a branch handle."};if(!G)return{normalized:G,handle:"",canSubmit:!1,kind:"error",message:"Handle must contain at least one letter or number."};let X=`@${G}`;if(G===Z)return{normalized:G,handle:X,canSubmit:!1,kind:"info",message:`Already using ${X}.`};if(G!==j.trim())return{normalized:G,handle:X,canSubmit:!0,kind:"info",message:`Will save as ${X}. Letters, numbers, - and _ are allowed; leading @ is optional.`};return{normalized:G,handle:X,canSubmit:!0,kind:"success",message:`Saving as ${X}.`}}function jz(_,$={}){let j=[],G=typeof $.currentChatJid==="string"?$.currentChatJid.trim():"",Z=typeof _?.chat_jid==="string"?_.chat_jid.trim():"";if(G&&Z===G)j.push("current");if(_?.archived_at)j.push("archived");else if(_?.is_active)j.push("active");return j}function t2(_,$={}){let j=O9(_?.agent_name)||String(_?.chat_jid||"").trim(),G=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():"unknown-chat",Z=jz(_,$);return Z.length>0?`${j} — ${G} • ${Z.join(" • ")}`:`${j} — ${G}`}function EL(_,$,j){let G=O9(_),Z=O9($),X=String(j||"").trim();if(G&&Z&&G!==Z)return`Restored archived ${G} as ${Z} because ${G} is already in use.`;if(Z)return`Restored ${Z}.`;if(G)return`Restored ${G}.`;return`Restored ${X||"branch"}.`}function e2({steerQueued:_=!1,pulsing:$=!1}={}){let j=["turn-dot"];if(_)j.push("turn-dot-queued");if($)j.push("turn-dot-pulsing");return j.join(" ")}function _8({pulsing:_=!1}={}){let $=["compose-inline-status-dot"];if(_)$.push("compose-inline-status-dot-pulsing");return $.join(" ")}function $8(_,{isLastActivity:$=!1,pendingRequest:j=!1}={}){if(j)return"dot";if($)return"none";if(_?.type==="error")return"none";if(_?.type==="intent")return"dot";let G=typeof _?.type==="string"?_.type:"";if(Boolean(typeof _?.tool_name==="string"&&_.tool_name.trim()||_?.tool_args))return"spinner";if(G==="tool_call"||G==="tool_status"||G==="thinking"||G==="waiting")return"spinner";return"dot"}function DL(_,$={}){return $8(_,$)==="dot"}T0();var WL=350;function Gz(_){return String(_||"Connecting").replace(/[-_]+/g," ").replace(/^./,($)=>$.toUpperCase())}function Zz(_,$={}){let j=typeof _==="string"&&_.trim()?_.trim():"connecting";if(j==="connected")return{show:!1,statusClass:"connected",label:"Connected",title:"Connection: Connected"};if(j!=="disconnected"){let L=Gz(j);return{show:!0,statusClass:j,label:L,title:`Connection: ${L}`}}let G=Number.isFinite(Number($?.delayMs))?Math.max(0,Number($.delayMs)):WL,Z=Number.isFinite(Number($?.nowMs))?Number($.nowMs):Date.now(),X=Number.isFinite(Number($?.disconnectedAtMs))?Number($.disconnectedAtMs):Z;return Z-X>=G?{show:!0,statusClass:"disconnected",label:"Reconnecting",title:"Reconnecting"}:{show:!1,statusClass:"connecting",label:"Connecting",title:"Connecting"}}function A9(_,$={}){let j=Number.isFinite(Number($?.delayMs))?Math.max(0,Number($.delayMs)):WL,[G,Z]=C(null),[X,Y]=C(()=>Date.now());return u(()=>{if(_==="disconnected"){let L=Date.now();Z((K)=>K??L),Y(L);return}Z(null),Y(Date.now())},[_]),u(()=>{if(_!=="disconnected"||G===null)return;let L=j-(Date.now()-G);if(L<=0)return;let K=0,q=0,Q=setTimeout(()=>{if(typeof requestAnimationFrame!=="function"){Y(Date.now());return}K=requestAnimationFrame(()=>{q=requestAnimationFrame(()=>{Y(Date.now())})})},L);return()=>{if(clearTimeout(Q),K)cancelAnimationFrame(K);if(q)cancelAnimationFrame(q)}},[_,G,j]),G0(()=>Zz(_,{delayMs:j,disconnectedAtMs:G,nowMs:X}),[_,j,G,X])}T0();function L1({prefix:_="file",label:$,title:j,onRemove:G,onClick:Z,removeTitle:X="Remove",icon:Y="file"}){let L=`${_}-file-pill`,K=`${_}-file-name`,q=`${_}-file-remove`,Q=Y==="message"?F`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:Y==="folder"?F`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        </svg>`:F`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
        </svg>`;return F`
    <span class=${L} title=${j||$} onClick=${Z}>
      ${Q}
      <span class=${K}>${$}</span>
      ${G&&F`
        <button
          class=${q}
          onClick=${(V)=>{V.preventDefault(),V.stopPropagation(),G()}}
          title=${X}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}async function k9(_,$,j){if(typeof _!=="function")return!1;try{let G=await _($);if(!G)return!1;return j(G),!0}catch(G){return!1}}function Xz(_={}){let $=_.navigator??(typeof navigator<"u"?navigator:null);if(!$)return!1;let j=String($.userAgent||"");if(/iPad|iPhone/.test(j))return!0;return $.platform==="MacIntel"&&Number($.maxTouchPoints||0)>1}function Yz(_={}){let $=_.window??(typeof window<"u"?window:null);if(!$)return null;return $.SpeechRecognition||$.webkitSpeechRecognition||null}function y9(_={}){let $=_.window??(typeof window<"u"?window:null),j=typeof _.secureContext==="boolean"?_.secureContext:Boolean($?.isSecureContext),G=P1(_),Z=Xz(_),X=Yz(_);if(!j)return{mode:"unavailable",showButton:!1,canStart:!1,reason:"secure-context-required",title:"Voice input requires HTTPS",detail:"Native browser speech input needs a secure context (HTTPS or localhost).",recognitionCtor:null,ios:Z,standalone:G,secureContext:j};if(Z&&G)return{mode:"fallback",showButton:!0,canStart:!1,reason:"ios-standalone-fallback",title:"Use keyboard dictation",detail:"Speech input is intentionally downgraded in iPhone/iPad standalone web apps because browser-native recognition is not reliable there. Focus the compose box and use the keyboard dictation mic instead.",recognitionCtor:X,ios:Z,standalone:G,secureContext:j};if(!X){if(Z)return{mode:"fallback",showButton:!0,canStart:!1,reason:"ios-keyboard-dictation",title:"Use keyboard dictation",detail:"This browser does not expose native in-page speech recognition here. Focus the compose box and use the keyboard dictation mic instead.",recognitionCtor:null,ios:Z,standalone:G,secureContext:j};return{mode:"unavailable",showButton:!1,canStart:!1,reason:"unsupported",title:"Voice input unavailable",detail:"This browser does not expose native speech recognition in this context.",recognitionCtor:null,ios:Z,standalone:G,secureContext:j}}return{mode:"native",showButton:!0,canStart:!0,reason:"supported",title:"Start voice input",detail:Z?"Browser-native speech input is available here, but Safari/WebKit reliability may still vary.":"Browser-native speech input is available.",recognitionCtor:X,ios:Z,standalone:G,secureContext:j}}function zL(_,$="",j=""){let G=String(_||""),Z=String($||"").trim(),X=String(j||"").trim(),Y=[Z,X].filter(Boolean).join(" ").trim();if(!Y)return G;if(!G)return Y;let L=/[\s\n]$/.test(G)?"":" ";return`${G}${L}${Y}`}function OL(_,$=0){let j="",G="",Z=_&&typeof _.length==="number"?_:[];for(let X=Math.max(0,$);X<Z.length;X+=1){let Y=Z[X];if(!Y||!Y[0])continue;let L=String(Y[0].transcript||"").trim();if(!L)continue;if(Y.isFinal)j=`${j} ${L}`.trim();else G=`${G} ${L}`.trim()}return{finalText:j,interimText:G}}function M9(_,$=null){let j=String(_||"").trim().toLowerCase();switch(j){case"not-allowed":case"service-not-allowed":return $?.ios?"Microphone or speech-recognition permission was denied. On iPhone/iPad, using keyboard dictation may be more reliable.":"Microphone or speech-recognition permission was denied by the browser.";case"no-speech":return"No speech was detected. Try again and speak after the listening indicator appears.";case"audio-capture":return"The browser could not access a microphone for speech recognition.";case"network":return"The browser speech-recognition service reported a network or service failure.";case"aborted":return"Voice input was stopped.";default:return j?`Voice input failed (${j}).`:"Voice input failed."}}var Lz=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking/effort level"},{name:"/effort",description:"Show or set thinking/effort level (alias for /thinking)"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (no name to show available themes)"},{name:"/meters",description:"Toggle the top-right CPU/RAM HUD (/meters on|off|toggle)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/session-rotate",description:"Rotate the current persisted session into an archived file"},{name:"/rollup",description:"Merge the current branch chat back into its parent chat"},{name:"/clone",description:"Duplicate the current active branch into a new session"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/dream",description:"Run Dream memory maintenance over recent days (default 7)"},{name:"/tasks",description:"List scheduled tasks"},{name:"/scheduled",description:"List scheduled tasks"},{name:"/pair",description:"Manage remote peer connections (/pair request <url> | /pair list)"},{name:"/ask",description:"Send a prompt to a paired remote instance (/ask <instance_id|fingerprint> <prompt>)"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/exit",description:"Exit the current piclaw process immediately (Supervisor will restart it)"},{name:"/login",description:"Login to an AI model provider (OAuth or API key)"},{name:"/logout",description:"Logout from an AI model provider"},{name:"/settings",description:"Open the settings pane"},{name:"/help",description:"Open keyboard shortcuts help"},{name:"/commands",description:"List available commands"},{name:"/skill:",description:"Run a workspace skill (e.g. /skill:visual-artifact-generator, /skill:web-search)"}],JL="piclaw_compose_history";function qz(_,$,j=!1){if(j)return{shouldApply:!1,nextToken:$,text:""};if(!_||typeof _!=="object")return{shouldApply:!1,nextToken:$,text:""};let G=typeof _.token==="string"?_.token:"",Z=typeof _.text==="string"?_.text:"";if(!G||G===$||!Z.trim())return{shouldApply:!1,nextToken:$,text:""};return{shouldApply:!0,nextToken:G,text:Z}}function Kz(_="web:default"){let $=typeof _==="string"&&_.trim()?_.trim():"web:default";if($==="web:default")return JL;return`${JL}:${encodeURIComponent($)}`}function Vz(_,$=null){let j=new Set,G=[];for(let Z of Array.isArray(_)?_:[]){let X=typeof Z?.chat_jid==="string"?Z.chat_jid.trim():"";if(!X||j.has(X))continue;if(!(typeof Z?.agent_name==="string"?Z.agent_name.trim():""))continue;j.add(X),G.push(Z)}return G.sort((Z,X)=>{let Y=Boolean(Z?.archived_at),L=Boolean(X?.archived_at);if(Y!==L)return Y?1:-1;let K=String(Z?.agent_name||"").trim(),q=String(X?.agent_name||"").trim(),Q=K.localeCompare(q,void 0,{sensitivity:"base"});if(Q!==0)return Q;let V=String(Z?.chat_jid||"").trim(),B=String(X?.chat_jid||"").trim();return V.localeCompare(B,void 0,{sensitivity:"base"})}),G}function Qz(_){return Boolean(_?.is_active&&!_?.archived_at)}function Nz(_,$=null){let j=Array.isArray(_)?_:[],G=typeof $==="string"?$.trim():"";if(G){let X=j.findIndex((Y)=>{if(Y?.disabled)return!1;if(Y?.type!=="session")return!1;return(typeof Y?.chat?.chat_jid==="string"?Y.chat.chat_jid.trim():"")===G});if(X>=0)return X}let Z=j.findIndex((X)=>!X?.disabled);return Z>=0?Z:0}function AL(_,$){let j=typeof $?.command?.message==="string"?$.command.message.trim():"";if(!$?.ui_only||!j)return null;let G=typeof _==="string"?_.trim():"";if(!G.startsWith("/"))return null;let Z=G.split(/\s+/).filter(Boolean),X=Z[0]?.toLowerCase()||"";if(!(Z.length>1)&&(X==="/model"||X==="/thinking"||X==="/effort"))return j;return null}function Bz(_,$,j=!1){if(_)return{mode:"queue",className:"icon-btn send-btn queue-mode",title:"Queue follow-up (Enter)",ariaLabel:"Queue follow-up message",disabled:!$};return{mode:"send",className:"icon-btn send-btn",title:"Send (Enter)",ariaLabel:"Send message",disabled:!$}}function kL(_,$,j={}){if(!_||j.searchMode)return!1;if(!(_.key===" "||_.key==="Spacebar"||_.code==="Space"))return!1;if(_.ctrlKey||_.metaKey||_.altKey||_.repeat)return!1;if(!j.speechButtonVisible||j.speechButtonActive)return!1;if(!j.canStartSpeech)return!1;return String($||"").trim().length===0}function Fz(_,$){if(!$||!_)return!1;return _.key===" "||_.key==="Spacebar"||_.code==="Space"}function Uz(_,$=!1){if(!_)return null;if($)return{mode:"compacting",className:"icon-btn send-btn abort-mode compacting-mode",title:"Compacting context — Stop response",ariaLabel:"Compacting context — Stop response",disabled:!1};return{mode:"abort",className:"icon-btn send-btn abort-mode",title:"Stop response",ariaLabel:"Stop response",disabled:!1}}function Hz(_){return _==="abort"||_==="compacting"}function Ez(_,$=0){if(_?.visible===!1)return{visible:!1,title:"",indicatorText:null,animateDot:!1};let j=typeof _?.message==="string"&&_.message.trim()?_.message.trim():null,G=_?.indicator&&typeof _.indicator==="object"?_.indicator:null;if(!j&&!G)return{visible:!1,title:"",indicatorText:null,animateDot:!1};if(G?.mode==="hidden")return{visible:Boolean(j),title:j||"Working…",indicatorText:null,animateDot:!1};if(G?.mode==="custom"&&Array.isArray(G.frames)&&G.frames.length>0){let Z=G.frames,X=Number.isFinite($)&&$>=0?Math.floor($)%Z.length:0;return{visible:!0,title:j||"Working…",indicatorText:Z[X],animateDot:!1}}return{visible:!0,title:j||"Working…",indicatorText:null,animateDot:!0}}function Dz({usage:_,onCompact:$,compactionLabel:j="",compactionTitle:G=""}){let Z=Math.min(100,Math.max(0,_.percent||0)),X=_.tokens,Y=_.contextWindow,L="Compact context",K=X!=null?`Context: ${A6(X)} / ${A6(Y)} tokens (${Z.toFixed(0)}%)`:`Context: ${Z.toFixed(0)}%`,q=typeof j==="string"?j.trim():"",Q=typeof G==="string"?G.trim():"",V=q?`${K} — ${Q||"Smart compaction"} · ${q}`:`${K} — ${"Compact context"}`,B=9,N=2*Math.PI*9,U=Z/100*N,D=Z>90?"var(--context-red, #ef4444)":Z>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return F`
        <button
            class=${`compose-context-pie icon-btn${q?" is-compacting":""}`}
            type="button"
            title=${V}
            aria-label=${q?`Smart compaction ${q}`:"Compact context"}
            onClick=${(E)=>{E.preventDefault(),E.stopPropagation(),$?.()}}
        >
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke=${D}
                    stroke-width="2.5"
                    stroke-dasharray=${`${U} ${N}`}
                    stroke-linecap="round"
                    transform="rotate(-90 12 12)" />
            </svg>
            ${q&&F`<span class="compose-context-pie-timer">${q}</span>`}
        </button>
    `}function A6(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function Wz(_){let $=Number(_?.tokens);return Number.isFinite($)&&$>0?$:null}function yL(_,$){let j=Number(_?.contextWindow??_?.context_window),G=Wz($);if(!Number.isFinite(j)||j<=0||!Number.isFinite(G)||G<=0)return{blocked:!1,note:"",title:"",tokens:G??null,contextWindow:Number.isFinite(j)&&j>0?j:null};if(G<=j)return{blocked:!1,note:"",title:"",tokens:G,contextWindow:j};return{blocked:!0,note:"Current context won’t fit — compact first",title:`Current context uses ${A6(G)} tokens, but this model only fits ${A6(j)}. Compact first.`,tokens:G,contextWindow:j}}function w9(_){let $=Number(_);if(!Number.isFinite($)||$<=0)return"";return`${A6($)} ctx`}function zz(_,$){let j=typeof _==="string"?_.trim():"",G=w9($);if(!j)return G;if(!G)return j;return`${j} • ${G}`}function Oz(_,$="",j=""){let G=typeof _==="string"?_.trim():"";if(G)return G;let Z=typeof $==="string"?$.trim():"",X=typeof j==="string"?j.trim():"";if(Z&&X)return`${Z}/${X}`;return X||Z||""}function TL(_){let $=Array.isArray(_?.model_options)?_.model_options:null,j=Array.isArray(_?.models)?_.models:[],G=$&&$.length>0?$:j,Z=[];for(let X of G){if(typeof X==="string"){let V=X.trim();if(!V)continue;let B=V.indexOf("/"),N=B>0?V.slice(0,B).trim():"",U=B>0?V.slice(B+1).trim():V;Z.push({label:V,provider:N,id:U,name:null,contextWindow:null,reasoning:!1});continue}if(!X||typeof X!=="object")continue;let Y=typeof X.provider==="string"?X.provider.trim():"",L=typeof X.id==="string"?X.id.trim():"",K=Oz(X.label,Y,L);if(!K)continue;let q=typeof X.name==="string"&&X.name.trim()?X.name.trim():null,Q=Number(X.context_window??X.contextWindow);Z.push({label:K,provider:Y,id:L,name:q,contextWindow:Number.isFinite(Q)&&Q>0?Q:null,reasoning:Boolean(X.reasoning)})}return Z.sort((X,Y)=>X.label.localeCompare(Y.label,void 0,{sensitivity:"base"})),Z}function Jz(_){if(!_||typeof _!=="object")return"";return[_.label,_.provider,_.id,_.name,w9(_.contextWindow)].filter(Boolean).join(" ")}function Az(_,$){let j=typeof _==="string"?_.trim():"";if(j)return{showPicker:!0,label:j,hasAvailableModels:!0};let G=TL($).length>0;return{showPicker:G,label:G?"Select model":"",hasAvailableModels:G}}function j8(_){return(typeof _==="string"?_.trim():"")||null}function ML(_){return j8(_)?.toLowerCase()??null}function wL(_,$){let j=ML(_),G=ML($);if(!j||!G)return!1;return j===G||j.endsWith(`/${G}`)||G.endsWith(`/${j}`)}function kz(_,$){let j=$&&typeof $==="object"?$:{},G=j8(j.latest_response_model??j.response_model??j.responseModel??j.routed_model??j.routedModel);if(!G)return null;let Z=j8(j.latest_requested_model??j.requested_model??j.requestedModel??j.current??j.model??_);if(Z&&wL(G,Z))return null;let X=j8(_??j.current??j.model);if(X&&Z&&!wL(X,Z))return null;return{label:`Routed: ${G}`,title:Z?`Requested model: ${Z} • Routed model: ${G}`:`Routed model: ${G}`,requestedModel:Z,responseModel:G}}function yz(_){if(!_)return _;let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!$.includes(" @ ")||!$.includes(`:
`))return _;let j=$.split(`
`),G=[],Z=0,X=!1;while(Z<j.length){let L=j[Z].trim();if(!L){Z+=1;continue}if(L==="Messages:"||L.startsWith("Channel:")){X=!0,Z+=1;continue}if(/^[^\n]+\s@\s[^\n]+:$/.test(L)){X=!0,Z+=1;let K=[];while(Z<j.length){let q=j[Z],Q=q.trim();if(/^[^\n]+\s@\s[^\n]+:$/.test(Q))break;if(Q.startsWith("Channel:")||Q==="Messages:")break;K.push(q.startsWith("  ")?q.slice(2):q),Z+=1}if(K.length>0)G.push(K.join(`
`).trim());continue}return _}return X&&G.length>0?G.filter(Boolean).join(`

`):_}function xL(_){let $=String(_||"").trim(),j=$.match(/^`([^`]+)`$/);return(j?j[1]:$).trim()}function Mz(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let q=0;q<j.length;q+=1)if(j[q].trim()==="Files:"&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){G=q;break}if(G===-1)return{content:_,fileRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let q=j[X];if(/^\s*-\s+/.test(q)){let Q=xL(q.replace(/^\s*-\s+/,"").trim());if(Q)Z.push(Q)}else if(!q.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let Y=j.slice(0,G),L=j.slice(X);return{content:[...Y,...L].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:Z}}function wz(_){if(!_)return{content:_,folderRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let q=0;q<j.length;q+=1)if(j[q].trim()==="Folders:"&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){G=q;break}if(G===-1)return{content:_,folderRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let q=j[X];if(/^\s*-\s+/.test(q)){let Q=xL(q.replace(/^\s*-\s+/,"").trim());if(Q)Z.push(Q)}else if(!q.trim())break;else break}if(Z.length===0)return{content:_,folderRefs:[]};let Y=j.slice(0,G),L=j.slice(X);return{content:[...Y,...L].join(`
`).replace(/\n{3,}/g,`

`).trim(),folderRefs:Z}}function Tz(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let q=0;q<j.length;q+=1)if(j[q].trim()==="Referenced messages:"&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){G=q;break}if(G===-1)return{content:_,messageRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let q=j[X];if(/^\s*-\s+/.test(q)){let Q=q.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(Q)Z.push(Q[1])}else if(!q.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let Y=j.slice(0,G),L=j.slice(X);return{content:[...Y,...L].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:Z}}function xz(_){if(!_)return{content:_,attachmentRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let q=0;q<j.length;q+=1)if(j[q].trim()==="Attachments:"&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){G=q;break}if(G===-1)return{content:_,attachmentRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let q=j[X];if(/^\s*-\s+/.test(q)){let Q=q.replace(/^\s*-\s+/,"").trim(),V=Q.match(/^attachment:(\d+)(?:\s*\((.+)\))?$/i);if(V)Z.push({id:V[1],label:(V[2]||"").trim()||`attachment:${V[1]}`,raw:Q})}else if(!q.trim())break;else break}if(Z.length===0)return{content:_,attachmentRefs:[]};let Y=j.slice(0,G),L=j.slice(X);return{content:[...Y,...L].join(`
`).replace(/\n{3,}/g,`

`).trim(),attachmentRefs:Z}}function IL(_){let $=yz(_||""),j=Mz($||""),G=wz(j.content||""),Z=Tz(G.content||""),X=xz(Z.content||"");return{text:X.content||"",fileRefs:j.fileRefs,folderRefs:G.folderRefs,messageRefs:Z.messageRefs,attachmentRefs:X.attachmentRefs}}function Iz(_){let $=IL(_),j=$.attachmentRefs.length>0?`Attachments:
${$.attachmentRefs.map((Z)=>`- ${Z.raw}`).join(`
`)}`:"";return{content:[String($.text||"").trim(),j].filter(Boolean).join(`

`).trim(),fileRefs:[...$.fileRefs],folderRefs:[...$.folderRefs],messageRefs:[...$.messageRefs],attachmentRefs:[...$.attachmentRefs]}}function Cz(_){let{queuedItem:$,buildDraft:j=Iz,onRemoveQueuedFollowup:G,setSubmitError:Z,setSubmitNotice:X,setMediaFiles:Y,onSetFileRefs:L,onSetFolderRefs:K,onSetMessageRefs:q,setContent:Q,textareaRef:V,resizeTextarea:B=()=>{},scheduleTimeout:N=(M,J=0)=>setTimeout(M,J),scheduleRaf:U=(M)=>requestAnimationFrame(M),logger:D=console}=_||{};if(!$)return!1;let E=j($?.content||""),H=E.content;return D?.info?.("[compose-box] Returning queued item to editor",{text:H?.slice(0,80),fileRefs:E.fileRefs?.length,folderRefs:E.folderRefs?.length,messageRefs:E.messageRefs?.length}),Z?.(null),X?.(null),Y?.([]),L?.(E.fileRefs),K?.(E.folderRefs),q?.(E.messageRefs),Q?.(H),U(()=>{let M=V?.current;if(!M)return;if(M.value=H,typeof M.dispatchEvent==="function")M.dispatchEvent(new Event("input",{bubbles:!0}));B();let J=H.length;M.selectionStart=J,M.selectionEnd=J,M.focus()}),N(()=>{try{G?.($)}catch(M){D?.warn?.("[compose-box] Failed to remove returned queued follow-up.",M)}},0),!0}function T9({items:_=[],onInjectQueuedFollowup:$,onRemoveQueuedFollowup:j,onMoveQueuedFollowup:G,onReturnQueuedFollowup:Z,onOpenFilePill:X}){if(!Array.isArray(_)||_.length===0)return null;return F`
        <div class="compose-queue-stack">
            ${_.map((Y,L)=>{let K=typeof Y?.content==="string"?Y.content:"",q=IL(K);if(!q.text.trim()&&q.fileRefs.length===0&&q.folderRefs.length===0&&q.messageRefs.length===0&&q.attachmentRefs.length===0)return null;let Q=L>0,V=L<_.length-1,B=!0;return F`
                    <div class="compose-queue-stack-item" data-testid="queue-item" role="listitem">
                        <div class="compose-queue-stack-content" title=${K}>
                            ${q.text.trim()&&F`<div class="compose-queue-stack-text">${q.text}</div>`}
                            ${(q.messageRefs.length>0||q.fileRefs.length>0||q.folderRefs.length>0||q.attachmentRefs.length>0)&&F`
                                <div class="compose-queue-stack-refs">
                                    ${q.messageRefs.map((N)=>F`
                                        <${L1}
                                            key=${"queue-msg-"+N}
                                            prefix="compose"
                                            label=${"msg:"+N}
                                            title=${"Message reference: "+N}
                                            icon="message"
                                        />
                                    `)}
                                    ${q.fileRefs.map((N)=>{let U=N.split("/").pop()||N;return F`
                                            <${L1}
                                                key=${"queue-file-"+N}
                                                prefix="compose"
                                                label=${U}
                                                title=${N}
                                                onClick=${()=>X?.(N)}
                                            />
                                        `})}
                                    ${q.folderRefs.map((N)=>{let U=N.split("/").pop()||N;return F`
                                            <${L1}
                                                key=${"queue-folder-"+N}
                                                prefix="compose"
                                                label=${U}
                                                title=${N}
                                                icon="folder"
                                                onClick=${()=>X?.(N)}
                                            />
                                        `})}
                                    ${q.attachmentRefs.map((N)=>F`
                                        <${L1}
                                            key=${"queue-attachment-"+N.id}
                                            prefix="compose"
                                            label=${N.label}
                                            title=${N.raw}
                                        />
                                    `)}
                                </div>
                            `}
                        </div>
                        <div class="compose-queue-stack-actions" role="group" aria-label="Queued follow-up controls">
                            ${_.length>1&&F`
                                <button
                                    class="compose-queue-stack-move-btn"
                                    data-action="move-up"
                                    type="button"
                                    title="Move up"
                                    aria-label="Move up in queue"
                                    disabled=${!Q}
                                    onClick=${()=>Q&&G?.(L,L-1)}
                                >
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="18 15 12 9 6 15"></polyline>
                                    </svg>
                                </button>
                                <button
                                    class="compose-queue-stack-move-btn"
                                    data-action="move-down"
                                    type="button"
                                    title="Move down"
                                    aria-label="Move down in queue"
                                    disabled=${!V}
                                    onClick=${()=>V&&G?.(L,L+1)}
                                >
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </button>
                            `}
                            ${B&&F`
                                <button
                                    class="compose-queue-stack-move-btn queue-edit"
                                    data-action="edit"
                                    type="button"
                                    title="Edit in compose"
                                    aria-label="Return queued message to editor"
                                    onClick=${(N)=>{N.stopPropagation(),Z?.(Y)}}
                                >
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                    </svg>
                                </button>
                            `}
                            <button
                                class="compose-queue-stack-steer-btn"
                                type="button"
                                title="Inject queued follow-up as steer"
                                aria-label="Inject queued follow-up as steer"
                                onClick=${()=>$?.(Y)}
                            >
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M4 20h12a2 2 0 0 0 2-2V8" />
                                    <polyline points="14 12 18 8 22 12" />
                                </svg>
                                <span>Steer</span>
                            </button>
                            <button
                                class="compose-queue-stack-close-btn queue-remove"
                                data-action="remove"
                                type="button"
                                title="Cancel queued message"
                                aria-label="Cancel queued message"
                                onClick=${()=>j?.(Y)}
                            >
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </button>
                        </div>
                    </div>
                `})}
        </div>
    `}function CL({onPost:_,onFocus:$,searchMode:j,searchScope:G="current",onSearch:Z,onSearchScopeChange:X,onEnterSearch:Y,onExitSearch:L,fileRefs:K=[],onRemoveFileRef:q,onClearFileRefs:Q,folderRefs:V=[],onRemoveFolderRef:B,onClearFolderRefs:N,messageRefs:U=[],onRemoveMessageRef:D,onClearMessageRefs:E,activeModel:H=null,agentModelsPayload:M=null,modelUsage:J=null,thinkingLevel:O=null,supportsThinking:T=!1,contextUsage:I=null,onContextCompact:A,notificationsEnabled:k=!1,notificationPermission:z="default",onToggleNotifications:W,onModelChange:y,onModelStateChange:x,activeEditorPath:P=null,onAttachEditorFile:S,onOpenFilePill:v,followupQueueItems:l=[],onInjectQueuedFollowup:h,onRemoveQueuedFollowup:r,onMoveQueuedFollowup:b,onSubmitIntercept:e,onMessageResponse:z0,isAgentActive:K0=!1,activeChatAgents:q0=[],currentChatJid:X0="web:default",connectionStatus:N0="connected",stateAccessFailed:_0=!1,onSetFileRefs:Z0,onSetFolderRefs:B0,onSetMessageRefs:W0,onSubmitError:d,onSwitchChat:j0,onRenameSession:A0,isRenameSessionInProgress:f0=!1,onCreateSession:b0,onCreateRootSession:c0,onDeleteSession:X_,onPurgeArchivedSession:l0,onRestoreSession:__,showQueueStack:P0=!0,statusNotice:p0=null,extensionWorkingState:R0=null,prefillRequest:d0=null}){let[r0,U_]=C(""),[o0,h0]=C(""),[y0,V_]=C(!1),[s0,O_]=C(!1),[E0,S0]=C("or"),[I0,a0]=C([]),[A_,Q_]=C(!1),[D_,E_]=C([]),[y_,$0]=C(0),[O0,D0]=C(!1),v0=g(null),[m0,s]=C([]),[o,t]=C(0),[Y0,L0]=C(!1),[k0,t0]=C(!1),[g0,U0]=C(!1),[w0,j_]=C(!1),[u0,G_]=C([]),[q_,W_]=C(0),[i0,p_]=C(0),[w_,i]=C(!1),[J0,Y_]=C(!1),[N_,h_]=C(0),[B1,u_]=C(null),[J1,C_]=C(null),[M_,A1]=C(()=>y9()),[z_,k_]=C({kind:"idle",title:"",detail:""}),[F1,v_]=C(()=>Date.now()),[r_,s_]=C(0),H_=g(null),x1=g(null),U1=g(null),g1=g(null),k1=g(null),e1=g(null),b4=g(null),A$=g(null),a_=g({value:"",updatedAt:0}),m_=g(null),y1=g(""),H1=g(""),_1=g(""),k$=g(""),y$=g(!1),_$=g(!1),T_=g(!1),q1=g(0),M$=g(!1),v4=200,$$=Kz(X0),m4=(w)=>{let m=new Set,p=[];for(let Q0 of w||[]){if(typeof Q0!=="string")continue;let C0=Q0.trim();if(!C0||m.has(C0))continue;m.add(C0),p.push(C0)}return p},c4=(w=$$)=>{let m=W1(w);if(!m)return[];try{let p=JSON.parse(m);if(!Array.isArray(p))return[];return m4(p)}catch{return[]}},w$=(w,m=$$)=>{K_(m,JSON.stringify(w))},T$=g(c4($$)),b1=g(-1),v1=g(""),l4=g("");u(()=>{T$.current=c4($$),b1.current=-1,v1.current=""},[$$]),u(()=>{if(!j)return;fetch("/agent/settings-data").then((w)=>w.json()).then((w)=>{if(w?.searchMatchMode)S0(w.searchMatchMode)}).catch(()=>{})},[j]),u(()=>{let w=!1;return fetch(`/agent/commands?chat_jid=${encodeURIComponent(X0||"web:default")}`).then((p)=>p.ok?p.json():null).then((p)=>{if(w||!p?.commands)return;v0.current=p.commands.map((Q0)=>({name:Q0.name,description:Q0.description||""}))}).catch((p)=>{console.debug("[compose] failed to fetch dynamic commands",p)}),()=>{w=!0}},[X0]),u(()=>{let w=qz(d0,l4.current,j);if(!w.shouldApply)return;l4.current=w.nextToken,u_(null),U_(w.text),H0(w.text),n_(w.text),requestAnimationFrame(()=>{x0();let m=H_.current;if(!m)return;try{m.focus({preventScroll:!0})}catch{m.focus()}let p=w.text.length;m.setSelectionRange?.(p,p)})},[d0,j]),u(()=>{A1(y9())},[]);let K1=r0.trim()||I0.length>0||K.length>0||V.length>0||U.length>0,R_=z_.kind!=="idle",h4=z_.kind==="requesting_permission"||z_.kind==="listening",I1=!j&&Boolean(M_?.showButton),x$=z_.kind==="requesting_permission"||z_.kind==="listening",n4=x$?"Stop voice input":M_?.title||"Voice input",u5=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),g5=typeof window<"u"&&typeof Notification<"u",Z4=typeof window<"u"?Boolean(window.isSecureContext):!1,p4=g5&&Z4&&z!=="denied",r4=z==="granted"&&k,V1=W$(p0),C$=P2(p0),X4=typeof p0?.detail==="string"&&p0.detail.trim()?p0.detail.trim():"",Y4=V1?E6(p0,F1):null,m1=Ez(R0,r_),E1=R0?.indicator&&typeof R0.indicator==="object"?R0.indicator:null,b5=r4?"Disable notifications":"Enable notifications",L4=I0.length>0||K.length>0||V.length>0||U.length>0,j$=A9(_0?N0:"connected"),t_=j$.label,f$=j$.title,d4=Bz(K0,K1,V1),G$=Uz(K0,V1),b6=(Array.isArray(q0)?q0:[]).filter((w)=>!w?.archived_at),g_=(()=>{for(let w of Array.isArray(q0)?q0:[]){let m=typeof w?.chat_jid==="string"?w.chat_jid.trim():"";if(m&&m===X0)return w}return null})(),r8=Boolean(g_&&g_.chat_jid===(g_.root_chat_jid||g_.chat_jid)),d8=Boolean(r8&&(g_?.chat_jid||X0)==="web:default"),C1=(()=>{let w=typeof g_?.parent_branch_id==="string"?g_.parent_branch_id.trim():"",m=typeof g_?.branch_id==="string"?g_.branch_id.trim():"";if(!g_||!w||!m||g_.archived_at)return null;if((Array.isArray(q0)?q0:[]).filter((C0)=>{let F_=typeof C0?.parent_branch_id==="string"?C0.parent_branch_id.trim():"";return F_&&F_===m}).length>0)return null;return(Array.isArray(q0)?q0:[]).find((C0)=>{let F_=typeof C0?.branch_id==="string"?C0.branch_id.trim():"";return F_&&F_===w&&!C0?.archived_at})||null})(),q4=G0(()=>Vz(q0,X0),[q0,X0]),P$=q4.length>0,R$=P$&&typeof j0==="function",S$=P$&&typeof __==="function",i4=Boolean(f0||M$.current),Z$=!j&&typeof A0==="function"&&!i4,X$=!j&&typeof b0==="function",K4=!j&&typeof c0==="function",V4=!j&&!K0&&!J0&&Boolean(C1?.chat_jid),Y$=!j&&typeof X_==="function"&&!d8,v6=!j&&typeof l0==="function",L$=!j&&(R$||S$||Z$||X$||K4||V4||Y$||v6),m6=Az(H,M),v5=m6.showPicker,m5=m6.label,c5=T&&O?` (${O})`:"",i8=c5.trim()?`${O}`:"",R=kz(H,M),c=typeof J?.hint_short==="string"?J.hint_short.trim():"",n=[i8||null,R?.label||null,c||null].filter(Boolean).join(" • "),a=[H?`Current model: ${m5}${c5}`:null,R?.title||null,J?.plan?`Plan: ${J.plan}`:null,c||null,J?.primary?.reset_description||null,J?.secondary?.reset_description||null].filter(Boolean),F0=k0?"Switching model…":a.join(" • ")||(v5?"Select a model (tap to open model picker)":`Current model: ${m5}${c5} (tap to open model picker)`),V0=!j&&(v5||I&&I.percent!=null),M0=(w)=>{if(!w||typeof w!=="object")return;let m=w.model??w.current;if(typeof x==="function")x({...w,model:m??null,thinking_level:w.thinking_level??null,thinking_level_label:w.thinking_level_label??null,supports_thinking:w.supports_thinking,provider_usage:w.provider_usage??null});if(m&&typeof y==="function")y(m)},x0=(w)=>{let m=w||H_.current;if(!m)return;m.style.height="auto",m.style.height=`${m.scrollHeight}px`,m.style.overflowY="hidden"},H0=(w)=>{if(!w.startsWith("/")||w.includes(`
`)){D0(!1),E_([]);return}let m=w.toLowerCase().split(" ")[0];if(m.length<1){D0(!1),E_([]);return}let Q0=(v0.current||Lz).filter((C0)=>C0.name.startsWith(m)||C0.name.replace(/-/g,"").startsWith(m.replace(/-/g,"")));if(Q0.length>0&&!(Q0.length===1&&Q0[0].name===m))L0(!1),s([]),E_(Q0),$0(0),D0(!0);else D0(!1),E_([])},e0=(w)=>{let m=r0,p=m.indexOf(" "),Q0=p>=0?m.slice(p):"",C0=w.name+Q0;U_(C0),D0(!1),E_([]),requestAnimationFrame(()=>{let F_=H_.current;if(!F_)return;let i_=C0.length;F_.selectionStart=i_,F_.selectionEnd=i_,F_.focus()})},n_=(w)=>{if(z9(w,{searchMode:j,showSessionSwitcherButton:L$})){L0(!1),s([]);return}if(D9(w)==null){L0(!1),s([]);return}let m=FL(b6,w,{currentChatJid:X0});if(m.length>0&&!(m.length===1&&W9(m[0].agent_name).trim().toLowerCase()===String(w||"").trim().toLowerCase()))D0(!1),E_([]),s(m),t(0),L0(!0);else L0(!1),s([])},$1=(w)=>{let m=W9(w?.agent_name);if(!m)return;U_(m),L0(!1),s([]),requestAnimationFrame(()=>{let p=H_.current;if(!p)return;let Q0=m.length;p.selectionStart=Q0,p.selectionEnd=Q0,p.focus()})},q$=()=>{if(j||!R$&&!S$&&!Z$&&!X$&&!Y$)return!1;return a_.current={value:"",updatedAt:0},U0(!1),D0(!1),E_([]),L0(!1),s([]),j_(!0),!0},Pj=(w)=>{if(w?.preventDefault?.(),w?.stopPropagation?.(),j||!R$&&!S$&&!Z$&&!X$&&!Y$)return;if(w0){a_.current={value:"",updatedAt:0},j_(!1);return}q$()},Rj=(w)=>{let m=typeof w==="string"?w.trim():"";if(j_(!1),!m||m===X0){requestAnimationFrame(()=>H_.current?.focus());return}j0?.(m)},Sj=async(w)=>{let m=typeof w==="string"?w.trim():"";if(j_(!1),!m||typeof __!=="function"){requestAnimationFrame(()=>H_.current?.focus());return}try{await __(m)}catch(p){console.warn("Failed to restore session:",p),requestAnimationFrame(()=>H_.current?.focus())}},d_=G0(()=>{let w=[];for(let m of q4){let p=Boolean(m?.archived_at),Q0=typeof m?.agent_name==="string"?m.agent_name.trim():"",C0=typeof m?.chat_jid==="string"?m.chat_jid.trim():"";if(!Q0||!C0)continue;w.push({type:"session",key:`session:${C0}`,label:`@${Q0} — ${C0}${m?.is_active?" active":""}${p?" archived":""}`,chat:m,disabled:p?!S$:!R$})}if(X$)w.push({type:"action",key:"action:new",label:"New branch",action:"new",disabled:!1});if(K4)w.push({type:"action",key:"action:new-root",label:"New root session…",action:"new-root",disabled:!1});if(C1?.chat_jid)w.push({type:"action",key:"action:rollup",label:"Merge current w/ parent",action:"rollup",disabled:!V4});if(Z$)w.push({type:"action",key:"action:rename",label:"Rename current session",action:"rename",disabled:i4});if(Y$)w.push({type:"action",key:"action:delete",label:"Delete current session",action:"delete",disabled:!1});return w},[q4,S$,R$,X$,K4,C1,V4,Z$,Y$,i4]),uj=async(w)=>{if(w?.preventDefault)w.preventDefault();if(w?.stopPropagation)w.stopPropagation();if(typeof A0!=="function"||f0||M$.current)return;M$.current=!0,j_(!1);try{await A0()}catch(m){console.warn("Failed to rename session:",m)}finally{M$.current=!1}requestAnimationFrame(()=>H_.current?.focus())},gj=async()=>{if(typeof b0!=="function")return;j_(!1);try{await b0()}catch(w){console.warn("Failed to create session:",w)}requestAnimationFrame(()=>H_.current?.focus())},bj=async()=>{if(typeof c0!=="function")return;j_(!1);let w=typeof window<"u"?window.prompt("New root session handle (for example: ops)"):"",m=String(w||"").trim();if(!m){requestAnimationFrame(()=>H_.current?.focus());return}try{await c0(m)}catch(p){console.warn("Failed to create root session:",p)}requestAnimationFrame(()=>H_.current?.focus())},vj=async()=>{let w=typeof C1?.chat_jid==="string"?C1.chat_jid.trim():"";if(!w||J0||K0)return;j_(!1),u_(null),C_(null),Y_(!0);try{let m=await z1("default","/rollup",null,[],null,X0);z0?.(m),_?.(m);let p=m?.command;if(p?.status==="error"){let C0=p?.message||"Failed to merge current session with parent.";u_(C0),d?.(C0);return}let Q0=typeof p?.rolled_up_to==="string"&&p.rolled_up_to.trim()?p.rolled_up_to.trim():w;j0?.(Q0)}catch(m){let p=m?.message||"Failed to merge current session with parent.";u_(p),d?.(p),console.warn("Failed to merge session with parent:",m)}finally{Y_(!1)}requestAnimationFrame(()=>H_.current?.focus())},mj=async()=>{if(typeof X_!=="function")return;j_(!1);try{await X_(X0)}catch(w){console.warn("Failed to delete session:",w)}requestAnimationFrame(()=>H_.current?.focus())},u$=(w)=>{if(j)h0(w);else U_(w),H0(w),n_(w);requestAnimationFrame(()=>x0())},CB=(w)=>{let m=j?o0:r0,p=m&&!m.endsWith(`
`)?`
`:"",Q0=`${m}${p}${w}`.trimStart();u$(Q0)},o8=f(()=>{requestAnimationFrame(()=>{let w=H_.current;if(!w)return;try{w.focus({preventScroll:!0})}catch{w.focus()}})},[]),c1=f(()=>{k_({kind:"idle",title:"",detail:""})},[]),s8=f((w=H1.current,m=_1.current)=>{if(j)return;u$(zL(y1.current,w,m))},[j]),l1=f(()=>{y$.current=!0;let w=m_.current;if(!w){c1();return}try{w.stop()}catch{m_.current=null,c1()}},[c1]),a8=f(()=>{if(u_(null),C_(null),m_.current){l1();return}if(!M_?.showButton)return;if(M_.mode==="fallback"){o8(),k_({kind:"guidance",title:M_.title||"Use keyboard dictation",detail:M_.detail||"Use your keyboard dictation mic for voice input here."});return}if(!M_?.canStart||!M_?.recognitionCtor){k_({kind:"error",title:M_?.title||"Voice input unavailable",detail:M_?.detail||"This browser does not expose native speech recognition in this context."});return}try{let w=new M_.recognitionCtor;if(m_.current=w,y1.current=String(r0||""),H1.current="",_1.current="",k$.current="",y$.current=!1,w.lang=typeof navigator<"u"&&navigator.language?navigator.language:"en-US",w.interimResults=!0,w.continuous=!1,"maxAlternatives"in w)w.maxAlternatives=1;w.onstart=()=>{k_({kind:"listening",title:"Listening…",detail:"Speak now. Tap the mic again to stop."})},w.onresult=(m)=>{let{finalText:p,interimText:Q0}=OL(m?.results,m?.resultIndex||0);if(p)H1.current=`${H1.current} ${p}`.trim();_1.current=Q0,s8(),k_({kind:"listening",title:"Listening…",detail:Q0?`Heard: ${Q0}`:"Speak now. Tap the mic again to stop."})},w.onerror=(m)=>{let p=String(m?.error||"").trim();if(k$.current=p,m_.current=null,_1.current="",p==="aborted"){c1();return}k_({kind:"error",title:"Voice input failed",detail:M9(p,M_)})},w.onend=()=>{let m=k$.current,p=y$.current,Q0=Boolean(H1.current.trim()||_1.current.trim());if(m_.current=null,y$.current=!1,k$.current="",_1.current.trim())H1.current=`${H1.current} ${_1.current}`.trim(),_1.current="";if(Q0)s8(H1.current,"");if(m&&m!=="aborted")return;if(!Q0&&!p){k_({kind:"error",title:"No speech detected",detail:M9("no-speech",M_)});return}c1()},k_({kind:"requesting_permission",title:"Starting voice input…",detail:"Allow microphone access if the browser asks."}),o8(),w.start()}catch(w){m_.current=null,k_({kind:"error",title:"Voice input failed",detail:w?.message||"Could not start native browser speech recognition."})}},[s8,c1,r0,o8,M_,l1]),fB=(w)=>{let m=w?.command?.model_label;if(m)return m;let p=w?.command?.message;if(typeof p==="string"){let Q0=p.match(/•\s+([^\n]+?)\s+\(current\)/);if(Q0?.[1])return Q0[1].trim()}return null},cj=async(w)=>{if(j||k0)return;u_(null),C_(null),t0(!0);try{let m=await z1("default",w,null,[],null,X0),p=fB(m);return M0({model:p??H??null,thinking_level:m?.command?.thinking_level,thinking_level_label:m?.command?.thinking_level_label,supports_thinking:m?.command?.supports_thinking}),await k9(M4,X0,M0),C_(AL(w,m)),_?.(m),!0}catch(m){return console.error("Failed to switch model:",m),alert("Failed to switch model: "+m.message),!1}finally{t0(!1)}},PB=(w)=>{if(w.pointerType==="mouse")return;let m=H_.current?.value??(j?o0:r0);if(!kL(w,m,{searchMode:j,speechButtonVisible:I1,speechButtonActive:x$,canStartSpeech:Boolean(M_?.canStart&&M_?.recognitionCtor)}))return;w.preventDefault(),_$.current=!0,T_.current=!0,a8()},t8=(w)=>{if(!_$.current)return;if(w?.preventDefault?.(),_$.current=!1,m_.current)l1()},RB=(w)=>{if(T_.current){T_.current=!1,w.preventDefault();return}a8()},SB=async()=>{await cj("/cycle-model")},e8=async(w)=>{let m=typeof w==="string"?w:typeof w?.label==="string"?w.label:"";if(!m||k0)return;let p=yL(w,I);if(p.blocked){u_(null),C_(p.note);return}if(await cj(`/model ${m}`))U0(!1)},uB=(w)=>{if(!w||w.disabled)return;if(w.type==="session"){let m=w.chat;if(m?.archived_at)Sj(m.chat_jid);else Rj(m.chat_jid);return}if(w.type==="action"){if(w.action==="new"){gj();return}if(w.action==="new-root"){bj();return}if(w.action==="rollup"){vj();return}if(w.action==="rename"){uj();return}if(w.action==="delete")mj()}},gB=(w)=>{w.preventDefault(),w.stopPropagation(),a_.current={value:"",updatedAt:0},j_(!1),U0((m)=>!m)},bB=async()=>{if(j)return;A?.(),await o4("/compact",null,{includeMedia:!1,includeFileRefs:!1,includeFolderRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},vB=(w)=>{if(w==="queue"||w==="steer"||w==="auto")return w;return K0?"queue":void 0},o4=async(w,m,p={})=>{let Q0=typeof w==="string"?w:r0;if(/^\/settings\s*$/i.test(Q0.trim())){U_(""),requestAnimationFrame(()=>x0()),o1();return}if(/^\/help\s*$/i.test(Q0.trim())){U_(""),requestAnimationFrame(()=>x0()),o1({section:"keyboard"});return}let{includeMedia:C0=!0,includeFileRefs:F_=!0,includeFolderRefs:i_=!0,includeMessageRefs:c_=!0,clearAfterSubmit:f1=!0,recordHistory:M1=!0}=p||{},lj=typeof w==="string"?w:w&&typeof w?.target?.value==="string"?w.target.value:r0,hj=typeof lj==="string"?lj:"";if(!hj.trim()&&(C0?I0.length===0:!0)&&(F_?K.length===0:!0)&&(i_?V.length===0:!0)&&(c_?U.length===0:!0))return;if(m_.current)l1();c1(),D0(!1),E_([]),L0(!1),s([]),j_(!1),u_(null),C_(null);let c6=C0?[...I0]:[],l6=F_?[...K]:[],h6=i_?[...V]:[],n6=c_?[...U]:[],Q4=hj.trim();if(M1&&Q4){let N4=T$.current,Q1=m4(N4.filter(($3)=>$3!==Q4));if(Q1.push(Q4),Q1.length>200)Q1.splice(0,Q1.length-200);T$.current=Q1,w$(Q1),b1.current=-1,v1.current=""}let _F=()=>{if(C0)a0([...c6]);if(F_)Z0?.(l6);if(i_)B0?.(h6);if(c_)W0?.(n6);U_(Q4),requestAnimationFrame(()=>x0())};if(f1)U_(""),a0([]),Q?.(),N?.(),E?.();(async()=>{try{let N4=await e?.({content:Q4,submitMode:m,fileRefs:l6,folderRefs:h6,messageRefs:n6,mediaFiles:c6});if(N4){_?.(N4);return}let Q1=[];for(let K$ of c6){let p6=await E7(K$);Q1.push(p6.id)}let $3=l6.length?`Files:
${l6.map((K$)=>`- ${K$}`).join(`
`)}`:"",$F=h6.length?`Folders:
${h6.map((K$)=>`- ${K$}`).join(`
`)}`:"",jF=n6.length?`Referenced messages:
${n6.map((K$)=>`- message:${K$}`).join(`
`)}`:"",GF=Q1.length?`Attachments:
${Q1.map((K$,p6)=>{let XF=c6[p6]?.name||`attachment-${p6+1}`;return`- attachment:${K$} (${XF})`}).join(`
`)}`:"",ZF=[Q4,$3,$F,jF,GF].filter(Boolean).join(`

`),g$=await z1("default",ZF,null,Q1,vB(m),X0);if(z0?.(g$),g$?.command)M0({model:g$.command.model_label??H??null,thinking_level:g$.command.thinking_level,thinking_level_label:g$.command.thinking_level_label,supports_thinking:g$.command.supports_thinking}),await k9(M4,X0,M0);C_(AL(Q4,g$)),_?.(g$)}catch(N4){if(f1)_F();let Q1=N4?.message||"Failed to send message.";u_(Q1),d?.(Q1),console.error("Failed to post:",N4)}})()},mB=(w)=>{h?.(w)},cB=f((w)=>{Cz({queuedItem:w,onRemoveQueuedFollowup:r,setSubmitError:u_,setSubmitNotice:C_,setMediaFiles:a0,onSetFileRefs:Z0,onSetFolderRefs:B0,onSetMessageRefs:W0,setContent:U_,textareaRef:H_,resizeTextarea:x0})},[r,Z0,B0,W0,x0]),l5=f((w)=>{if(j||!g0&&!w0||w?.isComposing)return!1;let m=()=>{w.preventDefault?.(),w.stopPropagation?.()},p=()=>{a_.current={value:"",updatedAt:0}};if(w.key==="Escape"){if(m(),p(),g0)U0(!1);if(w0)j_(!1);return!0}if(g0){if(w.key==="ArrowDown"){if(m(),p(),u0.length>0)W_((Q0)=>(Q0+1)%u0.length);return!0}if(w.key==="ArrowUp"){if(m(),p(),u0.length>0)W_((Q0)=>(Q0-1+u0.length)%u0.length);return!0}if((w.key==="Enter"||w.key==="Tab")&&u0.length>0)return m(),p(),e8(u0[Math.max(0,Math.min(q_,u0.length-1))]),!0;if(J6(w)&&u0.length>0){m();let Q0=H9(a_.current,w.key);a_.current=Q0;let C0=E9(u0,Q0.value,q_,(F_)=>Jz(F_));if(C0>=0)W_(C0);return!0}}if(w0){if(w.key==="ArrowDown"){if(m(),p(),d_.length>0)p_((Q0)=>(Q0+1)%d_.length);return!0}if(w.key==="ArrowUp"){if(m(),p(),d_.length>0)p_((Q0)=>(Q0-1+d_.length)%d_.length);return!0}if((w.key==="Enter"||w.key==="Tab")&&d_.length>0)return m(),p(),uB(d_[Math.max(0,Math.min(i0,d_.length-1))]),!0;if(J6(w)&&d_.length>0){m();let Q0=H9(a_.current,w.key);a_.current=Q0;let C0=E9(d_,Q0.value,i0,(F_)=>F_.label);if(C0>=0)p_(C0);return!0}}return!1},[j,g0,w0,u0,q_,d_,i0,e8]),lB=(w)=>{if(w.isComposing)return;if(j&&w.key==="Escape"){w.preventDefault(),h0(""),L?.();return}if(l5(w))return;let m=H_.current?.value??(j?o0:r0);if(kL(w,m,{searchMode:j,speechButtonVisible:I1,speechButtonActive:x$,canStartSpeech:Boolean(M_?.canStart&&M_?.recognitionCtor)})){w.preventDefault(),_$.current=!0,a8();return}if(HL(w,m,{searchMode:j,showSessionSwitcherButton:L$})){w.preventDefault(),q$();return}if(Y0&&m0.length>0){let p=H_.current?.value??(j?o0:r0);if(!String(p||"").match(/^@([a-zA-Z0-9_-]*)$/))L0(!1),s([]);else{if(w.key==="ArrowDown"){w.preventDefault(),t((Q0)=>(Q0+1)%m0.length);return}if(w.key==="ArrowUp"){w.preventDefault(),t((Q0)=>(Q0-1+m0.length)%m0.length);return}if(w.key==="Tab"||w.key==="Enter"){w.preventDefault(),$1(m0[o]);return}if(w.key==="Escape"){w.preventDefault(),L0(!1),s([]);return}}}if(O0&&D_.length>0){let p=H_.current?.value??(j?o0:r0);if(!String(p||"").startsWith("/"))D0(!1),E_([]);else{if(w.key==="ArrowDown"){w.preventDefault(),$0((Q0)=>(Q0+1)%D_.length);return}if(w.key==="ArrowUp"){w.preventDefault(),$0((Q0)=>(Q0-1+D_.length)%D_.length);return}if(w.key==="Tab"){w.preventDefault(),e0(D_[y_]);return}if(w.key==="Enter"&&!w.shiftKey){if(!m.includes(" ")){w.preventDefault();let C0=D_[y_];D0(!1),E_([]),o4(C0.name);return}}if(w.key==="Escape"){w.preventDefault(),D0(!1),E_([]);return}}}if(!j&&(w.key==="ArrowUp"||w.key==="ArrowDown")&&!w.metaKey&&!w.ctrlKey&&!w.altKey&&!w.shiftKey){let p=H_.current;if(!p)return;let Q0=p.value||"",C0=p.selectionStart===0&&p.selectionEnd===0,F_=p.selectionStart===Q0.length&&p.selectionEnd===Q0.length;if(w.key==="ArrowUp"&&C0||w.key==="ArrowDown"&&F_){let i_=T$.current;if(!i_.length)return;w.preventDefault();let c_=b1.current;if(w.key==="ArrowUp"){if(c_===-1)v1.current=Q0,c_=i_.length-1;else if(c_>0)c_-=1;b1.current=c_,u$(i_[c_]||"")}else{if(c_===-1)return;if(c_<i_.length-1)c_+=1,b1.current=c_,u$(i_[c_]||"");else b1.current=-1,u$(v1.current||""),v1.current=""}requestAnimationFrame(()=>{let f1=H_.current;if(!f1)return;let M1=f1.value.length;f1.selectionStart=M1,f1.selectionEnd=M1});return}}if(w.key==="Enter"&&!w.shiftKey&&(w.ctrlKey||w.metaKey)){if(w.preventDefault(),j){if(m.trim())Z?.(m.trim(),G,{images:y0,attachments:s0})}else o4(m,"steer");return}if(w.key==="Enter"&&!w.shiftKey){if(w.preventDefault(),j){if(m.trim())Z?.(m.trim(),G,{images:y0,attachments:s0})}else o4(m);return}if(w.key==="Escape"){if(g0||w0||O0||Y0)return;w.preventDefault(),H_.current?.blur()}},hB=(w)=>{if(Fz(w,_$.current)){if(w.preventDefault(),_$.current=!1,m_.current)l1()}},_3=(w)=>{let m=Array.from(w||[]).filter((p)=>p instanceof File&&!String(p.name||"").startsWith(".DS_Store"));if(!m.length)return;a0((p)=>[...p,...m]),u_(null)},nB=(w)=>{_3(w.target.files),w.target.value=""},pB=(w)=>{if(j)return;w.preventDefault(),w.stopPropagation(),q1.current+=1,Q_(!0)},rB=(w)=>{if(j)return;if(w.preventDefault(),w.stopPropagation(),q1.current=Math.max(0,q1.current-1),q1.current===0)Q_(!1)},dB=(w)=>{if(j)return;if(w.preventDefault(),w.stopPropagation(),w.dataTransfer)w.dataTransfer.dropEffect="copy";Q_(!0)},iB=(w)=>{if(j)return;w.preventDefault(),w.stopPropagation(),q1.current=0,Q_(!1),_3(w.dataTransfer?.files||[])},oB=(w)=>{if(j)return;let m=w.clipboardData?.items;if(!m||!m.length)return;let p=[];for(let Q0 of m){if(Q0.kind!=="file")continue;let C0=Q0.getAsFile?.();if(C0)p.push(C0)}if(p.length>0)w.preventDefault(),_3(p)},sB=(w)=>{a0((m)=>m.filter((p,Q0)=>Q0!==w))},aB=()=>{u_(null),a0([]),Q?.(),N?.(),E?.()},tB=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((w)=>{let{latitude:m,longitude:p,accuracy:Q0}=w.coords,C0=`${m.toFixed(5)}, ${p.toFixed(5)}`,F_=Number.isFinite(Q0)?` ±${Math.round(Q0)}m`:"",i_=`https://maps.google.com/?q=${m},${p}`,c_=`Location: ${C0}${F_} ${i_}`;CB(c_)},(w)=>{let m=w?.message||"Unable to retrieve location.";alert(`Location error: ${m}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};u(()=>{if(!g0)return;a_.current={value:"",updatedAt:0},i(!0),M4(X0).then((w)=>{G_(TL(w)),M0(w)}).catch((w)=>{console.warn("Failed to load model list:",w),G_([])}).finally(()=>{i(!1)})},[g0,H]),u(()=>{if(j)U0(!1),j_(!1),D0(!1),E_([]),L0(!1),s([])},[j]),u(()=>{if(w0&&!L$)j_(!1)},[w0,L$]),u(()=>{if(!g0)return;let w=u0.findIndex((m)=>m?.label===H);W_(w>=0?w:0)},[g0,u0,H]),u(()=>{if(!w0)return;p_(Nz(d_,X0)),a_.current={value:"",updatedAt:0}},[w0,X0,d_]),u(()=>{if(!g0)return;let w=(m)=>{let p=g1.current,Q0=k1.current,C0=m.target;if(p&&p.contains(C0))return;if(Q0&&Q0.contains(C0))return;U0(!1)};return document.addEventListener("pointerdown",w),()=>document.removeEventListener("pointerdown",w)},[g0]),u(()=>{if(!w0)return;let w=(m)=>{let p=e1.current,Q0=b4.current,C0=m.target;if(p&&p.contains(C0))return;if(Q0&&Q0.contains(C0))return;j_(!1)};return document.addEventListener("pointerdown",w),()=>document.removeEventListener("pointerdown",w)},[w0]),u(()=>{if(j||!g0&&!w0)return;let w=(m)=>{l5(m)};return document.addEventListener("keydown",w,!0),()=>document.removeEventListener("keydown",w,!0)},[j,g0,w0,l5]),u(()=>{if(!g0)return;let w=g1.current;w?.focus?.(),w?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[g0,q_,u0]),u(()=>{if(!w0)return;let w=e1.current;w?.focus?.(),w?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[w0,i0,d_.length]),u(()=>{if(!Y0||!U1.current)return;U1.current.querySelector?.(".slash-item.active")?.scrollIntoView?.({block:"nearest"})},[Y0,o,m0.length]),u(()=>{if(!O0||!x1.current)return;x1.current.querySelector?.(".slash-item.active")?.scrollIntoView?.({block:"nearest"})},[O0,y_,D_.length]),u(()=>{let w=(p)=>{if(!p||typeof p!=="object")return!1;if(p.isContentEditable)return!0;if(typeof p.closest!=="function")return!1;return Boolean(p.closest('input, textarea, select, [contenteditable="true"], .compose-box, .compose-model-popup, .compose-session-popup, .settings-dialog, .workspace-sidebar, .editor-pane-container, .dock-panel, .timeline-menu-dropdown, .rename-branch-overlay, .agent-request-modal, .attachment-preview-modal, .vnc-pane-shell, .kanban-plugin, .mindmap-editor, .timeline-quick-actions'))},m=(p)=>{if(p.ctrlKey||p.metaKey||p.altKey)return;let Q0=H_.current;if(!Q0)return;let C0=document.activeElement===Q0;if(p.key==="Escape"&&!C0&&!w(p.target)){p.preventDefault(),Q0.focus();return}if(p.key==="/"&&!C0&&!w(p.target))p.preventDefault(),u$("/"),requestAnimationFrame(()=>{Q0.focus(),Q0.selectionStart=1,Q0.selectionEnd=1,H0("/")})};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[]),u(()=>{let w=()=>{let F_=A$.current?.clientWidth||0;h_((i_)=>i_===F_?i_:F_)};w();let m=A$.current,p=0,Q0=()=>{if(p)cancelAnimationFrame(p);p=requestAnimationFrame(()=>{p=0,w()})},C0=null;if(m&&typeof ResizeObserver<"u")C0=new ResizeObserver(()=>Q0()),C0.observe(m);if(typeof window<"u")window.addEventListener("resize",Q0);return()=>{if(p)cancelAnimationFrame(p);if(C0?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",Q0)}},[j,H,g_?.agent_name,L$,I?.percent]);let eB=(w)=>{let m=w.target.value;if(m_.current&&w?.isTrusted)l1();if(u_(null),C_(null),z_.kind==="guidance"||z_.kind==="error")c1();if(w0)j_(!1);if(x0(w.target),z9(m,{searchMode:j,showSessionSwitcherButton:L$})){u$(""),requestAnimationFrame(()=>{let p=H_.current;if(!p)return;p.value="",p.selectionStart=0,p.selectionEnd=0,p.focus()}),q$();return}u$(m)};return u(()=>{requestAnimationFrame(()=>x0())},[r0,o0,j]),u(()=>{if(!j)return;if(m_.current)l1();return},[j,l1]),u(()=>{if(m_.current)l1();c1()},[X0,c1,l1]),u(()=>{return()=>{if(!m_.current)return;try{m_.current.stop()}catch(w){console.debug("[compose] failed to stop speech recognition during cleanup",w)}m_.current=null}},[]),u(()=>{if(!V1)return;v_(Date.now());let w=setInterval(()=>v_(Date.now()),1000);return()=>clearInterval(w)},[V1,p0?.started_at,p0?.startedAt]),u(()=>{if(s_(0),E1?.mode!=="custom"||!Array.isArray(E1.frames)||E1.frames.length<=1)return;let w=typeof E1.intervalMs==="number"&&Number.isFinite(E1.intervalMs)&&E1.intervalMs>0?E1.intervalMs:120,m=setInterval(()=>{s_((p)=>(p+1)%E1.frames.length)},w);return()=>clearInterval(m)},[E1]),u(()=>{if(j)return;n_(r0)},[b6,X0,r0,j]),F`
        <div class="compose-box" data-testid="compose-box">
            ${R_&&F`
                <div class=${`compose-inline-status compose-speech-status compose-speech-status-${z_.kind}`} role="status" aria-live="polite">
                    <div class="compose-inline-status-row">
                        <span class=${_8({pulsing:h4})} aria-hidden="true"></span>
                        <span class="compose-inline-status-title">${z_.title}</span>
                    </div>
                    ${z_.detail&&F`<div class="compose-inline-status-detail">${z_.detail}</div>`}
                </div>
            `}
            ${P0&&!j&&F`
                <${T9}
                    items=${l}
                    onInjectQueuedFollowup=${mB}
                    onRemoveQueuedFollowup=${r}
                    onMoveQueuedFollowup=${b}
                    onReturnQueuedFollowup=${cB}
                    onOpenFilePill=${v}
                />
            `}
            ${m1.visible&&F`
                <div class="compose-inline-status extension-working" role="status" aria-live="polite">
                    <div class="compose-inline-status-row">
                        ${m1.indicatorText?F`<span class="compose-inline-status-glyph" aria-hidden="true">${m1.indicatorText}</span>`:m1.animateDot?F`<span class=${_8({pulsing:!0})} aria-hidden="true"></span>`:null}
                        <span class="compose-inline-status-title">${m1.title}</span>
                    </div>
                </div>
            `}
            ${p0&&!V1&&F`
                <div
                    class="compose-inline-status"
                    role="status"
                    aria-live="polite"
                    title=${X4||""}
                >
                    <div class="compose-inline-status-row">
                        <span class=${_8({pulsing:!1})} aria-hidden="true"></span>
                        <span class="compose-inline-status-title">${C$}</span>
                        ${Y4&&F`<span class="compose-inline-status-elapsed">${Y4}</span>`}
                    </div>
                    ${X4&&F`<div class="compose-inline-status-detail">${X4}</div>`}
                </div>
            `}
            ${J1&&F`
                <div class="compose-inline-status compose-command-notice" role="status" aria-live="polite">
                    <div class="compose-inline-status-detail compose-command-notice-text" dangerouslySetInnerHTML=${{__html:Z1(J1)}}></div>
                </div>
            `}
            <div
                class=${`compose-input-wrapper${A_?" drag-active":""}`}
                onDragEnter=${pB}
                onDragOver=${dB}
                onDragLeave=${rB}
                onDrop=${iB}
            >
                ${L$&&F`
                    <div
                        ref=${b4}
                        class="compose-session-trigger-group compose-session-trigger-top"
                    >
                        <button
                            type="button"
                            class=${`compose-session-trigger compose-session-trigger-pill${w0?" active":""}`}
                            data-testid="session-switcher"
                            onClick=${Pj}
                            title=${g_?.chat_jid||X0}
                            aria-label=${g_?.agent_name?`Manage sessions for @${g_.agent_name}`:"Manage Sessions/Agents"}
                            aria-expanded=${w0?"true":"false"}
                        >
                            <span class="compose-current-agent-label active">${g_?.agent_name?`@${g_.agent_name}`:"Sessions"}</span>
                        </button>
                    </div>
                `}
                <div class="compose-input-main">
                    ${L4&&F`
                        <div class="compose-file-refs">
                            ${U.map((w)=>{return F`
                                    <${L1}
                                        key=${"msg-"+w}
                                        prefix="compose"
                                        label=${"msg:"+w}
                                        title=${"Message reference: "+w}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>D?.(w)}
                                    />
                                `})}
                            ${K.map((w)=>{let m=w.split("/").pop()||w;return F`
                                    <${L1}
                                        prefix="compose"
                                        label=${m}
                                        title=${w}
                                        onClick=${()=>v?.(w)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>q?.(w)}
                                    />
                                `})}
                            ${V.map((w)=>{let m=w.split("/").pop()||w;return F`
                                    <${L1}
                                        prefix="compose"
                                        label=${m}
                                        title=${w}
                                        icon="folder"
                                        onClick=${()=>v?.(w)}
                                        removeTitle="Remove folder hint"
                                        onRemove=${()=>B?.(w)}
                                    />
                                `})}
                            ${I0.map((w,m)=>{let p=w?.name||`attachment-${m+1}`;return F`
                                    <${L1}
                                        key=${p+m}
                                        prefix="compose"
                                        label=${p}
                                        title=${p}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>sB(m)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${aB}
                                title="Clear all attachments and references"
                                aria-label="Clear all attachments and references"
                            >
                                Clear all
                            </button>
                        </div>
                    `}
                    <textarea
                        ref=${H_}
                        data-testid="compose-input"
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?o0:r0}
                        onInput=${eB}
                        onKeyDown=${lB}
                        onKeyUp=${hB}
                        onPaste=${oB}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${Y0&&m0.length>0&&F`
                        <div class="slash-autocomplete" ref=${U1}>
                            ${m0.map((w,m)=>F`
                                <div
                                    key=${w.chat_jid||w.agent_name}
                                    class=${`slash-item${m===o?" active":""}`}
                                    onMouseDown=${(p)=>{p.preventDefault(),$1(w)}}
                                    onMouseEnter=${()=>t(m)}
                                >
                                    <span class="slash-name">@${w.agent_name}</span>
                                    <span class="slash-desc">${w.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${O0&&D_.length>0&&F`
                        <div class="slash-autocomplete" ref=${x1}>
                            ${D_.map((w,m)=>F`
                                <div
                                    key=${w.name}
                                    class=${`slash-item${m===y_?" active":""}`}
                                    onMouseDown=${(p)=>{p.preventDefault(),e0(w)}}
                                    onMouseEnter=${()=>$0(m)}
                                >
                                    <span class="slash-name">${w.name}</span>
                                    <span class="slash-desc">${w.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${g0&&!j&&F`
                        <div class="compose-model-popup" ref=${g1} tabIndex="-1" onKeyDown=${l5}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${w_&&F`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!w_&&u0.length===0&&F`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!w_&&u0.map((w,m)=>{let p=typeof w?.label==="string"?w.label:"",Q0=w9(w?.contextWindow),C0=w?.name||null,F_=yL(w,I);return F`
                                        <button
                                            key=${p}
                                            type="button"
                                            role="menuitem"
                                            class=${`compose-model-popup-item compose-model-popup-model-item${q_===m?" active":""}${H===p?" current-model":""}${F_.blocked?" context-blocked":""}`}
                                            onClick=${()=>{e8(w)}}
                                            disabled=${k0||F_.blocked}
                                            title=${[p,C0,Q0,F_.title].filter(Boolean).join(" • ")}
                                        >
                                            <span class="compose-model-popup-model-stack">
                                                <span class="compose-model-popup-model-label">${zz(p,w?.contextWindow)}${C0?F` <span class="compose-model-popup-model-subtitle">${C0}</span>`:""}</span>
                                                ${F_.blocked&&F`<span class="compose-model-popup-model-note">${F_.note}</span>`}
                                            </span>
                                        </button>
                                    `})}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{SB()}}
                                    disabled=${k0}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${w0&&!j&&F`
                        <div class="compose-model-popup" data-testid="session-popup" ref=${e1} tabIndex="-1" onKeyDown=${l5}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${!P$&&F`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${P$&&q4.map((w,m)=>{let p=Boolean(w.archived_at),Q0=w.chat_jid===(w.root_chat_jid||w.chat_jid),C0=!Q0&&!w.is_active&&!p&&typeof X_==="function",F_=p&&v6,i_=t2(w,{currentChatJid:X0});return F`
                                        <div key=${w.chat_jid} class=${`compose-model-popup-item-row${p?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item session-item${p?" archived":""}${i0===m?" active":""}`}
                                                data-testid="session-item"
                                                onClick=${()=>{if(p){Sj(w.chat_jid);return}Rj(w.chat_jid)}}
                                                disabled=${p?!S$:!R$}
                                                title=${p?`Restore archived ${`@${w.agent_name}`}`:`Switch to ${`@${w.agent_name}`}`}
                                            >
                                                <span style=${Qz(w)?"font-weight:700":""}>${i_}</span>
                                            </button>
                                            <button
                                                type="button"
                                                class="compose-model-popup-item-popout"
                                                title=${`Open @${w.agent_name} in new window`}
                                                aria-label=${`Open @${w.agent_name} in new window`}
                                                onClick=${(c_)=>{c_.stopPropagation(),j_(!1);let f1=new URL(window.location.href);f1.searchParams.set("chat_jid",w.chat_jid),f1.searchParams.set("chat_only","1");let M1=document.createElement("a");M1.href=f1.toString(),M1.target="_blank",M1.rel="noopener",M1.style.display="none",document.body.appendChild(M1),M1.click(),M1.remove()}}
                                            >
                                                <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M6 2h8v8"/>
                                                    <path d="M14 2 7 9"/>
                                                    <path d="M12 9v5H2V4h5"/>
                                                </svg>
                                            </button>
                                            ${(C0||F_)&&F`
                                                <button
                                                    type="button"
                                                    class="compose-model-popup-item-delete"
                                                    title=${F_?Q0?"Permanently delete this archived session":"Permanently delete this archived branch":"Delete this branch"}
                                                    aria-label=${F_?Q0?`Permanently delete archived session @${w.agent_name}`:`Permanently delete archived branch @${w.agent_name}`:`Delete @${w.agent_name}`}
                                                    onClick=${(c_)=>{if(c_.stopPropagation(),j_(!1),F_){l0?.(w.chat_jid);return}X_(w.chat_jid)}}
                                                >
                                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                                        <line x1="18" y1="6" x2="6" y2="18" />
                                                        <line x1="6" y1="6" x2="18" y2="18" />
                                                    </svg>
                                                </button>
                                            `}
                                        </div>
                                    `})}
                            </div>
                            ${(X$||K4||Z$||Y$)&&F`
                                <div class="compose-model-popup-actions">
                                    ${X$&&F`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn primary${d_.findIndex((w)=>w.key==="action:new")===i0?" active":""}`}
                                            onClick=${()=>{gj()}}
                                            title="Create a new branch from this chat"
                                        >
                                            New branch
                                        </button>
                                    `}
                                    ${K4&&F`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${d_.findIndex((w)=>w.key==="action:new-root")===i0?" active":""}`}
                                            onClick=${()=>{bj()}}
                                            title="Create a clean root session such as web:ops"
                                        >
                                            New root…
                                        </button>
                                    `}
                                    ${C1?.chat_jid&&F`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${d_.findIndex((w)=>w.key==="action:rollup")===i0?" active":""}`}
                                            onClick=${()=>{vj()}}
                                            title=${V4?`Merge this branch into ${C1.agent_name?`@${C1.agent_name}`:C1.chat_jid}`:"This branch cannot be merged while active or while it has children"}
                                            disabled=${!V4}
                                        >
                                            Merge current w/ parent
                                        </button>
                                    `}
                                    ${Z$&&F`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${d_.findIndex((w)=>w.key==="action:rename")===i0?" active":""}`}
                                            onClick=${(w)=>{uj(w)}}
                                            title="Rename the current session"
                                            disabled=${i4}
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${Y$&&F`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn danger${d_.findIndex((w)=>w.key==="action:delete")===i0?" active":""}`}
                                            onClick=${()=>{mj()}}
                                            title="Delete (prune) current agent/session branch"
                                        >
                                            Delete current…
                                        </button>
                                    `}
                                </div>
                            `}
                        </div>
                    `}
                </div>
                <div class="compose-footer" ref=${A$}>
                    ${j$.show&&F`
                        <span class="compose-connection-status connection-status ${j$.statusClass}" title=${f$}>
                            ${t_}
                        </span>
                    `}
                    ${V0&&F`
                    <div class="compose-meta-row">
                        ${v5&&F`
                            <div class="compose-model-meta">
                                <button
                                    ref=${k1}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${F0}
                                    aria-label="Open model picker"
                                    onClick=${gB}
                                    disabled=${k0}
                                >
                                    ${k0?"Switching…":m5}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!k0&&n&&F`
                                        <span class="compose-model-usage-hint" title=${F0}>
                                            ${n}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                        ${!j&&I&&I.percent!=null&&F`
                            <${Dz}
                                usage=${I}
                                onCompact=${bB}
                                compactionLabel=${V1?Y4||"0:00":""}
                                compactionTitle=${V1?C$||"Smart compaction":""}
                            />
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${j&&F`
                        <label class="compose-search-scope-wrap" title="Search scope">
                            <span class="compose-search-scope-label">Scope</span>
                            <select
                                class="compose-search-scope-select"
                                value=${G}
                                onChange=${(w)=>X?.(w.currentTarget.value)}
                            >
                                <option value="current">Current</option>
                                <option value="root">Branch family</option>
                                <option value="all">All chats</option>
                            </select>
                        </label>
                        <label class="compose-search-filter-wrap" title="Only show messages with images">
                            <input type="checkbox" checked=${y0} onChange=${()=>V_((w)=>!w)} />
                            <span class="compose-search-filter-label">Images</span>
                        </label>
                        <label class="compose-search-filter-wrap" title="Only show messages with attachments">
                            <input type="checkbox" checked=${s0} onChange=${()=>O_((w)=>!w)} />
                            <span class="compose-search-filter-label">Attachments</span>
                        </label>
                        <button
                            class=${`compose-search-match-toggle ${E0==="and"?"active":""}`}
                            onClick=${()=>{let w=E0==="or"?"and":"or";S0(w),fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({searchMatchMode:w})}).catch((m)=>{})}}
                            title=${E0==="or"?"Any keyword (OR) — click for all keywords (AND)":"All keywords (AND) — click for any keyword (OR)"}
                            type="button"
                        >
                            ${E0==="or"?"OR":"AND"}
                        </button>
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${j?L:Y}
                        title=${j?"Close search":"Search"}
                    >
                        ${j?F`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 6L6 18M6 6l12 12"/>
                            </svg>
                        `:F`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"/>
                                <path d="M21 21l-4.35-4.35"/>
                            </svg>
                        `}
                    </button>
                    ${u5&&!j&&F`
                        <button
                            class="icon-btn location-btn"
                            onClick=${tB}
                            title="Share location"
                            type="button"
                            disabled=${!1}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 2a14 14 0 0 1 0 20a14 14 0 0 1 0-20" />
                                <path d="M2 12h20" />
                            </svg>
                        </button>
                    `}
                    ${I1&&F`
                        <button
                            class=${`icon-btn voice-input-btn${x$?" active":""}${M_.mode==="fallback"?" fallback":""}`}
                            onClick=${RB}
                            onPointerDown=${PB}
                            onPointerUp=${t8}
                            onPointerCancel=${t8}
                            onPointerLeave=${t8}
                            title=${n4}
                            aria-label=${n4}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3z" />
                                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                                <path d="M12 19v3" />
                            </svg>
                        </button>
                    `}
                    ${p4&&!j&&F`
                        <button
                            class=${`icon-btn notification-btn${r4?" active":""}`}
                            onClick=${W}
                            title=${b5}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&F`
                        ${P&&S&&F`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${S}
                                title=${`Attach open file: ${P}`}
                                type="button"
                                disabled=${K.includes(P)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach file">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" multiple hidden onChange=${nB} />
                        </label>
                    `}
                    ${!j&&F`
                        <div class="compose-send-stack">
                                <button 
                                    class=${d4.className}
                                    data-testid="send-button"
                                    type="button"
                                    onClick=${()=>{o4()}}
                                    disabled=${d4.disabled}
                                    title=${d4.title}
                                    aria-label=${d4.ariaLabel}
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                                </button>
                                ${G$&&F`
                                    <button 
                                        class=${G$.className}
                                        data-testid="stop-button"
                                        type="button"
                                        onClick=${()=>{if(Hz(G$.mode))o4("/abort","steer",{clearAfterSubmit:!1,includeMedia:!1,includeFileRefs:!1,includeFolderRefs:!1,includeMessageRefs:!1,recordHistory:!1})}}
                                        disabled=${G$.disabled}
                                        title=${G$.title}
                                        aria-label=${G$.ariaLabel}
                                    >
                                        ${G$.mode==="compacting"?F`
                                                <span class="compose-submit-spinner" aria-hidden="true">
                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                                        <circle class="compose-submit-spinner-ring" cx="12" cy="12" r="10.5" stroke-width="2.25" stroke-linecap="round"></circle>
                                                        <rect class="compose-submit-spinner-stop" x="6" y="6" width="12" height="12" rx="0" fill="currentColor"></rect>
                                                    </svg>
                                                </span>
                                            `:F`<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="4" width="16" height="16" rx="2.5"/></svg>`}
                                    </button>
                                `}
                        </div>
                    `}
                </div>
            </div>
        </div>
        </div>
    `}T0();function fL({kind:_="hidden",onSetupProvider:$,onDismiss:j}){if(_==="hidden")return null;let G=_==="provider-missing",Z=G?"Instance needs setup":"Instance is configured",X=G?"This instance is not yet configured. Open Settings and set up AI providers/models to start sending requests.":"This instance looks configured. Review or update provider and model settings in Settings.";return F`
    <section class=${`oobe-panel oobe-panel-${_}`} aria-label="Getting started">
      <div class="oobe-panel-copy">
        <div class="oobe-panel-eyebrow">Getting started</div>
        <h2 class="oobe-panel-title">${Z}</h2>
        <p class="oobe-panel-body">${X}</p>
      </div>
      <div class="oobe-panel-actions">
        <button type="button" class="oobe-panel-btn oobe-panel-btn-primary" onClick=${()=>$?.()}>
          Open Settings
        </button>
        <button type="button" class="oobe-panel-btn" onClick=${()=>j?.()}>
          ${G?"Dismiss":"Done"}
        </button>
      </div>
    </section>
  `}T0();function PL(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function RL(_){return String(_||"").trim()||"web:default"}function SL(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function uL(_){if(!_)return!1;return _.status!=="running"}function gL(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function bL({session:_,onClose:$,onInject:j,onRetry:G}){let Z=g(null),X=g(null),Y=_?.thinking?$6(_.thinking):"",L=_?.answer?Z1(_.answer,null):"";if(u(()=>{if(Z.current&&Y)E$(Z.current).catch((D)=>{console.debug("[btw-panel] Mermaid rendering failed for BTW thinking content.",D)})},[Y]),u(()=>{if(X.current&&L)E$(X.current).catch((D)=>{console.debug("[btw-panel] Mermaid rendering failed for BTW answer content.",D)})},[L]),!_)return null;let K=_.status==="running",q=Boolean(String(_.answer||"").trim()),Q=Boolean(String(_.thinking||"").trim()),V=SL(_),B=uL(_),N=!K&&q,U=K?"Thinking…":_.status==="error"?"Error":"Done";return F`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">Question</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${U}</span>
                </div>
                <button class="btw-panel-close" onClick=${()=>$?.()} title="Close BTW" aria-label="Close BTW">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>

            ${_.question&&F`<div class="btw-block btw-question">${_.question}</div>`}
            ${_.error&&F`<div class="btw-block btw-error">${_.error}</div>`}
            ${Q&&F`
                <details class="btw-block btw-thinking" open=${K?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${Z}
                        dangerouslySetInnerHTML=${{__html:Y}}
                    ></div>
                </details>
            `}
            ${V&&F`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${X}
                        dangerouslySetInnerHTML=${{__html:L}}
                    ></div>
                </div>
            `}

            ${B&&F`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&F`
                            <button class="btw-btn btw-btn-secondary" onClick=${()=>G?.()}>
                                Retry
                            </button>
                        `}
                    </div>
                    <div class="btw-panel-footer-right">
                        <button class="btw-btn btw-btn-primary" onClick=${()=>j?.()} disabled=${!N}>
                            Inject into chat
                        </button>
                    </div>
                </div>
            `}
        </section>
    `}T0();function x9(_,$){try{if(_)_.name=$;return!0}catch(j){return!1}}function I9(_,$){try{return _?.contentWindow?.postMessage?.($,"*"),!0}catch(j){return!1}}function fz(_){let $=_?.artifact||{},j=$.kind||_?.kind||null;if(j!=="html"&&j!=="svg"&&j!=="session_tree")return null;if(j==="html"){let Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"";return Z?{kind:j,html:Z}:null}if(j==="svg"){let Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"";return Z?{kind:j,svg:Z}:null}let G=$.tree&&typeof $.tree==="object"?$.tree:_?.tree&&typeof _.tree==="object"?_.tree:null;return{kind:j,tree:G}}function Pz(_){let $=_?.artifact&&typeof _.artifact==="object"?_.artifact:{},j=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",G=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:typeof _?.w==="string"?_.w:typeof _?.content==="string"?_.content:"",Z=$.tree&&typeof $.tree==="object"?$.tree:_?.tree&&typeof _.tree==="object"?_.tree:null,X=$.kind||_?.kind||null,Y=X==="session_tree"?"session_tree":X==="svg"||j?"svg":"html";if(Y==="session_tree")return{kind:Y,tree:Z};if(Y==="svg")return j?{kind:Y,svg:j}:{kind:Y};return G?{kind:Y,html:G}:{kind:Y}}function t$(_){return typeof _==="number"&&Number.isFinite(_)?_:null}function Z_(_){return typeof _==="string"&&_.trim()?_.trim():null}function mL(_,$=!1){let G=(Array.isArray(_)?_:$?["interactive"]:[]).filter((Z)=>typeof Z==="string").map((Z)=>Z.trim().toLowerCase()).filter(Boolean);return Array.from(new Set(G))}var cL="__PICLAW_WIDGET_HOST__:";function vL(_){return JSON.stringify(_).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function C9(_,$){if(!_||_.type!=="generated_widget")return null;let j=fz(_);if(!j)return null;return{title:_.title||_.name||"Generated widget",subtitle:typeof _.subtitle==="string"?_.subtitle:"",description:_.description||_.subtitle||"",originPostId:Number.isFinite($?.id)?$.id:null,originChatJid:typeof $?.chat_jid==="string"?$.chat_jid:null,widgetId:_.widget_id||_.id||null,artifact:j,capabilities:mL(_.capabilities,_.interactive===!0),source:"timeline",status:"final"}}function lL(_){if(!_||typeof _!=="object")return null;let $=Pz(_),j=Z_(_?.widget_id)||Z_(_?.widgetId)||Z_(_?.tool_call_id)||Z_(_?.toolCallId),G=Z_(_?.tool_call_id)||Z_(_?.toolCallId),Z=Z_(_?.turn_id)||Z_(_?.turnId),X=Z_(_?.title)||Z_(_?.name)||"Generated widget",Y=Z_(_?.subtitle)||"",L=Z_(_?.description)||Y,K=Z_(_?.status),q=K==="loading"||K==="streaming"||K==="final"||K==="error"?K:"streaming";return{title:X,subtitle:Y,description:L,originPostId:t$(_?.origin_post_id)??t$(_?.originPostId),originChatJid:Z_(_?.origin_chat_jid)||Z_(_?.originChatJid)||Z_(_?.chat_jid)||null,widgetId:j,artifact:$,capabilities:mL(_?.capabilities,!0),source:"live",status:q,turnId:Z,toolCallId:G,width:t$(_?.width),height:t$(_?.height),error:Z_(_?.error)}}function hL(_){return C9(_,null)!==null}function O1(_){let $=Z_(_?.toolCallId)||Z_(_?.tool_call_id);if($)return $;let j=Z_(_?.widgetId)||Z_(_?.widget_id);if(j)return j;let G=t$(_?.originPostId)??t$(_?.origin_post_id);if(G!==null)return`post:${G}`;return null}function nL(_){let j=(_?.artifact||{}).kind||_?.kind||null,Z=(Array.isArray(_?.capabilities)?_.capabilities:[]).some((X)=>typeof X==="string"&&X.trim().toLowerCase()==="interactive");return j==="html"&&(_?.source==="live"||Z)}function pL(_){return nL(_)?"allow-downloads allow-scripts allow-same-origin":"allow-downloads"}function G8(_){return{title:Z_(_?.title)||"Generated widget",widgetId:Z_(_?.widgetId)||Z_(_?.widget_id),toolCallId:Z_(_?.toolCallId)||Z_(_?.tool_call_id),turnId:Z_(_?.turnId)||Z_(_?.turn_id),capabilities:Array.isArray(_?.capabilities)?_.capabilities:[],source:_?.source==="live"?"live":"timeline",status:Z_(_?.status)||"final"}}function Z8(_){return{...G8(_),subtitle:Z_(_?.subtitle)||"",description:Z_(_?.description)||"",error:Z_(_?.error)||null,width:t$(_?.width),height:t$(_?.height),runtimeState:_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null}}function X8(_){return`${cL}${JSON.stringify(Z8(_))}`}function rL(_){if(typeof _==="string"&&_.trim())return _.trim();if(!_||typeof _!=="object")return null;let $=Z_(_.text)||Z_(_.content)||Z_(_.message)||Z_(_.prompt)||Z_(_.value);if($)return $;let j=_.data;if(typeof j==="string"&&j.trim())return j.trim();if(j&&typeof j==="object"){let G=Z_(j.text)||Z_(j.content)||Z_(j.message)||Z_(j.prompt)||Z_(j.value);if(G)return G}return null}function dL(_){if(!_||typeof _!=="object")return!1;return _.close===!0||_.dismiss===!0||_.closeAfterSubmit===!0}function iL(_){let $=Z_(_?.status);if($==="loading"||$==="streaming")return"Widget is loading…";if($==="error")return Z_(_?.error)||"Widget failed to load.";if((_?.artifact?.kind||_?.kind)==="session_tree")return"Session tree widget is unavailable.";return"Widget artifact is missing or unsupported."}function Rz(_){let $=G8(_);return`<script>
(function () {
  const meta = ${vL($)};
  function post(kind, payload) {
    try {
      window.parent.postMessage({
        __piclawGeneratedWidget: true,
        kind,
        widgetId: meta.widgetId || null,
        toolCallId: meta.toolCallId || null,
        turnId: meta.turnId || null,
        payload: payload || {}
      }, '*');
    } catch {
      /* expected: parent bridge may be unavailable while the iframe is unloading. */
    }
  }

  const windowNamePrefix = ${vL(cL)};
  let lastWindowName = null;
  let pendingHostEnvelope = null;
  let pendingHostEnvelopeFrame = 0;
  let lastDispatchedEnvelopeKey = null;

  function getEnvelopeKey(data) {
    try {
      return JSON.stringify([
        data?.type || null,
        data?.widgetId || null,
        data?.toolCallId || null,
        data?.turnId || null,
        data?.payload || null,
      ]);
    } catch {
      return null;
    }
  }

  function flushHostEnvelope() {
    pendingHostEnvelopeFrame = 0;
    const data = pendingHostEnvelope;
    pendingHostEnvelope = null;
    if (!data) return;

    window.piclawWidget.lastHostMessage = data;
    const nextPayload = data.payload || null;
    if (data.type === 'widget.init') {
      const previous = window.piclawWidget.hostState && typeof window.piclawWidget.hostState === 'object'
        ? window.piclawWidget.hostState
        : null;
      if (nextPayload && typeof nextPayload === 'object') {
        window.piclawWidget.hostState = {
          ...(previous || {}),
          ...nextPayload,
          ...(Object.prototype.hasOwnProperty.call(nextPayload, 'runtimeState')
            ? {}
            : { runtimeState: previous?.runtimeState ?? null }),
        };
      } else {
        window.piclawWidget.hostState = previous || null;
      }
    } else if (data.type === 'widget.update' || data.type === 'widget.complete' || data.type === 'widget.error') {
      window.piclawWidget.hostState = nextPayload;
    }

    const effectivePayload = window.piclawWidget.hostState ?? nextPayload ?? null;
    const detail = (effectivePayload === data.payload)
      ? data
      : { ...data, payload: effectivePayload };
    const envelopeKey = getEnvelopeKey(detail);
    if (envelopeKey && envelopeKey === lastDispatchedEnvelopeKey) return;
    lastDispatchedEnvelopeKey = envelopeKey;
    window.dispatchEvent(new CustomEvent('piclaw:widget-message', { detail }));
  }

  function scheduleHostEnvelope(data) {
    if (!data) return;
    pendingHostEnvelope = data;
    if (pendingHostEnvelopeFrame) return;
    const schedule = typeof requestAnimationFrame === 'function'
      ? requestAnimationFrame
      : (cb) => setTimeout(cb, 0);
    pendingHostEnvelopeFrame = schedule(flushHostEnvelope);
  }

  function readWindowNameState() {
    try {
      const raw = window.name || '';
      if (!raw || raw === lastWindowName || !raw.startsWith(windowNamePrefix)) return;
      lastWindowName = raw;
      const payload = JSON.parse(raw.slice(windowNamePrefix.length));
      scheduleHostEnvelope({
        __piclawGeneratedWidgetHost: true,
        type: 'widget.update',
        widgetId: meta.widgetId || null,
        toolCallId: meta.toolCallId || null,
        turnId: meta.turnId || null,
        payload,
      });
    } catch {
      /* expected: host window.name payload can be absent or mid-update while polling. */
    }
  }

  window.piclawWidget = {
    meta,
    lastHostMessage: null,
    hostState: null,
    ready(payload) { post('widget.ready', payload); },
    close(payload) { post('widget.close', payload); },
    requestRefresh(payload) { post('widget.request_refresh', payload); },
    submit(payload) { post('widget.submit', payload); },
  };

  window.addEventListener('message', function (event) {
    const data = event && event.data;
    if (!data || data.__piclawGeneratedWidgetHost !== true) return;
    if ((data.widgetId || null) !== (meta.widgetId || null)) return;
    scheduleHostEnvelope(data);
  });

  function announceReady() {
    readWindowNameState();
    post('widget.ready', { title: document.title || meta.title || 'Generated widget' });
  }

  setInterval(readWindowNameState, 250);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', announceReady, { once: true });
  } else {
    announceReady();
  }
})();
</script>`}function oL(_){let $=_?.artifact||{},j=$.kind||_?.kind||null,G=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"",Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",X=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",Y=j==="svg"?Z:G;if(!Y)return"";let L=nL(_),K=["default-src 'none'","img-src data: blob: https: http:","style-src 'unsafe-inline'","font-src 'self' data: https: http:","media-src data: blob: https: http:","connect-src 'none'","frame-src 'none'",L?"script-src 'unsafe-inline' 'self'":"script-src 'none'","object-src 'none'","base-uri 'none'","form-action 'none'"].join("; "),q=j==="svg"?`<div class="widget-svg-shell">${Y}</div>`:Y,Q=L?Rz(_):"";return`<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta http-equiv="Content-Security-Policy" content="${K}" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${X.replace(/[<&>]/g,"")}</title>
<style>
:root { color-scheme: dark light; }
html, body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  background: #0f1117;
  color: #f5f7fb;
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
body {
  box-sizing: border-box;
}
.widget-svg-shell {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  box-sizing: border-box;
}
.widget-svg-shell svg {
  max-width: 100%;
  height: auto;
}
</style>
${Q}
</head>
<body>${q}</body>
</html>`}T0();function Sz(_){let $=new Map,j=[];for(let Y of _||[])$.set(Y.id,{...Y,children:[],depth:0});for(let Y of _||[]){let L=$.get(Y.id);if(!L)continue;let K=Y.parentId?$.get(Y.parentId):null;if(K)K.children.push(L);else j.push(L)}let G=new Set;for(let[,Y]of $){if(Y.role!=="assistant"||!Y.toolName)continue;if(Y.children.length!==1)continue;let L=Y.children[0];if(L.role!=="toolResult")continue;Y.resultDetail=L.detail||null,Y.resultLength=L.contentLength||0,Y.resultId=L.id,Y.merged=!0,Y.children=L.children;for(let K of Y.children)K.parentId=Y.id;G.add(L.id)}let Z=j.filter((Y)=>!G.has(Y.id)),X=[];for(let Y=Z.length-1;Y>=0;Y--)Z[Y].depth=0,X.push(Z[Y]);while(X.length>0){let Y=X.pop(),L=Y.children.length>1;for(let K=Y.children.length-1;K>=0;K--)Y.children[K].depth=L?Y.depth+1:Y.depth,X.push(Y.children[K])}return Z}function uz(_){let $=[],j=[];for(let G=_.length-1;G>=0;G--)j.push(_[G]);while(j.length>0){let G=j.pop();$.push(G);for(let Z=G.children.length-1;Z>=0;Z--)j.push(G.children[Z])}return $}function sL(_){if(!_||_<=0)return"";if(_<1000)return`${_}`;if(_<1e6)return`${(_/1000).toFixed(1)}k`;return`${(_/1e6).toFixed(1)}M`}function J5(_){if(!_||_<=0)return"";if(_<1000)return`${_} chars`;if(_<1e6)return`${(_/1000).toFixed(1)}k chars`;return`${(_/1e6).toFixed(1)}M chars`}function gz(_){let $=_.type;if($==="model_change")return{tag:"model",tagClass:"system",text:`${_.preview?.replace("[model ","").replace("]","")||""}`};if($==="thinking_level_change")return{tag:"thinking",tagClass:"system",text:_.preview?.replace("[thinking ","").replace("]","")||""};if($==="compaction")return{tag:"compaction",tagClass:"system",text:_.preview?.replace("[compaction: ","").replace("]","")||""};if($==="label")return{tag:"label",tagClass:"system",text:_.preview?.replace("[label ","").replace("]","")||""};if($==="session_info")return{tag:"session",tagClass:"system",text:_.preview?.replace("[session name ","").replace("]","")||""};if($==="branch_summary")return{tag:"summary",tagClass:"system",text:_.preview||""};if($!=="message")return{tag:$||"?",tagClass:"system",text:_.preview||""};let j=_.role||"message";if(_.merged&&_.toolName){let Z=(_.toolInput||"").split(`
`)[0],X=Z.length>120?Z.slice(0,119)+"…":Z;return{tag:_.toolName,tagClass:"tool",text:X||""}}if(j==="assistant"&&_.toolName){let Z=(_.toolInput||"").split(`
`)[0],X=Z.length>120?Z.slice(0,119)+"…":Z;return{tag:_.toolName,tagClass:"tool",text:X||"…"}}if(j==="toolResult"){let Z=(_.detail||"").split(`
`)[0],X=Z.length>120?Z.slice(0,119)+"…":Z;return{tag:`→ ${_.toolName||"result"}`,tagClass:"result",text:X}}if(j==="user"){let X=(_.previewText||_.detail||_.preview||"").replace(/^user:\s*"?/,"").replace(/"?\s*$/,"").split(`
`)[0];return{tag:"user",tagClass:"user",text:X.length>120?X.slice(0,119)+"…":X}}if(j==="assistant"){let X=(_.detail||_.preview||"").replace(/^assistant:\s*"?/,"").replace(/"?\s*$/,"").split(`
`)[0];return{tag:"assistant",tagClass:"assistant",text:X.length>120?X.slice(0,119)+"…":X}}return{tag:j,tagClass:"other",text:_.preview||""}}function bz(_,$=!1){let j=typeof _==="string"?_.trim():"";if(!j)return null;return{text:$?`/tree ${j} --summarize`:`/tree ${j}`,navigateTargetId:j,summarize:Boolean($)}}function aL(_){let $=typeof _==="string"?_.trim():"";if(!$.startsWith("/tree"))return null;let j=$.split(/\s+/).filter(Boolean);if(j[0]!=="/tree")return null;let G=null,Z=!1;for(let X=1;X<j.length;X++){let Y=j[X];if(Y==="--summarize"){Z=!0;continue}if(!G&&!Y.startsWith("--"))G=Y}return G?{targetId:G,summarize:Z}:null}function vz(_,$,j,G){let Z=Array.isArray(_)?_:[];if(Z.length===0)return null;let X=(L)=>typeof L==="string"&&Z.some((K)=>K?.id===L);if(X($))return $;if(X(j))return j;if(X(G))return G;let Y=Z.find((L)=>L?.active);if(Y?.id)return Y.id;return Z[0]?.id||null}function mz(_){if(!_||typeof _!=="object")return null;let $=typeof _.type==="string"?_.type:"",j=typeof _.preview==="string"?_.preview.trim():"",G=typeof _.error==="string"?_.error.trim():"",Z=aL(j),X=j||"tree command";if($==="submit_pending")return{tone:"pending",text:Z?`Sending ${X}`:"Sending tree command…",refreshDelays:[]};if($==="submit_sent")return{tone:"info",text:Z?`Running ${X}`:"Tree command sent.",refreshDelays:Z?[500,1500,3500,8000]:[]};if($==="submit_queued")return{tone:"info",text:Z?`Queued ${X}`:"Tree command queued.",refreshDelays:Z?[1200,3200,7000,12000]:[]};if($==="submit_failed")return{tone:"error",text:G?`Tree command failed: ${G}`:"Tree command failed.",refreshDelays:[]};if($==="refresh_building")return{tone:"pending",text:"Refreshing widget…",refreshDelays:[]};if($==="refresh_failed")return{tone:"error",text:G?`Refresh failed: ${G}`:"Refresh failed.",refreshDelays:[]};if($==="refresh_dashboard"||$==="refresh_ack")return{tone:"success",text:"Widget refreshed.",refreshDelays:[]};return null}function tL({widget:_,onWidgetEvent:$}){let j=_?.artifact?.tree&&typeof _.artifact.tree==="object"?_.artifact.tree:null,G=typeof _?.originChatJid==="string"&&_.originChatJid.trim()?_.originChatJid.trim():null,Z=_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null,X=Z?.lastHostUpdate&&typeof Z.lastHostUpdate==="object"?Z.lastHostUpdate:null,[Y,L]=C(()=>({loading:!j,error:null,data:j})),[K,q]=C(()=>j?.leafId||null),[Q,V]=C(""),B=g(null),N=g(null),U=g(j?.leafId||null),D=g(null),E=g(""),H=async()=>{L((k)=>({...k,loading:!0,error:null}));try{let k=G?`?chat_jid=${encodeURIComponent(G)}`:"",z=await fetch(`/agent/session-tree${k}`,{method:"GET",credentials:"same-origin",headers:{Accept:"application/json"}}),W=await z.json().catch(()=>({}));if(!z.ok)throw Error(W?.error||`HTTP ${z.status}`);L({loading:!1,error:null,data:W})}catch(k){L((z)=>({loading:!1,error:k?.message||"Failed to load tree.",data:z?.data||j||null}))}};D.current=H,u(()=>{H()},[G]);let M=G0(()=>{let k=Y.data;if(!k||!Array.isArray(k.nodes)||k.nodes.length===0)return[];return uz(k.flat?Sz(k.nodes):k.nodes)},[Y.data]);u(()=>{let k=vz(M,K,U.current,Y.data?.leafId||null);if(k!==K)q(k);if(U.current&&Y.data?.leafId===U.current)U.current=null},[M,K,Y.data?.leafId]);let J=G0(()=>{let k=(Q||"").trim().toLowerCase();if(!k)return M;return M.filter((z)=>{return[z.preview,z.toolInput,z.toolInputFull,z.detail,z.toolName,z.role,z.id,z.resultDetail,z.type,z.label].some((y)=>typeof y==="string"&&y.toLowerCase().includes(k))})},[M,Q]),O=G0(()=>J.find((k)=>k.id===K)||null,[J,K]),T=G0(()=>mz(X),[X?.type,X?.preview,X?.error,X?.submittedAt]);u(()=>{if(N.current)N.current.scrollIntoView({block:"center",behavior:"auto"})},[K,Y.data?.leafId,J.length]),u(()=>{let k=aL(X?.preview);if(k?.targetId)U.current=k.targetId;let z=T?.refreshDelays||[];if(!z.length)return;let W=[G||"",X?.type||"",X?.submittedAt||"",X?.preview||""].join("|");if(E.current===W)return;E.current=W;let y=z.map((x)=>setTimeout(()=>D.current?.(),x));return()=>y.forEach((x)=>clearTimeout(x))},[G,X?.type,X?.submittedAt,X?.preview,T?.refreshDelays]);let I=(k=!1)=>{let z=O?.id,W=bz(z,k);if(!W)return;U.current=W.navigateTargetId,$?.({kind:"widget.submit",payload:W},_)},A=T?.tone||"info";return F`
        <div class="session-tree-widget">
            <div class="session-tree-toolbar">
                <div class="session-tree-toolbar-left">
                    <button class="session-tree-btn" type="button" onClick=${()=>H()} disabled=${Y.loading}>${Y.loading?"Loading…":"Refresh"}</button>
                    <input ref=${B}
                        class="st-search-input" type="text" placeholder="Filter\u2026"
                        value=${Q}
                        onInput=${(k)=>V(k.currentTarget.value)}
                        onKeyDown=${(k)=>{if(k.key==="Escape")V(""),k.currentTarget.blur()}}
                    />
                    ${Q&&F`<span class="session-tree-meta">${J.length} match${J.length!==1?"es":""}</span>`}
                    ${Y.error&&F`<span class="session-tree-error-inline">${Y.error}</span>`}
                </div>
                <div class="session-tree-toolbar-right">
                    ${T?.text&&F`<span class=${`session-tree-host-update ${A}`}>${T.text}</span>`}
                    ${Y.data?.capped&&F`<span class="session-tree-meta">Showing ${Y.data?.nodes?.length||0} of ${Y.data?.total||0}</span>`}
                    ${G&&F`<span class="session-tree-meta">${G}</span>`}
                </div>
            </div>

            <div class="session-tree-content">
                <div class="session-tree-list" role="tree" aria-label="Session tree">
                    ${Y.loading&&J.length===0&&!Q&&F`<div class="session-tree-empty">Loading session tree\u2026</div>`}
                    ${!Y.loading&&J.length===0&&!Q&&F`<div class="session-tree-empty">Session tree is empty.</div>`}
                    ${!Y.loading&&J.length===0&&Q&&F`<div class="session-tree-empty">No entries match \u201c${Q}\u201d</div>`}
                    ${J.map((k)=>{let z=K===k.id,W=`st-row${k.active?" active":""}${z?" selected":""}`,y=(k.children||[]).length>1,x=gz(k);return F`
                            <button key=${k.id} ref=${k.active||z?N:null}
                                class=${W} type="button" role="treeitem" aria-selected=${z}
                                onClick=${()=>q(k.id)}>
                                <span class="st-indent" style=${`width:${(k.depth||0)*16+6}px`}></span>
                                <span class=${`st-dot${k.active?" active":y?" branch":""}`}></span>
                                <span class=${`st-tag ${x.tagClass}`}>${x.tag}</span>
                                <span class="st-text">${x.text}</span>
                                ${k.merged&&k.resultLength>0&&F`<span class="st-size">${sL(k.resultLength)}</span>`}
                                ${!k.merged&&k.contentLength>3000&&F`<span class="st-size">${sL(k.contentLength)}</span>`}
                                ${k.hasThinking&&F`<span class="st-badge thinking">\u{1F4AD}</span>`}
                                ${k.label&&F`<span class="st-label">${k.label}</span>`}
                                ${k.active&&F`<span class="st-active">\u25C0</span>`}
                            </button>
                        `})}
                </div>

                <aside class="session-tree-sidebar">
                    ${O?F`
                        <div class="st-side-section">
                            <div class="st-side-label">Entry</div>
                            <div class="st-side-mono">${O.id}${O.resultId?` → ${O.resultId}`:""}</div>
                        </div>
                        <div class="st-side-section">
                            <div class="st-side-label">Type</div>
                            <div class="st-side-value">${O.role||O.type||"entry"}${O.toolName?` → ${O.toolName}`:""}${O.merged?" (merged)":""}</div>
                        </div>
                        ${O.toolInputFull&&F`
                            <div class="st-side-section">
                                <div class="st-side-label">${O.toolName==="bash"?"Command":"Input"}</div>
                                <pre class="st-side-code">${O.toolInputFull}</pre>
                            </div>
                        `}
                        ${O.resultDetail&&F`
                            <div class="st-side-section">
                                <div class="st-side-label">Result${O.resultLength?` (${J5(O.resultLength)})`:""}</div>
                                <pre class="st-side-code">${O.resultDetail}</pre>
                            </div>
                        `}
                        ${O.detail&&!O.toolInput&&F`
                            <div class="st-side-section">
                                <div class="st-side-label">${O.role==="toolResult"?"Output":"Content"}${O.contentLength?` (${J5(O.contentLength)})`:""}</div>
                                <pre class="st-side-code">${O.detail}</pre>
                            </div>
                        `}
                        ${O.rawDetail&&F`
                            <div class="st-side-section">
                                <div class="st-side-label">Raw prompt${O.rawContentLength?` (${J5(O.rawContentLength)})`:""}</div>
                                <pre class="st-side-code">${O.rawDetail}</pre>
                            </div>
                        `}
                        ${O.timestamp&&F`
                            <div class="st-side-section">
                                <div class="st-side-label">Time</div>
                                <div class="st-side-value">${new Date(O.timestamp).toLocaleString()}</div>
                            </div>
                        `}
                        ${(O.contentLength>0||O.hasThinking)&&F`
                            <div class="st-side-section">
                                <div class="st-side-label">Size</div>
                                <div class="st-side-badges">
                                    ${O.contentLength>0&&F`<span class="st-pill">${J5(O.contentLength)} content</span>`}
                                    ${O.hasThinking&&F`<span class="st-pill thinking">${J5(O.thinkingLength)} thinking</span>`}
                                    ${O.merged&&O.resultLength>0&&F`<span class="st-pill">${J5(O.resultLength)} result</span>`}
                                </div>
                            </div>
                        `}
                        <div class="st-side-actions">
                            <button class="session-tree-btn primary" type="button" onClick=${()=>I(!1)}>Navigate here</button>
                            <button class="session-tree-btn" type="button" onClick=${()=>I(!0)}>Navigate + summarize</button>
                        </div>
                    `:F`<div class="session-tree-empty side">Select an entry to inspect.</div>`}
                </aside>
            </div>
        </div>
    `}function eL({widget:_,onClose:$,onWidgetEvent:j}){let G=g(null),Z=g(!1),X=G0(()=>oL(_),[_?.artifact?.kind,_?.artifact?.html,_?.artifact?.svg,_?.widgetId,_?.toolCallId,_?.turnId,_?.title]);if(u(()=>{if(!_)return;let H=(M)=>{if(M.key==="Escape")$?.()};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[_,$]),u(()=>{Z.current=!1},[X]),u(()=>{if(!_)return;let H=G.current;if(!H)return;let M=(A)=>{let k=X8(_),z=A==="widget.init"?G8(_):Z8(_);x9(H,k),I9(H,{__piclawGeneratedWidgetHost:!0,type:A,widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:z})},J=()=>{M("widget.init"),M("widget.update")},O=()=>{Z.current=!0,J()};H.addEventListener("load",O);let I=[0,40,120,300,800].map((A)=>setTimeout(J,A));return()=>{H.removeEventListener("load",O),I.forEach((A)=>clearTimeout(A))}},[X,_?.widgetId,_?.toolCallId,_?.turnId]),u(()=>{if(!_)return;let H=G.current;if(!H?.contentWindow)return;let M=X8(_),J=Z8(_);x9(H,M),I9(H,{__piclawGeneratedWidgetHost:!0,type:"widget.update",widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:J});return},[_?.widgetId,_?.toolCallId,_?.turnId,_?.status,_?.subtitle,_?.description,_?.error,_?.width,_?.height,_?.runtimeState]),u(()=>{if(!_)return;let H=(M)=>{let J=M?.data;if(!J||J.__piclawGeneratedWidget!==!0)return;let O=G.current,T=O1(_),I=O1({widgetId:J.widgetId,toolCallId:J.toolCallId});if(I&&T&&I!==T)return;if(!I&&O?.contentWindow&&M.source!==O.contentWindow)return;j?.(J,_)};return window.addEventListener("message",H),()=>window.removeEventListener("message",H)},[_,j]),!_)return null;let L=(_?.artifact||{}).kind||_?.kind||"html",K=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",q=typeof _?.subtitle==="string"&&_.subtitle.trim()?_.subtitle.trim():"",Q=_?.source==="live"?"live":"timeline",V=typeof _?.status==="string"&&_.status.trim()?_.status.trim():"final",B=Q==="live"?`Live widget • ${V.toUpperCase()}`:_?.originPostId?`Message #${_.originPostId}`:"Timeline launch",N=typeof _?.description==="string"&&_.description.trim()?_.description.trim():"",U=!X,D=iL(_),E=pL(_);return F`
        <div class="floating-widget-backdrop" onClick=${()=>$?.()}>
            <section
                class="floating-widget-pane"
                aria-label=${K}
                onClick=${(H)=>H.stopPropagation()}
            >
                <div class="floating-widget-header">
                    <div class="floating-widget-heading">
                        <div class="floating-widget-eyebrow">${B} • ${L.toUpperCase()}</div>
                        <div class="floating-widget-title">${K}</div>
                        ${(q||N)&&F`
                            <div class="floating-widget-subtitle">${q||N}</div>
                        `}
                    </div>
                    <button
                        class="floating-widget-close"
                        type="button"
                        onClick=${()=>$?.()}
                        title="Close widget"
                        aria-label="Close widget"
                    >
                        Close
                    </button>
                </div>
                <div class="floating-widget-body">
                    ${L==="session_tree"?F`<${tL} widget=${_} onWidgetEvent=${j} />`:U?F`<div class="floating-widget-empty">${D}</div>`:F`
                                <iframe
                                    ref=${G}
                                    class="floating-widget-frame"
                                    title=${K}
                                    name=${X8(_)}
                                    sandbox=${E}
                                    referrerpolicy="no-referrer"
                                    srcdoc=${X}
                                ></iframe>
                            `}
                </div>
            </section>
        </div>
    `}T0();S2();f_();E5();var cz=new Set,_q=new Set,f9=new Set,f4=new Map,$q=!1,Y8=null;function lz(_=typeof window<"u"?window:null){let $=typeof _?.__piclawCurrentChatJid==="string"?_.__piclawCurrentChatJid.trim():"";if($)return $;try{let j=_?.location?.href||"http://localhost/",G=new URL(j).searchParams.get("chat_jid")?.trim()||"";if(G)return G}catch(j){}return"web:default"}function hz(_,$){let j=typeof _==="string"?_.trim():"";if(!j)return null;try{return new URL(j,$).href}catch{return null}}function jq(_){if(!_||typeof _.id!=="string"||!_.id.trim())return!1;return L_.register(_),cz.add(_.id),!0}function nz(_){return jq(_)}function pz(_){if(!_||typeof _.id!=="string"||!_.id.trim())return()=>{};return d$(_),_q.add(_.id),p7(),()=>{iX(_.id),_q.delete(_.id),p7()}}function rz(_){if(typeof _!=="function")return()=>{};return f9.add(_),()=>{f9.delete(_)}}function Gq(_,$={}){let j=typeof _==="string"?_.trim():"";if(!j)return null;for(let G of[...f9].reverse())try{let Z=G(j,$);if(typeof Z==="string"&&Z.trim())return Z.trim()}catch(Z){console.warn("[addon-web] standalone tab URL resolver failed:",Z)}return null}function dz(_){if(!_||typeof _.id!=="string"||!_.id.trim()||typeof _.match!=="function"||typeof _.buildFrameUrl!=="function")return()=>{};return f4.set(_.id,_),()=>{if(f4.get(_.id)===_)f4.delete(_.id)}}function L8(_,$){for(let j of Array.from(f4.values()).reverse())try{if(j.match(_,$))return j}catch(G){console.warn("[addon-web] attachment preview matcher failed:",G)}return null}function Zq(_){let $=typeof _==="string"?_.trim():"";if(!$)return null;return f4.get($)?.label||null}function Xq(_){let $=typeof _==="string"?_.trim():"";if(!$)return null;return f4.get($)?.note||null}function Yq(_,$,j){let G=typeof _==="string"?_.trim():"";if(!G)return null;let Z=f4.get(G);if(!Z)return null;try{return Z.buildFrameUrl($,j)||null}catch(X){return console.warn("[addon-web] attachment preview URL builder failed:",X),null}}function iz(_=typeof window<"u"?window:null){return{registerPane:nz,registerWorkspacePane:jq,registerSettingsPane:pz,registerStandaloneTabUrlResolver:rz,registerAttachmentPreview:dz,getCurrentChatJid:()=>lz(_)}}function P9(_=typeof window<"u"?window:null){let $=iz(_);if(!_||$q)return $;return _.__piclaw_web=$,_.__piclaw_registerPane=$.registerPane,_.__piclaw_registerWorkspacePane=$.registerWorkspacePane,_.__piclaw_registerSettingsPane=$.registerSettingsPane,_.__piclaw_registerStandaloneTabUrlResolver=$.registerStandaloneTabUrlResolver,_.__piclaw_registerAttachmentPreview=$.registerAttachmentPreview,_.__piclawSettingsPaneRegistry={registerSettingsPane:$.registerSettingsPane,notifySettingsPanesChanged:()=>_?.dispatchEvent?.(new CustomEvent("piclaw:settings-panes-changed"))},$q=!0,$}async function Lq(_=typeof window<"u"?window:null){if(!_)return;if(Y8)return Y8;return Y8=(async()=>{P9(_);try{let $=await fetch("/agent/addons/web-entries",{credentials:"same-origin"});if(!$.ok)return;let j=await $.json().catch(()=>null),G=Array.isArray(j?.entries)?j.entries:[],Z=_.location?.origin||"http://localhost";for(let X of G){let Y=hz(X?.url,Z);if(!Y)continue;try{await import(Y)}catch(L){console.warn("[addon-web] Failed to load installed addon web entry:",Y,L)}}}catch($){console.warn("[addon-web] Failed to fetch installed addon web entries:",$)}})(),Y8}var oz=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/x-yaml","text/xml","text/yaml"]),sz=new Set(["text/markdown"]),az=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),tz=new Set(["application/eml","message/rfc822"]);function e$(_){return typeof _==="string"?_.trim().toLowerCase():""}function ez(_){let $=e$(_);return!!$&&$.endsWith(".eml")}function _O(_){let $=e$(_);return!!$&&$.endsWith(".pdf")}function $O(_){let $=e$(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}var jO=new Set(["application/zip","application/x-zip-compressed"]);function GO(_){let $=e$(_);return!!$&&$.endsWith(".zip")}function ZO(_){let $=e$(_);return!!$&&($.endsWith(".html")||$.endsWith(".htm"))}function XO(_){let $=e$(_);if(!$)return!1;return $.endsWith(".sh")||$.endsWith(".bash")||$.endsWith(".zsh")||$.endsWith(".sb")||$.endsWith(".yaml")||$.endsWith(".yml")}function k6(_,$){let j=L8(_,$);if(j?.id)return j.id;let G=e$(_);if(_O($)||G==="application/pdf")return"pdf";if($O($)||az.has(G))return"office";if(ez($)||tz.has(G))return"eml";if(GO($)||jO.has(G))return"archive";if(ZO($)||G==="text/html")return"html";if(XO($))return"text";if(!G)return"unsupported";if(G.startsWith("video/"))return"video";if(G.startsWith("image/"))return"image";if(oz.has(G)||G.startsWith("text/"))return"text";return"unsupported"}function qq(_){let $=e$(_);return sz.has($)}function q8(_){switch(_){case"image":return"Image preview";case"video":return"Video player";case"pdf":return"PDF preview";case"office":return"Office viewer";case"eml":return"Email preview";case"html":return"HTML preview";case"text":return"Text preview";case"archive":return"ZIP archive preview";default:return Zq(_)||"Preview unavailable"}}var YO=new TextDecoder("utf-8",{fatal:!1});function A5(_,$){return _[$]|_[$+1]<<8}function P4(_,$){return(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24)>>>0}function Kq(_,$,j){return YO.decode(_.subarray($,$+j))}function LO(_){let $=Math.max(0,_.length-65557);for(let j=_.length-22;j>=$;j-=1)if(P4(_,j)===101010256)return j;return-1}function qO(_,$){let j=Math.max(0,$-20);for(let G=j;G<=$-4;G+=1)if(P4(_,G)===117853008)return!0;return!1}function KO(_){let $=new Set;for(let j of _){let G=j.path.replace(/\/+/g,"/");if(!G)continue;if(j.isDirectory){$.add(G.endsWith("/")?G.slice(0,-1):G);continue}let Z=G.split("/").filter(Boolean);if(Z.length<=1)continue;let X="";for(let Y=0;Y<Z.length-1;Y+=1)X=X?`${X}/${Z[Y]}`:Z[Y],$.add(X)}return $}function VO(_){return String(_||"").replace(/\\/g,"/").trim()}function Vq(_){switch(Number(_)){case 0:return"Stored";case 8:return"Deflate";case 9:return"Deflate64";case 12:return"BZIP2";case 14:return"LZMA";case 93:return"Zstandard";default:return`Method ${_}`}}function Qq(_){let $=_ instanceof Uint8Array?_:_ instanceof ArrayBuffer?new Uint8Array(_):new Uint8Array(_.buffer,_.byteOffset,_.byteLength);if($.length<22)throw Error("ZIP archive is too small to contain a valid directory.");let j=LO($);if(j<0)throw Error("ZIP archive directory could not be found.");if(qO($,j))throw Error("ZIP64 archives are not previewable yet.");let G=A5($,j+10),Z=P4($,j+12),X=P4($,j+16);if(X+Z>$.length)throw Error("ZIP archive directory is truncated.");let Y=[],L=X,K=X+Z;while(L<K){if(L+46>$.length)throw Error("ZIP archive directory entry is truncated.");if(P4($,L)!==33639248)throw Error("ZIP archive directory contains an unexpected record.");let V=A5($,L+8),B=A5($,L+10),N=P4($,L+20),U=P4($,L+24),D=A5($,L+28),E=A5($,L+30),H=A5($,L+32),M=L+46,J=M+D+E,O=J+H;if(O>$.length)throw Error("ZIP archive directory entry metadata is truncated.");let T=(V&2048)===2048,I=VO(Kq($,M,D)),A=Kq($,J,H),k=I.endsWith("/");if(I)Y.push({path:I,isDirectory:k,compressedSize:N,uncompressedSize:U,compressionMethod:B,comment:T?A:A});L=O}Y.sort((V,B)=>{if(V.isDirectory!==B.isDirectory)return V.isDirectory?-1:1;return V.path.localeCompare(B.path)});let q=Y.filter((V)=>!V.isDirectory),Q=KO(Y);return{entries:Y,summary:{fileCount:q.length,directoryCount:Q.size,totalEntries:Y.length,compressedBytes:q.reduce((V,B)=>V+B.compressedSize,0),uncompressedBytes:q.reduce((V,B)=>V+B.uncompressedSize,0)}}}function Nq(_){if(!_)return null;if(_.uncompressedBytes<=0)return null;let $=1-_.compressedBytes/_.uncompressedBytes;if(!Number.isFinite($))return null;return`${Math.round($*100)}% smaller`}var QO="allow-scripts";function NO(_){if(!(_ instanceof Uint8Array)||_.length===0)return!0;let $=0,j=_.subarray(0,Math.min(_.length,4096));for(let G of j){if(G===0)return!1;if(G<32&&G!==9&&G!==10&&G!==13&&G!==12)$+=1}return $/j.length<0.02}function BO(_,$){let j=String(_?.content_type||"").trim().toLowerCase(),G=String($||"").trim().toLowerCase();if(j.startsWith("text/")||j==="application/json"||j==="application/xml")return!1;return j==="application/octet-stream"||G.endsWith(".sb")||G.endsWith(".sh")}function FO(_){try{return new TextDecoder("utf-8",{fatal:!1}).decode(_)}catch{return new TextDecoder().decode(_)}}function UO(_,$=null,j=null){let G=_?.metadata?.size,Z=_?.content_type||"application/octet-stream",X=j?.summary||null;return[{label:"Type",value:Z},{label:"Syntax",value:$},{label:"Entries",value:X?String(X.totalEntries):null},{label:"Files",value:X?String(X.fileCount):null},{label:"Folders",value:X?String(X.directoryCount):null},{label:"Compressed",value:X?e_(X.compressedBytes):null},{label:"Uncompressed",value:X?e_(X.uncompressedBytes):null},{label:"Savings",value:Nq(X)},{label:"Size",value:typeof G==="number"?e_(G):null},{label:"Added",value:_?.created_at?w4(_.created_at):null}].filter((Y)=>Y.value)}function HO(_,$){let j=String(_?.content_type||"").trim().toLowerCase(),G=String($||"").trim().toLowerCase(),Z=G.split("/").pop()||G;if(G.endsWith(".yaml")||G.endsWith(".yml")||j==="text/yaml"||j==="application/yaml")return"yaml";if(G.endsWith(".json")||G.endsWith(".jsonl")||j==="application/json")return"json";if(G.endsWith(".xml")||G.endsWith(".svg")||j==="application/xml"||j==="text/xml"||j==="image/svg+xml")return"xml";if(G.endsWith(".html")||G.endsWith(".htm")||j==="text/html")return"html";if(G.endsWith(".css")||j==="text/css")return"css";if(G.endsWith(".ts")||G.endsWith(".tsx")||j==="text/typescript")return G.endsWith(".tsx")?"tsx":"ts";if(G.endsWith(".js")||G.endsWith(".jsx")||j==="text/javascript"||j==="application/javascript")return G.endsWith(".jsx")?"jsx":"js";if(G.endsWith(".py")||j==="text/x-python"||j==="application/x-python-code")return"python";if(G.endsWith(".go")||j==="text/x-go")return"go";if(G.endsWith(".c++")||G.endsWith(".cc")||G.endsWith(".cp")||G.endsWith(".cpp")||G.endsWith(".cxx")||G.endsWith(".hh")||G.endsWith(".hpp")||G.endsWith(".hxx")||j==="text/x-c++src"||j==="text/x-c++hdr")return"cpp";if(G.endsWith(".rb")||j==="text/x-ruby")return"ruby";if(G.endsWith(".rs")||j==="text/x-rustsrc")return"rust";if(G.endsWith(".ps1")||G.endsWith(".psm1")||G.endsWith(".psd1")||j==="text/x-powershell")return"powershell";if(Z==="dockerfile"||G.endsWith(".dockerfile"))return"dockerfile";if(G.endsWith(".md")||G.endsWith(".markdown")||j==="text/markdown")return"markdown";if(G.endsWith(".sh")||G.endsWith(".bash")||G.endsWith(".zsh")||Z===".bashrc"||Z===".bash_profile"||Z===".profile"||Z===".zshrc"||Z===".zprofile"||Z===".zshenv"||Z===".env"||Z.startsWith(".env.")||j==="text/x-shellscript")return"bash";if(G.endsWith(".sql"))return"sql";if(G.endsWith(".toml")||G.endsWith(".ini")||G.endsWith(".cfg")||G.endsWith(".conf")||G.endsWith(".properties")||j==="text/toml")return"toml";return null}function EO(_,$,j){let G=encodeURIComponent($||`attachment-${_}`),Z=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${Z}&name=${G}#media=${Z}&name=${G}`;if(j==="office"){let X=u1(_);return`/office-viewer/?url=${encodeURIComponent(X)}&name=${G}`}if(j==="eml")return`/eml-viewer/?media=${Z}&name=${G}`;return null}function Bq({mediaId:_,info:$,onClose:j}){let G=$?.filename||`attachment-${_}`,Z=G0(()=>L8($?.content_type,G),[$?.content_type,G]),X=G0(()=>k6($?.content_type,G),[$?.content_type,G]),Y=Z?.label||q8(X),L=G0(()=>qq($?.content_type),[$?.content_type]),[K,q]=C(X==="text"||X==="html"||X==="archive"),[Q,V]=C(""),[B,N]=C(null),[U,D]=C(null),E=g(null),H=G0(()=>HO($,G),[$,G]),M=G0(()=>H?RZ(H):null,[H]),J=G0(()=>UO($,!L?M:null,B),[$,L,M,B]),O=G0(()=>Z?Yq(Z.id,_,G):EO(_,G,X),[Z,_,G,X]),T=G0(()=>Xq(Z?.id||X),[Z?.id,X]),I=G0(()=>{if(!L||!Q)return"";return Z1(Q)},[L,Q]),A=G0(()=>{if(L||!Q||!H)return"";return F2(Q,H)},[L,Q,H]);return u(()=>{let k=(z)=>{if(z.key==="Escape")j()};return document.addEventListener("keydown",k),()=>document.removeEventListener("keydown",k)},[j]),u(()=>{if(!E.current||!I)return;E$(E.current);return},[I]),u(()=>{let k=!1;async function z(){if(X!=="text"&&X!=="html"&&X!=="archive"){q(!1),D(null),V(""),N(null);return}q(!0),D(null),V(""),N(null);try{let W=await O7(_),y=new Uint8Array(await W.arrayBuffer());if(X==="text"||X==="html"){if(X==="text"&&BO($,G)&&!NO(y))throw Error("Attachment does not appear to contain text content.");let P=FO(y);if(!k)V(P);return}let x=Qq(y);if(!k)N(x)}catch(W){if(!k){let y=W instanceof Error?W.message:String(W||"Unknown error");D(X==="archive"?`Failed to load ZIP preview. ${y}`:`Failed to load text preview. ${y}`)}}finally{if(!k)q(!1)}}return z(),()=>{k=!0}},[_,X]),F`
        <${r$} className="attachment-preview-portal-root">
            <div class="image-modal attachment-preview-modal" onClick=${j}>
                <div class="attachment-preview-shell" onClick=${(k)=>{k.stopPropagation()}}>
                    <div class="attachment-preview-header">
                        <div class="attachment-preview-heading">
                            <div class="attachment-preview-title">${G}</div>
                            <div class="attachment-preview-subtitle">${Y}</div>
                        </div>
                        <div class="attachment-preview-header-actions">
                            ${O&&F`
                                <a
                                    href=${O}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="attachment-preview-download"
                                    onClick=${(k)=>k.stopPropagation()}
                                >
                                    Open in Tab
                                </a>
                            `}
                            <a
                                href=${u1(_)}
                                download=${G}
                                class="attachment-preview-download"
                                onClick=${(k)=>k.stopPropagation()}
                            >
                                Download
                            </a>
                            <button class="attachment-preview-close" type="button" onClick=${j}>Close</button>
                        </div>
                    </div>
                    <div class="attachment-preview-body">
                        ${K&&F`<div class="attachment-preview-state">Loading preview…</div>`}
                        ${!K&&U&&F`<div class="attachment-preview-state">${U}</div>`}
                        ${!K&&!U&&X==="image"&&F`
                            <img class="attachment-preview-image" src=${u1(_)} alt=${G} />
                        `}
                        ${!K&&!U&&X==="video"&&F`
                            <video class="attachment-preview-video" src=${u1(_)} controls autoplay style="max-width:100%;max-height:100%;" />
                        `}
                        ${!K&&!U&&X==="html"&&F`
                            <iframe class="attachment-preview-frame" srcdoc=${Q||""} sandbox=${QO} title=${G}></iframe>
                        `}
                        ${!K&&!U&&(X==="pdf"||X==="office"||X==="eml"||Boolean(Z))&&O&&F`
                            <iframe class="attachment-preview-frame" src=${O} title=${G}></iframe>
                        `}
                        ${!K&&!U&&T&&F`
                            <div class="attachment-preview-readonly-note">${T}</div>
                        `}
                        ${!K&&!U&&X==="archive"&&B&&F`
                            <div class="attachment-preview-archive">
                                <div class="attachment-preview-archive-summary">
                                    <div class="attachment-preview-archive-card">
                                        <span class="attachment-preview-archive-card-label">Files</span>
                                        <strong class="attachment-preview-archive-card-value">${B.summary.fileCount}</strong>
                                    </div>
                                    <div class="attachment-preview-archive-card">
                                        <span class="attachment-preview-archive-card-label">Folders</span>
                                        <strong class="attachment-preview-archive-card-value">${B.summary.directoryCount}</strong>
                                    </div>
                                    <div class="attachment-preview-archive-card">
                                        <span class="attachment-preview-archive-card-label">Compressed</span>
                                        <strong class="attachment-preview-archive-card-value">${e_(B.summary.compressedBytes)}</strong>
                                    </div>
                                    <div class="attachment-preview-archive-card">
                                        <span class="attachment-preview-archive-card-label">Uncompressed</span>
                                        <strong class="attachment-preview-archive-card-value">${e_(B.summary.uncompressedBytes)}</strong>
                                    </div>
                                </div>
                                <div class="attachment-preview-archive-table-wrap">
                                    <table class="attachment-preview-archive-table">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Type</th>
                                                <th>Method</th>
                                                <th>Compressed</th>
                                                <th>Size</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            ${B.entries.map((k)=>F`
                                                <tr key=${k.path}>
                                                    <td class="attachment-preview-archive-name">${k.path}</td>
                                                    <td>${k.isDirectory?"Folder":"File"}</td>
                                                    <td>${k.isDirectory?"—":Vq(k.compressionMethod)}</td>
                                                    <td>${k.isDirectory?"—":e_(k.compressedSize)}</td>
                                                    <td>${k.isDirectory?"—":e_(k.uncompressedSize)}</td>
                                                </tr>
                                            `)}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        `}
                        ${!K&&!U&&X==="text"&&L&&F`
                            <div
                                ref=${E}
                                class="attachment-preview-markdown post-content"
                                dangerouslySetInnerHTML=${{__html:I}}
                            />
                        `}
                        ${!K&&!U&&X==="text"&&!L&&A&&F`
                            <pre class="attachment-preview-text attachment-preview-code"><code dangerouslySetInnerHTML=${{__html:A}} /></pre>
                        `}
                        ${!K&&!U&&X==="text"&&!L&&!A&&F`
                            <pre class="attachment-preview-text">${Q}</pre>
                        `}
                        ${!K&&!U&&X==="unsupported"&&F`
                            <div class="attachment-preview-state">
                                Preview is not available for this file type yet. You can still download it directly.
                            </div>
                        `}
                    </div>
                    <div class="attachment-preview-meta">
                        ${J.map((k)=>F`
                            <div class="attachment-preview-meta-item" key=${k.label}>
                                <span class="attachment-preview-meta-label">${k.label}</span>
                                <span class="attachment-preview-meta-value">${k.value}</span>
                            </div>
                        `)}
                    </div>
                </div>
            </div>
        </${r$}>
    `}T0();f_();m2();L9();function DO(_){if(!_||typeof _!=="object")return!1;if(_.isContentEditable)return!0;if(typeof _.closest!=="function")return!1;return Boolean(_.closest(["input","textarea","select",'[contenteditable="true"]',".compose-box",".compose-model-popup",".compose-session-popup",".settings-dialog",".workspace-sidebar",".workspace-explorer",".editor-pane-container",".dock-panel",".timeline-menu-dropdown",".rename-branch-overlay",".agent-request-modal",".attachment-preview-modal",".vnc-pane-shell",".kanban-plugin",".mindmap-editor"].join(", ")))}function WO(_){if(!_||typeof _!=="object")return!0;if(DO(_))return!1;let $=String(_.tagName||"").toUpperCase();if($==="BODY"||$==="HTML")return!0;if(typeof _.closest!=="function")return!0;return Boolean(_.closest(".container, .timeline, .post, .post-body, .post-content, .agent-status-panel"))}function zO(_){if(!J6(_))return!1;if(!WO(_?.target))return!1;return!i$.some((j)=>O$(_,j.id))}function Fq(_){let $=new URL(window.location.href);if(_)$.searchParams.delete("chat_only");else $.searchParams.set("chat_only","1");window.location.href=$.toString()}function OO(_){let $=[],j=new Map(s$.map((Z)=>[Z.id,Z])),G=(Z,X={})=>{let Y=j.get(Z);if(!Y)return;$.push({...Y,...X})};if(G("toggle-workspace",{label:_.workspaceOpen?"Hide workspace":"Show workspace",description:_.workspaceOpen?"Hide the workspace sidebar.":"Show the workspace sidebar."}),!_.workspaceOpen&&!_.chatOnlyMode)G("open-explorer");if(G("toggle-chat-only",{label:_.chatOnlyMode?"Exit chat-only mode":"Chat-only mode",description:_.chatOnlyMode?"Return to the split workspace layout.":"Switch to the chat-only layout."}),typeof _.onOpenTerminalTab==="function")G("open-terminal-tab");if(typeof _.onOpenVncTab==="function")G("open-vnc-tab");if(typeof _.onToggleTerminalDock==="function")G("toggle-terminal-dock",{label:_.terminalVisible?"Hide terminal dock":"Show terminal dock",description:_.terminalVisible?"Hide the terminal dock.":"Show the terminal dock."});return G("open-settings"),$}function Uq(_){if(_==="agent")return"Agents";if(_==="workspace")return"Workspace";return"Slash commands"}function JO(_){if(_?.imageUrl)return F`<img class="timeline-quick-actions-item-avatar" src=${_.imageUrl} alt="" aria-hidden="true" />`;return F`<span class="timeline-quick-actions-item-placeholder" aria-hidden="true">${_?.visualHint||""}</span>`}function K8(_,$){return F`
        <span class="timeline-quick-actions-keyhint">
            <kbd>${$}</kbd>
            <span>${_}</span>
        </span>
    `}function AO(_){let $=new URL(window.location.href);$.searchParams.set("chat_jid",_),$.searchParams.set("chat_only","1");let j=document.createElement("a");j.href=$.toString(),j.target="_blank",j.rel="noopener",j.style.display="none",document.body.appendChild(j),j.click(),j.remove()}function Hq({activeChatAgents:_=[],currentChatJid:$="web:default",workspaceOpen:j=!1,chatOnlyMode:G=!1,terminalVisible:Z=!1,onSwitchChat:X,onToggleWorkspace:Y,onOpenTerminalTab:L,onOpenVncTab:K,onToggleTerminalDock:q,onPrefillCompose:Q}){let[V,B]=C(!1),[N,U]=C(""),[D,E]=C(0),[H,M]=C([]),[J,O]=C({workspaceCommands:null,slashCommands:null}),T=g(null),I=g(null),A=f(async()=>{try{let y=await L6();O(a$(y?.settings))}catch{O({workspaceCommands:null,slashCommands:null})}},[]);u(()=>{A()},[A]),u(()=>{let y=!1;return Y6($).then((x)=>{if(y)return;M(Array.isArray(x?.commands)?x.commands:[])}).catch(()=>{if(y)return;M([])}),()=>{y=!0}},[$]);let k=G0(()=>OO({workspaceOpen:j,chatOnlyMode:G,terminalVisible:Z,onOpenTerminalTab:L,onOpenVncTab:K,onToggleTerminalDock:q}),[G,L,K,q,Z,j]),z=G0(()=>vY({agents:_,workspaceCommands:k,slashCommands:H,settings:J,query:N}),[_,N,J,H,k]);if(u(()=>{if(z.length===0){E(-1);return}if(!N.trim()){E(0);return}let y=N.toLowerCase().replace(/^[@/]+/,"").trim();if(!y){E(0);return}let x=0,P=0;for(let S=0;S<z.length;S++){let v=z[S],l=(v.title||"").toLowerCase().replace(/^[@/]+/,"");if(l===y){x=S;break}let h=0;if(l.startsWith(y))h=3;else if(l.includes(y))h=2;else if((v.subtitle||"").toLowerCase().includes(y))h=1;if(h>P)P=h,x=S}E(x)},[z,N]),u(()=>{if(!V)return;requestAnimationFrame(()=>I.current?.focus?.())},[V]),u(()=>{let y=(P)=>{if(!V){if(!zO(P))return;P.preventDefault(),U(String(P.key||"")),E(0),B(!0);return}if(P.key==="Escape"){P.preventDefault(),B(!1),U("");return}if(P.key==="ArrowDown"){P.preventDefault(),E((S)=>z.length>0?(S+1+z.length)%z.length:0);return}if(P.key==="ArrowUp"){P.preventDefault(),E((S)=>z.length>0?(S-1+z.length)%z.length:0);return}if(P.key==="Enter"&&z[D]){P.preventDefault();let S=z[D],v=P.altKey;if(S){if(S.kind==="agent"&&S.chatJid)if(v)AO(S.chatJid);else X?.(S.chatJid);else if(S.kind==="workspace"&&S.commandId){if(S.commandId==="toggle-workspace"||S.commandId==="open-explorer")Y?.();if(S.commandId==="toggle-chat-only")Fq(G);if(S.commandId==="open-terminal-tab")L?.();if(S.commandId==="open-vnc-tab")K?.();if(S.commandId==="toggle-terminal-dock")q?.();if(S.commandId==="open-settings")window.dispatchEvent(new CustomEvent("piclaw:open-settings"))}else if(S.kind==="slash"&&S.commandName)Q?.(S.commandName)}B(!1),U("")}},x=(P)=>{if(!V)return;if(T.current?.contains(P.target))return;B(!1),U("")};return window.addEventListener("keydown",y,!0),document.addEventListener("pointerdown",x,!0),()=>{window.removeEventListener("keydown",y,!0),document.removeEventListener("pointerdown",x,!0)}},[G,D,z,L,K,Q,X,q,Y,V]),u(()=>{let y=(x)=>{let P=a$(x?.detail?.settings);if(x?.detail?.settings){O(P);return}A()};return window.addEventListener("focus",y),window.addEventListener("piclaw:quick-actions-settings-updated",y),()=>{window.removeEventListener("focus",y),window.removeEventListener("piclaw:quick-actions-settings-updated",y)}},[A]),!V)return null;let W=null;return F`
        <div class="timeline-quick-actions-portal">
            <div class="timeline-quick-actions-overlay">
                <div class="timeline-quick-actions" ref=${T}>
                    <div class="timeline-quick-actions-header">
                        <div class="timeline-quick-actions-search-row">
                            <input
                                ref=${I}
                                class="timeline-quick-actions-input"
                                type="text"
                                value=${N}
                                placeholder="Type to jump to an agent, workspace action, or slash command…"
                                onInput=${(y)=>{U(y.currentTarget?.value||""),E(0)}}
                            />
                            <div class="timeline-quick-actions-hints" aria-hidden="true">
                                ${K8("Move","↑↓")}
                                ${K8("Select","↵")}
                                ${K8("Pop out","Alt+↵")}
                                ${K8("Close","Esc")}
                            </div>
                        </div>
                    </div>
                    <div class="timeline-quick-actions-list">
                        ${z.length===0&&F`<div class="timeline-quick-actions-empty">No quick actions match.</div>`}
                        ${z.map((y,x)=>{let P=y.kind!==W;return W=y.kind,F`
                                ${P&&F`<div class="timeline-quick-actions-section">${Uq(y.kind)}</div>`}
                                <button
                                    key=${y.key}
                                    type="button"
                                    class=${`timeline-quick-actions-item timeline-quick-actions-item-${y.kind}${x===D?" active":""}`}
                                    onMouseEnter=${null}
                                    onClick=${()=>{if(y.kind==="agent"&&y.chatJid)X?.(y.chatJid);if(y.kind==="workspace"&&y.commandId==="toggle-workspace")Y?.();if(y.kind==="workspace"&&y.commandId==="open-explorer")Y?.();if(y.kind==="workspace"&&y.commandId==="toggle-chat-only")Fq(G);if(y.kind==="workspace"&&y.commandId==="open-terminal-tab")L?.();if(y.kind==="workspace"&&y.commandId==="open-vnc-tab")K?.();if(y.kind==="workspace"&&y.commandId==="toggle-terminal-dock")q?.();if(y.kind==="workspace"&&y.commandId==="open-settings")window.dispatchEvent(new CustomEvent("piclaw:open-settings"));if(y.kind==="slash"&&y.commandName)Q?.(y.commandName);B(!1),U("")}}
                                >
                                    <span class="timeline-quick-actions-item-media">
                                        ${JO(y)}
                                    </span>
                                    <span class="timeline-quick-actions-item-copy">
                                        <span class="timeline-quick-actions-item-title-row">
                                            <span class="timeline-quick-actions-item-title">${y.title}</span>
                                            ${y.actionHint?F`<span class="timeline-quick-actions-item-action-hint">${y.actionHint}</span>`:null}
                                        </span>
                                        <span class="timeline-quick-actions-item-subtitle">${y.subtitle}</span>
                                    </span>
                                    <span class="timeline-quick-actions-item-category">${y.categoryLabel||Uq(y.kind)}</span>
                                </button>
                            `})}
                    </div>
                </div>
            </div>
        </div>
    `}T0();function Eq({workspaceOpen:_,toggleWorkspace:$,chatOnlyMode:j,onOpenTerminalTab:G,onOpenVncTab:Z,onToggleTerminal:X,terminalVisible:Y}){let[L,K]=C(!1),[q,Q]=C({top:8,left:8}),V=g(null),B=g(null),N=g(null);u(()=>{if(typeof document>"u")return;let H=document.createElement("div");return H.className="timeline-menu-portal in-chat",document.body.appendChild(H),N.current=H,()=>{H.remove(),N.current=null}},[]),u(()=>{let H=()=>{if(_){let O=document.querySelector(".workspace-sidebar");if(O){let T=O.getBoundingClientRect();Q({top:T.top+8,left:T.left+8})}}else Q({top:8,left:8})};H();let M=new ResizeObserver(H),J=document.querySelector(".workspace-sidebar");if(J)M.observe(J);return window.addEventListener("resize",H),()=>{M.disconnect(),window.removeEventListener("resize",H)}},[_]),u(()=>{if(N.current)N.current.className=`timeline-menu-portal ${_?"in-workspace":"in-chat"}`},[_]),u(()=>{if(!N.current)return;let H=N.current.style;H.top=`${q.top}px`,H.left=`${q.left}px`,H.right="auto"},[q]),u(()=>{if(!L)return;let H=(M)=>{if(V.current?.contains(M.target))return;if(B.current?.contains(M.target))return;K(!1)};return document.addEventListener("mousedown",H,!0),()=>document.removeEventListener("mousedown",H,!0)},[L]),u(()=>{if(!L)return;let H=(M)=>{if(M.key==="Escape")K(!1)};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[L]),u(()=>{K(!1)},[_]);let U=f((H)=>{K(!1),H?.()},[]),D=f(()=>{let H=new URL(window.location.href);if(j)H.searchParams.delete("chat_only");else H.searchParams.set("chat_only","1");window.location.href=H.toString()},[j]),E=F`
        <button ref=${B} class=${`timeline-menu-btn${L?" active":""}`}
            onClick=${()=>K((H)=>!H)} title="Menu" aria-label="Menu"
            aria-haspopup="menu" aria-expanded=${L?"true":"false"}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
        </button>
        ${L&&F`
            <div class="workspace-menu-dropdown timeline-menu-dropdown" ref=${V} role="menu">
                <button class="workspace-menu-item" role="menuitem" onClick=${()=>U($)}>
                    ${_?"Hide workspace":"Show workspace"}
                </button>
                ${!_&&!j&&F`
                    <button class="workspace-menu-item" role="menuitem" onClick=${()=>U(()=>{$()})}>
                        Open explorer
                    </button>
                `}
                <button class=${`workspace-menu-item${j?" active":""}`} role="menuitem" onClick=${()=>U(D)}>
                    ${j?"Exit chat-only mode":"Chat-only mode"}
                </button>

                ${(G||Z||X)&&F`<div class="workspace-menu-separator"></div>`}
                ${G&&F`<button class="workspace-menu-item" role="menuitem" onClick=${()=>U(G)}>Open terminal in tab</button>`}
                ${Z&&F`<button class="workspace-menu-item" role="menuitem" onClick=${()=>U(Z)}>Open VNC in tab</button>`}
                ${X&&F`<button class="workspace-menu-item" role="menuitem" onClick=${()=>U(X)}>${Y?"Hide terminal dock":"Show terminal dock"}</button>`}

                <div class="workspace-menu-separator"></div>
                <button class="workspace-menu-item" role="menuitem" onClick=${()=>U(()=>window.dispatchEvent(new CustomEvent("piclaw:open-settings")))}>Settings</button>
            </div>
        `}
    `;return e4(()=>{if(N.current)Q$(E,N.current)}),null}T0();f_();var Dq="PiClaw";function R9(_,$,j=!1){let G=_||"PiClaw",Z=G.charAt(0).toUpperCase(),X=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],Y=Z.charCodeAt(0)%X.length,L=X[Y],K=G.trim().toLowerCase(),q=typeof $==="string"?$.trim():"",Q=q?q:null,V=j||K==="PiClaw".toLowerCase()||K==="pi";return{letter:Z,color:L,image:Q||(V?"/static/icon-192.png":null)}}function Wq(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function zq(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function Oq(_){if(!_)return null;if(typeof document<"u"){let X=document.documentElement,Y=X?.dataset?.colorTheme||"",L=X?.dataset?.tint||"",K=getComputedStyle(X).getPropertyValue("--accent-color")?.trim();if(K&&(L||Y&&Y!=="default"))return K}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),G=0;for(let X=0;X<j.length;X+=1)G=(G*31+j.charCodeAt(X))%2147483647;let Z=Math.abs(G)%$.length;return $[Z]}function S9(..._){for(let $ of _)if(typeof $==="string"&&$.trim())return $.trim();return null}function kO(_){if(_.startsWith('"')&&_.endsWith('"')||_.startsWith("'")&&_.endsWith("'"))return _.slice(1,-1);return _}function Jq(_){if(typeof _!=="string"||!_.trim())return null;let $=_.match(/^\s*cd\s+(.+?)(?:\s*(?:&&|;|\n))/s);if(!$?.[1])return null;return kO($[1].trim())||null}function Aq(_,$){let j=$&&typeof $==="object"?$:null;if(!j)return null;let G=S9(j.cwd,j.working_directory,j.workingDirectory);if(G)return G;let Z=S9(j.project_dir,j.projectDir,j.repo_path,j.repoPath);if(Z)return Z;let X=S9(j.command),Y=Jq(X);if(Y)return Y;if(Array.isArray(j.commands))for(let L of j.commands){let K=Jq(L);if(K)return K}return null}var yO=F`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>
`,MO=F`
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
        <path d="M6 3v12"></path>
        <circle cx="18" cy="6" r="3"></circle>
        <circle cx="6" cy="18" r="3"></circle>
        <path d="M18 9a9 9 0 0 1-9 9"></path>
    </svg>
`,wO=F`
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M12 7v5l3 2"></path>
    </svg>
`,TO=1e4;function xO(_){return(Array.isArray(_)?_:_&&Array.isArray(_.status_hints)?_.status_hints:[]).filter((j)=>j&&typeof j==="object").map((j,G)=>({key:typeof j.key==="string"&&j.key.trim()?j.key.trim():`hint-${G}`,iconSvg:typeof j.icon_svg==="string"?j.icon_svg.trim():"",label:typeof j.label==="string"?j.label.trim():"",title:typeof j.title==="string"?j.title.trim():""})).filter((j)=>j.iconSvg&&j.label)}function IO(_){if(!(_ instanceof Set)||_.size===0)return null;let $=Array.from(_.values());for(let j=$.length-1;j>=0;j-=1){let G=$[j];if(G==="thought"||G==="draft")return G}return null}function CO(_){if(!Array.isArray(_)||_.length===0)return[];let $=new Map([["ssh",0]]);return _.map((j,G)=>({hint:j,index:G})).sort((j,G)=>{let Z=$.get(j.hint?.key)??100,X=$.get(G.hint?.key)??100;if(Z!==X)return Z-X;return j.index-G.index}).map((j)=>j.hint)}function fO(_,$){let j=typeof _==="string"?_.trim():"",G=typeof $==="string"?$.trim():"";return[j?j.split(/[\\/]+/).filter(Boolean).pop()||j:"",G].filter(Boolean).join(" • ")}function kq(_){if(!_||typeof _!=="object")return!1;let $=typeof _.type==="string"?_.type:"",j=Boolean(_.last_activity||_.lastActivity),G=$==="tool_call"||$==="tool_status"||Boolean(_.tool_name||_.tool_args);if(!j&&!G)return!1;return p$(_)!==null}function yq(_){if(!_||typeof _!=="object")return!1;return _.type==="intent"&&f2(_)!==null}function PO(_,$=Date.now()){if(!Number.isFinite(_))return!1;return $-_>=TO}function RO(_,$=Date.now()){if(!kq(_))return null;let j=p$(_);if(j===null||!PO(j,$))return null;let G=Mq(new Date(j).toISOString(),$);return G?`${G} ago`:null}function SO(_,$=Date.now()){if(!yq(_))return null;if(f2(_)===null)return null;return E6(_,$)}function uO(_,$={}){let j=$?.isLastActivity??Boolean(_?.last_activity||_?.lastActivity),G=_?.title,Z=_?.status,X="";if(_?.type==="plan")X=G?`Planning: ${G}`:"Planning...";else if(_?.type==="tool_call")X=G?`Running: ${G}`:"Running tool...";else if(_?.type==="tool_status")X=G?`${G}: ${Z||"Working..."}`:Z||"Working...";else if(_?.type==="error")X=G||"Agent error";else X=G||Z||"Working...";if(!j)return X;if(X&&X!=="Working...")return`Recent activity: ${X}`;return"Last activity"}function Mq(_,$=Date.now()){if(!_)return null;let j=$-new Date(_).getTime();if(!Number.isFinite(j)||j<0)return null;let G=Math.floor(j/1000),Z=Math.floor(G/3600),X=Math.floor(G%3600/60),Y=G%60;if(Z>0)return`${Z}h ${X}m`;if(X>0)return`${X}m ${Y}s`;return`${Y}s`}function u9({status:_,draft:$,plan:j,thought:G,pendingRequest:Z,intent:X,extensionPanels:Y=[],pendingPanelActions:L=new Set,onExtensionPanelAction:K,turnId:q,steerQueued:Q,onPanelToggle:V,showCorePanels:B=!0,showExtensionPanels:N=!0}){let E=($0)=>{if(!$0)return{text:"",totalLines:0,fullText:""};if(typeof $0==="string"){let m0=$0,s=m0?m0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:m0,totalLines:s,fullText:m0}}let O0=$0.text||"",D0=$0.fullText||$0.full_text||O0,v0=Number.isFinite($0.totalLines)?$0.totalLines:D0?D0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:O0,totalLines:v0,fullText:D0}},H=160,M=($0)=>String($0||"").replace(/<\/?internal>/gi,""),J=($0)=>{if(!$0)return 1;return Math.max(1,Math.ceil($0.length/160))},O=($0,O0,D0)=>{let v0=($0||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!v0)return{text:"",omitted:0,totalLines:Number.isFinite(D0)?D0:0,visibleLines:0};let m0=v0.split(`
`),s=m0.length>O0?m0.slice(0,O0).join(`
`):v0,o=Number.isFinite(D0)?D0:m0.reduce((L0,k0)=>L0+J(k0),0),t=s?s.split(`
`).reduce((L0,k0)=>L0+J(k0),0):0,Y0=Math.max(o-t,0);return{text:s,omitted:Y0,totalLines:o,visibleLines:t}},T=E(j),I=E(G),A=E($),k=Boolean(T.text)||T.totalLines>0,z=Boolean(I.text)||I.totalLines>0,W=Boolean(A.fullText?.trim()||A.text?.trim()),y=Boolean(_||W||k||z||Z||X),x=Array.isArray(Y)&&Y.length>0,[P,S]=C(new Set),[v,l]=C(null),[h,r]=C(()=>Date.now()),b=($0)=>S((O0)=>{let D0=new Set(O0),v0=!D0.has($0);if(v0)D0.add($0);else D0.delete($0);if(typeof V==="function")V($0,v0);return D0});u(()=>{S(new Set),l(null)},[q]),u(()=>{if(!(Array.isArray(Y)&&Y.some((D0)=>D0?.started_at||D0?.last_activity_at)))return;let O0=setInterval(()=>r(Date.now()),1000);return()=>clearInterval(O0)},[Y]);let e=G0(()=>IO(P),[P]);u(()=>{if(!e||typeof document>"u")return;let $0=(O0)=>{if(O0?.defaultPrevented)return;if(O0?.key!=="Escape")return;if(O0?.altKey||O0?.ctrlKey||O0?.metaKey||O0?.shiftKey)return;let D0=O0?.target;if(D0 instanceof Element){if(D0.closest?.('input, textarea, select, [contenteditable="true"]'))return;if(D0.isContentEditable)return}if(S((v0)=>{if(!(v0 instanceof Set)||!v0.has(e))return v0;let m0=new Set(v0);return m0.delete(e),m0}),typeof V==="function")V(e,!1);O0.preventDefault?.(),O0.stopPropagation?.()};return document.addEventListener("keydown",$0),()=>document.removeEventListener("keydown",$0)},[e,V]);let z0=W$(_),K0=Boolean(_?.last_activity||_?.lastActivity),q0=G0(()=>kq(_),[_]),X0=G0(()=>yq(_),[_]),N0=G0(()=>Aq(_?.tool_name,_?.tool_args),[_?.tool_name,_?.tool_args]),[_0,Z0]=C(null);u(()=>{if(!Boolean(X0||_?.retry_at||_?.retryAt||q0))return;r(Date.now());let O0=setInterval(()=>r(Date.now()),1000);return()=>clearInterval(O0)},[q0,X0,_?.retry_at,_?.retryAt,_?.last_event_at,_?.lastEventAt,_?.started_at,_?.startedAt,_?.type,_?.tool_name,_?.tool_args]),u(()=>{if(!(_?.type==="tool_call"||_?.type==="tool_status")||!N0){Z0(null);return}let O0=!0;return J7(N0).then((D0)=>{if(!O0)return;if(D0?.branch)Z0({branch:D0.branch,repoPath:D0.repo_path||null,path:N0});else Z0(null)}).catch(()=>{if(O0)Z0(null)}),()=>{O0=!1}},[_?.type,N0]);let B0=_?.turn_id||q,W0=Oq(B0),d=e2({steerQueued:Q}),j0=($0)=>$0,A0=DL(_,{isLastActivity:K0}),f0=$8(_,{isLastActivity:K0}),b0=$8(null,{pendingRequest:!0}),c0=($0)=>$0==="warning"?"#f59e0b":$0==="error"?"var(--danger-color)":$0==="success"?"var(--success-color)":W0,X_=X?.kind||"info",l0=c0(X_),__=c0(_?.kind||(z0?"warning":"info")),P0=uO(_,{isLastActivity:K0}),p0=RO(_,h),R0=_0?.repoPath||"",d0=_0?.branch||"",r0=_0?fO(R0,d0):"",U_=xO(_?.status_hints||_?.statusHints),o0=G0(()=>CO(U_),[U_]),h0=G0(()=>o0.filter(($0)=>$0?.key==="ssh"),[o0]),y0=G0(()=>o0.filter(($0)=>$0?.key!=="ssh"),[o0]);if((!B||!y)&&(!N||!x))return null;let V_=({panelTitle:$0,text:O0,fullText:D0,totalLines:v0,maxLines:m0,titleClass:s,panelKey:o})=>{let t=P.has(o),Y0=D0||O0||"",L0=o==="thought"||o==="draft"?M(Y0):Y0,k0=typeof m0==="number",t0=t&&k0,g0=k0?O(L0,m0,v0):{text:L0||"",omitted:0,totalLines:Number.isFinite(v0)?v0:0};if(!L0&&!(Number.isFinite(g0.totalLines)&&g0.totalLines>0))return null;let U0=`agent-thinking-body${k0?" agent-thinking-body-collapsible":""}`,w0=k0?`--agent-thinking-collapsed-lines: ${m0};`:"";return F`
            <div
                class="agent-thinking"
                data-expanded=${t?"true":"false"}
                data-collapsible=${k0?"true":"false"}
                data-panel-key=${o||""}
                style=${W0?`--turn-color: ${W0};`:""}
            >
                <div class="agent-thinking-title ${s||""}">
                    ${W0&&F`<span class=${d} aria-hidden="true"></span>`}
                    ${$0}
                    ${t0&&F`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${$0} panel`}
                            onClick=${()=>b(o)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${U0}
                    style=${w0}
                    dangerouslySetInnerHTML=${{__html:$6(L0)}}
                />
                ${!t&&g0.omitted>0&&F`
                    <button class="agent-thinking-truncation" onClick=${()=>b(o)}>
                        ▸ ${g0.omitted} more lines
                    </button>
                `}
                ${t&&g0.omitted>0&&F`
                    <button class="agent-thinking-truncation" onClick=${()=>b(o)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},s0=Z?.tool_call?.title,O_=s0?`Awaiting approval: ${s0}`:"Awaiting approval",E0=SO(_,h),S0=($0,O0,D0=null)=>{let v0=P2($0),m0=dX($0,h),s=[D0,m0].filter(Boolean).join(" · "),o=e2({steerQueued:Q,pulsing:W$($0)||Boolean(m0)});return F`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${O0?`--turn-color: ${O0};`:""}
                title=${$0?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${O0&&F`<span class=${o} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${v0}</span>
                    ${s&&F`<span class="agent-status-elapsed">${s}</span>`}
                </div>
                ${$0.detail&&F`<div class="agent-thinking-body">${$0.detail}</div>`}
            </div>
        `},I0=($0,O0,D0,v0,m0,s,o,t=8,Y0=8)=>{let L0=Math.max(m0-v0,0.000000001),k0=Math.max(O0-t*2,1),t0=Math.max(D0-Y0*2,1),g0=Math.max(o-s,1),U0=o===s?O0/2:t+($0.run-s)/g0*k0,w0=Y0+(t0-($0.value-v0)/L0*t0);return{x:U0,y:w0}},a0=($0,O0,D0,v0,m0,s,o,t=8,Y0=8)=>{if(!Array.isArray($0)||$0.length===0)return"";return $0.map((L0,k0)=>{let{x:t0,y:g0}=I0(L0,O0,D0,v0,m0,s,o,t,Y0);return`${k0===0?"M":"L"} ${t0.toFixed(2)} ${g0.toFixed(2)}`}).join(" ")},A_=($0,O0="")=>{if(!Number.isFinite($0))return"—";return`${Math.abs($0)>=100?$0.toFixed(0):$0.toFixed(2).replace(/\.0+$/,"").replace(/(\.\d*[1-9])0+$/,"$1")}${O0}`},Q_=["var(--accent-color)","var(--success-color)","var(--warning-color, #f59e0b)","var(--danger-color)"],D_=($0,O0)=>{let D0=Q_;if(!Array.isArray(D0)||D0.length===0)return"var(--accent-color)";if(D0.length===1||!Number.isFinite(O0)||O0<=1)return D0[0];let m0=Math.max(0,Math.min(Number.isFinite($0)?$0:0,O0-1))/Math.max(1,O0-1)*(D0.length-1),s=Math.floor(m0),o=Math.min(D0.length-1,s+1),t=m0-s,Y0=D0[s],L0=D0[o];if(!L0||s===o||t<=0.001)return Y0;if(t>=0.999)return L0;let k0=Math.round((1-t)*1000)/10,t0=Math.round(t*1000)/10;return`color-mix(in oklab, ${Y0} ${k0}%, ${L0} ${t0}%)`},E_=($0,O0="autoresearch")=>{let D0=Array.isArray($0)?$0.map((U0)=>({...U0,points:Array.isArray(U0?.points)?U0.points.filter((w0)=>Number.isFinite(w0?.value)&&Number.isFinite(w0?.run)):[]})).filter((U0)=>U0.points.length>0):[],v0=D0.map((U0,w0)=>({...U0,color:D_(w0,D0.length)}));if(v0.length===0)return null;let m0=320,s=120,o=v0.flatMap((U0)=>U0.points),t=o.map((U0)=>U0.value),Y0=o.map((U0)=>U0.run),L0=Math.min(...t),k0=Math.max(...t),t0=Math.min(...Y0),g0=Math.max(...Y0);return F`
            <div class="agent-series-chart agent-series-chart-combined">
                <div class="agent-series-chart-header">
                    <span class="agent-series-chart-title">Tracked variables</span>
                    <span class="agent-series-chart-value">${v0.length} series</span>
                </div>
                <div class="agent-series-chart-plot">
                    <svg class="agent-series-chart-svg" viewBox=${`0 0 ${m0} ${s}`} preserveAspectRatio="none" aria-hidden="true">
                        ${v0.map((U0)=>{let w0=U0?.key||U0?.label||"series",j_=v?.panelKey===O0&&v?.seriesKey===w0;return F`
                                <g key=${w0}>
                                    <path
                                        class=${`agent-series-chart-line${j_?" is-hovered":""}`}
                                        d=${a0(U0.points,m0,s,L0,k0,t0,g0)}
                                        style=${`--agent-series-color: ${U0.color};`}
                                        onMouseEnter=${()=>l({panelKey:O0,seriesKey:w0})}
                                        onMouseLeave=${()=>l((u0)=>u0?.panelKey===O0&&u0?.seriesKey===w0?null:u0)}
                                    ></path>
                                </g>
                            `})}
                    </svg>
                    <div class="agent-series-chart-points-layer">
                        ${v0.flatMap((U0)=>{let w0=typeof U0?.unit==="string"?U0.unit:"",j_=U0?.key||U0?.label||"series";return U0.points.map((u0,G_)=>{let q_=I0(u0,m0,s,L0,k0,t0,g0);return F`
                                    <button
                                        key=${`${j_}-point-${G_}`}
                                        type="button"
                                        class="agent-series-chart-point-hit"
                                        style=${`--agent-series-color: ${U0.color}; left:${q_.x/m0*100}%; top:${q_.y/s*100}%;`}
                                        onMouseEnter=${()=>l({panelKey:O0,seriesKey:j_,run:u0.run,value:u0.value,unit:w0})}
                                        onMouseLeave=${()=>l((W_)=>W_?.panelKey===O0?null:W_)}
                                        onFocus=${()=>l({panelKey:O0,seriesKey:j_,run:u0.run,value:u0.value,unit:w0})}
                                        onBlur=${()=>l((W_)=>W_?.panelKey===O0?null:W_)}
                                        aria-label=${`${U0?.label||"Series"} ${A_(u0.value,w0)} at run ${u0.run}`}
                                    >
                                        <span class="agent-series-chart-point"></span>
                                    </button>
                                `})})}
                    </div>
                </div>
                <div class="agent-series-legend">
                    ${v0.map((U0)=>{let w0=U0.points[U0.points.length-1]?.value,j_=typeof U0?.unit==="string"?U0.unit:"",u0=U0?.key||U0?.label||"series",G_=v?.panelKey===O0&&v?.seriesKey===u0?v:null,q_=G_&&Number.isFinite(G_.value)?G_.value:w0,W_=G_&&typeof G_.unit==="string"?G_.unit:j_,i0=G_&&Number.isFinite(G_.run)?G_.run:null;return F`
                            <div key=${`${u0}-legend`} class=${`agent-series-legend-item${G_?" is-hovered":""}`} style=${`--agent-series-color: ${U0.color};`}>
                                <span class="agent-series-legend-swatch" style=${`--agent-series-color: ${U0.color};`}></span>
                                <span class="agent-series-legend-label">${U0?.label||"Series"}</span>
                                ${i0!==null&&F`<span class="agent-series-legend-run">run ${i0}</span>`}
                                <span class="agent-series-legend-value">${A_(q_,W_)}</span>
                            </div>
                        `})}
                </div>
            </div>
        `},y_=($0)=>{if(!$0)return null;let O0=typeof $0?.key==="string"?$0.key:`panel-${Math.random()}`,D0=P.has(O0),v0=$0?.title||"Extension status",m0=$0?.collapsed_text||"",s=String($0?.state||"").replace(/[-_]+/g," ").replace(/^./,(q_)=>q_.toUpperCase()),o=c0($0?.state==="completed"?"success":$0?.state==="failed"?"error":$0?.state==="stopped"?"warning":"info"),t=e2({steerQueued:Q,pulsing:$0?.state==="running"}),Y0=typeof $0?.detail_markdown==="string"?$0.detail_markdown.trim():"",L0=typeof $0?.last_run_text==="string"?$0.last_run_text.trim():"",k0=typeof $0?.tmux_command==="string"?$0.tmux_command.trim():"",t0=Array.isArray($0?.series)?$0.series:[],g0=Array.isArray($0?.actions)?$0.actions:[],U0=$0?.started_at?E6($0,h):null,w0=m0,j_=Boolean(Y0||k0||U0),u0=Boolean(Y0||t0.length>0||k0),G_=[v0,w0].filter(Boolean).join(" — ");return F`
            <div
                class="agent-thinking agent-thinking-intent agent-thinking-autoresearch"
                aria-live="polite"
                data-expanded=${D0?"true":"false"}
                style=${o?`--turn-color: ${o};`:""}
                title=${!D0?G_||v0:""}
            >
                <div class="agent-thinking-header agent-thinking-header-inline">
                    <button
                        class="agent-thinking-title intent agent-thinking-title-clickable"
                        type="button"
                        onClick=${()=>u0?b(O0):null}
                    >
                        ${o&&F`<span class=${t} aria-hidden="true"></span>`}
                        <span class="agent-thinking-title-text">${v0}</span>
                        ${w0&&F`<span class="agent-thinking-title-meta">${w0}</span>`}
                        ${U0&&F`<span class="agent-status-elapsed">${U0}</span>`}
                    </button>
                    ${(g0.length>0||u0)&&F`
                        <div class="agent-thinking-tools-inline">
                            ${g0.length>0&&F`
                                <div class="agent-thinking-actions agent-thinking-actions-inline">
                                    ${g0.map((q_)=>{let W_=`${O0}:${q_?.key||""}`,i0=L?.has?.(W_);return F`
                                            <button
                                                key=${W_}
                                                class=${`agent-thinking-action-btn${q_?.tone==="danger"?" danger":""}`}
                                                onClick=${()=>K?.($0,q_)}
                                                disabled=${Boolean(i0)}
                                            >
                                                ${i0?"Working…":q_?.label||"Run"}
                                            </button>
                                        `})}
                                </div>
                            `}
                            ${u0&&F`
                                <button
                                    class="agent-thinking-corner-toggle agent-thinking-corner-toggle-inline"
                                    type="button"
                                    aria-label=${`${D0?"Collapse":"Expand"} ${v0}`}
                                    title=${D0?"Collapse details":"Expand details"}
                                    onClick=${()=>b(O0)}
                                >
                                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        ${D0?F`<polyline points="4 6 8 10 12 6"></polyline>`:F`<polyline points="4 10 8 6 12 10"></polyline>`}
                                    </svg>
                                </button>
                            `}
                        </div>
                    `}
                </div>
                ${D0&&F`
                    <div class=${`agent-thinking-autoresearch-layout${j_?"":" chart-only"}`}>
                        ${j_&&F`
                            <div class="agent-thinking-autoresearch-meta-stack">
                                ${U0&&F`
                                    <div class="agent-thinking-autoresearch-elapsed">
                                        <span title="Experiment duration">⏱ ${U0}</span>
                                        ${$0?.last_activity_at&&$0?.state==="running"&&F`<span title="Since last activity">⟳ ${Mq($0.last_activity_at)} ago</span>`}
                                    </div>
                                `}
                                ${Y0&&F`
                                    <div
                                        class="agent-thinking-body agent-thinking-autoresearch-detail"
                                        dangerouslySetInnerHTML=${{__html:$6(Y0)}}
                                    />
                                `}
                                ${k0&&F`
                                    <div class="agent-series-chart-command">
                                        <div class="agent-series-chart-command-header">
                                            <span>Attach to session</span>
                                        </div>
                                        <div class="agent-series-chart-command-shell">
                                            <pre class="agent-series-chart-command-code">${k0}</pre>
                                            <button
                                                type="button"
                                                class="agent-series-chart-command-copy"
                                                aria-label="Copy tmux command"
                                                title="Copy tmux command"
                                                onClick=${()=>K?.($0,{key:"copy_tmux",action_type:"autoresearch.copy_tmux",label:"Copy tmux"})}
                                            >
                                                ${yO}
                                            </button>
                                        </div>
                                    </div>
                                `}
                            </div>
                        `}
                        ${t0.length>0?F`
                                <div class="agent-series-chart-stack">
                                    ${E_(t0,O0)}
                                    ${L0&&F`<div class="agent-series-chart-note">${L0}</div>`}
                                </div>
                            `:F`<div class="agent-thinking-body agent-thinking-autoresearch-summary">Variable history will appear after the first completed run.</div>`}
                    </div>
                `}
            </div>
        `};return F`
        <div class="agent-status-panel">
            ${B&&X&&S0(X,l0)}
            ${N&&Array.isArray(Y)&&Y.map(($0)=>y_($0))}
            ${B&&_?.type==="intent"&&S0(_,__,E0)}
            ${B&&Z&&F`
                <div class="agent-status agent-status-request" aria-live="polite" style=${W0?`--turn-color: ${W0};`:""}>
                    ${b0==="dot"&&F`<span class=${d} aria-hidden="true"></span>`}
                    ${b0==="spinner"&&F`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${O_}</span>
                </div>
            `}
            ${B&&k&&V_({panelTitle:j0("Planning"),text:T.text,fullText:T.fullText,totalLines:T.totalLines,panelKey:"plan"})}
            ${B&&W&&V_({panelTitle:j0("Draft"),text:A.text,fullText:A.fullText,totalLines:A.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${B&&z&&V_({panelTitle:j0("Thoughts"),text:I.text,fullText:I.fullText,totalLines:I.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${B&&_&&_?.type!=="intent"&&F`
                <div class=${`agent-status${K0?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}${r0||U_.length>0||p0?" agent-status-multiline":""}`} aria-live="polite" style=${W0?`--turn-color: ${W0};`:""}>
                    ${W0&&A0&&F`<span class=${d} aria-hidden="true"></span>`}
                    ${_?.type==="error"?F`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:f0==="spinner"&&F`<div class="agent-status-spinner"></div>`}
                    <div class="agent-status-copy">
                        <span class="agent-status-text">${P0}</span>
                        ${(r0||o0.length>0||p0)&&F`
                            <span class="agent-status-meta-row">
                                ${h0.map(($0)=>F`
                                    <span key=${$0.key} class="agent-status-hint-row" title=${$0.title||$0.label}>
                                        <span class="agent-status-hint-icon" dangerouslySetInnerHTML=${{__html:$0.iconSvg}}></span>
                                        <span class="agent-status-hint-label">${$0.label}</span>
                                    </span>
                                `)}
                                ${r0&&F`
                                    <span class="agent-status-git-row" title=${N0||r0}>
                                        <span class="agent-status-git-icon">${MO}</span>
                                        <span class="agent-status-git-label">
                                            ${R0&&F`<span class="agent-status-git-part">${R0}</span>`}
                                            ${R0&&d0&&F`<span class="agent-status-git-separator" aria-hidden="true">•</span>`}
                                            ${d0&&F`<span class="agent-status-git-part">${d0}</span>`}
                                        </span>
                                    </span>
                                `}
                                ${y0.map(($0)=>F`
                                    <span key=${$0.key} class="agent-status-hint-row" title=${$0.title||$0.label}>
                                        <span class="agent-status-hint-icon" dangerouslySetInnerHTML=${{__html:$0.iconSvg}}></span>
                                        <span class="agent-status-hint-label">${$0.label}</span>
                                    </span>
                                `)}
                                ${p0&&F`
                                    <span class="agent-status-hint-row agent-status-activity-row" title=${`${K0?"Recent activity":"Last event"} ${p0}`}>
                                        <span class="agent-status-hint-icon">${wO}</span>
                                        <span class="agent-status-hint-label">${p0}</span>
                                    </span>
                                `}
                            </span>
                        `}
                    </div>
                </div>
            `}
        </div>
    `}function wq({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:G,options:Z,chat_jid:X}=_,Y=G?.title||"Agent Request",L=G?.kind||"other",K=G?.rawInput||{},q=K.command||K.commands&&K.commands[0]||null,Q=K.diff||null,V=K.fileName||K.path||null,B=G?.description||K.description||K.explanation||null,U=(Array.isArray(G?.locations)?G.locations:[]).map((J)=>J?.path).filter((J)=>Boolean(J)),D=Array.from(new Set([V,...U].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:G,options:Z});let E=async(J)=>{try{await F5(j,J,X||null),$()}catch(O){console.error("Failed to respond to agent request:",O)}},H=async()=>{try{await W7(Y,`Auto-approved: ${Y}`),await F5(j,"approved",X||null),$()}catch(J){console.error("Failed to add to whitelist:",J)}},M=Z&&Z.length>0;return F`
        <div class="agent-request-modal">
            <div class="agent-request-content">
                <div class="agent-request-header">
                    <div class="agent-request-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                    </div>
                    <div class="agent-request-title">${Y}</div>
                </div>
                ${(B||q||Q||D.length>0)&&F`
                    <div class="agent-request-body">
                        ${B&&F`
                            <div class="agent-request-description">${B}</div>
                        `}
                        ${D.length>0&&F`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${D.map((J,O)=>F`<li key=${O}>${J}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${q&&F`
                            <pre class="agent-request-command">${q}</pre>
                        `}
                        ${Q&&F`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${Q}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${M?Z.map((J)=>F`
                            <button 
                                key=${J.optionId||J.id||String(J)}
                                class="agent-request-btn ${J.kind==="allow_once"||J.kind==="allow_always"?"primary":""}"
                                onClick=${()=>E(J.optionId||J.id||J)}
                            >
                                ${J.name||J.label||J.optionId||J.id||String(J)}
                            </button>
                        `):F`
                        <button class="agent-request-btn primary" onClick=${()=>E("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>E("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${H}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}T0();T0();f_();function y6(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>y6($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${y6(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function Tq(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:y6(j)})).filter(($)=>$.value)}function gO(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function g9(_){if(!Array.isArray(_))return[];return _.filter(gO)}function V8(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let G=y6(j);return G?`Card submission: ${$} — ${G}`:`Card submission: ${$}`}if(typeof j==="object"){let Z=Tq(j).map(({key:X,value:Y})=>`${X}: ${Y}`);return Z.length>0?`Card submission: ${$} — ${Z.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function xq(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=Tq(_.data),G=j.length>0?j.slice(0,2).map(({key:X,value:Y})=>`${X}: ${Y}`).join(", "):y6(_.data)||null,Z=j.length;return{title:$,summary:G,fields:j,fieldCount:Z,submittedAt:_.submitted_at}}function P_(_){return typeof _==="string"?_.trim():""}function Iq(_){return _.map(($)=>String($||"").trim()).filter(Boolean).join(`

`).replace(/\n{3,}/g,`

`).trim()}function bO(_,$){let j=[],G=[],Z=[];if(_.forEach((X,Y)=>{if(!X||typeof X!=="object")return;let L=P_(X.type);if(L==="text"){let K=P_(X.text)||P_(X.content);if(K)j.push(K);return}if(L==="resource_link"){let K=P_(X.uri),q=P_(X.title)||P_(X.name)||K;if(K&&q)j.push(q===K?K:`[${q}](${K})`);return}if(L==="resource"){let K=P_(X.title)||P_(X.name)||P_(X.uri)||"Embedded resource",q=P_(X.text);if(q)j.push(`### ${K}

\`\`\`
${q}
\`\`\``);else j.push(`### ${K}`);return}if(L==="generated_widget"){let K=P_(X.title)||P_(X.name)||"Generated widget",q=P_(X.description)||P_(X.subtitle);j.push(Iq([`### ${K}`,q]));return}if(L==="adaptive_card"&&P_(X.fallback_text)){j.push(P_(X.fallback_text));return}if(L==="adaptive_card_submission"){let K=V8(X);if(P_(K))j.push(P_(K));return}if(L==="file"){let K=P_(X.name)||P_(X.filename)||P_(X.title)||`attachment:${$[Y]??Y+1}`;G.push(`- ${K}`);return}if(L==="image"||!L){let K=P_(X.name)||P_(X.filename)||P_(X.title)||`attachment:${$[Y]??Y+1}`;Z.push(`- ${K}`)}}),Z.length>0)j.push(`Images:
${Z.join(`
`)}`);if(G.length>0)j.push(`Attachments:
${G.join(`
`)}`);return Iq(j)}function Q8(_){let $=_?.data||{},j=typeof $.content==="string"?$.content.replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd():"";if(j.trim())return j;let G=Array.isArray($.content_blocks)?$.content_blocks:[],Z=Array.isArray($.media_ids)?$.media_ids:[];return bO(G,Z)}function Cq(_,$,j){try{return _.setAttribute($,j),!0}catch(G){return!1}}function fq(_,$){try{return _[$]=!0,!0}catch(j){return!1}}function Pq(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;if(Cq(j,"aria-disabled","true"),Cq(j,"tabindex","-1"),"disabled"in j)fq(j,"disabled");if("readOnly"in j)fq(j,"readOnly")}}function vO(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let G=j[1].length===3?j[1].split("").map((Z)=>`${Z}${Z}`).join(""):j[1];return{r:parseInt(G.slice(0,2),16),g:parseInt(G.slice(2,4),16),b:parseInt(G.slice(4,6),16)}}function mO(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let G=Number(j[1]),Z=Number(j[2]),X=Number(j[3]);if(![G,Z,X].every((Y)=>Number.isFinite(Y)))return null;return{r:G,g:Z,b:X}}function Rq(_){return vO(_)||mO(_)}function N8(_){let $=(X)=>{let Y=X/255;return Y<=0.03928?Y/12.92:((Y+0.055)/1.055)**2.4},j=$(_.r),G=$(_.g),Z=$(_.b);return 0.2126*j+0.7152*G+0.0722*Z}function cO(_,$){let j=Math.max(N8(_),N8($)),G=Math.min(N8(_),N8($));return(j+0.05)/(G+0.05)}function lO(_,$,j="#ffffff"){let G=Rq(_);if(!G)return j;let Z=j,X=-1;for(let Y of $){let L=Rq(Y);if(!L)continue;let K=cO(G,L);if(K>X)Z=Y,X=K}return Z}function b9(){let _=getComputedStyle(document.documentElement),$=(U,D)=>{for(let E of U){let H=_.getPropertyValue(E).trim();if(H)return H}return D},j=$(["--text-primary","--color-text"],"#0f1419"),G=$(["--text-secondary","--color-text-muted"],"#536471"),Z=$(["--bg-primary","--color-bg-primary"],"#ffffff"),X=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),Y=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),L=$(["--accent-color","--color-accent"],"#1d9bf0"),K=$(["--success-color","--color-success"],"#00ba7c"),q=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),Q=$(["--danger-color","--color-error"],"#f4212e"),V=$(["--border-color","--color-border"],"#eff3f4"),B=$(["--font-family"],"system-ui, sans-serif"),N=lO(L,[j,Z],j);return{fg:j,fgMuted:G,bgPrimary:Z,bg:X,bgEmphasis:Y,accent:L,good:K,warning:q,attention:Q,border:V,fontFamily:B,buttonTextColor:N}}function Sq(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:G,accent:Z,good:X,warning:Y,attention:L,border:K,fontFamily:q}=b9();return{fontFamily:q,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:X,subtle:X},warning:{default:Y,subtle:Y},attention:{default:L,subtle:L}}},emphasis:{backgroundColor:G,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:X,subtle:X},warning:{default:Y,subtle:Y},attention:{default:L,subtle:L}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:K},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var hO=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),uq=!1,B8=null,gq=!1;function v9(_){_.querySelector(".adaptive-card-notice")?.remove()}function nO(_,$,j="error"){v9(_);let G=document.createElement("div");G.className=`adaptive-card-notice adaptive-card-notice-${j}`,G.textContent=$,_.appendChild(G)}function pO(_,$=(j)=>Z1(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function rO(_=($)=>Z1($,null)){return($,j)=>{try{let G=pO($,_);j.outputHtml=G.outputHtml,j.didProcess=G.didProcess}catch(G){console.error("[adaptive-card] Failed to process markdown:",G),j.outputHtml=String($??""),j.didProcess=!1}}}function dO(_){if(gq||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=rO(),gq=!0}async function iO(){if(uq)return;if(B8)return B8;return B8=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{uq=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),B8}function oO(){return globalThis.AdaptiveCards}function sO(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function aO(_){return hO.has(_)}function c9(_){if(!Array.isArray(_))return[];return _.filter(sO)}function tO(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",G=(typeof _?.url==="string"?_.url:"")||void 0,Z=_?.data??void 0;return{type:$,title:j,data:Z,url:G,raw:_}}function m9(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>m9($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,G])=>`${j}: ${m9(G)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function eO(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return m9($);return typeof $==="string"?$:String($)}function _J(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,G=(Z)=>{if(Array.isArray(Z))return Z.map((L)=>G(L));if(!Z||typeof Z!=="object")return Z;let Y={...Z};if(typeof Y.id==="string"&&Y.id in j&&String(Y.type||"").startsWith("Input."))Y.value=eO(Y.type,j[Y.id],Y);for(let[L,K]of Object.entries(Y))if(Array.isArray(K)||K&&typeof K==="object")Y[L]=G(K);return Y};return G(_)}function $J(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function jJ(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,G=j&&typeof j.title==="string"?j.title.trim():"",Z=$J(_.completed_at||j?.submitted_at),X=[G||null,Z||null].filter(Boolean).join(" · ")||null;return{label:$,detail:X}}async function bq(_,$,j){if(!aO($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await iO()}catch(G){return console.error("[adaptive-card] Failed to load SDK:",G),!1}try{let G=oO();dO(G);let Z=new G.AdaptiveCard,X=b9();Z.hostConfig=new G.HostConfig(Sq());let Y=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,L=$.state==="active"?$.payload:_J($.payload,Y);Z.parse(L),Z.onExecuteAction=(Q)=>{let V=tO(Q);if(j?.onAction)v9(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(V)).catch((B)=>{console.error("[adaptive-card] Action failed:",B);let N=B instanceof Error?B.message:String(B||"Action failed.");nO(_,N||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",V)};let K=Z.render();if(!K)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",X.buttonTextColor);let q=jJ($);if(q){_.classList.add("adaptive-card-finished");let Q=document.createElement("div");Q.className=`adaptive-card-status adaptive-card-status-${$.state}`;let V=document.createElement("span");if(V.className="adaptive-card-status-label",V.textContent=q.label,Q.appendChild(V),q.detail){let B=document.createElement("span");B.className="adaptive-card-status-detail",B.textContent=q.detail,Q.appendChild(B)}_.appendChild(Q)}if(v9(_),_.appendChild(K),q)Pq(K);return!0}catch(G){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,G),!1}}T0();S2();function vq({src:_,onClose:$}){return u(()=>{let j=(G)=>{if(G.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),F`
        <${r$} className="image-modal-portal-root">
            <div class="image-modal" onClick=${$}>
                <img src=${_} alt="Full size" />
            </div>
        </${r$}>
    `}var F8=0,l9=null,M6={activePostId:null,speaking:!1},h9=new Set;function p9(_={}){return _.window??(typeof window<"u"?window:null)}function mq(_={}){return p9(_)?.speechSynthesis||null}function n9(){let _={...M6};for(let $ of h9)try{$(_)}catch(j){console.warn("[post-speech] playback listener failed:",j)}}function r9(){return{...M6}}function cq(_){if(typeof _!=="function")return()=>{};return h9.add(_),_(r9()),()=>h9.delete(_)}function lq(_={}){let $=p9(_);return Boolean($&&$.speechSynthesis&&typeof $.SpeechSynthesisUtterance==="function")}function hq(_){let $=Q8(_);if(!$)return"";return String($).replace(/```[\s\S]*?```/g," Code block omitted. ").replace(/`([^`]+)`/g,"$1").replace(/!\[([^\]]*)\]\(([^)]+)\)/g,"$1").replace(/\[([^\]]+)\]\(([^)]+)\)/g,"$1").replace(/^#{1,6}\s+/gm,"").replace(/^>\s?/gm,"").replace(/^[-*+]\s+/gm,"• ").replace(/\n{3,}/g,`

`).replace(/\n\n+/g,". ").replace(/\s+/g," ").replace(/\s+([.,;:!?])/g,"$1").trim().slice(0,1600)}function nq(_={}){let $=mq(_);if(F8+=1,l9=null,M6={activePostId:null,speaking:!1},$)try{$.cancel()}catch(j){console.warn("[post-speech] cancel failed:",j)}n9()}function pq(_,$,j={}){let G=p9(j),Z=mq(j);if(!G||!Z||typeof G.SpeechSynthesisUtterance!=="function")return!1;let X=String($||"").trim();if(!X)return!1;let Y=F8+1;F8=Y;try{Z.cancel()}catch{}let L=new G.SpeechSynthesisUtterance(X);l9=L,M6={activePostId:_,speaking:!0},n9();let K=()=>{if(Y!==F8)return;l9=null,M6={activePostId:null,speaking:!1},n9()};L.onend=K,L.onerror=K;try{return Z.speak(L),!0}catch(q){return console.warn("[post-speech] speak failed:",q),K(),!1}}async function dq(_,$){try{return await _?.writeText?.($),!0}catch(j){return!1}}function d9(_,$){let j=typeof $?.text==="string"?$.text:"",G=typeof $?.html==="string"?$.html:"";if(!_||!j||typeof _.createElement!=="function"||typeof _.execCommand!=="function")return!1;let Z=null,X=!1,Y=(L)=>{let K=L?.clipboardData;if(!K||typeof K.setData!=="function")return;if(K.setData("text/plain",j),G)K.setData("text/html",G);if(typeof L.preventDefault==="function")L.preventDefault();X=!0};try{if(Z=_.createElement("textarea"),Z.value=j,typeof Z.setAttribute==="function")Z.setAttribute("readonly","");if(Z.style)Z.style.position="fixed",Z.style.opacity="0",Z.style.pointerEvents="none";if(_.body?.appendChild?.(Z),typeof Z.select==="function")Z.select();if(typeof Z.setSelectionRange==="function")Z.setSelectionRange(0,Z.value.length);_.addEventListener?.("copy",Y,!0);let L=_.execCommand("copy");return Boolean(X||L)}catch{return!1}finally{if(_.removeEventListener?.("copy",Y,!0),Z)_.body?.removeChild?.(Z)}}function rq(_){if(!_||typeof _!=="object")return null;let $=_;if(typeof $.nodeType==="number"&&$.nodeType===3)return $.parentNode||null;return $}function iq(_,$){let j=_?.clipboardData,G=$?.root,Z=$?.selection;if(!j||typeof j.setData!=="function"||!G||!Z)return!1;if(Z.isCollapsed)return!1;let X=!1;if(Number(Z.rangeCount||0)>0&&typeof Z.getRangeAt==="function")try{let K=Z.getRangeAt(0);if(K&&typeof K.intersectsNode==="function")X=Boolean(K.intersectsNode(G))}catch{X=!1}if(!X&&typeof G.contains==="function"){let K=rq(Z.anchorNode),q=rq(Z.focusNode);X=Boolean(K&&G.contains(K)||q&&G.contains(q))}if(!X)return!1;let L=typeof Z.toString==="function"?String(Z.toString()||"").replace(/\u00a0/g," "):"";if(!L)return!1;return j.setData("text/plain",L),_?.preventDefault?.(),!0}function oq(_,$){try{return Boolean(_?.getItem?.($))}catch(j){return!1}}function sq(_,$,j){try{return _?.setItem?.($,j),!0}catch(G){return!1}}function aq(_,$){let j=typeof _==="string"&&_.trim()?_.trim():null;if(j)return j;if(!$)return null;try{return new URL($).hostname}catch(G){return $}}function GJ({mediaId:_,onPreview:$}){let[j,G]=C(null);if(u(()=>{M2(_).then(G).catch((q)=>{console.warn("[post] Failed to load attachment metadata for file card:",_,q)})},[_]),!j)return null;let Z=j.filename||"file",X=j.metadata?.size,Y=X?e_(X):"",K=k6(j.content_type,j.filename)!=="unsupported";return F`
        <div class="file-attachment" onClick=${(q)=>q.stopPropagation()}>
            <a href=${u1(_)} download=${Z} class="file-attachment-main">
                <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                </svg>
                <div class="file-info">
                    <span class="file-name">${Z}</span>
                    <span class="file-meta-row">
                        ${Y&&F`<span class="file-size">${Y}</span>`}
                        ${j.content_type&&F`<span class="file-size">${j.content_type}</span>`}
                    </span>
                </div>
                <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
            </a>
            ${K&&F`
                <button
                    class="file-attachment-preview"
                    type="button"
                    onClick=${(q)=>{q.preventDefault(),q.stopPropagation(),$?.({mediaId:_,info:j})}}
                >
                    Preview
                </button>
            `}
        </div>
    `}function ZJ(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="recovery_marker"&&$.recovered)}function XJ(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="timeout_marker"&&($.timed_out??!0))}function YJ(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="turn_outcome_marker")}function LJ(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="peer_message")}function qJ(_){return String(_||"").split(/[:/]/).filter(Boolean).pop()||"agent"}function tq(_){let $=LJ(_)[0]||null;if(!$)return null;let j=typeof $.source_chat_jid==="string"?$.source_chat_jid.trim():"",G=typeof $.source_agent_name==="string"&&$.source_agent_name.trim()?$.source_agent_name.trim():qJ(j),Z=typeof $.target_chat_jid==="string"?$.target_chat_jid.trim():"",X=typeof $.target_agent_name==="string"?$.target_agent_name.trim():"",Y=typeof $.body==="string"?$.body:"";return{block:$,sourceChatJid:j,sourceAgentName:G,targetChatJid:Z,targetAgentName:X,body:Y}}function KJ(_,$){let j=tq($),G=typeof _==="string"?_:"";if(!j)return G;if(j.body&&j.body.trim())return j.body;let Z=j.sourceAgentName?j.sourceAgentName.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"):"[^\\s>]+",X=j.sourceChatJid?j.sourceChatJid.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"):"[^>\\n]+";return G.replace(new RegExp(`^from:\\s+@${Z}\\s+<jid:${X}>\\s*\\n\\n`,"i"),"")||G}var VJ={context_recover:"context limit exceeded",rate_limit:"rate limit hit",api_error:"API error",timeout:"request timeout",overloaded:"service overloaded",connection:"connection error"};function QJ(_){let $=Number(_?.attempts_used||0),j=String(_?.classifier||"").trim(),G=VJ[j]||(j?j.replace(/_/g," "):""),Z=["Recovered automatically"];if($>1)Z[0]=`Recovered after ${$} attempts`;if(G)Z.push(G);return Z.join(" — ")}function NJ(_){let $=typeof _?.tool_action_summary==="string"?_.tool_action_summary.trim():"",j=_?.draft_recovered?" Showing recovered draft.":"";return $?`Turn timed out — ${$}${j}`:`Turn timed out before the model finished responding${j}`}function BJ({marker:_}){let[$,j]=C(!1),G=f((V)=>{V.stopPropagation(),j((B)=>!B)},[]),Z=typeof _?.title==="string"?_.title.trim():"",X=typeof _?.detail==="string"?_.detail.trim():"",Y=typeof _?.tool_action_summary==="string"?_.tool_action_summary.trim():"",L=_?.draft_recovered,K=String(_?.severity||"warning"),q=Y||Z||String(_?.label||_?.kind||"issue"),Q=Boolean(X||Z&&Y);return F`
        <div class=${`post-outcome-pill post-outcome-pill-${K}`}>
            <div class="post-outcome-pill-header" onClick=${Q?G:void 0}>
                ${Q&&F`
                    <span class=${`post-outcome-pill-toggle${$?" expanded":""}`} aria-hidden="true">▶</span>
                `}
                <span class="post-outcome-pill-label">${q}</span>
                ${L&&F`<span class="post-outcome-pill-badge">draft recovered</span>`}
            </div>
            ${$&&Q&&F`
                <div class="post-outcome-pill-detail">
                    ${Z&&F`<div><strong>${Z}</strong></div>`}
                    ${X&&X!==Z&&F`<div>${X}</div>`}
                </div>
            `}
        </div>
    `}function FJ({attachment:_,onPreview:$}){let j=Number(_?.id),[G,Z]=C(null);u(()=>{if(!Number.isFinite(j))return;M2(j).then(Z).catch((Q)=>{console.warn("[post] Failed to load attachment metadata for attachment pill:",j,Q)});return},[j]);let X=G?.filename||_.label||`attachment-${_.id}`,Y=Number.isFinite(j)?u1(j):null,L=k6(G?.content_type,G?.filename||_?.label),K=q8(L),q=L!=="unsupported";return F`
        <span class="attachment-pill" title=${X}>
            ${Y?F`
                    <a href=${Y} download=${X} class="attachment-pill-main" onClick=${(Q)=>Q.stopPropagation()}>
                        <${L1}
                            prefix="post"
                            label=${_.label}
                            title=${X}
                        />
                    </a>
                `:F`
                    <${L1}
                        prefix="post"
                        label=${_.label}
                        title=${X}
                    />
                `}
            ${Number.isFinite(j)&&G&&q&&F`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${K}
                    onClick=${(Q)=>{Q.preventDefault(),Q.stopPropagation(),$?.({mediaId:j,info:G})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function U8({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:G}=_,Z=G?w4(G):null;return F`
        <div class="content-annotations">
            ${$&&$.length>0&&F`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof j==="number"&&F`
                <span class="content-annotation">Priority: ${j}</span>
            `}
            ${Z&&F`
                <span class="content-annotation">Updated: ${Z}</span>
            `}
        </div>
    `}function UJ({block:_}){let $=_.title||_.name||_.uri,j=_.description,G=_.size?e_(_.size):"",Z=_.mime_type||"",X=DJ(Z),Y=O4(_.uri);return F`
        <a
            href=${Y||"#"}
            class="resource-link"
            target=${Y?"_blank":void 0}
            rel=${Y?"noopener noreferrer":void 0}
            onClick=${(L)=>L.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${X}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${j&&F`<div class="resource-link-description">${j}</div>`}
                <div class="resource-link-meta">
                    ${Z&&F`<span>${Z}</span>`}
                    ${G&&F`<span>${G}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function HJ({block:_}){let[$,j]=C(!1),G=_.uri||"Embedded resource",Z=_.text||"",X=Boolean(_.data),Y=_.mime_type||"";return F`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(L)=>{L.preventDefault(),L.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${G}
            </button>
            ${$&&F`
                ${Z&&F`<pre class="resource-embed-content">${Z}</pre>`}
                ${X&&F`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${Y&&F`<span class="resource-embed-blob-meta">${Y}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(L)=>{L.preventDefault(),L.stopPropagation();let K=new Blob([Uint8Array.from(atob(_.data),(V)=>V.charCodeAt(0))],{type:Y||"application/octet-stream"}),q=URL.createObjectURL(K),Q=document.createElement("a");Q.href=q,Q.download=G.split("/").pop()||"resource",Q.click(),URL.revokeObjectURL(q)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function EJ({block:_,post:$,onOpenWidget:j}){if(!_)return null;let G=C9(_,$),Z=hL(_),X=G?.artifact?.kind||_?.artifact?.kind||_?.kind||null,Y=G?.title||_.title||_.name||"Generated widget",L=G?.description||_.description||_.subtitle||"",K=_.open_label||"Open widget",q=g(!1),Q=(V)=>{if(V)V.preventDefault(),V.stopPropagation();if(!G)return;j?.(G)};return u(()=>{if(!_?.auto_open||!G||!Z||q.current)return;let V=$?.timestamp?new Date($.timestamp).getTime():0;if(V&&Date.now()-V>1e4)return;let B=`widget_opened_${_.widget_id||$?.id||""}`;if(oq(sessionStorage,B))return;q.current=!0,sq(sessionStorage,B,"1"),j?.(G)},[_?.auto_open,G,Z]),F`
        <div class="generated-widget-launch" onClick=${(V)=>V.stopPropagation()}>
            <div class="generated-widget-launch-header">
                <div class="generated-widget-launch-eyebrow">Generated widget${X?` • ${String(X).toUpperCase()}`:""}</div>
                <div class="generated-widget-launch-title">${Y}</div>
            </div>
            ${L&&F`<div class="generated-widget-launch-description">${L}</div>`}
            <div class="generated-widget-launch-actions">
                <button
                    class="generated-widget-launch-btn"
                    type="button"
                    disabled=${!Z}
                    onClick=${Q}
                    title=${Z?"Open widget in a floating pane":"Unsupported widget artifact"}
                >
                    ${K}
                </button>
                <span class="generated-widget-launch-note">
                    ${Z?"Opens in a dismissible floating pane.":"This widget artifact is missing or unsupported."}
                </span>
            </div>
        </div>
    `}function DJ(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function WJ(_){let $=O4(_,{allowDataImage:!0});return $?{backgroundImage:`url("${$}")`}:void 0}function zJ({preview:_}){let $=O4(_.url),j=WJ(_.image),G=aq(_.site_name,$);return F`
        <a
            href=${$||"#"}
            class="link-preview ${j?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(Z)=>Z.stopPropagation()}
            style=${j}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${G||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&F`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function OJ(_,$){return typeof _==="string"?_:""}var eq=1800,JJ=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,AJ=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,kJ=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`,yJ=`
<style>
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 1.6;
    color: #1a1a1a;
  }
  h1 { font-size: 1.6em; font-weight: 700; margin: 0.6em 0 0.4em; }
  h2 { font-size: 1.35em; font-weight: 700; margin: 0.6em 0 0.4em; }
  h3 { font-size: 1.15em; font-weight: 700; margin: 0.5em 0 0.3em; }
  h4, h5, h6 { font-size: 1em; font-weight: 700; margin: 0.5em 0 0.3em; }
  p { margin: 0.5em 0; }
  pre {
    background: #f6f8fa;
    border: 1px solid #d0d7de;
    border-radius: 6px;
    padding: 12px 16px;
    overflow-x: auto;
    margin: 0.5em 0;
  }
  code {
    font-family: "Fira Code", "Cascadia Code", Consolas, "Courier New", monospace;
    font-size: 0.9em;
  }
  pre code { background: none; padding: 0; border: none; }
  :not(pre) > code { background: #f0f2f5; padding: 2px 5px; border-radius: 3px; }
  blockquote { border-left: 3px solid #d0d7de; margin: 0.5em 0; padding-left: 12px; color: #57606a; }
  table { border-collapse: collapse; margin: 0.5em 0; }
  th, td { border: 1px solid #d0d7de; padding: 6px 12px; text-align: left; }
  th { background: #f6f8fa; font-weight: 600; }
  ul, ol { margin: 0.4em 0; padding-left: 1.8em; }
  li { margin: 0.15em 0; }
  a { color: #0969da; text-decoration: none; }
  hr { border: none; border-top: 1px solid #d0d7de; margin: 1em 0; }
  img { max-width: 100%; }
</style>`;async function _K(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(d9(document,{text:$}))return!0;if(await dq(navigator.clipboard,$))return!0;try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let G=document.execCommand("copy");return document.body.removeChild(j),G}catch{return!1}}async function MJ(_){let $=typeof _==="string"?_:"";if(!$)return!1;let j=Z1($,null),G=`<html><head>${yJ}</head><body>${j}</body></html>`;if(d9(document,{text:$,html:G}))return!0;if(navigator.clipboard?.write&&typeof ClipboardItem<"u")try{let Z=new ClipboardItem({"text/plain":new Blob([$],{type:"text/plain"}),"text/html":new Blob([G],{type:"text/html"})});return await navigator.clipboard.write([Z]),!0}catch(Z){console.warn("[post] Rich clipboard write failed, falling back to plain text copy.",Z)}return _K($)}function wJ(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((Y)=>Y.querySelector("code"));if($.length===0)return()=>{};let j=new Map,G=[],Z=(Y)=>{let L=window.getSelection?.();if(!L||L.isCollapsed)return;for(let K of $)if(iq(Y,{root:K,selection:L}))return};document.addEventListener("copy",Z,!0),G.push(()=>document.removeEventListener("copy",Z,!0));let X=(Y,L)=>{let K=L||"idle";if(Y.dataset.copyState=K,K==="success")Y.innerHTML=AJ,Y.setAttribute("aria-label","Copied"),Y.setAttribute("title","Copied"),Y.classList.add("is-success"),Y.classList.remove("is-error");else if(K==="error")Y.innerHTML=kJ,Y.setAttribute("aria-label","Copy failed"),Y.setAttribute("title","Copy failed"),Y.classList.add("is-error"),Y.classList.remove("is-success");else Y.innerHTML=JJ,Y.setAttribute("aria-label","Copy code"),Y.setAttribute("title","Copy code"),Y.classList.remove("is-success","is-error")};return $.forEach((Y)=>{let L=document.createElement("div");L.className="post-code-block",Y.parentNode?.insertBefore(L,Y),L.appendChild(Y);let K=document.createElement("button");K.type="button",K.className="post-code-copy-btn",X(K,"idle"),L.appendChild(K);let q=async(Q)=>{Q.preventDefault(),Q.stopPropagation();let B=Y.querySelector("code")?.textContent||"",N=await _K(B);X(K,N?"success":"error");let U=j.get(K);if(U)clearTimeout(U);let D=setTimeout(()=>{X(K,"idle"),j.delete(K)},eq);j.set(K,D)};K.addEventListener("click",q),G.push(()=>{K.removeEventListener("click",q);let Q=j.get(K);if(Q)clearTimeout(Q);if(L.parentNode)L.parentNode.insertBefore(Y,L),L.remove()})}),()=>{G.forEach((Y)=>Y())}}function $K(_){let $=String(_||"").trim(),j=$.match(/^`([^`]+)`$/);return(j?j[1]:$).trim()}function TJ(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let q=0;q<j.length;q+=1)if(j[q].trim()==="Files:"&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){G=q;break}if(G===-1)return{content:_,fileRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let q=j[X];if(/^\s*-\s+/.test(q)){let Q=$K(q.replace(/^\s*-\s+/,"").trim());if(Q)Z.push(Q)}else if(!q.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let Y=j.slice(0,G),L=j.slice(X),K=[...Y,...L].join(`
`);return K=K.replace(/\n{3,}/g,`

`).trim(),{content:K,fileRefs:Z}}function xJ(_){if(!_)return{content:_,folderRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let q=0;q<j.length;q+=1)if(j[q].trim()==="Folders:"&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){G=q;break}if(G===-1)return{content:_,folderRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let q=j[X];if(/^\s*-\s+/.test(q)){let Q=$K(q.replace(/^\s*-\s+/,"").trim());if(Q)Z.push(Q)}else if(!q.trim())break;else break}if(Z.length===0)return{content:_,folderRefs:[]};let Y=j.slice(0,G),L=j.slice(X),K=[...Y,...L].join(`
`);return K=K.replace(/\n{3,}/g,`

`).trim(),{content:K,folderRefs:Z}}function IJ(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let q=0;q<j.length;q+=1)if(j[q].trim()==="Referenced messages:"&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){G=q;break}if(G===-1)return{content:_,messageRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let q=j[X];if(/^\s*-\s+/.test(q)){let V=q.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(V)Z.push(V[1])}else if(!q.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let Y=j.slice(0,G),L=j.slice(X),K=[...Y,...L].join(`
`);return K=K.replace(/\n{3,}/g,`

`).trim(),{content:K,messageRefs:Z}}function CJ(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let q=0;q<j.length;q+=1){let Q=j[q].trim();if((Q==="Images:"||Q==="Attachments:")&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){G=q;break}}if(G===-1)return{content:_,attachments:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let q=j[X];if(/^\s*-\s+/.test(q)){let Q=q.replace(/^\s*-\s+/,"").trim(),V=Q.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||Q.match(/^attachment:([^\s]+)\s+(.+)$/i);if(V){let B=V[1],N=(V[2]||"").trim()||B;Z.push({id:B,label:N,raw:Q})}else Z.push({id:null,label:Q,raw:Q})}else if(!q.trim())break;else break}if(Z.length===0)return{content:_,attachments:[]};let Y=j.slice(0,G),L=j.slice(X),K=[...Y,...L].join(`
`);return K=K.replace(/\n{3,}/g,`

`).trim(),{content:K,attachments:Z}}function fJ(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function PJ(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let G=j.map(fJ).sort((Q,V)=>V.length-Q.length),Z=new RegExp(`(${G.join("|")})`,"gi"),X=new RegExp(`^(${G.join("|")})$`,"i"),Y=new DOMParser().parseFromString(_,"text/html"),L=Y.createTreeWalker(Y.body,NodeFilter.SHOW_TEXT),K=[],q;while(q=L.nextNode())K.push(q);for(let Q of K){let V=Q.nodeValue;if(!V||!Z.test(V)){Z.lastIndex=0;continue}Z.lastIndex=0;let B=Q.parentElement;if(B&&B.closest("code, pre, script, style"))continue;let N=V.split(Z).filter((D)=>D!=="");if(N.length===0)continue;let U=Y.createDocumentFragment();for(let D of N)if(X.test(D)){let E=Y.createElement("mark");E.className="search-highlight-term",E.textContent=D,U.appendChild(E)}else U.appendChild(Y.createTextNode(D));Q.parentNode.replaceChild(U,Q)}return Y.body.innerHTML}function jK({post:_,onClick:$,onHashtagClick:j,onMessageRef:G,onScrollToMessage:Z,agentName:X,agentAvatarUrl:Y,userName:L,userAvatarUrl:K,userAvatarBackground:q,onDelete:Q,isThreadReply:V,isThreadPrev:B,isThreadNext:N,isRemoving:U,highlightQuery:D,onFileRef:E,onOpenWidget:H,onOpenAttachmentPreview:M}){let[J,O]=C(null),[T,I]=C("idle"),[A,k]=C(()=>r9()),z=g(null),W=g(null),y=_.data,x=y.type==="agent_response",P=L||"You",S=x?X||Dq:P,v=typeof _.chat_agent_name==="string"?_.chat_agent_name.trim():"",l=Boolean(x&&D&&v&&v!==S),h=x?R9(X,Y,!0):R9(P,K),r=typeof q==="string"?q.trim().toLowerCase():"",b=!x&&h.image&&(r==="clear"||r==="transparent"),e=x&&Boolean(h.image),z0=`background-color: ${b||e?"transparent":h.color}`,K0=y.content_meta,q0=Boolean(K0?.truncated),X0=Boolean(K0?.preview),N0=q0&&!X0,_0=q0?{originalLength:Number.isFinite(K0?.original_length)?K0.original_length:y.content?y.content.length:0,maxLength:Number.isFinite(K0?.max_length)?K0.max_length:0}:null,Z0=y.content_blocks||[],B0=y.media_ids||[],W0=tq(Z0),d=Boolean(W0?.sourceAgentName),j0=OJ(y.content,y.link_previews);j0=KJ(j0,Z0);let{content:A0,fileRefs:f0}=TJ(j0),{content:b0,folderRefs:c0}=xJ(A0),{content:X_,messageRefs:l0}=IJ(b0),__=(i)=>{i?.preventDefault?.(),i?.stopPropagation?.(),G?.(_.id,_.chat_jid||null)},P0=(i)=>{if(i.key==="Enter"||i.key===" ")__(i)},{content:p0,attachments:R0}=CJ(X_);j0=p0;let d0=c9(Z0),r0=g9(Z0),o0=ZJ(Z0)[0]||null,y0=XJ(Z0)[0]||null,s0=YJ(Z0)[0]||null,O_=d0.length===1&&typeof d0[0]?.fallback_text==="string"?d0[0].fallback_text.trim():"",E0=r0.length===1?V8(r0[0]).trim():"",S0=Boolean(O_)&&j0?.trim()===O_||Boolean(E0)&&j0?.trim()===E0,I0=Boolean(j0)&&!N0&&!S0,a0=typeof D==="string"?D.trim():"",A_=G0(()=>{if(!j0||S0)return"";let i=Z1(j0,j);return a0?PJ(i,a0):i},[j0,S0,a0]),Q_=G0(()=>Q8(_),[_]),D_=G0(()=>lq(),[]),E_=G0(()=>hq(_),[_]),y_=Boolean(A.speaking&&A.activePostId===_.id),$0=(i,J0)=>{i.stopPropagation(),O(u1(J0))},O0=(i)=>{M?.(i)},D0=(i)=>{i.stopPropagation(),Q?.(_)},v0=async(i)=>{i.stopPropagation();let J0=await MJ(Q_);if(I(J0?"success":"error"),W.current)clearTimeout(W.current);W.current=setTimeout(()=>{W.current=null,I("idle")},eq)},m0=(i)=>{if(i.stopPropagation(),y_){nq();return}pq(_.id,E_)},s=(i,J0)=>{let Y_=new Set;if(!i||J0.length===0)return{content:i,usedIds:Y_};return{content:i.replace(/attachment:([^\s)"']+)/g,(h_,B1,u_,J1)=>{let C_=B1.replace(/^\/+/,""),A1=J0.find((k_)=>k_.name&&k_.name.toLowerCase()===C_.toLowerCase()&&!Y_.has(k_.id))||J0.find((k_)=>!Y_.has(k_.id));if(!A1)return h_;if(Y_.add(A1.id),J1.slice(Math.max(0,u_-2),u_)==="](")return`/media/${A1.id}`;return A1.name||"attachment"}),usedIds:Y_}},o=[],t=[],Y0=[],L0=[],k0=[],t0=[],g0=[],U0=0;if(Z0.length>0)Z0.forEach((i)=>{if(i?.type==="text"&&i.annotations)g0.push(i.annotations);if(i?.type==="generated_widget")t0.push(i);else if(i?.type==="resource_link")L0.push(i);else if(i?.type==="resource")k0.push(i);else if(i?.type==="file"){let J0=B0[U0++];if(J0)t.push(J0),Y0.push({id:J0,name:i?.name||i?.filename||i?.title})}else if(i?.type==="image"||!i?.type){let J0=B0[U0++];if(J0){let Y_=typeof i?.mime_type==="string"?i.mime_type:void 0;o.push({id:J0,annotations:i?.annotations,mimeType:Y_}),Y0.push({id:J0,name:i?.name||i?.filename||i?.title})}}});else if(B0.length>0){let i=R0.length>0;B0.forEach((J0,Y_)=>{let N_=R0[Y_]||null;if(Y0.push({id:J0,name:N_?.label||null}),i)t.push(J0);else o.push({id:J0,annotations:null})})}if(R0.length>0)R0.forEach((i)=>{if(!i?.id)return;let J0=Y0.find((Y_)=>String(Y_.id)===String(i.id));if(J0&&!J0.name)J0.name=i.label});let{content:w0,usedIds:j_}=s(j0,Y0);j0=w0;let u0=o.filter(({id:i})=>!j_.has(i)),G_=t.filter((i)=>!j_.has(i)),q_=R0.length>0?R0.map((i,J0)=>({id:i.id||`attachment-${J0+1}`,label:i.label||`attachment-${J0+1}`})):Y0.map((i,J0)=>({id:i.id,label:i.name||`attachment-${J0+1}`})),W_=G0(()=>c9(Z0),[Z0]),i0=G0(()=>g9(Z0),[Z0]),p_=G0(()=>{return W_.map((i)=>`${i.card_id}:${i.state}`).join("|")},[W_]);u(()=>{if(!z.current)return;return E$(z.current),wJ(z.current)},[A_]),u(()=>{return cq((i)=>{k(i)})},[]),u(()=>()=>{if(W.current)clearTimeout(W.current)},[]);let w_=g(null);return u(()=>{if(!w_.current||W_.length===0)return;let i=w_.current;i.innerHTML="";for(let J0 of W_){let Y_=document.createElement("div");i.appendChild(Y_),bq(Y_,J0,{onAction:async(N_)=>{if(N_.type==="Action.OpenUrl"){let h_=O4(N_.url||"");if(!h_)throw Error("Invalid URL");window.open(h_,"_blank","noopener,noreferrer");return}if(N_.type==="Action.Submit"){await D7({post_id:_.id,thread_id:y.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:J0.card_id,action:{type:N_.type,title:N_.title||"",data:N_.data}});return}console.warn("[post] unsupported adaptive card action:",N_.type,N_)}}).catch((N_)=>{console.error("[post] adaptive card render error:",N_),Y_.textContent=J0.fallback_text||"Card failed to render."})}},[p_,_.id]),F`
        <div id=${`post-${_.id}`} class="post ${x?"agent-post":""} ${V?"thread-reply":""} ${B?"thread-prev":""} ${N?"thread-next":""} ${U?"removing":""}" onClick=${$}>
            <div class="post-avatar ${x?"agent-avatar":""} ${h.image?"has-image":""}" style=${z0}>
                ${h.image?F`<img src=${h.image} alt=${S} />`:h.letter}
            </div>
            <div class="post-body">
                <div class="post-actions">
                    ${x&&D_&&E_&&F`
                        <button
                            class=${`post-action-btn post-speak-btn${y_?" is-active":""}`}
                            type="button"
                            title=${y_?"Stop reading aloud":"Read aloud"}
                            aria-label=${y_?"Stop reading aloud":"Read aloud"}
                            onClick=${m0}
                        >
                            ${y_?F`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="6" y="6" width="12" height="12" rx="2"></rect></svg>`:F`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M11 5 6 9H3v6h3l5 4z"></path><path d="M15.5 8.5a5 5 0 0 1 0 7"></path><path d="M18 6a8.5 8.5 0 0 1 0 12"></path></svg>`}
                        </button>
                    `}
                    <button
                        class=${`post-action-btn post-copy-btn${T==="success"?" is-success":T==="error"?" is-error":""}`}
                        type="button"
                        title=${T==="success"?"Copied":T==="error"?"Copy failed":"Copy message"}
                        aria-label=${T==="success"?"Copied":T==="error"?"Copy failed":"Copy message"}
                        onClick=${v0}
                        disabled=${!Q_}
                    >
                        ${T==="success"?F`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20 6L9 17l-5-5"></path></svg>`:T==="error"?F`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9"></circle><path d="M9 9l6 6M15 9l-6 6"></path></svg>`:F`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="9" y="9" width="10" height="10" rx="2"></rect><path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path></svg>`}
                    </button>
                    <button
                        class="post-action-btn post-delete-btn"
                        type="button"
                        title="Delete message"
                        aria-label="Delete message"
                        onClick=${D0}
                    >
                        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div class="post-meta">
                    <span class="post-author">${S}</span>
                    ${d&&F`
                        <span
                            class="post-chat-agent-tag"
                            title=${`From ${W0?.sourceChatJid||""}`.trim()}
                        >
                            @${W0?.sourceAgentName}
                        </span>
                    `}
                    ${l&&F`
                        <span
                            class="post-chat-agent-tag"
                            role="button"
                            tabIndex="0"
                            style="cursor:pointer"
                            title=${`Open ${v} and reference this message`}
                            onClick=${__}
                            onKeyDown=${P0}
                        >
                            @${v}
                        </span>
                    `}
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${__}>${qX(_.timestamp)}</a>
                    ${o0&&F`
                        <span
                            class="post-recovery-chip"
                            title=${QJ(o0)}
                        >
                            recovered
                        </span>
                    `}
                    ${y0&&F`
                        <span
                            class="post-recovery-chip post-timeout-chip"
                            title=${NJ(y0)}
                        >
                            timeout
                        </span>
                    `}
                    ${s0&&F`
                        <span
                            class=${`post-recovery-chip post-outcome-chip post-outcome-chip-${String(s0.severity||"warning")}${s0.kind==="tool_budget"?" post-outcome-chip-tool-budget":""}`}
                            title=${String(s0.label||s0.kind||"issue")}
                        >
                            ${String(s0.label||s0.kind||"issue")}
                        </span>
                    `}
                </div>
                ${s0&&F`
                    <${BJ} marker=${s0} />
                `}
                ${N0&&_0&&F`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${N6(_0.originalLength)} chars
                            ${_0.maxLength?F` • Display limit: ${N6(_0.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${X0&&_0&&F`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${N6(_0.maxLength)} of ${N6(_0.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(f0.length>0||c0.length>0||l0.length>0||q_.length>0)&&F`
                    <div class="post-file-refs">
                        ${l0.map((i)=>{let J0=(Y_)=>{if(Y_.preventDefault(),Y_.stopPropagation(),Z)Z(i,_.chat_jid||null);else{let N_=document.getElementById("post-"+i);if(N_)N_.scrollIntoView({behavior:"smooth",block:"center"}),N_.classList.add("post-highlight"),setTimeout(()=>N_.classList.remove("post-highlight"),2000)}};return F`
                                <a href=${`#msg-${i}`} class="post-msg-pill-link" onClick=${J0}>
                                    <${L1}
                                        prefix="post"
                                        label=${"msg:"+i}
                                        title=${"Message "+i}
                                        icon="message"
                                        onClick=${J0}
                                    />
                                </a>
                            `})}
                        ${f0.map((i)=>{let J0=i.split("/").pop()||i;return F`
                                <${L1}
                                    prefix="post"
                                    label=${J0}
                                    title=${i}
                                    onClick=${()=>E?.(i)}
                                />
                            `})}
                        ${c0.map((i)=>{let J0=i.split("/").pop()||i;return F`
                                <${L1}
                                    prefix="post"
                                    label=${J0}
                                    title=${i}
                                    icon="folder"
                                />
                            `})}
                        ${q_.map((i)=>F`
                            <${FJ}
                                key=${i.id}
                                attachment=${i}
                                onPreview=${O0}
                            />
                        `)}
                    </div>
                `}
                ${I0&&F`
                    <div 
                        ref=${z}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:A_}}
                        onClick=${(i)=>{if(i.target.classList.contains("hashtag")){i.preventDefault(),i.stopPropagation();let J0=i.target.dataset.hashtag;if(J0)j?.(J0)}else if(i.target.tagName==="IMG")i.preventDefault(),i.stopPropagation(),O(i.target.src)}}
                    />
                `}
                ${W_.length>0&&F`
                    <div ref=${w_} class="post-adaptive-cards" />
                `}
                ${i0.length>0&&F`
                    <div class="post-adaptive-card-submissions">
                        ${i0.map((i,J0)=>{let Y_=xq(i),N_=`${i.card_id}-${J0}`;return F`
                                <div key=${N_} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${Y_.title}</span>
                                        </div>
                                    </div>
                                    ${Y_.fields.length>0&&F`
                                        <div class="adaptive-card-submission-fields">
                                            ${Y_.fields.map((h_)=>F`
                                                <span class="adaptive-card-submission-field" title=${`${h_.key}: ${h_.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${h_.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${h_.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${w4(Y_.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${t0.length>0&&F`
                    <div class="generated-widget-launches">
                        ${t0.map((i,J0)=>F`
                            <${EJ}
                                key=${i.widget_id||i.id||`${_.id}-widget-${J0}`}
                                block=${i}
                                post=${_}
                                onOpenWidget=${H}
                            />
                        `)}
                    </div>
                `}
                ${g0.length>0&&F`
                    ${g0.map((i,J0)=>F`
                        <${U8} key=${J0} annotations=${i} />
                    `)}
                `}
                ${u0.length>0&&F`
                    <div class="media-preview">
                        ${u0.map(({id:i,mimeType:J0})=>{let N_=typeof J0==="string"&&J0.toLowerCase().startsWith("image/svg")?u1(i):z7(i);return F`
                                <img
                                    key=${i}
                                    src=${N_}
                                    alt="Media"
                                    loading="lazy"
                                    decoding="async"
                                    onClick=${(h_)=>$0(h_,i)}
                                />
                            `})}
                    </div>
                `}
                ${u0.length>0&&F`
                    ${u0.map(({annotations:i},J0)=>F`
                        ${i&&F`<${U8} key=${J0} annotations=${i} />`}
                    `)}
                `}
                ${G_.length>0&&F`
                    <div class="file-attachments">
                        ${G_.map((i)=>F`
                            <${GJ} key=${i} mediaId=${i} onPreview=${O0} />
                        `)}
                    </div>
                `}
                ${L0.length>0&&F`
                    <div class="resource-links">
                        ${L0.map((i,J0)=>F`
                            <div key=${J0}>
                                <${UJ} block=${i} />
                                <${U8} annotations=${i.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${k0.length>0&&F`
                    <div class="resource-embeds">
                        ${k0.map((i,J0)=>F`
                            <div key=${J0}>
                                <${HJ} block=${i} />
                                <${U8} annotations=${i.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${y.link_previews?.length>0&&F`
                    <div class="link-previews">
                        ${y.link_previews.map((i,J0)=>F`
                            <${zJ} key=${J0} preview=${i} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${J&&F`<${vq} src=${J} onClose=${()=>O(null)} />`}

    `}function GK({posts:_,hasMore:$,onLoadMore:j,onPostClick:G,onHashtagClick:Z,onMessageRef:X,onScrollToMessage:Y,onFileRef:L,onOpenWidget:K,onOpenAttachmentPreview:q,emptyMessage:Q,timelineRef:V,agents:B,user:N,onDeletePost:U,reverse:D=!0,removingPostIds:E,searchQuery:H}){let[M,J]=C(!1),O=g(null),T=typeof IntersectionObserver<"u",I=f(async()=>{if(!j||!$||M)return;J(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{J(!1)}},[$,M,j]),A=f((v)=>{let{scrollTop:l,scrollHeight:h,clientHeight:r}=v.target,b=D?h-r-l:l,e=Math.max(300,r);if(b<e)I()},[D,I]);u(()=>{if(!T)return;let v=O.current,l=V?.current;if(!v||!l)return;let h=300,r=new IntersectionObserver((b)=>{for(let e of b){if(!e.isIntersecting)continue;I()}},{root:l,rootMargin:`${h}px 0px ${h}px 0px`,threshold:0});return r.observe(v),()=>r.disconnect()},[T,$,j,V,I]);let k=g(I);if(k.current=I,u(()=>{if(T)return;if(!V?.current)return;let{scrollTop:v,scrollHeight:l,clientHeight:h}=V.current,r=D?l-h-v:v,b=Math.max(300,h);if(r<b)k.current?.()},[T,_,$,D,V]),u(()=>{if(!V?.current)return;if(!$||M)return;let{scrollTop:v,scrollHeight:l,clientHeight:h}=V.current,r=D?l-h-v:v,b=Math.max(300,h);if(l<=h+1||r<b)k.current?.()},[_,$,M,D,V]),!_)return F`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return F`
            <div class="timeline" ref=${V}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${Q||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let z=_.slice().sort((v,l)=>v.id-l.id),W=(v)=>{let l=v?.data?.thread_id;if(l===null||l===void 0||l==="")return null;let h=Number(l);return Number.isFinite(h)?h:null},y=new Map;for(let v=0;v<z.length;v+=1){let l=z[v],h=Number(l?.id),r=W(l);if(r!==null){let b=y.get(r)||{anchorIndex:-1,replyIndexes:[]};b.replyIndexes.push(v),y.set(r,b)}else if(Number.isFinite(h)){let b=y.get(h)||{anchorIndex:-1,replyIndexes:[]};b.anchorIndex=v,y.set(h,b)}}let x=new Map;for(let[v,l]of y.entries()){let h=new Set;if(l.anchorIndex>=0)h.add(l.anchorIndex);for(let r of l.replyIndexes)h.add(r);x.set(v,Array.from(h).sort((r,b)=>r-b))}let P=z.map((v,l)=>{let h=W(v);if(h===null)return{hasThreadPrev:!1,hasThreadNext:!1};let r=x.get(h);if(!r||r.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let b=r.indexOf(l);if(b<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:b>0,hasThreadNext:b<r.length-1}}),S=F`<div class="timeline-sentinel" ref=${O}></div>`;return F`
        <div class="timeline ${D?"reverse":"normal"}" ref=${V} onScroll=${A}>
            <div class="timeline-content">
                ${D?S:null}
                ${z.map((v,l)=>{let h=Boolean(v.data?.thread_id&&v.data.thread_id!==v.id),r=E?.has?.(v.id),b=P[l]||{};return F`
                    <${jK}
                        key=${v.id}
                        post=${v}
                        isThreadReply=${h}
                        isThreadPrev=${b.hasThreadPrev}
                        isThreadNext=${b.hasThreadNext}
                        isRemoving=${r}
                        highlightQuery=${H}
                        agentName=${Wq(v.data?.agent_id,B||{})}
                        agentAvatarUrl=${zq(v.data?.agent_id,B||{})}
                        userName=${N?.name||N?.user_name}
                        userAvatarUrl=${N?.avatar_url||N?.avatarUrl||N?.avatar}
                        userAvatarBackground=${N?.avatar_background||N?.avatarBackground}
                        onClick=${()=>G?.(v)}
                        onHashtagClick=${Z}
                        onMessageRef=${X}
                        onScrollToMessage=${Y}
                        onFileRef=${L}
                        onOpenWidget=${K}
                        onDelete=${U}
                        onOpenAttachmentPreview=${q}
                    />
                `})}
                ${D?null:S}
            </div>
        </div>
    `}T0();f_();function ZK(_){try{return _?.focus?.(),_?.select?.(),!0}catch($){return!1}}var H8="workspaceExplorerScale",RJ=["compact","default","comfortable"],SJ=new Set(RJ),uJ={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function XK(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return SJ.has(j)?j:$}function i9(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),G=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||G&&j}}function gJ(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function bJ(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function o9(_={}){let $=gJ(_),j=_.stored?XK(_.stored,$):$;return bJ(j,_)}function YK(_){return uJ[XK(_)]}$9();function vJ(_){if(!_||_.kind!=="text")return!1;let $=Number(_.size);return!Number.isFinite($)||$<=262144}function s9(_,$){let j=String(_||"").trim();if(!j||j.endsWith("/"))return!1;if(typeof $!=="function")return!1;let G=$({path:j,mode:"edit"});if(!G||typeof G!=="object")return!1;return G.id!=="editor"}function LK(_,$,j={}){let G=j.resolvePane;if(s9(_,G))return!0;return vJ($)}var NK=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function mJ(_){let $=String(_||"").trim();if(!$||$.endsWith("/"))return!1;return s9($,(j)=>L_.resolve(j))}function BK(_,$,j,G=0,Z=[]){if(!j&&NK(_))return Z;if(!_)return Z;if(Z.push({node:_,depth:G}),_.type==="dir"&&_.children&&$.has(_.path))for(let X of _.children)BK(X,$,j,G+1,Z);return Z}function qK(_,$,j){if(!_)return"";let G=[],Z=(X)=>{if(!j&&NK(X))return;if(G.push(X.type==="dir"?`d:${X.path}`:`f:${X.path}`),X.children&&$?.has(X.path))for(let Y of X.children)Z(Y)};return Z(_),G.join("|")}function _j(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,G=Array.isArray($.children)?$.children:null;if(!G)return _;let Z=j?new Map(j.map((L)=>[L?.path,L])):new Map,X=!j||j.length!==G.length,Y=G.map((L)=>{let K=_j(Z.get(L.path),L);if(K!==Z.get(L.path))X=!0;return K});return X?{...$,children:Y}:_}function t9(_,$,j){if(!_)return _;if(_.path===$)return _j(_,j);if(!Array.isArray(_.children))return _;let G=!1,Z=_.children.map((X)=>{let Y=t9(X,$,j);if(Y!==X)G=!0;return Y});return G?{..._,children:Z}:_}var FK=4,a9=14,cJ=16;function UK(_){if(!_)return 0;if(_.type==="file"){let G=Math.max(0,Number(_.size)||0);return _.__bytes=G,G}let $=Array.isArray(_.children)?_.children:[],j=0;for(let G of $)j+=UK(G);return _.__bytes=j,j}function HK(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),G={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=FK)return G;let Z=Array.isArray(_.children)?_.children:[],X=[];for(let L of Z){let K=Math.max(0,Number(L?.__bytes??L?.size??0));if(K<=0)continue;if(L.type==="dir")X.push({kind:"dir",node:L,size:K});else X.push({kind:"file",name:L.name,path:L.path,size:K})}X.sort((L,K)=>K.size-L.size);let Y=X;if(X.length>a9){let L=X.slice(0,a9-1),K=X.slice(a9-1),q=K.reduce((Q,V)=>Q+V.size,0);L.push({kind:"other",name:`+${K.length} more`,path:`${G.path}/[other]`,size:q}),Y=L}return G.children=Y.map((L)=>{if(L.kind==="dir")return HK(L.node,$+1);return{name:L.name,path:L.path,size:L.size,children:[]}}),G}function KK(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function EK(_,$,j){let G=((_+Math.PI/2)*180/Math.PI+360)%360,Z=j?Math.max(30,70-$*10):Math.max(34,66-$*8),X=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${G.toFixed(1)} ${Z}% ${X}%)`}function E8(_,$,j,G){return{x:_+j*Math.cos(G),y:$+j*Math.sin(G)}}function $j(_,$,j,G,Z,X){let Y=Math.PI*2-0.0001,L=X-Z>Y?Z+Y:X,K=E8(_,$,G,Z),q=E8(_,$,G,L),Q=E8(_,$,j,L),V=E8(_,$,j,Z),B=L-Z>Math.PI?1:0;return[`M ${K.x.toFixed(3)} ${K.y.toFixed(3)}`,`A ${G} ${G} 0 ${B} 1 ${q.x.toFixed(3)} ${q.y.toFixed(3)}`,`L ${Q.x.toFixed(3)} ${Q.y.toFixed(3)}`,`A ${j} ${j} 0 ${B} 0 ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,"Z"].join(" ")}var DK={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function WK(_,$,j){let G=[],Z=[],X=Math.max(0,Number($)||0),Y=(L,K,q,Q)=>{let V=Array.isArray(L?.children)?L.children:[];if(!V.length)return;let B=Math.max(0,Number(L.size)||0);if(B<=0)return;let N=q-K,U=K;V.forEach((D,E)=>{let H=Math.max(0,Number(D.size)||0);if(H<=0)return;let M=H/B,J=U,O=E===V.length-1?q:U+N*M;if(U=O,O-J<0.003)return;let T=DK[Q];if(T){let I=EK(J,Q,j);if(G.push({key:D.path,path:D.path,label:D.name,size:H,color:I,depth:Q,startAngle:J,endAngle:O,innerRadius:T[0],outerRadius:T[1],d:$j(120,120,T[0],T[1],J,O)}),Q===1)Z.push({key:D.path,name:D.name,size:H,pct:X>0?H/X*100:0,color:I})}if(Q<FK)Y(D,J,O,Q+1)})};return Y(_,-Math.PI/2,Math.PI*3/2,1),{segments:G,legend:Z}}function e9(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let G of j){let Z=e9(G,$);if(Z)return Z}return null}function zK(_,$,j,G){if(!j||j<=0)return{segments:[],legend:[]};let Z=DK[1];if(!Z)return{segments:[],legend:[]};let X=-Math.PI/2,Y=Math.PI*3/2,L=EK(X,1,G),q=`${$||"."}/[files]`;return{segments:[{key:q,path:q,label:_,size:j,color:L,depth:1,startAngle:X,endAngle:Y,innerRadius:Z[0],outerRadius:Z[1],d:$j(120,120,Z[0],Z[1],X,Y)}],legend:[{key:q,name:_,size:j,pct:100,color:L}]}}function VK(_,$=!1,j=!1){if(!_)return null;let G=UK(_),Z=HK(_,0),X=Z.size||G,{segments:Y,legend:L}=WK(Z,X,j);if(!Y.length&&X>0){let K=zK("[files]",Z.path,X,j);Y=K.segments,L=K.legend}return{root:Z,totalSize:X,segments:Y,legend:L,truncated:$,isDarkTheme:j}}function lJ({payload:_}){if(!_)return null;let[$,j]=C(null),[G,Z]=C(_?.root?.path||"."),[X,Y]=C(()=>[_?.root?.path||"."]),[L,K]=C(!1);u(()=>{let W=_?.root?.path||".";Z(W),Y([W]),j(null)},[_?.root?.path,_?.totalSize]),u(()=>{if(!G)return;K(!0);let W=setTimeout(()=>K(!1),180);return()=>clearTimeout(W)},[G]);let q=G0(()=>{return e9(_.root,G)||_.root},[_?.root,G]),Q=q?.size||_.totalSize||0,{segments:V,legend:B}=G0(()=>{let W=WK(q,Q,_.isDarkTheme);if(W.segments.length>0)return W;if(Q<=0)return W;let y=q?.children?.length?"Total":"[files]";return zK(y,q?.path||_?.root?.path||".",Q,_.isDarkTheme)},[q,Q,_.isDarkTheme,_?.root?.path]),[N,U]=C(V),D=g(new Map),E=g(0);u(()=>{let W=D.current,y=new Map(V.map((v)=>[v.key,v])),x=performance.now(),P=220,S=(v)=>{let l=Math.min(1,(v-x)/220),h=l*(2-l),r=V.map((b)=>{let z0=W.get(b.key)||{startAngle:b.startAngle,endAngle:b.startAngle,innerRadius:b.innerRadius,outerRadius:b.innerRadius},K0=(Z0,B0)=>Z0+(B0-Z0)*h,q0=K0(z0.startAngle,b.startAngle),X0=K0(z0.endAngle,b.endAngle),N0=K0(z0.innerRadius,b.innerRadius),_0=K0(z0.outerRadius,b.outerRadius);return{...b,d:$j(120,120,N0,_0,q0,X0)}});if(U(r),l<1)E.current=requestAnimationFrame(S)};if(E.current)cancelAnimationFrame(E.current);return E.current=requestAnimationFrame(S),D.current=y,()=>{if(E.current)cancelAnimationFrame(E.current)}},[V]);let H=N.length?N:V,M=Q>0?e_(Q):"0 B",J=q?.name||"",T=(J&&J!=="."?J:"Total")||"Total",I=M,A=X.length>1,k=(W)=>{if(!W?.path)return;let y=e9(_.root,W.path);if(!y||!Array.isArray(y.children)||y.children.length===0)return;Y((x)=>[...x,y.path]),Z(y.path),j(null)},z=()=>{if(!A)return;Y((W)=>{let y=W.slice(0,-1);return Z(y[y.length-1]||_?.root?.path||"."),y}),j(null)};return F`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${L?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${q?.path||_?.root?.path||"."}`}
                data-segments=${H.length}
                data-base-size=${Q}>
                ${H.map((W)=>F`
                    <path
                        key=${W.key}
                        d=${W.d}
                        fill=${W.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===W.key?" is-hovered":""}`}
                        onMouseEnter=${()=>j(W)}
                        onMouseLeave=${()=>j(null)}
                        onTouchStart=${()=>j(W)}
                        onTouchEnd=${()=>j(null)}
                        onClick=${()=>k(W)}
                    >
                        <title>${W.label} — ${e_(W.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${A?" is-drill":""}`}
                    onClick=${z}
                    role="button"
                    aria-label="Zoom out"
                >
                    <circle
                        cx="120"
                        cy="120"
                        r="24"
                        fill="var(--bg-secondary)"
                        stroke="var(--border-color)"
                        stroke-width="1"
                        class="workspace-folder-starburst-center"
                    />
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${T}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${I}</text>
                </g>
            </svg>
            ${B.length>0&&F`
                <div class="workspace-folder-starburst-legend">
                    ${B.slice(0,8).map((W)=>F`
                        <div key=${W.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${W.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${W.name}>${W.name}</span>
                            <span class="workspace-folder-starburst-size">${e_(W.size)}</span>
                            <span class="workspace-folder-starburst-pct">${W.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&F`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function QK(_){if(typeof document>"u"||!_)return;let $=document.createElement("a");$.href=_,$.setAttribute("download",""),$.rel="noopener",$.style.display="none",document.body.appendChild($),$.click(),$.remove()}function OK(_){switch(_?.state){case"indexing":return"Indexing workspace…";case"ready":return"Workspace index ready";case"stale":return"Workspace index may be stale";case"failed":return"Workspace index failed";case"never_indexed":return"Workspace index not built yet";default:return"Checking workspace index…"}}function hJ(_){if(!_)return"Workspace index status";let $=[OK(_)];if(_.last_indexed_at)$.push(`Last indexed: ${_.last_indexed_at}`);if(typeof _.indexed_file_count==="number")$.push(`Indexed files: ${_.indexed_file_count}`);if(Array.isArray(_.roots)&&_.roots.length)$.push(`Roots: ${_.roots.join(", ")}`);if(_.last_error)$.push(`Error: ${_.last_error}`);return $.join(`
`)}function nJ(_){let $=_?.target;if($&&typeof $==="object")return $;return $?.parentElement||null}function pJ(_){return Boolean(_?.closest?.(".workspace-node-icon, .workspace-label-text"))}function rJ(_,$=null){let j=nJ(_),G=j?.closest?.(".workspace-row");if(!G)return null;let Z=G.dataset.type,X=G.dataset.path;if(!X||X===".")return null;if($===X)return null;let Y=_?.touches?.[0];if(!Y)return null;return{type:Z,path:X,dragPath:pJ(j)?X:null,startX:Y.clientX,startY:Y.clientY}}function JK({onFileSelect:_,onFolderSelect:$,visible:j=!0,active:G=void 0,onOpenEditor:Z,onOpenTerminalTab:X,onOpenVncTab:Y,onToggleTerminal:L,terminalVisible:K=!1}){let[q,Q]=C(null),[V,B]=C(new Set(["."])),[N,U]=C(null),[D,E]=C(null),[H,M]=C(""),[J,O]=C(null),[,T]=C(null),[I,A]=C(!0),[k,z]=C(!1),[W,y]=C(null),[x,P]=C(()=>F$("workspaceShowHidden",!1)),[S,v]=C(!1),[l,h]=C(null),[r,b]=C(null),[e,z0]=C(null),[K0,q0]=C(!1),[X0,N0]=C(null),[_0,Z0]=C(null),[B0,W0]=C(null),[d,j0]=C(!1),[A0,f0]=C(()=>W5()),[b0,c0]=C(()=>KK()),[X_,l0]=C(()=>o9({stored:W1(H8),...i9()})),[__,P0]=C(!1),p0=Math.max(15000,(Number(A0?.refreshIntervalSec)||60)*1000),R0=Math.max(0,Number(A0?.folderPreviewDepth)||0),d0=g(V),r0=g(""),U_=g(null),o0=g(0),h0=g(new Set),y0=g(null),V_=g(null),s0=g(new Map),O_=g(_),E0=g($),S0=g(Z),I0=g(null),a0=g(null),A_=g(null),Q_=g(null),D_=g(null),E_=g(null),y_=g("."),$0=g(0),O0=g({path:null,dragging:!1,startX:0,startY:0}),D0=g({path:null,dragging:!1,startX:0,startY:0}),v0=g({path:null,timer:0}),m0=g(!1),s=g(0),o=g(new Map),t=g(null),Y0=g(null),L0=g(null),k0=g(null),t0=g(null),g0=g(null),U0=g(x),w0=g(j),j_=g(G??j),u0=g(0),G_=g(e),q_=g(S),W_=g(l),i0=g(null),p_=g({x:0,y:0}),w_=g(0),i=g(null),J0=g(N),Y_=g(D),N_=g(null),h_=g(J);O_.current=_,E0.current=$,S0.current=Z,u(()=>{d0.current=V},[V]),u(()=>{U0.current=x},[x]),u(()=>{w0.current=j},[j]),u(()=>{j_.current=G??j},[G,j]),u(()=>{G_.current=e},[e]);let B1=f(()=>{if(!$0.current)return;clearTimeout($0.current),$0.current=0},[]);u(()=>()=>B1(),[B1]),u(()=>{if(typeof window>"u")return;let R=()=>{l0(o9({stored:W1(H8),...i9()}))};R();let c=()=>R(),n=()=>R(),a=(H0)=>{if(!H0||H0.key===null||H0.key===H8)R()};window.addEventListener("resize",c),window.addEventListener("focus",n),window.addEventListener("storage",a);let F0=window.matchMedia?.("(pointer: coarse)"),V0=window.matchMedia?.("(hover: none)"),M0=(H0,e0)=>{if(!H0)return;if(H0.addEventListener)H0.addEventListener("change",e0);else if(H0.addListener)H0.addListener(e0)},x0=(H0,e0)=>{if(!H0)return;if(H0.removeEventListener)H0.removeEventListener("change",e0);else if(H0.removeListener)H0.removeListener(e0)};return M0(F0,c),M0(V0,c),()=>{window.removeEventListener("resize",c),window.removeEventListener("focus",n),window.removeEventListener("storage",a),x0(F0,c),x0(V0,c)}},[]),u(()=>{if(typeof window>"u")return;let R=()=>{f0(W5())},c=(F0)=>{if(!F0||F0.key===null||F0.key===l2||F0.key===h2)R()},n=()=>R(),a=(F0)=>{let V0=F0?.detail?.settings;if(V0&&typeof V0==="object"){f0({refreshIntervalSec:Number(V0.refreshIntervalSec)||60,folderPreviewDepth:Math.max(0,Number(V0.folderPreviewDepth)||0)});return}R()};return window.addEventListener("focus",n),window.addEventListener("storage",c),window.addEventListener(c2,a),()=>{window.removeEventListener("focus",n),window.removeEventListener("storage",c),window.removeEventListener(c2,a)}},[]),u(()=>{let R=(c)=>{let n=c?.detail?.path;if(!n)return;let a=n.split("/"),F0=[];for(let V0=1;V0<a.length;V0++)F0.push(a.slice(0,V0).join("/"));if(F0.length)B((V0)=>{let M0=new Set(V0);M0.add(".");for(let x0 of F0)M0.add(x0);return M0});U(n),requestAnimationFrame(()=>{let V0=document.querySelector(`[data-path="${CSS.escape(n)}"]`);if(V0)V0.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",R),()=>window.removeEventListener("workspace-reveal-path",R)},[]),u(()=>{q_.current=S},[S]),u(()=>{W_.current=l},[l]),u(()=>{J0.current=N},[N]),u(()=>{Y_.current=D},[D]),u(()=>{h_.current=J},[J]),u(()=>{if(typeof window>"u"||typeof document>"u")return;let R=()=>c0(KK());R();let c=window.matchMedia?.("(prefers-color-scheme: dark)"),n=()=>R();if(c?.addEventListener)c.addEventListener("change",n);else if(c?.addListener)c.addListener(n);let a=typeof MutationObserver<"u"?new MutationObserver(()=>R()):null;if(a?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)a?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(c?.removeEventListener)c.removeEventListener("change",n);else if(c?.removeListener)c.removeListener(n);a?.disconnect()}},[]),u(()=>{if(!D)return;let R=D_.current;if(!R)return;let c=requestAnimationFrame(()=>{ZK(R)});return()=>cancelAnimationFrame(c)},[D]),u(()=>{if(!__)return;let R=(n)=>{let a=n?.target;if(!(a instanceof Element))return;if(t0.current?.contains(a))return;if(g0.current?.contains(a))return;P0(!1)},c=(n)=>{if(n?.key==="Escape")P0(!1),g0.current?.focus?.()};return document.addEventListener("mousedown",R),document.addEventListener("touchstart",R,{passive:!0}),document.addEventListener("keydown",c),()=>{document.removeEventListener("mousedown",R),document.removeEventListener("touchstart",R),document.removeEventListener("keydown",c)}},[__]);let u_=async(R,c={})=>{let n=Boolean(c?.autoOpen),a=String(R||"").trim();z(!0),O(null),T(null);try{let F0=await y7(a,20000);if(n&&a&&LK(a,F0,{resolvePane:(V0)=>L_.resolve(V0)}))return S0.current?.(a,F0),F0;return O(F0),F0}catch(F0){let V0={error:F0.message||"Failed to load preview"};return O(V0),V0}finally{z(!1)}};I0.current=u_;let J1=f(async()=>{try{let R=await A7("all");return W0(R),R}catch(R){return console.warn("[workspace-explorer] Failed to load workspace index status:",R),null}},[]);V_.current=J1;let C_=f(()=>{V_.current?.()},[]),M_=async()=>{if(!w0.current)return;try{let R=await q6("",1,U0.current),c=qK(R.root,d0.current,U0.current);if(c===r0.current){A(!1);return}if(r0.current=c,U_.current=R.root,!o0.current)o0.current=requestAnimationFrame(()=>{o0.current=0,Q((n)=>_j(n,U_.current)),A(!1)})}catch(R){y(R.message||"Failed to load workspace"),A(!1)}},A1=async(R)=>{if(!R)return;if(h0.current.has(R))return;h0.current.add(R);try{let c=await q6(R,1,U0.current);Q((n)=>t9(n,R,c.root))}catch(c){y(c.message||"Failed to load workspace")}finally{h0.current.delete(R)}};a0.current=A1;let z_=f(()=>{let R=N;if(!R)return".";let c=s0.current?.get(R);if(c&&c.type==="dir")return c.path;if(R==="."||!R.includes("/"))return".";let n=R.split("/");return n.pop(),n.join("/")||"."},[N]),k_=f((R)=>{let c=R?.closest?.(".workspace-row");if(!c)return null;let n=c.dataset.path,a=c.dataset.type;if(!n)return null;if(a==="dir")return n;if(n.includes("/")){let F0=n.split("/");return F0.pop(),F0.join("/")||"."}return"."},[]),F1=f((R)=>{return k_(R?.target||null)},[k_]),v_=f((R)=>{G_.current=R,z0(R)},[]),r_=f(()=>{let R=v0.current;if(R?.timer)clearTimeout(R.timer);v0.current={path:null,timer:0}},[]),s_=f((R)=>{if(!R||R==="."){r_();return}let c=s0.current?.get(R);if(!c||c.type!=="dir"){r_();return}if(d0.current?.has(R)){r_();return}if(v0.current?.path===R)return;r_();let n=setTimeout(()=>{v0.current={path:null,timer:0},a0.current?.(R),B((a)=>{let F0=new Set(a);return F0.add(R),F0})},600);v0.current={path:R,timer:n}},[r_]),H_=f((R,c)=>{if(p_.current={x:R,y:c},w_.current)return;w_.current=requestAnimationFrame(()=>{w_.current=0;let n=i0.current;if(!n)return;let a=p_.current;n.style.transform=`translate(${a.x+12}px, ${a.y+12}px)`})},[]),x1=f((R)=>{if(!R)return;let n=(s0.current?.get(R)?.name||R.split("/").pop()||R).trim();if(!n)return;b({path:R,label:n})},[]),U1=f(()=>{if(b(null),w_.current)cancelAnimationFrame(w_.current),w_.current=0;if(i0.current)i0.current.style.transform="translate(-9999px, -9999px)"},[]),g1=f((R)=>{if(!R)return".";let c=s0.current?.get(R);if(c&&c.type==="dir")return c.path;if(R==="."||!R.includes("/"))return".";let n=R.split("/");return n.pop(),n.join("/")||"."},[]),k1=f(()=>{E(null),M("")},[]),e1=f((R)=>{if(!R)return;let n=(s0.current?.get(R)?.name||R.split("/").pop()||R).trim();if(!n||R===".")return;E(R),M(n)},[]),b4=f(async()=>{let R=Y_.current;if(!R)return;let c=(H||"").trim();if(!c){k1();return}let n=s0.current?.get(R),a=(n?.name||R.split("/").pop()||R).trim();if(c===a){k1();return}try{let V0=(await T7(R,c))?.path||R,M0=R.includes("/")?R.split("/").slice(0,-1).join("/")||".":".";if(k1(),y(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:R,newPath:V0,type:n?.type||"file"}})),n?.type==="dir")B((x0)=>{let H0=new Set;for(let e0 of x0)if(e0===R)H0.add(V0);else if(e0.startsWith(`${R}/`))H0.add(`${V0}${e0.slice(R.length)}`);else H0.add(e0);return H0});if(U(V0),n?.type==="dir")O(null),z(!1),T(null);else I0.current?.(V0);a0.current?.(M0),C_()}catch(F0){y(F0?.message||"Failed to rename file")}},[k1,H,C_]),A$=f(async(R)=>{let a=R||".";for(let F0=0;F0<50;F0+=1){let M0=`untitled${F0===0?"":`-${F0}`}.md`;try{let H0=(await w7(a,M0,""))?.path||(a==="."?M0:`${a}/${M0}`);if(a&&a!==".")B((e0)=>new Set([...e0,a]));U(H0),y(null),a0.current?.(a),I0.current?.(H0),C_();return}catch(x0){if(x0?.status===409||x0?.code==="file_exists")continue;y(x0?.message||"Failed to create file");return}}y("Failed to create file (untitled name already in use).")},[]),a_=f((R)=>{if(R?.stopPropagation?.(),K0)return;let c=g1(J0.current);A$(c)},[K0,g1,A$]);u(()=>{if(typeof window>"u")return;let R=(c)=>{let n=c?.detail?.updates||[];if(!Array.isArray(n)||n.length===0)return;Q((x0)=>{let H0=x0;for(let e0 of n){if(!e0?.root)continue;if(!H0||e0.path==="."||!e0.path)H0=e0.root;else H0=t9(H0,e0.path,e0.root)}if(H0)r0.current=qK(H0,d0.current,U0.current);return A(!1),H0});let a=J0.current;if(Boolean(a)&&n.some((x0)=>{let H0=x0?.path||"";if(!H0||H0===".")return!0;return a===H0||a.startsWith(`${H0}/`)||H0.startsWith(`${a}/`)}))o.current.clear();if(C_(),!a||!h_.current)return;let V0=s0.current?.get(a);if(V0&&V0.type==="dir")return;if(n.some((x0)=>{let H0=x0?.path||"";if(!H0||H0===".")return!0;return a===H0||a.startsWith(`${H0}/`)}))I0.current?.(a)};return window.addEventListener("workspace-update",R),()=>window.removeEventListener("workspace-update",R)},[]),y0.current=M_;let m_=g(()=>{if(typeof window>"u")return;let R=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),c=j_.current??w0.current,n=document.visibilityState!=="hidden"&&(c||R.matches&&w0.current);K6(n,U0.current).catch((a)=>{console.debug("[workspace-explorer] Workspace visibility ping failed.",a,{visible:n,showHidden:U0.current})})}).current,y1=g(0),H1=g(()=>{if(y1.current)clearTimeout(y1.current);y1.current=setTimeout(()=>{y1.current=0,m_()},250)}).current;u(()=>{if(w0.current)y0.current?.(),V_.current?.();H1()},[j,G]),u(()=>{y0.current(),V_.current?.();let R=setInterval(()=>{y0.current(),V_.current?.()},p0);return()=>clearInterval(R)},[p0]),u(()=>{m_();let R=D4("previewHeight",null),c=Number.isFinite(R)?Math.min(Math.max(R,80),600):280;if(s.current=c,A_.current)A_.current.style.setProperty("--preview-height",`${c}px`);let n=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),a=()=>H1();if(n.addEventListener)n.addEventListener("change",a);else if(n.addListener)n.addListener(a);return document.addEventListener("visibilitychange",a),()=>{if(o0.current)cancelAnimationFrame(o0.current),o0.current=0;if(n.removeEventListener)n.removeEventListener("change",a);else if(n.removeListener)n.removeListener(a);if(document.removeEventListener("visibilitychange",a),y1.current)clearTimeout(y1.current),y1.current=0;K6(!1,U0.current).catch((F0)=>{console.debug("[workspace-explorer] Workspace visibility teardown ping failed.",F0,{showHidden:U0.current})})}},[]);let _1=G0(()=>BK(q,V,x),[q,V,x]),k$=G0(()=>new Map(_1.map((R)=>[R.node.path,R.node])),[_1]),y$=G0(()=>YK(X_),[X_]);s0.current=k$;let T_=(N?s0.current.get(N):null)?.type==="dir";u(()=>{if(!N||!T_){Z0(null),t.current=null,Y0.current=null;return}if(R0<=0){Z0({loading:!1,error:null,payload:null,disabled:!0}),t.current=null,Y0.current=null;return}let R=N,c=`${x?"hidden":"visible"}:${R0}:${N}`,n=o.current,a=n.get(c);if(a?.root){n.delete(c),n.set(c,a);let M0=VK(a.root,Boolean(a.truncated),b0);if(M0)t.current=M0,Y0.current=N,Z0({loading:!1,error:null,payload:M0,disabled:!1});return}let F0=t.current,V0=Y0.current;Z0({loading:!0,error:null,payload:V0===N?F0:null,disabled:!1}),q6(N,R0,x).then((M0)=>{if(J0.current!==R)return;let x0={root:M0?.root,truncated:Boolean(M0?.truncated)};n.delete(c),n.set(c,x0);while(n.size>cJ){let e0=n.keys().next().value;if(!e0)break;n.delete(e0)}let H0=VK(x0.root,x0.truncated,b0);t.current=H0,Y0.current=N,Z0({loading:!1,error:null,payload:H0,disabled:!1})}).catch((M0)=>{if(J0.current!==R)return;Z0({loading:!1,error:M0?.message||"Failed to load folder size chart",payload:V0===N?F0:null,disabled:!1})})},[N,T_,x,b0,R0]);let q1=Boolean(J&&J.kind==="text"&&!T_&&(!J.size||J.size<=262144)),M$=q1?"Open in editor":J?.size>262144?"File too large to edit":"File is not editable",v4=Boolean(N&&!T_&&mJ(N)),$$=Boolean(N&&N!=="."),m4=Boolean(N&&!T_),c4=Boolean(N&&!T_),w$=N&&T_?x2(N,x):null,T$=OK(B0),b1=hJ(B0),v1=B0?.state||"never_indexed",l4=v1!=="ready",K1=f(()=>P0(!1),[]),R_=f(async(R)=>{K1();try{await R?.()}catch(c){console.warn("[workspace-explorer] Header menu action failed:",c)}},[K1]),h4=f(async(R)=>{R?.stopPropagation?.(),j0(!0),W0((c)=>({scope:"all",last_indexed_at:c?.last_indexed_at||null,last_error:null,indexed_file_count:c?.indexed_file_count||0,roots:c?.roots||[],updated_at:c?.updated_at||null,state:"indexing"}));try{let c=await k7("all");W0(c),y(null),r0.current="",y0.current?.()}catch(c){let n=c?.message||"Failed to reindex workspace";W0((a)=>({scope:"all",last_indexed_at:a?.last_indexed_at||null,last_error:n,indexed_file_count:a?.indexed_file_count||0,roots:a?.roots||[],updated_at:a?.updated_at||null,state:"failed"})),y(n)}finally{j0(!1)}},[]);u(()=>{let R=L0.current;if(k0.current)k0.current.dispose(),k0.current=null;if(!R)return;if(R.innerHTML="",!N||T_||!J||J.error)return;let c={path:N,content:typeof J.text==="string"?J.text:void 0,mtime:J.mtime,size:J.size,preview:J,mode:"view"},n=L_.resolve(c)||L_.get("workspace-preview-default");if(!n)return;let a=n.mount(R,c);return k0.current=a,()=>{if(k0.current===a)a.dispose(),k0.current=null;R.innerHTML=""}},[N,T_,J]);let I1=(R)=>{let c=R?.target;if(c instanceof Element)return c;return c?.parentElement||null},x$=(R)=>{return Boolean(R?.closest?.(".workspace-node-icon, .workspace-label-text"))},n4=(R)=>{if(!R)return!1;if(R.closest?.('input, textarea, [contenteditable="true"]'))return!0;return Boolean(R.isContentEditable)},u5=g((R)=>{let c=I1(R),n=c?.closest?.("[data-path]");if(!n)return;let a=n.dataset.path;if(!a||a===".")return;let F0=Boolean(c?.closest?.("button"))||Boolean(c?.closest?.("a"))||Boolean(c?.closest?.("input")),V0=Boolean(c?.closest?.(".workspace-caret"));if(F0||V0)return;if(Y_.current===a)return;e1(a)}).current,g5=g((R)=>{if(m0.current){m0.current=!1;return}let c=I1(R),n=c?.closest?.("[data-path]");if(Q_.current?.focus?.(),!n)return;let a=n.dataset.path,F0=n.dataset.type,V0=Boolean(c?.closest?.(".workspace-caret")),M0=Boolean(c?.closest?.("button"))||Boolean(c?.closest?.("a"))||Boolean(c?.closest?.("input")),x0=J0.current===a,H0=Y_.current;if(H0){if(H0===a)return;k1()}if(F0==="dir"){if(N_.current=null,U(a),O(null),T(null),z(!1),!d0.current.has(a))a0.current?.(a);if(x0&&!V0)return;B((n_)=>{let $1=new Set(n_);if($1.has(a))$1.delete(a);else $1.add(a);return $1})}else{N_.current=null,U(a);let e0=s0.current.get(a);if(e0)O_.current?.(e0.path,e0);if(!M0&&!V0)I0.current?.(a)}}).current,Z4=g(()=>{r0.current="",y0.current(),V_.current?.(),Array.from(d0.current||[]).filter((c)=>c&&c!==".").forEach((c)=>a0.current?.(c))}).current,I$=g(()=>{N_.current=null,U(null),O(null),T(null),z(!1)}).current,p4=g(()=>{P((R)=>{let c=!R;if(typeof window<"u")K_("workspaceShowHidden",String(c));return U0.current=c,K6(!0,c).catch((a)=>{console.debug("[workspace-explorer] Workspace visibility refresh after toggling hidden files failed.",a,{showHidden:c})}),r0.current="",y0.current?.(),Array.from(d0.current||[]).filter((a)=>a&&a!==".").forEach((a)=>a0.current?.(a)),c})}).current,r4=g((R)=>{if(I1(R)?.closest?.("[data-path]"))return;I$()}).current,V1=f(async(R)=>{if(!R)return;let c=R.split("/").pop()||R;if(!window.confirm(`Delete "${c}"? This cannot be undone.`))return;try{await I7(R);let a=R.includes("/")?R.split("/").slice(0,-1).join("/")||".":".";if(J0.current===R)I$();a0.current?.(a),y(null),C_()}catch(a){O((F0)=>({...F0||{},error:a.message||"Failed to delete file"}))}},[I$]),C$=f((R)=>{let c=Q_.current;if(!c||!R||typeof CSS>"u"||typeof CSS.escape!=="function")return;c.querySelector(`[data-path="${CSS.escape(R)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),X4=f((R)=>{let c=I1(R);if(Y_.current||n4(c))return;let n=_1;if(!n||n.length===0)return;let a=N?n.findIndex((F0)=>F0.node.path===N):-1;if(R.key==="ArrowDown"){R.preventDefault();let F0=Math.min(a+1,n.length-1),V0=n[F0];if(!V0)return;if(U(V0.node.path),V0.node.type!=="dir")O_.current?.(V0.node.path,V0.node),I0.current?.(V0.node.path);else O(null),z(!1),T(null);C$(V0.node.path);return}if(R.key==="ArrowUp"){R.preventDefault();let F0=a<=0?0:a-1,V0=n[F0];if(!V0)return;if(U(V0.node.path),V0.node.type!=="dir")O_.current?.(V0.node.path,V0.node),I0.current?.(V0.node.path);else O(null),z(!1),T(null);C$(V0.node.path);return}if(R.key==="ArrowRight"&&a>=0){let F0=n[a];if(F0?.node?.type==="dir"&&!V.has(F0.node.path))R.preventDefault(),a0.current?.(F0.node.path),B((V0)=>new Set([...V0,F0.node.path]));return}if(R.key==="ArrowLeft"&&a>=0){let F0=n[a];if(F0?.node?.type==="dir"&&V.has(F0.node.path))R.preventDefault(),B((V0)=>{let M0=new Set(V0);return M0.delete(F0.node.path),M0});return}if(R.key==="Enter"&&a>=0){R.preventDefault();let F0=n[a];if(!F0)return;let V0=F0.node.path;if(F0.node.type==="dir"){if(!d0.current.has(V0))a0.current?.(V0);B((x0)=>{let H0=new Set(x0);if(H0.has(V0))H0.delete(V0);else H0.add(V0);return H0}),O(null),T(null),z(!1)}else O_.current?.(V0,F0.node),I0.current?.(V0);return}if((R.key==="Delete"||R.key==="Backspace")&&a>=0){let F0=n[a];if(!F0||F0.node.type==="dir")return;R.preventDefault(),V1(F0.node.path);return}if(R.key==="Escape")R.preventDefault(),I$()},[I$,V1,V,_1,C$,N]),Y4=f((R)=>{let c=rJ(R,Y_.current);if(!c)return;O0.current={path:c.dragPath,dragging:!1,startX:c.startX,startY:c.startY}},[]),m1=f(()=>{let R=O0.current;if(R?.dragging&&R.path){let c=G_.current||z_(),n=i.current;if(typeof n==="function")n(R.path,c)}O0.current={path:null,dragging:!1,startX:0,startY:0},u0.current=0,v(!1),h(null),v_(null),r_(),U1()},[z_,U1,v_,r_]),E1=f((R)=>{let c=O0.current,n=R?.touches?.[0];if(!n||!c?.path)return;let a=Math.abs(n.clientX-c.startX),F0=Math.abs(n.clientY-c.startY),V0=a>8||F0>8;if(!c.dragging&&V0)c.dragging=!0,v(!0),h("move"),x1(c.path);if(c.dragging){R.preventDefault(),H_(n.clientX,n.clientY);let M0=document.elementFromPoint(n.clientX,n.clientY),x0=k_(M0)||z_();if(G_.current!==x0)v_(x0);s_(x0)}},[k_,z_,x1,H_,v_,s_]),b5=g((R)=>{R.preventDefault();let c=A_.current;if(!c)return;let n=R.clientY,a=s.current||280,F0=R.currentTarget;F0.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let V0=n,M0=(H0)=>{V0=H0.clientY;let e0=c.clientHeight-80,n_=Math.min(Math.max(a-(H0.clientY-n),80),e0);c.style.setProperty("--preview-height",`${n_}px`),s.current=n_},x0=()=>{let H0=c.clientHeight-80,e0=Math.min(Math.max(a-(V0-n),80),H0);s.current=e0,F0.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",K_("previewHeight",String(Math.round(e0))),document.removeEventListener("mousemove",M0),document.removeEventListener("mouseup",x0)};document.addEventListener("mousemove",M0),document.addEventListener("mouseup",x0)}).current,L4=g((R)=>{R.preventDefault();let c=A_.current;if(!c)return;let n=R.touches[0];if(!n)return;let a=n.clientY,F0=s.current||280,V0=R.currentTarget;V0.classList.add("dragging"),document.body.style.userSelect="none";let M0=(H0)=>{let e0=H0.touches[0];if(!e0)return;H0.preventDefault();let n_=c.clientHeight-80,$1=Math.min(Math.max(F0-(e0.clientY-a),80),n_);c.style.setProperty("--preview-height",`${$1}px`),s.current=$1},x0=()=>{V0.classList.remove("dragging"),document.body.style.userSelect="",K_("previewHeight",String(Math.round(s.current||F0))),document.removeEventListener("touchmove",M0),document.removeEventListener("touchend",x0),document.removeEventListener("touchcancel",x0)};document.addEventListener("touchmove",M0,{passive:!1}),document.addEventListener("touchend",x0),document.addEventListener("touchcancel",x0)}).current,j$=f((R=N)=>{if(!R)return;QK(T2(R))},[N]),t_=async()=>{if(!N||T_)return;await V1(N)},f$=(R)=>{return Array.from(R?.dataTransfer?.types||[]).includes("Files")},d4=f((R)=>{if(!f$(R))return;if(R.preventDefault(),u0.current+=1,!q_.current)v(!0);h("upload");let c=F1(R)||z_();v_(c),s_(c)},[z_,F1,v_,s_]),G$=f((R)=>{if(!f$(R))return;if(R.preventDefault(),R.dataTransfer)R.dataTransfer.dropEffect="copy";if(!q_.current)v(!0);if(W_.current!=="upload")h("upload");let c=F1(R)||z_();if(G_.current!==c)v_(c);s_(c)},[z_,F1,v_,s_]),b6=f((R)=>{if(!f$(R))return;if(R.preventDefault(),u0.current=Math.max(0,u0.current-1),u0.current===0)v(!1),h(null),v_(null),r_()},[v_,r_]),g_=f(async(R,c=".")=>{let n=Array.from(R||[]);if(n.length===0)return;let a=c&&c!==""?c:".",F0=a!=="."?a:"workspace root";B1(),q0(!0),N0({current:0,total:n.length,name:"",percent:0,done:!1,error:null});try{let V0=null;for(let M0=0;M0<n.length;M0++){let x0=n[M0],H0=x0?.name||`file ${M0+1}`;N0((n_)=>({...n_,current:M0+1,name:H0,percent:0}));let e0=(n_)=>N0(($1)=>({...$1,percent:n_.percent}));try{V0=await w2(x0,a,{onProgress:e0})}catch(n_){let $1=n_?.status,q$=n_?.code;if($1===409||q$==="file_exists"){if(!window.confirm(`"${H0}" already exists in ${F0}. Overwrite?`))continue;V0=await w2(x0,a,{overwrite:!0,onProgress:e0})}else throw n_}}if(V0?.path)N_.current=V0.path,U(V0.path),I0.current?.(V0.path);a0.current?.(a),C_(),N0((M0)=>({...M0,done:!0})),B1(),$0.current=window.setTimeout(()=>{$0.current=0,N0(null)},1500)}catch(V0){y(V0.message||"Failed to upload file"),N0((M0)=>M0?{...M0,error:V0.message||"Upload failed"}:null),B1(),$0.current=window.setTimeout(()=>{$0.current=0,N0(null)},4000)}finally{q0(!1)}},[B1]),r8=f(async(R,c)=>{if(!R)return;let n=s0.current?.get(R);if(!n)return;let a=c&&c!==""?c:".",F0=R.includes("/")?R.split("/").slice(0,-1).join("/")||".":".";if(a===F0)return;try{let M0=(await x7(R,a))?.path||R;if(n.type==="dir")B((x0)=>{let H0=new Set;for(let e0 of x0)if(e0===R)H0.add(M0);else if(e0.startsWith(`${R}/`))H0.add(`${M0}${e0.slice(R.length)}`);else H0.add(e0);return H0});if(U(M0),n.type==="dir")O(null),z(!1),T(null);else I0.current?.(M0);a0.current?.(F0),a0.current?.(a),C_()}catch(V0){y(V0?.message||"Failed to move entry")}},[]);i.current=r8;let d8=f(async(R)=>{if(!f$(R))return;R.preventDefault(),u0.current=0,v(!1),h(null),z0(null),r_();let c=Array.from(R?.dataTransfer?.files||[]);if(c.length===0)return;let n=G_.current||F1(R)||z_();await g_(c,n)},[z_,F1,g_]),C1=f((R)=>{if(R?.stopPropagation?.(),K0)return;let c=R?.currentTarget?.dataset?.uploadTarget||".";y_.current=c,E_.current?.click()},[K0]),q4=f((R)=>{R?.preventDefault?.(),R?.stopPropagation?.();let c=R?.currentTarget?.dataset?.folderHintTarget||J0.current||".";if(!c)return;E0.current?.(c,s0.current.get(c))},[]),P$=f(()=>{if(K0)return;let R=J0.current,c=R?s0.current?.get(R):null;y_.current=c?.type==="dir"?c.path:".",E_.current?.click()},[K0]),R$=f(()=>{R_(()=>a_(null))},[R_,a_]),S$=f(()=>{R_(()=>P$())},[R_,P$]),i4=f(()=>{R_(()=>Z4())},[R_,Z4]),Z$=f(()=>{R_(()=>p4())},[R_,p4]),X$=f(()=>{if(!N||!v4)return;R_(()=>S0.current?.(N,J))},[R_,N,v4,J]),K4=f(()=>{if(!N||!q1)return;R_(()=>S0.current?.(N,J))},[R_,N,q1,J]),V4=f(()=>{if(!N||N===".")return;R_(()=>e1(N))},[R_,N,e1]),Y$=f(()=>{if(!N||T_)return;R_(()=>t_())},[R_,N,T_,t_]),v6=f(()=>{if(!N||T_)return;R_(()=>j$())},[R_,N,T_,j$]),L$=f(()=>{if(!w$)return;K1(),QK(w$)},[K1,w$]),m6=f(()=>{K1(),X?.()},[K1,X]),v5=f(()=>{K1(),Y?.()},[K1,Y]),m5=f(()=>{K1(),L?.()},[K1,L]),c5=f((R)=>{if(!R||R.button!==0)return;let c=R.currentTarget;if(!c||!c.dataset)return;let n=c.dataset.path;if(!n||n===".")return;if(Y_.current===n)return;let a=I1(R);if(a?.closest?.("button, a, input, .workspace-caret"))return;if(!x$(a))return;R.preventDefault(),D0.current={path:n,dragging:!1,startX:R.clientX,startY:R.clientY};let F0=(M0)=>{let x0=D0.current;if(!x0?.path)return;let H0=Math.abs(M0.clientX-x0.startX),e0=Math.abs(M0.clientY-x0.startY),n_=H0>4||e0>4;if(!x0.dragging&&n_)x0.dragging=!0,m0.current=!0,v(!0),h("move"),x1(x0.path),H_(M0.clientX,M0.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(x0.dragging){M0.preventDefault(),H_(M0.clientX,M0.clientY);let $1=document.elementFromPoint(M0.clientX,M0.clientY),q$=k_($1)||z_();if(G_.current!==q$)v_(q$);s_(q$)}},V0=()=>{document.removeEventListener("mousemove",F0),document.removeEventListener("mouseup",V0);let M0=D0.current;if(M0?.dragging&&M0.path){let x0=G_.current||z_(),H0=i.current;if(typeof H0==="function")H0(M0.path,x0)}D0.current={path:null,dragging:!1,startX:0,startY:0},u0.current=0,v(!1),h(null),v_(null),r_(),U1(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{m0.current=!1},0)};document.addEventListener("mousemove",F0),document.addEventListener("mouseup",V0)},[k_,z_,x1,H_,U1,v_,s_,r_]),i8=f(async(R)=>{let c=Array.from(R?.target?.files||[]);if(c.length===0)return;let n=y_.current||".";if(await g_(c,n),y_.current=".",R?.target)R.target.value=""},[g_]);return F`
        <aside
            class=${`workspace-sidebar${S?" workspace-drop-active":""}`}
            data-workspace-scale=${X_}
            ref=${A_}
            onDragEnter=${d4}
            onDragOver=${G$}
            onDragLeave=${b6}
            onDrop=${d8}
        >
            <input type="file" multiple style="display:none" ref=${E_} onChange=${i8} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${g0}
                            class=${`workspace-menu-button${__?" active":""}`}
                            onClick=${(R)=>{R.stopPropagation(),P0((c)=>!c)}}
                            title="Workspace actions"
                            aria-label="Workspace actions"
                            aria-haspopup="menu"
                            aria-expanded=${__?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${__&&F`
                            <div class="workspace-menu-dropdown" ref=${t0} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${R$} disabled=${K0}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${S$} disabled=${K0}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${i4}>Refresh tree</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${()=>R_(()=>h4())} disabled=${d}>
                                    ${d?"Reindexing workspace…":"Reindex workspace"}
                                </button>
                                <button class=${`workspace-menu-item${x?" active":""}`} role="menuitem" onClick=${Z$}>
                                    ${x?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${(X||Y||L)&&F`<div class="workspace-menu-separator"></div>`}
                                ${X&&F`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${m6}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${Y&&F`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${v5}>
                                        Open VNC in tab
                                    </button>
                                `}
                                ${L&&F`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${m5}>
                                        ${K?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}

                                ${N&&F`<div class="workspace-menu-separator"></div>`}
                                ${v4&&F`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${X$}>Open in tab</button>
                                `}
                                ${N&&!T_&&F`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${K4} disabled=${!q1}>Open in editor</button>
                                `}
                                ${$$&&F`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${V4}>Rename selected</button>
                                `}
                                ${c4&&F`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${v6}>Download selected file</button>
                                `}
                                ${w$&&F`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${L$}>Download selected folder (zip)</button>
                                `}
                                ${m4&&F`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${Y$}>Delete selected file</button>
                                `}
                                <div class="workspace-menu-separator"></div>
                                <button class="workspace-menu-item" role="menuitem" onClick=${()=>{P0(!1),window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:{section:"workspace"}}))}}>Settings</button>
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${a_} title="New file" disabled=${K0}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${Z4} title="Refresh tree">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            ${l4&&F`
                <div class="workspace-index-status-row">
                    <div class=${`workspace-index-status-chip state-${v1}`} title=${b1}>
                        <span class="workspace-index-status-dot" aria-hidden="true"></span>
                        <span>${T$}</span>
                    </div>
                </div>
            `}
            <div class="workspace-tree" onClick=${r4}>
                ${X0&&F`
                    <div class="workspace-upload-strip">
                        <div class="workspace-upload-strip-text">
                            ${X0.error?F`<span class="workspace-upload-strip-error">${X0.error}</span>`:X0.done?F`<span>Done</span>`:F`<span>${X0.total>1?`Uploading ${X0.current}/${X0.total}: ${X0.name}`:`Uploading ${X0.name}`}${X0.percent>0?` (${X0.percent}%)`:"…"}</span>`}
                        </div>
                        ${!X0.done&&!X0.error&&F`
                            <div class="workspace-upload-strip-bar">
                                <div class="workspace-upload-strip-fill" style=${`width:${X0.percent||0}%`}></div>
                            </div>
                        `}
                    </div>
                `}
                ${I&&F`<div class="workspace-loading">Loading…</div>`}
                ${W&&F`<div class="workspace-error">${W}</div>`}
                ${q&&F`
                    <div
                        class="workspace-tree-list"
                        ref=${Q_}
                        tabIndex="0"
                        onClick=${g5}
                        onDblClick=${u5}
                        onKeyDown=${X4}
                        onTouchStart=${Y4}
                        onTouchEnd=${m1}
                        onTouchMove=${E1}
                        onTouchCancel=${m1}
                    >
                        ${_1.map(({node:R,depth:c})=>{let n=R.type==="dir",a=R.path===N,F0=R.path===D,V0=n&&V.has(R.path),M0=e&&R.path===e,x0=Array.isArray(R.children)&&R.children.length>0?R.children.length:Number(R.child_count)||0;return F`
                                <div
                                    key=${R.path}
                                    class=${`workspace-row${a?" selected":""}${M0?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+c*y$.indentPx}px`}}
                                    data-path=${R.path}
                                    data-type=${R.type}
                                    onMouseDown=${c5}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${n?V0?F`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:F`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${n?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${n?F`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:F`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${F0?F`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${D_}
                                                value=${H}
                                                onInput=${(H0)=>M(H0?.target?.value||"")}
                                                onKeyDown=${(H0)=>{if(H0.stopPropagation(),H0.key==="Enter")H0.preventDefault(),b4();else if(H0.key==="Escape")H0.preventDefault(),k1()}}
                                                onBlur=${k1}
                                                onClick=${(H0)=>H0.stopPropagation()}
                                            />
                                        `:F`<span class="workspace-label"><span class="workspace-label-text">${R.name}</span></span>`}
                                    ${n&&!V0&&x0>0&&F`
                                        <span class="workspace-count">${x0}</span>
                                    `}
                                    ${n&&F`
                                        <button
                                            class="workspace-folder-upload"
                                            data-folder-hint-target=${R.path}
                                            title="Add folder hint to compose"
                                            aria-label=${`Add folder hint for ${R.path}`}
                                            onClick=${q4}
                                        >
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                                <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                                                <path d="M12 11v6"/>
                                                <path d="M9 14h6"/>
                                            </svg>
                                        </button>
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${R.path}
                                            title="Upload files to this folder"
                                            onClick=${C1}
                                            disabled=${K0}
                                        >
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                                <polyline points="7 8 12 3 17 8"/>
                                                <line x1="12" y1="3" x2="12" y2="15"/>
                                            </svg>
                                        </button>
                                    `}
                                </div>
                            `})}
                    </div>
                `}
            </div>
            ${N&&F`
                <div class="workspace-preview-splitter-h" onMouseDown=${b5} onTouchStart=${L4}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${N}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${a_} title="New file" disabled=${K0}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!T_&&F`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>q1&&S0.current?.(N,J)}
                                    title=${M$}
                                    disabled=${!q1}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${t_}
                                    title="Delete file"
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <polyline points="3 6 5 6 21 6" />
                                        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                        <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                                        <line x1="10" y1="11" x2="10" y2="17" />
                                        <line x1="14" y1="11" x2="14" y2="17" />
                                    </svg>
                                </button>
                            `}
                            ${T_?F`
                                    <button
                                        class="workspace-download"
                                        data-folder-hint-target=${N}
                                        onClick=${q4}
                                        title="Add folder hint to compose"
                                        aria-label=${`Add folder hint for ${N}`}
                                    >
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                                            <path d="M12 11v6"/>
                                            <path d="M9 14h6"/>
                                        </svg>
                                    </button>
                                    <button class="workspace-download" onClick=${P$}
                                        title="Upload files to this folder" disabled=${K0}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${x2(N,x)} download
                                        title="Download folder as zip" onClick=${(R)=>R.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:F`<a class="workspace-download" href=${T2(N)} download
                                        title="Download" onClick=${(R)=>R.stopPropagation()}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </a>`}
                        </div>
                    </div>
                    ${k&&F`<div class="workspace-loading">Loading preview…</div>`}
                    ${J?.error&&F`<div class="workspace-error">${J.error}</div>`}
                    ${T_&&F`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${_0?.disabled&&F`<div class="workspace-preview-text">Folder size preview scanning is disabled in Workspace settings.</div>`}
                        ${_0?.loading&&F`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${_0?.error&&F`<div class="workspace-error">${_0.error}</div>`}
                        ${_0?.payload&&_0.payload.segments?.length>0&&F`
                            <${lJ} payload=${_0.payload} />
                        `}
                        ${_0?.payload&&(!_0.payload.segments||_0.payload.segments.length===0)&&F`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${J&&!J.error&&!T_&&F`
                        <div class="workspace-preview-body" ref=${L0}></div>
                    `}
                </div>
            `}
            ${r&&F`
                <div class="workspace-drag-ghost" ref=${i0}>${r.label}</div>
            `}
        </aside>
    `}T0();var dJ=new Set(["html-viewer","kanban-editor","mindmap-editor"]);function D8(_,$,j){let G=String(_||"").trim();if(!G)return null;if($)return $;if(typeof j!=="function")return null;return j({path:G,mode:"edit"})?.id||null}function AK(_,$,j){let G=D8(_,$,j);return G!=null&&dJ.has(G)}function kK(_,$,j){return D8(_,$,j)==="html-viewer"?"Edit":"Edit Source"}function yK(_,$,j){return D8(_,$,j)==="editor"}var iJ=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,oJ=/\.(csv|tsv)$/i,sJ=/\.pdf$/i,aJ=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function tJ(_,{hasPopOutTab:$=!1}={}){let j=typeof _==="string"?_.trim():"";if(!j)return null;let G=Gq(j,{hasPopOutTab:$});if(G)return G;if(iJ.test(j)){let Z="/workspace/raw?path="+encodeURIComponent(j),X=j.split("/").pop()||"document";return"/office-viewer/?url="+encodeURIComponent(Z)+"&name="+encodeURIComponent(X)}if(oJ.test(j))return"/csv-viewer/?path="+encodeURIComponent(j);if(sJ.test(j))return"/workspace/raw?path="+encodeURIComponent(j);if(aJ.test(j))return"/image-viewer/?path="+encodeURIComponent(j);return null}function MK({tabs:_,activeId:$,onActivate:j,onClose:G,onCloseOthers:Z,onCloseAll:X,onTogglePin:Y,onTogglePreview:L,onToggleDiff:K,onEditSource:q,previewTabs:Q,diffTabs:V,paneOverrides:B,detachedTabs:N,onReattachTab:U,onToggleDock:D,dockVisible:E,onToggleZen:H,zenMode:M,onPopOutTab:J}){let[O,T]=C(null),I=g(null);u(()=>{if(!O)return;let b=(e)=>{if(e.type==="keydown"&&e.key!=="Escape")return;T(null)};return document.addEventListener("click",b),document.addEventListener("keydown",b),()=>{document.removeEventListener("click",b),document.removeEventListener("keydown",b)}},[O]),u(()=>{let b=(e)=>{if(e.ctrlKey&&e.key==="Tab"){if(e.preventDefault(),!_.length)return;let z0=_.findIndex((K0)=>K0.id===$);if(e.shiftKey){let K0=_[(z0-1+_.length)%_.length];j?.(K0.id)}else{let K0=_[(z0+1)%_.length];j?.(K0.id)}return}if((e.ctrlKey||e.metaKey)&&e.key==="w"){let z0=document.querySelector(".editor-pane");if(z0&&z0.contains(document.activeElement)){if(e.preventDefault(),$)G?.($)}}};return document.addEventListener("keydown",b),()=>document.removeEventListener("keydown",b)},[_,$,j,G]);let A=f((b,e)=>{if(b.button===0){j?.(e);return}if(b.button===1)b.preventDefault(),G?.(e)},[j,G]),k=f((b,e)=>{if(b.defaultPrevented)return;if(b.button===0)j?.(e)},[j]),z=f((b,e)=>{b.preventDefault(),T({id:e,x:b.clientX,y:b.clientY})},[]),W=f((b)=>{b.stopPropagation()},[]),y=f((b,e)=>{b.preventDefault(),b.stopPropagation(),G?.(e)},[G]);u(()=>{if(!$||!I.current)return;let b=I.current.querySelector(".tab-item.active");if(b)b.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]);let x=f((b)=>{if(!(B instanceof Map))return null;return B.get(b)||null},[B]),P=G0(()=>_.find((b)=>b.id===O?.id)||null,[O?.id,_]),S=G0(()=>{let b=O?.id;if(!b)return!1;return AK(b,x(b),(e)=>L_.resolve(e))},[O?.id,x]),v=G0(()=>{let b=O?.id;if(!b)return"Edit Source";return kK(b,x(b),(e)=>L_.resolve(e))},[O?.id,x]),l=G0(()=>{let b=O?.id;if(!b||!(N instanceof Map))return!1;return N.has(b)},[O?.id,N]),h=G0(()=>{let b=O?.id;if(!b||!(V instanceof Set))return!1;return V.has(b)},[O?.id,V]),r=G0(()=>{let b=O?.id;if(!b)return!1;let e=_.find((K0)=>K0.id===b)||null;if(!e)return!1;return yK(b,x(b),(K0)=>L_.resolve(K0))&&Boolean(e.dirty||h)},[O?.id,h,x,_]);if(!_.length)return null;return F`
        <div class="tab-strip" ref=${I} role="tablist">
            ${_.map((b)=>F`
                <div
                    key=${b.id}
                    class=${`tab-item${b.id===$?" active":""}${b.dirty?" dirty":""}${b.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${b.id===$}
                    title=${b.path}
                    onMouseDown=${(e)=>A(e,b.id)}
                    onClick=${(e)=>k(e,b.id)}
                    onContextMenu=${(e)=>z(e,b.id)}
                >
                    ${b.pinned&&F`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${b.label}</span>
                    ${N instanceof Map&&N.has(b.id)&&F`
                        <span class="tab-detached-badge" aria-label="Detached" title="Open in separate window">↗</span>
                    `}
                    <button
                        type="button"
                        class="tab-close"
                        onPointerDown=${W}
                        onMouseDown=${W}
                        onClick=${(e)=>y(e,b.id)}
                        title=${b.dirty?"Unsaved changes":"Close"}
                        aria-label=${b.dirty?"Unsaved changes":`Close ${b.label}`}
                    >
                        ${b.dirty?F`<span class="tab-dirty-dot" aria-hidden="true"></span>`:F`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${D&&F`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${E?" active":""}`}
                    onClick=${D}
                    title=${`${E?"Hide":"Show"} terminal (Ctrl+\`)`}
                    aria-label=${`${E?"Hide":"Show"} terminal`}
                    aria-pressed=${E?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="1.75" y="2.25" width="12.5" height="11.5" rx="2"/>
                        <polyline points="4.5 5.25 7 7.75 4.5 10.25"/>
                        <line x1="8.5" y1="10.25" x2="11.5" y2="10.25"/>
                    </svg>
                </button>
            `}
            ${H&&F`
                <button
                    class=${`tab-strip-zen-toggle${M?" active":""}`}
                    onClick=${H}
                    title=${`${M?"Exit":"Enter"} zen mode (Ctrl+Shift+Z)`}
                    aria-label=${`${M?"Exit":"Enter"} zen mode`}
                    aria-pressed=${M?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        ${M?F`<polyline points="4 8 1.5 8 1.5 1.5 14.5 1.5 14.5 8 12 8"/><polyline points="4 8 1.5 8 1.5 14.5 14.5 14.5 14.5 8 12 8"/>`:F`<polyline points="5.5 1.5 1.5 1.5 1.5 5.5"/><polyline points="10.5 1.5 14.5 1.5 14.5 5.5"/><polyline points="5.5 14.5 1.5 14.5 1.5 10.5"/><polyline points="10.5 14.5 14.5 14.5 14.5 10.5"/>`}
                    </svg>
                </button>
            `}
        </div>
        ${O&&F`
            <div class="tab-context-menu" style=${{left:O.x+"px",top:O.y+"px"}}>
                <button onClick=${()=>{G?.(O.id),T(null)}}>Close</button>
                <button onClick=${()=>{Z?.(O.id),T(null)}}>Close Others</button>
                <button onClick=${()=>{X?.(),T(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{Y?.(O.id),T(null)}}>
                    ${P?.pinned?"Unpin":"Pin"}
                </button>
                ${S&&q&&F`
                    <button onClick=${()=>{q(O.id),T(null)}}>${v}</button>
                `}
                ${l&&U&&F`
                    <button onClick=${()=>{U(O.id),T(null)}}>Reattach</button>
                `}
                ${J&&!l&&F`
                    <button onClick=${()=>{let b=_.find((e)=>e.id===O.id);J(O.id,b?.label),T(null)}}>Open in Window</button>
                `}
                ${r&&K&&F`
                    <hr />
                    <button onClick=${()=>{j?.(O.id),K(O.id),T(null)}}>${h?"Hide Diff":"Compare to Saved"}</button>
                `}
                ${L&&/\.(md|mdx|markdown)$/i.test(O.id)&&F`
                    <hr />
                    <button onClick=${()=>{L(O.id),T(null)}}>
                        ${Q?.has(O.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${(()=>{let b=tJ(O.id,{hasPopOutTab:typeof J==="function"});if(!b)return null;return F`
                        <hr />
                        <button onClick=${()=>{window.open(b,"_blank","noopener"),T(null)}}>Open in New Tab</button>
                    `})()}
            </div>
        `}
    `}T0();f_();b2();function k5(_,$=30){let j=Array.isArray(_)?_.map((G)=>Number(G)).filter((G)=>Number.isFinite(G)):[];return j.length>$?j.slice(j.length-$):j}function jj(_,$=30){return k5(_,$).map((j)=>Math.max(0,Math.min(100,j)))}function w6(_,$=56,j=16,G={}){let Z=k5(_);if(Z.length===0)return"";let X=Number.isFinite(G.min)?Number(G.min):Math.min(...Z),Y=Number.isFinite(G.max)?Number(G.max):Math.max(...Z);if(!(Y>X)){let L=(j/2).toFixed(2);return`M 0 ${L} L ${$} ${L}`}if(Z.length===1){let L=(Z[0]-X)/(Y-X),K=(j-L*j).toFixed(2);return`M 0 ${K} L ${$} ${K}`}return Z.map((L,K)=>{let q=K/(Z.length-1||1)*$,Q=(L-X)/(Y-X),V=j-Q*j;return`${K===0?"M":"L"} ${q.toFixed(2)} ${V.toFixed(2)}`}).join(" ")}function y5(_){return`${Math.round(Number(_)||0)}%`}function Gj(_){let $=Number(_);if(!Number.isFinite($)||$<=0)return"0B";let j=["B","K","M","G","T"],G=0,Z=$;while(Z>=1024&&G<j.length-1)Z/=1024,G+=1;let X=Z>=100||G===0?0:Z>=10?0:1;return`${Z.toFixed(X)}${j[G]}`}function eJ(_){let $=[`CPU ${y5(_?.cpu_percent)}`,`RAM ${y5(_?.ram_percent)}`];if(Number(_?.buffer_cache_bytes)>0)$.push(`BUF ${Gj(_?.buffer_cache_bytes)}`);if(Number.isFinite(Number(_?.swap_percent))&&Number(_?.swap_total_bytes)>0)$.push(`SWP ${y5(_?.swap_percent)}`);return $.join(" • ")}function wK(_){return Number(_?.process_memory?.vm_rss_bytes)>0?Number(_.process_memory.vm_rss_bytes):Number(_?.process_memory?.rss_bytes)||0}function _A(_){return wK(_)>0&&k5(_?.process_rss_series_bytes).length>0}function $A(){if(typeof window>"u"||typeof window.matchMedia!=="function")return!1;return window.matchMedia("(max-width: 900px)").matches}function TK({mode:_="overlay"}){let[$,j]=C(()=>D6(!1)),[G,Z]=C(()=>eX(!1)),[X,Y]=C(()=>$A()),[L,K]=C({cpu_percent:0,ram_percent:0,swap_percent:null,cpu_series:[],ram_series:[],swap_series:[],buffer_cache_bytes:null,buffer_cache_series_bytes:[],process_rss_series_bytes:[],process_memory:{rss_bytes:0,vm_rss_bytes:null},swap_total_bytes:0,swap_used_bytes:0,sample_interval_ms:2000,platform:""}),[q,Q]=C(!1);u(()=>{let z=(y)=>{j(Boolean(y?.detail?.enabled))},W=(y)=>{Z(Boolean(y?.detail?.collapsed))};return window.addEventListener(x4,z),window.addEventListener(g2,W),()=>{window.removeEventListener(x4,z),window.removeEventListener(g2,W)}},[]),u(()=>{if(typeof window>"u"||typeof window.matchMedia!=="function")return;let z=window.matchMedia("(max-width: 900px)"),W=()=>Y(Boolean(z.matches));if(W(),typeof z.addEventListener==="function")return z.addEventListener("change",W),()=>z.removeEventListener("change",W);return z.addListener(W),()=>z.removeListener(W)},[]);let B=_==="overlay";u(()=>{if(!$||!B)return;let z=!1,W=0,y=async()=>{Q((x)=>x||L.cpu_series.length>0?x:!0);try{let x=await L7();if(z)return;K({cpu_percent:Number(x?.cpu_percent)||0,ram_percent:Number(x?.ram_percent)||0,swap_percent:Number.isFinite(Number(x?.swap_percent))?Number(x?.swap_percent):null,cpu_series:jj(x?.cpu_series),ram_series:jj(x?.ram_series),swap_series:jj(x?.swap_series),buffer_cache_bytes:Number.isFinite(Number(x?.buffer_cache_bytes))?Number(x?.buffer_cache_bytes):null,buffer_cache_series_bytes:k5(x?.buffer_cache_series_bytes),process_rss_series_bytes:k5(x?.process_rss_series_bytes),process_memory:{rss_bytes:Number(x?.process_memory?.rss_bytes)||0,vm_rss_bytes:Number.isFinite(Number(x?.process_memory?.vm_rss_bytes))?Number(x?.process_memory?.vm_rss_bytes):null},swap_total_bytes:Number(x?.swap_total_bytes)||0,swap_used_bytes:Number(x?.swap_used_bytes)||0,sample_interval_ms:Number(x?.sample_interval_ms)||2000,platform:String(x?.platform||"")})}catch{if(z)return}finally{if(!z)Q(!1)}};return y(),W=window.setInterval(()=>{if(document?.visibilityState==="hidden")return;y()},Math.max(1000,Number(L.sample_interval_ms)||2000)),()=>{if(z=!0,W)window.clearInterval(W)}},[$,B]);let N=G0(()=>w6(L.cpu_series,56,16,{min:0,max:100}),[L.cpu_series]),U=G0(()=>w6(L.ram_series,56,16,{min:0,max:100}),[L.ram_series]),D=G0(()=>w6(L.swap_series,56,16,{min:0,max:100}),[L.swap_series]),E=G0(()=>w6(L.buffer_cache_series_bytes),[L.buffer_cache_series_bytes]),H=G0(()=>w6(L.process_rss_series_bytes),[L.process_rss_series_bytes]),M=Number(L.buffer_cache_bytes)>0&&k5(L.buffer_cache_series_bytes).length>0,J=Number.isFinite(Number(L.swap_percent))&&L.swap_total_bytes>0,O=wK(L),T=_A(L),I=G0(()=>eJ(L),[L]);if(!$||!B)return null;let A=G?"Show system meters":q?"Updating system meters… Click to collapse.":"System meters — click to collapse.",k=(z)=>{z?.stopPropagation?.();let W=!G;Z(W),r7(W)};return F`
        <div class=${`system-meters-hud system-meters-hud-${_}${G?" is-collapsed":""}`} aria-live="polite">
            <button
                class="system-meters-card"
                type="button"
                title=${A}
                aria-label=${A}
                aria-expanded=${G?"false":"true"}
                onClick=${k}
            >
                ${G?F`<span class="system-meters-collapse-tab" aria-hidden="true">◂</span>`:X?F`<span class="system-meters-compact-summary">${I}</span>`:F`
                            <div class="system-meters-row cpu">
                                <span class="system-meters-label">CPU</span>
                                <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                    <path d=${N}></path>
                                </svg>
                                <span class="system-meters-value">${y5(L.cpu_percent)}</span>
                            </div>
                            <div class="system-meters-row ram">
                                <span class="system-meters-label">RAM</span>
                                <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                    <path d=${U}></path>
                                </svg>
                                <span class="system-meters-value">${y5(L.ram_percent)}</span>
                            </div>
                            ${T&&F`
                                <div class="system-meters-row rss">
                                    <span class="system-meters-label">RSS</span>
                                    <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                        <path d=${H}></path>
                                    </svg>
                                    <span class="system-meters-value">${Gj(O)}</span>
                                </div>
                            `}
                            ${M&&F`
                                <div class="system-meters-row buf">
                                    <span class="system-meters-label">BUF</span>
                                    <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                        <path d=${E}></path>
                                    </svg>
                                    <span class="system-meters-value">${Gj(L.buffer_cache_bytes)}</span>
                                </div>
                            `}
                            ${J&&F`
                                <div class="system-meters-row swap">
                                    <span class="system-meters-label">SWP</span>
                                    <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                        <path d=${D}></path>
                                    </svg>
                                    <span class="system-meters-value">${y5(L.swap_percent)}</span>
                                </div>
                            `}
                        `}
            </button>
        </div>
    `}function jA(_){let{workspaceOpen:$,editorOpen:j,chatOnlyMode:G,zenMode:Z}=_;return`app-shell${$?"":" workspace-collapsed"}${j?" editor-open":""}${G?" chat-only":""}${Z?" zen-mode":""}`}function GA(_){let $=_?.user_message?.id??_?.row_id;if($===null||$===void 0||$==="")return null;let j=Number($);return Number.isFinite(j)?j:null}function ZA(_){let{id:$,scrollToBottom:j,getElementById:G=(q)=>document.getElementById(q),scheduleRaf:Z=(q)=>requestAnimationFrame(q),scheduleTimeout:X=(q,Q)=>{setTimeout(q,Q)},maxAttempts:Y=12}=_,L=(q)=>{q.scrollIntoView({behavior:"smooth",block:"center"}),q.classList.add("post-highlight"),X(()=>q.classList.remove("post-highlight"),2000)},K=(q)=>{let Q=G(`post-${$}`);if(Q){L(Q);return}if(q<=0){j?.();return}Z(()=>{X(()=>K(q-1),40)})};K(Y)}function XA(_){let{response:$,viewStateRef:j,scrollToBottom:G,scrollPostedMessage:Z=(K)=>ZA({id:K,scrollToBottom:G})}=_,{searchQuery:X,searchOpen:Y}=j.current||{};if(X||Y)return;let L=GA($);if(L){Z(L);return}G()}function xK(_){let{appShellRef:$,workspaceOpen:j,editorOpen:G,chatOnlyMode:Z,zenMode:X,isRenameBranchFormOpen:Y,closeRenameCurrentBranchForm:L,handleRenameCurrentBranch:K,renameBranchNameDraft:q,renameBranchNameInputRef:Q,setRenameBranchNameDraft:V,renameBranchDraftState:B,isRenamingBranch:N,addFileRef:U,addFolderRef:D,openEditor:E,openTerminalTab:H,openVncTab:M,hasDockPanes:J,toggleDock:O,dockVisible:T,handleSplitterMouseDown:I,handleSplitterTouchStart:A,showEditorPaneContainer:k,tabStripTabs:z,tabStripActiveId:W,handleTabActivate:y,handleTabClose:x,handleTabCloseOthers:P,handleTabCloseAll:S,handleTabTogglePin:v,handleTabTogglePreview:l,handleTabToggleDiff:h,handleTabEditSource:r,handleReattachPane:b,previewTabs:e,diffTabs:z0,tabPaneOverrides:K0,toggleZenMode:q0,handlePopOutPane:X0,isWebAppMode:N0,editorContainerRef:_0,editorInstanceRef:Z0,detachedTabs:B0,activeDetachedTab:W0,detachedDockPane:d,handleDockSplitterMouseDown:j0,handleDockSplitterTouchStart:A0,TERMINAL_TAB_PATH:f0,dockContainerRef:b0,handleEditorSplitterMouseDown:c0,handleEditorSplitterTouchStart:X_,searchQuery:l0,isIOSDevice:__,currentBranchRecord:P0,currentChatJid:p0,currentChatBranches:R0,handleBranchPickerChange:d0,formatBranchPickerLabel:r0,openRenameCurrentBranchForm:U_,handlePruneCurrentBranch:o0,handlePurgeArchivedBranch:h0,currentHashtag:y0,handleBackToTimeline:V_,activeSearchScopeLabel:s0,oobePanelState:O_,composePrefillRequest:E0,requestComposePrefill:S0,handleOobeSetupProvider:I0,handleOobeShowModelPicker:a0,handleOobeOpenWorkspace:A_,handleDismissProviderMissingOobe:Q_,handleCompleteProviderReadyOobe:D_,posts:E_,isMainTimelineView:y_,hasMore:$0,loadMore:O0,timelineRef:D0,handleHashtagClick:v0,addMessageRef:m0,scrollToMessage:s,openFileFromPill:o,openTimelineFileFromPill:t,handleDeletePost:Y0,handleOpenFloatingWidget:L0,agents:k0,userProfile:t0,removingPostIds:g0,agentStatus:U0,isCompactionStatus:w0,agentDraft:j_,agentPlan:u0,agentThought:G_,pendingRequest:q_,intentToast:W_,currentTurnId:i0,steerQueued:p_,handlePanelToggle:w_,btwSession:i,closeBtwPanel:J0,handleBtwRetry:Y_,handleBtwInject:N_,floatingWidget:h_,handleCloseFloatingWidget:B1,handleFloatingWidgetEvent:u_,attachmentPreview:J1,setAttachmentPreview:C_,extensionStatusPanels:M_,pendingExtensionPanelActions:A1,handleExtensionPanelAction:z_,searchOpen:k_,followupQueueItems:F1,handleInjectQueuedFollowup:v_,handleRemoveQueuedFollowup:r_,handleMoveQueuedFollowup:s_,viewStateRef:H_,loadPosts:x1,scrollToBottom:U1,searchScope:g1,handleSearch:k1,handleSearchScopeChange:e1,setSearchScope:b4,enterSearchMode:A$,exitSearchMode:a_,fileRefs:m_,removeFileRef:y1,clearFileRefs:H1,setFileRefsFromCompose:_1,folderRefs:k$,removeFolderRef:y$,clearFolderRefs:_$,setFolderRefsFromCompose:T_,messageRefs:q1,removeMessageRef:M$,clearMessageRefs:v4,setMessageRefsFromCompose:$$,handleCreateSessionFromCompose:m4,handleCreateRootSessionFromCompose:c4,handleRestoreBranch:w$,attachActiveEditorFile:T$,followupQueueCount:b1,handleBtwIntercept:v1,handleMessageResponse:l4,handleComposeSubmitError:K1,isComposeBoxAgentActive:R_,activeChatAgents:h4,connectionStatus:I1,stateAccessFailed:x$,activeModel:n4,agentModelsPayload:u5,activeModelUsage:g5,activeThinkingLevel:Z4,supportsThinking:I$,contextUsage:p4,extensionWorkingState:r4,notificationsEnabled:V1,notificationPermission:C$,handleToggleNotifications:X4,setActiveModel:Y4,applyModelState:m1,setPendingRequest:E1,pendingRequestRef:b5,toggleWorkspace:L4}=_,j$=()=>{if(__())return;U1()};return F`
    <div class=${jA({workspaceOpen:j,editorOpen:G,chatOnlyMode:Z,zenMode:X})} ref=${$}>
      <${TK} mode="overlay" />
      ${Y&&F`
        <div class="rename-branch-overlay" onPointerDown=${(t_)=>{if(t_.target===t_.currentTarget)L()}}>
          <form
            class="rename-branch-panel"
            onSubmit=${(t_)=>{t_.preventDefault(),K(q)}}
          >
            <div class="rename-branch-title">Rename session</div>
            <input
              ref=${Q}
              value=${q}
              onInput=${(t_)=>{let f$=t_.currentTarget?.value??"";V(String(f$))}}
              onKeyDown=${(t_)=>{if(t_.key==="Escape")t_.preventDefault(),L()}}
              autocomplete="off"
              placeholder="Session handle (letters, numbers, - and _ only)"
            />
            <div class=${`rename-branch-help ${B.kind||"info"}`}>
              ${B.message}
            </div>
            <div class="rename-branch-actions">
              <button type="submit" class="compose-model-popup-btn primary" disabled=${N||!B.canSubmit}>
                ${N?"Renaming…":"Save"}
              </button>
              <button
                type="button"
                class="compose-model-popup-btn"
                onClick=${L}
                disabled=${N}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      `}
      ${!Z&&F`
        <${JK}
          onFileSelect=${U}
          onFolderSelect=${D}
          visible=${j}
          active=${j||G}
          onOpenEditor=${E}
          onOpenTerminalTab=${H}
          onOpenVncTab=${M}
          onToggleTerminal=${J?O:void 0}
          terminalVisible=${Boolean(J&&T)}
        />
        <button
          class=${`workspace-toggle-tab${j?" open":" closed"}`}
          onClick=${L4}
          title=${j?"Hide workspace":"Show workspace"}
          aria-label=${j?"Hide workspace":"Show workspace"}
        >
          <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="6 3 11 8 6 13" />
          </svg>
        </button>
        <div class="workspace-splitter" onMouseDown=${I} onTouchStart=${A}></div>
      `}
      ${k&&F`
        <div class="editor-pane-container">
          ${X&&F`<div class="zen-hover-zone"></div>`}
          ${G&&F`
            <${MK}
              tabs=${z}
              activeId=${W}
              onActivate=${y}
              onClose=${x}
              onCloseOthers=${P}
              onCloseAll=${S}
              onTogglePin=${v}
              onTogglePreview=${l}
              onToggleDiff=${h}
              onEditSource=${r}
              previewTabs=${e}
              diffTabs=${z0}
              paneOverrides=${K0}
              detachedTabs=${B0}
              onReattachTab=${b}
              onToggleDock=${J?O:void 0}
              dockVisible=${J&&T}
              onToggleZen=${q0}
              zenMode=${X}
              onPopOutTab=${N0?void 0:X0}
            />
          `}
          ${G&&W0&&F`
            <div class="editor-pane-host editor-pane-detached-host">
              <div class="editor-empty-state">
                <div class="editor-empty-state-title">${W0.label||W0.panePath||"Detached pane"}</div>
                <div class="editor-empty-state-body">This pane is detached into another window.</div>
                <div class="editor-empty-state-actions">
                  <button class="editor-empty-state-button" onClick=${()=>b(W0.panePath)}>Reattach here</button>
                </div>
              </div>
            </div>
          `}
          ${G&&!W0&&F`<div class="editor-pane-host" ref=${_0}></div>`}
          ${G&&!W0&&W&&e.has(W)&&F`
            <${i2}
              getContent=${()=>Z0.current?.getContent?.()}
              path=${W}
              onClose=${()=>l(W)}
            />
          `}
          ${J&&T&&F`<div class="dock-splitter" onMouseDown=${j0} onTouchStart=${A0}></div>`}
          ${J&&F`<div class=${`dock-panel${T?"":" hidden"}${G?"":" standalone"}`}>
            <div class="dock-panel-header">
              <span class="dock-panel-title">Terminal</span>
              <div class="dock-panel-actions">
                ${!N0&&!d&&F`
                  <button class="dock-panel-action" onClick=${()=>X0(f0,"Terminal")} title="Open terminal in window" aria-label="Open terminal in window">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2.25" y="2.25" width="8.5" height="8.5" rx="1.5"/>
                      <path d="M8.5 2.25h5.25v5.25"/>
                      <path d="M13.75 2.25 7.75 8.25"/>
                    </svg>
                  </button>
                `}
                ${d&&F`
                  <button class="dock-panel-action" onClick=${()=>b(f0)} title="Reattach terminal" aria-label="Reattach terminal">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2.25" y="2.25" width="11.5" height="11.5" rx="1.5"/>
                      <path d="M5.25 8h5.5"/>
                      <path d="M8 5.25v5.5"/>
                    </svg>
                  </button>
                `}
                <button class="dock-panel-close" onClick=${O} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                  <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                    <line x1="4" y1="4" x2="12" y2="12"/>
                    <line x1="12" y1="4" x2="4" y2="12"/>
                  </svg>
                </button>
              </div>
            </div>
            ${d?F`
                <div class="dock-panel-body dock-panel-body-detached">
                  <div class="editor-empty-state">
                    <div class="editor-empty-state-title">Terminal detached</div>
                    <div class="editor-empty-state-body">The terminal is open in another window.</div>
                    <div class="editor-empty-state-actions">
                      <button class="editor-empty-state-button" onClick=${()=>b(f0)}>Reattach here</button>
                    </div>
                  </div>
                </div>
              `:F`<div class="dock-panel-body" ref=${b0}></div>`}
          </div>`}
        </div>
        <div class="editor-splitter" onMouseDown=${c0} onTouchStart=${X_}></div>
      `}
      <${Eq}
        workspaceOpen=${j}
        toggleWorkspace=${L4}
        chatOnlyMode=${Z}
        onOpenTerminalTab=${H}
        onOpenVncTab=${M}
        onToggleTerminal=${J?O:void 0}
        terminalVisible=${Boolean(J&&T)}
      />
      <${Hq}
        activeChatAgents=${h4}
        currentChatJid=${p0}
        workspaceOpen=${j}
        chatOnlyMode=${Z}
        terminalVisible=${Boolean(J&&T)}
        onSwitchChat=${d0}
        onToggleWorkspace=${L4}
        onOpenTerminalTab=${H}
        onOpenVncTab=${M}
        onToggleTerminalDock=${J?O:void 0}
        onPrefillCompose=${S0}
      />
      <div class="container">
        ${l0&&__()&&F`<div class="search-results-spacer"></div>`}
        ${(y0||l0)&&F`
          <div class="hashtag-header">
            <button class="back-btn" onClick=${V_}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <span>${y0?`#${y0}`:`Search: ${l0} · ${s0}`}</span>
          </div>
        `}
        ${O_?.kind&&O_.kind!=="hidden"&&F`
          <${fL}
            kind=${O_.kind}
            onSetupProvider=${I0}
            onShowModelPicker=${a0}
            onOpenWorkspace=${A_}
            onDismiss=${O_.kind==="provider-missing"?Q_:D_}
          />
        `}
        <${GK}
          posts=${E_}
          hasMore=${y_?$0:!1}
          onLoadMore=${y_?O0:void 0}
          timelineRef=${D0}
          onHashtagClick=${v0}
          onMessageRef=${m0}
          onScrollToMessage=${s}
          onFileRef=${t||o}
          onPostClick=${void 0}
          onDeletePost=${Y0}
          onOpenWidget=${L0}
          onOpenAttachmentPreview=${C_}
          emptyMessage=${y0?`No posts with #${y0}`:l0?`No results for "${l0}"`:void 0}
          agents=${k0}
          user=${t0}
          reverse=${y_}
          removingPostIds=${g0}
          searchQuery=${l0}
        />
        <${u9}
          status=${w0(U0)?null:U0}
          draft=${j_}
          plan=${u0}
          thought=${G_}
          pendingRequest=${q_}
          intent=${W_}
          turnId=${i0}
          steerQueued=${p_}
          onPanelToggle=${w_}
          showExtensionPanels=${!1}
        />
        <${bL}
          session=${i}
          onClose=${J0}
          onRetry=${Y_}
          onInject=${N_}
        />
        <${eL}
          widget=${h_}
          onClose=${B1}
          onWidgetEvent=${u_}
        />
        ${J1&&F`
          <${Bq}
            mediaId=${J1.mediaId}
            info=${J1.info}
            onClose=${()=>C_(null)}
          />
        `}
        <${qL} />
        <${u9}
          extensionPanels=${Array.from(M_.values())}
          pendingPanelActions=${A1}
          onExtensionPanelAction=${z_}
          turnId=${i0}
          steerQueued=${p_}
          onPanelToggle=${w_}
          showCorePanels=${!1}
        />
        <${T9}
          items=${k_?[]:F1}
          onInjectQueuedFollowup=${v_}
          onRemoveQueuedFollowup=${r_}
          onMoveQueuedFollowup=${s_}
          onOpenFilePill=${o}
        />
        <${CL}
          onPost=${(t_)=>{XA({response:t_,viewStateRef:H_,scrollToBottom:U1})}}
          onFocus=${j$}
          searchMode=${k_}
          searchScope=${g1}
          onSearch=${k1}
          onSearchScopeChange=${e1||b4}
          onEnterSearch=${A$}
          onExitSearch=${a_}
          fileRefs=${m_}
          onRemoveFileRef=${y1}
          onClearFileRefs=${H1}
          onSetFileRefs=${_1}
          folderRefs=${k$}
          onRemoveFolderRef=${y$}
          onClearFolderRefs=${_$}
          onSetFolderRefs=${T_}
          messageRefs=${q1}
          onRemoveMessageRef=${M$}
          onClearMessageRefs=${v4}
          onSetMessageRefs=${$$}
          onSwitchChat=${d0}
          onRenameSession=${K}
          isRenameSessionInProgress=${N}
          onCreateSession=${m4}
          onCreateRootSession=${c4}
          onDeleteSession=${o0}
          onPurgeArchivedSession=${h0}
          onRestoreSession=${w$}
          activeEditorPath=${Z?null:W}
          onAttachEditorFile=${Z?void 0:T$}
          onOpenFilePill=${o}
          followupQueueCount=${b1}
          followupQueueItems=${F1}
          showQueueStack=${!1}
          onInjectQueuedFollowup=${v_}
          onRemoveQueuedFollowup=${r_}
          onMoveQueuedFollowup=${s_}
          onSubmitIntercept=${v1}
          onMessageResponse=${l4}
          onSubmitError=${K1}
          isAgentActive=${R_}
          activeChatAgents=${h4}
          currentChatJid=${p0}
          connectionStatus=${I1}
          stateAccessFailed=${x$}
          activeModel=${n4}
          agentModelsPayload=${u5}
          modelUsage=${g5}
          thinkingLevel=${Z4}
          supportsThinking=${I$}
          contextUsage=${p4}
          notificationsEnabled=${V1}
          notificationPermission=${C$}
          onToggleNotifications=${X4}
          onModelChange=${Y4}
          onModelStateChange=${m1}
          statusNotice=${w0(U0)?U0:null}
          extensionWorkingState=${r4}
          prefillRequest=${E0}
        />
        <${wq}
          request=${q_}
          onRespond=${()=>{E1(null),b5.current=null}}
        />
      </div>
    </div>
  `}function IK(_){let{branchLoaderMode:$,panePopoutMode:j,branchLoaderState:G,panePopoutOptions:Z,mainShellOptions:X,renderers:Y}=_,L=QL({branchLoaderMode:$,panePopoutMode:j}),K=Y?.renderBranchLoaderMode||NL,q=Y?.renderPanePopoutMode||BL,Q=Y?.renderMainShell||xK;if(L==="branch-loader")return K(G);if(L==="pane-popout")return q(Z);return Q(X)}var z8="piclaw_btw_session",fK=900,CK="__piclawRenameBranchFormLock__";function YA(){try{return import.meta.url}catch{return null}}function Zj(_){let $=typeof _==="string"?_.trim().toLowerCase():"";return $==="1"||$==="true"||$==="yes"}function LA(_){try{let $=_?new URL(_).searchParams.get("v"):null;return $&&$.trim()?$.trim():null}catch{return null}}function W8(_,$,j=""){let G=_?.get?.($);return G&&G.trim()?G.trim():j}function PK(_={}){let $=_.importMetaUrl===void 0?YA():_.importMetaUrl,j=_.document===void 0?typeof document<"u"?document:null:_.document,G=_.origin===void 0?typeof window<"u"?window.location.origin:"http://localhost":_.origin||"http://localhost",Z=LA($);if(Z)return Z;try{let Y=Array.from(j?.querySelectorAll?.('script[type="module"][src]')||[]).find((q)=>String(q?.getAttribute?.("src")||"").includes("/static/dist/app.bundle.js"))?.getAttribute?.("src")||"";if(!Y)return null;let K=new URL(Y,G).searchParams.get("v");return K&&K.trim()?K.trim():null}catch{return null}}function RK(_={}){let $=_.window===void 0?typeof window<"u"?window:null:_.window;if(!$)return null;let j=$[CK];if(j&&typeof j==="object")return j;let G={inFlight:!1,cooldownUntil:0};return $[CK]=G,G}function SK(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function uK(_={}){let $=typeof _.readItem==="function"?_.readItem:W1,j=_.storageKey||z8,G=$(j);if(!G)return null;try{let Z=JSON.parse(G);if(!Z||typeof Z!=="object")return null;let X=typeof Z.question==="string"?Z.question:"",Y=typeof Z.answer==="string"?Z.answer:"",L=typeof Z.thinking==="string"?Z.thinking:"",K=typeof Z.error==="string"&&Z.error.trim()?Z.error:null,q=Z.status==="running"?"error":Z.status==="success"||Z.status==="error"?Z.status:"success";return{question:X,answer:Y,thinking:L,error:q==="error"?K||"BTW stream interrupted. You can retry.":K,model:null,status:q}}catch{return null}}function gK(_,$={}){let j=$.defaultChatJid||"web:default",G=W8(_,"chat_jid",j),Z=Zj(_?.get?.("chat_only")||_?.get?.("chat-only")),X=Zj(_?.get?.("pane_popout")),Y=W8(_,"pane_path"),L=W8(_,"pane_label"),K=Zj(_?.get?.("branch_loader")),q=W8(_,"branch_source_chat_jid",G);return{currentChatJid:G,chatOnlyMode:Z,panePopoutMode:X,panePopoutPath:Y,panePopoutLabel:L,branchLoaderMode:K,branchLoaderSourceChatJid:q}}function bK(_,$){let j=Array.isArray(_)?_:[];return j.find((G)=>G?.id===$)||j[0]||null}function vK(_,$){if(!$||!_||typeof _.get!=="function")return null;return _.get($)||null}function Xj(_,$,j){return _||$?.label||j||"Pane"}function mK(_,$,j){return`${Xj(_,$,j)} · PiClaw`}function cK(_,$,j,G){let Z=Array.isArray(_)?_.length:0,X=Boolean(G&&$?.has?.(G)),Y=Boolean(G&&j?.has?.(G));return Z>1||X||Y}function lK(_,$){let j=typeof _==="string"?_:"";return j===$||j.startsWith(`${$}/`)}function hK(_,$,j,G){return _===$&&!j||G}function nK(_,$,j,G,Z){return _||!$&&(j||G&&Z)}f_();function qA(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function Y1(_,$,j){let G=_?.[$];return typeof G==="function"?G:qA($,j)}var pK=!1,rK=!1,dK=!1;function KA(_){if(!_||typeof _.setOptions!=="function")return;_.setOptions({breaks:!0,gfm:!0})}function VA(_=typeof window<"u"?window:null){if(!_||rK)return;let $=(j)=>{let G=String(j?.message||j?.error?.message||"").trim();if(!/ResizeObserver loop (completed with undelivered notifications|limit exceeded)/i.test(G)){if(!(G==="Script error."&&(j?.lineno===0||!j?.filename)))return}j.preventDefault?.(),j.stopImmediatePropagation?.()};_.addEventListener("error",$,!0),rK=!0}function QA(){L_.register(H3),L_.register(P7),L_.register(f7),L_.register(R7),L_.register(S7),L_.register(u7),L_.register(b7),L_.register(v7),L_.register(m7),L_.register(l7),L_.register(o3),E3(),L_.register(A3),L_.register(k3)}function NA(_=typeof window<"u"?window:null){if(!_||dK)return;if(!_.isSecureContext)return;if(!("serviceWorker"in _.navigator))return;dK=!0,_.navigator.serviceWorker.register("/sw.js").catch(($)=>{console.warn("Failed to register app service worker:",$)})}async function iK(){if(pK)return;let _=typeof window<"u"?window:null,$=_?_?.marked:null;if(KA($),VA(_),P9(_),_)try{let j=await Promise.resolve().then(() => (T0(),EG));_.__piclawPreactHtm=j,_.__piclawPreact=j}catch(j){}QA(),await Lq(_),NA(_),pK=!0}function BA(_=Q6){return{searchPosts:_.searchPosts,deletePost:_.deletePost,getAgents:_.getAgents,getAgentThought:_.getAgentThought,setAgentThoughtVisibility:_.setAgentThoughtVisibility,getAgentStatus:_.getAgentStatus,getWorkspaceFile:_.getWorkspaceFile,getThread:_.getThread,getTimeline:_.getTimeline,sendAgentMessage:_.sendAgentMessage,forkChatBranch:_.forkChatBranch,getAgentContext:Y1(_,"getAgentContext",null),getAutoresearchStatus:Y1(_,"getAutoresearchStatus",null),stopAutoresearch:Y1(_,"stopAutoresearch",{status:"ok"}),dismissAutoresearch:Y1(_,"dismissAutoresearch",{status:"ok"}),getAgentModels:Y1(_,"getAgentModels",{current:null,models:[]}),completeInstanceOobe:Y1(_,"completeInstanceOobe",{status:"ok"}),getActiveChatAgents:Y1(_,"getActiveChatAgents",{chats:[]}),getChatBranches:Y1(_,"getChatBranches",{chats:[]}),renameChatBranch:Y1(_,"renameChatBranch",null),pruneChatBranch:Y1(_,"pruneChatBranch",null),restoreChatBranch:Y1(_,"restoreChatBranch",null),getAgentQueueState:Y1(_,"getAgentQueueState",{count:0}),steerAgentQueueItem:Y1(_,"steerAgentQueueItem",{removed:!1,queued:"steer"}),removeAgentQueueItem:Y1(_,"removeAgentQueueItem",{removed:!1}),streamSidePrompt:Y1(_,"streamSidePrompt",null)}}var oK=BA(Q6);function sK(_){let{routing:$,paneRuntime:j,splitters:G,branchPaneActions:Z,timelineViewActions:X,composeReferenceActions:Y,sidepanelActions:L,shellState:K,agentState:q,composeState:Q,modelState:V}=_,B={appShellRef:K.appShellRef,editorOpen:K.editorOpen,hidePanePopoutControls:j.hidePanePopoutControls,panePopoutHasMenuActions:j.panePopoutHasMenuActions,panePopoutTitle:j.panePopoutTitle,tabStripTabs:K.tabStripTabs,tabStripActiveId:K.tabStripActiveId,handleTabActivate:K.handleTabActivate,previewTabs:K.previewTabs,diffTabs:K.diffTabs,handleTabTogglePreview:K.handleTabTogglePreview,handleTabToggleDiff:K.handleTabToggleDiff,editorContainerRef:j.editorContainerRef,getPaneContent:()=>j.editorInstanceRef?.current?.getContent?.(),panePopoutPath:K.panePopoutPath,canReattachPane:j.canReattachPanePopout,handleReattachPane:j.requestPanePopoutReattach},N={appShellRef:K.appShellRef,workspaceOpen:K.workspaceOpen,editorOpen:K.editorOpen,chatOnlyMode:K.chatOnlyMode,zenMode:j.zenMode,isRenameBranchFormOpen:K.isRenameBranchFormOpen,closeRenameCurrentBranchForm:Z.closeRenameCurrentBranchForm,handleRenameCurrentBranch:Z.handleRenameCurrentBranch,renameBranchNameDraft:K.renameBranchNameDraft,renameBranchNameInputRef:K.renameBranchNameInputRef,setRenameBranchNameDraft:K.setRenameBranchNameDraft,renameBranchDraftState:K.renameBranchDraftState,isRenamingBranch:K.isRenamingBranch,hasDockPanes:j.hasDockPanes,toggleDock:j.toggleDock,dockVisible:j.dockVisible,showEditorPaneContainer:j.showEditorPaneContainer,toggleZenMode:j.toggleZenMode,isWebAppMode:K.isWebAppMode,editorContainerRef:j.editorContainerRef,editorInstanceRef:j.editorInstanceRef,dockContainerRef:j.dockContainerRef,detachedTabs:j.detachedTabs,activeDetachedTab:j.activeDetachedTab,detachedDockPane:j.detachedDockPane,TERMINAL_TAB_PATH:K.TERMINAL_TAB_PATH,isIOSDevice:K.isIOSDevice,currentBranchRecord:K.currentBranchRecord,currentChatJid:K.currentChatJid,currentChatBranches:K.currentChatBranches,formatBranchPickerLabel:K.formatBranchPickerLabel,activeSearchScopeLabel:K.activeSearchScopeLabel,currentHashtag:K.currentHashtag,searchQuery:K.searchQuery,oobePanelState:K.oobePanelState,composePrefillRequest:K.composePrefillRequest,requestComposePrefill:K.requestComposePrefill,handleOobeSetupProvider:K.handleOobeSetupProvider,handleOobeShowModelPicker:K.handleOobeShowModelPicker,handleOobeOpenWorkspace:K.handleOobeOpenWorkspace,handleDismissProviderMissingOobe:K.handleDismissProviderMissingOobe,handleCompleteProviderReadyOobe:K.handleCompleteProviderReadyOobe,posts:K.posts,hasMore:K.hasMore,loadMore:K.loadMore,timelineRef:K.timelineRef,agents:K.agents,userProfile:K.userProfile,removingPostIds:K.removingPostIds,extensionStatusPanels:K.extensionStatusPanels,pendingExtensionPanelActions:K.pendingExtensionPanelActions,searchOpen:K.searchOpen,followupQueueItems:K.followupQueueItems,viewStateRef:K.viewStateRef,loadPosts:K.loadPosts,scrollToBottom:K.scrollToBottom,searchScope:K.searchScope,tabStripTabs:K.tabStripTabs,tabStripActiveId:K.tabStripActiveId,handleTabActivate:K.handleTabActivate,previewTabs:K.previewTabs,diffTabs:K.diffTabs,handleTabTogglePreview:K.handleTabTogglePreview,handleTabToggleDiff:K.handleTabToggleDiff,panePopoutPath:K.panePopoutPath,tabPaneOverrides:K.tabPaneOverrides,handleTabClose:K.handleTabClose,handleTabCloseOthers:K.handleTabCloseOthers,handleTabCloseAll:K.handleTabCloseAll,handleTabTogglePin:K.handleTabTogglePin,handleTabEditSource:K.handleTabEditSource,handleReattachPane:j.reattachPane,openEditor:K.openEditor,openTerminalTab:K.openTerminalTab,openVncTab:K.openVncTab,fileRefs:Q.fileRefs,folderRefs:Q.folderRefs,messageRefs:Q.messageRefs,followupQueueCount:Q.followupQueueCount,attachmentPreview:Q.attachmentPreview,setAttachmentPreview:Q.setAttachmentPreview,extensionWorkingState:Q.extensionWorkingState,activeChatAgents:V.activeChatAgents,connectionStatus:V.connectionStatus,stateAccessFailed:V.stateAccessFailed,activeModel:V.activeModel,activeModelUsage:V.activeModelUsage,activeThinkingLevel:V.activeThinkingLevel,supportsThinking:V.supportsThinking,contextUsage:V.contextUsage,notificationsEnabled:V.notificationsEnabled,notificationPermission:V.notificationPermission,handleToggleNotifications:V.handleToggleNotifications,setActiveModel:V.setActiveModel,applyModelState:V.applyModelState,setPendingRequest:q.setPendingRequest,pendingRequestRef:q.pendingRequestRef,...G,...Z,...X,...Y,...L,...q,...Q,...V};return{branchLoaderMode:$.branchLoaderMode,panePopoutMode:$.panePopoutMode,branchLoaderState:$.branchLoaderState,panePopoutOptions:B,mainShellOptions:N}}function FA(_){let{steerQueuedTurnId:$,currentTurnId:j,agentStatus:G}=_;return Boolean($&&$===(G?.turn_id||j))}function aK(_){let $=FA({steerQueuedTurnId:_.agentState.steerQueuedTurnId,currentTurnId:_.agentState.currentTurnId,agentStatus:_.agentState.agentStatus});return sK({routing:{branchLoaderMode:_.routeState.branchLoaderMode,panePopoutMode:_.routeState.panePopoutMode,branchLoaderState:_.surface.branchLoaderState},paneRuntime:_.paneRuntime,splitters:_.splitters,branchPaneActions:_.orchestration.branchPaneActions,timelineViewActions:_.orchestration.timelineViewActions,composeReferenceActions:_.interaction.composeReferenceActions,sidepanelActions:_.orchestration.sidepanelActions,shellState:{appShellRef:_.surface.appShellRef,workspaceOpen:_.surface.workspaceOpen,editorOpen:_.editorState.editorOpen,chatOnlyMode:_.routeState.chatOnlyMode,isRenameBranchFormOpen:_.surface.isRenameBranchFormOpen,renameBranchNameDraft:_.surface.renameBranchNameDraft,renameBranchNameInputRef:_.surface.renameBranchNameInputRef,setRenameBranchNameDraft:_.surface.setRenameBranchNameDraft,renameBranchDraftState:_.surface.renameBranchDraftState,isRenamingBranch:_.surface.isRenamingBranch,isWebAppMode:_.surface.isWebAppMode,TERMINAL_TAB_PATH:_.helpers.terminalTabPath,isIOSDevice:_.helpers.isIOSDevice,currentBranchRecord:_.surface.currentBranchRecord,currentChatJid:_.routeState.currentChatJid,currentChatBranches:_.surface.currentChatBranches,formatBranchPickerLabel:_.helpers.formatBranchPickerLabel,activeSearchScopeLabel:_.surface.activeSearchScopeLabel,currentHashtag:_.surface.currentHashtag,searchQuery:_.surface.searchQuery,oobePanelState:_.surface.oobePanelState,composePrefillRequest:_.surface.composePrefillRequest,requestComposePrefill:_.surface.requestComposePrefill,handleOobeSetupProvider:_.surface.handleOobeSetupProvider,handleOobeShowModelPicker:_.surface.handleOobeShowModelPicker,handleOobeOpenWorkspace:_.surface.handleOobeOpenWorkspace,handleDismissProviderMissingOobe:_.surface.handleDismissProviderMissingOobe,handleCompleteProviderReadyOobe:_.surface.handleCompleteProviderReadyOobe,posts:_.timeline.posts,hasMore:_.timeline.hasMore,loadMore:_.timeline.loadMore,timelineRef:_.surface.timelineRef,agents:_.surface.agents,userProfile:_.surface.userProfile,removingPostIds:_.surface.removingPostIds,extensionStatusPanels:_.surface.extensionStatusPanels,pendingExtensionPanelActions:_.surface.pendingExtensionPanelActions,searchOpen:_.surface.searchOpen,followupQueueItems:_.surface.followupQueueItems,viewStateRef:_.surface.viewStateRef,loadPosts:_.timeline.loadPosts,scrollToBottom:_.timeline.scrollToBottom,searchScope:_.surface.searchScope,tabStripTabs:_.editorState.tabStripTabs,tabStripActiveId:_.editorState.tabStripActiveId,handleTabActivate:_.editorState.handleTabActivate,previewTabs:_.editorState.previewTabs,diffTabs:_.editorState.diffTabs,handleTabTogglePreview:_.editorState.handleTabTogglePreview,handleTabToggleDiff:_.editorState.handleTabToggleDiff,panePopoutPath:_.routeState.panePopoutPath,tabPaneOverrides:_.editorState.tabPaneOverrides,handleTabClose:_.editorState.handleTabClose,handleTabCloseOthers:_.editorState.handleTabCloseOthers,handleTabCloseAll:_.editorState.handleTabCloseAll,handleTabTogglePin:_.editorState.handleTabTogglePin,handleTabEditSource:_.editorState.handleTabEditSource,openEditor:_.editorState.openEditor,openTerminalTab:_.paneRuntime.openTerminalTab,openVncTab:_.paneRuntime.openVncTab},agentState:{agentStatus:_.agentState.agentStatus,isCompactionStatus:_.agentState.isCompactionStatus,agentDraft:_.agentState.agentDraft,agentPlan:_.agentState.agentPlan,agentThought:_.agentState.agentThought,pendingRequest:_.agentState.pendingRequest,intentToast:_.surface.intentToast,currentTurnId:_.agentState.currentTurnId,steerQueued:$,handlePanelToggle:_.interaction.handlePanelToggle,setPendingRequest:_.agentState.setPendingRequest,pendingRequestRef:_.agentState.pendingRequestRef,handleInjectQueuedFollowup:_.orchestration.followupActions.handleInjectQueuedFollowup,handleRemoveQueuedFollowup:_.orchestration.followupActions.handleRemoveQueuedFollowup,handleMoveQueuedFollowup:_.orchestration.followupActions.handleMoveQueuedFollowup},composeState:{btwSession:_.surface.btwSession,floatingWidget:_.surface.floatingWidget,fileRefs:_.surface.fileRefs,folderRefs:_.surface.folderRefs,messageRefs:_.surface.messageRefs,followupQueueCount:_.surface.followupQueueCount,attachmentPreview:_.surface.attachmentPreview,setAttachmentPreview:_.surface.setAttachmentPreview,handleMessageResponse:_.orchestration.followupActions.handleMessageResponse,isComposeBoxAgentActive:_.orchestration.isComposeBoxAgentActive,extensionWorkingState:_.surface.extensionWorkingState},modelState:{activeChatAgents:_.surface.activeChatAgents,connectionStatus:_.surface.connectionStatus,stateAccessFailed:_.surface.stateAccessFailed,activeModel:_.surface.activeModel,agentModelsPayload:_.surface.agentModelsPayload,activeModelUsage:_.surface.activeModelUsage,activeThinkingLevel:_.surface.activeThinkingLevel,supportsThinking:_.surface.supportsThinking,contextUsage:_.surface.contextUsage,notificationsEnabled:_.surface.notificationsEnabled,notificationPermission:_.surface.notificationPermission,handleToggleNotifications:_.surface.handleToggleNotifications,setActiveModel:_.surface.setActiveModel,applyModelState:_.orchestration.chatRefreshLifecycle.applyModelState}})}T0();var eK="(min-width: 1024px) and (orientation: landscape)";function Yj(_=typeof window<"u"?window:null){return _&&typeof _==="object"?_:null}function tK(_,$){let j=Yj(_);if(!j?.localStorage?.getItem)return null;try{let G=j.localStorage.getItem($);if(G===null)return null;return G==="true"}catch{return null}}function UA(_,$,j){let G=Yj(_);if(!G?.localStorage?.setItem)return;try{G.localStorage.setItem($,String(Boolean(j)))}catch{return}}function T6(_=typeof window<"u"?window:null){let $=Yj(_);if(!$?.matchMedia)return"desktop";return $.matchMedia("(min-width: 1024px) and (orientation: landscape)").matches?"desktop":"narrow"}function _V(_){return _==="narrow"?"workspaceOpen.narrow":"workspaceOpen.desktop"}function $V(_={}){let{runtime:$=typeof window<"u"?window:null,bucket:j=null,allowLegacyFallback:G=!1,defaultValue:Z=!1}=_,X=j||T6($),Y=_V(X),L=tK($,Y);if(typeof L==="boolean")return L;if(G&&X==="desktop"){let K=tK($,"workspaceOpen");if(typeof K==="boolean")return K}return Z}function jV(_,$={}){let{runtime:j=typeof window<"u"?window:null,bucket:G=null}=$,Z=G||T6(j);UA(j,_V(Z),Boolean(_))}e5();var HA=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function GV(_,$={}){let j=$.window??(typeof window<"u"?window:null),G=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let Z=()=>{_(P1({window:j,navigator:G}))};Z();let Y=HA.map((L)=>{try{return j.matchMedia?.(L)??null}catch{return null}}).filter(Boolean).map((L)=>{if(typeof L.addEventListener==="function")return L.addEventListener("change",Z),()=>L.removeEventListener("change",Z);if(typeof L.addListener==="function")return L.addListener(Z),()=>L.removeListener(Z);return()=>{}});return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),()=>{for(let L of Y)L();j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z)}}function O8(_,$={}){let j=$.window??(typeof window<"u"?window:null),G=$.document??(typeof document<"u"?document:null);if(!j||!G||typeof _!=="function")return()=>{};let Z=()=>{if(G.visibilityState&&G.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),G.addEventListener?.("visibilitychange",Z),()=>{j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z),G.removeEventListener?.("visibilitychange",Z)}}function ZV(_={}){return P1(_)&&L2(_)}function EA(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let G=Number($?.innerHeight||0);if(Number.isFinite(G)&&G>0)return Math.round(G);return null}function DA(_={},$={}){if(!ZV(_))return null;let j=_.window??(typeof window<"u"?window:null),G=_.document??(typeof document<"u"?document:null);if(!j||!G?.documentElement)return null;let Z=EA({window:j});if(Z&&Z>0)G.documentElement.style.setProperty("--app-height",`${Z}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch(X){console.debug("[mobile-viewport] Ignoring scrollTo failure during standalone viewport reset.",X)}try{if(G.scrollingElement)G.scrollingElement.scrollTop=0,G.scrollingElement.scrollLeft=0;if(G.documentElement)G.documentElement.scrollTop=0,G.documentElement.scrollLeft=0;if(G.body)G.body.scrollTop=0,G.body.scrollLeft=0}catch(X){console.debug("[mobile-viewport] Ignoring DOM scroll reset failure during standalone viewport sync.",X)}}return Z}function XV(_={}){if(!ZV(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};j.documentElement?.style?.setProperty?.("--app-height","100vh");let G=0,Z=new Set,X=()=>{if(G)$.cancelAnimationFrame?.(G),G=0;for(let V of Z)$.clearTimeout?.(V);Z.clear()},Y=()=>{G=0,DA({window:$,document:j})},L=()=>{if(G)$.cancelAnimationFrame?.(G);G=$.requestAnimationFrame?.(Y)??0},K=()=>{L();for(let V of[80,220,420]){let B=$.setTimeout?.(()=>{Z.delete(B),L()},V);if(B!=null)Z.add(B)}},q=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;K()},Q=$.visualViewport;return K(),$.addEventListener("focus",K),$.addEventListener("pageshow",K),$.addEventListener("resize",K),$.addEventListener("orientationchange",K),j.addEventListener("visibilitychange",q),j.addEventListener("focusin",K,!0),Q?.addEventListener?.("resize",K),Q?.addEventListener?.("scroll",K),()=>{X(),$.removeEventListener("focus",K),$.removeEventListener("pageshow",K),$.removeEventListener("resize",K),$.removeEventListener("orientationchange",K),j.removeEventListener("visibilitychange",q),j.removeEventListener("focusin",K,!0),Q?.removeEventListener?.("resize",K),Q?.removeEventListener?.("scroll",K)}}var Lj="resume-layout-settling",WA=220,M5=new WeakMap;function zA(_){if(!_){K_(z8,"");return}K_(z8,JSON.stringify({question:_.question||"",answer:_.answer||"",thinking:_.thinking||"",error:_.error||null,status:_.status||"success"}))}function OA(_={}){if(_.panePopoutMode)return!1;let $=typeof _.search==="string"?_.search:"";return!/(?:^|[?&])pane_popout=1(?:&|$)/.test($)}function JA(_,$={}){if(!_)return()=>{};let{durationMs:j=WA,scheduleTimeout:G=setTimeout,clearScheduledTimeout:Z=clearTimeout}=$,X=M5.get(_);if(X)Z(X);_.classList.add(Lj);let Y=G(()=>{if(M5.get(_)===Y)_.classList.remove(Lj),M5.delete(_)},j);return M5.set(_,Y),()=>{let L=M5.get(_);if(L)Z(L),M5.delete(_);_.classList.remove(Lj)}}function AA(_,$){if(!_?.getElementById)return;let j=encodeURIComponent(String($||"0")),G={"dynamic-manifest":`/manifest.json?v=${j}`,"dynamic-favicon":`/favicon.ico?v=${j}`,"dynamic-apple-touch-icon":`/apple-touch-icon.png?v=${j}`,"dynamic-apple-touch-icon-180":`/apple-touch-icon-180x180.png?v=${j}`,"dynamic-apple-touch-icon-167":`/apple-touch-icon-167x167.png?v=${j}`,"dynamic-apple-touch-icon-152":`/apple-touch-icon-152x152.png?v=${j}`,"dynamic-apple-touch-icon-precomposed":`/apple-touch-icon-precomposed.png?v=${j}`};for(let[Z,X]of Object.entries(G)){let Y=_.getElementById(Z);if(Y&&Y.href!==X)Y.href=X}}function YV(_){let{isRenameBranchFormOpen:$,renameBranchNameInputRef:j,appShellRef:G,setIsWebAppMode:Z,workspaceOpen:X,setWorkspaceOpen:Y,btwSession:L,agents:K,agentsRef:q,currentChatJid:Q,activeChatJidRef:V,userProfile:B,userProfileRef:N,brandingRef:U,panePopoutMode:D=!1}=_;nX(30000),u(()=>{if(!$)return;requestAnimationFrame(()=>{if($)j.current?.focus?.(),j.current?.select?.()})},[$,j]),u(()=>lZ(),[]),u(()=>GV(Z),[Z]),u(()=>{let M=()=>{},J=O8(()=>{M(),M=JA(G.current)});return()=>{J(),M()}},[G]);let E=g(T6());return u(()=>{jV(X,{bucket:E.current})},[X]),u(()=>{if(typeof window>"u"||!window.matchMedia)return;let M=window.matchMedia(eK),J=()=>{let O=T6(window);if(E.current===O)return;let T=E.current;if(E.current=O,T==="desktop"&&O==="narrow")Y(!1)};if(M.addEventListener)M.addEventListener("change",J);else if(M.addListener)M.addListener(J);return()=>{if(M.removeEventListener)M.removeEventListener("change",J);else if(M.removeListener)M.removeListener(J)}},[Y]),u(()=>XV(),[]),u(()=>{zA(L)},[L]),u(()=>{q.current=K||{}},[K,q]),u(()=>{V.current=Q},[V,Q]),u(()=>{N.current=B||{name:"You",avatar_url:null,avatar_background:null}},[B,N]),{applyBranding:f((M,J,O=null)=>{if(typeof document>"u")return;let T=(M||"").trim()||"PiClaw";if(U.current.title!==T){if(OA({panePopoutMode:D,search:typeof window<"u"?window.location.search:""})){document.title=T;let A=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(A&&A.getAttribute("content")!==T)A.setAttribute("content",T)}U.current.title=T}let I=J?`${J}|${O||""}`:"";if(U.current.avatarBase!==I){U.current.avatarBase=I;let A=O||Date.now();AA(document,A)}},[U])}}T0();function LV(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen&&!$.autoOpenEditor)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function qj(_){if(typeof _==="string")return _.trim();if(typeof _==="number")return Number.isFinite(_)?String(_):"";if(typeof _==="bigint")return String(_);return""}function J8(_,$){let j=Array.isArray(_)?_:[],G=qj($);if(!G)return j;if(j.includes(G))return j;return[...j,G]}function A8(_,$){let j=Array.isArray(_)?_:[],G=qj($);if(!G)return j;if(!j.includes(G))return j;return j.filter((Z)=>Z!==G)}function k8(_){if(!Array.isArray(_))return[];let $=[],j=new Set;for(let G of _){let Z=qj(G);if(!Z||j.has(Z))continue;j.add(Z),$.push(Z)}return $}async function qV(_){let{hashtag:$,setCurrentHashtag:j,setPosts:G,loadPosts:Z}=_;j($),G(null),await Z($)}async function KV(_){let{setCurrentHashtag:$,setSearchQuery:j,setPosts:G,loadPosts:Z}=_;$(null),j(null),G(null),await Z()}async function Kj(_){let{query:$,scope:j,currentChatJid:G,currentRootChatJid:Z,searchPosts:X,setSearchScope:Y,setSearchQuery:L,setCurrentHashtag:K,setPosts:q,setHasMore:Q}=_,V=typeof $==="string"?$.trim():"";if(!V)return;let B=j==="root"||j==="all"?j:"current";Y(B),L(V),K(null),q(null);try{let N=await X(V,50,0,G,B,Z,_.filters);q(Array.isArray(N?.results)?N.results:[]),Q(!1)}catch(N){console.error("Failed to search:",N),q([])}}async function VV(_){let{post:$,posts:j,currentChatJid:G,deletePost:Z,preserveTimelineScrollTop:X,setPosts:Y,setRemovingPostIds:L,hasMoreRef:K,loadMoreRef:q,confirm:Q=(H)=>window.confirm(H),showAlert:V=(H)=>alert(H),scheduleTimeout:B=(H,M)=>{setTimeout(H,M)}}=_;if(!$)return;let N=$.id,U=typeof $?.chat_jid==="string"&&$.chat_jid.trim()?$.chat_jid.trim():G,D=j?.filter((H)=>H?.data?.thread_id===N&&H?.id!==N).length||0;if(D>0){if(!Q(`Delete this message and its ${D} replies?`))return}let E=(H)=>{if(!H.length)return;L((M)=>{let J=new Set(M);return H.forEach((O)=>J.add(O)),J}),B(()=>{if(X(()=>{Y((M)=>M?M.filter((J)=>!H.includes(J.id)):M)}),L((M)=>{let J=new Set(M);return H.forEach((O)=>J.delete(O)),J}),K.current)q.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let H=await Z(N,D>0,U);if(H?.ids?.length)E(H.ids)}catch(H){let M=H instanceof Error?H.message:String(H||"");if(D===0&&M.includes("Replies exist")){if(!Q("Delete this message and its replies?"))return;let O=await Z(N,!0,U);if(O?.ids?.length)E(O.ids);return}console.error("Failed to delete post:",H),V(`Failed to delete message: ${M}`)}}async function QV(_){let{id:$,targetChatJid:j,currentChatJid:G,getThread:Z,setPosts:X,getElementById:Y=(V)=>document.getElementById(V),scheduleRaf:L=(V)=>requestAnimationFrame(V),scheduleTimeout:K=(V,B)=>{setTimeout(V,B)}}=_,q=(V)=>{V.scrollIntoView({behavior:"smooth",block:"center"}),V.classList.add("post-highlight"),K(()=>V.classList.remove("post-highlight"),2000)},Q=Y(`post-${$}`);if(Q){q(Q);return}try{let V=typeof j==="string"&&j.trim()?j.trim():G,N=(await Z($,V))?.thread?.[0];if(!N)return;X((U)=>{if(!U)return[N];if(U.some((D)=>D.id===N.id))return U;return[...U,N]}),L(()=>{K(()=>{let U=Y(`post-${$}`);if(U)q(U)},50)})}catch(V){console.error("[scrollToMessage] Failed to fetch message",$,V)}}function kA(_){if(typeof _==="string"&&_.trim())return _.trim();return"Could not send your message."}function yA(_){let{id:$,targetChatJid:j=null,currentChatJid:G,currentHashtag:Z=null,searchQuery:X=null,searchOpen:Y=!1,setCurrentHashtag:L,setSearchQuery:K,setSearchOpen:q,setMessageRefs:Q,navigate:V,chatOnlyMode:B,baseHref:N=typeof window<"u"?window.location.href:"http://localhost/"}=_,U=String($??"").trim();if(!U)return!1;let D=typeof j==="string"&&j.trim()?j.trim():G,E=D!==G,H=Boolean(Y||X||Z);if(!E&&!H)return Q((M)=>J8(M,U)),!0;if(Q([U]),L?.(null),K?.(null),q?.(!1),E&&typeof V==="function"){let M=T1(N,D,{chatOnly:B});V(M)}return!0}function NV(_){let{setIntentToast:$,intentToastTimerRef:j,editorOpen:G,openEditor:Z,resolvePane:X,tabStripActiveId:Y,setFileRefs:L,setFolderRefs:K,setMessageRefs:q,currentChatJid:Q,currentHashtag:V,searchQuery:B,searchOpen:N,setCurrentHashtag:U,setSearchQuery:D,setSearchOpen:E,navigate:H,chatOnlyMode:M,baseHref:J,getThread:O,setPosts:T}=_,I=f(()=>{if(j.current)clearTimeout(j.current),j.current=null;$(null)},[j,$]);u(()=>{return()=>{I()}},[I]);let A=f((_0)=>{L((Z0)=>J8(Z0,_0))},[L]),k=f((_0)=>{L((Z0)=>A8(Z0,_0))},[L]),z=f(()=>{L([])},[L]),W=f((_0)=>{L(k8(_0))},[L]),y=f((_0)=>{K((Z0)=>J8(Z0,_0))},[K]),x=f((_0)=>{K((Z0)=>A8(Z0,_0))},[K]),P=f(()=>{K([])},[K]),S=f((_0)=>{K(k8(_0))},[K]),v=f((_0,Z0=null,B0="info",W0=3000)=>{I(),$({title:_0,detail:Z0||null,kind:B0||"info"}),j.current=setTimeout(()=>{$((d)=>d?.title===_0?null:d)},W0)},[I,j,$]),l=f((_0,{autoOpenEditor:Z0=!1}={})=>{let B0=LV(_0,{editorOpen:G,autoOpenEditor:Z0,resolvePane:X});if(B0.kind==="open"){Z(B0.path);return}if(B0.kind==="toast")v(B0.title,B0.detail,B0.level)},[G,Z,X,v]),h=f((_0)=>{l(_0,{autoOpenEditor:!1})},[l]),r=f((_0)=>{l(_0,{autoOpenEditor:!0})},[l]),b=f(()=>{let _0=Y;if(_0)A(_0)},[A,Y]),e=f((_0,Z0=null)=>{yA({id:_0,targetChatJid:Z0,currentChatJid:Q,currentHashtag:V,searchQuery:B,searchOpen:N,setCurrentHashtag:U,setSearchQuery:D,setSearchOpen:E,setMessageRefs:q,navigate:H,chatOnlyMode:M,baseHref:J})},[J,M,Q,V,H,N,B,U,q,E,D]),z0=f(async(_0,Z0=null)=>{await QV({id:_0,targetChatJid:Z0,currentChatJid:Q,getThread:O,setPosts:T})},[Q,O,T]),K0=f((_0)=>{q((Z0)=>A8(Z0,_0))},[q]),q0=f(()=>{q([])},[q]),X0=f((_0)=>{q(k8(_0))},[q]),N0=f((_0)=>{v("Compose failed",kA(_0),"error",5000)},[v]);return{clearIntentToast:I,addFileRef:A,removeFileRef:k,clearFileRefs:z,setFileRefsFromCompose:W,addFolderRef:y,removeFolderRef:x,clearFolderRefs:P,setFolderRefsFromCompose:S,showIntentToast:v,openFileFromPill:h,openTimelineFileFromPill:r,attachActiveEditorFile:b,addMessageRef:e,scrollToMessage:z0,removeMessageRef:K0,clearMessageRefs:q0,setMessageRefsFromCompose:X0,handleComposeSubmitError:N0}}T0();async function BV(_){let{panelKey:$,expanded:j,currentTurnIdRef:G,thoughtExpandedRef:Z,draftExpandedRef:X,setAgentThoughtVisibility:Y,getAgentThought:L,thoughtBufferRef:K,draftBufferRef:q,setAgentThought:Q,setAgentDraft:V}=_;if($!=="thought"&&$!=="draft")return;let B=G.current;if($==="thought"){if(Z.current=j,B)try{await Y(B,"thought",j)}catch(N){console.warn("Failed to update thought visibility:",N)}if(!j)return;try{let N=B?await L(B,"thought"):null;if(N?.text)K.current=N.text;Q((U)=>({...U||{text:"",totalLines:0},fullText:K.current||U?.fullText||"",totalLines:Number.isFinite(N?.total_lines)?N.total_lines:U?.totalLines||0}))}catch(N){console.warn("Failed to fetch full thought:",N)}return}if(X.current=j,B)try{await Y(B,"draft",j)}catch(N){console.warn("Failed to update draft visibility:",N)}if(!j)return;try{let N=B?await L(B,"draft"):null;if(N?.text)q.current=N.text;V((U)=>({...U||{text:"",totalLines:0},fullText:q.current||U?.fullText||"",totalLines:Number.isFinite(N?.total_lines)?N.total_lines:U?.totalLines||0}))}catch(N){console.warn("Failed to fetch full draft:",N)}}function MA(_){if(!_)return _;if(!(_.last_activity||_.lastActivity))return _;let{last_activity:$,lastActivity:j,...G}=_;return G}function wA(_){if(!_||typeof _!=="object")return{type:"active",last_activity:!0};return{..._,last_activity:!0}}function FV(_){let{lastActivityTtlMs:$,lastActivityTimerRef:j,lastActivityTokenRef:G,lastAgentEventRef:Z,lastSilenceNoticeRef:X,isAgentRunningRef:Y,setIsAgentTurnActive:L,setAgentStatus:K,draftBufferRef:q,thoughtBufferRef:Q,pendingRequestRef:V,lastAgentResponseRef:B,currentTurnIdRef:N,steerQueuedTurnIdRef:U,agentStatusRef:D,silentRecoveryRef:E,thoughtExpandedRef:H,draftExpandedRef:M,setCurrentTurnId:J,setSteerQueuedTurnId:O,currentTurnIdRefForPanel:T,setAgentThoughtVisibility:I,getAgentThought:A,setAgentThought:k,setAgentDraft:z}=_,W=f((l={})=>{let h=Number(l.atMs),r=Number.isFinite(h)&&h>0?h:Date.now();if(Z.current=r,l.running)Y.current=!0,L((b)=>b?b:!0);if(l.clearSilence)X.current=0},[Y,Z,X,L]),y=f(()=>{if(j.current)clearTimeout(j.current),j.current=null;G.current=0},[j,G]);u(()=>()=>{y()},[y]);let x=f(()=>{y(),K((l)=>MA(l))},[y,K]),P=f((l)=>{if(!l)return;y();let h=Date.now();G.current=h,K(wA(l)),j.current=setTimeout(()=>{if(G.current!==h)return;K((r)=>{if(!r||!(r.last_activity||r.lastActivity))return r;return null})},$)},[y,j,G,$,K]),S=f(()=>{Y.current=!1,L(!1),Z.current=null,X.current=0,q.current="",Q.current="",V.current=null,B.current=null,N.current=null,U.current=null,D.current=null,E.current={inFlight:!1,lastAttemptAt:0,turnId:null},y(),J(null),O(null),H.current=!1,M.current=!1},[D,y,N,q,M,Y,Z,B,X,V,J,L,O,E,U,Q,H]),v=f(async(l,h)=>{await BV({panelKey:l,expanded:h,currentTurnIdRef:T,thoughtExpandedRef:H,draftExpandedRef:M,setAgentThoughtVisibility:I,getAgentThought:A,thoughtBufferRef:Q,draftBufferRef:q,setAgentThought:k,setAgentDraft:z})},[T,q,M,A,z,k,I,Q,H]);return{noteAgentActivity:W,clearLastActivityTimer:y,clearLastActivityFlag:x,showLastActivity:P,clearAgentRunState:S,handlePanelToggle:v}}T0();function y8(_){return _?{..._}:{text:"",totalLines:0}}function UV(_){return Array.isArray(_)?_.map(($)=>({...$})):[]}function TA(_){return{inFlight:Boolean(_?.inFlight),lastAttemptAt:Number(_?.lastAttemptAt||0),turnId:typeof _?.turnId==="string"?_.turnId:null}}function xA(){return{agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}}function HV(_){return{agentStatus:_.agentStatus,agentDraft:y8(_.agentDraft),agentPlan:_.agentPlan||"",agentThought:y8(_.agentThought),pendingRequest:_.pendingRequest,currentTurnId:_.currentTurnId||null,steerQueuedTurnId:_.steerQueuedTurnId||null,isAgentTurnActive:Boolean(_.isAgentTurnActive),followupQueueItems:UV(_.followupQueueItems),activeModel:_.activeModel,activeThinkingLevel:_.activeThinkingLevel,supportsThinking:Boolean(_.supportsThinking),activeModelUsage:_.activeModelUsage,contextUsage:_.contextUsage,isAgentRunning:Boolean(_.isAgentRunning),wasAgentActive:Boolean(_.wasAgentActive),draftBuffer:_.draftBuffer||"",thoughtBuffer:_.thoughtBuffer||"",lastAgentEvent:_.lastAgentEvent||null,lastSilenceNotice:Number(_.lastSilenceNotice||0),lastAgentResponse:_.lastAgentResponse||null,currentTurnIdRef:_.currentTurnIdRef||null,steerQueuedTurnIdRef:_.steerQueuedTurnIdRef||null,thoughtExpanded:Boolean(_.thoughtExpanded),draftExpanded:Boolean(_.draftExpanded),agentStatusRef:_.agentStatusRef||null,silentRecovery:TA(_.silentRecovery)}}function EV(_){let $=_.snapshot||xA(),{refs:j,setters:G}=_;return _.clearLastActivityTimer?.(),j.isAgentRunningRef.current=Boolean($.isAgentRunning),j.wasAgentActiveRef.current=Boolean($.wasAgentActive),G.setIsAgentTurnActive(Boolean($.isAgentTurnActive)),j.lastAgentEventRef.current=$.lastAgentEvent||null,j.lastSilenceNoticeRef.current=Number($.lastSilenceNotice||0),j.draftBufferRef.current=$.draftBuffer||"",j.thoughtBufferRef.current=$.thoughtBuffer||"",j.pendingRequestRef.current=$.pendingRequest||null,j.lastAgentResponseRef.current=$.lastAgentResponse||null,j.currentTurnIdRef.current=$.currentTurnIdRef||null,j.steerQueuedTurnIdRef.current=$.steerQueuedTurnIdRef||null,j.agentStatusRef.current=$.agentStatusRef||null,j.silentRecoveryRef.current=$.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},j.thoughtExpandedRef.current=Boolean($.thoughtExpanded),j.draftExpandedRef.current=Boolean($.draftExpanded),G.setAgentStatus($.agentStatus||null),G.setAgentDraft(y8($.agentDraft)),G.setAgentPlan($.agentPlan||""),G.setAgentThought(y8($.agentThought)),G.setPendingRequest($.pendingRequest||null),G.setCurrentTurnId($.currentTurnId||null),G.setSteerQueuedTurnId($.steerQueuedTurnId||null),G.setFollowupQueueItems(UV($.followupQueueItems)),G.setActiveModel($.activeModel||null),G.setActiveThinkingLevel($.activeThinkingLevel||null),G.setSupportsThinking(Boolean($.supportsThinking)),G.setActiveModelUsage($.activeModelUsage??null),G.setContextUsage($.contextUsage??null),$}function Vj(_){return String(_||"").trim()||"web:default"}function DV({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function IA(_){return DV(_)}function CA(_){let $=String(_?.data?.content||"").trim();if($)return $.replace(/\s+/g," ").slice(0,200);if((Array.isArray(_?.data?.content_blocks)?_.data.content_blocks:[]).length>0)return"Sent an attachment.";return""}function WV(_){let{isAgentTurnActive:$,steerQueuedTurnId:j,currentTurnId:G,steerQueuedTurnIdRef:Z,setSteerQueuedTurnId:X,agentStatus:Y,agentDraft:L,agentPlan:K,agentThought:q,pendingRequest:Q,pendingRequestRef:V,followupQueueItems:B,activeModel:N,activeThinkingLevel:U,supportsThinking:D,activeModelUsage:E,contextUsage:H,isAgentRunningRef:M,wasAgentActiveRef:J,draftBufferRef:O,thoughtBufferRef:T,lastAgentEventRef:I,lastSilenceNoticeRef:A,lastAgentResponseRef:k,currentTurnIdRef:z,thoughtExpandedRef:W,draftExpandedRef:y,agentStatusRef:x,silentRecoveryRef:P,clearLastActivityTimer:S,setIsAgentTurnActive:v,setAgentStatus:l,setAgentDraft:h,setAgentPlan:r,setAgentThought:b,setPendingRequest:e,setCurrentTurnId:z0,setFollowupQueueItems:K0,setActiveModel:q0,setActiveThinkingLevel:X0,setSupportsThinking:N0,setActiveModelUsage:_0,setContextUsage:Z0,lastNotifiedIdRef:B0,agentsRef:W0,notify:d,shouldNotifyLocallyForChat:j0}=_,A0=f((l0)=>{if(!IA({remainingQueueCount:l0,steerQueuedTurnId:Z.current,currentTurnId:z.current,isAgentTurnActive:$}))return;Z.current=null,X(null)},[$,z,X,Z]),f0=f(()=>HV({agentStatus:Y,agentDraft:L,agentPlan:K,agentThought:q,pendingRequest:Q,currentTurnId:G,steerQueuedTurnId:j,isAgentTurnActive:$,followupQueueItems:B,activeModel:N,activeThinkingLevel:U,supportsThinking:D,activeModelUsage:E,contextUsage:H,isAgentRunning:M.current,wasAgentActive:J.current,draftBuffer:O.current,thoughtBuffer:T.current,lastAgentEvent:I.current,lastSilenceNotice:A.current,lastAgentResponse:k.current,currentTurnIdRef:z.current,steerQueuedTurnIdRef:Z.current,thoughtExpanded:W.current,draftExpanded:y.current,agentStatusRef:x.current,silentRecovery:P.current}),[N,E,U,L,K,Y,q,H,G,B,$,Q,j,D,M,J,O,T,I,A,k,z,Z,W,y,x,P]),b0=f((l0)=>{EV({snapshot:l0,clearLastActivityTimer:S,refs:{isAgentRunningRef:M,wasAgentActiveRef:J,lastAgentEventRef:I,lastSilenceNoticeRef:A,draftBufferRef:O,thoughtBufferRef:T,pendingRequestRef:V,lastAgentResponseRef:k,currentTurnIdRef:z,steerQueuedTurnIdRef:Z,agentStatusRef:x,silentRecoveryRef:P,thoughtExpandedRef:W,draftExpandedRef:y},setters:{setIsAgentTurnActive:v,setAgentStatus:l,setAgentDraft:h,setAgentPlan:r,setAgentThought:b,setPendingRequest:e,setCurrentTurnId:z0,setSteerQueuedTurnId:X,setFollowupQueueItems:K0,setActiveModel:q0,setActiveThinkingLevel:X0,setSupportsThinking:N0,setActiveModelUsage:_0,setContextUsage:Z0}})},[x,S,z,O,y,M,I,k,A,V,q0,_0,X0,h,r,l,b,Z0,z0,K0,v,e,X,N0,P,Z,T,W,J]),c0=f((l0)=>{if(!l0)return;if(z.current===l0)return;z.current=l0,P.current={inFlight:!1,lastAttemptAt:0,turnId:l0},z0(l0),Z.current=null,X(null),O.current="",T.current="",h({text:"",totalLines:0}),r(""),b({text:"",totalLines:0}),e(null),V.current=null,k.current=null,W.current=!1,y.current=!1},[z,O,y,k,V,h,r,b,z0,e,X,P,Z,T,W]),X_=f((l0)=>{let __=k.current;if(!__||!__.post)return;if(l0&&__.turnId&&__.turnId!==l0)return;let P0=__.post,p0=typeof P0?.chat_jid==="string"&&P0.chat_jid.trim()?P0.chat_jid.trim():"";if(!p0||!j0(p0))return;if(P0.id&&B0.current===P0.id)return;let R0=CA(P0);if(!R0)return;B0.current=P0.id||B0.current,k.current=null;let d0=W0.current||{},U_=(P0?.data?.agent_id?d0[P0.data.agent_id]:null)?.name||"Pi";d(U_,R0,{sourceLabel:"Local"})},[W0,k,B0,d,j0]);return{clearQueuedSteerStateIfStale:A0,snapshotCurrentChatPaneState:f0,restoreChatPaneState:b0,setActiveTurn:c0,notifyForFinalResponse:X_}}T0();function M8(_){return _?.turn_id||_?.turnId||null}function w5(_){if(typeof _?.text!=="string"||!_.text)return null;let $=Number.isFinite(_?.totalLines)?Number(_.totalLines):Number.isFinite(_?.total_lines)?Number(_.total_lines):0;return{text:_.text,totalLines:$}}function Qj(_,$){return typeof _?.text==="string"&&_.text.length>=$.length}function Nj(_,$){return Number.isFinite($)?Number($):_?_.replace(/\r\n/g,`
`).split(`
`).length:0}function w8(_,$){return{text:_,totalLines:Nj(_,$)}}function Bj(_,$){return{text:$?.text||"",totalLines:pX(_),fullText:_}}function zV(_,$,j){return j==="replace"?$:`${_||""}${$}`}function OV(_,$){let j=_||"";if($?.reset)j="";if($?.delta)j+=String($.delta);return j}function JV(_,$){let j=_||"";if($?.reset)j="";if(typeof $?.delta==="string")j+=$.delta;return j}function s1(_){return!_?.currentHashtag&&!_?.searchQuery&&!_?.searchOpen}function AV(_,$,j){return Boolean($&&j&&(_==="new_post"||_==="new_reply"||_==="agent_response"))}function Fj(_,$){return _&&$}function kV(_,$){if(!Array.isArray(_)||_.length===0)return[$];if(_.some((j)=>j?.id===$?.id))return _;return[..._,$]}function yV(_,$){if(!Array.isArray(_))return _;if(!_.some((j)=>j?.id===$?.id))return _;return _.map((j)=>j?.id===$?.id?$:j)}function MV(_,$){if(!Array.isArray(_))return _;let j=Array.isArray($)?$:[];if(j.length===0)return _;let G=new Set(j),Z=_.filter((X)=>!G.has(X?.id));return Z.length===_.length?_:Z}async function wV(_){let{currentChatJid:$,getAgentStatus:j,activeChatJidRef:G,wasAgentActiveRef:Z,viewStateRef:X,refreshTimeline:Y,clearAgentRunState:L,agentStatusRef:K,pendingRequestRef:q,thoughtBufferRef:Q,draftBufferRef:V,setAgentStatus:B,setAgentDraft:N,setAgentPlan:U,setAgentThought:D,setPendingRequest:E,setActiveTurn:H,noteAgentActivity:M,clearLastActivityFlag:J,onStateAccessResult:O}=_,T=$;try{let I=await j(T);if(O?.(!1),G.current!==T)return null;if(!I||I.status!=="active"||!I.data){if(Z.current&&s1(X.current))Y();return Z.current=!1,L(),K.current=null,B(null),N({text:"",totalLines:0}),U(""),D({text:"",totalLines:0}),E(null),q.current=null,I??null}Z.current=!0;let A=I.data;K.current=A;let k=M8(A);if(k)H(k);M({running:!0,clearSilence:!0,atMs:p$(A)??Date.now()}),J(),B(A);let z=w5(I.thought);if(z)D((y)=>{if(Qj(y,z.text))return y;return Q.current=z.text,z});let W=w5(I.draft);if(W)N((y)=>{if(Qj(y,W.text))return y;return V.current=W.text,W});return I}catch(I){return O?.(!0),console.warn("Failed to fetch agent status:",I),null}}async function TV(_){let{isAgentRunningRef:$,pendingRequestRef:j,currentTurnIdRef:G,silentRecoveryRef:Z,silenceRefreshMs:X,viewStateRef:Y,refreshTimeline:L,refreshQueueState:K,refreshAgentStatus:q,now:Q=()=>Date.now()}=_;if(!$.current)return null;if(j.current)return null;let V=G.current||null,B=Z.current,N=Q();if(B.inFlight)return null;if(B.turnId===V&&N-B.lastAttemptAt<X)return null;B.inFlight=!0,B.lastAttemptAt=N,B.turnId=V;try{if(s1(Y.current))await L();return await K(),await q()}finally{B.inFlight=!1}}function fA(_){if(!_||typeof _!=="object")return!1;let $=typeof _.type==="string"?_.type:"";if($==="tool_call"||$==="tool_status"||$==="intent")return!0;return Boolean(_.tool_name||_.tool_args)}function xV(_){let{isAgentRunningRef:$,pendingRequestRef:j,lastAgentEventRef:G,lastSilenceNoticeRef:Z,agentStatusRef:X,silenceWarningMs:Y,silenceFinalizeMs:L,silenceRefreshMs:K,isCompactionStatus:q,setAgentStatus:Q,reconcileSilentTurn:V,now:B=()=>Date.now()}=_;if(!$.current)return;if(j.current)return;let N=G.current;if(!N)return;let U=B(),D=U-N,E=X.current,H=q(E),M=fA(E);if(D>=L){if(!H&&!M)Q({type:"waiting",title:"Re-syncing after a quiet period…"});V();return}if(D>=Y&&U-Z.current>=K){if(!H&&!M){let J=Math.floor(D/1000);Q({type:"waiting",title:`Waiting for model… No events for ${J}s`})}Z.current=U,V()}}function PA(_){if(!_||typeof _!=="object")return null;let $=typeof _.type==="string"?_.type:"",j=typeof _.title==="string"&&_.title.trim()?_.title.trim():null,G=typeof _.tool_name==="string"&&_.tool_name.trim()?_.tool_name.trim():null,Z=typeof _.status==="string"&&_.status.trim()?_.status.trim():null;if($==="tool_call")return{summary:`Timed out while running ${j||G||"tool"}`,title:j,toolName:G,statusText:Z};if($==="tool_status"){let X=j||G||"tool";return{summary:Z?`Timed out after ${X}: ${Z}`:`Timed out after ${X}`,title:j,toolName:G,statusText:Z}}if(G||j)return{summary:`Timed out after ${j||G||"tool"}`,title:j,toolName:G,statusText:Z};return null}function IV(_){let{isAgentRunningRef:$,lastSilenceNoticeRef:j,lastAgentEventRef:G,currentTurnIdRef:Z,thoughtExpandedRef:X,draftExpandedRef:Y,draftBufferRef:L,thoughtBufferRef:K,pendingRequestRef:q,lastAgentResponseRef:Q,agentStatusRef:V,stalledPostIdRef:B,scrollToBottomRef:N,setCurrentTurnId:U,setAgentDraft:D,setAgentPlan:E,setAgentThought:H,setPendingRequest:M,setAgentStatus:J,setPosts:O,dedupePosts:T,now:I=()=>Date.now(),nowIso:A=()=>new Date().toISOString()}=_;if(!$.current)return;let k=PA(V.current);$.current=!1,j.current=0,G.current=null,V.current=null,Z.current=null,U(null),X.current=!1,Y.current=!1;let z=(L.current||"").trim();if(L.current="",K.current="",E(""),H({text:"",totalLines:0}),M(null),q.current=null,Q.current=null,!z){D({text:"",totalLines:0}),J({type:"error",title:"Response stalled - No content received"});return}D({text:z,totalLines:Nj(z,null),fullText:z});let W=z,y=I(),x=A(),P={id:y,timestamp:x,data:{type:"agent_response",content:W,content_blocks:[{type:"timeout_marker",timed_out:!0,title:"Timed out",tool_action_summary:k?.summary||"",tool_title:k?.title||"",tool_name:k?.toolName||"",tool_status:k?.statusText||"",draft_recovered:!0}],agent_id:"default",is_local_stall:!0}};B.current=y,O((S)=>S?T([...S,P]):[P]),N.current?.(),J(null)}function RA(_){let{stalledPostIdRef:$,setPosts:j}=_,G=$.current;if(!G)return;j((Z)=>Z?Z.filter((X)=>X.id!==G):Z),$.current=null}function SA(_){IV(_)}function CV(_){let{viewStateRef:$,currentHashtag:j,searchQuery:G,searchOpen:Z}=_;u(()=>{$.current={currentHashtag:j,searchQuery:G,searchOpen:Z}},[j,Z,G,$])}function fV(_){let{stalledPostIdRef:$,setPosts:j,isAgentRunningRef:G,lastSilenceNoticeRef:Z,lastAgentEventRef:X,currentTurnIdRef:Y,thoughtExpandedRef:L,draftExpandedRef:K,draftBufferRef:q,thoughtBufferRef:Q,pendingRequestRef:V,lastAgentResponseRef:B,agentStatusRef:N,scrollToBottomRef:U,setCurrentTurnId:D,setAgentDraft:E,setAgentPlan:H,setAgentThought:M,setPendingRequest:J,setAgentStatus:O,dedupePosts:T}=_,I=f(()=>{RA({stalledPostIdRef:$,setPosts:j})},[j,$]),A=f(()=>{SA({isAgentRunningRef:G,lastSilenceNoticeRef:Z,lastAgentEventRef:X,currentTurnIdRef:Y,thoughtExpandedRef:L,draftExpandedRef:K,draftBufferRef:q,thoughtBufferRef:Q,pendingRequestRef:V,lastAgentResponseRef:B,agentStatusRef:N,stalledPostIdRef:$,scrollToBottomRef:U,setCurrentTurnId:D,setAgentDraft:E,setAgentPlan:H,setAgentThought:M,setPendingRequest:J,setAgentStatus:O,setPosts:j,dedupePosts:T})},[Y,T,q,K,G,X,B,N,Z,V,U,E,H,O,M,D,J,j,$,Q,L]);return{removeStalledPost:I,finalizeStalledResponse:A}}function uA(_){let{removeFileRefRef:$,composeReferenceActions:j}=_;$.current=j.removeFileRef||null}function gA(_){return{applyBranding:_.applyBranding,composeReferenceActions:_.composeReferenceActions,..._.agentActivity,..._.chatPaneRuntime,recoveryCallbacks:_.recoveryCallbacks}}function PV(_){let{environment:$,composeReferences:j,agentActivity:G,chatPaneRuntime:Z,recovery:X,viewState:Y,removeFileRefRef:L}=_,{applyBranding:K}=YV($),q=NV(j);uA({removeFileRefRef:L,composeReferenceActions:q});let Q=FV(G),V=WV({...Z,clearLastActivityTimer:Q.clearLastActivityTimer}),B=fV(X);return CV(Y),gA({applyBranding:K,composeReferenceActions:q,agentActivity:Q,chatPaneRuntime:V,recoveryCallbacks:B})}T0();T0();f_();var T8=new Map,Uj=new Map;function RV(){return Date.now()}function x6(_){return String(_||"").trim()}function SV(_,$=600000){return Boolean(_&&RV()-_.cachedAt<=$)}function bA(_){while(_.size>24){let $=_.keys().next().value;if(!$)break;_.delete($)}}function uV(_,$){return T8.delete(_),T8.set(_,$),bA(T8),$}function x8(_,$){let j=x6(_);if(!j)return null;let G={posts:Array.isArray($?.posts)?$.posts:[],has_more:Boolean($?.has_more),cachedAt:RV()};return uV(j,G)}function Hj(_,$={}){let j=x6(_);if(!j)return null;let G=Number.isFinite($.maxAgeMs)?Number($.maxAgeMs):600000,Z=T8.get(j)||null;if(!SV(Z,G))return null;return uV(j,Z)}function gV(_,$,j=5){if(!Array.isArray(_))return[];let G=x6($),Z=Number.isFinite(j)?Math.max(1,Math.min(8,Number(j))):5,X=new Set,Y=[];for(let L of _){let K=x6(L?.chat_jid);if(!K||K===G||X.has(K))continue;if(X.add(K),Y.push(K),Y.length>=Z)break}return Y}async function bV(_){let $=Array.from(new Set((_.chatJids||[]).map((L)=>x6(L)).filter(Boolean)));if($.length===0)return;let j=Number.isFinite(_.maxAgeMs)?Number(_.maxAgeMs):600000,G=Number.isFinite(_.maxConcurrent)?Math.max(1,Math.min(4,Number(_.maxConcurrent))):2,Z=$.filter((L)=>!SV(Hj(L,{maxAgeMs:j}),j)),X=0,Y=Array.from({length:Math.min(G,Z.length)},async()=>{while(X<Z.length){let L=Z[X++],K=Uj.get(L);if(K){await K;continue}let q=(async()=>{try{let Q=await _.fetchTimeline(L);x8(L,Q)}catch(Q){console.debug("[app-timeline-cache] Ignoring timeline prewarm failure for a best-effort background fetch.",Q,{chatJid:L})}finally{Uj.delete(L)}})();Uj.set(L,q),await q}});await Promise.all(Y)}function vV(_,$){let j=Array.isArray(_)?_:[],G=Array.isArray($)?$:null;if(!G)return j;if(G.length===0)return G;if(j.length===0)return G;let Z=1/0;for(let Y of G){let L=Y?.id;if(typeof L==="number"&&Number.isFinite(L)&&L<Z)Z=L}if(!Number.isFinite(Z))return U5([...G,...j]);let X=j.filter((Y)=>{let L=Y?.id;return typeof L==="number"&&Number.isFinite(L)&&L<Z});return U5([...G,...X])}function mV({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null,currentHashtag:G=null,searchQuery:Z=null}){let[X,Y]=C(null),[L,K]=C(!1),q=g(!1),Q=g(null),V=g(!1),B=g(null),N=g(null),U=g(0),D=g(0);u(()=>{q.current=L},[L]),u(()=>{N.current=X},[X]);let E=!G&&!Z,H=g(E);u(()=>{H.current=E},[E]),u(()=>{U.current+=1,Y(null),N.current=null,B.current=null,V.current=!1,q.current=!1,K(!1),D.current=0},[j]);let M=f((k,z)=>{if(!E)return;x8(j,{posts:Array.isArray(k)?k:[],has_more:Boolean(z)})},[j,E]),J=f((k,z)=>{N.current=Array.isArray(k)?k:[],q.current=Boolean(z),Y(N.current),K(q.current),M(N.current,q.current)},[M]),O=f(async(k=null)=>{let z=U.current;try{if(k){let P=await Y7(k,50,0,j);if(z!==U.current)return;Y(P.posts),K(!1);return}let W=(P)=>{if(z!==U.current)return;let S=Array.isArray(P?.posts)?P.posts:[],v=Boolean(P?.has_more);J(S,v)},y=Hj(j);if(y){J(y.posts,y.has_more);let P=D.current;h$(10,null,j).then((S)=>{if(z!==U.current||D.current!==P)return;if(!H.current)return;let v=Array.isArray(S?.posts)?S.posts:[],l=Boolean(S?.has_more);J(vV(N.current,v),l)}).catch((S)=>{if(z!==U.current)return;console.error("Failed to refresh cached timeline:",S)});return}let x=await h$(10,null,j);W(x)}catch(W){if(z!==U.current)return;throw console.error("Failed to load posts:",W),W}},[j,J]),T=f(async()=>{let k=U.current;try{let z=await h$(10,null,j);if(k!==U.current)return;J(vV(N.current,z?.posts),Boolean(z?.has_more))}catch(z){if(k!==U.current)return;console.error("Failed to refresh timeline:",z)}},[j,J]),I=f(async(k={})=>{let z=U.current,W=N.current;if(!W||W.length===0)return;if(V.current)return;let{preserveScroll:y=!0,preserveMode:x="top",allowRepeat:P=!1}=k,S=(h)=>{if(!y){h();return}if(x==="top")$(h);else _(h)},l=W.slice().sort((h,r)=>h.id-r.id)[0]?.id;if(!Number.isFinite(l))return;if(!P&&B.current===l)return;V.current=!0,B.current=l;try{let h=await h$(10,l,j);if(z!==U.current)return;if(D.current+=1,h.posts.length>0)S(()=>{let r=U5([...h.posts,...N.current||[]]);J(r,h.has_more)});else J(N.current||[],!1)}catch(h){if(z!==U.current)return;console.error("Failed to load more posts:",h)}finally{if(z===U.current)V.current=!1}},[j,_,$,J]);u(()=>{Q.current=I},[I]);let A=f((k)=>{Y((z)=>{let W=typeof k==="function"?k(z):k;if(N.current=W,Array.isArray(W)){if(D.current+=1,E)x8(j,{posts:W,has_more:q.current})}return W})},[j,E]);return{posts:X,setPosts:A,hasMore:L,setHasMore:K,hasMoreRef:q,loadPosts:O,refreshTimeline:T,loadMore:I,loadMoreRef:Q,loadingMoreRef:V,lastBeforeIdRef:B}}T0();function vA(_){if(!_?.data?.is_bot_message)return!1;let $=_.data.content;return $==="Queued as a follow-up (one-at-a-time)."||$==="⁣"}function cV(_,$){if(!_||!Array.isArray(_))return _;let j=new Set($||[]),G=_.filter((Z)=>!j.has(Z?.id)&&!vA(Z));return G.length===_.length?_:G}function lV(_,$){let j=$||new Set;return Array.isArray(_)?_.map((G)=>({...G})).filter((G)=>!j.has(G.row_id)):[]}function hV(_,$){if(!Array.isArray(_)||!Array.isArray($))return!1;return _.length===$.length&&_.every((j,G)=>j?.row_id===$[G]?.row_id)}function _4(_,$){let j=Array.isArray(_)&&$!=null?_.filter((G)=>G?.row_id!==$):Array.isArray(_)?[..._]:[];return{items:j,remainingQueueCount:j.length}}function nV(_,$){let j=Array.isArray(_)?_:[],G=$?.row_id,Z=$?.content;if(G==null||typeof Z!=="string"||!Z.trim())return j;if(j.some((X)=>X?.row_id===G))return j;return[...j,{row_id:G,content:Z,timestamp:$?.timestamp||null,thread_id:$?.thread_id??null}]}function pV(_){if(!_||typeof _!=="object")return!1;if(_.queued==="followup"||_.queued==="steer")return!0;let $=_.command;return Boolean($&&typeof $==="object"&&($.queued_followup||$.queued_steer))}function mA(_,$=150){return Math.abs(_)<=$}function rV(_){let{timelineRef:$,viewStateRef:j,followupQueueRowIdsRef:G}=_,Z=f(()=>{let K=$.current;if(!K)return;if(mA(K.scrollTop))K.scrollTop=0},[$]),X=f((K)=>{let q=$.current;if(!q||typeof K!=="function"){K?.();return}let{currentHashtag:Q,searchQuery:V,searchOpen:B}=j.current||{},N=!((V||B)&&!Q),U=N?q.scrollHeight-q.scrollTop:q.scrollTop;K(),requestAnimationFrame(()=>{let D=$.current;if(!D)return;if(N){let E=Math.max(D.scrollHeight-U,0);D.scrollTop=E}else{let E=Math.max(D.scrollHeight-D.clientHeight,0),H=Math.min(U,E);D.scrollTop=H}})},[$,j]),Y=f((K)=>{let q=$.current;if(!q||typeof K!=="function"){K?.();return}let Q=q.scrollTop;K(),requestAnimationFrame(()=>{let V=$.current;if(!V)return;let B=Math.max(V.scrollHeight-V.clientHeight,0);V.scrollTop=Math.min(Q,B)})},[$]),L=f((K)=>{return cV(K,G.current)},[G]);return{scrollToBottom:Z,preserveTimelineScroll:X,preserveTimelineScrollTop:Y,filterQueuedPosts:L}}function cA(_){let{rawPosts:$,filterQueuedPosts:j}=_;return j($)}function lA(_){_.scrollToBottomRef.current=_.scrollToBottom}function dV(_){let{timelineRef:$,viewStateRef:j,followupQueueRowIdsRef:G,currentChatJid:Z,currentHashtag:X,searchQuery:Y,followupQueueItems:L}=_,K=g(null),{scrollToBottom:q,preserveTimelineScroll:Q,preserveTimelineScrollTop:V,filterQueuedPosts:B}=rV({timelineRef:$,viewStateRef:j,followupQueueRowIdsRef:G});lA({scrollToBottomRef:K,scrollToBottom:q});let{posts:N,setPosts:U,hasMore:D,setHasMore:E,hasMoreRef:H,loadPosts:M,refreshTimeline:J,loadMore:O,loadMoreRef:T}=mV({preserveTimelineScroll:Q,preserveTimelineScrollTop:V,chatJid:Z,currentHashtag:X,searchQuery:Y}),I=G0(()=>cA({rawPosts:N,followupQueueItems:L,filterQueuedPosts:B}),[B,L,N]);return{scrollToBottomRef:K,scrollToBottom:q,preserveTimelineScroll:Q,preserveTimelineScrollTop:V,rawPosts:N,setPosts:U,hasMore:D,setHasMore:E,hasMoreRef:H,loadPosts:M,refreshTimeline:J,loadMore:O,loadMoreRef:T,posts:I}}T0();function hA(_){let{currentHashtag:$,searchQuery:j,searchOpen:G}=_;return!$&&!j&&!G}function iV(_){let{currentHashtag:$,searchQuery:j,searchOpen:G,searchScope:Z,currentChatJid:X,currentRootChatJid:Y,posts:L,loadPosts:K,searchPosts:q,setCurrentHashtag:Q,setSearchQuery:V,setSearchOpen:B,setSearchScope:N,setPosts:U,setHasMore:D,preserveTimelineScrollTop:E,setRemovingPostIds:H,deletePost:M,hasMoreRef:J,loadMoreRef:O}=_,T=f(async(P)=>{await qV({hashtag:P,setCurrentHashtag:Q,setPosts:U,loadPosts:K})},[K,Q,U]),I=f(async()=>{await KV({setCurrentHashtag:Q,setSearchQuery:V,setPosts:U,loadPosts:K})},[K,Q,U,V]),A=f(async(P,S=Z,v)=>{await Kj({query:P,scope:S,currentChatJid:X,currentRootChatJid:Y,searchPosts:q,setSearchScope:N,setSearchQuery:V,setCurrentHashtag:Q,setPosts:U,setHasMore:D,filters:v})},[X,Y,q,Z,Q,D,U,V,N]),k=f((P)=>{if(N(P),j&&j.trim())Kj({query:j,scope:P,currentChatJid:X,currentRootChatJid:Y,searchPosts:q,setSearchScope:N,setSearchQuery:V,setCurrentHashtag:Q,setPosts:U,setHasMore:D})},[X,Y,q,j,Q,D,U,V,N]),z=f(()=>{B(!0),V(null),Q(null),N("current"),U([])},[Q,U,B,V,N]),W=f(()=>{B(!1),V(null),K()},[K,B,V]),y=G0(()=>hA({currentHashtag:$,searchQuery:j,searchOpen:G}),[$,G,j]),x=f(async(P)=>{await VV({post:P,posts:L,currentChatJid:X,deletePost:M,preserveTimelineScrollTop:E,setPosts:U,setRemovingPostIds:H,hasMoreRef:J,loadMoreRef:O})},[X,M,J,O,L,E,U,H]);return{handleHashtagClick:T,handleBackToTimeline:I,handleSearch:A,handleSearchScopeChange:k,enterSearchMode:z,exitSearchMode:W,isMainTimelineView:y,handleDeletePost:x}}T0();function Ej(_){if(!Array.isArray(_?.content))return null;return _.content.find((j)=>j?.type==="status_panel"&&j?.panel)?.panel||null}function oV(_,$){let j=new Map(_),G=Ej($);if(typeof $?.key==="string"&&$.key&&G)j.set($.key,G);else j.delete("autoresearch");return j}function sV(_,$){let j=typeof $?.key==="string"?$.key:"";if(!j)return _;let G=new Map(_),Z=Ej($);if($?.options?.remove||!Z)G.delete(j);else G.set(j,Z);return G}function aV(_){if(_?.options?.remove)return!0;return Ej(_)?.state!=="running"}function Dj(_,$){return`${_}:${$}`}function tV(_,$,j){let G=Dj($,j);if(_.has(G))return _;let Z=new Set(_);return Z.add(G),Z}function eV(_,$){if(!_.has($))return _;let j=new Set(_);return j.delete($),j}function I8(_,$){if(_.size===0)return _;let j=`${$}:`,G=new Set(Array.from(_).filter((Z)=>!String(Z).startsWith(j)));return G.size===_.size?_:G}async function _Q(_){let $=typeof _.action?.action_type==="string"?_.action.action_type:"",j=typeof _.action?.key==="string"?_.action.key:"";if($==="autoresearch.stop")return await _.stopAutoresearch(_.currentChatJid,{generateReport:!0}),{refreshAutoresearchStatus:!0};if($==="autoresearch.dismiss")return await _.dismissAutoresearch(_.currentChatJid),{refreshAutoresearchStatus:!0};if($==="autoresearch.copy_tmux"){let G=typeof _.panel?.tmux_command==="string"?_.panel.tmux_command.trim():"";if(!G)throw Error("No tmux command available.");return await _.writeClipboard(G),{refreshAutoresearchStatus:!1,toast:{title:"Copied",detail:"tmux command copied to clipboard.",kind:"success"}}}throw Error(`Unsupported panel action: ${$||j}`)}var $Q="piclaw:ctx:";function $4(_){if(!_||typeof _!=="object")return null;let $=_,j=$.tokens==null?null:Number($.tokens),G=$.contextWindow==null?null:Number($.contextWindow),Z=$.percent==null?null:Number($.percent);return{tokens:Number.isFinite(j)?j:null,contextWindow:Number.isFinite(G)?G:null,percent:Number.isFinite(Z)?Z:null}}function T5(_,$){let j=$4(_),G=$4($);if(!j&&!G)return!0;if(!j||!G)return!1;return j.tokens===G.tokens&&j.contextWindow===G.contextWindow&&j.percent===G.percent}function x5(_,$){if(!_||!$||typeof $!=="object")return;if($.percent==null)return;try{K_($Q+_,JSON.stringify($))}catch(G){console.debug("[app-status-refresh] Ignoring best-effort context usage persistence failure.",G,{chatJid:_})}}function jQ(_){if(!_)return null;return U2($Q+_)}async function GQ(_){let{currentChatJid:$,queueRefreshGenRef:j,activeChatJidRef:G,dismissedQueueRowIdsRef:Z,getAgentQueueState:X,setFollowupQueueItems:Y,clearQueuedSteerStateIfStale:L}=_,K=++j.current,q=$;try{let Q=await X(q);if(K!==j.current)return;if(G.current!==q)return;let V=Z.current,B=Array.isArray(Q?.items)?Q.items:[],N=lV(B,V);if(N.length){Y((U)=>hV(U,N)?U:N);return}if(B.length>0)return;V.clear(),L(0),Y((U)=>U.length===0?U:[])}catch{if(K!==j.current)return;if(G.current!==q)return;Y((Q)=>Q.length===0?Q:[])}}async function ZQ(_){let{currentChatJid:$,activeChatJidRef:j,getAgentContext:G,setContextUsage:Z}=_,X=$;try{let Y=$4(await G(X));if(j.current!==X)return;if(Y&&Y.percent!=null)Z((L)=>T5(L,Y)?L:Y),x5(X,Y)}catch(Y){if(j.current!==X)return;console.warn("Failed to fetch agent context:",Y)}}async function XQ(_){let{currentChatJid:$,activeChatJidRef:j,getAutoresearchStatus:G,setExtensionStatusPanels:Z,setPendingExtensionPanelActions:X}=_,Y=$;try{let L=await G(Y);if(j.current!==Y)return;Z((K)=>oV(K,L)),X((K)=>I8(K,"autoresearch"))}catch(L){if(j.current!==Y)return;console.warn("Failed to fetch autoresearch status:",L)}}function YQ(_){let{refreshModelState:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:G,refreshQueueState:Z,refreshContextUsage:X,refreshAutoresearchStatus:Y}=_;$(),j(),G(),Z(),X(),Y()}function LQ(_){let{viewStateRef:$,refreshTimeline:j,refreshModelAndQueueState:G}=_;if(s1($.current))j();G()}X6();var C8=new Map,f8=new Map,nA=250,qQ=1500,KQ=300000;function I5(){if(typeof performance<"u"&&typeof performance.now==="function")return performance.now();return Date.now()}function pA(_,$){return`${_}:${$}`}function rA(_){for(let[$,j]of f8.entries())if(_-j>KQ)f8.delete($)}function dA(_){for(let[$,j]of C8.entries()){if(j.inFlight)continue;if(!Number.isFinite(j.lastCompletedAt)||_-j.lastCompletedAt>KQ)C8.delete($)}}function VQ(_=I5()){rA(_),dA(_)}function QQ(_){let{chatJid:$,nowMs:j=I5()}=_;if(!$)return;f8.set($,j),VQ(j)}function I6(_,$=qQ,j=I5()){if(!_)return!1;let G=f8.get(_);if(!Number.isFinite(G))return!1;return j-Number(G)<=$}async function J$(_){let{kind:$,chatJid:j,run:G,cooldownMs:Z=nA,activationWindowMs:X=qQ,nowMs:Y=I5()}=_;VQ(Y);let L=pA($,j),K=C8.get(L)||{inFlight:null,lastCompletedAt:Number.NaN,lastValue:null};if(C8.set(L,K),K.inFlight)return await K.inFlight;if(Boolean(A2("thread-switch",j)||I6(j,X,Y))&&Number.isFinite(K.lastCompletedAt)&&Y-K.lastCompletedAt<=Z)return K.lastValue;let Q=Promise.resolve().then(G).then((V)=>{return K.lastCompletedAt=I5(),K.lastValue=V??null,K.inFlight=null,V}).catch((V)=>{throw K.lastCompletedAt=I5(),K.inFlight=null,V});return K.inFlight=Q,await Q}function NQ(_){let{serverVersion:$,currentAppAssetVersion:j,staleUiVersionRef:G,staleUiReloadScheduledRef:Z,tabStoreHasUnsaved:X,isAgentRunningRef:Y,pendingRequestRef:L,showIntentToast:K}=_,q=typeof $==="string"&&$.trim()?$.trim():null;if(!q||!j||q===j)return!1;if(G.current===q)return!0;G.current=q;let Q=typeof document<"u"?String(document.querySelector(".compose-box textarea")?.value||"").trim():"";if(!X()&&!Q&&!Y.current&&!L.current&&!Z.current);return K("New UI available","Reload this page to apply the latest interface update.","warning",8000),!0}function Wj(_){let{currentHashtag:$,searchQuery:j,searchOpen:G}=_||{};return!$&&!j&&!G}function BQ(_){let{currentChatJid:$,status:j,setConnectionStatus:G,setAgentStatus:Z,setAgentDraft:X,setAgentPlan:Y,setAgentThought:L,setPendingRequest:K,pendingRequestRef:q,clearAgentRunState:Q,hasConnectedOnceRef:V,viewStateRef:B,refreshTimeline:N,refreshAgentStatus:U,refreshQueueState:D,refreshContextUsage:E}=_;if(G(j),j!=="connected"){Z(null),X({text:"",totalLines:0}),Y(""),L({text:"",totalLines:0}),K(null),q.current=null,Q();return}if(!V.current){if(V.current=!0,Z(null),X({text:"",totalLines:0}),Y(""),L({text:"",totalLines:0}),K(null),q.current=null,Q(),I6($))return;if(Wj(B.current))N();U(),D(),E();return}if(Wj(B.current))N();U(),D(),E()}function FQ(_){let{viewStateRef:$,isAgentActive:j,refreshTimeline:G,refreshQueueState:Z,refreshAgentStatus:X,refreshContextUsage:Y,refreshAutoresearchStatus:L}=_,K=Wj($.current);if(j){if(K)G();Z(),X(),Y(),L();return}if(K)G();X(),Y(),L()}function iA(_){return Math.min(1000,Math.max(100,Math.floor(_/2)))}function UQ(_){let{currentChatJid:$,activeChatJidRef:j,queueRefreshGenRef:G,dismissedQueueRowIdsRef:Z,getAgentQueueState:X,setFollowupQueueItems:Y,clearQueuedSteerStateIfStale:L,getAgentContext:K,setContextUsage:q,getAutoresearchStatus:Q,setExtensionStatusPanels:V,setPendingExtensionPanelActions:B,getAgentStatus:N,wasAgentActiveRef:U,viewStateRef:D,refreshTimeline:E,clearAgentRunState:H,agentStatusRef:M,pendingRequestRef:J,thoughtBufferRef:O,draftBufferRef:T,setAgentStatus:I,setAgentDraft:A,setAgentPlan:k,setAgentThought:z,setPendingRequest:W,setActiveTurn:y,noteAgentActivity:x,clearLastActivityFlag:P,isAgentRunningRef:S,currentTurnIdRef:v,silentRecoveryRef:l,silenceRefreshMs:h,lastAgentEventRef:r,lastSilenceNoticeRef:b,silenceWarningMs:e,silenceFinalizeMs:z0,isCompactionStatus:K0,serverVersionContext:q0,setConnectionStatus:X0,setStateAccessFailed:N0,setPendingRequestForConnection:_0,hasConnectedOnceRef:Z0}=_,B0=f(()=>{return J$({kind:"queue-state",chatJid:$,run:async()=>{return await GQ({currentChatJid:$,queueRefreshGenRef:G,activeChatJidRef:j,dismissedQueueRowIdsRef:Z,getAgentQueueState:X,setFollowupQueueItems:Y,clearQueuedSteerStateIfStale:L}),null}})},[j,L,$,Z,X,G,Y]),W0=f(async()=>{await J$({kind:"context-usage",chatJid:$,run:async()=>{return await ZQ({currentChatJid:$,activeChatJidRef:j,getAgentContext:K,setContextUsage:q}),null}})},[j,$,K,q]),d=f(async()=>{await J$({kind:"autoresearch-status",chatJid:$,run:async()=>{return await XQ({currentChatJid:$,activeChatJidRef:j,getAutoresearchStatus:Q,setExtensionStatusPanels:V,setPendingExtensionPanelActions:B}),null}})},[j,$,Q,V,B]),j0=f(async()=>{return await J$({kind:"agent-status",chatJid:$,run:async()=>{return await wV({currentChatJid:$,getAgentStatus:N,activeChatJidRef:j,wasAgentActiveRef:U,viewStateRef:D,refreshTimeline:E,clearAgentRunState:H,agentStatusRef:M,pendingRequestRef:J,thoughtBufferRef:O,draftBufferRef:T,setAgentStatus:I,setAgentDraft:A,setAgentPlan:k,setAgentThought:z,setPendingRequest:W,setActiveTurn:y,noteAgentActivity:x,clearLastActivityFlag:P,onStateAccessResult:N0})}})},[j,M,H,P,$,T,N,x,J,E,y,A,k,I,z,W,N0,O,D,U]),A0=f(async()=>{return await TV({isAgentRunningRef:S,pendingRequestRef:J,currentTurnIdRef:v,silentRecoveryRef:l,silenceRefreshMs:h,viewStateRef:D,refreshTimeline:E,refreshQueueState:B0,refreshAgentStatus:j0})},[v,S,J,j0,B0,E,h,l,D]);u(()=>{let c0=iA(e),X_=setInterval(()=>{xV({isAgentRunningRef:S,pendingRequestRef:J,lastAgentEventRef:r,lastSilenceNoticeRef:b,agentStatusRef:M,silenceWarningMs:e,silenceFinalizeMs:z0,silenceRefreshMs:h,isCompactionStatus:K0,setAgentStatus:I,reconcileSilentTurn:A0})},c0);return()=>clearInterval(X_)},[M,S,K0,r,b,J,A0,I,z0,h,e]);let f0=f((c0)=>{return NQ({serverVersion:c0,...q0})},[q0]),b0=f((c0)=>{if(c0==="connected")N0(!1);BQ({currentChatJid:$,status:c0,setConnectionStatus:X0,setAgentStatus:I,setAgentDraft:A,setAgentPlan:k,setAgentThought:z,setPendingRequest:_0,pendingRequestRef:J,clearAgentRunState:H,hasConnectedOnceRef:Z0,viewStateRef:D,refreshTimeline:E,refreshAgentStatus:j0,refreshQueueState:B0,refreshContextUsage:W0})},[H,$,Z0,J,j0,W0,B0,E,A,k,I,z,X0,_0,N0,D]);return{refreshQueueState:B0,refreshContextUsage:W0,refreshAutoresearchStatus:d,refreshAgentStatus:j0,handleUiVersionDrift:f0,handleConnectionStatusChange:b0}}T0();function C6(_){return typeof _==="string"}function f6(_){return typeof _==="string"&&_.trim().length>0}function P8(_){if(!f6(_))return 0;let $=Date.parse(_);return Number.isFinite($)?$:0}function zj(_){if(!Array.isArray(_))return[];return _.filter(($)=>f6($?.chat_jid)&&f6($?.agent_name))}function HQ(_){if(!Array.isArray(_))return[];return _.filter(($)=>C6($?.chat_jid)&&C6($?.agent_name))}function EQ(_,$,j){if(!Array.isArray($)||$.length===0)return Array.isArray(_)?_:[];let G=new Map;if(Array.isArray(_)){for(let Y of _)if(C6(Y?.chat_jid))G.set(Y.chat_jid,Y)}let Z=$.map((Y)=>{if(!C6(Y?.chat_jid))return Y;let L=G.get(Y.chat_jid);return L?{...Y,...L,is_active:L.is_active??Y.is_active}:Y}),X=C6(j)?j:"";return Z.sort((Y,L)=>{if(Y.chat_jid===X&&L.chat_jid!==X)return-1;if(L.chat_jid===X&&Y.chat_jid!==X)return 1;let K=Boolean(Y.archived_at),q=Boolean(L.archived_at);if(K!==q)return K?1:-1;if(Boolean(Y.is_active)!==Boolean(L.is_active))return Y.is_active?-1:1;let Q=P8(Y.updated_at)||P8(Y.created_at),V=P8(L.updated_at)||P8(L.created_at);if(Q!==V)return V-Q;let B=f6(Y.agent_name)?Y.agent_name.trim():"",N=f6(L.agent_name)?L.agent_name.trim():"",U=B.localeCompare(N,void 0,{sensitivity:"base"});if(U!==0)return U;return String(Y.chat_jid).localeCompare(String(L.chat_jid))}),Z}var oA={hasModel:!1,model:void 0,hasThinkingLevel:!1,thinkingLevel:null,thinkingLevelLabel:null,hasSupportsThinking:!1,supportsThinking:!1,hasProviderUsage:!1,providerUsage:null};function DQ(_){if(!_||typeof _!=="object")return oA;let $=_.model??_.current;return{hasModel:$!==void 0,model:$,hasThinkingLevel:_.thinking_level!==void 0,thinkingLevel:_.thinking_level??null,thinkingLevelLabel:_.thinking_level_label??_.thinking_level??null,hasSupportsThinking:_.supports_thinking!==void 0,supportsThinking:Boolean(_.supports_thinking),hasProviderUsage:_.provider_usage!==void 0,providerUsage:_.provider_usage??null}}function WQ(_){let j=(Array.isArray(_)?_:[]).find((G)=>G?.id==="default");return{name:j?.name,avatarUrl:j?.avatar_url}}function zQ(_,$){if(!_||typeof _!=="object")return null;let j=_.agent_id;if(!j)return null;let G=String(j),Z=_.agent_name,X=_.agent_avatar;if(!Z&&X===void 0)return null;let Y=$||{id:G},L=Y.name||null,K=Y.avatar_url??Y.avatarUrl??Y.avatar??null,q=!1,Q=!1;if(Z&&Z!==Y.name)L=Z,q=!0;if(X!==void 0){let V=typeof X==="string"?X.trim():null,B=typeof K==="string"?K.trim():null,N=V||null;if(N!==(B||null))K=N,Q=!0}if(!q&&!Q)return null;return{agentId:G,nameChanged:q,avatarChanged:Q,resolvedName:L,resolvedAvatar:K}}function OQ(_,$){let j=typeof $?.name==="string"&&$.name.trim()?$.name.trim():"You",G=typeof $?.avatar_url==="string"?$.avatar_url.trim():null,Z=typeof $?.avatar_background==="string"&&$.avatar_background.trim()?$.avatar_background.trim():null;if(_.name===j&&_.avatar_url===G&&_.avatar_background===Z)return _;return{name:j,avatar_url:G,avatar_background:Z}}function JQ(_,$){if(!$||typeof $!=="object")return _;let j=$.user_name??$.userName,G=$.user_avatar??$.userAvatar,Z=$.user_avatar_background??$.userAvatarBackground;if(j===void 0&&G===void 0&&Z===void 0)return _;let X=typeof j==="string"&&j.trim()?j.trim():_.name||"You",Y=G===void 0?_.avatar_url:typeof G==="string"&&G.trim()?G.trim():null,L=Z===void 0?_.avatar_background:typeof Z==="string"&&Z.trim()?Z.trim():null;if(_.name===X&&_.avatar_url===Y&&_.avatar_background===L)return _;return{name:X,avatar_url:Y,avatar_background:L}}async function kQ(_){let{getAgents:$,setAgents:j,setUserProfile:G,applyBranding:Z}=_;try{let X=await $();j(hX(X));let Y=X?.user||{};G((K)=>OQ(K,Y));let L=WQ(X?.agents);Z(L.name,L.avatarUrl)}catch(X){console.warn("Failed to load agents:",X)}}function yQ(_){let{payload:$,agentsRef:j,setAgents:G,applyBranding:Z}=_,X=zQ($,$?.agent_id?j.current?.[String($.agent_id)]||{id:String($.agent_id)}:null);if(!X)return;if(G((Y)=>{let K={...Y[X.agentId]||{id:X.agentId}};if(X.nameChanged)K.name=X.resolvedName;if(X.avatarChanged)K.avatar_url=X.resolvedAvatar;return{...Y,[X.agentId]:K}}),X.agentId==="default")Z(X.resolvedName,X.resolvedAvatar,X.avatarChanged?Date.now():null)}function MQ(_){let{payload:$,setUserProfile:j}=_;j((G)=>JQ(G,$))}function AQ(_,$){if(Object.is(_,$))return!0;try{return JSON.stringify(_)===JSON.stringify($)}catch{return!1}}function wQ(_){let{payload:$,setActiveModel:j,setActiveThinkingLevel:G,setSupportsThinking:Z,setActiveModelUsage:X,setAgentModelsPayload:Y,setHasLoadedAgentModels:L}=_;if($&&typeof $==="object")Y?.((q)=>AQ(q,$)?q:$),L?.(!0);let K=DQ($);if(K.hasModel)j((q)=>Object.is(q,K.model)?q:K.model);if(K.hasThinkingLevel){let q=K.thinkingLevelLabel??K.thinkingLevel;G((Q)=>Object.is(Q,q)?Q:q)}if(K.hasSupportsThinking)Z((q)=>q===K.supportsThinking?q:K.supportsThinking);if(K.hasProviderUsage)X((q)=>AQ(q,K.providerUsage)?q:K.providerUsage)}async function TQ(_){let{currentChatJid:$,getActiveChatAgents:j,getChatBranches:G,activeChatJidRef:Z,setActiveChatAgents:X}=_,Y=$;try{let[L,K]=await Promise.all([j().catch(()=>({chats:[]})),G(null,{includeArchived:!0}).catch(()=>({chats:[]}))]);if(Z.current!==Y)return[];let q=zj(L?.chats),Q=zj(K?.chats),V=EQ(q,Q,Y);return X(V),V}catch{if(Z.current!==Y)return[];return X([]),[]}}async function xQ(_){let{currentRootChatJid:$,getChatBranches:j,setCurrentChatBranches:G}=_;try{let Z=await j($);G(HQ(Z?.chats))}catch{G([])}}function IQ(_){let{response:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:G,refreshContextUsage:Z,refreshAutoresearchStatus:X,refreshQueueState:Y}=_;if(!$||typeof $!=="object")return;if(j(),G(),Z(),X(),pV($))Y()}function CQ(_){let{readStoredNumber:$,sidebarWidthRef:j,shellElement:G,minWidth:Z=160,maxWidth:X=600,fallbackWidth:Y=280}=_,L=$("sidebarWidth",null),K=Number.isFinite(L)?Math.min(Math.max(Number(L),Z),X):Y;if(j.current=K,G)G.style.setProperty("--sidebar-width",`${K}px`);return K}async function fQ(_){let{currentHashtag:$,searchQuery:j,searchScope:G,currentChatJid:Z,currentRootChatJid:X,loadPosts:Y,searchPosts:L,setPosts:K,setHasMore:q,scrollToBottom:Q,isCancelled:V,scheduleRaf:B=(O)=>{if(typeof requestAnimationFrame==="function"){requestAnimationFrame(O);return}setTimeout(O,0)},scheduleTimeout:N=(O,T)=>{setTimeout(O,T)},onTimelineLoadStart:U,onTimelineDataReady:D,onTimelineFirstPaint:E,onTimelineError:H}=_,M=(O)=>{if(V())return;B(()=>{if(V())return;B(()=>{if(V())return;E?.(O)})})},J=()=>{if(V())return;B(()=>{if(V())return;N(()=>{if(V())return;Q()},0)})};if($){U?.({mode:"hashtag",hashtag:$});try{if(await Y($),V())return;D?.({mode:"hashtag",hashtag:$}),M({mode:"hashtag"})}catch(O){if(V())return;throw H?.(O,{mode:"hashtag",hashtag:$}),O}return}if(j){U?.({mode:"search",searchQuery:j,searchScope:G});try{let O=await L(j,50,0,Z,G,X);if(V())return;K(Array.isArray(O?.results)?O.results:[]),q(!1),D?.({mode:"search",resultCount:Array.isArray(O?.results)?O.results.length:0}),M({mode:"search"})}catch(O){if(V())return;H?.(O,{mode:"search",searchQuery:j,searchScope:G}),console.error("Failed to search:",O),K([]),q(!1)}return}U?.({mode:"timeline"});try{if(await Y(),V())return;D?.({mode:"timeline"}),M({mode:"timeline"}),J()}catch(O){if(V())return;H?.(O,{mode:"timeline"}),console.error("Failed to load timeline:",O)}}X6();f_();function sA(_){let{refreshModelAndQueueState:$,refreshModelState:j,refreshActiveChatAgents:G,refreshCurrentChatBranches:Z,refreshQueueState:X,runImmediately:Y=!0,intervalMs:L=60000,scheduleInterval:K=(V,B)=>setInterval(V,B),clearScheduledInterval:q=(V)=>clearInterval(V)}=_;if(Y)$();let Q=K(()=>{j(),G(),Z(),X()},L);return()=>{q(Q)}}function aA(_){let{refreshModelState:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:G,refreshQueueState:Z,refreshContextUsage:X,refreshAutoresearchStatus:Y,prewarmLimit:L=5}=_;$(),j({prewarmRecent:!0,prewarmLimit:L}),G(),Z(),X(),Y()}function tA(_){let $=gV(_.chats,_.currentChatJid,_.prewarmLimit??5);if($.length===0)return;bV({chatJids:$,fetchTimeline:_.fetchTimeline??((j)=>h$(10,null,j))})}function PQ(_){let{getAgents:$,setAgents:j,setUserProfile:G,applyBranding:Z,readStoredNumber:X,sidebarWidthRef:Y,appShellRef:L,currentChatJid:K,currentRootChatJid:q,getAgentModels:Q,getAgentContext:V,getActiveChatAgents:B,getChatBranches:N,activeChatJidRef:U,setActiveChatAgents:D,setCurrentChatBranches:E,setActiveModel:H,setActiveThinkingLevel:M,setSupportsThinking:J,setActiveModelUsage:O,setAgentModelsPayload:T,setHasLoadedAgentModels:I,agentsRef:A,refreshQueueState:k,refreshContextUsage:z,refreshAutoresearchStatus:W,setContextUsage:y,setExtensionWorkingState:x}=_,P=f(async()=>{await kQ({getAgents:$,setAgents:j,setUserProfile:G,applyBranding:Z})},[Z,$,j,G]);u(()=>{P(),CQ({readStoredNumber:X,sidebarWidthRef:Y,shellElement:L.current,maxWidth:F6(Number.POSITIVE_INFINITY)})},[L,P,X,Y]);let S=f((q0)=>{wQ({payload:q0,setActiveModel:H,setActiveThinkingLevel:M,setSupportsThinking:J,setActiveModelUsage:O,setAgentModelsPayload:T,setHasLoadedAgentModels:I})},[H,O,M,T,I,J]),v=f(()=>A2("thread-switch",K),[K]),l=f(()=>{return J$({kind:"model-state",chatJid:K,run:async()=>{let q0=v();if(q0)X1(q0,"runtime-hydration-start",{phase:"model-state"});let X0=K;try{let[_0,Z0]=await Promise.all([(async()=>{let W0=q0||v();if(W0)X1(W0,"model-request-start",{chatJid:X0});let d=await Q(X0);if(W0)X1(W0,"model-request-ready",{chatJid:X0,hasCurrent:Boolean(d?.current),modelCount:Array.isArray(d?.models)?d.models.length:0});return d})(),V(X0).catch(()=>null)]);if(U.current&&U.current!==X0)return null;S(_0);let B0=$4(Z0);if(B0&&B0.percent!=null)y((W0)=>T5(W0,B0)?W0:B0),x5(X0,B0)}catch{if(U.current&&U.current!==X0)return null;S(null)}let N0=q0||v();if(N0)X1(N0,"runtime-hydration-ready",{chatJid:K}),k2(N0,["runtime-hydration-ready","timeline-first-paint"],"settled",{chatJid:K});return null}})},[U,S,K,V,Q,v,y]);u(()=>{QQ({chatJid:K}),H(null),M(null),J(!1),O(null),I(!1),T(null),x({message:null,indicator:null,visible:!0});let q0=jQ(K);if(q0)y(q0);else y(null);l()},[K,l,H,O,M,T,y,x,I,J]);let h=f((q0)=>{yQ({payload:q0,agentsRef:A,setAgents:j,applyBranding:Z})},[A,Z,j]),r=f((q0)=>{MQ({payload:q0,setUserProfile:G})},[G]),b=f((q0)=>{let X0=Boolean(q0?.prewarmRecent),N0=Number.isFinite(q0?.prewarmLimit)?Number(q0?.prewarmLimit):5;return J$({kind:"active-chat-agents",chatJid:K,run:async()=>{let _0=v(),Z0=await TQ({currentChatJid:K,getActiveChatAgents:async()=>{if(_0)X1(_0,"active-chat-list-request-start",{chatJid:K});let B0=await B(K);if(_0)X1(_0,"active-chat-list-request-ready",{rowCount:Array.isArray(B0?.chats)?B0.chats.length:0});return B0},getChatBranches:async(B0,W0)=>{if(_0)X1(_0,"branch-list-request-start",{rootChatJid:B0});let d=await N(B0,W0);if(_0)X1(_0,"branch-list-request-ready",{rootChatJid:B0,rowCount:Array.isArray(d?.chats)?d.chats.length:0});return d},activeChatJidRef:U,setActiveChatAgents:D});if(X0)tA({chats:Z0,currentChatJid:K,prewarmLimit:N0});return null}})},[U,K,B,N,v,D]),e=f(()=>{return J$({kind:"current-chat-branches",chatJid:K,run:async()=>{let q0=v();return await xQ({currentRootChatJid:q,getChatBranches:async(X0,N0)=>{if(q0)X1(q0,"root-branch-request-start",{rootChatJid:X0});let _0=await N(X0,N0);if(q0)X1(q0,"root-branch-request-ready",{rootChatJid:X0,rowCount:Array.isArray(_0?.chats)?_0.chats.length:0});return _0},setCurrentChatBranches:E}),null}})},[K,q,N,v,E]),z0=f(()=>{YQ({refreshModelState:l,refreshActiveChatAgents:b,refreshCurrentChatBranches:e,refreshQueueState:k,refreshContextUsage:z,refreshAutoresearchStatus:W})},[b,W,z,e,l,k]),K0=f(()=>{aA({refreshModelState:l,refreshActiveChatAgents:b,refreshCurrentChatBranches:e,refreshQueueState:k,refreshContextUsage:z,refreshAutoresearchStatus:W,prewarmLimit:5})},[b,W,z,e,l,k]);return u(()=>sA({refreshModelAndQueueState:z0,refreshModelState:l,refreshActiveChatAgents:b,refreshCurrentChatBranches:e,refreshQueueState:k,runImmediately:!1}),[b,e,z0,l,k]),u(()=>{let q0=setInterval(()=>{l()},5000);return()=>clearInterval(q0)},[l]),{updateAgentProfile:h,updateUserProfile:r,applyModelState:S,refreshModelState:l,refreshActiveChatAgents:b,refreshCurrentChatBranches:e,refreshModelAndQueueState:z0,refreshPostPaintThreadState:K0}}T0();function eA(_,$){let j=O1(_);return Boolean(_&&j===$)}function C5(_,$,j){if(!eA(_,$))return _;return{..._,runtimeState:{..._?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:{},...j}}}function RQ(_,$){return{..._,openedAt:$}}function SQ(_){let $=O1(_);return{nextWidget:null,dismissedSessionKey:_?.source==="live"&&$?$:null}}function uQ(_,$,j){let G=lL({...$,...$&&$.status?{}:{status:j.fallbackStatus||"streaming"}});if(!G)return _;let Z=O1(G);if(Z&&j.dismissedSessionKeys?.has(Z))return _;let X=O1(_),Y=Boolean(Z&&X&&Z===X),L={...Y&&_?.artifact?_.artifact:{},...G.artifact||{}};return{...Y&&_?_:{},...G,artifact:L,source:"live",originChatJid:G.originChatJid||j.currentChatJid,openedAt:Y&&_?.openedAt?_.openedAt:j.updatedAt,liveUpdatedAt:j.updatedAt}}function gQ(_,$){if(!_||_?.source!=="live")return _||null;let j=O1($),G=O1(_);if(j&&G&&j!==G)return _;return null}function bQ(_,$,j){return C5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,lastSubmitAt:j.submittedAt,lastHostUpdate:{type:"submit_pending",submittedAt:j.submittedAt,preview:j.submissionText||null}})}function Oj(_,$,j){if(j.errorMessage)return C5(_,$,{lastHostUpdate:{type:"submit_failed",submittedAt:j.submittedAt,preview:j.submissionText,error:j.errorMessage}});return C5(_,$,{lastHostUpdate:{type:j.queued==="followup"?"submit_queued":"submit_sent",submittedAt:j.submittedAt,preview:j.submissionText,queued:j.queued||null}})}function vQ(_,$,j){return C5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,...j.kind==="widget.ready"?{readyAt:j.eventAt,lastHostUpdate:{type:"ready_ack",at:j.eventAt}}:{},...j.kind==="widget.request_refresh"?{lastRefreshRequestAt:j.eventAt,refreshCount:j.nextRefreshCount,lastHostUpdate:{type:j.shouldBuildDashboard?"refresh_building":"refresh_ack",at:j.eventAt,count:j.nextRefreshCount,echo:j.payload||null}}:{}})}function mQ(_,$,j){return C5(_,$,{dashboard:j.dashboard,lastHostUpdate:{type:"refresh_dashboard",at:j.at,count:j.count,echo:j.echo||null}})}function cQ(_,$,j){return C5(_,$,{lastHostUpdate:{type:"refresh_failed",at:j.at,count:j.count,error:j.errorMessage}})}X6();function _k(_){let{setExtensionStatusPanels:$,setPendingExtensionPanelActions:j,setExtensionWorkingState:G}=_;$(new Map),j(new Set),G({message:null,indicator:null,visible:!0})}function lQ(_){let{refreshAgentStatus:$,refreshPostPaintThreadState:j}=_;j(),$()}function hQ(_){let{currentChatJid:$,currentRootChatJid:j,currentHashtag:G,searchQuery:Z,searchScope:X,loadPosts:Y,searchPosts:L,setPosts:K,setHasMore:q,scrollToBottom:Q,setExtensionStatusPanels:V,setPendingExtensionPanelActions:B,setExtensionWorkingState:N,paneStateOwnerChatJidRef:U,chatPaneStateByChatRef:D,snapshotCurrentChatPaneState:E,restoreChatPaneState:H,dismissedQueueRowIdsRef:M,refreshAgentStatus:J,viewStateRef:O,refreshTimeline:T,refreshModelAndQueueState:I,refreshPostPaintThreadState:A,setFloatingWidget:k,dismissedLiveWidgetKeysRef:z}=_;u(()=>{_k({setExtensionStatusPanels:V,setPendingExtensionPanelActions:B,setExtensionWorkingState:N})},[$,V,B,N]),u(()=>{let x=!1,P=jX("thread-switch",$,{currentRootChatJid:j,currentHashtag:G||null,searchQuery:Z||null,searchScope:X});return X1(P,"route-effect-start",{currentChatJid:$,currentRootChatJid:j}),fQ({currentHashtag:G,searchQuery:Z,searchScope:X,currentChatJid:$,currentRootChatJid:j,loadPosts:Y,searchPosts:L,setPosts:K,setHasMore:q,scrollToBottom:Q,isCancelled:()=>x,onTimelineLoadStart:(S)=>{X1(P,"timeline-load-start",S||null)},onTimelineDataReady:(S)=>{X1(P,"timeline-data-ready",S||null)},onTimelineFirstPaint:(S)=>{X1(P,"timeline-first-paint",S||null),k2(P,["runtime-hydration-ready","timeline-first-paint"],"settled",S||null),lQ({refreshAgentStatus:J,refreshPostPaintThreadState:A})},onTimelineError:(S,v)=>{GX(P,S,"timeline-load-failed",v||null),lQ({refreshAgentStatus:J,refreshPostPaintThreadState:A})}}),()=>{x=!0,ZX(P,"route-effect-cancelled",{currentChatJid:$})}},[$,G,Z,X,j,Y,Q,L,q,K,J,A]),u(()=>{let x=U.current||$;D.current.set(x,E())},[D,$,U,E]),u(()=>{let x=U.current||$;if(x===$)return;D.current.set(x,E()),U.current=$,M.current.clear(),H(D.current.get($)||null)},[D,$,M,U,H,E]);let W=f(()=>{LQ({viewStateRef:O,refreshTimeline:T,refreshModelAndQueueState:I})},[I,T,O]),y=f((x,P="streaming")=>{let S=new Date().toISOString();k((v)=>uQ(v,x,{fallbackStatus:P,currentChatJid:$,dismissedSessionKeys:z.current,updatedAt:S}))},[$,z,k]);return{refreshCurrentView:W,applyLiveGeneratedWidgetUpdate:y}}T0();T0();f_();function $k({sse:_,onWake:$},j={}){let G=j.window??(typeof window<"u"?window:null),Z=j.document??(typeof document<"u"?document:null);if(!G||!Z||!_)return()=>{};let X=()=>{if(typeof _.forceReconnect==="function"){_.forceReconnect();return}_.reconnectIfNeeded()},Y=typeof j.useFocusReconnect==="boolean"?j.useFocusReconnect:!H6(),L=Z.visibilityState&&Z.visibilityState!=="visible",K=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return L=!0,!0;return!1},q=()=>{if(K())return;if(L)L=!1,X(),$?.()},Q=()=>{if(K())return;if(L){q();return}if(Y)_.reconnectIfNeeded()},V=()=>{q()},B=()=>{q()};return G.addEventListener("focus",Q),G.addEventListener("pageshow",V),Z.addEventListener("visibilitychange",B),()=>{G.removeEventListener("focus",Q),G.removeEventListener("pageshow",V),Z.removeEventListener("visibilitychange",B)}}function nQ({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:G,chatJid:Z}){let X=g(_);X.current=_;let Y=g($);Y.current=$;let L=g(j);L.current=j;let K=g(G);K.current=G,u(()=>{let q=new I2((V,B)=>X.current(V,B),(V)=>Y.current(V),{chatJid:Z});q.connect();let Q=$k({sse:q,onWake:()=>K.current?.()});return()=>{Q(),q.disconnect()}},[Z])}e5();b2();function R4(_,$){return Boolean(_)&&Boolean($)&&_!==$}function f5(_,$){return Boolean(_)&&!Boolean($)}function pQ(_,$){return _||$||null}function rQ(_){switch(_){case"generated_widget_open":return{kind:"update",fallbackStatus:"loading",shouldAdoptTurn:!0};case"generated_widget_delta":return{kind:"update",fallbackStatus:"streaming",shouldAdoptTurn:!0};case"generated_widget_final":return{kind:"update",fallbackStatus:"final",shouldAdoptTurn:!0};case"generated_widget_error":return{kind:"update",fallbackStatus:"error",shouldAdoptTurn:!1};case"generated_widget_close":return{kind:"close",fallbackStatus:null,shouldAdoptTurn:!1};default:return{kind:null,fallbackStatus:null,shouldAdoptTurn:!1}}}function P5(_,$){let j=$?.row_id??$?.id;if(j==null||typeof j!=="string"&&typeof j!=="number")return null;let G=_4(_,j);return{rowId:j,items:G.items,remainingQueueCount:G.remainingQueueCount}}function Jj(_){if(_==="steer")return{title:"Failed to steer message",detail:"The queued message could not be sent as steering."};return{title:"Failed to remove message",detail:"The queued message could not be removed."}}function jk(_,$){return typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():$}function dQ(_,$,j){return{isStatusPanelWidgetEvent:_==="extension_ui_widget"&&$?.options?.surface==="status-panel",eventChatJid:jk($,j),panelKey:typeof $?.key==="string"?$.key:""}}function Gk(_,$){if(_!=="extension_ui_working_indicator")return;if(!Array.isArray($?.frames))return{mode:"default",frames:[],intervalMs:null};let j=$.frames.filter((X)=>typeof X==="string"),G=$.interval_ms??$.intervalMs,Z=typeof G==="number"&&Number.isFinite(G)&&G>0?G:null;if(j.length===0)return{mode:"hidden",frames:[],intervalMs:Z};return{mode:"custom",frames:j,intervalMs:Z}}function iQ(_,$,j){if($==="extension_ui_working_visible"){let Z=j?.visible!==!1;if(Z===_.visible)return;return{..._,visible:Z}}if($==="extension_ui_working")return{message:typeof j?.message==="string"&&j.message.trim()?j.message.trim():null,indicator:_.indicator,visible:_.visible};let G=Gk($,j);if(G===void 0)return;return{message:_.message,indicator:G,visible:_.visible}}function oQ(_,$){if(_==="extension_ui_notify"&&typeof $?.message==="string")return{title:$.message,detail:null,kind:typeof $?.type==="string"&&$.type.trim()?$.type:"info"};if(_==="extension_ui_error"){let j=$?.error;return{title:"Extension UI error",detail:typeof j==="string"?j:j&&typeof j==="object"&&typeof j.error==="string"?j.error:j?String(j):"Unknown extension error",kind:"error",durationMs:5000}}return null}var Zk=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_working_indicator","extension_ui_working_visible","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function sQ(_){return Zk.has(String(_||"").trim())}function Xk(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function R8(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let G={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:G})),j.dispatchEvent(new CustomEvent(Xk(_),{detail:G})),!0}function aQ(_,$,j){let G=$?.turn_id,Z=$?.chat_jid,X=typeof Z==="string"&&Z.trim()?Z.trim():null,Y=_==="connected"||_==="workspace_update";return{turnId:G,eventChatJid:X,isGlobalUiEvent:Y,isCurrentChatEvent:X?X===j:Y}}function tQ(_){return _==="agent_draft_delta"||_==="agent_thought_delta"||_==="agent_draft"||_==="agent_thought"}function eQ(_,$,j){let{currentChatJid:G,updateAgentProfile:Z,updateUserProfile:X,currentTurnIdRef:Y,activeChatJidRef:L,pendingRequestRef:K,draftBufferRef:q,thoughtBufferRef:Q,previewResyncPendingRef:V,previewResyncGenerationRef:B,steerQueuedTurnIdRef:N,thoughtExpandedRef:U,draftExpandedRef:D,draftThrottleRef:E,thoughtThrottleRef:H,viewStateRef:M,followupQueueItemsRef:J,dismissedQueueRowIdsRef:O,scrollToBottomRef:T,hasMoreRef:I,loadMoreRef:A,lastAgentResponseRef:k,wasAgentActiveRef:z,setActiveTurn:W,applyLiveGeneratedWidgetUpdate:y,setFloatingWidget:x,clearLastActivityFlag:P,handleUiVersionDrift:S,setAgentStatus:v,setAgentDraft:l,setAgentPlan:h,setAgentThought:r,setPendingRequest:b,clearAgentRunState:e,getAgentStatus:z0,noteAgentActivity:K0,showLastActivity:q0,refreshTimeline:X0,refreshModelAndQueueState:N0,refreshActiveChatAgents:_0,refreshCurrentChatBranches:Z0,notifyForFinalResponse:B0,setContextUsage:W0,refreshContextUsage:d,refreshQueueState:j0,setFollowupQueueItems:A0,clearQueuedSteerStateIfStale:f0,setSteerQueuedTurnId:b0,applyModelState:c0,getAgentContext:X_,setExtensionStatusPanels:l0,setPendingExtensionPanelActions:__,setExtensionWorkingState:P0,refreshActiveEditorFromWorkspace:p0,showIntentToast:R0,removeStalledPost:d0,setPosts:r0,preserveTimelineScrollTop:U_,openEditor:o0}=j,{turnId:h0,isCurrentChatEvent:y0}=aQ(_,$,G);if(y0)Z($),X($);if(_==="ui_theme"){Q5($);return}if(_==="ui_meters"){d7($);return}if(_==="ui_open_tab"){let E0=typeof $?.path==="string"?$.path.trim():"",S0=typeof $?.label==="string"?$.label.trim():void 0;if(E0==="piclaw://settings"){let I0=typeof $?.section==="string"?$.section.trim():"";window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:I0?{section:I0}:void 0}));return}if(E0&&typeof o0==="function")o0(E0,S0?{label:S0}:void 0);return}let V_=rQ(_);if(V_.kind==="update"){if(!y0)return;if(V_.shouldAdoptTurn&&f5(h0,Y.current))W(h0);y($,V_.fallbackStatus||"streaming");return}if(V_.kind==="close"){if(!y0)return;x((E0)=>gQ(E0,$));return}if(_?.startsWith("agent_")&&!tQ(_))P();if(_==="connected"){if(S($?.app_asset_version))return;if($?.ui_theme){let I0=$.ui_theme.theme||"default",a0=$.ui_theme.tint||null;Q5({theme:I0,tint:a0})}if($?.ui_meters)d7($.ui_meters);let E0=B.current+1;if(B.current=E0,V.current=!0,q.current="",Q.current="",v(null),l({text:"",totalLines:0}),h(""),r({text:"",totalLines:0}),P0({message:null,indicator:null,visible:!0}),b(null),K.current=null,e(),I6(G)){if(B.current===E0)V.current=!1;return}let S0=G;if(z0(S0).then((I0)=>{if(L.current!==S0)return;if(!I0||I0.status!=="active"||!I0.data)return;let a0=I0.data,A_=M8(a0);if(A_)W(A_);v(a0),K0({clearSilence:!0,atMs:p$(a0)??Date.now()}),q0(a0);let Q_=w5(I0.thought);if(Q_)Q.current=Q_.text,r(Q_);let D_=w5(I0.draft);if(D_)q.current=D_.text,l(D_)}).catch((I0)=>{console.warn("Failed to fetch agent status:",I0)}).finally(()=>{if(B.current===E0)V.current=!1}),s1(M.current))X0();N0();return}if(_==="agent_status"){if(!y0){if($?.type==="done"||$?.type==="error")_0(),Z0();return}if($.type==="done"||$.type==="error"){if(R4(h0,Y.current))return;if($.type==="done"){if(B0(h0||Y.current),s1(M.current))X0();let E0=$4($.context_usage);if(E0&&E0.percent!=null)W0((S0)=>T5(S0,E0)?S0:E0),x5(G,E0)}if(d(),z.current=!1,e(),O.current.clear(),_0(),N0(),l({text:"",totalLines:0}),h(""),r({text:"",totalLines:0}),P0({message:null,indicator:null,visible:!0}),b(null),$.type==="error")v({type:"error",title:$.title||"Agent error"}),setTimeout(()=>v(null),8000);else v(null)}else{if(h0)W(h0);if(K0({running:!0,clearSilence:!0,atMs:p$($)??Date.now()}),$.type==="thinking")q.current="",Q.current="",l({text:"",totalLines:0}),h(""),r({text:"",totalLines:0});v($)}return}if(_==="agent_steer_queued"){if(!y0)return;if(R4(h0,Y.current))return;let E0=pQ(h0,Y.current);if(!E0)return;N.current=E0,b0(E0);return}if(_==="agent_followup_queued"){if(!y0)return;A0((E0)=>nV(E0,$)),j0();return}if(_==="agent_followup_consumed"){if(!y0)return;let E0=P5(J.current,$);if(E0)f0(E0.remainingQueueCount),A0((S0)=>_4(S0,E0.rowId).items);if(j0(),s1(M.current))X0();return}if(_==="agent_followup_removed"){if(!y0)return;let E0=P5(J.current,$);if(E0)O.current.add(E0.rowId),f0(E0.remainingQueueCount),A0((S0)=>_4(S0,E0.rowId).items);j0();return}if(_==="agent_draft_delta"){if(!y0)return;if(V.current)return;if(R4(h0,Y.current))return;if(f5(h0,Y.current))W(h0);K0({running:!0,clearSilence:!0}),q.current=OV(q.current,$);let E0=Date.now();if(!E.current||E0-E.current>=100){E.current=E0;let S0=q.current;if(D.current)l((I0)=>Bj(S0,I0));else l(w8(S0,null))}return}if(_==="agent_draft"){if(!y0)return;if(V.current)return;if(R4(h0,Y.current))return;if(f5(h0,Y.current))W(h0);K0({running:!0,clearSilence:!0});let E0=$.text||"",S0=$.mode||($.kind==="plan"?"replace":"append");if($.kind==="plan")h((I0)=>zV(I0,E0,S0));else if(!D.current)q.current=E0,l(w8(E0,$.total_lines));return}if(_==="agent_thought_delta"){if(!y0)return;if(V.current)return;if(R4(h0,Y.current))return;if(f5(h0,Y.current))W(h0);K0({running:!0,clearSilence:!0}),Q.current=JV(Q.current,$);let E0=Date.now();if(U.current&&(!H.current||E0-H.current>=100)){H.current=E0;let S0=Q.current;r((I0)=>Bj(S0,I0))}return}if(_==="agent_thought"){if(!y0)return;if(V.current)return;if(R4(h0,Y.current))return;if(f5(h0,Y.current))W(h0);K0({running:!0,clearSilence:!0});let E0=$.text||"";if(!U.current)Q.current=E0,r(w8(E0,$.total_lines));return}if(_==="model_changed"){if(!y0)return;c0($);let E0=G;X_(E0).then((S0)=>{if(L.current!==E0)return;let I0=$4(S0);if(I0&&I0.percent!=null)W0((a0)=>T5(a0,I0)?a0:I0),x5(E0,I0)}).catch(()=>{if(L.current!==E0)return});return}let s0=dQ(_,$,G);if(s0.isStatusPanelWidgetEvent){if(s0.eventChatJid!==G)return;if(!s0.panelKey)return;if(l0((E0)=>sV(E0,$)),aV($))__((E0)=>I8(E0,s0.panelKey));R8(_,$);return}if(_==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:$}));p0($?.updates);return}if(sQ(_)){if(_==="extension_ui_title"){_0(),Z0(),R8(_,$);return}if(!y0)return;P0((S0)=>{return iQ(S0,_,$)??S0}),R8(_,$);let E0=oQ(_,$);if(E0)R0(E0.title,E0.detail,E0.kind,E0.durationMs);return}let O_=s1(M.current);if(_==="agent_response"){if(!y0)return;P0({message:null,indicator:null,visible:!0}),d0(),k.current={post:$,turnId:Y.current}}if(AV(_,y0,O_))r0((E0)=>kV(E0,$)),T.current?.();if(_==="interaction_updated"){if(!Fj(y0,O_))return;r0((E0)=>yV(E0,$))}if(_==="interaction_deleted"){if(!Fj(y0,O_))return;let E0=$?.ids||[];if(E0.length){if(U_(()=>{r0((S0)=>MV(S0,E0))}),I.current)A.current?.({preserveScroll:!0,preserveMode:"top"})}}}function Yk(_){return _?15000:60000}function _N(_){let{currentChatJid:$,posts:j,scrollToMessage:G,handleConnectionStatusChange:Z,loadPosts:X,refreshCurrentView:Y,updateAgentProfile:L,updateUserProfile:K,currentTurnIdRef:q,activeChatJidRef:Q,pendingRequestRef:V,draftBufferRef:B,thoughtBufferRef:N,previewResyncPendingRef:U,previewResyncGenerationRef:D,steerQueuedTurnIdRef:E,thoughtExpandedRef:H,draftExpandedRef:M,draftThrottleRef:J,thoughtThrottleRef:O,viewStateRef:T,followupQueueItemsRef:I,dismissedQueueRowIdsRef:A,scrollToBottomRef:k,hasMoreRef:z,loadMoreRef:W,lastAgentResponseRef:y,wasAgentActiveRef:x,setActiveTurn:P,applyLiveGeneratedWidgetUpdate:S,setFloatingWidget:v,clearLastActivityFlag:l,handleUiVersionDrift:h,setAgentStatus:r,setAgentDraft:b,setAgentPlan:e,setAgentThought:z0,setPendingRequest:K0,clearAgentRunState:q0,getAgentStatus:X0,noteAgentActivity:N0,showLastActivity:_0,refreshTimeline:Z0,refreshModelAndQueueState:B0,refreshActiveChatAgents:W0,refreshCurrentChatBranches:d,notifyForFinalResponse:j0,setContextUsage:A0,refreshContextUsage:f0,refreshQueueState:b0,setFollowupQueueItems:c0,clearQueuedSteerStateIfStale:X_,setSteerQueuedTurnId:l0,applyModelState:__,getAgentContext:P0,setExtensionStatusPanels:p0,setPendingExtensionPanelActions:R0,setExtensionWorkingState:d0,refreshActiveEditorFromWorkspace:r0,showIntentToast:U_,removeStalledPost:o0,setPosts:h0,preserveTimelineScrollTop:y0,openEditor:V_,finalizeStalledResponse:s0,connectionStatus:O_,agentStatus:E0,refreshAgentStatus:S0,refreshAutoresearchStatus:I0}=_,a0=f((Q_,D_)=>{eQ(Q_,D_,{currentChatJid:$,updateAgentProfile:L,updateUserProfile:K,currentTurnIdRef:q,activeChatJidRef:Q,pendingRequestRef:V,draftBufferRef:B,thoughtBufferRef:N,previewResyncPendingRef:U,previewResyncGenerationRef:D,steerQueuedTurnIdRef:E,thoughtExpandedRef:H,draftExpandedRef:M,draftThrottleRef:J,thoughtThrottleRef:O,viewStateRef:T,followupQueueItemsRef:I,dismissedQueueRowIdsRef:A,scrollToBottomRef:k,hasMoreRef:z,loadMoreRef:W,lastAgentResponseRef:y,wasAgentActiveRef:x,setActiveTurn:P,applyLiveGeneratedWidgetUpdate:S,setFloatingWidget:v,clearLastActivityFlag:l,handleUiVersionDrift:h,setAgentStatus:r,setAgentDraft:b,setAgentPlan:e,setAgentThought:z0,setPendingRequest:K0,clearAgentRunState:q0,getAgentStatus:X0,noteAgentActivity:N0,showLastActivity:_0,refreshTimeline:Z0,refreshModelAndQueueState:B0,refreshActiveChatAgents:W0,refreshCurrentChatBranches:d,notifyForFinalResponse:j0,setContextUsage:A0,refreshContextUsage:f0,refreshQueueState:b0,setFollowupQueueItems:c0,clearQueuedSteerStateIfStale:X_,setSteerQueuedTurnId:l0,applyModelState:__,getAgentContext:P0,setExtensionStatusPanels:p0,setPendingExtensionPanelActions:R0,setExtensionWorkingState:d0,refreshActiveEditorFromWorkspace:r0,showIntentToast:U_,removeStalledPost:o0,setPosts:h0,preserveTimelineScrollTop:y0,openEditor:V_})},[Q,S,__,q0,l,X_,$,q,A,B,M,J,I,P0,X0,h,z,y,W,N0,j0,V,y0,D,U,W0,r0,f0,d,B0,b0,Z0,o0,k,P,b,e,r,z0,A0,p0,d0,v,c0,R0,K0,h0,l0,U_,_0,E,N,H,O,L,K,T,x,V_]);u(()=>{if(typeof window>"u")return;let Q_=window.__PICLAW_TEST_API||{};return Q_.emit=a0,Q_.reset=()=>{o0(),q0(),r(null),b({text:"",totalLines:0}),e(""),z0({text:"",totalLines:0}),d0({message:null,indicator:null,visible:!0}),K0(null)},Q_.finalize=()=>s0(),window.__PICLAW_TEST_API=Q_,()=>{if(window.__PICLAW_TEST_API===Q_)window.__PICLAW_TEST_API=void 0}},[q0,s0,a0,o0,b,e,r,z0,d0,K0]),nQ({handleSseEvent:a0,handleConnectionStatusChange:Z,loadPosts:X,onWake:Y,chatJid:$}),u(()=>{if(!j||j.length===0)return;let Q_=location.hash;if(!Q_||!Q_.startsWith("#msg-"))return;let D_=Q_.slice(5);G(D_),history.replaceState(null,"",location.pathname+location.search)},[j,G]);let A_=E0!==null;u(()=>{if(O_!=="connected")return;let Q_=Yk(A_),D_=setInterval(()=>{FQ({viewStateRef:T,isAgentActive:A_,refreshTimeline:Z0,refreshQueueState:b0,refreshAgentStatus:S0,refreshContextUsage:f0,refreshAutoresearchStatus:I0})},Q_);return()=>clearInterval(D_)},[O_,A_,S0,I0,f0,b0,Z0,T]),u(()=>{return O8(()=>{S0(),f0(),b0(),I0()})},[S0,I0,f0,b0])}function Lk(_){return{currentChatJid:_.currentChatJid,activeChatJidRef:_.activeChatJidRef,queueRefreshGenRef:_.queueRefreshGenRef,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,getAgentQueueState:_.getAgentQueueState,setFollowupQueueItems:_.setFollowupQueueItems,clearQueuedSteerStateIfStale:_.clearQueuedSteerStateIfStale,getAgentContext:_.getAgentContext,setContextUsage:_.setContextUsage,getAutoresearchStatus:_.getAutoresearchStatus,setExtensionStatusPanels:_.setExtensionStatusPanels,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,getAgentStatus:_.getAgentStatus,wasAgentActiveRef:_.wasAgentActiveRef,viewStateRef:_.viewStateRef,refreshTimeline:_.refreshTimeline,clearAgentRunState:_.clearAgentRunState,agentStatusRef:_.agentStatusRef,pendingRequestRef:_.pendingRequestRef,thoughtBufferRef:_.thoughtBufferRef,draftBufferRef:_.draftBufferRef,setAgentStatus:_.setAgentStatus,setAgentDraft:_.setAgentDraft,setAgentPlan:_.setAgentPlan,setAgentThought:_.setAgentThought,setPendingRequest:_.setPendingRequest,setActiveTurn:_.setActiveTurn,noteAgentActivity:_.noteAgentActivity,clearLastActivityFlag:_.clearLastActivityFlag,isAgentRunningRef:_.isAgentRunningRef,currentTurnIdRef:_.currentTurnIdRef,silentRecoveryRef:_.silentRecoveryRef,silenceRefreshMs:_.silenceRefreshMs,lastAgentEventRef:_.lastAgentEventRef,lastSilenceNoticeRef:_.lastSilenceNoticeRef,silenceWarningMs:_.silenceWarningMs,silenceFinalizeMs:_.silenceFinalizeMs,isCompactionStatus:_.isCompactionStatus,serverVersionContext:_.serverVersionContext,setConnectionStatus:_.setConnectionStatus,setStateAccessFailed:_.setStateAccessFailed,setPendingRequestForConnection:_.setPendingRequest,hasConnectedOnceRef:_.hasConnectedOnceRef}}function qk(_){return{getAgents:_.getAgents,setAgents:_.setAgents,setUserProfile:_.setUserProfile,applyBranding:_.applyBranding,readStoredNumber:_.readStoredNumber,sidebarWidthRef:_.sidebarWidthRef,appShellRef:_.appShellRef,currentChatJid:_.currentChatJid,currentRootChatJid:_.currentRootChatJid,getAgentModels:_.getAgentModels,getAgentContext:_.getAgentContext,getActiveChatAgents:_.getActiveChatAgents,getChatBranches:_.getChatBranches,activeChatJidRef:_.activeChatJidRef,setActiveChatAgents:_.setActiveChatAgents,setCurrentChatBranches:_.setCurrentChatBranches,setActiveModel:_.setActiveModel,setActiveThinkingLevel:_.setActiveThinkingLevel,setSupportsThinking:_.setSupportsThinking,setActiveModelUsage:_.setActiveModelUsage,setAgentModelsPayload:_.setAgentModelsPayload,setHasLoadedAgentModels:_.setHasLoadedAgentModels,agentsRef:_.agentsRef,refreshQueueState:_.refreshQueueState,refreshContextUsage:_.refreshContextUsage,refreshAutoresearchStatus:_.refreshAutoresearchStatus,setContextUsage:_.setContextUsage,setExtensionWorkingState:_.setExtensionWorkingState}}function Kk(_){return{currentChatJid:_.currentChatJid,currentRootChatJid:_.currentRootChatJid,currentHashtag:_.currentHashtag,searchQuery:_.searchQuery,searchScope:_.searchScope,loadPosts:_.loadPosts,searchPosts:_.searchPosts,setPosts:_.setPosts,setHasMore:_.setHasMore,scrollToBottom:_.scrollToBottom,setExtensionStatusPanels:_.setExtensionStatusPanels,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,setExtensionWorkingState:_.setExtensionWorkingState,paneStateOwnerChatJidRef:_.paneStateOwnerChatJidRef,chatPaneStateByChatRef:_.chatPaneStateByChatRef,snapshotCurrentChatPaneState:_.snapshotCurrentChatPaneState,restoreChatPaneState:_.restoreChatPaneState,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,refreshQueueState:_.refreshQueueState,refreshAgentStatus:_.refreshAgentStatus,refreshContextUsage:_.refreshContextUsage,viewStateRef:_.viewStateRef,refreshTimeline:_.refreshTimeline,refreshModelAndQueueState:_.refreshModelAndQueueState,refreshPostPaintThreadState:_.refreshPostPaintThreadState,setFloatingWidget:_.setFloatingWidget,dismissedLiveWidgetKeysRef:_.dismissedLiveWidgetKeysRef}}function Vk(_){return{currentChatJid:_.currentChatJid,posts:_.posts,scrollToMessage:_.scrollToMessage,handleConnectionStatusChange:_.handleConnectionStatusChange,loadPosts:_.loadPosts,refreshCurrentView:_.refreshCurrentView,updateAgentProfile:_.updateAgentProfile,updateUserProfile:_.updateUserProfile,currentTurnIdRef:_.currentTurnIdRef,activeChatJidRef:_.activeChatJidRef,pendingRequestRef:_.pendingRequestRef,draftBufferRef:_.draftBufferRef,thoughtBufferRef:_.thoughtBufferRef,previewResyncPendingRef:_.previewResyncPendingRef,previewResyncGenerationRef:_.previewResyncGenerationRef,steerQueuedTurnIdRef:_.steerQueuedTurnIdRef,thoughtExpandedRef:_.thoughtExpandedRef,draftExpandedRef:_.draftExpandedRef,draftThrottleRef:_.draftThrottleRef,thoughtThrottleRef:_.thoughtThrottleRef,viewStateRef:_.viewStateRef,followupQueueItemsRef:_.followupQueueItemsRef,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,scrollToBottomRef:_.scrollToBottomRef,hasMoreRef:_.hasMoreRef,loadMoreRef:_.loadMoreRef,lastAgentResponseRef:_.lastAgentResponseRef,wasAgentActiveRef:_.wasAgentActiveRef,setActiveTurn:_.setActiveTurn,applyLiveGeneratedWidgetUpdate:_.applyLiveGeneratedWidgetUpdate,setFloatingWidget:_.setFloatingWidget,clearLastActivityFlag:_.clearLastActivityFlag,handleUiVersionDrift:_.handleUiVersionDrift,setAgentStatus:_.setAgentStatus,setAgentDraft:_.setAgentDraft,setAgentPlan:_.setAgentPlan,setAgentThought:_.setAgentThought,setPendingRequest:_.setPendingRequest,clearAgentRunState:_.clearAgentRunState,getAgentStatus:_.getAgentStatus,noteAgentActivity:_.noteAgentActivity,showLastActivity:_.showLastActivity,refreshTimeline:_.refreshTimeline,refreshModelAndQueueState:_.refreshModelAndQueueState,refreshActiveChatAgents:_.refreshActiveChatAgents,refreshCurrentChatBranches:_.refreshCurrentChatBranches,notifyForFinalResponse:_.notifyForFinalResponse,setContextUsage:_.setContextUsage,refreshContextUsage:_.refreshContextUsage,refreshQueueState:_.refreshQueueState,setFollowupQueueItems:_.setFollowupQueueItems,clearQueuedSteerStateIfStale:_.clearQueuedSteerStateIfStale,setSteerQueuedTurnId:_.setSteerQueuedTurnId,applyModelState:_.applyModelState,getAgentContext:_.getAgentContext,setExtensionStatusPanels:_.setExtensionStatusPanels,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,setExtensionWorkingState:_.setExtensionWorkingState,refreshActiveEditorFromWorkspace:_.refreshActiveEditorFromWorkspace,showIntentToast:_.showIntentToast,removeStalledPost:_.removeStalledPost,setPosts:_.setPosts,preserveTimelineScrollTop:_.preserveTimelineScrollTop,finalizeStalledResponse:_.finalizeStalledResponse,connectionStatus:_.connectionStatus,agentStatus:_.agentStatus,refreshAgentStatus:_.refreshAgentStatus,refreshAutoresearchStatus:_.refreshAutoresearchStatus}}function $N(_){let $=UQ(Lk(_)),j=PQ(qk({..._,refreshQueueState:$.refreshQueueState,refreshContextUsage:$.refreshContextUsage,refreshAutoresearchStatus:$.refreshAutoresearchStatus})),G=hQ(Kk({..._,refreshQueueState:$.refreshQueueState,refreshAgentStatus:$.refreshAgentStatus,refreshContextUsage:$.refreshContextUsage,refreshModelAndQueueState:j.refreshModelAndQueueState,refreshPostPaintThreadState:j.refreshPostPaintThreadState}));return _N(Vk({..._,handleConnectionStatusChange:$.handleConnectionStatusChange,handleUiVersionDrift:$.handleUiVersionDrift,refreshCurrentView:G.refreshCurrentView,updateAgentProfile:j.updateAgentProfile,updateUserProfile:j.updateUserProfile,applyLiveGeneratedWidgetUpdate:G.applyLiveGeneratedWidgetUpdate,refreshModelAndQueueState:j.refreshModelAndQueueState,refreshActiveChatAgents:j.refreshActiveChatAgents,refreshCurrentChatBranches:j.refreshCurrentChatBranches,refreshContextUsage:$.refreshContextUsage,refreshQueueState:$.refreshQueueState,applyModelState:j.applyModelState,refreshAgentStatus:$.refreshAgentStatus,refreshAutoresearchStatus:$.refreshAutoresearchStatus})),{agentStatusLifecycle:$,chatRefreshLifecycle:j,viewRefreshLifecycle:G}}T0();var jN="piclaw:pane-host-transfer:",Qk=300000;function GN(_){try{return _?.localStorage??null}catch{return null}}function ZN(_){return typeof _==="string"?_.trim():""}function XN(_){if(!_||typeof _!=="object"||Array.isArray(_))return null;return _}function Nk(_=Date.now()){return`pane-transfer-${_.toString(36)}-${Math.random().toString(36).slice(2,10)}`}function Bk(_,$){try{return _?.removeItem($),!0}catch(j){return!1}}function Fk(_,$=globalThis,j=Date.now()){let G=GN($),Z=ZN(_?.path),X=XN(_?.payload);if(!G||!Z||!X)return null;let Y=Nk(j);try{return G.setItem(`${jN}${Y}`,JSON.stringify({path:Z,payload:X,capturedAt:j})),Y}catch{return null}}function Aj(_,$=globalThis,j=Date.now()){let G=typeof _==="string"?_.trim():"",Z=GN($);if(!G||!Z)return null;let X=`${jN}${G}`,Y="";try{Y=Z.getItem(X)||""}catch{return null}if(!Y)return null;Bk(Z,X);try{let L=JSON.parse(Y),K=typeof L?.capturedAt==="number"&&Number.isFinite(L.capturedAt)?L.capturedAt:j;if(K+Qk<j)return null;let q=ZN(L?.path),Q=XN(L?.payload);if(!q||!Q)return null;return{path:q,payload:Q,capturedAt:K}}catch{return null}}function S8(_,$=globalThis,j=Date.now()){let G=Fk(_,$,j);return G?{pane_transfer:G}:null}function YN(_=globalThis,$=Date.now()){let j=_5("pane_transfer",_);return Aj(j,_,$)}function S4(_){return typeof _==="string"?_.trim():""}function Uk(_){return Boolean(_)&&typeof _.get==="function"&&typeof _.set==="function"&&typeof _.delete==="function"&&typeof _.entries==="function"}function kj(_){if(!_)return null;let $=_.__piclawPaneLiveTransferRegistry__;if(Uk($))return $;let j=new Map;return _.__piclawPaneLiveTransferRegistry__=j,j}function Hk(_){try{return _?.(),!0}catch($){return!1}}function R5(_,$=typeof window<"u"?window:null){let j=kj($),G=S4(_?.panePath),Z=S4(_?.paneInstanceId),X=S4(_?.paneWindowId);if(!j||!G||!Z||!X||typeof _?.instance?.moveHost!=="function")return!1;return j.set(X,{..._,panePath:G,paneInstanceId:Z,paneWindowId:X,registeredAt:typeof _?.registeredAt==="number"?_.registeredAt:Date.now()}),!0}function LN(_,$=typeof window<"u"?window:null){let j=kj($),G=S4(_);if(!j||!G)return;for(let[Z,X]of j.entries())if(X?.panePath===G)j.delete(Z)}async function qN(_,$,j,G){let Z=kj(_),X=S4($?.panePath),Y=S4($?.paneInstanceId),L=S4($?.paneWindowId);if(!Z||!X||!Y||!L)return null;let K=Z.get(L)||null;if(!K)return null;if(K.panePath!==X||K.paneInstanceId!==Y)return null;if(typeof K.instance?.moveHost!=="function")return null;if(!await K.instance.moveHost(j,G))return null;return Z.delete(L),Hk(K.releaseSourceHost),K.instance}m2();function P6(_){if(!_||typeof _!=="object")return!1;let $=_;if(typeof $.closest==="function"&&$.closest('input, textarea, select, [contenteditable="true"], .compose-box, .compose-model-popup, .compose-session-popup'))return!0;return Boolean($.isContentEditable)}function KN(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let G=_?.openTab,Z=_?.editSource,X=_?.popOutPane,Y=(Q)=>{let V=Q?.detail?.path,B=typeof Q?.detail?.label==="string"&&Q.detail.label.trim()?Q.detail.label.trim():void 0;if(V)G?.(V,B)},L=(Q)=>{let V=Q?.detail?.path,B=typeof Q?.detail?.label==="string"&&Q.detail.label.trim()?Q.detail.label.trim():void 0;if(V)Z?.(V,B)},K=(Q)=>{let V=Q?.detail?.path,B=typeof Q?.detail?.label==="string"&&Q.detail.label.trim()?Q.detail.label.trim():void 0;if(V)X?.(V,B)},q=["pane:open-tab","office-viewer:open-tab","csv-viewer:open-tab","pdf-viewer:open-tab","image-viewer:open-tab","video-viewer:open-tab","html-viewer:open-tab","mindmap:open-tab","vnc:open-tab"];return q.forEach((Q)=>j.addEventListener(Q,Y)),j.addEventListener("html-viewer:edit-source",L),j.addEventListener("pane:popout",K),()=>{q.forEach((Q)=>j.removeEventListener(Q,Y)),j.removeEventListener("html-viewer:edit-source",L),j.removeEventListener("pane:popout",K)}}function VN(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let G=(Z)=>{if(P6(Z?.target))return;if(!O$(Z,"toggleDock"))return;Z.preventDefault?.(),_?.()};return j.addEventListener("keydown",G),()=>j.removeEventListener("keydown",G)}function QN(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let G=_?.toggleZenMode,Z=_?.exitZenMode,X=typeof _?.isZenModeActive==="function"?_.isZenModeActive:()=>Boolean(_?.zenMode),Y=(L)=>{if(O$(L,"toggleZenMode")){L.preventDefault?.(),G?.();return}if(P6(L?.target))return;if(L?.key==="Escape"&&X())L.preventDefault?.(),Z?.()};return j.addEventListener("keydown",Y),()=>j.removeEventListener("keydown",Y)}function NN(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let G=(Z)=>{if(P6(Z?.target))return;if(O$(Z,"previousChat")){Z.preventDefault?.(),_?.previousChat?.();return}if(O$(Z,"nextChat"))Z.preventDefault?.(),_?.nextChat?.()};return j.addEventListener("keydown",G),()=>j.removeEventListener("keydown",G)}function BN(_={}){let $=_.document??(typeof document<"u"?document:null);if(!$)return()=>{};let j=(G)=>{if(P6(G?.target))return;if(!O$(G,"openSettings"))return;G.preventDefault(),o1()};return $.addEventListener("keydown",j),()=>$.removeEventListener("keydown",j)}function FN(_={}){let $=_.document??(typeof document<"u"?document:null);if(!$)return()=>{};let j=(G)=>{if(P6(G?.target))return;if(!O$(G,"openHelp"))return;G.preventDefault(),o1({section:"keyboard"})};return $.addEventListener("keydown",j),()=>$.removeEventListener("keydown",j)}function UN(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,renameBranchInFlight:G,renameBranchLockUntil:Z,getFormLock:X,setRenameBranchNameDraft:Y,setIsRenameBranchFormOpen:L,now:K=Date.now()}=_;if(!$||!j?.chat_jid)return!1;let q=X?.()||null;if(!q)return!1;if(G||K<Number(Z||0)||q.inFlight||K<Number(q.cooldownUntil||0))return!1;return Y?.(j.agent_name||""),L?.(!0),!0}function HN(_){let{setIsRenameBranchFormOpen:$,setRenameBranchNameDraft:j}=_;$?.(!1),j?.("")}async function EN(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,nextName:G,openRenameForm:Z,renameBranchInFlightRef:X,renameBranchLockUntilRef:Y,getFormLock:L,setIsRenamingBranch:K,renameChatBranch:q,refreshActiveChatAgents:Q,refreshCurrentChatBranches:V,navigate:B,baseHref:N,chatOnlyMode:U,showIntentToast:D,closeRenameForm:E,now:H=()=>Date.now()}=_;if(!$||!j?.chat_jid)return!1;if(typeof G!=="string")return Z?.(),!1;let M=H(),J=L?.()||null;if(!J)return!1;if(X.current||M<Number(Y.current||0)||J.inFlight||M<Number(J.cooldownUntil||0))return!1;X.current=!0,J.inFlight=!0,K?.(!0);try{let O=j.agent_name||"",T=a2(G,O);if(!T.canSubmit)return D?.("Could not rename session",T.message||"Enter a valid session handle.","warning",4000),!1;let I=T.normalized||O,A=await q(j.chat_jid,{agentName:I});await Promise.allSettled([Q?.(),V?.()]);let k=A?.branch?.agent_name||I||O;return D?.("Session renamed",`@${k}`,"info",3500),E?.(),!0}catch(O){let T=O instanceof Error?O.message:String(O||"Could not rename session."),I=/already in use/i.test(T||"")?`${T} Switch to or restore that existing session from the session manager.`:T;return D?.("Could not rename session",I||"Could not rename session.","warning",5000),!1}finally{X.current=!1,K?.(!1);let O=H()+fK;Y.current=O;let T=L?.()||null;if(T)T.inFlight=!1,T.cooldownUntil=O}}async function DN(_){let{hasWindow:$=typeof window<"u",targetChatJid:j=null,currentChatJid:G,currentBranchRecord:Z,currentChatBranches:X=[],activeChatAgents:Y=[],pruneChatBranch:L,refreshActiveChatAgents:K,refreshCurrentChatBranches:q,showIntentToast:Q,baseHref:V,chatOnlyMode:B,navigate:N,confirm:U=(k)=>window.confirm(k)}=_;if(!$)return!1;let D=typeof j==="string"&&j.trim()?j.trim():"",E=typeof G==="string"&&G.trim()?G.trim():"",H=D||Z?.chat_jid||E;if(!H)return Q?.("Could not prune branch","No active session is selected yet.","warning",4000),!1;let M=(Z?.chat_jid===H?Z:null)||X.find((k)=>k?.chat_jid===H)||Y.find((k)=>k?.chat_jid===H)||null,J=M?.chat_jid===(M?.root_chat_jid||M?.chat_jid),O=Boolean(J&&H==="web:default"),T=Boolean(J&&X.some((k)=>{let z=typeof k?.chat_jid==="string"?k.chat_jid.trim():"",W=typeof k?.root_chat_jid==="string"?k.root_chat_jid.trim():z;return z&&z!==H&&W===H&&!k?.archived_at}));if(O)return Q?.("Cannot archive session","The default chat session cannot be archived.","warning",4000),!1;if(T)return Q?.("Cannot archive session","Archive or delete the child branch sessions first.","warning",4500),!1;let I=`@${M?.agent_name||H}${M?.chat_jid?` — ${M.chat_jid}`:""}`;if(!U(J?`Archive ${I}?

This removes the session from the session picker. Chat history is preserved.`:`Prune ${I}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return!1;try{await L(H),await Promise.allSettled([K?.(),q?.()]);let k=J?"web:default":M?.root_chat_jid||"web:default";Q?.(J?"Session archived":"Branch pruned",`${I} has been archived.`,"info",3000);let z=T1(V,k,{chatOnly:B});return N?.(z),!0}catch(k){let z=k instanceof Error?k.message:String(k||"Could not prune branch.");return Q?.("Could not prune branch",z||"Could not prune branch.","warning",5000),!1}}async function WN(_){let{targetChatJid:$,purgeChatBranch:j,currentChatBranches:G=[],refreshActiveChatAgents:Z,refreshCurrentChatBranches:X,showIntentToast:Y,confirm:L=(D)=>window.confirm(D)}=_,K=typeof $==="string"?$.trim():"";if(!K||typeof j!=="function")return!1;let q=G.find((D)=>D?.chat_jid===K)||null;if(!Boolean(q?.archived_at))return Y?.("Could not delete branch","Only archived sessions can be permanently deleted.","warning",4500),!1;let V=Boolean(q?.chat_jid&&q.chat_jid===(q.root_chat_jid||q.chat_jid)),B=`@${q?.agent_name||K}`;if(!L(`Permanently delete ${B}?

This removes all chat history, token usage, cursor state, scheduled tasks, and session files for this ${V?"session":"branch"}. It cannot be undone.`))return!1;try{return await j(K),await Promise.allSettled([Z?.(),X?.()]),Y?.(V?"Archived session deleted":"Archived branch deleted",`${B} was permanently deleted.`,"info",4000),!0}catch(D){let E=D instanceof Error?D.message:String(D||`Could not permanently delete archived ${V?"session":"branch"}.`);return Y?.("Could not delete branch",E||`Could not permanently delete archived ${V?"session":"branch"}.`,"warning",5000),!1}}async function zN(_){let{targetChatJid:$,restoreChatBranch:j,currentChatBranches:G=[],refreshActiveChatAgents:Z,refreshCurrentChatBranches:X,showIntentToast:Y,baseHref:L,chatOnlyMode:K,navigate:q}=_,Q=typeof $==="string"?$.trim():"";if(!Q||typeof j!=="function")return!1;try{let V=G.find((H)=>H?.chat_jid===Q)||null,B=await j(Q);await Promise.allSettled([Z?.(),X?.()]);let N=B?.branch,U=typeof N?.chat_jid==="string"&&N.chat_jid.trim()?N.chat_jid.trim():Q,D=EL(V?.agent_name,N?.agent_name,U);Y?.("Branch restored",D,"info",4200);let E=T1(L,U,{chatOnly:K});return q?.(E),!0}catch(V){let B=V instanceof Error?V.message:String(V||"Could not restore branch.");return Y?.("Could not restore branch",B||"Could not restore branch.","warning",5000),!1}}async function ON(_){let{branchLoaderSourceChatJid:$,forkChatBranch:j,setBranchLoaderState:G,navigate:Z,baseHref:X,isCancelled:Y=()=>!1}=_;try{G?.({status:"running",message:"Preparing a new chat branch…"});let L=await j($);if(Y())return!1;let K=L?.branch,q=typeof K?.chat_jid==="string"&&K.chat_jid.trim()?K.chat_jid.trim():null;if(!q)throw Error("Branch fork did not return a chat id.");let Q=T1(X,q,{chatOnly:!0});return Z?.(Q,{replace:!0}),!0}catch(L){if(Y())return!1;return G?.({status:"error",message:F4(L)}),!1}}function AN(_){let{hasWindow:$=typeof window<"u",nextChatJid:j,currentChatJid:G,chatOnlyMode:Z,currentHref:X,navigate:Y}=_;if(!$)return!1;let L=typeof j==="string"?j.trim():"";if(!L||L===G)return!1;let K=T1(X,L,{chatOnly:Z});return Y?.(K),!0}function Ek(_){return typeof _==="string"?_.trim():""}function Dk(_){return new Promise(($)=>setTimeout($,_))}async function JN(_,$){if(typeof _?.beforeDetachFromHost!=="function")return;await _.beforeDetachFromHost({path:$,target:"popout"})}async function kN(_){let{panePath:$,tabStripActiveId:j,editorInstanceRef:G,dockInstanceRef:Z,terminalTabPath:X,activateTab:Y,getActiveTabId:L,resolveTab:K,buildEditorPopoutTransfer:q}=_,Q=$===X&&Boolean(K?.($));if($===X&&!Q){let D=Z.current;if(await JN(D,$),typeof D?.preparePopoutTransfer!=="function")return null;return await D.preparePopoutTransfer()}let V=()=>Ek(L?.()??j),B=V(),N=G.current;if(B!==$)Y?.($);let U=B===$?G.current:null;if(typeof U?.preparePopoutTransfer!=="function")for(let D=0;D<12;D+=1){if(D>0)await Dk(16);else await Promise.resolve();let E=V(),H=G.current,M=E===$,J=H!==N;if(!M||typeof H?.preparePopoutTransfer!=="function")continue;if(B===$||J||D>0){U=H;break}}if(await JN(U,$),typeof U?.preparePopoutTransfer==="function"){let D=await U.preparePopoutTransfer();if(D)return D}return q?.($)??null}function yN(_){let{panePath:$,terminalTabPath:j,dockVisible:G,resolveTab:Z,closeTab:X,setDockVisible:Y}=_,L=Z($);if(L&&!L.dirty){X($);return}if($===j&&G)Y(!1)}function MN(_){let{hasWindow:$=typeof window<"u",editorOpen:j,shellElement:G,editorWidthRef:Z,dockHeightRef:X,sidebarWidthRef:Y,readStoredNumber:L}=_;if(!j||!$||!G)return;if(!Z.current){let K=L("editorWidth",null),q=Y.current||280,Q=Number.isFinite(K)?Number(K):q;Z.current=U6(Q,typeof window<"u"?window.innerWidth:0,Y.current||0)}if(G.style.setProperty("--editor-width",`${Z.current}px`),!X.current){let K=L("dockHeight",null);X.current=Number.isFinite(K)?Number(K):200}G.style.setProperty("--dock-height",`${X.current}px`)}async function wN(_){if(typeof _!=="function")return null;try{return await _()}catch{return null}}async function TN(_){let{currentChatJid:$,chatOnlyMode:j,forkChatBranch:G,refreshActiveChatAgents:Z,refreshCurrentChatBranches:X,showIntentToast:Y,navigate:L,baseHref:K}=_;if(typeof L==="function")try{let q=x3(K,$,{chatOnly:j});return L(q),!0}catch(q){return Y?.("Could not create branch",F4(q),"warning",5000),!1}try{let Q=(await G($))?.branch,V=typeof Q?.chat_jid==="string"&&Q.chat_jid.trim()?Q.chat_jid.trim():null;if(!V)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([Z?.(),X?.()]);let B=Q?.agent_name?`@${Q.agent_name}`:V;Y?.("New branch created",`Switched to ${B}.`,"info",2500);let N=T1(K,V,{chatOnly:j});return L?.(N),!0}catch(q){return Y?.("Could not create branch",F4(q),"warning",5000),!1}}async function xN(_){let{rootName:$,chatOnlyMode:j,createRootChatSession:G,refreshActiveChatAgents:Z,refreshCurrentChatBranches:X,showIntentToast:Y,navigate:L,baseHref:K}=_,q=String($||"").trim();if(!q)return!1;try{let V=(await G(q))?.branch,B=typeof V?.chat_jid==="string"&&V.chat_jid.trim()?V.chat_jid.trim():null;if(!B)throw Error("Root session creation did not return a chat id.");await Promise.allSettled([Z?.(),X?.()]);let N=V?.agent_name?`@${V.agent_name}`:B;Y?.("Root session created",`Switched to ${N}.`,"info",2500);let U=T1(K,B,{chatOnly:j});return L?.(U),!0}catch(Q){return Y?.("Could not create root session",F4(Q),"warning",5000),!1}}async function IN(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,path:G,label:Z,showIntentToast:X,resolveSourceTransfer:Y,closeSourcePaneIfTransferred:L,onPaneWindowOpened:K,currentChatJid:q,baseHref:Q}=_;if(!$||j)return!1;let V=typeof G==="string"&&G.trim()?G.trim():"";if(!V)return!1;let B=hG(V);if(!B)return X?.("Could not open pane window","Opening pane windows is unavailable in standalone webapp mode.","warning",5000),!1;let N=y3(B);if(!N)return X?.("Could not open pane window","The browser blocked opening a new tab or window.","warning",5000),!1;M3(N,{title:typeof Z==="string"&&Z.trim()?`Opening ${Z}…`:"Opening pane…",message:"Preparing a standalone pane window. This should only take a moment."});try{let U=await Y?.(V),D=Boolean(U&&Object.keys(U).length>0),E=lG(Q,V,{label:typeof Z==="string"&&Z.trim()?Z.trim():void 0,chatJid:q,params:U});if(w3(N,E),K?.(V,N,U||null),D&&!K)L?.(V);return!0}catch(U){T3(N);let D=U instanceof Error?U.message:"Could not transfer pane state to the new window.";return X?.("Could not open pane window",D,"warning",5000),!1}}async function CN(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,currentChatJid:G,currentRootChatJid:Z,forkChatBranch:X,getActiveChatAgents:Y,getChatBranches:L,setActiveChatAgents:K,setCurrentChatBranches:q,showIntentToast:Q,baseHref:V}=_;if(!$||j)return!1;let B=cG(G);if(!B)return Q?.("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000),!1;if(B.mode==="tab"){let U=x3(V,G,{chatOnly:!0});if(!window.open(U,B.target))return Q?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;return!0}let N=y3(B);if(!N)return Q?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;M3(N,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let D=(await X(G))?.branch,E=typeof D?.chat_jid==="string"&&D.chat_jid.trim()?D.chat_jid.trim():null;if(!E)throw Error("Branch fork did not return a chat id.");let H=await wN(()=>Y?.());if(H)K?.(Array.isArray(H?.chats)?H.chats:[]);let M=await wN(()=>L?.(Z));if(M)q?.(Array.isArray(M?.chats)?M.chats:[]);let J=T1(V,E,{chatOnly:!0});return w3(N,J),!0}catch(U){return T3(N),Q?.("Could not open branch window",F4(U),"error",5000),!1}}function Wk(_){_(($)=>!$)}function zk(_){let{nextChatJid:$,currentChatJid:j,chatOnlyMode:G,navigate:Z,hasWindow:X=typeof window<"u",currentHref:Y=X?window.location.href:"http://localhost/"}=_;return AN({hasWindow:X,nextChatJid:$,currentChatJid:j,chatOnlyMode:G,currentHref:Y,navigate:Z})}function Ok(_){let{currentBranchRecord:$,renameBranchInFlight:j,renameBranchLockUntil:G,getFormLock:Z,setRenameBranchNameDraft:X,setIsRenameBranchFormOpen:Y,hasWindow:L=typeof window<"u"}=_;return UN({hasWindow:L,currentBranchRecord:$,renameBranchInFlight:j,renameBranchLockUntil:G,getFormLock:Z,setRenameBranchNameDraft:X,setIsRenameBranchFormOpen:Y})}function Jk(_){HN(_)}async function Ak(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await EN({hasWindow:$,baseHref:String(j||"").trim()||($?window.location.href:"http://localhost/"),...G})}async function kk(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await DN({hasWindow:$,baseHref:j,...G})}async function yk(_){await WN(_)}async function Mk(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await zN({baseHref:j,...G})}function wk(_){let{branchLoaderMode:$,branchLoaderSourceChatJid:j,forkChatBranch:G,setBranchLoaderState:Z,navigate:X,hasWindow:Y=typeof window<"u",baseHref:L=Y?window.location.href:"http://localhost/",runBranchLoaderImpl:K=ON}=_;if(!$||!Y)return;let q=!1;return K({branchLoaderSourceChatJid:j,forkChatBranch:G,setBranchLoaderState:Z,navigate:X,baseHref:L,isCancelled:()=>q}),()=>{q=!0}}async function Tk(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await TN({baseHref:j,...G})}async function xk(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await xN({baseHref:j,...G})}async function Ik(_){let{isWebAppMode:$,path:j,label:G,showIntentToast:Z,currentChatJid:X,activateTab:Y,tabStripActiveId:L,editorInstanceRef:K,dockInstanceRef:q,terminalTabPath:Q,tabPaneOverrides:V,buildPaneDetachTransfer:B,registerDetachedPaneWindow:N,dockVisible:U,resolveTab:D,closeTab:E,setDockVisible:H,hasWindow:M=typeof window<"u",baseHref:J=M?window.location.href:"http://localhost/"}=_,O=B?.(j)||null;return await IN({hasWindow:M,isWebAppMode:$,path:j,label:G,showIntentToast:Z,currentChatJid:X,baseHref:J,resolveSourceTransfer:async(T)=>{let I=await kN({panePath:T,activateTab:Y,getActiveTabId:()=>$_.getActiveId(),tabStripActiveId:L,editorInstanceRef:K,dockInstanceRef:q,terminalTabPath:Q,resolveTab:D,buildEditorPopoutTransfer:(W)=>{if(!W||W===Q)return null;let y=K.current,x=typeof y?.getContent==="function"?y.getContent():void 0,P=typeof y?.isDirty==="function"?y.isDirty():!1,S=V instanceof Map?V.get(W)||null:null,v=$_.getViewState(W)||null;return Z2({path:W,content:P?x:void 0,paneOverrideId:S,viewState:v})}}),A=T===Q&&!D(T)?q.current:K.current,k=typeof A?.exportHostTransferState==="function"?A.exportHostTransferState():null,z=k?S8({path:T,payload:k}):null;if(O?.paneInstanceId&&O?.paneWindowId&&A&&T!==Q&&k?.kind!=="terminal")R5({panePath:T,paneInstanceId:O.paneInstanceId,paneWindowId:O.paneWindowId,instance:A,releaseSourceHost:()=>{if(T===Q){if(q.current===A)q.current=null;if(K.current===A)K.current=null;return}if(K.current===A)K.current=null}});return{...I||{},...z||{},...O?.params||{}}},onPaneWindowOpened:N?(T,I,A)=>{N(T,G,I,A)}:void 0,closeSourcePaneIfTransferred:N?void 0:(T)=>{yN({panePath:T,terminalTabPath:Q,dockVisible:U,resolveTab:D,closeTab:E,setDockVisible:H})}})}function Ck(_){let{openEditor:$,popOutPane:j,watchPaneOpenEventsImpl:G=KN}=_;return G({openTab:(Z,X)=>$(Z,X?{label:X}:void 0),editSource:(Z,X)=>$(Z,{...X?{label:X}:{},paneOverrideId:"editor"}),popOutPane:(Z,X)=>{j(Z,X)}})}async function fk(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await CN({hasWindow:$,baseHref:j,...G})}function Pk(_){let{hasWindow:$=typeof window<"u",...j}=_;MN({hasWindow:$,...j})}function fN(_){let{setWorkspaceOpen:$,currentChatJid:j,chatOnlyMode:G,navigate:Z,currentBranchRecord:X,renameBranchInFlightRef:Y,renameBranchLockUntilRef:L,getFormLock:K,setRenameBranchNameDraft:q,setIsRenameBranchFormOpen:Q,setIsRenamingBranch:V,renameChatBranch:B,refreshActiveChatAgents:N,refreshCurrentChatBranches:U,showIntentToast:D,currentChatBranches:E,activeChatAgents:H,pruneChatBranch:M,purgeChatBranch:J,restoreChatBranch:O,branchLoaderMode:T,branchLoaderSourceChatJid:I,forkChatBranch:A,createRootChatSession:k,setBranchLoaderState:z,currentRootChatJid:W,isWebAppMode:y,getActiveChatAgents:x,getChatBranches:P,setActiveChatAgents:S,setCurrentChatBranches:v,openEditor:l,activateTab:h,tabStripActiveId:r,editorInstanceRef:b,dockInstanceRef:e,terminalTabPath:z0,tabPaneOverrides:K0,buildPaneDetachTransfer:q0,registerDetachedPaneWindow:X0,dockVisible:N0,resolveTab:_0,closeTab:Z0,setDockVisible:B0,editorOpen:W0,shellElement:d,editorWidthRef:j0,dockHeightRef:A0,sidebarWidthRef:f0,readStoredNumber:b0}=_,c0=f(()=>{Wk($)},[$]),X_=f((y0)=>{zk({nextChatJid:y0,currentChatJid:j,chatOnlyMode:G,navigate:Z})},[G,j,Z]),l0=f(()=>{Ok({currentBranchRecord:X,renameBranchInFlight:Y.current,renameBranchLockUntil:L.current,getFormLock:K,setRenameBranchNameDraft:q,setIsRenameBranchFormOpen:Q})},[X,K,Y,L,Q,q]),__=f(()=>{Jk({setIsRenameBranchFormOpen:Q,setRenameBranchNameDraft:q})},[Q,q]),P0=f(async(y0)=>{await Ak({currentBranchRecord:X,nextName:y0,openRenameForm:l0,renameBranchInFlightRef:Y,renameBranchLockUntilRef:L,getFormLock:K,setIsRenamingBranch:V,renameChatBranch:B,refreshActiveChatAgents:N,refreshCurrentChatBranches:U,navigate:Z,chatOnlyMode:G,showIntentToast:D,closeRenameForm:__})},[__,X,G,K,Z,l0,N,U,Y,L,B,V,D]),p0=f(async(y0=null)=>{await kk({targetChatJid:y0,currentChatJid:j,currentBranchRecord:X,currentChatBranches:E,activeChatAgents:H,pruneChatBranch:M,refreshActiveChatAgents:N,refreshCurrentChatBranches:U,showIntentToast:D,chatOnlyMode:G,navigate:Z})},[H,G,X,E,j,Z,M,N,U,D]),R0=f(async(y0)=>{await yk({targetChatJid:y0,purgeChatBranch:J,currentChatBranches:E,refreshActiveChatAgents:N,refreshCurrentChatBranches:U,showIntentToast:D})},[E,J,N,U,D]),d0=f(async(y0)=>{await Mk({targetChatJid:y0,restoreChatBranch:O,currentChatBranches:E,refreshActiveChatAgents:N,refreshCurrentChatBranches:U,showIntentToast:D,chatOnlyMode:G,navigate:Z})},[G,E,Z,N,U,O,D]);u(()=>wk({branchLoaderMode:T,branchLoaderSourceChatJid:I,forkChatBranch:A,setBranchLoaderState:z,navigate:Z}),[T,I,A,Z,z]);let r0=f(async()=>{await Tk({currentChatJid:j,chatOnlyMode:G,forkChatBranch:A,refreshActiveChatAgents:N,refreshCurrentChatBranches:U,showIntentToast:D,navigate:Z})},[G,j,A,Z,N,U,D]),U_=f(async(y0)=>{await xk({rootName:y0,chatOnlyMode:G,createRootChatSession:k,refreshActiveChatAgents:N,refreshCurrentChatBranches:U,showIntentToast:D,navigate:Z})},[G,k,Z,N,U,D]),o0=f(async(y0,V_)=>{return await Ik({isWebAppMode:y,path:y0,label:V_,showIntentToast:D,currentChatJid:j,activateTab:h,tabStripActiveId:r,editorInstanceRef:b,dockInstanceRef:e,terminalTabPath:z0,tabPaneOverrides:K0,buildPaneDetachTransfer:q0,registerDetachedPaneWindow:X0,dockVisible:N0,resolveTab:_0,closeTab:Z0,setDockVisible:B0})},[h,q0,Z0,j,e,N0,b,y,X0,_0,B0,D,K0,r,z0]);u(()=>Ck({openEditor:l,popOutPane:(y0,V_)=>{o0(y0,V_)}}),[o0,l]);let h0=f(async()=>{await fk({isWebAppMode:y,currentChatJid:j,currentRootChatJid:W,forkChatBranch:A,getActiveChatAgents:x,getChatBranches:P,setActiveChatAgents:S,setCurrentChatBranches:v,showIntentToast:D})},[j,W,A,x,P,y,S,v,D]);return u(()=>{Pk({editorOpen:W0,shellElement:d,editorWidthRef:j0,dockHeightRef:A0,sidebarWidthRef:f0,readStoredNumber:b0})},[A0,W0,j0,b0,d,f0]),{toggleWorkspace:c0,handleBranchPickerChange:X_,openRenameCurrentBranchForm:l0,closeRenameCurrentBranchForm:__,handleRenameCurrentBranch:P0,handlePruneCurrentBranch:p0,handlePurgeArchivedBranch:R0,handleRestoreBranch:d0,handleCreateSessionFromCompose:r0,handleCreateRootSessionFromCompose:U_,handlePopOutPane:o0,handlePopOutChat:h0}}T0();function j4(_){return _.status==="fulfilled"?_.value:null}function u8(_){return Math.max(0,Math.min(100,_))}function PN(_){let $=Array.isArray(_.timelinePayload?.posts)?_.timelinePayload.posts:Array.isArray(_.rawPosts)?_.rawPosts:[],j=$.length?$[$.length-1]:null,G=$.filter((E)=>E?.data?.is_bot_message).length,Z=$.filter((E)=>!E?.data?.is_bot_message).length,X=Number(_.queuePayload?.count??_.followupQueueItems?.length??0)||0,Y=Array.isArray(_.activeChatsPayload?.chats)?_.activeChatsPayload.chats.length:Array.isArray(_.activeChatAgents)?_.activeChatAgents.length:0,L=Array.isArray(_.branchesPayload?.chats)?_.branchesPayload.chats.length:Array.isArray(_.currentChatBranches)?_.currentChatBranches.length:0,K=Number(_.contextPayload?.percent??_.contextUsage?.percent??0)||0,q=Number(_.contextPayload?.tokens??_.contextUsage?.tokens??0)||0,Q=Number(_.contextPayload?.contextWindow??_.contextUsage?.contextWindow??0)||0,V=_.modelsPayload?.current??_.activeModel??null,B=_.modelsPayload?.thinking_level??_.activeThinkingLevel??null,N=_.modelsPayload?.supports_thinking??_.supportsThinking,U=_.statusPayload?.status||(_.isAgentTurnActive?"active":"idle"),D=_.statusPayload?.data?.type||_.statusPayload?.type||null;return{generatedAt:_.generatedAt,request:_.request,chat:{currentChatJid:_.currentChatJid,rootChatJid:_.currentRootChatJid,activeChats:Y,branches:L},agent:{status:U,phase:D,running:Boolean(_.isAgentTurnActive)},model:{current:V,thinkingLevel:B,supportsThinking:Boolean(N)},context:{tokens:q,contextWindow:Q,percent:K},queue:{count:X},timeline:{loadedPosts:$.length,botPosts:G,userPosts:Z,latestPostId:j?.id??null,latestTimestamp:j?.timestamp??null},bars:[{key:"context",label:"Context",value:u8(Math.round(K))},{key:"queue",label:"Queue",value:u8(X*18)},{key:"activeChats",label:"Active chats",value:u8(Y*12)},{key:"posts",label:"Timeline load",value:u8($.length*5)}]}}function RN(_){if(_==="followup")return{title:"Widget submission queued",detail:"The widget message was queued because the agent is busy.",kind:"info",durationMs:3500};return{title:"Widget submission sent",detail:"The widget message was sent to the chat.",kind:"info",durationMs:3500}}function SN(_){return{title:"Widget submission failed",detail:_||"Could not send the widget message.",kind:"warning",durationMs:5000}}function uN(_,$){return{shouldBuildDashboard:Boolean(_?.buildDashboard||_?.dashboardKind==="internal-state"),nextRefreshCount:Number($||0)+1}}function gN(){return{title:"Dashboard built",detail:"Live dashboard state pushed into the widget.",kind:"info",durationMs:3000}}function bN(_){return{title:"Dashboard build failed",detail:_||"Could not build dashboard.",kind:"warning",durationMs:5000}}function vN(){return{title:"Widget refresh requested",detail:"The widget received a host acknowledgement update.",kind:"info",durationMs:3000}}async function mN(_){let{requestPayload:$=null,currentChatJid:j,currentRootChatJid:G,getAgentStatus:Z,getAgentContext:X,getAgentQueueState:Y,getAgentModels:L,getActiveChatAgents:K,getChatBranches:q,getTimeline:Q,rawPosts:V,activeChatAgents:B,currentChatBranches:N,contextUsage:U,followupQueueItems:D,activeModel:E,activeThinkingLevel:H,supportsThinking:M,isAgentTurnActive:J}=_,[O,T,I,A,k,z,W]=await Promise.allSettled([Z(j),X(j),Y(j),L(j),K(),q(G),Q(20,null,j)]);return PN({generatedAt:new Date().toISOString(),request:$,currentChatJid:j,currentRootChatJid:G,statusPayload:j4(O),contextPayload:j4(T),queuePayload:j4(I),modelsPayload:j4(A),activeChatsPayload:j4(k),branchesPayload:j4(z),timelinePayload:j4(W),rawPosts:V,activeChatAgents:B,currentChatBranches:N,contextUsage:U,followupQueueItems:D,activeModel:E,activeThinkingLevel:H,supportsThinking:M,isAgentTurnActive:J})}function cN(_){let{queuedItem:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,currentChatJid:Z,refreshQueueState:X,setFollowupQueueItems:Y,showIntentToast:L,steerAgentQueueItem:K}=_,q=P5(j.current,$);if(!q)return;let{rowId:Q}=q;G.current.add(Q),Y((V)=>_4(V,Q).items),K(Q,Vj(Z)).then(()=>{X()}).catch((V)=>{console.warn("[queue] Failed to steer queued item:",V);let B=Jj("steer");L(B.title,B.detail,"warning"),G.current.delete(Q),X()})}function lN(_){let{queuedItem:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,currentChatJid:Z,refreshQueueState:X,setFollowupQueueItems:Y,showIntentToast:L,clearQueuedSteerStateIfStale:K,removeAgentQueueItem:q}=_,Q=P5(j.current,$);if(!Q)return;let{rowId:V}=Q;G.current.add(V),K?.(Q.remainingQueueCount),Y((B)=>_4(B,V).items),q(V,Vj(Z)).then(()=>{X()}).catch((B)=>{console.warn("[queue] Failed to remove queued item:",B);let N=Jj("remove");L(N.title,N.detail,"warning"),G.current.delete(V),X()})}function hN(_){let{widget:$,dismissedLiveWidgetKeysRef:j,setFloatingWidget:G}=_;if(!$||typeof $!=="object")return;let Z=O1($);if(Z)j.current.delete(Z);G(RQ($,new Date().toISOString()))}function nN(_){let{dismissedLiveWidgetKeysRef:$,setFloatingWidget:j}=_;j((G)=>{let Z=SQ(G);if(Z.dismissedSessionKey)$.current.add(Z.dismissedSessionKey);return Z.nextWidget})}function pN(_){let{event:$,widget:j,currentChatJid:G,isComposeBoxAgentActive:Z,setFloatingWidget:X,handleCloseFloatingWidget:Y,handleMessageResponse:L,showIntentToast:K,sendAgentMessage:q,buildFloatingWidgetDashboardSnapshot:Q}=_,V=typeof $?.kind==="string"?$.kind:"",B=O1(j);if(!V||!B)return;if(V==="widget.close"){Y();return}if(V==="widget.submit"){let N=rL($?.payload),U=dL($?.payload),D=new Date().toISOString();if(X((E)=>bQ(E,B,{kind:V,payload:$?.payload||null,submittedAt:D,submissionText:N})),!N){if(K("Widget submission received","The widget submitted data without a message payload yet.","info",3500),U)Y();return}(async()=>{try{let E=await q("default",N,null,[],Z?"queue":null,G);L(E),X((M)=>Oj(M,B,{submittedAt:D,submissionText:N,queued:E?.queued||null}));let H=RN(E?.queued);if(K(H.title,H.detail,H.kind,H.durationMs),U)Y()}catch(E){X((M)=>Oj(M,B,{submittedAt:D,submissionText:N,errorMessage:E?.message||"Could not send the widget message."}));let H=SN(E?.message);K(H.title,H.detail,H.kind,H.durationMs)}})();return}if(V==="widget.ready"||V==="widget.request_refresh"){let N=new Date().toISOString(),U=uN($?.payload||null,j?.runtimeState?.refreshCount);if(X((D)=>vQ(D,B,{kind:V,payload:$?.payload||null,eventAt:N,nextRefreshCount:U.nextRefreshCount,shouldBuildDashboard:U.shouldBuildDashboard})),V==="widget.request_refresh")if(U.shouldBuildDashboard)(async()=>{try{let D=await Q($?.payload||null);X((H)=>mQ(H,B,{dashboard:D,at:new Date().toISOString(),count:U.nextRefreshCount,echo:$?.payload||null}));let E=gN();K(E.title,E.detail,E.kind,E.durationMs)}catch(D){X((H)=>cQ(H,B,{errorMessage:D?.message||"Could not build dashboard.",at:new Date().toISOString(),count:U.nextRefreshCount}));let E=bN(D?.message);K(E.title,E.detail,E.kind,E.durationMs)}})();else{let D=vN();K(D.title,D.detail,D.kind,D.durationMs)}}}function Rk(_,$=cN){$(_)}function Sk(_,$=lN){$(_)}function uk(_,$,j=IQ){j({response:_,refreshActiveChatAgents:$.refreshActiveChatAgents,refreshCurrentChatBranches:$.refreshCurrentChatBranches,refreshContextUsage:$.refreshContextUsage,refreshAutoresearchStatus:$.refreshAutoresearchStatus,refreshQueueState:$.refreshQueueState})}function rN(_){let{currentChatJid:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,refreshQueueState:Z,setFollowupQueueItems:X,showIntentToast:Y,clearQueuedSteerStateIfStale:L,steerAgentQueueItem:K,removeAgentQueueItem:q,refreshActiveChatAgents:Q,refreshCurrentChatBranches:V,refreshContextUsage:B,refreshAutoresearchStatus:N}=_,U=f((M)=>{Rk({queuedItem:M,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,currentChatJid:$,refreshQueueState:Z,setFollowupQueueItems:X,showIntentToast:Y,steerAgentQueueItem:K,removeAgentQueueItem:q})},[$,G,j,Z,q,X,Y,K]),D=f((M)=>{Sk({queuedItem:M,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,currentChatJid:$,refreshQueueState:Z,setFollowupQueueItems:X,showIntentToast:Y,clearQueuedSteerStateIfStale:L,steerAgentQueueItem:K,removeAgentQueueItem:q})},[L,$,G,j,Z,q,X,Y,K]),E=f(async(M,J)=>{X((O)=>{if(!Array.isArray(O)||M<0||J<0||M>=O.length||J>=O.length||M===J)return O;let T=[...O],[I]=T.splice(M,1);return T.splice(J,0,I),T});try{let{reorderAgentQueueItem:O}=await Promise.resolve().then(() => (f_(),Q6));await O(M,J,$)}catch(O){console.warn("Failed to persist queue reorder:",O),Z()}},[$,Z,X]),H=f((M)=>{uk(M,{refreshActiveChatAgents:Q,refreshCurrentChatBranches:V,refreshContextUsage:B,refreshAutoresearchStatus:N,refreshQueueState:Z})},[Q,N,B,V,Z]);return{handleInjectQueuedFollowup:U,handleRemoveQueuedFollowup:D,handleMoveQueuedFollowup:E,handleMessageResponse:H}}T0();function dN(_){let{btwAbortRef:$,setBtwSession:j}=_;if($.current)$.current.abort(),$.current=null;j(null)}async function iN(_){let{question:$,currentChatJid:j,streamSidePrompt:G,resolveBtwChatJid:Z,showIntentToast:X,btwAbortRef:Y,setBtwSession:L}=_,K=String($||"").trim();if(!K)return X("BTW needs a question","Usage: /btw <question>","warning"),!0;if(Y.current)Y.current.abort();let q=new AbortController;Y.current=q,L({question:K,answer:"",thinking:"",error:null,model:null,status:"running"});try{let Q=await G(K,{signal:q.signal,chatJid:Z(j),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(V)=>{if(V==="side_prompt_start")L((B)=>B?{...B,status:"running"}:B)},onThinkingDelta:(V)=>{L((B)=>B?{...B,thinking:`${B.thinking||""}${V||""}`}:B)},onTextDelta:(V)=>{L((B)=>B?{...B,answer:`${B.answer||""}${V||""}`}:B)}});if(Y.current!==q)return!0;L((V)=>V?{...V,answer:Q?.result||V.answer||"",thinking:Q?.thinking||V.thinking||"",model:Q?.model||null,status:"success",error:null}:V)}catch(Q){if(q.signal.aborted)return!0;L((V)=>V?{...V,status:"error",error:Q?.payload?.error||Q?.message||"BTW request failed."}:V)}finally{if(Y.current===q)Y.current=null}return!0}async function oN(_){let{content:$,parseBtwCommand:j,closeBtwPanel:G,runBtwPrompt:Z,showIntentToast:X}=_,Y=j($);if(!Y)return!1;if(Y.type==="help")return X("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(Y.type==="clear")return G(),X("BTW cleared","Closed the side conversation panel.","info"),!0;if(Y.type==="ask")return await Z(Y.question),!0;return!1}async function sN(_){let{btwSession:$,buildBtwInjectionText:j,isComposeBoxAgentActive:G,currentChatJid:Z,sendAgentMessage:X,handleMessageResponse:Y,showIntentToast:L}=_,K=j($);if(!K)return!1;try{let q=await X("default",K,null,[],G?"queue":null,Z);return Y(q),L(q?.queued==="followup"?"BTW queued":"BTW injected",q?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500),!0}catch(q){return L("BTW inject failed",q?.message||"Could not inject BTW answer into chat.","warning"),!1}}async function gk(_){let $=typeof _==="string"?_:"";if(!$)return!1;let j=null;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch(G){j=G}try{let G=document.createElement("textarea");G.value=$,G.setAttribute("readonly",""),G.style.position="fixed",G.style.opacity="0",G.style.pointerEvents="none",document.body.appendChild(G),G.select(),G.setSelectionRange(0,G.value.length);let Z=document.execCommand("copy");return document.body.removeChild(G),Z}catch(G){return console.debug("[sidepanel] Clipboard copy failed after falling back from navigator.clipboard.",G,{clipboardApiAvailable:Boolean(navigator.clipboard?.writeText),clipboardApiError:j}),!1}}function bk(_){let{dismissedLiveWidgetKeysRef:$,setFloatingWidget:j}=_;$.current.clear(),j(null)}function aN(_){let{currentChatJid:$,currentRootChatJid:j,isComposeBoxAgentActive:G,showIntentToast:Z,setPendingExtensionPanelActions:X,refreshAutoresearchStatus:Y,stopAutoresearch:L,dismissAutoresearch:K,streamSidePrompt:q,btwAbortRef:Q,btwSession:V,setBtwSession:B,sendAgentMessage:N,handleMessageResponse:U,dismissedLiveWidgetKeysRef:D,setFloatingWidget:E,getAgentStatus:H,getAgentContext:M,getAgentQueueState:J,getAgentModels:O,getActiveChatAgents:T,getChatBranches:I,getTimeline:A,rawPosts:k,activeChatAgents:z,currentChatBranches:W,contextUsage:y,followupQueueItemsRef:x,activeModel:P,activeThinkingLevel:S,supportsThinking:v,isAgentTurnActive:l}=_,h=f(async(Z0,B0)=>{let W0=typeof Z0?.key==="string"?Z0.key:"",d=typeof B0?.key==="string"?B0.key:"",j0=Dj(W0,d);if(!W0||!d)return;X((A0)=>tV(A0,W0,d));try{let A0=await _Q({panel:Z0,action:B0,currentChatJid:$,stopAutoresearch:L,dismissAutoresearch:K,writeClipboard:async(f0)=>{if(!await gk(f0))throw Error("Clipboard access is unavailable.")}});if(A0.refreshAutoresearchStatus)Y();if(A0.toast)Z(A0.toast.title,A0.toast.detail,A0.toast.kind,A0.toast.durationMs)}catch(A0){Z("Panel action failed",A0?.message||"Could not complete that action.","warning")}finally{X((A0)=>eV(A0,j0))}},[$,K,Y,X,Z,L]),r=f(()=>{dN({btwAbortRef:Q,setBtwSession:B})},[Q,B]),b=f(async(Z0)=>{return await iN({question:Z0,currentChatJid:$,streamSidePrompt:q,resolveBtwChatJid:RL,showIntentToast:Z,btwAbortRef:Q,setBtwSession:B})},[Q,$,B,Z,q]),e=f(async({content:Z0})=>{return await oN({content:Z0,parseBtwCommand:PL,closeBtwPanel:r,runBtwPrompt:b,showIntentToast:Z})},[r,b,Z]),z0=f(()=>{if(V?.question)b(V.question)},[V,b]),K0=f(async()=>{await sN({btwSession:V,buildBtwInjectionText:gL,isComposeBoxAgentActive:G,currentChatJid:$,sendAgentMessage:N,handleMessageResponse:U,showIntentToast:Z})},[V,$,U,G,N,Z]),q0=f(async(Z0=null)=>{return mN({requestPayload:Z0,currentChatJid:$,currentRootChatJid:j,getAgentStatus:H,getAgentContext:M,getAgentQueueState:J,getAgentModels:O,getActiveChatAgents:T,getChatBranches:I,getTimeline:A,rawPosts:k,activeChatAgents:z,currentChatBranches:W,contextUsage:y,followupQueueItems:x.current,activeModel:P,activeThinkingLevel:S,supportsThinking:v,isAgentTurnActive:l})},[z,P,S,y,W,$,j,x,T,M,O,J,H,I,A,l,k,v]),X0=f((Z0)=>{hN({widget:Z0,dismissedLiveWidgetKeysRef:D,setFloatingWidget:E})},[D,E]),N0=f(()=>{nN({dismissedLiveWidgetKeysRef:D,setFloatingWidget:E})},[D,E]),_0=f((Z0,B0)=>{pN({event:Z0,widget:B0,currentChatJid:$,isComposeBoxAgentActive:G,setFloatingWidget:E,handleCloseFloatingWidget:N0,handleMessageResponse:U,showIntentToast:Z,sendAgentMessage:N,buildFloatingWidgetDashboardSnapshot:q0})},[q0,$,N0,U,G,N,E,Z]);return u(()=>{bk({dismissedLiveWidgetKeysRef:D,setFloatingWidget:E})},[$,D,E]),{handleExtensionPanelAction:h,closeBtwPanel:r,handleBtwIntercept:e,handleBtwRetry:z0,handleBtwInject:K0,handleOpenFloatingWidget:X0,handleCloseFloatingWidget:N0,handleFloatingWidgetEvent:_0}}T0();function vk(_){let{hasDockPanes:$,chatOnlyMode:j}=_;return Boolean($&&!j)}function mk(_){return!_}function tN(_){let{hasDockPanes:$,chatOnlyMode:j,toggleDock:G,toggleZenMode:Z,exitZenMode:X,zenMode:Y,previousChat:L,nextChat:K}=_;u(()=>{if(!vk({hasDockPanes:$,chatOnlyMode:j}))return;return VN(G)},[j,$,G]),u(()=>{if(!mk(j))return;return QN({toggleZenMode:Z,exitZenMode:X,zenMode:Y,isZenModeActive:()=>Y})},[j,X,Z,Y]),u(()=>{if(typeof L!=="function"&&typeof K!=="function")return;return NN({previousChat:L,nextChat:K})},[K,L]),u(()=>FN(),[]),u(()=>BN(),[])}function ck(_){return Boolean(_&&typeof _.closest==="function")}function eN(_=typeof window<"u"?window:null){if(!_||typeof _.getSelection!=="function")return!1;try{let $=_.getSelection();if(!$||$.isCollapsed)return!1;return String($.toString()||"").trim().length>0}catch{return!1}}function lk(){return{active:!1,horizontalLocked:!1,cancelled:!1,startX:0,startY:0,lastX:0,lastY:0,startedAt:0}}function hk(){return{lastTriggeredAt:0,accumX:0}}function yj(_){if(!_)return;_.active=!1,_.horizontalLocked=!1,_.cancelled=!1,_.startX=0,_.startY=0,_.lastX=0,_.lastY=0,_.startedAt=0}var nk=["input","textarea","select","button","label","a[href]",'[contenteditable="true"]','[role="button"]',"[data-no-chat-swipe]",".compose-box",".compose-model-popup",".compose-session-popup",".workspace-explorer",".editor-pane-container",".dock-panel",".terminal-pane-content",".attachment-preview-modal",".rename-branch-overlay",".agent-request-modal",".adaptive-card-container",".adaptive-card-container input",".adaptive-card-container textarea",".adaptive-card-container select",".adaptive-card-container button"].join(", "),pk=[".agent-thinking",".agent-status-panel",".agent-thinking-intent"].join(", ");function _B(_){if(!_||!ck(_))return!1;let $=_.closest(nk);if(!$)return!0;return Boolean($.closest(pk))}function jB(_,$){if(!Array.isArray(_))return $?[$]:[];let j=new Set,G=_.filter((X)=>Boolean(X&&typeof X==="object")).filter((X)=>{let Y=typeof X.chat_jid==="string"?X.chat_jid.trim():"";if(!Y||j.has(Y))return!1;if(X.archived_at)return!1;return j.add(Y),!0});G.sort((X,Y)=>{if(Boolean(X.is_active)!==Boolean(Y.is_active))return X.is_active?-1:1;return String(X.chat_jid).localeCompare(String(Y.chat_jid))});let Z=G.map((X)=>String(X.chat_jid).trim());if($&&!j.has($))Z.unshift($);return Z}function Mj(_){let $=jB(_.candidates,_.currentChatJid);if($.length<=1)return null;let j=$.indexOf(_.currentChatJid);if(j<0)return $[0]??null;let G=_.direction==="next"?(j+1)%$.length:(j-1+$.length)%$.length;return $[G]??null}function $B(_,$){let j=_.find((Z)=>Z.chat_jid===$);if(!j)return $.replace(/^[^:]+:/,"");return(typeof j.agent_name==="string"?j.agent_name.trim():"")||$.replace(/^[^:]+:/,"")}function rk(_){let $=jB(_.candidates,_.currentChatJid);if($.length<=1)return{prev:null,next:null};let j=$.indexOf(_.currentChatJid);if(j<0)return{prev:null,next:null};let G=$[(j-1+$.length)%$.length],Z=$[(j+1)%$.length];return{prev:{chatJid:G,name:$B(_.candidates,G)},next:{chatJid:Z,name:$B(_.candidates,Z)}}}function dk(_){let $=Number.isFinite(_.minDistancePx)?Number(_.minDistancePx):72,j=Number.isFinite(_.axisRatio)?Number(_.axisRatio):1.35;return Math.abs(_.dx)>=$&&Math.abs(_.dx)>Math.abs(_.dy)*j}function ik(_){let $=document.querySelector(".chat-swipe-indicator");if(!$)$=document.createElement("div"),$.className="chat-swipe-indicator",$.innerHTML='<span class="chat-swipe-chevron"></span><span class="chat-swipe-name"></span>',document.body.appendChild($);return $}function ok(_,$,j,G){let Z=Math.abs($),X=Math.min(Z/100,1),Y=Z>=72;_.style.display="flex",_.style.opacity=String(Math.min(X*2.5,1)),_.classList.toggle("chat-swipe-indicator--ready",Y);let L=$<0,K=L?G.next:G.prev,q=_.querySelector(".chat-swipe-chevron");if(q)q.textContent=L?"›":"‹",q.style.order=L?"2":"0";let Q=_.querySelector(".chat-swipe-name");if(Q)Q.textContent=K?.name??""}function R6(_){_.style.display="none",_.style.opacity="0"}function GB(_){let{timelineRef:$,activeChatAgents:j,currentChatJid:G,onSwitch:Z,isIOSDevice:X,isLikelySafari:Y}=_,L=$.current;if(!L)return()=>{};let K=X(),q=typeof Y==="function"?Y():!1;if(!K&&!q)return()=>{};let Q=lk(),V=hk(),B=null,N={prev:null,next:null},U=!1;function D(){N=rk({candidates:j,currentChatJid:G})}D();function E(){if(!B)B=ik(L);return B}function H(k){let z=k==="next"?N.next:N.prev;if(z)Z(z.chatJid)}function M(k){U=String(k.pointerType||"").toLowerCase()==="pen"}function J(k){if(yj(Q),D(),!K)return;if(k.touches.length!==1)return;if(U)return;if(eN())return;if(!_B(k.target))return;let z=k.touches[0];Q.active=!0,Q.startX=z.clientX,Q.startY=z.clientY,Q.lastX=z.clientX,Q.lastY=z.clientY,Q.startedAt=Date.now()}function O(k){if(!Q.active||Q.cancelled)return;if(eN()){Q.cancelled=!0,R6(E());return}let z=k.touches[0];if(!z)return;Q.lastX=z.clientX,Q.lastY=z.clientY;let W=Q.lastX-Q.startX,y=Q.lastY-Q.startY;if(!Q.horizontalLocked){if(Math.abs(y)>16&&Math.abs(y)>=Math.abs(W)){Q.cancelled=!0,R6(E());return}if(Math.abs(W)>12&&Math.abs(W)>Math.abs(y)*1.15)Q.horizontalLocked=!0}if(Q.horizontalLocked){if(k.cancelable)k.preventDefault();ok(E(),W,L.clientWidth,N)}}function T(){if(!Q.active)return;let k=Q.lastX-Q.startX,z=Q.lastY-Q.startY,W=!Q.cancelled&&dk({dx:k,dy:z});if(R6(E()),yj(Q),W)H(k<0?"next":"prev")}function I(){R6(E()),yj(Q)}function A(k){if(K)return;if(!q)return;if(!_B(k.target))return;let{deltaX:z,deltaY:W}=k;if(!Number.isFinite(z)||Math.abs(z)<72)return;if(Math.abs(z)<=Math.abs(W)*1.35)return;if(k.cancelable)k.preventDefault();let y=Date.now();if(y-V.lastTriggeredAt<450)return;V.lastTriggeredAt=y,H(z>0?"next":"prev")}return L.addEventListener("pointerdown",M,{passive:!0}),L.addEventListener("touchstart",J,{passive:!0}),L.addEventListener("touchmove",O,{passive:!1}),L.addEventListener("touchend",T,{passive:!0}),L.addEventListener("touchcancel",I,{passive:!0}),L.addEventListener("wheel",A,{passive:!1}),()=>{if(L.removeEventListener("pointerdown",M),L.removeEventListener("touchstart",J),L.removeEventListener("touchmove",O),L.removeEventListener("touchend",T),L.removeEventListener("touchcancel",I),L.removeEventListener("wheel",A),B)R6(B),B.remove(),B=null}}function sk(_){return{currentChatJid:_.currentChatJid,followupQueueItemsRef:_.followupQueueItemsRef,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,refreshQueueState:_.refreshQueueState,setFollowupQueueItems:_.setFollowupQueueItems,showIntentToast:_.showIntentToast,clearQueuedSteerStateIfStale:_.clearQueuedSteerStateIfStale,steerAgentQueueItem:_.steerAgentQueueItem,removeAgentQueueItem:_.removeAgentQueueItem,refreshActiveChatAgents:_.refreshActiveChatAgents,refreshCurrentChatBranches:_.refreshCurrentChatBranches,refreshContextUsage:_.refreshContextUsage,refreshAutoresearchStatus:_.refreshAutoresearchStatus}}function ak(_){return{currentChatJid:_.currentChatJid,currentRootChatJid:_.currentRootChatJid,isComposeBoxAgentActive:_.isComposeBoxAgentActive,showIntentToast:_.showIntentToast,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,refreshAutoresearchStatus:_.refreshAutoresearchStatus,stopAutoresearch:_.stopAutoresearch,dismissAutoresearch:_.dismissAutoresearch,streamSidePrompt:_.streamSidePrompt,btwAbortRef:_.btwAbortRef,btwSession:_.btwSession,setBtwSession:_.setBtwSession,sendAgentMessage:_.sendAgentMessage,handleMessageResponse:_.handleMessageResponse,dismissedLiveWidgetKeysRef:_.dismissedLiveWidgetKeysRef,setFloatingWidget:_.setFloatingWidget,getAgentStatus:_.getAgentStatus,getAgentContext:_.getAgentContext,getAgentQueueState:_.getAgentQueueState,getAgentModels:_.getAgentModels,getActiveChatAgents:_.getActiveChatAgents,getChatBranches:_.getChatBranches,getTimeline:_.getTimeline,rawPosts:_.rawPosts,activeChatAgents:_.activeChatAgents,currentChatBranches:_.currentChatBranches,contextUsage:_.contextUsage,followupQueueItemsRef:_.followupQueueItemsRef,activeModel:_.activeModel,activeThinkingLevel:_.activeThinkingLevel,supportsThinking:_.supportsThinking,isAgentTurnActive:_.isAgentTurnActive}}function tk(_){return{setWorkspaceOpen:_.setWorkspaceOpen,currentChatJid:_.currentChatJid,chatOnlyMode:_.chatOnlyMode,navigate:_.navigate,currentBranchRecord:_.currentBranchRecord,renameBranchInFlightRef:_.renameBranchInFlightRef,renameBranchLockUntilRef:_.renameBranchLockUntilRef,getFormLock:_.getFormLock,setRenameBranchNameDraft:_.setRenameBranchNameDraft,setIsRenameBranchFormOpen:_.setIsRenameBranchFormOpen,setIsRenamingBranch:_.setIsRenamingBranch,renameChatBranch:_.renameChatBranch,refreshActiveChatAgents:_.refreshActiveChatAgents,refreshCurrentChatBranches:_.refreshCurrentChatBranches,showIntentToast:_.showIntentToast,currentChatBranches:_.currentChatBranches,activeChatAgents:_.activeChatAgents,pruneChatBranch:_.pruneChatBranch,purgeChatBranch:_.purgeChatBranch,restoreChatBranch:_.restoreChatBranch,branchLoaderMode:_.branchLoaderMode,branchLoaderSourceChatJid:_.branchLoaderSourceChatJid,forkChatBranch:_.forkChatBranch,createRootChatSession:_.createRootChatSession,setBranchLoaderState:_.setBranchLoaderState,currentRootChatJid:_.currentRootChatJid,isWebAppMode:_.isWebAppMode,getActiveChatAgents:_.getActiveChatAgents,getChatBranches:_.getChatBranches,setActiveChatAgents:_.setActiveChatAgents,setCurrentChatBranches:_.setCurrentChatBranches,openEditor:_.openEditor,activateTab:_.activateTab,tabStripActiveId:_.tabStripActiveId,editorInstanceRef:_.editorInstanceRef,dockInstanceRef:_.dockInstanceRef,terminalTabPath:_.terminalTabPath,tabPaneOverrides:_.tabPaneOverrides,buildPaneDetachTransfer:_.buildPaneDetachTransfer,registerDetachedPaneWindow:_.registerDetachedPaneWindow,dockVisible:_.dockVisible,resolveTab:_.resolveTab,closeTab:_.closeTab,setDockVisible:_.setDockVisible,editorOpen:_.editorOpen,shellElement:_.shellElement,editorWidthRef:_.editorWidthRef,dockHeightRef:_.dockHeightRef,sidebarWidthRef:_.sidebarWidthRef,readStoredNumber:_.readStoredNumber}}function ek(_){return{hasDockPanes:_.hasDockPanes,chatOnlyMode:_.chatOnlyMode,toggleDock:_.toggleDock,toggleZenMode:_.toggleZenMode,exitZenMode:_.exitZenMode,zenMode:_.zenMode,previousChat:()=>{let $=Mj({candidates:_.activeChatAgents,currentChatJid:_.currentChatJid,direction:"prev"});if($)_.handleBranchPickerChange?.($)},nextChat:()=>{let $=Mj({candidates:_.activeChatAgents,currentChatJid:_.currentChatJid,direction:"next"});if($)_.handleBranchPickerChange?.($)}}}function ZB(_){let $=rN(sk(_)),j=aN(ak({..._,handleMessageResponse:$.handleMessageResponse})),G=fN(tk(_));return tN(ek({..._,handleBranchPickerChange:G.handleBranchPickerChange})),{followupActions:$,sidepanelActions:j,branchPaneActions:G}}function _y(_,$){return Boolean(_||$!==null)}function $y(_){return{..._.agentStatusLifecycleBundle,..._.actionBundle,timelineViewActions:_.timelineViewActions,isComposeBoxAgentActive:_.isComposeBoxAgentActive}}function jy(_,$){let{routeState:j,searchState:G,shellState:Z,timeline:X,interaction:Y,paneRuntime:L,refs:K,setters:q,services:Q,helpers:V}=_;return{currentChatJid:j.currentChatJid,activeChatJidRef:K.activeChatJidRef,queueRefreshGenRef:K.queueRefreshGenRef,dismissedQueueRowIdsRef:K.dismissedQueueRowIdsRef,getAgentQueueState:Q.getAgentQueueState,setFollowupQueueItems:q.setFollowupQueueItems,clearQueuedSteerStateIfStale:Y.clearQueuedSteerStateIfStale,getAgentContext:Q.getAgentContext,setContextUsage:q.setContextUsage,getAutoresearchStatus:Q.getAutoresearchStatus,setExtensionStatusPanels:q.setExtensionStatusPanels,setPendingExtensionPanelActions:q.setPendingExtensionPanelActions,setExtensionWorkingState:q.setExtensionWorkingState,getAgentStatus:Q.getAgentStatus,wasAgentActiveRef:K.wasAgentActiveRef,viewStateRef:K.viewStateRef,refreshTimeline:X.refreshTimeline,clearAgentRunState:Y.clearAgentRunState,agentStatusRef:K.agentStatusRef,pendingRequestRef:K.pendingRequestRef,thoughtBufferRef:K.thoughtBufferRef,draftBufferRef:K.draftBufferRef,previewResyncPendingRef:K.previewResyncPendingRef,previewResyncGenerationRef:K.previewResyncGenerationRef,setAgentStatus:q.setAgentStatus,setAgentDraft:q.setAgentDraft,setAgentPlan:q.setAgentPlan,setAgentThought:q.setAgentThought,setPendingRequest:q.setPendingRequest,setActiveTurn:Y.setActiveTurn,noteAgentActivity:Y.noteAgentActivity,showLastActivity:Y.showLastActivity,clearLastActivityFlag:Y.clearLastActivityFlag,isAgentRunningRef:K.isAgentRunningRef,currentTurnIdRef:K.currentTurnIdRef,silentRecoveryRef:K.silentRecoveryRef,silenceRefreshMs:Q.silenceRefreshMs,lastAgentEventRef:K.lastAgentEventRef,lastSilenceNoticeRef:K.lastSilenceNoticeRef,silenceWarningMs:Q.silenceWarningMs,silenceFinalizeMs:Q.silenceFinalizeMs,isCompactionStatus:Q.isCompactionStatus,serverVersionContext:{currentAppAssetVersion:Q.currentAppAssetVersion,staleUiVersionRef:K.staleUiVersionRef,staleUiReloadScheduledRef:K.staleUiReloadScheduledRef,tabStoreHasUnsaved:Q.tabStoreHasUnsaved,isAgentRunningRef:K.isAgentRunningRef,pendingRequestRef:K.pendingRequestRef,showIntentToast:$},setConnectionStatus:q.setConnectionStatus,setStateAccessFailed:q.setStateAccessFailed,hasConnectedOnceRef:K.hasConnectedOnceRef,getAgents:Q.getAgents,setAgents:q.setAgents,setUserProfile:q.setUserProfile,applyBranding:Y.applyBranding,readStoredNumber:V.readStoredNumber,sidebarWidthRef:K.sidebarWidthRef,appShellRef:K.appShellRef,currentRootChatJid:j.currentRootChatJid,getAgentModels:Q.getAgentModels,getActiveChatAgents:Q.getActiveChatAgents,getChatBranches:Q.getChatBranches,setActiveChatAgents:q.setActiveChatAgents,setCurrentChatBranches:q.setCurrentChatBranches,setActiveModel:q.setActiveModel,setActiveThinkingLevel:q.setActiveThinkingLevel,setSupportsThinking:q.setSupportsThinking,setActiveModelUsage:q.setActiveModelUsage,setAgentModelsPayload:q.setAgentModelsPayload,setHasLoadedAgentModels:q.setHasLoadedAgentModels,agentsRef:K.agentsRef,currentHashtag:G.currentHashtag,searchQuery:G.searchQuery,searchScope:G.searchScope,loadPosts:X.loadPosts,searchPosts:Q.searchPosts,setPosts:X.setPosts,setHasMore:X.setHasMore,scrollToBottom:X.scrollToBottom,paneStateOwnerChatJidRef:K.paneStateOwnerChatJidRef,chatPaneStateByChatRef:K.chatPaneStateByChatRef,snapshotCurrentChatPaneState:Y.snapshotCurrentChatPaneState,restoreChatPaneState:Y.restoreChatPaneState,setFloatingWidget:q.setFloatingWidget,dismissedLiveWidgetKeysRef:K.dismissedLiveWidgetKeysRef,posts:X.posts,scrollToMessage:Y.composeReferenceActions.scrollToMessage,draftThrottleRef:K.draftThrottleRef,thoughtThrottleRef:K.thoughtThrottleRef,followupQueueItemsRef:K.followupQueueItemsRef,scrollToBottomRef:X.scrollToBottomRef,hasMoreRef:X.hasMoreRef,loadMoreRef:X.loadMoreRef,lastAgentResponseRef:K.lastAgentResponseRef,notifyForFinalResponse:Y.notifyForFinalResponse,setSteerQueuedTurnId:q.setSteerQueuedTurnId,refreshActiveEditorFromWorkspace:L.refreshActiveEditorFromWorkspace,showIntentToast:$,removeStalledPost:Y.recoveryCallbacks.removeStalledPost,preserveTimelineScrollTop:X.preserveTimelineScrollTop,finalizeStalledResponse:()=>{q.setExtensionWorkingState({message:null,indicator:null,visible:!0}),Y.recoveryCallbacks.finalizeStalledResponse()},connectionStatus:Z.connectionStatus,agentStatus:Q.agentStatus,thoughtExpandedRef:K.thoughtExpandedRef,draftExpandedRef:K.draftExpandedRef,steerQueuedTurnIdRef:K.steerQueuedTurnIdRef}}function XB(_){let{routeState:$,searchState:j,shellState:G,timeline:Z,interaction:X,paneRuntime:Y,refs:L,setters:K,services:q,helpers:Q}=_,V=X.composeReferenceActions.showIntentToast,B=iV({currentHashtag:j.currentHashtag,searchQuery:j.searchQuery,searchOpen:j.searchOpen,searchScope:j.searchScope,currentChatJid:$.currentChatJid,currentRootChatJid:$.currentRootChatJid,posts:Z.posts,loadPosts:Z.loadPosts,searchPosts:q.searchPosts,setCurrentHashtag:j.setCurrentHashtag,setSearchQuery:j.setSearchQuery,setSearchOpen:j.setSearchOpen,setSearchScope:j.setSearchScope,setPosts:Z.setPosts,setHasMore:Z.setHasMore,preserveTimelineScrollTop:Z.preserveTimelineScrollTop,setRemovingPostIds:K.setRemovingPostIds,deletePost:q.deletePost,hasMoreRef:Z.hasMoreRef,loadMoreRef:Z.loadMoreRef}),N=$N(jy(_,V)),U=_y(q.isAgentTurnActive,q.agentStatus),D=ZB({currentChatJid:$.currentChatJid,followupQueueItemsRef:L.followupQueueItemsRef,dismissedQueueRowIdsRef:L.dismissedQueueRowIdsRef,setFollowupQueueItems:K.setFollowupQueueItems,showIntentToast:V,clearQueuedSteerStateIfStale:X.clearQueuedSteerStateIfStale,steerAgentQueueItem:q.steerAgentQueueItem,removeAgentQueueItem:q.removeAgentQueueItem,refreshQueueState:N.agentStatusLifecycle.refreshQueueState,refreshActiveChatAgents:N.chatRefreshLifecycle.refreshActiveChatAgents,refreshCurrentChatBranches:N.chatRefreshLifecycle.refreshCurrentChatBranches,refreshContextUsage:N.agentStatusLifecycle.refreshContextUsage,refreshAutoresearchStatus:N.agentStatusLifecycle.refreshAutoresearchStatus,currentRootChatJid:$.currentRootChatJid,isComposeBoxAgentActive:U,setPendingExtensionPanelActions:K.setPendingExtensionPanelActions,stopAutoresearch:q.stopAutoresearch,dismissAutoresearch:q.dismissAutoresearch,streamSidePrompt:q.streamSidePrompt,btwAbortRef:L.btwAbortRef,btwSession:G.btwSession,setBtwSession:K.setBtwSession,sendAgentMessage:q.sendAgentMessage,dismissedLiveWidgetKeysRef:L.dismissedLiveWidgetKeysRef,setFloatingWidget:K.setFloatingWidget,getAgentStatus:q.getAgentStatus,getAgentContext:q.getAgentContext,getAgentQueueState:q.getAgentQueueState,getAgentModels:q.getAgentModels,getActiveChatAgents:q.getActiveChatAgents,getChatBranches:q.getChatBranches,getTimeline:q.getTimeline,rawPosts:Z.rawPosts,activeChatAgents:G.activeChatAgents,currentChatBranches:G.currentChatBranches,contextUsage:G.contextUsage,activeModel:G.activeModel,activeThinkingLevel:G.activeThinkingLevel,supportsThinking:G.supportsThinking,isAgentTurnActive:q.isAgentTurnActive,chatOnlyMode:$.chatOnlyMode,navigate:$.navigate,setWorkspaceOpen:G.setWorkspaceOpen,currentBranchRecord:G.currentBranchRecord,renameBranchInFlightRef:L.renameBranchInFlightRef,renameBranchLockUntilRef:L.renameBranchLockUntilRef,getFormLock:Q.getFormLock,setRenameBranchNameDraft:K.setRenameBranchNameDraft,setIsRenameBranchFormOpen:K.setIsRenameBranchFormOpen,setIsRenamingBranch:K.setIsRenamingBranch,renameChatBranch:q.renameChatBranch,pruneChatBranch:q.pruneChatBranch,purgeChatBranch:q.purgeChatBranch,restoreChatBranch:q.restoreChatBranch,branchLoaderMode:$.branchLoaderMode,branchLoaderSourceChatJid:$.branchLoaderSourceChatJid,forkChatBranch:q.forkChatBranch,createRootChatSession:q.createRootChatSession,setBranchLoaderState:K.setBranchLoaderState,isWebAppMode:$.isWebAppMode,setActiveChatAgents:K.setActiveChatAgents,setCurrentChatBranches:K.setCurrentChatBranches,openEditor:q.openEditor,tabStripActiveId:q.tabStripActiveId,editorInstanceRef:Y.editorInstanceRef,dockInstanceRef:Y.dockInstanceRef,terminalTabPath:q.terminalTabPath,tabPaneOverrides:q.tabPaneOverrides,buildPaneDetachTransfer:Y.buildPaneDetachTransfer,registerDetachedPaneWindow:Y.registerDetachedPaneWindow,dockVisible:Y.dockVisible,resolveTab:q.resolveTab,closeTab:q.closeTab,setDockVisible:Y.setDockVisible,editorOpen:q.editorOpen,shellElement:L.appShellRef.current,editorWidthRef:L.editorWidthRef,dockHeightRef:L.dockHeightRef,sidebarWidthRef:L.sidebarWidthRef,readStoredNumber:Q.readStoredNumber,hasDockPanes:Y.hasDockPanes,toggleDock:Y.toggleDock,toggleZenMode:Y.toggleZenMode,exitZenMode:Y.exitZenMode,zenMode:Y.zenMode});return $y({agentStatusLifecycleBundle:N,actionBundle:D,timelineViewActions:B,isComposeBoxAgentActive:U})}T0();f_();T0();function YB(_){try{return _?.focus?.(),!0}catch($){return!1}}function S6(_,$){if(!_||!$)return null;try{return _.getItem($)}catch{return null}}function wj(_,$,j){if(!_||!$)return;try{_.setItem($,j)}catch{return}}function LB(_,$){if(!_||!$)return;try{_.removeItem($)}catch{return}}function qB(_="piclaw"){try{if(typeof crypto<"u"&&typeof crypto.randomUUID==="function")return`${_}-${crypto.randomUUID()}`}catch($){console.debug("[notification-delivery-coordinator] crypto.randomUUID threw; falling back to Math.random-based id.",$)}return`${_}-${Math.random().toString(36).slice(2)}-${Date.now().toString(36)}`}function G4(_=typeof window<"u"?window:null){let $=_?.localStorage,j=S6($,"piclaw.notifications.deviceId");if(j)return j;let G=qB("device");return wj($,"piclaw.notifications.deviceId",G),S6($,"piclaw.notifications.deviceId")||G}function u6(_=typeof window<"u"?window:null){let $=_?.sessionStorage,j=S6($,"piclaw.notifications.clientId");if(j)return j;let G=_?.__PICLAW_NOTIFICATION_CLIENT_ID__;if(typeof G==="string"&&G.trim())return G.trim();let Z=qB("client");if(wj($,"piclaw.notifications.clientId",Z),_)_.__PICLAW_NOTIFICATION_CLIENT_ID__=S6($,"piclaw.notifications.clientId")||Z;return _?.__PICLAW_NOTIFICATION_CLIENT_ID__||Z}function KB(_,$){return`piclaw.notifications.presence.${String(_||"").trim()}:${String($||"").trim()}`}function Tj(_={}){let $=_.runtimeWindow??(typeof window<"u"?window:null),j=_.runtimeDocument??(typeof document<"u"?document:null),G=typeof _.chatJid==="string"&&_.chatJid.trim()?_.chatJid.trim():"",Z=typeof _.deviceId==="string"&&_.deviceId.trim()?_.deviceId.trim():G4($),X=typeof _.clientId==="string"&&_.clientId.trim()?_.clientId.trim():u6($),Y=Number.isFinite(_.updatedAtMs)?Number(_.updatedAtMs):Date.now(),L=Boolean(typeof j?.hasFocus==="function"?j.hasFocus():!0),q=String(j?.visibilityState||"").trim().toLowerCase()==="hidden"?"hidden":"visible";return{deviceId:Z,clientId:X,chatJid:G,visibilityState:q,hasFocus:L,updatedAtMs:Y}}function VB(_,$=typeof window<"u"?window:null){let j=$?.localStorage,G=typeof _?.deviceId==="string"?_.deviceId.trim():"",Z=typeof _?.clientId==="string"?_.clientId.trim():"",X=typeof _?.chatJid==="string"?_.chatJid.trim():"";if(!j||!G||!Z||!X)return!1;return wj(j,KB(G,Z),JSON.stringify({deviceId:G,clientId:Z,chatJid:X,visibilityState:_.visibilityState==="hidden"?"hidden":"visible",hasFocus:Boolean(_.hasFocus),updatedAtMs:Number.isFinite(_.updatedAtMs)?Number(_.updatedAtMs):Date.now()})),!0}function QB(_,$=typeof window<"u"?window:null){let j=$?.localStorage,G=typeof _?.deviceId==="string"?_.deviceId.trim():"",Z=typeof _?.clientId==="string"?_.clientId.trim():"";if(!j||!G||!Z)return!1;return LB(j,KB(G,Z)),!0}function Gy(_={}){let $=_.runtimeWindow??(typeof window<"u"?window:null),j=$?.localStorage,G=typeof _.deviceId==="string"&&_.deviceId.trim()?_.deviceId.trim():G4($),Z=Number.isFinite(_.nowMs)?Number(_.nowMs):Date.now(),X=Number.isFinite(_.ttlMs)?Number(_.ttlMs):120000;if(!j||!G)return[];let Y=`piclaw.notifications.presence.${G}:`,L=[],K=[];for(let q=0;q<j.length;q+=1){let Q=j.key(q);if(!Q||!Q.startsWith(Y))continue;let V=S6(j,Q);if(!V){K.push(Q);continue}try{let B=JSON.parse(V),N=Number(B?.updatedAtMs);if(!Number.isFinite(N)||Z-N>X){K.push(Q);continue}let U=typeof B?.chatJid==="string"?B.chatJid.trim():"",D=typeof B?.clientId==="string"?B.clientId.trim():"";if(!U||!D){K.push(Q);continue}L.push({deviceId:G,clientId:D,chatJid:U,visibilityState:B?.visibilityState==="hidden"?"hidden":"visible",hasFocus:Boolean(B?.hasFocus),updatedAtMs:N})}catch{K.push(Q)}}return K.forEach((q)=>LB(j,q)),L.sort((q,Q)=>q.clientId.localeCompare(Q.clientId))}function NB(_={}){let $=Tj(_),j=$.chatJid;if(!j)return!1;let G=Gy({runtimeWindow:_.runtimeWindow,deviceId:$.deviceId,nowMs:$.updatedAtMs,ttlMs:_.ttlMs}).filter((Y)=>Y.chatJid===j&&Y.clientId!==$.clientId),Z=[$,...G];if(Z.some((Y)=>Y.visibilityState==="visible"))return!1;let X=[...Z].sort((Y,L)=>Y.clientId.localeCompare(L.clientId))[0]||null;return Boolean(X&&X.clientId===$.clientId)}function Zy(_=typeof window<"u"?window:null){return Boolean(_?.__PICLAW_NOTIFICATION_SOURCE_LABELS_ENABLED__)}function Xy(_,$="",j=typeof window<"u"?window:null){let G=typeof _==="string"&&_.trim()?_.trim():"PiClaw",Z=Zy(j)&&typeof $==="string"?$.trim():"";return Z?`${G} [${Z}]`:G}function Yy(_){let $=String(_||"").replace(/-/g,"+").replace(/_/g,"/"),j=$.padEnd(Math.ceil($.length/4)*4,"="),G=atob(j),Z=new Uint8Array(G.length);for(let X=0;X<G.length;X+=1)Z[X]=G.charCodeAt(X);return Z}function g8(_=typeof window<"u"?window:null){if(!_||!_.isSecureContext)return!1;return"serviceWorker"in _.navigator&&"PushManager"in _}async function FB(_){return await _.navigator.serviceWorker.register("/sw.js",{updateViaCache:"none"}),await _.navigator.serviceWorker.ready}async function Ly(_){let $=await FB(_),j=await $.pushManager.getSubscription();if(j)return j;let G=await F7(),Z=typeof G?.publicKey==="string"?G.publicKey.trim():"";if(!Z)throw Error("Missing web push public key.");return $.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Yy(Z)})}async function BB(_,$){if(!g8(_))return!1;let j=await Ly(_);return await U7(j.toJSON?j.toJSON():j,{deviceId:$}),!0}async function qy(_,$){if(!g8(_))return!1;let G=await(await FB(_)).pushManager.getSubscription();if(!G)return!1;let Z=G.toJSON?G.toJSON():G;try{await H7(Z,{deviceId:$})}catch(X){console.warn("Failed to remove web push subscription from the server:",X)}try{await G.unsubscribe()}catch(X){console.warn("Failed to unsubscribe from web push notifications:",X)}return!0}function Ky(_,$={}){let j=$.runtimeWindow??(typeof window<"u"?window:null);if(!j?.fetch)return Promise.resolve(!1);return j.fetch("/agent/push/presence",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_),keepalive:Boolean($.keepalive)}).then(()=>!0).catch(()=>!1)}function Vy(_,$=typeof window<"u"?window:null){try{if($?.navigator?.sendBeacon){let j=new Blob([JSON.stringify(_)],{type:"application/json"});return $.navigator.sendBeacon("/agent/push/presence",j)}}catch(j){console.debug("[use-notifications] Ignoring sendBeacon failure for best-effort notification presence teardown.",j,{hasNavigator:Boolean($?.navigator)})}return!1}function UB(_={}){let $=typeof _?.chatJid==="string"&&_.chatJid.trim()?_.chatJid.trim():"web:default",[j,G]=C(!1),[Z,X]=C("default"),Y=g(!1),L=g(null),K=g(null);u(()=>{let N=F$("notificationsEnabled",!1);if(Y.current=N,G(N),typeof window<"u")L.current=G4(window),K.current=u6(window);if(typeof Notification>"u")return;let U=Notification.permission;if(X(U),U==="denied"&&N){Y.current=!1,G(!1),K_("notificationsEnabled","false");return}if(U==="granted"&&N&&typeof window<"u"&&g8(window))BB(window,L.current||G4(window)).catch((D)=>{console.warn("Failed to refresh stored web push subscription:",D)})},[]),u(()=>{Y.current=j},[j]),u(()=>{if(typeof window>"u"||typeof document>"u")return;let N=L.current||G4(window),U=K.current||u6(window);L.current=N,K.current=U;let D=(J=!0,O="fetch")=>{let T=Tj({chatJid:$,runtimeWindow:window,runtimeDocument:document,deviceId:N,clientId:U});if(J)VB(T,window);else QB({deviceId:N,clientId:U},window);let I={device_id:N,client_id:U,chat_jid:$,visibility_state:T.visibilityState,has_focus:T.hasFocus,active:J};if(!J&&O==="beacon"&&Vy(I,window))return;Ky(I,{runtimeWindow:window,keepalive:!J||O==="keepalive"})},E=()=>D(!0),H=()=>D(!1,"beacon");D(!0);let M=setInterval(()=>D(!0),15000);return document.addEventListener("visibilitychange",E),window.addEventListener("focus",E),window.addEventListener("blur",E),window.addEventListener("pageshow",E),window.addEventListener("pagehide",H),window.addEventListener("beforeunload",H),()=>{clearInterval(M),document.removeEventListener("visibilitychange",E),window.removeEventListener("focus",E),window.removeEventListener("blur",E),window.removeEventListener("pageshow",E),window.removeEventListener("pagehide",H),window.removeEventListener("beforeunload",H),D(!1,"beacon")}},[$]);let q=f(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let N=Notification.requestPermission();if(N&&typeof N.then==="function")return N;return Promise.resolve(N)}catch(N){return console.debug("[use-notifications] Notification permission request threw; returning default permission state.",N),Promise.resolve("default")}},[]),Q=f(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){X("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let D=await q();if(X(D||"default"),D!=="granted"){Y.current=!1,G(!1),K_("notificationsEnabled","false");return}}let N=!Y.current;Y.current=N,G(N),K_("notificationsEnabled",String(N));let U=L.current||G4(window);if(L.current=U,g8(window))try{if(N)await BB(window,U);else await qy(window,U)}catch(D){if(console.warn("Failed to sync web push notifications:",D),N)alert("Notifications were enabled, but web push setup failed. If you are on iPhone or iPad, reopen PiClaw from the Home Screen and try again.")}},[q]),V=f((N,U,D={})=>{if(!Y.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let E=new Notification(Xy(N,D?.sourceLabel||"",window),{body:U});return E.onclick=()=>{YB(window)},!0}catch(E){return console.debug("[use-notifications] Local notification creation failed.",E,{title:typeof N==="string"?N:null}),!1}},[]),B=f((N)=>{if(typeof window>"u"||typeof document>"u")return!1;return NB({chatJid:typeof N==="string"&&N.trim()?N.trim():$,runtimeWindow:window,runtimeDocument:document,deviceId:L.current||G4(window),clientId:K.current||u6(window)})},[$]);return{notificationsEnabled:j,notificationPermission:Z,toggleNotifications:Q,notify:V,shouldNotifyLocallyForChat:B}}function Qy(_){let{activeChatAgents:$,currentChatBranches:j,currentChatJid:G}=_,Z=j.find((X)=>X?.chat_jid===G);if(Z)return Z;return $.find((X)=>X?.chat_jid===G)||null}function Ny(_){return{status:_?"running":"idle",message:_?"Preparing a new chat branch…":""}}function By(_,$){let j=typeof $?.root_chat_jid==="string"?$.root_chat_jid.trim():"";if(j)return j;let G=typeof _==="string"?_.trim():"";if(!G)return"web:default";let Z=G.indexOf(":branch:");if(Z<=0)return G;return G.slice(0,Z)||G}function HB(_){let{currentChatJid:$,branchLoaderMode:j}=_,[G,Z]=C("disconnected"),[X,Y]=C(!1),[L,K]=C(()=>P1()),[q,Q]=C(null),[V,B]=C(null),[N,U]=C(!1),[D,E]=C("current"),[H,M]=C([]),[J,O]=C([]),[T,I]=C([]),[A,k]=C(null),[z,W]=C({}),[y,x]=C(null),[P,S]=C(null),[v,l]=C(!1),[h,r]=C(null),[b,e]=C(null),[z0,K0]=C(!1),[q0,X0]=C([]),[N0,_0]=C([]),[Z0,B0]=C(null),[W0,d]=C(()=>new Map),[j0,A0]=C(()=>new Set),[f0,b0]=C(()=>({message:null,indicator:null,visible:!0})),[c0,X_]=C([]),[l0,__]=C(!1),[P0,p0]=C(()=>uK()),[R0,d0]=C(null),[r0,U_]=C(null),o0=g(new Set),h0=G0(()=>Qy({activeChatAgents:q0,currentChatBranches:N0,currentChatJid:$}),[q0,N0,$]),y0=G0(()=>By($,h0),[h0,$]),V_=SK(D),[s0,O_]=C(()=>Ny(j)),E0=c0.length,S0=g(new Set),I0=g([]),a0=g(new Set),A_=g(0),Q_=g({inFlight:!1,lastAttemptAt:0,turnId:null});S0.current=new Set(c0.map((g1)=>g1.row_id)),I0.current=c0;let{notificationsEnabled:D_,notificationPermission:E_,toggleNotifications:y_,notify:$0,shouldNotifyLocallyForChat:O0}=UB({chatJid:$}),[D0,v0]=C(()=>new Set),[m0,s]=C(()=>$V({allowLegacyFallback:!0,defaultValue:!1})),[o,t]=C({name:"You",avatar_url:null,avatar_background:null}),Y0=g(null),L0=g(!1),k0=g(!1),t0=g(!1),g0=g(null),U0=g($),w0=g(new Map),j_=g($),u0=g(0),G_=g(0),q_=g({}),W_=g({name:null,avatar_url:null}),i0=g({currentHashtag:null,searchQuery:null,searchOpen:!1}),p_=g(null),w_=g(null),i=g(0),J0=g(0),Y_=g(0),N_=g(null),h_=g(null),B1=g(null),u_=g(null),J1=g(0),C_=g({title:null,avatarBase:null}),M_=g(null),A1=g(!1),[z_,k_]=C(!1),F1=g(0),[v_,r_]=C(!1),[s_,H_]=C(""),x1=G0(()=>a2(s_,h0?.agent_name||""),[h0?.agent_name,s_]),U1=g(null);return{connectionStatus:G,setConnectionStatus:Z,stateAccessFailed:X,setStateAccessFailed:Y,isWebAppMode:L,setIsWebAppMode:K,currentHashtag:q,setCurrentHashtag:Q,searchQuery:V,setSearchQuery:B,searchOpen:N,setSearchOpen:U,searchScope:D,setSearchScope:E,fileRefs:H,setFileRefs:M,folderRefs:J,setFolderRefs:O,messageRefs:T,setMessageRefs:I,intentToast:A,setIntentToast:k,agents:z,setAgents:W,activeModel:y,setActiveModel:x,activeThinkingLevel:P,setActiveThinkingLevel:S,supportsThinking:v,setSupportsThinking:l,activeModelUsage:h,setActiveModelUsage:r,agentModelsPayload:b,setAgentModelsPayload:e,hasLoadedAgentModels:z0,setHasLoadedAgentModels:K0,activeChatAgents:q0,setActiveChatAgents:X0,currentChatBranches:N0,setCurrentChatBranches:_0,contextUsage:Z0,setContextUsage:B0,extensionStatusPanels:W0,setExtensionStatusPanels:d,pendingExtensionPanelActions:j0,setPendingExtensionPanelActions:A0,extensionWorkingState:f0,setExtensionWorkingState:b0,followupQueueItems:c0,setFollowupQueueItems:X_,isAgentTurnActive:l0,setIsAgentTurnActive:__,btwSession:P0,setBtwSession:p0,floatingWidget:R0,setFloatingWidget:d0,attachmentPreview:r0,setAttachmentPreview:U_,dismissedLiveWidgetKeysRef:o0,currentBranchRecord:h0,currentRootChatJid:y0,activeSearchScopeLabel:V_,branchLoaderState:s0,setBranchLoaderState:O_,followupQueueCount:E0,followupQueueRowIdsRef:S0,followupQueueItemsRef:I0,dismissedQueueRowIdsRef:a0,queueRefreshGenRef:A_,silentRecoveryRef:Q_,notificationsEnabled:D_,notificationPermission:E_,handleToggleNotifications:y_,notify:$0,shouldNotifyLocallyForChat:O0,removingPostIds:D0,setRemovingPostIds:v0,workspaceOpen:m0,setWorkspaceOpen:s,userProfile:o,setUserProfile:t,staleUiVersionRef:Y0,staleUiReloadScheduledRef:L0,hasConnectedOnceRef:k0,wasAgentActiveRef:t0,agentStatusRef:g0,activeChatJidRef:U0,chatPaneStateByChatRef:w0,paneStateOwnerChatJidRef:j_,draftThrottleRef:u0,thoughtThrottleRef:G_,agentsRef:q_,userProfileRef:W_,viewStateRef:i0,timelineRef:p_,appShellRef:w_,sidebarWidthRef:i,editorWidthRef:J0,dockHeightRef:Y_,lastNotifiedIdRef:N_,lastAgentResponseRef:h_,btwAbortRef:B1,lastActivityTimerRef:u_,lastActivityTokenRef:J1,brandingRef:C_,intentToastTimerRef:M_,renameBranchInFlightRef:A1,isRenamingBranch:z_,setIsRenamingBranch:k_,renameBranchLockUntilRef:F1,isRenameBranchFormOpen:v_,setIsRenameBranchFormOpen:r_,renameBranchNameDraft:s_,setRenameBranchNameDraft:H_,renameBranchDraftState:x1,renameBranchNameInputRef:U1}}T0();T0();function Fy(_,$,j,G){if(!(_ instanceof Map)||_.size===0||!$||!j)return _;let Z=!1,X=new Map;for(let[Y,L]of _.entries()){let K=Y;if(G==="dir"){if(Y===$)K=j,Z=!0;else if(Y.startsWith(`${$}/`))K=`${j}${Y.slice($.length)}`,Z=!0}else if(Y===$)K=j,Z=!0;X.set(K,L)}return Z?X:_}function EB(_,$,j,G){if(!(_ instanceof Set)||_.size===0||!$||!j)return _;let Z=!1,X=new Set;for(let Y of _.values()){let L=Y;if(G==="dir"){if(Y===$)L=j,Z=!0;else if(Y.startsWith(`${$}/`))L=`${j}${Y.slice($.length)}`,Z=!0}else if(Y===$)L=j,Z=!0;X.add(L)}return Z?X:_}function DB({onTabClosed:_}={}){let $=g(_);$.current=_;let[j,G]=C(()=>$_.getTabs()),[Z,X]=C(()=>$_.getActiveId()),[Y,L]=C(()=>$_.getTabs().length>0);u(()=>{return $_.onChange((x,P)=>{G(x),X(P),L(x.length>0)})},[]);let[K,q]=C(()=>new Set),[Q,V]=C(()=>new Set),[B,N]=C(()=>new Map),U=f((x)=>{q((P)=>{let S=new Set(P);if(S.has(x))S.delete(x);else S.add(x);return S})},[]),D=f((x)=>{q((P)=>{if(!P.has(x))return P;let S=new Set(P);return S.delete(x),S})},[]),E=f((x)=>{V((P)=>{if(!P.has(x))return P;let S=new Set(P);return S.delete(x),S})},[]),H=f((x)=>{N((P)=>{if(!P.has(x))return P;let S=new Map(P);return S.delete(x),S})},[]),M=f((x,P={})=>{if(!x)return;let S=typeof P?.paneOverrideId==="string"&&P.paneOverrideId.trim()?P.paneOverrideId.trim():null,v={path:x,mode:"edit"};try{if(!(S?L_.get(S):L_.resolve(v))){if(!L_.get("editor")){console.warn(`[openEditor] No pane handler for: ${x}`);return}}}catch(b){console.warn(`[openEditor] paneRegistry.resolve() error for "${x}":`,b)}let l=typeof P?.label==="string"&&P.label.trim()?P.label.trim():void 0,h=P?.viewState&&typeof P.viewState==="object"?P.viewState:null,r=P?.diffMode==="saved"?"saved":null;if($_.open(x,l),h)$_.saveViewState(x,h);if(S)N((b)=>{if(b.get(x)===S)return b;let e=new Map(b);return e.set(x,S),e});if(r==="saved")V((b)=>{if(b.has(x))return b;let e=new Set(b);return e.add(x),e})},[]),J=f(()=>{let x=$_.getActiveId();if(x){let P=$_.get(x);if(P?.dirty){if(!window.confirm(`"${P.label}" has unsaved changes. Close anyway?`))return}$_.close(x),D(x),E(x),H(x),$.current?.(x)}},[E,H,D]),O=f((x)=>{let P=$_.get(x);if(P?.dirty){if(!window.confirm(`"${P.label}" has unsaved changes. Close anyway?`))return}$_.close(x),D(x),E(x),H(x),$.current?.(x)},[E,H,D]),T=f((x)=>{$_.activate(x)},[]),I=f((x)=>{let P=$_.getTabs().filter((l)=>l.id!==x&&!l.pinned),S=P.filter((l)=>l.dirty).length;if(S>0){if(!window.confirm(`${S} unsaved tab${S>1?"s":""} will be closed. Continue?`))return}let v=P.map((l)=>l.id);$_.closeOthers(x),v.forEach((l)=>{D(l),E(l),H(l),$.current?.(l)})},[E,H,D]),A=f(()=>{let x=$_.getTabs().filter((v)=>!v.pinned),P=x.filter((v)=>v.dirty).length;if(P>0){if(!window.confirm(`${P} unsaved tab${P>1?"s":""} will be closed. Continue?`))return}let S=x.map((v)=>v.id);$_.closeAll(),S.forEach((v)=>{D(v),E(v),H(v),$.current?.(v)})},[E,H,D]),k=f((x)=>{$_.togglePin(x)},[]),z=f((x)=>{if(!x)return;V((P)=>{let S=new Set(P);if(S.has(x))S.delete(x);else S.add(x);return S}),$_.activate(x)},[]),W=f((x)=>{if(!x)return;N((P)=>{if(P.get(x)==="editor")return P;let S=new Map(P);return S.set(x,"editor"),S}),$_.activate(x)},[]),y=f(()=>{let x=$_.getActiveId();if(x)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:x}}))},[]);return u(()=>{let x=(P)=>{let{oldPath:S,newPath:v,type:l}=P.detail||{};if(!S||!v)return;if(l==="dir"){for(let h of $_.getTabs())if(h.path===S||h.path.startsWith(`${S}/`)){let r=`${v}${h.path.slice(S.length)}`;$_.rename(h.id,r)}}else $_.rename(S,v);q((h)=>EB(h,S,v,l)),V((h)=>EB(h,S,v,l)),N((h)=>Fy(h,S,v,l))};return window.addEventListener("workspace-file-renamed",x),()=>window.removeEventListener("workspace-file-renamed",x)},[]),u(()=>{let x=(P)=>{if($_.hasUnsaved())P.preventDefault(),P.returnValue=""};return window.addEventListener("beforeunload",x),()=>window.removeEventListener("beforeunload",x)},[]),{editorOpen:Y,tabStripTabs:j,tabStripActiveId:Z,previewTabs:K,diffTabs:Q,tabPaneOverrides:B,openEditor:M,closeEditor:J,handleTabClose:O,handleTabActivate:T,handleTabCloseOthers:I,handleTabCloseAll:A,handleTabTogglePin:k,handleTabTogglePreview:U,handleTabToggleDiff:z,handleTabEditSource:W,revealInExplorer:y}}T0();function a1(_){return typeof _==="string"&&_.trim()?_.trim():null}function Uy(_=globalThis){try{return typeof _?.crypto?.randomUUID==="function"?_.crypto.randomUUID():null}catch($){return null}}function u4(_="pane"){let $=Uy();if($)return`${_}-${$}`;return`${_}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}function WB(_){let $=a1(_?.paneInstanceId),j=a1(_?.paneWindowId);if(!$||!j)return{};let G=a1(_?.paneSourceWindowId);return{pane_instance_id:$,pane_window_id:j,...G?{pane_source_window_id:G}:{}}}function zB(_={}){let $=new URLSearchParams(_.search||"");return{panePath:a1($.get("pane_path"))||a1(_.panePath),paneLabel:a1($.get("pane_label"))||a1(_.paneLabel),paneInstanceId:a1($.get("pane_instance_id")),paneWindowId:a1($.get("pane_window_id")),paneSourceWindowId:a1($.get("pane_source_window_id"))}}function g4(_){return Boolean(_?.panePath&&_?.paneInstanceId&&_?.paneWindowId)}function t1(_){return typeof _==="string"&&_.trim()?_.trim():null}function OB(_){let $=t1(_?.panePath),j=t1(_?.paneInstanceId),G=t1(_?.ownerWindowId);if(!$||!j||!G)return null;let Z=t1(_?.now)||new Date().toISOString();return{panePath:$,paneInstanceId:j,ownerWindowId:G,detachedAt:Z,requestedAt:Z,label:t1(_?.label),sourceWindowId:t1(_?.sourceWindowId)}}function xj(_,$){if(!_||!$)return!1;return t1($.panePath)===_.panePath&&t1($.paneInstanceId)===_.paneInstanceId&&t1($.paneWindowId)===_.ownerWindowId}function Ij(_,$){if(!_)return null;return{panePath:_.panePath,paneInstanceId:_.paneInstanceId,ownerWindowId:_.ownerWindowId,detachedAt:t1($)||new Date().toISOString(),label:_.label||null}}function b8(_){try{return _?.close?.(),!0}catch($){return!1}}function Cj(_,$,j){try{return _?.postMessage?.($,j),!0}catch(G){return!1}}function Hy(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return!1;if(_.openTabIds?.has($))return!0;if(_.pendingDetachedTabPaths?.has?.($))return!0;if(_.detachedTabPaths?.has?.($))return!0;if($===_.terminalTabPath)return Boolean(_.hasPendingDetachedDockPane||_.hasDetachedDockPane);return!1}function JB(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return;let j=_?.sourceHost==="dock"?"dock":"tab";if($===_.terminalTabPath&&j==="dock"){_.setDockVisible?.(!1);return}_.closeTab?.($)}var Ey=400;function Dy(_){let $=Array.isArray(_?.changed_paths)?_.changed_paths.map((G)=>typeof G==="string"?G.trim():"").filter(Boolean):[];if($.length>0)return $;let j=typeof _?.path==="string"?_.path.trim():"";return j?[j]:["."]}function Wy(_,$){if(!_)return!1;if(!Array.isArray($)||$.length===0)return!0;return $.some((j)=>{return Dy(j).some((Z)=>Z==="."||Z===_)})}async function AB(_,$){if(typeof _?.afterAttachToHost!=="function")return;await _.afterAttachToHost($)}function zy(_=typeof document<"u"?document:null){if(!_)return!0;let $=typeof _.visibilityState==="string"?_.visibilityState:"";return!$||$==="visible"}function c8(_=typeof navigator<"u"?navigator:null){if(!_)return!1;let $=String(_.userAgent||""),j=String(_.vendor||""),G=/AppleWebKit/i.test($),Z=/Safari/i.test($),X=/Chrome|Chromium|CriOS|EdgiOS|EdgA|Edg\//i.test($),Y=/FxiOS/i.test($);return G&&(j.includes("Apple")||Z)&&!X&&!Y}function kB(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return!1;if($!==_.terminalTabPath)return!1;if((_?.reason==="message"?"message":"closed-window")==="closed-window")return!0;return _?.allowLiveTransfer===!1}function v8(_){if(!kB(_))return!1;return c8(_?.runtimeNavigator)}function m8(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$||$!==_?.terminalTabPath)return!1;return c8(_?.runtimeNavigator)}function S5(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return!1;return $!==_?.terminalTabPath}function Oy(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return null;let j=_?.runtime??globalThis,G=typeof _?.nowMs==="number"?_.nowMs:Date.now(),Z=typeof _?.paneInstanceId==="string"?_.paneInstanceId.trim():"",X=typeof _?.paneOverrideId==="string"?_.paneOverrideId.trim():"",Y=typeof _?.terminalTabPath==="string"?_.terminalTabPath:"piclaw://terminal",L=_?.allowLiveTransfer!==!1,K=_?.instance||null,q=typeof K?.exportHostTransferState==="function"?K.exportHostTransferState():null,Q=$===Y,V=q&&!Q?S8({path:$,payload:q},j,G):null,B=null;if($!==Y){let N=q&&typeof q==="object"?typeof q.mtime==="string"?q.mtime:q.mtime===null?null:void 0:void 0,U=typeof K?.isDirty==="function"?K.isDirty():!1,D=typeof K?.getContent==="function"?K.getContent():void 0;B=Z2({path:$,content:U?D:void 0,mtime:N,paneOverrideId:X||null,viewState:_?.viewState||null},j,G)}return{type:"piclaw-pane-reattach-request",panePath:$,...Z?{paneInstanceId:Z}:{},...B?.editor_popout?{editorPopoutToken:B.editor_popout}:{},...V?.pane_transfer?{paneTransferToken:V.pane_transfer}:{},...Q&&q?{paneTransferPayload:q}:{},...L?{}:{allowLiveTransfer:!1}}}function Jy(_){let $=typeof _?.payload?.panePath==="string"?_.payload.panePath.trim():"";if(!$)return null;let j=_?.runtime??globalThis,G=typeof _?.nowMs==="number"?_.nowMs:Date.now(),Z=typeof _?.payload?.paneInstanceId==="string"&&_.payload.paneInstanceId.trim()?_.payload.paneInstanceId.trim():null,X=typeof _?.payload?.editorPopoutToken==="string"?_.payload.editorPopoutToken.trim():"",Y=typeof _?.payload?.paneTransferToken==="string"?_.payload.paneTransferToken.trim():"",L=_?.payload?.paneTransferPayload&&typeof _.payload.paneTransferPayload==="object"&&!Array.isArray(_.payload.paneTransferPayload)?_.payload.paneTransferPayload:null,K=X?D3(X,j,G):null,q=L?{panePath:$,path:$,payload:L,capturedAt:G}:Y?Aj(Y,j,G):null;return{panePath:$,paneInstanceId:Z,editorTransfer:K?.path===$?K:null,hostTransfer:q?.path===$?q:null,allowLiveTransfer:_?.payload?.allowLiveTransfer!==!1}}function yB(_){let{panePopoutMode:$,panePopoutPath:j,panePopoutLabel:G,chatOnlyMode:Z,editorOpen:X,tabStripTabs:Y,tabStripActiveId:L,previewTabs:K,diffTabs:q,tabPaneOverrides:Q,terminalTabPath:V,vncTabPrefix:B,openEditor:N,closeEditor:U,getWorkspaceFile:D}=_,E=g(null),H=g(null),M=g(null),J=g(null),O=g((()=>{if(!$)return null;let s=_5("editor_popout");return D3(s)})()),T=g((()=>{if(!$)return null;return YN()})()),I=g(zB({search:typeof window<"u"?window.location.search:"",panePath:j,paneLabel:G})),A=g(I.current.paneWindowId||u4("pane-window")),k=g(new Map),z=g(new Map),W=g(new Map),y=g(new Map),x=g(!1),P=g(new Map),S=g(u4("pane-instance")),v=g(new Map),l=g(new Map),h=g(new Set),[r,b]=C(()=>new Map),e=g(r);e.current=r;let[z0,K0]=C(()=>new Map),q0=g(z0);q0.current=z0;let[X0,N0]=C(null),_0=g(X0);_0.current=X0;let[Z0,B0]=C(null),W0=g(Z0);W0.current=Z0;let d=L_.getDockPanes().length>0,[j0,A0]=C(!1),f0=f(()=>A0((s)=>!s),[]),b0=f(()=>{N(V,{label:"Terminal"})},[N,V]),c0=f(()=>{N(B,{label:"VNC"})},[N,B]),X_=f((s)=>{let o=typeof s==="string"?s.trim():"";if(!o)return u4("pane-instance");if(o===V&&!$_.get(o)){if(!S.current)S.current=u4("pane-instance");return S.current}let Y0=P.current.get(o);if(Y0)return Y0;let L0=u4("pane-instance");return P.current.set(o,L0),L0},[V]),l0=G0(()=>!$&&L?z0.get(L)||null:null,[z0,$,L]),__=!$?Z0:null,P0=f((s)=>{if(!s)return;LN(s),l.current.delete(s),h.current.delete(s),N0((o)=>o?.panePath===s?null:o),b((o)=>{if(!o.has(s))return o;let t=new Map(o);return t.delete(s),t})},[]),p0=f((s)=>{if(!s)return;v.current.delete(s),l.current.delete(s),h.current.delete(s),P0(s),B0((o)=>o?.panePath===s?null:o),K0((o)=>{if(!o.has(s))return o;let t=new Map(o);return t.delete(s),t})},[P0]),R0=f((s,o={})=>{let t=typeof s==="string"?s.trim():"";if(!t)return!1;if(m8({panePath:t,terminalTabPath:V}))return!1;let Y0=v.current.get(t),L0=Boolean(q0.current.get(t)),k0=Boolean(W0.current?.panePath===t);if(p0(t),t===V&&k0&&!L0)A0(!0);else if(t===V&&L0)N(t,{label:"Terminal"});else if($_.get(t))$_.activate(t);else N(t);if(o.closeDetachedWindow!==!1&&Y0&&typeof Y0.close==="function")b8(Y0);return!0},[p0,N,A0,V]),d0=f(()=>{if($)return;if(!zy())return;let s=Date.now();for(let[o,t]of l.current.entries()){if(t>s)continue;l.current.delete(o),R0(o,{closeDetachedWindow:!1})}},[$,R0]),r0=f((s,o={})=>{let t=typeof s==="string"?s.trim():"";if(!t)return!1;let Y0={panePath:t,terminalTabPath:V,allowLiveTransfer:o.allowLiveTransfer,reason:o.reason};if(v8(Y0))return v.current.delete(t),l.current.delete(t),h.current.add(t),!0;if(!kB(Y0))return R0(t,{closeDetachedWindow:!1});return l.current.set(t,Date.now()+Ey),d0(),!0},[d0,R0,V]),U_=f((s)=>{let o=typeof s==="string"?s.trim():"";if(!o)return null;let t=X_(o),Y0=u4("pane-window");return{paneInstanceId:t,paneWindowId:Y0,params:WB({paneInstanceId:t,paneWindowId:Y0,paneSourceWindowId:A.current})}},[X_]),o0=f((s,o,t,Y0)=>{let L0=typeof s==="string"?s.trim():"";if(!L0||!Y0)return;let k0=OB({panePath:L0,paneInstanceId:Y0.pane_instance_id,ownerWindowId:Y0.pane_window_id,sourceWindowId:Y0.pane_source_window_id,label:o});if(!k0)return;if(v.current.set(L0,t||null),L0===V&&!$_.get(L0)){N0(k0);return}b((g0)=>{let U0=new Map(g0);return U0.set(L0,k0),U0})},[V]),h0=f((s,o)=>{let t=typeof s?.panePath==="string"?s.panePath.trim():"";if(!t)return!1;let Y0=v.current.get(t);if(Y0&&o&&Y0!==o)return!1;let L0=e.current.get(t)||null;if(xj(L0,s)){let w0=H.current,j_=S5({panePath:t,terminalTabPath:V});if(j_&&w0&&typeof w0.moveHost==="function")R5({panePath:t,paneInstanceId:L0.paneInstanceId,paneWindowId:L0.ownerWindowId,instance:w0,releaseSourceHost:()=>{if(H.current===w0)H.current=null}});if(j_&&H.current)H.current=null;let u0=Ij(L0);if(!u0)return!1;return b((G_)=>{if(!G_.has(t))return G_;let q_=new Map(G_);return q_.delete(t),q_}),K0((G_)=>{let q_=new Map(G_);return q_.set(t,u0),q_}),JB({panePath:t,terminalTabPath:V,closeTab:(G_)=>$_.close(G_),sourceHost:"tab"}),!0}if(t!==V)return!1;let k0=_0.current,t0=J.current,g0=S5({panePath:t,terminalTabPath:V});if(g0&&k0&&t0&&typeof t0.moveHost==="function")R5({panePath:t,paneInstanceId:k0.paneInstanceId,paneWindowId:k0.ownerWindowId,instance:t0,releaseSourceHost:()=>{if(J.current===t0)J.current=null}});if(g0&&J.current)J.current=null;if(!xj(k0,s))return!1;let U0=Ij(k0);if(!U0)return!1;return N0(null),B0(U0),JB({panePath:t,terminalTabPath:V,setDockVisible:A0,sourceHost:"dock"}),!0},[A0,V]),y0=f((s=!1,o=!0)=>{if(!$)return!1;let t=I.current;if(!g4(t))return!1;if(typeof window>"u"||!window.opener||window.opener.closed)return!1;if(x.current){if(s)b8(window);return!0}let Y0=t.panePath||j,L0=Y0===V?J.current||H.current:H.current,k0=o&&S5({panePath:Y0,terminalTabPath:V}),t0=Oy({panePath:Y0,paneInstanceId:t.paneInstanceId,paneOverrideId:Y0===V?null:typeof Q?.get==="function"?Q.get(Y0)||null:null,terminalTabPath:V,viewState:Y0===V?null:$_.getViewState(Y0)||null,allowLiveTransfer:k0,instance:L0});if(!t0)return!1;if(k0&&t0.paneTransferToken&&typeof L0?.moveHost==="function"){if(J.current===L0)J.current=null;if(H.current===L0)H.current=null}if(!Cj(window.opener,t0,window.location.origin))return!1;if(x.current=!0,s)b8(window);return!0},[$,j,Q,V]),V_=f(()=>y0(!0,!0),[y0]);u(()=>{if(!$||typeof window>"u")return;let s=()=>{let o=I.current,t=g4(o)?o.panePath||j||"":"";if(v8({panePath:t,terminalTabPath:V,allowLiveTransfer:!1,reason:"closed-window"}))return;y0(!1,!1)};return window.addEventListener("pagehide",s),window.addEventListener("beforeunload",s),()=>{window.removeEventListener("pagehide",s),window.removeEventListener("beforeunload",s)}},[$,y0]);let s0=G0(()=>bK(Y,L),[L,Y]),O_=G0(()=>vK(Q,L),[Q,L]),E0=G0(()=>Xj(G,s0,j),[s0,G,j]),S0=G0(()=>L&&q.has(L)?"saved":null,[q,L]),I0=g(S0);u(()=>{I0.current=S0},[S0]);let a0=G0(()=>cK(Y,K,q,L),[q,K,L,Y]),A_=G0(()=>lK(j,B),[j,B]),Q_=G0(()=>hK(j,V,a0,A_),[A_,a0,j,V]),D_=nK($,Z,X,d,j0),[E_,y_]=C(!1),$0=g(!1),O0=f(()=>{if(!X||Z)return;if($0.current=j0,j0)A0(!1);y_(!0)},[Z,j0,X]),D0=f(()=>{if(!E_)return;if(y_(!1),$0.current)A0(!0),$0.current=!1},[E_]),v0=f(()=>{if(E_){D0();return}O0()},[O0,D0,E_]);u(()=>{if(E_&&!X)D0()},[X,D0,E_]),u(()=>{let s=new Set(Y.map((Y0)=>Y0.id)),o=new Set(e.current.keys()),t=new Set(q0.current.keys());for(let Y0 of Array.from(P.current.keys()))if(!Hy({panePath:Y0,openTabIds:s,pendingDetachedTabPaths:o,detachedTabPaths:t,terminalTabPath:V,hasPendingDetachedDockPane:Boolean(_0.current),hasDetachedDockPane:Boolean(W0.current)}))P.current.delete(Y0)},[Y,V]),u(()=>{if($||typeof window>"u")return;let s=(o)=>{if(o.origin!==window.location.origin)return;let t=o.data;if(!t||typeof t!=="object")return;if(t.type==="piclaw-pane-detach-claim"){h0({panePath:t.panePath,paneInstanceId:t.paneInstanceId,paneWindowId:t.paneWindowId},o.source);return}if(t.type!=="piclaw-pane-reattach-request")return;let Y0=Jy({payload:t}),L0=Y0?.panePath||"";if(!L0)return;if(Y0?.editorTransfer)k.current.set(L0,Y0.editorTransfer);if(Y0?.hostTransfer)if(z.current.set(L0,Y0.hostTransfer),Y0.allowLiveTransfer&&o.source)W.current.set(L0,o.source);else W.current.delete(L0);let k0=q0.current.get(L0)||null,t0=L0===V?W0.current:null,g0=S5({panePath:L0,terminalTabPath:V}),U0=k0||t0;if(!U0)return;if(Y0?.paneInstanceId&&Y0.paneInstanceId!==U0.paneInstanceId)return;if(m8({panePath:L0,terminalTabPath:V})){W.current.delete(L0),y.current.delete(L0),z.current.delete(L0),k.current.delete(L0);return}if(Y0?.hostTransfer&&Y0.allowLiveTransfer&&g0)y.current.set(L0,{panePath:L0,paneInstanceId:U0.paneInstanceId,paneWindowId:U0.ownerWindowId});else y.current.delete(L0);if(v8({panePath:L0,terminalTabPath:V,allowLiveTransfer:Y0?.allowLiveTransfer,reason:"message"})){W.current.delete(L0),v.current.delete(L0),l.current.delete(L0),h.current.add(L0);return}r0(L0,{allowLiveTransfer:Y0?.allowLiveTransfer,reason:"message"})};return window.addEventListener("message",s),()=>window.removeEventListener("message",s)},[h0,$,r0,V]),u(()=>{if($||typeof window>"u"||typeof document>"u")return;let s=()=>d0();window.addEventListener("focus",s),window.addEventListener("pageshow",s),document.addEventListener("visibilitychange",s);let o=setInterval(()=>{d0();for(let[t,Y0]of v.current.entries()){if(!Y0||!Y0.closed)continue;if(t===V?Boolean(_0.current):e.current.has(t)){v.current.delete(t),P0(t);continue}if(m8({panePath:t,terminalTabPath:V})){p0(t);continue}if(v8({panePath:t,terminalTabPath:V,allowLiveTransfer:!1,reason:"closed-window"})){v.current.delete(t),l.current.delete(t),h.current.add(t);continue}if(h.current.has(t)){v.current.delete(t);continue}r0(t,{allowLiveTransfer:!1,reason:"closed-window"})}},750);return()=>{window.removeEventListener("focus",s),window.removeEventListener("pageshow",s),document.removeEventListener("visibilitychange",s),clearInterval(o)}},[p0,P0,d0,$,r0,V]),u(()=>{if(!$||!j)return;if($_.getActiveId()===j)return;let o=O.current?.path===j?O.current:null,t=T.current?.path===j?T.current:null;N(j,{...G?{label:G}:{},...o?.paneOverrideId?{paneOverrideId:o.paneOverrideId}:{},...o?.viewState?{viewState:o.viewState}:{},...t?.payload?.diffMode?{diffMode:t.payload.diffMode}:{}})},[N,G,$,j]),u(()=>{if(!$)return;let s=I.current;if(!g4(s))return;if(typeof window>"u"||!window.opener||window.opener.closed)return;Cj(window.opener,{type:"piclaw-pane-detach-claim",panePath:s.panePath,paneInstanceId:s.paneInstanceId,paneWindowId:s.paneWindowId},window.location.origin)},[$]),u(()=>{let s=E.current;if(!s)return;if(H.current)H.current.dispose(),H.current=null;let o=L;if(!o)return;if(!$&&l0?.panePath===o){s.innerHTML="";return}let t=O.current?.path===o?O.current:null,Y0=k.current.get(o)||null,L0=t||Y0,k0=T.current?.path===o?T.current:null,t0=z.current.get(o)||null,g0=k0||t0,U0=O_||L0?.paneOverrideId||null,w0=g0?.payload?{...g0.payload}:null;if(I0.current)w0={...w0||{},diffMode:I0.current};else if(w0&&"diffMode"in w0)delete w0.diffMode;let j_={path:o,mode:"edit",...L0?.content!==void 0?{content:L0.content}:{},...L0?.mtime!==void 0?{mtime:L0.mtime}:{},...w0?{transferState:w0}:{}},u0=(U0?L_.get(U0):null)||L_.resolve(j_)||L_.get("editor");if(!u0){s.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let G_=null,q_=!1,W_=(i0)=>{G_=i0,H.current=i0,i0.onDirtyChange?.((i)=>{$_.setDirty(o,i)}),i0.onSaveRequest?.(()=>{}),i0.onClose?.(()=>{U()});let p_=$_.getViewState(o);if(p_&&typeof i0.restoreViewState==="function")requestAnimationFrame(()=>i0.restoreViewState(p_));if(typeof i0.onViewStateChange==="function")i0.onViewStateChange((i)=>{$_.saveViewState(o,i)});let w_=I.current;if($&&g4(w_)&&typeof i0?.moveHost==="function"&&S5({panePath:o,terminalTabPath:V}))R5({panePath:o,paneInstanceId:w_.paneInstanceId||"",paneWindowId:w_.paneWindowId||"",instance:i0,releaseSourceHost:()=>{if(J.current===i0)J.current=null;if(H.current===i0)H.current=null}});AB(i0,{path:o,hostMode:$?"popout":"main",transferState:w0}).catch((i)=>{console.warn("[pane-attach] afterAttachToHost failed:",i)}),requestAnimationFrame(()=>i0.focus?.())};return(async()=>{let i0=I.current,p_=$&&g4(i0)&&i0.panePath===o?{panePath:o,paneInstanceId:i0.paneInstanceId||"",paneWindowId:i0.paneWindowId||""}:null,w_=y.current.get(o)||null,i=S5({panePath:o,terminalTabPath:V})?p_||w_:null,J0=$?typeof window<"u"&&window.opener&&!window.opener.closed?window.opener:null:W.current.get(o)||null,Y_=$?"popout":"main";if(g0&&i&&J0)try{let N_=await qN(J0,i,s,{path:o,hostMode:Y_,transferState:w0});if(!q_&&N_){if(W_(N_),t)O.current=null;if(Y0)k.current.delete(o);if(k0)T.current=null;if(t0)z.current.delete(o);W.current.delete(o),y.current.delete(o);return}}catch(N_){console.warn("[pane-live-transfer] Failed to claim live pane instance:",N_)}if(q_)return;if(W_(u0.mount(s,j_)),t)O.current=null;if(Y0)k.current.delete(o);if(k0)T.current=null;if(t0)z.current.delete(o);W.current.delete(o),y.current.delete(o)})(),()=>{if(q_=!0,H.current===G_)G_.dispose(),H.current=null}},[l0,O_,U,$,L]),u(()=>{let s=L,o=H.current;if(!s||typeof o?.setDiffMode!=="function")return;o.setDiffMode(S0)},[S0,L]);let m0=f(async(s)=>{let o=typeof L==="string"?L.trim():"",t=H.current;if(!o||!t?.setContent)return;if(typeof t.isDirty==="function"&&t.isDirty())return;if(!Wy(o,s))return;try{let Y0=await D(o,1e6,"edit"),L0=typeof Y0?.text==="string"?Y0.text:"",k0=typeof Y0?.mtime==="string"&&Y0.mtime.trim()?Y0.mtime.trim():new Date().toISOString();t.setContent(L0,k0)}catch(Y0){console.warn("[workspace_update] Failed to refresh active pane:",Y0)}},[D,L]);return u(()=>{let s=M.current;if(J.current)J.current.dispose(),J.current=null;if(!s||!d||!j0)return;if(!$&&__?.panePath===V){s.innerHTML="";return}let o=L_.getDockPanes()[0];if(!o){s.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let t=T.current?.path===V?T.current:null,Y0=z.current.get(V)||null,L0=t||Y0,k0=o.mount(s,{mode:"view",...L0?.payload?{transferState:L0.payload}:{}});if(J.current=k0,AB(k0,{path:V,hostMode:$?"popout":"main",transferState:L0?.payload||null}).catch((t0)=>{console.warn("[pane-attach] afterAttachToHost failed:",t0)}),t)T.current=null;if(Y0)z.current.delete(V);return requestAnimationFrame(()=>k0.focus?.()),()=>{if(J.current===k0)k0.dispose(),J.current=null}},[__,j0,d,$,V]),{editorContainerRef:E,editorInstanceRef:H,dockContainerRef:M,dockInstanceRef:J,hasDockPanes:d,dockVisible:j0,setDockVisible:A0,toggleDock:f0,openTerminalTab:b0,openVncTab:c0,panePopoutTitle:E0,panePopoutHasMenuActions:a0,hidePanePopoutControls:Q_,showEditorPaneContainer:D_,zenMode:E_,exitZenMode:D0,toggleZenMode:v0,refreshActiveEditorFromWorkspace:m0,detachedTabs:z0,activeDetachedTab:l0,detachedDockPane:__,buildPaneDetachTransfer:U_,registerDetachedPaneWindow:o0,reattachPane:R0,requestPanePopoutReattach:V_,canReattachPanePopout:$&&g4(I.current)&&!m8({panePath:j||"",terminalTabPath:V})}}function Ay(_){return{removeFileRefRef:_.removeFileRefRef,editorState:_.editorState,paneRuntime:_.paneRuntime}}function MB(_){let $=g(null),j=DB({onTabClosed:(Z)=>$.current?.(Z)}),G=yB({panePopoutMode:_.panePopoutMode,panePopoutPath:_.panePopoutPath,panePopoutLabel:_.panePopoutLabel,chatOnlyMode:_.chatOnlyMode,editorOpen:j.editorOpen,tabStripTabs:j.tabStripTabs,tabStripActiveId:j.tabStripActiveId,previewTabs:j.previewTabs,diffTabs:j.diffTabs,tabPaneOverrides:j.tabPaneOverrides,terminalTabPath:_.terminalTabPath,vncTabPrefix:_.vncTabPrefix,openEditor:j.openEditor,closeEditor:j.closeEditor,getWorkspaceFile:_.getWorkspaceFile});return Ay({removeFileRefRef:$,editorState:j,paneRuntime:G})}f_();var h8=1280,n8=820;function l8(_){if(typeof _!=="number"||!Number.isFinite(_)||_<=0)return null;return _}function g6(_){return typeof _==="string"&&_.trim()?_.trim():null}function ky(_){let $=g6(_);if(!$)return!1;if($.startsWith("/")||$.startsWith("\\"))return!1;if($.includes("://"))return!1;if($==="."||$===".."||$.startsWith("../"))return!1;return!0}function yy(_){if(_.isMobile)return!1;let $=l8(_.windowWidth),j=l8(_.windowHeight);if($===null||j===null)return!1;if($<h8||j<n8)return!1;let G=l8(_.screenWidth),Z=l8(_.screenHeight);if(G!==null&&G<h8)return!1;if(Z!==null&&Z<n8)return!1;return!0}function My(_){let $=_?.navigator,j=String($?.userAgent||""),G=Number($?.maxTouchPoints||0);return(typeof _?.matchMedia==="function"?Boolean(_.matchMedia("(pointer: coarse)")?.matches):!1)||G>1||/Android|iPhone|iPad|iPod/i.test(j)}function wy(_){if(!_||_.kind!=="custom")return null;let $=g6(_.request_id),j=_.options&&typeof _.options==="object"?_.options:null;if(!$||!j||j.action!=="open_workspace_file")return null;let G=g6(j.path);if(!ky(G))return null;let Z=j.target==="tab"?"tab":"popout";return{requestId:$,chatJid:g6(_.chat_jid),path:G,label:g6(j.label),target:Z}}async function Ty(_,$,j){await F5(_,$,j||void 0)}async function wB(_,$){let j=wy(_?.detail?.payload);if(!j)return!1;if(j.chatJid&&j.chatJid!==$.currentChatJid)return!1;let G=$.respond||Ty,Z=$.windowObject||(typeof window<"u"?window:void 0),X={width:Number(Z?.innerWidth||0)||void 0,height:Number(Z?.innerHeight||0)||void 0},Y={width:h8,height:n8};if(j.target==="popout"){if(!yy({windowWidth:Z?.innerWidth,windowHeight:Z?.innerHeight,screenWidth:Z?.screen?.availWidth,screenHeight:Z?.screen?.availHeight,isMobile:My(Z)}))return $.showIntentToast?.("Editor popout unavailable",`Need at least ${h8}×${n8} viewport space for a separate editor window.`,"warning",4500),await G(j.requestId,{ok:!1,opened:!1,reason:"insufficient_screen_space",detail:"Browser viewport is too small for a separate editor window.",target:j.target,path:j.path,viewport:X,minimum_viewport:Y},j.chatJid),!0;let K=await $.popOutPane(j.path,j.label);return await G(j.requestId,{ok:K,opened:K,reason:K?void 0:"popout_failed",detail:K?void 0:"The browser blocked the editor popout window.",target:j.target,path:j.path},j.chatJid),!0}return $.openEditor(j.path),await G(j.requestId,{ok:!0,opened:!0,target:j.target,path:j.path},j.chatJid),!0}var fj="piclaw:oobe:provider-missing:dismissed";function xy(_){if(!_||typeof _!=="object")return 0;let $=Array.isArray(_.model_options)?_.model_options.filter(Boolean):[];if($.length>0)return $.length;return(Array.isArray(_.models)?_.models.filter((G)=>typeof G==="string"&&G.trim()):[]).length}function Iy(_){if(!_||typeof _!=="object")return!1;let $=_.current;return typeof $==="string"&&$.trim().length>0}function TB(_){let{panePopoutMode:$=!1,modelsLoaded:j,modelPayload:G,providerMissingDismissed:Z=!1}=_,X=xy(G),Y=X>0,L=Iy(G),K=Y||L;if($||!j)return{kind:"hidden",hasAvailableModels:Y,availableModelCount:X,hasConfiguredModelHint:L};if(K)return{kind:"hidden",hasAvailableModels:Y,availableModelCount:X,hasConfiguredModelHint:L};return{kind:Z?"hidden":"provider-missing",hasAvailableModels:Y,availableModelCount:X,hasConfiguredModelHint:L}}var Cy=PK();await iK();var{searchPosts:fy,deletePost:Py,getAgents:Ry,getAgentThought:xB,setAgentThoughtVisibility:IB,getAgentStatus:Sy,getAgentContext:uy,getAutoresearchStatus:gy,stopAutoresearch:by,dismissAutoresearch:vy,getAgentModels:my,getActiveChatAgents:cy,getChatBranches:ly,renameChatBranch:hy,pruneChatBranch:ny,purgeChatBranch:py,restoreChatBranch:ry,getAgentQueueState:dy,steerAgentQueueItem:iy,removeAgentQueueItem:oy,streamSidePrompt:sy,getWorkspaceFile:ay,getThread:ty,getTimeline:ey,sendAgentMessage:_M,forkChatBranch:$M,createRootChatSession:jM}=oK;function GM({locationParams:_,navigate:$}){let{currentChatJid:j,chatOnlyMode:G,panePopoutMode:Z,panePopoutPath:X,panePopoutLabel:Y,branchLoaderMode:L,branchLoaderSourceChatJid:K}=G0(()=>gK(_),[_]);u(()=>{if(typeof window>"u")return;window.__piclawCurrentChatJid=j,window.dispatchEvent?.(new CustomEvent("piclaw:current-chat-changed",{detail:{chatJid:j}}))},[j]);let q=HB({currentChatJid:j,branchLoaderMode:L}),[Q,V]=C(()=>F$(fj,!1)),[B,N]=C(null),U=f((P0)=>{let p0=typeof P0==="string"?P0:"";if(!p0.trim())return;N({token:`prefill-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`,text:p0})},[]),{agentStatus:D,setAgentStatus:E,agentDraft:H,setAgentDraft:M,agentPlan:J,setAgentPlan:O,agentThought:T,setAgentThought:I,pendingRequest:A,setPendingRequest:k,currentTurnId:z,setCurrentTurnId:W,steerQueuedTurnId:y,setSteerQueuedTurnId:x,lastAgentEventRef:P,lastSilenceNoticeRef:S,isAgentRunningRef:v,draftBufferRef:l,thoughtBufferRef:h,previewResyncPendingRef:r,previewResyncGenerationRef:b,pendingRequestRef:e,stalledPostIdRef:z0,currentTurnIdRef:K0,steerQueuedTurnIdRef:q0,thoughtExpandedRef:X0,draftExpandedRef:N0}=IX(),_0=MB({panePopoutMode:Z,panePopoutPath:X,panePopoutLabel:Y,chatOnlyMode:G,terminalTabPath:j5,vncTabPrefix:i1,getWorkspaceFile:ay}),Z0=dV({timelineRef:q.timelineRef,viewStateRef:q.viewStateRef,followupQueueRowIdsRef:q.followupQueueRowIdsRef,currentChatJid:j,currentHashtag:q.currentHashtag,searchQuery:q.searchQuery,followupQueueItems:q.followupQueueItems,onIdentity:f((P0)=>{if(!P0)return;let{assistant_name:p0,assistant_avatar_url:R0}=P0;if(p0||R0)q.setAgents((h0)=>{let y0=h0.default||{id:"default"},V_=p0&&!y0.name,s0=R0&&!y0.avatar_url;if(!V_&&!s0)return h0;return{...h0,["default"]:{...y0,...V_?{name:p0}:{},...s0?{avatar_url:R0}:{}}}});let{user_name:d0,user_avatar_url:r0,user_avatar_background:U_}=P0;if(d0||r0||U_)q.setUserProfile((o0)=>{let h0=d0&&!o0.name,y0=r0&&!o0.avatar_url,V_=U_&&!o0.avatar_background;if(!h0&&!y0&&!V_)return o0;return{...o0,...h0?{name:d0}:{},...y0?{avatar_url:r0}:{},...V_?{avatar_background:U_}:{}}})},[q.setAgents,q.setUserProfile])}),B0=PV({environment:{isRenameBranchFormOpen:q.isRenameBranchFormOpen,renameBranchNameInputRef:q.renameBranchNameInputRef,appShellRef:q.appShellRef,setIsWebAppMode:q.setIsWebAppMode,workspaceOpen:q.workspaceOpen,setWorkspaceOpen:q.setWorkspaceOpen,btwSession:q.btwSession,agents:q.agents,agentsRef:q.agentsRef,currentChatJid:j,activeChatJidRef:q.activeChatJidRef,userProfile:q.userProfile,userProfileRef:q.userProfileRef,brandingRef:q.brandingRef,panePopoutMode:Z},composeReferences:{setIntentToast:q.setIntentToast,intentToastTimerRef:q.intentToastTimerRef,editorOpen:_0.editorState.editorOpen,openEditor:_0.editorState.openEditor,resolvePane:(P0)=>L_.resolve(P0),tabStripActiveId:_0.editorState.tabStripActiveId,setFileRefs:q.setFileRefs,setFolderRefs:q.setFolderRefs,setMessageRefs:q.setMessageRefs,currentChatJid:j,currentHashtag:q.currentHashtag,searchQuery:q.searchQuery,searchOpen:q.searchOpen,setCurrentHashtag:q.setCurrentHashtag,setSearchQuery:q.setSearchQuery,setSearchOpen:q.setSearchOpen,navigate:$,chatOnlyMode:G,getThread:ty,setPosts:Z0.setPosts},agentActivity:{lastActivityTtlMs:lX,lastActivityTimerRef:q.lastActivityTimerRef,lastActivityTokenRef:q.lastActivityTokenRef,lastAgentEventRef:P,lastSilenceNoticeRef:S,isAgentRunningRef:v,setIsAgentTurnActive:q.setIsAgentTurnActive,setAgentStatus:E,draftBufferRef:l,thoughtBufferRef:h,pendingRequestRef:e,lastAgentResponseRef:q.lastAgentResponseRef,currentTurnIdRef:K0,steerQueuedTurnIdRef:q0,agentStatusRef:q.agentStatusRef,silentRecoveryRef:q.silentRecoveryRef,thoughtExpandedRef:X0,draftExpandedRef:N0,setCurrentTurnId:W,setSteerQueuedTurnId:x,currentTurnIdRefForPanel:K0,setAgentThoughtVisibility:IB,getAgentThought:xB,setAgentThought:I,setAgentDraft:M},chatPaneRuntime:{isAgentTurnActive:q.isAgentTurnActive,steerQueuedTurnId:y,currentTurnId:z,steerQueuedTurnIdRef:q0,setSteerQueuedTurnId:x,agentStatus:D,agentDraft:H,agentPlan:J,agentThought:T,pendingRequest:A,pendingRequestRef:e,followupQueueItems:q.followupQueueItems,activeModel:q.activeModel,activeThinkingLevel:q.activeThinkingLevel,supportsThinking:q.supportsThinking,activeModelUsage:q.activeModelUsage,contextUsage:q.contextUsage,isAgentRunningRef:v,wasAgentActiveRef:q.wasAgentActiveRef,draftBufferRef:l,thoughtBufferRef:h,lastAgentEventRef:P,lastSilenceNoticeRef:S,lastAgentResponseRef:q.lastAgentResponseRef,currentTurnIdRef:K0,thoughtExpandedRef:X0,draftExpandedRef:N0,agentStatusRef:q.agentStatusRef,silentRecoveryRef:q.silentRecoveryRef,setIsAgentTurnActive:q.setIsAgentTurnActive,setAgentStatus:E,setAgentDraft:M,setAgentPlan:O,setAgentThought:I,setPendingRequest:k,setCurrentTurnId:W,setFollowupQueueItems:q.setFollowupQueueItems,setActiveModel:q.setActiveModel,setActiveThinkingLevel:q.setActiveThinkingLevel,setSupportsThinking:q.setSupportsThinking,setActiveModelUsage:q.setActiveModelUsage,setContextUsage:q.setContextUsage,lastNotifiedIdRef:q.lastNotifiedIdRef,agentsRef:q.agentsRef,notify:q.notify,shouldNotifyLocallyForChat:q.shouldNotifyLocallyForChat},recovery:{isAgentRunningRef:v,lastSilenceNoticeRef:S,lastAgentEventRef:P,currentTurnIdRef:K0,thoughtExpandedRef:X0,draftExpandedRef:N0,draftBufferRef:l,thoughtBufferRef:h,pendingRequestRef:e,lastAgentResponseRef:q.lastAgentResponseRef,agentStatusRef:q.agentStatusRef,stalledPostIdRef:z0,scrollToBottomRef:Z0.scrollToBottomRef,setCurrentTurnId:W,setAgentDraft:M,setAgentPlan:O,setAgentThought:I,setPendingRequest:k,setAgentStatus:E,setPosts:Z0.setPosts,dedupePosts:U5},viewState:{viewStateRef:q.viewStateRef,currentHashtag:q.currentHashtag,searchQuery:q.searchQuery,searchOpen:q.searchOpen},removeFileRefRef:_0.removeFileRefRef}),W0=bX({appShellRef:q.appShellRef,sidebarWidthRef:q.sidebarWidthRef,editorWidthRef:q.editorWidthRef,dockHeightRef:q.dockHeightRef}),{chatRefreshLifecycle:d,timelineViewActions:j0,isComposeBoxAgentActive:A0,followupActions:f0,sidepanelActions:b0,branchPaneActions:c0}=XB({routeState:{currentChatJid:j,currentRootChatJid:q.currentRootChatJid,chatOnlyMode:G,navigate:$,branchLoaderMode:L,branchLoaderSourceChatJid:K,isWebAppMode:q.isWebAppMode},searchState:{currentHashtag:q.currentHashtag,setCurrentHashtag:q.setCurrentHashtag,searchQuery:q.searchQuery,setSearchQuery:q.setSearchQuery,searchOpen:q.searchOpen,setSearchOpen:q.setSearchOpen,searchScope:q.searchScope,setSearchScope:q.setSearchScope},shellState:{activeChatAgents:q.activeChatAgents,currentChatBranches:q.currentChatBranches,currentBranchRecord:q.currentBranchRecord,contextUsage:q.contextUsage,activeModel:q.activeModel,activeThinkingLevel:q.activeThinkingLevel,supportsThinking:q.supportsThinking,activeModelUsage:q.activeModelUsage,connectionStatus:q.connectionStatus,notificationsEnabled:q.notificationsEnabled,notificationPermission:q.notificationPermission,workspaceOpen:q.workspaceOpen,setWorkspaceOpen:q.setWorkspaceOpen,userProfile:q.userProfile,agents:q.agents,removingPostIds:q.removingPostIds,btwSession:q.btwSession},timeline:Z0,interaction:B0,paneRuntime:_0.paneRuntime,refs:{activeChatJidRef:q.activeChatJidRef,queueRefreshGenRef:q.queueRefreshGenRef,dismissedQueueRowIdsRef:q.dismissedQueueRowIdsRef,wasAgentActiveRef:q.wasAgentActiveRef,viewStateRef:q.viewStateRef,agentStatusRef:q.agentStatusRef,pendingRequestRef:e,thoughtBufferRef:h,draftBufferRef:l,previewResyncPendingRef:r,previewResyncGenerationRef:b,isAgentRunningRef:v,currentTurnIdRef:K0,silentRecoveryRef:q.silentRecoveryRef,lastAgentEventRef:P,lastSilenceNoticeRef:S,staleUiVersionRef:q.staleUiVersionRef,staleUiReloadScheduledRef:q.staleUiReloadScheduledRef,hasConnectedOnceRef:q.hasConnectedOnceRef,sidebarWidthRef:q.sidebarWidthRef,appShellRef:q.appShellRef,agentsRef:q.agentsRef,paneStateOwnerChatJidRef:q.paneStateOwnerChatJidRef,chatPaneStateByChatRef:q.chatPaneStateByChatRef,dismissedLiveWidgetKeysRef:q.dismissedLiveWidgetKeysRef,draftThrottleRef:q.draftThrottleRef,thoughtThrottleRef:q.thoughtThrottleRef,followupQueueItemsRef:q.followupQueueItemsRef,lastAgentResponseRef:q.lastAgentResponseRef,thoughtExpandedRef:X0,draftExpandedRef:N0,steerQueuedTurnIdRef:q0,btwAbortRef:q.btwAbortRef,renameBranchInFlightRef:q.renameBranchInFlightRef,renameBranchLockUntilRef:q.renameBranchLockUntilRef,editorWidthRef:q.editorWidthRef,dockHeightRef:q.dockHeightRef},setters:{setFollowupQueueItems:q.setFollowupQueueItems,setContextUsage:q.setContextUsage,setExtensionStatusPanels:q.setExtensionStatusPanels,setPendingExtensionPanelActions:q.setPendingExtensionPanelActions,setExtensionWorkingState:q.setExtensionWorkingState,setAgentStatus:E,setAgentDraft:M,setAgentPlan:O,setAgentThought:I,setPendingRequest:k,setConnectionStatus:q.setConnectionStatus,setStateAccessFailed:q.setStateAccessFailed,setAgents:q.setAgents,setUserProfile:q.setUserProfile,setActiveChatAgents:q.setActiveChatAgents,setCurrentChatBranches:q.setCurrentChatBranches,setActiveModel:q.setActiveModel,setActiveThinkingLevel:q.setActiveThinkingLevel,setSupportsThinking:q.setSupportsThinking,setActiveModelUsage:q.setActiveModelUsage,setAgentModelsPayload:q.setAgentModelsPayload,setHasLoadedAgentModels:q.setHasLoadedAgentModels,setHasMore:Z0.setHasMore,setFloatingWidget:q.setFloatingWidget,setSteerQueuedTurnId:x,setRemovingPostIds:q.setRemovingPostIds,setBtwSession:q.setBtwSession,setWorkspaceOpen:q.setWorkspaceOpen,setRenameBranchNameDraft:q.setRenameBranchNameDraft,setIsRenameBranchFormOpen:q.setIsRenameBranchFormOpen,setIsRenamingBranch:q.setIsRenamingBranch},services:{searchPosts:fy,deletePost:Py,getAgentQueueState:dy,getAgentContext:uy,getAutoresearchStatus:gy,getAgentStatus:Sy,getAgents:Ry,getAgentModels:my,getActiveChatAgents:cy,getChatBranches:ly,getTimeline:ey,stopAutoresearch:by,dismissAutoresearch:vy,streamSidePrompt:sy,sendAgentMessage:_M,renameChatBranch:hy,pruneChatBranch:ny,purgeChatBranch:py,restoreChatBranch:ry,forkChatBranch:$M,createRootChatSession:jM,steerAgentQueueItem:iy,removeAgentQueueItem:oy,getAgentThought:xB,setAgentThoughtVisibility:IB,silenceRefreshMs:cX,silenceWarningMs:vX,silenceFinalizeMs:mX,isCompactionStatus:W$,currentAppAssetVersion:Cy,tabStoreHasUnsaved:()=>$_.hasUnsaved(),agentStatus:D,isAgentTurnActive:q.isAgentTurnActive,openEditor:_0.editorState.openEditor,activateTab:_0.editorState.handleTabActivate,tabStripActiveId:_0.editorState.tabStripActiveId,terminalTabPath:j5,resolveTab:(P0)=>$_.get(P0),closeTab:_0.editorState.handleTabClose,editorOpen:_0.editorState.editorOpen},helpers:{getFormLock:RK,readStoredNumber:D4}});u(()=>{return GB({timelineRef:q.timelineRef,activeChatAgents:q.activeChatAgents,currentChatJid:j,onSwitch:(P0)=>c0.handleBranchPickerChange(P0),isIOSDevice:H6,isLikelySafari:c8})},[q.timelineRef,q.activeChatAgents,j,c0.handleBranchPickerChange]);let X_=G0(()=>TB({panePopoutMode:Z,modelsLoaded:q.hasLoadedAgentModels,modelPayload:q.agentModelsPayload,providerMissingDismissed:Q}),[Z,q.hasLoadedAgentModels,q.agentModelsPayload,Q]),l0=f(()=>{LL()},[]),__=f(()=>{V(!0),K_(fj,"true")},[]);return u(()=>{if(!Z||typeof document>"u")return;document.title=mK(Y,_0.paneRuntime.activePaneTab,X)},[_0.paneRuntime.activePaneTab,Y,Z,X]),u(()=>{if(typeof window>"u")return;let P0=(p0)=>{wB(p0,{currentChatJid:j,openEditor:_0.editorState.openEditor,popOutPane:c0.handlePopOutPane,showIntentToast:B0.composeReferenceActions.showIntentToast})};return window.addEventListener("piclaw-extension-ui:request",P0),()=>{window.removeEventListener("piclaw-extension-ui:request",P0)}},[c0.handlePopOutPane,j,B0.composeReferenceActions.showIntentToast,_0.editorState.openEditor]),IK(aK({routeState:{branchLoaderMode:L,panePopoutMode:Z,currentChatJid:j,chatOnlyMode:G,panePopoutPath:X},paneRuntime:_0.paneRuntime,splitters:W0,orchestration:{branchPaneActions:c0,timelineViewActions:j0,sidepanelActions:b0,followupActions:f0,chatRefreshLifecycle:d,isComposeBoxAgentActive:A0},interaction:B0,timeline:Z0,surface:{...q,oobePanelState:X_,composePrefillRequest:B,requestComposePrefill:U,handleOobeSetupProvider:l0,handleOobeShowModelPicker:l0,handleOobeOpenWorkspace:l0,handleDismissProviderMissingOobe:__},editorState:_0.editorState,agentState:{agentStatus:D,agentDraft:H,agentPlan:J,agentThought:T,pendingRequest:A,currentTurnId:z,steerQueuedTurnId:y,setPendingRequest:k,pendingRequestRef:e,isCompactionStatus:W$},helpers:{formatBranchPickerLabel:t2,isIOSDevice:H6,terminalTabPath:j5}}))}function ZM(){let{locationParams:_,navigate:$}=KL();return F`<${GM} locationParams=${_} navigate=${$} />`}var p8=document.getElementById("app");if(typeof window<"u")window.__PICLAW_APP_BOOTED__=!1;if(p8){if(Q$(null,p8),p8.replaceChildren(),Q$(F`<${ZM} />`,p8),typeof window<"u")window.__PICLAW_APP_BOOTED__=!0}

//# debugId=183086B0E101D8EF64756E2164756E21
//# sourceMappingURL=app.bundle.js.map
