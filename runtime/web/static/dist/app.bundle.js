var yB=Object.defineProperty;var xB=(_)=>_;function IB(_,$){this[_]=xB.bind(null,$)}var Y1=(_,$)=>{for(var j in $)yB(_,j,{get:$[j],enumerable:!0,configurable:!0,set:IB.bind($,j)})};var W_=(_,$)=>()=>(_&&($=_(_=0)),$);var aj={};Y1(aj,{useState:()=>C,useRef:()=>u,useReducer:()=>ij,useMemo:()=>X0,useLayoutEffect:()=>m4,useImperativeHandle:()=>vB,useErrorBoundary:()=>lB,useEffect:()=>g,useDebugValue:()=>cB,useContext:()=>mB,useCallback:()=>f,render:()=>q$,html:()=>N,h:()=>t8,createContext:()=>bB,Component:()=>P5});function Y$(_,$){for(var j in $)_[j]=$[j];return _}function a8(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function t8(_,$,j){var G,Z,X,Y={};for(X in $)X=="key"?G=$[X]:X=="ref"?Z=$[X]:Y[X]=$[X];if(arguments.length>2&&(Y.children=arguments.length>3?p6.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(X in _.defaultProps)Y[X]===void 0&&(Y[X]=_.defaultProps[X]);return v6(_,Y,G,Z,null)}function v6(_,$,j,G,Z){var X={type:_,props:$,key:j,ref:G,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:Z==null?++gj:Z,__i:-1,__u:0};return Z==null&&y_.vnode!=null&&y_.vnode(X),X}function r6(_){return _.children}function P5(_,$){this.props=_,this.context=$}function u4(_,$){if($==null)return _.__?u4(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?u4(_):null}function PB(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,G=[],Z=[],X=Y$({},$);X.__v=$.__v+1,y_.vnode&&y_.vnode(X),e8(_.__P,X,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,G,j==null?u4($):j,!!(32&$.__u),Z),X.__v=$.__v,X.__.__k[X.__i]=X,pj(G,X,Z),$.__e=$.__=null,X.__e!=j&&cj(X)}}function cj(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),cj(_)}function d8(_){(!_.__d&&(_.__d=!0)&&C$.push(_)&&!h6.__r++||kj!=y_.debounceRendering)&&((kj=y_.debounceRendering)||uj)(h6)}function h6(){try{for(var _,$=1;C$.length;)C$.length>$&&C$.sort(bj),_=C$.shift(),$=C$.length,PB(_)}finally{C$.length=h6.__r=0}}function lj(_,$,j,G,Z,X,Y,q,L,K,Q){var V,F,B,U,D,E,H,k=G&&G.__k||l6,z=$.length;for(L=RB(j,$,k,L,z),V=0;V<z;V++)(B=j.__k[V])!=null&&(F=B.__i!=-1&&k[B.__i]||c6,B.__i=V,E=e8(_,B,F,Z,X,Y,q,L,K,Q),U=B.__e,B.ref&&F.ref!=B.ref&&(F.ref&&_3(F.ref,null,B),Q.push(B.ref,B.__c||U,B)),D==null&&U!=null&&(D=U),(H=!!(4&B.__u))||F.__k===B.__k?(L=hj(B,L,_,H),H&&F.__e&&(F.__e=null)):typeof B.type=="function"&&E!==void 0?L=E:U&&(L=U.nextSibling),B.__u&=-7);return j.__e=D,L}function RB(_,$,j,G,Z){var X,Y,q,L,K,Q=j.length,V=Q,F=0;for(_.__k=Array(Z),X=0;X<Z;X++)(Y=$[X])!=null&&typeof Y!="boolean"&&typeof Y!="function"?(typeof Y=="string"||typeof Y=="number"||typeof Y=="bigint"||Y.constructor==String?Y=_.__k[X]=v6(null,Y,null,null,null):n6(Y)?Y=_.__k[X]=v6(r6,{children:Y},null,null,null):Y.constructor===void 0&&Y.__b>0?Y=_.__k[X]=v6(Y.type,Y.props,Y.key,Y.ref?Y.ref:null,Y.__v):_.__k[X]=Y,L=X+F,Y.__=_,Y.__b=_.__b+1,q=null,(K=Y.__i=SB(Y,j,L,V))!=-1&&(V--,(q=j[K])&&(q.__u|=2)),q==null||q.__v==null?(K==-1&&(Z>Q?F--:Z<Q&&F++),typeof Y.type!="function"&&(Y.__u|=4)):K!=L&&(K==L-1?F--:K==L+1?F++:(K>L?F--:F++,Y.__u|=4))):_.__k[X]=null;if(V)for(X=0;X<Q;X++)(q=j[X])!=null&&(2&q.__u)==0&&(q.__e==G&&(G=u4(q)),rj(q,q));return G}function hj(_,$,j,G){var Z,X;if(typeof _.type=="function"){for(Z=_.__k,X=0;Z&&X<Z.length;X++)Z[X]&&(Z[X].__=_,$=hj(Z[X],$,j,G));return $}_.__e!=$&&(G&&($&&_.type&&!$.parentNode&&($=u4(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function SB(_,$,j,G){var Z,X,Y,q=_.key,L=_.type,K=$[j],Q=K!=null&&(2&K.__u)==0;if(K===null&&q==null||Q&&q==K.key&&L==K.type)return j;if(G>(Q?1:0)){for(Z=j-1,X=j+1;Z>=0||X<$.length;)if((K=$[Y=Z>=0?Z--:X++])!=null&&(2&K.__u)==0&&q==K.key&&L==K.type)return Y}return-1}function Mj(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||fB.test($)?j:j+"px"}function u6(_,$,j,G,Z){var X,Y;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof G=="string"&&(_.style.cssText=G=""),G)for($ in G)j&&$ in j||Mj(_.style,$,"");if(j)for($ in j)G&&j[$]==G[$]||Mj(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")X=$!=($=$.replace(vj,"$1")),Y=$.toLowerCase(),$=Y in _||$=="onFocusOut"||$=="onFocusIn"?Y.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+X]=j,j?G?j[f5]=G[f5]:(j[f5]=s8,_.addEventListener($,X?r8:n8,X)):_.removeEventListener($,X?r8:n8,X);else{if(Z=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(q){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function wj(_){return function($){if(this.l){var j=this.l[$.type+_];if($[b6]==null)$[b6]=s8++;else if($[b6]<j[f5])return;return j(y_.event?y_.event($):$)}}}function e8(_,$,j,G,Z,X,Y,q,L,K){var Q,V,F,B,U,D,E,H,k,z,O,y,I,A,J,M=$.type;if($.constructor!==void 0)return null;128&j.__u&&(L=!!(32&j.__u),X=[q=$.__e=j.__e]),(Q=y_.__b)&&Q($);_:if(typeof M=="function")try{if(H=$.props,k=M.prototype&&M.prototype.render,z=(Q=M.contextType)&&G[Q.__c],O=Q?z?z.props.value:Q.__:G,j.__c?E=(V=$.__c=j.__c).__=V.__E:(k?$.__c=V=new M(H,O):($.__c=V=new P5(H,O),V.constructor=M,V.render=uB),z&&z.sub(V),V.state||(V.state={}),V.__n=G,F=V.__d=!0,V.__h=[],V._sb=[]),k&&V.__s==null&&(V.__s=V.state),k&&M.getDerivedStateFromProps!=null&&(V.__s==V.state&&(V.__s=Y$({},V.__s)),Y$(V.__s,M.getDerivedStateFromProps(H,V.__s))),B=V.props,U=V.state,V.__v=$,F)k&&M.getDerivedStateFromProps==null&&V.componentWillMount!=null&&V.componentWillMount(),k&&V.componentDidMount!=null&&V.__h.push(V.componentDidMount);else{if(k&&M.getDerivedStateFromProps==null&&H!==B&&V.componentWillReceiveProps!=null&&V.componentWillReceiveProps(H,O),$.__v==j.__v||!V.__e&&V.shouldComponentUpdate!=null&&V.shouldComponentUpdate(H,V.__s,O)===!1){$.__v!=j.__v&&(V.props=H,V.state=V.__s,V.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(W){W&&(W.__=$)}),l6.push.apply(V.__h,V._sb),V._sb=[],V.__h.length&&Y.push(V);break _}V.componentWillUpdate!=null&&V.componentWillUpdate(H,V.__s,O),k&&V.componentDidUpdate!=null&&V.__h.push(function(){V.componentDidUpdate(B,U,D)})}if(V.context=O,V.props=H,V.__P=_,V.__e=!1,y=y_.__r,I=0,k)V.state=V.__s,V.__d=!1,y&&y($),Q=V.render(V.props,V.state,V.context),l6.push.apply(V.__h,V._sb),V._sb=[];else do V.__d=!1,y&&y($),Q=V.render(V.props,V.state,V.context),V.state=V.__s;while(V.__d&&++I<25);V.state=V.__s,V.getChildContext!=null&&(G=Y$(Y$({},G),V.getChildContext())),k&&!F&&V.getSnapshotBeforeUpdate!=null&&(D=V.getSnapshotBeforeUpdate(B,U)),A=Q!=null&&Q.type===r6&&Q.key==null?nj(Q.props.children):Q,q=lj(_,n6(A)?A:[A],$,j,G,Z,X,Y,q,L,K),V.base=$.__e,$.__u&=-161,V.__h.length&&Y.push(V),E&&(V.__E=V.__=null)}catch(W){if($.__v=null,L||X!=null)if(W.then){for($.__u|=L?160:128;q&&q.nodeType==8&&q.nextSibling;)q=q.nextSibling;X[X.indexOf(q)]=null,$.__e=q}else{for(J=X.length;J--;)a8(X[J]);i8($)}else $.__e=j.__e,$.__k=j.__k,W.then||i8($);y_.__e(W,$,j)}else X==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):q=$.__e=gB(j.__e,$,j,G,Z,X,Y,L,K);return(Q=y_.diffed)&&Q($),128&$.__u?void 0:q}function i8(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(i8))}function pj(_,$,j){for(var G=0;G<j.length;G++)_3(j[G],j[++G],j[++G]);y_.__c&&y_.__c($,_),_.some(function(Z){try{_=Z.__h,Z.__h=[],_.some(function(X){X.call(Z)})}catch(X){y_.__e(X,Z.__v)}})}function nj(_){return typeof _!="object"||_==null||_.__b>0?_:n6(_)?_.map(nj):Y$({},_)}function gB(_,$,j,G,Z,X,Y,q,L){var K,Q,V,F,B,U,D,E=j.props||c6,H=$.props,k=$.type;if(k=="svg"?Z="http://www.w3.org/2000/svg":k=="math"?Z="http://www.w3.org/1998/Math/MathML":Z||(Z="http://www.w3.org/1999/xhtml"),X!=null){for(K=0;K<X.length;K++)if((B=X[K])&&"setAttribute"in B==!!k&&(k?B.localName==k:B.nodeType==3)){_=B,X[K]=null;break}}if(_==null){if(k==null)return document.createTextNode(H);_=document.createElementNS(Z,k,H.is&&H),q&&(y_.__m&&y_.__m($,X),q=!1),X=null}if(k==null)E===H||q&&_.data==H||(_.data=H);else{if(X=X&&p6.call(_.childNodes),!q&&X!=null)for(E={},K=0;K<_.attributes.length;K++)E[(B=_.attributes[K]).name]=B.value;for(K in E)B=E[K],K=="dangerouslySetInnerHTML"?V=B:K=="children"||(K in H)||K=="value"&&("defaultValue"in H)||K=="checked"&&("defaultChecked"in H)||u6(_,K,null,B,Z);for(K in H)B=H[K],K=="children"?F=B:K=="dangerouslySetInnerHTML"?Q=B:K=="value"?U=B:K=="checked"?D=B:q&&typeof B!="function"||E[K]===B||u6(_,K,B,E[K],Z);if(Q)q||V&&(Q.__html==V.__html||Q.__html==_.innerHTML)||(_.innerHTML=Q.__html),$.__k=[];else if(V&&(_.innerHTML=""),lj($.type=="template"?_.content:_,n6(F)?F:[F],$,j,G,k=="foreignObject"?"http://www.w3.org/1999/xhtml":Z,X,Y,X?X[0]:j.__k&&u4(j,0),q,L),X!=null)for(K=X.length;K--;)a8(X[K]);q||(K="value",k=="progress"&&U==null?_.removeAttribute("value"):U!=null&&(U!==_[K]||k=="progress"&&!U||k=="option"&&U!=E[K])&&u6(_,K,U,E[K],Z),K="checked",D!=null&&D!=_[K]&&u6(_,K,D,E[K],Z))}return _}function _3(_,$,j){try{if(typeof _=="function"){var G=typeof _.__u=="function";G&&_.__u(),G&&$==null||(_.__u=_($))}else _.current=$}catch(Z){y_.__e(Z,j)}}function rj(_,$,j){var G,Z;if(y_.unmount&&y_.unmount(_),(G=_.ref)&&(G.current&&G.current!=_.__e||_3(G,null,$)),(G=_.__c)!=null){if(G.componentWillUnmount)try{G.componentWillUnmount()}catch(X){y_.__e(X,$)}G.base=G.__P=null}if(G=_.__k)for(Z=0;Z<G.length;Z++)G[Z]&&rj(G[Z],$,j||typeof _.type!="function");j||a8(_.__e),_.__c=_.__=_.__e=void 0}function uB(_,$,j){return this.constructor(_,j)}function q$(_,$,j){var G,Z,X,Y;$==document&&($=document.documentElement),y_.__&&y_.__(_,$),Z=(G=typeof j=="function")?null:j&&j.__k||$.__k,X=[],Y=[],e8($,_=(!G&&j||$).__k=t8(r6,null,[_]),Z||c6,c6,$.namespaceURI,!G&&j?[j]:Z?null:$.firstChild?p6.call($.childNodes):null,X,!G&&j?j:Z?Z.__e:$.firstChild,G,Y),pj(X,_,Y)}function bB(_){function $(j){var G,Z;return this.getChildContext||(G=new Set,(Z={})[$.__c]=this,this.getChildContext=function(){return Z},this.componentWillUnmount=function(){G=null},this.shouldComponentUpdate=function(X){this.props.value!=X.value&&G.forEach(function(Y){Y.__e=!0,d8(Y)})},this.sub=function(X){G.add(X);var Y=X.componentWillUnmount;X.componentWillUnmount=function(){G&&G.delete(X),Y&&Y.call(X)}}),j.children}return $.__c="__cC"+mj++,$.__=_,$.Provider=$.__l=($.Consumer=function(j,G){return j.children(G)}).contextType=$,$}function v4(_,$){S_.__h&&S_.__h(T_,_,b4||$),b4=0;var j=T_.__H||(T_.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function C(_){return b4=1,ij(oj,_)}function ij(_,$,j){var G=v4(f$++,2);if(G.t=_,!G.__c&&(G.__=[j?j($):oj(void 0,$),function(q){var L=G.__N?G.__N[0]:G.__[0],K=G.t(L,q);L!==K&&(G.__N=[K,G.__[1]],G.__c.setState({}))}],G.__c=T_,!T_.__f)){var Z=function(q,L,K){if(!G.__c.__H)return!0;var Q=G.__c.__H.__.filter(function(F){return F.__c});if(Q.every(function(F){return!F.__N}))return!X||X.call(this,q,L,K);var V=G.__c.props!==q;return Q.some(function(F){if(F.__N){var B=F.__[0];F.__=F.__N,F.__N=void 0,B!==F.__[0]&&(V=!0)}}),X&&X.call(this,q,L,K)||V};T_.__f=!0;var{shouldComponentUpdate:X,componentWillUpdate:Y}=T_;T_.componentWillUpdate=function(q,L,K){if(this.__e){var Q=X;X=void 0,Z(q,L,K),X=Q}Y&&Y.call(this,q,L,K)},T_.shouldComponentUpdate=Z}return G.__N||G.__}function g(_,$){var j=v4(f$++,3);!S_.__s&&$3(j.__H,$)&&(j.__=_,j.u=$,T_.__H.__h.push(j))}function m4(_,$){var j=v4(f$++,4);!S_.__s&&$3(j.__H,$)&&(j.__=_,j.u=$,T_.__h.push(j))}function u(_){return b4=5,X0(function(){return{current:_}},[])}function vB(_,$,j){b4=6,m4(function(){if(typeof _=="function"){var G=_($());return function(){_(null),G&&typeof G=="function"&&G()}}if(_)return _.current=$(),function(){return _.current=null}},j==null?j:j.concat(_))}function X0(_,$){var j=v4(f$++,7);return $3(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function f(_,$){return b4=8,X0(function(){return _},$)}function mB(_){var $=T_.context[_.__c],j=v4(f$++,9);return j.c=_,$?(j.__==null&&(j.__=!0,$.sub(T_)),$.props.value):_.__}function cB(_,$){S_.useDebugValue&&S_.useDebugValue($?$(_):_)}function lB(_){var $=v4(f$++,10),j=C();return $.__=_,T_.componentDidCatch||(T_.componentDidCatch=function(G,Z){$.__&&$.__(G,Z),j[1](G)}),[j[0],function(){j[1](void 0)}]}function hB(){for(var _;_=dj.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(m6),$.__h.some(o8),$.__h=[]}catch(j){$.__h=[],S_.__e(j,_.__v)}}}function pB(_){var $,j=function(){clearTimeout(G),Rj&&cancelAnimationFrame($),setTimeout(_)},G=setTimeout(j,35);Rj&&($=requestAnimationFrame(j))}function m6(_){var $=T_,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),T_=$}function o8(_){var $=T_;_.__c=_.__(),T_=$}function $3(_,$){return!_||_.length!==$.length||$.some(function(j,G){return j!==_[G]})}function oj(_,$){return typeof $=="function"?$(_):$}function nB(_){var $=Sj.get(this);return $||($=new Map,Sj.set(this,$)),($=sj(this,$.get(_)||($.set(_,$=function(j){for(var G,Z,X=1,Y="",q="",L=[0],K=function(F){X===1&&(F||(Y=Y.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?L.push(0,F,Y):X===3&&(F||Y)?(L.push(3,F,Y),X=2):X===2&&Y==="..."&&F?L.push(4,F,0):X===2&&Y&&!F?L.push(5,0,!0,Y):X>=5&&((Y||!F&&X===5)&&(L.push(X,0,Y,Z),X=6),F&&(L.push(X,F,0,Z),X=6)),Y=""},Q=0;Q<j.length;Q++){Q&&(X===1&&K(),K(Q));for(var V=0;V<j[Q].length;V++)G=j[Q][V],X===1?G==="<"?(K(),L=[L],X=3):Y+=G:X===4?Y==="--"&&G===">"?(X=1,Y=""):Y=G+Y[0]:q?G===q?q="":Y+=G:G==='"'||G==="'"?q=G:G===">"?(K(),X=1):X&&(G==="="?(X=5,Z=Y,Y=""):G==="/"&&(X<5||j[Q][V+1]===">")?(K(),X===3&&(L=L[0]),X=L,(L=L[0]).push(2,0,X),X=0):G===" "||G==="\t"||G===`
`||G==="\r"?(K(),X=2):Y+=G),X===3&&Y==="!--"&&(X=4,L=L[0])}return K(),L}(_)),$),arguments,[])).length>1?$:$[0]}var p6,y_,gj,CB,C$,kj,uj,bj,h8,b6,f5,vj,s8,n8,r8,mj,c6,l6,fB,n6,f$,T_,p8,Tj,b4=0,dj,S_,yj,xj,Ij,Cj,fj,Pj,Rj,sj=function(_,$,j,G){var Z;$[0]=0;for(var X=1;X<$.length;X++){var Y=$[X++],q=$[X]?($[0]|=Y?1:2,j[$[X++]]):$[++X];Y===3?G[0]=q:Y===4?G[1]=Object.assign(G[1]||{},q):Y===5?(G[1]=G[1]||{})[$[++X]]=q:Y===6?G[1][$[++X]]+=q+"":Y?(Z=_.apply(q,sj(_,q,j,["",null])),G.push(Z),q[0]?$[0]|=2:($[X-2]=0,$[X]=Z)):G.push(q)}return G},Sj,N;var x0=W_(()=>{c6={},l6=[],fB=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,n6=Array.isArray;p6=l6.slice,y_={__e:function(_,$,j,G){for(var Z,X,Y;$=$.__;)if((Z=$.__c)&&!Z.__)try{if((X=Z.constructor)&&X.getDerivedStateFromError!=null&&(Z.setState(X.getDerivedStateFromError(_)),Y=Z.__d),Z.componentDidCatch!=null&&(Z.componentDidCatch(_,G||{}),Y=Z.__d),Y)return Z.__E=Z}catch(q){_=q}throw _}},gj=0,CB=function(_){return _!=null&&_.constructor===void 0},P5.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Y$({},this.state),typeof _=="function"&&(_=_(Y$({},j),this.props)),_&&Y$(j,_),_!=null&&this.__v&&($&&this._sb.push($),d8(this))},P5.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),d8(this))},P5.prototype.render=r6,C$=[],uj=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,bj=function(_,$){return _.__v.__b-$.__v.__b},h6.__r=0,h8=Math.random().toString(8),b6="__d"+h8,f5="__a"+h8,vj=/(PointerCapture)$|Capture$/i,s8=0,n8=wj(!1),r8=wj(!0),mj=0;dj=[],S_=y_,yj=S_.__b,xj=S_.__r,Ij=S_.diffed,Cj=S_.__c,fj=S_.unmount,Pj=S_.__;S_.__b=function(_){T_=null,yj&&yj(_)},S_.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),Pj&&Pj(_,$)},S_.__r=function(_){xj&&xj(_),f$=0;var $=(T_=_.__c).__H;$&&(p8===T_?($.__h=[],T_.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(m6),$.__h.some(o8),$.__h=[],f$=0)),p8=T_},S_.diffed=function(_){Ij&&Ij(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(dj.push($)!==1&&Tj===S_.requestAnimationFrame||((Tj=S_.requestAnimationFrame)||pB)(hB)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),p8=T_=null},S_.__c=function(_,$){$.some(function(j){try{j.__h.some(m6),j.__h=j.__h.filter(function(G){return!G.__||o8(G)})}catch(G){$.some(function(Z){Z.__h&&(Z.__h=[])}),$=[],S_.__e(G,j.__v)}}),Cj&&Cj(_,$)},S_.unmount=function(_){fj&&fj(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(G){try{m6(G)}catch(Z){$=Z}}),j.__H=void 0,$&&S_.__e($,j.__v))};Rj=typeof requestAnimationFrame=="function";Sj=new Map;N=nB.bind(t8)});function E1(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function Q_(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{return}}function V$(_,$=!1){let j=E1(_);if(j===null)return $;return j==="true"}function V4(_,$=null){let j=E1(_);if(j===null)return $;let G=parseInt(j,10);return Number.isFinite(G)?G:$}function Y2(_){let $=E1(_);if(!$)return null;try{return JSON.parse($)}catch{return null}}function v3(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function EZ(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let G=j.length===3?j.split("").map((X)=>X+X).join(""):j,Z=parseInt(G,16);return{r:Z>>16&255,g:Z>>8&255,b:Z&255,hex:`#${G.toLowerCase()}`}}function jH(_,$){try{if(document.body){_.style.display="none",document.body.appendChild(_);let j=getComputedStyle(_).color||_.style.color;return document.body.removeChild(_),j}}catch{return $}return $}function GH(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=jH(j,j.style.color).match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!Z)return null;let X=parseInt(Z[1],10),Y=parseInt(Z[2],10),q=parseInt(Z[3],10);if(![X,Y,q].every((K)=>Number.isFinite(K)))return null;let L=`#${[X,Y,q].map((K)=>K.toString(16).padStart(2,"0")).join("")}`;return{r:X,g:Y,b:q,hex:L}}function Q4(_){return EZ(_)||GH(_)}function m3(_,$,j){let G=Math.round(_.r+($.r-_.r)*j),Z=Math.round(_.g+($.g-_.g)*j),X=Math.round(_.b+($.b-_.b)*j);return`rgb(${G} ${Z} ${X})`}function q2(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function ZH(_){let $=_.r/255,j=_.g/255,G=_.b/255,Z=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),X=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),Y=G<=0.03928?G/12.92:Math.pow((G+0.055)/1.055,2.4);return 0.2126*Z+0.7152*X+0.0722*Y}function XH(_){return ZH(_)>0.4?"#000000":"#ffffff"}function DZ(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function c3(_){return NZ[_]||NZ.default}function YH(_){return _.mode==="auto"?DZ():_.mode}function WZ(_,$){let j=c3(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||F$}function Q$(_,$,j){let G=Q4(_);if(!G)return _;return m3(G,$,j)}function OZ(_,$,j){let G=Q4($);if(!G)return _;let X=EZ(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:Q$(_.bgPrimary,G,0.08),bgSecondary:Q$(_.bgSecondary,G,0.12),bgHover:Q$(_.bgHover,G,0.16),textPrimary:Q$(_.textPrimary,G,j==="dark"?0.08:0.06),textSecondary:Q$(_.textSecondary,G,j==="dark"?0.12:0.1),borderColor:Q$(_.borderColor,G,0.1),accent:G.hex,accentHover:X?m3(G,X,0.18):G.hex,warning:Q$(_.warning||F$.warning,G,0.14),danger:Q$(_.danger,G,0.16),success:Q$(_.success,G,0.16)}}function qH(_,$){let j=Q4(_?.warning);if(j)return j.hex;let G=Q4($==="dark"?V2.warning:F$.warning)||Q4(F$.warning),Z=Q4(_?.accent);if(G&&Z)return m3(G,Z,$==="dark"?0.18:0.14);return $==="dark"?V2.warning:F$.warning}function LH(_,$){if(typeof document>"u")return;let j=document.documentElement,G=_.accent,Z=Q4(G),X=Z?q2(Z,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,Y=Z?q2(Z,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",q=Z?q2(Z,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",L=Z?XH(Z):$==="dark"?"#000000":"#ffffff",K=Z?q2(Z,$==="dark"?0.35:0.25):"rgba(29, 155, 240, 0.25)",Q=qH(_,$),V={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":G,"--accent-hover":_.accentHover||G,"--accent-color-alpha":K,"--accent-soft":Y,"--accent-soft-strong":q,"--accent-contrast-text":L,"--warning-color":Q,"--danger-color":_.danger||F$.danger,"--success-color":_.success||F$.success,"--search-highlight-color":X||"rgba(29, 155, 240, 0.2)"};Object.entries(V).forEach(([F,B])=>{if(B)j.style.setProperty(F,B)})}function KH(){if(typeof document>"u")return;let _=document.documentElement;$H.forEach(($)=>_.style.removeProperty($))}function a4(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,G=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!G)G=document.createElement("meta"),document.head.appendChild(G);if(G.setAttribute("name",_),j)G.setAttribute("id",j);return G}function UZ(_){let $=v3(F4?.theme||"default"),j=F4?.tint?String(F4.tint).trim():null,G=WZ($,_);if($==="default"&&j)G=OZ(G,j,_);if(G?.bgPrimary)return G.bgPrimary;return _==="dark"?V2.bgPrimary:F$.bgPrimary}function VH(_,$){if(typeof document>"u")return;let j=a4("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let G=a4("theme-color",{id:"theme-color-light"});if(G)G.setAttribute("media","(prefers-color-scheme: light)"),G.setAttribute("content",UZ("light"));let Z=a4("theme-color",{id:"theme-color-dark"});if(Z)Z.setAttribute("media","(prefers-color-scheme: dark)"),Z.setAttribute("content",UZ("dark"));let X=a4("msapplication-TileColor");if(X&&_)X.setAttribute("content",_);let Y=a4("msapplication-navbutton-color");if(Y&&_)Y.setAttribute("content",_);let q=a4("apple-mobile-web-app-status-bar-style");if(q)q.setAttribute("content",$==="dark"?"black-translucent":"default")}function QH(){if(typeof window>"u")return;let _={...F4,mode:HZ};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function FH(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function l3(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=v3(_?.theme||"default"),G=_?.tint?String(_.tint).trim():null,Z=c3(j),X=YH(Z),Y=WZ(j,X);F4={theme:j,tint:G},HZ=X;let q=document.documentElement;q.dataset.theme=X,q.dataset.colorTheme=j,q.dataset.tint=G?String(G):"",q.style.colorScheme=X;let L=Y;if(j==="default"&&G)L=OZ(Y,G,X);if(j==="default"&&!G)KH();else LH(L,X);if(VH(L.bgPrimary,X),QH(),$.persist!==!1)if(Q_(b3,j),G)Q_(K2,G);else Q_(K2,"")}function L2(){if(c3(F4.theme).mode!=="auto")return;l3(F4,{persist:!1})}function zZ(){if(typeof window>"u")return()=>{};let _=v3(E1(b3)||"default"),$=(()=>{let j=E1(K2);return j?j.trim():null})();if(l3({theme:_,tint:$},{persist:!1}),window.matchMedia&&!u3){let j=window.matchMedia("(prefers-color-scheme: dark)");if(j.addEventListener)j.addEventListener("change",L2);else if(j.addListener)j.addListener(L2);return u3=!0,()=>{if(j.removeEventListener)j.removeEventListener("change",L2);else if(j.removeListener)j.removeListener(L2);u3=!1}}return()=>{}}function t4(_){if(!_||typeof _!=="object")return;let $=FH(),j=_.chat_jid||_.chatJid||null,G=_.theme??_.name??_.colorTheme,Z=_.tint??null;if(!j||j===$)l3({theme:G||"default",tint:Z},{persist:!1});Q_(b3,G||"default"),Q_(K2,Z||"")}function JZ(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return DZ()}var b3="piclaw_theme",K2="piclaw_tint",F$,V2,NZ,$H,F4,HZ="light",u3=!1;var c5=W_(()=>{F$={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",warning:"#f0b429",danger:"#f4212e",success:"#00ba7c"},V2={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",warning:"#f0b429",danger:"#f4212e",success:"#00ba7c"},NZ={default:{label:"Default",mode:"auto",light:F$,dark:V2},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},$H=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-color-alpha","--accent-contrast-text","--accent-soft","--accent-soft-strong","--warning-color","--danger-color","--success-color","--search-highlight-color"],F4={theme:"default",tint:null}});function CZ(_=typeof window<"u"?window:null){return _||null}function F2(){if(typeof performance<"u"&&typeof performance.now==="function")return performance.now();return Date.now()}function r5(_,$){return`${_}:${$}`}function fZ(_){return`${_}-${Math.random().toString(36).slice(2,10)}-${Date.now().toString(36)}`}function PZ(_,$){if(_.length<=$)return;_.splice(0,_.length-$)}function N4(_){if(!_||typeof _!=="object")return null;return{..._}}function E4(_){if(!_)return null;return U4.find(($)=>$.id===_)||null}function p3(_,$){if(typeof performance>"u"||typeof performance.mark!=="function")return;try{performance.mark(`piclaw:${_}:${$}`)}catch(j){console.debug("[app-perf] Ignoring performance.mark failure.",j,{traceId:_,phase:$})}}function RZ(_){if(typeof performance>"u"||typeof performance.clearMarks!=="function")return;try{performance.clearMarks(`piclaw:${_}:start`);let $=E4(_);if(!$)return;for(let j of $.phases)performance.clearMarks(`piclaw:${_}:${j.phase}`)}catch($){console.debug("[app-perf] Ignoring performance.clearMarks failure.",$,{traceId:_})}}function IZ(_,$,j){let G=H4.get(r5(_,$));if(G&&E4(G)?.status==="active")n5(G,"cancelled","superseded",{replacementType:_,replacementChatJid:$});let Z=fZ(_),X={id:Z,type:_,chatJid:$,startedAt:F2(),detail:N4(j),phases:[],status:"active"};return U4.push(X),PZ(U4,100),H4.set(r5(_,$),Z),p3(Z,"start"),Z}function n5(_,$,j,G,Z){let X=E4(_);if(!X||X.status!=="active")return;if(j)X.phases.push({phase:j,at:F2(),detail:N4(G)}),p3(X.id,j);if(X.status=$,X.completedAt=F2(),X.durationMs=X.completedAt-X.startedAt,Z!==void 0)X.error=Z instanceof Error?Z.message:String(Z);let Y=r5(X.type,X.chatJid);if(H4.get(Y)===X.id)H4.delete(Y);RZ(X.id)}function PH(_=CZ()){let $=_?.__PICLAW_PERF__;if($)return $;if(_)_.__PICLAW_PERF__=B2;return B2}function e4(_=CZ()){return PH(_)}function SZ(_,$,j){return e4().ensureTrace(_,$,j)}function N2(_,$){return e4().getActiveTraceId(_,$)}function _1(_,$,j){e4().markTrace(_,$,j)}function U2(_,$,j="settled",G){let Z=E4(_);if(!Z||Z.status!=="active")return!1;let X=new Set(Z.phases.map((Y)=>Y.phase));if(!$.every((Y)=>X.has(Y)))return!1;return n5(_,"completed",j,G),!0}function gZ(_,$,j="failed",G){e4().failTrace(_,$,j,G)}function uZ(_,$="cancelled",j){e4().cancelTrace(_,$,j)}function n3(_){return e4().recordRequest(_)}var U4,p5,H4,B2;var d5=W_(()=>{U4=[],p5=[],H4=new Map;B2={startTrace(_,$,j){return IZ(_,$,j)},ensureTrace(_,$,j){let G=H4.get(r5(_,$));if(G&&E4(G)?.status==="active")return G;return IZ(_,$,j)},getActiveTraceId(_,$){let j=H4.get(r5(_,$));return j&&E4(j)?.status==="active"?j:null},markTrace(_,$,j){let G=E4(_);if(!G||G.status!=="active")return;G.phases.push({phase:$,at:F2(),detail:N4(j)}),p3(G.id,$)},completeTrace(_,$="settled",j){n5(_,"completed",$,j)},failTrace(_,$,j="failed",G){n5(_,"failed",j,G,$)},cancelTrace(_,$="cancelled",j){n5(_,"cancelled",$,j)},recordRequest(_){let $=fZ("req");return p5.push({..._,id:$,detail:N4(_.detail)}),PZ(p5,300),$},getTraces(){return U4.map((_)=>({..._,detail:N4(_.detail),phases:_.phases.map(($)=>({...$,detail:N4($.detail)}))}))},getRequests(){return p5.map((_)=>({..._,detail:N4(_.detail)}))},clear(){U4.forEach((_)=>RZ(_.id)),U4.splice(0,U4.length),p5.splice(0,p5.length),H4.clear()},printSummary(){let _={traces:B2.getTraces(),requests:B2.getRequests()};return console.table(_.traces.map(($)=>({id:$.id,type:$.type,chatJid:$.chatJid,status:$.status,durationMs:Number($.durationMs||0).toFixed(1),lastPhase:$.phases[$.phases.length-1]?.phase||"start"}))),_}}});var e5={};Y1(e5,{uploadWorkspaceFile:()=>D2,uploadMedia:()=>j7,updateWorkspaceFile:()=>FE,submitAdaptiveCardAction:()=>G7,streamSidePrompt:()=>LE,stopAutoresearch:()=>$E,steerAgentQueueItem:()=>XE,setWorkspaceVisibility:()=>a5,setAgentThoughtVisibility:()=>VE,sendPeerAgentMessage:()=>sH,sendAgentMessage:()=>D1,searchPosts:()=>SH,saveWorkspaceSettings:()=>a3,saveWebPushSubscription:()=>_7,saveUiState:()=>o3,saveQuickActionsSettings:()=>s3,saveEnvironmentOverride:()=>H2,restoreChatBranch:()=>oH,respondToAgentRequest:()=>_5,reorderAgentQueueItem:()=>YE,renameWorkspaceFile:()=>B7,renameChatJid:()=>iH,renameChatBranch:()=>pH,removeAgentQueueItem:()=>ZE,reindexWorkspace:()=>K7,purgeChatBranch:()=>dH,pruneChatBranch:()=>rH,moveWorkspaceEntry:()=>N7,mergeChatBranchIntoParent:()=>nH,getWorkspaceTree:()=>s5,getWorkspaceRawUrl:()=>t5,getWorkspaceIndexStatus:()=>L7,getWorkspaceFileStat:()=>Q7,getWorkspaceFileDownloadUrl:()=>W2,getWorkspaceFile:()=>V7,getWorkspaceDownloadUrl:()=>O2,getWorkspaceBranch:()=>q7,getWebPushPublicKey:()=>e3,getTimeline:()=>g$,getThumbnailUrl:()=>X7,getThread:()=>gH,getSystemMetrics:()=>i3,getQuickActionsSettings:()=>o5,getPostsByHashtag:()=>d3,getMediaUrl:()=>P1,getMediaText:()=>QE,getMediaInfo:()=>E2,getMediaBlob:()=>Y7,getEnvironmentSettings:()=>t3,getChatBranches:()=>cH,getAutoresearchStatus:()=>_E,getAgents:()=>aH,getAgentThought:()=>KE,getAgentStatus:()=>tH,getAgentQueueState:()=>GE,getAgentModels:()=>D4,getAgentContext:()=>eH,getAgentCommands:()=>i5,getActiveChatAgents:()=>mH,forkChatBranch:()=>lH,dismissAutoresearch:()=>jE,deleteWorkspaceFile:()=>U7,deleteWebPushSubscription:()=>$7,deletePost:()=>vH,createWorkspaceFile:()=>F7,createRootChatSession:()=>hH,createReply:()=>bH,createPost:()=>uH,completeInstanceOobe:()=>qE,attachWorkspaceFile:()=>BE,addToWhitelist:()=>Z7,SSEClient:()=>z2});async function n0(_,$={}){let j=typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now(),G;try{G=await fetch(m_+_,{...$,headers:{"Content-Type":"application/json",...$.headers}})}catch(X){throw n3({method:String($.method||"GET").toUpperCase(),url:_,startedAt:j,durationMs:(typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now())-j,ok:!1,detail:{failedBeforeResponse:!0}}),X}let Z=(typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now())-j;if(n3({method:String($.method||"GET").toUpperCase(),url:_,startedAt:j,durationMs:Z,status:G.status,ok:G.ok,requestId:G.headers?.get?.("x-request-id")||null,serverTiming:G.headers?.get?.("Server-Timing")||null}),!G.ok){let X=await G.json().catch(()=>({error:"Unknown error"}));throw Error(X.error||`HTTP ${G.status}`)}return G.json()}function bZ(_){let $=String(_||"").split(`
`),j="message",G=[];for(let X of $)if(X.startsWith("event:"))j=X.slice(6).trim()||"message";else if(X.startsWith("data:"))G.push(X.slice(5).trim());let Z=G.join(`
`);if(!Z)return null;try{return{event:j,data:JSON.parse(Z)}}catch{return{event:j,data:Z}}}async function RH(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),G=new TextDecoder,Z="";while(!0){let{value:Y,done:q}=await j.read();if(q)break;Z+=G.decode(Y,{stream:!0});let L=Z.split(`

`);Z=L.pop()||"";for(let K of L){let Q=bZ(K);if(Q)$(Q.event,Q.data)}}Z+=G.decode();let X=bZ(Z);if(X)$(X.event,X.data)}async function g$(_=10,$=null,j=null){let G=`/timeline?limit=${_}`;if($)G+=`&before=${$}`;if(j)G+=`&chat_jid=${encodeURIComponent(j)}`;return n0(G)}async function d3(_,$=50,j=0,G=null){let Z=G?`&chat_jid=${encodeURIComponent(G)}`:"";return n0(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${Z}`)}async function SH(_,$=50,j=0,G=null,Z="current",X=null,Y=null){let q=G?`&chat_jid=${encodeURIComponent(G)}`:"",L=Z?`&scope=${encodeURIComponent(Z)}`:"",K=X?`&root_chat_jid=${encodeURIComponent(X)}`:"",Q=Y?.images?"&images=1":"",V=Y?.attachments?"&attachments=1":"";return n0(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${q}${L}${K}${Q}${V}`)}async function gH(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return n0(`/thread/${_}${j}`)}async function i3(){return n0("/agent/system-metrics")}async function o3(_){return n0("/agent/ui-state",{method:"POST",body:JSON.stringify(_||{})})}async function uH(_,$=[],j=null){let G=j?`?chat_jid=${encodeURIComponent(j)}`:"";return n0(`/post${G}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function bH(_,$,j=[],G=null){let Z=G?`?chat_jid=${encodeURIComponent(G)}`:"";return n0(`/post/reply${Z}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function vH(_,$=!1,j=null){let G=j?`&chat_jid=${encodeURIComponent(j)}`:"",Z=`/post/${_}?cascade=${$?"true":"false"}${G}`;return n0(Z,{method:"DELETE"})}async function D1(_,$,j=null,G=[],Z=null,X=null){let Y=X?`?chat_jid=${encodeURIComponent(X)}`:"",q={content:$,thread_id:j,media_ids:G};if(Z==="auto"||Z==="queue"||Z==="steer")q.mode=Z;return n0(`/agent/${_}/message${Y}`,{method:"POST",body:JSON.stringify(q)})}async function i5(_="web:default"){let $=typeof _==="string"&&_.trim()?_.trim():"web:default";return n0(`/agent/commands?chat_jid=${encodeURIComponent($)}`)}async function o5(){return n0("/agent/settings/quick-actions")}async function s3(_){return n0("/agent/settings/quick-actions",{method:"POST",body:JSON.stringify(_||{})})}async function a3(_){return n0("/agent/settings/workspace",{method:"POST",body:JSON.stringify(_||{})})}async function t3(){return n0("/agent/settings/environment")}async function H2(_){return n0("/agent/settings/environment",{method:"POST",body:JSON.stringify(_||{})})}async function mH(){return n0("/agent/active-chats")}async function cH(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let G=j.toString()?`?${j.toString()}`:"";return n0(`/agent/branches${G}`)}async function lH(_,$={}){return n0("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{}})})}async function hH(_){return n0("/agent/root-session",{method:"POST",body:JSON.stringify({agent_name:_})})}async function pH(_,$={}){return n0("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function nH(_){return n0("/agent/branch-merge-parent",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function rH(_){return n0("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function dH(_){return n0("/agent/branch-purge",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function iH(_,$){return n0("/agent/rename-jid",{method:"POST",body:JSON.stringify({old_jid:_,new_jid:$})})}async function oH(_,$={}){return n0("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function sH(_,$,j,G="auto",Z={}){let X={source_chat_jid:_,content:j,mode:G,...Z?.sourceAgentName?{source_agent_name:Z.sourceAgentName}:{},...Z?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return n0("/agent/peer-message",{method:"POST",body:JSON.stringify(X)})}async function e3(){return n0("/agent/push/vapid-public-key")}async function _7(_,$={}){let j={subscription:_,...$?.deviceId?{device_id:$.deviceId}:{}};return n0("/agent/push/subscription",{method:"POST",body:JSON.stringify(j)})}async function $7(_,$={}){let j={subscription:_,...$?.deviceId?{device_id:$.deviceId}:{}};return n0("/agent/push/subscription",{method:"DELETE",body:JSON.stringify(j)})}async function aH(){return n0("/agent/roster")}async function tH(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return n0(`/agent/status${$}`)}async function eH(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return n0(`/agent/context${$}`)}async function _E(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return n0(`/agent/autoresearch/status${$}`)}async function $E(_=null,$={}){return n0("/agent/autoresearch/stop",{method:"POST",body:JSON.stringify({chat_jid:_||void 0,generate_report:$?.generateReport!==!1})})}async function jE(_=null){return n0("/agent/autoresearch/dismiss",{method:"POST",body:JSON.stringify({chat_jid:_||void 0})})}async function GE(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return n0(`/agent/queue-state${$}`)}async function ZE(_,$=null){let j=await fetch(m_+"/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let G=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(G.error||`HTTP ${j.status}`)}return j.json()}async function XE(_,$=null){let j=await fetch(m_+"/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let G=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(G.error||`HTTP ${j.status}`)}return j.json()}async function YE(_,$,j=null){let G=await fetch(m_+"/agent/queue-reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({from_index:_,to_index:$,chat_jid:j||void 0})});if(!G.ok){let Z=await G.json().catch(()=>({error:"Failed to reorder queued item"}));throw Error(Z.error||`HTTP ${G.status}`)}return G.json()}async function D4(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return n0(`/agent/models${$}`)}async function qE(_="provider-ready"){return n0("/agent/oobe/complete",{method:"POST",body:JSON.stringify({kind:_})})}async function j7(_){let $=new FormData;$.append("file",_);let j=await fetch(m_+"/media/upload",{method:"POST",body:$});if(!j.ok){let G=await j.json().catch(()=>({error:"Upload failed"}));throw Error(G.error||`HTTP ${j.status}`)}return j.json()}async function _5(_,$,j=null){let G=await fetch(m_+"/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!G.ok){let Z=await G.json().catch(()=>({error:"Failed to respond"}));throw Error(Z.error||`HTTP ${G.status}`)}return G.json()}async function G7(_){let $=await fetch(m_+"/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function LE(_,$={}){let j=await fetch(m_+"/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let X=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(X.error||`HTTP ${j.status}`)}let G=null,Z=null;if(await RH(j,(X,Y)=>{if($.onEvent?.(X,Y),X==="side_prompt_thinking_delta")$.onThinkingDelta?.(Y?.delta||"");else if(X==="side_prompt_text_delta")$.onTextDelta?.(Y?.delta||"");else if(X==="side_prompt_done")G=Y;else if(X==="side_prompt_error")Z=Y}),Z){let X=Error(Z?.error||"Side prompt failed");throw X.payload=Z,X}return G}async function Z7(_,$){let j=await fetch(m_+"/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let G=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(G.error||`HTTP ${j.status}`)}return j.json()}async function KE(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return n0(j)}async function VE(_,$,j){return n0("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function P1(_){return`${m_}/media/${_}`}function X7(_){return`${m_}/media/${_}/thumbnail`}async function E2(_){let $=await fetch(`${m_}/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function QE(_){let $=await fetch(`${m_}/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function Y7(_){let $=await fetch(`${m_}/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function s5(_="",$=2,j=!1){let G=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return n0(G)}async function q7(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return n0($)}async function L7(_="all"){let $=`/workspace/index-status?scope=${encodeURIComponent(_||"all")}`;return n0($)}async function K7(_="all"){return n0("/workspace/reindex",{method:"POST",body:JSON.stringify({scope:_})})}async function V7(_,$=20000,j=null){let G=j?`&mode=${encodeURIComponent(j)}`:"",Z=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${G}`;return n0(Z)}async function Q7(_){return n0(`/workspace/stat?path=${encodeURIComponent(_)}`)}async function FE(_,$){return n0("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function BE(_){return n0("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}function UE(_,$="",j={}){let G=new URLSearchParams;if($)G.set("path",$);if(j.overwrite)G.set("overwrite","1");let Z=G.toString();return Z?`${_}?${Z}`:_}function HE(){if(globalThis.crypto?.randomUUID)return globalThis.crypto.randomUUID();return`upload-${Date.now()}-${Math.random().toString(36).slice(2)}`}function EE(_,$,j,G){return new Promise((Z,X)=>{let Y=new XMLHttpRequest;Y.open("POST",m_+$);for(let[q,L]of Object.entries(j||{}))if(L!==void 0&&L!==null)Y.setRequestHeader(q,String(L));Y.upload.onprogress=(q)=>{if(typeof G==="function")G({loaded:q.lengthComputable?q.loaded:0,total:q.lengthComputable?q.total:_.size,lengthComputable:q.lengthComputable})},Y.onload=()=>{try{let q=Y.responseText?JSON.parse(Y.responseText):{};if(Y.status>=200&&Y.status<300)Z(q);else{let L=Error(q.error||`HTTP ${Y.status}`);L.status=Y.status,L.code=q.code,X(L)}}catch{let q=Error(`HTTP ${Y.status}`);q.status=Y.status,X(q)}},Y.onerror=()=>X(Error("Upload failed (network error)")),Y.ontimeout=()=>X(Error("Upload timed out")),Y.send(_)})}async function DE(_,$="",j={}){let G=HE(),Z=UE("/workspace/upload-chunk",$,j),X=Math.max(1,Math.min(r3,Number(j.chunkSize)||NE)),Y=Math.max(0,Number(_?.size)||0),q=Math.max(1,Math.ceil(Y/X)),L=0,K=null;for(let Q=0;Q<q;Q+=1){let V=Q*X,F=Math.min(Y,V+X),B=_.slice(V,F),U=B.size;if(K=await EE(B,Z,{"X-Upload-Id":G,"X-Chunk-Index":Q,"X-Chunk-Total":q,"X-File-Name":_?.name||"upload.bin","X-File-Size":Y},(D)=>{if(typeof j.onProgress!=="function")return;let E=Math.min(Y,L+(D?.loaded||0)),H=Y||1;j.onProgress({loaded:E,total:H,percent:Math.round(E/H*100),chunkIndex:Q,chunkTotal:q})}),L+=U,typeof j.onProgress==="function"){let D=Y||1,E=Y?L:D;j.onProgress({loaded:E,total:D,percent:Math.round(E/D*100),chunkIndex:Q+1,chunkTotal:q})}}return K}async function D2(_,$="",j={}){if(_?.size>r3){let G=(_.size/1048576).toFixed(0),Z=(r3/1048576).toFixed(0),X=Error(`File too large (${G} MB). Maximum upload size is ${Z} MB.`);throw X.code="file_too_large",X}return await DE(_,$,j)}async function F7(_,$,j=""){let G=await fetch(m_+"/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!G.ok){let Z=await G.json().catch(()=>({error:"Create failed"})),X=Error(Z.error||`HTTP ${G.status}`);throw X.status=G.status,X.code=Z.code,X}return G.json()}async function B7(_,$){let j=await fetch(m_+"/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let G=await j.json().catch(()=>({error:"Rename failed"})),Z=Error(G.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=G.code,Z}return j.json()}async function N7(_,$){let j=await fetch(m_+"/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let G=await j.json().catch(()=>({error:"Move failed"})),Z=Error(G.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=G.code,Z}return j.json()}async function U7(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return n0($,{method:"DELETE"})}async function a5(_,$=!1){return n0("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function t5(_,$={}){let j=new URLSearchParams({path:String(_||"")});if($.download)j.set("download","1");return`${m_}/workspace/raw?${j.toString()}`}function W2(_){return t5(_,{download:!0})}function O2(_,$=!1){let j=`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`;return`${m_}/workspace/download?${j}`}class z2{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource(m_+"/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(G)=>{this.markActivity(),this.onEvent(j,JSON.parse(G.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),$("ui_meters"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_working_indicator","extension_ui_working_visible","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let G=Math.max(this.cooldownUntil-j,0),Z=Math.max(this.reconnectDelay,G);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},Z),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}var m_="",r3=1073741824,NE=8388608;var g_=W_(()=>{d5()});function j5(_){let $=typeof _==="string"?_.trim():"";return $?$:null}function p1(_={}){if(typeof window>"u")return;let $=j5(_.section);try{if(window.__piclawSettingsOpenRequested=!0,$)window.__piclawSettingsRequestedSection=$;else delete window.__piclawSettingsRequestedSection}catch(j){console.debug("[settings-dialog-events] failed to record open request flags",j)}window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:$?{section:$}:void 0}))}function x7(){if(typeof window>"u")return null;return j5(window.__piclawSettingsRequestedSection)}function M2(){if(typeof window>"u")return{open:!1,section:null};let _=Boolean(window.__piclawSettingsOpenRequested),$=x7();try{window.__piclawSettingsOpenRequested=!1,delete window.__piclawSettingsRequestedSection}catch(j){console.debug("[settings-dialog-events] failed to clear open request flags",j)}return{open:_,section:$}}function v$({children:_,className:$=""}){let[j,G]=C(null);return g(()=>{if(typeof document>"u")return;let Z=document.createElement("div");return document.body.appendChild(Z),G(Z),()=>{try{q$(null,Z)}finally{Z.remove()}}},[]),g(()=>{if(!j)return;j.className=$||"";return},[$,j]),m4(()=>{if(!j)return;q$(_,j);return},[_,j]),null}var w2=W_(()=>{x0()});function m$(_){let $=O4.findIndex((j)=>j.id===_.id);if($>=0)O4[$]=_;else O4.push(_);O4.sort((j,G)=>(j.order??500)-(G.order??500))}function MX(_){let $=O4.findIndex((j)=>j.id===_);if($>=0)O4.splice($,1)}function wX(){return[...O4]}function I7(){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent("piclaw:settings-panes-changed"))}var O4;var G5=W_(()=>{O4=[]});function cE(_){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(z4,{detail:{enabled:Boolean(_)}}))}function xX(_){if(typeof fetch!=="function")return;o3({ui_meters:_}).catch(($)=>{console.debug("[meters] Failed to persist meters UI state.",$)})}function lE(_){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(y2,{detail:{collapsed:Boolean(_)}}))}function Y6(_=!1){return V$(TX,_)}function IX(_=!1){return V$(yX,_)}function T2(_,$={}){let j=$.persist!==!1,G=$.persistServer!==!1,Z=Boolean(_);if(j)Q_(TX,Z?"true":"false");if(G)xX({enabled:Z});return cE(Z),Z}function C7(_,$={}){let j=$.persist!==!1,G=$.persistServer!==!1,Z=Boolean(_);if(j)Q_(yX,Z?"true":"false");if(G)xX({collapsed:Z});return lE(Z),Z}function f7(_){let $=typeof _?.mode==="string"?_.mode.trim().toLowerCase():"";if(typeof _?.enabled==="boolean")T2(Boolean(_.enabled),{persistServer:!1});else if($==="toggle"){let j=!Y6(!1);T2(j,{persistServer:!1})}if(typeof _?.collapsed==="boolean")C7(Boolean(_.collapsed),{persistServer:!1})}var TX="piclaw_system_meters_enabled",yX="piclaw_system_meters_collapsed",z4="piclaw-meters-change",y2="piclaw-meters-collapsed-change";var x2=W_(()=>{g_()});function CX(_,$){if(_===""||_===null||_===void 0)return $;let j=Number(_);return Number.isFinite(j)?j:$}function fX(_,{min:$=-1/0,max:j=1/0}={}){let G=Number.isFinite(Number($))?Number($):-1/0,Z=Number.isFinite(Number(j))?Number(j):1/0;return Math.min(Z,Math.max(G,Number(_)))}function H$(_,{fallback:$=0,min:j=-1/0,max:G=1/0}={}){let Z=CX(_,$);return fX(Z,{min:j,max:G})}function hE(_,{direction:$=1,step:j=1,fallback:G=0,min:Z=-1/0,max:X=1/0}={}){let Y=H$(_,{fallback:G,min:Z,max:X}),q=Math.abs(CX(j,1))||1,L=Number($)<0?-1:1;return fX(Y+L*q,{min:Z,max:X})}function u_({value:_,min:$,max:j,step:G=1,fallback:Z,width:X="80px",disabled:Y=!1,label:q,onChange:L}){let K=Number.isFinite(Number(Z))?Number(Z):H$(_,{fallback:0,min:$,max:j}),[Q,V]=C(String(_??K)),F=u(!1);g(()=>{if(!F.current)V(String(_??K))},[_,K]);let B=f((D)=>{F.current=!1;let E=H$(D,{fallback:K,min:$,max:j});V(String(E)),L?.(E)},[K,$,j,L]),U=f((D)=>{F.current=!1;let E=hE(_,{direction:D,step:G,fallback:K,min:$,max:j});V(String(E)),L?.(E)},[K,j,$,L,G,_]);return N`
        <span class="settings-number-stepper">
            <button
                type="button"
                class="settings-number-step-btn"
                aria-label=${`Decrease ${q||"value"}`}
                title=${`Decrease ${q||"value"}`}
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
                onInput=${(D)=>{F.current=!0,V(D.target.value)}}
                onBlur=${(D)=>B(D.target.value)}
                onKeyDown=${(D)=>{if(D.key==="Enter")D.preventDefault(),B(D.target.value),D.target.blur()}}
            />
            <button
                type="button"
                class="settings-number-step-btn"
                aria-label=${`Increase ${q||"value"}`}
                title=${`Increase ${q||"value"}`}
                disabled=${Y}
                onClick=${()=>U(1)}
            >+</button>
        </span>
    `}var J4=W_(()=>{x0()});function PX(_){let $=String(_||"").trim();if(!$)return"";if($.startsWith("http://")||$.startsWith("https://")||$.startsWith("data:")||$.startsWith("blob:"))return $;if($.startsWith("/workspace/"))return`/workspace/file?path=${encodeURIComponent($.slice(11))}`;if($.startsWith("/"))return"";if(/^[a-zA-Z]:[\\/]/.test($))return"";if($.startsWith("\\\\"))return"";if($.includes("\\"))return"";return`/workspace/file?path=${encodeURIComponent($.replace(/^\.\//,""))}`}function RX({value:_,onChange:$}){let j=u(null),[G,Z]=C(PX(_));g(()=>{Z(PX(_))},[_]);let X=f((Y)=>{let q=Y.target.files?.[0];if(!q)return;let L=new FileReader;L.onload=()=>{let K=L.result;Z(K),$?.(K)},L.readAsDataURL(q)},[$]);return N`
        <div class="settings-avatar-inline" onClick=${()=>j.current?.click()} title="Click to upload">
            ${G?N`<img src=${G} alt="avatar" />`:N`<span class="settings-avatar-placeholder">+</span>`}
            <input type="file" accept="image/*" ref=${j} style="display:none" onChange=${X} />
        </div>
    `}function SX(_={}){return{userName:_.userName||"",userAvatar:_.userAvatar||"",assistantName:_.assistantName||"",assistantAvatar:_.assistantAvatar||"",composeUploadLimitMb:_.composeUploadLimitMb??32,workspaceUploadLimitMb:_.workspaceUploadLimitMb??256}}function P7({settingsData:_,setStatus:$,mergeSettingsData:j}){let[G,Z]=C(""),[X,Y]=C(""),[q,L]=C(""),[K,Q]=C(""),[V,F]=C(32),[B,U]=C(256),[D,E]=C(""),[H,k]=C(!1),[z,O]=C(!1),[y,I]=C(()=>Y6(!1)),[A,J]=C(!1),M=u(""),W=u(null),w=u(!0);g(()=>{return w.current=!0,()=>{w.current=!1}},[]);let x=f((r)=>{let b=SX(r);Z(b.userName),Y(b.userAvatar),L(b.assistantName),Q(b.assistantAvatar),F(b.composeUploadLimitMb),U(b.workspaceUploadLimitMb),E(r?.widgetToken||""),M.current=JSON.stringify(b)},[]);g(()=>{x(_||{})},[_,x]),g(()=>{let r=(b)=>{I(Boolean(b?.detail?.enabled))};return window.addEventListener(z4,r),()=>window.removeEventListener(z4,r)},[]);let P=X0(()=>JSON.stringify(SX({userName:G,userAvatar:X,assistantName:q,assistantAvatar:K,composeUploadLimitMb:V,workspaceUploadLimitMb:B})),[G,X,q,K,V,B]);g(()=>{if(P===M.current)return;if(W.current)clearTimeout(W.current);return W.current=setTimeout(async()=>{if(!w.current)return;let r=document.activeElement;if(r&&r.closest?.(".settings-number-stepper"))return;try{let b=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:P}),a=await b.json().catch(()=>({}));if(!w.current)return;if(!b.ok||!a?.ok||!a?.settings)return;M.current=P,j?.(a.settings),J(!0),setTimeout(()=>{if(w.current)J(!1)},4000)}catch(b){console.warn("[settings/general] Failed to persist general settings snapshot.",b)}},800),()=>{if(W.current)clearTimeout(W.current)}},[P,j]);let R=_?.instanceTotp||{configured:!1,issuer:q||"Piclaw",label:G?`${q||"Piclaw"}:${G}`:q||"Piclaw",secret:"",otpauth:"",qrSvg:""},v=f(async()=>{if(!D)return;try{await navigator.clipboard?.writeText(D),k(!0),setTimeout(()=>{if(w.current)k(!1)},3000)}catch(r){console.warn("[settings/general] Failed to copy widget token.",r)}},[D]),c=f(async()=>{if(z)return;if(!confirm("Regenerate the widget token? Existing macOS widgets using the old token will stop updating."))return;O(!0);try{let r=await fetch("/agent/settings/widget-token/regenerate",{method:"POST"}),b=await r.json().catch(()=>({}));if(!r.ok||!b?.ok||!b?.settings)throw Error(b?.error||"Failed to regenerate widget token.");E(b.settings.widgetToken||""),j?.(b.settings),J(!0),setTimeout(()=>{if(w.current)J(!1)},4000)}catch(r){console.warn("[settings/general] Failed to regenerate widget token.",r)}finally{if(w.current)O(!1)}},[z,j]),h=typeof window<"u"&&window.isSecureContext;return N`
        <div class="settings-section">
            ${A&&N`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Settings applied. Changes take effect on the next turn.
                </div>
            `}
            <h3>Identity</h3>
            <div class="settings-row">
                <label>User</label>
                <${RX} value=${X} onChange=${Y} />
                <input type="text" value=${G} onInput=${(r)=>Z(r.target.value)} placeholder="Your name" />
            </div>
            <div class="settings-row">
                <label>Agent</label>
                <${RX} value=${K} onChange=${Q} />
                <input type="text" value=${q} onInput=${(r)=>L(r.target.value)} placeholder="Agent name" />
            </div>

            <h3 style="margin-top:20px">Notifications</h3>
            ${h?N`
                <div class="settings-row">
                    <label>Browser notifications</label>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <span class="settings-hint" style="margin:0">
                            Use the 🔔 bell button in the compose bar to enable/disable notifications.
                            Web Push requires HTTPS or localhost.
                        </span>
                    </div>
                </div>
            `:N`
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
                    <input type="checkbox" checked=${y}
                        onChange=${()=>{let r=T2(!y);I(r)}} />
                    <span class="settings-hint" style="margin:0">CPU/memory/network meters in the status bar. This browser only.</span>
                </div>
            </div>

            <h3 style="margin-top:20px">Instance Configuration</h3>
            <div class="settings-row">
                <label>Compose upload (MB)</label>
                <${u_}
                    label="compose upload limit"
                    value=${V}
                    min=${1}
                    max=${512}
                    fallback=${32}
                    width="80px"
                    onChange=${F}
                />
                <span class="settings-hint" style="margin:0">chat/media attachments</span>
            </div>
            <div class="settings-row">
                <label>Workspace upload (MB)</label>
                <${u_}
                    label="workspace upload limit"
                    value=${B}
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
                    <button type="button" onClick=${c} disabled=${z}>${z?"Regenerating…":"Regenerate"}</button>
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
                            ${R.configured?"Current web-login authenticator secret. Scan this QR to add another authenticator device.":"TOTP is not configured for this instance yet, so no setup QR is available."}
                        </div>
                    </div>
                </div>
                ${R.configured?N`
                    <div class="settings-totp-grid">
                        <div class="settings-totp-qr" dangerouslySetInnerHTML=${{__html:R.qrSvg}}></div>
                        <div class="settings-totp-meta">
                            <div class="settings-row settings-row-vertical">
                                <label>Issuer</label>
                                <input type="text" readonly value=${R.issuer||""} />
                            </div>
                            <div class="settings-row settings-row-vertical">
                                <label>Label</label>
                                <input type="text" readonly value=${R.label||""} />
                            </div>
                            <div class="settings-row settings-row-vertical">
                                <label>Secret</label>
                                <input type="text" readonly value=${R.secret||""} />
                            </div>
                        </div>
                    </div>
                `:null}
            </div>
        </div>
    `}var gX=W_(()=>{x0();x2();J4()});var bX={};Y1(bX,{SessionsSection:()=>pE});function uX(_={}){return{sessionAutoRotate:_.sessionAutoRotate!==!1,sessionMaxSizeMb:_.sessionMaxSizeMb??16,sessionMaxLines:_.sessionMaxLines??4000,sessionMaxCompactions:_.sessionMaxCompactions??3,sessionIsolation:_.sessionIsolation||"none",toolUseBudget:_.toolUseBudget??64}}function pE({settingsData:_,setStatus:$,mergeSettingsData:j}){let[G,Z]=C(!0),[X,Y]=C(16),[q,L]=C(4000),[K,Q]=C(3),[V,F]=C(64),[B,U]=C("none"),[D,E]=C(!1),H=u(""),k=u(null),z=u(!0);g(()=>{return z.current=!0,()=>{z.current=!1}},[]);let O=f((I)=>{let A=uX(I);Z(A.sessionAutoRotate),Y(A.sessionMaxSizeMb),L(A.sessionMaxLines),Q(A.sessionMaxCompactions),F(A.toolUseBudget),U(A.sessionIsolation),H.current=JSON.stringify(A)},[]);g(()=>{O(_||{})},[_,O]);let y=X0(()=>JSON.stringify(uX({sessionAutoRotate:G,sessionMaxSizeMb:X,sessionMaxLines:q,sessionMaxCompactions:K,toolUseBudget:V,sessionIsolation:B})),[G,X,q,K,V,B]);return g(()=>{if(y===H.current)return;if(k.current)clearTimeout(k.current);return k.current=setTimeout(async()=>{if(!z.current)return;let I=document.activeElement;if(I&&I.closest?.(".settings-number-stepper"))return;try{let A=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:y}),J=await A.json().catch(()=>({}));if(!z.current)return;if(!A.ok||!J?.ok||!J?.settings)return;H.current=y,j?.(J.settings),E(!0),setTimeout(()=>{if(z.current)E(!1)},4000)}catch(A){console.warn("[settings/sessions] Failed to persist session settings.",A)}},800),()=>{if(k.current)clearTimeout(k.current)}},[y,j]),N`
        <div class="settings-section">
            ${D&&N`
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
                <${u_}
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
                <${u_}
                    label="tool use budget"
                    value=${V}
                    min=${8}
                    max=${512}
                    fallback=${64}
                    width="80px"
                    onChange=${F}
                />
                <span class="settings-hint" style="margin:0">max tool-call messages per turn</span>
            </div>
            <div class="settings-row">
                <label>Session isolation</label>
                <select value=${B} onChange=${(I)=>U(I.target.value)}>
                    <option value="none">None — full cross-session visibility</option>
                    <option value="summary">Summary — tools visible, no arguments</option>
                    <option value="full">Full — sessions cannot see each other</option>
                </select>
            </div>
        </div>
    `}var vX=W_(()=>{x0();J4()});var mX={};Y1(mX,{CompactionSection:()=>rE});function nE(_={}){return{compactionTimeoutSec:_.compactionTimeoutSec??180,compactionBackoffBaseMin:_.compactionBackoffBaseMin??15,compactionBackoffMaxMin:_.compactionBackoffMaxMin??360,compactionThresholdPercent:_.compactionThresholdPercent??75,compactionBackoffDecayFactor:_.compactionBackoffDecayFactor??0.5,progressWatchdogEnabled:Boolean(_.progressWatchdogEnabled??!1),progressWatchdogTimeoutSec:_.progressWatchdogTimeoutSec??120,compactionBackoffs:Array.isArray(_.compactionBackoffs)?_.compactionBackoffs:[],progressWatchdogPhases:Array.isArray(_.progressWatchdogPhases)?_.progressWatchdogPhases:[]}}function R7(_){let $=String(_||"").trim();if(!$)return"—";let j=new Date($);if(Number.isNaN(j.getTime()))return $;return j.toLocaleString()}function rE({settingsData:_,setStatus:$,mergeSettingsData:j}){let[G,Z]=C(180),[X,Y]=C(15),[q,L]=C(360),[K,Q]=C(75),[V,F]=C(0.5),[B,U]=C(!1),[D,E]=C(120),[H,k]=C([]),[z,O]=C([]),[y,I]=C(!1),A=u(""),J=u(null),M=u(!0);g(()=>{return M.current=!0,()=>{M.current=!1}},[]);let W=f((P)=>{let R=nE(P);Z(R.compactionTimeoutSec),Y(R.compactionBackoffBaseMin),L(R.compactionBackoffMaxMin),Q(R.compactionThresholdPercent),F(R.compactionBackoffDecayFactor),U(R.progressWatchdogEnabled),E(R.progressWatchdogTimeoutSec),k(R.compactionBackoffs),O(R.progressWatchdogPhases),A.current=JSON.stringify({compactionTimeoutSec:R.compactionTimeoutSec,compactionBackoffBaseMin:R.compactionBackoffBaseMin,compactionBackoffMaxMin:R.compactionBackoffMaxMin,compactionThresholdPercent:R.compactionThresholdPercent,compactionBackoffDecayFactor:R.compactionBackoffDecayFactor,progressWatchdogEnabled:R.progressWatchdogEnabled,progressWatchdogTimeoutSec:R.progressWatchdogTimeoutSec})},[]);g(()=>{W(_||{})},[_,W]);let w=X0(()=>JSON.stringify({compactionTimeoutSec:G,compactionBackoffBaseMin:X,compactionBackoffMaxMin:q,compactionThresholdPercent:K,compactionBackoffDecayFactor:V,progressWatchdogEnabled:B,progressWatchdogTimeoutSec:D}),[G,X,q,K,V,B,D]);g(()=>{if(w===A.current)return;if(J.current)clearTimeout(J.current);return J.current=setTimeout(async()=>{if(!M.current)return;let P=document.activeElement;if(P&&P.closest?.(".settings-number-stepper"))return;try{$?.("Saving compaction settings…","info");let R=await fetch("/agent/settings/compaction",{method:"POST",headers:{"Content-Type":"application/json"},body:w}),v=await R.json().catch(()=>({}));if(!M.current)return;if(!R.ok||!v?.ok||!v?.settings){$?.(v?.error||"Failed to save compaction settings.","error");return}A.current=w,j?.(v.settings),W({..._||{},...v.settings||{}}),$?.("Compaction settings saved.","success"),I(!0),setTimeout(()=>{if(M.current)I(!1),$?.(null)},4000)}catch(R){if(console.warn("[settings/compaction] Failed to persist compaction settings.",R),M.current)$?.("Failed to save compaction settings.","error")}},800),()=>{if(J.current)clearTimeout(J.current)}},[w,j,$,W,_]);let x=f(async(P)=>{try{$?.(`Clearing compaction suppression for ${P}…`,"info");let R=await fetch("/agent/settings/compaction/reset-backoff",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chatJid:P})}),v=await R.json().catch(()=>({}));if(!R.ok||!v?.ok||!v?.settings){$?.(v?.error||"Failed to clear compaction suppression.","error");return}j?.(v.settings),W({..._||{},...v.settings||{}}),$?.(`Cleared compaction suppression for ${P}.`,"success")}catch(R){console.warn("[settings/compaction] Failed to clear compaction suppression.",R),$?.("Failed to clear compaction suppression.","error")}},[W,j,$,_]);return N`
        <div class="settings-section">
            ${y&&N`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Compaction settings applied. Existing turns keep their current timers; new turns use the updated values.
                </div>
            `}

            <h3>Automatic compaction</h3>
            <div class="settings-row">
                <label>Compaction threshold (%)</label>
                <${u_}
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
                <${u_}
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
                <${u_}
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
                <${u_}
                    label="compaction backoff max"
                    value=${q}
                    min=${1}
                    max=${10080}
                    fallback=${360}
                    width="90px"
                    onChange=${L}
                />
                <span class="settings-hint" style="margin:0">Upper bound for exponential suppression after repeated failures.</span>
            </div>

            <div class="settings-row">
                <label>Backoff decay factor</label>
                <${u_}
                    label="backoff decay factor"
                    value=${Math.round(V*100)}
                    min=${10}
                    max=${100}
                    fallback=${50}
                    width="80px"
                    onChange=${(P)=>F(P/100)}
                />
                <span class="settings-hint" style="margin:0">% — halves backoff after each successful compaction</span>
            </div>

            <h3 style="margin-top:20px">Stall watchdog</h3>
            <div class="settings-row">
                <label>Enable watchdog</label>
                <div style="display:flex; align-items:center; gap:10px;">
                    <input type="checkbox" checked=${B} onChange=${(P)=>U(Boolean(P.target.checked))} />
                    <span class="settings-hint" style="margin:0">Disabled by default. When enabled, a helper process terminates the runtime if an active phase stops heartbeating.</span>
                </div>
            </div>
            <div class="settings-row">
                <label>Watchdog timeout (sec)</label>
                <${u_}
                    label="watchdog timeout"
                    value=${D}
                    min=${0}
                    max=${3600}
                    fallback=${120}
                    width="90px"
                    disabled=${!B}
                    onChange=${E}
                />
                <span class="settings-hint" style="margin:0">How long an active phase can go without a heartbeat before the watchdog kills the runtime.</span>
            </div>

            <h3 style="margin-top:20px">Active compaction suppressions</h3>
            ${H.length===0?N`
                <p class="settings-hint">No chats are currently under compaction backoff.</p>
            `:N`
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
                            ${H.map((P)=>N`
                                <tr>
                                    <td><code>${P.chatJid}</code></td>
                                    <td>${P.failureCount}</td>
                                    <td>${R7(P.backoffUntil)}</td>
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
            ${z.length===0?N`
                <p class="settings-hint">No active tracked phases right now.</p>
            `:N`
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
                            ${z.map((P)=>N`
                                <tr>
                                    <td><code>${P.chatJid}</code></td>
                                    <td>${P.phase}</td>
                                    <td>${R7(P.startedAt)}</td>
                                    <td>${R7(P.lastProgressAt)}</td>
                                </tr>
                            `)}
                        </tbody>
                    </table>
                </div>
            `}
        </div>
    `}var cX=W_(()=>{x0();J4()});function hX(_){let $=String(_||"").trim().toLowerCase();if(!$)return null;let j=oE[$]||$;if(/^f(?:[1-9]|1[0-2])$/.test(j))return j;if(sE.has(j))return j;if(j.length===1)return j;if(/^[a-z0-9]+$/.test(j))return j;return null}function Z5(_){let $=String(_||"").trim();if(!$)return null;let j=$.split("+").map((X)=>X.trim()).filter(Boolean);if(!j.length)return null;let G={ctrl:!1,meta:!1,alt:!1,shift:!1,key:""};for(let X of j){let Y=X.toLowerCase(),q=iE[Y];if(q){G[q]=!0;continue}if(G.key)return null;let L=hX(X);if(!L||L==="escape")return null;G.key=L}if(!G.key)return null;let Z=[];if(G.ctrl)Z.push("ctrl");if(G.meta)Z.push("meta");if(G.alt)Z.push("alt");if(G.shift)Z.push("shift");return Z.push(G.key),Z.join("+")}function pX(_){return String(_||"").split(/[\n,]/).map(($)=>Z5($)).filter(($)=>Boolean($))}function l$(_){return _.join(", ")}function g7(){let _=Y2(lX);if(!_||typeof _!=="object")return{};let $={};for(let j of c$){let G=_[j.id];if(!Array.isArray(G))continue;let Z=G.map((X)=>Z5(String(X||""))).filter((X)=>Boolean(X));$[j.id]=[...new Set(Z)]}return $}function S7(_){if(Q_(lX,JSON.stringify(_)),typeof window<"u")window.dispatchEvent(new CustomEvent("piclaw:keyboard-shortcuts-changed",{detail:{config:_}}))}function nX(_){return dE.get(_)}function q6(_){let $=g7()[_];if(Array.isArray($))return $;return[...nX(_).defaultBindings]}function rX(_,$){let j=g7(),G=nX(_).defaultBindings,Z=[...new Set($.map((X)=>Z5(X)).filter((X)=>Boolean(X)))];if(Z.length===G.length&&Z.every((X,Y)=>X===G[Y]))delete j[_];else j[_]=Z;S7(j)}function u7(_){if(!_){S7({});return}let $=g7();delete $[_],S7($)}function I2(){let _={};for(let $ of c$)_[$.id]=q6($.id);return _}function aE(_){let $=typeof _==="string"?_:"";if(!$)return"";if($.length===1)return $.toLowerCase();return hX($)||$.toLowerCase()}function tE(_){let $=Z5(_);if(!$)return null;let j={ctrl:!1,meta:!1,alt:!1,shift:!1,key:""};for(let G of $.split("+")){if(G==="ctrl"||G==="meta"||G==="alt"||G==="shift"){j[G]=!0;continue}j.key=G}return j.key?j:null}function eE(_,$){let j=tE($);if(!j)return!1;if(aE(_?.key)!==j.key)return!1;let Z=!j.shift&&j.key.length===1&&/[^a-z0-9]/i.test(j.key);return Boolean(_?.ctrlKey)===j.ctrl&&Boolean(_?.metaKey)===j.meta&&Boolean(_?.altKey)===j.alt&&(Z||Boolean(_?.shiftKey)===j.shift)}function E$(_,$){return q6($).some((j)=>eE(_,j))}var lX="piclaw_keyboard_shortcuts_v1",c$,dE,iE,oE,sE;var C2=W_(()=>{c$=[{id:"openHelp",label:"Open keyboard help",description:"Open Settings → Keyboard. Default: question mark and quote when focus is outside compose and other editable fields.",defaultBindings:["?",'"']},{id:"openSettings",label:"Open settings",description:"Open the settings dialog.",defaultBindings:["ctrl+,","meta+,","alt+,"]},{id:"previousChat",label:"Previous session",description:"Switch to the previous visible chat/session.",defaultBindings:["["]},{id:"nextChat",label:"Next session",description:"Switch to the next visible chat/session.",defaultBindings:["]"]},{id:"toggleDock",label:"Toggle dock",description:"Show or hide the bottom dock panes.",defaultBindings:["ctrl+`"]},{id:"toggleZenMode",label:"Toggle zen mode",description:"Collapse surrounding chrome for a focused chat view.",defaultBindings:["ctrl+shift+z","meta+shift+z"]}],dE=new Map(c$.map((_)=>[_.id,_])),iE={cmd:"meta",command:"meta",meta:"meta",super:"meta",ctrl:"ctrl",control:"ctrl",alt:"alt",option:"alt",shift:"shift"},oE={esc:"escape",return:"enter",spacebar:"space"},sE=new Set(["tab","enter","space","backspace","delete","insert","clear","home","end","pageup","pagedown","up","down","left","right"])});var dX={};Y1(dX,{KeyboardSection:()=>$D});function _D(_,$,j){let G=String(_||"").trim().toLowerCase();if(!G)return!0;return[$.label,$.description,j,...$.defaultBindings||[]].some((Z)=>String(Z||"").toLowerCase().includes(G))}function $D({filter:_="",setStatus:$}){let[j,G]=C(()=>{let L=I2();return Object.fromEntries(Object.entries(L).map(([K,Q])=>[K,l$(Q)]))});g(()=>{let L=()=>{let K=I2();G(Object.fromEntries(Object.entries(K).map(([Q,V])=>[Q,l$(V)])))};return window.addEventListener("piclaw:keyboard-shortcuts-changed",L),()=>window.removeEventListener("piclaw:keyboard-shortcuts-changed",L)},[]);let Z=X0(()=>c$.filter((L)=>{let K=String(j[L.id]||"");return _D(_,L,K)}),[j,_]),X=(L)=>{let K=String(j[L]||"").trim(),V=(K?K.split(/[\n,]/).map((B)=>B.trim()).filter(Boolean):[]).filter((B)=>!Z5(B));if(V.length>0){$?.(`Invalid shortcut: ${V[0]}. Escape is reserved and cannot be rebound.`,"error");return}let F=pX(K);rX(L,F),G((B)=>({...B,[L]:l$(q6(L))})),$?.("Keyboard shortcuts saved.","success")},Y=(L)=>{u7(L),G((K)=>({...K,[L]:l$(q6(L))})),$?.("Keyboard shortcut reset to default.","success")};return N`
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
                <button class="settings-addon-btn" style="min-width:180px; height:40px; font-size:14px;" onClick=${()=>{u7();let L=I2();G(Object.fromEntries(Object.entries(L).map(([K,Q])=>[K,l$(Q)]))),$?.("Keyboard shortcuts reset to defaults.","success")}}>Reset all to defaults</button>
            </div>

            <div class="settings-shortcut-list" style="display:grid; gap:16px;">
                ${Z.map((L)=>N`
                    <div class="settings-shortcut-card" key=${L.id} style="display:grid; grid-template-columns:minmax(240px, 1.25fr) minmax(320px, 1fr); gap:18px; align-items:start; padding:18px 20px; border:1px solid var(--border-color, rgba(120,120,120,.22)); border-radius:16px; background:var(--panel-bg, rgba(255,255,255,.04));">
                        <div class="settings-shortcut-copy" style="min-width:0;">
                            <div class="settings-shortcut-title" style="font-size:17px; font-weight:700; line-height:1.3;">${L.label}</div>
                            <div class="settings-hint" style="margin:6px 0 0 0; font-size:14px; line-height:1.5;">${L.description}</div>
                            <div class="settings-shortcut-default" style="margin-top:10px; font-size:13px; color:var(--text-secondary);">Default: <code style="font-size:13px;">${l$(L.defaultBindings)}</code></div>
                        </div>
                        <div class="settings-shortcut-controls" style="display:grid; gap:10px; min-width:0;">
                            <input
                                type="text"
                                value=${j[L.id]||""}
                                placeholder=${l$(L.defaultBindings)}
                                onInput=${(K)=>G((Q)=>({...Q,[L.id]:K.target.value}))}
                                style="width:100%; min-height:46px; padding:10px 14px; font-size:16px; line-height:1.35; font-family:var(--font-mono, ui-monospace, monospace); border-radius:12px;"
                            />
                            <div class="settings-shortcut-actions" style="display:flex; justify-content:flex-end; align-items:center; gap:10px; flex-wrap:wrap;">
                                <button class="settings-addon-btn settings-addon-btn-install" style="min-width:96px; height:40px; font-size:14px;" onClick=${()=>X(L.id)}>Save</button>
                                <button class="settings-addon-btn" style="min-width:96px; height:40px; font-size:14px;" onClick=${()=>Y(L.id)}>Default</button>
                            </div>
                        </div>
                    </div>
                `)}
                ${Z.length===0&&N`<div class="settings-hint">No shortcuts match this filter.</div>`}
            </div>
        </div>
    `}var iX=W_(()=>{x0();C2()});function oX(_,$=b7){let j=Number(_);if(!Number.isFinite(j))return $;return Math.min(300,Math.max(15,Math.round(j)))}function sX(_,$=v7){let j=Number(_);if(!Number.isFinite(j))return $;return Math.min(8,Math.max(0,Math.round(j)))}function X5(){return{refreshIntervalSec:oX(V4(P2,b7),b7),folderPreviewDepth:sX(V4(R2,v7),v7)}}function aX(_={}){let $=X5(),j={refreshIntervalSec:oX(Object.prototype.hasOwnProperty.call(_,"refreshIntervalSec")?_.refreshIntervalSec:$.refreshIntervalSec,$.refreshIntervalSec),folderPreviewDepth:sX(Object.prototype.hasOwnProperty.call(_,"folderPreviewDepth")?_.folderPreviewDepth:$.folderPreviewDepth,$.folderPreviewDepth)};if(Q_(P2,String(j.refreshIntervalSec)),Q_(R2,String(j.folderPreviewDepth)),typeof window<"u")window.dispatchEvent(new CustomEvent(f2,{detail:{settings:j}}));return j}var f2="piclaw:workspace-client-settings-updated",P2="workspaceRefreshIntervalSec",R2="workspaceFolderPreviewDepth",b7=60,v7=3;var m7=()=>{};var eX={};Y1(eX,{WorkspaceSection:()=>jD});function tX(_={}){let $=_.workspaceSettings||{};return{webTerminalEnabled:$.webTerminalEnabled!==!1,vncAllowDirect:$.vncAllowDirect!==!1,treeMaxDepth:$.treeMaxDepth??4,treeMaxEntries:$.treeMaxEntries??5000}}function jD({settingsData:_,setStatus:$,mergeSettingsData:j}){let[G,Z]=C(!0),[X,Y]=C(!0),[q,L]=C(4),[K,Q]=C(5000),[V,F]=C(60),[B,U]=C(3),[D,E]=C(!1),[H,k]=C(!1),z=u(""),O=u(null),y=u(null),I=u(null),A=u(!0);g(()=>{return A.current=!0,()=>{if(A.current=!1,O.current)clearTimeout(O.current);if(y.current)clearTimeout(y.current);if(I.current)clearTimeout(I.current)}},[]);let J=f((w)=>{let x=tX(w),P=X5();Z(x.webTerminalEnabled),Y(x.vncAllowDirect),L(x.treeMaxDepth),Q(x.treeMaxEntries),F(P.refreshIntervalSec),U(P.folderPreviewDepth),z.current=JSON.stringify(x)},[]);g(()=>{J(_||{})},[_,J]);let M=X0(()=>JSON.stringify(tX({workspaceSettings:{webTerminalEnabled:G,vncAllowDirect:X,treeMaxDepth:q,treeMaxEntries:K}})),[G,X,q,K]);g(()=>{if(M===z.current)return;if(O.current)clearTimeout(O.current);return O.current=setTimeout(async()=>{if(!A.current)return;let w=document.activeElement;if(w&&w.closest?.(".settings-number-stepper"))return;try{let x=await a3(JSON.parse(M));if(!A.current||!x?.ok||!x?.settings)return;if(z.current=M,j?.({workspaceSettings:x.settings}),$?.(null),E(!0),y.current)clearTimeout(y.current);y.current=setTimeout(()=>{if(A.current)E(!1)},4000)}catch(x){$?.(String(x?.message||x),"error")}},800),()=>{if(O.current)clearTimeout(O.current)}},[M,j,$]);let W=f((w)=>{let x=aX(w);if(F(x.refreshIntervalSec),U(x.folderPreviewDepth),k(!0),I.current)clearTimeout(I.current);I.current=setTimeout(()=>{if(A.current)k(!1)},3000)},[]);return N`
        <div class="settings-section">
            ${D&&N`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Workspace settings applied. Server-side limits affect new workspace requests immediately.
                </div>
            `}
            ${H&&N`
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
                <${u_}
                    label="workspace tree max depth"
                    value=${q}
                    min=${1}
                    max=${8}
                    fallback=${4}
                    width="80px"
                    onChange=${L}
                />
                <span class="settings-hint" style="margin:0">caps all <code>/workspace/tree</code> requests</span>
            </div>
            <div class="settings-row">
                <label>Max entries per scan</label>
                <${u_}
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
                <${u_}
                    label="workspace refresh interval"
                    value=${V}
                    min=${15}
                    max=${300}
                    step=${15}
                    fallback=${60}
                    width="92px"
                    onChange=${(w)=>W({refreshIntervalSec:w})}
                />
            </div>
            <div class="settings-row">
                <label>Folder preview scan depth</label>
                <${u_}
                    label="folder preview scan depth"
                    value=${B}
                    min=${0}
                    max=${8}
                    fallback=${3}
                    width="80px"
                    onChange=${(w)=>W({folderPreviewDepth:w})}
                />
                <span class="settings-hint" style="margin:0">set to <code>0</code> to disable folder size preview scans</span>
            </div>
            <p class="settings-hint">Root and folder-expansion tree loads remain shallow; the folder size preview is the deepest workspace scan in the UI.</p>
        </div>
    `}var _Y=W_(()=>{x0();g_();m7();J4()});var $Y={};Y1($Y,{EnvironmentSection:()=>GD});function c7(_={}){let $=_.environmentSettings||_.settings||_.environment||{};return{variables:Array.isArray($.variables)?$.variables:[],overrides:$.overrides&&typeof $.overrides==="object"?$.overrides:{},count:Number($.count||0),overrideCount:Number($.overrideCount||0),keychainEnvNames:Array.isArray($.keychainEnvNames)?$.keychainEnvNames:[]}}function GD({settingsData:_,filter:$="",setStatus:j,mergeSettingsData:G}){let[Z,X]=C(()=>c7(_||{})),[Y,q]=C({}),[L,K]=C(""),[Q,V]=C(""),[F,B]=C(null);g(()=>{X(c7(_||{})),q({})},[_]);let U=f((O)=>{let y=c7({environmentSettings:O?.settings||O});return X(y),G?.({environmentSettings:y}),q({}),y},[G]),D=f(async()=>{try{let O=await t3();if(O?.ok)U(O.settings);j?.("Environment refreshed.","info")}catch(O){j?.(String(O?.message||O),"error")}},[U,j]),E=f(async(O,y)=>{let I=String(O||"").trim();if(!I)return;B(I);try{let A=await H2({action:"set",name:I,value:String(y??"")});if(A?.ok)U(A.settings);if(j?.(`Saved environment override for ${I}.`,"info"),I===L.trim())K(""),V("")}catch(A){j?.(String(A?.message||A),"error")}finally{B(null)}},[U,L,j]),H=f(async(O)=>{let y=String(O||"").trim();if(!y)return;B(y);try{let I=await H2({action:"clear",name:y});if(I?.ok)U(I.settings);j?.(`Cleared environment override for ${y}.`,"info")}catch(I){j?.(String(I?.message||I),"error")}finally{B(null)}},[U,j]),k=X0(()=>{let O=String($||"").trim().toLowerCase(),y=Array.isArray(Z.variables)?Z.variables:[];if(!O)return y;return y.filter((I)=>{return`${I?.name||""} ${I?.value||""} ${I?.source||""}`.toLowerCase().includes(O)})},[Z.variables,$]),z=f((O,y)=>{q((I)=>({...I||{},[O]:y}))},[]);return N`
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
                        value=${L}
                        placeholder="VARIABLE_NAME"
                        spellcheck="false"
                        onInput=${(O)=>K(O.target.value)}
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
                        disabled=${!L.trim()||F===L.trim()}
                        onClick=${()=>E(L,Q)}
                    >Save</button>
                </div>
            </div>

            <p class="settings-hint">
                ${Z.count} variables visible • ${Z.overrideCount} overrides active • ${Z.keychainEnvNames.length} keychain-injected variables hidden
            </p>

            <div class="settings-tool-list" style="max-height:58vh; overflow:auto;">
                ${k.map((O)=>{let y=String(O?.name||""),I=Object.prototype.hasOwnProperty.call(Y,y)?Y[y]:O.value,A=I!==O.value,J=F===y;return N`
                        <div class="settings-tool-row" key=${y} style="grid-template-columns:minmax(180px,0.45fr) minmax(240px,1fr) auto auto; align-items:center;">
                            <span class="settings-tool-name" title=${y}>${y}</span>
                            <input
                                type="text"
                                value=${I}
                                spellcheck="false"
                                onInput=${(M)=>z(y,M.target.value)}
                                style="min-width:0; width:100%; font-family:var(--font-mono, monospace);"
                            />
                            <span class="settings-tool-kind" title=${O.overridden?"Overridden in KV":"Inherited from process environment"}>
                                ${O.overridden?"override":"process"}
                            </span>
                            <span style="display:flex; gap:6px; justify-content:flex-end;">
                                <button type="button" disabled=${J||!A} onClick=${()=>E(y,I)}>Save</button>
                                <button type="button" disabled=${J||!O.overridden} onClick=${()=>H(y)}>Clear</button>
                            </span>
                        </div>
                    `})}
                ${k.length===0&&N`<p class="settings-hint">No environment variables match "${$}".</p>`}
            </div>
        </div>
    `}var jY=W_(()=>{x0();g_()});var GY={};Y1(GY,{ProvidersSection:()=>XD});function ZD(_){switch(_){case"oauth":return"OAuth";case"api_key":return"API key";case"custom":return"Configured";default:return"Configured"}}function XD({providers:_,setStatus:$}){let[j,G]=C(null),[Z,X]=C(null),[Y,q]=C({}),L=f((E,H)=>{q((k)=>({...k,[E]:H}))},[]),K=f(async(E)=>{let H=(Y.apiKey||"").trim();if(!H){$?.("API key cannot be empty.","error");return}G(E),$?.(`Configuring ${E}…`,"info");try{let k=JSON.stringify({provider:E,method:"api_key",api_key:H}),z=await D1("default",`/login __step2 ${k}`,null,[]);if(z?.command?.status==="error"){$?.(z.command.message,"error");return}$?.(z?.command?.message||`${E} configured.`,"success"),X(null),q({})}catch(k){$?.(String(k.message||k),"error")}finally{G(null)}},[Y,$]),Q=f(async(E,H)=>{G(E),$?.(`Configuring ${E}…`,"info");try{let k={provider:E,method:"custom"};for(let y of H.customFields||[])k[y.key]=(Y[y.key]||"").trim();let z=JSON.stringify(k),O=await D1("default",`/login __step2 ${z}`,null,[]);if(O?.command?.status==="error"){$?.(O.command.message,"error");return}$?.(O?.command?.message||`${E} configured.`,"success"),X(null),q({})}catch(k){$?.(String(k.message||k),"error")}finally{G(null)}},[Y,$]),V=f(async(E)=>{G(E),$?.(`Starting OAuth for ${E}…`,"info");try{let H=JSON.stringify({provider:E}),z=(await D1("default",`/login __step1 ${H}`,null,[]))?.command?.message||"";if(z.includes("http")){let O=z.match(/(https?:\/\/[^\s)]+)/);if(O)window.open(O[1],"_blank","noopener"),$?.("OAuth window opened. Complete the sign-in flow, then close this message.","success");else $?.(z,"success")}else $?.(z||`OAuth flow started for ${E}. Check the chat.`,"success")}catch(H){$?.(String(H.message||H),"error")}finally{G(null)}},[$]),F=f(async(E)=>{if(j)return;G(E),$?.(`Logging out ${E}…`,"info");try{await D1("default",`/logout ${E}`,null,[]),$?.(`Logged out ${E}. Restart may be needed.`,"success")}catch(H){$?.(String(H.message||H),"error")}finally{G(null)}},[j,$]),B=_||[],U=(E)=>Z===E,D=(E)=>{X((H)=>H===E?null:E),q({})};return N`
        <div class="settings-section">
            <h3>Providers</h3>
            <div class="settings-provider-list">
                ${B.map((E)=>N`
                    <div class=${`settings-provider-card${E.configured?" configured":""}`}>
                        <div class="settings-provider-card-header" onClick=${()=>!E.configured&&D(E.id)}>
                            <div class="settings-provider-card-title">
                                <strong>${E.name}</strong>
                                <span class="settings-provider-id">${E.id}</span>
                                ${E.configured&&N`<span class="settings-tag settings-tag-skill">${ZD(E.authType)}</span>`}
                            </div>
                            <div class="settings-provider-card-meta">
                                ${E.hasOAuth&&N`<span class="settings-tag">OAuth</span>`}
                                ${E.hasApiKey&&N`<span class="settings-tag">API Key</span>`}
                                ${E.isCustom&&N`<span class="settings-tag">Custom</span>`}
                            </div>
                            <div class="settings-provider-card-actions">
                                ${E.configured?N`
                                    <button class="settings-addon-btn settings-addon-btn-remove"
                                        disabled=${j===E.id} onClick=${(H)=>{H.stopPropagation(),F(E.id)}}
                                    >${j===E.id?"…":"Logout"}</button>
                                    <button class="settings-addon-btn"
                                        disabled=${j===E.id} onClick=${(H)=>{H.stopPropagation(),D(E.id)}}
                                    >Reconfigure</button>
                                `:N`
                                    <button class="settings-addon-btn settings-addon-btn-install"
                                        disabled=${j===E.id} onClick=${(H)=>{H.stopPropagation(),D(E.id)}}
                                    >Set up</button>
                                `}
                            </div>
                        </div>

                        ${U(E.id)&&N`
                            <div class="settings-provider-setup">
                                <p class="settings-hint settings-provider-setup-hint">Sign-in flows open in the browser. In narrow panes the setup form stacks vertically to avoid clipping.</p>
                                ${E.hasOAuth&&N`
                                    <div class="settings-provider-method">
                                        <button class="settings-addon-btn settings-addon-btn-install"
                                            disabled=${j===E.id}
                                            onClick=${()=>V(E.id)}>
                                            ${j===E.id?"Starting…":"Sign in with OAuth"}
                                        </button>
                                    </div>
                                `}
                                ${E.hasApiKey&&N`
                                    <div class="settings-provider-method">
                                        <div class="settings-provider-field-row">
                                            <label>API Key</label>
                                            <input type="password" value=${Y.apiKey||""}
                                                onInput=${(H)=>L("apiKey",H.target.value)}
                                                placeholder=${E.apiKeyHint||"Enter API key"} />
                                            <button class="settings-addon-btn settings-addon-btn-install"
                                                disabled=${j===E.id||!(Y.apiKey||"").trim()}
                                                onClick=${()=>K(E.id)}>
                                                ${j===E.id?"…":"Save"}
                                            </button>
                                        </div>
                                    </div>
                                `}
                                ${E.isCustom&&N`
                                    <div class="settings-provider-method">
                                        ${(E.customFields||[]).map((H)=>N`
                                            <div class="settings-provider-field-row">
                                                <label>${H.label}${H.required?" *":""}</label>
                                                <input type="text" value=${Y[H.key]||""}
                                                    onInput=${(k)=>L(H.key,k.target.value)}
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
    `}var ZY=W_(()=>{x0();g_()});var XY={};Y1(XY,{ModelsSection:()=>VD});function LD(_){return typeof _==="string"&&_.toLowerCase()==="anthropic"}function KD({thinkingLevel:_,supportsThinking:$,provider:j,availableLevels:G,onSetLevel:Z,disabled:X}){let Y=LD(j)?YD:qD,q=G&&G.length>1?G:["off","minimal","low","medium","high"],L=Math.max(0,q.indexOf(_??"off"));if(!$)return N`<div class="settings-thinking-slider"><label>Thinking level</label><p class="settings-hint" style="margin:4px 0 0">Current model does not support thinking.</p></div>`;return N`
        <div class="settings-thinking-slider">
            <label>Thinking level: <strong>${Y[q[L]]||q[L]}</strong></label>
            <div class="settings-slider-track">
                <input type="range" min="0" max=${q.length-1} step="1" value=${L} disabled=${X}
                    onInput=${(K)=>Z(q[parseInt(K.target.value,10)])} />
                <div class="settings-slider-labels">
                    ${q.map((K,Q)=>N`<span class=${Q===L?"active":""} onClick=${()=>!X&&Z(K)}>${Y[K]||K}</span>`)}
                </div>
            </div>
        </div>
    `}function VD({filter:_=""}){let[$,j]=C(null),[G,Z]=C(!1),[X,Y]=C("off"),[q,L]=C(!1),[K,Q]=C(["off"]),[V,F]=C(!1),B=f(async()=>{let I=await D4();if(j(I),I.thinking_level)Y(I.thinking_level);if(L(Boolean(I.supports_thinking)),Array.isArray(I.available_thinking_levels)&&I.available_thinking_levels.length>0)Q(I.available_thinking_levels);return I},[]);g(()=>{B().catch(()=>j({models:[],model_options:[]}))},[]);let U=f(async(I)=>{if(G)return;Z(!0);try{await D1("default",`/model ${I}`,null,[]),await B()}catch(A){console.error("Failed to switch model:",A)}finally{Z(!1)}},[G,B]),D=f(async(I)=>{if(V)return;F(!0),Y(I);try{let A=await D1("default",`/thinking ${I}`,null,[]);if(A?.command?.thinking_level)Y(A.command.thinking_level);L(A?.command?.supports_thinking!==!1),await B()}catch(A){console.error("Failed to set thinking:",A),await B().catch((J)=>{})}finally{F(!1)}},[V,B]);if(!$)return N`<div class="settings-loading">Loading models\u2026</div>`;let E=$.model_options||[],H=$.current,z=E.find((I)=>I.label===H)?.provider||"",O=_.toLowerCase(),y=O?E.filter((I)=>I.label.toLowerCase().includes(O)||(I.provider||"").toLowerCase().includes(O)):E;return N`
        <div class="settings-models-split">
            <div class="settings-models-summary settings-hint">Model and provider names may wrap in narrow panes to avoid clipping.</div>
            <div class="settings-models-list">
                <table class="settings-table settings-borderless settings-models-table">
                    <thead><tr><th style="width:32px"></th><th>Model</th><th>Provider</th><th>Context</th><th style="text-align:center">Reasoning</th></tr></thead>
                    <tbody>
                        ${y.map((I)=>N`
                            <tr class=${I.label===H?"settings-row-active":""}>
                                <td><input type="radio" name="settings-model" checked=${I.label===H} disabled=${G} onChange=${()=>U(I.label)} /></td>
                                <td>${I.name||I.label}</td><td>${I.provider}</td>
                                <td>${I.context_window?(I.context_window/1000).toFixed(0)+"K":"—"}</td>
                                <td style="text-align:center">${I.reasoning?"\uD83E\uDDE0":"—"}</td>
                            </tr>
                        `)}
                        ${y.length===0&&N`<tr><td colspan="5" class="settings-empty">No models match "${_}"</td></tr>`}
                    </tbody>
                </table>
            </div>
            <div class="settings-models-footer">
                <${KD}
                    thinkingLevel=${X}
                    supportsThinking=${q}
                    provider=${z}
                    availableLevels=${K}
                    onSetLevel=${D}
                    disabled=${V||G} />
            </div>
        </div>
    `}var YD,qD;var YY=W_(()=>{x0();g_();YD={off:"off",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"max"},qD={off:"off",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"xhigh"}});var LY={};Y1(LY,{ThemeSection:()=>QD});function qY(_={}){return{uiTheme:typeof _.uiTheme==="string"&&_.uiTheme.trim()?_.uiTheme.trim():"default",uiTint:typeof _.uiTint==="string"&&_.uiTint.trim()?_.uiTint.trim():""}}function QD({themes:_,colorKeys:$,settingsData:j,setStatus:G,mergeSettingsData:Z}){let[X,Y]=C("default"),[q,L]=C(""),[K,Q]=C(!1),V=u(""),F=u(null),B=u(!0);g(()=>{return B.current=!0,()=>{B.current=!1}},[]);let U=f((z)=>{let O=qY(z);Y(O.uiTheme),L(O.uiTint),V.current=JSON.stringify(O)},[]);g(()=>{if(j){U(j);return}U({uiTheme:document.documentElement.dataset.colorTheme||"default",uiTint:document.documentElement.dataset.tint||""})},[j,U]);let D=f((z,O)=>{t4({theme:z,tint:O||null}),Y(z||"default"),L(O||"")},[]),E=X0(()=>JSON.stringify(qY({uiTheme:X,uiTint:q})),[X,q]);g(()=>{if(E===V.current)return;if(F.current)clearTimeout(F.current);return F.current=setTimeout(async()=>{if(!B.current)return;Q(!0);try{let z=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:E}),O=await z.json().catch(()=>({}));if(!B.current)return;if(!z.ok||!O?.ok||!O?.settings){G?.(O?.error||"Failed to save appearance settings.","error");return}V.current=E,Z?.(O.settings),G?.("Appearance synced across clients.","success")}catch(z){if(!B.current)return;console.warn("[settings/appearance] Failed to persist appearance settings.",z),G?.("Failed to save appearance settings.","error")}finally{if(B.current)Q(!1)}},250),()=>{if(F.current)clearTimeout(F.current)}},[E,Z,G]);let H=$||[],k=_||[];return N`
        <div class="settings-section">
            ${K&&N`<div class="settings-hint" style="margin:0 0 12px 0;">Syncing appearance…</div>`}
            <div class="settings-tint-row">
                <label class="settings-tint-label">
                    <input type="radio" name="settings-theme"
                        checked=${X==="default"}
                        onChange=${()=>D("default",q)} />
                    <strong>Default</strong>
                    <span class="settings-hint" style="margin:0 0 0 6px">auto (light/dark)</span>
                </label>
                <div class="settings-tint-picker">
                    <label class="settings-hint" style="margin:0">Tint:</label>
                    <input type="color"
                        value=${q||"#1d9bf0"}
                        onInput=${(z)=>{let O=z.target.value;if(L(O),X==="default")t4({theme:"default",tint:O})}} />
                    ${q&&N`
                        <button class="settings-tint-clear" onClick=${()=>D("default","")}
                            title="Clear tint">\u2715</button>
                    `}
                    <span class="settings-tint-hex">${q||"none"}</span>
                </div>
            </div>

            <table class="settings-table settings-borderless settings-theme-table">
                <thead>
                    <tr>
                        <th></th><th>Theme</th><th>Mode</th>
                        ${H.map((z)=>N`<th class="settings-swatch-header">${z.replace(/([A-Z])/g," $1").trim()}</th>`)}
                    </tr>
                </thead>
                <tbody>
                    ${k.filter((z)=>z.name!=="default").map((z)=>N`
                        <tr class=${z.name===X?"settings-row-active":""}
                            style="cursor:pointer" onClick=${()=>D(z.name,"")}>
                            <td><input type="radio" name="settings-theme" checked=${z.name===X} onChange=${()=>D(z.name,"")} /></td>
                            <td><strong>${z.label}</strong></td>
                            <td>${z.mode}</td>
                            ${H.map((O)=>{let y=z.colors?.[O];return N`<td class="settings-swatch-cell">
                                    ${y?N`<span class="settings-color-swatch" style=${"background:"+y} title=${y}></span>`:"—"}
                                </td>`})}
                        </tr>
                    `)}
                </tbody>
            </table>
        </div>
    `}var KY=W_(()=>{x0();c5()});function VY(_){return String(_||"").toLowerCase().replace(/^[@/]+/,"").replace(/\s+/g," ").trim()}function Y5(_){return typeof _==="string"&&_.trim().length>0}function l7(_,...$){let j=VY(_);if(!j)return!0;let G=$.map((Z)=>VY(Z)).filter(Boolean);for(let Z of G)if(Z.startsWith(j)||Z.includes(j))return!0;return!1}function QY(_){if(!Array.isArray(_))return null;let $=[],j=new Set;for(let G of _){let Z=String(G||"").trim();if(!Z)continue;let X=Z.toLowerCase();if(j.has(X))continue;j.add(X),$.push(Z)}return $}function p$(_){let $=_&&typeof _==="object"?_:{};return{workspaceCommands:QY($.workspaceCommands),slashCommands:QY($.slashCommands)}}function FY(_,$){if(!Array.isArray(_))return!0;return _.some((j)=>j.toLowerCase()===$.toLowerCase())}function FD(_){let $=Array.isArray(_?.commands)?_.commands:[],j=p$(_?.settings),G=String(_?.query||"");return $.filter((Z)=>FY(j.workspaceCommands,Z.id)).filter((Z)=>l7(G,Z.label,Z.description,...Z.keywords||[])).map((Z)=>({key:`workspace:${Z.id}`,kind:"workspace",title:Z.label,subtitle:Z.description,searchText:`${Z.label} ${Z.description} ${(Z.keywords||[]).join(" ")}`.trim(),visualHint:Z.label.slice(0,1).toUpperCase()||"W",categoryLabel:"Workspace",actionHint:"Run",commandId:Z.id}))}function BD(_){let $=Array.isArray(_?.agents)?_.agents:[],j=String(_?.query||""),G=new Set;return $.filter((Z)=>{let X=Y5(Z?.chat_jid)?Z.chat_jid.trim():"";if(!X||G.has(X))return!1;if(Z?.archived_at)return!1;return G.add(X),!0}).filter((Z)=>l7(j,`@${String(Z?.agent_name||"").trim()}`,Z?.session_name,Z?.chat_jid)).map((Z)=>{let X=Y5(Z?.agent_name)?Z.agent_name.trim():String(Z?.chat_jid||"").replace(/^[^:]+:/,""),Y=Y5(Z?.session_name)?Z.session_name.trim():"",q=String(Z?.chat_jid||"").trim();return{key:`agent:${q}`,kind:"agent",title:`@${X}`,subtitle:Y||q,searchText:`@${X} ${Y} ${q}`.trim(),visualHint:X.slice(0,1).toUpperCase()||"@",categoryLabel:"Agent",actionHint:"Open",chatJid:q}})}function ND(_){let $=Array.isArray(_?.slashCommands)?_.slashCommands:[],j=p$(_?.settings),G=String(_?.query||""),Z=new Set;return $.filter((X)=>{let Y=Y5(X?.name)?X.name.trim():"";if(!Y||Z.has(Y.toLowerCase()))return!1;return Z.add(Y.toLowerCase()),FY(j.slashCommands,Y)}).filter((X)=>l7(G,X?.name,X?.description,X?.source)).map((X)=>{let Y=String(X?.name||"").trim(),q=Y5(X?.description)?X.description.trim():"slash command",L=Y5(X?.source)?X.source.trim():"";return{key:`slash:${Y}`,kind:"slash",title:Y,subtitle:q,searchText:`${Y} ${q} ${String(X?.source||"")}`.trim(),visualHint:"/",categoryLabel:L||"Slash",actionHint:"Insert",commandName:Y}})}function BY(_){return[...BD({agents:_?.agents,query:_?.query}),...FD({commands:_?.workspaceCommands,settings:_?.settings,query:_?.query}),...ND({slashCommands:_?.slashCommands,settings:_?.settings,query:_?.query})]}var h$;var h7=W_(()=>{h$=[{id:"toggle-workspace",label:"Toggle workspace",description:"Show or hide the workspace sidebar.",keywords:["workspace","sidebar","explorer"]},{id:"open-explorer",label:"Open explorer",description:"Open the workspace explorer sidebar.",keywords:["workspace","explorer","sidebar"]},{id:"toggle-chat-only",label:"Chat-only mode",description:"Toggle chat-only mode.",keywords:["chat","mode","layout"]},{id:"open-terminal-tab",label:"Open terminal in tab",description:"Open the terminal pane in a workspace tab.",keywords:["terminal","shell","tab"]},{id:"open-vnc-tab",label:"Open VNC in tab",description:"Open the VNC viewer in a workspace tab.",keywords:["vnc","remote","desktop","tab"]},{id:"toggle-terminal-dock",label:"Toggle terminal dock",description:"Show or hide the terminal dock.",keywords:["terminal","dock","shell"]},{id:"open-settings",label:"Settings",description:"Open the settings dialog.",keywords:["settings","preferences","config"]}]});var HY={};Y1(HY,{QuickActionsSection:()=>UD});function NY(_,...$){let j=String(_||"").trim().toLowerCase();if(!j)return!0;return $.some((G)=>String(G||"").toLowerCase().includes(j))}function UY(_){if(!Array.isArray(_))return null;return new Set(_.map(($)=>String($||"").trim().toLowerCase()).filter(Boolean))}function UD({filter:_="",setStatus:$,mergeSettingsData:j}){let[G,Z]=C(()=>h$.map((I)=>I.id)),[X,Y]=C([]),[q,L]=C([]),[K,Q]=C(!0),[V,F]=C(!1),B=f(async()=>{Q(!0);try{let[I,A]=await Promise.all([o5(),i5("web:default").catch(()=>({commands:[]}))]),J=p$(I?.settings),M=Array.isArray(A?.commands)?A.commands:[];L(M),Z(Array.isArray(J.workspaceCommands)?J.workspaceCommands:h$.map((W)=>W.id)),Y(Array.isArray(J.slashCommands)?J.slashCommands:M.map((W)=>String(W?.name||"").trim()).filter(Boolean))}catch(I){$?.(String(I?.message||I),"error")}finally{Q(!1)}},[$]);g(()=>{B()},[B]);let U=X0(()=>UY(G),[G]),D=X0(()=>UY(X),[X]),E=X0(()=>h$.filter((I)=>NY(_,I.label,I.description,...I.keywords||[])),[_]),H=X0(()=>q.filter((I)=>NY(_,I?.name,I?.description,I?.source)),[q,_]),k=f((I)=>{Z((A)=>{let J=new Set((Array.isArray(A)?A:[]).map((M)=>String(M||"").trim()).filter(Boolean));if(J.has(I))J.delete(I);else J.add(I);return h$.map((M)=>M.id).filter((M)=>J.has(M))})},[]),z=f((I)=>{Y((A)=>{let J=new Set((Array.isArray(A)?A:[]).map((M)=>String(M||"").trim()).filter(Boolean));if(J.has(I))J.delete(I);else J.add(I);return q.map((M)=>String(M?.name||"").trim()).filter((M)=>M&&J.has(M))})},[q]),O=f(()=>{Z(h$.map((I)=>I.id)),Y(q.map((I)=>String(I?.name||"").trim()).filter(Boolean))},[q]),y=f(async()=>{if(V)return;F(!0),$?.("Saving quick actions…","info");try{let I=await s3({workspaceCommands:G,slashCommands:X}),A=p$(I?.settings);j?.({quickActions:A}),window.dispatchEvent(new CustomEvent("piclaw:quick-actions-settings-updated",{detail:{settings:A}})),$?.("Quick Actions saved.","success")}catch(I){$?.(String(I?.message||I),"error")}finally{F(!1)}},[j,V,$,X,G]);if(K)return N`<div class="settings-loading">Loading…</div>`;return N`
        <div class="settings-section">
            <h3>Timeline Quick Actions</h3>
            <p class="settings-hint">
                Choose which actions appear in the timeline typeahead. Agents are always pinned first, then workspace commands, then slash commands.
            </p>

            <div class="settings-row" style="align-items:center; gap:10px; margin-bottom:12px;">
                <button class="settings-addon-btn" onClick=${O} disabled=${V}>Enable all</button>
                <button class="settings-addon-btn settings-addon-btn-install" onClick=${y} disabled=${V}>
                    ${V?"Saving…":"Save & apply"}
                </button>
            </div>

            <h3 style="margin-top:8px;">Workspace commands</h3>
            <div class="settings-subsection-list">
                ${E.map((I)=>{let A=U?U.has(I.id.toLowerCase()):!0;return N`
                        <label class="settings-checkbox-row" key=${I.id}>
                            <input type="checkbox" checked=${A} onChange=${()=>k(I.id)} />
                            <div>
                                <div>${I.label}</div>
                                <div class="settings-hint" style="margin:2px 0 0 0;">${I.description}</div>
                            </div>
                        </label>
                    `})}
                ${E.length===0&&N`<div class="settings-hint">No workspace commands match this filter.</div>`}
            </div>

            <h3 style="margin-top:20px;">Slash commands</h3>
            <div class="settings-subsection-list">
                ${H.map((I)=>{let A=String(I?.name||"").trim(),J=D?D.has(A.toLowerCase()):!0;return N`
                        <label class="settings-checkbox-row" key=${A}>
                            <input type="checkbox" checked=${J} onChange=${()=>z(A)} />
                            <div>
                                <div><code>${A}</code></div>
                                <div class="settings-hint" style="margin:2px 0 0 0;">${I?.description||"slash command"}</div>
                            </div>
                        </label>
                    `})}
                ${H.length===0&&N`<div class="settings-hint">No slash commands match this filter.</div>`}
            </div>
        </div>
    `}var EY=W_(()=>{x0();g_();h7()});var DY={};Y1(DY,{KeychainSection:()=>DD});function HD(_){if(!_)return"—";try{return new Date(_).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})}catch{return _}}function DD({filter:_=""}){let[$,j]=C([]),[G,Z]=C(!0),[X,Y]=C(null),[q,L]=C(!1),[K,Q]=C(""),[V,F]=C(""),[B,U]=C(""),[D,E]=C(""),[H,k]=C(""),[z,O]=C("secret"),[y,I]=C(!1),[A,J]=C({}),[M,W]=C(null),[w,x]=C(null),[P,R]=C(null),v=u(null),c=u(null),h=u(null),r=f(async()=>{Z(!0),Y(null);try{let j0=await(await fetch("/agent/keychain")).json();if(j0?.ok)j(j0.entries||[]);else Y(j0?.error||"Failed to load keychain.")}catch(o){Y("Failed to load keychain.")}finally{Z(!1)}},[]);g(()=>{r()},[r]);let b=f(async()=>{let o=K.trim(),j0=V;if(!o||!j0)return;I(!0);try{let P0=await(await fetch("/agent/keychain",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:o,secret:j0,type:z,username:B.trim()||void 0,userNote:D,agentNote:H})})).json();if(P0?.ok)Q(""),F(""),U(""),E(""),k(""),O("secret"),L(!1),await r();else Y(P0?.error||"Failed to add entry.")}catch{Y("Failed to add entry.")}finally{I(!1)}},[K,V,B,D,H,z,r]),a=f(async(o)=>{try{let O0=await(await fetch("/agent/keychain",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:o})})).json();if(O0?.ok)x(null),R((P0)=>P0?.name===o?null:P0),await r();else Y(O0?.error||"Failed to delete entry.")}catch{Y("Failed to delete entry.")}},[r]),t=f(async(o)=>{let j0=o?.name;if(!j0)return;let O0=A[j0]||{},P0=Object.prototype.hasOwnProperty.call(O0,"userNote")?O0.userNote:o.userNote||"",m0=Object.prototype.hasOwnProperty.call(O0,"agentNote")?O0.agentNote:o.agentNote||"";W(j0);try{let G_=await(await fetch("/agent/keychain/notes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:j0,userNote:P0,agentNote:m0})})).json();if(G_?.ok)J((h0)=>{let c0={...h0||{}};return delete c0[j0],c0}),await r();else Y(G_?.error||"Failed to save notes.")}catch{Y("Failed to save notes.")}finally{W(null)}},[A,r]),q0=f((o,j0,O0)=>{J((P0)=>({...P0||{},[o]:{...(P0||{})[o]||{},[j0]:O0}}))},[]),Z0=f(async(o,j0,O0)=>{try{let m0=await(await fetch("/agent/keychain/reveal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:o,master_password:j0||void 0,totp_code:O0||void 0})})).json();if(m0?.ok)R({name:o,phase:"revealed",secret:m0.secret,username:m0.username,masterPassword:j0});else if(m0?.needs_master_password)R((l0)=>({name:o,phase:"password",masterPassword:"",error:l0?.name===o&&l0?.masterPassword?m0.error:null})),requestAnimationFrame(()=>c.current?.focus());else if(m0?.needs_totp)R((l0)=>({name:o,phase:"totp",masterPassword:j0,totpCode:"",error:l0?.name===o&&l0?.phase==="totp"&&l0?.totpCode?m0.error:null})),requestAnimationFrame(()=>h.current?.focus());else R({name:o,phase:"error",error:m0?.error||"Failed to reveal."})}catch{R({name:o,phase:"error",error:"Failed to reveal."})}},[]),D0=f((o)=>{if(P?.name===o&&P?.phase==="revealed"){R(null);return}Z0(o,null,null)},[P,Z0]),Q0=f((o)=>{let j0=P?.masterPassword||"";if(!j0)return;Z0(o,j0,null)},[P,Z0]),L0=f((o)=>{let j0=P?.totpCode||"";if(j0.length<6)return;Z0(o,P?.masterPassword,j0)},[P,Z0]),N0=f(async(o)=>{try{await navigator.clipboard.writeText(o)}catch{let j0=document.createElement("textarea");j0.value=o,j0.style.position="fixed",j0.style.opacity="0",document.body.appendChild(j0),j0.select(),document.execCommand("copy"),document.body.removeChild(j0)}},[]);g(()=>{if(q)requestAnimationFrame(()=>v.current?.focus())},[q]);let H0=_.toLowerCase(),y0=X0(()=>{if(!H0)return $;return $.filter((o)=>o.name.toLowerCase().includes(H0)||(o.type||"").toLowerCase().includes(H0)||(o.envVar||"").toLowerCase().includes(H0)||(o.userNote||"").toLowerCase().includes(H0)||(o.agentNote||"").toLowerCase().includes(H0))},[$,H0]);if(G)return N`<div class="settings-section"><div class="settings-loading">Loading keychain…</div></div>`;return N`
        <div class="settings-section">
            ${X&&N`
                <div class="settings-keychain-error" role="alert">
                    ${X}
                    <button class="settings-keychain-dismiss" onClick=${()=>Y(null)}>✕</button>
                </div>
            `}
            <div class="settings-keychain-toolbar" style="display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap;">
                <span class="settings-hint" style="margin:0; display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                    <span>${y0.length} entr${y0.length===1?"y":"ies"}${H0?` matching "${_}"`:""}, encrypted at rest.</span>
                    <span style="display:inline-flex; align-items:center; gap:6px;">
                        <span>Click</span>
                        <span aria-hidden="true" style="display:inline-flex; width:18px; height:18px; align-items:center; justify-content:center; border-radius:999px; border:1px solid var(--border-color, rgba(120,120,120,.22)); background:var(--panel-bg, rgba(255,255,255,.04));">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                        </span>
                        <span>to reveal.</span>
                    </span>
                </span>
                <button class="settings-keychain-add-btn" onClick=${()=>L(!q)}>
                    ${q?"Cancel":"+ Add entry"}
                </button>
            </div>

            ${q&&N`
                <div class="settings-keychain-add-form">
                    <div class="settings-keychain-add-row">
                        <input ref=${v} type="text" placeholder="Entry name (e.g. github/my-token)"
                            value=${K} onInput=${(o)=>Q(o.target.value)}
                            class="settings-keychain-input" />
                        <select value=${z} onChange=${(o)=>O(o.target.value)}
                            class="settings-keychain-select">
                            ${ED.map((o)=>N`<option value=${o}>${o}</option>`)}
                        </select>
                    </div>
                    <div class="settings-keychain-add-row">
                        <input type="password" placeholder="Secret value"
                            value=${V} onInput=${(o)=>F(o.target.value)}
                            class="settings-keychain-input settings-keychain-secret" />
                        <input type="text" placeholder="Username (optional)"
                            value=${B} onInput=${(o)=>U(o.target.value)}
                            class="settings-keychain-input" style="max-width:200px" />
                        <button class="settings-keychain-save-btn" onClick=${b}
                            disabled=${y||!K.trim()||!V}>
                            ${y?"Saving…":"Save"}
                        </button>
                    </div>
                    <div class="settings-keychain-add-row" style="align-items:stretch">
                        <textarea placeholder="User note (visible in this UI only)"
                            value=${D} onInput=${(o)=>E(o.target.value)}
                            class="settings-keychain-input" rows="2" style="resize:vertical; min-height:56px"></textarea>
                        <textarea placeholder="Agent note (safe to expose to agents)"
                            value=${H} onInput=${(o)=>k(o.target.value)}
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
                        ${y0.length===0&&N`
                            <tr><td colspan="5" class="settings-keychain-empty">
                                ${H0?"No entries match the filter.":"No keychain entries."}
                            </td></tr>
                        `}
                        ${y0.map((o)=>{let j0=P?.name===o.name?P:null,O0=j0?.phase==="revealed",P0=j0?.phase==="password",m0=j0?.phase==="totp",l0=j0?.phase==="error",G_=A[o.name]||{},h0=Object.prototype.hasOwnProperty.call(G_,"userNote")?G_.userNote:o.userNote||"",c0=Object.prototype.hasOwnProperty.call(G_,"agentNote")?G_.agentNote:o.agentNote||"",M0=h0!==(o.userNote||"")||c0!==(o.agentNote||""),p0=M===o.name;return N`
                            <tr class="settings-keychain-row" key=${o.name}>
                                <td class="settings-keychain-name">${o.name}</td>
                                <td><span class="settings-keychain-type-badge">${o.type}</span></td>
                                <td class="settings-keychain-env">${o.envVar?N`<code>$${o.envVar}</code>`:"—"}</td>
                                <td class="settings-keychain-date">${HD(o.updatedAt)}</td>
                                <td class="settings-keychain-actions">
                                    <button class=${`settings-keychain-reveal-btn${O0?" active":""}`}
                                        onClick=${()=>D0(o.name)}
                                        title=${O0?"Hide secret":"Reveal secret"}>
                                        ${O0?N`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`:N`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`}
                                    </button>
                                    ${w===o.name?N`
                                            <span class="settings-keychain-confirm">Delete?
                                                <button class="settings-keychain-confirm-yes" onClick=${()=>a(o.name)}>Yes</button>
                                                <button class="settings-keychain-confirm-no" onClick=${()=>x(null)}>No</button>
                                            </span>
                                        `:N`<button class="settings-keychain-delete-btn" onClick=${()=>x(o.name)} title="Delete">🗑</button>`}
                                </td>
                            </tr>
                            <tr class="settings-keychain-notes-row" key=${o.name+"-notes"}>
                                <td colspan="5">
                                    <div style="display:grid; grid-template-columns:1fr 1fr auto; gap:8px; align-items:start; padding:8px 0 10px 0;">
                                        <label style="display:flex; flex-direction:column; gap:4px; min-width:0;">
                                            <span class="settings-hint" style="margin:0">User note</span>
                                            <textarea class="settings-keychain-input" rows="2" style="resize:vertical; min-height:52px; width:100%;" placeholder="Human/UI note only"
                                                value=${h0}
                                                onInput=${(b0)=>q0(o.name,"userNote",b0.target.value)}></textarea>
                                        </label>
                                        <label style="display:flex; flex-direction:column; gap:4px; min-width:0;">
                                            <span class="settings-hint" style="margin:0">Agent-readable note</span>
                                            <textarea class="settings-keychain-input" rows="2" style="resize:vertical; min-height:52px; width:100%;" placeholder="Safe guidance for agents"
                                                value=${c0}
                                                onInput=${(b0)=>q0(o.name,"agentNote",b0.target.value)}></textarea>
                                        </label>
                                        <button class="settings-keychain-save-btn" style="margin-top:20px" disabled=${!M0||p0} onClick=${()=>t(o)}>
                                            ${p0?"Saving…":"Save notes"}
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            ${P0&&N`
                                <tr class="settings-keychain-prompt-row" key=${o.name+"-pw"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-prompt">
                                            <span class="settings-keychain-prompt-label">Master password:</span>
                                            <input ref=${c} type="password" autocomplete="off"
                                                placeholder="Enter keychain master password"
                                                class="settings-keychain-prompt-input"
                                                value=${j0?.masterPassword||""}
                                                onInput=${(b0)=>R((d0)=>({...d0,masterPassword:b0.target.value}))}
                                                onKeyDown=${(b0)=>{if(b0.key==="Enter")Q0(o.name);if(b0.key==="Escape")R(null)}}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${()=>Q0(o.name)}
                                                disabled=${!j0?.masterPassword}>Unlock</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${()=>R(null)}>Cancel</button>
                                            ${j0?.error&&N`<span class="settings-keychain-prompt-error">${j0.error}</span>`}
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${m0&&N`
                                <tr class="settings-keychain-prompt-row" key=${o.name+"-totp"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-prompt">
                                            <span class="settings-keychain-prompt-label">TOTP code:</span>
                                            <input ref=${h} type="text" inputmode="numeric" autocomplete="one-time-code"
                                                maxlength="6" placeholder="000000"
                                                class="settings-keychain-prompt-input" style="width:90px;text-align:center;letter-spacing:0.15em"
                                                value=${j0?.totpCode||""}
                                                onInput=${(b0)=>R((d0)=>({...d0,totpCode:b0.target.value.replace(/\\D/g,"").slice(0,6)}))}
                                                onKeyDown=${(b0)=>{if(b0.key==="Enter")L0(o.name);if(b0.key==="Escape")R(null)}}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${()=>L0(o.name)}
                                                disabled=${(j0?.totpCode||"").length<6}>Verify</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${()=>R(null)}>Cancel</button>
                                            ${j0?.error&&N`<span class="settings-keychain-prompt-error">${j0.error}</span>`}
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${O0&&N`
                                <tr class="settings-keychain-reveal-row" key=${o.name+"-reveal"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-reveal-panel">
                                            ${j0.username&&N`
                                                <div class="settings-keychain-reveal-field">
                                                    <span class="settings-keychain-reveal-label">Username</span>
                                                    <code class="settings-keychain-reveal-value">${j0.username}</code>
                                                    <button class="settings-keychain-copy-btn" onClick=${()=>N0(j0.username)} title="Copy username">
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                                                    </button>
                                                </div>
                                            `}
                                            <div class="settings-keychain-reveal-field">
                                                <span class="settings-keychain-reveal-label">Secret</span>
                                                <code class="settings-keychain-reveal-value">${j0.secret}</code>
                                                <button class="settings-keychain-copy-btn" onClick=${()=>N0(j0.secret)} title="Copy secret">
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${l0&&N`
                                <tr class="settings-keychain-reveal-row" key=${o.name+"-error"}>
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
    `}var ED;var WY=W_(()=>{x0();ED=["secret","token","password","basic"]});var OY={};Y1(OY,{ToolsSection:()=>AD});function AD({toolsets:_,filter:$="",settingsData:j,mergeSettingsData:G}){let Z=_||[],[X,Y]=C(()=>{let F={};for(let B of Z)F[B.name]=!0;return F}),q=f((F)=>{Y((B)=>({...B,[F]:!B[F]}))},[]),L=j?.searchMatchMode||"or",K=f(async()=>{let F=L==="or"?"and":"or";try{let U=await(await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({searchMatchMode:F})})).json().catch(()=>({}));if(U?.ok&&U?.settings)G?.(U.settings)}catch(B){console.warn("[settings/tools] Failed to save search match mode.",B)}},[L,G]),Q=$.toLowerCase(),V=X0(()=>{if(!Q)return Z;return Z.map((F)=>{let B=F.tools.filter((U)=>U.name.toLowerCase().includes(Q)||F.name.toLowerCase().includes(Q)||(U.summary||"").toLowerCase().includes(Q));return B.length>0?{...F,tools:B}:null}).filter(Boolean)},[Z,Q]);if(Z.length===0)return N`<div class="settings-section"><p class="settings-hint">Tool data not available.</p></div>`;return N`
        <div class="settings-section">
            <div class="settings-search-options">
                <h4 style="margin:0 0 8px 0">Search</h4>
                <div class="settings-row">
                    <label>Match mode</label>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <input type="checkbox" checked=${L==="and"} onChange=${K} />
                        <span class="settings-hint" style="margin:0">
                            ${L==="or"?"Any keyword (OR) — results match at least one search term":"All keywords (AND) — results must match every search term"}
                        </span>
                    </div>
                </div>
            </div>
            ${V.map((F)=>{let B=X[F.name]!==!1;return N`
                <div class="settings-toolset">
                    <div class="settings-toolset-header">
                        <label class="settings-toolset-toggle">
                            <input type="checkbox" checked=${B} onChange=${()=>q(F.name)} />
                            <span class="settings-toolset-icon">${WD[F.name]||JD}</span>
                            <strong>${F.name}</strong>
                        </label>
                        <span class="settings-hint" style="margin:0">${F.description}</span>
                    </div>
                    ${B&&N`<div class="settings-tool-list">${F.tools.map((U)=>N`
                        <div class="settings-tool-row">
                            <input type="checkbox" checked disabled />
                            <span class="settings-tool-name">${U.name}</span>
                            <span class="settings-tool-kind" title=${U.kind}>${zD[U.kind]||"?"}</span>
                            ${U.summary&&N`<span class="settings-tool-summary">${U.summary}</span>`}
                            <span class="settings-tool-source">${OD[U.name]||F.name}</span>
                        </div>
                    `)}</div>`}
                </div>
            `})}
            ${V.length===0&&N`<p class="settings-hint">No tools match "${$}"</p>`}
            <p class="settings-hint">Tool activation is managed by the agent runtime. Group checkboxes collapse/expand; individual tools use <code>activate_tools</code>.</p>
        </div>
    `}var WD,OD,zD,JD;var zY=W_(()=>{x0();WD={core:N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="17" height="14" rx="2"/><path d="M7.5 10l2.5 2-2.5 2"/><path d="M12.5 15H16"/></svg>`,discovery:N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>`,attachments:N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>`,"model-control":N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/><path d="M9 15c.83.67 2 1 3 1s2.17-.33 3-1"/></svg>`,data:N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,workspace:N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,automation:N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,remote:N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,browser:N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,ui:N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,experiments:N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6v7l4.6 7.7A1 1 0 0 1 18.7 19H5.3a1 1 0 0 1-.9-1.3L9 10z"/><line x1="9" y1="3" x2="15" y2="3"/></svg>`,lifecycle:N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>`},OD={read:"pi-core",write:"pi-core",edit:"pi-core",bash:"pi-core",powershell:"pi-core",find:"pi-core",grep:"pi-core",ls:"pi-core",list_tools:"internal-tools",list_internal_tools:"internal-tools",activate_tools:"tool-activation",reset_active_tools:"tool-activation",list_scripts:"runtime-scripts",attach_file:"file-attachments",read_attachment:"file-attachments",export_attachment:"file-attachments",get_model_state:"model-control",list_models:"model-control",switch_model:"model-control",switch_thinking:"model-control",messages:"messages-crud",introspect_sql:"sql-introspect",keychain:"keychain-tools",search_workspace:"workspace-search",refresh_workspace_index:"workspace-search",open_office_viewer:"office-viewer",office_read:"office-viewer",office_write:"office-viewer",open_workspace_file:"open-workspace-file",image_process:"image-processing",schedule_task:"scheduled-tasks",scheduled_tasks:"scheduled-tasks",bun_run:"bun-runner",exec_batch:"exec-batch",search_tool_output:"search-tool-output",ssh:"ssh",proxmox:"proxmox",portainer:"portainer",mcp:"mcp",cdp_browser:"cdp-browser",send_adaptive_card:"send-adaptive-card",send_dashboard_widget:"send-dashboard-widget",start_autoresearch:"autoresearch",stop_autoresearch:"autoresearch",autoresearch_status:"autoresearch",exit_process:"exit-process",env:"env-tools"},zD={"read-only":"\uD83D\uDD0D",mutating:"✏️",mixed:"\uD83D\uDD04"},JD=N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`});var JY={};Y1(JY,{AddonsSection:()=>kD});function kD({setStatus:_,filter:$=""}){let[j,G]=C(null),[Z,X]=C(!0),[Y,q]=C(null),[L,K]=C(!1),[Q,V]=C({runtime:"",windowsNative:!1}),[F,B]=C([]),[U,D]=C([]);function E(){let M=new URLSearchParams;try{let w=(localStorage.getItem("piclaw_addons_catalog_url")||"").trim(),x=(localStorage.getItem("piclaw_addons_catalog_urls")||"").split(/\r?\n/).map((R)=>R.trim()).filter(Boolean),P=localStorage.getItem("piclaw_addons_repo_url");if(w)M.append("catalog_url",w);for(let R of x)M.append("catalog_url",R);if(P)M.set("repo_url",P)}catch(w){}let W=M.toString();return W?`?${W}`:""}let H=f(async()=>{try{let[M,W]=await Promise.all([fetch(`/agent/addons${E()}`),fetch("/agent/settings-data")]),w=await M.json();if(w.error)throw Error(w.error);G(w.addons||[]),B(w.sources||[]),D(w.failed_sources||[]);let x=await W.json().catch(()=>({})),P=typeof x?.runtimePlatform==="string"?x.runtimePlatform:"";V({runtime:P,windowsNative:P==="win32"})}catch(M){G(null),_?.(String(M.message||M),"error")}finally{X(!1)}},[_]);g(()=>{H()},[]);let k=f(async(M)=>{if(Y)return;q({slug:M,action:"install"}),_?.(`Installing ${M}…`,"info");try{let w=await(await fetch(`/agent/addons/install${E()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:M})})).json();if(w.error){_?.(w.error,"error");return}K(!0);let x=[w.message,w.warning].filter(Boolean).join(" ");_?.(x||"Add-on installed.","success"),await H()}catch(W){_?.(String(W.message||W),"error")}finally{q(null)}},[Y,H,_]),z=f(async(M)=>{if(Y)return;q({slug:M,action:"remove"}),_?.(`Removing ${M}…`,"info");try{let w=await(await fetch(`/agent/addons/uninstall${E()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:M})})).json();if(w.error){_?.(w.error,"error");return}K(!0);let x=[w.message,w.warning].filter(Boolean).join(" ");_?.(x||"Add-on removed.","success"),await H()}catch(W){_?.(String(W.message||W),"error")}finally{q(null)}},[Y,H,_]),O=f(async()=>{if(Y)return;q({slug:null,action:"restart"}),_?.("Restarting piclaw…","info");try{let W=await(await fetch("/agent/addons/restart",{method:"POST"})).json();if(W.error){_?.(W.error,"error"),q(null);return}_?.(W.message||"Restarting piclaw…","success"),K(!1),(async(x=30,P=2000)=>{for(let R=0;R<x;R++){await new Promise((v)=>setTimeout(v,P));try{if((await fetch("/agent/addons",{signal:AbortSignal.timeout(3000)})).ok){await H(),q(null),_?.("Restart complete — add-ons refreshed.","success");return}}catch(v){}}q(null),_?.("Backend did not return in time. Reload the page manually.","warning")})()}catch(M){_?.(String(M.message||M),"error"),q(null)}},[Y,_,H]);if(Z)return N`<div class="settings-loading">Fetching add-ons\u2026</div>`;if(!j)return N`<div class="settings-section"><p class="settings-hint">Could not load add-ons.</p></div>`;let y=$.toLowerCase(),I=y?j.filter((M)=>M.slug.toLowerCase().includes(y)||(M.description||"").toLowerCase().includes(y)||(M.tags||[]).some((W)=>W.toLowerCase().includes(y))):j,A=Y?.slug||null,J=Y?Y.action==="remove"?`Removing ${Y.slug}…`:Y.action==="restart"?"Restarting piclaw…":`Installing ${Y.slug}…`:"";return N`
        <div class=${`settings-section settings-addon-panel${Y?" busy":""}`} aria-busy=${Y?"true":"false"}>
            <div class="settings-addon-toolbar">
                <div>
                    <p class="settings-hint">
                        ${F.length<=1?N`Catalog from <a href="https://github.com/rcarmo/piclaw-addons" target="_blank">rcarmo/piclaw-addons</a>.`:N`${F.length} catalog sources merged.`}
                        ${" "}Package-first install via Bun; restart required after install/uninstall.
                    </p>
                    ${U.length>0&&N`
                        <div class="settings-addon-error" role="alert">
                            Failed to fetch ${U.length} catalog source${U.length>1?"s":""}:
                            ${U.map((M)=>N` <code style="font-size:0.82em;word-break:break-all">${M}</code>`)}
                        </div>
                    `}
                    ${F.length>1&&N`
                        <details class="settings-hint" style="margin-top:4px">
                            <summary style="cursor:pointer">Active catalog sources (${F.length})</summary>
                            <ul style="margin:4px 0 0 16px;font-size:0.82em">
                                ${F.map((M)=>N`<li style="word-break:break-all"><code>${M}</code></li>`)}
                            </ul>
                        </details>
                    `}
                    ${Q.windowsNative&&N`
                        <div class="settings-addon-error" role="alert">
                            Native Windows add-on installs are higher risk: Bun package installs, symlink cleanup, locked files, and restart timing can all be less predictable than in Linux/WSL. Prefer WSL or a container when possible.
                        </div>
                    `}
                </div>
            </div>
            ${Y&&N`
                <div class="settings-addon-panel-overlay" role="status" aria-live="polite" aria-label=${J}>
                    <div class="settings-addon-panel-overlay-card">
                        <div class="settings-spinner"></div>
                        <span>${J}</span>
                    </div>
                </div>
            `}
            <div class="settings-addon-list">
                ${I.map((M)=>{let W=(M.skills||[]).length>0,w=M.type==="extension",x=W&&w?"extension + skill":W?"skill":"extension",P=W&&!w?"settings-tag-skill":"",R=typeof M.homepage==="string"&&M.homepage.trim()?M.homepage.trim():"";return N`
                    <div class=${`settings-addon-card${M.installed?" installed":""}`}>
                        <div class="settings-addon-card-header">
                            ${R?N`<a class="settings-addon-name-link" href=${R} target="_blank" rel="noopener noreferrer">${M.slug}</a>`:N`<strong>${M.slug}</strong>`}
                            <span class=${`settings-tag settings-tag-type ${P}`}>${x}</span>
                            <span class="settings-addon-version">${M.installed?M.installedVersion||"?":M.version||""}</span>
                            ${M.installKind&&N`<span class="settings-tag">${M.installKind}</span>`}
                            ${M.hasUpdate&&N`<span class="settings-tag settings-tag-skill">\u2191 ${M.version}</span>`}
                            <div class="settings-addon-actions">
                                ${M.installed?N`
                                    ${M.hasUpdate&&N`<button class="settings-addon-btn settings-addon-btn-upgrade" disabled=${Boolean(Y)} onClick=${()=>k(M.slug)}>${A===M.slug?"…":"Update"}</button>`}
                                    <button class="settings-addon-btn settings-addon-btn-remove" disabled=${Boolean(Y)} onClick=${()=>z(M.slug)}>${A===M.slug?"…":"Remove"}</button>
                                `:N`
                                    <button class="settings-addon-btn settings-addon-btn-install" disabled=${Boolean(Y)} onClick=${()=>k(M.slug)}>${A===M.slug?"…":"Install"}</button>
                                `}
                            </div>
                        </div>
                        <div class="settings-addon-card-body">${M.description}</div>
                        <div class="settings-addon-card-footer">
                            <div class="settings-addon-tags">${(M.tags||[]).map((v)=>N`<span class="settings-tag">${v}</span>`)}${(M.skills||[]).map((v)=>N`<span class="settings-tag settings-tag-skill">\ud83d\udcdd ${v}</span>`)}</div>
                        </div>
                    </div>
                `})}
                ${I.length===0&&N`<p class="settings-hint">No add-ons match "${$}"</p>`}
            </div>
            ${L&&N`
                <div class="settings-addon-restart-notice" role="status" aria-live="polite">
                    <span>Extension changes are installed but inactive until piclaw restarts.</span>
                    <button class="settings-addon-btn settings-addon-btn-restart-now" type="button" disabled=${Boolean(Y)} onClick=${O}>Restart Now</button>
                </div>
            `}
        </div>
    `}var AY=W_(()=>{x0()});var CD={};function p7(_,$){try{let j=localStorage.getItem(_);return j===null?$:j==="true"}catch{return $}}function S2(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function MD(_,$){try{return localStorage.getItem(_)||$}catch{return $}}function wD(_,$){try{localStorage.setItem(_,$)}catch(j){}}function TD(_,$,j,G){try{return H$(localStorage.getItem(_),{fallback:$,min:j,max:G})}catch{return H$($,{fallback:$,min:j,max:G})}}function yD(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function xD(){let[_,$]=C(()=>p7("piclaw_vim_mode",!1)),[j,G]=C(()=>p7("piclaw_show_whitespace",!0)),[Z,X]=C(()=>p7("piclaw_md_live_preview",!0)),[Y,q]=C(()=>TD("piclaw_editor_font_size",13,10,24)),[L,K]=C(()=>MD("piclaw_editor_font_family","")),Q=f((V,F,B)=>{let U=!F;B(U),S2(V,U)},[]);return N`
        <div class="settings-section">
            <h3>Editor</h3>
            <div class="settings-row">
                <label>Vim mode</label>
                <input type="checkbox" checked=${_}
                    onChange=${()=>{let V=!_;$(V),S2("piclaw_vim_mode",V)}} />
            </div>
            <div class="settings-row">
                <label>Show whitespace</label>
                <input type="checkbox" checked=${j}
                    onChange=${()=>{let V=!j;G(V),S2("piclaw_show_whitespace",V)}} />
            </div>
            <div class="settings-row">
                <label>Markdown live preview</label>
                <input type="checkbox" checked=${Z}
                    onChange=${()=>{let V=!Z;X(V),S2("piclaw_md_live_preview",V)}} />
            </div>
            <div class="settings-row">
                <label>Font size (px)</label>
                <${u_}
                    label="editor font size"
                    value=${Y}
                    min=${10}
                    max=${24}
                    fallback=${13}
                    width="70px"
                    onChange=${(V)=>{q(V),yD("piclaw_editor_font_size",V)}}
                />
            </div>
            <div class="settings-row">
                <label>Font family</label>
                <input type="text" value=${L}
                    onInput=${(V)=>{let F=V.target.value;K(F),wD("piclaw_editor_font_family",F)}}
                    placeholder="monospace (default)" />
            </div>
            <p class="settings-hint settings-local-only-hint">This browser only. Editor changes are stored in local browser storage and take effect when you next open or reload a file tab.</p>
        </div>
    `}var ID;var kY=W_(()=>{x0();G5();J4();ID=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;m$({id:"editor",label:"Editor",icon:ID,component:xD,order:150})});var gD={};function MY(_,$){try{let j=localStorage.getItem(_);return j===null?$:j==="true"}catch{return $}}function wY(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function fD(_,$,j,G){try{return H$(localStorage.getItem(_),{fallback:$,min:j,max:G})}catch{return H$($,{fallback:$,min:j,max:G})}}function PD(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function RD(){let[_,$]=C(()=>MY("piclaw_mindmap_auto_expand",!0)),[j,G]=C(()=>fD("piclaw_mindmap_node_spacing",40,20,100)),[Z,X]=C(()=>MY("piclaw_mindmap_animate",!0));return N`
        <div class="settings-section">
            <h3>Mind Map</h3>
            <div class="settings-row">
                <label>Auto-expand nodes</label>
                <input type="checkbox" checked=${_}
                    onChange=${()=>{let Y=!_;$(Y),wY("piclaw_mindmap_auto_expand",Y)}} />
            </div>
            <div class="settings-row">
                <label>Node spacing (px)</label>
                <${u_}
                    label="node spacing"
                    value=${j}
                    min=${20}
                    max=${100}
                    fallback=${40}
                    width="70px"
                    onChange=${(Y)=>{G(Y),PD("piclaw_mindmap_node_spacing",Y)}}
                />
            </div>
            <div class="settings-row">
                <label>Animate transitions</label>
                <input type="checkbox" checked=${Z}
                    onChange=${()=>{let Y=!Z;X(Y),wY("piclaw_mindmap_animate",Y)}} />
            </div>
            <p class="settings-hint settings-local-only-hint">This browser only. Opens <code>.mindmap.yaml</code> files. Changes take effect on the next map open.</p>
        </div>
    `}var SD;var TY=W_(()=>{x0();G5();J4();SD=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><circle cx="5" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><line x1="9.5" y1="9.5" x2="6.5" y2="6.5"/><line x1="14.5" y1="9.5" x2="17.5" y2="6.5"/><line x1="9.5" y1="14.5" x2="6.5" y2="17.5"/><line x1="14.5" y1="14.5" x2="17.5" y2="17.5"/></svg>`;m$({id:"mindmap",label:"Mind Map",icon:SD,component:RD,order:170})});var vD={};function n7(_,$){try{let j=localStorage.getItem(_);return j===null?$:j==="true"}catch{return $}}function r7(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function d7(_,$){try{return localStorage.getItem(_)||$}catch{return $}}function i7(_,$){try{localStorage.setItem(_,$)}catch(j){}}function uD(){let[_,$]=C(()=>n7("piclaw_dev_mode",!1)),[j,G]=C(()=>d7("piclaw_addons_catalog_url","")),[Z,X]=C(()=>d7("piclaw_addons_catalog_urls","")),[Y,q]=C(()=>d7("piclaw_addons_repo_url","")),[L,K]=C(()=>n7("piclaw_debug_sse",!1)),[Q,V]=C(()=>n7("piclaw_debug_tool_calls",!1)),F=f(()=>{let B=!_;$(B),r7("piclaw_dev_mode",B)},[_]);return N`
        <div class="settings-section">
            <h3>Developer</h3>
            <div class="settings-row">
                <label>Developer mode</label>
                <input type="checkbox" checked=${_} onChange=${F} />
            </div>

            <p class="settings-hint settings-local-only-hint">This browser only. Developer-mode toggles and add-on catalog overrides are stored in local browser storage.</p>

            ${_&&N`
                <h3 style="margin-top:16px">Add-on Sources</h3>
                <div class="settings-row">
                    <label>Catalog URL</label>
                    <input type="text" value=${j}
                        onInput=${(B)=>{let U=B.target.value;G(U),i7("piclaw_addons_catalog_url",U)}}
                        placeholder="https://raw.githubusercontent.com/.../catalog.json" style="max-width:400px" />
                </div>
                <p class="settings-hint" style="margin-top:0">Primary add-on catalog URL. Leave empty to use the default (<code>rcarmo/piclaw-addons</code>).</p>
                <div class="settings-row" style="align-items:flex-start;">
                    <label>Additional catalog URLs</label>
                    <textarea
                        value=${Z}
                        onInput=${(B)=>{let U=B.target.value;X(U),i7("piclaw_addons_catalog_urls",U)}}
                        placeholder="One URL per line\nhttps://example.com/catalog.json"
                        style="max-width:400px; min-height:86px; resize:vertical;"
                    ></textarea>
                </div>
                <p class="settings-hint" style="margin-top:0">Fetched in addition to the primary/default catalog. One URL per line.</p>
                <div class="settings-row">
                    <label>Repo URL</label>
                    <input type="text" value=${Y}
                        onInput=${(B)=>{let U=B.target.value;q(U),i7("piclaw_addons_repo_url",U)}}
                        placeholder="https://github.com/.../piclaw-addons.git" style="max-width:400px" />
                </div>
                <p class="settings-hint" style="margin-top:0">Override the git repo used for <code>bun add</code> installs. Leave empty for default.</p>

                <h3 style="margin-top:16px">Debug</h3>
                <div class="settings-row">
                    <label>Log SSE events</label>
                    <input type="checkbox" checked=${L}
                        onChange=${()=>{let B=!L;K(B),r7("piclaw_debug_sse",B)}} />
                </div>
                <div class="settings-row">
                    <label>Log tool calls</label>
                    <input type="checkbox" checked=${Q}
                        onChange=${()=>{let B=!Q;V(B),r7("piclaw_debug_tool_calls",B)}} />
                </div>
                <p class="settings-hint">Debug flags take effect on next page reload.</p>
            `}
        </div>
    `}var bD;var yY=W_(()=>{x0();G5();bD=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`;m$({id:"developer",label:"Developer",icon:bD,component:uD,order:900})});var PY={};Y1(PY,{openSettingsDialog:()=>ZW,SettingsDialogContent:()=>fY,SettingsDialog:()=>GW});function K6(_){L6.push({ts:performance.now(),label:_})}function mD(){if(!L6.length)return;let _=L6[0].ts,$=L6.map((j)=>`+${(j.ts-_).toFixed(1)}ms ${j.label}`);console.info(`[settings-dialog perf]
`+$.join(`
`));try{window.__piclawSettingsPerfLog=$}catch(j){}try{fetch("/agent/client-perf",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({label:"settings-dialog",lines:$})}).catch((j)=>{})}catch(j){}L6.length=0}function hD(_){let $=b2.get(_);if($)return Promise.resolve($);let j=g2.get(_);if(j)return j;let G=cD[_]().then((Z)=>{return b2.set(_,Z),g2.delete(_),Z}).catch((Z)=>{throw g2.delete(_),Z});return g2.set(_,G),G}function u2(_="Loading…"){return N`
        <div class="settings-loading settings-loading-pane" role="status" aria-live="polite">
            <span class="settings-spinner"></span>
            <span>${_}</span>
        </div>
    `}function fY({onClose:_}){K6("SettingsDialogContent-render-start");let[$,j]=C(()=>x7()||"general"),[G,Z]=C(xY),[X,Y]=C(null),[q,L]=C(""),[,K]=C(0),[Q,V]=C(()=>Object.fromEntries(b2.entries())),[F,B]=C(null),[U,D]=C({compact:!1,narrow:!1}),E=u(null),H=u(null);g(()=>{K6("SettingsDialogContent-mounted"),mD()},[]),g(()=>{let W=(w)=>{if(w.key==="Escape")_()};return window.addEventListener("keydown",W),()=>window.removeEventListener("keydown",W)},[_]),g(()=>{let W=(w)=>{let x=typeof w?.detail?.section==="string"?w.detail.section.trim():"";if(x)j(x),L("")};return window.addEventListener("piclaw:open-settings",W),()=>window.removeEventListener("piclaw:open-settings",W)},[]),g(()=>{let W=()=>K((w)=>w+1);return window.addEventListener("piclaw:settings-panes-changed",W),()=>window.removeEventListener("piclaw:settings-panes-changed",W)},[]),g(()=>{fetch("/agent/settings-data").then((W)=>W.json()).then((W)=>{xY=W,Z(W)}).catch(()=>Z({}))},[]),g(()=>{let W=H.current;if(!W)return;let w=()=>{let x=W.clientWidth||0;D((P)=>{let R={compact:x>0&&x<=860,narrow:x>0&&x<=720};return P.compact===R.compact&&P.narrow===R.narrow?P:R})};if(w(),typeof ResizeObserver==="function"){let x=new ResizeObserver(()=>w());return x.observe(W),()=>x.disconnect()}return window.addEventListener("resize",w),()=>window.removeEventListener("resize",w)},[]);let k=wX(),z=[...CY,...k.map((W)=>({id:W.id,label:W.label,icon:W.icon,searchable:W.searchable||!1,placeholder:W.searchPlaceholder,order:W.order??500,isExtension:!0,component:W.component}))].sort((W,w)=>(W.order??500)-(w.order??500)),O=z.find((W)=>W.id===$)||CY.find((W)=>W.id===$);g(()=>{if(O?.searchable)requestAnimationFrame(()=>E.current?.focus())},[$]),g(()=>{if(O?.isExtension){B(null);return}let W=!1;if(Q[$]){B(null);return}return B($),hD($).then((w)=>{if(W)return;V((x)=>x?.[$]?x:{...x||{},[$]:w})}).catch((w)=>{if(W)return;console.error(`[settings-dialog] Failed to lazy-load section "${$}".`,w)}).finally(()=>{if(!W)B((w)=>w===$?null:w)}),()=>{W=!0}},[$,O?.isExtension,Q]);let y=f((W,w="info")=>{Y(W?{text:W,type:w}:null)},[]),I=f((W)=>{j(W),L("");let w=lD[W];if(w&&!IY.has(W))IY.add(W),w().then(()=>K((x)=>x+1)).catch((x)=>{})},[]),A=f((W)=>{Z((w)=>({...w||{},...W||{}}))},[]),J=()=>{if(O?.isExtension){if(!O.component)return u2("Loading pane…");let w=O.component;return N`<${w} filter=${q} />`}let W=Q[$];if(!W||F===$)return u2(`Loading ${O?.label||"settings"}…`);switch($){case"general":return N`<${W} settingsData=${G} setStatus=${y} mergeSettingsData=${A} />`;case"sessions":return N`<${W} settingsData=${G} setStatus=${y} mergeSettingsData=${A} />`;case"compaction":return N`<${W} settingsData=${G} setStatus=${y} mergeSettingsData=${A} />`;case"keyboard":return N`<${W} filter=${q} setStatus=${y} />`;case"workspace":return N`<${W} settingsData=${G} setStatus=${y} mergeSettingsData=${A} />`;case"environment":return N`<${W} settingsData=${G} filter=${q} setStatus=${y} mergeSettingsData=${A} />`;case"providers":return N`<${W} providers=${G?.providers} setStatus=${y} />`;case"models":return N`<${W} filter=${q} />`;case"theme":return N`<${W} themes=${G?.themes} colorKeys=${G?.colorKeys} settingsData=${G} setStatus=${y} mergeSettingsData=${A} />`;case"quick-actions":return N`<${W} filter=${q} setStatus=${y} mergeSettingsData=${A} />`;case"keychain":return N`<${W} filter=${q} />`;case"tools":return N`<${W} toolsets=${G?.toolsets} filter=${q} settingsData=${G} mergeSettingsData=${A} />`;case"addons":return N`<${W} setStatus=${y} filter=${q} />`;default:return u2("Loading settings…")}},M=!O;return K6("SettingsDialogContent-render-end"),N`
        <div class="settings-dialog-backdrop" onClick=${(W)=>{if(W.target===W.currentTarget)_()}}>
            <div ref=${H} data-testid="settings-dialog" class=${`settings-dialog${U.compact?" settings-dialog-compact":""}${U.narrow?" settings-dialog-narrow":""}`}>
                <div class="settings-dialog-header">
                    <span class="settings-dialog-title">Settings</span>
                    ${O?.searchable&&N`
                        <input ref=${E} type="text" class="settings-header-filter"
                            placeholder=${O.placeholder||"Filter…"}
                            value=${q} onInput=${(W)=>L(W.target.value)} />
                    `}
                    <button class="settings-dialog-close" onClick=${_} title="Close (Esc)">✕</button>
                </div>
                <div class="settings-dialog-body">
                    <nav class="settings-nav">
                        ${z.map((W,w)=>{let x=w>0&&!z[w-1].isExtension,P=W.isExtension&&x;return N`
                                ${P&&N`<div class="settings-nav-separator"></div>`}
                                <button class=${`settings-nav-item ${W.id===$?"active":""}`} onClick=${()=>I(W.id)}>
                                    <span class="settings-nav-icon">${W.icon}</span>
                                    <span class="settings-nav-label">${W.label}</span>
                                </button>
                            `})}
                    </nav>
                    <main class="settings-content">
                        ${M?u2("Loading settings…"):J()}
                    </main>
                </div>
                ${X&&N`
                    <div class=${`settings-status-bar settings-status-bar-${X.type}`}>
                        ${X.type==="info"&&N`<span class="settings-spinner"></span>`}
                        <span>${X.text}</span>
                        ${X.type!=="info"&&N`<button class="settings-status-dismiss" onClick=${()=>Y(null)}>✕</button>`}
                    </div>
                `}
            </div>
        </div>
    `}function GW(){let[_,$]=C(!1);if(g(()=>{let j=(Z)=>{let X=j5(Z?.detail?.section);if(X)try{window.__piclawSettingsRequestedSection=X}catch(Y){}$(!0)};window.addEventListener("piclaw:open-settings",j);let G=M2();if(G.open){if(G.section)try{window.__piclawSettingsRequestedSection=G.section}catch(Z){}$(!0)}return()=>window.removeEventListener("piclaw:open-settings",j)},[]),!_)return null;return N`<${v$} className="settings-portal"><${fY} onClose=${()=>$(!1)} /><//>`}function ZW(_={}){p1(_)}var L6,xY=null,b2,g2,cD,lD,IY,pD,nD,rD,dD,iD,oD,sD,aD,tD,eD,_W,$W,jW,CY;var RY=W_(()=>{x0();w2();G5();gX();L6=[];K6("module-eval-start");K6("imports-done");b2=new Map,g2=new Map;b2.set("general",P7);cD={general:()=>Promise.resolve(P7),sessions:()=>Promise.resolve().then(() => (vX(),bX)).then((_)=>_.SessionsSection),compaction:()=>Promise.resolve().then(() => (cX(),mX)).then((_)=>_.CompactionSection),keyboard:()=>Promise.resolve().then(() => (iX(),dX)).then((_)=>_.KeyboardSection),workspace:()=>Promise.resolve().then(() => (_Y(),eX)).then((_)=>_.WorkspaceSection),environment:()=>Promise.resolve().then(() => (jY(),$Y)).then((_)=>_.EnvironmentSection),providers:()=>Promise.resolve().then(() => (ZY(),GY)).then((_)=>_.ProvidersSection),models:()=>Promise.resolve().then(() => (YY(),XY)).then((_)=>_.ModelsSection),theme:()=>Promise.resolve().then(() => (KY(),LY)).then((_)=>_.ThemeSection),"quick-actions":()=>Promise.resolve().then(() => (EY(),HY)).then((_)=>_.QuickActionsSection),keychain:()=>Promise.resolve().then(() => (WY(),DY)).then((_)=>_.KeychainSection),tools:()=>Promise.resolve().then(() => (zY(),OY)).then((_)=>_.ToolsSection),addons:()=>Promise.resolve().then(() => (AY(),JY)).then((_)=>_.AddonsSection)},lD={"editor-settings":()=>Promise.resolve().then(() => (kY(),CD)).then(()=>{}),"mindmap-settings":()=>Promise.resolve().then(() => (TY(),gD)).then(()=>{}),developer:()=>Promise.resolve().then(() => (yY(),vD)).then(()=>{})},IY=new Set;pD=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M8.5 5.9L9.6 2.3h4.8l1.1 3.6 3.7-.8 2.4 4.1-2.6 2.8 2.6 2.8-2.4 4.1-3.7-.8-1.1 3.6H9.6l-1.1-3.6-3.7.8-2.4-4.1L5 12 2.4 9.2l2.4-4.1z"/></svg>`,nD=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,rD=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7"/><polyline points="3 4 3 10 9 10"/><path d="M12 7v5l3 3"/></svg>`,dD=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`,iD=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/><path d="M8 7v10"/><path d="M16 7v10"/></svg>`,oD=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 9h.01"/><path d="M10 9h.01"/><path d="M14 9h.01"/><path d="M18 9h.01"/><path d="M8 13h.01"/><path d="M12 13h.01"/><path d="M16 13h.01"/><path d="M7 17h10"/></svg>`,sD=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,aD=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="9" width="14" height="10" rx="2"/><circle cx="9" cy="14" r="1.5" fill="currentColor" stroke="none"/><circle cx="15" cy="14" r="1.5" fill="currentColor" stroke="none"/><line x1="12" y1="9" x2="12" y2="5"/><circle cx="12" cy="4" r="1.5"/></svg>`,tD=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.1 0 2-.9 2-2 0-.53-.21-1.01-.55-1.36-.34-.36-.55-.84-.55-1.37 0-1.1.9-2 2-2h2.36c3.08 0 5.64-2.56 5.64-5.64C22.9 5.85 18.05 2 12 2z"/><circle cx="8" cy="10" r="1.5" fill="currentColor" stroke="none"/><circle cx="12" cy="7" r="1.5" fill="currentColor" stroke="none"/><circle cx="16" cy="10" r="1.5" fill="currentColor" stroke="none"/></svg>`,eD=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,_W=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,$W=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="14" r="3"/><path d="M11 14h9"/><path d="M16 14v-2"/><path d="M19 14v2"/></svg>`,jW=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,CY=[{id:"general",label:"General",icon:pD,searchable:!1,order:10},{id:"sessions",label:"Sessions",icon:nD,searchable:!1,order:12},{id:"compaction",label:"Compaction",icon:rD,searchable:!1,order:13},{id:"keyboard",label:"Keyboard",icon:oD,searchable:!0,placeholder:"Filter shortcuts…",order:14},{id:"workspace",label:"Workspace",icon:dD,searchable:!1,order:15},{id:"environment",label:"Environment",icon:iD,searchable:!0,placeholder:"Filter environment…",order:16},{id:"providers",label:"Providers",icon:sD,searchable:!1,order:20},{id:"models",label:"Models",icon:aD,searchable:!0,placeholder:"Filter models…",order:30},{id:"theme",label:"Appearance",icon:tD,searchable:!1,order:40},{id:"quick-actions",label:"Quick Actions",icon:_W,searchable:!0,placeholder:"Filter quick actions…",order:70},{id:"keychain",label:"Keychain",icon:$W,searchable:!0,placeholder:"Filter entries…",order:75},{id:"tools",label:"Tools",icon:eD,searchable:!0,placeholder:"Filter tools…",order:80},{id:"addons",label:"Add-ons",icon:jW,searchable:!0,placeholder:"Filter add-ons…",order:90}]});x0();class tj{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let G of this.extensions.values()){if(G.placement!=="tabs")continue;if(!G.canHandle)continue;try{let Z=G.canHandle(_);if(Z===!1||Z===0)continue;let X=Z===!0?0:typeof Z==="number"?Z:0;if(X>j)j=X,$=G}catch(Z){console.warn(`[PaneRegistry] canHandle() error for "${G.id}":`,Z)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var Y_=new tj;var d6=null,j3=null;function rB(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function ej(){if(j3)return Promise.resolve(j3);if(!d6)d6=import(rB()).then((_)=>{return j3=_,_}).catch((_)=>{throw d6=null,_});return d6}class _G{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;queuedDiffMode=void 0;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await ej();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState));if(this.queuedDiffMode!==void 0&&typeof this.real.setDiffMode==="function")this.real.setDiffMode(this.queuedDiffMode)}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}beforeDetachFromHost(_){return this.real?.beforeDetachFromHost?.(_)}afterAttachToHost(_){return this.real?.afterAttachToHost?.(_)}moveHost(_,$){return this.real?.moveHost?.(_,$)??!1}exportHostTransferState(){return this.real?.exportHostTransferState?.()??null}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}setDiffMode(_){this.queuedDiffMode=_,this.real?.setDiffMode?.(_)}}var G3={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new _G(_,$)}};function Z3(){ej().catch((_)=>{console.warn("[editor-loader] Background preload failed; the editor will retry on demand.",_)})}function $G(_){try{return typeof _?.crypto?.randomUUID==="function"?_.crypto.randomUUID():null}catch($){return null}}function i6(_,$){try{return _?.removeItem?.($),!0}catch(j){return!1}}var jG="piclaw:editor-popout:",dB=300000;function GG(_){try{return _?.localStorage??null}catch{return null}}function iB(_=Date.now()){return`editor-popout-${_.toString(36)}-${Math.random().toString(36).slice(2,10)}`}function ZG(_){return typeof _==="string"?_.trim():""}function XG(_){return(typeof _==="string"?_.trim():"")||null}function YG(_){return typeof _==="string"?_:void 0}function qG(_){if(_===void 0)return;if(typeof _!=="string")return null;return _.trim()||null}function LG(_){if(!_||typeof _!=="object")return null;let $=_,j={};if(typeof $.cursorLine==="number"&&Number.isFinite($.cursorLine))j.cursorLine=$.cursorLine;if(typeof $.cursorCol==="number"&&Number.isFinite($.cursorCol))j.cursorCol=$.cursorCol;if(typeof $.scrollTop==="number"&&Number.isFinite($.scrollTop))j.scrollTop=$.scrollTop;return Object.keys(j).length>0?j:null}function c4(_,$=globalThis){let j=$?.window??$;if(!j?.location?.href)return null;try{let G=new URL(j.location.href),Z=G.searchParams.get(_)?.trim()||"";if(!Z)return null;return G.searchParams.delete(_),j.history?.replaceState?.(j.history.state,j.document?.title||"",G.toString()),Z}catch{return null}}function oB(_,$=globalThis,j=Date.now()){let G=GG($),Z=ZG(_?.path);if(!G||!Z)return null;let X={path:Z,content:YG(_?.content),mtime:qG(_?.mtime),paneOverrideId:XG(_?.paneOverrideId),viewState:LG(_?.viewState),capturedAt:j};if(!Boolean(X.content!==void 0||X.paneOverrideId||X.viewState||X.mtime))return null;let q=iB(j);try{return G.setItem(`${jG}${q}`,JSON.stringify(X)),q}catch{return null}}function X3(_,$=globalThis,j=Date.now()){let G=typeof _==="string"?_.trim():"",Z=GG($);if(!G||!Z)return null;let X=`${jG}${G}`,Y="";try{Y=Z.getItem(X)||""}catch{return null}if(!Y)return null;i6(Z,X);try{let q=JSON.parse(Y),L=typeof q?.capturedAt==="number"&&Number.isFinite(q.capturedAt)?q.capturedAt:j;if(L+dB<j)return null;let K=ZG(q?.path);if(!K)return null;return{path:K,content:YG(q?.content),mtime:qG(q?.mtime),paneOverrideId:XG(q?.paneOverrideId),viewState:LG(q?.viewState),capturedAt:L}}catch{return null}}function o6(_,$=globalThis,j=Date.now()){let G=oB(_,$,j);return G?{editor_popout:G}:null}function J1(_){try{return _(),!0}catch($){return!1}}function KG(_){let{ownerWindow:$,themeChangeListener:j,mediaQuery:G,mediaQueryListener:Z,dockResizeListener:X,windowResizeListener:Y,themeObserver:q,resizeObserver:L}=_;J1(()=>{if(j)$?.removeEventListener?.("piclaw-theme-change",j)}),J1(()=>{if(G&&Z){if(G.removeEventListener)G.removeEventListener("change",Z);else if(G.removeListener)G.removeListener(Z)}}),J1(()=>{if(X)$?.removeEventListener?.("dock-resize",X);if(Y)$?.removeEventListener?.("resize",Y)}),J1(()=>{q?.disconnect?.()}),J1(()=>{L?.disconnect?.()})}function VG(_){_.syncHostLayout(),J1(()=>{_.terminal?.renderer?.remeasureFont?.()}),J1(()=>{_.fitAddon?.fit?.()}),J1(()=>{_.terminal?.refresh?.()}),_.syncHostLayout(),_.sendResize()}function QG(_){let{resizeFrame:$=0,cancelAnimationFrameFn:j=cancelAnimationFrame,socket:G,fitAddon:Z,terminal:X,termEl:Y}=_;if($)J1(()=>{j($)});return J1(()=>{G?.close?.()}),J1(()=>{Z?.dispose?.()}),J1(()=>{X?.dispose?.()}),Y?.remove?.(),0}function b1(_){try{return _(),!0}catch($){return!1}}function FG(_){let{termEl:$,bodyEl:j,terminal:G,theme:Z,themeChanged:X=!1,socket:Y,resize:q}=_;if(b1(()=>{if($?.style)$.style.backgroundColor=Z.background,$.style.color=Z.foreground;if(j?.style)j.style.backgroundColor=Z.background,j.style.color=Z.foreground;let L=j?.querySelector?.(".terminal-live-host");if(L&&typeof L==="object"&&"style"in L)L.style.backgroundColor=Z.background,L.style.color=Z.foreground;let K=j?.querySelector?.("canvas");if(K&&typeof K==="object"&&"style"in K)K.style.backgroundColor=Z.background,K.style.color=Z.foreground}),b1(()=>{if(G?.options)G.options.theme=Z}),X)b1(()=>{G?.reset?.()});b1(()=>{G?.renderer?.setTheme?.(Z),G?.renderer?.clear?.()}),b1(()=>{G?.loadFonts?.()}),b1(()=>{G?.renderer?.remeasureFont?.()}),b1(()=>{if(G?.wasmTerm&&G?.renderer?.render)G.renderer.render(G.wasmTerm,!0,G.viewportY||0,G),G.renderer.render(G.wasmTerm,!1,G.viewportY||0,G)}),b1(()=>{q?.()}),b1(()=>{if(X&&Y?.readyState===1)Y.send?.(JSON.stringify({type:"input",data:"\f"}))}),b1(()=>{G?.refresh?.()})}var sB="/static/js/vendor/ghostty-web.js",aB="/static/js/vendor/ghostty-vt.wasm",h4="piclaw://terminal",tB='FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',eB='400 13px "FiraCode Nerd Font Mono"',_N='700 13px "FiraCode Nerd Font Mono"',DG="x-piclaw-terminal-client",BG="piclaw_terminal_client",$N={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},jN={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},s6=null,Y3=null;function GN(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function ZN(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL(aB,window.location.origin).href,G=(Z,X)=>{let Y=Z instanceof Request?Z.url:Z instanceof URL?Z.href:String(Z);if(!GN(Y))return $(Z,X);if(Z instanceof Request)return $(new Request(j,Z));return $(j,X)};globalThis.fetch=G;try{return await _()}finally{globalThis.fetch=$}}async function XN(){let $=await import(new URL(sB,window.location.origin).href);if(!s6)s6=ZN(()=>Promise.resolve($.init?.())).catch((j)=>{throw s6=null,j});return await s6,$}async function YN(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!Y3)Y3=Promise.allSettled([document.fonts.load(eB),document.fonts.load(_N),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await Y3}function NG(_=typeof window<"u"?window:null){try{if(typeof _?.crypto?.randomUUID==="function")return _.crypto.randomUUID()}catch($){console.debug("[terminal-pane] Failed to generate crypto-backed terminal client token; falling back.",$)}return`terminal-client-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}function q3(_=typeof window<"u"?window:null){if(!_)return null;try{let $=_.localStorage,j=typeof $?.getItem==="function"?String($.getItem(BG)||"").trim():"";if(j)return j;let G=NG(_);return $?.setItem?.(BG,G),G}catch($){return NG(_)}}async function qN(_=q3()){let $=await fetch("/terminal/session",{method:"GET",credentials:"same-origin",headers:_?{[DG]:_}:void 0}),j=await $.json().catch(()=>({}));if(!$.ok)throw Error(j?.error||`HTTP ${$.status}`);return j}async function LN(_=q3()){let $=await fetch("/terminal/handoff",{method:"POST",credentials:"same-origin",headers:_?{[DG]:_}:void 0}),j=await $.json().catch(()=>({}));if(!$.ok)throw Error(j?.error||`HTTP ${$.status}`);return typeof j?.handoff?.token==="string"&&j.handoff.token.trim()?j.handoff.token.trim():null}function KN(_,$=null,j=q3()){let G=window.location.protocol==="https:"?"wss:":"ws:",Z=new URL(`${G}//${window.location.host}${_}`);if($)Z.searchParams.set("handoff",String($));if(j)Z.searchParams.set("client",String(j));return Z.toString()}function VN(_=typeof window<"u"?window:null,$=typeof document<"u"?document:null){if(!_||!$)return!1;let{documentElement:j,body:G}=$,Z=j?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(Z==="dark")return!0;if(Z==="light")return!1;if(j?.classList?.contains("dark")||G?.classList?.contains("dark"))return!0;if(j?.classList?.contains("light")||G?.classList?.contains("light"))return!1;return Boolean(_.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function X4(_,$="",j=typeof document<"u"?document:null){if(!j)return $;return getComputedStyle(j.documentElement).getPropertyValue(_)?.trim()||$}function l4(_){let $=String(_||"").trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(/^[0-9a-fA-F]{3}$/.test(j)||/^[0-9a-fA-F]{6}$/.test(j)){let Z=j.length===3?j.split("").map((Y)=>Y+Y).join(""):j,X=parseInt(Z,16);return{r:X>>16&255,g:X>>8&255,b:X&255}}let G=$.match(/rgba?\(\s*(\d+)[,\s]\s*(\d+)[,\s]\s*(\d+)/i);if(G)return{r:parseInt(G[1],10),g:parseInt(G[2],10),b:parseInt(G[3],10)};return null}function UG(_){let $=(j)=>{let G=j/255;return G<=0.03928?G/12.92:Math.pow((G+0.055)/1.055,2.4)};return 0.2126*$(_.r)+0.7152*$(_.g)+0.0722*$(_.b)}function R5(_,$){let j=UG(_),G=UG($),Z=Math.max(j,G),X=Math.min(j,G);return(Z+0.05)/(X+0.05)}function WG(_){let $=l4(_);if(!$)return"#ffffff";let j={r:255,g:255,b:255},G={r:0,g:0,b:0};return R5($,j)>=R5($,G)?"#ffffff":"#000000"}function a6(_){let $=(j)=>Math.max(0,Math.min(255,Math.round(j||0)));return`#${[_.r,_.g,_.b].map((j)=>$(j).toString(16).padStart(2,"0")).join("")}`}function HG(_,$,j){let G=Math.max(0,Math.min(1,Number.isFinite(j)?j:0));return{r:_.r+($.r-_.r)*G,g:_.g+($.g-_.g)*G,b:_.b+($.b-_.b)*G}}function t_(_,$,j=4.5){let G=l4(_),Z=l4($);if(!G||!Z)return $;if(R5(G,Z)>=j)return a6(Z);let X=l4(WG(_));if(!X)return a6(Z);let Y=X,q=1,L=0,K=1;for(let F=0;F<14;F+=1){let B=(L+K)/2,U=HG(Z,X,B);if(R5(G,U)>=j)Y=U,q=B,K=B;else L=B}let Q=a6(Y),V=l4(Q);while(V&&R5(G,V)<j&&q<1)q=Math.min(1,q+0.01),Q=a6(HG(Z,X,q)),V=l4(Q);return Q}function QN(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function EG(_=typeof window<"u"?window:null,$=typeof document<"u"?document:null){let j=VN(_,$),G=j?jN:$N,Z=X4("--bg-primary",j?"#000000":"#ffffff",$),X=X4("--text-primary",j?"#e7e9ea":"#0f1419",$),Y=t_(Z,X||WG(Z),7),q=X4("--accent-color","#1d9bf0",$),L=X4("--danger-color",j?"#ff7b72":"#cf222e",$),K=X4("--success-color",j?"#7ee787":"#1a7f37",$),Q=X4("--bg-hover",j?"#1d1f23":"#e8ebed",$),V=X4("--accent-soft-strong",QN(q,j?"47":"33"),$);return{background:Z,foreground:Y,cursor:t_(Z,q,3),cursorAccent:Z,selectionBackground:V,selectionForeground:Y,black:t_(Z,Q,3),red:t_(Z,L,4.5),green:t_(Z,K,4.5),yellow:t_(Z,G.yellow,4.5),blue:t_(Z,q,4.5),magenta:t_(Z,G.magenta,4.5),cyan:t_(Z,G.cyan,4.5),white:Y,brightBlack:t_(Z,G.brightBlack,3),brightRed:t_(Z,G.brightRed,4.5),brightGreen:t_(Z,G.brightGreen,4.5),brightYellow:t_(Z,G.brightYellow,4.5),brightBlue:t_(Z,G.brightBlue,4.5),brightMagenta:t_(Z,G.brightMagenta,4.5),brightCyan:t_(Z,G.brightCyan,4.5),brightWhite:Y}}class L3{container;ownerDocument;ownerWindow;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;resizeRetryTimers=new Set;lastAppliedThemeSignature=null;lastResizeSignature=null;pendingHandoffToken=null;standbyHandoffToken=null;standbyHandoffRequest=null;constructor(_,$){this.container=_,this.ownerDocument=_.ownerDocument||document,this.ownerWindow=this.ownerDocument.defaultView||window;let j=typeof $?.transferState?.handoffToken==="string"&&$.transferState.handoffToken.trim()?$.transferState.handoffToken.trim():null,G=c4("terminal_handoff");this.pendingHandoffToken=j||G||null,this.termEl=this.ownerDocument.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=this.ownerDocument.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=this.ownerDocument.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.style.display="flex",this.bodyEl.style.flex="1 1 auto",this.bodyEl.style.minHeight="0",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,G=Number.isFinite(_?.height)?_.height:0,Z=Number.isFinite($?.width)?$.width:0,X=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(G)}:${Math.round(Z)}x${Math.round(X)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;_.style.display="flex",_.style.flex="1 1 auto",_.style.width="100%",_.style.height="100%",_.style.minWidth="0",_.style.minHeight="0",_.style.overflow="hidden";let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.minHeight="0",$.style.flex="1 1 auto",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none",j.style.maxHeight="none"}queueResizeRetries(_=[32,96,180,320,520,900]){if(this.disposed||!this.ownerWindow)return;this.clearResizeRetries();for(let $ of _){let j=this.ownerWindow.setTimeout(()=>{if(this.resizeRetryTimers.delete(j),this.disposed)return;this.scheduleResize(!0)},$);this.resizeRetryTimers.add(j)}}clearResizeRetries(){if(!this.ownerWindow||this.resizeRetryTimers.size===0)return;for(let _ of Array.from(this.resizeRetryTimers))try{this.ownerWindow.clearTimeout(_)}catch($){console.debug("[terminal-pane] Ignoring timeout clear failure during resize retry drain.",$,{timer:_})}this.resizeRetryTimers.clear()}scheduleResize(_=!1){if(this.disposed)return;let $=this.getResizeSignature();if(!_&&this.lastResizeSignature===$)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await XN();if(await YN(),this.disposed)return;this.bodyEl.innerHTML="";let $=this.ownerDocument.createElement("div");$.className="terminal-live-host",$.style.display="flex",$.style.flex="1 1 auto",$.style.width="100%",$.style.height="100%",$.style.minWidth="0",$.style.minHeight="0",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:tB,fontSize:13,theme:EG(this.ownerWindow,this.ownerDocument)}),G=null;if(typeof _.FitAddon==="function")G=new _.FitAddon,j.loadAddon?.(G);await j.open($),$.__terminal=j,this.syncHostLayout(),j.loadFonts?.(),G?.observeResize?.(),this.terminal=j,this.fitAddon=G,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(!0),this.queueResizeRetries([32,96,180,320]),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=EG(this.ownerWindow,this.ownerDocument),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;FG({termEl:this.termEl,bodyEl:this.bodyEl,terminal:this.terminal,theme:_,themeChanged:j,socket:this.socket,resize:()=>this.resize()}),this.lastAppliedThemeSignature=$}installThemeSync(){if(!this.ownerWindow||!this.ownerDocument)return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();this.ownerWindow.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=this.ownerWindow.matchMedia?.("(prefers-color-scheme: dark)"),G=()=>_();if(j?.addEventListener)j.addEventListener("change",G);else if(j?.addListener)j.addListener(G);this.mediaQuery=j,this.mediaQueryListener=G;let Z=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(Z?.observe(this.ownerDocument.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),this.ownerDocument.body)Z?.observe(this.ownerDocument.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=Z}installResizeSync(){if(!this.ownerWindow)return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(this.ownerWindow.addEventListener("dock-resize",_),this.ownerWindow.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),j.observe(this.termEl),j.observe(this.bodyEl),this.resizeObserver=j}}consumeStandbyHandoffToken(){let _=this.standbyHandoffToken||null;return this.standbyHandoffToken=null,_}async ensureStandbyHandoffToken(_=!1){if(this.disposed)return null;if(!_&&this.standbyHandoffToken)return this.standbyHandoffToken;if(this.standbyHandoffRequest)return await this.standbyHandoffRequest;return this.standbyHandoffRequest=LN().then(($)=>{if(!$||this.disposed)return null;return this.standbyHandoffToken=$,$}).catch(($)=>{return console.warn("[terminal-pane] Failed to prepare standby handoff token:",$),null}).finally(()=>{this.standbyHandoffRequest=null}),await this.standbyHandoffRequest}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await qN();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=this.pendingHandoffToken||null,G=new WebSocket(KN($.ws_path||"/terminal/ws",j));this.socket=G,this.setStatus(j?"Transferring…":"Connecting…"),_.onData?.((Z)=>{if(G.readyState===WebSocket.OPEN)G.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:X})=>{if(G.readyState===WebSocket.OPEN)G.send(JSON.stringify({type:"resize",cols:Z,rows:X}))}),G.addEventListener("open",()=>{if(this.disposed)return;if(j&&this.pendingHandoffToken===j)this.pendingHandoffToken=null;this.ensureStandbyHandoffToken(!1),this.setStatus("Connected"),this.scheduleResize(!0),this.queueResizeRetries([24,72,160,320])}),G.addEventListener("message",(Z)=>{if(this.disposed)return;let X=null;try{X=JSON.parse(String(Z.data))}catch{X={type:"output",data:String(Z.data)}}if(X?.type==="session"){let Y=typeof X.session_id==="string"?X.session_id:null;if(_.__piclawSessionMeta={sessionId:Y,createdAt:typeof X.created_at==="string"?X.created_at:null,processPid:typeof X.process_pid==="number"?X.process_pid:null},!this.standbyHandoffToken)this.ensureStandbyHandoffToken(!1);return}if(X?.type==="output"&&typeof X.data==="string"){_.write?.(X.data);return}if(X?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),G.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),G.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}detachHostListeners(){KG({ownerWindow:this.ownerWindow,themeChangeListener:this.themeChangeListener,mediaQuery:this.mediaQuery,mediaQueryListener:this.mediaQueryListener,dockResizeListener:this.dockResizeListener,windowResizeListener:this.windowResizeListener,themeObserver:this.themeObserver,resizeObserver:this.resizeObserver}),this.themeChangeListener=null,this.mediaQuery=null,this.mediaQueryListener=null,this.themeObserver=null,this.resizeObserver=null,this.dockResizeListener=null,this.windowResizeListener=null}beforeDetachFromHost(){this.setStatus("Moving terminal…")}afterAttachToHost(_){let $=typeof _?.transferState?.handoffToken==="string"&&_.transferState.handoffToken.trim()?_.transferState.handoffToken.trim():null;if($)this.pendingHandoffToken=$;if(this.installThemeSync(),this.installResizeSync(),this.socket?.readyState===WebSocket.OPEN)this.setStatus("Connected");else if(this.pendingHandoffToken)this.setStatus("Transferring…");else if(this.socket?.readyState===WebSocket.CONNECTING)this.setStatus("Connecting…");this.scheduleResize(!0),this.queueResizeRetries([32,96,180,320]),requestAnimationFrame(()=>this.focus())}moveHost(_){return!1}exportHostTransferState(){let _=this.standbyHandoffToken||this.pendingHandoffToken||null;return _?{kind:"terminal",live:!1,handoffToken:_}:null}async preparePopoutTransfer(){let _=this.consumeStandbyHandoffToken();if(!_)await this.ensureStandbyHandoffToken(!0),_=this.consumeStandbyHandoffToken();if(!_)return null;return this.pendingHandoffToken=_,{terminal_handoff:_}}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){VG({syncHostLayout:()=>this.syncHostLayout(),terminal:this.terminal,fitAddon:this.fitAddon,sendResize:()=>this.sendResize()})}dispose(){if(this.disposed)return;this.disposed=!0,this.standbyHandoffToken=null,this.standbyHandoffRequest=null,this.clearResizeRetries(),this.detachHostListeners(),this.resizeFrame=QG({resizeFrame:this.resizeFrame,socket:this.socket,fitAddon:this.fitAddon,terminal:this.terminal,termEl:this.termEl})}}var K3={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new L3(_,$)}},V3={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path===h4?1e4:!1},mount(_,$){return new L3(_,$)}};function I1(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((Z)=>{try{return Boolean($.matchMedia(Z)?.matches)}catch{return!1}})}function t6(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let G=String(j?.userAgent||""),Z=Number(j?.maxTouchPoints||0),X=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(G),Y=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(X||Z>1||Y)}function OG(_,$={}){if(I1($))return null;if(t6($))return{target:"_blank",features:void 0,mode:"tab"};return{target:FN(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function Q3(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function F3(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),G=String($.message||"Preparing a new branch window…");_.document.title=j;let Z=_.document.body;if(!Z)return;if(typeof _.document.createElement!=="function"){Z.textContent=`${j}
${G}`;return}let X=_.document.createElement("div");X.setAttribute("style","font-family: system-ui, sans-serif; padding: 24px; color: #222;");let Y=_.document.createElement("h1");Y.setAttribute("style","font-size: 18px; margin: 0 0 12px;"),Y.textContent=j;let q=_.document.createElement("p");if(q.setAttribute("style","margin: 0; line-height: 1.5;"),q.textContent=G,X.appendChild(Y),X.appendChild(q),typeof Z.replaceChildren==="function")Z.replaceChildren(X);else Z.innerHTML="",Z.appendChild(X)}catch{return}}function B3(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{return}}function N3(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{return}}function A1(_,$,j={}){let G=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(G.searchParams.set("chat_jid",Z),G.searchParams.delete("branch_loader"),G.searchParams.delete("branch_source_chat_jid"),G.searchParams.delete("pane_popout"),G.searchParams.delete("pane_path"),G.searchParams.delete("pane_label"),j.chatOnly!==!1)G.searchParams.set("chat_only","1");return G.toString()}function U3(_,$,j={}){let G=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(G.searchParams.set("branch_loader","1"),G.searchParams.set("branch_source_chat_jid",Z),G.searchParams.delete("chat_jid"),G.searchParams.delete("pane_popout"),G.searchParams.delete("pane_path"),G.searchParams.delete("pane_label"),j.chatOnly!==!1)G.searchParams.set("chat_only","1");return G.toString()}function zG(_,$,j={}){let G=new URL(String(_||"http://localhost/")),Z=String($||"").trim();if(!Z)return G.toString();if(G.searchParams.set("pane_popout","1"),G.searchParams.set("pane_path",Z),j?.label)G.searchParams.set("pane_label",String(j.label));else G.searchParams.delete("pane_label");if(j?.chatJid)G.searchParams.set("chat_jid",String(j.chatJid));let X=j?.params&&typeof j.params==="object"?j.params:null;if(X)for(let[Y,q]of Object.entries(X)){let L=String(Y||"").trim();if(!L)continue;if(q===null||q===void 0||q==="")G.searchParams.delete(L);else G.searchParams.set(L,String(q))}return G.searchParams.delete("chat_only"),G.searchParams.delete("branch_loader"),G.searchParams.delete("branch_source_chat_jid"),G.toString()}function FN(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function BN(_){return`piclaw-pane-${String(_||"pane").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function JG(_,$={}){if(I1($))return null;if(t6($))return{target:"_blank",features:void 0,mode:"tab"};return{target:BN(_),features:"popup=yes,width=1200,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function Y4(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let G=j.toLowerCase();if(G.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(G.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(G.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(G.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(G.includes("failed to fork branch")||G.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function NN(_){try{return JSON.parse(_)}catch{return null}}function UN(_){if(typeof _==="string")return new TextEncoder().encode(_).byteLength;if(_ instanceof ArrayBuffer)return _.byteLength;if(ArrayBuffer.isView(_))return _.byteLength;if(_ instanceof Blob)return _.size;return 0}function HN(_){if(typeof _==="string")return _.length;if(_ instanceof ArrayBuffer)return _.byteLength;if(_ instanceof Blob)return _.size;return Number(_?.size||0)}function AG(_){try{return _?.close?.(),!0}catch($){return!1}}class H3{socket=null;disposed=!1;options;bytesIn=0;bytesOut=0;pendingOutbound=[];constructor(_){this.options=_}connect(){if(this.disposed)return;AG(this.socket);let _=new WebSocket(this.options.url);_.binaryType=this.options.binaryType||"arraybuffer",_.addEventListener("open",()=>{if(this.disposed||this.socket!==_)return;this.flushPendingOutbound(_),this.options.onOpen?.()}),_.addEventListener("message",($)=>{if(this.disposed||this.socket!==_)return;let j=HN($.data);if(this.bytesIn+=j,this.emitMetrics(),typeof $.data==="string"){let G=this.options.parseControlMessage||NN;this.options.onMessage?.({kind:"control",raw:$.data,payload:G($.data)});return}this.options.onMessage?.({kind:"binary",data:$.data,size:j})}),_.addEventListener("close",()=>{if(this.socket===_)this.socket=null;if(this.disposed)return;this.options.onClose?.()}),_.addEventListener("error",()=>{if(this.disposed||this.socket!==_)return;this.options.onError?.()}),this.socket=_}send(_){if(this.disposed)return;let $=this.socket;if(!$||$.readyState!==WebSocket.OPEN){this.pendingOutbound.push(_);return}this.sendNow($,_)}sendControl(_){this.send(JSON.stringify(_??{}))}getMetrics(){return{bytesIn:this.bytesIn,bytesOut:this.bytesOut}}dispose(){if(this.disposed)return;this.disposed=!0,AG(this.socket),this.socket=null}emitMetrics(){this.options.onMetrics?.(this.getMetrics())}sendNow(_,$){let j=UN($);this.bytesOut+=j,this.emitMetrics(),_.send($)}flushPendingOutbound(_){if(this.pendingOutbound.length===0)return;let $=this.pendingOutbound.splice(0);for(let j=0;j<$.length;j+=1){if(this.disposed||this.socket!==_||_.readyState!==WebSocket.OPEN){this.pendingOutbound.unshift(...$.slice(j));return}this.sendNow(_,$[j])}}}var S5=()=>{throw Error("Operation requires compiling with --exportRuntime")},EN=typeof BigUint64Array<"u",g5=Symbol();var DN=new TextDecoder("utf-16le",{fatal:!0});Object.hasOwn=Object.hasOwn||function(_,$){return Object.prototype.hasOwnProperty.call(_,$)};function kG(_,$){let j=new Uint32Array(_)[$+-4>>>2]>>>1,G=new Uint16Array(_,$,j);if(j<=192)return String.fromCharCode(...G);try{return DN.decode(G)}catch{let Z="",X=0;while(j-X>1024)Z+=String.fromCharCode(...G.subarray(X,X+=1024));return Z+String.fromCharCode(...G.subarray(X))}}function MG(_){let $={};function j(Z,X){if(!Z)return"<yet unknown>";return kG(Z.buffer,X)}let G=_.env=_.env||{};return G.abort=G.abort||function(X,Y,q,L){let K=$.memory||G.memory;throw Error(`abort: ${j(K,X)} at ${j(K,Y)}:${q}:${L}`)},G.trace=G.trace||function(X,Y,...q){let L=$.memory||G.memory;console.log(`trace: ${j(L,X)}${Y?" ":""}${q.slice(0,Y).join(", ")}`)},G.seed=G.seed||Date.now,_.Math=_.Math||Math,_.Date=_.Date||Date,$}function wG(_,$){let j=$.exports,G=j.memory,Z=j.table,X=j.__new||S5,Y=j.__pin||S5,q=j.__unpin||S5,L=j.__collect||S5,K=j.__rtti_base,Q=K?(W)=>W[K>>>2]:S5;_.__new=X,_.__pin=Y,_.__unpin=q,_.__collect=L;function V(W){let w=new Uint32Array(G.buffer);if((W>>>=0)>=Q(w))throw Error(`invalid id: ${W}`);return w[(K+4>>>2)+W]}function F(W){let w=V(W);if(!(w&7))throw Error(`not an array: ${W}, flags=${w}`);return w}function B(W){return 31-Math.clz32(W>>>6&31)}function U(W){if(W==null)return 0;let w=W.length,x=X(w<<1,2),P=new Uint16Array(G.buffer);for(let R=0,v=x>>>1;R<w;++R)P[v+R]=W.charCodeAt(R);return x}_.__newString=U;function D(W){if(W==null)return 0;let w=new Uint8Array(W),x=X(w.length,1);return new Uint8Array(G.buffer).set(w,x),x}_.__newArrayBuffer=D;function E(W){if(!W)return null;let w=G.buffer;if(new Uint32Array(w)[W+-8>>>2]!==2)throw Error(`not a string: ${W}`);return kG(w,W)}_.__getString=E;function H(W,w,x){let P=G.buffer;if(x)switch(W){case 2:return new Float32Array(P);case 3:return new Float64Array(P)}else switch(W){case 0:return new(w?Int8Array:Uint8Array)(P);case 1:return new(w?Int16Array:Uint16Array)(P);case 2:return new(w?Int32Array:Uint32Array)(P);case 3:return new(w?BigInt64Array:BigUint64Array)(P)}throw Error(`unsupported align: ${W}`)}function k(W,w=0){let x=w,P=F(W),R=B(P),v=typeof x!=="number",c=v?x.length:x,h=X(c<<R,P&4?W:1),r;if(P&4)r=h;else{Y(h);let b=X(P&2?16:12,W);q(h);let a=new Uint32Array(G.buffer);if(a[b+0>>>2]=h,a[b+4>>>2]=h,a[b+8>>>2]=c<<R,P&2)a[b+12>>>2]=c;r=b}if(v){let b=H(R,P&2048,P&4096),a=h>>>R;if(P&16384)for(let t=0;t<c;++t)b[a+t]=x[t];else b.set(x,a)}return r}_.__newArray=k;function z(W){let w=new Uint32Array(G.buffer),x=w[W+-8>>>2],P=F(x),R=B(P),v=P&4?W:w[W+4>>>2],c=P&2?w[W+12>>>2]:w[v+-4>>>2]>>>R;return H(R,P&2048,P&4096).subarray(v>>>=R,v+c)}_.__getArrayView=z;function O(W){let w=z(W),x=w.length,P=Array(x);for(let R=0;R<x;R++)P[R]=w[R];return P}_.__getArray=O;function y(W){let w=G.buffer,x=new Uint32Array(w)[W+-4>>>2];return w.slice(W,W+x)}_.__getArrayBuffer=y;function I(W){if(!Z)throw Error("Operation requires compiling with --exportTable");let w=new Uint32Array(G.buffer)[W>>>2];return Z.get(w)}_.__getFunction=I;function A(W,w,x){return new W(J(W,w,x))}function J(W,w,x){let P=G.buffer,R=new Uint32Array(P);return new W(P,R[x+4>>>2],R[x+8>>>2]>>>w)}function M(W,w,x){_[`__get${w}`]=A.bind(null,W,x),_[`__get${w}View`]=J.bind(null,W,x)}if([Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array].forEach((W)=>{M(W,W.name,31-Math.clz32(W.BYTES_PER_ELEMENT))}),EN)[BigUint64Array,BigInt64Array].forEach((W)=>{M(W,W.name.slice(3),3)});return _.memory=_.memory||G,_.table=_.table||Z,ON(j,_)}function TG(_){return typeof Response<"u"&&_ instanceof Response}function WN(_){return _ instanceof WebAssembly.Module}async function E3(_,$={}){if(TG(_=await _))return e6(_,$);let j=WN(_)?_:await WebAssembly.compile(_),G=MG($),Z=await WebAssembly.instantiate(j,$),X=wG(G,Z);return{module:j,instance:Z,exports:X}}async function e6(_,$={}){if(!WebAssembly.instantiateStreaming)return E3(TG(_=await _)?_.arrayBuffer():_,$);let j=MG($),G=await WebAssembly.instantiateStreaming(_,$),Z=wG(j,G.instance);return{...G,exports:Z}}function ON(_,$={}){let j=_.__argumentsLength?(G)=>{_.__argumentsLength.value=G}:_.__setArgumentsLength||_.__setargc||(()=>{});for(let G of Object.keys(_)){let Z=_[G],X=G.split("."),Y=$;while(X.length>1){let K=X.shift();if(!Object.hasOwn(Y,K))Y[K]={};Y=Y[K]}let q=X[0],L=q.indexOf("#");if(L>=0){let K=q.substring(0,L),Q=Y[K];if(typeof Q>"u"||!Q.prototype){let V=function(...F){return V.wrap(V.prototype.constructor(0,...F))};if(V.prototype={valueOf(){return this[g5]}},V.wrap=function(F){return Object.create(V.prototype,{[g5]:{value:F,writable:!1}})},Q)Object.getOwnPropertyNames(Q).forEach((F)=>Object.defineProperty(V,F,Object.getOwnPropertyDescriptor(Q,F)));Y[K]=V}if(q=q.substring(L+1),Y=Y[K].prototype,/^(get|set):/.test(q)){if(!Object.hasOwn(Y,q=q.substring(4))){let V=_[G.replace("set:","get:")],F=_[G.replace("get:","set:")];Object.defineProperty(Y,q,{get(){return V(this[g5])},set(B){F(this[g5],B)},enumerable:!0})}}else if(q==="constructor")(Y[q]=function(...V){return j(V.length),Z(...V)}).original=Z;else(Y[q]=function(...V){return j(V.length),Z(this[g5],...V)}).original=Z}else if(/^(get|set):/.test(q)){if(!Object.hasOwn(Y,q=q.substring(4)))Object.defineProperty(Y,q,{get:_[G.replace("set:","get:")],set:_[G.replace("get:","set:")],enumerable:!0})}else if(typeof Z==="function"&&Z!==j)(Y[q]=(...K)=>{return j(K.length),Z(...K)}).original=Z;else Y[q]=Z}return $}function D3(_){try{return _?.__collect?.(),!0}catch($){return!1}}var JN="/static/js/vendor/remote-display-decoder.wasm",_2=null;function yG(_){if(_ instanceof ArrayBuffer)return _;if(_.byteOffset===0&&_.byteLength===_.buffer.byteLength)return _.buffer;return _.slice().buffer}async function xG(){if(_2)return _2;return _2=(async()=>{try{let G=function(Z,X,Y,q,L,K,Q){let V=yG(X),F=j.__pin(j.__newArrayBuffer(V));try{return j[Z](F,Y,q,L,K,Q.bitsPerPixel,Q.bigEndian?1:0,Q.trueColor?1:0,Q.redMax,Q.greenMax,Q.blueMax,Q.redShift,Q.greenShift,Q.blueShift)}finally{j.__unpin(F),D3(j)}},_=await fetch(JN,{credentials:"same-origin"});if(!_.ok)throw Error(`HTTP ${_.status}`);let j=(typeof e6==="function"?await e6(_,{}):await E3(await _.arrayBuffer(),{})).exports;for(let Z of["initFramebuffer","getFramebufferPtr","getFramebufferLen","getFramebufferWidth","getFramebufferHeight","processRawRect","processCopyRect","processRreRect","processHextileRect","processZrleTileData","decodeRawRectToRgba"])if(typeof j[Z]!=="function")throw Error(`${Z} export is missing.`);return{initFramebuffer(Z,X){j.initFramebuffer(Z,X)},getFramebuffer(){let Z=j.getFramebufferPtr(),X=j.getFramebufferLen();return new Uint8ClampedArray(new Uint8Array(j.memory.buffer,Z,X).slice().buffer)},getFramebufferWidth(){return j.getFramebufferWidth()},getFramebufferHeight(){return j.getFramebufferHeight()},processRawRect(Z,X,Y,q,L,K){return G("processRawRect",Z,X,Y,q,L,K)},processCopyRect(Z,X,Y,q,L,K){return j.processCopyRect(Z,X,Y,q,L,K)},processRreRect(Z,X,Y,q,L,K){return G("processRreRect",Z,X,Y,q,L,K)},processHextileRect(Z,X,Y,q,L,K){return G("processHextileRect",Z,X,Y,q,L,K)},processZrleTileData(Z,X,Y,q,L,K){return G("processZrleTileData",Z,X,Y,q,L,K)},decodeRawRectToRgba(Z,X,Y,q){let L=yG(Z),K=j.__pin(j.__newArrayBuffer(L));try{let Q=j.__pin(j.decodeRawRectToRgba(K,X,Y,q.bitsPerPixel,q.bigEndian?1:0,q.trueColor?1:0,q.redMax,q.greenMax,q.blueMax,q.redShift,q.greenShift,q.blueShift));try{return new Uint8ClampedArray(j.__getArrayBuffer(Q))}finally{j.__unpin(Q)}}finally{j.__unpin(K),D3(j)}}}}catch(_){return console.warn("[remote-display] Failed to load WASM pipeline, using JS fallback.",_),null}})(),_2}function p4(_,$,j){return Math.max($,Math.min(j,_))}function $2(_,$,j){let G=new Uint8Array(6),Z=p4(Math.floor(Number($||0)),0,65535),X=p4(Math.floor(Number(j||0)),0,65535);return G[0]=5,G[1]=p4(Math.floor(Number(_||0)),0,255),G[2]=Z>>8&255,G[3]=Z&255,G[4]=X>>8&255,G[5]=X&255,G}function P$(_){switch(Number(_)){case 0:return 1;case 1:return 2;case 2:return 4;default:return 0}}function O3(_){let $=P$(_?.button);if($)return $;let j=String(_?.pointerType||"").toLowerCase();if(j==="touch"||j==="pen")return P$(0);let G=Number(_?.buttons||0);if(G&1)return P$(0);if(G&4)return P$(1);if(G&2)return P$(2);return 0}function q4(_){let $=String(_?.type||"").toLowerCase();if($==="pointerup"||$==="pointercancel"||$==="lostpointercapture")return!0;let j=Number(_?.buttons);if(Number.isFinite(j)&&j===0&&$!=="pointerdown")return!0;let G=String(_?.pointerType||"").toLowerCase(),Z=Number(_?.pressure);if(G==="touch"||G==="pen"){if(($==="pointerleave"||$==="pointerout")&&$!=="pointerdown")return!0;if(Number.isFinite(Z)&&Z<=0&&$!=="pointerdown")return!0}return!1}function IG(_){let $=String(_?.type||"").toLowerCase();if($==="touchend"||$==="touchcancel")return!0;if($==="touchmove")return Number(_?.touches?.length||0)<=0;return!1}function v1(_){return String(_||"").toLowerCase()==="touch"}function AN(_,$,j,G){let Z=Number(j||0)-Number(_||0),X=Number(G||0)-Number($||0);return Math.hypot(Z,X)}function z3(_){let $=Number.isFinite(_?.maxDistancePx)?Number(_.maxDistancePx):14;return AN(_?.startX,_?.startY,_?.clientX,_?.clientY)>$}function CG(_){let $=Number.isFinite(_?.maxElapsedMs)?Number(_.maxElapsedMs):300;if(Number(_?.elapsedMs||0)>$)return!1;return!z3(_)}function fG(_){return String(_||"").toLowerCase()!=="mouse"}function J3(_,$,j,G,Z){let X=Math.max(1,Math.floor(Number(G||0))),Y=Math.max(1,Math.floor(Number(Z||0))),q=Math.max(1,Number(j?.width||0)),L=Math.max(1,Number(j?.height||0)),K=(Number(_||0)-Number(j?.left||0))/q,Q=(Number($||0)-Number(j?.top||0))/L;return{x:p4(Math.floor(K*X),0,Math.max(0,X-1)),y:p4(Math.floor(Q*Y),0,Math.max(0,Y-1))}}function PG(_,$,j,G=0){let Z=Number(_)<0?8:16,X=p4(Number(G||0)|Z,0,255);return[$2(X,$,j),$2(Number(G||0),$,j)]}function RG(_,$){let j=new Uint8Array(8),G=Math.max(0,Math.min(4294967295,Number($||0)>>>0));return j[0]=4,j[1]=_?1:0,j[4]=G>>>24&255,j[5]=G>>>16&255,j[6]=G>>>8&255,j[7]=G&255,j}function SG(_,$,j=!1){if(_==null||$==null)return!1;return Boolean(j)||Number(_)===Number($)}function L4(_){if(typeof _!=="string")return null;return _.length>0?_:null}function gG(_,$,j,G){let Z=Math.max(1,Math.floor(Number(_||0))),X=Math.max(1,Math.floor(Number($||0))),Y=Math.max(1,Math.floor(Number(j||0))),q=Math.max(1,Math.floor(Number(G||0))),L=Math.min(Z/Y,X/q);if(!Number.isFinite(L)||L<=0)return 1;return Math.max(0.01,L)}var W3={Backspace:65288,Tab:65289,Enter:65293,Escape:65307,Insert:65379,Delete:65535,Home:65360,End:65367,PageUp:65365,PageDown:65366,ArrowLeft:65361,ArrowUp:65362,ArrowRight:65363,ArrowDown:65364,Shift:65505,ShiftLeft:65505,ShiftRight:65506,Control:65507,ControlLeft:65507,ControlRight:65508,Alt:65513,AltLeft:65513,AltRight:65514,Meta:65515,MetaLeft:65515,MetaRight:65516,Super:65515,Super_L:65515,Super_R:65516,CapsLock:65509,NumLock:65407,ScrollLock:65300,Pause:65299,PrintScreen:65377,ContextMenu:65383,Menu:65383," ":32};for(let _=1;_<=12;_+=1)W3[`F${_}`]=65470+(_-1);function A3(_){let $=[_?.key,_?.code];for(let X of $)if(X&&Object.prototype.hasOwnProperty.call(W3,X))return W3[X];let j=String(_?.key||""),G=j?j.codePointAt(0):null,Z=G==null?0:G>65535?2:1;if(G!=null&&j.length===Z){if(G<=255)return G;return(16777216|G)>>>0}return null}var p_=Uint8Array,H1=Uint16Array,f3=Int32Array,j2=new p_([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),G2=new p_([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),y3=new p_([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),mG=function(_,$){var j=new H1(31);for(var G=0;G<31;++G)j[G]=$+=1<<_[G-1];var Z=new f3(j[30]);for(var G=1;G<30;++G)for(var X=j[G];X<j[G+1];++X)Z[X]=X-j[G]<<5|G;return{b:j,r:Z}},cG=mG(j2,2),lG=cG.b,x3=cG.r;lG[28]=258,x3[258]=28;var hG=mG(G2,0),kN=hG.b,uG=hG.r,I3=new H1(32768);for(F_=0;F_<32768;++F_)m1=(F_&43690)>>1|(F_&21845)<<1,m1=(m1&52428)>>2|(m1&13107)<<2,m1=(m1&61680)>>4|(m1&3855)<<4,I3[F_]=((m1&65280)>>8|(m1&255)<<8)>>1;var m1,F_,c1=function(_,$,j){var G=_.length,Z=0,X=new H1($);for(;Z<G;++Z)if(_[Z])++X[_[Z]-1];var Y=new H1($);for(Z=1;Z<$;++Z)Y[Z]=Y[Z-1]+X[Z-1]<<1;var q;if(j){q=new H1(1<<$);var L=15-$;for(Z=0;Z<G;++Z)if(_[Z]){var K=Z<<4|_[Z],Q=$-_[Z],V=Y[_[Z]-1]++<<Q;for(var F=V|(1<<Q)-1;V<=F;++V)q[I3[V]>>L]=K}}else{q=new H1(G);for(Z=0;Z<G;++Z)if(_[Z])q[Z]=I3[Y[_[Z]-1]++]>>15-_[Z]}return q},R$=new p_(288);for(F_=0;F_<144;++F_)R$[F_]=8;var F_;for(F_=144;F_<256;++F_)R$[F_]=9;var F_;for(F_=256;F_<280;++F_)R$[F_]=7;var F_;for(F_=280;F_<288;++F_)R$[F_]=8;var F_,m5=new p_(32);for(F_=0;F_<32;++F_)m5[F_]=5;var F_,MN=c1(R$,9,0),wN=c1(R$,9,1),TN=c1(m5,5,0),yN=c1(m5,5,1),k3=function(_){var $=_[0];for(var j=1;j<_.length;++j)if(_[j]>$)$=_[j];return $},C1=function(_,$,j){var G=$/8|0;return(_[G]|_[G+1]<<8)>>($&7)&j},M3=function(_,$){var j=$/8|0;return(_[j]|_[j+1]<<8|_[j+2]<<16)>>($&7)},P3=function(_){return(_+7)/8|0},v5=function(_,$,j){if($==null||$<0)$=0;if(j==null||j>_.length)j=_.length;return new p_(_.subarray($,j))};var xN=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Q1=function(_,$,j){var G=Error($||xN[_]);if(G.code=_,Error.captureStackTrace)Error.captureStackTrace(G,Q1);if(!j)throw G;return G},IN=function(_,$,j,G){var Z=_.length,X=G?G.length:0;if(!Z||$.f&&!$.l)return j||new p_(0);var Y=!j,q=Y||$.i!=2,L=$.i;if(Y)j=new p_(Z*3);var K=function(j0){var O0=j.length;if(j0>O0){var P0=new p_(Math.max(O0*2,j0));P0.set(j),j=P0}},Q=$.f||0,V=$.p||0,F=$.b||0,B=$.l,U=$.d,D=$.m,E=$.n,H=Z*8;do{if(!B){Q=C1(_,V,1);var k=C1(_,V+1,3);if(V+=3,!k){var z=P3(V)+4,O=_[z-4]|_[z-3]<<8,y=z+O;if(y>Z){if(L)Q1(0);break}if(q)K(F+O);j.set(_.subarray(z,y),F),$.b=F+=O,$.p=V=y*8,$.f=Q;continue}else if(k==1)B=wN,U=yN,D=9,E=5;else if(k==2){var I=C1(_,V,31)+257,A=C1(_,V+10,15)+4,J=I+C1(_,V+5,31)+1;V+=14;var M=new p_(J),W=new p_(19);for(var w=0;w<A;++w)W[y3[w]]=C1(_,V+w*3,7);V+=A*3;var x=k3(W),P=(1<<x)-1,R=c1(W,x,1);for(var w=0;w<J;){var v=R[C1(_,V,P)];V+=v&15;var z=v>>4;if(z<16)M[w++]=z;else{var c=0,h=0;if(z==16)h=3+C1(_,V,3),V+=2,c=M[w-1];else if(z==17)h=3+C1(_,V,7),V+=3;else if(z==18)h=11+C1(_,V,127),V+=7;while(h--)M[w++]=c}}var r=M.subarray(0,I),b=M.subarray(I);D=k3(r),E=k3(b),B=c1(r,D,1),U=c1(b,E,1)}else Q1(1);if(V>H){if(L)Q1(0);break}}if(q)K(F+131072);var a=(1<<D)-1,t=(1<<E)-1,q0=V;for(;;q0=V){var c=B[M3(_,V)&a],Z0=c>>4;if(V+=c&15,V>H){if(L)Q1(0);break}if(!c)Q1(2);if(Z0<256)j[F++]=Z0;else if(Z0==256){q0=V,B=null;break}else{var D0=Z0-254;if(Z0>264){var w=Z0-257,Q0=j2[w];D0=C1(_,V,(1<<Q0)-1)+lG[w],V+=Q0}var L0=U[M3(_,V)&t],N0=L0>>4;if(!L0)Q1(3);V+=L0&15;var b=kN[N0];if(N0>3){var Q0=G2[N0];b+=M3(_,V)&(1<<Q0)-1,V+=Q0}if(V>H){if(L)Q1(0);break}if(q)K(F+131072);var H0=F+D0;if(F<b){var y0=X-b,o=Math.min(b,H0);if(y0+F<0)Q1(3);for(;F<o;++F)j[F]=G[y0+F]}for(;F<H0;++F)j[F]=j[F-b]}}if($.l=B,$.p=q0,$.b=F,$.f=Q,B)Q=1,$.m=D,$.d=U,$.n=E}while(!Q);return F!=j.length&&Y?v5(j,0,F):j.subarray(0,F)},L$=function(_,$,j){j<<=$&7;var G=$/8|0;_[G]|=j,_[G+1]|=j>>8},u5=function(_,$,j){j<<=$&7;var G=$/8|0;_[G]|=j,_[G+1]|=j>>8,_[G+2]|=j>>16},w3=function(_,$){var j=[];for(var G=0;G<_.length;++G)if(_[G])j.push({s:G,f:_[G]});var Z=j.length,X=j.slice();if(!Z)return{t:nG,l:0};if(Z==1){var Y=new p_(j[0].s+1);return Y[j[0].s]=1,{t:Y,l:1}}j.sort(function(y,I){return y.f-I.f}),j.push({s:-1,f:25001});var q=j[0],L=j[1],K=0,Q=1,V=2;j[0]={s:-1,f:q.f+L.f,l:q,r:L};while(Q!=Z-1)q=j[j[K].f<j[V].f?K++:V++],L=j[K!=Q&&j[K].f<j[V].f?K++:V++],j[Q++]={s:-1,f:q.f+L.f,l:q,r:L};var F=X[0].s;for(var G=1;G<Z;++G)if(X[G].s>F)F=X[G].s;var B=new H1(F+1),U=C3(j[Q-1],B,0);if(U>$){var G=0,D=0,E=U-$,H=1<<E;X.sort(function(I,A){return B[A.s]-B[I.s]||I.f-A.f});for(;G<Z;++G){var k=X[G].s;if(B[k]>$)D+=H-(1<<U-B[k]),B[k]=$;else break}D>>=E;while(D>0){var z=X[G].s;if(B[z]<$)D-=1<<$-B[z]++-1;else++G}for(;G>=0&&D;--G){var O=X[G].s;if(B[O]==$)--B[O],++D}U=$}return{t:new p_(B),l:U}},C3=function(_,$,j){return _.s==-1?Math.max(C3(_.l,$,j+1),C3(_.r,$,j+1)):$[_.s]=j},bG=function(_){var $=_.length;while($&&!_[--$]);var j=new H1(++$),G=0,Z=_[0],X=1,Y=function(L){j[G++]=L};for(var q=1;q<=$;++q)if(_[q]==Z&&q!=$)++X;else{if(!Z&&X>2){for(;X>138;X-=138)Y(32754);if(X>2)Y(X>10?X-11<<5|28690:X-3<<5|12305),X=0}else if(X>3){Y(Z),--X;for(;X>6;X-=6)Y(8304);if(X>2)Y(X-3<<5|8208),X=0}while(X--)Y(Z);X=1,Z=_[q]}return{c:j.subarray(0,G),n:$}},b5=function(_,$){var j=0;for(var G=0;G<$.length;++G)j+=_[G]*$[G];return j},pG=function(_,$,j){var G=j.length,Z=P3($+2);_[Z]=G&255,_[Z+1]=G>>8,_[Z+2]=_[Z]^255,_[Z+3]=_[Z+1]^255;for(var X=0;X<G;++X)_[Z+X+4]=j[X];return(Z+4+G)*8},vG=function(_,$,j,G,Z,X,Y,q,L,K,Q){L$($,Q++,j),++Z[256];var V=w3(Z,15),F=V.t,B=V.l,U=w3(X,15),D=U.t,E=U.l,H=bG(F),k=H.c,z=H.n,O=bG(D),y=O.c,I=O.n,A=new H1(19);for(var J=0;J<k.length;++J)++A[k[J]&31];for(var J=0;J<y.length;++J)++A[y[J]&31];var M=w3(A,7),W=M.t,w=M.l,x=19;for(;x>4&&!W[y3[x-1]];--x);var P=K+5<<3,R=b5(Z,R$)+b5(X,m5)+Y,v=b5(Z,F)+b5(X,D)+Y+14+3*x+b5(A,W)+2*A[16]+3*A[17]+7*A[18];if(L>=0&&P<=R&&P<=v)return pG($,Q,_.subarray(L,L+K));var c,h,r,b;if(L$($,Q,1+(v<R)),Q+=2,v<R){c=c1(F,B,0),h=F,r=c1(D,E,0),b=D;var a=c1(W,w,0);L$($,Q,z-257),L$($,Q+5,I-1),L$($,Q+10,x-4),Q+=14;for(var J=0;J<x;++J)L$($,Q+3*J,W[y3[J]]);Q+=3*x;var t=[k,y];for(var q0=0;q0<2;++q0){var Z0=t[q0];for(var J=0;J<Z0.length;++J){var D0=Z0[J]&31;if(L$($,Q,a[D0]),Q+=W[D0],D0>15)L$($,Q,Z0[J]>>5&127),Q+=Z0[J]>>12}}}else c=MN,h=R$,r=TN,b=m5;for(var J=0;J<q;++J){var Q0=G[J];if(Q0>255){var D0=Q0>>18&31;if(u5($,Q,c[D0+257]),Q+=h[D0+257],D0>7)L$($,Q,Q0>>23&31),Q+=j2[D0];var L0=Q0&31;if(u5($,Q,r[L0]),Q+=b[L0],L0>3)u5($,Q,Q0>>5&8191),Q+=G2[L0]}else u5($,Q,c[Q0]),Q+=h[Q0]}return u5($,Q,c[256]),Q+h[256]},CN=new f3([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),nG=new p_(0),fN=function(_,$,j,G,Z,X){var Y=X.z||_.length,q=new p_(G+Y+5*(1+Math.ceil(Y/7000))+Z),L=q.subarray(G,q.length-Z),K=X.l,Q=(X.r||0)&7;if($){if(Q)L[0]=X.r>>3;var V=CN[$-1],F=V>>13,B=V&8191,U=(1<<j)-1,D=X.p||new H1(32768),E=X.h||new H1(U+1),H=Math.ceil(j/3),k=2*H,z=function(m0){return(_[m0]^_[m0+1]<<H^_[m0+2]<<k)&U},O=new f3(25000),y=new H1(288),I=new H1(32),A=0,J=0,M=X.i||0,W=0,w=X.w||0,x=0;for(;M+2<Y;++M){var P=z(M),R=M&32767,v=E[P];if(D[R]=v,E[P]=R,w<=M){var c=Y-M;if((A>7000||W>24576)&&(c>423||!K)){Q=vG(_,L,0,O,y,I,J,W,x,M-x,Q),W=A=J=0,x=M;for(var h=0;h<286;++h)y[h]=0;for(var h=0;h<30;++h)I[h]=0}var r=2,b=0,a=B,t=R-v&32767;if(c>2&&P==z(M-t)){var q0=Math.min(F,c)-1,Z0=Math.min(32767,M),D0=Math.min(258,c);while(t<=Z0&&--a&&R!=v){if(_[M+r]==_[M+r-t]){var Q0=0;for(;Q0<D0&&_[M+Q0]==_[M+Q0-t];++Q0);if(Q0>r){if(r=Q0,b=t,Q0>q0)break;var L0=Math.min(t,Q0-2),N0=0;for(var h=0;h<L0;++h){var H0=M-t+h&32767,y0=D[H0],o=H0-y0&32767;if(o>N0)N0=o,v=H0}}}R=v,v=D[R],t+=R-v&32767}}if(b){O[W++]=268435456|x3[r]<<18|uG[b];var j0=x3[r]&31,O0=uG[b]&31;J+=j2[j0]+G2[O0],++y[257+j0],++I[O0],w=M+r,++A}else O[W++]=_[M],++y[_[M]]}}for(M=Math.max(M,w);M<Y;++M)O[W++]=_[M],++y[_[M]];if(Q=vG(_,L,K,O,y,I,J,W,x,M-x,Q),!K)X.r=Q&7|L[Q/8|0]<<3,Q-=7,X.h=E,X.p=D,X.i=M,X.w=w}else{for(var M=X.w||0;M<Y+K;M+=65535){var P0=M+65535;if(P0>=Y)L[Q/8|0]=K,P0=Y;Q=pG(L,Q+1,_.subarray(M,P0))}X.i=Y}return v5(q,0,G+P3(Q)+Z)};var rG=function(){var _=1,$=0;return{p:function(j){var G=_,Z=$,X=j.length|0;for(var Y=0;Y!=X;){var q=Math.min(Y+2655,X);for(;Y<q;++Y)Z+=G+=j[Y];G=(G&65535)+15*(G>>16),Z=(Z&65535)+15*(Z>>16)}_=G,$=Z},d:function(){return _%=65521,$%=65521,(_&255)<<24|(_&65280)<<8|($&255)<<8|$>>8}}},PN=function(_,$,j,G,Z){if(!Z){if(Z={l:1},$.dictionary){var X=$.dictionary.subarray(-32768),Y=new p_(X.length+_.length);Y.set(X),Y.set(_,X.length),_=Y,Z.w=X.length}}return fN(_,$.level==null?6:$.level,$.mem==null?Z.l?Math.ceil(Math.max(8,Math.min(13,Math.log(_.length)))*1.5):20:12+$.mem,j,G,Z)};var dG=function(_,$,j){for(;j;++$)_[$]=j,j>>>=8};var RN=function(_,$){var j=$.level,G=j==0?0:j<6?1:j==9?3:2;if(_[0]=120,_[1]=G<<6|($.dictionary&&32),_[1]|=31-(_[0]<<8|_[1])%31,$.dictionary){var Z=rG();Z.p($.dictionary),dG(_,2,Z.d())}},SN=function(_,$){if((_[0]&15)!=8||_[0]>>4>7||(_[0]<<8|_[1])%31)Q1(6,"invalid zlib data");if((_[1]>>5&1)==+!$)Q1(6,"invalid zlib data: "+(_[1]&32?"need":"unexpected")+" dictionary");return(_[1]>>3&4)+2};var T3=function(){function _($,j){if(typeof $=="function")j=$,$={};this.ondata=j;var G=$&&$.dictionary&&$.dictionary.subarray(-32768);if(this.s={i:0,b:G?G.length:0},this.o=new p_(32768),this.p=new p_(0),G)this.o.set(G)}return _.prototype.e=function($){if(!this.ondata)Q1(5);if(this.d)Q1(4);if(!this.p.length)this.p=$;else if($.length){var j=new p_(this.p.length+$.length);j.set(this.p),j.set($,this.p.length),this.p=j}},_.prototype.c=function($){this.s.i=+(this.d=$||!1);var j=this.s.b,G=IN(this.p,this.s,this.o);this.ondata(v5(G,j,this.s.b),this.d),this.o=v5(G,this.s.b-32768),this.s.b=this.o.length,this.p=v5(this.p,this.s.p/8|0),this.s.p&=7},_.prototype.push=function($,j){this.e($),this.c(j)},_}();function iG(_,$){if(!$)$={};var j=rG();j.p(_);var G=PN(_,$,$.dictionary?6:2,4);return RN(G,$),dG(G,G.length-4,j.d()),G}var oG=function(){function _($,j){T3.call(this,$,j),this.v=$&&$.dictionary?2:1}return _.prototype.push=function($,j){if(T3.prototype.e.call(this,$),this.v){if(this.p.length<6&&!j)return;this.p=this.p.subarray(SN(this.p,this.v-1)),this.v=0}if(j){if(this.p.length<4)Q1(6,"invalid zlib data");this.p=this.p.subarray(0,-4)}T3.prototype.c.call(this,j)},_}();var gN=typeof TextDecoder<"u"&&new TextDecoder,uN=0;try{gN.decode(nG,{stream:!0}),uN=1}catch(_){}var bN=[58,50,42,34,26,18,10,2,60,52,44,36,28,20,12,4,62,54,46,38,30,22,14,6,64,56,48,40,32,24,16,8,57,49,41,33,25,17,9,1,59,51,43,35,27,19,11,3,61,53,45,37,29,21,13,5,63,55,47,39,31,23,15,7],vN=[40,8,48,16,56,24,64,32,39,7,47,15,55,23,63,31,38,6,46,14,54,22,62,30,37,5,45,13,53,21,61,29,36,4,44,12,52,20,60,28,35,3,43,11,51,19,59,27,34,2,42,10,50,18,58,26,33,1,41,9,49,17,57,25],mN=[32,1,2,3,4,5,4,5,6,7,8,9,8,9,10,11,12,13,12,13,14,15,16,17,16,17,18,19,20,21,20,21,22,23,24,25,24,25,26,27,28,29,28,29,30,31,32,1],cN=[16,7,20,21,29,12,28,17,1,15,23,26,5,18,31,10,2,8,24,14,32,27,3,9,19,13,30,6,22,11,4,25],lN=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],hN=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],pN=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1],nN=[[[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],[0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],[4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],[15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13]],[[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10],[3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],[0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],[13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9]],[[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8],[13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],[13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],[1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12]],[[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],[13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],[10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],[3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14]],[[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9],[14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6],[4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14],[11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3]],[[12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11],[10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8],[9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6],[4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13]],[[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1],[13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6],[1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2],[6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12]],[[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7],[1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2],[7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8],[2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11]]],tG=new Uint8Array(256);for(let _=0;_<256;_+=1){let $=0;for(let j=0;j<8;j+=1)$=$<<1|_>>j&1;tG[_]=$}function eG(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function _Z(_){let $=0n,j=eG(_);for(let G of j)$=$<<8n|BigInt(G);return $}function rN(_,$){let j=new Uint8Array($),G=BigInt(_);for(let Z=$-1;Z>=0;Z-=1)j[Z]=Number(G&0xffn),G>>=8n;return j}function n4(_,$,j){let G=0n;for(let Z of $){let X=BigInt(_)>>BigInt(j-Z)&1n;G=G<<1n|X}return G}function sG(_,$){let j=28n,G=(1n<<j)-1n,Z=BigInt($%28);return(_<<Z|_>>j-Z)&G}function dN(_){let $=n4(_Z(_),lN,64),j=$>>28n&0x0fffffffn,G=$&0x0fffffffn,Z=[];for(let X of pN){j=sG(j,X),G=sG(G,X);let Y=j<<28n|G;Z.push(n4(Y,hN,56))}return Z}function iN(_){let $=0n;for(let j=0;j<8;j+=1){let G=BigInt((7-j)*6),Z=Number(_>>G&0x3fn),X=(Z&32)>>4|Z&1,Y=Z>>1&15;$=$<<4n|BigInt(nN[j][X][Y])}return $}function oN(_,$){let j=n4(_,mN,32)^BigInt($),G=iN(j);return n4(G,cN,32)}function aG(_,$){let j=dN($),G=n4(_Z(_),bN,64),Z=G>>32n&0xffffffffn,X=G&0xffffffffn;for(let q of j){let L=X,K=(Z^oN(X,q))&0xffffffffn;Z=L,X=K}let Y=X<<32n|Z;return rN(n4(Y,vN,64),8)}function sN(_){let $=String(_??""),j=new Uint8Array(8);for(let G=0;G<8;G+=1){let Z=G<$.length?$.charCodeAt(G)&255:0;j[G]=tG[Z]}return j}function $Z(_,$){let j=eG($);if(j.byteLength!==16)throw Error(`Invalid VNC auth challenge length ${j.byteLength}; expected 16 bytes.`);let G=sN(_),Z=new Uint8Array(16);return Z.set(aG(j.slice(0,8),G),0),Z.set(aG(j.slice(8,16),G),8),Z}var f1="vnc";function aN(_){return Number(_)}function tN(_){let $=Array.isArray(_)?_:typeof _==="string"?_.split(",").map((Z)=>Z.trim()).filter((Z)=>Z.length>0):[],j=[],G=new Set;for(let Z of $){let X=aN(Z);if(!Number.isFinite(X))continue;let Y=Number(X);if(!G.has(Y))j.push(Y),G.add(Y)}if(j.length>0)return j;return[5,2,1,0,-223]}function i4(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function eN(_,$){let j=i4(_),G=i4($);if(!j.byteLength)return new Uint8Array(G);if(!G.byteLength)return new Uint8Array(j);let Z=new Uint8Array(j.byteLength+G.byteLength);return Z.set(j,0),Z.set(G,j.byteLength),Z}function _U(_){let $=0;for(let Z of _||[])$+=Z?.byteLength||0;let j=new Uint8Array($),G=0;for(let Z of _||[]){let X=i4(Z);j.set(X,G),G+=X.byteLength}return j}function $U(){return(_)=>{let $=i4(_);try{let j=[],G=new oG((Z)=>{j.push(new Uint8Array(Z))});if(G.push($,!0),G.err)throw Error(G.msg||"zlib decompression error");return _U(j)}catch(j){try{let G=iG($);return G instanceof Uint8Array?G:new Uint8Array(G)}catch(G){let Z=G instanceof Error?G.message:"unexpected EOF";throw Error(`unexpected EOF: ${Z}`)}}}}function jU(_){return new TextEncoder().encode(String(_||""))}function r4(_){return new TextDecoder().decode(i4(_))}function GU(_){let $=/^RFB (\d{3})\.(\d{3})\n$/.exec(String(_||""));if(!$)return null;return{major:parseInt($[1],10),minor:parseInt($[2],10),text:$[0]}}function ZU(_){if(!_)return`RFB 003.008
`;if(_.major>3||_.minor>=8)return`RFB 003.008
`;if(_.minor>=7)return`RFB 003.007
`;return`RFB 003.003
`}function jZ(_,$=0){return{bitsPerPixel:_.getUint8($),depth:_.getUint8($+1),bigEndian:_.getUint8($+2)===1,trueColor:_.getUint8($+3)===1,redMax:_.getUint16($+4,!1),greenMax:_.getUint16($+6,!1),blueMax:_.getUint16($+8,!1),redShift:_.getUint8($+10),greenShift:_.getUint8($+11),blueShift:_.getUint8($+12)}}function XU(_){let $=new ArrayBuffer(20),j=new DataView($);return j.setUint8(0,0),j.setUint8(1,0),j.setUint8(2,0),j.setUint8(3,0),j.setUint8(4,_.bitsPerPixel),j.setUint8(5,_.depth),j.setUint8(6,_.bigEndian?1:0),j.setUint8(7,_.trueColor?1:0),j.setUint16(8,_.redMax,!1),j.setUint16(10,_.greenMax,!1),j.setUint16(12,_.blueMax,!1),j.setUint8(14,_.redShift),j.setUint8(15,_.greenShift),j.setUint8(16,_.blueShift),new Uint8Array($)}function YU(_){let $=Array.isArray(_)?_:[],j=new ArrayBuffer(4+$.length*4),G=new DataView(j);G.setUint8(0,2),G.setUint8(1,0),G.setUint16(2,$.length,!1);let Z=4;for(let X of $)G.setInt32(Z,Number(X||0),!1),Z+=4;return new Uint8Array(j)}function GZ(_,$,j,G=0,Z=0){let X=new ArrayBuffer(10),Y=new DataView(X);return Y.setUint8(0,3),Y.setUint8(1,_?1:0),Y.setUint16(2,G,!1),Y.setUint16(4,Z,!1),Y.setUint16(6,Math.max(0,$||0),!1),Y.setUint16(8,Math.max(0,j||0),!1),new Uint8Array(X)}function d4(_,$){let j=Number($||0);if(j<=0)return 0;if(j===255)return _&255;return Math.max(0,Math.min(255,Math.round((_||0)*255/j)))}function XZ(_,$,j,G){if(j===1)return _[$];if(j===2)return G?(_[$]<<8|_[$+1])>>>0:(_[$]|_[$+1]<<8)>>>0;if(j===3)return G?(_[$]<<16|_[$+1]<<8|_[$+2])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16)>>>0;if(j===4)return G?(_[$]<<24>>>0|_[$+1]<<16|_[$+2]<<8|_[$+3])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24>>>0)>>>0;return 0}function qU(_,$,j,G){let Z=G||o4,X=i4(_),Y=Math.max(1,Math.floor(Number(Z.bitsPerPixel||0)/8)),q=Math.max(0,$||0)*Math.max(0,j||0)*Y;if(X.byteLength<q)throw Error(`Incomplete raw rectangle payload: expected ${q} byte(s), got ${X.byteLength}`);if(!Z.trueColor)throw Error("Indexed-colour VNC framebuffers are not supported yet.");let L=new Uint8ClampedArray(Math.max(0,$||0)*Math.max(0,j||0)*4),K=0,Q=0;for(let V=0;V<Math.max(0,$||0)*Math.max(0,j||0);V+=1){let F=XZ(X,K,Y,Z.bigEndian),B=d4(F>>>Z.redShift&Z.redMax,Z.redMax),U=d4(F>>>Z.greenShift&Z.greenMax,Z.greenMax),D=d4(F>>>Z.blueShift&Z.blueMax,Z.blueMax);L[Q]=B,L[Q+1]=U,L[Q+2]=D,L[Q+3]=255,K+=Y,Q+=4}return L}function K$(_,$,j){let G=j||o4,Z=Math.max(1,Math.floor(Number(G.bitsPerPixel||0)/8));if(_.byteLength<$+Z)return null;let X=XZ(_,$,Z,G.bigEndian);return{rgba:[d4(X>>>G.redShift&G.redMax,G.redMax),d4(X>>>G.greenShift&G.greenMax,G.greenMax),d4(X>>>G.blueShift&G.blueMax,G.blueMax),255],bytesPerPixel:Z}}function S$(_,$,j,G,Z,X,Y){if(!Y)return;for(let q=0;q<X;q+=1)for(let L=0;L<Z;L+=1){let K=((G+q)*$+(j+L))*4;_[K]=Y[0],_[K+1]=Y[1],_[K+2]=Y[2],_[K+3]=Y[3]}}function YZ(_,$,j,G,Z,X,Y){for(let q=0;q<X;q+=1){let L=q*Z*4,K=((G+q)*$+j)*4;_.set(Y.subarray(L,L+Z*4),K)}}function ZZ(_,$){let j=$,G=1;while(!0){if(_.byteLength<j+1)return null;let Z=_[j++];if(G+=Z,Z!==255)break}return{consumed:j-$,runLength:G}}function LU(_,$,j,G,Z,X,Y){let q=Z||o4,L=Math.max(1,Math.floor(Number(q.bitsPerPixel||0)/8));if(_.byteLength<$+4)return null;let K=new DataView(_.buffer,_.byteOffset+$,4).getUint32(0,!1);if(_.byteLength<$+4+K)return null;let Q=_.slice($+4,$+4+K),V;try{V=Y(Q)}catch{return{consumed:4+K,skipped:!0}}let F=0,B=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,G||0)*4);for(let U=0;U<G;U+=64){let D=Math.min(64,G-U);for(let E=0;E<j;E+=64){let H=Math.min(64,j-E);if(V.byteLength<F+1)return null;let k=V[F++],z=k&127,O=(k&128)!==0;if(!O&&z===0){let y=H*D*L;if(V.byteLength<F+y)return null;let I=X(V.slice(F,F+y),H,D,q);F+=y,YZ(B,j,E,U,H,D,I);continue}if(!O&&z===1){let y=K$(V,F,q);if(!y)return null;F+=y.bytesPerPixel,S$(B,j,E,U,H,D,y.rgba);continue}if(!O&&z>1&&z<=16){let y=[];for(let M=0;M<z;M+=1){let W=K$(V,F,q);if(!W)return null;F+=W.bytesPerPixel,y.push(W.rgba)}let I=z<=2?1:z<=4?2:4,A=Math.ceil(H*I/8),J=A*D;if(V.byteLength<F+J)return null;for(let M=0;M<D;M+=1){let W=F+M*A;for(let w=0;w<H;w+=1){let x=w*I,P=W+(x>>3),R=8-I-(x&7),v=V[P]>>R&(1<<I)-1;S$(B,j,E+w,U+M,1,1,y[v])}}F+=J;continue}if(O&&z===0){let y=0,I=0;while(I<D){let A=K$(V,F,q);if(!A)return null;F+=A.bytesPerPixel;let J=ZZ(V,F);if(!J)return null;F+=J.consumed;for(let M=0;M<J.runLength;M+=1)if(S$(B,j,E+y,U+I,1,1,A.rgba),y+=1,y>=H){if(y=0,I+=1,I>=D)break}}continue}if(O&&z>0){let y=[];for(let J=0;J<z;J+=1){let M=K$(V,F,q);if(!M)return null;F+=M.bytesPerPixel,y.push(M.rgba)}let I=0,A=0;while(A<D){if(V.byteLength<F+1)return null;let J=V[F++],M=J,W=1;if(J&128){M=J&127;let x=ZZ(V,F);if(!x)return null;F+=x.consumed,W=x.runLength}let w=y[M];if(!w)return null;for(let x=0;x<W;x+=1)if(S$(B,j,E+I,U+A,1,1,w),I+=1,I>=H){if(I=0,A+=1,A>=D)break}}continue}return{consumed:4+K,skipped:!0}}}return{consumed:4+K,rgba:B,decompressed:V}}function KU(_,$,j,G,Z){let X=Z||o4,Y=Math.max(1,Math.floor(Number(X.bitsPerPixel||0)/8));if(_.byteLength<$+4+Y)return null;let L=new DataView(_.buffer,_.byteOffset+$,_.byteLength-$).getUint32(0,!1),K=4+Y+L*(Y+8);if(_.byteLength<$+K)return null;let Q=$+4,V=K$(_,Q,X);if(!V)return null;Q+=V.bytesPerPixel;let F=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,G||0)*4);S$(F,j,0,0,j,G,V.rgba);for(let B=0;B<L;B+=1){let U=K$(_,Q,X);if(!U)return null;if(Q+=U.bytesPerPixel,_.byteLength<Q+8)return null;let D=new DataView(_.buffer,_.byteOffset+Q,8),E=D.getUint16(0,!1),H=D.getUint16(2,!1),k=D.getUint16(4,!1),z=D.getUint16(6,!1);Q+=8,S$(F,j,E,H,k,z,U.rgba)}return{consumed:Q-$,rgba:F}}function VU(_,$,j,G,Z,X){let Y=Z||o4,q=Math.max(1,Math.floor(Number(Y.bitsPerPixel||0)/8)),L=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,G||0)*4),K=$,Q=[0,0,0,255],V=[255,255,255,255];for(let F=0;F<G;F+=16){let B=Math.min(16,G-F);for(let U=0;U<j;U+=16){let D=Math.min(16,j-U);if(_.byteLength<K+1)return null;let E=_[K++];if(E&1){let H=D*B*q;if(_.byteLength<K+H)return null;let k=X(_.slice(K,K+H),D,B,Y);K+=H,YZ(L,j,U,F,D,B,k);continue}if(E&2){let H=K$(_,K,Y);if(!H)return null;Q=H.rgba,K+=H.bytesPerPixel}if(S$(L,j,U,F,D,B,Q),E&4){let H=K$(_,K,Y);if(!H)return null;V=H.rgba,K+=H.bytesPerPixel}if(E&8){if(_.byteLength<K+1)return null;let H=_[K++];for(let k=0;k<H;k+=1){let z=V;if(E&16){let W=K$(_,K,Y);if(!W)return null;z=W.rgba,K+=W.bytesPerPixel}if(_.byteLength<K+2)return null;let O=_[K++],y=_[K++],I=O>>4,A=O&15,J=(y>>4)+1,M=(y&15)+1;S$(L,j,U+I,F+A,J,M,z)}}}}return{consumed:K-$,rgba:L}}var o4={bitsPerPixel:32,depth:24,bigEndian:!1,trueColor:!0,redMax:255,greenMax:255,blueMax:255,redShift:16,greenShift:8,blueShift:0};class Z2{protocol=f1;constructor(_={}){this.shared=_.shared!==!1,this.decodeRawRect=typeof _.decodeRawRect==="function"?_.decodeRawRect:qU,this.pipeline=_.pipeline||null,this.encodings=tN(_.encodings||null),this.state="version",this.buffer=new Uint8Array(0),this.serverVersion=null,this.clientVersionText=null,this.framebufferWidth=0,this.framebufferHeight=0,this.serverName="",this.serverPixelFormat=null,this.clientPixelFormat={...o4},this.password=typeof _.password==="string"&&_.password.length>0?_.password:null,this.inflateZrle=typeof _.inflateZrle==="function"?_.inflateZrle:$U()}receive(_){if(_)this.buffer=eN(this.buffer,_);let $=[],j=[],G=!0;while(G){if(G=!1,this.state==="version"){if(this.buffer.byteLength<12)break;let Z=this.consume(12),X=r4(Z),Y=GU(X);if(!Y)throw Error(`Unsupported RFB version banner: ${X||"<empty>"}`);this.serverVersion=Y,this.clientVersionText=ZU(Y),j.push(jU(this.clientVersionText)),$.push({type:"protocol-version",protocol:f1,server:Y.text.trim(),client:this.clientVersionText.trim()}),this.state=Y.minor>=7?"security-types":"security-type-33",G=!0;continue}if(this.state==="security-types"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<5)break;let L=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(1,!1);if(this.buffer.byteLength<5+L)break;this.consume(1);let K=r4(this.consume(4+L).slice(4));throw Error(K||"VNC server rejected the connection.")}if(this.buffer.byteLength<1+Z)break;this.consume(1);let X=Array.from(this.consume(Z));$.push({type:"security-types",protocol:f1,types:X});let Y=null;if(X.includes(2)&&this.password!==null)Y=2;else if(X.includes(1))Y=1;else if(X.includes(2))throw Error("VNC password authentication is required. Enter a password and reconnect.");else throw Error(`Unsupported VNC security types: ${X.join(", ")||"none"}. This viewer currently supports only "None" and password-based VNC auth.`);j.push(Uint8Array.of(Y)),$.push({type:"security-selected",protocol:f1,securityType:Y,label:Y===2?"VNC Authentication":"None"}),this.state=Y===2?"security-challenge":"security-result",G=!0;continue}if(this.state==="security-type-33"){if(this.buffer.byteLength<4)break;let X=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),X===0){if(this.buffer.byteLength<4)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength<4+q)break;let L=r4(this.consume(4+q).slice(4));throw Error(L||"VNC server rejected the connection.")}if(X===2){if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");$.push({type:"security-selected",protocol:f1,securityType:2,label:"VNC Authentication"}),this.state="security-challenge",G=!0;continue}if(X!==1)throw Error(`Unsupported VNC security type ${X}. This viewer currently supports only "None" and password-based VNC auth.`);$.push({type:"security-selected",protocol:f1,securityType:1,label:"None"}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",G=!0;continue}if(this.state==="security-challenge"){if(this.buffer.byteLength<16)break;if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");let Z=this.consume(16);j.push($Z(this.password,Z)),this.state="security-result",G=!0;continue}if(this.state==="security-result"){if(this.buffer.byteLength<4)break;let X=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),X!==0){if(this.buffer.byteLength>=4){let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength>=4+Y){let q=r4(this.consume(4+Y).slice(4));throw Error(q||"VNC authentication failed.")}}throw Error("VNC authentication failed.")}$.push({type:"security-result",protocol:f1,ok:!0}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",G=!0;continue}if(this.state==="server-init"){if(this.buffer.byteLength<24)break;let Z=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength),X=Z.getUint16(0,!1),Y=Z.getUint16(2,!1),q=jZ(Z,4),L=Z.getUint32(20,!1);if(this.buffer.byteLength<24+L)break;let K=this.consume(24),Q=new DataView(K.buffer,K.byteOffset,K.byteLength);if(this.framebufferWidth=Q.getUint16(0,!1),this.framebufferHeight=Q.getUint16(2,!1),this.serverPixelFormat=jZ(Q,4),this.serverName=r4(this.consume(L)),this.state="connected",this.pipeline)this.pipeline.initFramebuffer(this.framebufferWidth,this.framebufferHeight);j.push(XU(this.clientPixelFormat)),j.push(YU(this.encodings)),j.push(GZ(!1,this.framebufferWidth,this.framebufferHeight)),$.push({type:"display-init",protocol:f1,width:X,height:Y,name:this.serverName,pixelFormat:q}),G=!0;continue}if(this.state==="connected"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<4)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint16(2,!1),q=4,L=[],K=!1,Q=!!this.pipeline;for(let F=0;F<Y;F+=1){if(this.buffer.byteLength<q+12){K=!0;break}let B=new DataView(this.buffer.buffer,this.buffer.byteOffset+q,12),U=B.getUint16(0,!1),D=B.getUint16(2,!1),E=B.getUint16(4,!1),H=B.getUint16(6,!1),k=B.getInt32(8,!1);if(q+=12,k===0){let z=Math.max(1,Math.floor(Number(this.clientPixelFormat.bitsPerPixel||0)/8)),O=E*H*z;if(this.buffer.byteLength<q+O){K=!0;break}let y=this.buffer.slice(q,q+O);if(q+=O,Q)this.pipeline.processRawRect(y,U,D,E,H,this.clientPixelFormat),L.push({kind:"pipeline",x:U,y:D,width:E,height:H});else L.push({kind:"rgba",x:U,y:D,width:E,height:H,rgba:this.decodeRawRect(y,E,H,this.clientPixelFormat)});continue}if(k===2){let z=KU(this.buffer,q,E,H,this.clientPixelFormat);if(!z){K=!0;break}if(Q){let O=this.buffer.slice(q,q+z.consumed);this.pipeline.processRreRect(O,U,D,E,H,this.clientPixelFormat),L.push({kind:"pipeline",x:U,y:D,width:E,height:H})}else L.push({kind:"rgba",x:U,y:D,width:E,height:H,rgba:z.rgba});q+=z.consumed;continue}if(k===1){if(this.buffer.byteLength<q+4){K=!0;break}let z=new DataView(this.buffer.buffer,this.buffer.byteOffset+q,4),O=z.getUint16(0,!1),y=z.getUint16(2,!1);if(q+=4,Q)this.pipeline.processCopyRect(U,D,E,H,O,y),L.push({kind:"pipeline",x:U,y:D,width:E,height:H});else L.push({kind:"copy",x:U,y:D,width:E,height:H,srcX:O,srcY:y});continue}if(k===16){let z=LU(this.buffer,q,E,H,this.clientPixelFormat,this.decodeRawRect,this.inflateZrle);if(!z){K=!0;break}if(q+=z.consumed,z.skipped)continue;if(Q&&z.decompressed)this.pipeline.processZrleTileData(z.decompressed,U,D,E,H,this.clientPixelFormat),L.push({kind:"pipeline",x:U,y:D,width:E,height:H});else L.push({kind:"rgba",x:U,y:D,width:E,height:H,rgba:z.rgba});continue}if(k===5){let z=VU(this.buffer,q,E,H,this.clientPixelFormat,this.decodeRawRect);if(!z){K=!0;break}if(Q){let O=this.buffer.slice(q,q+z.consumed);this.pipeline.processHextileRect(O,U,D,E,H,this.clientPixelFormat),L.push({kind:"pipeline",x:U,y:D,width:E,height:H})}else L.push({kind:"rgba",x:U,y:D,width:E,height:H,rgba:z.rgba});q+=z.consumed;continue}if(k===-223){if(this.framebufferWidth=E,this.framebufferHeight=H,Q)this.pipeline.initFramebuffer(E,H);L.push({kind:"resize",x:U,y:D,width:E,height:H});continue}throw Error(`Unsupported VNC rectangle encoding ${k}. This viewer currently supports ZRLE, Hextile, RRE, CopyRect, raw rectangles, and DesktopSize only.`)}if(K)break;this.consume(q);let V={type:"framebuffer-update",protocol:f1,width:this.framebufferWidth,height:this.framebufferHeight,rects:L};if(Q)V.framebuffer=this.pipeline.getFramebuffer();$.push(V),j.push(GZ(!0,this.framebufferWidth,this.framebufferHeight)),G=!0;continue}if(Z===2){this.consume(1),$.push({type:"bell",protocol:f1}),G=!0;continue}if(Z===3){if(this.buffer.byteLength<8)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(4,!1);if(this.buffer.byteLength<8+Y)break;this.consume(8);let q=r4(this.consume(Y));$.push({type:"clipboard",protocol:f1,text:q}),G=!0;continue}throw Error(`Unsupported VNC server message type ${Z}.`)}}return{events:$,outgoing:j}}consume(_){let $=this.buffer.slice(0,_);return this.buffer=this.buffer.slice(_),$}}var h1="piclaw://vnc";function KZ(_){let $=String(_||"").trim();return $?`${h1}/${encodeURIComponent($)}`:h1}var R3="piclaw:vnc-popout:",QU=60000;function VZ(_=globalThis){try{return _?.localStorage??null}catch{return null}}function FU(_=globalThis){let $=$G(_);if($)return $;return`vnc-popout-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}function QZ(_,$=Date.now()){if(!_||typeof _.key!=="function"||!Number.isFinite(_.length))return;let j=[];for(let G=0;G<Number(_.length||0);G+=1){let Z=_.key(G);if(Z&&Z.startsWith(R3))j.push(Z)}for(let G of j)try{let Z=_.getItem(G);if(!Z){_.removeItem(G);continue}let X=JSON.parse(Z),Y=Number(X?.expiresAt||0);if(!Number.isFinite(Y)||Y<=$)_.removeItem(G)}catch{i6(_,G)}}function BU(_,$=globalThis,j=Date.now()){let G=L4(_);if(G===null)return null;let Z=VZ($);if(!Z)return null;QZ(Z,j);let X=FU($);try{return Z.setItem(`${R3}${X}`,JSON.stringify({password:G,expiresAt:j+QU})),X}catch{return null}}function NU(_,$=globalThis,j=Date.now()){let G=String(_||"").trim();if(!G)return null;let Z=VZ($);if(!Z)return null;QZ(Z,j);let X=`${R3}${G}`;try{let Y=Z.getItem(X);if(Z.removeItem(X),!Y)return null;let q=JSON.parse(Y),L=Number(q?.expiresAt||0);if(!Number.isFinite(L)||L<=j)return null;return L4(q?.password)}catch{try{Z.removeItem(X)}catch{}return null}}function UU(_,$,j=globalThis){let G=String(_||"").trim();if(!G)return null;let Z={pane_path:KZ(G)},X=BU($,j);if(X)Z.vnc_secret=X;return Z}function HU(_){let $=String(_||"");if($===h1)return null;if(!$.startsWith(`${h1}/`))return null;let j=$.slice(`${h1}/`.length).trim();if(!j)return null;try{return decodeURIComponent(j)}catch{return j}}function l1(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}async function EU(_=null){let $=_?`/vnc/session?target=${encodeURIComponent(_)}`:"/vnc/session",j=await fetch($,{credentials:"same-origin"}),G=await j.json().catch(()=>({}));if(!j.ok)throw Error(G?.error||`HTTP ${j.status}`);return G}function DU(){if(typeof window>"u")return!1;try{let _=new URLSearchParams(window.location.search).get("pane_popout"),$=String(_||"").trim().toLowerCase();return $==="1"||$==="true"||$==="yes"}catch{return!1}}function WU(_,$=null){let j=window.location.protocol==="https:"?"wss:":"ws:",G=new URL(`${j}//${window.location.host}/vnc/ws`);if(G.searchParams.set("target",String(_||"")),$)G.searchParams.set("handoff",String($));return G.toString()}function OU(_){return String(_||"").trim()||"localhost"}function zU(_,$){let j=OU(_),G=Math.floor(Number($||0));if(!Number.isFinite(G)||G<=0||G>65535)return null;return`${j.includes(":")&&!j.startsWith("[")?`[${j}]`:j}:${G}`}function JU(_={}){let $=Boolean(_?.enabled),j=Boolean(_?.directConnectEnabled);if((Array.isArray(_?.targets)?_.targets.length:Number(_?.targetCount||0))>0)return{title:"",body:""};if(j)return{title:"No saved VNC targets yet.",body:"Connect directly above."};if(!$)return{title:"VNC is not configured yet.",body:"No saved targets are available and direct connect is disabled on this host."};return{title:"No saved VNC targets yet.",body:"This host has no configured VNC targets, and direct connect is disabled."}}function qZ(_){if(typeof window>"u")return null;try{let $=new URL(window.location.href),j=$.searchParams.get(_)?.trim()||"";if(!j)return null;return $.searchParams.delete(_),window.history?.replaceState?.(window.history.state,document.title,$.toString()),j}catch{return null}}function LZ(_){if(!String(_?.handoffToken||"").trim())return!1;return Number(_?.bytesIn||0)<=0&&!Boolean(_?.hasRenderedFrame)&&Number(_?.reconnectAttempts||0)<=0}function AU(_,$){if(!_||!$||typeof $.appendChild!=="function")return!1;try{$.innerHTML=""}catch{}return $.appendChild(_),!0}class FZ{container;root;statusEl;bodyEl;metricsEl;targetSubtitleEl;socketBoundary=null;protocol=null;disposed=!1;targetId=null;targetLabel=null;bytesIn=0;bytesOut=0;canvas=null;canvasCtx=null;displayPlaceholderEl=null;displayInfoEl=null;displayMetaEl=null;displayStageEl=null;chromeEl=null;sessionShellEl=null;resizeObserver=null;displayScale=null;readOnly=!1;pointerButtonMask=0;pointerInputAbortController=null;pressedKeysyms=new Map;passwordInputEl=null;authPassword=null;directHostInputEl=null;directPortInputEl=null;directPasswordInputEl=null;hasRenderedFrame=!1;frameTimeoutId=null;reconnectTimerId=null;reconnectAttempts=0;rawFallbackAttempted=!1;protocolRecovering=!1;pendingHandoffToken=null;constructor(_,$){this.container=_,this.targetId=HU($?.path),this.targetLabel=this.targetId||null,this.pendingHandoffToken=qZ("vnc_handoff");let j=qZ("vnc_secret"),G=NU(j);if(G!==null)this.authPassword=G;this.root=document.createElement("div"),this.root.className="vnc-pane-shell",this.root.style.cssText="display:flex;flex-direction:column;width:100%;height:100%;background:var(--bg-primary);color:var(--text-primary);",this.targetSubtitleEl=null,this.statusEl=document.createElement("div"),this.statusEl.style.cssText="display:none;",this.statusEl.textContent="",this.bodyEl=document.createElement("div"),this.bodyEl.style.cssText="flex:1;min-height:0;display:flex;align-items:stretch;justify-content:stretch;padding:12px;",this.metricsEl=document.createElement("div"),this.metricsEl.style.cssText="display:none;",this.updateMetrics(),this.root.append(this.statusEl,this.bodyEl),this.container.appendChild(this.root),this.load()}setStatus(_){this.statusEl.textContent=String(_||"")}setSessionChromeVisible(_){if(this.chromeEl)this.chromeEl.style.display=_?"grid":"none";if(this.sessionShellEl?.style)this.sessionShellEl.style.gridTemplateRows=_?"auto minmax(0,1fr)":"1fr";if(this.displayStageEl?.style)this.displayStageEl.style.padding=_?"12px":"0",this.displayStageEl.style.border=_?"1px solid var(--border-color)":"none",this.displayStageEl.style.borderRadius=_?"16px":"0",this.displayStageEl.style.background=_?"#0a0a0a":"#000";if(this.displayPlaceholderEl?.style)this.displayPlaceholderEl.style.display=_&&!this.hasRenderedFrame?"block":"none"}clearReconnectTimer(){if(this.reconnectTimerId)clearTimeout(this.reconnectTimerId),this.reconnectTimerId=null}scheduleReconnect(_=null){if(this.disposed||!this.targetId)return;this.clearReconnectTimer();let $=Math.min(8000,1500+this.reconnectAttempts*1000),j=Number.isFinite(_)?Math.max(0,Number(_)):$;this.reconnectAttempts+=1,this.reconnectTimerId=setTimeout(()=>{if(this.reconnectTimerId=null,this.disposed||!this.targetId)return;this.connectSocket()},j)}updateMetrics(){this.metricsEl.textContent=`Transport bytes — in: ${this.bytesIn} / out: ${this.bytesOut}`}applyMetrics(_){this.bytesIn=Number(_?.bytesIn||0),this.bytesOut=Number(_?.bytesOut||0),this.updateMetrics()}openTargetTab(_,$){if(this.targetId=String(_||"").trim()||null,this.targetLabel=String($||_||"").trim()||this.targetId||"VNC",this.targetId)this.renderTargetSession({direct_connect_enabled:!0,target:{id:this.targetId,label:this.targetLabel,read_only:!1,direct_connect:!0}}),this.setStatus("Connecting…"),this.updateDisplayInfo("Connecting…"),this.updateDisplayMeta("connecting");this.load()}requestPanePopout(_,$){this.container.dispatchEvent(new CustomEvent("pane:popout",{bubbles:!0,detail:{path:_,label:$}}))}resetLiveSession(){this.clearReconnectTimer(),this.reconnectAttempts=0,this.protocol=null;try{this.socketBoundary?.dispose?.()}catch{}this.socketBoundary=null;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=null;try{this.pointerInputAbortController?.abort?.()}catch{}if(this.pointerInputAbortController=null,this.canvas=null,this.canvasCtx=null,this.displayPlaceholderEl=null,this.displayInfoEl=null,this.displayMetaEl=null,this.displayStageEl=null,this.displayScale=null,this.passwordInputEl=null,this.directHostInputEl=null,this.directPortInputEl=null,this.directPasswordInputEl=null,this.hasRenderedFrame=!1,this.rawFallbackAttempted=!1,this.protocolRecovering=!1,this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;this.pressedKeysyms.clear()}renderTargets(_){this.resetLiveSession();let $=Array.isArray(_?.targets)?_.targets:[],j=Boolean(_?.direct_connect_enabled),G=JU({enabled:_?.enabled,directConnectEnabled:j,targets:$});this.bodyEl.innerHTML=`
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
                                    <div style="font-weight:600;margin-bottom:6px;">${l1(X.label||X.id)}</div>
                                    <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);">${l1(X.id)}</div>
                                    <div style="margin-top:8px;font-size:12px;color:var(--text-secondary);">${X.readOnly?"Read-only target":"Interactive target"}</div>
                                </div>
                                <div style="display:flex;flex-wrap:wrap;gap:8px;">
                                    <button type="button" data-target-open-tab="${l1(X.id)}" data-target-label="${l1(X.label||X.id)}" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:8px;background:transparent;cursor:pointer;color:inherit;">Connect</button>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                `:`
                    <div style="min-height:0;display:grid;place-items:center;justify-items:center;">
                        <div style="width:min(100%,540px);text-align:center;padding:24px 20px;border:1px dashed var(--border-color);border-radius:10px;background:transparent;font-size:13px;color:var(--text-secondary);line-height:1.5;display:grid;gap:6px;">
                            <div style="font-weight:600;color:var(--text-primary);">${l1(G.title)}</div>
                            <div>${l1(G.body)}</div>
                        </div>
                    </div>
                `}
            </div>
        `,this.directHostInputEl=this.bodyEl.querySelector("[data-vnc-direct-host]"),this.directPortInputEl=this.bodyEl.querySelector("[data-vnc-direct-port]"),this.directPasswordInputEl=this.bodyEl.querySelector("[data-vnc-direct-password]");let Z=()=>{let X=zU(this.directHostInputEl?.value,this.directPortInputEl?.value);if(!X)return;this.authPassword=L4(this.directPasswordInputEl?this.directPasswordInputEl.value:this.authPassword),this.openTargetTab(X,X)};this.directHostInputEl?.addEventListener("keydown",(X)=>{if(X.key!=="Enter")return;X.preventDefault(),Z()}),this.directPortInputEl?.addEventListener("keydown",(X)=>{if(X.key!=="Enter")return;X.preventDefault(),Z()}),this.directPasswordInputEl?.addEventListener("keydown",(X)=>{if(X.key!=="Enter")return;X.preventDefault(),Z()}),this.bodyEl.querySelector("[data-direct-open-tab]")?.addEventListener("click",()=>Z());for(let X of Array.from(this.bodyEl.querySelectorAll("[data-target-open-tab]")))X.addEventListener("click",()=>{let Y=X.getAttribute("data-target-open-tab"),q=X.getAttribute("data-target-label")||Y||"VNC";if(!Y)return;this.openTargetTab(Y,q)})}renderTargetSession(_){this.resetLiveSession();let $=_?.target||{},j=$?.label||this.targetId||"VNC target",G=DU();if(this.targetLabel=j,this.readOnly=Boolean($.read_only),this.pointerButtonMask=0,this.hasRenderedFrame=!1,this.pressedKeysyms.clear(),this.bodyEl.innerHTML=G?`
                <div data-vnc-session-shell style="width:100%;height:100%;min-height:0;display:grid;grid-template-rows:auto minmax(0,1fr);gap:6px;">
                    <div data-vnc-session-chrome style="padding:6px 8px;border:1px solid var(--border-color);border-radius:8px;background:transparent;display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
                        <div data-display-info style="min-width:0;flex:1 1 240px;font-size:12px;color:var(--text-secondary);line-height:1.3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Negotiating remote display…</div>
                        <input type="password" data-vnc-password placeholder="Password" autocomplete="current-password" style="width:150px;max-width:100%;padding:6px 8px;border:1px solid var(--border-color);border-radius:6px;background:transparent;color:inherit;" />
                        <button type="button" data-vnc-reconnect="1" style="padding:6px 10px;border:1px solid var(--border-color);border-radius:6px;background:transparent;cursor:pointer;color:inherit;">Reconnect</button>
                    </div>
                    <div data-display-stage style="min-height:0;height:100%;border:1px solid var(--border-color);border-radius:8px;background:#0a0a0a;display:flex;align-items:center;justify-content:center;padding:4px;position:relative;overflow:hidden;">
                        <canvas data-display-canvas tabindex="0" style="display:none;max-width:100%;max-height:100%;width:auto;height:auto;image-rendering:auto;box-shadow:none;border-radius:2px;background:#000;"></canvas>
                        <div data-display-placeholder style="max-width:520px;text-align:center;color:#d7d7d7;line-height:1.5;">
                            <div style="font-weight:600;font-size:14px;margin-bottom:6px;">${l1(j)}</div>
                            <div style="font-size:12px;color:#b7b7b7;">Waiting for the VNC/RFB handshake and first framebuffer update…</div>
                        </div>
                    </div>
                </div>
            `:`
                <div data-vnc-session-shell style="width:100%;height:100%;min-height:0;display:grid;grid-template-rows:auto minmax(0,1fr);gap:12px;">
                    <div data-vnc-session-chrome style="padding:10px 12px;border:1px solid var(--border-color);border-radius:10px;background:transparent;display:grid;gap:10px;">
                        <div style="display:grid;gap:4px;min-width:0;">
                            <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${l1($.id||this.targetId||"")} · ${$.read_only?"read-only":"interactive"} · websocket → TCP proxy</div>
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
                            <div style="font-weight:700;font-size:18px;margin-bottom:8px;">${l1(j)}</div>
                            <div style="font-size:13px;color:#b7b7b7;">Waiting for the VNC/RFB handshake and first framebuffer update…</div>
                        </div>
                    </div>
                </div>
            `,this.sessionShellEl=this.bodyEl.querySelector("[data-vnc-session-shell]"),this.chromeEl=this.bodyEl.querySelector("[data-vnc-session-chrome]"),this.displayStageEl=this.bodyEl.querySelector("[data-display-stage]"),this.canvas=this.bodyEl.querySelector("[data-display-canvas]"),this.displayPlaceholderEl=this.bodyEl.querySelector("[data-display-placeholder]"),this.displayInfoEl=this.bodyEl.querySelector("[data-display-info]"),this.displayMetaEl=this.bodyEl.querySelector("[data-display-meta]"),this.canvasCtx=this.canvas?.getContext?.("2d",{alpha:!1})||null,this.canvasCtx)this.canvasCtx.imageSmoothingEnabled=!0,this.canvasCtx.imageSmoothingQuality="high";if(this.updateDisplayInfo("Waiting for VNC protocol negotiation…"),this.updateDisplayMeta(),this.setSessionChromeVisible(!0),this.attachDisplayResizeObserver(),this.attachCanvasPointerHandlers(),this.attachCanvasKeyboardHandlers(),this.passwordInputEl=this.bodyEl.querySelector("[data-vnc-password]"),this.passwordInputEl&&this.authPassword!==null)this.passwordInputEl.value=this.authPassword;this.passwordInputEl?.addEventListener("input",()=>{this.authPassword=L4(this.passwordInputEl.value)}),this.passwordInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),this.connectSocket()}),this.bodyEl.querySelector("[data-vnc-reconnect]")?.addEventListener("click",()=>{this.authPassword=L4(this.passwordInputEl?this.passwordInputEl.value:this.authPassword),this.connectSocket()}),this.bodyEl.querySelector("[data-open-target-picker]")?.addEventListener("click",()=>{this.openTargetTab("","VNC")})}updateDisplayInfo(_){if(this.displayInfoEl)this.displayInfoEl.textContent=String(_||"")}updateDisplayMeta(_=""){if(!this.displayMetaEl)return;let $=this.protocol?.state?`state=${this.protocol.state}`:"state=idle",j=this.protocol?.framebufferWidth&&this.protocol?.framebufferHeight?`${this.protocol.framebufferWidth}×${this.protocol.framebufferHeight}`:"pending",G=this.protocol?.serverName?` · name=${this.protocol.serverName}`:"",Z=this.displayScale?` · scale=${Math.round(this.displayScale*100)}%`:"",X=_?` · ${_}`:"";this.displayMetaEl.textContent=`${$} · framebuffer=${j}${G}${Z}${X}`}ensureCanvasSize(_,$,j={}){if(!this.canvas||!this.canvasCtx||!_||!$)return;if(this.canvas.width!==_||this.canvas.height!==$)this.canvas.width=_,this.canvas.height=$;let G=j?.reveal===!0;if(this.canvas.style.display=G||this.hasRenderedFrame?"block":"none",this.canvas.style.aspectRatio=`${_} / ${$}`,this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=G||this.hasRenderedFrame?"none":"";this.updateCanvasScale()}attachDisplayResizeObserver(){if(!this.displayStageEl||typeof ResizeObserver>"u")return;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=new ResizeObserver(()=>{this.updateCanvasScale()}),this.resizeObserver.observe(this.displayStageEl)}updateCanvasScale(){if(!this.canvas||!this.displayStageEl||!this.canvas.width||!this.canvas.height)return;requestAnimationFrame(()=>{if(!this.canvas||!this.displayStageEl)return;let _=this.displayStageEl.getBoundingClientRect?.(),$=Math.max(1,Math.floor(_?.width||this.displayStageEl.clientWidth||0)-32),j=Math.max(1,Math.floor(_?.height||this.displayStageEl.clientHeight||0)-32);if(!$||!j)return;let G=gG($,j,this.canvas.width,this.canvas.height);this.displayScale=G,this.canvas.style.width=`${Math.max(1,Math.round(this.canvas.width*G))}px`,this.canvas.style.height=`${Math.max(1,Math.round(this.canvas.height*G))}px`,this.updateDisplayMeta()})}getFramebufferPointFromEvent(_){if(!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let $=this.canvas.getBoundingClientRect?.();if(!$||!$.width||!$.height)return null;return J3(_.clientX,_.clientY,$,this.protocol.framebufferWidth,this.protocol.framebufferHeight)}sendPointerEvent(_,$,j){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send($2(_,$,j))}attachCanvasPointerHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.style.cursor="crosshair",this.canvas.style.touchAction="none";try{this.pointerInputAbortController?.abort?.()}catch{}let _=new AbortController;this.pointerInputAbortController=_;let $=_.signal,j=this.canvas.ownerDocument||document,G=j.defaultView||window,Z=new Map,X=new Map,Y=new Map,q=new Map,L=new Set,K=!1,Q=(A)=>this.getFramebufferPointFromEvent(A)||X.get(A?.pointerId)||{x:0,y:0},V=(A)=>{if(!A||!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let J=this.canvas.getBoundingClientRect?.();if(!J||!J.width||!J.height)return null;return J3(A.clientX,A.clientY,J,this.protocol.framebufferWidth,this.protocol.framebufferHeight)},F=(A)=>{let J=Y.get(A);if(J)G.clearTimeout(J),Y.delete(A)},B=(A)=>{let J=q.get(A);if(J?.holdTimer)G.clearTimeout(J.holdTimer);q.delete(A)},U=()=>{for(let A of q.keys())B(A)},D=()=>{if(!L.size)K=!1},E=(A,J=80)=>{let M=String(A?.pointerType||"").toLowerCase();if(!fG(M))return;let W=Number(A?.pointerId);if(!Number.isFinite(W))return;F(W);let w=G.setTimeout(()=>{if(Y.delete(W),!Z.has(W)&&!this.pointerButtonMask)return;k({pointerId:W,pointerType:M,type:"pointercancel",clientX:A?.clientX,clientY:A?.clientY},{resetAll:!0})},J);Y.set(W,w)},H=(A=null)=>{if(!Z.size&&!this.pointerButtonMask&&!q.size)return;for(let M of Y.keys())F(M);U(),L.clear(),K=!1;let J=A||X.values().next().value||{x:0,y:0};Z.clear(),X.clear(),this.pointerButtonMask=0,this.sendPointerEvent(0,J.x,J.y)},k=(A,J={})=>{if(J.resetAll){let P=Number(A?.pointerId);F(P),H(Q(A));try{this.canvas?.releasePointerCapture?.(P)}catch{}return}let M=Q(A),W=Number(A?.pointerId);F(W),B(W),L.delete(W),D();let w=Z.has(W),x=Z.get(W)??O3(A);if(!w&&!x&&!this.pointerButtonMask)return;if(Z.delete(W),X.delete(W),x)this.pointerButtonMask&=~x;else if(!Z.size)this.pointerButtonMask=0;this.sendPointerEvent(this.pointerButtonMask,M.x,M.y);try{this.canvas?.releasePointerCapture?.(W)}catch{}},z=(A)=>{if(K)return;let J=q.get(A);if(!J||J.dragActivated)return;J.dragActivated=!0,J.holdTimer=null;let M=P$(0);if(!M)return;Z.set(A,(Z.get(A)??0)|M),this.pointerButtonMask|=M,E({pointerId:A,pointerType:"touch",clientX:J.lastClientX,clientY:J.lastClientY}),this.sendPointerEvent(this.pointerButtonMask,J.lastPoint.x,J.lastPoint.y)},O=(A,J,M={})=>{let W=q.get(A);if(!W)return!1;let w=J||W.lastPoint||{x:0,y:0},x=Number.isFinite(M.clientX)?Number(M.clientX):W.lastClientX,P=Number.isFinite(M.clientY)?Number(M.clientY):W.lastClientY;if(L.delete(A),M.cancelled||K){if(B(A),D(),Z.has(A)||this.pointerButtonMask)H(w);return!0}if(W.dragActivated||Z.has(A))return k({pointerId:A,pointerType:"touch",type:"pointerup",clientX:x,clientY:P}),D(),!0;let R=Date.now()-W.startedAt,v=CG({startX:W.startClientX,startY:W.startClientY,clientX:x,clientY:P,elapsedMs:R});if(F(A),B(A),X.delete(A),D(),v){let c=P$(0);this.sendPointerEvent(c,w.x,w.y),this.sendPointerEvent(0,w.x,w.y)}else this.sendPointerEvent(this.pointerButtonMask,w.x,w.y);return!0};this.canvas.addEventListener("contextmenu",(A)=>{A.preventDefault()},{signal:$}),this.canvas.addEventListener("pointermove",(A)=>{let J=this.getFramebufferPointFromEvent(A);if(!J)return;let M=String(A?.pointerType||"").toLowerCase(),W=v1(M);if(X.set(A.pointerId,J),W){let w=q.get(A.pointerId);if(w){if(w.lastClientX=Number(A?.clientX||0),w.lastClientY=Number(A?.clientY||0),w.lastPoint=J,!w.dragActivated&&z3({startX:w.startClientX,startY:w.startClientY,clientX:w.lastClientX,clientY:w.lastClientY}))B(A.pointerId),q.set(A.pointerId,{...w,holdTimer:null,dragActivated:!1});if(!w.dragActivated){this.sendPointerEvent(this.pointerButtonMask,J.x,J.y);return}}if(K)return}if(Z.has(A.pointerId)&&q4(A)){k(A,{resetAll:!0});return}if(this.pointerButtonMask&&!Z.has(A.pointerId)&&q4(A)){H(J);return}if(Z.has(A.pointerId))E(A);this.sendPointerEvent(this.pointerButtonMask,J.x,J.y)},{signal:$}),this.canvas.addEventListener("pointerdown",(A)=>{let J=this.getFramebufferPointFromEvent(A);if(!J)return;let M=String(A?.pointerType||"").toLowerCase(),W=v1(M);if(A.preventDefault(),this.canvas?.focus?.(),X.set(A.pointerId,J),W){if(L.add(A.pointerId),L.size>1){let P=[...L];K=!0,H(J);for(let R of P)L.add(R);K=!0;return}B(A.pointerId);let x={startClientX:Number(A?.clientX||0),startClientY:Number(A?.clientY||0),lastClientX:Number(A?.clientX||0),lastClientY:Number(A?.clientY||0),startedAt:Date.now(),lastPoint:J,holdTimer:null,dragActivated:!1};x.holdTimer=G.setTimeout(()=>{z(A.pointerId)},260),q.set(A.pointerId,x),this.sendPointerEvent(this.pointerButtonMask,J.x,J.y);return}if(M==="mouse")try{this.canvas?.setPointerCapture?.(A.pointerId)}catch{}let w=O3(A);if(!w)return;Z.set(A.pointerId,(Z.get(A.pointerId)??0)|w),this.pointerButtonMask|=w,E(A),this.sendPointerEvent(this.pointerButtonMask,J.x,J.y)},{signal:$,passive:!1}),this.canvas.addEventListener("pointerup",(A)=>{if(A.preventDefault(),v1(A?.pointerType)){let J=Q(A);if(O(A.pointerId,J,{clientX:A?.clientX,clientY:A?.clientY}))return}k(A)},{signal:$,passive:!1}),this.canvas.addEventListener("pointercancel",(A)=>{if(A.preventDefault(),v1(A?.pointerType)){let J=Q(A);if(O(A.pointerId,J,{clientX:A?.clientX,clientY:A?.clientY,cancelled:!0}))return}k(A,{resetAll:!0})},{signal:$,passive:!1}),this.canvas.addEventListener("pointerleave",(A)=>{if(q.has(A.pointerId)&&v1(A?.pointerType)){O(A.pointerId,Q(A),{clientX:A?.clientX,clientY:A?.clientY,cancelled:!0});return}if(!Z.has(A.pointerId))return;if(!q4(A))return;k(A,{resetAll:!0})},{signal:$}),this.canvas.addEventListener("pointerout",(A)=>{if(q.has(A.pointerId)&&v1(A?.pointerType)){O(A.pointerId,Q(A),{clientX:A?.clientX,clientY:A?.clientY,cancelled:!0});return}if(!Z.has(A.pointerId))return;if(!q4(A))return;k(A,{resetAll:!0})},{signal:$}),this.canvas.addEventListener("lostpointercapture",(A)=>{k(A,{resetAll:!0})},{signal:$}),G.addEventListener("pointermove",(A)=>{if(!Z.size&&!this.pointerButtonMask||!q4(A))return;if(!Z.has(A.pointerId)&&!this.pointerButtonMask)return;k(A,{resetAll:!0})},{signal:$}),G.addEventListener("pointerup",(A)=>{if(!Z.has(A.pointerId)&&!this.pointerButtonMask&&!q.has(A.pointerId))return;if(A.preventDefault?.(),v1(A?.pointerType)){let J=Q(A);if(O(A.pointerId,J,{clientX:A?.clientX,clientY:A?.clientY}))return}k(A,{resetAll:!Z.has(A.pointerId)})},{signal:$,passive:!1}),G.addEventListener("pointercancel",(A)=>{if(!Z.has(A.pointerId)&&!this.pointerButtonMask&&!q.has(A.pointerId))return;if(A.preventDefault?.(),v1(A?.pointerType)){let J=Q(A);if(O(A.pointerId,J,{clientX:A?.clientX,clientY:A?.clientY,cancelled:!0}))return}k(A,{resetAll:!0})},{signal:$,passive:!1});let y=(A)=>{if(!Z.size&&!this.pointerButtonMask&&!q.size)return;if(!IG(A))return;let J=A?.changedTouches?.[0]||A?.touches?.[0]||null,M=V(J)||X.values().next().value||q.values().next().value?.lastPoint||{x:0,y:0};if(!Z.size&&!this.pointerButtonMask&&q.size===1){let[W]=q.entries().next().value||[];if(Number.isFinite(W)){O(W,M,{clientX:J?.clientX,clientY:J?.clientY,cancelled:A?.type==="touchcancel"});return}}H(M)},I=(A,J={})=>{if(!Z.size&&!this.pointerButtonMask&&!q.has(A?.pointerId))return;if(!q4(A))return;if(A?.preventDefault?.(),v1(A?.pointerType)){let M=Q(A);if(O(A.pointerId,M,{clientX:A?.clientX,clientY:A?.clientY,cancelled:J.resetAll===!0}))return}k(A,{resetAll:J.resetAll===!0||!Z.has(A?.pointerId)})};this.canvas.addEventListener("touchend",y,{signal:$,passive:!0,capture:!0}),this.canvas.addEventListener("touchcancel",y,{signal:$,passive:!0,capture:!0}),j.addEventListener("touchend",y,{signal:$,passive:!0,capture:!0}),j.addEventListener("touchcancel",y,{signal:$,passive:!0,capture:!0}),G.addEventListener("touchend",y,{signal:$,passive:!0,capture:!0}),G.addEventListener("touchcancel",y,{signal:$,passive:!0,capture:!0}),j.addEventListener("pointerup",(A)=>{I(A)},{signal:$,passive:!1,capture:!0}),j.addEventListener("pointercancel",(A)=>{I(A,{resetAll:!0})},{signal:$,passive:!1,capture:!0}),G.addEventListener("mouseup",()=>{if(!Z.size&&!this.pointerButtonMask&&!q.size)return;H()},{signal:$}),G.addEventListener("blur",()=>{if(!Z.size&&!this.pointerButtonMask&&!q.size)return;H()},{signal:$}),j.addEventListener("visibilitychange",()=>{if(j.visibilityState==="hidden")H()},{signal:$}),this.canvas.addEventListener("wheel",(A)=>{let J=this.getFramebufferPointFromEvent(A);if(!J)return;A.preventDefault();for(let M of PG(A.deltaY,J.x,J.y,this.pointerButtonMask))this.socketBoundary?.send?.(M)},{signal:$,passive:!1})}sendKeyEvent(_,$){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(RG(_,$))}releasePressedKeys(){for(let _ of this.pressedKeysyms.values())this.sendKeyEvent(!1,_);this.pressedKeysyms.clear()}attachCanvasKeyboardHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.addEventListener("keydown",(_)=>{let $=A3(_);if($==null)return;let j=_.code||_.key,G=this.pressedKeysyms.get(j);if(SG(G,$,_.repeat)){_.preventDefault();return}_.preventDefault(),this.pressedKeysyms.set(j,$),this.sendKeyEvent(!0,$)}),this.canvas.addEventListener("keyup",(_)=>{let $=_.code||_.key,j=this.pressedKeysyms.get($)??A3(_);if(j==null)return;_.preventDefault(),this.pressedKeysyms.delete($),this.sendKeyEvent(!1,j)}),this.canvas.addEventListener("blur",()=>{this.releasePressedKeys()})}drawRgbaRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=new ImageData(_.rgba,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}copyCanvasRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=this.canvasCtx.getImageData(_.srcX,_.srcY,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}scheduleRawFallbackTimeout(){if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.rawFallbackAttempted||this.protocolRecovering)return;this.frameTimeoutId=setTimeout(()=>{if(this.hasRenderedFrame||this.rawFallbackAttempted||this.protocolRecovering)return;if(this.protocol&&this.socketBoundary)this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.setStatus("No framebuffer update yet; retrying with RAW encoding."),this.updateDisplayInfo("No framebuffer update yet. Retrying with RAW encoding."),this.updateDisplayMeta("reconnect-encoding-fallback"),this.connectWithEncodings("0")},2200)}applyRemoteDisplayEvent(_){if(!_)return;switch(_.type){case"protocol-version":this.setStatus(`Negotiated ${_.protocol.toUpperCase()} ${_.server} → ${_.client}.`),this.updateDisplayInfo(`Negotiated ${_.server} → ${_.client}.`),this.updateDisplayMeta();return;case"security-types":this.setStatus(`Server offered security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayInfo(`Security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayMeta();return;case"security-selected":this.setStatus(`Using ${_.protocol.toUpperCase()} security type ${_.label}.`),this.updateDisplayInfo(`Security: ${_.label}.`),this.updateDisplayMeta();return;case"security-result":this.setStatus("Security negotiation complete. Waiting for server init…"),this.updateDisplayInfo("Security negotiation complete. Waiting for server init…"),this.updateDisplayMeta();return;case"display-init":this.ensureCanvasSize(_.width,_.height),this.setSessionChromeVisible(!1),this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for first framebuffer update (${_.width}×${_.height}).`),this.updateDisplayInfo(`Connected to ${_.name||this.targetLabel||this.targetId||"remote display"}. Waiting for first framebuffer update…`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"framebuffer-update":if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;let $=!1,j=(_.rects||[]).some((G)=>G.kind==="pipeline");if(_.framebuffer&&_.framebuffer.length>0&&_.width>0&&_.height>0&&j){this.ensureCanvasSize(_.width,_.height,{reveal:!0});for(let Z of _.rects||[])if(Z.kind==="resize")this.ensureCanvasSize(Z.width,Z.height);let G=this.canvas?.getContext("2d",{alpha:!1});if(G){let Z=new ImageData(new Uint8ClampedArray(_.framebuffer),_.width,_.height);G.putImageData(Z,0,0),$=!0}}else for(let G of _.rects||[]){if(G.kind==="resize"){this.ensureCanvasSize(G.width,G.height);continue}if(G.kind==="copy"){this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.copyCanvasRect(G),$=!0;continue}if(G.kind==="rgba")this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.drawRgbaRect(G),$=!0}if($||this.hasRenderedFrame)this.protocolRecovering=!1,this.setStatus(`Rendering live framebuffer — ${_.width}×${_.height}.`),this.updateDisplayInfo(`Framebuffer update applied (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta();else this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for painted framebuffer data.`),this.updateDisplayInfo(`Framebuffer update received, but no paintable rects yet (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"clipboard":this.setStatus("Remote clipboard updated."),this.updateDisplayInfo(`Clipboard text received (${_.text.length} chars).`),this.updateDisplayMeta();return;case"bell":this.setStatus("Remote display bell received."),this.updateDisplayInfo("Remote display bell received."),this.updateDisplayMeta();return}}async handleSocketMessage(_){if(_?.kind==="control"){let j=_.payload;if(j?.type==="vnc.error"){this.setStatus(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayInfo(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayMeta("proxy-error");return}if(j?.type==="vnc.connected"){let G=j?.target?.label||this.targetLabel||this.targetId;this.setStatus(`Connected to ${G}. Waiting for VNC/RFB data…`),this.updateDisplayInfo(`Connected to ${G}. Waiting for VNC handshake…`),this.updateDisplayMeta();return}if(j?.type==="pong")return;return}let $=this.protocol||(this.protocol=new Z2);try{let j=_.data instanceof Blob?await _.data.arrayBuffer():_.data,G=$.receive(j);for(let Z of G.outgoing||[])this.socketBoundary?.send?.(Z);for(let Z of G.events||[])this.applyRemoteDisplayEvent(Z)}catch(j){let G=j?.message||"Unknown error";if(this.setSessionChromeVisible(!0),this.setStatus(`Display protocol error: ${G}`),this.updateDisplayInfo(`Display protocol error: ${G}`),this.updateDisplayMeta("protocol-error"),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(!this.rawFallbackAttempted&&!this.protocolRecovering&&/unexpected eof|zlib|decompress|protocol|buffer|undefined|not an object|reading '0'/i.test(G))this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.connectWithEncodings("0")}}async connectSocket(_=null){if(!this.targetId||this.disposed)return;if(this.clearReconnectTimer(),this.protocolRecovering&&_==null)this.protocolRecovering=!1;try{this.socketBoundary?.dispose?.()}catch{}if(_==null)this.rawFallbackAttempted=!1,this.protocolRecovering=!1;let $=this.pendingHandoffToken||null,j=_==null?null:String(_).trim(),G=await xG(),Z={};if(G)Z.pipeline=G,Z.decodeRawRect=(q,L,K,Q)=>G.decodeRawRectToRgba(q,L,K,Q);let X=L4(this.authPassword);if(X!==null)Z.password=X;if(j)Z.encodings=j;let Y=Boolean(this.canvas&&this.hasRenderedFrame);if(this.protocol=new Z2(Z),this.hasRenderedFrame=Y,this.frameTimeoutId=null,this.canvas)this.canvas.style.display=Y?"block":"none";if(this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=Y?"none":"";this.socketBoundary=new H3({url:WU(this.targetId,$),binaryType:"arraybuffer",onOpen:()=>{if($&&this.pendingHandoffToken===$)this.pendingHandoffToken=null;this.reconnectAttempts=0,this.setStatus(`Connected to proxy for ${this.targetId}. Waiting for VNC/RFB data…`),this.updateDisplayInfo("WebSocket proxy connected. Waiting for handshake…"),this.updateDisplayMeta(),this.socketBoundary?.sendControl?.({type:"ping"})},onMetrics:(q)=>{this.applyMetrics(q)},onMessage:(q)=>{this.handleSocketMessage(q)},onClose:()=>{if(this.setSessionChromeVisible(!0),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.disposed)return;if(LZ({handoffToken:$,bytesIn:this.bytesIn,hasRenderedFrame:this.hasRenderedFrame,reconnectAttempts:this.reconnectAttempts})){this.pendingHandoffToken=null,this.setStatus("Transferred VNC session was not ready yet. Retrying…"),this.updateDisplayInfo("Transferred VNC session was not ready yet. Retrying without handoff…"),this.updateDisplayMeta("handoff-retrying"),this.scheduleReconnect(150);return}if(this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("Remote display connection lost. Reconnecting…"),this.updateDisplayInfo("Remote display transport closed. Attempting to reconnect…"),this.updateDisplayMeta("reconnecting"),this.scheduleReconnect();return}this.setStatus(this.bytesIn>0?`Proxy closed after receiving ${this.bytesIn} byte(s).`:"Proxy closed."),this.updateDisplayInfo(this.bytesIn>0?"Remote display transport closed after receiving data.":"Remote display transport closed."),this.updateDisplayMeta("closed")},onError:()=>{if(this.setSessionChromeVisible(!0),LZ({handoffToken:$,bytesIn:this.bytesIn,hasRenderedFrame:this.hasRenderedFrame,reconnectAttempts:this.reconnectAttempts})){this.pendingHandoffToken=null,this.setStatus("Transferred VNC session was not ready yet. Retrying…"),this.updateDisplayInfo("Transferred VNC session was not ready yet. Retrying without handoff…"),this.updateDisplayMeta("handoff-retrying"),this.scheduleReconnect(150);return}if(this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("WebSocket proxy connection failed. Reconnecting…"),this.updateDisplayInfo("WebSocket proxy connection failed. Attempting to reconnect…"),this.updateDisplayMeta("socket-reconnecting"),this.scheduleReconnect();return}this.setStatus("WebSocket proxy connection failed."),this.updateDisplayInfo("WebSocket proxy connection failed."),this.updateDisplayMeta("socket-error")}}),this.socketBoundary.connect()}connectWithEncodings(_){return this.connectSocket(_)}async load(){this.setStatus("");try{let _=await EU(this.targetId);if(!_?.enabled){this.renderTargets(_),this.setStatus("");return}if(!this.targetId){this.renderTargets(_),this.setStatus("");return}this.renderTargetSession(_),await this.connectSocket()}catch(_){this.resetLiveSession(),this.bodyEl.innerHTML=`
                <div style="max-width:620px;text-align:center;padding:28px;border:1px dashed var(--border-color);border-radius:14px;background:var(--bg-secondary);">
                    <div style="font-size:32px;margin-bottom:10px;">⚠️</div>
                    <div style="font-weight:600;margin-bottom:6px;">Failed to load VNC session</div>
                    <div style="color:var(--text-secondary);font-size:13px;line-height:1.5;">${l1(_?.message||"Unknown error")}</div>
                </div>
            `,this.setStatus(`Session load failed: ${_?.message||"Unknown error"}`)}}beforeDetachFromHost(){this.releasePressedKeys(),this.setStatus("Moving VNC session…"),this.updateDisplayInfo("Moving VNC session to a new window…"),this.updateDisplayMeta("moving")}afterAttachToHost(){this.attachDisplayResizeObserver(),this.updateCanvasScale(),requestAnimationFrame(()=>this.focus())}moveHost(_){if(this.disposed||!this.root)return!1;if(this.releasePressedKeys(),this.container=_,!AU(this.root,_))return!1;return this.afterAttachToHost(),!0}async preparePopoutTransfer(){return UU(this.targetId,this.authPassword)}getContent(){return}isDirty(){return!1}focus(){this.canvas?.focus?.(),this.root?.focus?.()}resize(){this.updateCanvasScale()}dispose(){if(this.disposed)return;this.disposed=!0,this.resetLiveSession(),this.root?.remove?.()}}var S3={id:"vnc-viewer",label:"VNC",icon:"display",capabilities:["preview"],placement:"tabs",canHandle(_){let $=String(_?.path||"");return $===h1||$.startsWith(`${h1}/`)?9000:!1},mount(_,$){return new FZ(_,$)}};import{classHighlighter as kU,highlightTree as MU,StreamLanguage as s4,cssLanguage as wU,cppLanguage as TU,goLanguage as yU,htmlLanguage as xU,javascriptLanguage as IU,jsxLanguage as CU,tsxLanguage as fU,typescriptLanguage as PU,jsonLanguage as RU,markdownLanguage as SU,pythonLanguage as gU,rustLanguage as uU,StandardSQL as bU,xmlLanguage as vU,yamlLanguage as mU,dockerFile as cU,powerShell as lU,ruby as hU,shell as pU,swift as nU,toml as rU}from"#editor-vendor/codemirror";function K4(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var dU={js:"JavaScript",javascript:"JavaScript",ts:"TypeScript",typescript:"TypeScript",jsx:"JSX",tsx:"TSX",py:"Python",python:"Python",sh:"Shell",shell:"Shell",bash:"Bash",zsh:"Zsh",ps1:"PowerShell",powershell:"PowerShell",md:"Markdown",markdown:"Markdown",yml:"YAML",yaml:"YAML",json:"JSON",html:"HTML",css:"CSS",sql:"SQL",go:"Go",c:"C",cc:"C++",cpp:"C++","c++":"C++",cxx:"C++",h:"C/C++",hh:"C++",hpp:"C++",hxx:"C++",rust:"Rust",rs:"Rust",ruby:"Ruby",swift:"Swift",toml:"TOML",dockerfile:"Dockerfile"},iU=s4.define(pU).parser,oU=s4.define(lU).parser,sU=s4.define(cU).parser,aU=s4.define(hU).parser,tU=s4.define(nU).parser,eU=s4.define(rU).parser;function BZ(_){let $=String(_||"").trim().toLowerCase();if(!$)return"text";return dU[$]||String(_||"").trim()}function _H(_){switch(String(_||"").trim().toLowerCase()){case"js":case"javascript":return IU.parser;case"ts":case"typescript":return PU.parser;case"jsx":return CU.parser;case"tsx":return fU.parser;case"py":case"python":return gU.parser;case"json":return RU.parser;case"css":return wU.parser;case"html":return xU.parser;case"xml":return vU.parser;case"yaml":case"yml":return mU.parser;case"md":case"markdown":return SU.parser;case"sql":return bU.language.parser;case"go":return yU.parser;case"c":case"cc":case"cpp":case"cxx":case"c++":case"h":case"hh":case"hpp":case"hxx":return TU.parser;case"sh":case"bash":case"shell":case"zsh":return iU;case"ps1":case"powershell":return oU;case"dockerfile":return sU;case"rb":case"ruby":return aU;case"rs":case"rust":return uU.parser;case"swift":return tU;case"toml":return eU;default:return null}}function X2(_,$){let j=_H($);if(!j)return K4(_);let G=[];try{let Y=j.parse(_);MU(Y,kU,(q,L,K)=>{if(!K||q>=L)return;G.push({from:q,to:L,cls:K})})}catch{return K4(_)}if(!G.length)return K4(_);G.sort((Y,q)=>Y.from-q.from||Y.to-q.to);let Z=0,X="";for(let Y of G){if(Y.from>Z)X+=K4(_.slice(Z,Y.from));X+=`<span class="${K4(Y.cls)}">${K4(_.slice(Y.from,Y.to))}</span>`,Z=Math.max(Z,Y.to)}if(Z<_.length)X+=K4(_.slice(Z));return X}c5();var Q2=/#(\w+)/g,BH=new Set(["strong","em","b","i","u","s","del","ins","sub","sup","mark","small","br","p","ul","ol","li","blockquote","ruby","rt","rp","span","input"]),NH=new Set(["a","abbr","blockquote","br","code","del","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","input","ins","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","small","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),UH=new Set(["class","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),AZ={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"]),input:new Set(["type","checked","disabled"])},HH=new Set(["http:","https:","mailto:",""]);function EH(_,$){let j=String(_||"").toLowerCase(),G=String($||"").toLowerCase();if(!G||G.startsWith("on"))return!1;if(G.startsWith("data-")||G.startsWith("aria-"))return!0;return(AZ[j]||new Set).has(G)||UH.has(G)}function h3(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function B4(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let G=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!HH.has(G.protocol))return null;return G.href}catch{return null}}function kZ(_,$={}){if(!_)return"";if($?.sanitize===!1)return _;let j=new DOMParser().parseFromString(_,"text/html"),G=[],Z=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),X;while(X=Z.nextNode())G.push(X);for(let Y of G){let q=Y.tagName.toLowerCase();if(!NH.has(q)){let K=Y.parentNode;if(!K)continue;while(Y.firstChild)K.insertBefore(Y.firstChild,Y);K.removeChild(Y);continue}let L=AZ[q]||new Set;for(let K of Array.from(Y.attributes)){let Q=K.name.toLowerCase(),V=K.value;if(Q.startsWith("on")){Y.removeAttribute(K.name);continue}if(EH(q,Q)){if(Q==="href"){let F=B4(V);if(!F)Y.removeAttribute(K.name);else if(Y.setAttribute(K.name,F),q==="a"){if(!Y.getAttribute("rel"))Y.setAttribute("rel","noopener noreferrer");if(/^https?:\/\//i.test(F))Y.setAttribute("target","_blank")}}else if(Q==="src"){let F=q==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(V):V,B=B4(F,{allowDataImage:q==="img"});if(!B)Y.removeAttribute(K.name);else Y.setAttribute(K.name,B)}continue}Y.removeAttribute(K.name)}}return j.body.innerHTML}function MZ(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function l5(_,$=2){if(!_)return _;let j=_;for(let G=0;G<$;G+=1){let Z=MZ(j);if(Z===j)break;j=Z}return j}function DH(_){if(!_)return{text:"",frontmatter:null};let $=_.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!$.startsWith(`---
`))return{text:$,frontmatter:null};let j=$.split(`
`),G=-1;for(let Y=1;Y<j.length;Y+=1)if(/^(---|\.\.\.)\s*$/.test(j[Y])){G=Y;break}if(G<=0)return{text:$,frontmatter:null};let Z=j.slice(1,G).join(`
`);return{text:j.slice(G+1).join(`
`).replace(/^\n+/,""),frontmatter:Z}}function WH(_){let{text:$,frontmatter:j}=DH(_);if(j===null)return $;return["<!--frontmatter-block-start-->","```yaml",j,"```","<!--frontmatter-block-end-->",$].filter(Boolean).join(`

`)}function OH(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=[],Z=[],X=!1,Y=[];for(let q of j){if(!X&&q.trim().match(/^```mermaid\s*$/i)){X=!0,Y=[];continue}if(X&&q.trim().match(/^```\s*$/)){let L=G.length;G.push(Y.join(`
`)),Z.push(`@@MERMAID_BLOCK_${L}@@`),X=!1,Y=[];continue}if(X)Y.push(q);else Z.push(q)}if(X)Z.push("```mermaid"),Z.push(...Y);return{text:Z.join(`
`),blocks:G}}function zH(_){if(!_)return _;return l5(_,5)}function JH(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let G of $)j+=String.fromCharCode(G);return btoa(j)}function AH(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let G=0;G<$.length;G+=1)j[G]=$.charCodeAt(G);return new TextDecoder().decode(j)}function kH(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,G)=>{let Z=Number(G),X=$[Z]??"",Y=zH(X);return`<div class="mermaid-container" data-mermaid="${JH(Y)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function wZ(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}function MH(_){if(!_)return _;return _.replace(/<pre><code(?:\s+class="language-([A-Za-z0-9_+-]+)")?>([\s\S]*?)<\/code><\/pre>/g,(j,G,Z)=>{let X=String(G||"").trim().toLowerCase(),Y=l5(Z,2),q=X||"plaintext",L=X2(Y,X);return`<pre><code class="hljs language-${h3(q)}">${L}</code></pre>`}).replace(/<!--frontmatter-block-start-->\s*<pre>/g,'<pre class="frontmatter-block">').replace(/<\/pre>\s*<!--frontmatter-block-end-->/g,"</pre>")}var wH={span:new Set(["title","class","lang","dir"]),input:new Set(["type","checked","disabled"])};function TH(_,$){let j=wH[_];if(!j||!$)return"";let G=[],Z=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,X;while(X=Z.exec($)){let Y=(X[1]||"").toLowerCase();if(!Y||Y.startsWith("on")||!j.has(Y))continue;let q=X[2]??X[3]??X[4]??"";G.push(` ${Y}="${h3(q)}"`)}return G.join("")}function TZ(_){if(!_)return _;return _.replace(/&lt;((?:[^"'<>]|"[^"]*"|'[^']*')*?)(?:&gt;|>)/g,($,j)=>{let G=j.trim(),Z=G.startsWith("/"),X=Z?G.slice(1).trim():G,q=X.endsWith("/")?X.slice(0,-1).trim():X,[L=""]=q.split(/\s+/,1),K=L.toLowerCase();if(!K||!BH.has(K))return $;if(K==="br")return Z?"":"<br>";if(Z)return`</${K}>`;let Q=q.slice(L.length).trim(),V=TH(K,Q);return`<${K}${V}>`})}function yZ(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,G)=>`<pre><code>${$(G)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,G)=>`<code>${$(G)}</code>`)}function xZ(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),G=(X)=>X.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),Z;while(Z=j.nextNode()){if(!Z.nodeValue)continue;let X=G(Z.nodeValue);if(X!==Z.nodeValue)Z.nodeValue=X}return $.body.innerHTML}function yH(_){if(!window.katex)return _;let $=(Y)=>MZ(Y).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(Y)=>{let q=[],L=Y.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(K)=>{let Q=q.length;return q.push(K),`@@CODE_BLOCK_${Q}@@`});return L=L.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(K)=>{let Q=q.length;return q.push(K),`@@CODE_INLINE_${Q}@@`}),{html:L,blocks:q}},G=(Y,q)=>{if(!q.length)return Y;return Y.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(L,K)=>{let Q=Number(K);return q[Q]??""})},Z=j(_),X=Z.html;return X=X.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(Y,q,L)=>{try{let K=katex.renderToString($(L.trim()),{displayMode:!0,throwOnError:!1});return`${q}${K}`}catch(K){return`<span class="math-error" title="${h3(K.message)}">${Y}</span>`}}),G(X,Z.blocks)}function xH(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),G=[],Z;while(Z=j.nextNode())G.push(Z);for(let X of G){let Y=X.nodeValue;if(!Y)continue;if(Q2.lastIndex=0,!Q2.test(Y))continue;Q2.lastIndex=0;let q=X.parentElement;if(q&&(q.closest("a")||q.closest("code")||q.closest("pre")))continue;let L=Y.split(Q2);if(L.length<=1)continue;let K=$.createDocumentFragment();L.forEach((Q,V)=>{if(V%2===1){let F=$.createElement("a");F.setAttribute("href","#"),F.className="hashtag",F.setAttribute("data-hashtag",Q),F.textContent=`#${Q}`,K.appendChild(F)}else K.appendChild($.createTextNode(Q))}),X.parentNode?.replaceChild(K,X)}return $.body.innerHTML}function IH(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=[],Z=!1;for(let X of j){if(!Z&&X.trim().match(/^```(?:math|katex|latex)\s*$/i)){Z=!0,G.push("$$");continue}if(Z&&X.trim().match(/^```\s*$/)){Z=!1,G.push("$$");continue}G.push(X)}return G.join(`
`)}function CH(_){let $=WH(_||""),j=IH($),{text:G,blocks:Z}=OH(j),X=l5(G,2),q=wZ(X).replace(/</g,"&lt;");return{safeHtml:TZ(q),mermaidBlocks:Z}}function e_(_,$,j={}){if(!_)return"";let{safeHtml:G,mermaidBlocks:Z}=CH(_),X=window.marked?marked.parse(G,{headerIds:!1,mangle:!1}):G.replace(/\n/g,"<br>");return X=yZ(X),X=xZ(X),X=MH(X),X=yH(X),X=xH(X),X=kH(X,Z),X=kZ(X,j),X}function h5(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=l5($,2),Z=wZ(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),X=TZ(Z),Y=window.marked?marked.parse(X):X.replace(/\n/g,"<br>");return Y=yZ(Y),Y=xZ(Y),Y=kZ(Y),Y}function fH(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,G,Z,X)=>{let Y=Z.trim().split(/\s+/).map((L)=>{let[K,Q]=L.split(",").map(Number);return{x:K,y:Q}});if(Y.length<3)return`<polyline${G}points="${Z}"${X}/>`;let q=[`M ${Y[0].x},${Y[0].y}`];for(let L=1;L<Y.length-1;L++){let K=Y[L-1],Q=Y[L],V=Y[L+1],F=Q.x-K.x,B=Q.y-K.y,U=V.x-Q.x,D=V.y-Q.y,E=Math.sqrt(F*F+B*B),H=Math.sqrt(U*U+D*D),k=Math.min($,E/2,H/2);if(k<0.5){q.push(`L ${Q.x},${Q.y}`);continue}let z=Q.x-F/E*k,O=Q.y-B/E*k,y=Q.x+U/H*k,I=Q.y+D/H*k,J=F*D-B*U>0?1:0;q.push(`L ${z},${O}`),q.push(`A ${k},${k} 0 0 ${J} ${y},${I}`)}return q.push(`L ${Y[Y.length-1].x},${Y[Y.length-1].y}`),`<path${G}d="${q.join(" ")}"${X}/>`})}async function B$(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,Z=JZ()==="dark"?j["tokyo-night"]:j["github-light"],X=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let Y of X)try{let q=Y.dataset.mermaid,L=AH(q||""),K=l5(L,2),Q=await $(K,{...Z,transparent:!0});Q=fH(Q),Y.innerHTML=Q,Y.removeAttribute("data-mermaid")}catch(q){console.error("Mermaid render error:",q);let L=document.createElement("pre");L.className="mermaid-error",L.textContent=`Diagram error: ${q.message}`,Y.innerHTML="",Y.appendChild(L),Y.removeAttribute("data-mermaid")}}g_();function vZ(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let G=new Date-$,Z=G/1000,X=86400000;if(G<X){if(Z<60)return"just now";if(Z<3600)return`${Math.floor(Z/60)}m`;return`${Math.floor(Z/3600)}h`}if(G<5*X){let L=$.toLocaleDateString(void 0,{weekday:"short"}),K=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${L} ${K}`}let Y=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),q=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${Y} ${q}`}function _6(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function o_(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function W4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}function u$(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function WE(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let G=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),Z=G?.[1]||j,X=G?.[2]||"",Y=G?.[3]||"",q=String($||"").split("/").slice(0,-1).join("/"),K=Z.startsWith("/")?Z:`${q?`${q}/`:""}${Z}`,Q=[];for(let F of K.split("/")){if(!F||F===".")continue;if(F===".."){if(Q.length>0)Q.pop();continue}Q.push(F)}let V=Q.join("/");return`${t5(V)}${X}${Y}`}function $6(_){return _?.preview||null}function OE(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),G=j>=0?$.slice(j+1):$,Z=G.lastIndexOf(".");if(Z<=0||Z===G.length-1)return"none";return G.slice(Z+1)}function zE(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function JE(_,$){let j=$?.path||_?.path||"",G=[];if($?.content_type)G.push(`<span><strong>type:</strong> ${u$($.content_type)}</span>`);if(typeof $?.size==="number")G.push(`<span><strong>size:</strong> ${u$(o_($.size))}</span>`);if($?.mtime)G.push(`<span><strong>modified:</strong> ${u$(W4($.mtime))}</span>`);if(G.push(`<span><strong>kind:</strong> ${u$(zE($))}</span>`),G.push(`<span><strong>extension:</strong> ${u$(OE(j))}</span>`),j)G.push(`<span><strong>path:</strong> ${u$(j)}</span>`);if($?.truncated)G.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${G.join("")}</div>`}function AE(_){let $=$6(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=JE(_,$);if($.kind==="image"){let G=$.url||($.path?t5($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${u$(G)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let G=e_($.text||"",null,{rewriteImageSrc:(Z)=>WE(Z,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${G}</div>`}return`${j}<pre class="workspace-preview-text"><code>${u$($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class H7{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=AE(this.context)}getContent(){let _=$6(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=$6(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var E7={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=$6(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new H7(_,$)}},D7={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return $6(_)||_?.path?1:!1},mount(_,$){return new H7(_,$)}};var kE=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),ME={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},wE={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function cZ(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function mZ(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class lZ{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"document",Z=cZ(j),X=wE[Z]||"\uD83D\uDCC4",Y=ME[Z]||"Office Document",q=document.createElement("div");q.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",q.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${X}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${mZ(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${mZ(Y)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(q);let L=q.querySelector("#ov-open-tab");if(L)L.addEventListener("click",()=>{let K=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class hZ{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"document",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,X=`/office-viewer/?url=${encodeURIComponent(Z)}&name=${encodeURIComponent(G)}`;this.iframe=document.createElement("iframe"),this.iframe.src=X,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var W7={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=cZ(_?.path);if(!$||!kE.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new lZ(_,$);return new hZ(_,$)}};var TE=/\.(csv|tsv)$/i;function pZ(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class nZ{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"table.csv",Z=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",X=document.createElement("div");X.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",X.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${pZ(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${pZ(Z)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(X);let Y=X.querySelector("#csv-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class rZ{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var O7={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!TE.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new nZ(_,$);return new rZ(_,$)}};var yE=/\.pdf$/i;function xE(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class dZ{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"document.pdf",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${xE(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let X=Z.querySelector("#pdf-open-tab");if(X)X.addEventListener("click",()=>{let Y=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Y)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class iZ{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var z7={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!yE.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new dZ(_,$);return new iZ(_,$)}};var IE=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function J7(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class oZ{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"image",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,X=document.createElement("div");X.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",X.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${J7(Z)}" alt="${J7(G)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${J7(G)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(X);let Y=X.querySelector("#img-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class sZ{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var A7={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!IE.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new oZ(_,$);return new sZ(_,$)}};var CE=/\.(html|htm)$/i;function aZ(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class tZ{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"index.html",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:24px;">
                <div style="text-align:center;">
                    <div style="font-size:48px;margin-bottom:12px;">\uD83C\uDF10</div>
                    <div style="font-size:14px;color:var(--text-primary,#e2e8f0);font-weight:500;margin-bottom:4px;">${aZ(G)}</div>
                    <div style="font-size:12px;color:var(--text-secondary,#94a3b8);">HTML document</div>
                </div>
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${aZ(j)}</div>
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
        `,_.appendChild(Z);let X=Z.querySelector("#html-open-tab");if(X)X.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("html-viewer:open-tab",{bubbles:!0,detail:{path:j}}))});let Y=Z.querySelector("#html-edit-btn");if(Y)Y.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("html-viewer:edit-source",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class eZ{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/html-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#fff;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var k7={id:"html-viewer",label:"HTML Preview",icon:"code",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!CE.test($))return!1;return 30},mount(_,$){if($?.mode==="view")return new tZ(_,$);return new eZ(_,$)}};var fE=/\.(mp4|m4v|mov|webm|ogv)$/i;function PE(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class _X{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"video.mp4",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${PE(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let X=Z.querySelector("#video-open-tab");if(X)X.addEventListener("click",()=>{let Y=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Y)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class $X{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var M7={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!fE.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new _X(_,$);return new $X(_,$)}};g_();function RE(_){let $=_.includes(".")?_.slice(_.lastIndexOf(".")):"",j=_.includes(".")?_.slice(0,_.lastIndexOf(".")):_,G=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19);return`${j}.${G}${$}`}function jX(_){let{path:$,getCurrentMtime:j,anchorParent:G,anchorBefore:Z,onReload:X,onSaveCopy:Y,onOverwrite:q,pollMs:L=3000,ownerDocument:K=document}=_,Q=null,V=null,F=!1,B=!1,U=!1;async function D(){if(B||U||F)return;let O=j();if(!O)return;try{let y=await Q7($);if(B||U||!y?.mtime)return;if(y.mtime!==O)F=!0,H(),k()}catch(y){if(typeof console<"u")console.debug("[file-conflict-monitor] mtime poll skipped:",y)}}function E(){if(H(),B)return;Q=setInterval(D,L)}function H(){if(Q)clearInterval(Q),Q=null}function k(){if(V||B)return;let O=K.createElement("div");O.className="editor-conflict-bar",O.innerHTML=`
      <span class="editor-conflict-text">File changed on disk</span>
      <div class="editor-conflict-actions">
        <button class="editor-conflict-btn" data-action="reload" title="Discard and reload from disk">Reload</button>
        <button class="editor-conflict-btn" data-action="save-copy" title="Save current content with a new name">Save copy</button>
        <button class="editor-conflict-btn" data-action="overwrite" title="Overwrite the disk version">Overwrite</button>
        <button class="editor-conflict-btn editor-conflict-dismiss" data-action="dismiss" title="Dismiss">×</button>
      </div>
    `,O.addEventListener("click",(y)=>{let I=y.target.closest("[data-action]");if(!I)return;let A=I.getAttribute("data-action");if(A==="reload")z(),X();else if(A==="save-copy"){let J=RE($);Y(J)}else if(A==="overwrite")z(),q();else if(A==="dismiss")z()}),V=O,G.insertBefore(O,Z)}function z(){if(V)V.remove(),V=null;F=!1,E()}return{start(){E()},stop(){H()},onSaved(O){F=!1,U=!1,E()},dispose(){if(B=!0,H(),V)V.remove(),V=null}}}var SE=/\.mindmap\.ya?ml$/i,J2=String(Date.now());function gE(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function GX(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function w7(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let G=document.querySelector(`script[src="${$}"]`);if(G)G.remove();return new Promise((Z,X)=>{let Y=document.createElement("script");Y.src=_,Y.dataset.src=$,Y.onload=()=>Z(),Y.onerror=()=>X(Error(`Failed to load ${_}`)),document.head.appendChild(Y)})}function uE(_){let $=_.split("?")[0],j=document.querySelector(`link[data-href="${$}"]`);if(j&&j.href.endsWith(_))return;document.querySelectorAll(`link[data-href="${$}"], link[href="${$}"]`).forEach((Z)=>Z.remove());let G=document.createElement("link");G.rel="stylesheet",G.href=_,G.dataset.href=$,document.head.appendChild(G)}function bE(_){let $=document.createElementNS("http://www.w3.org/2000/svg","svg");$.id="mindmap-svg",$.setAttribute("width","100%"),$.setAttribute("height","100%"),$.style.cssText="display:block;position:absolute;inset:0;",_.appendChild($);let j=document.createElement("div");j.id="toolbar",j.className="mindmap-toolbar",j.innerHTML=`
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
    `,_.appendChild(G)}class ZX{container;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"mindmap",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83E\uDDE0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${gE(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Mindmap Editor</div>
                <button id="mm-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">Edit in Tab</button>
            </div>`,_.appendChild(Z),Z.querySelector("#mm-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("mindmap:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class XX{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;mindmapEl=null;pendingContent=null;lastContent="";currentMtime=null;conflictMonitor=null;themeListener=()=>{window.__mindmapEditor?.setTheme?.(GX())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{let j=await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json();if(j?.mtime)this.currentMtime=j.mtime;return j?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;if(this.lastContent=$,uE("/static/css/mindmap.css?v="+J2),await Promise.all([w7("/static/js/vendor/d3-mindmap.min.js?v="+J2),w7("/static/js/vendor/js-yaml.min.js?v="+J2)]),this.disposed)return;this.mindmapEl=document.createElement("div"),this.mindmapEl.id="mindmap-container",this.mindmapEl.tabIndex=-1,this.mindmapEl.style.cssText="width:100%;height:100%;overflow:hidden;position:relative;outline:none;",this.container.appendChild(this.mindmapEl),bE(this.mindmapEl);let j=GX(),G=this.filePath.replace(/\/[^/]+$/,"")||"/";try{if(await w7("/static/js/vendor/mindmap-editor.js?v="+J2),this.disposed)return;let Z=window.__mindmapEditor;if(!Z)throw Error("__mindmapEditor not found");if(Z.mount({content:$,isDark:j,onEdit:(X)=>{this.lastContent=X,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(X)},resolveImagePath:(X)=>{if(X.startsWith("data:")||X.startsWith("http"))return X;return`/workspace/raw?path=${encodeURIComponent(G+"/"+X)}`}}),this.pendingContent!==null)Z.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener),this.initConflictMonitor()}catch(Z){if(console.error("[mindmap] Failed to load mindmap renderer:",Z),this.mindmapEl)this.mindmapEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load mindmap editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);let j=await $.json().catch(()=>({}));this.currentMtime=j?.mtime||this.currentMtime,this.conflictMonitor?.onSaved(this.currentMtime),this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[mindmap] Save failed:",$)}}initConflictMonitor(){if(this.conflictMonitor?.dispose(),!this.filePath)return;this.conflictMonitor=jX({path:this.filePath,getCurrentMtime:()=>this.currentMtime,anchorParent:this.container,anchorBefore:this.mindmapEl||this.container.firstElementChild,onReload:async()=>{try{let $=await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json();if(this.disposed)return;this.currentMtime=$?.mtime||null;let j=$?.text||"";this.lastContent=j;let G=window.__mindmapEditor;if(G?.update)G.update(j);this.dirty=!1,this.dirtyCallback?.(!1),this.conflictMonitor?.onSaved(this.currentMtime)}catch(_){console.error("[mindmap] Reload failed:",_)}},onSaveCopy:async(_)=>{try{await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,content:this.lastContent})})}catch($){console.error("[mindmap] Save copy failed:",$)}},onOverwrite:()=>this.saveToWorkspace(this.lastContent)}),this.conflictMonitor.start()}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__mindmapEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.mindmapEl?.focus()}resize(){window.dispatchEvent(new Event("resize"))}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,this.conflictMonitor?.dispose(),window.removeEventListener("piclaw-theme-change",this.themeListener),window.__mindmapEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var T7={id:"mindmap-editor",label:"Mindmap Editor",icon:"mindmap",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!SE.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new ZX(_,$);return new XX(_,$)}};class YX{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch(G){console.warn("[tab-store] Change listener failed:",G)}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((G)=>G!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let G=this.tabs.get(_);if(!G)return;if(this.tabs.delete(_),G.id=$,G.path=$,G.label=j||$.split("/").pop()||$,this.tabs.set($,G),this.mruOrder=this.mruOrder.map((Z)=>Z===_?$:Z),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((G)=>G.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((G)=>G.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var a0=new YX;var $5=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};x0();function qX(){let[_,$]=C(null),[j,G]=C({text:"",totalLines:0}),[Z,X]=C(""),[Y,q]=C({text:"",totalLines:0}),[L,K]=C(null),[Q,V]=C(null),[F,B]=C(null),U=u(null),D=u(0),E=u(!1),H=u(""),k=u(""),z=u(!1),O=u(0),y=u(null),I=u(null),A=u(null),J=u(null),M=u(!1),W=u(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:G,agentPlan:Z,setAgentPlan:X,agentThought:Y,setAgentThought:q,pendingRequest:L,setPendingRequest:K,currentTurnId:Q,setCurrentTurnId:V,steerQueuedTurnId:F,setSteerQueuedTurnId:B,lastAgentEventRef:U,lastSilenceNoticeRef:D,isAgentRunningRef:E,draftBufferRef:H,thoughtBufferRef:k,previewResyncPendingRef:z,previewResyncGenerationRef:O,pendingRequestRef:y,stalledPostIdRef:I,currentTurnIdRef:A,steerQueuedTurnIdRef:J,thoughtExpandedRef:M,draftExpandedRef:W}}x0();var vE=0.1,FX=4,BX=4,LX=160,KX=1600,VX=200,QX=1600;function N$(){if(typeof window>"u")return 0;return Number(window.innerWidth)||0}function NX(_=N$()){return _>0?Math.floor(_*vE):0}function j6(_,$=N$(),j=0){let G=NX($)+FX+(j>0?BX+Math.max(0,j):0),Z=$>0?Math.floor($-G):KX;return Math.min(Math.max(Number(_)||0,LX),Math.max(LX,Math.min(KX,Z)))}function G6(_,$=N$(),j=0){let G=NX($)+BX+(j>0?FX+Math.max(0,j):0),Z=$>0?Math.floor($-G):QX;return Math.min(Math.max(Number(_)||0,VX),Math.max(VX,Math.min(QX,Z)))}function UX({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:G}){let Z=u((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let F=Q.clientX,B=$.current||280,U=Q.currentTarget;U.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let D=F,E=(k)=>{D=k.clientX;let z=j6(B+(k.clientX-F),N$(),j?.current||0);V.style.setProperty("--sidebar-width",`${z}px`),$.current=z},H=()=>{let k=j6(B+(D-F),N$(),j?.current||0);$.current=k,U.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",Q_("sidebarWidth",String(Math.round(k))),document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",H)};document.addEventListener("mousemove",E),document.addEventListener("mouseup",H)}).current,X=u((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let F=Q.touches[0];if(!F)return;let B=F.clientX,U=$.current||280,D=Q.currentTarget;D.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let E=(k)=>{let z=k.touches[0];if(!z)return;k.preventDefault();let O=j6(U+(z.clientX-B),N$(),j?.current||0);V.style.setProperty("--sidebar-width",`${O}px`),$.current=O},H=()=>{D.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.userSelect="",Q_("sidebarWidth",String(Math.round($.current||U))),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",H),document.removeEventListener("touchcancel",H)};document.addEventListener("touchmove",E,{passive:!1}),document.addEventListener("touchend",H),document.addEventListener("touchcancel",H)}).current,Y=u((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let F=Q.clientX,B=j.current||$.current||280,U=Q.currentTarget;U.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let D=F,E=(k)=>{D=k.clientX;let z=G6(B+(k.clientX-F),N$(),$?.current||0);V.style.setProperty("--editor-width",`${z}px`),j.current=z},H=()=>{let k=G6(B+(D-F),N$(),$?.current||0);j.current=k,U.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",Q_("editorWidth",String(Math.round(k))),document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",H)};document.addEventListener("mousemove",E),document.addEventListener("mouseup",H)}).current,q=u((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let F=Q.touches[0];if(!F)return;let B=F.clientX,U=j.current||$.current||280,D=Q.currentTarget;D.classList.add("dragging"),document.body.style.userSelect="none";let E=(k)=>{let z=k.touches[0];if(!z)return;k.preventDefault();let O=G6(U+(z.clientX-B),N$(),$?.current||0);V.style.setProperty("--editor-width",`${O}px`),j.current=O},H=()=>{D.classList.remove("dragging"),document.body.style.userSelect="",Q_("editorWidth",String(Math.round(j.current||U))),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",H),document.removeEventListener("touchcancel",H)};document.addEventListener("touchmove",E,{passive:!1}),document.addEventListener("touchend",H),document.addEventListener("touchcancel",H)}).current,L=u((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let F=Q.clientY,B=G?.current||200,U=Q.currentTarget;U.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let D=F,E=(k)=>{D=k.clientY;let z=Math.min(Math.max(B-(k.clientY-F),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${z}px`),G)G.current=z;window.dispatchEvent(new CustomEvent("dock-resize"))},H=()=>{let k=Math.min(Math.max(B-(D-F),100),window.innerHeight*0.5);if(G)G.current=k;U.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",Q_("dockHeight",String(Math.round(k))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",H)};document.addEventListener("mousemove",E),document.addEventListener("mouseup",H)}).current,K=u((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let F=Q.touches[0];if(!F)return;let B=F.clientY,U=G?.current||200,D=Q.currentTarget;D.classList.add("dragging"),document.body.style.userSelect="none";let E=(k)=>{let z=k.touches[0];if(!z)return;k.preventDefault();let O=Math.min(Math.max(U-(z.clientY-B),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${O}px`),G)G.current=O;window.dispatchEvent(new CustomEvent("dock-resize"))},H=()=>{D.classList.remove("dragging"),document.body.style.userSelect="",Q_("dockHeight",String(Math.round(G?.current||U))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",H),document.removeEventListener("touchcancel",H)};document.addEventListener("touchmove",E,{passive:!1}),document.addEventListener("touchend",H),document.addEventListener("touchcancel",H)}).current;return{handleSplitterMouseDown:Z,handleSplitterTouchStart:X,handleEditorSplitterMouseDown:Y,handleEditorSplitterTouchStart:q,handleDockSplitterMouseDown:L,handleDockSplitterTouchStart:K}}x0();function y7(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},G=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,Z=j[_]??window[G],X=Number(Z);return Number.isFinite(X)?X:$}catch{return $}}var HX=y7("warning",30000),EX=y7("finalize",120000),DX=y7("refresh",30000),WX=30000;function OX(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function Z6(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function zX(_=30000){let[,$]=C(0);g(()=>{let j=setInterval(()=>$((G)=>G+1),_);return()=>clearInterval(j)},[_])}function JX(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((G,Z)=>G+Math.max(1,Math.ceil(Z.length/$)),0)}function A2(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function mE(_){if(!_||typeof _!=="object")return null;let $=_.retry_at??_.retryAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function b$(_){if(!_||typeof _!=="object")return null;let $=_.last_event_at??_.lastEventAt??_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function U$(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function k2(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return U$(_)?"Compacting context":"Working..."}function AX(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,G=Math.floor($/60)%60,Z=Math.floor($/3600);if(Z>0)return`${Z}:${String(G).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${G}:${String(j).padStart(2,"0")}`}function X6(_,$=Date.now()){let j=A2(_);if(j===null)return null;return AX(Math.max(0,$-j))}function kX(_,$=Date.now()){let j=mE(_);if(j===null)return null;let G=j-$;if(G<=0)return"retrying now";return`retry in ${AX(G)}`}x0();function SY(_={}){p1(_)}function gY(){let[_,$]=C(!1);if(g(()=>{let Z=(Y)=>{let q=j5(Y?.detail?.section);if(q)try{window.__piclawSettingsRequestedSection=q}catch(L){}$(!0)};window.addEventListener("piclaw:open-settings",Z);let X=M2();if(X.open){if(X.section)try{window.__piclawSettingsRequestedSection=X.section}catch(Y){}$(!0)}return()=>window.removeEventListener("piclaw:open-settings",Z)},[]),!_)return null;let[j,G]=C(null);if(g(()=>{Promise.resolve().then(() => (RY(),PY)).then((Z)=>{G(()=>Z.SettingsDialogContent)})},[]),!j)return N`
            <div class="settings-dialog-backdrop" onClick=${()=>$(!1)}>
                <div class="settings-dialog settings-dialog-loading-shell" data-testid="settings-dialog">
                    <div class="settings-loading-shell-body">
                        <span class="settings-spinner"></span>
                        <span>Loading settings…</span>
                    </div>
                </div>
            </div>
        `;return N`
        <div class="settings-dialog-backdrop" onClick=${(Z)=>{if(Z.target===Z.currentTarget)$(!1)}}>
            <${j} onClose=${()=>$(!1)} />
        </div>
    `}x0();function XW(_,$){return new URL(String(_||""),$).toString()}function uY(){let[_,$]=C(()=>typeof window>"u"?"http://localhost/":window.location.href);g(()=>{if(typeof window>"u")return;let Z=()=>$(window.location.href);return window.addEventListener("popstate",Z),()=>window.removeEventListener("popstate",Z)},[]);let j=f((Z,X={})=>{if(typeof window>"u")return;let{replace:Y=!1}=X||{},q=XW(Z,window.location.href);if(Y)window.history.replaceState(null,"",q);else window.history.pushState(null,"",q);$(window.location.href)},[]);return{locationParams:X0(()=>new URL(_).searchParams,[_]),navigate:j}}x0();x0();function bY(_,$,j,G){try{let Z=_?.getItem?.($),X=Z?Number(Z):Number.NaN;return Number.isFinite(X)&&X>=j?X:G}catch(Z){return G}}function o7(_,$,j){try{return _?.setItem?.($,String(Math.round(j))),!0}catch(G){return!1}}var YW=400,s7=60,qW=220,a7="mdPreviewHeight";function LW(){return bY(localStorage,a7,s7,qW)}function v2({getContent:_,path:$,onClose:j}){let[G,Z]=C(""),[X,Y]=C(LW),q=u(null),L=u(null),K=u(""),Q=u(_);return Q.current=_,g(()=>{let B=()=>{let D=Q.current?.()||"";if(D===K.current)return;K.current=D;try{let E=e_(D,null);Z(E)}catch{Z('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};B();let U=setInterval(B,YW);return()=>clearInterval(U)},[]),g(()=>{if(q.current&&G)B$(q.current).catch((B)=>{console.debug("[markdown-preview] Mermaid rendering failed for the live preview.",B,{path:$})})},[G]),N`
        <div
            class="md-preview-splitter"
            onMouseDown=${(B)=>{B.preventDefault();let U=B.clientY,D=L.current?.offsetHeight||X,E=L.current?.parentElement,H=E?E.offsetHeight*0.7:500,k=B.currentTarget;k.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let z=(y)=>{let I=Math.min(Math.max(D-(y.clientY-U),s7),H);Y(I)},O=()=>{k.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",o7(localStorage,a7,L.current?.offsetHeight||X),document.removeEventListener("mousemove",z),document.removeEventListener("mouseup",O)};document.addEventListener("mousemove",z),document.addEventListener("mouseup",O)}}
            onTouchStart=${(B)=>{B.preventDefault();let U=B.touches[0];if(!U)return;let D=U.clientY,E=L.current?.offsetHeight||X,H=L.current?.parentElement,k=H?H.offsetHeight*0.7:500,z=B.currentTarget;z.classList.add("dragging"),document.body.style.userSelect="none";let O=(I)=>{let A=I.touches[0];if(!A)return;I.preventDefault();let J=Math.min(Math.max(E-(A.clientY-D),s7),k);Y(J)},y=()=>{z.classList.remove("dragging"),document.body.style.userSelect="",o7(localStorage,a7,L.current?.offsetHeight||X),document.removeEventListener("touchmove",O),document.removeEventListener("touchend",y),document.removeEventListener("touchcancel",y)};document.addEventListener("touchmove",O,{passive:!1}),document.addEventListener("touchend",y),document.addEventListener("touchcancel",y)}}
        ></div>
        <div class="md-preview-panel" ref=${L} style=${{height:X+"px"}}>
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
                ref=${q}
                dangerouslySetInnerHTML=${{__html:G}}
            />
        </div>
    `}function vY(_){if(_.branchLoaderMode)return"branch-loader";if(_.panePopoutMode)return"pane-popout";return"main"}function KW(_){return _==="error"?"Could not open branch window":"Opening branch…"}function mY(_){return N`
    <div class="app-shell chat-only">
      <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
        <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
          <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
            ${KW(_.status)}
          </h1>
          <p style=${{margin:0,lineHeight:1.6}}>${_.message}</p>
        </div>
      </div>
    </div>
  `}function cY(_){let{appShellRef:$,editorOpen:j,hidePanePopoutControls:G,panePopoutHasMenuActions:Z,panePopoutTitle:X,tabStripTabs:Y,tabStripActiveId:q,handleTabActivate:L,previewTabs:K,diffTabs:Q,handleTabTogglePreview:V,handleTabToggleDiff:F,editorContainerRef:B,getPaneContent:U,panePopoutPath:D}=_,E=j&&!G&&Z,H=X?`Pane window controls for ${X}`:"Pane window controls";return N`
    <div class=${`app-shell pane-popout${j?" editor-open":""}`} ref=${$}>
      <div class="editor-pane-container pane-popout-container">
        ${E&&N`
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
                ${Y.length>1&&N`
                  <div class="pane-popout-controls-section">
                    <div class="pane-popout-controls-section-title">Open panes</div>
                    <div class="pane-popout-controls-list">
                      ${Y.map((k)=>N`
                        <button
                          type="button"
                          class=${`pane-popout-controls-item${k.id===q?" active":""}`}
                          onClick=${(z)=>{L(k.id),z.currentTarget.closest("details")?.removeAttribute("open")}}
                        >
                          ${k.label}
                        </button>
                      `)}
                    </div>
                  </div>
                `}
                ${q&&Q.has(q)&&N`
                  <button
                    type="button"
                    class="pane-popout-controls-action"
                    onClick=${(k)=>{F(q),k.currentTarget.closest("details")?.removeAttribute("open")}}
                  >
                    Hide diff
                  </button>
                `}
                ${q&&K.has(q)&&N`
                  <button
                    type="button"
                    class="pane-popout-controls-action"
                    onClick=${(k)=>{V(q),k.currentTarget.closest("details")?.removeAttribute("open")}}
                  >
                    Hide preview
                  </button>
                `}
              </div>
            </details>
          </div>
        `}
        ${j?N`<div class="editor-pane-host" ref=${B}></div>`:N`
            <div class="card" style=${{margin:"24px",padding:"24px",maxWidth:"640px"}}>
              <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>Opening pane…</h1>
              <p style=${{margin:0,lineHeight:1.6}}>${D||"No pane path provided."}</p>
            </div>
          `}
        ${j&&q&&K.has(q)&&N`
          <${v2}
            getContent=${U}
            path=${q}
            onClose=${()=>V(q)}
          />
        `}
      </div>
    </div>
  `}x0();x0();function m2(_){return String(_||"").toLowerCase().replace(/^@/,"").replace(/\s+/g," ").trim()}function VW(_,$){let j=m2(_),G=m2($);if(!G)return!1;return j.startsWith(G)||j.includes(G)}function V6(_){if(!_)return!1;if(_.isComposing)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;return typeof _.key==="string"&&_.key.length===1&&/\S/.test(_.key)}function t7(_,$,j=Date.now(),G=700){let Z=_&&typeof _==="object"?_:{value:"",updatedAt:0},X=String($||"").trim().toLowerCase();if(!X)return{value:"",updatedAt:j};return{value:!Z.value||!Number.isFinite(Z.updatedAt)||j-Z.updatedAt>G?X:`${Z.value}${X}`,updatedAt:j}}function QW(_,$){let j=Math.max(0,Number(_)||0);if(j<=0)return[];let Z=((Number.isInteger($)?$:0)%j+j)%j,X=[];for(let Y=0;Y<j;Y+=1)X.push((Z+Y)%j);return X}function FW(_,$,j=0,G=(Z)=>Z){let Z=m2($);if(!Z)return-1;let X=Array.isArray(_)?_:[],Y=QW(X.length,j),q=X.map((L)=>m2(G(L)));for(let L of Y)if(q[L].startsWith(Z))return L;for(let L of Y)if(q[L].includes(Z))return L;return-1}function e7(_,$,j=-1,G=(Z)=>Z){let Z=Array.isArray(_)?_:[];if(j>=0&&j<Z.length){let X=G(Z[j]);if(VW(X,$))return j}return FW(Z,$,0,G)}g_();function c2(_){return String(_||"").trim().toLowerCase()}function _9(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return c2($[1]||"")}function BW(_){let $=new Set,j=[];for(let G of Array.isArray(_)?_:[]){let Z=c2(G?.agent_name);if(!Z||$.has(Z))continue;$.add(Z),j.push(G)}return j}function lY(_,$,j={}){let G=_9($);if(G==null)return[];let Z=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return BW(_).filter((X)=>{if(Z&&X?.chat_jid===Z)return!1;return c2(X?.agent_name).startsWith(G)})}function $9(_){let $=c2(_);return $?`@${$} `:""}function hY(_={}){if(_.searchMode)return!1;return Boolean(_.showSessionSwitcherButton)}function pY(_,$,j={}){if(!_||_.isComposing)return!1;if(!hY(j))return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;if(_.key!=="@")return!1;return String($||"")===""}function j9(_,$={}){if(!hY($))return!1;return String(_||"")==="@"}function G9(_){let $=Z9(_);return $?`@${$}`:""}function Z9(_){return String(_||"").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")}function l2(_,$=""){let j=String(_||""),G=Z9(j),Z=Z9($);if(!j.trim())return{normalized:G,handle:"",canSubmit:!1,kind:"error",message:"Enter a branch handle."};if(!G)return{normalized:G,handle:"",canSubmit:!1,kind:"error",message:"Handle must contain at least one letter or number."};let X=`@${G}`;if(G===Z)return{normalized:G,handle:X,canSubmit:!1,kind:"info",message:`Already using ${X}.`};if(G!==j.trim())return{normalized:G,handle:X,canSubmit:!0,kind:"info",message:`Will save as ${X}. Letters, numbers, - and _ are allowed; leading @ is optional.`};return{normalized:G,handle:X,canSubmit:!0,kind:"success",message:`Saving as ${X}.`}}function NW(_,$={}){let j=[],G=typeof $.currentChatJid==="string"?$.currentChatJid.trim():"",Z=typeof _?.chat_jid==="string"?_.chat_jid.trim():"";if(G&&Z===G)j.push("current");if(_?.archived_at)j.push("archived");else if(_?.is_active)j.push("active");return j}function h2(_,$={}){let j=G9(_?.agent_name)||String(_?.chat_jid||"").trim(),G=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():"unknown-chat",Z=NW(_,$);return Z.length>0?`${j} — ${G} • ${Z.join(" • ")}`:`${j} — ${G}`}function nY(_,$,j){let G=G9(_),Z=G9($),X=String(j||"").trim();if(G&&Z&&G!==Z)return`Restored archived ${G} as ${Z} because ${G} is already in use.`;if(Z)return`Restored ${Z}.`;if(G)return`Restored ${G}.`;return`Restored ${X||"branch"}.`}function p2({steerQueued:_=!1,pulsing:$=!1}={}){let j=["turn-dot"];if(_)j.push("turn-dot-queued");if($)j.push("turn-dot-pulsing");return j.join(" ")}function n2({pulsing:_=!1}={}){let $=["compose-inline-status-dot"];if(_)$.push("compose-inline-status-dot-pulsing");return $.join(" ")}function r2(_,{isLastActivity:$=!1,pendingRequest:j=!1}={}){if(j)return"dot";if($)return"none";if(_?.type==="error")return"none";if(_?.type==="intent")return"dot";let G=typeof _?.type==="string"?_.type:"";if(Boolean(typeof _?.tool_name==="string"&&_.tool_name.trim()||_?.tool_args))return"spinner";if(G==="tool_call"||G==="tool_status"||G==="thinking"||G==="waiting")return"spinner";return"dot"}function rY(_,$={}){return r2(_,$)==="dot"}x0();var dY=350;function UW(_){return String(_||"Connecting").replace(/[-_]+/g," ").replace(/^./,($)=>$.toUpperCase())}function HW(_,$={}){let j=typeof _==="string"&&_.trim()?_.trim():"connecting";if(j==="connected")return{show:!1,statusClass:"connected",label:"Connected",title:"Connection: Connected"};if(j!=="disconnected"){let q=UW(j);return{show:!0,statusClass:j,label:q,title:`Connection: ${q}`}}let G=Number.isFinite(Number($?.delayMs))?Math.max(0,Number($.delayMs)):dY,Z=Number.isFinite(Number($?.nowMs))?Number($.nowMs):Date.now(),X=Number.isFinite(Number($?.disconnectedAtMs))?Number($.disconnectedAtMs):Z;return Z-X>=G?{show:!0,statusClass:"disconnected",label:"Reconnecting",title:"Reconnecting"}:{show:!0,statusClass:"connecting",label:"Connecting",title:"Connecting"}}function X9(_,$={}){let j=Number.isFinite(Number($?.delayMs))?Math.max(0,Number($.delayMs)):dY,[G,Z]=C(null),[X,Y]=C(()=>Date.now());return g(()=>{if(_==="disconnected"){let q=Date.now();Z((L)=>L??q),Y(q);return}Z(null),Y(Date.now())},[_]),g(()=>{if(_!=="disconnected"||G===null)return;let q=j-(Date.now()-G);if(q<=0)return;let L=setTimeout(()=>{Y(Date.now())},q);return()=>clearTimeout(L)},[_,G,j]),X0(()=>HW(_,{delayMs:j,disconnectedAtMs:G,nowMs:X}),[_,j,G,X])}x0();function k1({prefix:_="file",label:$,title:j,onRemove:G,onClick:Z,removeTitle:X="Remove",icon:Y="file"}){let q=`${_}-file-pill`,L=`${_}-file-name`,K=`${_}-file-remove`,Q=Y==="message"?N`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:N`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return N`
    <span class=${q} title=${j||$} onClick=${Z}>
      ${Q}
      <span class=${L}>${$}</span>
      ${G&&N`
        <button
          class=${K}
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
  `}async function Y9(_,$,j){if(typeof _!=="function")return!1;try{let G=await _($);if(!G)return!1;return j(G),!0}catch(G){return!1}}function EW(_={}){let $=_.navigator??(typeof navigator<"u"?navigator:null);if(!$)return!1;let j=String($.userAgent||"");if(/iPad|iPhone/.test(j))return!0;return $.platform==="MacIntel"&&Number($.maxTouchPoints||0)>1}function DW(_={}){let $=_.window??(typeof window<"u"?window:null);if(!$)return null;return $.SpeechRecognition||$.webkitSpeechRecognition||null}function q9(_={}){let $=_.window??(typeof window<"u"?window:null),j=typeof _.secureContext==="boolean"?_.secureContext:Boolean($?.isSecureContext),G=I1(_),Z=EW(_),X=DW(_);if(!j)return{mode:"unavailable",showButton:!1,canStart:!1,reason:"secure-context-required",title:"Voice input requires HTTPS",detail:"Native browser speech input needs a secure context (HTTPS or localhost).",recognitionCtor:null,ios:Z,standalone:G,secureContext:j};if(Z&&G)return{mode:"fallback",showButton:!0,canStart:!1,reason:"ios-standalone-fallback",title:"Use keyboard dictation",detail:"Speech input is intentionally downgraded in iPhone/iPad standalone web apps because browser-native recognition is not reliable there. Focus the compose box and use the keyboard dictation mic instead.",recognitionCtor:X,ios:Z,standalone:G,secureContext:j};if(!X){if(Z)return{mode:"fallback",showButton:!0,canStart:!1,reason:"ios-keyboard-dictation",title:"Use keyboard dictation",detail:"This browser does not expose native in-page speech recognition here. Focus the compose box and use the keyboard dictation mic instead.",recognitionCtor:null,ios:Z,standalone:G,secureContext:j};return{mode:"unavailable",showButton:!1,canStart:!1,reason:"unsupported",title:"Voice input unavailable",detail:"This browser does not expose native speech recognition in this context.",recognitionCtor:null,ios:Z,standalone:G,secureContext:j}}return{mode:"native",showButton:!0,canStart:!0,reason:"supported",title:"Start voice input",detail:Z?"Browser-native speech input is available here, but Safari/WebKit reliability may still vary.":"Browser-native speech input is available.",recognitionCtor:X,ios:Z,standalone:G,secureContext:j}}function iY(_,$="",j=""){let G=String(_||""),Z=String($||"").trim(),X=String(j||"").trim(),Y=[Z,X].filter(Boolean).join(" ").trim();if(!Y)return G;if(!G)return Y;let q=/[\s\n]$/.test(G)?"":" ";return`${G}${q}${Y}`}function oY(_,$=0){let j="",G="",Z=_&&typeof _.length==="number"?_:[];for(let X=Math.max(0,$);X<Z.length;X+=1){let Y=Z[X];if(!Y||!Y[0])continue;let q=String(Y[0].transcript||"").trim();if(!q)continue;if(Y.isFinal)j=`${j} ${q}`.trim();else G=`${G} ${q}`.trim()}return{finalText:j,interimText:G}}function L9(_,$=null){let j=String(_||"").trim().toLowerCase();switch(j){case"not-allowed":case"service-not-allowed":return $?.ios?"Microphone or speech-recognition permission was denied. On iPhone/iPad, using keyboard dictation may be more reliable.":"Microphone or speech-recognition permission was denied by the browser.";case"no-speech":return"No speech was detected. Try again and speak after the listening indicator appears.";case"audio-capture":return"The browser could not access a microphone for speech recognition.";case"network":return"The browser speech-recognition service reported a network or service failure.";case"aborted":return"Voice input was stopped.";default:return j?`Voice input failed (${j}).`:"Voice input failed."}}var WW=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking/effort level"},{name:"/effort",description:"Show or set thinking/effort level (alias for /thinking)"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (no name to show available themes)"},{name:"/meters",description:"Toggle the top-right CPU/RAM HUD (/meters on|off|toggle)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/session-rotate",description:"Rotate the current persisted session into an archived file"},{name:"/rollup",description:"Merge the current branch chat back into its parent chat"},{name:"/clone",description:"Duplicate the current active branch into a new session"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/dream",description:"Run Dream memory maintenance over recent days (default 7)"},{name:"/tasks",description:"List scheduled tasks"},{name:"/scheduled",description:"List scheduled tasks"},{name:"/pair",description:"Manage remote peer connections (/pair request <url> | /pair list)"},{name:"/ask",description:"Send a prompt to a paired remote instance (/ask <instance_id|fingerprint> <prompt>)"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/exit",description:"Exit the current piclaw process immediately (Supervisor will restart it)"},{name:"/login",description:"Login to an AI model provider (OAuth or API key)"},{name:"/logout",description:"Logout from an AI model provider"},{name:"/settings",description:"Open the settings pane"},{name:"/help",description:"Open keyboard shortcuts help"},{name:"/commands",description:"List available commands"},{name:"/skill:",description:"Run a workspace skill (e.g. /skill:visual-artifact-generator, /skill:web-search)"}],sY="piclaw_compose_history";function OW(_,$,j=!1){if(j)return{shouldApply:!1,nextToken:$,text:""};if(!_||typeof _!=="object")return{shouldApply:!1,nextToken:$,text:""};let G=typeof _.token==="string"?_.token:"",Z=typeof _.text==="string"?_.text:"";if(!G||G===$||!Z.trim())return{shouldApply:!1,nextToken:$,text:""};return{shouldApply:!0,nextToken:G,text:Z}}function zW(_="web:default"){let $=typeof _==="string"&&_.trim()?_.trim():"web:default";if($==="web:default")return sY;return`${sY}:${encodeURIComponent($)}`}function JW(_,$=null){let j=new Set,G=[];for(let Z of Array.isArray(_)?_:[]){let X=typeof Z?.chat_jid==="string"?Z.chat_jid.trim():"";if(!X||j.has(X))continue;if(!(typeof Z?.agent_name==="string"?Z.agent_name.trim():""))continue;j.add(X),G.push(Z)}return G.sort((Z,X)=>{let Y=Boolean(Z?.archived_at),q=Boolean(X?.archived_at);if(Y!==q)return Y?1:-1;let L=String(Z?.agent_name||"").trim(),K=String(X?.agent_name||"").trim(),Q=L.localeCompare(K,void 0,{sensitivity:"base"});if(Q!==0)return Q;let V=String(Z?.chat_jid||"").trim(),F=String(X?.chat_jid||"").trim();return V.localeCompare(F,void 0,{sensitivity:"base"})}),G}function AW(_){return Boolean(_?.is_active&&!_?.archived_at)}function kW(_,$=null){let j=Array.isArray(_)?_:[],G=typeof $==="string"?$.trim():"";if(G){let X=j.findIndex((Y)=>{if(Y?.disabled)return!1;if(Y?.type!=="session")return!1;return(typeof Y?.chat?.chat_jid==="string"?Y.chat.chat_jid.trim():"")===G});if(X>=0)return X}let Z=j.findIndex((X)=>!X?.disabled);return Z>=0?Z:0}function aY(_,$){let j=typeof $?.command?.message==="string"?$.command.message.trim():"";if(!$?.ui_only||!j)return null;let G=typeof _==="string"?_.trim():"";if(!G.startsWith("/"))return null;let Z=G.split(/\s+/).filter(Boolean),X=Z[0]?.toLowerCase()||"";if(!(Z.length>1)&&(X==="/model"||X==="/thinking"||X==="/effort"))return j;return null}function MW(_,$,j=!1){if(_)return{mode:"queue",className:"icon-btn send-btn queue-mode",title:"Queue follow-up (Enter)",ariaLabel:"Queue follow-up message",disabled:!$};return{mode:"send",className:"icon-btn send-btn",title:"Send (Enter)",ariaLabel:"Send message",disabled:!$}}function wW(_,$=!1){if(!_)return null;if($)return{mode:"compacting",className:"icon-btn send-btn abort-mode compacting-mode",title:"Compacting context — Stop response",ariaLabel:"Compacting context — Stop response",disabled:!1};return{mode:"abort",className:"icon-btn send-btn abort-mode",title:"Stop response",ariaLabel:"Stop response",disabled:!1}}function TW(_){return _==="abort"||_==="compacting"}function yW(_,$=0){if(_?.visible===!1)return{visible:!1,title:"",indicatorText:null,animateDot:!1};let j=typeof _?.message==="string"&&_.message.trim()?_.message.trim():null,G=_?.indicator&&typeof _.indicator==="object"?_.indicator:null;if(!j&&!G)return{visible:!1,title:"",indicatorText:null,animateDot:!1};if(G?.mode==="hidden")return{visible:Boolean(j),title:j||"Working…",indicatorText:null,animateDot:!1};if(G?.mode==="custom"&&Array.isArray(G.frames)&&G.frames.length>0){let Z=G.frames,X=Number.isFinite($)&&$>=0?Math.floor($)%Z.length:0;return{visible:!0,title:j||"Working…",indicatorText:Z[X],animateDot:!1}}return{visible:!0,title:j||"Working…",indicatorText:null,animateDot:!0}}function xW({usage:_,onCompact:$,compactionLabel:j="",compactionTitle:G=""}){let Z=Math.min(100,Math.max(0,_.percent||0)),X=_.tokens,Y=_.contextWindow,q="Compact context",L=X!=null?`Context: ${Q6(X)} / ${Q6(Y)} tokens (${Z.toFixed(0)}%)`:`Context: ${Z.toFixed(0)}%`,K=typeof j==="string"?j.trim():"",Q=typeof G==="string"?G.trim():"",V=K?`${L} — ${Q||"Smart compaction"} · ${K}`:`${L} — ${"Compact context"}`,F=9,B=2*Math.PI*9,U=Z/100*B,D=Z>90?"var(--context-red, #ef4444)":Z>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return N`
        <button
            class=${`compose-context-pie icon-btn${K?" is-compacting":""}`}
            type="button"
            title=${V}
            aria-label=${K?`Smart compaction ${K}`:"Compact context"}
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
                    stroke-dasharray=${`${U} ${B}`}
                    stroke-linecap="round"
                    transform="rotate(-90 12 12)" />
            </svg>
            ${K&&N`<span class="compose-context-pie-timer">${K}</span>`}
        </button>
    `}function Q6(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function IW(_){let $=Number(_?.tokens);return Number.isFinite($)&&$>0?$:null}function tY(_,$){let j=Number(_?.contextWindow??_?.context_window),G=IW($);if(!Number.isFinite(j)||j<=0||!Number.isFinite(G)||G<=0)return{blocked:!1,note:"",title:"",tokens:G??null,contextWindow:Number.isFinite(j)&&j>0?j:null};if(G<=j)return{blocked:!1,note:"",title:"",tokens:G,contextWindow:j};return{blocked:!0,note:"Current context won’t fit — compact first",title:`Current context uses ${Q6(G)} tokens, but this model only fits ${Q6(j)}. Compact first.`,tokens:G,contextWindow:j}}function K9(_){let $=Number(_);if(!Number.isFinite($)||$<=0)return"";return`${Q6($)} ctx`}function CW(_,$){let j=typeof _==="string"?_.trim():"",G=K9($);if(!j)return G;if(!G)return j;return`${j} • ${G}`}function fW(_,$="",j=""){let G=typeof _==="string"?_.trim():"";if(G)return G;let Z=typeof $==="string"?$.trim():"",X=typeof j==="string"?j.trim():"";if(Z&&X)return`${Z}/${X}`;return X||Z||""}function $q(_){let $=Array.isArray(_?.model_options)?_.model_options:null,j=Array.isArray(_?.models)?_.models:[],G=$&&$.length>0?$:j,Z=[];for(let X of G){if(typeof X==="string"){let V=X.trim();if(!V)continue;let F=V.indexOf("/"),B=F>0?V.slice(0,F).trim():"",U=F>0?V.slice(F+1).trim():V;Z.push({label:V,provider:B,id:U,name:null,contextWindow:null,reasoning:!1});continue}if(!X||typeof X!=="object")continue;let Y=typeof X.provider==="string"?X.provider.trim():"",q=typeof X.id==="string"?X.id.trim():"",L=fW(X.label,Y,q);if(!L)continue;let K=typeof X.name==="string"&&X.name.trim()?X.name.trim():null,Q=Number(X.context_window??X.contextWindow);Z.push({label:L,provider:Y,id:q,name:K,contextWindow:Number.isFinite(Q)&&Q>0?Q:null,reasoning:Boolean(X.reasoning)})}return Z.sort((X,Y)=>X.label.localeCompare(Y.label,void 0,{sensitivity:"base"})),Z}function PW(_){if(!_||typeof _!=="object")return"";return[_.label,_.provider,_.id,_.name,K9(_.contextWindow)].filter(Boolean).join(" ")}function RW(_,$){let j=typeof _==="string"?_.trim():"";if(j)return{showPicker:!0,label:j,hasAvailableModels:!0};let G=$q($).length>0;return{showPicker:G,label:G?"Select model":"",hasAvailableModels:G}}function d2(_){return(typeof _==="string"?_.trim():"")||null}function eY(_){return d2(_)?.toLowerCase()??null}function _q(_,$){let j=eY(_),G=eY($);if(!j||!G)return!1;return j===G||j.endsWith(`/${G}`)||G.endsWith(`/${j}`)}function SW(_,$){let j=$&&typeof $==="object"?$:{},G=d2(j.latest_response_model??j.response_model??j.responseModel??j.routed_model??j.routedModel);if(!G)return null;let Z=d2(j.latest_requested_model??j.requested_model??j.requestedModel??j.current??j.model??_);if(Z&&_q(G,Z))return null;let X=d2(_??j.current??j.model);if(X&&Z&&!_q(X,Z))return null;return{label:`Routed: ${G}`,title:Z?`Requested model: ${Z} • Routed model: ${G}`:`Routed model: ${G}`,requestedModel:Z,responseModel:G}}function gW(_){if(!_)return _;let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!$.includes(" @ ")||!$.includes(`:
`))return _;let j=$.split(`
`),G=[],Z=0,X=!1;while(Z<j.length){let q=j[Z].trim();if(!q){Z+=1;continue}if(q==="Messages:"||q.startsWith("Channel:")){X=!0,Z+=1;continue}if(/^[^\n]+\s@\s[^\n]+:$/.test(q)){X=!0,Z+=1;let L=[];while(Z<j.length){let K=j[Z],Q=K.trim();if(/^[^\n]+\s@\s[^\n]+:$/.test(Q))break;if(Q.startsWith("Channel:")||Q==="Messages:")break;L.push(K.startsWith("  ")?K.slice(2):K),Z+=1}if(L.length>0)G.push(L.join(`
`).trim());continue}return _}return X&&G.length>0?G.filter(Boolean).join(`

`):_}function uW(_){let $=String(_||"").trim(),j=$.match(/^`([^`]+)`$/);return(j?j[1]:$).trim()}function bW(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let K=0;K<j.length;K+=1)if(j[K].trim()==="Files:"&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){G=K;break}if(G===-1)return{content:_,fileRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let K=j[X];if(/^\s*-\s+/.test(K)){let Q=uW(K.replace(/^\s*-\s+/,"").trim());if(Q)Z.push(Q)}else if(!K.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let Y=j.slice(0,G),q=j.slice(X);return{content:[...Y,...q].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:Z}}function vW(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let K=0;K<j.length;K+=1)if(j[K].trim()==="Referenced messages:"&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){G=K;break}if(G===-1)return{content:_,messageRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let K=j[X];if(/^\s*-\s+/.test(K)){let Q=K.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(Q)Z.push(Q[1])}else if(!K.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let Y=j.slice(0,G),q=j.slice(X);return{content:[...Y,...q].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:Z}}function mW(_){if(!_)return{content:_,attachmentRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let K=0;K<j.length;K+=1)if(j[K].trim()==="Attachments:"&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){G=K;break}if(G===-1)return{content:_,attachmentRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let K=j[X];if(/^\s*-\s+/.test(K)){let Q=K.replace(/^\s*-\s+/,"").trim(),V=Q.match(/^attachment:(\d+)(?:\s*\((.+)\))?$/i);if(V)Z.push({id:V[1],label:(V[2]||"").trim()||`attachment:${V[1]}`,raw:Q})}else if(!K.trim())break;else break}if(Z.length===0)return{content:_,attachmentRefs:[]};let Y=j.slice(0,G),q=j.slice(X);return{content:[...Y,...q].join(`
`).replace(/\n{3,}/g,`

`).trim(),attachmentRefs:Z}}function jq(_){let $=gW(_||""),j=bW($||""),G=vW(j.content||""),Z=mW(G.content||"");return{text:Z.content||"",fileRefs:j.fileRefs,messageRefs:G.messageRefs,attachmentRefs:Z.attachmentRefs}}function cW(_){let $=jq(_),j=$.attachmentRefs.length>0?`Attachments:
${$.attachmentRefs.map((Z)=>`- ${Z.raw}`).join(`
`)}`:"";return{content:[String($.text||"").trim(),j].filter(Boolean).join(`

`).trim(),fileRefs:[...$.fileRefs],messageRefs:[...$.messageRefs],attachmentRefs:[...$.attachmentRefs]}}function lW(_){let{queuedItem:$,buildDraft:j=cW,onRemoveQueuedFollowup:G,setSubmitError:Z,setSubmitNotice:X,setMediaFiles:Y,onSetFileRefs:q,onSetMessageRefs:L,setContent:K,textareaRef:Q,resizeTextarea:V=()=>{},scheduleTimeout:F=(H,k=0)=>setTimeout(H,k),scheduleRaf:B=(H)=>requestAnimationFrame(H),logger:U=console}=_||{};if(!$)return!1;let D=j($?.content||""),E=D.content;return U?.info?.("[compose-box] Returning queued item to editor",{text:E?.slice(0,80),fileRefs:D.fileRefs?.length,messageRefs:D.messageRefs?.length}),Z?.(null),X?.(null),Y?.([]),q?.(D.fileRefs),L?.(D.messageRefs),K?.(E),B(()=>{let H=Q?.current;if(!H)return;if(H.value=E,typeof H.dispatchEvent==="function")H.dispatchEvent(new Event("input",{bubbles:!0}));V();let k=E.length;H.selectionStart=k,H.selectionEnd=k,H.focus()}),F(()=>{try{G?.($)}catch(H){U?.warn?.("[compose-box] Failed to remove returned queued follow-up.",H)}},0),!0}function V9({items:_=[],onInjectQueuedFollowup:$,onRemoveQueuedFollowup:j,onMoveQueuedFollowup:G,onReturnQueuedFollowup:Z,onOpenFilePill:X}){if(!Array.isArray(_)||_.length===0)return null;return N`
        <div class="compose-queue-stack">
            ${_.map((Y,q)=>{let L=typeof Y?.content==="string"?Y.content:"",K=jq(L);if(!K.text.trim()&&K.fileRefs.length===0&&K.messageRefs.length===0&&K.attachmentRefs.length===0)return null;let Q=q>0,V=q<_.length-1,F=!0;return N`
                    <div class="compose-queue-stack-item" data-testid="queue-item" role="listitem">
                        <div class="compose-queue-stack-content" title=${L}>
                            ${K.text.trim()&&N`<div class="compose-queue-stack-text">${K.text}</div>`}
                            ${(K.messageRefs.length>0||K.fileRefs.length>0||K.attachmentRefs.length>0)&&N`
                                <div class="compose-queue-stack-refs">
                                    ${K.messageRefs.map((B)=>N`
                                        <${k1}
                                            key=${"queue-msg-"+B}
                                            prefix="compose"
                                            label=${"msg:"+B}
                                            title=${"Message reference: "+B}
                                            icon="message"
                                        />
                                    `)}
                                    ${K.fileRefs.map((B)=>{let U=B.split("/").pop()||B;return N`
                                            <${k1}
                                                key=${"queue-file-"+B}
                                                prefix="compose"
                                                label=${U}
                                                title=${B}
                                                onClick=${()=>X?.(B)}
                                            />
                                        `})}
                                    ${K.attachmentRefs.map((B)=>N`
                                        <${k1}
                                            key=${"queue-attachment-"+B.id}
                                            prefix="compose"
                                            label=${B.label}
                                            title=${B.raw}
                                        />
                                    `)}
                                </div>
                            `}
                        </div>
                        <div class="compose-queue-stack-actions" role="group" aria-label="Queued follow-up controls">
                            ${_.length>1&&N`
                                <button
                                    class="compose-queue-stack-move-btn"
                                    data-action="move-up"
                                    type="button"
                                    title="Move up"
                                    aria-label="Move up in queue"
                                    disabled=${!Q}
                                    onClick=${()=>Q&&G?.(q,q-1)}
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
                                    onClick=${()=>V&&G?.(q,q+1)}
                                >
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </button>
                            `}
                            ${F&&N`
                                <button
                                    class="compose-queue-stack-move-btn queue-edit"
                                    data-action="edit"
                                    type="button"
                                    title="Edit in compose"
                                    aria-label="Return queued message to editor"
                                    onClick=${(B)=>{B.stopPropagation(),Z?.(Y)}}
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
    `}function Gq({onPost:_,onFocus:$,searchMode:j,searchScope:G="current",onSearch:Z,onSearchScopeChange:X,onEnterSearch:Y,onExitSearch:q,fileRefs:L=[],onRemoveFileRef:K,onClearFileRefs:Q,messageRefs:V=[],onRemoveMessageRef:F,onClearMessageRefs:B,activeModel:U=null,agentModelsPayload:D=null,modelUsage:E=null,thinkingLevel:H=null,supportsThinking:k=!1,contextUsage:z=null,onContextCompact:O,notificationsEnabled:y=!1,notificationPermission:I="default",onToggleNotifications:A,onModelChange:J,onModelStateChange:M,activeEditorPath:W=null,onAttachEditorFile:w,onOpenFilePill:x,followupQueueItems:P=[],onInjectQueuedFollowup:R,onRemoveQueuedFollowup:v,onMoveQueuedFollowup:c,onSubmitIntercept:h,onMessageResponse:r,isAgentActive:b=!1,activeChatAgents:a=[],currentChatJid:t="web:default",connectionStatus:q0="connected",onSetFileRefs:Z0,onSetMessageRefs:D0,onSubmitError:Q0,onSwitchChat:L0,onRenameSession:N0,isRenameSessionInProgress:H0=!1,onCreateSession:y0,onCreateRootSession:o,onDeleteSession:j0,onPurgeArchivedSession:O0,onRestoreSession:P0,showQueueStack:m0=!0,statusNotice:l0=null,extensionWorkingState:G_=null,prefillRequest:h0=null}){let[c0,M0]=C(""),[p0,b0]=C(""),[d0,H_]=C(!1),[E_,K_]=C(!1),[S0,A0]=C("or"),[r0,q_]=C([]),[O_,F0]=C(!1),[w0,C0]=C([]),[U_,A_]=C(0),[V_,X_]=C(!1),D_=u(null),[M_,$0]=C([]),[z0,k0]=C(0),[g0,v0]=C(!1),[e,s]=C(!1),[d,Y0]=C(!1),[G0,E0]=C(!1),[I0,t0]=C([]),[J0,R0]=C(0),[Z_,L_]=C(0),[$_,B_]=C(!1),[k_,e0]=C(!1),[_0,W0]=C(0),[s0,i0]=C(null),[f_,z_]=C(null),[x_,i1]=C(()=>q9()),[J_,d_]=C({kind:"idle",title:"",detail:""}),[O1,b_]=C(()=>Date.now()),[n_,q1]=C(0),__=u(null),v_=u(null),i_=u(null),L1=u(null),M1=u(null),o1=u(null),W$=u(null),F1=u(null),s_=u({value:"",updatedAt:0}),r_=u(null),a$=u(""),j1=u(""),B1=u(""),K1=u(""),s1=u(!1),N1=u(0),O$=u(!1),w6=200,z$=zW(t),I_=(T)=>{let m=new Set,n=[];for(let V0 of T||[]){if(typeof V0!=="string")continue;let f0=V0.trim();if(!f0||m.has(f0))continue;m.add(f0),n.push(f0)}return n},w1=(T=z$)=>{let m=E1(T);if(!m)return[];try{let n=JSON.parse(m);if(!Array.isArray(n))return[];return I_(n)}catch{return[]}},z5=(T,m=z$)=>{Q_(m,JSON.stringify(T))},R1=u(w1(z$)),S1=u(-1),a1=u(""),x4=u("");g(()=>{R1.current=w1(z$),S1.current=-1,a1.current=""},[z$]),g(()=>{if(!j)return;fetch("/agent/settings-data").then((T)=>T.json()).then((T)=>{if(T?.searchMatchMode)A0(T.searchMatchMode)}).catch(()=>{})},[j]),g(()=>{let T=!1;return fetch(`/agent/commands?chat_jid=${encodeURIComponent(t||"web:default")}`).then((n)=>n.ok?n.json():null).then((n)=>{if(T||!n?.commands)return;D_.current=n.commands.map((V0)=>({name:V0.name,description:V0.description||""}))}).catch((n)=>{console.debug("[compose] failed to fetch dynamic commands",n)}),()=>{T=!0}},[t]),g(()=>{let T=OW(h0,x4.current,j);if(!T.shouldApply)return;x4.current=T.nextToken,i0(null),M0(T.text),B0(T.text),T0(T.text),requestAnimationFrame(()=>{i();let m=__.current;if(!m)return;try{m.focus({preventScroll:!0})}catch{m.focus()}let n=T.text.length;m.setSelectionRange?.(n,n)})},[h0,j]),g(()=>{i1(q9())},[]);let J$=c0.trim()||r0.length>0||L.length>0||V.length>0,J5=J_.kind!=="idle",A5=J_.kind==="requesting_permission"||J_.kind==="listening",I4=!j&&Boolean(x_?.showButton),t$=J_.kind==="requesting_permission"||J_.kind==="listening",G1=t$?"Stop voice input":x_?.title||"Voice input",P_=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),k5=typeof window<"u"&&typeof Notification<"u",t1=typeof window<"u"?Boolean(window.isSecureContext):!1,M5=k5&&t1&&I!=="denied",C4=I==="granted"&&y,z1=U$(l0),A$=k2(l0),T1=typeof l0?.detail==="string"&&l0.detail.trim()?l0.detail.trim():"",k$=z1?X6(l0,O1):null,e1=yW(G_,n_),Z1=G_?.indicator&&typeof G_.indicator==="object"?G_.indicator:null,e$=C4?"Disable notifications":"Enable notifications",w5=r0.length>0||L.length>0||V.length>0,_$=X9(q0),f4=_$.label,X1=_$.title,M$=MW(b,J$,z1),$$=wW(b,z1),T5=(Array.isArray(a)?a:[]).filter((T)=>!T?.archived_at),R_=(()=>{for(let T of Array.isArray(a)?a:[]){let m=typeof T?.chat_jid==="string"?T.chat_jid.trim():"";if(m&&m===t)return T}return null})(),P4=Boolean(R_&&R_.chat_jid===(R_.root_chat_jid||R_.chat_jid)),R8=Boolean(P4&&(R_?.chat_jid||t)==="web:default"),y1=(()=>{let T=typeof R_?.parent_branch_id==="string"?R_.parent_branch_id.trim():"",m=typeof R_?.branch_id==="string"?R_.branch_id.trim():"";if(!R_||!T||!m||R_.archived_at)return null;if((Array.isArray(a)?a:[]).filter((f0)=>{let N_=typeof f0?.parent_branch_id==="string"?f0.parent_branch_id.trim():"";return N_&&N_===m}).length>0)return null;return(Array.isArray(a)?a:[]).find((f0)=>{let N_=typeof f0?.branch_id==="string"?f0.branch_id.trim():"";return N_&&N_===T&&!f0?.archived_at})||null})(),R4=X0(()=>JW(a,t),[a,t]),j$=R4.length>0,w$=j$&&typeof L0==="function",T$=j$&&typeof P0==="function",S4=Boolean(H0||O$.current),x1=!j&&typeof N0==="function"&&!S4,G$=!j&&typeof y0==="function",_4=!j&&typeof o==="function",$4=!j&&!b&&!k_&&Boolean(y1?.chat_jid),Z$=!j&&typeof j0==="function"&&!R8,y6=!j&&typeof O0==="function",X$=!j&&(w$||T$||x1||G$||_4||$4||Z$||y6),x6=RW(U,D),y5=x6.showPicker,x5=x6.label,I5=k&&H?` (${H})`:"",S8=I5.trim()?`${H}`:"",I6=SW(U,D),C6=typeof E?.hint_short==="string"?E.hint_short.trim():"",f6=[S8||null,I6?.label||null,C6||null].filter(Boolean).join(" • "),g8=[U?`Current model: ${x5}${I5}`:null,I6?.title||null,E?.plan?`Plan: ${E.plan}`:null,C6||null,E?.primary?.reset_description||null,E?.secondary?.reset_description||null].filter(Boolean),S=e?"Switching model…":g8.join(" • ")||(y5?"Select a model (tap to open model picker)":`Current model: ${x5}${I5} (tap to open model picker)`),l=!j&&(y5||z&&z.percent!=null),p=(T)=>{if(!T||typeof T!=="object")return;let m=T.model??T.current;if(typeof M==="function")M({...T,model:m??null,thinking_level:T.thinking_level??null,thinking_level_label:T.thinking_level_label??null,supports_thinking:T.supports_thinking,provider_usage:T.provider_usage??null});if(m&&typeof J==="function")J(m)},i=(T)=>{let m=T||__.current;if(!m)return;m.style.height="auto",m.style.height=`${m.scrollHeight}px`,m.style.overflowY="hidden"},B0=(T)=>{if(!T.startsWith("/")||T.includes(`
`)){X_(!1),C0([]);return}let m=T.toLowerCase().split(" ")[0];if(m.length<1){X_(!1),C0([]);return}let V0=(D_.current||WW).filter((f0)=>f0.name.startsWith(m)||f0.name.replace(/-/g,"").startsWith(m.replace(/-/g,"")));if(V0.length>0&&!(V0.length===1&&V0[0].name===m))v0(!1),$0([]),C0(V0),A_(0),X_(!0);else X_(!1),C0([])},K0=(T)=>{let m=c0,n=m.indexOf(" "),V0=n>=0?m.slice(n):"",f0=T.name+V0;M0(f0),X_(!1),C0([]),requestAnimationFrame(()=>{let N_=__.current;if(!N_)return;let h_=f0.length;N_.selectionStart=h_,N_.selectionEnd=h_,N_.focus()})},T0=(T)=>{if(j9(T,{searchMode:j,showSessionSwitcherButton:X$})){v0(!1),$0([]);return}if(_9(T)==null){v0(!1),$0([]);return}let m=lY(T5,T,{currentChatJid:t});if(m.length>0&&!(m.length===1&&$9(m[0].agent_name).trim().toLowerCase()===String(T||"").trim().toLowerCase()))X_(!1),C0([]),$0(m),k0(0),v0(!0);else v0(!1),$0([])},u0=(T)=>{let m=$9(T?.agent_name);if(!m)return;M0(m),v0(!1),$0([]),requestAnimationFrame(()=>{let n=__.current;if(!n)return;let V0=m.length;n.selectionStart=V0,n.selectionEnd=V0,n.focus()})},U0=()=>{if(j||!w$&&!T$&&!x1&&!G$&&!Z$)return!1;return s_.current={value:"",updatedAt:0},Y0(!1),X_(!1),C0([]),v0(!1),$0([]),E0(!0),!0},o0=(T)=>{if(T?.preventDefault?.(),T?.stopPropagation?.(),j||!w$&&!T$&&!x1&&!G$&&!Z$)return;if(G0){s_.current={value:"",updatedAt:0},E0(!1);return}U0()},l_=(T)=>{let m=typeof T==="string"?T.trim():"";if(E0(!1),!m||m===t){requestAnimationFrame(()=>__.current?.focus());return}L0?.(m)},a_=async(T)=>{let m=typeof T==="string"?T.trim():"";if(E0(!1),!m||typeof P0!=="function"){requestAnimationFrame(()=>__.current?.focus());return}try{await P0(m)}catch(n){console.warn("Failed to restore session:",n),requestAnimationFrame(()=>__.current?.focus())}},w_=X0(()=>{let T=[];for(let m of R4){let n=Boolean(m?.archived_at),V0=typeof m?.agent_name==="string"?m.agent_name.trim():"",f0=typeof m?.chat_jid==="string"?m.chat_jid.trim():"";if(!V0||!f0)continue;T.push({type:"session",key:`session:${f0}`,label:`@${V0} — ${f0}${m?.is_active?" active":""}${n?" archived":""}`,chat:m,disabled:n?!T$:!w$})}if(G$)T.push({type:"action",key:"action:new",label:"New branch",action:"new",disabled:!1});if(_4)T.push({type:"action",key:"action:new-root",label:"New root session…",action:"new-root",disabled:!1});if(y1?.chat_jid)T.push({type:"action",key:"action:rollup",label:"Merge current w/ parent",action:"rollup",disabled:!$4});if(x1)T.push({type:"action",key:"action:rename",label:"Rename current session",action:"rename",disabled:S4});if(Z$)T.push({type:"action",key:"action:delete",label:"Delete current session",action:"delete",disabled:!1});return T},[R4,T$,w$,G$,_4,y1,$4,x1,Z$,S4]),u8=async(T)=>{if(T?.preventDefault)T.preventDefault();if(T?.stopPropagation)T.stopPropagation();if(typeof N0!=="function"||H0||O$.current)return;O$.current=!0,E0(!1);try{await N0()}catch(m){console.warn("Failed to rename session:",m)}finally{O$.current=!1}requestAnimationFrame(()=>__.current?.focus())},Dj=async()=>{if(typeof y0!=="function")return;E0(!1);try{await y0()}catch(T){console.warn("Failed to create session:",T)}requestAnimationFrame(()=>__.current?.focus())},Wj=async()=>{if(typeof o!=="function")return;E0(!1);let T=typeof window<"u"?window.prompt("New root session handle (for example: ops)"):"",m=String(T||"").trim();if(!m){requestAnimationFrame(()=>__.current?.focus());return}try{await o(m)}catch(n){console.warn("Failed to create root session:",n)}requestAnimationFrame(()=>__.current?.focus())},Oj=async()=>{let T=typeof y1?.chat_jid==="string"?y1.chat_jid.trim():"";if(!T||k_||b)return;E0(!1),i0(null),z_(null),e0(!0);try{let m=await D1("default","/rollup",null,[],null,t);r?.(m),_?.(m);let n=m?.command;if(n?.status==="error"){let f0=n?.message||"Failed to merge current session with parent.";i0(f0),Q0?.(f0);return}let V0=typeof n?.rolled_up_to==="string"&&n.rolled_up_to.trim()?n.rolled_up_to.trim():T;L0?.(V0)}catch(m){let n=m?.message||"Failed to merge current session with parent.";i0(n),Q0?.(n),console.warn("Failed to merge session with parent:",m)}finally{e0(!1)}requestAnimationFrame(()=>__.current?.focus())},zj=async()=>{if(typeof j0!=="function")return;E0(!1);try{await j0(t)}catch(T){console.warn("Failed to delete session:",T)}requestAnimationFrame(()=>__.current?.focus())},y$=(T)=>{if(j)b0(T);else M0(T),B0(T),T0(T);requestAnimationFrame(()=>i())},jB=(T)=>{let m=j?p0:c0,n=m&&!m.endsWith(`
`)?`
`:"",V0=`${m}${n}${T}`.trimStart();y$(V0)},b8=f(()=>{requestAnimationFrame(()=>{let T=__.current;if(!T)return;try{T.focus({preventScroll:!0})}catch{T.focus()}})},[]),g1=f(()=>{d_({kind:"idle",title:"",detail:""})},[]),v8=f((T=j1.current,m=B1.current)=>{if(j)return;y$(iY(a$.current,T,m))},[j]),x$=f(()=>{s1.current=!0;let T=r_.current;if(!T){g1();return}try{T.stop()}catch{r_.current=null,g1()}},[g1]),GB=f(()=>{if(i0(null),z_(null),r_.current){x$();return}if(!x_?.showButton)return;if(x_.mode==="fallback"){b8(),d_({kind:"guidance",title:x_.title||"Use keyboard dictation",detail:x_.detail||"Use your keyboard dictation mic for voice input here."});return}if(!x_?.canStart||!x_?.recognitionCtor){d_({kind:"error",title:x_?.title||"Voice input unavailable",detail:x_?.detail||"This browser does not expose native speech recognition in this context."});return}try{let T=new x_.recognitionCtor;if(r_.current=T,a$.current=String(c0||""),j1.current="",B1.current="",K1.current="",s1.current=!1,T.lang=typeof navigator<"u"&&navigator.language?navigator.language:"en-US",T.interimResults=!0,T.continuous=!1,"maxAlternatives"in T)T.maxAlternatives=1;T.onstart=()=>{d_({kind:"listening",title:"Listening…",detail:"Speak now. Tap the mic again to stop."})},T.onresult=(m)=>{let{finalText:n,interimText:V0}=oY(m?.results,m?.resultIndex||0);if(n)j1.current=`${j1.current} ${n}`.trim();B1.current=V0,v8(),d_({kind:"listening",title:"Listening…",detail:V0?`Heard: ${V0}`:"Speak now. Tap the mic again to stop."})},T.onerror=(m)=>{let n=String(m?.error||"").trim();if(K1.current=n,r_.current=null,B1.current="",n==="aborted"){g1();return}d_({kind:"error",title:"Voice input failed",detail:L9(n,x_)})},T.onend=()=>{let m=K1.current,n=s1.current,V0=Boolean(j1.current.trim()||B1.current.trim());if(r_.current=null,s1.current=!1,K1.current="",B1.current.trim())j1.current=`${j1.current} ${B1.current}`.trim(),B1.current="";if(V0)v8(j1.current,"");if(m&&m!=="aborted")return;if(!V0&&!n){d_({kind:"error",title:"No speech detected",detail:L9("no-speech",x_)});return}g1()},d_({kind:"requesting_permission",title:"Starting voice input…",detail:"Allow microphone access if the browser asks."}),b8(),T.start()}catch(T){r_.current=null,d_({kind:"error",title:"Voice input failed",detail:T?.message||"Could not start native browser speech recognition."})}},[v8,g1,c0,b8,x_,x$]),ZB=(T)=>{let m=T?.command?.model_label;if(m)return m;let n=T?.command?.message;if(typeof n==="string"){let V0=n.match(/•\s+([^\n]+?)\s+\(current\)/);if(V0?.[1])return V0[1].trim()}return null},Jj=async(T)=>{if(j||e)return;i0(null),z_(null),s(!0);try{let m=await D1("default",T,null,[],null,t),n=ZB(m);return p({model:n??U??null,thinking_level:m?.command?.thinking_level,thinking_level_label:m?.command?.thinking_level_label,supports_thinking:m?.command?.supports_thinking}),await Y9(D4,t,p),z_(aY(T,m)),_?.(m),!0}catch(m){return console.error("Failed to switch model:",m),alert("Failed to switch model: "+m.message),!1}finally{s(!1)}},XB=async()=>{await Jj("/cycle-model")},m8=async(T)=>{let m=typeof T==="string"?T:typeof T?.label==="string"?T.label:"";if(!m||e)return;let n=tY(T,z);if(n.blocked){i0(null),z_(n.note);return}if(await Jj(`/model ${m}`))Y0(!1)},YB=(T)=>{if(!T||T.disabled)return;if(T.type==="session"){let m=T.chat;if(m?.archived_at)a_(m.chat_jid);else l_(m.chat_jid);return}if(T.type==="action"){if(T.action==="new"){Dj();return}if(T.action==="new-root"){Wj();return}if(T.action==="rollup"){Oj();return}if(T.action==="rename"){u8();return}if(T.action==="delete")zj()}},qB=(T)=>{T.preventDefault(),T.stopPropagation(),s_.current={value:"",updatedAt:0},E0(!1),Y0((m)=>!m)},LB=async()=>{if(j)return;O?.(),await g4("/compact",null,{includeMedia:!1,includeFileRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},KB=(T)=>{if(T==="queue"||T==="steer"||T==="auto")return T;return b?"queue":void 0},g4=async(T,m,n={})=>{let V0=typeof T==="string"?T:c0;if(/^\/settings\s*$/i.test(V0.trim())){M0(""),requestAnimationFrame(()=>i()),p1();return}if(/^\/help\s*$/i.test(V0.trim())){M0(""),requestAnimationFrame(()=>i()),p1({section:"keyboard"});return}let{includeMedia:f0=!0,includeFileRefs:N_=!0,includeMessageRefs:h_=!0,clearAfterSubmit:c_=!0,recordHistory:u1=!0}=n||{},U1=typeof T==="string"?T:T&&typeof T?.target?.value==="string"?T.target.value:c0,Aj=typeof U1==="string"?U1:"";if(!Aj.trim()&&(f0?r0.length===0:!0)&&(N_?L.length===0:!0)&&(h_?V.length===0:!0))return;if(r_.current)x$();g1(),X_(!1),C0([]),v0(!1),$0([]),E0(!1),i0(null),z_(null);let P6=f0?[...r0]:[],R6=N_?[...L]:[],S6=h_?[...V]:[],j4=Aj.trim();if(u1&&j4){let G4=R1.current,V1=I_(G4.filter((l8)=>l8!==j4));if(V1.push(j4),V1.length>200)V1.splice(0,V1.length-200);R1.current=V1,z5(V1),S1.current=-1,a1.current=""}let AB=()=>{if(f0)q_([...P6]);if(N_)Z0?.(R6);if(h_)D0?.(S6);M0(j4),requestAnimationFrame(()=>i())};if(c_)M0(""),q_([]),Q?.(),B?.();(async()=>{try{let G4=await h?.({content:j4,submitMode:m,fileRefs:R6,messageRefs:S6,mediaFiles:P6});if(G4){_?.(G4);return}let V1=[];for(let Z4 of P6){let g6=await j7(Z4);V1.push(g6.id)}let l8=R6.length?`Files:
${R6.map((Z4)=>`- ${Z4}`).join(`
`)}`:"",kB=S6.length?`Referenced messages:
${S6.map((Z4)=>`- message:${Z4}`).join(`
`)}`:"",MB=V1.length?`Attachments:
${V1.map((Z4,g6)=>{let TB=P6[g6]?.name||`attachment-${g6+1}`;return`- attachment:${Z4} (${TB})`}).join(`
`)}`:"",wB=[j4,l8,kB,MB].filter(Boolean).join(`

`),I$=await D1("default",wB,null,V1,KB(m),t);if(r?.(I$),I$?.command)p({model:I$.command.model_label??U??null,thinking_level:I$.command.thinking_level,thinking_level_label:I$.command.thinking_level_label,supports_thinking:I$.command.supports_thinking}),await Y9(D4,t,p);z_(aY(j4,I$)),_?.(I$)}catch(G4){if(c_)AB();let V1=G4?.message||"Failed to send message.";i0(V1),Q0?.(V1),console.error("Failed to post:",G4)}})()},VB=(T)=>{R?.(T)},QB=f((T)=>{lW({queuedItem:T,onRemoveQueuedFollowup:v,setSubmitError:i0,setSubmitNotice:z_,setMediaFiles:q_,onSetFileRefs:Z0,onSetMessageRefs:D0,setContent:M0,textareaRef:__,resizeTextarea:i})},[v,Z0,D0,i]),C5=f((T)=>{if(j||!d&&!G0||T?.isComposing)return!1;let m=()=>{T.preventDefault?.(),T.stopPropagation?.()},n=()=>{s_.current={value:"",updatedAt:0}};if(T.key==="Escape"){if(m(),n(),d)Y0(!1);if(G0)E0(!1);return!0}if(d){if(T.key==="ArrowDown"){if(m(),n(),I0.length>0)R0((V0)=>(V0+1)%I0.length);return!0}if(T.key==="ArrowUp"){if(m(),n(),I0.length>0)R0((V0)=>(V0-1+I0.length)%I0.length);return!0}if((T.key==="Enter"||T.key==="Tab")&&I0.length>0)return m(),n(),m8(I0[Math.max(0,Math.min(J0,I0.length-1))]),!0;if(V6(T)&&I0.length>0){m();let V0=t7(s_.current,T.key);s_.current=V0;let f0=e7(I0,V0.value,J0,(N_)=>PW(N_));if(f0>=0)R0(f0);return!0}}if(G0){if(T.key==="ArrowDown"){if(m(),n(),w_.length>0)L_((V0)=>(V0+1)%w_.length);return!0}if(T.key==="ArrowUp"){if(m(),n(),w_.length>0)L_((V0)=>(V0-1+w_.length)%w_.length);return!0}if((T.key==="Enter"||T.key==="Tab")&&w_.length>0)return m(),n(),YB(w_[Math.max(0,Math.min(Z_,w_.length-1))]),!0;if(V6(T)&&w_.length>0){m();let V0=t7(s_.current,T.key);s_.current=V0;let f0=e7(w_,V0.value,Z_,(N_)=>N_.label);if(f0>=0)L_(f0);return!0}}return!1},[j,d,G0,I0,J0,w_,Z_,m8]),FB=(T)=>{if(T.isComposing)return;if(j&&T.key==="Escape"){T.preventDefault(),b0(""),q?.();return}if(C5(T))return;let m=__.current?.value??(j?p0:c0);if(pY(T,m,{searchMode:j,showSessionSwitcherButton:X$})){T.preventDefault(),U0();return}if(g0&&M_.length>0){let n=__.current?.value??(j?p0:c0);if(!String(n||"").match(/^@([a-zA-Z0-9_-]*)$/))v0(!1),$0([]);else{if(T.key==="ArrowDown"){T.preventDefault(),k0((V0)=>(V0+1)%M_.length);return}if(T.key==="ArrowUp"){T.preventDefault(),k0((V0)=>(V0-1+M_.length)%M_.length);return}if(T.key==="Tab"||T.key==="Enter"){T.preventDefault(),u0(M_[z0]);return}if(T.key==="Escape"){T.preventDefault(),v0(!1),$0([]);return}}}if(V_&&w0.length>0){let n=__.current?.value??(j?p0:c0);if(!String(n||"").startsWith("/"))X_(!1),C0([]);else{if(T.key==="ArrowDown"){T.preventDefault(),A_((V0)=>(V0+1)%w0.length);return}if(T.key==="ArrowUp"){T.preventDefault(),A_((V0)=>(V0-1+w0.length)%w0.length);return}if(T.key==="Tab"){T.preventDefault(),K0(w0[U_]);return}if(T.key==="Enter"&&!T.shiftKey){if(!m.includes(" ")){T.preventDefault();let f0=w0[U_];X_(!1),C0([]),g4(f0.name);return}}if(T.key==="Escape"){T.preventDefault(),X_(!1),C0([]);return}}}if(!j&&(T.key==="ArrowUp"||T.key==="ArrowDown")&&!T.metaKey&&!T.ctrlKey&&!T.altKey&&!T.shiftKey){let n=__.current;if(!n)return;let V0=n.value||"",f0=n.selectionStart===0&&n.selectionEnd===0,N_=n.selectionStart===V0.length&&n.selectionEnd===V0.length;if(T.key==="ArrowUp"&&f0||T.key==="ArrowDown"&&N_){let h_=R1.current;if(!h_.length)return;T.preventDefault();let c_=S1.current;if(T.key==="ArrowUp"){if(c_===-1)a1.current=V0,c_=h_.length-1;else if(c_>0)c_-=1;S1.current=c_,y$(h_[c_]||"")}else{if(c_===-1)return;if(c_<h_.length-1)c_+=1,S1.current=c_,y$(h_[c_]||"");else S1.current=-1,y$(a1.current||""),a1.current=""}requestAnimationFrame(()=>{let u1=__.current;if(!u1)return;let U1=u1.value.length;u1.selectionStart=U1,u1.selectionEnd=U1});return}}if(T.key==="Enter"&&!T.shiftKey&&(T.ctrlKey||T.metaKey)){if(T.preventDefault(),j){if(m.trim())Z?.(m.trim(),G,{images:d0,attachments:E_})}else g4(m,"steer");return}if(T.key==="Enter"&&!T.shiftKey){if(T.preventDefault(),j){if(m.trim())Z?.(m.trim(),G,{images:d0,attachments:E_})}else g4(m);return}if(T.key==="Escape"){if(d||G0||V_||g0)return;T.preventDefault(),__.current?.blur()}},c8=(T)=>{let m=Array.from(T||[]).filter((n)=>n instanceof File&&!String(n.name||"").startsWith(".DS_Store"));if(!m.length)return;q_((n)=>[...n,...m]),i0(null)},BB=(T)=>{c8(T.target.files),T.target.value=""},NB=(T)=>{if(j)return;T.preventDefault(),T.stopPropagation(),N1.current+=1,F0(!0)},UB=(T)=>{if(j)return;if(T.preventDefault(),T.stopPropagation(),N1.current=Math.max(0,N1.current-1),N1.current===0)F0(!1)},HB=(T)=>{if(j)return;if(T.preventDefault(),T.stopPropagation(),T.dataTransfer)T.dataTransfer.dropEffect="copy";F0(!0)},EB=(T)=>{if(j)return;T.preventDefault(),T.stopPropagation(),N1.current=0,F0(!1),c8(T.dataTransfer?.files||[])},DB=(T)=>{if(j)return;let m=T.clipboardData?.items;if(!m||!m.length)return;let n=[];for(let V0 of m){if(V0.kind!=="file")continue;let f0=V0.getAsFile?.();if(f0)n.push(f0)}if(n.length>0)T.preventDefault(),c8(n)},WB=(T)=>{q_((m)=>m.filter((n,V0)=>V0!==T))},OB=()=>{i0(null),q_([]),Q?.(),B?.()},zB=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((T)=>{let{latitude:m,longitude:n,accuracy:V0}=T.coords,f0=`${m.toFixed(5)}, ${n.toFixed(5)}`,N_=Number.isFinite(V0)?` ±${Math.round(V0)}m`:"",h_=`https://maps.google.com/?q=${m},${n}`,c_=`Location: ${f0}${N_} ${h_}`;jB(c_)},(T)=>{let m=T?.message||"Unable to retrieve location.";alert(`Location error: ${m}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};g(()=>{if(!d)return;s_.current={value:"",updatedAt:0},B_(!0),D4(t).then((T)=>{t0($q(T)),p(T)}).catch((T)=>{console.warn("Failed to load model list:",T),t0([])}).finally(()=>{B_(!1)})},[d,U]),g(()=>{if(j)Y0(!1),E0(!1),X_(!1),C0([]),v0(!1),$0([])},[j]),g(()=>{if(G0&&!X$)E0(!1)},[G0,X$]),g(()=>{if(!d)return;let T=I0.findIndex((m)=>m?.label===U);R0(T>=0?T:0)},[d,I0,U]),g(()=>{if(!G0)return;L_(kW(w_,t)),s_.current={value:"",updatedAt:0}},[G0,t,w_]),g(()=>{if(!d)return;let T=(m)=>{let n=L1.current,V0=M1.current,f0=m.target;if(n&&n.contains(f0))return;if(V0&&V0.contains(f0))return;Y0(!1)};return document.addEventListener("pointerdown",T),()=>document.removeEventListener("pointerdown",T)},[d]),g(()=>{if(!G0)return;let T=(m)=>{let n=o1.current,V0=W$.current,f0=m.target;if(n&&n.contains(f0))return;if(V0&&V0.contains(f0))return;E0(!1)};return document.addEventListener("pointerdown",T),()=>document.removeEventListener("pointerdown",T)},[G0]),g(()=>{if(j||!d&&!G0)return;let T=(m)=>{C5(m)};return document.addEventListener("keydown",T,!0),()=>document.removeEventListener("keydown",T,!0)},[j,d,G0,C5]),g(()=>{if(!d)return;let T=L1.current;T?.focus?.(),T?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[d,J0,I0]),g(()=>{if(!G0)return;let T=o1.current;T?.focus?.(),T?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[G0,Z_,w_.length]),g(()=>{if(!g0||!i_.current)return;i_.current.querySelector?.(".slash-item.active")?.scrollIntoView?.({block:"nearest"})},[g0,z0,M_.length]),g(()=>{if(!V_||!v_.current)return;v_.current.querySelector?.(".slash-item.active")?.scrollIntoView?.({block:"nearest"})},[V_,U_,w0.length]),g(()=>{let T=(n)=>{if(!n||typeof n!=="object")return!1;if(n.isContentEditable)return!0;if(typeof n.closest!=="function")return!1;return Boolean(n.closest('input, textarea, select, [contenteditable="true"], .compose-box, .compose-model-popup, .compose-session-popup, .settings-dialog, .workspace-sidebar, .editor-pane-container, .dock-panel, .timeline-menu-dropdown, .rename-branch-overlay, .agent-request-modal, .attachment-preview-modal, .vnc-pane-shell, .kanban-plugin, .mindmap-editor, .timeline-quick-actions'))},m=(n)=>{if(n.ctrlKey||n.metaKey||n.altKey)return;let V0=__.current;if(!V0)return;let f0=document.activeElement===V0;if(n.key==="Escape"&&!f0&&!T(n.target)){n.preventDefault(),V0.focus();return}if(n.key==="/"&&!f0&&!T(n.target))n.preventDefault(),y$("/"),requestAnimationFrame(()=>{V0.focus(),V0.selectionStart=1,V0.selectionEnd=1,B0("/")})};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[]),g(()=>{let T=()=>{let N_=F1.current?.clientWidth||0;W0((h_)=>h_===N_?h_:N_)};T();let m=F1.current,n=0,V0=()=>{if(n)cancelAnimationFrame(n);n=requestAnimationFrame(()=>{n=0,T()})},f0=null;if(m&&typeof ResizeObserver<"u")f0=new ResizeObserver(()=>V0()),f0.observe(m);if(typeof window<"u")window.addEventListener("resize",V0);return()=>{if(n)cancelAnimationFrame(n);if(f0?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",V0)}},[j,U,R_?.agent_name,X$,z?.percent]);let JB=(T)=>{let m=T.target.value;if(r_.current&&T?.isTrusted)x$();if(i0(null),z_(null),J_.kind==="guidance"||J_.kind==="error")g1();if(G0)E0(!1);if(i(T.target),j9(m,{searchMode:j,showSessionSwitcherButton:X$})){y$(""),requestAnimationFrame(()=>{let n=__.current;if(!n)return;n.value="",n.selectionStart=0,n.selectionEnd=0,n.focus()}),U0();return}y$(m)};return g(()=>{requestAnimationFrame(()=>i())},[c0,p0,j]),g(()=>{if(!j)return;if(r_.current)x$();return},[j,x$]),g(()=>{if(r_.current)x$();g1()},[t,g1,x$]),g(()=>{return()=>{if(!r_.current)return;try{r_.current.stop()}catch(T){console.debug("[compose] failed to stop speech recognition during cleanup",T)}r_.current=null}},[]),g(()=>{if(!z1)return;b_(Date.now());let T=setInterval(()=>b_(Date.now()),1000);return()=>clearInterval(T)},[z1,l0?.started_at,l0?.startedAt]),g(()=>{if(q1(0),Z1?.mode!=="custom"||!Array.isArray(Z1.frames)||Z1.frames.length<=1)return;let T=typeof Z1.intervalMs==="number"&&Number.isFinite(Z1.intervalMs)&&Z1.intervalMs>0?Z1.intervalMs:120,m=setInterval(()=>{q1((n)=>(n+1)%Z1.frames.length)},T);return()=>clearInterval(m)},[Z1]),g(()=>{if(j)return;T0(c0)},[T5,t,c0,j]),N`
        <div class="compose-box" data-testid="compose-box">
            ${J5&&N`
                <div class=${`compose-inline-status compose-speech-status compose-speech-status-${J_.kind}`} role="status" aria-live="polite">
                    <div class="compose-inline-status-row">
                        <span class=${n2({pulsing:A5})} aria-hidden="true"></span>
                        <span class="compose-inline-status-title">${J_.title}</span>
                    </div>
                    ${J_.detail&&N`<div class="compose-inline-status-detail">${J_.detail}</div>`}
                </div>
            `}
            ${m0&&!j&&N`
                <${V9}
                    items=${P}
                    onInjectQueuedFollowup=${VB}
                    onRemoveQueuedFollowup=${v}
                    onMoveQueuedFollowup=${c}
                    onReturnQueuedFollowup=${QB}
                    onOpenFilePill=${x}
                />
            `}
            ${e1.visible&&N`
                <div class="compose-inline-status extension-working" role="status" aria-live="polite">
                    <div class="compose-inline-status-row">
                        ${e1.indicatorText?N`<span class="compose-inline-status-glyph" aria-hidden="true">${e1.indicatorText}</span>`:e1.animateDot?N`<span class=${n2({pulsing:!0})} aria-hidden="true"></span>`:null}
                        <span class="compose-inline-status-title">${e1.title}</span>
                    </div>
                </div>
            `}
            ${l0&&!z1&&N`
                <div
                    class="compose-inline-status"
                    role="status"
                    aria-live="polite"
                    title=${T1||""}
                >
                    <div class="compose-inline-status-row">
                        <span class=${n2({pulsing:!1})} aria-hidden="true"></span>
                        <span class="compose-inline-status-title">${A$}</span>
                        ${k$&&N`<span class="compose-inline-status-elapsed">${k$}</span>`}
                    </div>
                    ${T1&&N`<div class="compose-inline-status-detail">${T1}</div>`}
                </div>
            `}
            ${f_&&N`
                <div class="compose-inline-status compose-command-notice" role="status" aria-live="polite">
                    <div class="compose-inline-status-detail compose-command-notice-text" dangerouslySetInnerHTML=${{__html:e_(f_)}}></div>
                </div>
            `}
            <div
                class=${`compose-input-wrapper${O_?" drag-active":""}`}
                onDragEnter=${NB}
                onDragOver=${HB}
                onDragLeave=${UB}
                onDrop=${EB}
            >
                <div class="compose-input-main">
                    ${w5&&N`
                        <div class="compose-file-refs">
                            ${V.map((T)=>{return N`
                                    <${k1}
                                        key=${"msg-"+T}
                                        prefix="compose"
                                        label=${"msg:"+T}
                                        title=${"Message reference: "+T}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>F?.(T)}
                                    />
                                `})}
                            ${L.map((T)=>{let m=T.split("/").pop()||T;return N`
                                    <${k1}
                                        prefix="compose"
                                        label=${m}
                                        title=${T}
                                        onClick=${()=>x?.(T)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>K?.(T)}
                                    />
                                `})}
                            ${r0.map((T,m)=>{let n=T?.name||`attachment-${m+1}`;return N`
                                    <${k1}
                                        key=${n+m}
                                        prefix="compose"
                                        label=${n}
                                        title=${n}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>WB(m)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${OB}
                                title="Clear all attachments and references"
                                aria-label="Clear all attachments and references"
                            >
                                Clear all
                            </button>
                        </div>
                    `}
                    <textarea
                        ref=${__}
                        data-testid="compose-input"
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?p0:c0}
                        onInput=${JB}
                        onKeyDown=${FB}
                        onPaste=${DB}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${g0&&M_.length>0&&N`
                        <div class="slash-autocomplete" ref=${i_}>
                            ${M_.map((T,m)=>N`
                                <div
                                    key=${T.chat_jid||T.agent_name}
                                    class=${`slash-item${m===z0?" active":""}`}
                                    onMouseDown=${(n)=>{n.preventDefault(),u0(T)}}
                                    onMouseEnter=${()=>k0(m)}
                                >
                                    <span class="slash-name">@${T.agent_name}</span>
                                    <span class="slash-desc">${T.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${V_&&w0.length>0&&N`
                        <div class="slash-autocomplete" ref=${v_}>
                            ${w0.map((T,m)=>N`
                                <div
                                    key=${T.name}
                                    class=${`slash-item${m===U_?" active":""}`}
                                    onMouseDown=${(n)=>{n.preventDefault(),K0(T)}}
                                    onMouseEnter=${()=>A_(m)}
                                >
                                    <span class="slash-name">${T.name}</span>
                                    <span class="slash-desc">${T.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${d&&!j&&N`
                        <div class="compose-model-popup" ref=${L1} tabIndex="-1" onKeyDown=${C5}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${$_&&N`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!$_&&I0.length===0&&N`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!$_&&I0.map((T,m)=>{let n=typeof T?.label==="string"?T.label:"",V0=K9(T?.contextWindow),f0=T?.name||null,N_=tY(T,z);return N`
                                        <button
                                            key=${n}
                                            type="button"
                                            role="menuitem"
                                            class=${`compose-model-popup-item compose-model-popup-model-item${J0===m?" active":""}${U===n?" current-model":""}${N_.blocked?" context-blocked":""}`}
                                            onClick=${()=>{m8(T)}}
                                            disabled=${e||N_.blocked}
                                            title=${[n,f0,V0,N_.title].filter(Boolean).join(" • ")}
                                        >
                                            <span class="compose-model-popup-model-stack">
                                                <span class="compose-model-popup-model-label">${CW(n,T?.contextWindow)}${f0?N` <span class="compose-model-popup-model-subtitle">${f0}</span>`:""}</span>
                                                ${N_.blocked&&N`<span class="compose-model-popup-model-note">${N_.note}</span>`}
                                            </span>
                                        </button>
                                    `})}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{XB()}}
                                    disabled=${e}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${G0&&!j&&N`
                        <div class="compose-model-popup" data-testid="session-popup" ref=${o1} tabIndex="-1" onKeyDown=${C5}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${!j$&&N`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${j$&&R4.map((T,m)=>{let n=Boolean(T.archived_at),V0=T.chat_jid===(T.root_chat_jid||T.chat_jid),f0=!V0&&!T.is_active&&!n&&typeof j0==="function",N_=n&&y6,h_=h2(T,{currentChatJid:t});return N`
                                        <div key=${T.chat_jid} class=${`compose-model-popup-item-row${n?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item session-item${n?" archived":""}${Z_===m?" active":""}`}
                                                data-testid="session-item"
                                                onClick=${()=>{if(n){a_(T.chat_jid);return}l_(T.chat_jid)}}
                                                disabled=${n?!T$:!w$}
                                                title=${n?`Restore archived ${`@${T.agent_name}`}`:`Switch to ${`@${T.agent_name}`}`}
                                            >
                                                <span style=${AW(T)?"font-weight:700":""}>${h_}</span>
                                            </button>
                                            <button
                                                type="button"
                                                class="compose-model-popup-item-popout"
                                                title=${`Open @${T.agent_name} in new window`}
                                                aria-label=${`Open @${T.agent_name} in new window`}
                                                onClick=${(c_)=>{c_.stopPropagation(),E0(!1);let u1=new URL(window.location.href);u1.searchParams.set("chat_jid",T.chat_jid),u1.searchParams.set("chat_only","1");let U1=document.createElement("a");U1.href=u1.toString(),U1.target="_blank",U1.rel="noopener",U1.style.display="none",document.body.appendChild(U1),U1.click(),U1.remove()}}
                                            >
                                                <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M6 2h8v8"/>
                                                    <path d="M14 2 7 9"/>
                                                    <path d="M12 9v5H2V4h5"/>
                                                </svg>
                                            </button>
                                            ${(f0||N_)&&N`
                                                <button
                                                    type="button"
                                                    class="compose-model-popup-item-delete"
                                                    title=${N_?V0?"Permanently delete this archived session":"Permanently delete this archived branch":"Delete this branch"}
                                                    aria-label=${N_?V0?`Permanently delete archived session @${T.agent_name}`:`Permanently delete archived branch @${T.agent_name}`:`Delete @${T.agent_name}`}
                                                    onClick=${(c_)=>{if(c_.stopPropagation(),E0(!1),N_){O0?.(T.chat_jid);return}j0(T.chat_jid)}}
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
                            ${(G$||_4||x1||Z$)&&N`
                                <div class="compose-model-popup-actions">
                                    ${G$&&N`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn primary${w_.findIndex((T)=>T.key==="action:new")===Z_?" active":""}`}
                                            onClick=${()=>{Dj()}}
                                            title="Create a new branch from this chat"
                                        >
                                            New branch
                                        </button>
                                    `}
                                    ${_4&&N`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${w_.findIndex((T)=>T.key==="action:new-root")===Z_?" active":""}`}
                                            onClick=${()=>{Wj()}}
                                            title="Create a clean root session such as web:ops"
                                        >
                                            New root…
                                        </button>
                                    `}
                                    ${y1?.chat_jid&&N`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${w_.findIndex((T)=>T.key==="action:rollup")===Z_?" active":""}`}
                                            onClick=${()=>{Oj()}}
                                            title=${$4?`Merge this branch into ${y1.agent_name?`@${y1.agent_name}`:y1.chat_jid}`:"This branch cannot be merged while active or while it has children"}
                                            disabled=${!$4}
                                        >
                                            Merge current w/ parent
                                        </button>
                                    `}
                                    ${x1&&N`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${w_.findIndex((T)=>T.key==="action:rename")===Z_?" active":""}`}
                                            onClick=${(T)=>{u8(T)}}
                                            title="Rename the current session"
                                            disabled=${S4}
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${Z$&&N`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn danger${w_.findIndex((T)=>T.key==="action:delete")===Z_?" active":""}`}
                                            onClick=${()=>{zj()}}
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
                <div class="compose-footer" ref=${F1}>
                    ${l&&N`
                    <div class="compose-meta-row">
                        ${y5&&N`
                            <div class="compose-model-meta">
                                <button
                                    ref=${M1}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${S}
                                    aria-label="Open model picker"
                                    onClick=${qB}
                                    disabled=${e}
                                >
                                    ${e?"Switching…":x5}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!e&&f6&&N`
                                        <span class="compose-model-usage-hint" title=${S}>
                                            ${f6}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                        ${!j&&z&&z.percent!=null&&N`
                            <${xW}
                                usage=${z}
                                onCompact=${LB}
                                compactionLabel=${z1?k$||"0:00":""}
                                compactionTitle=${z1?A$||"Smart compaction":""}
                            />
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${X$&&N`
                        <div
                            ref=${W$}
                            class="compose-session-trigger-group"
                        >
                            ${R_?.agent_name&&N`
                                <button
                                    type="button"
                                    class=${`compose-session-trigger compose-session-trigger-pill${G0?" active":""}`}
                                    data-testid="session-switcher"
                                    onClick=${o0}
                                    title=${R_?.chat_jid||t}
                                    aria-label=${`Manage sessions for @${R_.agent_name}`}
                                    aria-expanded=${G0?"true":"false"}
                                >
                                    <span class="compose-current-agent-label active">@${R_.agent_name}</span>
                                </button>
                            `}
                            <button
                                type="button"
                                class=${`compose-session-trigger compose-session-trigger-icon-btn${G0?" active":""}`}
                                data-testid="session-switcher"
                                onClick=${o0}
                                title=${R_?.chat_jid||t}
                                aria-label=${R_?.agent_name?`Manage sessions for @${R_.agent_name}`:"Manage Sessions/Agents"}
                                aria-expanded=${G0?"true":"false"}
                            >
                                <span class="compose-session-trigger-icon" aria-hidden="true">
                                    <svg class="compose-mention-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" focusable="false">
                                        <circle cx="12" cy="12" r="4.25" />
                                        <path d="M16.25 7.75v5.4a2.1 2.1 0 0 0 4.2 0V12a8.45 8.45 0 1 0-4.2 7.33" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    `}
                    ${j&&N`
                        <label class="compose-search-scope-wrap" title="Search scope">
                            <span class="compose-search-scope-label">Scope</span>
                            <select
                                class="compose-search-scope-select"
                                value=${G}
                                onChange=${(T)=>X?.(T.currentTarget.value)}
                            >
                                <option value="current">Current</option>
                                <option value="root">Branch family</option>
                                <option value="all">All chats</option>
                            </select>
                        </label>
                        <label class="compose-search-filter-wrap" title="Only show messages with images">
                            <input type="checkbox" checked=${d0} onChange=${()=>H_((T)=>!T)} />
                            <span class="compose-search-filter-label">Images</span>
                        </label>
                        <label class="compose-search-filter-wrap" title="Only show messages with attachments">
                            <input type="checkbox" checked=${E_} onChange=${()=>K_((T)=>!T)} />
                            <span class="compose-search-filter-label">Attachments</span>
                        </label>
                        <button
                            class=${`compose-search-match-toggle ${S0==="and"?"active":""}`}
                            onClick=${()=>{let T=S0==="or"?"and":"or";A0(T),fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({searchMatchMode:T})}).catch((m)=>{})}}
                            title=${S0==="or"?"Any keyword (OR) — click for all keywords (AND)":"All keywords (AND) — click for any keyword (OR)"}
                            type="button"
                        >
                            ${S0==="or"?"OR":"AND"}
                        </button>
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${j?q:Y}
                        title=${j?"Close search":"Search"}
                    >
                        ${j?N`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 6L6 18M6 6l12 12"/>
                            </svg>
                        `:N`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"/>
                                <path d="M21 21l-4.35-4.35"/>
                            </svg>
                        `}
                    </button>
                    ${P_&&!j&&N`
                        <button
                            class="icon-btn location-btn"
                            onClick=${zB}
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
                    ${I4&&N`
                        <button
                            class=${`icon-btn voice-input-btn${t$?" active":""}${x_.mode==="fallback"?" fallback":""}`}
                            onClick=${GB}
                            title=${G1}
                            aria-label=${G1}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3z" />
                                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                                <path d="M12 19v3" />
                            </svg>
                        </button>
                    `}
                    ${M5&&!j&&N`
                        <button
                            class=${`icon-btn notification-btn${C4?" active":""}`}
                            onClick=${A}
                            title=${e$}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&N`
                        ${W&&w&&N`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${w}
                                title=${`Attach open file: ${W}`}
                                type="button"
                                disabled=${L.includes(W)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach file">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" multiple hidden onChange=${BB} />
                        </label>
                    `}
                    ${(q0!=="connected"||!j)&&N`
                        <div class="compose-send-stack">
                            ${q0!=="connected"&&N`
                                <span class="compose-connection-status connection-status ${_$.statusClass}" title=${X1}>
                                    ${f4}
                                </span>
                            `}
                            ${!j&&N`
                                <button 
                                    class=${M$.className}
                                    data-testid="send-button"
                                    type="button"
                                    onClick=${()=>{g4()}}
                                    disabled=${M$.disabled}
                                    title=${M$.title}
                                    aria-label=${M$.ariaLabel}
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                                </button>
                                ${$$&&N`
                                    <button 
                                        class=${$$.className}
                                        data-testid="stop-button"
                                        type="button"
                                        onClick=${()=>{if(TW($$.mode))g4("/abort","steer",{clearAfterSubmit:!1,includeMedia:!1,includeFileRefs:!1,includeMessageRefs:!1,recordHistory:!1})}}
                                        disabled=${$$.disabled}
                                        title=${$$.title}
                                        aria-label=${$$.ariaLabel}
                                    >
                                        ${$$.mode==="compacting"?N`
                                                <span class="compose-submit-spinner" aria-hidden="true">
                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                                        <circle class="compose-submit-spinner-ring" cx="12" cy="12" r="10.5" stroke-width="2.25" stroke-linecap="round"></circle>
                                                        <rect class="compose-submit-spinner-stop" x="6" y="6" width="12" height="12" rx="0" fill="currentColor"></rect>
                                                    </svg>
                                                </span>
                                            `:N`<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="4" width="16" height="16" rx="2.5"/></svg>`}
                                    </button>
                                `}
                            `}
                        </div>
                    `}
                </div>
            </div>
        </div>
        </div>
    `}x0();function Zq({kind:_="hidden",onSetupProvider:$,onDismiss:j}){if(_==="hidden")return null;let G=_==="provider-missing",Z=G?"Instance needs setup":"Instance is configured",X=G?"This instance is not yet configured. Open Settings and set up AI providers/models to start sending requests.":"This instance looks configured. Review or update provider and model settings in Settings.";return N`
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
  `}x0();function Xq(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function Yq(_){return String(_||"").trim()||"web:default"}function qq(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function Lq(_){if(!_)return!1;return _.status!=="running"}function Kq(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function Vq({session:_,onClose:$,onInject:j,onRetry:G}){let Z=u(null),X=u(null),Y=_?.thinking?h5(_.thinking):"",q=_?.answer?e_(_.answer,null):"";if(g(()=>{if(Z.current&&Y)B$(Z.current).catch((D)=>{console.debug("[btw-panel] Mermaid rendering failed for BTW thinking content.",D)})},[Y]),g(()=>{if(X.current&&q)B$(X.current).catch((D)=>{console.debug("[btw-panel] Mermaid rendering failed for BTW answer content.",D)})},[q]),!_)return null;let L=_.status==="running",K=Boolean(String(_.answer||"").trim()),Q=Boolean(String(_.thinking||"").trim()),V=qq(_),F=Lq(_),B=!L&&K,U=L?"Thinking…":_.status==="error"?"Error":"Done";return N`
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

            ${_.question&&N`<div class="btw-block btw-question">${_.question}</div>`}
            ${_.error&&N`<div class="btw-block btw-error">${_.error}</div>`}
            ${Q&&N`
                <details class="btw-block btw-thinking" open=${L?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${Z}
                        dangerouslySetInnerHTML=${{__html:Y}}
                    ></div>
                </details>
            `}
            ${V&&N`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${X}
                        dangerouslySetInnerHTML=${{__html:q}}
                    ></div>
                </div>
            `}

            ${F&&N`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&N`
                            <button class="btw-btn btw-btn-secondary" onClick=${()=>G?.()}>
                                Retry
                            </button>
                        `}
                    </div>
                    <div class="btw-panel-footer-right">
                        <button class="btw-btn btw-btn-primary" onClick=${()=>j?.()} disabled=${!B}>
                            Inject into chat
                        </button>
                    </div>
                </div>
            `}
        </section>
    `}x0();function Q9(_,$){try{if(_)_.name=$;return!0}catch(j){return!1}}function F9(_,$){try{return _?.contentWindow?.postMessage?.($,"*"),!0}catch(j){return!1}}function hW(_){let $=_?.artifact||{},j=$.kind||_?.kind||null;if(j!=="html"&&j!=="svg"&&j!=="session_tree")return null;if(j==="html"){let Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"";return Z?{kind:j,html:Z}:null}if(j==="svg"){let Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"";return Z?{kind:j,svg:Z}:null}let G=$.tree&&typeof $.tree==="object"?$.tree:_?.tree&&typeof _.tree==="object"?_.tree:null;return{kind:j,tree:G}}function pW(_){let $=_?.artifact&&typeof _.artifact==="object"?_.artifact:{},j=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",G=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:typeof _?.w==="string"?_.w:typeof _?.content==="string"?_.content:"",Z=$.tree&&typeof $.tree==="object"?$.tree:_?.tree&&typeof _.tree==="object"?_.tree:null,X=$.kind||_?.kind||null,Y=X==="session_tree"?"session_tree":X==="svg"||j?"svg":"html";if(Y==="session_tree")return{kind:Y,tree:Z};if(Y==="svg")return j?{kind:Y,svg:j}:{kind:Y};return G?{kind:Y,html:G}:{kind:Y}}function n$(_){return typeof _==="number"&&Number.isFinite(_)?_:null}function j_(_){return typeof _==="string"&&_.trim()?_.trim():null}function Fq(_,$=!1){let G=(Array.isArray(_)?_:$?["interactive"]:[]).filter((Z)=>typeof Z==="string").map((Z)=>Z.trim().toLowerCase()).filter(Boolean);return Array.from(new Set(G))}var Bq="__PICLAW_WIDGET_HOST__:";function Qq(_){return JSON.stringify(_).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function B9(_,$){if(!_||_.type!=="generated_widget")return null;let j=hW(_);if(!j)return null;return{title:_.title||_.name||"Generated widget",subtitle:typeof _.subtitle==="string"?_.subtitle:"",description:_.description||_.subtitle||"",originPostId:Number.isFinite($?.id)?$.id:null,originChatJid:typeof $?.chat_jid==="string"?$.chat_jid:null,widgetId:_.widget_id||_.id||null,artifact:j,capabilities:Fq(_.capabilities,_.interactive===!0),source:"timeline",status:"final"}}function Nq(_){if(!_||typeof _!=="object")return null;let $=pW(_),j=j_(_?.widget_id)||j_(_?.widgetId)||j_(_?.tool_call_id)||j_(_?.toolCallId),G=j_(_?.tool_call_id)||j_(_?.toolCallId),Z=j_(_?.turn_id)||j_(_?.turnId),X=j_(_?.title)||j_(_?.name)||"Generated widget",Y=j_(_?.subtitle)||"",q=j_(_?.description)||Y,L=j_(_?.status),K=L==="loading"||L==="streaming"||L==="final"||L==="error"?L:"streaming";return{title:X,subtitle:Y,description:q,originPostId:n$(_?.origin_post_id)??n$(_?.originPostId),originChatJid:j_(_?.origin_chat_jid)||j_(_?.originChatJid)||j_(_?.chat_jid)||null,widgetId:j,artifact:$,capabilities:Fq(_?.capabilities,!0),source:"live",status:K,turnId:Z,toolCallId:G,width:n$(_?.width),height:n$(_?.height),error:j_(_?.error)}}function Uq(_){return B9(_,null)!==null}function W1(_){let $=j_(_?.toolCallId)||j_(_?.tool_call_id);if($)return $;let j=j_(_?.widgetId)||j_(_?.widget_id);if(j)return j;let G=n$(_?.originPostId)??n$(_?.origin_post_id);if(G!==null)return`post:${G}`;return null}function Hq(_){let j=(_?.artifact||{}).kind||_?.kind||null,Z=(Array.isArray(_?.capabilities)?_.capabilities:[]).some((X)=>typeof X==="string"&&X.trim().toLowerCase()==="interactive");return j==="html"&&(_?.source==="live"||Z)}function Eq(_){return Hq(_)?"allow-downloads allow-scripts allow-same-origin":"allow-downloads"}function i2(_){return{title:j_(_?.title)||"Generated widget",widgetId:j_(_?.widgetId)||j_(_?.widget_id),toolCallId:j_(_?.toolCallId)||j_(_?.tool_call_id),turnId:j_(_?.turnId)||j_(_?.turn_id),capabilities:Array.isArray(_?.capabilities)?_.capabilities:[],source:_?.source==="live"?"live":"timeline",status:j_(_?.status)||"final"}}function o2(_){return{...i2(_),subtitle:j_(_?.subtitle)||"",description:j_(_?.description)||"",error:j_(_?.error)||null,width:n$(_?.width),height:n$(_?.height),runtimeState:_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null}}function s2(_){return`${Bq}${JSON.stringify(o2(_))}`}function Dq(_){if(typeof _==="string"&&_.trim())return _.trim();if(!_||typeof _!=="object")return null;let $=j_(_.text)||j_(_.content)||j_(_.message)||j_(_.prompt)||j_(_.value);if($)return $;let j=_.data;if(typeof j==="string"&&j.trim())return j.trim();if(j&&typeof j==="object"){let G=j_(j.text)||j_(j.content)||j_(j.message)||j_(j.prompt)||j_(j.value);if(G)return G}return null}function Wq(_){if(!_||typeof _!=="object")return!1;return _.close===!0||_.dismiss===!0||_.closeAfterSubmit===!0}function Oq(_){let $=j_(_?.status);if($==="loading"||$==="streaming")return"Widget is loading…";if($==="error")return j_(_?.error)||"Widget failed to load.";if((_?.artifact?.kind||_?.kind)==="session_tree")return"Session tree widget is unavailable.";return"Widget artifact is missing or unsupported."}function nW(_){let $=i2(_);return`<script>
(function () {
  const meta = ${Qq($)};
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

  const windowNamePrefix = ${Qq(Bq)};
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
</script>`}function zq(_){let $=_?.artifact||{},j=$.kind||_?.kind||null,G=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"",Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",X=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",Y=j==="svg"?Z:G;if(!Y)return"";let q=Hq(_),L=["default-src 'none'","img-src data: blob: https: http:","style-src 'unsafe-inline'","font-src 'self' data: https: http:","media-src data: blob: https: http:","connect-src 'none'","frame-src 'none'",q?"script-src 'unsafe-inline' 'self'":"script-src 'none'","object-src 'none'","base-uri 'none'","form-action 'none'"].join("; "),K=j==="svg"?`<div class="widget-svg-shell">${Y}</div>`:Y,Q=q?nW(_):"";return`<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta http-equiv="Content-Security-Policy" content="${L}" />
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
</html>`}x0();function rW(_){let $=new Map,j=[];for(let Y of _||[])$.set(Y.id,{...Y,children:[],depth:0});for(let Y of _||[]){let q=$.get(Y.id);if(!q)continue;let L=Y.parentId?$.get(Y.parentId):null;if(L)L.children.push(q);else j.push(q)}let G=new Set;for(let[,Y]of $){if(Y.role!=="assistant"||!Y.toolName)continue;if(Y.children.length!==1)continue;let q=Y.children[0];if(q.role!=="toolResult")continue;Y.resultDetail=q.detail||null,Y.resultLength=q.contentLength||0,Y.resultId=q.id,Y.merged=!0,Y.children=q.children;for(let L of Y.children)L.parentId=Y.id;G.add(q.id)}let Z=j.filter((Y)=>!G.has(Y.id)),X=[];for(let Y=Z.length-1;Y>=0;Y--)Z[Y].depth=0,X.push(Z[Y]);while(X.length>0){let Y=X.pop(),q=Y.children.length>1;for(let L=Y.children.length-1;L>=0;L--)Y.children[L].depth=q?Y.depth+1:Y.depth,X.push(Y.children[L])}return Z}function dW(_){let $=[],j=[];for(let G=_.length-1;G>=0;G--)j.push(_[G]);while(j.length>0){let G=j.pop();$.push(G);for(let Z=G.children.length-1;Z>=0;Z--)j.push(G.children[Z])}return $}function Jq(_){if(!_||_<=0)return"";if(_<1000)return`${_}`;if(_<1e6)return`${(_/1000).toFixed(1)}k`;return`${(_/1e6).toFixed(1)}M`}function q5(_){if(!_||_<=0)return"";if(_<1000)return`${_} chars`;if(_<1e6)return`${(_/1000).toFixed(1)}k chars`;return`${(_/1e6).toFixed(1)}M chars`}function iW(_){let $=_.type;if($==="model_change")return{tag:"model",tagClass:"system",text:`${_.preview?.replace("[model ","").replace("]","")||""}`};if($==="thinking_level_change")return{tag:"thinking",tagClass:"system",text:_.preview?.replace("[thinking ","").replace("]","")||""};if($==="compaction")return{tag:"compaction",tagClass:"system",text:_.preview?.replace("[compaction: ","").replace("]","")||""};if($==="label")return{tag:"label",tagClass:"system",text:_.preview?.replace("[label ","").replace("]","")||""};if($==="session_info")return{tag:"session",tagClass:"system",text:_.preview?.replace("[session name ","").replace("]","")||""};if($==="branch_summary")return{tag:"summary",tagClass:"system",text:_.preview||""};if($!=="message")return{tag:$||"?",tagClass:"system",text:_.preview||""};let j=_.role||"message";if(_.merged&&_.toolName){let Z=(_.toolInput||"").split(`
`)[0],X=Z.length>120?Z.slice(0,119)+"…":Z;return{tag:_.toolName,tagClass:"tool",text:X||""}}if(j==="assistant"&&_.toolName){let Z=(_.toolInput||"").split(`
`)[0],X=Z.length>120?Z.slice(0,119)+"…":Z;return{tag:_.toolName,tagClass:"tool",text:X||"…"}}if(j==="toolResult"){let Z=(_.detail||"").split(`
`)[0],X=Z.length>120?Z.slice(0,119)+"…":Z;return{tag:`→ ${_.toolName||"result"}`,tagClass:"result",text:X}}if(j==="user"){let X=(_.previewText||_.detail||_.preview||"").replace(/^user:\s*"?/,"").replace(/"?\s*$/,"").split(`
`)[0];return{tag:"user",tagClass:"user",text:X.length>120?X.slice(0,119)+"…":X}}if(j==="assistant"){let X=(_.detail||_.preview||"").replace(/^assistant:\s*"?/,"").replace(/"?\s*$/,"").split(`
`)[0];return{tag:"assistant",tagClass:"assistant",text:X.length>120?X.slice(0,119)+"…":X}}return{tag:j,tagClass:"other",text:_.preview||""}}function oW(_,$=!1){let j=typeof _==="string"?_.trim():"";if(!j)return null;return{text:$?`/tree ${j} --summarize`:`/tree ${j}`,navigateTargetId:j,summarize:Boolean($)}}function Aq(_){let $=typeof _==="string"?_.trim():"";if(!$.startsWith("/tree"))return null;let j=$.split(/\s+/).filter(Boolean);if(j[0]!=="/tree")return null;let G=null,Z=!1;for(let X=1;X<j.length;X++){let Y=j[X];if(Y==="--summarize"){Z=!0;continue}if(!G&&!Y.startsWith("--"))G=Y}return G?{targetId:G,summarize:Z}:null}function sW(_,$,j,G){let Z=Array.isArray(_)?_:[];if(Z.length===0)return null;let X=(q)=>typeof q==="string"&&Z.some((L)=>L?.id===q);if(X($))return $;if(X(j))return j;if(X(G))return G;let Y=Z.find((q)=>q?.active);if(Y?.id)return Y.id;return Z[0]?.id||null}function aW(_){if(!_||typeof _!=="object")return null;let $=typeof _.type==="string"?_.type:"",j=typeof _.preview==="string"?_.preview.trim():"",G=typeof _.error==="string"?_.error.trim():"",Z=Aq(j),X=j||"tree command";if($==="submit_pending")return{tone:"pending",text:Z?`Sending ${X}`:"Sending tree command…",refreshDelays:[]};if($==="submit_sent")return{tone:"info",text:Z?`Running ${X}`:"Tree command sent.",refreshDelays:Z?[500,1500,3500,8000]:[]};if($==="submit_queued")return{tone:"info",text:Z?`Queued ${X}`:"Tree command queued.",refreshDelays:Z?[1200,3200,7000,12000]:[]};if($==="submit_failed")return{tone:"error",text:G?`Tree command failed: ${G}`:"Tree command failed.",refreshDelays:[]};if($==="refresh_building")return{tone:"pending",text:"Refreshing widget…",refreshDelays:[]};if($==="refresh_failed")return{tone:"error",text:G?`Refresh failed: ${G}`:"Refresh failed.",refreshDelays:[]};if($==="refresh_dashboard"||$==="refresh_ack")return{tone:"success",text:"Widget refreshed.",refreshDelays:[]};return null}function kq({widget:_,onWidgetEvent:$}){let j=_?.artifact?.tree&&typeof _.artifact.tree==="object"?_.artifact.tree:null,G=typeof _?.originChatJid==="string"&&_.originChatJid.trim()?_.originChatJid.trim():null,Z=_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null,X=Z?.lastHostUpdate&&typeof Z.lastHostUpdate==="object"?Z.lastHostUpdate:null,[Y,q]=C(()=>({loading:!j,error:null,data:j})),[L,K]=C(()=>j?.leafId||null),[Q,V]=C(""),F=u(null),B=u(null),U=u(j?.leafId||null),D=u(null),E=u(""),H=async()=>{q((J)=>({...J,loading:!0,error:null}));try{let J=G?`?chat_jid=${encodeURIComponent(G)}`:"",M=await fetch(`/agent/session-tree${J}`,{method:"GET",credentials:"same-origin",headers:{Accept:"application/json"}}),W=await M.json().catch(()=>({}));if(!M.ok)throw Error(W?.error||`HTTP ${M.status}`);q({loading:!1,error:null,data:W})}catch(J){q((M)=>({loading:!1,error:J?.message||"Failed to load tree.",data:M?.data||j||null}))}};D.current=H,g(()=>{H()},[G]);let k=X0(()=>{let J=Y.data;if(!J||!Array.isArray(J.nodes)||J.nodes.length===0)return[];return dW(J.flat?rW(J.nodes):J.nodes)},[Y.data]);g(()=>{let J=sW(k,L,U.current,Y.data?.leafId||null);if(J!==L)K(J);if(U.current&&Y.data?.leafId===U.current)U.current=null},[k,L,Y.data?.leafId]);let z=X0(()=>{let J=(Q||"").trim().toLowerCase();if(!J)return k;return k.filter((M)=>{return[M.preview,M.toolInput,M.toolInputFull,M.detail,M.toolName,M.role,M.id,M.resultDetail,M.type,M.label].some((w)=>typeof w==="string"&&w.toLowerCase().includes(J))})},[k,Q]),O=X0(()=>z.find((J)=>J.id===L)||null,[z,L]),y=X0(()=>aW(X),[X?.type,X?.preview,X?.error,X?.submittedAt]);g(()=>{if(B.current)B.current.scrollIntoView({block:"center",behavior:"auto"})},[L,Y.data?.leafId,z.length]),g(()=>{let J=Aq(X?.preview);if(J?.targetId)U.current=J.targetId;let M=y?.refreshDelays||[];if(!M.length)return;let W=[G||"",X?.type||"",X?.submittedAt||"",X?.preview||""].join("|");if(E.current===W)return;E.current=W;let w=M.map((x)=>setTimeout(()=>D.current?.(),x));return()=>w.forEach((x)=>clearTimeout(x))},[G,X?.type,X?.submittedAt,X?.preview,y?.refreshDelays]);let I=(J=!1)=>{let M=O?.id,W=oW(M,J);if(!W)return;U.current=W.navigateTargetId,$?.({kind:"widget.submit",payload:W},_)},A=y?.tone||"info";return N`
        <div class="session-tree-widget">
            <div class="session-tree-toolbar">
                <div class="session-tree-toolbar-left">
                    <button class="session-tree-btn" type="button" onClick=${()=>H()} disabled=${Y.loading}>${Y.loading?"Loading…":"Refresh"}</button>
                    <input ref=${F}
                        class="st-search-input" type="text" placeholder="Filter\u2026"
                        value=${Q}
                        onInput=${(J)=>V(J.currentTarget.value)}
                        onKeyDown=${(J)=>{if(J.key==="Escape")V(""),J.currentTarget.blur()}}
                    />
                    ${Q&&N`<span class="session-tree-meta">${z.length} match${z.length!==1?"es":""}</span>`}
                    ${Y.error&&N`<span class="session-tree-error-inline">${Y.error}</span>`}
                </div>
                <div class="session-tree-toolbar-right">
                    ${y?.text&&N`<span class=${`session-tree-host-update ${A}`}>${y.text}</span>`}
                    ${Y.data?.capped&&N`<span class="session-tree-meta">Showing ${Y.data?.nodes?.length||0} of ${Y.data?.total||0}</span>`}
                    ${G&&N`<span class="session-tree-meta">${G}</span>`}
                </div>
            </div>

            <div class="session-tree-content">
                <div class="session-tree-list" role="tree" aria-label="Session tree">
                    ${Y.loading&&z.length===0&&!Q&&N`<div class="session-tree-empty">Loading session tree\u2026</div>`}
                    ${!Y.loading&&z.length===0&&!Q&&N`<div class="session-tree-empty">Session tree is empty.</div>`}
                    ${!Y.loading&&z.length===0&&Q&&N`<div class="session-tree-empty">No entries match \u201c${Q}\u201d</div>`}
                    ${z.map((J)=>{let M=L===J.id,W=`st-row${J.active?" active":""}${M?" selected":""}`,w=(J.children||[]).length>1,x=iW(J);return N`
                            <button key=${J.id} ref=${J.active||M?B:null}
                                class=${W} type="button" role="treeitem" aria-selected=${M}
                                onClick=${()=>K(J.id)}>
                                <span class="st-indent" style=${`width:${(J.depth||0)*16+6}px`}></span>
                                <span class=${`st-dot${J.active?" active":w?" branch":""}`}></span>
                                <span class=${`st-tag ${x.tagClass}`}>${x.tag}</span>
                                <span class="st-text">${x.text}</span>
                                ${J.merged&&J.resultLength>0&&N`<span class="st-size">${Jq(J.resultLength)}</span>`}
                                ${!J.merged&&J.contentLength>3000&&N`<span class="st-size">${Jq(J.contentLength)}</span>`}
                                ${J.hasThinking&&N`<span class="st-badge thinking">\u{1F4AD}</span>`}
                                ${J.label&&N`<span class="st-label">${J.label}</span>`}
                                ${J.active&&N`<span class="st-active">\u25C0</span>`}
                            </button>
                        `})}
                </div>

                <aside class="session-tree-sidebar">
                    ${O?N`
                        <div class="st-side-section">
                            <div class="st-side-label">Entry</div>
                            <div class="st-side-mono">${O.id}${O.resultId?` → ${O.resultId}`:""}</div>
                        </div>
                        <div class="st-side-section">
                            <div class="st-side-label">Type</div>
                            <div class="st-side-value">${O.role||O.type||"entry"}${O.toolName?` → ${O.toolName}`:""}${O.merged?" (merged)":""}</div>
                        </div>
                        ${O.toolInputFull&&N`
                            <div class="st-side-section">
                                <div class="st-side-label">${O.toolName==="bash"?"Command":"Input"}</div>
                                <pre class="st-side-code">${O.toolInputFull}</pre>
                            </div>
                        `}
                        ${O.resultDetail&&N`
                            <div class="st-side-section">
                                <div class="st-side-label">Result${O.resultLength?` (${q5(O.resultLength)})`:""}</div>
                                <pre class="st-side-code">${O.resultDetail}</pre>
                            </div>
                        `}
                        ${O.detail&&!O.toolInput&&N`
                            <div class="st-side-section">
                                <div class="st-side-label">${O.role==="toolResult"?"Output":"Content"}${O.contentLength?` (${q5(O.contentLength)})`:""}</div>
                                <pre class="st-side-code">${O.detail}</pre>
                            </div>
                        `}
                        ${O.rawDetail&&N`
                            <div class="st-side-section">
                                <div class="st-side-label">Raw prompt${O.rawContentLength?` (${q5(O.rawContentLength)})`:""}</div>
                                <pre class="st-side-code">${O.rawDetail}</pre>
                            </div>
                        `}
                        ${O.timestamp&&N`
                            <div class="st-side-section">
                                <div class="st-side-label">Time</div>
                                <div class="st-side-value">${new Date(O.timestamp).toLocaleString()}</div>
                            </div>
                        `}
                        ${(O.contentLength>0||O.hasThinking)&&N`
                            <div class="st-side-section">
                                <div class="st-side-label">Size</div>
                                <div class="st-side-badges">
                                    ${O.contentLength>0&&N`<span class="st-pill">${q5(O.contentLength)} content</span>`}
                                    ${O.hasThinking&&N`<span class="st-pill thinking">${q5(O.thinkingLength)} thinking</span>`}
                                    ${O.merged&&O.resultLength>0&&N`<span class="st-pill">${q5(O.resultLength)} result</span>`}
                                </div>
                            </div>
                        `}
                        <div class="st-side-actions">
                            <button class="session-tree-btn primary" type="button" onClick=${()=>I(!1)}>Navigate here</button>
                            <button class="session-tree-btn" type="button" onClick=${()=>I(!0)}>Navigate + summarize</button>
                        </div>
                    `:N`<div class="session-tree-empty side">Select an entry to inspect.</div>`}
                </aside>
            </div>
        </div>
    `}function Mq({widget:_,onClose:$,onWidgetEvent:j}){let G=u(null),Z=u(!1),X=X0(()=>zq(_),[_?.artifact?.kind,_?.artifact?.html,_?.artifact?.svg,_?.widgetId,_?.toolCallId,_?.turnId,_?.title]);if(g(()=>{if(!_)return;let H=(k)=>{if(k.key==="Escape")$?.()};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[_,$]),g(()=>{Z.current=!1},[X]),g(()=>{if(!_)return;let H=G.current;if(!H)return;let k=(A)=>{let J=s2(_),M=A==="widget.init"?i2(_):o2(_);Q9(H,J),F9(H,{__piclawGeneratedWidgetHost:!0,type:A,widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:M})},z=()=>{k("widget.init"),k("widget.update")},O=()=>{Z.current=!0,z()};H.addEventListener("load",O);let I=[0,40,120,300,800].map((A)=>setTimeout(z,A));return()=>{H.removeEventListener("load",O),I.forEach((A)=>clearTimeout(A))}},[X,_?.widgetId,_?.toolCallId,_?.turnId]),g(()=>{if(!_)return;let H=G.current;if(!H?.contentWindow)return;let k=s2(_),z=o2(_);Q9(H,k),F9(H,{__piclawGeneratedWidgetHost:!0,type:"widget.update",widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:z});return},[_?.widgetId,_?.toolCallId,_?.turnId,_?.status,_?.subtitle,_?.description,_?.error,_?.width,_?.height,_?.runtimeState]),g(()=>{if(!_)return;let H=(k)=>{let z=k?.data;if(!z||z.__piclawGeneratedWidget!==!0)return;let O=G.current,y=W1(_),I=W1({widgetId:z.widgetId,toolCallId:z.toolCallId});if(I&&y&&I!==y)return;if(!I&&O?.contentWindow&&k.source!==O.contentWindow)return;j?.(z,_)};return window.addEventListener("message",H),()=>window.removeEventListener("message",H)},[_,j]),!_)return null;let q=(_?.artifact||{}).kind||_?.kind||"html",L=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",K=typeof _?.subtitle==="string"&&_.subtitle.trim()?_.subtitle.trim():"",Q=_?.source==="live"?"live":"timeline",V=typeof _?.status==="string"&&_.status.trim()?_.status.trim():"final",F=Q==="live"?`Live widget • ${V.toUpperCase()}`:_?.originPostId?`Message #${_.originPostId}`:"Timeline launch",B=typeof _?.description==="string"&&_.description.trim()?_.description.trim():"",U=!X,D=Oq(_),E=Eq(_);return N`
        <div class="floating-widget-backdrop" onClick=${()=>$?.()}>
            <section
                class="floating-widget-pane"
                aria-label=${L}
                onClick=${(H)=>H.stopPropagation()}
            >
                <div class="floating-widget-header">
                    <div class="floating-widget-heading">
                        <div class="floating-widget-eyebrow">${F} • ${q.toUpperCase()}</div>
                        <div class="floating-widget-title">${L}</div>
                        ${(K||B)&&N`
                            <div class="floating-widget-subtitle">${K||B}</div>
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
                    ${q==="session_tree"?N`<${kq} widget=${_} onWidgetEvent=${j} />`:U?N`<div class="floating-widget-empty">${D}</div>`:N`
                                <iframe
                                    ref=${G}
                                    class="floating-widget-frame"
                                    title=${L}
                                    name=${s2(_)}
                                    sandbox=${E}
                                    referrerpolicy="no-referrer"
                                    srcdoc=${X}
                                ></iframe>
                            `}
                </div>
            </section>
        </div>
    `}x0();w2();g_();G5();var tW=new Set,wq=new Set,N9=new Set,A4=new Map,Tq=!1,a2=null;function eW(_=typeof window<"u"?window:null){let $=typeof _?.__piclawCurrentChatJid==="string"?_.__piclawCurrentChatJid.trim():"";if($)return $;try{let j=_?.location?.href||"http://localhost/",G=new URL(j).searchParams.get("chat_jid")?.trim()||"";if(G)return G}catch(j){}return"web:default"}function _O(_,$){let j=typeof _==="string"?_.trim():"";if(!j)return null;try{return new URL(j,$).href}catch{return null}}function yq(_){if(!_||typeof _.id!=="string"||!_.id.trim())return!1;return Y_.register(_),tW.add(_.id),!0}function $O(_){return yq(_)}function jO(_){if(!_||typeof _.id!=="string"||!_.id.trim())return()=>{};return m$(_),wq.add(_.id),I7(),()=>{MX(_.id),wq.delete(_.id),I7()}}function GO(_){if(typeof _!=="function")return()=>{};return N9.add(_),()=>{N9.delete(_)}}function xq(_,$={}){let j=typeof _==="string"?_.trim():"";if(!j)return null;for(let G of[...N9].reverse())try{let Z=G(j,$);if(typeof Z==="string"&&Z.trim())return Z.trim()}catch(Z){console.warn("[addon-web] standalone tab URL resolver failed:",Z)}return null}function ZO(_){if(!_||typeof _.id!=="string"||!_.id.trim()||typeof _.match!=="function"||typeof _.buildFrameUrl!=="function")return()=>{};return A4.set(_.id,_),()=>{if(A4.get(_.id)===_)A4.delete(_.id)}}function t2(_,$){for(let j of Array.from(A4.values()).reverse())try{if(j.match(_,$))return j}catch(G){console.warn("[addon-web] attachment preview matcher failed:",G)}return null}function Iq(_){let $=typeof _==="string"?_.trim():"";if(!$)return null;return A4.get($)?.label||null}function Cq(_){let $=typeof _==="string"?_.trim():"";if(!$)return null;return A4.get($)?.note||null}function fq(_,$,j){let G=typeof _==="string"?_.trim():"";if(!G)return null;let Z=A4.get(G);if(!Z)return null;try{return Z.buildFrameUrl($,j)||null}catch(X){return console.warn("[addon-web] attachment preview URL builder failed:",X),null}}function XO(_=typeof window<"u"?window:null){return{registerPane:$O,registerWorkspacePane:yq,registerSettingsPane:jO,registerStandaloneTabUrlResolver:GO,registerAttachmentPreview:ZO,getCurrentChatJid:()=>eW(_)}}function U9(_=typeof window<"u"?window:null){let $=XO(_);if(!_||Tq)return $;return _.__piclaw_web=$,_.__piclaw_registerPane=$.registerPane,_.__piclaw_registerWorkspacePane=$.registerWorkspacePane,_.__piclaw_registerSettingsPane=$.registerSettingsPane,_.__piclaw_registerStandaloneTabUrlResolver=$.registerStandaloneTabUrlResolver,_.__piclaw_registerAttachmentPreview=$.registerAttachmentPreview,_.__piclawSettingsPaneRegistry={registerSettingsPane:$.registerSettingsPane,notifySettingsPanesChanged:()=>_?.dispatchEvent?.(new CustomEvent("piclaw:settings-panes-changed"))},Tq=!0,$}async function Pq(_=typeof window<"u"?window:null){if(!_)return;if(a2)return a2;return a2=(async()=>{U9(_);try{let $=await fetch("/agent/addons/web-entries",{credentials:"same-origin"});if(!$.ok)return;let j=await $.json().catch(()=>null),G=Array.isArray(j?.entries)?j.entries:[],Z=_.location?.origin||"http://localhost";for(let X of G){let Y=_O(X?.url,Z);if(!Y)continue;try{await import(Y)}catch(q){console.warn("[addon-web] Failed to load installed addon web entry:",Y,q)}}}catch($){console.warn("[addon-web] Failed to fetch installed addon web entries:",$)}})(),a2}var YO=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),qO=new Set(["text/markdown"]),LO=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),KO=new Set(["application/eml","message/rfc822"]);function r$(_){return typeof _==="string"?_.trim().toLowerCase():""}function VO(_){let $=r$(_);return!!$&&$.endsWith(".eml")}function QO(_){let $=r$(_);return!!$&&$.endsWith(".pdf")}function FO(_){let $=r$(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}var BO=new Set(["application/zip","application/x-zip-compressed"]);function NO(_){let $=r$(_);return!!$&&$.endsWith(".zip")}function UO(_){let $=r$(_);return!!$&&($.endsWith(".html")||$.endsWith(".htm"))}function HO(_){let $=r$(_);if(!$)return!1;return $.endsWith(".sh")||$.endsWith(".bash")||$.endsWith(".zsh")||$.endsWith(".sb")}function F6(_,$){let j=t2(_,$);if(j?.id)return j.id;let G=r$(_);if(QO($)||G==="application/pdf")return"pdf";if(FO($)||LO.has(G))return"office";if(VO($)||KO.has(G))return"eml";if(NO($)||BO.has(G))return"archive";if(UO($)||G==="text/html")return"html";if(HO($))return"text";if(!G)return"unsupported";if(G.startsWith("video/"))return"video";if(G.startsWith("image/"))return"image";if(YO.has(G)||G.startsWith("text/"))return"text";return"unsupported"}function Rq(_){let $=r$(_);return qO.has($)}function e2(_){switch(_){case"image":return"Image preview";case"video":return"Video player";case"pdf":return"PDF preview";case"office":return"Office viewer";case"eml":return"Email preview";case"html":return"HTML preview";case"text":return"Text preview";case"archive":return"ZIP archive preview";default:return Iq(_)||"Preview unavailable"}}var EO=new TextDecoder("utf-8",{fatal:!1});function L5(_,$){return _[$]|_[$+1]<<8}function k4(_,$){return(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24)>>>0}function Sq(_,$,j){return EO.decode(_.subarray($,$+j))}function DO(_){let $=Math.max(0,_.length-65557);for(let j=_.length-22;j>=$;j-=1)if(k4(_,j)===101010256)return j;return-1}function WO(_,$){let j=Math.max(0,$-20);for(let G=j;G<=$-4;G+=1)if(k4(_,G)===117853008)return!0;return!1}function OO(_){let $=new Set;for(let j of _){let G=j.path.replace(/\/+/g,"/");if(!G)continue;if(j.isDirectory){$.add(G.endsWith("/")?G.slice(0,-1):G);continue}let Z=G.split("/").filter(Boolean);if(Z.length<=1)continue;let X="";for(let Y=0;Y<Z.length-1;Y+=1)X=X?`${X}/${Z[Y]}`:Z[Y],$.add(X)}return $}function zO(_){return String(_||"").replace(/\\/g,"/").trim()}function gq(_){switch(Number(_)){case 0:return"Stored";case 8:return"Deflate";case 9:return"Deflate64";case 12:return"BZIP2";case 14:return"LZMA";case 93:return"Zstandard";default:return`Method ${_}`}}function uq(_){let $=_ instanceof Uint8Array?_:_ instanceof ArrayBuffer?new Uint8Array(_):new Uint8Array(_.buffer,_.byteOffset,_.byteLength);if($.length<22)throw Error("ZIP archive is too small to contain a valid directory.");let j=DO($);if(j<0)throw Error("ZIP archive directory could not be found.");if(WO($,j))throw Error("ZIP64 archives are not previewable yet.");let G=L5($,j+10),Z=k4($,j+12),X=k4($,j+16);if(X+Z>$.length)throw Error("ZIP archive directory is truncated.");let Y=[],q=X,L=X+Z;while(q<L){if(q+46>$.length)throw Error("ZIP archive directory entry is truncated.");if(k4($,q)!==33639248)throw Error("ZIP archive directory contains an unexpected record.");let V=L5($,q+8),F=L5($,q+10),B=k4($,q+20),U=k4($,q+24),D=L5($,q+28),E=L5($,q+30),H=L5($,q+32),k=q+46,z=k+D+E,O=z+H;if(O>$.length)throw Error("ZIP archive directory entry metadata is truncated.");let y=(V&2048)===2048,I=zO(Sq($,k,D)),A=Sq($,z,H),J=I.endsWith("/");if(I)Y.push({path:I,isDirectory:J,compressedSize:B,uncompressedSize:U,compressionMethod:F,comment:y?A:A});q=O}Y.sort((V,F)=>{if(V.isDirectory!==F.isDirectory)return V.isDirectory?-1:1;return V.path.localeCompare(F.path)});let K=Y.filter((V)=>!V.isDirectory),Q=OO(Y);return{entries:Y,summary:{fileCount:K.length,directoryCount:Q.size,totalEntries:Y.length,compressedBytes:K.reduce((V,F)=>V+F.compressedSize,0),uncompressedBytes:K.reduce((V,F)=>V+F.uncompressedSize,0)}}}function bq(_){if(!_)return null;if(_.uncompressedBytes<=0)return null;let $=1-_.compressedBytes/_.uncompressedBytes;if(!Number.isFinite($))return null;return`${Math.round($*100)}% smaller`}var JO="allow-scripts";function AO(_){if(!(_ instanceof Uint8Array)||_.length===0)return!0;let $=0,j=_.subarray(0,Math.min(_.length,4096));for(let G of j){if(G===0)return!1;if(G<32&&G!==9&&G!==10&&G!==13&&G!==12)$+=1}return $/j.length<0.02}function kO(_,$){let j=String(_?.content_type||"").trim().toLowerCase(),G=String($||"").trim().toLowerCase();if(j.startsWith("text/")||j==="application/json"||j==="application/xml")return!1;return j==="application/octet-stream"||G.endsWith(".sb")||G.endsWith(".sh")}function MO(_){try{return new TextDecoder("utf-8",{fatal:!1}).decode(_)}catch{return new TextDecoder().decode(_)}}function wO(_,$=null,j=null){let G=_?.metadata?.size,Z=_?.content_type||"application/octet-stream",X=j?.summary||null;return[{label:"Type",value:Z},{label:"Syntax",value:$},{label:"Entries",value:X?String(X.totalEntries):null},{label:"Files",value:X?String(X.fileCount):null},{label:"Folders",value:X?String(X.directoryCount):null},{label:"Compressed",value:X?o_(X.compressedBytes):null},{label:"Uncompressed",value:X?o_(X.uncompressedBytes):null},{label:"Savings",value:bq(X)},{label:"Size",value:typeof G==="number"?o_(G):null},{label:"Added",value:_?.created_at?W4(_.created_at):null}].filter((Y)=>Y.value)}function TO(_,$){let j=String(_?.content_type||"").trim().toLowerCase(),G=String($||"").trim().toLowerCase(),Z=G.split("/").pop()||G;if(G.endsWith(".yaml")||G.endsWith(".yml")||j==="text/yaml"||j==="application/yaml")return"yaml";if(G.endsWith(".json")||G.endsWith(".jsonl")||j==="application/json")return"json";if(G.endsWith(".xml")||G.endsWith(".svg")||j==="application/xml"||j==="text/xml"||j==="image/svg+xml")return"xml";if(G.endsWith(".html")||G.endsWith(".htm")||j==="text/html")return"html";if(G.endsWith(".css")||j==="text/css")return"css";if(G.endsWith(".ts")||G.endsWith(".tsx")||j==="text/typescript")return G.endsWith(".tsx")?"tsx":"ts";if(G.endsWith(".js")||G.endsWith(".jsx")||j==="text/javascript"||j==="application/javascript")return G.endsWith(".jsx")?"jsx":"js";if(G.endsWith(".py")||j==="text/x-python"||j==="application/x-python-code")return"python";if(G.endsWith(".go")||j==="text/x-go")return"go";if(G.endsWith(".c++")||G.endsWith(".cc")||G.endsWith(".cp")||G.endsWith(".cpp")||G.endsWith(".cxx")||G.endsWith(".hh")||G.endsWith(".hpp")||G.endsWith(".hxx")||j==="text/x-c++src"||j==="text/x-c++hdr")return"cpp";if(G.endsWith(".rb")||j==="text/x-ruby")return"ruby";if(G.endsWith(".rs")||j==="text/x-rustsrc")return"rust";if(G.endsWith(".ps1")||G.endsWith(".psm1")||G.endsWith(".psd1")||j==="text/x-powershell")return"powershell";if(Z==="dockerfile"||G.endsWith(".dockerfile"))return"dockerfile";if(G.endsWith(".md")||G.endsWith(".markdown")||j==="text/markdown")return"markdown";if(G.endsWith(".sh")||G.endsWith(".bash")||G.endsWith(".zsh")||Z===".bashrc"||Z===".bash_profile"||Z===".profile"||Z===".zshrc"||Z===".zprofile"||Z===".zshenv"||Z===".env"||Z.startsWith(".env.")||j==="text/x-shellscript")return"bash";if(G.endsWith(".sql"))return"sql";if(G.endsWith(".toml")||G.endsWith(".ini")||G.endsWith(".cfg")||G.endsWith(".conf")||G.endsWith(".properties")||j==="text/toml")return"toml";return null}function yO(_,$,j){let G=encodeURIComponent($||`attachment-${_}`),Z=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${Z}&name=${G}#media=${Z}&name=${G}`;if(j==="office"){let X=P1(_);return`/office-viewer/?url=${encodeURIComponent(X)}&name=${G}`}if(j==="eml")return`/eml-viewer/?media=${Z}&name=${G}`;return null}function vq({mediaId:_,info:$,onClose:j}){let G=$?.filename||`attachment-${_}`,Z=X0(()=>t2($?.content_type,G),[$?.content_type,G]),X=X0(()=>F6($?.content_type,G),[$?.content_type,G]),Y=Z?.label||e2(X),q=X0(()=>Rq($?.content_type),[$?.content_type]),[L,K]=C(X==="text"||X==="html"||X==="archive"),[Q,V]=C(""),[F,B]=C(null),[U,D]=C(null),E=u(null),H=X0(()=>TO($,G),[$,G]),k=X0(()=>H?BZ(H):null,[H]),z=X0(()=>wO($,!q?k:null,F),[$,q,k,F]),O=X0(()=>Z?fq(Z.id,_,G):yO(_,G,X),[Z,_,G,X]),y=X0(()=>Cq(Z?.id||X),[Z?.id,X]),I=X0(()=>{if(!q||!Q)return"";return e_(Q)},[q,Q]),A=X0(()=>{if(q||!Q||!H)return"";return X2(Q,H)},[q,Q,H]);return g(()=>{let J=(M)=>{if(M.key==="Escape")j()};return document.addEventListener("keydown",J),()=>document.removeEventListener("keydown",J)},[j]),g(()=>{if(!E.current||!I)return;B$(E.current);return},[I]),g(()=>{let J=!1;async function M(){if(X!=="text"&&X!=="html"&&X!=="archive"){K(!1),D(null),V(""),B(null);return}K(!0),D(null),V(""),B(null);try{let W=await Y7(_),w=new Uint8Array(await W.arrayBuffer());if(X==="text"||X==="html"){if(X==="text"&&kO($,G)&&!AO(w))throw Error("Attachment does not appear to contain text content.");let P=MO(w);if(!J)V(P);return}let x=uq(w);if(!J)B(x)}catch(W){if(!J){let w=W instanceof Error?W.message:String(W||"Unknown error");D(X==="archive"?`Failed to load ZIP preview. ${w}`:`Failed to load text preview. ${w}`)}}finally{if(!J)K(!1)}}return M(),()=>{J=!0}},[_,X]),N`
        <${v$} className="attachment-preview-portal-root">
            <div class="image-modal attachment-preview-modal" onClick=${j}>
                <div class="attachment-preview-shell" onClick=${(J)=>{J.stopPropagation()}}>
                    <div class="attachment-preview-header">
                        <div class="attachment-preview-heading">
                            <div class="attachment-preview-title">${G}</div>
                            <div class="attachment-preview-subtitle">${Y}</div>
                        </div>
                        <div class="attachment-preview-header-actions">
                            ${O&&N`
                                <a
                                    href=${O}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="attachment-preview-download"
                                    onClick=${(J)=>J.stopPropagation()}
                                >
                                    Open in Tab
                                </a>
                            `}
                            <a
                                href=${P1(_)}
                                download=${G}
                                class="attachment-preview-download"
                                onClick=${(J)=>J.stopPropagation()}
                            >
                                Download
                            </a>
                            <button class="attachment-preview-close" type="button" onClick=${j}>Close</button>
                        </div>
                    </div>
                    <div class="attachment-preview-body">
                        ${L&&N`<div class="attachment-preview-state">Loading preview…</div>`}
                        ${!L&&U&&N`<div class="attachment-preview-state">${U}</div>`}
                        ${!L&&!U&&X==="image"&&N`
                            <img class="attachment-preview-image" src=${P1(_)} alt=${G} />
                        `}
                        ${!L&&!U&&X==="video"&&N`
                            <video class="attachment-preview-video" src=${P1(_)} controls autoplay style="max-width:100%;max-height:100%;" />
                        `}
                        ${!L&&!U&&X==="html"&&N`
                            <iframe class="attachment-preview-frame" srcdoc=${Q||""} sandbox=${JO} title=${G}></iframe>
                        `}
                        ${!L&&!U&&(X==="pdf"||X==="office"||X==="eml"||Boolean(Z))&&O&&N`
                            <iframe class="attachment-preview-frame" src=${O} title=${G}></iframe>
                        `}
                        ${!L&&!U&&y&&N`
                            <div class="attachment-preview-readonly-note">${y}</div>
                        `}
                        ${!L&&!U&&X==="archive"&&F&&N`
                            <div class="attachment-preview-archive">
                                <div class="attachment-preview-archive-summary">
                                    <div class="attachment-preview-archive-card">
                                        <span class="attachment-preview-archive-card-label">Files</span>
                                        <strong class="attachment-preview-archive-card-value">${F.summary.fileCount}</strong>
                                    </div>
                                    <div class="attachment-preview-archive-card">
                                        <span class="attachment-preview-archive-card-label">Folders</span>
                                        <strong class="attachment-preview-archive-card-value">${F.summary.directoryCount}</strong>
                                    </div>
                                    <div class="attachment-preview-archive-card">
                                        <span class="attachment-preview-archive-card-label">Compressed</span>
                                        <strong class="attachment-preview-archive-card-value">${o_(F.summary.compressedBytes)}</strong>
                                    </div>
                                    <div class="attachment-preview-archive-card">
                                        <span class="attachment-preview-archive-card-label">Uncompressed</span>
                                        <strong class="attachment-preview-archive-card-value">${o_(F.summary.uncompressedBytes)}</strong>
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
                                            ${F.entries.map((J)=>N`
                                                <tr key=${J.path}>
                                                    <td class="attachment-preview-archive-name">${J.path}</td>
                                                    <td>${J.isDirectory?"Folder":"File"}</td>
                                                    <td>${J.isDirectory?"—":gq(J.compressionMethod)}</td>
                                                    <td>${J.isDirectory?"—":o_(J.compressedSize)}</td>
                                                    <td>${J.isDirectory?"—":o_(J.uncompressedSize)}</td>
                                                </tr>
                                            `)}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        `}
                        ${!L&&!U&&X==="text"&&q&&N`
                            <div
                                ref=${E}
                                class="attachment-preview-markdown post-content"
                                dangerouslySetInnerHTML=${{__html:I}}
                            />
                        `}
                        ${!L&&!U&&X==="text"&&!q&&A&&N`
                            <pre class="attachment-preview-text attachment-preview-code"><code dangerouslySetInnerHTML=${{__html:A}} /></pre>
                        `}
                        ${!L&&!U&&X==="text"&&!q&&!A&&N`
                            <pre class="attachment-preview-text">${Q}</pre>
                        `}
                        ${!L&&!U&&X==="unsupported"&&N`
                            <div class="attachment-preview-state">
                                Preview is not available for this file type yet. You can still download it directly.
                            </div>
                        `}
                    </div>
                    <div class="attachment-preview-meta">
                        ${z.map((J)=>N`
                            <div class="attachment-preview-meta-item" key=${J.label}>
                                <span class="attachment-preview-meta-label">${J.label}</span>
                                <span class="attachment-preview-meta-value">${J.value}</span>
                            </div>
                        `)}
                    </div>
                </div>
            </div>
        </${v$}>
    `}x0();g_();C2();h7();function xO(_){if(!_||typeof _!=="object")return!1;if(_.isContentEditable)return!0;if(typeof _.closest!=="function")return!1;return Boolean(_.closest(["input","textarea","select",'[contenteditable="true"]',".compose-box",".compose-model-popup",".compose-session-popup",".settings-dialog",".workspace-sidebar",".workspace-explorer",".editor-pane-container",".dock-panel",".timeline-menu-dropdown",".rename-branch-overlay",".agent-request-modal",".attachment-preview-modal",".vnc-pane-shell",".kanban-plugin",".mindmap-editor"].join(", ")))}function IO(_){if(!_||typeof _!=="object")return!0;if(xO(_))return!1;let $=String(_.tagName||"").toUpperCase();if($==="BODY"||$==="HTML")return!0;if(typeof _.closest!=="function")return!0;return Boolean(_.closest(".container, .timeline, .post, .post-body, .post-content, .agent-status-panel"))}function CO(_){if(!V6(_))return!1;if(!IO(_?.target))return!1;return!c$.some((j)=>E$(_,j.id))}function mq(_){let $=new URL(window.location.href);if(_)$.searchParams.delete("chat_only");else $.searchParams.set("chat_only","1");window.location.href=$.toString()}function fO(_){let $=[],j=new Map(h$.map((Z)=>[Z.id,Z])),G=(Z,X={})=>{let Y=j.get(Z);if(!Y)return;$.push({...Y,...X})};if(G("toggle-workspace",{label:_.workspaceOpen?"Hide workspace":"Show workspace",description:_.workspaceOpen?"Hide the workspace sidebar.":"Show the workspace sidebar."}),!_.workspaceOpen&&!_.chatOnlyMode)G("open-explorer");if(G("toggle-chat-only",{label:_.chatOnlyMode?"Exit chat-only mode":"Chat-only mode",description:_.chatOnlyMode?"Return to the split workspace layout.":"Switch to the chat-only layout."}),typeof _.onOpenTerminalTab==="function")G("open-terminal-tab");if(typeof _.onOpenVncTab==="function")G("open-vnc-tab");if(typeof _.onToggleTerminalDock==="function")G("toggle-terminal-dock",{label:_.terminalVisible?"Hide terminal dock":"Show terminal dock",description:_.terminalVisible?"Hide the terminal dock.":"Show the terminal dock."});return G("open-settings"),$}function cq(_){if(_==="agent")return"Agents";if(_==="workspace")return"Workspace";return"Slash commands"}function PO(_){if(_?.imageUrl)return N`<img class="timeline-quick-actions-item-avatar" src=${_.imageUrl} alt="" aria-hidden="true" />`;return N`<span class="timeline-quick-actions-item-placeholder" aria-hidden="true">${_?.visualHint||""}</span>`}function _8(_,$){return N`
        <span class="timeline-quick-actions-keyhint">
            <kbd>${$}</kbd>
            <span>${_}</span>
        </span>
    `}function RO(_){let $=new URL(window.location.href);$.searchParams.set("chat_jid",_),$.searchParams.set("chat_only","1");let j=document.createElement("a");j.href=$.toString(),j.target="_blank",j.rel="noopener",j.style.display="none",document.body.appendChild(j),j.click(),j.remove()}function lq({activeChatAgents:_=[],currentChatJid:$="web:default",workspaceOpen:j=!1,chatOnlyMode:G=!1,terminalVisible:Z=!1,onSwitchChat:X,onToggleWorkspace:Y,onOpenTerminalTab:q,onOpenVncTab:L,onToggleTerminalDock:K,onPrefillCompose:Q}){let[V,F]=C(!1),[B,U]=C(""),[D,E]=C(0),[H,k]=C([]),[z,O]=C({workspaceCommands:null,slashCommands:null}),y=u(null),I=u(null),A=f(async()=>{try{let w=await o5();O(p$(w?.settings))}catch{O({workspaceCommands:null,slashCommands:null})}},[]);g(()=>{A()},[A]),g(()=>{let w=!1;return i5($).then((x)=>{if(w)return;k(Array.isArray(x?.commands)?x.commands:[])}).catch(()=>{if(w)return;k([])}),()=>{w=!0}},[$]);let J=X0(()=>fO({workspaceOpen:j,chatOnlyMode:G,terminalVisible:Z,onOpenTerminalTab:q,onOpenVncTab:L,onToggleTerminalDock:K}),[G,q,L,K,Z,j]),M=X0(()=>BY({agents:_,workspaceCommands:J,slashCommands:H,settings:z,query:B}),[_,B,z,H,J]);if(g(()=>{if(M.length===0){E(-1);return}if(!B.trim()){E(0);return}let w=B.toLowerCase().replace(/^[@/]+/,"").trim();if(!w){E(0);return}let x=0,P=0;for(let R=0;R<M.length;R++){let v=M[R],c=(v.title||"").toLowerCase().replace(/^[@/]+/,"");if(c===w){x=R;break}let h=0;if(c.startsWith(w))h=3;else if(c.includes(w))h=2;else if((v.subtitle||"").toLowerCase().includes(w))h=1;if(h>P)P=h,x=R}E(x)},[M,B]),g(()=>{if(!V)return;requestAnimationFrame(()=>I.current?.focus?.())},[V]),g(()=>{let w=(P)=>{if(!V){if(!CO(P))return;P.preventDefault(),U(String(P.key||"")),E(0),F(!0);return}if(P.key==="Escape"){P.preventDefault(),F(!1),U("");return}if(P.key==="ArrowDown"){P.preventDefault(),E((R)=>M.length>0?(R+1+M.length)%M.length:0);return}if(P.key==="ArrowUp"){P.preventDefault(),E((R)=>M.length>0?(R-1+M.length)%M.length:0);return}if(P.key==="Enter"&&M[D]){P.preventDefault();let R=M[D],v=P.altKey;if(R){if(R.kind==="agent"&&R.chatJid)if(v)RO(R.chatJid);else X?.(R.chatJid);else if(R.kind==="workspace"&&R.commandId){if(R.commandId==="toggle-workspace"||R.commandId==="open-explorer")Y?.();if(R.commandId==="toggle-chat-only")mq(G);if(R.commandId==="open-terminal-tab")q?.();if(R.commandId==="open-vnc-tab")L?.();if(R.commandId==="toggle-terminal-dock")K?.();if(R.commandId==="open-settings")window.dispatchEvent(new CustomEvent("piclaw:open-settings"))}else if(R.kind==="slash"&&R.commandName)Q?.(R.commandName)}F(!1),U("")}},x=(P)=>{if(!V)return;if(y.current?.contains(P.target))return;F(!1),U("")};return window.addEventListener("keydown",w,!0),document.addEventListener("pointerdown",x,!0),()=>{window.removeEventListener("keydown",w,!0),document.removeEventListener("pointerdown",x,!0)}},[G,D,M,q,L,Q,X,K,Y,V]),g(()=>{let w=(x)=>{let P=p$(x?.detail?.settings);if(x?.detail?.settings){O(P);return}A()};return window.addEventListener("focus",w),window.addEventListener("piclaw:quick-actions-settings-updated",w),()=>{window.removeEventListener("focus",w),window.removeEventListener("piclaw:quick-actions-settings-updated",w)}},[A]),!V)return null;let W=null;return N`
        <div class="timeline-quick-actions-portal">
            <div class="timeline-quick-actions-overlay">
                <div class="timeline-quick-actions" ref=${y}>
                    <div class="timeline-quick-actions-header">
                        <div class="timeline-quick-actions-search-row">
                            <input
                                ref=${I}
                                class="timeline-quick-actions-input"
                                type="text"
                                value=${B}
                                placeholder="Type to jump to an agent, workspace action, or slash command…"
                                onInput=${(w)=>{U(w.currentTarget?.value||""),E(0)}}
                            />
                            <div class="timeline-quick-actions-hints" aria-hidden="true">
                                ${_8("Move","↑↓")}
                                ${_8("Select","↵")}
                                ${_8("Pop out","Alt+↵")}
                                ${_8("Close","Esc")}
                            </div>
                        </div>
                    </div>
                    <div class="timeline-quick-actions-list">
                        ${M.length===0&&N`<div class="timeline-quick-actions-empty">No quick actions match.</div>`}
                        ${M.map((w,x)=>{let P=w.kind!==W;return W=w.kind,N`
                                ${P&&N`<div class="timeline-quick-actions-section">${cq(w.kind)}</div>`}
                                <button
                                    key=${w.key}
                                    type="button"
                                    class=${`timeline-quick-actions-item timeline-quick-actions-item-${w.kind}${x===D?" active":""}`}
                                    onMouseEnter=${null}
                                    onClick=${()=>{if(w.kind==="agent"&&w.chatJid)X?.(w.chatJid);if(w.kind==="workspace"&&w.commandId==="toggle-workspace")Y?.();if(w.kind==="workspace"&&w.commandId==="open-explorer")Y?.();if(w.kind==="workspace"&&w.commandId==="toggle-chat-only")mq(G);if(w.kind==="workspace"&&w.commandId==="open-terminal-tab")q?.();if(w.kind==="workspace"&&w.commandId==="open-vnc-tab")L?.();if(w.kind==="workspace"&&w.commandId==="toggle-terminal-dock")K?.();if(w.kind==="workspace"&&w.commandId==="open-settings")window.dispatchEvent(new CustomEvent("piclaw:open-settings"));if(w.kind==="slash"&&w.commandName)Q?.(w.commandName);F(!1),U("")}}
                                >
                                    <span class="timeline-quick-actions-item-media">
                                        ${PO(w)}
                                    </span>
                                    <span class="timeline-quick-actions-item-copy">
                                        <span class="timeline-quick-actions-item-title-row">
                                            <span class="timeline-quick-actions-item-title">${w.title}</span>
                                            ${w.actionHint?N`<span class="timeline-quick-actions-item-action-hint">${w.actionHint}</span>`:null}
                                        </span>
                                        <span class="timeline-quick-actions-item-subtitle">${w.subtitle}</span>
                                    </span>
                                    <span class="timeline-quick-actions-item-category">${w.categoryLabel||cq(w.kind)}</span>
                                </button>
                            `})}
                    </div>
                </div>
            </div>
        </div>
    `}x0();function hq({workspaceOpen:_,toggleWorkspace:$,chatOnlyMode:j,onOpenTerminalTab:G,onOpenVncTab:Z,onToggleTerminal:X,terminalVisible:Y}){let[q,L]=C(!1),[K,Q]=C({top:8,left:8}),V=u(null),F=u(null),B=u(null);g(()=>{if(typeof document>"u")return;let H=document.createElement("div");return H.className="timeline-menu-portal in-chat",document.body.appendChild(H),B.current=H,()=>{H.remove(),B.current=null}},[]),g(()=>{let H=()=>{if(_){let O=document.querySelector(".workspace-sidebar");if(O){let y=O.getBoundingClientRect();Q({top:y.top+8,left:y.left+8})}}else Q({top:8,left:8})};H();let k=new ResizeObserver(H),z=document.querySelector(".workspace-sidebar");if(z)k.observe(z);return window.addEventListener("resize",H),()=>{k.disconnect(),window.removeEventListener("resize",H)}},[_]),g(()=>{if(B.current)B.current.className=`timeline-menu-portal ${_?"in-workspace":"in-chat"}`},[_]),g(()=>{if(!B.current)return;let H=B.current.style;H.top=`${K.top}px`,H.left=`${K.left}px`,H.right="auto"},[K]),g(()=>{if(!q)return;let H=(k)=>{if(V.current?.contains(k.target))return;if(F.current?.contains(k.target))return;L(!1)};return document.addEventListener("mousedown",H,!0),()=>document.removeEventListener("mousedown",H,!0)},[q]),g(()=>{if(!q)return;let H=(k)=>{if(k.key==="Escape")L(!1)};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[q]),g(()=>{L(!1)},[_]);let U=f((H)=>{L(!1),H?.()},[]),D=f(()=>{let H=new URL(window.location.href);if(j)H.searchParams.delete("chat_only");else H.searchParams.set("chat_only","1");window.location.href=H.toString()},[j]),E=N`
        <button ref=${F} class=${`timeline-menu-btn${q?" active":""}`}
            onClick=${()=>L((H)=>!H)} title="Menu" aria-label="Menu"
            aria-haspopup="menu" aria-expanded=${q?"true":"false"}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
        </button>
        ${q&&N`
            <div class="workspace-menu-dropdown timeline-menu-dropdown" ref=${V} role="menu">
                <button class="workspace-menu-item" role="menuitem" onClick=${()=>U($)}>
                    ${_?"Hide workspace":"Show workspace"}
                </button>
                ${!_&&!j&&N`
                    <button class="workspace-menu-item" role="menuitem" onClick=${()=>U(()=>{$()})}>
                        Open explorer
                    </button>
                `}
                <button class=${`workspace-menu-item${j?" active":""}`} role="menuitem" onClick=${()=>U(D)}>
                    ${j?"Exit chat-only mode":"Chat-only mode"}
                </button>

                ${(G||Z||X)&&N`<div class="workspace-menu-separator"></div>`}
                ${G&&N`<button class="workspace-menu-item" role="menuitem" onClick=${()=>U(G)}>Open terminal in tab</button>`}
                ${Z&&N`<button class="workspace-menu-item" role="menuitem" onClick=${()=>U(Z)}>Open VNC in tab</button>`}
                ${X&&N`<button class="workspace-menu-item" role="menuitem" onClick=${()=>U(X)}>${Y?"Hide terminal dock":"Show terminal dock"}</button>`}

                <div class="workspace-menu-separator"></div>
                <button class="workspace-menu-item" role="menuitem" onClick=${()=>U(()=>window.dispatchEvent(new CustomEvent("piclaw:open-settings")))}>Settings</button>
            </div>
        `}
    `;return m4(()=>{if(B.current)q$(E,B.current)}),null}x0();g_();var pq="PiClaw";function H9(_,$,j=!1){let G=_||"PiClaw",Z=G.charAt(0).toUpperCase(),X=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],Y=Z.charCodeAt(0)%X.length,q=X[Y],L=G.trim().toLowerCase(),K=typeof $==="string"?$.trim():"",Q=K?K:null,V=j||L==="PiClaw".toLowerCase()||L==="pi";return{letter:Z,color:q,image:Q||(V?"/static/icon-192.png":null)}}function nq(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function rq(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function dq(_){if(!_)return null;if(typeof document<"u"){let X=document.documentElement,Y=X?.dataset?.colorTheme||"",q=X?.dataset?.tint||"",L=getComputedStyle(X).getPropertyValue("--accent-color")?.trim();if(L&&(q||Y&&Y!=="default"))return L}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),G=0;for(let X=0;X<j.length;X+=1)G=(G*31+j.charCodeAt(X))%2147483647;let Z=Math.abs(G)%$.length;return $[Z]}function E9(..._){for(let $ of _)if(typeof $==="string"&&$.trim())return $.trim();return null}function SO(_){if(_.startsWith('"')&&_.endsWith('"')||_.startsWith("'")&&_.endsWith("'"))return _.slice(1,-1);return _}function iq(_){if(typeof _!=="string"||!_.trim())return null;let $=_.match(/^\s*cd\s+(.+?)(?:\s*(?:&&|;|\n))/s);if(!$?.[1])return null;return SO($[1].trim())||null}function oq(_,$){let j=$&&typeof $==="object"?$:null;if(!j)return null;let G=E9(j.cwd,j.working_directory,j.workingDirectory);if(G)return G;let Z=E9(j.project_dir,j.projectDir,j.repo_path,j.repoPath);if(Z)return Z;let X=E9(j.command),Y=iq(X);if(Y)return Y;if(Array.isArray(j.commands))for(let q of j.commands){let L=iq(q);if(L)return L}return null}var gO=N`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>
`,uO=N`
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
        <path d="M6 3v12"></path>
        <circle cx="18" cy="6" r="3"></circle>
        <circle cx="6" cy="18" r="3"></circle>
        <path d="M18 9a9 9 0 0 1-9 9"></path>
    </svg>
`,bO=N`
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M12 7v5l3 2"></path>
    </svg>
`,vO=1e4;function mO(_){return(Array.isArray(_)?_:_&&Array.isArray(_.status_hints)?_.status_hints:[]).filter((j)=>j&&typeof j==="object").map((j,G)=>({key:typeof j.key==="string"&&j.key.trim()?j.key.trim():`hint-${G}`,iconSvg:typeof j.icon_svg==="string"?j.icon_svg.trim():"",label:typeof j.label==="string"?j.label.trim():"",title:typeof j.title==="string"?j.title.trim():""})).filter((j)=>j.iconSvg&&j.label)}function cO(_){if(!(_ instanceof Set)||_.size===0)return null;let $=Array.from(_.values());for(let j=$.length-1;j>=0;j-=1){let G=$[j];if(G==="thought"||G==="draft")return G}return null}function lO(_){if(!Array.isArray(_)||_.length===0)return[];let $=new Map([["ssh",0]]);return _.map((j,G)=>({hint:j,index:G})).sort((j,G)=>{let Z=$.get(j.hint?.key)??100,X=$.get(G.hint?.key)??100;if(Z!==X)return Z-X;return j.index-G.index}).map((j)=>j.hint)}function hO(_,$){let j=typeof _==="string"?_.trim():"",G=typeof $==="string"?$.trim():"";return[j?j.split(/[\\/]+/).filter(Boolean).pop()||j:"",G].filter(Boolean).join(" • ")}function sq(_){if(!_||typeof _!=="object")return!1;let $=typeof _.type==="string"?_.type:"",j=Boolean(_.last_activity||_.lastActivity),G=$==="tool_call"||$==="tool_status"||Boolean(_.tool_name||_.tool_args);if(!j&&!G)return!1;return b$(_)!==null}function aq(_){if(!_||typeof _!=="object")return!1;return _.type==="intent"&&A2(_)!==null}function pO(_,$=Date.now()){if(!Number.isFinite(_))return!1;return $-_>=vO}function nO(_,$=Date.now()){if(!sq(_))return null;let j=b$(_);if(j===null||!pO(j,$))return null;let G=tq(new Date(j).toISOString(),$);return G?`${G} ago`:null}function rO(_,$=Date.now()){if(!aq(_))return null;if(A2(_)===null)return null;return X6(_,$)}function dO(_,$={}){let j=$?.isLastActivity??Boolean(_?.last_activity||_?.lastActivity),G=_?.title,Z=_?.status,X="";if(_?.type==="plan")X=G?`Planning: ${G}`:"Planning...";else if(_?.type==="tool_call")X=G?`Running: ${G}`:"Running tool...";else if(_?.type==="tool_status")X=G?`${G}: ${Z||"Working..."}`:Z||"Working...";else if(_?.type==="error")X=G||"Agent error";else X=G||Z||"Working...";if(!j)return X;if(X&&X!=="Working...")return`Recent activity: ${X}`;return"Last activity"}function tq(_,$=Date.now()){if(!_)return null;let j=$-new Date(_).getTime();if(!Number.isFinite(j)||j<0)return null;let G=Math.floor(j/1000),Z=Math.floor(G/3600),X=Math.floor(G%3600/60),Y=G%60;if(Z>0)return`${Z}h ${X}m`;if(X>0)return`${X}m ${Y}s`;return`${Y}s`}function D9({status:_,draft:$,plan:j,thought:G,pendingRequest:Z,intent:X,extensionPanels:Y=[],pendingPanelActions:q=new Set,onExtensionPanelAction:L,turnId:K,steerQueued:Q,onPanelToggle:V,showCorePanels:F=!0,showExtensionPanels:B=!0}){let E=($0)=>{if(!$0)return{text:"",totalLines:0,fullText:""};if(typeof $0==="string"){let v0=$0,e=v0?v0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:v0,totalLines:e,fullText:v0}}let z0=$0.text||"",k0=$0.fullText||$0.full_text||z0,g0=Number.isFinite($0.totalLines)?$0.totalLines:k0?k0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:z0,totalLines:g0,fullText:k0}},H=160,k=($0)=>String($0||"").replace(/<\/?internal>/gi,""),z=($0)=>{if(!$0)return 1;return Math.max(1,Math.ceil($0.length/160))},O=($0,z0,k0)=>{let g0=($0||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!g0)return{text:"",omitted:0,totalLines:Number.isFinite(k0)?k0:0,visibleLines:0};let v0=g0.split(`
`),e=v0.length>z0?v0.slice(0,z0).join(`
`):g0,s=Number.isFinite(k0)?k0:v0.reduce((G0,E0)=>G0+z(E0),0),d=e?e.split(`
`).reduce((G0,E0)=>G0+z(E0),0):0,Y0=Math.max(s-d,0);return{text:e,omitted:Y0,totalLines:s,visibleLines:d}},y=E(j),I=E(G),A=E($),J=Boolean(y.text)||y.totalLines>0,M=Boolean(I.text)||I.totalLines>0,W=Boolean(A.fullText?.trim()||A.text?.trim()),w=Boolean(_||W||J||M||Z||X),x=Array.isArray(Y)&&Y.length>0,[P,R]=C(new Set),[v,c]=C(null),[h,r]=C(()=>Date.now()),b=($0)=>R((z0)=>{let k0=new Set(z0),g0=!k0.has($0);if(g0)k0.add($0);else k0.delete($0);if(typeof V==="function")V($0,g0);return k0});g(()=>{R(new Set),c(null)},[K]),g(()=>{if(!(Array.isArray(Y)&&Y.some((k0)=>k0?.started_at||k0?.last_activity_at)))return;let z0=setInterval(()=>r(Date.now()),1000);return()=>clearInterval(z0)},[Y]);let a=X0(()=>cO(P),[P]);g(()=>{if(!a||typeof document>"u")return;let $0=(z0)=>{if(z0?.defaultPrevented)return;if(z0?.key!=="Escape")return;if(z0?.altKey||z0?.ctrlKey||z0?.metaKey||z0?.shiftKey)return;let k0=z0?.target;if(k0 instanceof Element){if(k0.closest?.('input, textarea, select, [contenteditable="true"]'))return;if(k0.isContentEditable)return}if(R((g0)=>{if(!(g0 instanceof Set)||!g0.has(a))return g0;let v0=new Set(g0);return v0.delete(a),v0}),typeof V==="function")V(a,!1);z0.preventDefault?.(),z0.stopPropagation?.()};return document.addEventListener("keydown",$0),()=>document.removeEventListener("keydown",$0)},[a,V]);let t=U$(_),q0=Boolean(_?.last_activity||_?.lastActivity),Z0=X0(()=>sq(_),[_]),D0=X0(()=>aq(_),[_]),Q0=X0(()=>oq(_?.tool_name,_?.tool_args),[_?.tool_name,_?.tool_args]),[L0,N0]=C(null);g(()=>{if(!Boolean(D0||_?.retry_at||_?.retryAt||Z0))return;r(Date.now());let z0=setInterval(()=>r(Date.now()),1000);return()=>clearInterval(z0)},[Z0,D0,_?.retry_at,_?.retryAt,_?.last_event_at,_?.lastEventAt,_?.started_at,_?.startedAt,_?.type,_?.tool_name,_?.tool_args]),g(()=>{if(!(_?.type==="tool_call"||_?.type==="tool_status")||!Q0){N0(null);return}let z0=!0;return q7(Q0).then((k0)=>{if(!z0)return;if(k0?.branch)N0({branch:k0.branch,repoPath:k0.repo_path||null,path:Q0});else N0(null)}).catch(()=>{if(z0)N0(null)}),()=>{z0=!1}},[_?.type,Q0]);let H0=_?.turn_id||K,y0=dq(H0),o=p2({steerQueued:Q}),j0=($0)=>$0,O0=rY(_,{isLastActivity:q0}),P0=r2(_,{isLastActivity:q0}),m0=r2(null,{pendingRequest:!0}),l0=($0)=>$0==="warning"?"#f59e0b":$0==="error"?"var(--danger-color)":$0==="success"?"var(--success-color)":y0,G_=X?.kind||"info",h0=l0(G_),c0=l0(_?.kind||(t?"warning":"info")),M0=dO(_,{isLastActivity:q0}),p0=nO(_,h),b0=L0?.repoPath||"",d0=L0?.branch||"",H_=L0?hO(b0,d0):"",E_=mO(_?.status_hints||_?.statusHints),K_=X0(()=>lO(E_),[E_]),S0=X0(()=>K_.filter(($0)=>$0?.key==="ssh"),[K_]),A0=X0(()=>K_.filter(($0)=>$0?.key!=="ssh"),[K_]);if((!F||!w)&&(!B||!x))return null;let r0=({panelTitle:$0,text:z0,fullText:k0,totalLines:g0,maxLines:v0,titleClass:e,panelKey:s})=>{let d=P.has(s),Y0=k0||z0||"",G0=s==="thought"||s==="draft"?k(Y0):Y0,E0=typeof v0==="number",I0=d&&E0,t0=E0?O(G0,v0,g0):{text:G0||"",omitted:0,totalLines:Number.isFinite(g0)?g0:0};if(!G0&&!(Number.isFinite(t0.totalLines)&&t0.totalLines>0))return null;let J0=`agent-thinking-body${E0?" agent-thinking-body-collapsible":""}`,R0=E0?`--agent-thinking-collapsed-lines: ${v0};`:"";return N`
            <div
                class="agent-thinking"
                data-expanded=${d?"true":"false"}
                data-collapsible=${E0?"true":"false"}
                style=${y0?`--turn-color: ${y0};`:""}
            >
                <div class="agent-thinking-title ${e||""}">
                    ${y0&&N`<span class=${o} aria-hidden="true"></span>`}
                    ${$0}
                    ${I0&&N`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${$0} panel`}
                            onClick=${()=>b(s)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${J0}
                    style=${R0}
                    dangerouslySetInnerHTML=${{__html:h5(G0)}}
                />
                ${!d&&t0.omitted>0&&N`
                    <button class="agent-thinking-truncation" onClick=${()=>b(s)}>
                        ▸ ${t0.omitted} more lines
                    </button>
                `}
                ${d&&t0.omitted>0&&N`
                    <button class="agent-thinking-truncation" onClick=${()=>b(s)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},q_=Z?.tool_call?.title,O_=q_?`Awaiting approval: ${q_}`:"Awaiting approval",F0=rO(_,h),w0=($0,z0,k0=null)=>{let g0=k2($0),v0=kX($0,h),e=[k0,v0].filter(Boolean).join(" · "),s=p2({steerQueued:Q,pulsing:U$($0)||Boolean(v0)});return N`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${z0?`--turn-color: ${z0};`:""}
                title=${$0?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${z0&&N`<span class=${s} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${g0}</span>
                    ${e&&N`<span class="agent-status-elapsed">${e}</span>`}
                </div>
                ${$0.detail&&N`<div class="agent-thinking-body">${$0.detail}</div>`}
            </div>
        `},C0=($0,z0,k0,g0,v0,e,s,d=8,Y0=8)=>{let G0=Math.max(v0-g0,0.000000001),E0=Math.max(z0-d*2,1),I0=Math.max(k0-Y0*2,1),t0=Math.max(s-e,1),J0=s===e?z0/2:d+($0.run-e)/t0*E0,R0=Y0+(I0-($0.value-g0)/G0*I0);return{x:J0,y:R0}},U_=($0,z0,k0,g0,v0,e,s,d=8,Y0=8)=>{if(!Array.isArray($0)||$0.length===0)return"";return $0.map((G0,E0)=>{let{x:I0,y:t0}=C0(G0,z0,k0,g0,v0,e,s,d,Y0);return`${E0===0?"M":"L"} ${I0.toFixed(2)} ${t0.toFixed(2)}`}).join(" ")},A_=($0,z0="")=>{if(!Number.isFinite($0))return"—";return`${Math.abs($0)>=100?$0.toFixed(0):$0.toFixed(2).replace(/\.0+$/,"").replace(/(\.\d*[1-9])0+$/,"$1")}${z0}`},V_=["var(--accent-color)","var(--success-color)","var(--warning-color, #f59e0b)","var(--danger-color)"],X_=($0,z0)=>{let k0=V_;if(!Array.isArray(k0)||k0.length===0)return"var(--accent-color)";if(k0.length===1||!Number.isFinite(z0)||z0<=1)return k0[0];let v0=Math.max(0,Math.min(Number.isFinite($0)?$0:0,z0-1))/Math.max(1,z0-1)*(k0.length-1),e=Math.floor(v0),s=Math.min(k0.length-1,e+1),d=v0-e,Y0=k0[e],G0=k0[s];if(!G0||e===s||d<=0.001)return Y0;if(d>=0.999)return G0;let E0=Math.round((1-d)*1000)/10,I0=Math.round(d*1000)/10;return`color-mix(in oklab, ${Y0} ${E0}%, ${G0} ${I0}%)`},D_=($0,z0="autoresearch")=>{let k0=Array.isArray($0)?$0.map((J0)=>({...J0,points:Array.isArray(J0?.points)?J0.points.filter((R0)=>Number.isFinite(R0?.value)&&Number.isFinite(R0?.run)):[]})).filter((J0)=>J0.points.length>0):[],g0=k0.map((J0,R0)=>({...J0,color:X_(R0,k0.length)}));if(g0.length===0)return null;let v0=320,e=120,s=g0.flatMap((J0)=>J0.points),d=s.map((J0)=>J0.value),Y0=s.map((J0)=>J0.run),G0=Math.min(...d),E0=Math.max(...d),I0=Math.min(...Y0),t0=Math.max(...Y0);return N`
            <div class="agent-series-chart agent-series-chart-combined">
                <div class="agent-series-chart-header">
                    <span class="agent-series-chart-title">Tracked variables</span>
                    <span class="agent-series-chart-value">${g0.length} series</span>
                </div>
                <div class="agent-series-chart-plot">
                    <svg class="agent-series-chart-svg" viewBox=${`0 0 ${v0} ${e}`} preserveAspectRatio="none" aria-hidden="true">
                        ${g0.map((J0)=>{let R0=J0?.key||J0?.label||"series",Z_=v?.panelKey===z0&&v?.seriesKey===R0;return N`
                                <g key=${R0}>
                                    <path
                                        class=${`agent-series-chart-line${Z_?" is-hovered":""}`}
                                        d=${U_(J0.points,v0,e,G0,E0,I0,t0)}
                                        style=${`--agent-series-color: ${J0.color};`}
                                        onMouseEnter=${()=>c({panelKey:z0,seriesKey:R0})}
                                        onMouseLeave=${()=>c((L_)=>L_?.panelKey===z0&&L_?.seriesKey===R0?null:L_)}
                                    ></path>
                                </g>
                            `})}
                    </svg>
                    <div class="agent-series-chart-points-layer">
                        ${g0.flatMap((J0)=>{let R0=typeof J0?.unit==="string"?J0.unit:"",Z_=J0?.key||J0?.label||"series";return J0.points.map((L_,$_)=>{let B_=C0(L_,v0,e,G0,E0,I0,t0);return N`
                                    <button
                                        key=${`${Z_}-point-${$_}`}
                                        type="button"
                                        class="agent-series-chart-point-hit"
                                        style=${`--agent-series-color: ${J0.color}; left:${B_.x/v0*100}%; top:${B_.y/e*100}%;`}
                                        onMouseEnter=${()=>c({panelKey:z0,seriesKey:Z_,run:L_.run,value:L_.value,unit:R0})}
                                        onMouseLeave=${()=>c((k_)=>k_?.panelKey===z0?null:k_)}
                                        onFocus=${()=>c({panelKey:z0,seriesKey:Z_,run:L_.run,value:L_.value,unit:R0})}
                                        onBlur=${()=>c((k_)=>k_?.panelKey===z0?null:k_)}
                                        aria-label=${`${J0?.label||"Series"} ${A_(L_.value,R0)} at run ${L_.run}`}
                                    >
                                        <span class="agent-series-chart-point"></span>
                                    </button>
                                `})})}
                    </div>
                </div>
                <div class="agent-series-legend">
                    ${g0.map((J0)=>{let R0=J0.points[J0.points.length-1]?.value,Z_=typeof J0?.unit==="string"?J0.unit:"",L_=J0?.key||J0?.label||"series",$_=v?.panelKey===z0&&v?.seriesKey===L_?v:null,B_=$_&&Number.isFinite($_.value)?$_.value:R0,k_=$_&&typeof $_.unit==="string"?$_.unit:Z_,e0=$_&&Number.isFinite($_.run)?$_.run:null;return N`
                            <div key=${`${L_}-legend`} class=${`agent-series-legend-item${$_?" is-hovered":""}`} style=${`--agent-series-color: ${J0.color};`}>
                                <span class="agent-series-legend-swatch" style=${`--agent-series-color: ${J0.color};`}></span>
                                <span class="agent-series-legend-label">${J0?.label||"Series"}</span>
                                ${e0!==null&&N`<span class="agent-series-legend-run">run ${e0}</span>`}
                                <span class="agent-series-legend-value">${A_(B_,k_)}</span>
                            </div>
                        `})}
                </div>
            </div>
        `},M_=($0)=>{if(!$0)return null;let z0=typeof $0?.key==="string"?$0.key:`panel-${Math.random()}`,k0=P.has(z0),g0=$0?.title||"Extension status",v0=$0?.collapsed_text||"",e=String($0?.state||"").replace(/[-_]+/g," ").replace(/^./,(B_)=>B_.toUpperCase()),s=l0($0?.state==="completed"?"success":$0?.state==="failed"?"error":$0?.state==="stopped"?"warning":"info"),d=p2({steerQueued:Q,pulsing:$0?.state==="running"}),Y0=typeof $0?.detail_markdown==="string"?$0.detail_markdown.trim():"",G0=typeof $0?.last_run_text==="string"?$0.last_run_text.trim():"",E0=typeof $0?.tmux_command==="string"?$0.tmux_command.trim():"",I0=Array.isArray($0?.series)?$0.series:[],t0=Array.isArray($0?.actions)?$0.actions:[],J0=$0?.started_at?X6($0,h):null,R0=v0,Z_=Boolean(Y0||E0||J0),L_=Boolean(Y0||I0.length>0||E0),$_=[g0,R0].filter(Boolean).join(" — ");return N`
            <div
                class="agent-thinking agent-thinking-intent agent-thinking-autoresearch"
                aria-live="polite"
                data-expanded=${k0?"true":"false"}
                style=${s?`--turn-color: ${s};`:""}
                title=${!k0?$_||g0:""}
            >
                <div class="agent-thinking-header agent-thinking-header-inline">
                    <button
                        class="agent-thinking-title intent agent-thinking-title-clickable"
                        type="button"
                        onClick=${()=>L_?b(z0):null}
                    >
                        ${s&&N`<span class=${d} aria-hidden="true"></span>`}
                        <span class="agent-thinking-title-text">${g0}</span>
                        ${R0&&N`<span class="agent-thinking-title-meta">${R0}</span>`}
                        ${J0&&N`<span class="agent-status-elapsed">${J0}</span>`}
                    </button>
                    ${(t0.length>0||L_)&&N`
                        <div class="agent-thinking-tools-inline">
                            ${t0.length>0&&N`
                                <div class="agent-thinking-actions agent-thinking-actions-inline">
                                    ${t0.map((B_)=>{let k_=`${z0}:${B_?.key||""}`,e0=q?.has?.(k_);return N`
                                            <button
                                                key=${k_}
                                                class=${`agent-thinking-action-btn${B_?.tone==="danger"?" danger":""}`}
                                                onClick=${()=>L?.($0,B_)}
                                                disabled=${Boolean(e0)}
                                            >
                                                ${e0?"Working…":B_?.label||"Run"}
                                            </button>
                                        `})}
                                </div>
                            `}
                            ${L_&&N`
                                <button
                                    class="agent-thinking-corner-toggle agent-thinking-corner-toggle-inline"
                                    type="button"
                                    aria-label=${`${k0?"Collapse":"Expand"} ${g0}`}
                                    title=${k0?"Collapse details":"Expand details"}
                                    onClick=${()=>b(z0)}
                                >
                                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        ${k0?N`<polyline points="4 6 8 10 12 6"></polyline>`:N`<polyline points="4 10 8 6 12 10"></polyline>`}
                                    </svg>
                                </button>
                            `}
                        </div>
                    `}
                </div>
                ${k0&&N`
                    <div class=${`agent-thinking-autoresearch-layout${Z_?"":" chart-only"}`}>
                        ${Z_&&N`
                            <div class="agent-thinking-autoresearch-meta-stack">
                                ${J0&&N`
                                    <div class="agent-thinking-autoresearch-elapsed">
                                        <span title="Experiment duration">⏱ ${J0}</span>
                                        ${$0?.last_activity_at&&$0?.state==="running"&&N`<span title="Since last activity">⟳ ${tq($0.last_activity_at)} ago</span>`}
                                    </div>
                                `}
                                ${Y0&&N`
                                    <div
                                        class="agent-thinking-body agent-thinking-autoresearch-detail"
                                        dangerouslySetInnerHTML=${{__html:h5(Y0)}}
                                    />
                                `}
                                ${E0&&N`
                                    <div class="agent-series-chart-command">
                                        <div class="agent-series-chart-command-header">
                                            <span>Attach to session</span>
                                        </div>
                                        <div class="agent-series-chart-command-shell">
                                            <pre class="agent-series-chart-command-code">${E0}</pre>
                                            <button
                                                type="button"
                                                class="agent-series-chart-command-copy"
                                                aria-label="Copy tmux command"
                                                title="Copy tmux command"
                                                onClick=${()=>L?.($0,{key:"copy_tmux",action_type:"autoresearch.copy_tmux",label:"Copy tmux"})}
                                            >
                                                ${gO}
                                            </button>
                                        </div>
                                    </div>
                                `}
                            </div>
                        `}
                        ${I0.length>0?N`
                                <div class="agent-series-chart-stack">
                                    ${D_(I0,z0)}
                                    ${G0&&N`<div class="agent-series-chart-note">${G0}</div>`}
                                </div>
                            `:N`<div class="agent-thinking-body agent-thinking-autoresearch-summary">Variable history will appear after the first completed run.</div>`}
                    </div>
                `}
            </div>
        `};return N`
        <div class="agent-status-panel">
            ${F&&X&&w0(X,h0)}
            ${B&&Array.isArray(Y)&&Y.map(($0)=>M_($0))}
            ${F&&_?.type==="intent"&&w0(_,c0,F0)}
            ${F&&Z&&N`
                <div class="agent-status agent-status-request" aria-live="polite" style=${y0?`--turn-color: ${y0};`:""}>
                    ${m0==="dot"&&N`<span class=${o} aria-hidden="true"></span>`}
                    ${m0==="spinner"&&N`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${O_}</span>
                </div>
            `}
            ${F&&J&&r0({panelTitle:j0("Planning"),text:y.text,fullText:y.fullText,totalLines:y.totalLines,panelKey:"plan"})}
            ${F&&W&&r0({panelTitle:j0("Draft"),text:A.text,fullText:A.fullText,totalLines:A.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${F&&M&&r0({panelTitle:j0("Thoughts"),text:I.text,fullText:I.fullText,totalLines:I.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${F&&_&&_?.type!=="intent"&&N`
                <div class=${`agent-status${q0?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}${H_||E_.length>0||p0?" agent-status-multiline":""}`} aria-live="polite" style=${y0?`--turn-color: ${y0};`:""}>
                    ${y0&&O0&&N`<span class=${o} aria-hidden="true"></span>`}
                    ${_?.type==="error"?N`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:P0==="spinner"&&N`<div class="agent-status-spinner"></div>`}
                    <div class="agent-status-copy">
                        <span class="agent-status-text">${M0}</span>
                        ${(H_||K_.length>0||p0)&&N`
                            <span class="agent-status-meta-row">
                                ${S0.map(($0)=>N`
                                    <span key=${$0.key} class="agent-status-hint-row" title=${$0.title||$0.label}>
                                        <span class="agent-status-hint-icon" dangerouslySetInnerHTML=${{__html:$0.iconSvg}}></span>
                                        <span class="agent-status-hint-label">${$0.label}</span>
                                    </span>
                                `)}
                                ${H_&&N`
                                    <span class="agent-status-git-row" title=${Q0||H_}>
                                        <span class="agent-status-git-icon">${uO}</span>
                                        <span class="agent-status-git-label">
                                            ${b0&&N`<span class="agent-status-git-part">${b0}</span>`}
                                            ${b0&&d0&&N`<span class="agent-status-git-separator" aria-hidden="true">•</span>`}
                                            ${d0&&N`<span class="agent-status-git-part">${d0}</span>`}
                                        </span>
                                    </span>
                                `}
                                ${A0.map(($0)=>N`
                                    <span key=${$0.key} class="agent-status-hint-row" title=${$0.title||$0.label}>
                                        <span class="agent-status-hint-icon" dangerouslySetInnerHTML=${{__html:$0.iconSvg}}></span>
                                        <span class="agent-status-hint-label">${$0.label}</span>
                                    </span>
                                `)}
                                ${p0&&N`
                                    <span class="agent-status-hint-row agent-status-activity-row" title=${`${q0?"Recent activity":"Last event"} ${p0}`}>
                                        <span class="agent-status-hint-icon">${bO}</span>
                                        <span class="agent-status-hint-label">${p0}</span>
                                    </span>
                                `}
                            </span>
                        `}
                    </div>
                </div>
            `}
        </div>
    `}function eq({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:G,options:Z,chat_jid:X}=_,Y=G?.title||"Agent Request",q=G?.kind||"other",L=G?.rawInput||{},K=L.command||L.commands&&L.commands[0]||null,Q=L.diff||null,V=L.fileName||L.path||null,F=G?.description||L.description||L.explanation||null,U=(Array.isArray(G?.locations)?G.locations:[]).map((z)=>z?.path).filter((z)=>Boolean(z)),D=Array.from(new Set([V,...U].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:G,options:Z});let E=async(z)=>{try{await _5(j,z,X||null),$()}catch(O){console.error("Failed to respond to agent request:",O)}},H=async()=>{try{await Z7(Y,`Auto-approved: ${Y}`),await _5(j,"approved",X||null),$()}catch(z){console.error("Failed to add to whitelist:",z)}},k=Z&&Z.length>0;return N`
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
                ${(F||K||Q||D.length>0)&&N`
                    <div class="agent-request-body">
                        ${F&&N`
                            <div class="agent-request-description">${F}</div>
                        `}
                        ${D.length>0&&N`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${D.map((z,O)=>N`<li key=${O}>${z}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${K&&N`
                            <pre class="agent-request-command">${K}</pre>
                        `}
                        ${Q&&N`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${Q}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${k?Z.map((z)=>N`
                            <button 
                                key=${z.optionId||z.id||String(z)}
                                class="agent-request-btn ${z.kind==="allow_once"||z.kind==="allow_always"?"primary":""}"
                                onClick=${()=>E(z.optionId||z.id||z)}
                            >
                                ${z.name||z.label||z.optionId||z.id||String(z)}
                            </button>
                        `):N`
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
    `}x0();x0();g_();function B6(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>B6($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${B6(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function _L(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:B6(j)})).filter(($)=>$.value)}function iO(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function W9(_){if(!Array.isArray(_))return[];return _.filter(iO)}function $8(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let G=B6(j);return G?`Card submission: ${$} — ${G}`:`Card submission: ${$}`}if(typeof j==="object"){let Z=_L(j).map(({key:X,value:Y})=>`${X}: ${Y}`);return Z.length>0?`Card submission: ${$} — ${Z.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function $L(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=_L(_.data),G=j.length>0?j.slice(0,2).map(({key:X,value:Y})=>`${X}: ${Y}`).join(", "):B6(_.data)||null,Z=j.length;return{title:$,summary:G,fields:j,fieldCount:Z,submittedAt:_.submitted_at}}function C_(_){return typeof _==="string"?_.trim():""}function jL(_){return _.map(($)=>String($||"").trim()).filter(Boolean).join(`

`).replace(/\n{3,}/g,`

`).trim()}function oO(_,$){let j=[],G=[],Z=[];if(_.forEach((X,Y)=>{if(!X||typeof X!=="object")return;let q=C_(X.type);if(q==="text"){let L=C_(X.text)||C_(X.content);if(L)j.push(L);return}if(q==="resource_link"){let L=C_(X.uri),K=C_(X.title)||C_(X.name)||L;if(L&&K)j.push(K===L?L:`[${K}](${L})`);return}if(q==="resource"){let L=C_(X.title)||C_(X.name)||C_(X.uri)||"Embedded resource",K=C_(X.text);if(K)j.push(`### ${L}

\`\`\`
${K}
\`\`\``);else j.push(`### ${L}`);return}if(q==="generated_widget"){let L=C_(X.title)||C_(X.name)||"Generated widget",K=C_(X.description)||C_(X.subtitle);j.push(jL([`### ${L}`,K]));return}if(q==="adaptive_card"&&C_(X.fallback_text)){j.push(C_(X.fallback_text));return}if(q==="adaptive_card_submission"){let L=$8(X);if(C_(L))j.push(C_(L));return}if(q==="file"){let L=C_(X.name)||C_(X.filename)||C_(X.title)||`attachment:${$[Y]??Y+1}`;G.push(`- ${L}`);return}if(q==="image"||!q){let L=C_(X.name)||C_(X.filename)||C_(X.title)||`attachment:${$[Y]??Y+1}`;Z.push(`- ${L}`)}}),Z.length>0)j.push(`Images:
${Z.join(`
`)}`);if(G.length>0)j.push(`Attachments:
${G.join(`
`)}`);return jL(j)}function j8(_){let $=_?.data||{},j=typeof $.content==="string"?$.content.replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd():"";if(j.trim())return j;let G=Array.isArray($.content_blocks)?$.content_blocks:[],Z=Array.isArray($.media_ids)?$.media_ids:[];return oO(G,Z)}function GL(_,$,j){try{return _.setAttribute($,j),!0}catch(G){return!1}}function ZL(_,$){try{return _[$]=!0,!0}catch(j){return!1}}function XL(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;if(GL(j,"aria-disabled","true"),GL(j,"tabindex","-1"),"disabled"in j)ZL(j,"disabled");if("readOnly"in j)ZL(j,"readOnly")}}function sO(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let G=j[1].length===3?j[1].split("").map((Z)=>`${Z}${Z}`).join(""):j[1];return{r:parseInt(G.slice(0,2),16),g:parseInt(G.slice(2,4),16),b:parseInt(G.slice(4,6),16)}}function aO(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let G=Number(j[1]),Z=Number(j[2]),X=Number(j[3]);if(![G,Z,X].every((Y)=>Number.isFinite(Y)))return null;return{r:G,g:Z,b:X}}function YL(_){return sO(_)||aO(_)}function G8(_){let $=(X)=>{let Y=X/255;return Y<=0.03928?Y/12.92:((Y+0.055)/1.055)**2.4},j=$(_.r),G=$(_.g),Z=$(_.b);return 0.2126*j+0.7152*G+0.0722*Z}function tO(_,$){let j=Math.max(G8(_),G8($)),G=Math.min(G8(_),G8($));return(j+0.05)/(G+0.05)}function eO(_,$,j="#ffffff"){let G=YL(_);if(!G)return j;let Z=j,X=-1;for(let Y of $){let q=YL(Y);if(!q)continue;let L=tO(G,q);if(L>X)Z=Y,X=L}return Z}function O9(){let _=getComputedStyle(document.documentElement),$=(U,D)=>{for(let E of U){let H=_.getPropertyValue(E).trim();if(H)return H}return D},j=$(["--text-primary","--color-text"],"#0f1419"),G=$(["--text-secondary","--color-text-muted"],"#536471"),Z=$(["--bg-primary","--color-bg-primary"],"#ffffff"),X=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),Y=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),q=$(["--accent-color","--color-accent"],"#1d9bf0"),L=$(["--success-color","--color-success"],"#00ba7c"),K=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),Q=$(["--danger-color","--color-error"],"#f4212e"),V=$(["--border-color","--color-border"],"#eff3f4"),F=$(["--font-family"],"system-ui, sans-serif"),B=eO(q,[j,Z],j);return{fg:j,fgMuted:G,bgPrimary:Z,bg:X,bgEmphasis:Y,accent:q,good:L,warning:K,attention:Q,border:V,fontFamily:F,buttonTextColor:B}}function qL(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:G,accent:Z,good:X,warning:Y,attention:q,border:L,fontFamily:K}=O9();return{fontFamily:K,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:X,subtle:X},warning:{default:Y,subtle:Y},attention:{default:q,subtle:q}}},emphasis:{backgroundColor:G,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:X,subtle:X},warning:{default:Y,subtle:Y},attention:{default:q,subtle:q}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:L},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var _z=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),LL=!1,Z8=null,KL=!1;function z9(_){_.querySelector(".adaptive-card-notice")?.remove()}function $z(_,$,j="error"){z9(_);let G=document.createElement("div");G.className=`adaptive-card-notice adaptive-card-notice-${j}`,G.textContent=$,_.appendChild(G)}function jz(_,$=(j)=>e_(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function Gz(_=($)=>e_($,null)){return($,j)=>{try{let G=jz($,_);j.outputHtml=G.outputHtml,j.didProcess=G.didProcess}catch(G){console.error("[adaptive-card] Failed to process markdown:",G),j.outputHtml=String($??""),j.didProcess=!1}}}function Zz(_){if(KL||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=Gz(),KL=!0}async function Xz(){if(LL)return;if(Z8)return Z8;return Z8=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{LL=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),Z8}function Yz(){return globalThis.AdaptiveCards}function qz(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function Lz(_){return _z.has(_)}function A9(_){if(!Array.isArray(_))return[];return _.filter(qz)}function Kz(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",G=(typeof _?.url==="string"?_.url:"")||void 0,Z=_?.data??void 0;return{type:$,title:j,data:Z,url:G,raw:_}}function J9(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>J9($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,G])=>`${j}: ${J9(G)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function Vz(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return J9($);return typeof $==="string"?$:String($)}function Qz(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,G=(Z)=>{if(Array.isArray(Z))return Z.map((q)=>G(q));if(!Z||typeof Z!=="object")return Z;let Y={...Z};if(typeof Y.id==="string"&&Y.id in j&&String(Y.type||"").startsWith("Input."))Y.value=Vz(Y.type,j[Y.id],Y);for(let[q,L]of Object.entries(Y))if(Array.isArray(L)||L&&typeof L==="object")Y[q]=G(L);return Y};return G(_)}function Fz(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function Bz(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,G=j&&typeof j.title==="string"?j.title.trim():"",Z=Fz(_.completed_at||j?.submitted_at),X=[G||null,Z||null].filter(Boolean).join(" · ")||null;return{label:$,detail:X}}async function VL(_,$,j){if(!Lz($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await Xz()}catch(G){return console.error("[adaptive-card] Failed to load SDK:",G),!1}try{let G=Yz();Zz(G);let Z=new G.AdaptiveCard,X=O9();Z.hostConfig=new G.HostConfig(qL());let Y=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,q=$.state==="active"?$.payload:Qz($.payload,Y);Z.parse(q),Z.onExecuteAction=(Q)=>{let V=Kz(Q);if(j?.onAction)z9(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(V)).catch((F)=>{console.error("[adaptive-card] Action failed:",F);let B=F instanceof Error?F.message:String(F||"Action failed.");$z(_,B||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",V)};let L=Z.render();if(!L)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",X.buttonTextColor);let K=Bz($);if(K){_.classList.add("adaptive-card-finished");let Q=document.createElement("div");Q.className=`adaptive-card-status adaptive-card-status-${$.state}`;let V=document.createElement("span");if(V.className="adaptive-card-status-label",V.textContent=K.label,Q.appendChild(V),K.detail){let F=document.createElement("span");F.className="adaptive-card-status-detail",F.textContent=K.detail,Q.appendChild(F)}_.appendChild(Q)}if(z9(_),_.appendChild(L),K)XL(L);return!0}catch(G){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,G),!1}}x0();w2();function QL({src:_,onClose:$}){return g(()=>{let j=(G)=>{if(G.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),N`
        <${v$} className="image-modal-portal-root">
            <div class="image-modal" onClick=${$}>
                <img src=${_} alt="Full size" />
            </div>
        </${v$}>
    `}var X8=0,k9=null,N6={activePostId:null,speaking:!1},M9=new Set;function T9(_={}){return _.window??(typeof window<"u"?window:null)}function FL(_={}){return T9(_)?.speechSynthesis||null}function w9(){let _={...N6};for(let $ of M9)try{$(_)}catch(j){console.warn("[post-speech] playback listener failed:",j)}}function y9(){return{...N6}}function BL(_){if(typeof _!=="function")return()=>{};return M9.add(_),_(y9()),()=>M9.delete(_)}function NL(_={}){let $=T9(_);return Boolean($&&$.speechSynthesis&&typeof $.SpeechSynthesisUtterance==="function")}function UL(_){let $=j8(_);if(!$)return"";return String($).replace(/```[\s\S]*?```/g," Code block omitted. ").replace(/`([^`]+)`/g,"$1").replace(/!\[([^\]]*)\]\(([^)]+)\)/g,"$1").replace(/\[([^\]]+)\]\(([^)]+)\)/g,"$1").replace(/^#{1,6}\s+/gm,"").replace(/^>\s?/gm,"").replace(/^[-*+]\s+/gm,"• ").replace(/\n{3,}/g,`

`).replace(/\n\n+/g,". ").replace(/\s+/g," ").replace(/\s+([.,;:!?])/g,"$1").trim().slice(0,1600)}function HL(_={}){let $=FL(_);if(X8+=1,k9=null,N6={activePostId:null,speaking:!1},$)try{$.cancel()}catch(j){console.warn("[post-speech] cancel failed:",j)}w9()}function EL(_,$,j={}){let G=T9(j),Z=FL(j);if(!G||!Z||typeof G.SpeechSynthesisUtterance!=="function")return!1;let X=String($||"").trim();if(!X)return!1;let Y=X8+1;X8=Y;try{Z.cancel()}catch{}let q=new G.SpeechSynthesisUtterance(X);k9=q,N6={activePostId:_,speaking:!0},w9();let L=()=>{if(Y!==X8)return;k9=null,N6={activePostId:null,speaking:!1},w9()};q.onend=L,q.onerror=L;try{return Z.speak(q),!0}catch(K){return console.warn("[post-speech] speak failed:",K),L(),!1}}async function WL(_,$){try{return await _?.writeText?.($),!0}catch(j){return!1}}function x9(_,$){let j=typeof $?.text==="string"?$.text:"",G=typeof $?.html==="string"?$.html:"";if(!_||!j||typeof _.createElement!=="function"||typeof _.execCommand!=="function")return!1;let Z=null,X=!1,Y=(q)=>{let L=q?.clipboardData;if(!L||typeof L.setData!=="function")return;if(L.setData("text/plain",j),G)L.setData("text/html",G);if(typeof q.preventDefault==="function")q.preventDefault();X=!0};try{if(Z=_.createElement("textarea"),Z.value=j,typeof Z.setAttribute==="function")Z.setAttribute("readonly","");if(Z.style)Z.style.position="fixed",Z.style.opacity="0",Z.style.pointerEvents="none";if(_.body?.appendChild?.(Z),typeof Z.select==="function")Z.select();if(typeof Z.setSelectionRange==="function")Z.setSelectionRange(0,Z.value.length);_.addEventListener?.("copy",Y,!0);let q=_.execCommand("copy");return Boolean(X||q)}catch{return!1}finally{if(_.removeEventListener?.("copy",Y,!0),Z)_.body?.removeChild?.(Z)}}function DL(_){if(!_||typeof _!=="object")return null;let $=_;if(typeof $.nodeType==="number"&&$.nodeType===3)return $.parentNode||null;return $}function OL(_,$){let j=_?.clipboardData,G=$?.root,Z=$?.selection;if(!j||typeof j.setData!=="function"||!G||!Z)return!1;if(Z.isCollapsed)return!1;let X=!1;if(Number(Z.rangeCount||0)>0&&typeof Z.getRangeAt==="function")try{let L=Z.getRangeAt(0);if(L&&typeof L.intersectsNode==="function")X=Boolean(L.intersectsNode(G))}catch{X=!1}if(!X&&typeof G.contains==="function"){let L=DL(Z.anchorNode),K=DL(Z.focusNode);X=Boolean(L&&G.contains(L)||K&&G.contains(K))}if(!X)return!1;let q=typeof Z.toString==="function"?String(Z.toString()||"").replace(/\u00a0/g," "):"";if(!q)return!1;return j.setData("text/plain",q),_?.preventDefault?.(),!0}function zL(_,$){try{return Boolean(_?.getItem?.($))}catch(j){return!1}}function JL(_,$,j){try{return _?.setItem?.($,j),!0}catch(G){return!1}}function AL(_,$){let j=typeof _==="string"&&_.trim()?_.trim():null;if(j)return j;if(!$)return null;try{return new URL($).hostname}catch(G){return $}}function Nz({mediaId:_,onPreview:$}){let[j,G]=C(null);if(g(()=>{E2(_).then(G).catch((K)=>{console.warn("[post] Failed to load attachment metadata for file card:",_,K)})},[_]),!j)return null;let Z=j.filename||"file",X=j.metadata?.size,Y=X?o_(X):"",L=F6(j.content_type,j.filename)!=="unsupported";return N`
        <div class="file-attachment" onClick=${(K)=>K.stopPropagation()}>
            <a href=${P1(_)} download=${Z} class="file-attachment-main">
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
                        ${Y&&N`<span class="file-size">${Y}</span>`}
                        ${j.content_type&&N`<span class="file-size">${j.content_type}</span>`}
                    </span>
                </div>
                <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
            </a>
            ${L&&N`
                <button
                    class="file-attachment-preview"
                    type="button"
                    onClick=${(K)=>{K.preventDefault(),K.stopPropagation(),$?.({mediaId:_,info:j})}}
                >
                    Preview
                </button>
            `}
        </div>
    `}function Uz(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="recovery_marker"&&$.recovered)}function Hz(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="timeout_marker"&&($.timed_out??!0))}function Ez(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="turn_outcome_marker")}function Dz(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="peer_message")}function Wz(_){return String(_||"").split(/[:/]/).filter(Boolean).pop()||"agent"}function kL(_){let $=Dz(_)[0]||null;if(!$)return null;let j=typeof $.source_chat_jid==="string"?$.source_chat_jid.trim():"",G=typeof $.source_agent_name==="string"&&$.source_agent_name.trim()?$.source_agent_name.trim():Wz(j),Z=typeof $.target_chat_jid==="string"?$.target_chat_jid.trim():"",X=typeof $.target_agent_name==="string"?$.target_agent_name.trim():"",Y=typeof $.body==="string"?$.body:"";return{block:$,sourceChatJid:j,sourceAgentName:G,targetChatJid:Z,targetAgentName:X,body:Y}}function Oz(_,$){let j=kL($),G=typeof _==="string"?_:"";if(!j)return G;if(j.body&&j.body.trim())return j.body;let Z=j.sourceAgentName?j.sourceAgentName.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"):"[^\\s>]+",X=j.sourceChatJid?j.sourceChatJid.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"):"[^>\\n]+";return G.replace(new RegExp(`^from:\\s+@${Z}\\s+<jid:${X}>\\s*\\n\\n`,"i"),"")||G}var zz={context_recover:"context limit exceeded",rate_limit:"rate limit hit",api_error:"API error",timeout:"request timeout",overloaded:"service overloaded",connection:"connection error"};function Jz(_){let $=Number(_?.attempts_used||0),j=String(_?.classifier||"").trim(),G=zz[j]||(j?j.replace(/_/g," "):""),Z=["Recovered automatically"];if($>1)Z[0]=`Recovered after ${$} attempts`;if(G)Z.push(G);return Z.join(" — ")}function Az(_){let $=typeof _?.tool_action_summary==="string"?_.tool_action_summary.trim():"",j=_?.draft_recovered?" Showing recovered draft.":"";return $?`Turn timed out — ${$}${j}`:`Turn timed out before the model finished responding${j}`}function kz({marker:_}){let[$,j]=C(!1),G=f((V)=>{V.stopPropagation(),j((F)=>!F)},[]),Z=typeof _?.title==="string"?_.title.trim():"",X=typeof _?.detail==="string"?_.detail.trim():"",Y=typeof _?.tool_action_summary==="string"?_.tool_action_summary.trim():"",q=_?.draft_recovered,L=String(_?.severity||"warning"),K=Y||Z||String(_?.label||_?.kind||"issue"),Q=Boolean(X||Z&&Y);return N`
        <div class=${`post-outcome-pill post-outcome-pill-${L}`}>
            <div class="post-outcome-pill-header" onClick=${Q?G:void 0}>
                ${Q&&N`
                    <span class=${`post-outcome-pill-toggle${$?" expanded":""}`} aria-hidden="true">▶</span>
                `}
                <span class="post-outcome-pill-label">${K}</span>
                ${q&&N`<span class="post-outcome-pill-badge">draft recovered</span>`}
            </div>
            ${$&&Q&&N`
                <div class="post-outcome-pill-detail">
                    ${Z&&N`<div><strong>${Z}</strong></div>`}
                    ${X&&X!==Z&&N`<div>${X}</div>`}
                </div>
            `}
        </div>
    `}function Mz({attachment:_,onPreview:$}){let j=Number(_?.id),[G,Z]=C(null);g(()=>{if(!Number.isFinite(j))return;E2(j).then(Z).catch((Q)=>{console.warn("[post] Failed to load attachment metadata for attachment pill:",j,Q)});return},[j]);let X=G?.filename||_.label||`attachment-${_.id}`,Y=Number.isFinite(j)?P1(j):null,q=F6(G?.content_type,G?.filename||_?.label),L=e2(q),K=q!=="unsupported";return N`
        <span class="attachment-pill" title=${X}>
            ${Y?N`
                    <a href=${Y} download=${X} class="attachment-pill-main" onClick=${(Q)=>Q.stopPropagation()}>
                        <${k1}
                            prefix="post"
                            label=${_.label}
                            title=${X}
                        />
                    </a>
                `:N`
                    <${k1}
                        prefix="post"
                        label=${_.label}
                        title=${X}
                    />
                `}
            ${Number.isFinite(j)&&G&&K&&N`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${L}
                    onClick=${(Q)=>{Q.preventDefault(),Q.stopPropagation(),$?.({mediaId:j,info:G})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function Y8({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:G}=_,Z=G?W4(G):null;return N`
        <div class="content-annotations">
            ${$&&$.length>0&&N`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof j==="number"&&N`
                <span class="content-annotation">Priority: ${j}</span>
            `}
            ${Z&&N`
                <span class="content-annotation">Updated: ${Z}</span>
            `}
        </div>
    `}function wz({block:_}){let $=_.title||_.name||_.uri,j=_.description,G=_.size?o_(_.size):"",Z=_.mime_type||"",X=xz(Z),Y=B4(_.uri);return N`
        <a
            href=${Y||"#"}
            class="resource-link"
            target=${Y?"_blank":void 0}
            rel=${Y?"noopener noreferrer":void 0}
            onClick=${(q)=>q.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${X}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${j&&N`<div class="resource-link-description">${j}</div>`}
                <div class="resource-link-meta">
                    ${Z&&N`<span>${Z}</span>`}
                    ${G&&N`<span>${G}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function Tz({block:_}){let[$,j]=C(!1),G=_.uri||"Embedded resource",Z=_.text||"",X=Boolean(_.data),Y=_.mime_type||"";return N`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(q)=>{q.preventDefault(),q.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${G}
            </button>
            ${$&&N`
                ${Z&&N`<pre class="resource-embed-content">${Z}</pre>`}
                ${X&&N`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${Y&&N`<span class="resource-embed-blob-meta">${Y}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(q)=>{q.preventDefault(),q.stopPropagation();let L=new Blob([Uint8Array.from(atob(_.data),(V)=>V.charCodeAt(0))],{type:Y||"application/octet-stream"}),K=URL.createObjectURL(L),Q=document.createElement("a");Q.href=K,Q.download=G.split("/").pop()||"resource",Q.click(),URL.revokeObjectURL(K)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function yz({block:_,post:$,onOpenWidget:j}){if(!_)return null;let G=B9(_,$),Z=Uq(_),X=G?.artifact?.kind||_?.artifact?.kind||_?.kind||null,Y=G?.title||_.title||_.name||"Generated widget",q=G?.description||_.description||_.subtitle||"",L=_.open_label||"Open widget",K=u(!1),Q=(V)=>{if(V)V.preventDefault(),V.stopPropagation();if(!G)return;j?.(G)};return g(()=>{if(!_?.auto_open||!G||!Z||K.current)return;let V=$?.timestamp?new Date($.timestamp).getTime():0;if(V&&Date.now()-V>1e4)return;let F=`widget_opened_${_.widget_id||$?.id||""}`;if(zL(sessionStorage,F))return;K.current=!0,JL(sessionStorage,F,"1"),j?.(G)},[_?.auto_open,G,Z]),N`
        <div class="generated-widget-launch" onClick=${(V)=>V.stopPropagation()}>
            <div class="generated-widget-launch-header">
                <div class="generated-widget-launch-eyebrow">Generated widget${X?` • ${String(X).toUpperCase()}`:""}</div>
                <div class="generated-widget-launch-title">${Y}</div>
            </div>
            ${q&&N`<div class="generated-widget-launch-description">${q}</div>`}
            <div class="generated-widget-launch-actions">
                <button
                    class="generated-widget-launch-btn"
                    type="button"
                    disabled=${!Z}
                    onClick=${Q}
                    title=${Z?"Open widget in a floating pane":"Unsupported widget artifact"}
                >
                    ${L}
                </button>
                <span class="generated-widget-launch-note">
                    ${Z?"Opens in a dismissible floating pane.":"This widget artifact is missing or unsupported."}
                </span>
            </div>
        </div>
    `}function xz(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function Iz(_){let $=B4(_,{allowDataImage:!0});return $?{backgroundImage:`url("${$}")`}:void 0}function Cz({preview:_}){let $=B4(_.url),j=Iz(_.image),G=AL(_.site_name,$);return N`
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
                ${_.description&&N`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function fz(_,$){return typeof _==="string"?_:""}var ML=1800,Pz=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,Rz=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,Sz=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`,gz=`
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
</style>`;async function wL(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(x9(document,{text:$}))return!0;if(await WL(navigator.clipboard,$))return!0;try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let G=document.execCommand("copy");return document.body.removeChild(j),G}catch{return!1}}async function uz(_){let $=typeof _==="string"?_:"";if(!$)return!1;let j=e_($,null),G=`<html><head>${gz}</head><body>${j}</body></html>`;if(x9(document,{text:$,html:G}))return!0;if(navigator.clipboard?.write&&typeof ClipboardItem<"u")try{let Z=new ClipboardItem({"text/plain":new Blob([$],{type:"text/plain"}),"text/html":new Blob([G],{type:"text/html"})});return await navigator.clipboard.write([Z]),!0}catch(Z){console.warn("[post] Rich clipboard write failed, falling back to plain text copy.",Z)}return wL($)}function bz(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((Y)=>Y.querySelector("code"));if($.length===0)return()=>{};let j=new Map,G=[],Z=(Y)=>{let q=window.getSelection?.();if(!q||q.isCollapsed)return;for(let L of $)if(OL(Y,{root:L,selection:q}))return};document.addEventListener("copy",Z,!0),G.push(()=>document.removeEventListener("copy",Z,!0));let X=(Y,q)=>{let L=q||"idle";if(Y.dataset.copyState=L,L==="success")Y.innerHTML=Rz,Y.setAttribute("aria-label","Copied"),Y.setAttribute("title","Copied"),Y.classList.add("is-success"),Y.classList.remove("is-error");else if(L==="error")Y.innerHTML=Sz,Y.setAttribute("aria-label","Copy failed"),Y.setAttribute("title","Copy failed"),Y.classList.add("is-error"),Y.classList.remove("is-success");else Y.innerHTML=Pz,Y.setAttribute("aria-label","Copy code"),Y.setAttribute("title","Copy code"),Y.classList.remove("is-success","is-error")};return $.forEach((Y)=>{let q=document.createElement("div");q.className="post-code-block",Y.parentNode?.insertBefore(q,Y),q.appendChild(Y);let L=document.createElement("button");L.type="button",L.className="post-code-copy-btn",X(L,"idle"),q.appendChild(L);let K=async(Q)=>{Q.preventDefault(),Q.stopPropagation();let F=Y.querySelector("code")?.textContent||"",B=await wL(F);X(L,B?"success":"error");let U=j.get(L);if(U)clearTimeout(U);let D=setTimeout(()=>{X(L,"idle"),j.delete(L)},ML);j.set(L,D)};L.addEventListener("click",K),G.push(()=>{L.removeEventListener("click",K);let Q=j.get(L);if(Q)clearTimeout(Q);if(q.parentNode)q.parentNode.insertBefore(Y,q),q.remove()})}),()=>{G.forEach((Y)=>Y())}}function vz(_){let $=String(_||"").trim(),j=$.match(/^`([^`]+)`$/);return(j?j[1]:$).trim()}function mz(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let K=0;K<j.length;K+=1)if(j[K].trim()==="Files:"&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){G=K;break}if(G===-1)return{content:_,fileRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let K=j[X];if(/^\s*-\s+/.test(K)){let Q=vz(K.replace(/^\s*-\s+/,"").trim());if(Q)Z.push(Q)}else if(!K.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let Y=j.slice(0,G),q=j.slice(X),L=[...Y,...q].join(`
`);return L=L.replace(/\n{3,}/g,`

`).trim(),{content:L,fileRefs:Z}}function cz(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let K=0;K<j.length;K+=1)if(j[K].trim()==="Referenced messages:"&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){G=K;break}if(G===-1)return{content:_,messageRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let K=j[X];if(/^\s*-\s+/.test(K)){let V=K.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(V)Z.push(V[1])}else if(!K.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let Y=j.slice(0,G),q=j.slice(X),L=[...Y,...q].join(`
`);return L=L.replace(/\n{3,}/g,`

`).trim(),{content:L,messageRefs:Z}}function lz(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let K=0;K<j.length;K+=1){let Q=j[K].trim();if((Q==="Images:"||Q==="Attachments:")&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){G=K;break}}if(G===-1)return{content:_,attachments:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let K=j[X];if(/^\s*-\s+/.test(K)){let Q=K.replace(/^\s*-\s+/,"").trim(),V=Q.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||Q.match(/^attachment:([^\s]+)\s+(.+)$/i);if(V){let F=V[1],B=(V[2]||"").trim()||F;Z.push({id:F,label:B,raw:Q})}else Z.push({id:null,label:Q,raw:Q})}else if(!K.trim())break;else break}if(Z.length===0)return{content:_,attachments:[]};let Y=j.slice(0,G),q=j.slice(X),L=[...Y,...q].join(`
`);return L=L.replace(/\n{3,}/g,`

`).trim(),{content:L,attachments:Z}}function hz(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function pz(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let G=j.map(hz).sort((Q,V)=>V.length-Q.length),Z=new RegExp(`(${G.join("|")})`,"gi"),X=new RegExp(`^(${G.join("|")})$`,"i"),Y=new DOMParser().parseFromString(_,"text/html"),q=Y.createTreeWalker(Y.body,NodeFilter.SHOW_TEXT),L=[],K;while(K=q.nextNode())L.push(K);for(let Q of L){let V=Q.nodeValue;if(!V||!Z.test(V)){Z.lastIndex=0;continue}Z.lastIndex=0;let F=Q.parentElement;if(F&&F.closest("code, pre, script, style"))continue;let B=V.split(Z).filter((D)=>D!=="");if(B.length===0)continue;let U=Y.createDocumentFragment();for(let D of B)if(X.test(D)){let E=Y.createElement("mark");E.className="search-highlight-term",E.textContent=D,U.appendChild(E)}else U.appendChild(Y.createTextNode(D));Q.parentNode.replaceChild(U,Q)}return Y.body.innerHTML}function TL({post:_,onClick:$,onHashtagClick:j,onMessageRef:G,onScrollToMessage:Z,agentName:X,agentAvatarUrl:Y,userName:q,userAvatarUrl:L,userAvatarBackground:K,onDelete:Q,isThreadReply:V,isThreadPrev:F,isThreadNext:B,isRemoving:U,highlightQuery:D,onFileRef:E,onOpenWidget:H,onOpenAttachmentPreview:k}){let[z,O]=C(null),[y,I]=C("idle"),[A,J]=C(()=>y9()),M=u(null),W=u(null),w=_.data,x=w.type==="agent_response",P=q||"You",R=x?X||pq:P,v=typeof _.chat_agent_name==="string"?_.chat_agent_name.trim():"",c=Boolean(x&&D&&v&&v!==R),h=x?H9(X,Y,!0):H9(P,L),r=typeof K==="string"?K.trim().toLowerCase():"",b=!x&&h.image&&(r==="clear"||r==="transparent"),a=x&&Boolean(h.image),t=`background-color: ${b||a?"transparent":h.color}`,q0=w.content_meta,Z0=Boolean(q0?.truncated),D0=Boolean(q0?.preview),Q0=Z0&&!D0,L0=Z0?{originalLength:Number.isFinite(q0?.original_length)?q0.original_length:w.content?w.content.length:0,maxLength:Number.isFinite(q0?.max_length)?q0.max_length:0}:null,N0=w.content_blocks||[],H0=w.media_ids||[],y0=kL(N0),o=Boolean(y0?.sourceAgentName),j0=fz(w.content,w.link_previews);j0=Oz(j0,N0);let{content:O0,fileRefs:P0}=mz(j0),{content:m0,messageRefs:l0}=cz(O0),G_=(_0)=>{_0?.preventDefault?.(),_0?.stopPropagation?.(),G?.(_.id,_.chat_jid||null)},h0=(_0)=>{if(_0.key==="Enter"||_0.key===" ")G_(_0)},{content:c0,attachments:M0}=lz(m0);j0=c0;let p0=A9(N0),b0=W9(N0),H_=Uz(N0)[0]||null,K_=Hz(N0)[0]||null,A0=Ez(N0)[0]||null,r0=p0.length===1&&typeof p0[0]?.fallback_text==="string"?p0[0].fallback_text.trim():"",q_=b0.length===1?$8(b0[0]).trim():"",O_=Boolean(r0)&&j0?.trim()===r0||Boolean(q_)&&j0?.trim()===q_,F0=Boolean(j0)&&!Q0&&!O_,w0=typeof D==="string"?D.trim():"",C0=X0(()=>{if(!j0||O_)return"";let _0=e_(j0,j);return w0?pz(_0,w0):_0},[j0,O_,w0]),U_=X0(()=>j8(_),[_]),A_=X0(()=>NL(),[]),V_=X0(()=>UL(_),[_]),X_=Boolean(A.speaking&&A.activePostId===_.id),D_=(_0,W0)=>{_0.stopPropagation(),O(P1(W0))},M_=(_0)=>{k?.(_0)},$0=(_0)=>{_0.stopPropagation(),Q?.(_)},z0=async(_0)=>{_0.stopPropagation();let W0=await uz(U_);if(I(W0?"success":"error"),W.current)clearTimeout(W.current);W.current=setTimeout(()=>{W.current=null,I("idle")},ML)},k0=(_0)=>{if(_0.stopPropagation(),X_){HL();return}EL(_.id,V_)},g0=(_0,W0)=>{let s0=new Set;if(!_0||W0.length===0)return{content:_0,usedIds:s0};return{content:_0.replace(/attachment:([^\s)"']+)/g,(f_,z_,x_,i1)=>{let J_=z_.replace(/^\/+/,""),O1=W0.find((n_)=>n_.name&&n_.name.toLowerCase()===J_.toLowerCase()&&!s0.has(n_.id))||W0.find((n_)=>!s0.has(n_.id));if(!O1)return f_;if(s0.add(O1.id),i1.slice(Math.max(0,x_-2),x_)==="](")return`/media/${O1.id}`;return O1.name||"attachment"}),usedIds:s0}},v0=[],e=[],s=[],d=[],Y0=[],G0=[],E0=[],I0=0;if(N0.length>0)N0.forEach((_0)=>{if(_0?.type==="text"&&_0.annotations)E0.push(_0.annotations);if(_0?.type==="generated_widget")G0.push(_0);else if(_0?.type==="resource_link")d.push(_0);else if(_0?.type==="resource")Y0.push(_0);else if(_0?.type==="file"){let W0=H0[I0++];if(W0)e.push(W0),s.push({id:W0,name:_0?.name||_0?.filename||_0?.title})}else if(_0?.type==="image"||!_0?.type){let W0=H0[I0++];if(W0){let s0=typeof _0?.mime_type==="string"?_0.mime_type:void 0;v0.push({id:W0,annotations:_0?.annotations,mimeType:s0}),s.push({id:W0,name:_0?.name||_0?.filename||_0?.title})}}});else if(H0.length>0){let _0=M0.length>0;H0.forEach((W0,s0)=>{let i0=M0[s0]||null;if(s.push({id:W0,name:i0?.label||null}),_0)e.push(W0);else v0.push({id:W0,annotations:null})})}if(M0.length>0)M0.forEach((_0)=>{if(!_0?.id)return;let W0=s.find((s0)=>String(s0.id)===String(_0.id));if(W0&&!W0.name)W0.name=_0.label});let{content:t0,usedIds:J0}=g0(j0,s);j0=t0;let R0=v0.filter(({id:_0})=>!J0.has(_0)),Z_=e.filter((_0)=>!J0.has(_0)),L_=M0.length>0?M0.map((_0,W0)=>({id:_0.id||`attachment-${W0+1}`,label:_0.label||`attachment-${W0+1}`})):s.map((_0,W0)=>({id:_0.id,label:_0.name||`attachment-${W0+1}`})),$_=X0(()=>A9(N0),[N0]),B_=X0(()=>W9(N0),[N0]),k_=X0(()=>{return $_.map((_0)=>`${_0.card_id}:${_0.state}`).join("|")},[$_]);g(()=>{if(!M.current)return;return B$(M.current),bz(M.current)},[C0]),g(()=>{return BL((_0)=>{J(_0)})},[]),g(()=>()=>{if(W.current)clearTimeout(W.current)},[]);let e0=u(null);return g(()=>{if(!e0.current||$_.length===0)return;let _0=e0.current;_0.innerHTML="";for(let W0 of $_){let s0=document.createElement("div");_0.appendChild(s0),VL(s0,W0,{onAction:async(i0)=>{if(i0.type==="Action.OpenUrl"){let f_=B4(i0.url||"");if(!f_)throw Error("Invalid URL");window.open(f_,"_blank","noopener,noreferrer");return}if(i0.type==="Action.Submit"){await G7({post_id:_.id,thread_id:w.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:W0.card_id,action:{type:i0.type,title:i0.title||"",data:i0.data}});return}console.warn("[post] unsupported adaptive card action:",i0.type,i0)}}).catch((i0)=>{console.error("[post] adaptive card render error:",i0),s0.textContent=W0.fallback_text||"Card failed to render."})}},[k_,_.id]),N`
        <div id=${`post-${_.id}`} class="post ${x?"agent-post":""} ${V?"thread-reply":""} ${F?"thread-prev":""} ${B?"thread-next":""} ${U?"removing":""}" onClick=${$}>
            <div class="post-avatar ${x?"agent-avatar":""} ${h.image?"has-image":""}" style=${t}>
                ${h.image?N`<img src=${h.image} alt=${R} />`:h.letter}
            </div>
            <div class="post-body">
                <div class="post-actions">
                    ${x&&A_&&V_&&N`
                        <button
                            class=${`post-action-btn post-speak-btn${X_?" is-active":""}`}
                            type="button"
                            title=${X_?"Stop reading aloud":"Read aloud"}
                            aria-label=${X_?"Stop reading aloud":"Read aloud"}
                            onClick=${k0}
                        >
                            ${X_?N`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="6" y="6" width="12" height="12" rx="2"></rect></svg>`:N`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M11 5 6 9H3v6h3l5 4z"></path><path d="M15.5 8.5a5 5 0 0 1 0 7"></path><path d="M18 6a8.5 8.5 0 0 1 0 12"></path></svg>`}
                        </button>
                    `}
                    <button
                        class=${`post-action-btn post-copy-btn${y==="success"?" is-success":y==="error"?" is-error":""}`}
                        type="button"
                        title=${y==="success"?"Copied":y==="error"?"Copy failed":"Copy message"}
                        aria-label=${y==="success"?"Copied":y==="error"?"Copy failed":"Copy message"}
                        onClick=${z0}
                        disabled=${!U_}
                    >
                        ${y==="success"?N`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20 6L9 17l-5-5"></path></svg>`:y==="error"?N`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9"></circle><path d="M9 9l6 6M15 9l-6 6"></path></svg>`:N`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="9" y="9" width="10" height="10" rx="2"></rect><path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path></svg>`}
                    </button>
                    <button
                        class="post-action-btn post-delete-btn"
                        type="button"
                        title="Delete message"
                        aria-label="Delete message"
                        onClick=${$0}
                    >
                        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div class="post-meta">
                    <span class="post-author">${R}</span>
                    ${o&&N`
                        <span
                            class="post-chat-agent-tag"
                            title=${`From ${y0?.sourceChatJid||""}`.trim()}
                        >
                            @${y0?.sourceAgentName}
                        </span>
                    `}
                    ${c&&N`
                        <span
                            class="post-chat-agent-tag"
                            role="button"
                            tabIndex="0"
                            style="cursor:pointer"
                            title=${`Open ${v} and reference this message`}
                            onClick=${G_}
                            onKeyDown=${h0}
                        >
                            @${v}
                        </span>
                    `}
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${G_}>${vZ(_.timestamp)}</a>
                    ${H_&&N`
                        <span
                            class="post-recovery-chip"
                            title=${Jz(H_)}
                        >
                            recovered
                        </span>
                    `}
                    ${K_&&N`
                        <span
                            class="post-recovery-chip post-timeout-chip"
                            title=${Az(K_)}
                        >
                            timeout
                        </span>
                    `}
                    ${A0&&N`
                        <span
                            class=${`post-recovery-chip post-outcome-chip post-outcome-chip-${String(A0.severity||"warning")}${A0.kind==="tool_budget"?" post-outcome-chip-tool-budget":""}`}
                            title=${String(A0.label||A0.kind||"issue")}
                        >
                            ${String(A0.label||A0.kind||"issue")}
                        </span>
                    `}
                </div>
                ${A0&&N`
                    <${kz} marker=${A0} />
                `}
                ${Q0&&L0&&N`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${_6(L0.originalLength)} chars
                            ${L0.maxLength?N` • Display limit: ${_6(L0.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${D0&&L0&&N`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${_6(L0.maxLength)} of ${_6(L0.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(P0.length>0||l0.length>0||L_.length>0)&&N`
                    <div class="post-file-refs">
                        ${l0.map((_0)=>{let W0=(s0)=>{if(s0.preventDefault(),s0.stopPropagation(),Z)Z(_0,_.chat_jid||null);else{let i0=document.getElementById("post-"+_0);if(i0)i0.scrollIntoView({behavior:"smooth",block:"center"}),i0.classList.add("post-highlight"),setTimeout(()=>i0.classList.remove("post-highlight"),2000)}};return N`
                                <a href=${`#msg-${_0}`} class="post-msg-pill-link" onClick=${W0}>
                                    <${k1}
                                        prefix="post"
                                        label=${"msg:"+_0}
                                        title=${"Message "+_0}
                                        icon="message"
                                        onClick=${W0}
                                    />
                                </a>
                            `})}
                        ${P0.map((_0)=>{let W0=_0.split("/").pop()||_0;return N`
                                <${k1}
                                    prefix="post"
                                    label=${W0}
                                    title=${_0}
                                    onClick=${()=>E?.(_0)}
                                />
                            `})}
                        ${L_.map((_0)=>N`
                            <${Mz}
                                key=${_0.id}
                                attachment=${_0}
                                onPreview=${M_}
                            />
                        `)}
                    </div>
                `}
                ${F0&&N`
                    <div 
                        ref=${M}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:C0}}
                        onClick=${(_0)=>{if(_0.target.classList.contains("hashtag")){_0.preventDefault(),_0.stopPropagation();let W0=_0.target.dataset.hashtag;if(W0)j?.(W0)}else if(_0.target.tagName==="IMG")_0.preventDefault(),_0.stopPropagation(),O(_0.target.src)}}
                    />
                `}
                ${$_.length>0&&N`
                    <div ref=${e0} class="post-adaptive-cards" />
                `}
                ${B_.length>0&&N`
                    <div class="post-adaptive-card-submissions">
                        ${B_.map((_0,W0)=>{let s0=$L(_0),i0=`${_0.card_id}-${W0}`;return N`
                                <div key=${i0} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${s0.title}</span>
                                        </div>
                                    </div>
                                    ${s0.fields.length>0&&N`
                                        <div class="adaptive-card-submission-fields">
                                            ${s0.fields.map((f_)=>N`
                                                <span class="adaptive-card-submission-field" title=${`${f_.key}: ${f_.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${f_.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${f_.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${W4(s0.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${G0.length>0&&N`
                    <div class="generated-widget-launches">
                        ${G0.map((_0,W0)=>N`
                            <${yz}
                                key=${_0.widget_id||_0.id||`${_.id}-widget-${W0}`}
                                block=${_0}
                                post=${_}
                                onOpenWidget=${H}
                            />
                        `)}
                    </div>
                `}
                ${E0.length>0&&N`
                    ${E0.map((_0,W0)=>N`
                        <${Y8} key=${W0} annotations=${_0} />
                    `)}
                `}
                ${R0.length>0&&N`
                    <div class="media-preview">
                        ${R0.map(({id:_0,mimeType:W0})=>{let i0=typeof W0==="string"&&W0.toLowerCase().startsWith("image/svg")?P1(_0):X7(_0);return N`
                                <img 
                                    key=${_0} 
                                    src=${i0} 
                                    alt="Media" 
                                    loading="lazy"
                                    decoding="async"
                                    onClick=${(f_)=>D_(f_,_0)}
                                />
                            `})}
                    </div>
                `}
                ${R0.length>0&&N`
                    ${R0.map(({annotations:_0},W0)=>N`
                        ${_0&&N`<${Y8} key=${W0} annotations=${_0} />`}
                    `)}
                `}
                ${Z_.length>0&&N`
                    <div class="file-attachments">
                        ${Z_.map((_0)=>N`
                            <${Nz} key=${_0} mediaId=${_0} onPreview=${M_} />
                        `)}
                    </div>
                `}
                ${d.length>0&&N`
                    <div class="resource-links">
                        ${d.map((_0,W0)=>N`
                            <div key=${W0}>
                                <${wz} block=${_0} />
                                <${Y8} annotations=${_0.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${Y0.length>0&&N`
                    <div class="resource-embeds">
                        ${Y0.map((_0,W0)=>N`
                            <div key=${W0}>
                                <${Tz} block=${_0} />
                                <${Y8} annotations=${_0.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${w.link_previews?.length>0&&N`
                    <div class="link-previews">
                        ${w.link_previews.map((_0,W0)=>N`
                            <${Cz} key=${W0} preview=${_0} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${z&&N`<${QL} src=${z} onClose=${()=>O(null)} />`}

    `}function yL({posts:_,hasMore:$,onLoadMore:j,onPostClick:G,onHashtagClick:Z,onMessageRef:X,onScrollToMessage:Y,onFileRef:q,onOpenWidget:L,onOpenAttachmentPreview:K,emptyMessage:Q,timelineRef:V,agents:F,user:B,onDeletePost:U,reverse:D=!0,removingPostIds:E,searchQuery:H}){let[k,z]=C(!1),O=u(null),y=typeof IntersectionObserver<"u",I=f(async()=>{if(!j||!$||k)return;z(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{z(!1)}},[$,k,j]),A=f((v)=>{let{scrollTop:c,scrollHeight:h,clientHeight:r}=v.target,b=D?h-r-c:c,a=Math.max(300,r);if(b<a)I()},[D,I]);g(()=>{if(!y)return;let v=O.current,c=V?.current;if(!v||!c)return;let h=300,r=new IntersectionObserver((b)=>{for(let a of b){if(!a.isIntersecting)continue;I()}},{root:c,rootMargin:`${h}px 0px ${h}px 0px`,threshold:0});return r.observe(v),()=>r.disconnect()},[y,$,j,V,I]);let J=u(I);if(J.current=I,g(()=>{if(y)return;if(!V?.current)return;let{scrollTop:v,scrollHeight:c,clientHeight:h}=V.current,r=D?c-h-v:v,b=Math.max(300,h);if(r<b)J.current?.()},[y,_,$,D,V]),g(()=>{if(!V?.current)return;if(!$||k)return;let{scrollTop:v,scrollHeight:c,clientHeight:h}=V.current,r=D?c-h-v:v,b=Math.max(300,h);if(c<=h+1||r<b)J.current?.()},[_,$,k,D,V]),!_)return N`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return N`
            <div class="timeline" ref=${V}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${Q||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let M=_.slice().sort((v,c)=>v.id-c.id),W=(v)=>{let c=v?.data?.thread_id;if(c===null||c===void 0||c==="")return null;let h=Number(c);return Number.isFinite(h)?h:null},w=new Map;for(let v=0;v<M.length;v+=1){let c=M[v],h=Number(c?.id),r=W(c);if(r!==null){let b=w.get(r)||{anchorIndex:-1,replyIndexes:[]};b.replyIndexes.push(v),w.set(r,b)}else if(Number.isFinite(h)){let b=w.get(h)||{anchorIndex:-1,replyIndexes:[]};b.anchorIndex=v,w.set(h,b)}}let x=new Map;for(let[v,c]of w.entries()){let h=new Set;if(c.anchorIndex>=0)h.add(c.anchorIndex);for(let r of c.replyIndexes)h.add(r);x.set(v,Array.from(h).sort((r,b)=>r-b))}let P=M.map((v,c)=>{let h=W(v);if(h===null)return{hasThreadPrev:!1,hasThreadNext:!1};let r=x.get(h);if(!r||r.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let b=r.indexOf(c);if(b<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:b>0,hasThreadNext:b<r.length-1}}),R=N`<div class="timeline-sentinel" ref=${O}></div>`;return N`
        <div class="timeline ${D?"reverse":"normal"}" ref=${V} onScroll=${A}>
            <div class="timeline-content">
                ${D?R:null}
                ${M.map((v,c)=>{let h=Boolean(v.data?.thread_id&&v.data.thread_id!==v.id),r=E?.has?.(v.id),b=P[c]||{};return N`
                    <${TL}
                        key=${v.id}
                        post=${v}
                        isThreadReply=${h}
                        isThreadPrev=${b.hasThreadPrev}
                        isThreadNext=${b.hasThreadNext}
                        isRemoving=${r}
                        highlightQuery=${H}
                        agentName=${nq(v.data?.agent_id,F||{})}
                        agentAvatarUrl=${rq(v.data?.agent_id,F||{})}
                        userName=${B?.name||B?.user_name}
                        userAvatarUrl=${B?.avatar_url||B?.avatarUrl||B?.avatar}
                        userAvatarBackground=${B?.avatar_background||B?.avatarBackground}
                        onClick=${()=>G?.(v)}
                        onHashtagClick=${Z}
                        onMessageRef=${X}
                        onScrollToMessage=${Y}
                        onFileRef=${q}
                        onOpenWidget=${L}
                        onDelete=${U}
                        onOpenAttachmentPreview=${K}
                    />
                `})}
                ${D?null:R}
            </div>
        </div>
    `}x0();g_();function xL(_){try{return _?.focus?.(),_?.select?.(),!0}catch($){return!1}}var q8="workspaceExplorerScale",nz=["compact","default","comfortable"],rz=new Set(nz),dz={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function IL(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return rz.has(j)?j:$}function I9(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),G=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||G&&j}}function iz(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function oz(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function C9(_={}){let $=iz(_),j=_.stored?IL(_.stored,$):$;return oz(j,_)}function CL(_){return dz[IL(_)]}m7();function sz(_){if(!_||_.kind!=="text")return!1;let $=Number(_.size);return!Number.isFinite($)||$<=262144}function f9(_,$){let j=String(_||"").trim();if(!j||j.endsWith("/"))return!1;if(typeof $!=="function")return!1;let G=$({path:j,mode:"edit"});if(!G||typeof G!=="object")return!1;return G.id!=="editor"}function fL(_,$,j={}){let G=j.resolvePane;if(f9(_,G))return!0;return sz($)}var uL=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function az(_){let $=String(_||"").trim();if(!$||$.endsWith("/"))return!1;return f9($,(j)=>Y_.resolve(j))}function bL(_,$,j,G=0,Z=[]){if(!j&&uL(_))return Z;if(!_)return Z;if(Z.push({node:_,depth:G}),_.type==="dir"&&_.children&&$.has(_.path))for(let X of _.children)bL(X,$,j,G+1,Z);return Z}function PL(_,$,j){if(!_)return"";let G=[],Z=(X)=>{if(!j&&uL(X))return;if(G.push(X.type==="dir"?`d:${X.path}`:`f:${X.path}`),X.children&&$?.has(X.path))for(let Y of X.children)Z(Y)};return Z(_),G.join("|")}function g9(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,G=Array.isArray($.children)?$.children:null;if(!G)return _;let Z=j?new Map(j.map((q)=>[q?.path,q])):new Map,X=!j||j.length!==G.length,Y=G.map((q)=>{let L=g9(Z.get(q.path),q);if(L!==Z.get(q.path))X=!0;return L});return X?{...$,children:Y}:_}function R9(_,$,j){if(!_)return _;if(_.path===$)return g9(_,j);if(!Array.isArray(_.children))return _;let G=!1,Z=_.children.map((X)=>{let Y=R9(X,$,j);if(Y!==X)G=!0;return Y});return G?{..._,children:Z}:_}var vL=4,P9=14,tz=16;function mL(_){if(!_)return 0;if(_.type==="file"){let G=Math.max(0,Number(_.size)||0);return _.__bytes=G,G}let $=Array.isArray(_.children)?_.children:[],j=0;for(let G of $)j+=mL(G);return _.__bytes=j,j}function cL(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),G={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=vL)return G;let Z=Array.isArray(_.children)?_.children:[],X=[];for(let q of Z){let L=Math.max(0,Number(q?.__bytes??q?.size??0));if(L<=0)continue;if(q.type==="dir")X.push({kind:"dir",node:q,size:L});else X.push({kind:"file",name:q.name,path:q.path,size:L})}X.sort((q,L)=>L.size-q.size);let Y=X;if(X.length>P9){let q=X.slice(0,P9-1),L=X.slice(P9-1),K=L.reduce((Q,V)=>Q+V.size,0);q.push({kind:"other",name:`+${L.length} more`,path:`${G.path}/[other]`,size:K}),Y=q}return G.children=Y.map((q)=>{if(q.kind==="dir")return cL(q.node,$+1);return{name:q.name,path:q.path,size:q.size,children:[]}}),G}function RL(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function lL(_,$,j){let G=((_+Math.PI/2)*180/Math.PI+360)%360,Z=j?Math.max(30,70-$*10):Math.max(34,66-$*8),X=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${G.toFixed(1)} ${Z}% ${X}%)`}function L8(_,$,j,G){return{x:_+j*Math.cos(G),y:$+j*Math.sin(G)}}function u9(_,$,j,G,Z,X){let Y=Math.PI*2-0.0001,q=X-Z>Y?Z+Y:X,L=L8(_,$,G,Z),K=L8(_,$,G,q),Q=L8(_,$,j,q),V=L8(_,$,j,Z),F=q-Z>Math.PI?1:0;return[`M ${L.x.toFixed(3)} ${L.y.toFixed(3)}`,`A ${G} ${G} 0 ${F} 1 ${K.x.toFixed(3)} ${K.y.toFixed(3)}`,`L ${Q.x.toFixed(3)} ${Q.y.toFixed(3)}`,`A ${j} ${j} 0 ${F} 0 ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,"Z"].join(" ")}var hL={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function pL(_,$,j){let G=[],Z=[],X=Math.max(0,Number($)||0),Y=(q,L,K,Q)=>{let V=Array.isArray(q?.children)?q.children:[];if(!V.length)return;let F=Math.max(0,Number(q.size)||0);if(F<=0)return;let B=K-L,U=L;V.forEach((D,E)=>{let H=Math.max(0,Number(D.size)||0);if(H<=0)return;let k=H/F,z=U,O=E===V.length-1?K:U+B*k;if(U=O,O-z<0.003)return;let y=hL[Q];if(y){let I=lL(z,Q,j);if(G.push({key:D.path,path:D.path,label:D.name,size:H,color:I,depth:Q,startAngle:z,endAngle:O,innerRadius:y[0],outerRadius:y[1],d:u9(120,120,y[0],y[1],z,O)}),Q===1)Z.push({key:D.path,name:D.name,size:H,pct:X>0?H/X*100:0,color:I})}if(Q<vL)Y(D,z,O,Q+1)})};return Y(_,-Math.PI/2,Math.PI*3/2,1),{segments:G,legend:Z}}function S9(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let G of j){let Z=S9(G,$);if(Z)return Z}return null}function nL(_,$,j,G){if(!j||j<=0)return{segments:[],legend:[]};let Z=hL[1];if(!Z)return{segments:[],legend:[]};let X=-Math.PI/2,Y=Math.PI*3/2,q=lL(X,1,G),K=`${$||"."}/[files]`;return{segments:[{key:K,path:K,label:_,size:j,color:q,depth:1,startAngle:X,endAngle:Y,innerRadius:Z[0],outerRadius:Z[1],d:u9(120,120,Z[0],Z[1],X,Y)}],legend:[{key:K,name:_,size:j,pct:100,color:q}]}}function SL(_,$=!1,j=!1){if(!_)return null;let G=mL(_),Z=cL(_,0),X=Z.size||G,{segments:Y,legend:q}=pL(Z,X,j);if(!Y.length&&X>0){let L=nL("[files]",Z.path,X,j);Y=L.segments,q=L.legend}return{root:Z,totalSize:X,segments:Y,legend:q,truncated:$,isDarkTheme:j}}function ez({payload:_}){if(!_)return null;let[$,j]=C(null),[G,Z]=C(_?.root?.path||"."),[X,Y]=C(()=>[_?.root?.path||"."]),[q,L]=C(!1);g(()=>{let W=_?.root?.path||".";Z(W),Y([W]),j(null)},[_?.root?.path,_?.totalSize]),g(()=>{if(!G)return;L(!0);let W=setTimeout(()=>L(!1),180);return()=>clearTimeout(W)},[G]);let K=X0(()=>{return S9(_.root,G)||_.root},[_?.root,G]),Q=K?.size||_.totalSize||0,{segments:V,legend:F}=X0(()=>{let W=pL(K,Q,_.isDarkTheme);if(W.segments.length>0)return W;if(Q<=0)return W;let w=K?.children?.length?"Total":"[files]";return nL(w,K?.path||_?.root?.path||".",Q,_.isDarkTheme)},[K,Q,_.isDarkTheme,_?.root?.path]),[B,U]=C(V),D=u(new Map),E=u(0);g(()=>{let W=D.current,w=new Map(V.map((v)=>[v.key,v])),x=performance.now(),P=220,R=(v)=>{let c=Math.min(1,(v-x)/220),h=c*(2-c),r=V.map((b)=>{let t=W.get(b.key)||{startAngle:b.startAngle,endAngle:b.startAngle,innerRadius:b.innerRadius,outerRadius:b.innerRadius},q0=(N0,H0)=>N0+(H0-N0)*h,Z0=q0(t.startAngle,b.startAngle),D0=q0(t.endAngle,b.endAngle),Q0=q0(t.innerRadius,b.innerRadius),L0=q0(t.outerRadius,b.outerRadius);return{...b,d:u9(120,120,Q0,L0,Z0,D0)}});if(U(r),c<1)E.current=requestAnimationFrame(R)};if(E.current)cancelAnimationFrame(E.current);return E.current=requestAnimationFrame(R),D.current=w,()=>{if(E.current)cancelAnimationFrame(E.current)}},[V]);let H=B.length?B:V,k=Q>0?o_(Q):"0 B",z=K?.name||"",y=(z&&z!=="."?z:"Total")||"Total",I=k,A=X.length>1,J=(W)=>{if(!W?.path)return;let w=S9(_.root,W.path);if(!w||!Array.isArray(w.children)||w.children.length===0)return;Y((x)=>[...x,w.path]),Z(w.path),j(null)},M=()=>{if(!A)return;Y((W)=>{let w=W.slice(0,-1);return Z(w[w.length-1]||_?.root?.path||"."),w}),j(null)};return N`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${q?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${K?.path||_?.root?.path||"."}`}
                data-segments=${H.length}
                data-base-size=${Q}>
                ${H.map((W)=>N`
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
                        onClick=${()=>J(W)}
                    >
                        <title>${W.label} — ${o_(W.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${A?" is-drill":""}`}
                    onClick=${M}
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${y}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${I}</text>
                </g>
            </svg>
            ${F.length>0&&N`
                <div class="workspace-folder-starburst-legend">
                    ${F.slice(0,8).map((W)=>N`
                        <div key=${W.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${W.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${W.name}>${W.name}</span>
                            <span class="workspace-folder-starburst-size">${o_(W.size)}</span>
                            <span class="workspace-folder-starburst-pct">${W.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&N`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function gL(_){if(typeof document>"u"||!_)return;let $=document.createElement("a");$.href=_,$.setAttribute("download",""),$.rel="noopener",$.style.display="none",document.body.appendChild($),$.click(),$.remove()}function rL(_){switch(_?.state){case"indexing":return"Indexing workspace…";case"ready":return"Workspace index ready";case"stale":return"Workspace index may be stale";case"failed":return"Workspace index failed";case"never_indexed":return"Workspace index not built yet";default:return"Checking workspace index…"}}function _J(_){if(!_)return"Workspace index status";let $=[rL(_)];if(_.last_indexed_at)$.push(`Last indexed: ${_.last_indexed_at}`);if(typeof _.indexed_file_count==="number")$.push(`Indexed files: ${_.indexed_file_count}`);if(Array.isArray(_.roots)&&_.roots.length)$.push(`Roots: ${_.roots.join(", ")}`);if(_.last_error)$.push(`Error: ${_.last_error}`);return $.join(`
`)}function $J(_){let $=_?.target;if($&&typeof $==="object")return $;return $?.parentElement||null}function jJ(_){return Boolean(_?.closest?.(".workspace-node-icon, .workspace-label-text"))}function GJ(_,$=null){let j=$J(_),G=j?.closest?.(".workspace-row");if(!G)return null;let Z=G.dataset.type,X=G.dataset.path;if(!X||X===".")return null;if($===X)return null;let Y=_?.touches?.[0];if(!Y)return null;return{type:Z,path:X,dragPath:jJ(j)?X:null,startX:Y.clientX,startY:Y.clientY}}function dL({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:G,onOpenTerminalTab:Z,onOpenVncTab:X,onToggleTerminal:Y,terminalVisible:q=!1}){let[L,K]=C(null),[Q,V]=C(new Set(["."])),[F,B]=C(null),[U,D]=C(null),[E,H]=C(""),[k,z]=C(null),[,O]=C(null),[y,I]=C(!0),[A,J]=C(!1),[M,W]=C(null),[w,x]=C(()=>V$("workspaceShowHidden",!1)),[P,R]=C(!1),[v,c]=C(null),[h,r]=C(null),[b,a]=C(null),[t,q0]=C(!1),[Z0,D0]=C(null),[Q0,L0]=C(null),[N0,H0]=C(null),[y0,o]=C(!1),[j0,O0]=C(()=>X5()),[P0,m0]=C(()=>RL()),[l0,G_]=C(()=>C9({stored:E1(q8),...I9()})),[h0,c0]=C(!1),M0=Math.max(15000,(Number(j0?.refreshIntervalSec)||60)*1000),p0=Math.max(0,Number(j0?.folderPreviewDepth)||0),b0=u(Q),d0=u(""),H_=u(null),E_=u(0),K_=u(new Set),S0=u(null),A0=u(null),r0=u(new Map),q_=u(_),O_=u(G),F0=u(null),w0=u(null),C0=u(null),U_=u(null),A_=u(null),V_=u(null),X_=u("."),D_=u(0),M_=u({path:null,dragging:!1,startX:0,startY:0}),$0=u({path:null,dragging:!1,startX:0,startY:0}),z0=u({path:null,timer:0}),k0=u(!1),g0=u(0),v0=u(new Map),e=u(null),s=u(null),d=u(null),Y0=u(null),G0=u(null),E0=u(null),I0=u(w),t0=u($),J0=u(j??$),R0=u(0),Z_=u(b),L_=u(P),$_=u(v),B_=u(null),k_=u({x:0,y:0}),e0=u(0),_0=u(null),W0=u(F),s0=u(U),i0=u(null),f_=u(k);q_.current=_,O_.current=G,g(()=>{b0.current=Q},[Q]),g(()=>{I0.current=w},[w]),g(()=>{t0.current=$},[$]),g(()=>{J0.current=j??$},[j,$]),g(()=>{Z_.current=b},[b]);let z_=f(()=>{if(!D_.current)return;clearTimeout(D_.current),D_.current=0},[]);g(()=>()=>z_(),[z_]),g(()=>{if(typeof window>"u")return;let S=()=>{G_(C9({stored:E1(q8),...I9()}))};S();let l=()=>S(),p=()=>S(),i=(U0)=>{if(!U0||U0.key===null||U0.key===q8)S()};window.addEventListener("resize",l),window.addEventListener("focus",p),window.addEventListener("storage",i);let B0=window.matchMedia?.("(pointer: coarse)"),K0=window.matchMedia?.("(hover: none)"),T0=(U0,o0)=>{if(!U0)return;if(U0.addEventListener)U0.addEventListener("change",o0);else if(U0.addListener)U0.addListener(o0)},u0=(U0,o0)=>{if(!U0)return;if(U0.removeEventListener)U0.removeEventListener("change",o0);else if(U0.removeListener)U0.removeListener(o0)};return T0(B0,l),T0(K0,l),()=>{window.removeEventListener("resize",l),window.removeEventListener("focus",p),window.removeEventListener("storage",i),u0(B0,l),u0(K0,l)}},[]),g(()=>{if(typeof window>"u")return;let S=()=>{O0(X5())},l=(B0)=>{if(!B0||B0.key===null||B0.key===P2||B0.key===R2)S()},p=()=>S(),i=(B0)=>{let K0=B0?.detail?.settings;if(K0&&typeof K0==="object"){O0({refreshIntervalSec:Number(K0.refreshIntervalSec)||60,folderPreviewDepth:Math.max(0,Number(K0.folderPreviewDepth)||0)});return}S()};return window.addEventListener("focus",p),window.addEventListener("storage",l),window.addEventListener(f2,i),()=>{window.removeEventListener("focus",p),window.removeEventListener("storage",l),window.removeEventListener(f2,i)}},[]),g(()=>{let S=(l)=>{let p=l?.detail?.path;if(!p)return;let i=p.split("/"),B0=[];for(let K0=1;K0<i.length;K0++)B0.push(i.slice(0,K0).join("/"));if(B0.length)V((K0)=>{let T0=new Set(K0);T0.add(".");for(let u0 of B0)T0.add(u0);return T0});B(p),requestAnimationFrame(()=>{let K0=document.querySelector(`[data-path="${CSS.escape(p)}"]`);if(K0)K0.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",S),()=>window.removeEventListener("workspace-reveal-path",S)},[]),g(()=>{L_.current=P},[P]),g(()=>{$_.current=v},[v]),g(()=>{W0.current=F},[F]),g(()=>{s0.current=U},[U]),g(()=>{f_.current=k},[k]),g(()=>{if(typeof window>"u"||typeof document>"u")return;let S=()=>m0(RL());S();let l=window.matchMedia?.("(prefers-color-scheme: dark)"),p=()=>S();if(l?.addEventListener)l.addEventListener("change",p);else if(l?.addListener)l.addListener(p);let i=typeof MutationObserver<"u"?new MutationObserver(()=>S()):null;if(i?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)i?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(l?.removeEventListener)l.removeEventListener("change",p);else if(l?.removeListener)l.removeListener(p);i?.disconnect()}},[]),g(()=>{if(!U)return;let S=A_.current;if(!S)return;let l=requestAnimationFrame(()=>{xL(S)});return()=>cancelAnimationFrame(l)},[U]),g(()=>{if(!h0)return;let S=(p)=>{let i=p?.target;if(!(i instanceof Element))return;if(G0.current?.contains(i))return;if(E0.current?.contains(i))return;c0(!1)},l=(p)=>{if(p?.key==="Escape")c0(!1),E0.current?.focus?.()};return document.addEventListener("mousedown",S),document.addEventListener("touchstart",S,{passive:!0}),document.addEventListener("keydown",l),()=>{document.removeEventListener("mousedown",S),document.removeEventListener("touchstart",S),document.removeEventListener("keydown",l)}},[h0]);let x_=async(S,l={})=>{let p=Boolean(l?.autoOpen),i=String(S||"").trim();J(!0),z(null),O(null);try{let B0=await V7(i,20000);if(p&&i&&fL(i,B0,{resolvePane:(K0)=>Y_.resolve(K0)}))return O_.current?.(i,B0),B0;return z(B0),B0}catch(B0){let K0={error:B0.message||"Failed to load preview"};return z(K0),K0}finally{J(!1)}};F0.current=x_;let i1=f(async()=>{try{let S=await L7("all");return H0(S),S}catch(S){return console.warn("[workspace-explorer] Failed to load workspace index status:",S),null}},[]);A0.current=i1;let J_=f(()=>{A0.current?.()},[]),d_=async()=>{if(!t0.current)return;try{let S=await s5("",1,I0.current),l=PL(S.root,b0.current,I0.current);if(l===d0.current){I(!1);return}if(d0.current=l,H_.current=S.root,!E_.current)E_.current=requestAnimationFrame(()=>{E_.current=0,K((p)=>g9(p,H_.current)),I(!1)})}catch(S){W(S.message||"Failed to load workspace"),I(!1)}},O1=async(S)=>{if(!S)return;if(K_.current.has(S))return;K_.current.add(S);try{let l=await s5(S,1,I0.current);K((p)=>R9(p,S,l.root))}catch(l){W(l.message||"Failed to load workspace")}finally{K_.current.delete(S)}};w0.current=O1;let b_=f(()=>{let S=F;if(!S)return".";let l=r0.current?.get(S);if(l&&l.type==="dir")return l.path;if(S==="."||!S.includes("/"))return".";let p=S.split("/");return p.pop(),p.join("/")||"."},[F]),n_=f((S)=>{let l=S?.closest?.(".workspace-row");if(!l)return null;let p=l.dataset.path,i=l.dataset.type;if(!p)return null;if(i==="dir")return p;if(p.includes("/")){let B0=p.split("/");return B0.pop(),B0.join("/")||"."}return"."},[]),q1=f((S)=>{return n_(S?.target||null)},[n_]),__=f((S)=>{Z_.current=S,a(S)},[]),v_=f(()=>{let S=z0.current;if(S?.timer)clearTimeout(S.timer);z0.current={path:null,timer:0}},[]),i_=f((S)=>{if(!S||S==="."){v_();return}let l=r0.current?.get(S);if(!l||l.type!=="dir"){v_();return}if(b0.current?.has(S)){v_();return}if(z0.current?.path===S)return;v_();let p=setTimeout(()=>{z0.current={path:null,timer:0},w0.current?.(S),V((i)=>{let B0=new Set(i);return B0.add(S),B0})},600);z0.current={path:S,timer:p}},[v_]),L1=f((S,l)=>{if(k_.current={x:S,y:l},e0.current)return;e0.current=requestAnimationFrame(()=>{e0.current=0;let p=B_.current;if(!p)return;let i=k_.current;p.style.transform=`translate(${i.x+12}px, ${i.y+12}px)`})},[]),M1=f((S)=>{if(!S)return;let p=(r0.current?.get(S)?.name||S.split("/").pop()||S).trim();if(!p)return;r({path:S,label:p})},[]),o1=f(()=>{if(r(null),e0.current)cancelAnimationFrame(e0.current),e0.current=0;if(B_.current)B_.current.style.transform="translate(-9999px, -9999px)"},[]),W$=f((S)=>{if(!S)return".";let l=r0.current?.get(S);if(l&&l.type==="dir")return l.path;if(S==="."||!S.includes("/"))return".";let p=S.split("/");return p.pop(),p.join("/")||"."},[]),F1=f(()=>{D(null),H("")},[]),s_=f((S)=>{if(!S)return;let p=(r0.current?.get(S)?.name||S.split("/").pop()||S).trim();if(!p||S===".")return;D(S),H(p)},[]),r_=f(async()=>{let S=s0.current;if(!S)return;let l=(E||"").trim();if(!l){F1();return}let p=r0.current?.get(S),i=(p?.name||S.split("/").pop()||S).trim();if(l===i){F1();return}try{let K0=(await B7(S,l))?.path||S,T0=S.includes("/")?S.split("/").slice(0,-1).join("/")||".":".";if(F1(),W(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:S,newPath:K0,type:p?.type||"file"}})),p?.type==="dir")V((u0)=>{let U0=new Set;for(let o0 of u0)if(o0===S)U0.add(K0);else if(o0.startsWith(`${S}/`))U0.add(`${K0}${o0.slice(S.length)}`);else U0.add(o0);return U0});if(B(K0),p?.type==="dir")z(null),J(!1),O(null);else F0.current?.(K0);w0.current?.(T0),J_()}catch(B0){W(B0?.message||"Failed to rename file")}},[F1,E,J_]),a$=f(async(S)=>{let i=S||".";for(let B0=0;B0<50;B0+=1){let T0=`untitled${B0===0?"":`-${B0}`}.md`;try{let U0=(await F7(i,T0,""))?.path||(i==="."?T0:`${i}/${T0}`);if(i&&i!==".")V((o0)=>new Set([...o0,i]));B(U0),W(null),w0.current?.(i),F0.current?.(U0),J_();return}catch(u0){if(u0?.status===409||u0?.code==="file_exists")continue;W(u0?.message||"Failed to create file");return}}W("Failed to create file (untitled name already in use).")},[]),j1=f((S)=>{if(S?.stopPropagation?.(),t)return;let l=W$(W0.current);a$(l)},[t,W$,a$]);g(()=>{if(typeof window>"u")return;let S=(l)=>{let p=l?.detail?.updates||[];if(!Array.isArray(p)||p.length===0)return;K((u0)=>{let U0=u0;for(let o0 of p){if(!o0?.root)continue;if(!U0||o0.path==="."||!o0.path)U0=o0.root;else U0=R9(U0,o0.path,o0.root)}if(U0)d0.current=PL(U0,b0.current,I0.current);return I(!1),U0});let i=W0.current;if(Boolean(i)&&p.some((u0)=>{let U0=u0?.path||"";if(!U0||U0===".")return!0;return i===U0||i.startsWith(`${U0}/`)||U0.startsWith(`${i}/`)}))v0.current.clear();if(J_(),!i||!f_.current)return;let K0=r0.current?.get(i);if(K0&&K0.type==="dir")return;if(p.some((u0)=>{let U0=u0?.path||"";if(!U0||U0===".")return!0;return i===U0||i.startsWith(`${U0}/`)}))F0.current?.(i)};return window.addEventListener("workspace-update",S),()=>window.removeEventListener("workspace-update",S)},[]),S0.current=d_;let B1=u(()=>{if(typeof window>"u")return;let S=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),l=J0.current??t0.current,p=document.visibilityState!=="hidden"&&(l||S.matches&&t0.current);a5(p,I0.current).catch((i)=>{console.debug("[workspace-explorer] Workspace visibility ping failed.",i,{visible:p,showHidden:I0.current})})}).current,K1=u(0),s1=u(()=>{if(K1.current)clearTimeout(K1.current);K1.current=setTimeout(()=>{K1.current=0,B1()},250)}).current;g(()=>{if(t0.current)S0.current?.(),A0.current?.();s1()},[$,j]),g(()=>{S0.current(),A0.current?.();let S=setInterval(()=>{S0.current(),A0.current?.()},M0);return()=>clearInterval(S)},[M0]),g(()=>{B1();let S=V4("previewHeight",null),l=Number.isFinite(S)?Math.min(Math.max(S,80),600):280;if(g0.current=l,C0.current)C0.current.style.setProperty("--preview-height",`${l}px`);let p=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),i=()=>s1();if(p.addEventListener)p.addEventListener("change",i);else if(p.addListener)p.addListener(i);return document.addEventListener("visibilitychange",i),()=>{if(E_.current)cancelAnimationFrame(E_.current),E_.current=0;if(p.removeEventListener)p.removeEventListener("change",i);else if(p.removeListener)p.removeListener(i);if(document.removeEventListener("visibilitychange",i),K1.current)clearTimeout(K1.current),K1.current=0;a5(!1,I0.current).catch((B0)=>{console.debug("[workspace-explorer] Workspace visibility teardown ping failed.",B0,{showHidden:I0.current})})}},[]);let N1=X0(()=>bL(L,Q,w),[L,Q,w]),O$=X0(()=>new Map(N1.map((S)=>[S.node.path,S.node])),[N1]),w6=X0(()=>CL(l0),[l0]);r0.current=O$;let I_=(F?r0.current.get(F):null)?.type==="dir";g(()=>{if(!F||!I_){L0(null),e.current=null,s.current=null;return}if(p0<=0){L0({loading:!1,error:null,payload:null,disabled:!0}),e.current=null,s.current=null;return}let S=F,l=`${w?"hidden":"visible"}:${p0}:${F}`,p=v0.current,i=p.get(l);if(i?.root){p.delete(l),p.set(l,i);let T0=SL(i.root,Boolean(i.truncated),P0);if(T0)e.current=T0,s.current=F,L0({loading:!1,error:null,payload:T0,disabled:!1});return}let B0=e.current,K0=s.current;L0({loading:!0,error:null,payload:K0===F?B0:null,disabled:!1}),s5(F,p0,w).then((T0)=>{if(W0.current!==S)return;let u0={root:T0?.root,truncated:Boolean(T0?.truncated)};p.delete(l),p.set(l,u0);while(p.size>tz){let o0=p.keys().next().value;if(!o0)break;p.delete(o0)}let U0=SL(u0.root,u0.truncated,P0);e.current=U0,s.current=F,L0({loading:!1,error:null,payload:U0,disabled:!1})}).catch((T0)=>{if(W0.current!==S)return;L0({loading:!1,error:T0?.message||"Failed to load folder size chart",payload:K0===F?B0:null,disabled:!1})})},[F,I_,w,P0,p0]);let w1=Boolean(k&&k.kind==="text"&&!I_&&(!k.size||k.size<=262144)),z5=w1?"Open in editor":k?.size>262144?"File too large to edit":"File is not editable",R1=Boolean(F&&!I_&&az(F)),S1=Boolean(F&&F!=="."),a1=Boolean(F&&!I_),x4=Boolean(F&&!I_),J$=F&&I_?O2(F,w):null,J5=rL(N0),A5=_J(N0),I4=N0?.state||"never_indexed",t$=I4!=="ready",G1=f(()=>c0(!1),[]),P_=f(async(S)=>{G1();try{await S?.()}catch(l){console.warn("[workspace-explorer] Header menu action failed:",l)}},[G1]),k5=f(async(S)=>{S?.stopPropagation?.(),o(!0),H0((l)=>({scope:"all",last_indexed_at:l?.last_indexed_at||null,last_error:null,indexed_file_count:l?.indexed_file_count||0,roots:l?.roots||[],updated_at:l?.updated_at||null,state:"indexing"}));try{let l=await K7("all");H0(l),W(null),d0.current="",S0.current?.()}catch(l){let p=l?.message||"Failed to reindex workspace";H0((i)=>({scope:"all",last_indexed_at:i?.last_indexed_at||null,last_error:p,indexed_file_count:i?.indexed_file_count||0,roots:i?.roots||[],updated_at:i?.updated_at||null,state:"failed"})),W(p)}finally{o(!1)}},[]);g(()=>{let S=d.current;if(Y0.current)Y0.current.dispose(),Y0.current=null;if(!S)return;if(S.innerHTML="",!F||I_||!k||k.error)return;let l={path:F,content:typeof k.text==="string"?k.text:void 0,mtime:k.mtime,size:k.size,preview:k,mode:"view"},p=Y_.resolve(l)||Y_.get("workspace-preview-default");if(!p)return;let i=p.mount(S,l);return Y0.current=i,()=>{if(Y0.current===i)i.dispose(),Y0.current=null;S.innerHTML=""}},[F,I_,k]);let t1=(S)=>{let l=S?.target;if(l instanceof Element)return l;return l?.parentElement||null},T6=(S)=>{return Boolean(S?.closest?.(".workspace-node-icon, .workspace-label-text"))},M5=(S)=>{if(!S)return!1;if(S.closest?.('input, textarea, [contenteditable="true"]'))return!0;return Boolean(S.isContentEditable)},C4=u((S)=>{let l=t1(S),p=l?.closest?.("[data-path]");if(!p)return;let i=p.dataset.path;if(!i||i===".")return;let B0=Boolean(l?.closest?.("button"))||Boolean(l?.closest?.("a"))||Boolean(l?.closest?.("input")),K0=Boolean(l?.closest?.(".workspace-caret"));if(B0||K0)return;if(s0.current===i)return;s_(i)}).current,z1=u((S)=>{if(k0.current){k0.current=!1;return}let l=t1(S),p=l?.closest?.("[data-path]");if(U_.current?.focus?.(),!p)return;let i=p.dataset.path,B0=p.dataset.type,K0=Boolean(l?.closest?.(".workspace-caret")),T0=Boolean(l?.closest?.("button"))||Boolean(l?.closest?.("a"))||Boolean(l?.closest?.("input")),u0=W0.current===i,U0=s0.current;if(U0){if(U0===i)return;F1()}if(B0==="dir"){if(i0.current=null,B(i),z(null),O(null),J(!1),!b0.current.has(i))w0.current?.(i);if(u0&&!K0)return;V((l_)=>{let a_=new Set(l_);if(a_.has(i))a_.delete(i);else a_.add(i);return a_})}else{i0.current=null,B(i);let o0=r0.current.get(i);if(o0)q_.current?.(o0.path,o0);if(!T0&&!K0)F0.current?.(i)}}).current,A$=u(()=>{d0.current="",S0.current(),A0.current?.(),Array.from(b0.current||[]).filter((l)=>l&&l!==".").forEach((l)=>w0.current?.(l))}).current,T1=u(()=>{i0.current=null,B(null),z(null),O(null),J(!1)}).current,k$=u(()=>{x((S)=>{let l=!S;if(typeof window<"u")Q_("workspaceShowHidden",String(l));return I0.current=l,a5(!0,l).catch((i)=>{console.debug("[workspace-explorer] Workspace visibility refresh after toggling hidden files failed.",i,{showHidden:l})}),d0.current="",S0.current?.(),Array.from(b0.current||[]).filter((i)=>i&&i!==".").forEach((i)=>w0.current?.(i)),l})}).current,e1=u((S)=>{if(t1(S)?.closest?.("[data-path]"))return;T1()}).current,Z1=f(async(S)=>{if(!S)return;let l=S.split("/").pop()||S;if(!window.confirm(`Delete "${l}"? This cannot be undone.`))return;try{await U7(S);let i=S.includes("/")?S.split("/").slice(0,-1).join("/")||".":".";if(W0.current===S)T1();w0.current?.(i),W(null),J_()}catch(i){z((B0)=>({...B0||{},error:i.message||"Failed to delete file"}))}},[T1]),e$=f((S)=>{let l=U_.current;if(!l||!S||typeof CSS>"u"||typeof CSS.escape!=="function")return;l.querySelector(`[data-path="${CSS.escape(S)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),w5=f((S)=>{let l=t1(S);if(s0.current||M5(l))return;let p=N1;if(!p||p.length===0)return;let i=F?p.findIndex((B0)=>B0.node.path===F):-1;if(S.key==="ArrowDown"){S.preventDefault();let B0=Math.min(i+1,p.length-1),K0=p[B0];if(!K0)return;if(B(K0.node.path),K0.node.type!=="dir")q_.current?.(K0.node.path,K0.node),F0.current?.(K0.node.path);else z(null),J(!1),O(null);e$(K0.node.path);return}if(S.key==="ArrowUp"){S.preventDefault();let B0=i<=0?0:i-1,K0=p[B0];if(!K0)return;if(B(K0.node.path),K0.node.type!=="dir")q_.current?.(K0.node.path,K0.node),F0.current?.(K0.node.path);else z(null),J(!1),O(null);e$(K0.node.path);return}if(S.key==="ArrowRight"&&i>=0){let B0=p[i];if(B0?.node?.type==="dir"&&!Q.has(B0.node.path))S.preventDefault(),w0.current?.(B0.node.path),V((K0)=>new Set([...K0,B0.node.path]));return}if(S.key==="ArrowLeft"&&i>=0){let B0=p[i];if(B0?.node?.type==="dir"&&Q.has(B0.node.path))S.preventDefault(),V((K0)=>{let T0=new Set(K0);return T0.delete(B0.node.path),T0});return}if(S.key==="Enter"&&i>=0){S.preventDefault();let B0=p[i];if(!B0)return;let K0=B0.node.path;if(B0.node.type==="dir"){if(!b0.current.has(K0))w0.current?.(K0);V((u0)=>{let U0=new Set(u0);if(U0.has(K0))U0.delete(K0);else U0.add(K0);return U0}),z(null),O(null),J(!1)}else q_.current?.(K0,B0.node),F0.current?.(K0);return}if((S.key==="Delete"||S.key==="Backspace")&&i>=0){let B0=p[i];if(!B0||B0.node.type==="dir")return;S.preventDefault(),Z1(B0.node.path);return}if(S.key==="Escape")S.preventDefault(),T1()},[T1,Z1,Q,N1,e$,F]),_$=f((S)=>{let l=GJ(S,s0.current);if(!l)return;M_.current={path:l.dragPath,dragging:!1,startX:l.startX,startY:l.startY}},[]),f4=f(()=>{let S=M_.current;if(S?.dragging&&S.path){let l=Z_.current||b_(),p=_0.current;if(typeof p==="function")p(S.path,l)}M_.current={path:null,dragging:!1,startX:0,startY:0},R0.current=0,R(!1),c(null),__(null),v_(),o1()},[b_,o1,__,v_]),X1=f((S)=>{let l=M_.current,p=S?.touches?.[0];if(!p||!l?.path)return;let i=Math.abs(p.clientX-l.startX),B0=Math.abs(p.clientY-l.startY),K0=i>8||B0>8;if(!l.dragging&&K0)l.dragging=!0,R(!0),c("move"),M1(l.path);if(l.dragging){S.preventDefault(),L1(p.clientX,p.clientY);let T0=document.elementFromPoint(p.clientX,p.clientY),u0=n_(T0)||b_();if(Z_.current!==u0)__(u0);i_(u0)}},[n_,b_,M1,L1,__,i_]),M$=u((S)=>{S.preventDefault();let l=C0.current;if(!l)return;let p=S.clientY,i=g0.current||280,B0=S.currentTarget;B0.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let K0=p,T0=(U0)=>{K0=U0.clientY;let o0=l.clientHeight-80,l_=Math.min(Math.max(i-(U0.clientY-p),80),o0);l.style.setProperty("--preview-height",`${l_}px`),g0.current=l_},u0=()=>{let U0=l.clientHeight-80,o0=Math.min(Math.max(i-(K0-p),80),U0);g0.current=o0,B0.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",Q_("previewHeight",String(Math.round(o0))),document.removeEventListener("mousemove",T0),document.removeEventListener("mouseup",u0)};document.addEventListener("mousemove",T0),document.addEventListener("mouseup",u0)}).current,$$=u((S)=>{S.preventDefault();let l=C0.current;if(!l)return;let p=S.touches[0];if(!p)return;let i=p.clientY,B0=g0.current||280,K0=S.currentTarget;K0.classList.add("dragging"),document.body.style.userSelect="none";let T0=(U0)=>{let o0=U0.touches[0];if(!o0)return;U0.preventDefault();let l_=l.clientHeight-80,a_=Math.min(Math.max(B0-(o0.clientY-i),80),l_);l.style.setProperty("--preview-height",`${a_}px`),g0.current=a_},u0=()=>{K0.classList.remove("dragging"),document.body.style.userSelect="",Q_("previewHeight",String(Math.round(g0.current||B0))),document.removeEventListener("touchmove",T0),document.removeEventListener("touchend",u0),document.removeEventListener("touchcancel",u0)};document.addEventListener("touchmove",T0,{passive:!1}),document.addEventListener("touchend",u0),document.addEventListener("touchcancel",u0)}).current,T5=f((S=F)=>{if(!S)return;gL(W2(S))},[F]),R_=async()=>{if(!F||I_)return;await Z1(F)},P4=(S)=>{return Array.from(S?.dataTransfer?.types||[]).includes("Files")},R8=f((S)=>{if(!P4(S))return;if(S.preventDefault(),R0.current+=1,!L_.current)R(!0);c("upload");let l=q1(S)||b_();__(l),i_(l)},[b_,q1,__,i_]),y1=f((S)=>{if(!P4(S))return;if(S.preventDefault(),S.dataTransfer)S.dataTransfer.dropEffect="copy";if(!L_.current)R(!0);if($_.current!=="upload")c("upload");let l=q1(S)||b_();if(Z_.current!==l)__(l);i_(l)},[b_,q1,__,i_]),R4=f((S)=>{if(!P4(S))return;if(S.preventDefault(),R0.current=Math.max(0,R0.current-1),R0.current===0)R(!1),c(null),__(null),v_()},[__,v_]),j$=f(async(S,l=".")=>{let p=Array.from(S||[]);if(p.length===0)return;let i=l&&l!==""?l:".",B0=i!=="."?i:"workspace root";z_(),q0(!0),D0({current:0,total:p.length,name:"",percent:0,done:!1,error:null});try{let K0=null;for(let T0=0;T0<p.length;T0++){let u0=p[T0],U0=u0?.name||`file ${T0+1}`;D0((l_)=>({...l_,current:T0+1,name:U0,percent:0}));let o0=(l_)=>D0((a_)=>({...a_,percent:l_.percent}));try{K0=await D2(u0,i,{onProgress:o0})}catch(l_){let a_=l_?.status,w_=l_?.code;if(a_===409||w_==="file_exists"){if(!window.confirm(`"${U0}" already exists in ${B0}. Overwrite?`))continue;K0=await D2(u0,i,{overwrite:!0,onProgress:o0})}else throw l_}}if(K0?.path)i0.current=K0.path,B(K0.path),F0.current?.(K0.path);w0.current?.(i),J_(),D0((T0)=>({...T0,done:!0})),z_(),D_.current=window.setTimeout(()=>{D_.current=0,D0(null)},1500)}catch(K0){W(K0.message||"Failed to upload file"),D0((T0)=>T0?{...T0,error:K0.message||"Upload failed"}:null),z_(),D_.current=window.setTimeout(()=>{D_.current=0,D0(null)},4000)}finally{q0(!1)}},[z_]),w$=f(async(S,l)=>{if(!S)return;let p=r0.current?.get(S);if(!p)return;let i=l&&l!==""?l:".",B0=S.includes("/")?S.split("/").slice(0,-1).join("/")||".":".";if(i===B0)return;try{let T0=(await N7(S,i))?.path||S;if(p.type==="dir")V((u0)=>{let U0=new Set;for(let o0 of u0)if(o0===S)U0.add(T0);else if(o0.startsWith(`${S}/`))U0.add(`${T0}${o0.slice(S.length)}`);else U0.add(o0);return U0});if(B(T0),p.type==="dir")z(null),J(!1),O(null);else F0.current?.(T0);w0.current?.(B0),w0.current?.(i),J_()}catch(K0){W(K0?.message||"Failed to move entry")}},[]);_0.current=w$;let T$=f(async(S)=>{if(!P4(S))return;S.preventDefault(),R0.current=0,R(!1),c(null),a(null),v_();let l=Array.from(S?.dataTransfer?.files||[]);if(l.length===0)return;let p=Z_.current||q1(S)||b_();await j$(l,p)},[b_,q1,j$]),S4=f((S)=>{if(S?.stopPropagation?.(),t)return;let l=S?.currentTarget?.dataset?.uploadTarget||".";X_.current=l,V_.current?.click()},[t]),x1=f(()=>{if(t)return;let S=W0.current,l=S?r0.current?.get(S):null;X_.current=l?.type==="dir"?l.path:".",V_.current?.click()},[t]),G$=f(()=>{P_(()=>j1(null))},[P_,j1]),_4=f(()=>{P_(()=>x1())},[P_,x1]),$4=f(()=>{P_(()=>A$())},[P_,A$]),Z$=f(()=>{P_(()=>k$())},[P_,k$]),y6=f(()=>{if(!F||!R1)return;P_(()=>O_.current?.(F,k))},[P_,F,R1,k]),X$=f(()=>{if(!F||!w1)return;P_(()=>O_.current?.(F,k))},[P_,F,w1,k]),x6=f(()=>{if(!F||F===".")return;P_(()=>s_(F))},[P_,F,s_]),y5=f(()=>{if(!F||I_)return;P_(()=>R_())},[P_,F,I_,R_]),x5=f(()=>{if(!F||I_)return;P_(()=>T5())},[P_,F,I_,T5]),I5=f(()=>{if(!J$)return;G1(),gL(J$)},[G1,J$]),S8=f(()=>{G1(),Z?.()},[G1,Z]),I6=f(()=>{G1(),X?.()},[G1,X]),C6=f(()=>{G1(),Y?.()},[G1,Y]),f6=f((S)=>{if(!S||S.button!==0)return;let l=S.currentTarget;if(!l||!l.dataset)return;let p=l.dataset.path;if(!p||p===".")return;if(s0.current===p)return;let i=t1(S);if(i?.closest?.("button, a, input, .workspace-caret"))return;if(!T6(i))return;S.preventDefault(),$0.current={path:p,dragging:!1,startX:S.clientX,startY:S.clientY};let B0=(T0)=>{let u0=$0.current;if(!u0?.path)return;let U0=Math.abs(T0.clientX-u0.startX),o0=Math.abs(T0.clientY-u0.startY),l_=U0>4||o0>4;if(!u0.dragging&&l_)u0.dragging=!0,k0.current=!0,R(!0),c("move"),M1(u0.path),L1(T0.clientX,T0.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(u0.dragging){T0.preventDefault(),L1(T0.clientX,T0.clientY);let a_=document.elementFromPoint(T0.clientX,T0.clientY),w_=n_(a_)||b_();if(Z_.current!==w_)__(w_);i_(w_)}},K0=()=>{document.removeEventListener("mousemove",B0),document.removeEventListener("mouseup",K0);let T0=$0.current;if(T0?.dragging&&T0.path){let u0=Z_.current||b_(),U0=_0.current;if(typeof U0==="function")U0(T0.path,u0)}$0.current={path:null,dragging:!1,startX:0,startY:0},R0.current=0,R(!1),c(null),__(null),v_(),o1(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{k0.current=!1},0)};document.addEventListener("mousemove",B0),document.addEventListener("mouseup",K0)},[n_,b_,M1,L1,o1,__,i_,v_]),g8=f(async(S)=>{let l=Array.from(S?.target?.files||[]);if(l.length===0)return;let p=X_.current||".";if(await j$(l,p),X_.current=".",S?.target)S.target.value=""},[j$]);return N`
        <aside
            class=${`workspace-sidebar${P?" workspace-drop-active":""}`}
            data-workspace-scale=${l0}
            ref=${C0}
            onDragEnter=${R8}
            onDragOver=${y1}
            onDragLeave=${R4}
            onDrop=${T$}
        >
            <input type="file" multiple style="display:none" ref=${V_} onChange=${g8} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${E0}
                            class=${`workspace-menu-button${h0?" active":""}`}
                            onClick=${(S)=>{S.stopPropagation(),c0((l)=>!l)}}
                            title="Workspace actions"
                            aria-label="Workspace actions"
                            aria-haspopup="menu"
                            aria-expanded=${h0?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${h0&&N`
                            <div class="workspace-menu-dropdown" ref=${G0} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${G$} disabled=${t}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${_4} disabled=${t}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${$4}>Refresh tree</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${()=>P_(()=>k5())} disabled=${y0}>
                                    ${y0?"Reindexing workspace…":"Reindex workspace"}
                                </button>
                                <button class=${`workspace-menu-item${w?" active":""}`} role="menuitem" onClick=${Z$}>
                                    ${w?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${(Z||X||Y)&&N`<div class="workspace-menu-separator"></div>`}
                                ${Z&&N`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${S8}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${X&&N`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${I6}>
                                        Open VNC in tab
                                    </button>
                                `}
                                ${Y&&N`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${C6}>
                                        ${q?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}

                                ${F&&N`<div class="workspace-menu-separator"></div>`}
                                ${R1&&N`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${y6}>Open in tab</button>
                                `}
                                ${F&&!I_&&N`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${X$} disabled=${!w1}>Open in editor</button>
                                `}
                                ${S1&&N`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${x6}>Rename selected</button>
                                `}
                                ${x4&&N`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${x5}>Download selected file</button>
                                `}
                                ${J$&&N`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${I5}>Download selected folder (zip)</button>
                                `}
                                ${a1&&N`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${y5}>Delete selected file</button>
                                `}
                                <div class="workspace-menu-separator"></div>
                                <button class="workspace-menu-item" role="menuitem" onClick=${()=>{c0(!1),window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:{section:"workspace"}}))}}>Settings</button>
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${j1} title="New file" disabled=${t}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${A$} title="Refresh tree">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            ${t$&&N`
                <div class="workspace-index-status-row">
                    <div class=${`workspace-index-status-chip state-${I4}`} title=${A5}>
                        <span class="workspace-index-status-dot" aria-hidden="true"></span>
                        <span>${J5}</span>
                    </div>
                </div>
            `}
            <div class="workspace-tree" onClick=${e1}>
                ${Z0&&N`
                    <div class="workspace-upload-strip">
                        <div class="workspace-upload-strip-text">
                            ${Z0.error?N`<span class="workspace-upload-strip-error">${Z0.error}</span>`:Z0.done?N`<span>Done</span>`:N`<span>${Z0.total>1?`Uploading ${Z0.current}/${Z0.total}: ${Z0.name}`:`Uploading ${Z0.name}`}${Z0.percent>0?` (${Z0.percent}%)`:"…"}</span>`}
                        </div>
                        ${!Z0.done&&!Z0.error&&N`
                            <div class="workspace-upload-strip-bar">
                                <div class="workspace-upload-strip-fill" style=${`width:${Z0.percent||0}%`}></div>
                            </div>
                        `}
                    </div>
                `}
                ${y&&N`<div class="workspace-loading">Loading…</div>`}
                ${M&&N`<div class="workspace-error">${M}</div>`}
                ${L&&N`
                    <div
                        class="workspace-tree-list"
                        ref=${U_}
                        tabIndex="0"
                        onClick=${z1}
                        onDblClick=${C4}
                        onKeyDown=${w5}
                        onTouchStart=${_$}
                        onTouchEnd=${f4}
                        onTouchMove=${X1}
                        onTouchCancel=${f4}
                    >
                        ${N1.map(({node:S,depth:l})=>{let p=S.type==="dir",i=S.path===F,B0=S.path===U,K0=p&&Q.has(S.path),T0=b&&S.path===b,u0=Array.isArray(S.children)&&S.children.length>0?S.children.length:Number(S.child_count)||0;return N`
                                <div
                                    key=${S.path}
                                    class=${`workspace-row${i?" selected":""}${T0?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+l*w6.indentPx}px`}}
                                    data-path=${S.path}
                                    data-type=${S.type}
                                    onMouseDown=${f6}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${p?K0?N`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:N`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${p?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${p?N`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:N`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${B0?N`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${A_}
                                                value=${E}
                                                onInput=${(U0)=>H(U0?.target?.value||"")}
                                                onKeyDown=${(U0)=>{if(U0.stopPropagation(),U0.key==="Enter")U0.preventDefault(),r_();else if(U0.key==="Escape")U0.preventDefault(),F1()}}
                                                onBlur=${F1}
                                                onClick=${(U0)=>U0.stopPropagation()}
                                            />
                                        `:N`<span class="workspace-label"><span class="workspace-label-text">${S.name}</span></span>`}
                                    ${p&&!K0&&u0>0&&N`
                                        <span class="workspace-count">${u0}</span>
                                    `}
                                    ${p&&N`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${S.path}
                                            title="Upload files to this folder"
                                            onClick=${S4}
                                            disabled=${t}
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
            ${F&&N`
                <div class="workspace-preview-splitter-h" onMouseDown=${M$} onTouchStart=${$$}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${F}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${j1} title="New file" disabled=${t}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!I_&&N`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>w1&&O_.current?.(F,k)}
                                    title=${z5}
                                    disabled=${!w1}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${R_}
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
                            ${I_?N`
                                    <button class="workspace-download" onClick=${x1}
                                        title="Upload files to this folder" disabled=${t}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${O2(F,w)} download
                                        title="Download folder as zip" onClick=${(S)=>S.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:N`<a class="workspace-download" href=${W2(F)} download
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
                    ${A&&N`<div class="workspace-loading">Loading preview…</div>`}
                    ${k?.error&&N`<div class="workspace-error">${k.error}</div>`}
                    ${I_&&N`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${Q0?.disabled&&N`<div class="workspace-preview-text">Folder size preview scanning is disabled in Workspace settings.</div>`}
                        ${Q0?.loading&&N`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${Q0?.error&&N`<div class="workspace-error">${Q0.error}</div>`}
                        ${Q0?.payload&&Q0.payload.segments?.length>0&&N`
                            <${ez} payload=${Q0.payload} />
                        `}
                        ${Q0?.payload&&(!Q0.payload.segments||Q0.payload.segments.length===0)&&N`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${k&&!k.error&&!I_&&N`
                        <div class="workspace-preview-body" ref=${d}></div>
                    `}
                </div>
            `}
            ${h&&N`
                <div class="workspace-drag-ghost" ref=${B_}>${h.label}</div>
            `}
        </aside>
    `}x0();var ZJ=new Set(["html-viewer","kanban-editor","mindmap-editor"]);function K8(_,$,j){let G=String(_||"").trim();if(!G)return null;if($)return $;if(typeof j!=="function")return null;return j({path:G,mode:"edit"})?.id||null}function iL(_,$,j){let G=K8(_,$,j);return G!=null&&ZJ.has(G)}function oL(_,$,j){return K8(_,$,j)==="html-viewer"?"Edit":"Edit Source"}function sL(_,$,j){return K8(_,$,j)==="editor"}var XJ=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,YJ=/\.(csv|tsv)$/i,qJ=/\.pdf$/i,LJ=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function KJ(_,{hasPopOutTab:$=!1}={}){let j=typeof _==="string"?_.trim():"";if(!j)return null;let G=xq(j,{hasPopOutTab:$});if(G)return G;if(XJ.test(j)){let Z="/workspace/raw?path="+encodeURIComponent(j),X=j.split("/").pop()||"document";return"/office-viewer/?url="+encodeURIComponent(Z)+"&name="+encodeURIComponent(X)}if(YJ.test(j))return"/csv-viewer/?path="+encodeURIComponent(j);if(qJ.test(j))return"/workspace/raw?path="+encodeURIComponent(j);if(LJ.test(j))return"/image-viewer/?path="+encodeURIComponent(j);return null}function aL({tabs:_,activeId:$,onActivate:j,onClose:G,onCloseOthers:Z,onCloseAll:X,onTogglePin:Y,onTogglePreview:q,onToggleDiff:L,onEditSource:K,previewTabs:Q,diffTabs:V,paneOverrides:F,detachedTabs:B,onReattachTab:U,onToggleDock:D,dockVisible:E,onToggleZen:H,zenMode:k,onPopOutTab:z}){let[O,y]=C(null),I=u(null);g(()=>{if(!O)return;let b=(a)=>{if(a.type==="keydown"&&a.key!=="Escape")return;y(null)};return document.addEventListener("click",b),document.addEventListener("keydown",b),()=>{document.removeEventListener("click",b),document.removeEventListener("keydown",b)}},[O]),g(()=>{let b=(a)=>{if(a.ctrlKey&&a.key==="Tab"){if(a.preventDefault(),!_.length)return;let t=_.findIndex((q0)=>q0.id===$);if(a.shiftKey){let q0=_[(t-1+_.length)%_.length];j?.(q0.id)}else{let q0=_[(t+1)%_.length];j?.(q0.id)}return}if((a.ctrlKey||a.metaKey)&&a.key==="w"){let t=document.querySelector(".editor-pane");if(t&&t.contains(document.activeElement)){if(a.preventDefault(),$)G?.($)}}};return document.addEventListener("keydown",b),()=>document.removeEventListener("keydown",b)},[_,$,j,G]);let A=f((b,a)=>{if(b.button===0){j?.(a);return}if(b.button===1)b.preventDefault(),G?.(a)},[j,G]),J=f((b,a)=>{if(b.defaultPrevented)return;if(b.button===0)j?.(a)},[j]),M=f((b,a)=>{b.preventDefault(),y({id:a,x:b.clientX,y:b.clientY})},[]),W=f((b)=>{b.stopPropagation()},[]),w=f((b,a)=>{b.preventDefault(),b.stopPropagation(),G?.(a)},[G]);g(()=>{if(!$||!I.current)return;let b=I.current.querySelector(".tab-item.active");if(b)b.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]);let x=f((b)=>{if(!(F instanceof Map))return null;return F.get(b)||null},[F]),P=X0(()=>_.find((b)=>b.id===O?.id)||null,[O?.id,_]),R=X0(()=>{let b=O?.id;if(!b)return!1;return iL(b,x(b),(a)=>Y_.resolve(a))},[O?.id,x]),v=X0(()=>{let b=O?.id;if(!b)return"Edit Source";return oL(b,x(b),(a)=>Y_.resolve(a))},[O?.id,x]),c=X0(()=>{let b=O?.id;if(!b||!(B instanceof Map))return!1;return B.has(b)},[O?.id,B]),h=X0(()=>{let b=O?.id;if(!b||!(V instanceof Set))return!1;return V.has(b)},[O?.id,V]),r=X0(()=>{let b=O?.id;if(!b)return!1;let a=_.find((q0)=>q0.id===b)||null;if(!a)return!1;return sL(b,x(b),(q0)=>Y_.resolve(q0))&&Boolean(a.dirty||h)},[O?.id,h,x,_]);if(!_.length)return null;return N`
        <div class="tab-strip" ref=${I} role="tablist">
            ${_.map((b)=>N`
                <div
                    key=${b.id}
                    class=${`tab-item${b.id===$?" active":""}${b.dirty?" dirty":""}${b.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${b.id===$}
                    title=${b.path}
                    onMouseDown=${(a)=>A(a,b.id)}
                    onClick=${(a)=>J(a,b.id)}
                    onContextMenu=${(a)=>M(a,b.id)}
                >
                    ${b.pinned&&N`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${b.label}</span>
                    ${B instanceof Map&&B.has(b.id)&&N`
                        <span class="tab-detached-badge" aria-label="Detached" title="Open in separate window">↗</span>
                    `}
                    <button
                        type="button"
                        class="tab-close"
                        onPointerDown=${W}
                        onMouseDown=${W}
                        onClick=${(a)=>w(a,b.id)}
                        title=${b.dirty?"Unsaved changes":"Close"}
                        aria-label=${b.dirty?"Unsaved changes":`Close ${b.label}`}
                    >
                        ${b.dirty?N`<span class="tab-dirty-dot" aria-hidden="true"></span>`:N`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${D&&N`
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
            ${H&&N`
                <button
                    class=${`tab-strip-zen-toggle${k?" active":""}`}
                    onClick=${H}
                    title=${`${k?"Exit":"Enter"} zen mode (Ctrl+Shift+Z)`}
                    aria-label=${`${k?"Exit":"Enter"} zen mode`}
                    aria-pressed=${k?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        ${k?N`<polyline points="4 8 1.5 8 1.5 1.5 14.5 1.5 14.5 8 12 8"/><polyline points="4 8 1.5 8 1.5 14.5 14.5 14.5 14.5 8 12 8"/>`:N`<polyline points="5.5 1.5 1.5 1.5 1.5 5.5"/><polyline points="10.5 1.5 14.5 1.5 14.5 5.5"/><polyline points="5.5 14.5 1.5 14.5 1.5 10.5"/><polyline points="10.5 14.5 14.5 14.5 14.5 10.5"/>`}
                    </svg>
                </button>
            `}
        </div>
        ${O&&N`
            <div class="tab-context-menu" style=${{left:O.x+"px",top:O.y+"px"}}>
                <button onClick=${()=>{G?.(O.id),y(null)}}>Close</button>
                <button onClick=${()=>{Z?.(O.id),y(null)}}>Close Others</button>
                <button onClick=${()=>{X?.(),y(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{Y?.(O.id),y(null)}}>
                    ${P?.pinned?"Unpin":"Pin"}
                </button>
                ${R&&K&&N`
                    <button onClick=${()=>{K(O.id),y(null)}}>${v}</button>
                `}
                ${c&&U&&N`
                    <button onClick=${()=>{U(O.id),y(null)}}>Reattach</button>
                `}
                ${z&&!c&&N`
                    <button onClick=${()=>{let b=_.find((a)=>a.id===O.id);z(O.id,b?.label),y(null)}}>Open in Window</button>
                `}
                ${r&&L&&N`
                    <hr />
                    <button onClick=${()=>{j?.(O.id),L(O.id),y(null)}}>${h?"Hide Diff":"Compare to Saved"}</button>
                `}
                ${q&&/\.(md|mdx|markdown)$/i.test(O.id)&&N`
                    <hr />
                    <button onClick=${()=>{q(O.id),y(null)}}>
                        ${Q?.has(O.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${(()=>{let b=KJ(O.id,{hasPopOutTab:typeof z==="function"});if(!b)return null;return N`
                        <hr />
                        <button onClick=${()=>{window.open(b,"_blank","noopener"),y(null)}}>Open in New Tab</button>
                    `})()}
            </div>
        `}
    `}x0();g_();x2();function K5(_,$=30){let j=Array.isArray(_)?_.map((G)=>Number(G)).filter((G)=>Number.isFinite(G)):[];return j.length>$?j.slice(j.length-$):j}function b9(_,$=30){return K5(_,$).map((j)=>Math.max(0,Math.min(100,j)))}function U6(_,$=56,j=16,G={}){let Z=K5(_);if(Z.length===0)return"";let X=Number.isFinite(G.min)?Number(G.min):Math.min(...Z),Y=Number.isFinite(G.max)?Number(G.max):Math.max(...Z);if(!(Y>X)){let q=(j/2).toFixed(2);return`M 0 ${q} L ${$} ${q}`}if(Z.length===1){let q=(Z[0]-X)/(Y-X),L=(j-q*j).toFixed(2);return`M 0 ${L} L ${$} ${L}`}return Z.map((q,L)=>{let K=L/(Z.length-1||1)*$,Q=(q-X)/(Y-X),V=j-Q*j;return`${L===0?"M":"L"} ${K.toFixed(2)} ${V.toFixed(2)}`}).join(" ")}function V5(_){return`${Math.round(Number(_)||0)}%`}function v9(_){let $=Number(_);if(!Number.isFinite($)||$<=0)return"0B";let j=["B","K","M","G","T"],G=0,Z=$;while(Z>=1024&&G<j.length-1)Z/=1024,G+=1;let X=Z>=100||G===0?0:Z>=10?0:1;return`${Z.toFixed(X)}${j[G]}`}function VJ(_){let $=[`CPU ${V5(_?.cpu_percent)}`,`RAM ${V5(_?.ram_percent)}`];if(Number(_?.buffer_cache_bytes)>0)$.push(`BUF ${v9(_?.buffer_cache_bytes)}`);if(Number.isFinite(Number(_?.swap_percent))&&Number(_?.swap_total_bytes)>0)$.push(`SWP ${V5(_?.swap_percent)}`);return $.join(" • ")}function tL(_){return Number(_?.process_memory?.vm_rss_bytes)>0?Number(_.process_memory.vm_rss_bytes):Number(_?.process_memory?.rss_bytes)||0}function QJ(_){return tL(_)>0&&K5(_?.process_rss_series_bytes).length>0}function FJ(){if(typeof window>"u"||typeof window.matchMedia!=="function")return!1;return window.matchMedia("(max-width: 900px)").matches}function eL({mode:_="overlay"}){let[$,j]=C(()=>Y6(!1)),[G,Z]=C(()=>IX(!1)),[X,Y]=C(()=>FJ()),[q,L]=C({cpu_percent:0,ram_percent:0,swap_percent:null,cpu_series:[],ram_series:[],swap_series:[],buffer_cache_bytes:null,buffer_cache_series_bytes:[],process_rss_series_bytes:[],process_memory:{rss_bytes:0,vm_rss_bytes:null},swap_total_bytes:0,swap_used_bytes:0,sample_interval_ms:2000,platform:""}),[K,Q]=C(!1);g(()=>{let M=(w)=>{j(Boolean(w?.detail?.enabled))},W=(w)=>{Z(Boolean(w?.detail?.collapsed))};return window.addEventListener(z4,M),window.addEventListener(y2,W),()=>{window.removeEventListener(z4,M),window.removeEventListener(y2,W)}},[]),g(()=>{if(typeof window>"u"||typeof window.matchMedia!=="function")return;let M=window.matchMedia("(max-width: 900px)"),W=()=>Y(Boolean(M.matches));if(W(),typeof M.addEventListener==="function")return M.addEventListener("change",W),()=>M.removeEventListener("change",W);return M.addListener(W),()=>M.removeListener(W)},[]);let F=_==="overlay";g(()=>{if(!$||!F)return;let M=!1,W=0,w=async()=>{Q((x)=>x||q.cpu_series.length>0?x:!0);try{let x=await i3();if(M)return;L({cpu_percent:Number(x?.cpu_percent)||0,ram_percent:Number(x?.ram_percent)||0,swap_percent:Number.isFinite(Number(x?.swap_percent))?Number(x?.swap_percent):null,cpu_series:b9(x?.cpu_series),ram_series:b9(x?.ram_series),swap_series:b9(x?.swap_series),buffer_cache_bytes:Number.isFinite(Number(x?.buffer_cache_bytes))?Number(x?.buffer_cache_bytes):null,buffer_cache_series_bytes:K5(x?.buffer_cache_series_bytes),process_rss_series_bytes:K5(x?.process_rss_series_bytes),process_memory:{rss_bytes:Number(x?.process_memory?.rss_bytes)||0,vm_rss_bytes:Number.isFinite(Number(x?.process_memory?.vm_rss_bytes))?Number(x?.process_memory?.vm_rss_bytes):null},swap_total_bytes:Number(x?.swap_total_bytes)||0,swap_used_bytes:Number(x?.swap_used_bytes)||0,sample_interval_ms:Number(x?.sample_interval_ms)||2000,platform:String(x?.platform||"")})}catch{if(M)return}finally{if(!M)Q(!1)}};return w(),W=window.setInterval(()=>{if(document?.visibilityState==="hidden")return;w()},Math.max(1000,Number(q.sample_interval_ms)||2000)),()=>{if(M=!0,W)window.clearInterval(W)}},[$,F]);let B=X0(()=>U6(q.cpu_series,56,16,{min:0,max:100}),[q.cpu_series]),U=X0(()=>U6(q.ram_series,56,16,{min:0,max:100}),[q.ram_series]),D=X0(()=>U6(q.swap_series,56,16,{min:0,max:100}),[q.swap_series]),E=X0(()=>U6(q.buffer_cache_series_bytes),[q.buffer_cache_series_bytes]),H=X0(()=>U6(q.process_rss_series_bytes),[q.process_rss_series_bytes]),k=Number(q.buffer_cache_bytes)>0&&K5(q.buffer_cache_series_bytes).length>0,z=Number.isFinite(Number(q.swap_percent))&&q.swap_total_bytes>0,O=tL(q),y=QJ(q),I=X0(()=>VJ(q),[q]);if(!$||!F)return null;let A=G?"Show system meters":K?"Updating system meters… Click to collapse.":"System meters — click to collapse.",J=(M)=>{M?.stopPropagation?.();let W=!G;Z(W),C7(W)};return N`
        <div class=${`system-meters-hud system-meters-hud-${_}${G?" is-collapsed":""}`} aria-live="polite">
            <button
                class="system-meters-card"
                type="button"
                title=${A}
                aria-label=${A}
                aria-expanded=${G?"false":"true"}
                onClick=${J}
            >
                ${G?N`<span class="system-meters-collapse-tab" aria-hidden="true">◂</span>`:X?N`<span class="system-meters-compact-summary">${I}</span>`:N`
                            <div class="system-meters-row cpu">
                                <span class="system-meters-label">CPU</span>
                                <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                    <path d=${B}></path>
                                </svg>
                                <span class="system-meters-value">${V5(q.cpu_percent)}</span>
                            </div>
                            <div class="system-meters-row ram">
                                <span class="system-meters-label">RAM</span>
                                <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                    <path d=${U}></path>
                                </svg>
                                <span class="system-meters-value">${V5(q.ram_percent)}</span>
                            </div>
                            ${y&&N`
                                <div class="system-meters-row rss">
                                    <span class="system-meters-label">RSS</span>
                                    <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                        <path d=${H}></path>
                                    </svg>
                                    <span class="system-meters-value">${v9(O)}</span>
                                </div>
                            `}
                            ${k&&N`
                                <div class="system-meters-row buf">
                                    <span class="system-meters-label">BUF</span>
                                    <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                        <path d=${E}></path>
                                    </svg>
                                    <span class="system-meters-value">${v9(q.buffer_cache_bytes)}</span>
                                </div>
                            `}
                            ${z&&N`
                                <div class="system-meters-row swap">
                                    <span class="system-meters-label">SWP</span>
                                    <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                        <path d=${D}></path>
                                    </svg>
                                    <span class="system-meters-value">${V5(q.swap_percent)}</span>
                                </div>
                            `}
                        `}
            </button>
        </div>
    `}function BJ(_){let{workspaceOpen:$,editorOpen:j,chatOnlyMode:G,zenMode:Z}=_;return`app-shell${$?"":" workspace-collapsed"}${j?" editor-open":""}${G?" chat-only":""}${Z?" zen-mode":""}`}function NJ(_){let $=_?.user_message?.id??_?.row_id;if($===null||$===void 0||$==="")return null;let j=Number($);return Number.isFinite(j)?j:null}function UJ(_){let{id:$,scrollToBottom:j,getElementById:G=(K)=>document.getElementById(K),scheduleRaf:Z=(K)=>requestAnimationFrame(K),scheduleTimeout:X=(K,Q)=>{setTimeout(K,Q)},maxAttempts:Y=12}=_,q=(K)=>{K.scrollIntoView({behavior:"smooth",block:"center"}),K.classList.add("post-highlight"),X(()=>K.classList.remove("post-highlight"),2000)},L=(K)=>{let Q=G(`post-${$}`);if(Q){q(Q);return}if(K<=0){j?.();return}Z(()=>{X(()=>L(K-1),40)})};L(Y)}function HJ(_){let{response:$,viewStateRef:j,scrollToBottom:G,scrollPostedMessage:Z=(L)=>UJ({id:L,scrollToBottom:G})}=_,{searchQuery:X,searchOpen:Y}=j.current||{};if(X||Y)return;let q=NJ($);if(q){Z(q);return}G()}function _K(_){let{appShellRef:$,workspaceOpen:j,editorOpen:G,chatOnlyMode:Z,zenMode:X,isRenameBranchFormOpen:Y,closeRenameCurrentBranchForm:q,handleRenameCurrentBranch:L,renameBranchNameDraft:K,renameBranchNameInputRef:Q,setRenameBranchNameDraft:V,renameBranchDraftState:F,isRenamingBranch:B,addFileRef:U,openEditor:D,openTerminalTab:E,openVncTab:H,hasDockPanes:k,toggleDock:z,dockVisible:O,handleSplitterMouseDown:y,handleSplitterTouchStart:I,showEditorPaneContainer:A,tabStripTabs:J,tabStripActiveId:M,handleTabActivate:W,handleTabClose:w,handleTabCloseOthers:x,handleTabCloseAll:P,handleTabTogglePin:R,handleTabTogglePreview:v,handleTabToggleDiff:c,handleTabEditSource:h,handleReattachPane:r,previewTabs:b,diffTabs:a,tabPaneOverrides:t,toggleZenMode:q0,handlePopOutPane:Z0,isWebAppMode:D0,editorContainerRef:Q0,editorInstanceRef:L0,detachedTabs:N0,activeDetachedTab:H0,detachedDockPane:y0,handleDockSplitterMouseDown:o,handleDockSplitterTouchStart:j0,TERMINAL_TAB_PATH:O0,dockContainerRef:P0,handleEditorSplitterMouseDown:m0,handleEditorSplitterTouchStart:l0,searchQuery:G_,isIOSDevice:h0,currentBranchRecord:c0,currentChatJid:M0,currentChatBranches:p0,handleBranchPickerChange:b0,formatBranchPickerLabel:d0,openRenameCurrentBranchForm:H_,handlePruneCurrentBranch:E_,handlePurgeArchivedBranch:K_,currentHashtag:S0,handleBackToTimeline:A0,activeSearchScopeLabel:r0,oobePanelState:q_,composePrefillRequest:O_,requestComposePrefill:F0,handleOobeSetupProvider:w0,handleOobeShowModelPicker:C0,handleOobeOpenWorkspace:U_,handleDismissProviderMissingOobe:A_,handleCompleteProviderReadyOobe:V_,posts:X_,isMainTimelineView:D_,hasMore:M_,loadMore:$0,timelineRef:z0,handleHashtagClick:k0,addMessageRef:g0,scrollToMessage:v0,openFileFromPill:e,openTimelineFileFromPill:s,handleDeletePost:d,handleOpenFloatingWidget:Y0,agents:G0,userProfile:E0,removingPostIds:I0,agentStatus:t0,isCompactionStatus:J0,agentDraft:R0,agentPlan:Z_,agentThought:L_,pendingRequest:$_,intentToast:B_,currentTurnId:k_,steerQueued:e0,handlePanelToggle:_0,btwSession:W0,closeBtwPanel:s0,handleBtwRetry:i0,handleBtwInject:f_,floatingWidget:z_,handleCloseFloatingWidget:x_,handleFloatingWidgetEvent:i1,attachmentPreview:J_,setAttachmentPreview:d_,extensionStatusPanels:O1,pendingExtensionPanelActions:b_,handleExtensionPanelAction:n_,searchOpen:q1,followupQueueItems:__,handleInjectQueuedFollowup:v_,handleRemoveQueuedFollowup:i_,handleMoveQueuedFollowup:L1,viewStateRef:M1,loadPosts:o1,scrollToBottom:W$,searchScope:F1,handleSearch:s_,handleSearchScopeChange:r_,setSearchScope:a$,enterSearchMode:j1,exitSearchMode:B1,fileRefs:K1,removeFileRef:s1,clearFileRefs:N1,setFileRefsFromCompose:O$,messageRefs:w6,removeMessageRef:z$,clearMessageRefs:I_,setMessageRefsFromCompose:w1,handleCreateSessionFromCompose:z5,handleCreateRootSessionFromCompose:R1,handleRestoreBranch:S1,attachActiveEditorFile:a1,followupQueueCount:x4,handleBtwIntercept:J$,handleMessageResponse:J5,handleComposeSubmitError:A5,isComposeBoxAgentActive:I4,activeChatAgents:t$,connectionStatus:G1,activeModel:P_,agentModelsPayload:k5,activeModelUsage:t1,activeThinkingLevel:T6,supportsThinking:M5,contextUsage:C4,extensionWorkingState:z1,notificationsEnabled:A$,notificationPermission:T1,handleToggleNotifications:k$,setActiveModel:e1,applyModelState:Z1,setPendingRequest:e$,pendingRequestRef:w5,toggleWorkspace:_$}=_,f4=()=>{if(h0())return;W$()};return N`
    <div class=${BJ({workspaceOpen:j,editorOpen:G,chatOnlyMode:Z,zenMode:X})} ref=${$}>
      <${eL} mode="overlay" />
      ${Y&&N`
        <div class="rename-branch-overlay" onPointerDown=${(X1)=>{if(X1.target===X1.currentTarget)q()}}>
          <form
            class="rename-branch-panel"
            onSubmit=${(X1)=>{X1.preventDefault(),L(K)}}
          >
            <div class="rename-branch-title">Rename session</div>
            <input
              ref=${Q}
              value=${K}
              onInput=${(X1)=>{let M$=X1.currentTarget?.value??"";V(String(M$))}}
              onKeyDown=${(X1)=>{if(X1.key==="Escape")X1.preventDefault(),q()}}
              autocomplete="off"
              placeholder="Session handle (letters, numbers, - and _ only)"
            />
            <div class=${`rename-branch-help ${F.kind||"info"}`}>
              ${F.message}
            </div>
            <div class="rename-branch-actions">
              <button type="submit" class="compose-model-popup-btn primary" disabled=${B||!F.canSubmit}>
                ${B?"Renaming…":"Save"}
              </button>
              <button
                type="button"
                class="compose-model-popup-btn"
                onClick=${q}
                disabled=${B}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      `}
      ${!Z&&N`
        <${dL}
          onFileSelect=${U}
          visible=${j}
          active=${j||G}
          onOpenEditor=${D}
          onOpenTerminalTab=${E}
          onOpenVncTab=${H}
          onToggleTerminal=${k?z:void 0}
          terminalVisible=${Boolean(k&&O)}
        />
        <button
          class=${`workspace-toggle-tab${j?" open":" closed"}`}
          onClick=${_$}
          title=${j?"Hide workspace":"Show workspace"}
          aria-label=${j?"Hide workspace":"Show workspace"}
        >
          <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="6 3 11 8 6 13" />
          </svg>
        </button>
        <div class="workspace-splitter" onMouseDown=${y} onTouchStart=${I}></div>
      `}
      ${A&&N`
        <div class="editor-pane-container">
          ${X&&N`<div class="zen-hover-zone"></div>`}
          ${G&&N`
            <${aL}
              tabs=${J}
              activeId=${M}
              onActivate=${W}
              onClose=${w}
              onCloseOthers=${x}
              onCloseAll=${P}
              onTogglePin=${R}
              onTogglePreview=${v}
              onToggleDiff=${c}
              onEditSource=${h}
              previewTabs=${b}
              diffTabs=${a}
              paneOverrides=${t}
              detachedTabs=${N0}
              onReattachTab=${r}
              onToggleDock=${k?z:void 0}
              dockVisible=${k&&O}
              onToggleZen=${q0}
              zenMode=${X}
              onPopOutTab=${D0?void 0:Z0}
            />
          `}
          ${G&&H0&&N`
            <div class="editor-pane-host editor-pane-detached-host">
              <div class="editor-empty-state">
                <div class="editor-empty-state-title">${H0.label||H0.panePath||"Detached pane"}</div>
                <div class="editor-empty-state-body">This pane is detached into another window.</div>
                <div class="editor-empty-state-actions">
                  <button class="editor-empty-state-button" onClick=${()=>r(H0.panePath)}>Reattach here</button>
                </div>
              </div>
            </div>
          `}
          ${G&&!H0&&N`<div class="editor-pane-host" ref=${Q0}></div>`}
          ${G&&!H0&&M&&b.has(M)&&N`
            <${v2}
              getContent=${()=>L0.current?.getContent?.()}
              path=${M}
              onClose=${()=>v(M)}
            />
          `}
          ${k&&O&&N`<div class="dock-splitter" onMouseDown=${o} onTouchStart=${j0}></div>`}
          ${k&&N`<div class=${`dock-panel${O?"":" hidden"}${G?"":" standalone"}`}>
            <div class="dock-panel-header">
              <span class="dock-panel-title">Terminal</span>
              <div class="dock-panel-actions">
                ${!D0&&!y0&&N`
                  <button class="dock-panel-action" onClick=${()=>Z0(O0,"Terminal")} title="Open terminal in window" aria-label="Open terminal in window">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2.25" y="2.25" width="8.5" height="8.5" rx="1.5"/>
                      <path d="M8.5 2.25h5.25v5.25"/>
                      <path d="M13.75 2.25 7.75 8.25"/>
                    </svg>
                  </button>
                `}
                ${y0&&N`
                  <button class="dock-panel-action" onClick=${()=>r(O0)} title="Reattach terminal" aria-label="Reattach terminal">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2.25" y="2.25" width="11.5" height="11.5" rx="1.5"/>
                      <path d="M5.25 8h5.5"/>
                      <path d="M8 5.25v5.5"/>
                    </svg>
                  </button>
                `}
                <button class="dock-panel-close" onClick=${z} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                  <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                    <line x1="4" y1="4" x2="12" y2="12"/>
                    <line x1="12" y1="4" x2="4" y2="12"/>
                  </svg>
                </button>
              </div>
            </div>
            ${y0?N`
                <div class="dock-panel-body dock-panel-body-detached">
                  <div class="editor-empty-state">
                    <div class="editor-empty-state-title">Terminal detached</div>
                    <div class="editor-empty-state-body">The terminal is open in another window.</div>
                    <div class="editor-empty-state-actions">
                      <button class="editor-empty-state-button" onClick=${()=>r(O0)}>Reattach here</button>
                    </div>
                  </div>
                </div>
              `:N`<div class="dock-panel-body" ref=${P0}></div>`}
          </div>`}
        </div>
        <div class="editor-splitter" onMouseDown=${m0} onTouchStart=${l0}></div>
      `}
      <${hq}
        workspaceOpen=${j}
        toggleWorkspace=${_$}
        chatOnlyMode=${Z}
        onOpenTerminalTab=${E}
        onOpenVncTab=${H}
        onToggleTerminal=${k?z:void 0}
        terminalVisible=${Boolean(k&&O)}
      />
      <${lq}
        activeChatAgents=${t$}
        currentChatJid=${M0}
        workspaceOpen=${j}
        chatOnlyMode=${Z}
        terminalVisible=${Boolean(k&&O)}
        onSwitchChat=${b0}
        onToggleWorkspace=${_$}
        onOpenTerminalTab=${E}
        onOpenVncTab=${H}
        onToggleTerminalDock=${k?z:void 0}
        onPrefillCompose=${F0}
      />
      <div class="container">
        ${G_&&h0()&&N`<div class="search-results-spacer"></div>`}
        ${(S0||G_)&&N`
          <div class="hashtag-header">
            <button class="back-btn" onClick=${A0}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <span>${S0?`#${S0}`:`Search: ${G_} · ${r0}`}</span>
          </div>
        `}
        ${q_?.kind&&q_.kind!=="hidden"&&N`
          <${Zq}
            kind=${q_.kind}
            onSetupProvider=${w0}
            onShowModelPicker=${C0}
            onOpenWorkspace=${U_}
            onDismiss=${q_.kind==="provider-missing"?A_:V_}
          />
        `}
        <${yL}
          posts=${X_}
          hasMore=${D_?M_:!1}
          onLoadMore=${D_?$0:void 0}
          timelineRef=${z0}
          onHashtagClick=${k0}
          onMessageRef=${g0}
          onScrollToMessage=${v0}
          onFileRef=${s||e}
          onPostClick=${void 0}
          onDeletePost=${d}
          onOpenWidget=${Y0}
          onOpenAttachmentPreview=${d_}
          emptyMessage=${S0?`No posts with #${S0}`:G_?`No results for "${G_}"`:void 0}
          agents=${G0}
          user=${E0}
          reverse=${D_}
          removingPostIds=${I0}
          searchQuery=${G_}
        />
        <${D9}
          status=${J0(t0)?null:t0}
          draft=${R0}
          plan=${Z_}
          thought=${L_}
          pendingRequest=${$_}
          intent=${B_}
          turnId=${k_}
          steerQueued=${e0}
          onPanelToggle=${_0}
          showExtensionPanels=${!1}
        />
        <${Vq}
          session=${W0}
          onClose=${s0}
          onRetry=${i0}
          onInject=${f_}
        />
        <${Mq}
          widget=${z_}
          onClose=${x_}
          onWidgetEvent=${i1}
        />
        ${J_&&N`
          <${vq}
            mediaId=${J_.mediaId}
            info=${J_.info}
            onClose=${()=>d_(null)}
          />
        `}
        <${gY} />
        <${D9}
          extensionPanels=${Array.from(O1.values())}
          pendingPanelActions=${b_}
          onExtensionPanelAction=${n_}
          turnId=${k_}
          steerQueued=${e0}
          onPanelToggle=${_0}
          showCorePanels=${!1}
        />
        <${V9}
          items=${q1?[]:__}
          onInjectQueuedFollowup=${v_}
          onRemoveQueuedFollowup=${i_}
          onMoveQueuedFollowup=${L1}
          onOpenFilePill=${e}
        />
        <${Gq}
          onPost=${(X1)=>{HJ({response:X1,viewStateRef:M1,scrollToBottom:W$})}}
          onFocus=${f4}
          searchMode=${q1}
          searchScope=${F1}
          onSearch=${s_}
          onSearchScopeChange=${r_||a$}
          onEnterSearch=${j1}
          onExitSearch=${B1}
          fileRefs=${K1}
          onRemoveFileRef=${s1}
          onClearFileRefs=${N1}
          onSetFileRefs=${O$}
          messageRefs=${w6}
          onRemoveMessageRef=${z$}
          onClearMessageRefs=${I_}
          onSetMessageRefs=${w1}
          onSwitchChat=${b0}
          onRenameSession=${L}
          isRenameSessionInProgress=${B}
          onCreateSession=${z5}
          onCreateRootSession=${R1}
          onDeleteSession=${E_}
          onPurgeArchivedSession=${K_}
          onRestoreSession=${S1}
          activeEditorPath=${Z?null:M}
          onAttachEditorFile=${Z?void 0:a1}
          onOpenFilePill=${e}
          followupQueueCount=${x4}
          followupQueueItems=${__}
          showQueueStack=${!1}
          onInjectQueuedFollowup=${v_}
          onRemoveQueuedFollowup=${i_}
          onMoveQueuedFollowup=${L1}
          onSubmitIntercept=${J$}
          onMessageResponse=${J5}
          onSubmitError=${A5}
          isAgentActive=${I4}
          activeChatAgents=${t$}
          currentChatJid=${M0}
          connectionStatus=${G1}
          activeModel=${P_}
          agentModelsPayload=${k5}
          modelUsage=${t1}
          thinkingLevel=${T6}
          supportsThinking=${M5}
          contextUsage=${C4}
          notificationsEnabled=${A$}
          notificationPermission=${T1}
          onToggleNotifications=${k$}
          onModelChange=${e1}
          onModelStateChange=${Z1}
          statusNotice=${J0(t0)?t0:null}
          extensionWorkingState=${z1}
          prefillRequest=${O_}
        />
        <${eq}
          request=${$_}
          onRespond=${()=>{e$(null),w5.current=null}}
        />
      </div>
    </div>
  `}function $K(_){let{branchLoaderMode:$,panePopoutMode:j,branchLoaderState:G,panePopoutOptions:Z,mainShellOptions:X,renderers:Y}=_,q=vY({branchLoaderMode:$,panePopoutMode:j}),L=Y?.renderBranchLoaderMode||mY,K=Y?.renderPanePopoutMode||cY,Q=Y?.renderMainShell||_K;if(q==="branch-loader")return L(G);if(q==="pane-popout")return K(Z);return Q(X)}var Q8="piclaw_btw_session",GK=900,jK="__piclawRenameBranchFormLock__";function EJ(){try{return import.meta.url}catch{return null}}function m9(_){let $=typeof _==="string"?_.trim().toLowerCase():"";return $==="1"||$==="true"||$==="yes"}function DJ(_){try{let $=_?new URL(_).searchParams.get("v"):null;return $&&$.trim()?$.trim():null}catch{return null}}function V8(_,$,j=""){let G=_?.get?.($);return G&&G.trim()?G.trim():j}function ZK(_={}){let $=_.importMetaUrl===void 0?EJ():_.importMetaUrl,j=_.document===void 0?typeof document<"u"?document:null:_.document,G=_.origin===void 0?typeof window<"u"?window.location.origin:"http://localhost":_.origin||"http://localhost",Z=DJ($);if(Z)return Z;try{let Y=Array.from(j?.querySelectorAll?.('script[type="module"][src]')||[]).find((K)=>String(K?.getAttribute?.("src")||"").includes("/static/dist/app.bundle.js"))?.getAttribute?.("src")||"";if(!Y)return null;let L=new URL(Y,G).searchParams.get("v");return L&&L.trim()?L.trim():null}catch{return null}}function XK(_={}){let $=_.window===void 0?typeof window<"u"?window:null:_.window;if(!$)return null;let j=$[jK];if(j&&typeof j==="object")return j;let G={inFlight:!1,cooldownUntil:0};return $[jK]=G,G}function YK(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function qK(_={}){let $=typeof _.readItem==="function"?_.readItem:E1,j=_.storageKey||Q8,G=$(j);if(!G)return null;try{let Z=JSON.parse(G);if(!Z||typeof Z!=="object")return null;let X=typeof Z.question==="string"?Z.question:"",Y=typeof Z.answer==="string"?Z.answer:"",q=typeof Z.thinking==="string"?Z.thinking:"",L=typeof Z.error==="string"&&Z.error.trim()?Z.error:null,K=Z.status==="running"?"error":Z.status==="success"||Z.status==="error"?Z.status:"success";return{question:X,answer:Y,thinking:q,error:K==="error"?L||"BTW stream interrupted. You can retry.":L,model:null,status:K}}catch{return null}}function LK(_,$={}){let j=$.defaultChatJid||"web:default",G=V8(_,"chat_jid",j),Z=m9(_?.get?.("chat_only")||_?.get?.("chat-only")),X=m9(_?.get?.("pane_popout")),Y=V8(_,"pane_path"),q=V8(_,"pane_label"),L=m9(_?.get?.("branch_loader")),K=V8(_,"branch_source_chat_jid",G);return{currentChatJid:G,chatOnlyMode:Z,panePopoutMode:X,panePopoutPath:Y,panePopoutLabel:q,branchLoaderMode:L,branchLoaderSourceChatJid:K}}function KK(_,$){let j=Array.isArray(_)?_:[];return j.find((G)=>G?.id===$)||j[0]||null}function VK(_,$){if(!$||!_||typeof _.get!=="function")return null;return _.get($)||null}function c9(_,$,j){return _||$?.label||j||"Pane"}function QK(_,$,j){return`${c9(_,$,j)} · PiClaw`}function FK(_,$,j,G){let Z=Array.isArray(_)?_.length:0,X=Boolean(G&&$?.has?.(G)),Y=Boolean(G&&j?.has?.(G));return Z>1||X||Y}function BK(_,$){let j=typeof _==="string"?_:"";return j===$||j.startsWith(`${$}/`)}function NK(_,$,j,G){return _===$&&!j||G}function UK(_,$,j,G,Z){return _||!$&&(j||G&&Z)}g_();function WJ(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function $1(_,$,j){let G=_?.[$];return typeof G==="function"?G:WJ($,j)}var HK=!1,EK=!1,DK=!1;function OJ(_){if(!_||typeof _.setOptions!=="function")return;_.setOptions({breaks:!0,gfm:!0})}function zJ(_=typeof window<"u"?window:null){if(!_||EK)return;let $=(j)=>{let G=String(j?.message||j?.error?.message||"").trim();if(!/ResizeObserver loop (completed with undelivered notifications|limit exceeded)/i.test(G)){if(!(G==="Script error."&&(j?.lineno===0||!j?.filename)))return}j.preventDefault?.(),j.stopImmediatePropagation?.()};_.addEventListener("error",$,!0),EK=!0}function JJ(){Y_.register(G3),Y_.register(D7),Y_.register(E7),Y_.register(W7),Y_.register(O7),Y_.register(z7),Y_.register(A7),Y_.register(k7),Y_.register(M7),Y_.register(T7),Y_.register(S3),Z3(),Y_.register(K3),Y_.register(V3)}function AJ(_=typeof window<"u"?window:null){if(!_||DK)return;if(!_.isSecureContext)return;if(!("serviceWorker"in _.navigator))return;DK=!0,_.navigator.serviceWorker.register("/sw.js").catch(($)=>{console.warn("Failed to register app service worker:",$)})}async function WK(){if(HK)return;let _=typeof window<"u"?window:null,$=_?_?.marked:null;if(OJ($),zJ(_),U9(_),_)try{let j=await Promise.resolve().then(() => (x0(),aj));_.__piclawPreactHtm=j,_.__piclawPreact=j}catch(j){}JJ(),await Pq(_),AJ(_),HK=!0}function kJ(_=e5){return{searchPosts:_.searchPosts,deletePost:_.deletePost,getAgents:_.getAgents,getAgentThought:_.getAgentThought,setAgentThoughtVisibility:_.setAgentThoughtVisibility,getAgentStatus:_.getAgentStatus,getWorkspaceFile:_.getWorkspaceFile,getThread:_.getThread,getTimeline:_.getTimeline,sendAgentMessage:_.sendAgentMessage,forkChatBranch:_.forkChatBranch,getAgentContext:$1(_,"getAgentContext",null),getAutoresearchStatus:$1(_,"getAutoresearchStatus",null),stopAutoresearch:$1(_,"stopAutoresearch",{status:"ok"}),dismissAutoresearch:$1(_,"dismissAutoresearch",{status:"ok"}),getAgentModels:$1(_,"getAgentModels",{current:null,models:[]}),completeInstanceOobe:$1(_,"completeInstanceOobe",{status:"ok"}),getActiveChatAgents:$1(_,"getActiveChatAgents",{chats:[]}),getChatBranches:$1(_,"getChatBranches",{chats:[]}),renameChatBranch:$1(_,"renameChatBranch",null),pruneChatBranch:$1(_,"pruneChatBranch",null),restoreChatBranch:$1(_,"restoreChatBranch",null),getAgentQueueState:$1(_,"getAgentQueueState",{count:0}),steerAgentQueueItem:$1(_,"steerAgentQueueItem",{removed:!1,queued:"steer"}),removeAgentQueueItem:$1(_,"removeAgentQueueItem",{removed:!1}),streamSidePrompt:$1(_,"streamSidePrompt",null)}}var OK=kJ(e5);function zK(_){let{routing:$,paneRuntime:j,splitters:G,branchPaneActions:Z,timelineViewActions:X,composeReferenceActions:Y,sidepanelActions:q,shellState:L,agentState:K,composeState:Q,modelState:V}=_,F={appShellRef:L.appShellRef,editorOpen:L.editorOpen,hidePanePopoutControls:j.hidePanePopoutControls,panePopoutHasMenuActions:j.panePopoutHasMenuActions,panePopoutTitle:j.panePopoutTitle,tabStripTabs:L.tabStripTabs,tabStripActiveId:L.tabStripActiveId,handleTabActivate:L.handleTabActivate,previewTabs:L.previewTabs,diffTabs:L.diffTabs,handleTabTogglePreview:L.handleTabTogglePreview,handleTabToggleDiff:L.handleTabToggleDiff,editorContainerRef:j.editorContainerRef,getPaneContent:()=>j.editorInstanceRef?.current?.getContent?.(),panePopoutPath:L.panePopoutPath,canReattachPane:j.canReattachPanePopout,handleReattachPane:j.requestPanePopoutReattach},B={appShellRef:L.appShellRef,workspaceOpen:L.workspaceOpen,editorOpen:L.editorOpen,chatOnlyMode:L.chatOnlyMode,zenMode:j.zenMode,isRenameBranchFormOpen:L.isRenameBranchFormOpen,closeRenameCurrentBranchForm:Z.closeRenameCurrentBranchForm,handleRenameCurrentBranch:Z.handleRenameCurrentBranch,renameBranchNameDraft:L.renameBranchNameDraft,renameBranchNameInputRef:L.renameBranchNameInputRef,setRenameBranchNameDraft:L.setRenameBranchNameDraft,renameBranchDraftState:L.renameBranchDraftState,isRenamingBranch:L.isRenamingBranch,hasDockPanes:j.hasDockPanes,toggleDock:j.toggleDock,dockVisible:j.dockVisible,showEditorPaneContainer:j.showEditorPaneContainer,toggleZenMode:j.toggleZenMode,isWebAppMode:L.isWebAppMode,editorContainerRef:j.editorContainerRef,editorInstanceRef:j.editorInstanceRef,dockContainerRef:j.dockContainerRef,detachedTabs:j.detachedTabs,activeDetachedTab:j.activeDetachedTab,detachedDockPane:j.detachedDockPane,TERMINAL_TAB_PATH:L.TERMINAL_TAB_PATH,isIOSDevice:L.isIOSDevice,currentBranchRecord:L.currentBranchRecord,currentChatJid:L.currentChatJid,currentChatBranches:L.currentChatBranches,formatBranchPickerLabel:L.formatBranchPickerLabel,activeSearchScopeLabel:L.activeSearchScopeLabel,currentHashtag:L.currentHashtag,searchQuery:L.searchQuery,oobePanelState:L.oobePanelState,composePrefillRequest:L.composePrefillRequest,requestComposePrefill:L.requestComposePrefill,handleOobeSetupProvider:L.handleOobeSetupProvider,handleOobeShowModelPicker:L.handleOobeShowModelPicker,handleOobeOpenWorkspace:L.handleOobeOpenWorkspace,handleDismissProviderMissingOobe:L.handleDismissProviderMissingOobe,handleCompleteProviderReadyOobe:L.handleCompleteProviderReadyOobe,posts:L.posts,hasMore:L.hasMore,loadMore:L.loadMore,timelineRef:L.timelineRef,agents:L.agents,userProfile:L.userProfile,removingPostIds:L.removingPostIds,extensionStatusPanels:L.extensionStatusPanels,pendingExtensionPanelActions:L.pendingExtensionPanelActions,searchOpen:L.searchOpen,followupQueueItems:L.followupQueueItems,viewStateRef:L.viewStateRef,loadPosts:L.loadPosts,scrollToBottom:L.scrollToBottom,searchScope:L.searchScope,tabStripTabs:L.tabStripTabs,tabStripActiveId:L.tabStripActiveId,handleTabActivate:L.handleTabActivate,previewTabs:L.previewTabs,diffTabs:L.diffTabs,handleTabTogglePreview:L.handleTabTogglePreview,handleTabToggleDiff:L.handleTabToggleDiff,panePopoutPath:L.panePopoutPath,tabPaneOverrides:L.tabPaneOverrides,handleTabClose:L.handleTabClose,handleTabCloseOthers:L.handleTabCloseOthers,handleTabCloseAll:L.handleTabCloseAll,handleTabTogglePin:L.handleTabTogglePin,handleTabEditSource:L.handleTabEditSource,handleReattachPane:j.reattachPane,openEditor:L.openEditor,openTerminalTab:L.openTerminalTab,openVncTab:L.openVncTab,fileRefs:Q.fileRefs,messageRefs:Q.messageRefs,followupQueueCount:Q.followupQueueCount,attachmentPreview:Q.attachmentPreview,setAttachmentPreview:Q.setAttachmentPreview,extensionWorkingState:Q.extensionWorkingState,activeChatAgents:V.activeChatAgents,connectionStatus:V.connectionStatus,activeModel:V.activeModel,activeModelUsage:V.activeModelUsage,activeThinkingLevel:V.activeThinkingLevel,supportsThinking:V.supportsThinking,contextUsage:V.contextUsage,notificationsEnabled:V.notificationsEnabled,notificationPermission:V.notificationPermission,handleToggleNotifications:V.handleToggleNotifications,setActiveModel:V.setActiveModel,applyModelState:V.applyModelState,setPendingRequest:K.setPendingRequest,pendingRequestRef:K.pendingRequestRef,...G,...Z,...X,...Y,...q,...K,...Q,...V};return{branchLoaderMode:$.branchLoaderMode,panePopoutMode:$.panePopoutMode,branchLoaderState:$.branchLoaderState,panePopoutOptions:F,mainShellOptions:B}}function MJ(_){let{steerQueuedTurnId:$,currentTurnId:j,agentStatus:G}=_;return Boolean($&&$===(G?.turn_id||j))}function JK(_){let $=MJ({steerQueuedTurnId:_.agentState.steerQueuedTurnId,currentTurnId:_.agentState.currentTurnId,agentStatus:_.agentState.agentStatus});return zK({routing:{branchLoaderMode:_.routeState.branchLoaderMode,panePopoutMode:_.routeState.panePopoutMode,branchLoaderState:_.surface.branchLoaderState},paneRuntime:_.paneRuntime,splitters:_.splitters,branchPaneActions:_.orchestration.branchPaneActions,timelineViewActions:_.orchestration.timelineViewActions,composeReferenceActions:_.interaction.composeReferenceActions,sidepanelActions:_.orchestration.sidepanelActions,shellState:{appShellRef:_.surface.appShellRef,workspaceOpen:_.surface.workspaceOpen,editorOpen:_.editorState.editorOpen,chatOnlyMode:_.routeState.chatOnlyMode,isRenameBranchFormOpen:_.surface.isRenameBranchFormOpen,renameBranchNameDraft:_.surface.renameBranchNameDraft,renameBranchNameInputRef:_.surface.renameBranchNameInputRef,setRenameBranchNameDraft:_.surface.setRenameBranchNameDraft,renameBranchDraftState:_.surface.renameBranchDraftState,isRenamingBranch:_.surface.isRenamingBranch,isWebAppMode:_.surface.isWebAppMode,TERMINAL_TAB_PATH:_.helpers.terminalTabPath,isIOSDevice:_.helpers.isIOSDevice,currentBranchRecord:_.surface.currentBranchRecord,currentChatJid:_.routeState.currentChatJid,currentChatBranches:_.surface.currentChatBranches,formatBranchPickerLabel:_.helpers.formatBranchPickerLabel,activeSearchScopeLabel:_.surface.activeSearchScopeLabel,currentHashtag:_.surface.currentHashtag,searchQuery:_.surface.searchQuery,oobePanelState:_.surface.oobePanelState,composePrefillRequest:_.surface.composePrefillRequest,requestComposePrefill:_.surface.requestComposePrefill,handleOobeSetupProvider:_.surface.handleOobeSetupProvider,handleOobeShowModelPicker:_.surface.handleOobeShowModelPicker,handleOobeOpenWorkspace:_.surface.handleOobeOpenWorkspace,handleDismissProviderMissingOobe:_.surface.handleDismissProviderMissingOobe,handleCompleteProviderReadyOobe:_.surface.handleCompleteProviderReadyOobe,posts:_.timeline.posts,hasMore:_.timeline.hasMore,loadMore:_.timeline.loadMore,timelineRef:_.surface.timelineRef,agents:_.surface.agents,userProfile:_.surface.userProfile,removingPostIds:_.surface.removingPostIds,extensionStatusPanels:_.surface.extensionStatusPanels,pendingExtensionPanelActions:_.surface.pendingExtensionPanelActions,searchOpen:_.surface.searchOpen,followupQueueItems:_.surface.followupQueueItems,viewStateRef:_.surface.viewStateRef,loadPosts:_.timeline.loadPosts,scrollToBottom:_.timeline.scrollToBottom,searchScope:_.surface.searchScope,tabStripTabs:_.editorState.tabStripTabs,tabStripActiveId:_.editorState.tabStripActiveId,handleTabActivate:_.editorState.handleTabActivate,previewTabs:_.editorState.previewTabs,diffTabs:_.editorState.diffTabs,handleTabTogglePreview:_.editorState.handleTabTogglePreview,handleTabToggleDiff:_.editorState.handleTabToggleDiff,panePopoutPath:_.routeState.panePopoutPath,tabPaneOverrides:_.editorState.tabPaneOverrides,handleTabClose:_.editorState.handleTabClose,handleTabCloseOthers:_.editorState.handleTabCloseOthers,handleTabCloseAll:_.editorState.handleTabCloseAll,handleTabTogglePin:_.editorState.handleTabTogglePin,handleTabEditSource:_.editorState.handleTabEditSource,openEditor:_.editorState.openEditor,openTerminalTab:_.paneRuntime.openTerminalTab,openVncTab:_.paneRuntime.openVncTab},agentState:{agentStatus:_.agentState.agentStatus,isCompactionStatus:_.agentState.isCompactionStatus,agentDraft:_.agentState.agentDraft,agentPlan:_.agentState.agentPlan,agentThought:_.agentState.agentThought,pendingRequest:_.agentState.pendingRequest,intentToast:_.surface.intentToast,currentTurnId:_.agentState.currentTurnId,steerQueued:$,handlePanelToggle:_.interaction.handlePanelToggle,setPendingRequest:_.agentState.setPendingRequest,pendingRequestRef:_.agentState.pendingRequestRef,handleInjectQueuedFollowup:_.orchestration.followupActions.handleInjectQueuedFollowup,handleRemoveQueuedFollowup:_.orchestration.followupActions.handleRemoveQueuedFollowup,handleMoveQueuedFollowup:_.orchestration.followupActions.handleMoveQueuedFollowup},composeState:{btwSession:_.surface.btwSession,floatingWidget:_.surface.floatingWidget,fileRefs:_.surface.fileRefs,messageRefs:_.surface.messageRefs,followupQueueCount:_.surface.followupQueueCount,attachmentPreview:_.surface.attachmentPreview,setAttachmentPreview:_.surface.setAttachmentPreview,handleMessageResponse:_.orchestration.followupActions.handleMessageResponse,isComposeBoxAgentActive:_.orchestration.isComposeBoxAgentActive,extensionWorkingState:_.surface.extensionWorkingState},modelState:{activeChatAgents:_.surface.activeChatAgents,connectionStatus:_.surface.connectionStatus,activeModel:_.surface.activeModel,agentModelsPayload:_.surface.agentModelsPayload,activeModelUsage:_.surface.activeModelUsage,activeThinkingLevel:_.surface.activeThinkingLevel,supportsThinking:_.surface.supportsThinking,contextUsage:_.surface.contextUsage,notificationsEnabled:_.surface.notificationsEnabled,notificationPermission:_.surface.notificationPermission,handleToggleNotifications:_.surface.handleToggleNotifications,setActiveModel:_.surface.setActiveModel,applyModelState:_.orchestration.chatRefreshLifecycle.applyModelState}})}x0();var kK="(min-width: 1024px) and (orientation: landscape)";function l9(_=typeof window<"u"?window:null){return _&&typeof _==="object"?_:null}function AK(_,$){let j=l9(_);if(!j?.localStorage?.getItem)return null;try{let G=j.localStorage.getItem($);if(G===null)return null;return G==="true"}catch{return null}}function wJ(_,$,j){let G=l9(_);if(!G?.localStorage?.setItem)return;try{G.localStorage.setItem($,String(Boolean(j)))}catch{return}}function H6(_=typeof window<"u"?window:null){let $=l9(_);if(!$?.matchMedia)return"desktop";return $.matchMedia("(min-width: 1024px) and (orientation: landscape)").matches?"desktop":"narrow"}function MK(_){return _==="narrow"?"workspaceOpen.narrow":"workspaceOpen.desktop"}function wK(_={}){let{runtime:$=typeof window<"u"?window:null,bucket:j=null,allowLegacyFallback:G=!1,defaultValue:Z=!1}=_,X=j||H6($),Y=MK(X),q=AK($,Y);if(typeof q==="boolean")return q;if(G&&X==="desktop"){let L=AK($,"workspaceOpen");if(typeof L==="boolean")return L}return Z}function TK(_,$={}){let{runtime:j=typeof window<"u"?window:null,bucket:G=null}=$,Z=G||H6(j);wJ(j,MK(Z),Boolean(_))}c5();var TJ=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function yK(_,$={}){let j=$.window??(typeof window<"u"?window:null),G=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let Z=()=>{_(I1({window:j,navigator:G}))};Z();let Y=TJ.map((q)=>{try{return j.matchMedia?.(q)??null}catch{return null}}).filter(Boolean).map((q)=>{if(typeof q.addEventListener==="function")return q.addEventListener("change",Z),()=>q.removeEventListener("change",Z);if(typeof q.addListener==="function")return q.addListener(Z),()=>q.removeListener(Z);return()=>{}});return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),()=>{for(let q of Y)q();j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z)}}function F8(_,$={}){let j=$.window??(typeof window<"u"?window:null),G=$.document??(typeof document<"u"?document:null);if(!j||!G||typeof _!=="function")return()=>{};let Z=()=>{if(G.visibilityState&&G.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),G.addEventListener?.("visibilitychange",Z),()=>{j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z),G.removeEventListener?.("visibilitychange",Z)}}function xK(_={}){return I1(_)&&t6(_)}function yJ(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let G=Number($?.innerHeight||0);if(Number.isFinite(G)&&G>0)return Math.round(G);return null}function xJ(_={},$={}){if(!xK(_))return null;let j=_.window??(typeof window<"u"?window:null),G=_.document??(typeof document<"u"?document:null);if(!j||!G?.documentElement)return null;let Z=yJ({window:j});if(Z&&Z>0)G.documentElement.style.setProperty("--app-height",`${Z}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch(X){console.debug("[mobile-viewport] Ignoring scrollTo failure during standalone viewport reset.",X)}try{if(G.scrollingElement)G.scrollingElement.scrollTop=0,G.scrollingElement.scrollLeft=0;if(G.documentElement)G.documentElement.scrollTop=0,G.documentElement.scrollLeft=0;if(G.body)G.body.scrollTop=0,G.body.scrollLeft=0}catch(X){console.debug("[mobile-viewport] Ignoring DOM scroll reset failure during standalone viewport sync.",X)}}return Z}function IK(_={}){if(!xK(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};j.documentElement?.style?.setProperty?.("--app-height","100vh");let G=0,Z=new Set,X=()=>{if(G)$.cancelAnimationFrame?.(G),G=0;for(let V of Z)$.clearTimeout?.(V);Z.clear()},Y=()=>{G=0,xJ({window:$,document:j})},q=()=>{if(G)$.cancelAnimationFrame?.(G);G=$.requestAnimationFrame?.(Y)??0},L=()=>{q();for(let V of[80,220,420]){let F=$.setTimeout?.(()=>{Z.delete(F),q()},V);if(F!=null)Z.add(F)}},K=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;L()},Q=$.visualViewport;return L(),$.addEventListener("focus",L),$.addEventListener("pageshow",L),$.addEventListener("resize",L),$.addEventListener("orientationchange",L),j.addEventListener("visibilitychange",K),j.addEventListener("focusin",L,!0),Q?.addEventListener?.("resize",L),Q?.addEventListener?.("scroll",L),()=>{X(),$.removeEventListener("focus",L),$.removeEventListener("pageshow",L),$.removeEventListener("resize",L),$.removeEventListener("orientationchange",L),j.removeEventListener("visibilitychange",K),j.removeEventListener("focusin",L,!0),Q?.removeEventListener?.("resize",L),Q?.removeEventListener?.("scroll",L)}}var h9="resume-layout-settling",IJ=220,Q5=new WeakMap;function CJ(_){if(!_){Q_(Q8,"");return}Q_(Q8,JSON.stringify({question:_.question||"",answer:_.answer||"",thinking:_.thinking||"",error:_.error||null,status:_.status||"success"}))}function fJ(_={}){if(_.panePopoutMode)return!1;let $=typeof _.search==="string"?_.search:"";return!/(?:^|[?&])pane_popout=1(?:&|$)/.test($)}function PJ(_,$={}){if(!_)return()=>{};let{durationMs:j=IJ,scheduleTimeout:G=setTimeout,clearScheduledTimeout:Z=clearTimeout}=$,X=Q5.get(_);if(X)Z(X);_.classList.add(h9);let Y=G(()=>{if(Q5.get(_)===Y)_.classList.remove(h9),Q5.delete(_)},j);return Q5.set(_,Y),()=>{let q=Q5.get(_);if(q)Z(q),Q5.delete(_);_.classList.remove(h9)}}function RJ(_,$){if(!_?.getElementById)return;let j=encodeURIComponent(String($||"0")),G={"dynamic-manifest":`/manifest.json?v=${j}`,"dynamic-favicon":`/favicon.ico?v=${j}`,"dynamic-apple-touch-icon":`/apple-touch-icon.png?v=${j}`,"dynamic-apple-touch-icon-180":`/apple-touch-icon-180x180.png?v=${j}`,"dynamic-apple-touch-icon-167":`/apple-touch-icon-167x167.png?v=${j}`,"dynamic-apple-touch-icon-152":`/apple-touch-icon-152x152.png?v=${j}`,"dynamic-apple-touch-icon-precomposed":`/apple-touch-icon-precomposed.png?v=${j}`};for(let[Z,X]of Object.entries(G)){let Y=_.getElementById(Z);if(Y&&Y.href!==X)Y.href=X}}function CK(_){let{isRenameBranchFormOpen:$,renameBranchNameInputRef:j,appShellRef:G,setIsWebAppMode:Z,workspaceOpen:X,setWorkspaceOpen:Y,btwSession:q,agents:L,agentsRef:K,currentChatJid:Q,activeChatJidRef:V,userProfile:F,userProfileRef:B,brandingRef:U,panePopoutMode:D=!1}=_;zX(30000),g(()=>{if(!$)return;requestAnimationFrame(()=>{if($)j.current?.focus?.(),j.current?.select?.()})},[$,j]),g(()=>zZ(),[]),g(()=>yK(Z),[Z]),g(()=>{let k=()=>{},z=F8(()=>{k(),k=PJ(G.current)});return()=>{z(),k()}},[G]);let E=u(H6());return g(()=>{TK(X,{bucket:E.current})},[X]),g(()=>{if(typeof window>"u"||!window.matchMedia)return;let k=window.matchMedia(kK),z=()=>{let O=H6(window);if(E.current===O)return;let y=E.current;if(E.current=O,y==="desktop"&&O==="narrow")Y(!1)};if(k.addEventListener)k.addEventListener("change",z);else if(k.addListener)k.addListener(z);return()=>{if(k.removeEventListener)k.removeEventListener("change",z);else if(k.removeListener)k.removeListener(z)}},[Y]),g(()=>IK(),[]),g(()=>{CJ(q)},[q]),g(()=>{K.current=L||{}},[L,K]),g(()=>{V.current=Q},[V,Q]),g(()=>{B.current=F||{name:"You",avatar_url:null,avatar_background:null}},[F,B]),{applyBranding:f((k,z,O=null)=>{if(typeof document>"u")return;let y=(k||"").trim()||"PiClaw";if(U.current.title!==y){if(fJ({panePopoutMode:D,search:typeof window<"u"?window.location.search:""})){document.title=y;let A=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(A&&A.getAttribute("content")!==y)A.setAttribute("content",y)}U.current.title=y}let I=z?`${z}|${O||""}`:"";if(U.current.avatarBase!==I){U.current.avatarBase=I;let A=O||Date.now();RJ(document,A)}},[U])}}x0();function fK(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen&&!$.autoOpenEditor)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function p9(_){if(typeof _==="string")return _.trim();if(typeof _==="number")return Number.isFinite(_)?String(_):"";if(typeof _==="bigint")return String(_);return""}function n9(_,$){let j=Array.isArray(_)?_:[],G=p9($);if(!G)return j;if(j.includes(G))return j;return[...j,G]}function r9(_,$){let j=Array.isArray(_)?_:[],G=p9($);if(!G)return j;if(!j.includes(G))return j;return j.filter((Z)=>Z!==G)}function d9(_){if(!Array.isArray(_))return[];let $=[],j=new Set;for(let G of _){let Z=p9(G);if(!Z||j.has(Z))continue;j.add(Z),$.push(Z)}return $}async function PK(_){let{hashtag:$,setCurrentHashtag:j,setPosts:G,loadPosts:Z}=_;j($),G(null),await Z($)}async function RK(_){let{setCurrentHashtag:$,setSearchQuery:j,setPosts:G,loadPosts:Z}=_;$(null),j(null),G(null),await Z()}async function i9(_){let{query:$,scope:j,currentChatJid:G,currentRootChatJid:Z,searchPosts:X,setSearchScope:Y,setSearchQuery:q,setCurrentHashtag:L,setPosts:K,setHasMore:Q}=_,V=typeof $==="string"?$.trim():"";if(!V)return;let F=j==="root"||j==="all"?j:"current";Y(F),q(V),L(null),K(null);try{let B=await X(V,50,0,G,F,Z,_.filters);K(Array.isArray(B?.results)?B.results:[]),Q(!1)}catch(B){console.error("Failed to search:",B),K([])}}async function SK(_){let{post:$,posts:j,currentChatJid:G,deletePost:Z,preserveTimelineScrollTop:X,setPosts:Y,setRemovingPostIds:q,hasMoreRef:L,loadMoreRef:K,confirm:Q=(H)=>window.confirm(H),showAlert:V=(H)=>alert(H),scheduleTimeout:F=(H,k)=>{setTimeout(H,k)}}=_;if(!$)return;let B=$.id,U=typeof $?.chat_jid==="string"&&$.chat_jid.trim()?$.chat_jid.trim():G,D=j?.filter((H)=>H?.data?.thread_id===B&&H?.id!==B).length||0;if(D>0){if(!Q(`Delete this message and its ${D} replies?`))return}let E=(H)=>{if(!H.length)return;q((k)=>{let z=new Set(k);return H.forEach((O)=>z.add(O)),z}),F(()=>{if(X(()=>{Y((k)=>k?k.filter((z)=>!H.includes(z.id)):k)}),q((k)=>{let z=new Set(k);return H.forEach((O)=>z.delete(O)),z}),L.current)K.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let H=await Z(B,D>0,U);if(H?.ids?.length)E(H.ids)}catch(H){let k=H instanceof Error?H.message:String(H||"");if(D===0&&k.includes("Replies exist")){if(!Q("Delete this message and its replies?"))return;let O=await Z(B,!0,U);if(O?.ids?.length)E(O.ids);return}console.error("Failed to delete post:",H),V(`Failed to delete message: ${k}`)}}async function gK(_){let{id:$,targetChatJid:j,currentChatJid:G,getThread:Z,setPosts:X,getElementById:Y=(V)=>document.getElementById(V),scheduleRaf:q=(V)=>requestAnimationFrame(V),scheduleTimeout:L=(V,F)=>{setTimeout(V,F)}}=_,K=(V)=>{V.scrollIntoView({behavior:"smooth",block:"center"}),V.classList.add("post-highlight"),L(()=>V.classList.remove("post-highlight"),2000)},Q=Y(`post-${$}`);if(Q){K(Q);return}try{let V=typeof j==="string"&&j.trim()?j.trim():G,B=(await Z($,V))?.thread?.[0];if(!B)return;X((U)=>{if(!U)return[B];if(U.some((D)=>D.id===B.id))return U;return[...U,B]}),q(()=>{L(()=>{let U=Y(`post-${$}`);if(U)K(U)},50)})}catch(V){console.error("[scrollToMessage] Failed to fetch message",$,V)}}function SJ(_){if(typeof _==="string"&&_.trim())return _.trim();return"Could not send your message."}function gJ(_){let{id:$,targetChatJid:j=null,currentChatJid:G,currentHashtag:Z=null,searchQuery:X=null,searchOpen:Y=!1,setCurrentHashtag:q,setSearchQuery:L,setSearchOpen:K,setMessageRefs:Q,navigate:V,chatOnlyMode:F,baseHref:B=typeof window<"u"?window.location.href:"http://localhost/"}=_,U=String($??"").trim();if(!U)return!1;let D=typeof j==="string"&&j.trim()?j.trim():G,E=D!==G,H=Boolean(Y||X||Z);if(!E&&!H)return Q((k)=>n9(k,U)),!0;if(Q([U]),q?.(null),L?.(null),K?.(!1),E&&typeof V==="function"){let k=A1(B,D,{chatOnly:F});V(k)}return!0}function uK(_){let{setIntentToast:$,intentToastTimerRef:j,editorOpen:G,openEditor:Z,resolvePane:X,tabStripActiveId:Y,setFileRefs:q,setMessageRefs:L,currentChatJid:K,currentHashtag:Q,searchQuery:V,searchOpen:F,setCurrentHashtag:B,setSearchQuery:U,setSearchOpen:D,navigate:E,chatOnlyMode:H,baseHref:k,getThread:z,setPosts:O}=_,y=f(()=>{if(j.current)clearTimeout(j.current),j.current=null;$(null)},[j,$]);g(()=>{return()=>{y()}},[y]);let I=f((t)=>{q((q0)=>n9(q0,t))},[q]),A=f((t)=>{q((q0)=>r9(q0,t))},[q]),J=f(()=>{q([])},[q]),M=f((t)=>{q(d9(t))},[q]),W=f((t,q0=null,Z0="info",D0=3000)=>{y(),$({title:t,detail:q0||null,kind:Z0||"info"}),j.current=setTimeout(()=>{$((Q0)=>Q0?.title===t?null:Q0)},D0)},[y,j,$]),w=f((t,{autoOpenEditor:q0=!1}={})=>{let Z0=fK(t,{editorOpen:G,autoOpenEditor:q0,resolvePane:X});if(Z0.kind==="open"){Z(Z0.path);return}if(Z0.kind==="toast")W(Z0.title,Z0.detail,Z0.level)},[G,Z,X,W]),x=f((t)=>{w(t,{autoOpenEditor:!1})},[w]),P=f((t)=>{w(t,{autoOpenEditor:!0})},[w]),R=f(()=>{let t=Y;if(t)I(t)},[I,Y]),v=f((t,q0=null)=>{gJ({id:t,targetChatJid:q0,currentChatJid:K,currentHashtag:Q,searchQuery:V,searchOpen:F,setCurrentHashtag:B,setSearchQuery:U,setSearchOpen:D,setMessageRefs:L,navigate:E,chatOnlyMode:H,baseHref:k})},[k,H,K,Q,E,F,V,B,L,D,U]),c=f(async(t,q0=null)=>{await gK({id:t,targetChatJid:q0,currentChatJid:K,getThread:z,setPosts:O})},[K,z,O]),h=f((t)=>{L((q0)=>r9(q0,t))},[L]),r=f(()=>{L([])},[L]),b=f((t)=>{L(d9(t))},[L]),a=f((t)=>{W("Compose failed",SJ(t),"error",5000)},[W]);return{clearIntentToast:y,addFileRef:I,removeFileRef:A,clearFileRefs:J,setFileRefsFromCompose:M,showIntentToast:W,openFileFromPill:x,openTimelineFileFromPill:P,attachActiveEditorFile:R,addMessageRef:v,scrollToMessage:c,removeMessageRef:h,clearMessageRefs:r,setMessageRefsFromCompose:b,handleComposeSubmitError:a}}x0();async function bK(_){let{panelKey:$,expanded:j,currentTurnIdRef:G,thoughtExpandedRef:Z,draftExpandedRef:X,setAgentThoughtVisibility:Y,getAgentThought:q,thoughtBufferRef:L,draftBufferRef:K,setAgentThought:Q,setAgentDraft:V}=_;if($!=="thought"&&$!=="draft")return;let F=G.current;if($==="thought"){if(Z.current=j,F)try{await Y(F,"thought",j)}catch(B){console.warn("Failed to update thought visibility:",B)}if(!j)return;try{let B=F?await q(F,"thought"):null;if(B?.text)L.current=B.text;Q((U)=>({...U||{text:"",totalLines:0},fullText:L.current||U?.fullText||"",totalLines:Number.isFinite(B?.total_lines)?B.total_lines:U?.totalLines||0}))}catch(B){console.warn("Failed to fetch full thought:",B)}return}if(X.current=j,F)try{await Y(F,"draft",j)}catch(B){console.warn("Failed to update draft visibility:",B)}if(!j)return;try{let B=F?await q(F,"draft"):null;if(B?.text)K.current=B.text;V((U)=>({...U||{text:"",totalLines:0},fullText:K.current||U?.fullText||"",totalLines:Number.isFinite(B?.total_lines)?B.total_lines:U?.totalLines||0}))}catch(B){console.warn("Failed to fetch full draft:",B)}}function uJ(_){if(!_)return _;if(!(_.last_activity||_.lastActivity))return _;let{last_activity:$,lastActivity:j,...G}=_;return G}function bJ(_){if(!_||typeof _!=="object")return{type:"active",last_activity:!0};return{..._,last_activity:!0}}function vK(_){let{lastActivityTtlMs:$,lastActivityTimerRef:j,lastActivityTokenRef:G,lastAgentEventRef:Z,lastSilenceNoticeRef:X,isAgentRunningRef:Y,setIsAgentTurnActive:q,setAgentStatus:L,draftBufferRef:K,thoughtBufferRef:Q,pendingRequestRef:V,lastAgentResponseRef:F,currentTurnIdRef:B,steerQueuedTurnIdRef:U,agentStatusRef:D,silentRecoveryRef:E,thoughtExpandedRef:H,draftExpandedRef:k,setCurrentTurnId:z,setSteerQueuedTurnId:O,currentTurnIdRefForPanel:y,setAgentThoughtVisibility:I,getAgentThought:A,setAgentThought:J,setAgentDraft:M}=_,W=f((c={})=>{let h=Number(c.atMs),r=Number.isFinite(h)&&h>0?h:Date.now();if(Z.current=r,c.running)Y.current=!0,q((b)=>b?b:!0);if(c.clearSilence)X.current=0},[Y,Z,X,q]),w=f(()=>{if(j.current)clearTimeout(j.current),j.current=null;G.current=0},[j,G]);g(()=>()=>{w()},[w]);let x=f(()=>{w(),L((c)=>uJ(c))},[w,L]),P=f((c)=>{if(!c)return;w();let h=Date.now();G.current=h,L(bJ(c)),j.current=setTimeout(()=>{if(G.current!==h)return;L((r)=>{if(!r||!(r.last_activity||r.lastActivity))return r;return null})},$)},[w,j,G,$,L]),R=f(()=>{Y.current=!1,q(!1),Z.current=null,X.current=0,K.current="",Q.current="",V.current=null,F.current=null,B.current=null,U.current=null,D.current=null,E.current={inFlight:!1,lastAttemptAt:0,turnId:null},w(),z(null),O(null),H.current=!1,k.current=!1},[D,w,B,K,k,Y,Z,F,X,V,z,q,O,E,U,Q,H]),v=f(async(c,h)=>{await bK({panelKey:c,expanded:h,currentTurnIdRef:y,thoughtExpandedRef:H,draftExpandedRef:k,setAgentThoughtVisibility:I,getAgentThought:A,thoughtBufferRef:Q,draftBufferRef:K,setAgentThought:J,setAgentDraft:M})},[y,K,k,A,M,J,I,Q,H]);return{noteAgentActivity:W,clearLastActivityTimer:w,clearLastActivityFlag:x,showLastActivity:P,clearAgentRunState:R,handlePanelToggle:v}}x0();function B8(_){return _?{..._}:{text:"",totalLines:0}}function mK(_){return Array.isArray(_)?_.map(($)=>({...$})):[]}function vJ(_){return{inFlight:Boolean(_?.inFlight),lastAttemptAt:Number(_?.lastAttemptAt||0),turnId:typeof _?.turnId==="string"?_.turnId:null}}function mJ(){return{agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}}function cK(_){return{agentStatus:_.agentStatus,agentDraft:B8(_.agentDraft),agentPlan:_.agentPlan||"",agentThought:B8(_.agentThought),pendingRequest:_.pendingRequest,currentTurnId:_.currentTurnId||null,steerQueuedTurnId:_.steerQueuedTurnId||null,isAgentTurnActive:Boolean(_.isAgentTurnActive),followupQueueItems:mK(_.followupQueueItems),activeModel:_.activeModel,activeThinkingLevel:_.activeThinkingLevel,supportsThinking:Boolean(_.supportsThinking),activeModelUsage:_.activeModelUsage,contextUsage:_.contextUsage,isAgentRunning:Boolean(_.isAgentRunning),wasAgentActive:Boolean(_.wasAgentActive),draftBuffer:_.draftBuffer||"",thoughtBuffer:_.thoughtBuffer||"",lastAgentEvent:_.lastAgentEvent||null,lastSilenceNotice:Number(_.lastSilenceNotice||0),lastAgentResponse:_.lastAgentResponse||null,currentTurnIdRef:_.currentTurnIdRef||null,steerQueuedTurnIdRef:_.steerQueuedTurnIdRef||null,thoughtExpanded:Boolean(_.thoughtExpanded),draftExpanded:Boolean(_.draftExpanded),agentStatusRef:_.agentStatusRef||null,silentRecovery:vJ(_.silentRecovery)}}function lK(_){let $=_.snapshot||mJ(),{refs:j,setters:G}=_;return _.clearLastActivityTimer?.(),j.isAgentRunningRef.current=Boolean($.isAgentRunning),j.wasAgentActiveRef.current=Boolean($.wasAgentActive),G.setIsAgentTurnActive(Boolean($.isAgentTurnActive)),j.lastAgentEventRef.current=$.lastAgentEvent||null,j.lastSilenceNoticeRef.current=Number($.lastSilenceNotice||0),j.draftBufferRef.current=$.draftBuffer||"",j.thoughtBufferRef.current=$.thoughtBuffer||"",j.pendingRequestRef.current=$.pendingRequest||null,j.lastAgentResponseRef.current=$.lastAgentResponse||null,j.currentTurnIdRef.current=$.currentTurnIdRef||null,j.steerQueuedTurnIdRef.current=$.steerQueuedTurnIdRef||null,j.agentStatusRef.current=$.agentStatusRef||null,j.silentRecoveryRef.current=$.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},j.thoughtExpandedRef.current=Boolean($.thoughtExpanded),j.draftExpandedRef.current=Boolean($.draftExpanded),G.setAgentStatus($.agentStatus||null),G.setAgentDraft(B8($.agentDraft)),G.setAgentPlan($.agentPlan||""),G.setAgentThought(B8($.agentThought)),G.setPendingRequest($.pendingRequest||null),G.setCurrentTurnId($.currentTurnId||null),G.setSteerQueuedTurnId($.steerQueuedTurnId||null),G.setFollowupQueueItems(mK($.followupQueueItems)),G.setActiveModel($.activeModel||null),G.setActiveThinkingLevel($.activeThinkingLevel||null),G.setSupportsThinking(Boolean($.supportsThinking)),G.setActiveModelUsage($.activeModelUsage??null),G.setContextUsage($.contextUsage??null),$}function o9(_){return String(_||"").trim()||"web:default"}function hK({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function cJ(_){return hK(_)}function lJ(_){let $=String(_?.data?.content||"").trim();if($)return $.replace(/\s+/g," ").slice(0,200);if((Array.isArray(_?.data?.content_blocks)?_.data.content_blocks:[]).length>0)return"Sent an attachment.";return""}function pK(_){let{isAgentTurnActive:$,steerQueuedTurnId:j,currentTurnId:G,steerQueuedTurnIdRef:Z,setSteerQueuedTurnId:X,agentStatus:Y,agentDraft:q,agentPlan:L,agentThought:K,pendingRequest:Q,pendingRequestRef:V,followupQueueItems:F,activeModel:B,activeThinkingLevel:U,supportsThinking:D,activeModelUsage:E,contextUsage:H,isAgentRunningRef:k,wasAgentActiveRef:z,draftBufferRef:O,thoughtBufferRef:y,lastAgentEventRef:I,lastSilenceNoticeRef:A,lastAgentResponseRef:J,currentTurnIdRef:M,thoughtExpandedRef:W,draftExpandedRef:w,agentStatusRef:x,silentRecoveryRef:P,clearLastActivityTimer:R,setIsAgentTurnActive:v,setAgentStatus:c,setAgentDraft:h,setAgentPlan:r,setAgentThought:b,setPendingRequest:a,setCurrentTurnId:t,setFollowupQueueItems:q0,setActiveModel:Z0,setActiveThinkingLevel:D0,setSupportsThinking:Q0,setActiveModelUsage:L0,setContextUsage:N0,lastNotifiedIdRef:H0,agentsRef:y0,notify:o,shouldNotifyLocallyForChat:j0}=_,O0=f((h0)=>{if(!cJ({remainingQueueCount:h0,steerQueuedTurnId:Z.current,currentTurnId:M.current,isAgentTurnActive:$}))return;Z.current=null,X(null)},[$,M,X,Z]),P0=f(()=>cK({agentStatus:Y,agentDraft:q,agentPlan:L,agentThought:K,pendingRequest:Q,currentTurnId:G,steerQueuedTurnId:j,isAgentTurnActive:$,followupQueueItems:F,activeModel:B,activeThinkingLevel:U,supportsThinking:D,activeModelUsage:E,contextUsage:H,isAgentRunning:k.current,wasAgentActive:z.current,draftBuffer:O.current,thoughtBuffer:y.current,lastAgentEvent:I.current,lastSilenceNotice:A.current,lastAgentResponse:J.current,currentTurnIdRef:M.current,steerQueuedTurnIdRef:Z.current,thoughtExpanded:W.current,draftExpanded:w.current,agentStatusRef:x.current,silentRecovery:P.current}),[B,E,U,q,L,Y,K,H,G,F,$,Q,j,D,k,z,O,y,I,A,J,M,Z,W,w,x,P]),m0=f((h0)=>{lK({snapshot:h0,clearLastActivityTimer:R,refs:{isAgentRunningRef:k,wasAgentActiveRef:z,lastAgentEventRef:I,lastSilenceNoticeRef:A,draftBufferRef:O,thoughtBufferRef:y,pendingRequestRef:V,lastAgentResponseRef:J,currentTurnIdRef:M,steerQueuedTurnIdRef:Z,agentStatusRef:x,silentRecoveryRef:P,thoughtExpandedRef:W,draftExpandedRef:w},setters:{setIsAgentTurnActive:v,setAgentStatus:c,setAgentDraft:h,setAgentPlan:r,setAgentThought:b,setPendingRequest:a,setCurrentTurnId:t,setSteerQueuedTurnId:X,setFollowupQueueItems:q0,setActiveModel:Z0,setActiveThinkingLevel:D0,setSupportsThinking:Q0,setActiveModelUsage:L0,setContextUsage:N0}})},[x,R,M,O,w,k,I,J,A,V,Z0,L0,D0,h,r,c,b,N0,t,q0,v,a,X,Q0,P,Z,y,W,z]),l0=f((h0)=>{if(!h0)return;if(M.current===h0)return;M.current=h0,P.current={inFlight:!1,lastAttemptAt:0,turnId:h0},t(h0),Z.current=null,X(null),O.current="",y.current="",h({text:"",totalLines:0}),r(""),b({text:"",totalLines:0}),a(null),V.current=null,J.current=null,W.current=!1,w.current=!1},[M,O,w,J,V,h,r,b,t,a,X,P,Z,y,W]),G_=f((h0)=>{let c0=J.current;if(!c0||!c0.post)return;if(h0&&c0.turnId&&c0.turnId!==h0)return;let M0=c0.post,p0=typeof M0?.chat_jid==="string"&&M0.chat_jid.trim()?M0.chat_jid.trim():"";if(!p0||!j0(p0))return;if(M0.id&&H0.current===M0.id)return;let b0=lJ(M0);if(!b0)return;H0.current=M0.id||H0.current,J.current=null;let d0=y0.current||{},E_=(M0?.data?.agent_id?d0[M0.data.agent_id]:null)?.name||"Pi";o(E_,b0,{sourceLabel:"Local"})},[y0,J,H0,o,j0]);return{clearQueuedSteerStateIfStale:O0,snapshotCurrentChatPaneState:P0,restoreChatPaneState:m0,setActiveTurn:l0,notifyForFinalResponse:G_}}x0();function N8(_){return _?.turn_id||_?.turnId||null}function F5(_){if(typeof _?.text!=="string"||!_.text)return null;let $=Number.isFinite(_?.totalLines)?Number(_.totalLines):Number.isFinite(_?.total_lines)?Number(_.total_lines):0;return{text:_.text,totalLines:$}}function s9(_,$){return typeof _?.text==="string"&&_.text.length>=$.length}function a9(_,$){return Number.isFinite($)?Number($):_?_.replace(/\r\n/g,`
`).split(`
`).length:0}function U8(_,$){return{text:_,totalLines:a9(_,$)}}function t9(_,$){return{text:$?.text||"",totalLines:JX(_),fullText:_}}function nK(_,$,j){return j==="replace"?$:`${_||""}${$}`}function rK(_,$){let j=_||"";if($?.reset)j="";if($?.delta)j+=String($.delta);return j}function dK(_,$){let j=_||"";if($?.reset)j="";if(typeof $?.delta==="string")j+=$.delta;return j}function n1(_){return!_?.currentHashtag&&!_?.searchQuery&&!_?.searchOpen}function iK(_,$,j){return Boolean($&&j&&(_==="new_post"||_==="new_reply"||_==="agent_response"))}function e9(_,$){return _&&$}function oK(_,$){if(!Array.isArray(_)||_.length===0)return[$];if(_.some((j)=>j?.id===$?.id))return _;return[..._,$]}function sK(_,$){if(!Array.isArray(_))return _;if(!_.some((j)=>j?.id===$?.id))return _;return _.map((j)=>j?.id===$?.id?$:j)}function aK(_,$){if(!Array.isArray(_))return _;let j=Array.isArray($)?$:[];if(j.length===0)return _;let G=new Set(j),Z=_.filter((X)=>!G.has(X?.id));return Z.length===_.length?_:Z}async function tK(_){let{currentChatJid:$,getAgentStatus:j,activeChatJidRef:G,wasAgentActiveRef:Z,viewStateRef:X,refreshTimeline:Y,clearAgentRunState:q,agentStatusRef:L,pendingRequestRef:K,thoughtBufferRef:Q,draftBufferRef:V,setAgentStatus:F,setAgentDraft:B,setAgentPlan:U,setAgentThought:D,setPendingRequest:E,setActiveTurn:H,noteAgentActivity:k,clearLastActivityFlag:z}=_,O=$;try{let y=await j(O);if(G.current!==O)return null;if(!y||y.status!=="active"||!y.data){if(Z.current&&n1(X.current))Y();return Z.current=!1,q(),L.current=null,F(null),B({text:"",totalLines:0}),U(""),D({text:"",totalLines:0}),E(null),K.current=null,y??null}Z.current=!0;let I=y.data;L.current=I;let A=N8(I);if(A)H(A);k({running:!0,clearSilence:!0,atMs:b$(I)??Date.now()}),z(),F(I);let J=F5(y.thought);if(J)D((W)=>{if(s9(W,J.text))return W;return Q.current=J.text,J});let M=F5(y.draft);if(M)B((W)=>{if(s9(W,M.text))return W;return V.current=M.text,M});return y}catch(y){return console.warn("Failed to fetch agent status:",y),null}}async function eK(_){let{isAgentRunningRef:$,pendingRequestRef:j,currentTurnIdRef:G,silentRecoveryRef:Z,silenceRefreshMs:X,viewStateRef:Y,refreshTimeline:q,refreshQueueState:L,refreshAgentStatus:K,now:Q=()=>Date.now()}=_;if(!$.current)return null;if(j.current)return null;let V=G.current||null,F=Z.current,B=Q();if(F.inFlight)return null;if(F.turnId===V&&B-F.lastAttemptAt<X)return null;F.inFlight=!0,F.lastAttemptAt=B,F.turnId=V;try{if(n1(Y.current))await q();return await L(),await K()}finally{F.inFlight=!1}}function hJ(_){if(!_||typeof _!=="object")return!1;let $=typeof _.type==="string"?_.type:"";if($==="tool_call"||$==="tool_status"||$==="intent")return!0;return Boolean(_.tool_name||_.tool_args)}function _V(_){let{isAgentRunningRef:$,pendingRequestRef:j,lastAgentEventRef:G,lastSilenceNoticeRef:Z,agentStatusRef:X,silenceWarningMs:Y,silenceFinalizeMs:q,silenceRefreshMs:L,isCompactionStatus:K,setAgentStatus:Q,reconcileSilentTurn:V,now:F=()=>Date.now()}=_;if(!$.current)return;if(j.current)return;let B=G.current;if(!B)return;let U=F(),D=U-B,E=X.current,H=K(E),k=hJ(E);if(D>=q){if(!H&&!k)Q({type:"waiting",title:"Re-syncing after a quiet period…"});V();return}if(D>=Y&&U-Z.current>=L){if(!H&&!k){let z=Math.floor(D/1000);Q({type:"waiting",title:`Waiting for model… No events for ${z}s`})}Z.current=U,V()}}function pJ(_){if(!_||typeof _!=="object")return null;let $=typeof _.type==="string"?_.type:"",j=typeof _.title==="string"&&_.title.trim()?_.title.trim():null,G=typeof _.tool_name==="string"&&_.tool_name.trim()?_.tool_name.trim():null,Z=typeof _.status==="string"&&_.status.trim()?_.status.trim():null;if($==="tool_call")return{summary:`Timed out while running ${j||G||"tool"}`,title:j,toolName:G,statusText:Z};if($==="tool_status"){let X=j||G||"tool";return{summary:Z?`Timed out after ${X}: ${Z}`:`Timed out after ${X}`,title:j,toolName:G,statusText:Z}}if(G||j)return{summary:`Timed out after ${j||G||"tool"}`,title:j,toolName:G,statusText:Z};return null}function $V(_){let{isAgentRunningRef:$,lastSilenceNoticeRef:j,lastAgentEventRef:G,currentTurnIdRef:Z,thoughtExpandedRef:X,draftExpandedRef:Y,draftBufferRef:q,thoughtBufferRef:L,pendingRequestRef:K,lastAgentResponseRef:Q,agentStatusRef:V,stalledPostIdRef:F,scrollToBottomRef:B,setCurrentTurnId:U,setAgentDraft:D,setAgentPlan:E,setAgentThought:H,setPendingRequest:k,setAgentStatus:z,setPosts:O,dedupePosts:y,now:I=()=>Date.now(),nowIso:A=()=>new Date().toISOString()}=_;if(!$.current)return;let J=pJ(V.current);$.current=!1,j.current=0,G.current=null,V.current=null,Z.current=null,U(null),X.current=!1,Y.current=!1;let M=(q.current||"").trim();if(q.current="",L.current="",E(""),H({text:"",totalLines:0}),k(null),K.current=null,Q.current=null,!M){D({text:"",totalLines:0}),z({type:"error",title:"Response stalled - No content received"});return}D({text:M,totalLines:a9(M,null),fullText:M});let W=M,w=I(),x=A(),P={id:w,timestamp:x,data:{type:"agent_response",content:W,content_blocks:[{type:"timeout_marker",timed_out:!0,title:"Timed out",tool_action_summary:J?.summary||"",tool_title:J?.title||"",tool_name:J?.toolName||"",tool_status:J?.statusText||"",draft_recovered:!0}],agent_id:"default",is_local_stall:!0}};F.current=w,O((R)=>R?y([...R,P]):[P]),B.current?.(),z(null)}function nJ(_){let{stalledPostIdRef:$,setPosts:j}=_,G=$.current;if(!G)return;j((Z)=>Z?Z.filter((X)=>X.id!==G):Z),$.current=null}function rJ(_){$V(_)}function jV(_){let{viewStateRef:$,currentHashtag:j,searchQuery:G,searchOpen:Z}=_;g(()=>{$.current={currentHashtag:j,searchQuery:G,searchOpen:Z}},[j,Z,G,$])}function GV(_){let{stalledPostIdRef:$,setPosts:j,isAgentRunningRef:G,lastSilenceNoticeRef:Z,lastAgentEventRef:X,currentTurnIdRef:Y,thoughtExpandedRef:q,draftExpandedRef:L,draftBufferRef:K,thoughtBufferRef:Q,pendingRequestRef:V,lastAgentResponseRef:F,agentStatusRef:B,scrollToBottomRef:U,setCurrentTurnId:D,setAgentDraft:E,setAgentPlan:H,setAgentThought:k,setPendingRequest:z,setAgentStatus:O,dedupePosts:y}=_,I=f(()=>{nJ({stalledPostIdRef:$,setPosts:j})},[j,$]),A=f(()=>{rJ({isAgentRunningRef:G,lastSilenceNoticeRef:Z,lastAgentEventRef:X,currentTurnIdRef:Y,thoughtExpandedRef:q,draftExpandedRef:L,draftBufferRef:K,thoughtBufferRef:Q,pendingRequestRef:V,lastAgentResponseRef:F,agentStatusRef:B,stalledPostIdRef:$,scrollToBottomRef:U,setCurrentTurnId:D,setAgentDraft:E,setAgentPlan:H,setAgentThought:k,setPendingRequest:z,setAgentStatus:O,setPosts:j,dedupePosts:y})},[Y,y,K,L,G,X,F,B,Z,V,U,E,H,O,k,D,z,j,$,Q,q]);return{removeStalledPost:I,finalizeStalledResponse:A}}function dJ(_){let{removeFileRefRef:$,composeReferenceActions:j}=_;$.current=j.removeFileRef||null}function iJ(_){return{applyBranding:_.applyBranding,composeReferenceActions:_.composeReferenceActions,..._.agentActivity,..._.chatPaneRuntime,recoveryCallbacks:_.recoveryCallbacks}}function ZV(_){let{environment:$,composeReferences:j,agentActivity:G,chatPaneRuntime:Z,recovery:X,viewState:Y,removeFileRefRef:q}=_,{applyBranding:L}=CK($),K=uK(j);dJ({removeFileRefRef:q,composeReferenceActions:K});let Q=vK(G),V=pK({...Z,clearLastActivityTimer:Q.clearLastActivityTimer}),F=GV(X);return jV(Y),iJ({applyBranding:L,composeReferenceActions:K,agentActivity:Q,chatPaneRuntime:V,recoveryCallbacks:F})}x0();x0();g_();var H8=new Map,_j=new Map;function XV(){return Date.now()}function E6(_){return String(_||"").trim()}function YV(_,$=600000){return Boolean(_&&XV()-_.cachedAt<=$)}function oJ(_){while(_.size>24){let $=_.keys().next().value;if(!$)break;_.delete($)}}function qV(_,$){return H8.delete(_),H8.set(_,$),oJ(H8),$}function E8(_,$){let j=E6(_);if(!j)return null;let G={posts:Array.isArray($?.posts)?$.posts:[],has_more:Boolean($?.has_more),cachedAt:XV()};return qV(j,G)}function $j(_,$={}){let j=E6(_);if(!j)return null;let G=Number.isFinite($.maxAgeMs)?Number($.maxAgeMs):600000,Z=H8.get(j)||null;if(!YV(Z,G))return null;return qV(j,Z)}function LV(_,$,j=5){if(!Array.isArray(_))return[];let G=E6($),Z=Number.isFinite(j)?Math.max(1,Math.min(8,Number(j))):5,X=new Set,Y=[];for(let q of _){let L=E6(q?.chat_jid);if(!L||L===G||X.has(L))continue;if(X.add(L),Y.push(L),Y.length>=Z)break}return Y}async function KV(_){let $=Array.from(new Set((_.chatJids||[]).map((q)=>E6(q)).filter(Boolean)));if($.length===0)return;let j=Number.isFinite(_.maxAgeMs)?Number(_.maxAgeMs):600000,G=Number.isFinite(_.maxConcurrent)?Math.max(1,Math.min(4,Number(_.maxConcurrent))):2,Z=$.filter((q)=>!YV($j(q,{maxAgeMs:j}),j)),X=0,Y=Array.from({length:Math.min(G,Z.length)},async()=>{while(X<Z.length){let q=Z[X++],L=_j.get(q);if(L){await L;continue}let K=(async()=>{try{let Q=await _.fetchTimeline(q);E8(q,Q)}catch(Q){console.debug("[app-timeline-cache] Ignoring timeline prewarm failure for a best-effort background fetch.",Q,{chatJid:q})}finally{_j.delete(q)}})();_j.set(q,K),await K}});await Promise.all(Y)}function VV(_,$){let j=Array.isArray(_)?_:[],G=Array.isArray($)?$:null;if(!G)return j;if(G.length===0)return G;if(j.length===0)return G;let Z=1/0;for(let Y of G){let q=Y?.id;if(typeof q==="number"&&Number.isFinite(q)&&q<Z)Z=q}if(!Number.isFinite(Z))return $5([...G,...j]);let X=j.filter((Y)=>{let q=Y?.id;return typeof q==="number"&&Number.isFinite(q)&&q<Z});return $5([...G,...X])}function QV({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null,currentHashtag:G=null,searchQuery:Z=null}){let[X,Y]=C(null),[q,L]=C(!1),K=u(!1),Q=u(null),V=u(!1),F=u(null),B=u(null),U=u(0),D=u(0);g(()=>{K.current=q},[q]),g(()=>{B.current=X},[X]);let E=!G&&!Z,H=u(E);g(()=>{H.current=E},[E]),g(()=>{U.current+=1,Y(null),B.current=null,F.current=null,V.current=!1,K.current=!1,L(!1),D.current=0},[j]);let k=f((J,M)=>{if(!E)return;E8(j,{posts:Array.isArray(J)?J:[],has_more:Boolean(M)})},[j,E]),z=f((J,M)=>{B.current=Array.isArray(J)?J:[],K.current=Boolean(M),Y(B.current),L(K.current),k(B.current,K.current)},[k]),O=f(async(J=null)=>{let M=U.current;try{if(J){let P=await d3(J,50,0,j);if(M!==U.current)return;Y(P.posts),L(!1);return}let W=(P)=>{if(M!==U.current)return;let R=Array.isArray(P?.posts)?P.posts:[],v=Boolean(P?.has_more);z(R,v)},w=$j(j);if(w){z(w.posts,w.has_more);let P=D.current;g$(10,null,j).then((R)=>{if(M!==U.current||D.current!==P)return;if(!H.current)return;let v=Array.isArray(R?.posts)?R.posts:[],c=Boolean(R?.has_more);z(VV(B.current,v),c)}).catch((R)=>{if(M!==U.current)return;console.error("Failed to refresh cached timeline:",R)});return}let x=await g$(10,null,j);W(x)}catch(W){if(M!==U.current)return;throw console.error("Failed to load posts:",W),W}},[j,z]),y=f(async()=>{let J=U.current;try{let M=await g$(10,null,j);if(J!==U.current)return;z(VV(B.current,M?.posts),Boolean(M?.has_more))}catch(M){if(J!==U.current)return;console.error("Failed to refresh timeline:",M)}},[j,z]),I=f(async(J={})=>{let M=U.current,W=B.current;if(!W||W.length===0)return;if(V.current)return;let{preserveScroll:w=!0,preserveMode:x="top",allowRepeat:P=!1}=J,R=(h)=>{if(!w){h();return}if(x==="top")$(h);else _(h)},c=W.slice().sort((h,r)=>h.id-r.id)[0]?.id;if(!Number.isFinite(c))return;if(!P&&F.current===c)return;V.current=!0,F.current=c;try{let h=await g$(10,c,j);if(M!==U.current)return;if(D.current+=1,h.posts.length>0)R(()=>{let r=$5([...h.posts,...B.current||[]]);z(r,h.has_more)});else z(B.current||[],!1)}catch(h){if(M!==U.current)return;console.error("Failed to load more posts:",h)}finally{if(M===U.current)V.current=!1}},[j,_,$,z]);g(()=>{Q.current=I},[I]);let A=f((J)=>{Y((M)=>{let W=typeof J==="function"?J(M):J;if(B.current=W,Array.isArray(W)){if(D.current+=1,E)E8(j,{posts:W,has_more:K.current})}return W})},[j,E]);return{posts:X,setPosts:A,hasMore:q,setHasMore:L,hasMoreRef:K,loadPosts:O,refreshTimeline:y,loadMore:I,loadMoreRef:Q,loadingMoreRef:V,lastBeforeIdRef:F}}x0();function sJ(_){if(!_?.data?.is_bot_message)return!1;let $=_.data.content;return $==="Queued as a follow-up (one-at-a-time)."||$==="⁣"}function FV(_,$){if(!_||!Array.isArray(_))return _;let j=new Set($||[]),G=_.filter((Z)=>!j.has(Z?.id)&&!sJ(Z));return G.length===_.length?_:G}function BV(_,$){let j=$||new Set;return Array.isArray(_)?_.map((G)=>({...G})).filter((G)=>!j.has(G.row_id)):[]}function NV(_,$){if(!Array.isArray(_)||!Array.isArray($))return!1;return _.length===$.length&&_.every((j,G)=>j?.row_id===$[G]?.row_id)}function d$(_,$){let j=Array.isArray(_)&&$!=null?_.filter((G)=>G?.row_id!==$):Array.isArray(_)?[..._]:[];return{items:j,remainingQueueCount:j.length}}function UV(_,$){let j=Array.isArray(_)?_:[],G=$?.row_id,Z=$?.content;if(G==null||typeof Z!=="string"||!Z.trim())return j;if(j.some((X)=>X?.row_id===G))return j;return[...j,{row_id:G,content:Z,timestamp:$?.timestamp||null,thread_id:$?.thread_id??null}]}function HV(_){if(!_||typeof _!=="object")return!1;if(_.queued==="followup"||_.queued==="steer")return!0;let $=_.command;return Boolean($&&typeof $==="object"&&($.queued_followup||$.queued_steer))}function aJ(_,$=150){return Math.abs(_)<=$}function EV(_){let{timelineRef:$,viewStateRef:j,followupQueueRowIdsRef:G}=_,Z=f(()=>{let L=$.current;if(!L)return;if(aJ(L.scrollTop))L.scrollTop=0},[$]),X=f((L)=>{let K=$.current;if(!K||typeof L!=="function"){L?.();return}let{currentHashtag:Q,searchQuery:V,searchOpen:F}=j.current||{},B=!((V||F)&&!Q),U=B?K.scrollHeight-K.scrollTop:K.scrollTop;L(),requestAnimationFrame(()=>{let D=$.current;if(!D)return;if(B){let E=Math.max(D.scrollHeight-U,0);D.scrollTop=E}else{let E=Math.max(D.scrollHeight-D.clientHeight,0),H=Math.min(U,E);D.scrollTop=H}})},[$,j]),Y=f((L)=>{let K=$.current;if(!K||typeof L!=="function"){L?.();return}let Q=K.scrollTop;L(),requestAnimationFrame(()=>{let V=$.current;if(!V)return;let F=Math.max(V.scrollHeight-V.clientHeight,0);V.scrollTop=Math.min(Q,F)})},[$]),q=f((L)=>{return FV(L,G.current)},[G]);return{scrollToBottom:Z,preserveTimelineScroll:X,preserveTimelineScrollTop:Y,filterQueuedPosts:q}}function tJ(_){let{rawPosts:$,filterQueuedPosts:j}=_;return j($)}function eJ(_){_.scrollToBottomRef.current=_.scrollToBottom}function DV(_){let{timelineRef:$,viewStateRef:j,followupQueueRowIdsRef:G,currentChatJid:Z,currentHashtag:X,searchQuery:Y,followupQueueItems:q}=_,L=u(null),{scrollToBottom:K,preserveTimelineScroll:Q,preserveTimelineScrollTop:V,filterQueuedPosts:F}=EV({timelineRef:$,viewStateRef:j,followupQueueRowIdsRef:G});eJ({scrollToBottomRef:L,scrollToBottom:K});let{posts:B,setPosts:U,hasMore:D,setHasMore:E,hasMoreRef:H,loadPosts:k,refreshTimeline:z,loadMore:O,loadMoreRef:y}=QV({preserveTimelineScroll:Q,preserveTimelineScrollTop:V,chatJid:Z,currentHashtag:X,searchQuery:Y}),I=X0(()=>tJ({rawPosts:B,followupQueueItems:q,filterQueuedPosts:F}),[F,q,B]);return{scrollToBottomRef:L,scrollToBottom:K,preserveTimelineScroll:Q,preserveTimelineScrollTop:V,rawPosts:B,setPosts:U,hasMore:D,setHasMore:E,hasMoreRef:H,loadPosts:k,refreshTimeline:z,loadMore:O,loadMoreRef:y,posts:I}}x0();function _A(_){let{currentHashtag:$,searchQuery:j,searchOpen:G}=_;return!$&&!j&&!G}function WV(_){let{currentHashtag:$,searchQuery:j,searchOpen:G,searchScope:Z,currentChatJid:X,currentRootChatJid:Y,posts:q,loadPosts:L,searchPosts:K,setCurrentHashtag:Q,setSearchQuery:V,setSearchOpen:F,setSearchScope:B,setPosts:U,setHasMore:D,preserveTimelineScrollTop:E,setRemovingPostIds:H,deletePost:k,hasMoreRef:z,loadMoreRef:O}=_,y=f(async(P)=>{await PK({hashtag:P,setCurrentHashtag:Q,setPosts:U,loadPosts:L})},[L,Q,U]),I=f(async()=>{await RK({setCurrentHashtag:Q,setSearchQuery:V,setPosts:U,loadPosts:L})},[L,Q,U,V]),A=f(async(P,R=Z,v)=>{await i9({query:P,scope:R,currentChatJid:X,currentRootChatJid:Y,searchPosts:K,setSearchScope:B,setSearchQuery:V,setCurrentHashtag:Q,setPosts:U,setHasMore:D,filters:v})},[X,Y,K,Z,Q,D,U,V,B]),J=f((P)=>{if(B(P),j&&j.trim())i9({query:j,scope:P,currentChatJid:X,currentRootChatJid:Y,searchPosts:K,setSearchScope:B,setSearchQuery:V,setCurrentHashtag:Q,setPosts:U,setHasMore:D})},[X,Y,K,j,Q,D,U,V,B]),M=f(()=>{F(!0),V(null),Q(null),B("current"),U([])},[Q,U,F,V,B]),W=f(()=>{F(!1),V(null),L()},[L,F,V]),w=X0(()=>_A({currentHashtag:$,searchQuery:j,searchOpen:G}),[$,G,j]),x=f(async(P)=>{await SK({post:P,posts:q,currentChatJid:X,deletePost:k,preserveTimelineScrollTop:E,setPosts:U,setRemovingPostIds:H,hasMoreRef:z,loadMoreRef:O})},[X,k,z,O,q,E,U,H]);return{handleHashtagClick:y,handleBackToTimeline:I,handleSearch:A,handleSearchScopeChange:J,enterSearchMode:M,exitSearchMode:W,isMainTimelineView:w,handleDeletePost:x}}x0();function jj(_){if(!Array.isArray(_?.content))return null;return _.content.find((j)=>j?.type==="status_panel"&&j?.panel)?.panel||null}function OV(_,$){let j=new Map(_),G=jj($);if(typeof $?.key==="string"&&$.key&&G)j.set($.key,G);else j.delete("autoresearch");return j}function zV(_,$){let j=typeof $?.key==="string"?$.key:"";if(!j)return _;let G=new Map(_),Z=jj($);if($?.options?.remove||!Z)G.delete(j);else G.set(j,Z);return G}function JV(_){if(_?.options?.remove)return!0;return jj(_)?.state!=="running"}function Gj(_,$){return`${_}:${$}`}function AV(_,$,j){let G=Gj($,j);if(_.has(G))return _;let Z=new Set(_);return Z.add(G),Z}function kV(_,$){if(!_.has($))return _;let j=new Set(_);return j.delete($),j}function D8(_,$){if(_.size===0)return _;let j=`${$}:`,G=new Set(Array.from(_).filter((Z)=>!String(Z).startsWith(j)));return G.size===_.size?_:G}async function MV(_){let $=typeof _.action?.action_type==="string"?_.action.action_type:"",j=typeof _.action?.key==="string"?_.action.key:"";if($==="autoresearch.stop")return await _.stopAutoresearch(_.currentChatJid,{generateReport:!0}),{refreshAutoresearchStatus:!0};if($==="autoresearch.dismiss")return await _.dismissAutoresearch(_.currentChatJid),{refreshAutoresearchStatus:!0};if($==="autoresearch.copy_tmux"){let G=typeof _.panel?.tmux_command==="string"?_.panel.tmux_command.trim():"";if(!G)throw Error("No tmux command available.");return await _.writeClipboard(G),{refreshAutoresearchStatus:!1,toast:{title:"Copied",detail:"tmux command copied to clipboard.",kind:"success"}}}throw Error(`Unsupported panel action: ${$||j}`)}var wV="piclaw:ctx:";function i$(_){if(!_||typeof _!=="object")return null;let $=_,j=$.tokens==null?null:Number($.tokens),G=$.contextWindow==null?null:Number($.contextWindow),Z=$.percent==null?null:Number($.percent);return{tokens:Number.isFinite(j)?j:null,contextWindow:Number.isFinite(G)?G:null,percent:Number.isFinite(Z)?Z:null}}function B5(_,$){let j=i$(_),G=i$($);if(!j&&!G)return!0;if(!j||!G)return!1;return j.tokens===G.tokens&&j.contextWindow===G.contextWindow&&j.percent===G.percent}function N5(_,$){if(!_||!$||typeof $!=="object")return;if($.percent==null)return;try{Q_(wV+_,JSON.stringify($))}catch(G){console.debug("[app-status-refresh] Ignoring best-effort context usage persistence failure.",G,{chatJid:_})}}function TV(_){if(!_)return null;return Y2(wV+_)}async function yV(_){let{currentChatJid:$,queueRefreshGenRef:j,activeChatJidRef:G,dismissedQueueRowIdsRef:Z,getAgentQueueState:X,setFollowupQueueItems:Y,clearQueuedSteerStateIfStale:q}=_,L=++j.current,K=$;try{let Q=await X(K);if(L!==j.current)return;if(G.current!==K)return;let V=Z.current,F=Array.isArray(Q?.items)?Q.items:[],B=BV(F,V);if(B.length){Y((U)=>NV(U,B)?U:B);return}if(F.length>0)return;V.clear(),q(0),Y((U)=>U.length===0?U:[])}catch{if(L!==j.current)return;if(G.current!==K)return;Y((Q)=>Q.length===0?Q:[])}}async function xV(_){let{currentChatJid:$,activeChatJidRef:j,getAgentContext:G,setContextUsage:Z}=_,X=$;try{let Y=i$(await G(X));if(j.current!==X)return;if(Y&&Y.percent!=null)Z((q)=>B5(q,Y)?q:Y),N5(X,Y)}catch(Y){if(j.current!==X)return;console.warn("Failed to fetch agent context:",Y)}}async function IV(_){let{currentChatJid:$,activeChatJidRef:j,getAutoresearchStatus:G,setExtensionStatusPanels:Z,setPendingExtensionPanelActions:X}=_,Y=$;try{let q=await G(Y);if(j.current!==Y)return;Z((L)=>OV(L,q)),X((L)=>D8(L,"autoresearch"))}catch(q){if(j.current!==Y)return;console.warn("Failed to fetch autoresearch status:",q)}}function CV(_){let{refreshModelState:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:G,refreshQueueState:Z,refreshContextUsage:X,refreshAutoresearchStatus:Y}=_;$(),j(),G(),Z(),X(),Y()}function fV(_){let{viewStateRef:$,refreshTimeline:j,refreshModelAndQueueState:G}=_;if(n1($.current))j();G()}d5();var W8=new Map,O8=new Map,$A=250,PV=1500,RV=300000;function U5(){if(typeof performance<"u"&&typeof performance.now==="function")return performance.now();return Date.now()}function jA(_,$){return`${_}:${$}`}function GA(_){for(let[$,j]of O8.entries())if(_-j>RV)O8.delete($)}function ZA(_){for(let[$,j]of W8.entries()){if(j.inFlight)continue;if(!Number.isFinite(j.lastCompletedAt)||_-j.lastCompletedAt>RV)W8.delete($)}}function SV(_=U5()){GA(_),ZA(_)}function gV(_){let{chatJid:$,nowMs:j=U5()}=_;if(!$)return;O8.set($,j),SV(j)}function D6(_,$=PV,j=U5()){if(!_)return!1;let G=O8.get(_);if(!Number.isFinite(G))return!1;return j-Number(G)<=$}async function D$(_){let{kind:$,chatJid:j,run:G,cooldownMs:Z=$A,activationWindowMs:X=PV,nowMs:Y=U5()}=_;SV(Y);let q=jA($,j),L=W8.get(q)||{inFlight:null,lastCompletedAt:Number.NaN,lastValue:null};if(W8.set(q,L),L.inFlight)return await L.inFlight;if(Boolean(N2("thread-switch",j)||D6(j,X,Y))&&Number.isFinite(L.lastCompletedAt)&&Y-L.lastCompletedAt<=Z)return L.lastValue;let Q=Promise.resolve().then(G).then((V)=>{return L.lastCompletedAt=U5(),L.lastValue=V??null,L.inFlight=null,V}).catch((V)=>{throw L.lastCompletedAt=U5(),L.inFlight=null,V});return L.inFlight=Q,await Q}function uV(_){let{serverVersion:$,currentAppAssetVersion:j,staleUiVersionRef:G,staleUiReloadScheduledRef:Z,tabStoreHasUnsaved:X,isAgentRunningRef:Y,pendingRequestRef:q,showIntentToast:L}=_,K=typeof $==="string"&&$.trim()?$.trim():null;if(!K||!j||K===j)return!1;if(G.current===K)return!0;G.current=K;let Q=typeof document<"u"?String(document.querySelector(".compose-box textarea")?.value||"").trim():"";if(!X()&&!Q&&!Y.current&&!q.current&&!Z.current);return L("New UI available","Reload this page to apply the latest interface update.","warning",8000),!0}function Zj(_){let{currentHashtag:$,searchQuery:j,searchOpen:G}=_||{};return!$&&!j&&!G}function bV(_){let{currentChatJid:$,status:j,setConnectionStatus:G,setAgentStatus:Z,setAgentDraft:X,setAgentPlan:Y,setAgentThought:q,setPendingRequest:L,pendingRequestRef:K,clearAgentRunState:Q,hasConnectedOnceRef:V,viewStateRef:F,refreshTimeline:B,refreshAgentStatus:U,refreshQueueState:D,refreshContextUsage:E}=_;if(G(j),j!=="connected"){Z(null),X({text:"",totalLines:0}),Y(""),q({text:"",totalLines:0}),L(null),K.current=null,Q();return}if(!V.current){if(V.current=!0,Z(null),X({text:"",totalLines:0}),Y(""),q({text:"",totalLines:0}),L(null),K.current=null,Q(),D6($))return;if(Zj(F.current))B();U(),D(),E();return}if(Zj(F.current))B();U(),D(),E()}function vV(_){let{viewStateRef:$,isAgentActive:j,refreshTimeline:G,refreshQueueState:Z,refreshAgentStatus:X,refreshContextUsage:Y,refreshAutoresearchStatus:q}=_,L=Zj($.current);if(j){if(L)G();Z(),X(),Y(),q();return}if(L)G();X(),Y(),q()}function XA(_){return Math.min(1000,Math.max(100,Math.floor(_/2)))}function mV(_){let{currentChatJid:$,activeChatJidRef:j,queueRefreshGenRef:G,dismissedQueueRowIdsRef:Z,getAgentQueueState:X,setFollowupQueueItems:Y,clearQueuedSteerStateIfStale:q,getAgentContext:L,setContextUsage:K,getAutoresearchStatus:Q,setExtensionStatusPanels:V,setPendingExtensionPanelActions:F,getAgentStatus:B,wasAgentActiveRef:U,viewStateRef:D,refreshTimeline:E,clearAgentRunState:H,agentStatusRef:k,pendingRequestRef:z,thoughtBufferRef:O,draftBufferRef:y,setAgentStatus:I,setAgentDraft:A,setAgentPlan:J,setAgentThought:M,setPendingRequest:W,setActiveTurn:w,noteAgentActivity:x,clearLastActivityFlag:P,isAgentRunningRef:R,currentTurnIdRef:v,silentRecoveryRef:c,silenceRefreshMs:h,lastAgentEventRef:r,lastSilenceNoticeRef:b,silenceWarningMs:a,silenceFinalizeMs:t,isCompactionStatus:q0,serverVersionContext:Z0,setConnectionStatus:D0,setPendingRequestForConnection:Q0,hasConnectedOnceRef:L0}=_,N0=f(()=>{return D$({kind:"queue-state",chatJid:$,run:async()=>{return await yV({currentChatJid:$,queueRefreshGenRef:G,activeChatJidRef:j,dismissedQueueRowIdsRef:Z,getAgentQueueState:X,setFollowupQueueItems:Y,clearQueuedSteerStateIfStale:q}),null}})},[j,q,$,Z,X,G,Y]),H0=f(async()=>{await D$({kind:"context-usage",chatJid:$,run:async()=>{return await xV({currentChatJid:$,activeChatJidRef:j,getAgentContext:L,setContextUsage:K}),null}})},[j,$,L,K]),y0=f(async()=>{await D$({kind:"autoresearch-status",chatJid:$,run:async()=>{return await IV({currentChatJid:$,activeChatJidRef:j,getAutoresearchStatus:Q,setExtensionStatusPanels:V,setPendingExtensionPanelActions:F}),null}})},[j,$,Q,V,F]),o=f(async()=>{return await D$({kind:"agent-status",chatJid:$,run:async()=>{return await tK({currentChatJid:$,getAgentStatus:B,activeChatJidRef:j,wasAgentActiveRef:U,viewStateRef:D,refreshTimeline:E,clearAgentRunState:H,agentStatusRef:k,pendingRequestRef:z,thoughtBufferRef:O,draftBufferRef:y,setAgentStatus:I,setAgentDraft:A,setAgentPlan:J,setAgentThought:M,setPendingRequest:W,setActiveTurn:w,noteAgentActivity:x,clearLastActivityFlag:P})}})},[j,k,H,P,$,y,B,x,z,E,w,A,J,I,M,W,O,D,U]),j0=f(async()=>{return await eK({isAgentRunningRef:R,pendingRequestRef:z,currentTurnIdRef:v,silentRecoveryRef:c,silenceRefreshMs:h,viewStateRef:D,refreshTimeline:E,refreshQueueState:N0,refreshAgentStatus:o})},[v,R,z,o,N0,E,h,c,D]);g(()=>{let m0=XA(a),l0=setInterval(()=>{_V({isAgentRunningRef:R,pendingRequestRef:z,lastAgentEventRef:r,lastSilenceNoticeRef:b,agentStatusRef:k,silenceWarningMs:a,silenceFinalizeMs:t,silenceRefreshMs:h,isCompactionStatus:q0,setAgentStatus:I,reconcileSilentTurn:j0})},m0);return()=>clearInterval(l0)},[k,R,q0,r,b,z,j0,I,t,h,a]);let O0=f((m0)=>{return uV({serverVersion:m0,...Z0})},[Z0]),P0=f((m0)=>{bV({currentChatJid:$,status:m0,setConnectionStatus:D0,setAgentStatus:I,setAgentDraft:A,setAgentPlan:J,setAgentThought:M,setPendingRequest:Q0,pendingRequestRef:z,clearAgentRunState:H,hasConnectedOnceRef:L0,viewStateRef:D,refreshTimeline:E,refreshAgentStatus:o,refreshQueueState:N0,refreshContextUsage:H0})},[H,$,L0,z,o,H0,N0,E,A,J,I,M,D0,Q0,D]);return{refreshQueueState:N0,refreshContextUsage:H0,refreshAutoresearchStatus:y0,refreshAgentStatus:o,handleUiVersionDrift:O0,handleConnectionStatusChange:P0}}x0();function W6(_){return typeof _==="string"}function O6(_){return typeof _==="string"&&_.trim().length>0}function z8(_){if(!O6(_))return 0;let $=Date.parse(_);return Number.isFinite($)?$:0}function Xj(_){if(!Array.isArray(_))return[];return _.filter(($)=>O6($?.chat_jid)&&O6($?.agent_name))}function cV(_){if(!Array.isArray(_))return[];return _.filter(($)=>W6($?.chat_jid)&&W6($?.agent_name))}function lV(_,$,j){if(!Array.isArray($)||$.length===0)return Array.isArray(_)?_:[];let G=new Map;if(Array.isArray(_)){for(let Y of _)if(W6(Y?.chat_jid))G.set(Y.chat_jid,Y)}let Z=$.map((Y)=>{if(!W6(Y?.chat_jid))return Y;let q=G.get(Y.chat_jid);return q?{...Y,...q,is_active:q.is_active??Y.is_active}:Y}),X=W6(j)?j:"";return Z.sort((Y,q)=>{if(Y.chat_jid===X&&q.chat_jid!==X)return-1;if(q.chat_jid===X&&Y.chat_jid!==X)return 1;let L=Boolean(Y.archived_at),K=Boolean(q.archived_at);if(L!==K)return L?1:-1;if(Boolean(Y.is_active)!==Boolean(q.is_active))return Y.is_active?-1:1;let Q=z8(Y.updated_at)||z8(Y.created_at),V=z8(q.updated_at)||z8(q.created_at);if(Q!==V)return V-Q;let F=O6(Y.agent_name)?Y.agent_name.trim():"",B=O6(q.agent_name)?q.agent_name.trim():"",U=F.localeCompare(B,void 0,{sensitivity:"base"});if(U!==0)return U;return String(Y.chat_jid).localeCompare(String(q.chat_jid))}),Z}var YA={hasModel:!1,model:void 0,hasThinkingLevel:!1,thinkingLevel:null,thinkingLevelLabel:null,hasSupportsThinking:!1,supportsThinking:!1,hasProviderUsage:!1,providerUsage:null};function hV(_){if(!_||typeof _!=="object")return YA;let $=_.model??_.current;return{hasModel:$!==void 0,model:$,hasThinkingLevel:_.thinking_level!==void 0,thinkingLevel:_.thinking_level??null,thinkingLevelLabel:_.thinking_level_label??_.thinking_level??null,hasSupportsThinking:_.supports_thinking!==void 0,supportsThinking:Boolean(_.supports_thinking),hasProviderUsage:_.provider_usage!==void 0,providerUsage:_.provider_usage??null}}function pV(_){let j=(Array.isArray(_)?_:[]).find((G)=>G?.id==="default");return{name:j?.name,avatarUrl:j?.avatar_url}}function nV(_,$){if(!_||typeof _!=="object")return null;let j=_.agent_id;if(!j)return null;let G=String(j),Z=_.agent_name,X=_.agent_avatar;if(!Z&&X===void 0)return null;let Y=$||{id:G},q=Y.name||null,L=Y.avatar_url??Y.avatarUrl??Y.avatar??null,K=!1,Q=!1;if(Z&&Z!==Y.name)q=Z,K=!0;if(X!==void 0){let V=typeof X==="string"?X.trim():null,F=typeof L==="string"?L.trim():null,B=V||null;if(B!==(F||null))L=B,Q=!0}if(!K&&!Q)return null;return{agentId:G,nameChanged:K,avatarChanged:Q,resolvedName:q,resolvedAvatar:L}}function rV(_,$){let j=typeof $?.name==="string"&&$.name.trim()?$.name.trim():"You",G=typeof $?.avatar_url==="string"?$.avatar_url.trim():null,Z=typeof $?.avatar_background==="string"&&$.avatar_background.trim()?$.avatar_background.trim():null;if(_.name===j&&_.avatar_url===G&&_.avatar_background===Z)return _;return{name:j,avatar_url:G,avatar_background:Z}}function dV(_,$){if(!$||typeof $!=="object")return _;let j=$.user_name??$.userName,G=$.user_avatar??$.userAvatar,Z=$.user_avatar_background??$.userAvatarBackground;if(j===void 0&&G===void 0&&Z===void 0)return _;let X=typeof j==="string"&&j.trim()?j.trim():_.name||"You",Y=G===void 0?_.avatar_url:typeof G==="string"&&G.trim()?G.trim():null,q=Z===void 0?_.avatar_background:typeof Z==="string"&&Z.trim()?Z.trim():null;if(_.name===X&&_.avatar_url===Y&&_.avatar_background===q)return _;return{name:X,avatar_url:Y,avatar_background:q}}async function oV(_){let{getAgents:$,setAgents:j,setUserProfile:G,applyBranding:Z}=_;try{let X=await $();j(OX(X));let Y=X?.user||{};G((L)=>rV(L,Y));let q=pV(X?.agents);Z(q.name,q.avatarUrl)}catch(X){console.warn("Failed to load agents:",X)}}function sV(_){let{payload:$,agentsRef:j,setAgents:G,applyBranding:Z}=_,X=nV($,$?.agent_id?j.current?.[String($.agent_id)]||{id:String($.agent_id)}:null);if(!X)return;if(G((Y)=>{let L={...Y[X.agentId]||{id:X.agentId}};if(X.nameChanged)L.name=X.resolvedName;if(X.avatarChanged)L.avatar_url=X.resolvedAvatar;return{...Y,[X.agentId]:L}}),X.agentId==="default")Z(X.resolvedName,X.resolvedAvatar,X.avatarChanged?Date.now():null)}function aV(_){let{payload:$,setUserProfile:j}=_;j((G)=>dV(G,$))}function iV(_,$){if(Object.is(_,$))return!0;try{return JSON.stringify(_)===JSON.stringify($)}catch{return!1}}function tV(_){let{payload:$,setActiveModel:j,setActiveThinkingLevel:G,setSupportsThinking:Z,setActiveModelUsage:X,setAgentModelsPayload:Y,setHasLoadedAgentModels:q}=_;if($&&typeof $==="object")Y?.((K)=>iV(K,$)?K:$),q?.(!0);let L=hV($);if(L.hasModel)j((K)=>Object.is(K,L.model)?K:L.model);if(L.hasThinkingLevel){let K=L.thinkingLevelLabel??L.thinkingLevel;G((Q)=>Object.is(Q,K)?Q:K)}if(L.hasSupportsThinking)Z((K)=>K===L.supportsThinking?K:L.supportsThinking);if(L.hasProviderUsage)X((K)=>iV(K,L.providerUsage)?K:L.providerUsage)}async function eV(_){let{currentChatJid:$,getActiveChatAgents:j,getChatBranches:G,activeChatJidRef:Z,setActiveChatAgents:X}=_,Y=$;try{let[q,L]=await Promise.all([j().catch(()=>({chats:[]})),G(null,{includeArchived:!0}).catch(()=>({chats:[]}))]);if(Z.current!==Y)return[];let K=Xj(q?.chats),Q=Xj(L?.chats),V=lV(K,Q,Y);return X(V),V}catch{if(Z.current!==Y)return[];return X([]),[]}}async function _Q(_){let{currentRootChatJid:$,getChatBranches:j,setCurrentChatBranches:G}=_;try{let Z=await j($);G(cV(Z?.chats))}catch{G([])}}function $Q(_){let{response:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:G,refreshContextUsage:Z,refreshAutoresearchStatus:X,refreshQueueState:Y}=_;if(!$||typeof $!=="object")return;if(j(),G(),Z(),X(),HV($))Y()}function jQ(_){let{readStoredNumber:$,sidebarWidthRef:j,shellElement:G,minWidth:Z=160,maxWidth:X=600,fallbackWidth:Y=280}=_,q=$("sidebarWidth",null),L=Number.isFinite(q)?Math.min(Math.max(Number(q),Z),X):Y;if(j.current=L,G)G.style.setProperty("--sidebar-width",`${L}px`);return L}async function GQ(_){let{currentHashtag:$,searchQuery:j,searchScope:G,currentChatJid:Z,currentRootChatJid:X,loadPosts:Y,searchPosts:q,setPosts:L,setHasMore:K,scrollToBottom:Q,isCancelled:V,scheduleRaf:F=(O)=>{if(typeof requestAnimationFrame==="function"){requestAnimationFrame(O);return}setTimeout(O,0)},scheduleTimeout:B=(O,y)=>{setTimeout(O,y)},onTimelineLoadStart:U,onTimelineDataReady:D,onTimelineFirstPaint:E,onTimelineError:H}=_,k=(O)=>{if(V())return;F(()=>{if(V())return;F(()=>{if(V())return;E?.(O)})})},z=()=>{if(V())return;F(()=>{if(V())return;B(()=>{if(V())return;Q()},0)})};if($){U?.({mode:"hashtag",hashtag:$});try{if(await Y($),V())return;D?.({mode:"hashtag",hashtag:$}),k({mode:"hashtag"})}catch(O){if(V())return;throw H?.(O,{mode:"hashtag",hashtag:$}),O}return}if(j){U?.({mode:"search",searchQuery:j,searchScope:G});try{let O=await q(j,50,0,Z,G,X);if(V())return;L(Array.isArray(O?.results)?O.results:[]),K(!1),D?.({mode:"search",resultCount:Array.isArray(O?.results)?O.results.length:0}),k({mode:"search"})}catch(O){if(V())return;H?.(O,{mode:"search",searchQuery:j,searchScope:G}),console.error("Failed to search:",O),L([]),K(!1)}return}U?.({mode:"timeline"});try{if(await Y(),V())return;D?.({mode:"timeline"}),k({mode:"timeline"}),z()}catch(O){if(V())return;H?.(O,{mode:"timeline"}),console.error("Failed to load timeline:",O)}}d5();g_();function qA(_){let{refreshModelAndQueueState:$,refreshModelState:j,refreshActiveChatAgents:G,refreshCurrentChatBranches:Z,refreshQueueState:X,runImmediately:Y=!0,intervalMs:q=60000,scheduleInterval:L=(V,F)=>setInterval(V,F),clearScheduledInterval:K=(V)=>clearInterval(V)}=_;if(Y)$();let Q=L(()=>{j(),G(),Z(),X()},q);return()=>{K(Q)}}function LA(_){let{refreshModelState:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:G,refreshQueueState:Z,refreshContextUsage:X,refreshAutoresearchStatus:Y,prewarmLimit:q=5}=_;$(),j({prewarmRecent:!0,prewarmLimit:q}),G(),Z(),X(),Y()}function KA(_){let $=LV(_.chats,_.currentChatJid,_.prewarmLimit??5);if($.length===0)return;KV({chatJids:$,fetchTimeline:_.fetchTimeline??((j)=>g$(10,null,j))})}function ZQ(_){let{getAgents:$,setAgents:j,setUserProfile:G,applyBranding:Z,readStoredNumber:X,sidebarWidthRef:Y,appShellRef:q,currentChatJid:L,currentRootChatJid:K,getAgentModels:Q,getAgentContext:V,getActiveChatAgents:F,getChatBranches:B,activeChatJidRef:U,setActiveChatAgents:D,setCurrentChatBranches:E,setActiveModel:H,setActiveThinkingLevel:k,setSupportsThinking:z,setActiveModelUsage:O,setAgentModelsPayload:y,setHasLoadedAgentModels:I,agentsRef:A,refreshQueueState:J,refreshContextUsage:M,refreshAutoresearchStatus:W,setContextUsage:w,setExtensionWorkingState:x}=_,P=f(async()=>{await oV({getAgents:$,setAgents:j,setUserProfile:G,applyBranding:Z})},[Z,$,j,G]);g(()=>{P(),jQ({readStoredNumber:X,sidebarWidthRef:Y,shellElement:q.current,maxWidth:j6(Number.POSITIVE_INFINITY)})},[q,P,X,Y]);let R=f((Z0)=>{tV({payload:Z0,setActiveModel:H,setActiveThinkingLevel:k,setSupportsThinking:z,setActiveModelUsage:O,setAgentModelsPayload:y,setHasLoadedAgentModels:I})},[H,O,k,y,I,z]),v=f(()=>N2("thread-switch",L),[L]),c=f(()=>{return D$({kind:"model-state",chatJid:L,run:async()=>{let Z0=v();if(Z0)_1(Z0,"runtime-hydration-start",{phase:"model-state"});let D0=L;try{let[L0,N0]=await Promise.all([(async()=>{let y0=Z0||v();if(y0)_1(y0,"model-request-start",{chatJid:D0});let o=await Q(D0);if(y0)_1(y0,"model-request-ready",{chatJid:D0,hasCurrent:Boolean(o?.current),modelCount:Array.isArray(o?.models)?o.models.length:0});return o})(),V(D0).catch(()=>null)]);if(U.current&&U.current!==D0)return null;R(L0);let H0=i$(N0);if(H0&&H0.percent!=null)w((y0)=>B5(y0,H0)?y0:H0),N5(D0,H0)}catch{if(U.current&&U.current!==D0)return null;R(null)}let Q0=Z0||v();if(Q0)_1(Q0,"runtime-hydration-ready",{chatJid:L}),U2(Q0,["runtime-hydration-ready","timeline-first-paint"],"settled",{chatJid:L});return null}})},[U,R,L,V,Q,v,w]);g(()=>{gV({chatJid:L}),H(null),k(null),z(!1),O(null),I(!1),y(null),x({message:null,indicator:null,visible:!0});let Z0=TV(L);if(Z0)w(Z0);else w(null);c()},[L,c,H,O,k,y,w,x,I,z]);let h=f((Z0)=>{sV({payload:Z0,agentsRef:A,setAgents:j,applyBranding:Z})},[A,Z,j]),r=f((Z0)=>{aV({payload:Z0,setUserProfile:G})},[G]),b=f((Z0)=>{let D0=Boolean(Z0?.prewarmRecent),Q0=Number.isFinite(Z0?.prewarmLimit)?Number(Z0?.prewarmLimit):5;return D$({kind:"active-chat-agents",chatJid:L,run:async()=>{let L0=v(),N0=await eV({currentChatJid:L,getActiveChatAgents:async()=>{if(L0)_1(L0,"active-chat-list-request-start",{chatJid:L});let H0=await F(L);if(L0)_1(L0,"active-chat-list-request-ready",{rowCount:Array.isArray(H0?.chats)?H0.chats.length:0});return H0},getChatBranches:async(H0,y0)=>{if(L0)_1(L0,"branch-list-request-start",{rootChatJid:H0});let o=await B(H0,y0);if(L0)_1(L0,"branch-list-request-ready",{rootChatJid:H0,rowCount:Array.isArray(o?.chats)?o.chats.length:0});return o},activeChatJidRef:U,setActiveChatAgents:D});if(D0)KA({chats:N0,currentChatJid:L,prewarmLimit:Q0});return null}})},[U,L,F,B,v,D]),a=f(()=>{return D$({kind:"current-chat-branches",chatJid:L,run:async()=>{let Z0=v();return await _Q({currentRootChatJid:K,getChatBranches:async(D0,Q0)=>{if(Z0)_1(Z0,"root-branch-request-start",{rootChatJid:D0});let L0=await B(D0,Q0);if(Z0)_1(Z0,"root-branch-request-ready",{rootChatJid:D0,rowCount:Array.isArray(L0?.chats)?L0.chats.length:0});return L0},setCurrentChatBranches:E}),null}})},[L,K,B,v,E]),t=f(()=>{CV({refreshModelState:c,refreshActiveChatAgents:b,refreshCurrentChatBranches:a,refreshQueueState:J,refreshContextUsage:M,refreshAutoresearchStatus:W})},[b,W,M,a,c,J]),q0=f(()=>{LA({refreshModelState:c,refreshActiveChatAgents:b,refreshCurrentChatBranches:a,refreshQueueState:J,refreshContextUsage:M,refreshAutoresearchStatus:W,prewarmLimit:5})},[b,W,M,a,c,J]);return g(()=>qA({refreshModelAndQueueState:t,refreshModelState:c,refreshActiveChatAgents:b,refreshCurrentChatBranches:a,refreshQueueState:J,runImmediately:!1}),[b,a,t,c,J]),g(()=>{let Z0=setInterval(()=>{c()},5000);return()=>clearInterval(Z0)},[c]),{updateAgentProfile:h,updateUserProfile:r,applyModelState:R,refreshModelState:c,refreshActiveChatAgents:b,refreshCurrentChatBranches:a,refreshModelAndQueueState:t,refreshPostPaintThreadState:q0}}x0();function VA(_,$){let j=W1(_);return Boolean(_&&j===$)}function H5(_,$,j){if(!VA(_,$))return _;return{..._,runtimeState:{..._?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:{},...j}}}function XQ(_,$){return{..._,openedAt:$}}function YQ(_){let $=W1(_);return{nextWidget:null,dismissedSessionKey:_?.source==="live"&&$?$:null}}function qQ(_,$,j){let G=Nq({...$,...$&&$.status?{}:{status:j.fallbackStatus||"streaming"}});if(!G)return _;let Z=W1(G);if(Z&&j.dismissedSessionKeys?.has(Z))return _;let X=W1(_),Y=Boolean(Z&&X&&Z===X),q={...Y&&_?.artifact?_.artifact:{},...G.artifact||{}};return{...Y&&_?_:{},...G,artifact:q,source:"live",originChatJid:G.originChatJid||j.currentChatJid,openedAt:Y&&_?.openedAt?_.openedAt:j.updatedAt,liveUpdatedAt:j.updatedAt}}function LQ(_,$){if(!_||_?.source!=="live")return _||null;let j=W1($),G=W1(_);if(j&&G&&j!==G)return _;return null}function KQ(_,$,j){return H5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,lastSubmitAt:j.submittedAt,lastHostUpdate:{type:"submit_pending",submittedAt:j.submittedAt,preview:j.submissionText||null}})}function Yj(_,$,j){if(j.errorMessage)return H5(_,$,{lastHostUpdate:{type:"submit_failed",submittedAt:j.submittedAt,preview:j.submissionText,error:j.errorMessage}});return H5(_,$,{lastHostUpdate:{type:j.queued==="followup"?"submit_queued":"submit_sent",submittedAt:j.submittedAt,preview:j.submissionText,queued:j.queued||null}})}function VQ(_,$,j){return H5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,...j.kind==="widget.ready"?{readyAt:j.eventAt,lastHostUpdate:{type:"ready_ack",at:j.eventAt}}:{},...j.kind==="widget.request_refresh"?{lastRefreshRequestAt:j.eventAt,refreshCount:j.nextRefreshCount,lastHostUpdate:{type:j.shouldBuildDashboard?"refresh_building":"refresh_ack",at:j.eventAt,count:j.nextRefreshCount,echo:j.payload||null}}:{}})}function QQ(_,$,j){return H5(_,$,{dashboard:j.dashboard,lastHostUpdate:{type:"refresh_dashboard",at:j.at,count:j.count,echo:j.echo||null}})}function FQ(_,$,j){return H5(_,$,{lastHostUpdate:{type:"refresh_failed",at:j.at,count:j.count,error:j.errorMessage}})}d5();function QA(_){let{setExtensionStatusPanels:$,setPendingExtensionPanelActions:j,setExtensionWorkingState:G}=_;$(new Map),j(new Set),G({message:null,indicator:null,visible:!0})}function BQ(_){let{refreshAgentStatus:$,refreshPostPaintThreadState:j}=_;j(),$()}function NQ(_){let{currentChatJid:$,currentRootChatJid:j,currentHashtag:G,searchQuery:Z,searchScope:X,loadPosts:Y,searchPosts:q,setPosts:L,setHasMore:K,scrollToBottom:Q,setExtensionStatusPanels:V,setPendingExtensionPanelActions:F,setExtensionWorkingState:B,paneStateOwnerChatJidRef:U,chatPaneStateByChatRef:D,snapshotCurrentChatPaneState:E,restoreChatPaneState:H,dismissedQueueRowIdsRef:k,refreshAgentStatus:z,viewStateRef:O,refreshTimeline:y,refreshModelAndQueueState:I,refreshPostPaintThreadState:A,setFloatingWidget:J,dismissedLiveWidgetKeysRef:M}=_;g(()=>{QA({setExtensionStatusPanels:V,setPendingExtensionPanelActions:F,setExtensionWorkingState:B})},[$,V,F,B]),g(()=>{let x=!1,P=SZ("thread-switch",$,{currentRootChatJid:j,currentHashtag:G||null,searchQuery:Z||null,searchScope:X});return _1(P,"route-effect-start",{currentChatJid:$,currentRootChatJid:j}),GQ({currentHashtag:G,searchQuery:Z,searchScope:X,currentChatJid:$,currentRootChatJid:j,loadPosts:Y,searchPosts:q,setPosts:L,setHasMore:K,scrollToBottom:Q,isCancelled:()=>x,onTimelineLoadStart:(R)=>{_1(P,"timeline-load-start",R||null)},onTimelineDataReady:(R)=>{_1(P,"timeline-data-ready",R||null)},onTimelineFirstPaint:(R)=>{_1(P,"timeline-first-paint",R||null),U2(P,["runtime-hydration-ready","timeline-first-paint"],"settled",R||null),BQ({refreshAgentStatus:z,refreshPostPaintThreadState:A})},onTimelineError:(R,v)=>{gZ(P,R,"timeline-load-failed",v||null),BQ({refreshAgentStatus:z,refreshPostPaintThreadState:A})}}),()=>{x=!0,uZ(P,"route-effect-cancelled",{currentChatJid:$})}},[$,G,Z,X,j,Y,Q,q,K,L,z,A]),g(()=>{let x=U.current||$;D.current.set(x,E())},[D,$,U,E]),g(()=>{let x=U.current||$;if(x===$)return;D.current.set(x,E()),U.current=$,k.current.clear(),H(D.current.get($)||null)},[D,$,k,U,H,E]);let W=f(()=>{fV({viewStateRef:O,refreshTimeline:y,refreshModelAndQueueState:I})},[I,y,O]),w=f((x,P="streaming")=>{let R=new Date().toISOString();J((v)=>qQ(v,x,{fallbackStatus:P,currentChatJid:$,dismissedSessionKeys:M.current,updatedAt:R}))},[$,M,J]);return{refreshCurrentView:W,applyLiveGeneratedWidgetUpdate:w}}x0();x0();g_();function FA({sse:_,onWake:$},j={}){let G=j.window??(typeof window<"u"?window:null),Z=j.document??(typeof document<"u"?document:null);if(!G||!Z||!_)return()=>{};let X=()=>{if(typeof _.forceReconnect==="function"){_.forceReconnect();return}_.reconnectIfNeeded()},Y=typeof j.useFocusReconnect==="boolean"?j.useFocusReconnect:!Z6(),q=Z.visibilityState&&Z.visibilityState!=="visible",L=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return q=!0,!0;return!1},K=()=>{if(L())return;if(q)q=!1,X(),$?.()},Q=()=>{if(L())return;if(q){K();return}if(Y)_.reconnectIfNeeded()},V=()=>{K()},F=()=>{K()};return G.addEventListener("focus",Q),G.addEventListener("pageshow",V),Z.addEventListener("visibilitychange",F),()=>{G.removeEventListener("focus",Q),G.removeEventListener("pageshow",V),Z.removeEventListener("visibilitychange",F)}}function UQ({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:G,chatJid:Z}){let X=u(_);X.current=_;let Y=u($);Y.current=$;let q=u(j);q.current=j;let L=u(G);L.current=G,g(()=>{let K=new z2((V,F)=>X.current(V,F),(V)=>Y.current(V),{chatJid:Z});K.connect();let Q=FA({sse:K,onWake:()=>L.current?.()});return()=>{Q(),K.disconnect()}},[Z])}c5();x2();function M4(_,$){return Boolean(_)&&Boolean($)&&_!==$}function E5(_,$){return Boolean(_)&&!Boolean($)}function HQ(_,$){return _||$||null}function EQ(_){switch(_){case"generated_widget_open":return{kind:"update",fallbackStatus:"loading",shouldAdoptTurn:!0};case"generated_widget_delta":return{kind:"update",fallbackStatus:"streaming",shouldAdoptTurn:!0};case"generated_widget_final":return{kind:"update",fallbackStatus:"final",shouldAdoptTurn:!0};case"generated_widget_error":return{kind:"update",fallbackStatus:"error",shouldAdoptTurn:!1};case"generated_widget_close":return{kind:"close",fallbackStatus:null,shouldAdoptTurn:!1};default:return{kind:null,fallbackStatus:null,shouldAdoptTurn:!1}}}function D5(_,$){let j=$?.row_id??$?.id;if(j==null||typeof j!=="string"&&typeof j!=="number")return null;let G=d$(_,j);return{rowId:j,items:G.items,remainingQueueCount:G.remainingQueueCount}}function qj(_){if(_==="steer")return{title:"Failed to steer message",detail:"The queued message could not be sent as steering."};return{title:"Failed to remove message",detail:"The queued message could not be removed."}}function BA(_,$){return typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():$}function DQ(_,$,j){return{isStatusPanelWidgetEvent:_==="extension_ui_widget"&&$?.options?.surface==="status-panel",eventChatJid:BA($,j),panelKey:typeof $?.key==="string"?$.key:""}}function NA(_,$){if(_!=="extension_ui_working_indicator")return;if(!Array.isArray($?.frames))return{mode:"default",frames:[],intervalMs:null};let j=$.frames.filter((X)=>typeof X==="string"),G=$.interval_ms??$.intervalMs,Z=typeof G==="number"&&Number.isFinite(G)&&G>0?G:null;if(j.length===0)return{mode:"hidden",frames:[],intervalMs:Z};return{mode:"custom",frames:j,intervalMs:Z}}function WQ(_,$,j){if($==="extension_ui_working_visible"){let Z=j?.visible!==!1;if(Z===_.visible)return;return{..._,visible:Z}}if($==="extension_ui_working")return{message:typeof j?.message==="string"&&j.message.trim()?j.message.trim():null,indicator:_.indicator,visible:_.visible};let G=NA($,j);if(G===void 0)return;return{message:_.message,indicator:G,visible:_.visible}}function OQ(_,$){if(_==="extension_ui_notify"&&typeof $?.message==="string")return{title:$.message,detail:null,kind:typeof $?.type==="string"&&$.type.trim()?$.type:"info"};if(_==="extension_ui_error"){let j=$?.error;return{title:"Extension UI error",detail:typeof j==="string"?j:j&&typeof j==="object"&&typeof j.error==="string"?j.error:j?String(j):"Unknown extension error",kind:"error",durationMs:5000}}return null}var UA=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_working_indicator","extension_ui_working_visible","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function zQ(_){return UA.has(String(_||"").trim())}function HA(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function J8(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let G={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:G})),j.dispatchEvent(new CustomEvent(HA(_),{detail:G})),!0}function JQ(_,$,j){let G=$?.turn_id,Z=$?.chat_jid,X=typeof Z==="string"&&Z.trim()?Z.trim():null,Y=_==="connected"||_==="workspace_update";return{turnId:G,eventChatJid:X,isGlobalUiEvent:Y,isCurrentChatEvent:X?X===j:Y}}function AQ(_){return _==="agent_draft_delta"||_==="agent_thought_delta"||_==="agent_draft"||_==="agent_thought"}function kQ(_,$,j){let{currentChatJid:G,updateAgentProfile:Z,updateUserProfile:X,currentTurnIdRef:Y,activeChatJidRef:q,pendingRequestRef:L,draftBufferRef:K,thoughtBufferRef:Q,previewResyncPendingRef:V,previewResyncGenerationRef:F,steerQueuedTurnIdRef:B,thoughtExpandedRef:U,draftExpandedRef:D,draftThrottleRef:E,thoughtThrottleRef:H,viewStateRef:k,followupQueueItemsRef:z,dismissedQueueRowIdsRef:O,scrollToBottomRef:y,hasMoreRef:I,loadMoreRef:A,lastAgentResponseRef:J,wasAgentActiveRef:M,setActiveTurn:W,applyLiveGeneratedWidgetUpdate:w,setFloatingWidget:x,clearLastActivityFlag:P,handleUiVersionDrift:R,setAgentStatus:v,setAgentDraft:c,setAgentPlan:h,setAgentThought:r,setPendingRequest:b,clearAgentRunState:a,getAgentStatus:t,noteAgentActivity:q0,showLastActivity:Z0,refreshTimeline:D0,refreshModelAndQueueState:Q0,refreshActiveChatAgents:L0,refreshCurrentChatBranches:N0,notifyForFinalResponse:H0,setContextUsage:y0,refreshContextUsage:o,refreshQueueState:j0,setFollowupQueueItems:O0,clearQueuedSteerStateIfStale:P0,setSteerQueuedTurnId:m0,applyModelState:l0,getAgentContext:G_,setExtensionStatusPanels:h0,setPendingExtensionPanelActions:c0,setExtensionWorkingState:M0,refreshActiveEditorFromWorkspace:p0,showIntentToast:b0,removeStalledPost:d0,setPosts:H_,preserveTimelineScrollTop:E_,openEditor:K_}=j,{turnId:S0,isCurrentChatEvent:A0}=JQ(_,$,G);if(A0)Z($),X($);if(_==="ui_theme"){t4($);return}if(_==="ui_meters"){f7($);return}if(_==="ui_open_tab"){let F0=typeof $?.path==="string"?$.path.trim():"",w0=typeof $?.label==="string"?$.label.trim():void 0;if(F0==="piclaw://settings"){let C0=typeof $?.section==="string"?$.section.trim():"";window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:C0?{section:C0}:void 0}));return}if(F0&&typeof K_==="function")K_(F0,w0?{label:w0}:void 0);return}let r0=EQ(_);if(r0.kind==="update"){if(!A0)return;if(r0.shouldAdoptTurn&&E5(S0,Y.current))W(S0);w($,r0.fallbackStatus||"streaming");return}if(r0.kind==="close"){if(!A0)return;x((F0)=>LQ(F0,$));return}if(_?.startsWith("agent_")&&!AQ(_))P();if(_==="connected"){if(R($?.app_asset_version))return;if($?.ui_theme){let C0=$.ui_theme.theme||"default",U_=$.ui_theme.tint||null;t4({theme:C0,tint:U_})}if($?.ui_meters)f7($.ui_meters);let F0=F.current+1;if(F.current=F0,V.current=!0,K.current="",Q.current="",v(null),c({text:"",totalLines:0}),h(""),r({text:"",totalLines:0}),M0({message:null,indicator:null,visible:!0}),b(null),L.current=null,a(),D6(G)){if(F.current===F0)V.current=!1;return}let w0=G;if(t(w0).then((C0)=>{if(q.current!==w0)return;if(!C0||C0.status!=="active"||!C0.data)return;let U_=C0.data,A_=N8(U_);if(A_)W(A_);v(U_),q0({clearSilence:!0,atMs:b$(U_)??Date.now()}),Z0(U_);let V_=F5(C0.thought);if(V_)Q.current=V_.text,r(V_);let X_=F5(C0.draft);if(X_)K.current=X_.text,c(X_)}).catch((C0)=>{console.warn("Failed to fetch agent status:",C0)}).finally(()=>{if(F.current===F0)V.current=!1}),n1(k.current))D0();Q0();return}if(_==="agent_status"){if(!A0){if($?.type==="done"||$?.type==="error")L0(),N0();return}if($.type==="done"||$.type==="error"){if(M4(S0,Y.current))return;if($.type==="done"){if(H0(S0||Y.current),n1(k.current))D0();let F0=i$($.context_usage);if(F0&&F0.percent!=null)y0((w0)=>B5(w0,F0)?w0:F0),N5(G,F0)}if(o(),M.current=!1,a(),O.current.clear(),L0(),Q0(),c({text:"",totalLines:0}),h(""),r({text:"",totalLines:0}),M0({message:null,indicator:null,visible:!0}),b(null),$.type==="error")v({type:"error",title:$.title||"Agent error"}),setTimeout(()=>v(null),8000);else v(null)}else{if(S0)W(S0);if(q0({running:!0,clearSilence:!0,atMs:b$($)??Date.now()}),$.type==="thinking")K.current="",Q.current="",c({text:"",totalLines:0}),h(""),r({text:"",totalLines:0});v($)}return}if(_==="agent_steer_queued"){if(!A0)return;if(M4(S0,Y.current))return;let F0=HQ(S0,Y.current);if(!F0)return;B.current=F0,m0(F0);return}if(_==="agent_followup_queued"){if(!A0)return;O0((F0)=>UV(F0,$)),j0();return}if(_==="agent_followup_consumed"){if(!A0)return;let F0=D5(z.current,$);if(F0)P0(F0.remainingQueueCount),O0((w0)=>d$(w0,F0.rowId).items);if(j0(),n1(k.current))D0();return}if(_==="agent_followup_removed"){if(!A0)return;let F0=D5(z.current,$);if(F0)O.current.add(F0.rowId),P0(F0.remainingQueueCount),O0((w0)=>d$(w0,F0.rowId).items);j0();return}if(_==="agent_draft_delta"){if(!A0)return;if(V.current)return;if(M4(S0,Y.current))return;if(E5(S0,Y.current))W(S0);q0({running:!0,clearSilence:!0}),K.current=rK(K.current,$);let F0=Date.now();if(!E.current||F0-E.current>=100){E.current=F0;let w0=K.current;if(D.current)c((C0)=>t9(w0,C0));else c(U8(w0,null))}return}if(_==="agent_draft"){if(!A0)return;if(V.current)return;if(M4(S0,Y.current))return;if(E5(S0,Y.current))W(S0);q0({running:!0,clearSilence:!0});let F0=$.text||"",w0=$.mode||($.kind==="plan"?"replace":"append");if($.kind==="plan")h((C0)=>nK(C0,F0,w0));else if(!D.current)K.current=F0,c(U8(F0,$.total_lines));return}if(_==="agent_thought_delta"){if(!A0)return;if(V.current)return;if(M4(S0,Y.current))return;if(E5(S0,Y.current))W(S0);q0({running:!0,clearSilence:!0}),Q.current=dK(Q.current,$);let F0=Date.now();if(U.current&&(!H.current||F0-H.current>=100)){H.current=F0;let w0=Q.current;r((C0)=>t9(w0,C0))}return}if(_==="agent_thought"){if(!A0)return;if(V.current)return;if(M4(S0,Y.current))return;if(E5(S0,Y.current))W(S0);q0({running:!0,clearSilence:!0});let F0=$.text||"";if(!U.current)Q.current=F0,r(U8(F0,$.total_lines));return}if(_==="model_changed"){if(!A0)return;l0($);let F0=G;G_(F0).then((w0)=>{if(q.current!==F0)return;let C0=i$(w0);if(C0&&C0.percent!=null)y0((U_)=>B5(U_,C0)?U_:C0),N5(F0,C0)}).catch(()=>{if(q.current!==F0)return});return}let q_=DQ(_,$,G);if(q_.isStatusPanelWidgetEvent){if(q_.eventChatJid!==G)return;if(!q_.panelKey)return;if(h0((F0)=>zV(F0,$)),JV($))c0((F0)=>D8(F0,q_.panelKey));J8(_,$);return}if(_==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:$}));p0($?.updates);return}if(zQ(_)){if(_==="extension_ui_title"){L0(),N0(),J8(_,$);return}if(!A0)return;M0((w0)=>{return WQ(w0,_,$)??w0}),J8(_,$);let F0=OQ(_,$);if(F0)b0(F0.title,F0.detail,F0.kind,F0.durationMs);return}let O_=n1(k.current);if(_==="agent_response"){if(!A0)return;M0({message:null,indicator:null,visible:!0}),d0(),J.current={post:$,turnId:Y.current}}if(iK(_,A0,O_))H_((F0)=>oK(F0,$)),y.current?.();if(_==="interaction_updated"){if(!e9(A0,O_))return;H_((F0)=>sK(F0,$))}if(_==="interaction_deleted"){if(!e9(A0,O_))return;let F0=$?.ids||[];if(F0.length){if(E_(()=>{H_((w0)=>aK(w0,F0))}),I.current)A.current?.({preserveScroll:!0,preserveMode:"top"})}}}function EA(_){return _?15000:60000}function MQ(_){let{currentChatJid:$,posts:j,scrollToMessage:G,handleConnectionStatusChange:Z,loadPosts:X,refreshCurrentView:Y,updateAgentProfile:q,updateUserProfile:L,currentTurnIdRef:K,activeChatJidRef:Q,pendingRequestRef:V,draftBufferRef:F,thoughtBufferRef:B,previewResyncPendingRef:U,previewResyncGenerationRef:D,steerQueuedTurnIdRef:E,thoughtExpandedRef:H,draftExpandedRef:k,draftThrottleRef:z,thoughtThrottleRef:O,viewStateRef:y,followupQueueItemsRef:I,dismissedQueueRowIdsRef:A,scrollToBottomRef:J,hasMoreRef:M,loadMoreRef:W,lastAgentResponseRef:w,wasAgentActiveRef:x,setActiveTurn:P,applyLiveGeneratedWidgetUpdate:R,setFloatingWidget:v,clearLastActivityFlag:c,handleUiVersionDrift:h,setAgentStatus:r,setAgentDraft:b,setAgentPlan:a,setAgentThought:t,setPendingRequest:q0,clearAgentRunState:Z0,getAgentStatus:D0,noteAgentActivity:Q0,showLastActivity:L0,refreshTimeline:N0,refreshModelAndQueueState:H0,refreshActiveChatAgents:y0,refreshCurrentChatBranches:o,notifyForFinalResponse:j0,setContextUsage:O0,refreshContextUsage:P0,refreshQueueState:m0,setFollowupQueueItems:l0,clearQueuedSteerStateIfStale:G_,setSteerQueuedTurnId:h0,applyModelState:c0,getAgentContext:M0,setExtensionStatusPanels:p0,setPendingExtensionPanelActions:b0,setExtensionWorkingState:d0,refreshActiveEditorFromWorkspace:H_,showIntentToast:E_,removeStalledPost:K_,setPosts:S0,preserveTimelineScrollTop:A0,openEditor:r0,finalizeStalledResponse:q_,connectionStatus:O_,agentStatus:F0,refreshAgentStatus:w0,refreshAutoresearchStatus:C0}=_,U_=f((V_,X_)=>{kQ(V_,X_,{currentChatJid:$,updateAgentProfile:q,updateUserProfile:L,currentTurnIdRef:K,activeChatJidRef:Q,pendingRequestRef:V,draftBufferRef:F,thoughtBufferRef:B,previewResyncPendingRef:U,previewResyncGenerationRef:D,steerQueuedTurnIdRef:E,thoughtExpandedRef:H,draftExpandedRef:k,draftThrottleRef:z,thoughtThrottleRef:O,viewStateRef:y,followupQueueItemsRef:I,dismissedQueueRowIdsRef:A,scrollToBottomRef:J,hasMoreRef:M,loadMoreRef:W,lastAgentResponseRef:w,wasAgentActiveRef:x,setActiveTurn:P,applyLiveGeneratedWidgetUpdate:R,setFloatingWidget:v,clearLastActivityFlag:c,handleUiVersionDrift:h,setAgentStatus:r,setAgentDraft:b,setAgentPlan:a,setAgentThought:t,setPendingRequest:q0,clearAgentRunState:Z0,getAgentStatus:D0,noteAgentActivity:Q0,showLastActivity:L0,refreshTimeline:N0,refreshModelAndQueueState:H0,refreshActiveChatAgents:y0,refreshCurrentChatBranches:o,notifyForFinalResponse:j0,setContextUsage:O0,refreshContextUsage:P0,refreshQueueState:m0,setFollowupQueueItems:l0,clearQueuedSteerStateIfStale:G_,setSteerQueuedTurnId:h0,applyModelState:c0,getAgentContext:M0,setExtensionStatusPanels:p0,setPendingExtensionPanelActions:b0,setExtensionWorkingState:d0,refreshActiveEditorFromWorkspace:H_,showIntentToast:E_,removeStalledPost:K_,setPosts:S0,preserveTimelineScrollTop:A0,openEditor:r0})},[Q,R,c0,Z0,c,G_,$,K,A,F,k,z,I,M0,D0,h,M,w,W,Q0,j0,V,A0,D,U,y0,H_,P0,o,H0,m0,N0,K_,J,P,b,a,r,t,O0,p0,d0,v,l0,b0,q0,S0,h0,E_,L0,E,B,H,O,q,L,y,x,r0]);g(()=>{if(typeof window>"u")return;let V_=window.__PICLAW_TEST_API||{};return V_.emit=U_,V_.reset=()=>{K_(),Z0(),r(null),b({text:"",totalLines:0}),a(""),t({text:"",totalLines:0}),d0({message:null,indicator:null,visible:!0}),q0(null)},V_.finalize=()=>q_(),window.__PICLAW_TEST_API=V_,()=>{if(window.__PICLAW_TEST_API===V_)window.__PICLAW_TEST_API=void 0}},[Z0,q_,U_,K_,b,a,r,t,d0,q0]),UQ({handleSseEvent:U_,handleConnectionStatusChange:Z,loadPosts:X,onWake:Y,chatJid:$}),g(()=>{if(!j||j.length===0)return;let V_=location.hash;if(!V_||!V_.startsWith("#msg-"))return;let X_=V_.slice(5);G(X_),history.replaceState(null,"",location.pathname+location.search)},[j,G]);let A_=F0!==null;g(()=>{if(O_!=="connected")return;let V_=EA(A_),X_=setInterval(()=>{vV({viewStateRef:y,isAgentActive:A_,refreshTimeline:N0,refreshQueueState:m0,refreshAgentStatus:w0,refreshContextUsage:P0,refreshAutoresearchStatus:C0})},V_);return()=>clearInterval(X_)},[O_,A_,w0,C0,P0,m0,N0,y]),g(()=>{return F8(()=>{w0(),P0(),m0(),C0()})},[w0,C0,P0,m0])}function DA(_){return{currentChatJid:_.currentChatJid,activeChatJidRef:_.activeChatJidRef,queueRefreshGenRef:_.queueRefreshGenRef,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,getAgentQueueState:_.getAgentQueueState,setFollowupQueueItems:_.setFollowupQueueItems,clearQueuedSteerStateIfStale:_.clearQueuedSteerStateIfStale,getAgentContext:_.getAgentContext,setContextUsage:_.setContextUsage,getAutoresearchStatus:_.getAutoresearchStatus,setExtensionStatusPanels:_.setExtensionStatusPanels,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,getAgentStatus:_.getAgentStatus,wasAgentActiveRef:_.wasAgentActiveRef,viewStateRef:_.viewStateRef,refreshTimeline:_.refreshTimeline,clearAgentRunState:_.clearAgentRunState,agentStatusRef:_.agentStatusRef,pendingRequestRef:_.pendingRequestRef,thoughtBufferRef:_.thoughtBufferRef,draftBufferRef:_.draftBufferRef,setAgentStatus:_.setAgentStatus,setAgentDraft:_.setAgentDraft,setAgentPlan:_.setAgentPlan,setAgentThought:_.setAgentThought,setPendingRequest:_.setPendingRequest,setActiveTurn:_.setActiveTurn,noteAgentActivity:_.noteAgentActivity,clearLastActivityFlag:_.clearLastActivityFlag,isAgentRunningRef:_.isAgentRunningRef,currentTurnIdRef:_.currentTurnIdRef,silentRecoveryRef:_.silentRecoveryRef,silenceRefreshMs:_.silenceRefreshMs,lastAgentEventRef:_.lastAgentEventRef,lastSilenceNoticeRef:_.lastSilenceNoticeRef,silenceWarningMs:_.silenceWarningMs,silenceFinalizeMs:_.silenceFinalizeMs,isCompactionStatus:_.isCompactionStatus,serverVersionContext:_.serverVersionContext,setConnectionStatus:_.setConnectionStatus,setPendingRequestForConnection:_.setPendingRequest,hasConnectedOnceRef:_.hasConnectedOnceRef}}function WA(_){return{getAgents:_.getAgents,setAgents:_.setAgents,setUserProfile:_.setUserProfile,applyBranding:_.applyBranding,readStoredNumber:_.readStoredNumber,sidebarWidthRef:_.sidebarWidthRef,appShellRef:_.appShellRef,currentChatJid:_.currentChatJid,currentRootChatJid:_.currentRootChatJid,getAgentModels:_.getAgentModels,getAgentContext:_.getAgentContext,getActiveChatAgents:_.getActiveChatAgents,getChatBranches:_.getChatBranches,activeChatJidRef:_.activeChatJidRef,setActiveChatAgents:_.setActiveChatAgents,setCurrentChatBranches:_.setCurrentChatBranches,setActiveModel:_.setActiveModel,setActiveThinkingLevel:_.setActiveThinkingLevel,setSupportsThinking:_.setSupportsThinking,setActiveModelUsage:_.setActiveModelUsage,setAgentModelsPayload:_.setAgentModelsPayload,setHasLoadedAgentModels:_.setHasLoadedAgentModels,agentsRef:_.agentsRef,refreshQueueState:_.refreshQueueState,refreshContextUsage:_.refreshContextUsage,refreshAutoresearchStatus:_.refreshAutoresearchStatus,setContextUsage:_.setContextUsage,setExtensionWorkingState:_.setExtensionWorkingState}}function OA(_){return{currentChatJid:_.currentChatJid,currentRootChatJid:_.currentRootChatJid,currentHashtag:_.currentHashtag,searchQuery:_.searchQuery,searchScope:_.searchScope,loadPosts:_.loadPosts,searchPosts:_.searchPosts,setPosts:_.setPosts,setHasMore:_.setHasMore,scrollToBottom:_.scrollToBottom,setExtensionStatusPanels:_.setExtensionStatusPanels,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,setExtensionWorkingState:_.setExtensionWorkingState,paneStateOwnerChatJidRef:_.paneStateOwnerChatJidRef,chatPaneStateByChatRef:_.chatPaneStateByChatRef,snapshotCurrentChatPaneState:_.snapshotCurrentChatPaneState,restoreChatPaneState:_.restoreChatPaneState,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,refreshQueueState:_.refreshQueueState,refreshAgentStatus:_.refreshAgentStatus,refreshContextUsage:_.refreshContextUsage,viewStateRef:_.viewStateRef,refreshTimeline:_.refreshTimeline,refreshModelAndQueueState:_.refreshModelAndQueueState,refreshPostPaintThreadState:_.refreshPostPaintThreadState,setFloatingWidget:_.setFloatingWidget,dismissedLiveWidgetKeysRef:_.dismissedLiveWidgetKeysRef}}function zA(_){return{currentChatJid:_.currentChatJid,posts:_.posts,scrollToMessage:_.scrollToMessage,handleConnectionStatusChange:_.handleConnectionStatusChange,loadPosts:_.loadPosts,refreshCurrentView:_.refreshCurrentView,updateAgentProfile:_.updateAgentProfile,updateUserProfile:_.updateUserProfile,currentTurnIdRef:_.currentTurnIdRef,activeChatJidRef:_.activeChatJidRef,pendingRequestRef:_.pendingRequestRef,draftBufferRef:_.draftBufferRef,thoughtBufferRef:_.thoughtBufferRef,previewResyncPendingRef:_.previewResyncPendingRef,previewResyncGenerationRef:_.previewResyncGenerationRef,steerQueuedTurnIdRef:_.steerQueuedTurnIdRef,thoughtExpandedRef:_.thoughtExpandedRef,draftExpandedRef:_.draftExpandedRef,draftThrottleRef:_.draftThrottleRef,thoughtThrottleRef:_.thoughtThrottleRef,viewStateRef:_.viewStateRef,followupQueueItemsRef:_.followupQueueItemsRef,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,scrollToBottomRef:_.scrollToBottomRef,hasMoreRef:_.hasMoreRef,loadMoreRef:_.loadMoreRef,lastAgentResponseRef:_.lastAgentResponseRef,wasAgentActiveRef:_.wasAgentActiveRef,setActiveTurn:_.setActiveTurn,applyLiveGeneratedWidgetUpdate:_.applyLiveGeneratedWidgetUpdate,setFloatingWidget:_.setFloatingWidget,clearLastActivityFlag:_.clearLastActivityFlag,handleUiVersionDrift:_.handleUiVersionDrift,setAgentStatus:_.setAgentStatus,setAgentDraft:_.setAgentDraft,setAgentPlan:_.setAgentPlan,setAgentThought:_.setAgentThought,setPendingRequest:_.setPendingRequest,clearAgentRunState:_.clearAgentRunState,getAgentStatus:_.getAgentStatus,noteAgentActivity:_.noteAgentActivity,showLastActivity:_.showLastActivity,refreshTimeline:_.refreshTimeline,refreshModelAndQueueState:_.refreshModelAndQueueState,refreshActiveChatAgents:_.refreshActiveChatAgents,refreshCurrentChatBranches:_.refreshCurrentChatBranches,notifyForFinalResponse:_.notifyForFinalResponse,setContextUsage:_.setContextUsage,refreshContextUsage:_.refreshContextUsage,refreshQueueState:_.refreshQueueState,setFollowupQueueItems:_.setFollowupQueueItems,clearQueuedSteerStateIfStale:_.clearQueuedSteerStateIfStale,setSteerQueuedTurnId:_.setSteerQueuedTurnId,applyModelState:_.applyModelState,getAgentContext:_.getAgentContext,setExtensionStatusPanels:_.setExtensionStatusPanels,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,setExtensionWorkingState:_.setExtensionWorkingState,refreshActiveEditorFromWorkspace:_.refreshActiveEditorFromWorkspace,showIntentToast:_.showIntentToast,removeStalledPost:_.removeStalledPost,setPosts:_.setPosts,preserveTimelineScrollTop:_.preserveTimelineScrollTop,finalizeStalledResponse:_.finalizeStalledResponse,connectionStatus:_.connectionStatus,agentStatus:_.agentStatus,refreshAgentStatus:_.refreshAgentStatus,refreshAutoresearchStatus:_.refreshAutoresearchStatus}}function wQ(_){let $=mV(DA(_)),j=ZQ(WA({..._,refreshQueueState:$.refreshQueueState,refreshContextUsage:$.refreshContextUsage,refreshAutoresearchStatus:$.refreshAutoresearchStatus})),G=NQ(OA({..._,refreshQueueState:$.refreshQueueState,refreshAgentStatus:$.refreshAgentStatus,refreshContextUsage:$.refreshContextUsage,refreshModelAndQueueState:j.refreshModelAndQueueState,refreshPostPaintThreadState:j.refreshPostPaintThreadState}));return MQ(zA({..._,handleConnectionStatusChange:$.handleConnectionStatusChange,handleUiVersionDrift:$.handleUiVersionDrift,refreshCurrentView:G.refreshCurrentView,updateAgentProfile:j.updateAgentProfile,updateUserProfile:j.updateUserProfile,applyLiveGeneratedWidgetUpdate:G.applyLiveGeneratedWidgetUpdate,refreshModelAndQueueState:j.refreshModelAndQueueState,refreshActiveChatAgents:j.refreshActiveChatAgents,refreshCurrentChatBranches:j.refreshCurrentChatBranches,refreshContextUsage:$.refreshContextUsage,refreshQueueState:$.refreshQueueState,applyModelState:j.applyModelState,refreshAgentStatus:$.refreshAgentStatus,refreshAutoresearchStatus:$.refreshAutoresearchStatus})),{agentStatusLifecycle:$,chatRefreshLifecycle:j,viewRefreshLifecycle:G}}x0();var TQ="piclaw:pane-host-transfer:",JA=300000;function yQ(_){try{return _?.localStorage??null}catch{return null}}function xQ(_){return typeof _==="string"?_.trim():""}function IQ(_){if(!_||typeof _!=="object"||Array.isArray(_))return null;return _}function AA(_=Date.now()){return`pane-transfer-${_.toString(36)}-${Math.random().toString(36).slice(2,10)}`}function kA(_,$){try{return _?.removeItem($),!0}catch(j){return!1}}function MA(_,$=globalThis,j=Date.now()){let G=yQ($),Z=xQ(_?.path),X=IQ(_?.payload);if(!G||!Z||!X)return null;let Y=AA(j);try{return G.setItem(`${TQ}${Y}`,JSON.stringify({path:Z,payload:X,capturedAt:j})),Y}catch{return null}}function Lj(_,$=globalThis,j=Date.now()){let G=typeof _==="string"?_.trim():"",Z=yQ($);if(!G||!Z)return null;let X=`${TQ}${G}`,Y="";try{Y=Z.getItem(X)||""}catch{return null}if(!Y)return null;kA(Z,X);try{let q=JSON.parse(Y),L=typeof q?.capturedAt==="number"&&Number.isFinite(q.capturedAt)?q.capturedAt:j;if(L+JA<j)return null;let K=xQ(q?.path),Q=IQ(q?.payload);if(!K||!Q)return null;return{path:K,payload:Q,capturedAt:L}}catch{return null}}function A8(_,$=globalThis,j=Date.now()){let G=MA(_,$,j);return G?{pane_transfer:G}:null}function CQ(_=globalThis,$=Date.now()){let j=c4("pane_transfer",_);return Lj(j,_,$)}function w4(_){return typeof _==="string"?_.trim():""}function wA(_){return Boolean(_)&&typeof _.get==="function"&&typeof _.set==="function"&&typeof _.delete==="function"&&typeof _.entries==="function"}function Kj(_){if(!_)return null;let $=_.__piclawPaneLiveTransferRegistry__;if(wA($))return $;let j=new Map;return _.__piclawPaneLiveTransferRegistry__=j,j}function TA(_){try{return _?.(),!0}catch($){return!1}}function W5(_,$=typeof window<"u"?window:null){let j=Kj($),G=w4(_?.panePath),Z=w4(_?.paneInstanceId),X=w4(_?.paneWindowId);if(!j||!G||!Z||!X||typeof _?.instance?.moveHost!=="function")return!1;return j.set(X,{..._,panePath:G,paneInstanceId:Z,paneWindowId:X,registeredAt:typeof _?.registeredAt==="number"?_.registeredAt:Date.now()}),!0}function fQ(_,$=typeof window<"u"?window:null){let j=Kj($),G=w4(_);if(!j||!G)return;for(let[Z,X]of j.entries())if(X?.panePath===G)j.delete(Z)}async function PQ(_,$,j,G){let Z=Kj(_),X=w4($?.panePath),Y=w4($?.paneInstanceId),q=w4($?.paneWindowId);if(!Z||!X||!Y||!q)return null;let L=Z.get(q)||null;if(!L)return null;if(L.panePath!==X||L.paneInstanceId!==Y)return null;if(typeof L.instance?.moveHost!=="function")return null;if(!await L.instance.moveHost(j,G))return null;return Z.delete(q),TA(L.releaseSourceHost),L.instance}C2();function z6(_){if(!_||typeof _!=="object")return!1;let $=_;if(typeof $.closest==="function"&&$.closest('input, textarea, select, [contenteditable="true"], .compose-box, .compose-model-popup, .compose-session-popup'))return!0;return Boolean($.isContentEditable)}function RQ(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let G=_?.openTab,Z=_?.editSource,X=_?.popOutPane,Y=(Q)=>{let V=Q?.detail?.path,F=typeof Q?.detail?.label==="string"&&Q.detail.label.trim()?Q.detail.label.trim():void 0;if(V)G?.(V,F)},q=(Q)=>{let V=Q?.detail?.path,F=typeof Q?.detail?.label==="string"&&Q.detail.label.trim()?Q.detail.label.trim():void 0;if(V)Z?.(V,F)},L=(Q)=>{let V=Q?.detail?.path,F=typeof Q?.detail?.label==="string"&&Q.detail.label.trim()?Q.detail.label.trim():void 0;if(V)X?.(V,F)},K=["pane:open-tab","office-viewer:open-tab","csv-viewer:open-tab","pdf-viewer:open-tab","image-viewer:open-tab","video-viewer:open-tab","html-viewer:open-tab","mindmap:open-tab","vnc:open-tab"];return K.forEach((Q)=>j.addEventListener(Q,Y)),j.addEventListener("html-viewer:edit-source",q),j.addEventListener("pane:popout",L),()=>{K.forEach((Q)=>j.removeEventListener(Q,Y)),j.removeEventListener("html-viewer:edit-source",q),j.removeEventListener("pane:popout",L)}}function SQ(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let G=(Z)=>{if(z6(Z?.target))return;if(!E$(Z,"toggleDock"))return;Z.preventDefault?.(),_?.()};return j.addEventListener("keydown",G),()=>j.removeEventListener("keydown",G)}function gQ(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let G=_?.toggleZenMode,Z=_?.exitZenMode,X=typeof _?.isZenModeActive==="function"?_.isZenModeActive:()=>Boolean(_?.zenMode),Y=(q)=>{if(z6(q?.target))return;if(E$(q,"toggleZenMode")){q.preventDefault?.(),G?.();return}if(q?.key==="Escape"&&X())q.preventDefault?.(),Z?.()};return j.addEventListener("keydown",Y),()=>j.removeEventListener("keydown",Y)}function uQ(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let G=(Z)=>{if(z6(Z?.target))return;if(E$(Z,"previousChat")){Z.preventDefault?.(),_?.previousChat?.();return}if(E$(Z,"nextChat"))Z.preventDefault?.(),_?.nextChat?.()};return j.addEventListener("keydown",G),()=>j.removeEventListener("keydown",G)}function bQ(_={}){let $=_.document??(typeof document<"u"?document:null);if(!$)return()=>{};let j=(G)=>{if(z6(G?.target))return;if(!E$(G,"openSettings"))return;G.preventDefault(),p1()};return $.addEventListener("keydown",j),()=>$.removeEventListener("keydown",j)}function vQ(_={}){let $=_.document??(typeof document<"u"?document:null);if(!$)return()=>{};let j=(G)=>{if(z6(G?.target))return;if(!E$(G,"openHelp"))return;G.preventDefault(),p1({section:"keyboard"})};return $.addEventListener("keydown",j),()=>$.removeEventListener("keydown",j)}function mQ(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,renameBranchInFlight:G,renameBranchLockUntil:Z,getFormLock:X,setRenameBranchNameDraft:Y,setIsRenameBranchFormOpen:q,now:L=Date.now()}=_;if(!$||!j?.chat_jid)return!1;let K=X?.()||null;if(!K)return!1;if(G||L<Number(Z||0)||K.inFlight||L<Number(K.cooldownUntil||0))return!1;return Y?.(j.agent_name||""),q?.(!0),!0}function cQ(_){let{setIsRenameBranchFormOpen:$,setRenameBranchNameDraft:j}=_;$?.(!1),j?.("")}async function lQ(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,nextName:G,openRenameForm:Z,renameBranchInFlightRef:X,renameBranchLockUntilRef:Y,getFormLock:q,setIsRenamingBranch:L,renameChatBranch:K,refreshActiveChatAgents:Q,refreshCurrentChatBranches:V,navigate:F,baseHref:B,chatOnlyMode:U,showIntentToast:D,closeRenameForm:E,now:H=()=>Date.now()}=_;if(!$||!j?.chat_jid)return!1;if(typeof G!=="string")return Z?.(),!1;let k=H(),z=q?.()||null;if(!z)return!1;if(X.current||k<Number(Y.current||0)||z.inFlight||k<Number(z.cooldownUntil||0))return!1;X.current=!0,z.inFlight=!0,L?.(!0);try{let O=j.agent_name||"",y=l2(G,O);if(!y.canSubmit)return D?.("Could not rename session",y.message||"Enter a valid session handle.","warning",4000),!1;let I=y.normalized||O,A=await K(j.chat_jid,{agentName:I});await Promise.allSettled([Q?.(),V?.()]);let J=A?.branch?.agent_name||I||O;return D?.("Session renamed",`@${J}`,"info",3500),E?.(),!0}catch(O){let y=O instanceof Error?O.message:String(O||"Could not rename session."),I=/already in use/i.test(y||"")?`${y} Switch to or restore that existing session from the session manager.`:y;return D?.("Could not rename session",I||"Could not rename session.","warning",5000),!1}finally{X.current=!1,L?.(!1);let O=H()+GK;Y.current=O;let y=q?.()||null;if(y)y.inFlight=!1,y.cooldownUntil=O}}async function hQ(_){let{hasWindow:$=typeof window<"u",targetChatJid:j=null,currentChatJid:G,currentBranchRecord:Z,currentChatBranches:X=[],activeChatAgents:Y=[],pruneChatBranch:q,refreshActiveChatAgents:L,refreshCurrentChatBranches:K,showIntentToast:Q,baseHref:V,chatOnlyMode:F,navigate:B,confirm:U=(J)=>window.confirm(J)}=_;if(!$)return!1;let D=typeof j==="string"&&j.trim()?j.trim():"",E=typeof G==="string"&&G.trim()?G.trim():"",H=D||Z?.chat_jid||E;if(!H)return Q?.("Could not prune branch","No active session is selected yet.","warning",4000),!1;let k=(Z?.chat_jid===H?Z:null)||X.find((J)=>J?.chat_jid===H)||Y.find((J)=>J?.chat_jid===H)||null,z=k?.chat_jid===(k?.root_chat_jid||k?.chat_jid),O=Boolean(z&&H==="web:default"),y=Boolean(z&&X.some((J)=>{let M=typeof J?.chat_jid==="string"?J.chat_jid.trim():"",W=typeof J?.root_chat_jid==="string"?J.root_chat_jid.trim():M;return M&&M!==H&&W===H&&!J?.archived_at}));if(O)return Q?.("Cannot archive session","The default chat session cannot be archived.","warning",4000),!1;if(y)return Q?.("Cannot archive session","Archive or delete the child branch sessions first.","warning",4500),!1;let I=`@${k?.agent_name||H}${k?.chat_jid?` — ${k.chat_jid}`:""}`;if(!U(z?`Archive ${I}?

This removes the session from the session picker. Chat history is preserved.`:`Prune ${I}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return!1;try{await q(H),await Promise.allSettled([L?.(),K?.()]);let J=z?"web:default":k?.root_chat_jid||"web:default";Q?.(z?"Session archived":"Branch pruned",`${I} has been archived.`,"info",3000);let M=A1(V,J,{chatOnly:F});return B?.(M),!0}catch(J){let M=J instanceof Error?J.message:String(J||"Could not prune branch.");return Q?.("Could not prune branch",M||"Could not prune branch.","warning",5000),!1}}async function pQ(_){let{targetChatJid:$,purgeChatBranch:j,currentChatBranches:G=[],refreshActiveChatAgents:Z,refreshCurrentChatBranches:X,showIntentToast:Y,confirm:q=(D)=>window.confirm(D)}=_,L=typeof $==="string"?$.trim():"";if(!L||typeof j!=="function")return!1;let K=G.find((D)=>D?.chat_jid===L)||null;if(!Boolean(K?.archived_at))return Y?.("Could not delete branch","Only archived sessions can be permanently deleted.","warning",4500),!1;let V=Boolean(K?.chat_jid&&K.chat_jid===(K.root_chat_jid||K.chat_jid)),F=`@${K?.agent_name||L}`;if(!q(`Permanently delete ${F}?

This removes all chat history, token usage, cursor state, scheduled tasks, and session files for this ${V?"session":"branch"}. It cannot be undone.`))return!1;try{return await j(L),await Promise.allSettled([Z?.(),X?.()]),Y?.(V?"Archived session deleted":"Archived branch deleted",`${F} was permanently deleted.`,"info",4000),!0}catch(D){let E=D instanceof Error?D.message:String(D||`Could not permanently delete archived ${V?"session":"branch"}.`);return Y?.("Could not delete branch",E||`Could not permanently delete archived ${V?"session":"branch"}.`,"warning",5000),!1}}async function nQ(_){let{targetChatJid:$,restoreChatBranch:j,currentChatBranches:G=[],refreshActiveChatAgents:Z,refreshCurrentChatBranches:X,showIntentToast:Y,baseHref:q,chatOnlyMode:L,navigate:K}=_,Q=typeof $==="string"?$.trim():"";if(!Q||typeof j!=="function")return!1;try{let V=G.find((H)=>H?.chat_jid===Q)||null,F=await j(Q);await Promise.allSettled([Z?.(),X?.()]);let B=F?.branch,U=typeof B?.chat_jid==="string"&&B.chat_jid.trim()?B.chat_jid.trim():Q,D=nY(V?.agent_name,B?.agent_name,U);Y?.("Branch restored",D,"info",4200);let E=A1(q,U,{chatOnly:L});return K?.(E),!0}catch(V){let F=V instanceof Error?V.message:String(V||"Could not restore branch.");return Y?.("Could not restore branch",F||"Could not restore branch.","warning",5000),!1}}async function rQ(_){let{branchLoaderSourceChatJid:$,forkChatBranch:j,setBranchLoaderState:G,navigate:Z,baseHref:X,isCancelled:Y=()=>!1}=_;try{G?.({status:"running",message:"Preparing a new chat branch…"});let q=await j($);if(Y())return!1;let L=q?.branch,K=typeof L?.chat_jid==="string"&&L.chat_jid.trim()?L.chat_jid.trim():null;if(!K)throw Error("Branch fork did not return a chat id.");let Q=A1(X,K,{chatOnly:!0});return Z?.(Q,{replace:!0}),!0}catch(q){if(Y())return!1;return G?.({status:"error",message:Y4(q)}),!1}}function iQ(_){let{hasWindow:$=typeof window<"u",nextChatJid:j,currentChatJid:G,chatOnlyMode:Z,currentHref:X,navigate:Y}=_;if(!$)return!1;let q=typeof j==="string"?j.trim():"";if(!q||q===G)return!1;let L=A1(X,q,{chatOnly:Z});return Y?.(L),!0}function yA(_){return typeof _==="string"?_.trim():""}function xA(_){return new Promise(($)=>setTimeout($,_))}async function dQ(_,$){if(typeof _?.beforeDetachFromHost!=="function")return;await _.beforeDetachFromHost({path:$,target:"popout"})}async function oQ(_){let{panePath:$,tabStripActiveId:j,editorInstanceRef:G,dockInstanceRef:Z,terminalTabPath:X,activateTab:Y,getActiveTabId:q,resolveTab:L,buildEditorPopoutTransfer:K}=_,Q=$===X&&Boolean(L?.($));if($===X&&!Q){let D=Z.current;if(await dQ(D,$),typeof D?.preparePopoutTransfer!=="function")return null;return await D.preparePopoutTransfer()}let V=()=>yA(q?.()??j),F=V(),B=G.current;if(F!==$)Y?.($);let U=F===$?G.current:null;if(typeof U?.preparePopoutTransfer!=="function")for(let D=0;D<12;D+=1){if(D>0)await xA(16);else await Promise.resolve();let E=V(),H=G.current,k=E===$,z=H!==B;if(!k||typeof H?.preparePopoutTransfer!=="function")continue;if(F===$||z||D>0){U=H;break}}if(await dQ(U,$),typeof U?.preparePopoutTransfer==="function"){let D=await U.preparePopoutTransfer();if(D)return D}return K?.($)??null}function sQ(_){let{panePath:$,terminalTabPath:j,dockVisible:G,resolveTab:Z,closeTab:X,setDockVisible:Y}=_,q=Z($);if(q&&!q.dirty){X($);return}if($===j&&G)Y(!1)}function aQ(_){let{hasWindow:$=typeof window<"u",editorOpen:j,shellElement:G,editorWidthRef:Z,dockHeightRef:X,sidebarWidthRef:Y,readStoredNumber:q}=_;if(!j||!$||!G)return;if(!Z.current){let L=q("editorWidth",null),K=Y.current||280,Q=Number.isFinite(L)?Number(L):K;Z.current=G6(Q,typeof window<"u"?window.innerWidth:0,Y.current||0)}if(G.style.setProperty("--editor-width",`${Z.current}px`),!X.current){let L=q("dockHeight",null);X.current=Number.isFinite(L)?Number(L):200}G.style.setProperty("--dock-height",`${X.current}px`)}async function tQ(_){if(typeof _!=="function")return null;try{return await _()}catch{return null}}async function eQ(_){let{currentChatJid:$,chatOnlyMode:j,forkChatBranch:G,refreshActiveChatAgents:Z,refreshCurrentChatBranches:X,showIntentToast:Y,navigate:q,baseHref:L}=_;if(typeof q==="function")try{let K=U3(L,$,{chatOnly:j});return q(K),!0}catch(K){return Y?.("Could not create branch",Y4(K),"warning",5000),!1}try{let Q=(await G($))?.branch,V=typeof Q?.chat_jid==="string"&&Q.chat_jid.trim()?Q.chat_jid.trim():null;if(!V)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([Z?.(),X?.()]);let F=Q?.agent_name?`@${Q.agent_name}`:V;Y?.("New branch created",`Switched to ${F}.`,"info",2500);let B=A1(L,V,{chatOnly:j});return q?.(B),!0}catch(K){return Y?.("Could not create branch",Y4(K),"warning",5000),!1}}async function _F(_){let{rootName:$,chatOnlyMode:j,createRootChatSession:G,refreshActiveChatAgents:Z,refreshCurrentChatBranches:X,showIntentToast:Y,navigate:q,baseHref:L}=_,K=String($||"").trim();if(!K)return!1;try{let V=(await G(K))?.branch,F=typeof V?.chat_jid==="string"&&V.chat_jid.trim()?V.chat_jid.trim():null;if(!F)throw Error("Root session creation did not return a chat id.");await Promise.allSettled([Z?.(),X?.()]);let B=V?.agent_name?`@${V.agent_name}`:F;Y?.("Root session created",`Switched to ${B}.`,"info",2500);let U=A1(L,F,{chatOnly:j});return q?.(U),!0}catch(Q){return Y?.("Could not create root session",Y4(Q),"warning",5000),!1}}async function $F(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,path:G,label:Z,showIntentToast:X,resolveSourceTransfer:Y,closeSourcePaneIfTransferred:q,onPaneWindowOpened:L,currentChatJid:K,baseHref:Q}=_;if(!$||j)return!1;let V=typeof G==="string"&&G.trim()?G.trim():"";if(!V)return!1;let F=JG(V);if(!F)return X?.("Could not open pane window","Opening pane windows is unavailable in standalone webapp mode.","warning",5000),!1;let B=Q3(F);if(!B)return X?.("Could not open pane window","The browser blocked opening a new tab or window.","warning",5000),!1;F3(B,{title:typeof Z==="string"&&Z.trim()?`Opening ${Z}…`:"Opening pane…",message:"Preparing a standalone pane window. This should only take a moment."});try{let U=await Y?.(V),D=Boolean(U&&Object.keys(U).length>0),E=zG(Q,V,{label:typeof Z==="string"&&Z.trim()?Z.trim():void 0,chatJid:K,params:U});if(B3(B,E),L?.(V,B,U||null),D&&!L)q?.(V);return!0}catch(U){N3(B);let D=U instanceof Error?U.message:"Could not transfer pane state to the new window.";return X?.("Could not open pane window",D,"warning",5000),!1}}async function jF(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,currentChatJid:G,currentRootChatJid:Z,forkChatBranch:X,getActiveChatAgents:Y,getChatBranches:q,setActiveChatAgents:L,setCurrentChatBranches:K,showIntentToast:Q,baseHref:V}=_;if(!$||j)return!1;let F=OG(G);if(!F)return Q?.("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000),!1;if(F.mode==="tab"){let U=U3(V,G,{chatOnly:!0});if(!window.open(U,F.target))return Q?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;return!0}let B=Q3(F);if(!B)return Q?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;F3(B,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let D=(await X(G))?.branch,E=typeof D?.chat_jid==="string"&&D.chat_jid.trim()?D.chat_jid.trim():null;if(!E)throw Error("Branch fork did not return a chat id.");let H=await tQ(()=>Y?.());if(H)L?.(Array.isArray(H?.chats)?H.chats:[]);let k=await tQ(()=>q?.(Z));if(k)K?.(Array.isArray(k?.chats)?k.chats:[]);let z=A1(V,E,{chatOnly:!0});return B3(B,z),!0}catch(U){return N3(B),Q?.("Could not open branch window",Y4(U),"error",5000),!1}}function IA(_){_(($)=>!$)}function CA(_){let{nextChatJid:$,currentChatJid:j,chatOnlyMode:G,navigate:Z,hasWindow:X=typeof window<"u",currentHref:Y=X?window.location.href:"http://localhost/"}=_;return iQ({hasWindow:X,nextChatJid:$,currentChatJid:j,chatOnlyMode:G,currentHref:Y,navigate:Z})}function fA(_){let{currentBranchRecord:$,renameBranchInFlight:j,renameBranchLockUntil:G,getFormLock:Z,setRenameBranchNameDraft:X,setIsRenameBranchFormOpen:Y,hasWindow:q=typeof window<"u"}=_;return mQ({hasWindow:q,currentBranchRecord:$,renameBranchInFlight:j,renameBranchLockUntil:G,getFormLock:Z,setRenameBranchNameDraft:X,setIsRenameBranchFormOpen:Y})}function PA(_){cQ(_)}async function RA(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await lQ({hasWindow:$,baseHref:String(j||"").trim()||($?window.location.href:"http://localhost/"),...G})}async function SA(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await hQ({hasWindow:$,baseHref:j,...G})}async function gA(_){await pQ(_)}async function uA(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await nQ({baseHref:j,...G})}function bA(_){let{branchLoaderMode:$,branchLoaderSourceChatJid:j,forkChatBranch:G,setBranchLoaderState:Z,navigate:X,hasWindow:Y=typeof window<"u",baseHref:q=Y?window.location.href:"http://localhost/",runBranchLoaderImpl:L=rQ}=_;if(!$||!Y)return;let K=!1;return L({branchLoaderSourceChatJid:j,forkChatBranch:G,setBranchLoaderState:Z,navigate:X,baseHref:q,isCancelled:()=>K}),()=>{K=!0}}async function vA(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await eQ({baseHref:j,...G})}async function mA(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await _F({baseHref:j,...G})}async function cA(_){let{isWebAppMode:$,path:j,label:G,showIntentToast:Z,currentChatJid:X,activateTab:Y,tabStripActiveId:q,editorInstanceRef:L,dockInstanceRef:K,terminalTabPath:Q,tabPaneOverrides:V,buildPaneDetachTransfer:F,registerDetachedPaneWindow:B,dockVisible:U,resolveTab:D,closeTab:E,setDockVisible:H,hasWindow:k=typeof window<"u",baseHref:z=k?window.location.href:"http://localhost/"}=_,O=F?.(j)||null;return await $F({hasWindow:k,isWebAppMode:$,path:j,label:G,showIntentToast:Z,currentChatJid:X,baseHref:z,resolveSourceTransfer:async(y)=>{let I=await oQ({panePath:y,activateTab:Y,getActiveTabId:()=>a0.getActiveId(),tabStripActiveId:q,editorInstanceRef:L,dockInstanceRef:K,terminalTabPath:Q,resolveTab:D,buildEditorPopoutTransfer:(W)=>{if(!W||W===Q)return null;let w=L.current,x=typeof w?.getContent==="function"?w.getContent():void 0,P=typeof w?.isDirty==="function"?w.isDirty():!1,R=V instanceof Map?V.get(W)||null:null,v=a0.getViewState(W)||null;return o6({path:W,content:P?x:void 0,paneOverrideId:R,viewState:v})}}),A=y===Q&&!D(y)?K.current:L.current,J=typeof A?.exportHostTransferState==="function"?A.exportHostTransferState():null,M=J?A8({path:y,payload:J}):null;if(O?.paneInstanceId&&O?.paneWindowId&&A&&y!==Q&&J?.kind!=="terminal")W5({panePath:y,paneInstanceId:O.paneInstanceId,paneWindowId:O.paneWindowId,instance:A,releaseSourceHost:()=>{if(y===Q){if(K.current===A)K.current=null;if(L.current===A)L.current=null;return}if(L.current===A)L.current=null}});return{...I||{},...M||{},...O?.params||{}}},onPaneWindowOpened:B?(y,I,A)=>{B(y,G,I,A)}:void 0,closeSourcePaneIfTransferred:B?void 0:(y)=>{sQ({panePath:y,terminalTabPath:Q,dockVisible:U,resolveTab:D,closeTab:E,setDockVisible:H})}})}function lA(_){let{openEditor:$,popOutPane:j,watchPaneOpenEventsImpl:G=RQ}=_;return G({openTab:(Z,X)=>$(Z,X?{label:X}:void 0),editSource:(Z,X)=>$(Z,{...X?{label:X}:{},paneOverrideId:"editor"}),popOutPane:(Z,X)=>{j(Z,X)}})}async function hA(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await jF({hasWindow:$,baseHref:j,...G})}function pA(_){let{hasWindow:$=typeof window<"u",...j}=_;aQ({hasWindow:$,...j})}function GF(_){let{setWorkspaceOpen:$,currentChatJid:j,chatOnlyMode:G,navigate:Z,currentBranchRecord:X,renameBranchInFlightRef:Y,renameBranchLockUntilRef:q,getFormLock:L,setRenameBranchNameDraft:K,setIsRenameBranchFormOpen:Q,setIsRenamingBranch:V,renameChatBranch:F,refreshActiveChatAgents:B,refreshCurrentChatBranches:U,showIntentToast:D,currentChatBranches:E,activeChatAgents:H,pruneChatBranch:k,purgeChatBranch:z,restoreChatBranch:O,branchLoaderMode:y,branchLoaderSourceChatJid:I,forkChatBranch:A,createRootChatSession:J,setBranchLoaderState:M,currentRootChatJid:W,isWebAppMode:w,getActiveChatAgents:x,getChatBranches:P,setActiveChatAgents:R,setCurrentChatBranches:v,openEditor:c,activateTab:h,tabStripActiveId:r,editorInstanceRef:b,dockInstanceRef:a,terminalTabPath:t,tabPaneOverrides:q0,buildPaneDetachTransfer:Z0,registerDetachedPaneWindow:D0,dockVisible:Q0,resolveTab:L0,closeTab:N0,setDockVisible:H0,editorOpen:y0,shellElement:o,editorWidthRef:j0,dockHeightRef:O0,sidebarWidthRef:P0,readStoredNumber:m0}=_,l0=f(()=>{IA($)},[$]),G_=f((A0)=>{CA({nextChatJid:A0,currentChatJid:j,chatOnlyMode:G,navigate:Z})},[G,j,Z]),h0=f(()=>{fA({currentBranchRecord:X,renameBranchInFlight:Y.current,renameBranchLockUntil:q.current,getFormLock:L,setRenameBranchNameDraft:K,setIsRenameBranchFormOpen:Q})},[X,L,Y,q,Q,K]),c0=f(()=>{PA({setIsRenameBranchFormOpen:Q,setRenameBranchNameDraft:K})},[Q,K]),M0=f(async(A0)=>{await RA({currentBranchRecord:X,nextName:A0,openRenameForm:h0,renameBranchInFlightRef:Y,renameBranchLockUntilRef:q,getFormLock:L,setIsRenamingBranch:V,renameChatBranch:F,refreshActiveChatAgents:B,refreshCurrentChatBranches:U,navigate:Z,chatOnlyMode:G,showIntentToast:D,closeRenameForm:c0})},[c0,X,G,L,Z,h0,B,U,Y,q,F,V,D]),p0=f(async(A0=null)=>{await SA({targetChatJid:A0,currentChatJid:j,currentBranchRecord:X,currentChatBranches:E,activeChatAgents:H,pruneChatBranch:k,refreshActiveChatAgents:B,refreshCurrentChatBranches:U,showIntentToast:D,chatOnlyMode:G,navigate:Z})},[H,G,X,E,j,Z,k,B,U,D]),b0=f(async(A0)=>{await gA({targetChatJid:A0,purgeChatBranch:z,currentChatBranches:E,refreshActiveChatAgents:B,refreshCurrentChatBranches:U,showIntentToast:D})},[E,z,B,U,D]),d0=f(async(A0)=>{await uA({targetChatJid:A0,restoreChatBranch:O,currentChatBranches:E,refreshActiveChatAgents:B,refreshCurrentChatBranches:U,showIntentToast:D,chatOnlyMode:G,navigate:Z})},[G,E,Z,B,U,O,D]);g(()=>bA({branchLoaderMode:y,branchLoaderSourceChatJid:I,forkChatBranch:A,setBranchLoaderState:M,navigate:Z}),[y,I,A,Z,M]);let H_=f(async()=>{await vA({currentChatJid:j,chatOnlyMode:G,forkChatBranch:A,refreshActiveChatAgents:B,refreshCurrentChatBranches:U,showIntentToast:D,navigate:Z})},[G,j,A,Z,B,U,D]),E_=f(async(A0)=>{await mA({rootName:A0,chatOnlyMode:G,createRootChatSession:J,refreshActiveChatAgents:B,refreshCurrentChatBranches:U,showIntentToast:D,navigate:Z})},[G,J,Z,B,U,D]),K_=f(async(A0,r0)=>{return await cA({isWebAppMode:w,path:A0,label:r0,showIntentToast:D,currentChatJid:j,activateTab:h,tabStripActiveId:r,editorInstanceRef:b,dockInstanceRef:a,terminalTabPath:t,tabPaneOverrides:q0,buildPaneDetachTransfer:Z0,registerDetachedPaneWindow:D0,dockVisible:Q0,resolveTab:L0,closeTab:N0,setDockVisible:H0})},[h,Z0,N0,j,a,Q0,b,w,D0,L0,H0,D,q0,r,t]);g(()=>lA({openEditor:c,popOutPane:(A0,r0)=>{K_(A0,r0)}}),[K_,c]);let S0=f(async()=>{await hA({isWebAppMode:w,currentChatJid:j,currentRootChatJid:W,forkChatBranch:A,getActiveChatAgents:x,getChatBranches:P,setActiveChatAgents:R,setCurrentChatBranches:v,showIntentToast:D})},[j,W,A,x,P,w,R,v,D]);return g(()=>{pA({editorOpen:y0,shellElement:o,editorWidthRef:j0,dockHeightRef:O0,sidebarWidthRef:P0,readStoredNumber:m0})},[O0,y0,j0,m0,o,P0]),{toggleWorkspace:l0,handleBranchPickerChange:G_,openRenameCurrentBranchForm:h0,closeRenameCurrentBranchForm:c0,handleRenameCurrentBranch:M0,handlePruneCurrentBranch:p0,handlePurgeArchivedBranch:b0,handleRestoreBranch:d0,handleCreateSessionFromCompose:H_,handleCreateRootSessionFromCompose:E_,handlePopOutPane:K_,handlePopOutChat:S0}}x0();function o$(_){return _.status==="fulfilled"?_.value:null}function k8(_){return Math.max(0,Math.min(100,_))}function ZF(_){let $=Array.isArray(_.timelinePayload?.posts)?_.timelinePayload.posts:Array.isArray(_.rawPosts)?_.rawPosts:[],j=$.length?$[$.length-1]:null,G=$.filter((E)=>E?.data?.is_bot_message).length,Z=$.filter((E)=>!E?.data?.is_bot_message).length,X=Number(_.queuePayload?.count??_.followupQueueItems?.length??0)||0,Y=Array.isArray(_.activeChatsPayload?.chats)?_.activeChatsPayload.chats.length:Array.isArray(_.activeChatAgents)?_.activeChatAgents.length:0,q=Array.isArray(_.branchesPayload?.chats)?_.branchesPayload.chats.length:Array.isArray(_.currentChatBranches)?_.currentChatBranches.length:0,L=Number(_.contextPayload?.percent??_.contextUsage?.percent??0)||0,K=Number(_.contextPayload?.tokens??_.contextUsage?.tokens??0)||0,Q=Number(_.contextPayload?.contextWindow??_.contextUsage?.contextWindow??0)||0,V=_.modelsPayload?.current??_.activeModel??null,F=_.modelsPayload?.thinking_level??_.activeThinkingLevel??null,B=_.modelsPayload?.supports_thinking??_.supportsThinking,U=_.statusPayload?.status||(_.isAgentTurnActive?"active":"idle"),D=_.statusPayload?.data?.type||_.statusPayload?.type||null;return{generatedAt:_.generatedAt,request:_.request,chat:{currentChatJid:_.currentChatJid,rootChatJid:_.currentRootChatJid,activeChats:Y,branches:q},agent:{status:U,phase:D,running:Boolean(_.isAgentTurnActive)},model:{current:V,thinkingLevel:F,supportsThinking:Boolean(B)},context:{tokens:K,contextWindow:Q,percent:L},queue:{count:X},timeline:{loadedPosts:$.length,botPosts:G,userPosts:Z,latestPostId:j?.id??null,latestTimestamp:j?.timestamp??null},bars:[{key:"context",label:"Context",value:k8(Math.round(L))},{key:"queue",label:"Queue",value:k8(X*18)},{key:"activeChats",label:"Active chats",value:k8(Y*12)},{key:"posts",label:"Timeline load",value:k8($.length*5)}]}}function XF(_){if(_==="followup")return{title:"Widget submission queued",detail:"The widget message was queued because the agent is busy.",kind:"info",durationMs:3500};return{title:"Widget submission sent",detail:"The widget message was sent to the chat.",kind:"info",durationMs:3500}}function YF(_){return{title:"Widget submission failed",detail:_||"Could not send the widget message.",kind:"warning",durationMs:5000}}function qF(_,$){return{shouldBuildDashboard:Boolean(_?.buildDashboard||_?.dashboardKind==="internal-state"),nextRefreshCount:Number($||0)+1}}function LF(){return{title:"Dashboard built",detail:"Live dashboard state pushed into the widget.",kind:"info",durationMs:3000}}function KF(_){return{title:"Dashboard build failed",detail:_||"Could not build dashboard.",kind:"warning",durationMs:5000}}function VF(){return{title:"Widget refresh requested",detail:"The widget received a host acknowledgement update.",kind:"info",durationMs:3000}}async function QF(_){let{requestPayload:$=null,currentChatJid:j,currentRootChatJid:G,getAgentStatus:Z,getAgentContext:X,getAgentQueueState:Y,getAgentModels:q,getActiveChatAgents:L,getChatBranches:K,getTimeline:Q,rawPosts:V,activeChatAgents:F,currentChatBranches:B,contextUsage:U,followupQueueItems:D,activeModel:E,activeThinkingLevel:H,supportsThinking:k,isAgentTurnActive:z}=_,[O,y,I,A,J,M,W]=await Promise.allSettled([Z(j),X(j),Y(j),q(j),L(),K(G),Q(20,null,j)]);return ZF({generatedAt:new Date().toISOString(),request:$,currentChatJid:j,currentRootChatJid:G,statusPayload:o$(O),contextPayload:o$(y),queuePayload:o$(I),modelsPayload:o$(A),activeChatsPayload:o$(J),branchesPayload:o$(M),timelinePayload:o$(W),rawPosts:V,activeChatAgents:F,currentChatBranches:B,contextUsage:U,followupQueueItems:D,activeModel:E,activeThinkingLevel:H,supportsThinking:k,isAgentTurnActive:z})}function FF(_){let{queuedItem:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,currentChatJid:Z,refreshQueueState:X,setFollowupQueueItems:Y,showIntentToast:q,steerAgentQueueItem:L}=_,K=D5(j.current,$);if(!K)return;let{rowId:Q}=K;G.current.add(Q),Y((V)=>d$(V,Q).items),L(Q,o9(Z)).then(()=>{X()}).catch((V)=>{console.warn("[queue] Failed to steer queued item:",V);let F=qj("steer");q(F.title,F.detail,"warning"),G.current.delete(Q),X()})}function BF(_){let{queuedItem:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,currentChatJid:Z,refreshQueueState:X,setFollowupQueueItems:Y,showIntentToast:q,clearQueuedSteerStateIfStale:L,removeAgentQueueItem:K}=_,Q=D5(j.current,$);if(!Q)return;let{rowId:V}=Q;G.current.add(V),L?.(Q.remainingQueueCount),Y((F)=>d$(F,V).items),K(V,o9(Z)).then(()=>{X()}).catch((F)=>{console.warn("[queue] Failed to remove queued item:",F);let B=qj("remove");q(B.title,B.detail,"warning"),G.current.delete(V),X()})}function NF(_){let{widget:$,dismissedLiveWidgetKeysRef:j,setFloatingWidget:G}=_;if(!$||typeof $!=="object")return;let Z=W1($);if(Z)j.current.delete(Z);G(XQ($,new Date().toISOString()))}function UF(_){let{dismissedLiveWidgetKeysRef:$,setFloatingWidget:j}=_;j((G)=>{let Z=YQ(G);if(Z.dismissedSessionKey)$.current.add(Z.dismissedSessionKey);return Z.nextWidget})}function HF(_){let{event:$,widget:j,currentChatJid:G,isComposeBoxAgentActive:Z,setFloatingWidget:X,handleCloseFloatingWidget:Y,handleMessageResponse:q,showIntentToast:L,sendAgentMessage:K,buildFloatingWidgetDashboardSnapshot:Q}=_,V=typeof $?.kind==="string"?$.kind:"",F=W1(j);if(!V||!F)return;if(V==="widget.close"){Y();return}if(V==="widget.submit"){let B=Dq($?.payload),U=Wq($?.payload),D=new Date().toISOString();if(X((E)=>KQ(E,F,{kind:V,payload:$?.payload||null,submittedAt:D,submissionText:B})),!B){if(L("Widget submission received","The widget submitted data without a message payload yet.","info",3500),U)Y();return}(async()=>{try{let E=await K("default",B,null,[],Z?"queue":null,G);q(E),X((k)=>Yj(k,F,{submittedAt:D,submissionText:B,queued:E?.queued||null}));let H=XF(E?.queued);if(L(H.title,H.detail,H.kind,H.durationMs),U)Y()}catch(E){X((k)=>Yj(k,F,{submittedAt:D,submissionText:B,errorMessage:E?.message||"Could not send the widget message."}));let H=YF(E?.message);L(H.title,H.detail,H.kind,H.durationMs)}})();return}if(V==="widget.ready"||V==="widget.request_refresh"){let B=new Date().toISOString(),U=qF($?.payload||null,j?.runtimeState?.refreshCount);if(X((D)=>VQ(D,F,{kind:V,payload:$?.payload||null,eventAt:B,nextRefreshCount:U.nextRefreshCount,shouldBuildDashboard:U.shouldBuildDashboard})),V==="widget.request_refresh")if(U.shouldBuildDashboard)(async()=>{try{let D=await Q($?.payload||null);X((H)=>QQ(H,F,{dashboard:D,at:new Date().toISOString(),count:U.nextRefreshCount,echo:$?.payload||null}));let E=LF();L(E.title,E.detail,E.kind,E.durationMs)}catch(D){X((H)=>FQ(H,F,{errorMessage:D?.message||"Could not build dashboard.",at:new Date().toISOString(),count:U.nextRefreshCount}));let E=KF(D?.message);L(E.title,E.detail,E.kind,E.durationMs)}})();else{let D=VF();L(D.title,D.detail,D.kind,D.durationMs)}}}function nA(_,$=FF){$(_)}function rA(_,$=BF){$(_)}function dA(_,$,j=$Q){j({response:_,refreshActiveChatAgents:$.refreshActiveChatAgents,refreshCurrentChatBranches:$.refreshCurrentChatBranches,refreshContextUsage:$.refreshContextUsage,refreshAutoresearchStatus:$.refreshAutoresearchStatus,refreshQueueState:$.refreshQueueState})}function EF(_){let{currentChatJid:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,refreshQueueState:Z,setFollowupQueueItems:X,showIntentToast:Y,clearQueuedSteerStateIfStale:q,steerAgentQueueItem:L,removeAgentQueueItem:K,refreshActiveChatAgents:Q,refreshCurrentChatBranches:V,refreshContextUsage:F,refreshAutoresearchStatus:B}=_,U=f((k)=>{nA({queuedItem:k,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,currentChatJid:$,refreshQueueState:Z,setFollowupQueueItems:X,showIntentToast:Y,steerAgentQueueItem:L,removeAgentQueueItem:K})},[$,G,j,Z,K,X,Y,L]),D=f((k)=>{rA({queuedItem:k,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,currentChatJid:$,refreshQueueState:Z,setFollowupQueueItems:X,showIntentToast:Y,clearQueuedSteerStateIfStale:q,steerAgentQueueItem:L,removeAgentQueueItem:K})},[q,$,G,j,Z,K,X,Y,L]),E=f(async(k,z)=>{X((O)=>{if(!Array.isArray(O)||k<0||z<0||k>=O.length||z>=O.length||k===z)return O;let y=[...O],[I]=y.splice(k,1);return y.splice(z,0,I),y});try{let{reorderAgentQueueItem:O}=await Promise.resolve().then(() => (g_(),e5));await O(k,z,$)}catch(O){console.warn("Failed to persist queue reorder:",O),Z()}},[$,Z,X]),H=f((k)=>{dA(k,{refreshActiveChatAgents:Q,refreshCurrentChatBranches:V,refreshContextUsage:F,refreshAutoresearchStatus:B,refreshQueueState:Z})},[Q,B,F,V,Z]);return{handleInjectQueuedFollowup:U,handleRemoveQueuedFollowup:D,handleMoveQueuedFollowup:E,handleMessageResponse:H}}x0();function DF(_){let{btwAbortRef:$,setBtwSession:j}=_;if($.current)$.current.abort(),$.current=null;j(null)}async function WF(_){let{question:$,currentChatJid:j,streamSidePrompt:G,resolveBtwChatJid:Z,showIntentToast:X,btwAbortRef:Y,setBtwSession:q}=_,L=String($||"").trim();if(!L)return X("BTW needs a question","Usage: /btw <question>","warning"),!0;if(Y.current)Y.current.abort();let K=new AbortController;Y.current=K,q({question:L,answer:"",thinking:"",error:null,model:null,status:"running"});try{let Q=await G(L,{signal:K.signal,chatJid:Z(j),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(V)=>{if(V==="side_prompt_start")q((F)=>F?{...F,status:"running"}:F)},onThinkingDelta:(V)=>{q((F)=>F?{...F,thinking:`${F.thinking||""}${V||""}`}:F)},onTextDelta:(V)=>{q((F)=>F?{...F,answer:`${F.answer||""}${V||""}`}:F)}});if(Y.current!==K)return!0;q((V)=>V?{...V,answer:Q?.result||V.answer||"",thinking:Q?.thinking||V.thinking||"",model:Q?.model||null,status:"success",error:null}:V)}catch(Q){if(K.signal.aborted)return!0;q((V)=>V?{...V,status:"error",error:Q?.payload?.error||Q?.message||"BTW request failed."}:V)}finally{if(Y.current===K)Y.current=null}return!0}async function OF(_){let{content:$,parseBtwCommand:j,closeBtwPanel:G,runBtwPrompt:Z,showIntentToast:X}=_,Y=j($);if(!Y)return!1;if(Y.type==="help")return X("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(Y.type==="clear")return G(),X("BTW cleared","Closed the side conversation panel.","info"),!0;if(Y.type==="ask")return await Z(Y.question),!0;return!1}async function zF(_){let{btwSession:$,buildBtwInjectionText:j,isComposeBoxAgentActive:G,currentChatJid:Z,sendAgentMessage:X,handleMessageResponse:Y,showIntentToast:q}=_,L=j($);if(!L)return!1;try{let K=await X("default",L,null,[],G?"queue":null,Z);return Y(K),q(K?.queued==="followup"?"BTW queued":"BTW injected",K?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500),!0}catch(K){return q("BTW inject failed",K?.message||"Could not inject BTW answer into chat.","warning"),!1}}async function iA(_){let $=typeof _==="string"?_:"";if(!$)return!1;let j=null;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch(G){j=G}try{let G=document.createElement("textarea");G.value=$,G.setAttribute("readonly",""),G.style.position="fixed",G.style.opacity="0",G.style.pointerEvents="none",document.body.appendChild(G),G.select(),G.setSelectionRange(0,G.value.length);let Z=document.execCommand("copy");return document.body.removeChild(G),Z}catch(G){return console.debug("[sidepanel] Clipboard copy failed after falling back from navigator.clipboard.",G,{clipboardApiAvailable:Boolean(navigator.clipboard?.writeText),clipboardApiError:j}),!1}}function oA(_){let{dismissedLiveWidgetKeysRef:$,setFloatingWidget:j}=_;$.current.clear(),j(null)}function JF(_){let{currentChatJid:$,currentRootChatJid:j,isComposeBoxAgentActive:G,showIntentToast:Z,setPendingExtensionPanelActions:X,refreshAutoresearchStatus:Y,stopAutoresearch:q,dismissAutoresearch:L,streamSidePrompt:K,btwAbortRef:Q,btwSession:V,setBtwSession:F,sendAgentMessage:B,handleMessageResponse:U,dismissedLiveWidgetKeysRef:D,setFloatingWidget:E,getAgentStatus:H,getAgentContext:k,getAgentQueueState:z,getAgentModels:O,getActiveChatAgents:y,getChatBranches:I,getTimeline:A,rawPosts:J,activeChatAgents:M,currentChatBranches:W,contextUsage:w,followupQueueItemsRef:x,activeModel:P,activeThinkingLevel:R,supportsThinking:v,isAgentTurnActive:c}=_,h=f(async(N0,H0)=>{let y0=typeof N0?.key==="string"?N0.key:"",o=typeof H0?.key==="string"?H0.key:"",j0=Gj(y0,o);if(!y0||!o)return;X((O0)=>AV(O0,y0,o));try{let O0=await MV({panel:N0,action:H0,currentChatJid:$,stopAutoresearch:q,dismissAutoresearch:L,writeClipboard:async(P0)=>{if(!await iA(P0))throw Error("Clipboard access is unavailable.")}});if(O0.refreshAutoresearchStatus)Y();if(O0.toast)Z(O0.toast.title,O0.toast.detail,O0.toast.kind,O0.toast.durationMs)}catch(O0){Z("Panel action failed",O0?.message||"Could not complete that action.","warning")}finally{X((O0)=>kV(O0,j0))}},[$,L,Y,X,Z,q]),r=f(()=>{DF({btwAbortRef:Q,setBtwSession:F})},[Q,F]),b=f(async(N0)=>{return await WF({question:N0,currentChatJid:$,streamSidePrompt:K,resolveBtwChatJid:Yq,showIntentToast:Z,btwAbortRef:Q,setBtwSession:F})},[Q,$,F,Z,K]),a=f(async({content:N0})=>{return await OF({content:N0,parseBtwCommand:Xq,closeBtwPanel:r,runBtwPrompt:b,showIntentToast:Z})},[r,b,Z]),t=f(()=>{if(V?.question)b(V.question)},[V,b]),q0=f(async()=>{await zF({btwSession:V,buildBtwInjectionText:Kq,isComposeBoxAgentActive:G,currentChatJid:$,sendAgentMessage:B,handleMessageResponse:U,showIntentToast:Z})},[V,$,U,G,B,Z]),Z0=f(async(N0=null)=>{return QF({requestPayload:N0,currentChatJid:$,currentRootChatJid:j,getAgentStatus:H,getAgentContext:k,getAgentQueueState:z,getAgentModels:O,getActiveChatAgents:y,getChatBranches:I,getTimeline:A,rawPosts:J,activeChatAgents:M,currentChatBranches:W,contextUsage:w,followupQueueItems:x.current,activeModel:P,activeThinkingLevel:R,supportsThinking:v,isAgentTurnActive:c})},[M,P,R,w,W,$,j,x,y,k,O,z,H,I,A,c,J,v]),D0=f((N0)=>{NF({widget:N0,dismissedLiveWidgetKeysRef:D,setFloatingWidget:E})},[D,E]),Q0=f(()=>{UF({dismissedLiveWidgetKeysRef:D,setFloatingWidget:E})},[D,E]),L0=f((N0,H0)=>{HF({event:N0,widget:H0,currentChatJid:$,isComposeBoxAgentActive:G,setFloatingWidget:E,handleCloseFloatingWidget:Q0,handleMessageResponse:U,showIntentToast:Z,sendAgentMessage:B,buildFloatingWidgetDashboardSnapshot:Z0})},[Z0,$,Q0,U,G,B,E,Z]);return g(()=>{oA({dismissedLiveWidgetKeysRef:D,setFloatingWidget:E})},[$,D,E]),{handleExtensionPanelAction:h,closeBtwPanel:r,handleBtwIntercept:a,handleBtwRetry:t,handleBtwInject:q0,handleOpenFloatingWidget:D0,handleCloseFloatingWidget:Q0,handleFloatingWidgetEvent:L0}}x0();function sA(_){let{hasDockPanes:$,chatOnlyMode:j}=_;return Boolean($&&!j)}function aA(_){return!_}function AF(_){let{hasDockPanes:$,chatOnlyMode:j,toggleDock:G,toggleZenMode:Z,exitZenMode:X,zenMode:Y,previousChat:q,nextChat:L}=_;g(()=>{if(!sA({hasDockPanes:$,chatOnlyMode:j}))return;return SQ(G)},[j,$,G]),g(()=>{if(!aA(j))return;return gQ({toggleZenMode:Z,exitZenMode:X,zenMode:Y,isZenModeActive:()=>Y})},[j,X,Z,Y]),g(()=>{if(typeof q!=="function"&&typeof L!=="function")return;return uQ({previousChat:q,nextChat:L})},[L,q]),g(()=>vQ(),[]),g(()=>bQ(),[])}function tA(_){return Boolean(_&&typeof _.closest==="function")}function kF(_=typeof window<"u"?window:null){if(!_||typeof _.getSelection!=="function")return!1;try{let $=_.getSelection();if(!$||$.isCollapsed)return!1;return String($.toString()||"").trim().length>0}catch{return!1}}function eA(){return{active:!1,horizontalLocked:!1,cancelled:!1,startX:0,startY:0,lastX:0,lastY:0,startedAt:0}}function _k(){return{lastTriggeredAt:0,accumX:0}}function Vj(_){if(!_)return;_.active=!1,_.horizontalLocked=!1,_.cancelled=!1,_.startX=0,_.startY=0,_.lastX=0,_.lastY=0,_.startedAt=0}var $k=["input","textarea","select","button","label","a[href]",'[contenteditable="true"]','[role="button"]',"[data-no-chat-swipe]",".compose-box",".compose-model-popup",".compose-session-popup",".workspace-explorer",".editor-pane-container",".dock-panel",".terminal-pane-content",".attachment-preview-modal",".rename-branch-overlay",".agent-request-modal",".adaptive-card-container",".adaptive-card-container input",".adaptive-card-container textarea",".adaptive-card-container select",".adaptive-card-container button"].join(", "),jk=[".agent-thinking",".agent-status-panel",".agent-thinking-intent"].join(", ");function MF(_){if(!_||!tA(_))return!1;let $=_.closest($k);if(!$)return!0;return Boolean($.closest(jk))}function TF(_,$){if(!Array.isArray(_))return $?[$]:[];let j=new Set,G=_.filter((X)=>Boolean(X&&typeof X==="object")).filter((X)=>{let Y=typeof X.chat_jid==="string"?X.chat_jid.trim():"";if(!Y||j.has(Y))return!1;if(X.archived_at)return!1;return j.add(Y),!0});G.sort((X,Y)=>{if(Boolean(X.is_active)!==Boolean(Y.is_active))return X.is_active?-1:1;return String(X.chat_jid).localeCompare(String(Y.chat_jid))});let Z=G.map((X)=>String(X.chat_jid).trim());if($&&!j.has($))Z.unshift($);return Z}function Qj(_){let $=TF(_.candidates,_.currentChatJid);if($.length<=1)return null;let j=$.indexOf(_.currentChatJid);if(j<0)return $[0]??null;let G=_.direction==="next"?(j+1)%$.length:(j-1+$.length)%$.length;return $[G]??null}function wF(_,$){let j=_.find((Z)=>Z.chat_jid===$);if(!j)return $.replace(/^[^:]+:/,"");return(typeof j.agent_name==="string"?j.agent_name.trim():"")||$.replace(/^[^:]+:/,"")}function Gk(_){let $=TF(_.candidates,_.currentChatJid);if($.length<=1)return{prev:null,next:null};let j=$.indexOf(_.currentChatJid);if(j<0)return{prev:null,next:null};let G=$[(j-1+$.length)%$.length],Z=$[(j+1)%$.length];return{prev:{chatJid:G,name:wF(_.candidates,G)},next:{chatJid:Z,name:wF(_.candidates,Z)}}}function Zk(_){let $=Number.isFinite(_.minDistancePx)?Number(_.minDistancePx):72,j=Number.isFinite(_.axisRatio)?Number(_.axisRatio):1.35;return Math.abs(_.dx)>=$&&Math.abs(_.dx)>Math.abs(_.dy)*j}function Xk(_){let $=document.querySelector(".chat-swipe-indicator");if(!$)$=document.createElement("div"),$.className="chat-swipe-indicator",$.innerHTML='<span class="chat-swipe-chevron"></span><span class="chat-swipe-name"></span>',document.body.appendChild($);return $}function Yk(_,$,j,G){let Z=Math.abs($),X=Math.min(Z/100,1),Y=Z>=72;_.style.display="flex",_.style.opacity=String(Math.min(X*2.5,1)),_.classList.toggle("chat-swipe-indicator--ready",Y);let q=$<0,L=q?G.next:G.prev,K=_.querySelector(".chat-swipe-chevron");if(K)K.textContent=q?"›":"‹",K.style.order=q?"2":"0";let Q=_.querySelector(".chat-swipe-name");if(Q)Q.textContent=L?.name??""}function J6(_){_.style.display="none",_.style.opacity="0"}function yF(_){let{timelineRef:$,activeChatAgents:j,currentChatJid:G,onSwitch:Z,isIOSDevice:X,isLikelySafari:Y}=_,q=$.current;if(!q)return()=>{};let L=X(),K=typeof Y==="function"?Y():!1;if(!L&&!K)return()=>{};let Q=eA(),V=_k(),F=null,B={prev:null,next:null},U=!1;function D(){B=Gk({candidates:j,currentChatJid:G})}D();function E(){if(!F)F=Xk(q);return F}function H(J){let M=J==="next"?B.next:B.prev;if(M)Z(M.chatJid)}function k(J){U=String(J.pointerType||"").toLowerCase()==="pen"}function z(J){if(Vj(Q),D(),!L)return;if(J.touches.length!==1)return;if(U)return;if(kF())return;if(!MF(J.target))return;let M=J.touches[0];Q.active=!0,Q.startX=M.clientX,Q.startY=M.clientY,Q.lastX=M.clientX,Q.lastY=M.clientY,Q.startedAt=Date.now()}function O(J){if(!Q.active||Q.cancelled)return;if(kF()){Q.cancelled=!0,J6(E());return}let M=J.touches[0];if(!M)return;Q.lastX=M.clientX,Q.lastY=M.clientY;let W=Q.lastX-Q.startX,w=Q.lastY-Q.startY;if(!Q.horizontalLocked){if(Math.abs(w)>16&&Math.abs(w)>=Math.abs(W)){Q.cancelled=!0,J6(E());return}if(Math.abs(W)>12&&Math.abs(W)>Math.abs(w)*1.15)Q.horizontalLocked=!0}if(Q.horizontalLocked){if(J.cancelable)J.preventDefault();Yk(E(),W,q.clientWidth,B)}}function y(){if(!Q.active)return;let J=Q.lastX-Q.startX,M=Q.lastY-Q.startY,W=!Q.cancelled&&Zk({dx:J,dy:M});if(J6(E()),Vj(Q),W)H(J<0?"next":"prev")}function I(){J6(E()),Vj(Q)}function A(J){if(L)return;if(!K)return;if(!MF(J.target))return;let{deltaX:M,deltaY:W}=J;if(!Number.isFinite(M)||Math.abs(M)<72)return;if(Math.abs(M)<=Math.abs(W)*1.35)return;if(J.cancelable)J.preventDefault();let w=Date.now();if(w-V.lastTriggeredAt<450)return;V.lastTriggeredAt=w,H(M>0?"next":"prev")}return q.addEventListener("pointerdown",k,{passive:!0}),q.addEventListener("touchstart",z,{passive:!0}),q.addEventListener("touchmove",O,{passive:!1}),q.addEventListener("touchend",y,{passive:!0}),q.addEventListener("touchcancel",I,{passive:!0}),q.addEventListener("wheel",A,{passive:!1}),()=>{if(q.removeEventListener("pointerdown",k),q.removeEventListener("touchstart",z),q.removeEventListener("touchmove",O),q.removeEventListener("touchend",y),q.removeEventListener("touchcancel",I),q.removeEventListener("wheel",A),F)J6(F),F.remove(),F=null}}function qk(_){return{currentChatJid:_.currentChatJid,followupQueueItemsRef:_.followupQueueItemsRef,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,refreshQueueState:_.refreshQueueState,setFollowupQueueItems:_.setFollowupQueueItems,showIntentToast:_.showIntentToast,clearQueuedSteerStateIfStale:_.clearQueuedSteerStateIfStale,steerAgentQueueItem:_.steerAgentQueueItem,removeAgentQueueItem:_.removeAgentQueueItem,refreshActiveChatAgents:_.refreshActiveChatAgents,refreshCurrentChatBranches:_.refreshCurrentChatBranches,refreshContextUsage:_.refreshContextUsage,refreshAutoresearchStatus:_.refreshAutoresearchStatus}}function Lk(_){return{currentChatJid:_.currentChatJid,currentRootChatJid:_.currentRootChatJid,isComposeBoxAgentActive:_.isComposeBoxAgentActive,showIntentToast:_.showIntentToast,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,refreshAutoresearchStatus:_.refreshAutoresearchStatus,stopAutoresearch:_.stopAutoresearch,dismissAutoresearch:_.dismissAutoresearch,streamSidePrompt:_.streamSidePrompt,btwAbortRef:_.btwAbortRef,btwSession:_.btwSession,setBtwSession:_.setBtwSession,sendAgentMessage:_.sendAgentMessage,handleMessageResponse:_.handleMessageResponse,dismissedLiveWidgetKeysRef:_.dismissedLiveWidgetKeysRef,setFloatingWidget:_.setFloatingWidget,getAgentStatus:_.getAgentStatus,getAgentContext:_.getAgentContext,getAgentQueueState:_.getAgentQueueState,getAgentModels:_.getAgentModels,getActiveChatAgents:_.getActiveChatAgents,getChatBranches:_.getChatBranches,getTimeline:_.getTimeline,rawPosts:_.rawPosts,activeChatAgents:_.activeChatAgents,currentChatBranches:_.currentChatBranches,contextUsage:_.contextUsage,followupQueueItemsRef:_.followupQueueItemsRef,activeModel:_.activeModel,activeThinkingLevel:_.activeThinkingLevel,supportsThinking:_.supportsThinking,isAgentTurnActive:_.isAgentTurnActive}}function Kk(_){return{setWorkspaceOpen:_.setWorkspaceOpen,currentChatJid:_.currentChatJid,chatOnlyMode:_.chatOnlyMode,navigate:_.navigate,currentBranchRecord:_.currentBranchRecord,renameBranchInFlightRef:_.renameBranchInFlightRef,renameBranchLockUntilRef:_.renameBranchLockUntilRef,getFormLock:_.getFormLock,setRenameBranchNameDraft:_.setRenameBranchNameDraft,setIsRenameBranchFormOpen:_.setIsRenameBranchFormOpen,setIsRenamingBranch:_.setIsRenamingBranch,renameChatBranch:_.renameChatBranch,refreshActiveChatAgents:_.refreshActiveChatAgents,refreshCurrentChatBranches:_.refreshCurrentChatBranches,showIntentToast:_.showIntentToast,currentChatBranches:_.currentChatBranches,activeChatAgents:_.activeChatAgents,pruneChatBranch:_.pruneChatBranch,purgeChatBranch:_.purgeChatBranch,restoreChatBranch:_.restoreChatBranch,branchLoaderMode:_.branchLoaderMode,branchLoaderSourceChatJid:_.branchLoaderSourceChatJid,forkChatBranch:_.forkChatBranch,createRootChatSession:_.createRootChatSession,setBranchLoaderState:_.setBranchLoaderState,currentRootChatJid:_.currentRootChatJid,isWebAppMode:_.isWebAppMode,getActiveChatAgents:_.getActiveChatAgents,getChatBranches:_.getChatBranches,setActiveChatAgents:_.setActiveChatAgents,setCurrentChatBranches:_.setCurrentChatBranches,openEditor:_.openEditor,activateTab:_.activateTab,tabStripActiveId:_.tabStripActiveId,editorInstanceRef:_.editorInstanceRef,dockInstanceRef:_.dockInstanceRef,terminalTabPath:_.terminalTabPath,tabPaneOverrides:_.tabPaneOverrides,buildPaneDetachTransfer:_.buildPaneDetachTransfer,registerDetachedPaneWindow:_.registerDetachedPaneWindow,dockVisible:_.dockVisible,resolveTab:_.resolveTab,closeTab:_.closeTab,setDockVisible:_.setDockVisible,editorOpen:_.editorOpen,shellElement:_.shellElement,editorWidthRef:_.editorWidthRef,dockHeightRef:_.dockHeightRef,sidebarWidthRef:_.sidebarWidthRef,readStoredNumber:_.readStoredNumber}}function Vk(_){return{hasDockPanes:_.hasDockPanes,chatOnlyMode:_.chatOnlyMode,toggleDock:_.toggleDock,toggleZenMode:_.toggleZenMode,exitZenMode:_.exitZenMode,zenMode:_.zenMode,previousChat:()=>{let $=Qj({candidates:_.activeChatAgents,currentChatJid:_.currentChatJid,direction:"prev"});if($)_.handleBranchPickerChange?.($)},nextChat:()=>{let $=Qj({candidates:_.activeChatAgents,currentChatJid:_.currentChatJid,direction:"next"});if($)_.handleBranchPickerChange?.($)}}}function xF(_){let $=EF(qk(_)),j=JF(Lk({..._,handleMessageResponse:$.handleMessageResponse})),G=GF(Kk(_));return AF(Vk({..._,handleBranchPickerChange:G.handleBranchPickerChange})),{followupActions:$,sidepanelActions:j,branchPaneActions:G}}function Qk(_,$){return Boolean(_||$!==null)}function Fk(_){return{..._.agentStatusLifecycleBundle,..._.actionBundle,timelineViewActions:_.timelineViewActions,isComposeBoxAgentActive:_.isComposeBoxAgentActive}}function Bk(_,$){let{routeState:j,searchState:G,shellState:Z,timeline:X,interaction:Y,paneRuntime:q,refs:L,setters:K,services:Q,helpers:V}=_;return{currentChatJid:j.currentChatJid,activeChatJidRef:L.activeChatJidRef,queueRefreshGenRef:L.queueRefreshGenRef,dismissedQueueRowIdsRef:L.dismissedQueueRowIdsRef,getAgentQueueState:Q.getAgentQueueState,setFollowupQueueItems:K.setFollowupQueueItems,clearQueuedSteerStateIfStale:Y.clearQueuedSteerStateIfStale,getAgentContext:Q.getAgentContext,setContextUsage:K.setContextUsage,getAutoresearchStatus:Q.getAutoresearchStatus,setExtensionStatusPanels:K.setExtensionStatusPanels,setPendingExtensionPanelActions:K.setPendingExtensionPanelActions,setExtensionWorkingState:K.setExtensionWorkingState,getAgentStatus:Q.getAgentStatus,wasAgentActiveRef:L.wasAgentActiveRef,viewStateRef:L.viewStateRef,refreshTimeline:X.refreshTimeline,clearAgentRunState:Y.clearAgentRunState,agentStatusRef:L.agentStatusRef,pendingRequestRef:L.pendingRequestRef,thoughtBufferRef:L.thoughtBufferRef,draftBufferRef:L.draftBufferRef,previewResyncPendingRef:L.previewResyncPendingRef,previewResyncGenerationRef:L.previewResyncGenerationRef,setAgentStatus:K.setAgentStatus,setAgentDraft:K.setAgentDraft,setAgentPlan:K.setAgentPlan,setAgentThought:K.setAgentThought,setPendingRequest:K.setPendingRequest,setActiveTurn:Y.setActiveTurn,noteAgentActivity:Y.noteAgentActivity,showLastActivity:Y.showLastActivity,clearLastActivityFlag:Y.clearLastActivityFlag,isAgentRunningRef:L.isAgentRunningRef,currentTurnIdRef:L.currentTurnIdRef,silentRecoveryRef:L.silentRecoveryRef,silenceRefreshMs:Q.silenceRefreshMs,lastAgentEventRef:L.lastAgentEventRef,lastSilenceNoticeRef:L.lastSilenceNoticeRef,silenceWarningMs:Q.silenceWarningMs,silenceFinalizeMs:Q.silenceFinalizeMs,isCompactionStatus:Q.isCompactionStatus,serverVersionContext:{currentAppAssetVersion:Q.currentAppAssetVersion,staleUiVersionRef:L.staleUiVersionRef,staleUiReloadScheduledRef:L.staleUiReloadScheduledRef,tabStoreHasUnsaved:Q.tabStoreHasUnsaved,isAgentRunningRef:L.isAgentRunningRef,pendingRequestRef:L.pendingRequestRef,showIntentToast:$},setConnectionStatus:K.setConnectionStatus,hasConnectedOnceRef:L.hasConnectedOnceRef,getAgents:Q.getAgents,setAgents:K.setAgents,setUserProfile:K.setUserProfile,applyBranding:Y.applyBranding,readStoredNumber:V.readStoredNumber,sidebarWidthRef:L.sidebarWidthRef,appShellRef:L.appShellRef,currentRootChatJid:j.currentRootChatJid,getAgentModels:Q.getAgentModels,getActiveChatAgents:Q.getActiveChatAgents,getChatBranches:Q.getChatBranches,setActiveChatAgents:K.setActiveChatAgents,setCurrentChatBranches:K.setCurrentChatBranches,setActiveModel:K.setActiveModel,setActiveThinkingLevel:K.setActiveThinkingLevel,setSupportsThinking:K.setSupportsThinking,setActiveModelUsage:K.setActiveModelUsage,setAgentModelsPayload:K.setAgentModelsPayload,setHasLoadedAgentModels:K.setHasLoadedAgentModels,agentsRef:L.agentsRef,currentHashtag:G.currentHashtag,searchQuery:G.searchQuery,searchScope:G.searchScope,loadPosts:X.loadPosts,searchPosts:Q.searchPosts,setPosts:X.setPosts,setHasMore:X.setHasMore,scrollToBottom:X.scrollToBottom,paneStateOwnerChatJidRef:L.paneStateOwnerChatJidRef,chatPaneStateByChatRef:L.chatPaneStateByChatRef,snapshotCurrentChatPaneState:Y.snapshotCurrentChatPaneState,restoreChatPaneState:Y.restoreChatPaneState,setFloatingWidget:K.setFloatingWidget,dismissedLiveWidgetKeysRef:L.dismissedLiveWidgetKeysRef,posts:X.posts,scrollToMessage:Y.composeReferenceActions.scrollToMessage,draftThrottleRef:L.draftThrottleRef,thoughtThrottleRef:L.thoughtThrottleRef,followupQueueItemsRef:L.followupQueueItemsRef,scrollToBottomRef:X.scrollToBottomRef,hasMoreRef:X.hasMoreRef,loadMoreRef:X.loadMoreRef,lastAgentResponseRef:L.lastAgentResponseRef,notifyForFinalResponse:Y.notifyForFinalResponse,setSteerQueuedTurnId:K.setSteerQueuedTurnId,refreshActiveEditorFromWorkspace:q.refreshActiveEditorFromWorkspace,showIntentToast:$,removeStalledPost:Y.recoveryCallbacks.removeStalledPost,preserveTimelineScrollTop:X.preserveTimelineScrollTop,finalizeStalledResponse:()=>{K.setExtensionWorkingState({message:null,indicator:null,visible:!0}),Y.recoveryCallbacks.finalizeStalledResponse()},connectionStatus:Z.connectionStatus,agentStatus:Q.agentStatus,thoughtExpandedRef:L.thoughtExpandedRef,draftExpandedRef:L.draftExpandedRef,steerQueuedTurnIdRef:L.steerQueuedTurnIdRef}}function IF(_){let{routeState:$,searchState:j,shellState:G,timeline:Z,interaction:X,paneRuntime:Y,refs:q,setters:L,services:K,helpers:Q}=_,V=X.composeReferenceActions.showIntentToast,F=WV({currentHashtag:j.currentHashtag,searchQuery:j.searchQuery,searchOpen:j.searchOpen,searchScope:j.searchScope,currentChatJid:$.currentChatJid,currentRootChatJid:$.currentRootChatJid,posts:Z.posts,loadPosts:Z.loadPosts,searchPosts:K.searchPosts,setCurrentHashtag:j.setCurrentHashtag,setSearchQuery:j.setSearchQuery,setSearchOpen:j.setSearchOpen,setSearchScope:j.setSearchScope,setPosts:Z.setPosts,setHasMore:Z.setHasMore,preserveTimelineScrollTop:Z.preserveTimelineScrollTop,setRemovingPostIds:L.setRemovingPostIds,deletePost:K.deletePost,hasMoreRef:Z.hasMoreRef,loadMoreRef:Z.loadMoreRef}),B=wQ(Bk(_,V)),U=Qk(K.isAgentTurnActive,K.agentStatus),D=xF({currentChatJid:$.currentChatJid,followupQueueItemsRef:q.followupQueueItemsRef,dismissedQueueRowIdsRef:q.dismissedQueueRowIdsRef,setFollowupQueueItems:L.setFollowupQueueItems,showIntentToast:V,clearQueuedSteerStateIfStale:X.clearQueuedSteerStateIfStale,steerAgentQueueItem:K.steerAgentQueueItem,removeAgentQueueItem:K.removeAgentQueueItem,refreshQueueState:B.agentStatusLifecycle.refreshQueueState,refreshActiveChatAgents:B.chatRefreshLifecycle.refreshActiveChatAgents,refreshCurrentChatBranches:B.chatRefreshLifecycle.refreshCurrentChatBranches,refreshContextUsage:B.agentStatusLifecycle.refreshContextUsage,refreshAutoresearchStatus:B.agentStatusLifecycle.refreshAutoresearchStatus,currentRootChatJid:$.currentRootChatJid,isComposeBoxAgentActive:U,setPendingExtensionPanelActions:L.setPendingExtensionPanelActions,stopAutoresearch:K.stopAutoresearch,dismissAutoresearch:K.dismissAutoresearch,streamSidePrompt:K.streamSidePrompt,btwAbortRef:q.btwAbortRef,btwSession:G.btwSession,setBtwSession:L.setBtwSession,sendAgentMessage:K.sendAgentMessage,dismissedLiveWidgetKeysRef:q.dismissedLiveWidgetKeysRef,setFloatingWidget:L.setFloatingWidget,getAgentStatus:K.getAgentStatus,getAgentContext:K.getAgentContext,getAgentQueueState:K.getAgentQueueState,getAgentModels:K.getAgentModels,getActiveChatAgents:K.getActiveChatAgents,getChatBranches:K.getChatBranches,getTimeline:K.getTimeline,rawPosts:Z.rawPosts,activeChatAgents:G.activeChatAgents,currentChatBranches:G.currentChatBranches,contextUsage:G.contextUsage,activeModel:G.activeModel,activeThinkingLevel:G.activeThinkingLevel,supportsThinking:G.supportsThinking,isAgentTurnActive:K.isAgentTurnActive,chatOnlyMode:$.chatOnlyMode,navigate:$.navigate,setWorkspaceOpen:G.setWorkspaceOpen,currentBranchRecord:G.currentBranchRecord,renameBranchInFlightRef:q.renameBranchInFlightRef,renameBranchLockUntilRef:q.renameBranchLockUntilRef,getFormLock:Q.getFormLock,setRenameBranchNameDraft:L.setRenameBranchNameDraft,setIsRenameBranchFormOpen:L.setIsRenameBranchFormOpen,setIsRenamingBranch:L.setIsRenamingBranch,renameChatBranch:K.renameChatBranch,pruneChatBranch:K.pruneChatBranch,purgeChatBranch:K.purgeChatBranch,restoreChatBranch:K.restoreChatBranch,branchLoaderMode:$.branchLoaderMode,branchLoaderSourceChatJid:$.branchLoaderSourceChatJid,forkChatBranch:K.forkChatBranch,createRootChatSession:K.createRootChatSession,setBranchLoaderState:L.setBranchLoaderState,isWebAppMode:$.isWebAppMode,setActiveChatAgents:L.setActiveChatAgents,setCurrentChatBranches:L.setCurrentChatBranches,openEditor:K.openEditor,tabStripActiveId:K.tabStripActiveId,editorInstanceRef:Y.editorInstanceRef,dockInstanceRef:Y.dockInstanceRef,terminalTabPath:K.terminalTabPath,tabPaneOverrides:K.tabPaneOverrides,buildPaneDetachTransfer:Y.buildPaneDetachTransfer,registerDetachedPaneWindow:Y.registerDetachedPaneWindow,dockVisible:Y.dockVisible,resolveTab:K.resolveTab,closeTab:K.closeTab,setDockVisible:Y.setDockVisible,editorOpen:K.editorOpen,shellElement:q.appShellRef.current,editorWidthRef:q.editorWidthRef,dockHeightRef:q.dockHeightRef,sidebarWidthRef:q.sidebarWidthRef,readStoredNumber:Q.readStoredNumber,hasDockPanes:Y.hasDockPanes,toggleDock:Y.toggleDock,toggleZenMode:Y.toggleZenMode,exitZenMode:Y.exitZenMode,zenMode:Y.zenMode});return Fk({agentStatusLifecycleBundle:B,actionBundle:D,timelineViewActions:F,isComposeBoxAgentActive:U})}x0();g_();x0();function CF(_){try{return _?.focus?.(),!0}catch($){return!1}}function A6(_,$){if(!_||!$)return null;try{return _.getItem($)}catch{return null}}function Fj(_,$,j){if(!_||!$)return;try{_.setItem($,j)}catch{return}}function fF(_,$){if(!_||!$)return;try{_.removeItem($)}catch{return}}function PF(_="piclaw"){try{if(typeof crypto<"u"&&typeof crypto.randomUUID==="function")return`${_}-${crypto.randomUUID()}`}catch($){console.debug("[notification-delivery-coordinator] crypto.randomUUID threw; falling back to Math.random-based id.",$)}return`${_}-${Math.random().toString(36).slice(2)}-${Date.now().toString(36)}`}function s$(_=typeof window<"u"?window:null){let $=_?.localStorage,j=A6($,"piclaw.notifications.deviceId");if(j)return j;let G=PF("device");return Fj($,"piclaw.notifications.deviceId",G),A6($,"piclaw.notifications.deviceId")||G}function k6(_=typeof window<"u"?window:null){let $=_?.sessionStorage,j=A6($,"piclaw.notifications.clientId");if(j)return j;let G=_?.__PICLAW_NOTIFICATION_CLIENT_ID__;if(typeof G==="string"&&G.trim())return G.trim();let Z=PF("client");if(Fj($,"piclaw.notifications.clientId",Z),_)_.__PICLAW_NOTIFICATION_CLIENT_ID__=A6($,"piclaw.notifications.clientId")||Z;return _?.__PICLAW_NOTIFICATION_CLIENT_ID__||Z}function RF(_,$){return`piclaw.notifications.presence.${String(_||"").trim()}:${String($||"").trim()}`}function Bj(_={}){let $=_.runtimeWindow??(typeof window<"u"?window:null),j=_.runtimeDocument??(typeof document<"u"?document:null),G=typeof _.chatJid==="string"&&_.chatJid.trim()?_.chatJid.trim():"",Z=typeof _.deviceId==="string"&&_.deviceId.trim()?_.deviceId.trim():s$($),X=typeof _.clientId==="string"&&_.clientId.trim()?_.clientId.trim():k6($),Y=Number.isFinite(_.updatedAtMs)?Number(_.updatedAtMs):Date.now(),q=Boolean(typeof j?.hasFocus==="function"?j.hasFocus():!0),K=String(j?.visibilityState||"").trim().toLowerCase()==="hidden"?"hidden":"visible";return{deviceId:Z,clientId:X,chatJid:G,visibilityState:K,hasFocus:q,updatedAtMs:Y}}function SF(_,$=typeof window<"u"?window:null){let j=$?.localStorage,G=typeof _?.deviceId==="string"?_.deviceId.trim():"",Z=typeof _?.clientId==="string"?_.clientId.trim():"",X=typeof _?.chatJid==="string"?_.chatJid.trim():"";if(!j||!G||!Z||!X)return!1;return Fj(j,RF(G,Z),JSON.stringify({deviceId:G,clientId:Z,chatJid:X,visibilityState:_.visibilityState==="hidden"?"hidden":"visible",hasFocus:Boolean(_.hasFocus),updatedAtMs:Number.isFinite(_.updatedAtMs)?Number(_.updatedAtMs):Date.now()})),!0}function gF(_,$=typeof window<"u"?window:null){let j=$?.localStorage,G=typeof _?.deviceId==="string"?_.deviceId.trim():"",Z=typeof _?.clientId==="string"?_.clientId.trim():"";if(!j||!G||!Z)return!1;return fF(j,RF(G,Z)),!0}function Nk(_={}){let $=_.runtimeWindow??(typeof window<"u"?window:null),j=$?.localStorage,G=typeof _.deviceId==="string"&&_.deviceId.trim()?_.deviceId.trim():s$($),Z=Number.isFinite(_.nowMs)?Number(_.nowMs):Date.now(),X=Number.isFinite(_.ttlMs)?Number(_.ttlMs):120000;if(!j||!G)return[];let Y=`piclaw.notifications.presence.${G}:`,q=[],L=[];for(let K=0;K<j.length;K+=1){let Q=j.key(K);if(!Q||!Q.startsWith(Y))continue;let V=A6(j,Q);if(!V){L.push(Q);continue}try{let F=JSON.parse(V),B=Number(F?.updatedAtMs);if(!Number.isFinite(B)||Z-B>X){L.push(Q);continue}let U=typeof F?.chatJid==="string"?F.chatJid.trim():"",D=typeof F?.clientId==="string"?F.clientId.trim():"";if(!U||!D){L.push(Q);continue}q.push({deviceId:G,clientId:D,chatJid:U,visibilityState:F?.visibilityState==="hidden"?"hidden":"visible",hasFocus:Boolean(F?.hasFocus),updatedAtMs:B})}catch{L.push(Q)}}return L.forEach((K)=>fF(j,K)),q.sort((K,Q)=>K.clientId.localeCompare(Q.clientId))}function uF(_={}){let $=Bj(_),j=$.chatJid;if(!j)return!1;let G=Nk({runtimeWindow:_.runtimeWindow,deviceId:$.deviceId,nowMs:$.updatedAtMs,ttlMs:_.ttlMs}).filter((Y)=>Y.chatJid===j&&Y.clientId!==$.clientId),Z=[$,...G];if(Z.some((Y)=>Y.visibilityState==="visible"))return!1;let X=[...Z].sort((Y,q)=>Y.clientId.localeCompare(q.clientId))[0]||null;return Boolean(X&&X.clientId===$.clientId)}function Uk(_=typeof window<"u"?window:null){return Boolean(_?.__PICLAW_NOTIFICATION_SOURCE_LABELS_ENABLED__)}function Hk(_,$="",j=typeof window<"u"?window:null){let G=typeof _==="string"&&_.trim()?_.trim():"PiClaw",Z=Uk(j)&&typeof $==="string"?$.trim():"";return Z?`${G} [${Z}]`:G}function Ek(_){let $=String(_||"").replace(/-/g,"+").replace(/_/g,"/"),j=$.padEnd(Math.ceil($.length/4)*4,"="),G=atob(j),Z=new Uint8Array(G.length);for(let X=0;X<G.length;X+=1)Z[X]=G.charCodeAt(X);return Z}function M8(_=typeof window<"u"?window:null){if(!_||!_.isSecureContext)return!1;return"serviceWorker"in _.navigator&&"PushManager"in _}async function vF(_){return await _.navigator.serviceWorker.register("/sw.js",{updateViaCache:"none"}),await _.navigator.serviceWorker.ready}async function Dk(_){let $=await vF(_),j=await $.pushManager.getSubscription();if(j)return j;let G=await e3(),Z=typeof G?.publicKey==="string"?G.publicKey.trim():"";if(!Z)throw Error("Missing web push public key.");return $.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Ek(Z)})}async function bF(_,$){if(!M8(_))return!1;let j=await Dk(_);return await _7(j.toJSON?j.toJSON():j,{deviceId:$}),!0}async function Wk(_,$){if(!M8(_))return!1;let G=await(await vF(_)).pushManager.getSubscription();if(!G)return!1;let Z=G.toJSON?G.toJSON():G;try{await $7(Z,{deviceId:$})}catch(X){console.warn("Failed to remove web push subscription from the server:",X)}try{await G.unsubscribe()}catch(X){console.warn("Failed to unsubscribe from web push notifications:",X)}return!0}function Ok(_,$={}){let j=$.runtimeWindow??(typeof window<"u"?window:null);if(!j?.fetch)return Promise.resolve(!1);return j.fetch("/agent/push/presence",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_),keepalive:Boolean($.keepalive)}).then(()=>!0).catch(()=>!1)}function zk(_,$=typeof window<"u"?window:null){try{if($?.navigator?.sendBeacon){let j=new Blob([JSON.stringify(_)],{type:"application/json"});return $.navigator.sendBeacon("/agent/push/presence",j)}}catch(j){console.debug("[use-notifications] Ignoring sendBeacon failure for best-effort notification presence teardown.",j,{hasNavigator:Boolean($?.navigator)})}return!1}function mF(_={}){let $=typeof _?.chatJid==="string"&&_.chatJid.trim()?_.chatJid.trim():"web:default",[j,G]=C(!1),[Z,X]=C("default"),Y=u(!1),q=u(null),L=u(null);g(()=>{let B=V$("notificationsEnabled",!1);if(Y.current=B,G(B),typeof window<"u")q.current=s$(window),L.current=k6(window);if(typeof Notification>"u")return;let U=Notification.permission;if(X(U),U==="denied"&&B){Y.current=!1,G(!1),Q_("notificationsEnabled","false");return}if(U==="granted"&&B&&typeof window<"u"&&M8(window))bF(window,q.current||s$(window)).catch((D)=>{console.warn("Failed to refresh stored web push subscription:",D)})},[]),g(()=>{Y.current=j},[j]),g(()=>{if(typeof window>"u"||typeof document>"u")return;let B=q.current||s$(window),U=L.current||k6(window);q.current=B,L.current=U;let D=(z=!0,O="fetch")=>{let y=Bj({chatJid:$,runtimeWindow:window,runtimeDocument:document,deviceId:B,clientId:U});if(z)SF(y,window);else gF({deviceId:B,clientId:U},window);let I={device_id:B,client_id:U,chat_jid:$,visibility_state:y.visibilityState,has_focus:y.hasFocus,active:z};if(!z&&O==="beacon"&&zk(I,window))return;Ok(I,{runtimeWindow:window,keepalive:!z||O==="keepalive"})},E=()=>D(!0),H=()=>D(!1,"beacon");D(!0);let k=setInterval(()=>D(!0),15000);return document.addEventListener("visibilitychange",E),window.addEventListener("focus",E),window.addEventListener("blur",E),window.addEventListener("pageshow",E),window.addEventListener("pagehide",H),window.addEventListener("beforeunload",H),()=>{clearInterval(k),document.removeEventListener("visibilitychange",E),window.removeEventListener("focus",E),window.removeEventListener("blur",E),window.removeEventListener("pageshow",E),window.removeEventListener("pagehide",H),window.removeEventListener("beforeunload",H),D(!1,"beacon")}},[$]);let K=f(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let B=Notification.requestPermission();if(B&&typeof B.then==="function")return B;return Promise.resolve(B)}catch(B){return console.debug("[use-notifications] Notification permission request threw; returning default permission state.",B),Promise.resolve("default")}},[]),Q=f(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){X("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let D=await K();if(X(D||"default"),D!=="granted"){Y.current=!1,G(!1),Q_("notificationsEnabled","false");return}}let B=!Y.current;Y.current=B,G(B),Q_("notificationsEnabled",String(B));let U=q.current||s$(window);if(q.current=U,M8(window))try{if(B)await bF(window,U);else await Wk(window,U)}catch(D){if(console.warn("Failed to sync web push notifications:",D),B)alert("Notifications were enabled, but web push setup failed. If you are on iPhone or iPad, reopen PiClaw from the Home Screen and try again.")}},[K]),V=f((B,U,D={})=>{if(!Y.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let E=new Notification(Hk(B,D?.sourceLabel||"",window),{body:U});return E.onclick=()=>{CF(window)},!0}catch(E){return console.debug("[use-notifications] Local notification creation failed.",E,{title:typeof B==="string"?B:null}),!1}},[]),F=f((B)=>{if(typeof window>"u"||typeof document>"u")return!1;return uF({chatJid:typeof B==="string"&&B.trim()?B.trim():$,runtimeWindow:window,runtimeDocument:document,deviceId:q.current||s$(window),clientId:L.current||k6(window)})},[$]);return{notificationsEnabled:j,notificationPermission:Z,toggleNotifications:Q,notify:V,shouldNotifyLocallyForChat:F}}function Jk(_){let{activeChatAgents:$,currentChatBranches:j,currentChatJid:G}=_,Z=j.find((X)=>X?.chat_jid===G);if(Z)return Z;return $.find((X)=>X?.chat_jid===G)||null}function Ak(_){return{status:_?"running":"idle",message:_?"Preparing a new chat branch…":""}}function kk(_,$){let j=typeof $?.root_chat_jid==="string"?$.root_chat_jid.trim():"";if(j)return j;let G=typeof _==="string"?_.trim():"";if(!G)return"web:default";let Z=G.indexOf(":branch:");if(Z<=0)return G;return G.slice(0,Z)||G}function cF(_){let{currentChatJid:$,branchLoaderMode:j}=_,[G,Z]=C("disconnected"),[X,Y]=C(()=>I1()),[q,L]=C(null),[K,Q]=C(null),[V,F]=C(!1),[B,U]=C("current"),[D,E]=C([]),[H,k]=C([]),[z,O]=C(null),[y,I]=C({}),[A,J]=C(null),[M,W]=C(null),[w,x]=C(!1),[P,R]=C(null),[v,c]=C(null),[h,r]=C(!1),[b,a]=C([]),[t,q0]=C([]),[Z0,D0]=C(null),[Q0,L0]=C(()=>new Map),[N0,H0]=C(()=>new Set),[y0,o]=C(()=>({message:null,indicator:null,visible:!0})),[j0,O0]=C([]),[P0,m0]=C(!1),[l0,G_]=C(()=>qK()),[h0,c0]=C(null),[M0,p0]=C(null),b0=u(new Set),d0=X0(()=>Jk({activeChatAgents:b,currentChatBranches:t,currentChatJid:$}),[b,t,$]),H_=X0(()=>kk($,d0),[d0,$]),E_=YK(B),[K_,S0]=C(()=>Ak(j)),A0=j0.length,r0=u(new Set),q_=u([]),O_=u(new Set),F0=u(0),w0=u({inFlight:!1,lastAttemptAt:0,turnId:null});r0.current=new Set(j0.map((M1)=>M1.row_id)),q_.current=j0;let{notificationsEnabled:C0,notificationPermission:U_,toggleNotifications:A_,notify:V_,shouldNotifyLocallyForChat:X_}=mF({chatJid:$}),[D_,M_]=C(()=>new Set),[$0,z0]=C(()=>wK({allowLegacyFallback:!0,defaultValue:!1})),[k0,g0]=C({name:"You",avatar_url:null,avatar_background:null}),v0=u(null),e=u(!1),s=u(!1),d=u(!1),Y0=u(null),G0=u($),E0=u(new Map),I0=u($),t0=u(0),J0=u(0),R0=u({}),Z_=u({name:null,avatar_url:null}),L_=u({currentHashtag:null,searchQuery:null,searchOpen:!1}),$_=u(null),B_=u(null),k_=u(0),e0=u(0),_0=u(0),W0=u(null),s0=u(null),i0=u(null),f_=u(null),z_=u(0),x_=u({title:null,avatarBase:null}),i1=u(null),J_=u(!1),[d_,O1]=C(!1),b_=u(0),[n_,q1]=C(!1),[__,v_]=C(""),i_=X0(()=>l2(__,d0?.agent_name||""),[d0?.agent_name,__]),L1=u(null);return{connectionStatus:G,setConnectionStatus:Z,isWebAppMode:X,setIsWebAppMode:Y,currentHashtag:q,setCurrentHashtag:L,searchQuery:K,setSearchQuery:Q,searchOpen:V,setSearchOpen:F,searchScope:B,setSearchScope:U,fileRefs:D,setFileRefs:E,messageRefs:H,setMessageRefs:k,intentToast:z,setIntentToast:O,agents:y,setAgents:I,activeModel:A,setActiveModel:J,activeThinkingLevel:M,setActiveThinkingLevel:W,supportsThinking:w,setSupportsThinking:x,activeModelUsage:P,setActiveModelUsage:R,agentModelsPayload:v,setAgentModelsPayload:c,hasLoadedAgentModels:h,setHasLoadedAgentModels:r,activeChatAgents:b,setActiveChatAgents:a,currentChatBranches:t,setCurrentChatBranches:q0,contextUsage:Z0,setContextUsage:D0,extensionStatusPanels:Q0,setExtensionStatusPanels:L0,pendingExtensionPanelActions:N0,setPendingExtensionPanelActions:H0,extensionWorkingState:y0,setExtensionWorkingState:o,followupQueueItems:j0,setFollowupQueueItems:O0,isAgentTurnActive:P0,setIsAgentTurnActive:m0,btwSession:l0,setBtwSession:G_,floatingWidget:h0,setFloatingWidget:c0,attachmentPreview:M0,setAttachmentPreview:p0,dismissedLiveWidgetKeysRef:b0,currentBranchRecord:d0,currentRootChatJid:H_,activeSearchScopeLabel:E_,branchLoaderState:K_,setBranchLoaderState:S0,followupQueueCount:A0,followupQueueRowIdsRef:r0,followupQueueItemsRef:q_,dismissedQueueRowIdsRef:O_,queueRefreshGenRef:F0,silentRecoveryRef:w0,notificationsEnabled:C0,notificationPermission:U_,handleToggleNotifications:A_,notify:V_,shouldNotifyLocallyForChat:X_,removingPostIds:D_,setRemovingPostIds:M_,workspaceOpen:$0,setWorkspaceOpen:z0,userProfile:k0,setUserProfile:g0,staleUiVersionRef:v0,staleUiReloadScheduledRef:e,hasConnectedOnceRef:s,wasAgentActiveRef:d,agentStatusRef:Y0,activeChatJidRef:G0,chatPaneStateByChatRef:E0,paneStateOwnerChatJidRef:I0,draftThrottleRef:t0,thoughtThrottleRef:J0,agentsRef:R0,userProfileRef:Z_,viewStateRef:L_,timelineRef:$_,appShellRef:B_,sidebarWidthRef:k_,editorWidthRef:e0,dockHeightRef:_0,lastNotifiedIdRef:W0,lastAgentResponseRef:s0,btwAbortRef:i0,lastActivityTimerRef:f_,lastActivityTokenRef:z_,brandingRef:x_,intentToastTimerRef:i1,renameBranchInFlightRef:J_,isRenamingBranch:d_,setIsRenamingBranch:O1,renameBranchLockUntilRef:b_,isRenameBranchFormOpen:n_,setIsRenameBranchFormOpen:q1,renameBranchNameDraft:__,setRenameBranchNameDraft:v_,renameBranchDraftState:i_,renameBranchNameInputRef:L1}}x0();x0();function Mk(_,$,j,G){if(!(_ instanceof Map)||_.size===0||!$||!j)return _;let Z=!1,X=new Map;for(let[Y,q]of _.entries()){let L=Y;if(G==="dir"){if(Y===$)L=j,Z=!0;else if(Y.startsWith(`${$}/`))L=`${j}${Y.slice($.length)}`,Z=!0}else if(Y===$)L=j,Z=!0;X.set(L,q)}return Z?X:_}function lF(_,$,j,G){if(!(_ instanceof Set)||_.size===0||!$||!j)return _;let Z=!1,X=new Set;for(let Y of _.values()){let q=Y;if(G==="dir"){if(Y===$)q=j,Z=!0;else if(Y.startsWith(`${$}/`))q=`${j}${Y.slice($.length)}`,Z=!0}else if(Y===$)q=j,Z=!0;X.add(q)}return Z?X:_}function hF({onTabClosed:_}={}){let $=u(_);$.current=_;let[j,G]=C(()=>a0.getTabs()),[Z,X]=C(()=>a0.getActiveId()),[Y,q]=C(()=>a0.getTabs().length>0);g(()=>{return a0.onChange((x,P)=>{G(x),X(P),q(x.length>0)})},[]);let[L,K]=C(()=>new Set),[Q,V]=C(()=>new Set),[F,B]=C(()=>new Map),U=f((x)=>{K((P)=>{let R=new Set(P);if(R.has(x))R.delete(x);else R.add(x);return R})},[]),D=f((x)=>{K((P)=>{if(!P.has(x))return P;let R=new Set(P);return R.delete(x),R})},[]),E=f((x)=>{V((P)=>{if(!P.has(x))return P;let R=new Set(P);return R.delete(x),R})},[]),H=f((x)=>{B((P)=>{if(!P.has(x))return P;let R=new Map(P);return R.delete(x),R})},[]),k=f((x,P={})=>{if(!x)return;let R=typeof P?.paneOverrideId==="string"&&P.paneOverrideId.trim()?P.paneOverrideId.trim():null,v={path:x,mode:"edit"};try{if(!(R?Y_.get(R):Y_.resolve(v))){if(!Y_.get("editor")){console.warn(`[openEditor] No pane handler for: ${x}`);return}}}catch(b){console.warn(`[openEditor] paneRegistry.resolve() error for "${x}":`,b)}let c=typeof P?.label==="string"&&P.label.trim()?P.label.trim():void 0,h=P?.viewState&&typeof P.viewState==="object"?P.viewState:null,r=P?.diffMode==="saved"?"saved":null;if(a0.open(x,c),h)a0.saveViewState(x,h);if(R)B((b)=>{if(b.get(x)===R)return b;let a=new Map(b);return a.set(x,R),a});if(r==="saved")V((b)=>{if(b.has(x))return b;let a=new Set(b);return a.add(x),a})},[]),z=f(()=>{let x=a0.getActiveId();if(x){let P=a0.get(x);if(P?.dirty){if(!window.confirm(`"${P.label}" has unsaved changes. Close anyway?`))return}a0.close(x),D(x),E(x),H(x),$.current?.(x)}},[E,H,D]),O=f((x)=>{let P=a0.get(x);if(P?.dirty){if(!window.confirm(`"${P.label}" has unsaved changes. Close anyway?`))return}a0.close(x),D(x),E(x),H(x),$.current?.(x)},[E,H,D]),y=f((x)=>{a0.activate(x)},[]),I=f((x)=>{let P=a0.getTabs().filter((c)=>c.id!==x&&!c.pinned),R=P.filter((c)=>c.dirty).length;if(R>0){if(!window.confirm(`${R} unsaved tab${R>1?"s":""} will be closed. Continue?`))return}let v=P.map((c)=>c.id);a0.closeOthers(x),v.forEach((c)=>{D(c),E(c),H(c),$.current?.(c)})},[E,H,D]),A=f(()=>{let x=a0.getTabs().filter((v)=>!v.pinned),P=x.filter((v)=>v.dirty).length;if(P>0){if(!window.confirm(`${P} unsaved tab${P>1?"s":""} will be closed. Continue?`))return}let R=x.map((v)=>v.id);a0.closeAll(),R.forEach((v)=>{D(v),E(v),H(v),$.current?.(v)})},[E,H,D]),J=f((x)=>{a0.togglePin(x)},[]),M=f((x)=>{if(!x)return;V((P)=>{let R=new Set(P);if(R.has(x))R.delete(x);else R.add(x);return R}),a0.activate(x)},[]),W=f((x)=>{if(!x)return;B((P)=>{if(P.get(x)==="editor")return P;let R=new Map(P);return R.set(x,"editor"),R}),a0.activate(x)},[]),w=f(()=>{let x=a0.getActiveId();if(x)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:x}}))},[]);return g(()=>{let x=(P)=>{let{oldPath:R,newPath:v,type:c}=P.detail||{};if(!R||!v)return;if(c==="dir"){for(let h of a0.getTabs())if(h.path===R||h.path.startsWith(`${R}/`)){let r=`${v}${h.path.slice(R.length)}`;a0.rename(h.id,r)}}else a0.rename(R,v);K((h)=>lF(h,R,v,c)),V((h)=>lF(h,R,v,c)),B((h)=>Mk(h,R,v,c))};return window.addEventListener("workspace-file-renamed",x),()=>window.removeEventListener("workspace-file-renamed",x)},[]),g(()=>{let x=(P)=>{if(a0.hasUnsaved())P.preventDefault(),P.returnValue=""};return window.addEventListener("beforeunload",x),()=>window.removeEventListener("beforeunload",x)},[]),{editorOpen:Y,tabStripTabs:j,tabStripActiveId:Z,previewTabs:L,diffTabs:Q,tabPaneOverrides:F,openEditor:k,closeEditor:z,handleTabClose:O,handleTabActivate:y,handleTabCloseOthers:I,handleTabCloseAll:A,handleTabTogglePin:J,handleTabTogglePreview:U,handleTabToggleDiff:M,handleTabEditSource:W,revealInExplorer:w}}x0();function r1(_){return typeof _==="string"&&_.trim()?_.trim():null}function wk(_=globalThis){try{return typeof _?.crypto?.randomUUID==="function"?_.crypto.randomUUID():null}catch($){return null}}function T4(_="pane"){let $=wk();if($)return`${_}-${$}`;return`${_}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}function pF(_){let $=r1(_?.paneInstanceId),j=r1(_?.paneWindowId);if(!$||!j)return{};let G=r1(_?.paneSourceWindowId);return{pane_instance_id:$,pane_window_id:j,...G?{pane_source_window_id:G}:{}}}function nF(_={}){let $=new URLSearchParams(_.search||"");return{panePath:r1($.get("pane_path"))||r1(_.panePath),paneLabel:r1($.get("pane_label"))||r1(_.paneLabel),paneInstanceId:r1($.get("pane_instance_id")),paneWindowId:r1($.get("pane_window_id")),paneSourceWindowId:r1($.get("pane_source_window_id"))}}function y4(_){return Boolean(_?.panePath&&_?.paneInstanceId&&_?.paneWindowId)}function d1(_){return typeof _==="string"&&_.trim()?_.trim():null}function rF(_){let $=d1(_?.panePath),j=d1(_?.paneInstanceId),G=d1(_?.ownerWindowId);if(!$||!j||!G)return null;let Z=d1(_?.now)||new Date().toISOString();return{panePath:$,paneInstanceId:j,ownerWindowId:G,detachedAt:Z,requestedAt:Z,label:d1(_?.label),sourceWindowId:d1(_?.sourceWindowId)}}function Nj(_,$){if(!_||!$)return!1;return d1($.panePath)===_.panePath&&d1($.paneInstanceId)===_.paneInstanceId&&d1($.paneWindowId)===_.ownerWindowId}function Uj(_,$){if(!_)return null;return{panePath:_.panePath,paneInstanceId:_.paneInstanceId,ownerWindowId:_.ownerWindowId,detachedAt:d1($)||new Date().toISOString(),label:_.label||null}}function w8(_){try{return _?.close?.(),!0}catch($){return!1}}function Hj(_,$,j){try{return _?.postMessage?.($,j),!0}catch(G){return!1}}function Tk(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return!1;if(_.openTabIds?.has($))return!0;if(_.pendingDetachedTabPaths?.has?.($))return!0;if(_.detachedTabPaths?.has?.($))return!0;if($===_.terminalTabPath)return Boolean(_.hasPendingDetachedDockPane||_.hasDetachedDockPane);return!1}function dF(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return;let j=_?.sourceHost==="dock"?"dock":"tab";if($===_.terminalTabPath&&j==="dock"){_.setDockVisible?.(!1);return}_.closeTab?.($)}var yk=400;function xk(_){let $=Array.isArray(_?.changed_paths)?_.changed_paths.map((G)=>typeof G==="string"?G.trim():"").filter(Boolean):[];if($.length>0)return $;let j=typeof _?.path==="string"?_.path.trim():"";return j?[j]:["."]}function Ik(_,$){if(!_)return!1;if(!Array.isArray($)||$.length===0)return!0;return $.some((j)=>{return xk(j).some((Z)=>Z==="."||Z===_)})}async function iF(_,$){if(typeof _?.afterAttachToHost!=="function")return;await _.afterAttachToHost($)}function Ck(_=typeof document<"u"?document:null){if(!_)return!0;let $=typeof _.visibilityState==="string"?_.visibilityState:"";return!$||$==="visible"}function x8(_=typeof navigator<"u"?navigator:null){if(!_)return!1;let $=String(_.userAgent||""),j=String(_.vendor||""),G=/AppleWebKit/i.test($),Z=/Safari/i.test($),X=/Chrome|Chromium|CriOS|EdgiOS|EdgA|Edg\//i.test($),Y=/FxiOS/i.test($);return G&&(j.includes("Apple")||Z)&&!X&&!Y}function oF(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return!1;if($!==_.terminalTabPath)return!1;if((_?.reason==="message"?"message":"closed-window")==="closed-window")return!0;return _?.allowLiveTransfer===!1}function T8(_){if(!oF(_))return!1;return x8(_?.runtimeNavigator)}function y8(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$||$!==_?.terminalTabPath)return!1;return x8(_?.runtimeNavigator)}function O5(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return!1;return $!==_?.terminalTabPath}function fk(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return null;let j=_?.runtime??globalThis,G=typeof _?.nowMs==="number"?_.nowMs:Date.now(),Z=typeof _?.paneInstanceId==="string"?_.paneInstanceId.trim():"",X=typeof _?.paneOverrideId==="string"?_.paneOverrideId.trim():"",Y=typeof _?.terminalTabPath==="string"?_.terminalTabPath:"piclaw://terminal",q=_?.allowLiveTransfer!==!1,L=_?.instance||null,K=typeof L?.exportHostTransferState==="function"?L.exportHostTransferState():null,Q=$===Y,V=K&&!Q?A8({path:$,payload:K},j,G):null,F=null;if($!==Y){let B=K&&typeof K==="object"?typeof K.mtime==="string"?K.mtime:K.mtime===null?null:void 0:void 0,U=typeof L?.isDirty==="function"?L.isDirty():!1,D=typeof L?.getContent==="function"?L.getContent():void 0;F=o6({path:$,content:U?D:void 0,mtime:B,paneOverrideId:X||null,viewState:_?.viewState||null},j,G)}return{type:"piclaw-pane-reattach-request",panePath:$,...Z?{paneInstanceId:Z}:{},...F?.editor_popout?{editorPopoutToken:F.editor_popout}:{},...V?.pane_transfer?{paneTransferToken:V.pane_transfer}:{},...Q&&K?{paneTransferPayload:K}:{},...q?{}:{allowLiveTransfer:!1}}}function Pk(_){let $=typeof _?.payload?.panePath==="string"?_.payload.panePath.trim():"";if(!$)return null;let j=_?.runtime??globalThis,G=typeof _?.nowMs==="number"?_.nowMs:Date.now(),Z=typeof _?.payload?.paneInstanceId==="string"&&_.payload.paneInstanceId.trim()?_.payload.paneInstanceId.trim():null,X=typeof _?.payload?.editorPopoutToken==="string"?_.payload.editorPopoutToken.trim():"",Y=typeof _?.payload?.paneTransferToken==="string"?_.payload.paneTransferToken.trim():"",q=_?.payload?.paneTransferPayload&&typeof _.payload.paneTransferPayload==="object"&&!Array.isArray(_.payload.paneTransferPayload)?_.payload.paneTransferPayload:null,L=X?X3(X,j,G):null,K=q?{panePath:$,path:$,payload:q,capturedAt:G}:Y?Lj(Y,j,G):null;return{panePath:$,paneInstanceId:Z,editorTransfer:L?.path===$?L:null,hostTransfer:K?.path===$?K:null,allowLiveTransfer:_?.payload?.allowLiveTransfer!==!1}}function sF(_){let{panePopoutMode:$,panePopoutPath:j,panePopoutLabel:G,chatOnlyMode:Z,editorOpen:X,tabStripTabs:Y,tabStripActiveId:q,previewTabs:L,diffTabs:K,tabPaneOverrides:Q,terminalTabPath:V,vncTabPrefix:F,openEditor:B,closeEditor:U,getWorkspaceFile:D}=_,E=u(null),H=u(null),k=u(null),z=u(null),O=u((()=>{if(!$)return null;let e=c4("editor_popout");return X3(e)})()),y=u((()=>{if(!$)return null;return CQ()})()),I=u(nF({search:typeof window<"u"?window.location.search:"",panePath:j,paneLabel:G})),A=u(I.current.paneWindowId||T4("pane-window")),J=u(new Map),M=u(new Map),W=u(new Map),w=u(new Map),x=u(!1),P=u(new Map),R=u(T4("pane-instance")),v=u(new Map),c=u(new Map),h=u(new Set),[r,b]=C(()=>new Map),a=u(r);a.current=r;let[t,q0]=C(()=>new Map),Z0=u(t);Z0.current=t;let[D0,Q0]=C(null),L0=u(D0);L0.current=D0;let[N0,H0]=C(null),y0=u(N0);y0.current=N0;let o=Y_.getDockPanes().length>0,[j0,O0]=C(!1),P0=f(()=>O0((e)=>!e),[]),m0=f(()=>{B(V,{label:"Terminal"})},[B,V]),l0=f(()=>{B(F,{label:"VNC"})},[B,F]),G_=f((e)=>{let s=typeof e==="string"?e.trim():"";if(!s)return T4("pane-instance");if(s===V&&!a0.get(s)){if(!R.current)R.current=T4("pane-instance");return R.current}let Y0=P.current.get(s);if(Y0)return Y0;let G0=T4("pane-instance");return P.current.set(s,G0),G0},[V]),h0=X0(()=>!$&&q?t.get(q)||null:null,[t,$,q]),c0=!$?N0:null,M0=f((e)=>{if(!e)return;fQ(e),c.current.delete(e),h.current.delete(e),Q0((s)=>s?.panePath===e?null:s),b((s)=>{if(!s.has(e))return s;let d=new Map(s);return d.delete(e),d})},[]),p0=f((e)=>{if(!e)return;v.current.delete(e),c.current.delete(e),h.current.delete(e),M0(e),H0((s)=>s?.panePath===e?null:s),q0((s)=>{if(!s.has(e))return s;let d=new Map(s);return d.delete(e),d})},[M0]),b0=f((e,s={})=>{let d=typeof e==="string"?e.trim():"";if(!d)return!1;if(y8({panePath:d,terminalTabPath:V}))return!1;let Y0=v.current.get(d),G0=Boolean(Z0.current.get(d)),E0=Boolean(y0.current?.panePath===d);if(p0(d),d===V&&E0&&!G0)O0(!0);else if(d===V&&G0)B(d,{label:"Terminal"});else if(a0.get(d))a0.activate(d);else B(d);if(s.closeDetachedWindow!==!1&&Y0&&typeof Y0.close==="function")w8(Y0);return!0},[p0,B,O0,V]),d0=f(()=>{if($)return;if(!Ck())return;let e=Date.now();for(let[s,d]of c.current.entries()){if(d>e)continue;c.current.delete(s),b0(s,{closeDetachedWindow:!1})}},[$,b0]),H_=f((e,s={})=>{let d=typeof e==="string"?e.trim():"";if(!d)return!1;let Y0={panePath:d,terminalTabPath:V,allowLiveTransfer:s.allowLiveTransfer,reason:s.reason};if(T8(Y0))return v.current.delete(d),c.current.delete(d),h.current.add(d),!0;if(!oF(Y0))return b0(d,{closeDetachedWindow:!1});return c.current.set(d,Date.now()+yk),d0(),!0},[d0,b0,V]),E_=f((e)=>{let s=typeof e==="string"?e.trim():"";if(!s)return null;let d=G_(s),Y0=T4("pane-window");return{paneInstanceId:d,paneWindowId:Y0,params:pF({paneInstanceId:d,paneWindowId:Y0,paneSourceWindowId:A.current})}},[G_]),K_=f((e,s,d,Y0)=>{let G0=typeof e==="string"?e.trim():"";if(!G0||!Y0)return;let E0=rF({panePath:G0,paneInstanceId:Y0.pane_instance_id,ownerWindowId:Y0.pane_window_id,sourceWindowId:Y0.pane_source_window_id,label:s});if(!E0)return;if(v.current.set(G0,d||null),G0===V&&!a0.get(G0)){Q0(E0);return}b((t0)=>{let J0=new Map(t0);return J0.set(G0,E0),J0})},[V]),S0=f((e,s)=>{let d=typeof e?.panePath==="string"?e.panePath.trim():"";if(!d)return!1;let Y0=v.current.get(d);if(Y0&&s&&Y0!==s)return!1;let G0=a.current.get(d)||null;if(Nj(G0,e)){let R0=H.current,Z_=O5({panePath:d,terminalTabPath:V});if(Z_&&R0&&typeof R0.moveHost==="function")W5({panePath:d,paneInstanceId:G0.paneInstanceId,paneWindowId:G0.ownerWindowId,instance:R0,releaseSourceHost:()=>{if(H.current===R0)H.current=null}});if(Z_&&H.current)H.current=null;let L_=Uj(G0);if(!L_)return!1;return b(($_)=>{if(!$_.has(d))return $_;let B_=new Map($_);return B_.delete(d),B_}),q0(($_)=>{let B_=new Map($_);return B_.set(d,L_),B_}),dF({panePath:d,terminalTabPath:V,closeTab:($_)=>a0.close($_),sourceHost:"tab"}),!0}if(d!==V)return!1;let E0=L0.current,I0=z.current,t0=O5({panePath:d,terminalTabPath:V});if(t0&&E0&&I0&&typeof I0.moveHost==="function")W5({panePath:d,paneInstanceId:E0.paneInstanceId,paneWindowId:E0.ownerWindowId,instance:I0,releaseSourceHost:()=>{if(z.current===I0)z.current=null}});if(t0&&z.current)z.current=null;if(!Nj(E0,e))return!1;let J0=Uj(E0);if(!J0)return!1;return Q0(null),H0(J0),dF({panePath:d,terminalTabPath:V,setDockVisible:O0,sourceHost:"dock"}),!0},[O0,V]),A0=f((e=!1,s=!0)=>{if(!$)return!1;let d=I.current;if(!y4(d))return!1;if(typeof window>"u"||!window.opener||window.opener.closed)return!1;if(x.current){if(e)w8(window);return!0}let Y0=d.panePath||j,G0=Y0===V?z.current||H.current:H.current,E0=s&&O5({panePath:Y0,terminalTabPath:V}),I0=fk({panePath:Y0,paneInstanceId:d.paneInstanceId,paneOverrideId:Y0===V?null:typeof Q?.get==="function"?Q.get(Y0)||null:null,terminalTabPath:V,viewState:Y0===V?null:a0.getViewState(Y0)||null,allowLiveTransfer:E0,instance:G0});if(!I0)return!1;if(E0&&I0.paneTransferToken&&typeof G0?.moveHost==="function"){if(z.current===G0)z.current=null;if(H.current===G0)H.current=null}if(!Hj(window.opener,I0,window.location.origin))return!1;if(x.current=!0,e)w8(window);return!0},[$,j,Q,V]),r0=f(()=>A0(!0,!0),[A0]);g(()=>{if(!$||typeof window>"u")return;let e=()=>{let s=I.current,d=y4(s)?s.panePath||j||"":"";if(T8({panePath:d,terminalTabPath:V,allowLiveTransfer:!1,reason:"closed-window"}))return;A0(!1,!1)};return window.addEventListener("pagehide",e),window.addEventListener("beforeunload",e),()=>{window.removeEventListener("pagehide",e),window.removeEventListener("beforeunload",e)}},[$,A0]);let q_=X0(()=>KK(Y,q),[q,Y]),O_=X0(()=>VK(Q,q),[Q,q]),F0=X0(()=>c9(G,q_,j),[q_,G,j]),w0=X0(()=>q&&K.has(q)?"saved":null,[K,q]),C0=u(w0);g(()=>{C0.current=w0},[w0]);let U_=X0(()=>FK(Y,L,K,q),[K,L,q,Y]),A_=X0(()=>BK(j,F),[j,F]),V_=X0(()=>NK(j,V,U_,A_),[A_,U_,j,V]),X_=UK($,Z,X,o,j0),[D_,M_]=C(!1),$0=u(!1),z0=f(()=>{if(!X||Z)return;if($0.current=j0,j0)O0(!1);M_(!0)},[Z,j0,X]),k0=f(()=>{if(!D_)return;if(M_(!1),$0.current)O0(!0),$0.current=!1},[D_]),g0=f(()=>{if(D_){k0();return}z0()},[z0,k0,D_]);g(()=>{if(D_&&!X)k0()},[X,k0,D_]),g(()=>{let e=new Set(Y.map((Y0)=>Y0.id)),s=new Set(a.current.keys()),d=new Set(Z0.current.keys());for(let Y0 of Array.from(P.current.keys()))if(!Tk({panePath:Y0,openTabIds:e,pendingDetachedTabPaths:s,detachedTabPaths:d,terminalTabPath:V,hasPendingDetachedDockPane:Boolean(L0.current),hasDetachedDockPane:Boolean(y0.current)}))P.current.delete(Y0)},[Y,V]),g(()=>{if($||typeof window>"u")return;let e=(s)=>{if(s.origin!==window.location.origin)return;let d=s.data;if(!d||typeof d!=="object")return;if(d.type==="piclaw-pane-detach-claim"){S0({panePath:d.panePath,paneInstanceId:d.paneInstanceId,paneWindowId:d.paneWindowId},s.source);return}if(d.type!=="piclaw-pane-reattach-request")return;let Y0=Pk({payload:d}),G0=Y0?.panePath||"";if(!G0)return;if(Y0?.editorTransfer)J.current.set(G0,Y0.editorTransfer);if(Y0?.hostTransfer)if(M.current.set(G0,Y0.hostTransfer),Y0.allowLiveTransfer&&s.source)W.current.set(G0,s.source);else W.current.delete(G0);let E0=Z0.current.get(G0)||null,I0=G0===V?y0.current:null,t0=O5({panePath:G0,terminalTabPath:V}),J0=E0||I0;if(!J0)return;if(Y0?.paneInstanceId&&Y0.paneInstanceId!==J0.paneInstanceId)return;if(y8({panePath:G0,terminalTabPath:V})){W.current.delete(G0),w.current.delete(G0),M.current.delete(G0),J.current.delete(G0);return}if(Y0?.hostTransfer&&Y0.allowLiveTransfer&&t0)w.current.set(G0,{panePath:G0,paneInstanceId:J0.paneInstanceId,paneWindowId:J0.ownerWindowId});else w.current.delete(G0);if(T8({panePath:G0,terminalTabPath:V,allowLiveTransfer:Y0?.allowLiveTransfer,reason:"message"})){W.current.delete(G0),v.current.delete(G0),c.current.delete(G0),h.current.add(G0);return}H_(G0,{allowLiveTransfer:Y0?.allowLiveTransfer,reason:"message"})};return window.addEventListener("message",e),()=>window.removeEventListener("message",e)},[S0,$,H_,V]),g(()=>{if($||typeof window>"u"||typeof document>"u")return;let e=()=>d0();window.addEventListener("focus",e),window.addEventListener("pageshow",e),document.addEventListener("visibilitychange",e);let s=setInterval(()=>{d0();for(let[d,Y0]of v.current.entries()){if(!Y0||!Y0.closed)continue;if(d===V?Boolean(L0.current):a.current.has(d)){v.current.delete(d),M0(d);continue}if(y8({panePath:d,terminalTabPath:V})){p0(d);continue}if(T8({panePath:d,terminalTabPath:V,allowLiveTransfer:!1,reason:"closed-window"})){v.current.delete(d),c.current.delete(d),h.current.add(d);continue}if(h.current.has(d)){v.current.delete(d);continue}H_(d,{allowLiveTransfer:!1,reason:"closed-window"})}},750);return()=>{window.removeEventListener("focus",e),window.removeEventListener("pageshow",e),document.removeEventListener("visibilitychange",e),clearInterval(s)}},[p0,M0,d0,$,H_,V]),g(()=>{if(!$||!j)return;if(a0.getActiveId()===j)return;let s=O.current?.path===j?O.current:null,d=y.current?.path===j?y.current:null;B(j,{...G?{label:G}:{},...s?.paneOverrideId?{paneOverrideId:s.paneOverrideId}:{},...s?.viewState?{viewState:s.viewState}:{},...d?.payload?.diffMode?{diffMode:d.payload.diffMode}:{}})},[B,G,$,j]),g(()=>{if(!$)return;let e=I.current;if(!y4(e))return;if(typeof window>"u"||!window.opener||window.opener.closed)return;Hj(window.opener,{type:"piclaw-pane-detach-claim",panePath:e.panePath,paneInstanceId:e.paneInstanceId,paneWindowId:e.paneWindowId},window.location.origin)},[$]),g(()=>{let e=E.current;if(!e)return;if(H.current)H.current.dispose(),H.current=null;let s=q;if(!s)return;if(!$&&h0?.panePath===s){e.innerHTML="";return}let d=O.current?.path===s?O.current:null,Y0=J.current.get(s)||null,G0=d||Y0,E0=y.current?.path===s?y.current:null,I0=M.current.get(s)||null,t0=E0||I0,J0=O_||G0?.paneOverrideId||null,R0=t0?.payload?{...t0.payload}:null;if(C0.current)R0={...R0||{},diffMode:C0.current};else if(R0&&"diffMode"in R0)delete R0.diffMode;let Z_={path:s,mode:"edit",...G0?.content!==void 0?{content:G0.content}:{},...G0?.mtime!==void 0?{mtime:G0.mtime}:{},...R0?{transferState:R0}:{}},L_=(J0?Y_.get(J0):null)||Y_.resolve(Z_)||Y_.get("editor");if(!L_){e.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let $_=null,B_=!1,k_=(e0)=>{$_=e0,H.current=e0,e0.onDirtyChange?.((s0)=>{a0.setDirty(s,s0)}),e0.onSaveRequest?.(()=>{}),e0.onClose?.(()=>{U()});let _0=a0.getViewState(s);if(_0&&typeof e0.restoreViewState==="function")requestAnimationFrame(()=>e0.restoreViewState(_0));if(typeof e0.onViewStateChange==="function")e0.onViewStateChange((s0)=>{a0.saveViewState(s,s0)});let W0=I.current;if($&&y4(W0)&&typeof e0?.moveHost==="function"&&O5({panePath:s,terminalTabPath:V}))W5({panePath:s,paneInstanceId:W0.paneInstanceId||"",paneWindowId:W0.paneWindowId||"",instance:e0,releaseSourceHost:()=>{if(z.current===e0)z.current=null;if(H.current===e0)H.current=null}});iF(e0,{path:s,hostMode:$?"popout":"main",transferState:R0}).catch((s0)=>{console.warn("[pane-attach] afterAttachToHost failed:",s0)}),requestAnimationFrame(()=>e0.focus?.())};return(async()=>{let e0=I.current,_0=$&&y4(e0)&&e0.panePath===s?{panePath:s,paneInstanceId:e0.paneInstanceId||"",paneWindowId:e0.paneWindowId||""}:null,W0=w.current.get(s)||null,s0=O5({panePath:s,terminalTabPath:V})?_0||W0:null,i0=$?typeof window<"u"&&window.opener&&!window.opener.closed?window.opener:null:W.current.get(s)||null,f_=$?"popout":"main";if(t0&&s0&&i0)try{let z_=await PQ(i0,s0,e,{path:s,hostMode:f_,transferState:R0});if(!B_&&z_){if(k_(z_),d)O.current=null;if(Y0)J.current.delete(s);if(E0)y.current=null;if(I0)M.current.delete(s);W.current.delete(s),w.current.delete(s);return}}catch(z_){console.warn("[pane-live-transfer] Failed to claim live pane instance:",z_)}if(B_)return;if(k_(L_.mount(e,Z_)),d)O.current=null;if(Y0)J.current.delete(s);if(E0)y.current=null;if(I0)M.current.delete(s);W.current.delete(s),w.current.delete(s)})(),()=>{if(B_=!0,H.current===$_)$_.dispose(),H.current=null}},[h0,O_,U,$,q]),g(()=>{let e=q,s=H.current;if(!e||typeof s?.setDiffMode!=="function")return;s.setDiffMode(w0)},[w0,q]);let v0=f(async(e)=>{let s=typeof q==="string"?q.trim():"",d=H.current;if(!s||!d?.setContent)return;if(typeof d.isDirty==="function"&&d.isDirty())return;if(!Ik(s,e))return;try{let Y0=await D(s,1e6,"edit"),G0=typeof Y0?.text==="string"?Y0.text:"",E0=typeof Y0?.mtime==="string"&&Y0.mtime.trim()?Y0.mtime.trim():new Date().toISOString();d.setContent(G0,E0)}catch(Y0){console.warn("[workspace_update] Failed to refresh active pane:",Y0)}},[D,q]);return g(()=>{let e=k.current;if(z.current)z.current.dispose(),z.current=null;if(!e||!o||!j0)return;if(!$&&c0?.panePath===V){e.innerHTML="";return}let s=Y_.getDockPanes()[0];if(!s){e.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let d=y.current?.path===V?y.current:null,Y0=M.current.get(V)||null,G0=d||Y0,E0=s.mount(e,{mode:"view",...G0?.payload?{transferState:G0.payload}:{}});if(z.current=E0,iF(E0,{path:V,hostMode:$?"popout":"main",transferState:G0?.payload||null}).catch((I0)=>{console.warn("[pane-attach] afterAttachToHost failed:",I0)}),d)y.current=null;if(Y0)M.current.delete(V);return requestAnimationFrame(()=>E0.focus?.()),()=>{if(z.current===E0)E0.dispose(),z.current=null}},[c0,j0,o,$,V]),{editorContainerRef:E,editorInstanceRef:H,dockContainerRef:k,dockInstanceRef:z,hasDockPanes:o,dockVisible:j0,setDockVisible:O0,toggleDock:P0,openTerminalTab:m0,openVncTab:l0,panePopoutTitle:F0,panePopoutHasMenuActions:U_,hidePanePopoutControls:V_,showEditorPaneContainer:X_,zenMode:D_,exitZenMode:k0,toggleZenMode:g0,refreshActiveEditorFromWorkspace:v0,detachedTabs:t,activeDetachedTab:h0,detachedDockPane:c0,buildPaneDetachTransfer:E_,registerDetachedPaneWindow:K_,reattachPane:b0,requestPanePopoutReattach:r0,canReattachPanePopout:$&&y4(I.current)&&!y8({panePath:j||"",terminalTabPath:V})}}function Rk(_){return{removeFileRefRef:_.removeFileRefRef,editorState:_.editorState,paneRuntime:_.paneRuntime}}function aF(_){let $=u(null),j=hF({onTabClosed:(Z)=>$.current?.(Z)}),G=sF({panePopoutMode:_.panePopoutMode,panePopoutPath:_.panePopoutPath,panePopoutLabel:_.panePopoutLabel,chatOnlyMode:_.chatOnlyMode,editorOpen:j.editorOpen,tabStripTabs:j.tabStripTabs,tabStripActiveId:j.tabStripActiveId,previewTabs:j.previewTabs,diffTabs:j.diffTabs,tabPaneOverrides:j.tabPaneOverrides,terminalTabPath:_.terminalTabPath,vncTabPrefix:_.vncTabPrefix,openEditor:j.openEditor,closeEditor:j.closeEditor,getWorkspaceFile:_.getWorkspaceFile});return Rk({removeFileRefRef:$,editorState:j,paneRuntime:G})}g_();var C8=1280,f8=820;function I8(_){if(typeof _!=="number"||!Number.isFinite(_)||_<=0)return null;return _}function M6(_){return typeof _==="string"&&_.trim()?_.trim():null}function Sk(_){let $=M6(_);if(!$)return!1;if($.startsWith("/")||$.startsWith("\\"))return!1;if($.includes("://"))return!1;if($==="."||$===".."||$.startsWith("../"))return!1;return!0}function gk(_){if(_.isMobile)return!1;let $=I8(_.windowWidth),j=I8(_.windowHeight);if($===null||j===null)return!1;if($<C8||j<f8)return!1;let G=I8(_.screenWidth),Z=I8(_.screenHeight);if(G!==null&&G<C8)return!1;if(Z!==null&&Z<f8)return!1;return!0}function uk(_){let $=_?.navigator,j=String($?.userAgent||""),G=Number($?.maxTouchPoints||0);return(typeof _?.matchMedia==="function"?Boolean(_.matchMedia("(pointer: coarse)")?.matches):!1)||G>1||/Android|iPhone|iPad|iPod/i.test(j)}function bk(_){if(!_||_.kind!=="custom")return null;let $=M6(_.request_id),j=_.options&&typeof _.options==="object"?_.options:null;if(!$||!j||j.action!=="open_workspace_file")return null;let G=M6(j.path);if(!Sk(G))return null;let Z=j.target==="tab"?"tab":"popout";return{requestId:$,chatJid:M6(_.chat_jid),path:G,label:M6(j.label),target:Z}}async function vk(_,$,j){await _5(_,$,j||void 0)}async function tF(_,$){let j=bk(_?.detail?.payload);if(!j)return!1;if(j.chatJid&&j.chatJid!==$.currentChatJid)return!1;let G=$.respond||vk,Z=$.windowObject||(typeof window<"u"?window:void 0),X={width:Number(Z?.innerWidth||0)||void 0,height:Number(Z?.innerHeight||0)||void 0},Y={width:C8,height:f8};if(j.target==="popout"){if(!gk({windowWidth:Z?.innerWidth,windowHeight:Z?.innerHeight,screenWidth:Z?.screen?.availWidth,screenHeight:Z?.screen?.availHeight,isMobile:uk(Z)}))return $.showIntentToast?.("Editor popout unavailable",`Need at least ${C8}×${f8} viewport space for a separate editor window.`,"warning",4500),await G(j.requestId,{ok:!1,opened:!1,reason:"insufficient_screen_space",detail:"Browser viewport is too small for a separate editor window.",target:j.target,path:j.path,viewport:X,minimum_viewport:Y},j.chatJid),!0;let L=await $.popOutPane(j.path,j.label);return await G(j.requestId,{ok:L,opened:L,reason:L?void 0:"popout_failed",detail:L?void 0:"The browser blocked the editor popout window.",target:j.target,path:j.path},j.chatJid),!0}return $.openEditor(j.path),await G(j.requestId,{ok:!0,opened:!0,target:j.target,path:j.path},j.chatJid),!0}var Ej="piclaw:oobe:provider-missing:dismissed";function mk(_){if(!_||typeof _!=="object")return 0;let $=Array.isArray(_.model_options)?_.model_options.filter(Boolean):[];if($.length>0)return $.length;return(Array.isArray(_.models)?_.models.filter((G)=>typeof G==="string"&&G.trim()):[]).length}function ck(_){if(!_||typeof _!=="object")return!1;let $=_.current;return typeof $==="string"&&$.trim().length>0}function eF(_){let{panePopoutMode:$=!1,modelsLoaded:j,modelPayload:G,providerMissingDismissed:Z=!1}=_,X=mk(G),Y=X>0,q=ck(G),L=Y||q;if($||!j)return{kind:"hidden",hasAvailableModels:Y,availableModelCount:X,hasConfiguredModelHint:q};if(L)return{kind:"hidden",hasAvailableModels:Y,availableModelCount:X,hasConfiguredModelHint:q};return{kind:Z?"hidden":"provider-missing",hasAvailableModels:Y,availableModelCount:X,hasConfiguredModelHint:q}}var lk=ZK();await WK();var{searchPosts:hk,deletePost:pk,getAgents:nk,getAgentThought:_B,setAgentThoughtVisibility:$B,getAgentStatus:rk,getAgentContext:dk,getAutoresearchStatus:ik,stopAutoresearch:ok,dismissAutoresearch:sk,getAgentModels:ak,getActiveChatAgents:tk,getChatBranches:ek,renameChatBranch:_M,pruneChatBranch:$M,purgeChatBranch:jM,restoreChatBranch:GM,getAgentQueueState:ZM,steerAgentQueueItem:XM,removeAgentQueueItem:YM,streamSidePrompt:qM,getWorkspaceFile:LM,getThread:KM,getTimeline:VM,sendAgentMessage:QM,forkChatBranch:FM,createRootChatSession:BM}=OK;function NM({locationParams:_,navigate:$}){let{currentChatJid:j,chatOnlyMode:G,panePopoutMode:Z,panePopoutPath:X,panePopoutLabel:Y,branchLoaderMode:q,branchLoaderSourceChatJid:L}=X0(()=>LK(_),[_]);g(()=>{if(typeof window>"u")return;window.__piclawCurrentChatJid=j,window.dispatchEvent?.(new CustomEvent("piclaw:current-chat-changed",{detail:{chatJid:j}}))},[j]);let K=cF({currentChatJid:j,branchLoaderMode:q}),[Q,V]=C(()=>V$(Ej,!1)),[F,B]=C(null),U=f((M0)=>{let p0=typeof M0==="string"?M0:"";if(!p0.trim())return;B({token:`prefill-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`,text:p0})},[]),{agentStatus:D,setAgentStatus:E,agentDraft:H,setAgentDraft:k,agentPlan:z,setAgentPlan:O,agentThought:y,setAgentThought:I,pendingRequest:A,setPendingRequest:J,currentTurnId:M,setCurrentTurnId:W,steerQueuedTurnId:w,setSteerQueuedTurnId:x,lastAgentEventRef:P,lastSilenceNoticeRef:R,isAgentRunningRef:v,draftBufferRef:c,thoughtBufferRef:h,previewResyncPendingRef:r,previewResyncGenerationRef:b,pendingRequestRef:a,stalledPostIdRef:t,currentTurnIdRef:q0,steerQueuedTurnIdRef:Z0,thoughtExpandedRef:D0,draftExpandedRef:Q0}=qX(),L0=aF({panePopoutMode:Z,panePopoutPath:X,panePopoutLabel:Y,chatOnlyMode:G,terminalTabPath:h4,vncTabPrefix:h1,getWorkspaceFile:LM}),N0=DV({timelineRef:K.timelineRef,viewStateRef:K.viewStateRef,followupQueueRowIdsRef:K.followupQueueRowIdsRef,currentChatJid:j,currentHashtag:K.currentHashtag,searchQuery:K.searchQuery,followupQueueItems:K.followupQueueItems,onIdentity:f((M0)=>{if(!M0)return;let{assistant_name:p0,assistant_avatar_url:b0}=M0;if(p0||b0)K.setAgents((S0)=>{let A0=S0.default||{id:"default"},r0=p0&&!A0.name,q_=b0&&!A0.avatar_url;if(!r0&&!q_)return S0;return{...S0,["default"]:{...A0,...r0?{name:p0}:{},...q_?{avatar_url:b0}:{}}}});let{user_name:d0,user_avatar_url:H_,user_avatar_background:E_}=M0;if(d0||H_||E_)K.setUserProfile((K_)=>{let S0=d0&&!K_.name,A0=H_&&!K_.avatar_url,r0=E_&&!K_.avatar_background;if(!S0&&!A0&&!r0)return K_;return{...K_,...S0?{name:d0}:{},...A0?{avatar_url:H_}:{},...r0?{avatar_background:E_}:{}}})},[K.setAgents,K.setUserProfile])}),H0=ZV({environment:{isRenameBranchFormOpen:K.isRenameBranchFormOpen,renameBranchNameInputRef:K.renameBranchNameInputRef,appShellRef:K.appShellRef,setIsWebAppMode:K.setIsWebAppMode,workspaceOpen:K.workspaceOpen,setWorkspaceOpen:K.setWorkspaceOpen,btwSession:K.btwSession,agents:K.agents,agentsRef:K.agentsRef,currentChatJid:j,activeChatJidRef:K.activeChatJidRef,userProfile:K.userProfile,userProfileRef:K.userProfileRef,brandingRef:K.brandingRef,panePopoutMode:Z},composeReferences:{setIntentToast:K.setIntentToast,intentToastTimerRef:K.intentToastTimerRef,editorOpen:L0.editorState.editorOpen,openEditor:L0.editorState.openEditor,resolvePane:(M0)=>Y_.resolve(M0),tabStripActiveId:L0.editorState.tabStripActiveId,setFileRefs:K.setFileRefs,setMessageRefs:K.setMessageRefs,currentChatJid:j,currentHashtag:K.currentHashtag,searchQuery:K.searchQuery,searchOpen:K.searchOpen,setCurrentHashtag:K.setCurrentHashtag,setSearchQuery:K.setSearchQuery,setSearchOpen:K.setSearchOpen,navigate:$,chatOnlyMode:G,getThread:KM,setPosts:N0.setPosts},agentActivity:{lastActivityTtlMs:WX,lastActivityTimerRef:K.lastActivityTimerRef,lastActivityTokenRef:K.lastActivityTokenRef,lastAgentEventRef:P,lastSilenceNoticeRef:R,isAgentRunningRef:v,setIsAgentTurnActive:K.setIsAgentTurnActive,setAgentStatus:E,draftBufferRef:c,thoughtBufferRef:h,pendingRequestRef:a,lastAgentResponseRef:K.lastAgentResponseRef,currentTurnIdRef:q0,steerQueuedTurnIdRef:Z0,agentStatusRef:K.agentStatusRef,silentRecoveryRef:K.silentRecoveryRef,thoughtExpandedRef:D0,draftExpandedRef:Q0,setCurrentTurnId:W,setSteerQueuedTurnId:x,currentTurnIdRefForPanel:q0,setAgentThoughtVisibility:$B,getAgentThought:_B,setAgentThought:I,setAgentDraft:k},chatPaneRuntime:{isAgentTurnActive:K.isAgentTurnActive,steerQueuedTurnId:w,currentTurnId:M,steerQueuedTurnIdRef:Z0,setSteerQueuedTurnId:x,agentStatus:D,agentDraft:H,agentPlan:z,agentThought:y,pendingRequest:A,pendingRequestRef:a,followupQueueItems:K.followupQueueItems,activeModel:K.activeModel,activeThinkingLevel:K.activeThinkingLevel,supportsThinking:K.supportsThinking,activeModelUsage:K.activeModelUsage,contextUsage:K.contextUsage,isAgentRunningRef:v,wasAgentActiveRef:K.wasAgentActiveRef,draftBufferRef:c,thoughtBufferRef:h,lastAgentEventRef:P,lastSilenceNoticeRef:R,lastAgentResponseRef:K.lastAgentResponseRef,currentTurnIdRef:q0,thoughtExpandedRef:D0,draftExpandedRef:Q0,agentStatusRef:K.agentStatusRef,silentRecoveryRef:K.silentRecoveryRef,setIsAgentTurnActive:K.setIsAgentTurnActive,setAgentStatus:E,setAgentDraft:k,setAgentPlan:O,setAgentThought:I,setPendingRequest:J,setCurrentTurnId:W,setFollowupQueueItems:K.setFollowupQueueItems,setActiveModel:K.setActiveModel,setActiveThinkingLevel:K.setActiveThinkingLevel,setSupportsThinking:K.setSupportsThinking,setActiveModelUsage:K.setActiveModelUsage,setContextUsage:K.setContextUsage,lastNotifiedIdRef:K.lastNotifiedIdRef,agentsRef:K.agentsRef,notify:K.notify,shouldNotifyLocallyForChat:K.shouldNotifyLocallyForChat},recovery:{isAgentRunningRef:v,lastSilenceNoticeRef:R,lastAgentEventRef:P,currentTurnIdRef:q0,thoughtExpandedRef:D0,draftExpandedRef:Q0,draftBufferRef:c,thoughtBufferRef:h,pendingRequestRef:a,lastAgentResponseRef:K.lastAgentResponseRef,agentStatusRef:K.agentStatusRef,stalledPostIdRef:t,scrollToBottomRef:N0.scrollToBottomRef,setCurrentTurnId:W,setAgentDraft:k,setAgentPlan:O,setAgentThought:I,setPendingRequest:J,setAgentStatus:E,setPosts:N0.setPosts,dedupePosts:$5},viewState:{viewStateRef:K.viewStateRef,currentHashtag:K.currentHashtag,searchQuery:K.searchQuery,searchOpen:K.searchOpen},removeFileRefRef:L0.removeFileRefRef}),y0=UX({appShellRef:K.appShellRef,sidebarWidthRef:K.sidebarWidthRef,editorWidthRef:K.editorWidthRef,dockHeightRef:K.dockHeightRef}),{chatRefreshLifecycle:o,timelineViewActions:j0,isComposeBoxAgentActive:O0,followupActions:P0,sidepanelActions:m0,branchPaneActions:l0}=IF({routeState:{currentChatJid:j,currentRootChatJid:K.currentRootChatJid,chatOnlyMode:G,navigate:$,branchLoaderMode:q,branchLoaderSourceChatJid:L,isWebAppMode:K.isWebAppMode},searchState:{currentHashtag:K.currentHashtag,setCurrentHashtag:K.setCurrentHashtag,searchQuery:K.searchQuery,setSearchQuery:K.setSearchQuery,searchOpen:K.searchOpen,setSearchOpen:K.setSearchOpen,searchScope:K.searchScope,setSearchScope:K.setSearchScope},shellState:{activeChatAgents:K.activeChatAgents,currentChatBranches:K.currentChatBranches,currentBranchRecord:K.currentBranchRecord,contextUsage:K.contextUsage,activeModel:K.activeModel,activeThinkingLevel:K.activeThinkingLevel,supportsThinking:K.supportsThinking,activeModelUsage:K.activeModelUsage,connectionStatus:K.connectionStatus,notificationsEnabled:K.notificationsEnabled,notificationPermission:K.notificationPermission,workspaceOpen:K.workspaceOpen,setWorkspaceOpen:K.setWorkspaceOpen,userProfile:K.userProfile,agents:K.agents,removingPostIds:K.removingPostIds,btwSession:K.btwSession},timeline:N0,interaction:H0,paneRuntime:L0.paneRuntime,refs:{activeChatJidRef:K.activeChatJidRef,queueRefreshGenRef:K.queueRefreshGenRef,dismissedQueueRowIdsRef:K.dismissedQueueRowIdsRef,wasAgentActiveRef:K.wasAgentActiveRef,viewStateRef:K.viewStateRef,agentStatusRef:K.agentStatusRef,pendingRequestRef:a,thoughtBufferRef:h,draftBufferRef:c,previewResyncPendingRef:r,previewResyncGenerationRef:b,isAgentRunningRef:v,currentTurnIdRef:q0,silentRecoveryRef:K.silentRecoveryRef,lastAgentEventRef:P,lastSilenceNoticeRef:R,staleUiVersionRef:K.staleUiVersionRef,staleUiReloadScheduledRef:K.staleUiReloadScheduledRef,hasConnectedOnceRef:K.hasConnectedOnceRef,sidebarWidthRef:K.sidebarWidthRef,appShellRef:K.appShellRef,agentsRef:K.agentsRef,paneStateOwnerChatJidRef:K.paneStateOwnerChatJidRef,chatPaneStateByChatRef:K.chatPaneStateByChatRef,dismissedLiveWidgetKeysRef:K.dismissedLiveWidgetKeysRef,draftThrottleRef:K.draftThrottleRef,thoughtThrottleRef:K.thoughtThrottleRef,followupQueueItemsRef:K.followupQueueItemsRef,lastAgentResponseRef:K.lastAgentResponseRef,thoughtExpandedRef:D0,draftExpandedRef:Q0,steerQueuedTurnIdRef:Z0,btwAbortRef:K.btwAbortRef,renameBranchInFlightRef:K.renameBranchInFlightRef,renameBranchLockUntilRef:K.renameBranchLockUntilRef,editorWidthRef:K.editorWidthRef,dockHeightRef:K.dockHeightRef},setters:{setFollowupQueueItems:K.setFollowupQueueItems,setContextUsage:K.setContextUsage,setExtensionStatusPanels:K.setExtensionStatusPanels,setPendingExtensionPanelActions:K.setPendingExtensionPanelActions,setExtensionWorkingState:K.setExtensionWorkingState,setAgentStatus:E,setAgentDraft:k,setAgentPlan:O,setAgentThought:I,setPendingRequest:J,setConnectionStatus:K.setConnectionStatus,setAgents:K.setAgents,setUserProfile:K.setUserProfile,setActiveChatAgents:K.setActiveChatAgents,setCurrentChatBranches:K.setCurrentChatBranches,setActiveModel:K.setActiveModel,setActiveThinkingLevel:K.setActiveThinkingLevel,setSupportsThinking:K.setSupportsThinking,setActiveModelUsage:K.setActiveModelUsage,setAgentModelsPayload:K.setAgentModelsPayload,setHasLoadedAgentModels:K.setHasLoadedAgentModels,setHasMore:N0.setHasMore,setFloatingWidget:K.setFloatingWidget,setSteerQueuedTurnId:x,setRemovingPostIds:K.setRemovingPostIds,setBtwSession:K.setBtwSession,setWorkspaceOpen:K.setWorkspaceOpen,setRenameBranchNameDraft:K.setRenameBranchNameDraft,setIsRenameBranchFormOpen:K.setIsRenameBranchFormOpen,setIsRenamingBranch:K.setIsRenamingBranch},services:{searchPosts:hk,deletePost:pk,getAgentQueueState:ZM,getAgentContext:dk,getAutoresearchStatus:ik,getAgentStatus:rk,getAgents:nk,getAgentModels:ak,getActiveChatAgents:tk,getChatBranches:ek,getTimeline:VM,stopAutoresearch:ok,dismissAutoresearch:sk,streamSidePrompt:qM,sendAgentMessage:QM,renameChatBranch:_M,pruneChatBranch:$M,purgeChatBranch:jM,restoreChatBranch:GM,forkChatBranch:FM,createRootChatSession:BM,steerAgentQueueItem:XM,removeAgentQueueItem:YM,getAgentThought:_B,setAgentThoughtVisibility:$B,silenceRefreshMs:DX,silenceWarningMs:HX,silenceFinalizeMs:EX,isCompactionStatus:U$,currentAppAssetVersion:lk,tabStoreHasUnsaved:()=>a0.hasUnsaved(),agentStatus:D,isAgentTurnActive:K.isAgentTurnActive,openEditor:L0.editorState.openEditor,activateTab:L0.editorState.handleTabActivate,tabStripActiveId:L0.editorState.tabStripActiveId,terminalTabPath:h4,resolveTab:(M0)=>a0.get(M0),closeTab:L0.editorState.handleTabClose,editorOpen:L0.editorState.editorOpen},helpers:{getFormLock:XK,readStoredNumber:V4}});g(()=>{return yF({timelineRef:K.timelineRef,activeChatAgents:K.activeChatAgents,currentChatJid:j,onSwitch:(M0)=>l0.handleBranchPickerChange(M0),isIOSDevice:Z6,isLikelySafari:x8})},[K.timelineRef,K.activeChatAgents,j,l0.handleBranchPickerChange]);let G_=X0(()=>eF({panePopoutMode:Z,modelsLoaded:K.hasLoadedAgentModels,modelPayload:K.agentModelsPayload,providerMissingDismissed:Q}),[Z,K.hasLoadedAgentModels,K.agentModelsPayload,Q]),h0=f(()=>{SY()},[]),c0=f(()=>{V(!0),Q_(Ej,"true")},[]);return g(()=>{if(!Z||typeof document>"u")return;document.title=QK(Y,L0.paneRuntime.activePaneTab,X)},[L0.paneRuntime.activePaneTab,Y,Z,X]),g(()=>{if(typeof window>"u")return;let M0=(p0)=>{tF(p0,{currentChatJid:j,openEditor:L0.editorState.openEditor,popOutPane:l0.handlePopOutPane,showIntentToast:H0.composeReferenceActions.showIntentToast})};return window.addEventListener("piclaw-extension-ui:request",M0),()=>{window.removeEventListener("piclaw-extension-ui:request",M0)}},[l0.handlePopOutPane,j,H0.composeReferenceActions.showIntentToast,L0.editorState.openEditor]),$K(JK({routeState:{branchLoaderMode:q,panePopoutMode:Z,currentChatJid:j,chatOnlyMode:G,panePopoutPath:X},paneRuntime:L0.paneRuntime,splitters:y0,orchestration:{branchPaneActions:l0,timelineViewActions:j0,sidepanelActions:m0,followupActions:P0,chatRefreshLifecycle:o,isComposeBoxAgentActive:O0},interaction:H0,timeline:N0,surface:{...K,oobePanelState:G_,composePrefillRequest:F,requestComposePrefill:U,handleOobeSetupProvider:h0,handleOobeShowModelPicker:h0,handleOobeOpenWorkspace:h0,handleDismissProviderMissingOobe:c0},editorState:L0.editorState,agentState:{agentStatus:D,agentDraft:H,agentPlan:z,agentThought:y,pendingRequest:A,currentTurnId:M,steerQueuedTurnId:w,setPendingRequest:J,pendingRequestRef:a,isCompactionStatus:U$},helpers:{formatBranchPickerLabel:h2,isIOSDevice:Z6,terminalTabPath:h4}}))}function UM(){let{locationParams:_,navigate:$}=uY();return N`<${NM} locationParams=${_} navigate=${$} />`}var P8=document.getElementById("app");if(typeof window<"u")window.__PICLAW_APP_BOOTED__=!1;if(P8){if(q$(null,P8),P8.replaceChildren(),q$(N`<${UM} />`,P8),typeof window<"u")window.__PICLAW_APP_BOOTED__=!0}

//# debugId=E545E92BF226E41364756E2164756E21
//# sourceMappingURL=app.bundle.js.map
