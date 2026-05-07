var QF=Object.defineProperty;var NF=(_)=>_;function BF(_,$){this[_]=NF.bind(null,$)}var j1=(_,$)=>{for(var j in $)QF(_,j,{get:$[j],enumerable:!0,configurable:!0,set:BF.bind($,j)})};var J_=(_,$)=>()=>(_&&($=_(_=0)),$);var WG={};j1(WG,{useState:()=>C,useRef:()=>g,useReducer:()=>EG,useMemo:()=>Y0,useLayoutEffect:()=>j2,useImperativeHandle:()=>JF,useErrorBoundary:()=>yF,useEffect:()=>u,useDebugValue:()=>kF,useContext:()=>AF,useCallback:()=>R,render:()=>Q$,html:()=>F,h:()=>N3,createContext:()=>OF,Component:()=>p2});function q$(_,$){for(var j in $)_[j]=$[j];return _}function Q3(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function N3(_,$,j){var G,Z,X,Y={};for(X in $)X=="key"?G=$[X]:X=="ref"?Z=$[X]:Y[X]=$[X];if(arguments.length>2&&(Y.children=arguments.length>3?e5.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(X in _.defaultProps)Y[X]===void 0&&(Y[X]=_.defaultProps[X]);return i5(_,Y,G,Z,null)}function i5(_,$,j,G,Z){var X={type:_,props:$,key:j,ref:G,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:Z==null?++XG:Z,__i:-1,__u:0};return Z==null&&x_.vnode!=null&&x_.vnode(X),X}function $6(_){return _.children}function p2(_,$){this.props=_,this.context=$}function e4(_,$){if($==null)return _.__?e4(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?e4(_):null}function HF(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,G=[],Z=[],X=q$({},$);X.__v=$.__v+1,x_.vnode&&x_.vnode(X),B3(_.__P,X,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,G,j==null?e4($):j,!!(32&$.__u),Z),X.__v=$.__v,X.__.__k[X.__i]=X,BG(G,X,Z),$.__e=$.__=null,X.__e!=j&&qG(X)}}function qG(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),qG(_)}function L3(_){(!_.__d&&(_.__d=!0)&&b$.push(_)&&!t5.__r++||dj!=x_.debounceRendering)&&((dj=x_.debounceRendering)||YG)(t5)}function t5(){try{for(var _,$=1;b$.length;)b$.length>$&&b$.sort(LG),_=b$.shift(),$=b$.length,HF(_)}finally{b$.length=t5.__r=0}}function QG(_,$,j,G,Z,X,Y,L,V,K,Q){var q,B,N,U,E,D,H,k=G&&G.__k||a5,O=$.length;for(V=EF(j,$,k,V,O),q=0;q<O;q++)(N=j.__k[q])!=null&&(B=N.__i!=-1&&k[N.__i]||s5,N.__i=q,D=B3(_,N,B,Z,X,Y,L,V,K,Q),U=N.__e,N.ref&&B.ref!=N.ref&&(B.ref&&F3(B.ref,null,N),Q.push(N.ref,N.__c||U,N)),E==null&&U!=null&&(E=U),(H=!!(4&N.__u))||B.__k===N.__k?(V=NG(N,V,_,H),H&&B.__e&&(B.__e=null)):typeof N.type=="function"&&D!==void 0?V=D:U&&(V=U.nextSibling),N.__u&=-7);return j.__e=E,V}function EF(_,$,j,G,Z){var X,Y,L,V,K,Q=j.length,q=Q,B=0;for(_.__k=Array(Z),X=0;X<Z;X++)(Y=$[X])!=null&&typeof Y!="boolean"&&typeof Y!="function"?(typeof Y=="string"||typeof Y=="number"||typeof Y=="bigint"||Y.constructor==String?Y=_.__k[X]=i5(null,Y,null,null,null):_6(Y)?Y=_.__k[X]=i5($6,{children:Y},null,null,null):Y.constructor===void 0&&Y.__b>0?Y=_.__k[X]=i5(Y.type,Y.props,Y.key,Y.ref?Y.ref:null,Y.__v):_.__k[X]=Y,V=X+B,Y.__=_,Y.__b=_.__b+1,L=null,(K=Y.__i=DF(Y,j,V,q))!=-1&&(q--,(L=j[K])&&(L.__u|=2)),L==null||L.__v==null?(K==-1&&(Z>Q?B--:Z<Q&&B++),typeof Y.type!="function"&&(Y.__u|=4)):K!=V&&(K==V-1?B--:K==V+1?B++:(K>V?B--:B++,Y.__u|=4))):_.__k[X]=null;if(q)for(X=0;X<Q;X++)(L=j[X])!=null&&(2&L.__u)==0&&(L.__e==G&&(G=e4(L)),UG(L,L));return G}function NG(_,$,j,G){var Z,X;if(typeof _.type=="function"){for(Z=_.__k,X=0;Z&&X<Z.length;X++)Z[X]&&(Z[X].__=_,$=NG(Z[X],$,j,G));return $}_.__e!=$&&(G&&($&&_.type&&!$.parentNode&&($=e4(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function DF(_,$,j,G){var Z,X,Y,L=_.key,V=_.type,K=$[j],Q=K!=null&&(2&K.__u)==0;if(K===null&&L==null||Q&&L==K.key&&V==K.type)return j;if(G>(Q?1:0)){for(Z=j-1,X=j+1;Z>=0||X<$.length;)if((K=$[Y=Z>=0?Z--:X++])!=null&&(2&K.__u)==0&&L==K.key&&V==K.type)return Y}return-1}function ij(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||UF.test($)?j:j+"px"}function n5(_,$,j,G,Z){var X,Y;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof G=="string"&&(_.style.cssText=G=""),G)for($ in G)j&&$ in j||ij(_.style,$,"");if(j)for($ in j)G&&j[$]==G[$]||ij(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")X=$!=($=$.replace(KG,"$1")),Y=$.toLowerCase(),$=Y in _||$=="onFocusOut"||$=="onFocusIn"?Y.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+X]=j,j?G?j[r2]=G[r2]:(j[r2]=q3,_.addEventListener($,X?Y3:X3,X)):_.removeEventListener($,X?Y3:X3,X);else{if(Z=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(L){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function oj(_){return function($){if(this.l){var j=this.l[$.type+_];if($[d5]==null)$[d5]=q3++;else if($[d5]<j[r2])return;return j(x_.event?x_.event($):$)}}}function B3(_,$,j,G,Z,X,Y,L,V,K){var Q,q,B,N,U,E,D,H,k,O,W,I,x,J,A,z=$.type;if($.constructor!==void 0)return null;128&j.__u&&(V=!!(32&j.__u),X=[L=$.__e=j.__e]),(Q=x_.__b)&&Q($);_:if(typeof z=="function")try{if(H=$.props,k=z.prototype&&z.prototype.render,O=(Q=z.contextType)&&G[Q.__c],W=Q?O?O.props.value:Q.__:G,j.__c?D=(q=$.__c=j.__c).__=q.__E:(k?$.__c=q=new z(H,W):($.__c=q=new p2(H,W),q.constructor=z,q.render=WF),O&&O.sub(q),q.state||(q.state={}),q.__n=G,B=q.__d=!0,q.__h=[],q._sb=[]),k&&q.__s==null&&(q.__s=q.state),k&&z.getDerivedStateFromProps!=null&&(q.__s==q.state&&(q.__s=q$({},q.__s)),q$(q.__s,z.getDerivedStateFromProps(H,q.__s))),N=q.props,U=q.state,q.__v=$,B)k&&z.getDerivedStateFromProps==null&&q.componentWillMount!=null&&q.componentWillMount(),k&&q.componentDidMount!=null&&q.__h.push(q.componentDidMount);else{if(k&&z.getDerivedStateFromProps==null&&H!==N&&q.componentWillReceiveProps!=null&&q.componentWillReceiveProps(H,W),$.__v==j.__v||!q.__e&&q.shouldComponentUpdate!=null&&q.shouldComponentUpdate(H,q.__s,W)===!1){$.__v!=j.__v&&(q.props=H,q.state=q.__s,q.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(T){T&&(T.__=$)}),a5.push.apply(q.__h,q._sb),q._sb=[],q.__h.length&&Y.push(q);break _}q.componentWillUpdate!=null&&q.componentWillUpdate(H,q.__s,W),k&&q.componentDidUpdate!=null&&q.__h.push(function(){q.componentDidUpdate(N,U,E)})}if(q.context=W,q.props=H,q.__P=_,q.__e=!1,I=x_.__r,x=0,k)q.state=q.__s,q.__d=!1,I&&I($),Q=q.render(q.props,q.state,q.context),a5.push.apply(q.__h,q._sb),q._sb=[];else do q.__d=!1,I&&I($),Q=q.render(q.props,q.state,q.context),q.state=q.__s;while(q.__d&&++x<25);q.state=q.__s,q.getChildContext!=null&&(G=q$(q$({},G),q.getChildContext())),k&&!B&&q.getSnapshotBeforeUpdate!=null&&(E=q.getSnapshotBeforeUpdate(N,U)),J=Q!=null&&Q.type===$6&&Q.key==null?FG(Q.props.children):Q,L=QG(_,_6(J)?J:[J],$,j,G,Z,X,Y,L,V,K),q.base=$.__e,$.__u&=-161,q.__h.length&&Y.push(q),D&&(q.__E=q.__=null)}catch(T){if($.__v=null,V||X!=null)if(T.then){for($.__u|=V?160:128;L&&L.nodeType==8&&L.nextSibling;)L=L.nextSibling;X[X.indexOf(L)]=null,$.__e=L}else{for(A=X.length;A--;)Q3(X[A]);K3($)}else $.__e=j.__e,$.__k=j.__k,T.then||K3($);x_.__e(T,$,j)}else X==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):L=$.__e=zF(j.__e,$,j,G,Z,X,Y,V,K);return(Q=x_.diffed)&&Q($),128&$.__u?void 0:L}function K3(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(K3))}function BG(_,$,j){for(var G=0;G<j.length;G++)F3(j[G],j[++G],j[++G]);x_.__c&&x_.__c($,_),_.some(function(Z){try{_=Z.__h,Z.__h=[],_.some(function(X){X.call(Z)})}catch(X){x_.__e(X,Z.__v)}})}function FG(_){return typeof _!="object"||_==null||_.__b>0?_:_6(_)?_.map(FG):q$({},_)}function zF(_,$,j,G,Z,X,Y,L,V){var K,Q,q,B,N,U,E,D=j.props||s5,H=$.props,k=$.type;if(k=="svg"?Z="http://www.w3.org/2000/svg":k=="math"?Z="http://www.w3.org/1998/Math/MathML":Z||(Z="http://www.w3.org/1999/xhtml"),X!=null){for(K=0;K<X.length;K++)if((N=X[K])&&"setAttribute"in N==!!k&&(k?N.localName==k:N.nodeType==3)){_=N,X[K]=null;break}}if(_==null){if(k==null)return document.createTextNode(H);_=document.createElementNS(Z,k,H.is&&H),L&&(x_.__m&&x_.__m($,X),L=!1),X=null}if(k==null)D===H||L&&_.data==H||(_.data=H);else{if(X=X&&e5.call(_.childNodes),!L&&X!=null)for(D={},K=0;K<_.attributes.length;K++)D[(N=_.attributes[K]).name]=N.value;for(K in D)N=D[K],K=="dangerouslySetInnerHTML"?q=N:K=="children"||(K in H)||K=="value"&&("defaultValue"in H)||K=="checked"&&("defaultChecked"in H)||n5(_,K,null,N,Z);for(K in H)N=H[K],K=="children"?B=N:K=="dangerouslySetInnerHTML"?Q=N:K=="value"?U=N:K=="checked"?E=N:L&&typeof N!="function"||D[K]===N||n5(_,K,N,D[K],Z);if(Q)L||q&&(Q.__html==q.__html||Q.__html==_.innerHTML)||(_.innerHTML=Q.__html),$.__k=[];else if(q&&(_.innerHTML=""),QG($.type=="template"?_.content:_,_6(B)?B:[B],$,j,G,k=="foreignObject"?"http://www.w3.org/1999/xhtml":Z,X,Y,X?X[0]:j.__k&&e4(j,0),L,V),X!=null)for(K=X.length;K--;)Q3(X[K]);L||(K="value",k=="progress"&&U==null?_.removeAttribute("value"):U!=null&&(U!==_[K]||k=="progress"&&!U||k=="option"&&U!=D[K])&&n5(_,K,U,D[K],Z),K="checked",E!=null&&E!=_[K]&&n5(_,K,E,D[K],Z))}return _}function F3(_,$,j){try{if(typeof _=="function"){var G=typeof _.__u=="function";G&&_.__u(),G&&$==null||(_.__u=_($))}else _.current=$}catch(Z){x_.__e(Z,j)}}function UG(_,$,j){var G,Z;if(x_.unmount&&x_.unmount(_),(G=_.ref)&&(G.current&&G.current!=_.__e||F3(G,null,$)),(G=_.__c)!=null){if(G.componentWillUnmount)try{G.componentWillUnmount()}catch(X){x_.__e(X,$)}G.base=G.__P=null}if(G=_.__k)for(Z=0;Z<G.length;Z++)G[Z]&&UG(G[Z],$,j||typeof _.type!="function");j||Q3(_.__e),_.__c=_.__=_.__e=void 0}function WF(_,$,j){return this.constructor(_,j)}function Q$(_,$,j){var G,Z,X,Y;$==document&&($=document.documentElement),x_.__&&x_.__(_,$),Z=(G=typeof j=="function")?null:j&&j.__k||$.__k,X=[],Y=[],B3($,_=(!G&&j||$).__k=N3($6,null,[_]),Z||s5,s5,$.namespaceURI,!G&&j?[j]:Z?null:$.firstChild?e5.call($.childNodes):null,X,!G&&j?j:Z?Z.__e:$.firstChild,G,Y),BG(X,_,Y)}function OF(_){function $(j){var G,Z;return this.getChildContext||(G=new Set,(Z={})[$.__c]=this,this.getChildContext=function(){return Z},this.componentWillUnmount=function(){G=null},this.shouldComponentUpdate=function(X){this.props.value!=X.value&&G.forEach(function(Y){Y.__e=!0,L3(Y)})},this.sub=function(X){G.add(X);var Y=X.componentWillUnmount;X.componentWillUnmount=function(){G&&G.delete(X),Y&&Y.call(X)}}),j.children}return $.__c="__cC"+VG++,$.__=_,$.Provider=$.__l=($.Consumer=function(j,G){return j.children(G)}).contextType=$,$}function $2(_,$){S_.__h&&S_.__h(T_,_,_2||$),_2=0;var j=T_.__H||(T_.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function C(_){return _2=1,EG(DG,_)}function EG(_,$,j){var G=$2(v$++,2);if(G.t=_,!G.__c&&(G.__=[j?j($):DG(void 0,$),function(L){var V=G.__N?G.__N[0]:G.__[0],K=G.t(V,L);V!==K&&(G.__N=[K,G.__[1]],G.__c.setState({}))}],G.__c=T_,!T_.__f)){var Z=function(L,V,K){if(!G.__c.__H)return!0;var Q=G.__c.__H.__.filter(function(B){return B.__c});if(Q.every(function(B){return!B.__N}))return!X||X.call(this,L,V,K);var q=G.__c.props!==L;return Q.some(function(B){if(B.__N){var N=B.__[0];B.__=B.__N,B.__N=void 0,N!==B.__[0]&&(q=!0)}}),X&&X.call(this,L,V,K)||q};T_.__f=!0;var{shouldComponentUpdate:X,componentWillUpdate:Y}=T_;T_.componentWillUpdate=function(L,V,K){if(this.__e){var Q=X;X=void 0,Z(L,V,K),X=Q}Y&&Y.call(this,L,V,K)},T_.shouldComponentUpdate=Z}return G.__N||G.__}function u(_,$){var j=$2(v$++,3);!S_.__s&&U3(j.__H,$)&&(j.__=_,j.u=$,T_.__H.__h.push(j))}function j2(_,$){var j=$2(v$++,4);!S_.__s&&U3(j.__H,$)&&(j.__=_,j.u=$,T_.__h.push(j))}function g(_){return _2=5,Y0(function(){return{current:_}},[])}function JF(_,$,j){_2=6,j2(function(){if(typeof _=="function"){var G=_($());return function(){_(null),G&&typeof G=="function"&&G()}}if(_)return _.current=$(),function(){return _.current=null}},j==null?j:j.concat(_))}function Y0(_,$){var j=$2(v$++,7);return U3(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function R(_,$){return _2=8,Y0(function(){return _},$)}function AF(_){var $=T_.context[_.__c],j=$2(v$++,9);return j.c=_,$?(j.__==null&&(j.__=!0,$.sub(T_)),$.props.value):_.__}function kF(_,$){S_.useDebugValue&&S_.useDebugValue($?$(_):_)}function yF(_){var $=$2(v$++,10),j=C();return $.__=_,T_.componentDidCatch||(T_.componentDidCatch=function(G,Z){$.__&&$.__(G,Z),j[1](G)}),[j[0],function(){j[1](void 0)}]}function MF(){for(var _;_=HG.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(o5),$.__h.some(V3),$.__h=[]}catch(j){$.__h=[],S_.__e(j,_.__v)}}}function wF(_){var $,j=function(){clearTimeout(G),GG&&cancelAnimationFrame($),setTimeout(_)},G=setTimeout(j,35);GG&&($=requestAnimationFrame(j))}function o5(_){var $=T_,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),T_=$}function V3(_){var $=T_;_.__c=_.__(),T_=$}function U3(_,$){return!_||_.length!==$.length||$.some(function(j,G){return j!==_[G]})}function DG(_,$){return typeof $=="function"?$(_):$}function TF(_){var $=ZG.get(this);return $||($=new Map,ZG.set(this,$)),($=zG(this,$.get(_)||($.set(_,$=function(j){for(var G,Z,X=1,Y="",L="",V=[0],K=function(B){X===1&&(B||(Y=Y.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?V.push(0,B,Y):X===3&&(B||Y)?(V.push(3,B,Y),X=2):X===2&&Y==="..."&&B?V.push(4,B,0):X===2&&Y&&!B?V.push(5,0,!0,Y):X>=5&&((Y||!B&&X===5)&&(V.push(X,0,Y,Z),X=6),B&&(V.push(X,B,0,Z),X=6)),Y=""},Q=0;Q<j.length;Q++){Q&&(X===1&&K(),K(Q));for(var q=0;q<j[Q].length;q++)G=j[Q][q],X===1?G==="<"?(K(),V=[V],X=3):Y+=G:X===4?Y==="--"&&G===">"?(X=1,Y=""):Y=G+Y[0]:L?G===L?L="":Y+=G:G==='"'||G==="'"?L=G:G===">"?(K(),X=1):X&&(G==="="?(X=5,Z=Y,Y=""):G==="/"&&(X<5||j[Q][q+1]===">")?(K(),X===3&&(V=V[0]),X=V,(V=V[0]).push(2,0,X),X=0):G===" "||G==="\t"||G===`
`||G==="\r"?(K(),X=2):Y+=G),X===3&&Y==="!--"&&(X=4,V=V[0])}return K(),V}(_)),$),arguments,[])).length>1?$:$[0]}var e5,x_,XG,FF,b$,dj,YG,LG,G3,d5,r2,KG,q3,X3,Y3,VG,s5,a5,UF,_6,v$,T_,Z3,sj,_2=0,HG,S_,aj,tj,ej,_G,$G,jG,GG,zG=function(_,$,j,G){var Z;$[0]=0;for(var X=1;X<$.length;X++){var Y=$[X++],L=$[X]?($[0]|=Y?1:2,j[$[X++]]):$[++X];Y===3?G[0]=L:Y===4?G[1]=Object.assign(G[1]||{},L):Y===5?(G[1]=G[1]||{})[$[++X]]=L:Y===6?G[1][$[++X]]+=L+"":Y?(Z=_.apply(L,zG(_,L,j,["",null])),G.push(Z),L[0]?$[0]|=2:($[X-2]=0,$[X]=Z)):G.push(L)}return G},ZG,F;var M0=J_(()=>{s5={},a5=[],UF=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,_6=Array.isArray;e5=a5.slice,x_={__e:function(_,$,j,G){for(var Z,X,Y;$=$.__;)if((Z=$.__c)&&!Z.__)try{if((X=Z.constructor)&&X.getDerivedStateFromError!=null&&(Z.setState(X.getDerivedStateFromError(_)),Y=Z.__d),Z.componentDidCatch!=null&&(Z.componentDidCatch(_,G||{}),Y=Z.__d),Y)return Z.__E=Z}catch(L){_=L}throw _}},XG=0,FF=function(_){return _!=null&&_.constructor===void 0},p2.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=q$({},this.state),typeof _=="function"&&(_=_(q$({},j),this.props)),_&&q$(j,_),_!=null&&this.__v&&($&&this._sb.push($),L3(this))},p2.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),L3(this))},p2.prototype.render=$6,b$=[],YG=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,LG=function(_,$){return _.__v.__b-$.__v.__b},t5.__r=0,G3=Math.random().toString(8),d5="__d"+G3,r2="__a"+G3,KG=/(PointerCapture)$|Capture$/i,q3=0,X3=oj(!1),Y3=oj(!0),VG=0;HG=[],S_=x_,aj=S_.__b,tj=S_.__r,ej=S_.diffed,_G=S_.__c,$G=S_.unmount,jG=S_.__;S_.__b=function(_){T_=null,aj&&aj(_)},S_.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),jG&&jG(_,$)},S_.__r=function(_){tj&&tj(_),v$=0;var $=(T_=_.__c).__H;$&&(Z3===T_?($.__h=[],T_.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(o5),$.__h.some(V3),$.__h=[],v$=0)),Z3=T_},S_.diffed=function(_){ej&&ej(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(HG.push($)!==1&&sj===S_.requestAnimationFrame||((sj=S_.requestAnimationFrame)||wF)(MF)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),Z3=T_=null},S_.__c=function(_,$){$.some(function(j){try{j.__h.some(o5),j.__h=j.__h.filter(function(G){return!G.__||V3(G)})}catch(G){$.some(function(Z){Z.__h&&(Z.__h=[])}),$=[],S_.__e(G,j.__v)}}),_G&&_G(_,$)},S_.unmount=function(_){$G&&$G(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(G){try{o5(G)}catch(Z){$=Z}}),j.__H=void 0,$&&S_.__e($,j.__v))};GG=typeof requestAnimationFrame=="function";ZG=new Map;F=TF.bind(N3)});function z1(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function V_(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{return}}function F$(_,$=!1){let j=z1(_);if(j===null)return $;return j==="true"}function z4(_,$=null){let j=z1(_);if(j===null)return $;let G=parseInt(j,10);return Number.isFinite(G)?G:$}function U6(_){let $=z1(_);if(!$)return null;try{return JSON.parse($)}catch{return null}}function e3(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function cZ(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let G=j.length===3?j.split("").map((X)=>X+X).join(""):j,Z=parseInt(G,16);return{r:Z>>16&255,g:Z>>8&255,b:Z&255,hex:`#${G.toLowerCase()}`}}function mH(_,$){try{if(document.body){_.style.display="none",document.body.appendChild(_);let j=getComputedStyle(_).color||_.style.color;return document.body.removeChild(_),j}}catch{return $}return $}function cH(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=mH(j,j.style.color).match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!Z)return null;let X=parseInt(Z[1],10),Y=parseInt(Z[2],10),L=parseInt(Z[3],10);if(![X,Y,L].every((K)=>Number.isFinite(K)))return null;let V=`#${[X,Y,L].map((K)=>K.toString(16).padStart(2,"0")).join("")}`;return{r:X,g:Y,b:L,hex:V}}function W4(_){return cZ(_)||cH(_)}function _7(_,$,j){let G=Math.round(_.r+($.r-_.r)*j),Z=Math.round(_.g+($.g-_.g)*j),X=Math.round(_.b+($.b-_.b)*j);return`rgb(${G} ${Z} ${X})`}function H6(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function lH(_){let $=_.r/255,j=_.g/255,G=_.b/255,Z=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),X=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),Y=G<=0.03928?G/12.92:Math.pow((G+0.055)/1.055,2.4);return 0.2126*Z+0.7152*X+0.0722*Y}function hH(_){return lH(_)>0.4?"#000000":"#ffffff"}function lZ(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function $7(_){return bZ[_]||bZ.default}function rH(_){return _.mode==="auto"?lZ():_.mode}function hZ(_,$){let j=$7(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||H$}function U$(_,$,j){let G=W4(_);if(!G)return _;return _7(G,$,j)}function rZ(_,$,j){let G=W4($);if(!G)return _;let X=cZ(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:U$(_.bgPrimary,G,0.08),bgSecondary:U$(_.bgSecondary,G,0.12),bgHover:U$(_.bgHover,G,0.16),textPrimary:U$(_.textPrimary,G,j==="dark"?0.08:0.06),textSecondary:U$(_.textSecondary,G,j==="dark"?0.12:0.1),borderColor:U$(_.borderColor,G,0.1),accent:G.hex,accentHover:X?_7(G,X,0.18):G.hex,warning:U$(_.warning||H$.warning,G,0.14),danger:U$(_.danger,G,0.16),success:U$(_.success,G,0.16)}}function pH(_,$){let j=W4(_?.warning);if(j)return j.hex;let G=W4($==="dark"?z6.warning:H$.warning)||W4(H$.warning),Z=W4(_?.accent);if(G&&Z)return _7(G,Z,$==="dark"?0.18:0.14);return $==="dark"?z6.warning:H$.warning}function nH(_,$){if(typeof document>"u")return;let j=document.documentElement,G=_.accent,Z=W4(G),X=Z?H6(Z,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,Y=Z?H6(Z,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",L=Z?H6(Z,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",V=Z?hH(Z):$==="dark"?"#000000":"#ffffff",K=Z?H6(Z,$==="dark"?0.35:0.25):"rgba(29, 155, 240, 0.25)",Q=pH(_,$),q={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":G,"--accent-hover":_.accentHover||G,"--accent-color-alpha":K,"--accent-soft":Y,"--accent-soft-strong":L,"--accent-contrast-text":V,"--warning-color":Q,"--danger-color":_.danger||H$.danger,"--success-color":_.success||H$.success,"--search-highlight-color":X||"rgba(29, 155, 240, 0.2)"};Object.entries(q).forEach(([B,N])=>{if(N)j.style.setProperty(B,N)})}function dH(){if(typeof document>"u")return;let _=document.documentElement;vH.forEach(($)=>_.style.removeProperty($))}function B2(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,G=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!G)G=document.createElement("meta"),document.head.appendChild(G);if(G.setAttribute("name",_),j)G.setAttribute("id",j);return G}function vZ(_){let $=e3(O4?.theme||"default"),j=O4?.tint?String(O4.tint).trim():null,G=hZ($,_);if($==="default"&&j)G=rZ(G,j,_);if(G?.bgPrimary)return G.bgPrimary;return _==="dark"?z6.bgPrimary:H$.bgPrimary}function iH(_,$){if(typeof document>"u")return;let j=B2("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let G=B2("theme-color",{id:"theme-color-light"});if(G)G.setAttribute("media","(prefers-color-scheme: light)"),G.setAttribute("content",vZ("light"));let Z=B2("theme-color",{id:"theme-color-dark"});if(Z)Z.setAttribute("media","(prefers-color-scheme: dark)"),Z.setAttribute("content",vZ("dark"));let X=B2("msapplication-TileColor");if(X&&_)X.setAttribute("content",_);let Y=B2("msapplication-navbutton-color");if(Y&&_)Y.setAttribute("content",_);let L=B2("apple-mobile-web-app-status-bar-style");if(L)L.setAttribute("content",$==="dark"?"black-translucent":"default")}function oH(){if(typeof window>"u")return;let _={...O4,mode:mZ};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function sH(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function j7(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=e3(_?.theme||"default"),G=_?.tint?String(_.tint).trim():null,Z=$7(j),X=rH(Z),Y=hZ(j,X);O4={theme:j,tint:G},mZ=X;let L=document.documentElement;L.dataset.theme=X,L.dataset.colorTheme=j,L.dataset.tint=G?String(G):"",L.style.colorScheme=X;let V=Y;if(j==="default"&&G)V=rZ(Y,G,X);if(j==="default"&&!G)dH();else nH(V,X);if(iH(V.bgPrimary,X),oH(),$.persist!==!1)if(V_(t3,j),G)V_(D6,G);else V_(D6,"")}function E6(){if($7(O4.theme).mode!=="auto")return;j7(O4,{persist:!1})}function G7(){if(typeof window>"u")return;let _=e3(z1(t3)||"default"),$=(()=>{let j=z1(D6);return j?j.trim():null})();j7({theme:_,tint:$},{persist:!1})}function pZ(){if(typeof window>"u")return()=>{};if(G7(),window.matchMedia&&!a3){let _=window.matchMedia("(prefers-color-scheme: dark)");if(_.addEventListener)_.addEventListener("change",E6);else if(_.addListener)_.addListener(E6);return a3=!0,()=>{if(_.removeEventListener)_.removeEventListener("change",E6);else if(_.removeListener)_.removeListener(E6);a3=!1}}return()=>{}}function F2(_){if(!_||typeof _!=="object")return;let $=sH(),j=_.chat_jid||_.chatJid||null,G=_.theme??_.name??_.colorTheme,Z=_.tint??null;if(!j||j===$)j7({theme:G||"default",tint:Z},{persist:!1});V_(t3,G||"default"),V_(D6,Z||"")}function nZ(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return lZ()}var t3="piclaw_theme",D6="piclaw_tint",H$,z6,bZ,vH,O4,mZ="light",a3=!1;var _5=J_(()=>{H$={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",warning:"#f0b429",danger:"#f4212e",success:"#00ba7c"},z6={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",warning:"#f0b429",danger:"#f4212e",success:"#00ba7c"},bZ={default:{label:"Default",mode:"auto",light:H$,dark:z6},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},vH=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-color-alpha","--accent-contrast-text","--accent-soft","--accent-soft-strong","--warning-color","--danger-color","--success-color","--search-highlight-color"],O4={theme:"default",tint:null}});function $X(_=typeof window<"u"?window:null){return _||null}function O6(){if(typeof performance<"u"&&typeof performance.now==="function")return performance.now();return Date.now()}function X5(_,$){return`${_}:${$}`}function jX(_){return`${_}-${Math.random().toString(36).slice(2,10)}-${Date.now().toString(36)}`}function GX(_,$){if(_.length<=$)return;_.splice(0,_.length-$)}function A4(_){if(!_||typeof _!=="object")return null;return{..._}}function M4(_){if(!_)return null;return k4.find(($)=>$.id===_)||null}function X7(_,$){if(typeof performance>"u"||typeof performance.mark!=="function")return;try{performance.mark(`piclaw:${_}:${$}`)}catch(j){console.debug("[app-perf] Ignoring performance.mark failure.",j,{traceId:_,phase:$})}}function ZX(_){if(typeof performance>"u"||typeof performance.clearMarks!=="function")return;try{performance.clearMarks(`piclaw:${_}:start`);let $=M4(_);if(!$)return;for(let j of $.phases)performance.clearMarks(`piclaw:${_}:${j.phase}`)}catch($){console.debug("[app-perf] Ignoring performance.clearMarks failure.",$,{traceId:_})}}function _X(_,$,j){let G=y4.get(X5(_,$));if(G&&M4(G)?.status==="active")Z5(G,"cancelled","superseded",{replacementType:_,replacementChatJid:$});let Z=jX(_),X={id:Z,type:_,chatJid:$,startedAt:O6(),detail:A4(j),phases:[],status:"active"};return k4.push(X),GX(k4,100),y4.set(X5(_,$),Z),X7(Z,"start"),Z}function Z5(_,$,j,G,Z){let X=M4(_);if(!X||X.status!=="active")return;if(j)X.phases.push({phase:j,at:O6(),detail:A4(G)}),X7(X.id,j);if(X.status=$,X.completedAt=O6(),X.durationMs=X.completedAt-X.startedAt,Z!==void 0)X.error=Z instanceof Error?Z.message:String(Z);let Y=X5(X.type,X.chatJid);if(y4.get(Y)===X.id)y4.delete(Y);ZX(X.id)}function EE(_=$X()){let $=_?.__PICLAW_PERF__;if($)return $;if(_)_.__PICLAW_PERF__=J6;return J6}function U2(_=$X()){return EE(_)}function XX(_,$,j){return U2().ensureTrace(_,$,j)}function A6(_,$){return U2().getActiveTraceId(_,$)}function X1(_,$,j){U2().markTrace(_,$,j)}function k6(_,$,j="settled",G){let Z=M4(_);if(!Z||Z.status!=="active")return!1;let X=new Set(Z.phases.map((Y)=>Y.phase));if(!$.every((Y)=>X.has(Y)))return!1;return Z5(_,"completed",j,G),!0}function YX(_,$,j="failed",G){U2().failTrace(_,$,j,G)}function LX(_,$="cancelled",j){U2().cancelTrace(_,$,j)}function Y7(_){return U2().recordRequest(_)}var k4,G5,y4,J6;var Y5=J_(()=>{k4=[],G5=[],y4=new Map;J6={startTrace(_,$,j){return _X(_,$,j)},ensureTrace(_,$,j){let G=y4.get(X5(_,$));if(G&&M4(G)?.status==="active")return G;return _X(_,$,j)},getActiveTraceId(_,$){let j=y4.get(X5(_,$));return j&&M4(j)?.status==="active"?j:null},markTrace(_,$,j){let G=M4(_);if(!G||G.status!=="active")return;G.phases.push({phase:$,at:O6(),detail:A4(j)}),X7(G.id,$)},completeTrace(_,$="settled",j){Z5(_,"completed",$,j)},failTrace(_,$,j="failed",G){Z5(_,"failed",j,G,$)},cancelTrace(_,$="cancelled",j){Z5(_,"cancelled",$,j)},recordRequest(_){let $=jX("req");return G5.push({..._,id:$,detail:A4(_.detail)}),GX(G5,300),$},getTraces(){return k4.map((_)=>({..._,detail:A4(_.detail),phases:_.phases.map(($)=>({...$,detail:A4($.detail)}))}))},getRequests(){return G5.map((_)=>({..._,detail:A4(_.detail)}))},clear(){k4.forEach((_)=>ZX(_.id)),k4.splice(0,k4.length),G5.splice(0,G5.length),y4.clear()},printSummary(){let _={traces:J6.getTraces(),requests:J6.getRequests()};return console.table(_.traces.map(($)=>({id:$.id,type:$.type,chatJid:$.chatJid,status:$.status,durationMs:Number($.durationMs||0).toFixed(1),lastPhase:$.phases[$.phases.length-1]?.phase||"start"}))),_}}});function H2(_){let $=Number(_||0);return Number.isFinite($)&&$>0?$:null}function DE(_){try{return Boolean(_?.matchMedia?.("(pointer: coarse)")?.matches)}catch{return!1}}function zE(_){let $=String(_?.navigator?.userAgent||"");return/Android|webOS|iPhone|iPod|Mobile|Windows Phone/i.test($)}function KX(_){let $=String(_?.navigator?.userAgent||"");return/iPad|Tablet|PlayBook|Silk/i.test($)}function VX(_=typeof window<"u"?window:null){let $=H2(_?.innerWidth)??H2(_?.screen?.availWidth)??H2(_?.screen?.width)??0,j=H2(_?.innerHeight)??H2(_?.screen?.availHeight)??H2(_?.screen?.height)??0,G=$&&j?Math.min($,j):$||j,Z=$&&j?Math.max($,j):$||j,X=DE(_),Y=Number(_?.navigator?.maxTouchPoints||0),L=X||Y>1;if(G>0&&G<=640)return"mobile";if(zE(_)&&!KX(_))return"mobile";if(KX(_))return"tablet";if(L&&G>0&&G<=1100)return"tablet";if(Z>0&&Z<=1180&&G>0&&G<=900)return"tablet";return"desktop"}var N5={};j1(N5,{uploadWorkspaceFile:()=>w6,uploadMedia:()=>W7,updateWorkspaceFile:()=>aE,updateScheduledTask:()=>Q7,submitAdaptiveCardAction:()=>O7,streamSidePrompt:()=>dE,stopAutoresearch:()=>mE,steerAgentQueueItem:()=>rE,setWorkspaceVisibility:()=>q5,setAgentThoughtVisibility:()=>oE,sendPeerAgentMessage:()=>SE,sendAgentMessage:()=>W1,searchPosts:()=>OE,saveWorkspaceSettings:()=>F7,saveWebPushSubscription:()=>D7,saveUiState:()=>N7,saveQuickActionsSettings:()=>B7,saveEnvironmentOverride:()=>y6,restoreChatBranch:()=>RE,respondToAgentRequest:()=>E2,reorderAgentQueueItem:()=>pE,renameWorkspaceFile:()=>C7,renameChatJid:()=>fE,renameChatBranch:()=>xE,removeAgentQueueItem:()=>hE,reindexWorkspace:()=>w7,purgeChatBranch:()=>PE,pruneChatBranch:()=>CE,moveWorkspaceEntry:()=>P7,mergeChatBranchIntoParent:()=>IE,getWorkspaceTree:()=>V5,getWorkspaceRawUrl:()=>Q5,getWorkspaceIndexStatus:()=>M7,getWorkspaceFileStat:()=>x7,getWorkspaceFileDownloadUrl:()=>T6,getWorkspaceFile:()=>T7,getWorkspaceDownloadUrl:()=>x6,getWorkspaceBranch:()=>y7,getWebPushPublicKey:()=>E7,getTimeline:()=>h$,getThumbnailUrl:()=>A7,getThread:()=>JE,getSystemMetrics:()=>V7,getScheduledTasks:()=>q7,getQuickActionsSettings:()=>K5,getPostsByHashtag:()=>K7,getMediaUrl:()=>u1,getMediaText:()=>sE,getMediaInfo:()=>M6,getMediaBlob:()=>k7,getEnvironmentSettings:()=>U7,getChatBranches:()=>wE,getAutoresearchStatus:()=>vE,getAgents:()=>uE,getAgentThought:()=>iE,getAgentStatus:()=>gE,getAgentQueueState:()=>lE,getAgentModels:()=>w4,getAgentContext:()=>bE,getAgentCommands:()=>L5,getActiveChatAgents:()=>ME,forkChatBranch:()=>TE,dismissAutoresearch:()=>cE,deleteWorkspaceFile:()=>f7,deleteWebPushSubscription:()=>z7,deletePost:()=>yE,createWorkspaceFile:()=>I7,createRootChatSession:()=>H7,createReply:()=>kE,createPost:()=>AE,completeInstanceOobe:()=>nE,attachWorkspaceFile:()=>tE,addToWhitelist:()=>J7,SSEClient:()=>I6});async function r0(_,$={}){let j=typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now(),G;try{G=await fetch(h_+_,{...$,headers:{"Content-Type":"application/json",...$.headers}})}catch(X){throw Y7({method:String($.method||"GET").toUpperCase(),url:_,startedAt:j,durationMs:(typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now())-j,ok:!1,detail:{failedBeforeResponse:!0}}),X}let Z=(typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now())-j;if(Y7({method:String($.method||"GET").toUpperCase(),url:_,startedAt:j,durationMs:Z,status:G.status,ok:G.ok,requestId:G.headers?.get?.("x-request-id")||null,serverTiming:G.headers?.get?.("Server-Timing")||null}),!G.ok){let X=await G.json().catch(()=>({error:"Unknown error"}));throw Error(X.error||`HTTP ${G.status}`)}return G.json()}function qX(_){let $=String(_||"").split(`
`),j="message",G=[];for(let X of $)if(X.startsWith("event:"))j=X.slice(6).trim()||"message";else if(X.startsWith("data:"))G.push(X.slice(5).trim());let Z=G.join(`
`);if(!Z)return null;try{return{event:j,data:JSON.parse(Z)}}catch{return{event:j,data:Z}}}async function WE(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),G=new TextDecoder,Z="";while(!0){let{value:Y,done:L}=await j.read();if(L)break;Z+=G.decode(Y,{stream:!0});let V=Z.split(`

`);Z=V.pop()||"";for(let K of V){let Q=qX(K);if(Q)$(Q.event,Q.data)}}Z+=G.decode();let X=qX(Z);if(X)$(X.event,X.data)}async function h$(_=10,$=null,j=null){let G=`/timeline?limit=${_}`;if($)G+=`&before=${$}`;if(j)G+=`&chat_jid=${encodeURIComponent(j)}`;return r0(G)}async function K7(_,$=50,j=0,G=null){let Z=G?`&chat_jid=${encodeURIComponent(G)}`:"";return r0(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${Z}`)}async function OE(_,$=50,j=0,G=null,Z="current",X=null,Y=null){let L=G?`&chat_jid=${encodeURIComponent(G)}`:"",V=Z?`&scope=${encodeURIComponent(Z)}`:"",K=X?`&root_chat_jid=${encodeURIComponent(X)}`:"",Q=Y?.images?"&images=1":"",q=Y?.attachments?"&attachments=1":"";return r0(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${L}${V}${K}${Q}${q}`)}async function JE(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return r0(`/thread/${_}${j}`)}async function V7(){return r0("/agent/system-metrics")}async function q7(_={}){let $=new URLSearchParams;if(_?.id)$.set("id",String(_.id));if(_?.chatJid)$.set("chat_jid",String(_.chatJid));if(_?.status&&_.status!=="all")$.set("status",String(_.status));if(_?.limit)$.set("limit",String(_.limit));if(_?.includeRunLogs)$.set("include_run_logs","1");if(_?.runLogLimit)$.set("run_log_limit",String(_.runLogLimit));let j=$.toString()?`?${$.toString()}`:"";return r0(`/agent/scheduled-tasks${j}`)}async function Q7(_,$,j={}){return r0("/agent/scheduled-tasks/action",{method:"POST",body:JSON.stringify({action:_,id:$,allow_internal:j?.allowInternal===!0})})}async function N7(_){return r0("/agent/ui-state",{method:"POST",body:JSON.stringify(_||{})})}async function AE(_,$=[],j=null){let G=j?`?chat_jid=${encodeURIComponent(j)}`:"";return r0(`/post${G}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function kE(_,$,j=[],G=null){let Z=G?`?chat_jid=${encodeURIComponent(G)}`:"";return r0(`/post/reply${Z}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function yE(_,$=!1,j=null){let G=j?`&chat_jid=${encodeURIComponent(j)}`:"",Z=`/post/${_}?cascade=${$?"true":"false"}${G}`;return r0(Z,{method:"DELETE"})}async function W1(_,$,j=null,G=[],Z=null,X=null){let Y=X?`?chat_jid=${encodeURIComponent(X)}`:"",L={content:$,thread_id:j,media_ids:G,client_context:{screen_hint:VX()}};if(Z==="auto"||Z==="queue"||Z==="steer")L.mode=Z;return r0(`/agent/${_}/message${Y}`,{method:"POST",body:JSON.stringify(L)})}async function L5(_="web:default"){let $=typeof _==="string"&&_.trim()?_.trim():"web:default";return r0(`/agent/commands?chat_jid=${encodeURIComponent($)}`)}async function K5(){return r0("/agent/settings/quick-actions")}async function B7(_){return r0("/agent/settings/quick-actions",{method:"POST",body:JSON.stringify(_||{})})}async function F7(_){return r0("/agent/settings/workspace",{method:"POST",body:JSON.stringify(_||{})})}async function U7(){return r0("/agent/settings/environment")}async function y6(_){return r0("/agent/settings/environment",{method:"POST",body:JSON.stringify(_||{})})}async function ME(){return r0("/agent/active-chats")}async function wE(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let G=j.toString()?`?${j.toString()}`:"";return r0(`/agent/branches${G}`)}async function TE(_,$={}){return r0("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{}})})}async function H7(_){return r0("/agent/root-session",{method:"POST",body:JSON.stringify({agent_name:_})})}async function xE(_,$={}){return r0("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function IE(_){return r0("/agent/branch-merge-parent",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function CE(_){return r0("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function PE(_){return r0("/agent/branch-purge",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function fE(_,$){return r0("/agent/rename-jid",{method:"POST",body:JSON.stringify({old_jid:_,new_jid:$})})}async function RE(_,$={}){return r0("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function SE(_,$,j,G="auto",Z={}){let X={source_chat_jid:_,content:j,mode:G,...Z?.sourceAgentName?{source_agent_name:Z.sourceAgentName}:{},...Z?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return r0("/agent/peer-message",{method:"POST",body:JSON.stringify(X)})}async function E7(){return r0("/agent/push/vapid-public-key")}async function D7(_,$={}){let j={subscription:_,...$?.deviceId?{device_id:$.deviceId}:{}};return r0("/agent/push/subscription",{method:"POST",body:JSON.stringify(j)})}async function z7(_,$={}){let j={subscription:_,...$?.deviceId?{device_id:$.deviceId}:{}};return r0("/agent/push/subscription",{method:"DELETE",body:JSON.stringify(j)})}async function uE(){return r0("/agent/roster")}async function gE(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return r0(`/agent/status${$}`)}async function bE(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return r0(`/agent/context${$}`)}async function vE(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return r0(`/agent/autoresearch/status${$}`)}async function mE(_=null,$={}){return r0("/agent/autoresearch/stop",{method:"POST",body:JSON.stringify({chat_jid:_||void 0,generate_report:$?.generateReport!==!1})})}async function cE(_=null){return r0("/agent/autoresearch/dismiss",{method:"POST",body:JSON.stringify({chat_jid:_||void 0})})}async function lE(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return r0(`/agent/queue-state${$}`)}async function hE(_,$=null){let j=await fetch(h_+"/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let G=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(G.error||`HTTP ${j.status}`)}return j.json()}async function rE(_,$=null){let j=await fetch(h_+"/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let G=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(G.error||`HTTP ${j.status}`)}return j.json()}async function pE(_,$,j=null){let G=await fetch(h_+"/agent/queue-reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({from_index:_,to_index:$,chat_jid:j||void 0})});if(!G.ok){let Z=await G.json().catch(()=>({error:"Failed to reorder queued item"}));throw Error(Z.error||`HTTP ${G.status}`)}return G.json()}async function w4(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return r0(`/agent/models${$}`)}async function nE(_="provider-ready"){return r0("/agent/oobe/complete",{method:"POST",body:JSON.stringify({kind:_})})}async function W7(_){let $=new FormData;$.append("file",_);let j=await fetch(h_+"/media/upload",{method:"POST",body:$});if(!j.ok){let G=await j.json().catch(()=>({error:"Upload failed"}));throw Error(G.error||`HTTP ${j.status}`)}return j.json()}async function E2(_,$,j=null){let G=await fetch(h_+"/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!G.ok){let Z=await G.json().catch(()=>({error:"Failed to respond"}));throw Error(Z.error||`HTTP ${G.status}`)}return G.json()}async function O7(_){let $=await fetch(h_+"/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function dE(_,$={}){let j=await fetch(h_+"/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let X=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(X.error||`HTTP ${j.status}`)}let G=null,Z=null;if(await WE(j,(X,Y)=>{if($.onEvent?.(X,Y),X==="side_prompt_thinking_delta")$.onThinkingDelta?.(Y?.delta||"");else if(X==="side_prompt_text_delta")$.onTextDelta?.(Y?.delta||"");else if(X==="side_prompt_done")G=Y;else if(X==="side_prompt_error")Z=Y}),Z){let X=Error(Z?.error||"Side prompt failed");throw X.payload=Z,X}return G}async function J7(_,$){let j=await fetch(h_+"/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let G=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(G.error||`HTTP ${j.status}`)}return j.json()}async function iE(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return r0(j)}async function oE(_,$,j){return r0("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function u1(_){return`${h_}/media/${_}`}function A7(_){return`${h_}/media/${_}/thumbnail`}async function M6(_){let $=await fetch(`${h_}/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function sE(_){let $=await fetch(`${h_}/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function k7(_){let $=await fetch(`${h_}/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function V5(_="",$=2,j=!1){let G=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return r0(G)}async function y7(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return r0($)}async function M7(_="all"){let $=`/workspace/index-status?scope=${encodeURIComponent(_||"all")}`;return r0($)}async function w7(_="all"){return r0("/workspace/reindex",{method:"POST",body:JSON.stringify({scope:_})})}async function T7(_,$=20000,j=null){let G=j?`&mode=${encodeURIComponent(j)}`:"",Z=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${G}`;return r0(Z)}async function x7(_){return r0(`/workspace/stat?path=${encodeURIComponent(_)}`)}async function aE(_,$){return r0("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function tE(_){return r0("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}function _D(_,$="",j={}){let G=new URLSearchParams;if($)G.set("path",$);if(j.overwrite)G.set("overwrite","1");let Z=G.toString();return Z?`${_}?${Z}`:_}function $D(){if(globalThis.crypto?.randomUUID)return globalThis.crypto.randomUUID();return`upload-${Date.now()}-${Math.random().toString(36).slice(2)}`}function jD(_,$,j,G){return new Promise((Z,X)=>{let Y=new XMLHttpRequest;Y.open("POST",h_+$);for(let[L,V]of Object.entries(j||{}))if(V!==void 0&&V!==null)Y.setRequestHeader(L,String(V));Y.upload.onprogress=(L)=>{if(typeof G==="function")G({loaded:L.lengthComputable?L.loaded:0,total:L.lengthComputable?L.total:_.size,lengthComputable:L.lengthComputable})},Y.onload=()=>{try{let L=Y.responseText?JSON.parse(Y.responseText):{};if(Y.status>=200&&Y.status<300)Z(L);else{let V=Error(L.error||`HTTP ${Y.status}`);V.status=Y.status,V.code=L.code,X(V)}}catch{let L=Error(`HTTP ${Y.status}`);L.status=Y.status,X(L)}},Y.onerror=()=>X(Error("Upload failed (network error)")),Y.ontimeout=()=>X(Error("Upload timed out")),Y.send(_)})}async function GD(_,$="",j={}){let G=$D(),Z=_D("/workspace/upload-chunk",$,j),X=Math.max(1,Math.min(L7,Number(j.chunkSize)||eE)),Y=Math.max(0,Number(_?.size)||0),L=Math.max(1,Math.ceil(Y/X)),V=0,K=null;for(let Q=0;Q<L;Q+=1){let q=Q*X,B=Math.min(Y,q+X),N=_.slice(q,B),U=N.size;if(K=await jD(N,Z,{"X-Upload-Id":G,"X-Chunk-Index":Q,"X-Chunk-Total":L,"X-File-Name":_?.name||"upload.bin","X-File-Size":Y},(E)=>{if(typeof j.onProgress!=="function")return;let D=Math.min(Y,V+(E?.loaded||0)),H=Y||1;j.onProgress({loaded:D,total:H,percent:Math.round(D/H*100),chunkIndex:Q,chunkTotal:L})}),V+=U,typeof j.onProgress==="function"){let E=Y||1,D=Y?V:E;j.onProgress({loaded:D,total:E,percent:Math.round(D/E*100),chunkIndex:Q+1,chunkTotal:L})}}return K}async function w6(_,$="",j={}){if(_?.size>L7){let G=(_.size/1048576).toFixed(0),Z=(L7/1048576).toFixed(0),X=Error(`File too large (${G} MB). Maximum upload size is ${Z} MB.`);throw X.code="file_too_large",X}return await GD(_,$,j)}async function I7(_,$,j=""){let G=await fetch(h_+"/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!G.ok){let Z=await G.json().catch(()=>({error:"Create failed"})),X=Error(Z.error||`HTTP ${G.status}`);throw X.status=G.status,X.code=Z.code,X}return G.json()}async function C7(_,$){let j=await fetch(h_+"/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let G=await j.json().catch(()=>({error:"Rename failed"})),Z=Error(G.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=G.code,Z}return j.json()}async function P7(_,$){let j=await fetch(h_+"/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let G=await j.json().catch(()=>({error:"Move failed"})),Z=Error(G.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=G.code,Z}return j.json()}async function f7(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return r0($,{method:"DELETE"})}async function q5(_,$=!1){return r0("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function Q5(_,$={}){let j=new URLSearchParams({path:String(_||"")});if($.download)j.set("download","1");return`${h_}/workspace/raw?${j.toString()}`}function T6(_){return Q5(_,{download:!0})}function x6(_,$=!1){let j=`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`;return`${h_}/workspace/download?${j}`}class I6{onEvent;onStatusChange;chatJid;eventSource;reconnectTimeout;reconnectDelay;status;reconnectAttempts;cooldownUntil;connecting;lastActivityAt;staleCheckTimer;staleThresholdMs;constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource(h_+"/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(G)=>{this.markActivity(),this.onEvent(j,JSON.parse(G.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),$("ui_meters"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_working_indicator","extension_ui_working_visible","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let G=Math.max(this.cooldownUntil-j,0),Z=Math.max(this.reconnectDelay,G);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},Z),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}var h_="",L7=1073741824,eE=8388608;var I_=J_(()=>{Y5()});function z2(_){let $=typeof _==="string"?_.trim():"";return $?$:null}function o1(_={}){if(typeof window>"u")return;let $=z2(_.section);try{if(window.__piclawSettingsOpenRequested=!0,$)window.__piclawSettingsRequestedSection=$;else delete window.__piclawSettingsRequestedSection}catch(j){console.debug("[settings-dialog-events] failed to record open request flags",j)}window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:$?{section:$}:void 0}))}function d7(){if(typeof window>"u")return null;return z2(window.__piclawSettingsRequestedSection)}function R6(){if(typeof window>"u")return{open:!1,section:null};let _=Boolean(window.__piclawSettingsOpenRequested),$=d7();try{window.__piclawSettingsOpenRequested=!1,delete window.__piclawSettingsRequestedSection}catch(j){console.debug("[settings-dialog-events] failed to clear open request flags",j)}return{open:_,section:$}}function n$({children:_,className:$=""}){let[j,G]=C(null);return u(()=>{if(typeof document>"u")return;let Z=document.createElement("div");return document.body.appendChild(Z),G(Z),()=>{try{Q$(null,Z)}finally{Z.remove()}}},[]),u(()=>{if(!j)return;j.className=$||"";return},[$,j]),j2(()=>{if(!j)return;Q$(_,j);return},[_,j]),null}var S6=J_(()=>{M0()});function i7(_,$){let j=String(_.label||"").localeCompare(String($.label||""),void 0,{sensitivity:"base"});if(j!==0)return j;return String(_.id||"").localeCompare(String($.id||""),void 0,{sensitivity:"base"})}function d$(_){let $=x4.findIndex((j)=>j.id===_.id);if($>=0)x4[$]=_;else x4.push(_);x4.sort(i7)}function aX(_){let $=x4.findIndex((j)=>j.id===_);if($>=0)x4.splice($,1)}function tX(){return[...x4]}function o7(){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent("piclaw:settings-panes-changed"))}var x4;var W2=J_(()=>{x4=[]});function MD(_){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(I4,{detail:{enabled:Boolean(_)}}))}function $Y(_){if(typeof fetch!=="function")return;N7({ui_meters:_}).catch(($)=>{console.debug("[meters] Failed to persist meters UI state.",$)})}function wD(_){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(g6,{detail:{collapsed:Boolean(_)}}))}function z5(_=!1){return F$(eX,_)}function jY(_=!1){return F$(_Y,_)}function u6(_,$={}){let j=$.persist!==!1,G=$.persistServer!==!1,Z=Boolean(_);if(j)V_(eX,Z?"true":"false");if(G)$Y({enabled:Z});return MD(Z),Z}function s7(_,$={}){let j=$.persist!==!1,G=$.persistServer!==!1,Z=Boolean(_);if(j)V_(_Y,Z?"true":"false");if(G)$Y({collapsed:Z});return wD(Z),Z}function a7(_){let $=typeof _?.mode==="string"?_.mode.trim().toLowerCase():"";if(typeof _?.enabled==="boolean")u6(Boolean(_.enabled),{persistServer:!1});else if($==="toggle"){let j=!z5(!1);u6(j,{persistServer:!1})}if(typeof _?.collapsed==="boolean")s7(Boolean(_.collapsed),{persistServer:!1})}var eX="piclaw_system_meters_enabled",_Y="piclaw_system_meters_collapsed",I4="piclaw-meters-change",g6="piclaw-meters-collapsed-change";var b6=J_(()=>{I_()});function GY(_,$){if(_===""||_===null||_===void 0)return $;let j=Number(_);return Number.isFinite(j)?j:$}function ZY(_,{min:$=-1/0,max:j=1/0}={}){let G=Number.isFinite(Number($))?Number($):-1/0,Z=Number.isFinite(Number(j))?Number(j):1/0;return Math.min(Z,Math.max(G,Number(_)))}function W$(_,{fallback:$=0,min:j=-1/0,max:G=1/0}={}){let Z=GY(_,$);return ZY(Z,{min:j,max:G})}function TD(_,{direction:$=1,step:j=1,fallback:G=0,min:Z=-1/0,max:X=1/0}={}){let Y=W$(_,{fallback:G,min:Z,max:X}),L=Math.abs(GY(j,1))||1,V=Number($)<0?-1:1;return ZY(Y+V*L,{min:Z,max:X})}function v_({value:_,min:$,max:j,step:G=1,fallback:Z,width:X="80px",disabled:Y=!1,label:L,onChange:V}){let K=Number.isFinite(Number(Z))?Number(Z):W$(_,{fallback:0,min:$,max:j}),[Q,q]=C(String(_??K)),B=g(!1);u(()=>{if(!B.current)q(String(_??K))},[_,K]);let N=R((E)=>{B.current=!1;let D=W$(E,{fallback:K,min:$,max:j});q(String(D)),V?.(D)},[K,$,j,V]),U=R((E)=>{B.current=!1;let D=TD(_,{direction:E,step:G,fallback:K,min:$,max:j});q(String(D)),V?.(D)},[K,j,$,V,G,_]);return F`
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
                onInput=${(E)=>{B.current=!0,q(E.target.value)}}
                onBlur=${(E)=>N(E.target.value)}
                onKeyDown=${(E)=>{if(E.key==="Enter")E.preventDefault(),N(E.target.value),E.target.blur()}}
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
    `}var C4=J_(()=>{M0()});function XY(_){let $=String(_||"").trim();if(!$)return"";if($.startsWith("http://")||$.startsWith("https://")||$.startsWith("data:")||$.startsWith("blob:"))return $;if($.startsWith("/workspace/"))return`/workspace/file?path=${encodeURIComponent($.slice(11))}`;if($.startsWith("/"))return"";if(/^[a-zA-Z]:[\\/]/.test($))return"";if($.startsWith("\\\\"))return"";if($.includes("\\"))return"";return`/workspace/file?path=${encodeURIComponent($.replace(/^\.\//,""))}`}function YY({value:_,onChange:$}){let j=g(null),[G,Z]=C(XY(_));u(()=>{Z(XY(_))},[_]);let X=R((Y)=>{let L=Y.target.files?.[0];if(!L)return;let V=new FileReader;V.onload=()=>{let K=V.result;Z(K),$?.(K)},V.readAsDataURL(L)},[$]);return F`
        <div class="settings-avatar-inline" onClick=${()=>j.current?.click()} title="Click to upload">
            ${G?F`<img src=${G} alt="avatar" />`:F`<span class="settings-avatar-placeholder">+</span>`}
            <input type="file" accept="image/*" ref=${j} style="display:none" onChange=${X} />
        </div>
    `}function LY(_={}){return{userName:_.userName||"",userAvatar:_.userAvatar||"",assistantName:_.assistantName||"",assistantAvatar:_.assistantAvatar||"",composeUploadLimitMb:_.composeUploadLimitMb??32,workspaceUploadLimitMb:_.workspaceUploadLimitMb??256}}function t7({settingsData:_,setStatus:$,mergeSettingsData:j}){let[G,Z]=C(""),[X,Y]=C(""),[L,V]=C(""),[K,Q]=C(""),[q,B]=C(32),[N,U]=C(256),[E,D]=C(""),[H,k]=C(!1),[O,W]=C(!1),[I,x]=C(!1),[J,A]=C(()=>z5(!1)),[z,T]=C(!1),w=g(""),y=g(null),P=g(!0);u(()=>{return P.current=!0,()=>{P.current=!1}},[]);let f=R((j0)=>{let $0=LY(j0);Z($0.userName),Y($0.userAvatar),V($0.assistantName),Q($0.assistantAvatar),B($0.composeUploadLimitMb),U($0.workspaceUploadLimitMb),D(j0?.widgetToken||""),w.current=JSON.stringify($0)},[]);u(()=>{f(_||{})},[_,f]),u(()=>{let j0=($0)=>{A(Boolean($0?.detail?.enabled))};return window.addEventListener(I4,j0),()=>window.removeEventListener(I4,j0)},[]);let b=Y0(()=>JSON.stringify(LY({userName:G,userAvatar:X,assistantName:L,assistantAvatar:K,composeUploadLimitMb:q,workspaceUploadLimitMb:N})),[G,X,L,K,q,N]);u(()=>{if(b===w.current)return;if(y.current)clearTimeout(y.current);return y.current=setTimeout(async()=>{if(!P.current)return;let j0=document.activeElement;if(j0&&j0.closest?.(".settings-number-stepper"))return;try{let $0=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:b}),L0=await $0.json().catch(()=>({}));if(!P.current)return;if(!$0.ok||!L0?.ok||!L0?.settings)return;w.current=b,j?.(L0.settings),T(!0),setTimeout(()=>{if(P.current)T(!1)},4000)}catch($0){console.warn("[settings/general] Failed to persist general settings snapshot.",$0)}},800),()=>{if(y.current)clearTimeout(y.current)}},[b,j]);let c=_?.instanceTotp||{configured:!1,issuer:L||"Piclaw",label:G?`${L||"Piclaw"}:${G}`:L||"Piclaw",secret:"",otpauth:"",qrSvg:""},h=R(async()=>{if(!E)return;try{await navigator.clipboard?.writeText(E),W(!0),setTimeout(()=>{if(P.current)W(!1)},3000)}catch(j0){console.warn("[settings/general] Failed to copy widget token.",j0)}},[E]),_0=R(async()=>{if(I)return;if(!confirm("Regenerate the widget token? Existing macOS widgets using the old token will stop updating."))return;x(!0);try{let j0=await fetch("/agent/settings/widget-token/regenerate",{method:"POST"}),$0=await j0.json().catch(()=>({}));if(!j0.ok||!$0?.ok||!$0?.settings)throw Error($0?.error||"Failed to regenerate widget token.");D($0.settings.widgetToken||""),j?.($0.settings),T(!0),setTimeout(()=>{if(P.current)T(!1)},4000)}catch(j0){console.warn("[settings/general] Failed to regenerate widget token.",j0)}finally{if(P.current)x(!1)}},[I,j]),v=typeof window<"u"&&window.isSecureContext,e=E?"•".repeat(Math.min(Math.max(E.length,16),48)):"—",z0=H?E||"—":e;return F`
        <div class="settings-section">
            ${z&&F`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Settings applied. Changes take effect on the next turn.
                </div>
            `}
            <h3>Identity</h3>
            <div class="settings-row">
                <label>User</label>
                <${YY} value=${X} onChange=${Y} />
                <input type="text" value=${G} onInput=${(j0)=>Z(j0.target.value)} placeholder="Your name" />
            </div>
            <div class="settings-row">
                <label>Agent</label>
                <${YY} value=${K} onChange=${Q} />
                <input type="text" value=${L} onInput=${(j0)=>V(j0.target.value)} placeholder="Agent name" />
            </div>

            <h3 style="margin-top:20px">Notifications</h3>
            ${v?F`
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
                    <input type="checkbox" checked=${J}
                        onChange=${()=>{let j0=u6(!J);A(j0)}} />
                    <span class="settings-hint" style="margin:0">CPU/memory/network meters in the status bar. This browser only.</span>
                </div>
            </div>

            <h3 style="margin-top:20px">Instance Configuration</h3>
            <div class="settings-row">
                <label>Compose upload (MB)</label>
                <${v_}
                    label="compose upload limit"
                    value=${q}
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
                <${v_}
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
            <div class="settings-row settings-row-vertical settings-widget-token-row">
                <label>Widget bearer token</label>
                <div class="settings-keychain-reveal-panel settings-widget-token-panel">
                    <div class="settings-keychain-reveal-field settings-widget-token-field">
                        <span class="settings-keychain-reveal-label">Token</span>
                        <code class="settings-keychain-reveal-value settings-widget-token-value">${z0}</code>
                        <button class=${`settings-keychain-reveal-btn${H?" active":""}`}
                            type="button"
                            onClick=${()=>k((j0)=>!j0)}
                            disabled=${!E}
                            title=${H?"Hide token":"Reveal token"}>
                            ${H?F`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`:F`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`}
                        </button>
                        <button class="settings-keychain-copy-btn" type="button" onClick=${h} disabled=${!E} title="Copy token">
                            ${O?F`<span class="settings-widget-token-copied">Copied</span>`:F`<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`}
                        </button>
                        <button class="settings-keychain-prompt-submit settings-widget-token-regenerate" type="button" onClick=${_0} disabled=${I}>${I?"Regenerating…":"Regenerate"}</button>
                    </div>
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
                            ${c.configured?"Current web-login authenticator secret. Scan this QR to add another authenticator device.":"TOTP is not configured for this instance yet, so no setup QR is available."}
                        </div>
                    </div>
                </div>
                ${c.configured?F`
                    <div class="settings-totp-grid">
                        <div class="settings-totp-qr" dangerouslySetInnerHTML=${{__html:c.qrSvg}}></div>
                        <div class="settings-totp-meta">
                            <div class="settings-row settings-row-vertical">
                                <label>Issuer</label>
                                <input type="text" readonly value=${c.issuer||""} />
                            </div>
                            <div class="settings-row settings-row-vertical">
                                <label>Label</label>
                                <input type="text" readonly value=${c.label||""} />
                            </div>
                            <div class="settings-row settings-row-vertical">
                                <label>Secret</label>
                                <input type="text" readonly value=${c.secret||""} />
                            </div>
                        </div>
                    </div>
                `:null}
            </div>
        </div>
    `}var KY=J_(()=>{M0();b6();C4()});var qY={};j1(qY,{SessionsSection:()=>xD});function VY(_={}){return{sessionAutoRotate:_.sessionAutoRotate!==!1,sessionMaxSizeMb:_.sessionMaxSizeMb??16,sessionMaxLines:_.sessionMaxLines??4000,sessionMaxCompactions:_.sessionMaxCompactions??3,sessionIsolation:_.sessionIsolation||"none",toolUseBudget:_.toolUseBudget??64}}function xD({settingsData:_,setStatus:$,mergeSettingsData:j}){let[G,Z]=C(!0),[X,Y]=C(16),[L,V]=C(4000),[K,Q]=C(3),[q,B]=C(64),[N,U]=C("none"),[E,D]=C(!1),H=g(""),k=g(null),O=g(!0);u(()=>{return O.current=!0,()=>{O.current=!1}},[]);let W=R((x)=>{let J=VY(x);Z(J.sessionAutoRotate),Y(J.sessionMaxSizeMb),V(J.sessionMaxLines),Q(J.sessionMaxCompactions),B(J.toolUseBudget),U(J.sessionIsolation),H.current=JSON.stringify(J)},[]);u(()=>{W(_||{})},[_,W]);let I=Y0(()=>JSON.stringify(VY({sessionAutoRotate:G,sessionMaxSizeMb:X,sessionMaxLines:L,sessionMaxCompactions:K,toolUseBudget:q,sessionIsolation:N})),[G,X,L,K,q,N]);return u(()=>{if(I===H.current)return;if(k.current)clearTimeout(k.current);return k.current=setTimeout(async()=>{if(!O.current)return;let x=document.activeElement;if(x&&x.closest?.(".settings-number-stepper"))return;try{let J=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:I}),A=await J.json().catch(()=>({}));if(!O.current)return;if(!J.ok||!A?.ok||!A?.settings)return;H.current=I,j?.(A.settings),D(!0),setTimeout(()=>{if(O.current)D(!1)},4000)}catch(J){console.warn("[settings/sessions] Failed to persist session settings.",J)}},800),()=>{if(k.current)clearTimeout(k.current)}},[I,j]),F`
        <div class="settings-section">
            ${E&&F`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Settings applied. Changes take effect on the next turn.
                </div>
            `}
            <h3>Session Lifecycle</h3>
            <div class="settings-row">
                <label>Auto-rotate sessions</label>
                <input type="checkbox" checked=${G} onChange=${(x)=>Z(x.target.checked)} />
            </div>
            <div class="settings-row">
                <label>Max session size (MB)</label>
                <${v_}
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
                <${v_}
                    label="tool use budget"
                    value=${q}
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
                <select value=${N} onChange=${(x)=>U(x.target.value)}>
                    <option value="none">None — full cross-session visibility</option>
                    <option value="summary">Summary — tools visible, no arguments</option>
                    <option value="full">Full — sessions cannot see each other</option>
                </select>
            </div>
        </div>
    `}var QY=J_(()=>{M0();C4()});var NY={};j1(NY,{CompactionSection:()=>CD});function ID(_={}){return{compactionTimeoutSec:_.compactionTimeoutSec??180,compactionBackoffBaseMin:_.compactionBackoffBaseMin??15,compactionBackoffMaxMin:_.compactionBackoffMaxMin??360,compactionThresholdPercent:_.compactionThresholdPercent??75,compactionBackoffDecayFactor:_.compactionBackoffDecayFactor??0.5,progressWatchdogEnabled:Boolean(_.progressWatchdogEnabled??!1),progressWatchdogTimeoutSec:_.progressWatchdogTimeoutSec??120,compactionBackoffs:Array.isArray(_.compactionBackoffs)?_.compactionBackoffs:[],progressWatchdogPhases:Array.isArray(_.progressWatchdogPhases)?_.progressWatchdogPhases:[]}}function e7(_){let $=String(_||"").trim();if(!$)return"—";let j=new Date($);if(Number.isNaN(j.getTime()))return $;return j.toLocaleString()}function CD({settingsData:_,setStatus:$,mergeSettingsData:j}){let[G,Z]=C(180),[X,Y]=C(15),[L,V]=C(360),[K,Q]=C(75),[q,B]=C(0.5),[N,U]=C(!1),[E,D]=C(120),[H,k]=C([]),[O,W]=C([]),[I,x]=C(!1),J=g(""),A=g(null),z=g(!0);u(()=>{return z.current=!0,()=>{z.current=!1}},[]);let T=R((P)=>{let f=ID(P);Z(f.compactionTimeoutSec),Y(f.compactionBackoffBaseMin),V(f.compactionBackoffMaxMin),Q(f.compactionThresholdPercent),B(f.compactionBackoffDecayFactor),U(f.progressWatchdogEnabled),D(f.progressWatchdogTimeoutSec),k(f.compactionBackoffs),W(f.progressWatchdogPhases),J.current=JSON.stringify({compactionTimeoutSec:f.compactionTimeoutSec,compactionBackoffBaseMin:f.compactionBackoffBaseMin,compactionBackoffMaxMin:f.compactionBackoffMaxMin,compactionThresholdPercent:f.compactionThresholdPercent,compactionBackoffDecayFactor:f.compactionBackoffDecayFactor,progressWatchdogEnabled:f.progressWatchdogEnabled,progressWatchdogTimeoutSec:f.progressWatchdogTimeoutSec})},[]);u(()=>{T(_||{})},[_,T]);let w=Y0(()=>JSON.stringify({compactionTimeoutSec:G,compactionBackoffBaseMin:X,compactionBackoffMaxMin:L,compactionThresholdPercent:K,compactionBackoffDecayFactor:q,progressWatchdogEnabled:N,progressWatchdogTimeoutSec:E}),[G,X,L,K,q,N,E]);u(()=>{if(w===J.current)return;if(A.current)clearTimeout(A.current);return A.current=setTimeout(async()=>{if(!z.current)return;let P=document.activeElement;if(P&&P.closest?.(".settings-number-stepper"))return;try{$?.("Saving compaction settings…","info");let f=await fetch("/agent/settings/compaction",{method:"POST",headers:{"Content-Type":"application/json"},body:w}),b=await f.json().catch(()=>({}));if(!z.current)return;if(!f.ok||!b?.ok||!b?.settings){$?.(b?.error||"Failed to save compaction settings.","error");return}J.current=w,j?.(b.settings),T({..._||{},...b.settings||{}}),$?.("Compaction settings saved.","success"),x(!0),setTimeout(()=>{if(z.current)x(!1),$?.(null)},4000)}catch(f){if(console.warn("[settings/compaction] Failed to persist compaction settings.",f),z.current)$?.("Failed to save compaction settings.","error")}},800),()=>{if(A.current)clearTimeout(A.current)}},[w,j,$,T,_]);let y=R(async(P)=>{try{$?.(`Clearing compaction suppression for ${P}…`,"info");let f=await fetch("/agent/settings/compaction/reset-backoff",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chatJid:P})}),b=await f.json().catch(()=>({}));if(!f.ok||!b?.ok||!b?.settings){$?.(b?.error||"Failed to clear compaction suppression.","error");return}j?.(b.settings),T({..._||{},...b.settings||{}}),$?.(`Cleared compaction suppression for ${P}.`,"success")}catch(f){console.warn("[settings/compaction] Failed to clear compaction suppression.",f),$?.("Failed to clear compaction suppression.","error")}},[T,j,$,_]);return F`
        <div class="settings-section">
            ${I&&F`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Compaction settings applied. Existing turns keep their current timers; new turns use the updated values.
                </div>
            `}

            <h3>Automatic compaction</h3>
            <div class="settings-row">
                <label>Compaction threshold (%)</label>
                <${v_}
                    label="compaction threshold"
                    value=${K}
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
                <${v_}
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
                <${v_}
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
                <${v_}
                    label="compaction backoff max"
                    value=${L}
                    min=${1}
                    max=${10080}
                    fallback=${360}
                    width="90px"
                    onChange=${V}
                />
                <span class="settings-hint" style="margin:0">Upper bound for exponential suppression after repeated failures.</span>
            </div>

            <div class="settings-row">
                <label>Backoff decay factor</label>
                <${v_}
                    label="backoff decay factor"
                    value=${Math.round(q*100)}
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
                <${v_}
                    label="watchdog timeout"
                    value=${E}
                    min=${0}
                    max=${3600}
                    fallback=${120}
                    width="90px"
                    disabled=${!N}
                    onChange=${D}
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
                                    <td>${e7(P.backoffUntil)}</td>
                                    <td title=${P.lastErrorMessage||""}>${P.lastErrorMessage||"—"}</td>
                                    <td>
                                        <button class="settings-secondary-btn" onClick=${()=>y(P.chatJid)}>
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
            ${O.length===0?F`
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
                            ${O.map((P)=>F`
                                <tr>
                                    <td><code>${P.chatJid}</code></td>
                                    <td>${P.phase}</td>
                                    <td>${e7(P.startedAt)}</td>
                                    <td>${e7(P.lastProgressAt)}</td>
                                </tr>
                            `)}
                        </tbody>
                    </table>
                </div>
            `}
        </div>
    `}var BY=J_(()=>{M0();C4()});function UY(_){let $=String(_||"").trim().toLowerCase();if(!$)return null;let j=RD[$]||$;if(/^f(?:[1-9]|1[0-2])$/.test(j))return j;if(SD.has(j))return j;if(j.length===1)return j;if(/^[a-z0-9]+$/.test(j))return j;return null}function O2(_){let $=String(_||"").trim();if(!$)return null;let j=$.split("+").map((X)=>X.trim()).filter(Boolean);if(!j.length)return null;let G={ctrl:!1,meta:!1,alt:!1,shift:!1,key:""};for(let X of j){let Y=X.toLowerCase(),L=fD[Y];if(L){G[L]=!0;continue}if(G.key)return null;let V=UY(X);if(!V||V==="escape")return null;G.key=V}if(!G.key)return null;let Z=[];if(G.ctrl)Z.push("ctrl");if(G.meta)Z.push("meta");if(G.alt)Z.push("alt");if(G.shift)Z.push("shift");return Z.push(G.key),Z.join("+")}function HY(_){return String(_||"").split(/[\n,]/).map(($)=>O2($)).filter(($)=>Boolean($))}function o$(_){return _.join(", ")}function $9(){let _=U6(FY);if(!_||typeof _!=="object")return{};let $={};for(let j of i$){let G=_[j.id];if(!Array.isArray(G))continue;let Z=G.map((X)=>O2(String(X||""))).filter((X)=>Boolean(X));$[j.id]=[...new Set(Z)]}return $}function _9(_){if(V_(FY,JSON.stringify(_)),typeof window<"u")window.dispatchEvent(new CustomEvent("piclaw:keyboard-shortcuts-changed",{detail:{config:_}}))}function EY(_){return PD.get(_)}function W5(_){let $=$9()[_];if(Array.isArray($))return $;return[...EY(_).defaultBindings]}function DY(_,$){let j=$9(),G=EY(_).defaultBindings,Z=[...new Set($.map((X)=>O2(X)).filter((X)=>Boolean(X)))];if(Z.length===G.length&&Z.every((X,Y)=>X===G[Y]))delete j[_];else j[_]=Z;_9(j)}function j9(_){if(!_){_9({});return}let $=$9();delete $[_],_9($)}function v6(){let _={};for(let $ of i$)_[$.id]=W5($.id);return _}function uD(_){let $=typeof _==="string"?_:"";if(!$)return"";if($.length===1)return $.toLowerCase();return UY($)||$.toLowerCase()}function gD(_){let $=O2(_);if(!$)return null;let j={ctrl:!1,meta:!1,alt:!1,shift:!1,key:""};for(let G of $.split("+")){if(G==="ctrl"||G==="meta"||G==="alt"||G==="shift"){j[G]=!0;continue}j.key=G}return j.key?j:null}function bD(_,$){let j=gD($);if(!j)return!1;if(uD(_?.key)!==j.key)return!1;let Z=!j.shift&&j.key.length===1&&/[^a-z0-9]/i.test(j.key);return Boolean(_?.ctrlKey)===j.ctrl&&Boolean(_?.metaKey)===j.meta&&Boolean(_?.altKey)===j.alt&&(Z||Boolean(_?.shiftKey)===j.shift)}function O$(_,$){return W5($).some((j)=>bD(_,j))}var FY="piclaw_keyboard_shortcuts_v1",i$,PD,fD,RD,SD;var m6=J_(()=>{i$=[{id:"openHelp",label:"Open keyboard help",description:"Open Settings → Keyboard. Default: question mark and quote when focus is outside compose and other editable fields.",defaultBindings:["?",'"']},{id:"openSettings",label:"Open settings",description:"Open the settings dialog.",defaultBindings:["ctrl+,","meta+,","alt+,"]},{id:"previousChat",label:"Previous session",description:"Switch to the previous visible chat/session.",defaultBindings:["["]},{id:"nextChat",label:"Next session",description:"Switch to the next visible chat/session.",defaultBindings:["]"]},{id:"toggleDock",label:"Toggle dock",description:"Show or hide the bottom dock panes.",defaultBindings:["ctrl+`"]},{id:"toggleZenMode",label:"Toggle zen mode",description:"Collapse surrounding chrome for a focused chat view.",defaultBindings:["ctrl+shift+z","meta+shift+z"]}],PD=new Map(i$.map((_)=>[_.id,_])),fD={cmd:"meta",command:"meta",meta:"meta",super:"meta",ctrl:"ctrl",control:"ctrl",alt:"alt",option:"alt",shift:"shift"},RD={esc:"escape",return:"enter",spacebar:"space"},SD=new Set(["tab","enter","space","backspace","delete","insert","clear","home","end","pageup","pagedown","up","down","left","right"])});var zY={};j1(zY,{KeyboardSection:()=>mD});function vD(_,$,j){let G=String(_||"").trim().toLowerCase();if(!G)return!0;return[$.label,$.description,j,...$.defaultBindings||[]].some((Z)=>String(Z||"").toLowerCase().includes(G))}function mD({filter:_="",setStatus:$}){let[j,G]=C(()=>{let V=v6();return Object.fromEntries(Object.entries(V).map(([K,Q])=>[K,o$(Q)]))});u(()=>{let V=()=>{let K=v6();G(Object.fromEntries(Object.entries(K).map(([Q,q])=>[Q,o$(q)])))};return window.addEventListener("piclaw:keyboard-shortcuts-changed",V),()=>window.removeEventListener("piclaw:keyboard-shortcuts-changed",V)},[]);let Z=Y0(()=>i$.filter((V)=>{let K=String(j[V.id]||"");return vD(_,V,K)}),[j,_]),X=(V)=>{let K=String(j[V]||"").trim(),q=(K?K.split(/[\n,]/).map((N)=>N.trim()).filter(Boolean):[]).filter((N)=>!O2(N));if(q.length>0){$?.(`Invalid shortcut: ${q[0]}. Escape is reserved and cannot be rebound.`,"error");return}let B=HY(K);DY(V,B),G((N)=>({...N,[V]:o$(W5(V))})),$?.("Keyboard shortcuts saved.","success")},Y=(V)=>{j9(V),G((K)=>({...K,[V]:o$(W5(V))})),$?.("Keyboard shortcut reset to default.","success")};return F`
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
                <button class="settings-addon-btn" style="min-width:180px; height:40px; font-size:14px;" onClick=${()=>{j9();let V=v6();G(Object.fromEntries(Object.entries(V).map(([K,Q])=>[K,o$(Q)]))),$?.("Keyboard shortcuts reset to defaults.","success")}}>Reset all to defaults</button>
            </div>

            <div class="settings-shortcut-list" style="display:grid; gap:16px;">
                ${Z.map((V)=>F`
                    <div class="settings-shortcut-card" key=${V.id} style="display:grid; grid-template-columns:minmax(240px, 1.25fr) minmax(320px, 1fr); gap:18px; align-items:start; padding:18px 20px; border:1px solid var(--border-color, rgba(120,120,120,.22)); border-radius:16px; background:var(--panel-bg, rgba(255,255,255,.04));">
                        <div class="settings-shortcut-copy" style="min-width:0;">
                            <div class="settings-shortcut-title" style="font-size:17px; font-weight:700; line-height:1.3;">${V.label}</div>
                            <div class="settings-hint" style="margin:6px 0 0 0; font-size:14px; line-height:1.5;">${V.description}</div>
                            <div class="settings-shortcut-default" style="margin-top:10px; font-size:13px; color:var(--text-secondary);">Default: <code style="font-size:13px;">${o$(V.defaultBindings)}</code></div>
                        </div>
                        <div class="settings-shortcut-controls" style="display:grid; gap:10px; min-width:0;">
                            <input
                                type="text"
                                value=${j[V.id]||""}
                                placeholder=${o$(V.defaultBindings)}
                                onInput=${(K)=>G((Q)=>({...Q,[V.id]:K.target.value}))}
                                style="width:100%; min-height:46px; padding:10px 14px; font-size:16px; line-height:1.35; font-family:var(--font-mono, ui-monospace, monospace); border-radius:12px;"
                            />
                            <div class="settings-shortcut-actions" style="display:flex; justify-content:flex-end; align-items:center; gap:10px; flex-wrap:wrap;">
                                <button class="settings-addon-btn settings-addon-btn-install" style="min-width:96px; height:40px; font-size:14px;" onClick=${()=>X(V.id)}>Save</button>
                                <button class="settings-addon-btn" style="min-width:96px; height:40px; font-size:14px;" onClick=${()=>Y(V.id)}>Default</button>
                            </div>
                        </div>
                    </div>
                `)}
                ${Z.length===0&&F`<div class="settings-hint">No shortcuts match this filter.</div>`}
            </div>
        </div>
    `}var WY=J_(()=>{M0();m6()});function OY(_,$=G9){let j=Number(_);if(!Number.isFinite(j))return $;return Math.min(300,Math.max(15,Math.round(j)))}function JY(_,$=Z9){let j=Number(_);if(!Number.isFinite(j))return $;return Math.min(8,Math.max(0,Math.round(j)))}function J2(){return{refreshIntervalSec:OY(z4(l6,G9),G9),folderPreviewDepth:JY(z4(h6,Z9),Z9)}}function AY(_={}){let $=J2(),j={refreshIntervalSec:OY(Object.prototype.hasOwnProperty.call(_,"refreshIntervalSec")?_.refreshIntervalSec:$.refreshIntervalSec,$.refreshIntervalSec),folderPreviewDepth:JY(Object.prototype.hasOwnProperty.call(_,"folderPreviewDepth")?_.folderPreviewDepth:$.folderPreviewDepth,$.folderPreviewDepth)};if(V_(l6,String(j.refreshIntervalSec)),V_(h6,String(j.folderPreviewDepth)),typeof window<"u")window.dispatchEvent(new CustomEvent(c6,{detail:{settings:j}}));return j}var c6="piclaw:workspace-client-settings-updated",l6="workspaceRefreshIntervalSec",h6="workspaceFolderPreviewDepth",G9=60,Z9=3;var X9=()=>{};var yY={};j1(yY,{WorkspaceSection:()=>cD});function kY(_={}){let $=_.workspaceSettings||{};return{webTerminalEnabled:$.webTerminalEnabled!==!1,vncAllowDirect:$.vncAllowDirect!==!1,treeMaxDepth:$.treeMaxDepth??4,treeMaxEntries:$.treeMaxEntries??5000}}function cD({settingsData:_,setStatus:$,mergeSettingsData:j}){let[G,Z]=C(!0),[X,Y]=C(!0),[L,V]=C(4),[K,Q]=C(5000),[q,B]=C(60),[N,U]=C(3),[E,D]=C(!1),[H,k]=C(!1),O=g(""),W=g(null),I=g(null),x=g(null),J=g(!0);u(()=>{return J.current=!0,()=>{if(J.current=!1,W.current)clearTimeout(W.current);if(I.current)clearTimeout(I.current);if(x.current)clearTimeout(x.current)}},[]);let A=R((w)=>{let y=kY(w),P=J2();Z(y.webTerminalEnabled),Y(y.vncAllowDirect),V(y.treeMaxDepth),Q(y.treeMaxEntries),B(P.refreshIntervalSec),U(P.folderPreviewDepth),O.current=JSON.stringify(y)},[]);u(()=>{A(_||{})},[_,A]);let z=Y0(()=>JSON.stringify(kY({workspaceSettings:{webTerminalEnabled:G,vncAllowDirect:X,treeMaxDepth:L,treeMaxEntries:K}})),[G,X,L,K]);u(()=>{if(z===O.current)return;if(W.current)clearTimeout(W.current);return W.current=setTimeout(async()=>{if(!J.current)return;let w=document.activeElement;if(w&&w.closest?.(".settings-number-stepper"))return;try{let y=await F7(JSON.parse(z));if(!J.current||!y?.ok||!y?.settings)return;if(O.current=z,j?.({workspaceSettings:y.settings}),$?.(null),D(!0),I.current)clearTimeout(I.current);I.current=setTimeout(()=>{if(J.current)D(!1)},4000)}catch(y){$?.(String(y?.message||y),"error")}},800),()=>{if(W.current)clearTimeout(W.current)}},[z,j,$]);let T=R((w)=>{let y=AY(w);if(B(y.refreshIntervalSec),U(y.folderPreviewDepth),k(!0),x.current)clearTimeout(x.current);x.current=setTimeout(()=>{if(J.current)k(!1)},3000)},[]);return F`
        <div class="settings-section">
            ${E&&F`
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
                <input type="checkbox" checked=${G} onChange=${(w)=>Z(w.target.checked)} />
            </div>
            <div class="settings-row">
                <label>Allow direct VNC targets</label>
                <input type="checkbox" checked=${X} onChange=${(w)=>Y(w.target.checked)} />
            </div>
            <p class="settings-hint">Terminal access updates immediately. Direct VNC target policy applies to new VNC requests.</p>

            <h3 style="margin-top:20px">Server scan guardrails</h3>
            <div class="settings-row">
                <label>Max tree depth</label>
                <${v_}
                    label="workspace tree max depth"
                    value=${L}
                    min=${1}
                    max=${8}
                    fallback=${4}
                    width="80px"
                    onChange=${V}
                />
                <span class="settings-hint" style="margin:0">caps all <code>/workspace/tree</code> requests</span>
            </div>
            <div class="settings-row">
                <label>Max entries per scan</label>
                <${v_}
                    label="workspace tree max entries"
                    value=${K}
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
                <${v_}
                    label="workspace refresh interval"
                    value=${q}
                    min=${15}
                    max=${300}
                    step=${15}
                    fallback=${60}
                    width="92px"
                    onChange=${(w)=>T({refreshIntervalSec:w})}
                />
            </div>
            <div class="settings-row">
                <label>Folder preview scan depth</label>
                <${v_}
                    label="folder preview scan depth"
                    value=${N}
                    min=${0}
                    max=${8}
                    fallback=${3}
                    width="80px"
                    onChange=${(w)=>T({folderPreviewDepth:w})}
                />
                <span class="settings-hint" style="margin:0">set to <code>0</code> to disable folder size preview scans</span>
            </div>
            <p class="settings-hint">Root and folder-expansion tree loads remain shallow; the folder size preview is the deepest workspace scan in the UI.</p>
        </div>
    `}var MY=J_(()=>{M0();I_();X9();C4()});var wY={};j1(wY,{EnvironmentSection:()=>lD});function Y9(_={}){let $=_.environmentSettings||_.settings||_.environment||{};return{variables:Array.isArray($.variables)?$.variables:[],overrides:$.overrides&&typeof $.overrides==="object"?$.overrides:{},count:Number($.count||0),overrideCount:Number($.overrideCount||0),keychainEnvNames:Array.isArray($.keychainEnvNames)?$.keychainEnvNames:[]}}function lD({settingsData:_,filter:$="",setStatus:j,mergeSettingsData:G}){let[Z,X]=C(()=>Y9(_||{})),[Y,L]=C({}),[V,K]=C(""),[Q,q]=C(""),[B,N]=C(null);u(()=>{X(Y9(_||{})),L({})},[_]);let U=R((W)=>{let I=Y9({environmentSettings:W?.settings||W});return X(I),G?.({environmentSettings:I}),L({}),I},[G]),E=R(async()=>{try{let W=await U7();if(W?.ok)U(W.settings);j?.("Environment refreshed.","info")}catch(W){j?.(String(W?.message||W),"error")}},[U,j]),D=R(async(W,I)=>{let x=String(W||"").trim();if(!x)return;N(x);try{let J=await y6({action:"set",name:x,value:String(I??"")});if(J?.ok)U(J.settings);if(j?.(`Saved environment override for ${x}.`,"info"),x===V.trim())K(""),q("")}catch(J){j?.(String(J?.message||J),"error")}finally{N(null)}},[U,V,j]),H=R(async(W)=>{let I=String(W||"").trim();if(!I)return;N(I);try{let x=await y6({action:"clear",name:I});if(x?.ok)U(x.settings);j?.(`Cleared environment override for ${I}.`,"info")}catch(x){j?.(String(x?.message||x),"error")}finally{N(null)}},[U,j]),k=Y0(()=>{let W=String($||"").trim().toLowerCase(),I=Array.isArray(Z.variables)?Z.variables:[];if(!W)return I;return I.filter((x)=>{return`${x?.name||""} ${x?.value||""} ${x?.source||""}`.toLowerCase().includes(W)})},[Z.variables,$]),O=R((W,I)=>{L((x)=>({...x||{},[W]:I}))},[]);return F`
        <div class="settings-section">
            <div style="display:flex; align-items:flex-start; justify-content:space-between; gap:12px; margin-bottom:12px;">
                <div>
                    <h3 style="margin-top:0">Environment</h3>
                    <p class="settings-hint" style="margin-top:4px">
                        Showing non-keychain environment variables only. Overrides are stored in extension KV and applied to <code>process.env</code>, so subsequent tool calls inherit them.
                    </p>
                </div>
                <button type="button" class="settings-secondary-btn" onClick=${E}>Refresh</button>
            </div>

            <div class="settings-row" style="align-items:flex-start; gap:10px;">
                <label>Add override</label>
                <div style="display:grid; grid-template-columns:minmax(180px, 0.7fr) minmax(240px, 1fr) auto; gap:8px; flex:1;">
                    <input
                        type="text"
                        value=${V}
                        placeholder="VARIABLE_NAME"
                        spellcheck="false"
                        onInput=${(W)=>K(W.target.value)}
                    />
                    <input
                        type="text"
                        value=${Q}
                        placeholder="value"
                        spellcheck="false"
                        onInput=${(W)=>q(W.target.value)}
                    />
                    <button
                        type="button"
                        disabled=${!V.trim()||B===V.trim()}
                        onClick=${()=>D(V,Q)}
                    >Save</button>
                </div>
            </div>

            <p class="settings-hint">
                ${Z.count} variables visible • ${Z.overrideCount} overrides active • ${Z.keychainEnvNames.length} keychain-injected variables hidden
            </p>

            <div class="settings-tool-list" style="max-height:58vh; overflow:auto;">
                ${k.map((W)=>{let I=String(W?.name||""),x=Object.prototype.hasOwnProperty.call(Y,I)?Y[I]:W.value,J=x!==W.value,A=B===I;return F`
                        <div class="settings-tool-row" key=${I} style="grid-template-columns:minmax(180px,0.45fr) minmax(240px,1fr) auto auto; align-items:center;">
                            <span class="settings-tool-name" title=${I}>${I}</span>
                            <input
                                type="text"
                                value=${x}
                                spellcheck="false"
                                onInput=${(z)=>O(I,z.target.value)}
                                style="min-width:0; width:100%; font-family:var(--font-mono, monospace);"
                            />
                            <span class="settings-tool-kind" title=${W.overridden?"Overridden in KV":"Inherited from process environment"}>
                                ${W.overridden?"override":"process"}
                            </span>
                            <span style="display:flex; gap:6px; justify-content:flex-end;">
                                <button type="button" disabled=${A||!J} onClick=${()=>D(I,x)}>Save</button>
                                <button type="button" disabled=${A||!W.overridden} onClick=${()=>H(I)}>Clear</button>
                            </span>
                        </div>
                    `})}
                ${k.length===0&&F`<p class="settings-hint">No environment variables match "${$}".</p>`}
            </div>
        </div>
    `}var TY=J_(()=>{M0();I_()});var xY={};j1(xY,{ProvidersSection:()=>rD});function hD(_){switch(_){case"oauth":return"OAuth";case"api_key":return"API key";case"custom":return"Configured";default:return"Configured"}}function rD({providers:_,setStatus:$}){let[j,G]=C(null),[Z,X]=C(null),[Y,L]=C({}),V=R((D,H)=>{L((k)=>({...k,[D]:H}))},[]),K=R(async(D)=>{let H=(Y.apiKey||"").trim();if(!H){$?.("API key cannot be empty.","error");return}G(D),$?.(`Configuring ${D}…`,"info");try{let k=JSON.stringify({provider:D,method:"api_key",api_key:H}),O=await W1("default",`/login __step2 ${k}`,null,[]);if(O?.command?.status==="error"){$?.(O.command.message,"error");return}$?.(O?.command?.message||`${D} configured.`,"success"),X(null),L({})}catch(k){$?.(String(k.message||k),"error")}finally{G(null)}},[Y,$]),Q=R(async(D,H)=>{G(D),$?.(`Configuring ${D}…`,"info");try{let k={provider:D,method:"custom"};for(let I of H.customFields||[])k[I.key]=(Y[I.key]||"").trim();let O=JSON.stringify(k),W=await W1("default",`/login __step2 ${O}`,null,[]);if(W?.command?.status==="error"){$?.(W.command.message,"error");return}$?.(W?.command?.message||`${D} configured.`,"success"),X(null),L({})}catch(k){$?.(String(k.message||k),"error")}finally{G(null)}},[Y,$]),q=R(async(D)=>{G(D),$?.(`Starting OAuth for ${D}…`,"info");try{let H=JSON.stringify({provider:D}),O=(await W1("default",`/login __step1 ${H}`,null,[]))?.command?.message||"";if(O.includes("http")){let W=O.match(/(https?:\/\/[^\s)]+)/);if(W)window.open(W[1],"_blank","noopener"),$?.("OAuth window opened. Complete the sign-in flow, then close this message.","success");else $?.(O,"success")}else $?.(O||`OAuth flow started for ${D}. Check the chat.`,"success")}catch(H){$?.(String(H.message||H),"error")}finally{G(null)}},[$]),B=R(async(D)=>{if(j)return;G(D),$?.(`Logging out ${D}…`,"info");try{await W1("default",`/logout ${D}`,null,[]),$?.(`Logged out ${D}. Restart may be needed.`,"success")}catch(H){$?.(String(H.message||H),"error")}finally{G(null)}},[j,$]),N=_||[],U=(D)=>Z===D,E=(D)=>{X((H)=>H===D?null:D),L({})};return F`
        <div class="settings-section">
            <h3>Providers</h3>
            <div class="settings-provider-list">
                ${N.map((D)=>F`
                    <div class=${`settings-provider-card${D.configured?" configured":""}`}>
                        <div class="settings-provider-card-header" onClick=${()=>!D.configured&&E(D.id)}>
                            <div class="settings-provider-card-title">
                                <strong>${D.name}</strong>
                                <span class="settings-provider-id">${D.id}</span>
                                ${D.configured&&F`<span class="settings-tag settings-tag-skill">${hD(D.authType)}</span>`}
                            </div>
                            <div class="settings-provider-card-meta">
                                ${D.hasOAuth&&F`<span class="settings-tag">OAuth</span>`}
                                ${D.hasApiKey&&F`<span class="settings-tag">API Key</span>`}
                                ${D.isCustom&&F`<span class="settings-tag">Custom</span>`}
                            </div>
                            <div class="settings-provider-card-actions">
                                ${D.configured?F`
                                    <button class="settings-addon-btn settings-addon-btn-remove"
                                        disabled=${j===D.id} onClick=${(H)=>{H.stopPropagation(),B(D.id)}}
                                    >${j===D.id?"…":"Logout"}</button>
                                    <button class="settings-addon-btn"
                                        disabled=${j===D.id} onClick=${(H)=>{H.stopPropagation(),E(D.id)}}
                                    >Reconfigure</button>
                                `:F`
                                    <button class="settings-addon-btn settings-addon-btn-install"
                                        disabled=${j===D.id} onClick=${(H)=>{H.stopPropagation(),E(D.id)}}
                                    >Set up</button>
                                `}
                            </div>
                        </div>

                        ${U(D.id)&&F`
                            <div class="settings-provider-setup">
                                <p class="settings-hint settings-provider-setup-hint">Sign-in flows open in the browser. In narrow panes the setup form stacks vertically to avoid clipping.</p>
                                ${D.hasOAuth&&F`
                                    <div class="settings-provider-method">
                                        <button class="settings-addon-btn settings-addon-btn-install"
                                            disabled=${j===D.id}
                                            onClick=${()=>q(D.id)}>
                                            ${j===D.id?"Starting…":"Sign in with OAuth"}
                                        </button>
                                    </div>
                                `}
                                ${D.hasApiKey&&F`
                                    <div class="settings-provider-method">
                                        <div class="settings-provider-field-row">
                                            <label>API Key</label>
                                            <input type="password" value=${Y.apiKey||""}
                                                onInput=${(H)=>V("apiKey",H.target.value)}
                                                placeholder=${D.apiKeyHint||"Enter API key"} />
                                            <button class="settings-addon-btn settings-addon-btn-install"
                                                disabled=${j===D.id||!(Y.apiKey||"").trim()}
                                                onClick=${()=>K(D.id)}>
                                                ${j===D.id?"…":"Save"}
                                            </button>
                                        </div>
                                    </div>
                                `}
                                ${D.isCustom&&F`
                                    <div class="settings-provider-method">
                                        ${(D.customFields||[]).map((H)=>F`
                                            <div class="settings-provider-field-row">
                                                <label>${H.label}${H.required?" *":""}</label>
                                                <input type="text" value=${Y[H.key]||""}
                                                    onInput=${(k)=>V(H.key,k.target.value)}
                                                    placeholder=${H.placeholder||""} />
                                            </div>
                                        `)}
                                        <div class="settings-provider-form-actions">
                                            <button class="settings-addon-btn settings-addon-btn-install"
                                                disabled=${j===D.id}
                                                onClick=${()=>Q(D.id,D)}>
                                                ${j===D.id?"Configuring…":"Save configuration"}
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
    `}var IY=J_(()=>{M0();I_()});var CY={};j1(CY,{ModelsSection:()=>oD});function dD(_){return typeof _==="string"&&_.toLowerCase()==="anthropic"}function iD({thinkingLevel:_,supportsThinking:$,provider:j,availableLevels:G,onSetLevel:Z,disabled:X}){let Y=dD(j)?pD:nD,L=G&&G.length>1?G:["off","minimal","low","medium","high"],V=Math.max(0,L.indexOf(_??"off"));if(!$)return F`<div class="settings-thinking-slider"><label>Thinking level</label><p class="settings-hint" style="margin:4px 0 0">Current model does not support thinking.</p></div>`;return F`
        <div class="settings-thinking-slider">
            <label>Thinking level: <strong>${Y[L[V]]||L[V]}</strong></label>
            <div class="settings-slider-track">
                <input type="range" min="0" max=${L.length-1} step="1" value=${V} disabled=${X}
                    onInput=${(K)=>Z(L[parseInt(K.target.value,10)])} />
                <div class="settings-slider-labels">
                    ${L.map((K,Q)=>F`<span class=${Q===V?"active":""} onClick=${()=>!X&&Z(K)}>${Y[K]||K}</span>`)}
                </div>
            </div>
        </div>
    `}function oD({filter:_=""}){let[$,j]=C(null),[G,Z]=C(!1),[X,Y]=C("off"),[L,V]=C(!1),[K,Q]=C(["off"]),[q,B]=C(!1),N=R(async()=>{let x=await w4();if(j(x),x.thinking_level)Y(x.thinking_level);if(V(Boolean(x.supports_thinking)),Array.isArray(x.available_thinking_levels)&&x.available_thinking_levels.length>0)Q(x.available_thinking_levels);return x},[]);u(()=>{N().catch(()=>j({models:[],model_options:[]}))},[]);let U=R(async(x)=>{if(G)return;Z(!0);try{await W1("default",`/model ${x}`,null,[]),await N()}catch(J){console.error("Failed to switch model:",J)}finally{Z(!1)}},[G,N]),E=R(async(x)=>{if(q)return;B(!0),Y(x);try{let J=await W1("default",`/thinking ${x}`,null,[]);if(J?.command?.thinking_level)Y(J.command.thinking_level);V(J?.command?.supports_thinking!==!1),await N()}catch(J){console.error("Failed to set thinking:",J),await N().catch((A)=>{})}finally{B(!1)}},[q,N]);if(!$)return F`<div class="settings-loading">Loading models\u2026</div>`;let D=$.model_options||[],H=$.current,O=D.find((x)=>x.label===H)?.provider||"",W=_.toLowerCase(),I=W?D.filter((x)=>x.label.toLowerCase().includes(W)||(x.provider||"").toLowerCase().includes(W)):D;return F`
        <div class="settings-models-split">
            <div class="settings-models-summary settings-hint">Model and provider names may wrap in narrow panes to avoid clipping.</div>
            <div class="settings-models-list">
                <table class="settings-table settings-borderless settings-models-table">
                    <thead><tr><th style="width:32px"></th><th>Model</th><th>Provider</th><th>Context</th><th style="text-align:center">Reasoning</th></tr></thead>
                    <tbody>
                        ${I.map((x)=>F`
                            <tr class=${x.label===H?"settings-row-active":""}>
                                <td><input type="radio" name="settings-model" checked=${x.label===H} disabled=${G} onChange=${()=>U(x.label)} /></td>
                                <td>${x.name||x.label}</td><td>${x.provider}</td>
                                <td>${x.context_window?(x.context_window/1000).toFixed(0)+"K":"—"}</td>
                                <td style="text-align:center">${x.reasoning?"\uD83E\uDDE0":"—"}</td>
                            </tr>
                        `)}
                        ${I.length===0&&F`<tr><td colspan="5" class="settings-empty">No models match "${_}"</td></tr>`}
                    </tbody>
                </table>
            </div>
            <div class="settings-models-footer">
                <${iD}
                    thinkingLevel=${X}
                    supportsThinking=${L}
                    provider=${O}
                    availableLevels=${K}
                    onSetLevel=${E}
                    disabled=${q||G} />
            </div>
        </div>
    `}var pD,nD;var PY=J_(()=>{M0();I_();pD={off:"off",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"max"},nD={off:"off",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"xhigh"}});var RY={};j1(RY,{ThemeSection:()=>sD});function fY(_={}){return{uiTheme:typeof _.uiTheme==="string"&&_.uiTheme.trim()?_.uiTheme.trim():"default",uiTint:typeof _.uiTint==="string"&&_.uiTint.trim()?_.uiTint.trim():""}}function sD({themes:_,colorKeys:$,settingsData:j,setStatus:G,mergeSettingsData:Z}){let[X,Y]=C("default"),[L,V]=C(""),[K,Q]=C(!1),q=g(""),B=g(null),N=g(!0);u(()=>{return N.current=!0,()=>{N.current=!1}},[]);let U=R((O)=>{let W=fY(O);Y(W.uiTheme),V(W.uiTint),q.current=JSON.stringify(W)},[]);u(()=>{if(j){U(j);return}U({uiTheme:document.documentElement.dataset.colorTheme||"default",uiTint:document.documentElement.dataset.tint||""})},[j,U]);let E=R((O,W)=>{F2({theme:O,tint:W||null}),Y(O||"default"),V(W||"")},[]),D=Y0(()=>JSON.stringify(fY({uiTheme:X,uiTint:L})),[X,L]);u(()=>{if(D===q.current)return;if(B.current)clearTimeout(B.current);return B.current=setTimeout(async()=>{if(!N.current)return;Q(!0);try{let O=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:D}),W=await O.json().catch(()=>({}));if(!N.current)return;if(!O.ok||!W?.ok||!W?.settings){G?.(W?.error||"Failed to save appearance settings.","error");return}q.current=D,Z?.(W.settings),G?.("Appearance synced across clients.","success")}catch(O){if(!N.current)return;console.warn("[settings/appearance] Failed to persist appearance settings.",O),G?.("Failed to save appearance settings.","error")}finally{if(N.current)Q(!1)}},250),()=>{if(B.current)clearTimeout(B.current)}},[D,Z,G]);let H=$||[],k=_||[];return F`
        <div class="settings-section">
            ${K&&F`<div class="settings-hint" style="margin:0 0 12px 0;">Syncing appearance…</div>`}
            <div class="settings-tint-row">
                <label class="settings-tint-label">
                    <input type="radio" name="settings-theme"
                        checked=${X==="default"}
                        onChange=${()=>E("default",L)} />
                    <strong>Default</strong>
                    <span class="settings-hint" style="margin:0 0 0 6px">auto (light/dark)</span>
                </label>
                <div class="settings-tint-picker">
                    <label class="settings-hint" style="margin:0">Tint:</label>
                    <input type="color"
                        value=${L||"#1d9bf0"}
                        onInput=${(O)=>{let W=O.target.value;if(V(W),X==="default")F2({theme:"default",tint:W})}} />
                    ${L&&F`
                        <button class="settings-tint-clear" onClick=${()=>E("default","")}
                            title="Clear tint">\u2715</button>
                    `}
                    <span class="settings-tint-hex">${L||"none"}</span>
                </div>
            </div>

            <table class="settings-table settings-borderless settings-theme-table">
                <thead>
                    <tr>
                        <th></th><th>Theme</th><th>Mode</th>
                        ${H.map((O)=>F`<th class="settings-swatch-header">${O.replace(/([A-Z])/g," $1").trim()}</th>`)}
                    </tr>
                </thead>
                <tbody>
                    ${k.filter((O)=>O.name!=="default").map((O)=>F`
                        <tr class=${O.name===X?"settings-row-active":""}
                            style="cursor:pointer" onClick=${()=>E(O.name,"")}>
                            <td><input type="radio" name="settings-theme" checked=${O.name===X} onChange=${()=>E(O.name,"")} /></td>
                            <td><strong>${O.label}</strong></td>
                            <td>${O.mode}</td>
                            ${H.map((W)=>{let I=O.colors?.[W];return F`<td class="settings-swatch-cell">
                                    ${I?F`<span class="settings-color-swatch" style=${"background:"+I} title=${I}></span>`:"—"}
                                </td>`})}
                        </tr>
                    `)}
                </tbody>
            </table>
        </div>
    `}var SY=J_(()=>{M0();_5()});var gY={};j1(gY,{__scheduledTasksSettingsTest:()=>jz,ScheduledTasksSection:()=>$z});function P4(_){if(!_)return"—";let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}function uY(_){let $=Number(_);if(!Number.isFinite($))return"—";if($<1000)return`${Math.round($)}ms`;return`${($/1000).toFixed($<1e4?1:0)}s`}function L9(_){if(!_)return"—";if(_.schedule_type==="once")return`once · ${P4(_.schedule_value)}`;if(_.schedule_type==="interval")return`interval · ${_.schedule_value}`;if(_.schedule_type==="cron")return`cron · ${_.schedule_value}`;return`${_.schedule_type||"schedule"} · ${_.schedule_value||"—"}`}function K9(_){let $=_?.task_kind||"agent";return $==="internal"?"internal/protected":$}function V9(_){return(_?.task_kind||"agent")==="internal"}function tD(_){if(!_)return"";let $=String(_).replace(/\s+/g," ").trim();return $.length>180?`${$.slice(0,179)}…`:$}function A2({children:_,type:$="neutral"}){return F`<span class=${`settings-task-pill settings-task-pill-${$}`}>${_}</span>`}function eD({task:_}){let $=Array.isArray(_?.recent_run_logs)?_.recent_run_logs:[];if(!$.length)return F`<p class="settings-hint">No run logs recorded yet.</p>`;return F`
        <div class="settings-task-run-list">
            ${$.map((j)=>F`
                <div class=${`settings-task-run-row settings-task-run-${j.status||"unknown"}`}>
                    <div class="settings-task-run-meta">
                        <${A2} type=${j.status==="error"?"error":"success"}>${j.status||"unknown"}<//>
                        <span>${P4(j.run_at)}</span>
                        <span>${uY(j.duration_ms)}</span>
                    </div>
                    <div class="settings-task-run-summary">
                        ${j.error_summary||tD(j.error)||j.result_summary||j.result||"No summary"}
                    </div>
                </div>
            `)}
        </div>
    `}function _z({task:_,onAction:$}){if(!_)return F`<div class="settings-task-detail-empty">Select a task to inspect schedule, status, and run history.</div>`;let j=V9(_);return F`
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
                <span>Kind</span><strong>${K9(_)}</strong>
                <span>Schedule</span><strong>${L9(_)}</strong>
                <span>Next run</span><strong>${P4(_.next_run)}</strong>
                <span>Last run</span><strong>${P4(_.last_run)}</strong>
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
            <${eD} task=${_} />
        </div>
    `}function $z({filter:_="",setStatus:$}){let[j,G]=C([]),[Z,X]=C({active:0,paused:0,completed:0}),[Y,L]=C("all"),[V,K]=C(""),[Q,q]=C(!0),[B,N]=C(null),[U,E]=C(null),[D,H]=C(null),[k,O]=C(!1),W=R(async(z={})=>{q(!0),N(null);try{let T=await q7({status:Y,chatJid:V.trim()||void 0,limit:50,includeRunLogs:!0,runLogLimit:5});G(T.tasks||[]),X(T.counts||{active:0,paused:0,completed:0});let w=z.selectedId||U,y=(T.tasks||[]).find((P)=>P.id===w)||(T.tasks||[])[0]||null;E(y?.id||null),H(y)}catch(T){N(T?.message||"Failed to load scheduled tasks.")}finally{q(!1)}},[Y,V,U]);u(()=>{W()},[W]);let I=String(_||"").trim().toLowerCase(),x=Y0(()=>{if(!I)return j;return j.filter((z)=>[z.id,z.chat_jid,z.status,z.task_kind,z.schedule_type,z.schedule_value,z.summary,z.prompt_summary,z.command_summary,z.latest_run_log?.error_summary].some((T)=>String(T||"").toLowerCase().includes(I)))},[j,I]),J=R((z)=>{E(z?.id||null),H(z||null)},[]),A=R(async(z,T)=>{if(!T||k)return;let w=V9(T),y=T.summary||T.command_summary||T.prompt_summary||T.id,P=z==="delete"?`Delete scheduled task ${T.id}?

${y}`:`${z==="pause"?"Pause":"Resume"} scheduled task ${T.id}?

${y}`;if(!window.confirm(P))return;if(w&&!window.confirm(`Task ${T.id} is internal/protected. Continue with ${z}?`))return;O(!0),$?.(`${z==="delete"?"Deleting":z==="pause"?"Pausing":"Resuming"} ${T.id}…`,"info");try{await Q7(z,T.id,{allowInternal:w}),$?.(`Scheduled task ${T.id} ${z==="delete"?"deleted":z==="pause"?"paused":"resumed"}.`,"success"),await W({selectedId:z==="delete"?null:T.id})}catch(f){$?.(f?.message||`Failed to ${z} task.`,"error")}finally{O(!1)}},[k,W,$]);return F`
        <div class="settings-section settings-scheduled-tasks-section">
            <div class="settings-task-toolbar">
                <div class="settings-task-counts">
                    <${A2} type="active">Active ${Z.active||0}<//>
                    <${A2} type="paused">Paused ${Z.paused||0}<//>
                    <${A2} type="completed">Completed ${Z.completed||0}<//>
                </div>
                <div class="settings-task-filters">
                    <select value=${Y} onChange=${(z)=>L(z.target.value)}>
                        ${aD.map((z)=>F`<option value=${z}>${z==="all"?"All statuses":z}</option>`)}
                    </select>
                    <input type="text" placeholder="Filter chat JID…" value=${V} onInput=${(z)=>K(z.target.value)} />
                    <button onClick=${()=>W()} disabled=${Q}>Refresh</button>
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
                        ${x.map((z)=>F`
                            <button class=${`settings-task-row ${z.id===U?"active":""}`} onClick=${()=>J(z)}>
                                <span class="settings-task-row-main">
                                    <strong>${z.summary||z.id}</strong>
                                    <span>${L9(z)}</span>
                                </span>
                                <span class="settings-task-row-meta">
                                    <${A2} type=${z.status||"neutral"}>${z.status}<//>
                                    <${A2}>${K9(z)}<//>
                                </span>
                                <span class="settings-task-row-times">Next ${P4(z.next_run)} · Last ${P4(z.last_run)}${z.latest_run_log?.status?` · ${z.latest_run_log.status}`:""}</span>
                            </button>
                        `)}
                        ${x.length===0&&F`<p class="settings-hint">No tasks match “${_}”.</p>`}
                    </div>
                    <${_z} task=${D&&x.some((z)=>z.id===D.id)?D:x[0]} onAction=${A} />
                </div>
            `}
        </div>
    `}var aD,jz;var bY=J_(()=>{M0();I_();aD=["all","active","paused","completed"];jz={formatDateTime:P4,formatDuration:uY,labelForSchedule:L9,kindLabel:K9,isProtectedTask:V9}});function vY(_){return String(_||"").toLowerCase().replace(/^[@/]+/,"").replace(/\s+/g," ").trim()}function k2(_){return typeof _==="string"&&_.trim().length>0}function q9(_,...$){let j=vY(_);if(!j)return!0;let G=$.map((Z)=>vY(Z)).filter(Boolean);for(let Z of G)if(Z.startsWith(j)||Z.includes(j))return!0;return!1}function mY(_){if(!Array.isArray(_))return null;let $=[],j=new Set;for(let G of _){let Z=String(G||"").trim();if(!Z)continue;let X=Z.toLowerCase();if(j.has(X))continue;j.add(X),$.push(Z)}return $}function a$(_){let $=_&&typeof _==="object"?_:{};return{workspaceCommands:mY($.workspaceCommands),slashCommands:mY($.slashCommands)}}function cY(_,$){if(!Array.isArray(_))return!0;return _.some((j)=>j.toLowerCase()===$.toLowerCase())}function Gz(_){let $=Array.isArray(_?.commands)?_.commands:[],j=a$(_?.settings),G=String(_?.query||"");return $.filter((Z)=>cY(j.workspaceCommands,Z.id)).filter((Z)=>q9(G,Z.label,Z.description,...Z.keywords||[])).map((Z)=>({key:`workspace:${Z.id}`,kind:"workspace",title:Z.label,subtitle:Z.description,searchText:`${Z.label} ${Z.description} ${(Z.keywords||[]).join(" ")}`.trim(),visualHint:Z.label.slice(0,1).toUpperCase()||"W",categoryLabel:"Workspace",actionHint:"Run",commandId:Z.id}))}function Zz(_){let $=Array.isArray(_?.agents)?_.agents:[],j=String(_?.query||""),G=new Set;return $.filter((Z)=>{let X=k2(Z?.chat_jid)?Z.chat_jid.trim():"";if(!X||G.has(X))return!1;if(Z?.archived_at)return!1;return G.add(X),!0}).filter((Z)=>q9(j,`@${String(Z?.agent_name||"").trim()}`,Z?.session_name,Z?.chat_jid)).map((Z)=>{let X=k2(Z?.agent_name)?Z.agent_name.trim():String(Z?.chat_jid||"").replace(/^[^:]+:/,""),Y=k2(Z?.session_name)?Z.session_name.trim():"",L=String(Z?.chat_jid||"").trim();return{key:`agent:${L}`,kind:"agent",title:`@${X}`,subtitle:Y||L,searchText:`@${X} ${Y} ${L}`.trim(),visualHint:X.slice(0,1).toUpperCase()||"@",categoryLabel:"Agent",actionHint:"Open",chatJid:L}})}function Xz(_){let $=Array.isArray(_?.slashCommands)?_.slashCommands:[],j=a$(_?.settings),G=String(_?.query||""),Z=new Set;return $.filter((X)=>{let Y=k2(X?.name)?X.name.trim():"";if(!Y||Z.has(Y.toLowerCase()))return!1;return Z.add(Y.toLowerCase()),cY(j.slashCommands,Y)}).filter((X)=>q9(G,X?.name,X?.description,X?.source)).map((X)=>{let Y=String(X?.name||"").trim(),L=k2(X?.description)?X.description.trim():"slash command",V=k2(X?.source)?X.source.trim():"";return{key:`slash:${Y}`,kind:"slash",title:Y,subtitle:L,searchText:`${Y} ${L} ${String(X?.source||"")}`.trim(),visualHint:"/",categoryLabel:V||"Slash",actionHint:"Insert",commandName:Y}})}function lY(_){return[...Zz({agents:_?.agents,query:_?.query}),...Gz({commands:_?.workspaceCommands,settings:_?.settings,query:_?.query}),...Xz({slashCommands:_?.slashCommands,settings:_?.settings,query:_?.query})]}var s$;var Q9=J_(()=>{s$=[{id:"toggle-workspace",label:"Toggle workspace",description:"Show or hide the workspace sidebar.",keywords:["workspace","sidebar","explorer"]},{id:"open-explorer",label:"Open explorer",description:"Open the workspace explorer sidebar.",keywords:["workspace","explorer","sidebar"]},{id:"toggle-chat-only",label:"Chat-only mode",description:"Toggle chat-only mode.",keywords:["chat","mode","layout"]},{id:"open-terminal-tab",label:"Open terminal in tab",description:"Open the terminal pane in a workspace tab.",keywords:["terminal","shell","tab"]},{id:"open-vnc-tab",label:"Open VNC in tab",description:"Open the VNC viewer in a workspace tab.",keywords:["vnc","remote","desktop","tab"]},{id:"toggle-terminal-dock",label:"Toggle terminal dock",description:"Show or hide the terminal dock.",keywords:["terminal","dock","shell"]},{id:"open-settings",label:"Settings",description:"Open the settings dialog.",keywords:["settings","preferences","config"]}]});var pY={};j1(pY,{QuickActionsSection:()=>Yz});function hY(_,...$){let j=String(_||"").trim().toLowerCase();if(!j)return!0;return $.some((G)=>String(G||"").toLowerCase().includes(j))}function rY(_){if(!Array.isArray(_))return null;return new Set(_.map(($)=>String($||"").trim().toLowerCase()).filter(Boolean))}function Yz({filter:_="",setStatus:$,mergeSettingsData:j}){let[G,Z]=C(()=>s$.map((x)=>x.id)),[X,Y]=C([]),[L,V]=C([]),[K,Q]=C(!0),[q,B]=C(!1),N=R(async()=>{Q(!0);try{let[x,J]=await Promise.all([K5(),L5("web:default").catch(()=>({commands:[]}))]),A=a$(x?.settings),z=Array.isArray(J?.commands)?J.commands:[];V(z),Z(Array.isArray(A.workspaceCommands)?A.workspaceCommands:s$.map((T)=>T.id)),Y(Array.isArray(A.slashCommands)?A.slashCommands:z.map((T)=>String(T?.name||"").trim()).filter(Boolean))}catch(x){$?.(String(x?.message||x),"error")}finally{Q(!1)}},[$]);u(()=>{N()},[N]);let U=Y0(()=>rY(G),[G]),E=Y0(()=>rY(X),[X]),D=Y0(()=>s$.filter((x)=>hY(_,x.label,x.description,...x.keywords||[])),[_]),H=Y0(()=>L.filter((x)=>hY(_,x?.name,x?.description,x?.source)),[L,_]),k=R((x)=>{Z((J)=>{let A=new Set((Array.isArray(J)?J:[]).map((z)=>String(z||"").trim()).filter(Boolean));if(A.has(x))A.delete(x);else A.add(x);return s$.map((z)=>z.id).filter((z)=>A.has(z))})},[]),O=R((x)=>{Y((J)=>{let A=new Set((Array.isArray(J)?J:[]).map((z)=>String(z||"").trim()).filter(Boolean));if(A.has(x))A.delete(x);else A.add(x);return L.map((z)=>String(z?.name||"").trim()).filter((z)=>z&&A.has(z))})},[L]),W=R(()=>{Z(s$.map((x)=>x.id)),Y(L.map((x)=>String(x?.name||"").trim()).filter(Boolean))},[L]),I=R(async()=>{if(q)return;B(!0),$?.("Saving quick actions…","info");try{let x=await B7({workspaceCommands:G,slashCommands:X}),J=a$(x?.settings);j?.({quickActions:J}),window.dispatchEvent(new CustomEvent("piclaw:quick-actions-settings-updated",{detail:{settings:J}})),$?.("Quick Actions saved.","success")}catch(x){$?.(String(x?.message||x),"error")}finally{B(!1)}},[j,q,$,X,G]);if(K)return F`<div class="settings-loading">Loading…</div>`;return F`
        <div class="settings-section">
            <h3>Timeline Quick Actions</h3>
            <p class="settings-hint">
                Choose which actions appear in the timeline typeahead. Agents are always pinned first, then workspace commands, then slash commands.
            </p>

            <div class="settings-row" style="align-items:center; gap:10px; margin-bottom:12px;">
                <button class="settings-addon-btn" onClick=${W} disabled=${q}>Enable all</button>
                <button class="settings-addon-btn settings-addon-btn-install" onClick=${I} disabled=${q}>
                    ${q?"Saving…":"Save & apply"}
                </button>
            </div>

            <h3 style="margin-top:8px;">Workspace commands</h3>
            <div class="settings-subsection-list">
                ${D.map((x)=>{let J=U?U.has(x.id.toLowerCase()):!0;return F`
                        <label class="settings-checkbox-row" key=${x.id}>
                            <input type="checkbox" checked=${J} onChange=${()=>k(x.id)} />
                            <div>
                                <div>${x.label}</div>
                                <div class="settings-hint" style="margin:2px 0 0 0;">${x.description}</div>
                            </div>
                        </label>
                    `})}
                ${D.length===0&&F`<div class="settings-hint">No workspace commands match this filter.</div>`}
            </div>

            <h3 style="margin-top:20px;">Slash commands</h3>
            <div class="settings-subsection-list">
                ${H.map((x)=>{let J=String(x?.name||"").trim(),A=E?E.has(J.toLowerCase()):!0;return F`
                        <label class="settings-checkbox-row" key=${J}>
                            <input type="checkbox" checked=${A} onChange=${()=>O(J)} />
                            <div>
                                <div><code>${J}</code></div>
                                <div class="settings-hint" style="margin:2px 0 0 0;">${x?.description||"slash command"}</div>
                            </div>
                        </label>
                    `})}
                ${H.length===0&&F`<div class="settings-hint">No slash commands match this filter.</div>`}
            </div>
        </div>
    `}var nY=J_(()=>{M0();I_();Q9()});var dY={};j1(dY,{KeychainSection:()=>Vz});function Lz(_){if(!_)return"—";try{return new Date(_).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})}catch{return _}}function Vz({filter:_=""}){let[$,j]=C([]),[G,Z]=C(!0),[X,Y]=C(null),[L,V]=C(!1),[K,Q]=C(""),[q,B]=C(""),[N,U]=C(""),[E,D]=C(""),[H,k]=C(""),[O,W]=C("secret"),[I,x]=C(!1),[J,A]=C({}),[z,T]=C(null),[w,y]=C(null),[P,f]=C(null),b=g(null),c=g(null),h=g(null),_0=R(async()=>{Z(!0),Y(null);try{let X0=await(await fetch("/agent/keychain")).json();if(X0?.ok)j(X0.entries||[]);else Y(X0?.error||"Failed to load keychain.")}catch(s){Y("Failed to load keychain.")}finally{Z(!1)}},[]);u(()=>{_0()},[_0]);let v=R(async()=>{let s=K.trim(),X0=q;if(!s||!X0)return;x(!0);try{let C0=await(await fetch("/agent/keychain",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:s,secret:X0,type:O,username:N.trim()||void 0,userNote:E,agentNote:H})})).json();if(C0?.ok)Q(""),B(""),U(""),D(""),k(""),W("secret"),V(!1),await _0();else Y(C0?.error||"Failed to add entry.")}catch{Y("Failed to add entry.")}finally{x(!1)}},[K,q,N,E,H,O,_0]),e=R(async(s)=>{try{let D0=await(await fetch("/agent/keychain",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:s})})).json();if(D0?.ok)y(null),f((C0)=>C0?.name===s?null:C0),await _0();else Y(D0?.error||"Failed to delete entry.")}catch{Y("Failed to delete entry.")}},[_0]),z0=R(async(s)=>{let X0=s?.name;if(!X0)return;let D0=J[X0]||{},C0=Object.prototype.hasOwnProperty.call(D0,"userNote")?D0.userNote:s.userNote||"",g0=Object.prototype.hasOwnProperty.call(D0,"agentNote")?D0.agentNote:s.agentNote||"";T(X0);try{let j_=await(await fetch("/agent/keychain/notes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:X0,userNote:C0,agentNote:g0})})).json();if(j_?.ok)A((m0)=>{let d0={...m0||{}};return delete d0[X0],d0}),await _0();else Y(j_?.error||"Failed to save notes.")}catch{Y("Failed to save notes.")}finally{T(null)}},[J,_0]),j0=R((s,X0,D0)=>{A((C0)=>({...C0||{},[s]:{...(C0||{})[s]||{},[X0]:D0}}))},[]),$0=R(async(s,X0,D0)=>{try{let g0=await(await fetch("/agent/keychain/reveal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:s,master_password:X0||void 0,totp_code:D0||void 0})})).json();if(g0?.ok)f({name:s,phase:"revealed",secret:g0.secret,username:g0.username,masterPassword:X0});else if(g0?.needs_master_password)f((n0)=>({name:s,phase:"password",masterPassword:"",error:n0?.name===s&&n0?.masterPassword?g0.error:null})),requestAnimationFrame(()=>c.current?.focus());else if(g0?.needs_totp)f((n0)=>({name:s,phase:"totp",masterPassword:X0,totpCode:"",error:n0?.name===s&&n0?.phase==="totp"&&n0?.totpCode?g0.error:null})),requestAnimationFrame(()=>h.current?.focus());else f({name:s,phase:"error",error:g0?.error||"Failed to reveal."})}catch{f({name:s,phase:"error",error:"Failed to reveal."})}},[]),L0=R((s)=>{if(P?.name===s&&P?.phase==="revealed"){f(null);return}$0(s,null,null)},[P,$0]),B0=R((s)=>{let X0=P?.masterPassword||"";if(!X0)return;$0(s,X0,null)},[P,$0]),t=R((s)=>{let X0=P?.totpCode||"";if(X0.length<6)return;$0(s,P?.masterPassword,X0)},[P,$0]),V0=R(async(s)=>{try{await navigator.clipboard.writeText(s)}catch{let X0=document.createElement("textarea");X0.value=s,X0.style.position="fixed",X0.style.opacity="0",document.body.appendChild(X0),X0.select(),document.execCommand("copy"),document.body.removeChild(X0)}},[]);u(()=>{if(L)requestAnimationFrame(()=>b.current?.focus())},[L]);let q0=_.toLowerCase(),k0=Y0(()=>{if(!q0)return $;return $.filter((s)=>s.name.toLowerCase().includes(q0)||(s.type||"").toLowerCase().includes(q0)||(s.envVar||"").toLowerCase().includes(q0)||(s.userNote||"").toLowerCase().includes(q0)||(s.agentNote||"").toLowerCase().includes(q0))},[$,q0]);if(G)return F`<div class="settings-section"><div class="settings-loading">Loading keychain…</div></div>`;return F`
        <div class="settings-section">
            ${X&&F`
                <div class="settings-keychain-error" role="alert">
                    ${X}
                    <button class="settings-keychain-dismiss" onClick=${()=>Y(null)}>✕</button>
                </div>
            `}
            <div class="settings-keychain-toolbar" style="display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap;">
                <span class="settings-hint" style="margin:0; display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                    <span>${k0.length} entr${k0.length===1?"y":"ies"}${q0?` matching "${_}"`:""}, encrypted at rest.</span>
                    <span style="display:inline-flex; align-items:center; gap:6px;">
                        <span>Click</span>
                        <span aria-hidden="true" style="display:inline-flex; width:18px; height:18px; align-items:center; justify-content:center; border-radius:999px; border:1px solid var(--border-color, rgba(120,120,120,.22)); background:var(--panel-bg, rgba(255,255,255,.04));">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                        </span>
                        <span>to reveal.</span>
                    </span>
                </span>
                <button class="settings-keychain-add-btn" onClick=${()=>V(!L)}>
                    ${L?"Cancel":"+ Add entry"}
                </button>
            </div>

            ${L&&F`
                <div class="settings-keychain-add-form">
                    <div class="settings-keychain-add-row">
                        <input ref=${b} type="text" placeholder="Entry name (e.g. github/my-token)"
                            value=${K} onInput=${(s)=>Q(s.target.value)}
                            class="settings-keychain-input" />
                        <select value=${O} onChange=${(s)=>W(s.target.value)}
                            class="settings-keychain-select">
                            ${Kz.map((s)=>F`<option value=${s}>${s}</option>`)}
                        </select>
                    </div>
                    <div class="settings-keychain-add-row">
                        <input type="password" placeholder="Secret value"
                            value=${q} onInput=${(s)=>B(s.target.value)}
                            class="settings-keychain-input settings-keychain-secret" />
                        <input type="text" placeholder="Username (optional)"
                            value=${N} onInput=${(s)=>U(s.target.value)}
                            class="settings-keychain-input" style="max-width:200px" />
                        <button class="settings-keychain-save-btn" onClick=${v}
                            disabled=${I||!K.trim()||!q}>
                            ${I?"Saving…":"Save"}
                        </button>
                    </div>
                    <div class="settings-keychain-add-row" style="align-items:stretch">
                        <textarea placeholder="User note (visible in this UI only)"
                            value=${E} onInput=${(s)=>D(s.target.value)}
                            class="settings-keychain-input" rows="2" style="resize:vertical; min-height:56px"></textarea>
                        <textarea placeholder="Agent note (safe to expose to agents)"
                            value=${H} onInput=${(s)=>k(s.target.value)}
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
                        ${k0.length===0&&F`
                            <tr><td colspan="5" class="settings-keychain-empty">
                                ${q0?"No entries match the filter.":"No keychain entries."}
                            </td></tr>
                        `}
                        ${k0.map((s)=>{let X0=P?.name===s.name?P:null,D0=X0?.phase==="revealed",C0=X0?.phase==="password",g0=X0?.phase==="totp",n0=X0?.phase==="error",j_=J[s.name]||{},m0=Object.prototype.hasOwnProperty.call(j_,"userNote")?j_.userNote:s.userNote||"",d0=Object.prototype.hasOwnProperty.call(j_,"agentNote")?j_.agentNote:s.agentNote||"",S0=m0!==(s.userNote||"")||d0!==(s.agentNote||""),o0=z===s.name;return F`
                            <tr class="settings-keychain-row" key=${s.name}>
                                <td class="settings-keychain-name">${s.name}</td>
                                <td><span class="settings-keychain-type-badge">${s.type}</span></td>
                                <td class="settings-keychain-env">${s.envVar?F`<code>$${s.envVar}</code>`:"—"}</td>
                                <td class="settings-keychain-date">${Lz(s.updatedAt)}</td>
                                <td class="settings-keychain-actions">
                                    <button class=${`settings-keychain-reveal-btn${D0?" active":""}`}
                                        onClick=${()=>L0(s.name)}
                                        title=${D0?"Hide secret":"Reveal secret"}>
                                        ${D0?F`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`:F`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`}
                                    </button>
                                    ${w===s.name?F`
                                            <span class="settings-keychain-confirm">Delete?
                                                <button class="settings-keychain-confirm-yes" onClick=${()=>e(s.name)}>Yes</button>
                                                <button class="settings-keychain-confirm-no" onClick=${()=>y(null)}>No</button>
                                            </span>
                                        `:F`<button class="settings-keychain-delete-btn" onClick=${()=>y(s.name)} title="Delete">🗑</button>`}
                                </td>
                            </tr>
                            <tr class="settings-keychain-notes-row" key=${s.name+"-notes"}>
                                <td colspan="5">
                                    <div style="display:grid; grid-template-columns:1fr 1fr auto; gap:8px; align-items:start; padding:8px 0 10px 0;">
                                        <label style="display:flex; flex-direction:column; gap:4px; min-width:0;">
                                            <span class="settings-hint" style="margin:0">User note</span>
                                            <textarea class="settings-keychain-input" rows="2" style="resize:vertical; min-height:52px; width:100%;" placeholder="Human/UI note only"
                                                value=${m0}
                                                onInput=${(v0)=>j0(s.name,"userNote",v0.target.value)}></textarea>
                                        </label>
                                        <label style="display:flex; flex-direction:column; gap:4px; min-width:0;">
                                            <span class="settings-hint" style="margin:0">Agent-readable note</span>
                                            <textarea class="settings-keychain-input" rows="2" style="resize:vertical; min-height:52px; width:100%;" placeholder="Safe guidance for agents"
                                                value=${d0}
                                                onInput=${(v0)=>j0(s.name,"agentNote",v0.target.value)}></textarea>
                                        </label>
                                        <button class="settings-keychain-save-btn" style="margin-top:20px" disabled=${!S0||o0} onClick=${()=>z0(s)}>
                                            ${o0?"Saving…":"Save notes"}
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            ${C0&&F`
                                <tr class="settings-keychain-prompt-row" key=${s.name+"-pw"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-prompt">
                                            <span class="settings-keychain-prompt-label">Master password:</span>
                                            <input ref=${c} type="password" autocomplete="off"
                                                placeholder="Enter keychain master password"
                                                class="settings-keychain-prompt-input"
                                                value=${X0?.masterPassword||""}
                                                onInput=${(v0)=>f((a0)=>({...a0,masterPassword:v0.target.value}))}
                                                onKeyDown=${(v0)=>{if(v0.key==="Enter")B0(s.name);if(v0.key==="Escape")f(null)}}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${()=>B0(s.name)}
                                                disabled=${!X0?.masterPassword}>Unlock</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${()=>f(null)}>Cancel</button>
                                            ${X0?.error&&F`<span class="settings-keychain-prompt-error">${X0.error}</span>`}
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${g0&&F`
                                <tr class="settings-keychain-prompt-row" key=${s.name+"-totp"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-prompt">
                                            <span class="settings-keychain-prompt-label">TOTP code:</span>
                                            <input ref=${h} type="text" inputmode="numeric" autocomplete="one-time-code"
                                                maxlength="6" placeholder="000000"
                                                class="settings-keychain-prompt-input" style="width:90px;text-align:center;letter-spacing:0.15em"
                                                value=${X0?.totpCode||""}
                                                onInput=${(v0)=>f((a0)=>({...a0,totpCode:v0.target.value.replace(/\\D/g,"").slice(0,6)}))}
                                                onKeyDown=${(v0)=>{if(v0.key==="Enter")t(s.name);if(v0.key==="Escape")f(null)}}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${()=>t(s.name)}
                                                disabled=${(X0?.totpCode||"").length<6}>Verify</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${()=>f(null)}>Cancel</button>
                                            ${X0?.error&&F`<span class="settings-keychain-prompt-error">${X0.error}</span>`}
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${D0&&F`
                                <tr class="settings-keychain-reveal-row" key=${s.name+"-reveal"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-reveal-panel">
                                            ${X0.username&&F`
                                                <div class="settings-keychain-reveal-field">
                                                    <span class="settings-keychain-reveal-label">Username</span>
                                                    <code class="settings-keychain-reveal-value">${X0.username}</code>
                                                    <button class="settings-keychain-copy-btn" onClick=${()=>V0(X0.username)} title="Copy username">
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                                                    </button>
                                                </div>
                                            `}
                                            <div class="settings-keychain-reveal-field">
                                                <span class="settings-keychain-reveal-label">Secret</span>
                                                <code class="settings-keychain-reveal-value">${X0.secret}</code>
                                                <button class="settings-keychain-copy-btn" onClick=${()=>V0(X0.secret)} title="Copy secret">
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${n0&&F`
                                <tr class="settings-keychain-reveal-row" key=${s.name+"-error"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-reveal-panel" style="color: var(--error-color, #e55)">${X0.error}</div>
                                    </td>
                                </tr>
                            `}
                        `})}
                    </tbody>
                </table>
            </div>
        </div>
    `}var Kz;var iY=J_(()=>{M0();Kz=["secret","token","password","basic"]});var oY={};j1(oY,{ToolsSection:()=>Fz});function Fz({toolsets:_,filter:$="",settingsData:j,mergeSettingsData:G}){let Z=_||[],[X,Y]=C(()=>{let B={};for(let N of Z)B[N.name]=!0;return B}),L=R((B)=>{Y((N)=>({...N,[B]:!N[B]}))},[]),V=j?.searchMatchMode||"or",K=R(async()=>{let B=V==="or"?"and":"or";try{let U=await(await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({searchMatchMode:B})})).json().catch(()=>({}));if(U?.ok&&U?.settings)G?.(U.settings)}catch(N){console.warn("[settings/tools] Failed to save search match mode.",N)}},[V,G]),Q=$.toLowerCase(),q=Y0(()=>{if(!Q)return Z;return Z.map((B)=>{let N=B.tools.filter((U)=>U.name.toLowerCase().includes(Q)||B.name.toLowerCase().includes(Q)||(U.summary||"").toLowerCase().includes(Q));return N.length>0?{...B,tools:N}:null}).filter(Boolean)},[Z,Q]);if(Z.length===0)return F`<div class="settings-section"><p class="settings-hint">Tool data not available.</p></div>`;return F`
        <div class="settings-section">
            <div class="settings-search-options">
                <h4 style="margin:0 0 8px 0">Search</h4>
                <div class="settings-row">
                    <label>Match mode</label>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <input type="checkbox" checked=${V==="and"} onChange=${K} />
                        <span class="settings-hint" style="margin:0">
                            ${V==="or"?"Any keyword (OR) — results match at least one search term":"All keywords (AND) — results must match every search term"}
                        </span>
                    </div>
                </div>
            </div>
            ${q.map((B)=>{let N=X[B.name]!==!1;return F`
                <div class="settings-toolset">
                    <div class="settings-toolset-header">
                        <label class="settings-toolset-toggle">
                            <input type="checkbox" checked=${N} onChange=${()=>L(B.name)} />
                            <span class="settings-toolset-icon">${qz[B.name]||Bz}</span>
                            <strong>${B.name}</strong>
                        </label>
                        <span class="settings-hint" style="margin:0">${B.description}</span>
                    </div>
                    ${N&&F`<div class="settings-tool-list">${B.tools.map((U)=>F`
                        <div class="settings-tool-row">
                            <input type="checkbox" checked disabled />
                            <span class="settings-tool-name">${U.name}</span>
                            <span class="settings-tool-kind" title=${U.kind}>${Nz[U.kind]||"?"}</span>
                            ${U.summary&&F`<span class="settings-tool-summary">${U.summary}</span>`}
                            <span class="settings-tool-source">${Qz[U.name]||B.name}</span>
                        </div>
                    `)}</div>`}
                </div>
            `})}
            ${q.length===0&&F`<p class="settings-hint">No tools match "${$}"</p>`}
            <p class="settings-hint">Tool activation is managed by the agent runtime. Group checkboxes collapse/expand; individual tools use <code>activate_tools</code>.</p>
        </div>
    `}var qz,Qz,Nz,Bz;var sY=J_(()=>{M0();qz={core:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="17" height="14" rx="2"/><path d="M7.5 10l2.5 2-2.5 2"/><path d="M12.5 15H16"/></svg>`,discovery:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>`,attachments:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>`,"model-control":F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/><path d="M9 15c.83.67 2 1 3 1s2.17-.33 3-1"/></svg>`,data:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,workspace:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,automation:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,remote:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,browser:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,ui:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,experiments:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6v7l4.6 7.7A1 1 0 0 1 18.7 19H5.3a1 1 0 0 1-.9-1.3L9 10z"/><line x1="9" y1="3" x2="15" y2="3"/></svg>`,lifecycle:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>`},Qz={read:"pi-core",write:"pi-core",edit:"pi-core",bash:"pi-core",powershell:"pi-core",find:"pi-core",grep:"pi-core",ls:"pi-core",list_tools:"internal-tools",list_internal_tools:"internal-tools",activate_tools:"tool-activation",reset_active_tools:"tool-activation",list_scripts:"runtime-scripts",attach_file:"file-attachments",read_attachment:"file-attachments",export_attachment:"file-attachments",get_model_state:"model-control",list_models:"model-control",switch_model:"model-control",switch_thinking:"model-control",messages:"messages-crud",introspect_sql:"sql-introspect",keychain:"keychain-tools",search_workspace:"workspace-search",refresh_workspace_index:"workspace-search",open_office_viewer:"office-viewer",office_read:"office-viewer",office_write:"office-viewer",open_workspace_file:"open-workspace-file",image_process:"image-processing",schedule_task:"scheduled-tasks",scheduled_tasks:"scheduled-tasks",bun_run:"bun-runner",exec_batch:"exec-batch",search_tool_output:"search-tool-output",ssh:"ssh",proxmox:"proxmox",portainer:"portainer",mcp:"mcp",cdp_browser:"cdp-browser",send_adaptive_card:"send-adaptive-card",send_dashboard_widget:"send-dashboard-widget",start_autoresearch:"autoresearch",stop_autoresearch:"autoresearch",autoresearch_status:"autoresearch",exit_process:"exit-process",env:"env-tools"},Nz={"read-only":"\uD83D\uDD0D",mutating:"✏️",mixed:"\uD83D\uDD04"},Bz=F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`});var aY={};j1(aY,{AddonsSection:()=>Uz});function Uz({setStatus:_,filter:$=""}){let[j,G]=C(null),[Z,X]=C(!0),[Y,L]=C(null),[V,K]=C(!1),[Q,q]=C({runtime:"",windowsNative:!1}),[B,N]=C([]),[U,E]=C([]);function D(){let z=new URLSearchParams;try{let w=(localStorage.getItem("piclaw_addons_catalog_url")||"").trim(),y=(localStorage.getItem("piclaw_addons_catalog_urls")||"").split(/\r?\n/).map((f)=>f.trim()).filter(Boolean),P=localStorage.getItem("piclaw_addons_repo_url");if(w)z.append("catalog_url",w);for(let f of y)z.append("catalog_url",f);if(P)z.set("repo_url",P)}catch(w){}let T=z.toString();return T?`?${T}`:""}let H=R(async()=>{try{let[z,T]=await Promise.all([fetch(`/agent/addons${D()}`),fetch("/agent/settings-data")]),w=await z.json();if(w.error)throw Error(w.error);G(w.addons||[]),N(w.sources||[]),E(w.failed_sources||[]);let y=await T.json().catch(()=>({})),P=typeof y?.runtimePlatform==="string"?y.runtimePlatform:"";q({runtime:P,windowsNative:P==="win32"})}catch(z){G(null),_?.(String(z.message||z),"error")}finally{X(!1)}},[_]);u(()=>{H()},[]);let k=R(async(z)=>{if(Y)return;L({slug:z,action:"install"}),_?.(`Installing ${z}…`,"info");try{let w=await(await fetch(`/agent/addons/install${D()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:z})})).json();if(w.error){_?.(w.error,"error");return}K(!0);let y=[w.message,w.warning].filter(Boolean).join(" ");_?.(y||"Add-on installed.","success"),await H()}catch(T){_?.(String(T.message||T),"error")}finally{L(null)}},[Y,H,_]),O=R(async(z)=>{if(Y)return;L({slug:z,action:"remove"}),_?.(`Removing ${z}…`,"info");try{let w=await(await fetch(`/agent/addons/uninstall${D()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:z})})).json();if(w.error){_?.(w.error,"error");return}K(!0);let y=[w.message,w.warning].filter(Boolean).join(" ");_?.(y||"Add-on removed.","success"),await H()}catch(T){_?.(String(T.message||T),"error")}finally{L(null)}},[Y,H,_]),W=R(async()=>{if(Y)return;L({slug:null,action:"restart"}),_?.("Restarting piclaw…","info");try{let T=await(await fetch("/agent/addons/restart",{method:"POST"})).json();if(T.error){_?.(T.error,"error"),L(null);return}_?.(T.message||"Restarting piclaw…","success"),K(!1),(async(y=30,P=2000)=>{for(let f=0;f<y;f++){await new Promise((b)=>setTimeout(b,P));try{if((await fetch("/agent/addons",{signal:AbortSignal.timeout(3000)})).ok){await H(),L(null),_?.("Restart complete — add-ons refreshed.","success");return}}catch(b){}}L(null),_?.("Backend did not return in time. Reload the page manually.","warning")})()}catch(z){_?.(String(z.message||z),"error"),L(null)}},[Y,_,H]);if(Z)return F`<div class="settings-loading">Fetching add-ons\u2026</div>`;if(!j)return F`<div class="settings-section"><p class="settings-hint">Could not load add-ons.</p></div>`;let I=$.toLowerCase(),x=I?j.filter((z)=>z.slug.toLowerCase().includes(I)||(z.description||"").toLowerCase().includes(I)||(z.tags||[]).some((T)=>T.toLowerCase().includes(I))):j,J=Y?.slug||null,A=Y?Y.action==="remove"?`Removing ${Y.slug}…`:Y.action==="restart"?"Restarting piclaw…":`Installing ${Y.slug}…`:"";return F`
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
                <div class="settings-addon-panel-overlay" role="status" aria-live="polite" aria-label=${A}>
                    <div class="settings-addon-panel-overlay-card">
                        <div class="settings-spinner"></div>
                        <span>${A}</span>
                    </div>
                </div>
            `}
            <div class="settings-addon-list">
                ${x.map((z)=>{let T=(z.skills||[]).length>0,w=z.type==="extension",y=T&&w?"extension + skill":T?"skill":"extension",P=T&&!w?"settings-tag-skill":"",f=typeof z.homepage==="string"&&z.homepage.trim()?z.homepage.trim():"";return F`
                    <div class=${`settings-addon-card${z.installed?" installed":""}`}>
                        <div class="settings-addon-card-header">
                            ${f?F`<a class="settings-addon-name-link" href=${f} target="_blank" rel="noopener noreferrer">${z.slug}</a>`:F`<strong>${z.slug}</strong>`}
                            <span class=${`settings-tag settings-tag-type ${P}`}>${y}</span>
                            <span class="settings-addon-version">${z.installed?z.installedVersion||"?":z.version||""}</span>
                            ${z.installKind&&F`<span class="settings-tag">${z.installKind}</span>`}
                            ${z.hasUpdate&&F`<span class="settings-tag settings-tag-skill">\u2191 ${z.version}</span>`}
                            <div class="settings-addon-actions">
                                ${z.installed?F`
                                    ${z.hasUpdate&&F`<button class="settings-addon-btn settings-addon-btn-upgrade" disabled=${Boolean(Y)} onClick=${()=>k(z.slug)}>${J===z.slug?"…":"Update"}</button>`}
                                    <button class="settings-addon-btn settings-addon-btn-remove" disabled=${Boolean(Y)} onClick=${()=>O(z.slug)}>${J===z.slug?"…":"Remove"}</button>
                                `:F`
                                    <button class="settings-addon-btn settings-addon-btn-install" disabled=${Boolean(Y)} onClick=${()=>k(z.slug)}>${J===z.slug?"…":"Install"}</button>
                                `}
                            </div>
                        </div>
                        <div class="settings-addon-card-body">${z.description}</div>
                        <div class="settings-addon-card-footer">
                            <div class="settings-addon-tags">${(z.tags||[]).map((b)=>F`<span class="settings-tag">${b}</span>`)}${(z.skills||[]).map((b)=>F`<span class="settings-tag settings-tag-skill">\ud83d\udcdd ${b}</span>`)}</div>
                        </div>
                    </div>
                `})}
                ${x.length===0&&F`<p class="settings-hint">No add-ons match "${$}"</p>`}
            </div>
            ${V&&F`
                <div class="settings-addon-restart-notice" role="status" aria-live="polite">
                    <span>Extension changes are installed but inactive until piclaw restarts.</span>
                    <button class="settings-addon-btn settings-addon-btn-restart-now" type="button" disabled=${Boolean(Y)} onClick=${W}>Restart Now</button>
                </div>
            `}
        </div>
    `}var tY=J_(()=>{M0()});var Jz={};function N9(_,$){try{let j=localStorage.getItem(_);return j===null?$:j==="true"}catch{return $}}function r6(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function Hz(_,$){try{return localStorage.getItem(_)||$}catch{return $}}function Ez(_,$){try{localStorage.setItem(_,$)}catch(j){}}function Dz(_,$,j,G){try{return W$(localStorage.getItem(_),{fallback:$,min:j,max:G})}catch{return W$($,{fallback:$,min:j,max:G})}}function zz(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function Wz(){let[_,$]=C(()=>N9("piclaw_vim_mode",!1)),[j,G]=C(()=>N9("piclaw_show_whitespace",!0)),[Z,X]=C(()=>N9("piclaw_md_live_preview",!0)),[Y,L]=C(()=>Dz("piclaw_editor_font_size",13,10,24)),[V,K]=C(()=>Hz("piclaw_editor_font_family","")),Q=R((q,B,N)=>{let U=!B;N(U),r6(q,U)},[]);return F`
        <div class="settings-section">
            <h3>Editor</h3>
            <div class="settings-row">
                <label>Vim mode</label>
                <input type="checkbox" checked=${_}
                    onChange=${()=>{let q=!_;$(q),r6("piclaw_vim_mode",q)}} />
            </div>
            <div class="settings-row">
                <label>Show whitespace</label>
                <input type="checkbox" checked=${j}
                    onChange=${()=>{let q=!j;G(q),r6("piclaw_show_whitespace",q)}} />
            </div>
            <div class="settings-row">
                <label>Markdown live preview</label>
                <input type="checkbox" checked=${Z}
                    onChange=${()=>{let q=!Z;X(q),r6("piclaw_md_live_preview",q)}} />
            </div>
            <div class="settings-row">
                <label>Font size (px)</label>
                <${v_}
                    label="editor font size"
                    value=${Y}
                    min=${10}
                    max=${24}
                    fallback=${13}
                    width="70px"
                    onChange=${(q)=>{L(q),zz("piclaw_editor_font_size",q)}}
                />
            </div>
            <div class="settings-row">
                <label>Font family</label>
                <input type="text" value=${V}
                    onInput=${(q)=>{let B=q.target.value;K(B),Ez("piclaw_editor_font_family",B)}}
                    placeholder="monospace (default)" />
            </div>
            <p class="settings-hint settings-local-only-hint">This browser only. Editor changes are stored in local browser storage and take effect when you next open or reload a file tab.</p>
        </div>
    `}var Oz;var eY=J_(()=>{M0();W2();C4();Oz=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;d$({id:"editor",label:"Editor",icon:Oz,component:Wz,order:150})});var wz={};function _L(_,$){try{let j=localStorage.getItem(_);return j===null?$:j==="true"}catch{return $}}function $L(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function Az(_,$,j,G){try{return W$(localStorage.getItem(_),{fallback:$,min:j,max:G})}catch{return W$($,{fallback:$,min:j,max:G})}}function kz(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function yz(){let[_,$]=C(()=>_L("piclaw_mindmap_auto_expand",!0)),[j,G]=C(()=>Az("piclaw_mindmap_node_spacing",40,20,100)),[Z,X]=C(()=>_L("piclaw_mindmap_animate",!0));return F`
        <div class="settings-section">
            <h3>Mind Map</h3>
            <div class="settings-row">
                <label>Auto-expand nodes</label>
                <input type="checkbox" checked=${_}
                    onChange=${()=>{let Y=!_;$(Y),$L("piclaw_mindmap_auto_expand",Y)}} />
            </div>
            <div class="settings-row">
                <label>Node spacing (px)</label>
                <${v_}
                    label="node spacing"
                    value=${j}
                    min=${20}
                    max=${100}
                    fallback=${40}
                    width="70px"
                    onChange=${(Y)=>{G(Y),kz("piclaw_mindmap_node_spacing",Y)}}
                />
            </div>
            <div class="settings-row">
                <label>Animate transitions</label>
                <input type="checkbox" checked=${Z}
                    onChange=${()=>{let Y=!Z;X(Y),$L("piclaw_mindmap_animate",Y)}} />
            </div>
            <p class="settings-hint settings-local-only-hint">This browser only. Opens <code>.mindmap.yaml</code> files. Changes take effect on the next map open.</p>
        </div>
    `}var Mz;var jL=J_(()=>{M0();W2();C4();Mz=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><circle cx="5" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><line x1="9.5" y1="9.5" x2="6.5" y2="6.5"/><line x1="14.5" y1="9.5" x2="17.5" y2="6.5"/><line x1="9.5" y1="14.5" x2="6.5" y2="17.5"/><line x1="14.5" y1="14.5" x2="17.5" y2="17.5"/></svg>`;d$({id:"mindmap",label:"Mind Map",icon:Mz,component:yz,order:170})});var Iz={};function B9(_,$){try{let j=localStorage.getItem(_);return j===null?$:j==="true"}catch{return $}}function F9(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function U9(_,$){try{return localStorage.getItem(_)||$}catch{return $}}function H9(_,$){try{localStorage.setItem(_,$)}catch(j){}}function Tz(){let[_,$]=C(()=>B9("piclaw_dev_mode",!1)),[j,G]=C(()=>U9("piclaw_addons_catalog_url","")),[Z,X]=C(()=>U9("piclaw_addons_catalog_urls","")),[Y,L]=C(()=>U9("piclaw_addons_repo_url","")),[V,K]=C(()=>B9("piclaw_debug_sse",!1)),[Q,q]=C(()=>B9("piclaw_debug_tool_calls",!1)),B=R(()=>{let N=!_;$(N),F9("piclaw_dev_mode",N)},[_]);return F`
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
                        onInput=${(N)=>{let U=N.target.value;G(U),H9("piclaw_addons_catalog_url",U)}}
                        placeholder="https://raw.githubusercontent.com/.../catalog.json" style="max-width:400px" />
                </div>
                <p class="settings-hint" style="margin-top:0">Primary add-on catalog URL. Leave empty to use the default (<code>rcarmo/piclaw-addons</code>).</p>
                <div class="settings-row" style="align-items:flex-start;">
                    <label>Additional catalog URLs</label>
                    <textarea
                        value=${Z}
                        onInput=${(N)=>{let U=N.target.value;X(U),H9("piclaw_addons_catalog_urls",U)}}
                        placeholder="One URL per line\nhttps://example.com/catalog.json"
                        style="max-width:400px; min-height:86px; resize:vertical;"
                    ></textarea>
                </div>
                <p class="settings-hint" style="margin-top:0">Fetched in addition to the primary/default catalog. One URL per line.</p>
                <div class="settings-row">
                    <label>Repo URL</label>
                    <input type="text" value=${Y}
                        onInput=${(N)=>{let U=N.target.value;L(U),H9("piclaw_addons_repo_url",U)}}
                        placeholder="https://github.com/.../piclaw-addons.git" style="max-width:400px" />
                </div>
                <p class="settings-hint" style="margin-top:0">Override the git repo used for <code>bun add</code> installs. Leave empty for default.</p>

                <h3 style="margin-top:16px">Debug</h3>
                <div class="settings-row">
                    <label>Log SSE events</label>
                    <input type="checkbox" checked=${V}
                        onChange=${()=>{let N=!V;K(N),F9("piclaw_debug_sse",N)}} />
                </div>
                <div class="settings-row">
                    <label>Log tool calls</label>
                    <input type="checkbox" checked=${Q}
                        onChange=${()=>{let N=!Q;q(N),F9("piclaw_debug_tool_calls",N)}} />
                </div>
                <p class="settings-hint">Debug flags take effect on next page reload.</p>
            `}
        </div>
    `}var xz;var GL=J_(()=>{M0();W2();xz=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`;d$({id:"developer",label:"Developer",icon:xz,component:Tz,order:900})});var KL={};j1(KL,{openSettingsDialog:()=>sz,SettingsDialogContent:()=>LL,SettingsDialog:()=>oz});function J5(_){O5.push({ts:performance.now(),label:_})}function Cz(){if(!O5.length)return;let _=O5[0].ts,$=O5.map((j)=>`+${(j.ts-_).toFixed(1)}ms ${j.label}`);console.info(`[settings-dialog perf]
`+$.join(`
`));try{window.__piclawSettingsPerfLog=$}catch(j){}try{fetch("/agent/client-perf",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({label:"settings-dialog",lines:$})}).catch((j)=>{})}catch(j){}O5.length=0}function Rz(_){let $=d6.get(_);if($)return Promise.resolve($);let j=p6.get(_);if(j)return j;let G=Pz[_]().then((Z)=>{return d6.set(_,Z),p6.delete(_),Z}).catch((Z)=>{throw p6.delete(_),Z});return p6.set(_,G),G}function n6(_="Loading…"){return F`
        <div class="settings-loading settings-loading-pane" role="status" aria-live="polite">
            <span class="settings-spinner"></span>
            <span>${_}</span>
        </div>
    `}function LL({onClose:_}){J5("SettingsDialogContent-render-start");let[$,j]=C(()=>d7()||"general"),[G,Z]=C(ZL),[X,Y]=C(null),[L,V]=C(""),[,K]=C(0),[Q,q]=C(()=>Object.fromEntries(d6.entries())),[B,N]=C(null),[U,E]=C({compact:!1,narrow:!1}),D=g(null),H=g(null);u(()=>{J5("SettingsDialogContent-mounted"),Cz()},[]),u(()=>{let y=(P)=>{if(P.key==="Escape")_()};return window.addEventListener("keydown",y),()=>window.removeEventListener("keydown",y)},[_]),u(()=>{let y=(P)=>{let f=typeof P?.detail?.section==="string"?P.detail.section.trim():"";if(f)j(f),V("")};return window.addEventListener("piclaw:open-settings",y),()=>window.removeEventListener("piclaw:open-settings",y)},[]),u(()=>{let y=()=>K((P)=>P+1);return window.addEventListener("piclaw:settings-panes-changed",y),()=>window.removeEventListener("piclaw:settings-panes-changed",y)},[]),u(()=>{fetch("/agent/settings-data").then((y)=>y.json()).then((y)=>{ZL=y,Z(y)}).catch(()=>Z({}))},[]),u(()=>{let y=H.current;if(!y)return;let P=()=>{let f=y.clientWidth||0;E((b)=>{let c={compact:f>0&&f<=860,narrow:f>0&&f<=720};return b.compact===c.compact&&b.narrow===c.narrow?b:c})};if(P(),typeof ResizeObserver==="function"){let f=new ResizeObserver(()=>P());return f.observe(y),()=>f.disconnect()}return window.addEventListener("resize",P),()=>window.removeEventListener("resize",P)},[]);let k=[...YL].sort((y,P)=>(y.order??500)-(P.order??500)),W=tX().map((y)=>({id:y.id,label:y.label,icon:y.icon,searchable:y.searchable||!1,placeholder:y.searchPlaceholder,order:y.order??500,isExtension:!0,component:y.component})).sort(i7),I=[...k,...W],x=I.find((y)=>y.id===$)||YL.find((y)=>y.id===$);u(()=>{if(x?.searchable)requestAnimationFrame(()=>D.current?.focus())},[$]),u(()=>{if(x?.isExtension){N(null);return}let y=!1;if(Q[$]){N(null);return}return N($),Rz($).then((P)=>{if(y)return;q((f)=>f?.[$]?f:{...f||{},[$]:P})}).catch((P)=>{if(y)return;console.error(`[settings-dialog] Failed to lazy-load section "${$}".`,P)}).finally(()=>{if(!y)N((P)=>P===$?null:P)}),()=>{y=!0}},[$,x?.isExtension,Q]);let J=R((y,P="info")=>{Y(y?{text:y,type:P}:null)},[]),A=R((y)=>{j(y),V("");let P=fz[y];if(P&&!XL.has(y))XL.add(y),P().then(()=>K((f)=>f+1)).catch((f)=>{})},[]),z=R((y)=>{Z((P)=>({...P||{},...y||{}}))},[]),T=()=>{if(x?.isExtension){if(!x.component)return n6("Loading pane…");let P=x.component;return F`<${P} filter=${L} />`}let y=Q[$];if(!y||B===$)return n6(`Loading ${x?.label||"settings"}…`);switch($){case"general":return F`<${y} settingsData=${G} setStatus=${J} mergeSettingsData=${z} />`;case"sessions":return F`<${y} settingsData=${G} setStatus=${J} mergeSettingsData=${z} />`;case"compaction":return F`<${y} settingsData=${G} setStatus=${J} mergeSettingsData=${z} />`;case"keyboard":return F`<${y} filter=${L} setStatus=${J} />`;case"workspace":return F`<${y} settingsData=${G} setStatus=${J} mergeSettingsData=${z} />`;case"environment":return F`<${y} settingsData=${G} filter=${L} setStatus=${J} mergeSettingsData=${z} />`;case"providers":return F`<${y} providers=${G?.providers} setStatus=${J} />`;case"models":return F`<${y} filter=${L} />`;case"theme":return F`<${y} themes=${G?.themes} colorKeys=${G?.colorKeys} settingsData=${G} setStatus=${J} mergeSettingsData=${z} />`;case"scheduled-tasks":return F`<${y} filter=${L} setStatus=${J} />`;case"quick-actions":return F`<${y} filter=${L} setStatus=${J} mergeSettingsData=${z} />`;case"keychain":return F`<${y} filter=${L} />`;case"tools":return F`<${y} toolsets=${G?.toolsets} filter=${L} settingsData=${G} mergeSettingsData=${z} />`;case"addons":return F`<${y} setStatus=${J} filter=${L} />`;default:return n6("Loading settings…")}},w=!x;return J5("SettingsDialogContent-render-end"),F`
        <div class="settings-dialog-backdrop" onClick=${(y)=>{if(y.target===y.currentTarget)_()}}>
            <div ref=${H} data-testid="settings-dialog" class=${`settings-dialog${U.compact?" settings-dialog-compact":""}${U.narrow?" settings-dialog-narrow":""}`}>
                <div class="settings-dialog-header">
                    <span class="settings-dialog-title">Settings</span>
                    ${x?.searchable&&F`
                        <input ref=${D} type="text" class="settings-header-filter"
                            placeholder=${x.placeholder||"Filter…"}
                            value=${L} onInput=${(y)=>V(y.target.value)} />
                    `}
                    <button class="settings-dialog-close" onClick=${_} title="Close (Esc)">✕</button>
                </div>
                <div class="settings-dialog-body">
                    <nav class="settings-nav">
                        ${I.map((y,P)=>{let f=P>0&&!I[P-1].isExtension,b=y.isExtension&&f;return F`
                                ${b&&F`<div class="settings-nav-separator"></div>`}
                                <button class=${`settings-nav-item ${y.id===$?"active":""}`} onClick=${()=>A(y.id)}>
                                    <span class="settings-nav-icon">${y.icon}</span>
                                    <span class="settings-nav-label">${y.label}</span>
                                </button>
                            `})}
                    </nav>
                    <main class="settings-content">
                        ${w?n6("Loading settings…"):T()}
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
    `}function oz(){let[_,$]=C(!1);if(u(()=>{let j=(Z)=>{let X=z2(Z?.detail?.section);if(X)try{window.__piclawSettingsRequestedSection=X}catch(Y){}$(!0)};window.addEventListener("piclaw:open-settings",j);let G=R6();if(G.open){if(G.section)try{window.__piclawSettingsRequestedSection=G.section}catch(Z){}$(!0)}return()=>window.removeEventListener("piclaw:open-settings",j)},[]),!_)return null;return F`<${n$} className="settings-portal"><${LL} onClose=${()=>$(!1)} /><//>`}function sz(_={}){o1(_)}var O5,ZL=null,d6,p6,Pz,fz,XL,Sz,uz,gz,bz,vz,mz,cz,lz,hz,rz,pz,nz,dz,iz,YL;var VL=J_(()=>{M0();S6();W2();KY();O5=[];J5("module-eval-start");J5("imports-done");d6=new Map,p6=new Map;d6.set("general",t7);Pz={general:()=>Promise.resolve(t7),sessions:()=>Promise.resolve().then(() => (QY(),qY)).then((_)=>_.SessionsSection),compaction:()=>Promise.resolve().then(() => (BY(),NY)).then((_)=>_.CompactionSection),keyboard:()=>Promise.resolve().then(() => (WY(),zY)).then((_)=>_.KeyboardSection),workspace:()=>Promise.resolve().then(() => (MY(),yY)).then((_)=>_.WorkspaceSection),environment:()=>Promise.resolve().then(() => (TY(),wY)).then((_)=>_.EnvironmentSection),providers:()=>Promise.resolve().then(() => (IY(),xY)).then((_)=>_.ProvidersSection),models:()=>Promise.resolve().then(() => (PY(),CY)).then((_)=>_.ModelsSection),theme:()=>Promise.resolve().then(() => (SY(),RY)).then((_)=>_.ThemeSection),"scheduled-tasks":()=>Promise.resolve().then(() => (bY(),gY)).then((_)=>_.ScheduledTasksSection),"quick-actions":()=>Promise.resolve().then(() => (nY(),pY)).then((_)=>_.QuickActionsSection),keychain:()=>Promise.resolve().then(() => (iY(),dY)).then((_)=>_.KeychainSection),tools:()=>Promise.resolve().then(() => (sY(),oY)).then((_)=>_.ToolsSection),addons:()=>Promise.resolve().then(() => (tY(),aY)).then((_)=>_.AddonsSection)},fz={"editor-settings":()=>Promise.resolve().then(() => (eY(),Jz)).then(()=>{}),"mindmap-settings":()=>Promise.resolve().then(() => (jL(),wz)).then(()=>{}),developer:()=>Promise.resolve().then(() => (GL(),Iz)).then(()=>{})},XL=new Set;Sz=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M8.5 5.9L9.6 2.3h4.8l1.1 3.6 3.7-.8 2.4 4.1-2.6 2.8 2.6 2.8-2.4 4.1-3.7-.8-1.1 3.6H9.6l-1.1-3.6-3.7.8-2.4-4.1L5 12 2.4 9.2l2.4-4.1z"/></svg>`,uz=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,gz=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7"/><polyline points="3 4 3 10 9 10"/><path d="M12 7v5l3 3"/></svg>`,bz=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`,vz=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/><path d="M8 7v10"/><path d="M16 7v10"/></svg>`,mz=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 9h.01"/><path d="M10 9h.01"/><path d="M14 9h.01"/><path d="M18 9h.01"/><path d="M8 13h.01"/><path d="M12 13h.01"/><path d="M16 13h.01"/><path d="M7 17h10"/></svg>`,cz=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,lz=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="9" width="14" height="10" rx="2"/><circle cx="9" cy="14" r="1.5" fill="currentColor" stroke="none"/><circle cx="15" cy="14" r="1.5" fill="currentColor" stroke="none"/><line x1="12" y1="9" x2="12" y2="5"/><circle cx="12" cy="4" r="1.5"/></svg>`,hz=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.1 0 2-.9 2-2 0-.53-.21-1.01-.55-1.36-.34-.36-.55-.84-.55-1.37 0-1.1.9-2 2-2h2.36c3.08 0 5.64-2.56 5.64-5.64C22.9 5.85 18.05 2 12 2z"/><circle cx="8" cy="10" r="1.5" fill="currentColor" stroke="none"/><circle cx="12" cy="7" r="1.5" fill="currentColor" stroke="none"/><circle cx="16" cy="10" r="1.5" fill="currentColor" stroke="none"/></svg>`,rz=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/><path d="M7 3.5 4 6"/><path d="m17 3.5 3 2.5"/></svg>`,pz=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,nz=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,dz=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="14" r="3"/><path d="M11 14h9"/><path d="M16 14v-2"/><path d="M19 14v2"/></svg>`,iz=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,YL=[{id:"general",label:"General",icon:Sz,searchable:!1,order:10},{id:"sessions",label:"Sessions",icon:uz,searchable:!1,order:12},{id:"compaction",label:"Compaction",icon:gz,searchable:!1,order:13},{id:"keyboard",label:"Keyboard",icon:mz,searchable:!0,placeholder:"Filter shortcuts…",order:14},{id:"workspace",label:"Workspace",icon:bz,searchable:!1,order:15},{id:"environment",label:"Environment",icon:vz,searchable:!0,placeholder:"Filter environment…",order:16},{id:"providers",label:"Providers",icon:cz,searchable:!1,order:20},{id:"models",label:"Models",icon:lz,searchable:!0,placeholder:"Filter models…",order:30},{id:"theme",label:"Appearance",icon:hz,searchable:!1,order:40},{id:"scheduled-tasks",label:"Scheduled Tasks",icon:rz,searchable:!0,placeholder:"Filter scheduled tasks…",order:65},{id:"quick-actions",label:"Quick Actions",icon:nz,searchable:!0,placeholder:"Filter quick actions…",order:70},{id:"keychain",label:"Keychain",icon:dz,searchable:!0,placeholder:"Filter entries…",order:75},{id:"tools",label:"Tools",icon:pz,searchable:!0,placeholder:"Filter tools…",order:80},{id:"addons",label:"Add-ons",icon:iz,searchable:!0,placeholder:"Filter add-ons…",order:90}]});M0();class OG{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let G of this.extensions.values()){if(G.placement!=="tabs")continue;if(!G.canHandle)continue;try{let Z=G.canHandle(_);if(Z===!1||Z===0)continue;let X=Z===!0?0:typeof Z==="number"?Z:0;if(X>j)j=X,$=G}catch(Z){console.warn(`[PaneRegistry] canHandle() error for "${G.id}":`,Z)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var X_=new OG;var j6=null,H3=null;function xF(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function JG(){if(H3)return Promise.resolve(H3);if(!j6)j6=import(xF()).then((_)=>{return H3=_,_}).catch((_)=>{throw j6=null,_});return j6}class AG{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;queuedDiffMode=void 0;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await JG();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState));if(this.queuedDiffMode!==void 0&&typeof this.real.setDiffMode==="function")this.real.setDiffMode(this.queuedDiffMode)}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}beforeDetachFromHost(_){return this.real?.beforeDetachFromHost?.(_)}afterAttachToHost(_){return this.real?.afterAttachToHost?.(_)}moveHost(_,$){return this.real?.moveHost?.(_,$)??!1}exportHostTransferState(){return this.real?.exportHostTransferState?.()??null}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}setDiffMode(_){this.queuedDiffMode=_,this.real?.setDiffMode?.(_)}}var E3={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new AG(_,$)}};function D3(){JG().catch((_)=>{console.warn("[editor-loader] Background preload failed; the editor will retry on demand.",_)})}function kG(_){try{return typeof _?.crypto?.randomUUID==="function"?_.crypto.randomUUID():null}catch($){return null}}function G6(_,$){try{return _?.removeItem?.($),!0}catch(j){return!1}}var yG="piclaw:editor-popout:",IF=300000;function MG(_){try{return _?.localStorage??null}catch{return null}}function CF(_=Date.now()){return`editor-popout-${_.toString(36)}-${Math.random().toString(36).slice(2,10)}`}function wG(_){return typeof _==="string"?_.trim():""}function TG(_){return(typeof _==="string"?_.trim():"")||null}function xG(_){return typeof _==="string"?_:void 0}function IG(_){if(_===void 0)return;if(typeof _!=="string")return null;return _.trim()||null}function CG(_){if(!_||typeof _!=="object")return null;let $=_,j={};if(typeof $.cursorLine==="number"&&Number.isFinite($.cursorLine))j.cursorLine=$.cursorLine;if(typeof $.cursorCol==="number"&&Number.isFinite($.cursorCol))j.cursorCol=$.cursorCol;if(typeof $.scrollTop==="number"&&Number.isFinite($.scrollTop))j.scrollTop=$.scrollTop;return Object.keys(j).length>0?j:null}function G2(_,$=globalThis){let j=$?.window??$;if(!j?.location?.href)return null;try{let G=new URL(j.location.href),Z=G.searchParams.get(_)?.trim()||"";if(!Z)return null;return G.searchParams.delete(_),j.history?.replaceState?.(j.history.state,j.document?.title||"",G.toString()),Z}catch{return null}}function PF(_,$=globalThis,j=Date.now()){let G=MG($),Z=wG(_?.path);if(!G||!Z)return null;let X={path:Z,content:xG(_?.content),mtime:IG(_?.mtime),paneOverrideId:TG(_?.paneOverrideId),viewState:CG(_?.viewState),capturedAt:j};if(!Boolean(X.content!==void 0||X.paneOverrideId||X.viewState||X.mtime))return null;let L=CF(j);try{return G.setItem(`${yG}${L}`,JSON.stringify(X)),L}catch{return null}}function z3(_,$=globalThis,j=Date.now()){let G=typeof _==="string"?_.trim():"",Z=MG($);if(!G||!Z)return null;let X=`${yG}${G}`,Y="";try{Y=Z.getItem(X)||""}catch{return null}if(!Y)return null;G6(Z,X);try{let L=JSON.parse(Y),V=typeof L?.capturedAt==="number"&&Number.isFinite(L.capturedAt)?L.capturedAt:j;if(V+IF<j)return null;let K=wG(L?.path);if(!K)return null;return{path:K,content:xG(L?.content),mtime:IG(L?.mtime),paneOverrideId:TG(L?.paneOverrideId),viewState:CG(L?.viewState),capturedAt:V}}catch{return null}}function Z6(_,$=globalThis,j=Date.now()){let G=PF(_,$,j);return G?{editor_popout:G}:null}function w1(_){try{return _(),!0}catch($){return!1}}function PG(_){let{ownerWindow:$,themeChangeListener:j,mediaQuery:G,mediaQueryListener:Z,dockResizeListener:X,windowResizeListener:Y,themeObserver:L,resizeObserver:V}=_;w1(()=>{if(j)$?.removeEventListener?.("piclaw-theme-change",j)}),w1(()=>{if(G&&Z){if(G.removeEventListener)G.removeEventListener("change",Z);else if(G.removeListener)G.removeListener(Z)}}),w1(()=>{if(X)$?.removeEventListener?.("dock-resize",X);if(Y)$?.removeEventListener?.("resize",Y)}),w1(()=>{L?.disconnect?.()}),w1(()=>{V?.disconnect?.()})}function fG(_){_.syncHostLayout(),w1(()=>{_.terminal?.renderer?.remeasureFont?.()}),w1(()=>{_.fitAddon?.fit?.()}),w1(()=>{_.terminal?.refresh?.()}),_.syncHostLayout(),_.sendResize()}function RG(_){let{resizeFrame:$=0,cancelAnimationFrameFn:j=cancelAnimationFrame,socket:G,fitAddon:Z,terminal:X,termEl:Y}=_;if($)w1(()=>{j($)});return w1(()=>{G?.close?.()}),w1(()=>{Z?.dispose?.()}),w1(()=>{X?.dispose?.()}),Y?.remove?.(),0}function h1(_){try{return _(),!0}catch($){return!1}}function SG(_){let{termEl:$,bodyEl:j,terminal:G,theme:Z,themeChanged:X=!1,socket:Y,resize:L}=_;if(h1(()=>{if($?.style)$.style.backgroundColor=Z.background,$.style.color=Z.foreground;if(j?.style)j.style.backgroundColor=Z.background,j.style.color=Z.foreground;let V=j?.querySelector?.(".terminal-live-host");if(V&&typeof V==="object"&&"style"in V)V.style.backgroundColor=Z.background,V.style.color=Z.foreground;let K=j?.querySelector?.("canvas");if(K&&typeof K==="object"&&"style"in K)K.style.backgroundColor=Z.background,K.style.color=Z.foreground}),h1(()=>{if(G?.options)G.options.theme=Z}),X)h1(()=>{G?.reset?.()});h1(()=>{G?.renderer?.setTheme?.(Z),G?.renderer?.clear?.()}),h1(()=>{G?.loadFonts?.()}),h1(()=>{G?.renderer?.remeasureFont?.()}),h1(()=>{if(G?.wasmTerm&&G?.renderer?.render)G.renderer.render(G.wasmTerm,!0,G.viewportY||0,G),G.renderer.render(G.wasmTerm,!1,G.viewportY||0,G)}),h1(()=>{L?.()}),h1(()=>{if(X&&Y?.readyState===1)Y.send?.(JSON.stringify({type:"input",data:"\f"}))}),h1(()=>{G?.refresh?.()})}var fF="/static/js/vendor/ghostty-web.js",RF="/static/js/vendor/ghostty-vt.wasm",X2="piclaw://terminal",SF='FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',uF='400 13px "FiraCode Nerd Font Mono"',gF='700 13px "FiraCode Nerd Font Mono"',cG="x-piclaw-terminal-client",uG="piclaw_terminal_client",bF={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},vF={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},X6=null,W3=null;function mF(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function cF(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL(RF,window.location.origin).href,G=(Z,X)=>{let Y=Z instanceof Request?Z.url:Z instanceof URL?Z.href:String(Z);if(!mF(Y))return $(Z,X);if(Z instanceof Request)return $(new Request(j,Z));return $(j,X)};globalThis.fetch=G;try{return await _()}finally{globalThis.fetch=$}}async function lF(){let $=await import(new URL(fF,window.location.origin).href);if(!X6)X6=cF(()=>Promise.resolve($.init?.())).catch((j)=>{throw X6=null,j});return await X6,$}async function hF(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!W3)W3=Promise.allSettled([document.fonts.load(uF),document.fonts.load(gF),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await W3}function gG(_=typeof window<"u"?window:null){try{if(typeof _?.crypto?.randomUUID==="function")return _.crypto.randomUUID()}catch($){console.debug("[terminal-pane] Failed to generate crypto-backed terminal client token; falling back.",$)}return`terminal-client-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}function J3(_=typeof window<"u"?window:null){if(!_)return null;try{let $=_.localStorage,j=typeof $?.getItem==="function"?String($.getItem(uG)||"").trim():"";if(j)return j;let G=gG(_);return $?.setItem?.(uG,G),G}catch($){return gG(_)}}async function rF(_=J3()){let $=await fetch("/terminal/session",{method:"GET",credentials:"same-origin",headers:_?{[cG]:_}:void 0}),j=await $.json().catch(()=>({}));if(!$.ok)throw Error(j?.error||`HTTP ${$.status}`);return j}async function pF(_=J3()){let $=await fetch("/terminal/handoff",{method:"POST",credentials:"same-origin",headers:_?{[cG]:_}:void 0}),j=await $.json().catch(()=>({}));if(!$.ok)throw Error(j?.error||`HTTP ${$.status}`);return typeof j?.handoff?.token==="string"&&j.handoff.token.trim()?j.handoff.token.trim():null}function nF(_,$=null,j=J3()){let G=window.location.protocol==="https:"?"wss:":"ws:",Z=new URL(`${G}//${window.location.host}${_}`);if($)Z.searchParams.set("handoff",String($));if(j)Z.searchParams.set("client",String(j));return Z.toString()}function dF(_=typeof window<"u"?window:null,$=typeof document<"u"?document:null){if(!_||!$)return!1;let{documentElement:j,body:G}=$,Z=j?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(Z==="dark")return!0;if(Z==="light")return!1;if(j?.classList?.contains("dark")||G?.classList?.contains("dark"))return!0;if(j?.classList?.contains("light")||G?.classList?.contains("light"))return!1;return Boolean(_.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function F4(_,$="",j=typeof document<"u"?document:null){if(!j)return $;return getComputedStyle(j.documentElement).getPropertyValue(_)?.trim()||$}function Z2(_){let $=String(_||"").trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(/^[0-9a-fA-F]{3}$/.test(j)||/^[0-9a-fA-F]{6}$/.test(j)){let Z=j.length===3?j.split("").map((Y)=>Y+Y).join(""):j,X=parseInt(Z,16);return{r:X>>16&255,g:X>>8&255,b:X&255}}let G=$.match(/rgba?\(\s*(\d+)[,\s]\s*(\d+)[,\s]\s*(\d+)/i);if(G)return{r:parseInt(G[1],10),g:parseInt(G[2],10),b:parseInt(G[3],10)};return null}function bG(_){let $=(j)=>{let G=j/255;return G<=0.03928?G/12.92:Math.pow((G+0.055)/1.055,2.4)};return 0.2126*$(_.r)+0.7152*$(_.g)+0.0722*$(_.b)}function n2(_,$){let j=bG(_),G=bG($),Z=Math.max(j,G),X=Math.min(j,G);return(Z+0.05)/(X+0.05)}function lG(_){let $=Z2(_);if(!$)return"#ffffff";let j={r:255,g:255,b:255},G={r:0,g:0,b:0};return n2($,j)>=n2($,G)?"#ffffff":"#000000"}function Y6(_){let $=(j)=>Math.max(0,Math.min(255,Math.round(j||0)));return`#${[_.r,_.g,_.b].map((j)=>$(j).toString(16).padStart(2,"0")).join("")}`}function vG(_,$,j){let G=Math.max(0,Math.min(1,Number.isFinite(j)?j:0));return{r:_.r+($.r-_.r)*G,g:_.g+($.g-_.g)*G,b:_.b+($.b-_.b)*G}}function G1(_,$,j=4.5){let G=Z2(_),Z=Z2($);if(!G||!Z)return $;if(n2(G,Z)>=j)return Y6(Z);let X=Z2(lG(_));if(!X)return Y6(Z);let Y=X,L=1,V=0,K=1;for(let B=0;B<14;B+=1){let N=(V+K)/2,U=vG(Z,X,N);if(n2(G,U)>=j)Y=U,L=N,K=N;else V=N}let Q=Y6(Y),q=Z2(Q);while(q&&n2(G,q)<j&&L<1)L=Math.min(1,L+0.01),Q=Y6(vG(Z,X,L)),q=Z2(Q);return Q}function iF(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function mG(_=typeof window<"u"?window:null,$=typeof document<"u"?document:null){let j=dF(_,$),G=j?vF:bF,Z=F4("--bg-primary",j?"#000000":"#ffffff",$),X=F4("--text-primary",j?"#e7e9ea":"#0f1419",$),Y=G1(Z,X||lG(Z),7),L=F4("--accent-color","#1d9bf0",$),V=F4("--danger-color",j?"#ff7b72":"#cf222e",$),K=F4("--success-color",j?"#7ee787":"#1a7f37",$),Q=F4("--bg-hover",j?"#1d1f23":"#e8ebed",$),q=F4("--accent-soft-strong",iF(L,j?"47":"33"),$);return{background:Z,foreground:Y,cursor:G1(Z,L,3),cursorAccent:Z,selectionBackground:q,selectionForeground:Y,black:G1(Z,Q,3),red:G1(Z,V,4.5),green:G1(Z,K,4.5),yellow:G1(Z,G.yellow,4.5),blue:G1(Z,L,4.5),magenta:G1(Z,G.magenta,4.5),cyan:G1(Z,G.cyan,4.5),white:Y,brightBlack:G1(Z,G.brightBlack,3),brightRed:G1(Z,G.brightRed,4.5),brightGreen:G1(Z,G.brightGreen,4.5),brightYellow:G1(Z,G.brightYellow,4.5),brightBlue:G1(Z,G.brightBlue,4.5),brightMagenta:G1(Z,G.brightMagenta,4.5),brightCyan:G1(Z,G.brightCyan,4.5),brightWhite:Y}}function hG(_){let $=_?.activeElement;if(!$||$===_?.body||$===_?.documentElement)return!1;if(typeof $.blur!=="function")return!1;return $.blur(),!0}function O3(_,$){let j=[_?.inputElement,_?.textarea,_?.container,$,$?.querySelector?.("textarea")].filter((G,Z,X)=>Boolean(G)&&X.indexOf(G)===Z);for(let G of j)try{let Z=G.ownerDocument?.defaultView||window,X=typeof Z.CompositionEvent==="function"?new Z.CompositionEvent("compositionend",{data:""}):new Z.Event("compositionend");G.dispatchEvent?.(X)}catch(Z){console.debug("[terminal-pane] Failed to dispatch best-effort IME composition reset.",Z)}if(_&&typeof _==="object")_.isComposing=!1,_.pendingKeyAfterComposition=null,_.compositionJustEnded=!1}function oF(_){if(hG(_.ownerDocument),O3(_.terminal,_.terminalHost||null),typeof _.terminal?.focus==="function")_.terminal.focus();else _.termEl?.focus?.();O3(_.terminal,_.terminalHost||null)}class A3{container;ownerDocument;ownerWindow;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;resizeRetryTimers=new Set;lastAppliedThemeSignature=null;lastResizeSignature=null;pendingHandoffToken=null;standbyHandoffToken=null;standbyHandoffRequest=null;constructor(_,$){this.container=_,this.ownerDocument=_.ownerDocument||document,this.ownerWindow=this.ownerDocument.defaultView||window;let j=typeof $?.transferState?.handoffToken==="string"&&$.transferState.handoffToken.trim()?$.transferState.handoffToken.trim():null,G=G2("terminal_handoff");this.pendingHandoffToken=j||G||null,this.termEl=this.ownerDocument.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.termEl.setAttribute("inputmode","none"),this.statusEl=this.ownerDocument.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=this.ownerDocument.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.style.display="flex",this.bodyEl.style.flex="1 1 auto",this.bodyEl.style.minHeight="0",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,G=Number.isFinite(_?.height)?_.height:0,Z=Number.isFinite($?.width)?$.width:0,X=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(G)}:${Math.round(Z)}x${Math.round(X)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;_.style.display="flex",_.style.flex="1 1 auto",_.style.width="100%",_.style.height="100%",_.style.minWidth="0",_.style.minHeight="0",_.style.overflow="hidden";let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.minHeight="0",$.style.flex="1 1 auto",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none",j.style.maxHeight="none"}queueResizeRetries(_=[32,96,180,320,520,900]){if(this.disposed||!this.ownerWindow)return;this.clearResizeRetries();for(let $ of _){let j=this.ownerWindow.setTimeout(()=>{if(this.resizeRetryTimers.delete(j),this.disposed)return;this.scheduleResize(!0)},$);this.resizeRetryTimers.add(j)}}clearResizeRetries(){if(!this.ownerWindow||this.resizeRetryTimers.size===0)return;for(let _ of Array.from(this.resizeRetryTimers))try{this.ownerWindow.clearTimeout(_)}catch($){console.debug("[terminal-pane] Ignoring timeout clear failure during resize retry drain.",$,{timer:_})}this.resizeRetryTimers.clear()}scheduleResize(_=!1){if(this.disposed)return;let $=this.getResizeSignature();if(!_&&this.lastResizeSignature===$)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await lF();if(await hF(),this.disposed)return;this.bodyEl.innerHTML="";let $=this.ownerDocument.createElement("div");$.className="terminal-live-host",$.style.display="flex",$.style.flex="1 1 auto",$.style.width="100%",$.style.height="100%",$.style.minWidth="0",$.style.minHeight="0",$.setAttribute("inputmode","none"),this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:SF,fontSize:13,theme:mG(this.ownerWindow,this.ownerDocument)}),G=null;if(typeof _.FitAddon==="function")G=new _.FitAddon,j.loadAddon?.(G);hG(this.ownerDocument),await j.open($),$.__terminal=j,O3(j,$),this.syncHostLayout(),j.loadFonts?.(),G?.observeResize?.(),this.terminal=j,this.fitAddon=G,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(!0),this.queueResizeRetries([32,96,180,320]),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=mG(this.ownerWindow,this.ownerDocument),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;SG({termEl:this.termEl,bodyEl:this.bodyEl,terminal:this.terminal,theme:_,themeChanged:j,socket:this.socket,resize:()=>this.resize()}),this.lastAppliedThemeSignature=$}installThemeSync(){if(!this.ownerWindow||!this.ownerDocument)return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();this.ownerWindow.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=this.ownerWindow.matchMedia?.("(prefers-color-scheme: dark)"),G=()=>_();if(j?.addEventListener)j.addEventListener("change",G);else if(j?.addListener)j.addListener(G);this.mediaQuery=j,this.mediaQueryListener=G;let Z=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(Z?.observe(this.ownerDocument.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),this.ownerDocument.body)Z?.observe(this.ownerDocument.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=Z}installResizeSync(){if(!this.ownerWindow)return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(this.ownerWindow.addEventListener("dock-resize",_),this.ownerWindow.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),j.observe(this.termEl),j.observe(this.bodyEl),this.resizeObserver=j}}consumeStandbyHandoffToken(){let _=this.standbyHandoffToken||null;return this.standbyHandoffToken=null,_}async ensureStandbyHandoffToken(_=!1){if(this.disposed)return null;if(!_&&this.standbyHandoffToken)return this.standbyHandoffToken;if(this.standbyHandoffRequest)return await this.standbyHandoffRequest;return this.standbyHandoffRequest=pF().then(($)=>{if(!$||this.disposed)return null;return this.standbyHandoffToken=$,$}).catch(($)=>{return console.warn("[terminal-pane] Failed to prepare standby handoff token:",$),null}).finally(()=>{this.standbyHandoffRequest=null}),await this.standbyHandoffRequest}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await rF();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=this.pendingHandoffToken||null,G=new WebSocket(nF($.ws_path||"/terminal/ws",j));this.socket=G,this.setStatus(j?"Transferring…":"Connecting…"),_.onData?.((Z)=>{if(G.readyState===WebSocket.OPEN)G.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:X})=>{if(G.readyState===WebSocket.OPEN)G.send(JSON.stringify({type:"resize",cols:Z,rows:X}))}),G.addEventListener("open",()=>{if(this.disposed)return;if(j&&this.pendingHandoffToken===j)this.pendingHandoffToken=null;this.ensureStandbyHandoffToken(!1),this.setStatus("Connected"),this.scheduleResize(!0),this.queueResizeRetries([24,72,160,320])}),G.addEventListener("message",(Z)=>{if(this.disposed)return;let X=null;try{X=JSON.parse(String(Z.data))}catch{X={type:"output",data:String(Z.data)}}if(X?.type==="session"){let Y=typeof X.session_id==="string"?X.session_id:null;if(_.__piclawSessionMeta={sessionId:Y,createdAt:typeof X.created_at==="string"?X.created_at:null,processPid:typeof X.process_pid==="number"?X.process_pid:null},!this.standbyHandoffToken)this.ensureStandbyHandoffToken(!1);return}if(X?.type==="output"&&typeof X.data==="string"){_.write?.(X.data);return}if(X?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),G.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),G.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}detachHostListeners(){PG({ownerWindow:this.ownerWindow,themeChangeListener:this.themeChangeListener,mediaQuery:this.mediaQuery,mediaQueryListener:this.mediaQueryListener,dockResizeListener:this.dockResizeListener,windowResizeListener:this.windowResizeListener,themeObserver:this.themeObserver,resizeObserver:this.resizeObserver}),this.themeChangeListener=null,this.mediaQuery=null,this.mediaQueryListener=null,this.themeObserver=null,this.resizeObserver=null,this.dockResizeListener=null,this.windowResizeListener=null}beforeDetachFromHost(){this.setStatus("Moving terminal…")}afterAttachToHost(_){let $=typeof _?.transferState?.handoffToken==="string"&&_.transferState.handoffToken.trim()?_.transferState.handoffToken.trim():null;if($)this.pendingHandoffToken=$;if(this.installThemeSync(),this.installResizeSync(),this.socket?.readyState===WebSocket.OPEN)this.setStatus("Connected");else if(this.pendingHandoffToken)this.setStatus("Transferring…");else if(this.socket?.readyState===WebSocket.CONNECTING)this.setStatus("Connecting…");this.scheduleResize(!0),this.queueResizeRetries([32,96,180,320]),requestAnimationFrame(()=>this.focus())}moveHost(_){return!1}exportHostTransferState(){let _=this.standbyHandoffToken||this.pendingHandoffToken||null;return _?{kind:"terminal",live:!1,handoffToken:_}:null}async preparePopoutTransfer(){let _=this.consumeStandbyHandoffToken();if(!_)await this.ensureStandbyHandoffToken(!0),_=this.consumeStandbyHandoffToken();if(!_)return null;return this.pendingHandoffToken=_,{terminal_handoff:_}}getContent(){return}isDirty(){return!1}focus(){let _=this.bodyEl.querySelector(".terminal-live-host");oF({terminal:this.terminal,terminalHost:_,termEl:this.termEl,ownerDocument:this.ownerDocument})}resize(){fG({syncHostLayout:()=>this.syncHostLayout(),terminal:this.terminal,fitAddon:this.fitAddon,sendResize:()=>this.sendResize()})}dispose(){if(this.disposed)return;this.disposed=!0,this.standbyHandoffToken=null,this.standbyHandoffRequest=null,this.clearResizeRetries(),this.detachHostListeners(),this.resizeFrame=RG({resizeFrame:this.resizeFrame,socket:this.socket,fitAddon:this.fitAddon,terminal:this.terminal,termEl:this.termEl})}}var k3={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new A3(_,$)}},y3={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path===X2?1e4:!1},mount(_,$){return new A3(_,$)}};function f1(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((Z)=>{try{return Boolean($.matchMedia(Z)?.matches)}catch{return!1}})}function L6(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let G=String(j?.userAgent||""),Z=Number(j?.maxTouchPoints||0),X=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(G),Y=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(X||Z>1||Y)}function rG(_,$={}){if(f1($))return null;if(L6($))return{target:"_blank",features:void 0,mode:"tab"};return{target:sF(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function M3(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function w3(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),G=String($.message||"Preparing a new branch window…");_.document.title=j;let Z=_.document.body;if(!Z)return;if(typeof _.document.createElement!=="function"){Z.textContent=`${j}
${G}`;return}let X=_.document.createElement("div");X.setAttribute("style","font-family: system-ui, sans-serif; padding: 24px; color: #222;");let Y=_.document.createElement("h1");Y.setAttribute("style","font-size: 18px; margin: 0 0 12px;"),Y.textContent=j;let L=_.document.createElement("p");if(L.setAttribute("style","margin: 0; line-height: 1.5;"),L.textContent=G,X.appendChild(Y),X.appendChild(L),typeof Z.replaceChildren==="function")Z.replaceChildren(X);else Z.innerHTML="",Z.appendChild(X)}catch{return}}function T3(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{return}}function x3(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{return}}function T1(_,$,j={}){let G=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(G.searchParams.set("chat_jid",Z),G.searchParams.delete("branch_loader"),G.searchParams.delete("branch_source_chat_jid"),G.searchParams.delete("pane_popout"),G.searchParams.delete("pane_path"),G.searchParams.delete("pane_label"),j.chatOnly!==!1)G.searchParams.set("chat_only","1");return G.toString()}function I3(_,$,j={}){let G=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(G.searchParams.set("branch_loader","1"),G.searchParams.set("branch_source_chat_jid",Z),G.searchParams.delete("chat_jid"),G.searchParams.delete("pane_popout"),G.searchParams.delete("pane_path"),G.searchParams.delete("pane_label"),j.chatOnly!==!1)G.searchParams.set("chat_only","1");return G.toString()}function pG(_,$,j={}){let G=new URL(String(_||"http://localhost/")),Z=String($||"").trim();if(!Z)return G.toString();if(G.searchParams.set("pane_popout","1"),G.searchParams.set("pane_path",Z),j?.label)G.searchParams.set("pane_label",String(j.label));else G.searchParams.delete("pane_label");if(j?.chatJid)G.searchParams.set("chat_jid",String(j.chatJid));let X=j?.params&&typeof j.params==="object"?j.params:null;if(X)for(let[Y,L]of Object.entries(X)){let V=String(Y||"").trim();if(!V)continue;if(L===null||L===void 0||L==="")G.searchParams.delete(V);else G.searchParams.set(V,String(L))}return G.searchParams.delete("chat_only"),G.searchParams.delete("branch_loader"),G.searchParams.delete("branch_source_chat_jid"),G.toString()}function sF(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function aF(_){return`piclaw-pane-${String(_||"pane").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function nG(_,$={}){if(f1($))return null;if(L6($))return{target:"_blank",features:void 0,mode:"tab"};return{target:aF(_),features:"popup=yes,width=1200,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function U4(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let G=j.toLowerCase();if(G.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(G.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(G.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(G.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(G.includes("failed to fork branch")||G.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function tF(_){try{return JSON.parse(_)}catch{return null}}function eF(_){if(typeof _==="string")return new TextEncoder().encode(_).byteLength;if(_ instanceof ArrayBuffer)return _.byteLength;if(ArrayBuffer.isView(_))return _.byteLength;if(_ instanceof Blob)return _.size;return 0}function _U(_){if(typeof _==="string")return _.length;if(_ instanceof ArrayBuffer)return _.byteLength;if(_ instanceof Blob)return _.size;return Number(_?.size||0)}function dG(_){try{return _?.close?.(),!0}catch($){return!1}}class C3{socket=null;disposed=!1;options;bytesIn=0;bytesOut=0;pendingOutbound=[];constructor(_){this.options=_}connect(){if(this.disposed)return;dG(this.socket);let _=new WebSocket(this.options.url);_.binaryType=this.options.binaryType||"arraybuffer",_.addEventListener("open",()=>{if(this.disposed||this.socket!==_)return;this.flushPendingOutbound(_),this.options.onOpen?.()}),_.addEventListener("message",($)=>{if(this.disposed||this.socket!==_)return;let j=_U($.data);if(this.bytesIn+=j,this.emitMetrics(),typeof $.data==="string"){let G=this.options.parseControlMessage||tF;this.options.onMessage?.({kind:"control",raw:$.data,payload:G($.data)});return}this.options.onMessage?.({kind:"binary",data:$.data,size:j})}),_.addEventListener("close",()=>{if(this.socket===_)this.socket=null;if(this.disposed)return;this.options.onClose?.()}),_.addEventListener("error",()=>{if(this.disposed||this.socket!==_)return;this.options.onError?.()}),this.socket=_}send(_){if(this.disposed)return;let $=this.socket;if(!$||$.readyState!==WebSocket.OPEN){this.pendingOutbound.push(_);return}this.sendNow($,_)}sendControl(_){this.send(JSON.stringify(_??{}))}getMetrics(){return{bytesIn:this.bytesIn,bytesOut:this.bytesOut}}dispose(){if(this.disposed)return;this.disposed=!0,dG(this.socket),this.socket=null}emitMetrics(){this.options.onMetrics?.(this.getMetrics())}sendNow(_,$){let j=eF($);this.bytesOut+=j,this.emitMetrics(),_.send($)}flushPendingOutbound(_){if(this.pendingOutbound.length===0)return;let $=this.pendingOutbound.splice(0);for(let j=0;j<$.length;j+=1){if(this.disposed||this.socket!==_||_.readyState!==WebSocket.OPEN){this.pendingOutbound.unshift(...$.slice(j));return}this.sendNow(_,$[j])}}}var d2=()=>{throw Error("Operation requires compiling with --exportRuntime")},$U=typeof BigUint64Array<"u",i2=Symbol();var jU=new TextDecoder("utf-16le",{fatal:!0});Object.hasOwn=Object.hasOwn||function(_,$){return Object.prototype.hasOwnProperty.call(_,$)};function iG(_,$){let j=new Uint32Array(_)[$+-4>>>2]>>>1,G=new Uint16Array(_,$,j);if(j<=192)return String.fromCharCode(...G);try{return jU.decode(G)}catch{let Z="",X=0;while(j-X>1024)Z+=String.fromCharCode(...G.subarray(X,X+=1024));return Z+String.fromCharCode(...G.subarray(X))}}function oG(_){let $={};function j(Z,X){if(!Z)return"<yet unknown>";return iG(Z.buffer,X)}let G=_.env=_.env||{};return G.abort=G.abort||function(X,Y,L,V){let K=$.memory||G.memory;throw Error(`abort: ${j(K,X)} at ${j(K,Y)}:${L}:${V}`)},G.trace=G.trace||function(X,Y,...L){let V=$.memory||G.memory;console.log(`trace: ${j(V,X)}${Y?" ":""}${L.slice(0,Y).join(", ")}`)},G.seed=G.seed||Date.now,_.Math=_.Math||Math,_.Date=_.Date||Date,$}function sG(_,$){let j=$.exports,G=j.memory,Z=j.table,X=j.__new||d2,Y=j.__pin||d2,L=j.__unpin||d2,V=j.__collect||d2,K=j.__rtti_base,Q=K?(T)=>T[K>>>2]:d2;_.__new=X,_.__pin=Y,_.__unpin=L,_.__collect=V;function q(T){let w=new Uint32Array(G.buffer);if((T>>>=0)>=Q(w))throw Error(`invalid id: ${T}`);return w[(K+4>>>2)+T]}function B(T){let w=q(T);if(!(w&7))throw Error(`not an array: ${T}, flags=${w}`);return w}function N(T){return 31-Math.clz32(T>>>6&31)}function U(T){if(T==null)return 0;let w=T.length,y=X(w<<1,2),P=new Uint16Array(G.buffer);for(let f=0,b=y>>>1;f<w;++f)P[b+f]=T.charCodeAt(f);return y}_.__newString=U;function E(T){if(T==null)return 0;let w=new Uint8Array(T),y=X(w.length,1);return new Uint8Array(G.buffer).set(w,y),y}_.__newArrayBuffer=E;function D(T){if(!T)return null;let w=G.buffer;if(new Uint32Array(w)[T+-8>>>2]!==2)throw Error(`not a string: ${T}`);return iG(w,T)}_.__getString=D;function H(T,w,y){let P=G.buffer;if(y)switch(T){case 2:return new Float32Array(P);case 3:return new Float64Array(P)}else switch(T){case 0:return new(w?Int8Array:Uint8Array)(P);case 1:return new(w?Int16Array:Uint16Array)(P);case 2:return new(w?Int32Array:Uint32Array)(P);case 3:return new(w?BigInt64Array:BigUint64Array)(P)}throw Error(`unsupported align: ${T}`)}function k(T,w=0){let y=w,P=B(T),f=N(P),b=typeof y!=="number",c=b?y.length:y,h=X(c<<f,P&4?T:1),_0;if(P&4)_0=h;else{Y(h);let v=X(P&2?16:12,T);L(h);let e=new Uint32Array(G.buffer);if(e[v+0>>>2]=h,e[v+4>>>2]=h,e[v+8>>>2]=c<<f,P&2)e[v+12>>>2]=c;_0=v}if(b){let v=H(f,P&2048,P&4096),e=h>>>f;if(P&16384)for(let z0=0;z0<c;++z0)v[e+z0]=y[z0];else v.set(y,e)}return _0}_.__newArray=k;function O(T){let w=new Uint32Array(G.buffer),y=w[T+-8>>>2],P=B(y),f=N(P),b=P&4?T:w[T+4>>>2],c=P&2?w[T+12>>>2]:w[b+-4>>>2]>>>f;return H(f,P&2048,P&4096).subarray(b>>>=f,b+c)}_.__getArrayView=O;function W(T){let w=O(T),y=w.length,P=Array(y);for(let f=0;f<y;f++)P[f]=w[f];return P}_.__getArray=W;function I(T){let w=G.buffer,y=new Uint32Array(w)[T+-4>>>2];return w.slice(T,T+y)}_.__getArrayBuffer=I;function x(T){if(!Z)throw Error("Operation requires compiling with --exportTable");let w=new Uint32Array(G.buffer)[T>>>2];return Z.get(w)}_.__getFunction=x;function J(T,w,y){return new T(A(T,w,y))}function A(T,w,y){let P=G.buffer,f=new Uint32Array(P);return new T(P,f[y+4>>>2],f[y+8>>>2]>>>w)}function z(T,w,y){_[`__get${w}`]=J.bind(null,T,y),_[`__get${w}View`]=A.bind(null,T,y)}if([Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array].forEach((T)=>{z(T,T.name,31-Math.clz32(T.BYTES_PER_ELEMENT))}),$U)[BigUint64Array,BigInt64Array].forEach((T)=>{z(T,T.name.slice(3),3)});return _.memory=_.memory||G,_.table=_.table||Z,ZU(j,_)}function aG(_){return typeof Response<"u"&&_ instanceof Response}function GU(_){return _ instanceof WebAssembly.Module}async function P3(_,$={}){if(aG(_=await _))return K6(_,$);let j=GU(_)?_:await WebAssembly.compile(_),G=oG($),Z=await WebAssembly.instantiate(j,$),X=sG(G,Z);return{module:j,instance:Z,exports:X}}async function K6(_,$={}){if(!WebAssembly.instantiateStreaming)return P3(aG(_=await _)?_.arrayBuffer():_,$);let j=oG($),G=await WebAssembly.instantiateStreaming(_,$),Z=sG(j,G.instance);return{...G,exports:Z}}function ZU(_,$={}){let j=_.__argumentsLength?(G)=>{_.__argumentsLength.value=G}:_.__setArgumentsLength||_.__setargc||(()=>{});for(let G of Object.keys(_)){let Z=_[G],X=G.split("."),Y=$;while(X.length>1){let K=X.shift();if(!Object.hasOwn(Y,K))Y[K]={};Y=Y[K]}let L=X[0],V=L.indexOf("#");if(V>=0){let K=L.substring(0,V),Q=Y[K];if(typeof Q>"u"||!Q.prototype){let q=function(...B){return q.wrap(q.prototype.constructor(0,...B))};if(q.prototype={valueOf(){return this[i2]}},q.wrap=function(B){return Object.create(q.prototype,{[i2]:{value:B,writable:!1}})},Q)Object.getOwnPropertyNames(Q).forEach((B)=>Object.defineProperty(q,B,Object.getOwnPropertyDescriptor(Q,B)));Y[K]=q}if(L=L.substring(V+1),Y=Y[K].prototype,/^(get|set):/.test(L)){if(!Object.hasOwn(Y,L=L.substring(4))){let q=_[G.replace("set:","get:")],B=_[G.replace("get:","set:")];Object.defineProperty(Y,L,{get(){return q(this[i2])},set(N){B(this[i2],N)},enumerable:!0})}}else if(L==="constructor")(Y[L]=function(...q){return j(q.length),Z(...q)}).original=Z;else(Y[L]=function(...q){return j(q.length),Z(this[i2],...q)}).original=Z}else if(/^(get|set):/.test(L)){if(!Object.hasOwn(Y,L=L.substring(4)))Object.defineProperty(Y,L,{get:_[G.replace("set:","get:")],set:_[G.replace("get:","set:")],enumerable:!0})}else if(typeof Z==="function"&&Z!==j)(Y[L]=(...K)=>{return j(K.length),Z(...K)}).original=Z;else Y[L]=Z}return $}function f3(_){try{return _?.__collect?.(),!0}catch($){return!1}}var YU="/static/js/vendor/remote-display-decoder.wasm",V6=null;function tG(_){if(_ instanceof ArrayBuffer)return _;if(_.byteOffset===0&&_.byteLength===_.buffer.byteLength)return _.buffer;return _.slice().buffer}async function eG(){if(V6)return V6;return V6=(async()=>{try{let G=function(Z,X,Y,L,V,K,Q){let q=tG(X),B=j.__pin(j.__newArrayBuffer(q));try{return j[Z](B,Y,L,V,K,Q.bitsPerPixel,Q.bigEndian?1:0,Q.trueColor?1:0,Q.redMax,Q.greenMax,Q.blueMax,Q.redShift,Q.greenShift,Q.blueShift)}finally{j.__unpin(B),f3(j)}},_=await fetch(YU,{credentials:"same-origin"});if(!_.ok)throw Error(`HTTP ${_.status}`);let j=(typeof K6==="function"?await K6(_,{}):await P3(await _.arrayBuffer(),{})).exports;for(let Z of["initFramebuffer","getFramebufferPtr","getFramebufferLen","getFramebufferWidth","getFramebufferHeight","processRawRect","processCopyRect","processRreRect","processHextileRect","processZrleTileData","decodeRawRectToRgba"])if(typeof j[Z]!=="function")throw Error(`${Z} export is missing.`);return{initFramebuffer(Z,X){j.initFramebuffer(Z,X)},getFramebuffer(){let Z=j.getFramebufferPtr(),X=j.getFramebufferLen();return new Uint8ClampedArray(new Uint8Array(j.memory.buffer,Z,X).slice().buffer)},getFramebufferWidth(){return j.getFramebufferWidth()},getFramebufferHeight(){return j.getFramebufferHeight()},processRawRect(Z,X,Y,L,V,K){return G("processRawRect",Z,X,Y,L,V,K)},processCopyRect(Z,X,Y,L,V,K){return j.processCopyRect(Z,X,Y,L,V,K)},processRreRect(Z,X,Y,L,V,K){return G("processRreRect",Z,X,Y,L,V,K)},processHextileRect(Z,X,Y,L,V,K){return G("processHextileRect",Z,X,Y,L,V,K)},processZrleTileData(Z,X,Y,L,V,K){return G("processZrleTileData",Z,X,Y,L,V,K)},decodeRawRectToRgba(Z,X,Y,L){let V=tG(Z),K=j.__pin(j.__newArrayBuffer(V));try{let Q=j.__pin(j.decodeRawRectToRgba(K,X,Y,L.bitsPerPixel,L.bigEndian?1:0,L.trueColor?1:0,L.redMax,L.greenMax,L.blueMax,L.redShift,L.greenShift,L.blueShift));try{return new Uint8ClampedArray(j.__getArrayBuffer(Q))}finally{j.__unpin(Q)}}finally{j.__unpin(K),f3(j)}}}}catch(_){return console.warn("[remote-display] Failed to load WASM pipeline, using JS fallback.",_),null}})(),V6}function Y2(_,$,j){return Math.max($,Math.min(j,_))}function q6(_,$,j){let G=new Uint8Array(6),Z=Y2(Math.floor(Number($||0)),0,65535),X=Y2(Math.floor(Number(j||0)),0,65535);return G[0]=5,G[1]=Y2(Math.floor(Number(_||0)),0,255),G[2]=Z>>8&255,G[3]=Z&255,G[4]=X>>8&255,G[5]=X&255,G}function m$(_){switch(Number(_)){case 0:return 1;case 1:return 2;case 2:return 4;default:return 0}}function S3(_){let $=m$(_?.button);if($)return $;let j=String(_?.pointerType||"").toLowerCase();if(j==="touch"||j==="pen")return m$(0);let G=Number(_?.buttons||0);if(G&1)return m$(0);if(G&4)return m$(1);if(G&2)return m$(2);return 0}function H4(_){let $=String(_?.type||"").toLowerCase();if($==="pointerup"||$==="pointercancel"||$==="lostpointercapture")return!0;let j=Number(_?.buttons);if(Number.isFinite(j)&&j===0&&$!=="pointerdown")return!0;let G=String(_?.pointerType||"").toLowerCase(),Z=Number(_?.pressure);if(G==="touch"||G==="pen"){if($==="pointerleave"||$==="pointerout")return!0;if(Number.isFinite(Z)&&Z<=0&&$!=="pointerdown")return!0}return!1}function _Z(_){let $=String(_?.type||"").toLowerCase();if($==="touchend"||$==="touchcancel")return!0;if($==="touchmove")return Number(_?.touches?.length||0)<=0;return!1}function r1(_){return String(_||"").toLowerCase()==="touch"}function LU(_,$,j,G){let Z=Number(j||0)-Number(_||0),X=Number(G||0)-Number($||0);return Math.hypot(Z,X)}function u3(_){let $=Number.isFinite(_?.maxDistancePx)?Number(_.maxDistancePx):14;return LU(_?.startX,_?.startY,_?.clientX,_?.clientY)>$}function $Z(_){let $=Number.isFinite(_?.maxElapsedMs)?Number(_.maxElapsedMs):300;if(Number(_?.elapsedMs||0)>$)return!1;return!u3(_)}function jZ(_){return String(_||"").toLowerCase()!=="mouse"}function g3(_,$,j,G,Z){let X=Math.max(1,Math.floor(Number(G||0))),Y=Math.max(1,Math.floor(Number(Z||0))),L=Math.max(1,Number(j?.width||0)),V=Math.max(1,Number(j?.height||0)),K=(Number(_||0)-Number(j?.left||0))/L,Q=(Number($||0)-Number(j?.top||0))/V;return{x:Y2(Math.floor(K*X),0,Math.max(0,X-1)),y:Y2(Math.floor(Q*Y),0,Math.max(0,Y-1))}}function GZ(_,$,j,G=0){let Z=Number(_)<0?8:16,X=Y2(Number(G||0)|Z,0,255);return[q6(X,$,j),q6(Number(G||0),$,j)]}function ZZ(_,$){let j=new Uint8Array(8),G=Math.max(0,Math.min(4294967295,Number($||0)>>>0));return j[0]=4,j[1]=_?1:0,j[4]=G>>>24&255,j[5]=G>>>16&255,j[6]=G>>>8&255,j[7]=G&255,j}function XZ(_,$,j=!1){if(_==null||$==null)return!1;return Boolean(j)||Number(_)===Number($)}function E4(_){if(typeof _!=="string")return null;return _.length>0?_:null}function YZ(_,$,j,G){let Z=Math.max(1,Math.floor(Number(_||0))),X=Math.max(1,Math.floor(Number($||0))),Y=Math.max(1,Math.floor(Number(j||0))),L=Math.max(1,Math.floor(Number(G||0))),V=Math.min(Z/Y,X/L);if(!Number.isFinite(V)||V<=0)return 1;return Math.max(0.01,V)}var R3={Backspace:65288,Tab:65289,Enter:65293,Escape:65307,Insert:65379,Delete:65535,Home:65360,End:65367,PageUp:65365,PageDown:65366,ArrowLeft:65361,ArrowUp:65362,ArrowRight:65363,ArrowDown:65364,Shift:65505,ShiftLeft:65505,ShiftRight:65506,Control:65507,ControlLeft:65507,ControlRight:65508,Alt:65513,AltLeft:65513,AltRight:65514,Meta:65515,MetaLeft:65515,MetaRight:65516,Super:65515,Super_L:65515,Super_R:65516,CapsLock:65509,NumLock:65407,ScrollLock:65300,Pause:65299,PrintScreen:65377,ContextMenu:65383,Menu:65383," ":32};for(let _=1;_<=12;_+=1)R3[`F${_}`]=65470+(_-1);function b3(_){let $=[_?.key,_?.code];for(let X of $)if(X&&Object.prototype.hasOwnProperty.call(R3,X))return R3[X];let j=String(_?.key||""),G=j?j.codePointAt(0):null,Z=G==null?0:G>65535?2:1;if(G!=null&&j.length===Z){if(G<=255)return G;return(16777216|G)>>>0}return null}var o_=Uint8Array,D1=Uint16Array,d3=Int32Array,Q6=new o_([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),N6=new o_([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),h3=new o_([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),qZ=function(_,$){var j=new D1(31);for(var G=0;G<31;++G)j[G]=$+=1<<_[G-1];var Z=new d3(j[30]);for(var G=1;G<30;++G)for(var X=j[G];X<j[G+1];++X)Z[X]=X-j[G]<<5|G;return{b:j,r:Z}},QZ=qZ(Q6,2),NZ=QZ.b,r3=QZ.r;NZ[28]=258,r3[258]=28;var BZ=qZ(N6,0),KU=BZ.b,LZ=BZ.r,p3=new D1(32768);for(Q_=0;Q_<32768;++Q_)p1=(Q_&43690)>>1|(Q_&21845)<<1,p1=(p1&52428)>>2|(p1&13107)<<2,p1=(p1&61680)>>4|(p1&3855)<<4,p3[Q_]=((p1&65280)>>8|(p1&255)<<8)>>1;var p1,Q_,n1=function(_,$,j){var G=_.length,Z=0,X=new D1($);for(;Z<G;++Z)if(_[Z])++X[_[Z]-1];var Y=new D1($);for(Z=1;Z<$;++Z)Y[Z]=Y[Z-1]+X[Z-1]<<1;var L;if(j){L=new D1(1<<$);var V=15-$;for(Z=0;Z<G;++Z)if(_[Z]){var K=Z<<4|_[Z],Q=$-_[Z],q=Y[_[Z]-1]++<<Q;for(var B=q|(1<<Q)-1;q<=B;++q)L[p3[q]>>V]=K}}else{L=new D1(G);for(Z=0;Z<G;++Z)if(_[Z])L[Z]=p3[Y[_[Z]-1]++]>>15-_[Z]}return L},c$=new o_(288);for(Q_=0;Q_<144;++Q_)c$[Q_]=8;var Q_;for(Q_=144;Q_<256;++Q_)c$[Q_]=9;var Q_;for(Q_=256;Q_<280;++Q_)c$[Q_]=7;var Q_;for(Q_=280;Q_<288;++Q_)c$[Q_]=8;var Q_,t2=new o_(32);for(Q_=0;Q_<32;++Q_)t2[Q_]=5;var Q_,VU=n1(c$,9,0),qU=n1(c$,9,1),QU=n1(t2,5,0),NU=n1(t2,5,1),v3=function(_){var $=_[0];for(var j=1;j<_.length;++j)if(_[j]>$)$=_[j];return $},R1=function(_,$,j){var G=$/8|0;return(_[G]|_[G+1]<<8)>>($&7)&j},m3=function(_,$){var j=$/8|0;return(_[j]|_[j+1]<<8|_[j+2]<<16)>>($&7)},i3=function(_){return(_+7)/8|0},a2=function(_,$,j){if($==null||$<0)$=0;if(j==null||j>_.length)j=_.length;return new o_(_.subarray($,j))};var BU=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],N1=function(_,$,j){var G=Error($||BU[_]);if(G.code=_,Error.captureStackTrace)Error.captureStackTrace(G,N1);if(!j)throw G;return G},FU=function(_,$,j,G){var Z=_.length,X=G?G.length:0;if(!Z||$.f&&!$.l)return j||new o_(0);var Y=!j,L=Y||$.i!=2,V=$.i;if(Y)j=new o_(Z*3);var K=function(X0){var D0=j.length;if(X0>D0){var C0=new o_(Math.max(D0*2,X0));C0.set(j),j=C0}},Q=$.f||0,q=$.p||0,B=$.b||0,N=$.l,U=$.d,E=$.m,D=$.n,H=Z*8;do{if(!N){Q=R1(_,q,1);var k=R1(_,q+1,3);if(q+=3,!k){var O=i3(q)+4,W=_[O-4]|_[O-3]<<8,I=O+W;if(I>Z){if(V)N1(0);break}if(L)K(B+W);j.set(_.subarray(O,I),B),$.b=B+=W,$.p=q=I*8,$.f=Q;continue}else if(k==1)N=qU,U=NU,E=9,D=5;else if(k==2){var x=R1(_,q,31)+257,J=R1(_,q+10,15)+4,A=x+R1(_,q+5,31)+1;q+=14;var z=new o_(A),T=new o_(19);for(var w=0;w<J;++w)T[h3[w]]=R1(_,q+w*3,7);q+=J*3;var y=v3(T),P=(1<<y)-1,f=n1(T,y,1);for(var w=0;w<A;){var b=f[R1(_,q,P)];q+=b&15;var O=b>>4;if(O<16)z[w++]=O;else{var c=0,h=0;if(O==16)h=3+R1(_,q,3),q+=2,c=z[w-1];else if(O==17)h=3+R1(_,q,7),q+=3;else if(O==18)h=11+R1(_,q,127),q+=7;while(h--)z[w++]=c}}var _0=z.subarray(0,x),v=z.subarray(x);E=v3(_0),D=v3(v),N=n1(_0,E,1),U=n1(v,D,1)}else N1(1);if(q>H){if(V)N1(0);break}}if(L)K(B+131072);var e=(1<<E)-1,z0=(1<<D)-1,j0=q;for(;;j0=q){var c=N[m3(_,q)&e],$0=c>>4;if(q+=c&15,q>H){if(V)N1(0);break}if(!c)N1(2);if($0<256)j[B++]=$0;else if($0==256){j0=q,N=null;break}else{var L0=$0-254;if($0>264){var w=$0-257,B0=Q6[w];L0=R1(_,q,(1<<B0)-1)+NZ[w],q+=B0}var t=U[m3(_,q)&z0],V0=t>>4;if(!t)N1(3);q+=t&15;var v=KU[V0];if(V0>3){var B0=N6[V0];v+=m3(_,q)&(1<<B0)-1,q+=B0}if(q>H){if(V)N1(0);break}if(L)K(B+131072);var q0=B+L0;if(B<v){var k0=X-v,s=Math.min(v,q0);if(k0+B<0)N1(3);for(;B<s;++B)j[B]=G[k0+B]}for(;B<q0;++B)j[B]=j[B-v]}}if($.l=N,$.p=j0,$.b=B,$.f=Q,N)Q=1,$.m=E,$.d=U,$.n=D}while(!Q);return B!=j.length&&Y?a2(j,0,B):j.subarray(0,B)},N$=function(_,$,j){j<<=$&7;var G=$/8|0;_[G]|=j,_[G+1]|=j>>8},o2=function(_,$,j){j<<=$&7;var G=$/8|0;_[G]|=j,_[G+1]|=j>>8,_[G+2]|=j>>16},c3=function(_,$){var j=[];for(var G=0;G<_.length;++G)if(_[G])j.push({s:G,f:_[G]});var Z=j.length,X=j.slice();if(!Z)return{t:UZ,l:0};if(Z==1){var Y=new o_(j[0].s+1);return Y[j[0].s]=1,{t:Y,l:1}}j.sort(function(I,x){return I.f-x.f}),j.push({s:-1,f:25001});var L=j[0],V=j[1],K=0,Q=1,q=2;j[0]={s:-1,f:L.f+V.f,l:L,r:V};while(Q!=Z-1)L=j[j[K].f<j[q].f?K++:q++],V=j[K!=Q&&j[K].f<j[q].f?K++:q++],j[Q++]={s:-1,f:L.f+V.f,l:L,r:V};var B=X[0].s;for(var G=1;G<Z;++G)if(X[G].s>B)B=X[G].s;var N=new D1(B+1),U=n3(j[Q-1],N,0);if(U>$){var G=0,E=0,D=U-$,H=1<<D;X.sort(function(x,J){return N[J.s]-N[x.s]||x.f-J.f});for(;G<Z;++G){var k=X[G].s;if(N[k]>$)E+=H-(1<<U-N[k]),N[k]=$;else break}E>>=D;while(E>0){var O=X[G].s;if(N[O]<$)E-=1<<$-N[O]++-1;else++G}for(;G>=0&&E;--G){var W=X[G].s;if(N[W]==$)--N[W],++E}U=$}return{t:new o_(N),l:U}},n3=function(_,$,j){return _.s==-1?Math.max(n3(_.l,$,j+1),n3(_.r,$,j+1)):$[_.s]=j},KZ=function(_){var $=_.length;while($&&!_[--$]);var j=new D1(++$),G=0,Z=_[0],X=1,Y=function(V){j[G++]=V};for(var L=1;L<=$;++L)if(_[L]==Z&&L!=$)++X;else{if(!Z&&X>2){for(;X>138;X-=138)Y(32754);if(X>2)Y(X>10?X-11<<5|28690:X-3<<5|12305),X=0}else if(X>3){Y(Z),--X;for(;X>6;X-=6)Y(8304);if(X>2)Y(X-3<<5|8208),X=0}while(X--)Y(Z);X=1,Z=_[L]}return{c:j.subarray(0,G),n:$}},s2=function(_,$){var j=0;for(var G=0;G<$.length;++G)j+=_[G]*$[G];return j},FZ=function(_,$,j){var G=j.length,Z=i3($+2);_[Z]=G&255,_[Z+1]=G>>8,_[Z+2]=_[Z]^255,_[Z+3]=_[Z+1]^255;for(var X=0;X<G;++X)_[Z+X+4]=j[X];return(Z+4+G)*8},VZ=function(_,$,j,G,Z,X,Y,L,V,K,Q){N$($,Q++,j),++Z[256];var q=c3(Z,15),B=q.t,N=q.l,U=c3(X,15),E=U.t,D=U.l,H=KZ(B),k=H.c,O=H.n,W=KZ(E),I=W.c,x=W.n,J=new D1(19);for(var A=0;A<k.length;++A)++J[k[A]&31];for(var A=0;A<I.length;++A)++J[I[A]&31];var z=c3(J,7),T=z.t,w=z.l,y=19;for(;y>4&&!T[h3[y-1]];--y);var P=K+5<<3,f=s2(Z,c$)+s2(X,t2)+Y,b=s2(Z,B)+s2(X,E)+Y+14+3*y+s2(J,T)+2*J[16]+3*J[17]+7*J[18];if(V>=0&&P<=f&&P<=b)return FZ($,Q,_.subarray(V,V+K));var c,h,_0,v;if(N$($,Q,1+(b<f)),Q+=2,b<f){c=n1(B,N,0),h=B,_0=n1(E,D,0),v=E;var e=n1(T,w,0);N$($,Q,O-257),N$($,Q+5,x-1),N$($,Q+10,y-4),Q+=14;for(var A=0;A<y;++A)N$($,Q+3*A,T[h3[A]]);Q+=3*y;var z0=[k,I];for(var j0=0;j0<2;++j0){var $0=z0[j0];for(var A=0;A<$0.length;++A){var L0=$0[A]&31;if(N$($,Q,e[L0]),Q+=T[L0],L0>15)N$($,Q,$0[A]>>5&127),Q+=$0[A]>>12}}}else c=VU,h=c$,_0=QU,v=t2;for(var A=0;A<L;++A){var B0=G[A];if(B0>255){var L0=B0>>18&31;if(o2($,Q,c[L0+257]),Q+=h[L0+257],L0>7)N$($,Q,B0>>23&31),Q+=Q6[L0];var t=B0&31;if(o2($,Q,_0[t]),Q+=v[t],t>3)o2($,Q,B0>>5&8191),Q+=N6[t]}else o2($,Q,c[B0]),Q+=h[B0]}return o2($,Q,c[256]),Q+h[256]},UU=new d3([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),UZ=new o_(0),HU=function(_,$,j,G,Z,X){var Y=X.z||_.length,L=new o_(G+Y+5*(1+Math.ceil(Y/7000))+Z),V=L.subarray(G,L.length-Z),K=X.l,Q=(X.r||0)&7;if($){if(Q)V[0]=X.r>>3;var q=UU[$-1],B=q>>13,N=q&8191,U=(1<<j)-1,E=X.p||new D1(32768),D=X.h||new D1(U+1),H=Math.ceil(j/3),k=2*H,O=function(g0){return(_[g0]^_[g0+1]<<H^_[g0+2]<<k)&U},W=new d3(25000),I=new D1(288),x=new D1(32),J=0,A=0,z=X.i||0,T=0,w=X.w||0,y=0;for(;z+2<Y;++z){var P=O(z),f=z&32767,b=D[P];if(E[f]=b,D[P]=f,w<=z){var c=Y-z;if((J>7000||T>24576)&&(c>423||!K)){Q=VZ(_,V,0,W,I,x,A,T,y,z-y,Q),T=J=A=0,y=z;for(var h=0;h<286;++h)I[h]=0;for(var h=0;h<30;++h)x[h]=0}var _0=2,v=0,e=N,z0=f-b&32767;if(c>2&&P==O(z-z0)){var j0=Math.min(B,c)-1,$0=Math.min(32767,z),L0=Math.min(258,c);while(z0<=$0&&--e&&f!=b){if(_[z+_0]==_[z+_0-z0]){var B0=0;for(;B0<L0&&_[z+B0]==_[z+B0-z0];++B0);if(B0>_0){if(_0=B0,v=z0,B0>j0)break;var t=Math.min(z0,B0-2),V0=0;for(var h=0;h<t;++h){var q0=z-z0+h&32767,k0=E[q0],s=q0-k0&32767;if(s>V0)V0=s,b=q0}}}f=b,b=E[f],z0+=f-b&32767}}if(v){W[T++]=268435456|r3[_0]<<18|LZ[v];var X0=r3[_0]&31,D0=LZ[v]&31;A+=Q6[X0]+N6[D0],++I[257+X0],++x[D0],w=z+_0,++J}else W[T++]=_[z],++I[_[z]]}}for(z=Math.max(z,w);z<Y;++z)W[T++]=_[z],++I[_[z]];if(Q=VZ(_,V,K,W,I,x,A,T,y,z-y,Q),!K)X.r=Q&7|V[Q/8|0]<<3,Q-=7,X.h=D,X.p=E,X.i=z,X.w=w}else{for(var z=X.w||0;z<Y+K;z+=65535){var C0=z+65535;if(C0>=Y)V[Q/8|0]=K,C0=Y;Q=FZ(V,Q+1,_.subarray(z,C0))}X.i=Y}return a2(L,0,G+i3(Q)+Z)};var HZ=function(){var _=1,$=0;return{p:function(j){var G=_,Z=$,X=j.length|0;for(var Y=0;Y!=X;){var L=Math.min(Y+2655,X);for(;Y<L;++Y)Z+=G+=j[Y];G=(G&65535)+15*(G>>16),Z=(Z&65535)+15*(Z>>16)}_=G,$=Z},d:function(){return _%=65521,$%=65521,(_&255)<<24|(_&65280)<<8|($&255)<<8|$>>8}}},EU=function(_,$,j,G,Z){if(!Z){if(Z={l:1},$.dictionary){var X=$.dictionary.subarray(-32768),Y=new o_(X.length+_.length);Y.set(X),Y.set(_,X.length),_=Y,Z.w=X.length}}return HU(_,$.level==null?6:$.level,$.mem==null?Z.l?Math.ceil(Math.max(8,Math.min(13,Math.log(_.length)))*1.5):20:12+$.mem,j,G,Z)};var EZ=function(_,$,j){for(;j;++$)_[$]=j,j>>>=8};var DU=function(_,$){var j=$.level,G=j==0?0:j<6?1:j==9?3:2;if(_[0]=120,_[1]=G<<6|($.dictionary&&32),_[1]|=31-(_[0]<<8|_[1])%31,$.dictionary){var Z=HZ();Z.p($.dictionary),EZ(_,2,Z.d())}},zU=function(_,$){if((_[0]&15)!=8||_[0]>>4>7||(_[0]<<8|_[1])%31)N1(6,"invalid zlib data");if((_[1]>>5&1)==+!$)N1(6,"invalid zlib data: "+(_[1]&32?"need":"unexpected")+" dictionary");return(_[1]>>3&4)+2};var l3=function(){function _($,j){if(typeof $=="function")j=$,$={};this.ondata=j;var G=$&&$.dictionary&&$.dictionary.subarray(-32768);if(this.s={i:0,b:G?G.length:0},this.o=new o_(32768),this.p=new o_(0),G)this.o.set(G)}return _.prototype.e=function($){if(!this.ondata)N1(5);if(this.d)N1(4);if(!this.p.length)this.p=$;else if($.length){var j=new o_(this.p.length+$.length);j.set(this.p),j.set($,this.p.length),this.p=j}},_.prototype.c=function($){this.s.i=+(this.d=$||!1);var j=this.s.b,G=FU(this.p,this.s,this.o);this.ondata(a2(G,j,this.s.b),this.d),this.o=a2(G,this.s.b-32768),this.s.b=this.o.length,this.p=a2(this.p,this.s.p/8|0),this.s.p&=7},_.prototype.push=function($,j){this.e($),this.c(j)},_}();function DZ(_,$){if(!$)$={};var j=HZ();j.p(_);var G=EU(_,$,$.dictionary?6:2,4);return DU(G,$),EZ(G,G.length-4,j.d()),G}var zZ=function(){function _($,j){l3.call(this,$,j),this.v=$&&$.dictionary?2:1}return _.prototype.push=function($,j){if(l3.prototype.e.call(this,$),this.v){if(this.p.length<6&&!j)return;this.p=this.p.subarray(zU(this.p,this.v-1)),this.v=0}if(j){if(this.p.length<4)N1(6,"invalid zlib data");this.p=this.p.subarray(0,-4)}l3.prototype.c.call(this,j)},_}();var WU=typeof TextDecoder<"u"&&new TextDecoder,OU=0;try{WU.decode(UZ,{stream:!0}),OU=1}catch(_){}var JU=[58,50,42,34,26,18,10,2,60,52,44,36,28,20,12,4,62,54,46,38,30,22,14,6,64,56,48,40,32,24,16,8,57,49,41,33,25,17,9,1,59,51,43,35,27,19,11,3,61,53,45,37,29,21,13,5,63,55,47,39,31,23,15,7],AU=[40,8,48,16,56,24,64,32,39,7,47,15,55,23,63,31,38,6,46,14,54,22,62,30,37,5,45,13,53,21,61,29,36,4,44,12,52,20,60,28,35,3,43,11,51,19,59,27,34,2,42,10,50,18,58,26,33,1,41,9,49,17,57,25],kU=[32,1,2,3,4,5,4,5,6,7,8,9,8,9,10,11,12,13,12,13,14,15,16,17,16,17,18,19,20,21,20,21,22,23,24,25,24,25,26,27,28,29,28,29,30,31,32,1],yU=[16,7,20,21,29,12,28,17,1,15,23,26,5,18,31,10,2,8,24,14,32,27,3,9,19,13,30,6,22,11,4,25],MU=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],wU=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],TU=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1],xU=[[[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],[0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],[4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],[15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13]],[[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10],[3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],[0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],[13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9]],[[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8],[13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],[13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],[1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12]],[[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],[13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],[10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],[3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14]],[[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9],[14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6],[4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14],[11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3]],[[12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11],[10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8],[9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6],[4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13]],[[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1],[13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6],[1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2],[6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12]],[[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7],[1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2],[7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8],[2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11]]],JZ=new Uint8Array(256);for(let _=0;_<256;_+=1){let $=0;for(let j=0;j<8;j+=1)$=$<<1|_>>j&1;JZ[_]=$}function AZ(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function kZ(_){let $=0n,j=AZ(_);for(let G of j)$=$<<8n|BigInt(G);return $}function IU(_,$){let j=new Uint8Array($),G=BigInt(_);for(let Z=$-1;Z>=0;Z-=1)j[Z]=Number(G&0xffn),G>>=8n;return j}function L2(_,$,j){let G=0n;for(let Z of $){let X=BigInt(_)>>BigInt(j-Z)&1n;G=G<<1n|X}return G}function WZ(_,$){let j=28n,G=(1n<<j)-1n,Z=BigInt($%28);return(_<<Z|_>>j-Z)&G}function CU(_){let $=L2(kZ(_),MU,64),j=$>>28n&0x0fffffffn,G=$&0x0fffffffn,Z=[];for(let X of TU){j=WZ(j,X),G=WZ(G,X);let Y=j<<28n|G;Z.push(L2(Y,wU,56))}return Z}function PU(_){let $=0n;for(let j=0;j<8;j+=1){let G=BigInt((7-j)*6),Z=Number(_>>G&0x3fn),X=(Z&32)>>4|Z&1,Y=Z>>1&15;$=$<<4n|BigInt(xU[j][X][Y])}return $}function fU(_,$){let j=L2(_,kU,32)^BigInt($),G=PU(j);return L2(G,yU,32)}function OZ(_,$){let j=CU($),G=L2(kZ(_),JU,64),Z=G>>32n&0xffffffffn,X=G&0xffffffffn;for(let L of j){let V=X,K=(Z^fU(X,L))&0xffffffffn;Z=V,X=K}let Y=X<<32n|Z;return IU(L2(Y,AU,64),8)}function RU(_){let $=String(_??""),j=new Uint8Array(8);for(let G=0;G<8;G+=1){let Z=G<$.length?$.charCodeAt(G)&255:0;j[G]=JZ[Z]}return j}function yZ(_,$){let j=AZ($);if(j.byteLength!==16)throw Error(`Invalid VNC auth challenge length ${j.byteLength}; expected 16 bytes.`);let G=RU(_),Z=new Uint8Array(16);return Z.set(OZ(j.slice(0,8),G),0),Z.set(OZ(j.slice(8,16),G),8),Z}var S1="vnc";function SU(_){return Number(_)}function uU(_){let $=Array.isArray(_)?_:typeof _==="string"?_.split(",").map((Z)=>Z.trim()).filter((Z)=>Z.length>0):[],j=[],G=new Set;for(let Z of $){let X=SU(Z);if(!Number.isFinite(X))continue;let Y=Number(X);if(!G.has(Y))j.push(Y),G.add(Y)}if(j.length>0)return j;return[5,2,1,0,-223]}function q2(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function gU(_,$){let j=q2(_),G=q2($);if(!j.byteLength)return new Uint8Array(G);if(!G.byteLength)return new Uint8Array(j);let Z=new Uint8Array(j.byteLength+G.byteLength);return Z.set(j,0),Z.set(G,j.byteLength),Z}function bU(_){let $=0;for(let Z of _||[])$+=Z?.byteLength||0;let j=new Uint8Array($),G=0;for(let Z of _||[]){let X=q2(Z);j.set(X,G),G+=X.byteLength}return j}function vU(){return(_)=>{let $=q2(_);try{let j=[],G=new zZ((Z)=>{j.push(new Uint8Array(Z))});if(G.push($,!0),G.err)throw Error(G.msg||"zlib decompression error");return bU(j)}catch(j){try{let G=DZ($);return G instanceof Uint8Array?G:new Uint8Array(G)}catch(G){let Z=G instanceof Error?G.message:"unexpected EOF";throw Error(`unexpected EOF: ${Z}`)}}}}function mU(_){return new TextEncoder().encode(String(_||""))}function K2(_){return new TextDecoder().decode(q2(_))}function cU(_){let $=/^RFB (\d{3})\.(\d{3})\n$/.exec(String(_||""));if(!$)return null;return{major:parseInt($[1],10),minor:parseInt($[2],10),text:$[0]}}function lU(_){if(!_)return`RFB 003.008
`;if(_.major>3||_.minor>=8)return`RFB 003.008
`;if(_.minor>=7)return`RFB 003.007
`;return`RFB 003.003
`}function MZ(_,$=0){return{bitsPerPixel:_.getUint8($),depth:_.getUint8($+1),bigEndian:_.getUint8($+2)===1,trueColor:_.getUint8($+3)===1,redMax:_.getUint16($+4,!1),greenMax:_.getUint16($+6,!1),blueMax:_.getUint16($+8,!1),redShift:_.getUint8($+10),greenShift:_.getUint8($+11),blueShift:_.getUint8($+12)}}function hU(_){let $=new ArrayBuffer(20),j=new DataView($);return j.setUint8(0,0),j.setUint8(1,0),j.setUint8(2,0),j.setUint8(3,0),j.setUint8(4,_.bitsPerPixel),j.setUint8(5,_.depth),j.setUint8(6,_.bigEndian?1:0),j.setUint8(7,_.trueColor?1:0),j.setUint16(8,_.redMax,!1),j.setUint16(10,_.greenMax,!1),j.setUint16(12,_.blueMax,!1),j.setUint8(14,_.redShift),j.setUint8(15,_.greenShift),j.setUint8(16,_.blueShift),new Uint8Array($)}function rU(_){let $=Array.isArray(_)?_:[],j=new ArrayBuffer(4+$.length*4),G=new DataView(j);G.setUint8(0,2),G.setUint8(1,0),G.setUint16(2,$.length,!1);let Z=4;for(let X of $)G.setInt32(Z,Number(X||0),!1),Z+=4;return new Uint8Array(j)}function wZ(_,$,j,G=0,Z=0){let X=new ArrayBuffer(10),Y=new DataView(X);return Y.setUint8(0,3),Y.setUint8(1,_?1:0),Y.setUint16(2,G,!1),Y.setUint16(4,Z,!1),Y.setUint16(6,Math.max(0,$||0),!1),Y.setUint16(8,Math.max(0,j||0),!1),new Uint8Array(X)}function V2(_,$){let j=Number($||0);if(j<=0)return 0;if(j===255)return _&255;return Math.max(0,Math.min(255,Math.round((_||0)*255/j)))}function xZ(_,$,j,G){if(j===1)return _[$];if(j===2)return G?(_[$]<<8|_[$+1])>>>0:(_[$]|_[$+1]<<8)>>>0;if(j===3)return G?(_[$]<<16|_[$+1]<<8|_[$+2])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16)>>>0;if(j===4)return G?(_[$]<<24>>>0|_[$+1]<<16|_[$+2]<<8|_[$+3])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24>>>0)>>>0;return 0}function pU(_,$,j,G){let Z=G||Q2,X=q2(_),Y=Math.max(1,Math.floor(Number(Z.bitsPerPixel||0)/8)),L=Math.max(0,$||0)*Math.max(0,j||0)*Y;if(X.byteLength<L)throw Error(`Incomplete raw rectangle payload: expected ${L} byte(s), got ${X.byteLength}`);if(!Z.trueColor)throw Error("Indexed-colour VNC framebuffers are not supported yet.");let V=new Uint8ClampedArray(Math.max(0,$||0)*Math.max(0,j||0)*4),K=0,Q=0;for(let q=0;q<Math.max(0,$||0)*Math.max(0,j||0);q+=1){let B=xZ(X,K,Y,Z.bigEndian),N=V2(B>>>Z.redShift&Z.redMax,Z.redMax),U=V2(B>>>Z.greenShift&Z.greenMax,Z.greenMax),E=V2(B>>>Z.blueShift&Z.blueMax,Z.blueMax);V[Q]=N,V[Q+1]=U,V[Q+2]=E,V[Q+3]=255,K+=Y,Q+=4}return V}function B$(_,$,j){let G=j||Q2,Z=Math.max(1,Math.floor(Number(G.bitsPerPixel||0)/8));if(_.byteLength<$+Z)return null;let X=xZ(_,$,Z,G.bigEndian);return{rgba:[V2(X>>>G.redShift&G.redMax,G.redMax),V2(X>>>G.greenShift&G.greenMax,G.greenMax),V2(X>>>G.blueShift&G.blueMax,G.blueMax),255],bytesPerPixel:Z}}function l$(_,$,j,G,Z,X,Y){if(!Y)return;for(let L=0;L<X;L+=1)for(let V=0;V<Z;V+=1){let K=((G+L)*$+(j+V))*4;_[K]=Y[0],_[K+1]=Y[1],_[K+2]=Y[2],_[K+3]=Y[3]}}function IZ(_,$,j,G,Z,X,Y){for(let L=0;L<X;L+=1){let V=L*Z*4,K=((G+L)*$+j)*4;_.set(Y.subarray(V,V+Z*4),K)}}function TZ(_,$){let j=$,G=1;while(!0){if(_.byteLength<j+1)return null;let Z=_[j++];if(G+=Z,Z!==255)break}return{consumed:j-$,runLength:G}}function nU(_,$,j,G,Z,X,Y){let L=Z||Q2,V=Math.max(1,Math.floor(Number(L.bitsPerPixel||0)/8));if(_.byteLength<$+4)return null;let K=new DataView(_.buffer,_.byteOffset+$,4).getUint32(0,!1);if(_.byteLength<$+4+K)return null;let Q=_.slice($+4,$+4+K),q;try{q=Y(Q)}catch{return{consumed:4+K,skipped:!0}}let B=0,N=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,G||0)*4);for(let U=0;U<G;U+=64){let E=Math.min(64,G-U);for(let D=0;D<j;D+=64){let H=Math.min(64,j-D);if(q.byteLength<B+1)return null;let k=q[B++],O=k&127,W=(k&128)!==0;if(!W&&O===0){let I=H*E*V;if(q.byteLength<B+I)return null;let x=X(q.slice(B,B+I),H,E,L);B+=I,IZ(N,j,D,U,H,E,x);continue}if(!W&&O===1){let I=B$(q,B,L);if(!I)return null;B+=I.bytesPerPixel,l$(N,j,D,U,H,E,I.rgba);continue}if(!W&&O>1&&O<=16){let I=[];for(let z=0;z<O;z+=1){let T=B$(q,B,L);if(!T)return null;B+=T.bytesPerPixel,I.push(T.rgba)}let x=O<=2?1:O<=4?2:4,J=Math.ceil(H*x/8),A=J*E;if(q.byteLength<B+A)return null;for(let z=0;z<E;z+=1){let T=B+z*J;for(let w=0;w<H;w+=1){let y=w*x,P=T+(y>>3),f=8-x-(y&7),b=q[P]>>f&(1<<x)-1;l$(N,j,D+w,U+z,1,1,I[b])}}B+=A;continue}if(W&&O===0){let I=0,x=0;while(x<E){let J=B$(q,B,L);if(!J)return null;B+=J.bytesPerPixel;let A=TZ(q,B);if(!A)return null;B+=A.consumed;for(let z=0;z<A.runLength;z+=1)if(l$(N,j,D+I,U+x,1,1,J.rgba),I+=1,I>=H){if(I=0,x+=1,x>=E)break}}continue}if(W&&O>0){let I=[];for(let A=0;A<O;A+=1){let z=B$(q,B,L);if(!z)return null;B+=z.bytesPerPixel,I.push(z.rgba)}let x=0,J=0;while(J<E){if(q.byteLength<B+1)return null;let A=q[B++],z=A,T=1;if(A&128){z=A&127;let y=TZ(q,B);if(!y)return null;B+=y.consumed,T=y.runLength}let w=I[z];if(!w)return null;for(let y=0;y<T;y+=1)if(l$(N,j,D+x,U+J,1,1,w),x+=1,x>=H){if(x=0,J+=1,J>=E)break}}continue}return{consumed:4+K,skipped:!0}}}return{consumed:4+K,rgba:N,decompressed:q}}function dU(_,$,j,G,Z){let X=Z||Q2,Y=Math.max(1,Math.floor(Number(X.bitsPerPixel||0)/8));if(_.byteLength<$+4+Y)return null;let V=new DataView(_.buffer,_.byteOffset+$,_.byteLength-$).getUint32(0,!1),K=4+Y+V*(Y+8);if(_.byteLength<$+K)return null;let Q=$+4,q=B$(_,Q,X);if(!q)return null;Q+=q.bytesPerPixel;let B=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,G||0)*4);l$(B,j,0,0,j,G,q.rgba);for(let N=0;N<V;N+=1){let U=B$(_,Q,X);if(!U)return null;if(Q+=U.bytesPerPixel,_.byteLength<Q+8)return null;let E=new DataView(_.buffer,_.byteOffset+Q,8),D=E.getUint16(0,!1),H=E.getUint16(2,!1),k=E.getUint16(4,!1),O=E.getUint16(6,!1);Q+=8,l$(B,j,D,H,k,O,U.rgba)}return{consumed:Q-$,rgba:B}}function iU(_,$,j,G,Z,X){let Y=Z||Q2,L=Math.max(1,Math.floor(Number(Y.bitsPerPixel||0)/8)),V=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,G||0)*4),K=$,Q=[0,0,0,255],q=[255,255,255,255];for(let B=0;B<G;B+=16){let N=Math.min(16,G-B);for(let U=0;U<j;U+=16){let E=Math.min(16,j-U);if(_.byteLength<K+1)return null;let D=_[K++];if(D&1){let H=E*N*L;if(_.byteLength<K+H)return null;let k=X(_.slice(K,K+H),E,N,Y);K+=H,IZ(V,j,U,B,E,N,k);continue}if(D&2){let H=B$(_,K,Y);if(!H)return null;Q=H.rgba,K+=H.bytesPerPixel}if(l$(V,j,U,B,E,N,Q),D&4){let H=B$(_,K,Y);if(!H)return null;q=H.rgba,K+=H.bytesPerPixel}if(D&8){if(_.byteLength<K+1)return null;let H=_[K++];for(let k=0;k<H;k+=1){let O=q;if(D&16){let T=B$(_,K,Y);if(!T)return null;O=T.rgba,K+=T.bytesPerPixel}if(_.byteLength<K+2)return null;let W=_[K++],I=_[K++],x=W>>4,J=W&15,A=(I>>4)+1,z=(I&15)+1;l$(V,j,U+x,B+J,A,z,O)}}}}return{consumed:K-$,rgba:V}}var Q2={bitsPerPixel:32,depth:24,bigEndian:!1,trueColor:!0,redMax:255,greenMax:255,blueMax:255,redShift:16,greenShift:8,blueShift:0};class B6{protocol=S1;state;framebufferWidth;framebufferHeight;serverName;constructor(_={}){this.shared=_.shared!==!1,this.decodeRawRect=typeof _.decodeRawRect==="function"?_.decodeRawRect:pU,this.pipeline=_.pipeline||null,this.encodings=uU(_.encodings||null),this.state="version",this.buffer=new Uint8Array(0),this.serverVersion=null,this.clientVersionText=null,this.framebufferWidth=0,this.framebufferHeight=0,this.serverName="",this.serverPixelFormat=null,this.clientPixelFormat={...Q2},this.password=typeof _.password==="string"&&_.password.length>0?_.password:null,this.inflateZrle=typeof _.inflateZrle==="function"?_.inflateZrle:vU()}receive(_){if(_)this.buffer=gU(this.buffer,_);let $=[],j=[],G=!0;while(G){if(G=!1,this.state==="version"){if(this.buffer.byteLength<12)break;let Z=this.consume(12),X=K2(Z),Y=cU(X);if(!Y)throw Error(`Unsupported RFB version banner: ${X||"<empty>"}`);this.serverVersion=Y,this.clientVersionText=lU(Y),j.push(mU(this.clientVersionText)),$.push({type:"protocol-version",protocol:S1,server:Y.text.trim(),client:this.clientVersionText.trim()}),this.state=Y.minor>=7?"security-types":"security-type-33",G=!0;continue}if(this.state==="security-types"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<5)break;let V=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(1,!1);if(this.buffer.byteLength<5+V)break;this.consume(1);let K=K2(this.consume(4+V).slice(4));throw Error(K||"VNC server rejected the connection.")}if(this.buffer.byteLength<1+Z)break;this.consume(1);let X=Array.from(this.consume(Z));$.push({type:"security-types",protocol:S1,types:X});let Y=null;if(X.includes(2)&&this.password!==null)Y=2;else if(X.includes(1))Y=1;else if(X.includes(2))throw Error("VNC password authentication is required. Enter a password and reconnect.");else throw Error(`Unsupported VNC security types: ${X.join(", ")||"none"}. This viewer currently supports only "None" and password-based VNC auth.`);j.push(Uint8Array.of(Y)),$.push({type:"security-selected",protocol:S1,securityType:Y,label:Y===2?"VNC Authentication":"None"}),this.state=Y===2?"security-challenge":"security-result",G=!0;continue}if(this.state==="security-type-33"){if(this.buffer.byteLength<4)break;let X=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),X===0){if(this.buffer.byteLength<4)break;let L=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength<4+L)break;let V=K2(this.consume(4+L).slice(4));throw Error(V||"VNC server rejected the connection.")}if(X===2){if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");$.push({type:"security-selected",protocol:S1,securityType:2,label:"VNC Authentication"}),this.state="security-challenge",G=!0;continue}if(X!==1)throw Error(`Unsupported VNC security type ${X}. This viewer currently supports only "None" and password-based VNC auth.`);$.push({type:"security-selected",protocol:S1,securityType:1,label:"None"}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",G=!0;continue}if(this.state==="security-challenge"){if(this.buffer.byteLength<16)break;if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");let Z=this.consume(16);j.push(yZ(this.password,Z)),this.state="security-result",G=!0;continue}if(this.state==="security-result"){if(this.buffer.byteLength<4)break;let X=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),X!==0){if(this.buffer.byteLength>=4){let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength>=4+Y){let L=K2(this.consume(4+Y).slice(4));throw Error(L||"VNC authentication failed.")}}throw Error("VNC authentication failed.")}$.push({type:"security-result",protocol:S1,ok:!0}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",G=!0;continue}if(this.state==="server-init"){if(this.buffer.byteLength<24)break;let Z=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength),X=Z.getUint16(0,!1),Y=Z.getUint16(2,!1),L=MZ(Z,4),V=Z.getUint32(20,!1);if(this.buffer.byteLength<24+V)break;let K=this.consume(24),Q=new DataView(K.buffer,K.byteOffset,K.byteLength);if(this.framebufferWidth=Q.getUint16(0,!1),this.framebufferHeight=Q.getUint16(2,!1),this.serverPixelFormat=MZ(Q,4),this.serverName=K2(this.consume(V)),this.state="connected",this.pipeline)this.pipeline.initFramebuffer(this.framebufferWidth,this.framebufferHeight);j.push(hU(this.clientPixelFormat)),j.push(rU(this.encodings)),j.push(wZ(!1,this.framebufferWidth,this.framebufferHeight)),$.push({type:"display-init",protocol:S1,width:X,height:Y,name:this.serverName,pixelFormat:L}),G=!0;continue}if(this.state==="connected"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<4)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint16(2,!1),L=4,V=[],K=!1,Q=!!this.pipeline;for(let B=0;B<Y;B+=1){if(this.buffer.byteLength<L+12){K=!0;break}let N=new DataView(this.buffer.buffer,this.buffer.byteOffset+L,12),U=N.getUint16(0,!1),E=N.getUint16(2,!1),D=N.getUint16(4,!1),H=N.getUint16(6,!1),k=N.getInt32(8,!1);if(L+=12,k===0){let O=Math.max(1,Math.floor(Number(this.clientPixelFormat.bitsPerPixel||0)/8)),W=D*H*O;if(this.buffer.byteLength<L+W){K=!0;break}let I=this.buffer.slice(L,L+W);if(L+=W,Q)this.pipeline.processRawRect(I,U,E,D,H,this.clientPixelFormat),V.push({kind:"pipeline",x:U,y:E,width:D,height:H});else V.push({kind:"rgba",x:U,y:E,width:D,height:H,rgba:this.decodeRawRect(I,D,H,this.clientPixelFormat)});continue}if(k===2){let O=dU(this.buffer,L,D,H,this.clientPixelFormat);if(!O){K=!0;break}if(Q){let W=this.buffer.slice(L,L+O.consumed);this.pipeline.processRreRect(W,U,E,D,H,this.clientPixelFormat),V.push({kind:"pipeline",x:U,y:E,width:D,height:H})}else V.push({kind:"rgba",x:U,y:E,width:D,height:H,rgba:O.rgba});L+=O.consumed;continue}if(k===1){if(this.buffer.byteLength<L+4){K=!0;break}let O=new DataView(this.buffer.buffer,this.buffer.byteOffset+L,4),W=O.getUint16(0,!1),I=O.getUint16(2,!1);if(L+=4,Q)this.pipeline.processCopyRect(U,E,D,H,W,I),V.push({kind:"pipeline",x:U,y:E,width:D,height:H});else V.push({kind:"copy",x:U,y:E,width:D,height:H,srcX:W,srcY:I});continue}if(k===16){let O=nU(this.buffer,L,D,H,this.clientPixelFormat,this.decodeRawRect,this.inflateZrle);if(!O){K=!0;break}if(L+=O.consumed,O.skipped)continue;if(Q&&O.decompressed)this.pipeline.processZrleTileData(O.decompressed,U,E,D,H,this.clientPixelFormat),V.push({kind:"pipeline",x:U,y:E,width:D,height:H});else V.push({kind:"rgba",x:U,y:E,width:D,height:H,rgba:O.rgba});continue}if(k===5){let O=iU(this.buffer,L,D,H,this.clientPixelFormat,this.decodeRawRect);if(!O){K=!0;break}if(Q){let W=this.buffer.slice(L,L+O.consumed);this.pipeline.processHextileRect(W,U,E,D,H,this.clientPixelFormat),V.push({kind:"pipeline",x:U,y:E,width:D,height:H})}else V.push({kind:"rgba",x:U,y:E,width:D,height:H,rgba:O.rgba});L+=O.consumed;continue}if(k===-223){if(this.framebufferWidth=D,this.framebufferHeight=H,Q)this.pipeline.initFramebuffer(D,H);V.push({kind:"resize",x:U,y:E,width:D,height:H});continue}throw Error(`Unsupported VNC rectangle encoding ${k}. This viewer currently supports ZRLE, Hextile, RRE, CopyRect, raw rectangles, and DesktopSize only.`)}if(K)break;this.consume(L);let q={type:"framebuffer-update",protocol:S1,width:this.framebufferWidth,height:this.framebufferHeight,rects:V};if(Q)q.framebuffer=this.pipeline.getFramebuffer();$.push(q),j.push(wZ(!0,this.framebufferWidth,this.framebufferHeight)),G=!0;continue}if(Z===2){this.consume(1),$.push({type:"bell",protocol:S1}),G=!0;continue}if(Z===3){if(this.buffer.byteLength<8)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(4,!1);if(this.buffer.byteLength<8+Y)break;this.consume(8);let L=K2(this.consume(Y));$.push({type:"clipboard",protocol:S1,text:L}),G=!0;continue}throw Error(`Unsupported VNC server message type ${Z}.`)}}return{events:$,outgoing:j}}consume(_){let $=this.buffer.slice(0,_);return this.buffer=this.buffer.slice(_),$}}var i1="piclaw://vnc";function fZ(_){let $=String(_||"").trim();return $?`${i1}/${encodeURIComponent($)}`:i1}var o3="piclaw:vnc-popout:",oU=60000;function RZ(_=globalThis){try{return _?.localStorage??null}catch{return null}}function sU(_=globalThis){let $=kG(_);if($)return $;return`vnc-popout-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}function SZ(_,$=Date.now()){if(!_||typeof _.key!=="function"||!Number.isFinite(_.length))return;let j=[];for(let G=0;G<Number(_.length||0);G+=1){let Z=_.key(G);if(Z&&Z.startsWith(o3))j.push(Z)}for(let G of j)try{let Z=_.getItem(G);if(!Z){_.removeItem(G);continue}let X=JSON.parse(Z),Y=Number(X?.expiresAt||0);if(!Number.isFinite(Y)||Y<=$)_.removeItem(G)}catch{G6(_,G)}}function aU(_,$=globalThis,j=Date.now()){let G=E4(_);if(G===null)return null;let Z=RZ($);if(!Z)return null;SZ(Z,j);let X=sU($);try{return Z.setItem(`${o3}${X}`,JSON.stringify({password:G,expiresAt:j+oU})),X}catch{return null}}function tU(_,$=globalThis,j=Date.now()){let G=String(_||"").trim();if(!G)return null;let Z=RZ($);if(!Z)return null;SZ(Z,j);let X=`${o3}${G}`;try{let Y=Z.getItem(X);if(Z.removeItem(X),!Y)return null;let L=JSON.parse(Y),V=Number(L?.expiresAt||0);if(!Number.isFinite(V)||V<=j)return null;return E4(L?.password)}catch{try{Z.removeItem(X)}catch{}return null}}function eU(_,$,j=globalThis){let G=String(_||"").trim();if(!G)return null;let Z={pane_path:fZ(G)},X=aU($,j);if(X)Z.vnc_secret=X;return Z}function _H(_){let $=String(_||"");if($===i1)return null;if(!$.startsWith(`${i1}/`))return null;let j=$.slice(`${i1}/`.length).trim();if(!j)return null;try{return decodeURIComponent(j)}catch{return j}}function d1(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}async function $H(_=null){let $=_?`/vnc/session?target=${encodeURIComponent(_)}`:"/vnc/session",j=await fetch($,{credentials:"same-origin"}),G=await j.json().catch(()=>({}));if(!j.ok)throw Error(G?.error||`HTTP ${j.status}`);return G}function jH(){if(typeof window>"u")return!1;try{let _=new URLSearchParams(window.location.search).get("pane_popout"),$=String(_||"").trim().toLowerCase();return $==="1"||$==="true"||$==="yes"}catch{return!1}}function GH(_,$=null){let j=window.location.protocol==="https:"?"wss:":"ws:",G=new URL(`${j}//${window.location.host}/vnc/ws`);if(G.searchParams.set("target",String(_||"")),$)G.searchParams.set("handoff",String($));return G.toString()}function ZH(_){return String(_||"").trim()||"localhost"}function XH(_,$){let j=ZH(_),G=Math.floor(Number($||0));if(!Number.isFinite(G)||G<=0||G>65535)return null;return`${j.includes(":")&&!j.startsWith("[")?`[${j}]`:j}:${G}`}function YH(_={}){let $=Boolean(_?.enabled),j=Boolean(_?.directConnectEnabled);if((Array.isArray(_?.targets)?_.targets.length:Number(_?.targetCount||0))>0)return{title:"",body:""};if(j)return{title:"No saved VNC targets yet.",body:"Connect directly above."};if(!$)return{title:"VNC is not configured yet.",body:"No saved targets are available and direct connect is disabled on this host."};return{title:"No saved VNC targets yet.",body:"This host has no configured VNC targets, and direct connect is disabled."}}function CZ(_){if(typeof window>"u")return null;try{let $=new URL(window.location.href),j=$.searchParams.get(_)?.trim()||"";if(!j)return null;return $.searchParams.delete(_),window.history?.replaceState?.(window.history.state,document.title,$.toString()),j}catch{return null}}function PZ(_){if(!String(_?.handoffToken||"").trim())return!1;return Number(_?.bytesIn||0)<=0&&!Boolean(_?.hasRenderedFrame)&&Number(_?.reconnectAttempts||0)<=0}function LH(_,$){if(!_||!$||typeof $.appendChild!=="function")return!1;try{$.innerHTML=""}catch{}return $.appendChild(_),!0}class uZ{container;root;statusEl;bodyEl;metricsEl;targetSubtitleEl;socketBoundary=null;protocol=null;disposed=!1;targetId=null;targetLabel=null;bytesIn=0;bytesOut=0;canvas=null;canvasCtx=null;displayPlaceholderEl=null;displayInfoEl=null;displayMetaEl=null;displayStageEl=null;chromeEl=null;sessionShellEl=null;resizeObserver=null;displayScale=null;readOnly=!1;pointerButtonMask=0;pointerInputAbortController=null;pressedKeysyms=new Map;passwordInputEl=null;authPassword=null;directHostInputEl=null;directPortInputEl=null;directPasswordInputEl=null;hasRenderedFrame=!1;frameTimeoutId=null;reconnectTimerId=null;reconnectAttempts=0;rawFallbackAttempted=!1;protocolRecovering=!1;pendingHandoffToken=null;constructor(_,$){this.container=_,this.targetId=_H($?.path),this.targetLabel=this.targetId||null,this.pendingHandoffToken=CZ("vnc_handoff");let j=CZ("vnc_secret"),G=tU(j);if(G!==null)this.authPassword=G;this.root=document.createElement("div"),this.root.className="vnc-pane-shell",this.root.style.cssText="display:flex;flex-direction:column;width:100%;height:100%;background:var(--bg-primary);color:var(--text-primary);",this.targetSubtitleEl=null,this.statusEl=document.createElement("div"),this.statusEl.style.cssText="display:none;",this.statusEl.textContent="",this.bodyEl=document.createElement("div"),this.bodyEl.style.cssText="flex:1;min-height:0;display:flex;align-items:stretch;justify-content:stretch;padding:12px;",this.metricsEl=document.createElement("div"),this.metricsEl.style.cssText="display:none;",this.updateMetrics(),this.root.append(this.statusEl,this.bodyEl),this.container.appendChild(this.root),this.load()}setStatus(_){this.statusEl.textContent=String(_||"")}setSessionChromeVisible(_){if(this.chromeEl)this.chromeEl.style.display=_?"grid":"none";if(this.sessionShellEl?.style)this.sessionShellEl.style.gridTemplateRows=_?"auto minmax(0,1fr)":"1fr";if(this.displayStageEl?.style)this.displayStageEl.style.padding=_?"12px":"0",this.displayStageEl.style.border=_?"1px solid var(--border-color)":"none",this.displayStageEl.style.borderRadius=_?"16px":"0",this.displayStageEl.style.background=_?"#0a0a0a":"#000";if(this.displayPlaceholderEl?.style)this.displayPlaceholderEl.style.display=_&&!this.hasRenderedFrame?"block":"none"}clearReconnectTimer(){if(this.reconnectTimerId)clearTimeout(this.reconnectTimerId),this.reconnectTimerId=null}scheduleReconnect(_=null){if(this.disposed||!this.targetId)return;this.clearReconnectTimer();let $=Math.min(8000,1500+this.reconnectAttempts*1000),j=Number.isFinite(_)?Math.max(0,Number(_)):$;this.reconnectAttempts+=1,this.reconnectTimerId=setTimeout(()=>{if(this.reconnectTimerId=null,this.disposed||!this.targetId)return;this.connectSocket()},j)}updateMetrics(){this.metricsEl.textContent=`Transport bytes — in: ${this.bytesIn} / out: ${this.bytesOut}`}applyMetrics(_){this.bytesIn=Number(_?.bytesIn||0),this.bytesOut=Number(_?.bytesOut||0),this.updateMetrics()}openTargetTab(_,$){if(this.targetId=String(_||"").trim()||null,this.targetLabel=String($||_||"").trim()||this.targetId||"VNC",this.targetId)this.renderTargetSession({direct_connect_enabled:!0,target:{id:this.targetId,label:this.targetLabel,read_only:!1,direct_connect:!0}}),this.setStatus("Connecting…"),this.updateDisplayInfo("Connecting…"),this.updateDisplayMeta("connecting");this.load()}requestPanePopout(_,$){this.container.dispatchEvent(new CustomEvent("pane:popout",{bubbles:!0,detail:{path:_,label:$}}))}resetLiveSession(){this.clearReconnectTimer(),this.reconnectAttempts=0,this.protocol=null;try{this.socketBoundary?.dispose?.()}catch{}this.socketBoundary=null;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=null;try{this.pointerInputAbortController?.abort?.()}catch{}if(this.pointerInputAbortController=null,this.canvas=null,this.canvasCtx=null,this.displayPlaceholderEl=null,this.displayInfoEl=null,this.displayMetaEl=null,this.displayStageEl=null,this.displayScale=null,this.passwordInputEl=null,this.directHostInputEl=null,this.directPortInputEl=null,this.directPasswordInputEl=null,this.hasRenderedFrame=!1,this.rawFallbackAttempted=!1,this.protocolRecovering=!1,this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;this.pressedKeysyms.clear()}renderTargets(_){this.resetLiveSession();let $=Array.isArray(_?.targets)?_.targets:[],j=Boolean(_?.direct_connect_enabled),G=YH({enabled:_?.enabled,directConnectEnabled:j,targets:$});this.bodyEl.innerHTML=`
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
        `,this.directHostInputEl=this.bodyEl.querySelector("[data-vnc-direct-host]"),this.directPortInputEl=this.bodyEl.querySelector("[data-vnc-direct-port]"),this.directPasswordInputEl=this.bodyEl.querySelector("[data-vnc-direct-password]");let Z=()=>{let X=XH(this.directHostInputEl?.value,this.directPortInputEl?.value);if(!X)return;this.authPassword=E4(this.directPasswordInputEl?this.directPasswordInputEl.value:this.authPassword),this.openTargetTab(X,X)};this.directHostInputEl?.addEventListener("keydown",(X)=>{if(X.key!=="Enter")return;X.preventDefault(),Z()}),this.directPortInputEl?.addEventListener("keydown",(X)=>{if(X.key!=="Enter")return;X.preventDefault(),Z()}),this.directPasswordInputEl?.addEventListener("keydown",(X)=>{if(X.key!=="Enter")return;X.preventDefault(),Z()}),this.bodyEl.querySelector("[data-direct-open-tab]")?.addEventListener("click",()=>Z());for(let X of Array.from(this.bodyEl.querySelectorAll("[data-target-open-tab]")))X.addEventListener("click",()=>{let Y=X.getAttribute("data-target-open-tab"),L=X.getAttribute("data-target-label")||Y||"VNC";if(!Y)return;this.openTargetTab(Y,L)})}renderTargetSession(_){this.resetLiveSession();let $=_?.target||{},j=$?.label||this.targetId||"VNC target",G=jH();if(this.targetLabel=j,this.readOnly=Boolean($.read_only),this.pointerButtonMask=0,this.hasRenderedFrame=!1,this.pressedKeysyms.clear(),this.bodyEl.innerHTML=G?`
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
            `,this.sessionShellEl=this.bodyEl.querySelector("[data-vnc-session-shell]"),this.chromeEl=this.bodyEl.querySelector("[data-vnc-session-chrome]"),this.displayStageEl=this.bodyEl.querySelector("[data-display-stage]"),this.canvas=this.bodyEl.querySelector("[data-display-canvas]"),this.displayPlaceholderEl=this.bodyEl.querySelector("[data-display-placeholder]"),this.displayInfoEl=this.bodyEl.querySelector("[data-display-info]"),this.displayMetaEl=this.bodyEl.querySelector("[data-display-meta]"),this.canvasCtx=this.canvas?.getContext?.("2d",{alpha:!1})||null,this.canvasCtx)this.canvasCtx.imageSmoothingEnabled=!0,this.canvasCtx.imageSmoothingQuality="high";if(this.updateDisplayInfo("Waiting for VNC protocol negotiation…"),this.updateDisplayMeta(),this.setSessionChromeVisible(!0),this.attachDisplayResizeObserver(),this.attachCanvasPointerHandlers(),this.attachCanvasKeyboardHandlers(),this.passwordInputEl=this.bodyEl.querySelector("[data-vnc-password]"),this.passwordInputEl&&this.authPassword!==null)this.passwordInputEl.value=this.authPassword;this.passwordInputEl?.addEventListener("input",()=>{this.authPassword=E4(this.passwordInputEl.value)}),this.passwordInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),this.connectSocket()}),this.bodyEl.querySelector("[data-vnc-reconnect]")?.addEventListener("click",()=>{this.authPassword=E4(this.passwordInputEl?this.passwordInputEl.value:this.authPassword),this.connectSocket()}),this.bodyEl.querySelector("[data-open-target-picker]")?.addEventListener("click",()=>{this.openTargetTab("","VNC")})}updateDisplayInfo(_){if(this.displayInfoEl)this.displayInfoEl.textContent=String(_||"")}updateDisplayMeta(_=""){if(!this.displayMetaEl)return;let $=this.protocol?.state?`state=${this.protocol.state}`:"state=idle",j=this.protocol?.framebufferWidth&&this.protocol?.framebufferHeight?`${this.protocol.framebufferWidth}×${this.protocol.framebufferHeight}`:"pending",G=this.protocol?.serverName?` · name=${this.protocol.serverName}`:"",Z=this.displayScale?` · scale=${Math.round(this.displayScale*100)}%`:"",X=_?` · ${_}`:"";this.displayMetaEl.textContent=`${$} · framebuffer=${j}${G}${Z}${X}`}ensureCanvasSize(_,$,j={}){if(!this.canvas||!this.canvasCtx||!_||!$)return;if(this.canvas.width!==_||this.canvas.height!==$)this.canvas.width=_,this.canvas.height=$;let G=j?.reveal===!0;if(this.canvas.style.display=G||this.hasRenderedFrame?"block":"none",this.canvas.style.aspectRatio=`${_} / ${$}`,this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=G||this.hasRenderedFrame?"none":"";this.updateCanvasScale()}attachDisplayResizeObserver(){if(!this.displayStageEl||typeof ResizeObserver>"u")return;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=new ResizeObserver(()=>{this.updateCanvasScale()}),this.resizeObserver.observe(this.displayStageEl)}updateCanvasScale(){if(!this.canvas||!this.displayStageEl||!this.canvas.width||!this.canvas.height)return;requestAnimationFrame(()=>{if(!this.canvas||!this.displayStageEl)return;let _=this.displayStageEl.getBoundingClientRect?.(),$=Math.max(1,Math.floor(_?.width||this.displayStageEl.clientWidth||0)-32),j=Math.max(1,Math.floor(_?.height||this.displayStageEl.clientHeight||0)-32);if(!$||!j)return;let G=YZ($,j,this.canvas.width,this.canvas.height);this.displayScale=G,this.canvas.style.width=`${Math.max(1,Math.round(this.canvas.width*G))}px`,this.canvas.style.height=`${Math.max(1,Math.round(this.canvas.height*G))}px`,this.updateDisplayMeta()})}getFramebufferPointFromEvent(_){if(!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let $=this.canvas.getBoundingClientRect?.();if(!$||!$.width||!$.height)return null;return g3(_.clientX,_.clientY,$,this.protocol.framebufferWidth,this.protocol.framebufferHeight)}sendPointerEvent(_,$,j){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(q6(_,$,j))}attachCanvasPointerHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.style.cursor="crosshair",this.canvas.style.touchAction="none";try{this.pointerInputAbortController?.abort?.()}catch{}let _=new AbortController;this.pointerInputAbortController=_;let $=_.signal,j=this.canvas.ownerDocument||document,G=j.defaultView||window,Z=new Map,X=new Map,Y=new Map,L=new Map,V=new Set,K=!1,Q=(J)=>this.getFramebufferPointFromEvent(J)||X.get(J?.pointerId)||{x:0,y:0},q=(J)=>{if(!J||!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let A=this.canvas.getBoundingClientRect?.();if(!A||!A.width||!A.height)return null;return g3(J.clientX,J.clientY,A,this.protocol.framebufferWidth,this.protocol.framebufferHeight)},B=(J)=>{let A=Y.get(J);if(A)G.clearTimeout(A),Y.delete(J)},N=(J)=>{let A=L.get(J);if(A?.holdTimer)G.clearTimeout(A.holdTimer);L.delete(J)},U=()=>{for(let J of L.keys())N(J)},E=()=>{if(!V.size)K=!1},D=(J,A=80)=>{let z=String(J?.pointerType||"").toLowerCase();if(!jZ(z))return;let T=Number(J?.pointerId);if(!Number.isFinite(T))return;B(T);let w=G.setTimeout(()=>{if(Y.delete(T),!Z.has(T)&&!this.pointerButtonMask)return;k({pointerId:T,pointerType:z,type:"pointercancel",clientX:J?.clientX,clientY:J?.clientY},{resetAll:!0})},A);Y.set(T,w)},H=(J=null)=>{if(!Z.size&&!this.pointerButtonMask&&!L.size)return;for(let z of Y.keys())B(z);U(),V.clear(),K=!1;let A=J||X.values().next().value||{x:0,y:0};Z.clear(),X.clear(),this.pointerButtonMask=0,this.sendPointerEvent(0,A.x,A.y)},k=(J,A={})=>{if(A.resetAll){let P=Number(J?.pointerId);B(P),H(Q(J));try{this.canvas?.releasePointerCapture?.(P)}catch{}return}let z=Q(J),T=Number(J?.pointerId);B(T),N(T),V.delete(T),E();let w=Z.has(T),y=Z.get(T)??S3(J);if(!w&&!y&&!this.pointerButtonMask)return;if(Z.delete(T),X.delete(T),y)this.pointerButtonMask&=~y;else if(!Z.size)this.pointerButtonMask=0;this.sendPointerEvent(this.pointerButtonMask,z.x,z.y);try{this.canvas?.releasePointerCapture?.(T)}catch{}},O=(J)=>{if(K)return;let A=L.get(J);if(!A||A.dragActivated)return;A.dragActivated=!0,A.holdTimer=null;let z=m$(0);if(!z)return;Z.set(J,(Z.get(J)??0)|z),this.pointerButtonMask|=z,D({pointerId:J,pointerType:"touch",clientX:A.lastClientX,clientY:A.lastClientY}),this.sendPointerEvent(this.pointerButtonMask,A.lastPoint.x,A.lastPoint.y)},W=(J,A,z={})=>{let T=L.get(J);if(!T)return!1;let w=A||T.lastPoint||{x:0,y:0},y=Number.isFinite(z.clientX)?Number(z.clientX):T.lastClientX,P=Number.isFinite(z.clientY)?Number(z.clientY):T.lastClientY;if(V.delete(J),z.cancelled||K){if(N(J),E(),Z.has(J)||this.pointerButtonMask)H(w);return!0}if(T.dragActivated||Z.has(J))return k({pointerId:J,pointerType:"touch",type:"pointerup",clientX:y,clientY:P}),E(),!0;let f=Date.now()-T.startedAt,b=$Z({startX:T.startClientX,startY:T.startClientY,clientX:y,clientY:P,elapsedMs:f});if(B(J),N(J),X.delete(J),E(),b){let c=m$(0);this.sendPointerEvent(c,w.x,w.y),this.sendPointerEvent(0,w.x,w.y)}else this.sendPointerEvent(this.pointerButtonMask,w.x,w.y);return!0};this.canvas.addEventListener("contextmenu",(J)=>{J.preventDefault()},{signal:$}),this.canvas.addEventListener("pointermove",(J)=>{let A=this.getFramebufferPointFromEvent(J);if(!A)return;let z=String(J?.pointerType||"").toLowerCase(),T=r1(z);if(X.set(J.pointerId,A),T){let w=L.get(J.pointerId);if(w){if(w.lastClientX=Number(J?.clientX||0),w.lastClientY=Number(J?.clientY||0),w.lastPoint=A,!w.dragActivated&&u3({startX:w.startClientX,startY:w.startClientY,clientX:w.lastClientX,clientY:w.lastClientY}))N(J.pointerId),L.set(J.pointerId,{...w,holdTimer:null,dragActivated:!1});if(!w.dragActivated){this.sendPointerEvent(this.pointerButtonMask,A.x,A.y);return}}if(K)return}if(Z.has(J.pointerId)&&H4(J)){k(J,{resetAll:!0});return}if(this.pointerButtonMask&&!Z.has(J.pointerId)&&H4(J)){H(A);return}if(Z.has(J.pointerId))D(J);this.sendPointerEvent(this.pointerButtonMask,A.x,A.y)},{signal:$}),this.canvas.addEventListener("pointerdown",(J)=>{let A=this.getFramebufferPointFromEvent(J);if(!A)return;let z=String(J?.pointerType||"").toLowerCase(),T=r1(z);if(J.preventDefault(),this.canvas?.focus?.(),X.set(J.pointerId,A),T){if(V.add(J.pointerId),V.size>1){let P=[...V];K=!0,H(A);for(let f of P)V.add(f);K=!0;return}N(J.pointerId);let y={startClientX:Number(J?.clientX||0),startClientY:Number(J?.clientY||0),lastClientX:Number(J?.clientX||0),lastClientY:Number(J?.clientY||0),startedAt:Date.now(),lastPoint:A,holdTimer:null,dragActivated:!1};y.holdTimer=G.setTimeout(()=>{O(J.pointerId)},260),L.set(J.pointerId,y),this.sendPointerEvent(this.pointerButtonMask,A.x,A.y);return}if(z==="mouse")try{this.canvas?.setPointerCapture?.(J.pointerId)}catch{}let w=S3(J);if(!w)return;Z.set(J.pointerId,(Z.get(J.pointerId)??0)|w),this.pointerButtonMask|=w,D(J),this.sendPointerEvent(this.pointerButtonMask,A.x,A.y)},{signal:$,passive:!1}),this.canvas.addEventListener("pointerup",(J)=>{if(J.preventDefault(),r1(J?.pointerType)){let A=Q(J);if(W(J.pointerId,A,{clientX:J?.clientX,clientY:J?.clientY}))return}k(J)},{signal:$,passive:!1}),this.canvas.addEventListener("pointercancel",(J)=>{if(J.preventDefault(),r1(J?.pointerType)){let A=Q(J);if(W(J.pointerId,A,{clientX:J?.clientX,clientY:J?.clientY,cancelled:!0}))return}k(J,{resetAll:!0})},{signal:$,passive:!1}),this.canvas.addEventListener("pointerleave",(J)=>{if(L.has(J.pointerId)&&r1(J?.pointerType)){W(J.pointerId,Q(J),{clientX:J?.clientX,clientY:J?.clientY,cancelled:!0});return}if(!Z.has(J.pointerId))return;if(!H4(J))return;k(J,{resetAll:!0})},{signal:$}),this.canvas.addEventListener("pointerout",(J)=>{if(L.has(J.pointerId)&&r1(J?.pointerType)){W(J.pointerId,Q(J),{clientX:J?.clientX,clientY:J?.clientY,cancelled:!0});return}if(!Z.has(J.pointerId))return;if(!H4(J))return;k(J,{resetAll:!0})},{signal:$}),this.canvas.addEventListener("lostpointercapture",(J)=>{k(J,{resetAll:!0})},{signal:$}),G.addEventListener("pointermove",(J)=>{if(!Z.size&&!this.pointerButtonMask||!H4(J))return;if(!Z.has(J.pointerId)&&!this.pointerButtonMask)return;k(J,{resetAll:!0})},{signal:$}),G.addEventListener("pointerup",(J)=>{if(!Z.has(J.pointerId)&&!this.pointerButtonMask&&!L.has(J.pointerId))return;if(J.preventDefault?.(),r1(J?.pointerType)){let A=Q(J);if(W(J.pointerId,A,{clientX:J?.clientX,clientY:J?.clientY}))return}k(J,{resetAll:!Z.has(J.pointerId)})},{signal:$,passive:!1}),G.addEventListener("pointercancel",(J)=>{if(!Z.has(J.pointerId)&&!this.pointerButtonMask&&!L.has(J.pointerId))return;if(J.preventDefault?.(),r1(J?.pointerType)){let A=Q(J);if(W(J.pointerId,A,{clientX:J?.clientX,clientY:J?.clientY,cancelled:!0}))return}k(J,{resetAll:!0})},{signal:$,passive:!1});let I=(J)=>{if(!Z.size&&!this.pointerButtonMask&&!L.size)return;if(!_Z(J))return;let A=J?.changedTouches?.[0]||J?.touches?.[0]||null,z=q(A)||X.values().next().value||L.values().next().value?.lastPoint||{x:0,y:0};if(!Z.size&&!this.pointerButtonMask&&L.size===1){let[T]=L.entries().next().value||[];if(Number.isFinite(T)){W(T,z,{clientX:A?.clientX,clientY:A?.clientY,cancelled:J?.type==="touchcancel"});return}}H(z)},x=(J,A={})=>{if(!Z.size&&!this.pointerButtonMask&&!L.has(J?.pointerId))return;if(!H4(J))return;if(J?.preventDefault?.(),r1(J?.pointerType)){let z=Q(J);if(W(J.pointerId,z,{clientX:J?.clientX,clientY:J?.clientY,cancelled:A.resetAll===!0}))return}k(J,{resetAll:A.resetAll===!0||!Z.has(J?.pointerId)})};this.canvas.addEventListener("touchend",I,{signal:$,passive:!0,capture:!0}),this.canvas.addEventListener("touchcancel",I,{signal:$,passive:!0,capture:!0}),j.addEventListener("touchend",I,{signal:$,passive:!0,capture:!0}),j.addEventListener("touchcancel",I,{signal:$,passive:!0,capture:!0}),G.addEventListener("touchend",I,{signal:$,passive:!0,capture:!0}),G.addEventListener("touchcancel",I,{signal:$,passive:!0,capture:!0}),j.addEventListener("pointerup",(J)=>{x(J)},{signal:$,passive:!1,capture:!0}),j.addEventListener("pointercancel",(J)=>{x(J,{resetAll:!0})},{signal:$,passive:!1,capture:!0}),G.addEventListener("mouseup",()=>{if(!Z.size&&!this.pointerButtonMask&&!L.size)return;H()},{signal:$}),G.addEventListener("blur",()=>{if(!Z.size&&!this.pointerButtonMask&&!L.size)return;H()},{signal:$}),j.addEventListener("visibilitychange",()=>{if(j.visibilityState==="hidden")H()},{signal:$}),this.canvas.addEventListener("wheel",(J)=>{let A=this.getFramebufferPointFromEvent(J);if(!A)return;J.preventDefault();for(let z of GZ(J.deltaY,A.x,A.y,this.pointerButtonMask))this.socketBoundary?.send?.(z)},{signal:$,passive:!1})}sendKeyEvent(_,$){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(ZZ(_,$))}releasePressedKeys(){for(let _ of this.pressedKeysyms.values())this.sendKeyEvent(!1,_);this.pressedKeysyms.clear()}attachCanvasKeyboardHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.addEventListener("keydown",(_)=>{let $=b3(_);if($==null)return;let j=_.code||_.key,G=this.pressedKeysyms.get(j);if(XZ(G,$,_.repeat)){_.preventDefault();return}_.preventDefault(),this.pressedKeysyms.set(j,$),this.sendKeyEvent(!0,$)}),this.canvas.addEventListener("keyup",(_)=>{let $=_.code||_.key,j=this.pressedKeysyms.get($)??b3(_);if(j==null)return;_.preventDefault(),this.pressedKeysyms.delete($),this.sendKeyEvent(!1,j)}),this.canvas.addEventListener("blur",()=>{this.releasePressedKeys()})}drawRgbaRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=new ImageData(_.rgba,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}copyCanvasRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=this.canvasCtx.getImageData(_.srcX,_.srcY,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}scheduleRawFallbackTimeout(){if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.rawFallbackAttempted||this.protocolRecovering)return;this.frameTimeoutId=setTimeout(()=>{if(this.hasRenderedFrame||this.rawFallbackAttempted||this.protocolRecovering)return;if(this.protocol&&this.socketBoundary)this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.setStatus("No framebuffer update yet; retrying with RAW encoding."),this.updateDisplayInfo("No framebuffer update yet. Retrying with RAW encoding."),this.updateDisplayMeta("reconnect-encoding-fallback"),this.connectWithEncodings("0")},2200)}applyRemoteDisplayEvent(_){if(!_)return;switch(_.type){case"protocol-version":this.setStatus(`Negotiated ${_.protocol.toUpperCase()} ${_.server} → ${_.client}.`),this.updateDisplayInfo(`Negotiated ${_.server} → ${_.client}.`),this.updateDisplayMeta();return;case"security-types":this.setStatus(`Server offered security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayInfo(`Security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayMeta();return;case"security-selected":this.setStatus(`Using ${_.protocol.toUpperCase()} security type ${_.label}.`),this.updateDisplayInfo(`Security: ${_.label}.`),this.updateDisplayMeta();return;case"security-result":this.setStatus("Security negotiation complete. Waiting for server init…"),this.updateDisplayInfo("Security negotiation complete. Waiting for server init…"),this.updateDisplayMeta();return;case"display-init":this.ensureCanvasSize(_.width,_.height),this.setSessionChromeVisible(!1),this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for first framebuffer update (${_.width}×${_.height}).`),this.updateDisplayInfo(`Connected to ${_.name||this.targetLabel||this.targetId||"remote display"}. Waiting for first framebuffer update…`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"framebuffer-update":if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;let $=!1,j=(_.rects||[]).some((G)=>G.kind==="pipeline");if(_.framebuffer&&_.framebuffer.length>0&&_.width>0&&_.height>0&&j){this.ensureCanvasSize(_.width,_.height,{reveal:!0});for(let Z of _.rects||[])if(Z.kind==="resize")this.ensureCanvasSize(Z.width,Z.height);let G=this.canvas?.getContext("2d",{alpha:!1});if(G){let Z=new ImageData(new Uint8ClampedArray(_.framebuffer),_.width,_.height);G.putImageData(Z,0,0),$=!0}}else for(let G of _.rects||[]){if(G.kind==="resize"){this.ensureCanvasSize(G.width,G.height);continue}if(G.kind==="copy"){this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.copyCanvasRect(G),$=!0;continue}if(G.kind==="rgba")this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.drawRgbaRect(G),$=!0}if($||this.hasRenderedFrame)this.protocolRecovering=!1,this.setStatus(`Rendering live framebuffer — ${_.width}×${_.height}.`),this.updateDisplayInfo(`Framebuffer update applied (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta();else this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for painted framebuffer data.`),this.updateDisplayInfo(`Framebuffer update received, but no paintable rects yet (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"clipboard":this.setStatus("Remote clipboard updated."),this.updateDisplayInfo(`Clipboard text received (${_.text.length} chars).`),this.updateDisplayMeta();return;case"bell":this.setStatus("Remote display bell received."),this.updateDisplayInfo("Remote display bell received."),this.updateDisplayMeta();return}}async handleSocketMessage(_){if(_?.kind==="control"){let j=_.payload;if(j?.type==="vnc.error"){this.setStatus(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayInfo(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayMeta("proxy-error");return}if(j?.type==="vnc.connected"){let G=j?.target?.label||this.targetLabel||this.targetId;this.setStatus(`Connected to ${G}. Waiting for VNC/RFB data…`),this.updateDisplayInfo(`Connected to ${G}. Waiting for VNC handshake…`),this.updateDisplayMeta();return}if(j?.type==="pong")return;return}let $=this.protocol||(this.protocol=new B6);try{let j=_.data instanceof Blob?await _.data.arrayBuffer():_.data,G=$.receive(j);for(let Z of G.outgoing||[])this.socketBoundary?.send?.(Z);for(let Z of G.events||[])this.applyRemoteDisplayEvent(Z)}catch(j){let G=j?.message||"Unknown error";if(this.setSessionChromeVisible(!0),this.setStatus(`Display protocol error: ${G}`),this.updateDisplayInfo(`Display protocol error: ${G}`),this.updateDisplayMeta("protocol-error"),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(!this.rawFallbackAttempted&&!this.protocolRecovering&&/unexpected eof|zlib|decompress|protocol|buffer|undefined|not an object|reading '0'/i.test(G))this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.connectWithEncodings("0")}}async connectSocket(_=null){if(!this.targetId||this.disposed)return;if(this.clearReconnectTimer(),this.protocolRecovering&&_==null)this.protocolRecovering=!1;try{this.socketBoundary?.dispose?.()}catch{}if(_==null)this.rawFallbackAttempted=!1,this.protocolRecovering=!1;let $=this.pendingHandoffToken||null,j=_==null?null:String(_).trim(),G=await eG(),Z={};if(G)Z.pipeline=G,Z.decodeRawRect=(L,V,K,Q)=>G.decodeRawRectToRgba(L,V,K,Q);let X=E4(this.authPassword);if(X!==null)Z.password=X;if(j)Z.encodings=j;let Y=Boolean(this.canvas&&this.hasRenderedFrame);if(this.protocol=new B6(Z),this.hasRenderedFrame=Y,this.frameTimeoutId=null,this.canvas)this.canvas.style.display=Y?"block":"none";if(this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=Y?"none":"";this.socketBoundary=new C3({url:GH(this.targetId,$),binaryType:"arraybuffer",onOpen:()=>{if($&&this.pendingHandoffToken===$)this.pendingHandoffToken=null;this.reconnectAttempts=0,this.setStatus(`Connected to proxy for ${this.targetId}. Waiting for VNC/RFB data…`),this.updateDisplayInfo("WebSocket proxy connected. Waiting for handshake…"),this.updateDisplayMeta(),this.socketBoundary?.sendControl?.({type:"ping"})},onMetrics:(L)=>{this.applyMetrics(L)},onMessage:(L)=>{this.handleSocketMessage(L)},onClose:()=>{if(this.setSessionChromeVisible(!0),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.disposed)return;if(PZ({handoffToken:$,bytesIn:this.bytesIn,hasRenderedFrame:this.hasRenderedFrame,reconnectAttempts:this.reconnectAttempts})){this.pendingHandoffToken=null,this.setStatus("Transferred VNC session was not ready yet. Retrying…"),this.updateDisplayInfo("Transferred VNC session was not ready yet. Retrying without handoff…"),this.updateDisplayMeta("handoff-retrying"),this.scheduleReconnect(150);return}if(this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("Remote display connection lost. Reconnecting…"),this.updateDisplayInfo("Remote display transport closed. Attempting to reconnect…"),this.updateDisplayMeta("reconnecting"),this.scheduleReconnect();return}this.setStatus(this.bytesIn>0?`Proxy closed after receiving ${this.bytesIn} byte(s).`:"Proxy closed."),this.updateDisplayInfo(this.bytesIn>0?"Remote display transport closed after receiving data.":"Remote display transport closed."),this.updateDisplayMeta("closed")},onError:()=>{if(this.setSessionChromeVisible(!0),PZ({handoffToken:$,bytesIn:this.bytesIn,hasRenderedFrame:this.hasRenderedFrame,reconnectAttempts:this.reconnectAttempts})){this.pendingHandoffToken=null,this.setStatus("Transferred VNC session was not ready yet. Retrying…"),this.updateDisplayInfo("Transferred VNC session was not ready yet. Retrying without handoff…"),this.updateDisplayMeta("handoff-retrying"),this.scheduleReconnect(150);return}if(this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("WebSocket proxy connection failed. Reconnecting…"),this.updateDisplayInfo("WebSocket proxy connection failed. Attempting to reconnect…"),this.updateDisplayMeta("socket-reconnecting"),this.scheduleReconnect();return}this.setStatus("WebSocket proxy connection failed."),this.updateDisplayInfo("WebSocket proxy connection failed."),this.updateDisplayMeta("socket-error")}}),this.socketBoundary.connect()}connectWithEncodings(_){return this.connectSocket(_)}async load(){this.setStatus("");try{let _=await $H(this.targetId);if(!_?.enabled){this.renderTargets(_),this.setStatus("");return}if(!this.targetId){this.renderTargets(_),this.setStatus("");return}this.renderTargetSession(_),await this.connectSocket()}catch(_){this.resetLiveSession(),this.bodyEl.innerHTML=`
                <div style="max-width:620px;text-align:center;padding:28px;border:1px dashed var(--border-color);border-radius:14px;background:var(--bg-secondary);">
                    <div style="font-size:32px;margin-bottom:10px;">⚠️</div>
                    <div style="font-weight:600;margin-bottom:6px;">Failed to load VNC session</div>
                    <div style="color:var(--text-secondary);font-size:13px;line-height:1.5;">${d1(_?.message||"Unknown error")}</div>
                </div>
            `,this.setStatus(`Session load failed: ${_?.message||"Unknown error"}`)}}beforeDetachFromHost(){this.releasePressedKeys(),this.setStatus("Moving VNC session…"),this.updateDisplayInfo("Moving VNC session to a new window…"),this.updateDisplayMeta("moving")}afterAttachToHost(){this.attachDisplayResizeObserver(),this.updateCanvasScale(),requestAnimationFrame(()=>this.focus())}moveHost(_){if(this.disposed||!this.root)return!1;if(this.releasePressedKeys(),this.container=_,!LH(this.root,_))return!1;return this.afterAttachToHost(),!0}async preparePopoutTransfer(){return eU(this.targetId,this.authPassword)}getContent(){return}isDirty(){return!1}focus(){this.canvas?.focus?.(),this.root?.focus?.()}resize(){this.updateCanvasScale()}dispose(){if(this.disposed)return;this.disposed=!0,this.resetLiveSession(),this.root?.remove?.()}}var s3={id:"vnc-viewer",label:"VNC",icon:"display",capabilities:["preview"],placement:"tabs",canHandle(_){let $=String(_?.path||"");return $===i1||$.startsWith(`${i1}/`)?9000:!1},mount(_,$){return new uZ(_,$)}};import{classHighlighter as KH,highlightTree as VH,StreamLanguage as N2,cssLanguage as qH,cppLanguage as QH,goLanguage as NH,htmlLanguage as BH,javascriptLanguage as FH,jsxLanguage as UH,tsxLanguage as HH,typescriptLanguage as EH,jsonLanguage as DH,markdownLanguage as zH,pythonLanguage as WH,rustLanguage as OH,StandardSQL as JH,xmlLanguage as AH,yamlLanguage as kH,dockerFile as yH,powerShell as MH,ruby as wH,shell as TH,swift as xH,toml as IH}from"#editor-vendor/codemirror";function D4(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var CH={js:"JavaScript",javascript:"JavaScript",ts:"TypeScript",typescript:"TypeScript",jsx:"JSX",tsx:"TSX",py:"Python",python:"Python",sh:"Shell",shell:"Shell",bash:"Bash",zsh:"Zsh",ps1:"PowerShell",powershell:"PowerShell",md:"Markdown",markdown:"Markdown",yml:"YAML",yaml:"YAML",json:"JSON",html:"HTML",css:"CSS",sql:"SQL",go:"Go",c:"C",cc:"C++",cpp:"C++","c++":"C++",cxx:"C++",h:"C/C++",hh:"C++",hpp:"C++",hxx:"C++",rust:"Rust",rs:"Rust",ruby:"Ruby",swift:"Swift",toml:"TOML",dockerfile:"Dockerfile"},PH=N2.define(TH).parser,fH=N2.define(MH).parser,RH=N2.define(yH).parser,SH=N2.define(wH).parser,uH=N2.define(xH).parser,gH=N2.define(IH).parser;function gZ(_){let $=String(_||"").trim().toLowerCase();if(!$)return"text";return CH[$]||String(_||"").trim()}function bH(_){switch(String(_||"").trim().toLowerCase()){case"js":case"javascript":return FH.parser;case"ts":case"typescript":return EH.parser;case"jsx":return UH.parser;case"tsx":return HH.parser;case"py":case"python":return WH.parser;case"json":return DH.parser;case"css":return qH.parser;case"html":return BH.parser;case"xml":return AH.parser;case"yaml":case"yml":return kH.parser;case"md":case"markdown":return zH.parser;case"sql":return JH.language.parser;case"go":return NH.parser;case"c":case"cc":case"cpp":case"cxx":case"c++":case"h":case"hh":case"hpp":case"hxx":return QH.parser;case"sh":case"bash":case"shell":case"zsh":return PH;case"ps1":case"powershell":return fH;case"dockerfile":return RH;case"rb":case"ruby":return SH;case"rs":case"rust":return OH.parser;case"swift":return uH;case"toml":return gH;default:return null}}function F6(_,$){let j=bH($);if(!j)return D4(_);let G=[];try{let Y=j.parse(_);VH(Y,KH,(L,V,K)=>{if(!K||L>=V)return;G.push({from:L,to:V,cls:K})})}catch{return D4(_)}if(!G.length)return D4(_);G.sort((Y,L)=>Y.from-L.from||Y.to-L.to);let Z=0,X="";for(let Y of G){if(Y.from>Z)X+=D4(_.slice(Z,Y.from));X+=`<span class="${D4(Y.cls)}">${D4(_.slice(Y.from,Y.to))}</span>`,Z=Math.max(Z,Y.to)}if(Z<_.length)X+=D4(_.slice(Z));return X}_5();var W6=/#(\w+)/g,aH=new Set(["strong","em","b","i","u","s","del","ins","sub","sup","mark","small","br","p","ul","ol","li","blockquote","ruby","rt","rp","span","input"]),tH=new Set(["a","abbr","blockquote","br","code","del","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","input","ins","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","small","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),eH=new Set(["class","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),dZ={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"]),input:new Set(["type","checked","disabled"])},_E=new Set(["http:","https:","mailto:",""]);function $E(_,$){let j=String(_||"").toLowerCase(),G=String($||"").toLowerCase();if(!G||G.startsWith("on"))return!1;if(G.startsWith("data-")||G.startsWith("aria-"))return!0;return(dZ[j]||new Set).has(G)||eH.has(G)}function Z7(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function J4(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let G=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!_E.has(G.protocol))return null;return G.href}catch{return null}}function iZ(_,$={}){if(!_)return"";if($?.sanitize===!1)return _;let j=new DOMParser().parseFromString(_,"text/html"),G=[],Z=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),X;while(X=Z.nextNode())G.push(X);for(let Y of G){let L=Y.tagName.toLowerCase();if(!tH.has(L)){let K=Y.parentNode;if(!K)continue;while(Y.firstChild)K.insertBefore(Y.firstChild,Y);K.removeChild(Y);continue}let V=dZ[L]||new Set;for(let K of Array.from(Y.attributes)){let Q=K.name.toLowerCase(),q=K.value;if(Q.startsWith("on")){Y.removeAttribute(K.name);continue}if($E(L,Q)){if(Q==="href"){let B=J4(q);if(!B)Y.removeAttribute(K.name);else if(Y.setAttribute(K.name,B),L==="a"){if(!Y.getAttribute("rel"))Y.setAttribute("rel","noopener noreferrer");if(/^https?:\/\//i.test(B))Y.setAttribute("target","_blank")}}else if(Q==="src"){let B=L==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(q):q,N=J4(B,{allowDataImage:L==="img"});if(!N)Y.removeAttribute(K.name);else Y.setAttribute(K.name,N)}continue}Y.removeAttribute(K.name)}}return j.body.innerHTML}function oZ(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function $5(_,$=2){if(!_)return _;let j=_;for(let G=0;G<$;G+=1){let Z=oZ(j);if(Z===j)break;j=Z}return j}function jE(_){if(!_)return{text:"",frontmatter:null};let $=_.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!$.startsWith(`---
`))return{text:$,frontmatter:null};let j=$.split(`
`),G=-1;for(let Y=1;Y<j.length;Y+=1)if(/^(---|\.\.\.)\s*$/.test(j[Y])){G=Y;break}if(G<=0)return{text:$,frontmatter:null};let Z=j.slice(1,G).join(`
`);return{text:j.slice(G+1).join(`
`).replace(/^\n+/,""),frontmatter:Z}}function GE(_){let{text:$,frontmatter:j}=jE(_);if(j===null)return $;return["<!--frontmatter-block-start-->","```yaml",j,"```","<!--frontmatter-block-end-->",$].filter(Boolean).join(`

`)}function ZE(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=[],Z=[],X=!1,Y=[];for(let L of j){if(!X&&L.trim().match(/^```mermaid\s*$/i)){X=!0,Y=[];continue}if(X&&L.trim().match(/^```\s*$/)){let V=G.length;G.push(Y.join(`
`)),Z.push(`@@MERMAID_BLOCK_${V}@@`),X=!1,Y=[];continue}if(X)Y.push(L);else Z.push(L)}if(X)Z.push("```mermaid"),Z.push(...Y);return{text:Z.join(`
`),blocks:G}}function XE(_){if(!_)return _;return $5(_,5)}function YE(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let G of $)j+=String.fromCharCode(G);return btoa(j)}function LE(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let G=0;G<$.length;G+=1)j[G]=$.charCodeAt(G);return new TextDecoder().decode(j)}function KE(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,G)=>{let Z=Number(G),X=$[Z]??"",Y=XE(X);return`<div class="mermaid-container" data-mermaid="${YE(Y)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function sZ(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}function VE(_){if(!_)return _;return _.replace(/<pre><code(?:\s+class="language-([A-Za-z0-9_+-]+)")?>([\s\S]*?)<\/code><\/pre>/g,(j,G,Z)=>{let X=String(G||"").trim().toLowerCase(),Y=$5(Z,2),L=X||"plaintext",V=F6(Y,X);return`<pre><code class="hljs language-${Z7(L)}">${V}</code></pre>`}).replace(/<!--frontmatter-block-start-->\s*<pre>/g,'<pre class="frontmatter-block">').replace(/<\/pre>\s*<!--frontmatter-block-end-->/g,"</pre>")}var qE={span:new Set(["title","class","lang","dir"]),input:new Set(["type","checked","disabled"])};function QE(_,$){let j=qE[_];if(!j||!$)return"";let G=[],Z=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,X;while(X=Z.exec($)){let Y=(X[1]||"").toLowerCase();if(!Y||Y.startsWith("on")||!j.has(Y))continue;let L=X[2]??X[3]??X[4]??"";G.push(` ${Y}="${Z7(L)}"`)}return G.join("")}function aZ(_){if(!_)return _;return _.replace(/&lt;((?:[^"'<>]|"[^"]*"|'[^']*')*?)(?:&gt;|>)/g,($,j)=>{let G=j.trim(),Z=G.startsWith("/"),X=Z?G.slice(1).trim():G,L=X.endsWith("/")?X.slice(0,-1).trim():X,[V=""]=L.split(/\s+/,1),K=V.toLowerCase();if(!K||!aH.has(K))return $;if(K==="br")return Z?"":"<br>";if(Z)return`</${K}>`;let Q=L.slice(V.length).trim(),q=QE(K,Q);return`<${K}${q}>`})}function tZ(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,G)=>`<pre><code>${$(G)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,G)=>`<code>${$(G)}</code>`)}function eZ(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),G=(X)=>X.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),Z;while(Z=j.nextNode()){if(!Z.nodeValue)continue;let X=G(Z.nodeValue);if(X!==Z.nodeValue)Z.nodeValue=X}return $.body.innerHTML}function NE(_){if(!window.katex)return _;let $=(Y)=>oZ(Y).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(Y)=>{let L=[],V=Y.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(K)=>{let Q=L.length;return L.push(K),`@@CODE_BLOCK_${Q}@@`});return V=V.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(K)=>{let Q=L.length;return L.push(K),`@@CODE_INLINE_${Q}@@`}),{html:V,blocks:L}},G=(Y,L)=>{if(!L.length)return Y;return Y.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(V,K)=>{let Q=Number(K);return L[Q]??""})},Z=j(_),X=Z.html;return X=X.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(Y,L,V)=>{try{let K=katex.renderToString($(V.trim()),{displayMode:!0,throwOnError:!1});return`${L}${K}`}catch(K){let Q=K instanceof Error?K.message:String(K);return`<span class="math-error" title="${Z7(Q)}">${Y}</span>`}}),G(X,Z.blocks)}function BE(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),G=[],Z;while(Z=j.nextNode())G.push(Z);for(let X of G){let Y=X.nodeValue;if(!Y)continue;if(W6.lastIndex=0,!W6.test(Y))continue;W6.lastIndex=0;let L=X.parentElement;if(L&&(L.closest("a")||L.closest("code")||L.closest("pre")))continue;let V=Y.split(W6);if(V.length<=1)continue;let K=$.createDocumentFragment();V.forEach((Q,q)=>{if(q%2===1){let B=$.createElement("a");B.setAttribute("href","#"),B.className="hashtag",B.setAttribute("data-hashtag",Q),B.textContent=`#${Q}`,K.appendChild(B)}else K.appendChild($.createTextNode(Q))}),X.parentNode?.replaceChild(K,X)}return $.body.innerHTML}function FE(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=[],Z=!1;for(let X of j){if(!Z&&X.trim().match(/^```(?:math|katex|latex)\s*$/i)){Z=!0,G.push("$$");continue}if(Z&&X.trim().match(/^```\s*$/)){Z=!1,G.push("$$");continue}G.push(X)}return G.join(`
`)}function UE(_){let $=GE(_||""),j=FE($),{text:G,blocks:Z}=ZE(j),X=$5(G,2),L=sZ(X).replace(/</g,"&lt;");return{safeHtml:aZ(L),mermaidBlocks:Z}}function Z1(_,$,j={}){if(!_)return"";let{safeHtml:G,mermaidBlocks:Z}=UE(_),X=window.marked?marked.parse(G,{headerIds:!1,mangle:!1}):G.replace(/\n/g,"<br>");return X=tZ(X),X=eZ(X),X=VE(X),X=NE(X),X=BE(X),X=KE(X,Z),X=iZ(X,j),X}function j5(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=$5($,2),Z=sZ(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),X=aZ(Z),Y=window.marked?marked.parse(X):X.replace(/\n/g,"<br>");return Y=tZ(Y),Y=eZ(Y),Y=iZ(Y),Y}function HE(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,G,Z,X)=>{let Y=Z.trim().split(/\s+/).map((V)=>{let[K,Q]=V.split(",").map(Number);return{x:K,y:Q}});if(Y.length<3)return`<polyline${G}points="${Z}"${X}/>`;let L=[`M ${Y[0].x},${Y[0].y}`];for(let V=1;V<Y.length-1;V++){let K=Y[V-1],Q=Y[V],q=Y[V+1],B=Q.x-K.x,N=Q.y-K.y,U=q.x-Q.x,E=q.y-Q.y,D=Math.sqrt(B*B+N*N),H=Math.sqrt(U*U+E*E),k=Math.min($,D/2,H/2);if(k<0.5){L.push(`L ${Q.x},${Q.y}`);continue}let O=Q.x-B/D*k,W=Q.y-N/D*k,I=Q.x+U/H*k,x=Q.y+E/H*k,A=B*E-N*U>0?1:0;L.push(`L ${O},${W}`),L.push(`A ${k},${k} 0 0 ${A} ${I},${x}`)}return L.push(`L ${Y[Y.length-1].x},${Y[Y.length-1].y}`),`<path${G}d="${L.join(" ")}"${X}/>`})}async function E$(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,Z=nZ()==="dark"?j["tokyo-night"]:j["github-light"],X=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let Y of X)try{let L=Y.dataset.mermaid,V=LE(L||""),K=$5(V,2),Q=await $(K,{...Z,transparent:!0});Q=HE(Q),Y.innerHTML=Q,Y.removeAttribute("data-mermaid")}catch(L){console.error("Mermaid render error:",L);let V=document.createElement("pre");V.className="mermaid-error",V.textContent=`Diagram error: ${L.message}`,Y.innerHTML="",Y.appendChild(V),Y.removeAttribute("data-mermaid")}}I_();function QX(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let G=new Date().getTime()-$.getTime(),Z=G/1000,X=86400000;if(G<X){if(Z<60)return"just now";if(Z<3600)return`${Math.floor(Z/60)}m`;return`${Math.floor(Z/3600)}h`}if(G<5*X){let V=$.toLocaleDateString(void 0,{weekday:"short"}),K=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${V} ${K}`}let Y=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),L=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${Y} ${L}`}function B5(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function a_(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function T4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}function r$(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function ZD(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let G=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),Z=G?.[1]||j,X=G?.[2]||"",Y=G?.[3]||"",L=String($||"").split("/").slice(0,-1).join("/"),K=Z.startsWith("/")?Z:`${L?`${L}/`:""}${Z}`,Q=[];for(let B of K.split("/")){if(!B||B===".")continue;if(B===".."){if(Q.length>0)Q.pop();continue}Q.push(B)}let q=Q.join("/");return`${Q5(q)}${X}${Y}`}function F5(_){return _?.preview||null}function XD(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),G=j>=0?$.slice(j+1):$,Z=G.lastIndexOf(".");if(Z<=0||Z===G.length-1)return"none";return G.slice(Z+1)}function YD(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function LD(_,$){let j=$?.path||_?.path||"",G=[];if($?.content_type)G.push(`<span><strong>type:</strong> ${r$($.content_type)}</span>`);if(typeof $?.size==="number")G.push(`<span><strong>size:</strong> ${r$(a_($.size))}</span>`);if($?.mtime)G.push(`<span><strong>modified:</strong> ${r$(T4($.mtime))}</span>`);if(G.push(`<span><strong>kind:</strong> ${r$(YD($))}</span>`),G.push(`<span><strong>extension:</strong> ${r$(XD(j))}</span>`),j)G.push(`<span><strong>path:</strong> ${r$(j)}</span>`);if($?.truncated)G.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${G.join("")}</div>`}function KD(_){let $=F5(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=LD(_,$);if($.kind==="image"){let G=$.url||($.path?Q5($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${r$(G)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let G=Z1($.text||"",null,{rewriteImageSrc:(Z)=>ZD(Z,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${G}</div>`}return`${j}<pre class="workspace-preview-text"><code>${r$($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class R7{container;context;disposed=!1;host;constructor(_,$){this.container=_,this.context=$,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=KD(this.context)}getContent(){let _=F5(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=F5(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var S7={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=F5(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new R7(_,$)}},u7={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return F5(_)||_?.path?1:!1},mount(_,$){return new R7(_,$)}};var VD=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),qD={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},QD={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function BX(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function NX(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class FX{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"document",Z=BX(j),X=QD[Z]||"\uD83D\uDCC4",Y=qD[Z]||"Office Document",L=document.createElement("div");L.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",L.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${X}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${NX(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${NX(Y)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(L);let V=L.querySelector("#ov-open-tab");if(V)V.addEventListener("click",()=>{let K=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class UX{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"document",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,X=`/office-viewer/?url=${encodeURIComponent(Z)}&name=${encodeURIComponent(G)}`;this.iframe=document.createElement("iframe"),this.iframe.src=X,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var g7={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=BX(_?.path);if(!$||!VD.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new FX(_,$);return new UX(_,$)}};var ND=/\.(csv|tsv)$/i;function HX(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class EX{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"table.csv",Z=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",X=document.createElement("div");X.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",X.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${HX(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${HX(Z)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(X);let Y=X.querySelector("#csv-open-tab");if(Y)Y.addEventListener("click",()=>{let L=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(L)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class DX{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var b7={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!ND.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new EX(_,$);return new DX(_,$)}};var BD=/\.pdf$/i;function FD(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class zX{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"document.pdf",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${FD(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let X=Z.querySelector("#pdf-open-tab");if(X)X.addEventListener("click",()=>{let Y=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Y)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class WX{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var v7={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!BD.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new zX(_,$);return new WX(_,$)}};var UD=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function m7(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class OX{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"image",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,X=document.createElement("div");X.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",X.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${m7(Z)}" alt="${m7(G)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${m7(G)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(X);let Y=X.querySelector("#img-open-tab");if(Y)Y.addEventListener("click",()=>{let L=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(L)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class JX{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var c7={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!UD.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new OX(_,$);return new JX(_,$)}};var HD=/\.(html|htm)$/i;function AX(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class kX{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"index.html",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:24px;">
                <div style="text-align:center;">
                    <div style="font-size:48px;margin-bottom:12px;">\uD83C\uDF10</div>
                    <div style="font-size:14px;color:var(--text-primary,#e2e8f0);font-weight:500;margin-bottom:4px;">${AX(G)}</div>
                    <div style="font-size:12px;color:var(--text-secondary,#94a3b8);">HTML document</div>
                </div>
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${AX(j)}</div>
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
        `,_.appendChild(Z);let X=Z.querySelector("#html-open-tab");if(X)X.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("html-viewer:open-tab",{bubbles:!0,detail:{path:j}}))});let Y=Z.querySelector("#html-edit-btn");if(Y)Y.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("html-viewer:edit-source",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class yX{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/html-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#fff;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var l7={id:"html-viewer",label:"HTML Preview",icon:"code",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!HD.test($))return!1;return 30},mount(_,$){if($?.mode==="view")return new kX(_,$);return new yX(_,$)}};var ED=/\.(mp4|m4v|mov|webm|ogv)$/i;function DD(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class MX{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"video.mp4",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${DD(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let X=Z.querySelector("#video-open-tab");if(X)X.addEventListener("click",()=>{let Y=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Y)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class wX{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var h7={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!ED.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new MX(_,$);return new wX(_,$)}};I_();function zD(_){let $=_.includes(".")?_.slice(_.lastIndexOf(".")):"",j=_.includes(".")?_.slice(0,_.lastIndexOf(".")):_,G=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19);return`${j}.${G}${$}`}function TX(_){let{path:$,getCurrentMtime:j,anchorParent:G,anchorBefore:Z,onReload:X,onSaveCopy:Y,onOverwrite:L,pollMs:V=3000,ownerDocument:K=document}=_,Q=null,q=null,B=!1,N=!1,U=!1;async function E(){if(N||U||B)return;let W=j();if(!W)return;try{let I=await x7($);if(N||U||!I?.mtime)return;if(I.mtime!==W)B=!0,H(),k()}catch(I){if(typeof console<"u")console.debug("[file-conflict-monitor] mtime poll skipped:",I)}}function D(){if(H(),N)return;Q=setInterval(E,V)}function H(){if(Q)clearInterval(Q),Q=null}function k(){if(q||N)return;let W=K.createElement("div");W.className="editor-conflict-bar",W.innerHTML=`
      <span class="editor-conflict-text">File changed on disk</span>
      <div class="editor-conflict-actions">
        <button class="editor-conflict-btn" data-action="reload" title="Discard and reload from disk">Reload</button>
        <button class="editor-conflict-btn" data-action="save-copy" title="Save current content with a new name">Save copy</button>
        <button class="editor-conflict-btn" data-action="overwrite" title="Overwrite the disk version">Overwrite</button>
        <button class="editor-conflict-btn editor-conflict-dismiss" data-action="dismiss" title="Dismiss">×</button>
      </div>
    `,W.addEventListener("click",(I)=>{let x=I.target.closest("[data-action]");if(!x)return;let J=x.getAttribute("data-action");if(J==="reload")O(),X();else if(J==="save-copy"){let A=zD($);Y(A)}else if(J==="overwrite")O(),L();else if(J==="dismiss")O()}),q=W,G.insertBefore(W,Z)}function O(){if(q)q.remove(),q=null;B=!1,D()}return{start(){D()},stop(){H()},onSaved(W){B=!1,U=!1,D()},dispose(){if(N=!0,H(),q)q.remove(),q=null}}}var WD=/\.mindmap\.ya?ml$/i,C6=String(Date.now());function OD(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function xX(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function r7(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let G=document.querySelector(`script[src="${$}"]`);if(G)G.remove();return new Promise((Z,X)=>{let Y=document.createElement("script");Y.src=_,Y.dataset.src=$,Y.onload=()=>Z(),Y.onerror=()=>X(Error(`Failed to load ${_}`)),document.head.appendChild(Y)})}function JD(_){let $=_.split("?")[0],j=document.querySelector(`link[data-href="${$}"]`);if(j&&j.href.endsWith(_))return;document.querySelectorAll(`link[data-href="${$}"], link[href="${$}"]`).forEach((Z)=>Z.remove());let G=document.createElement("link");G.rel="stylesheet",G.href=_,G.dataset.href=$,document.head.appendChild(G)}function AD(_){let $=document.createElementNS("http://www.w3.org/2000/svg","svg");$.id="mindmap-svg",$.setAttribute("width","100%"),$.setAttribute("height","100%"),$.style.cssText="display:block;position:absolute;inset:0;",_.appendChild($);let j=document.createElement("div");j.id="toolbar",j.className="mindmap-toolbar",j.innerHTML=`
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
    `,_.appendChild(G)}class IX{container;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"mindmap",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83E\uDDE0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${OD(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Mindmap Editor</div>
                <button id="mm-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">Edit in Tab</button>
            </div>`,_.appendChild(Z),Z.querySelector("#mm-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("mindmap:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class CX{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;mindmapEl=null;pendingContent=null;lastContent="";currentMtime=null;conflictMonitor=null;themeListener=()=>{window.__mindmapEditor?.setTheme?.(xX())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{let j=await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json();if(j?.mtime)this.currentMtime=j.mtime;return j?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;if(this.lastContent=$,JD("/static/css/mindmap.css?v="+C6),await Promise.all([r7("/static/js/vendor/d3-mindmap.min.js?v="+C6),r7("/static/js/vendor/js-yaml.min.js?v="+C6)]),this.disposed)return;this.mindmapEl=document.createElement("div"),this.mindmapEl.id="mindmap-container",this.mindmapEl.tabIndex=-1,this.mindmapEl.style.cssText="width:100%;height:100%;overflow:hidden;position:relative;outline:none;",this.container.appendChild(this.mindmapEl),AD(this.mindmapEl);let j=xX(),G=this.filePath.replace(/\/[^/]+$/,"")||"/";try{if(await r7("/static/js/vendor/mindmap-editor.js?v="+C6),this.disposed)return;let Z=window.__mindmapEditor;if(!Z)throw Error("__mindmapEditor not found");if(Z.mount({content:$,isDark:j,onEdit:(X)=>{this.lastContent=X,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(X)},resolveImagePath:(X)=>{if(X.startsWith("data:")||X.startsWith("http"))return X;return`/workspace/raw?path=${encodeURIComponent(G+"/"+X)}`}}),this.pendingContent!==null)Z.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener),this.initConflictMonitor()}catch(Z){if(console.error("[mindmap] Failed to load mindmap renderer:",Z),this.mindmapEl)this.mindmapEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load mindmap editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);let j=await $.json().catch(()=>({}));this.currentMtime=j?.mtime||this.currentMtime,this.conflictMonitor?.onSaved(this.currentMtime),this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[mindmap] Save failed:",$)}}initConflictMonitor(){if(this.conflictMonitor?.dispose(),!this.filePath)return;this.conflictMonitor=TX({path:this.filePath,getCurrentMtime:()=>this.currentMtime,anchorParent:this.container,anchorBefore:this.mindmapEl||this.container.firstElementChild,onReload:async()=>{try{let $=await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json();if(this.disposed)return;this.currentMtime=$?.mtime||null;let j=$?.text||"";this.lastContent=j;let G=window.__mindmapEditor;if(G?.update)G.update(j);this.dirty=!1,this.dirtyCallback?.(!1),this.conflictMonitor?.onSaved(this.currentMtime)}catch(_){console.error("[mindmap] Reload failed:",_)}},onSaveCopy:async(_)=>{try{await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,content:this.lastContent})})}catch($){console.error("[mindmap] Save copy failed:",$)}},onOverwrite:()=>this.saveToWorkspace(this.lastContent)}),this.conflictMonitor.start()}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__mindmapEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.mindmapEl?.focus()}resize(){window.dispatchEvent(new Event("resize"))}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,this.conflictMonitor?.dispose(),window.removeEventListener("piclaw-theme-change",this.themeListener),window.__mindmapEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var p7={id:"mindmap-editor",label:"Mindmap Editor",icon:"mindmap",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!WD.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new IX(_,$);return new CX(_,$)}};class PX{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch(G){console.warn("[tab-store] Change listener failed:",G)}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((G)=>G!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let G=this.tabs.get(_);if(!G)return;if(this.tabs.delete(_),G.id=$,G.path=$,G.label=j||$.split("/").pop()||$,this.tabs.set($,G),this.mruOrder=this.mruOrder.map((Z)=>Z===_?$:Z),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((G)=>G.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((G)=>G.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var __=new PX;var D2=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};M0();function fX(){let[_,$]=C(null),[j,G]=C({text:"",totalLines:0}),[Z,X]=C(""),[Y,L]=C({text:"",totalLines:0}),[V,K]=C(null),[Q,q]=C(null),[B,N]=C(null),U=g(null),E=g(0),D=g(!1),H=g(""),k=g(""),O=g(!1),W=g(0),I=g(null),x=g(null),J=g(null),A=g(null),z=g(!1),T=g(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:G,agentPlan:Z,setAgentPlan:X,agentThought:Y,setAgentThought:L,pendingRequest:V,setPendingRequest:K,currentTurnId:Q,setCurrentTurnId:q,steerQueuedTurnId:B,setSteerQueuedTurnId:N,lastAgentEventRef:U,lastSilenceNoticeRef:E,isAgentRunningRef:D,draftBufferRef:H,thoughtBufferRef:k,previewResyncPendingRef:O,previewResyncGenerationRef:W,pendingRequestRef:I,stalledPostIdRef:x,currentTurnIdRef:J,steerQueuedTurnIdRef:A,thoughtExpandedRef:z,draftExpandedRef:T}}M0();var kD=0.1,bX=4,vX=4,RX=160,SX=1600,uX=200,gX=1600;function D$(){if(typeof window>"u")return 0;return Number(window.innerWidth)||0}function mX(_=D$()){return _>0?Math.floor(_*kD):0}function U5(_,$=D$(),j=0){let G=mX($)+bX+(j>0?vX+Math.max(0,j):0),Z=$>0?Math.floor($-G):SX;return Math.min(Math.max(Number(_)||0,RX),Math.max(RX,Math.min(SX,Z)))}function H5(_,$=D$(),j=0){let G=mX($)+vX+(j>0?bX+Math.max(0,j):0),Z=$>0?Math.floor($-G):gX;return Math.min(Math.max(Number(_)||0,uX),Math.max(uX,Math.min(gX,Z)))}function cX({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:G}){let Z=g((Q)=>{Q.preventDefault();let q=_.current;if(!q)return;let B=Q.clientX,N=$.current||280,U=Q.currentTarget;U.classList.add("dragging"),q.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let E=B,D=(k)=>{E=k.clientX;let O=U5(N+(k.clientX-B),D$(),j?.current||0);q.style.setProperty("--sidebar-width",`${O}px`),$.current=O},H=()=>{let k=U5(N+(E-B),D$(),j?.current||0);$.current=k,U.classList.remove("dragging"),q.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",V_("sidebarWidth",String(Math.round(k))),document.removeEventListener("mousemove",D),document.removeEventListener("mouseup",H)};document.addEventListener("mousemove",D),document.addEventListener("mouseup",H)}).current,X=g((Q)=>{Q.preventDefault();let q=_.current;if(!q)return;let B=Q.touches[0];if(!B)return;let N=B.clientX,U=$.current||280,E=Q.currentTarget;E.classList.add("dragging"),q.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let D=(k)=>{let O=k.touches[0];if(!O)return;k.preventDefault();let W=U5(U+(O.clientX-N),D$(),j?.current||0);q.style.setProperty("--sidebar-width",`${W}px`),$.current=W},H=()=>{E.classList.remove("dragging"),q.classList.remove("sidebar-resizing"),document.body.style.userSelect="",V_("sidebarWidth",String(Math.round($.current||U))),document.removeEventListener("touchmove",D),document.removeEventListener("touchend",H),document.removeEventListener("touchcancel",H)};document.addEventListener("touchmove",D,{passive:!1}),document.addEventListener("touchend",H),document.addEventListener("touchcancel",H)}).current,Y=g((Q)=>{Q.preventDefault();let q=_.current;if(!q)return;let B=Q.clientX,N=j.current||$.current||280,U=Q.currentTarget;U.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let E=B,D=(k)=>{E=k.clientX;let O=H5(N+(k.clientX-B),D$(),$?.current||0);q.style.setProperty("--editor-width",`${O}px`),j.current=O},H=()=>{let k=H5(N+(E-B),D$(),$?.current||0);j.current=k,U.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",V_("editorWidth",String(Math.round(k))),document.removeEventListener("mousemove",D),document.removeEventListener("mouseup",H)};document.addEventListener("mousemove",D),document.addEventListener("mouseup",H)}).current,L=g((Q)=>{Q.preventDefault();let q=_.current;if(!q)return;let B=Q.touches[0];if(!B)return;let N=B.clientX,U=j.current||$.current||280,E=Q.currentTarget;E.classList.add("dragging"),document.body.style.userSelect="none";let D=(k)=>{let O=k.touches[0];if(!O)return;k.preventDefault();let W=H5(U+(O.clientX-N),D$(),$?.current||0);q.style.setProperty("--editor-width",`${W}px`),j.current=W},H=()=>{E.classList.remove("dragging"),document.body.style.userSelect="",V_("editorWidth",String(Math.round(j.current||U))),document.removeEventListener("touchmove",D),document.removeEventListener("touchend",H),document.removeEventListener("touchcancel",H)};document.addEventListener("touchmove",D,{passive:!1}),document.addEventListener("touchend",H),document.addEventListener("touchcancel",H)}).current,V=g((Q)=>{Q.preventDefault();let q=_.current;if(!q)return;let B=Q.clientY,N=G?.current||200,U=Q.currentTarget;U.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let E=B,D=(k)=>{E=k.clientY;let O=Math.min(Math.max(N-(k.clientY-B),100),window.innerHeight*0.5);if(q.style.setProperty("--dock-height",`${O}px`),G)G.current=O;window.dispatchEvent(new CustomEvent("dock-resize"))},H=()=>{let k=Math.min(Math.max(N-(E-B),100),window.innerHeight*0.5);if(G)G.current=k;U.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",V_("dockHeight",String(Math.round(k))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",D),document.removeEventListener("mouseup",H)};document.addEventListener("mousemove",D),document.addEventListener("mouseup",H)}).current,K=g((Q)=>{Q.preventDefault();let q=_.current;if(!q)return;let B=Q.touches[0];if(!B)return;let N=B.clientY,U=G?.current||200,E=Q.currentTarget;E.classList.add("dragging"),document.body.style.userSelect="none";let D=(k)=>{let O=k.touches[0];if(!O)return;k.preventDefault();let W=Math.min(Math.max(U-(O.clientY-N),100),window.innerHeight*0.5);if(q.style.setProperty("--dock-height",`${W}px`),G)G.current=W;window.dispatchEvent(new CustomEvent("dock-resize"))},H=()=>{E.classList.remove("dragging"),document.body.style.userSelect="",V_("dockHeight",String(Math.round(G?.current||U))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",D),document.removeEventListener("touchend",H),document.removeEventListener("touchcancel",H)};document.addEventListener("touchmove",D,{passive:!1}),document.addEventListener("touchend",H),document.addEventListener("touchcancel",H)}).current;return{handleSplitterMouseDown:Z,handleSplitterTouchStart:X,handleEditorSplitterMouseDown:Y,handleEditorSplitterTouchStart:L,handleDockSplitterMouseDown:V,handleDockSplitterTouchStart:K}}M0();function n7(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},G=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,Z=j[_]??window[G],X=Number(Z);return Number.isFinite(X)?X:$}catch{return $}}var lX=n7("warning",30000),hX=n7("finalize",120000),rX=n7("refresh",30000),pX=30000;function nX(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function E5(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function dX(_=30000){let[,$]=C(0);u(()=>{let j=setInterval(()=>$((G)=>G+1),_);return()=>clearInterval(j)},[_])}function iX(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((G,Z)=>G+Math.max(1,Math.ceil(Z.length/$)),0)}function P6(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function yD(_){if(!_||typeof _!=="object")return null;let $=_.retry_at??_.retryAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function p$(_){if(!_||typeof _!=="object")return null;let $=_.last_event_at??_.lastEventAt??_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function z$(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function f6(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return z$(_)?"Compacting context":"Working..."}function oX(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,G=Math.floor($/60)%60,Z=Math.floor($/3600);if(Z>0)return`${Z}:${String(G).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${G}:${String(j).padStart(2,"0")}`}function D5(_,$=Date.now()){let j=P6(_);if(j===null)return null;return oX(Math.max(0,$-j))}function sX(_,$=Date.now()){let j=yD(_);if(j===null)return null;let G=j-$;if(G<=0)return"retrying now";return`retry in ${oX(G)}`}M0();function qL(_={}){o1(_)}function QL(){let[_,$]=C(!1);if(u(()=>{let Z=(Y)=>{let L=z2(Y?.detail?.section);if(L)try{window.__piclawSettingsRequestedSection=L}catch(V){}$(!0)};window.addEventListener("piclaw:open-settings",Z);let X=R6();if(X.open){if(X.section)try{window.__piclawSettingsRequestedSection=X.section}catch(Y){}$(!0)}return()=>window.removeEventListener("piclaw:open-settings",Z)},[]),!_)return null;let[j,G]=C(null);if(u(()=>{Promise.resolve().then(() => (VL(),KL)).then((Z)=>{G(()=>Z.SettingsDialogContent)})},[]),!j)return F`
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
    `}M0();function az(_,$){return new URL(String(_||""),$).toString()}function NL(){let[_,$]=C(()=>typeof window>"u"?"http://localhost/":window.location.href);u(()=>{if(typeof window>"u")return;let Z=()=>$(window.location.href);return window.addEventListener("popstate",Z),()=>window.removeEventListener("popstate",Z)},[]);let j=R((Z,X={})=>{if(typeof window>"u")return;let{replace:Y=!1}=X||{},L=az(Z,window.location.href);if(Y)window.history.replaceState(null,"",L);else window.history.pushState(null,"",L);$(window.location.href)},[]);return{locationParams:Y0(()=>new URL(_).searchParams,[_]),navigate:j}}M0();M0();function BL(_,$,j,G){try{let Z=_?.getItem?.($),X=Z?Number(Z):Number.NaN;return Number.isFinite(X)&&X>=j?X:G}catch(Z){return G}}function E9(_,$,j){try{return _?.setItem?.($,String(Math.round(j))),!0}catch(G){return!1}}var tz=400,D9=60,ez=220,z9="mdPreviewHeight";function _W(){return BL(localStorage,z9,D9,ez)}function i6({getContent:_,path:$,onClose:j}){let[G,Z]=C(""),[X,Y]=C(_W),L=g(null),V=g(null),K=g(""),Q=g(_);return Q.current=_,u(()=>{let N=()=>{let E=Q.current?.()||"";if(E===K.current)return;K.current=E;try{let D=Z1(E,null);Z(D)}catch{Z('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};N();let U=setInterval(N,tz);return()=>clearInterval(U)},[]),u(()=>{if(L.current&&G)E$(L.current).catch((N)=>{console.debug("[markdown-preview] Mermaid rendering failed for the live preview.",N,{path:$})})},[G]),F`
        <div
            class="md-preview-splitter"
            onMouseDown=${(N)=>{N.preventDefault();let U=N.clientY,E=V.current?.offsetHeight||X,D=V.current?.parentElement,H=D?D.offsetHeight*0.7:500,k=N.currentTarget;k.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let O=(I)=>{let x=Math.min(Math.max(E-(I.clientY-U),D9),H);Y(x)},W=()=>{k.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",E9(localStorage,z9,V.current?.offsetHeight||X),document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",W)};document.addEventListener("mousemove",O),document.addEventListener("mouseup",W)}}
            onTouchStart=${(N)=>{N.preventDefault();let U=N.touches[0];if(!U)return;let E=U.clientY,D=V.current?.offsetHeight||X,H=V.current?.parentElement,k=H?H.offsetHeight*0.7:500,O=N.currentTarget;O.classList.add("dragging"),document.body.style.userSelect="none";let W=(x)=>{let J=x.touches[0];if(!J)return;x.preventDefault();let A=Math.min(Math.max(D-(J.clientY-E),D9),k);Y(A)},I=()=>{O.classList.remove("dragging"),document.body.style.userSelect="",E9(localStorage,z9,V.current?.offsetHeight||X),document.removeEventListener("touchmove",W),document.removeEventListener("touchend",I),document.removeEventListener("touchcancel",I)};document.addEventListener("touchmove",W,{passive:!1}),document.addEventListener("touchend",I),document.addEventListener("touchcancel",I)}}
        ></div>
        <div class="md-preview-panel" ref=${V} style=${{height:X+"px"}}>
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
    `}function FL(_){if(_.branchLoaderMode)return"branch-loader";if(_.panePopoutMode)return"pane-popout";return"main"}function $W(_){return _==="error"?"Could not open branch window":"Opening branch…"}function UL(_){return F`
    <div class="app-shell chat-only">
      <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
        <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
          <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
            ${$W(_.status)}
          </h1>
          <p style=${{margin:0,lineHeight:1.6}}>${_.message}</p>
        </div>
      </div>
    </div>
  `}function HL(_){let{appShellRef:$,editorOpen:j,hidePanePopoutControls:G,panePopoutHasMenuActions:Z,panePopoutTitle:X,tabStripTabs:Y,tabStripActiveId:L,handleTabActivate:V,previewTabs:K,diffTabs:Q,handleTabTogglePreview:q,handleTabToggleDiff:B,editorContainerRef:N,getPaneContent:U,panePopoutPath:E}=_,D=j&&!G&&Z,H=X?`Pane window controls for ${X}`:"Pane window controls";return F`
    <div class=${`app-shell pane-popout${j?" editor-open":""}`} ref=${$}>
      <div class="editor-pane-container pane-popout-container">
        ${D&&F`
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
                      ${Y.map((k)=>F`
                        <button
                          type="button"
                          class=${`pane-popout-controls-item${k.id===L?" active":""}`}
                          onClick=${(O)=>{V(k.id),O.currentTarget.closest("details")?.removeAttribute("open")}}
                        >
                          ${k.label}
                        </button>
                      `)}
                    </div>
                  </div>
                `}
                ${L&&Q.has(L)&&F`
                  <button
                    type="button"
                    class="pane-popout-controls-action"
                    onClick=${(k)=>{B(L),k.currentTarget.closest("details")?.removeAttribute("open")}}
                  >
                    Hide diff
                  </button>
                `}
                ${L&&K.has(L)&&F`
                  <button
                    type="button"
                    class="pane-popout-controls-action"
                    onClick=${(k)=>{q(L),k.currentTarget.closest("details")?.removeAttribute("open")}}
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
              <p style=${{margin:0,lineHeight:1.6}}>${E||"No pane path provided."}</p>
            </div>
          `}
        ${j&&L&&K.has(L)&&F`
          <${i6}
            getContent=${U}
            path=${L}
            onClose=${()=>q(L)}
          />
        `}
      </div>
    </div>
  `}M0();M0();function o6(_){return String(_||"").toLowerCase().replace(/^@/,"").replace(/\s+/g," ").trim()}function jW(_,$){let j=o6(_),G=o6($);if(!G)return!1;return j.startsWith(G)||j.includes(G)}function A5(_){if(!_)return!1;if(_.isComposing)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;return typeof _.key==="string"&&_.key.length===1&&/\S/.test(_.key)}function W9(_,$,j=Date.now(),G=700){let Z=_&&typeof _==="object"?_:{value:"",updatedAt:0},X=String($||"").trim().toLowerCase();if(!X)return{value:"",updatedAt:j};return{value:!Z.value||!Number.isFinite(Z.updatedAt)||j-Z.updatedAt>G?X:`${Z.value}${X}`,updatedAt:j}}function GW(_,$){let j=Math.max(0,Number(_)||0);if(j<=0)return[];let Z=((Number.isInteger($)?$:0)%j+j)%j,X=[];for(let Y=0;Y<j;Y+=1)X.push((Z+Y)%j);return X}function ZW(_,$,j=0,G=(Z)=>Z){let Z=o6($);if(!Z)return-1;let X=Array.isArray(_)?_:[],Y=GW(X.length,j),L=X.map((V)=>o6(G(V)));for(let V of Y)if(L[V].startsWith(Z))return V;for(let V of Y)if(L[V].includes(Z))return V;return-1}function O9(_,$,j=-1,G=(Z)=>Z){let Z=Array.isArray(_)?_:[];if(j>=0&&j<Z.length){let X=G(Z[j]);if(jW(X,$))return j}return ZW(Z,$,0,G)}I_();function s6(_){return String(_||"").trim().toLowerCase()}function J9(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return s6($[1]||"")}function XW(_){let $=new Set,j=[];for(let G of Array.isArray(_)?_:[]){let Z=s6(G?.agent_name);if(!Z||$.has(Z))continue;$.add(Z),j.push(G)}return j}function EL(_,$,j={}){let G=J9($);if(G==null)return[];let Z=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return XW(_).filter((X)=>{if(Z&&X?.chat_jid===Z)return!1;return s6(X?.agent_name).startsWith(G)})}function A9(_){let $=s6(_);return $?`@${$} `:""}function DL(_={}){if(_.searchMode)return!1;return Boolean(_.showSessionSwitcherButton)}function zL(_,$,j={}){if(!_||_.isComposing)return!1;if(!DL(j))return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;if(_.key!=="@")return!1;return String($||"")===""}function k9(_,$={}){if(!DL($))return!1;return String(_||"")==="@"}function y9(_){let $=M9(_);return $?`@${$}`:""}function M9(_){return String(_||"").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")}function a6(_,$=""){let j=String(_||""),G=M9(j),Z=M9($);if(!j.trim())return{normalized:G,handle:"",canSubmit:!1,kind:"error",message:"Enter a branch handle."};if(!G)return{normalized:G,handle:"",canSubmit:!1,kind:"error",message:"Handle must contain at least one letter or number."};let X=`@${G}`;if(G===Z)return{normalized:G,handle:X,canSubmit:!1,kind:"info",message:`Already using ${X}.`};if(G!==j.trim())return{normalized:G,handle:X,canSubmit:!0,kind:"info",message:`Will save as ${X}. Letters, numbers, - and _ are allowed; leading @ is optional.`};return{normalized:G,handle:X,canSubmit:!0,kind:"success",message:`Saving as ${X}.`}}function YW(_,$={}){let j=[],G=typeof $.currentChatJid==="string"?$.currentChatJid.trim():"",Z=typeof _?.chat_jid==="string"?_.chat_jid.trim():"";if(G&&Z===G)j.push("current");if(_?.archived_at)j.push("archived");else if(_?.is_active)j.push("active");return j}function t6(_,$={}){let j=y9(_?.agent_name)||String(_?.chat_jid||"").trim(),G=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():"unknown-chat",Z=YW(_,$);return Z.length>0?`${j} — ${G} • ${Z.join(" • ")}`:`${j} — ${G}`}function WL(_,$,j){let G=y9(_),Z=y9($),X=String(j||"").trim();if(G&&Z&&G!==Z)return`Restored archived ${G} as ${Z} because ${G} is already in use.`;if(Z)return`Restored ${Z}.`;if(G)return`Restored ${G}.`;return`Restored ${X||"branch"}.`}function e6({steerQueued:_=!1,pulsing:$=!1}={}){let j=["turn-dot"];if(_)j.push("turn-dot-queued");if($)j.push("turn-dot-pulsing");return j.join(" ")}function _8({pulsing:_=!1}={}){let $=["compose-inline-status-dot"];if(_)$.push("compose-inline-status-dot-pulsing");return $.join(" ")}function $8(_,{isLastActivity:$=!1,pendingRequest:j=!1}={}){if(j)return"dot";if($)return"none";if(_?.type==="error")return"none";if(_?.type==="intent")return"dot";let G=typeof _?.type==="string"?_.type:"";if(Boolean(typeof _?.tool_name==="string"&&_.tool_name.trim()||_?.tool_args))return"spinner";if(G==="tool_call"||G==="tool_status"||G==="thinking"||G==="waiting")return"spinner";return"dot"}function OL(_,$={}){return $8(_,$)==="dot"}M0();var JL=350;function LW(_){return String(_||"Connecting").replace(/[-_]+/g," ").replace(/^./,($)=>$.toUpperCase())}function KW(_,$={}){let j=typeof _==="string"&&_.trim()?_.trim():"connecting";if(j==="connected")return{show:!1,statusClass:"connected",label:"Connected",title:"Connection: Connected"};if(j!=="disconnected"){let L=LW(j);return{show:!0,statusClass:j,label:L,title:`Connection: ${L}`}}let G=Number.isFinite(Number($?.delayMs))?Math.max(0,Number($.delayMs)):JL,Z=Number.isFinite(Number($?.nowMs))?Number($.nowMs):Date.now(),X=Number.isFinite(Number($?.disconnectedAtMs))?Number($.disconnectedAtMs):Z;return Z-X>=G?{show:!0,statusClass:"disconnected",label:"Reconnecting",title:"Reconnecting"}:{show:!1,statusClass:"connecting",label:"Connecting",title:"Connecting"}}function w9(_,$={}){let j=Number.isFinite(Number($?.delayMs))?Math.max(0,Number($.delayMs)):JL,[G,Z]=C(null),[X,Y]=C(()=>Date.now());return u(()=>{if(_==="disconnected"){let L=Date.now();Z((V)=>V??L),Y(L);return}Z(null),Y(Date.now())},[_]),u(()=>{if(_!=="disconnected"||G===null)return;let L=j-(Date.now()-G);if(L<=0)return;let V=0,K=0,Q=setTimeout(()=>{if(typeof requestAnimationFrame!=="function"){Y(Date.now());return}V=requestAnimationFrame(()=>{K=requestAnimationFrame(()=>{Y(Date.now())})})},L);return()=>{if(clearTimeout(Q),V)cancelAnimationFrame(V);if(K)cancelAnimationFrame(K)}},[_,G,j]),Y0(()=>KW(_,{delayMs:j,disconnectedAtMs:G,nowMs:X}),[_,j,G,X])}M0();function L1({prefix:_="file",label:$,title:j,onRemove:G,onClick:Z,removeTitle:X="Remove",icon:Y="file"}){let L=`${_}-file-pill`,V=`${_}-file-name`,K=`${_}-file-remove`,Q=Y==="message"?F`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:Y==="folder"?F`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        </svg>`:F`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
        </svg>`;return F`
    <span class=${L} title=${j||$} onClick=${Z}>
      ${Q}
      <span class=${V}>${$}</span>
      ${G&&F`
        <button
          class=${K}
          onClick=${(q)=>{q.preventDefault(),q.stopPropagation(),G()}}
          title=${X}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}async function T9(_,$,j){if(typeof _!=="function")return!1;try{let G=await _($);if(!G)return!1;return j(G),!0}catch(G){return!1}}function VW(_={}){let $=_.navigator??(typeof navigator<"u"?navigator:null);if(!$)return!1;let j=String($.userAgent||"");if(/iPad|iPhone/.test(j))return!0;return $.platform==="MacIntel"&&Number($.maxTouchPoints||0)>1}function qW(_={}){let $=_.window??(typeof window<"u"?window:null);if(!$)return null;return $.SpeechRecognition||$.webkitSpeechRecognition||null}function x9(_={}){let $=_.window??(typeof window<"u"?window:null),j=typeof _.secureContext==="boolean"?_.secureContext:Boolean($?.isSecureContext),G=f1(_),Z=VW(_),X=qW(_);if(!j)return{mode:"unavailable",showButton:!1,canStart:!1,reason:"secure-context-required",title:"Voice input requires HTTPS",detail:"Native browser speech input needs a secure context (HTTPS or localhost).",recognitionCtor:null,ios:Z,standalone:G,secureContext:j};if(Z&&G)return{mode:"fallback",showButton:!0,canStart:!1,reason:"ios-standalone-fallback",title:"Use keyboard dictation",detail:"Speech input is intentionally downgraded in iPhone/iPad standalone web apps because browser-native recognition is not reliable there. Focus the compose box and use the keyboard dictation mic instead.",recognitionCtor:X,ios:Z,standalone:G,secureContext:j};if(!X){if(Z)return{mode:"fallback",showButton:!0,canStart:!1,reason:"ios-keyboard-dictation",title:"Use keyboard dictation",detail:"This browser does not expose native in-page speech recognition here. Focus the compose box and use the keyboard dictation mic instead.",recognitionCtor:null,ios:Z,standalone:G,secureContext:j};return{mode:"unavailable",showButton:!1,canStart:!1,reason:"unsupported",title:"Voice input unavailable",detail:"This browser does not expose native speech recognition in this context.",recognitionCtor:null,ios:Z,standalone:G,secureContext:j}}return{mode:"native",showButton:!0,canStart:!0,reason:"supported",title:"Start voice input",detail:Z?"Browser-native speech input is available here, but Safari/WebKit reliability may still vary.":"Browser-native speech input is available.",recognitionCtor:X,ios:Z,standalone:G,secureContext:j}}function AL(_,$="",j=""){let G=String(_||""),Z=String($||"").trim(),X=String(j||"").trim(),Y=[Z,X].filter(Boolean).join(" ").trim();if(!Y)return G;if(!G)return Y;let L=/[\s\n]$/.test(G)?"":" ";return`${G}${L}${Y}`}function kL(_,$=0){let j="",G="",Z=_&&typeof _.length==="number"?_:[];for(let X=Math.max(0,$);X<Z.length;X+=1){let Y=Z[X];if(!Y||!Y[0])continue;let L=String(Y[0].transcript||"").trim();if(!L)continue;if(Y.isFinal)j=`${j} ${L}`.trim();else G=`${G} ${L}`.trim()}return{finalText:j,interimText:G}}function I9(_,$=null){let j=String(_||"").trim().toLowerCase();switch(j){case"not-allowed":case"service-not-allowed":return $?.ios?"Microphone or speech-recognition permission was denied. On iPhone/iPad, using keyboard dictation may be more reliable.":"Microphone or speech-recognition permission was denied by the browser.";case"no-speech":return"No speech was detected. Try again and speak after the listening indicator appears.";case"audio-capture":return"The browser could not access a microphone for speech recognition.";case"network":return"The browser speech-recognition service reported a network or service failure.";case"aborted":return"Voice input was stopped.";default:return j?`Voice input failed (${j}).`:"Voice input failed."}}var QW=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking/effort level"},{name:"/effort",description:"Show or set thinking/effort level (alias for /thinking)"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (no name to show available themes)"},{name:"/meters",description:"Toggle the top-right CPU/RAM HUD (/meters on|off|toggle)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/session-rotate",description:"Rotate the current persisted session into an archived file"},{name:"/rollup",description:"Merge the current branch chat back into its parent chat"},{name:"/clone",description:"Duplicate the current active branch into a new session"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/dream",description:"Run Dream memory maintenance over recent days (default 7)"},{name:"/tasks",description:"List scheduled tasks"},{name:"/scheduled",description:"List scheduled tasks"},{name:"/pair",description:"Manage remote peer connections (/pair request <url> | /pair list)"},{name:"/ask",description:"Send a prompt to a paired remote instance (/ask <instance_id|fingerprint> <prompt>)"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/exit",description:"Exit the current piclaw process immediately (Supervisor will restart it)"},{name:"/login",description:"Login to an AI model provider (OAuth or API key)"},{name:"/logout",description:"Logout from an AI model provider"},{name:"/settings",description:"Open the settings pane"},{name:"/help",description:"Open keyboard shortcuts help"},{name:"/commands",description:"List available commands"},{name:"/skill:",description:"Run a workspace skill (e.g. /skill:visual-artifact-generator, /skill:web-search)"}],yL="piclaw_compose_history";function NW(_,$,j=!1){if(j)return{shouldApply:!1,nextToken:$,text:""};if(!_||typeof _!=="object")return{shouldApply:!1,nextToken:$,text:""};let G=typeof _.token==="string"?_.token:"",Z=typeof _.text==="string"?_.text:"";if(!G||G===$||!Z.trim())return{shouldApply:!1,nextToken:$,text:""};return{shouldApply:!0,nextToken:G,text:Z}}function BW(_="web:default"){let $=typeof _==="string"&&_.trim()?_.trim():"web:default";if($==="web:default")return yL;return`${yL}:${encodeURIComponent($)}`}function FW(_,$=null){let j=new Set,G=[];for(let Z of Array.isArray(_)?_:[]){let X=typeof Z?.chat_jid==="string"?Z.chat_jid.trim():"";if(!X||j.has(X))continue;if(!(typeof Z?.agent_name==="string"?Z.agent_name.trim():""))continue;j.add(X),G.push(Z)}return G.sort((Z,X)=>{let Y=Boolean(Z?.archived_at),L=Boolean(X?.archived_at);if(Y!==L)return Y?1:-1;let V=String(Z?.agent_name||"").trim(),K=String(X?.agent_name||"").trim(),Q=V.localeCompare(K,void 0,{sensitivity:"base"});if(Q!==0)return Q;let q=String(Z?.chat_jid||"").trim(),B=String(X?.chat_jid||"").trim();return q.localeCompare(B,void 0,{sensitivity:"base"})}),G}function UW(_){return Boolean(_?.is_active&&!_?.archived_at)}function HW(_,$=null){let j=Array.isArray(_)?_:[],G=typeof $==="string"?$.trim():"";if(G){let X=j.findIndex((Y)=>{if(Y?.disabled)return!1;if(Y?.type!=="session")return!1;return(typeof Y?.chat?.chat_jid==="string"?Y.chat.chat_jid.trim():"")===G});if(X>=0)return X}let Z=j.findIndex((X)=>!X?.disabled);return Z>=0?Z:0}function ML(_,$){let j=typeof $?.command?.message==="string"?$.command.message.trim():"";if(!$?.ui_only||!j)return null;let G=typeof _==="string"?_.trim():"";if(!G.startsWith("/"))return null;let Z=G.split(/\s+/).filter(Boolean),X=Z[0]?.toLowerCase()||"";if(!(Z.length>1)&&(X==="/model"||X==="/thinking"||X==="/effort"))return j;return null}function EW(_,$,j=!1){if(_)return{mode:"queue",className:"icon-btn send-btn queue-mode",title:"Queue follow-up (Enter)",ariaLabel:"Queue follow-up message",disabled:!$};return{mode:"send",className:"icon-btn send-btn",title:"Send (Enter)",ariaLabel:"Send message",disabled:!$}}function wL(_,$,j={}){if(!_||j.searchMode)return!1;if(!(_.key===" "||_.key==="Spacebar"||_.code==="Space"))return!1;if(_.ctrlKey||_.metaKey||_.altKey||_.repeat)return!1;if(!j.speechButtonVisible||j.speechButtonActive)return!1;if(!j.canStartSpeech)return!1;return String($||"").trim().length===0}function DW(_,$){if(!$||!_)return!1;return _.key===" "||_.key==="Spacebar"||_.code==="Space"}function zW(_,$=!1){if(!_)return null;if($)return{mode:"compacting",className:"icon-btn send-btn abort-mode compacting-mode",title:"Compacting context — Stop response",ariaLabel:"Compacting context — Stop response",disabled:!1};return{mode:"abort",className:"icon-btn send-btn abort-mode",title:"Stop response",ariaLabel:"Stop response",disabled:!1}}function WW(_){return _==="abort"||_==="compacting"}function OW(_,$=0){if(_?.visible===!1)return{visible:!1,title:"",indicatorText:null,animateDot:!1};let j=typeof _?.message==="string"&&_.message.trim()?_.message.trim():null,G=_?.indicator&&typeof _.indicator==="object"?_.indicator:null;if(!j&&!G)return{visible:!1,title:"",indicatorText:null,animateDot:!1};if(G?.mode==="hidden")return{visible:Boolean(j),title:j||"Working…",indicatorText:null,animateDot:!1};if(G?.mode==="custom"&&Array.isArray(G.frames)&&G.frames.length>0){let Z=G.frames,X=Number.isFinite($)&&$>=0?Math.floor($)%Z.length:0;return{visible:!0,title:j||"Working…",indicatorText:Z[X],animateDot:!1}}return{visible:!0,title:j||"Working…",indicatorText:null,animateDot:!0}}function JW({usage:_,onCompact:$,compactionLabel:j="",compactionTitle:G=""}){let Z=Math.min(100,Math.max(0,_.percent||0)),X=_.tokens,Y=_.contextWindow,L="Compact context",V=X!=null?`Context: ${k5(X)} / ${k5(Y)} tokens (${Z.toFixed(0)}%)`:`Context: ${Z.toFixed(0)}%`,K=typeof j==="string"?j.trim():"",Q=typeof G==="string"?G.trim():"",q=K?`${V} — ${Q||"Smart compaction"} · ${K}`:`${V} — ${"Compact context"}`,B=9,N=2*Math.PI*9,U=Z/100*N,E=Z>90?"var(--context-red, #ef4444)":Z>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return F`
        <button
            class=${`compose-context-pie icon-btn${K?" is-compacting":""}`}
            type="button"
            title=${q}
            aria-label=${K?`Smart compaction ${K}`:"Compact context"}
            onClick=${(D)=>{D.preventDefault(),D.stopPropagation(),$?.()}}
        >
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke=${E}
                    stroke-width="2.5"
                    stroke-dasharray=${`${U} ${N}`}
                    stroke-linecap="round"
                    transform="rotate(-90 12 12)" />
            </svg>
            ${K&&F`<span class="compose-context-pie-timer">${K}</span>`}
        </button>
    `}function k5(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function AW(_){let $=Number(_?.tokens);return Number.isFinite($)&&$>0?$:null}function TL(_,$){let j=Number(_?.contextWindow??_?.context_window),G=AW($);if(!Number.isFinite(j)||j<=0||!Number.isFinite(G)||G<=0)return{blocked:!1,note:"",title:"",tokens:G??null,contextWindow:Number.isFinite(j)&&j>0?j:null};if(G<=j)return{blocked:!1,note:"",title:"",tokens:G,contextWindow:j};return{blocked:!0,note:"Current context won’t fit — compact first",title:`Current context uses ${k5(G)} tokens, but this model only fits ${k5(j)}. Compact first.`,tokens:G,contextWindow:j}}function C9(_){let $=Number(_);if(!Number.isFinite($)||$<=0)return"";return`${k5($)} ctx`}function kW(_,$){let j=typeof _==="string"?_.trim():"",G=C9($);if(!j)return G;if(!G)return j;return`${j} • ${G}`}function yW(_,$="",j=""){let G=typeof _==="string"?_.trim():"";if(G)return G;let Z=typeof $==="string"?$.trim():"",X=typeof j==="string"?j.trim():"";if(Z&&X)return`${Z}/${X}`;return X||Z||""}function CL(_){let $=Array.isArray(_?.model_options)?_.model_options:null,j=Array.isArray(_?.models)?_.models:[],G=$&&$.length>0?$:j,Z=[];for(let X of G){if(typeof X==="string"){let q=X.trim();if(!q)continue;let B=q.indexOf("/"),N=B>0?q.slice(0,B).trim():"",U=B>0?q.slice(B+1).trim():q;Z.push({label:q,provider:N,id:U,name:null,contextWindow:null,reasoning:!1});continue}if(!X||typeof X!=="object")continue;let Y=typeof X.provider==="string"?X.provider.trim():"",L=typeof X.id==="string"?X.id.trim():"",V=yW(X.label,Y,L);if(!V)continue;let K=typeof X.name==="string"&&X.name.trim()?X.name.trim():null,Q=Number(X.context_window??X.contextWindow);Z.push({label:V,provider:Y,id:L,name:K,contextWindow:Number.isFinite(Q)&&Q>0?Q:null,reasoning:Boolean(X.reasoning)})}return Z.sort((X,Y)=>X.label.localeCompare(Y.label,void 0,{sensitivity:"base"})),Z}function MW(_){if(!_||typeof _!=="object")return"";return[_.label,_.provider,_.id,_.name,C9(_.contextWindow)].filter(Boolean).join(" ")}function wW(_,$){let j=typeof _==="string"?_.trim():"";if(j)return{showPicker:!0,label:j,hasAvailableModels:!0};let G=CL($).length>0;return{showPicker:G,label:G?"Select model":"",hasAvailableModels:G}}function j8(_){return(typeof _==="string"?_.trim():"")||null}function xL(_){return j8(_)?.toLowerCase()??null}function IL(_,$){let j=xL(_),G=xL($);if(!j||!G)return!1;return j===G||j.endsWith(`/${G}`)||G.endsWith(`/${j}`)}function TW(_,$){let j=$&&typeof $==="object"?$:{},G=j8(j.latest_response_model??j.response_model??j.responseModel??j.routed_model??j.routedModel);if(!G)return null;let Z=j8(j.latest_requested_model??j.requested_model??j.requestedModel??j.current??j.model??_);if(Z&&IL(G,Z))return null;let X=j8(_??j.current??j.model);if(X&&Z&&!IL(X,Z))return null;return{label:`Routed: ${G}`,title:Z?`Requested model: ${Z} • Routed model: ${G}`:`Routed model: ${G}`,requestedModel:Z,responseModel:G}}function xW(_){if(!_)return _;let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!$.includes(" @ ")||!$.includes(`:
`))return _;let j=$.split(`
`),G=[],Z=0,X=!1;while(Z<j.length){let L=j[Z].trim();if(!L){Z+=1;continue}if(L==="Messages:"||L.startsWith("Channel:")||L.startsWith("Chat:")){X=!0,Z+=1;continue}if(/^[^\n]+\s@\s[^\n]+:$/.test(L)){X=!0,Z+=1;let V=[];while(Z<j.length){let K=j[Z],Q=K.trim();if(/^[^\n]+\s@\s[^\n]+:$/.test(Q))break;if(Q.startsWith("Channel:")||Q.startsWith("Chat:")||Q==="Messages:")break;V.push(K.startsWith("  ")?K.slice(2):K),Z+=1}if(V.length>0)G.push(V.join(`
`).trim());continue}return _}return X&&G.length>0?G.filter(Boolean).join(`

`):_}function PL(_){let $=String(_||"").trim(),j=$.match(/^`([^`]+)`$/);return(j?j[1]:$).trim()}function IW(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let K=0;K<j.length;K+=1)if(j[K].trim()==="Files:"&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){G=K;break}if(G===-1)return{content:_,fileRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let K=j[X];if(/^\s*-\s+/.test(K)){let Q=PL(K.replace(/^\s*-\s+/,"").trim());if(Q)Z.push(Q)}else if(!K.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let Y=j.slice(0,G),L=j.slice(X);return{content:[...Y,...L].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:Z}}function CW(_){if(!_)return{content:_,folderRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let K=0;K<j.length;K+=1)if(j[K].trim()==="Folders:"&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){G=K;break}if(G===-1)return{content:_,folderRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let K=j[X];if(/^\s*-\s+/.test(K)){let Q=PL(K.replace(/^\s*-\s+/,"").trim());if(Q)Z.push(Q)}else if(!K.trim())break;else break}if(Z.length===0)return{content:_,folderRefs:[]};let Y=j.slice(0,G),L=j.slice(X);return{content:[...Y,...L].join(`
`).replace(/\n{3,}/g,`

`).trim(),folderRefs:Z}}function PW(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let K=0;K<j.length;K+=1)if(j[K].trim()==="Referenced messages:"&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){G=K;break}if(G===-1)return{content:_,messageRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let K=j[X];if(/^\s*-\s+/.test(K)){let Q=K.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(Q)Z.push(Q[1])}else if(!K.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let Y=j.slice(0,G),L=j.slice(X);return{content:[...Y,...L].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:Z}}function fW(_){if(!_)return{content:_,attachmentRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let K=0;K<j.length;K+=1)if(j[K].trim()==="Attachments:"&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){G=K;break}if(G===-1)return{content:_,attachmentRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let K=j[X];if(/^\s*-\s+/.test(K)){let Q=K.replace(/^\s*-\s+/,"").trim(),q=Q.match(/^attachment:(\d+)(?:\s*\((.+)\))?$/i);if(q)Z.push({id:q[1],label:(q[2]||"").trim()||`attachment:${q[1]}`,raw:Q})}else if(!K.trim())break;else break}if(Z.length===0)return{content:_,attachmentRefs:[]};let Y=j.slice(0,G),L=j.slice(X);return{content:[...Y,...L].join(`
`).replace(/\n{3,}/g,`

`).trim(),attachmentRefs:Z}}function fL(_){let $=xW(_||""),j=IW($||""),G=CW(j.content||""),Z=PW(G.content||""),X=fW(Z.content||"");return{text:X.content||"",fileRefs:j.fileRefs,folderRefs:G.folderRefs,messageRefs:Z.messageRefs,attachmentRefs:X.attachmentRefs}}function RW(_){let $=fL(_),j=$.attachmentRefs.length>0?`Attachments:
${$.attachmentRefs.map((Z)=>`- ${Z.raw}`).join(`
`)}`:"";return{content:[String($.text||"").trim(),j].filter(Boolean).join(`

`).trim(),fileRefs:[...$.fileRefs],folderRefs:[...$.folderRefs],messageRefs:[...$.messageRefs],attachmentRefs:[...$.attachmentRefs]}}function SW(_){let{queuedItem:$,buildDraft:j=RW,onRemoveQueuedFollowup:G,setSubmitError:Z,setSubmitNotice:X,setMediaFiles:Y,onSetFileRefs:L,onSetFolderRefs:V,onSetMessageRefs:K,setContent:Q,textareaRef:q,resizeTextarea:B=()=>{},scheduleTimeout:N=(k,O=0)=>setTimeout(k,O),scheduleRaf:U=(k)=>requestAnimationFrame(k),logger:E=console}=_||{};if(!$)return!1;let D=j($?.content||""),H=D.content;return E?.info?.("[compose-box] Returning queued item to editor",{text:H?.slice(0,80),fileRefs:D.fileRefs?.length,folderRefs:D.folderRefs?.length,messageRefs:D.messageRefs?.length}),Z?.(null),X?.(null),Y?.([]),L?.(D.fileRefs),V?.(D.folderRefs),K?.(D.messageRefs),Q?.(H),U(()=>{let k=q?.current;if(!k)return;if(k.value=H,typeof k.dispatchEvent==="function")k.dispatchEvent(new Event("input",{bubbles:!0}));B();let O=H.length;k.selectionStart=O,k.selectionEnd=O,k.focus()}),N(()=>{try{G?.($)}catch(k){E?.warn?.("[compose-box] Failed to remove returned queued follow-up.",k)}},0),!0}function P9({items:_=[],onInjectQueuedFollowup:$,onRemoveQueuedFollowup:j,onMoveQueuedFollowup:G,onReturnQueuedFollowup:Z,onOpenFilePill:X}){if(!Array.isArray(_)||_.length===0)return null;return F`
        <div class="compose-queue-stack">
            ${_.map((Y,L)=>{let V=typeof Y?.content==="string"?Y.content:"",K=fL(V);if(!K.text.trim()&&K.fileRefs.length===0&&K.folderRefs.length===0&&K.messageRefs.length===0&&K.attachmentRefs.length===0)return null;let Q=L>0,q=L<_.length-1,B=!0;return F`
                    <div class="compose-queue-stack-item" data-testid="queue-item" role="listitem">
                        <div class="compose-queue-stack-content" title=${V}>
                            ${K.text.trim()&&F`<div class="compose-queue-stack-text">${K.text}</div>`}
                            ${(K.messageRefs.length>0||K.fileRefs.length>0||K.folderRefs.length>0||K.attachmentRefs.length>0)&&F`
                                <div class="compose-queue-stack-refs">
                                    ${K.messageRefs.map((N)=>F`
                                        <${L1}
                                            key=${"queue-msg-"+N}
                                            prefix="compose"
                                            label=${"msg:"+N}
                                            title=${"Message reference: "+N}
                                            icon="message"
                                        />
                                    `)}
                                    ${K.fileRefs.map((N)=>{let U=N.split("/").pop()||N;return F`
                                            <${L1}
                                                key=${"queue-file-"+N}
                                                prefix="compose"
                                                label=${U}
                                                title=${N}
                                                onClick=${()=>X?.(N)}
                                            />
                                        `})}
                                    ${K.folderRefs.map((N)=>{let U=N.split("/").pop()||N;return F`
                                            <${L1}
                                                key=${"queue-folder-"+N}
                                                prefix="compose"
                                                label=${U}
                                                title=${N}
                                                icon="folder"
                                                onClick=${()=>X?.(N)}
                                            />
                                        `})}
                                    ${K.attachmentRefs.map((N)=>F`
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
                                    disabled=${!q}
                                    onClick=${()=>q&&G?.(L,L+1)}
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
    `}function RL({onPost:_,onFocus:$,searchMode:j,searchScope:G="current",onSearch:Z,onSearchScopeChange:X,onEnterSearch:Y,onExitSearch:L,fileRefs:V=[],onRemoveFileRef:K,onClearFileRefs:Q,folderRefs:q=[],onRemoveFolderRef:B,onClearFolderRefs:N,messageRefs:U=[],onRemoveMessageRef:E,onClearMessageRefs:D,activeModel:H=null,agentModelsPayload:k=null,modelUsage:O=null,thinkingLevel:W=null,supportsThinking:I=!1,contextUsage:x=null,onContextCompact:J,notificationsEnabled:A=!1,notificationPermission:z="default",onToggleNotifications:T,onModelChange:w,onModelStateChange:y,activeEditorPath:P=null,onAttachEditorFile:f,onOpenFilePill:b,followupQueueItems:c=[],onInjectQueuedFollowup:h,onRemoveQueuedFollowup:_0,onMoveQueuedFollowup:v,onSubmitIntercept:e,onMessageResponse:z0,isAgentActive:j0=!1,activeChatAgents:$0=[],currentChatJid:L0="web:default",connectionStatus:B0="connected",stateAccessFailed:t=!1,onSetFileRefs:V0,onSetFolderRefs:q0,onSetMessageRefs:k0,onSubmitError:s,onSwitchChat:X0,onRenameSession:D0,isRenameSessionInProgress:C0=!1,onCreateSession:g0,onCreateRootSession:n0,onDeleteSession:j_,onPurgeArchivedSession:m0,onRestoreSession:d0,showQueueStack:S0=!0,statusNotice:o0=null,extensionWorkingState:v0=null,prefillRequest:a0=null}){let[h0,N_]=C(""),[t0,b0]=C(""),[A0,L_]=C(!1),[e0,O_]=C(!1),[H0,f0]=C("or"),[T0,i0]=C([]),[A_,K_]=C(!1),[E_,H_]=C([]),[y_,C_]=C(0),[u_,D_]=C(!1),G0=g(null),[W0,r]=C([]),[i,o]=C(0),[Z0,K0]=C(!1),[J0,c0]=C(!1),[R0,I0]=C(!1),[w0,p0]=C(!1),[U0,l0]=C([]),[Y_,G_]=C(0),[u0,z_]=C(0),[B_,d]=C(!1),[O0,Z_]=C(!1),[q_,r_]=C(0),[B1,g_]=C(null),[J1,P_]=C(null),[M_,A1]=C(()=>x9()),[W_,k_]=C({kind:"idle",title:"",detail:""}),[F1,m_]=C(()=>Date.now()),[n_,s_]=C(0),U_=g(null),x1=g(null),U1=g(null),g1=g(null),k1=g(null),e1=g(null),c4=g(null),A$=g(null),t_=g({value:"",updatedAt:0}),c_=g(null),y1=g(""),H1=g(""),_1=g(""),k$=g(""),y$=g(!1),_$=g(!1),w_=g(!1),K1=g(0),M$=g(!1),l4=200,$$=BW(L0),h4=(M)=>{let m=new Set,n=[];for(let N0 of M||[]){if(typeof N0!=="string")continue;let P0=N0.trim();if(!P0||m.has(P0))continue;m.add(P0),n.push(P0)}return n},r4=(M=$$)=>{let m=z1(M);if(!m)return[];try{let n=JSON.parse(m);if(!Array.isArray(n))return[];return h4(n)}catch{return[]}},w$=(M,m=$$)=>{V_(m,JSON.stringify(M))},T$=g(r4($$)),b1=g(-1),v1=g(""),p4=g("");u(()=>{T$.current=r4($$),b1.current=-1,v1.current=""},[$$]),u(()=>{if(!j)return;fetch("/agent/settings-data").then((M)=>M.json()).then((M)=>{if(M?.searchMatchMode)f0(M.searchMatchMode)}).catch(()=>{})},[j]),u(()=>{let M=!1;return fetch(`/agent/commands?chat_jid=${encodeURIComponent(L0||"web:default")}`).then((n)=>n.ok?n.json():null).then((n)=>{if(M||!n?.commands)return;G0.current=n.commands.map((N0)=>({name:N0.name,description:N0.description||""}))}).catch((n)=>{console.debug("[compose] failed to fetch dynamic commands",n)}),()=>{M=!0}},[L0]),u(()=>{let M=NW(a0,p4.current,j);if(!M.shouldApply)return;p4.current=M.nextToken,g_(null),N_(M.text),E0(M.text),p_(M.text),requestAnimationFrame(()=>{x0();let m=U_.current;if(!m)return;try{m.focus({preventScroll:!0})}catch{m.focus()}let n=M.text.length;m.setSelectionRange?.(n,n)})},[a0,j]),u(()=>{A1(x9())},[]);let V1=h0.trim()||T0.length>0||V.length>0||q.length>0||U.length>0,R_=W_.kind!=="idle",n4=W_.kind==="requesting_permission"||W_.kind==="listening",I1=!j&&Boolean(M_?.showButton),x$=W_.kind==="requesting_permission"||W_.kind==="listening",d4=x$?"Stop voice input":M_?.title||"Voice input",g2=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),b2=typeof window<"u"&&typeof Notification<"u",X4=typeof window<"u"?Boolean(window.isSecureContext):!1,i4=b2&&X4&&z!=="denied",o4=z==="granted"&&A,q1=z$(o0),C$=f6(o0),Y4=typeof o0?.detail==="string"&&o0.detail.trim()?o0.detail.trim():"",L4=q1?D5(o0,F1):null,m1=OW(v0,n_),E1=v0?.indicator&&typeof v0.indicator==="object"?v0.indicator:null,v2=o4?"Disable notifications":"Enable notifications",K4=T0.length>0||V.length>0||q.length>0||U.length>0,j$=w9(t?B0:"connected"),e_=j$.label,P$=j$.title,s4=EW(j0,V1,q1),G$=zW(j0,q1),b5=(Array.isArray($0)?$0:[]).filter((M)=>!M?.archived_at),b_=(()=>{for(let M of Array.isArray($0)?$0:[]){let m=typeof M?.chat_jid==="string"?M.chat_jid.trim():"";if(m&&m===L0)return M}return null})(),d8=Boolean(b_&&b_.chat_jid===(b_.root_chat_jid||b_.chat_jid)),i8=Boolean(d8&&(b_?.chat_jid||L0)==="web:default"),C1=(()=>{let M=typeof b_?.parent_branch_id==="string"?b_.parent_branch_id.trim():"",m=typeof b_?.branch_id==="string"?b_.branch_id.trim():"";if(!b_||!M||!m||b_.archived_at)return null;if((Array.isArray($0)?$0:[]).filter((P0)=>{let F_=typeof P0?.parent_branch_id==="string"?P0.parent_branch_id.trim():"";return F_&&F_===m}).length>0)return null;return(Array.isArray($0)?$0:[]).find((P0)=>{let F_=typeof P0?.branch_id==="string"?P0.branch_id.trim():"";return F_&&F_===M&&!P0?.archived_at})||null})(),V4=Y0(()=>FW($0,L0),[$0,L0]),f$=V4.length>0,R$=f$&&typeof X0==="function",S$=f$&&typeof d0==="function",a4=Boolean(C0||M$.current),Z$=!j&&typeof D0==="function"&&!a4,X$=!j&&typeof g0==="function",q4=!j&&typeof n0==="function",Q4=!j&&!j0&&!O0&&Boolean(C1?.chat_jid),Y$=!j&&typeof j_==="function"&&!i8,v5=!j&&typeof m0==="function",L$=!j&&(R$||S$||Z$||X$||q4||Q4||Y$||v5),m5=wW(H,k),m2=m5.showPicker,c2=m5.label,l2=I&&W?` (${W})`:"",o8=l2.trim()?`${W}`:"",S=TW(H,k),l=typeof O?.hint_short==="string"?O.hint_short.trim():"",p=[o8||null,S?.label||null,l||null].filter(Boolean).join(" • "),a=[H?`Current model: ${c2}${l2}`:null,S?.title||null,O?.plan?`Plan: ${O.plan}`:null,l||null,O?.primary?.reset_description||null,O?.secondary?.reset_description||null].filter(Boolean),F0=J0?"Switching model…":a.join(" • ")||(m2?"Select a model (tap to open model picker)":`Current model: ${c2}${l2} (tap to open model picker)`),Q0=!j&&(m2||x&&x.percent!=null),y0=(M)=>{if(!M||typeof M!=="object")return;let m=M.model??M.current;if(typeof y==="function")y({...M,model:m??null,thinking_level:M.thinking_level??null,thinking_level_label:M.thinking_level_label??null,supports_thinking:M.supports_thinking,provider_usage:M.provider_usage??null});if(m&&typeof w==="function")w(m)},x0=(M)=>{let m=M||U_.current;if(!m)return;m.style.height="auto",m.style.height=`${m.scrollHeight}px`,m.style.overflowY="hidden"},E0=(M)=>{if(!M.startsWith("/")||M.includes(`
`)){D_(!1),H_([]);return}let m=M.toLowerCase().split(" ")[0];if(m.length<1){D_(!1),H_([]);return}let N0=(G0.current||QW).filter((P0)=>P0.name.startsWith(m)||P0.name.replace(/-/g,"").startsWith(m.replace(/-/g,"")));if(N0.length>0&&!(N0.length===1&&N0[0].name===m))K0(!1),r([]),H_(N0),C_(0),D_(!0);else D_(!1),H_([])},s0=(M)=>{let m=h0,n=m.indexOf(" "),N0=n>=0?m.slice(n):"",P0=M.name+N0;N_(P0),D_(!1),H_([]),requestAnimationFrame(()=>{let F_=U_.current;if(!F_)return;let i_=P0.length;F_.selectionStart=i_,F_.selectionEnd=i_,F_.focus()})},p_=(M)=>{if(k9(M,{searchMode:j,showSessionSwitcherButton:L$})){K0(!1),r([]);return}if(J9(M)==null){K0(!1),r([]);return}let m=EL(b5,M,{currentChatJid:L0});if(m.length>0&&!(m.length===1&&A9(m[0].agent_name).trim().toLowerCase()===String(M||"").trim().toLowerCase()))D_(!1),H_([]),r(m),o(0),K0(!0);else K0(!1),r([])},$1=(M)=>{let m=A9(M?.agent_name);if(!m)return;N_(m),K0(!1),r([]),requestAnimationFrame(()=>{let n=U_.current;if(!n)return;let N0=m.length;n.selectionStart=N0,n.selectionEnd=N0,n.focus()})},K$=()=>{if(j||!R$&&!S$&&!Z$&&!X$&&!Y$)return!1;return t_.current={value:"",updatedAt:0},I0(!1),D_(!1),H_([]),K0(!1),r([]),p0(!0),!0},uj=(M)=>{if(M?.preventDefault?.(),M?.stopPropagation?.(),j||!R$&&!S$&&!Z$&&!X$&&!Y$)return;if(w0){t_.current={value:"",updatedAt:0},p0(!1);return}K$()},gj=(M)=>{let m=typeof M==="string"?M.trim():"";if(p0(!1),!m||m===L0){requestAnimationFrame(()=>U_.current?.focus());return}X0?.(m)},bj=async(M)=>{let m=typeof M==="string"?M.trim():"";if(p0(!1),!m||typeof d0!=="function"){requestAnimationFrame(()=>U_.current?.focus());return}try{await d0(m)}catch(n){console.warn("Failed to restore session:",n),requestAnimationFrame(()=>U_.current?.focus())}},d_=Y0(()=>{let M=[];for(let m of V4){let n=Boolean(m?.archived_at),N0=typeof m?.agent_name==="string"?m.agent_name.trim():"",P0=typeof m?.chat_jid==="string"?m.chat_jid.trim():"";if(!N0||!P0)continue;M.push({type:"session",key:`session:${P0}`,label:`@${N0} — ${P0}${m?.is_active?" active":""}${n?" archived":""}`,chat:m,disabled:n?!S$:!R$})}if(X$)M.push({type:"action",key:"action:new",label:"New branch",action:"new",disabled:!1});if(q4)M.push({type:"action",key:"action:new-root",label:"New root session…",action:"new-root",disabled:!1});if(C1?.chat_jid)M.push({type:"action",key:"action:rollup",label:"Merge current w/ parent",action:"rollup",disabled:!Q4});if(Z$)M.push({type:"action",key:"action:rename",label:"Rename current session",action:"rename",disabled:a4});if(Y$)M.push({type:"action",key:"action:delete",label:"Delete current session",action:"delete",disabled:!1});return M},[V4,S$,R$,X$,q4,C1,Q4,Z$,Y$,a4]),vj=async(M)=>{if(M?.preventDefault)M.preventDefault();if(M?.stopPropagation)M.stopPropagation();if(typeof D0!=="function"||C0||M$.current)return;M$.current=!0,p0(!1);try{await D0()}catch(m){console.warn("Failed to rename session:",m)}finally{M$.current=!1}requestAnimationFrame(()=>U_.current?.focus())},mj=async()=>{if(typeof g0!=="function")return;p0(!1);try{await g0()}catch(M){console.warn("Failed to create session:",M)}requestAnimationFrame(()=>U_.current?.focus())},cj=async()=>{if(typeof n0!=="function")return;p0(!1);let M=typeof window<"u"?window.prompt("New root session handle (for example: ops)"):"",m=String(M||"").trim();if(!m){requestAnimationFrame(()=>U_.current?.focus());return}try{await n0(m)}catch(n){console.warn("Failed to create root session:",n)}requestAnimationFrame(()=>U_.current?.focus())},lj=async()=>{let M=typeof C1?.chat_jid==="string"?C1.chat_jid.trim():"";if(!M||O0||j0)return;p0(!1),g_(null),P_(null),Z_(!0);try{let m=await W1("default","/rollup",null,[],null,L0);z0?.(m),_?.(m);let n=m?.command;if(n?.status==="error"){let P0=n?.message||"Failed to merge current session with parent.";g_(P0),s?.(P0);return}let N0=typeof n?.rolled_up_to==="string"&&n.rolled_up_to.trim()?n.rolled_up_to.trim():M;X0?.(N0)}catch(m){let n=m?.message||"Failed to merge current session with parent.";g_(n),s?.(n),console.warn("Failed to merge session with parent:",m)}finally{Z_(!1)}requestAnimationFrame(()=>U_.current?.focus())},hj=async()=>{if(typeof j_!=="function")return;p0(!1);try{await j_(L0)}catch(M){console.warn("Failed to delete session:",M)}requestAnimationFrame(()=>U_.current?.focus())},u$=(M)=>{if(j)b0(M);else N_(M),E0(M),p_(M);requestAnimationFrame(()=>x0())},uB=(M)=>{let m=j?t0:h0,n=m&&!m.endsWith(`
`)?`
`:"",N0=`${m}${n}${M}`.trimStart();u$(N0)},s8=R(()=>{requestAnimationFrame(()=>{let M=U_.current;if(!M)return;try{M.focus({preventScroll:!0})}catch{M.focus()}})},[]),c1=R(()=>{k_({kind:"idle",title:"",detail:""})},[]),a8=R((M=H1.current,m=_1.current)=>{if(j)return;u$(AL(y1.current,M,m))},[j]),l1=R(()=>{y$.current=!0;let M=c_.current;if(!M){c1();return}try{M.stop()}catch{c_.current=null,c1()}},[c1]),t8=R(()=>{if(g_(null),P_(null),c_.current){l1();return}if(!M_?.showButton)return;if(M_.mode==="fallback"){s8(),k_({kind:"guidance",title:M_.title||"Use keyboard dictation",detail:M_.detail||"Use your keyboard dictation mic for voice input here."});return}if(!M_?.canStart||!M_?.recognitionCtor){k_({kind:"error",title:M_?.title||"Voice input unavailable",detail:M_?.detail||"This browser does not expose native speech recognition in this context."});return}try{let M=new M_.recognitionCtor;if(c_.current=M,y1.current=String(h0||""),H1.current="",_1.current="",k$.current="",y$.current=!1,M.lang=typeof navigator<"u"&&navigator.language?navigator.language:"en-US",M.interimResults=!0,M.continuous=!1,"maxAlternatives"in M)M.maxAlternatives=1;M.onstart=()=>{k_({kind:"listening",title:"Listening…",detail:"Speak now. Tap the mic again to stop."})},M.onresult=(m)=>{let{finalText:n,interimText:N0}=kL(m?.results,m?.resultIndex||0);if(n)H1.current=`${H1.current} ${n}`.trim();_1.current=N0,a8(),k_({kind:"listening",title:"Listening…",detail:N0?`Heard: ${N0}`:"Speak now. Tap the mic again to stop."})},M.onerror=(m)=>{let n=String(m?.error||"").trim();if(k$.current=n,c_.current=null,_1.current="",n==="aborted"){c1();return}k_({kind:"error",title:"Voice input failed",detail:I9(n,M_)})},M.onend=()=>{let m=k$.current,n=y$.current,N0=Boolean(H1.current.trim()||_1.current.trim());if(c_.current=null,y$.current=!1,k$.current="",_1.current.trim())H1.current=`${H1.current} ${_1.current}`.trim(),_1.current="";if(N0)a8(H1.current,"");if(m&&m!=="aborted")return;if(!N0&&!n){k_({kind:"error",title:"No speech detected",detail:I9("no-speech",M_)});return}c1()},k_({kind:"requesting_permission",title:"Starting voice input…",detail:"Allow microphone access if the browser asks."}),s8(),M.start()}catch(M){c_.current=null,k_({kind:"error",title:"Voice input failed",detail:M?.message||"Could not start native browser speech recognition."})}},[a8,c1,h0,s8,M_,l1]),gB=(M)=>{let m=M?.command?.model_label;if(m)return m;let n=M?.command?.message;if(typeof n==="string"){let N0=n.match(/•\s+([^\n]+?)\s+\(current\)/);if(N0?.[1])return N0[1].trim()}return null},rj=async(M)=>{if(j||J0)return;g_(null),P_(null),c0(!0);try{let m=await W1("default",M,null,[],null,L0),n=gB(m);return y0({model:n??H??null,thinking_level:m?.command?.thinking_level,thinking_level_label:m?.command?.thinking_level_label,supports_thinking:m?.command?.supports_thinking}),await T9(w4,L0,y0),P_(ML(M,m)),_?.(m),!0}catch(m){return console.error("Failed to switch model:",m),alert("Failed to switch model: "+m.message),!1}finally{c0(!1)}},bB=(M)=>{if(M.pointerType==="mouse")return;let m=U_.current?.value??(j?t0:h0);if(!wL(M,m,{searchMode:j,speechButtonVisible:I1,speechButtonActive:x$,canStartSpeech:Boolean(M_?.canStart&&M_?.recognitionCtor)}))return;M.preventDefault(),_$.current=!0,w_.current=!0,t8()},e8=(M)=>{if(!_$.current)return;if(M?.preventDefault?.(),_$.current=!1,c_.current)l1()},vB=(M)=>{if(w_.current){w_.current=!1,M.preventDefault();return}t8()},mB=async()=>{await rj("/cycle-model")},_3=async(M)=>{let m=typeof M==="string"?M:typeof M?.label==="string"?M.label:"";if(!m||J0)return;let n=TL(M,x);if(n.blocked){g_(null),P_(n.note);return}if(await rj(`/model ${m}`))I0(!1)},cB=(M)=>{if(!M||M.disabled)return;if(M.type==="session"){let m=M.chat;if(m?.archived_at)bj(m.chat_jid);else gj(m.chat_jid);return}if(M.type==="action"){if(M.action==="new"){mj();return}if(M.action==="new-root"){cj();return}if(M.action==="rollup"){lj();return}if(M.action==="rename"){vj();return}if(M.action==="delete")hj()}},lB=(M)=>{M.preventDefault(),M.stopPropagation(),t_.current={value:"",updatedAt:0},p0(!1),I0((m)=>!m)},hB=async()=>{if(j)return;J?.(),await t4("/compact",null,{includeMedia:!1,includeFileRefs:!1,includeFolderRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},rB=(M)=>{if(M==="queue"||M==="steer"||M==="auto")return M;return j0?"queue":void 0},t4=async(M,m,n={})=>{let N0=typeof M==="string"?M:h0;if(/^\/settings\s*$/i.test(N0.trim())){N_(""),requestAnimationFrame(()=>x0()),o1();return}if(/^\/help\s*$/i.test(N0.trim())){N_(""),requestAnimationFrame(()=>x0()),o1({section:"keyboard"});return}let{includeMedia:P0=!0,includeFileRefs:F_=!0,includeFolderRefs:i_=!0,includeMessageRefs:l_=!0,clearAfterSubmit:P1=!0,recordHistory:M1=!0}=n||{},pj=typeof M==="string"?M:M&&typeof M?.target?.value==="string"?M.target.value:h0,nj=typeof pj==="string"?pj:"";if(!nj.trim()&&(P0?T0.length===0:!0)&&(F_?V.length===0:!0)&&(i_?q.length===0:!0)&&(l_?U.length===0:!0))return;if(c_.current)l1();c1(),D_(!1),H_([]),K0(!1),r([]),p0(!1),g_(null),P_(null);let c5=P0?[...T0]:[],l5=F_?[...V]:[],h5=i_?[...q]:[],r5=l_?[...U]:[],N4=nj.trim();if(M1&&N4){let B4=T$.current,Q1=h4(B4.filter((j3)=>j3!==N4));if(Q1.push(N4),Q1.length>200)Q1.splice(0,Q1.length-200);T$.current=Q1,w$(Q1),b1.current=-1,v1.current=""}let XF=()=>{if(P0)i0([...c5]);if(F_)V0?.(l5);if(i_)q0?.(h5);if(l_)k0?.(r5);N_(N4),requestAnimationFrame(()=>x0())};if(P1)N_(""),i0([]),Q?.(),N?.(),D?.();(async()=>{try{let B4=await e?.({content:N4,submitMode:m,fileRefs:l5,folderRefs:h5,messageRefs:r5,mediaFiles:c5});if(B4){_?.(B4);return}let Q1=[];for(let V$ of c5){let p5=await W7(V$);Q1.push(p5.id)}let j3=l5.length?`Files:
${l5.map((V$)=>`- ${V$}`).join(`
`)}`:"",YF=h5.length?`Folders:
${h5.map((V$)=>`- ${V$}`).join(`
`)}`:"",LF=r5.length?`Referenced messages:
${r5.map((V$)=>`- message:${V$}`).join(`
`)}`:"",KF=Q1.length?`Attachments:
${Q1.map((V$,p5)=>{let qF=c5[p5]?.name||`attachment-${p5+1}`;return`- attachment:${V$} (${qF})`}).join(`
`)}`:"",VF=[N4,j3,YF,LF,KF].filter(Boolean).join(`

`),g$=await W1("default",VF,null,Q1,rB(m),L0);if(z0?.(g$),g$?.command)y0({model:g$.command.model_label??H??null,thinking_level:g$.command.thinking_level,thinking_level_label:g$.command.thinking_level_label,supports_thinking:g$.command.supports_thinking}),await T9(w4,L0,y0);P_(ML(N4,g$)),_?.(g$)}catch(B4){if(P1)XF();let Q1=B4?.message||"Failed to send message.";g_(Q1),s?.(Q1),console.error("Failed to post:",B4)}})()},pB=(M)=>{h?.(M)},nB=R((M)=>{SW({queuedItem:M,onRemoveQueuedFollowup:_0,setSubmitError:g_,setSubmitNotice:P_,setMediaFiles:i0,onSetFileRefs:V0,onSetFolderRefs:q0,onSetMessageRefs:k0,setContent:N_,textareaRef:U_,resizeTextarea:x0})},[_0,V0,q0,k0,x0]),h2=R((M)=>{if(j||!R0&&!w0||M?.isComposing)return!1;let m=()=>{M.preventDefault?.(),M.stopPropagation?.()},n=()=>{t_.current={value:"",updatedAt:0}};if(M.key==="Escape"){if(m(),n(),R0)I0(!1);if(w0)p0(!1);return!0}if(R0){if(M.key==="ArrowDown"){if(m(),n(),U0.length>0)G_((N0)=>(N0+1)%U0.length);return!0}if(M.key==="ArrowUp"){if(m(),n(),U0.length>0)G_((N0)=>(N0-1+U0.length)%U0.length);return!0}if((M.key==="Enter"||M.key==="Tab")&&U0.length>0)return m(),n(),_3(U0[Math.max(0,Math.min(Y_,U0.length-1))]),!0;if(A5(M)&&U0.length>0){m();let N0=W9(t_.current,M.key);t_.current=N0;let P0=O9(U0,N0.value,Y_,(F_)=>MW(F_));if(P0>=0)G_(P0);return!0}}if(w0){if(M.key==="ArrowDown"){if(m(),n(),d_.length>0)z_((N0)=>(N0+1)%d_.length);return!0}if(M.key==="ArrowUp"){if(m(),n(),d_.length>0)z_((N0)=>(N0-1+d_.length)%d_.length);return!0}if((M.key==="Enter"||M.key==="Tab")&&d_.length>0)return m(),n(),cB(d_[Math.max(0,Math.min(u0,d_.length-1))]),!0;if(A5(M)&&d_.length>0){m();let N0=W9(t_.current,M.key);t_.current=N0;let P0=O9(d_,N0.value,u0,(F_)=>F_.label);if(P0>=0)z_(P0);return!0}}return!1},[j,R0,w0,U0,Y_,d_,u0,_3]),dB=(M)=>{if(M.isComposing)return;if(j&&M.key==="Escape"){M.preventDefault(),b0(""),L?.();return}if(h2(M))return;let m=U_.current?.value??(j?t0:h0);if(wL(M,m,{searchMode:j,speechButtonVisible:I1,speechButtonActive:x$,canStartSpeech:Boolean(M_?.canStart&&M_?.recognitionCtor)})){M.preventDefault(),_$.current=!0,t8();return}if(zL(M,m,{searchMode:j,showSessionSwitcherButton:L$})){M.preventDefault(),K$();return}if(Z0&&W0.length>0){let n=U_.current?.value??(j?t0:h0);if(!String(n||"").match(/^@([a-zA-Z0-9_-]*)$/))K0(!1),r([]);else{if(M.key==="ArrowDown"){M.preventDefault(),o((N0)=>(N0+1)%W0.length);return}if(M.key==="ArrowUp"){M.preventDefault(),o((N0)=>(N0-1+W0.length)%W0.length);return}if(M.key==="Tab"||M.key==="Enter"){M.preventDefault(),$1(W0[i]);return}if(M.key==="Escape"){M.preventDefault(),K0(!1),r([]);return}}}if(u_&&E_.length>0){let n=U_.current?.value??(j?t0:h0);if(!String(n||"").startsWith("/"))D_(!1),H_([]);else{if(M.key==="ArrowDown"){M.preventDefault(),C_((N0)=>(N0+1)%E_.length);return}if(M.key==="ArrowUp"){M.preventDefault(),C_((N0)=>(N0-1+E_.length)%E_.length);return}if(M.key==="Tab"){M.preventDefault(),s0(E_[y_]);return}if(M.key==="Enter"&&!M.shiftKey){if(!m.includes(" ")){M.preventDefault();let P0=E_[y_];D_(!1),H_([]),t4(P0.name);return}}if(M.key==="Escape"){M.preventDefault(),D_(!1),H_([]);return}}}if(!j&&(M.key==="ArrowUp"||M.key==="ArrowDown")&&!M.metaKey&&!M.ctrlKey&&!M.altKey&&!M.shiftKey){let n=U_.current;if(!n)return;let N0=n.value||"",P0=n.selectionStart===0&&n.selectionEnd===0,F_=n.selectionStart===N0.length&&n.selectionEnd===N0.length;if(M.key==="ArrowUp"&&P0||M.key==="ArrowDown"&&F_){let i_=T$.current;if(!i_.length)return;M.preventDefault();let l_=b1.current;if(M.key==="ArrowUp"){if(l_===-1)v1.current=N0,l_=i_.length-1;else if(l_>0)l_-=1;b1.current=l_,u$(i_[l_]||"")}else{if(l_===-1)return;if(l_<i_.length-1)l_+=1,b1.current=l_,u$(i_[l_]||"");else b1.current=-1,u$(v1.current||""),v1.current=""}requestAnimationFrame(()=>{let P1=U_.current;if(!P1)return;let M1=P1.value.length;P1.selectionStart=M1,P1.selectionEnd=M1});return}}if(M.key==="Enter"&&!M.shiftKey&&(M.ctrlKey||M.metaKey)){if(M.preventDefault(),j){if(m.trim())Z?.(m.trim(),G,{images:A0,attachments:e0})}else t4(m,"steer");return}if(M.key==="Enter"&&!M.shiftKey){if(M.preventDefault(),j){if(m.trim())Z?.(m.trim(),G,{images:A0,attachments:e0})}else t4(m);return}if(M.key==="Escape"){if(R0||w0||u_||Z0)return;M.preventDefault(),U_.current?.blur()}},iB=(M)=>{if(DW(M,_$.current)){if(M.preventDefault(),_$.current=!1,c_.current)l1()}},$3=(M)=>{let m=Array.from(M||[]).filter((n)=>n instanceof File&&!String(n.name||"").startsWith(".DS_Store"));if(!m.length)return;i0((n)=>[...n,...m]),g_(null)},oB=(M)=>{$3(M.target.files),M.target.value=""},sB=(M)=>{if(j)return;M.preventDefault(),M.stopPropagation(),K1.current+=1,K_(!0)},aB=(M)=>{if(j)return;if(M.preventDefault(),M.stopPropagation(),K1.current=Math.max(0,K1.current-1),K1.current===0)K_(!1)},tB=(M)=>{if(j)return;if(M.preventDefault(),M.stopPropagation(),M.dataTransfer)M.dataTransfer.dropEffect="copy";K_(!0)},eB=(M)=>{if(j)return;M.preventDefault(),M.stopPropagation(),K1.current=0,K_(!1),$3(M.dataTransfer?.files||[])},_F=(M)=>{if(j)return;let m=M.clipboardData?.items;if(!m||!m.length)return;let n=[];for(let N0 of m){if(N0.kind!=="file")continue;let P0=N0.getAsFile?.();if(P0)n.push(P0)}if(n.length>0)M.preventDefault(),$3(n)},$F=(M)=>{i0((m)=>m.filter((n,N0)=>N0!==M))},jF=()=>{g_(null),i0([]),Q?.(),N?.(),D?.()},GF=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((M)=>{let{latitude:m,longitude:n,accuracy:N0}=M.coords,P0=`${m.toFixed(5)}, ${n.toFixed(5)}`,F_=Number.isFinite(N0)?` ±${Math.round(N0)}m`:"",i_=`https://maps.google.com/?q=${m},${n}`,l_=`Location: ${P0}${F_} ${i_}`;uB(l_)},(M)=>{let m=M?.message||"Unable to retrieve location.";alert(`Location error: ${m}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};u(()=>{if(!R0)return;t_.current={value:"",updatedAt:0},d(!0),w4(L0).then((M)=>{l0(CL(M)),y0(M)}).catch((M)=>{console.warn("Failed to load model list:",M),l0([])}).finally(()=>{d(!1)})},[R0,H]),u(()=>{if(j)I0(!1),p0(!1),D_(!1),H_([]),K0(!1),r([])},[j]),u(()=>{if(w0&&!L$)p0(!1)},[w0,L$]),u(()=>{if(!R0)return;let M=U0.findIndex((m)=>m?.label===H);G_(M>=0?M:0)},[R0,U0,H]),u(()=>{if(!w0)return;z_(HW(d_,L0)),t_.current={value:"",updatedAt:0}},[w0,L0,d_]),u(()=>{if(!R0)return;let M=(m)=>{let n=g1.current,N0=k1.current,P0=m.target;if(n&&n.contains(P0))return;if(N0&&N0.contains(P0))return;I0(!1)};return document.addEventListener("pointerdown",M),()=>document.removeEventListener("pointerdown",M)},[R0]),u(()=>{if(!w0)return;let M=(m)=>{let n=e1.current,N0=c4.current,P0=m.target;if(n&&n.contains(P0))return;if(N0&&N0.contains(P0))return;p0(!1)};return document.addEventListener("pointerdown",M),()=>document.removeEventListener("pointerdown",M)},[w0]),u(()=>{if(j||!R0&&!w0)return;let M=(m)=>{h2(m)};return document.addEventListener("keydown",M,!0),()=>document.removeEventListener("keydown",M,!0)},[j,R0,w0,h2]),u(()=>{if(!R0)return;let M=g1.current;M?.focus?.(),M?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[R0,Y_,U0]),u(()=>{if(!w0)return;let M=e1.current;M?.focus?.(),M?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[w0,u0,d_.length]),u(()=>{if(!Z0||!U1.current)return;U1.current.querySelector?.(".slash-item.active")?.scrollIntoView?.({block:"nearest"})},[Z0,i,W0.length]),u(()=>{if(!u_||!x1.current)return;x1.current.querySelector?.(".slash-item.active")?.scrollIntoView?.({block:"nearest"})},[u_,y_,E_.length]),u(()=>{let M=(n)=>{if(!n||typeof n!=="object")return!1;if(n.isContentEditable)return!0;if(typeof n.closest!=="function")return!1;return Boolean(n.closest('input, textarea, select, [contenteditable="true"], .compose-box, .compose-model-popup, .compose-session-popup, .settings-dialog, .workspace-sidebar, .editor-pane-container, .dock-panel, .timeline-menu-dropdown, .rename-branch-overlay, .agent-request-modal, .attachment-preview-modal, .vnc-pane-shell, .kanban-plugin, .mindmap-editor, .timeline-quick-actions'))},m=(n)=>{if(n.ctrlKey||n.metaKey||n.altKey)return;let N0=U_.current;if(!N0)return;let P0=document.activeElement===N0;if(n.key==="Escape"&&!P0&&!M(n.target)){n.preventDefault(),N0.focus();return}if(n.key==="/"&&!P0&&!M(n.target))n.preventDefault(),u$("/"),requestAnimationFrame(()=>{N0.focus(),N0.selectionStart=1,N0.selectionEnd=1,E0("/")})};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[]),u(()=>{let M=()=>{let F_=A$.current?.clientWidth||0;r_((i_)=>i_===F_?i_:F_)};M();let m=A$.current,n=0,N0=()=>{if(n)cancelAnimationFrame(n);n=requestAnimationFrame(()=>{n=0,M()})},P0=null;if(m&&typeof ResizeObserver<"u")P0=new ResizeObserver(()=>N0()),P0.observe(m);if(typeof window<"u")window.addEventListener("resize",N0);return()=>{if(n)cancelAnimationFrame(n);if(P0?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",N0)}},[j,H,b_?.agent_name,L$,x?.percent]);let ZF=(M)=>{let m=M.target.value;if(c_.current&&M?.isTrusted)l1();if(g_(null),P_(null),W_.kind==="guidance"||W_.kind==="error")c1();if(w0)p0(!1);if(x0(M.target),k9(m,{searchMode:j,showSessionSwitcherButton:L$})){u$(""),requestAnimationFrame(()=>{let n=U_.current;if(!n)return;n.value="",n.selectionStart=0,n.selectionEnd=0,n.focus()}),K$();return}u$(m)};return u(()=>{requestAnimationFrame(()=>x0())},[h0,t0,j]),u(()=>{if(!j)return;if(c_.current)l1();return},[j,l1]),u(()=>{if(c_.current)l1();c1()},[L0,c1,l1]),u(()=>{return()=>{if(!c_.current)return;try{c_.current.stop()}catch(M){console.debug("[compose] failed to stop speech recognition during cleanup",M)}c_.current=null}},[]),u(()=>{if(!q1)return;m_(Date.now());let M=setInterval(()=>m_(Date.now()),1000);return()=>clearInterval(M)},[q1,o0?.started_at,o0?.startedAt]),u(()=>{if(s_(0),E1?.mode!=="custom"||!Array.isArray(E1.frames)||E1.frames.length<=1)return;let M=typeof E1.intervalMs==="number"&&Number.isFinite(E1.intervalMs)&&E1.intervalMs>0?E1.intervalMs:120,m=setInterval(()=>{s_((n)=>(n+1)%E1.frames.length)},M);return()=>clearInterval(m)},[E1]),u(()=>{if(j)return;p_(h0)},[b5,L0,h0,j]),F`
        <div class="compose-box" data-testid="compose-box">
            ${R_&&F`
                <div class=${`compose-inline-status compose-speech-status compose-speech-status-${W_.kind}`} role="status" aria-live="polite">
                    <div class="compose-inline-status-row">
                        <span class=${_8({pulsing:n4})} aria-hidden="true"></span>
                        <span class="compose-inline-status-title">${W_.title}</span>
                    </div>
                    ${W_.detail&&F`<div class="compose-inline-status-detail">${W_.detail}</div>`}
                </div>
            `}
            ${S0&&!j&&F`
                <${P9}
                    items=${c}
                    onInjectQueuedFollowup=${pB}
                    onRemoveQueuedFollowup=${_0}
                    onMoveQueuedFollowup=${v}
                    onReturnQueuedFollowup=${nB}
                    onOpenFilePill=${b}
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
            ${o0&&!q1&&F`
                <div
                    class="compose-inline-status"
                    role="status"
                    aria-live="polite"
                    title=${Y4||""}
                >
                    <div class="compose-inline-status-row">
                        <span class=${_8({pulsing:!1})} aria-hidden="true"></span>
                        <span class="compose-inline-status-title">${C$}</span>
                        ${L4&&F`<span class="compose-inline-status-elapsed">${L4}</span>`}
                    </div>
                    ${Y4&&F`<div class="compose-inline-status-detail">${Y4}</div>`}
                </div>
            `}
            ${J1&&F`
                <div class="compose-inline-status compose-command-notice" role="status" aria-live="polite">
                    <div class="compose-inline-status-detail compose-command-notice-text" dangerouslySetInnerHTML=${{__html:Z1(J1)}}></div>
                </div>
            `}
            <div
                class=${`compose-input-wrapper${A_?" drag-active":""}`}
                onDragEnter=${sB}
                onDragOver=${tB}
                onDragLeave=${aB}
                onDrop=${eB}
            >
                ${L$&&F`
                    <div
                        ref=${c4}
                        class="compose-session-trigger-group compose-session-trigger-top"
                    >
                        <button
                            type="button"
                            class=${`compose-session-trigger compose-session-trigger-pill${w0?" active":""}`}
                            data-testid="session-switcher"
                            onClick=${uj}
                            title=${b_?.chat_jid||L0}
                            aria-label=${b_?.agent_name?`Manage sessions for @${b_.agent_name}`:"Manage Sessions/Agents"}
                            aria-expanded=${w0?"true":"false"}
                        >
                            <span class="compose-current-agent-label active">${b_?.agent_name?`@${b_.agent_name}`:"Sessions"}</span>
                        </button>
                    </div>
                `}
                <div class="compose-input-main">
                    ${K4&&F`
                        <div class="compose-file-refs">
                            ${U.map((M)=>{return F`
                                    <${L1}
                                        key=${"msg-"+M}
                                        prefix="compose"
                                        label=${"msg:"+M}
                                        title=${"Message reference: "+M}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>E?.(M)}
                                    />
                                `})}
                            ${V.map((M)=>{let m=M.split("/").pop()||M;return F`
                                    <${L1}
                                        prefix="compose"
                                        label=${m}
                                        title=${M}
                                        onClick=${()=>b?.(M)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>K?.(M)}
                                    />
                                `})}
                            ${q.map((M)=>{let m=M.split("/").pop()||M;return F`
                                    <${L1}
                                        prefix="compose"
                                        label=${m}
                                        title=${M}
                                        icon="folder"
                                        onClick=${()=>b?.(M)}
                                        removeTitle="Remove folder hint"
                                        onRemove=${()=>B?.(M)}
                                    />
                                `})}
                            ${T0.map((M,m)=>{let n=M?.name||`attachment-${m+1}`;return F`
                                    <${L1}
                                        key=${n+m}
                                        prefix="compose"
                                        label=${n}
                                        title=${n}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>$F(m)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${jF}
                                title="Clear all attachments and references"
                                aria-label="Clear all attachments and references"
                            >
                                Clear all
                            </button>
                        </div>
                    `}
                    <textarea
                        ref=${U_}
                        data-testid="compose-input"
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?t0:h0}
                        onInput=${ZF}
                        onKeyDown=${dB}
                        onKeyUp=${iB}
                        onPaste=${_F}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${Z0&&W0.length>0&&F`
                        <div class="slash-autocomplete" ref=${U1}>
                            ${W0.map((M,m)=>F`
                                <div
                                    key=${M.chat_jid||M.agent_name}
                                    class=${`slash-item${m===i?" active":""}`}
                                    onMouseDown=${(n)=>{n.preventDefault(),$1(M)}}
                                    onMouseEnter=${()=>o(m)}
                                >
                                    <span class="slash-name">@${M.agent_name}</span>
                                    <span class="slash-desc">${M.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${u_&&E_.length>0&&F`
                        <div class="slash-autocomplete" ref=${x1}>
                            ${E_.map((M,m)=>F`
                                <div
                                    key=${M.name}
                                    class=${`slash-item${m===y_?" active":""}`}
                                    onMouseDown=${(n)=>{n.preventDefault(),s0(M)}}
                                    onMouseEnter=${()=>C_(m)}
                                >
                                    <span class="slash-name">${M.name}</span>
                                    <span class="slash-desc">${M.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${R0&&!j&&F`
                        <div class="compose-model-popup" ref=${g1} tabIndex="-1" onKeyDown=${h2}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${B_&&F`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!B_&&U0.length===0&&F`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!B_&&U0.map((M,m)=>{let n=typeof M?.label==="string"?M.label:"",N0=C9(M?.contextWindow),P0=M?.name||null,F_=TL(M,x);return F`
                                        <button
                                            key=${n}
                                            type="button"
                                            role="menuitem"
                                            class=${`compose-model-popup-item compose-model-popup-model-item${Y_===m?" active":""}${H===n?" current-model":""}${F_.blocked?" context-blocked":""}`}
                                            onClick=${()=>{_3(M)}}
                                            disabled=${J0||F_.blocked}
                                            title=${[n,P0,N0,F_.title].filter(Boolean).join(" • ")}
                                        >
                                            <span class="compose-model-popup-model-stack">
                                                <span class="compose-model-popup-model-label">${kW(n,M?.contextWindow)}${P0?F` <span class="compose-model-popup-model-subtitle">${P0}</span>`:""}</span>
                                                ${F_.blocked&&F`<span class="compose-model-popup-model-note">${F_.note}</span>`}
                                            </span>
                                        </button>
                                    `})}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{mB()}}
                                    disabled=${J0}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${w0&&!j&&F`
                        <div class="compose-model-popup" data-testid="session-popup" ref=${e1} tabIndex="-1" onKeyDown=${h2}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${!f$&&F`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${f$&&V4.map((M,m)=>{let n=Boolean(M.archived_at),N0=M.chat_jid===(M.root_chat_jid||M.chat_jid),P0=!N0&&!M.is_active&&!n&&typeof j_==="function",F_=n&&v5,i_=t6(M,{currentChatJid:L0});return F`
                                        <div key=${M.chat_jid} class=${`compose-model-popup-item-row${n?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item session-item${n?" archived":""}${u0===m?" active":""}`}
                                                data-testid="session-item"
                                                onClick=${()=>{if(n){bj(M.chat_jid);return}gj(M.chat_jid)}}
                                                disabled=${n?!S$:!R$}
                                                title=${n?`Restore archived ${`@${M.agent_name}`}`:`Switch to ${`@${M.agent_name}`}`}
                                            >
                                                <span style=${UW(M)?"font-weight:700":""}>${i_}</span>
                                            </button>
                                            <button
                                                type="button"
                                                class="compose-model-popup-item-popout"
                                                title=${`Open @${M.agent_name} in new window`}
                                                aria-label=${`Open @${M.agent_name} in new window`}
                                                onClick=${(l_)=>{l_.stopPropagation(),p0(!1);let P1=new URL(window.location.href);P1.searchParams.set("chat_jid",M.chat_jid),P1.searchParams.set("chat_only","1");let M1=document.createElement("a");M1.href=P1.toString(),M1.target="_blank",M1.rel="noopener",M1.style.display="none",document.body.appendChild(M1),M1.click(),M1.remove()}}
                                            >
                                                <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M6 2h8v8"/>
                                                    <path d="M14 2 7 9"/>
                                                    <path d="M12 9v5H2V4h5"/>
                                                </svg>
                                            </button>
                                            ${(P0||F_)&&F`
                                                <button
                                                    type="button"
                                                    class="compose-model-popup-item-delete"
                                                    title=${F_?N0?"Permanently delete this archived session":"Permanently delete this archived branch":"Delete this branch"}
                                                    aria-label=${F_?N0?`Permanently delete archived session @${M.agent_name}`:`Permanently delete archived branch @${M.agent_name}`:`Delete @${M.agent_name}`}
                                                    onClick=${(l_)=>{if(l_.stopPropagation(),p0(!1),F_){m0?.(M.chat_jid);return}j_(M.chat_jid)}}
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
                            ${(X$||q4||Z$||Y$)&&F`
                                <div class="compose-model-popup-actions">
                                    ${X$&&F`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn primary${d_.findIndex((M)=>M.key==="action:new")===u0?" active":""}`}
                                            onClick=${()=>{mj()}}
                                            title="Create a new branch from this chat"
                                        >
                                            New branch
                                        </button>
                                    `}
                                    ${q4&&F`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${d_.findIndex((M)=>M.key==="action:new-root")===u0?" active":""}`}
                                            onClick=${()=>{cj()}}
                                            title="Create a clean root session such as web:ops"
                                        >
                                            New root…
                                        </button>
                                    `}
                                    ${C1?.chat_jid&&F`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${d_.findIndex((M)=>M.key==="action:rollup")===u0?" active":""}`}
                                            onClick=${()=>{lj()}}
                                            title=${Q4?`Merge this branch into ${C1.agent_name?`@${C1.agent_name}`:C1.chat_jid}`:"This branch cannot be merged while active or while it has children"}
                                            disabled=${!Q4}
                                        >
                                            Merge current w/ parent
                                        </button>
                                    `}
                                    ${Z$&&F`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${d_.findIndex((M)=>M.key==="action:rename")===u0?" active":""}`}
                                            onClick=${(M)=>{vj(M)}}
                                            title="Rename the current session"
                                            disabled=${a4}
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${Y$&&F`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn danger${d_.findIndex((M)=>M.key==="action:delete")===u0?" active":""}`}
                                            onClick=${()=>{hj()}}
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
                        <span class="compose-connection-status connection-status ${j$.statusClass}" title=${P$}>
                            ${e_}
                        </span>
                    `}
                    ${Q0&&F`
                    <div class="compose-meta-row">
                        ${m2&&F`
                            <div class="compose-model-meta">
                                <button
                                    ref=${k1}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${F0}
                                    aria-label="Open model picker"
                                    onClick=${lB}
                                    disabled=${J0}
                                >
                                    ${J0?"Switching…":c2}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!J0&&p&&F`
                                        <span class="compose-model-usage-hint" title=${F0}>
                                            ${p}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                        ${!j&&x&&x.percent!=null&&F`
                            <${JW}
                                usage=${x}
                                onCompact=${hB}
                                compactionLabel=${q1?L4||"0:00":""}
                                compactionTitle=${q1?C$||"Smart compaction":""}
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
                                onChange=${(M)=>X?.(M.currentTarget.value)}
                            >
                                <option value="current">Current</option>
                                <option value="root">Branch family</option>
                                <option value="all">All chats</option>
                            </select>
                        </label>
                        <label class="compose-search-filter-wrap" title="Only show messages with images">
                            <input type="checkbox" checked=${A0} onChange=${()=>L_((M)=>!M)} />
                            <span class="compose-search-filter-label">Images</span>
                        </label>
                        <label class="compose-search-filter-wrap" title="Only show messages with attachments">
                            <input type="checkbox" checked=${e0} onChange=${()=>O_((M)=>!M)} />
                            <span class="compose-search-filter-label">Attachments</span>
                        </label>
                        <button
                            class=${`compose-search-match-toggle ${H0==="and"?"active":""}`}
                            onClick=${()=>{let M=H0==="or"?"and":"or";f0(M),fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({searchMatchMode:M})}).catch((m)=>{})}}
                            title=${H0==="or"?"Any keyword (OR) — click for all keywords (AND)":"All keywords (AND) — click for any keyword (OR)"}
                            type="button"
                        >
                            ${H0==="or"?"OR":"AND"}
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
                    ${g2&&!j&&F`
                        <button
                            class="icon-btn location-btn"
                            onClick=${GF}
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
                            onClick=${vB}
                            onPointerDown=${bB}
                            onPointerUp=${e8}
                            onPointerCancel=${e8}
                            onPointerLeave=${e8}
                            title=${d4}
                            aria-label=${d4}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3z" />
                                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                                <path d="M12 19v3" />
                            </svg>
                        </button>
                    `}
                    ${i4&&!j&&F`
                        <button
                            class=${`icon-btn notification-btn${o4?" active":""}`}
                            onClick=${T}
                            title=${v2}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&F`
                        ${P&&f&&F`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${f}
                                title=${`Attach open file: ${P}`}
                                type="button"
                                disabled=${V.includes(P)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach file">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" multiple hidden onChange=${oB} />
                        </label>
                    `}
                    ${!j&&F`
                        <div class="compose-send-stack">
                                <button 
                                    class=${s4.className}
                                    data-testid="send-button"
                                    type="button"
                                    onClick=${()=>{t4()}}
                                    disabled=${s4.disabled}
                                    title=${s4.title}
                                    aria-label=${s4.ariaLabel}
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                                </button>
                                ${G$&&F`
                                    <button 
                                        class=${G$.className}
                                        data-testid="stop-button"
                                        type="button"
                                        onClick=${()=>{if(WW(G$.mode))t4("/abort","steer",{clearAfterSubmit:!1,includeMedia:!1,includeFileRefs:!1,includeFolderRefs:!1,includeMessageRefs:!1,recordHistory:!1})}}
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
    `}M0();function SL({kind:_="hidden",onSetupProvider:$,onDismiss:j}){if(_==="hidden")return null;let G=_==="provider-missing",Z=G?"Instance needs setup":"Instance is configured",X=G?"This instance is not yet configured. Open Settings and set up AI providers/models to start sending requests.":"This instance looks configured. Review or update provider and model settings in Settings.";return F`
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
  `}M0();function uL(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function gL(_){return String(_||"").trim()||"web:default"}function bL(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function vL(_){if(!_)return!1;return _.status!=="running"}function mL(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function cL({session:_,onClose:$,onInject:j,onRetry:G}){let Z=g(null),X=g(null),Y=_?.thinking?j5(_.thinking):"",L=_?.answer?Z1(_.answer,null):"";if(u(()=>{if(Z.current&&Y)E$(Z.current).catch((E)=>{console.debug("[btw-panel] Mermaid rendering failed for BTW thinking content.",E)})},[Y]),u(()=>{if(X.current&&L)E$(X.current).catch((E)=>{console.debug("[btw-panel] Mermaid rendering failed for BTW answer content.",E)})},[L]),!_)return null;let V=_.status==="running",K=Boolean(String(_.answer||"").trim()),Q=Boolean(String(_.thinking||"").trim()),q=bL(_),B=vL(_),N=!V&&K,U=V?"Thinking…":_.status==="error"?"Error":"Done";return F`
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
                <details class="btw-block btw-thinking" open=${V?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${Z}
                        dangerouslySetInnerHTML=${{__html:Y}}
                    ></div>
                </details>
            `}
            ${q&&F`
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
    `}M0();function f9(_,$){try{if(_)_.name=$;return!0}catch(j){return!1}}function R9(_,$){try{return _?.contentWindow?.postMessage?.($,"*"),!0}catch(j){return!1}}function uW(_){let $=_?.artifact||{},j=$.kind||_?.kind||null;if(j!=="html"&&j!=="svg"&&j!=="session_tree")return null;if(j==="html"){let Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"";return Z?{kind:j,html:Z}:null}if(j==="svg"){let Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"";return Z?{kind:j,svg:Z}:null}let G=$.tree&&typeof $.tree==="object"?$.tree:_?.tree&&typeof _.tree==="object"?_.tree:null;return{kind:j,tree:G}}function gW(_){let $=_?.artifact&&typeof _.artifact==="object"?_.artifact:{},j=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",G=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:typeof _?.w==="string"?_.w:typeof _?.content==="string"?_.content:"",Z=$.tree&&typeof $.tree==="object"?$.tree:_?.tree&&typeof _.tree==="object"?_.tree:null,X=$.kind||_?.kind||null,Y=X==="session_tree"?"session_tree":X==="svg"||j?"svg":"html";if(Y==="session_tree")return{kind:Y,tree:Z};if(Y==="svg")return j?{kind:Y,svg:j}:{kind:Y};return G?{kind:Y,html:G}:{kind:Y}}function t$(_){return typeof _==="number"&&Number.isFinite(_)?_:null}function $_(_){return typeof _==="string"&&_.trim()?_.trim():null}function hL(_,$=!1){let G=(Array.isArray(_)?_:$?["interactive"]:[]).filter((Z)=>typeof Z==="string").map((Z)=>Z.trim().toLowerCase()).filter(Boolean);return Array.from(new Set(G))}var rL="__PICLAW_WIDGET_HOST__:";function lL(_){return JSON.stringify(_).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function S9(_,$){if(!_||_.type!=="generated_widget")return null;let j=uW(_);if(!j)return null;return{title:_.title||_.name||"Generated widget",subtitle:typeof _.subtitle==="string"?_.subtitle:"",description:_.description||_.subtitle||"",originPostId:Number.isFinite($?.id)?$.id:null,originChatJid:typeof $?.chat_jid==="string"?$.chat_jid:null,widgetId:_.widget_id||_.id||null,artifact:j,capabilities:hL(_.capabilities,_.interactive===!0),source:"timeline",status:"final"}}function pL(_){if(!_||typeof _!=="object")return null;let $=gW(_),j=$_(_?.widget_id)||$_(_?.widgetId)||$_(_?.tool_call_id)||$_(_?.toolCallId),G=$_(_?.tool_call_id)||$_(_?.toolCallId),Z=$_(_?.turn_id)||$_(_?.turnId),X=$_(_?.title)||$_(_?.name)||"Generated widget",Y=$_(_?.subtitle)||"",L=$_(_?.description)||Y,V=$_(_?.status),K=V==="loading"||V==="streaming"||V==="final"||V==="error"?V:"streaming";return{title:X,subtitle:Y,description:L,originPostId:t$(_?.origin_post_id)??t$(_?.originPostId),originChatJid:$_(_?.origin_chat_jid)||$_(_?.originChatJid)||$_(_?.chat_jid)||null,widgetId:j,artifact:$,capabilities:hL(_?.capabilities,!0),source:"live",status:K,turnId:Z,toolCallId:G,width:t$(_?.width),height:t$(_?.height),error:$_(_?.error)}}function nL(_){return S9(_,null)!==null}function O1(_){let $=$_(_?.toolCallId)||$_(_?.tool_call_id);if($)return $;let j=$_(_?.widgetId)||$_(_?.widget_id);if(j)return j;let G=t$(_?.originPostId)??t$(_?.origin_post_id);if(G!==null)return`post:${G}`;return null}function dL(_){let j=(_?.artifact||{}).kind||_?.kind||null,Z=(Array.isArray(_?.capabilities)?_.capabilities:[]).some((X)=>typeof X==="string"&&X.trim().toLowerCase()==="interactive");return j==="html"&&(_?.source==="live"||Z)}function iL(_){return dL(_)?"allow-downloads allow-scripts allow-same-origin allow-forms":"allow-downloads"}function G8(_){return{title:$_(_?.title)||"Generated widget",widgetId:$_(_?.widgetId)||$_(_?.widget_id),toolCallId:$_(_?.toolCallId)||$_(_?.tool_call_id),turnId:$_(_?.turnId)||$_(_?.turn_id),capabilities:Array.isArray(_?.capabilities)?_.capabilities:[],source:_?.source==="live"?"live":"timeline",status:$_(_?.status)||"final"}}function Z8(_){return{...G8(_),subtitle:$_(_?.subtitle)||"",description:$_(_?.description)||"",error:$_(_?.error)||null,width:t$(_?.width),height:t$(_?.height),runtimeState:_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null}}function X8(_){return`${rL}${JSON.stringify(Z8(_))}`}function oL(_){if(typeof _==="string"&&_.trim())return _.trim();if(!_||typeof _!=="object")return null;let $=$_(_.text)||$_(_.content)||$_(_.message)||$_(_.prompt)||$_(_.value);if($)return $;let j=_.data;if(typeof j==="string"&&j.trim())return j.trim();if(j&&typeof j==="object"){let G=$_(j.text)||$_(j.content)||$_(j.message)||$_(j.prompt)||$_(j.value);if(G)return G}return null}function sL(_){if(!_||typeof _!=="object")return!1;return _.close===!0||_.dismiss===!0||_.closeAfterSubmit===!0}function aL(_){let $=$_(_?.status);if($==="loading"||$==="streaming")return"Widget is loading…";if($==="error")return $_(_?.error)||"Widget failed to load.";if((_?.artifact?.kind||_?.kind)==="session_tree")return"Session tree widget is unavailable.";return"Widget artifact is missing or unsupported."}function bW(_){let $=G8(_);return`<script>
(function () {
  const meta = ${lL($)};
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

  const windowNamePrefix = ${lL(rL)};
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
</script>`}function tL(_){let $=_?.artifact||{},j=$.kind||_?.kind||null,G=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"",Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",X=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",Y=j==="svg"?Z:G;if(!Y)return"";let L=dL(_),V=["default-src 'none'","img-src data: blob: https: http:","style-src 'unsafe-inline'","font-src 'self' data: https: http:","media-src data: blob: https: http:","connect-src 'none'","frame-src 'none'",L?"script-src 'unsafe-inline' 'self'":"script-src 'none'","object-src 'none'","base-uri 'none'","form-action 'none'"].join("; "),K=j==="svg"?`<div class="widget-svg-shell">${Y}</div>`:Y,Q=L?bW(_):"";return`<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta http-equiv="Content-Security-Policy" content="${V}" />
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
<body>${K}</body>
</html>`}M0();function vW(_){let $=new Map,j=[];for(let Y of _||[])$.set(Y.id,{...Y,children:[],depth:0});for(let Y of _||[]){let L=$.get(Y.id);if(!L)continue;let V=Y.parentId?$.get(Y.parentId):null;if(V)V.children.push(L);else j.push(L)}let G=new Set;for(let[,Y]of $){if(Y.role!=="assistant"||!Y.toolName)continue;if(Y.children.length!==1)continue;let L=Y.children[0];if(L.role!=="toolResult")continue;Y.resultDetail=L.detail||null,Y.resultLength=L.contentLength||0,Y.resultId=L.id,Y.merged=!0,Y.children=L.children;for(let V of Y.children)V.parentId=Y.id;G.add(L.id)}let Z=j.filter((Y)=>!G.has(Y.id)),X=[];for(let Y=Z.length-1;Y>=0;Y--)Z[Y].depth=0,X.push(Z[Y]);while(X.length>0){let Y=X.pop(),L=Y.children.length>1;for(let V=Y.children.length-1;V>=0;V--)Y.children[V].depth=L?Y.depth+1:Y.depth,X.push(Y.children[V])}return Z}function mW(_){let $=[],j=[];for(let G=_.length-1;G>=0;G--)j.push(_[G]);while(j.length>0){let G=j.pop();$.push(G);for(let Z=G.children.length-1;Z>=0;Z--)j.push(G.children[Z])}return $}function eL(_){if(!_||_<=0)return"";if(_<1000)return`${_}`;if(_<1e6)return`${(_/1000).toFixed(1)}k`;return`${(_/1e6).toFixed(1)}M`}function y2(_){if(!_||_<=0)return"";if(_<1000)return`${_} chars`;if(_<1e6)return`${(_/1000).toFixed(1)}k chars`;return`${(_/1e6).toFixed(1)}M chars`}function cW(_){let $=_.type;if($==="model_change")return{tag:"model",tagClass:"system",text:`${_.preview?.replace("[model ","").replace("]","")||""}`};if($==="thinking_level_change")return{tag:"thinking",tagClass:"system",text:_.preview?.replace("[thinking ","").replace("]","")||""};if($==="compaction")return{tag:"compaction",tagClass:"system",text:_.preview?.replace("[compaction: ","").replace("]","")||""};if($==="label")return{tag:"label",tagClass:"system",text:_.preview?.replace("[label ","").replace("]","")||""};if($==="session_info")return{tag:"session",tagClass:"system",text:_.preview?.replace("[session name ","").replace("]","")||""};if($==="branch_summary")return{tag:"summary",tagClass:"system",text:_.preview||""};if($!=="message")return{tag:$||"?",tagClass:"system",text:_.preview||""};let j=_.role||"message";if(_.merged&&_.toolName){let Z=(_.toolInput||"").split(`
`)[0],X=Z.length>120?Z.slice(0,119)+"…":Z;return{tag:_.toolName,tagClass:"tool",text:X||""}}if(j==="assistant"&&_.toolName){let Z=(_.toolInput||"").split(`
`)[0],X=Z.length>120?Z.slice(0,119)+"…":Z;return{tag:_.toolName,tagClass:"tool",text:X||"…"}}if(j==="toolResult"){let Z=(_.detail||"").split(`
`)[0],X=Z.length>120?Z.slice(0,119)+"…":Z;return{tag:`→ ${_.toolName||"result"}`,tagClass:"result",text:X}}if(j==="user"){let X=(_.previewText||_.detail||_.preview||"").replace(/^user:\s*"?/,"").replace(/"?\s*$/,"").split(`
`)[0];return{tag:"user",tagClass:"user",text:X.length>120?X.slice(0,119)+"…":X}}if(j==="assistant"){let X=(_.detail||_.preview||"").replace(/^assistant:\s*"?/,"").replace(/"?\s*$/,"").split(`
`)[0];return{tag:"assistant",tagClass:"assistant",text:X.length>120?X.slice(0,119)+"…":X}}return{tag:j,tagClass:"other",text:_.preview||""}}function lW(_,$=!1){let j=typeof _==="string"?_.trim():"";if(!j)return null;return{text:$?`/tree ${j} --summarize`:`/tree ${j}`,navigateTargetId:j,summarize:Boolean($)}}function _K(_){let $=typeof _==="string"?_.trim():"";if(!$.startsWith("/tree"))return null;let j=$.split(/\s+/).filter(Boolean);if(j[0]!=="/tree")return null;let G=null,Z=!1;for(let X=1;X<j.length;X++){let Y=j[X];if(Y==="--summarize"){Z=!0;continue}if(!G&&!Y.startsWith("--"))G=Y}return G?{targetId:G,summarize:Z}:null}function hW(_,$,j,G){let Z=Array.isArray(_)?_:[];if(Z.length===0)return null;let X=(L)=>typeof L==="string"&&Z.some((V)=>V?.id===L);if(X($))return $;if(X(j))return j;if(X(G))return G;let Y=Z.find((L)=>L?.active);if(Y?.id)return Y.id;return Z[0]?.id||null}function rW(_){if(!_||typeof _!=="object")return null;let $=typeof _.type==="string"?_.type:"",j=typeof _.preview==="string"?_.preview.trim():"",G=typeof _.error==="string"?_.error.trim():"",Z=_K(j),X=j||"tree command";if($==="submit_pending")return{tone:"pending",text:Z?`Sending ${X}`:"Sending tree command…",refreshDelays:[]};if($==="submit_sent")return{tone:"info",text:Z?`Running ${X}`:"Tree command sent.",refreshDelays:Z?[500,1500,3500,8000]:[]};if($==="submit_queued")return{tone:"info",text:Z?`Queued ${X}`:"Tree command queued.",refreshDelays:Z?[1200,3200,7000,12000]:[]};if($==="submit_failed")return{tone:"error",text:G?`Tree command failed: ${G}`:"Tree command failed.",refreshDelays:[]};if($==="refresh_building")return{tone:"pending",text:"Refreshing widget…",refreshDelays:[]};if($==="refresh_failed")return{tone:"error",text:G?`Refresh failed: ${G}`:"Refresh failed.",refreshDelays:[]};if($==="refresh_dashboard"||$==="refresh_ack")return{tone:"success",text:"Widget refreshed.",refreshDelays:[]};return null}function $K({widget:_,onWidgetEvent:$}){let j=_?.artifact?.tree&&typeof _.artifact.tree==="object"?_.artifact.tree:null,G=typeof _?.originChatJid==="string"&&_.originChatJid.trim()?_.originChatJid.trim():null,Z=_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null,X=Z?.lastHostUpdate&&typeof Z.lastHostUpdate==="object"?Z.lastHostUpdate:null,[Y,L]=C(()=>({loading:!j,error:null,data:j})),[V,K]=C(()=>j?.leafId||null),[Q,q]=C(""),B=g(null),N=g(null),U=g(j?.leafId||null),E=g(null),D=g(""),H=async()=>{L((A)=>({...A,loading:!0,error:null}));try{let A=G?`?chat_jid=${encodeURIComponent(G)}`:"",z=await fetch(`/agent/session-tree${A}`,{method:"GET",credentials:"same-origin",headers:{Accept:"application/json"}}),T=await z.json().catch(()=>({}));if(!z.ok)throw Error(T?.error||`HTTP ${z.status}`);L({loading:!1,error:null,data:T})}catch(A){L((z)=>({loading:!1,error:A?.message||"Failed to load tree.",data:z?.data||j||null}))}};E.current=H,u(()=>{H()},[G]);let k=Y0(()=>{let A=Y.data;if(!A||!Array.isArray(A.nodes)||A.nodes.length===0)return[];return mW(A.flat?vW(A.nodes):A.nodes)},[Y.data]);u(()=>{let A=hW(k,V,U.current,Y.data?.leafId||null);if(A!==V)K(A);if(U.current&&Y.data?.leafId===U.current)U.current=null},[k,V,Y.data?.leafId]);let O=Y0(()=>{let A=(Q||"").trim().toLowerCase();if(!A)return k;return k.filter((z)=>{return[z.preview,z.toolInput,z.toolInputFull,z.detail,z.toolName,z.role,z.id,z.resultDetail,z.type,z.label].some((w)=>typeof w==="string"&&w.toLowerCase().includes(A))})},[k,Q]),W=Y0(()=>O.find((A)=>A.id===V)||null,[O,V]),I=Y0(()=>rW(X),[X?.type,X?.preview,X?.error,X?.submittedAt]);u(()=>{if(N.current)N.current.scrollIntoView({block:"center",behavior:"auto"})},[V,Y.data?.leafId,O.length]),u(()=>{let A=_K(X?.preview);if(A?.targetId)U.current=A.targetId;let z=I?.refreshDelays||[];if(!z.length)return;let T=[G||"",X?.type||"",X?.submittedAt||"",X?.preview||""].join("|");if(D.current===T)return;D.current=T;let w=z.map((y)=>setTimeout(()=>E.current?.(),y));return()=>w.forEach((y)=>clearTimeout(y))},[G,X?.type,X?.submittedAt,X?.preview,I?.refreshDelays]);let x=(A=!1)=>{let z=W?.id,T=lW(z,A);if(!T)return;U.current=T.navigateTargetId,$?.({kind:"widget.submit",payload:T},_)},J=I?.tone||"info";return F`
        <div class="session-tree-widget">
            <div class="session-tree-toolbar">
                <div class="session-tree-toolbar-left">
                    <button class="session-tree-btn" type="button" onClick=${()=>H()} disabled=${Y.loading}>${Y.loading?"Loading…":"Refresh"}</button>
                    <input ref=${B}
                        class="st-search-input" type="text" placeholder="Filter\u2026"
                        value=${Q}
                        onInput=${(A)=>q(A.currentTarget.value)}
                        onKeyDown=${(A)=>{if(A.key==="Escape")q(""),A.currentTarget.blur()}}
                    />
                    ${Q&&F`<span class="session-tree-meta">${O.length} match${O.length!==1?"es":""}</span>`}
                    ${Y.error&&F`<span class="session-tree-error-inline">${Y.error}</span>`}
                </div>
                <div class="session-tree-toolbar-right">
                    ${I?.text&&F`<span class=${`session-tree-host-update ${J}`}>${I.text}</span>`}
                    ${Y.data?.capped&&F`<span class="session-tree-meta">Showing ${Y.data?.nodes?.length||0} of ${Y.data?.total||0}</span>`}
                    ${G&&F`<span class="session-tree-meta">${G}</span>`}
                </div>
            </div>

            <div class="session-tree-content">
                <div class="session-tree-list" role="tree" aria-label="Session tree">
                    ${Y.loading&&O.length===0&&!Q&&F`<div class="session-tree-empty">Loading session tree\u2026</div>`}
                    ${!Y.loading&&O.length===0&&!Q&&F`<div class="session-tree-empty">Session tree is empty.</div>`}
                    ${!Y.loading&&O.length===0&&Q&&F`<div class="session-tree-empty">No entries match \u201c${Q}\u201d</div>`}
                    ${O.map((A)=>{let z=V===A.id,T=`st-row${A.active?" active":""}${z?" selected":""}`,w=(A.children||[]).length>1,y=cW(A);return F`
                            <button key=${A.id} ref=${A.active||z?N:null}
                                class=${T} type="button" role="treeitem" aria-selected=${z}
                                onClick=${()=>K(A.id)}>
                                <span class="st-indent" style=${`width:${(A.depth||0)*16+6}px`}></span>
                                <span class=${`st-dot${A.active?" active":w?" branch":""}`}></span>
                                <span class=${`st-tag ${y.tagClass}`}>${y.tag}</span>
                                <span class="st-text">${y.text}</span>
                                ${A.merged&&A.resultLength>0&&F`<span class="st-size">${eL(A.resultLength)}</span>`}
                                ${!A.merged&&A.contentLength>3000&&F`<span class="st-size">${eL(A.contentLength)}</span>`}
                                ${A.hasThinking&&F`<span class="st-badge thinking">\u{1F4AD}</span>`}
                                ${A.label&&F`<span class="st-label">${A.label}</span>`}
                                ${A.active&&F`<span class="st-active">\u25C0</span>`}
                            </button>
                        `})}
                </div>

                <aside class="session-tree-sidebar">
                    ${W?F`
                        <div class="st-side-section">
                            <div class="st-side-label">Entry</div>
                            <div class="st-side-mono">${W.id}${W.resultId?` → ${W.resultId}`:""}</div>
                        </div>
                        <div class="st-side-section">
                            <div class="st-side-label">Type</div>
                            <div class="st-side-value">${W.role||W.type||"entry"}${W.toolName?` → ${W.toolName}`:""}${W.merged?" (merged)":""}</div>
                        </div>
                        ${W.toolInputFull&&F`
                            <div class="st-side-section">
                                <div class="st-side-label">${W.toolName==="bash"?"Command":"Input"}</div>
                                <pre class="st-side-code">${W.toolInputFull}</pre>
                            </div>
                        `}
                        ${W.resultDetail&&F`
                            <div class="st-side-section">
                                <div class="st-side-label">Result${W.resultLength?` (${y2(W.resultLength)})`:""}</div>
                                <pre class="st-side-code">${W.resultDetail}</pre>
                            </div>
                        `}
                        ${W.detail&&!W.toolInput&&F`
                            <div class="st-side-section">
                                <div class="st-side-label">${W.role==="toolResult"?"Output":"Content"}${W.contentLength?` (${y2(W.contentLength)})`:""}</div>
                                <pre class="st-side-code">${W.detail}</pre>
                            </div>
                        `}
                        ${W.rawDetail&&F`
                            <div class="st-side-section">
                                <div class="st-side-label">Raw prompt${W.rawContentLength?` (${y2(W.rawContentLength)})`:""}</div>
                                <pre class="st-side-code">${W.rawDetail}</pre>
                            </div>
                        `}
                        ${W.timestamp&&F`
                            <div class="st-side-section">
                                <div class="st-side-label">Time</div>
                                <div class="st-side-value">${new Date(W.timestamp).toLocaleString()}</div>
                            </div>
                        `}
                        ${(W.contentLength>0||W.hasThinking)&&F`
                            <div class="st-side-section">
                                <div class="st-side-label">Size</div>
                                <div class="st-side-badges">
                                    ${W.contentLength>0&&F`<span class="st-pill">${y2(W.contentLength)} content</span>`}
                                    ${W.hasThinking&&F`<span class="st-pill thinking">${y2(W.thinkingLength)} thinking</span>`}
                                    ${W.merged&&W.resultLength>0&&F`<span class="st-pill">${y2(W.resultLength)} result</span>`}
                                </div>
                            </div>
                        `}
                        <div class="st-side-actions">
                            <button class="session-tree-btn primary" type="button" onClick=${()=>x(!1)}>Navigate here</button>
                            <button class="session-tree-btn" type="button" onClick=${()=>x(!0)}>Navigate + summarize</button>
                        </div>
                    `:F`<div class="session-tree-empty side">Select an entry to inspect.</div>`}
                </aside>
            </div>
        </div>
    `}function jK({widget:_,onClose:$,onWidgetEvent:j}){let G=g(null),Z=g(!1),X=Y0(()=>tL(_),[_?.artifact?.kind,_?.artifact?.html,_?.artifact?.svg,_?.widgetId,_?.toolCallId,_?.turnId,_?.title]);if(u(()=>{if(!_)return;let H=(k)=>{if(k.key==="Escape")$?.()};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[_,$]),u(()=>{Z.current=!1},[X]),u(()=>{if(!_)return;let H=G.current;if(!H)return;let k=(J)=>{let A=X8(_),z=J==="widget.init"?G8(_):Z8(_);f9(H,A),R9(H,{__piclawGeneratedWidgetHost:!0,type:J,widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:z})},O=()=>{k("widget.init"),k("widget.update")},W=()=>{Z.current=!0,O()};H.addEventListener("load",W);let x=[0,40,120,300,800].map((J)=>setTimeout(O,J));return()=>{H.removeEventListener("load",W),x.forEach((J)=>clearTimeout(J))}},[X,_?.widgetId,_?.toolCallId,_?.turnId]),u(()=>{if(!_)return;let H=G.current;if(!H?.contentWindow)return;let k=X8(_),O=Z8(_);f9(H,k),R9(H,{__piclawGeneratedWidgetHost:!0,type:"widget.update",widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:O});return},[_?.widgetId,_?.toolCallId,_?.turnId,_?.status,_?.subtitle,_?.description,_?.error,_?.width,_?.height,_?.runtimeState]),u(()=>{if(!_)return;let H=(k)=>{let O=k?.data;if(!O||O.__piclawGeneratedWidget!==!0)return;let W=G.current,I=O1(_),x=O1({widgetId:O.widgetId,toolCallId:O.toolCallId});if(x&&I&&x!==I)return;if(!x&&W?.contentWindow&&k.source!==W.contentWindow)return;j?.(O,_)};return window.addEventListener("message",H),()=>window.removeEventListener("message",H)},[_,j]),!_)return null;let L=(_?.artifact||{}).kind||_?.kind||"html",V=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",K=typeof _?.subtitle==="string"&&_.subtitle.trim()?_.subtitle.trim():"",Q=_?.source==="live"?"live":"timeline",q=typeof _?.status==="string"&&_.status.trim()?_.status.trim():"final",B=Q==="live"?`Live widget • ${q.toUpperCase()}`:_?.originPostId?`Message #${_.originPostId}`:"Timeline launch",N=typeof _?.description==="string"&&_.description.trim()?_.description.trim():"",U=!X,E=aL(_),D=iL(_);return F`
        <div class="floating-widget-backdrop" onClick=${()=>$?.()}>
            <section
                class="floating-widget-pane"
                aria-label=${V}
                onClick=${(H)=>H.stopPropagation()}
            >
                <div class="floating-widget-header">
                    <div class="floating-widget-heading">
                        <div class="floating-widget-eyebrow">${B} • ${L.toUpperCase()}</div>
                        <div class="floating-widget-title">${V}</div>
                        ${(K||N)&&F`
                            <div class="floating-widget-subtitle">${K||N}</div>
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
                    ${L==="session_tree"?F`<${$K} widget=${_} onWidgetEvent=${j} />`:U?F`<div class="floating-widget-empty">${E}</div>`:F`
                                <iframe
                                    ref=${G}
                                    class="floating-widget-frame"
                                    title=${V}
                                    name=${X8(_)}
                                    sandbox=${D}
                                    allow="microphone; clipboard-read; clipboard-write"
                                    referrerpolicy="no-referrer"
                                    srcdoc=${X}
                                ></iframe>
                            `}
                </div>
            </section>
        </div>
    `}M0();S6();I_();W2();var pW=new Set,GK=new Set,u9=new Set,f4=new Map,ZK=!1,Y8=null;function nW(_=typeof window<"u"?window:null){let $=typeof _?.__piclawCurrentChatJid==="string"?_.__piclawCurrentChatJid.trim():"";if($)return $;try{let j=_?.location?.href||"http://localhost/",G=new URL(j).searchParams.get("chat_jid")?.trim()||"";if(G)return G}catch(j){}return"web:default"}function dW(_,$){let j=typeof _==="string"?_.trim():"";if(!j)return null;try{return new URL(j,$).href}catch{return null}}function XK(_){if(!_||typeof _.id!=="string"||!_.id.trim())return!1;return X_.register(_),pW.add(_.id),!0}function iW(_){return XK(_)}function oW(_){if(!_||typeof _.id!=="string"||!_.id.trim())return()=>{};return d$(_),GK.add(_.id),o7(),()=>{aX(_.id),GK.delete(_.id),o7()}}function sW(_){if(typeof _!=="function")return()=>{};return u9.add(_),()=>{u9.delete(_)}}function YK(_,$={}){let j=typeof _==="string"?_.trim():"";if(!j)return null;for(let G of[...u9].reverse())try{let Z=G(j,$);if(typeof Z==="string"&&Z.trim())return Z.trim()}catch(Z){console.warn("[addon-web] standalone tab URL resolver failed:",Z)}return null}function aW(_){if(!_||typeof _.id!=="string"||!_.id.trim()||typeof _.match!=="function"||typeof _.buildFrameUrl!=="function")return()=>{};return f4.set(_.id,_),()=>{if(f4.get(_.id)===_)f4.delete(_.id)}}function L8(_,$){for(let j of Array.from(f4.values()).reverse())try{if(j.match(_,$))return j}catch(G){console.warn("[addon-web] attachment preview matcher failed:",G)}return null}function LK(_){let $=typeof _==="string"?_.trim():"";if(!$)return null;return f4.get($)?.label||null}function KK(_){let $=typeof _==="string"?_.trim():"";if(!$)return null;return f4.get($)?.note||null}function VK(_,$,j){let G=typeof _==="string"?_.trim():"";if(!G)return null;let Z=f4.get(G);if(!Z)return null;try{return Z.buildFrameUrl($,j)||null}catch(X){return console.warn("[addon-web] attachment preview URL builder failed:",X),null}}function tW(_=typeof window<"u"?window:null){return{registerPane:iW,registerWorkspacePane:XK,registerSettingsPane:oW,registerStandaloneTabUrlResolver:sW,registerAttachmentPreview:aW,getCurrentChatJid:()=>nW(_)}}function g9(_=typeof window<"u"?window:null){let $=tW(_);if(!_||ZK)return $;return _.__piclaw_web=$,_.__piclaw_registerPane=$.registerPane,_.__piclaw_registerWorkspacePane=$.registerWorkspacePane,_.__piclaw_registerSettingsPane=$.registerSettingsPane,_.__piclaw_registerStandaloneTabUrlResolver=$.registerStandaloneTabUrlResolver,_.__piclaw_registerAttachmentPreview=$.registerAttachmentPreview,_.__piclawSettingsPaneRegistry={registerSettingsPane:$.registerSettingsPane,notifySettingsPanesChanged:()=>_?.dispatchEvent?.(new CustomEvent("piclaw:settings-panes-changed"))},ZK=!0,$}async function qK(_=typeof window<"u"?window:null){if(!_)return;if(Y8)return Y8;return Y8=(async()=>{g9(_);try{let $=await fetch("/agent/addons/web-entries",{credentials:"same-origin"});if(!$.ok)return;let j=await $.json().catch(()=>null),G=Array.isArray(j?.entries)?j.entries:[],Z=_.location?.origin||"http://localhost";for(let X of G){let Y=dW(X?.url,Z);if(!Y)continue;try{await import(Y)}catch(L){console.warn("[addon-web] Failed to load installed addon web entry:",Y,L)}}}catch($){console.warn("[addon-web] Failed to fetch installed addon web entries:",$)}})(),Y8}var eW=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/x-yaml","text/xml","text/yaml"]),_O=new Set(["text/markdown"]),$O=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),jO=new Set(["application/eml","message/rfc822"]);function e$(_){return typeof _==="string"?_.trim().toLowerCase():""}function GO(_){let $=e$(_);return!!$&&$.endsWith(".eml")}function ZO(_){let $=e$(_);return!!$&&$.endsWith(".pdf")}function XO(_){let $=e$(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}var YO=new Set(["application/zip","application/x-zip-compressed"]);function LO(_){let $=e$(_);return!!$&&$.endsWith(".zip")}function KO(_){let $=e$(_);return!!$&&($.endsWith(".html")||$.endsWith(".htm"))}function VO(_){let $=e$(_);if(!$)return!1;return $.endsWith(".sh")||$.endsWith(".bash")||$.endsWith(".zsh")||$.endsWith(".sb")||$.endsWith(".yaml")||$.endsWith(".yml")}function y5(_,$){let j=L8(_,$);if(j?.id)return j.id;let G=e$(_);if(ZO($)||G==="application/pdf")return"pdf";if(XO($)||$O.has(G))return"office";if(GO($)||jO.has(G))return"eml";if(LO($)||YO.has(G))return"archive";if(KO($)||G==="text/html")return"html";if(VO($))return"text";if(!G)return"unsupported";if(G.startsWith("video/"))return"video";if(G.startsWith("image/"))return"image";if(eW.has(G)||G.startsWith("text/"))return"text";return"unsupported"}function QK(_){let $=e$(_);return _O.has($)}function K8(_){switch(_){case"image":return"Image preview";case"video":return"Video player";case"pdf":return"PDF preview";case"office":return"Office viewer";case"eml":return"Email preview";case"html":return"HTML preview";case"text":return"Text preview";case"archive":return"ZIP archive preview";default:return LK(_)||"Preview unavailable"}}var qO=new TextDecoder("utf-8",{fatal:!1});function M2(_,$){return _[$]|_[$+1]<<8}function R4(_,$){return(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24)>>>0}function NK(_,$,j){return qO.decode(_.subarray($,$+j))}function QO(_){let $=Math.max(0,_.length-65557);for(let j=_.length-22;j>=$;j-=1)if(R4(_,j)===101010256)return j;return-1}function NO(_,$){let j=Math.max(0,$-20);for(let G=j;G<=$-4;G+=1)if(R4(_,G)===117853008)return!0;return!1}function BO(_){let $=new Set;for(let j of _){let G=j.path.replace(/\/+/g,"/");if(!G)continue;if(j.isDirectory){$.add(G.endsWith("/")?G.slice(0,-1):G);continue}let Z=G.split("/").filter(Boolean);if(Z.length<=1)continue;let X="";for(let Y=0;Y<Z.length-1;Y+=1)X=X?`${X}/${Z[Y]}`:Z[Y],$.add(X)}return $}function FO(_){return String(_||"").replace(/\\/g,"/").trim()}function BK(_){switch(Number(_)){case 0:return"Stored";case 8:return"Deflate";case 9:return"Deflate64";case 12:return"BZIP2";case 14:return"LZMA";case 93:return"Zstandard";default:return`Method ${_}`}}function FK(_){let $=_ instanceof Uint8Array?_:_ instanceof ArrayBuffer?new Uint8Array(_):new Uint8Array(_.buffer,_.byteOffset,_.byteLength);if($.length<22)throw Error("ZIP archive is too small to contain a valid directory.");let j=QO($);if(j<0)throw Error("ZIP archive directory could not be found.");if(NO($,j))throw Error("ZIP64 archives are not previewable yet.");let G=M2($,j+10),Z=R4($,j+12),X=R4($,j+16);if(X+Z>$.length)throw Error("ZIP archive directory is truncated.");let Y=[],L=X,V=X+Z;while(L<V){if(L+46>$.length)throw Error("ZIP archive directory entry is truncated.");if(R4($,L)!==33639248)throw Error("ZIP archive directory contains an unexpected record.");let q=M2($,L+8),B=M2($,L+10),N=R4($,L+20),U=R4($,L+24),E=M2($,L+28),D=M2($,L+30),H=M2($,L+32),k=L+46,O=k+E+D,W=O+H;if(W>$.length)throw Error("ZIP archive directory entry metadata is truncated.");let I=(q&2048)===2048,x=FO(NK($,k,E)),J=NK($,O,H),A=x.endsWith("/");if(x)Y.push({path:x,isDirectory:A,compressedSize:N,uncompressedSize:U,compressionMethod:B,comment:I?J:J});L=W}Y.sort((q,B)=>{if(q.isDirectory!==B.isDirectory)return q.isDirectory?-1:1;return q.path.localeCompare(B.path)});let K=Y.filter((q)=>!q.isDirectory),Q=BO(Y);return{entries:Y,summary:{fileCount:K.length,directoryCount:Q.size,totalEntries:Y.length,compressedBytes:K.reduce((q,B)=>q+B.compressedSize,0),uncompressedBytes:K.reduce((q,B)=>q+B.uncompressedSize,0)}}}function UK(_){if(!_)return null;if(_.uncompressedBytes<=0)return null;let $=1-_.compressedBytes/_.uncompressedBytes;if(!Number.isFinite($))return null;return`${Math.round($*100)}% smaller`}var UO="allow-scripts";function HO(_){if(!(_ instanceof Uint8Array)||_.length===0)return!0;let $=0,j=_.subarray(0,Math.min(_.length,4096));for(let G of j){if(G===0)return!1;if(G<32&&G!==9&&G!==10&&G!==13&&G!==12)$+=1}return $/j.length<0.02}function EO(_,$){let j=String(_?.content_type||"").trim().toLowerCase(),G=String($||"").trim().toLowerCase();if(j.startsWith("text/")||j==="application/json"||j==="application/xml")return!1;return j==="application/octet-stream"||G.endsWith(".sb")||G.endsWith(".sh")}function DO(_){try{return new TextDecoder("utf-8",{fatal:!1}).decode(_)}catch{return new TextDecoder().decode(_)}}function zO(_,$=null,j=null){let G=_?.metadata?.size,Z=_?.content_type||"application/octet-stream",X=j?.summary||null;return[{label:"Type",value:Z},{label:"Syntax",value:$},{label:"Entries",value:X?String(X.totalEntries):null},{label:"Files",value:X?String(X.fileCount):null},{label:"Folders",value:X?String(X.directoryCount):null},{label:"Compressed",value:X?a_(X.compressedBytes):null},{label:"Uncompressed",value:X?a_(X.uncompressedBytes):null},{label:"Savings",value:UK(X)},{label:"Size",value:typeof G==="number"?a_(G):null},{label:"Added",value:_?.created_at?T4(_.created_at):null}].filter((Y)=>Y.value)}function WO(_,$){let j=String(_?.content_type||"").trim().toLowerCase(),G=String($||"").trim().toLowerCase(),Z=G.split("/").pop()||G;if(G.endsWith(".yaml")||G.endsWith(".yml")||j==="text/yaml"||j==="application/yaml")return"yaml";if(G.endsWith(".json")||G.endsWith(".jsonl")||j==="application/json")return"json";if(G.endsWith(".xml")||G.endsWith(".svg")||j==="application/xml"||j==="text/xml"||j==="image/svg+xml")return"xml";if(G.endsWith(".html")||G.endsWith(".htm")||j==="text/html")return"html";if(G.endsWith(".css")||j==="text/css")return"css";if(G.endsWith(".ts")||G.endsWith(".tsx")||j==="text/typescript")return G.endsWith(".tsx")?"tsx":"ts";if(G.endsWith(".js")||G.endsWith(".jsx")||j==="text/javascript"||j==="application/javascript")return G.endsWith(".jsx")?"jsx":"js";if(G.endsWith(".py")||j==="text/x-python"||j==="application/x-python-code")return"python";if(G.endsWith(".go")||j==="text/x-go")return"go";if(G.endsWith(".c++")||G.endsWith(".cc")||G.endsWith(".cp")||G.endsWith(".cpp")||G.endsWith(".cxx")||G.endsWith(".hh")||G.endsWith(".hpp")||G.endsWith(".hxx")||j==="text/x-c++src"||j==="text/x-c++hdr")return"cpp";if(G.endsWith(".rb")||j==="text/x-ruby")return"ruby";if(G.endsWith(".rs")||j==="text/x-rustsrc")return"rust";if(G.endsWith(".ps1")||G.endsWith(".psm1")||G.endsWith(".psd1")||j==="text/x-powershell")return"powershell";if(Z==="dockerfile"||G.endsWith(".dockerfile"))return"dockerfile";if(G.endsWith(".md")||G.endsWith(".markdown")||j==="text/markdown")return"markdown";if(G.endsWith(".sh")||G.endsWith(".bash")||G.endsWith(".zsh")||Z===".bashrc"||Z===".bash_profile"||Z===".profile"||Z===".zshrc"||Z===".zprofile"||Z===".zshenv"||Z===".env"||Z.startsWith(".env.")||j==="text/x-shellscript")return"bash";if(G.endsWith(".sql"))return"sql";if(G.endsWith(".toml")||G.endsWith(".ini")||G.endsWith(".cfg")||G.endsWith(".conf")||G.endsWith(".properties")||j==="text/toml")return"toml";return null}function OO(_,$,j){let G=encodeURIComponent($||`attachment-${_}`),Z=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${Z}&name=${G}#media=${Z}&name=${G}`;if(j==="office"){let X=u1(_);return`/office-viewer/?url=${encodeURIComponent(X)}&name=${G}`}if(j==="eml")return`/eml-viewer/?media=${Z}&name=${G}`;return null}function HK({mediaId:_,info:$,onClose:j}){let G=$?.filename||`attachment-${_}`,Z=Y0(()=>L8($?.content_type,G),[$?.content_type,G]),X=Y0(()=>y5($?.content_type,G),[$?.content_type,G]),Y=Z?.label||K8(X),L=Y0(()=>QK($?.content_type),[$?.content_type]),[V,K]=C(X==="text"||X==="html"||X==="archive"),[Q,q]=C(""),[B,N]=C(null),[U,E]=C(null),D=g(null),H=Y0(()=>WO($,G),[$,G]),k=Y0(()=>H?gZ(H):null,[H]),O=Y0(()=>zO($,!L?k:null,B),[$,L,k,B]),W=Y0(()=>Z?VK(Z.id,_,G):OO(_,G,X),[Z,_,G,X]),I=Y0(()=>KK(Z?.id||X),[Z?.id,X]),x=Y0(()=>{if(!L||!Q)return"";return Z1(Q)},[L,Q]),J=Y0(()=>{if(L||!Q||!H)return"";return F6(Q,H)},[L,Q,H]);return u(()=>{let A=(z)=>{if(z.key==="Escape")j()};return document.addEventListener("keydown",A),()=>document.removeEventListener("keydown",A)},[j]),u(()=>{if(!D.current||!x)return;E$(D.current);return},[x]),u(()=>{let A=!1;async function z(){if(X!=="text"&&X!=="html"&&X!=="archive"){K(!1),E(null),q(""),N(null);return}K(!0),E(null),q(""),N(null);try{let T=await k7(_),w=new Uint8Array(await T.arrayBuffer());if(X==="text"||X==="html"){if(X==="text"&&EO($,G)&&!HO(w))throw Error("Attachment does not appear to contain text content.");let P=DO(w);if(!A)q(P);return}let y=FK(w);if(!A)N(y)}catch(T){if(!A){let w=T instanceof Error?T.message:String(T||"Unknown error");E(X==="archive"?`Failed to load ZIP preview. ${w}`:`Failed to load text preview. ${w}`)}}finally{if(!A)K(!1)}}return z(),()=>{A=!0}},[_,X]),F`
        <${n$} className="attachment-preview-portal-root">
            <div class="image-modal attachment-preview-modal" onClick=${j}>
                <div class="attachment-preview-shell" onClick=${(A)=>{A.stopPropagation()}}>
                    <div class="attachment-preview-header">
                        <div class="attachment-preview-heading">
                            <div class="attachment-preview-title">${G}</div>
                            <div class="attachment-preview-subtitle">${Y}</div>
                        </div>
                        <div class="attachment-preview-header-actions">
                            ${W&&F`
                                <a
                                    href=${W}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="attachment-preview-download"
                                    onClick=${(A)=>A.stopPropagation()}
                                >
                                    Open in Tab
                                </a>
                            `}
                            <a
                                href=${u1(_)}
                                download=${G}
                                class="attachment-preview-download"
                                onClick=${(A)=>A.stopPropagation()}
                            >
                                Download
                            </a>
                            <button class="attachment-preview-close" type="button" onClick=${j}>Close</button>
                        </div>
                    </div>
                    <div class="attachment-preview-body">
                        ${V&&F`<div class="attachment-preview-state">Loading preview…</div>`}
                        ${!V&&U&&F`<div class="attachment-preview-state">${U}</div>`}
                        ${!V&&!U&&X==="image"&&F`
                            <img class="attachment-preview-image" src=${u1(_)} alt=${G} />
                        `}
                        ${!V&&!U&&X==="video"&&F`
                            <video class="attachment-preview-video" src=${u1(_)} controls autoplay style="max-width:100%;max-height:100%;" />
                        `}
                        ${!V&&!U&&X==="html"&&F`
                            <iframe class="attachment-preview-frame" srcdoc=${Q||""} sandbox=${UO} title=${G}></iframe>
                        `}
                        ${!V&&!U&&(X==="pdf"||X==="office"||X==="eml"||Boolean(Z))&&W&&F`
                            <iframe class="attachment-preview-frame" src=${W} title=${G}></iframe>
                        `}
                        ${!V&&!U&&I&&F`
                            <div class="attachment-preview-readonly-note">${I}</div>
                        `}
                        ${!V&&!U&&X==="archive"&&B&&F`
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
                                        <strong class="attachment-preview-archive-card-value">${a_(B.summary.compressedBytes)}</strong>
                                    </div>
                                    <div class="attachment-preview-archive-card">
                                        <span class="attachment-preview-archive-card-label">Uncompressed</span>
                                        <strong class="attachment-preview-archive-card-value">${a_(B.summary.uncompressedBytes)}</strong>
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
                                            ${B.entries.map((A)=>F`
                                                <tr key=${A.path}>
                                                    <td class="attachment-preview-archive-name">${A.path}</td>
                                                    <td>${A.isDirectory?"Folder":"File"}</td>
                                                    <td>${A.isDirectory?"—":BK(A.compressionMethod)}</td>
                                                    <td>${A.isDirectory?"—":a_(A.compressedSize)}</td>
                                                    <td>${A.isDirectory?"—":a_(A.uncompressedSize)}</td>
                                                </tr>
                                            `)}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        `}
                        ${!V&&!U&&X==="text"&&L&&F`
                            <div
                                ref=${D}
                                class="attachment-preview-markdown post-content"
                                dangerouslySetInnerHTML=${{__html:x}}
                            />
                        `}
                        ${!V&&!U&&X==="text"&&!L&&J&&F`
                            <pre class="attachment-preview-text attachment-preview-code"><code dangerouslySetInnerHTML=${{__html:J}} /></pre>
                        `}
                        ${!V&&!U&&X==="text"&&!L&&!J&&F`
                            <pre class="attachment-preview-text">${Q}</pre>
                        `}
                        ${!V&&!U&&X==="unsupported"&&F`
                            <div class="attachment-preview-state">
                                Preview is not available for this file type yet. You can still download it directly.
                            </div>
                        `}
                    </div>
                    <div class="attachment-preview-meta">
                        ${O.map((A)=>F`
                            <div class="attachment-preview-meta-item" key=${A.label}>
                                <span class="attachment-preview-meta-label">${A.label}</span>
                                <span class="attachment-preview-meta-value">${A.value}</span>
                            </div>
                        `)}
                    </div>
                </div>
            </div>
        </${n$}>
    `}M0();I_();m6();Q9();function JO(_){if(!_||typeof _!=="object")return!1;if(_.isContentEditable)return!0;if(typeof _.closest!=="function")return!1;return Boolean(_.closest(["input","textarea","select",'[contenteditable="true"]',".compose-box",".compose-model-popup",".compose-session-popup",".settings-dialog",".workspace-sidebar",".workspace-explorer",".editor-pane-container",".dock-panel",".timeline-menu-dropdown",".rename-branch-overlay",".agent-request-modal",".attachment-preview-modal",".vnc-pane-shell",".kanban-plugin",".mindmap-editor"].join(", ")))}function AO(_){if(!_||typeof _!=="object")return!0;if(JO(_))return!1;let $=String(_.tagName||"").toUpperCase();if($==="BODY"||$==="HTML")return!0;if(typeof _.closest!=="function")return!0;return Boolean(_.closest(".container, .timeline, .post, .post-body, .post-content, .agent-status-panel"))}function kO(_){if(!A5(_))return!1;if(!AO(_?.target))return!1;return!i$.some((j)=>O$(_,j.id))}function EK(_){let $=new URL(window.location.href);if(_)$.searchParams.delete("chat_only");else $.searchParams.set("chat_only","1");window.location.href=$.toString()}function yO(_){let $=[],j=new Map(s$.map((Z)=>[Z.id,Z])),G=(Z,X={})=>{let Y=j.get(Z);if(!Y)return;$.push({...Y,...X})};if(G("toggle-workspace",{label:_.workspaceOpen?"Hide workspace":"Show workspace",description:_.workspaceOpen?"Hide the workspace sidebar.":"Show the workspace sidebar."}),!_.workspaceOpen&&!_.chatOnlyMode)G("open-explorer");if(G("toggle-chat-only",{label:_.chatOnlyMode?"Exit chat-only mode":"Chat-only mode",description:_.chatOnlyMode?"Return to the split workspace layout.":"Switch to the chat-only layout."}),typeof _.onOpenTerminalTab==="function")G("open-terminal-tab");if(typeof _.onOpenVncTab==="function")G("open-vnc-tab");if(typeof _.onToggleTerminalDock==="function")G("toggle-terminal-dock",{label:_.terminalVisible?"Hide terminal dock":"Show terminal dock",description:_.terminalVisible?"Hide the terminal dock.":"Show the terminal dock."});return G("open-settings"),$}function DK(_){if(_==="agent")return"Agents";if(_==="workspace")return"Workspace";return"Slash commands"}function MO(_){if(_?.imageUrl)return F`<img class="timeline-quick-actions-item-avatar" src=${_.imageUrl} alt="" aria-hidden="true" />`;return F`<span class="timeline-quick-actions-item-placeholder" aria-hidden="true">${_?.visualHint||""}</span>`}function V8(_,$){return F`
        <span class="timeline-quick-actions-keyhint">
            <kbd>${$}</kbd>
            <span>${_}</span>
        </span>
    `}function wO(_){let $=new URL(window.location.href);$.searchParams.set("chat_jid",_),$.searchParams.set("chat_only","1");let j=document.createElement("a");j.href=$.toString(),j.target="_blank",j.rel="noopener",j.style.display="none",document.body.appendChild(j),j.click(),j.remove()}function zK({activeChatAgents:_=[],currentChatJid:$="web:default",workspaceOpen:j=!1,chatOnlyMode:G=!1,terminalVisible:Z=!1,onSwitchChat:X,onToggleWorkspace:Y,onOpenTerminalTab:L,onOpenVncTab:V,onToggleTerminalDock:K,onPrefillCompose:Q}){let[q,B]=C(!1),[N,U]=C(""),[E,D]=C(0),[H,k]=C([]),[O,W]=C({workspaceCommands:null,slashCommands:null}),I=g(null),x=g(null),J=R(async()=>{try{let w=await K5();W(a$(w?.settings))}catch{W({workspaceCommands:null,slashCommands:null})}},[]);u(()=>{J()},[J]),u(()=>{let w=!1;return L5($).then((y)=>{if(w)return;k(Array.isArray(y?.commands)?y.commands:[])}).catch(()=>{if(w)return;k([])}),()=>{w=!0}},[$]);let A=Y0(()=>yO({workspaceOpen:j,chatOnlyMode:G,terminalVisible:Z,onOpenTerminalTab:L,onOpenVncTab:V,onToggleTerminalDock:K}),[G,L,V,K,Z,j]),z=Y0(()=>lY({agents:_,workspaceCommands:A,slashCommands:H,settings:O,query:N}),[_,N,O,H,A]);if(u(()=>{if(z.length===0){D(-1);return}if(!N.trim()){D(0);return}let w=N.toLowerCase().replace(/^[@/]+/,"").trim();if(!w){D(0);return}let y=0,P=0;for(let f=0;f<z.length;f++){let b=z[f],c=(b.title||"").toLowerCase().replace(/^[@/]+/,"");if(c===w){y=f;break}let h=0;if(c.startsWith(w))h=3;else if(c.includes(w))h=2;else if((b.subtitle||"").toLowerCase().includes(w))h=1;if(h>P)P=h,y=f}D(y)},[z,N]),u(()=>{if(!q)return;requestAnimationFrame(()=>x.current?.focus?.())},[q]),u(()=>{let w=(P)=>{if(!q){if(!kO(P))return;P.preventDefault(),U(String(P.key||"")),D(0),B(!0);return}if(P.key==="Escape"){P.preventDefault(),B(!1),U("");return}if(P.key==="ArrowDown"){P.preventDefault(),D((f)=>z.length>0?(f+1+z.length)%z.length:0);return}if(P.key==="ArrowUp"){P.preventDefault(),D((f)=>z.length>0?(f-1+z.length)%z.length:0);return}if(P.key==="Enter"&&z[E]){P.preventDefault();let f=z[E],b=P.altKey;if(f){if(f.kind==="agent"&&f.chatJid)if(b)wO(f.chatJid);else X?.(f.chatJid);else if(f.kind==="workspace"&&f.commandId){if(f.commandId==="toggle-workspace"||f.commandId==="open-explorer")Y?.();if(f.commandId==="toggle-chat-only")EK(G);if(f.commandId==="open-terminal-tab")L?.();if(f.commandId==="open-vnc-tab")V?.();if(f.commandId==="toggle-terminal-dock")K?.();if(f.commandId==="open-settings")window.dispatchEvent(new CustomEvent("piclaw:open-settings"))}else if(f.kind==="slash"&&f.commandName)Q?.(f.commandName)}B(!1),U("")}},y=(P)=>{if(!q)return;if(I.current?.contains(P.target))return;B(!1),U("")};return window.addEventListener("keydown",w,!0),document.addEventListener("pointerdown",y,!0),()=>{window.removeEventListener("keydown",w,!0),document.removeEventListener("pointerdown",y,!0)}},[G,E,z,L,V,Q,X,K,Y,q]),u(()=>{let w=(y)=>{let P=a$(y?.detail?.settings);if(y?.detail?.settings){W(P);return}J()};return window.addEventListener("focus",w),window.addEventListener("piclaw:quick-actions-settings-updated",w),()=>{window.removeEventListener("focus",w),window.removeEventListener("piclaw:quick-actions-settings-updated",w)}},[J]),!q)return null;let T=null;return F`
        <div class="timeline-quick-actions-portal">
            <div class="timeline-quick-actions-overlay">
                <div class="timeline-quick-actions" ref=${I}>
                    <div class="timeline-quick-actions-header">
                        <div class="timeline-quick-actions-search-row">
                            <input
                                ref=${x}
                                class="timeline-quick-actions-input"
                                type="text"
                                value=${N}
                                placeholder="Type to jump to an agent, workspace action, or slash command…"
                                onInput=${(w)=>{U(w.currentTarget?.value||""),D(0)}}
                            />
                            <div class="timeline-quick-actions-hints" aria-hidden="true">
                                ${V8("Move","↑↓")}
                                ${V8("Select","↵")}
                                ${V8("Pop out","Alt+↵")}
                                ${V8("Close","Esc")}
                            </div>
                        </div>
                    </div>
                    <div class="timeline-quick-actions-list">
                        ${z.length===0&&F`<div class="timeline-quick-actions-empty">No quick actions match.</div>`}
                        ${z.map((w,y)=>{let P=w.kind!==T;return T=w.kind,F`
                                ${P&&F`<div class="timeline-quick-actions-section">${DK(w.kind)}</div>`}
                                <button
                                    key=${w.key}
                                    type="button"
                                    class=${`timeline-quick-actions-item timeline-quick-actions-item-${w.kind}${y===E?" active":""}`}
                                    onMouseEnter=${null}
                                    onClick=${()=>{if(w.kind==="agent"&&w.chatJid)X?.(w.chatJid);if(w.kind==="workspace"&&w.commandId==="toggle-workspace")Y?.();if(w.kind==="workspace"&&w.commandId==="open-explorer")Y?.();if(w.kind==="workspace"&&w.commandId==="toggle-chat-only")EK(G);if(w.kind==="workspace"&&w.commandId==="open-terminal-tab")L?.();if(w.kind==="workspace"&&w.commandId==="open-vnc-tab")V?.();if(w.kind==="workspace"&&w.commandId==="toggle-terminal-dock")K?.();if(w.kind==="workspace"&&w.commandId==="open-settings")window.dispatchEvent(new CustomEvent("piclaw:open-settings"));if(w.kind==="slash"&&w.commandName)Q?.(w.commandName);B(!1),U("")}}
                                >
                                    <span class="timeline-quick-actions-item-media">
                                        ${MO(w)}
                                    </span>
                                    <span class="timeline-quick-actions-item-copy">
                                        <span class="timeline-quick-actions-item-title-row">
                                            <span class="timeline-quick-actions-item-title">${w.title}</span>
                                            ${w.actionHint?F`<span class="timeline-quick-actions-item-action-hint">${w.actionHint}</span>`:null}
                                        </span>
                                        <span class="timeline-quick-actions-item-subtitle">${w.subtitle}</span>
                                    </span>
                                    <span class="timeline-quick-actions-item-category">${w.categoryLabel||DK(w.kind)}</span>
                                </button>
                            `})}
                    </div>
                </div>
            </div>
        </div>
    `}M0();function WK({workspaceOpen:_,toggleWorkspace:$,chatOnlyMode:j,onOpenTerminalTab:G,onOpenVncTab:Z,onToggleTerminal:X,terminalVisible:Y}){let[L,V]=C(!1),[K,Q]=C({top:8,left:8}),q=g(null),B=g(null),N=g(null);u(()=>{if(typeof document>"u")return;let H=document.createElement("div");return H.className="timeline-menu-portal in-chat",document.body.appendChild(H),N.current=H,()=>{H.remove(),N.current=null}},[]),u(()=>{let H=()=>{if(_){let W=document.querySelector(".workspace-sidebar");if(W){let I=W.getBoundingClientRect();Q({top:I.top+8,left:I.left+8})}}else Q({top:8,left:8})};H();let k=new ResizeObserver(H),O=document.querySelector(".workspace-sidebar");if(O)k.observe(O);return window.addEventListener("resize",H),()=>{k.disconnect(),window.removeEventListener("resize",H)}},[_]),u(()=>{if(N.current)N.current.className=`timeline-menu-portal ${_?"in-workspace":"in-chat"}`},[_]),u(()=>{if(!N.current)return;let H=N.current.style;H.top=`${K.top}px`,H.left=`${K.left}px`,H.right="auto"},[K]),u(()=>{if(!L)return;let H=(k)=>{if(q.current?.contains(k.target))return;if(B.current?.contains(k.target))return;V(!1)};return document.addEventListener("mousedown",H,!0),()=>document.removeEventListener("mousedown",H,!0)},[L]),u(()=>{if(!L)return;let H=(k)=>{if(k.key==="Escape")V(!1)};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[L]),u(()=>{V(!1)},[_]);let U=R((H)=>{V(!1),H?.()},[]),E=R(()=>{let H=new URL(window.location.href);if(j)H.searchParams.delete("chat_only");else H.searchParams.set("chat_only","1");window.location.href=H.toString()},[j]),D=F`
        <button ref=${B} class=${`timeline-menu-btn${L?" active":""}`}
            onClick=${()=>V((H)=>!H)} title="Menu" aria-label="Menu"
            aria-haspopup="menu" aria-expanded=${L?"true":"false"}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
        </button>
        ${L&&F`
            <div class="workspace-menu-dropdown timeline-menu-dropdown" ref=${q} role="menu">
                <button class="workspace-menu-item" role="menuitem" onClick=${()=>U($)}>
                    ${_?"Hide workspace":"Show workspace"}
                </button>
                ${!_&&!j&&F`
                    <button class="workspace-menu-item" role="menuitem" onClick=${()=>U(()=>{$()})}>
                        Open explorer
                    </button>
                `}
                <button class=${`workspace-menu-item${j?" active":""}`} role="menuitem" onClick=${()=>U(E)}>
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
    `;return j2(()=>{if(N.current)Q$(D,N.current)}),null}M0();I_();var OK="PiClaw";function b9(_,$,j=!1){let G=_||"PiClaw",Z=G.charAt(0).toUpperCase(),X=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],Y=Z.charCodeAt(0)%X.length,L=X[Y],V=G.trim().toLowerCase(),K=typeof $==="string"?$.trim():"",Q=K?K:null,q=j||V==="PiClaw".toLowerCase()||V==="pi";return{letter:Z,color:L,image:Q||(q?"/static/icon-192.png":null)}}function JK(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function AK(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function kK(_){if(!_)return null;if(typeof document<"u"){let X=document.documentElement,Y=X?.dataset?.colorTheme||"",L=X?.dataset?.tint||"",V=getComputedStyle(X).getPropertyValue("--accent-color")?.trim();if(V&&(L||Y&&Y!=="default"))return V}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),G=0;for(let X=0;X<j.length;X+=1)G=(G*31+j.charCodeAt(X))%2147483647;let Z=Math.abs(G)%$.length;return $[Z]}function v9(..._){for(let $ of _)if(typeof $==="string"&&$.trim())return $.trim();return null}function TO(_){if(_.startsWith('"')&&_.endsWith('"')||_.startsWith("'")&&_.endsWith("'"))return _.slice(1,-1);return _}function yK(_){if(typeof _!=="string"||!_.trim())return null;let $=_.match(/^\s*cd\s+(.+?)(?:\s*(?:&&|;|\n))/s);if(!$?.[1])return null;return TO($[1].trim())||null}function MK(_,$){let j=$&&typeof $==="object"?$:null;if(!j)return null;let G=v9(j.cwd,j.working_directory,j.workingDirectory);if(G)return G;let Z=v9(j.project_dir,j.projectDir,j.repo_path,j.repoPath);if(Z)return Z;let X=v9(j.command),Y=yK(X);if(Y)return Y;if(Array.isArray(j.commands))for(let L of j.commands){let V=yK(L);if(V)return V}return null}var xO=F`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>
`,IO=F`
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
        <path d="M6 3v12"></path>
        <circle cx="18" cy="6" r="3"></circle>
        <circle cx="6" cy="18" r="3"></circle>
        <path d="M18 9a9 9 0 0 1-9 9"></path>
    </svg>
`,CO=F`
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M12 7v5l3 2"></path>
    </svg>
`,PO=1e4;function fO(_){return(Array.isArray(_)?_:_&&Array.isArray(_.status_hints)?_.status_hints:[]).filter((j)=>j&&typeof j==="object").map((j,G)=>({key:typeof j.key==="string"&&j.key.trim()?j.key.trim():`hint-${G}`,iconSvg:typeof j.icon_svg==="string"?j.icon_svg.trim():"",label:typeof j.label==="string"?j.label.trim():"",title:typeof j.title==="string"?j.title.trim():""})).filter((j)=>j.iconSvg&&j.label)}function RO(_){if(!(_ instanceof Set)||_.size===0)return null;let $=Array.from(_.values());for(let j=$.length-1;j>=0;j-=1){let G=$[j];if(G==="thought"||G==="draft")return G}return null}function SO(_){if(!Array.isArray(_)||_.length===0)return[];let $=new Map([["ssh",0]]);return _.map((j,G)=>({hint:j,index:G})).sort((j,G)=>{let Z=$.get(j.hint?.key)??100,X=$.get(G.hint?.key)??100;if(Z!==X)return Z-X;return j.index-G.index}).map((j)=>j.hint)}function uO(_,$){let j=typeof _==="string"?_.trim():"",G=typeof $==="string"?$.trim():"";return[j?j.split(/[\\/]+/).filter(Boolean).pop()||j:"",G].filter(Boolean).join(" • ")}function wK(_){if(!_||typeof _!=="object")return!1;let $=typeof _.type==="string"?_.type:"",j=Boolean(_.last_activity||_.lastActivity),G=$==="tool_call"||$==="tool_status"||Boolean(_.tool_name||_.tool_args);if(!j&&!G)return!1;return p$(_)!==null}function TK(_){if(!_||typeof _!=="object")return!1;return _.type==="intent"&&P6(_)!==null}function gO(_,$=Date.now()){if(!Number.isFinite(_))return!1;return $-_>=PO}function bO(_,$=Date.now()){if(!wK(_))return null;let j=p$(_);if(j===null||!gO(j,$))return null;let G=xK(new Date(j).toISOString(),$);return G?`${G} ago`:null}function vO(_,$=Date.now()){if(!TK(_))return null;if(P6(_)===null)return null;return D5(_,$)}function mO(_,$={}){let j=$?.isLastActivity??Boolean(_?.last_activity||_?.lastActivity),G=_?.title,Z=_?.status,X="";if(_?.type==="plan")X=G?`Planning: ${G}`:"Planning...";else if(_?.type==="tool_call")X=G?`Running: ${G}`:"Running tool...";else if(_?.type==="tool_status")X=G?`${G}: ${Z||"Working..."}`:Z||"Working...";else if(_?.type==="error")X=G||"Agent error";else X=G||Z||"Working...";if(!j)return X;if(X&&X!=="Working...")return`Recent activity: ${X}`;return"Last activity"}function xK(_,$=Date.now()){if(!_)return null;let j=$-new Date(_).getTime();if(!Number.isFinite(j)||j<0)return null;let G=Math.floor(j/1000),Z=Math.floor(G/3600),X=Math.floor(G%3600/60),Y=G%60;if(Z>0)return`${Z}h ${X}m`;if(X>0)return`${X}m ${Y}s`;return`${Y}s`}function m9({status:_,draft:$,plan:j,thought:G,pendingRequest:Z,intent:X,extensionPanels:Y=[],pendingPanelActions:L=new Set,onExtensionPanelAction:V,turnId:K,steerQueued:Q,onPanelToggle:q,showCorePanels:B=!0,showExtensionPanels:N=!0}){let H=(G0)=>{if(!G0)return{text:"",totalLines:0,fullText:""};if(typeof G0==="string"){let o=G0,Z0=o?o.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:o,totalLines:Z0,fullText:o}}let W0=G0.text||"",r=G0.fullText||G0.full_text||W0,i=Number.isFinite(G0.totalLines)?G0.totalLines:r?r.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:W0,totalLines:i,fullText:r}},k=160,O=(G0)=>String(G0||"").replace(/<\/?internal>/gi,""),W=(G0)=>{if(!G0)return 1;return Math.max(1,Math.ceil(G0.length/160))},I=(G0,W0,r,i={})=>{let o=(G0||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!o)return{text:"",omitted:0,totalLines:Number.isFinite(r)?r:0,visibleLines:0};let Z0=o.split(`
`),K0=i.direction==="tail",J0=Z0.length>W0?(K0?Z0.slice(-W0):Z0.slice(0,W0)).join(`
`):o,c0=Number.isFinite(r)?r:Z0.reduce((w0,p0)=>w0+W(p0),0),R0=J0?J0.split(`
`).reduce((w0,p0)=>w0+W(p0),0):0,I0=Math.max(c0-R0,0);return{text:J0,omitted:I0,totalLines:c0,visibleLines:R0}},x=H(j),J=H(G),A=H($),z=H({text:_?.output_preview||_?.outputPreview||"",fullText:_?.output_preview||_?.outputPreview||"",totalLines:_?.output_total_lines||_?.outputTotalLines}),T=Boolean(x.text)||x.totalLines>0,w=Boolean(J.text)||J.totalLines>0,y=Boolean(A.fullText?.trim()||A.text?.trim()),P=Boolean(z.fullText?.trim()||z.text?.trim()),f=Boolean(_||y||T||w||P||Z||X),b=Array.isArray(Y)&&Y.length>0,[c,h]=C(new Set),[_0,v]=C(null),[e,z0]=C(()=>Date.now()),j0=(G0)=>h((W0)=>{let r=new Set(W0),i=!r.has(G0);if(i)r.add(G0);else r.delete(G0);if(typeof q==="function")q(G0,i);return r});u(()=>{h(new Set),v(null)},[K]),u(()=>{if(!(Array.isArray(Y)&&Y.some((r)=>r?.started_at||r?.last_activity_at)))return;let W0=setInterval(()=>z0(Date.now()),1000);return()=>clearInterval(W0)},[Y]);let $0=Y0(()=>RO(c),[c]);u(()=>{if(!$0||typeof document>"u")return;let G0=(W0)=>{if(W0?.defaultPrevented)return;if(W0?.key!=="Escape")return;if(W0?.altKey||W0?.ctrlKey||W0?.metaKey||W0?.shiftKey)return;let r=W0?.target;if(r instanceof Element){if(r.closest?.('input, textarea, select, [contenteditable="true"]'))return;if(r.isContentEditable)return}if(h((i)=>{if(!(i instanceof Set)||!i.has($0))return i;let o=new Set(i);return o.delete($0),o}),typeof q==="function")q($0,!1);W0.preventDefault?.(),W0.stopPropagation?.()};return document.addEventListener("keydown",G0),()=>document.removeEventListener("keydown",G0)},[$0,q]);let L0=z$(_),B0=Boolean(_?.last_activity||_?.lastActivity),t=Y0(()=>wK(_),[_]),V0=Y0(()=>TK(_),[_]),q0=Y0(()=>MK(_?.tool_name,_?.tool_args),[_?.tool_name,_?.tool_args]),[k0,s]=C(null);u(()=>{if(!Boolean(V0||_?.retry_at||_?.retryAt||t))return;z0(Date.now());let W0=setInterval(()=>z0(Date.now()),1000);return()=>clearInterval(W0)},[t,V0,_?.retry_at,_?.retryAt,_?.last_event_at,_?.lastEventAt,_?.started_at,_?.startedAt,_?.type,_?.tool_name,_?.tool_args]),u(()=>{if(!(_?.type==="tool_call"||_?.type==="tool_status")||!q0){s(null);return}let W0=!0;return y7(q0).then((r)=>{if(!W0)return;if(r?.branch)s({branch:r.branch,repoPath:r.repo_path||null,path:q0});else s(null)}).catch(()=>{if(W0)s(null)}),()=>{W0=!1}},[_?.type,q0]);let X0=_?.turn_id||K,D0=kK(X0),C0=e6({steerQueued:Q}),g0=(G0)=>G0,n0=OL(_,{isLastActivity:B0}),j_=$8(_,{isLastActivity:B0}),m0=$8(null,{pendingRequest:!0}),d0=(G0)=>G0==="warning"?"#f59e0b":G0==="error"?"var(--danger-color)":G0==="success"?"var(--success-color)":D0,S0=X?.kind||"info",o0=d0(S0),v0=d0(_?.kind||(L0?"warning":"info")),a0=mO(_,{isLastActivity:B0}),h0=bO(_,e),N_=k0?.repoPath||"",t0=k0?.branch||"",b0=k0?uO(N_,t0):"",A0=fO(_?.status_hints||_?.statusHints),L_=Y0(()=>SO(A0),[A0]),e0=Y0(()=>L_.filter((G0)=>G0?.key==="ssh"),[L_]),O_=Y0(()=>L_.filter((G0)=>G0?.key!=="ssh"),[L_]);if((!B||!f)&&(!N||!b))return null;let H0=({panelTitle:G0,text:W0,fullText:r,totalLines:i,maxLines:o,titleClass:Z0,panelKey:K0})=>{let J0=c.has(K0),c0=r||W0||"",R0=K0==="thought"||K0==="draft"?O(c0):c0,I0=typeof o==="number",w0=J0&&I0,p0=K0==="tool-output",U0=I0?I(R0,o,i,{direction:p0?"tail":"head"}):{text:R0||"",omitted:0,totalLines:Number.isFinite(i)?i:0},l0=p0&&!J0?U0.text:R0;if(!R0&&!(Number.isFinite(U0.totalLines)&&U0.totalLines>0))return null;let Y_=`agent-thinking-body${I0?" agent-thinking-body-collapsible":""}`,G_=I0?`--agent-thinking-collapsed-lines: ${o};`:"";return F`
            <div
                class="agent-thinking"
                data-expanded=${J0?"true":"false"}
                data-collapsible=${I0?"true":"false"}
                data-panel-key=${K0||""}
                style=${D0?`--turn-color: ${D0};`:""}
            >
                <div class="agent-thinking-title ${Z0||""}">
                    ${D0&&F`<span class=${C0} aria-hidden="true"></span>`}
                    ${G0}
                    ${w0&&F`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${G0} panel`}
                            onClick=${()=>j0(K0)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${Y_}
                    style=${G_}
                    dangerouslySetInnerHTML=${{__html:j5(l0)}}
                />
                ${!J0&&U0.omitted>0&&F`
                    <button class="agent-thinking-truncation" onClick=${()=>j0(K0)}>
                        ▸ ${U0.omitted} more lines
                    </button>
                `}
                ${J0&&U0.omitted>0&&F`
                    <button class="agent-thinking-truncation" onClick=${()=>j0(K0)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},f0=Z?.tool_call?.title,T0=f0?`Awaiting approval: ${f0}`:"Awaiting approval",i0=vO(_,e),A_=(G0,W0,r=null)=>{let i=f6(G0),o=sX(G0,e),Z0=[r,o].filter(Boolean).join(" · "),K0=e6({steerQueued:Q,pulsing:z$(G0)||Boolean(o)});return F`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${W0?`--turn-color: ${W0};`:""}
                title=${G0?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${W0&&F`<span class=${K0} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${i}</span>
                    ${Z0&&F`<span class="agent-status-elapsed">${Z0}</span>`}
                </div>
                ${G0.detail&&F`<div class="agent-thinking-body">${G0.detail}</div>`}
            </div>
        `},K_=(G0,W0,r,i,o,Z0,K0,J0=8,c0=8)=>{let R0=Math.max(o-i,0.000000001),I0=Math.max(W0-J0*2,1),w0=Math.max(r-c0*2,1),p0=Math.max(K0-Z0,1),U0=K0===Z0?W0/2:J0+(G0.run-Z0)/p0*I0,l0=c0+(w0-(G0.value-i)/R0*w0);return{x:U0,y:l0}},E_=(G0,W0,r,i,o,Z0,K0,J0=8,c0=8)=>{if(!Array.isArray(G0)||G0.length===0)return"";return G0.map((R0,I0)=>{let{x:w0,y:p0}=K_(R0,W0,r,i,o,Z0,K0,J0,c0);return`${I0===0?"M":"L"} ${w0.toFixed(2)} ${p0.toFixed(2)}`}).join(" ")},H_=(G0,W0="")=>{if(!Number.isFinite(G0))return"—";return`${Math.abs(G0)>=100?G0.toFixed(0):G0.toFixed(2).replace(/\.0+$/,"").replace(/(\.\d*[1-9])0+$/,"$1")}${W0}`},y_=["var(--accent-color)","var(--success-color)","var(--warning-color, #f59e0b)","var(--danger-color)"],C_=(G0,W0)=>{let r=y_;if(!Array.isArray(r)||r.length===0)return"var(--accent-color)";if(r.length===1||!Number.isFinite(W0)||W0<=1)return r[0];let o=Math.max(0,Math.min(Number.isFinite(G0)?G0:0,W0-1))/Math.max(1,W0-1)*(r.length-1),Z0=Math.floor(o),K0=Math.min(r.length-1,Z0+1),J0=o-Z0,c0=r[Z0],R0=r[K0];if(!R0||Z0===K0||J0<=0.001)return c0;if(J0>=0.999)return R0;let I0=Math.round((1-J0)*1000)/10,w0=Math.round(J0*1000)/10;return`color-mix(in oklab, ${c0} ${I0}%, ${R0} ${w0}%)`},u_=(G0,W0="autoresearch")=>{let r=Array.isArray(G0)?G0.map((U0)=>({...U0,points:Array.isArray(U0?.points)?U0.points.filter((l0)=>Number.isFinite(l0?.value)&&Number.isFinite(l0?.run)):[]})).filter((U0)=>U0.points.length>0):[],i=r.map((U0,l0)=>({...U0,color:C_(l0,r.length)}));if(i.length===0)return null;let o=320,Z0=120,K0=i.flatMap((U0)=>U0.points),J0=K0.map((U0)=>U0.value),c0=K0.map((U0)=>U0.run),R0=Math.min(...J0),I0=Math.max(...J0),w0=Math.min(...c0),p0=Math.max(...c0);return F`
            <div class="agent-series-chart agent-series-chart-combined">
                <div class="agent-series-chart-header">
                    <span class="agent-series-chart-title">Tracked variables</span>
                    <span class="agent-series-chart-value">${i.length} series</span>
                </div>
                <div class="agent-series-chart-plot">
                    <svg class="agent-series-chart-svg" viewBox=${`0 0 ${o} ${Z0}`} preserveAspectRatio="none" aria-hidden="true">
                        ${i.map((U0)=>{let l0=U0?.key||U0?.label||"series",Y_=_0?.panelKey===W0&&_0?.seriesKey===l0;return F`
                                <g key=${l0}>
                                    <path
                                        class=${`agent-series-chart-line${Y_?" is-hovered":""}`}
                                        d=${E_(U0.points,o,Z0,R0,I0,w0,p0)}
                                        style=${`--agent-series-color: ${U0.color};`}
                                        onMouseEnter=${()=>v({panelKey:W0,seriesKey:l0})}
                                        onMouseLeave=${()=>v((G_)=>G_?.panelKey===W0&&G_?.seriesKey===l0?null:G_)}
                                    ></path>
                                </g>
                            `})}
                    </svg>
                    <div class="agent-series-chart-points-layer">
                        ${i.flatMap((U0)=>{let l0=typeof U0?.unit==="string"?U0.unit:"",Y_=U0?.key||U0?.label||"series";return U0.points.map((G_,u0)=>{let z_=K_(G_,o,Z0,R0,I0,w0,p0);return F`
                                    <button
                                        key=${`${Y_}-point-${u0}`}
                                        type="button"
                                        class="agent-series-chart-point-hit"
                                        style=${`--agent-series-color: ${U0.color}; left:${z_.x/o*100}%; top:${z_.y/Z0*100}%;`}
                                        onMouseEnter=${()=>v({panelKey:W0,seriesKey:Y_,run:G_.run,value:G_.value,unit:l0})}
                                        onMouseLeave=${()=>v((B_)=>B_?.panelKey===W0?null:B_)}
                                        onFocus=${()=>v({panelKey:W0,seriesKey:Y_,run:G_.run,value:G_.value,unit:l0})}
                                        onBlur=${()=>v((B_)=>B_?.panelKey===W0?null:B_)}
                                        aria-label=${`${U0?.label||"Series"} ${H_(G_.value,l0)} at run ${G_.run}`}
                                    >
                                        <span class="agent-series-chart-point"></span>
                                    </button>
                                `})})}
                    </div>
                </div>
                <div class="agent-series-legend">
                    ${i.map((U0)=>{let l0=U0.points[U0.points.length-1]?.value,Y_=typeof U0?.unit==="string"?U0.unit:"",G_=U0?.key||U0?.label||"series",u0=_0?.panelKey===W0&&_0?.seriesKey===G_?_0:null,z_=u0&&Number.isFinite(u0.value)?u0.value:l0,B_=u0&&typeof u0.unit==="string"?u0.unit:Y_,d=u0&&Number.isFinite(u0.run)?u0.run:null;return F`
                            <div key=${`${G_}-legend`} class=${`agent-series-legend-item${u0?" is-hovered":""}`} style=${`--agent-series-color: ${U0.color};`}>
                                <span class="agent-series-legend-swatch" style=${`--agent-series-color: ${U0.color};`}></span>
                                <span class="agent-series-legend-label">${U0?.label||"Series"}</span>
                                ${d!==null&&F`<span class="agent-series-legend-run">run ${d}</span>`}
                                <span class="agent-series-legend-value">${H_(z_,B_)}</span>
                            </div>
                        `})}
                </div>
            </div>
        `},D_=(G0)=>{if(!G0)return null;let W0=typeof G0?.key==="string"?G0.key:`panel-${Math.random()}`,r=c.has(W0),i=G0?.title||"Extension status",o=G0?.collapsed_text||"",Z0=String(G0?.state||"").replace(/[-_]+/g," ").replace(/^./,(z_)=>z_.toUpperCase()),K0=d0(G0?.state==="completed"?"success":G0?.state==="failed"?"error":G0?.state==="stopped"?"warning":"info"),J0=e6({steerQueued:Q,pulsing:G0?.state==="running"}),c0=typeof G0?.detail_markdown==="string"?G0.detail_markdown.trim():"",R0=typeof G0?.last_run_text==="string"?G0.last_run_text.trim():"",I0=typeof G0?.tmux_command==="string"?G0.tmux_command.trim():"",w0=Array.isArray(G0?.series)?G0.series:[],p0=Array.isArray(G0?.actions)?G0.actions:[],U0=G0?.started_at?D5(G0,e):null,l0=o,Y_=Boolean(c0||I0||U0),G_=Boolean(c0||w0.length>0||I0),u0=[i,l0].filter(Boolean).join(" — ");return F`
            <div
                class="agent-thinking agent-thinking-intent agent-thinking-autoresearch"
                aria-live="polite"
                data-expanded=${r?"true":"false"}
                style=${K0?`--turn-color: ${K0};`:""}
                title=${!r?u0||i:""}
            >
                <div class="agent-thinking-header agent-thinking-header-inline">
                    <button
                        class="agent-thinking-title intent agent-thinking-title-clickable"
                        type="button"
                        onClick=${()=>G_?j0(W0):null}
                    >
                        ${K0&&F`<span class=${J0} aria-hidden="true"></span>`}
                        <span class="agent-thinking-title-text">${i}</span>
                        ${l0&&F`<span class="agent-thinking-title-meta">${l0}</span>`}
                        ${U0&&F`<span class="agent-status-elapsed">${U0}</span>`}
                    </button>
                    ${(p0.length>0||G_)&&F`
                        <div class="agent-thinking-tools-inline">
                            ${p0.length>0&&F`
                                <div class="agent-thinking-actions agent-thinking-actions-inline">
                                    ${p0.map((z_)=>{let B_=`${W0}:${z_?.key||""}`,d=L?.has?.(B_);return F`
                                            <button
                                                key=${B_}
                                                class=${`agent-thinking-action-btn${z_?.tone==="danger"?" danger":""}`}
                                                onClick=${()=>V?.(G0,z_)}
                                                disabled=${Boolean(d)}
                                            >
                                                ${d?"Working…":z_?.label||"Run"}
                                            </button>
                                        `})}
                                </div>
                            `}
                            ${G_&&F`
                                <button
                                    class="agent-thinking-corner-toggle agent-thinking-corner-toggle-inline"
                                    type="button"
                                    aria-label=${`${r?"Collapse":"Expand"} ${i}`}
                                    title=${r?"Collapse details":"Expand details"}
                                    onClick=${()=>j0(W0)}
                                >
                                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        ${r?F`<polyline points="4 6 8 10 12 6"></polyline>`:F`<polyline points="4 10 8 6 12 10"></polyline>`}
                                    </svg>
                                </button>
                            `}
                        </div>
                    `}
                </div>
                ${r&&F`
                    <div class=${`agent-thinking-autoresearch-layout${Y_?"":" chart-only"}`}>
                        ${Y_&&F`
                            <div class="agent-thinking-autoresearch-meta-stack">
                                ${U0&&F`
                                    <div class="agent-thinking-autoresearch-elapsed">
                                        <span title="Experiment duration">⏱ ${U0}</span>
                                        ${G0?.last_activity_at&&G0?.state==="running"&&F`<span title="Since last activity">⟳ ${xK(G0.last_activity_at)} ago</span>`}
                                    </div>
                                `}
                                ${c0&&F`
                                    <div
                                        class="agent-thinking-body agent-thinking-autoresearch-detail"
                                        dangerouslySetInnerHTML=${{__html:j5(c0)}}
                                    />
                                `}
                                ${I0&&F`
                                    <div class="agent-series-chart-command">
                                        <div class="agent-series-chart-command-header">
                                            <span>Attach to session</span>
                                        </div>
                                        <div class="agent-series-chart-command-shell">
                                            <pre class="agent-series-chart-command-code">${I0}</pre>
                                            <button
                                                type="button"
                                                class="agent-series-chart-command-copy"
                                                aria-label="Copy tmux command"
                                                title="Copy tmux command"
                                                onClick=${()=>V?.(G0,{key:"copy_tmux",action_type:"autoresearch.copy_tmux",label:"Copy tmux"})}
                                            >
                                                ${xO}
                                            </button>
                                        </div>
                                    </div>
                                `}
                            </div>
                        `}
                        ${w0.length>0?F`
                                <div class="agent-series-chart-stack">
                                    ${u_(w0,W0)}
                                    ${R0&&F`<div class="agent-series-chart-note">${R0}</div>`}
                                </div>
                            `:F`<div class="agent-thinking-body agent-thinking-autoresearch-summary">Variable history will appear after the first completed run.</div>`}
                    </div>
                `}
            </div>
        `};return F`
        <div class="agent-status-panel">
            ${B&&X&&A_(X,o0)}
            ${N&&Array.isArray(Y)&&Y.map((G0)=>D_(G0))}
            ${B&&_?.type==="intent"&&A_(_,v0,i0)}
            ${B&&Z&&F`
                <div class="agent-status agent-status-request" aria-live="polite" style=${D0?`--turn-color: ${D0};`:""}>
                    ${m0==="dot"&&F`<span class=${C0} aria-hidden="true"></span>`}
                    ${m0==="spinner"&&F`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${T0}</span>
                </div>
            `}
            ${B&&T&&H0({panelTitle:g0("Planning"),text:x.text,fullText:x.fullText,totalLines:x.totalLines,panelKey:"plan"})}
            ${B&&y&&H0({panelTitle:g0("Draft"),text:A.text,fullText:A.fullText,totalLines:A.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${B&&w&&H0({panelTitle:g0("Thoughts"),text:J.text,fullText:J.fullText,totalLines:J.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${B&&P&&H0({panelTitle:g0(_?.output_truncated||_?.outputTruncated?"Tool output preview":"Tool output"),text:z.text,fullText:z.fullText,totalLines:z.totalLines,maxLines:5,titleClass:"tool-output",panelKey:"tool-output"})}
            ${B&&_&&_?.type!=="intent"&&F`
                <div class=${`agent-status${B0?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}${b0||A0.length>0||h0?" agent-status-multiline":""}`} aria-live="polite" style=${D0?`--turn-color: ${D0};`:""}>
                    ${D0&&n0&&F`<span class=${C0} aria-hidden="true"></span>`}
                    ${_?.type==="error"?F`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:j_==="spinner"&&F`<div class="agent-status-spinner"></div>`}
                    <div class="agent-status-copy">
                        <span class="agent-status-text">${a0}</span>
                        ${(b0||L_.length>0||h0)&&F`
                            <span class="agent-status-meta-row">
                                ${e0.map((G0)=>F`
                                    <span key=${G0.key} class="agent-status-hint-row" title=${G0.title||G0.label}>
                                        <span class="agent-status-hint-icon" dangerouslySetInnerHTML=${{__html:G0.iconSvg}}></span>
                                        <span class="agent-status-hint-label">${G0.label}</span>
                                    </span>
                                `)}
                                ${b0&&F`
                                    <span class="agent-status-git-row" title=${q0||b0}>
                                        <span class="agent-status-git-icon">${IO}</span>
                                        <span class="agent-status-git-label">
                                            ${N_&&F`<span class="agent-status-git-part">${N_}</span>`}
                                            ${N_&&t0&&F`<span class="agent-status-git-separator" aria-hidden="true">•</span>`}
                                            ${t0&&F`<span class="agent-status-git-part">${t0}</span>`}
                                        </span>
                                    </span>
                                `}
                                ${O_.map((G0)=>F`
                                    <span key=${G0.key} class="agent-status-hint-row" title=${G0.title||G0.label}>
                                        <span class="agent-status-hint-icon" dangerouslySetInnerHTML=${{__html:G0.iconSvg}}></span>
                                        <span class="agent-status-hint-label">${G0.label}</span>
                                    </span>
                                `)}
                                ${h0&&F`
                                    <span class="agent-status-hint-row agent-status-activity-row" title=${`${B0?"Recent activity":"Last event"} ${h0}`}>
                                        <span class="agent-status-hint-icon">${CO}</span>
                                        <span class="agent-status-hint-label">${h0}</span>
                                    </span>
                                `}
                            </span>
                        `}
                    </div>
                </div>
            `}
        </div>
    `}function IK({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:G,options:Z,chat_jid:X}=_,Y=G?.title||"Agent Request",L=G?.kind||"other",V=G?.rawInput||{},K=V.command||V.commands&&V.commands[0]||null,Q=V.diff||null,q=V.fileName||V.path||null,B=G?.description||V.description||V.explanation||null,U=(Array.isArray(G?.locations)?G.locations:[]).map((O)=>O?.path).filter((O)=>Boolean(O)),E=Array.from(new Set([q,...U].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:G,options:Z});let D=async(O)=>{try{await E2(j,O,X||null),$()}catch(W){console.error("Failed to respond to agent request:",W)}},H=async()=>{try{await J7(Y,`Auto-approved: ${Y}`),await E2(j,"approved",X||null),$()}catch(O){console.error("Failed to add to whitelist:",O)}},k=Z&&Z.length>0;return F`
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
                ${(B||K||Q||E.length>0)&&F`
                    <div class="agent-request-body">
                        ${B&&F`
                            <div class="agent-request-description">${B}</div>
                        `}
                        ${E.length>0&&F`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${E.map((O,W)=>F`<li key=${W}>${O}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${K&&F`
                            <pre class="agent-request-command">${K}</pre>
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
                    ${k?Z.map((O)=>F`
                            <button 
                                key=${O.optionId||O.id||String(O)}
                                class="agent-request-btn ${O.kind==="allow_once"||O.kind==="allow_always"?"primary":""}"
                                onClick=${()=>D(O.optionId||O.id||O)}
                            >
                                ${O.name||O.label||O.optionId||O.id||String(O)}
                            </button>
                        `):F`
                        <button class="agent-request-btn primary" onClick=${()=>D("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>D("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${H}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}M0();M0();I_();function M5(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>M5($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${M5(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function CK(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:M5(j)})).filter(($)=>$.value)}function cO(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function c9(_){if(!Array.isArray(_))return[];return _.filter(cO)}function q8(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let G=M5(j);return G?`Card submission: ${$} — ${G}`:`Card submission: ${$}`}if(typeof j==="object"){let Z=CK(j).map(({key:X,value:Y})=>`${X}: ${Y}`);return Z.length>0?`Card submission: ${$} — ${Z.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function PK(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=CK(_.data),G=j.length>0?j.slice(0,2).map(({key:X,value:Y})=>`${X}: ${Y}`).join(", "):M5(_.data)||null,Z=j.length;return{title:$,summary:G,fields:j,fieldCount:Z,submittedAt:_.submitted_at}}function f_(_){return typeof _==="string"?_.trim():""}function fK(_){return _.map(($)=>String($||"").trim()).filter(Boolean).join(`

`).replace(/\n{3,}/g,`

`).trim()}function lO(_,$){let j=[],G=[],Z=[];if(_.forEach((X,Y)=>{if(!X||typeof X!=="object")return;let L=f_(X.type);if(L==="text"){let V=f_(X.text)||f_(X.content);if(V)j.push(V);return}if(L==="resource_link"){let V=f_(X.uri),K=f_(X.title)||f_(X.name)||V;if(V&&K)j.push(K===V?V:`[${K}](${V})`);return}if(L==="resource"){let V=f_(X.title)||f_(X.name)||f_(X.uri)||"Embedded resource",K=f_(X.text);if(K)j.push(`### ${V}

\`\`\`
${K}
\`\`\``);else j.push(`### ${V}`);return}if(L==="generated_widget"){let V=f_(X.title)||f_(X.name)||"Generated widget",K=f_(X.description)||f_(X.subtitle);j.push(fK([`### ${V}`,K]));return}if(L==="adaptive_card"&&f_(X.fallback_text)){j.push(f_(X.fallback_text));return}if(L==="adaptive_card_submission"){let V=q8(X);if(f_(V))j.push(f_(V));return}if(L==="file"){let V=f_(X.name)||f_(X.filename)||f_(X.title)||`attachment:${$[Y]??Y+1}`;G.push(`- ${V}`);return}if(L==="image"||!L){let V=f_(X.name)||f_(X.filename)||f_(X.title)||`attachment:${$[Y]??Y+1}`;Z.push(`- ${V}`)}}),Z.length>0)j.push(`Images:
${Z.join(`
`)}`);if(G.length>0)j.push(`Attachments:
${G.join(`
`)}`);return fK(j)}function Q8(_){let $=_?.data||{},j=typeof $.content==="string"?$.content.replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd():"";if(j.trim())return j;let G=Array.isArray($.content_blocks)?$.content_blocks:[],Z=Array.isArray($.media_ids)?$.media_ids:[];return lO(G,Z)}function RK(_,$,j){try{return _.setAttribute($,j),!0}catch(G){return!1}}function SK(_,$){try{return _[$]=!0,!0}catch(j){return!1}}function uK(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;if(RK(j,"aria-disabled","true"),RK(j,"tabindex","-1"),"disabled"in j)SK(j,"disabled");if("readOnly"in j)SK(j,"readOnly")}}function hO(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let G=j[1].length===3?j[1].split("").map((Z)=>`${Z}${Z}`).join(""):j[1];return{r:parseInt(G.slice(0,2),16),g:parseInt(G.slice(2,4),16),b:parseInt(G.slice(4,6),16)}}function rO(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let G=Number(j[1]),Z=Number(j[2]),X=Number(j[3]);if(![G,Z,X].every((Y)=>Number.isFinite(Y)))return null;return{r:G,g:Z,b:X}}function gK(_){return hO(_)||rO(_)}function N8(_){let $=(X)=>{let Y=X/255;return Y<=0.03928?Y/12.92:((Y+0.055)/1.055)**2.4},j=$(_.r),G=$(_.g),Z=$(_.b);return 0.2126*j+0.7152*G+0.0722*Z}function pO(_,$){let j=Math.max(N8(_),N8($)),G=Math.min(N8(_),N8($));return(j+0.05)/(G+0.05)}function nO(_,$,j="#ffffff"){let G=gK(_);if(!G)return j;let Z=j,X=-1;for(let Y of $){let L=gK(Y);if(!L)continue;let V=pO(G,L);if(V>X)Z=Y,X=V}return Z}function l9(){let _=getComputedStyle(document.documentElement),$=(U,E)=>{for(let D of U){let H=_.getPropertyValue(D).trim();if(H)return H}return E},j=$(["--text-primary","--color-text"],"#0f1419"),G=$(["--text-secondary","--color-text-muted"],"#536471"),Z=$(["--bg-primary","--color-bg-primary"],"#ffffff"),X=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),Y=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),L=$(["--accent-color","--color-accent"],"#1d9bf0"),V=$(["--success-color","--color-success"],"#00ba7c"),K=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),Q=$(["--danger-color","--color-error"],"#f4212e"),q=$(["--border-color","--color-border"],"#eff3f4"),B=$(["--font-family"],"system-ui, sans-serif"),N=nO(L,[j,Z],j);return{fg:j,fgMuted:G,bgPrimary:Z,bg:X,bgEmphasis:Y,accent:L,good:V,warning:K,attention:Q,border:q,fontFamily:B,buttonTextColor:N}}function bK(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:G,accent:Z,good:X,warning:Y,attention:L,border:V,fontFamily:K}=l9();return{fontFamily:K,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:X,subtle:X},warning:{default:Y,subtle:Y},attention:{default:L,subtle:L}}},emphasis:{backgroundColor:G,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:X,subtle:X},warning:{default:Y,subtle:Y},attention:{default:L,subtle:L}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:V},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var dO=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),vK=!1,B8=null,mK=!1;function h9(_){_.querySelector(".adaptive-card-notice")?.remove()}function iO(_,$,j="error"){h9(_);let G=document.createElement("div");G.className=`adaptive-card-notice adaptive-card-notice-${j}`,G.textContent=$,_.appendChild(G)}function oO(_,$=(j)=>Z1(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function sO(_=($)=>Z1($,null)){return($,j)=>{try{let G=oO($,_);j.outputHtml=G.outputHtml,j.didProcess=G.didProcess}catch(G){console.error("[adaptive-card] Failed to process markdown:",G),j.outputHtml=String($??""),j.didProcess=!1}}}function aO(_){if(mK||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=sO(),mK=!0}async function tO(){if(vK)return;if(B8)return B8;return B8=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{vK=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),B8}function eO(){return globalThis.AdaptiveCards}function _J(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function $J(_){return dO.has(_)}function p9(_){if(!Array.isArray(_))return[];return _.filter(_J)}function jJ(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",G=(typeof _?.url==="string"?_.url:"")||void 0,Z=_?.data??void 0;return{type:$,title:j,data:Z,url:G,raw:_}}function r9(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>r9($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,G])=>`${j}: ${r9(G)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function GJ(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return r9($);return typeof $==="string"?$:String($)}function ZJ(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,G=(Z)=>{if(Array.isArray(Z))return Z.map((L)=>G(L));if(!Z||typeof Z!=="object")return Z;let Y={...Z};if(typeof Y.id==="string"&&Y.id in j&&String(Y.type||"").startsWith("Input."))Y.value=GJ(Y.type,j[Y.id],Y);for(let[L,V]of Object.entries(Y))if(Array.isArray(V)||V&&typeof V==="object")Y[L]=G(V);return Y};return G(_)}function XJ(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function YJ(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,G=j&&typeof j.title==="string"?j.title.trim():"",Z=XJ(_.completed_at||j?.submitted_at),X=[G||null,Z||null].filter(Boolean).join(" · ")||null;return{label:$,detail:X}}async function cK(_,$,j){if(!$J($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await tO()}catch(G){return console.error("[adaptive-card] Failed to load SDK:",G),!1}try{let G=eO();aO(G);let Z=new G.AdaptiveCard,X=l9();Z.hostConfig=new G.HostConfig(bK());let Y=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,L=$.state==="active"?$.payload:ZJ($.payload,Y);Z.parse(L),Z.onExecuteAction=(Q)=>{let q=jJ(Q);if(j?.onAction)h9(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(q)).catch((B)=>{console.error("[adaptive-card] Action failed:",B);let N=B instanceof Error?B.message:String(B||"Action failed.");iO(_,N||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",q)};let V=Z.render();if(!V)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",X.buttonTextColor);let K=YJ($);if(K){_.classList.add("adaptive-card-finished");let Q=document.createElement("div");Q.className=`adaptive-card-status adaptive-card-status-${$.state}`;let q=document.createElement("span");if(q.className="adaptive-card-status-label",q.textContent=K.label,Q.appendChild(q),K.detail){let B=document.createElement("span");B.className="adaptive-card-status-detail",B.textContent=K.detail,Q.appendChild(B)}_.appendChild(Q)}if(h9(_),_.appendChild(V),K)uK(V);return!0}catch(G){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,G),!1}}M0();S6();function lK({src:_,onClose:$}){return u(()=>{let j=(G)=>{if(G.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),F`
        <${n$} className="image-modal-portal-root">
            <div class="image-modal" onClick=${$}>
                <img src=${_} alt="Full size" />
            </div>
        </${n$}>
    `}var F8=0,n9=null,w5={activePostId:null,speaking:!1},d9=new Set;function o9(_={}){return _.window??(typeof window<"u"?window:null)}function hK(_={}){return o9(_)?.speechSynthesis||null}function i9(){let _={...w5};for(let $ of d9)try{$(_)}catch(j){console.warn("[post-speech] playback listener failed:",j)}}function s9(){return{...w5}}function rK(_){if(typeof _!=="function")return()=>{};return d9.add(_),_(s9()),()=>d9.delete(_)}function pK(_={}){let $=o9(_);return Boolean($&&$.speechSynthesis&&typeof $.SpeechSynthesisUtterance==="function")}function nK(_){let $=Q8(_);if(!$)return"";return String($).replace(/```[\s\S]*?```/g," Code block omitted. ").replace(/`([^`]+)`/g,"$1").replace(/!\[([^\]]*)\]\(([^)]+)\)/g,"$1").replace(/\[([^\]]+)\]\(([^)]+)\)/g,"$1").replace(/^#{1,6}\s+/gm,"").replace(/^>\s?/gm,"").replace(/^[-*+]\s+/gm,"• ").replace(/\n{3,}/g,`

`).replace(/\n\n+/g,". ").replace(/\s+/g," ").replace(/\s+([.,;:!?])/g,"$1").trim().slice(0,1600)}function dK(_={}){let $=hK(_);if(F8+=1,n9=null,w5={activePostId:null,speaking:!1},$)try{$.cancel()}catch(j){console.warn("[post-speech] cancel failed:",j)}i9()}function iK(_,$,j={}){let G=o9(j),Z=hK(j);if(!G||!Z||typeof G.SpeechSynthesisUtterance!=="function")return!1;let X=String($||"").trim();if(!X)return!1;let Y=F8+1;F8=Y;try{Z.cancel()}catch{}let L=new G.SpeechSynthesisUtterance(X);n9=L,w5={activePostId:_,speaking:!0},i9();let V=()=>{if(Y!==F8)return;n9=null,w5={activePostId:null,speaking:!1},i9()};L.onend=V,L.onerror=V;try{return Z.speak(L),!0}catch(K){return console.warn("[post-speech] speak failed:",K),V(),!1}}async function sK(_,$){try{return await _?.writeText?.($),!0}catch(j){return!1}}function a9(_,$){let j=typeof $?.text==="string"?$.text:"",G=typeof $?.html==="string"?$.html:"";if(!_||!j||typeof _.createElement!=="function"||typeof _.execCommand!=="function")return!1;let Z=null,X=!1,Y=(L)=>{let V=L?.clipboardData;if(!V||typeof V.setData!=="function")return;if(V.setData("text/plain",j),G)V.setData("text/html",G);if(typeof L.preventDefault==="function")L.preventDefault();X=!0};try{if(Z=_.createElement("textarea"),Z.value=j,typeof Z.setAttribute==="function")Z.setAttribute("readonly","");if(Z.style)Z.style.position="fixed",Z.style.opacity="0",Z.style.pointerEvents="none";if(_.body?.appendChild?.(Z),typeof Z.select==="function")Z.select();if(typeof Z.setSelectionRange==="function")Z.setSelectionRange(0,Z.value.length);_.addEventListener?.("copy",Y,!0);let L=_.execCommand("copy");return Boolean(X||L)}catch{return!1}finally{if(_.removeEventListener?.("copy",Y,!0),Z)_.body?.removeChild?.(Z)}}function oK(_){if(!_||typeof _!=="object")return null;let $=_;if(typeof $.nodeType==="number"&&$.nodeType===3)return $.parentNode||null;return $}function aK(_,$){let j=_?.clipboardData,G=$?.root,Z=$?.selection;if(!j||typeof j.setData!=="function"||!G||!Z)return!1;if(Z.isCollapsed)return!1;let X=!1;if(Number(Z.rangeCount||0)>0&&typeof Z.getRangeAt==="function")try{let V=Z.getRangeAt(0);if(V&&typeof V.intersectsNode==="function")X=Boolean(V.intersectsNode(G))}catch{X=!1}if(!X&&typeof G.contains==="function"){let V=oK(Z.anchorNode),K=oK(Z.focusNode);X=Boolean(V&&G.contains(V)||K&&G.contains(K))}if(!X)return!1;let L=typeof Z.toString==="function"?String(Z.toString()||"").replace(/\u00a0/g," "):"";if(!L)return!1;return j.setData("text/plain",L),_?.preventDefault?.(),!0}function tK(_,$){try{return Boolean(_?.getItem?.($))}catch(j){return!1}}function eK(_,$,j){try{return _?.setItem?.($,j),!0}catch(G){return!1}}function _V(_,$){let j=typeof _==="string"&&_.trim()?_.trim():null;if(j)return j;if(!$)return null;try{return new URL($).hostname}catch(G){return $}}function LJ({mediaId:_,onPreview:$}){let[j,G]=C(null);if(u(()=>{M6(_).then(G).catch((K)=>{console.warn("[post] Failed to load attachment metadata for file card:",_,K)})},[_]),!j)return null;let Z=j.filename||"file",X=j.metadata?.size,Y=X?a_(X):"",V=y5(j.content_type,j.filename)!=="unsupported";return F`
        <div class="file-attachment" onClick=${(K)=>K.stopPropagation()}>
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
            ${V&&F`
                <button
                    class="file-attachment-preview"
                    type="button"
                    onClick=${(K)=>{K.preventDefault(),K.stopPropagation(),$?.({mediaId:_,info:j})}}
                >
                    Preview
                </button>
            `}
        </div>
    `}function KJ(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="recovery_marker"&&$.recovered)}function VJ(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="timeout_marker"&&($.timed_out??!0))}function qJ(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="turn_outcome_marker")}function QJ(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="peer_message")}function NJ(_){return String(_||"").split(/[:/]/).filter(Boolean).pop()||"agent"}function $V(_){let $=QJ(_)[0]||null;if(!$)return null;let j=typeof $.source_chat_jid==="string"?$.source_chat_jid.trim():"",G=typeof $.source_agent_name==="string"&&$.source_agent_name.trim()?$.source_agent_name.trim():NJ(j),Z=typeof $.target_chat_jid==="string"?$.target_chat_jid.trim():"",X=typeof $.target_agent_name==="string"?$.target_agent_name.trim():"",Y=typeof $.body==="string"?$.body:"";return{block:$,sourceChatJid:j,sourceAgentName:G,targetChatJid:Z,targetAgentName:X,body:Y}}function BJ(_,$){let j=$V($),G=typeof _==="string"?_:"";if(!j)return G;if(j.body&&j.body.trim())return j.body;let Z=j.sourceAgentName?j.sourceAgentName.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"):"[^\\s>]+",X=j.sourceChatJid?j.sourceChatJid.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"):"[^>\\n]+";return G.replace(new RegExp(`^from:\\s+@${Z}\\s+<jid:${X}>\\s*\\n\\n`,"i"),"")||G}var FJ={context_recover:"context limit exceeded",rate_limit:"rate limit hit",api_error:"API error",timeout:"request timeout",overloaded:"service overloaded",connection:"connection error"};function UJ(_){let $=Number(_?.attempts_used||0),j=String(_?.classifier||"").trim(),G=FJ[j]||(j?j.replace(/_/g," "):""),Z=["Recovered automatically"];if($>1)Z[0]=`Recovered after ${$} attempts`;if(G)Z.push(G);return Z.join(" — ")}function HJ(_){let $=typeof _?.tool_action_summary==="string"?_.tool_action_summary.trim():"",j=_?.draft_recovered?" Showing recovered draft.":"";return $?`Turn timed out — ${$}${j}`:`Turn timed out before the model finished responding${j}`}function EJ({marker:_}){let[$,j]=C(!1),G=R((q)=>{q.stopPropagation(),j((B)=>!B)},[]),Z=typeof _?.title==="string"?_.title.trim():"",X=typeof _?.detail==="string"?_.detail.trim():"",Y=typeof _?.tool_action_summary==="string"?_.tool_action_summary.trim():"",L=_?.draft_recovered,V=String(_?.severity||"warning"),K=Y||Z||String(_?.label||_?.kind||"issue"),Q=Boolean(X||Z&&Y);return F`
        <div class=${`post-outcome-pill post-outcome-pill-${V}`}>
            <div class="post-outcome-pill-header" onClick=${Q?G:void 0}>
                ${Q&&F`
                    <span class=${`post-outcome-pill-toggle${$?" expanded":""}`} aria-hidden="true">▶</span>
                `}
                <span class="post-outcome-pill-label">${K}</span>
                ${L&&F`<span class="post-outcome-pill-badge">draft recovered</span>`}
            </div>
            ${$&&Q&&F`
                <div class="post-outcome-pill-detail">
                    ${Z&&F`<div><strong>${Z}</strong></div>`}
                    ${X&&X!==Z&&F`<div>${X}</div>`}
                </div>
            `}
        </div>
    `}function DJ({attachment:_,onPreview:$}){let j=Number(_?.id),[G,Z]=C(null);u(()=>{if(!Number.isFinite(j))return;M6(j).then(Z).catch((Q)=>{console.warn("[post] Failed to load attachment metadata for attachment pill:",j,Q)});return},[j]);let X=G?.filename||_.label||`attachment-${_.id}`,Y=Number.isFinite(j)?u1(j):null,L=y5(G?.content_type,G?.filename||_?.label),V=K8(L),K=L!=="unsupported";return F`
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
            ${Number.isFinite(j)&&G&&K&&F`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${V}
                    onClick=${(Q)=>{Q.preventDefault(),Q.stopPropagation(),$?.({mediaId:j,info:G})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function U8({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:G}=_,Z=G?T4(G):null;return F`
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
    `}function zJ({block:_}){let $=_.title||_.name||_.uri,j=_.description,G=_.size?a_(_.size):"",Z=_.mime_type||"",X=JJ(Z),Y=J4(_.uri);return F`
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
    `}function WJ({block:_}){let[$,j]=C(!1),G=_.uri||"Embedded resource",Z=_.text||"",X=Boolean(_.data),Y=_.mime_type||"";return F`
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
                        <button class="resource-embed-blob-btn" onClick=${(L)=>{L.preventDefault(),L.stopPropagation();let V=new Blob([Uint8Array.from(atob(_.data),(q)=>q.charCodeAt(0))],{type:Y||"application/octet-stream"}),K=URL.createObjectURL(V),Q=document.createElement("a");Q.href=K,Q.download=G.split("/").pop()||"resource",Q.click(),URL.revokeObjectURL(K)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function OJ({block:_,post:$,onOpenWidget:j}){if(!_)return null;let G=S9(_,$),Z=nL(_),X=G?.artifact?.kind||_?.artifact?.kind||_?.kind||null,Y=G?.title||_.title||_.name||"Generated widget",L=G?.description||_.description||_.subtitle||"",V=_.open_label||"Open widget",K=g(!1),Q=(q)=>{if(q)q.preventDefault(),q.stopPropagation();if(!G)return;j?.(G)};return u(()=>{if(!_?.auto_open||!G||!Z||K.current)return;let q=$?.timestamp?new Date($.timestamp).getTime():0;if(q&&Date.now()-q>1e4)return;let B=`widget_opened_${_.widget_id||$?.id||""}`;if(tK(sessionStorage,B))return;K.current=!0,eK(sessionStorage,B,"1"),j?.(G)},[_?.auto_open,G,Z]),F`
        <div class="generated-widget-launch" onClick=${(q)=>q.stopPropagation()}>
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
                    ${V}
                </button>
                <span class="generated-widget-launch-note">
                    ${Z?"Opens in a dismissible floating pane.":"This widget artifact is missing or unsupported."}
                </span>
            </div>
        </div>
    `}function JJ(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function AJ(_){let $=J4(_,{allowDataImage:!0});return $?{backgroundImage:`url("${$}")`}:void 0}function kJ({preview:_}){let $=J4(_.url),j=AJ(_.image),G=_V(_.site_name,$);return F`
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
    `}function yJ(_,$){return typeof _==="string"?_:""}var jV=1800,MJ=40,wJ=24576,TJ=16,xJ=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,IJ=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,CJ=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`,PJ=`
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
</style>`;function fJ(_,$={}){let j=typeof _==="string"?_:"",G=j?j.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`):[],Z=new TextEncoder().encode(j).byteLength,X=Number.isFinite($.lineThreshold)?$.lineThreshold:MJ,Y=Number.isFinite($.byteThreshold)?$.byteThreshold:wJ,L=G.length>X||Z>Y,V=Math.min(G.length,Number.isFinite($.previewLines)?$.previewLines:TJ);return{shouldCollapse:L,lineCount:G.length,byteLength:Z,visibleLines:V,omittedLines:Math.max(0,G.length-V)}}async function GV(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(a9(document,{text:$}))return!0;if(await sK(navigator.clipboard,$))return!0;try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let G=document.execCommand("copy");return document.body.removeChild(j),G}catch{return!1}}async function RJ(_){let $=typeof _==="string"?_:"";if(!$)return!1;let j=Z1($,null),G=`<html><head>${PJ}</head><body>${j}</body></html>`;if(a9(document,{text:$,html:G}))return!0;if(navigator.clipboard?.write&&typeof ClipboardItem<"u")try{let Z=new ClipboardItem({"text/plain":new Blob([$],{type:"text/plain"}),"text/html":new Blob([G],{type:"text/html"})});return await navigator.clipboard.write([Z]),!0}catch(Z){console.warn("[post] Rich clipboard write failed, falling back to plain text copy.",Z)}return GV($)}function SJ(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((Y)=>Y.querySelector("code"));if($.length===0)return()=>{};let j=new Map,G=[],Z=(Y)=>{let L=window.getSelection?.();if(!L||L.isCollapsed)return;for(let V of $)if(aK(Y,{root:V,selection:L}))return};document.addEventListener("copy",Z,!0),G.push(()=>document.removeEventListener("copy",Z,!0));let X=(Y,L)=>{let V=L||"idle";if(Y.dataset.copyState=V,V==="success")Y.innerHTML=IJ,Y.setAttribute("aria-label","Copied"),Y.setAttribute("title","Copied"),Y.classList.add("is-success"),Y.classList.remove("is-error");else if(V==="error")Y.innerHTML=CJ,Y.setAttribute("aria-label","Copy failed"),Y.setAttribute("title","Copy failed"),Y.classList.add("is-error"),Y.classList.remove("is-success");else Y.innerHTML=xJ,Y.setAttribute("aria-label","Copy code"),Y.setAttribute("title","Copy code"),Y.classList.remove("is-success","is-error")};return $.forEach((Y)=>{let L=document.createElement("div");L.className="post-code-block";let V=Y.querySelector("code"),K=fJ(V?.textContent||"");if(K.shouldCollapse){L.classList.add("post-code-block-collapsed"),L.style.setProperty("--post-code-preview-lines",String(K.visibleLines));let B=document.createElement("button");B.type="button",B.className="post-code-expand-btn";let N=()=>{let E=L.classList.contains("post-code-block-expanded");B.textContent=E?"▴ Collapse output":`▸ Expand output · ${K.lineCount.toLocaleString()} lines · ${a_(K.byteLength)}${K.omittedLines?` · ${K.omittedLines.toLocaleString()} hidden`:""}`,B.setAttribute("aria-expanded",E?"true":"false")},U=(E)=>{E.preventDefault(),E.stopPropagation(),L.classList.toggle("post-code-block-expanded"),N()};B.addEventListener("click",U),N(),L.appendChild(B),G.push(()=>B.removeEventListener("click",U))}Y.parentNode?.insertBefore(L,Y),L.appendChild(Y);let Q=document.createElement("button");Q.type="button",Q.className="post-code-copy-btn",X(Q,"idle"),L.appendChild(Q);let q=async(B)=>{B.preventDefault(),B.stopPropagation();let U=Y.querySelector("code")?.textContent||"",E=await GV(U);X(Q,E?"success":"error");let D=j.get(Q);if(D)clearTimeout(D);let H=setTimeout(()=>{X(Q,"idle"),j.delete(Q)},jV);j.set(Q,H)};Q.addEventListener("click",q),G.push(()=>{Q.removeEventListener("click",q);let B=j.get(Q);if(B)clearTimeout(B);if(L.parentNode)L.parentNode.insertBefore(Y,L),L.remove()})}),()=>{G.forEach((Y)=>Y())}}function ZV(_){let $=String(_||"").trim(),j=$.match(/^`([^`]+)`$/);return(j?j[1]:$).trim()}function uJ(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let K=0;K<j.length;K+=1)if(j[K].trim()==="Files:"&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){G=K;break}if(G===-1)return{content:_,fileRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let K=j[X];if(/^\s*-\s+/.test(K)){let Q=ZV(K.replace(/^\s*-\s+/,"").trim());if(Q)Z.push(Q)}else if(!K.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let Y=j.slice(0,G),L=j.slice(X),V=[...Y,...L].join(`
`);return V=V.replace(/\n{3,}/g,`

`).trim(),{content:V,fileRefs:Z}}function gJ(_){if(!_)return{content:_,folderRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let K=0;K<j.length;K+=1)if(j[K].trim()==="Folders:"&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){G=K;break}if(G===-1)return{content:_,folderRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let K=j[X];if(/^\s*-\s+/.test(K)){let Q=ZV(K.replace(/^\s*-\s+/,"").trim());if(Q)Z.push(Q)}else if(!K.trim())break;else break}if(Z.length===0)return{content:_,folderRefs:[]};let Y=j.slice(0,G),L=j.slice(X),V=[...Y,...L].join(`
`);return V=V.replace(/\n{3,}/g,`

`).trim(),{content:V,folderRefs:Z}}function bJ(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let K=0;K<j.length;K+=1)if(j[K].trim()==="Referenced messages:"&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){G=K;break}if(G===-1)return{content:_,messageRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let K=j[X];if(/^\s*-\s+/.test(K)){let q=K.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(q)Z.push(q[1])}else if(!K.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let Y=j.slice(0,G),L=j.slice(X),V=[...Y,...L].join(`
`);return V=V.replace(/\n{3,}/g,`

`).trim(),{content:V,messageRefs:Z}}function vJ(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let K=0;K<j.length;K+=1){let Q=j[K].trim();if((Q==="Images:"||Q==="Attachments:")&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){G=K;break}}if(G===-1)return{content:_,attachments:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let K=j[X];if(/^\s*-\s+/.test(K)){let Q=K.replace(/^\s*-\s+/,"").trim(),q=Q.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||Q.match(/^attachment:([^\s]+)\s+(.+)$/i);if(q){let B=q[1],N=(q[2]||"").trim()||B;Z.push({id:B,label:N,raw:Q})}else Z.push({id:null,label:Q,raw:Q})}else if(!K.trim())break;else break}if(Z.length===0)return{content:_,attachments:[]};let Y=j.slice(0,G),L=j.slice(X),V=[...Y,...L].join(`
`);return V=V.replace(/\n{3,}/g,`

`).trim(),{content:V,attachments:Z}}function mJ(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function cJ(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let G=j.map(mJ).sort((Q,q)=>q.length-Q.length),Z=new RegExp(`(${G.join("|")})`,"gi"),X=new RegExp(`^(${G.join("|")})$`,"i"),Y=new DOMParser().parseFromString(_,"text/html"),L=Y.createTreeWalker(Y.body,NodeFilter.SHOW_TEXT),V=[],K;while(K=L.nextNode())V.push(K);for(let Q of V){let q=Q.nodeValue;if(!q||!Z.test(q)){Z.lastIndex=0;continue}Z.lastIndex=0;let B=Q.parentElement;if(B&&B.closest("code, pre, script, style"))continue;let N=q.split(Z).filter((E)=>E!=="");if(N.length===0)continue;let U=Y.createDocumentFragment();for(let E of N)if(X.test(E)){let D=Y.createElement("mark");D.className="search-highlight-term",D.textContent=E,U.appendChild(D)}else U.appendChild(Y.createTextNode(E));Q.parentNode.replaceChild(U,Q)}return Y.body.innerHTML}function XV({post:_,onClick:$,onHashtagClick:j,onMessageRef:G,onScrollToMessage:Z,agentName:X,agentAvatarUrl:Y,userName:L,userAvatarUrl:V,userAvatarBackground:K,onDelete:Q,isThreadReply:q,isThreadPrev:B,isThreadNext:N,isRemoving:U,highlightQuery:E,onFileRef:D,onOpenWidget:H,onOpenAttachmentPreview:k}){let[O,W]=C(null),[I,x]=C("idle"),[J,A]=C(()=>s9()),z=g(null),T=g(null),w=_.data,y=w.type==="agent_response",P=L||"You",f=y?X||OK:P,b=typeof _.chat_agent_name==="string"?_.chat_agent_name.trim():"",c=Boolean(y&&E&&b&&b!==f),h=y?b9(X,Y,!0):b9(P,V),_0=typeof K==="string"?K.trim().toLowerCase():"",v=!y&&h.image&&(_0==="clear"||_0==="transparent"),e=y&&Boolean(h.image),z0=`background-color: ${v||e?"transparent":h.color}`,j0=w.content_meta,$0=Boolean(j0?.truncated),L0=Boolean(j0?.preview),B0=$0&&!L0,t=$0?{originalLength:Number.isFinite(j0?.original_length)?j0.original_length:w.content?w.content.length:0,maxLength:Number.isFinite(j0?.max_length)?j0.max_length:0}:null,V0=w.content_blocks||[],q0=w.media_ids||[],k0=$V(V0),s=Boolean(k0?.sourceAgentName),X0=yJ(w.content,w.link_previews);X0=BJ(X0,V0);let{content:D0,fileRefs:C0}=uJ(X0),{content:g0,folderRefs:n0}=gJ(D0),{content:j_,messageRefs:m0}=bJ(g0),d0=(d)=>{d?.preventDefault?.(),d?.stopPropagation?.(),G?.(_.id,_.chat_jid||null)},S0=(d)=>{if(d.key==="Enter"||d.key===" ")d0(d)},{content:o0,attachments:v0}=vJ(j_);X0=o0;let a0=p9(V0),h0=c9(V0),t0=KJ(V0)[0]||null,A0=VJ(V0)[0]||null,e0=qJ(V0)[0]||null,O_=a0.length===1&&typeof a0[0]?.fallback_text==="string"?a0[0].fallback_text.trim():"",H0=h0.length===1?q8(h0[0]).trim():"",f0=Boolean(O_)&&X0?.trim()===O_||Boolean(H0)&&X0?.trim()===H0,T0=Boolean(X0)&&!B0&&!f0,i0=typeof E==="string"?E.trim():"",A_=Y0(()=>{if(!X0||f0)return"";let d=Z1(X0,j);return i0?cJ(d,i0):d},[X0,f0,i0]),K_=Y0(()=>Q8(_),[_]),E_=Y0(()=>pK(),[]),H_=Y0(()=>nK(_),[_]),y_=Boolean(J.speaking&&J.activePostId===_.id),C_=(d,O0)=>{d.stopPropagation(),W(u1(O0))},u_=(d)=>{k?.(d)},D_=(d)=>{d.stopPropagation(),Q?.(_)},G0=async(d)=>{d.stopPropagation();let O0=await RJ(K_);if(x(O0?"success":"error"),T.current)clearTimeout(T.current);T.current=setTimeout(()=>{T.current=null,x("idle")},jV)},W0=(d)=>{if(d.stopPropagation(),y_){dK();return}iK(_.id,H_)},r=(d,O0)=>{let Z_=new Set;if(!d||O0.length===0)return{content:d,usedIds:Z_};return{content:d.replace(/attachment:([^\s)"']+)/g,(r_,B1,g_,J1)=>{let P_=B1.replace(/^\/+/,""),A1=O0.find((k_)=>k_.name&&k_.name.toLowerCase()===P_.toLowerCase()&&!Z_.has(k_.id))||O0.find((k_)=>!Z_.has(k_.id));if(!A1)return r_;if(Z_.add(A1.id),J1.slice(Math.max(0,g_-2),g_)==="](")return`/media/${A1.id}`;return A1.name||"attachment"}),usedIds:Z_}},i=[],o=[],Z0=[],K0=[],J0=[],c0=[],R0=[],I0=0;if(V0.length>0)V0.forEach((d)=>{if(d?.type==="text"&&d.annotations)R0.push(d.annotations);if(d?.type==="generated_widget")c0.push(d);else if(d?.type==="resource_link")K0.push(d);else if(d?.type==="resource")J0.push(d);else if(d?.type==="file"){let O0=q0[I0++];if(O0)o.push(O0),Z0.push({id:O0,name:d?.name||d?.filename||d?.title})}else if(d?.type==="image"||!d?.type){let O0=q0[I0++];if(O0){let Z_=typeof d?.mime_type==="string"?d.mime_type:void 0;i.push({id:O0,annotations:d?.annotations,mimeType:Z_}),Z0.push({id:O0,name:d?.name||d?.filename||d?.title})}}});else if(q0.length>0){let d=v0.length>0;q0.forEach((O0,Z_)=>{let q_=v0[Z_]||null;if(Z0.push({id:O0,name:q_?.label||null}),d)o.push(O0);else i.push({id:O0,annotations:null})})}if(v0.length>0)v0.forEach((d)=>{if(!d?.id)return;let O0=Z0.find((Z_)=>String(Z_.id)===String(d.id));if(O0&&!O0.name)O0.name=d.label});let{content:w0,usedIds:p0}=r(X0,Z0);X0=w0;let U0=i.filter(({id:d})=>!p0.has(d)),l0=o.filter((d)=>!p0.has(d)),Y_=v0.length>0?v0.map((d,O0)=>({id:d.id||`attachment-${O0+1}`,label:d.label||`attachment-${O0+1}`})):Z0.map((d,O0)=>({id:d.id,label:d.name||`attachment-${O0+1}`})),G_=Y0(()=>p9(V0),[V0]),u0=Y0(()=>c9(V0),[V0]),z_=Y0(()=>{return G_.map((d)=>`${d.card_id}:${d.state}`).join("|")},[G_]);u(()=>{if(!z.current)return;return E$(z.current),SJ(z.current)},[A_]),u(()=>{return rK((d)=>{A(d)})},[]),u(()=>()=>{if(T.current)clearTimeout(T.current)},[]);let B_=g(null);return u(()=>{if(!B_.current||G_.length===0)return;let d=B_.current;d.innerHTML="";for(let O0 of G_){let Z_=document.createElement("div");d.appendChild(Z_),cK(Z_,O0,{onAction:async(q_)=>{if(q_.type==="Action.OpenUrl"){let r_=J4(q_.url||"");if(!r_)throw Error("Invalid URL");window.open(r_,"_blank","noopener,noreferrer");return}if(q_.type==="Action.Submit"){await O7({post_id:_.id,thread_id:w.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:O0.card_id,action:{type:q_.type,title:q_.title||"",data:q_.data}});return}console.warn("[post] unsupported adaptive card action:",q_.type,q_)}}).catch((q_)=>{console.error("[post] adaptive card render error:",q_),Z_.textContent=O0.fallback_text||"Card failed to render."})}},[z_,_.id]),F`
        <div id=${`post-${_.id}`} class="post ${y?"agent-post":""} ${q?"thread-reply":""} ${B?"thread-prev":""} ${N?"thread-next":""} ${U?"removing":""}" onClick=${$}>
            <div class="post-avatar ${y?"agent-avatar":""} ${h.image?"has-image":""}" style=${z0}>
                ${h.image?F`<img src=${h.image} alt=${f} />`:h.letter}
            </div>
            <div class="post-body">
                <div class="post-actions">
                    ${y&&E_&&H_&&F`
                        <button
                            class=${`post-action-btn post-speak-btn${y_?" is-active":""}`}
                            type="button"
                            title=${y_?"Stop reading aloud":"Read aloud"}
                            aria-label=${y_?"Stop reading aloud":"Read aloud"}
                            onClick=${W0}
                        >
                            ${y_?F`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="6" y="6" width="12" height="12" rx="2"></rect></svg>`:F`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M11 5 6 9H3v6h3l5 4z"></path><path d="M15.5 8.5a5 5 0 0 1 0 7"></path><path d="M18 6a8.5 8.5 0 0 1 0 12"></path></svg>`}
                        </button>
                    `}
                    <button
                        class=${`post-action-btn post-copy-btn${I==="success"?" is-success":I==="error"?" is-error":""}`}
                        type="button"
                        title=${I==="success"?"Copied":I==="error"?"Copy failed":"Copy message"}
                        aria-label=${I==="success"?"Copied":I==="error"?"Copy failed":"Copy message"}
                        onClick=${G0}
                        disabled=${!K_}
                    >
                        ${I==="success"?F`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20 6L9 17l-5-5"></path></svg>`:I==="error"?F`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9"></circle><path d="M9 9l6 6M15 9l-6 6"></path></svg>`:F`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="9" y="9" width="10" height="10" rx="2"></rect><path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path></svg>`}
                    </button>
                    <button
                        class="post-action-btn post-delete-btn"
                        type="button"
                        title="Delete message"
                        aria-label="Delete message"
                        onClick=${D_}
                    >
                        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div class="post-meta">
                    <span class="post-author">${f}</span>
                    ${s&&F`
                        <span
                            class="post-chat-agent-tag"
                            title=${`From ${k0?.sourceChatJid||""}`.trim()}
                        >
                            @${k0?.sourceAgentName}
                        </span>
                    `}
                    ${c&&F`
                        <span
                            class="post-chat-agent-tag"
                            role="button"
                            tabIndex="0"
                            style="cursor:pointer"
                            title=${`Open ${b} and reference this message`}
                            onClick=${d0}
                            onKeyDown=${S0}
                        >
                            @${b}
                        </span>
                    `}
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${d0}>${QX(_.timestamp)}</a>
                    ${t0&&F`
                        <span
                            class="post-recovery-chip"
                            title=${UJ(t0)}
                        >
                            recovered
                        </span>
                    `}
                    ${A0&&F`
                        <span
                            class="post-recovery-chip post-timeout-chip"
                            title=${HJ(A0)}
                        >
                            timeout
                        </span>
                    `}
                    ${e0&&F`
                        <span
                            class=${`post-recovery-chip post-outcome-chip post-outcome-chip-${String(e0.severity||"warning")}${e0.kind==="tool_budget"?" post-outcome-chip-tool-budget":""}`}
                            title=${String(e0.label||e0.kind||"issue")}
                        >
                            ${String(e0.label||e0.kind||"issue")}
                        </span>
                    `}
                </div>
                ${e0&&F`
                    <${EJ} marker=${e0} />
                `}
                ${B0&&t&&F`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${B5(t.originalLength)} chars
                            ${t.maxLength?F` • Display limit: ${B5(t.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${L0&&t&&F`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${B5(t.maxLength)} of ${B5(t.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(C0.length>0||n0.length>0||m0.length>0||Y_.length>0)&&F`
                    <div class="post-file-refs">
                        ${m0.map((d)=>{let O0=(Z_)=>{if(Z_.preventDefault(),Z_.stopPropagation(),Z)Z(d,_.chat_jid||null);else{let q_=document.getElementById("post-"+d);if(q_)q_.scrollIntoView({behavior:"smooth",block:"center"}),q_.classList.add("post-highlight"),setTimeout(()=>q_.classList.remove("post-highlight"),2000)}};return F`
                                <a href=${`#msg-${d}`} class="post-msg-pill-link" onClick=${O0}>
                                    <${L1}
                                        prefix="post"
                                        label=${"msg:"+d}
                                        title=${"Message "+d}
                                        icon="message"
                                        onClick=${O0}
                                    />
                                </a>
                            `})}
                        ${C0.map((d)=>{let O0=d.split("/").pop()||d;return F`
                                <${L1}
                                    prefix="post"
                                    label=${O0}
                                    title=${d}
                                    onClick=${()=>D?.(d)}
                                />
                            `})}
                        ${n0.map((d)=>{let O0=d.split("/").pop()||d;return F`
                                <${L1}
                                    prefix="post"
                                    label=${O0}
                                    title=${d}
                                    icon="folder"
                                />
                            `})}
                        ${Y_.map((d)=>F`
                            <${DJ}
                                key=${d.id}
                                attachment=${d}
                                onPreview=${u_}
                            />
                        `)}
                    </div>
                `}
                ${T0&&F`
                    <div 
                        ref=${z}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:A_}}
                        onClick=${(d)=>{if(d.target.classList.contains("hashtag")){d.preventDefault(),d.stopPropagation();let O0=d.target.dataset.hashtag;if(O0)j?.(O0)}else if(d.target.tagName==="IMG")d.preventDefault(),d.stopPropagation(),W(d.target.src)}}
                    />
                `}
                ${G_.length>0&&F`
                    <div ref=${B_} class="post-adaptive-cards" />
                `}
                ${u0.length>0&&F`
                    <div class="post-adaptive-card-submissions">
                        ${u0.map((d,O0)=>{let Z_=PK(d),q_=`${d.card_id}-${O0}`;return F`
                                <div key=${q_} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${Z_.title}</span>
                                        </div>
                                    </div>
                                    ${Z_.fields.length>0&&F`
                                        <div class="adaptive-card-submission-fields">
                                            ${Z_.fields.map((r_)=>F`
                                                <span class="adaptive-card-submission-field" title=${`${r_.key}: ${r_.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${r_.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${r_.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${T4(Z_.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${c0.length>0&&F`
                    <div class="generated-widget-launches">
                        ${c0.map((d,O0)=>F`
                            <${OJ}
                                key=${d.widget_id||d.id||`${_.id}-widget-${O0}`}
                                block=${d}
                                post=${_}
                                onOpenWidget=${H}
                            />
                        `)}
                    </div>
                `}
                ${R0.length>0&&F`
                    ${R0.map((d,O0)=>F`
                        <${U8} key=${O0} annotations=${d} />
                    `)}
                `}
                ${U0.length>0&&F`
                    <div class="media-preview">
                        ${U0.map(({id:d,mimeType:O0})=>{let q_=typeof O0==="string"&&O0.toLowerCase().startsWith("image/svg")?u1(d):A7(d);return F`
                                <img
                                    key=${d}
                                    src=${q_}
                                    alt="Media"
                                    loading="lazy"
                                    decoding="async"
                                    onClick=${(r_)=>C_(r_,d)}
                                />
                            `})}
                    </div>
                `}
                ${U0.length>0&&F`
                    ${U0.map(({annotations:d},O0)=>F`
                        ${d&&F`<${U8} key=${O0} annotations=${d} />`}
                    `)}
                `}
                ${l0.length>0&&F`
                    <div class="file-attachments">
                        ${l0.map((d)=>F`
                            <${LJ} key=${d} mediaId=${d} onPreview=${u_} />
                        `)}
                    </div>
                `}
                ${K0.length>0&&F`
                    <div class="resource-links">
                        ${K0.map((d,O0)=>F`
                            <div key=${O0}>
                                <${zJ} block=${d} />
                                <${U8} annotations=${d.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${J0.length>0&&F`
                    <div class="resource-embeds">
                        ${J0.map((d,O0)=>F`
                            <div key=${O0}>
                                <${WJ} block=${d} />
                                <${U8} annotations=${d.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${w.link_previews?.length>0&&F`
                    <div class="link-previews">
                        ${w.link_previews.map((d,O0)=>F`
                            <${kJ} key=${O0} preview=${d} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${O&&F`<${lK} src=${O} onClose=${()=>W(null)} />`}

    `}function YV({posts:_,hasMore:$,onLoadMore:j,onPostClick:G,onHashtagClick:Z,onMessageRef:X,onScrollToMessage:Y,onFileRef:L,onOpenWidget:V,onOpenAttachmentPreview:K,emptyMessage:Q,timelineRef:q,agents:B,user:N,onDeletePost:U,reverse:E=!0,removingPostIds:D,searchQuery:H}){let[k,O]=C(!1),W=g(null),I=typeof IntersectionObserver<"u",x=R(async()=>{if(!j||!$||k)return;O(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{O(!1)}},[$,k,j]),J=R((b)=>{let{scrollTop:c,scrollHeight:h,clientHeight:_0}=b.target,v=E?h-_0-c:c,e=Math.max(300,_0);if(v<e)x()},[E,x]);u(()=>{if(!I)return;let b=W.current,c=q?.current;if(!b||!c)return;let h=300,_0=new IntersectionObserver((v)=>{for(let e of v){if(!e.isIntersecting)continue;x()}},{root:c,rootMargin:`${h}px 0px ${h}px 0px`,threshold:0});return _0.observe(b),()=>_0.disconnect()},[I,$,j,q,x]);let A=g(x);if(A.current=x,u(()=>{if(I)return;if(!q?.current)return;let{scrollTop:b,scrollHeight:c,clientHeight:h}=q.current,_0=E?c-h-b:b,v=Math.max(300,h);if(_0<v)A.current?.()},[I,_,$,E,q]),u(()=>{if(!q?.current)return;if(!$||k)return;let{scrollTop:b,scrollHeight:c,clientHeight:h}=q.current,_0=E?c-h-b:b,v=Math.max(300,h);if(c<=h+1||_0<v)A.current?.()},[_,$,k,E,q]),!_)return F`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return F`
            <div class="timeline" ref=${q}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${Q||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let z=_.slice().sort((b,c)=>b.id-c.id),T=(b)=>{let c=b?.data?.thread_id;if(c===null||c===void 0||c==="")return null;let h=Number(c);return Number.isFinite(h)?h:null},w=new Map;for(let b=0;b<z.length;b+=1){let c=z[b],h=Number(c?.id),_0=T(c);if(_0!==null){let v=w.get(_0)||{anchorIndex:-1,replyIndexes:[]};v.replyIndexes.push(b),w.set(_0,v)}else if(Number.isFinite(h)){let v=w.get(h)||{anchorIndex:-1,replyIndexes:[]};v.anchorIndex=b,w.set(h,v)}}let y=new Map;for(let[b,c]of w.entries()){let h=new Set;if(c.anchorIndex>=0)h.add(c.anchorIndex);for(let _0 of c.replyIndexes)h.add(_0);y.set(b,Array.from(h).sort((_0,v)=>_0-v))}let P=z.map((b,c)=>{let h=T(b);if(h===null)return{hasThreadPrev:!1,hasThreadNext:!1};let _0=y.get(h);if(!_0||_0.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let v=_0.indexOf(c);if(v<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:v>0,hasThreadNext:v<_0.length-1}}),f=F`<div class="timeline-sentinel" ref=${W}></div>`;return F`
        <div class="timeline ${E?"reverse":"normal"}" ref=${q} onScroll=${J}>
            <div class="timeline-content">
                ${E?f:null}
                ${z.map((b,c)=>{let h=Boolean(b.data?.thread_id&&b.data.thread_id!==b.id),_0=D?.has?.(b.id),v=P[c]||{};return F`
                    <${XV}
                        key=${b.id}
                        post=${b}
                        isThreadReply=${h}
                        isThreadPrev=${v.hasThreadPrev}
                        isThreadNext=${v.hasThreadNext}
                        isRemoving=${_0}
                        highlightQuery=${H}
                        agentName=${JK(b.data?.agent_id,B||{})}
                        agentAvatarUrl=${AK(b.data?.agent_id,B||{})}
                        userName=${N?.name||N?.user_name}
                        userAvatarUrl=${N?.avatar_url||N?.avatarUrl||N?.avatar}
                        userAvatarBackground=${N?.avatar_background||N?.avatarBackground}
                        onClick=${()=>G?.(b)}
                        onHashtagClick=${Z}
                        onMessageRef=${X}
                        onScrollToMessage=${Y}
                        onFileRef=${L}
                        onOpenWidget=${V}
                        onDelete=${U}
                        onOpenAttachmentPreview=${K}
                    />
                `})}
                ${E?null:f}
            </div>
        </div>
    `}M0();I_();function LV(_){try{return _?.focus?.(),_?.select?.(),!0}catch($){return!1}}var H8="workspaceExplorerScale",lJ=["compact","default","comfortable"],hJ=new Set(lJ),rJ={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function KV(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return hJ.has(j)?j:$}function t9(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),G=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||G&&j}}function pJ(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function nJ(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function e9(_={}){let $=pJ(_),j=_.stored?KV(_.stored,$):$;return nJ(j,_)}function VV(_){return rJ[KV(_)]}X9();function dJ(_){if(!_||_.kind!=="text")return!1;let $=Number(_.size);return!Number.isFinite($)||$<=262144}function _j(_,$){let j=String(_||"").trim();if(!j||j.endsWith("/"))return!1;if(typeof $!=="function")return!1;let G=$({path:j,mode:"edit"});if(!G||typeof G!=="object")return!1;return G.id!=="editor"}function qV(_,$,j={}){let G=j.resolvePane;if(_j(_,G))return!0;return dJ($)}var UV=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function iJ(_){let $=String(_||"").trim();if(!$||$.endsWith("/"))return!1;return _j($,(j)=>X_.resolve(j))}function HV(_,$,j,G=0,Z=[]){if(!j&&UV(_))return Z;if(!_)return Z;if(Z.push({node:_,depth:G}),_.type==="dir"&&_.children&&$.has(_.path))for(let X of _.children)HV(X,$,j,G+1,Z);return Z}function QV(_,$,j){if(!_)return"";let G=[],Z=(X)=>{if(!j&&UV(X))return;if(G.push(X.type==="dir"?`d:${X.path}`:`f:${X.path}`),X.children&&$?.has(X.path))for(let Y of X.children)Z(Y)};return Z(_),G.join("|")}function Zj(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,G=Array.isArray($.children)?$.children:null;if(!G)return _;let Z=j?new Map(j.map((L)=>[L?.path,L])):new Map,X=!j||j.length!==G.length,Y=G.map((L)=>{let V=Zj(Z.get(L.path),L);if(V!==Z.get(L.path))X=!0;return V});return X?{...$,children:Y}:_}function jj(_,$,j){if(!_)return _;if(_.path===$)return Zj(_,j);if(!Array.isArray(_.children))return _;let G=!1,Z=_.children.map((X)=>{let Y=jj(X,$,j);if(Y!==X)G=!0;return Y});return G?{..._,children:Z}:_}var EV=4,$j=14,oJ=16;function DV(_){if(!_)return 0;if(_.type==="file"){let G=Math.max(0,Number(_.size)||0);return _.__bytes=G,G}let $=Array.isArray(_.children)?_.children:[],j=0;for(let G of $)j+=DV(G);return _.__bytes=j,j}function zV(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),G={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=EV)return G;let Z=Array.isArray(_.children)?_.children:[],X=[];for(let L of Z){let V=Math.max(0,Number(L?.__bytes??L?.size??0));if(V<=0)continue;if(L.type==="dir")X.push({kind:"dir",node:L,size:V});else X.push({kind:"file",name:L.name,path:L.path,size:V})}X.sort((L,V)=>V.size-L.size);let Y=X;if(X.length>$j){let L=X.slice(0,$j-1),V=X.slice($j-1),K=V.reduce((Q,q)=>Q+q.size,0);L.push({kind:"other",name:`+${V.length} more`,path:`${G.path}/[other]`,size:K}),Y=L}return G.children=Y.map((L)=>{if(L.kind==="dir")return zV(L.node,$+1);return{name:L.name,path:L.path,size:L.size,children:[]}}),G}function NV(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function WV(_,$,j){let G=((_+Math.PI/2)*180/Math.PI+360)%360,Z=j?Math.max(30,70-$*10):Math.max(34,66-$*8),X=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${G.toFixed(1)} ${Z}% ${X}%)`}function E8(_,$,j,G){return{x:_+j*Math.cos(G),y:$+j*Math.sin(G)}}function Xj(_,$,j,G,Z,X){let Y=Math.PI*2-0.0001,L=X-Z>Y?Z+Y:X,V=E8(_,$,G,Z),K=E8(_,$,G,L),Q=E8(_,$,j,L),q=E8(_,$,j,Z),B=L-Z>Math.PI?1:0;return[`M ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,`A ${G} ${G} 0 ${B} 1 ${K.x.toFixed(3)} ${K.y.toFixed(3)}`,`L ${Q.x.toFixed(3)} ${Q.y.toFixed(3)}`,`A ${j} ${j} 0 ${B} 0 ${q.x.toFixed(3)} ${q.y.toFixed(3)}`,"Z"].join(" ")}var OV={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function JV(_,$,j){let G=[],Z=[],X=Math.max(0,Number($)||0),Y=(L,V,K,Q)=>{let q=Array.isArray(L?.children)?L.children:[];if(!q.length)return;let B=Math.max(0,Number(L.size)||0);if(B<=0)return;let N=K-V,U=V;q.forEach((E,D)=>{let H=Math.max(0,Number(E.size)||0);if(H<=0)return;let k=H/B,O=U,W=D===q.length-1?K:U+N*k;if(U=W,W-O<0.003)return;let I=OV[Q];if(I){let x=WV(O,Q,j);if(G.push({key:E.path,path:E.path,label:E.name,size:H,color:x,depth:Q,startAngle:O,endAngle:W,innerRadius:I[0],outerRadius:I[1],d:Xj(120,120,I[0],I[1],O,W)}),Q===1)Z.push({key:E.path,name:E.name,size:H,pct:X>0?H/X*100:0,color:x})}if(Q<EV)Y(E,O,W,Q+1)})};return Y(_,-Math.PI/2,Math.PI*3/2,1),{segments:G,legend:Z}}function Gj(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let G of j){let Z=Gj(G,$);if(Z)return Z}return null}function AV(_,$,j,G){if(!j||j<=0)return{segments:[],legend:[]};let Z=OV[1];if(!Z)return{segments:[],legend:[]};let X=-Math.PI/2,Y=Math.PI*3/2,L=WV(X,1,G),K=`${$||"."}/[files]`;return{segments:[{key:K,path:K,label:_,size:j,color:L,depth:1,startAngle:X,endAngle:Y,innerRadius:Z[0],outerRadius:Z[1],d:Xj(120,120,Z[0],Z[1],X,Y)}],legend:[{key:K,name:_,size:j,pct:100,color:L}]}}function BV(_,$=!1,j=!1){if(!_)return null;let G=DV(_),Z=zV(_,0),X=Z.size||G,{segments:Y,legend:L}=JV(Z,X,j);if(!Y.length&&X>0){let V=AV("[files]",Z.path,X,j);Y=V.segments,L=V.legend}return{root:Z,totalSize:X,segments:Y,legend:L,truncated:$,isDarkTheme:j}}function sJ({payload:_}){if(!_)return null;let[$,j]=C(null),[G,Z]=C(_?.root?.path||"."),[X,Y]=C(()=>[_?.root?.path||"."]),[L,V]=C(!1);u(()=>{let T=_?.root?.path||".";Z(T),Y([T]),j(null)},[_?.root?.path,_?.totalSize]),u(()=>{if(!G)return;V(!0);let T=setTimeout(()=>V(!1),180);return()=>clearTimeout(T)},[G]);let K=Y0(()=>{return Gj(_.root,G)||_.root},[_?.root,G]),Q=K?.size||_.totalSize||0,{segments:q,legend:B}=Y0(()=>{let T=JV(K,Q,_.isDarkTheme);if(T.segments.length>0)return T;if(Q<=0)return T;let w=K?.children?.length?"Total":"[files]";return AV(w,K?.path||_?.root?.path||".",Q,_.isDarkTheme)},[K,Q,_.isDarkTheme,_?.root?.path]),[N,U]=C(q),E=g(new Map),D=g(0);u(()=>{let T=E.current,w=new Map(q.map((b)=>[b.key,b])),y=performance.now(),P=220,f=(b)=>{let c=Math.min(1,(b-y)/220),h=c*(2-c),_0=q.map((v)=>{let z0=T.get(v.key)||{startAngle:v.startAngle,endAngle:v.startAngle,innerRadius:v.innerRadius,outerRadius:v.innerRadius},j0=(V0,q0)=>V0+(q0-V0)*h,$0=j0(z0.startAngle,v.startAngle),L0=j0(z0.endAngle,v.endAngle),B0=j0(z0.innerRadius,v.innerRadius),t=j0(z0.outerRadius,v.outerRadius);return{...v,d:Xj(120,120,B0,t,$0,L0)}});if(U(_0),c<1)D.current=requestAnimationFrame(f)};if(D.current)cancelAnimationFrame(D.current);return D.current=requestAnimationFrame(f),E.current=w,()=>{if(D.current)cancelAnimationFrame(D.current)}},[q]);let H=N.length?N:q,k=Q>0?a_(Q):"0 B",O=K?.name||"",I=(O&&O!=="."?O:"Total")||"Total",x=k,J=X.length>1,A=(T)=>{if(!T?.path)return;let w=Gj(_.root,T.path);if(!w||!Array.isArray(w.children)||w.children.length===0)return;Y((y)=>[...y,w.path]),Z(w.path),j(null)},z=()=>{if(!J)return;Y((T)=>{let w=T.slice(0,-1);return Z(w[w.length-1]||_?.root?.path||"."),w}),j(null)};return F`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${L?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${K?.path||_?.root?.path||"."}`}
                data-segments=${H.length}
                data-base-size=${Q}>
                ${H.map((T)=>F`
                    <path
                        key=${T.key}
                        d=${T.d}
                        fill=${T.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===T.key?" is-hovered":""}`}
                        onMouseEnter=${()=>j(T)}
                        onMouseLeave=${()=>j(null)}
                        onTouchStart=${()=>j(T)}
                        onTouchEnd=${()=>j(null)}
                        onClick=${()=>A(T)}
                    >
                        <title>${T.label} — ${a_(T.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${J?" is-drill":""}`}
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${I}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${x}</text>
                </g>
            </svg>
            ${B.length>0&&F`
                <div class="workspace-folder-starburst-legend">
                    ${B.slice(0,8).map((T)=>F`
                        <div key=${T.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${T.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${T.name}>${T.name}</span>
                            <span class="workspace-folder-starburst-size">${a_(T.size)}</span>
                            <span class="workspace-folder-starburst-pct">${T.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&F`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function FV(_){if(typeof document>"u"||!_)return;let $=document.createElement("a");$.href=_,$.setAttribute("download",""),$.rel="noopener",$.style.display="none",document.body.appendChild($),$.click(),$.remove()}function kV(_){switch(_?.state){case"indexing":return"Indexing workspace…";case"ready":return"Workspace index ready";case"stale":return"Workspace index may be stale";case"failed":return"Workspace index failed";case"never_indexed":return"Workspace index not built yet";default:return"Checking workspace index…"}}function aJ(_){if(!_)return"Workspace index status";let $=[kV(_)];if(_.last_indexed_at)$.push(`Last indexed: ${_.last_indexed_at}`);if(typeof _.indexed_file_count==="number")$.push(`Indexed files: ${_.indexed_file_count}`);if(Array.isArray(_.roots)&&_.roots.length)$.push(`Roots: ${_.roots.join(", ")}`);if(_.last_error)$.push(`Error: ${_.last_error}`);return $.join(`
`)}function tJ(_){let $=_?.target;if($&&typeof $==="object")return $;return $?.parentElement||null}function eJ(_){return Boolean(_?.closest?.(".workspace-node-icon, .workspace-label-text"))}function _A(_,$=null){let j=tJ(_),G=j?.closest?.(".workspace-row");if(!G)return null;let Z=G.dataset.type,X=G.dataset.path;if(!X||X===".")return null;if($===X)return null;let Y=_?.touches?.[0];if(!Y)return null;return{type:Z,path:X,dragPath:eJ(j)?X:null,startX:Y.clientX,startY:Y.clientY}}function yV({onFileSelect:_,onFolderSelect:$,visible:j=!0,active:G=void 0,onOpenEditor:Z,onOpenTerminalTab:X,onOpenVncTab:Y,onToggleTerminal:L,terminalVisible:V=!1}){let[K,Q]=C(null),[q,B]=C(new Set(["."])),[N,U]=C(null),[E,D]=C(null),[H,k]=C(""),[O,W]=C(null),[,I]=C(null),[x,J]=C(!0),[A,z]=C(!1),[T,w]=C(null),[y,P]=C(()=>F$("workspaceShowHidden",!1)),[f,b]=C(!1),[c,h]=C(null),[_0,v]=C(null),[e,z0]=C(null),[j0,$0]=C(!1),[L0,B0]=C(null),[t,V0]=C(null),[q0,k0]=C(null),[s,X0]=C(!1),[D0,C0]=C(()=>J2()),[g0,n0]=C(()=>NV()),[j_,m0]=C(()=>e9({stored:z1(H8),...t9()})),[d0,S0]=C(!1),o0=Math.max(15000,(Number(D0?.refreshIntervalSec)||60)*1000),v0=Math.max(0,Number(D0?.folderPreviewDepth)||0),a0=g(q),h0=g(""),N_=g(null),t0=g(0),b0=g(new Set),A0=g(null),L_=g(null),e0=g(new Map),O_=g(_),H0=g($),f0=g(Z),T0=g(null),i0=g(null),A_=g(null),K_=g(null),E_=g(null),H_=g(null),y_=g("."),C_=g(0),u_=g({path:null,dragging:!1,startX:0,startY:0}),D_=g({path:null,dragging:!1,startX:0,startY:0}),G0=g({path:null,timer:0}),W0=g(!1),r=g(0),i=g(new Map),o=g(null),Z0=g(null),K0=g(null),J0=g(null),c0=g(null),R0=g(null),I0=g(y),w0=g(j),p0=g(G??j),U0=g(0),l0=g(e),Y_=g(f),G_=g(c),u0=g(null),z_=g({x:0,y:0}),B_=g(0),d=g(null),O0=g(N),Z_=g(E),q_=g(null),r_=g(O);O_.current=_,H0.current=$,f0.current=Z,u(()=>{a0.current=q},[q]),u(()=>{I0.current=y},[y]),u(()=>{w0.current=j},[j]),u(()=>{p0.current=G??j},[G,j]),u(()=>{l0.current=e},[e]);let B1=R(()=>{if(!C_.current)return;clearTimeout(C_.current),C_.current=0},[]);u(()=>()=>B1(),[B1]),u(()=>{if(typeof window>"u")return;let S=()=>{m0(e9({stored:z1(H8),...t9()}))};S();let l=()=>S(),p=()=>S(),a=(E0)=>{if(!E0||E0.key===null||E0.key===H8)S()};window.addEventListener("resize",l),window.addEventListener("focus",p),window.addEventListener("storage",a);let F0=window.matchMedia?.("(pointer: coarse)"),Q0=window.matchMedia?.("(hover: none)"),y0=(E0,s0)=>{if(!E0)return;if(E0.addEventListener)E0.addEventListener("change",s0);else if(E0.addListener)E0.addListener(s0)},x0=(E0,s0)=>{if(!E0)return;if(E0.removeEventListener)E0.removeEventListener("change",s0);else if(E0.removeListener)E0.removeListener(s0)};return y0(F0,l),y0(Q0,l),()=>{window.removeEventListener("resize",l),window.removeEventListener("focus",p),window.removeEventListener("storage",a),x0(F0,l),x0(Q0,l)}},[]),u(()=>{if(typeof window>"u")return;let S=()=>{C0(J2())},l=(F0)=>{if(!F0||F0.key===null||F0.key===l6||F0.key===h6)S()},p=()=>S(),a=(F0)=>{let Q0=F0?.detail?.settings;if(Q0&&typeof Q0==="object"){C0({refreshIntervalSec:Number(Q0.refreshIntervalSec)||60,folderPreviewDepth:Math.max(0,Number(Q0.folderPreviewDepth)||0)});return}S()};return window.addEventListener("focus",p),window.addEventListener("storage",l),window.addEventListener(c6,a),()=>{window.removeEventListener("focus",p),window.removeEventListener("storage",l),window.removeEventListener(c6,a)}},[]),u(()=>{let S=(l)=>{let p=l?.detail?.path;if(!p)return;let a=p.split("/"),F0=[];for(let Q0=1;Q0<a.length;Q0++)F0.push(a.slice(0,Q0).join("/"));if(F0.length)B((Q0)=>{let y0=new Set(Q0);y0.add(".");for(let x0 of F0)y0.add(x0);return y0});U(p),requestAnimationFrame(()=>{let Q0=document.querySelector(`[data-path="${CSS.escape(p)}"]`);if(Q0)Q0.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",S),()=>window.removeEventListener("workspace-reveal-path",S)},[]),u(()=>{Y_.current=f},[f]),u(()=>{G_.current=c},[c]),u(()=>{O0.current=N},[N]),u(()=>{Z_.current=E},[E]),u(()=>{r_.current=O},[O]),u(()=>{if(typeof window>"u"||typeof document>"u")return;let S=()=>n0(NV());S();let l=window.matchMedia?.("(prefers-color-scheme: dark)"),p=()=>S();if(l?.addEventListener)l.addEventListener("change",p);else if(l?.addListener)l.addListener(p);let a=typeof MutationObserver<"u"?new MutationObserver(()=>S()):null;if(a?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)a?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(l?.removeEventListener)l.removeEventListener("change",p);else if(l?.removeListener)l.removeListener(p);a?.disconnect()}},[]),u(()=>{if(!E)return;let S=E_.current;if(!S)return;let l=requestAnimationFrame(()=>{LV(S)});return()=>cancelAnimationFrame(l)},[E]),u(()=>{if(!d0)return;let S=(p)=>{let a=p?.target;if(!(a instanceof Element))return;if(c0.current?.contains(a))return;if(R0.current?.contains(a))return;S0(!1)},l=(p)=>{if(p?.key==="Escape")S0(!1),R0.current?.focus?.()};return document.addEventListener("mousedown",S),document.addEventListener("touchstart",S,{passive:!0}),document.addEventListener("keydown",l),()=>{document.removeEventListener("mousedown",S),document.removeEventListener("touchstart",S),document.removeEventListener("keydown",l)}},[d0]);let g_=async(S,l={})=>{let p=Boolean(l?.autoOpen),a=String(S||"").trim();z(!0),W(null),I(null);try{let F0=await T7(a,20000);if(p&&a&&qV(a,F0,{resolvePane:(Q0)=>X_.resolve(Q0)}))return f0.current?.(a,F0),F0;return W(F0),F0}catch(F0){let Q0={error:F0.message||"Failed to load preview"};return W(Q0),Q0}finally{z(!1)}};T0.current=g_;let J1=R(async()=>{try{let S=await M7("all");return k0(S),S}catch(S){return console.warn("[workspace-explorer] Failed to load workspace index status:",S),null}},[]);L_.current=J1;let P_=R(()=>{L_.current?.()},[]),M_=async()=>{if(!w0.current)return;try{let S=await V5("",1,I0.current),l=QV(S.root,a0.current,I0.current);if(l===h0.current){J(!1);return}if(h0.current=l,N_.current=S.root,!t0.current)t0.current=requestAnimationFrame(()=>{t0.current=0,Q((p)=>Zj(p,N_.current)),J(!1)})}catch(S){w(S.message||"Failed to load workspace"),J(!1)}},A1=async(S)=>{if(!S)return;if(b0.current.has(S))return;b0.current.add(S);try{let l=await V5(S,1,I0.current);Q((p)=>jj(p,S,l.root))}catch(l){w(l.message||"Failed to load workspace")}finally{b0.current.delete(S)}};i0.current=A1;let W_=R(()=>{let S=N;if(!S)return".";let l=e0.current?.get(S);if(l&&l.type==="dir")return l.path;if(S==="."||!S.includes("/"))return".";let p=S.split("/");return p.pop(),p.join("/")||"."},[N]),k_=R((S)=>{let l=S?.closest?.(".workspace-row");if(!l)return null;let p=l.dataset.path,a=l.dataset.type;if(!p)return null;if(a==="dir")return p;if(p.includes("/")){let F0=p.split("/");return F0.pop(),F0.join("/")||"."}return"."},[]),F1=R((S)=>{return k_(S?.target||null)},[k_]),m_=R((S)=>{l0.current=S,z0(S)},[]),n_=R(()=>{let S=G0.current;if(S?.timer)clearTimeout(S.timer);G0.current={path:null,timer:0}},[]),s_=R((S)=>{if(!S||S==="."){n_();return}let l=e0.current?.get(S);if(!l||l.type!=="dir"){n_();return}if(a0.current?.has(S)){n_();return}if(G0.current?.path===S)return;n_();let p=setTimeout(()=>{G0.current={path:null,timer:0},i0.current?.(S),B((a)=>{let F0=new Set(a);return F0.add(S),F0})},600);G0.current={path:S,timer:p}},[n_]),U_=R((S,l)=>{if(z_.current={x:S,y:l},B_.current)return;B_.current=requestAnimationFrame(()=>{B_.current=0;let p=u0.current;if(!p)return;let a=z_.current;p.style.transform=`translate(${a.x+12}px, ${a.y+12}px)`})},[]),x1=R((S)=>{if(!S)return;let p=(e0.current?.get(S)?.name||S.split("/").pop()||S).trim();if(!p)return;v({path:S,label:p})},[]),U1=R(()=>{if(v(null),B_.current)cancelAnimationFrame(B_.current),B_.current=0;if(u0.current)u0.current.style.transform="translate(-9999px, -9999px)"},[]),g1=R((S)=>{if(!S)return".";let l=e0.current?.get(S);if(l&&l.type==="dir")return l.path;if(S==="."||!S.includes("/"))return".";let p=S.split("/");return p.pop(),p.join("/")||"."},[]),k1=R(()=>{D(null),k("")},[]),e1=R((S)=>{if(!S)return;let p=(e0.current?.get(S)?.name||S.split("/").pop()||S).trim();if(!p||S===".")return;D(S),k(p)},[]),c4=R(async()=>{let S=Z_.current;if(!S)return;let l=(H||"").trim();if(!l){k1();return}let p=e0.current?.get(S),a=(p?.name||S.split("/").pop()||S).trim();if(l===a){k1();return}try{let Q0=(await C7(S,l))?.path||S,y0=S.includes("/")?S.split("/").slice(0,-1).join("/")||".":".";if(k1(),w(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:S,newPath:Q0,type:p?.type||"file"}})),p?.type==="dir")B((x0)=>{let E0=new Set;for(let s0 of x0)if(s0===S)E0.add(Q0);else if(s0.startsWith(`${S}/`))E0.add(`${Q0}${s0.slice(S.length)}`);else E0.add(s0);return E0});if(U(Q0),p?.type==="dir")W(null),z(!1),I(null);else T0.current?.(Q0);i0.current?.(y0),P_()}catch(F0){w(F0?.message||"Failed to rename file")}},[k1,H,P_]),A$=R(async(S)=>{let a=S||".";for(let F0=0;F0<50;F0+=1){let y0=`untitled${F0===0?"":`-${F0}`}.md`;try{let E0=(await I7(a,y0,""))?.path||(a==="."?y0:`${a}/${y0}`);if(a&&a!==".")B((s0)=>new Set([...s0,a]));U(E0),w(null),i0.current?.(a),T0.current?.(E0),P_();return}catch(x0){if(x0?.status===409||x0?.code==="file_exists")continue;w(x0?.message||"Failed to create file");return}}w("Failed to create file (untitled name already in use).")},[]),t_=R((S)=>{if(S?.stopPropagation?.(),j0)return;let l=g1(O0.current);A$(l)},[j0,g1,A$]);u(()=>{if(typeof window>"u")return;let S=(l)=>{let p=l?.detail?.updates||[];if(!Array.isArray(p)||p.length===0)return;Q((x0)=>{let E0=x0;for(let s0 of p){if(!s0?.root)continue;if(!E0||s0.path==="."||!s0.path)E0=s0.root;else E0=jj(E0,s0.path,s0.root)}if(E0)h0.current=QV(E0,a0.current,I0.current);return J(!1),E0});let a=O0.current;if(Boolean(a)&&p.some((x0)=>{let E0=x0?.path||"";if(!E0||E0===".")return!0;return a===E0||a.startsWith(`${E0}/`)||E0.startsWith(`${a}/`)}))i.current.clear();if(P_(),!a||!r_.current)return;let Q0=e0.current?.get(a);if(Q0&&Q0.type==="dir")return;if(p.some((x0)=>{let E0=x0?.path||"";if(!E0||E0===".")return!0;return a===E0||a.startsWith(`${E0}/`)}))T0.current?.(a)};return window.addEventListener("workspace-update",S),()=>window.removeEventListener("workspace-update",S)},[]),A0.current=M_;let c_=g(()=>{if(typeof window>"u")return;let S=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),l=p0.current??w0.current,p=document.visibilityState!=="hidden"&&(l||S.matches&&w0.current);q5(p,I0.current).catch((a)=>{console.debug("[workspace-explorer] Workspace visibility ping failed.",a,{visible:p,showHidden:I0.current})})}).current,y1=g(0),H1=g(()=>{if(y1.current)clearTimeout(y1.current);y1.current=setTimeout(()=>{y1.current=0,c_()},250)}).current;u(()=>{if(w0.current)A0.current?.(),L_.current?.();H1()},[j,G]),u(()=>{A0.current(),L_.current?.();let S=setInterval(()=>{A0.current(),L_.current?.()},o0);return()=>clearInterval(S)},[o0]),u(()=>{c_();let S=z4("previewHeight",null),l=Number.isFinite(S)?Math.min(Math.max(S,80),600):280;if(r.current=l,A_.current)A_.current.style.setProperty("--preview-height",`${l}px`);let p=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),a=()=>H1();if(p.addEventListener)p.addEventListener("change",a);else if(p.addListener)p.addListener(a);return document.addEventListener("visibilitychange",a),()=>{if(t0.current)cancelAnimationFrame(t0.current),t0.current=0;if(p.removeEventListener)p.removeEventListener("change",a);else if(p.removeListener)p.removeListener(a);if(document.removeEventListener("visibilitychange",a),y1.current)clearTimeout(y1.current),y1.current=0;q5(!1,I0.current).catch((F0)=>{console.debug("[workspace-explorer] Workspace visibility teardown ping failed.",F0,{showHidden:I0.current})})}},[]);let _1=Y0(()=>HV(K,q,y),[K,q,y]),k$=Y0(()=>new Map(_1.map((S)=>[S.node.path,S.node])),[_1]),y$=Y0(()=>VV(j_),[j_]);e0.current=k$;let w_=(N?e0.current.get(N):null)?.type==="dir";u(()=>{if(!N||!w_){V0(null),o.current=null,Z0.current=null;return}if(v0<=0){V0({loading:!1,error:null,payload:null,disabled:!0}),o.current=null,Z0.current=null;return}let S=N,l=`${y?"hidden":"visible"}:${v0}:${N}`,p=i.current,a=p.get(l);if(a?.root){p.delete(l),p.set(l,a);let y0=BV(a.root,Boolean(a.truncated),g0);if(y0)o.current=y0,Z0.current=N,V0({loading:!1,error:null,payload:y0,disabled:!1});return}let F0=o.current,Q0=Z0.current;V0({loading:!0,error:null,payload:Q0===N?F0:null,disabled:!1}),V5(N,v0,y).then((y0)=>{if(O0.current!==S)return;let x0={root:y0?.root,truncated:Boolean(y0?.truncated)};p.delete(l),p.set(l,x0);while(p.size>oJ){let s0=p.keys().next().value;if(!s0)break;p.delete(s0)}let E0=BV(x0.root,x0.truncated,g0);o.current=E0,Z0.current=N,V0({loading:!1,error:null,payload:E0,disabled:!1})}).catch((y0)=>{if(O0.current!==S)return;V0({loading:!1,error:y0?.message||"Failed to load folder size chart",payload:Q0===N?F0:null,disabled:!1})})},[N,w_,y,g0,v0]);let K1=Boolean(O&&O.kind==="text"&&!w_&&(!O.size||O.size<=262144)),M$=K1?"Open in editor":O?.size>262144?"File too large to edit":"File is not editable",l4=Boolean(N&&!w_&&iJ(N)),$$=Boolean(N&&N!=="."),h4=Boolean(N&&!w_),r4=Boolean(N&&!w_),w$=N&&w_?x6(N,y):null,T$=kV(q0),b1=aJ(q0),v1=q0?.state||"never_indexed",p4=v1!=="ready",V1=R(()=>S0(!1),[]),R_=R(async(S)=>{V1();try{await S?.()}catch(l){console.warn("[workspace-explorer] Header menu action failed:",l)}},[V1]),n4=R(async(S)=>{S?.stopPropagation?.(),X0(!0),k0((l)=>({scope:"all",last_indexed_at:l?.last_indexed_at||null,last_error:null,indexed_file_count:l?.indexed_file_count||0,roots:l?.roots||[],updated_at:l?.updated_at||null,state:"indexing"}));try{let l=await w7("all");k0(l),w(null),h0.current="",A0.current?.()}catch(l){let p=l?.message||"Failed to reindex workspace";k0((a)=>({scope:"all",last_indexed_at:a?.last_indexed_at||null,last_error:p,indexed_file_count:a?.indexed_file_count||0,roots:a?.roots||[],updated_at:a?.updated_at||null,state:"failed"})),w(p)}finally{X0(!1)}},[]);u(()=>{let S=K0.current;if(J0.current)J0.current.dispose(),J0.current=null;if(!S)return;if(S.innerHTML="",!N||w_||!O||O.error)return;let l={path:N,content:typeof O.text==="string"?O.text:void 0,mtime:O.mtime,size:O.size,preview:O,mode:"view"},p=X_.resolve(l)||X_.get("workspace-preview-default");if(!p)return;let a=p.mount(S,l);return J0.current=a,()=>{if(J0.current===a)a.dispose(),J0.current=null;S.innerHTML=""}},[N,w_,O]);let I1=(S)=>{let l=S?.target;if(l instanceof Element)return l;return l?.parentElement||null},x$=(S)=>{return Boolean(S?.closest?.(".workspace-node-icon, .workspace-label-text"))},d4=(S)=>{if(!S)return!1;if(S.closest?.('input, textarea, [contenteditable="true"]'))return!0;return Boolean(S.isContentEditable)},g2=g((S)=>{let l=I1(S),p=l?.closest?.("[data-path]");if(!p)return;let a=p.dataset.path;if(!a||a===".")return;let F0=Boolean(l?.closest?.("button"))||Boolean(l?.closest?.("a"))||Boolean(l?.closest?.("input")),Q0=Boolean(l?.closest?.(".workspace-caret"));if(F0||Q0)return;if(Z_.current===a)return;e1(a)}).current,b2=g((S)=>{if(W0.current){W0.current=!1;return}let l=I1(S),p=l?.closest?.("[data-path]");if(K_.current?.focus?.(),!p)return;let a=p.dataset.path,F0=p.dataset.type,Q0=Boolean(l?.closest?.(".workspace-caret")),y0=Boolean(l?.closest?.("button"))||Boolean(l?.closest?.("a"))||Boolean(l?.closest?.("input")),x0=O0.current===a,E0=Z_.current;if(E0){if(E0===a)return;k1()}if(F0==="dir"){if(q_.current=null,U(a),W(null),I(null),z(!1),!a0.current.has(a))i0.current?.(a);if(x0&&!Q0)return;B((p_)=>{let $1=new Set(p_);if($1.has(a))$1.delete(a);else $1.add(a);return $1})}else{q_.current=null,U(a);let s0=e0.current.get(a);if(s0)O_.current?.(s0.path,s0);if(!y0&&!Q0)T0.current?.(a)}}).current,X4=g(()=>{h0.current="",A0.current(),L_.current?.(),Array.from(a0.current||[]).filter((l)=>l&&l!==".").forEach((l)=>i0.current?.(l))}).current,I$=g(()=>{q_.current=null,U(null),W(null),I(null),z(!1)}).current,i4=g(()=>{P((S)=>{let l=!S;if(typeof window<"u")V_("workspaceShowHidden",String(l));return I0.current=l,q5(!0,l).catch((a)=>{console.debug("[workspace-explorer] Workspace visibility refresh after toggling hidden files failed.",a,{showHidden:l})}),h0.current="",A0.current?.(),Array.from(a0.current||[]).filter((a)=>a&&a!==".").forEach((a)=>i0.current?.(a)),l})}).current,o4=g((S)=>{if(I1(S)?.closest?.("[data-path]"))return;I$()}).current,q1=R(async(S)=>{if(!S)return;let l=S.split("/").pop()||S;if(!window.confirm(`Delete "${l}"? This cannot be undone.`))return;try{await f7(S);let a=S.includes("/")?S.split("/").slice(0,-1).join("/")||".":".";if(O0.current===S)I$();i0.current?.(a),w(null),P_()}catch(a){W((F0)=>({...F0||{},error:a.message||"Failed to delete file"}))}},[I$]),C$=R((S)=>{let l=K_.current;if(!l||!S||typeof CSS>"u"||typeof CSS.escape!=="function")return;l.querySelector(`[data-path="${CSS.escape(S)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),Y4=R((S)=>{let l=I1(S);if(Z_.current||d4(l))return;let p=_1;if(!p||p.length===0)return;let a=N?p.findIndex((F0)=>F0.node.path===N):-1;if(S.key==="ArrowDown"){S.preventDefault();let F0=Math.min(a+1,p.length-1),Q0=p[F0];if(!Q0)return;if(U(Q0.node.path),Q0.node.type!=="dir")O_.current?.(Q0.node.path,Q0.node),T0.current?.(Q0.node.path);else W(null),z(!1),I(null);C$(Q0.node.path);return}if(S.key==="ArrowUp"){S.preventDefault();let F0=a<=0?0:a-1,Q0=p[F0];if(!Q0)return;if(U(Q0.node.path),Q0.node.type!=="dir")O_.current?.(Q0.node.path,Q0.node),T0.current?.(Q0.node.path);else W(null),z(!1),I(null);C$(Q0.node.path);return}if(S.key==="ArrowRight"&&a>=0){let F0=p[a];if(F0?.node?.type==="dir"&&!q.has(F0.node.path))S.preventDefault(),i0.current?.(F0.node.path),B((Q0)=>new Set([...Q0,F0.node.path]));return}if(S.key==="ArrowLeft"&&a>=0){let F0=p[a];if(F0?.node?.type==="dir"&&q.has(F0.node.path))S.preventDefault(),B((Q0)=>{let y0=new Set(Q0);return y0.delete(F0.node.path),y0});return}if(S.key==="Enter"&&a>=0){S.preventDefault();let F0=p[a];if(!F0)return;let Q0=F0.node.path;if(F0.node.type==="dir"){if(!a0.current.has(Q0))i0.current?.(Q0);B((x0)=>{let E0=new Set(x0);if(E0.has(Q0))E0.delete(Q0);else E0.add(Q0);return E0}),W(null),I(null),z(!1)}else O_.current?.(Q0,F0.node),T0.current?.(Q0);return}if((S.key==="Delete"||S.key==="Backspace")&&a>=0){let F0=p[a];if(!F0||F0.node.type==="dir")return;S.preventDefault(),q1(F0.node.path);return}if(S.key==="Escape")S.preventDefault(),I$()},[I$,q1,q,_1,C$,N]),L4=R((S)=>{let l=_A(S,Z_.current);if(!l)return;u_.current={path:l.dragPath,dragging:!1,startX:l.startX,startY:l.startY}},[]),m1=R(()=>{let S=u_.current;if(S?.dragging&&S.path){let l=l0.current||W_(),p=d.current;if(typeof p==="function")p(S.path,l)}u_.current={path:null,dragging:!1,startX:0,startY:0},U0.current=0,b(!1),h(null),m_(null),n_(),U1()},[W_,U1,m_,n_]),E1=R((S)=>{let l=u_.current,p=S?.touches?.[0];if(!p||!l?.path)return;let a=Math.abs(p.clientX-l.startX),F0=Math.abs(p.clientY-l.startY),Q0=a>8||F0>8;if(!l.dragging&&Q0)l.dragging=!0,b(!0),h("move"),x1(l.path);if(l.dragging){S.preventDefault(),U_(p.clientX,p.clientY);let y0=document.elementFromPoint(p.clientX,p.clientY),x0=k_(y0)||W_();if(l0.current!==x0)m_(x0);s_(x0)}},[k_,W_,x1,U_,m_,s_]),v2=g((S)=>{S.preventDefault();let l=A_.current;if(!l)return;let p=S.clientY,a=r.current||280,F0=S.currentTarget;F0.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let Q0=p,y0=(E0)=>{Q0=E0.clientY;let s0=l.clientHeight-80,p_=Math.min(Math.max(a-(E0.clientY-p),80),s0);l.style.setProperty("--preview-height",`${p_}px`),r.current=p_},x0=()=>{let E0=l.clientHeight-80,s0=Math.min(Math.max(a-(Q0-p),80),E0);r.current=s0,F0.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",V_("previewHeight",String(Math.round(s0))),document.removeEventListener("mousemove",y0),document.removeEventListener("mouseup",x0)};document.addEventListener("mousemove",y0),document.addEventListener("mouseup",x0)}).current,K4=g((S)=>{S.preventDefault();let l=A_.current;if(!l)return;let p=S.touches[0];if(!p)return;let a=p.clientY,F0=r.current||280,Q0=S.currentTarget;Q0.classList.add("dragging"),document.body.style.userSelect="none";let y0=(E0)=>{let s0=E0.touches[0];if(!s0)return;E0.preventDefault();let p_=l.clientHeight-80,$1=Math.min(Math.max(F0-(s0.clientY-a),80),p_);l.style.setProperty("--preview-height",`${$1}px`),r.current=$1},x0=()=>{Q0.classList.remove("dragging"),document.body.style.userSelect="",V_("previewHeight",String(Math.round(r.current||F0))),document.removeEventListener("touchmove",y0),document.removeEventListener("touchend",x0),document.removeEventListener("touchcancel",x0)};document.addEventListener("touchmove",y0,{passive:!1}),document.addEventListener("touchend",x0),document.addEventListener("touchcancel",x0)}).current,j$=R((S=N)=>{if(!S)return;FV(T6(S))},[N]),e_=async()=>{if(!N||w_)return;await q1(N)},P$=(S)=>{return Array.from(S?.dataTransfer?.types||[]).includes("Files")},s4=R((S)=>{if(!P$(S))return;if(S.preventDefault(),U0.current+=1,!Y_.current)b(!0);h("upload");let l=F1(S)||W_();m_(l),s_(l)},[W_,F1,m_,s_]),G$=R((S)=>{if(!P$(S))return;if(S.preventDefault(),S.dataTransfer)S.dataTransfer.dropEffect="copy";if(!Y_.current)b(!0);if(G_.current!=="upload")h("upload");let l=F1(S)||W_();if(l0.current!==l)m_(l);s_(l)},[W_,F1,m_,s_]),b5=R((S)=>{if(!P$(S))return;if(S.preventDefault(),U0.current=Math.max(0,U0.current-1),U0.current===0)b(!1),h(null),m_(null),n_()},[m_,n_]),b_=R(async(S,l=".")=>{let p=Array.from(S||[]);if(p.length===0)return;let a=l&&l!==""?l:".",F0=a!=="."?a:"workspace root";B1(),$0(!0),B0({current:0,total:p.length,name:"",percent:0,done:!1,error:null});try{let Q0=null;for(let y0=0;y0<p.length;y0++){let x0=p[y0],E0=x0?.name||`file ${y0+1}`;B0((p_)=>({...p_,current:y0+1,name:E0,percent:0}));let s0=(p_)=>B0(($1)=>({...$1,percent:p_.percent}));try{Q0=await w6(x0,a,{onProgress:s0})}catch(p_){let $1=p_?.status,K$=p_?.code;if($1===409||K$==="file_exists"){if(!window.confirm(`"${E0}" already exists in ${F0}. Overwrite?`))continue;Q0=await w6(x0,a,{overwrite:!0,onProgress:s0})}else throw p_}}if(Q0?.path)q_.current=Q0.path,U(Q0.path),T0.current?.(Q0.path);i0.current?.(a),P_(),B0((y0)=>({...y0,done:!0})),B1(),C_.current=window.setTimeout(()=>{C_.current=0,B0(null)},1500)}catch(Q0){w(Q0.message||"Failed to upload file"),B0((y0)=>y0?{...y0,error:Q0.message||"Upload failed"}:null),B1(),C_.current=window.setTimeout(()=>{C_.current=0,B0(null)},4000)}finally{$0(!1)}},[B1]),d8=R(async(S,l)=>{if(!S)return;let p=e0.current?.get(S);if(!p)return;let a=l&&l!==""?l:".",F0=S.includes("/")?S.split("/").slice(0,-1).join("/")||".":".";if(a===F0)return;try{let y0=(await P7(S,a))?.path||S;if(p.type==="dir")B((x0)=>{let E0=new Set;for(let s0 of x0)if(s0===S)E0.add(y0);else if(s0.startsWith(`${S}/`))E0.add(`${y0}${s0.slice(S.length)}`);else E0.add(s0);return E0});if(U(y0),p.type==="dir")W(null),z(!1),I(null);else T0.current?.(y0);i0.current?.(F0),i0.current?.(a),P_()}catch(Q0){w(Q0?.message||"Failed to move entry")}},[]);d.current=d8;let i8=R(async(S)=>{if(!P$(S))return;S.preventDefault(),U0.current=0,b(!1),h(null),z0(null),n_();let l=Array.from(S?.dataTransfer?.files||[]);if(l.length===0)return;let p=l0.current||F1(S)||W_();await b_(l,p)},[W_,F1,b_]),C1=R((S)=>{if(S?.stopPropagation?.(),j0)return;let l=S?.currentTarget?.dataset?.uploadTarget||".";y_.current=l,H_.current?.click()},[j0]),V4=R((S)=>{S?.preventDefault?.(),S?.stopPropagation?.();let l=S?.currentTarget?.dataset?.folderHintTarget||O0.current||".";if(!l)return;H0.current?.(l,e0.current.get(l))},[]),f$=R(()=>{if(j0)return;let S=O0.current,l=S?e0.current?.get(S):null;y_.current=l?.type==="dir"?l.path:".",H_.current?.click()},[j0]),R$=R(()=>{R_(()=>t_(null))},[R_,t_]),S$=R(()=>{R_(()=>f$())},[R_,f$]),a4=R(()=>{R_(()=>X4())},[R_,X4]),Z$=R(()=>{R_(()=>i4())},[R_,i4]),X$=R(()=>{if(!N||!l4)return;R_(()=>f0.current?.(N,O))},[R_,N,l4,O]),q4=R(()=>{if(!N||!K1)return;R_(()=>f0.current?.(N,O))},[R_,N,K1,O]),Q4=R(()=>{if(!N||N===".")return;R_(()=>e1(N))},[R_,N,e1]),Y$=R(()=>{if(!N||w_)return;R_(()=>e_())},[R_,N,w_,e_]),v5=R(()=>{if(!N||w_)return;R_(()=>j$())},[R_,N,w_,j$]),L$=R(()=>{if(!w$)return;V1(),FV(w$)},[V1,w$]),m5=R(()=>{V1(),X?.()},[V1,X]),m2=R(()=>{V1(),Y?.()},[V1,Y]),c2=R(()=>{V1(),L?.()},[V1,L]),l2=R((S)=>{if(!S||S.button!==0)return;let l=S.currentTarget;if(!l||!l.dataset)return;let p=l.dataset.path;if(!p||p===".")return;if(Z_.current===p)return;let a=I1(S);if(a?.closest?.("button, a, input, .workspace-caret"))return;if(!x$(a))return;S.preventDefault(),D_.current={path:p,dragging:!1,startX:S.clientX,startY:S.clientY};let F0=(y0)=>{let x0=D_.current;if(!x0?.path)return;let E0=Math.abs(y0.clientX-x0.startX),s0=Math.abs(y0.clientY-x0.startY),p_=E0>4||s0>4;if(!x0.dragging&&p_)x0.dragging=!0,W0.current=!0,b(!0),h("move"),x1(x0.path),U_(y0.clientX,y0.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(x0.dragging){y0.preventDefault(),U_(y0.clientX,y0.clientY);let $1=document.elementFromPoint(y0.clientX,y0.clientY),K$=k_($1)||W_();if(l0.current!==K$)m_(K$);s_(K$)}},Q0=()=>{document.removeEventListener("mousemove",F0),document.removeEventListener("mouseup",Q0);let y0=D_.current;if(y0?.dragging&&y0.path){let x0=l0.current||W_(),E0=d.current;if(typeof E0==="function")E0(y0.path,x0)}D_.current={path:null,dragging:!1,startX:0,startY:0},U0.current=0,b(!1),h(null),m_(null),n_(),U1(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{W0.current=!1},0)};document.addEventListener("mousemove",F0),document.addEventListener("mouseup",Q0)},[k_,W_,x1,U_,U1,m_,s_,n_]),o8=R(async(S)=>{let l=Array.from(S?.target?.files||[]);if(l.length===0)return;let p=y_.current||".";if(await b_(l,p),y_.current=".",S?.target)S.target.value=""},[b_]);return F`
        <aside
            class=${`workspace-sidebar${f?" workspace-drop-active":""}`}
            data-workspace-scale=${j_}
            ref=${A_}
            onDragEnter=${s4}
            onDragOver=${G$}
            onDragLeave=${b5}
            onDrop=${i8}
        >
            <input type="file" multiple style="display:none" ref=${H_} onChange=${o8} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${R0}
                            class=${`workspace-menu-button${d0?" active":""}`}
                            onClick=${(S)=>{S.stopPropagation(),S0((l)=>!l)}}
                            title="Workspace actions"
                            aria-label="Workspace actions"
                            aria-haspopup="menu"
                            aria-expanded=${d0?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${d0&&F`
                            <div class="workspace-menu-dropdown" ref=${c0} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${R$} disabled=${j0}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${S$} disabled=${j0}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${a4}>Refresh tree</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${()=>R_(()=>n4())} disabled=${s}>
                                    ${s?"Reindexing workspace…":"Reindex workspace"}
                                </button>
                                <button class=${`workspace-menu-item${y?" active":""}`} role="menuitem" onClick=${Z$}>
                                    ${y?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${(X||Y||L)&&F`<div class="workspace-menu-separator"></div>`}
                                ${X&&F`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${m5}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${Y&&F`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${m2}>
                                        Open VNC in tab
                                    </button>
                                `}
                                ${L&&F`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${c2}>
                                        ${V?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}

                                ${N&&F`<div class="workspace-menu-separator"></div>`}
                                ${l4&&F`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${X$}>Open in tab</button>
                                `}
                                ${N&&!w_&&F`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${q4} disabled=${!K1}>Open in editor</button>
                                `}
                                ${$$&&F`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${Q4}>Rename selected</button>
                                `}
                                ${r4&&F`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${v5}>Download selected file</button>
                                `}
                                ${w$&&F`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${L$}>Download selected folder (zip)</button>
                                `}
                                ${h4&&F`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${Y$}>Delete selected file</button>
                                `}
                                <div class="workspace-menu-separator"></div>
                                <button class="workspace-menu-item" role="menuitem" onClick=${()=>{S0(!1),window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:{section:"workspace"}}))}}>Settings</button>
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${t_} title="New file" disabled=${j0}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${X4} title="Refresh tree">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            ${p4&&F`
                <div class="workspace-index-status-row">
                    <div class=${`workspace-index-status-chip state-${v1}`} title=${b1}>
                        <span class="workspace-index-status-dot" aria-hidden="true"></span>
                        <span>${T$}</span>
                    </div>
                </div>
            `}
            <div class="workspace-tree" onClick=${o4}>
                ${L0&&F`
                    <div class="workspace-upload-strip">
                        <div class="workspace-upload-strip-text">
                            ${L0.error?F`<span class="workspace-upload-strip-error">${L0.error}</span>`:L0.done?F`<span>Done</span>`:F`<span>${L0.total>1?`Uploading ${L0.current}/${L0.total}: ${L0.name}`:`Uploading ${L0.name}`}${L0.percent>0?` (${L0.percent}%)`:"…"}</span>`}
                        </div>
                        ${!L0.done&&!L0.error&&F`
                            <div class="workspace-upload-strip-bar">
                                <div class="workspace-upload-strip-fill" style=${`width:${L0.percent||0}%`}></div>
                            </div>
                        `}
                    </div>
                `}
                ${x&&F`<div class="workspace-loading">Loading…</div>`}
                ${T&&F`<div class="workspace-error">${T}</div>`}
                ${K&&F`
                    <div
                        class="workspace-tree-list"
                        ref=${K_}
                        tabIndex="0"
                        onClick=${b2}
                        onDblClick=${g2}
                        onKeyDown=${Y4}
                        onTouchStart=${L4}
                        onTouchEnd=${m1}
                        onTouchMove=${E1}
                        onTouchCancel=${m1}
                    >
                        ${_1.map(({node:S,depth:l})=>{let p=S.type==="dir",a=S.path===N,F0=S.path===E,Q0=p&&q.has(S.path),y0=e&&S.path===e,x0=Array.isArray(S.children)&&S.children.length>0?S.children.length:Number(S.child_count)||0;return F`
                                <div
                                    key=${S.path}
                                    class=${`workspace-row${a?" selected":""}${y0?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+l*y$.indentPx}px`}}
                                    data-path=${S.path}
                                    data-type=${S.type}
                                    onMouseDown=${l2}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${p?Q0?F`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:F`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${p?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${p?F`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:F`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${F0?F`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${E_}
                                                value=${H}
                                                onInput=${(E0)=>k(E0?.target?.value||"")}
                                                onKeyDown=${(E0)=>{if(E0.stopPropagation(),E0.key==="Enter")E0.preventDefault(),c4();else if(E0.key==="Escape")E0.preventDefault(),k1()}}
                                                onBlur=${k1}
                                                onClick=${(E0)=>E0.stopPropagation()}
                                            />
                                        `:F`<span class="workspace-label"><span class="workspace-label-text">${S.name}</span></span>`}
                                    ${p&&!Q0&&x0>0&&F`
                                        <span class="workspace-count">${x0}</span>
                                    `}
                                    ${p&&F`
                                        <button
                                            class="workspace-folder-upload"
                                            data-folder-hint-target=${S.path}
                                            title="Add folder hint to compose"
                                            aria-label=${`Add folder hint for ${S.path}`}
                                            onClick=${V4}
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
                                            data-upload-target=${S.path}
                                            title="Upload files to this folder"
                                            onClick=${C1}
                                            disabled=${j0}
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
                <div class="workspace-preview-splitter-h" onMouseDown=${v2} onTouchStart=${K4}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${N}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${t_} title="New file" disabled=${j0}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!w_&&F`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>K1&&f0.current?.(N,O)}
                                    title=${M$}
                                    disabled=${!K1}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${e_}
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
                            ${w_?F`
                                    <button
                                        class="workspace-download"
                                        data-folder-hint-target=${N}
                                        onClick=${V4}
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
                                    <button class="workspace-download" onClick=${f$}
                                        title="Upload files to this folder" disabled=${j0}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${x6(N,y)} download
                                        title="Download folder as zip" onClick=${(S)=>S.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:F`<a class="workspace-download" href=${T6(N)} download
                                        title="Download" onClick=${(S)=>S.stopPropagation()}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </a>`}
                        </div>
                    </div>
                    ${A&&F`<div class="workspace-loading">Loading preview…</div>`}
                    ${O?.error&&F`<div class="workspace-error">${O.error}</div>`}
                    ${w_&&F`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${t?.disabled&&F`<div class="workspace-preview-text">Folder size preview scanning is disabled in Workspace settings.</div>`}
                        ${t?.loading&&F`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${t?.error&&F`<div class="workspace-error">${t.error}</div>`}
                        ${t?.payload&&t.payload.segments?.length>0&&F`
                            <${sJ} payload=${t.payload} />
                        `}
                        ${t?.payload&&(!t.payload.segments||t.payload.segments.length===0)&&F`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${O&&!O.error&&!w_&&F`
                        <div class="workspace-preview-body" ref=${K0}></div>
                    `}
                </div>
            `}
            ${_0&&F`
                <div class="workspace-drag-ghost" ref=${u0}>${_0.label}</div>
            `}
        </aside>
    `}M0();var $A=new Set(["html-viewer","kanban-editor","mindmap-editor"]);function D8(_,$,j){let G=String(_||"").trim();if(!G)return null;if($)return $;if(typeof j!=="function")return null;return j({path:G,mode:"edit"})?.id||null}function MV(_,$,j){let G=D8(_,$,j);return G!=null&&$A.has(G)}function wV(_,$,j){return D8(_,$,j)==="html-viewer"?"Edit":"Edit Source"}function TV(_,$,j){return D8(_,$,j)==="editor"}var jA=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,GA=/\.(csv|tsv)$/i,ZA=/\.pdf$/i,XA=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function YA(_,{hasPopOutTab:$=!1}={}){let j=typeof _==="string"?_.trim():"";if(!j)return null;let G=YK(j,{hasPopOutTab:$});if(G)return G;if(jA.test(j)){let Z="/workspace/raw?path="+encodeURIComponent(j),X=j.split("/").pop()||"document";return"/office-viewer/?url="+encodeURIComponent(Z)+"&name="+encodeURIComponent(X)}if(GA.test(j))return"/csv-viewer/?path="+encodeURIComponent(j);if(ZA.test(j))return"/workspace/raw?path="+encodeURIComponent(j);if(XA.test(j))return"/image-viewer/?path="+encodeURIComponent(j);return null}function xV({tabs:_,activeId:$,onActivate:j,onClose:G,onCloseOthers:Z,onCloseAll:X,onTogglePin:Y,onTogglePreview:L,onToggleDiff:V,onEditSource:K,previewTabs:Q,diffTabs:q,paneOverrides:B,detachedTabs:N,onReattachTab:U,onToggleDock:E,dockVisible:D,onToggleZen:H,zenMode:k,onPopOutTab:O}){let[W,I]=C(null),x=g(null);u(()=>{if(!W)return;let v=(e)=>{if(e.type==="keydown"&&e.key!=="Escape")return;I(null)};return document.addEventListener("click",v),document.addEventListener("keydown",v),()=>{document.removeEventListener("click",v),document.removeEventListener("keydown",v)}},[W]),u(()=>{let v=(e)=>{if(e.ctrlKey&&e.key==="Tab"){if(e.preventDefault(),!_.length)return;let z0=_.findIndex((j0)=>j0.id===$);if(e.shiftKey){let j0=_[(z0-1+_.length)%_.length];j?.(j0.id)}else{let j0=_[(z0+1)%_.length];j?.(j0.id)}return}if((e.ctrlKey||e.metaKey)&&e.key==="w"){let z0=document.querySelector(".editor-pane");if(z0&&z0.contains(document.activeElement)){if(e.preventDefault(),$)G?.($)}}};return document.addEventListener("keydown",v),()=>document.removeEventListener("keydown",v)},[_,$,j,G]);let J=R((v,e)=>{if(v.button===0){j?.(e);return}if(v.button===1)v.preventDefault(),G?.(e)},[j,G]),A=R((v,e)=>{if(v.defaultPrevented)return;if(v.button===0)j?.(e)},[j]),z=R((v,e)=>{v.preventDefault(),I({id:e,x:v.clientX,y:v.clientY})},[]),T=R((v)=>{v.stopPropagation()},[]),w=R((v,e)=>{v.preventDefault(),v.stopPropagation(),G?.(e)},[G]);u(()=>{if(!$||!x.current)return;let v=x.current.querySelector(".tab-item.active");if(v)v.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]);let y=R((v)=>{if(!(B instanceof Map))return null;return B.get(v)||null},[B]),P=Y0(()=>_.find((v)=>v.id===W?.id)||null,[W?.id,_]),f=Y0(()=>{let v=W?.id;if(!v)return!1;return MV(v,y(v),(e)=>X_.resolve(e))},[W?.id,y]),b=Y0(()=>{let v=W?.id;if(!v)return"Edit Source";return wV(v,y(v),(e)=>X_.resolve(e))},[W?.id,y]),c=Y0(()=>{let v=W?.id;if(!v||!(N instanceof Map))return!1;return N.has(v)},[W?.id,N]),h=Y0(()=>{let v=W?.id;if(!v||!(q instanceof Set))return!1;return q.has(v)},[W?.id,q]),_0=Y0(()=>{let v=W?.id;if(!v)return!1;let e=_.find((j0)=>j0.id===v)||null;if(!e)return!1;return TV(v,y(v),(j0)=>X_.resolve(j0))&&Boolean(e.dirty||h)},[W?.id,h,y,_]);if(!_.length)return null;return F`
        <div class="tab-strip" ref=${x} role="tablist">
            ${_.map((v)=>F`
                <div
                    key=${v.id}
                    class=${`tab-item${v.id===$?" active":""}${v.dirty?" dirty":""}${v.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${v.id===$}
                    title=${v.path}
                    onMouseDown=${(e)=>J(e,v.id)}
                    onClick=${(e)=>A(e,v.id)}
                    onContextMenu=${(e)=>z(e,v.id)}
                >
                    ${v.pinned&&F`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${v.label}</span>
                    ${N instanceof Map&&N.has(v.id)&&F`
                        <span class="tab-detached-badge" aria-label="Detached" title="Open in separate window">↗</span>
                    `}
                    <button
                        type="button"
                        class="tab-close"
                        onPointerDown=${T}
                        onMouseDown=${T}
                        onClick=${(e)=>w(e,v.id)}
                        title=${v.dirty?"Unsaved changes":"Close"}
                        aria-label=${v.dirty?"Unsaved changes":`Close ${v.label}`}
                    >
                        ${v.dirty?F`<span class="tab-dirty-dot" aria-hidden="true"></span>`:F`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${E&&F`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${D?" active":""}`}
                    onClick=${E}
                    title=${`${D?"Hide":"Show"} terminal (Ctrl+\`)`}
                    aria-label=${`${D?"Hide":"Show"} terminal`}
                    aria-pressed=${D?"true":"false"}
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
                    class=${`tab-strip-zen-toggle${k?" active":""}`}
                    onClick=${H}
                    title=${`${k?"Exit":"Enter"} zen mode (Ctrl+Shift+Z)`}
                    aria-label=${`${k?"Exit":"Enter"} zen mode`}
                    aria-pressed=${k?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        ${k?F`<polyline points="4 8 1.5 8 1.5 1.5 14.5 1.5 14.5 8 12 8"/><polyline points="4 8 1.5 8 1.5 14.5 14.5 14.5 14.5 8 12 8"/>`:F`<polyline points="5.5 1.5 1.5 1.5 1.5 5.5"/><polyline points="10.5 1.5 14.5 1.5 14.5 5.5"/><polyline points="5.5 14.5 1.5 14.5 1.5 10.5"/><polyline points="10.5 14.5 14.5 14.5 14.5 10.5"/>`}
                    </svg>
                </button>
            `}
        </div>
        ${W&&F`
            <div class="tab-context-menu" style=${{left:W.x+"px",top:W.y+"px"}}>
                <button onClick=${()=>{G?.(W.id),I(null)}}>Close</button>
                <button onClick=${()=>{Z?.(W.id),I(null)}}>Close Others</button>
                <button onClick=${()=>{X?.(),I(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{Y?.(W.id),I(null)}}>
                    ${P?.pinned?"Unpin":"Pin"}
                </button>
                ${f&&K&&F`
                    <button onClick=${()=>{K(W.id),I(null)}}>${b}</button>
                `}
                ${c&&U&&F`
                    <button onClick=${()=>{U(W.id),I(null)}}>Reattach</button>
                `}
                ${O&&!c&&F`
                    <button onClick=${()=>{let v=_.find((e)=>e.id===W.id);O(W.id,v?.label),I(null)}}>Open in Window</button>
                `}
                ${_0&&V&&F`
                    <hr />
                    <button onClick=${()=>{j?.(W.id),V(W.id),I(null)}}>${h?"Hide Diff":"Compare to Saved"}</button>
                `}
                ${L&&/\.(md|mdx|markdown)$/i.test(W.id)&&F`
                    <hr />
                    <button onClick=${()=>{L(W.id),I(null)}}>
                        ${Q?.has(W.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${(()=>{let v=YA(W.id,{hasPopOutTab:typeof O==="function"});if(!v)return null;return F`
                        <hr />
                        <button onClick=${()=>{window.open(v,"_blank","noopener"),I(null)}}>Open in New Tab</button>
                    `})()}
            </div>
        `}
    `}M0();I_();b6();function S4(_,$=30){let j=Array.isArray(_)?_.map((G)=>Number(G)).filter((G)=>Number.isFinite(G)):[];return j.length>$?j.slice(j.length-$):j}function z8(_,$=30){return S4(_,$).map((j)=>Math.max(0,Math.min(100,j)))}function w2(_,$=56,j=16,G={}){let Z=S4(_);if(Z.length===0)return"";let X=Number.isFinite(G.min)?Number(G.min):Math.min(...Z),Y=Number.isFinite(G.max)?Number(G.max):Math.max(...Z);if(!(Y>X)){let L=(j/2).toFixed(2);return`M 0 ${L} L ${$} ${L}`}if(Z.length===1){let L=(Z[0]-X)/(Y-X),V=(j-L*j).toFixed(2);return`M 0 ${V} L ${$} ${V}`}return Z.map((L,V)=>{let K=V/(Z.length-1||1)*$,Q=(L-X)/(Y-X),q=j-Q*j;return`${V===0?"M":"L"} ${K.toFixed(2)} ${q.toFixed(2)}`}).join(" ")}function _4(_){return`${Math.round(Number(_)||0)}%`}function Yj(_){let $=Number(_);if(!Number.isFinite($)||$<=0)return"0B";let j=["B","K","M","G","T"],G=0,Z=$;while(Z>=1024&&G<j.length-1)Z/=1024,G+=1;let X=Z>=100||G===0?0:Z>=10?0:1;return`${Z.toFixed(X)}${j[G]}`}function LA(_){let $=[`CPU ${_4(_?.cpu_percent)}`,`RAM ${_4(_?.ram_percent)}`];if(Number(_?.buffer_cache_bytes)>0)$.push(`BUF ${Yj(_?.buffer_cache_bytes)}`);if(CV(_))$.push(`VRAM ${_4(_?.vram_percent)}`);if(Number.isFinite(Number(_?.swap_percent))&&Number(_?.swap_total_bytes)>0)$.push(`SWP ${_4(_?.swap_percent)}`);return $.join(" • ")}function IV(_){return Number(_?.process_memory?.vm_rss_bytes)>0?Number(_.process_memory.vm_rss_bytes):Number(_?.process_memory?.rss_bytes)||0}function KA(_){return IV(_)>0&&S4(_?.process_rss_series_bytes).length>0}function CV(_){return _?.vram_percent!==null&&_?.vram_percent!==void 0&&Number.isFinite(Number(_?.vram_percent))&&Number(_?.vram_total_bytes)>0&&Number(_?.vram_used_bytes)>=0&&S4(_?.vram_series).length>0}function VA(){if(typeof window>"u"||typeof window.matchMedia!=="function")return!1;return window.matchMedia("(max-width: 900px)").matches}function PV({mode:_="overlay"}){let[$,j]=C(()=>z5(!1)),[G,Z]=C(()=>jY(!1)),[X,Y]=C(()=>VA()),[L,V]=C({cpu_percent:0,ram_percent:0,swap_percent:null,cpu_series:[],ram_series:[],swap_series:[],vram_percent:null,vram_series:[],vram_total_bytes:0,vram_used_bytes:0,gpu_provider:null,buffer_cache_bytes:null,buffer_cache_series_bytes:[],process_rss_series_bytes:[],process_memory:{rss_bytes:0,vm_rss_bytes:null},swap_total_bytes:0,swap_used_bytes:0,sample_interval_ms:2000,platform:""}),[K,Q]=C(!1);u(()=>{let w=(P)=>{j(Boolean(P?.detail?.enabled))},y=(P)=>{Z(Boolean(P?.detail?.collapsed))};return window.addEventListener(I4,w),window.addEventListener(g6,y),()=>{window.removeEventListener(I4,w),window.removeEventListener(g6,y)}},[]),u(()=>{if(typeof window>"u"||typeof window.matchMedia!=="function")return;let w=window.matchMedia("(max-width: 900px)"),y=()=>Y(Boolean(w.matches));if(y(),typeof w.addEventListener==="function")return w.addEventListener("change",y),()=>w.removeEventListener("change",y);return w.addListener(y),()=>w.removeListener(y)},[]);let B=_==="overlay";u(()=>{if(!$||!B)return;let w=!1,y=0,P=async()=>{Q((f)=>f||L.cpu_series.length>0?f:!0);try{let f=await V7();if(w)return;V({cpu_percent:Number(f?.cpu_percent)||0,ram_percent:Number(f?.ram_percent)||0,swap_percent:Number.isFinite(Number(f?.swap_percent))?Number(f?.swap_percent):null,vram_percent:Number.isFinite(Number(f?.vram_percent))?Number(f?.vram_percent):null,cpu_series:z8(f?.cpu_series),ram_series:z8(f?.ram_series),swap_series:z8(f?.swap_series),vram_series:z8(f?.vram_series),vram_total_bytes:Number(f?.vram_total_bytes)||0,vram_used_bytes:Number(f?.vram_used_bytes)||0,gpu_provider:typeof f?.gpu_provider==="string"&&f.gpu_provider.trim()?f.gpu_provider.trim():null,buffer_cache_bytes:Number.isFinite(Number(f?.buffer_cache_bytes))?Number(f?.buffer_cache_bytes):null,buffer_cache_series_bytes:S4(f?.buffer_cache_series_bytes),process_rss_series_bytes:S4(f?.process_rss_series_bytes),process_memory:{rss_bytes:Number(f?.process_memory?.rss_bytes)||0,vm_rss_bytes:Number.isFinite(Number(f?.process_memory?.vm_rss_bytes))?Number(f?.process_memory?.vm_rss_bytes):null},swap_total_bytes:Number(f?.swap_total_bytes)||0,swap_used_bytes:Number(f?.swap_used_bytes)||0,sample_interval_ms:Number(f?.sample_interval_ms)||2000,platform:String(f?.platform||"")})}catch{if(w)return}finally{if(!w)Q(!1)}};return P(),y=window.setInterval(()=>{if(document?.visibilityState==="hidden")return;P()},Math.max(1000,Number(L.sample_interval_ms)||2000)),()=>{if(w=!0,y)window.clearInterval(y)}},[$,B]);let N=Y0(()=>w2(L.cpu_series,56,16,{min:0,max:100}),[L.cpu_series]),U=Y0(()=>w2(L.ram_series,56,16,{min:0,max:100}),[L.ram_series]),E=Y0(()=>w2(L.swap_series,56,16,{min:0,max:100}),[L.swap_series]),D=Y0(()=>w2(L.vram_series,56,16,{min:0,max:100}),[L.vram_series]),H=Y0(()=>w2(L.buffer_cache_series_bytes),[L.buffer_cache_series_bytes]),k=Y0(()=>w2(L.process_rss_series_bytes),[L.process_rss_series_bytes]),O=Number(L.buffer_cache_bytes)>0&&S4(L.buffer_cache_series_bytes).length>0,W=Number.isFinite(Number(L.swap_percent))&&L.swap_total_bytes>0,I=CV(L),x=IV(L),J=KA(L),A=Y0(()=>LA(L),[L]);if(!$||!B)return null;let z=G?"Show system meters":K?"Updating system meters… Click to collapse.":"System meters — click to collapse.",T=(w)=>{w?.stopPropagation?.();let y=!G;Z(y),s7(y)};return F`
        <div class=${`system-meters-hud system-meters-hud-${_}${G?" is-collapsed":""}`} aria-live="polite">
            <button
                class="system-meters-card"
                type="button"
                title=${z}
                aria-label=${z}
                aria-expanded=${G?"false":"true"}
                onClick=${T}
            >
                ${G?F`<span class="system-meters-collapse-tab" aria-hidden="true">◂</span>`:X?F`<span class="system-meters-compact-summary">${A}</span>`:F`
                            <div class="system-meters-row cpu">
                                <span class="system-meters-label">CPU</span>
                                <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                    <path d=${N}></path>
                                </svg>
                                <span class="system-meters-value">${_4(L.cpu_percent)}</span>
                            </div>
                            <div class="system-meters-row ram">
                                <span class="system-meters-label">RAM</span>
                                <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                    <path d=${U}></path>
                                </svg>
                                <span class="system-meters-value">${_4(L.ram_percent)}</span>
                            </div>
                            ${J&&F`
                                <div class="system-meters-row rss">
                                    <span class="system-meters-label">RSS</span>
                                    <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                        <path d=${k}></path>
                                    </svg>
                                    <span class="system-meters-value">${Yj(x)}</span>
                                </div>
                            `}
                            ${I&&F`
                                <div class="system-meters-row vram" title=${L.gpu_provider?`GPU telemetry: ${L.gpu_provider}`:"GPU memory telemetry"}>
                                    <span class="system-meters-label">VRAM</span>
                                    <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                        <path d=${D}></path>
                                    </svg>
                                    <span class="system-meters-value">${_4(L.vram_percent)}</span>
                                </div>
                            `}
                            ${O&&F`
                                <div class="system-meters-row buf">
                                    <span class="system-meters-label">BUF</span>
                                    <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                        <path d=${H}></path>
                                    </svg>
                                    <span class="system-meters-value">${Yj(L.buffer_cache_bytes)}</span>
                                </div>
                            `}
                            ${W&&F`
                                <div class="system-meters-row swap">
                                    <span class="system-meters-label">SWP</span>
                                    <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                        <path d=${E}></path>
                                    </svg>
                                    <span class="system-meters-value">${_4(L.swap_percent)}</span>
                                </div>
                            `}
                        `}
            </button>
        </div>
    `}function qA(_){let{workspaceOpen:$,editorOpen:j,chatOnlyMode:G,zenMode:Z}=_;return`app-shell${$?"":" workspace-collapsed"}${j?" editor-open":""}${G?" chat-only":""}${Z?" zen-mode":""}`}function QA(_){let $=_?.user_message?.id??_?.row_id;if($===null||$===void 0||$==="")return null;let j=Number($);return Number.isFinite(j)?j:null}function NA(_){let{id:$,scrollToBottom:j,getElementById:G=(K)=>document.getElementById(K),scheduleRaf:Z=(K)=>requestAnimationFrame(K),scheduleTimeout:X=(K,Q)=>{setTimeout(K,Q)},maxAttempts:Y=12}=_,L=(K)=>{K.scrollIntoView({behavior:"smooth",block:"center"}),K.classList.add("post-highlight"),X(()=>K.classList.remove("post-highlight"),2000)},V=(K)=>{let Q=G(`post-${$}`);if(Q){L(Q);return}if(K<=0){j?.();return}Z(()=>{X(()=>V(K-1),40)})};V(Y)}function BA(_){let{response:$,viewStateRef:j,scrollToBottom:G,scrollPostedMessage:Z=(V)=>NA({id:V,scrollToBottom:G})}=_,{searchQuery:X,searchOpen:Y}=j.current||{};if(X||Y)return;let L=QA($);if(L){Z(L);return}G()}function fV(_){let{appShellRef:$,workspaceOpen:j,editorOpen:G,chatOnlyMode:Z,zenMode:X,isRenameBranchFormOpen:Y,closeRenameCurrentBranchForm:L,handleRenameCurrentBranch:V,renameBranchNameDraft:K,renameBranchNameInputRef:Q,setRenameBranchNameDraft:q,renameBranchDraftState:B,isRenamingBranch:N,addFileRef:U,addFolderRef:E,openEditor:D,openTerminalTab:H,openVncTab:k,hasDockPanes:O,toggleDock:W,dockVisible:I,handleSplitterMouseDown:x,handleSplitterTouchStart:J,showEditorPaneContainer:A,tabStripTabs:z,tabStripActiveId:T,handleTabActivate:w,handleTabClose:y,handleTabCloseOthers:P,handleTabCloseAll:f,handleTabTogglePin:b,handleTabTogglePreview:c,handleTabToggleDiff:h,handleTabEditSource:_0,handleReattachPane:v,previewTabs:e,diffTabs:z0,tabPaneOverrides:j0,toggleZenMode:$0,handlePopOutPane:L0,isWebAppMode:B0,editorContainerRef:t,editorInstanceRef:V0,detachedTabs:q0,activeDetachedTab:k0,detachedDockPane:s,handleDockSplitterMouseDown:X0,handleDockSplitterTouchStart:D0,TERMINAL_TAB_PATH:C0,dockContainerRef:g0,handleEditorSplitterMouseDown:n0,handleEditorSplitterTouchStart:j_,searchQuery:m0,isIOSDevice:d0,currentBranchRecord:S0,currentChatJid:o0,currentChatBranches:v0,handleBranchPickerChange:a0,formatBranchPickerLabel:h0,openRenameCurrentBranchForm:N_,handlePruneCurrentBranch:t0,handlePurgeArchivedBranch:b0,currentHashtag:A0,handleBackToTimeline:L_,activeSearchScopeLabel:e0,oobePanelState:O_,composePrefillRequest:H0,requestComposePrefill:f0,handleOobeSetupProvider:T0,handleOobeShowModelPicker:i0,handleOobeOpenWorkspace:A_,handleDismissProviderMissingOobe:K_,handleCompleteProviderReadyOobe:E_,posts:H_,isMainTimelineView:y_,hasMore:C_,loadMore:u_,timelineRef:D_,handleHashtagClick:G0,addMessageRef:W0,scrollToMessage:r,openFileFromPill:i,openTimelineFileFromPill:o,handleDeletePost:Z0,handleOpenFloatingWidget:K0,agents:J0,userProfile:c0,removingPostIds:R0,agentStatus:I0,isCompactionStatus:w0,agentDraft:p0,agentPlan:U0,agentThought:l0,pendingRequest:Y_,intentToast:G_,currentTurnId:u0,steerQueued:z_,handlePanelToggle:B_,btwSession:d,closeBtwPanel:O0,handleBtwRetry:Z_,handleBtwInject:q_,floatingWidget:r_,handleCloseFloatingWidget:B1,handleFloatingWidgetEvent:g_,attachmentPreview:J1,setAttachmentPreview:P_,extensionStatusPanels:M_,pendingExtensionPanelActions:A1,handleExtensionPanelAction:W_,searchOpen:k_,followupQueueItems:F1,handleInjectQueuedFollowup:m_,handleRemoveQueuedFollowup:n_,handleMoveQueuedFollowup:s_,viewStateRef:U_,loadPosts:x1,scrollToBottom:U1,searchScope:g1,handleSearch:k1,handleSearchScopeChange:e1,setSearchScope:c4,enterSearchMode:A$,exitSearchMode:t_,fileRefs:c_,removeFileRef:y1,clearFileRefs:H1,setFileRefsFromCompose:_1,folderRefs:k$,removeFolderRef:y$,clearFolderRefs:_$,setFolderRefsFromCompose:w_,messageRefs:K1,removeMessageRef:M$,clearMessageRefs:l4,setMessageRefsFromCompose:$$,handleCreateSessionFromCompose:h4,handleCreateRootSessionFromCompose:r4,handleRestoreBranch:w$,attachActiveEditorFile:T$,followupQueueCount:b1,handleBtwIntercept:v1,handleMessageResponse:p4,handleComposeSubmitError:V1,isComposeBoxAgentActive:R_,activeChatAgents:n4,connectionStatus:I1,stateAccessFailed:x$,activeModel:d4,agentModelsPayload:g2,activeModelUsage:b2,activeThinkingLevel:X4,supportsThinking:I$,contextUsage:i4,extensionWorkingState:o4,notificationsEnabled:q1,notificationPermission:C$,handleToggleNotifications:Y4,setActiveModel:L4,applyModelState:m1,setPendingRequest:E1,pendingRequestRef:v2,toggleWorkspace:K4}=_,j$=()=>{if(d0())return;U1()};return F`
    <div class=${qA({workspaceOpen:j,editorOpen:G,chatOnlyMode:Z,zenMode:X})} ref=${$}>
      <${PV} mode="overlay" />
      ${Y&&F`
        <div class="rename-branch-overlay" onPointerDown=${(e_)=>{if(e_.target===e_.currentTarget)L()}}>
          <form
            class="rename-branch-panel"
            onSubmit=${(e_)=>{e_.preventDefault(),V(K)}}
          >
            <div class="rename-branch-title">Rename session</div>
            <input
              ref=${Q}
              value=${K}
              onInput=${(e_)=>{let P$=e_.currentTarget?.value??"";q(String(P$))}}
              onKeyDown=${(e_)=>{if(e_.key==="Escape")e_.preventDefault(),L()}}
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
        <${yV}
          onFileSelect=${U}
          onFolderSelect=${E}
          visible=${j}
          active=${j||G}
          onOpenEditor=${D}
          onOpenTerminalTab=${H}
          onOpenVncTab=${k}
          onToggleTerminal=${O?W:void 0}
          terminalVisible=${Boolean(O&&I)}
        />
        <button
          class=${`workspace-toggle-tab${j?" open":" closed"}`}
          onClick=${K4}
          title=${j?"Hide workspace":"Show workspace"}
          aria-label=${j?"Hide workspace":"Show workspace"}
        >
          <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="6 3 11 8 6 13" />
          </svg>
        </button>
        <div class="workspace-splitter" onMouseDown=${x} onTouchStart=${J}></div>
      `}
      ${A&&F`
        <div class="editor-pane-container">
          ${X&&F`<div class="zen-hover-zone"></div>`}
          ${G&&F`
            <${xV}
              tabs=${z}
              activeId=${T}
              onActivate=${w}
              onClose=${y}
              onCloseOthers=${P}
              onCloseAll=${f}
              onTogglePin=${b}
              onTogglePreview=${c}
              onToggleDiff=${h}
              onEditSource=${_0}
              previewTabs=${e}
              diffTabs=${z0}
              paneOverrides=${j0}
              detachedTabs=${q0}
              onReattachTab=${v}
              onToggleDock=${O?W:void 0}
              dockVisible=${O&&I}
              onToggleZen=${$0}
              zenMode=${X}
              onPopOutTab=${B0?void 0:L0}
            />
          `}
          ${G&&k0&&F`
            <div class="editor-pane-host editor-pane-detached-host">
              <div class="editor-empty-state">
                <div class="editor-empty-state-title">${k0.label||k0.panePath||"Detached pane"}</div>
                <div class="editor-empty-state-body">This pane is detached into another window.</div>
                <div class="editor-empty-state-actions">
                  <button class="editor-empty-state-button" onClick=${()=>v(k0.panePath)}>Reattach here</button>
                </div>
              </div>
            </div>
          `}
          ${G&&!k0&&F`<div class="editor-pane-host" ref=${t}></div>`}
          ${G&&!k0&&T&&e.has(T)&&F`
            <${i6}
              getContent=${()=>V0.current?.getContent?.()}
              path=${T}
              onClose=${()=>c(T)}
            />
          `}
          ${O&&I&&F`<div class="dock-splitter" onMouseDown=${X0} onTouchStart=${D0}></div>`}
          ${O&&F`<div class=${`dock-panel${I?"":" hidden"}${G?"":" standalone"}`}>
            <div class="dock-panel-header">
              <span class="dock-panel-title">Terminal</span>
              <div class="dock-panel-actions">
                ${!B0&&!s&&F`
                  <button class="dock-panel-action" onClick=${()=>L0(C0,"Terminal")} title="Open terminal in window" aria-label="Open terminal in window">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2.25" y="2.25" width="8.5" height="8.5" rx="1.5"/>
                      <path d="M8.5 2.25h5.25v5.25"/>
                      <path d="M13.75 2.25 7.75 8.25"/>
                    </svg>
                  </button>
                `}
                ${s&&F`
                  <button class="dock-panel-action" onClick=${()=>v(C0)} title="Reattach terminal" aria-label="Reattach terminal">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2.25" y="2.25" width="11.5" height="11.5" rx="1.5"/>
                      <path d="M5.25 8h5.5"/>
                      <path d="M8 5.25v5.5"/>
                    </svg>
                  </button>
                `}
                <button class="dock-panel-close" onClick=${W} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                  <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                    <line x1="4" y1="4" x2="12" y2="12"/>
                    <line x1="12" y1="4" x2="4" y2="12"/>
                  </svg>
                </button>
              </div>
            </div>
            ${s?F`
                <div class="dock-panel-body dock-panel-body-detached">
                  <div class="editor-empty-state">
                    <div class="editor-empty-state-title">Terminal detached</div>
                    <div class="editor-empty-state-body">The terminal is open in another window.</div>
                    <div class="editor-empty-state-actions">
                      <button class="editor-empty-state-button" onClick=${()=>v(C0)}>Reattach here</button>
                    </div>
                  </div>
                </div>
              `:F`<div class="dock-panel-body" ref=${g0}></div>`}
          </div>`}
        </div>
        <div class="editor-splitter" onMouseDown=${n0} onTouchStart=${j_}></div>
      `}
      <${WK}
        workspaceOpen=${j}
        toggleWorkspace=${K4}
        chatOnlyMode=${Z}
        onOpenTerminalTab=${H}
        onOpenVncTab=${k}
        onToggleTerminal=${O?W:void 0}
        terminalVisible=${Boolean(O&&I)}
      />
      <${zK}
        activeChatAgents=${n4}
        currentChatJid=${o0}
        workspaceOpen=${j}
        chatOnlyMode=${Z}
        terminalVisible=${Boolean(O&&I)}
        onSwitchChat=${a0}
        onToggleWorkspace=${K4}
        onOpenTerminalTab=${H}
        onOpenVncTab=${k}
        onToggleTerminalDock=${O?W:void 0}
        onPrefillCompose=${f0}
      />
      <div class="container">
        ${m0&&d0()&&F`<div class="search-results-spacer"></div>`}
        ${(A0||m0)&&F`
          <div class="hashtag-header">
            <button class="back-btn" onClick=${L_}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <span>${A0?`#${A0}`:`Search: ${m0} · ${e0}`}</span>
          </div>
        `}
        ${O_?.kind&&O_.kind!=="hidden"&&F`
          <${SL}
            kind=${O_.kind}
            onSetupProvider=${T0}
            onShowModelPicker=${i0}
            onOpenWorkspace=${A_}
            onDismiss=${O_.kind==="provider-missing"?K_:E_}
          />
        `}
        <${YV}
          posts=${H_}
          hasMore=${y_?C_:!1}
          onLoadMore=${y_?u_:void 0}
          timelineRef=${D_}
          onHashtagClick=${G0}
          onMessageRef=${W0}
          onScrollToMessage=${r}
          onFileRef=${o||i}
          onPostClick=${void 0}
          onDeletePost=${Z0}
          onOpenWidget=${K0}
          onOpenAttachmentPreview=${P_}
          emptyMessage=${A0?`No posts with #${A0}`:m0?`No results for "${m0}"`:void 0}
          agents=${J0}
          user=${c0}
          reverse=${y_}
          removingPostIds=${R0}
          searchQuery=${m0}
        />
        <${m9}
          status=${w0(I0)?null:I0}
          draft=${p0}
          plan=${U0}
          thought=${l0}
          pendingRequest=${Y_}
          intent=${G_}
          turnId=${u0}
          steerQueued=${z_}
          onPanelToggle=${B_}
          showExtensionPanels=${!1}
        />
        <${cL}
          session=${d}
          onClose=${O0}
          onRetry=${Z_}
          onInject=${q_}
        />
        <${jK}
          widget=${r_}
          onClose=${B1}
          onWidgetEvent=${g_}
        />
        ${J1&&F`
          <${HK}
            mediaId=${J1.mediaId}
            info=${J1.info}
            onClose=${()=>P_(null)}
          />
        `}
        <${QL} />
        <${m9}
          extensionPanels=${Array.from(M_.values())}
          pendingPanelActions=${A1}
          onExtensionPanelAction=${W_}
          turnId=${u0}
          steerQueued=${z_}
          onPanelToggle=${B_}
          showCorePanels=${!1}
        />
        <${P9}
          items=${k_?[]:F1}
          onInjectQueuedFollowup=${m_}
          onRemoveQueuedFollowup=${n_}
          onMoveQueuedFollowup=${s_}
          onOpenFilePill=${i}
        />
        <${RL}
          onPost=${(e_)=>{BA({response:e_,viewStateRef:U_,scrollToBottom:U1})}}
          onFocus=${j$}
          searchMode=${k_}
          searchScope=${g1}
          onSearch=${k1}
          onSearchScopeChange=${e1||c4}
          onEnterSearch=${A$}
          onExitSearch=${t_}
          fileRefs=${c_}
          onRemoveFileRef=${y1}
          onClearFileRefs=${H1}
          onSetFileRefs=${_1}
          folderRefs=${k$}
          onRemoveFolderRef=${y$}
          onClearFolderRefs=${_$}
          onSetFolderRefs=${w_}
          messageRefs=${K1}
          onRemoveMessageRef=${M$}
          onClearMessageRefs=${l4}
          onSetMessageRefs=${$$}
          onSwitchChat=${a0}
          onRenameSession=${V}
          isRenameSessionInProgress=${N}
          onCreateSession=${h4}
          onCreateRootSession=${r4}
          onDeleteSession=${t0}
          onPurgeArchivedSession=${b0}
          onRestoreSession=${w$}
          activeEditorPath=${Z?null:T}
          onAttachEditorFile=${Z?void 0:T$}
          onOpenFilePill=${i}
          followupQueueCount=${b1}
          followupQueueItems=${F1}
          showQueueStack=${!1}
          onInjectQueuedFollowup=${m_}
          onRemoveQueuedFollowup=${n_}
          onMoveQueuedFollowup=${s_}
          onSubmitIntercept=${v1}
          onMessageResponse=${p4}
          onSubmitError=${V1}
          isAgentActive=${R_}
          activeChatAgents=${n4}
          currentChatJid=${o0}
          connectionStatus=${I1}
          stateAccessFailed=${x$}
          activeModel=${d4}
          agentModelsPayload=${g2}
          modelUsage=${b2}
          thinkingLevel=${X4}
          supportsThinking=${I$}
          contextUsage=${i4}
          notificationsEnabled=${q1}
          notificationPermission=${C$}
          onToggleNotifications=${Y4}
          onModelChange=${L4}
          onModelStateChange=${m1}
          statusNotice=${w0(I0)?I0:null}
          extensionWorkingState=${o4}
          prefillRequest=${H0}
        />
        <${IK}
          request=${Y_}
          onRespond=${()=>{E1(null),v2.current=null}}
        />
      </div>
    </div>
  `}function RV(_){let{branchLoaderMode:$,panePopoutMode:j,branchLoaderState:G,panePopoutOptions:Z,mainShellOptions:X,renderers:Y}=_,L=FL({branchLoaderMode:$,panePopoutMode:j}),V=Y?.renderBranchLoaderMode||UL,K=Y?.renderPanePopoutMode||HL,Q=Y?.renderMainShell||fV;if(L==="branch-loader")return V(G);if(L==="pane-popout")return K(Z);return Q(X)}var O8="piclaw_btw_session",uV=900,SV="__piclawRenameBranchFormLock__";function FA(){try{return import.meta.url}catch{return null}}function Lj(_){let $=typeof _==="string"?_.trim().toLowerCase():"";return $==="1"||$==="true"||$==="yes"}function UA(_){try{let $=_?new URL(_).searchParams.get("v"):null;return $&&$.trim()?$.trim():null}catch{return null}}function W8(_,$,j=""){let G=_?.get?.($);return G&&G.trim()?G.trim():j}function gV(_={}){let $=_.importMetaUrl===void 0?FA():_.importMetaUrl,j=_.document===void 0?typeof document<"u"?document:null:_.document,G=_.origin===void 0?typeof window<"u"?window.location.origin:"http://localhost":_.origin||"http://localhost",Z=UA($);if(Z)return Z;try{let Y=Array.from(j?.querySelectorAll?.('script[type="module"][src]')||[]).find((K)=>String(K?.getAttribute?.("src")||"").includes("/static/dist/app.bundle.js"))?.getAttribute?.("src")||"";if(!Y)return null;let V=new URL(Y,G).searchParams.get("v");return V&&V.trim()?V.trim():null}catch{return null}}function bV(_={}){let $=_.window===void 0?typeof window<"u"?window:null:_.window;if(!$)return null;let j=$[SV];if(j&&typeof j==="object")return j;let G={inFlight:!1,cooldownUntil:0};return $[SV]=G,G}function vV(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function mV(_={}){let $=typeof _.readItem==="function"?_.readItem:z1,j=_.storageKey||O8,G=$(j);if(!G)return null;try{let Z=JSON.parse(G);if(!Z||typeof Z!=="object")return null;let X=typeof Z.question==="string"?Z.question:"",Y=typeof Z.answer==="string"?Z.answer:"",L=typeof Z.thinking==="string"?Z.thinking:"",V=typeof Z.error==="string"&&Z.error.trim()?Z.error:null,K=Z.status==="running"?"error":Z.status==="success"||Z.status==="error"?Z.status:"success";return{question:X,answer:Y,thinking:L,error:K==="error"?V||"BTW stream interrupted. You can retry.":V,model:null,status:K}}catch{return null}}function cV(_,$={}){let j=$.defaultChatJid||"web:default",G=W8(_,"chat_jid",j),Z=Lj(_?.get?.("chat_only")||_?.get?.("chat-only")),X=Lj(_?.get?.("pane_popout")),Y=W8(_,"pane_path"),L=W8(_,"pane_label"),V=Lj(_?.get?.("branch_loader")),K=W8(_,"branch_source_chat_jid",G);return{currentChatJid:G,chatOnlyMode:Z,panePopoutMode:X,panePopoutPath:Y,panePopoutLabel:L,branchLoaderMode:V,branchLoaderSourceChatJid:K}}function lV(_,$){let j=Array.isArray(_)?_:[];return j.find((G)=>G?.id===$)||j[0]||null}function hV(_,$){if(!$||!_||typeof _.get!=="function")return null;return _.get($)||null}function Kj(_,$,j){return _||$?.label||j||"Pane"}function rV(_,$,j){return`${Kj(_,$,j)} · PiClaw`}function pV(_,$,j,G){let Z=Array.isArray(_)?_.length:0,X=Boolean(G&&$?.has?.(G)),Y=Boolean(G&&j?.has?.(G));return Z>1||X||Y}function nV(_,$){let j=typeof _==="string"?_:"";return j===$||j.startsWith(`${$}/`)}function dV(_,$,j,G){return _===$&&!j||G}function iV(_,$,j,G,Z){return _||!$&&(j||G&&Z)}I_();function HA(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function Y1(_,$,j){let G=_?.[$];return typeof G==="function"?G:HA($,j)}var oV=!1,sV=!1,aV=!1;function EA(_){if(!_||typeof _.setOptions!=="function")return;_.setOptions({breaks:!0,gfm:!0})}function DA(_=typeof window<"u"?window:null){if(!_||sV)return;let $=(j)=>{let G=String(j?.message||j?.error?.message||"").trim();if(!/ResizeObserver loop (completed with undelivered notifications|limit exceeded)/i.test(G)){if(!(G==="Script error."&&(j?.lineno===0||!j?.filename)))return}j.preventDefault?.(),j.stopImmediatePropagation?.()};_.addEventListener("error",$,!0),sV=!0}function zA(){X_.register(E3),X_.register(u7),X_.register(S7),X_.register(g7),X_.register(b7),X_.register(v7),X_.register(c7),X_.register(l7),X_.register(h7),X_.register(p7),X_.register(s3),D3(),X_.register(k3),X_.register(y3)}function WA(_=typeof window<"u"?window:null){if(!_||aV)return;if(!_.isSecureContext)return;if(!("serviceWorker"in _.navigator))return;aV=!0,_.navigator.serviceWorker.register("/sw.js").catch(($)=>{console.warn("Failed to register app service worker:",$)})}async function tV(){if(oV)return;let _=typeof window<"u"?window:null,$=_?_?.marked:null;if(EA($),DA(_),g9(_),_)try{let j=await Promise.resolve().then(() => (M0(),WG));_.__piclawPreactHtm=j,_.__piclawPreact=j}catch(j){}zA(),await qK(_),WA(_),oV=!0}function OA(_=N5){return{searchPosts:_.searchPosts,deletePost:_.deletePost,getAgents:_.getAgents,getAgentThought:_.getAgentThought,setAgentThoughtVisibility:_.setAgentThoughtVisibility,getAgentStatus:_.getAgentStatus,getWorkspaceFile:_.getWorkspaceFile,getThread:_.getThread,getTimeline:_.getTimeline,sendAgentMessage:_.sendAgentMessage,forkChatBranch:_.forkChatBranch,getAgentContext:Y1(_,"getAgentContext",null),getAutoresearchStatus:Y1(_,"getAutoresearchStatus",null),stopAutoresearch:Y1(_,"stopAutoresearch",{status:"ok"}),dismissAutoresearch:Y1(_,"dismissAutoresearch",{status:"ok"}),getAgentModels:Y1(_,"getAgentModels",{current:null,models:[]}),completeInstanceOobe:Y1(_,"completeInstanceOobe",{status:"ok"}),getActiveChatAgents:Y1(_,"getActiveChatAgents",{chats:[]}),getChatBranches:Y1(_,"getChatBranches",{chats:[]}),renameChatBranch:Y1(_,"renameChatBranch",null),pruneChatBranch:Y1(_,"pruneChatBranch",null),restoreChatBranch:Y1(_,"restoreChatBranch",null),getAgentQueueState:Y1(_,"getAgentQueueState",{count:0}),steerAgentQueueItem:Y1(_,"steerAgentQueueItem",{removed:!1,queued:"steer"}),removeAgentQueueItem:Y1(_,"removeAgentQueueItem",{removed:!1}),streamSidePrompt:Y1(_,"streamSidePrompt",null)}}var eV=OA(N5);function _q(_){let{routing:$,paneRuntime:j,splitters:G,branchPaneActions:Z,timelineViewActions:X,composeReferenceActions:Y,sidepanelActions:L,shellState:V,agentState:K,composeState:Q,modelState:q}=_,B={appShellRef:V.appShellRef,editorOpen:V.editorOpen,hidePanePopoutControls:j.hidePanePopoutControls,panePopoutHasMenuActions:j.panePopoutHasMenuActions,panePopoutTitle:j.panePopoutTitle,tabStripTabs:V.tabStripTabs,tabStripActiveId:V.tabStripActiveId,handleTabActivate:V.handleTabActivate,previewTabs:V.previewTabs,diffTabs:V.diffTabs,handleTabTogglePreview:V.handleTabTogglePreview,handleTabToggleDiff:V.handleTabToggleDiff,editorContainerRef:j.editorContainerRef,getPaneContent:()=>j.editorInstanceRef?.current?.getContent?.(),panePopoutPath:V.panePopoutPath,canReattachPane:j.canReattachPanePopout,handleReattachPane:j.requestPanePopoutReattach},N={appShellRef:V.appShellRef,workspaceOpen:V.workspaceOpen,editorOpen:V.editorOpen,chatOnlyMode:V.chatOnlyMode,zenMode:j.zenMode,isRenameBranchFormOpen:V.isRenameBranchFormOpen,closeRenameCurrentBranchForm:Z.closeRenameCurrentBranchForm,handleRenameCurrentBranch:Z.handleRenameCurrentBranch,renameBranchNameDraft:V.renameBranchNameDraft,renameBranchNameInputRef:V.renameBranchNameInputRef,setRenameBranchNameDraft:V.setRenameBranchNameDraft,renameBranchDraftState:V.renameBranchDraftState,isRenamingBranch:V.isRenamingBranch,hasDockPanes:j.hasDockPanes,toggleDock:j.toggleDock,dockVisible:j.dockVisible,showEditorPaneContainer:j.showEditorPaneContainer,toggleZenMode:j.toggleZenMode,isWebAppMode:V.isWebAppMode,editorContainerRef:j.editorContainerRef,editorInstanceRef:j.editorInstanceRef,dockContainerRef:j.dockContainerRef,detachedTabs:j.detachedTabs,activeDetachedTab:j.activeDetachedTab,detachedDockPane:j.detachedDockPane,TERMINAL_TAB_PATH:V.TERMINAL_TAB_PATH,isIOSDevice:V.isIOSDevice,currentBranchRecord:V.currentBranchRecord,currentChatJid:V.currentChatJid,currentChatBranches:V.currentChatBranches,formatBranchPickerLabel:V.formatBranchPickerLabel,activeSearchScopeLabel:V.activeSearchScopeLabel,currentHashtag:V.currentHashtag,searchQuery:V.searchQuery,oobePanelState:V.oobePanelState,composePrefillRequest:V.composePrefillRequest,requestComposePrefill:V.requestComposePrefill,handleOobeSetupProvider:V.handleOobeSetupProvider,handleOobeShowModelPicker:V.handleOobeShowModelPicker,handleOobeOpenWorkspace:V.handleOobeOpenWorkspace,handleDismissProviderMissingOobe:V.handleDismissProviderMissingOobe,handleCompleteProviderReadyOobe:V.handleCompleteProviderReadyOobe,posts:V.posts,hasMore:V.hasMore,loadMore:V.loadMore,timelineRef:V.timelineRef,agents:V.agents,userProfile:V.userProfile,removingPostIds:V.removingPostIds,extensionStatusPanels:V.extensionStatusPanels,pendingExtensionPanelActions:V.pendingExtensionPanelActions,searchOpen:V.searchOpen,followupQueueItems:V.followupQueueItems,viewStateRef:V.viewStateRef,loadPosts:V.loadPosts,scrollToBottom:V.scrollToBottom,searchScope:V.searchScope,tabStripTabs:V.tabStripTabs,tabStripActiveId:V.tabStripActiveId,handleTabActivate:V.handleTabActivate,previewTabs:V.previewTabs,diffTabs:V.diffTabs,handleTabTogglePreview:V.handleTabTogglePreview,handleTabToggleDiff:V.handleTabToggleDiff,panePopoutPath:V.panePopoutPath,tabPaneOverrides:V.tabPaneOverrides,handleTabClose:V.handleTabClose,handleTabCloseOthers:V.handleTabCloseOthers,handleTabCloseAll:V.handleTabCloseAll,handleTabTogglePin:V.handleTabTogglePin,handleTabEditSource:V.handleTabEditSource,handleReattachPane:j.reattachPane,openEditor:V.openEditor,openTerminalTab:V.openTerminalTab,openVncTab:V.openVncTab,fileRefs:Q.fileRefs,folderRefs:Q.folderRefs,messageRefs:Q.messageRefs,followupQueueCount:Q.followupQueueCount,attachmentPreview:Q.attachmentPreview,setAttachmentPreview:Q.setAttachmentPreview,extensionWorkingState:Q.extensionWorkingState,activeChatAgents:q.activeChatAgents,connectionStatus:q.connectionStatus,stateAccessFailed:q.stateAccessFailed,activeModel:q.activeModel,activeModelUsage:q.activeModelUsage,activeThinkingLevel:q.activeThinkingLevel,supportsThinking:q.supportsThinking,contextUsage:q.contextUsage,notificationsEnabled:q.notificationsEnabled,notificationPermission:q.notificationPermission,handleToggleNotifications:q.handleToggleNotifications,setActiveModel:q.setActiveModel,applyModelState:q.applyModelState,setPendingRequest:K.setPendingRequest,pendingRequestRef:K.pendingRequestRef,...G,...Z,...X,...Y,...L,...K,...Q,...q};return{branchLoaderMode:$.branchLoaderMode,panePopoutMode:$.panePopoutMode,branchLoaderState:$.branchLoaderState,panePopoutOptions:B,mainShellOptions:N}}function JA(_){let{steerQueuedTurnId:$,currentTurnId:j,agentStatus:G}=_;return Boolean($&&$===(G?.turn_id||j))}function $q(_){let $=JA({steerQueuedTurnId:_.agentState.steerQueuedTurnId,currentTurnId:_.agentState.currentTurnId,agentStatus:_.agentState.agentStatus});return _q({routing:{branchLoaderMode:_.routeState.branchLoaderMode,panePopoutMode:_.routeState.panePopoutMode,branchLoaderState:_.surface.branchLoaderState},paneRuntime:_.paneRuntime,splitters:_.splitters,branchPaneActions:_.orchestration.branchPaneActions,timelineViewActions:_.orchestration.timelineViewActions,composeReferenceActions:_.interaction.composeReferenceActions,sidepanelActions:_.orchestration.sidepanelActions,shellState:{appShellRef:_.surface.appShellRef,workspaceOpen:_.surface.workspaceOpen,editorOpen:_.editorState.editorOpen,chatOnlyMode:_.routeState.chatOnlyMode,isRenameBranchFormOpen:_.surface.isRenameBranchFormOpen,renameBranchNameDraft:_.surface.renameBranchNameDraft,renameBranchNameInputRef:_.surface.renameBranchNameInputRef,setRenameBranchNameDraft:_.surface.setRenameBranchNameDraft,renameBranchDraftState:_.surface.renameBranchDraftState,isRenamingBranch:_.surface.isRenamingBranch,isWebAppMode:_.surface.isWebAppMode,TERMINAL_TAB_PATH:_.helpers.terminalTabPath,isIOSDevice:_.helpers.isIOSDevice,currentBranchRecord:_.surface.currentBranchRecord,currentChatJid:_.routeState.currentChatJid,currentChatBranches:_.surface.currentChatBranches,formatBranchPickerLabel:_.helpers.formatBranchPickerLabel,activeSearchScopeLabel:_.surface.activeSearchScopeLabel,currentHashtag:_.surface.currentHashtag,searchQuery:_.surface.searchQuery,oobePanelState:_.surface.oobePanelState,composePrefillRequest:_.surface.composePrefillRequest,requestComposePrefill:_.surface.requestComposePrefill,handleOobeSetupProvider:_.surface.handleOobeSetupProvider,handleOobeShowModelPicker:_.surface.handleOobeShowModelPicker,handleOobeOpenWorkspace:_.surface.handleOobeOpenWorkspace,handleDismissProviderMissingOobe:_.surface.handleDismissProviderMissingOobe,handleCompleteProviderReadyOobe:_.surface.handleCompleteProviderReadyOobe,posts:_.timeline.posts,hasMore:_.timeline.hasMore,loadMore:_.timeline.loadMore,timelineRef:_.surface.timelineRef,agents:_.surface.agents,userProfile:_.surface.userProfile,removingPostIds:_.surface.removingPostIds,extensionStatusPanels:_.surface.extensionStatusPanels,pendingExtensionPanelActions:_.surface.pendingExtensionPanelActions,searchOpen:_.surface.searchOpen,followupQueueItems:_.surface.followupQueueItems,viewStateRef:_.surface.viewStateRef,loadPosts:_.timeline.loadPosts,scrollToBottom:_.timeline.scrollToBottom,searchScope:_.surface.searchScope,tabStripTabs:_.editorState.tabStripTabs,tabStripActiveId:_.editorState.tabStripActiveId,handleTabActivate:_.editorState.handleTabActivate,previewTabs:_.editorState.previewTabs,diffTabs:_.editorState.diffTabs,handleTabTogglePreview:_.editorState.handleTabTogglePreview,handleTabToggleDiff:_.editorState.handleTabToggleDiff,panePopoutPath:_.routeState.panePopoutPath,tabPaneOverrides:_.editorState.tabPaneOverrides,handleTabClose:_.editorState.handleTabClose,handleTabCloseOthers:_.editorState.handleTabCloseOthers,handleTabCloseAll:_.editorState.handleTabCloseAll,handleTabTogglePin:_.editorState.handleTabTogglePin,handleTabEditSource:_.editorState.handleTabEditSource,openEditor:_.editorState.openEditor,openTerminalTab:_.paneRuntime.openTerminalTab,openVncTab:_.paneRuntime.openVncTab},agentState:{agentStatus:_.agentState.agentStatus,isCompactionStatus:_.agentState.isCompactionStatus,agentDraft:_.agentState.agentDraft,agentPlan:_.agentState.agentPlan,agentThought:_.agentState.agentThought,pendingRequest:_.agentState.pendingRequest,intentToast:_.surface.intentToast,currentTurnId:_.agentState.currentTurnId,steerQueued:$,handlePanelToggle:_.interaction.handlePanelToggle,setPendingRequest:_.agentState.setPendingRequest,pendingRequestRef:_.agentState.pendingRequestRef,handleInjectQueuedFollowup:_.orchestration.followupActions.handleInjectQueuedFollowup,handleRemoveQueuedFollowup:_.orchestration.followupActions.handleRemoveQueuedFollowup,handleMoveQueuedFollowup:_.orchestration.followupActions.handleMoveQueuedFollowup},composeState:{btwSession:_.surface.btwSession,floatingWidget:_.surface.floatingWidget,fileRefs:_.surface.fileRefs,folderRefs:_.surface.folderRefs,messageRefs:_.surface.messageRefs,followupQueueCount:_.surface.followupQueueCount,attachmentPreview:_.surface.attachmentPreview,setAttachmentPreview:_.surface.setAttachmentPreview,handleMessageResponse:_.orchestration.followupActions.handleMessageResponse,isComposeBoxAgentActive:_.orchestration.isComposeBoxAgentActive,extensionWorkingState:_.surface.extensionWorkingState},modelState:{activeChatAgents:_.surface.activeChatAgents,connectionStatus:_.surface.connectionStatus,stateAccessFailed:_.surface.stateAccessFailed,activeModel:_.surface.activeModel,agentModelsPayload:_.surface.agentModelsPayload,activeModelUsage:_.surface.activeModelUsage,activeThinkingLevel:_.surface.activeThinkingLevel,supportsThinking:_.surface.supportsThinking,contextUsage:_.surface.contextUsage,notificationsEnabled:_.surface.notificationsEnabled,notificationPermission:_.surface.notificationPermission,handleToggleNotifications:_.surface.handleToggleNotifications,setActiveModel:_.surface.setActiveModel,applyModelState:_.orchestration.chatRefreshLifecycle.applyModelState}})}M0();var Gq="(min-width: 1024px) and (orientation: landscape)";function Vj(_=typeof window<"u"?window:null){return _&&typeof _==="object"?_:null}function jq(_,$){let j=Vj(_);if(!j?.localStorage?.getItem)return null;try{let G=j.localStorage.getItem($);if(G===null)return null;return G==="true"}catch{return null}}function AA(_,$,j){let G=Vj(_);if(!G?.localStorage?.setItem)return;try{G.localStorage.setItem($,String(Boolean(j)))}catch{return}}function T5(_=typeof window<"u"?window:null){let $=Vj(_);if(!$?.matchMedia)return"desktop";return $.matchMedia("(min-width: 1024px) and (orientation: landscape)").matches?"desktop":"narrow"}function Zq(_){return _==="narrow"?"workspaceOpen.narrow":"workspaceOpen.desktop"}function Xq(_={}){let{runtime:$=typeof window<"u"?window:null,bucket:j=null,allowLegacyFallback:G=!1,defaultValue:Z=!1}=_,X=j||T5($),Y=Zq(X),L=jq($,Y);if(typeof L==="boolean")return L;if(G&&X==="desktop"){let V=jq($,"workspaceOpen");if(typeof V==="boolean")return V}return Z}function Yq(_,$={}){let{runtime:j=typeof window<"u"?window:null,bucket:G=null}=$,Z=G||T5(j);AA(j,Zq(Z),Boolean(_))}_5();var kA=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function Lq(_,$={}){let j=$.window??(typeof window<"u"?window:null),G=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let Z=()=>{_(f1({window:j,navigator:G}))};Z();let Y=kA.map((L)=>{try{return j.matchMedia?.(L)??null}catch{return null}}).filter(Boolean).map((L)=>{if(typeof L.addEventListener==="function")return L.addEventListener("change",Z),()=>L.removeEventListener("change",Z);if(typeof L.addListener==="function")return L.addListener(Z),()=>L.removeListener(Z);return()=>{}});return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),()=>{for(let L of Y)L();j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z)}}function J8(_,$={}){let j=$.window??(typeof window<"u"?window:null),G=$.document??(typeof document<"u"?document:null);if(!j||!G||typeof _!=="function")return()=>{};let Z=()=>{if(G.visibilityState&&G.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),G.addEventListener?.("visibilitychange",Z),()=>{j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z),G.removeEventListener?.("visibilitychange",Z)}}function Kq(_={}){return f1(_)&&L6(_)}function yA(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let G=Number($?.innerHeight||0);if(Number.isFinite(G)&&G>0)return Math.round(G);return null}function MA(_={},$={}){if(!Kq(_))return null;let j=_.window??(typeof window<"u"?window:null),G=_.document??(typeof document<"u"?document:null);if(!j||!G?.documentElement)return null;let Z=yA({window:j});if(Z&&Z>0)G.documentElement.style.setProperty("--app-height",`${Z}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch(X){console.debug("[mobile-viewport] Ignoring scrollTo failure during standalone viewport reset.",X)}try{if(G.scrollingElement)G.scrollingElement.scrollTop=0,G.scrollingElement.scrollLeft=0;if(G.documentElement)G.documentElement.scrollTop=0,G.documentElement.scrollLeft=0;if(G.body)G.body.scrollTop=0,G.body.scrollLeft=0}catch(X){console.debug("[mobile-viewport] Ignoring DOM scroll reset failure during standalone viewport sync.",X)}}return Z}function Vq(_={}){if(!Kq(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};j.documentElement?.style?.setProperty?.("--app-height","100vh");let G=0,Z=new Set,X=()=>{if(G)$.cancelAnimationFrame?.(G),G=0;for(let q of Z)$.clearTimeout?.(q);Z.clear()},Y=()=>{G=0,MA({window:$,document:j})},L=()=>{if(G)$.cancelAnimationFrame?.(G);G=$.requestAnimationFrame?.(Y)??0},V=()=>{L();for(let q of[80,220,420]){let B=$.setTimeout?.(()=>{Z.delete(B),L()},q);if(B!=null)Z.add(B)}},K=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;V()},Q=$.visualViewport;return V(),$.addEventListener("focus",V),$.addEventListener("pageshow",V),$.addEventListener("resize",V),$.addEventListener("orientationchange",V),j.addEventListener("visibilitychange",K),j.addEventListener("focusin",V,!0),Q?.addEventListener?.("resize",V),Q?.addEventListener?.("scroll",V),()=>{X(),$.removeEventListener("focus",V),$.removeEventListener("pageshow",V),$.removeEventListener("resize",V),$.removeEventListener("orientationchange",V),j.removeEventListener("visibilitychange",K),j.removeEventListener("focusin",V,!0),Q?.removeEventListener?.("resize",V),Q?.removeEventListener?.("scroll",V)}}var qj="resume-layout-settling",wA=220,T2=new WeakMap;function TA(_){if(!_){V_(O8,"");return}V_(O8,JSON.stringify({question:_.question||"",answer:_.answer||"",thinking:_.thinking||"",error:_.error||null,status:_.status||"success"}))}function xA(_={}){if(_.panePopoutMode)return!1;let $=typeof _.search==="string"?_.search:"";return!/(?:^|[?&])pane_popout=1(?:&|$)/.test($)}function IA(_,$={}){if(!_)return()=>{};let{durationMs:j=wA,scheduleTimeout:G=setTimeout,clearScheduledTimeout:Z=clearTimeout}=$,X=T2.get(_);if(X)Z(X);_.classList.add(qj);let Y=G(()=>{if(T2.get(_)===Y)_.classList.remove(qj),T2.delete(_)},j);return T2.set(_,Y),()=>{let L=T2.get(_);if(L)Z(L),T2.delete(_);_.classList.remove(qj)}}function CA(_,$){if(!_?.getElementById)return;let j=encodeURIComponent(String($||"0")),G={"dynamic-manifest":`/manifest.json?v=${j}`,"dynamic-favicon":`/favicon.ico?v=${j}`,"dynamic-apple-touch-icon":`/apple-touch-icon.png?v=${j}`,"dynamic-apple-touch-icon-180":`/apple-touch-icon-180x180.png?v=${j}`,"dynamic-apple-touch-icon-167":`/apple-touch-icon-167x167.png?v=${j}`,"dynamic-apple-touch-icon-152":`/apple-touch-icon-152x152.png?v=${j}`,"dynamic-apple-touch-icon-precomposed":`/apple-touch-icon-precomposed.png?v=${j}`};for(let[Z,X]of Object.entries(G)){let Y=_.getElementById(Z);if(Y&&Y.href!==X)Y.href=X}}function qq(_){let{isRenameBranchFormOpen:$,renameBranchNameInputRef:j,appShellRef:G,setIsWebAppMode:Z,workspaceOpen:X,setWorkspaceOpen:Y,btwSession:L,agents:V,agentsRef:K,currentChatJid:Q,activeChatJidRef:q,userProfile:B,userProfileRef:N,brandingRef:U,panePopoutMode:E=!1}=_;dX(30000),u(()=>{if(!$)return;requestAnimationFrame(()=>{if($)j.current?.focus?.(),j.current?.select?.()})},[$,j]),u(()=>pZ(),[]),u(()=>Lq(Z),[Z]),u(()=>{let k=()=>{},O=J8(()=>{G7(),k(),k=IA(G.current)});return()=>{O(),k()}},[G]);let D=g(T5());return u(()=>{Yq(X,{bucket:D.current})},[X]),u(()=>{if(typeof window>"u"||!window.matchMedia)return;let k=window.matchMedia(Gq),O=()=>{let W=T5(window);if(D.current===W)return;let I=D.current;if(D.current=W,I==="desktop"&&W==="narrow")Y(!1)};if(k.addEventListener)k.addEventListener("change",O);else if(k.addListener)k.addListener(O);return()=>{if(k.removeEventListener)k.removeEventListener("change",O);else if(k.removeListener)k.removeListener(O)}},[Y]),u(()=>Vq(),[]),u(()=>{TA(L)},[L]),u(()=>{K.current=V||{}},[V,K]),u(()=>{q.current=Q},[q,Q]),u(()=>{N.current=B||{name:"You",avatar_url:null,avatar_background:null}},[B,N]),{applyBranding:R((k,O,W=null)=>{if(typeof document>"u")return;let I=(k||"").trim()||"PiClaw";if(U.current.title!==I){if(xA({panePopoutMode:E,search:typeof window<"u"?window.location.search:""})){document.title=I;let J=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(J&&J.getAttribute("content")!==I)J.setAttribute("content",I)}U.current.title=I}let x=O?`${O}|${W||""}`:"";if(U.current.avatarBase!==x){U.current.avatarBase=x;let J=W||Date.now();CA(document,J)}},[U])}}M0();function Qq(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen&&!$.autoOpenEditor)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function Qj(_){if(typeof _==="string")return _.trim();if(typeof _==="number")return Number.isFinite(_)?String(_):"";if(typeof _==="bigint")return String(_);return""}function A8(_,$){let j=Array.isArray(_)?_:[],G=Qj($);if(!G)return j;if(j.includes(G))return j;return[...j,G]}function k8(_,$){let j=Array.isArray(_)?_:[],G=Qj($);if(!G)return j;if(!j.includes(G))return j;return j.filter((Z)=>Z!==G)}function y8(_){if(!Array.isArray(_))return[];let $=[],j=new Set;for(let G of _){let Z=Qj(G);if(!Z||j.has(Z))continue;j.add(Z),$.push(Z)}return $}async function Nq(_){let{hashtag:$,setCurrentHashtag:j,setPosts:G,loadPosts:Z}=_;j($),G(null),await Z($)}async function Bq(_){let{setCurrentHashtag:$,setSearchQuery:j,setPosts:G,loadPosts:Z}=_;$(null),j(null),G(null),await Z()}async function Nj(_){let{query:$,scope:j,currentChatJid:G,currentRootChatJid:Z,searchPosts:X,setSearchScope:Y,setSearchQuery:L,setCurrentHashtag:V,setPosts:K,setHasMore:Q}=_,q=typeof $==="string"?$.trim():"";if(!q)return;let B=j==="root"||j==="all"?j:"current";Y(B),L(q),V(null),K(null);try{let N=await X(q,50,0,G,B,Z,_.filters);K(Array.isArray(N?.results)?N.results:[]),Q(!1)}catch(N){console.error("Failed to search:",N),K([])}}async function Fq(_){let{post:$,posts:j,currentChatJid:G,deletePost:Z,preserveTimelineScrollTop:X,setPosts:Y,setRemovingPostIds:L,hasMoreRef:V,loadMoreRef:K,confirm:Q=(H)=>window.confirm(H),showAlert:q=(H)=>alert(H),scheduleTimeout:B=(H,k)=>{setTimeout(H,k)}}=_;if(!$)return;let N=$.id,U=typeof $?.chat_jid==="string"&&$.chat_jid.trim()?$.chat_jid.trim():G,E=j?.filter((H)=>H?.data?.thread_id===N&&H?.id!==N).length||0;if(E>0){if(!Q(`Delete this message and its ${E} replies?`))return}let D=(H)=>{if(!H.length)return;L((k)=>{let O=new Set(k);return H.forEach((W)=>O.add(W)),O}),B(()=>{if(X(()=>{Y((k)=>k?k.filter((O)=>!H.includes(O.id)):k)}),L((k)=>{let O=new Set(k);return H.forEach((W)=>O.delete(W)),O}),V.current)K.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let H=await Z(N,E>0,U);if(H?.ids?.length)D(H.ids)}catch(H){let k=H instanceof Error?H.message:String(H||"");if(E===0&&k.includes("Replies exist")){if(!Q("Delete this message and its replies?"))return;let W=await Z(N,!0,U);if(W?.ids?.length)D(W.ids);return}console.error("Failed to delete post:",H),q(`Failed to delete message: ${k}`)}}async function Uq(_){let{id:$,targetChatJid:j,currentChatJid:G,getThread:Z,setPosts:X,getElementById:Y=(q)=>document.getElementById(q),scheduleRaf:L=(q)=>requestAnimationFrame(q),scheduleTimeout:V=(q,B)=>{setTimeout(q,B)}}=_,K=(q)=>{q.scrollIntoView({behavior:"smooth",block:"center"}),q.classList.add("post-highlight"),V(()=>q.classList.remove("post-highlight"),2000)},Q=Y(`post-${$}`);if(Q){K(Q);return}try{let q=typeof j==="string"&&j.trim()?j.trim():G,N=(await Z($,q))?.thread?.[0];if(!N)return;X((U)=>{if(!U)return[N];if(U.some((E)=>E.id===N.id))return U;return[...U,N]}),L(()=>{V(()=>{let U=Y(`post-${$}`);if(U)K(U)},50)})}catch(q){console.error("[scrollToMessage] Failed to fetch message",$,q)}}function PA(_){if(typeof _==="string"&&_.trim())return _.trim();return"Could not send your message."}function fA(_){let{id:$,targetChatJid:j=null,currentChatJid:G,currentHashtag:Z=null,searchQuery:X=null,searchOpen:Y=!1,setCurrentHashtag:L,setSearchQuery:V,setSearchOpen:K,setMessageRefs:Q,navigate:q,chatOnlyMode:B,baseHref:N=typeof window<"u"?window.location.href:"http://localhost/"}=_,U=String($??"").trim();if(!U)return!1;let E=typeof j==="string"&&j.trim()?j.trim():G,D=E!==G,H=Boolean(Y||X||Z);if(!D&&!H)return Q((k)=>A8(k,U)),!0;if(Q([U]),L?.(null),V?.(null),K?.(!1),D&&typeof q==="function"){let k=T1(N,E,{chatOnly:B});q(k)}return!0}function Hq(_){let{setIntentToast:$,intentToastTimerRef:j,editorOpen:G,openEditor:Z,resolvePane:X,tabStripActiveId:Y,setFileRefs:L,setFolderRefs:V,setMessageRefs:K,currentChatJid:Q,currentHashtag:q,searchQuery:B,searchOpen:N,setCurrentHashtag:U,setSearchQuery:E,setSearchOpen:D,navigate:H,chatOnlyMode:k,baseHref:O,getThread:W,setPosts:I}=_,x=R(()=>{if(j.current)clearTimeout(j.current),j.current=null;$(null)},[j,$]);u(()=>{return()=>{x()}},[x]);let J=R((t)=>{L((V0)=>A8(V0,t))},[L]),A=R((t)=>{L((V0)=>k8(V0,t))},[L]),z=R(()=>{L([])},[L]),T=R((t)=>{L(y8(t))},[L]),w=R((t)=>{V((V0)=>A8(V0,t))},[V]),y=R((t)=>{V((V0)=>k8(V0,t))},[V]),P=R(()=>{V([])},[V]),f=R((t)=>{V(y8(t))},[V]),b=R((t,V0=null,q0="info",k0=3000)=>{x(),$({title:t,detail:V0||null,kind:q0||"info"}),j.current=setTimeout(()=>{$((s)=>s?.title===t?null:s)},k0)},[x,j,$]),c=R((t,{autoOpenEditor:V0=!1}={})=>{let q0=Qq(t,{editorOpen:G,autoOpenEditor:V0,resolvePane:X});if(q0.kind==="open"){Z(q0.path);return}if(q0.kind==="toast")b(q0.title,q0.detail,q0.level)},[G,Z,X,b]),h=R((t)=>{c(t,{autoOpenEditor:!1})},[c]),_0=R((t)=>{c(t,{autoOpenEditor:!0})},[c]),v=R(()=>{let t=Y;if(t)J(t)},[J,Y]),e=R((t,V0=null)=>{fA({id:t,targetChatJid:V0,currentChatJid:Q,currentHashtag:q,searchQuery:B,searchOpen:N,setCurrentHashtag:U,setSearchQuery:E,setSearchOpen:D,setMessageRefs:K,navigate:H,chatOnlyMode:k,baseHref:O})},[O,k,Q,q,H,N,B,U,K,D,E]),z0=R(async(t,V0=null)=>{await Uq({id:t,targetChatJid:V0,currentChatJid:Q,getThread:W,setPosts:I})},[Q,W,I]),j0=R((t)=>{K((V0)=>k8(V0,t))},[K]),$0=R(()=>{K([])},[K]),L0=R((t)=>{K(y8(t))},[K]),B0=R((t)=>{b("Compose failed",PA(t),"error",5000)},[b]);return{clearIntentToast:x,addFileRef:J,removeFileRef:A,clearFileRefs:z,setFileRefsFromCompose:T,addFolderRef:w,removeFolderRef:y,clearFolderRefs:P,setFolderRefsFromCompose:f,showIntentToast:b,openFileFromPill:h,openTimelineFileFromPill:_0,attachActiveEditorFile:v,addMessageRef:e,scrollToMessage:z0,removeMessageRef:j0,clearMessageRefs:$0,setMessageRefsFromCompose:L0,handleComposeSubmitError:B0}}M0();async function Eq(_){let{panelKey:$,expanded:j,currentTurnIdRef:G,thoughtExpandedRef:Z,draftExpandedRef:X,setAgentThoughtVisibility:Y,getAgentThought:L,thoughtBufferRef:V,draftBufferRef:K,setAgentThought:Q,setAgentDraft:q}=_;if($!=="thought"&&$!=="draft")return;let B=G.current;if($==="thought"){if(Z.current=j,B)try{await Y(B,"thought",j)}catch(N){console.warn("Failed to update thought visibility:",N)}if(!j)return;try{let N=B?await L(B,"thought"):null;if(N?.text)V.current=N.text;Q((U)=>({...U||{text:"",totalLines:0},fullText:V.current||U?.fullText||"",totalLines:Number.isFinite(N?.total_lines)?N.total_lines:U?.totalLines||0}))}catch(N){console.warn("Failed to fetch full thought:",N)}return}if(X.current=j,B)try{await Y(B,"draft",j)}catch(N){console.warn("Failed to update draft visibility:",N)}if(!j)return;try{let N=B?await L(B,"draft"):null;if(N?.text)K.current=N.text;q((U)=>({...U||{text:"",totalLines:0},fullText:K.current||U?.fullText||"",totalLines:Number.isFinite(N?.total_lines)?N.total_lines:U?.totalLines||0}))}catch(N){console.warn("Failed to fetch full draft:",N)}}function RA(_){if(!_)return _;if(!(_.last_activity||_.lastActivity))return _;let{last_activity:$,lastActivity:j,...G}=_;return G}function SA(_){if(!_||typeof _!=="object")return{type:"active",last_activity:!0};return{..._,last_activity:!0}}function Dq(_){let{lastActivityTtlMs:$,lastActivityTimerRef:j,lastActivityTokenRef:G,lastAgentEventRef:Z,lastSilenceNoticeRef:X,isAgentRunningRef:Y,setIsAgentTurnActive:L,setAgentStatus:V,draftBufferRef:K,thoughtBufferRef:Q,pendingRequestRef:q,lastAgentResponseRef:B,currentTurnIdRef:N,steerQueuedTurnIdRef:U,agentStatusRef:E,silentRecoveryRef:D,thoughtExpandedRef:H,draftExpandedRef:k,setCurrentTurnId:O,setSteerQueuedTurnId:W,currentTurnIdRefForPanel:I,setAgentThoughtVisibility:x,getAgentThought:J,setAgentThought:A,setAgentDraft:z}=_,T=R((c={})=>{let h=Number(c.atMs),_0=Number.isFinite(h)&&h>0?h:Date.now();if(Z.current=_0,c.running)Y.current=!0,L((v)=>v?v:!0);if(c.clearSilence)X.current=0},[Y,Z,X,L]),w=R(()=>{if(j.current)clearTimeout(j.current),j.current=null;G.current=0},[j,G]);u(()=>()=>{w()},[w]);let y=R(()=>{w(),V((c)=>RA(c))},[w,V]),P=R((c)=>{if(!c)return;w();let h=Date.now();G.current=h,V(SA(c)),j.current=setTimeout(()=>{if(G.current!==h)return;V((_0)=>{if(!_0||!(_0.last_activity||_0.lastActivity))return _0;return null})},$)},[w,j,G,$,V]),f=R(()=>{Y.current=!1,L(!1),Z.current=null,X.current=0,K.current="",Q.current="",q.current=null,B.current=null,N.current=null,U.current=null,E.current=null,D.current={inFlight:!1,lastAttemptAt:0,turnId:null},w(),O(null),W(null),H.current=!1,k.current=!1},[E,w,N,K,k,Y,Z,B,X,q,O,L,W,D,U,Q,H]),b=R(async(c,h)=>{await Eq({panelKey:c,expanded:h,currentTurnIdRef:I,thoughtExpandedRef:H,draftExpandedRef:k,setAgentThoughtVisibility:x,getAgentThought:J,thoughtBufferRef:Q,draftBufferRef:K,setAgentThought:A,setAgentDraft:z})},[I,K,k,J,z,A,x,Q,H]);return{noteAgentActivity:T,clearLastActivityTimer:w,clearLastActivityFlag:y,showLastActivity:P,clearAgentRunState:f,handlePanelToggle:b}}M0();function M8(_){return _?{..._}:{text:"",totalLines:0}}function zq(_){return Array.isArray(_)?_.map(($)=>({...$})):[]}function uA(_){return{inFlight:Boolean(_?.inFlight),lastAttemptAt:Number(_?.lastAttemptAt||0),turnId:typeof _?.turnId==="string"?_.turnId:null}}function gA(){return{agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}}function Wq(_){return{agentStatus:_.agentStatus,agentDraft:M8(_.agentDraft),agentPlan:_.agentPlan||"",agentThought:M8(_.agentThought),pendingRequest:_.pendingRequest,currentTurnId:_.currentTurnId||null,steerQueuedTurnId:_.steerQueuedTurnId||null,isAgentTurnActive:Boolean(_.isAgentTurnActive),followupQueueItems:zq(_.followupQueueItems),activeModel:_.activeModel,activeThinkingLevel:_.activeThinkingLevel,supportsThinking:Boolean(_.supportsThinking),activeModelUsage:_.activeModelUsage,contextUsage:_.contextUsage,isAgentRunning:Boolean(_.isAgentRunning),wasAgentActive:Boolean(_.wasAgentActive),draftBuffer:_.draftBuffer||"",thoughtBuffer:_.thoughtBuffer||"",lastAgentEvent:_.lastAgentEvent||null,lastSilenceNotice:Number(_.lastSilenceNotice||0),lastAgentResponse:_.lastAgentResponse||null,currentTurnIdRef:_.currentTurnIdRef||null,steerQueuedTurnIdRef:_.steerQueuedTurnIdRef||null,thoughtExpanded:Boolean(_.thoughtExpanded),draftExpanded:Boolean(_.draftExpanded),agentStatusRef:_.agentStatusRef||null,silentRecovery:uA(_.silentRecovery)}}function Oq(_){let $=_.snapshot||gA(),{refs:j,setters:G}=_;return _.clearLastActivityTimer?.(),j.isAgentRunningRef.current=Boolean($.isAgentRunning),j.wasAgentActiveRef.current=Boolean($.wasAgentActive),G.setIsAgentTurnActive(Boolean($.isAgentTurnActive)),j.lastAgentEventRef.current=$.lastAgentEvent||null,j.lastSilenceNoticeRef.current=Number($.lastSilenceNotice||0),j.draftBufferRef.current=$.draftBuffer||"",j.thoughtBufferRef.current=$.thoughtBuffer||"",j.pendingRequestRef.current=$.pendingRequest||null,j.lastAgentResponseRef.current=$.lastAgentResponse||null,j.currentTurnIdRef.current=$.currentTurnIdRef||null,j.steerQueuedTurnIdRef.current=$.steerQueuedTurnIdRef||null,j.agentStatusRef.current=$.agentStatusRef||null,j.silentRecoveryRef.current=$.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},j.thoughtExpandedRef.current=Boolean($.thoughtExpanded),j.draftExpandedRef.current=Boolean($.draftExpanded),G.setAgentStatus($.agentStatus||null),G.setAgentDraft(M8($.agentDraft)),G.setAgentPlan($.agentPlan||""),G.setAgentThought(M8($.agentThought)),G.setPendingRequest($.pendingRequest||null),G.setCurrentTurnId($.currentTurnId||null),G.setSteerQueuedTurnId($.steerQueuedTurnId||null),G.setFollowupQueueItems(zq($.followupQueueItems)),G.setActiveModel($.activeModel||null),G.setActiveThinkingLevel($.activeThinkingLevel||null),G.setSupportsThinking(Boolean($.supportsThinking)),G.setActiveModelUsage($.activeModelUsage??null),G.setContextUsage($.contextUsage??null),$}function Bj(_){return String(_||"").trim()||"web:default"}function Jq({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function bA(_){return Jq(_)}function vA(_){let $=String(_?.data?.content||"").trim();if($)return $.replace(/\s+/g," ").slice(0,200);if((Array.isArray(_?.data?.content_blocks)?_.data.content_blocks:[]).length>0)return"Sent an attachment.";return""}function Aq(_){let{isAgentTurnActive:$,steerQueuedTurnId:j,currentTurnId:G,steerQueuedTurnIdRef:Z,setSteerQueuedTurnId:X,agentStatus:Y,agentDraft:L,agentPlan:V,agentThought:K,pendingRequest:Q,pendingRequestRef:q,followupQueueItems:B,activeModel:N,activeThinkingLevel:U,supportsThinking:E,activeModelUsage:D,contextUsage:H,isAgentRunningRef:k,wasAgentActiveRef:O,draftBufferRef:W,thoughtBufferRef:I,lastAgentEventRef:x,lastSilenceNoticeRef:J,lastAgentResponseRef:A,currentTurnIdRef:z,thoughtExpandedRef:T,draftExpandedRef:w,agentStatusRef:y,silentRecoveryRef:P,clearLastActivityTimer:f,setIsAgentTurnActive:b,setAgentStatus:c,setAgentDraft:h,setAgentPlan:_0,setAgentThought:v,setPendingRequest:e,setCurrentTurnId:z0,setFollowupQueueItems:j0,setActiveModel:$0,setActiveThinkingLevel:L0,setSupportsThinking:B0,setActiveModelUsage:t,setContextUsage:V0,lastNotifiedIdRef:q0,agentsRef:k0,notify:s,shouldNotifyLocallyForChat:X0}=_,D0=R((m0)=>{if(!bA({remainingQueueCount:m0,steerQueuedTurnId:Z.current,currentTurnId:z.current,isAgentTurnActive:$}))return;Z.current=null,X(null)},[$,z,X,Z]),C0=R(()=>Wq({agentStatus:Y,agentDraft:L,agentPlan:V,agentThought:K,pendingRequest:Q,currentTurnId:G,steerQueuedTurnId:j,isAgentTurnActive:$,followupQueueItems:B,activeModel:N,activeThinkingLevel:U,supportsThinking:E,activeModelUsage:D,contextUsage:H,isAgentRunning:k.current,wasAgentActive:O.current,draftBuffer:W.current,thoughtBuffer:I.current,lastAgentEvent:x.current,lastSilenceNotice:J.current,lastAgentResponse:A.current,currentTurnIdRef:z.current,steerQueuedTurnIdRef:Z.current,thoughtExpanded:T.current,draftExpanded:w.current,agentStatusRef:y.current,silentRecovery:P.current}),[N,D,U,L,V,Y,K,H,G,B,$,Q,j,E,k,O,W,I,x,J,A,z,Z,T,w,y,P]),g0=R((m0)=>{Oq({snapshot:m0,clearLastActivityTimer:f,refs:{isAgentRunningRef:k,wasAgentActiveRef:O,lastAgentEventRef:x,lastSilenceNoticeRef:J,draftBufferRef:W,thoughtBufferRef:I,pendingRequestRef:q,lastAgentResponseRef:A,currentTurnIdRef:z,steerQueuedTurnIdRef:Z,agentStatusRef:y,silentRecoveryRef:P,thoughtExpandedRef:T,draftExpandedRef:w},setters:{setIsAgentTurnActive:b,setAgentStatus:c,setAgentDraft:h,setAgentPlan:_0,setAgentThought:v,setPendingRequest:e,setCurrentTurnId:z0,setSteerQueuedTurnId:X,setFollowupQueueItems:j0,setActiveModel:$0,setActiveThinkingLevel:L0,setSupportsThinking:B0,setActiveModelUsage:t,setContextUsage:V0}})},[y,f,z,W,w,k,x,A,J,q,$0,t,L0,h,_0,c,v,V0,z0,j0,b,e,X,B0,P,Z,I,T,O]),n0=R((m0)=>{if(!m0)return;if(z.current===m0)return;z.current=m0,P.current={inFlight:!1,lastAttemptAt:0,turnId:m0},z0(m0),Z.current=null,X(null),W.current="",I.current="",h({text:"",totalLines:0}),_0(""),v({text:"",totalLines:0}),e(null),q.current=null,A.current=null,T.current=!1,w.current=!1},[z,W,w,A,q,h,_0,v,z0,e,X,P,Z,I,T]),j_=R((m0)=>{let d0=A.current;if(!d0||!d0.post)return;if(m0&&d0.turnId&&d0.turnId!==m0)return;let S0=d0.post,o0=typeof S0?.chat_jid==="string"&&S0.chat_jid.trim()?S0.chat_jid.trim():"";if(!o0||!X0(o0))return;if(S0.id&&q0.current===S0.id)return;let v0=vA(S0);if(!v0)return;q0.current=S0.id||q0.current,A.current=null;let a0=k0.current||{},N_=(S0?.data?.agent_id?a0[S0.data.agent_id]:null)?.name||"Pi";s(N_,v0,{sourceLabel:"Local"})},[k0,A,q0,s,X0]);return{clearQueuedSteerStateIfStale:D0,snapshotCurrentChatPaneState:C0,restoreChatPaneState:g0,setActiveTurn:n0,notifyForFinalResponse:j_}}M0();function w8(_){return _?.turn_id||_?.turnId||null}function x2(_){if(typeof _?.text!=="string"||!_.text)return null;let $=Number.isFinite(_?.totalLines)?Number(_.totalLines):Number.isFinite(_?.total_lines)?Number(_.total_lines):0;return{text:_.text,totalLines:$}}function Fj(_,$){return typeof _?.text==="string"&&_.text.length>=$.length}function Uj(_,$){return Number.isFinite($)?Number($):_?_.replace(/\r\n/g,`
`).split(`
`).length:0}function T8(_,$){return{text:_,totalLines:Uj(_,$)}}function Hj(_,$){return{text:$?.text||"",totalLines:iX(_),fullText:_}}function kq(_,$,j){return j==="replace"?$:`${_||""}${$}`}function yq(_,$){let j=_||"";if($?.reset)j="";if($?.delta)j+=String($.delta);return j}function Mq(_,$){let j=_||"";if($?.reset)j="";if(typeof $?.delta==="string")j+=$.delta;return j}function s1(_){return!_?.currentHashtag&&!_?.searchQuery&&!_?.searchOpen}function wq(_,$,j){return Boolean($&&j&&(_==="new_post"||_==="new_reply"||_==="agent_response"))}function Ej(_,$){return _&&$}function Tq(_,$){if(!Array.isArray(_)||_.length===0)return[$];if(_.some((j)=>j?.id===$?.id))return _;return[..._,$]}function xq(_,$){if(!Array.isArray(_))return _;if(!_.some((j)=>j?.id===$?.id))return _;return _.map((j)=>j?.id===$?.id?$:j)}function Iq(_,$){if(!Array.isArray(_))return _;let j=Array.isArray($)?$:[];if(j.length===0)return _;let G=new Set(j),Z=_.filter((X)=>!G.has(X?.id));return Z.length===_.length?_:Z}async function Cq(_){let{currentChatJid:$,getAgentStatus:j,activeChatJidRef:G,wasAgentActiveRef:Z,viewStateRef:X,refreshTimeline:Y,clearAgentRunState:L,agentStatusRef:V,pendingRequestRef:K,thoughtBufferRef:Q,draftBufferRef:q,setAgentStatus:B,setAgentDraft:N,setAgentPlan:U,setAgentThought:E,setPendingRequest:D,setActiveTurn:H,noteAgentActivity:k,clearLastActivityFlag:O,onStateAccessResult:W}=_,I=$;try{let x=await j(I);if(W?.(!1),G.current!==I)return null;if(!x||x.status!=="active"||!x.data){if(Z.current&&s1(X.current))Y();return Z.current=!1,L(),V.current=null,B(null),N({text:"",totalLines:0}),U(""),E({text:"",totalLines:0}),D(null),K.current=null,x??null}Z.current=!0;let J=x.data;V.current=J;let A=w8(J);if(A)H(A);k({running:!0,clearSilence:!0,atMs:p$(J)??Date.now()}),O(),B(J);let z=x2(x.thought);if(z)E((w)=>{if(Fj(w,z.text))return w;return Q.current=z.text,z});let T=x2(x.draft);if(T)N((w)=>{if(Fj(w,T.text))return w;return q.current=T.text,T});return x}catch(x){return W?.(!0),console.warn("Failed to fetch agent status:",x),null}}async function Pq(_){let{isAgentRunningRef:$,pendingRequestRef:j,currentTurnIdRef:G,silentRecoveryRef:Z,silenceRefreshMs:X,viewStateRef:Y,refreshTimeline:L,refreshQueueState:V,refreshAgentStatus:K,now:Q=()=>Date.now()}=_;if(!$.current)return null;if(j.current)return null;let q=G.current||null,B=Z.current,N=Q();if(B.inFlight)return null;if(B.turnId===q&&N-B.lastAttemptAt<X)return null;B.inFlight=!0,B.lastAttemptAt=N,B.turnId=q;try{if(s1(Y.current))await L();return await V(),await K()}finally{B.inFlight=!1}}function mA(_){if(!_||typeof _!=="object")return!1;let $=typeof _.type==="string"?_.type:"";if($==="tool_call"||$==="tool_status"||$==="intent")return!0;return Boolean(_.tool_name||_.tool_args)}function fq(_){let{isAgentRunningRef:$,pendingRequestRef:j,lastAgentEventRef:G,lastSilenceNoticeRef:Z,agentStatusRef:X,silenceWarningMs:Y,silenceFinalizeMs:L,silenceRefreshMs:V,isCompactionStatus:K,setAgentStatus:Q,reconcileSilentTurn:q,now:B=()=>Date.now()}=_;if(!$.current)return;if(j.current)return;let N=G.current;if(!N)return;let U=B(),E=U-N,D=X.current,H=K(D),k=mA(D);if(E>=L){if(!H&&!k)Q({type:"waiting",title:"Re-syncing after a quiet period…"});q();return}if(E>=Y&&U-Z.current>=V){if(!H&&!k){let O=Math.floor(E/1000);Q({type:"waiting",title:`Waiting for model… No events for ${O}s`})}Z.current=U,q()}}function cA(_){if(!_||typeof _!=="object")return null;let $=typeof _.type==="string"?_.type:"",j=typeof _.title==="string"&&_.title.trim()?_.title.trim():null,G=typeof _.tool_name==="string"&&_.tool_name.trim()?_.tool_name.trim():null,Z=typeof _.status==="string"&&_.status.trim()?_.status.trim():null;if($==="tool_call")return{summary:`Timed out while running ${j||G||"tool"}`,title:j,toolName:G,statusText:Z};if($==="tool_status"){let X=j||G||"tool";return{summary:Z?`Timed out after ${X}: ${Z}`:`Timed out after ${X}`,title:j,toolName:G,statusText:Z}}if(G||j)return{summary:`Timed out after ${j||G||"tool"}`,title:j,toolName:G,statusText:Z};return null}function Rq(_){let{isAgentRunningRef:$,lastSilenceNoticeRef:j,lastAgentEventRef:G,currentTurnIdRef:Z,thoughtExpandedRef:X,draftExpandedRef:Y,draftBufferRef:L,thoughtBufferRef:V,pendingRequestRef:K,lastAgentResponseRef:Q,agentStatusRef:q,stalledPostIdRef:B,scrollToBottomRef:N,setCurrentTurnId:U,setAgentDraft:E,setAgentPlan:D,setAgentThought:H,setPendingRequest:k,setAgentStatus:O,setPosts:W,dedupePosts:I,now:x=()=>Date.now(),nowIso:J=()=>new Date().toISOString()}=_;if(!$.current)return;let A=cA(q.current);$.current=!1,j.current=0,G.current=null,q.current=null,Z.current=null,U(null),X.current=!1,Y.current=!1;let z=(L.current||"").trim();if(L.current="",V.current="",D(""),H({text:"",totalLines:0}),k(null),K.current=null,Q.current=null,!z){E({text:"",totalLines:0}),O({type:"error",title:"Response stalled - No content received"});return}E({text:z,totalLines:Uj(z,null),fullText:z});let T=z,w=x(),y=J(),P={id:w,timestamp:y,data:{type:"agent_response",content:T,content_blocks:[{type:"timeout_marker",timed_out:!0,title:"Timed out",tool_action_summary:A?.summary||"",tool_title:A?.title||"",tool_name:A?.toolName||"",tool_status:A?.statusText||"",draft_recovered:!0}],agent_id:"default",is_local_stall:!0}};B.current=w,W((f)=>f?I([...f,P]):[P]),N.current?.(),O(null)}function lA(_){let{stalledPostIdRef:$,setPosts:j}=_,G=$.current;if(!G)return;j((Z)=>Z?Z.filter((X)=>X.id!==G):Z),$.current=null}function hA(_){Rq(_)}function Sq(_){let{viewStateRef:$,currentHashtag:j,searchQuery:G,searchOpen:Z}=_;u(()=>{$.current={currentHashtag:j,searchQuery:G,searchOpen:Z}},[j,Z,G,$])}function uq(_){let{stalledPostIdRef:$,setPosts:j,isAgentRunningRef:G,lastSilenceNoticeRef:Z,lastAgentEventRef:X,currentTurnIdRef:Y,thoughtExpandedRef:L,draftExpandedRef:V,draftBufferRef:K,thoughtBufferRef:Q,pendingRequestRef:q,lastAgentResponseRef:B,agentStatusRef:N,scrollToBottomRef:U,setCurrentTurnId:E,setAgentDraft:D,setAgentPlan:H,setAgentThought:k,setPendingRequest:O,setAgentStatus:W,dedupePosts:I}=_,x=R(()=>{lA({stalledPostIdRef:$,setPosts:j})},[j,$]),J=R(()=>{hA({isAgentRunningRef:G,lastSilenceNoticeRef:Z,lastAgentEventRef:X,currentTurnIdRef:Y,thoughtExpandedRef:L,draftExpandedRef:V,draftBufferRef:K,thoughtBufferRef:Q,pendingRequestRef:q,lastAgentResponseRef:B,agentStatusRef:N,stalledPostIdRef:$,scrollToBottomRef:U,setCurrentTurnId:E,setAgentDraft:D,setAgentPlan:H,setAgentThought:k,setPendingRequest:O,setAgentStatus:W,setPosts:j,dedupePosts:I})},[Y,I,K,V,G,X,B,N,Z,q,U,D,H,W,k,E,O,j,$,Q,L]);return{removeStalledPost:x,finalizeStalledResponse:J}}function rA(_){let{removeFileRefRef:$,composeReferenceActions:j}=_;$.current=j.removeFileRef||null}function pA(_){return{applyBranding:_.applyBranding,composeReferenceActions:_.composeReferenceActions,..._.agentActivity,..._.chatPaneRuntime,recoveryCallbacks:_.recoveryCallbacks}}function gq(_){let{environment:$,composeReferences:j,agentActivity:G,chatPaneRuntime:Z,recovery:X,viewState:Y,removeFileRefRef:L}=_,{applyBranding:V}=qq($),K=Hq(j);rA({removeFileRefRef:L,composeReferenceActions:K});let Q=Dq(G),q=Aq({...Z,clearLastActivityTimer:Q.clearLastActivityTimer}),B=uq(X);return Sq(Y),pA({applyBranding:V,composeReferenceActions:K,agentActivity:Q,chatPaneRuntime:q,recoveryCallbacks:B})}M0();M0();I_();var x8=new Map,Dj=new Map;function bq(){return Date.now()}function x5(_){return String(_||"").trim()}function vq(_,$=600000){return Boolean(_&&bq()-_.cachedAt<=$)}function nA(_){while(_.size>24){let $=_.keys().next().value;if(!$)break;_.delete($)}}function mq(_,$){return x8.delete(_),x8.set(_,$),nA(x8),$}function I8(_,$){let j=x5(_);if(!j)return null;let G={posts:Array.isArray($?.posts)?$.posts:[],has_more:Boolean($?.has_more),cachedAt:bq()};return mq(j,G)}function zj(_,$={}){let j=x5(_);if(!j)return null;let G=Number.isFinite($.maxAgeMs)?Number($.maxAgeMs):600000,Z=x8.get(j)||null;if(!vq(Z,G))return null;return mq(j,Z)}function cq(_,$,j=5){if(!Array.isArray(_))return[];let G=x5($),Z=Number.isFinite(j)?Math.max(1,Math.min(8,Number(j))):5,X=new Set,Y=[];for(let L of _){let V=x5(L?.chat_jid);if(!V||V===G||X.has(V))continue;if(X.add(V),Y.push(V),Y.length>=Z)break}return Y}async function lq(_){let $=Array.from(new Set((_.chatJids||[]).map((L)=>x5(L)).filter(Boolean)));if($.length===0)return;let j=Number.isFinite(_.maxAgeMs)?Number(_.maxAgeMs):600000,G=Number.isFinite(_.maxConcurrent)?Math.max(1,Math.min(4,Number(_.maxConcurrent))):2,Z=$.filter((L)=>!vq(zj(L,{maxAgeMs:j}),j)),X=0,Y=Array.from({length:Math.min(G,Z.length)},async()=>{while(X<Z.length){let L=Z[X++],V=Dj.get(L);if(V){await V;continue}let K=(async()=>{try{let Q=await _.fetchTimeline(L);I8(L,Q)}catch(Q){console.debug("[app-timeline-cache] Ignoring timeline prewarm failure for a best-effort background fetch.",Q,{chatJid:L})}finally{Dj.delete(L)}})();Dj.set(L,K),await K}});await Promise.all(Y)}function hq(_,$){let j=Array.isArray(_)?_:[],G=Array.isArray($)?$:null;if(!G)return j;if(G.length===0)return G;if(j.length===0)return G;let Z=1/0;for(let Y of G){let L=Y?.id;if(typeof L==="number"&&Number.isFinite(L)&&L<Z)Z=L}if(!Number.isFinite(Z))return D2([...G,...j]);let X=j.filter((Y)=>{let L=Y?.id;return typeof L==="number"&&Number.isFinite(L)&&L<Z});return D2([...G,...X])}function rq({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null,currentHashtag:G=null,searchQuery:Z=null}){let[X,Y]=C(null),[L,V]=C(!1),K=g(!1),Q=g(null),q=g(!1),B=g(null),N=g(null),U=g(0),E=g(0);u(()=>{K.current=L},[L]),u(()=>{N.current=X},[X]);let D=!G&&!Z,H=g(D);u(()=>{H.current=D},[D]),u(()=>{U.current+=1,Y(null),N.current=null,B.current=null,q.current=!1,K.current=!1,V(!1),E.current=0},[j]);let k=R((A,z)=>{if(!D)return;I8(j,{posts:Array.isArray(A)?A:[],has_more:Boolean(z)})},[j,D]),O=R((A,z)=>{N.current=Array.isArray(A)?A:[],K.current=Boolean(z),Y(N.current),V(K.current),k(N.current,K.current)},[k]),W=R(async(A=null)=>{let z=U.current;try{if(A){let P=await K7(A,50,0,j);if(z!==U.current)return;Y(P.posts),V(!1);return}let T=(P)=>{if(z!==U.current)return;let f=Array.isArray(P?.posts)?P.posts:[],b=Boolean(P?.has_more);O(f,b)},w=zj(j);if(w){O(w.posts,w.has_more);let P=E.current;h$(10,null,j).then((f)=>{if(z!==U.current||E.current!==P)return;if(!H.current)return;let b=Array.isArray(f?.posts)?f.posts:[],c=Boolean(f?.has_more);O(hq(N.current,b),c)}).catch((f)=>{if(z!==U.current)return;console.error("Failed to refresh cached timeline:",f)});return}let y=await h$(10,null,j);T(y)}catch(T){if(z!==U.current)return;throw console.error("Failed to load posts:",T),T}},[j,O]),I=R(async()=>{let A=U.current;try{let z=await h$(10,null,j);if(A!==U.current)return;O(hq(N.current,z?.posts),Boolean(z?.has_more))}catch(z){if(A!==U.current)return;console.error("Failed to refresh timeline:",z)}},[j,O]),x=R(async(A={})=>{let z=U.current,T=N.current;if(!T||T.length===0)return;if(q.current)return;let{preserveScroll:w=!0,preserveMode:y="top",allowRepeat:P=!1}=A,f=(h)=>{if(!w){h();return}if(y==="top")$(h);else _(h)},c=T.slice().sort((h,_0)=>h.id-_0.id)[0]?.id;if(!Number.isFinite(c))return;if(!P&&B.current===c)return;q.current=!0,B.current=c;try{let h=await h$(10,c,j);if(z!==U.current)return;if(E.current+=1,h.posts.length>0)f(()=>{let _0=D2([...h.posts,...N.current||[]]);O(_0,h.has_more)});else O(N.current||[],!1)}catch(h){if(z!==U.current)return;console.error("Failed to load more posts:",h)}finally{if(z===U.current)q.current=!1}},[j,_,$,O]);u(()=>{Q.current=x},[x]);let J=R((A)=>{Y((z)=>{let T=typeof A==="function"?A(z):A;if(N.current=T,Array.isArray(T)){if(E.current+=1,D)I8(j,{posts:T,has_more:K.current})}return T})},[j,D]);return{posts:X,setPosts:J,hasMore:L,setHasMore:V,hasMoreRef:K,loadPosts:W,refreshTimeline:I,loadMore:x,loadMoreRef:Q,loadingMoreRef:q,lastBeforeIdRef:B}}M0();function dA(_){if(!_?.data?.is_bot_message)return!1;let $=_.data.content;return $==="Queued as a follow-up (one-at-a-time)."||$==="⁣"}function pq(_,$){if(!_||!Array.isArray(_))return _;let j=new Set($||[]),G=_.filter((Z)=>!j.has(Z?.id)&&!dA(Z));return G.length===_.length?_:G}function nq(_,$){let j=$||new Set;return Array.isArray(_)?_.map((G)=>({...G})).filter((G)=>!j.has(G.row_id)):[]}function dq(_,$){if(!Array.isArray(_)||!Array.isArray($))return!1;return _.length===$.length&&_.every((j,G)=>j?.row_id===$[G]?.row_id)}function $4(_,$){let j=Array.isArray(_)&&$!=null?_.filter((G)=>G?.row_id!==$):Array.isArray(_)?[..._]:[];return{items:j,remainingQueueCount:j.length}}function iq(_,$){let j=Array.isArray(_)?_:[],G=$?.row_id,Z=$?.content;if(G==null||typeof Z!=="string"||!Z.trim())return j;if(j.some((X)=>X?.row_id===G))return j;return[...j,{row_id:G,content:Z,timestamp:$?.timestamp||null,thread_id:$?.thread_id??null}]}function oq(_){if(!_||typeof _!=="object")return!1;if(_.queued==="followup"||_.queued==="steer")return!0;let $=_.command;return Boolean($&&typeof $==="object"&&($.queued_followup||$.queued_steer))}function iA(_,$=150){return Math.abs(_)<=$}function sq(_){let{timelineRef:$,viewStateRef:j,followupQueueRowIdsRef:G}=_,Z=R(()=>{let V=$.current;if(!V)return;if(iA(V.scrollTop))V.scrollTop=0},[$]),X=R((V)=>{let K=$.current;if(!K||typeof V!=="function"){V?.();return}let{currentHashtag:Q,searchQuery:q,searchOpen:B}=j.current||{},N=!((q||B)&&!Q),U=N?K.scrollHeight-K.scrollTop:K.scrollTop;V(),requestAnimationFrame(()=>{let E=$.current;if(!E)return;if(N){let D=Math.max(E.scrollHeight-U,0);E.scrollTop=D}else{let D=Math.max(E.scrollHeight-E.clientHeight,0),H=Math.min(U,D);E.scrollTop=H}})},[$,j]),Y=R((V)=>{let K=$.current;if(!K||typeof V!=="function"){V?.();return}let Q=K.scrollTop;V(),requestAnimationFrame(()=>{let q=$.current;if(!q)return;let B=Math.max(q.scrollHeight-q.clientHeight,0);q.scrollTop=Math.min(Q,B)})},[$]),L=R((V)=>{return pq(V,G.current)},[G]);return{scrollToBottom:Z,preserveTimelineScroll:X,preserveTimelineScrollTop:Y,filterQueuedPosts:L}}function oA(_){let{rawPosts:$,filterQueuedPosts:j}=_;return j($)}function sA(_){_.scrollToBottomRef.current=_.scrollToBottom}function aq(_){let{timelineRef:$,viewStateRef:j,followupQueueRowIdsRef:G,currentChatJid:Z,currentHashtag:X,searchQuery:Y,followupQueueItems:L}=_,V=g(null),{scrollToBottom:K,preserveTimelineScroll:Q,preserveTimelineScrollTop:q,filterQueuedPosts:B}=sq({timelineRef:$,viewStateRef:j,followupQueueRowIdsRef:G});sA({scrollToBottomRef:V,scrollToBottom:K});let{posts:N,setPosts:U,hasMore:E,setHasMore:D,hasMoreRef:H,loadPosts:k,refreshTimeline:O,loadMore:W,loadMoreRef:I}=rq({preserveTimelineScroll:Q,preserveTimelineScrollTop:q,chatJid:Z,currentHashtag:X,searchQuery:Y}),x=Y0(()=>oA({rawPosts:N,followupQueueItems:L,filterQueuedPosts:B}),[B,L,N]);return{scrollToBottomRef:V,scrollToBottom:K,preserveTimelineScroll:Q,preserveTimelineScrollTop:q,rawPosts:N,setPosts:U,hasMore:E,setHasMore:D,hasMoreRef:H,loadPosts:k,refreshTimeline:O,loadMore:W,loadMoreRef:I,posts:x}}M0();function aA(_){let{currentHashtag:$,searchQuery:j,searchOpen:G}=_;return!$&&!j&&!G}function tq(_){let{currentHashtag:$,searchQuery:j,searchOpen:G,searchScope:Z,currentChatJid:X,currentRootChatJid:Y,posts:L,loadPosts:V,searchPosts:K,setCurrentHashtag:Q,setSearchQuery:q,setSearchOpen:B,setSearchScope:N,setPosts:U,setHasMore:E,preserveTimelineScrollTop:D,setRemovingPostIds:H,deletePost:k,hasMoreRef:O,loadMoreRef:W}=_,I=R(async(P)=>{await Nq({hashtag:P,setCurrentHashtag:Q,setPosts:U,loadPosts:V})},[V,Q,U]),x=R(async()=>{await Bq({setCurrentHashtag:Q,setSearchQuery:q,setPosts:U,loadPosts:V})},[V,Q,U,q]),J=R(async(P,f=Z,b)=>{await Nj({query:P,scope:f,currentChatJid:X,currentRootChatJid:Y,searchPosts:K,setSearchScope:N,setSearchQuery:q,setCurrentHashtag:Q,setPosts:U,setHasMore:E,filters:b})},[X,Y,K,Z,Q,E,U,q,N]),A=R((P)=>{if(N(P),j&&j.trim())Nj({query:j,scope:P,currentChatJid:X,currentRootChatJid:Y,searchPosts:K,setSearchScope:N,setSearchQuery:q,setCurrentHashtag:Q,setPosts:U,setHasMore:E})},[X,Y,K,j,Q,E,U,q,N]),z=R(()=>{B(!0),q(null),Q(null),N("current"),U([])},[Q,U,B,q,N]),T=R(()=>{B(!1),q(null),V()},[V,B,q]),w=Y0(()=>aA({currentHashtag:$,searchQuery:j,searchOpen:G}),[$,G,j]),y=R(async(P)=>{await Fq({post:P,posts:L,currentChatJid:X,deletePost:k,preserveTimelineScrollTop:D,setPosts:U,setRemovingPostIds:H,hasMoreRef:O,loadMoreRef:W})},[X,k,O,W,L,D,U,H]);return{handleHashtagClick:I,handleBackToTimeline:x,handleSearch:J,handleSearchScopeChange:A,enterSearchMode:z,exitSearchMode:T,isMainTimelineView:w,handleDeletePost:y}}M0();function Wj(_){if(!Array.isArray(_?.content))return null;return _.content.find((j)=>j?.type==="status_panel"&&j?.panel)?.panel||null}function eq(_,$){let j=new Map(_),G=Wj($);if(typeof $?.key==="string"&&$.key&&G)j.set($.key,G);else j.delete("autoresearch");return j}function _Q(_,$){let j=typeof $?.key==="string"?$.key:"";if(!j)return _;let G=new Map(_),Z=Wj($);if($?.options?.remove||!Z)G.delete(j);else G.set(j,Z);return G}function $Q(_){if(_?.options?.remove)return!0;return Wj(_)?.state!=="running"}function Oj(_,$){return`${_}:${$}`}function jQ(_,$,j){let G=Oj($,j);if(_.has(G))return _;let Z=new Set(_);return Z.add(G),Z}function GQ(_,$){if(!_.has($))return _;let j=new Set(_);return j.delete($),j}function C8(_,$){if(_.size===0)return _;let j=`${$}:`,G=new Set(Array.from(_).filter((Z)=>!String(Z).startsWith(j)));return G.size===_.size?_:G}async function ZQ(_){let $=typeof _.action?.action_type==="string"?_.action.action_type:"",j=typeof _.action?.key==="string"?_.action.key:"";if($==="autoresearch.stop")return await _.stopAutoresearch(_.currentChatJid,{generateReport:!0}),{refreshAutoresearchStatus:!0};if($==="autoresearch.dismiss")return await _.dismissAutoresearch(_.currentChatJid),{refreshAutoresearchStatus:!0};if($==="autoresearch.copy_tmux"){let G=typeof _.panel?.tmux_command==="string"?_.panel.tmux_command.trim():"";if(!G)throw Error("No tmux command available.");return await _.writeClipboard(G),{refreshAutoresearchStatus:!1,toast:{title:"Copied",detail:"tmux command copied to clipboard.",kind:"success"}}}throw Error(`Unsupported panel action: ${$||j}`)}var XQ="piclaw:ctx:";function j4(_){if(!_||typeof _!=="object")return null;let $=_,j=$.tokens==null?null:Number($.tokens),G=$.contextWindow==null?null:Number($.contextWindow),Z=$.percent==null?null:Number($.percent);return{tokens:Number.isFinite(j)?j:null,contextWindow:Number.isFinite(G)?G:null,percent:Number.isFinite(Z)?Z:null}}function u4(_,$){let j=j4(_),G=j4($);if(!j&&!G)return!0;if(!j||!G)return!1;return j.tokens===G.tokens&&j.contextWindow===G.contextWindow&&j.percent===G.percent}function I2(_,$){if(!_||!$||typeof $!=="object")return;if($.percent==null)return;try{V_(XQ+_,JSON.stringify($))}catch(G){console.debug("[app-status-refresh] Ignoring best-effort context usage persistence failure.",G,{chatJid:_})}}function YQ(_){if(!_)return null;return U6(XQ+_)}async function LQ(_){let{currentChatJid:$,queueRefreshGenRef:j,activeChatJidRef:G,dismissedQueueRowIdsRef:Z,getAgentQueueState:X,setFollowupQueueItems:Y,clearQueuedSteerStateIfStale:L}=_,V=++j.current,K=$;try{let Q=await X(K);if(V!==j.current)return;if(G.current!==K)return;let q=Z.current,B=Array.isArray(Q?.items)?Q.items:[],N=nq(B,q);if(N.length){Y((U)=>dq(U,N)?U:N);return}if(B.length>0)return;q.clear(),L(0),Y((U)=>U.length===0?U:[])}catch{if(V!==j.current)return;if(G.current!==K)return;Y((Q)=>Q.length===0?Q:[])}}async function KQ(_){let{currentChatJid:$,activeChatJidRef:j,getAgentContext:G,setContextUsage:Z}=_,X=$;try{let Y=j4(await G(X));if(j.current!==X)return;if(Y&&Y.percent!=null)Z((L)=>u4(L,Y)?L:Y),I2(X,Y)}catch(Y){if(j.current!==X)return;console.warn("Failed to fetch agent context:",Y)}}async function VQ(_){let{currentChatJid:$,activeChatJidRef:j,getAutoresearchStatus:G,setExtensionStatusPanels:Z,setPendingExtensionPanelActions:X}=_,Y=$;try{let L=await G(Y);if(j.current!==Y)return;Z((V)=>eq(V,L)),X((V)=>C8(V,"autoresearch"))}catch(L){if(j.current!==Y)return;console.warn("Failed to fetch autoresearch status:",L)}}function qQ(_){let{refreshModelState:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:G,refreshQueueState:Z,refreshContextUsage:X,refreshAutoresearchStatus:Y}=_;$(),j(),G(),Z(),X(),Y()}function QQ(_){let{viewStateRef:$,refreshTimeline:j,refreshModelAndQueueState:G}=_;if(s1($.current))j();G()}Y5();var P8=new Map,f8=new Map,tA=250,NQ=1500,BQ=300000;function C2(){if(typeof performance<"u"&&typeof performance.now==="function")return performance.now();return Date.now()}function eA(_,$){return`${_}:${$}`}function _k(_){for(let[$,j]of f8.entries())if(_-j>BQ)f8.delete($)}function $k(_){for(let[$,j]of P8.entries()){if(j.inFlight)continue;if(!Number.isFinite(j.lastCompletedAt)||_-j.lastCompletedAt>BQ)P8.delete($)}}function FQ(_=C2()){_k(_),$k(_)}function UQ(_){let{chatJid:$,nowMs:j=C2()}=_;if(!$)return;f8.set($,j),FQ(j)}function I5(_,$=NQ,j=C2()){if(!_)return!1;let G=f8.get(_);if(!Number.isFinite(G))return!1;return j-Number(G)<=$}async function J$(_){let{kind:$,chatJid:j,run:G,cooldownMs:Z=tA,activationWindowMs:X=NQ,nowMs:Y=C2()}=_;FQ(Y);let L=eA($,j),V=P8.get(L)||{inFlight:null,lastCompletedAt:Number.NaN,lastValue:null};if(P8.set(L,V),V.inFlight)return await V.inFlight;if(Boolean(A6("thread-switch",j)||I5(j,X,Y))&&Number.isFinite(V.lastCompletedAt)&&Y-V.lastCompletedAt<=Z)return V.lastValue;let Q=Promise.resolve().then(G).then((q)=>{return V.lastCompletedAt=C2(),V.lastValue=q??null,V.inFlight=null,q}).catch((q)=>{throw V.lastCompletedAt=C2(),V.inFlight=null,q});return V.inFlight=Q,await Q}function HQ(_){let{serverVersion:$,currentAppAssetVersion:j,staleUiVersionRef:G,staleUiReloadScheduledRef:Z,tabStoreHasUnsaved:X,isAgentRunningRef:Y,pendingRequestRef:L,showIntentToast:V}=_,K=typeof $==="string"&&$.trim()?$.trim():null;if(!K||!j||K===j)return!1;if(G.current===K)return!0;G.current=K;let Q=typeof document<"u"?String(document.querySelector(".compose-box textarea")?.value||"").trim():"";if(!X()&&!Q&&!Y.current&&!L.current&&!Z.current);return V("New UI available","Reload this page to apply the latest interface update.","warning",8000),!0}function Jj(_){let{currentHashtag:$,searchQuery:j,searchOpen:G}=_||{};return!$&&!j&&!G}function EQ(_){let{currentChatJid:$,status:j,setConnectionStatus:G,setAgentStatus:Z,setAgentDraft:X,setAgentPlan:Y,setAgentThought:L,setPendingRequest:V,pendingRequestRef:K,clearAgentRunState:Q,hasConnectedOnceRef:q,viewStateRef:B,refreshTimeline:N,refreshAgentStatus:U,refreshQueueState:E,refreshContextUsage:D}=_;if(G(j),j!=="connected"){Z(null),X({text:"",totalLines:0}),Y(""),L({text:"",totalLines:0}),V(null),K.current=null,Q();return}if(!q.current){if(q.current=!0,Z(null),X({text:"",totalLines:0}),Y(""),L({text:"",totalLines:0}),V(null),K.current=null,Q(),I5($))return;if(Jj(B.current))N();U(),E(),D();return}if(Jj(B.current))N();U(),E(),D()}function DQ(_){let{viewStateRef:$,isAgentActive:j,refreshTimeline:G,refreshQueueState:Z,refreshAgentStatus:X,refreshContextUsage:Y,refreshAutoresearchStatus:L}=_,V=Jj($.current);if(j){if(V)G();Z(),X(),Y(),L();return}if(V)G();X(),Y(),L()}function jk(_){return Math.min(1000,Math.max(100,Math.floor(_/2)))}function zQ(_){let{currentChatJid:$,activeChatJidRef:j,queueRefreshGenRef:G,dismissedQueueRowIdsRef:Z,getAgentQueueState:X,setFollowupQueueItems:Y,clearQueuedSteerStateIfStale:L,getAgentContext:V,setContextUsage:K,getAutoresearchStatus:Q,setExtensionStatusPanels:q,setPendingExtensionPanelActions:B,getAgentStatus:N,wasAgentActiveRef:U,viewStateRef:E,refreshTimeline:D,clearAgentRunState:H,agentStatusRef:k,pendingRequestRef:O,thoughtBufferRef:W,draftBufferRef:I,setAgentStatus:x,setAgentDraft:J,setAgentPlan:A,setAgentThought:z,setPendingRequest:T,setActiveTurn:w,noteAgentActivity:y,clearLastActivityFlag:P,isAgentRunningRef:f,currentTurnIdRef:b,silentRecoveryRef:c,silenceRefreshMs:h,lastAgentEventRef:_0,lastSilenceNoticeRef:v,silenceWarningMs:e,silenceFinalizeMs:z0,isCompactionStatus:j0,serverVersionContext:$0,setConnectionStatus:L0,setStateAccessFailed:B0,setPendingRequestForConnection:t,hasConnectedOnceRef:V0}=_,q0=R(()=>{return J$({kind:"queue-state",chatJid:$,run:async()=>{return await LQ({currentChatJid:$,queueRefreshGenRef:G,activeChatJidRef:j,dismissedQueueRowIdsRef:Z,getAgentQueueState:X,setFollowupQueueItems:Y,clearQueuedSteerStateIfStale:L}),null}})},[j,L,$,Z,X,G,Y]),k0=R(async()=>{await J$({kind:"context-usage",chatJid:$,run:async()=>{return await KQ({currentChatJid:$,activeChatJidRef:j,getAgentContext:V,setContextUsage:K}),null}})},[j,$,V,K]),s=R(async()=>{await J$({kind:"autoresearch-status",chatJid:$,run:async()=>{return await VQ({currentChatJid:$,activeChatJidRef:j,getAutoresearchStatus:Q,setExtensionStatusPanels:q,setPendingExtensionPanelActions:B}),null}})},[j,$,Q,q,B]),X0=R(async()=>{return await J$({kind:"agent-status",chatJid:$,run:async()=>{return await Cq({currentChatJid:$,getAgentStatus:N,activeChatJidRef:j,wasAgentActiveRef:U,viewStateRef:E,refreshTimeline:D,clearAgentRunState:H,agentStatusRef:k,pendingRequestRef:O,thoughtBufferRef:W,draftBufferRef:I,setAgentStatus:x,setAgentDraft:J,setAgentPlan:A,setAgentThought:z,setPendingRequest:T,setActiveTurn:w,noteAgentActivity:y,clearLastActivityFlag:P,onStateAccessResult:B0})}})},[j,k,H,P,$,I,N,y,O,D,w,J,A,x,z,T,B0,W,E,U]),D0=R(async()=>{return await Pq({isAgentRunningRef:f,pendingRequestRef:O,currentTurnIdRef:b,silentRecoveryRef:c,silenceRefreshMs:h,viewStateRef:E,refreshTimeline:D,refreshQueueState:q0,refreshAgentStatus:X0})},[b,f,O,X0,q0,D,h,c,E]);u(()=>{let n0=jk(e),j_=setInterval(()=>{fq({isAgentRunningRef:f,pendingRequestRef:O,lastAgentEventRef:_0,lastSilenceNoticeRef:v,agentStatusRef:k,silenceWarningMs:e,silenceFinalizeMs:z0,silenceRefreshMs:h,isCompactionStatus:j0,setAgentStatus:x,reconcileSilentTurn:D0})},n0);return()=>clearInterval(j_)},[k,f,j0,_0,v,O,D0,x,z0,h,e]);let C0=R((n0)=>{return HQ({serverVersion:n0,...$0})},[$0]),g0=R((n0)=>{if(n0==="connected")B0(!1);EQ({currentChatJid:$,status:n0,setConnectionStatus:L0,setAgentStatus:x,setAgentDraft:J,setAgentPlan:A,setAgentThought:z,setPendingRequest:t,pendingRequestRef:O,clearAgentRunState:H,hasConnectedOnceRef:V0,viewStateRef:E,refreshTimeline:D,refreshAgentStatus:X0,refreshQueueState:q0,refreshContextUsage:k0})},[H,$,V0,O,X0,k0,q0,D,J,A,x,z,L0,t,B0,E]);return{refreshQueueState:q0,refreshContextUsage:k0,refreshAutoresearchStatus:s,refreshAgentStatus:X0,handleUiVersionDrift:C0,handleConnectionStatusChange:g0}}M0();function C5(_){return typeof _==="string"}function P5(_){return typeof _==="string"&&_.trim().length>0}function R8(_){if(!P5(_))return 0;let $=Date.parse(_);return Number.isFinite($)?$:0}function Aj(_){if(!Array.isArray(_))return[];return _.filter(($)=>P5($?.chat_jid)&&P5($?.agent_name))}function WQ(_){if(!Array.isArray(_))return[];return _.filter(($)=>C5($?.chat_jid)&&C5($?.agent_name))}function OQ(_,$,j){if(!Array.isArray($)||$.length===0)return Array.isArray(_)?_:[];let G=new Map;if(Array.isArray(_)){for(let Y of _)if(C5(Y?.chat_jid))G.set(Y.chat_jid,Y)}let Z=$.map((Y)=>{if(!C5(Y?.chat_jid))return Y;let L=G.get(Y.chat_jid);return L?{...Y,...L,is_active:L.is_active??Y.is_active}:Y}),X=C5(j)?j:"";return Z.sort((Y,L)=>{if(Y.chat_jid===X&&L.chat_jid!==X)return-1;if(L.chat_jid===X&&Y.chat_jid!==X)return 1;let V=Boolean(Y.archived_at),K=Boolean(L.archived_at);if(V!==K)return V?1:-1;if(Boolean(Y.is_active)!==Boolean(L.is_active))return Y.is_active?-1:1;let Q=R8(Y.updated_at)||R8(Y.created_at),q=R8(L.updated_at)||R8(L.created_at);if(Q!==q)return q-Q;let B=P5(Y.agent_name)?Y.agent_name.trim():"",N=P5(L.agent_name)?L.agent_name.trim():"",U=B.localeCompare(N,void 0,{sensitivity:"base"});if(U!==0)return U;return String(Y.chat_jid).localeCompare(String(L.chat_jid))}),Z}var Gk={hasModel:!1,model:void 0,hasThinkingLevel:!1,thinkingLevel:null,thinkingLevelLabel:null,hasSupportsThinking:!1,supportsThinking:!1,hasProviderUsage:!1,providerUsage:null};function JQ(_){if(!_||typeof _!=="object")return Gk;let $=_.model??_.current;return{hasModel:$!==void 0,model:$,hasThinkingLevel:_.thinking_level!==void 0,thinkingLevel:_.thinking_level??null,thinkingLevelLabel:_.thinking_level_label??_.thinking_level??null,hasSupportsThinking:_.supports_thinking!==void 0,supportsThinking:Boolean(_.supports_thinking),hasProviderUsage:_.provider_usage!==void 0,providerUsage:_.provider_usage??null}}function AQ(_){let j=(Array.isArray(_)?_:[]).find((G)=>G?.id==="default");return{name:j?.name,avatarUrl:j?.avatar_url}}function kQ(_,$){if(!_||typeof _!=="object")return null;let j=_.agent_id;if(!j)return null;let G=String(j),Z=_.agent_name,X=_.agent_avatar;if(!Z&&X===void 0)return null;let Y=$||{id:G},L=Y.name||null,V=Y.avatar_url??Y.avatarUrl??Y.avatar??null,K=!1,Q=!1;if(Z&&Z!==Y.name)L=Z,K=!0;if(X!==void 0){let q=typeof X==="string"?X.trim():null,B=typeof V==="string"?V.trim():null,N=q||null;if(N!==(B||null))V=N,Q=!0}if(!K&&!Q)return null;return{agentId:G,nameChanged:K,avatarChanged:Q,resolvedName:L,resolvedAvatar:V}}function yQ(_,$){let j=typeof $?.name==="string"&&$.name.trim()?$.name.trim():"You",G=typeof $?.avatar_url==="string"?$.avatar_url.trim():null,Z=typeof $?.avatar_background==="string"&&$.avatar_background.trim()?$.avatar_background.trim():null;if(_.name===j&&_.avatar_url===G&&_.avatar_background===Z)return _;return{name:j,avatar_url:G,avatar_background:Z}}function MQ(_,$){if(!$||typeof $!=="object")return _;let j=$.user_name??$.userName,G=$.user_avatar??$.userAvatar,Z=$.user_avatar_background??$.userAvatarBackground;if(j===void 0&&G===void 0&&Z===void 0)return _;let X=typeof j==="string"&&j.trim()?j.trim():_.name||"You",Y=G===void 0?_.avatar_url:typeof G==="string"&&G.trim()?G.trim():null,L=Z===void 0?_.avatar_background:typeof Z==="string"&&Z.trim()?Z.trim():null;if(_.name===X&&_.avatar_url===Y&&_.avatar_background===L)return _;return{name:X,avatar_url:Y,avatar_background:L}}async function TQ(_){let{getAgents:$,setAgents:j,setUserProfile:G,applyBranding:Z}=_;try{let X=await $();j(nX(X));let Y=X?.user||{};G((V)=>yQ(V,Y));let L=AQ(X?.agents);Z(L.name,L.avatarUrl)}catch(X){console.warn("Failed to load agents:",X)}}function xQ(_){let{payload:$,agentsRef:j,setAgents:G,applyBranding:Z}=_,X=kQ($,$?.agent_id?j.current?.[String($.agent_id)]||{id:String($.agent_id)}:null);if(!X)return;if(G((Y)=>{let V={...Y[X.agentId]||{id:X.agentId}};if(X.nameChanged)V.name=X.resolvedName;if(X.avatarChanged)V.avatar_url=X.resolvedAvatar;return{...Y,[X.agentId]:V}}),X.agentId==="default")Z(X.resolvedName,X.resolvedAvatar,X.avatarChanged?Date.now():null)}function IQ(_){let{payload:$,setUserProfile:j}=_;j((G)=>MQ(G,$))}function wQ(_,$){if(Object.is(_,$))return!0;try{return JSON.stringify(_)===JSON.stringify($)}catch{return!1}}function CQ(_){let{payload:$,setActiveModel:j,setActiveThinkingLevel:G,setSupportsThinking:Z,setActiveModelUsage:X,setAgentModelsPayload:Y,setHasLoadedAgentModels:L}=_;if($&&typeof $==="object")Y?.((K)=>wQ(K,$)?K:$),L?.(!0);let V=JQ($);if(V.hasModel)j((K)=>Object.is(K,V.model)?K:V.model);if(V.hasThinkingLevel){let K=V.thinkingLevelLabel??V.thinkingLevel;G((Q)=>Object.is(Q,K)?Q:K)}if(V.hasSupportsThinking)Z((K)=>K===V.supportsThinking?K:V.supportsThinking);if(V.hasProviderUsage)X((K)=>wQ(K,V.providerUsage)?K:V.providerUsage)}async function PQ(_){let{currentChatJid:$,getActiveChatAgents:j,getChatBranches:G,activeChatJidRef:Z,setActiveChatAgents:X}=_,Y=$;try{let[L,V]=await Promise.all([j().catch(()=>({chats:[]})),G(null,{includeArchived:!0}).catch(()=>({chats:[]}))]);if(Z.current!==Y)return[];let K=Aj(L?.chats),Q=Aj(V?.chats),q=OQ(K,Q,Y);return X(q),q}catch{if(Z.current!==Y)return[];return X([]),[]}}async function fQ(_){let{currentRootChatJid:$,getChatBranches:j,setCurrentChatBranches:G}=_;try{let Z=await j($);G(WQ(Z?.chats))}catch{G([])}}function RQ(_){let{response:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:G,refreshContextUsage:Z,refreshAutoresearchStatus:X,refreshQueueState:Y}=_;if(!$||typeof $!=="object")return;if(j(),G(),Z(),X(),oq($))Y()}function SQ(_){let{readStoredNumber:$,sidebarWidthRef:j,shellElement:G,minWidth:Z=160,maxWidth:X=600,fallbackWidth:Y=280}=_,L=$("sidebarWidth",null),V=Number.isFinite(L)?Math.min(Math.max(Number(L),Z),X):Y;if(j.current=V,G)G.style.setProperty("--sidebar-width",`${V}px`);return V}async function uQ(_){let{currentHashtag:$,searchQuery:j,searchScope:G,currentChatJid:Z,currentRootChatJid:X,loadPosts:Y,searchPosts:L,setPosts:V,setHasMore:K,scrollToBottom:Q,isCancelled:q,scheduleRaf:B=(W)=>{if(typeof requestAnimationFrame==="function"){requestAnimationFrame(W);return}setTimeout(W,0)},scheduleTimeout:N=(W,I)=>{setTimeout(W,I)},onTimelineLoadStart:U,onTimelineDataReady:E,onTimelineFirstPaint:D,onTimelineError:H}=_,k=(W)=>{if(q())return;B(()=>{if(q())return;B(()=>{if(q())return;D?.(W)})})},O=()=>{if(q())return;B(()=>{if(q())return;N(()=>{if(q())return;Q()},0)})};if($){U?.({mode:"hashtag",hashtag:$});try{if(await Y($),q())return;E?.({mode:"hashtag",hashtag:$}),k({mode:"hashtag"})}catch(W){if(q())return;throw H?.(W,{mode:"hashtag",hashtag:$}),W}return}if(j){U?.({mode:"search",searchQuery:j,searchScope:G});try{let W=await L(j,50,0,Z,G,X);if(q())return;V(Array.isArray(W?.results)?W.results:[]),K(!1),E?.({mode:"search",resultCount:Array.isArray(W?.results)?W.results.length:0}),k({mode:"search"})}catch(W){if(q())return;H?.(W,{mode:"search",searchQuery:j,searchScope:G}),console.error("Failed to search:",W),V([]),K(!1)}return}U?.({mode:"timeline"});try{if(await Y(),q())return;E?.({mode:"timeline"}),k({mode:"timeline"}),O()}catch(W){if(q())return;H?.(W,{mode:"timeline"}),console.error("Failed to load timeline:",W)}}Y5();I_();function Zk(_){let{refreshModelAndQueueState:$,refreshModelState:j,refreshActiveChatAgents:G,refreshCurrentChatBranches:Z,refreshQueueState:X,runImmediately:Y=!0,intervalMs:L=60000,scheduleInterval:V=(q,B)=>setInterval(q,B),clearScheduledInterval:K=(q)=>clearInterval(q)}=_;if(Y)$();let Q=V(()=>{j(),G(),Z(),X()},L);return()=>{K(Q)}}function Xk(_){let{refreshModelState:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:G,refreshQueueState:Z,refreshContextUsage:X,refreshAutoresearchStatus:Y,prewarmLimit:L=5}=_;$(),j({prewarmRecent:!0,prewarmLimit:L}),G(),Z(),X(),Y()}function Yk(_){let $=cq(_.chats,_.currentChatJid,_.prewarmLimit??5);if($.length===0)return;lq({chatJids:$,fetchTimeline:_.fetchTimeline??((j)=>h$(10,null,j))})}function gQ(_){let{getAgents:$,setAgents:j,setUserProfile:G,applyBranding:Z,readStoredNumber:X,sidebarWidthRef:Y,appShellRef:L,currentChatJid:V,currentRootChatJid:K,getAgentModels:Q,getAgentContext:q,getActiveChatAgents:B,getChatBranches:N,activeChatJidRef:U,setActiveChatAgents:E,setCurrentChatBranches:D,setActiveModel:H,setActiveThinkingLevel:k,setSupportsThinking:O,setActiveModelUsage:W,setAgentModelsPayload:I,setHasLoadedAgentModels:x,agentsRef:J,refreshQueueState:A,refreshContextUsage:z,refreshAutoresearchStatus:T,setContextUsage:w,setExtensionWorkingState:y}=_,P=R(async()=>{await TQ({getAgents:$,setAgents:j,setUserProfile:G,applyBranding:Z})},[Z,$,j,G]);u(()=>{P(),SQ({readStoredNumber:X,sidebarWidthRef:Y,shellElement:L.current,maxWidth:U5(Number.POSITIVE_INFINITY)})},[L,P,X,Y]);let f=R(($0)=>{CQ({payload:$0,setActiveModel:H,setActiveThinkingLevel:k,setSupportsThinking:O,setActiveModelUsage:W,setAgentModelsPayload:I,setHasLoadedAgentModels:x})},[H,W,k,I,x,O]),b=R(()=>A6("thread-switch",V),[V]),c=R(()=>{return J$({kind:"model-state",chatJid:V,run:async()=>{let $0=b();if($0)X1($0,"runtime-hydration-start",{phase:"model-state"});let L0=V;try{let[t,V0]=await Promise.all([(async()=>{let k0=$0||b();if(k0)X1(k0,"model-request-start",{chatJid:L0});let s=await Q(L0);if(k0)X1(k0,"model-request-ready",{chatJid:L0,hasCurrent:Boolean(s?.current),modelCount:Array.isArray(s?.models)?s.models.length:0});return s})(),q(L0).catch(()=>null)]);if(U.current&&U.current!==L0)return null;f(t);let q0=j4(V0);if(q0&&q0.percent!=null)w((k0)=>u4(k0,q0)?k0:q0),I2(L0,q0)}catch{if(U.current&&U.current!==L0)return null;f(null)}let B0=$0||b();if(B0)X1(B0,"runtime-hydration-ready",{chatJid:V}),k6(B0,["runtime-hydration-ready","timeline-first-paint"],"settled",{chatJid:V});return null}})},[U,f,V,q,Q,b,w]);u(()=>{UQ({chatJid:V}),H(null),k(null),O(!1),W(null),x(!1),I(null),y({message:null,indicator:null,visible:!0});let $0=YQ(V);if($0)w($0);else w(null);c()},[V,c,H,W,k,I,w,y,x,O]);let h=R(($0)=>{xQ({payload:$0,agentsRef:J,setAgents:j,applyBranding:Z})},[J,Z,j]),_0=R(($0)=>{IQ({payload:$0,setUserProfile:G})},[G]),v=R(($0)=>{let L0=Boolean($0?.prewarmRecent),B0=Number.isFinite($0?.prewarmLimit)?Number($0?.prewarmLimit):5;return J$({kind:"active-chat-agents",chatJid:V,run:async()=>{let t=b(),V0=await PQ({currentChatJid:V,getActiveChatAgents:async()=>{if(t)X1(t,"active-chat-list-request-start",{chatJid:V});let q0=await B(V);if(t)X1(t,"active-chat-list-request-ready",{rowCount:Array.isArray(q0?.chats)?q0.chats.length:0});return q0},getChatBranches:async(q0,k0)=>{if(t)X1(t,"branch-list-request-start",{rootChatJid:q0});let s=await N(q0,k0);if(t)X1(t,"branch-list-request-ready",{rootChatJid:q0,rowCount:Array.isArray(s?.chats)?s.chats.length:0});return s},activeChatJidRef:U,setActiveChatAgents:E});if(L0)Yk({chats:V0,currentChatJid:V,prewarmLimit:B0});return null}})},[U,V,B,N,b,E]),e=R(()=>{return J$({kind:"current-chat-branches",chatJid:V,run:async()=>{let $0=b();return await fQ({currentRootChatJid:K,getChatBranches:async(L0,B0)=>{if($0)X1($0,"root-branch-request-start",{rootChatJid:L0});let t=await N(L0,B0);if($0)X1($0,"root-branch-request-ready",{rootChatJid:L0,rowCount:Array.isArray(t?.chats)?t.chats.length:0});return t},setCurrentChatBranches:D}),null}})},[V,K,N,b,D]),z0=R(()=>{qQ({refreshModelState:c,refreshActiveChatAgents:v,refreshCurrentChatBranches:e,refreshQueueState:A,refreshContextUsage:z,refreshAutoresearchStatus:T})},[v,T,z,e,c,A]),j0=R(()=>{Xk({refreshModelState:c,refreshActiveChatAgents:v,refreshCurrentChatBranches:e,refreshQueueState:A,refreshContextUsage:z,refreshAutoresearchStatus:T,prewarmLimit:5})},[v,T,z,e,c,A]);return u(()=>Zk({refreshModelAndQueueState:z0,refreshModelState:c,refreshActiveChatAgents:v,refreshCurrentChatBranches:e,refreshQueueState:A,runImmediately:!1}),[v,e,z0,c,A]),u(()=>{let $0=setInterval(()=>{c()},5000);return()=>clearInterval($0)},[c]),{updateAgentProfile:h,updateUserProfile:_0,applyModelState:f,refreshModelState:c,refreshActiveChatAgents:v,refreshCurrentChatBranches:e,refreshModelAndQueueState:z0,refreshPostPaintThreadState:j0}}M0();function Lk(_,$){let j=O1(_);return Boolean(_&&j===$)}function P2(_,$,j){if(!Lk(_,$))return _;return{..._,runtimeState:{..._?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:{},...j}}}function bQ(_,$){return{..._,openedAt:$}}function vQ(_){let $=O1(_);return{nextWidget:null,dismissedSessionKey:_?.source==="live"&&$?$:null}}function mQ(_,$,j){let G=pL({...$,...$&&$.status?{}:{status:j.fallbackStatus||"streaming"}});if(!G)return _;let Z=O1(G);if(Z&&j.dismissedSessionKeys?.has(Z))return _;let X=O1(_),Y=Boolean(Z&&X&&Z===X),L={...Y&&_?.artifact?_.artifact:{},...G.artifact||{}};return{...Y&&_?_:{},...G,artifact:L,source:"live",originChatJid:G.originChatJid||j.currentChatJid,openedAt:Y&&_?.openedAt?_.openedAt:j.updatedAt,liveUpdatedAt:j.updatedAt}}function cQ(_,$){if(!_||_?.source!=="live")return _||null;let j=O1($),G=O1(_);if(j&&G&&j!==G)return _;return null}function lQ(_,$,j){return P2(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,lastSubmitAt:j.submittedAt,lastHostUpdate:{type:"submit_pending",submittedAt:j.submittedAt,preview:j.submissionText||null}})}function kj(_,$,j){if(j.errorMessage)return P2(_,$,{lastHostUpdate:{type:"submit_failed",submittedAt:j.submittedAt,preview:j.submissionText,error:j.errorMessage}});return P2(_,$,{lastHostUpdate:{type:j.queued==="followup"?"submit_queued":"submit_sent",submittedAt:j.submittedAt,preview:j.submissionText,queued:j.queued||null}})}function hQ(_,$,j){return P2(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,...j.kind==="widget.ready"?{readyAt:j.eventAt,lastHostUpdate:{type:"ready_ack",at:j.eventAt}}:{},...j.kind==="widget.request_refresh"?{lastRefreshRequestAt:j.eventAt,refreshCount:j.nextRefreshCount,lastHostUpdate:{type:j.shouldBuildDashboard?"refresh_building":"refresh_ack",at:j.eventAt,count:j.nextRefreshCount,echo:j.payload||null}}:{}})}function rQ(_,$,j){return P2(_,$,{dashboard:j.dashboard,lastHostUpdate:{type:"refresh_dashboard",at:j.at,count:j.count,echo:j.echo||null}})}function pQ(_,$,j){return P2(_,$,{lastHostUpdate:{type:"refresh_failed",at:j.at,count:j.count,error:j.errorMessage}})}Y5();function Kk(_){let{setExtensionStatusPanels:$,setPendingExtensionPanelActions:j,setExtensionWorkingState:G}=_;$(new Map),j(new Set),G({message:null,indicator:null,visible:!0})}function nQ(_){let{refreshAgentStatus:$,refreshPostPaintThreadState:j}=_;j(),$()}function dQ(_){let{currentChatJid:$,currentRootChatJid:j,currentHashtag:G,searchQuery:Z,searchScope:X,loadPosts:Y,searchPosts:L,setPosts:V,setHasMore:K,scrollToBottom:Q,setExtensionStatusPanels:q,setPendingExtensionPanelActions:B,setExtensionWorkingState:N,paneStateOwnerChatJidRef:U,chatPaneStateByChatRef:E,snapshotCurrentChatPaneState:D,restoreChatPaneState:H,dismissedQueueRowIdsRef:k,refreshAgentStatus:O,viewStateRef:W,refreshTimeline:I,refreshModelAndQueueState:x,refreshPostPaintThreadState:J,setFloatingWidget:A,dismissedLiveWidgetKeysRef:z}=_;u(()=>{Kk({setExtensionStatusPanels:q,setPendingExtensionPanelActions:B,setExtensionWorkingState:N})},[$,q,B,N]),u(()=>{let y=!1,P=XX("thread-switch",$,{currentRootChatJid:j,currentHashtag:G||null,searchQuery:Z||null,searchScope:X});return X1(P,"route-effect-start",{currentChatJid:$,currentRootChatJid:j}),uQ({currentHashtag:G,searchQuery:Z,searchScope:X,currentChatJid:$,currentRootChatJid:j,loadPosts:Y,searchPosts:L,setPosts:V,setHasMore:K,scrollToBottom:Q,isCancelled:()=>y,onTimelineLoadStart:(f)=>{X1(P,"timeline-load-start",f||null)},onTimelineDataReady:(f)=>{X1(P,"timeline-data-ready",f||null)},onTimelineFirstPaint:(f)=>{X1(P,"timeline-first-paint",f||null),k6(P,["runtime-hydration-ready","timeline-first-paint"],"settled",f||null),nQ({refreshAgentStatus:O,refreshPostPaintThreadState:J})},onTimelineError:(f,b)=>{YX(P,f,"timeline-load-failed",b||null),nQ({refreshAgentStatus:O,refreshPostPaintThreadState:J})}}),()=>{y=!0,LX(P,"route-effect-cancelled",{currentChatJid:$})}},[$,G,Z,X,j,Y,Q,L,K,V,O,J]),u(()=>{let y=U.current||$;E.current.set(y,D())},[E,$,U,D]),u(()=>{let y=U.current||$;if(y===$)return;E.current.set(y,D()),U.current=$,k.current.clear(),H(E.current.get($)||null)},[E,$,k,U,H,D]);let T=R(()=>{QQ({viewStateRef:W,refreshTimeline:I,refreshModelAndQueueState:x})},[x,I,W]),w=R((y,P="streaming")=>{let f=new Date().toISOString();A((b)=>mQ(b,y,{fallbackStatus:P,currentChatJid:$,dismissedSessionKeys:z.current,updatedAt:f}))},[$,z,A]);return{refreshCurrentView:T,applyLiveGeneratedWidgetUpdate:w}}M0();M0();I_();function Vk({sse:_,onWake:$},j={}){let G=j.window??(typeof window<"u"?window:null),Z=j.document??(typeof document<"u"?document:null);if(!G||!Z||!_)return()=>{};let X=()=>{if(typeof _.forceReconnect==="function"){_.forceReconnect();return}_.reconnectIfNeeded()},Y=typeof j.useFocusReconnect==="boolean"?j.useFocusReconnect:!E5(),L=Z.visibilityState&&Z.visibilityState!=="visible",V=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return L=!0,!0;return!1},K=()=>{if(V())return;if(L)L=!1,X(),$?.()},Q=()=>{if(V())return;if(L){K();return}if(Y)_.reconnectIfNeeded()},q=()=>{K()},B=()=>{K()};return G.addEventListener("focus",Q),G.addEventListener("pageshow",q),Z.addEventListener("visibilitychange",B),()=>{G.removeEventListener("focus",Q),G.removeEventListener("pageshow",q),Z.removeEventListener("visibilitychange",B)}}function iQ({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:G,chatJid:Z}){let X=g(_);X.current=_;let Y=g($);Y.current=$;let L=g(j);L.current=j;let V=g(G);V.current=G,u(()=>{let K=new I6((q,B)=>X.current(q,B),(q)=>Y.current(q),{chatJid:Z});K.connect();let Q=Vk({sse:K,onWake:()=>V.current?.()});return()=>{Q(),K.disconnect()}},[Z])}_5();b6();function g4(_,$){return Boolean(_)&&Boolean($)&&_!==$}function f2(_,$){return Boolean(_)&&!Boolean($)}function oQ(_,$){return _||$||null}function sQ(_){switch(_){case"generated_widget_open":return{kind:"update",fallbackStatus:"loading",shouldAdoptTurn:!0};case"generated_widget_delta":return{kind:"update",fallbackStatus:"streaming",shouldAdoptTurn:!0};case"generated_widget_final":return{kind:"update",fallbackStatus:"final",shouldAdoptTurn:!0};case"generated_widget_error":return{kind:"update",fallbackStatus:"error",shouldAdoptTurn:!1};case"generated_widget_close":return{kind:"close",fallbackStatus:null,shouldAdoptTurn:!1};default:return{kind:null,fallbackStatus:null,shouldAdoptTurn:!1}}}function R2(_,$){let j=$?.row_id??$?.id;if(j==null||typeof j!=="string"&&typeof j!=="number")return null;let G=$4(_,j);return{rowId:j,items:G.items,remainingQueueCount:G.remainingQueueCount}}function yj(_){if(_==="steer")return{title:"Failed to steer message",detail:"The queued message could not be sent as steering."};return{title:"Failed to remove message",detail:"The queued message could not be removed."}}function qk(_,$){return typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():$}function aQ(_,$,j){return{isStatusPanelWidgetEvent:_==="extension_ui_widget"&&$?.options?.surface==="status-panel",eventChatJid:qk($,j),panelKey:typeof $?.key==="string"?$.key:""}}function Qk(_,$){if(_!=="extension_ui_working_indicator")return;if(!Array.isArray($?.frames))return{mode:"default",frames:[],intervalMs:null};let j=$.frames.filter((X)=>typeof X==="string"),G=$.interval_ms??$.intervalMs,Z=typeof G==="number"&&Number.isFinite(G)&&G>0?G:null;if(j.length===0)return{mode:"hidden",frames:[],intervalMs:Z};return{mode:"custom",frames:j,intervalMs:Z}}function tQ(_,$,j){if($==="extension_ui_working_visible"){let Z=j?.visible!==!1;if(Z===_.visible)return;return{..._,visible:Z}}if($==="extension_ui_working")return{message:typeof j?.message==="string"&&j.message.trim()?j.message.trim():null,indicator:_.indicator,visible:_.visible};let G=Qk($,j);if(G===void 0)return;return{message:_.message,indicator:G,visible:_.visible}}function eQ(_,$){if(_!=="extension_ui_status")return null;if($?.key!=="context_usage")return null;let j=typeof $?.text==="string"?$.text.trim():"";if(!j)return null;try{let G=JSON.parse(j);if(!G||typeof G!=="object")return null;let Z=G,X=Z.tokens==null?null:Number(Z.tokens),Y=Z.contextWindow==null?null:Number(Z.contextWindow),L=Z.percent==null?null:Number(Z.percent);return{tokens:Number.isFinite(X)?X:null,contextWindow:Number.isFinite(Y)?Y:null,percent:Number.isFinite(L)?L:null,estimated:Z.estimated===!0,source:typeof Z.source==="string"?Z.source:null,phase:typeof Z.phase==="string"?Z.phase:null}}catch{return null}}function _N(_,$){if(_==="extension_ui_notify"&&typeof $?.message==="string")return{title:$.message,detail:null,kind:typeof $?.type==="string"&&$.type.trim()?$.type:"info"};if(_==="extension_ui_error"){let j=$?.error;return{title:"Extension UI error",detail:typeof j==="string"?j:j&&typeof j==="object"&&typeof j.error==="string"?j.error:j?String(j):"Unknown extension error",kind:"error",durationMs:5000}}return null}var Nk=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_working_indicator","extension_ui_working_visible","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function $N(_){return Nk.has(String(_||"").trim())}function Bk(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function S8(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let G={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:G})),j.dispatchEvent(new CustomEvent(Bk(_),{detail:G})),!0}function jN(_,$,j){let G=$?.turn_id,Z=$?.chat_jid,X=typeof Z==="string"&&Z.trim()?Z.trim():null,Y=_==="connected"||_==="workspace_update";return{turnId:G,eventChatJid:X,isGlobalUiEvent:Y,isCurrentChatEvent:X?X===j:Y}}function GN(_){return _==="agent_draft_delta"||_==="agent_thought_delta"||_==="agent_draft"||_==="agent_thought"}function ZN(_,$,j){let{currentChatJid:G,updateAgentProfile:Z,updateUserProfile:X,currentTurnIdRef:Y,activeChatJidRef:L,pendingRequestRef:V,draftBufferRef:K,thoughtBufferRef:Q,previewResyncPendingRef:q,previewResyncGenerationRef:B,steerQueuedTurnIdRef:N,thoughtExpandedRef:U,draftExpandedRef:E,draftThrottleRef:D,thoughtThrottleRef:H,viewStateRef:k,followupQueueItemsRef:O,dismissedQueueRowIdsRef:W,scrollToBottomRef:I,hasMoreRef:x,loadMoreRef:J,lastAgentResponseRef:A,wasAgentActiveRef:z,setActiveTurn:T,applyLiveGeneratedWidgetUpdate:w,setFloatingWidget:y,clearLastActivityFlag:P,handleUiVersionDrift:f,setAgentStatus:b,setAgentDraft:c,setAgentPlan:h,setAgentThought:_0,setPendingRequest:v,clearAgentRunState:e,getAgentStatus:z0,noteAgentActivity:j0,showLastActivity:$0,refreshTimeline:L0,refreshModelAndQueueState:B0,refreshActiveChatAgents:t,refreshCurrentChatBranches:V0,notifyForFinalResponse:q0,setContextUsage:k0,refreshContextUsage:s,refreshQueueState:X0,setFollowupQueueItems:D0,clearQueuedSteerStateIfStale:C0,setSteerQueuedTurnId:g0,applyModelState:n0,getAgentContext:j_,setExtensionStatusPanels:m0,setPendingExtensionPanelActions:d0,setExtensionWorkingState:S0,refreshActiveEditorFromWorkspace:o0,showIntentToast:v0,removeStalledPost:a0,setPosts:h0,preserveTimelineScrollTop:N_,openEditor:t0}=j,{turnId:b0,isCurrentChatEvent:A0}=jN(_,$,G);if(A0)Z($),X($);if(_==="ui_theme"){F2($);return}if(_==="ui_meters"){a7($);return}if(_==="ui_open_tab"){let H0=typeof $?.path==="string"?$.path.trim():"",f0=typeof $?.label==="string"?$.label.trim():void 0;if(H0==="piclaw://settings"){let T0=typeof $?.section==="string"?$.section.trim():"";window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:T0?{section:T0}:void 0}));return}if(H0&&typeof t0==="function")t0(H0,f0?{label:f0}:void 0);return}let L_=sQ(_);if(L_.kind==="update"){if(!A0)return;if(L_.shouldAdoptTurn&&f2(b0,Y.current))T(b0);w($,L_.fallbackStatus||"streaming");return}if(L_.kind==="close"){if(!A0)return;y((H0)=>cQ(H0,$));return}if(_?.startsWith("agent_")&&!GN(_))P();if(_==="connected"){if(f($?.app_asset_version))return;if($?.ui_theme){let T0=$.ui_theme.theme||"default",i0=$.ui_theme.tint||null;F2({theme:T0,tint:i0})}if($?.ui_meters)a7($.ui_meters);let H0=B.current+1;if(B.current=H0,q.current=!0,K.current="",Q.current="",b(null),c({text:"",totalLines:0}),h(""),_0({text:"",totalLines:0}),S0({message:null,indicator:null,visible:!0}),v(null),V.current=null,e(),I5(G)){if(B.current===H0)q.current=!1;return}let f0=G;if(z0(f0).then((T0)=>{if(L.current!==f0)return;if(!T0||T0.status!=="active"||!T0.data)return;let i0=T0.data,A_=w8(i0);if(A_)T(A_);b(i0),j0({clearSilence:!0,atMs:p$(i0)??Date.now()}),$0(i0);let K_=x2(T0.thought);if(K_)Q.current=K_.text,_0(K_);let E_=x2(T0.draft);if(E_)K.current=E_.text,c(E_)}).catch((T0)=>{console.warn("Failed to fetch agent status:",T0)}).finally(()=>{if(B.current===H0)q.current=!1}),s1(k.current))L0();B0();return}if(_==="agent_status"){if(!A0){if($?.type==="done"||$?.type==="error")t(),V0();return}let H0=j4($.context_usage);if(H0&&H0.percent!=null)k0((f0)=>u4(f0,H0)?f0:H0),I2(G,H0);if($.type==="context_usage")return;if($.type==="done"||$.type==="error"){if(g4(b0,Y.current))return;if($.type==="done"){if(q0(b0||Y.current),s1(k.current))L0()}if(s(),z.current=!1,e(),W.current.clear(),t(),B0(),c({text:"",totalLines:0}),h(""),_0({text:"",totalLines:0}),S0({message:null,indicator:null,visible:!0}),v(null),$.type==="error")b({type:"error",title:$.title||"Agent error"}),setTimeout(()=>b(null),8000);else b(null)}else{if(b0)T(b0);if(j0({running:!0,clearSilence:!0,atMs:p$($)??Date.now()}),$.type==="thinking")K.current="",Q.current="",c({text:"",totalLines:0}),h(""),_0({text:"",totalLines:0});b($)}return}if(_==="agent_steer_queued"){if(!A0)return;if(g4(b0,Y.current))return;let H0=oQ(b0,Y.current);if(!H0)return;N.current=H0,g0(H0);return}if(_==="agent_followup_queued"){if(!A0)return;D0((H0)=>iq(H0,$)),X0();return}if(_==="agent_followup_consumed"){if(!A0)return;let H0=R2(O.current,$);if(H0)C0(H0.remainingQueueCount),D0((f0)=>$4(f0,H0.rowId).items);if(X0(),s1(k.current))L0();return}if(_==="agent_followup_removed"){if(!A0)return;let H0=R2(O.current,$);if(H0)W.current.add(H0.rowId),C0(H0.remainingQueueCount),D0((f0)=>$4(f0,H0.rowId).items);X0();return}if(_==="agent_draft_delta"){if(!A0)return;if(q.current)return;if(g4(b0,Y.current))return;if(f2(b0,Y.current))T(b0);j0({running:!0,clearSilence:!0}),K.current=yq(K.current,$);let H0=Date.now();if(!D.current||H0-D.current>=100){D.current=H0;let f0=K.current;if(E.current)c((T0)=>Hj(f0,T0));else c(T8(f0,null))}return}if(_==="agent_draft"){if(!A0)return;if(q.current)return;if(g4(b0,Y.current))return;if(f2(b0,Y.current))T(b0);j0({running:!0,clearSilence:!0});let H0=$.text||"",f0=$.mode||($.kind==="plan"?"replace":"append");if($.kind==="plan")h((T0)=>kq(T0,H0,f0));else if(!E.current)K.current=H0,c(T8(H0,$.total_lines));return}if(_==="agent_thought_delta"){if(!A0)return;if(q.current)return;if(g4(b0,Y.current))return;if(f2(b0,Y.current))T(b0);j0({running:!0,clearSilence:!0}),Q.current=Mq(Q.current,$);let H0=Date.now();if(U.current&&(!H.current||H0-H.current>=100)){H.current=H0;let f0=Q.current;_0((T0)=>Hj(f0,T0))}return}if(_==="agent_thought"){if(!A0)return;if(q.current)return;if(g4(b0,Y.current))return;if(f2(b0,Y.current))T(b0);j0({running:!0,clearSilence:!0});let H0=$.text||"";if(!U.current)Q.current=H0,_0(T8(H0,$.total_lines));return}if(_==="model_changed"){if(!A0)return;n0($);let H0=G;j_(H0).then((f0)=>{if(L.current!==H0)return;let T0=j4(f0);if(T0&&T0.percent!=null)k0((i0)=>u4(i0,T0)?i0:T0),I2(H0,T0)}).catch(()=>{if(L.current!==H0)return});return}let e0=aQ(_,$,G);if(e0.isStatusPanelWidgetEvent){if(e0.eventChatJid!==G)return;if(!e0.panelKey)return;if(m0((H0)=>_Q(H0,$)),$Q($))d0((H0)=>C8(H0,e0.panelKey));S8(_,$);return}if(_==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:$}));o0($?.updates);return}if($N(_)){if(_==="extension_ui_title"){t(),V0(),S8(_,$);return}if(!A0)return;let H0=eQ(_,$);if(H0&&H0.percent!=null)k0((T0)=>u4(T0,H0)?T0:H0);S0((T0)=>{return tQ(T0,_,$)??T0}),S8(_,$);let f0=_N(_,$);if(f0)v0(f0.title,f0.detail,f0.kind,f0.durationMs);return}let O_=s1(k.current);if(_==="agent_response"){if(!A0)return;S0({message:null,indicator:null,visible:!0}),a0(),A.current={post:$,turnId:Y.current}}if(wq(_,A0,O_))h0((H0)=>Tq(H0,$)),I.current?.();if(_==="interaction_updated"){if(!Ej(A0,O_))return;h0((H0)=>xq(H0,$))}if(_==="interaction_deleted"){if(!Ej(A0,O_))return;let H0=$?.ids||[];if(H0.length){if(N_(()=>{h0((f0)=>Iq(f0,H0))}),x.current)J.current?.({preserveScroll:!0,preserveMode:"top"})}}}function Fk(_){return _?15000:60000}function XN(_){let{currentChatJid:$,posts:j,scrollToMessage:G,handleConnectionStatusChange:Z,loadPosts:X,refreshCurrentView:Y,updateAgentProfile:L,updateUserProfile:V,currentTurnIdRef:K,activeChatJidRef:Q,pendingRequestRef:q,draftBufferRef:B,thoughtBufferRef:N,previewResyncPendingRef:U,previewResyncGenerationRef:E,steerQueuedTurnIdRef:D,thoughtExpandedRef:H,draftExpandedRef:k,draftThrottleRef:O,thoughtThrottleRef:W,viewStateRef:I,followupQueueItemsRef:x,dismissedQueueRowIdsRef:J,scrollToBottomRef:A,hasMoreRef:z,loadMoreRef:T,lastAgentResponseRef:w,wasAgentActiveRef:y,setActiveTurn:P,applyLiveGeneratedWidgetUpdate:f,setFloatingWidget:b,clearLastActivityFlag:c,handleUiVersionDrift:h,setAgentStatus:_0,setAgentDraft:v,setAgentPlan:e,setAgentThought:z0,setPendingRequest:j0,clearAgentRunState:$0,getAgentStatus:L0,noteAgentActivity:B0,showLastActivity:t,refreshTimeline:V0,refreshModelAndQueueState:q0,refreshActiveChatAgents:k0,refreshCurrentChatBranches:s,notifyForFinalResponse:X0,setContextUsage:D0,refreshContextUsage:C0,refreshQueueState:g0,setFollowupQueueItems:n0,clearQueuedSteerStateIfStale:j_,setSteerQueuedTurnId:m0,applyModelState:d0,getAgentContext:S0,setExtensionStatusPanels:o0,setPendingExtensionPanelActions:v0,setExtensionWorkingState:a0,refreshActiveEditorFromWorkspace:h0,showIntentToast:N_,removeStalledPost:t0,setPosts:b0,preserveTimelineScrollTop:A0,openEditor:L_,finalizeStalledResponse:e0,connectionStatus:O_,agentStatus:H0,refreshAgentStatus:f0,refreshAutoresearchStatus:T0}=_,i0=R((K_,E_)=>{ZN(K_,E_,{currentChatJid:$,updateAgentProfile:L,updateUserProfile:V,currentTurnIdRef:K,activeChatJidRef:Q,pendingRequestRef:q,draftBufferRef:B,thoughtBufferRef:N,previewResyncPendingRef:U,previewResyncGenerationRef:E,steerQueuedTurnIdRef:D,thoughtExpandedRef:H,draftExpandedRef:k,draftThrottleRef:O,thoughtThrottleRef:W,viewStateRef:I,followupQueueItemsRef:x,dismissedQueueRowIdsRef:J,scrollToBottomRef:A,hasMoreRef:z,loadMoreRef:T,lastAgentResponseRef:w,wasAgentActiveRef:y,setActiveTurn:P,applyLiveGeneratedWidgetUpdate:f,setFloatingWidget:b,clearLastActivityFlag:c,handleUiVersionDrift:h,setAgentStatus:_0,setAgentDraft:v,setAgentPlan:e,setAgentThought:z0,setPendingRequest:j0,clearAgentRunState:$0,getAgentStatus:L0,noteAgentActivity:B0,showLastActivity:t,refreshTimeline:V0,refreshModelAndQueueState:q0,refreshActiveChatAgents:k0,refreshCurrentChatBranches:s,notifyForFinalResponse:X0,setContextUsage:D0,refreshContextUsage:C0,refreshQueueState:g0,setFollowupQueueItems:n0,clearQueuedSteerStateIfStale:j_,setSteerQueuedTurnId:m0,applyModelState:d0,getAgentContext:S0,setExtensionStatusPanels:o0,setPendingExtensionPanelActions:v0,setExtensionWorkingState:a0,refreshActiveEditorFromWorkspace:h0,showIntentToast:N_,removeStalledPost:t0,setPosts:b0,preserveTimelineScrollTop:A0,openEditor:L_})},[Q,f,d0,$0,c,j_,$,K,J,B,k,O,x,S0,L0,h,z,w,T,B0,X0,q,A0,E,U,k0,h0,C0,s,q0,g0,V0,t0,A,P,v,e,_0,z0,D0,o0,a0,b,n0,v0,j0,b0,m0,N_,t,D,N,H,W,L,V,I,y,L_]);u(()=>{if(typeof window>"u")return;let K_=window.__PICLAW_TEST_API||{};return K_.emit=i0,K_.reset=()=>{t0(),$0(),_0(null),v({text:"",totalLines:0}),e(""),z0({text:"",totalLines:0}),a0({message:null,indicator:null,visible:!0}),j0(null)},K_.finalize=()=>e0(),window.__PICLAW_TEST_API=K_,()=>{if(window.__PICLAW_TEST_API===K_)window.__PICLAW_TEST_API=void 0}},[$0,e0,i0,t0,v,e,_0,z0,a0,j0]),iQ({handleSseEvent:i0,handleConnectionStatusChange:Z,loadPosts:X,onWake:Y,chatJid:$}),u(()=>{if(!j||j.length===0)return;let K_=location.hash;if(!K_||!K_.startsWith("#msg-"))return;let E_=K_.slice(5);G(E_),history.replaceState(null,"",location.pathname+location.search)},[j,G]);let A_=H0!==null;u(()=>{if(O_!=="connected")return;let K_=Fk(A_),E_=setInterval(()=>{DQ({viewStateRef:I,isAgentActive:A_,refreshTimeline:V0,refreshQueueState:g0,refreshAgentStatus:f0,refreshContextUsage:C0,refreshAutoresearchStatus:T0})},K_);return()=>clearInterval(E_)},[O_,A_,f0,T0,C0,g0,V0,I]),u(()=>{return J8(()=>{f0(),C0(),g0(),T0()})},[f0,T0,C0,g0])}function Uk(_){return{currentChatJid:_.currentChatJid,activeChatJidRef:_.activeChatJidRef,queueRefreshGenRef:_.queueRefreshGenRef,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,getAgentQueueState:_.getAgentQueueState,setFollowupQueueItems:_.setFollowupQueueItems,clearQueuedSteerStateIfStale:_.clearQueuedSteerStateIfStale,getAgentContext:_.getAgentContext,setContextUsage:_.setContextUsage,getAutoresearchStatus:_.getAutoresearchStatus,setExtensionStatusPanels:_.setExtensionStatusPanels,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,getAgentStatus:_.getAgentStatus,wasAgentActiveRef:_.wasAgentActiveRef,viewStateRef:_.viewStateRef,refreshTimeline:_.refreshTimeline,clearAgentRunState:_.clearAgentRunState,agentStatusRef:_.agentStatusRef,pendingRequestRef:_.pendingRequestRef,thoughtBufferRef:_.thoughtBufferRef,draftBufferRef:_.draftBufferRef,setAgentStatus:_.setAgentStatus,setAgentDraft:_.setAgentDraft,setAgentPlan:_.setAgentPlan,setAgentThought:_.setAgentThought,setPendingRequest:_.setPendingRequest,setActiveTurn:_.setActiveTurn,noteAgentActivity:_.noteAgentActivity,clearLastActivityFlag:_.clearLastActivityFlag,isAgentRunningRef:_.isAgentRunningRef,currentTurnIdRef:_.currentTurnIdRef,silentRecoveryRef:_.silentRecoveryRef,silenceRefreshMs:_.silenceRefreshMs,lastAgentEventRef:_.lastAgentEventRef,lastSilenceNoticeRef:_.lastSilenceNoticeRef,silenceWarningMs:_.silenceWarningMs,silenceFinalizeMs:_.silenceFinalizeMs,isCompactionStatus:_.isCompactionStatus,serverVersionContext:_.serverVersionContext,setConnectionStatus:_.setConnectionStatus,setStateAccessFailed:_.setStateAccessFailed,setPendingRequestForConnection:_.setPendingRequest,hasConnectedOnceRef:_.hasConnectedOnceRef}}function Hk(_){return{getAgents:_.getAgents,setAgents:_.setAgents,setUserProfile:_.setUserProfile,applyBranding:_.applyBranding,readStoredNumber:_.readStoredNumber,sidebarWidthRef:_.sidebarWidthRef,appShellRef:_.appShellRef,currentChatJid:_.currentChatJid,currentRootChatJid:_.currentRootChatJid,getAgentModels:_.getAgentModels,getAgentContext:_.getAgentContext,getActiveChatAgents:_.getActiveChatAgents,getChatBranches:_.getChatBranches,activeChatJidRef:_.activeChatJidRef,setActiveChatAgents:_.setActiveChatAgents,setCurrentChatBranches:_.setCurrentChatBranches,setActiveModel:_.setActiveModel,setActiveThinkingLevel:_.setActiveThinkingLevel,setSupportsThinking:_.setSupportsThinking,setActiveModelUsage:_.setActiveModelUsage,setAgentModelsPayload:_.setAgentModelsPayload,setHasLoadedAgentModels:_.setHasLoadedAgentModels,agentsRef:_.agentsRef,refreshQueueState:_.refreshQueueState,refreshContextUsage:_.refreshContextUsage,refreshAutoresearchStatus:_.refreshAutoresearchStatus,setContextUsage:_.setContextUsage,setExtensionWorkingState:_.setExtensionWorkingState}}function Ek(_){return{currentChatJid:_.currentChatJid,currentRootChatJid:_.currentRootChatJid,currentHashtag:_.currentHashtag,searchQuery:_.searchQuery,searchScope:_.searchScope,loadPosts:_.loadPosts,searchPosts:_.searchPosts,setPosts:_.setPosts,setHasMore:_.setHasMore,scrollToBottom:_.scrollToBottom,setExtensionStatusPanels:_.setExtensionStatusPanels,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,setExtensionWorkingState:_.setExtensionWorkingState,paneStateOwnerChatJidRef:_.paneStateOwnerChatJidRef,chatPaneStateByChatRef:_.chatPaneStateByChatRef,snapshotCurrentChatPaneState:_.snapshotCurrentChatPaneState,restoreChatPaneState:_.restoreChatPaneState,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,refreshQueueState:_.refreshQueueState,refreshAgentStatus:_.refreshAgentStatus,refreshContextUsage:_.refreshContextUsage,viewStateRef:_.viewStateRef,refreshTimeline:_.refreshTimeline,refreshModelAndQueueState:_.refreshModelAndQueueState,refreshPostPaintThreadState:_.refreshPostPaintThreadState,setFloatingWidget:_.setFloatingWidget,dismissedLiveWidgetKeysRef:_.dismissedLiveWidgetKeysRef}}function Dk(_){return{currentChatJid:_.currentChatJid,posts:_.posts,scrollToMessage:_.scrollToMessage,handleConnectionStatusChange:_.handleConnectionStatusChange,loadPosts:_.loadPosts,refreshCurrentView:_.refreshCurrentView,updateAgentProfile:_.updateAgentProfile,updateUserProfile:_.updateUserProfile,currentTurnIdRef:_.currentTurnIdRef,activeChatJidRef:_.activeChatJidRef,pendingRequestRef:_.pendingRequestRef,draftBufferRef:_.draftBufferRef,thoughtBufferRef:_.thoughtBufferRef,previewResyncPendingRef:_.previewResyncPendingRef,previewResyncGenerationRef:_.previewResyncGenerationRef,steerQueuedTurnIdRef:_.steerQueuedTurnIdRef,thoughtExpandedRef:_.thoughtExpandedRef,draftExpandedRef:_.draftExpandedRef,draftThrottleRef:_.draftThrottleRef,thoughtThrottleRef:_.thoughtThrottleRef,viewStateRef:_.viewStateRef,followupQueueItemsRef:_.followupQueueItemsRef,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,scrollToBottomRef:_.scrollToBottomRef,hasMoreRef:_.hasMoreRef,loadMoreRef:_.loadMoreRef,lastAgentResponseRef:_.lastAgentResponseRef,wasAgentActiveRef:_.wasAgentActiveRef,setActiveTurn:_.setActiveTurn,applyLiveGeneratedWidgetUpdate:_.applyLiveGeneratedWidgetUpdate,setFloatingWidget:_.setFloatingWidget,clearLastActivityFlag:_.clearLastActivityFlag,handleUiVersionDrift:_.handleUiVersionDrift,setAgentStatus:_.setAgentStatus,setAgentDraft:_.setAgentDraft,setAgentPlan:_.setAgentPlan,setAgentThought:_.setAgentThought,setPendingRequest:_.setPendingRequest,clearAgentRunState:_.clearAgentRunState,getAgentStatus:_.getAgentStatus,noteAgentActivity:_.noteAgentActivity,showLastActivity:_.showLastActivity,refreshTimeline:_.refreshTimeline,refreshModelAndQueueState:_.refreshModelAndQueueState,refreshActiveChatAgents:_.refreshActiveChatAgents,refreshCurrentChatBranches:_.refreshCurrentChatBranches,notifyForFinalResponse:_.notifyForFinalResponse,setContextUsage:_.setContextUsage,refreshContextUsage:_.refreshContextUsage,refreshQueueState:_.refreshQueueState,setFollowupQueueItems:_.setFollowupQueueItems,clearQueuedSteerStateIfStale:_.clearQueuedSteerStateIfStale,setSteerQueuedTurnId:_.setSteerQueuedTurnId,applyModelState:_.applyModelState,getAgentContext:_.getAgentContext,setExtensionStatusPanels:_.setExtensionStatusPanels,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,setExtensionWorkingState:_.setExtensionWorkingState,refreshActiveEditorFromWorkspace:_.refreshActiveEditorFromWorkspace,showIntentToast:_.showIntentToast,removeStalledPost:_.removeStalledPost,setPosts:_.setPosts,preserveTimelineScrollTop:_.preserveTimelineScrollTop,finalizeStalledResponse:_.finalizeStalledResponse,connectionStatus:_.connectionStatus,agentStatus:_.agentStatus,refreshAgentStatus:_.refreshAgentStatus,refreshAutoresearchStatus:_.refreshAutoresearchStatus}}function YN(_){let $=zQ(Uk(_)),j=gQ(Hk({..._,refreshQueueState:$.refreshQueueState,refreshContextUsage:$.refreshContextUsage,refreshAutoresearchStatus:$.refreshAutoresearchStatus})),G=dQ(Ek({..._,refreshQueueState:$.refreshQueueState,refreshAgentStatus:$.refreshAgentStatus,refreshContextUsage:$.refreshContextUsage,refreshModelAndQueueState:j.refreshModelAndQueueState,refreshPostPaintThreadState:j.refreshPostPaintThreadState}));return XN(Dk({..._,handleConnectionStatusChange:$.handleConnectionStatusChange,handleUiVersionDrift:$.handleUiVersionDrift,refreshCurrentView:G.refreshCurrentView,updateAgentProfile:j.updateAgentProfile,updateUserProfile:j.updateUserProfile,applyLiveGeneratedWidgetUpdate:G.applyLiveGeneratedWidgetUpdate,refreshModelAndQueueState:j.refreshModelAndQueueState,refreshActiveChatAgents:j.refreshActiveChatAgents,refreshCurrentChatBranches:j.refreshCurrentChatBranches,refreshContextUsage:$.refreshContextUsage,refreshQueueState:$.refreshQueueState,applyModelState:j.applyModelState,refreshAgentStatus:$.refreshAgentStatus,refreshAutoresearchStatus:$.refreshAutoresearchStatus})),{agentStatusLifecycle:$,chatRefreshLifecycle:j,viewRefreshLifecycle:G}}M0();var LN="piclaw:pane-host-transfer:",zk=300000;function KN(_){try{return _?.localStorage??null}catch{return null}}function VN(_){return typeof _==="string"?_.trim():""}function qN(_){if(!_||typeof _!=="object"||Array.isArray(_))return null;return _}function Wk(_=Date.now()){return`pane-transfer-${_.toString(36)}-${Math.random().toString(36).slice(2,10)}`}function Ok(_,$){try{return _?.removeItem($),!0}catch(j){return!1}}function Jk(_,$=globalThis,j=Date.now()){let G=KN($),Z=VN(_?.path),X=qN(_?.payload);if(!G||!Z||!X)return null;let Y=Wk(j);try{return G.setItem(`${LN}${Y}`,JSON.stringify({path:Z,payload:X,capturedAt:j})),Y}catch{return null}}function Mj(_,$=globalThis,j=Date.now()){let G=typeof _==="string"?_.trim():"",Z=KN($);if(!G||!Z)return null;let X=`${LN}${G}`,Y="";try{Y=Z.getItem(X)||""}catch{return null}if(!Y)return null;Ok(Z,X);try{let L=JSON.parse(Y),V=typeof L?.capturedAt==="number"&&Number.isFinite(L.capturedAt)?L.capturedAt:j;if(V+zk<j)return null;let K=VN(L?.path),Q=qN(L?.payload);if(!K||!Q)return null;return{path:K,payload:Q,capturedAt:V}}catch{return null}}function u8(_,$=globalThis,j=Date.now()){let G=Jk(_,$,j);return G?{pane_transfer:G}:null}function QN(_=globalThis,$=Date.now()){let j=G2("pane_transfer",_);return Mj(j,_,$)}function b4(_){return typeof _==="string"?_.trim():""}function Ak(_){return Boolean(_)&&typeof _.get==="function"&&typeof _.set==="function"&&typeof _.delete==="function"&&typeof _.entries==="function"}function wj(_){if(!_)return null;let $=_.__piclawPaneLiveTransferRegistry__;if(Ak($))return $;let j=new Map;return _.__piclawPaneLiveTransferRegistry__=j,j}function kk(_){try{return _?.(),!0}catch($){return!1}}function S2(_,$=typeof window<"u"?window:null){let j=wj($),G=b4(_?.panePath),Z=b4(_?.paneInstanceId),X=b4(_?.paneWindowId);if(!j||!G||!Z||!X||typeof _?.instance?.moveHost!=="function")return!1;return j.set(X,{..._,panePath:G,paneInstanceId:Z,paneWindowId:X,registeredAt:typeof _?.registeredAt==="number"?_.registeredAt:Date.now()}),!0}function NN(_,$=typeof window<"u"?window:null){let j=wj($),G=b4(_);if(!j||!G)return;for(let[Z,X]of j.entries())if(X?.panePath===G)j.delete(Z)}async function BN(_,$,j,G){let Z=wj(_),X=b4($?.panePath),Y=b4($?.paneInstanceId),L=b4($?.paneWindowId);if(!Z||!X||!Y||!L)return null;let V=Z.get(L)||null;if(!V)return null;if(V.panePath!==X||V.paneInstanceId!==Y)return null;if(typeof V.instance?.moveHost!=="function")return null;if(!await V.instance.moveHost(j,G))return null;return Z.delete(L),kk(V.releaseSourceHost),V.instance}m6();function f5(_){if(!_||typeof _!=="object")return!1;let $=_;if(typeof $.closest==="function"&&$.closest('input, textarea, select, [contenteditable="true"], .compose-box, .compose-model-popup, .compose-session-popup'))return!0;return Boolean($.isContentEditable)}function FN(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let G=_?.openTab,Z=_?.editSource,X=_?.popOutPane,Y=(Q)=>{let q=Q?.detail?.path,B=typeof Q?.detail?.label==="string"&&Q.detail.label.trim()?Q.detail.label.trim():void 0;if(q)G?.(q,B)},L=(Q)=>{let q=Q?.detail?.path,B=typeof Q?.detail?.label==="string"&&Q.detail.label.trim()?Q.detail.label.trim():void 0;if(q)Z?.(q,B)},V=(Q)=>{let q=Q?.detail?.path,B=typeof Q?.detail?.label==="string"&&Q.detail.label.trim()?Q.detail.label.trim():void 0;if(q)X?.(q,B)},K=["pane:open-tab","office-viewer:open-tab","csv-viewer:open-tab","pdf-viewer:open-tab","image-viewer:open-tab","video-viewer:open-tab","html-viewer:open-tab","mindmap:open-tab","vnc:open-tab"];return K.forEach((Q)=>j.addEventListener(Q,Y)),j.addEventListener("html-viewer:edit-source",L),j.addEventListener("pane:popout",V),()=>{K.forEach((Q)=>j.removeEventListener(Q,Y)),j.removeEventListener("html-viewer:edit-source",L),j.removeEventListener("pane:popout",V)}}function UN(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let G=(Z)=>{if(f5(Z?.target))return;if(!O$(Z,"toggleDock"))return;Z.preventDefault?.(),_?.()};return j.addEventListener("keydown",G),()=>j.removeEventListener("keydown",G)}function HN(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let G=_?.toggleZenMode,Z=_?.exitZenMode,X=typeof _?.isZenModeActive==="function"?_.isZenModeActive:()=>Boolean(_?.zenMode),Y=(L)=>{if(O$(L,"toggleZenMode")){L.preventDefault?.(),G?.();return}if(f5(L?.target))return;if(L?.key==="Escape"&&X())L.preventDefault?.(),Z?.()};return j.addEventListener("keydown",Y),()=>j.removeEventListener("keydown",Y)}function EN(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let G=(Z)=>{if(f5(Z?.target))return;if(O$(Z,"previousChat")){Z.preventDefault?.(),_?.previousChat?.();return}if(O$(Z,"nextChat"))Z.preventDefault?.(),_?.nextChat?.()};return j.addEventListener("keydown",G),()=>j.removeEventListener("keydown",G)}function DN(_={}){let $=_.document??(typeof document<"u"?document:null);if(!$)return()=>{};let j=(G)=>{if(f5(G?.target))return;if(!O$(G,"openSettings"))return;G.preventDefault(),o1()};return $.addEventListener("keydown",j),()=>$.removeEventListener("keydown",j)}function zN(_={}){let $=_.document??(typeof document<"u"?document:null);if(!$)return()=>{};let j=(G)=>{if(f5(G?.target))return;if(!O$(G,"openHelp"))return;G.preventDefault(),o1({section:"keyboard"})};return $.addEventListener("keydown",j),()=>$.removeEventListener("keydown",j)}function WN(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,renameBranchInFlight:G,renameBranchLockUntil:Z,getFormLock:X,setRenameBranchNameDraft:Y,setIsRenameBranchFormOpen:L,now:V=Date.now()}=_;if(!$||!j?.chat_jid)return!1;let K=X?.()||null;if(!K)return!1;if(G||V<Number(Z||0)||K.inFlight||V<Number(K.cooldownUntil||0))return!1;return Y?.(j.agent_name||""),L?.(!0),!0}function ON(_){let{setIsRenameBranchFormOpen:$,setRenameBranchNameDraft:j}=_;$?.(!1),j?.("")}async function JN(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,nextName:G,openRenameForm:Z,renameBranchInFlightRef:X,renameBranchLockUntilRef:Y,getFormLock:L,setIsRenamingBranch:V,renameChatBranch:K,refreshActiveChatAgents:Q,refreshCurrentChatBranches:q,navigate:B,baseHref:N,chatOnlyMode:U,showIntentToast:E,closeRenameForm:D,now:H=()=>Date.now()}=_;if(!$||!j?.chat_jid)return!1;if(typeof G!=="string")return Z?.(),!1;let k=H(),O=L?.()||null;if(!O)return!1;if(X.current||k<Number(Y.current||0)||O.inFlight||k<Number(O.cooldownUntil||0))return!1;X.current=!0,O.inFlight=!0,V?.(!0);try{let W=j.agent_name||"",I=a6(G,W);if(!I.canSubmit)return E?.("Could not rename session",I.message||"Enter a valid session handle.","warning",4000),!1;let x=I.normalized||W,J=await K(j.chat_jid,{agentName:x});await Promise.allSettled([Q?.(),q?.()]);let A=J?.branch?.agent_name||x||W;return E?.("Session renamed",`@${A}`,"info",3500),D?.(),!0}catch(W){let I=W instanceof Error?W.message:String(W||"Could not rename session."),x=/already in use/i.test(I||"")?`${I} Switch to or restore that existing session from the session manager.`:I;return E?.("Could not rename session",x||"Could not rename session.","warning",5000),!1}finally{X.current=!1,V?.(!1);let W=H()+uV;Y.current=W;let I=L?.()||null;if(I)I.inFlight=!1,I.cooldownUntil=W}}async function AN(_){let{hasWindow:$=typeof window<"u",targetChatJid:j=null,currentChatJid:G,currentBranchRecord:Z,currentChatBranches:X=[],activeChatAgents:Y=[],pruneChatBranch:L,refreshActiveChatAgents:V,refreshCurrentChatBranches:K,showIntentToast:Q,baseHref:q,chatOnlyMode:B,navigate:N,confirm:U=(A)=>window.confirm(A)}=_;if(!$)return!1;let E=typeof j==="string"&&j.trim()?j.trim():"",D=typeof G==="string"&&G.trim()?G.trim():"",H=E||Z?.chat_jid||D;if(!H)return Q?.("Could not prune branch","No active session is selected yet.","warning",4000),!1;let k=(Z?.chat_jid===H?Z:null)||X.find((A)=>A?.chat_jid===H)||Y.find((A)=>A?.chat_jid===H)||null,O=k?.chat_jid===(k?.root_chat_jid||k?.chat_jid),W=Boolean(O&&H==="web:default"),I=Boolean(O&&X.some((A)=>{let z=typeof A?.chat_jid==="string"?A.chat_jid.trim():"",T=typeof A?.root_chat_jid==="string"?A.root_chat_jid.trim():z;return z&&z!==H&&T===H&&!A?.archived_at}));if(W)return Q?.("Cannot archive session","The default chat session cannot be archived.","warning",4000),!1;if(I)return Q?.("Cannot archive session","Archive or delete the child branch sessions first.","warning",4500),!1;let x=`@${k?.agent_name||H}${k?.chat_jid?` — ${k.chat_jid}`:""}`;if(!U(O?`Archive ${x}?

This removes the session from the session picker. Chat history is preserved.`:`Prune ${x}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return!1;try{await L(H),await Promise.allSettled([V?.(),K?.()]);let A=O?"web:default":k?.root_chat_jid||"web:default";Q?.(O?"Session archived":"Branch pruned",`${x} has been archived.`,"info",3000);let z=T1(q,A,{chatOnly:B});return N?.(z),!0}catch(A){let z=A instanceof Error?A.message:String(A||"Could not prune branch.");return Q?.("Could not prune branch",z||"Could not prune branch.","warning",5000),!1}}async function kN(_){let{targetChatJid:$,purgeChatBranch:j,currentChatBranches:G=[],refreshActiveChatAgents:Z,refreshCurrentChatBranches:X,showIntentToast:Y,confirm:L=(E)=>window.confirm(E)}=_,V=typeof $==="string"?$.trim():"";if(!V||typeof j!=="function")return!1;let K=G.find((E)=>E?.chat_jid===V)||null;if(!Boolean(K?.archived_at))return Y?.("Could not delete branch","Only archived sessions can be permanently deleted.","warning",4500),!1;let q=Boolean(K?.chat_jid&&K.chat_jid===(K.root_chat_jid||K.chat_jid)),B=`@${K?.agent_name||V}`;if(!L(`Permanently delete ${B}?

This removes all chat history, token usage, cursor state, scheduled tasks, and session files for this ${q?"session":"branch"}. It cannot be undone.`))return!1;try{return await j(V),await Promise.allSettled([Z?.(),X?.()]),Y?.(q?"Archived session deleted":"Archived branch deleted",`${B} was permanently deleted.`,"info",4000),!0}catch(E){let D=E instanceof Error?E.message:String(E||`Could not permanently delete archived ${q?"session":"branch"}.`);return Y?.("Could not delete branch",D||`Could not permanently delete archived ${q?"session":"branch"}.`,"warning",5000),!1}}async function yN(_){let{targetChatJid:$,restoreChatBranch:j,currentChatBranches:G=[],refreshActiveChatAgents:Z,refreshCurrentChatBranches:X,showIntentToast:Y,baseHref:L,chatOnlyMode:V,navigate:K}=_,Q=typeof $==="string"?$.trim():"";if(!Q||typeof j!=="function")return!1;try{let q=G.find((H)=>H?.chat_jid===Q)||null,B=await j(Q);await Promise.allSettled([Z?.(),X?.()]);let N=B?.branch,U=typeof N?.chat_jid==="string"&&N.chat_jid.trim()?N.chat_jid.trim():Q,E=WL(q?.agent_name,N?.agent_name,U);Y?.("Branch restored",E,"info",4200);let D=T1(L,U,{chatOnly:V});return K?.(D),!0}catch(q){let B=q instanceof Error?q.message:String(q||"Could not restore branch.");return Y?.("Could not restore branch",B||"Could not restore branch.","warning",5000),!1}}async function MN(_){let{branchLoaderSourceChatJid:$,forkChatBranch:j,setBranchLoaderState:G,navigate:Z,baseHref:X,isCancelled:Y=()=>!1}=_;try{G?.({status:"running",message:"Preparing a new chat branch…"});let L=await j($);if(Y())return!1;let V=L?.branch,K=typeof V?.chat_jid==="string"&&V.chat_jid.trim()?V.chat_jid.trim():null;if(!K)throw Error("Branch fork did not return a chat id.");let Q=T1(X,K,{chatOnly:!0});return Z?.(Q,{replace:!0}),!0}catch(L){if(Y())return!1;return G?.({status:"error",message:U4(L)}),!1}}function TN(_){let{hasWindow:$=typeof window<"u",nextChatJid:j,currentChatJid:G,chatOnlyMode:Z,currentHref:X,navigate:Y}=_;if(!$)return!1;let L=typeof j==="string"?j.trim():"";if(!L||L===G)return!1;let V=T1(X,L,{chatOnly:Z});return Y?.(V),!0}function yk(_){return typeof _==="string"?_.trim():""}function Mk(_){return new Promise(($)=>setTimeout($,_))}async function wN(_,$){if(typeof _?.beforeDetachFromHost!=="function")return;await _.beforeDetachFromHost({path:$,target:"popout"})}async function xN(_){let{panePath:$,tabStripActiveId:j,editorInstanceRef:G,dockInstanceRef:Z,terminalTabPath:X,activateTab:Y,getActiveTabId:L,resolveTab:V,buildEditorPopoutTransfer:K}=_,Q=$===X&&Boolean(V?.($));if($===X&&!Q){let E=Z.current;if(await wN(E,$),typeof E?.preparePopoutTransfer!=="function")return null;return await E.preparePopoutTransfer()}let q=()=>yk(L?.()??j),B=q(),N=G.current;if(B!==$)Y?.($);let U=B===$?G.current:null;if(typeof U?.preparePopoutTransfer!=="function")for(let E=0;E<12;E+=1){if(E>0)await Mk(16);else await Promise.resolve();let D=q(),H=G.current,k=D===$,O=H!==N;if(!k||typeof H?.preparePopoutTransfer!=="function")continue;if(B===$||O||E>0){U=H;break}}if(await wN(U,$),typeof U?.preparePopoutTransfer==="function"){let E=await U.preparePopoutTransfer();if(E)return E}return K?.($)??null}function IN(_){let{panePath:$,terminalTabPath:j,dockVisible:G,resolveTab:Z,closeTab:X,setDockVisible:Y}=_,L=Z($);if(L&&!L.dirty){X($);return}if($===j&&G)Y(!1)}function CN(_){let{hasWindow:$=typeof window<"u",editorOpen:j,shellElement:G,editorWidthRef:Z,dockHeightRef:X,sidebarWidthRef:Y,readStoredNumber:L}=_;if(!j||!$||!G)return;if(!Z.current){let V=L("editorWidth",null),K=Y.current||280,Q=Number.isFinite(V)?Number(V):K;Z.current=H5(Q,typeof window<"u"?window.innerWidth:0,Y.current||0)}if(G.style.setProperty("--editor-width",`${Z.current}px`),!X.current){let V=L("dockHeight",null);X.current=Number.isFinite(V)?Number(V):200}G.style.setProperty("--dock-height",`${X.current}px`)}I_();async function PN(_){if(typeof _!=="function")return null;try{return await _()}catch{return null}}async function fN(_){let{currentChatJid:$,chatOnlyMode:j,forkChatBranch:G,refreshActiveChatAgents:Z,refreshCurrentChatBranches:X,showIntentToast:Y,navigate:L,baseHref:V}=_;if(typeof L==="function")try{let K=I3(V,$,{chatOnly:j});return L(K),!0}catch(K){return Y?.("Could not create branch",U4(K),"warning",5000),!1}try{let Q=(await G($))?.branch,q=typeof Q?.chat_jid==="string"&&Q.chat_jid.trim()?Q.chat_jid.trim():null;if(!q)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([Z?.(),X?.()]);let B=Q?.agent_name?`@${Q.agent_name}`:q;Y?.("New branch created",`Switched to ${B}.`,"info",2500);let N=T1(V,q,{chatOnly:j});return L?.(N),!0}catch(K){return Y?.("Could not create branch",U4(K),"warning",5000),!1}}async function RN(_){let{rootName:$,chatOnlyMode:j,createRootChatSession:G,refreshActiveChatAgents:Z,refreshCurrentChatBranches:X,showIntentToast:Y,navigate:L,baseHref:V}=_,K=String($||"").trim();if(!K)return!1;try{let B=(await(typeof G==="function"?G:H7)(K))?.branch,N=typeof B?.chat_jid==="string"&&B.chat_jid.trim()?B.chat_jid.trim():null;if(!N)throw Error("Root session creation did not return a chat id.");await Promise.allSettled([Z?.(),X?.()]);let U=B?.agent_name?`@${B.agent_name}`:N;Y?.("Root session created",`Switched to ${U}.`,"info",2500);let E=T1(V,N,{chatOnly:j});return L?.(E),!0}catch(Q){return Y?.("Could not create root session",U4(Q),"warning",5000),!1}}async function SN(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,path:G,label:Z,showIntentToast:X,resolveSourceTransfer:Y,closeSourcePaneIfTransferred:L,onPaneWindowOpened:V,currentChatJid:K,baseHref:Q}=_;if(!$||j)return!1;let q=typeof G==="string"&&G.trim()?G.trim():"";if(!q)return!1;let B=nG(q);if(!B)return X?.("Could not open pane window","Opening pane windows is unavailable in standalone webapp mode.","warning",5000),!1;let N=M3(B);if(!N)return X?.("Could not open pane window","The browser blocked opening a new tab or window.","warning",5000),!1;w3(N,{title:typeof Z==="string"&&Z.trim()?`Opening ${Z}…`:"Opening pane…",message:"Preparing a standalone pane window. This should only take a moment."});try{let U=await Y?.(q),E=Boolean(U&&Object.keys(U).length>0),D=pG(Q,q,{label:typeof Z==="string"&&Z.trim()?Z.trim():void 0,chatJid:K,params:U});if(T3(N,D),V?.(q,N,U||null),E&&!V)L?.(q);return!0}catch(U){x3(N);let E=U instanceof Error?U.message:"Could not transfer pane state to the new window.";return X?.("Could not open pane window",E,"warning",5000),!1}}async function uN(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,currentChatJid:G,currentRootChatJid:Z,forkChatBranch:X,getActiveChatAgents:Y,getChatBranches:L,setActiveChatAgents:V,setCurrentChatBranches:K,showIntentToast:Q,baseHref:q}=_;if(!$||j)return!1;let B=rG(G);if(!B)return Q?.("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000),!1;if(B.mode==="tab"){let U=I3(q,G,{chatOnly:!0});if(!window.open(U,B.target))return Q?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;return!0}let N=M3(B);if(!N)return Q?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;w3(N,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let E=(await X(G))?.branch,D=typeof E?.chat_jid==="string"&&E.chat_jid.trim()?E.chat_jid.trim():null;if(!D)throw Error("Branch fork did not return a chat id.");let H=await PN(()=>Y?.());if(H)V?.(Array.isArray(H?.chats)?H.chats:[]);let k=await PN(()=>L?.(Z));if(k)K?.(Array.isArray(k?.chats)?k.chats:[]);let O=T1(q,D,{chatOnly:!0});return T3(N,O),!0}catch(U){return x3(N),Q?.("Could not open branch window",U4(U),"error",5000),!1}}function wk(_){_(($)=>!$)}function Tk(_){let{nextChatJid:$,currentChatJid:j,chatOnlyMode:G,navigate:Z,hasWindow:X=typeof window<"u",currentHref:Y=X?window.location.href:"http://localhost/"}=_;return TN({hasWindow:X,nextChatJid:$,currentChatJid:j,chatOnlyMode:G,currentHref:Y,navigate:Z})}function xk(_){let{currentBranchRecord:$,renameBranchInFlight:j,renameBranchLockUntil:G,getFormLock:Z,setRenameBranchNameDraft:X,setIsRenameBranchFormOpen:Y,hasWindow:L=typeof window<"u"}=_;return WN({hasWindow:L,currentBranchRecord:$,renameBranchInFlight:j,renameBranchLockUntil:G,getFormLock:Z,setRenameBranchNameDraft:X,setIsRenameBranchFormOpen:Y})}function Ik(_){ON(_)}async function Ck(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await JN({hasWindow:$,baseHref:String(j||"").trim()||($?window.location.href:"http://localhost/"),...G})}async function Pk(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await AN({hasWindow:$,baseHref:j,...G})}async function fk(_){await kN(_)}async function Rk(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await yN({baseHref:j,...G})}function Sk(_){let{branchLoaderMode:$,branchLoaderSourceChatJid:j,forkChatBranch:G,setBranchLoaderState:Z,navigate:X,hasWindow:Y=typeof window<"u",baseHref:L=Y?window.location.href:"http://localhost/",runBranchLoaderImpl:V=MN}=_;if(!$||!Y)return;let K=!1;return V({branchLoaderSourceChatJid:j,forkChatBranch:G,setBranchLoaderState:Z,navigate:X,baseHref:L,isCancelled:()=>K}),()=>{K=!0}}async function uk(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await fN({baseHref:j,...G})}async function gk(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await RN({baseHref:j,...G})}async function bk(_){let{isWebAppMode:$,path:j,label:G,showIntentToast:Z,currentChatJid:X,activateTab:Y,tabStripActiveId:L,editorInstanceRef:V,dockInstanceRef:K,terminalTabPath:Q,tabPaneOverrides:q,buildPaneDetachTransfer:B,registerDetachedPaneWindow:N,dockVisible:U,resolveTab:E,closeTab:D,setDockVisible:H,hasWindow:k=typeof window<"u",baseHref:O=k?window.location.href:"http://localhost/"}=_,W=B?.(j)||null;return await SN({hasWindow:k,isWebAppMode:$,path:j,label:G,showIntentToast:Z,currentChatJid:X,baseHref:O,resolveSourceTransfer:async(I)=>{let x=await xN({panePath:I,activateTab:Y,getActiveTabId:()=>__.getActiveId(),tabStripActiveId:L,editorInstanceRef:V,dockInstanceRef:K,terminalTabPath:Q,resolveTab:E,buildEditorPopoutTransfer:(T)=>{if(!T||T===Q)return null;let w=V.current,y=typeof w?.getContent==="function"?w.getContent():void 0,P=typeof w?.isDirty==="function"?w.isDirty():!1,f=q instanceof Map?q.get(T)||null:null,b=__.getViewState(T)||null;return Z6({path:T,content:P?y:void 0,paneOverrideId:f,viewState:b})}}),J=I===Q&&!E(I)?K.current:V.current,A=typeof J?.exportHostTransferState==="function"?J.exportHostTransferState():null,z=A?u8({path:I,payload:A}):null;if(W?.paneInstanceId&&W?.paneWindowId&&J&&I!==Q&&A?.kind!=="terminal")S2({panePath:I,paneInstanceId:W.paneInstanceId,paneWindowId:W.paneWindowId,instance:J,releaseSourceHost:()=>{if(I===Q){if(K.current===J)K.current=null;if(V.current===J)V.current=null;return}if(V.current===J)V.current=null}});return{...x||{},...z||{},...W?.params||{}}},onPaneWindowOpened:N?(I,x,J)=>{N(I,G,x,J)}:void 0,closeSourcePaneIfTransferred:N?void 0:(I)=>{IN({panePath:I,terminalTabPath:Q,dockVisible:U,resolveTab:E,closeTab:D,setDockVisible:H})}})}function vk(_){let{openEditor:$,popOutPane:j,watchPaneOpenEventsImpl:G=FN}=_;return G({openTab:(Z,X)=>$(Z,X?{label:X}:void 0),editSource:(Z,X)=>$(Z,{...X?{label:X}:{},paneOverrideId:"editor"}),popOutPane:(Z,X)=>{j(Z,X)}})}async function mk(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await uN({hasWindow:$,baseHref:j,...G})}function ck(_){let{hasWindow:$=typeof window<"u",...j}=_;CN({hasWindow:$,...j})}function gN(_){let{setWorkspaceOpen:$,currentChatJid:j,chatOnlyMode:G,navigate:Z,currentBranchRecord:X,renameBranchInFlightRef:Y,renameBranchLockUntilRef:L,getFormLock:V,setRenameBranchNameDraft:K,setIsRenameBranchFormOpen:Q,setIsRenamingBranch:q,renameChatBranch:B,refreshActiveChatAgents:N,refreshCurrentChatBranches:U,showIntentToast:E,currentChatBranches:D,activeChatAgents:H,pruneChatBranch:k,purgeChatBranch:O,restoreChatBranch:W,branchLoaderMode:I,branchLoaderSourceChatJid:x,forkChatBranch:J,createRootChatSession:A,setBranchLoaderState:z,currentRootChatJid:T,isWebAppMode:w,getActiveChatAgents:y,getChatBranches:P,setActiveChatAgents:f,setCurrentChatBranches:b,openEditor:c,activateTab:h,tabStripActiveId:_0,editorInstanceRef:v,dockInstanceRef:e,terminalTabPath:z0,tabPaneOverrides:j0,buildPaneDetachTransfer:$0,registerDetachedPaneWindow:L0,dockVisible:B0,resolveTab:t,closeTab:V0,setDockVisible:q0,editorOpen:k0,shellElement:s,editorWidthRef:X0,dockHeightRef:D0,sidebarWidthRef:C0,readStoredNumber:g0}=_,n0=R(()=>{wk($)},[$]),j_=R((A0)=>{Tk({nextChatJid:A0,currentChatJid:j,chatOnlyMode:G,navigate:Z})},[G,j,Z]),m0=R(()=>{xk({currentBranchRecord:X,renameBranchInFlight:Y.current,renameBranchLockUntil:L.current,getFormLock:V,setRenameBranchNameDraft:K,setIsRenameBranchFormOpen:Q})},[X,V,Y,L,Q,K]),d0=R(()=>{Ik({setIsRenameBranchFormOpen:Q,setRenameBranchNameDraft:K})},[Q,K]),S0=R(async(A0)=>{await Ck({currentBranchRecord:X,nextName:A0,openRenameForm:m0,renameBranchInFlightRef:Y,renameBranchLockUntilRef:L,getFormLock:V,setIsRenamingBranch:q,renameChatBranch:B,refreshActiveChatAgents:N,refreshCurrentChatBranches:U,navigate:Z,chatOnlyMode:G,showIntentToast:E,closeRenameForm:d0})},[d0,X,G,V,Z,m0,N,U,Y,L,B,q,E]),o0=R(async(A0=null)=>{await Pk({targetChatJid:A0,currentChatJid:j,currentBranchRecord:X,currentChatBranches:D,activeChatAgents:H,pruneChatBranch:k,refreshActiveChatAgents:N,refreshCurrentChatBranches:U,showIntentToast:E,chatOnlyMode:G,navigate:Z})},[H,G,X,D,j,Z,k,N,U,E]),v0=R(async(A0)=>{await fk({targetChatJid:A0,purgeChatBranch:O,currentChatBranches:D,refreshActiveChatAgents:N,refreshCurrentChatBranches:U,showIntentToast:E})},[D,O,N,U,E]),a0=R(async(A0)=>{await Rk({targetChatJid:A0,restoreChatBranch:W,currentChatBranches:D,refreshActiveChatAgents:N,refreshCurrentChatBranches:U,showIntentToast:E,chatOnlyMode:G,navigate:Z})},[G,D,Z,N,U,W,E]);u(()=>Sk({branchLoaderMode:I,branchLoaderSourceChatJid:x,forkChatBranch:J,setBranchLoaderState:z,navigate:Z}),[I,x,J,Z,z]);let h0=R(async()=>{await uk({currentChatJid:j,chatOnlyMode:G,forkChatBranch:J,refreshActiveChatAgents:N,refreshCurrentChatBranches:U,showIntentToast:E,navigate:Z})},[G,j,J,Z,N,U,E]),N_=R(async(A0)=>{await gk({rootName:A0,chatOnlyMode:G,createRootChatSession:A,refreshActiveChatAgents:N,refreshCurrentChatBranches:U,showIntentToast:E,navigate:Z})},[G,A,Z,N,U,E]),t0=R(async(A0,L_)=>{return await bk({isWebAppMode:w,path:A0,label:L_,showIntentToast:E,currentChatJid:j,activateTab:h,tabStripActiveId:_0,editorInstanceRef:v,dockInstanceRef:e,terminalTabPath:z0,tabPaneOverrides:j0,buildPaneDetachTransfer:$0,registerDetachedPaneWindow:L0,dockVisible:B0,resolveTab:t,closeTab:V0,setDockVisible:q0})},[h,$0,V0,j,e,B0,v,w,L0,t,q0,E,j0,_0,z0]);u(()=>vk({openEditor:c,popOutPane:(A0,L_)=>{t0(A0,L_)}}),[t0,c]);let b0=R(async()=>{await mk({isWebAppMode:w,currentChatJid:j,currentRootChatJid:T,forkChatBranch:J,getActiveChatAgents:y,getChatBranches:P,setActiveChatAgents:f,setCurrentChatBranches:b,showIntentToast:E})},[j,T,J,y,P,w,f,b,E]);return u(()=>{ck({editorOpen:k0,shellElement:s,editorWidthRef:X0,dockHeightRef:D0,sidebarWidthRef:C0,readStoredNumber:g0})},[D0,k0,X0,g0,s,C0]),{toggleWorkspace:n0,handleBranchPickerChange:j_,openRenameCurrentBranchForm:m0,closeRenameCurrentBranchForm:d0,handleRenameCurrentBranch:S0,handlePruneCurrentBranch:o0,handlePurgeArchivedBranch:v0,handleRestoreBranch:a0,handleCreateSessionFromCompose:h0,handleCreateRootSessionFromCompose:N_,handlePopOutPane:t0,handlePopOutChat:b0}}M0();function G4(_){return _.status==="fulfilled"?_.value:null}function g8(_){return Math.max(0,Math.min(100,_))}function bN(_){let $=Array.isArray(_.timelinePayload?.posts)?_.timelinePayload.posts:Array.isArray(_.rawPosts)?_.rawPosts:[],j=$.length?$[$.length-1]:null,G=$.filter((D)=>D?.data?.is_bot_message).length,Z=$.filter((D)=>!D?.data?.is_bot_message).length,X=Number(_.queuePayload?.count??_.followupQueueItems?.length??0)||0,Y=Array.isArray(_.activeChatsPayload?.chats)?_.activeChatsPayload.chats.length:Array.isArray(_.activeChatAgents)?_.activeChatAgents.length:0,L=Array.isArray(_.branchesPayload?.chats)?_.branchesPayload.chats.length:Array.isArray(_.currentChatBranches)?_.currentChatBranches.length:0,V=Number(_.contextPayload?.percent??_.contextUsage?.percent??0)||0,K=Number(_.contextPayload?.tokens??_.contextUsage?.tokens??0)||0,Q=Number(_.contextPayload?.contextWindow??_.contextUsage?.contextWindow??0)||0,q=_.modelsPayload?.current??_.activeModel??null,B=_.modelsPayload?.thinking_level??_.activeThinkingLevel??null,N=_.modelsPayload?.supports_thinking??_.supportsThinking,U=_.statusPayload?.status||(_.isAgentTurnActive?"active":"idle"),E=_.statusPayload?.data?.type||_.statusPayload?.type||null;return{generatedAt:_.generatedAt,request:_.request,chat:{currentChatJid:_.currentChatJid,rootChatJid:_.currentRootChatJid,activeChats:Y,branches:L},agent:{status:U,phase:E,running:Boolean(_.isAgentTurnActive)},model:{current:q,thinkingLevel:B,supportsThinking:Boolean(N)},context:{tokens:K,contextWindow:Q,percent:V},queue:{count:X},timeline:{loadedPosts:$.length,botPosts:G,userPosts:Z,latestPostId:j?.id??null,latestTimestamp:j?.timestamp??null},bars:[{key:"context",label:"Context",value:g8(Math.round(V))},{key:"queue",label:"Queue",value:g8(X*18)},{key:"activeChats",label:"Active chats",value:g8(Y*12)},{key:"posts",label:"Timeline load",value:g8($.length*5)}]}}function vN(_){if(_==="followup")return{title:"Widget submission queued",detail:"The widget message was queued because the agent is busy.",kind:"info",durationMs:3500};return{title:"Widget submission sent",detail:"The widget message was sent to the chat.",kind:"info",durationMs:3500}}function mN(_){return{title:"Widget submission failed",detail:_||"Could not send the widget message.",kind:"warning",durationMs:5000}}function cN(_,$){return{shouldBuildDashboard:_?.buildDashboard!==!1,nextRefreshCount:Number($||0)+1}}function lN(){return{title:"Dashboard built",detail:"Live dashboard state pushed into the widget.",kind:"info",durationMs:3000}}function hN(_){return{title:"Dashboard build failed",detail:_||"Could not build dashboard.",kind:"warning",durationMs:5000}}function rN(){return{title:"Widget refresh requested",detail:"The widget received a host acknowledgement update.",kind:"info",durationMs:3000}}async function pN(_){let{requestPayload:$=null,currentChatJid:j,currentRootChatJid:G,getAgentStatus:Z,getAgentContext:X,getAgentQueueState:Y,getAgentModels:L,getActiveChatAgents:V,getChatBranches:K,getTimeline:Q,rawPosts:q,activeChatAgents:B,currentChatBranches:N,contextUsage:U,followupQueueItems:E,activeModel:D,activeThinkingLevel:H,supportsThinking:k,isAgentTurnActive:O}=_,[W,I,x,J,A,z,T]=await Promise.allSettled([Z(j),X(j),Y(j),L(j),V(),K(G),Q(20,null,j)]);return bN({generatedAt:new Date().toISOString(),request:$,currentChatJid:j,currentRootChatJid:G,statusPayload:G4(W),contextPayload:G4(I),queuePayload:G4(x),modelsPayload:G4(J),activeChatsPayload:G4(A),branchesPayload:G4(z),timelinePayload:G4(T),rawPosts:q,activeChatAgents:B,currentChatBranches:N,contextUsage:U,followupQueueItems:E,activeModel:D,activeThinkingLevel:H,supportsThinking:k,isAgentTurnActive:O})}function nN(_){let{queuedItem:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,currentChatJid:Z,refreshQueueState:X,setFollowupQueueItems:Y,showIntentToast:L,steerAgentQueueItem:V}=_,K=R2(j.current,$);if(!K)return;let{rowId:Q}=K;G.current.add(Q),Y((q)=>$4(q,Q).items),V(Q,Bj(Z)).then(()=>{X()}).catch((q)=>{console.warn("[queue] Failed to steer queued item:",q);let B=yj("steer");L(B.title,B.detail,"warning"),G.current.delete(Q),X()})}function dN(_){let{queuedItem:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,currentChatJid:Z,refreshQueueState:X,setFollowupQueueItems:Y,showIntentToast:L,clearQueuedSteerStateIfStale:V,removeAgentQueueItem:K}=_,Q=R2(j.current,$);if(!Q)return;let{rowId:q}=Q;G.current.add(q),V?.(Q.remainingQueueCount),Y((B)=>$4(B,q).items),K(q,Bj(Z)).then(()=>{X()}).catch((B)=>{console.warn("[queue] Failed to remove queued item:",B);let N=yj("remove");L(N.title,N.detail,"warning"),G.current.delete(q),X()})}function iN(_){let{widget:$,dismissedLiveWidgetKeysRef:j,setFloatingWidget:G}=_;if(!$||typeof $!=="object")return;let Z=O1($);if(Z)j.current.delete(Z);G(bQ($,new Date().toISOString()))}function oN(_){let{dismissedLiveWidgetKeysRef:$,setFloatingWidget:j}=_;j((G)=>{let Z=vQ(G);if(Z.dismissedSessionKey)$.current.add(Z.dismissedSessionKey);return Z.nextWidget})}function sN(_){let{event:$,widget:j,currentChatJid:G,isComposeBoxAgentActive:Z,setFloatingWidget:X,handleCloseFloatingWidget:Y,handleMessageResponse:L,showIntentToast:V,sendAgentMessage:K,buildFloatingWidgetDashboardSnapshot:Q}=_,q=typeof $?.kind==="string"?$.kind:"",B=O1(j);if(!q||!B)return;if(q==="widget.close"){Y();return}if(q==="widget.submit"){let N=oL($?.payload),U=sL($?.payload),E=new Date().toISOString();if(X((D)=>lQ(D,B,{kind:q,payload:$?.payload||null,submittedAt:E,submissionText:N})),!N){if(V("Widget submission received","The widget submitted data without a message payload yet.","info",3500),U)Y();return}(async()=>{try{let D=await K("default",N,null,[],Z?"queue":null,G);L(D),X((k)=>kj(k,B,{submittedAt:E,submissionText:N,queued:D?.queued||null}));let H=vN(D?.queued);if(V(H.title,H.detail,H.kind,H.durationMs),U)Y()}catch(D){X((k)=>kj(k,B,{submittedAt:E,submissionText:N,errorMessage:D?.message||"Could not send the widget message."}));let H=mN(D?.message);V(H.title,H.detail,H.kind,H.durationMs)}})();return}if(q==="widget.ready"||q==="widget.request_refresh"){let N=new Date().toISOString(),U=cN($?.payload||null,j?.runtimeState?.refreshCount);if(X((E)=>hQ(E,B,{kind:q,payload:$?.payload||null,eventAt:N,nextRefreshCount:U.nextRefreshCount,shouldBuildDashboard:U.shouldBuildDashboard})),q==="widget.request_refresh")if(U.shouldBuildDashboard)(async()=>{try{let E=await Q($?.payload||null);X((H)=>rQ(H,B,{dashboard:E,at:new Date().toISOString(),count:U.nextRefreshCount,echo:$?.payload||null}));let D=lN();V(D.title,D.detail,D.kind,D.durationMs)}catch(E){X((H)=>pQ(H,B,{errorMessage:E?.message||"Could not build dashboard.",at:new Date().toISOString(),count:U.nextRefreshCount}));let D=hN(E?.message);V(D.title,D.detail,D.kind,D.durationMs)}})();else{let E=rN();V(E.title,E.detail,E.kind,E.durationMs)}}}function lk(_,$=nN){$(_)}function hk(_,$=dN){$(_)}function rk(_,$,j=RQ){j({response:_,refreshActiveChatAgents:$.refreshActiveChatAgents,refreshCurrentChatBranches:$.refreshCurrentChatBranches,refreshContextUsage:$.refreshContextUsage,refreshAutoresearchStatus:$.refreshAutoresearchStatus,refreshQueueState:$.refreshQueueState})}function aN(_){let{currentChatJid:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,refreshQueueState:Z,setFollowupQueueItems:X,showIntentToast:Y,clearQueuedSteerStateIfStale:L,steerAgentQueueItem:V,removeAgentQueueItem:K,refreshActiveChatAgents:Q,refreshCurrentChatBranches:q,refreshContextUsage:B,refreshAutoresearchStatus:N}=_,U=R((k)=>{lk({queuedItem:k,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,currentChatJid:$,refreshQueueState:Z,setFollowupQueueItems:X,showIntentToast:Y,steerAgentQueueItem:V,removeAgentQueueItem:K})},[$,G,j,Z,K,X,Y,V]),E=R((k)=>{hk({queuedItem:k,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,currentChatJid:$,refreshQueueState:Z,setFollowupQueueItems:X,showIntentToast:Y,clearQueuedSteerStateIfStale:L,steerAgentQueueItem:V,removeAgentQueueItem:K})},[L,$,G,j,Z,K,X,Y,V]),D=R(async(k,O)=>{X((W)=>{if(!Array.isArray(W)||k<0||O<0||k>=W.length||O>=W.length||k===O)return W;let I=[...W],[x]=I.splice(k,1);return I.splice(O,0,x),I});try{let{reorderAgentQueueItem:W}=await Promise.resolve().then(() => (I_(),N5));await W(k,O,$)}catch(W){console.warn("Failed to persist queue reorder:",W),Z()}},[$,Z,X]),H=R((k)=>{rk(k,{refreshActiveChatAgents:Q,refreshCurrentChatBranches:q,refreshContextUsage:B,refreshAutoresearchStatus:N,refreshQueueState:Z})},[Q,N,B,q,Z]);return{handleInjectQueuedFollowup:U,handleRemoveQueuedFollowup:E,handleMoveQueuedFollowup:D,handleMessageResponse:H}}M0();function tN(_){let{btwAbortRef:$,setBtwSession:j}=_;if($.current)$.current.abort(),$.current=null;j(null)}async function eN(_){let{question:$,currentChatJid:j,streamSidePrompt:G,resolveBtwChatJid:Z,showIntentToast:X,btwAbortRef:Y,setBtwSession:L}=_,V=String($||"").trim();if(!V)return X("BTW needs a question","Usage: /btw <question>","warning"),!0;if(Y.current)Y.current.abort();let K=new AbortController;Y.current=K,L({question:V,answer:"",thinking:"",error:null,model:null,status:"running"});try{let Q=await G(V,{signal:K.signal,chatJid:Z(j),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(q)=>{if(q==="side_prompt_start")L((B)=>B?{...B,status:"running"}:B)},onThinkingDelta:(q)=>{L((B)=>B?{...B,thinking:`${B.thinking||""}${q||""}`}:B)},onTextDelta:(q)=>{L((B)=>B?{...B,answer:`${B.answer||""}${q||""}`}:B)}});if(Y.current!==K)return!0;L((q)=>q?{...q,answer:Q?.result||q.answer||"",thinking:Q?.thinking||q.thinking||"",model:Q?.model||null,status:"success",error:null}:q)}catch(Q){if(K.signal.aborted)return!0;L((q)=>q?{...q,status:"error",error:Q?.payload?.error||Q?.message||"BTW request failed."}:q)}finally{if(Y.current===K)Y.current=null}return!0}async function _B(_){let{content:$,parseBtwCommand:j,closeBtwPanel:G,runBtwPrompt:Z,showIntentToast:X}=_,Y=j($);if(!Y)return!1;if(Y.type==="help")return X("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(Y.type==="clear")return G(),X("BTW cleared","Closed the side conversation panel.","info"),!0;if(Y.type==="ask")return await Z(Y.question),!0;return!1}async function $B(_){let{btwSession:$,buildBtwInjectionText:j,isComposeBoxAgentActive:G,currentChatJid:Z,sendAgentMessage:X,handleMessageResponse:Y,showIntentToast:L}=_,V=j($);if(!V)return!1;try{let K=await X("default",V,null,[],G?"queue":null,Z);return Y(K),L(K?.queued==="followup"?"BTW queued":"BTW injected",K?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500),!0}catch(K){return L("BTW inject failed",K?.message||"Could not inject BTW answer into chat.","warning"),!1}}async function pk(_){let $=typeof _==="string"?_:"";if(!$)return!1;let j=null;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch(G){j=G}try{let G=document.createElement("textarea");G.value=$,G.setAttribute("readonly",""),G.style.position="fixed",G.style.opacity="0",G.style.pointerEvents="none",document.body.appendChild(G),G.select(),G.setSelectionRange(0,G.value.length);let Z=document.execCommand("copy");return document.body.removeChild(G),Z}catch(G){return console.debug("[sidepanel] Clipboard copy failed after falling back from navigator.clipboard.",G,{clipboardApiAvailable:Boolean(navigator.clipboard?.writeText),clipboardApiError:j}),!1}}function nk(_){let{dismissedLiveWidgetKeysRef:$,setFloatingWidget:j}=_;$.current.clear(),j(null)}function jB(_){let{currentChatJid:$,currentRootChatJid:j,isComposeBoxAgentActive:G,showIntentToast:Z,setPendingExtensionPanelActions:X,refreshAutoresearchStatus:Y,stopAutoresearch:L,dismissAutoresearch:V,streamSidePrompt:K,btwAbortRef:Q,btwSession:q,setBtwSession:B,sendAgentMessage:N,handleMessageResponse:U,dismissedLiveWidgetKeysRef:E,setFloatingWidget:D,getAgentStatus:H,getAgentContext:k,getAgentQueueState:O,getAgentModels:W,getActiveChatAgents:I,getChatBranches:x,getTimeline:J,rawPosts:A,activeChatAgents:z,currentChatBranches:T,contextUsage:w,followupQueueItemsRef:y,activeModel:P,activeThinkingLevel:f,supportsThinking:b,isAgentTurnActive:c}=_,h=R(async(V0,q0)=>{let k0=typeof V0?.key==="string"?V0.key:"",s=typeof q0?.key==="string"?q0.key:"",X0=Oj(k0,s);if(!k0||!s)return;X((D0)=>jQ(D0,k0,s));try{let D0=await ZQ({panel:V0,action:q0,currentChatJid:$,stopAutoresearch:L,dismissAutoresearch:V,writeClipboard:async(C0)=>{if(!await pk(C0))throw Error("Clipboard access is unavailable.")}});if(D0.refreshAutoresearchStatus)Y();if(D0.toast)Z(D0.toast.title,D0.toast.detail,D0.toast.kind,D0.toast.durationMs)}catch(D0){Z("Panel action failed",D0?.message||"Could not complete that action.","warning")}finally{X((D0)=>GQ(D0,X0))}},[$,V,Y,X,Z,L]),_0=R(()=>{tN({btwAbortRef:Q,setBtwSession:B})},[Q,B]),v=R(async(V0)=>{return await eN({question:V0,currentChatJid:$,streamSidePrompt:K,resolveBtwChatJid:gL,showIntentToast:Z,btwAbortRef:Q,setBtwSession:B})},[Q,$,B,Z,K]),e=R(async({content:V0})=>{return await _B({content:V0,parseBtwCommand:uL,closeBtwPanel:_0,runBtwPrompt:v,showIntentToast:Z})},[_0,v,Z]),z0=R(()=>{if(q?.question)v(q.question)},[q,v]),j0=R(async()=>{await $B({btwSession:q,buildBtwInjectionText:mL,isComposeBoxAgentActive:G,currentChatJid:$,sendAgentMessage:N,handleMessageResponse:U,showIntentToast:Z})},[q,$,U,G,N,Z]),$0=R(async(V0=null)=>{return pN({requestPayload:V0,currentChatJid:$,currentRootChatJid:j,getAgentStatus:H,getAgentContext:k,getAgentQueueState:O,getAgentModels:W,getActiveChatAgents:I,getChatBranches:x,getTimeline:J,rawPosts:A,activeChatAgents:z,currentChatBranches:T,contextUsage:w,followupQueueItems:y.current,activeModel:P,activeThinkingLevel:f,supportsThinking:b,isAgentTurnActive:c})},[z,P,f,w,T,$,j,y,I,k,W,O,H,x,J,c,A,b]),L0=R((V0)=>{iN({widget:V0,dismissedLiveWidgetKeysRef:E,setFloatingWidget:D})},[E,D]),B0=R(()=>{oN({dismissedLiveWidgetKeysRef:E,setFloatingWidget:D})},[E,D]),t=R((V0,q0)=>{sN({event:V0,widget:q0,currentChatJid:$,isComposeBoxAgentActive:G,setFloatingWidget:D,handleCloseFloatingWidget:B0,handleMessageResponse:U,showIntentToast:Z,sendAgentMessage:N,buildFloatingWidgetDashboardSnapshot:$0})},[$0,$,B0,U,G,N,D,Z]);return u(()=>{nk({dismissedLiveWidgetKeysRef:E,setFloatingWidget:D})},[$,E,D]),{handleExtensionPanelAction:h,closeBtwPanel:_0,handleBtwIntercept:e,handleBtwRetry:z0,handleBtwInject:j0,handleOpenFloatingWidget:L0,handleCloseFloatingWidget:B0,handleFloatingWidgetEvent:t}}M0();function dk(_){let{hasDockPanes:$,chatOnlyMode:j}=_;return Boolean($&&!j)}function ik(_){return!_}function GB(_){let{hasDockPanes:$,chatOnlyMode:j,toggleDock:G,toggleZenMode:Z,exitZenMode:X,zenMode:Y,previousChat:L,nextChat:V}=_;u(()=>{if(!dk({hasDockPanes:$,chatOnlyMode:j}))return;return UN(G)},[j,$,G]),u(()=>{if(!ik(j))return;return HN({toggleZenMode:Z,exitZenMode:X,zenMode:Y,isZenModeActive:()=>Y})},[j,X,Z,Y]),u(()=>{if(typeof L!=="function"&&typeof V!=="function")return;return EN({previousChat:L,nextChat:V})},[V,L]),u(()=>zN(),[]),u(()=>DN(),[])}function ok(_){return Boolean(_&&typeof _.closest==="function")}function ZB(_=typeof window<"u"?window:null){if(!_||typeof _.getSelection!=="function")return!1;try{let $=_.getSelection();if(!$||$.isCollapsed)return!1;return String($.toString()||"").trim().length>0}catch{return!1}}function sk(){return{active:!1,horizontalLocked:!1,cancelled:!1,startX:0,startY:0,lastX:0,lastY:0,startedAt:0}}function ak(){return{lastTriggeredAt:0,accumX:0}}function Tj(_){if(!_)return;_.active=!1,_.horizontalLocked=!1,_.cancelled=!1,_.startX=0,_.startY=0,_.lastX=0,_.lastY=0,_.startedAt=0}var tk=["input","textarea","select","button","label","a[href]",'[contenteditable="true"]','[role="button"]',"[data-no-chat-swipe]",".compose-box",".compose-model-popup",".compose-session-popup",".workspace-explorer",".editor-pane-container",".dock-panel",".terminal-pane-content",".attachment-preview-modal",".rename-branch-overlay",".agent-request-modal",".adaptive-card-container",".adaptive-card-container input",".adaptive-card-container textarea",".adaptive-card-container select",".adaptive-card-container button"].join(", "),ek=[".agent-thinking",".agent-status-panel",".agent-thinking-intent"].join(", ");function XB(_){if(!_||!ok(_))return!1;let $=_.closest(tk);if(!$)return!0;return Boolean($.closest(ek))}function LB(_,$){if(!Array.isArray(_))return $?[$]:[];let j=new Set,G=_.filter((X)=>Boolean(X&&typeof X==="object")).filter((X)=>{let Y=typeof X.chat_jid==="string"?X.chat_jid.trim():"";if(!Y||j.has(Y))return!1;if(X.archived_at)return!1;return j.add(Y),!0});G.sort((X,Y)=>{if(Boolean(X.is_active)!==Boolean(Y.is_active))return X.is_active?-1:1;return String(X.chat_jid).localeCompare(String(Y.chat_jid))});let Z=G.map((X)=>String(X.chat_jid).trim());if($&&!j.has($))Z.unshift($);return Z}function xj(_){let $=LB(_.candidates,_.currentChatJid);if($.length<=1)return null;let j=$.indexOf(_.currentChatJid);if(j<0)return $[0]??null;let G=_.direction==="next"?(j+1)%$.length:(j-1+$.length)%$.length;return $[G]??null}function YB(_,$){let j=_.find((Z)=>Z.chat_jid===$);if(!j)return $.replace(/^[^:]+:/,"");return(typeof j.agent_name==="string"?j.agent_name.trim():"")||$.replace(/^[^:]+:/,"")}function _y(_){let $=LB(_.candidates,_.currentChatJid);if($.length<=1)return{prev:null,next:null};let j=$.indexOf(_.currentChatJid);if(j<0)return{prev:null,next:null};let G=$[(j-1+$.length)%$.length],Z=$[(j+1)%$.length];return{prev:{chatJid:G,name:YB(_.candidates,G)},next:{chatJid:Z,name:YB(_.candidates,Z)}}}function $y(_){let $=Number.isFinite(_.minDistancePx)?Number(_.minDistancePx):72,j=Number.isFinite(_.axisRatio)?Number(_.axisRatio):1.35;return Math.abs(_.dx)>=$&&Math.abs(_.dx)>Math.abs(_.dy)*j}function jy(_){let $=document.querySelector(".chat-swipe-indicator");if(!$)$=document.createElement("div"),$.className="chat-swipe-indicator",$.innerHTML='<span class="chat-swipe-chevron"></span><span class="chat-swipe-name"></span>',document.body.appendChild($);return $}function Gy(_,$,j,G){let Z=Math.abs($),X=Math.min(Z/100,1),Y=Z>=72;_.style.display="flex",_.style.opacity=String(Math.min(X*2.5,1)),_.classList.toggle("chat-swipe-indicator--ready",Y);let L=$<0,V=L?G.next:G.prev,K=_.querySelector(".chat-swipe-chevron");if(K)K.textContent=L?"›":"‹",K.style.order=L?"2":"0";let Q=_.querySelector(".chat-swipe-name");if(Q)Q.textContent=V?.name??""}function R5(_){_.style.display="none",_.style.opacity="0"}function KB(_){let{timelineRef:$,activeChatAgents:j,currentChatJid:G,onSwitch:Z,isIOSDevice:X,isLikelySafari:Y}=_,L=$.current;if(!L)return()=>{};let V=X(),K=typeof Y==="function"?Y():!1;if(!V&&!K)return()=>{};let Q=sk(),q=ak(),B=null,N={prev:null,next:null},U=!1;function E(){N=_y({candidates:j,currentChatJid:G})}E();function D(){if(!B)B=jy(L);return B}function H(A){let z=A==="next"?N.next:N.prev;if(z)Z(z.chatJid)}function k(A){U=String(A.pointerType||"").toLowerCase()==="pen"}function O(A){if(Tj(Q),E(),!V)return;if(A.touches.length!==1)return;if(U)return;if(ZB())return;if(!XB(A.target))return;let z=A.touches[0];Q.active=!0,Q.startX=z.clientX,Q.startY=z.clientY,Q.lastX=z.clientX,Q.lastY=z.clientY,Q.startedAt=Date.now()}function W(A){if(!Q.active||Q.cancelled)return;if(ZB()){Q.cancelled=!0,R5(D());return}let z=A.touches[0];if(!z)return;Q.lastX=z.clientX,Q.lastY=z.clientY;let T=Q.lastX-Q.startX,w=Q.lastY-Q.startY;if(!Q.horizontalLocked){if(Math.abs(w)>16&&Math.abs(w)>=Math.abs(T)){Q.cancelled=!0,R5(D());return}if(Math.abs(T)>12&&Math.abs(T)>Math.abs(w)*1.15)Q.horizontalLocked=!0}if(Q.horizontalLocked){if(A.cancelable)A.preventDefault();Gy(D(),T,L.clientWidth,N)}}function I(){if(!Q.active)return;let A=Q.lastX-Q.startX,z=Q.lastY-Q.startY,T=!Q.cancelled&&$y({dx:A,dy:z});if(R5(D()),Tj(Q),T)H(A<0?"next":"prev")}function x(){R5(D()),Tj(Q)}function J(A){if(V)return;if(!K)return;if(!XB(A.target))return;let{deltaX:z,deltaY:T}=A;if(!Number.isFinite(z)||Math.abs(z)<72)return;if(Math.abs(z)<=Math.abs(T)*1.35)return;if(A.cancelable)A.preventDefault();let w=Date.now();if(w-q.lastTriggeredAt<450)return;q.lastTriggeredAt=w,H(z>0?"next":"prev")}return L.addEventListener("pointerdown",k,{passive:!0}),L.addEventListener("touchstart",O,{passive:!0}),L.addEventListener("touchmove",W,{passive:!1}),L.addEventListener("touchend",I,{passive:!0}),L.addEventListener("touchcancel",x,{passive:!0}),L.addEventListener("wheel",J,{passive:!1}),()=>{if(L.removeEventListener("pointerdown",k),L.removeEventListener("touchstart",O),L.removeEventListener("touchmove",W),L.removeEventListener("touchend",I),L.removeEventListener("touchcancel",x),L.removeEventListener("wheel",J),B)R5(B),B.remove(),B=null}}function Zy(_){return{currentChatJid:_.currentChatJid,followupQueueItemsRef:_.followupQueueItemsRef,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,refreshQueueState:_.refreshQueueState,setFollowupQueueItems:_.setFollowupQueueItems,showIntentToast:_.showIntentToast,clearQueuedSteerStateIfStale:_.clearQueuedSteerStateIfStale,steerAgentQueueItem:_.steerAgentQueueItem,removeAgentQueueItem:_.removeAgentQueueItem,refreshActiveChatAgents:_.refreshActiveChatAgents,refreshCurrentChatBranches:_.refreshCurrentChatBranches,refreshContextUsage:_.refreshContextUsage,refreshAutoresearchStatus:_.refreshAutoresearchStatus}}function Xy(_){return{currentChatJid:_.currentChatJid,currentRootChatJid:_.currentRootChatJid,isComposeBoxAgentActive:_.isComposeBoxAgentActive,showIntentToast:_.showIntentToast,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,refreshAutoresearchStatus:_.refreshAutoresearchStatus,stopAutoresearch:_.stopAutoresearch,dismissAutoresearch:_.dismissAutoresearch,streamSidePrompt:_.streamSidePrompt,btwAbortRef:_.btwAbortRef,btwSession:_.btwSession,setBtwSession:_.setBtwSession,sendAgentMessage:_.sendAgentMessage,handleMessageResponse:_.handleMessageResponse,dismissedLiveWidgetKeysRef:_.dismissedLiveWidgetKeysRef,setFloatingWidget:_.setFloatingWidget,getAgentStatus:_.getAgentStatus,getAgentContext:_.getAgentContext,getAgentQueueState:_.getAgentQueueState,getAgentModels:_.getAgentModels,getActiveChatAgents:_.getActiveChatAgents,getChatBranches:_.getChatBranches,getTimeline:_.getTimeline,rawPosts:_.rawPosts,activeChatAgents:_.activeChatAgents,currentChatBranches:_.currentChatBranches,contextUsage:_.contextUsage,followupQueueItemsRef:_.followupQueueItemsRef,activeModel:_.activeModel,activeThinkingLevel:_.activeThinkingLevel,supportsThinking:_.supportsThinking,isAgentTurnActive:_.isAgentTurnActive}}function Yy(_){return{setWorkspaceOpen:_.setWorkspaceOpen,currentChatJid:_.currentChatJid,chatOnlyMode:_.chatOnlyMode,navigate:_.navigate,currentBranchRecord:_.currentBranchRecord,renameBranchInFlightRef:_.renameBranchInFlightRef,renameBranchLockUntilRef:_.renameBranchLockUntilRef,getFormLock:_.getFormLock,setRenameBranchNameDraft:_.setRenameBranchNameDraft,setIsRenameBranchFormOpen:_.setIsRenameBranchFormOpen,setIsRenamingBranch:_.setIsRenamingBranch,renameChatBranch:_.renameChatBranch,refreshActiveChatAgents:_.refreshActiveChatAgents,refreshCurrentChatBranches:_.refreshCurrentChatBranches,showIntentToast:_.showIntentToast,currentChatBranches:_.currentChatBranches,activeChatAgents:_.activeChatAgents,pruneChatBranch:_.pruneChatBranch,purgeChatBranch:_.purgeChatBranch,restoreChatBranch:_.restoreChatBranch,branchLoaderMode:_.branchLoaderMode,branchLoaderSourceChatJid:_.branchLoaderSourceChatJid,forkChatBranch:_.forkChatBranch,createRootChatSession:_.createRootChatSession,setBranchLoaderState:_.setBranchLoaderState,currentRootChatJid:_.currentRootChatJid,isWebAppMode:_.isWebAppMode,getActiveChatAgents:_.getActiveChatAgents,getChatBranches:_.getChatBranches,setActiveChatAgents:_.setActiveChatAgents,setCurrentChatBranches:_.setCurrentChatBranches,openEditor:_.openEditor,activateTab:_.activateTab,tabStripActiveId:_.tabStripActiveId,editorInstanceRef:_.editorInstanceRef,dockInstanceRef:_.dockInstanceRef,terminalTabPath:_.terminalTabPath,tabPaneOverrides:_.tabPaneOverrides,buildPaneDetachTransfer:_.buildPaneDetachTransfer,registerDetachedPaneWindow:_.registerDetachedPaneWindow,dockVisible:_.dockVisible,resolveTab:_.resolveTab,closeTab:_.closeTab,setDockVisible:_.setDockVisible,editorOpen:_.editorOpen,shellElement:_.shellElement,editorWidthRef:_.editorWidthRef,dockHeightRef:_.dockHeightRef,sidebarWidthRef:_.sidebarWidthRef,readStoredNumber:_.readStoredNumber}}function Ly(_){return{hasDockPanes:_.hasDockPanes,chatOnlyMode:_.chatOnlyMode,toggleDock:_.toggleDock,toggleZenMode:_.toggleZenMode,exitZenMode:_.exitZenMode,zenMode:_.zenMode,previousChat:()=>{let $=xj({candidates:_.activeChatAgents,currentChatJid:_.currentChatJid,direction:"prev"});if($)_.handleBranchPickerChange?.($)},nextChat:()=>{let $=xj({candidates:_.activeChatAgents,currentChatJid:_.currentChatJid,direction:"next"});if($)_.handleBranchPickerChange?.($)}}}function VB(_){let $=aN(Zy(_)),j=jB(Xy({..._,handleMessageResponse:$.handleMessageResponse})),G=gN(Yy(_));return GB(Ly({..._,handleBranchPickerChange:G.handleBranchPickerChange})),{followupActions:$,sidepanelActions:j,branchPaneActions:G}}function Ky(_,$){return Boolean(_||$!==null)}function Vy(_){return{..._.agentStatusLifecycleBundle,..._.actionBundle,timelineViewActions:_.timelineViewActions,isComposeBoxAgentActive:_.isComposeBoxAgentActive}}function qy(_,$){let{routeState:j,searchState:G,shellState:Z,timeline:X,interaction:Y,paneRuntime:L,refs:V,setters:K,services:Q,helpers:q}=_;return{currentChatJid:j.currentChatJid,activeChatJidRef:V.activeChatJidRef,queueRefreshGenRef:V.queueRefreshGenRef,dismissedQueueRowIdsRef:V.dismissedQueueRowIdsRef,getAgentQueueState:Q.getAgentQueueState,setFollowupQueueItems:K.setFollowupQueueItems,clearQueuedSteerStateIfStale:Y.clearQueuedSteerStateIfStale,getAgentContext:Q.getAgentContext,setContextUsage:K.setContextUsage,getAutoresearchStatus:Q.getAutoresearchStatus,setExtensionStatusPanels:K.setExtensionStatusPanels,setPendingExtensionPanelActions:K.setPendingExtensionPanelActions,setExtensionWorkingState:K.setExtensionWorkingState,getAgentStatus:Q.getAgentStatus,wasAgentActiveRef:V.wasAgentActiveRef,viewStateRef:V.viewStateRef,refreshTimeline:X.refreshTimeline,clearAgentRunState:Y.clearAgentRunState,agentStatusRef:V.agentStatusRef,pendingRequestRef:V.pendingRequestRef,thoughtBufferRef:V.thoughtBufferRef,draftBufferRef:V.draftBufferRef,previewResyncPendingRef:V.previewResyncPendingRef,previewResyncGenerationRef:V.previewResyncGenerationRef,setAgentStatus:K.setAgentStatus,setAgentDraft:K.setAgentDraft,setAgentPlan:K.setAgentPlan,setAgentThought:K.setAgentThought,setPendingRequest:K.setPendingRequest,setActiveTurn:Y.setActiveTurn,noteAgentActivity:Y.noteAgentActivity,showLastActivity:Y.showLastActivity,clearLastActivityFlag:Y.clearLastActivityFlag,isAgentRunningRef:V.isAgentRunningRef,currentTurnIdRef:V.currentTurnIdRef,silentRecoveryRef:V.silentRecoveryRef,silenceRefreshMs:Q.silenceRefreshMs,lastAgentEventRef:V.lastAgentEventRef,lastSilenceNoticeRef:V.lastSilenceNoticeRef,silenceWarningMs:Q.silenceWarningMs,silenceFinalizeMs:Q.silenceFinalizeMs,isCompactionStatus:Q.isCompactionStatus,serverVersionContext:{currentAppAssetVersion:Q.currentAppAssetVersion,staleUiVersionRef:V.staleUiVersionRef,staleUiReloadScheduledRef:V.staleUiReloadScheduledRef,tabStoreHasUnsaved:Q.tabStoreHasUnsaved,isAgentRunningRef:V.isAgentRunningRef,pendingRequestRef:V.pendingRequestRef,showIntentToast:$},setConnectionStatus:K.setConnectionStatus,setStateAccessFailed:K.setStateAccessFailed,hasConnectedOnceRef:V.hasConnectedOnceRef,getAgents:Q.getAgents,setAgents:K.setAgents,setUserProfile:K.setUserProfile,applyBranding:Y.applyBranding,readStoredNumber:q.readStoredNumber,sidebarWidthRef:V.sidebarWidthRef,appShellRef:V.appShellRef,currentRootChatJid:j.currentRootChatJid,getAgentModels:Q.getAgentModels,getActiveChatAgents:Q.getActiveChatAgents,getChatBranches:Q.getChatBranches,setActiveChatAgents:K.setActiveChatAgents,setCurrentChatBranches:K.setCurrentChatBranches,setActiveModel:K.setActiveModel,setActiveThinkingLevel:K.setActiveThinkingLevel,setSupportsThinking:K.setSupportsThinking,setActiveModelUsage:K.setActiveModelUsage,setAgentModelsPayload:K.setAgentModelsPayload,setHasLoadedAgentModels:K.setHasLoadedAgentModels,agentsRef:V.agentsRef,currentHashtag:G.currentHashtag,searchQuery:G.searchQuery,searchScope:G.searchScope,loadPosts:X.loadPosts,searchPosts:Q.searchPosts,setPosts:X.setPosts,setHasMore:X.setHasMore,scrollToBottom:X.scrollToBottom,paneStateOwnerChatJidRef:V.paneStateOwnerChatJidRef,chatPaneStateByChatRef:V.chatPaneStateByChatRef,snapshotCurrentChatPaneState:Y.snapshotCurrentChatPaneState,restoreChatPaneState:Y.restoreChatPaneState,setFloatingWidget:K.setFloatingWidget,dismissedLiveWidgetKeysRef:V.dismissedLiveWidgetKeysRef,posts:X.posts,scrollToMessage:Y.composeReferenceActions.scrollToMessage,draftThrottleRef:V.draftThrottleRef,thoughtThrottleRef:V.thoughtThrottleRef,followupQueueItemsRef:V.followupQueueItemsRef,scrollToBottomRef:X.scrollToBottomRef,hasMoreRef:X.hasMoreRef,loadMoreRef:X.loadMoreRef,lastAgentResponseRef:V.lastAgentResponseRef,notifyForFinalResponse:Y.notifyForFinalResponse,setSteerQueuedTurnId:K.setSteerQueuedTurnId,refreshActiveEditorFromWorkspace:L.refreshActiveEditorFromWorkspace,showIntentToast:$,removeStalledPost:Y.recoveryCallbacks.removeStalledPost,preserveTimelineScrollTop:X.preserveTimelineScrollTop,finalizeStalledResponse:()=>{K.setExtensionWorkingState({message:null,indicator:null,visible:!0}),Y.recoveryCallbacks.finalizeStalledResponse()},connectionStatus:Z.connectionStatus,agentStatus:Q.agentStatus,thoughtExpandedRef:V.thoughtExpandedRef,draftExpandedRef:V.draftExpandedRef,steerQueuedTurnIdRef:V.steerQueuedTurnIdRef}}function qB(_){let{routeState:$,searchState:j,shellState:G,timeline:Z,interaction:X,paneRuntime:Y,refs:L,setters:V,services:K,helpers:Q}=_,q=X.composeReferenceActions.showIntentToast,B=tq({currentHashtag:j.currentHashtag,searchQuery:j.searchQuery,searchOpen:j.searchOpen,searchScope:j.searchScope,currentChatJid:$.currentChatJid,currentRootChatJid:$.currentRootChatJid,posts:Z.posts,loadPosts:Z.loadPosts,searchPosts:K.searchPosts,setCurrentHashtag:j.setCurrentHashtag,setSearchQuery:j.setSearchQuery,setSearchOpen:j.setSearchOpen,setSearchScope:j.setSearchScope,setPosts:Z.setPosts,setHasMore:Z.setHasMore,preserveTimelineScrollTop:Z.preserveTimelineScrollTop,setRemovingPostIds:V.setRemovingPostIds,deletePost:K.deletePost,hasMoreRef:Z.hasMoreRef,loadMoreRef:Z.loadMoreRef}),N=YN(qy(_,q)),U=Ky(K.isAgentTurnActive,K.agentStatus),E=VB({currentChatJid:$.currentChatJid,followupQueueItemsRef:L.followupQueueItemsRef,dismissedQueueRowIdsRef:L.dismissedQueueRowIdsRef,setFollowupQueueItems:V.setFollowupQueueItems,showIntentToast:q,clearQueuedSteerStateIfStale:X.clearQueuedSteerStateIfStale,steerAgentQueueItem:K.steerAgentQueueItem,removeAgentQueueItem:K.removeAgentQueueItem,refreshQueueState:N.agentStatusLifecycle.refreshQueueState,refreshActiveChatAgents:N.chatRefreshLifecycle.refreshActiveChatAgents,refreshCurrentChatBranches:N.chatRefreshLifecycle.refreshCurrentChatBranches,refreshContextUsage:N.agentStatusLifecycle.refreshContextUsage,refreshAutoresearchStatus:N.agentStatusLifecycle.refreshAutoresearchStatus,currentRootChatJid:$.currentRootChatJid,isComposeBoxAgentActive:U,setPendingExtensionPanelActions:V.setPendingExtensionPanelActions,stopAutoresearch:K.stopAutoresearch,dismissAutoresearch:K.dismissAutoresearch,streamSidePrompt:K.streamSidePrompt,btwAbortRef:L.btwAbortRef,btwSession:G.btwSession,setBtwSession:V.setBtwSession,sendAgentMessage:K.sendAgentMessage,dismissedLiveWidgetKeysRef:L.dismissedLiveWidgetKeysRef,setFloatingWidget:V.setFloatingWidget,getAgentStatus:K.getAgentStatus,getAgentContext:K.getAgentContext,getAgentQueueState:K.getAgentQueueState,getAgentModels:K.getAgentModels,getActiveChatAgents:K.getActiveChatAgents,getChatBranches:K.getChatBranches,getTimeline:K.getTimeline,rawPosts:Z.rawPosts,activeChatAgents:G.activeChatAgents,currentChatBranches:G.currentChatBranches,contextUsage:G.contextUsage,activeModel:G.activeModel,activeThinkingLevel:G.activeThinkingLevel,supportsThinking:G.supportsThinking,isAgentTurnActive:K.isAgentTurnActive,chatOnlyMode:$.chatOnlyMode,navigate:$.navigate,setWorkspaceOpen:G.setWorkspaceOpen,currentBranchRecord:G.currentBranchRecord,renameBranchInFlightRef:L.renameBranchInFlightRef,renameBranchLockUntilRef:L.renameBranchLockUntilRef,getFormLock:Q.getFormLock,setRenameBranchNameDraft:V.setRenameBranchNameDraft,setIsRenameBranchFormOpen:V.setIsRenameBranchFormOpen,setIsRenamingBranch:V.setIsRenamingBranch,renameChatBranch:K.renameChatBranch,pruneChatBranch:K.pruneChatBranch,purgeChatBranch:K.purgeChatBranch,restoreChatBranch:K.restoreChatBranch,branchLoaderMode:$.branchLoaderMode,branchLoaderSourceChatJid:$.branchLoaderSourceChatJid,forkChatBranch:K.forkChatBranch,createRootChatSession:K.createRootChatSession,setBranchLoaderState:V.setBranchLoaderState,isWebAppMode:$.isWebAppMode,setActiveChatAgents:V.setActiveChatAgents,setCurrentChatBranches:V.setCurrentChatBranches,openEditor:K.openEditor,tabStripActiveId:K.tabStripActiveId,editorInstanceRef:Y.editorInstanceRef,dockInstanceRef:Y.dockInstanceRef,terminalTabPath:K.terminalTabPath,tabPaneOverrides:K.tabPaneOverrides,buildPaneDetachTransfer:Y.buildPaneDetachTransfer,registerDetachedPaneWindow:Y.registerDetachedPaneWindow,dockVisible:Y.dockVisible,resolveTab:K.resolveTab,closeTab:K.closeTab,setDockVisible:Y.setDockVisible,editorOpen:K.editorOpen,shellElement:L.appShellRef.current,editorWidthRef:L.editorWidthRef,dockHeightRef:L.dockHeightRef,sidebarWidthRef:L.sidebarWidthRef,readStoredNumber:Q.readStoredNumber,hasDockPanes:Y.hasDockPanes,toggleDock:Y.toggleDock,toggleZenMode:Y.toggleZenMode,exitZenMode:Y.exitZenMode,zenMode:Y.zenMode});return Vy({agentStatusLifecycleBundle:N,actionBundle:E,timelineViewActions:B,isComposeBoxAgentActive:U})}M0();I_();M0();function QB(_){try{return _?.focus?.(),!0}catch($){return!1}}function S5(_,$){if(!_||!$)return null;try{return _.getItem($)}catch{return null}}function Ij(_,$,j){if(!_||!$)return;try{_.setItem($,j)}catch{return}}function NB(_,$){if(!_||!$)return;try{_.removeItem($)}catch{return}}function BB(_="piclaw"){try{if(typeof crypto<"u"&&typeof crypto.randomUUID==="function")return`${_}-${crypto.randomUUID()}`}catch($){console.debug("[notification-delivery-coordinator] crypto.randomUUID threw; falling back to Math.random-based id.",$)}return`${_}-${Math.random().toString(36).slice(2)}-${Date.now().toString(36)}`}function Z4(_=typeof window<"u"?window:null){let $=_?.localStorage,j=S5($,"piclaw.notifications.deviceId");if(j)return j;let G=BB("device");return Ij($,"piclaw.notifications.deviceId",G),S5($,"piclaw.notifications.deviceId")||G}function u5(_=typeof window<"u"?window:null){let $=_?.sessionStorage,j=S5($,"piclaw.notifications.clientId");if(j)return j;let G=_?.__PICLAW_NOTIFICATION_CLIENT_ID__;if(typeof G==="string"&&G.trim())return G.trim();let Z=BB("client");if(Ij($,"piclaw.notifications.clientId",Z),_)_.__PICLAW_NOTIFICATION_CLIENT_ID__=S5($,"piclaw.notifications.clientId")||Z;return _?.__PICLAW_NOTIFICATION_CLIENT_ID__||Z}function FB(_,$){return`piclaw.notifications.presence.${String(_||"").trim()}:${String($||"").trim()}`}function Cj(_={}){let $=_.runtimeWindow??(typeof window<"u"?window:null),j=_.runtimeDocument??(typeof document<"u"?document:null),G=typeof _.chatJid==="string"&&_.chatJid.trim()?_.chatJid.trim():"",Z=typeof _.deviceId==="string"&&_.deviceId.trim()?_.deviceId.trim():Z4($),X=typeof _.clientId==="string"&&_.clientId.trim()?_.clientId.trim():u5($),Y=Number.isFinite(_.updatedAtMs)?Number(_.updatedAtMs):Date.now(),L=Boolean(typeof j?.hasFocus==="function"?j.hasFocus():!0),K=String(j?.visibilityState||"").trim().toLowerCase()==="hidden"?"hidden":"visible";return{deviceId:Z,clientId:X,chatJid:G,visibilityState:K,hasFocus:L,updatedAtMs:Y}}function UB(_,$=typeof window<"u"?window:null){let j=$?.localStorage,G=typeof _?.deviceId==="string"?_.deviceId.trim():"",Z=typeof _?.clientId==="string"?_.clientId.trim():"",X=typeof _?.chatJid==="string"?_.chatJid.trim():"";if(!j||!G||!Z||!X)return!1;return Ij(j,FB(G,Z),JSON.stringify({deviceId:G,clientId:Z,chatJid:X,visibilityState:_.visibilityState==="hidden"?"hidden":"visible",hasFocus:Boolean(_.hasFocus),updatedAtMs:Number.isFinite(_.updatedAtMs)?Number(_.updatedAtMs):Date.now()})),!0}function HB(_,$=typeof window<"u"?window:null){let j=$?.localStorage,G=typeof _?.deviceId==="string"?_.deviceId.trim():"",Z=typeof _?.clientId==="string"?_.clientId.trim():"";if(!j||!G||!Z)return!1;return NB(j,FB(G,Z)),!0}function Qy(_={}){let $=_.runtimeWindow??(typeof window<"u"?window:null),j=$?.localStorage,G=typeof _.deviceId==="string"&&_.deviceId.trim()?_.deviceId.trim():Z4($),Z=Number.isFinite(_.nowMs)?Number(_.nowMs):Date.now(),X=Number.isFinite(_.ttlMs)?Number(_.ttlMs):120000;if(!j||!G)return[];let Y=`piclaw.notifications.presence.${G}:`,L=[],V=[];for(let K=0;K<j.length;K+=1){let Q=j.key(K);if(!Q||!Q.startsWith(Y))continue;let q=S5(j,Q);if(!q){V.push(Q);continue}try{let B=JSON.parse(q),N=Number(B?.updatedAtMs);if(!Number.isFinite(N)||Z-N>X){V.push(Q);continue}let U=typeof B?.chatJid==="string"?B.chatJid.trim():"",E=typeof B?.clientId==="string"?B.clientId.trim():"";if(!U||!E){V.push(Q);continue}L.push({deviceId:G,clientId:E,chatJid:U,visibilityState:B?.visibilityState==="hidden"?"hidden":"visible",hasFocus:Boolean(B?.hasFocus),updatedAtMs:N})}catch{V.push(Q)}}return V.forEach((K)=>NB(j,K)),L.sort((K,Q)=>K.clientId.localeCompare(Q.clientId))}function EB(_={}){let $=Cj(_),j=$.chatJid;if(!j)return!1;let G=Qy({runtimeWindow:_.runtimeWindow,deviceId:$.deviceId,nowMs:$.updatedAtMs,ttlMs:_.ttlMs}).filter((Y)=>Y.chatJid===j&&Y.clientId!==$.clientId),Z=[$,...G];if(Z.some((Y)=>Y.visibilityState==="visible"))return!1;let X=[...Z].sort((Y,L)=>Y.clientId.localeCompare(L.clientId))[0]||null;return Boolean(X&&X.clientId===$.clientId)}function Ny(_=typeof window<"u"?window:null){return Boolean(_?.__PICLAW_NOTIFICATION_SOURCE_LABELS_ENABLED__)}function By(_,$="",j=typeof window<"u"?window:null){let G=typeof _==="string"&&_.trim()?_.trim():"PiClaw",Z=Ny(j)&&typeof $==="string"?$.trim():"";return Z?`${G} [${Z}]`:G}function Fy(_){let $=String(_||"").replace(/-/g,"+").replace(/_/g,"/"),j=$.padEnd(Math.ceil($.length/4)*4,"="),G=atob(j),Z=new Uint8Array(G.length);for(let X=0;X<G.length;X+=1)Z[X]=G.charCodeAt(X);return Z}function b8(_=typeof window<"u"?window:null){if(!_||!_.isSecureContext)return!1;return"serviceWorker"in _.navigator&&"PushManager"in _}async function zB(_){return await _.navigator.serviceWorker.register("/sw.js",{updateViaCache:"none"}),await _.navigator.serviceWorker.ready}async function Uy(_){let $=await zB(_),j=await $.pushManager.getSubscription();if(j)return j;let G=await E7(),Z=typeof G?.publicKey==="string"?G.publicKey.trim():"";if(!Z)throw Error("Missing web push public key.");return $.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Fy(Z)})}async function DB(_,$){if(!b8(_))return!1;let j=await Uy(_);return await D7(j.toJSON?j.toJSON():j,{deviceId:$}),!0}async function Hy(_,$){if(!b8(_))return!1;let G=await(await zB(_)).pushManager.getSubscription();if(!G)return!1;let Z=G.toJSON?G.toJSON():G;try{await z7(Z,{deviceId:$})}catch(X){console.warn("Failed to remove web push subscription from the server:",X)}try{await G.unsubscribe()}catch(X){console.warn("Failed to unsubscribe from web push notifications:",X)}return!0}function Ey(_,$={}){let j=$.runtimeWindow??(typeof window<"u"?window:null);if(!j?.fetch)return Promise.resolve(!1);return j.fetch("/agent/push/presence",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_),keepalive:Boolean($.keepalive)}).then(()=>!0).catch(()=>!1)}function Dy(_,$=typeof window<"u"?window:null){try{if($?.navigator?.sendBeacon){let j=new Blob([JSON.stringify(_)],{type:"application/json"});return $.navigator.sendBeacon("/agent/push/presence",j)}}catch(j){console.debug("[use-notifications] Ignoring sendBeacon failure for best-effort notification presence teardown.",j,{hasNavigator:Boolean($?.navigator)})}return!1}function WB(_={}){let $=typeof _?.chatJid==="string"&&_.chatJid.trim()?_.chatJid.trim():"web:default",[j,G]=C(!1),[Z,X]=C("default"),Y=g(!1),L=g(null),V=g(null);u(()=>{let N=F$("notificationsEnabled",!1);if(Y.current=N,G(N),typeof window<"u")L.current=Z4(window),V.current=u5(window);if(typeof Notification>"u")return;let U=Notification.permission;if(X(U),U==="denied"&&N){Y.current=!1,G(!1),V_("notificationsEnabled","false");return}if(U==="granted"&&N&&typeof window<"u"&&b8(window))DB(window,L.current||Z4(window)).catch((E)=>{console.warn("Failed to refresh stored web push subscription:",E)})},[]),u(()=>{Y.current=j},[j]),u(()=>{if(typeof window>"u"||typeof document>"u")return;let N=L.current||Z4(window),U=V.current||u5(window);L.current=N,V.current=U;let E=(O=!0,W="fetch")=>{let I=Cj({chatJid:$,runtimeWindow:window,runtimeDocument:document,deviceId:N,clientId:U});if(O)UB(I,window);else HB({deviceId:N,clientId:U},window);let x={device_id:N,client_id:U,chat_jid:$,visibility_state:I.visibilityState,has_focus:I.hasFocus,active:O};if(!O&&W==="beacon"&&Dy(x,window))return;Ey(x,{runtimeWindow:window,keepalive:!O||W==="keepalive"})},D=()=>E(!0),H=()=>E(!1,"beacon");E(!0);let k=setInterval(()=>E(!0),15000);return document.addEventListener("visibilitychange",D),window.addEventListener("focus",D),window.addEventListener("blur",D),window.addEventListener("pageshow",D),window.addEventListener("pagehide",H),window.addEventListener("beforeunload",H),()=>{clearInterval(k),document.removeEventListener("visibilitychange",D),window.removeEventListener("focus",D),window.removeEventListener("blur",D),window.removeEventListener("pageshow",D),window.removeEventListener("pagehide",H),window.removeEventListener("beforeunload",H),E(!1,"beacon")}},[$]);let K=R(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let N=Notification.requestPermission();if(N&&typeof N.then==="function")return N;return Promise.resolve(N)}catch(N){return console.debug("[use-notifications] Notification permission request threw; returning default permission state.",N),Promise.resolve("default")}},[]),Q=R(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){X("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let E=await K();if(X(E||"default"),E!=="granted"){Y.current=!1,G(!1),V_("notificationsEnabled","false");return}}let N=!Y.current;Y.current=N,G(N),V_("notificationsEnabled",String(N));let U=L.current||Z4(window);if(L.current=U,b8(window))try{if(N)await DB(window,U);else await Hy(window,U)}catch(E){if(console.warn("Failed to sync web push notifications:",E),N)alert("Notifications were enabled, but web push setup failed. If you are on iPhone or iPad, reopen PiClaw from the Home Screen and try again.")}},[K]),q=R((N,U,E={})=>{if(!Y.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let D=new Notification(By(N,E?.sourceLabel||"",window),{body:U});return D.onclick=()=>{QB(window)},!0}catch(D){return console.debug("[use-notifications] Local notification creation failed.",D,{title:typeof N==="string"?N:null}),!1}},[]),B=R((N)=>{if(typeof window>"u"||typeof document>"u")return!1;return EB({chatJid:typeof N==="string"&&N.trim()?N.trim():$,runtimeWindow:window,runtimeDocument:document,deviceId:L.current||Z4(window),clientId:V.current||u5(window)})},[$]);return{notificationsEnabled:j,notificationPermission:Z,toggleNotifications:Q,notify:q,shouldNotifyLocallyForChat:B}}function zy(_){let{activeChatAgents:$,currentChatBranches:j,currentChatJid:G}=_,Z=j.find((X)=>X?.chat_jid===G);if(Z)return Z;return $.find((X)=>X?.chat_jid===G)||null}function Wy(_){return{status:_?"running":"idle",message:_?"Preparing a new chat branch…":""}}function Oy(_,$){let j=typeof $?.root_chat_jid==="string"?$.root_chat_jid.trim():"";if(j)return j;let G=typeof _==="string"?_.trim():"";if(!G)return"web:default";let Z=G.indexOf(":branch:");if(Z<=0)return G;return G.slice(0,Z)||G}function OB(_){let{currentChatJid:$,branchLoaderMode:j}=_,[G,Z]=C("disconnected"),[X,Y]=C(!1),[L,V]=C(()=>f1()),[K,Q]=C(null),[q,B]=C(null),[N,U]=C(!1),[E,D]=C("current"),[H,k]=C([]),[O,W]=C([]),[I,x]=C([]),[J,A]=C(null),[z,T]=C({}),[w,y]=C(null),[P,f]=C(null),[b,c]=C(!1),[h,_0]=C(null),[v,e]=C(null),[z0,j0]=C(!1),[$0,L0]=C([]),[B0,t]=C([]),[V0,q0]=C(null),[k0,s]=C(()=>new Map),[X0,D0]=C(()=>new Set),[C0,g0]=C(()=>({message:null,indicator:null,visible:!0})),[n0,j_]=C([]),[m0,d0]=C(!1),[S0,o0]=C(()=>mV()),[v0,a0]=C(null),[h0,N_]=C(null),t0=g(new Set),b0=Y0(()=>zy({activeChatAgents:$0,currentChatBranches:B0,currentChatJid:$}),[$0,B0,$]),A0=Y0(()=>Oy($,b0),[b0,$]),L_=vV(E),[e0,O_]=C(()=>Wy(j)),H0=n0.length,f0=g(new Set),T0=g([]),i0=g(new Set),A_=g(0),K_=g({inFlight:!1,lastAttemptAt:0,turnId:null});f0.current=new Set(n0.map((g1)=>g1.row_id)),T0.current=n0;let{notificationsEnabled:E_,notificationPermission:H_,toggleNotifications:y_,notify:C_,shouldNotifyLocallyForChat:u_}=WB({chatJid:$}),[D_,G0]=C(()=>new Set),[W0,r]=C(()=>Xq({allowLegacyFallback:!0,defaultValue:!1})),[i,o]=C({name:"You",avatar_url:null,avatar_background:null}),Z0=g(null),K0=g(!1),J0=g(!1),c0=g(!1),R0=g(null),I0=g($),w0=g(new Map),p0=g($),U0=g(0),l0=g(0),Y_=g({}),G_=g({name:null,avatar_url:null}),u0=g({currentHashtag:null,searchQuery:null,searchOpen:!1}),z_=g(null),B_=g(null),d=g(0),O0=g(0),Z_=g(0),q_=g(null),r_=g(null),B1=g(null),g_=g(null),J1=g(0),P_=g({title:null,avatarBase:null}),M_=g(null),A1=g(!1),[W_,k_]=C(!1),F1=g(0),[m_,n_]=C(!1),[s_,U_]=C(""),x1=Y0(()=>a6(s_,b0?.agent_name||""),[b0?.agent_name,s_]),U1=g(null);return{connectionStatus:G,setConnectionStatus:Z,stateAccessFailed:X,setStateAccessFailed:Y,isWebAppMode:L,setIsWebAppMode:V,currentHashtag:K,setCurrentHashtag:Q,searchQuery:q,setSearchQuery:B,searchOpen:N,setSearchOpen:U,searchScope:E,setSearchScope:D,fileRefs:H,setFileRefs:k,folderRefs:O,setFolderRefs:W,messageRefs:I,setMessageRefs:x,intentToast:J,setIntentToast:A,agents:z,setAgents:T,activeModel:w,setActiveModel:y,activeThinkingLevel:P,setActiveThinkingLevel:f,supportsThinking:b,setSupportsThinking:c,activeModelUsage:h,setActiveModelUsage:_0,agentModelsPayload:v,setAgentModelsPayload:e,hasLoadedAgentModels:z0,setHasLoadedAgentModels:j0,activeChatAgents:$0,setActiveChatAgents:L0,currentChatBranches:B0,setCurrentChatBranches:t,contextUsage:V0,setContextUsage:q0,extensionStatusPanels:k0,setExtensionStatusPanels:s,pendingExtensionPanelActions:X0,setPendingExtensionPanelActions:D0,extensionWorkingState:C0,setExtensionWorkingState:g0,followupQueueItems:n0,setFollowupQueueItems:j_,isAgentTurnActive:m0,setIsAgentTurnActive:d0,btwSession:S0,setBtwSession:o0,floatingWidget:v0,setFloatingWidget:a0,attachmentPreview:h0,setAttachmentPreview:N_,dismissedLiveWidgetKeysRef:t0,currentBranchRecord:b0,currentRootChatJid:A0,activeSearchScopeLabel:L_,branchLoaderState:e0,setBranchLoaderState:O_,followupQueueCount:H0,followupQueueRowIdsRef:f0,followupQueueItemsRef:T0,dismissedQueueRowIdsRef:i0,queueRefreshGenRef:A_,silentRecoveryRef:K_,notificationsEnabled:E_,notificationPermission:H_,handleToggleNotifications:y_,notify:C_,shouldNotifyLocallyForChat:u_,removingPostIds:D_,setRemovingPostIds:G0,workspaceOpen:W0,setWorkspaceOpen:r,userProfile:i,setUserProfile:o,staleUiVersionRef:Z0,staleUiReloadScheduledRef:K0,hasConnectedOnceRef:J0,wasAgentActiveRef:c0,agentStatusRef:R0,activeChatJidRef:I0,chatPaneStateByChatRef:w0,paneStateOwnerChatJidRef:p0,draftThrottleRef:U0,thoughtThrottleRef:l0,agentsRef:Y_,userProfileRef:G_,viewStateRef:u0,timelineRef:z_,appShellRef:B_,sidebarWidthRef:d,editorWidthRef:O0,dockHeightRef:Z_,lastNotifiedIdRef:q_,lastAgentResponseRef:r_,btwAbortRef:B1,lastActivityTimerRef:g_,lastActivityTokenRef:J1,brandingRef:P_,intentToastTimerRef:M_,renameBranchInFlightRef:A1,isRenamingBranch:W_,setIsRenamingBranch:k_,renameBranchLockUntilRef:F1,isRenameBranchFormOpen:m_,setIsRenameBranchFormOpen:n_,renameBranchNameDraft:s_,setRenameBranchNameDraft:U_,renameBranchDraftState:x1,renameBranchNameInputRef:U1}}M0();M0();function Jy(_,$,j,G){if(!(_ instanceof Map)||_.size===0||!$||!j)return _;let Z=!1,X=new Map;for(let[Y,L]of _.entries()){let V=Y;if(G==="dir"){if(Y===$)V=j,Z=!0;else if(Y.startsWith(`${$}/`))V=`${j}${Y.slice($.length)}`,Z=!0}else if(Y===$)V=j,Z=!0;X.set(V,L)}return Z?X:_}function JB(_,$,j,G){if(!(_ instanceof Set)||_.size===0||!$||!j)return _;let Z=!1,X=new Set;for(let Y of _.values()){let L=Y;if(G==="dir"){if(Y===$)L=j,Z=!0;else if(Y.startsWith(`${$}/`))L=`${j}${Y.slice($.length)}`,Z=!0}else if(Y===$)L=j,Z=!0;X.add(L)}return Z?X:_}function AB({onTabClosed:_}={}){let $=g(_);$.current=_;let[j,G]=C(()=>__.getTabs()),[Z,X]=C(()=>__.getActiveId()),[Y,L]=C(()=>__.getTabs().length>0);u(()=>{return __.onChange((y,P)=>{G(y),X(P),L(y.length>0)})},[]);let[V,K]=C(()=>new Set),[Q,q]=C(()=>new Set),[B,N]=C(()=>new Map),U=R((y)=>{K((P)=>{let f=new Set(P);if(f.has(y))f.delete(y);else f.add(y);return f})},[]),E=R((y)=>{K((P)=>{if(!P.has(y))return P;let f=new Set(P);return f.delete(y),f})},[]),D=R((y)=>{q((P)=>{if(!P.has(y))return P;let f=new Set(P);return f.delete(y),f})},[]),H=R((y)=>{N((P)=>{if(!P.has(y))return P;let f=new Map(P);return f.delete(y),f})},[]),k=R((y,P={})=>{if(!y)return;let f=typeof P?.paneOverrideId==="string"&&P.paneOverrideId.trim()?P.paneOverrideId.trim():null,b={path:y,mode:"edit"};try{if(!(f?X_.get(f):X_.resolve(b))){if(!X_.get("editor")){console.warn(`[openEditor] No pane handler for: ${y}`);return}}}catch(v){console.warn(`[openEditor] paneRegistry.resolve() error for "${y}":`,v)}let c=typeof P?.label==="string"&&P.label.trim()?P.label.trim():void 0,h=P?.viewState&&typeof P.viewState==="object"?P.viewState:null,_0=P?.diffMode==="saved"?"saved":null;if(__.open(y,c),h)__.saveViewState(y,h);if(f)N((v)=>{if(v.get(y)===f)return v;let e=new Map(v);return e.set(y,f),e});if(_0==="saved")q((v)=>{if(v.has(y))return v;let e=new Set(v);return e.add(y),e})},[]),O=R(()=>{let y=__.getActiveId();if(y){let P=__.get(y);if(P?.dirty){if(!window.confirm(`"${P.label}" has unsaved changes. Close anyway?`))return}__.close(y),E(y),D(y),H(y),$.current?.(y)}},[D,H,E]),W=R((y)=>{let P=__.get(y);if(P?.dirty){if(!window.confirm(`"${P.label}" has unsaved changes. Close anyway?`))return}__.close(y),E(y),D(y),H(y),$.current?.(y)},[D,H,E]),I=R((y)=>{__.activate(y)},[]),x=R((y)=>{let P=__.getTabs().filter((c)=>c.id!==y&&!c.pinned),f=P.filter((c)=>c.dirty).length;if(f>0){if(!window.confirm(`${f} unsaved tab${f>1?"s":""} will be closed. Continue?`))return}let b=P.map((c)=>c.id);__.closeOthers(y),b.forEach((c)=>{E(c),D(c),H(c),$.current?.(c)})},[D,H,E]),J=R(()=>{let y=__.getTabs().filter((b)=>!b.pinned),P=y.filter((b)=>b.dirty).length;if(P>0){if(!window.confirm(`${P} unsaved tab${P>1?"s":""} will be closed. Continue?`))return}let f=y.map((b)=>b.id);__.closeAll(),f.forEach((b)=>{E(b),D(b),H(b),$.current?.(b)})},[D,H,E]),A=R((y)=>{__.togglePin(y)},[]),z=R((y)=>{if(!y)return;q((P)=>{let f=new Set(P);if(f.has(y))f.delete(y);else f.add(y);return f}),__.activate(y)},[]),T=R((y)=>{if(!y)return;N((P)=>{if(P.get(y)==="editor")return P;let f=new Map(P);return f.set(y,"editor"),f}),__.activate(y)},[]),w=R(()=>{let y=__.getActiveId();if(y)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:y}}))},[]);return u(()=>{let y=(P)=>{let{oldPath:f,newPath:b,type:c}=P.detail||{};if(!f||!b)return;if(c==="dir"){for(let h of __.getTabs())if(h.path===f||h.path.startsWith(`${f}/`)){let _0=`${b}${h.path.slice(f.length)}`;__.rename(h.id,_0)}}else __.rename(f,b);K((h)=>JB(h,f,b,c)),q((h)=>JB(h,f,b,c)),N((h)=>Jy(h,f,b,c))};return window.addEventListener("workspace-file-renamed",y),()=>window.removeEventListener("workspace-file-renamed",y)},[]),u(()=>{let y=(P)=>{if(__.hasUnsaved())P.preventDefault(),P.returnValue=""};return window.addEventListener("beforeunload",y),()=>window.removeEventListener("beforeunload",y)},[]),{editorOpen:Y,tabStripTabs:j,tabStripActiveId:Z,previewTabs:V,diffTabs:Q,tabPaneOverrides:B,openEditor:k,closeEditor:O,handleTabClose:W,handleTabActivate:I,handleTabCloseOthers:x,handleTabCloseAll:J,handleTabTogglePin:A,handleTabTogglePreview:U,handleTabToggleDiff:z,handleTabEditSource:T,revealInExplorer:w}}M0();function a1(_){return typeof _==="string"&&_.trim()?_.trim():null}function Ay(_=globalThis){try{return typeof _?.crypto?.randomUUID==="function"?_.crypto.randomUUID():null}catch($){return null}}function v4(_="pane"){let $=Ay();if($)return`${_}-${$}`;return`${_}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}function kB(_){let $=a1(_?.paneInstanceId),j=a1(_?.paneWindowId);if(!$||!j)return{};let G=a1(_?.paneSourceWindowId);return{pane_instance_id:$,pane_window_id:j,...G?{pane_source_window_id:G}:{}}}function yB(_={}){let $=new URLSearchParams(_.search||"");return{panePath:a1($.get("pane_path"))||a1(_.panePath),paneLabel:a1($.get("pane_label"))||a1(_.paneLabel),paneInstanceId:a1($.get("pane_instance_id")),paneWindowId:a1($.get("pane_window_id")),paneSourceWindowId:a1($.get("pane_source_window_id"))}}function m4(_){return Boolean(_?.panePath&&_?.paneInstanceId&&_?.paneWindowId)}function t1(_){return typeof _==="string"&&_.trim()?_.trim():null}function MB(_){let $=t1(_?.panePath),j=t1(_?.paneInstanceId),G=t1(_?.ownerWindowId);if(!$||!j||!G)return null;let Z=t1(_?.now)||new Date().toISOString();return{panePath:$,paneInstanceId:j,ownerWindowId:G,detachedAt:Z,requestedAt:Z,label:t1(_?.label),sourceWindowId:t1(_?.sourceWindowId)}}function Pj(_,$){if(!_||!$)return!1;return t1($.panePath)===_.panePath&&t1($.paneInstanceId)===_.paneInstanceId&&t1($.paneWindowId)===_.ownerWindowId}function fj(_,$){if(!_)return null;return{panePath:_.panePath,paneInstanceId:_.paneInstanceId,ownerWindowId:_.ownerWindowId,detachedAt:t1($)||new Date().toISOString(),label:_.label||null}}function v8(_){try{return _?.close?.(),!0}catch($){return!1}}function Rj(_,$,j){try{return _?.postMessage?.($,j),!0}catch(G){return!1}}function ky(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return!1;if(_.openTabIds?.has($))return!0;if(_.pendingDetachedTabPaths?.has?.($))return!0;if(_.detachedTabPaths?.has?.($))return!0;if($===_.terminalTabPath)return Boolean(_.hasPendingDetachedDockPane||_.hasDetachedDockPane);return!1}function wB(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return;let j=_?.sourceHost==="dock"?"dock":"tab";if($===_.terminalTabPath&&j==="dock"){_.setDockVisible?.(!1);return}_.closeTab?.($)}var yy=400;function My(_){let $=Array.isArray(_?.changed_paths)?_.changed_paths.map((G)=>typeof G==="string"?G.trim():"").filter(Boolean):[];if($.length>0)return $;let j=typeof _?.path==="string"?_.path.trim():"";return j?[j]:["."]}function wy(_,$){if(!_)return!1;if(!Array.isArray($)||$.length===0)return!0;return $.some((j)=>{return My(j).some((Z)=>Z==="."||Z===_)})}async function TB(_,$){if(typeof _?.afterAttachToHost!=="function")return;await _.afterAttachToHost($)}function Ty(_=typeof document<"u"?document:null){if(!_)return!0;let $=typeof _.visibilityState==="string"?_.visibilityState:"";return!$||$==="visible"}function l8(_=typeof navigator<"u"?navigator:null){if(!_)return!1;let $=String(_.userAgent||""),j=String(_.vendor||""),G=/AppleWebKit/i.test($),Z=/Safari/i.test($),X=/Chrome|Chromium|CriOS|EdgiOS|EdgA|Edg\//i.test($),Y=/FxiOS/i.test($);return G&&(j.includes("Apple")||Z)&&!X&&!Y}function xB(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return!1;if($!==_.terminalTabPath)return!1;if((_?.reason==="message"?"message":"closed-window")==="closed-window")return!0;return _?.allowLiveTransfer===!1}function m8(_){if(!xB(_))return!1;return l8(_?.runtimeNavigator)}function c8(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$||$!==_?.terminalTabPath)return!1;return l8(_?.runtimeNavigator)}function u2(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return!1;return $!==_?.terminalTabPath}function xy(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return null;let j=_?.runtime??globalThis,G=typeof _?.nowMs==="number"?_.nowMs:Date.now(),Z=typeof _?.paneInstanceId==="string"?_.paneInstanceId.trim():"",X=typeof _?.paneOverrideId==="string"?_.paneOverrideId.trim():"",Y=typeof _?.terminalTabPath==="string"?_.terminalTabPath:"piclaw://terminal",L=_?.allowLiveTransfer!==!1,V=_?.instance||null,K=typeof V?.exportHostTransferState==="function"?V.exportHostTransferState():null,Q=$===Y,q=K&&!Q?u8({path:$,payload:K},j,G):null,B=null;if($!==Y){let N=K&&typeof K==="object"?typeof K.mtime==="string"?K.mtime:K.mtime===null?null:void 0:void 0,U=typeof V?.isDirty==="function"?V.isDirty():!1,E=typeof V?.getContent==="function"?V.getContent():void 0;B=Z6({path:$,content:U?E:void 0,mtime:N,paneOverrideId:X||null,viewState:_?.viewState||null},j,G)}return{type:"piclaw-pane-reattach-request",panePath:$,...Z?{paneInstanceId:Z}:{},...B?.editor_popout?{editorPopoutToken:B.editor_popout}:{},...q?.pane_transfer?{paneTransferToken:q.pane_transfer}:{},...Q&&K?{paneTransferPayload:K}:{},...L?{}:{allowLiveTransfer:!1}}}function Iy(_){let $=typeof _?.payload?.panePath==="string"?_.payload.panePath.trim():"";if(!$)return null;let j=_?.runtime??globalThis,G=typeof _?.nowMs==="number"?_.nowMs:Date.now(),Z=typeof _?.payload?.paneInstanceId==="string"&&_.payload.paneInstanceId.trim()?_.payload.paneInstanceId.trim():null,X=typeof _?.payload?.editorPopoutToken==="string"?_.payload.editorPopoutToken.trim():"",Y=typeof _?.payload?.paneTransferToken==="string"?_.payload.paneTransferToken.trim():"",L=_?.payload?.paneTransferPayload&&typeof _.payload.paneTransferPayload==="object"&&!Array.isArray(_.payload.paneTransferPayload)?_.payload.paneTransferPayload:null,V=X?z3(X,j,G):null,K=L?{panePath:$,path:$,payload:L,capturedAt:G}:Y?Mj(Y,j,G):null;return{panePath:$,paneInstanceId:Z,editorTransfer:V?.path===$?V:null,hostTransfer:K?.path===$?K:null,allowLiveTransfer:_?.payload?.allowLiveTransfer!==!1}}function IB(_){let{panePopoutMode:$,panePopoutPath:j,panePopoutLabel:G,chatOnlyMode:Z,editorOpen:X,tabStripTabs:Y,tabStripActiveId:L,previewTabs:V,diffTabs:K,tabPaneOverrides:Q,terminalTabPath:q,vncTabPrefix:B,openEditor:N,closeEditor:U,getWorkspaceFile:E}=_,D=g(null),H=g(null),k=g(null),O=g(null),W=g((()=>{if(!$)return null;let r=G2("editor_popout");return z3(r)})()),I=g((()=>{if(!$)return null;return QN()})()),x=g(yB({search:typeof window<"u"?window.location.search:"",panePath:j,paneLabel:G})),J=g(x.current.paneWindowId||v4("pane-window")),A=g(new Map),z=g(new Map),T=g(new Map),w=g(new Map),y=g(!1),P=g(new Map),f=g(v4("pane-instance")),b=g(new Map),c=g(new Map),h=g(new Set),[_0,v]=C(()=>new Map),e=g(_0);e.current=_0;let[z0,j0]=C(()=>new Map),$0=g(z0);$0.current=z0;let[L0,B0]=C(null),t=g(L0);t.current=L0;let[V0,q0]=C(null),k0=g(V0);k0.current=V0;let s=X_.getDockPanes().length>0,[X0,D0]=C(!1),C0=R(()=>D0((r)=>!r),[]),g0=R(()=>{N(q,{label:"Terminal"})},[N,q]),n0=R(()=>{N(B,{label:"VNC"})},[N,B]),j_=R((r)=>{let i=typeof r==="string"?r.trim():"";if(!i)return v4("pane-instance");if(i===q&&!__.get(i)){if(!f.current)f.current=v4("pane-instance");return f.current}let Z0=P.current.get(i);if(Z0)return Z0;let K0=v4("pane-instance");return P.current.set(i,K0),K0},[q]),m0=Y0(()=>!$&&L?z0.get(L)||null:null,[z0,$,L]),d0=!$?V0:null,S0=R((r)=>{if(!r)return;NN(r),c.current.delete(r),h.current.delete(r),B0((i)=>i?.panePath===r?null:i),v((i)=>{if(!i.has(r))return i;let o=new Map(i);return o.delete(r),o})},[]),o0=R((r)=>{if(!r)return;b.current.delete(r),c.current.delete(r),h.current.delete(r),S0(r),q0((i)=>i?.panePath===r?null:i),j0((i)=>{if(!i.has(r))return i;let o=new Map(i);return o.delete(r),o})},[S0]),v0=R((r,i={})=>{let o=typeof r==="string"?r.trim():"";if(!o)return!1;if(c8({panePath:o,terminalTabPath:q}))return!1;let Z0=b.current.get(o),K0=Boolean($0.current.get(o)),J0=Boolean(k0.current?.panePath===o);if(o0(o),o===q&&J0&&!K0)D0(!0);else if(o===q&&K0)N(o,{label:"Terminal"});else if(__.get(o))__.activate(o);else N(o);if(i.closeDetachedWindow!==!1&&Z0&&typeof Z0.close==="function")v8(Z0);return!0},[o0,N,D0,q]),a0=R(()=>{if($)return;if(!Ty())return;let r=Date.now();for(let[i,o]of c.current.entries()){if(o>r)continue;c.current.delete(i),v0(i,{closeDetachedWindow:!1})}},[$,v0]),h0=R((r,i={})=>{let o=typeof r==="string"?r.trim():"";if(!o)return!1;let Z0={panePath:o,terminalTabPath:q,allowLiveTransfer:i.allowLiveTransfer,reason:i.reason};if(m8(Z0))return b.current.delete(o),c.current.delete(o),h.current.add(o),!0;if(!xB(Z0))return v0(o,{closeDetachedWindow:!1});return c.current.set(o,Date.now()+yy),a0(),!0},[a0,v0,q]),N_=R((r)=>{let i=typeof r==="string"?r.trim():"";if(!i)return null;let o=j_(i),Z0=v4("pane-window");return{paneInstanceId:o,paneWindowId:Z0,params:kB({paneInstanceId:o,paneWindowId:Z0,paneSourceWindowId:J.current})}},[j_]),t0=R((r,i,o,Z0)=>{let K0=typeof r==="string"?r.trim():"";if(!K0||!Z0)return;let J0=MB({panePath:K0,paneInstanceId:Z0.pane_instance_id,ownerWindowId:Z0.pane_window_id,sourceWindowId:Z0.pane_source_window_id,label:i});if(!J0)return;if(b.current.set(K0,o||null),K0===q&&!__.get(K0)){B0(J0);return}v((R0)=>{let I0=new Map(R0);return I0.set(K0,J0),I0})},[q]),b0=R((r,i)=>{let o=typeof r?.panePath==="string"?r.panePath.trim():"";if(!o)return!1;let Z0=b.current.get(o);if(Z0&&i&&Z0!==i)return!1;let K0=e.current.get(o)||null;if(Pj(K0,r)){let w0=H.current,p0=u2({panePath:o,terminalTabPath:q});if(p0&&w0&&typeof w0.moveHost==="function")S2({panePath:o,paneInstanceId:K0.paneInstanceId,paneWindowId:K0.ownerWindowId,instance:w0,releaseSourceHost:()=>{if(H.current===w0)H.current=null}});if(p0&&H.current)H.current=null;let U0=fj(K0);if(!U0)return!1;return v((l0)=>{if(!l0.has(o))return l0;let Y_=new Map(l0);return Y_.delete(o),Y_}),j0((l0)=>{let Y_=new Map(l0);return Y_.set(o,U0),Y_}),wB({panePath:o,terminalTabPath:q,closeTab:(l0)=>__.close(l0),sourceHost:"tab"}),!0}if(o!==q)return!1;let J0=t.current,c0=O.current,R0=u2({panePath:o,terminalTabPath:q});if(R0&&J0&&c0&&typeof c0.moveHost==="function")S2({panePath:o,paneInstanceId:J0.paneInstanceId,paneWindowId:J0.ownerWindowId,instance:c0,releaseSourceHost:()=>{if(O.current===c0)O.current=null}});if(R0&&O.current)O.current=null;if(!Pj(J0,r))return!1;let I0=fj(J0);if(!I0)return!1;return B0(null),q0(I0),wB({panePath:o,terminalTabPath:q,setDockVisible:D0,sourceHost:"dock"}),!0},[D0,q]),A0=R((r=!1,i=!0)=>{if(!$)return!1;let o=x.current;if(!m4(o))return!1;if(typeof window>"u"||!window.opener||window.opener.closed)return!1;if(y.current){if(r)v8(window);return!0}let Z0=o.panePath||j,K0=Z0===q?O.current||H.current:H.current,J0=i&&u2({panePath:Z0,terminalTabPath:q}),c0=xy({panePath:Z0,paneInstanceId:o.paneInstanceId,paneOverrideId:Z0===q?null:typeof Q?.get==="function"?Q.get(Z0)||null:null,terminalTabPath:q,viewState:Z0===q?null:__.getViewState(Z0)||null,allowLiveTransfer:J0,instance:K0});if(!c0)return!1;if(J0&&c0.paneTransferToken&&typeof K0?.moveHost==="function"){if(O.current===K0)O.current=null;if(H.current===K0)H.current=null}if(!Rj(window.opener,c0,window.location.origin))return!1;if(y.current=!0,r)v8(window);return!0},[$,j,Q,q]),L_=R(()=>A0(!0,!0),[A0]);u(()=>{if(!$||typeof window>"u")return;let r=()=>{let i=x.current,o=m4(i)?i.panePath||j||"":"";if(m8({panePath:o,terminalTabPath:q,allowLiveTransfer:!1,reason:"closed-window"}))return;A0(!1,!1)};return window.addEventListener("pagehide",r),window.addEventListener("beforeunload",r),()=>{window.removeEventListener("pagehide",r),window.removeEventListener("beforeunload",r)}},[$,A0]);let e0=Y0(()=>lV(Y,L),[L,Y]),O_=Y0(()=>hV(Q,L),[Q,L]),H0=Y0(()=>Kj(G,e0,j),[e0,G,j]),f0=Y0(()=>L&&K.has(L)?"saved":null,[K,L]),T0=g(f0);u(()=>{T0.current=f0},[f0]);let i0=Y0(()=>pV(Y,V,K,L),[K,V,L,Y]),A_=Y0(()=>nV(j,B),[j,B]),K_=Y0(()=>dV(j,q,i0,A_),[A_,i0,j,q]),E_=iV($,Z,X,s,X0),[H_,y_]=C(!1),C_=g(!1),u_=R(()=>{if(!X||Z)return;if(C_.current=X0,X0)D0(!1);y_(!0)},[Z,X0,X]),D_=R(()=>{if(!H_)return;if(y_(!1),C_.current)D0(!0),C_.current=!1},[H_]),G0=R(()=>{if(H_){D_();return}u_()},[u_,D_,H_]);u(()=>{if(H_&&!X)D_()},[X,D_,H_]),u(()=>{let r=new Set(Y.map((Z0)=>Z0.id)),i=new Set(e.current.keys()),o=new Set($0.current.keys());for(let Z0 of Array.from(P.current.keys()))if(!ky({panePath:Z0,openTabIds:r,pendingDetachedTabPaths:i,detachedTabPaths:o,terminalTabPath:q,hasPendingDetachedDockPane:Boolean(t.current),hasDetachedDockPane:Boolean(k0.current)}))P.current.delete(Z0)},[Y,q]),u(()=>{if($||typeof window>"u")return;let r=(i)=>{if(i.origin!==window.location.origin)return;let o=i.data;if(!o||typeof o!=="object")return;if(o.type==="piclaw-pane-detach-claim"){b0({panePath:o.panePath,paneInstanceId:o.paneInstanceId,paneWindowId:o.paneWindowId},i.source);return}if(o.type!=="piclaw-pane-reattach-request")return;let Z0=Iy({payload:o}),K0=Z0?.panePath||"";if(!K0)return;if(Z0?.editorTransfer)A.current.set(K0,Z0.editorTransfer);if(Z0?.hostTransfer)if(z.current.set(K0,Z0.hostTransfer),Z0.allowLiveTransfer&&i.source)T.current.set(K0,i.source);else T.current.delete(K0);let J0=$0.current.get(K0)||null,c0=K0===q?k0.current:null,R0=u2({panePath:K0,terminalTabPath:q}),I0=J0||c0;if(!I0)return;if(Z0?.paneInstanceId&&Z0.paneInstanceId!==I0.paneInstanceId)return;if(c8({panePath:K0,terminalTabPath:q})){T.current.delete(K0),w.current.delete(K0),z.current.delete(K0),A.current.delete(K0);return}if(Z0?.hostTransfer&&Z0.allowLiveTransfer&&R0)w.current.set(K0,{panePath:K0,paneInstanceId:I0.paneInstanceId,paneWindowId:I0.ownerWindowId});else w.current.delete(K0);if(m8({panePath:K0,terminalTabPath:q,allowLiveTransfer:Z0?.allowLiveTransfer,reason:"message"})){T.current.delete(K0),b.current.delete(K0),c.current.delete(K0),h.current.add(K0);return}h0(K0,{allowLiveTransfer:Z0?.allowLiveTransfer,reason:"message"})};return window.addEventListener("message",r),()=>window.removeEventListener("message",r)},[b0,$,h0,q]),u(()=>{if($||typeof window>"u"||typeof document>"u")return;let r=()=>a0();window.addEventListener("focus",r),window.addEventListener("pageshow",r),document.addEventListener("visibilitychange",r);let i=setInterval(()=>{a0();for(let[o,Z0]of b.current.entries()){if(!Z0||!Z0.closed)continue;if(o===q?Boolean(t.current):e.current.has(o)){b.current.delete(o),S0(o);continue}if(c8({panePath:o,terminalTabPath:q})){o0(o);continue}if(m8({panePath:o,terminalTabPath:q,allowLiveTransfer:!1,reason:"closed-window"})){b.current.delete(o),c.current.delete(o),h.current.add(o);continue}if(h.current.has(o)){b.current.delete(o);continue}h0(o,{allowLiveTransfer:!1,reason:"closed-window"})}},750);return()=>{window.removeEventListener("focus",r),window.removeEventListener("pageshow",r),document.removeEventListener("visibilitychange",r),clearInterval(i)}},[o0,S0,a0,$,h0,q]),u(()=>{if(!$||!j)return;if(__.getActiveId()===j)return;let i=W.current?.path===j?W.current:null,o=I.current?.path===j?I.current:null;N(j,{...G?{label:G}:{},...i?.paneOverrideId?{paneOverrideId:i.paneOverrideId}:{},...i?.viewState?{viewState:i.viewState}:{},...o?.payload?.diffMode?{diffMode:o.payload.diffMode}:{}})},[N,G,$,j]),u(()=>{if(!$)return;let r=x.current;if(!m4(r))return;if(typeof window>"u"||!window.opener||window.opener.closed)return;Rj(window.opener,{type:"piclaw-pane-detach-claim",panePath:r.panePath,paneInstanceId:r.paneInstanceId,paneWindowId:r.paneWindowId},window.location.origin)},[$]),u(()=>{let r=D.current;if(!r)return;if(H.current)H.current.dispose(),H.current=null;let i=L;if(!i)return;if(!$&&m0?.panePath===i){r.innerHTML="";return}let o=W.current?.path===i?W.current:null,Z0=A.current.get(i)||null,K0=o||Z0,J0=I.current?.path===i?I.current:null,c0=z.current.get(i)||null,R0=J0||c0,I0=O_||K0?.paneOverrideId||null,w0=R0?.payload?{...R0.payload}:null;if(T0.current)w0={...w0||{},diffMode:T0.current};else if(w0&&"diffMode"in w0)delete w0.diffMode;let p0={path:i,mode:"edit",...K0?.content!==void 0?{content:K0.content}:{},...K0?.mtime!==void 0?{mtime:K0.mtime}:{},...w0?{transferState:w0}:{}},U0=(I0?X_.get(I0):null)||X_.resolve(p0)||X_.get("editor");if(!U0){r.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let l0=null,Y_=!1,G_=(u0)=>{l0=u0,H.current=u0,u0.onDirtyChange?.((d)=>{__.setDirty(i,d)}),u0.onSaveRequest?.(()=>{}),u0.onClose?.(()=>{U()});let z_=__.getViewState(i);if(z_&&typeof u0.restoreViewState==="function")requestAnimationFrame(()=>u0.restoreViewState(z_));if(typeof u0.onViewStateChange==="function")u0.onViewStateChange((d)=>{__.saveViewState(i,d)});let B_=x.current;if($&&m4(B_)&&typeof u0?.moveHost==="function"&&u2({panePath:i,terminalTabPath:q}))S2({panePath:i,paneInstanceId:B_.paneInstanceId||"",paneWindowId:B_.paneWindowId||"",instance:u0,releaseSourceHost:()=>{if(O.current===u0)O.current=null;if(H.current===u0)H.current=null}});TB(u0,{path:i,hostMode:$?"popout":"main",transferState:w0}).catch((d)=>{console.warn("[pane-attach] afterAttachToHost failed:",d)}),requestAnimationFrame(()=>u0.focus?.())};return(async()=>{let u0=x.current,z_=$&&m4(u0)&&u0.panePath===i?{panePath:i,paneInstanceId:u0.paneInstanceId||"",paneWindowId:u0.paneWindowId||""}:null,B_=w.current.get(i)||null,d=u2({panePath:i,terminalTabPath:q})?z_||B_:null,O0=$?typeof window<"u"&&window.opener&&!window.opener.closed?window.opener:null:T.current.get(i)||null,Z_=$?"popout":"main";if(R0&&d&&O0)try{let q_=await BN(O0,d,r,{path:i,hostMode:Z_,transferState:w0});if(!Y_&&q_){if(G_(q_),o)W.current=null;if(Z0)A.current.delete(i);if(J0)I.current=null;if(c0)z.current.delete(i);T.current.delete(i),w.current.delete(i);return}}catch(q_){console.warn("[pane-live-transfer] Failed to claim live pane instance:",q_)}if(Y_)return;if(G_(U0.mount(r,p0)),o)W.current=null;if(Z0)A.current.delete(i);if(J0)I.current=null;if(c0)z.current.delete(i);T.current.delete(i),w.current.delete(i)})(),()=>{if(Y_=!0,H.current===l0)l0.dispose(),H.current=null}},[m0,O_,U,$,L]),u(()=>{let r=L,i=H.current;if(!r||typeof i?.setDiffMode!=="function")return;i.setDiffMode(f0)},[f0,L]);let W0=R(async(r)=>{let i=typeof L==="string"?L.trim():"",o=H.current;if(!i||!o?.setContent)return;if(typeof o.isDirty==="function"&&o.isDirty())return;if(!wy(i,r))return;try{let Z0=await E(i,1e6,"edit"),K0=typeof Z0?.text==="string"?Z0.text:"",J0=typeof Z0?.mtime==="string"&&Z0.mtime.trim()?Z0.mtime.trim():new Date().toISOString();o.setContent(K0,J0)}catch(Z0){console.warn("[workspace_update] Failed to refresh active pane:",Z0)}},[E,L]);return u(()=>{let r=k.current;if(O.current)O.current.dispose(),O.current=null;if(!r||!s||!X0)return;if(!$&&d0?.panePath===q){r.innerHTML="";return}let i=X_.getDockPanes()[0];if(!i){r.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let o=I.current?.path===q?I.current:null,Z0=z.current.get(q)||null,K0=o||Z0,J0=i.mount(r,{mode:"view",...K0?.payload?{transferState:K0.payload}:{}});if(O.current=J0,TB(J0,{path:q,hostMode:$?"popout":"main",transferState:K0?.payload||null}).catch((c0)=>{console.warn("[pane-attach] afterAttachToHost failed:",c0)}),o)I.current=null;if(Z0)z.current.delete(q);return requestAnimationFrame(()=>J0.focus?.()),()=>{if(O.current===J0)J0.dispose(),O.current=null}},[d0,X0,s,$,q]),{editorContainerRef:D,editorInstanceRef:H,dockContainerRef:k,dockInstanceRef:O,hasDockPanes:s,dockVisible:X0,setDockVisible:D0,toggleDock:C0,openTerminalTab:g0,openVncTab:n0,panePopoutTitle:H0,panePopoutHasMenuActions:i0,hidePanePopoutControls:K_,showEditorPaneContainer:E_,zenMode:H_,exitZenMode:D_,toggleZenMode:G0,refreshActiveEditorFromWorkspace:W0,detachedTabs:z0,activeDetachedTab:m0,detachedDockPane:d0,buildPaneDetachTransfer:N_,registerDetachedPaneWindow:t0,reattachPane:v0,requestPanePopoutReattach:L_,canReattachPanePopout:$&&m4(x.current)&&!c8({panePath:j||"",terminalTabPath:q})}}function Cy(_){return{removeFileRefRef:_.removeFileRefRef,editorState:_.editorState,paneRuntime:_.paneRuntime}}function CB(_){let $=g(null),j=AB({onTabClosed:(Z)=>$.current?.(Z)}),G=IB({panePopoutMode:_.panePopoutMode,panePopoutPath:_.panePopoutPath,panePopoutLabel:_.panePopoutLabel,chatOnlyMode:_.chatOnlyMode,editorOpen:j.editorOpen,tabStripTabs:j.tabStripTabs,tabStripActiveId:j.tabStripActiveId,previewTabs:j.previewTabs,diffTabs:j.diffTabs,tabPaneOverrides:j.tabPaneOverrides,terminalTabPath:_.terminalTabPath,vncTabPrefix:_.vncTabPrefix,openEditor:j.openEditor,closeEditor:j.closeEditor,getWorkspaceFile:_.getWorkspaceFile});return Cy({removeFileRefRef:$,editorState:j,paneRuntime:G})}I_();var r8=1280,p8=820;function h8(_){if(typeof _!=="number"||!Number.isFinite(_)||_<=0)return null;return _}function g5(_){return typeof _==="string"&&_.trim()?_.trim():null}function Py(_){let $=g5(_);if(!$)return!1;if($.startsWith("/")||$.startsWith("\\"))return!1;if($.includes("://"))return!1;if($==="."||$===".."||$.startsWith("../"))return!1;return!0}function fy(_){if(_.isMobile)return!1;let $=h8(_.windowWidth),j=h8(_.windowHeight);if($===null||j===null)return!1;if($<r8||j<p8)return!1;let G=h8(_.screenWidth),Z=h8(_.screenHeight);if(G!==null&&G<r8)return!1;if(Z!==null&&Z<p8)return!1;return!0}function Ry(_){let $=_?.navigator,j=String($?.userAgent||""),G=Number($?.maxTouchPoints||0);return(typeof _?.matchMedia==="function"?Boolean(_.matchMedia("(pointer: coarse)")?.matches):!1)||G>1||/Android|iPhone|iPad|iPod/i.test(j)}function Sy(_){if(!_||_.kind!=="custom")return null;let $=g5(_.request_id),j=_.options&&typeof _.options==="object"?_.options:null;if(!$||!j||j.action!=="open_workspace_file")return null;let G=g5(j.path);if(!Py(G))return null;let Z=j.target==="tab"?"tab":"popout";return{requestId:$,chatJid:g5(_.chat_jid),path:G,label:g5(j.label),target:Z}}async function uy(_,$,j){await E2(_,$,j||void 0)}async function PB(_,$){let j=Sy(_?.detail?.payload);if(!j)return!1;if(j.chatJid&&j.chatJid!==$.currentChatJid)return!1;let G=$.respond||uy,Z=$.windowObject||(typeof window<"u"?window:void 0),X={width:Number(Z?.innerWidth||0)||void 0,height:Number(Z?.innerHeight||0)||void 0},Y={width:r8,height:p8};if(j.target==="popout"){if(!fy({windowWidth:Z?.innerWidth,windowHeight:Z?.innerHeight,screenWidth:Z?.screen?.availWidth,screenHeight:Z?.screen?.availHeight,isMobile:Ry(Z)}))return $.showIntentToast?.("Editor popout unavailable",`Need at least ${r8}×${p8} viewport space for a separate editor window.`,"warning",4500),await G(j.requestId,{ok:!1,opened:!1,reason:"insufficient_screen_space",detail:"Browser viewport is too small for a separate editor window.",target:j.target,path:j.path,viewport:X,minimum_viewport:Y},j.chatJid),!0;let V=await $.popOutPane(j.path,j.label);return await G(j.requestId,{ok:V,opened:V,reason:V?void 0:"popout_failed",detail:V?void 0:"The browser blocked the editor popout window.",target:j.target,path:j.path},j.chatJid),!0}return $.openEditor(j.path),await G(j.requestId,{ok:!0,opened:!0,target:j.target,path:j.path},j.chatJid),!0}var Sj="piclaw:oobe:provider-missing:dismissed";function gy(_){if(!_||typeof _!=="object")return 0;let $=Array.isArray(_.model_options)?_.model_options.filter(Boolean):[];if($.length>0)return $.length;return(Array.isArray(_.models)?_.models.filter((G)=>typeof G==="string"&&G.trim()):[]).length}function by(_){if(!_||typeof _!=="object")return!1;let $=_.current;return typeof $==="string"&&$.trim().length>0}function fB(_){let{panePopoutMode:$=!1,modelsLoaded:j,modelPayload:G,providerMissingDismissed:Z=!1}=_,X=gy(G),Y=X>0,L=by(G),V=Y||L;if($||!j)return{kind:"hidden",hasAvailableModels:Y,availableModelCount:X,hasConfiguredModelHint:L};if(V)return{kind:"hidden",hasAvailableModels:Y,availableModelCount:X,hasConfiguredModelHint:L};return{kind:Z?"hidden":"provider-missing",hasAvailableModels:Y,availableModelCount:X,hasConfiguredModelHint:L}}var vy=gV();await tV();var{searchPosts:my,deletePost:cy,getAgents:ly,getAgentThought:RB,setAgentThoughtVisibility:SB,getAgentStatus:hy,getAgentContext:ry,getAutoresearchStatus:py,stopAutoresearch:ny,dismissAutoresearch:dy,getAgentModels:iy,getActiveChatAgents:oy,getChatBranches:sy,renameChatBranch:ay,pruneChatBranch:ty,purgeChatBranch:ey,restoreChatBranch:_M,getAgentQueueState:$M,steerAgentQueueItem:jM,removeAgentQueueItem:GM,streamSidePrompt:ZM,getWorkspaceFile:XM,getThread:YM,getTimeline:LM,sendAgentMessage:KM,forkChatBranch:VM,createRootChatSession:qM}=eV;function QM({locationParams:_,navigate:$}){let{currentChatJid:j,chatOnlyMode:G,panePopoutMode:Z,panePopoutPath:X,panePopoutLabel:Y,branchLoaderMode:L,branchLoaderSourceChatJid:V}=Y0(()=>cV(_),[_]);u(()=>{if(typeof window>"u")return;window.__piclawCurrentChatJid=j,window.dispatchEvent?.(new CustomEvent("piclaw:current-chat-changed",{detail:{chatJid:j}}))},[j]);let K=OB({currentChatJid:j,branchLoaderMode:L}),[Q,q]=C(()=>F$(Sj,!1)),[B,N]=C(null),U=R((S0)=>{let o0=typeof S0==="string"?S0:"";if(!o0.trim())return;N({token:`prefill-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`,text:o0})},[]),{agentStatus:E,setAgentStatus:D,agentDraft:H,setAgentDraft:k,agentPlan:O,setAgentPlan:W,agentThought:I,setAgentThought:x,pendingRequest:J,setPendingRequest:A,currentTurnId:z,setCurrentTurnId:T,steerQueuedTurnId:w,setSteerQueuedTurnId:y,lastAgentEventRef:P,lastSilenceNoticeRef:f,isAgentRunningRef:b,draftBufferRef:c,thoughtBufferRef:h,previewResyncPendingRef:_0,previewResyncGenerationRef:v,pendingRequestRef:e,stalledPostIdRef:z0,currentTurnIdRef:j0,steerQueuedTurnIdRef:$0,thoughtExpandedRef:L0,draftExpandedRef:B0}=fX(),t=CB({panePopoutMode:Z,panePopoutPath:X,panePopoutLabel:Y,chatOnlyMode:G,terminalTabPath:X2,vncTabPrefix:i1,getWorkspaceFile:XM}),V0=aq({timelineRef:K.timelineRef,viewStateRef:K.viewStateRef,followupQueueRowIdsRef:K.followupQueueRowIdsRef,currentChatJid:j,currentHashtag:K.currentHashtag,searchQuery:K.searchQuery,followupQueueItems:K.followupQueueItems,onIdentity:R((S0)=>{if(!S0)return;let{assistant_name:o0,assistant_avatar_url:v0}=S0;if(o0||v0)K.setAgents((b0)=>{let A0=b0.default||{id:"default"},L_=o0&&!A0.name,e0=v0&&!A0.avatar_url;if(!L_&&!e0)return b0;return{...b0,["default"]:{...A0,...L_?{name:o0}:{},...e0?{avatar_url:v0}:{}}}});let{user_name:a0,user_avatar_url:h0,user_avatar_background:N_}=S0;if(a0||h0||N_)K.setUserProfile((t0)=>{let b0=a0&&!t0.name,A0=h0&&!t0.avatar_url,L_=N_&&!t0.avatar_background;if(!b0&&!A0&&!L_)return t0;return{...t0,...b0?{name:a0}:{},...A0?{avatar_url:h0}:{},...L_?{avatar_background:N_}:{}}})},[K.setAgents,K.setUserProfile])}),q0=gq({environment:{isRenameBranchFormOpen:K.isRenameBranchFormOpen,renameBranchNameInputRef:K.renameBranchNameInputRef,appShellRef:K.appShellRef,setIsWebAppMode:K.setIsWebAppMode,workspaceOpen:K.workspaceOpen,setWorkspaceOpen:K.setWorkspaceOpen,btwSession:K.btwSession,agents:K.agents,agentsRef:K.agentsRef,currentChatJid:j,activeChatJidRef:K.activeChatJidRef,userProfile:K.userProfile,userProfileRef:K.userProfileRef,brandingRef:K.brandingRef,panePopoutMode:Z},composeReferences:{setIntentToast:K.setIntentToast,intentToastTimerRef:K.intentToastTimerRef,editorOpen:t.editorState.editorOpen,openEditor:t.editorState.openEditor,resolvePane:(S0)=>X_.resolve(S0),tabStripActiveId:t.editorState.tabStripActiveId,setFileRefs:K.setFileRefs,setFolderRefs:K.setFolderRefs,setMessageRefs:K.setMessageRefs,currentChatJid:j,currentHashtag:K.currentHashtag,searchQuery:K.searchQuery,searchOpen:K.searchOpen,setCurrentHashtag:K.setCurrentHashtag,setSearchQuery:K.setSearchQuery,setSearchOpen:K.setSearchOpen,navigate:$,chatOnlyMode:G,getThread:YM,setPosts:V0.setPosts},agentActivity:{lastActivityTtlMs:pX,lastActivityTimerRef:K.lastActivityTimerRef,lastActivityTokenRef:K.lastActivityTokenRef,lastAgentEventRef:P,lastSilenceNoticeRef:f,isAgentRunningRef:b,setIsAgentTurnActive:K.setIsAgentTurnActive,setAgentStatus:D,draftBufferRef:c,thoughtBufferRef:h,pendingRequestRef:e,lastAgentResponseRef:K.lastAgentResponseRef,currentTurnIdRef:j0,steerQueuedTurnIdRef:$0,agentStatusRef:K.agentStatusRef,silentRecoveryRef:K.silentRecoveryRef,thoughtExpandedRef:L0,draftExpandedRef:B0,setCurrentTurnId:T,setSteerQueuedTurnId:y,currentTurnIdRefForPanel:j0,setAgentThoughtVisibility:SB,getAgentThought:RB,setAgentThought:x,setAgentDraft:k},chatPaneRuntime:{isAgentTurnActive:K.isAgentTurnActive,steerQueuedTurnId:w,currentTurnId:z,steerQueuedTurnIdRef:$0,setSteerQueuedTurnId:y,agentStatus:E,agentDraft:H,agentPlan:O,agentThought:I,pendingRequest:J,pendingRequestRef:e,followupQueueItems:K.followupQueueItems,activeModel:K.activeModel,activeThinkingLevel:K.activeThinkingLevel,supportsThinking:K.supportsThinking,activeModelUsage:K.activeModelUsage,contextUsage:K.contextUsage,isAgentRunningRef:b,wasAgentActiveRef:K.wasAgentActiveRef,draftBufferRef:c,thoughtBufferRef:h,lastAgentEventRef:P,lastSilenceNoticeRef:f,lastAgentResponseRef:K.lastAgentResponseRef,currentTurnIdRef:j0,thoughtExpandedRef:L0,draftExpandedRef:B0,agentStatusRef:K.agentStatusRef,silentRecoveryRef:K.silentRecoveryRef,setIsAgentTurnActive:K.setIsAgentTurnActive,setAgentStatus:D,setAgentDraft:k,setAgentPlan:W,setAgentThought:x,setPendingRequest:A,setCurrentTurnId:T,setFollowupQueueItems:K.setFollowupQueueItems,setActiveModel:K.setActiveModel,setActiveThinkingLevel:K.setActiveThinkingLevel,setSupportsThinking:K.setSupportsThinking,setActiveModelUsage:K.setActiveModelUsage,setContextUsage:K.setContextUsage,lastNotifiedIdRef:K.lastNotifiedIdRef,agentsRef:K.agentsRef,notify:K.notify,shouldNotifyLocallyForChat:K.shouldNotifyLocallyForChat},recovery:{isAgentRunningRef:b,lastSilenceNoticeRef:f,lastAgentEventRef:P,currentTurnIdRef:j0,thoughtExpandedRef:L0,draftExpandedRef:B0,draftBufferRef:c,thoughtBufferRef:h,pendingRequestRef:e,lastAgentResponseRef:K.lastAgentResponseRef,agentStatusRef:K.agentStatusRef,stalledPostIdRef:z0,scrollToBottomRef:V0.scrollToBottomRef,setCurrentTurnId:T,setAgentDraft:k,setAgentPlan:W,setAgentThought:x,setPendingRequest:A,setAgentStatus:D,setPosts:V0.setPosts,dedupePosts:D2},viewState:{viewStateRef:K.viewStateRef,currentHashtag:K.currentHashtag,searchQuery:K.searchQuery,searchOpen:K.searchOpen},removeFileRefRef:t.removeFileRefRef}),k0=cX({appShellRef:K.appShellRef,sidebarWidthRef:K.sidebarWidthRef,editorWidthRef:K.editorWidthRef,dockHeightRef:K.dockHeightRef}),{chatRefreshLifecycle:s,timelineViewActions:X0,isComposeBoxAgentActive:D0,followupActions:C0,sidepanelActions:g0,branchPaneActions:n0}=qB({routeState:{currentChatJid:j,currentRootChatJid:K.currentRootChatJid,chatOnlyMode:G,navigate:$,branchLoaderMode:L,branchLoaderSourceChatJid:V,isWebAppMode:K.isWebAppMode},searchState:{currentHashtag:K.currentHashtag,setCurrentHashtag:K.setCurrentHashtag,searchQuery:K.searchQuery,setSearchQuery:K.setSearchQuery,searchOpen:K.searchOpen,setSearchOpen:K.setSearchOpen,searchScope:K.searchScope,setSearchScope:K.setSearchScope},shellState:{activeChatAgents:K.activeChatAgents,currentChatBranches:K.currentChatBranches,currentBranchRecord:K.currentBranchRecord,contextUsage:K.contextUsage,activeModel:K.activeModel,activeThinkingLevel:K.activeThinkingLevel,supportsThinking:K.supportsThinking,activeModelUsage:K.activeModelUsage,connectionStatus:K.connectionStatus,notificationsEnabled:K.notificationsEnabled,notificationPermission:K.notificationPermission,workspaceOpen:K.workspaceOpen,setWorkspaceOpen:K.setWorkspaceOpen,userProfile:K.userProfile,agents:K.agents,removingPostIds:K.removingPostIds,btwSession:K.btwSession},timeline:V0,interaction:q0,paneRuntime:t.paneRuntime,refs:{activeChatJidRef:K.activeChatJidRef,queueRefreshGenRef:K.queueRefreshGenRef,dismissedQueueRowIdsRef:K.dismissedQueueRowIdsRef,wasAgentActiveRef:K.wasAgentActiveRef,viewStateRef:K.viewStateRef,agentStatusRef:K.agentStatusRef,pendingRequestRef:e,thoughtBufferRef:h,draftBufferRef:c,previewResyncPendingRef:_0,previewResyncGenerationRef:v,isAgentRunningRef:b,currentTurnIdRef:j0,silentRecoveryRef:K.silentRecoveryRef,lastAgentEventRef:P,lastSilenceNoticeRef:f,staleUiVersionRef:K.staleUiVersionRef,staleUiReloadScheduledRef:K.staleUiReloadScheduledRef,hasConnectedOnceRef:K.hasConnectedOnceRef,sidebarWidthRef:K.sidebarWidthRef,appShellRef:K.appShellRef,agentsRef:K.agentsRef,paneStateOwnerChatJidRef:K.paneStateOwnerChatJidRef,chatPaneStateByChatRef:K.chatPaneStateByChatRef,dismissedLiveWidgetKeysRef:K.dismissedLiveWidgetKeysRef,draftThrottleRef:K.draftThrottleRef,thoughtThrottleRef:K.thoughtThrottleRef,followupQueueItemsRef:K.followupQueueItemsRef,lastAgentResponseRef:K.lastAgentResponseRef,thoughtExpandedRef:L0,draftExpandedRef:B0,steerQueuedTurnIdRef:$0,btwAbortRef:K.btwAbortRef,renameBranchInFlightRef:K.renameBranchInFlightRef,renameBranchLockUntilRef:K.renameBranchLockUntilRef,editorWidthRef:K.editorWidthRef,dockHeightRef:K.dockHeightRef},setters:{setFollowupQueueItems:K.setFollowupQueueItems,setContextUsage:K.setContextUsage,setExtensionStatusPanels:K.setExtensionStatusPanels,setPendingExtensionPanelActions:K.setPendingExtensionPanelActions,setExtensionWorkingState:K.setExtensionWorkingState,setAgentStatus:D,setAgentDraft:k,setAgentPlan:W,setAgentThought:x,setPendingRequest:A,setConnectionStatus:K.setConnectionStatus,setStateAccessFailed:K.setStateAccessFailed,setAgents:K.setAgents,setUserProfile:K.setUserProfile,setActiveChatAgents:K.setActiveChatAgents,setCurrentChatBranches:K.setCurrentChatBranches,setActiveModel:K.setActiveModel,setActiveThinkingLevel:K.setActiveThinkingLevel,setSupportsThinking:K.setSupportsThinking,setActiveModelUsage:K.setActiveModelUsage,setAgentModelsPayload:K.setAgentModelsPayload,setHasLoadedAgentModels:K.setHasLoadedAgentModels,setHasMore:V0.setHasMore,setFloatingWidget:K.setFloatingWidget,setSteerQueuedTurnId:y,setRemovingPostIds:K.setRemovingPostIds,setBtwSession:K.setBtwSession,setWorkspaceOpen:K.setWorkspaceOpen,setRenameBranchNameDraft:K.setRenameBranchNameDraft,setIsRenameBranchFormOpen:K.setIsRenameBranchFormOpen,setIsRenamingBranch:K.setIsRenamingBranch},services:{searchPosts:my,deletePost:cy,getAgentQueueState:$M,getAgentContext:ry,getAutoresearchStatus:py,getAgentStatus:hy,getAgents:ly,getAgentModels:iy,getActiveChatAgents:oy,getChatBranches:sy,getTimeline:LM,stopAutoresearch:ny,dismissAutoresearch:dy,streamSidePrompt:ZM,sendAgentMessage:KM,renameChatBranch:ay,pruneChatBranch:ty,purgeChatBranch:ey,restoreChatBranch:_M,forkChatBranch:VM,createRootChatSession:qM,steerAgentQueueItem:jM,removeAgentQueueItem:GM,getAgentThought:RB,setAgentThoughtVisibility:SB,silenceRefreshMs:rX,silenceWarningMs:lX,silenceFinalizeMs:hX,isCompactionStatus:z$,currentAppAssetVersion:vy,tabStoreHasUnsaved:()=>__.hasUnsaved(),agentStatus:E,isAgentTurnActive:K.isAgentTurnActive,openEditor:t.editorState.openEditor,activateTab:t.editorState.handleTabActivate,tabStripActiveId:t.editorState.tabStripActiveId,terminalTabPath:X2,resolveTab:(S0)=>__.get(S0),closeTab:t.editorState.handleTabClose,editorOpen:t.editorState.editorOpen},helpers:{getFormLock:bV,readStoredNumber:z4}});u(()=>{return KB({timelineRef:K.timelineRef,activeChatAgents:K.activeChatAgents,currentChatJid:j,onSwitch:(S0)=>n0.handleBranchPickerChange(S0),isIOSDevice:E5,isLikelySafari:l8})},[K.timelineRef,K.activeChatAgents,j,n0.handleBranchPickerChange]);let j_=Y0(()=>fB({panePopoutMode:Z,modelsLoaded:K.hasLoadedAgentModels,modelPayload:K.agentModelsPayload,providerMissingDismissed:Q}),[Z,K.hasLoadedAgentModels,K.agentModelsPayload,Q]),m0=R(()=>{qL()},[]),d0=R(()=>{q(!0),V_(Sj,"true")},[]);return u(()=>{if(!Z||typeof document>"u")return;document.title=rV(Y,t.paneRuntime.activePaneTab,X)},[t.paneRuntime.activePaneTab,Y,Z,X]),u(()=>{if(typeof window>"u")return;let S0=(o0)=>{PB(o0,{currentChatJid:j,openEditor:t.editorState.openEditor,popOutPane:n0.handlePopOutPane,showIntentToast:q0.composeReferenceActions.showIntentToast})};return window.addEventListener("piclaw-extension-ui:request",S0),()=>{window.removeEventListener("piclaw-extension-ui:request",S0)}},[n0.handlePopOutPane,j,q0.composeReferenceActions.showIntentToast,t.editorState.openEditor]),RV($q({routeState:{branchLoaderMode:L,panePopoutMode:Z,currentChatJid:j,chatOnlyMode:G,panePopoutPath:X},paneRuntime:t.paneRuntime,splitters:k0,orchestration:{branchPaneActions:n0,timelineViewActions:X0,sidepanelActions:g0,followupActions:C0,chatRefreshLifecycle:s,isComposeBoxAgentActive:D0},interaction:q0,timeline:V0,surface:{...K,oobePanelState:j_,composePrefillRequest:B,requestComposePrefill:U,handleOobeSetupProvider:m0,handleOobeShowModelPicker:m0,handleOobeOpenWorkspace:m0,handleDismissProviderMissingOobe:d0},editorState:t.editorState,agentState:{agentStatus:E,agentDraft:H,agentPlan:O,agentThought:I,pendingRequest:J,currentTurnId:z,steerQueuedTurnId:w,setPendingRequest:A,pendingRequestRef:e,isCompactionStatus:z$},helpers:{formatBranchPickerLabel:t6,isIOSDevice:E5,terminalTabPath:X2}}))}function NM(){let{locationParams:_,navigate:$}=NL();return F`<${QM} locationParams=${_} navigate=${$} />`}var n8=document.getElementById("app");if(typeof window<"u")window.__PICLAW_APP_BOOTED__=!1;if(n8){if(Q$(null,n8),n8.replaceChildren(),Q$(F`<${NM} />`,n8),typeof window<"u")window.__PICLAW_APP_BOOTED__=!0}

//# debugId=969DF6085863FDE964756E2164756E21
//# sourceMappingURL=app.bundle.js.map
