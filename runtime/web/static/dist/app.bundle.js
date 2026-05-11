var cD=Object.defineProperty;var hD=(_)=>_;function lD(_,$){this[_]=hD.bind(null,$)}var j_=(_,$)=>{for(var j in $)cD(_,j,{get:$[j],enumerable:!0,configurable:!0,set:lD.bind($,j)})};var L1=(_,$)=>()=>(_&&($=_(_=0)),$);var nZ={};j_(nZ,{useState:()=>C,useRef:()=>g,useReducer:()=>lZ,useMemo:()=>G0,useLayoutEffect:()=>Z5,useImperativeHandle:()=>tD,useErrorBoundary:()=>$z,useEffect:()=>b,useDebugValue:()=>_z,useContext:()=>eD,useCallback:()=>R,render:()=>H$,html:()=>U,h:()=>S3,createContext:()=>aD,Component:()=>d5});function z$(_,$){for(var j in $)_[j]=$[j];return _}function R3(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function S3(_,$,j){var Z,X,G,q={};for(G in $)G=="key"?Z=$[G]:G=="ref"?X=$[G]:q[G]=$[G];if(arguments.length>2&&(q.children=arguments.length>3?F2.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(G in _.defaultProps)q[G]===void 0&&(q[G]=_.defaultProps[G]);return V2(_,q,Z,X,null)}function V2(_,$,j,Z,X){var G={type:_,props:$,key:j,ref:Z,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:X==null?++CZ:X,__i:-1,__u:0};return X==null&&I1.vnode!=null&&I1.vnode(G),G}function D2(_){return _.children}function d5(_,$){this.props=_,this.context=$}function _5(_,$){if($==null)return _.__?_5(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?_5(_):null}function nD(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Z=[],X=[],G=z$({},$);G.__v=$.__v+1,I1.vnode&&I1.vnode(G),b3(_.__P,G,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Z,j==null?_5($):j,!!(32&$.__u),X),G.__v=$.__v,G.__.__k[G.__i]=G,vZ(Z,G,X),$.__e=$.__=null,G.__e!=j&&bZ(G)}}function bZ(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),bZ(_)}function x3(_){(!_.__d&&(_.__d=!0)&&m$.push(_)&&!B2.__r++||OZ!=I1.debounceRendering)&&((OZ=I1.debounceRendering)||PZ)(B2)}function B2(){try{for(var _,$=1;m$.length;)m$.length>$&&m$.sort(fZ),_=m$.shift(),$=m$.length,nD(_)}finally{m$.length=B2.__r=0}}function gZ(_,$,j,Z,X,G,q,Q,K,V,Y){var N,F,B,D,z,H,W,M=Z&&Z.__k||N2,E=$.length;for(K=dD(j,$,M,K,E),N=0;N<E;N++)(B=j.__k[N])!=null&&(F=B.__i!=-1&&M[B.__i]||Y2,B.__i=N,H=b3(_,B,F,X,G,q,Q,K,V,Y),D=B.__e,B.ref&&F.ref!=B.ref&&(F.ref&&g3(F.ref,null,B),Y.push(B.ref,B.__c||D,B)),z==null&&D!=null&&(z=D),(W=!!(4&B.__u))||F.__k===B.__k?(K=uZ(B,K,_,W),W&&F.__e&&(F.__e=null)):typeof B.type=="function"&&H!==void 0?K=H:D&&(K=D.nextSibling),B.__u&=-7);return j.__e=z,K}function dD(_,$,j,Z,X){var G,q,Q,K,V,Y=j.length,N=Y,F=0;for(_.__k=Array(X),G=0;G<X;G++)(q=$[G])!=null&&typeof q!="boolean"&&typeof q!="function"?(typeof q=="string"||typeof q=="number"||typeof q=="bigint"||q.constructor==String?q=_.__k[G]=V2(null,q,null,null,null):U2(q)?q=_.__k[G]=V2(D2,{children:q},null,null,null):q.constructor===void 0&&q.__b>0?q=_.__k[G]=V2(q.type,q.props,q.key,q.ref?q.ref:null,q.__v):_.__k[G]=q,K=G+F,q.__=_,q.__b=_.__b+1,Q=null,(V=q.__i=oD(q,j,K,N))!=-1&&(N--,(Q=j[V])&&(Q.__u|=2)),Q==null||Q.__v==null?(V==-1&&(X>Y?F--:X<Y&&F++),typeof q.type!="function"&&(q.__u|=4)):V!=K&&(V==K-1?F--:V==K+1?F++:(V>K?F--:F++,q.__u|=4))):_.__k[G]=null;if(N)for(G=0;G<Y;G++)(Q=j[G])!=null&&(2&Q.__u)==0&&(Q.__e==Z&&(Z=_5(Q)),cZ(Q,Q));return Z}function uZ(_,$,j,Z){var X,G;if(typeof _.type=="function"){for(X=_.__k,G=0;X&&G<X.length;G++)X[G]&&(X[G].__=_,$=uZ(X[G],$,j,Z));return $}_.__e!=$&&(Z&&($&&_.type&&!$.parentNode&&($=_5(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function oD(_,$,j,Z){var X,G,q,Q=_.key,K=_.type,V=$[j],Y=V!=null&&(2&V.__u)==0;if(V===null&&Q==null||Y&&Q==V.key&&K==V.type)return j;if(Z>(Y?1:0)){for(X=j-1,G=j+1;X>=0||G<$.length;)if((V=$[q=X>=0?X--:G++])!=null&&(2&V.__u)==0&&Q==V.key&&K==V.type)return q}return-1}function LZ(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||rD.test($)?j:j+"px"}function q2(_,$,j,Z,X){var G,q;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Z=="string"&&(_.style.cssText=Z=""),Z)for($ in Z)j&&$ in j||LZ(_.style,$,"");if(j)for($ in j)Z&&j[$]==Z[$]||LZ(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")G=$!=($=$.replace(RZ,"$1")),q=$.toLowerCase(),$=q in _||$=="onFocusOut"||$=="onFocusIn"?q.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+G]=j,j?Z?j[n5]=Z[n5]:(j[n5]=f3,_.addEventListener($,G?I3:w3,G)):_.removeEventListener($,G?I3:w3,G);else{if(X=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(Q){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function JZ(_){return function($){if(this.l){var j=this.l[$.type+_];if($[Q2]==null)$[Q2]=f3++;else if($[Q2]<j[n5])return;return j(I1.event?I1.event($):$)}}}function b3(_,$,j,Z,X,G,q,Q,K,V){var Y,N,F,B,D,z,H,W,M,E,L,x,I,J,k,O=$.type;if($.constructor!==void 0)return null;128&j.__u&&(K=!!(32&j.__u),G=[Q=$.__e=j.__e]),(Y=I1.__b)&&Y($);_:if(typeof O=="function")try{if(W=$.props,M=O.prototype&&O.prototype.render,E=(Y=O.contextType)&&Z[Y.__c],L=Y?E?E.props.value:Y.__:Z,j.__c?H=(N=$.__c=j.__c).__=N.__E:(M?$.__c=N=new O(W,L):($.__c=N=new d5(W,L),N.constructor=O,N.render=sD),E&&E.sub(N),N.state||(N.state={}),N.__n=Z,F=N.__d=!0,N.__h=[],N._sb=[]),M&&N.__s==null&&(N.__s=N.state),M&&O.getDerivedStateFromProps!=null&&(N.__s==N.state&&(N.__s=z$({},N.__s)),z$(N.__s,O.getDerivedStateFromProps(W,N.__s))),B=N.props,D=N.state,N.__v=$,F)M&&O.getDerivedStateFromProps==null&&N.componentWillMount!=null&&N.componentWillMount(),M&&N.componentDidMount!=null&&N.__h.push(N.componentDidMount);else{if(M&&O.getDerivedStateFromProps==null&&W!==B&&N.componentWillReceiveProps!=null&&N.componentWillReceiveProps(W,L),$.__v==j.__v||!N.__e&&N.shouldComponentUpdate!=null&&N.shouldComponentUpdate(W,N.__s,L)===!1){$.__v!=j.__v&&(N.props=W,N.state=N.__s,N.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(T){T&&(T.__=$)}),N2.push.apply(N.__h,N._sb),N._sb=[],N.__h.length&&q.push(N);break _}N.componentWillUpdate!=null&&N.componentWillUpdate(W,N.__s,L),M&&N.componentDidUpdate!=null&&N.__h.push(function(){N.componentDidUpdate(B,D,z)})}if(N.context=L,N.props=W,N.__P=_,N.__e=!1,x=I1.__r,I=0,M)N.state=N.__s,N.__d=!1,x&&x($),Y=N.render(N.props,N.state,N.context),N2.push.apply(N.__h,N._sb),N._sb=[];else do N.__d=!1,x&&x($),Y=N.render(N.props,N.state,N.context),N.state=N.__s;while(N.__d&&++I<25);N.state=N.__s,N.getChildContext!=null&&(Z=z$(z$({},Z),N.getChildContext())),M&&!F&&N.getSnapshotBeforeUpdate!=null&&(z=N.getSnapshotBeforeUpdate(B,D)),J=Y!=null&&Y.type===D2&&Y.key==null?mZ(Y.props.children):Y,Q=gZ(_,U2(J)?J:[J],$,j,Z,X,G,q,Q,K,V),N.base=$.__e,$.__u&=-161,N.__h.length&&q.push(N),H&&(N.__E=N.__=null)}catch(T){if($.__v=null,K||G!=null)if(T.then){for($.__u|=K?160:128;Q&&Q.nodeType==8&&Q.nextSibling;)Q=Q.nextSibling;G[G.indexOf(Q)]=null,$.__e=Q}else{for(k=G.length;k--;)R3(G[k]);C3($)}else $.__e=j.__e,$.__k=j.__k,T.then||C3($);I1.__e(T,$,j)}else G==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):Q=$.__e=iD(j.__e,$,j,Z,X,G,q,K,V);return(Y=I1.diffed)&&Y($),128&$.__u?void 0:Q}function C3(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(C3))}function vZ(_,$,j){for(var Z=0;Z<j.length;Z++)g3(j[Z],j[++Z],j[++Z]);I1.__c&&I1.__c($,_),_.some(function(X){try{_=X.__h,X.__h=[],_.some(function(G){G.call(X)})}catch(G){I1.__e(G,X.__v)}})}function mZ(_){return typeof _!="object"||_==null||_.__b>0?_:U2(_)?_.map(mZ):z$({},_)}function iD(_,$,j,Z,X,G,q,Q,K){var V,Y,N,F,B,D,z,H=j.props||Y2,W=$.props,M=$.type;if(M=="svg"?X="http://www.w3.org/2000/svg":M=="math"?X="http://www.w3.org/1998/Math/MathML":X||(X="http://www.w3.org/1999/xhtml"),G!=null){for(V=0;V<G.length;V++)if((B=G[V])&&"setAttribute"in B==!!M&&(M?B.localName==M:B.nodeType==3)){_=B,G[V]=null;break}}if(_==null){if(M==null)return document.createTextNode(W);_=document.createElementNS(X,M,W.is&&W),Q&&(I1.__m&&I1.__m($,G),Q=!1),G=null}if(M==null)H===W||Q&&_.data==W||(_.data=W);else{if(G=G&&F2.call(_.childNodes),!Q&&G!=null)for(H={},V=0;V<_.attributes.length;V++)H[(B=_.attributes[V]).name]=B.value;for(V in H)B=H[V],V=="dangerouslySetInnerHTML"?N=B:V=="children"||(V in W)||V=="value"&&("defaultValue"in W)||V=="checked"&&("defaultChecked"in W)||q2(_,V,null,B,X);for(V in W)B=W[V],V=="children"?F=B:V=="dangerouslySetInnerHTML"?Y=B:V=="value"?D=B:V=="checked"?z=B:Q&&typeof B!="function"||H[V]===B||q2(_,V,B,H[V],X);if(Y)Q||N&&(Y.__html==N.__html||Y.__html==_.innerHTML)||(_.innerHTML=Y.__html),$.__k=[];else if(N&&(_.innerHTML=""),gZ($.type=="template"?_.content:_,U2(F)?F:[F],$,j,Z,M=="foreignObject"?"http://www.w3.org/1999/xhtml":X,G,q,G?G[0]:j.__k&&_5(j,0),Q,K),G!=null)for(V=G.length;V--;)R3(G[V]);Q||(V="value",M=="progress"&&D==null?_.removeAttribute("value"):D!=null&&(D!==_[V]||M=="progress"&&!D||M=="option"&&D!=H[V])&&q2(_,V,D,H[V],X),V="checked",z!=null&&z!=_[V]&&q2(_,V,z,H[V],X))}return _}function g3(_,$,j){try{if(typeof _=="function"){var Z=typeof _.__u=="function";Z&&_.__u(),Z&&$==null||(_.__u=_($))}else _.current=$}catch(X){I1.__e(X,j)}}function cZ(_,$,j){var Z,X;if(I1.unmount&&I1.unmount(_),(Z=_.ref)&&(Z.current&&Z.current!=_.__e||g3(Z,null,$)),(Z=_.__c)!=null){if(Z.componentWillUnmount)try{Z.componentWillUnmount()}catch(G){I1.__e(G,$)}Z.base=Z.__P=null}if(Z=_.__k)for(X=0;X<Z.length;X++)Z[X]&&cZ(Z[X],$,j||typeof _.type!="function");j||R3(_.__e),_.__c=_.__=_.__e=void 0}function sD(_,$,j){return this.constructor(_,j)}function H$(_,$,j){var Z,X,G,q;$==document&&($=document.documentElement),I1.__&&I1.__(_,$),X=(Z=typeof j=="function")?null:j&&j.__k||$.__k,G=[],q=[],b3($,_=(!Z&&j||$).__k=S3(D2,null,[_]),X||Y2,Y2,$.namespaceURI,!Z&&j?[j]:X?null:$.firstChild?F2.call($.childNodes):null,G,!Z&&j?j:X?X.__e:$.firstChild,Z,q),vZ(G,_,q)}function aD(_){function $(j){var Z,X;return this.getChildContext||(Z=new Set,(X={})[$.__c]=this,this.getChildContext=function(){return X},this.componentWillUnmount=function(){Z=null},this.shouldComponentUpdate=function(G){this.props.value!=G.value&&Z.forEach(function(q){q.__e=!0,x3(q)})},this.sub=function(G){Z.add(G);var q=G.componentWillUnmount;G.componentWillUnmount=function(){Z&&Z.delete(G),q&&q.call(G)}}),j.children}return $.__c="__cC"+SZ++,$.__=_,$.Provider=$.__l=($.Consumer=function(j,Z){return j.children(Z)}).contextType=$,$}function j5(_,$){f1.__h&&f1.__h(w1,_,$5||$),$5=0;var j=w1.__H||(w1.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function C(_){return $5=1,lZ(pZ,_)}function lZ(_,$,j){var Z=j5(c$++,2);if(Z.t=_,!Z.__c&&(Z.__=[j?j($):pZ(void 0,$),function(Q){var K=Z.__N?Z.__N[0]:Z.__[0],V=Z.t(K,Q);K!==V&&(Z.__N=[V,Z.__[1]],Z.__c.setState({}))}],Z.__c=w1,!w1.__f)){var X=function(Q,K,V){if(!Z.__c.__H)return!0;var Y=Z.__c.__H.__.filter(function(F){return F.__c});if(Y.every(function(F){return!F.__N}))return!G||G.call(this,Q,K,V);var N=Z.__c.props!==Q;return Y.some(function(F){if(F.__N){var B=F.__[0];F.__=F.__N,F.__N=void 0,B!==F.__[0]&&(N=!0)}}),G&&G.call(this,Q,K,V)||N};w1.__f=!0;var{shouldComponentUpdate:G,componentWillUpdate:q}=w1;w1.componentWillUpdate=function(Q,K,V){if(this.__e){var Y=G;G=void 0,X(Q,K,V),G=Y}q&&q.call(this,Q,K,V)},w1.shouldComponentUpdate=X}return Z.__N||Z.__}function b(_,$){var j=j5(c$++,3);!f1.__s&&u3(j.__H,$)&&(j.__=_,j.u=$,w1.__H.__h.push(j))}function Z5(_,$){var j=j5(c$++,4);!f1.__s&&u3(j.__H,$)&&(j.__=_,j.u=$,w1.__h.push(j))}function g(_){return $5=5,G0(function(){return{current:_}},[])}function tD(_,$,j){$5=6,Z5(function(){if(typeof _=="function"){var Z=_($());return function(){_(null),Z&&typeof Z=="function"&&Z()}}if(_)return _.current=$(),function(){return _.current=null}},j==null?j:j.concat(_))}function G0(_,$){var j=j5(c$++,7);return u3(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function R(_,$){return $5=8,G0(function(){return _},$)}function eD(_){var $=w1.context[_.__c],j=j5(c$++,9);return j.c=_,$?(j.__==null&&(j.__=!0,$.sub(w1)),$.props.value):_.__}function _z(_,$){f1.useDebugValue&&f1.useDebugValue($?$(_):_)}function $z(_){var $=j5(c$++,10),j=C();return $.__=_,w1.componentDidCatch||(w1.componentDidCatch=function(Z,X){$.__&&$.__(Z,X),j[1](Z)}),[j[0],function(){j[1](void 0)}]}function jz(){for(var _;_=hZ.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(K2),$.__h.some(P3),$.__h=[]}catch(j){$.__h=[],f1.__e(j,_.__v)}}}function Zz(_){var $,j=function(){clearTimeout(Z),IZ&&cancelAnimationFrame($),setTimeout(_)},Z=setTimeout(j,35);IZ&&($=requestAnimationFrame(j))}function K2(_){var $=w1,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),w1=$}function P3(_){var $=w1;_.__c=_.__(),w1=$}function u3(_,$){return!_||_.length!==$.length||$.some(function(j,Z){return j!==_[Z]})}function pZ(_,$){return typeof $=="function"?$(_):$}function Xz(_){var $=xZ.get(this);return $||($=new Map,xZ.set(this,$)),($=rZ(this,$.get(_)||($.set(_,$=function(j){for(var Z,X,G=1,q="",Q="",K=[0],V=function(F){G===1&&(F||(q=q.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?K.push(0,F,q):G===3&&(F||q)?(K.push(3,F,q),G=2):G===2&&q==="..."&&F?K.push(4,F,0):G===2&&q&&!F?K.push(5,0,!0,q):G>=5&&((q||!F&&G===5)&&(K.push(G,0,q,X),G=6),F&&(K.push(G,F,0,X),G=6)),q=""},Y=0;Y<j.length;Y++){Y&&(G===1&&V(),V(Y));for(var N=0;N<j[Y].length;N++)Z=j[Y][N],G===1?Z==="<"?(V(),K=[K],G=3):q+=Z:G===4?q==="--"&&Z===">"?(G=1,q=""):q=Z+q[0]:Q?Z===Q?Q="":q+=Z:Z==='"'||Z==="'"?Q=Z:Z===">"?(V(),G=1):G&&(Z==="="?(G=5,X=q,q=""):Z==="/"&&(G<5||j[Y][N+1]===">")?(V(),G===3&&(K=K[0]),G=K,(K=K[0]).push(2,0,G),G=0):Z===" "||Z==="\t"||Z===`
`||Z==="\r"?(V(),G=2):q+=Z),G===3&&q==="!--"&&(G=4,K=K[0])}return V(),K}(_)),$),arguments,[])).length>1?$:$[0]}var F2,I1,CZ,pD,m$,OZ,PZ,fZ,T3,Q2,n5,RZ,f3,w3,I3,SZ,Y2,N2,rD,U2,c$,w1,y3,EZ,$5=0,hZ,f1,AZ,MZ,kZ,TZ,yZ,wZ,IZ,rZ=function(_,$,j,Z){var X;$[0]=0;for(var G=1;G<$.length;G++){var q=$[G++],Q=$[G]?($[0]|=q?1:2,j[$[G++]]):$[++G];q===3?Z[0]=Q:q===4?Z[1]=Object.assign(Z[1]||{},Q):q===5?(Z[1]=Z[1]||{})[$[++G]]=Q:q===6?Z[1][$[++G]]+=Q+"":q?(X=_.apply(Q,rZ(_,Q,j,["",null])),Z.push(X),Q[0]?$[0]|=2:($[G-2]=0,$[G]=X)):Z.push(Q)}return Z},xZ,U;var M0=L1(()=>{Y2={},N2=[],rD=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,U2=Array.isArray;F2=N2.slice,I1={__e:function(_,$,j,Z){for(var X,G,q;$=$.__;)if((X=$.__c)&&!X.__)try{if((G=X.constructor)&&G.getDerivedStateFromError!=null&&(X.setState(G.getDerivedStateFromError(_)),q=X.__d),X.componentDidCatch!=null&&(X.componentDidCatch(_,Z||{}),q=X.__d),q)return X.__E=X}catch(Q){_=Q}throw _}},CZ=0,pD=function(_){return _!=null&&_.constructor===void 0},d5.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=z$({},this.state),typeof _=="function"&&(_=_(z$({},j),this.props)),_&&z$(j,_),_!=null&&this.__v&&($&&this._sb.push($),x3(this))},d5.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),x3(this))},d5.prototype.render=D2,m$=[],PZ=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,fZ=function(_,$){return _.__v.__b-$.__v.__b},B2.__r=0,T3=Math.random().toString(8),Q2="__d"+T3,n5="__a"+T3,RZ=/(PointerCapture)$|Capture$/i,f3=0,w3=JZ(!1),I3=JZ(!0),SZ=0;hZ=[],f1=I1,AZ=f1.__b,MZ=f1.__r,kZ=f1.diffed,TZ=f1.__c,yZ=f1.unmount,wZ=f1.__;f1.__b=function(_){w1=null,AZ&&AZ(_)},f1.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),wZ&&wZ(_,$)},f1.__r=function(_){MZ&&MZ(_),c$=0;var $=(w1=_.__c).__H;$&&(y3===w1?($.__h=[],w1.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(K2),$.__h.some(P3),$.__h=[],c$=0)),y3=w1},f1.diffed=function(_){kZ&&kZ(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(hZ.push($)!==1&&EZ===f1.requestAnimationFrame||((EZ=f1.requestAnimationFrame)||Zz)(jz)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),y3=w1=null},f1.__c=function(_,$){$.some(function(j){try{j.__h.some(K2),j.__h=j.__h.filter(function(Z){return!Z.__||P3(Z)})}catch(Z){$.some(function(X){X.__h&&(X.__h=[])}),$=[],f1.__e(Z,j.__v)}}),TZ&&TZ(_,$)},f1.unmount=function(_){yZ&&yZ(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Z){try{K2(Z)}catch(X){$=X}}),j.__H=void 0,$&&f1.__e($,j.__v))};IZ=typeof requestAnimationFrame=="function";xZ=new Map;U=Xz.bind(S3)});function E_(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function B1(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{return}}function L$(_,$=!1){let j=E_(_);if(j===null)return $;return j==="true"}function E4(_,$=null){let j=E_(_);if(j===null)return $;let Z=parseInt(j,10);return Number.isFinite(Z)?Z:$}function C2(_){let $=E_(_);if(!$)return null;try{return JSON.parse($)}catch{return null}}function y7(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function lG(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Z=j.length===3?j.split("").map((G)=>G+G).join(""):j,X=parseInt(Z,16);return{r:X>>16&255,g:X>>8&255,b:X&255,hex:`#${Z.toLowerCase()}`}}function RO(_,$){try{if(document.body){_.style.display="none",document.body.appendChild(_);let j=getComputedStyle(_).color||_.style.color;return document.body.removeChild(_),j}}catch{return $}return $}function SO(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let X=RO(j,j.style.color).match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!X)return null;let G=parseInt(X[1],10),q=parseInt(X[2],10),Q=parseInt(X[3],10);if(![G,q,Q].every((V)=>Number.isFinite(V)))return null;let K=`#${[G,q,Q].map((V)=>V.toString(16).padStart(2,"0")).join("")}`;return{r:G,g:q,b:Q,hex:K}}function A4(_){return lG(_)||SO(_)}function w7(_,$,j){let Z=Math.round(_.r+($.r-_.r)*j),X=Math.round(_.g+($.g-_.g)*j),G=Math.round(_.b+($.b-_.b)*j);return`rgb(${Z} ${X} ${G})`}function P2(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function bO(_){let $=_.r/255,j=_.g/255,Z=_.b/255,X=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),G=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),q=Z<=0.03928?Z/12.92:Math.pow((Z+0.055)/1.055,2.4);return 0.2126*X+0.7152*G+0.0722*q}function gO(_){return bO(_)>0.4?"#000000":"#ffffff"}function pG(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function I7(_){return mG[_]||mG.default}function uO(_){return _.mode==="auto"?pG():_.mode}function rG(_,$){let j=I7(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||E$}function J$(_,$,j){let Z=A4(_);if(!Z)return _;return w7(Z,$,j)}function nG(_,$,j){let Z=A4($);if(!Z)return _;let G=lG(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:J$(_.bgPrimary,Z,0.08),bgSecondary:J$(_.bgSecondary,Z,0.12),bgHover:J$(_.bgHover,Z,0.16),textPrimary:J$(_.textPrimary,Z,j==="dark"?0.08:0.06),textSecondary:J$(_.textSecondary,Z,j==="dark"?0.12:0.1),borderColor:J$(_.borderColor,Z,0.1),accent:Z.hex,accentHover:G?w7(Z,G,0.18):Z.hex,warning:J$(_.warning||E$.warning,Z,0.14),danger:J$(_.danger,Z,0.16),success:J$(_.success,Z,0.16)}}function vO(_,$){let j=A4(_?.warning);if(j)return j.hex;let Z=A4($==="dark"?S2.warning:E$.warning)||A4(E$.warning),X=A4(_?.accent);if(Z&&X)return w7(Z,X,$==="dark"?0.18:0.14);return $==="dark"?S2.warning:E$.warning}function mO(_,$){if(typeof document>"u")return;let j=document.documentElement,Z=_.accent,X=A4(Z),G=X?P2(X,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,q=X?P2(X,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",Q=X?P2(X,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",K=X?gO(X):$==="dark"?"#000000":"#ffffff",V=X?P2(X,$==="dark"?0.35:0.25):"rgba(29, 155, 240, 0.25)",Y=vO(_,$),N={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Z,"--accent-hover":_.accentHover||Z,"--accent-color-alpha":V,"--accent-soft":q,"--accent-soft-strong":Q,"--accent-contrast-text":K,"--warning-color":Y,"--danger-color":_.danger||E$.danger,"--success-color":_.success||E$.success,"--search-highlight-color":G||"rgba(29, 155, 240, 0.2)"};Object.entries(N).forEach(([F,B])=>{if(B)j.style.setProperty(F,B)})}function cO(){if(typeof document>"u")return;let _=document.documentElement;fO.forEach(($)=>_.style.removeProperty($))}function F5(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,Z=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!Z)Z=document.createElement("meta"),document.head.appendChild(Z);if(Z.setAttribute("name",_),j)Z.setAttribute("id",j);return Z}function cG(_){let $=y7(M4?.theme||"default"),j=M4?.tint?String(M4.tint).trim():null,Z=rG($,_);if($==="default"&&j)Z=nG(Z,j,_);if(Z?.bgPrimary)return Z.bgPrimary;return _==="dark"?S2.bgPrimary:E$.bgPrimary}function hO(_,$){if(typeof document>"u")return;let j=F5("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let Z=F5("theme-color",{id:"theme-color-light"});if(Z)Z.setAttribute("media","(prefers-color-scheme: light)"),Z.setAttribute("content",cG("light"));let X=F5("theme-color",{id:"theme-color-dark"});if(X)X.setAttribute("media","(prefers-color-scheme: dark)"),X.setAttribute("content",cG("dark"));let G=F5("msapplication-TileColor");if(G&&_)G.setAttribute("content",_);let q=F5("msapplication-navbutton-color");if(q&&_)q.setAttribute("content",_);let Q=F5("apple-mobile-web-app-status-bar-style");if(Q)Q.setAttribute("content",$==="dark"?"black-translucent":"default")}function lO(){if(typeof window>"u")return;let _={...M4,mode:hG};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function pO(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function rO(_){if(typeof document>"u"||!_)return;let $=document.documentElement;if($?.style)$.style.background=_;if(document.body?.style)document.body.style.background=_}function x7(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=y7(_?.theme||"default"),Z=_?.tint?String(_.tint).trim():null,X=I7(j),G=uO(X),q=rG(j,G);M4={theme:j,tint:Z},hG=G;let Q=document.documentElement;Q.dataset.theme=G,Q.dataset.colorTheme=j,Q.dataset.tint=Z?String(Z):"",Q.style.colorScheme=G;let K=q;if(j==="default"&&Z)K=nG(q,Z,G);if(j==="default"&&!Z)cO();else mO(K,G);if(rO(K.bgPrimary),hO(K.bgPrimary,G),lO(),$.persist!==!1)if(B1(T7,j),Z)B1(R2,Z);else B1(R2,"")}function f2(){if(I7(M4.theme).mode!=="auto")return;x7(M4,{persist:!1})}function C7(){if(typeof window>"u")return;let _=y7(E_(T7)||"default"),$=(()=>{let j=E_(R2);return j?j.trim():null})();x7({theme:_,tint:$},{persist:!1})}function dG(){if(typeof window>"u")return()=>{};if(C7(),window.matchMedia&&!k7){let _=window.matchMedia("(prefers-color-scheme: dark)");if(_.addEventListener)_.addEventListener("change",f2);else if(_.addListener)_.addListener(f2);return k7=!0,()=>{if(_.removeEventListener)_.removeEventListener("change",f2);else if(_.removeListener)_.removeListener(f2);k7=!1}}return()=>{}}function U5(_){if(!_||typeof _!=="object")return;let $=pO(),j=_.chat_jid||_.chatJid||null,Z=_.theme??_.name??_.colorTheme,X=_.tint??null;if(!j||j===$)x7({theme:Z||"default",tint:X},{persist:!1});B1(T7,Z||"default"),B1(R2,X||"")}function oG(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return pG()}var T7="piclaw_theme",R2="piclaw_tint",E$,S2,mG,fO,M4,hG="light",k7=!1;var X6=L1(()=>{E$={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",warning:"#f0b429",danger:"#f4212e",success:"#00ba7c"},S2={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",warning:"#f0b429",danger:"#f4212e",success:"#00ba7c"},mG={default:{label:"Default",mode:"auto",light:E$,dark:S2},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},fO=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-color-alpha","--accent-contrast-text","--accent-soft","--accent-soft-strong","--warning-color","--danger-color","--success-color","--search-highlight-color"],M4={theme:"default",tint:null}});function Zq(_=typeof window<"u"?window:null){return _||null}function g2(){if(typeof performance<"u"&&typeof performance.now==="function")return performance.now();return Date.now()}function K6(_,$){return`${_}:${$}`}function Xq(_){return`${_}-${Math.random().toString(36).slice(2,10)}-${Date.now().toString(36)}`}function Gq(_,$){if(_.length<=$)return;_.splice(0,_.length-$)}function T4(_){if(!_||typeof _!=="object")return null;return{..._}}function I4(_){if(!_)return null;return y4.find(($)=>$.id===_)||null}function f7(_,$){if(typeof performance>"u"||typeof performance.mark!=="function")return;try{performance.mark(`piclaw:${_}:${$}`)}catch(j){console.debug("[app-perf] Ignoring performance.mark failure.",j,{traceId:_,phase:$})}}function qq(_){if(typeof performance>"u"||typeof performance.clearMarks!=="function")return;try{performance.clearMarks(`piclaw:${_}:start`);let $=I4(_);if(!$)return;for(let j of $.phases)performance.clearMarks(`piclaw:${_}:${j.phase}`)}catch($){console.debug("[app-perf] Ignoring performance.clearMarks failure.",$,{traceId:_})}}function jq(_,$,j){let Z=w4.get(K6(_,$));if(Z&&I4(Z)?.status==="active")V6(Z,"cancelled","superseded",{replacementType:_,replacementChatJid:$});let X=Xq(_),G={id:X,type:_,chatJid:$,startedAt:g2(),detail:T4(j),phases:[],status:"active"};return y4.push(G),Gq(y4,100),w4.set(K6(_,$),X),f7(X,"start"),X}function V6(_,$,j,Z,X){let G=I4(_);if(!G||G.status!=="active")return;if(j)G.phases.push({phase:j,at:g2(),detail:T4(Z)}),f7(G.id,j);if(G.status=$,G.completedAt=g2(),G.durationMs=G.completedAt-G.startedAt,X!==void 0)G.error=X instanceof Error?X.message:String(X);let q=K6(G.type,G.chatJid);if(w4.get(q)===G.id)w4.delete(q);qq(G.id)}function BL(_=Zq()){let $=_?.__PICLAW_PERF__;if($)return $;if(_)_.__PICLAW_PERF__=u2;return u2}function D5(_=Zq()){return BL(_)}function Qq(_,$,j){return D5().ensureTrace(_,$,j)}function v2(_,$){return D5().getActiveTraceId(_,$)}function K_(_,$,j){D5().markTrace(_,$,j)}function m2(_,$,j="settled",Z){let X=I4(_);if(!X||X.status!=="active")return!1;let G=new Set(X.phases.map((q)=>q.phase));if(!$.every((q)=>G.has(q)))return!1;return V6(_,"completed",j,Z),!0}function Vq(_,$,j="failed",Z){D5().failTrace(_,$,j,Z)}function Kq(_,$="cancelled",j){D5().cancelTrace(_,$,j)}function R7(_){return D5().recordRequest(_)}var y4,Q6,w4,u2;var Y6=L1(()=>{y4=[],Q6=[],w4=new Map;u2={startTrace(_,$,j){return jq(_,$,j)},ensureTrace(_,$,j){let Z=w4.get(K6(_,$));if(Z&&I4(Z)?.status==="active")return Z;return jq(_,$,j)},getActiveTraceId(_,$){let j=w4.get(K6(_,$));return j&&I4(j)?.status==="active"?j:null},markTrace(_,$,j){let Z=I4(_);if(!Z||Z.status!=="active")return;Z.phases.push({phase:$,at:g2(),detail:T4(j)}),f7(Z.id,$)},completeTrace(_,$="settled",j){V6(_,"completed",$,j)},failTrace(_,$,j="failed",Z){V6(_,"failed",j,Z,$)},cancelTrace(_,$="cancelled",j){V6(_,"cancelled",$,j)},recordRequest(_){let $=Xq("req");return Q6.push({..._,id:$,detail:T4(_.detail)}),Gq(Q6,300),$},getTraces(){return y4.map((_)=>({..._,detail:T4(_.detail),phases:_.phases.map(($)=>({...$,detail:T4($.detail)}))}))},getRequests(){return Q6.map((_)=>({..._,detail:T4(_.detail)}))},clear(){y4.forEach((_)=>qq(_.id)),y4.splice(0,y4.length),Q6.splice(0,Q6.length),w4.clear()},printSummary(){let _={traces:u2.getTraces(),requests:u2.getRequests()};return console.table(_.traces.map(($)=>({id:$.id,type:$.type,chatJid:$.chatJid,status:$.status,durationMs:Number($.durationMs||0).toFixed(1),lastPhase:$.phases[$.phases.length-1]?.phase||"start"}))),_}}});function z5(_){let $=Number(_||0);return Number.isFinite($)&&$>0?$:null}function FL(_){try{return Boolean(_?.matchMedia?.("(pointer: coarse)")?.matches)}catch{return!1}}function UL(_){let $=String(_?.navigator?.userAgent||"");return/Android|webOS|iPhone|iPod|Mobile|Windows Phone/i.test($)}function Yq(_){let $=String(_?.navigator?.userAgent||"");return/iPad|Tablet|PlayBook|Silk/i.test($)}function Nq(_=typeof window<"u"?window:null){let $=z5(_?.innerWidth)??z5(_?.screen?.availWidth)??z5(_?.screen?.width)??0,j=z5(_?.innerHeight)??z5(_?.screen?.availHeight)??z5(_?.screen?.height)??0,Z=$&&j?Math.min($,j):$||j,X=$&&j?Math.max($,j):$||j,G=FL(_),q=Number(_?.navigator?.maxTouchPoints||0),Q=G||q>1;if(Z>0&&Z<=640)return"mobile";if(UL(_)&&!Yq(_))return"mobile";if(Yq(_))return"tablet";if(Q&&Z>0&&Z<=1100)return"tablet";if(X>0&&X<=1180&&Z>0&&Z<=900)return"tablet";return"desktop"}var H6={};j_(H6,{uploadWorkspaceFile:()=>p2,uploadMedia:()=>_9,updateWorkspaceFile:()=>nL,updateScheduledTask:()=>v7,submitAdaptiveCardAction:()=>$9,streamSidePrompt:()=>hL,stopSessionRecording:()=>h7,stopAutoresearch:()=>SL,steerAgentQueueItem:()=>vL,startSessionRecording:()=>c7,setWorkspaceVisibility:()=>D6,setAgentThoughtVisibility:()=>pL,sessionRecordingPlaybackUrl:()=>p7,sessionRecordingExportUrl:()=>N6,sendPeerAgentMessage:()=>xL,sendAgentMessage:()=>A_,searchPosts:()=>zL,saveWorkspaceSettings:()=>o7,saveWebPushSubscription:()=>t7,saveUiState:()=>n7,saveQuickActionsSettings:()=>d7,saveEnvironmentOverride:()=>h2,restoreChatBranch:()=>IL,respondToAgentRequest:()=>H5,reorderAgentQueueItem:()=>mL,renameWorkspaceFile:()=>N9,renameChatJid:()=>wL,renameChatBranch:()=>ML,removeAgentQueueItem:()=>uL,reindexWorkspace:()=>Q9,purgeChatBranch:()=>yL,pruneChatBranch:()=>TL,previewSessionRecordingRedaction:()=>r7,moveWorkspaceEntry:()=>B9,mergeChatBranchIntoParent:()=>kL,getWorkspaceTree:()=>U6,getWorkspaceRawUrl:()=>z6,getWorkspaceIndexStatus:()=>q9,getWorkspaceFileStat:()=>K9,getWorkspaceFileDownloadUrl:()=>r2,getWorkspaceFile:()=>V9,getWorkspaceDownloadUrl:()=>n2,getWorkspaceBranch:()=>G9,getWebPushPublicKey:()=>a7,getTimeline:()=>r$,getThumbnailUrl:()=>Z9,getThread:()=>HL,getSystemMetrics:()=>g7,getSessionRecordings:()=>m7,getSessionRecording:()=>c2,getScheduledTasks:()=>u7,getQuickActionsSettings:()=>F6,getPostsByHashtag:()=>b7,getMediaUrl:()=>v_,getMediaText:()=>rL,getMediaInfo:()=>l2,getMediaBlob:()=>X9,getEnvironmentSettings:()=>i7,getChatBranches:()=>EL,getAutoresearchStatus:()=>RL,getAgents:()=>CL,getAgentThought:()=>lL,getAgentStatus:()=>PL,getAgentQueueState:()=>gL,getAgentModels:()=>x4,getAgentContext:()=>fL,getAgentCommands:()=>B6,getActiveChatAgents:()=>JL,forkChatBranch:()=>AL,dismissAutoresearch:()=>bL,deleteWorkspaceFile:()=>F9,deleteWebPushSubscription:()=>e7,deleteSessionRecording:()=>l7,deletePost:()=>LL,createWorkspaceFile:()=>Y9,createRootChatSession:()=>s7,createReply:()=>OL,createPost:()=>WL,completeInstanceOobe:()=>cL,attachWorkspaceFile:()=>dL,addToWhitelist:()=>j9,SSEClient:()=>d2});async function g0(_,$={}){let j=typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now(),Z;try{Z=await fetch(m1+_,{...$,headers:{"Content-Type":"application/json",...$.headers}})}catch(G){throw R7({method:String($.method||"GET").toUpperCase(),url:_,startedAt:j,durationMs:(typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now())-j,ok:!1,detail:{failedBeforeResponse:!0}}),G}let X=(typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now())-j;if(R7({method:String($.method||"GET").toUpperCase(),url:_,startedAt:j,durationMs:X,status:Z.status,ok:Z.ok,requestId:Z.headers?.get?.("x-request-id")||null,serverTiming:Z.headers?.get?.("Server-Timing")||null}),!Z.ok){let G=await Z.json().catch(()=>({error:"Unknown error"}));throw Error(G.error||`HTTP ${Z.status}`)}return Z.json()}function Bq(_){let $=String(_||"").split(`
`),j="message",Z=[];for(let G of $)if(G.startsWith("event:"))j=G.slice(6).trim()||"message";else if(G.startsWith("data:"))Z.push(G.slice(5).trim());let X=Z.join(`
`);if(!X)return null;try{return{event:j,data:JSON.parse(X)}}catch{return{event:j,data:X}}}async function DL(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Z=new TextDecoder,X="";while(!0){let{value:q,done:Q}=await j.read();if(Q)break;X+=Z.decode(q,{stream:!0});let K=X.split(`

`);X=K.pop()||"";for(let V of K){let Y=Bq(V);if(Y)$(Y.event,Y.data)}}X+=Z.decode();let G=Bq(X);if(G)$(G.event,G.data)}async function r$(_=10,$=null,j=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;if(j)Z+=`&chat_jid=${encodeURIComponent(j)}`;return g0(Z)}async function b7(_,$=50,j=0,Z=null){let X=Z?`&chat_jid=${encodeURIComponent(Z)}`:"";return g0(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${X}`)}async function zL(_,$=50,j=0,Z=null,X="current",G=null,q=null){let Q=Z?`&chat_jid=${encodeURIComponent(Z)}`:"",K=X?`&scope=${encodeURIComponent(X)}`:"",V=G?`&root_chat_jid=${encodeURIComponent(G)}`:"",Y=q?.images?"&images=1":"",N=q?.attachments?"&attachments=1":"";return g0(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${Q}${K}${V}${Y}${N}`)}async function HL(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return g0(`/thread/${_}${j}`)}async function g7(){return g0("/agent/system-metrics")}async function u7(_={}){let $=new URLSearchParams;if(_?.id)$.set("id",String(_.id));if(_?.chatJid)$.set("chat_jid",String(_.chatJid));if(_?.status&&_.status!=="all")$.set("status",String(_.status));if(_?.limit)$.set("limit",String(_.limit));if(_?.includeRunLogs)$.set("include_run_logs","1");if(_?.runLogLimit)$.set("run_log_limit",String(_.runLogLimit));let j=$.toString()?`?${$.toString()}`:"";return g0(`/agent/scheduled-tasks${j}`)}async function v7(_,$,j={}){return g0("/agent/scheduled-tasks/action",{method:"POST",body:JSON.stringify({action:_,id:$,allow_internal:j?.allowInternal===!0})})}async function m7(){return g0("/agent/recordings")}async function c2(_){return g0(`/agent/recordings/${encodeURIComponent(_)}`)}async function c7(_={}){return g0("/agent/recordings/start",{method:"POST",body:JSON.stringify(_||{})})}async function h7(_={}){return g0("/agent/recordings/stop",{method:"POST",body:JSON.stringify(_||{})})}async function l7(_){return g0(`/agent/recordings/${encodeURIComponent(_)}`,{method:"DELETE"})}function N6(_,$="json"){return`/agent/recordings/${encodeURIComponent(_)}/export?format=${encodeURIComponent($)}`}function p7(_){return`/recordings/playback?id=${encodeURIComponent(_)}`}async function r7(_,$={}){return g0("/agent/recordings/redact-preview",{method:"POST",body:JSON.stringify({payload:_,...$})})}async function n7(_){return g0("/agent/ui-state",{method:"POST",body:JSON.stringify(_||{})})}async function WL(_,$=[],j=null){let Z=j?`?chat_jid=${encodeURIComponent(j)}`:"";return g0(`/post${Z}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function OL(_,$,j=[],Z=null){let X=Z?`?chat_jid=${encodeURIComponent(Z)}`:"";return g0(`/post/reply${X}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function LL(_,$=!1,j=null){let Z=j?`&chat_jid=${encodeURIComponent(j)}`:"",X=`/post/${_}?cascade=${$?"true":"false"}${Z}`;return g0(X,{method:"DELETE"})}async function A_(_,$,j=null,Z=[],X=null,G=null){let q=G?`?chat_jid=${encodeURIComponent(G)}`:"",Q={content:$,thread_id:j,media_ids:Z,client_context:{screen_hint:Nq()}};if(X==="auto"||X==="queue"||X==="steer")Q.mode=X;return g0(`/agent/${_}/message${q}`,{method:"POST",body:JSON.stringify(Q)})}async function B6(_="web:default"){let $=typeof _==="string"&&_.trim()?_.trim():"web:default";return g0(`/agent/commands?chat_jid=${encodeURIComponent($)}`)}async function F6(){return g0("/agent/settings/quick-actions")}async function d7(_){return g0("/agent/settings/quick-actions",{method:"POST",body:JSON.stringify(_||{})})}async function o7(_){return g0("/agent/settings/workspace",{method:"POST",body:JSON.stringify(_||{})})}async function i7(){return g0("/agent/settings/environment")}async function h2(_){return g0("/agent/settings/environment",{method:"POST",body:JSON.stringify(_||{})})}async function JL(){return g0("/agent/active-chats")}async function EL(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let Z=j.toString()?`?${j.toString()}`:"";return g0(`/agent/branches${Z}`)}async function AL(_,$={}){return g0("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{}})})}async function s7(_){return g0("/agent/root-session",{method:"POST",body:JSON.stringify({agent_name:_})})}async function ML(_,$={}){return g0("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function kL(_){return g0("/agent/branch-merge-parent",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function TL(_){return g0("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function yL(_){return g0("/agent/branch-purge",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function wL(_,$){return g0("/agent/rename-jid",{method:"POST",body:JSON.stringify({old_jid:_,new_jid:$})})}async function IL(_,$={}){return g0("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function xL(_,$,j,Z="auto",X={}){let G={source_chat_jid:_,content:j,mode:Z,...X?.sourceAgentName?{source_agent_name:X.sourceAgentName}:{},...X?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return g0("/agent/peer-message",{method:"POST",body:JSON.stringify(G)})}async function a7(){return g0("/agent/push/vapid-public-key")}async function t7(_,$={}){let j={subscription:_,...$?.deviceId?{device_id:$.deviceId}:{}};return g0("/agent/push/subscription",{method:"POST",body:JSON.stringify(j)})}async function e7(_,$={}){let j={subscription:_,...$?.deviceId?{device_id:$.deviceId}:{}};return g0("/agent/push/subscription",{method:"DELETE",body:JSON.stringify(j)})}async function CL(){return g0("/agent/roster")}async function PL(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return g0(`/agent/status${$}`)}async function fL(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return g0(`/agent/context${$}`)}async function RL(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return g0(`/agent/autoresearch/status${$}`)}async function SL(_=null,$={}){return g0("/agent/autoresearch/stop",{method:"POST",body:JSON.stringify({chat_jid:_||void 0,generate_report:$?.generateReport!==!1})})}async function bL(_=null){return g0("/agent/autoresearch/dismiss",{method:"POST",body:JSON.stringify({chat_jid:_||void 0})})}async function gL(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return g0(`/agent/queue-state${$}`)}async function uL(_,$=null){let j=await fetch(m1+"/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function vL(_,$=null){let j=await fetch(m1+"/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function mL(_,$,j=null){let Z=await fetch(m1+"/agent/queue-reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({from_index:_,to_index:$,chat_jid:j||void 0})});if(!Z.ok){let X=await Z.json().catch(()=>({error:"Failed to reorder queued item"}));throw Error(X.error||`HTTP ${Z.status}`)}return Z.json()}async function x4(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return g0(`/agent/models${$}`)}async function cL(_="provider-ready"){return g0("/agent/oobe/complete",{method:"POST",body:JSON.stringify({kind:_})})}async function _9(_){let $=new FormData;$.append("file",_);let j=await fetch(m1+"/media/upload",{method:"POST",body:$});if(!j.ok){let Z=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function H5(_,$,j=null){let Z=await fetch(m1+"/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Z.ok){let X=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(X.error||`HTTP ${Z.status}`)}return Z.json()}async function $9(_){let $=await fetch(m1+"/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function hL(_,$={}){let j=await fetch(m1+"/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let G=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(G.error||`HTTP ${j.status}`)}let Z=null,X=null;if(await DL(j,(G,q)=>{if($.onEvent?.(G,q),G==="side_prompt_thinking_delta")$.onThinkingDelta?.(q?.delta||"");else if(G==="side_prompt_text_delta")$.onTextDelta?.(q?.delta||"");else if(G==="side_prompt_done")Z=q;else if(G==="side_prompt_error")X=q}),X){let G=Error(X?.error||"Side prompt failed");throw G.payload=X,G}return Z}async function j9(_,$){let j=await fetch(m1+"/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function lL(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return g0(j)}async function pL(_,$,j){return g0("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function v_(_){return`${m1}/media/${_}`}function Z9(_){return`${m1}/media/${_}/thumbnail`}async function l2(_){let $=await fetch(`${m1}/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function rL(_){let $=await fetch(`${m1}/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function X9(_){let $=await fetch(`${m1}/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function U6(_="",$=2,j=!1){let Z=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return g0(Z)}async function G9(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return g0($)}async function q9(_="all"){let $=`/workspace/index-status?scope=${encodeURIComponent(_||"all")}`;return g0($)}async function Q9(_="all"){return g0("/workspace/reindex",{method:"POST",body:JSON.stringify({scope:_})})}async function V9(_,$=20000,j=null){let Z=j?`&mode=${encodeURIComponent(j)}`:"",X=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Z}`;return g0(X)}async function K9(_){return g0(`/workspace/stat?path=${encodeURIComponent(_)}`)}async function nL(_,$){return g0("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function dL(_){return g0("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}function iL(_,$="",j={}){let Z=new URLSearchParams;if($)Z.set("path",$);if(j.overwrite)Z.set("overwrite","1");let X=Z.toString();return X?`${_}?${X}`:_}function sL(){if(globalThis.crypto?.randomUUID)return globalThis.crypto.randomUUID();return`upload-${Date.now()}-${Math.random().toString(36).slice(2)}`}function aL(_,$,j,Z){return new Promise((X,G)=>{let q=new XMLHttpRequest;q.open("POST",m1+$);for(let[Q,K]of Object.entries(j||{}))if(K!==void 0&&K!==null)q.setRequestHeader(Q,String(K));q.upload.onprogress=(Q)=>{if(typeof Z==="function")Z({loaded:Q.lengthComputable?Q.loaded:0,total:Q.lengthComputable?Q.total:_.size,lengthComputable:Q.lengthComputable})},q.onload=()=>{try{let Q=q.responseText?JSON.parse(q.responseText):{};if(q.status>=200&&q.status<300)X(Q);else{let K=Error(Q.error||`HTTP ${q.status}`);K.status=q.status,K.code=Q.code,G(K)}}catch{let Q=Error(`HTTP ${q.status}`);Q.status=q.status,G(Q)}},q.onerror=()=>G(Error("Upload failed (network error)")),q.ontimeout=()=>G(Error("Upload timed out")),q.send(_)})}async function tL(_,$="",j={}){let Z=sL(),X=iL("/workspace/upload-chunk",$,j),G=Math.max(1,Math.min(S7,Number(j.chunkSize)||oL)),q=Math.max(0,Number(_?.size)||0),Q=Math.max(1,Math.ceil(q/G)),K=0,V=null;for(let Y=0;Y<Q;Y+=1){let N=Y*G,F=Math.min(q,N+G),B=_.slice(N,F),D=B.size;if(V=await aL(B,X,{"X-Upload-Id":Z,"X-Chunk-Index":Y,"X-Chunk-Total":Q,"X-File-Name":_?.name||"upload.bin","X-File-Size":q},(z)=>{if(typeof j.onProgress!=="function")return;let H=Math.min(q,K+(z?.loaded||0)),W=q||1;j.onProgress({loaded:H,total:W,percent:Math.round(H/W*100),chunkIndex:Y,chunkTotal:Q})}),K+=D,typeof j.onProgress==="function"){let z=q||1,H=q?K:z;j.onProgress({loaded:H,total:z,percent:Math.round(H/z*100),chunkIndex:Y+1,chunkTotal:Q})}}return V}async function p2(_,$="",j={}){if(_?.size>S7){let Z=(_.size/1048576).toFixed(0),X=(S7/1048576).toFixed(0),G=Error(`File too large (${Z} MB). Maximum upload size is ${X} MB.`);throw G.code="file_too_large",G}return await tL(_,$,j)}async function Y9(_,$,j=""){let Z=await fetch(m1+"/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Z.ok){let X=await Z.json().catch(()=>({error:"Create failed"})),G=Error(X.error||`HTTP ${Z.status}`);throw G.status=Z.status,G.code=X.code,G}return Z.json()}async function N9(_,$){let j=await fetch(m1+"/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Rename failed"})),X=Error(Z.error||`HTTP ${j.status}`);throw X.status=j.status,X.code=Z.code,X}return j.json()}async function B9(_,$){let j=await fetch(m1+"/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Move failed"})),X=Error(Z.error||`HTTP ${j.status}`);throw X.status=j.status,X.code=Z.code,X}return j.json()}async function F9(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return g0($,{method:"DELETE"})}async function D6(_,$=!1){return g0("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function z6(_,$={}){let j=new URLSearchParams({path:String(_||"")});if($.download)j.set("download","1");return`${m1}/workspace/raw?${j.toString()}`}function r2(_){return z6(_,{download:!0})}function n2(_,$=!1){let j=`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`;return`${m1}/workspace/download?${j}`}class d2{onEvent;onStatusChange;chatJid;eventSource;reconnectTimeout;reconnectDelay;status;reconnectAttempts;cooldownUntil;connecting;lastActivityAt;staleCheckTimer;staleThresholdMs;constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource(m1+"/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(Z)=>{this.markActivity(),this.onEvent(j,JSON.parse(Z.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),$("ui_meters"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_working_indicator","extension_ui_working_visible","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Z=Math.max(this.cooldownUntil-j,0),X=Math.max(this.reconnectDelay,Z);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},X),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}var m1="",S7=1073741824,oL=8388608;var y1=L1(()=>{Y6()});function O5(_){let $=typeof _==="string"?_.trim():"";return $?$:null}function _$(_={}){if(typeof window>"u")return;let $=O5(_.section);try{if(window.__piclawSettingsOpenRequested=!0,$)window.__piclawSettingsRequestedSection=$;else delete window.__piclawSettingsRequestedSection}catch(j){console.debug("[settings-dialog-events] failed to record open request flags",j)}window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:$?{section:$}:void 0}))}function M9(){if(typeof window>"u")return null;return O5(window.__piclawSettingsRequestedSection)}function t2(){if(typeof window>"u")return{open:!1,section:null};let _=Boolean(window.__piclawSettingsOpenRequested),$=M9();try{window.__piclawSettingsOpenRequested=!1,delete window.__piclawSettingsRequestedSection}catch(j){console.debug("[settings-dialog-events] failed to clear open request flags",j)}return{open:_,section:$}}function o$({children:_,className:$=""}){let[j,Z]=C(null);return b(()=>{if(typeof document>"u")return;let X=document.createElement("div");return X.className=$||"",document.body.appendChild(X),Z(X),()=>{try{H$(null,X)}finally{X.remove()}}},[]),b(()=>{if(!j)return;j.className=$||"";return},[$,j]),Z5(()=>{if(!j)return;H$(_,j);return},[_,j]),null}var e2=L1(()=>{M0()});function k9(_,$){let j=String(_.label||"").localeCompare(String($.label||""),void 0,{sensitivity:"base"});if(j!==0)return j;return String(_.id||"").localeCompare(String($.id||""),void 0,{sensitivity:"base"})}function i$(_){let $=f4.findIndex((j)=>j.id===_.id);if($>=0)f4[$]=_;else f4.push(_);f4.sort(k9)}function _Q(_){let $=f4.findIndex((j)=>j.id===_);if($>=0)f4.splice($,1)}function $Q(){return[...f4]}function T9(){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent("piclaw:settings-panes-changed"))}var f4;var L5=L1(()=>{f4=[]});function AJ(_){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(R4,{detail:{enabled:Boolean(_)}}))}function XQ(_){if(typeof fetch!=="function")return;n7({ui_meters:_}).catch(($)=>{console.debug("[meters] Failed to persist meters UI state.",$)})}function MJ(_){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent($8,{detail:{collapsed:Boolean(_)}}))}function M6(_=!1){return L$(jQ,_)}function GQ(_=!1){return L$(ZQ,_)}function _8(_,$={}){let j=$.persist!==!1,Z=$.persistServer!==!1,X=Boolean(_);if(j)B1(jQ,X?"true":"false");if(Z)XQ({enabled:X});return AJ(X),X}function y9(_,$={}){let j=$.persist!==!1,Z=$.persistServer!==!1,X=Boolean(_);if(j)B1(ZQ,X?"true":"false");if(Z)XQ({collapsed:X});return MJ(X),X}function w9(_){let $=typeof _?.mode==="string"?_.mode.trim().toLowerCase():"";if(typeof _?.enabled==="boolean")_8(Boolean(_.enabled),{persistServer:!1});else if($==="toggle"){let j=!M6(!1);_8(j,{persistServer:!1})}if(typeof _?.collapsed==="boolean")y9(Boolean(_.collapsed),{persistServer:!1})}var jQ="piclaw_system_meters_enabled",ZQ="piclaw_system_meters_collapsed",R4="piclaw-meters-change",$8="piclaw-meters-collapsed-change";var j8=L1(()=>{y1()});function qQ(_,$){if(_===""||_===null||_===void 0)return $;let j=Number(_);return Number.isFinite(j)?j:$}function QQ(_,{min:$=-1/0,max:j=1/0}={}){let Z=Number.isFinite(Number($))?Number($):-1/0,X=Number.isFinite(Number(j))?Number(j):1/0;return Math.min(X,Math.max(Z,Number(_)))}function T$(_,{fallback:$=0,min:j=-1/0,max:Z=1/0}={}){let X=qQ(_,$);return QQ(X,{min:j,max:Z})}function kJ(_,{direction:$=1,step:j=1,fallback:Z=0,min:X=-1/0,max:G=1/0}={}){let q=T$(_,{fallback:Z,min:X,max:G}),Q=Math.abs(qQ(j,1))||1,K=Number($)<0?-1:1;return QQ(q+K*Q,{min:X,max:G})}function b1({value:_,min:$,max:j,step:Z=1,fallback:X,width:G="80px",disabled:q=!1,label:Q,onChange:K}){let V=Number.isFinite(Number(X))?Number(X):T$(_,{fallback:0,min:$,max:j}),[Y,N]=C(String(_??V)),F=g(!1);b(()=>{if(!F.current)N(String(_??V))},[_,V]);let B=R((z)=>{F.current=!1;let H=T$(z,{fallback:V,min:$,max:j});N(String(H)),K?.(H)},[V,$,j,K]),D=R((z)=>{F.current=!1;let H=kJ(_,{direction:z,step:Z,fallback:V,min:$,max:j});N(String(H)),K?.(H)},[V,j,$,K,Z,_]);return U`
        <span class="settings-number-stepper">
            <button
                type="button"
                class="settings-number-step-btn"
                aria-label=${`Decrease ${Q||"value"}`}
                title=${`Decrease ${Q||"value"}`}
                disabled=${q}
                onClick=${()=>D(-1)}
            >−</button>
            <input
                class="settings-number-input"
                type="text"
                inputmode="numeric"
                pattern="[0-9]*"
                value=${Y}
                disabled=${q}
                style=${`width:${G}`}
                onInput=${(z)=>{F.current=!0,N(z.target.value)}}
                onBlur=${(z)=>B(z.target.value)}
                onKeyDown=${(z)=>{if(z.key==="Enter")z.preventDefault(),B(z.target.value),z.target.blur()}}
            />
            <button
                type="button"
                class="settings-number-step-btn"
                aria-label=${`Increase ${Q||"value"}`}
                title=${`Increase ${Q||"value"}`}
                disabled=${q}
                onClick=${()=>D(1)}
            >+</button>
        </span>
    `}var S4=L1(()=>{M0()});function VQ(_){let $=String(_||"").trim();if(!$)return"";if($.startsWith("http://")||$.startsWith("https://")||$.startsWith("data:")||$.startsWith("blob:"))return $;if($.startsWith("/workspace/"))return`/workspace/file?path=${encodeURIComponent($.slice(11))}`;if($.startsWith("/"))return"";if(/^[a-zA-Z]:[\\/]/.test($))return"";if($.startsWith("\\\\"))return"";if($.includes("\\"))return"";return`/workspace/file?path=${encodeURIComponent($.replace(/^\.\//,""))}`}function KQ({value:_,onChange:$}){let j=g(null),[Z,X]=C(VQ(_));b(()=>{X(VQ(_))},[_]);let G=R((q)=>{let Q=q.target.files?.[0];if(!Q)return;let K=new FileReader;K.onload=()=>{let V=K.result;X(V),$?.(V)},K.readAsDataURL(Q)},[$]);return U`
        <div class="settings-avatar-inline" onClick=${()=>j.current?.click()} title="Click to upload">
            ${Z?U`<img src=${Z} alt="avatar" />`:U`<span class="settings-avatar-placeholder">+</span>`}
            <input type="file" accept="image/*" ref=${j} style="display:none" onChange=${G} />
        </div>
    `}function YQ(_={}){return{userName:_.userName||"",userAvatar:_.userAvatar||"",assistantName:_.assistantName||"",assistantAvatar:_.assistantAvatar||"",composeUploadLimitMb:_.composeUploadLimitMb??32,workspaceUploadLimitMb:_.workspaceUploadLimitMb??256}}async function TJ(_,$={}){let j=typeof _==="string"?_:"";if(!j)return!1;let Z=$.navigator??(typeof navigator<"u"?navigator:null),X=$.document??(typeof document<"u"?document:null);if(Z?.clipboard?.writeText)try{return await Z.clipboard.writeText(j),!0}catch(G){}try{if(!X?.body||typeof X.createElement!=="function"||typeof X.execCommand!=="function")return!1;let G=X.createElement("textarea");G.value=j,G.setAttribute?.("readonly",""),G.style.position="fixed",G.style.left="-9999px",G.style.top="0",G.style.opacity="0",X.body.appendChild(G),G.focus?.(),G.select?.();let q=Boolean(X.execCommand("copy"));return X.body.removeChild(G),q}catch(G){return!1}}function I9({settingsData:_,setStatus:$,mergeSettingsData:j}){let[Z,X]=C(""),[G,q]=C(""),[Q,K]=C(""),[V,Y]=C(""),[N,F]=C(32),[B,D]=C(256),[z,H]=C(""),[W,M]=C(!1),[E,L]=C(!1),[x,I]=C(!1),[J,k]=C(()=>M6(!1)),[O,T]=C(!1),y=g(""),A=g(null),P=g(!0);b(()=>{return P.current=!0,()=>{P.current=!1}},[]);let f=R((X0)=>{let Z0=YQ(X0);X(Z0.userName),q(Z0.userAvatar),K(Z0.assistantName),Y(Z0.assistantAvatar),F(Z0.composeUploadLimitMb),D(Z0.workspaceUploadLimitMb),H(X0?.widgetToken||""),y.current=JSON.stringify(Z0)},[]);b(()=>{f(_||{})},[_,f]),b(()=>{let X0=(Z0)=>{k(Boolean(Z0?.detail?.enabled))};return window.addEventListener(R4,X0),()=>window.removeEventListener(R4,X0)},[]);let u=G0(()=>JSON.stringify(YQ({userName:Z,userAvatar:G,assistantName:Q,assistantAvatar:V,composeUploadLimitMb:N,workspaceUploadLimitMb:B})),[Z,G,Q,V,N,B]);b(()=>{if(u===y.current)return;if(A.current)clearTimeout(A.current);return A.current=setTimeout(async()=>{if(!P.current)return;let X0=document.activeElement;if(X0&&X0.closest?.(".settings-number-stepper"))return;try{let Z0=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:u}),q0=await Z0.json().catch(()=>({}));if(!P.current)return;if(!Z0.ok||!q0?.ok||!q0?.settings)return;y.current=u,j?.(q0.settings),T(!0),setTimeout(()=>{if(P.current)T(!1)},4000)}catch(Z0){console.warn("[settings/general] Failed to persist general settings snapshot.",Z0)}},800),()=>{if(A.current)clearTimeout(A.current)}},[u,j]);let c=_?.instanceTotp||{configured:!1,issuer:Q||"Piclaw",label:Z?`${Q||"Piclaw"}:${Z}`:Q||"Piclaw",secret:"",otpauth:"",qrSvg:""},r=R(async()=>{if(!z)return;if(await TJ(z))L(!0),setTimeout(()=>{if(P.current)L(!1)},3000);else $?.("Could not copy widget token. Select the token field and copy manually."),console.warn("[settings/general] Failed to copy widget token. Clipboard APIs unavailable or blocked.")},[z,$]),e=R(async()=>{if(x)return;if(!confirm("Regenerate the widget token? Existing macOS widgets using the old token will stop updating."))return;I(!0);try{let X0=await fetch("/agent/settings/widget-token/regenerate",{method:"POST"}),Z0=await X0.json().catch(()=>({}));if(!X0.ok||!Z0?.ok||!Z0?.settings)throw Error(Z0?.error||"Failed to regenerate widget token.");H(Z0.settings.widgetToken||""),j?.(Z0.settings),T(!0),setTimeout(()=>{if(P.current)T(!1)},4000)}catch(X0){console.warn("[settings/general] Failed to regenerate widget token.",X0)}finally{if(P.current)I(!1)}},[x,j]),m=typeof window<"u"&&window.isSecureContext,$0=z?"•".repeat(Math.min(Math.max(z.length,16),48)):"—",W0=W?z||"—":$0;return U`
        <div class="settings-section">
            ${O&&U`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Settings applied. Changes take effect on the next turn.
                </div>
            `}
            <h3>Identity</h3>
            <div class="settings-row">
                <label>User</label>
                <${KQ} value=${G} onChange=${q} />
                <input type="text" value=${Z} onInput=${(X0)=>X(X0.target.value)} placeholder="Your name" />
            </div>
            <div class="settings-row">
                <label>Agent</label>
                <${KQ} value=${V} onChange=${Y} />
                <input type="text" value=${Q} onInput=${(X0)=>K(X0.target.value)} placeholder="Agent name" />
            </div>

            <h3 style="margin-top:20px">Notifications</h3>
            ${m?U`
                <div class="settings-row">
                    <label>Browser notifications</label>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <span class="settings-hint" style="margin:0">
                            Use the 🔔 bell button in the compose bar to enable/disable notifications.
                            Web Push requires HTTPS or localhost.
                        </span>
                    </div>
                </div>
            `:U`
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
                        onChange=${()=>{let X0=_8(!J);k(X0)}} />
                    <span class="settings-hint" style="margin:0">CPU/memory/network meters in the status bar. This browser only.</span>
                </div>
            </div>

            <h3 style="margin-top:20px">Instance Configuration</h3>
            <div class="settings-row">
                <label>Compose upload (MB)</label>
                <${b1}
                    label="compose upload limit"
                    value=${N}
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
                <${b1}
                    label="workspace upload limit"
                    value=${B}
                    min=${1}
                    max=${1024}
                    fallback=${256}
                    width="80px"
                    onChange=${D}
                />
                <span class="settings-hint" style="margin:0">defaults to 256 MB; chunked uploads allow up to 1 GB</span>
            </div>

            <h3 style="margin-top:20px">Authentication</h3>
            <div class="settings-row settings-row-vertical settings-widget-token-row">
                <label>Widget bearer token</label>
                <div class="settings-keychain-reveal-panel settings-widget-token-panel">
                    <div class="settings-keychain-reveal-field settings-widget-token-field">
                        <span class="settings-keychain-reveal-label">Token</span>
                        <code class="settings-keychain-reveal-value settings-widget-token-value">${W0}</code>
                        <button class=${`settings-keychain-reveal-btn${W?" active":""}`}
                            type="button"
                            onClick=${()=>M((X0)=>!X0)}
                            disabled=${!z}
                            title=${W?"Hide token":"Reveal token"}>
                            ${W?U`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`:U`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`}
                        </button>
                        <button class="settings-keychain-copy-btn" type="button" onClick=${r} disabled=${!z} title="Copy token">
                            ${E?U`<span class="settings-widget-token-copied">Copied</span>`:U`<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`}
                        </button>
                        <button class="settings-keychain-prompt-submit settings-widget-token-regenerate" type="button" onClick=${e} disabled=${x}>${x?"Regenerating…":"Regenerate"}</button>
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
                ${c.configured?U`
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
    `}var NQ=L1(()=>{M0();j8();S4()});var FQ={};j_(FQ,{SessionsSection:()=>yJ});function BQ(_={}){return{sessionAutoRotate:_.sessionAutoRotate!==!1,sessionMaxSizeMb:_.sessionMaxSizeMb??16,sessionMaxLines:_.sessionMaxLines??4000,sessionMaxCompactions:_.sessionMaxCompactions??3,sessionIsolation:_.sessionIsolation||"none",toolUseBudget:_.toolUseBudget??64}}function yJ({settingsData:_,setStatus:$,mergeSettingsData:j}){let[Z,X]=C(!0),[G,q]=C(16),[Q,K]=C(4000),[V,Y]=C(3),[N,F]=C(64),[B,D]=C("none"),[z,H]=C(!1),W=g(""),M=g(null),E=g(!0);b(()=>{return E.current=!0,()=>{E.current=!1}},[]);let L=R((I)=>{let J=BQ(I);X(J.sessionAutoRotate),q(J.sessionMaxSizeMb),K(J.sessionMaxLines),Y(J.sessionMaxCompactions),F(J.toolUseBudget),D(J.sessionIsolation),W.current=JSON.stringify(J)},[]);b(()=>{L(_||{})},[_,L]);let x=G0(()=>JSON.stringify(BQ({sessionAutoRotate:Z,sessionMaxSizeMb:G,sessionMaxLines:Q,sessionMaxCompactions:V,toolUseBudget:N,sessionIsolation:B})),[Z,G,Q,V,N,B]);return b(()=>{if(x===W.current)return;if(M.current)clearTimeout(M.current);return M.current=setTimeout(async()=>{if(!E.current)return;let I=document.activeElement;if(I&&I.closest?.(".settings-number-stepper"))return;try{let J=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:x}),k=await J.json().catch(()=>({}));if(!E.current)return;if(!J.ok||!k?.ok||!k?.settings)return;W.current=x,j?.(k.settings),H(!0),setTimeout(()=>{if(E.current)H(!1)},4000)}catch(J){console.warn("[settings/sessions] Failed to persist session settings.",J)}},800),()=>{if(M.current)clearTimeout(M.current)}},[x,j]),U`
        <div class="settings-section">
            ${z&&U`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Settings applied. Changes take effect on the next turn.
                </div>
            `}
            <h3>Session Lifecycle</h3>
            <div class="settings-row">
                <label>Auto-rotate sessions</label>
                <input type="checkbox" checked=${Z} onChange=${(I)=>X(I.target.checked)} />
            </div>
            <div class="settings-row">
                <label>Max session size (MB)</label>
                <${b1}
                    label="max session size"
                    value=${G}
                    min=${1}
                    max=${256}
                    fallback=${32}
                    width="80px"
                    onChange=${q}
                />
            </div>

            <h3 style="margin-top:20px">Agent Behaviour</h3>
            <div class="settings-row">
                <label>Tool use budget</label>
                <${b1}
                    label="tool use budget"
                    value=${N}
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
                <select value=${B} onChange=${(I)=>D(I.target.value)}>
                    <option value="none">None — full cross-session visibility</option>
                    <option value="summary">Summary — tools visible, no arguments</option>
                    <option value="full">Full — sessions cannot see each other</option>
                </select>
            </div>
        </div>
    `}var UQ=L1(()=>{M0();S4()});var DQ={};j_(DQ,{__recordingsSettingsTest:()=>CJ,RecordingsSection:()=>xJ});function X8(_){if(!_)return"—";let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}function x9(_){if(_==="full")return"full / trusted";if(_==="metadata")return"metadata only";return"redacted"}function Z8({children:_,type:$="neutral"}){return U`<span class=${`settings-task-pill settings-task-pill-${$}`}>${_}</span>`}function wJ(){if(typeof window>"u")return"web:default";return String(window.__piclawCurrentChatJid||"web:default")}function k6(_){return String(_||"").split(`
`).map(($)=>$.trim()).filter(Boolean)}function IJ({recording:_,details:$,onDelete:j,onRefresh:Z}){if(!_)return U`<div class="settings-task-detail-empty">Select a recording to inspect, replay, export, or delete it.</div>`;let X=$?.meta||_,G=Array.isArray($?.events)?$.events:[],q=G.reduce((K,V)=>K+(Array.isArray(V.redactions)?V.redactions.length:0),0),Q=G.reduce((K,V)=>{let Y=V.kind||"event";return K[Y]=(K[Y]||0)+1,K},{});return U`
        <div class="settings-task-detail settings-recording-detail">
            <div class="settings-task-detail-header">
                <div>
                    <h4>${X.title||X.id}</h4>
                    <code>${X.id}</code>
                </div>
                <div class="settings-task-detail-actions">
                    <button onClick=${()=>window.open(p7(X.id),"_blank","noopener,noreferrer")}>Playback</button>
                    <button onClick=${Z}>Refresh</button>
                    <button class="danger" onClick=${()=>j(X)}>Delete</button>
                </div>
            </div>
            <div class="settings-task-detail-grid">
                <span>Status</span><strong>${X.status||"—"}</strong>
                <span>Mode</span><strong>${x9(X.mode)}</strong>
                <span>Chat</span><code>${X.chatJid||"—"}</code>
                <span>Started</span><strong>${X8(X.startedAt)}</strong>
                <span>Ended</span><strong>${X8(X.endedAt)}</strong>
                <span>Events</span><strong>${X.eventCount??G.length}</strong>
                <span>Redactions</span><strong>${q}</strong>
            </div>
            <div class="settings-recording-export-row">
                <a href=${N6(X.id,"json")}>Export JSON</a>
                <a href=${N6(X.id,"jsonl")}>Export JSONL</a>
                <a href=${N6(X.id,"html")}>Export standalone HTML</a>
            </div>
            <h4>Event summary</h4>
            ${G.length===0&&U`<p class="settings-hint">Open or refresh details to inspect trace events.</p>`}
            ${G.length>0&&U`
                <div class="settings-recording-event-summary">
                    ${Object.entries(Q).map(([K,V])=>U`<${Z8}>${K}: ${V}<//>`)}
                </div>
                <div class="settings-task-command-block">
                    <strong>First events</strong>
                    <pre>${JSON.stringify(G.slice(0,5),null,2)}</pre>
                </div>
            `}
        </div>
    `}function xJ({filter:_="",setStatus:$}){let[j,Z]=C([]),[X,G]=C([]),[q,Q]=C(!0),[K,V]=C(null),[Y,N]=C(null),[F,B]=C(null),[D,z]=C(!1),[H,W]=C(wJ),[M,E]=C(""),[L,x]=C("redacted"),[I,J]=C(!0),[k,O]=C(""),[T,y]=C(""),[A,P]=C('{"Authorization":"Bearer abc1234567890","content":"hello"}'),[f,u]=C(null);b(()=>{let h=(j0)=>{let Y0=String(j0?.detail?.chatJid||"").trim();if(Y0)W(Y0)};return window.addEventListener("piclaw:current-chat-changed",h),()=>window.removeEventListener("piclaw:current-chat-changed",h)},[]);let c=R(async(h=Y)=>{Q(!0),V(null);try{let j0=await m7(),Y0=j0.recordings||[];Z(Y0),G(j0.active||[]);let L0=Y0.find((s)=>s.id===h)||Y0[0]||null;if(N(L0?.id||null),L0?.id)B(await c2(L0.id));else B(null)}catch(j0){V(j0?.message||"Failed to load recordings.")}finally{Q(!1)}},[Y]);b(()=>{c()},[c]);let r=G0(()=>j.find((h)=>h.id===Y)||null,[j,Y]),e=G0(()=>X.find((h)=>h.chatJid===H)||null,[X,H]),m=String(_||"").trim().toLowerCase(),$0=G0(()=>{if(!m)return j;return j.filter((h)=>[h.id,h.title,h.chatJid,h.status,h.mode].some((j0)=>String(j0||"").toLowerCase().includes(m)))},[j,m]),W0=R(async(h)=>{if(N(h?.id||null),B(null),!h?.id)return;try{B(await c2(h.id))}catch(j0){$?.(j0?.message||"Failed to load recording.","error")}},[$]),X0=R(async()=>{if(D)return;z(!0);try{let h={keys:k6(k),patterns:k6(T)},j0=await c7({chat_jid:H,title:M||void 0,mode:L,include_timeline_snapshot:I,timeline_snapshot_limit:80,redaction:h});$?.(`Recording started for ${H}.`,"success"),await c(j0?.recording?.id)}catch(h){$?.(h?.message||"Failed to start recording.","error")}finally{z(!1)}},[D,H,k,T,I,c,L,$,M]),Z0=R(async(h=e)=>{if(!h||D)return;z(!0);try{let j0=await h7({id:h.id});$?.(`Recording stopped for ${h.chatJid}.`,"success"),await c(j0?.recording?.id)}catch(j0){$?.(j0?.message||"Failed to stop recording.","error")}finally{z(!1)}},[D,e,c,$]),q0=R(async(h)=>{if(!h||D)return;if(!window.confirm(`Delete recording ${h.id}?

${h.title||""}`))return;z(!0);try{await l7(h.id),$?.("Recording deleted.","success"),await c(null)}catch(j0){$?.(j0?.message||"Failed to delete recording.","error")}finally{z(!1)}},[D,c,$]),D0=R(async()=>{try{let h=JSON.parse(A||"null"),j0=await r7(h,{mode:L,redaction:{keys:k6(k),patterns:k6(T)}});u(j0.preview)}catch(h){u({error:h?.message||"Preview failed."})}},[k,T,L,A]);return U`
        <div class="settings-section settings-recordings-section">
            <div class="settings-recording-start-card">
                <h3>Session Recording</h3>
                <p class="settings-hint">Opt-in trace capture for deterministic playback and screen-recording exports. Playback never calls live agent or tool endpoints.</p>
                <div class="settings-recording-form-grid">
                    <label>Chat JID<input value=${H} onInput=${(h)=>W(h.target.value)} /></label>
                    <label>Title<input placeholder="Demo recording" value=${M} onInput=${(h)=>E(h.target.value)} /></label>
                    <label>Mode<select value=${L} onChange=${(h)=>x(h.target.value)}><option value="redacted">Redacted</option><option value="metadata">Metadata only</option><option value="full">Full / trusted local</option></select></label>
                    <label class="settings-recording-checkbox"><input type="checkbox" checked=${I} onChange=${(h)=>J(h.target.checked)} /> Include timeline snapshot</label>
                </div>
                <div class="settings-recording-form-grid settings-recording-redaction-grid">
                    <label>Extra redacted keys<textarea rows="2" placeholder="customer_id\ninternal_code" value=${k} onInput=${(h)=>O(h.target.value)} /></label>
                    <label>Extra regex patterns<textarea rows="2" placeholder="ACME-[0-9]+" value=${T} onInput=${(h)=>y(h.target.value)} /></label>
                </div>
                <div class="settings-task-detail-actions">
                    ${e?U`<button onClick=${()=>Z0(e)} disabled=${D}>Stop current chat recording</button>`:U`<button onClick=${X0} disabled=${D}>Start recording</button>`}
                    <button onClick=${()=>c()} disabled=${q}>Refresh</button>
                </div>
                ${X.length>0&&U`<div class="settings-recording-active-row">${X.map((h)=>U`<${Z8} type="active">REC ${h.chatJid}<//>`)}</div>`}
            </div>

            <details class="settings-recording-preview">
                <summary>Redaction preview</summary>
                <textarea rows="4" value=${A} onInput=${(h)=>P(h.target.value)} />
                <div class="settings-task-detail-actions"><button onClick=${D0}>Preview redaction</button></div>
                ${f&&U`<pre>${JSON.stringify(f,null,2)}</pre>`}
            </details>

            ${q&&U`<div class="settings-loading settings-loading-pane"><span class="settings-spinner"></span><span>Loading recordings…</span></div>`}
            ${K&&U`<div class="settings-error-state">${K}</div>`}
            ${!q&&!K&&j.length===0&&U`<div class="settings-empty-state"><strong>No recordings yet.</strong><p>Start a recording above, then use playback/export for deterministic screen capture.</p></div>`}
            ${!q&&!K&&j.length>0&&U`
                <div class="settings-task-layout">
                    <div class="settings-task-list" role="listbox" aria-label="Session recordings">
                        ${$0.map((h)=>U`
                            <button class=${`settings-task-row ${h.id===Y?"active":""}`} onClick=${()=>W0(h)}>
                                <span class="settings-task-row-main"><strong>${h.title||h.id}</strong><span>${h.chatJid} · ${X8(h.startedAt)}</span></span>
                                <span class="settings-task-row-meta"><${Z8} type=${h.status==="recording"?"active":"completed"}>${h.status}<//><${Z8}>${x9(h.mode)}<//></span>
                                <span class="settings-task-row-times">${h.eventCount||0} events</span>
                            </button>
                        `)}
                        ${$0.length===0&&U`<p class="settings-hint">No recordings match “${_}”.</p>`}
                    </div>
                    <${IJ} recording=${r} details=${F} onDelete=${q0} onRefresh=${()=>r&&W0(r)} />
                </div>
            `}
        </div>
    `}var CJ;var zQ=L1(()=>{M0();y1();CJ={formatDateTime:X8,modeLabel:x9,parseList:k6}});var HQ={};j_(HQ,{CompactionSection:()=>fJ});function PJ(_={}){return{compactionTimeoutSec:_.compactionTimeoutSec??180,compactionBackoffBaseMin:_.compactionBackoffBaseMin??15,compactionBackoffMaxMin:_.compactionBackoffMaxMin??360,compactionThresholdPercent:_.compactionThresholdPercent??75,compactionBackoffDecayFactor:_.compactionBackoffDecayFactor??0.5,progressWatchdogEnabled:Boolean(_.progressWatchdogEnabled??!1),progressWatchdogTimeoutSec:_.progressWatchdogTimeoutSec??120,compactionBackoffs:Array.isArray(_.compactionBackoffs)?_.compactionBackoffs:[],progressWatchdogPhases:Array.isArray(_.progressWatchdogPhases)?_.progressWatchdogPhases:[]}}function C9(_){let $=String(_||"").trim();if(!$)return"—";let j=new Date($);if(Number.isNaN(j.getTime()))return $;return j.toLocaleString()}function fJ({settingsData:_,setStatus:$,mergeSettingsData:j}){let[Z,X]=C(180),[G,q]=C(15),[Q,K]=C(360),[V,Y]=C(75),[N,F]=C(0.5),[B,D]=C(!1),[z,H]=C(120),[W,M]=C([]),[E,L]=C([]),[x,I]=C(!1),J=g(""),k=g(null),O=g(!0);b(()=>{return O.current=!0,()=>{O.current=!1}},[]);let T=R((P)=>{let f=PJ(P);X(f.compactionTimeoutSec),q(f.compactionBackoffBaseMin),K(f.compactionBackoffMaxMin),Y(f.compactionThresholdPercent),F(f.compactionBackoffDecayFactor),D(f.progressWatchdogEnabled),H(f.progressWatchdogTimeoutSec),M(f.compactionBackoffs),L(f.progressWatchdogPhases),J.current=JSON.stringify({compactionTimeoutSec:f.compactionTimeoutSec,compactionBackoffBaseMin:f.compactionBackoffBaseMin,compactionBackoffMaxMin:f.compactionBackoffMaxMin,compactionThresholdPercent:f.compactionThresholdPercent,compactionBackoffDecayFactor:f.compactionBackoffDecayFactor,progressWatchdogEnabled:f.progressWatchdogEnabled,progressWatchdogTimeoutSec:f.progressWatchdogTimeoutSec})},[]);b(()=>{T(_||{})},[_,T]);let y=G0(()=>JSON.stringify({compactionTimeoutSec:Z,compactionBackoffBaseMin:G,compactionBackoffMaxMin:Q,compactionThresholdPercent:V,compactionBackoffDecayFactor:N,progressWatchdogEnabled:B,progressWatchdogTimeoutSec:z}),[Z,G,Q,V,N,B,z]);b(()=>{if(y===J.current)return;if(k.current)clearTimeout(k.current);return k.current=setTimeout(async()=>{if(!O.current)return;let P=document.activeElement;if(P&&P.closest?.(".settings-number-stepper"))return;try{$?.("Saving compaction settings…","info");let f=await fetch("/agent/settings/compaction",{method:"POST",headers:{"Content-Type":"application/json"},body:y}),u=await f.json().catch(()=>({}));if(!O.current)return;if(!f.ok||!u?.ok||!u?.settings){$?.(u?.error||"Failed to save compaction settings.","error");return}J.current=y,j?.(u.settings),T({..._||{},...u.settings||{}}),$?.("Compaction settings saved.","success"),I(!0),setTimeout(()=>{if(O.current)I(!1),$?.(null)},4000)}catch(f){if(console.warn("[settings/compaction] Failed to persist compaction settings.",f),O.current)$?.("Failed to save compaction settings.","error")}},800),()=>{if(k.current)clearTimeout(k.current)}},[y,j,$,T,_]);let A=R(async(P)=>{try{$?.(`Clearing compaction suppression for ${P}…`,"info");let f=await fetch("/agent/settings/compaction/reset-backoff",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chatJid:P})}),u=await f.json().catch(()=>({}));if(!f.ok||!u?.ok||!u?.settings){$?.(u?.error||"Failed to clear compaction suppression.","error");return}j?.(u.settings),T({..._||{},...u.settings||{}}),$?.(`Cleared compaction suppression for ${P}.`,"success")}catch(f){console.warn("[settings/compaction] Failed to clear compaction suppression.",f),$?.("Failed to clear compaction suppression.","error")}},[T,j,$,_]);return U`
        <div class="settings-section">
            ${x&&U`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Compaction settings applied. Existing turns keep their current timers; new turns use the updated values.
                </div>
            `}

            <h3>Automatic compaction</h3>
            <div class="settings-row">
                <label>Compaction threshold (%)</label>
                <${b1}
                    label="compaction threshold"
                    value=${V}
                    min=${10}
                    max=${95}
                    fallback=${75}
                    width="80px"
                    onChange=${Y}
                />
                <span class="settings-hint" style="margin:0">auto-compact when context exceeds this % of window</span>
            </div>
            <div class="settings-row">
                <label>Compaction timeout (sec)</label>
                <${b1}
                    label="compaction timeout"
                    value=${Z}
                    min=${1}
                    max=${3600}
                    fallback=${180}
                    width="90px"
                    onChange=${X}
                />
                <span class="settings-hint" style="margin:0">Abort a stuck pre-prompt/manual compaction instead of hanging forever.</span>
            </div>
            <div class="settings-row">
                <label>Failure backoff base (min)</label>
                <${b1}
                    label="compaction backoff base"
                    value=${G}
                    min=${1}
                    max=${1440}
                    fallback=${15}
                    width="90px"
                    onChange=${q}
                />
                <span class="settings-hint" style="margin:0">First suppression window after a compaction failure.</span>
            </div>
            <div class="settings-row">
                <label>Failure backoff max (min)</label>
                <${b1}
                    label="compaction backoff max"
                    value=${Q}
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
                <${b1}
                    label="backoff decay factor"
                    value=${Math.round(N*100)}
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
                    <input type="checkbox" checked=${B} onChange=${(P)=>D(Boolean(P.target.checked))} />
                    <span class="settings-hint" style="margin:0">Disabled by default. When enabled, a helper process terminates the runtime if an active phase stops heartbeating.</span>
                </div>
            </div>
            <div class="settings-row">
                <label>Watchdog timeout (sec)</label>
                <${b1}
                    label="watchdog timeout"
                    value=${z}
                    min=${0}
                    max=${3600}
                    fallback=${120}
                    width="90px"
                    disabled=${!B}
                    onChange=${H}
                />
                <span class="settings-hint" style="margin:0">How long an active phase can go without a heartbeat before the watchdog kills the runtime.</span>
            </div>

            <h3 style="margin-top:20px">Active compaction suppressions</h3>
            ${W.length===0?U`
                <p class="settings-hint">No chats are currently under compaction backoff.</p>
            `:U`
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
                            ${W.map((P)=>U`
                                <tr>
                                    <td><code>${P.chatJid}</code></td>
                                    <td>${P.failureCount}</td>
                                    <td>${C9(P.backoffUntil)}</td>
                                    <td title=${P.lastErrorMessage||""}>${P.lastErrorMessage||"—"}</td>
                                    <td>
                                        <button class="settings-secondary-btn" onClick=${()=>A(P.chatJid)}>
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
            ${E.length===0?U`
                <p class="settings-hint">No active tracked phases right now.</p>
            `:U`
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
                            ${E.map((P)=>U`
                                <tr>
                                    <td><code>${P.chatJid}</code></td>
                                    <td>${P.phase}</td>
                                    <td>${C9(P.startedAt)}</td>
                                    <td>${C9(P.lastProgressAt)}</td>
                                </tr>
                            `)}
                        </tbody>
                    </table>
                </div>
            `}
        </div>
    `}var WQ=L1(()=>{M0();S4()});function LQ(_){let $=String(_||"").trim().toLowerCase();if(!$)return null;let j=bJ[$]||$;if(/^f(?:[1-9]|1[0-2])$/.test(j))return j;if(gJ.has(j))return j;if(j.length===1)return j;if(/^[a-z0-9]+$/.test(j))return j;return null}function J5(_){let $=String(_||"").trim();if(!$)return null;let j=$.split("+").map((G)=>G.trim()).filter(Boolean);if(!j.length)return null;let Z={ctrl:!1,meta:!1,alt:!1,shift:!1,key:""};for(let G of j){let q=G.toLowerCase(),Q=SJ[q];if(Q){Z[Q]=!0;continue}if(Z.key)return null;let K=LQ(G);if(!K||K==="escape")return null;Z.key=K}if(!Z.key)return null;let X=[];if(Z.ctrl)X.push("ctrl");if(Z.meta)X.push("meta");if(Z.alt)X.push("alt");if(Z.shift)X.push("shift");return X.push(Z.key),X.join("+")}function JQ(_){return String(_||"").split(/[\n,]/).map(($)=>J5($)).filter(($)=>Boolean($))}function a$(_){return _.join(", ")}function f9(){let _=C2(OQ);if(!_||typeof _!=="object")return{};let $={};for(let j of s$){let Z=_[j.id];if(!Array.isArray(Z))continue;let X=Z.map((G)=>J5(String(G||""))).filter((G)=>Boolean(G));$[j.id]=[...new Set(X)]}return $}function P9(_){if(B1(OQ,JSON.stringify(_)),typeof window<"u")window.dispatchEvent(new CustomEvent("piclaw:keyboard-shortcuts-changed",{detail:{config:_}}))}function EQ(_){return RJ.get(_)}function T6(_){let $=f9()[_];if(Array.isArray($))return $;return[...EQ(_).defaultBindings]}function AQ(_,$){let j=f9(),Z=EQ(_).defaultBindings,X=[...new Set($.map((G)=>J5(G)).filter((G)=>Boolean(G)))];if(X.length===Z.length&&X.every((G,q)=>G===Z[q]))delete j[_];else j[_]=X;P9(j)}function R9(_){if(!_){P9({});return}let $=f9();delete $[_],P9($)}function G8(){let _={};for(let $ of s$)_[$.id]=T6($.id);return _}function uJ(_){let $=typeof _==="string"?_:"";if(!$)return"";if($.length===1)return $.toLowerCase();return LQ($)||$.toLowerCase()}function vJ(_){let $=J5(_);if(!$)return null;let j={ctrl:!1,meta:!1,alt:!1,shift:!1,key:""};for(let Z of $.split("+")){if(Z==="ctrl"||Z==="meta"||Z==="alt"||Z==="shift"){j[Z]=!0;continue}j.key=Z}return j.key?j:null}function mJ(_,$){let j=vJ($);if(!j)return!1;if(uJ(_?.key)!==j.key)return!1;let X=!j.shift&&j.key.length===1&&/[^a-z0-9]/i.test(j.key);return Boolean(_?.ctrlKey)===j.ctrl&&Boolean(_?.metaKey)===j.meta&&Boolean(_?.altKey)===j.alt&&(X||Boolean(_?.shiftKey)===j.shift)}function y$(_,$){return T6($).some((j)=>mJ(_,j))}var OQ="piclaw_keyboard_shortcuts_v1",s$,RJ,SJ,bJ,gJ;var q8=L1(()=>{s$=[{id:"openHelp",label:"Open keyboard help",description:"Open Settings → Keyboard. Default: question mark and quote when focus is outside compose and other editable fields.",defaultBindings:["?",'"']},{id:"openSettings",label:"Open settings",description:"Open the settings dialog.",defaultBindings:["ctrl+,","meta+,","alt+,"]},{id:"previousChat",label:"Previous session",description:"Switch to the previous visible chat/session.",defaultBindings:["["]},{id:"nextChat",label:"Next session",description:"Switch to the next visible chat/session.",defaultBindings:["]"]},{id:"toggleDock",label:"Toggle dock",description:"Show or hide the bottom dock panes.",defaultBindings:["ctrl+`"]},{id:"toggleZenMode",label:"Toggle zen mode",description:"Collapse surrounding chrome for a focused chat view.",defaultBindings:["ctrl+shift+z","meta+shift+z"]}],RJ=new Map(s$.map((_)=>[_.id,_])),SJ={cmd:"meta",command:"meta",meta:"meta",super:"meta",ctrl:"ctrl",control:"ctrl",alt:"alt",option:"alt",shift:"shift"},bJ={esc:"escape",return:"enter",spacebar:"space"},gJ=new Set(["tab","enter","space","backspace","delete","insert","clear","home","end","pageup","pagedown","up","down","left","right"])});var MQ={};j_(MQ,{KeyboardSection:()=>hJ});function cJ(_,$,j){let Z=String(_||"").trim().toLowerCase();if(!Z)return!0;return[$.label,$.description,j,...$.defaultBindings||[]].some((X)=>String(X||"").toLowerCase().includes(Z))}function hJ({filter:_="",setStatus:$}){let[j,Z]=C(()=>{let K=G8();return Object.fromEntries(Object.entries(K).map(([V,Y])=>[V,a$(Y)]))});b(()=>{let K=()=>{let V=G8();Z(Object.fromEntries(Object.entries(V).map(([Y,N])=>[Y,a$(N)])))};return window.addEventListener("piclaw:keyboard-shortcuts-changed",K),()=>window.removeEventListener("piclaw:keyboard-shortcuts-changed",K)},[]);let X=G0(()=>s$.filter((K)=>{let V=String(j[K.id]||"");return cJ(_,K,V)}),[j,_]),G=(K)=>{let V=String(j[K]||"").trim(),N=(V?V.split(/[\n,]/).map((B)=>B.trim()).filter(Boolean):[]).filter((B)=>!J5(B));if(N.length>0){$?.(`Invalid shortcut: ${N[0]}. Escape is reserved and cannot be rebound.`,"error");return}let F=JQ(V);AQ(K,F),Z((B)=>({...B,[K]:a$(T6(K))})),$?.("Keyboard shortcuts saved.","success")},q=(K)=>{R9(K),Z((V)=>({...V,[K]:a$(T6(K))})),$?.("Keyboard shortcut reset to default.","success")};return U`
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
                <button class="settings-addon-btn" style="min-width:180px; height:40px; font-size:14px;" onClick=${()=>{R9();let K=G8();Z(Object.fromEntries(Object.entries(K).map(([V,Y])=>[V,a$(Y)]))),$?.("Keyboard shortcuts reset to defaults.","success")}}>Reset all to defaults</button>
            </div>

            <div class="settings-shortcut-list" style="display:grid; gap:16px;">
                ${X.map((K)=>U`
                    <div class="settings-shortcut-card" key=${K.id} style="display:grid; grid-template-columns:minmax(240px, 1.25fr) minmax(320px, 1fr); gap:18px; align-items:start; padding:18px 20px; border:1px solid var(--border-color, rgba(120,120,120,.22)); border-radius:16px; background:var(--panel-bg, rgba(255,255,255,.04));">
                        <div class="settings-shortcut-copy" style="min-width:0;">
                            <div class="settings-shortcut-title" style="font-size:17px; font-weight:700; line-height:1.3;">${K.label}</div>
                            <div class="settings-hint" style="margin:6px 0 0 0; font-size:14px; line-height:1.5;">${K.description}</div>
                            <div class="settings-shortcut-default" style="margin-top:10px; font-size:13px; color:var(--text-secondary);">Default: <code style="font-size:13px;">${a$(K.defaultBindings)}</code></div>
                        </div>
                        <div class="settings-shortcut-controls" style="display:grid; gap:10px; min-width:0;">
                            <input
                                type="text"
                                value=${j[K.id]||""}
                                placeholder=${a$(K.defaultBindings)}
                                onInput=${(V)=>Z((Y)=>({...Y,[K.id]:V.target.value}))}
                                style="width:100%; min-height:46px; padding:10px 14px; font-size:16px; line-height:1.35; font-family:var(--font-mono, ui-monospace, monospace); border-radius:12px;"
                            />
                            <div class="settings-shortcut-actions" style="display:flex; justify-content:flex-end; align-items:center; gap:10px; flex-wrap:wrap;">
                                <button class="settings-addon-btn settings-addon-btn-install" style="min-width:96px; height:40px; font-size:14px;" onClick=${()=>G(K.id)}>Save</button>
                                <button class="settings-addon-btn" style="min-width:96px; height:40px; font-size:14px;" onClick=${()=>q(K.id)}>Default</button>
                            </div>
                        </div>
                    </div>
                `)}
                ${X.length===0&&U`<div class="settings-hint">No shortcuts match this filter.</div>`}
            </div>
        </div>
    `}var kQ=L1(()=>{M0();q8()});function TQ(_,$=S9){let j=Number(_);if(!Number.isFinite(j))return $;return Math.min(300,Math.max(15,Math.round(j)))}function yQ(_,$=b9){let j=Number(_);if(!Number.isFinite(j))return $;return Math.min(8,Math.max(0,Math.round(j)))}function E5(){return{refreshIntervalSec:TQ(E4(V8,S9),S9),folderPreviewDepth:yQ(E4(K8,b9),b9)}}function wQ(_={}){let $=E5(),j={refreshIntervalSec:TQ(Object.prototype.hasOwnProperty.call(_,"refreshIntervalSec")?_.refreshIntervalSec:$.refreshIntervalSec,$.refreshIntervalSec),folderPreviewDepth:yQ(Object.prototype.hasOwnProperty.call(_,"folderPreviewDepth")?_.folderPreviewDepth:$.folderPreviewDepth,$.folderPreviewDepth)};if(B1(V8,String(j.refreshIntervalSec)),B1(K8,String(j.folderPreviewDepth)),typeof window<"u")window.dispatchEvent(new CustomEvent(Q8,{detail:{settings:j}}));return j}var Q8="piclaw:workspace-client-settings-updated",V8="workspaceRefreshIntervalSec",K8="workspaceFolderPreviewDepth",S9=60,b9=3;var g9=()=>{};var xQ={};j_(xQ,{WorkspaceSection:()=>lJ});function IQ(_={}){let $=_.workspaceSettings||{};return{webTerminalEnabled:$.webTerminalEnabled!==!1,vncAllowDirect:$.vncAllowDirect!==!1,treeMaxDepth:$.treeMaxDepth??4,treeMaxEntries:$.treeMaxEntries??5000}}function lJ({settingsData:_,setStatus:$,mergeSettingsData:j}){let[Z,X]=C(!0),[G,q]=C(!0),[Q,K]=C(4),[V,Y]=C(5000),[N,F]=C(60),[B,D]=C(3),[z,H]=C(!1),[W,M]=C(!1),E=g(""),L=g(null),x=g(null),I=g(null),J=g(!0);b(()=>{return J.current=!0,()=>{if(J.current=!1,L.current)clearTimeout(L.current);if(x.current)clearTimeout(x.current);if(I.current)clearTimeout(I.current)}},[]);let k=R((y)=>{let A=IQ(y),P=E5();X(A.webTerminalEnabled),q(A.vncAllowDirect),K(A.treeMaxDepth),Y(A.treeMaxEntries),F(P.refreshIntervalSec),D(P.folderPreviewDepth),E.current=JSON.stringify(A)},[]);b(()=>{k(_||{})},[_,k]);let O=G0(()=>JSON.stringify(IQ({workspaceSettings:{webTerminalEnabled:Z,vncAllowDirect:G,treeMaxDepth:Q,treeMaxEntries:V}})),[Z,G,Q,V]);b(()=>{if(O===E.current)return;if(L.current)clearTimeout(L.current);return L.current=setTimeout(async()=>{if(!J.current)return;let y=document.activeElement;if(y&&y.closest?.(".settings-number-stepper"))return;try{let A=await o7(JSON.parse(O));if(!J.current||!A?.ok||!A?.settings)return;if(E.current=O,j?.({workspaceSettings:A.settings}),$?.(null),H(!0),x.current)clearTimeout(x.current);x.current=setTimeout(()=>{if(J.current)H(!1)},4000)}catch(A){$?.(String(A?.message||A),"error")}},800),()=>{if(L.current)clearTimeout(L.current)}},[O,j,$]);let T=R((y)=>{let A=wQ(y);if(F(A.refreshIntervalSec),D(A.folderPreviewDepth),M(!0),I.current)clearTimeout(I.current);I.current=setTimeout(()=>{if(J.current)M(!1)},3000)},[]);return U`
        <div class="settings-section">
            ${z&&U`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Workspace settings applied. Server-side limits affect new workspace requests immediately.
                </div>
            `}
            ${W&&U`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Browser workspace settings applied immediately in this tab.
                </div>
            `}

            <h3>Access</h3>
            <div class="settings-row">
                <label>Enable web terminal</label>
                <input type="checkbox" checked=${Z} onChange=${(y)=>X(y.target.checked)} />
            </div>
            <div class="settings-row">
                <label>Allow direct VNC targets</label>
                <input type="checkbox" checked=${G} onChange=${(y)=>q(y.target.checked)} />
            </div>
            <p class="settings-hint">Terminal access updates immediately. Direct VNC target policy applies to new VNC requests.</p>

            <h3 style="margin-top:20px">Server scan guardrails</h3>
            <div class="settings-row">
                <label>Max tree depth</label>
                <${b1}
                    label="workspace tree max depth"
                    value=${Q}
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
                <${b1}
                    label="workspace tree max entries"
                    value=${V}
                    min=${250}
                    max=${5000}
                    step=${250}
                    fallback=${5000}
                    width="92px"
                    onChange=${Y}
                />
                <span class="settings-hint" style="margin:0">truncate oversized tree walks earlier</span>
            </div>

            <h3 style="margin-top:20px">This browser</h3>
            <div class="settings-row">
                <label>Refresh interval (seconds)</label>
                <${b1}
                    label="workspace refresh interval"
                    value=${N}
                    min=${15}
                    max=${300}
                    step=${15}
                    fallback=${60}
                    width="92px"
                    onChange=${(y)=>T({refreshIntervalSec:y})}
                />
            </div>
            <div class="settings-row">
                <label>Folder preview scan depth</label>
                <${b1}
                    label="folder preview scan depth"
                    value=${B}
                    min=${0}
                    max=${8}
                    fallback=${3}
                    width="80px"
                    onChange=${(y)=>T({folderPreviewDepth:y})}
                />
                <span class="settings-hint" style="margin:0">set to <code>0</code> to disable folder size preview scans</span>
            </div>
            <p class="settings-hint">Root and folder-expansion tree loads remain shallow; the folder size preview is the deepest workspace scan in the UI.</p>
        </div>
    `}var CQ=L1(()=>{M0();y1();g9();S4()});var PQ={};j_(PQ,{EnvironmentSection:()=>pJ});function u9(_={}){let $=_.environmentSettings||_.settings||_.environment||{};return{variables:Array.isArray($.variables)?$.variables:[],overrides:$.overrides&&typeof $.overrides==="object"?$.overrides:{},count:Number($.count||0),overrideCount:Number($.overrideCount||0),keychainEnvNames:Array.isArray($.keychainEnvNames)?$.keychainEnvNames:[]}}function pJ({settingsData:_,filter:$="",setStatus:j,mergeSettingsData:Z}){let[X,G]=C(()=>u9(_||{})),[q,Q]=C({}),[K,V]=C(""),[Y,N]=C(""),[F,B]=C(null);b(()=>{G(u9(_||{})),Q({})},[_]);let D=R((L)=>{let x=u9({environmentSettings:L?.settings||L});return G(x),Z?.({environmentSettings:x}),Q({}),x},[Z]),z=R(async()=>{try{let L=await i7();if(L?.ok)D(L.settings);j?.("Environment refreshed.","info")}catch(L){j?.(String(L?.message||L),"error")}},[D,j]),H=R(async(L,x)=>{let I=String(L||"").trim();if(!I)return;B(I);try{let J=await h2({action:"set",name:I,value:String(x??"")});if(J?.ok)D(J.settings);if(j?.(`Saved environment override for ${I}.`,"info"),I===K.trim())V(""),N("")}catch(J){j?.(String(J?.message||J),"error")}finally{B(null)}},[D,K,j]),W=R(async(L)=>{let x=String(L||"").trim();if(!x)return;B(x);try{let I=await h2({action:"clear",name:x});if(I?.ok)D(I.settings);j?.(`Cleared environment override for ${x}.`,"info")}catch(I){j?.(String(I?.message||I),"error")}finally{B(null)}},[D,j]),M=G0(()=>{let L=String($||"").trim().toLowerCase(),x=Array.isArray(X.variables)?X.variables:[];if(!L)return x;return x.filter((I)=>{return`${I?.name||""} ${I?.value||""} ${I?.source||""}`.toLowerCase().includes(L)})},[X.variables,$]),E=R((L,x)=>{Q((I)=>({...I||{},[L]:x}))},[]);return U`
        <div class="settings-section">
            <div style="display:flex; align-items:flex-start; justify-content:space-between; gap:12px; margin-bottom:12px;">
                <div>
                    <h3 style="margin-top:0">Environment</h3>
                    <p class="settings-hint" style="margin-top:4px">
                        Showing non-keychain environment variables only. Overrides are stored in extension KV and applied to <code>process.env</code>, so subsequent tool calls inherit them.
                    </p>
                </div>
                <button type="button" class="settings-secondary-btn" onClick=${z}>Refresh</button>
            </div>

            <div class="settings-row" style="align-items:flex-start; gap:10px;">
                <label>Add override</label>
                <div style="display:grid; grid-template-columns:minmax(180px, 0.7fr) minmax(240px, 1fr) auto; gap:8px; flex:1;">
                    <input
                        type="text"
                        value=${K}
                        placeholder="VARIABLE_NAME"
                        spellcheck="false"
                        onInput=${(L)=>V(L.target.value)}
                    />
                    <input
                        type="text"
                        value=${Y}
                        placeholder="value"
                        spellcheck="false"
                        onInput=${(L)=>N(L.target.value)}
                    />
                    <button
                        type="button"
                        disabled=${!K.trim()||F===K.trim()}
                        onClick=${()=>H(K,Y)}
                    >Save</button>
                </div>
            </div>

            <p class="settings-hint">
                ${X.count} variables visible • ${X.overrideCount} overrides active • ${X.keychainEnvNames.length} keychain-injected variables hidden
            </p>

            <div class="settings-tool-list" style="max-height:58vh; overflow:auto;">
                ${M.map((L)=>{let x=String(L?.name||""),I=Object.prototype.hasOwnProperty.call(q,x)?q[x]:L.value,J=I!==L.value,k=F===x;return U`
                        <div class="settings-tool-row" key=${x} style="grid-template-columns:minmax(180px,0.45fr) minmax(240px,1fr) auto auto; align-items:center;">
                            <span class="settings-tool-name" title=${x}>${x}</span>
                            <input
                                type="text"
                                value=${I}
                                spellcheck="false"
                                onInput=${(O)=>E(x,O.target.value)}
                                style="min-width:0; width:100%; font-family:var(--font-mono, monospace);"
                            />
                            <span class="settings-tool-kind" title=${L.overridden?"Overridden in KV":"Inherited from process environment"}>
                                ${L.overridden?"override":"process"}
                            </span>
                            <span style="display:flex; gap:6px; justify-content:flex-end;">
                                <button type="button" disabled=${k||!J} onClick=${()=>H(x,I)}>Save</button>
                                <button type="button" disabled=${k||!L.overridden} onClick=${()=>W(x)}>Clear</button>
                            </span>
                        </div>
                    `})}
                ${M.length===0&&U`<p class="settings-hint">No environment variables match "${$}".</p>`}
            </div>
        </div>
    `}var fQ=L1(()=>{M0();y1()});var RQ={};j_(RQ,{ProvidersSection:()=>nJ});function rJ(_){switch(_){case"oauth":return"OAuth";case"api_key":return"API key";case"custom":return"Configured";default:return"Configured"}}function nJ({providers:_,setStatus:$}){let[j,Z]=C(null),[X,G]=C(null),[q,Q]=C({}),K=R((H,W)=>{Q((M)=>({...M,[H]:W}))},[]),V=R(async(H)=>{let W=(q.apiKey||"").trim();if(!W){$?.("API key cannot be empty.","error");return}Z(H),$?.(`Configuring ${H}…`,"info");try{let M=JSON.stringify({provider:H,method:"api_key",api_key:W}),E=await A_("default",`/login __step2 ${M}`,null,[]);if(E?.command?.status==="error"){$?.(E.command.message,"error");return}$?.(E?.command?.message||`${H} configured.`,"success"),G(null),Q({})}catch(M){$?.(String(M.message||M),"error")}finally{Z(null)}},[q,$]),Y=R(async(H,W)=>{Z(H),$?.(`Configuring ${H}…`,"info");try{let M={provider:H,method:"custom"};for(let x of W.customFields||[])M[x.key]=(q[x.key]||"").trim();let E=JSON.stringify(M),L=await A_("default",`/login __step2 ${E}`,null,[]);if(L?.command?.status==="error"){$?.(L.command.message,"error");return}$?.(L?.command?.message||`${H} configured.`,"success"),G(null),Q({})}catch(M){$?.(String(M.message||M),"error")}finally{Z(null)}},[q,$]),N=R(async(H)=>{Z(H),$?.(`Starting OAuth for ${H}…`,"info");try{let W=JSON.stringify({provider:H}),E=(await A_("default",`/login __step1 ${W}`,null,[]))?.command?.message||"";if(E.includes("http")){let L=E.match(/(https?:\/\/[^\s)]+)/);if(L)window.open(L[1],"_blank","noopener"),$?.("OAuth window opened. Complete the sign-in flow, then close this message.","success");else $?.(E,"success")}else $?.(E||`OAuth flow started for ${H}. Check the chat.`,"success")}catch(W){$?.(String(W.message||W),"error")}finally{Z(null)}},[$]),F=R(async(H)=>{if(j)return;Z(H),$?.(`Logging out ${H}…`,"info");try{await A_("default",`/logout ${H}`,null,[]),$?.(`Logged out ${H}. Restart may be needed.`,"success")}catch(W){$?.(String(W.message||W),"error")}finally{Z(null)}},[j,$]),B=_||[],D=(H)=>X===H,z=(H)=>{G((W)=>W===H?null:H),Q({})};return U`
        <div class="settings-section">
            <h3>Providers</h3>
            <div class="settings-provider-list">
                ${B.map((H)=>U`
                    <div class=${`settings-provider-card${H.configured?" configured":""}`}>
                        <div class="settings-provider-card-header" onClick=${()=>!H.configured&&z(H.id)}>
                            <div class="settings-provider-card-title">
                                <strong>${H.name}</strong>
                                <span class="settings-provider-id">${H.id}</span>
                                ${H.configured&&U`<span class="settings-tag settings-tag-skill">${rJ(H.authType)}</span>`}
                            </div>
                            <div class="settings-provider-card-meta">
                                ${H.hasOAuth&&U`<span class="settings-tag">OAuth</span>`}
                                ${H.hasApiKey&&U`<span class="settings-tag">API Key</span>`}
                                ${H.isCustom&&U`<span class="settings-tag">Custom</span>`}
                            </div>
                            <div class="settings-provider-card-actions">
                                ${H.configured?U`
                                    <button class="settings-addon-btn settings-addon-btn-remove"
                                        disabled=${j===H.id} onClick=${(W)=>{W.stopPropagation(),F(H.id)}}
                                    >${j===H.id?"…":"Logout"}</button>
                                    <button class="settings-addon-btn"
                                        disabled=${j===H.id} onClick=${(W)=>{W.stopPropagation(),z(H.id)}}
                                    >Reconfigure</button>
                                `:U`
                                    <button class="settings-addon-btn settings-addon-btn-install"
                                        disabled=${j===H.id} onClick=${(W)=>{W.stopPropagation(),z(H.id)}}
                                    >Set up</button>
                                `}
                            </div>
                        </div>

                        ${D(H.id)&&U`
                            <div class="settings-provider-setup">
                                <p class="settings-hint settings-provider-setup-hint">Sign-in flows open in the browser. In narrow panes the setup form stacks vertically to avoid clipping.</p>
                                ${H.hasOAuth&&U`
                                    <div class="settings-provider-method">
                                        <button class="settings-addon-btn settings-addon-btn-install"
                                            disabled=${j===H.id}
                                            onClick=${()=>N(H.id)}>
                                            ${j===H.id?"Starting…":"Sign in with OAuth"}
                                        </button>
                                    </div>
                                `}
                                ${H.hasApiKey&&U`
                                    <div class="settings-provider-method">
                                        <div class="settings-provider-field-row">
                                            <label>API Key</label>
                                            <input type="password" value=${q.apiKey||""}
                                                onInput=${(W)=>K("apiKey",W.target.value)}
                                                placeholder=${H.apiKeyHint||"Enter API key"} />
                                            <button class="settings-addon-btn settings-addon-btn-install"
                                                disabled=${j===H.id||!(q.apiKey||"").trim()}
                                                onClick=${()=>V(H.id)}>
                                                ${j===H.id?"…":"Save"}
                                            </button>
                                        </div>
                                    </div>
                                `}
                                ${H.isCustom&&U`
                                    <div class="settings-provider-method">
                                        ${(H.customFields||[]).map((W)=>U`
                                            <div class="settings-provider-field-row">
                                                <label>${W.label}${W.required?" *":""}</label>
                                                <input type="text" value=${q[W.key]||""}
                                                    onInput=${(M)=>K(W.key,M.target.value)}
                                                    placeholder=${W.placeholder||""} />
                                            </div>
                                        `)}
                                        <div class="settings-provider-form-actions">
                                            <button class="settings-addon-btn settings-addon-btn-install"
                                                disabled=${j===H.id}
                                                onClick=${()=>Y(H.id,H)}>
                                                ${j===H.id?"Configuring…":"Save configuration"}
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
    `}var SQ=L1(()=>{M0();y1()});var bQ={};j_(bQ,{ModelsSection:()=>aJ});function iJ(_){return typeof _==="string"&&_.toLowerCase()==="anthropic"}function sJ({thinkingLevel:_,supportsThinking:$,provider:j,availableLevels:Z,onSetLevel:X,disabled:G}){let q=iJ(j)?dJ:oJ,Q=Z&&Z.length>1?Z:["off","minimal","low","medium","high"],K=Math.max(0,Q.indexOf(_??"off"));if(!$)return U`<div class="settings-thinking-slider"><label>Thinking level</label><p class="settings-hint" style="margin:4px 0 0">Current model does not support thinking.</p></div>`;return U`
        <div class="settings-thinking-slider">
            <label>Thinking level: <strong>${q[Q[K]]||Q[K]}</strong></label>
            <div class="settings-slider-track">
                <input type="range" min="0" max=${Q.length-1} step="1" value=${K} disabled=${G}
                    onInput=${(V)=>X(Q[parseInt(V.target.value,10)])} />
                <div class="settings-slider-labels">
                    ${Q.map((V,Y)=>U`<span class=${Y===K?"active":""} onClick=${()=>!G&&X(V)}>${q[V]||V}</span>`)}
                </div>
            </div>
        </div>
    `}function aJ({filter:_=""}){let[$,j]=C(null),[Z,X]=C(!1),[G,q]=C("off"),[Q,K]=C(!1),[V,Y]=C(["off"]),[N,F]=C(!1),B=R(async()=>{let I=await x4();if(j(I),I.thinking_level)q(I.thinking_level);if(K(Boolean(I.supports_thinking)),Array.isArray(I.available_thinking_levels)&&I.available_thinking_levels.length>0)Y(I.available_thinking_levels);return I},[]);b(()=>{B().catch(()=>j({models:[],model_options:[]}))},[]);let D=R(async(I)=>{if(Z)return;X(!0);try{await A_("default",`/model ${I}`,null,[]),await B()}catch(J){console.error("Failed to switch model:",J)}finally{X(!1)}},[Z,B]),z=R(async(I)=>{if(N)return;F(!0),q(I);try{let J=await A_("default",`/thinking ${I}`,null,[]);if(J?.command?.thinking_level)q(J.command.thinking_level);K(J?.command?.supports_thinking!==!1),await B()}catch(J){console.error("Failed to set thinking:",J),await B().catch((k)=>{})}finally{F(!1)}},[N,B]);if(!$)return U`<div class="settings-loading">Loading models\u2026</div>`;let H=$.model_options||[],W=$.current,E=H.find((I)=>I.label===W)?.provider||"",L=_.toLowerCase(),x=L?H.filter((I)=>I.label.toLowerCase().includes(L)||(I.provider||"").toLowerCase().includes(L)):H;return U`
        <div class="settings-models-split">
            <div class="settings-models-summary settings-hint">Model and provider names may wrap in narrow panes to avoid clipping.</div>
            <div class="settings-models-list">
                <table class="settings-table settings-borderless settings-models-table">
                    <thead><tr><th style="width:32px"></th><th>Model</th><th>Provider</th><th>Context</th><th style="text-align:center">Reasoning</th></tr></thead>
                    <tbody>
                        ${x.map((I)=>U`
                            <tr class=${I.label===W?"settings-row-active":""}>
                                <td><input type="radio" name="settings-model" checked=${I.label===W} disabled=${Z} onChange=${()=>D(I.label)} /></td>
                                <td>${I.name||I.label}</td><td>${I.provider}</td>
                                <td>${I.context_window?(I.context_window/1000).toFixed(0)+"K":"—"}</td>
                                <td style="text-align:center">${I.reasoning?"\uD83E\uDDE0":"—"}</td>
                            </tr>
                        `)}
                        ${x.length===0&&U`<tr><td colspan="5" class="settings-empty">No models match "${_}"</td></tr>`}
                    </tbody>
                </table>
            </div>
            <div class="settings-models-footer">
                <${sJ}
                    thinkingLevel=${G}
                    supportsThinking=${Q}
                    provider=${E}
                    availableLevels=${V}
                    onSetLevel=${z}
                    disabled=${N||Z} />
            </div>
        </div>
    `}var dJ,oJ;var gQ=L1(()=>{M0();y1();dJ={off:"off",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"max"},oJ={off:"off",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"xhigh"}});var vQ={};j_(vQ,{ThemeSection:()=>tJ});function uQ(_={}){return{uiTheme:typeof _.uiTheme==="string"&&_.uiTheme.trim()?_.uiTheme.trim():"default",uiTint:typeof _.uiTint==="string"&&_.uiTint.trim()?_.uiTint.trim():""}}function tJ({themes:_,colorKeys:$,settingsData:j,setStatus:Z,mergeSettingsData:X}){let[G,q]=C("default"),[Q,K]=C(""),[V,Y]=C(!1),N=g(""),F=g(null),B=g(!0);b(()=>{return B.current=!0,()=>{B.current=!1}},[]);let D=R((E)=>{let L=uQ(E);q(L.uiTheme),K(L.uiTint),N.current=JSON.stringify(L)},[]);b(()=>{if(j){D(j);return}D({uiTheme:document.documentElement.dataset.colorTheme||"default",uiTint:document.documentElement.dataset.tint||""})},[j,D]);let z=R((E,L)=>{U5({theme:E,tint:L||null}),q(E||"default"),K(L||"")},[]),H=G0(()=>JSON.stringify(uQ({uiTheme:G,uiTint:Q})),[G,Q]);b(()=>{if(H===N.current)return;if(F.current)clearTimeout(F.current);return F.current=setTimeout(async()=>{if(!B.current)return;Y(!0);try{let E=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:H}),L=await E.json().catch(()=>({}));if(!B.current)return;if(!E.ok||!L?.ok||!L?.settings){Z?.(L?.error||"Failed to save appearance settings.","error");return}N.current=H,X?.(L.settings),Z?.("Appearance synced across clients.","success")}catch(E){if(!B.current)return;console.warn("[settings/appearance] Failed to persist appearance settings.",E),Z?.("Failed to save appearance settings.","error")}finally{if(B.current)Y(!1)}},250),()=>{if(F.current)clearTimeout(F.current)}},[H,X,Z]);let W=$||[],M=_||[];return U`
        <div class="settings-section">
            ${V&&U`<div class="settings-hint" style="margin:0 0 12px 0;">Syncing appearance…</div>`}
            <div class="settings-tint-row">
                <label class="settings-tint-label">
                    <input type="radio" name="settings-theme"
                        checked=${G==="default"}
                        onChange=${()=>z("default",Q)} />
                    <strong>Default</strong>
                    <span class="settings-hint" style="margin:0 0 0 6px">auto (light/dark)</span>
                </label>
                <div class="settings-tint-picker">
                    <label class="settings-hint" style="margin:0">Tint:</label>
                    <input type="color"
                        value=${Q||"#1d9bf0"}
                        onInput=${(E)=>{let L=E.target.value;if(K(L),G==="default")U5({theme:"default",tint:L})}} />
                    ${Q&&U`
                        <button class="settings-tint-clear" onClick=${()=>z("default","")}
                            title="Clear tint">\u2715</button>
                    `}
                    <span class="settings-tint-hex">${Q||"none"}</span>
                </div>
            </div>

            <table class="settings-table settings-borderless settings-theme-table">
                <thead>
                    <tr>
                        <th></th><th>Theme</th><th>Mode</th>
                        ${W.map((E)=>U`<th class="settings-swatch-header">${E.replace(/([A-Z])/g," $1").trim()}</th>`)}
                    </tr>
                </thead>
                <tbody>
                    ${M.filter((E)=>E.name!=="default").map((E)=>U`
                        <tr class=${E.name===G?"settings-row-active":""}
                            style="cursor:pointer" onClick=${()=>z(E.name,"")}>
                            <td><input type="radio" name="settings-theme" checked=${E.name===G} onChange=${()=>z(E.name,"")} /></td>
                            <td><strong>${E.label}</strong></td>
                            <td>${E.mode}</td>
                            ${W.map((L)=>{let x=E.colors?.[L];return U`<td class="settings-swatch-cell">
                                    ${x?U`<span class="settings-color-swatch" style=${"background:"+x} title=${x}></span>`:"—"}
                                </td>`})}
                        </tr>
                    `)}
                </tbody>
            </table>
        </div>
    `}var mQ=L1(()=>{M0();X6()});var hQ={};j_(hQ,{__scheduledTasksSettingsTest:()=>XE,ScheduledTasksSection:()=>ZE});function b4(_){if(!_)return"—";let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}function cQ(_){let $=Number(_);if(!Number.isFinite($))return"—";if($<1000)return`${Math.round($)}ms`;return`${($/1000).toFixed($<1e4?1:0)}s`}function v9(_){if(!_)return"—";if(_.schedule_type==="once")return`once · ${b4(_.schedule_value)}`;if(_.schedule_type==="interval")return`interval · ${_.schedule_value}`;if(_.schedule_type==="cron")return`cron · ${_.schedule_value}`;return`${_.schedule_type||"schedule"} · ${_.schedule_value||"—"}`}function m9(_){let $=_?.task_kind||"agent";return $==="internal"?"internal/protected":$}function c9(_){return(_?.task_kind||"agent")==="internal"}function _E(_){if(!_)return"";let $=String(_).replace(/\s+/g," ").trim();return $.length>180?`${$.slice(0,179)}…`:$}function A5({children:_,type:$="neutral"}){return U`<span class=${`settings-task-pill settings-task-pill-${$}`}>${_}</span>`}function $E({task:_}){let $=Array.isArray(_?.recent_run_logs)?_.recent_run_logs:[];if(!$.length)return U`<p class="settings-hint">No run logs recorded yet.</p>`;return U`
        <div class="settings-task-run-list">
            ${$.map((j)=>U`
                <div class=${`settings-task-run-row settings-task-run-${j.status||"unknown"}`}>
                    <div class="settings-task-run-meta">
                        <${A5} type=${j.status==="error"?"error":"success"}>${j.status||"unknown"}<//>
                        <span>${b4(j.run_at)}</span>
                        <span>${cQ(j.duration_ms)}</span>
                    </div>
                    <div class="settings-task-run-summary">
                        ${j.error_summary||_E(j.error)||j.result_summary||j.result||"No summary"}
                    </div>
                </div>
            `)}
        </div>
    `}function jE({task:_,onAction:$}){if(!_)return U`<div class="settings-task-detail-empty">Select a task to inspect schedule, status, and run history.</div>`;let j=c9(_);return U`
        <div class="settings-task-detail">
            <div class="settings-task-detail-header">
                <div>
                    <h4>${_.summary||_.id}</h4>
                    <code>${_.id}</code>
                </div>
                <div class="settings-task-detail-actions">
                    ${_.status==="active"&&U`<button onClick=${()=>$("pause",_)}>Pause</button>`}
                    ${_.status==="paused"&&U`<button onClick=${()=>$("resume",_)}>Resume</button>`}
                    <button class="danger" onClick=${()=>$("delete",_)}>Delete</button>
                </div>
            </div>
            <div class="settings-task-detail-grid">
                <span>Status</span><strong>${_.status||"—"}</strong>
                <span>Kind</span><strong>${m9(_)}</strong>
                <span>Schedule</span><strong>${v9(_)}</strong>
                <span>Next run</span><strong>${b4(_.next_run)}</strong>
                <span>Last run</span><strong>${b4(_.last_run)}</strong>
                <span>Last result</span><strong>${_.latest_run_log?.status||_.last_result||"—"}</strong>
                <span>Chat</span><code>${_.chat_jid||"—"}</code>
                <span>Model</span><code>${_.model||"default"}</code>
                ${_.cwd&&U`<span>CWD</span><code>${_.cwd}</code>`}
                ${_.timeout_sec&&U`<span>Timeout</span><strong>${_.timeout_sec}s</strong>`}
                ${j&&U`<span>Protection</span><strong>Internal task actions require explicit confirmation.</strong>`}
            </div>
            <div class="settings-task-command-block">
                <strong>${_.task_kind==="shell"?"Command":"Prompt"}</strong>
                <pre>${_.command||_.prompt||_.command_summary||_.prompt_summary||_.summary||"—"}</pre>
            </div>
            <h4>Recent runs</h4>
            <${$E} task=${_} />
        </div>
    `}function ZE({filter:_="",setStatus:$}){let[j,Z]=C([]),[X,G]=C({active:0,paused:0,completed:0}),[q,Q]=C("all"),[K,V]=C(""),[Y,N]=C(!0),[F,B]=C(null),[D,z]=C(null),[H,W]=C(null),[M,E]=C(!1),L=R(async(O={})=>{N(!0),B(null);try{let T=await u7({status:q,chatJid:K.trim()||void 0,limit:50,includeRunLogs:!0,runLogLimit:5});Z(T.tasks||[]),G(T.counts||{active:0,paused:0,completed:0});let y=O.selectedId||D,A=(T.tasks||[]).find((P)=>P.id===y)||(T.tasks||[])[0]||null;z(A?.id||null),W(A)}catch(T){B(T?.message||"Failed to load scheduled tasks.")}finally{N(!1)}},[q,K,D]);b(()=>{L()},[L]);let x=String(_||"").trim().toLowerCase(),I=G0(()=>{if(!x)return j;return j.filter((O)=>[O.id,O.chat_jid,O.status,O.task_kind,O.schedule_type,O.schedule_value,O.summary,O.prompt_summary,O.command_summary,O.latest_run_log?.error_summary].some((T)=>String(T||"").toLowerCase().includes(x)))},[j,x]),J=R((O)=>{z(O?.id||null),W(O||null)},[]),k=R(async(O,T)=>{if(!T||M)return;let y=c9(T),A=T.summary||T.command_summary||T.prompt_summary||T.id,P=O==="delete"?`Delete scheduled task ${T.id}?

${A}`:`${O==="pause"?"Pause":"Resume"} scheduled task ${T.id}?

${A}`;if(!window.confirm(P))return;if(y&&!window.confirm(`Task ${T.id} is internal/protected. Continue with ${O}?`))return;E(!0),$?.(`${O==="delete"?"Deleting":O==="pause"?"Pausing":"Resuming"} ${T.id}…`,"info");try{await v7(O,T.id,{allowInternal:y}),$?.(`Scheduled task ${T.id} ${O==="delete"?"deleted":O==="pause"?"paused":"resumed"}.`,"success"),await L({selectedId:O==="delete"?null:T.id})}catch(f){$?.(f?.message||`Failed to ${O} task.`,"error")}finally{E(!1)}},[M,L,$]);return U`
        <div class="settings-section settings-scheduled-tasks-section">
            <div class="settings-task-toolbar">
                <div class="settings-task-counts">
                    <${A5} type="active">Active ${X.active||0}<//>
                    <${A5} type="paused">Paused ${X.paused||0}<//>
                    <${A5} type="completed">Completed ${X.completed||0}<//>
                </div>
                <div class="settings-task-filters">
                    <select value=${q} onChange=${(O)=>Q(O.target.value)}>
                        ${eJ.map((O)=>U`<option value=${O}>${O==="all"?"All statuses":O}</option>`)}
                    </select>
                    <input type="text" placeholder="Filter chat JID…" value=${K} onInput=${(O)=>V(O.target.value)} />
                    <button onClick=${()=>L()} disabled=${Y}>Refresh</button>
                </div>
            </div>

            ${Y&&U`<div class="settings-loading settings-loading-pane"><span class="settings-spinner"></span><span>Loading scheduled tasks…</span></div>`}
            ${F&&U`<div class="settings-error-state">${F}</div>`}
            ${!Y&&!F&&j.length===0&&U`
                <div class="settings-empty-state">
                    <strong>No scheduled tasks found.</strong>
                    <p>Tasks created with reminders, `/j`, or the scheduler tool will appear here.</p>
                </div>
            `}
            ${!Y&&!F&&j.length>0&&U`
                <div class="settings-task-layout">
                    <div class="settings-task-list" role="listbox" aria-label="Scheduled tasks">
                        ${I.map((O)=>U`
                            <button class=${`settings-task-row ${O.id===D?"active":""}`} onClick=${()=>J(O)}>
                                <span class="settings-task-row-main">
                                    <strong>${O.summary||O.id}</strong>
                                    <span>${v9(O)}</span>
                                </span>
                                <span class="settings-task-row-meta">
                                    <${A5} type=${O.status||"neutral"}>${O.status}<//>
                                    <${A5}>${m9(O)}<//>
                                </span>
                                <span class="settings-task-row-times">Next ${b4(O.next_run)} · Last ${b4(O.last_run)}${O.latest_run_log?.status?` · ${O.latest_run_log.status}`:""}</span>
                            </button>
                        `)}
                        ${I.length===0&&U`<p class="settings-hint">No tasks match “${_}”.</p>`}
                    </div>
                    <${jE} task=${H&&I.some((O)=>O.id===H.id)?H:I[0]} onAction=${k} />
                </div>
            `}
        </div>
    `}var eJ,XE;var lQ=L1(()=>{M0();y1();eJ=["all","active","paused","completed"];XE={formatDateTime:b4,formatDuration:cQ,labelForSchedule:v9,kindLabel:m9,isProtectedTask:c9}});function pQ(_){return String(_||"").toLowerCase().replace(/^[@/]+/,"").replace(/\s+/g," ").trim()}function M5(_){return typeof _==="string"&&_.trim().length>0}function h9(_,...$){let j=pQ(_);if(!j)return!0;let Z=$.map((X)=>pQ(X)).filter(Boolean);for(let X of Z)if(X.startsWith(j)||X.includes(j))return!0;return!1}function rQ(_){if(!Array.isArray(_))return null;let $=[],j=new Set;for(let Z of _){let X=String(Z||"").trim();if(!X)continue;let G=X.toLowerCase();if(j.has(G))continue;j.add(G),$.push(X)}return $}function e$(_){let $=_&&typeof _==="object"?_:{};return{workspaceCommands:rQ($.workspaceCommands),slashCommands:rQ($.slashCommands)}}function nQ(_,$){if(!Array.isArray(_))return!0;return _.some((j)=>j.toLowerCase()===$.toLowerCase())}function GE(_){let $=Array.isArray(_?.commands)?_.commands:[],j=e$(_?.settings),Z=String(_?.query||"");return $.filter((X)=>nQ(j.workspaceCommands,X.id)).filter((X)=>h9(Z,X.label,X.description,...X.keywords||[])).map((X)=>({key:`workspace:${X.id}`,kind:"workspace",title:X.label,subtitle:X.description,searchText:`${X.label} ${X.description} ${(X.keywords||[]).join(" ")}`.trim(),visualHint:X.label.slice(0,1).toUpperCase()||"W",categoryLabel:"Workspace",actionHint:"Run",commandId:X.id}))}function qE(_){let $=Array.isArray(_?.agents)?_.agents:[],j=String(_?.query||""),Z=new Set;return $.filter((X)=>{let G=M5(X?.chat_jid)?X.chat_jid.trim():"";if(!G||Z.has(G))return!1;if(X?.archived_at)return!1;return Z.add(G),!0}).filter((X)=>h9(j,`@${String(X?.agent_name||"").trim()}`,X?.session_name,X?.chat_jid)).map((X)=>{let G=M5(X?.agent_name)?X.agent_name.trim():String(X?.chat_jid||"").replace(/^[^:]+:/,""),q=M5(X?.session_name)?X.session_name.trim():"",Q=String(X?.chat_jid||"").trim();return{key:`agent:${Q}`,kind:"agent",title:`@${G}`,subtitle:q||Q,searchText:`@${G} ${q} ${Q}`.trim(),visualHint:G.slice(0,1).toUpperCase()||"@",categoryLabel:"Agent",actionHint:"Open",chatJid:Q}})}function QE(_){let $=Array.isArray(_?.slashCommands)?_.slashCommands:[],j=e$(_?.settings),Z=String(_?.query||""),X=new Set;return $.filter((G)=>{let q=M5(G?.name)?G.name.trim():"";if(!q||X.has(q.toLowerCase()))return!1;return X.add(q.toLowerCase()),nQ(j.slashCommands,q)}).filter((G)=>h9(Z,G?.name,G?.description,G?.source)).map((G)=>{let q=String(G?.name||"").trim(),Q=M5(G?.description)?G.description.trim():"slash command",K=M5(G?.source)?G.source.trim():"";return{key:`slash:${q}`,kind:"slash",title:q,subtitle:Q,searchText:`${q} ${Q} ${String(G?.source||"")}`.trim(),visualHint:"/",categoryLabel:K||"Slash",actionHint:"Insert",commandName:q}})}function dQ(_){return[...qE({agents:_?.agents,query:_?.query}),...GE({commands:_?.workspaceCommands,settings:_?.settings,query:_?.query}),...QE({slashCommands:_?.slashCommands,settings:_?.settings,query:_?.query})]}var t$;var l9=L1(()=>{t$=[{id:"toggle-workspace",label:"Toggle workspace",description:"Show or hide the workspace sidebar.",keywords:["workspace","sidebar","explorer"]},{id:"open-explorer",label:"Open explorer",description:"Open the workspace explorer sidebar.",keywords:["workspace","explorer","sidebar"]},{id:"toggle-chat-only",label:"Chat-only mode",description:"Toggle chat-only mode.",keywords:["chat","mode","layout"]},{id:"open-terminal-tab",label:"Open terminal in tab",description:"Open the terminal pane in a workspace tab.",keywords:["terminal","shell","tab"]},{id:"open-vnc-tab",label:"Open VNC in tab",description:"Open the VNC viewer in a workspace tab.",keywords:["vnc","remote","desktop","tab"]},{id:"toggle-terminal-dock",label:"Toggle terminal dock",description:"Show or hide the terminal dock.",keywords:["terminal","dock","shell"]},{id:"open-settings",label:"Settings",description:"Open the settings dialog.",keywords:["settings","preferences","config"]}]});var sQ={};j_(sQ,{QuickActionsSection:()=>VE});function oQ(_,...$){let j=String(_||"").trim().toLowerCase();if(!j)return!0;return $.some((Z)=>String(Z||"").toLowerCase().includes(j))}function iQ(_){if(!Array.isArray(_))return null;return new Set(_.map(($)=>String($||"").trim().toLowerCase()).filter(Boolean))}function VE({filter:_="",setStatus:$,mergeSettingsData:j}){let[Z,X]=C(()=>t$.map((I)=>I.id)),[G,q]=C([]),[Q,K]=C([]),[V,Y]=C(!0),[N,F]=C(!1),B=R(async()=>{Y(!0);try{let[I,J]=await Promise.all([F6(),B6("web:default").catch(()=>({commands:[]}))]),k=e$(I?.settings),O=Array.isArray(J?.commands)?J.commands:[];K(O),X(Array.isArray(k.workspaceCommands)?k.workspaceCommands:t$.map((T)=>T.id)),q(Array.isArray(k.slashCommands)?k.slashCommands:O.map((T)=>String(T?.name||"").trim()).filter(Boolean))}catch(I){$?.(String(I?.message||I),"error")}finally{Y(!1)}},[$]);b(()=>{B()},[B]);let D=G0(()=>iQ(Z),[Z]),z=G0(()=>iQ(G),[G]),H=G0(()=>t$.filter((I)=>oQ(_,I.label,I.description,...I.keywords||[])),[_]),W=G0(()=>Q.filter((I)=>oQ(_,I?.name,I?.description,I?.source)),[Q,_]),M=R((I)=>{X((J)=>{let k=new Set((Array.isArray(J)?J:[]).map((O)=>String(O||"").trim()).filter(Boolean));if(k.has(I))k.delete(I);else k.add(I);return t$.map((O)=>O.id).filter((O)=>k.has(O))})},[]),E=R((I)=>{q((J)=>{let k=new Set((Array.isArray(J)?J:[]).map((O)=>String(O||"").trim()).filter(Boolean));if(k.has(I))k.delete(I);else k.add(I);return Q.map((O)=>String(O?.name||"").trim()).filter((O)=>O&&k.has(O))})},[Q]),L=R(()=>{X(t$.map((I)=>I.id)),q(Q.map((I)=>String(I?.name||"").trim()).filter(Boolean))},[Q]),x=R(async()=>{if(N)return;F(!0),$?.("Saving quick actions…","info");try{let I=await d7({workspaceCommands:Z,slashCommands:G}),J=e$(I?.settings);j?.({quickActions:J}),window.dispatchEvent(new CustomEvent("piclaw:quick-actions-settings-updated",{detail:{settings:J}})),$?.("Quick Actions saved.","success")}catch(I){$?.(String(I?.message||I),"error")}finally{F(!1)}},[j,N,$,G,Z]);if(V)return U`<div class="settings-loading">Loading…</div>`;return U`
        <div class="settings-section">
            <h3>Timeline Quick Actions</h3>
            <p class="settings-hint">
                Choose which actions appear in the timeline typeahead. Agents are always pinned first, then workspace commands, then slash commands.
            </p>

            <div class="settings-row" style="align-items:center; gap:10px; margin-bottom:12px;">
                <button class="settings-addon-btn" onClick=${L} disabled=${N}>Enable all</button>
                <button class="settings-addon-btn settings-addon-btn-install" onClick=${x} disabled=${N}>
                    ${N?"Saving…":"Save & apply"}
                </button>
            </div>

            <h3 style="margin-top:8px;">Workspace commands</h3>
            <div class="settings-subsection-list">
                ${H.map((I)=>{let J=D?D.has(I.id.toLowerCase()):!0;return U`
                        <label class="settings-checkbox-row" key=${I.id}>
                            <input type="checkbox" checked=${J} onChange=${()=>M(I.id)} />
                            <div>
                                <div>${I.label}</div>
                                <div class="settings-hint" style="margin:2px 0 0 0;">${I.description}</div>
                            </div>
                        </label>
                    `})}
                ${H.length===0&&U`<div class="settings-hint">No workspace commands match this filter.</div>`}
            </div>

            <h3 style="margin-top:20px;">Slash commands</h3>
            <div class="settings-subsection-list">
                ${W.map((I)=>{let J=String(I?.name||"").trim(),k=z?z.has(J.toLowerCase()):!0;return U`
                        <label class="settings-checkbox-row" key=${J}>
                            <input type="checkbox" checked=${k} onChange=${()=>E(J)} />
                            <div>
                                <div><code>${J}</code></div>
                                <div class="settings-hint" style="margin:2px 0 0 0;">${I?.description||"slash command"}</div>
                            </div>
                        </label>
                    `})}
                ${W.length===0&&U`<div class="settings-hint">No slash commands match this filter.</div>`}
            </div>
        </div>
    `}var aQ=L1(()=>{M0();y1();l9()});var tQ={};j_(tQ,{KeychainSection:()=>NE});function KE(_){if(!_)return"—";try{return new Date(_).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})}catch{return _}}function NE({filter:_=""}){let[$,j]=C([]),[Z,X]=C(!0),[G,q]=C(null),[Q,K]=C(!1),[V,Y]=C(""),[N,F]=C(""),[B,D]=C(""),[z,H]=C(""),[W,M]=C(""),[E,L]=C("secret"),[x,I]=C(!1),[J,k]=C({}),[O,T]=C(null),[y,A]=C(null),[P,f]=C(null),u=g(null),c=g(null),r=g(null),e=R(async()=>{X(!0),q(null);try{let Q0=await(await fetch("/agent/keychain")).json();if(Q0?.ok)j(Q0.entries||[]);else q(Q0?.error||"Failed to load keychain.")}catch(s){q("Failed to load keychain.")}finally{X(!1)}},[]);b(()=>{e()},[e]);let m=R(async()=>{let s=V.trim(),Q0=N;if(!s||!Q0)return;I(!0);try{let x0=await(await fetch("/agent/keychain",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:s,secret:Q0,type:E,username:B.trim()||void 0,userNote:z,agentNote:W})})).json();if(x0?.ok)Y(""),F(""),D(""),H(""),M(""),L("secret"),K(!1),await e();else q(x0?.error||"Failed to add entry.")}catch{q("Failed to add entry.")}finally{I(!1)}},[V,N,B,z,W,E,e]),$0=R(async(s)=>{try{let O0=await(await fetch("/agent/keychain",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:s})})).json();if(O0?.ok)A(null),f((x0)=>x0?.name===s?null:x0),await e();else q(O0?.error||"Failed to delete entry.")}catch{q("Failed to delete entry.")}},[e]),W0=R(async(s)=>{let Q0=s?.name;if(!Q0)return;let O0=J[Q0]||{},x0=Object.prototype.hasOwnProperty.call(O0,"userNote")?O0.userNote:s.userNote||"",r0=Object.prototype.hasOwnProperty.call(O0,"agentNote")?O0.agentNote:s.agentNote||"";T(Q0);try{let n0=await(await fetch("/agent/keychain/notes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:Q0,userNote:x0,agentNote:r0})})).json();if(n0?.ok)k((m0)=>{let _1={...m0||{}};return delete _1[Q0],_1}),await e();else q(n0?.error||"Failed to save notes.")}catch{q("Failed to save notes.")}finally{T(null)}},[J,e]),X0=R((s,Q0,O0)=>{k((x0)=>({...x0||{},[s]:{...(x0||{})[s]||{},[Q0]:O0}}))},[]),Z0=R(async(s,Q0,O0)=>{try{let r0=await(await fetch("/agent/keychain/reveal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:s,master_password:Q0||void 0,totp_code:O0||void 0})})).json();if(r0?.ok)f({name:s,phase:"revealed",secret:r0.secret,username:r0.username,masterPassword:Q0});else if(r0?.needs_master_password)f((l0)=>({name:s,phase:"password",masterPassword:"",error:l0?.name===s&&l0?.masterPassword?r0.error:null})),requestAnimationFrame(()=>c.current?.focus());else if(r0?.needs_totp)f((l0)=>({name:s,phase:"totp",masterPassword:Q0,totpCode:"",error:l0?.name===s&&l0?.phase==="totp"&&l0?.totpCode?r0.error:null})),requestAnimationFrame(()=>r.current?.focus());else f({name:s,phase:"error",error:r0?.error||"Failed to reveal."})}catch{f({name:s,phase:"error",error:"Failed to reveal."})}},[]),q0=R((s)=>{if(P?.name===s&&P?.phase==="revealed"){f(null);return}Z0(s,null,null)},[P,Z0]),D0=R((s)=>{let Q0=P?.masterPassword||"";if(!Q0)return;Z0(s,Q0,null)},[P,Z0]),h=R((s)=>{let Q0=P?.totpCode||"";if(Q0.length<6)return;Z0(s,P?.masterPassword,Q0)},[P,Z0]),j0=R(async(s)=>{try{await navigator.clipboard.writeText(s)}catch{let Q0=document.createElement("textarea");Q0.value=s,Q0.style.position="fixed",Q0.style.opacity="0",document.body.appendChild(Q0),Q0.select(),document.execCommand("copy"),document.body.removeChild(Q0)}},[]);b(()=>{if(Q)requestAnimationFrame(()=>u.current?.focus())},[Q]);let Y0=_.toLowerCase(),L0=G0(()=>{if(!Y0)return $;return $.filter((s)=>s.name.toLowerCase().includes(Y0)||(s.type||"").toLowerCase().includes(Y0)||(s.envVar||"").toLowerCase().includes(Y0)||(s.userNote||"").toLowerCase().includes(Y0)||(s.agentNote||"").toLowerCase().includes(Y0))},[$,Y0]);if(Z)return U`<div class="settings-section"><div class="settings-loading">Loading keychain…</div></div>`;return U`
        <div class="settings-section">
            ${G&&U`
                <div class="settings-keychain-error" role="alert">
                    ${G}
                    <button class="settings-keychain-dismiss" onClick=${()=>q(null)}>✕</button>
                </div>
            `}
            <div class="settings-keychain-toolbar" style="display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap;">
                <span class="settings-hint" style="margin:0; display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                    <span>${L0.length} entr${L0.length===1?"y":"ies"}${Y0?` matching "${_}"`:""}, encrypted at rest.</span>
                    <span style="display:inline-flex; align-items:center; gap:6px;">
                        <span>Click</span>
                        <span aria-hidden="true" style="display:inline-flex; width:18px; height:18px; align-items:center; justify-content:center; border-radius:999px; border:1px solid var(--border-color, rgba(120,120,120,.22)); background:var(--panel-bg, rgba(255,255,255,.04));">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                        </span>
                        <span>to reveal.</span>
                    </span>
                </span>
                <button class="settings-keychain-add-btn" onClick=${()=>K(!Q)}>
                    ${Q?"Cancel":"+ Add entry"}
                </button>
            </div>

            ${Q&&U`
                <div class="settings-keychain-add-form">
                    <div class="settings-keychain-add-row">
                        <input ref=${u} type="text" placeholder="Entry name (e.g. github/my-token)"
                            value=${V} onInput=${(s)=>Y(s.target.value)}
                            class="settings-keychain-input" />
                        <select value=${E} onChange=${(s)=>L(s.target.value)}
                            class="settings-keychain-select">
                            ${YE.map((s)=>U`<option value=${s}>${s}</option>`)}
                        </select>
                    </div>
                    <div class="settings-keychain-add-row">
                        <input type="password" placeholder="Secret value"
                            value=${N} onInput=${(s)=>F(s.target.value)}
                            class="settings-keychain-input settings-keychain-secret" />
                        <input type="text" placeholder="Username (optional)"
                            value=${B} onInput=${(s)=>D(s.target.value)}
                            class="settings-keychain-input" style="max-width:200px" />
                        <button class="settings-keychain-save-btn" onClick=${m}
                            disabled=${x||!V.trim()||!N}>
                            ${x?"Saving…":"Save"}
                        </button>
                    </div>
                    <div class="settings-keychain-add-row" style="align-items:stretch">
                        <textarea placeholder="User note (visible in this UI only)"
                            value=${z} onInput=${(s)=>H(s.target.value)}
                            class="settings-keychain-input" rows="2" style="resize:vertical; min-height:56px"></textarea>
                        <textarea placeholder="Agent note (safe to expose to agents)"
                            value=${W} onInput=${(s)=>M(s.target.value)}
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
                        ${L0.length===0&&U`
                            <tr><td colspan="5" class="settings-keychain-empty">
                                ${Y0?"No entries match the filter.":"No keychain entries."}
                            </td></tr>
                        `}
                        ${L0.map((s)=>{let Q0=P?.name===s.name?P:null,O0=Q0?.phase==="revealed",x0=Q0?.phase==="password",r0=Q0?.phase==="totp",l0=Q0?.phase==="error",n0=J[s.name]||{},m0=Object.prototype.hasOwnProperty.call(n0,"userNote")?n0.userNote:s.userNote||"",_1=Object.prototype.hasOwnProperty.call(n0,"agentNote")?n0.agentNote:s.agentNote||"",S0=m0!==(s.userNote||"")||_1!==(s.agentNote||""),o0=O===s.name;return U`
                            <tr class="settings-keychain-row" key=${s.name}>
                                <td class="settings-keychain-name">${s.name}</td>
                                <td><span class="settings-keychain-type-badge">${s.type}</span></td>
                                <td class="settings-keychain-env">${s.envVar?U`<code>$${s.envVar}</code>`:"—"}</td>
                                <td class="settings-keychain-date">${KE(s.updatedAt)}</td>
                                <td class="settings-keychain-actions">
                                    <button class=${`settings-keychain-reveal-btn${O0?" active":""}`}
                                        onClick=${()=>q0(s.name)}
                                        title=${O0?"Hide secret":"Reveal secret"}>
                                        ${O0?U`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`:U`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`}
                                    </button>
                                    ${y===s.name?U`
                                            <span class="settings-keychain-confirm">Delete?
                                                <button class="settings-keychain-confirm-yes" onClick=${()=>$0(s.name)}>Yes</button>
                                                <button class="settings-keychain-confirm-no" onClick=${()=>A(null)}>No</button>
                                            </span>
                                        `:U`<button class="settings-keychain-delete-btn" onClick=${()=>A(s.name)} title="Delete">🗑</button>`}
                                </td>
                            </tr>
                            <tr class="settings-keychain-notes-row" key=${s.name+"-notes"}>
                                <td colspan="5">
                                    <div style="display:grid; grid-template-columns:1fr 1fr auto; gap:8px; align-items:start; padding:8px 0 10px 0;">
                                        <label style="display:flex; flex-direction:column; gap:4px; min-width:0;">
                                            <span class="settings-hint" style="margin:0">User note</span>
                                            <textarea class="settings-keychain-input" rows="2" style="resize:vertical; min-height:52px; width:100%;" placeholder="Human/UI note only"
                                                value=${m0}
                                                onInput=${(c0)=>X0(s.name,"userNote",c0.target.value)}></textarea>
                                        </label>
                                        <label style="display:flex; flex-direction:column; gap:4px; min-width:0;">
                                            <span class="settings-hint" style="margin:0">Agent-readable note</span>
                                            <textarea class="settings-keychain-input" rows="2" style="resize:vertical; min-height:52px; width:100%;" placeholder="Safe guidance for agents"
                                                value=${_1}
                                                onInput=${(c0)=>X0(s.name,"agentNote",c0.target.value)}></textarea>
                                        </label>
                                        <button class="settings-keychain-save-btn" style="margin-top:20px" disabled=${!S0||o0} onClick=${()=>W0(s)}>
                                            ${o0?"Saving…":"Save notes"}
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            ${x0&&U`
                                <tr class="settings-keychain-prompt-row" key=${s.name+"-pw"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-prompt">
                                            <span class="settings-keychain-prompt-label">Master password:</span>
                                            <input ref=${c} type="password" autocomplete="off"
                                                placeholder="Enter keychain master password"
                                                class="settings-keychain-prompt-input"
                                                value=${Q0?.masterPassword||""}
                                                onInput=${(c0)=>f(($1)=>({...$1,masterPassword:c0.target.value}))}
                                                onKeyDown=${(c0)=>{if(c0.key==="Enter")D0(s.name);if(c0.key==="Escape")f(null)}}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${()=>D0(s.name)}
                                                disabled=${!Q0?.masterPassword}>Unlock</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${()=>f(null)}>Cancel</button>
                                            ${Q0?.error&&U`<span class="settings-keychain-prompt-error">${Q0.error}</span>`}
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${r0&&U`
                                <tr class="settings-keychain-prompt-row" key=${s.name+"-totp"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-prompt">
                                            <span class="settings-keychain-prompt-label">TOTP code:</span>
                                            <input ref=${r} type="text" inputmode="numeric" autocomplete="one-time-code"
                                                maxlength="6" placeholder="000000"
                                                class="settings-keychain-prompt-input" style="width:90px;text-align:center;letter-spacing:0.15em"
                                                value=${Q0?.totpCode||""}
                                                onInput=${(c0)=>f(($1)=>({...$1,totpCode:c0.target.value.replace(/\\D/g,"").slice(0,6)}))}
                                                onKeyDown=${(c0)=>{if(c0.key==="Enter")h(s.name);if(c0.key==="Escape")f(null)}}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${()=>h(s.name)}
                                                disabled=${(Q0?.totpCode||"").length<6}>Verify</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${()=>f(null)}>Cancel</button>
                                            ${Q0?.error&&U`<span class="settings-keychain-prompt-error">${Q0.error}</span>`}
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${O0&&U`
                                <tr class="settings-keychain-reveal-row" key=${s.name+"-reveal"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-reveal-panel">
                                            ${Q0.username&&U`
                                                <div class="settings-keychain-reveal-field">
                                                    <span class="settings-keychain-reveal-label">Username</span>
                                                    <code class="settings-keychain-reveal-value">${Q0.username}</code>
                                                    <button class="settings-keychain-copy-btn" onClick=${()=>j0(Q0.username)} title="Copy username">
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                                                    </button>
                                                </div>
                                            `}
                                            <div class="settings-keychain-reveal-field">
                                                <span class="settings-keychain-reveal-label">Secret</span>
                                                <code class="settings-keychain-reveal-value">${Q0.secret}</code>
                                                <button class="settings-keychain-copy-btn" onClick=${()=>j0(Q0.secret)} title="Copy secret">
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${l0&&U`
                                <tr class="settings-keychain-reveal-row" key=${s.name+"-error"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-reveal-panel" style="color: var(--error-color, #e55)">${Q0.error}</div>
                                    </td>
                                </tr>
                            `}
                        `})}
                    </tbody>
                </table>
            </div>
        </div>
    `}var YE;var eQ=L1(()=>{M0();YE=["secret","token","password","basic"]});var _V={};j_(_V,{ToolsSection:()=>zE});function zE({toolsets:_,filter:$="",settingsData:j,mergeSettingsData:Z}){let X=_||[],[G,q]=C(()=>{let F={};for(let B of X)F[B.name]=!0;return F}),Q=R((F)=>{q((B)=>({...B,[F]:!B[F]}))},[]),K=j?.searchMatchMode||"or",V=R(async()=>{let F=K==="or"?"and":"or";try{let D=await(await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({searchMatchMode:F})})).json().catch(()=>({}));if(D?.ok&&D?.settings)Z?.(D.settings)}catch(B){console.warn("[settings/tools] Failed to save search match mode.",B)}},[K,Z]),Y=$.toLowerCase(),N=G0(()=>{if(!Y)return X;return X.map((F)=>{let B=F.tools.filter((D)=>D.name.toLowerCase().includes(Y)||F.name.toLowerCase().includes(Y)||(D.summary||"").toLowerCase().includes(Y));return B.length>0?{...F,tools:B}:null}).filter(Boolean)},[X,Y]);if(X.length===0)return U`<div class="settings-section"><p class="settings-hint">Tool data not available.</p></div>`;return U`
        <div class="settings-section">
            <div class="settings-search-options">
                <h4 style="margin:0 0 8px 0">Search</h4>
                <div class="settings-row">
                    <label>Match mode</label>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <input type="checkbox" checked=${K==="and"} onChange=${V} />
                        <span class="settings-hint" style="margin:0">
                            ${K==="or"?"Any keyword (OR) — results match at least one search term":"All keywords (AND) — results must match every search term"}
                        </span>
                    </div>
                </div>
            </div>
            ${N.map((F)=>{let B=G[F.name]!==!1;return U`
                <div class="settings-toolset">
                    <div class="settings-toolset-header">
                        <label class="settings-toolset-toggle">
                            <input type="checkbox" checked=${B} onChange=${()=>Q(F.name)} />
                            <span class="settings-toolset-icon">${BE[F.name]||DE}</span>
                            <strong>${F.name}</strong>
                        </label>
                        <span class="settings-hint" style="margin:0">${F.description}</span>
                    </div>
                    ${B&&U`<div class="settings-tool-list">${F.tools.map((D)=>U`
                        <div class="settings-tool-row">
                            <input type="checkbox" checked disabled />
                            <span class="settings-tool-name">${D.name}</span>
                            <span class="settings-tool-kind" title=${D.kind}>${UE[D.kind]||"?"}</span>
                            ${D.summary&&U`<span class="settings-tool-summary">${D.summary}</span>`}
                            <span class="settings-tool-source">${FE[D.name]||F.name}</span>
                        </div>
                    `)}</div>`}
                </div>
            `})}
            ${N.length===0&&U`<p class="settings-hint">No tools match "${$}"</p>`}
            <p class="settings-hint">Tool activation is managed by the agent runtime. Group checkboxes collapse/expand; individual tools use <code>activate_tools</code>.</p>
        </div>
    `}var BE,FE,UE,DE;var $V=L1(()=>{M0();BE={core:U`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="17" height="14" rx="2"/><path d="M7.5 10l2.5 2-2.5 2"/><path d="M12.5 15H16"/></svg>`,discovery:U`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>`,attachments:U`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>`,"model-control":U`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/><path d="M9 15c.83.67 2 1 3 1s2.17-.33 3-1"/></svg>`,data:U`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,workspace:U`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,automation:U`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,remote:U`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,browser:U`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,ui:U`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,experiments:U`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6v7l4.6 7.7A1 1 0 0 1 18.7 19H5.3a1 1 0 0 1-.9-1.3L9 10z"/><line x1="9" y1="3" x2="15" y2="3"/></svg>`,lifecycle:U`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>`},FE={read:"pi-core",write:"pi-core",edit:"pi-core",bash:"pi-core",powershell:"pi-core",find:"pi-core",grep:"pi-core",ls:"pi-core",list_tools:"internal-tools",activate_tools:"tool-activation",reset_active_tools:"tool-activation",list_scripts:"runtime-scripts",attach_file:"file-attachments",read_attachment:"file-attachments",export_attachment:"file-attachments",get_model_state:"model-control",list_models:"model-control",switch_model:"model-control",switch_thinking:"model-control",messages:"messages-crud",introspect_sql:"sql-introspect",keychain:"keychain-tools",search_workspace:"workspace-search",refresh_workspace_index:"workspace-search",open_office_viewer:"office-viewer",office_read:"office-viewer",office_write:"office-viewer",open_workspace_file:"open-workspace-file",image_process:"image-processing",schedule_task:"scheduled-tasks",scheduled_tasks:"scheduled-tasks",bun_run:"bun-runner",exec_batch:"exec-batch",search_tool_output:"search-tool-output",ssh:"ssh",proxmox:"proxmox",portainer:"portainer",mcp:"mcp",cdp_browser:"cdp-browser",send_adaptive_card:"send-adaptive-card",send_dashboard_widget:"send-dashboard-widget",start_autoresearch:"autoresearch",stop_autoresearch:"autoresearch",autoresearch_status:"autoresearch",exit_process:"exit-process",env:"env-tools"},UE={"read-only":"\uD83D\uDD0D",mutating:"✏️",mixed:"\uD83D\uDD04"},DE=U`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`});var jV={};j_(jV,{AddonsSection:()=>HE});function HE({setStatus:_,filter:$=""}){let[j,Z]=C(null),[X,G]=C(!0),[q,Q]=C(null),[K,V]=C(!1),[Y,N]=C({runtime:"",windowsNative:!1}),[F,B]=C([]),[D,z]=C([]);function H(){let O=new URLSearchParams;try{let y=(localStorage.getItem("piclaw_addons_catalog_url")||"").trim(),A=(localStorage.getItem("piclaw_addons_catalog_urls")||"").split(/\r?\n/).map((f)=>f.trim()).filter(Boolean),P=localStorage.getItem("piclaw_addons_repo_url");if(y)O.append("catalog_url",y);for(let f of A)O.append("catalog_url",f);if(P)O.set("repo_url",P)}catch(y){}let T=O.toString();return T?`?${T}`:""}let W=R(async()=>{try{let[O,T]=await Promise.all([fetch(`/agent/addons${H()}`),fetch("/agent/settings-data")]),y=await O.json();if(y.error)throw Error(y.error);Z(y.addons||[]),B(y.sources||[]),z(y.failed_sources||[]);let A=await T.json().catch(()=>({})),P=typeof A?.runtimePlatform==="string"?A.runtimePlatform:"";N({runtime:P,windowsNative:P==="win32"})}catch(O){Z(null),_?.(String(O.message||O),"error")}finally{G(!1)}},[_]);b(()=>{W()},[]);let M=R(async(O)=>{if(q)return;Q({slug:O,action:"install"}),_?.(`Installing ${O}…`,"info");try{let y=await(await fetch(`/agent/addons/install${H()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:O})})).json();if(y.error){_?.(y.error,"error");return}V(!0);let A=[y.message,y.warning].filter(Boolean).join(" ");_?.(A||"Add-on installed.","success"),await W()}catch(T){_?.(String(T.message||T),"error")}finally{Q(null)}},[q,W,_]),E=R(async(O)=>{if(q)return;Q({slug:O,action:"remove"}),_?.(`Removing ${O}…`,"info");try{let y=await(await fetch(`/agent/addons/uninstall${H()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:O})})).json();if(y.error){_?.(y.error,"error");return}V(!0);let A=[y.message,y.warning].filter(Boolean).join(" ");_?.(A||"Add-on removed.","success"),await W()}catch(T){_?.(String(T.message||T),"error")}finally{Q(null)}},[q,W,_]),L=R(async()=>{if(q)return;Q({slug:null,action:"restart"}),_?.("Restarting piclaw…","info");try{let T=await(await fetch("/agent/addons/restart",{method:"POST"})).json();if(T.error){_?.(T.error,"error"),Q(null);return}_?.(T.message||"Restarting piclaw…","success"),V(!1),(async(A=30,P=2000)=>{for(let f=0;f<A;f++){await new Promise((u)=>setTimeout(u,P));try{if((await fetch("/agent/addons",{signal:AbortSignal.timeout(3000)})).ok){await W(),Q(null),_?.("Restart complete — add-ons refreshed.","success");return}}catch(u){}}Q(null),_?.("Backend did not return in time. Reload the page manually.","warning")})()}catch(O){_?.(String(O.message||O),"error"),Q(null)}},[q,_,W]);if(X)return U`<div class="settings-loading">Fetching add-ons\u2026</div>`;if(!j)return U`<div class="settings-section"><p class="settings-hint">Could not load add-ons.</p></div>`;let x=$.toLowerCase(),I=x?j.filter((O)=>O.slug.toLowerCase().includes(x)||(O.description||"").toLowerCase().includes(x)||(O.tags||[]).some((T)=>T.toLowerCase().includes(x))):j,J=q?.slug||null,k=q?q.action==="remove"?`Removing ${q.slug}…`:q.action==="restart"?"Restarting piclaw…":`Installing ${q.slug}…`:"";return U`
        <div class=${`settings-section settings-addon-panel${q?" busy":""}`} aria-busy=${q?"true":"false"}>
            <div class="settings-addon-toolbar">
                <div>
                    <p class="settings-hint">
                        ${F.length<=1?U`Catalog from <a href="https://github.com/rcarmo/piclaw-addons" target="_blank">rcarmo/piclaw-addons</a>.`:U`${F.length} catalog sources merged.`}
                        ${" "}Package-first install via Bun; restart required after install/uninstall.
                    </p>
                    ${D.length>0&&U`
                        <div class="settings-addon-error" role="alert">
                            Failed to fetch ${D.length} catalog source${D.length>1?"s":""}:
                            ${D.map((O)=>U` <code style="font-size:0.82em;word-break:break-all">${O}</code>`)}
                        </div>
                    `}
                    ${F.length>1&&U`
                        <details class="settings-hint" style="margin-top:4px">
                            <summary style="cursor:pointer">Active catalog sources (${F.length})</summary>
                            <ul style="margin:4px 0 0 16px;font-size:0.82em">
                                ${F.map((O)=>U`<li style="word-break:break-all"><code>${O}</code></li>`)}
                            </ul>
                        </details>
                    `}
                    ${Y.windowsNative&&U`
                        <div class="settings-addon-error" role="alert">
                            Native Windows add-on installs are higher risk: Bun package installs, symlink cleanup, locked files, and restart timing can all be less predictable than in Linux/WSL. Prefer WSL or a container when possible.
                        </div>
                    `}
                </div>
            </div>
            <div class="settings-addon-list">
                ${q&&U`
                    <div class="settings-addon-panel-overlay" role="status" aria-live="polite" aria-label=${k}>
                        <div class="settings-addon-panel-overlay-card">
                            <div class="settings-spinner"></div>
                            <span>${k}</span>
                        </div>
                    </div>
                `}
                ${I.map((O)=>{let T=(O.skills||[]).length>0,y=O.type==="extension",A=T&&y?"extension + skill":T?"skill":"extension",P=T&&!y?"settings-tag-skill":"",f=typeof O.homepage==="string"&&O.homepage.trim()?O.homepage.trim():"";return U`
                    <div class=${`settings-addon-card${O.installed?" installed":""}`}>
                        <div class="settings-addon-card-header">
                            ${f?U`<a class="settings-addon-name-link" href=${f} target="_blank" rel="noopener noreferrer">${O.slug}</a>`:U`<strong>${O.slug}</strong>`}
                            <span class=${`settings-tag settings-tag-type ${P}`}>${A}</span>
                            <span class="settings-addon-version">${O.installed?O.installedVersion||"?":O.version||""}</span>
                            ${O.installKind&&U`<span class="settings-tag">${O.installKind}</span>`}
                            ${O.hasUpdate&&U`<span class="settings-tag settings-tag-skill">\u2191 ${O.version}</span>`}
                            <div class="settings-addon-actions">
                                ${O.installed?U`
                                    ${O.hasUpdate&&U`<button class="settings-addon-btn settings-addon-btn-upgrade" disabled=${Boolean(q)} onClick=${()=>M(O.slug)}>${J===O.slug?"…":"Update"}</button>`}
                                    <button class="settings-addon-btn settings-addon-btn-remove" disabled=${Boolean(q)} onClick=${()=>E(O.slug)}>${J===O.slug?"…":"Remove"}</button>
                                `:U`
                                    <button class="settings-addon-btn settings-addon-btn-install" disabled=${Boolean(q)} onClick=${()=>M(O.slug)}>${J===O.slug?"…":"Install"}</button>
                                `}
                            </div>
                        </div>
                        <div class="settings-addon-card-body">${O.description}</div>
                        <div class="settings-addon-card-footer">
                            <div class="settings-addon-tags">${(O.tags||[]).map((u)=>U`<span class="settings-tag">${u}</span>`)}${(O.skills||[]).map((u)=>U`<span class="settings-tag settings-tag-skill">\ud83d\udcdd ${u}</span>`)}</div>
                        </div>
                    </div>
                `})}
                ${I.length===0&&U`<p class="settings-hint">No add-ons match "${$}"</p>`}
            </div>
            ${K&&U`
                <div class="settings-addon-restart-notice" role="status" aria-live="polite">
                    <span>Extension changes are installed but inactive until piclaw restarts.</span>
                    <button class="settings-addon-btn settings-addon-btn-restart-now" type="button" disabled=${Boolean(q)} onClick=${L}>Restart Now</button>
                </div>
            `}
        </div>
    `}var ZV=L1(()=>{M0()});var ME={};function p9(_,$){try{let j=localStorage.getItem(_);return j===null?$:j==="true"}catch{return $}}function Y8(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function WE(_,$){try{return localStorage.getItem(_)||$}catch{return $}}function OE(_,$){try{localStorage.setItem(_,$)}catch(j){}}function LE(_,$,j,Z){try{return T$(localStorage.getItem(_),{fallback:$,min:j,max:Z})}catch{return T$($,{fallback:$,min:j,max:Z})}}function JE(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function EE(){let[_,$]=C(()=>p9("piclaw_vim_mode",!1)),[j,Z]=C(()=>p9("piclaw_show_whitespace",!0)),[X,G]=C(()=>p9("piclaw_md_live_preview",!0)),[q,Q]=C(()=>LE("piclaw_editor_font_size",13,10,24)),[K,V]=C(()=>WE("piclaw_editor_font_family","")),Y=R((N,F,B)=>{let D=!F;B(D),Y8(N,D)},[]);return U`
        <div class="settings-section">
            <h3>Editor</h3>
            <div class="settings-row">
                <label>Vim mode</label>
                <input type="checkbox" checked=${_}
                    onChange=${()=>{let N=!_;$(N),Y8("piclaw_vim_mode",N)}} />
            </div>
            <div class="settings-row">
                <label>Show whitespace</label>
                <input type="checkbox" checked=${j}
                    onChange=${()=>{let N=!j;Z(N),Y8("piclaw_show_whitespace",N)}} />
            </div>
            <div class="settings-row">
                <label>Markdown live preview</label>
                <input type="checkbox" checked=${X}
                    onChange=${()=>{let N=!X;G(N),Y8("piclaw_md_live_preview",N)}} />
            </div>
            <div class="settings-row">
                <label>Font size (px)</label>
                <${b1}
                    label="editor font size"
                    value=${q}
                    min=${10}
                    max=${24}
                    fallback=${13}
                    width="70px"
                    onChange=${(N)=>{Q(N),JE("piclaw_editor_font_size",N)}}
                />
            </div>
            <div class="settings-row">
                <label>Font family</label>
                <input type="text" value=${K}
                    onInput=${(N)=>{let F=N.target.value;V(F),OE("piclaw_editor_font_family",F)}}
                    placeholder="monospace (default)" />
            </div>
            <p class="settings-hint settings-local-only-hint">This browser only. Editor changes are stored in local browser storage and take effect when you next open or reload a file tab.</p>
        </div>
    `}var AE;var XV=L1(()=>{M0();L5();S4();AE=U`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;i$({id:"editor",label:"Editor",icon:AE,component:EE,order:150})});var IE={};function GV(_,$){try{let j=localStorage.getItem(_);return j===null?$:j==="true"}catch{return $}}function qV(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function kE(_,$,j,Z){try{return T$(localStorage.getItem(_),{fallback:$,min:j,max:Z})}catch{return T$($,{fallback:$,min:j,max:Z})}}function TE(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function yE(){let[_,$]=C(()=>GV("piclaw_mindmap_auto_expand",!0)),[j,Z]=C(()=>kE("piclaw_mindmap_node_spacing",40,20,100)),[X,G]=C(()=>GV("piclaw_mindmap_animate",!0));return U`
        <div class="settings-section">
            <h3>Mind Map</h3>
            <div class="settings-row">
                <label>Auto-expand nodes</label>
                <input type="checkbox" checked=${_}
                    onChange=${()=>{let q=!_;$(q),qV("piclaw_mindmap_auto_expand",q)}} />
            </div>
            <div class="settings-row">
                <label>Node spacing (px)</label>
                <${b1}
                    label="node spacing"
                    value=${j}
                    min=${20}
                    max=${100}
                    fallback=${40}
                    width="70px"
                    onChange=${(q)=>{Z(q),TE("piclaw_mindmap_node_spacing",q)}}
                />
            </div>
            <div class="settings-row">
                <label>Animate transitions</label>
                <input type="checkbox" checked=${X}
                    onChange=${()=>{let q=!X;G(q),qV("piclaw_mindmap_animate",q)}} />
            </div>
            <p class="settings-hint settings-local-only-hint">This browser only. Opens <code>.mindmap.yaml</code> files. Changes take effect on the next map open.</p>
        </div>
    `}var wE;var QV=L1(()=>{M0();L5();S4();wE=U`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><circle cx="5" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><line x1="9.5" y1="9.5" x2="6.5" y2="6.5"/><line x1="14.5" y1="9.5" x2="17.5" y2="6.5"/><line x1="9.5" y1="14.5" x2="6.5" y2="17.5"/><line x1="14.5" y1="14.5" x2="17.5" y2="17.5"/></svg>`;i$({id:"mindmap",label:"Mind Map",icon:wE,component:yE,order:170})});var PE={};function r9(_,$){try{let j=localStorage.getItem(_);return j===null?$:j==="true"}catch{return $}}function n9(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function d9(_,$){try{return localStorage.getItem(_)||$}catch{return $}}function o9(_,$){try{localStorage.setItem(_,$)}catch(j){}}function xE(){let[_,$]=C(()=>r9("piclaw_dev_mode",!1)),[j,Z]=C(()=>d9("piclaw_addons_catalog_url","")),[X,G]=C(()=>d9("piclaw_addons_catalog_urls","")),[q,Q]=C(()=>d9("piclaw_addons_repo_url","")),[K,V]=C(()=>r9("piclaw_debug_sse",!1)),[Y,N]=C(()=>r9("piclaw_debug_tool_calls",!1)),F=R(()=>{let B=!_;$(B),n9("piclaw_dev_mode",B)},[_]);return U`
        <div class="settings-section">
            <h3>Developer</h3>
            <div class="settings-row">
                <label>Developer mode</label>
                <input type="checkbox" checked=${_} onChange=${F} />
            </div>

            <p class="settings-hint settings-local-only-hint">This browser only. Developer-mode toggles and add-on catalog overrides are stored in local browser storage.</p>

            ${_&&U`
                <h3 style="margin-top:16px">Add-on Sources</h3>
                <div class="settings-row">
                    <label>Catalog URL</label>
                    <input type="text" value=${j}
                        onInput=${(B)=>{let D=B.target.value;Z(D),o9("piclaw_addons_catalog_url",D)}}
                        placeholder="https://raw.githubusercontent.com/.../catalog.json" style="max-width:400px" />
                </div>
                <p class="settings-hint" style="margin-top:0">Primary add-on catalog URL. Leave empty to use the default (<code>rcarmo/piclaw-addons</code>).</p>
                <div class="settings-row" style="align-items:flex-start;">
                    <label>Additional catalog URLs</label>
                    <textarea
                        value=${X}
                        onInput=${(B)=>{let D=B.target.value;G(D),o9("piclaw_addons_catalog_urls",D)}}
                        placeholder="One URL per line\nhttps://example.com/catalog.json"
                        style="max-width:400px; min-height:86px; resize:vertical;"
                    ></textarea>
                </div>
                <p class="settings-hint" style="margin-top:0">Fetched in addition to the primary/default catalog. One URL per line.</p>
                <div class="settings-row">
                    <label>Repo URL</label>
                    <input type="text" value=${q}
                        onInput=${(B)=>{let D=B.target.value;Q(D),o9("piclaw_addons_repo_url",D)}}
                        placeholder="https://github.com/.../piclaw-addons.git" style="max-width:400px" />
                </div>
                <p class="settings-hint" style="margin-top:0">Override the git repo used for <code>bun add</code> installs. Leave empty for default.</p>

                <h3 style="margin-top:16px">Debug</h3>
                <div class="settings-row">
                    <label>Log SSE events</label>
                    <input type="checkbox" checked=${K}
                        onChange=${()=>{let B=!K;V(B),n9("piclaw_debug_sse",B)}} />
                </div>
                <div class="settings-row">
                    <label>Log tool calls</label>
                    <input type="checkbox" checked=${Y}
                        onChange=${()=>{let B=!Y;N(B),n9("piclaw_debug_tool_calls",B)}} />
                </div>
                <p class="settings-hint">Debug flags take effect on next page reload.</p>
            `}
        </div>
    `}var CE;var VV=L1(()=>{M0();L5();CE=U`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`;i$({id:"developer",label:"Developer",icon:CE,component:xE,order:900})});var FV={};j_(FV,{openSettingsDialog:()=>eE,SettingsDialogContent:()=>BV,SettingsDialog:()=>tE});function w6(_){y6.push({ts:performance.now(),label:_})}function fE(){if(!y6.length)return;let _=y6[0].ts,$=y6.map((j)=>`+${(j.ts-_).toFixed(1)}ms ${j.label}`);console.info(`[settings-dialog perf]
`+$.join(`
`));try{window.__piclawSettingsPerfLog=$}catch(j){}try{fetch("/agent/client-perf",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({label:"settings-dialog",lines:$})}).catch((j)=>{})}catch(j){}y6.length=0}function bE(_){let $=F8.get(_);if($)return Promise.resolve($);let j=N8.get(_);if(j)return j;let Z=RE[_]().then((X)=>{return F8.set(_,X),N8.delete(_),X}).catch((X)=>{throw N8.delete(_),X});return N8.set(_,Z),Z}function B8(_="Loading…"){return U`
        <div class="settings-loading settings-loading-pane" role="status" aria-live="polite">
            <span class="settings-spinner"></span>
            <span>${_}</span>
        </div>
    `}function BV({onClose:_}){w6("SettingsDialogContent-render-start");let[$,j]=C(()=>M9()||"general"),[Z,X]=C(KV),[G,q]=C(null),[Q,K]=C(""),[,V]=C(0),[Y,N]=C(()=>Object.fromEntries(F8.entries())),[F,B]=C(null),[D,z]=C({compact:!1,narrow:!1}),H=g(null),W=g(null);b(()=>{w6("SettingsDialogContent-mounted"),fE()},[]),b(()=>{let A=(P)=>{if(P.key==="Escape")_()};return window.addEventListener("keydown",A),()=>window.removeEventListener("keydown",A)},[_]),b(()=>{let A=(P)=>{let f=typeof P?.detail?.section==="string"?P.detail.section.trim():"";if(f)j(f),K("")};return window.addEventListener("piclaw:open-settings",A),()=>window.removeEventListener("piclaw:open-settings",A)},[]),b(()=>{let A=()=>V((P)=>P+1);return window.addEventListener("piclaw:settings-panes-changed",A),()=>window.removeEventListener("piclaw:settings-panes-changed",A)},[]),b(()=>{fetch("/agent/settings-data").then((A)=>A.json()).then((A)=>{KV=A,X(A)}).catch(()=>X({}))},[]),b(()=>{let A=W.current;if(!A)return;let P=()=>{let f=A.clientWidth||0;z((u)=>{let c={compact:f>0&&f<=860,narrow:f>0&&f<=720};return u.compact===c.compact&&u.narrow===c.narrow?u:c})};if(P(),typeof ResizeObserver==="function"){let f=new ResizeObserver(()=>P());return f.observe(A),()=>f.disconnect()}return window.addEventListener("resize",P),()=>window.removeEventListener("resize",P)},[]);let M=[...NV].sort((A,P)=>(A.order??500)-(P.order??500)),L=$Q().map((A)=>({id:A.id,label:A.label,icon:A.icon,searchable:A.searchable||!1,placeholder:A.searchPlaceholder,order:A.order??500,isExtension:!0,component:A.component})).sort(k9),x=[...M,...L],I=x.find((A)=>A.id===$)||NV.find((A)=>A.id===$);b(()=>{if(I?.searchable)requestAnimationFrame(()=>H.current?.focus())},[$]),b(()=>{if(I?.isExtension){B(null);return}let A=!1;if(Y[$]){B(null);return}return B($),bE($).then((P)=>{if(A)return;N((f)=>f?.[$]?f:{...f||{},[$]:P})}).catch((P)=>{if(A)return;console.error(`[settings-dialog] Failed to lazy-load section "${$}".`,P)}).finally(()=>{if(!A)B((P)=>P===$?null:P)}),()=>{A=!0}},[$,I?.isExtension,Y]);let J=R((A,P="info")=>{q(A?{text:A,type:P}:null)},[]),k=R((A)=>{j(A),K("");let P=SE[A];if(P&&!YV.has(A))YV.add(A),P().then(()=>V((f)=>f+1)).catch((f)=>{})},[]),O=R((A)=>{X((P)=>({...P||{},...A||{}}))},[]),T=()=>{if(I?.isExtension){if(!I.component)return B8("Loading pane…");let P=I.component;return U`<${P} filter=${Q} />`}let A=Y[$];if(!A||F===$)return B8(`Loading ${I?.label||"settings"}…`);switch($){case"general":return U`<${A} settingsData=${Z} setStatus=${J} mergeSettingsData=${O} />`;case"sessions":return U`<${A} settingsData=${Z} setStatus=${J} mergeSettingsData=${O} />`;case"recordings":return U`<${A} filter=${Q} setStatus=${J} />`;case"compaction":return U`<${A} settingsData=${Z} setStatus=${J} mergeSettingsData=${O} />`;case"keyboard":return U`<${A} filter=${Q} setStatus=${J} />`;case"workspace":return U`<${A} settingsData=${Z} setStatus=${J} mergeSettingsData=${O} />`;case"environment":return U`<${A} settingsData=${Z} filter=${Q} setStatus=${J} mergeSettingsData=${O} />`;case"providers":return U`<${A} providers=${Z?.providers} setStatus=${J} />`;case"models":return U`<${A} filter=${Q} />`;case"theme":return U`<${A} themes=${Z?.themes} colorKeys=${Z?.colorKeys} settingsData=${Z} setStatus=${J} mergeSettingsData=${O} />`;case"scheduled-tasks":return U`<${A} filter=${Q} setStatus=${J} />`;case"quick-actions":return U`<${A} filter=${Q} setStatus=${J} mergeSettingsData=${O} />`;case"keychain":return U`<${A} filter=${Q} />`;case"tools":return U`<${A} toolsets=${Z?.toolsets} filter=${Q} settingsData=${Z} mergeSettingsData=${O} />`;case"addons":return U`<${A} setStatus=${J} filter=${Q} />`;default:return B8("Loading settings…")}},y=!I;return w6("SettingsDialogContent-render-end"),U`
        <div class="settings-dialog-backdrop" onClick=${(A)=>{if(A.target===A.currentTarget)_()}}>
            <div ref=${W} data-testid="settings-dialog" class=${`settings-dialog${D.compact?" settings-dialog-compact":""}${D.narrow?" settings-dialog-narrow":""}`}>
                <div class="settings-dialog-header">
                    <span class="settings-dialog-title">Settings</span>
                    ${I?.searchable&&U`
                        <input ref=${H} type="text" class="settings-header-filter"
                            placeholder=${I.placeholder||"Filter…"}
                            value=${Q} onInput=${(A)=>K(A.target.value)} />
                    `}
                    <button class="settings-dialog-close" onClick=${_} title="Close (Esc)">✕</button>
                </div>
                <div class="settings-dialog-body">
                    <nav class="settings-nav">
                        ${x.map((A,P)=>{let f=P>0&&!x[P-1].isExtension,u=A.isExtension&&f;return U`
                                ${u&&U`<div class="settings-nav-separator"></div>`}
                                <button class=${`settings-nav-item ${A.id===$?"active":""}`} onClick=${()=>k(A.id)}>
                                    <span class="settings-nav-icon">${A.icon}</span>
                                    <span class="settings-nav-label">${A.label}</span>
                                </button>
                            `})}
                    </nav>
                    <main class="settings-content">
                        ${y?B8("Loading settings…"):T()}
                    </main>
                </div>
                ${G&&U`
                    <div class=${`settings-status-bar settings-status-bar-${G.type}`}>
                        ${G.type==="info"&&U`<span class="settings-spinner"></span>`}
                        <span>${G.text}</span>
                        ${G.type!=="info"&&U`<button class="settings-status-dismiss" onClick=${()=>q(null)}>✕</button>`}
                    </div>
                `}
            </div>
        </div>
    `}function tE(){let[_,$]=C(!1);if(b(()=>{let j=(X)=>{let G=O5(X?.detail?.section);if(G)try{window.__piclawSettingsRequestedSection=G}catch(q){}$(!0)};window.addEventListener("piclaw:open-settings",j);let Z=t2();if(Z.open){if(Z.section)try{window.__piclawSettingsRequestedSection=Z.section}catch(X){}$(!0)}return()=>window.removeEventListener("piclaw:open-settings",j)},[]),!_)return null;return U`<${o$} className="settings-portal"><${BV} onClose=${()=>$(!1)} /><//>`}function eE(_={}){_$(_)}var y6,KV=null,F8,N8,RE,SE,YV,gE,uE,vE,mE,cE,hE,lE,pE,rE,nE,dE,oE,iE,sE,aE,NV;var UV=L1(()=>{M0();e2();L5();NQ();y6=[];w6("module-eval-start");w6("imports-done");F8=new Map,N8=new Map;F8.set("general",I9);RE={general:()=>Promise.resolve(I9),sessions:()=>Promise.resolve().then(() => (UQ(),FQ)).then((_)=>_.SessionsSection),recordings:()=>Promise.resolve().then(() => (zQ(),DQ)).then((_)=>_.RecordingsSection),compaction:()=>Promise.resolve().then(() => (WQ(),HQ)).then((_)=>_.CompactionSection),keyboard:()=>Promise.resolve().then(() => (kQ(),MQ)).then((_)=>_.KeyboardSection),workspace:()=>Promise.resolve().then(() => (CQ(),xQ)).then((_)=>_.WorkspaceSection),environment:()=>Promise.resolve().then(() => (fQ(),PQ)).then((_)=>_.EnvironmentSection),providers:()=>Promise.resolve().then(() => (SQ(),RQ)).then((_)=>_.ProvidersSection),models:()=>Promise.resolve().then(() => (gQ(),bQ)).then((_)=>_.ModelsSection),theme:()=>Promise.resolve().then(() => (mQ(),vQ)).then((_)=>_.ThemeSection),"scheduled-tasks":()=>Promise.resolve().then(() => (lQ(),hQ)).then((_)=>_.ScheduledTasksSection),"quick-actions":()=>Promise.resolve().then(() => (aQ(),sQ)).then((_)=>_.QuickActionsSection),keychain:()=>Promise.resolve().then(() => (eQ(),tQ)).then((_)=>_.KeychainSection),tools:()=>Promise.resolve().then(() => ($V(),_V)).then((_)=>_.ToolsSection),addons:()=>Promise.resolve().then(() => (ZV(),jV)).then((_)=>_.AddonsSection)},SE={"editor-settings":()=>Promise.resolve().then(() => (XV(),ME)).then(()=>{}),"mindmap-settings":()=>Promise.resolve().then(() => (QV(),IE)).then(()=>{}),developer:()=>Promise.resolve().then(() => (VV(),PE)).then(()=>{})},YV=new Set;gE=U`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M8.5 5.9L9.6 2.3h4.8l1.1 3.6 3.7-.8 2.4 4.1-2.6 2.8 2.6 2.8-2.4 4.1-3.7-.8-1.1 3.6H9.6l-1.1-3.6-3.7.8-2.4-4.1L5 12 2.4 9.2l2.4-4.1z"/></svg>`,uE=U`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,vE=U`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="12" r="2.2"/><path d="m13 10 4-2.5v9L13 14z"/></svg>`,mE=U`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7"/><polyline points="3 4 3 10 9 10"/><path d="M12 7v5l3 3"/></svg>`,cE=U`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`,hE=U`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/><path d="M8 7v10"/><path d="M16 7v10"/></svg>`,lE=U`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 9h.01"/><path d="M10 9h.01"/><path d="M14 9h.01"/><path d="M18 9h.01"/><path d="M8 13h.01"/><path d="M12 13h.01"/><path d="M16 13h.01"/><path d="M7 17h10"/></svg>`,pE=U`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,rE=U`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="9" width="14" height="10" rx="2"/><circle cx="9" cy="14" r="1.5" fill="currentColor" stroke="none"/><circle cx="15" cy="14" r="1.5" fill="currentColor" stroke="none"/><line x1="12" y1="9" x2="12" y2="5"/><circle cx="12" cy="4" r="1.5"/></svg>`,nE=U`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.1 0 2-.9 2-2 0-.53-.21-1.01-.55-1.36-.34-.36-.55-.84-.55-1.37 0-1.1.9-2 2-2h2.36c3.08 0 5.64-2.56 5.64-5.64C22.9 5.85 18.05 2 12 2z"/><circle cx="8" cy="10" r="1.5" fill="currentColor" stroke="none"/><circle cx="12" cy="7" r="1.5" fill="currentColor" stroke="none"/><circle cx="16" cy="10" r="1.5" fill="currentColor" stroke="none"/></svg>`,dE=U`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/><path d="M7 3.5 4 6"/><path d="m17 3.5 3 2.5"/></svg>`,oE=U`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,iE=U`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,sE=U`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="14" r="3"/><path d="M11 14h9"/><path d="M16 14v-2"/><path d="M19 14v2"/></svg>`,aE=U`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,NV=[{id:"general",label:"General",icon:gE,searchable:!1,order:10},{id:"sessions",label:"Sessions",icon:uE,searchable:!1,order:12},{id:"recordings",label:"Recordings",icon:vE,searchable:!0,placeholder:"Filter recordings…",order:12.5},{id:"compaction",label:"Compaction",icon:mE,searchable:!1,order:13},{id:"keyboard",label:"Keyboard",icon:lE,searchable:!0,placeholder:"Filter shortcuts…",order:14},{id:"workspace",label:"Workspace",icon:cE,searchable:!1,order:15},{id:"environment",label:"Environment",icon:hE,searchable:!0,placeholder:"Filter environment…",order:16},{id:"providers",label:"Providers",icon:pE,searchable:!1,order:20},{id:"models",label:"Models",icon:rE,searchable:!0,placeholder:"Filter models…",order:30},{id:"theme",label:"Appearance",icon:nE,searchable:!1,order:40},{id:"scheduled-tasks",label:"Scheduled Tasks",icon:dE,searchable:!0,placeholder:"Filter scheduled tasks…",order:65},{id:"quick-actions",label:"Quick Actions",icon:iE,searchable:!0,placeholder:"Filter quick actions…",order:70},{id:"keychain",label:"Keychain",icon:sE,searchable:!0,placeholder:"Filter entries…",order:75},{id:"tools",label:"Tools",icon:oE,searchable:!0,placeholder:"Filter tools…",order:80},{id:"addons",label:"Add-ons",icon:aE,searchable:!0,placeholder:"Filter add-ons…",order:90}]});M0();class dZ{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Z of this.extensions.values()){if(Z.placement!=="tabs")continue;if(!Z.canHandle)continue;try{let X=Z.canHandle(_);if(X===!1||X===0)continue;let G=X===!0?0:typeof X==="number"?X:0;if(G>j)j=G,$=Z}catch(X){console.warn(`[PaneRegistry] canHandle() error for "${Z.id}":`,X)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var Y1=new dZ;var z2=null,v3=null;function Gz(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function oZ(){if(v3)return Promise.resolve(v3);if(!z2)z2=import(Gz()).then((_)=>{return v3=_,_}).catch((_)=>{throw z2=null,_});return z2}class iZ{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedContentChangeCb=null;queuedContentChangeUnsubscribe=null;queuedViewState=null;queuedDiffMode=void 0;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await oZ();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedContentChangeCb&&typeof this.real.onContentChange==="function")this.queuedContentChangeUnsubscribe=this.real.onContentChange(this.queuedContentChangeCb)||null;if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState));if(this.queuedDiffMode!==void 0&&typeof this.real.setDiffMode==="function")this.real.setDiffMode(this.queuedDiffMode)}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null,this.queuedContentChangeCb=null,this.queuedContentChangeUnsubscribe?.(),this.queuedContentChangeUnsubscribe=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}beforeDetachFromHost(_){return this.real?.beforeDetachFromHost?.(_)}afterAttachToHost(_){return this.real?.afterAttachToHost?.(_)}moveHost(_,$){return this.real?.moveHost?.(_,$)??!1}exportHostTransferState(){return this.real?.exportHostTransferState?.()??null}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}onContentChange(_){return this.queuedContentChangeUnsubscribe?.(),this.queuedContentChangeCb=_,this.queuedContentChangeUnsubscribe=this.real?.onContentChange?.(_)||null,()=>{if(this.queuedContentChangeCb===_)this.queuedContentChangeCb=null;this.queuedContentChangeUnsubscribe?.(),this.queuedContentChangeUnsubscribe=null}}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}setDiffMode(_){this.queuedDiffMode=_,this.real?.setDiffMode?.(_)}}var m3={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new iZ(_,$)}};function c3(){oZ().catch((_)=>{console.warn("[editor-loader] Background preload failed; the editor will retry on demand.",_)})}function sZ(_){try{return typeof _?.crypto?.randomUUID==="function"?_.crypto.randomUUID():null}catch($){return null}}function H2(_,$){try{return _?.removeItem?.($),!0}catch(j){return!1}}var aZ="piclaw:editor-popout:",qz=300000;function tZ(_){try{return _?.localStorage??null}catch{return null}}function Qz(_=Date.now()){return`editor-popout-${_.toString(36)}-${Math.random().toString(36).slice(2,10)}`}function eZ(_){return typeof _==="string"?_.trim():""}function _X(_){return(typeof _==="string"?_.trim():"")||null}function $X(_){return typeof _==="string"?_:void 0}function jX(_){if(_===void 0)return;if(typeof _!=="string")return null;return _.trim()||null}function ZX(_){if(!_||typeof _!=="object")return null;let $=_,j={};if(typeof $.cursorLine==="number"&&Number.isFinite($.cursorLine))j.cursorLine=$.cursorLine;if(typeof $.cursorCol==="number"&&Number.isFinite($.cursorCol))j.cursorCol=$.cursorCol;if(typeof $.scrollTop==="number"&&Number.isFinite($.scrollTop))j.scrollTop=$.scrollTop;return Object.keys(j).length>0?j:null}function X5(_,$=globalThis){let j=$?.window??$;if(!j?.location?.href)return null;try{let Z=new URL(j.location.href),X=Z.searchParams.get(_)?.trim()||"";if(!X)return null;return Z.searchParams.delete(_),j.history?.replaceState?.(j.history.state,j.document?.title||"",Z.toString()),X}catch{return null}}function Vz(_,$=globalThis,j=Date.now()){let Z=tZ($),X=eZ(_?.path);if(!Z||!X)return null;let G={path:X,content:$X(_?.content),mtime:jX(_?.mtime),paneOverrideId:_X(_?.paneOverrideId),viewState:ZX(_?.viewState),capturedAt:j};if(!Boolean(G.content!==void 0||G.paneOverrideId||G.viewState||G.mtime))return null;let Q=Qz(j);try{return Z.setItem(`${aZ}${Q}`,JSON.stringify(G)),Q}catch{return null}}function h3(_,$=globalThis,j=Date.now()){let Z=typeof _==="string"?_.trim():"",X=tZ($);if(!Z||!X)return null;let G=`${aZ}${Z}`,q="";try{q=X.getItem(G)||""}catch{return null}if(!q)return null;H2(X,G);try{let Q=JSON.parse(q),K=typeof Q?.capturedAt==="number"&&Number.isFinite(Q.capturedAt)?Q.capturedAt:j;if(K+qz<j)return null;let V=eZ(Q?.path);if(!V)return null;return{path:V,content:$X(Q?.content),mtime:jX(Q?.mtime),paneOverrideId:_X(Q?.paneOverrideId),viewState:ZX(Q?.viewState),capturedAt:K}}catch{return null}}function W2(_,$=globalThis,j=Date.now()){let Z=Vz(_,$,j);return Z?{editor_popout:Z}:null}function S_(_){try{return _(),!0}catch($){return!1}}function XX(_){let{ownerWindow:$,themeChangeListener:j,mediaQuery:Z,mediaQueryListener:X,dockResizeListener:G,windowResizeListener:q,themeObserver:Q,resizeObserver:K}=_;S_(()=>{if(j)$?.removeEventListener?.("piclaw-theme-change",j)}),S_(()=>{if(Z&&X){if(Z.removeEventListener)Z.removeEventListener("change",X);else if(Z.removeListener)Z.removeListener(X)}}),S_(()=>{if(G)$?.removeEventListener?.("dock-resize",G);if(q)$?.removeEventListener?.("resize",q)}),S_(()=>{Q?.disconnect?.()}),S_(()=>{K?.disconnect?.()})}function GX(_){_.syncHostLayout(),S_(()=>{_.terminal?.renderer?.remeasureFont?.()}),S_(()=>{_.fitAddon?.fit?.()}),_.sendResize()}function qX(_){let{resizeFrame:$=0,cancelAnimationFrameFn:j=cancelAnimationFrame,socket:Z,fitAddon:X,terminal:G,termEl:q}=_;if($)S_(()=>{j($)});return S_(()=>{Z?.close?.()}),S_(()=>{X?.dispose?.()}),S_(()=>{G?.dispose?.()}),q?.remove?.(),0}function o_(_){try{return _(),!0}catch($){return!1}}function QX(_){let{termEl:$,bodyEl:j,terminal:Z,theme:X,themeChanged:G=!1,socket:q,resize:Q}=_;if(o_(()=>{if($?.style)$.style.backgroundColor=X.background,$.style.color=X.foreground;if(j?.style)j.style.backgroundColor=X.background,j.style.color=X.foreground;let K=j?.querySelector?.(".terminal-live-host");if(K&&typeof K==="object"&&"style"in K)K.style.backgroundColor=X.background,K.style.color=X.foreground;let V=j?.querySelector?.("canvas");if(V&&typeof V==="object"&&"style"in V)V.style.backgroundColor=X.background,V.style.color=X.foreground}),o_(()=>{if(Z?.options)Z.options.theme=X}),G)o_(()=>{Z?.reset?.()});o_(()=>{Z?.renderer?.setTheme?.(X),Z?.renderer?.clear?.()}),o_(()=>{Z?.loadFonts?.()}),o_(()=>{Z?.renderer?.remeasureFont?.()}),o_(()=>{if(Z?.wasmTerm&&Z?.renderer?.render)Z.renderer.render(Z.wasmTerm,!0,Z.viewportY||0,Z),Z.renderer.render(Z.wasmTerm,!1,Z.viewportY||0,Z)}),o_(()=>{Q?.()}),o_(()=>{if(G&&q?.readyState===1)q.send?.(JSON.stringify({type:"input",data:"\f"}))}),o_(()=>{Z?.refresh?.()})}var Kz="/static/js/vendor/ghostty-web.js",Yz="/static/js/vendor/ghostty-vt.wasm",q5="piclaw://terminal",Nz='FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',Bz='400 13px "FiraCode Nerd Font Mono"',Fz='700 13px "FiraCode Nerd Font Mono"',FX="x-piclaw-terminal-client",VX="piclaw_terminal_client",Uz={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},Dz={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},O2=null,l3=null;function p3(_){if(!_)return"";let $=String(_.code||"").trim().toLowerCase();if($)return $;let j=String(_.key||"").trim().toLowerCase();if(!j)return"";if(j.length===1&&/[a-z]/.test(j))return`key${j}`;if(j==="insert")return"insert";return j}function zz(_){if(!_)return!1;if(!_.shiftKey||_.altKey)return!1;if(!(_.ctrlKey||_.metaKey))return!1;return p3(_)==="keyc"}function Hz(_){if(!_)return!1;if(_.shiftKey&&!_.ctrlKey&&!_.metaKey&&!_.altKey&&p3(_)==="insert")return!0;if(!_.shiftKey||_.altKey)return!1;if(!(_.ctrlKey||_.metaKey))return!1;return p3(_)==="keyv"}async function Wz(_=typeof navigator<"u"?navigator:null){let $=_?.clipboard?.readText;if(typeof $!=="function")return null;try{let j=await $.call(_.clipboard);return typeof j==="string"?j:null}catch(j){return console.debug("[terminal-pane] Clipboard read failed.",j),null}}function Oz(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function Lz(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL(Yz,window.location.origin).href,Z=(X,G)=>{let q=X instanceof Request?X.url:X instanceof URL?X.href:String(X);if(!Oz(q))return $(X,G);if(X instanceof Request)return $(new Request(j,X));return $(j,G)};globalThis.fetch=Z;try{return await _()}finally{globalThis.fetch=$}}async function Jz(){let $=await import(new URL(Kz,window.location.origin).href);if(!O2)O2=Lz(()=>Promise.resolve($.init?.())).catch((j)=>{throw O2=null,j});return await O2,$}async function Ez(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!l3)l3=Promise.allSettled([document.fonts.load(Bz),document.fonts.load(Fz),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await l3}function KX(_=typeof window<"u"?window:null){try{if(typeof _?.crypto?.randomUUID==="function")return _.crypto.randomUUID()}catch($){console.debug("[terminal-pane] Failed to generate crypto-backed terminal client token; falling back.",$)}return`terminal-client-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}function n3(_=typeof window<"u"?window:null){if(!_)return null;try{let $=_.localStorage,j=typeof $?.getItem==="function"?String($.getItem(VX)||"").trim():"";if(j)return j;let Z=KX(_);return $?.setItem?.(VX,Z),Z}catch($){return KX(_)}}async function Az(_=n3()){let $=await fetch("/terminal/session",{method:"GET",credentials:"same-origin",headers:_?{[FX]:_}:void 0}),j=await $.json().catch(()=>({}));if(!$.ok)throw Error(j?.error||`HTTP ${$.status}`);return j}async function Mz(_=n3()){let $=await fetch("/terminal/handoff",{method:"POST",credentials:"same-origin",headers:_?{[FX]:_}:void 0}),j=await $.json().catch(()=>({}));if(!$.ok)throw Error(j?.error||`HTTP ${$.status}`);return typeof j?.handoff?.token==="string"&&j.handoff.token.trim()?j.handoff.token.trim():null}function kz(_,$=null,j=n3()){let Z=window.location.protocol==="https:"?"wss:":"ws:",X=new URL(`${Z}//${window.location.host}${_}`);if($)X.searchParams.set("handoff",String($));if(j)X.searchParams.set("client",String(j));return X.toString()}function Tz(_=typeof window<"u"?window:null,$=typeof document<"u"?document:null){if(!_||!$)return!1;let{documentElement:j,body:Z}=$,X=j?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(X==="dark")return!0;if(X==="light")return!1;if(j?.classList?.contains("dark")||Z?.classList?.contains("dark"))return!0;if(j?.classList?.contains("light")||Z?.classList?.contains("light"))return!1;return Boolean(_.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function W4(_,$="",j=typeof document<"u"?document:null){if(!j)return $;return getComputedStyle(j.documentElement).getPropertyValue(_)?.trim()||$}function G5(_){let $=String(_||"").trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(/^[0-9a-fA-F]{3}$/.test(j)||/^[0-9a-fA-F]{6}$/.test(j)){let X=j.length===3?j.split("").map((q)=>q+q).join(""):j,G=parseInt(X,16);return{r:G>>16&255,g:G>>8&255,b:G&255}}let Z=$.match(/rgba?\(\s*(\d+)[,\s]\s*(\d+)[,\s]\s*(\d+)/i);if(Z)return{r:parseInt(Z[1],10),g:parseInt(Z[2],10),b:parseInt(Z[3],10)};return null}function YX(_){let $=(j)=>{let Z=j/255;return Z<=0.03928?Z/12.92:Math.pow((Z+0.055)/1.055,2.4)};return 0.2126*$(_.r)+0.7152*$(_.g)+0.0722*$(_.b)}function o5(_,$){let j=YX(_),Z=YX($),X=Math.max(j,Z),G=Math.min(j,Z);return(X+0.05)/(G+0.05)}function UX(_){let $=G5(_);if(!$)return"#ffffff";let j={r:255,g:255,b:255},Z={r:0,g:0,b:0};return o5($,j)>=o5($,Z)?"#ffffff":"#000000"}function L2(_){let $=(j)=>Math.max(0,Math.min(255,Math.round(j||0)));return`#${[_.r,_.g,_.b].map((j)=>$(j).toString(16).padStart(2,"0")).join("")}`}function NX(_,$,j){let Z=Math.max(0,Math.min(1,Number.isFinite(j)?j:0));return{r:_.r+($.r-_.r)*Z,g:_.g+($.g-_.g)*Z,b:_.b+($.b-_.b)*Z}}function q_(_,$,j=4.5){let Z=G5(_),X=G5($);if(!Z||!X)return $;if(o5(Z,X)>=j)return L2(X);let G=G5(UX(_));if(!G)return L2(X);let q=G,Q=1,K=0,V=1;for(let F=0;F<14;F+=1){let B=(K+V)/2,D=NX(X,G,B);if(o5(Z,D)>=j)q=D,Q=B,V=B;else K=B}let Y=L2(q),N=G5(Y);while(N&&o5(Z,N)<j&&Q<1)Q=Math.min(1,Q+0.01),Y=L2(NX(X,G,Q)),N=G5(Y);return Y}function yz(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function BX(_=typeof window<"u"?window:null,$=typeof document<"u"?document:null){let j=Tz(_,$),Z=j?Dz:Uz,X=W4("--bg-primary",j?"#000000":"#ffffff",$),G=W4("--text-primary",j?"#e7e9ea":"#0f1419",$),q=q_(X,G||UX(X),7),Q=W4("--accent-color","#1d9bf0",$),K=W4("--danger-color",j?"#ff7b72":"#cf222e",$),V=W4("--success-color",j?"#7ee787":"#1a7f37",$),Y=W4("--bg-hover",j?"#1d1f23":"#e8ebed",$),N=W4("--accent-soft-strong",yz(Q,j?"47":"33"),$);return{background:X,foreground:q,cursor:q_(X,Q,3),cursorAccent:X,selectionBackground:N,selectionForeground:q,black:q_(X,Y,3),red:q_(X,K,4.5),green:q_(X,V,4.5),yellow:q_(X,Z.yellow,4.5),blue:q_(X,Q,4.5),magenta:q_(X,Z.magenta,4.5),cyan:q_(X,Z.cyan,4.5),white:q,brightBlack:q_(X,Z.brightBlack,3),brightRed:q_(X,Z.brightRed,4.5),brightGreen:q_(X,Z.brightGreen,4.5),brightYellow:q_(X,Z.brightYellow,4.5),brightBlue:q_(X,Z.brightBlue,4.5),brightMagenta:q_(X,Z.brightMagenta,4.5),brightCyan:q_(X,Z.brightCyan,4.5),brightWhite:q}}function DX(_){let $=_?.activeElement;if(!$||$===_?.body||$===_?.documentElement)return!1;if(typeof $.blur!=="function")return!1;return $.blur(),!0}function r3(_,$){let j=[_?.inputElement,_?.textarea,_?.container,$,$?.querySelector?.("textarea")].filter((Z,X,G)=>Boolean(Z)&&G.indexOf(Z)===X);for(let Z of j)try{let X=Z.ownerDocument?.defaultView||window,G=typeof X.CompositionEvent==="function"?new X.CompositionEvent("compositionend",{data:""}):new X.Event("compositionend");Z.dispatchEvent?.(G)}catch(X){console.debug("[terminal-pane] Failed to dispatch best-effort IME composition reset.",X)}if(_&&typeof _==="object")_.isComposing=!1,_.pendingKeyAfterComposition=null,_.compositionJustEnded=!1}function wz(_){if(DX(_.ownerDocument),r3(_.terminal,_.terminalHost||null),typeof _.terminal?.focus==="function")_.terminal.focus();else _.termEl?.focus?.();r3(_.terminal,_.terminalHost||null)}class d3{container;ownerDocument;ownerWindow;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;resizeRetryTimers=new Set;lastAppliedThemeSignature=null;lastResizeSignature=null;pendingHandoffToken=null;standbyHandoffToken=null;standbyHandoffRequest=null;constructor(_,$){this.container=_,this.ownerDocument=_.ownerDocument||document,this.ownerWindow=this.ownerDocument.defaultView||window;let j=typeof $?.transferState?.handoffToken==="string"&&$.transferState.handoffToken.trim()?$.transferState.handoffToken.trim():null,Z=X5("terminal_handoff");this.pendingHandoffToken=j||Z||null,this.termEl=this.ownerDocument.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.termEl.setAttribute("inputmode","none"),this.statusEl=this.ownerDocument.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=this.ownerDocument.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.style.display="flex",this.bodyEl.style.flex="1 1 auto",this.bodyEl.style.minHeight="0",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Z=Number.isFinite(_?.height)?_.height:0,X=Number.isFinite($?.width)?$.width:0,G=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Z)}:${Math.round(X)}x${Math.round(G)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;_.style.display="flex",_.style.flex="1 1 auto",_.style.width="100%",_.style.height="100%",_.style.minWidth="0",_.style.minHeight="0",_.style.overflow="hidden";let $=_.querySelector("canvas");if($ instanceof HTMLElement)$.style.display="block"}queueResizeRetries(_=[32,96,180,320,520,900]){if(this.disposed||!this.ownerWindow)return;this.clearResizeRetries();for(let $ of _){let j=this.ownerWindow.setTimeout(()=>{if(this.resizeRetryTimers.delete(j),this.disposed)return;this.scheduleResize(!0)},$);this.resizeRetryTimers.add(j)}}clearResizeRetries(){if(!this.ownerWindow||this.resizeRetryTimers.size===0)return;for(let _ of Array.from(this.resizeRetryTimers))try{this.ownerWindow.clearTimeout(_)}catch($){console.debug("[terminal-pane] Ignoring timeout clear failure during resize retry drain.",$,{timer:_})}this.resizeRetryTimers.clear()}scheduleResize(_=!1){if(this.disposed)return;let $=this.getResizeSignature();if(!_&&this.lastResizeSignature===$)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await Jz();if(await Ez(),this.disposed)return;this.bodyEl.innerHTML="";let $=this.ownerDocument.createElement("div");$.className="terminal-live-host",$.style.display="flex",$.style.flex="1 1 auto",$.style.width="100%",$.style.height="100%",$.style.minWidth="0",$.style.minHeight="0",$.setAttribute("inputmode","none"),this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:Nz,fontSize:13,theme:BX(this.ownerWindow,this.ownerDocument)}),Z=null;if(typeof _.FitAddon==="function")Z=new _.FitAddon,j.loadAddon?.(Z);DX(this.ownerDocument),await j.open($),$.__terminal=j,r3(j,$),this.syncHostLayout(),j.loadFonts?.(),Z?.observeResize?.(),this.terminal=j,this.fitAddon=Z,this.installClipboardShortcutBridge(),this.installThemeSync(),this.installResizeSync(),this.scheduleResize(!0),this.queueResizeRetries([32,96,180,320]),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}installClipboardShortcutBridge(){let _=this.terminal;if(!_||typeof _.attachCustomKeyEventHandler!=="function")return;_.attachCustomKeyEventHandler(($)=>{if(zz($)){try{if(!_.copySelection?.()){let Z=typeof _.getSelection==="function"?String(_.getSelection()||""):"";if(Z)this.ownerWindow?.navigator?.clipboard?.writeText?.(Z).catch((X)=>{console.debug("[terminal-pane] Clipboard write fallback failed.",X)})}}catch(j){console.debug("[terminal-pane] Clipboard copy shortcut failed.",j)}return!0}if(Hz($)){if(typeof this.ownerWindow?.navigator?.clipboard?.readText!=="function")return;return Wz(this.ownerWindow?.navigator).then((j)=>{if(typeof j!=="string"||!j.length||this.disposed)return;_.paste?.(j)}),!0}return})}applyTheme(){if(!this.terminal)return;let _=BX(this.ownerWindow,this.ownerDocument),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;QX({termEl:this.termEl,bodyEl:this.bodyEl,terminal:this.terminal,theme:_,themeChanged:j,socket:this.socket,resize:()=>this.resize()}),this.lastAppliedThemeSignature=$}installThemeSync(){if(!this.ownerWindow||!this.ownerDocument)return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();this.ownerWindow.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=this.ownerWindow.matchMedia?.("(prefers-color-scheme: dark)"),Z=()=>_();if(j?.addEventListener)j.addEventListener("change",Z);else if(j?.addListener)j.addListener(Z);this.mediaQuery=j,this.mediaQueryListener=Z;let X=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(X?.observe(this.ownerDocument.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),this.ownerDocument.body)X?.observe(this.ownerDocument.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=X}installResizeSync(){if(!this.ownerWindow)return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(this.ownerWindow.addEventListener("dock-resize",_),this.ownerWindow.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),j.observe(this.termEl),j.observe(this.bodyEl),this.resizeObserver=j}}consumeStandbyHandoffToken(){let _=this.standbyHandoffToken||null;return this.standbyHandoffToken=null,_}async ensureStandbyHandoffToken(_=!1){if(this.disposed)return null;if(!_&&this.standbyHandoffToken)return this.standbyHandoffToken;if(this.standbyHandoffRequest)return await this.standbyHandoffRequest;return this.standbyHandoffRequest=Mz().then(($)=>{if(!$||this.disposed)return null;return this.standbyHandoffToken=$,$}).catch(($)=>{return console.warn("[terminal-pane] Failed to prepare standby handoff token:",$),null}).finally(()=>{this.standbyHandoffRequest=null}),await this.standbyHandoffRequest}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await Az();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=this.pendingHandoffToken||null,Z=new WebSocket(kz($.ws_path||"/terminal/ws",j));this.socket=Z,this.setStatus(j?"Transferring…":"Connecting…"),_.onData?.((X)=>{if(Z.readyState===WebSocket.OPEN)Z.send(JSON.stringify({type:"input",data:X}))}),_.onResize?.(({cols:X,rows:G})=>{if(Z.readyState===WebSocket.OPEN)Z.send(JSON.stringify({type:"resize",cols:X,rows:G}))}),Z.addEventListener("open",()=>{if(this.disposed)return;if(j&&this.pendingHandoffToken===j)this.pendingHandoffToken=null;this.ensureStandbyHandoffToken(!1),this.setStatus("Connected"),this.scheduleResize(!0),this.queueResizeRetries([24,72,160,320])}),Z.addEventListener("message",(X)=>{if(this.disposed)return;let G=null;try{G=JSON.parse(String(X.data))}catch{G={type:"output",data:String(X.data)}}if(G?.type==="session"){let q=typeof G.session_id==="string"?G.session_id:null;if(_.__piclawSessionMeta={sessionId:q,createdAt:typeof G.created_at==="string"?G.created_at:null,processPid:typeof G.process_pid==="number"?G.process_pid:null},!this.standbyHandoffToken)this.ensureStandbyHandoffToken(!1);return}if(G?.type==="output"&&typeof G.data==="string"){_.write?.(G.data);return}if(G?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),Z.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),Z.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}detachHostListeners(){XX({ownerWindow:this.ownerWindow,themeChangeListener:this.themeChangeListener,mediaQuery:this.mediaQuery,mediaQueryListener:this.mediaQueryListener,dockResizeListener:this.dockResizeListener,windowResizeListener:this.windowResizeListener,themeObserver:this.themeObserver,resizeObserver:this.resizeObserver}),this.themeChangeListener=null,this.mediaQuery=null,this.mediaQueryListener=null,this.themeObserver=null,this.resizeObserver=null,this.dockResizeListener=null,this.windowResizeListener=null}beforeDetachFromHost(){this.setStatus("Moving terminal…")}afterAttachToHost(_){let $=typeof _?.transferState?.handoffToken==="string"&&_.transferState.handoffToken.trim()?_.transferState.handoffToken.trim():null;if($)this.pendingHandoffToken=$;if(this.installThemeSync(),this.installResizeSync(),this.socket?.readyState===WebSocket.OPEN)this.setStatus("Connected");else if(this.pendingHandoffToken)this.setStatus("Transferring…");else if(this.socket?.readyState===WebSocket.CONNECTING)this.setStatus("Connecting…");this.scheduleResize(!0),this.queueResizeRetries([32,96,180,320]),requestAnimationFrame(()=>this.focus())}moveHost(_){return!1}exportHostTransferState(){let _=this.standbyHandoffToken||this.pendingHandoffToken||null;return _?{kind:"terminal",live:!1,handoffToken:_}:null}async preparePopoutTransfer(){let _=this.consumeStandbyHandoffToken();if(!_)await this.ensureStandbyHandoffToken(!0),_=this.consumeStandbyHandoffToken();if(!_)return null;return this.pendingHandoffToken=_,{terminal_handoff:_}}getContent(){return}isDirty(){return!1}focus(){let _=this.bodyEl.querySelector(".terminal-live-host");wz({terminal:this.terminal,terminalHost:_,termEl:this.termEl,ownerDocument:this.ownerDocument})}resize(){GX({syncHostLayout:()=>this.syncHostLayout(),terminal:this.terminal,fitAddon:this.fitAddon,sendResize:()=>this.sendResize()})}dispose(){if(this.disposed)return;this.disposed=!0,this.standbyHandoffToken=null,this.standbyHandoffRequest=null,this.clearResizeRetries(),this.detachHostListeners(),this.resizeFrame=qX({resizeFrame:this.resizeFrame,socket:this.socket,fitAddon:this.fitAddon,terminal:this.terminal,termEl:this.termEl})}}var o3={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new d3(_,$)}},i3={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path===q5?1e4:!1},mount(_,$){return new d3(_,$)}};function b_(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((X)=>{try{return Boolean($.matchMedia(X)?.matches)}catch{return!1}})}function J2(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Z=String(j?.userAgent||""),X=Number(j?.maxTouchPoints||0),G=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Z),q=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(G||X>1||q)}function zX(_,$={}){if(b_($))return null;if(J2($))return{target:"_blank",features:void 0,mode:"tab"};return{target:Iz(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function s3(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function a3(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Z=String($.message||"Preparing a new branch window…");_.document.title=j;let X=_.document.body;if(!X)return;if(typeof _.document.createElement!=="function"){X.textContent=`${j}
${Z}`;return}let G=_.document.createElement("div");G.setAttribute("style","font-family: system-ui, sans-serif; padding: 24px; color: #222;");let q=_.document.createElement("h1");q.setAttribute("style","font-size: 18px; margin: 0 0 12px;"),q.textContent=j;let Q=_.document.createElement("p");if(Q.setAttribute("style","margin: 0; line-height: 1.5;"),Q.textContent=Z,G.appendChild(q),G.appendChild(Q),typeof X.replaceChildren==="function")X.replaceChildren(G);else X.innerHTML="",X.appendChild(G)}catch{return}}function t3(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{return}}function e3(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{return}}function w_(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),X=String($||"").trim()||"web:default";if(Z.searchParams.set("chat_jid",X),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),Z.searchParams.delete("pane_popout"),Z.searchParams.delete("pane_path"),Z.searchParams.delete("pane_label"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function _7(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),X=String($||"").trim()||"web:default";if(Z.searchParams.set("branch_loader","1"),Z.searchParams.set("branch_source_chat_jid",X),Z.searchParams.delete("chat_jid"),Z.searchParams.delete("pane_popout"),Z.searchParams.delete("pane_path"),Z.searchParams.delete("pane_label"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function HX(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),X=String($||"").trim();if(!X)return Z.toString();if(Z.searchParams.set("pane_popout","1"),Z.searchParams.set("pane_path",X),j?.label)Z.searchParams.set("pane_label",String(j.label));else Z.searchParams.delete("pane_label");if(j?.chatJid)Z.searchParams.set("chat_jid",String(j.chatJid));let G=j?.params&&typeof j.params==="object"?j.params:null;if(G)for(let[q,Q]of Object.entries(G)){let K=String(q||"").trim();if(!K)continue;if(Q===null||Q===void 0||Q==="")Z.searchParams.delete(K);else Z.searchParams.set(K,String(Q))}return Z.searchParams.delete("chat_only"),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),Z.toString()}function Iz(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function xz(_){return`piclaw-pane-${String(_||"pane").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function WX(_,$={}){if(b_($))return null;if(J2($))return{target:"_blank",features:void 0,mode:"tab"};return{target:xz(_),features:"popup=yes,width=1200,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function O4(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Z=j.toLowerCase();if(Z.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Z.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Z.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Z.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Z.includes("failed to fork branch")||Z.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function Cz(_){try{return JSON.parse(_)}catch{return null}}function Pz(_){if(typeof _==="string")return new TextEncoder().encode(_).byteLength;if(_ instanceof ArrayBuffer)return _.byteLength;if(ArrayBuffer.isView(_))return _.byteLength;if(_ instanceof Blob)return _.size;return 0}function fz(_){if(typeof _==="string")return _.length;if(_ instanceof ArrayBuffer)return _.byteLength;if(_ instanceof Blob)return _.size;return Number(_?.size||0)}function OX(_){try{return _?.close?.(),!0}catch($){return!1}}class $7{socket=null;disposed=!1;options;bytesIn=0;bytesOut=0;pendingOutbound=[];constructor(_){this.options=_}connect(){if(this.disposed)return;OX(this.socket);let _=new WebSocket(this.options.url);_.binaryType=this.options.binaryType||"arraybuffer",_.addEventListener("open",()=>{if(this.disposed||this.socket!==_)return;this.flushPendingOutbound(_),this.options.onOpen?.()}),_.addEventListener("message",($)=>{if(this.disposed||this.socket!==_)return;let j=fz($.data);if(this.bytesIn+=j,this.emitMetrics(),typeof $.data==="string"){let Z=this.options.parseControlMessage||Cz;this.options.onMessage?.({kind:"control",raw:$.data,payload:Z($.data)});return}this.options.onMessage?.({kind:"binary",data:$.data,size:j})}),_.addEventListener("close",()=>{if(this.socket===_)this.socket=null;if(this.disposed)return;this.options.onClose?.()}),_.addEventListener("error",()=>{if(this.disposed||this.socket!==_)return;this.options.onError?.()}),this.socket=_}send(_){if(this.disposed)return;let $=this.socket;if(!$||$.readyState!==WebSocket.OPEN){this.pendingOutbound.push(_);return}this.sendNow($,_)}sendControl(_){this.send(JSON.stringify(_??{}))}getMetrics(){return{bytesIn:this.bytesIn,bytesOut:this.bytesOut}}dispose(){if(this.disposed)return;this.disposed=!0,OX(this.socket),this.socket=null}emitMetrics(){this.options.onMetrics?.(this.getMetrics())}sendNow(_,$){let j=Pz($);this.bytesOut+=j,this.emitMetrics(),_.send($)}flushPendingOutbound(_){if(this.pendingOutbound.length===0)return;let $=this.pendingOutbound.splice(0);for(let j=0;j<$.length;j+=1){if(this.disposed||this.socket!==_||_.readyState!==WebSocket.OPEN){this.pendingOutbound.unshift(...$.slice(j));return}this.sendNow(_,$[j])}}}var i5=()=>{throw Error("Operation requires compiling with --exportRuntime")},Rz=typeof BigUint64Array<"u",s5=Symbol();var Sz=new TextDecoder("utf-16le",{fatal:!0});Object.hasOwn=Object.hasOwn||function(_,$){return Object.prototype.hasOwnProperty.call(_,$)};function LX(_,$){let j=new Uint32Array(_)[$+-4>>>2]>>>1,Z=new Uint16Array(_,$,j);if(j<=192)return String.fromCharCode(...Z);try{return Sz.decode(Z)}catch{let X="",G=0;while(j-G>1024)X+=String.fromCharCode(...Z.subarray(G,G+=1024));return X+String.fromCharCode(...Z.subarray(G))}}function JX(_){let $={};function j(X,G){if(!X)return"<yet unknown>";return LX(X.buffer,G)}let Z=_.env=_.env||{};return Z.abort=Z.abort||function(G,q,Q,K){let V=$.memory||Z.memory;throw Error(`abort: ${j(V,G)} at ${j(V,q)}:${Q}:${K}`)},Z.trace=Z.trace||function(G,q,...Q){let K=$.memory||Z.memory;console.log(`trace: ${j(K,G)}${q?" ":""}${Q.slice(0,q).join(", ")}`)},Z.seed=Z.seed||Date.now,_.Math=_.Math||Math,_.Date=_.Date||Date,$}function EX(_,$){let j=$.exports,Z=j.memory,X=j.table,G=j.__new||i5,q=j.__pin||i5,Q=j.__unpin||i5,K=j.__collect||i5,V=j.__rtti_base,Y=V?(T)=>T[V>>>2]:i5;_.__new=G,_.__pin=q,_.__unpin=Q,_.__collect=K;function N(T){let y=new Uint32Array(Z.buffer);if((T>>>=0)>=Y(y))throw Error(`invalid id: ${T}`);return y[(V+4>>>2)+T]}function F(T){let y=N(T);if(!(y&7))throw Error(`not an array: ${T}, flags=${y}`);return y}function B(T){return 31-Math.clz32(T>>>6&31)}function D(T){if(T==null)return 0;let y=T.length,A=G(y<<1,2),P=new Uint16Array(Z.buffer);for(let f=0,u=A>>>1;f<y;++f)P[u+f]=T.charCodeAt(f);return A}_.__newString=D;function z(T){if(T==null)return 0;let y=new Uint8Array(T),A=G(y.length,1);return new Uint8Array(Z.buffer).set(y,A),A}_.__newArrayBuffer=z;function H(T){if(!T)return null;let y=Z.buffer;if(new Uint32Array(y)[T+-8>>>2]!==2)throw Error(`not a string: ${T}`);return LX(y,T)}_.__getString=H;function W(T,y,A){let P=Z.buffer;if(A)switch(T){case 2:return new Float32Array(P);case 3:return new Float64Array(P)}else switch(T){case 0:return new(y?Int8Array:Uint8Array)(P);case 1:return new(y?Int16Array:Uint16Array)(P);case 2:return new(y?Int32Array:Uint32Array)(P);case 3:return new(y?BigInt64Array:BigUint64Array)(P)}throw Error(`unsupported align: ${T}`)}function M(T,y=0){let A=y,P=F(T),f=B(P),u=typeof A!=="number",c=u?A.length:A,r=G(c<<f,P&4?T:1),e;if(P&4)e=r;else{q(r);let m=G(P&2?16:12,T);Q(r);let $0=new Uint32Array(Z.buffer);if($0[m+0>>>2]=r,$0[m+4>>>2]=r,$0[m+8>>>2]=c<<f,P&2)$0[m+12>>>2]=c;e=m}if(u){let m=W(f,P&2048,P&4096),$0=r>>>f;if(P&16384)for(let W0=0;W0<c;++W0)m[$0+W0]=A[W0];else m.set(A,$0)}return e}_.__newArray=M;function E(T){let y=new Uint32Array(Z.buffer),A=y[T+-8>>>2],P=F(A),f=B(P),u=P&4?T:y[T+4>>>2],c=P&2?y[T+12>>>2]:y[u+-4>>>2]>>>f;return W(f,P&2048,P&4096).subarray(u>>>=f,u+c)}_.__getArrayView=E;function L(T){let y=E(T),A=y.length,P=Array(A);for(let f=0;f<A;f++)P[f]=y[f];return P}_.__getArray=L;function x(T){let y=Z.buffer,A=new Uint32Array(y)[T+-4>>>2];return y.slice(T,T+A)}_.__getArrayBuffer=x;function I(T){if(!X)throw Error("Operation requires compiling with --exportTable");let y=new Uint32Array(Z.buffer)[T>>>2];return X.get(y)}_.__getFunction=I;function J(T,y,A){return new T(k(T,y,A))}function k(T,y,A){let P=Z.buffer,f=new Uint32Array(P);return new T(P,f[A+4>>>2],f[A+8>>>2]>>>y)}function O(T,y,A){_[`__get${y}`]=J.bind(null,T,A),_[`__get${y}View`]=k.bind(null,T,A)}if([Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array].forEach((T)=>{O(T,T.name,31-Math.clz32(T.BYTES_PER_ELEMENT))}),Rz)[BigUint64Array,BigInt64Array].forEach((T)=>{O(T,T.name.slice(3),3)});return _.memory=_.memory||Z,_.table=_.table||X,gz(j,_)}function AX(_){return typeof Response<"u"&&_ instanceof Response}function bz(_){return _ instanceof WebAssembly.Module}async function j7(_,$={}){if(AX(_=await _))return E2(_,$);let j=bz(_)?_:await WebAssembly.compile(_),Z=JX($),X=await WebAssembly.instantiate(j,$),G=EX(Z,X);return{module:j,instance:X,exports:G}}async function E2(_,$={}){if(!WebAssembly.instantiateStreaming)return j7(AX(_=await _)?_.arrayBuffer():_,$);let j=JX($),Z=await WebAssembly.instantiateStreaming(_,$),X=EX(j,Z.instance);return{...Z,exports:X}}function gz(_,$={}){let j=_.__argumentsLength?(Z)=>{_.__argumentsLength.value=Z}:_.__setArgumentsLength||_.__setargc||(()=>{});for(let Z of Object.keys(_)){let X=_[Z],G=Z.split("."),q=$;while(G.length>1){let V=G.shift();if(!Object.hasOwn(q,V))q[V]={};q=q[V]}let Q=G[0],K=Q.indexOf("#");if(K>=0){let V=Q.substring(0,K),Y=q[V];if(typeof Y>"u"||!Y.prototype){let N=function(...F){return N.wrap(N.prototype.constructor(0,...F))};if(N.prototype={valueOf(){return this[s5]}},N.wrap=function(F){return Object.create(N.prototype,{[s5]:{value:F,writable:!1}})},Y)Object.getOwnPropertyNames(Y).forEach((F)=>Object.defineProperty(N,F,Object.getOwnPropertyDescriptor(Y,F)));q[V]=N}if(Q=Q.substring(K+1),q=q[V].prototype,/^(get|set):/.test(Q)){if(!Object.hasOwn(q,Q=Q.substring(4))){let N=_[Z.replace("set:","get:")],F=_[Z.replace("get:","set:")];Object.defineProperty(q,Q,{get(){return N(this[s5])},set(B){F(this[s5],B)},enumerable:!0})}}else if(Q==="constructor")(q[Q]=function(...N){return j(N.length),X(...N)}).original=X;else(q[Q]=function(...N){return j(N.length),X(this[s5],...N)}).original=X}else if(/^(get|set):/.test(Q)){if(!Object.hasOwn(q,Q=Q.substring(4)))Object.defineProperty(q,Q,{get:_[Z.replace("set:","get:")],set:_[Z.replace("get:","set:")],enumerable:!0})}else if(typeof X==="function"&&X!==j)(q[Q]=(...V)=>{return j(V.length),X(...V)}).original=X;else q[Q]=X}return $}function Z7(_){try{return _?.__collect?.(),!0}catch($){return!1}}var vz="/static/js/vendor/remote-display-decoder.wasm",A2=null;function MX(_){if(_ instanceof ArrayBuffer)return _;if(_.byteOffset===0&&_.byteLength===_.buffer.byteLength)return _.buffer;return _.slice().buffer}async function kX(){if(A2)return A2;return A2=(async()=>{try{let Z=function(X,G,q,Q,K,V,Y){let N=MX(G),F=j.__pin(j.__newArrayBuffer(N));try{return j[X](F,q,Q,K,V,Y.bitsPerPixel,Y.bigEndian?1:0,Y.trueColor?1:0,Y.redMax,Y.greenMax,Y.blueMax,Y.redShift,Y.greenShift,Y.blueShift)}finally{j.__unpin(F),Z7(j)}},_=await fetch(vz,{credentials:"same-origin"});if(!_.ok)throw Error(`HTTP ${_.status}`);let j=(typeof E2==="function"?await E2(_,{}):await j7(await _.arrayBuffer(),{})).exports;for(let X of["initFramebuffer","getFramebufferPtr","getFramebufferLen","getFramebufferWidth","getFramebufferHeight","processRawRect","processCopyRect","processRreRect","processHextileRect","processZrleTileData","decodeRawRectToRgba"])if(typeof j[X]!=="function")throw Error(`${X} export is missing.`);return{initFramebuffer(X,G){j.initFramebuffer(X,G)},getFramebuffer(){let X=j.getFramebufferPtr(),G=j.getFramebufferLen();return new Uint8ClampedArray(new Uint8Array(j.memory.buffer,X,G).slice().buffer)},getFramebufferWidth(){return j.getFramebufferWidth()},getFramebufferHeight(){return j.getFramebufferHeight()},processRawRect(X,G,q,Q,K,V){return Z("processRawRect",X,G,q,Q,K,V)},processCopyRect(X,G,q,Q,K,V){return j.processCopyRect(X,G,q,Q,K,V)},processRreRect(X,G,q,Q,K,V){return Z("processRreRect",X,G,q,Q,K,V)},processHextileRect(X,G,q,Q,K,V){return Z("processHextileRect",X,G,q,Q,K,V)},processZrleTileData(X,G,q,Q,K,V){return Z("processZrleTileData",X,G,q,Q,K,V)},decodeRawRectToRgba(X,G,q,Q){let K=MX(X),V=j.__pin(j.__newArrayBuffer(K));try{let Y=j.__pin(j.decodeRawRectToRgba(V,G,q,Q.bitsPerPixel,Q.bigEndian?1:0,Q.trueColor?1:0,Q.redMax,Q.greenMax,Q.blueMax,Q.redShift,Q.greenShift,Q.blueShift));try{return new Uint8ClampedArray(j.__getArrayBuffer(Y))}finally{j.__unpin(Y)}}finally{j.__unpin(V),Z7(j)}}}}catch(_){return console.warn("[remote-display] Failed to load WASM pipeline, using JS fallback.",_),null}})(),A2}function Q5(_,$,j){return Math.max($,Math.min(j,_))}function M2(_,$,j){let Z=new Uint8Array(6),X=Q5(Math.floor(Number($||0)),0,65535),G=Q5(Math.floor(Number(j||0)),0,65535);return Z[0]=5,Z[1]=Q5(Math.floor(Number(_||0)),0,255),Z[2]=X>>8&255,Z[3]=X&255,Z[4]=G>>8&255,Z[5]=G&255,Z}function h$(_){switch(Number(_)){case 0:return 1;case 1:return 2;case 2:return 4;default:return 0}}function G7(_){let $=h$(_?.button);if($)return $;let j=String(_?.pointerType||"").toLowerCase();if(j==="touch"||j==="pen")return h$(0);let Z=Number(_?.buttons||0);if(Z&1)return h$(0);if(Z&4)return h$(1);if(Z&2)return h$(2);return 0}function L4(_){let $=String(_?.type||"").toLowerCase();if($==="pointerup"||$==="pointercancel"||$==="lostpointercapture")return!0;let j=Number(_?.buttons);if(Number.isFinite(j)&&j===0&&$!=="pointerdown")return!0;let Z=String(_?.pointerType||"").toLowerCase(),X=Number(_?.pressure);if(Z==="touch"||Z==="pen"){if($==="pointerleave"||$==="pointerout")return!0;if(Number.isFinite(X)&&X<=0&&$!=="pointerdown")return!0}return!1}function TX(_){let $=String(_?.type||"").toLowerCase();if($==="touchend"||$==="touchcancel")return!0;if($==="touchmove")return Number(_?.touches?.length||0)<=0;return!1}function i_(_){return String(_||"").toLowerCase()==="touch"}function mz(_,$,j,Z){let X=Number(j||0)-Number(_||0),G=Number(Z||0)-Number($||0);return Math.hypot(X,G)}function q7(_){let $=Number.isFinite(_?.maxDistancePx)?Number(_.maxDistancePx):14;return mz(_?.startX,_?.startY,_?.clientX,_?.clientY)>$}function yX(_){let $=Number.isFinite(_?.maxElapsedMs)?Number(_.maxElapsedMs):300;if(Number(_?.elapsedMs||0)>$)return!1;return!q7(_)}function wX(_){return String(_||"").toLowerCase()!=="mouse"}function Q7(_,$,j,Z,X){let G=Math.max(1,Math.floor(Number(Z||0))),q=Math.max(1,Math.floor(Number(X||0))),Q=Math.max(1,Number(j?.width||0)),K=Math.max(1,Number(j?.height||0)),V=(Number(_||0)-Number(j?.left||0))/Q,Y=(Number($||0)-Number(j?.top||0))/K;return{x:Q5(Math.floor(V*G),0,Math.max(0,G-1)),y:Q5(Math.floor(Y*q),0,Math.max(0,q-1))}}function IX(_,$,j,Z=0){let X=Number(_)<0?8:16,G=Q5(Number(Z||0)|X,0,255);return[M2(G,$,j),M2(Number(Z||0),$,j)]}function xX(_,$){let j=new Uint8Array(8),Z=Math.max(0,Math.min(4294967295,Number($||0)>>>0));return j[0]=4,j[1]=_?1:0,j[4]=Z>>>24&255,j[5]=Z>>>16&255,j[6]=Z>>>8&255,j[7]=Z&255,j}function CX(_,$,j=!1){if(_==null||$==null)return!1;return Boolean(j)||Number(_)===Number($)}function J4(_){if(typeof _!=="string")return null;return _.length>0?_:null}function PX(_,$,j,Z){let X=Math.max(1,Math.floor(Number(_||0))),G=Math.max(1,Math.floor(Number($||0))),q=Math.max(1,Math.floor(Number(j||0))),Q=Math.max(1,Math.floor(Number(Z||0))),K=Math.min(X/q,G/Q);if(!Number.isFinite(K)||K<=0)return 1;return Math.max(0.01,K)}var X7={Backspace:65288,Tab:65289,Enter:65293,Escape:65307,Insert:65379,Delete:65535,Home:65360,End:65367,PageUp:65365,PageDown:65366,ArrowLeft:65361,ArrowUp:65362,ArrowRight:65363,ArrowDown:65364,Shift:65505,ShiftLeft:65505,ShiftRight:65506,Control:65507,ControlLeft:65507,ControlRight:65508,Alt:65513,AltLeft:65513,AltRight:65514,Meta:65515,MetaLeft:65515,MetaRight:65516,Super:65515,Super_L:65515,Super_R:65516,CapsLock:65509,NumLock:65407,ScrollLock:65300,Pause:65299,PrintScreen:65377,ContextMenu:65383,Menu:65383," ":32};for(let _=1;_<=12;_+=1)X7[`F${_}`]=65470+(_-1);function V7(_){let $=[_?.key,_?.code];for(let G of $)if(G&&Object.prototype.hasOwnProperty.call(X7,G))return X7[G];let j=String(_?.key||""),Z=j?j.codePointAt(0):null,X=Z==null?0:Z>65535?2:1;if(Z!=null&&j.length===X){if(Z<=255)return Z;return(16777216|Z)>>>0}return null}var s1=Uint8Array,J_=Uint16Array,H7=Int32Array,k2=new s1([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),T2=new s1([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),F7=new s1([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),bX=function(_,$){var j=new J_(31);for(var Z=0;Z<31;++Z)j[Z]=$+=1<<_[Z-1];var X=new H7(j[30]);for(var Z=1;Z<30;++Z)for(var G=j[Z];G<j[Z+1];++G)X[G]=G-j[Z]<<5|Z;return{b:j,r:X}},gX=bX(k2,2),uX=gX.b,U7=gX.r;uX[28]=258,U7[258]=28;var vX=bX(T2,0),cz=vX.b,fX=vX.r,D7=new J_(32768);for(F1=0;F1<32768;++F1)s_=(F1&43690)>>1|(F1&21845)<<1,s_=(s_&52428)>>2|(s_&13107)<<2,s_=(s_&61680)>>4|(s_&3855)<<4,D7[F1]=((s_&65280)>>8|(s_&255)<<8)>>1;var s_,F1,a_=function(_,$,j){var Z=_.length,X=0,G=new J_($);for(;X<Z;++X)if(_[X])++G[_[X]-1];var q=new J_($);for(X=1;X<$;++X)q[X]=q[X-1]+G[X-1]<<1;var Q;if(j){Q=new J_(1<<$);var K=15-$;for(X=0;X<Z;++X)if(_[X]){var V=X<<4|_[X],Y=$-_[X],N=q[_[X]-1]++<<Y;for(var F=N|(1<<Y)-1;N<=F;++N)Q[D7[N]>>K]=V}}else{Q=new J_(Z);for(X=0;X<Z;++X)if(_[X])Q[X]=D7[q[_[X]-1]++]>>15-_[X]}return Q},l$=new s1(288);for(F1=0;F1<144;++F1)l$[F1]=8;var F1;for(F1=144;F1<256;++F1)l$[F1]=9;var F1;for(F1=256;F1<280;++F1)l$[F1]=7;var F1;for(F1=280;F1<288;++F1)l$[F1]=8;var F1,_6=new s1(32);for(F1=0;F1<32;++F1)_6[F1]=5;var F1,hz=a_(l$,9,0),lz=a_(l$,9,1),pz=a_(_6,5,0),rz=a_(_6,5,1),K7=function(_){var $=_[0];for(var j=1;j<_.length;++j)if(_[j]>$)$=_[j];return $},g_=function(_,$,j){var Z=$/8|0;return(_[Z]|_[Z+1]<<8)>>($&7)&j},Y7=function(_,$){var j=$/8|0;return(_[j]|_[j+1]<<8|_[j+2]<<16)>>($&7)},W7=function(_){return(_+7)/8|0},e5=function(_,$,j){if($==null||$<0)$=0;if(j==null||j>_.length)j=_.length;return new s1(_.subarray($,j))};var nz=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],H_=function(_,$,j){var Z=Error($||nz[_]);if(Z.code=_,Error.captureStackTrace)Error.captureStackTrace(Z,H_);if(!j)throw Z;return Z},dz=function(_,$,j,Z){var X=_.length,G=Z?Z.length:0;if(!X||$.f&&!$.l)return j||new s1(0);var q=!j,Q=q||$.i!=2,K=$.i;if(q)j=new s1(X*3);var V=function(Q0){var O0=j.length;if(Q0>O0){var x0=new s1(Math.max(O0*2,Q0));x0.set(j),j=x0}},Y=$.f||0,N=$.p||0,F=$.b||0,B=$.l,D=$.d,z=$.m,H=$.n,W=X*8;do{if(!B){Y=g_(_,N,1);var M=g_(_,N+1,3);if(N+=3,!M){var E=W7(N)+4,L=_[E-4]|_[E-3]<<8,x=E+L;if(x>X){if(K)H_(0);break}if(Q)V(F+L);j.set(_.subarray(E,x),F),$.b=F+=L,$.p=N=x*8,$.f=Y;continue}else if(M==1)B=lz,D=rz,z=9,H=5;else if(M==2){var I=g_(_,N,31)+257,J=g_(_,N+10,15)+4,k=I+g_(_,N+5,31)+1;N+=14;var O=new s1(k),T=new s1(19);for(var y=0;y<J;++y)T[F7[y]]=g_(_,N+y*3,7);N+=J*3;var A=K7(T),P=(1<<A)-1,f=a_(T,A,1);for(var y=0;y<k;){var u=f[g_(_,N,P)];N+=u&15;var E=u>>4;if(E<16)O[y++]=E;else{var c=0,r=0;if(E==16)r=3+g_(_,N,3),N+=2,c=O[y-1];else if(E==17)r=3+g_(_,N,7),N+=3;else if(E==18)r=11+g_(_,N,127),N+=7;while(r--)O[y++]=c}}var e=O.subarray(0,I),m=O.subarray(I);z=K7(e),H=K7(m),B=a_(e,z,1),D=a_(m,H,1)}else H_(1);if(N>W){if(K)H_(0);break}}if(Q)V(F+131072);var $0=(1<<z)-1,W0=(1<<H)-1,X0=N;for(;;X0=N){var c=B[Y7(_,N)&$0],Z0=c>>4;if(N+=c&15,N>W){if(K)H_(0);break}if(!c)H_(2);if(Z0<256)j[F++]=Z0;else if(Z0==256){X0=N,B=null;break}else{var q0=Z0-254;if(Z0>264){var y=Z0-257,D0=k2[y];q0=g_(_,N,(1<<D0)-1)+uX[y],N+=D0}var h=D[Y7(_,N)&W0],j0=h>>4;if(!h)H_(3);N+=h&15;var m=cz[j0];if(j0>3){var D0=T2[j0];m+=Y7(_,N)&(1<<D0)-1,N+=D0}if(N>W){if(K)H_(0);break}if(Q)V(F+131072);var Y0=F+q0;if(F<m){var L0=G-m,s=Math.min(m,Y0);if(L0+F<0)H_(3);for(;F<s;++F)j[F]=Z[L0+F]}for(;F<Y0;++F)j[F]=j[F-m]}}if($.l=B,$.p=X0,$.b=F,$.f=Y,B)Y=1,$.m=z,$.d=D,$.n=H}while(!Y);return F!=j.length&&q?e5(j,0,F):j.subarray(0,F)},W$=function(_,$,j){j<<=$&7;var Z=$/8|0;_[Z]|=j,_[Z+1]|=j>>8},a5=function(_,$,j){j<<=$&7;var Z=$/8|0;_[Z]|=j,_[Z+1]|=j>>8,_[Z+2]|=j>>16},N7=function(_,$){var j=[];for(var Z=0;Z<_.length;++Z)if(_[Z])j.push({s:Z,f:_[Z]});var X=j.length,G=j.slice();if(!X)return{t:cX,l:0};if(X==1){var q=new s1(j[0].s+1);return q[j[0].s]=1,{t:q,l:1}}j.sort(function(x,I){return x.f-I.f}),j.push({s:-1,f:25001});var Q=j[0],K=j[1],V=0,Y=1,N=2;j[0]={s:-1,f:Q.f+K.f,l:Q,r:K};while(Y!=X-1)Q=j[j[V].f<j[N].f?V++:N++],K=j[V!=Y&&j[V].f<j[N].f?V++:N++],j[Y++]={s:-1,f:Q.f+K.f,l:Q,r:K};var F=G[0].s;for(var Z=1;Z<X;++Z)if(G[Z].s>F)F=G[Z].s;var B=new J_(F+1),D=z7(j[Y-1],B,0);if(D>$){var Z=0,z=0,H=D-$,W=1<<H;G.sort(function(I,J){return B[J.s]-B[I.s]||I.f-J.f});for(;Z<X;++Z){var M=G[Z].s;if(B[M]>$)z+=W-(1<<D-B[M]),B[M]=$;else break}z>>=H;while(z>0){var E=G[Z].s;if(B[E]<$)z-=1<<$-B[E]++-1;else++Z}for(;Z>=0&&z;--Z){var L=G[Z].s;if(B[L]==$)--B[L],++z}D=$}return{t:new s1(B),l:D}},z7=function(_,$,j){return _.s==-1?Math.max(z7(_.l,$,j+1),z7(_.r,$,j+1)):$[_.s]=j},RX=function(_){var $=_.length;while($&&!_[--$]);var j=new J_(++$),Z=0,X=_[0],G=1,q=function(K){j[Z++]=K};for(var Q=1;Q<=$;++Q)if(_[Q]==X&&Q!=$)++G;else{if(!X&&G>2){for(;G>138;G-=138)q(32754);if(G>2)q(G>10?G-11<<5|28690:G-3<<5|12305),G=0}else if(G>3){q(X),--G;for(;G>6;G-=6)q(8304);if(G>2)q(G-3<<5|8208),G=0}while(G--)q(X);G=1,X=_[Q]}return{c:j.subarray(0,Z),n:$}},t5=function(_,$){var j=0;for(var Z=0;Z<$.length;++Z)j+=_[Z]*$[Z];return j},mX=function(_,$,j){var Z=j.length,X=W7($+2);_[X]=Z&255,_[X+1]=Z>>8,_[X+2]=_[X]^255,_[X+3]=_[X+1]^255;for(var G=0;G<Z;++G)_[X+G+4]=j[G];return(X+4+Z)*8},SX=function(_,$,j,Z,X,G,q,Q,K,V,Y){W$($,Y++,j),++X[256];var N=N7(X,15),F=N.t,B=N.l,D=N7(G,15),z=D.t,H=D.l,W=RX(F),M=W.c,E=W.n,L=RX(z),x=L.c,I=L.n,J=new J_(19);for(var k=0;k<M.length;++k)++J[M[k]&31];for(var k=0;k<x.length;++k)++J[x[k]&31];var O=N7(J,7),T=O.t,y=O.l,A=19;for(;A>4&&!T[F7[A-1]];--A);var P=V+5<<3,f=t5(X,l$)+t5(G,_6)+q,u=t5(X,F)+t5(G,z)+q+14+3*A+t5(J,T)+2*J[16]+3*J[17]+7*J[18];if(K>=0&&P<=f&&P<=u)return mX($,Y,_.subarray(K,K+V));var c,r,e,m;if(W$($,Y,1+(u<f)),Y+=2,u<f){c=a_(F,B,0),r=F,e=a_(z,H,0),m=z;var $0=a_(T,y,0);W$($,Y,E-257),W$($,Y+5,I-1),W$($,Y+10,A-4),Y+=14;for(var k=0;k<A;++k)W$($,Y+3*k,T[F7[k]]);Y+=3*A;var W0=[M,x];for(var X0=0;X0<2;++X0){var Z0=W0[X0];for(var k=0;k<Z0.length;++k){var q0=Z0[k]&31;if(W$($,Y,$0[q0]),Y+=T[q0],q0>15)W$($,Y,Z0[k]>>5&127),Y+=Z0[k]>>12}}}else c=hz,r=l$,e=pz,m=_6;for(var k=0;k<Q;++k){var D0=Z[k];if(D0>255){var q0=D0>>18&31;if(a5($,Y,c[q0+257]),Y+=r[q0+257],q0>7)W$($,Y,D0>>23&31),Y+=k2[q0];var h=D0&31;if(a5($,Y,e[h]),Y+=m[h],h>3)a5($,Y,D0>>5&8191),Y+=T2[h]}else a5($,Y,c[D0]),Y+=r[D0]}return a5($,Y,c[256]),Y+r[256]},oz=new H7([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),cX=new s1(0),iz=function(_,$,j,Z,X,G){var q=G.z||_.length,Q=new s1(Z+q+5*(1+Math.ceil(q/7000))+X),K=Q.subarray(Z,Q.length-X),V=G.l,Y=(G.r||0)&7;if($){if(Y)K[0]=G.r>>3;var N=oz[$-1],F=N>>13,B=N&8191,D=(1<<j)-1,z=G.p||new J_(32768),H=G.h||new J_(D+1),W=Math.ceil(j/3),M=2*W,E=function(r0){return(_[r0]^_[r0+1]<<W^_[r0+2]<<M)&D},L=new H7(25000),x=new J_(288),I=new J_(32),J=0,k=0,O=G.i||0,T=0,y=G.w||0,A=0;for(;O+2<q;++O){var P=E(O),f=O&32767,u=H[P];if(z[f]=u,H[P]=f,y<=O){var c=q-O;if((J>7000||T>24576)&&(c>423||!V)){Y=SX(_,K,0,L,x,I,k,T,A,O-A,Y),T=J=k=0,A=O;for(var r=0;r<286;++r)x[r]=0;for(var r=0;r<30;++r)I[r]=0}var e=2,m=0,$0=B,W0=f-u&32767;if(c>2&&P==E(O-W0)){var X0=Math.min(F,c)-1,Z0=Math.min(32767,O),q0=Math.min(258,c);while(W0<=Z0&&--$0&&f!=u){if(_[O+e]==_[O+e-W0]){var D0=0;for(;D0<q0&&_[O+D0]==_[O+D0-W0];++D0);if(D0>e){if(e=D0,m=W0,D0>X0)break;var h=Math.min(W0,D0-2),j0=0;for(var r=0;r<h;++r){var Y0=O-W0+r&32767,L0=z[Y0],s=Y0-L0&32767;if(s>j0)j0=s,u=Y0}}}f=u,u=z[f],W0+=f-u&32767}}if(m){L[T++]=268435456|U7[e]<<18|fX[m];var Q0=U7[e]&31,O0=fX[m]&31;k+=k2[Q0]+T2[O0],++x[257+Q0],++I[O0],y=O+e,++J}else L[T++]=_[O],++x[_[O]]}}for(O=Math.max(O,y);O<q;++O)L[T++]=_[O],++x[_[O]];if(Y=SX(_,K,V,L,x,I,k,T,A,O-A,Y),!V)G.r=Y&7|K[Y/8|0]<<3,Y-=7,G.h=H,G.p=z,G.i=O,G.w=y}else{for(var O=G.w||0;O<q+V;O+=65535){var x0=O+65535;if(x0>=q)K[Y/8|0]=V,x0=q;Y=mX(K,Y+1,_.subarray(O,x0))}G.i=q}return e5(Q,0,Z+W7(Y)+X)};var hX=function(){var _=1,$=0;return{p:function(j){var Z=_,X=$,G=j.length|0;for(var q=0;q!=G;){var Q=Math.min(q+2655,G);for(;q<Q;++q)X+=Z+=j[q];Z=(Z&65535)+15*(Z>>16),X=(X&65535)+15*(X>>16)}_=Z,$=X},d:function(){return _%=65521,$%=65521,(_&255)<<24|(_&65280)<<8|($&255)<<8|$>>8}}},sz=function(_,$,j,Z,X){if(!X){if(X={l:1},$.dictionary){var G=$.dictionary.subarray(-32768),q=new s1(G.length+_.length);q.set(G),q.set(_,G.length),_=q,X.w=G.length}}return iz(_,$.level==null?6:$.level,$.mem==null?X.l?Math.ceil(Math.max(8,Math.min(13,Math.log(_.length)))*1.5):20:12+$.mem,j,Z,X)};var lX=function(_,$,j){for(;j;++$)_[$]=j,j>>>=8};var az=function(_,$){var j=$.level,Z=j==0?0:j<6?1:j==9?3:2;if(_[0]=120,_[1]=Z<<6|($.dictionary&&32),_[1]|=31-(_[0]<<8|_[1])%31,$.dictionary){var X=hX();X.p($.dictionary),lX(_,2,X.d())}},tz=function(_,$){if((_[0]&15)!=8||_[0]>>4>7||(_[0]<<8|_[1])%31)H_(6,"invalid zlib data");if((_[1]>>5&1)==+!$)H_(6,"invalid zlib data: "+(_[1]&32?"need":"unexpected")+" dictionary");return(_[1]>>3&4)+2};var B7=function(){function _($,j){if(typeof $=="function")j=$,$={};this.ondata=j;var Z=$&&$.dictionary&&$.dictionary.subarray(-32768);if(this.s={i:0,b:Z?Z.length:0},this.o=new s1(32768),this.p=new s1(0),Z)this.o.set(Z)}return _.prototype.e=function($){if(!this.ondata)H_(5);if(this.d)H_(4);if(!this.p.length)this.p=$;else if($.length){var j=new s1(this.p.length+$.length);j.set(this.p),j.set($,this.p.length),this.p=j}},_.prototype.c=function($){this.s.i=+(this.d=$||!1);var j=this.s.b,Z=dz(this.p,this.s,this.o);this.ondata(e5(Z,j,this.s.b),this.d),this.o=e5(Z,this.s.b-32768),this.s.b=this.o.length,this.p=e5(this.p,this.s.p/8|0),this.s.p&=7},_.prototype.push=function($,j){this.e($),this.c(j)},_}();function pX(_,$){if(!$)$={};var j=hX();j.p(_);var Z=sz(_,$,$.dictionary?6:2,4);return az(Z,$),lX(Z,Z.length-4,j.d()),Z}var rX=function(){function _($,j){B7.call(this,$,j),this.v=$&&$.dictionary?2:1}return _.prototype.push=function($,j){if(B7.prototype.e.call(this,$),this.v){if(this.p.length<6&&!j)return;this.p=this.p.subarray(tz(this.p,this.v-1)),this.v=0}if(j){if(this.p.length<4)H_(6,"invalid zlib data");this.p=this.p.subarray(0,-4)}B7.prototype.c.call(this,j)},_}();var ez=typeof TextDecoder<"u"&&new TextDecoder,_H=0;try{ez.decode(cX,{stream:!0}),_H=1}catch(_){}var $H=[58,50,42,34,26,18,10,2,60,52,44,36,28,20,12,4,62,54,46,38,30,22,14,6,64,56,48,40,32,24,16,8,57,49,41,33,25,17,9,1,59,51,43,35,27,19,11,3,61,53,45,37,29,21,13,5,63,55,47,39,31,23,15,7],jH=[40,8,48,16,56,24,64,32,39,7,47,15,55,23,63,31,38,6,46,14,54,22,62,30,37,5,45,13,53,21,61,29,36,4,44,12,52,20,60,28,35,3,43,11,51,19,59,27,34,2,42,10,50,18,58,26,33,1,41,9,49,17,57,25],ZH=[32,1,2,3,4,5,4,5,6,7,8,9,8,9,10,11,12,13,12,13,14,15,16,17,16,17,18,19,20,21,20,21,22,23,24,25,24,25,26,27,28,29,28,29,30,31,32,1],XH=[16,7,20,21,29,12,28,17,1,15,23,26,5,18,31,10,2,8,24,14,32,27,3,9,19,13,30,6,22,11,4,25],GH=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],qH=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],QH=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1],VH=[[[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],[0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],[4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],[15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13]],[[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10],[3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],[0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],[13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9]],[[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8],[13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],[13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],[1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12]],[[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],[13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],[10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],[3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14]],[[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9],[14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6],[4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14],[11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3]],[[12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11],[10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8],[9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6],[4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13]],[[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1],[13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6],[1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2],[6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12]],[[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7],[1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2],[7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8],[2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11]]],oX=new Uint8Array(256);for(let _=0;_<256;_+=1){let $=0;for(let j=0;j<8;j+=1)$=$<<1|_>>j&1;oX[_]=$}function iX(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function sX(_){let $=0n,j=iX(_);for(let Z of j)$=$<<8n|BigInt(Z);return $}function KH(_,$){let j=new Uint8Array($),Z=BigInt(_);for(let X=$-1;X>=0;X-=1)j[X]=Number(Z&0xffn),Z>>=8n;return j}function V5(_,$,j){let Z=0n;for(let X of $){let G=BigInt(_)>>BigInt(j-X)&1n;Z=Z<<1n|G}return Z}function nX(_,$){let j=28n,Z=(1n<<j)-1n,X=BigInt($%28);return(_<<X|_>>j-X)&Z}function YH(_){let $=V5(sX(_),GH,64),j=$>>28n&0x0fffffffn,Z=$&0x0fffffffn,X=[];for(let G of QH){j=nX(j,G),Z=nX(Z,G);let q=j<<28n|Z;X.push(V5(q,qH,56))}return X}function NH(_){let $=0n;for(let j=0;j<8;j+=1){let Z=BigInt((7-j)*6),X=Number(_>>Z&0x3fn),G=(X&32)>>4|X&1,q=X>>1&15;$=$<<4n|BigInt(VH[j][G][q])}return $}function BH(_,$){let j=V5(_,ZH,32)^BigInt($),Z=NH(j);return V5(Z,XH,32)}function dX(_,$){let j=YH($),Z=V5(sX(_),$H,64),X=Z>>32n&0xffffffffn,G=Z&0xffffffffn;for(let Q of j){let K=G,V=(X^BH(G,Q))&0xffffffffn;X=K,G=V}let q=G<<32n|X;return KH(V5(q,jH,64),8)}function FH(_){let $=String(_??""),j=new Uint8Array(8);for(let Z=0;Z<8;Z+=1){let X=Z<$.length?$.charCodeAt(Z)&255:0;j[Z]=oX[X]}return j}function aX(_,$){let j=iX($);if(j.byteLength!==16)throw Error(`Invalid VNC auth challenge length ${j.byteLength}; expected 16 bytes.`);let Z=FH(_),X=new Uint8Array(16);return X.set(dX(j.slice(0,8),Z),0),X.set(dX(j.slice(8,16),Z),8),X}var u_="vnc";function UH(_){return Number(_)}function DH(_){let $=Array.isArray(_)?_:typeof _==="string"?_.split(",").map((X)=>X.trim()).filter((X)=>X.length>0):[],j=[],Z=new Set;for(let X of $){let G=UH(X);if(!Number.isFinite(G))continue;let q=Number(G);if(!Z.has(q))j.push(q),Z.add(q)}if(j.length>0)return j;return[5,2,1,0,-223]}function N5(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function zH(_,$){let j=N5(_),Z=N5($);if(!j.byteLength)return new Uint8Array(Z);if(!Z.byteLength)return new Uint8Array(j);let X=new Uint8Array(j.byteLength+Z.byteLength);return X.set(j,0),X.set(Z,j.byteLength),X}function HH(_){let $=0;for(let X of _||[])$+=X?.byteLength||0;let j=new Uint8Array($),Z=0;for(let X of _||[]){let G=N5(X);j.set(G,Z),Z+=G.byteLength}return j}function WH(){return(_)=>{let $=N5(_);try{let j=[],Z=new rX((X)=>{j.push(new Uint8Array(X))});if(Z.push($,!0),Z.err)throw Error(Z.msg||"zlib decompression error");return HH(j)}catch(j){try{let Z=pX($);return Z instanceof Uint8Array?Z:new Uint8Array(Z)}catch(Z){let X=Z instanceof Error?Z.message:"unexpected EOF";throw Error(`unexpected EOF: ${X}`)}}}}function OH(_){return new TextEncoder().encode(String(_||""))}function K5(_){return new TextDecoder().decode(N5(_))}function LH(_){let $=/^RFB (\d{3})\.(\d{3})\n$/.exec(String(_||""));if(!$)return null;return{major:parseInt($[1],10),minor:parseInt($[2],10),text:$[0]}}function JH(_){if(!_)return`RFB 003.008
`;if(_.major>3||_.minor>=8)return`RFB 003.008
`;if(_.minor>=7)return`RFB 003.007
`;return`RFB 003.003
`}function tX(_,$=0){return{bitsPerPixel:_.getUint8($),depth:_.getUint8($+1),bigEndian:_.getUint8($+2)===1,trueColor:_.getUint8($+3)===1,redMax:_.getUint16($+4,!1),greenMax:_.getUint16($+6,!1),blueMax:_.getUint16($+8,!1),redShift:_.getUint8($+10),greenShift:_.getUint8($+11),blueShift:_.getUint8($+12)}}function EH(_){let $=new ArrayBuffer(20),j=new DataView($);return j.setUint8(0,0),j.setUint8(1,0),j.setUint8(2,0),j.setUint8(3,0),j.setUint8(4,_.bitsPerPixel),j.setUint8(5,_.depth),j.setUint8(6,_.bigEndian?1:0),j.setUint8(7,_.trueColor?1:0),j.setUint16(8,_.redMax,!1),j.setUint16(10,_.greenMax,!1),j.setUint16(12,_.blueMax,!1),j.setUint8(14,_.redShift),j.setUint8(15,_.greenShift),j.setUint8(16,_.blueShift),new Uint8Array($)}function AH(_){let $=Array.isArray(_)?_:[],j=new ArrayBuffer(4+$.length*4),Z=new DataView(j);Z.setUint8(0,2),Z.setUint8(1,0),Z.setUint16(2,$.length,!1);let X=4;for(let G of $)Z.setInt32(X,Number(G||0),!1),X+=4;return new Uint8Array(j)}function eX(_,$,j,Z=0,X=0){let G=new ArrayBuffer(10),q=new DataView(G);return q.setUint8(0,3),q.setUint8(1,_?1:0),q.setUint16(2,Z,!1),q.setUint16(4,X,!1),q.setUint16(6,Math.max(0,$||0),!1),q.setUint16(8,Math.max(0,j||0),!1),new Uint8Array(G)}function Y5(_,$){let j=Number($||0);if(j<=0)return 0;if(j===255)return _&255;return Math.max(0,Math.min(255,Math.round((_||0)*255/j)))}function $G(_,$,j,Z){if(j===1)return _[$];if(j===2)return Z?(_[$]<<8|_[$+1])>>>0:(_[$]|_[$+1]<<8)>>>0;if(j===3)return Z?(_[$]<<16|_[$+1]<<8|_[$+2])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16)>>>0;if(j===4)return Z?(_[$]<<24>>>0|_[$+1]<<16|_[$+2]<<8|_[$+3])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24>>>0)>>>0;return 0}function MH(_,$,j,Z){let X=Z||B5,G=N5(_),q=Math.max(1,Math.floor(Number(X.bitsPerPixel||0)/8)),Q=Math.max(0,$||0)*Math.max(0,j||0)*q;if(G.byteLength<Q)throw Error(`Incomplete raw rectangle payload: expected ${Q} byte(s), got ${G.byteLength}`);if(!X.trueColor)throw Error("Indexed-colour VNC framebuffers are not supported yet.");let K=new Uint8ClampedArray(Math.max(0,$||0)*Math.max(0,j||0)*4),V=0,Y=0;for(let N=0;N<Math.max(0,$||0)*Math.max(0,j||0);N+=1){let F=$G(G,V,q,X.bigEndian),B=Y5(F>>>X.redShift&X.redMax,X.redMax),D=Y5(F>>>X.greenShift&X.greenMax,X.greenMax),z=Y5(F>>>X.blueShift&X.blueMax,X.blueMax);K[Y]=B,K[Y+1]=D,K[Y+2]=z,K[Y+3]=255,V+=q,Y+=4}return K}function O$(_,$,j){let Z=j||B5,X=Math.max(1,Math.floor(Number(Z.bitsPerPixel||0)/8));if(_.byteLength<$+X)return null;let G=$G(_,$,X,Z.bigEndian);return{rgba:[Y5(G>>>Z.redShift&Z.redMax,Z.redMax),Y5(G>>>Z.greenShift&Z.greenMax,Z.greenMax),Y5(G>>>Z.blueShift&Z.blueMax,Z.blueMax),255],bytesPerPixel:X}}function p$(_,$,j,Z,X,G,q){if(!q)return;for(let Q=0;Q<G;Q+=1)for(let K=0;K<X;K+=1){let V=((Z+Q)*$+(j+K))*4;_[V]=q[0],_[V+1]=q[1],_[V+2]=q[2],_[V+3]=q[3]}}function jG(_,$,j,Z,X,G,q){for(let Q=0;Q<G;Q+=1){let K=Q*X*4,V=((Z+Q)*$+j)*4;_.set(q.subarray(K,K+X*4),V)}}function _G(_,$){let j=$,Z=1;while(!0){if(_.byteLength<j+1)return null;let X=_[j++];if(Z+=X,X!==255)break}return{consumed:j-$,runLength:Z}}function kH(_,$,j,Z,X,G,q){let Q=X||B5,K=Math.max(1,Math.floor(Number(Q.bitsPerPixel||0)/8));if(_.byteLength<$+4)return null;let V=new DataView(_.buffer,_.byteOffset+$,4).getUint32(0,!1);if(_.byteLength<$+4+V)return null;let Y=_.slice($+4,$+4+V),N;try{N=q(Y)}catch{return{consumed:4+V,skipped:!0}}let F=0,B=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Z||0)*4);for(let D=0;D<Z;D+=64){let z=Math.min(64,Z-D);for(let H=0;H<j;H+=64){let W=Math.min(64,j-H);if(N.byteLength<F+1)return null;let M=N[F++],E=M&127,L=(M&128)!==0;if(!L&&E===0){let x=W*z*K;if(N.byteLength<F+x)return null;let I=G(N.slice(F,F+x),W,z,Q);F+=x,jG(B,j,H,D,W,z,I);continue}if(!L&&E===1){let x=O$(N,F,Q);if(!x)return null;F+=x.bytesPerPixel,p$(B,j,H,D,W,z,x.rgba);continue}if(!L&&E>1&&E<=16){let x=[];for(let O=0;O<E;O+=1){let T=O$(N,F,Q);if(!T)return null;F+=T.bytesPerPixel,x.push(T.rgba)}let I=E<=2?1:E<=4?2:4,J=Math.ceil(W*I/8),k=J*z;if(N.byteLength<F+k)return null;for(let O=0;O<z;O+=1){let T=F+O*J;for(let y=0;y<W;y+=1){let A=y*I,P=T+(A>>3),f=8-I-(A&7),u=N[P]>>f&(1<<I)-1;p$(B,j,H+y,D+O,1,1,x[u])}}F+=k;continue}if(L&&E===0){let x=0,I=0;while(I<z){let J=O$(N,F,Q);if(!J)return null;F+=J.bytesPerPixel;let k=_G(N,F);if(!k)return null;F+=k.consumed;for(let O=0;O<k.runLength;O+=1)if(p$(B,j,H+x,D+I,1,1,J.rgba),x+=1,x>=W){if(x=0,I+=1,I>=z)break}}continue}if(L&&E>0){let x=[];for(let k=0;k<E;k+=1){let O=O$(N,F,Q);if(!O)return null;F+=O.bytesPerPixel,x.push(O.rgba)}let I=0,J=0;while(J<z){if(N.byteLength<F+1)return null;let k=N[F++],O=k,T=1;if(k&128){O=k&127;let A=_G(N,F);if(!A)return null;F+=A.consumed,T=A.runLength}let y=x[O];if(!y)return null;for(let A=0;A<T;A+=1)if(p$(B,j,H+I,D+J,1,1,y),I+=1,I>=W){if(I=0,J+=1,J>=z)break}}continue}return{consumed:4+V,skipped:!0}}}return{consumed:4+V,rgba:B,decompressed:N}}function TH(_,$,j,Z,X){let G=X||B5,q=Math.max(1,Math.floor(Number(G.bitsPerPixel||0)/8));if(_.byteLength<$+4+q)return null;let K=new DataView(_.buffer,_.byteOffset+$,_.byteLength-$).getUint32(0,!1),V=4+q+K*(q+8);if(_.byteLength<$+V)return null;let Y=$+4,N=O$(_,Y,G);if(!N)return null;Y+=N.bytesPerPixel;let F=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Z||0)*4);p$(F,j,0,0,j,Z,N.rgba);for(let B=0;B<K;B+=1){let D=O$(_,Y,G);if(!D)return null;if(Y+=D.bytesPerPixel,_.byteLength<Y+8)return null;let z=new DataView(_.buffer,_.byteOffset+Y,8),H=z.getUint16(0,!1),W=z.getUint16(2,!1),M=z.getUint16(4,!1),E=z.getUint16(6,!1);Y+=8,p$(F,j,H,W,M,E,D.rgba)}return{consumed:Y-$,rgba:F}}function yH(_,$,j,Z,X,G){let q=X||B5,Q=Math.max(1,Math.floor(Number(q.bitsPerPixel||0)/8)),K=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Z||0)*4),V=$,Y=[0,0,0,255],N=[255,255,255,255];for(let F=0;F<Z;F+=16){let B=Math.min(16,Z-F);for(let D=0;D<j;D+=16){let z=Math.min(16,j-D);if(_.byteLength<V+1)return null;let H=_[V++];if(H&1){let W=z*B*Q;if(_.byteLength<V+W)return null;let M=G(_.slice(V,V+W),z,B,q);V+=W,jG(K,j,D,F,z,B,M);continue}if(H&2){let W=O$(_,V,q);if(!W)return null;Y=W.rgba,V+=W.bytesPerPixel}if(p$(K,j,D,F,z,B,Y),H&4){let W=O$(_,V,q);if(!W)return null;N=W.rgba,V+=W.bytesPerPixel}if(H&8){if(_.byteLength<V+1)return null;let W=_[V++];for(let M=0;M<W;M+=1){let E=N;if(H&16){let T=O$(_,V,q);if(!T)return null;E=T.rgba,V+=T.bytesPerPixel}if(_.byteLength<V+2)return null;let L=_[V++],x=_[V++],I=L>>4,J=L&15,k=(x>>4)+1,O=(x&15)+1;p$(K,j,D+I,F+J,k,O,E)}}}}return{consumed:V-$,rgba:K}}var B5={bitsPerPixel:32,depth:24,bigEndian:!1,trueColor:!0,redMax:255,greenMax:255,blueMax:255,redShift:16,greenShift:8,blueShift:0};class y2{protocol=u_;state;framebufferWidth;framebufferHeight;serverName;constructor(_={}){this.shared=_.shared!==!1,this.decodeRawRect=typeof _.decodeRawRect==="function"?_.decodeRawRect:MH,this.pipeline=_.pipeline||null,this.encodings=DH(_.encodings||null),this.state="version",this.buffer=new Uint8Array(0),this.serverVersion=null,this.clientVersionText=null,this.framebufferWidth=0,this.framebufferHeight=0,this.serverName="",this.serverPixelFormat=null,this.clientPixelFormat={...B5},this.password=typeof _.password==="string"&&_.password.length>0?_.password:null,this.inflateZrle=typeof _.inflateZrle==="function"?_.inflateZrle:WH()}receive(_){if(_)this.buffer=zH(this.buffer,_);let $=[],j=[],Z=!0;while(Z){if(Z=!1,this.state==="version"){if(this.buffer.byteLength<12)break;let X=this.consume(12),G=K5(X),q=LH(G);if(!q)throw Error(`Unsupported RFB version banner: ${G||"<empty>"}`);this.serverVersion=q,this.clientVersionText=JH(q),j.push(OH(this.clientVersionText)),$.push({type:"protocol-version",protocol:u_,server:q.text.trim(),client:this.clientVersionText.trim()}),this.state=q.minor>=7?"security-types":"security-type-33",Z=!0;continue}if(this.state==="security-types"){if(this.buffer.byteLength<1)break;let X=this.buffer[0];if(X===0){if(this.buffer.byteLength<5)break;let K=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(1,!1);if(this.buffer.byteLength<5+K)break;this.consume(1);let V=K5(this.consume(4+K).slice(4));throw Error(V||"VNC server rejected the connection.")}if(this.buffer.byteLength<1+X)break;this.consume(1);let G=Array.from(this.consume(X));$.push({type:"security-types",protocol:u_,types:G});let q=null;if(G.includes(2)&&this.password!==null)q=2;else if(G.includes(1))q=1;else if(G.includes(2))throw Error("VNC password authentication is required. Enter a password and reconnect.");else throw Error(`Unsupported VNC security types: ${G.join(", ")||"none"}. This viewer currently supports only "None" and password-based VNC auth.`);j.push(Uint8Array.of(q)),$.push({type:"security-selected",protocol:u_,securityType:q,label:q===2?"VNC Authentication":"None"}),this.state=q===2?"security-challenge":"security-result",Z=!0;continue}if(this.state==="security-type-33"){if(this.buffer.byteLength<4)break;let G=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),G===0){if(this.buffer.byteLength<4)break;let Q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength<4+Q)break;let K=K5(this.consume(4+Q).slice(4));throw Error(K||"VNC server rejected the connection.")}if(G===2){if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");$.push({type:"security-selected",protocol:u_,securityType:2,label:"VNC Authentication"}),this.state="security-challenge",Z=!0;continue}if(G!==1)throw Error(`Unsupported VNC security type ${G}. This viewer currently supports only "None" and password-based VNC auth.`);$.push({type:"security-selected",protocol:u_,securityType:1,label:"None"}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",Z=!0;continue}if(this.state==="security-challenge"){if(this.buffer.byteLength<16)break;if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");let X=this.consume(16);j.push(aX(this.password,X)),this.state="security-result",Z=!0;continue}if(this.state==="security-result"){if(this.buffer.byteLength<4)break;let G=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),G!==0){if(this.buffer.byteLength>=4){let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength>=4+q){let Q=K5(this.consume(4+q).slice(4));throw Error(Q||"VNC authentication failed.")}}throw Error("VNC authentication failed.")}$.push({type:"security-result",protocol:u_,ok:!0}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",Z=!0;continue}if(this.state==="server-init"){if(this.buffer.byteLength<24)break;let X=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength),G=X.getUint16(0,!1),q=X.getUint16(2,!1),Q=tX(X,4),K=X.getUint32(20,!1);if(this.buffer.byteLength<24+K)break;let V=this.consume(24),Y=new DataView(V.buffer,V.byteOffset,V.byteLength);if(this.framebufferWidth=Y.getUint16(0,!1),this.framebufferHeight=Y.getUint16(2,!1),this.serverPixelFormat=tX(Y,4),this.serverName=K5(this.consume(K)),this.state="connected",this.pipeline)this.pipeline.initFramebuffer(this.framebufferWidth,this.framebufferHeight);j.push(EH(this.clientPixelFormat)),j.push(AH(this.encodings)),j.push(eX(!1,this.framebufferWidth,this.framebufferHeight)),$.push({type:"display-init",protocol:u_,width:G,height:q,name:this.serverName,pixelFormat:Q}),Z=!0;continue}if(this.state==="connected"){if(this.buffer.byteLength<1)break;let X=this.buffer[0];if(X===0){if(this.buffer.byteLength<4)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint16(2,!1),Q=4,K=[],V=!1,Y=!!this.pipeline;for(let F=0;F<q;F+=1){if(this.buffer.byteLength<Q+12){V=!0;break}let B=new DataView(this.buffer.buffer,this.buffer.byteOffset+Q,12),D=B.getUint16(0,!1),z=B.getUint16(2,!1),H=B.getUint16(4,!1),W=B.getUint16(6,!1),M=B.getInt32(8,!1);if(Q+=12,M===0){let E=Math.max(1,Math.floor(Number(this.clientPixelFormat.bitsPerPixel||0)/8)),L=H*W*E;if(this.buffer.byteLength<Q+L){V=!0;break}let x=this.buffer.slice(Q,Q+L);if(Q+=L,Y)this.pipeline.processRawRect(x,D,z,H,W,this.clientPixelFormat),K.push({kind:"pipeline",x:D,y:z,width:H,height:W});else K.push({kind:"rgba",x:D,y:z,width:H,height:W,rgba:this.decodeRawRect(x,H,W,this.clientPixelFormat)});continue}if(M===2){let E=TH(this.buffer,Q,H,W,this.clientPixelFormat);if(!E){V=!0;break}if(Y){let L=this.buffer.slice(Q,Q+E.consumed);this.pipeline.processRreRect(L,D,z,H,W,this.clientPixelFormat),K.push({kind:"pipeline",x:D,y:z,width:H,height:W})}else K.push({kind:"rgba",x:D,y:z,width:H,height:W,rgba:E.rgba});Q+=E.consumed;continue}if(M===1){if(this.buffer.byteLength<Q+4){V=!0;break}let E=new DataView(this.buffer.buffer,this.buffer.byteOffset+Q,4),L=E.getUint16(0,!1),x=E.getUint16(2,!1);if(Q+=4,Y)this.pipeline.processCopyRect(D,z,H,W,L,x),K.push({kind:"pipeline",x:D,y:z,width:H,height:W});else K.push({kind:"copy",x:D,y:z,width:H,height:W,srcX:L,srcY:x});continue}if(M===16){let E=kH(this.buffer,Q,H,W,this.clientPixelFormat,this.decodeRawRect,this.inflateZrle);if(!E){V=!0;break}if(Q+=E.consumed,E.skipped)continue;if(Y&&E.decompressed)this.pipeline.processZrleTileData(E.decompressed,D,z,H,W,this.clientPixelFormat),K.push({kind:"pipeline",x:D,y:z,width:H,height:W});else K.push({kind:"rgba",x:D,y:z,width:H,height:W,rgba:E.rgba});continue}if(M===5){let E=yH(this.buffer,Q,H,W,this.clientPixelFormat,this.decodeRawRect);if(!E){V=!0;break}if(Y){let L=this.buffer.slice(Q,Q+E.consumed);this.pipeline.processHextileRect(L,D,z,H,W,this.clientPixelFormat),K.push({kind:"pipeline",x:D,y:z,width:H,height:W})}else K.push({kind:"rgba",x:D,y:z,width:H,height:W,rgba:E.rgba});Q+=E.consumed;continue}if(M===-223){if(this.framebufferWidth=H,this.framebufferHeight=W,Y)this.pipeline.initFramebuffer(H,W);K.push({kind:"resize",x:D,y:z,width:H,height:W});continue}throw Error(`Unsupported VNC rectangle encoding ${M}. This viewer currently supports ZRLE, Hextile, RRE, CopyRect, raw rectangles, and DesktopSize only.`)}if(V)break;this.consume(Q);let N={type:"framebuffer-update",protocol:u_,width:this.framebufferWidth,height:this.framebufferHeight,rects:K};if(Y)N.framebuffer=this.pipeline.getFramebuffer();$.push(N),j.push(eX(!0,this.framebufferWidth,this.framebufferHeight)),Z=!0;continue}if(X===2){this.consume(1),$.push({type:"bell",protocol:u_}),Z=!0;continue}if(X===3){if(this.buffer.byteLength<8)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(4,!1);if(this.buffer.byteLength<8+q)break;this.consume(8);let Q=K5(this.consume(q));$.push({type:"clipboard",protocol:u_,text:Q}),Z=!0;continue}throw Error(`Unsupported VNC server message type ${X}.`)}}return{events:$,outgoing:j}}consume(_){let $=this.buffer.slice(0,_);return this.buffer=this.buffer.slice(_),$}}var e_="piclaw://vnc";function GG(_){let $=String(_||"").trim();return $?`${e_}/${encodeURIComponent($)}`:e_}var O7="piclaw:vnc-popout:",wH=60000;function qG(_=globalThis){try{return _?.localStorage??null}catch{return null}}function IH(_=globalThis){let $=sZ(_);if($)return $;return`vnc-popout-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}function QG(_,$=Date.now()){if(!_||typeof _.key!=="function"||!Number.isFinite(_.length))return;let j=[];for(let Z=0;Z<Number(_.length||0);Z+=1){let X=_.key(Z);if(X&&X.startsWith(O7))j.push(X)}for(let Z of j)try{let X=_.getItem(Z);if(!X){_.removeItem(Z);continue}let G=JSON.parse(X),q=Number(G?.expiresAt||0);if(!Number.isFinite(q)||q<=$)_.removeItem(Z)}catch{H2(_,Z)}}function xH(_,$=globalThis,j=Date.now()){let Z=J4(_);if(Z===null)return null;let X=qG($);if(!X)return null;QG(X,j);let G=IH($);try{return X.setItem(`${O7}${G}`,JSON.stringify({password:Z,expiresAt:j+wH})),G}catch{return null}}function CH(_,$=globalThis,j=Date.now()){let Z=String(_||"").trim();if(!Z)return null;let X=qG($);if(!X)return null;QG(X,j);let G=`${O7}${Z}`;try{let q=X.getItem(G);if(X.removeItem(G),!q)return null;let Q=JSON.parse(q),K=Number(Q?.expiresAt||0);if(!Number.isFinite(K)||K<=j)return null;return J4(Q?.password)}catch{try{X.removeItem(G)}catch{}return null}}function PH(_,$,j=globalThis){let Z=String(_||"").trim();if(!Z)return null;let X={pane_path:GG(Z)},G=xH($,j);if(G)X.vnc_secret=G;return X}function fH(_){let $=String(_||"");if($===e_)return null;if(!$.startsWith(`${e_}/`))return null;let j=$.slice(`${e_}/`.length).trim();if(!j)return null;try{return decodeURIComponent(j)}catch{return j}}function t_(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}async function RH(_=null){let $=_?`/vnc/session?target=${encodeURIComponent(_)}`:"/vnc/session",j=await fetch($,{credentials:"same-origin"}),Z=await j.json().catch(()=>({}));if(!j.ok)throw Error(Z?.error||`HTTP ${j.status}`);return Z}function SH(){if(typeof window>"u")return!1;try{let _=new URLSearchParams(window.location.search).get("pane_popout"),$=String(_||"").trim().toLowerCase();return $==="1"||$==="true"||$==="yes"}catch{return!1}}function bH(_,$=null){let j=window.location.protocol==="https:"?"wss:":"ws:",Z=new URL(`${j}//${window.location.host}/vnc/ws`);if(Z.searchParams.set("target",String(_||"")),$)Z.searchParams.set("handoff",String($));return Z.toString()}function gH(_){return String(_||"").trim()||"localhost"}function uH(_,$){let j=gH(_),Z=Math.floor(Number($||0));if(!Number.isFinite(Z)||Z<=0||Z>65535)return null;return`${j.includes(":")&&!j.startsWith("[")?`[${j}]`:j}:${Z}`}function vH(_={}){let $=Boolean(_?.enabled),j=Boolean(_?.directConnectEnabled);if((Array.isArray(_?.targets)?_.targets.length:Number(_?.targetCount||0))>0)return{title:"",body:""};if(j)return{title:"No saved VNC targets yet.",body:"Connect directly above."};if(!$)return{title:"VNC is not configured yet.",body:"No saved targets are available and direct connect is disabled on this host."};return{title:"No saved VNC targets yet.",body:"This host has no configured VNC targets, and direct connect is disabled."}}function ZG(_){if(typeof window>"u")return null;try{let $=new URL(window.location.href),j=$.searchParams.get(_)?.trim()||"";if(!j)return null;return $.searchParams.delete(_),window.history?.replaceState?.(window.history.state,document.title,$.toString()),j}catch{return null}}function XG(_){if(!String(_?.handoffToken||"").trim())return!1;return Number(_?.bytesIn||0)<=0&&!Boolean(_?.hasRenderedFrame)&&Number(_?.reconnectAttempts||0)<=0}function mH(_,$){if(!_||!$||typeof $.appendChild!=="function")return!1;try{$.innerHTML=""}catch{}return $.appendChild(_),!0}class VG{container;root;statusEl;bodyEl;metricsEl;targetSubtitleEl;socketBoundary=null;protocol=null;disposed=!1;targetId=null;targetLabel=null;bytesIn=0;bytesOut=0;canvas=null;canvasCtx=null;displayPlaceholderEl=null;displayInfoEl=null;displayMetaEl=null;displayStageEl=null;chromeEl=null;sessionShellEl=null;resizeObserver=null;displayScale=null;readOnly=!1;pointerButtonMask=0;pointerInputAbortController=null;pressedKeysyms=new Map;passwordInputEl=null;authPassword=null;directHostInputEl=null;directPortInputEl=null;directPasswordInputEl=null;hasRenderedFrame=!1;frameTimeoutId=null;reconnectTimerId=null;reconnectAttempts=0;rawFallbackAttempted=!1;protocolRecovering=!1;pendingHandoffToken=null;constructor(_,$){this.container=_,this.targetId=fH($?.path),this.targetLabel=this.targetId||null,this.pendingHandoffToken=ZG("vnc_handoff");let j=ZG("vnc_secret"),Z=CH(j);if(Z!==null)this.authPassword=Z;this.root=document.createElement("div"),this.root.className="vnc-pane-shell",this.root.style.cssText="display:flex;flex-direction:column;width:100%;height:100%;background:var(--bg-primary);color:var(--text-primary);",this.targetSubtitleEl=null,this.statusEl=document.createElement("div"),this.statusEl.style.cssText="display:none;",this.statusEl.textContent="",this.bodyEl=document.createElement("div"),this.bodyEl.style.cssText="flex:1;min-height:0;display:flex;align-items:stretch;justify-content:stretch;padding:12px;",this.metricsEl=document.createElement("div"),this.metricsEl.style.cssText="display:none;",this.updateMetrics(),this.root.append(this.statusEl,this.bodyEl),this.container.appendChild(this.root),this.load()}setStatus(_){this.statusEl.textContent=String(_||"")}setSessionChromeVisible(_){if(this.chromeEl)this.chromeEl.style.display=_?"grid":"none";if(this.sessionShellEl?.style)this.sessionShellEl.style.gridTemplateRows=_?"auto minmax(0,1fr)":"1fr";if(this.displayStageEl?.style)this.displayStageEl.style.padding=_?"12px":"0",this.displayStageEl.style.border=_?"1px solid var(--border-color)":"none",this.displayStageEl.style.borderRadius=_?"16px":"0",this.displayStageEl.style.background=_?"#0a0a0a":"#000";if(this.displayPlaceholderEl?.style)this.displayPlaceholderEl.style.display=_&&!this.hasRenderedFrame?"block":"none"}clearReconnectTimer(){if(this.reconnectTimerId)clearTimeout(this.reconnectTimerId),this.reconnectTimerId=null}scheduleReconnect(_=null){if(this.disposed||!this.targetId)return;this.clearReconnectTimer();let $=Math.min(8000,1500+this.reconnectAttempts*1000),j=Number.isFinite(_)?Math.max(0,Number(_)):$;this.reconnectAttempts+=1,this.reconnectTimerId=setTimeout(()=>{if(this.reconnectTimerId=null,this.disposed||!this.targetId)return;this.connectSocket()},j)}updateMetrics(){this.metricsEl.textContent=`Transport bytes — in: ${this.bytesIn} / out: ${this.bytesOut}`}applyMetrics(_){this.bytesIn=Number(_?.bytesIn||0),this.bytesOut=Number(_?.bytesOut||0),this.updateMetrics()}openTargetTab(_,$){if(this.targetId=String(_||"").trim()||null,this.targetLabel=String($||_||"").trim()||this.targetId||"VNC",this.targetId)this.renderTargetSession({direct_connect_enabled:!0,target:{id:this.targetId,label:this.targetLabel,read_only:!1,direct_connect:!0}}),this.setStatus("Connecting…"),this.updateDisplayInfo("Connecting…"),this.updateDisplayMeta("connecting");this.load()}requestPanePopout(_,$){this.container.dispatchEvent(new CustomEvent("pane:popout",{bubbles:!0,detail:{path:_,label:$}}))}resetLiveSession(){this.clearReconnectTimer(),this.reconnectAttempts=0,this.protocol=null;try{this.socketBoundary?.dispose?.()}catch{}this.socketBoundary=null;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=null;try{this.pointerInputAbortController?.abort?.()}catch{}if(this.pointerInputAbortController=null,this.canvas=null,this.canvasCtx=null,this.displayPlaceholderEl=null,this.displayInfoEl=null,this.displayMetaEl=null,this.displayStageEl=null,this.displayScale=null,this.passwordInputEl=null,this.directHostInputEl=null,this.directPortInputEl=null,this.directPasswordInputEl=null,this.hasRenderedFrame=!1,this.rawFallbackAttempted=!1,this.protocolRecovering=!1,this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;this.pressedKeysyms.clear()}renderTargets(_){this.resetLiveSession();let $=Array.isArray(_?.targets)?_.targets:[],j=Boolean(_?.direct_connect_enabled),Z=vH({enabled:_?.enabled,directConnectEnabled:j,targets:$});this.bodyEl.innerHTML=`
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
                        ${$.map((G)=>`
                            <div style="text-align:left;padding:14px;border:1px solid var(--border-color);border-radius:10px;background:transparent;color:inherit;display:flex;flex-direction:column;gap:10px;">
                                <div>
                                    <div style="font-weight:600;margin-bottom:6px;">${t_(G.label||G.id)}</div>
                                    <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);">${t_(G.id)}</div>
                                    <div style="margin-top:8px;font-size:12px;color:var(--text-secondary);">${G.readOnly?"Read-only target":"Interactive target"}</div>
                                </div>
                                <div style="display:flex;flex-wrap:wrap;gap:8px;">
                                    <button type="button" data-target-open-tab="${t_(G.id)}" data-target-label="${t_(G.label||G.id)}" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:8px;background:transparent;cursor:pointer;color:inherit;">Connect</button>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                `:`
                    <div style="min-height:0;display:grid;place-items:center;justify-items:center;">
                        <div style="width:min(100%,540px);text-align:center;padding:24px 20px;border:1px dashed var(--border-color);border-radius:10px;background:transparent;font-size:13px;color:var(--text-secondary);line-height:1.5;display:grid;gap:6px;">
                            <div style="font-weight:600;color:var(--text-primary);">${t_(Z.title)}</div>
                            <div>${t_(Z.body)}</div>
                        </div>
                    </div>
                `}
            </div>
        `,this.directHostInputEl=this.bodyEl.querySelector("[data-vnc-direct-host]"),this.directPortInputEl=this.bodyEl.querySelector("[data-vnc-direct-port]"),this.directPasswordInputEl=this.bodyEl.querySelector("[data-vnc-direct-password]");let X=()=>{let G=uH(this.directHostInputEl?.value,this.directPortInputEl?.value);if(!G)return;this.authPassword=J4(this.directPasswordInputEl?this.directPasswordInputEl.value:this.authPassword),this.openTargetTab(G,G)};this.directHostInputEl?.addEventListener("keydown",(G)=>{if(G.key!=="Enter")return;G.preventDefault(),X()}),this.directPortInputEl?.addEventListener("keydown",(G)=>{if(G.key!=="Enter")return;G.preventDefault(),X()}),this.directPasswordInputEl?.addEventListener("keydown",(G)=>{if(G.key!=="Enter")return;G.preventDefault(),X()}),this.bodyEl.querySelector("[data-direct-open-tab]")?.addEventListener("click",()=>X());for(let G of Array.from(this.bodyEl.querySelectorAll("[data-target-open-tab]")))G.addEventListener("click",()=>{let q=G.getAttribute("data-target-open-tab"),Q=G.getAttribute("data-target-label")||q||"VNC";if(!q)return;this.openTargetTab(q,Q)})}renderTargetSession(_){this.resetLiveSession();let $=_?.target||{},j=$?.label||this.targetId||"VNC target",Z=SH();if(this.targetLabel=j,this.readOnly=Boolean($.read_only),this.pointerButtonMask=0,this.hasRenderedFrame=!1,this.pressedKeysyms.clear(),this.bodyEl.innerHTML=Z?`
                <div data-vnc-session-shell style="width:100%;height:100%;min-height:0;display:grid;grid-template-rows:auto minmax(0,1fr);gap:6px;">
                    <div data-vnc-session-chrome style="padding:6px 8px;border:1px solid var(--border-color);border-radius:8px;background:transparent;display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
                        <div data-display-info style="min-width:0;flex:1 1 240px;font-size:12px;color:var(--text-secondary);line-height:1.3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Negotiating remote display…</div>
                        <input type="password" data-vnc-password placeholder="Password" autocomplete="current-password" style="width:150px;max-width:100%;padding:6px 8px;border:1px solid var(--border-color);border-radius:6px;background:transparent;color:inherit;" />
                        <button type="button" data-vnc-reconnect="1" style="padding:6px 10px;border:1px solid var(--border-color);border-radius:6px;background:transparent;cursor:pointer;color:inherit;">Reconnect</button>
                    </div>
                    <div data-display-stage style="min-height:0;height:100%;border:1px solid var(--border-color);border-radius:8px;background:#0a0a0a;display:flex;align-items:center;justify-content:center;padding:4px;position:relative;overflow:hidden;">
                        <canvas data-display-canvas tabindex="0" style="display:none;max-width:100%;max-height:100%;width:auto;height:auto;image-rendering:auto;box-shadow:none;border-radius:2px;background:#000;"></canvas>
                        <div data-display-placeholder style="max-width:520px;text-align:center;color:#d7d7d7;line-height:1.5;">
                            <div style="font-weight:600;font-size:14px;margin-bottom:6px;">${t_(j)}</div>
                            <div style="font-size:12px;color:#b7b7b7;">Waiting for the VNC/RFB handshake and first framebuffer update…</div>
                        </div>
                    </div>
                </div>
            `:`
                <div data-vnc-session-shell style="width:100%;height:100%;min-height:0;display:grid;grid-template-rows:auto minmax(0,1fr);gap:12px;">
                    <div data-vnc-session-chrome style="padding:10px 12px;border:1px solid var(--border-color);border-radius:10px;background:transparent;display:grid;gap:10px;">
                        <div style="display:grid;gap:4px;min-width:0;">
                            <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${t_($.id||this.targetId||"")} · ${$.read_only?"read-only":"interactive"} · websocket → TCP proxy</div>
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
                            <div style="font-weight:700;font-size:18px;margin-bottom:8px;">${t_(j)}</div>
                            <div style="font-size:13px;color:#b7b7b7;">Waiting for the VNC/RFB handshake and first framebuffer update…</div>
                        </div>
                    </div>
                </div>
            `,this.sessionShellEl=this.bodyEl.querySelector("[data-vnc-session-shell]"),this.chromeEl=this.bodyEl.querySelector("[data-vnc-session-chrome]"),this.displayStageEl=this.bodyEl.querySelector("[data-display-stage]"),this.canvas=this.bodyEl.querySelector("[data-display-canvas]"),this.displayPlaceholderEl=this.bodyEl.querySelector("[data-display-placeholder]"),this.displayInfoEl=this.bodyEl.querySelector("[data-display-info]"),this.displayMetaEl=this.bodyEl.querySelector("[data-display-meta]"),this.canvasCtx=this.canvas?.getContext?.("2d",{alpha:!1})||null,this.canvasCtx)this.canvasCtx.imageSmoothingEnabled=!0,this.canvasCtx.imageSmoothingQuality="high";if(this.updateDisplayInfo("Waiting for VNC protocol negotiation…"),this.updateDisplayMeta(),this.setSessionChromeVisible(!0),this.attachDisplayResizeObserver(),this.attachCanvasPointerHandlers(),this.attachCanvasKeyboardHandlers(),this.passwordInputEl=this.bodyEl.querySelector("[data-vnc-password]"),this.passwordInputEl&&this.authPassword!==null)this.passwordInputEl.value=this.authPassword;this.passwordInputEl?.addEventListener("input",()=>{this.authPassword=J4(this.passwordInputEl.value)}),this.passwordInputEl?.addEventListener("keydown",(q)=>{if(q.key!=="Enter")return;q.preventDefault(),this.connectSocket()}),this.bodyEl.querySelector("[data-vnc-reconnect]")?.addEventListener("click",()=>{this.authPassword=J4(this.passwordInputEl?this.passwordInputEl.value:this.authPassword),this.connectSocket()}),this.bodyEl.querySelector("[data-open-target-picker]")?.addEventListener("click",()=>{this.openTargetTab("","VNC")})}updateDisplayInfo(_){if(this.displayInfoEl)this.displayInfoEl.textContent=String(_||"")}updateDisplayMeta(_=""){if(!this.displayMetaEl)return;let $=this.protocol?.state?`state=${this.protocol.state}`:"state=idle",j=this.protocol?.framebufferWidth&&this.protocol?.framebufferHeight?`${this.protocol.framebufferWidth}×${this.protocol.framebufferHeight}`:"pending",Z=this.protocol?.serverName?` · name=${this.protocol.serverName}`:"",X=this.displayScale?` · scale=${Math.round(this.displayScale*100)}%`:"",G=_?` · ${_}`:"";this.displayMetaEl.textContent=`${$} · framebuffer=${j}${Z}${X}${G}`}ensureCanvasSize(_,$,j={}){if(!this.canvas||!this.canvasCtx||!_||!$)return;if(this.canvas.width!==_||this.canvas.height!==$)this.canvas.width=_,this.canvas.height=$;let Z=j?.reveal===!0;if(this.canvas.style.display=Z||this.hasRenderedFrame?"block":"none",this.canvas.style.aspectRatio=`${_} / ${$}`,this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=Z||this.hasRenderedFrame?"none":"";this.updateCanvasScale()}attachDisplayResizeObserver(){if(!this.displayStageEl||typeof ResizeObserver>"u")return;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=new ResizeObserver(()=>{this.updateCanvasScale()}),this.resizeObserver.observe(this.displayStageEl)}updateCanvasScale(){if(!this.canvas||!this.displayStageEl||!this.canvas.width||!this.canvas.height)return;requestAnimationFrame(()=>{if(!this.canvas||!this.displayStageEl)return;let _=this.displayStageEl.getBoundingClientRect?.(),$=Math.max(1,Math.floor(_?.width||this.displayStageEl.clientWidth||0)-32),j=Math.max(1,Math.floor(_?.height||this.displayStageEl.clientHeight||0)-32);if(!$||!j)return;let Z=PX($,j,this.canvas.width,this.canvas.height);this.displayScale=Z,this.canvas.style.width=`${Math.max(1,Math.round(this.canvas.width*Z))}px`,this.canvas.style.height=`${Math.max(1,Math.round(this.canvas.height*Z))}px`,this.updateDisplayMeta()})}getFramebufferPointFromEvent(_){if(!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let $=this.canvas.getBoundingClientRect?.();if(!$||!$.width||!$.height)return null;return Q7(_.clientX,_.clientY,$,this.protocol.framebufferWidth,this.protocol.framebufferHeight)}sendPointerEvent(_,$,j){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(M2(_,$,j))}attachCanvasPointerHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.style.cursor="crosshair",this.canvas.style.touchAction="none";try{this.pointerInputAbortController?.abort?.()}catch{}let _=new AbortController;this.pointerInputAbortController=_;let $=_.signal,j=this.canvas.ownerDocument||document,Z=j.defaultView||window,X=new Map,G=new Map,q=new Map,Q=new Map,K=new Set,V=!1,Y=(J)=>this.getFramebufferPointFromEvent(J)||G.get(J?.pointerId)||{x:0,y:0},N=(J)=>{if(!J||!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let k=this.canvas.getBoundingClientRect?.();if(!k||!k.width||!k.height)return null;return Q7(J.clientX,J.clientY,k,this.protocol.framebufferWidth,this.protocol.framebufferHeight)},F=(J)=>{let k=q.get(J);if(k)Z.clearTimeout(k),q.delete(J)},B=(J)=>{let k=Q.get(J);if(k?.holdTimer)Z.clearTimeout(k.holdTimer);Q.delete(J)},D=()=>{for(let J of Q.keys())B(J)},z=()=>{if(!K.size)V=!1},H=(J,k=80)=>{let O=String(J?.pointerType||"").toLowerCase();if(!wX(O))return;let T=Number(J?.pointerId);if(!Number.isFinite(T))return;F(T);let y=Z.setTimeout(()=>{if(q.delete(T),!X.has(T)&&!this.pointerButtonMask)return;M({pointerId:T,pointerType:O,type:"pointercancel",clientX:J?.clientX,clientY:J?.clientY},{resetAll:!0})},k);q.set(T,y)},W=(J=null)=>{if(!X.size&&!this.pointerButtonMask&&!Q.size)return;for(let O of q.keys())F(O);D(),K.clear(),V=!1;let k=J||G.values().next().value||{x:0,y:0};X.clear(),G.clear(),this.pointerButtonMask=0,this.sendPointerEvent(0,k.x,k.y)},M=(J,k={})=>{if(k.resetAll){let P=Number(J?.pointerId);F(P),W(Y(J));try{this.canvas?.releasePointerCapture?.(P)}catch{}return}let O=Y(J),T=Number(J?.pointerId);F(T),B(T),K.delete(T),z();let y=X.has(T),A=X.get(T)??G7(J);if(!y&&!A&&!this.pointerButtonMask)return;if(X.delete(T),G.delete(T),A)this.pointerButtonMask&=~A;else if(!X.size)this.pointerButtonMask=0;this.sendPointerEvent(this.pointerButtonMask,O.x,O.y);try{this.canvas?.releasePointerCapture?.(T)}catch{}},E=(J)=>{if(V)return;let k=Q.get(J);if(!k||k.dragActivated)return;k.dragActivated=!0,k.holdTimer=null;let O=h$(0);if(!O)return;X.set(J,(X.get(J)??0)|O),this.pointerButtonMask|=O,H({pointerId:J,pointerType:"touch",clientX:k.lastClientX,clientY:k.lastClientY}),this.sendPointerEvent(this.pointerButtonMask,k.lastPoint.x,k.lastPoint.y)},L=(J,k,O={})=>{let T=Q.get(J);if(!T)return!1;let y=k||T.lastPoint||{x:0,y:0},A=Number.isFinite(O.clientX)?Number(O.clientX):T.lastClientX,P=Number.isFinite(O.clientY)?Number(O.clientY):T.lastClientY;if(K.delete(J),O.cancelled||V){if(B(J),z(),X.has(J)||this.pointerButtonMask)W(y);return!0}if(T.dragActivated||X.has(J))return M({pointerId:J,pointerType:"touch",type:"pointerup",clientX:A,clientY:P}),z(),!0;let f=Date.now()-T.startedAt,u=yX({startX:T.startClientX,startY:T.startClientY,clientX:A,clientY:P,elapsedMs:f});if(F(J),B(J),G.delete(J),z(),u){let c=h$(0);this.sendPointerEvent(c,y.x,y.y),this.sendPointerEvent(0,y.x,y.y)}else this.sendPointerEvent(this.pointerButtonMask,y.x,y.y);return!0};this.canvas.addEventListener("contextmenu",(J)=>{J.preventDefault()},{signal:$}),this.canvas.addEventListener("pointermove",(J)=>{let k=this.getFramebufferPointFromEvent(J);if(!k)return;let O=String(J?.pointerType||"").toLowerCase(),T=i_(O);if(G.set(J.pointerId,k),T){let y=Q.get(J.pointerId);if(y){if(y.lastClientX=Number(J?.clientX||0),y.lastClientY=Number(J?.clientY||0),y.lastPoint=k,!y.dragActivated&&q7({startX:y.startClientX,startY:y.startClientY,clientX:y.lastClientX,clientY:y.lastClientY}))B(J.pointerId),Q.set(J.pointerId,{...y,holdTimer:null,dragActivated:!1});if(!y.dragActivated){this.sendPointerEvent(this.pointerButtonMask,k.x,k.y);return}}if(V)return}if(X.has(J.pointerId)&&L4(J)){M(J,{resetAll:!0});return}if(this.pointerButtonMask&&!X.has(J.pointerId)&&L4(J)){W(k);return}if(X.has(J.pointerId))H(J);this.sendPointerEvent(this.pointerButtonMask,k.x,k.y)},{signal:$}),this.canvas.addEventListener("pointerdown",(J)=>{let k=this.getFramebufferPointFromEvent(J);if(!k)return;let O=String(J?.pointerType||"").toLowerCase(),T=i_(O);if(J.preventDefault(),this.canvas?.focus?.(),G.set(J.pointerId,k),T){if(K.add(J.pointerId),K.size>1){let P=[...K];V=!0,W(k);for(let f of P)K.add(f);V=!0;return}B(J.pointerId);let A={startClientX:Number(J?.clientX||0),startClientY:Number(J?.clientY||0),lastClientX:Number(J?.clientX||0),lastClientY:Number(J?.clientY||0),startedAt:Date.now(),lastPoint:k,holdTimer:null,dragActivated:!1};A.holdTimer=Z.setTimeout(()=>{E(J.pointerId)},260),Q.set(J.pointerId,A),this.sendPointerEvent(this.pointerButtonMask,k.x,k.y);return}if(O==="mouse")try{this.canvas?.setPointerCapture?.(J.pointerId)}catch{}let y=G7(J);if(!y)return;X.set(J.pointerId,(X.get(J.pointerId)??0)|y),this.pointerButtonMask|=y,H(J),this.sendPointerEvent(this.pointerButtonMask,k.x,k.y)},{signal:$,passive:!1}),this.canvas.addEventListener("pointerup",(J)=>{if(J.preventDefault(),i_(J?.pointerType)){let k=Y(J);if(L(J.pointerId,k,{clientX:J?.clientX,clientY:J?.clientY}))return}M(J)},{signal:$,passive:!1}),this.canvas.addEventListener("pointercancel",(J)=>{if(J.preventDefault(),i_(J?.pointerType)){let k=Y(J);if(L(J.pointerId,k,{clientX:J?.clientX,clientY:J?.clientY,cancelled:!0}))return}M(J,{resetAll:!0})},{signal:$,passive:!1}),this.canvas.addEventListener("pointerleave",(J)=>{if(Q.has(J.pointerId)&&i_(J?.pointerType)){L(J.pointerId,Y(J),{clientX:J?.clientX,clientY:J?.clientY,cancelled:!0});return}if(!X.has(J.pointerId))return;if(!L4(J))return;M(J,{resetAll:!0})},{signal:$}),this.canvas.addEventListener("pointerout",(J)=>{if(Q.has(J.pointerId)&&i_(J?.pointerType)){L(J.pointerId,Y(J),{clientX:J?.clientX,clientY:J?.clientY,cancelled:!0});return}if(!X.has(J.pointerId))return;if(!L4(J))return;M(J,{resetAll:!0})},{signal:$}),this.canvas.addEventListener("lostpointercapture",(J)=>{M(J,{resetAll:!0})},{signal:$}),Z.addEventListener("pointermove",(J)=>{if(!X.size&&!this.pointerButtonMask||!L4(J))return;if(!X.has(J.pointerId)&&!this.pointerButtonMask)return;M(J,{resetAll:!0})},{signal:$}),Z.addEventListener("pointerup",(J)=>{if(!X.has(J.pointerId)&&!this.pointerButtonMask&&!Q.has(J.pointerId))return;if(J.preventDefault?.(),i_(J?.pointerType)){let k=Y(J);if(L(J.pointerId,k,{clientX:J?.clientX,clientY:J?.clientY}))return}M(J,{resetAll:!X.has(J.pointerId)})},{signal:$,passive:!1}),Z.addEventListener("pointercancel",(J)=>{if(!X.has(J.pointerId)&&!this.pointerButtonMask&&!Q.has(J.pointerId))return;if(J.preventDefault?.(),i_(J?.pointerType)){let k=Y(J);if(L(J.pointerId,k,{clientX:J?.clientX,clientY:J?.clientY,cancelled:!0}))return}M(J,{resetAll:!0})},{signal:$,passive:!1});let x=(J)=>{if(!X.size&&!this.pointerButtonMask&&!Q.size)return;if(!TX(J))return;let k=J?.changedTouches?.[0]||J?.touches?.[0]||null,O=N(k)||G.values().next().value||Q.values().next().value?.lastPoint||{x:0,y:0};if(!X.size&&!this.pointerButtonMask&&Q.size===1){let[T]=Q.entries().next().value||[];if(Number.isFinite(T)){L(T,O,{clientX:k?.clientX,clientY:k?.clientY,cancelled:J?.type==="touchcancel"});return}}W(O)},I=(J,k={})=>{if(!X.size&&!this.pointerButtonMask&&!Q.has(J?.pointerId))return;if(!L4(J))return;if(J?.preventDefault?.(),i_(J?.pointerType)){let O=Y(J);if(L(J.pointerId,O,{clientX:J?.clientX,clientY:J?.clientY,cancelled:k.resetAll===!0}))return}M(J,{resetAll:k.resetAll===!0||!X.has(J?.pointerId)})};this.canvas.addEventListener("touchend",x,{signal:$,passive:!0,capture:!0}),this.canvas.addEventListener("touchcancel",x,{signal:$,passive:!0,capture:!0}),j.addEventListener("touchend",x,{signal:$,passive:!0,capture:!0}),j.addEventListener("touchcancel",x,{signal:$,passive:!0,capture:!0}),Z.addEventListener("touchend",x,{signal:$,passive:!0,capture:!0}),Z.addEventListener("touchcancel",x,{signal:$,passive:!0,capture:!0}),j.addEventListener("pointerup",(J)=>{I(J)},{signal:$,passive:!1,capture:!0}),j.addEventListener("pointercancel",(J)=>{I(J,{resetAll:!0})},{signal:$,passive:!1,capture:!0}),Z.addEventListener("mouseup",()=>{if(!X.size&&!this.pointerButtonMask&&!Q.size)return;W()},{signal:$}),Z.addEventListener("blur",()=>{if(!X.size&&!this.pointerButtonMask&&!Q.size)return;W()},{signal:$}),j.addEventListener("visibilitychange",()=>{if(j.visibilityState==="hidden")W()},{signal:$}),this.canvas.addEventListener("wheel",(J)=>{let k=this.getFramebufferPointFromEvent(J);if(!k)return;J.preventDefault();for(let O of IX(J.deltaY,k.x,k.y,this.pointerButtonMask))this.socketBoundary?.send?.(O)},{signal:$,passive:!1})}sendKeyEvent(_,$){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(xX(_,$))}releasePressedKeys(){for(let _ of this.pressedKeysyms.values())this.sendKeyEvent(!1,_);this.pressedKeysyms.clear()}attachCanvasKeyboardHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.addEventListener("keydown",(_)=>{let $=V7(_);if($==null)return;let j=_.code||_.key,Z=this.pressedKeysyms.get(j);if(CX(Z,$,_.repeat)){_.preventDefault();return}_.preventDefault(),this.pressedKeysyms.set(j,$),this.sendKeyEvent(!0,$)}),this.canvas.addEventListener("keyup",(_)=>{let $=_.code||_.key,j=this.pressedKeysyms.get($)??V7(_);if(j==null)return;_.preventDefault(),this.pressedKeysyms.delete($),this.sendKeyEvent(!1,j)}),this.canvas.addEventListener("blur",()=>{this.releasePressedKeys()})}drawRgbaRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=new ImageData(_.rgba,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}copyCanvasRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=this.canvasCtx.getImageData(_.srcX,_.srcY,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}scheduleRawFallbackTimeout(){if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.rawFallbackAttempted||this.protocolRecovering)return;this.frameTimeoutId=setTimeout(()=>{if(this.hasRenderedFrame||this.rawFallbackAttempted||this.protocolRecovering)return;if(this.protocol&&this.socketBoundary)this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.setStatus("No framebuffer update yet; retrying with RAW encoding."),this.updateDisplayInfo("No framebuffer update yet. Retrying with RAW encoding."),this.updateDisplayMeta("reconnect-encoding-fallback"),this.connectWithEncodings("0")},2200)}applyRemoteDisplayEvent(_){if(!_)return;switch(_.type){case"protocol-version":this.setStatus(`Negotiated ${_.protocol.toUpperCase()} ${_.server} → ${_.client}.`),this.updateDisplayInfo(`Negotiated ${_.server} → ${_.client}.`),this.updateDisplayMeta();return;case"security-types":this.setStatus(`Server offered security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayInfo(`Security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayMeta();return;case"security-selected":this.setStatus(`Using ${_.protocol.toUpperCase()} security type ${_.label}.`),this.updateDisplayInfo(`Security: ${_.label}.`),this.updateDisplayMeta();return;case"security-result":this.setStatus("Security negotiation complete. Waiting for server init…"),this.updateDisplayInfo("Security negotiation complete. Waiting for server init…"),this.updateDisplayMeta();return;case"display-init":this.ensureCanvasSize(_.width,_.height),this.setSessionChromeVisible(!1),this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for first framebuffer update (${_.width}×${_.height}).`),this.updateDisplayInfo(`Connected to ${_.name||this.targetLabel||this.targetId||"remote display"}. Waiting for first framebuffer update…`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"framebuffer-update":if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;let $=!1,j=(_.rects||[]).some((Z)=>Z.kind==="pipeline");if(_.framebuffer&&_.framebuffer.length>0&&_.width>0&&_.height>0&&j){this.ensureCanvasSize(_.width,_.height,{reveal:!0});for(let X of _.rects||[])if(X.kind==="resize")this.ensureCanvasSize(X.width,X.height);let Z=this.canvas?.getContext("2d",{alpha:!1});if(Z){let X=new ImageData(new Uint8ClampedArray(_.framebuffer),_.width,_.height);Z.putImageData(X,0,0),$=!0}}else for(let Z of _.rects||[]){if(Z.kind==="resize"){this.ensureCanvasSize(Z.width,Z.height);continue}if(Z.kind==="copy"){this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.copyCanvasRect(Z),$=!0;continue}if(Z.kind==="rgba")this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.drawRgbaRect(Z),$=!0}if($||this.hasRenderedFrame)this.protocolRecovering=!1,this.setStatus(`Rendering live framebuffer — ${_.width}×${_.height}.`),this.updateDisplayInfo(`Framebuffer update applied (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta();else this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for painted framebuffer data.`),this.updateDisplayInfo(`Framebuffer update received, but no paintable rects yet (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"clipboard":this.setStatus("Remote clipboard updated."),this.updateDisplayInfo(`Clipboard text received (${_.text.length} chars).`),this.updateDisplayMeta();return;case"bell":this.setStatus("Remote display bell received."),this.updateDisplayInfo("Remote display bell received."),this.updateDisplayMeta();return}}async handleSocketMessage(_){if(_?.kind==="control"){let j=_.payload;if(j?.type==="vnc.error"){this.setStatus(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayInfo(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayMeta("proxy-error");return}if(j?.type==="vnc.connected"){let Z=j?.target?.label||this.targetLabel||this.targetId;this.setStatus(`Connected to ${Z}. Waiting for VNC/RFB data…`),this.updateDisplayInfo(`Connected to ${Z}. Waiting for VNC handshake…`),this.updateDisplayMeta();return}if(j?.type==="pong")return;return}let $=this.protocol||(this.protocol=new y2);try{let j=_.data instanceof Blob?await _.data.arrayBuffer():_.data,Z=$.receive(j);for(let X of Z.outgoing||[])this.socketBoundary?.send?.(X);for(let X of Z.events||[])this.applyRemoteDisplayEvent(X)}catch(j){let Z=j?.message||"Unknown error";if(this.setSessionChromeVisible(!0),this.setStatus(`Display protocol error: ${Z}`),this.updateDisplayInfo(`Display protocol error: ${Z}`),this.updateDisplayMeta("protocol-error"),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(!this.rawFallbackAttempted&&!this.protocolRecovering&&/unexpected eof|zlib|decompress|protocol|buffer|undefined|not an object|reading '0'/i.test(Z))this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.connectWithEncodings("0")}}async connectSocket(_=null){if(!this.targetId||this.disposed)return;if(this.clearReconnectTimer(),this.protocolRecovering&&_==null)this.protocolRecovering=!1;try{this.socketBoundary?.dispose?.()}catch{}if(_==null)this.rawFallbackAttempted=!1,this.protocolRecovering=!1;let $=this.pendingHandoffToken||null,j=_==null?null:String(_).trim(),Z=await kX(),X={};if(Z)X.pipeline=Z,X.decodeRawRect=(Q,K,V,Y)=>Z.decodeRawRectToRgba(Q,K,V,Y);let G=J4(this.authPassword);if(G!==null)X.password=G;if(j)X.encodings=j;let q=Boolean(this.canvas&&this.hasRenderedFrame);if(this.protocol=new y2(X),this.hasRenderedFrame=q,this.frameTimeoutId=null,this.canvas)this.canvas.style.display=q?"block":"none";if(this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=q?"none":"";this.socketBoundary=new $7({url:bH(this.targetId,$),binaryType:"arraybuffer",onOpen:()=>{if($&&this.pendingHandoffToken===$)this.pendingHandoffToken=null;this.reconnectAttempts=0,this.setStatus(`Connected to proxy for ${this.targetId}. Waiting for VNC/RFB data…`),this.updateDisplayInfo("WebSocket proxy connected. Waiting for handshake…"),this.updateDisplayMeta(),this.socketBoundary?.sendControl?.({type:"ping"})},onMetrics:(Q)=>{this.applyMetrics(Q)},onMessage:(Q)=>{this.handleSocketMessage(Q)},onClose:()=>{if(this.setSessionChromeVisible(!0),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.disposed)return;if(XG({handoffToken:$,bytesIn:this.bytesIn,hasRenderedFrame:this.hasRenderedFrame,reconnectAttempts:this.reconnectAttempts})){this.pendingHandoffToken=null,this.setStatus("Transferred VNC session was not ready yet. Retrying…"),this.updateDisplayInfo("Transferred VNC session was not ready yet. Retrying without handoff…"),this.updateDisplayMeta("handoff-retrying"),this.scheduleReconnect(150);return}if(this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("Remote display connection lost. Reconnecting…"),this.updateDisplayInfo("Remote display transport closed. Attempting to reconnect…"),this.updateDisplayMeta("reconnecting"),this.scheduleReconnect();return}this.setStatus(this.bytesIn>0?`Proxy closed after receiving ${this.bytesIn} byte(s).`:"Proxy closed."),this.updateDisplayInfo(this.bytesIn>0?"Remote display transport closed after receiving data.":"Remote display transport closed."),this.updateDisplayMeta("closed")},onError:()=>{if(this.setSessionChromeVisible(!0),XG({handoffToken:$,bytesIn:this.bytesIn,hasRenderedFrame:this.hasRenderedFrame,reconnectAttempts:this.reconnectAttempts})){this.pendingHandoffToken=null,this.setStatus("Transferred VNC session was not ready yet. Retrying…"),this.updateDisplayInfo("Transferred VNC session was not ready yet. Retrying without handoff…"),this.updateDisplayMeta("handoff-retrying"),this.scheduleReconnect(150);return}if(this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("WebSocket proxy connection failed. Reconnecting…"),this.updateDisplayInfo("WebSocket proxy connection failed. Attempting to reconnect…"),this.updateDisplayMeta("socket-reconnecting"),this.scheduleReconnect();return}this.setStatus("WebSocket proxy connection failed."),this.updateDisplayInfo("WebSocket proxy connection failed."),this.updateDisplayMeta("socket-error")}}),this.socketBoundary.connect()}connectWithEncodings(_){return this.connectSocket(_)}async load(){this.setStatus("");try{let _=await RH(this.targetId);if(!_?.enabled){this.renderTargets(_),this.setStatus("");return}if(!this.targetId){this.renderTargets(_),this.setStatus("");return}this.renderTargetSession(_),await this.connectSocket()}catch(_){this.resetLiveSession(),this.bodyEl.innerHTML=`
                <div style="max-width:620px;text-align:center;padding:28px;border:1px dashed var(--border-color);border-radius:14px;background:var(--bg-secondary);">
                    <div style="font-size:32px;margin-bottom:10px;">⚠️</div>
                    <div style="font-weight:600;margin-bottom:6px;">Failed to load VNC session</div>
                    <div style="color:var(--text-secondary);font-size:13px;line-height:1.5;">${t_(_?.message||"Unknown error")}</div>
                </div>
            `,this.setStatus(`Session load failed: ${_?.message||"Unknown error"}`)}}beforeDetachFromHost(){this.releasePressedKeys(),this.setStatus("Moving VNC session…"),this.updateDisplayInfo("Moving VNC session to a new window…"),this.updateDisplayMeta("moving")}afterAttachToHost(){this.attachDisplayResizeObserver(),this.updateCanvasScale(),requestAnimationFrame(()=>this.focus())}moveHost(_){if(this.disposed||!this.root)return!1;if(this.releasePressedKeys(),this.container=_,!mH(this.root,_))return!1;return this.afterAttachToHost(),!0}async preparePopoutTransfer(){return PH(this.targetId,this.authPassword)}getContent(){return}isDirty(){return!1}focus(){this.canvas?.focus?.(),this.root?.focus?.()}resize(){this.updateCanvasScale()}dispose(){if(this.disposed)return;this.disposed=!0,this.resetLiveSession(),this.root?.remove?.()}}var L7={id:"vnc-viewer",label:"VNC",icon:"display",capabilities:["preview"],placement:"tabs",canHandle(_){let $=String(_?.path||"");return $===e_||$.startsWith(`${e_}/`)?9000:!1},mount(_,$){return new VG(_,$)}};import{classHighlighter as bG,highlightTree as gG,StreamLanguage as u0,cssLanguage as cH,cppLanguage as hH,goLanguage as lH,htmlLanguage as pH,javascriptLanguage as rH,jsxLanguage as nH,tsxLanguage as dH,typescriptLanguage as oH,jsonLanguage as iH,markdownLanguage as sH,pythonLanguage as aH,rustLanguage as tH,StandardSQL as eH,xmlLanguage as _W,yamlLanguage as $W,dockerFile as jW,powerShell as ZW,ruby as XW,shell as GW,swift as qW,toml as QW,clojure as VW,cmake as KW,coffeeScript as YW,crystal as NW,cypher as BW,d as FW,diff as UW,eiffel as DW,elm as zW,erlang as HW,factor as WW,forth as OW,fortran as LW,gas as JW,gherkin as EW,groovy as AW,haskell as MW,haxe as kW,http as TW,jinja2 as yW,julia as wW,liveScript as IW,lua as xW,mathematica as CW,fSharp as PW,nginx as fW,octave as RW,oz as SW,pascal as bW,perl as gW,properties as uW,protobuf as vW,pug as mW,puppet as cW,r as hW,sas as lW,sass as pW,scheme as rW,smalltalk as nW,solr as dW,sparql as oW,stex as iW,stylus as sW,tcl as aW,textile as tW,turtle as eW,vb as _O,verilog as $O,vhdl as jO,wast as ZO,webIDL as XO,xQuery as GO}from"#editor-vendor/codemirror";var uG=98304;function Q_(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var qO={js:"JavaScript",javascript:"JavaScript",ts:"TypeScript",typescript:"TypeScript",jsx:"JSX",tsx:"TSX",py:"Python",python:"Python",sh:"Shell",shell:"Shell",bash:"Bash",zsh:"Zsh",ps1:"PowerShell",powershell:"PowerShell",md:"Markdown",markdown:"Markdown",yml:"YAML",yaml:"YAML",json:"JSON",html:"HTML",css:"CSS",sql:"SQL",go:"Go",c:"C",cc:"C++",cpp:"C++","c++":"C++",cxx:"C++",h:"C/C++",hh:"C++",hpp:"C++",hxx:"C++",rust:"Rust",rs:"Rust",ruby:"Ruby",swift:"Swift",toml:"TOML",dockerfile:"Dockerfile",asm:"Gas",clj:"Clojure",clojure:"Clojure",cmake:"CMake",coffee:"CoffeeScript",coffeescript:"CoffeeScript",conf:"nginx",cr:"Crystal",crystal:"Crystal",cypher:"Cypher",d:"D",diff:"Diff",eiffel:"Eiffel",elm:"Elm",erl:"Erlang",erlang:"Erlang",f90:"Fortran",f95:"Fortran",factor:"Factor",feature:"Gherkin",forth:"Forth",fortran:"Fortran",fsharp:"ML",gas:"Gas",gherkin:"Gherkin",groovy:"Groovy",haskell:"Haskell",haxe:"Haxe",hs:"Haskell",http:"HTTP",hx:"Haxe",ini:"Properties",jade:"Pug",jinja:"Jinja2",jinja2:"Jinja2",jl:"Julia",julia:"Julia",latex:"LaTeX",livescript:"LiveScript",ls:"LiveScript",lua:"Lua",mathematica:"Mathematica",matlab:"Octave",ml:"ML",nginx:"nginx",ocaml:"ML",octave:"Octave",oz:"Oz",pas:"Pascal",pascal:"Pascal",patch:"Diff",perl:"Perl",pl:"Perl",pm:"Perl",pp:"Puppet",properties:"Properties",proto:"Protobuf",protobuf:"Protobuf",pug:"Pug",puppet:"Puppet",r:"R",rq:"SPARQL",s:"Gas",sas:"SAS",sass:"Sass",scheme:"Scheme",scm:"Scheme",scss:"Sass",smalltalk:"Smalltalk",sml:"ML",sparql:"SPARQL",st:"Smalltalk",styl:"Stylus",stylus:"Stylus",sv:"Verilog",tcl:"Tcl",tex:"LaTeX",textile:"Textile",ttl:"Turtle",turtle:"Turtle",vb:"VB",verilog:"Verilog",vhdl:"VHDL",wasm:"WebAssembly",wast:"WebAssembly",webidl:"WebIDL",wl:"Mathematica",xq:"XQuery",xquery:"XQuery"},QO=u0.define(GW).parser,VO=u0.define(ZW).parser,KO=u0.define(jW).parser,YO=u0.define(XW).parser,NO=u0.define(qW).parser,BO=u0.define(QW).parser,KG=u0.define(VW).parser,FO=u0.define(KW).parser,YG=u0.define(YW).parser,NG=u0.define(NW).parser,UO=u0.define(BW).parser,DO=u0.define(FW).parser,BG=u0.define(UW).parser,zO=u0.define(DW).parser,HO=u0.define(zW).parser,FG=u0.define(HW).parser,WO=u0.define(WW).parser,OO=u0.define(OW).parser,J7=u0.define(LW).parser,E7=u0.define(JW).parser,UG=u0.define(EW).parser,LO=u0.define(AW).parser,DG=u0.define(MW).parser,zG=u0.define(kW).parser,JO=u0.define(TW).parser,HG=u0.define(yW).parser,WG=u0.define(wW).parser,OG=u0.define(IW).parser,EO=u0.define(xW).parser,LG=u0.define(CW).parser,$6=u0.define(PW).parser,AO=u0.define(fW).parser,JG=u0.define(RW).parser,MO=u0.define(SW).parser,EG=u0.define(bW).parser,A7=u0.define(gW).parser,AG=u0.define(uW).parser,MG=u0.define(vW).parser,kG=u0.define(mW).parser,TG=u0.define(cW).parser,kO=u0.define(hW).parser,TO=u0.define(lW).parser,yG=u0.define(pW).parser,wG=u0.define(rW).parser,IG=u0.define(nW).parser,yO=u0.define(dW).parser,xG=u0.define(oW).parser,M7=u0.define(iW).parser,CG=u0.define(sW).parser,wO=u0.define(aW).parser,IO=u0.define(tW).parser,PG=u0.define(eW).parser,xO=u0.define(_O).parser,fG=u0.define($O).parser,CO=u0.define(jO).parser,RG=u0.define(ZO).parser,PO=u0.define(XO).parser,SG=u0.define(GO).parser;function w2(_){let $=String(_||"").trim().toLowerCase();if(!$)return"text";return qO[$]||String(_||"").trim()}function I2(_){switch(String(_||"").trim().toLowerCase()){case"js":case"javascript":return rH.parser;case"ts":case"typescript":return oH.parser;case"jsx":return nH.parser;case"tsx":return dH.parser;case"py":case"python":return aH.parser;case"json":return iH.parser;case"css":return cH.parser;case"html":return pH.parser;case"xml":return _W.parser;case"yaml":case"yml":return $W.parser;case"md":case"markdown":return sH.parser;case"sql":return eH.language.parser;case"go":return lH.parser;case"c":case"cc":case"cpp":case"cxx":case"c++":case"h":case"hh":case"hpp":case"hxx":return hH.parser;case"sh":case"bash":case"shell":case"zsh":return QO;case"ps1":case"powershell":return VO;case"dockerfile":return KO;case"rb":case"ruby":return YO;case"rs":case"rust":return tH.parser;case"swift":return NO;case"toml":return BO;case"asm":return E7;case"clj":return KG;case"clojure":return KG;case"cmake":return FO;case"coffee":return YG;case"coffeescript":return YG;case"cr":return NG;case"crystal":return NG;case"cypher":return UO;case"d":return DO;case"diff":return BG;case"eiffel":return zO;case"elm":return HO;case"erl":return FG;case"erlang":return FG;case"f90":return J7;case"f95":return J7;case"factor":return WO;case"feature":return UG;case"forth":return OO;case"fortran":return J7;case"fsharp":return $6;case"gas":return E7;case"gherkin":return UG;case"groovy":return LO;case"haskell":return DG;case"haxe":return zG;case"hs":return DG;case"http":return JO;case"hx":return zG;case"ini":return AG;case"jade":return kG;case"jinja":return HG;case"jinja2":return HG;case"jl":return WG;case"julia":return WG;case"latex":return M7;case"livescript":return OG;case"ls":return OG;case"lua":return EO;case"mathematica":return LG;case"matlab":return JG;case"ml":return $6;case"mllike":return $6;case"nginx":return AO;case"ocaml":return $6;case"octave":return JG;case"oz":return MO;case"pas":return EG;case"pascal":return EG;case"patch":return BG;case"perl":return A7;case"pl":return A7;case"pm":return A7;case"pp":return TG;case"properties":return AG;case"proto":return MG;case"protobuf":return MG;case"pug":return kG;case"puppet":return TG;case"r":return kO;case"rq":return xG;case"s":return E7;case"sas":return TO;case"sass":return yG;case"scheme":return wG;case"scm":return wG;case"scss":return yG;case"smalltalk":return IG;case"sml":return $6;case"solr":return yO;case"sparql":return xG;case"st":return IG;case"stex":return M7;case"styl":return CG;case"stylus":return CG;case"sv":return fG;case"tcl":return wO;case"tex":return M7;case"textile":return IO;case"ttl":return PG;case"turtle":return PG;case"vb":return xO;case"verilog":return fG;case"vhdl":return CO;case"wasm":return RG;case"wast":return RG;case"webidl":return PO;case"wl":return LG;case"xq":return SG;case"xquery":return SG;default:return null}}function x2(_,$){if(String(_||"").length>uG)return Q_(_);let j=I2($);if(!j)return Q_(_);let Z=[];try{let q=j.parse(_);gG(q,bG,(Q,K,V)=>{if(!V||Q>=K)return;Z.push({from:Q,to:K,cls:V})})}catch{return Q_(_)}if(!Z.length)return Q_(_);Z.sort((q,Q)=>q.from-Q.from||q.to-Q.to);let X=0,G="";for(let q of Z){if(q.from>X)G+=Q_(_.slice(X,q.from));G+=`<span class="${Q_(q.cls)}">${Q_(_.slice(q.from,q.to))}</span>`,X=Math.max(X,q.to)}if(X<_.length)G+=Q_(_.slice(X));return G}function vG(_,$){let j=String(_||"").split(`
`);if(!_)return j;if(String(_||"").length>uG)return j.map((V)=>Q_(V)||"&nbsp;");let Z=I2($);if(!Z)return j.map((V)=>Q_(V));let X=[];try{let V=Z.parse(_);gG(V,bG,(Y,N,F)=>{if(!F||Y>=N)return;X.push({from:Y,to:N,cls:F})})}catch{return j.map((V)=>Q_(V))}if(!X.length)return j.map((V)=>Q_(V));X.sort((V,Y)=>V.from-Y.from||V.to-Y.to);let G=[],q=0;for(let V of j)G.push(q),q+=V.length+1;let Q=[],K=0;for(let V=0;V<j.length;V+=1){let Y=G[V],N=Y+j[V].length,F="",B=Y;while(K<X.length&&X[K].to<=Y)K+=1;for(let D=K;D<X.length;D+=1){let z=X[D];if(z.from>=N)break;let H=Math.max(Y,z.from),W=Math.min(N,z.to);if(H>B)F+=Q_(_.slice(B,H));if(W>H)F+=`<span class="${Q_(z.cls)}">${Q_(_.slice(H,W))}</span>`;B=Math.max(B,W)}if(B<N)F+=Q_(_.slice(B,N));Q.push(F||"&nbsp;")}return Q}function j6(_){let $=(_.match(/\.([^.]+)$/)||[])[1]?.toLowerCase()||"",j={ts:"typescript",tsx:"tsx",js:"javascript",jsx:"jsx",mjs:"javascript",cjs:"javascript",py:"python",rb:"ruby",rs:"rust",go:"go",java:"java",c:"c",h:"c",cc:"cpp",cpp:"cpp",cxx:"cpp",hpp:"cpp",hxx:"cpp",cs:"csharp",swift:"swift",kt:"kotlin",sh:"shell",bash:"bash",zsh:"zsh",fish:"shell",ps1:"powershell",psm1:"powershell",json:"json",yaml:"yaml",yml:"yaml",toml:"toml",xml:"xml",html:"html",htm:"html",css:"css",scss:"sass",sass:"sass",sql:"sql",graphql:"graphql",gql:"graphql",dockerfile:"dockerfile",makefile:"makefile",lua:"lua",perl:"perl",pl:"perl",pm:"perl",r:"r",jl:"julia",hs:"haskell",erl:"erlang",clj:"clojure",scm:"scheme",elm:"elm",ex:"elixir",exs:"elixir",proto:"protobuf",tf:"hcl",diff:"diff",patch:"diff",ini:"properties",conf:"nginx",cfg:"properties",v:"verilog",sv:"verilog",vhd:"vhdl",vhdl:"vhdl",pas:"pascal",f90:"fortran",f95:"fortran",cmake:"cmake",groovy:"groovy",gradle:"groovy",tex:"stex",latex:"stex",bib:"stex",d:"d",nim:"nim",zig:"zig",pug:"pug",jade:"pug",styl:"stylus",coffee:"coffeescript",tcl:"tcl",ml:"mllike",sml:"mllike",fs:"mllike",wasm:"wast",wat:"wast",pp:"puppet",feature:"gherkin",ttl:"turtle",rq:"sparql",xq:"xquery"},Z=_.split("/").pop()?.toLowerCase()||"";if(Z==="dockerfile"||Z.startsWith("dockerfile."))return"dockerfile";if(Z==="makefile"||Z==="gnumakefile")return"cmake";if(Z===".env"||Z.endsWith(".env"))return"properties";if(Z==="cmakelists.txt")return"cmake";if(Z==="vagrantfile"||Z==="rakefile"||Z==="gemfile")return"ruby";return j[$]||""}X6();var b2=/#(\w+)/g,nO=new Set(["strong","em","b","i","u","s","del","ins","sub","sup","mark","small","br","p","ul","ol","li","blockquote","ruby","rt","rp","span","input"]),dO=new Set(["a","abbr","blockquote","br","code","del","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","input","ins","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","small","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),oO=new Set(["class","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),iG={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"]),input:new Set(["type","checked","disabled"])},iO=new Set(["http:","https:","mailto:",""]);function sO(_,$){let j=String(_||"").toLowerCase(),Z=String($||"").toLowerCase();if(!Z||Z.startsWith("on"))return!1;if(Z.startsWith("data-")||Z.startsWith("aria-"))return!0;return(iG[j]||new Set).has(Z)||oO.has(Z)}function P7(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function k4(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Z=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!iO.has(Z.protocol))return null;return Z.href}catch{return null}}function sG(_,$={}){if(!_)return"";if($?.sanitize===!1)return _;let j=new DOMParser().parseFromString(_,"text/html"),Z=[],X=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),G;while(G=X.nextNode())Z.push(G);for(let q of Z){let Q=q.tagName.toLowerCase();if(!dO.has(Q)){let V=q.parentNode;if(!V)continue;while(q.firstChild)V.insertBefore(q.firstChild,q);V.removeChild(q);continue}let K=iG[Q]||new Set;for(let V of Array.from(q.attributes)){let Y=V.name.toLowerCase(),N=V.value;if(Y.startsWith("on")){q.removeAttribute(V.name);continue}if(sO(Q,Y)){if(Y==="href"){let F=k4(N);if(!F)q.removeAttribute(V.name);else if(q.setAttribute(V.name,F),Q==="a"){if(!q.getAttribute("rel"))q.setAttribute("rel","noopener noreferrer");if(/^https?:\/\//i.test(F))q.setAttribute("target","_blank")}}else if(Y==="src"){let F=Q==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(N):N,B=k4(F,{allowDataImage:Q==="img"});if(!B)q.removeAttribute(V.name);else q.setAttribute(V.name,B)}continue}q.removeAttribute(V.name)}}return j.body.innerHTML}function aG(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function G6(_,$=2){if(!_)return _;let j=_;for(let Z=0;Z<$;Z+=1){let X=aG(j);if(X===j)break;j=X}return j}function aO(_){if(!_)return{text:"",frontmatter:null};let $=_.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!$.startsWith(`---
`))return{text:$,frontmatter:null};let j=$.split(`
`),Z=-1;for(let q=1;q<j.length;q+=1)if(/^(---|\.\.\.)\s*$/.test(j[q])){Z=q;break}if(Z<=0)return{text:$,frontmatter:null};let X=j.slice(1,Z).join(`
`);return{text:j.slice(Z+1).join(`
`).replace(/^\n+/,""),frontmatter:X}}function tO(_){let{text:$,frontmatter:j}=aO(_);if(j===null)return $;return["<!--frontmatter-block-start-->","```yaml",j,"```","<!--frontmatter-block-end-->",$].filter(Boolean).join(`

`)}function eO(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],X=[],G=!1,q=[];for(let Q of j){if(!G&&Q.trim().match(/^```mermaid\s*$/i)){G=!0,q=[];continue}if(G&&Q.trim().match(/^```\s*$/)){let K=Z.length;Z.push(q.join(`
`)),X.push(`@@MERMAID_BLOCK_${K}@@`),G=!1,q=[];continue}if(G)q.push(Q);else X.push(Q)}if(G)X.push("```mermaid"),X.push(...q);return{text:X.join(`
`),blocks:Z}}function _L(_){if(!_)return _;return G6(_,5)}function $L(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Z of $)j+=String.fromCharCode(Z);return btoa(j)}function jL(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Z=0;Z<$.length;Z+=1)j[Z]=$.charCodeAt(Z);return new TextDecoder().decode(j)}function ZL(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Z)=>{let X=Number(Z),G=$[X]??"",q=_L(G);return`<div class="mermaid-container" data-mermaid="${$L(q)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function tG(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}function XL(_){if(!_)return _;return _.replace(/<pre><code(?:\s+class="language-([A-Za-z0-9_+-]+)")?>([\s\S]*?)<\/code><\/pre>/g,(j,Z,X)=>{let G=String(Z||"").trim().toLowerCase(),q=G6(X,2),Q=G||"plaintext",K=x2(q,G);return`<pre><code class="hljs language-${P7(Q)}">${K}</code></pre>`}).replace(/<!--frontmatter-block-start-->\s*<pre>/g,'<pre class="frontmatter-block">').replace(/<\/pre>\s*<!--frontmatter-block-end-->/g,"</pre>")}var GL={span:new Set(["title","class","lang","dir"]),input:new Set(["type","checked","disabled"])};function qL(_,$){let j=GL[_];if(!j||!$)return"";let Z=[],X=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,G;while(G=X.exec($)){let q=(G[1]||"").toLowerCase();if(!q||q.startsWith("on")||!j.has(q))continue;let Q=G[2]??G[3]??G[4]??"";Z.push(` ${q}="${P7(Q)}"`)}return Z.join("")}function eG(_){if(!_)return _;return _.replace(/&lt;((?:[^"'<>]|"[^"]*"|'[^']*')*?)(?:&gt;|>)/g,($,j)=>{let Z=j.trim(),X=Z.startsWith("/"),G=X?Z.slice(1).trim():Z,Q=G.endsWith("/")?G.slice(0,-1).trim():G,[K=""]=Q.split(/\s+/,1),V=K.toLowerCase();if(!V||!nO.has(V))return $;if(V==="br")return X?"":"<br>";if(X)return`</${V}>`;let Y=Q.slice(K.length).trim(),N=qL(V,Y);return`<${V}${N}>`})}function _q(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Z)=>`<pre><code>${$(Z)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Z)=>`<code>${$(Z)}</code>`)}function $q(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=(G)=>G.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),X;while(X=j.nextNode()){if(!X.nodeValue)continue;let G=Z(X.nodeValue);if(G!==X.nodeValue)X.nodeValue=G}return $.body.innerHTML}function QL(_){if(!window.katex)return _;let $=(q)=>aG(q).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(q)=>{let Q=[],K=q.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(V)=>{let Y=Q.length;return Q.push(V),`@@CODE_BLOCK_${Y}@@`});return K=K.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(V)=>{let Y=Q.length;return Q.push(V),`@@CODE_INLINE_${Y}@@`}),{html:K,blocks:Q}},Z=(q,Q)=>{if(!Q.length)return q;return q.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(K,V)=>{let Y=Number(V);return Q[Y]??""})},X=j(_),G=X.html;return G=G.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(q,Q,K)=>{try{let V=katex.renderToString($(K.trim()),{displayMode:!0,throwOnError:!1});return`${Q}${V}`}catch(V){let Y=V instanceof Error?V.message:String(V);return`<span class="math-error" title="${P7(Y)}">${q}</span>`}}),Z(G,X.blocks)}function VL(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=[],X;while(X=j.nextNode())Z.push(X);for(let G of Z){let q=G.nodeValue;if(!q)continue;if(b2.lastIndex=0,!b2.test(q))continue;b2.lastIndex=0;let Q=G.parentElement;if(Q&&(Q.closest("a")||Q.closest("code")||Q.closest("pre")))continue;let K=q.split(b2);if(K.length<=1)continue;let V=$.createDocumentFragment();K.forEach((Y,N)=>{if(N%2===1){let F=$.createElement("a");F.setAttribute("href","#"),F.className="hashtag",F.setAttribute("data-hashtag",Y),F.textContent=`#${Y}`,V.appendChild(F)}else V.appendChild($.createTextNode(Y))}),G.parentNode?.replaceChild(V,G)}return $.body.innerHTML}function KL(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],X=!1;for(let G of j){if(!X&&G.trim().match(/^```(?:math|katex|latex)\s*$/i)){X=!0,Z.push("$$");continue}if(X&&G.trim().match(/^```\s*$/)){X=!1,Z.push("$$");continue}Z.push(G)}return Z.join(`
`)}function YL(_){let $=tO(_||""),j=KL($),{text:Z,blocks:X}=eO(j),G=G6(Z,2),Q=tG(G).replace(/</g,"&lt;");return{safeHtml:eG(Q),mermaidBlocks:X}}function V_(_,$,j={}){if(!_)return"";let{safeHtml:Z,mermaidBlocks:X}=YL(_),G=window.marked?marked.parse(Z,{headerIds:!1,mangle:!1}):Z.replace(/\n/g,"<br>");return G=_q(G),G=$q(G),G=XL(G),G=QL(G),G=VL(G),G=ZL(G,X),G=sG(G,j),G}function q6(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=G6($,2),X=tG(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),G=eG(X),q=window.marked?marked.parse(G):G.replace(/\n/g,"<br>");return q=_q(q),q=$q(q),q=sG(q),q}function NL(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,Z,X,G)=>{let q=X.trim().split(/\s+/).map((K)=>{let[V,Y]=K.split(",").map(Number);return{x:V,y:Y}});if(q.length<3)return`<polyline${Z}points="${X}"${G}/>`;let Q=[`M ${q[0].x},${q[0].y}`];for(let K=1;K<q.length-1;K++){let V=q[K-1],Y=q[K],N=q[K+1],F=Y.x-V.x,B=Y.y-V.y,D=N.x-Y.x,z=N.y-Y.y,H=Math.sqrt(F*F+B*B),W=Math.sqrt(D*D+z*z),M=Math.min($,H/2,W/2);if(M<0.5){Q.push(`L ${Y.x},${Y.y}`);continue}let E=Y.x-F/H*M,L=Y.y-B/H*M,x=Y.x+D/W*M,I=Y.y+z/W*M,k=F*z-B*D>0?1:0;Q.push(`L ${E},${L}`),Q.push(`A ${M},${M} 0 0 ${k} ${x},${I}`)}return Q.push(`L ${q[q.length-1].x},${q[q.length-1].y}`),`<path${Z}d="${Q.join(" ")}"${G}/>`})}async function A$(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,X=oG()==="dark"?j["tokyo-night"]:j["github-light"],G=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let q of G)try{let Q=q.dataset.mermaid,K=jL(Q||""),V=G6(K,2),Y=await $(V,{...X,transparent:!0});Y=NL(Y),q.innerHTML=Y,q.removeAttribute("data-mermaid")}catch(Q){console.error("Mermaid render error:",Q);let K=document.createElement("pre");K.className="mermaid-error",K.textContent=`Diagram error: ${Q.message}`,q.innerHTML="",q.appendChild(K),q.removeAttribute("data-mermaid")}}y1();function Fq(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Z=new Date().getTime()-$.getTime(),X=Z/1000,G=86400000;if(Z<G){if(X<60)return"just now";if(X<3600)return`${Math.floor(X/60)}m`;return`${Math.floor(X/3600)}h`}if(Z<5*G){let K=$.toLocaleDateString(void 0,{weekday:"short"}),V=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${K} ${V}`}let q=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),Q=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${q} ${Q}`}function W6(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function t1(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function C4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}function n$(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function eL(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Z=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),X=Z?.[1]||j,G=Z?.[2]||"",q=Z?.[3]||"",Q=String($||"").split("/").slice(0,-1).join("/"),V=X.startsWith("/")?X:`${Q?`${Q}/`:""}${X}`,Y=[];for(let F of V.split("/")){if(!F||F===".")continue;if(F===".."){if(Y.length>0)Y.pop();continue}Y.push(F)}let N=Y.join("/");return`${z6(N)}${G}${q}`}function O6(_){return _?.preview||null}function _J(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Z=j>=0?$.slice(j+1):$,X=Z.lastIndexOf(".");if(X<=0||X===Z.length-1)return"none";return Z.slice(X+1)}function $J(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function jJ(_,$){let j=$?.path||_?.path||"",Z=[];if($?.content_type)Z.push(`<span><strong>type:</strong> ${n$($.content_type)}</span>`);if(typeof $?.size==="number")Z.push(`<span><strong>size:</strong> ${n$(t1($.size))}</span>`);if($?.mtime)Z.push(`<span><strong>modified:</strong> ${n$(C4($.mtime))}</span>`);if(Z.push(`<span><strong>kind:</strong> ${n$($J($))}</span>`),Z.push(`<span><strong>extension:</strong> ${n$(_J(j))}</span>`),j)Z.push(`<span><strong>path:</strong> ${n$(j)}</span>`);if($?.truncated)Z.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Z.join("")}</div>`}function ZJ(_){let $=O6(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=jJ(_,$);if($.kind==="image"){let Z=$.url||($.path?z6($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${n$(Z)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Z=V_($.text||"",null,{rewriteImageSrc:(X)=>eL(X,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Z}</div>`}return`${j}<pre class="workspace-preview-text"><code>${n$($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class U9{container;context;disposed=!1;host;constructor(_,$){this.container=_,this.context=$,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=ZJ(this.context)}getContent(){let _=O6(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=O6(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var D9={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=O6(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new U9(_,$)}},z9={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return O6(_)||_?.path?1:!1},mount(_,$){return new U9(_,$)}};var XJ=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),GJ={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},qJ={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function Dq(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function Uq(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class zq{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",X=Dq(j),G=qJ[X]||"\uD83D\uDCC4",q=GJ[X]||"Office Document",Q=document.createElement("div");Q.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Q.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${G}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${Uq(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${Uq(q)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Q);let K=Q.querySelector("#ov-open-tab");if(K)K.addEventListener("click",()=>{let V=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(V)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class Hq{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",X=`/workspace/raw?path=${encodeURIComponent(j)}`,G=`/office-viewer/?url=${encodeURIComponent(X)}&name=${encodeURIComponent(Z)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var H9={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=Dq(_?.path);if(!$||!XJ.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new zq(_,$);return new Hq(_,$)}};var QJ=/\.(csv|tsv)$/i;function Wq(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class Oq{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"table.csv",X=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",G=document.createElement("div");G.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",G.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${Wq(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${Wq(X)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(G);let q=G.querySelector("#csv-open-tab");if(q)q.addEventListener("click",()=>{let Q=new CustomEvent("data-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class Lq{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/data-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var W9={id:"data-viewer",label:"Data Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!QJ.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new Oq(_,$);return new Lq(_,$)}};var VJ=/\.(html|htm)$/i,KJ=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,YJ=/\.(mp4|m4v|mov|webm|ogv)$/i,NJ=/\.pdf$/i;function Jq(_){if(VJ.test(_))return"html";if(KJ.test(_))return"image";if(YJ.test(_))return"video";if(NJ.test(_))return"pdf";return null}function P4(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class Eq{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"index.html",X=document.createElement("div");X.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",X.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:24px;">
                <div style="text-align:center;">
                    <div style="font-size:48px;margin-bottom:12px;">\uD83C\uDF10</div>
                    <div style="font-size:14px;color:var(--text-primary,#e2e8f0);font-weight:500;margin-bottom:4px;">${P4(Z)}</div>
                    <div style="font-size:12px;color:var(--text-secondary,#94a3b8);">HTML document</div>
                </div>
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${P4(j)}</div>
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
        `,_.appendChild(X);let G=X.querySelector("#html-open-tab");if(G)G.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("html-viewer:open-tab",{bubbles:!0,detail:{path:j}}))});let q=X.querySelector("#html-edit-btn");if(q)q.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("html-viewer:edit-source",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class Aq{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/html-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#fff;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}class Mq{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"image",X=`/workspace/raw?path=${encodeURIComponent(j)}`,G=document.createElement("div");G.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",G.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${P4(X)}" alt="${P4(Z)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${P4(Z)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(G);let q=G.querySelector("#img-open-tab");if(q)q.addEventListener("click",()=>{let Q=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class kq{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}class Tq{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"video.mp4",X=document.createElement("div");X.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",X.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${P4(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(X);let G=X.querySelector("#video-open-tab");if(G)G.addEventListener("click",()=>{let q=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class yq{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}class wq{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document.pdf",X=document.createElement("div");X.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",X.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${P4(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(X);let G=X.querySelector("#pdf-open-tab");if(G)G.addEventListener("click",()=>{let q=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class Iq{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var BJ={html:30,image:48,pdf:52,video:54},O9={id:"web-viewer",label:"Web Viewer",icon:"eye",capabilities:["preview"],placement:"tabs",canHandle(_){let $=_?.path||"",j=Jq($);if(!j)return!1;return BJ[j]??30},mount(_,$){let j=$?.path||"",Z=Jq(j),X=$?.mode==="view";switch(Z){case"html":return X?new Eq(_,$):new Aq(_,$);case"image":return X?new Mq(_,$):new kq(_,$);case"video":return X?new Tq(_,$):new yq(_,$);case"pdf":return X?new wq(_,$):new Iq(_,$);default:return _.textContent="Unsupported file type.",{dispose(){},resize(){},focus(){},setContent(){},getContent(){return null},isDirty(){return!1}}}}};var FJ=/\.(md|mdx|markdown)$/i,UJ=98304,o2=2500;function DJ(_,$){let j=1;for(let Z=0;Z<_.length;Z++)if(_.charCodeAt(Z)===10){if(j+=1,j>$)return j}return j}class xq{container;content="";lang="";disposed=!1;constructor(_,$){this.container=_;let j=$?.path||"";this.lang=j6(j);let Z=$?.preview;if(Z?.content)this.content=Z.content,this.render();else this.loadContent(j)}async loadContent(_){if(this.disposed)return;try{let $=await fetch(`/workspace/raw?path=${encodeURIComponent(_)}`);if(!$.ok){this.container.textContent=`Failed to load: ${$.status}`;return}if(this.content=await $.text(),!this.disposed)this.render()}catch($){if(!this.disposed)this.container.textContent="Error loading file."}}render(){let _=this.lang?w2(this.lang):"Plain text",$=DJ(this.content,o2);if(this.content.length>UJ||$>o2){this.container.innerHTML=`
                <div class="highlight-preview" style="height:100%;display:flex;flex-direction:column;overflow:hidden;background:var(--bg-primary,#1e1e1e);">
                    <div class="hl-toolbar" style="flex:0 0 auto;padding:4px 12px;background:var(--bg-secondary,#252526);border-bottom:1px solid var(--border-color,#333);font-size:11px;color:var(--text-secondary,#888);display:flex;justify-content:space-between;">
                        <span>${this.escapeHtml(_)} · large file mode</span>
                        <span>${$>o2?`${o2}+`:$} lines</span>
                    </div>
                    <div class="hl-code-container" style="flex:1;overflow:auto;font-family:var(--code-font,'JetBrains Mono',monospace);font-size:13px;line-height:1.5;">
                        <pre class="hl-code" style="padding:8px 12px;margin:0;white-space:pre;overflow-x:auto;">${this.escapeHtml(this.content)}</pre>
                    </div>
                </div>
            `;return}let X=(this.lang?!!I2(this.lang):!1)?vG(this.content,this.lang):this.content.split(`
`).map((Q)=>this.escapeHtml(Q)||"&nbsp;"),G=X.map((Q,K)=>`<span class="hl-line-number">${K+1}</span>`).join(`
`),q=X.join(`
`);this.container.innerHTML=`
            <div class="highlight-preview" style="height:100%;display:flex;flex-direction:column;overflow:hidden;background:var(--bg-primary,#1e1e1e);">
                <div class="hl-toolbar" style="flex:0 0 auto;padding:4px 12px;background:var(--bg-secondary,#252526);border-bottom:1px solid var(--border-color,#333);font-size:11px;color:var(--text-secondary,#888);display:flex;justify-content:space-between;">
                    <span>${this.escapeHtml(_)}</span>
                    <span>${X.length} lines</span>
                </div>
                <div class="hl-code-container" style="flex:1;overflow:auto;font-family:var(--code-font,'JetBrains Mono',monospace);font-size:13px;line-height:1.5;">
                    <div style="display:flex;min-height:100%;">
                        <pre class="hl-line-numbers" style="flex:0 0 auto;padding:8px 8px 8px 12px;text-align:right;color:var(--text-tertiary,#555);user-select:none;border-right:1px solid var(--border-color,#333);">${G}</pre>
                        <pre class="hl-code" style="flex:1;padding:8px 12px;margin:0;white-space:pre;overflow-x:auto;">${q}</pre>
                    </div>
                </div>
            </div>
        `}escapeHtml(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}dispose(){this.disposed=!0,this.container.innerHTML=""}resize(){}focus(){}setContent(_){this.content=_,this.render()}getContent(){return this.content}isDirty(){return!1}}var L9={id:"highlight-previewer",label:"Source Preview",icon:"code",capabilities:["preview"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;let $=_?.path||"";if(FJ.test($))return!1;if(j6($))return 10;let Z=_?.preview;if(Z?.kind==="text"&&Z?.content_type!=="text/markdown")return 5;return!1},mount(_,$){return new xq(_,$)}};y1();function zJ(_){let $=_.includes(".")?_.slice(_.lastIndexOf(".")):"",j=_.includes(".")?_.slice(0,_.lastIndexOf(".")):_,Z=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19);return`${j}.${Z}${$}`}function Cq(_){let{path:$,getCurrentMtime:j,anchorParent:Z,anchorBefore:X,onReload:G,onSaveCopy:q,onOverwrite:Q,pollMs:K=3000,ownerDocument:V=document}=_,Y=null,N=null,F=!1,B=!1,D=!1;async function z(){if(B||D||F)return;let L=j();if(!L)return;try{let x=await K9($);if(B||D||!x?.mtime)return;if(x.mtime!==L)F=!0,W(),M()}catch(x){if(typeof console<"u")console.debug("[file-conflict-monitor] mtime poll skipped:",x)}}function H(){if(W(),B)return;Y=setInterval(z,K)}function W(){if(Y)clearInterval(Y),Y=null}function M(){if(N||B)return;let L=V.createElement("div");L.className="editor-conflict-bar",L.innerHTML=`
      <span class="editor-conflict-text">File changed on disk</span>
      <div class="editor-conflict-actions">
        <button class="editor-conflict-btn" data-action="reload" title="Discard and reload from disk">Reload</button>
        <button class="editor-conflict-btn" data-action="save-copy" title="Save current content with a new name">Save copy</button>
        <button class="editor-conflict-btn" data-action="overwrite" title="Overwrite the disk version">Overwrite</button>
        <button class="editor-conflict-btn editor-conflict-dismiss" data-action="dismiss" title="Dismiss">×</button>
      </div>
    `,L.addEventListener("click",(x)=>{let I=x.target.closest("[data-action]");if(!I)return;let J=I.getAttribute("data-action");if(J==="reload")E(),G();else if(J==="save-copy"){let k=zJ($);q(k)}else if(J==="overwrite")E(),Q();else if(J==="dismiss")E()}),N=L,Z.insertBefore(L,X)}function E(){if(N)N.remove(),N=null;F=!1,H()}return{start(){H()},stop(){W()},onSaved(L){F=!1,D=!1,H()},dispose(){if(B=!0,W(),N)N.remove(),N=null}}}var HJ=/\.mindmap\.ya?ml$/i,i2=String(Date.now());function WJ(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Pq(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function J9(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let Z=document.querySelector(`script[src="${$}"]`);if(Z)Z.remove();return new Promise((X,G)=>{let q=document.createElement("script");q.src=_,q.dataset.src=$,q.onload=()=>X(),q.onerror=()=>G(Error(`Failed to load ${_}`)),document.head.appendChild(q)})}function OJ(_){let $=_.split("?")[0],j=document.querySelector(`link[data-href="${$}"]`);if(j&&j.href.endsWith(_))return;document.querySelectorAll(`link[data-href="${$}"], link[href="${$}"]`).forEach((X)=>X.remove());let Z=document.createElement("link");Z.rel="stylesheet",Z.href=_,Z.dataset.href=$,document.head.appendChild(Z)}function LJ(_){let $=document.createElementNS("http://www.w3.org/2000/svg","svg");$.id="mindmap-svg",$.setAttribute("width","100%"),$.setAttribute("height","100%"),$.style.cssText="display:block;position:absolute;inset:0;",_.appendChild($);let j=document.createElement("div");j.id="toolbar",j.className="mindmap-toolbar",j.innerHTML=`
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
    `,_.appendChild(j);let Z=document.createElement("div");Z.id="context-menu",Z.className="context-menu hidden",Z.innerHTML=`
        <button data-action="cut">Cut</button>
        <button data-action="copy">Copy</button>
        <button data-action="paste">Paste</button>
        <hr/>
        <button data-action="add-child">Add child</button>
        <button data-action="add-sibling">Add sibling</button>
        <hr/>
        <button data-action="delete">Delete</button>
    `,_.appendChild(Z)}class fq{container;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"mindmap",X=document.createElement("div");X.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",X.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83E\uDDE0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${WJ(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Mindmap Editor</div>
                <button id="mm-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">Edit in Tab</button>
            </div>`,_.appendChild(X),X.querySelector("#mm-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("mindmap:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class Rq{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;mindmapEl=null;pendingContent=null;lastContent="";currentMtime=null;conflictMonitor=null;themeListener=()=>{window.__mindmapEditor?.setTheme?.(Pq())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{let j=await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json();if(j?.mtime)this.currentMtime=j.mtime;return j?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;if(this.lastContent=$,OJ("/static/css/mindmap.css?v="+i2),await Promise.all([J9("/static/js/vendor/d3-mindmap.min.js?v="+i2),J9("/static/js/vendor/js-yaml.min.js?v="+i2)]),this.disposed)return;this.mindmapEl=document.createElement("div"),this.mindmapEl.id="mindmap-container",this.mindmapEl.tabIndex=-1,this.mindmapEl.style.cssText="width:100%;height:100%;overflow:hidden;position:relative;outline:none;",this.container.appendChild(this.mindmapEl),LJ(this.mindmapEl);let j=Pq(),Z=this.filePath.replace(/\/[^/]+$/,"")||"/";try{if(await J9("/static/js/vendor/mindmap-editor.js?v="+i2),this.disposed)return;let X=window.__mindmapEditor;if(!X)throw Error("__mindmapEditor not found");if(X.mount({content:$,isDark:j,onEdit:(G)=>{this.lastContent=G,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(G)},resolveImagePath:(G)=>{if(G.startsWith("data:")||G.startsWith("http"))return G;return`/workspace/raw?path=${encodeURIComponent(Z+"/"+G)}`}}),this.pendingContent!==null)X.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener),this.initConflictMonitor()}catch(X){if(console.error("[mindmap] Failed to load mindmap renderer:",X),this.mindmapEl)this.mindmapEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load mindmap editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);let j=await $.json().catch(()=>({}));this.currentMtime=j?.mtime||this.currentMtime,this.conflictMonitor?.onSaved(this.currentMtime),this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[mindmap] Save failed:",$)}}initConflictMonitor(){if(this.conflictMonitor?.dispose(),!this.filePath)return;this.conflictMonitor=Cq({path:this.filePath,getCurrentMtime:()=>this.currentMtime,anchorParent:this.container,anchorBefore:this.mindmapEl||this.container.firstElementChild,onReload:async()=>{try{let $=await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json();if(this.disposed)return;this.currentMtime=$?.mtime||null;let j=$?.text||"";this.lastContent=j;let Z=window.__mindmapEditor;if(Z?.update)Z.update(j);this.dirty=!1,this.dirtyCallback?.(!1),this.conflictMonitor?.onSaved(this.currentMtime)}catch(_){console.error("[mindmap] Reload failed:",_)}},onSaveCopy:async(_)=>{try{await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,content:this.lastContent})})}catch($){console.error("[mindmap] Save copy failed:",$)}},onOverwrite:()=>this.saveToWorkspace(this.lastContent)}),this.conflictMonitor.start()}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__mindmapEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.mindmapEl?.focus()}resize(){window.dispatchEvent(new Event("resize"))}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,this.conflictMonitor?.dispose(),window.removeEventListener("piclaw-theme-change",this.themeListener),window.__mindmapEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var E9={id:"mindmap-editor",label:"Mindmap Editor",icon:"mindmap",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!HJ.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new fq(_,$);return new Rq(_,$)}};class Sq{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch(Z){console.warn("[tab-store] Change listener failed:",Z)}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Z)=>Z!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Z=this.tabs.get(_);if(!Z)return;if(this.tabs.delete(_),Z.id=$,Z.path=$,Z.label=j||$.split("/").pop()||$,this.tabs.set($,Z),this.mruOrder=this.mruOrder.map((X)=>X===_?$:X),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var e0=new Sq;var W5=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};M0();function bq(){let[_,$]=C(null),[j,Z]=C({text:"",totalLines:0}),[X,G]=C(""),[q,Q]=C({text:"",totalLines:0}),[K,V]=C(null),[Y,N]=C(null),[F,B]=C(null),D=g(null),z=g(0),H=g(!1),W=g(""),M=g(""),E=g(!1),L=g(0),x=g(null),I=g(null),J=g(null),k=g(null),O=g(!1),T=g(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Z,agentPlan:X,setAgentPlan:G,agentThought:q,setAgentThought:Q,pendingRequest:K,setPendingRequest:V,currentTurnId:Y,setCurrentTurnId:N,steerQueuedTurnId:F,setSteerQueuedTurnId:B,lastAgentEventRef:D,lastSilenceNoticeRef:z,isAgentRunningRef:H,draftBufferRef:W,thoughtBufferRef:M,previewResyncPendingRef:E,previewResyncGenerationRef:L,pendingRequestRef:x,stalledPostIdRef:I,currentTurnIdRef:J,steerQueuedTurnIdRef:k,thoughtExpandedRef:O,draftExpandedRef:T}}M0();var JJ=0.1,cq=4,hq=4,gq=160,uq=1600,vq=200,mq=1600;function M$(){if(typeof window>"u")return 0;return Number(window.innerWidth)||0}function lq(_=M$()){return _>0?Math.floor(_*JJ):0}function L6(_,$=M$(),j=0){let Z=lq($)+cq+(j>0?hq+Math.max(0,j):0),X=$>0?Math.floor($-Z):uq;return Math.min(Math.max(Number(_)||0,gq),Math.max(gq,Math.min(uq,X)))}function J6(_,$=M$(),j=0){let Z=lq($)+hq+(j>0?cq+Math.max(0,j):0),X=$>0?Math.floor($-Z):mq;return Math.min(Math.max(Number(_)||0,vq),Math.max(vq,Math.min(mq,X)))}function pq({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Z}){let X=g((Y)=>{Y.preventDefault();let N=_.current;if(!N)return;let F=Y.clientX,B=$.current||280,D=Y.currentTarget;D.classList.add("dragging"),N.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let z=F,H=(M)=>{z=M.clientX;let E=L6(B+(M.clientX-F),M$(),j?.current||0);N.style.setProperty("--sidebar-width",`${E}px`),$.current=E},W=()=>{let M=L6(B+(z-F),M$(),j?.current||0);$.current=M,D.classList.remove("dragging"),N.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",B1("sidebarWidth",String(Math.round(M))),document.removeEventListener("mousemove",H),document.removeEventListener("mouseup",W)};document.addEventListener("mousemove",H),document.addEventListener("mouseup",W)}).current,G=g((Y)=>{Y.preventDefault();let N=_.current;if(!N)return;let F=Y.touches[0];if(!F)return;let B=F.clientX,D=$.current||280,z=Y.currentTarget;z.classList.add("dragging"),N.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let H=(M)=>{let E=M.touches[0];if(!E)return;M.preventDefault();let L=L6(D+(E.clientX-B),M$(),j?.current||0);N.style.setProperty("--sidebar-width",`${L}px`),$.current=L},W=()=>{z.classList.remove("dragging"),N.classList.remove("sidebar-resizing"),document.body.style.userSelect="",B1("sidebarWidth",String(Math.round($.current||D))),document.removeEventListener("touchmove",H),document.removeEventListener("touchend",W),document.removeEventListener("touchcancel",W)};document.addEventListener("touchmove",H,{passive:!1}),document.addEventListener("touchend",W),document.addEventListener("touchcancel",W)}).current,q=g((Y)=>{Y.preventDefault();let N=_.current;if(!N)return;let F=Y.clientX,B=j.current||$.current||280,D=Y.currentTarget;D.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let z=F,H=(M)=>{z=M.clientX;let E=J6(B+(M.clientX-F),M$(),$?.current||0);N.style.setProperty("--editor-width",`${E}px`),j.current=E},W=()=>{let M=J6(B+(z-F),M$(),$?.current||0);j.current=M,D.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",B1("editorWidth",String(Math.round(M))),document.removeEventListener("mousemove",H),document.removeEventListener("mouseup",W)};document.addEventListener("mousemove",H),document.addEventListener("mouseup",W)}).current,Q=g((Y)=>{Y.preventDefault();let N=_.current;if(!N)return;let F=Y.touches[0];if(!F)return;let B=F.clientX,D=j.current||$.current||280,z=Y.currentTarget;z.classList.add("dragging"),document.body.style.userSelect="none";let H=(M)=>{let E=M.touches[0];if(!E)return;M.preventDefault();let L=J6(D+(E.clientX-B),M$(),$?.current||0);N.style.setProperty("--editor-width",`${L}px`),j.current=L},W=()=>{z.classList.remove("dragging"),document.body.style.userSelect="",B1("editorWidth",String(Math.round(j.current||D))),document.removeEventListener("touchmove",H),document.removeEventListener("touchend",W),document.removeEventListener("touchcancel",W)};document.addEventListener("touchmove",H,{passive:!1}),document.addEventListener("touchend",W),document.addEventListener("touchcancel",W)}).current,K=g((Y)=>{Y.preventDefault();let N=_.current;if(!N)return;let F=Y.clientY,B=Z?.current||200,D=Y.currentTarget;D.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let z=F,H=(M)=>{z=M.clientY;let E=Math.min(Math.max(B-(M.clientY-F),100),window.innerHeight*0.5);if(N.style.setProperty("--dock-height",`${E}px`),Z)Z.current=E;window.dispatchEvent(new CustomEvent("dock-resize"))},W=()=>{let M=Math.min(Math.max(B-(z-F),100),window.innerHeight*0.5);if(Z)Z.current=M;D.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",B1("dockHeight",String(Math.round(M))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",H),document.removeEventListener("mouseup",W)};document.addEventListener("mousemove",H),document.addEventListener("mouseup",W)}).current,V=g((Y)=>{Y.preventDefault();let N=_.current;if(!N)return;let F=Y.touches[0];if(!F)return;let B=F.clientY,D=Z?.current||200,z=Y.currentTarget;z.classList.add("dragging"),document.body.style.userSelect="none";let H=(M)=>{let E=M.touches[0];if(!E)return;M.preventDefault();let L=Math.min(Math.max(D-(E.clientY-B),100),window.innerHeight*0.5);if(N.style.setProperty("--dock-height",`${L}px`),Z)Z.current=L;window.dispatchEvent(new CustomEvent("dock-resize"))},W=()=>{z.classList.remove("dragging"),document.body.style.userSelect="",B1("dockHeight",String(Math.round(Z?.current||D))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",H),document.removeEventListener("touchend",W),document.removeEventListener("touchcancel",W)};document.addEventListener("touchmove",H,{passive:!1}),document.addEventListener("touchend",W),document.addEventListener("touchcancel",W)}).current;return{handleSplitterMouseDown:X,handleSplitterTouchStart:G,handleEditorSplitterMouseDown:q,handleEditorSplitterTouchStart:Q,handleDockSplitterMouseDown:K,handleDockSplitterTouchStart:V}}M0();function A9(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Z=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,X=j[_]??window[Z],G=Number(X);return Number.isFinite(G)?G:$}catch{return $}}var rq=A9("warning",30000),nq=A9("finalize",120000),dq=A9("refresh",30000),oq=30000;function iq(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function E6(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function sq(_=30000){let[,$]=C(0);b(()=>{let j=setInterval(()=>$((Z)=>Z+1),_);return()=>clearInterval(j)},[_])}function aq(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Z,X)=>Z+Math.max(1,Math.ceil(X.length/$)),0)}function s2(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function EJ(_){if(!_||typeof _!=="object")return null;let $=_.retry_at??_.retryAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function d$(_){if(!_||typeof _!=="object")return null;let $=_.last_event_at??_.lastEventAt??_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function k$(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function a2(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.tool_name??_.toolName;if(typeof j==="string"&&j.trim())return j.trim();let Z=_.status;if(typeof Z==="string"&&Z.trim())return Z.trim();return k$(_)?"Compacting context":"Working..."}function tq(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Z=Math.floor($/60)%60,X=Math.floor($/3600);if(X>0)return`${X}:${String(Z).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Z}:${String(j).padStart(2,"0")}`}function A6(_,$=Date.now()){let j=s2(_);if(j===null)return null;return tq(Math.max(0,$-j))}function eq(_,$=Date.now()){let j=EJ(_);if(j===null)return null;let Z=j-$;if(Z<=0)return"retrying now";return`retry in ${tq(Z)}`}M0();function DV(_={}){_$(_)}function zV(){let[_,$]=C(!1);if(b(()=>{let X=(q)=>{let Q=O5(q?.detail?.section);if(Q)try{window.__piclawSettingsRequestedSection=Q}catch(K){}$(!0)};window.addEventListener("piclaw:open-settings",X);let G=t2();if(G.open){if(G.section)try{window.__piclawSettingsRequestedSection=G.section}catch(q){}$(!0)}return()=>window.removeEventListener("piclaw:open-settings",X)},[]),!_)return null;let[j,Z]=C(null);if(b(()=>{Promise.resolve().then(() => (UV(),FV)).then((X)=>{Z(()=>X.SettingsDialogContent)})},[]),!j)return U`
            <div class="settings-dialog-backdrop" onClick=${()=>$(!1)}>
                <div class="settings-dialog settings-dialog-loading-shell" data-testid="settings-dialog">
                    <div class="settings-loading-shell-body">
                        <span class="settings-spinner"></span>
                        <span>Loading settings…</span>
                    </div>
                </div>
            </div>
        `;return U`
        <div class="settings-dialog-backdrop" onClick=${(X)=>{if(X.target===X.currentTarget)$(!1)}}>
            <${j} onClose=${()=>$(!1)} />
        </div>
    `}M0();function _A(_,$){return new URL(String(_||""),$).toString()}function HV(){let[_,$]=C(()=>typeof window>"u"?"http://localhost/":window.location.href);b(()=>{if(typeof window>"u")return;let X=()=>$(window.location.href);return window.addEventListener("popstate",X),()=>window.removeEventListener("popstate",X)},[]);let j=R((X,G={})=>{if(typeof window>"u")return;let{replace:q=!1}=G||{},Q=_A(X,window.location.href);if(q)window.history.replaceState(null,"",Q);else window.history.pushState(null,"",Q);$(window.location.href)},[]);return{locationParams:G0(()=>new URL(_).searchParams,[_]),navigate:j}}M0();M0();function WV(_,$,j,Z){try{let X=_?.getItem?.($),G=X?Number(X):Number.NaN;return Number.isFinite(G)&&G>=j?G:Z}catch(X){return Z}}function i9(_,$,j){try{return _?.setItem?.($,String(Math.round(j))),!0}catch(Z){return!1}}var $A=120,jA=100,ZA=98304,s9=60,XA=220,a9="mdPreviewHeight";function GA(){return WV(localStorage,a9,s9,XA)}function U8({getContent:_,subscribeContentChange:$,path:j,onClose:Z}){let[X,G]=C(""),[q,Q]=C(GA),K=g(null),V=g(null),Y=g(null),N=g(null),F=g(null),B=g(_),D=g($);return B.current=_,D.current=$,b(()=>{let W=!1,M=()=>{if(N.current!==null)clearTimeout(N.current),N.current=null},E=()=>{if(F.current!==null)clearTimeout(F.current),F.current=null},L=(k)=>{if(W)return;if(k===Y.current)return;if(Y.current=k,String(k||"").length>ZA){G('<p style="color:var(--text-secondary)">Preview disabled for large documents to keep the editor responsive.</p>');return}try{let O=V_(k,null);G(O)}catch{G('<p style="color:var(--text-secondary)">Preview unavailable</p>')}},x=(k)=>{M(),N.current=setTimeout(()=>{N.current=null,L(k||"")},$A)},I=null,J=()=>{if(W||I)return;let k=typeof D.current==="function"?D.current((O)=>x(O||"")):null;if(typeof k==="function"){I=k;return}F.current=setTimeout(J,jA)};return L(B.current?.()||""),J(),()=>{if(W=!0,M(),E(),typeof I==="function")I()}},[j]),b(()=>{if(K.current&&X)A$(K.current).catch((W)=>{console.debug("[markdown-preview] Mermaid rendering failed for the live preview.",W,{path:j})})},[X]),U`
        <div
            class="md-preview-splitter"
            onMouseDown=${(W)=>{W.preventDefault();let M=W.clientY,E=V.current?.offsetHeight||q,L=V.current?.parentElement,x=L?L.offsetHeight*0.7:500,I=W.currentTarget;I.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let J=(O)=>{let T=Math.min(Math.max(E-(O.clientY-M),s9),x);Q(T)},k=()=>{I.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",i9(localStorage,a9,V.current?.offsetHeight||q),document.removeEventListener("mousemove",J),document.removeEventListener("mouseup",k)};document.addEventListener("mousemove",J),document.addEventListener("mouseup",k)}}
            onTouchStart=${(W)=>{W.preventDefault();let M=W.touches[0];if(!M)return;let E=M.clientY,L=V.current?.offsetHeight||q,x=V.current?.parentElement,I=x?x.offsetHeight*0.7:500,J=W.currentTarget;J.classList.add("dragging"),document.body.style.userSelect="none";let k=(T)=>{let y=T.touches[0];if(!y)return;T.preventDefault();let A=Math.min(Math.max(L-(y.clientY-E),s9),I);Q(A)},O=()=>{J.classList.remove("dragging"),document.body.style.userSelect="",i9(localStorage,a9,V.current?.offsetHeight||q),document.removeEventListener("touchmove",k),document.removeEventListener("touchend",O),document.removeEventListener("touchcancel",O)};document.addEventListener("touchmove",k,{passive:!1}),document.addEventListener("touchend",O),document.addEventListener("touchcancel",O)}}
        ></div>
        <div class="md-preview-panel" ref=${V} style=${{height:q+"px"}}>
            <div class="md-preview-header">
                <span class="md-preview-title">Preview</span>
                <button class="md-preview-close" onClick=${Z} title="Close preview" aria-label="Close preview">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>
            <div
                class="md-preview-body post-content"
                ref=${K}
                dangerouslySetInnerHTML=${{__html:X}}
            />
        </div>
    `}function OV(_){if(_.branchLoaderMode)return"branch-loader";if(_.panePopoutMode)return"pane-popout";return"main"}function qA(_){return _==="error"?"Could not open branch window":"Opening branch…"}function LV(_){return U`
    <div class="app-shell chat-only">
      <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
        <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
          <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
            ${qA(_.status)}
          </h1>
          <p style=${{margin:0,lineHeight:1.6}}>${_.message}</p>
        </div>
      </div>
    </div>
  `}function JV(_){let{appShellRef:$,editorOpen:j,hidePanePopoutControls:Z,panePopoutHasMenuActions:X,panePopoutTitle:G,tabStripTabs:q,tabStripActiveId:Q,handleTabActivate:K,previewTabs:V,diffTabs:Y,handleTabTogglePreview:N,handleTabToggleDiff:F,editorContainerRef:B,getPaneContent:D,subscribePaneContentChange:z,panePopoutPath:H}=_,W=j&&!Z&&X,M=G?`Pane window controls for ${G}`:"Pane window controls";return U`
    <div class=${`app-shell pane-popout${j?" editor-open":""}`} ref=${$}>
      <div class="editor-pane-container pane-popout-container">
        ${W&&U`
          <div class="pane-popout-hover-zone" aria-hidden="true"></div>
          <div class="pane-popout-controls" role="toolbar" aria-label=${M}>
            <details class="pane-popout-controls-menu">
              <summary
                class="pane-popout-controls-trigger pane-popout-controls-icon-button"
                aria-label=${M}
                title=${M}
              >
                <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M3 4.75h10" />
                  <path d="M5 8h8" />
                  <path d="M7 11.25h6" />
                </svg>
              </summary>
              <div class="pane-popout-controls-panel">
                ${q.length>1&&U`
                  <div class="pane-popout-controls-section">
                    <div class="pane-popout-controls-section-title">Open panes</div>
                    <div class="pane-popout-controls-list">
                      ${q.map((E)=>U`
                        <button
                          type="button"
                          class=${`pane-popout-controls-item${E.id===Q?" active":""}`}
                          onClick=${(L)=>{K(E.id),L.currentTarget.closest("details")?.removeAttribute("open")}}
                        >
                          ${E.label}
                        </button>
                      `)}
                    </div>
                  </div>
                `}
                ${Q&&Y.has(Q)&&U`
                  <button
                    type="button"
                    class="pane-popout-controls-action"
                    onClick=${(E)=>{F(Q),E.currentTarget.closest("details")?.removeAttribute("open")}}
                  >
                    Hide diff
                  </button>
                `}
                ${Q&&V.has(Q)&&U`
                  <button
                    type="button"
                    class="pane-popout-controls-action"
                    onClick=${(E)=>{N(Q),E.currentTarget.closest("details")?.removeAttribute("open")}}
                  >
                    Hide preview
                  </button>
                `}
              </div>
            </details>
          </div>
        `}
        ${j?U`<div class="editor-pane-host" ref=${B}></div>`:U`
            <div class="card" style=${{margin:"24px",padding:"24px",maxWidth:"640px"}}>
              <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>Opening pane…</h1>
              <p style=${{margin:0,lineHeight:1.6}}>${H||"No pane path provided."}</p>
            </div>
          `}
        ${j&&Q&&V.has(Q)&&U`
          <${U8}
            getContent=${D}
            subscribeContentChange=${z}
            path=${Q}
            onClose=${()=>N(Q)}
          />
        `}
      </div>
    </div>
  `}M0();M0();function D8(_){return String(_||"").toLowerCase().replace(/^@/,"").replace(/\s+/g," ").trim()}function QA(_,$){let j=D8(_),Z=D8($);if(!Z)return!1;return j.startsWith(Z)||j.includes(Z)}function I6(_){if(!_)return!1;if(_.isComposing)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;return typeof _.key==="string"&&_.key.length===1&&/\S/.test(_.key)}function t9(_,$,j=Date.now(),Z=700){let X=_&&typeof _==="object"?_:{value:"",updatedAt:0},G=String($||"").trim().toLowerCase();if(!G)return{value:"",updatedAt:j};return{value:!X.value||!Number.isFinite(X.updatedAt)||j-X.updatedAt>Z?G:`${X.value}${G}`,updatedAt:j}}function VA(_,$){let j=Math.max(0,Number(_)||0);if(j<=0)return[];let X=((Number.isInteger($)?$:0)%j+j)%j,G=[];for(let q=0;q<j;q+=1)G.push((X+q)%j);return G}function KA(_,$,j=0,Z=(X)=>X){let X=D8($);if(!X)return-1;let G=Array.isArray(_)?_:[],q=VA(G.length,j),Q=G.map((K)=>D8(Z(K)));for(let K of q)if(Q[K].startsWith(X))return K;for(let K of q)if(Q[K].includes(X))return K;return-1}function e9(_,$,j=-1,Z=(X)=>X){let X=Array.isArray(_)?_:[];if(j>=0&&j<X.length){let G=Z(X[j]);if(QA(G,$))return j}return KA(X,$,0,Z)}y1();function z8(_){return String(_||"").trim().toLowerCase()}function _j(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return z8($[1]||"")}function YA(_){let $=new Set,j=[];for(let Z of Array.isArray(_)?_:[]){let X=z8(Z?.agent_name);if(!X||$.has(X))continue;$.add(X),j.push(Z)}return j}function EV(_,$,j={}){let Z=_j($);if(Z==null)return[];let X=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return YA(_).filter((G)=>{if(X&&G?.chat_jid===X)return!1;return z8(G?.agent_name).startsWith(Z)})}function $j(_){let $=z8(_);return $?`@${$} `:""}function AV(_={}){if(_.searchMode)return!1;return Boolean(_.showSessionSwitcherButton)}function MV(_,$,j={}){if(!_||_.isComposing)return!1;if(!AV(j))return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;if(_.key!=="@")return!1;return String($||"")===""}function jj(_,$={}){if(!AV($))return!1;return String(_||"")==="@"}function Zj(_){let $=Xj(_);return $?`@${$}`:""}function Xj(_){return String(_||"").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")}function H8(_,$=""){let j=String(_||""),Z=Xj(j),X=Xj($);if(!j.trim())return{normalized:Z,handle:"",canSubmit:!1,kind:"error",message:"Enter a branch handle."};if(!Z)return{normalized:Z,handle:"",canSubmit:!1,kind:"error",message:"Handle must contain at least one letter or number."};let G=`@${Z}`;if(Z===X)return{normalized:Z,handle:G,canSubmit:!1,kind:"info",message:`Already using ${G}.`};if(Z!==j.trim())return{normalized:Z,handle:G,canSubmit:!0,kind:"info",message:`Will save as ${G}. Letters, numbers, - and _ are allowed; leading @ is optional.`};return{normalized:Z,handle:G,canSubmit:!0,kind:"success",message:`Saving as ${G}.`}}function NA(_,$={}){let j=[],Z=typeof $.currentChatJid==="string"?$.currentChatJid.trim():"",X=typeof _?.chat_jid==="string"?_.chat_jid.trim():"";if(Z&&X===Z)j.push("current");if(_?.archived_at)j.push("archived");else if(_?.is_active)j.push("active");return j}function W8(_,$={}){let j=Zj(_?.agent_name)||String(_?.chat_jid||"").trim(),Z=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():"unknown-chat",X=NA(_,$);return X.length>0?`${j} — ${Z} • ${X.join(" • ")}`:`${j} — ${Z}`}function kV(_,$,j){let Z=Zj(_),X=Zj($),G=String(j||"").trim();if(Z&&X&&Z!==X)return`Restored archived ${Z} as ${X} because ${Z} is already in use.`;if(X)return`Restored ${X}.`;if(Z)return`Restored ${Z}.`;return`Restored ${G||"branch"}.`}function O8({steerQueued:_=!1,pulsing:$=!1}={}){let j=["turn-dot"];if(_)j.push("turn-dot-queued");if($)j.push("turn-dot-pulsing");return j.join(" ")}function Gj({pulsing:_=!1}={}){let $=["compose-inline-status-dot"];if(_)$.push("compose-inline-status-dot-pulsing");return $.join(" ")}function x6(_,{isLastActivity:$=!1,pendingRequest:j=!1}={}){if(j)return"dot";if($)return"none";if(_?.type==="error")return"none";let Z=typeof _?.type==="string"?_.type:"";if(Boolean(typeof _?.tool_name==="string"&&_.tool_name.trim()||_?.tool_args))return"spinner";if(_?.type==="intent")return"dot";if(Z==="tool_call"||Z==="tool_status"||Z==="thinking"||Z==="waiting")return"spinner";return"dot"}function TV(_,$={}){return x6(_,$)==="dot"}M0();var yV=350;function BA(_){return String(_||"Connecting").replace(/[-_]+/g," ").replace(/^./,($)=>$.toUpperCase())}function FA(_,$={}){let j=typeof _==="string"&&_.trim()?_.trim():"connecting";if(j==="connected")return{show:!1,statusClass:"connected",label:"Connected",title:"Connection: Connected"};if(j!=="disconnected"){let Q=BA(j);return{show:!0,statusClass:j,label:Q,title:`Connection: ${Q}`}}let Z=Number.isFinite(Number($?.delayMs))?Math.max(0,Number($.delayMs)):yV,X=Number.isFinite(Number($?.nowMs))?Number($.nowMs):Date.now(),G=Number.isFinite(Number($?.disconnectedAtMs))?Number($.disconnectedAtMs):X;return X-G>=Z?{show:!0,statusClass:"disconnected",label:"Reconnecting",title:"Reconnecting"}:{show:!1,statusClass:"connecting",label:"Connecting",title:"Connecting"}}function qj(_,$={}){let j=Number.isFinite(Number($?.delayMs))?Math.max(0,Number($.delayMs)):yV,[Z,X]=C(null),[G,q]=C(()=>Date.now());return b(()=>{if(_==="disconnected"){let Q=Date.now();X((K)=>K??Q),q(Q);return}X(null),q(Date.now())},[_]),b(()=>{if(_!=="disconnected"||Z===null)return;let Q=j-(Date.now()-Z);if(Q<=0)return;let K=0,V=0,Y=setTimeout(()=>{if(typeof requestAnimationFrame!=="function"){q(Date.now());return}K=requestAnimationFrame(()=>{V=requestAnimationFrame(()=>{q(Date.now())})})},Q);return()=>{if(clearTimeout(Y),K)cancelAnimationFrame(K);if(V)cancelAnimationFrame(V)}},[_,Z,j]),G0(()=>FA(_,{delayMs:j,disconnectedAtMs:Z,nowMs:G}),[_,j,Z,G])}M0();function U_({prefix:_="file",label:$,title:j,onRemove:Z,onClick:X,removeTitle:G="Remove",icon:q="file"}){let Q=`${_}-file-pill`,K=`${_}-file-name`,V=`${_}-file-remove`,Y=q==="message"?U`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:q==="folder"?U`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        </svg>`:U`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
        </svg>`;return U`
    <span class=${Q} title=${j||$} onClick=${X}>
      ${Y}
      <span class=${K}>${$}</span>
      ${Z&&U`
        <button
          class=${V}
          onClick=${(N)=>{N.preventDefault(),N.stopPropagation(),Z()}}
          title=${G}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}async function Qj(_,$,j){if(typeof _!=="function")return!1;try{let Z=await _($);if(!Z)return!1;return j(Z),!0}catch(Z){return!1}}function UA(_={}){let $=_.navigator??(typeof navigator<"u"?navigator:null);if(!$)return!1;let j=String($.userAgent||"");if(/iPad|iPhone/.test(j))return!0;return $.platform==="MacIntel"&&Number($.maxTouchPoints||0)>1}function DA(_={}){let $=_.window??(typeof window<"u"?window:null);if(!$)return null;return $.SpeechRecognition||$.webkitSpeechRecognition||null}function Vj(_={}){let $=_.window??(typeof window<"u"?window:null),j=typeof _.secureContext==="boolean"?_.secureContext:Boolean($?.isSecureContext),Z=b_(_),X=UA(_),G=DA(_);if(!j)return{mode:"unavailable",showButton:!1,canStart:!1,reason:"secure-context-required",title:"Voice input requires HTTPS",detail:"Native browser speech input needs a secure context (HTTPS or localhost).",recognitionCtor:null,ios:X,standalone:Z,secureContext:j};if(X&&Z)return{mode:"fallback",showButton:!0,canStart:!1,reason:"ios-standalone-fallback",title:"Use keyboard dictation",detail:"Speech input is intentionally downgraded in iPhone/iPad standalone web apps because browser-native recognition is not reliable there. Focus the compose box and use the keyboard dictation mic instead.",recognitionCtor:G,ios:X,standalone:Z,secureContext:j};if(!G){if(X)return{mode:"fallback",showButton:!0,canStart:!1,reason:"ios-keyboard-dictation",title:"Use keyboard dictation",detail:"This browser does not expose native in-page speech recognition here. Focus the compose box and use the keyboard dictation mic instead.",recognitionCtor:null,ios:X,standalone:Z,secureContext:j};return{mode:"unavailable",showButton:!1,canStart:!1,reason:"unsupported",title:"Voice input unavailable",detail:"This browser does not expose native speech recognition in this context.",recognitionCtor:null,ios:X,standalone:Z,secureContext:j}}return{mode:"native",showButton:!0,canStart:!0,reason:"supported",title:"Start voice input",detail:X?"Browser-native speech input is available here, but Safari/WebKit reliability may still vary.":"Browser-native speech input is available.",recognitionCtor:G,ios:X,standalone:Z,secureContext:j}}function wV(_,$="",j=""){let Z=String(_||""),X=String($||"").trim(),G=String(j||"").trim(),q=[X,G].filter(Boolean).join(" ").trim();if(!q)return Z;if(!Z)return q;let Q=/[\s\n]$/.test(Z)?"":" ";return`${Z}${Q}${q}`}function IV(_,$=0){let j="",Z="",X=_&&typeof _.length==="number"?_:[];for(let G=Math.max(0,$);G<X.length;G+=1){let q=X[G];if(!q||!q[0])continue;let Q=String(q[0].transcript||"").trim();if(!Q)continue;if(q.isFinal)j=`${j} ${Q}`.trim();else Z=`${Z} ${Q}`.trim()}return{finalText:j,interimText:Z}}function Kj(_,$=null){let j=String(_||"").trim().toLowerCase();switch(j){case"not-allowed":case"service-not-allowed":return $?.ios?"Microphone or speech-recognition permission was denied. On iPhone/iPad, using keyboard dictation may be more reliable.":"Microphone or speech-recognition permission was denied by the browser.";case"no-speech":return"No speech was detected. Try again and speak after the listening indicator appears.";case"audio-capture":return"The browser could not access a microphone for speech recognition.";case"network":return"The browser speech-recognition service reported a network or service failure.";case"aborted":return"Voice input was stopped.";default:return j?`Voice input failed (${j}).`:"Voice input failed."}}var zA=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking/effort level"},{name:"/effort",description:"Show or set thinking/effort level (alias for /thinking)"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (no name to show available themes)"},{name:"/meters",description:"Toggle the top-right CPU/RAM HUD (/meters on|off|toggle)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/session-rotate",description:"Rotate the current persisted session into an archived file"},{name:"/rollup",description:"Merge the current branch chat back into its parent chat"},{name:"/clone",description:"Duplicate the current active branch into a new session"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/dream",description:"Run Dream memory maintenance over recent days (default 7)"},{name:"/tasks",description:"List scheduled tasks"},{name:"/scheduled",description:"List scheduled tasks"},{name:"/pair",description:"Manage remote peer connections (/pair request <url> | /pair list)"},{name:"/ask",description:"Send a prompt to a paired remote instance (/ask <instance_id|fingerprint> <prompt>)"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/exit",description:"Exit the current piclaw process immediately (Supervisor will restart it)"},{name:"/login",description:"Login to an AI model provider (OAuth or API key)"},{name:"/logout",description:"Logout from an AI model provider"},{name:"/settings",description:"Open the settings pane"},{name:"/help",description:"Open keyboard shortcuts help"},{name:"/commands",description:"List available commands"},{name:"/skill:",description:"Run a workspace skill (e.g. /skill:visual-artifact-generator, /skill:web-search)"}],xV="piclaw_compose_history";function HA(_,$,j=!1){if(j)return{shouldApply:!1,nextToken:$,text:""};if(!_||typeof _!=="object")return{shouldApply:!1,nextToken:$,text:""};let Z=typeof _.token==="string"?_.token:"",X=typeof _.text==="string"?_.text:"";if(!Z||Z===$||!X.trim())return{shouldApply:!1,nextToken:$,text:""};return{shouldApply:!0,nextToken:Z,text:X}}function WA(_="web:default"){let $=typeof _==="string"&&_.trim()?_.trim():"web:default";if($==="web:default")return xV;return`${xV}:${encodeURIComponent($)}`}function OA(_,$=null){let j=new Set,Z=[];for(let X of Array.isArray(_)?_:[]){let G=typeof X?.chat_jid==="string"?X.chat_jid.trim():"";if(!G||j.has(G))continue;if(!(typeof X?.agent_name==="string"?X.agent_name.trim():""))continue;j.add(G),Z.push(X)}return Z.sort((X,G)=>{let q=Boolean(X?.archived_at),Q=Boolean(G?.archived_at);if(q!==Q)return q?1:-1;let K=String(X?.agent_name||"").trim(),V=String(G?.agent_name||"").trim(),Y=K.localeCompare(V,void 0,{sensitivity:"base"});if(Y!==0)return Y;let N=String(X?.chat_jid||"").trim(),F=String(G?.chat_jid||"").trim();return N.localeCompare(F,void 0,{sensitivity:"base"})}),Z}function LA(_){return Boolean(_?.is_active&&!_?.archived_at)}function JA(_,$=null){let j=Array.isArray(_)?_:[],Z=typeof $==="string"?$.trim():"";if(Z){let G=j.findIndex((q)=>{if(q?.disabled)return!1;if(q?.type!=="session")return!1;return(typeof q?.chat?.chat_jid==="string"?q.chat.chat_jid.trim():"")===Z});if(G>=0)return G}let X=j.findIndex((G)=>!G?.disabled);return X>=0?X:0}function CV(_,$){let j=typeof $?.command?.message==="string"?$.command.message.trim():"";if(!$?.ui_only||!j)return null;let Z=typeof _==="string"?_.trim():"";if(!Z.startsWith("/"))return null;let X=Z.split(/\s+/).filter(Boolean),G=X[0]?.toLowerCase()||"";if(!(X.length>1)&&(G==="/model"||G==="/thinking"||G==="/effort"))return j;return null}function EA(_,$,j=!1){if(_)return{mode:"queue",className:"icon-btn send-btn queue-mode",title:"Queue follow-up (Enter)",ariaLabel:"Queue follow-up message",disabled:!$};return{mode:"send",className:"icon-btn send-btn",title:"Send (Enter)",ariaLabel:"Send message",disabled:!$}}function PV(_,$,j={}){if(!_||j.searchMode)return!1;if(!(_.key===" "||_.key==="Spacebar"||_.code==="Space"))return!1;if(_.ctrlKey||_.metaKey||_.altKey||_.repeat)return!1;if(!j.speechButtonVisible||j.speechButtonActive)return!1;if(!j.canStartSpeech)return!1;return String($||"").trim().length===0}function AA(_,$){if(!$||!_)return!1;return _.key===" "||_.key==="Spacebar"||_.code==="Space"}function MA(_,$=!1){if(!_)return null;if($)return{mode:"compacting",className:"icon-btn send-btn abort-mode compacting-mode",title:"Compacting context — Stop response",ariaLabel:"Compacting context — Stop response",disabled:!1};return{mode:"abort",className:"icon-btn send-btn abort-mode",title:"Stop response",ariaLabel:"Stop response",disabled:!1}}function kA(_){return _==="abort"||_==="compacting"}function TA(_,$=0){if(_?.visible===!1)return{visible:!1,title:"",indicatorText:null,animateDot:!1,animateSpinner:!1};let j=typeof _?.message==="string"&&_.message.trim()?_.message.trim():null,Z=_?.indicator&&typeof _.indicator==="object"?_.indicator:null;if(!j&&!Z)return{visible:!1,title:"",indicatorText:null,animateDot:!1,animateSpinner:!1};if(Z?.mode==="hidden")return{visible:Boolean(j),title:j||"Working…",indicatorText:null,animateDot:!1,animateSpinner:!1};if(Z?.mode==="custom"&&Array.isArray(Z.frames)&&Z.frames.length>0){let X=Z.frames,G=Number.isFinite($)&&$>=0?Math.floor($)%X.length:0;return{visible:!0,title:j||"Working…",indicatorText:X[G],animateDot:!1,animateSpinner:!1}}return{visible:!0,title:j||"Working…",indicatorText:null,animateDot:!1,animateSpinner:!0}}function yA({usage:_,onCompact:$,compactionLabel:j="",compactionTitle:Z=""}){let X=Math.min(100,Math.max(0,_.percent||0)),G=_.tokens,q=_.contextWindow,Q="Compact context",K=G!=null?`Context: ${C6(G)} / ${C6(q)} tokens (${X.toFixed(0)}%)`:`Context: ${X.toFixed(0)}%`,V=typeof j==="string"?j.trim():"",Y=typeof Z==="string"?Z.trim():"",N=V?`${K} — ${Y||"Smart compaction"} · ${V}`:`${K} — ${"Compact context"}`,F=9,B=2*Math.PI*9,D=X/100*B,z=X>90?"var(--context-red, #ef4444)":X>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return U`
        <button
            class=${`compose-context-pie icon-btn${V?" is-compacting":""}`}
            type="button"
            title=${N}
            aria-label=${V?`Smart compaction ${V}`:"Compact context"}
            onClick=${(H)=>{H.preventDefault(),H.stopPropagation(),$?.()}}
        >
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke=${z}
                    stroke-width="2.5"
                    stroke-dasharray=${`${D} ${B}`}
                    stroke-linecap="round"
                    transform="rotate(-90 12 12)" />
            </svg>
            ${V&&U`<span class="compose-context-pie-timer">${V}</span>`}
        </button>
    `}function C6(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function wA(_){let $=Number(_?.tokens);return Number.isFinite($)&&$>0?$:null}function fV(_,$){let j=Number(_?.contextWindow??_?.context_window),Z=wA($);if(!Number.isFinite(j)||j<=0||!Number.isFinite(Z)||Z<=0)return{blocked:!1,note:"",title:"",tokens:Z??null,contextWindow:Number.isFinite(j)&&j>0?j:null};if(Z<=j)return{blocked:!1,note:"",title:"",tokens:Z,contextWindow:j};return{blocked:!0,note:"Current context won’t fit — compact first",title:`Current context uses ${C6(Z)} tokens, but this model only fits ${C6(j)}. Compact first.`,tokens:Z,contextWindow:j}}function Yj(_){let $=Number(_);if(!Number.isFinite($)||$<=0)return"";return`${C6($)} ctx`}function IA(_,$){let j=typeof _==="string"?_.trim():"",Z=Yj($);if(!j)return Z;if(!Z)return j;return`${j} • ${Z}`}function xA(_,$="",j=""){let Z=typeof _==="string"?_.trim():"";if(Z)return Z;let X=typeof $==="string"?$.trim():"",G=typeof j==="string"?j.trim():"";if(X&&G)return`${X}/${G}`;return G||X||""}function bV(_){let $=Array.isArray(_?.model_options)?_.model_options:null,j=Array.isArray(_?.models)?_.models:[],Z=$&&$.length>0?$:j,X=[];for(let G of Z){if(typeof G==="string"){let N=G.trim();if(!N)continue;let F=N.indexOf("/"),B=F>0?N.slice(0,F).trim():"",D=F>0?N.slice(F+1).trim():N;X.push({label:N,provider:B,id:D,name:null,contextWindow:null,reasoning:!1});continue}if(!G||typeof G!=="object")continue;let q=typeof G.provider==="string"?G.provider.trim():"",Q=typeof G.id==="string"?G.id.trim():"",K=xA(G.label,q,Q);if(!K)continue;let V=typeof G.name==="string"&&G.name.trim()?G.name.trim():null,Y=Number(G.context_window??G.contextWindow);X.push({label:K,provider:q,id:Q,name:V,contextWindow:Number.isFinite(Y)&&Y>0?Y:null,reasoning:Boolean(G.reasoning)})}return X.sort((G,q)=>G.label.localeCompare(q.label,void 0,{sensitivity:"base"})),X}function CA(_){if(!_||typeof _!=="object")return"";return[_.label,_.provider,_.id,_.name,Yj(_.contextWindow)].filter(Boolean).join(" ")}function PA(_,$){let j=typeof _==="string"?_.trim():"";if(j)return{showPicker:!0,label:j,hasAvailableModels:!0};let Z=bV($).length>0;return{showPicker:Z,label:Z?"Select model":"",hasAvailableModels:Z}}function L8(_){return(typeof _==="string"?_.trim():"")||null}function RV(_){return L8(_)?.toLowerCase()??null}function SV(_,$){let j=RV(_),Z=RV($);if(!j||!Z)return!1;return j===Z||j.endsWith(`/${Z}`)||Z.endsWith(`/${j}`)}function fA(_,$){let j=$&&typeof $==="object"?$:{},Z=L8(j.latest_response_model??j.response_model??j.responseModel??j.routed_model??j.routedModel);if(!Z)return null;let X=L8(j.latest_requested_model??j.requested_model??j.requestedModel??j.current??j.model??_);if(X&&SV(Z,X))return null;let G=L8(_??j.current??j.model);if(G&&X&&!SV(G,X))return null;return{label:`Routed: ${Z}`,title:X?`Requested model: ${X} • Routed model: ${Z}`:`Routed model: ${Z}`,requestedModel:X,responseModel:Z}}function RA(_){if(!_)return _;let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!$.includes(" @ ")||!$.includes(`:
`))return _;let j=$.split(`
`),Z=[],X=0,G=!1;while(X<j.length){let Q=j[X].trim();if(!Q){X+=1;continue}if(Q==="Messages:"||Q.startsWith("Channel:")||Q.startsWith("Chat:")){G=!0,X+=1;continue}if(/^[^\n]+\s@\s[^\n]+:$/.test(Q)){G=!0,X+=1;let K=[];while(X<j.length){let V=j[X],Y=V.trim();if(/^[^\n]+\s@\s[^\n]+:$/.test(Y))break;if(Y.startsWith("Channel:")||Y.startsWith("Chat:")||Y==="Messages:")break;K.push(V.startsWith("  ")?V.slice(2):V),X+=1}if(K.length>0)Z.push(K.join(`
`).trim());continue}return _}return G&&Z.length>0?Z.filter(Boolean).join(`

`):_}function gV(_){let $=String(_||"").trim(),j=$.match(/^`([^`]+)`$/);return(j?j[1]:$).trim()}function SA(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let V=0;V<j.length;V+=1)if(j[V].trim()==="Files:"&&j[V+1]&&/^\s*-\s+/.test(j[V+1])){Z=V;break}if(Z===-1)return{content:_,fileRefs:[]};let X=[],G=Z+1;for(;G<j.length;G+=1){let V=j[G];if(/^\s*-\s+/.test(V)){let Y=gV(V.replace(/^\s*-\s+/,"").trim());if(Y)X.push(Y)}else if(!V.trim())break;else break}if(X.length===0)return{content:_,fileRefs:[]};let q=j.slice(0,Z),Q=j.slice(G);return{content:[...q,...Q].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:X}}function bA(_){if(!_)return{content:_,folderRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let V=0;V<j.length;V+=1)if(j[V].trim()==="Folders:"&&j[V+1]&&/^\s*-\s+/.test(j[V+1])){Z=V;break}if(Z===-1)return{content:_,folderRefs:[]};let X=[],G=Z+1;for(;G<j.length;G+=1){let V=j[G];if(/^\s*-\s+/.test(V)){let Y=gV(V.replace(/^\s*-\s+/,"").trim());if(Y)X.push(Y)}else if(!V.trim())break;else break}if(X.length===0)return{content:_,folderRefs:[]};let q=j.slice(0,Z),Q=j.slice(G);return{content:[...q,...Q].join(`
`).replace(/\n{3,}/g,`

`).trim(),folderRefs:X}}function gA(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let V=0;V<j.length;V+=1)if(j[V].trim()==="Referenced messages:"&&j[V+1]&&/^\s*-\s+/.test(j[V+1])){Z=V;break}if(Z===-1)return{content:_,messageRefs:[]};let X=[],G=Z+1;for(;G<j.length;G+=1){let V=j[G];if(/^\s*-\s+/.test(V)){let Y=V.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(Y)X.push(Y[1])}else if(!V.trim())break;else break}if(X.length===0)return{content:_,messageRefs:[]};let q=j.slice(0,Z),Q=j.slice(G);return{content:[...q,...Q].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:X}}function uA(_){if(!_)return{content:_,attachmentRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let V=0;V<j.length;V+=1)if(j[V].trim()==="Attachments:"&&j[V+1]&&/^\s*-\s+/.test(j[V+1])){Z=V;break}if(Z===-1)return{content:_,attachmentRefs:[]};let X=[],G=Z+1;for(;G<j.length;G+=1){let V=j[G];if(/^\s*-\s+/.test(V)){let Y=V.replace(/^\s*-\s+/,"").trim(),N=Y.match(/^attachment:(\d+)(?:\s*\((.+)\))?$/i);if(N)X.push({id:N[1],label:(N[2]||"").trim()||`attachment:${N[1]}`,raw:Y})}else if(!V.trim())break;else break}if(X.length===0)return{content:_,attachmentRefs:[]};let q=j.slice(0,Z),Q=j.slice(G);return{content:[...q,...Q].join(`
`).replace(/\n{3,}/g,`

`).trim(),attachmentRefs:X}}function uV(_){let $=RA(_||""),j=SA($||""),Z=bA(j.content||""),X=gA(Z.content||""),G=uA(X.content||"");return{text:G.content||"",fileRefs:j.fileRefs,folderRefs:Z.folderRefs,messageRefs:X.messageRefs,attachmentRefs:G.attachmentRefs}}function vA(_){let $=uV(_),j=$.attachmentRefs.length>0?`Attachments:
${$.attachmentRefs.map((X)=>`- ${X.raw}`).join(`
`)}`:"";return{content:[String($.text||"").trim(),j].filter(Boolean).join(`

`).trim(),fileRefs:[...$.fileRefs],folderRefs:[...$.folderRefs],messageRefs:[...$.messageRefs],attachmentRefs:[...$.attachmentRefs]}}function mA(_){let{queuedItem:$,buildDraft:j=vA,onRemoveQueuedFollowup:Z,setSubmitError:X,setSubmitNotice:G,setMediaFiles:q,onSetFileRefs:Q,onSetFolderRefs:K,onSetMessageRefs:V,setContent:Y,textareaRef:N,resizeTextarea:F=()=>{},scheduleTimeout:B=(M,E=0)=>setTimeout(M,E),scheduleRaf:D=(M)=>requestAnimationFrame(M),logger:z=console}=_||{};if(!$)return!1;let H=j($?.content||""),W=H.content;return z?.info?.("[compose-box] Returning queued item to editor",{text:W?.slice(0,80),fileRefs:H.fileRefs?.length,folderRefs:H.folderRefs?.length,messageRefs:H.messageRefs?.length}),X?.(null),G?.(null),q?.([]),Q?.(H.fileRefs),K?.(H.folderRefs),V?.(H.messageRefs),Y?.(W),D(()=>{let M=N?.current;if(!M)return;if(M.value=W,typeof M.dispatchEvent==="function")M.dispatchEvent(new Event("input",{bubbles:!0}));F();let E=W.length;M.selectionStart=E,M.selectionEnd=E,M.focus()}),B(()=>{try{Z?.($)}catch(M){z?.warn?.("[compose-box] Failed to remove returned queued follow-up.",M)}},0),!0}function cA({items:_=[],onInjectQueuedFollowup:$,onRemoveQueuedFollowup:j,onMoveQueuedFollowup:Z,onReturnQueuedFollowup:X,onOpenFilePill:G}){if(!Array.isArray(_)||_.length===0)return null;return U`
        <div class="compose-queue-stack">
            ${_.map((q,Q)=>{let K=typeof q?.content==="string"?q.content:"",V=uV(K);if(!V.text.trim()&&V.fileRefs.length===0&&V.folderRefs.length===0&&V.messageRefs.length===0&&V.attachmentRefs.length===0)return null;let Y=Q>0,N=Q<_.length-1,F=!0;return U`
                    <div class="compose-queue-stack-item" data-testid="queue-item" role="listitem">
                        <div class="compose-queue-stack-content" title=${K}>
                            ${V.text.trim()&&U`<div class="compose-queue-stack-text">${V.text}</div>`}
                            ${(V.messageRefs.length>0||V.fileRefs.length>0||V.folderRefs.length>0||V.attachmentRefs.length>0)&&U`
                                <div class="compose-queue-stack-refs">
                                    ${V.messageRefs.map((B)=>U`
                                        <${U_}
                                            key=${"queue-msg-"+B}
                                            prefix="compose"
                                            label=${"msg:"+B}
                                            title=${"Message reference: "+B}
                                            icon="message"
                                        />
                                    `)}
                                    ${V.fileRefs.map((B)=>{let D=B.split("/").pop()||B;return U`
                                            <${U_}
                                                key=${"queue-file-"+B}
                                                prefix="compose"
                                                label=${D}
                                                title=${B}
                                                onClick=${()=>G?.(B)}
                                            />
                                        `})}
                                    ${V.folderRefs.map((B)=>{let D=B.split("/").pop()||B;return U`
                                            <${U_}
                                                key=${"queue-folder-"+B}
                                                prefix="compose"
                                                label=${D}
                                                title=${B}
                                                icon="folder"
                                                onClick=${()=>G?.(B)}
                                            />
                                        `})}
                                    ${V.attachmentRefs.map((B)=>U`
                                        <${U_}
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
                            ${_.length>1&&U`
                                <button
                                    class="compose-queue-stack-move-btn"
                                    data-action="move-up"
                                    type="button"
                                    title="Move up"
                                    aria-label="Move up in queue"
                                    disabled=${!Y}
                                    onClick=${()=>Y&&Z?.(Q,Q-1)}
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
                                    disabled=${!N}
                                    onClick=${()=>N&&Z?.(Q,Q+1)}
                                >
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </button>
                            `}
                            ${F&&U`
                                <button
                                    class="compose-queue-stack-move-btn queue-edit"
                                    data-action="edit"
                                    type="button"
                                    title="Edit in compose"
                                    aria-label="Return queued message to editor"
                                    onClick=${(B)=>{B.stopPropagation(),X?.(q)}}
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
                                onClick=${()=>$?.(q)}
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
                                onClick=${()=>j?.(q)}
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
    `}function vV({onPost:_,onFocus:$,searchMode:j,searchScope:Z="current",onSearch:X,onSearchScopeChange:G,onEnterSearch:q,onExitSearch:Q,fileRefs:K=[],onRemoveFileRef:V,onClearFileRefs:Y,folderRefs:N=[],onRemoveFolderRef:F,onClearFolderRefs:B,messageRefs:D=[],onRemoveMessageRef:z,onClearMessageRefs:H,activeModel:W=null,agentModelsPayload:M=null,modelUsage:E=null,thinkingLevel:L=null,supportsThinking:x=!1,contextUsage:I=null,onContextCompact:J,notificationsEnabled:k=!1,notificationPermission:O="default",onToggleNotifications:T,onModelChange:y,onModelStateChange:A,activeEditorPath:P=null,onAttachEditorFile:f,onOpenFilePill:u,followupQueueItems:c=[],onInjectQueuedFollowup:r,onRemoveQueuedFollowup:e,onMoveQueuedFollowup:m,onSubmitIntercept:$0,onMessageResponse:W0,isAgentActive:X0=!1,activeChatAgents:Z0=[],currentChatJid:q0="web:default",connectionStatus:D0="connected",stateAccessFailed:h=!1,onSetFileRefs:j0,onSetFolderRefs:Y0,onSetMessageRefs:L0,onSubmitError:s,onSwitchChat:Q0,onRenameSession:O0,isRenameSessionInProgress:x0=!1,onCreateSession:r0,onCreateRootSession:l0,onDeleteSession:n0,onPurgeArchivedSession:m0,onRestoreSession:_1,showQueueStack:S0=!0,statusNotice:o0=null,extensionWorkingState:c0=null,prefillRequest:$1=null}){let[i0,H1]=C(""),[Q1,P0]=C(""),[J0,z1]=C(!1),[G1,J1]=C(!1),[F0,R0]=C("or"),[w0,j1]=C([]),[x1,K1]=C(!1),[V1,Z1]=C([]),[E1,c1]=C(0),[g1,O1]=C(!1),e1=g(null),[T1,V0]=C([]),[v,n]=C(0),[a,_0]=C(!1),[H0,A0]=C(!1),[E0,C0]=C(!1),[k0,h0]=C(!1),[v0,p0]=C([]),[d0,I0]=C(0),[T0,N1]=C(0),[q1,o]=C(!1),[z0,s0]=C(!1),[t0,C1]=C(0),[Z_,A1]=C(null),[N_,p1]=C(null),[W1,M_]=C(()=>Vj()),[a1,M1]=C({kind:"idle",title:"",detail:""}),[Q4,I$]=C(()=>Date.now()),[r1,B_]=C(0),U1=g(null),h1=g(null),u1=g(null),X_=g(null),m_=g(null),c_=g(null),G$=g(null),x$=g(null),l1=g({value:"",updatedAt:0}),R1=g(null),r4=g(""),O_=g(""),F_=g(""),q$=g(""),D_=g(!1),I_=g(!1),x_=g(!1),Q$=g(0),C$=g(!1),F3=200,k1=WA(q0),C_=(w)=>{let p=new Set,i=[];for(let B0 of w||[]){if(typeof B0!=="string")continue;let f0=B0.trim();if(!f0||p.has(f0))continue;p.add(f0),i.push(f0)}return i},n4=(w=k1)=>{let p=E_(w);if(!p)return[];try{let i=JSON.parse(p);if(!Array.isArray(i))return[];return C_(i)}catch{return[]}},V4=(w,p=k1)=>{B1(p,JSON.stringify(w))},P$=g(n4(k1)),h_=g(-1),V$=g(""),K$=g("");b(()=>{P$.current=n4(k1),h_.current=-1,V$.current=""},[k1]),b(()=>{if(!j)return;fetch("/agent/settings-data").then((w)=>w.json()).then((w)=>{if(w?.searchMatchMode)R0(w.searchMatchMode)}).catch(()=>{})},[j]),b(()=>{let w=!1;return fetch(`/agent/commands?chat_jid=${encodeURIComponent(q0||"web:default")}`).then((i)=>i.ok?i.json():null).then((i)=>{if(w||!i?.commands)return;e1.current=i.commands.map((B0)=>({name:B0.name,description:B0.description||""}))}).catch((i)=>{console.debug("[compose] failed to fetch dynamic commands",i)}),()=>{w=!0}},[q0]),b(()=>{let w=HA($1,K$.current,j);if(!w.shouldApply)return;K$.current=w.nextToken,A1(null),H1(w.text),S(w.text),d(w.text),requestAnimationFrame(()=>{f_();let p=U1.current;if(!p)return;try{p.focus({preventScroll:!0})}catch{p.focus()}let i=w.text.length;p.setSelectionRange?.(i,i)})},[$1,j]),b(()=>{M_(Vj())},[]);let g5=i0.trim()||w0.length>0||K.length>0||N.length>0||D.length>0,u5=a1.kind!=="idle",K4=a1.kind==="requesting_permission"||a1.kind==="listening",Y4=!j&&Boolean(W1?.showButton),__=a1.kind==="requesting_permission"||a1.kind==="listening",d4=__?"Stop voice input":W1?.title||"Voice input",f$=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),o4=typeof window<"u"&&typeof Notification<"u",v5=typeof window<"u"?Boolean(window.isSecureContext):!1,m5=o4&&v5&&O!=="denied",l_=O==="granted"&&k,k_=k$(o0),i4=a2(o0),N4=typeof o0?.detail==="string"&&o0.detail.trim()?o0.detail.trim():"",B4=k_?A6(o0,Q4):null,T_=TA(c0,r1),$_=c0?.indicator&&typeof c0.indicator==="object"?c0.indicator:null,s4=l_?"Disable notifications":"Enable notifications",F4=w0.length>0||K.length>0||N.length>0||D.length>0,p_=qj(h?D0:"connected"),n1=p_.label,c5=p_.title,a4=EA(X0,g5,k_),r_=MA(X0,k_),d6=(Array.isArray(Z0)?Z0:[]).filter((w)=>!w?.archived_at),d1=(()=>{for(let w of Array.isArray(Z0)?Z0:[]){let p=typeof w?.chat_jid==="string"?w.chat_jid.trim():"";if(p&&p===q0)return w}return null})(),U3=Boolean(d1&&d1.chat_jid===(d1.root_chat_jid||d1.chat_jid)),o6=Boolean(U3&&(d1?.chat_jid||q0)==="web:default"),L_=(()=>{let w=typeof d1?.parent_branch_id==="string"?d1.parent_branch_id.trim():"",p=typeof d1?.branch_id==="string"?d1.branch_id.trim():"";if(!d1||!w||!p||d1.archived_at)return null;if((Array.isArray(Z0)?Z0:[]).filter((f0)=>{let D1=typeof f0?.parent_branch_id==="string"?f0.parent_branch_id.trim():"";return D1&&D1===p}).length>0)return null;return(Array.isArray(Z0)?Z0:[]).find((f0)=>{let D1=typeof f0?.branch_id==="string"?f0.branch_id.trim():"";return D1&&D1===w&&!f0?.archived_at})||null})(),Y$=G0(()=>OA(Z0,q0),[Z0,q0]),t4=Y$.length>0,R$=t4&&typeof Q0==="function",S$=t4&&typeof _1==="function",N$=Boolean(x0||C$.current),B$=!j&&typeof O0==="function"&&!N$,F$=!j&&typeof r0==="function",U4=!j&&typeof l0==="function",b$=!j&&!X0&&!z0&&Boolean(L_?.chat_jid),P_=!j&&typeof n0==="function"&&!o6,i6=!j&&typeof m0==="function",U$=!j&&(R$||S$||B$||F$||U4||b$||P_||i6),s6=PA(W,M),h5=s6.showPicker,l5=s6.label,p5=x&&L?` (${L})`:"",D3=p5.trim()?`${L}`:"",a6=fA(W,M),t6=typeof E?.hint_short==="string"?E.hint_short.trim():"",e6=[D3||null,a6?.label||null,t6||null].filter(Boolean).join(" • "),z3=[W?`Current model: ${l5}${p5}`:null,a6?.title||null,E?.plan?`Plan: ${E.plan}`:null,t6||null,E?.primary?.reset_description||null,E?.secondary?.reset_description||null].filter(Boolean),_2=H0?"Switching model…":z3.join(" • ")||(h5?"Select a model (tap to open model picker)":`Current model: ${l5}${p5} (tap to open model picker)`),H3=!j&&(h5||I&&I.percent!=null),D4=(w)=>{if(!w||typeof w!=="object")return;let p=w.model??w.current;if(typeof A==="function")A({...w,model:p??null,thinking_level:w.thinking_level??null,thinking_level_label:w.thinking_level_label??null,supports_thinking:w.supports_thinking,provider_usage:w.provider_usage??null});if(p&&typeof y==="function")y(p)},f_=(w)=>{let p=w||U1.current;if(!p)return;p.style.height="auto",p.style.height=`${p.scrollHeight}px`,p.style.overflowY="hidden"},S=(w)=>{if(!w.startsWith("/")||w.includes(`
`)){O1(!1),Z1([]);return}let p=w.toLowerCase().split(" ")[0];if(p.length<1){O1(!1),Z1([]);return}let B0=(e1.current||zA).filter((f0)=>f0.name.startsWith(p)||f0.name.replace(/-/g,"").startsWith(p.replace(/-/g,"")));if(B0.length>0&&!(B0.length===1&&B0[0].name===p))_0(!1),V0([]),Z1(B0),c1(0),O1(!0);else O1(!1),Z1([])},l=(w)=>{let p=i0,i=p.indexOf(" "),B0=i>=0?p.slice(i):"",f0=w.name+B0;H1(f0),O1(!1),Z1([]),requestAnimationFrame(()=>{let D1=U1.current;if(!D1)return;let i1=f0.length;D1.selectionStart=i1,D1.selectionEnd=i1,D1.focus()})},d=(w)=>{if(jj(w,{searchMode:j,showSessionSwitcherButton:U$})){_0(!1),V0([]);return}if(_j(w)==null){_0(!1),V0([]);return}let p=EV(d6,w,{currentChatJid:q0});if(p.length>0&&!(p.length===1&&$j(p[0].agent_name).trim().toLowerCase()===String(w||"").trim().toLowerCase()))O1(!1),Z1([]),V0(p),n(0),_0(!0);else _0(!1),V0([])},t=(w)=>{let p=$j(w?.agent_name);if(!p)return;H1(p),_0(!1),V0([]),requestAnimationFrame(()=>{let i=U1.current;if(!i)return;let B0=p.length;i.selectionStart=B0,i.selectionEnd=B0,i.focus()})},U0=()=>{if(j||!R$&&!S$&&!B$&&!F$&&!P_)return!1;return l1.current={value:"",updatedAt:0},C0(!1),O1(!1),Z1([]),_0(!1),V0([]),h0(!0),!0},N0=(w)=>{if(w?.preventDefault?.(),w?.stopPropagation?.(),j||!R$&&!S$&&!B$&&!F$&&!P_)return;if(k0){l1.current={value:"",updatedAt:0},h0(!1);return}U0()},y0=(w)=>{let p=typeof w==="string"?w.trim():"";if(h0(!1),!p||p===q0){requestAnimationFrame(()=>U1.current?.focus());return}Q0?.(p)},b0=async(w)=>{let p=typeof w==="string"?w.trim():"";if(h0(!1),!p||typeof _1!=="function"){requestAnimationFrame(()=>U1.current?.focus());return}try{await _1(p)}catch(i){console.warn("Failed to restore session:",i),requestAnimationFrame(()=>U1.current?.focus())}},K0=G0(()=>{let w=[];for(let p of Y$){let i=Boolean(p?.archived_at),B0=typeof p?.agent_name==="string"?p.agent_name.trim():"",f0=typeof p?.chat_jid==="string"?p.chat_jid.trim():"";if(!B0||!f0)continue;w.push({type:"session",key:`session:${f0}`,label:`@${B0} — ${f0}${p?.is_active?" active":""}${i?" archived":""}`,chat:p,disabled:i?!S$:!R$})}if(F$)w.push({type:"action",key:"action:new",label:"New branch",action:"new",disabled:!1});if(U4)w.push({type:"action",key:"action:new-root",label:"New root session…",action:"new-root",disabled:!1});if(L_?.chat_jid)w.push({type:"action",key:"action:rollup",label:"Merge current w/ parent",action:"rollup",disabled:!b$});if(B$)w.push({type:"action",key:"action:rename",label:"Rename current session",action:"rename",disabled:N$});if(P_)w.push({type:"action",key:"action:delete",label:"Delete current session",action:"delete",disabled:!1});return w},[Y$,S$,R$,F$,U4,L_,b$,B$,P_,N$]),a0=async(w)=>{if(w?.preventDefault)w.preventDefault();if(w?.stopPropagation)w.stopPropagation();if(typeof O0!=="function"||x0||C$.current)return;C$.current=!0,h0(!1);try{await O0()}catch(p){console.warn("Failed to rename session:",p)}finally{C$.current=!1}requestAnimationFrame(()=>U1.current?.focus())},o1=async()=>{if(typeof r0!=="function")return;h0(!1);try{await r0()}catch(w){console.warn("Failed to create session:",w)}requestAnimationFrame(()=>U1.current?.focus())},G_=async()=>{if(typeof l0!=="function")return;h0(!1);let w=typeof window<"u"?window.prompt("New root session handle (for example: ops)"):"",p=String(w||"").trim();if(!p){requestAnimationFrame(()=>U1.current?.focus());return}try{await l0(p)}catch(i){console.warn("Failed to create root session:",i)}requestAnimationFrame(()=>U1.current?.focus())},g$=async()=>{let w=typeof L_?.chat_jid==="string"?L_.chat_jid.trim():"";if(!w||z0||X0)return;h0(!1),A1(null),p1(null),s0(!0);try{let p=await A_("default","/rollup",null,[],null,q0);W0?.(p),_?.(p);let i=p?.command;if(i?.status==="error"){let f0=i?.message||"Failed to merge current session with parent.";A1(f0),s?.(f0);return}let B0=typeof i?.rolled_up_to==="string"&&i.rolled_up_to.trim()?i.rolled_up_to.trim():w;Q0?.(B0)}catch(p){let i=p?.message||"Failed to merge current session with parent.";A1(i),s?.(i),console.warn("Failed to merge session with parent:",p)}finally{s0(!1)}requestAnimationFrame(()=>U1.current?.focus())},W3=async()=>{if(typeof n0!=="function")return;h0(!1);try{await n0(q0)}catch(w){console.warn("Failed to delete session:",w)}requestAnimationFrame(()=>U1.current?.focus())},u$=(w)=>{if(j)P0(w);else H1(w),S(w),d(w);requestAnimationFrame(()=>f_())},BD=(w)=>{let p=j?Q1:i0,i=p&&!p.endsWith(`
`)?`
`:"",B0=`${p}${i}${w}`.trimStart();u$(B0)},O3=R(()=>{requestAnimationFrame(()=>{let w=U1.current;if(!w)return;try{w.focus({preventScroll:!0})}catch{w.focus()}})},[]),n_=R(()=>{M1({kind:"idle",title:"",detail:""})},[]),L3=R((w=O_.current,p=F_.current)=>{if(j)return;u$(wV(r4.current,w,p))},[j]),d_=R(()=>{D_.current=!0;let w=R1.current;if(!w){n_();return}try{w.stop()}catch{R1.current=null,n_()}},[n_]),J3=R(()=>{if(A1(null),p1(null),R1.current){d_();return}if(!W1?.showButton)return;if(W1.mode==="fallback"){O3(),M1({kind:"guidance",title:W1.title||"Use keyboard dictation",detail:W1.detail||"Use your keyboard dictation mic for voice input here."});return}if(!W1?.canStart||!W1?.recognitionCtor){M1({kind:"error",title:W1?.title||"Voice input unavailable",detail:W1?.detail||"This browser does not expose native speech recognition in this context."});return}try{let w=new W1.recognitionCtor;if(R1.current=w,r4.current=String(i0||""),O_.current="",F_.current="",q$.current="",D_.current=!1,w.lang=typeof navigator<"u"&&navigator.language?navigator.language:"en-US",w.interimResults=!0,w.continuous=!1,"maxAlternatives"in w)w.maxAlternatives=1;w.onstart=()=>{M1({kind:"listening",title:"Listening…",detail:"Speak now. Tap the mic again to stop."})},w.onresult=(p)=>{let{finalText:i,interimText:B0}=IV(p?.results,p?.resultIndex||0);if(i)O_.current=`${O_.current} ${i}`.trim();F_.current=B0,L3(),M1({kind:"listening",title:"Listening…",detail:B0?`Heard: ${B0}`:"Speak now. Tap the mic again to stop."})},w.onerror=(p)=>{let i=String(p?.error||"").trim();if(q$.current=i,R1.current=null,F_.current="",i==="aborted"){n_();return}M1({kind:"error",title:"Voice input failed",detail:Kj(i,W1)})},w.onend=()=>{let p=q$.current,i=D_.current,B0=Boolean(O_.current.trim()||F_.current.trim());if(R1.current=null,D_.current=!1,q$.current="",F_.current.trim())O_.current=`${O_.current} ${F_.current}`.trim(),F_.current="";if(B0)L3(O_.current,"");if(p&&p!=="aborted")return;if(!B0&&!i){M1({kind:"error",title:"No speech detected",detail:Kj("no-speech",W1)});return}n_()},M1({kind:"requesting_permission",title:"Starting voice input…",detail:"Allow microphone access if the browser asks."}),O3(),w.start()}catch(w){R1.current=null,M1({kind:"error",title:"Voice input failed",detail:w?.message||"Could not start native browser speech recognition."})}},[L3,n_,i0,O3,W1,d_]),FD=(w)=>{let p=w?.command?.model_label;if(p)return p;let i=w?.command?.message;if(typeof i==="string"){let B0=i.match(/•\s+([^\n]+?)\s+\(current\)/);if(B0?.[1])return B0[1].trim()}return null},zZ=async(w)=>{if(j||H0)return;A1(null),p1(null),A0(!0);try{let p=await A_("default",w,null,[],null,q0),i=FD(p);return D4({model:i??W??null,thinking_level:p?.command?.thinking_level,thinking_level_label:p?.command?.thinking_level_label,supports_thinking:p?.command?.supports_thinking}),await Qj(x4,q0,D4),p1(CV(w,p)),_?.(p),!0}catch(p){return console.error("Failed to switch model:",p),alert("Failed to switch model: "+p.message),!1}finally{A0(!1)}},UD=(w)=>{if(w.pointerType==="mouse")return;let p=U1.current?.value??(j?Q1:i0);if(!PV(w,p,{searchMode:j,speechButtonVisible:Y4,speechButtonActive:__,canStartSpeech:Boolean(W1?.canStart&&W1?.recognitionCtor)}))return;w.preventDefault(),I_.current=!0,x_.current=!0,J3()},E3=(w)=>{if(!I_.current)return;if(w?.preventDefault?.(),I_.current=!1,R1.current)d_()},DD=(w)=>{if(x_.current){x_.current=!1,w.preventDefault();return}J3()},zD=async()=>{await zZ("/cycle-model")},A3=async(w)=>{let p=typeof w==="string"?w:typeof w?.label==="string"?w.label:"";if(!p||H0)return;let i=fV(w,I);if(i.blocked){A1(null),p1(i.note);return}if(await zZ(`/model ${p}`))C0(!1)},HD=(w)=>{if(!w||w.disabled)return;if(w.type==="session"){let p=w.chat;if(p?.archived_at)b0(p.chat_jid);else y0(p.chat_jid);return}if(w.type==="action"){if(w.action==="new"){o1();return}if(w.action==="new-root"){G_();return}if(w.action==="rollup"){g$();return}if(w.action==="rename"){a0();return}if(w.action==="delete")W3()}},WD=(w)=>{w.preventDefault(),w.stopPropagation(),l1.current={value:"",updatedAt:0},h0(!1),C0((p)=>!p)},OD=async()=>{if(j)return;J?.(),await e4("/compact",null,{includeMedia:!1,includeFileRefs:!1,includeFolderRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},LD=(w)=>{if(w==="queue"||w==="steer"||w==="auto")return w;return X0?"queue":void 0},e4=async(w,p,i={})=>{let B0=typeof w==="string"?w:i0;if(/^\/settings\s*$/i.test(B0.trim())){H1(""),requestAnimationFrame(()=>f_()),_$();return}if(/^\/help\s*$/i.test(B0.trim())){H1(""),requestAnimationFrame(()=>f_()),_$({section:"keyboard"});return}let{includeMedia:f0=!0,includeFileRefs:D1=!0,includeFolderRefs:i1=!0,includeMessageRefs:v1=!0,clearAfterSubmit:R_=!0,recordHistory:y_=!0}=i||{},HZ=typeof w==="string"?w:w&&typeof w?.target?.value==="string"?w.target.value:i0,WZ=typeof HZ==="string"?HZ:"";if(!WZ.trim()&&(f0?w0.length===0:!0)&&(D1?K.length===0:!0)&&(i1?N.length===0:!0)&&(v1?D.length===0:!0))return;if(R1.current)d_();n_(),O1(!1),Z1([]),_0(!1),V0([]),h0(!1),A1(null),p1(null);let $2=f0?[...w0]:[],j2=D1?[...K]:[],Z2=i1?[...N]:[],X2=v1?[...D]:[],z4=WZ.trim();if(y_&&z4){let H4=P$.current,z_=C_(H4.filter((k3)=>k3!==z4));if(z_.push(z4),z_.length>200)z_.splice(0,z_.length-200);P$.current=z_,V4(z_),h_.current=-1,V$.current=""}let SD=()=>{if(f0)j1([...$2]);if(D1)j0?.(j2);if(i1)Y0?.(Z2);if(v1)L0?.(X2);H1(z4),requestAnimationFrame(()=>f_())};if(R_)H1(""),j1([]),Y?.(),B?.(),H?.();(async()=>{try{let H4=await $0?.({content:z4,submitMode:p,fileRefs:j2,folderRefs:Z2,messageRefs:X2,mediaFiles:$2});if(H4){_?.(H4);return}let z_=[];for(let D$ of $2){let G2=await _9(D$);z_.push(G2.id)}let k3=j2.length?`Files:
${j2.map((D$)=>`- ${D$}`).join(`
`)}`:"",bD=Z2.length?`Folders:
${Z2.map((D$)=>`- ${D$}`).join(`
`)}`:"",gD=X2.length?`Referenced messages:
${X2.map((D$)=>`- message:${D$}`).join(`
`)}`:"",uD=z_.length?`Attachments:
${z_.map((D$,G2)=>{let mD=$2[G2]?.name||`attachment-${G2+1}`;return`- attachment:${D$} (${mD})`}).join(`
`)}`:"",vD=[z4,k3,bD,gD,uD].filter(Boolean).join(`

`),v$=await A_("default",vD,null,z_,LD(p),q0);if(W0?.(v$),v$?.command)D4({model:v$.command.model_label??W??null,thinking_level:v$.command.thinking_level,thinking_level_label:v$.command.thinking_level_label,supports_thinking:v$.command.supports_thinking}),await Qj(x4,q0,D4);p1(CV(z4,v$)),_?.(v$)}catch(H4){if(R_)SD();let z_=H4?.message||"Failed to send message.";A1(z_),s?.(z_),console.error("Failed to post:",H4)}})()},JD=(w)=>{r?.(w)},ED=R((w)=>{mA({queuedItem:w,onRemoveQueuedFollowup:e,setSubmitError:A1,setSubmitNotice:p1,setMediaFiles:j1,onSetFileRefs:j0,onSetFolderRefs:Y0,onSetMessageRefs:L0,setContent:H1,textareaRef:U1,resizeTextarea:f_})},[e,j0,Y0,L0,f_]),r5=R((w)=>{if(j||!E0&&!k0||w?.isComposing)return!1;let p=()=>{w.preventDefault?.(),w.stopPropagation?.()},i=()=>{l1.current={value:"",updatedAt:0}};if(w.key==="Escape"){if(p(),i(),E0)C0(!1);if(k0)h0(!1);return!0}if(E0){if(w.key==="ArrowDown"){if(p(),i(),v0.length>0)I0((B0)=>(B0+1)%v0.length);return!0}if(w.key==="ArrowUp"){if(p(),i(),v0.length>0)I0((B0)=>(B0-1+v0.length)%v0.length);return!0}if((w.key==="Enter"||w.key==="Tab")&&v0.length>0)return p(),i(),A3(v0[Math.max(0,Math.min(d0,v0.length-1))]),!0;if(I6(w)&&v0.length>0){p();let B0=t9(l1.current,w.key);l1.current=B0;let f0=e9(v0,B0.value,d0,(D1)=>CA(D1));if(f0>=0)I0(f0);return!0}}if(k0){if(w.key==="ArrowDown"){if(p(),i(),K0.length>0)N1((B0)=>(B0+1)%K0.length);return!0}if(w.key==="ArrowUp"){if(p(),i(),K0.length>0)N1((B0)=>(B0-1+K0.length)%K0.length);return!0}if((w.key==="Enter"||w.key==="Tab")&&K0.length>0)return p(),i(),HD(K0[Math.max(0,Math.min(T0,K0.length-1))]),!0;if(I6(w)&&K0.length>0){p();let B0=t9(l1.current,w.key);l1.current=B0;let f0=e9(K0,B0.value,T0,(D1)=>D1.label);if(f0>=0)N1(f0);return!0}}return!1},[j,E0,k0,v0,d0,K0,T0,A3]),AD=(w)=>{if(w.isComposing)return;if(j&&w.key==="Escape"){w.preventDefault(),P0(""),Q?.();return}if(r5(w))return;let p=U1.current?.value??(j?Q1:i0);if(PV(w,p,{searchMode:j,speechButtonVisible:Y4,speechButtonActive:__,canStartSpeech:Boolean(W1?.canStart&&W1?.recognitionCtor)})){w.preventDefault(),I_.current=!0,J3();return}if(MV(w,p,{searchMode:j,showSessionSwitcherButton:U$})){w.preventDefault(),U0();return}if(a&&T1.length>0){let i=U1.current?.value??(j?Q1:i0);if(!String(i||"").match(/^@([a-zA-Z0-9_-]*)$/))_0(!1),V0([]);else{if(w.key==="ArrowDown"){w.preventDefault(),n((B0)=>(B0+1)%T1.length);return}if(w.key==="ArrowUp"){w.preventDefault(),n((B0)=>(B0-1+T1.length)%T1.length);return}if(w.key==="Tab"||w.key==="Enter"){w.preventDefault(),t(T1[v]);return}if(w.key==="Escape"){w.preventDefault(),_0(!1),V0([]);return}}}if(g1&&V1.length>0){let i=U1.current?.value??(j?Q1:i0);if(!String(i||"").startsWith("/"))O1(!1),Z1([]);else{if(w.key==="ArrowDown"){w.preventDefault(),c1((B0)=>(B0+1)%V1.length);return}if(w.key==="ArrowUp"){w.preventDefault(),c1((B0)=>(B0-1+V1.length)%V1.length);return}if(w.key==="Tab"){w.preventDefault(),l(V1[E1]);return}if(w.key==="Enter"&&!w.shiftKey){if(!p.includes(" ")){w.preventDefault();let f0=V1[E1];O1(!1),Z1([]),e4(f0.name);return}}if(w.key==="Escape"){w.preventDefault(),O1(!1),Z1([]);return}}}if(!j&&(w.key==="ArrowUp"||w.key==="ArrowDown")&&!w.metaKey&&!w.ctrlKey&&!w.altKey&&!w.shiftKey){let i=U1.current;if(!i)return;let B0=i.value||"",f0=i.selectionStart===0&&i.selectionEnd===0,D1=i.selectionStart===B0.length&&i.selectionEnd===B0.length;if(w.key==="ArrowUp"&&f0||w.key==="ArrowDown"&&D1){let i1=P$.current;if(!i1.length)return;w.preventDefault();let v1=h_.current;if(w.key==="ArrowUp"){if(v1===-1)V$.current=B0,v1=i1.length-1;else if(v1>0)v1-=1;h_.current=v1,u$(i1[v1]||"")}else{if(v1===-1)return;if(v1<i1.length-1)v1+=1,h_.current=v1,u$(i1[v1]||"");else h_.current=-1,u$(V$.current||""),V$.current=""}requestAnimationFrame(()=>{let R_=U1.current;if(!R_)return;let y_=R_.value.length;R_.selectionStart=y_,R_.selectionEnd=y_});return}}if(w.key==="Enter"&&!w.shiftKey&&(w.ctrlKey||w.metaKey)){if(w.preventDefault(),j){if(p.trim())X?.(p.trim(),Z,{images:J0,attachments:G1})}else e4(p,"steer");return}if(w.key==="Enter"&&!w.shiftKey){if(w.preventDefault(),j){if(p.trim())X?.(p.trim(),Z,{images:J0,attachments:G1})}else e4(p);return}if(w.key==="Escape"){if(E0||k0||g1||a)return;w.preventDefault(),U1.current?.blur()}},MD=(w)=>{if(AA(w,I_.current)){if(w.preventDefault(),I_.current=!1,R1.current)d_()}},M3=(w)=>{let p=Array.from(w||[]).filter((i)=>i instanceof File&&!String(i.name||"").startsWith(".DS_Store"));if(!p.length)return;j1((i)=>[...i,...p]),A1(null)},kD=(w)=>{M3(w.target.files),w.target.value=""},TD=(w)=>{if(j)return;w.preventDefault(),w.stopPropagation(),Q$.current+=1,K1(!0)},yD=(w)=>{if(j)return;if(w.preventDefault(),w.stopPropagation(),Q$.current=Math.max(0,Q$.current-1),Q$.current===0)K1(!1)},wD=(w)=>{if(j)return;if(w.preventDefault(),w.stopPropagation(),w.dataTransfer)w.dataTransfer.dropEffect="copy";K1(!0)},ID=(w)=>{if(j)return;w.preventDefault(),w.stopPropagation(),Q$.current=0,K1(!1),M3(w.dataTransfer?.files||[])},xD=(w)=>{if(j)return;let p=w.clipboardData?.items;if(!p||!p.length)return;let i=[];for(let B0 of p){if(B0.kind!=="file")continue;let f0=B0.getAsFile?.();if(f0)i.push(f0)}if(i.length>0)w.preventDefault(),M3(i)},CD=(w)=>{j1((p)=>p.filter((i,B0)=>B0!==w))},PD=()=>{A1(null),j1([]),Y?.(),B?.(),H?.()},fD=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((w)=>{let{latitude:p,longitude:i,accuracy:B0}=w.coords,f0=`${p.toFixed(5)}, ${i.toFixed(5)}`,D1=Number.isFinite(B0)?` ±${Math.round(B0)}m`:"",i1=`https://maps.google.com/?q=${p},${i}`,v1=`Location: ${f0}${D1} ${i1}`;BD(v1)},(w)=>{let p=w?.message||"Unable to retrieve location.";alert(`Location error: ${p}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};b(()=>{if(!E0)return;l1.current={value:"",updatedAt:0},o(!0),x4(q0).then((w)=>{p0(bV(w)),D4(w)}).catch((w)=>{console.warn("Failed to load model list:",w),p0([])}).finally(()=>{o(!1)})},[E0,W]),b(()=>{if(j)C0(!1),h0(!1),O1(!1),Z1([]),_0(!1),V0([])},[j]),b(()=>{if(k0&&!U$)h0(!1)},[k0,U$]),b(()=>{if(!E0)return;let w=v0.findIndex((p)=>p?.label===W);I0(w>=0?w:0)},[E0,v0,W]),b(()=>{if(!k0)return;N1(JA(K0,q0)),l1.current={value:"",updatedAt:0}},[k0,q0,K0]),b(()=>{if(!E0)return;let w=(p)=>{let i=X_.current,B0=m_.current,f0=p.target;if(i&&i.contains(f0))return;if(B0&&B0.contains(f0))return;C0(!1)};return document.addEventListener("pointerdown",w),()=>document.removeEventListener("pointerdown",w)},[E0]),b(()=>{if(!k0)return;let w=(p)=>{let i=c_.current,B0=G$.current,f0=p.target;if(i&&i.contains(f0))return;if(B0&&B0.contains(f0))return;h0(!1)};return document.addEventListener("pointerdown",w),()=>document.removeEventListener("pointerdown",w)},[k0]),b(()=>{if(j||!E0&&!k0)return;let w=(p)=>{r5(p)};return document.addEventListener("keydown",w,!0),()=>document.removeEventListener("keydown",w,!0)},[j,E0,k0,r5]),b(()=>{if(!E0)return;let w=X_.current;w?.focus?.(),w?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[E0,d0,v0]),b(()=>{if(!k0)return;let w=c_.current;w?.focus?.(),w?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[k0,T0,K0.length]),b(()=>{if(!a||!u1.current)return;u1.current.querySelector?.(".slash-item.active")?.scrollIntoView?.({block:"nearest"})},[a,v,T1.length]),b(()=>{if(!g1||!h1.current)return;h1.current.querySelector?.(".slash-item.active")?.scrollIntoView?.({block:"nearest"})},[g1,E1,V1.length]),b(()=>{let w=(i)=>{if(!i||typeof i!=="object")return!1;if(i.isContentEditable)return!0;if(typeof i.closest!=="function")return!1;return Boolean(i.closest('input, textarea, select, [contenteditable="true"], .compose-box, .compose-model-popup, .compose-session-popup, .settings-dialog, .workspace-sidebar, .editor-pane-container, .dock-panel, .timeline-menu-dropdown, .rename-branch-overlay, .agent-request-modal, .attachment-preview-modal, .vnc-pane-shell, .kanban-plugin, .mindmap-editor, .timeline-quick-actions'))},p=(i)=>{if(i.ctrlKey||i.metaKey||i.altKey)return;let B0=U1.current;if(!B0)return;let f0=document.activeElement===B0;if(i.key==="Escape"&&!f0&&!w(i.target)){i.preventDefault(),B0.focus();return}if(i.key==="/"&&!f0&&!w(i.target))i.preventDefault(),u$("/"),requestAnimationFrame(()=>{B0.focus(),B0.selectionStart=1,B0.selectionEnd=1,S("/")})};return window.addEventListener("keydown",p),()=>window.removeEventListener("keydown",p)},[]),b(()=>{let w=()=>{let D1=x$.current?.clientWidth||0;C1((i1)=>i1===D1?i1:D1)};w();let p=x$.current,i=0,B0=()=>{if(i)cancelAnimationFrame(i);i=requestAnimationFrame(()=>{i=0,w()})},f0=null;if(p&&typeof ResizeObserver<"u")f0=new ResizeObserver(()=>B0()),f0.observe(p);if(typeof window<"u")window.addEventListener("resize",B0);return()=>{if(i)cancelAnimationFrame(i);if(f0?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",B0)}},[j,W,d1?.agent_name,U$,I?.percent]);let RD=(w)=>{let p=w.target.value;if(R1.current&&w?.isTrusted)d_();if(A1(null),p1(null),a1.kind==="guidance"||a1.kind==="error")n_();if(k0)h0(!1);if(f_(w.target),jj(p,{searchMode:j,showSessionSwitcherButton:U$})){u$(""),requestAnimationFrame(()=>{let i=U1.current;if(!i)return;i.value="",i.selectionStart=0,i.selectionEnd=0,i.focus()}),U0();return}u$(p)};return b(()=>{requestAnimationFrame(()=>f_())},[i0,Q1,j]),b(()=>{if(!j)return;if(R1.current)d_();return},[j,d_]),b(()=>{if(R1.current)d_();n_()},[q0,n_,d_]),b(()=>{return()=>{if(!R1.current)return;try{R1.current.stop()}catch(w){console.debug("[compose] failed to stop speech recognition during cleanup",w)}R1.current=null}},[]),b(()=>{if(!k_)return;I$(Date.now());let w=setInterval(()=>I$(Date.now()),1000);return()=>clearInterval(w)},[k_,o0?.started_at,o0?.startedAt]),b(()=>{if(B_(0),$_?.mode!=="custom"||!Array.isArray($_.frames)||$_.frames.length<=1)return;let w=typeof $_.intervalMs==="number"&&Number.isFinite($_.intervalMs)&&$_.intervalMs>0?$_.intervalMs:120,p=setInterval(()=>{B_((i)=>(i+1)%$_.frames.length)},w);return()=>clearInterval(p)},[$_]),b(()=>{if(j)return;d(i0)},[d6,q0,i0,j]),U`
        <div class="compose-box" data-testid="compose-box">
            ${u5&&U`
                <div class=${`compose-inline-status compose-speech-status compose-speech-status-${a1.kind}`} role="status" aria-live="polite">
                    <div class="compose-inline-status-row">
                        <span class=${Gj({pulsing:K4})} aria-hidden="true"></span>
                        <span class="compose-inline-status-title">${a1.title}</span>
                    </div>
                    ${a1.detail&&U`<div class="compose-inline-status-detail">${a1.detail}</div>`}
                </div>
            `}
            ${S0&&!j&&U`
                <${cA}
                    items=${c}
                    onInjectQueuedFollowup=${JD}
                    onRemoveQueuedFollowup=${e}
                    onMoveQueuedFollowup=${m}
                    onReturnQueuedFollowup=${ED}
                    onOpenFilePill=${u}
                />
            `}
            ${T_.visible&&U`
                <div class="compose-inline-status extension-working" role="status" aria-live="polite">
                    <div class="compose-inline-status-row">
                        ${T_.indicatorText?U`<span class="compose-inline-status-glyph" aria-hidden="true">${T_.indicatorText}</span>`:T_.animateSpinner?U`<div class="compose-inline-status-spinner" aria-hidden="true"></div>`:T_.animateDot?U`<span class=${Gj({pulsing:!0})} aria-hidden="true"></span>`:null}
                        <span class="compose-inline-status-title">${T_.title}</span>
                    </div>
                </div>
            `}
            ${o0&&!k_&&U`
                <div
                    class="compose-inline-status"
                    role="status"
                    aria-live="polite"
                    title=${N4||""}
                >
                    <div class="compose-inline-status-row">
                        <div class="compose-inline-status-spinner" aria-hidden="true"></div>
                        <span class="compose-inline-status-title">${i4}</span>
                        ${B4&&U`<span class="compose-inline-status-elapsed">${B4}</span>`}
                    </div>
                    ${N4&&U`<div class="compose-inline-status-detail">${N4}</div>`}
                </div>
            `}
            ${N_&&U`
                <div class="compose-inline-status compose-command-notice" role="status" aria-live="polite">
                    <div class="compose-inline-status-detail compose-command-notice-text" dangerouslySetInnerHTML=${{__html:V_(N_)}}></div>
                </div>
            `}
            <div
                class=${`compose-input-wrapper${x1?" drag-active":""}`}
                onDragEnter=${TD}
                onDragOver=${wD}
                onDragLeave=${yD}
                onDrop=${ID}
            >
                ${U$&&U`
                    <div
                        ref=${G$}
                        class="compose-session-trigger-group compose-session-trigger-top"
                    >
                        <button
                            type="button"
                            class=${`compose-session-trigger compose-session-trigger-pill${k0?" active":""}`}
                            data-testid="session-switcher"
                            onClick=${N0}
                            title=${d1?.chat_jid||q0}
                            aria-label=${d1?.agent_name?`Manage sessions for @${d1.agent_name}`:"Manage Sessions/Agents"}
                            aria-expanded=${k0?"true":"false"}
                        >
                            <span class="compose-current-agent-label active">${d1?.agent_name?`@${d1.agent_name}`:"Sessions"}</span>
                        </button>
                    </div>
                `}
                <div class="compose-input-main">
                    ${F4&&U`
                        <div class="compose-file-refs">
                            ${D.map((w)=>{return U`
                                    <${U_}
                                        key=${"msg-"+w}
                                        prefix="compose"
                                        label=${"msg:"+w}
                                        title=${"Message reference: "+w}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>z?.(w)}
                                    />
                                `})}
                            ${K.map((w)=>{let p=w.split("/").pop()||w;return U`
                                    <${U_}
                                        prefix="compose"
                                        label=${p}
                                        title=${w}
                                        onClick=${()=>u?.(w)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>V?.(w)}
                                    />
                                `})}
                            ${N.map((w)=>{let p=w.split("/").pop()||w;return U`
                                    <${U_}
                                        prefix="compose"
                                        label=${p}
                                        title=${w}
                                        icon="folder"
                                        onClick=${()=>u?.(w)}
                                        removeTitle="Remove folder hint"
                                        onRemove=${()=>F?.(w)}
                                    />
                                `})}
                            ${w0.map((w,p)=>{let i=w?.name||`attachment-${p+1}`;return U`
                                    <${U_}
                                        key=${i+p}
                                        prefix="compose"
                                        label=${i}
                                        title=${i}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>CD(p)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${PD}
                                title="Clear all attachments and references"
                                aria-label="Clear all attachments and references"
                            >
                                Clear all
                            </button>
                        </div>
                    `}
                    <textarea
                        ref=${U1}
                        data-testid="compose-input"
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?Q1:i0}
                        onInput=${RD}
                        onKeyDown=${AD}
                        onKeyUp=${MD}
                        onPaste=${xD}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${a&&T1.length>0&&U`
                        <div class="slash-autocomplete" ref=${u1}>
                            ${T1.map((w,p)=>U`
                                <div
                                    key=${w.chat_jid||w.agent_name}
                                    class=${`slash-item${p===v?" active":""}`}
                                    onMouseDown=${(i)=>{i.preventDefault(),t(w)}}
                                    onMouseEnter=${()=>n(p)}
                                >
                                    <span class="slash-name">@${w.agent_name}</span>
                                    <span class="slash-desc">${w.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${g1&&V1.length>0&&U`
                        <div class="slash-autocomplete" ref=${h1}>
                            ${V1.map((w,p)=>U`
                                <div
                                    key=${w.name}
                                    class=${`slash-item${p===E1?" active":""}`}
                                    onMouseDown=${(i)=>{i.preventDefault(),l(w)}}
                                    onMouseEnter=${()=>c1(p)}
                                >
                                    <span class="slash-name">${w.name}</span>
                                    <span class="slash-desc">${w.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${E0&&!j&&U`
                        <div class="compose-model-popup" ref=${X_} tabIndex="-1" onKeyDown=${r5}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${q1&&U`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!q1&&v0.length===0&&U`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!q1&&v0.map((w,p)=>{let i=typeof w?.label==="string"?w.label:"",B0=Yj(w?.contextWindow),f0=w?.name||null,D1=fV(w,I);return U`
                                        <button
                                            key=${i}
                                            type="button"
                                            role="menuitem"
                                            class=${`compose-model-popup-item compose-model-popup-model-item${d0===p?" active":""}${W===i?" current-model":""}${D1.blocked?" context-blocked":""}`}
                                            onClick=${()=>{A3(w)}}
                                            disabled=${H0||D1.blocked}
                                            title=${[i,f0,B0,D1.title].filter(Boolean).join(" • ")}
                                        >
                                            <span class="compose-model-popup-model-stack">
                                                <span class="compose-model-popup-model-label">${IA(i,w?.contextWindow)}${f0?U` <span class="compose-model-popup-model-subtitle">${f0}</span>`:""}</span>
                                                ${D1.blocked&&U`<span class="compose-model-popup-model-note">${D1.note}</span>`}
                                            </span>
                                        </button>
                                    `})}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{zD()}}
                                    disabled=${H0}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${k0&&!j&&U`
                        <div class="compose-model-popup" data-testid="session-popup" ref=${c_} tabIndex="-1" onKeyDown=${r5}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${!t4&&U`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${t4&&Y$.map((w,p)=>{let i=Boolean(w.archived_at),B0=w.chat_jid===(w.root_chat_jid||w.chat_jid),f0=!B0&&!w.is_active&&!i&&typeof n0==="function",D1=i&&i6,i1=W8(w,{currentChatJid:q0});return U`
                                        <div key=${w.chat_jid} class=${`compose-model-popup-item-row${i?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item session-item${i?" archived":""}${T0===p?" active":""}`}
                                                data-testid="session-item"
                                                onClick=${()=>{if(i){b0(w.chat_jid);return}y0(w.chat_jid)}}
                                                disabled=${i?!S$:!R$}
                                                title=${i?`Restore archived ${`@${w.agent_name}`}`:`Switch to ${`@${w.agent_name}`}`}
                                            >
                                                <span style=${LA(w)?"font-weight:700":""}>${i1}</span>
                                            </button>
                                            <button
                                                type="button"
                                                class="compose-model-popup-item-popout"
                                                title=${`Open @${w.agent_name} in new window`}
                                                aria-label=${`Open @${w.agent_name} in new window`}
                                                onClick=${(v1)=>{v1.stopPropagation(),h0(!1);let R_=new URL(window.location.href);R_.searchParams.set("chat_jid",w.chat_jid),R_.searchParams.set("chat_only","1");let y_=document.createElement("a");y_.href=R_.toString(),y_.target="_blank",y_.rel="noopener",y_.style.display="none",document.body.appendChild(y_),y_.click(),y_.remove()}}
                                            >
                                                <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M6 2h8v8"/>
                                                    <path d="M14 2 7 9"/>
                                                    <path d="M12 9v5H2V4h5"/>
                                                </svg>
                                            </button>
                                            ${(f0||D1)&&U`
                                                <button
                                                    type="button"
                                                    class="compose-model-popup-item-delete"
                                                    title=${D1?B0?"Permanently delete this archived session":"Permanently delete this archived branch":"Delete this branch"}
                                                    aria-label=${D1?B0?`Permanently delete archived session @${w.agent_name}`:`Permanently delete archived branch @${w.agent_name}`:`Delete @${w.agent_name}`}
                                                    onClick=${(v1)=>{if(v1.stopPropagation(),h0(!1),D1){m0?.(w.chat_jid);return}n0(w.chat_jid)}}
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
                            ${(F$||U4||B$||P_)&&U`
                                <div class="compose-model-popup-actions">
                                    ${F$&&U`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn primary${K0.findIndex((w)=>w.key==="action:new")===T0?" active":""}`}
                                            onClick=${()=>{o1()}}
                                            title="Create a new branch from this chat"
                                        >
                                            New branch
                                        </button>
                                    `}
                                    ${U4&&U`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${K0.findIndex((w)=>w.key==="action:new-root")===T0?" active":""}`}
                                            onClick=${()=>{G_()}}
                                            title="Create a clean root session such as web:ops"
                                        >
                                            New root…
                                        </button>
                                    `}
                                    ${L_?.chat_jid&&U`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${K0.findIndex((w)=>w.key==="action:rollup")===T0?" active":""}`}
                                            onClick=${()=>{g$()}}
                                            title=${b$?`Merge this branch into ${L_.agent_name?`@${L_.agent_name}`:L_.chat_jid}`:"This branch cannot be merged while active or while it has children"}
                                            disabled=${!b$}
                                        >
                                            Merge current w/ parent
                                        </button>
                                    `}
                                    ${B$&&U`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${K0.findIndex((w)=>w.key==="action:rename")===T0?" active":""}`}
                                            onClick=${(w)=>{a0(w)}}
                                            title="Rename the current session"
                                            disabled=${N$}
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${P_&&U`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn danger${K0.findIndex((w)=>w.key==="action:delete")===T0?" active":""}`}
                                            onClick=${()=>{W3()}}
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
                <div class="compose-footer" ref=${x$}>
                    ${p_.show&&U`
                        <span class="compose-connection-status connection-status ${p_.statusClass}" title=${c5}>
                            ${n1}
                        </span>
                    `}
                    ${H3&&U`
                    <div class="compose-meta-row">
                        ${h5&&U`
                            <div class="compose-model-meta">
                                <button
                                    ref=${m_}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${_2}
                                    aria-label="Open model picker"
                                    onClick=${WD}
                                    disabled=${H0}
                                >
                                    ${H0?"Switching…":l5}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!H0&&e6&&U`
                                        <span class="compose-model-usage-hint" title=${_2}>
                                            ${e6}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                        ${!j&&I&&I.percent!=null&&U`
                            <${yA}
                                usage=${I}
                                onCompact=${OD}
                                compactionLabel=${k_?B4||"0:00":""}
                                compactionTitle=${k_?i4||"Smart compaction":""}
                            />
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${j&&U`
                        <label class="compose-search-scope-wrap" title="Search scope">
                            <span class="compose-search-scope-label">Scope</span>
                            <select
                                class="compose-search-scope-select"
                                value=${Z}
                                onChange=${(w)=>G?.(w.currentTarget.value)}
                            >
                                <option value="current">Current</option>
                                <option value="root">Branch family</option>
                                <option value="all">All chats</option>
                            </select>
                        </label>
                        <label class="compose-search-filter-wrap" title="Only show messages with images">
                            <input type="checkbox" checked=${J0} onChange=${()=>z1((w)=>!w)} />
                            <span class="compose-search-filter-label">Images</span>
                        </label>
                        <label class="compose-search-filter-wrap" title="Only show messages with attachments">
                            <input type="checkbox" checked=${G1} onChange=${()=>J1((w)=>!w)} />
                            <span class="compose-search-filter-label">Attachments</span>
                        </label>
                        <button
                            class=${`compose-search-match-toggle ${F0==="and"?"active":""}`}
                            onClick=${()=>{let w=F0==="or"?"and":"or";R0(w),fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({searchMatchMode:w})}).catch((p)=>{})}}
                            title=${F0==="or"?"Any keyword (OR) — click for all keywords (AND)":"All keywords (AND) — click for any keyword (OR)"}
                            type="button"
                        >
                            ${F0==="or"?"OR":"AND"}
                        </button>
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${j?Q:q}
                        title=${j?"Close search":"Search"}
                    >
                        ${j?U`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 6L6 18M6 6l12 12"/>
                            </svg>
                        `:U`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"/>
                                <path d="M21 21l-4.35-4.35"/>
                            </svg>
                        `}
                    </button>
                    ${f$&&!j&&U`
                        <button
                            class="icon-btn location-btn"
                            onClick=${fD}
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
                    ${Y4&&U`
                        <button
                            class=${`icon-btn voice-input-btn${__?" active":""}${W1.mode==="fallback"?" fallback":""}`}
                            onClick=${DD}
                            onPointerDown=${UD}
                            onPointerUp=${E3}
                            onPointerCancel=${E3}
                            onPointerLeave=${E3}
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
                    ${m5&&!j&&U`
                        <button
                            class=${`icon-btn notification-btn${l_?" active":""}`}
                            onClick=${T}
                            title=${s4}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&U`
                        ${P&&f&&U`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${f}
                                title=${`Attach open file: ${P}`}
                                type="button"
                                disabled=${K.includes(P)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach file">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" multiple hidden onChange=${kD} />
                        </label>
                    `}
                    ${!j&&U`
                        <div class="compose-send-stack">
                                <button 
                                    class=${a4.className}
                                    data-testid="send-button"
                                    type="button"
                                    onClick=${()=>{e4()}}
                                    disabled=${a4.disabled}
                                    title=${a4.title}
                                    aria-label=${a4.ariaLabel}
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                                </button>
                                ${r_&&U`
                                    <button 
                                        class=${r_.className}
                                        data-testid="stop-button"
                                        type="button"
                                        onClick=${()=>{if(kA(r_.mode))e4("/abort","steer",{clearAfterSubmit:!1,includeMedia:!1,includeFileRefs:!1,includeFolderRefs:!1,includeMessageRefs:!1,recordHistory:!1})}}
                                        disabled=${r_.disabled}
                                        title=${r_.title}
                                        aria-label=${r_.ariaLabel}
                                    >
                                        ${r_.mode==="compacting"?U`
                                                <span class="compose-submit-spinner" aria-hidden="true">
                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                                        <circle class="compose-submit-spinner-ring" cx="12" cy="12" r="10.5" stroke-width="2.25" stroke-linecap="round"></circle>
                                                        <rect class="compose-submit-spinner-stop" x="6" y="6" width="12" height="12" rx="0" fill="currentColor"></rect>
                                                    </svg>
                                                </span>
                                            `:U`<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="4" width="16" height="16" rx="2.5"/></svg>`}
                                    </button>
                                `}
                        </div>
                    `}
                </div>
            </div>
        </div>
        </div>
    `}M0();function mV({kind:_="hidden",onSetupProvider:$,onDismiss:j}){if(_==="hidden")return null;let Z=_==="provider-missing",X=Z?"Instance needs setup":"Instance is configured",G=Z?"This instance is not yet configured. Open Settings and set up AI providers/models to start sending requests.":"This instance looks configured. Review or update provider and model settings in Settings.";return U`
    <section class=${`oobe-panel oobe-panel-${_}`} aria-label="Getting started">
      <div class="oobe-panel-copy">
        <div class="oobe-panel-eyebrow">Getting started</div>
        <h2 class="oobe-panel-title">${X}</h2>
        <p class="oobe-panel-body">${G}</p>
      </div>
      <div class="oobe-panel-actions">
        <button type="button" class="oobe-panel-btn oobe-panel-btn-primary" onClick=${()=>$?.()}>
          Open Settings
        </button>
        <button type="button" class="oobe-panel-btn" onClick=${()=>j?.()}>
          ${Z?"Dismiss":"Done"}
        </button>
      </div>
    </section>
  `}M0();function cV(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function hV(_){return String(_||"").trim()||"web:default"}function lV(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function pV(_){if(!_)return!1;return _.status!=="running"}function rV(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function nV({session:_,onClose:$,onInject:j,onRetry:Z}){let X=g(null),G=g(null),q=_?.thinking?q6(_.thinking):"",Q=_?.answer?V_(_.answer,null):"";if(b(()=>{if(X.current&&q)A$(X.current).catch((z)=>{console.debug("[btw-panel] Mermaid rendering failed for BTW thinking content.",z)})},[q]),b(()=>{if(G.current&&Q)A$(G.current).catch((z)=>{console.debug("[btw-panel] Mermaid rendering failed for BTW answer content.",z)})},[Q]),!_)return null;let K=_.status==="running",V=Boolean(String(_.answer||"").trim()),Y=Boolean(String(_.thinking||"").trim()),N=lV(_),F=pV(_),B=!K&&V,D=K?"Thinking…":_.status==="error"?"Error":"Done";return U`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">Question</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${D}</span>
                </div>
                <button class="btw-panel-close" onClick=${()=>$?.()} title="Close BTW" aria-label="Close BTW">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>

            ${_.question&&U`<div class="btw-block btw-question">${_.question}</div>`}
            ${_.error&&U`<div class="btw-block btw-error">${_.error}</div>`}
            ${Y&&U`
                <details class="btw-block btw-thinking" open=${K?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${X}
                        dangerouslySetInnerHTML=${{__html:q}}
                    ></div>
                </details>
            `}
            ${N&&U`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${G}
                        dangerouslySetInnerHTML=${{__html:Q}}
                    ></div>
                </div>
            `}

            ${F&&U`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&U`
                            <button class="btw-btn btw-btn-secondary" onClick=${()=>Z?.()}>
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
    `}M0();function Nj(_,$){try{if(_)_.name=$;return!0}catch(j){return!1}}function Bj(_,$){try{return _?.contentWindow?.postMessage?.($,"*"),!0}catch(j){return!1}}function hA(_){let $=_?.artifact||{},j=$.kind||_?.kind||null;if(j!=="html"&&j!=="svg"&&j!=="session_tree")return null;if(j==="html"){let X=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"";return X?{kind:j,html:X}:null}if(j==="svg"){let X=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"";return X?{kind:j,svg:X}:null}let Z=$.tree&&typeof $.tree==="object"?$.tree:_?.tree&&typeof _.tree==="object"?_.tree:null;return{kind:j,tree:Z}}function lA(_){let $=_?.artifact&&typeof _.artifact==="object"?_.artifact:{},j=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:typeof _?.w==="string"?_.w:typeof _?.content==="string"?_.content:"",X=$.tree&&typeof $.tree==="object"?$.tree:_?.tree&&typeof _.tree==="object"?_.tree:null,G=$.kind||_?.kind||null,q=G==="session_tree"?"session_tree":G==="svg"||j?"svg":"html";if(q==="session_tree")return{kind:q,tree:X};if(q==="svg")return j?{kind:q,svg:j}:{kind:q};return Z?{kind:q,html:Z}:{kind:q}}function _4(_){return typeof _==="number"&&Number.isFinite(_)?_:null}function X1(_){return typeof _==="string"&&_.trim()?_.trim():null}function oV(_,$=!1){let Z=(Array.isArray(_)?_:$?["interactive"]:[]).filter((X)=>typeof X==="string").map((X)=>X.trim().toLowerCase()).filter(Boolean);return Array.from(new Set(Z))}var iV="__PICLAW_WIDGET_HOST__:";function dV(_){return JSON.stringify(_).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function Fj(_,$){if(!_||_.type!=="generated_widget")return null;let j=hA(_);if(!j)return null;return{title:_.title||_.name||"Generated widget",subtitle:typeof _.subtitle==="string"?_.subtitle:"",description:_.description||_.subtitle||"",originPostId:Number.isFinite($?.id)?$.id:null,originChatJid:typeof $?.chat_jid==="string"?$.chat_jid:null,widgetId:_.widget_id||_.id||null,artifact:j,capabilities:oV(_.capabilities,_.interactive===!0),source:"timeline",status:"final"}}function sV(_){if(!_||typeof _!=="object")return null;let $=lA(_),j=X1(_?.widget_id)||X1(_?.widgetId)||X1(_?.tool_call_id)||X1(_?.toolCallId),Z=X1(_?.tool_call_id)||X1(_?.toolCallId),X=X1(_?.turn_id)||X1(_?.turnId),G=X1(_?.title)||X1(_?.name)||"Generated widget",q=X1(_?.subtitle)||"",Q=X1(_?.description)||q,K=X1(_?.status),V=K==="loading"||K==="streaming"||K==="final"||K==="error"?K:"streaming";return{title:G,subtitle:q,description:Q,originPostId:_4(_?.origin_post_id)??_4(_?.originPostId),originChatJid:X1(_?.origin_chat_jid)||X1(_?.originChatJid)||X1(_?.chat_jid)||null,widgetId:j,artifact:$,capabilities:oV(_?.capabilities,!0),source:"live",status:V,turnId:X,toolCallId:Z,width:_4(_?.width),height:_4(_?.height),error:X1(_?.error)}}function aV(_){return Fj(_,null)!==null}function W_(_){let $=X1(_?.toolCallId)||X1(_?.tool_call_id);if($)return $;let j=X1(_?.widgetId)||X1(_?.widget_id);if(j)return j;let Z=_4(_?.originPostId)??_4(_?.origin_post_id);if(Z!==null)return`post:${Z}`;return null}function tV(_){let j=(_?.artifact||{}).kind||_?.kind||null,X=(Array.isArray(_?.capabilities)?_.capabilities:[]).some((G)=>typeof G==="string"&&G.trim().toLowerCase()==="interactive");return j==="html"&&(_?.source==="live"||X)}function eV(_){return tV(_)?"allow-downloads allow-scripts allow-same-origin allow-forms":"allow-downloads"}function J8(_){return{title:X1(_?.title)||"Generated widget",widgetId:X1(_?.widgetId)||X1(_?.widget_id),toolCallId:X1(_?.toolCallId)||X1(_?.tool_call_id),turnId:X1(_?.turnId)||X1(_?.turn_id),capabilities:Array.isArray(_?.capabilities)?_.capabilities:[],source:_?.source==="live"?"live":"timeline",status:X1(_?.status)||"final"}}function E8(_){return{...J8(_),subtitle:X1(_?.subtitle)||"",description:X1(_?.description)||"",error:X1(_?.error)||null,width:_4(_?.width),height:_4(_?.height),runtimeState:_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null}}function A8(_){return`${iV}${JSON.stringify(E8(_))}`}function _K(_){if(typeof _==="string"&&_.trim())return _.trim();if(!_||typeof _!=="object")return null;let $=X1(_.text)||X1(_.content)||X1(_.message)||X1(_.prompt)||X1(_.value);if($)return $;let j=_.data;if(typeof j==="string"&&j.trim())return j.trim();if(j&&typeof j==="object"){let Z=X1(j.text)||X1(j.content)||X1(j.message)||X1(j.prompt)||X1(j.value);if(Z)return Z}return null}function $K(_){if(!_||typeof _!=="object")return!1;return _.close===!0||_.dismiss===!0||_.closeAfterSubmit===!0}function jK(_){let $=X1(_?.status);if($==="loading"||$==="streaming")return"Widget is loading…";if($==="error")return X1(_?.error)||"Widget failed to load.";if((_?.artifact?.kind||_?.kind)==="session_tree")return"Session tree widget is unavailable.";return"Widget artifact is missing or unsupported."}function pA(_){let $=J8(_);return`<script>
(function () {
  const meta = ${dV($)};
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

  const windowNamePrefix = ${dV(iV)};
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
</script>`}function ZK(_){let $=_?.artifact||{},j=$.kind||_?.kind||null,Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"",X=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",G=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",q=j==="svg"?X:Z;if(!q)return"";let Q=tV(_),K=["default-src 'none'","img-src data: blob: https: http:","style-src 'unsafe-inline'","font-src 'self' data: https: http:","media-src data: blob: https: http:","connect-src 'none'","frame-src 'none'",Q?"script-src 'unsafe-inline' 'self'":"script-src 'none'","object-src 'none'","base-uri 'none'","form-action 'none'"].join("; "),V=j==="svg"?`<div class="widget-svg-shell">${q}</div>`:q,Y=Q?pA(_):"";return`<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta http-equiv="Content-Security-Policy" content="${K}" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${G.replace(/[<&>]/g,"")}</title>
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
${Y}
</head>
<body>${V}</body>
</html>`}M0();function rA(_){let $=new Map,j=[];for(let q of _||[])$.set(q.id,{...q,children:[],depth:0});for(let q of _||[]){let Q=$.get(q.id);if(!Q)continue;let K=q.parentId?$.get(q.parentId):null;if(K)K.children.push(Q);else j.push(Q)}let Z=new Set;for(let[,q]of $){if(q.role!=="assistant"||!q.toolName)continue;if(q.children.length!==1)continue;let Q=q.children[0];if(Q.role!=="toolResult")continue;q.resultDetail=Q.detail||null,q.resultLength=Q.contentLength||0,q.resultId=Q.id,q.merged=!0,q.children=Q.children;for(let K of q.children)K.parentId=q.id;Z.add(Q.id)}let X=j.filter((q)=>!Z.has(q.id)),G=[];for(let q=X.length-1;q>=0;q--)X[q].depth=0,G.push(X[q]);while(G.length>0){let q=G.pop(),Q=q.children.length>1;for(let K=q.children.length-1;K>=0;K--)q.children[K].depth=Q?q.depth+1:q.depth,G.push(q.children[K])}return X}function nA(_){let $=[],j=[];for(let Z=_.length-1;Z>=0;Z--)j.push(_[Z]);while(j.length>0){let Z=j.pop();$.push(Z);for(let X=Z.children.length-1;X>=0;X--)j.push(Z.children[X])}return $}function XK(_){if(!_||_<=0)return"";if(_<1000)return`${_}`;if(_<1e6)return`${(_/1000).toFixed(1)}k`;return`${(_/1e6).toFixed(1)}M`}function k5(_){if(!_||_<=0)return"";if(_<1000)return`${_} chars`;if(_<1e6)return`${(_/1000).toFixed(1)}k chars`;return`${(_/1e6).toFixed(1)}M chars`}function dA(_){let $=_.type;if($==="model_change")return{tag:"model",tagClass:"system",text:`${_.preview?.replace("[model ","").replace("]","")||""}`};if($==="thinking_level_change")return{tag:"thinking",tagClass:"system",text:_.preview?.replace("[thinking ","").replace("]","")||""};if($==="compaction")return{tag:"compaction",tagClass:"system",text:_.preview?.replace("[compaction: ","").replace("]","")||""};if($==="label")return{tag:"label",tagClass:"system",text:_.preview?.replace("[label ","").replace("]","")||""};if($==="session_info")return{tag:"session",tagClass:"system",text:_.preview?.replace("[session name ","").replace("]","")||""};if($==="branch_summary")return{tag:"summary",tagClass:"system",text:_.preview||""};if($!=="message")return{tag:$||"?",tagClass:"system",text:_.preview||""};let j=_.role||"message";if(_.merged&&_.toolName){let X=(_.toolInput||"").split(`
`)[0],G=X.length>120?X.slice(0,119)+"…":X;return{tag:_.toolName,tagClass:"tool",text:G||""}}if(j==="assistant"&&_.toolName){let X=(_.toolInput||"").split(`
`)[0],G=X.length>120?X.slice(0,119)+"…":X;return{tag:_.toolName,tagClass:"tool",text:G||"…"}}if(j==="toolResult"){let X=(_.detail||"").split(`
`)[0],G=X.length>120?X.slice(0,119)+"…":X;return{tag:`→ ${_.toolName||"result"}`,tagClass:"result",text:G}}if(j==="user"){let G=(_.previewText||_.detail||_.preview||"").replace(/^user:\s*"?/,"").replace(/"?\s*$/,"").split(`
`)[0];return{tag:"user",tagClass:"user",text:G.length>120?G.slice(0,119)+"…":G}}if(j==="assistant"){let G=(_.detail||_.preview||"").replace(/^assistant:\s*"?/,"").replace(/"?\s*$/,"").split(`
`)[0];return{tag:"assistant",tagClass:"assistant",text:G.length>120?G.slice(0,119)+"…":G}}return{tag:j,tagClass:"other",text:_.preview||""}}function oA(_,$=!1){let j=typeof _==="string"?_.trim():"";if(!j)return null;return{text:$?`/tree ${j} --summarize`:`/tree ${j}`,navigateTargetId:j,summarize:Boolean($)}}function GK(_){let $=typeof _==="string"?_.trim():"";if(!$.startsWith("/tree"))return null;let j=$.split(/\s+/).filter(Boolean);if(j[0]!=="/tree")return null;let Z=null,X=!1;for(let G=1;G<j.length;G++){let q=j[G];if(q==="--summarize"){X=!0;continue}if(!Z&&!q.startsWith("--"))Z=q}return Z?{targetId:Z,summarize:X}:null}function iA(_,$,j,Z){let X=Array.isArray(_)?_:[];if(X.length===0)return null;let G=(Q)=>typeof Q==="string"&&X.some((K)=>K?.id===Q);if(G($))return $;if(G(j))return j;if(G(Z))return Z;let q=X.find((Q)=>Q?.active);if(q?.id)return q.id;return X[0]?.id||null}function sA(_){if(!_||typeof _!=="object")return null;let $=typeof _.type==="string"?_.type:"",j=typeof _.preview==="string"?_.preview.trim():"",Z=typeof _.error==="string"?_.error.trim():"",X=GK(j),G=j||"tree command";if($==="submit_pending")return{tone:"pending",text:X?`Sending ${G}`:"Sending tree command…",refreshDelays:[]};if($==="submit_sent")return{tone:"info",text:X?`Running ${G}`:"Tree command sent.",refreshDelays:X?[500,1500,3500,8000]:[]};if($==="submit_queued")return{tone:"info",text:X?`Queued ${G}`:"Tree command queued.",refreshDelays:X?[1200,3200,7000,12000]:[]};if($==="submit_failed")return{tone:"error",text:Z?`Tree command failed: ${Z}`:"Tree command failed.",refreshDelays:[]};if($==="refresh_building")return{tone:"pending",text:"Refreshing widget…",refreshDelays:[]};if($==="refresh_failed")return{tone:"error",text:Z?`Refresh failed: ${Z}`:"Refresh failed.",refreshDelays:[]};if($==="refresh_dashboard"||$==="refresh_ack")return{tone:"success",text:"Widget refreshed.",refreshDelays:[]};return null}function qK({widget:_,onWidgetEvent:$}){let j=_?.artifact?.tree&&typeof _.artifact.tree==="object"?_.artifact.tree:null,Z=typeof _?.originChatJid==="string"&&_.originChatJid.trim()?_.originChatJid.trim():null,X=_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null,G=X?.lastHostUpdate&&typeof X.lastHostUpdate==="object"?X.lastHostUpdate:null,[q,Q]=C(()=>({loading:!j,error:null,data:j})),[K,V]=C(()=>j?.leafId||null),[Y,N]=C(""),F=g(null),B=g(null),D=g(j?.leafId||null),z=g(null),H=g(""),W=async()=>{Q((k)=>({...k,loading:!0,error:null}));try{let k=Z?`?chat_jid=${encodeURIComponent(Z)}`:"",O=await fetch(`/agent/session-tree${k}`,{method:"GET",credentials:"same-origin",headers:{Accept:"application/json"}}),T=await O.json().catch(()=>({}));if(!O.ok)throw Error(T?.error||`HTTP ${O.status}`);Q({loading:!1,error:null,data:T})}catch(k){Q((O)=>({loading:!1,error:k?.message||"Failed to load tree.",data:O?.data||j||null}))}};z.current=W,b(()=>{W()},[Z]);let M=G0(()=>{let k=q.data;if(!k||!Array.isArray(k.nodes)||k.nodes.length===0)return[];return nA(k.flat?rA(k.nodes):k.nodes)},[q.data]);b(()=>{let k=iA(M,K,D.current,q.data?.leafId||null);if(k!==K)V(k);if(D.current&&q.data?.leafId===D.current)D.current=null},[M,K,q.data?.leafId]);let E=G0(()=>{let k=(Y||"").trim().toLowerCase();if(!k)return M;return M.filter((O)=>{return[O.preview,O.toolInput,O.toolInputFull,O.detail,O.toolName,O.role,O.id,O.resultDetail,O.type,O.label].some((y)=>typeof y==="string"&&y.toLowerCase().includes(k))})},[M,Y]),L=G0(()=>E.find((k)=>k.id===K)||null,[E,K]),x=G0(()=>sA(G),[G?.type,G?.preview,G?.error,G?.submittedAt]);b(()=>{if(B.current)B.current.scrollIntoView({block:"center",behavior:"auto"})},[K,q.data?.leafId,E.length]),b(()=>{let k=GK(G?.preview);if(k?.targetId)D.current=k.targetId;let O=x?.refreshDelays||[];if(!O.length)return;let T=[Z||"",G?.type||"",G?.submittedAt||"",G?.preview||""].join("|");if(H.current===T)return;H.current=T;let y=O.map((A)=>setTimeout(()=>z.current?.(),A));return()=>y.forEach((A)=>clearTimeout(A))},[Z,G?.type,G?.submittedAt,G?.preview,x?.refreshDelays]);let I=(k=!1)=>{let O=L?.id,T=oA(O,k);if(!T)return;D.current=T.navigateTargetId,$?.({kind:"widget.submit",payload:T},_)},J=x?.tone||"info";return U`
        <div class="session-tree-widget">
            <div class="session-tree-toolbar">
                <div class="session-tree-toolbar-left">
                    <button class="session-tree-btn" type="button" onClick=${()=>W()} disabled=${q.loading}>${q.loading?"Loading…":"Refresh"}</button>
                    <input ref=${F}
                        class="st-search-input" type="text" placeholder="Filter\u2026"
                        value=${Y}
                        onInput=${(k)=>N(k.currentTarget.value)}
                        onKeyDown=${(k)=>{if(k.key==="Escape")N(""),k.currentTarget.blur()}}
                    />
                    ${Y&&U`<span class="session-tree-meta">${E.length} match${E.length!==1?"es":""}</span>`}
                    ${q.error&&U`<span class="session-tree-error-inline">${q.error}</span>`}
                </div>
                <div class="session-tree-toolbar-right">
                    ${x?.text&&U`<span class=${`session-tree-host-update ${J}`}>${x.text}</span>`}
                    ${q.data?.capped&&U`<span class="session-tree-meta">Showing ${q.data?.nodes?.length||0} of ${q.data?.total||0}</span>`}
                    ${Z&&U`<span class="session-tree-meta">${Z}</span>`}
                </div>
            </div>

            <div class="session-tree-content">
                <div class="session-tree-list" role="tree" aria-label="Session tree">
                    ${q.loading&&E.length===0&&!Y&&U`<div class="session-tree-empty">Loading session tree\u2026</div>`}
                    ${!q.loading&&E.length===0&&!Y&&U`<div class="session-tree-empty">Session tree is empty.</div>`}
                    ${!q.loading&&E.length===0&&Y&&U`<div class="session-tree-empty">No entries match \u201c${Y}\u201d</div>`}
                    ${E.map((k)=>{let O=K===k.id,T=`st-row${k.active?" active":""}${O?" selected":""}`,y=(k.children||[]).length>1,A=dA(k);return U`
                            <button key=${k.id} ref=${k.active||O?B:null}
                                class=${T} type="button" role="treeitem" aria-selected=${O}
                                onClick=${()=>V(k.id)}>
                                <span class="st-indent" style=${`width:${(k.depth||0)*16+6}px`}></span>
                                <span class=${`st-dot${k.active?" active":y?" branch":""}`}></span>
                                <span class=${`st-tag ${A.tagClass}`}>${A.tag}</span>
                                <span class="st-text">${A.text}</span>
                                ${k.merged&&k.resultLength>0&&U`<span class="st-size">${XK(k.resultLength)}</span>`}
                                ${!k.merged&&k.contentLength>3000&&U`<span class="st-size">${XK(k.contentLength)}</span>`}
                                ${k.hasThinking&&U`<span class="st-badge thinking">\u{1F4AD}</span>`}
                                ${k.label&&U`<span class="st-label">${k.label}</span>`}
                                ${k.active&&U`<span class="st-active">\u25C0</span>`}
                            </button>
                        `})}
                </div>

                <aside class="session-tree-sidebar">
                    ${L?U`
                        <div class="st-side-section">
                            <div class="st-side-label">Entry</div>
                            <div class="st-side-mono">${L.id}${L.resultId?` → ${L.resultId}`:""}</div>
                        </div>
                        <div class="st-side-section">
                            <div class="st-side-label">Type</div>
                            <div class="st-side-value">${L.role||L.type||"entry"}${L.toolName?` → ${L.toolName}`:""}${L.merged?" (merged)":""}</div>
                        </div>
                        ${L.toolInputFull&&U`
                            <div class="st-side-section">
                                <div class="st-side-label">${L.toolName==="bash"?"Command":"Input"}</div>
                                <pre class="st-side-code">${L.toolInputFull}</pre>
                            </div>
                        `}
                        ${L.resultDetail&&U`
                            <div class="st-side-section">
                                <div class="st-side-label">Result${L.resultLength?` (${k5(L.resultLength)})`:""}</div>
                                <pre class="st-side-code">${L.resultDetail}</pre>
                            </div>
                        `}
                        ${L.detail&&!L.toolInput&&U`
                            <div class="st-side-section">
                                <div class="st-side-label">${L.role==="toolResult"?"Output":"Content"}${L.contentLength?` (${k5(L.contentLength)})`:""}</div>
                                <pre class="st-side-code">${L.detail}</pre>
                            </div>
                        `}
                        ${L.rawDetail&&U`
                            <div class="st-side-section">
                                <div class="st-side-label">Raw prompt${L.rawContentLength?` (${k5(L.rawContentLength)})`:""}</div>
                                <pre class="st-side-code">${L.rawDetail}</pre>
                            </div>
                        `}
                        ${L.timestamp&&U`
                            <div class="st-side-section">
                                <div class="st-side-label">Time</div>
                                <div class="st-side-value">${new Date(L.timestamp).toLocaleString()}</div>
                            </div>
                        `}
                        ${(L.contentLength>0||L.hasThinking)&&U`
                            <div class="st-side-section">
                                <div class="st-side-label">Size</div>
                                <div class="st-side-badges">
                                    ${L.contentLength>0&&U`<span class="st-pill">${k5(L.contentLength)} content</span>`}
                                    ${L.hasThinking&&U`<span class="st-pill thinking">${k5(L.thinkingLength)} thinking</span>`}
                                    ${L.merged&&L.resultLength>0&&U`<span class="st-pill">${k5(L.resultLength)} result</span>`}
                                </div>
                            </div>
                        `}
                        <div class="st-side-actions">
                            <button class="session-tree-btn primary" type="button" onClick=${()=>I(!1)}>Navigate here</button>
                            <button class="session-tree-btn" type="button" onClick=${()=>I(!0)}>Navigate + summarize</button>
                        </div>
                    `:U`<div class="session-tree-empty side">Select an entry to inspect.</div>`}
                </aside>
            </div>
        </div>
    `}function aA(_=!1){return`floating-widget-backdrop${_?" maximized":""}`}function tA(_=!1){return`floating-widget-pane${_?" maximized":""}`}function QK({widget:_,onClose:$,onWidgetEvent:j}){let Z=g(null),X=g(!1),[G,q]=C(!1),Q=W_(_),K=G0(()=>ZK(_),[_?.artifact?.kind,_?.artifact?.html,_?.artifact?.svg,_?.widgetId,_?.toolCallId,_?.turnId,_?.title]);if(b(()=>{q(!1)},[Q]),b(()=>{if(!_)return;let L=(x)=>{if(x.key!=="Escape")return;if(G){q(!1);return}$?.()};return document.addEventListener("keydown",L),()=>document.removeEventListener("keydown",L)},[G,_,$]),b(()=>{X.current=!1},[K]),b(()=>{if(!_)return;let L=Z.current;if(!L)return;let x=(T)=>{let y=A8(_),A=T==="widget.init"?J8(_):E8(_);Nj(L,y),Bj(L,{__piclawGeneratedWidgetHost:!0,type:T,widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:A})},I=()=>{x("widget.init"),x("widget.update")},J=()=>{X.current=!0,I()};L.addEventListener("load",J);let O=[0,40,120,300,800].map((T)=>setTimeout(I,T));return()=>{L.removeEventListener("load",J),O.forEach((T)=>clearTimeout(T))}},[K,_?.widgetId,_?.toolCallId,_?.turnId]),b(()=>{if(!_)return;let L=Z.current;if(!L?.contentWindow)return;let x=A8(_),I=E8(_);Nj(L,x),Bj(L,{__piclawGeneratedWidgetHost:!0,type:"widget.update",widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:I});return},[_?.widgetId,_?.toolCallId,_?.turnId,_?.status,_?.subtitle,_?.description,_?.error,_?.width,_?.height,_?.runtimeState]),b(()=>{if(!_)return;let L=(x)=>{let I=x?.data;if(!I||I.__piclawGeneratedWidget!==!0)return;let J=Z.current,k=W_(_),O=W_({widgetId:I.widgetId,toolCallId:I.toolCallId});if(O&&k&&O!==k)return;if(!O&&J?.contentWindow&&x.source!==J.contentWindow)return;j?.(I,_)};return window.addEventListener("message",L),()=>window.removeEventListener("message",L)},[_,j]),!_)return null;let Y=(_?.artifact||{}).kind||_?.kind||"html",N=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",F=typeof _?.subtitle==="string"&&_.subtitle.trim()?_.subtitle.trim():"",B=_?.source==="live"?"live":"timeline",D=typeof _?.status==="string"&&_.status.trim()?_.status.trim():"final",z=B==="live"?`Live widget • ${D.toUpperCase()}`:_?.originPostId?`Message #${_.originPostId}`:"Timeline launch",H=typeof _?.description==="string"&&_.description.trim()?_.description.trim():"",W=!K,M=jK(_),E=eV(_);return U`
        <div class=${aA(G)} onClick=${()=>$?.()}>
            <section
                class=${tA(G)}
                aria-label=${N}
                onClick=${(L)=>L.stopPropagation()}
            >
                <div class="floating-widget-header">
                    <div class="floating-widget-heading">
                        <div class="floating-widget-eyebrow">${z} • ${Y.toUpperCase()}</div>
                        <div class="floating-widget-title">${N}</div>
                        ${(F||H)&&U`
                            <div class="floating-widget-subtitle">${F||H}</div>
                        `}
                    </div>
                    <div class="floating-widget-header-actions">
                        <button
                            class="floating-widget-action floating-widget-maximize"
                            type="button"
                            onClick=${()=>q((L)=>!L)}
                            title=${G?"Exit zen mode":"Enter zen mode"}
                            aria-label=${G?"Exit zen mode":"Enter zen mode"}
                            aria-pressed=${G?"true":"false"}
                        >
                            ${G?"Restore":"Maximize"}
                        </button>
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
                </div>
                <div class="floating-widget-body">
                    ${Y==="session_tree"?U`<${qK} widget=${_} onWidgetEvent=${j} />`:W?U`<div class="floating-widget-empty">${M}</div>`:U`
                                <iframe
                                    ref=${Z}
                                    class="floating-widget-frame"
                                    title=${N}
                                    name=${A8(_)}
                                    sandbox=${E}
                                    allow="microphone; clipboard-read; clipboard-write"
                                    referrerpolicy="no-referrer"
                                    srcdoc=${K}
                                ></iframe>
                            `}
                </div>
            </section>
        </div>
    `}M0();e2();y1();L5();var eA=new Set,VK=new Set,Uj=new Set,g4=new Map,KK=!1,M8=null;function _M(_=typeof window<"u"?window:null){let $=typeof _?.__piclawCurrentChatJid==="string"?_.__piclawCurrentChatJid.trim():"";if($)return $;try{let j=_?.location?.href||"http://localhost/",Z=new URL(j).searchParams.get("chat_jid")?.trim()||"";if(Z)return Z}catch(j){}return"web:default"}function $M(_,$){let j=typeof _==="string"?_.trim():"";if(!j)return null;try{return new URL(j,$).href}catch{return null}}function YK(_){if(!_||typeof _.id!=="string"||!_.id.trim())return!1;return Y1.register(_),eA.add(_.id),!0}function jM(_){return YK(_)}function ZM(_){if(!_||typeof _.id!=="string"||!_.id.trim())return()=>{};return i$(_),VK.add(_.id),T9(),()=>{_Q(_.id),VK.delete(_.id),T9()}}function XM(_){if(typeof _!=="function")return()=>{};return Uj.add(_),()=>{Uj.delete(_)}}function NK(_,$={}){let j=typeof _==="string"?_.trim():"";if(!j)return null;for(let Z of[...Uj].reverse())try{let X=Z(j,$);if(typeof X==="string"&&X.trim())return X.trim()}catch(X){console.warn("[addon-web] standalone tab URL resolver failed:",X)}return null}function GM(_){if(!_||typeof _.id!=="string"||!_.id.trim()||typeof _.match!=="function"||typeof _.buildFrameUrl!=="function")return()=>{};return g4.set(_.id,_),()=>{if(g4.get(_.id)===_)g4.delete(_.id)}}function k8(_,$){for(let j of Array.from(g4.values()).reverse())try{if(j.match(_,$))return j}catch(Z){console.warn("[addon-web] attachment preview matcher failed:",Z)}return null}function BK(_){let $=typeof _==="string"?_.trim():"";if(!$)return null;return g4.get($)?.label||null}function FK(_){let $=typeof _==="string"?_.trim():"";if(!$)return null;return g4.get($)?.note||null}function UK(_,$,j){let Z=typeof _==="string"?_.trim():"";if(!Z)return null;let X=g4.get(Z);if(!X)return null;try{return X.buildFrameUrl($,j)||null}catch(G){return console.warn("[addon-web] attachment preview URL builder failed:",G),null}}function qM(_=typeof window<"u"?window:null){return{registerPane:jM,registerWorkspacePane:YK,registerSettingsPane:ZM,registerStandaloneTabUrlResolver:XM,registerAttachmentPreview:GM,getCurrentChatJid:()=>_M(_)}}function Dj(_=typeof window<"u"?window:null){let $=qM(_);if(!_||KK)return $;return _.__piclaw_web=$,_.__piclaw_registerPane=$.registerPane,_.__piclaw_registerWorkspacePane=$.registerWorkspacePane,_.__piclaw_registerSettingsPane=$.registerSettingsPane,_.__piclaw_registerStandaloneTabUrlResolver=$.registerStandaloneTabUrlResolver,_.__piclaw_registerAttachmentPreview=$.registerAttachmentPreview,_.__piclawSettingsPaneRegistry={registerSettingsPane:$.registerSettingsPane,notifySettingsPanesChanged:()=>_?.dispatchEvent?.(new CustomEvent("piclaw:settings-panes-changed"))},KK=!0,$}async function DK(_=typeof window<"u"?window:null){if(!_)return;if(M8)return M8;return M8=(async()=>{Dj(_);try{let $=await fetch("/agent/addons/web-entries",{credentials:"same-origin"});if(!$.ok)return;let j=await $.json().catch(()=>null),Z=Array.isArray(j?.entries)?j.entries:[],X=_.location?.origin||"http://localhost";for(let G of Z){let q=$M(G?.url,X);if(!q)continue;try{await import(q)}catch(Q){console.warn("[addon-web] Failed to load installed addon web entry:",q,Q)}}}catch($){console.warn("[addon-web] Failed to fetch installed addon web entries:",$)}})(),M8}var QM=["\t",",",";","|"];function zK(_){return typeof _==="string"?_.trim().toLowerCase():""}function HK(_){return typeof _==="string"?_.split(";")[0]?.trim().toLowerCase()||"":""}function WK(_,$){let j=HK(_),Z=zK($);return j==="text/csv"||j==="application/csv"||j==="text/tab-separated-values"||j==="text/tsv"||Z.endsWith(".csv")||Z.endsWith(".tsv")||Z.endsWith(".tab")}function OK(_,$){let j=HK(_),Z=zK($);if(j==="text/tab-separated-values"||j==="text/tsv"||Z.endsWith(".tsv")||Z.endsWith(".tab"))return"\t";if(j==="text/csv"||j==="application/csv"||Z.endsWith(".csv"))return",";return null}function VM(_,$){let j=0,Z=!1;for(let X=0;X<_.length;X+=1){let G=_[X];if(G==='"')if(Z&&_[X+1]==='"')X+=1;else Z=!Z;else if(!Z&&G===$)j+=1}return j}function KM(_){let $=_.split(/\r?\n/).map((Z)=>Z.trimEnd()).filter((Z)=>Z.trim().length>0).slice(0,10),j={delimiter:"\t",score:-1};for(let Z of QM){let X=$.map((K)=>VM(K,Z)).filter((K)=>K>0);if(!X.length)continue;let G=X.reduce((K,V)=>K+V,0)/X.length,q=X.filter((K)=>Math.abs(K-G)<1).length/X.length,Q=G*q*X.length;if(Q>j.score)j={delimiter:Z,score:Q}}return j.delimiter}function YM(_,$,j){let Z=[],X=[],G="",q=!1,Q=!1,K=()=>{X.push(G),G=""},V=()=>{if(K(),!(X.length===1&&X[0]===""&&Z.length>0))Z.push(X);if(X=[],Z.length>=j)Q=!0};for(let Y=0;Y<_.length;Y+=1){if(Q)break;let N=_[Y];if(N==='"')if(q&&_[Y+1]==='"')G+='"',Y+=1;else q=!q;else if(!q&&N===$)K();else if(!q&&(N===`
`||N==="\r")){if(N==="\r"&&_[Y+1]===`
`)Y+=1;V()}else G+=N}if(!Q&&(G.length>0||X.length>0))V();return{rows:Z,truncatedRows:Q}}function NM(_,$){return _.map((j)=>{let Z=j.slice(0,$);while(Z.length<$)Z.push("");return Z})}function LK(_,$={}){let j=Math.max(1,$.maxRows??500),Z=Math.max(1,$.maxColumns??80),X=$.delimiter||KM(_),G=YM(_,X,j+1),q=G.rows.slice(0,j),Q=q.reduce((H,W)=>Math.max(H,W.length),0),K=Math.min(Math.max(1,Q),Z),V=Q>Z,Y=NM(q,K),N=Y[0]||[],F=Y.slice(1),B=N.some((H)=>H.trim().length>0)&&F.length>0,D=B?N.map((H,W)=>H.trim()||`Column ${W+1}`):Array.from({length:K},(H,W)=>`Column ${W+1}`),z=B?F:Y;return{delimiter:X,headers:D,rows:z,columnCount:K,rowCount:z.length,truncatedRows:G.truncatedRows||G.rows.length>j,truncatedColumns:V}}var BM=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/x-yaml","text/xml","text/yaml"]),FM=new Set(["text/markdown"]),UM=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),DM=new Set(["application/eml","message/rfc822"]);function $4(_){return typeof _==="string"?_.trim().toLowerCase():""}function zM(_){let $=$4(_);return!!$&&$.endsWith(".eml")}function HM(_){let $=$4(_);return!!$&&$.endsWith(".pdf")}function WM(_){let $=$4(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}var OM=new Set(["application/zip","application/x-zip-compressed"]);function LM(_){let $=$4(_);return!!$&&$.endsWith(".zip")}function JM(_){let $=$4(_);return!!$&&($.endsWith(".html")||$.endsWith(".htm"))}function EM(_){let $=$4(_);if(!$)return!1;return $.endsWith(".sh")||$.endsWith(".bash")||$.endsWith(".zsh")||$.endsWith(".sb")||$.endsWith(".yaml")||$.endsWith(".yml")}function P6(_,$){let j=k8(_,$);if(j?.id)return j.id;let Z=$4(_);if(HM($)||Z==="application/pdf")return"pdf";if(WM($)||UM.has(Z))return"office";if(zM($)||DM.has(Z))return"eml";if(LM($)||OM.has(Z))return"archive";if(JM($)||Z==="text/html")return"html";if(WK(Z,$))return"delimited";if(EM($))return"text";if(!Z)return"unsupported";if(Z.startsWith("video/"))return"video";if(Z.startsWith("image/"))return"image";if(BM.has(Z)||Z.startsWith("text/"))return"text";return"unsupported"}function JK(_){let $=$4(_);return FM.has($)}function T8(_){switch(_){case"image":return"Image preview";case"video":return"Video player";case"pdf":return"PDF preview";case"office":return"Office viewer";case"eml":return"Email preview";case"html":return"HTML preview";case"text":return"Text preview";case"delimited":return"Table preview";case"archive":return"ZIP archive preview";default:return BK(_)||"Preview unavailable"}}var AM=new TextDecoder("utf-8",{fatal:!1});function T5(_,$){return _[$]|_[$+1]<<8}function u4(_,$){return(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24)>>>0}function EK(_,$,j){return AM.decode(_.subarray($,$+j))}function MM(_){let $=Math.max(0,_.length-65557);for(let j=_.length-22;j>=$;j-=1)if(u4(_,j)===101010256)return j;return-1}function kM(_,$){let j=Math.max(0,$-20);for(let Z=j;Z<=$-4;Z+=1)if(u4(_,Z)===117853008)return!0;return!1}function TM(_){let $=new Set;for(let j of _){let Z=j.path.replace(/\/+/g,"/");if(!Z)continue;if(j.isDirectory){$.add(Z.endsWith("/")?Z.slice(0,-1):Z);continue}let X=Z.split("/").filter(Boolean);if(X.length<=1)continue;let G="";for(let q=0;q<X.length-1;q+=1)G=G?`${G}/${X[q]}`:X[q],$.add(G)}return $}function yM(_){return String(_||"").replace(/\\/g,"/").trim()}function AK(_){switch(Number(_)){case 0:return"Stored";case 8:return"Deflate";case 9:return"Deflate64";case 12:return"BZIP2";case 14:return"LZMA";case 93:return"Zstandard";default:return`Method ${_}`}}function MK(_){let $=_ instanceof Uint8Array?_:_ instanceof ArrayBuffer?new Uint8Array(_):new Uint8Array(_.buffer,_.byteOffset,_.byteLength);if($.length<22)throw Error("ZIP archive is too small to contain a valid directory.");let j=MM($);if(j<0)throw Error("ZIP archive directory could not be found.");if(kM($,j))throw Error("ZIP64 archives are not previewable yet.");let Z=T5($,j+10),X=u4($,j+12),G=u4($,j+16);if(G+X>$.length)throw Error("ZIP archive directory is truncated.");let q=[],Q=G,K=G+X;while(Q<K){if(Q+46>$.length)throw Error("ZIP archive directory entry is truncated.");if(u4($,Q)!==33639248)throw Error("ZIP archive directory contains an unexpected record.");let N=T5($,Q+8),F=T5($,Q+10),B=u4($,Q+20),D=u4($,Q+24),z=T5($,Q+28),H=T5($,Q+30),W=T5($,Q+32),M=Q+46,E=M+z+H,L=E+W;if(L>$.length)throw Error("ZIP archive directory entry metadata is truncated.");let x=(N&2048)===2048,I=yM(EK($,M,z)),J=EK($,E,W),k=I.endsWith("/");if(I)q.push({path:I,isDirectory:k,compressedSize:B,uncompressedSize:D,compressionMethod:F,comment:x?J:J});Q=L}q.sort((N,F)=>{if(N.isDirectory!==F.isDirectory)return N.isDirectory?-1:1;return N.path.localeCompare(F.path)});let V=q.filter((N)=>!N.isDirectory),Y=TM(q);return{entries:q,summary:{fileCount:V.length,directoryCount:Y.size,totalEntries:q.length,compressedBytes:V.reduce((N,F)=>N+F.compressedSize,0),uncompressedBytes:V.reduce((N,F)=>N+F.uncompressedSize,0)}}}function kK(_){if(!_)return null;if(_.uncompressedBytes<=0)return null;let $=1-_.compressedBytes/_.uncompressedBytes;if(!Number.isFinite($))return null;return`${Math.round($*100)}% smaller`}var wM="allow-scripts";function IM(_=!1){return`image-modal attachment-preview-modal${_?" maximized":""}`}function xM(_){if(!(_ instanceof Uint8Array)||_.length===0)return!0;let $=0,j=_.subarray(0,Math.min(_.length,4096));for(let Z of j){if(Z===0)return!1;if(Z<32&&Z!==9&&Z!==10&&Z!==13&&Z!==12)$+=1}return $/j.length<0.02}function CM(_,$){let j=String(_?.content_type||"").trim().toLowerCase(),Z=String($||"").trim().toLowerCase();if(j.startsWith("text/")||j==="application/json"||j==="application/xml")return!1;return j==="application/octet-stream"||Z.endsWith(".sb")||Z.endsWith(".sh")}function PM(_){try{return new TextDecoder("utf-8",{fatal:!1}).decode(_)}catch{return new TextDecoder().decode(_)}}function fM(_){if(_==="\t")return"Tab";if(_===",")return"Comma";if(_===";")return"Semicolon";if(_==="|")return"Pipe";return null}function RM(_,$=null,j=null,Z=null){let X=_?.metadata?.size,G=_?.content_type||"application/octet-stream",q=j?.summary||null;return[{label:"Type",value:G},{label:"Syntax",value:$},{label:"Delimiter",value:Z?fM(Z.delimiter):null},{label:"Rows",value:Z?`${Z.rowCount}${Z.truncatedRows?"+":""}`:null},{label:"Columns",value:Z?`${Z.columnCount}${Z.truncatedColumns?"+":""}`:null},{label:"Entries",value:q?String(q.totalEntries):null},{label:"Files",value:q?String(q.fileCount):null},{label:"Folders",value:q?String(q.directoryCount):null},{label:"Compressed",value:q?t1(q.compressedBytes):null},{label:"Uncompressed",value:q?t1(q.uncompressedBytes):null},{label:"Savings",value:kK(q)},{label:"Size",value:typeof X==="number"?t1(X):null},{label:"Added",value:_?.created_at?C4(_.created_at):null}].filter((Q)=>Q.value)}function SM(_,$){let j=String($||"").trim();if(j){let X=j6(j);if(X)return X}let Z=String(_?.content_type||"").trim().toLowerCase();if(Z==="application/json")return"json";if(Z==="text/yaml"||Z==="application/yaml"||Z==="text/x-yaml")return"yaml";if(Z==="application/xml"||Z==="text/xml")return"xml";if(Z==="text/html")return"html";if(Z==="text/css")return"css";if(Z==="text/javascript"||Z==="application/javascript")return"javascript";if(Z==="text/x-python"||Z==="application/x-python-code")return"python";return null}function bM(_,$,j){let Z=encodeURIComponent($||`attachment-${_}`),X=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${X}&name=${Z}#media=${X}&name=${Z}`;if(j==="office"){let G=v_(_);return`/office-viewer/?url=${encodeURIComponent(G)}&name=${Z}`}if(j==="eml")return`/eml-viewer/?media=${X}&name=${Z}`;return null}function TK({mediaId:_,info:$,onClose:j}){let Z=$?.filename||`attachment-${_}`,X=G0(()=>k8($?.content_type,Z),[$?.content_type,Z]),G=G0(()=>P6($?.content_type,Z),[$?.content_type,Z]),q=X?.label||T8(G),Q=G0(()=>JK($?.content_type),[$?.content_type]),[K,V]=C(G==="text"||G==="html"||G==="archive"||G==="delimited"),[Y,N]=C(""),[F,B]=C(null),[D,z]=C(null),[H,W]=C(null),[M,E]=C(!1),L=g(null),x=G0(()=>SM($,Z),[$,Z]),I=G0(()=>x?w2(x):null,[x]),J=G0(()=>RM($,!Q?I:null,F,D),[$,Q,I,F,D]),k=G0(()=>X?UK(X.id,_,Z):bM(_,Z,G),[X,_,Z,G]),O=G0(()=>FK(X?.id||G),[X?.id,G]),T=G0(()=>{if(!Q||!Y)return"";return V_(Y)},[Q,Y]),y=G0(()=>{if(Q||!Y||!x)return"";return x2(Y,x)},[Q,Y,x]);return b(()=>{let A=(P)=>{if(P.key!=="Escape")return;if(M){E(!1);return}j()};return document.addEventListener("keydown",A),()=>document.removeEventListener("keydown",A)},[M,j]),b(()=>{if(!L.current||!T)return;A$(L.current);return},[T]),b(()=>{let A=!1;async function P(){if(G!=="text"&&G!=="html"&&G!=="archive"&&G!=="delimited"){V(!1),W(null),N(""),B(null),z(null);return}V(!0),W(null),N(""),B(null),z(null);try{let f=await X9(_),u=new Uint8Array(await f.arrayBuffer());if(G==="text"||G==="html"||G==="delimited"){if(G==="text"&&CM($,Z)&&!xM(u))throw Error("Attachment does not appear to contain text content.");let r=PM(u);if(!A){if(N(r),G==="delimited")z(LK(r,{delimiter:OK($?.content_type,Z)}))}return}let c=MK(u);if(!A)B(c)}catch(f){if(!A){let u=f instanceof Error?f.message:String(f||"Unknown error");W(G==="archive"?`Failed to load ZIP preview. ${u}`:G==="delimited"?`Failed to load table preview. ${u}`:`Failed to load text preview. ${u}`)}}finally{if(!A)V(!1)}}return P(),()=>{A=!0}},[_,G,$?.content_type,Z]),U`
        <${o$} className="attachment-preview-portal-root">
            <div class=${IM(M)} onClick=${j}>
                <div class="attachment-preview-shell" onClick=${(A)=>{A.stopPropagation()}}>
                    <div class="attachment-preview-header">
                        <div class="attachment-preview-heading">
                            <div class="attachment-preview-title">${Z}</div>
                            <div class="attachment-preview-subtitle">${q}</div>
                        </div>
                        <div class="attachment-preview-header-actions">
                            <button
                                class="attachment-preview-zen"
                                type="button"
                                onClick=${()=>E((A)=>!A)}
                                title=${M?"Exit zen mode":"Enter zen mode"}
                                aria-label=${M?"Exit zen mode":"Enter zen mode"}
                                aria-pressed=${M?"true":"false"}
                            >
                                ${M?"Restore":"Maximize"}
                            </button>
                            ${k&&U`
                                <a
                                    href=${k}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="attachment-preview-download"
                                    onClick=${(A)=>A.stopPropagation()}
                                >
                                    Open in Tab
                                </a>
                            `}
                            <a
                                href=${v_(_)}
                                download=${Z}
                                class="attachment-preview-download"
                                onClick=${(A)=>A.stopPropagation()}
                            >
                                Download
                            </a>
                            <button class="attachment-preview-close" type="button" onClick=${j}>Close</button>
                        </div>
                    </div>
                    <div class="attachment-preview-body">
                        ${K&&U`<div class="attachment-preview-state">Loading preview…</div>`}
                        ${!K&&H&&U`<div class="attachment-preview-state">${H}</div>`}
                        ${!K&&!H&&G==="image"&&U`
                            <img class="attachment-preview-image" src=${v_(_)} alt=${Z} />
                        `}
                        ${!K&&!H&&G==="video"&&U`
                            <video class="attachment-preview-video" src=${v_(_)} controls autoplay style="max-width:100%;max-height:100%;" />
                        `}
                        ${!K&&!H&&G==="html"&&U`
                            <iframe class="attachment-preview-frame" srcdoc=${Y||""} sandbox=${wM} title=${Z}></iframe>
                        `}
                        ${!K&&!H&&(G==="pdf"||G==="office"||G==="eml"||Boolean(X))&&k&&U`
                            <iframe class="attachment-preview-frame" src=${k} title=${Z}></iframe>
                        `}
                        ${!K&&!H&&O&&U`
                            <div class="attachment-preview-readonly-note">${O}</div>
                        `}
                        ${!K&&!H&&G==="delimited"&&D&&U`
                            <div class="attachment-preview-delimited">
                                ${(D.truncatedRows||D.truncatedColumns)&&U`
                                    <div class="attachment-preview-delimited-note">
                                        Showing first ${D.rowCount} rows and ${D.columnCount} columns.
                                        Download the file for the complete dataset.
                                    </div>
                                `}
                                <div class="attachment-preview-delimited-table-wrap">
                                    <table class="attachment-preview-delimited-table">
                                        <thead>
                                            <tr>
                                                ${D.headers.map((A,P)=>U`
                                                    <th key=${`h-${P}`}>${A}</th>
                                                `)}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            ${D.rows.map((A,P)=>U`
                                                <tr key=${`r-${P}`}>
                                                    ${A.map((f,u)=>U`
                                                        <td key=${`c-${P}-${u}`}>${f}</td>
                                                    `)}
                                                </tr>
                                            `)}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        `}
                        ${!K&&!H&&G==="archive"&&F&&U`
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
                                        <strong class="attachment-preview-archive-card-value">${t1(F.summary.compressedBytes)}</strong>
                                    </div>
                                    <div class="attachment-preview-archive-card">
                                        <span class="attachment-preview-archive-card-label">Uncompressed</span>
                                        <strong class="attachment-preview-archive-card-value">${t1(F.summary.uncompressedBytes)}</strong>
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
                                            ${F.entries.map((A)=>U`
                                                <tr key=${A.path}>
                                                    <td class="attachment-preview-archive-name">${A.path}</td>
                                                    <td>${A.isDirectory?"Folder":"File"}</td>
                                                    <td>${A.isDirectory?"—":AK(A.compressionMethod)}</td>
                                                    <td>${A.isDirectory?"—":t1(A.compressedSize)}</td>
                                                    <td>${A.isDirectory?"—":t1(A.uncompressedSize)}</td>
                                                </tr>
                                            `)}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        `}
                        ${!K&&!H&&G==="text"&&Q&&U`
                            <div
                                ref=${L}
                                class="attachment-preview-markdown post-content"
                                dangerouslySetInnerHTML=${{__html:T}}
                            />
                        `}
                        ${!K&&!H&&G==="text"&&!Q&&y&&U`
                            <pre class="attachment-preview-text attachment-preview-code"><code dangerouslySetInnerHTML=${{__html:y}} /></pre>
                        `}
                        ${!K&&!H&&G==="text"&&!Q&&!y&&U`
                            <pre class="attachment-preview-text">${Y}</pre>
                        `}
                        ${!K&&!H&&G==="unsupported"&&U`
                            <div class="attachment-preview-state">
                                Preview is not available for this file type yet. You can still download it directly.
                            </div>
                        `}
                    </div>
                    <div class="attachment-preview-meta">
                        ${J.map((A)=>U`
                            <div class="attachment-preview-meta-item" key=${A.label}>
                                <span class="attachment-preview-meta-label">${A.label}</span>
                                <span class="attachment-preview-meta-value">${A.value}</span>
                            </div>
                        `)}
                    </div>
                </div>
            </div>
        </${o$}>
    `}M0();y1();q8();l9();function gM(_){if(!_||typeof _!=="object")return!1;if(_.isContentEditable)return!0;if(typeof _.closest!=="function")return!1;return Boolean(_.closest(["input","textarea","select",'[contenteditable="true"]',".compose-box",".compose-model-popup",".compose-session-popup",".settings-dialog",".workspace-sidebar",".workspace-explorer",".editor-pane-container",".dock-panel",".timeline-menu-dropdown",".rename-branch-overlay",".agent-request-modal",".attachment-preview-modal",".vnc-pane-shell",".kanban-plugin",".mindmap-editor"].join(", ")))}function uM(_){if(!_||typeof _!=="object")return!0;if(gM(_))return!1;let $=String(_.tagName||"").toUpperCase();if($==="BODY"||$==="HTML")return!0;if(typeof _.closest!=="function")return!0;return Boolean(_.closest(".container, .timeline, .post, .post-body, .post-content, .agent-status-panel"))}function vM(_){if(!I6(_))return!1;if(!uM(_?.target))return!1;return!s$.some((j)=>y$(_,j.id))}function yK(_){let $=new URL(window.location.href);if(_)$.searchParams.delete("chat_only");else $.searchParams.set("chat_only","1");window.location.href=$.toString()}function mM(_){let $=[],j=new Map(t$.map((X)=>[X.id,X])),Z=(X,G={})=>{let q=j.get(X);if(!q)return;$.push({...q,...G})};if(Z("toggle-workspace",{label:_.workspaceOpen?"Hide workspace":"Show workspace",description:_.workspaceOpen?"Hide the workspace sidebar.":"Show the workspace sidebar."}),!_.workspaceOpen&&!_.chatOnlyMode)Z("open-explorer");if(Z("toggle-chat-only",{label:_.chatOnlyMode?"Exit chat-only mode":"Chat-only mode",description:_.chatOnlyMode?"Return to the split workspace layout.":"Switch to the chat-only layout."}),typeof _.onOpenTerminalTab==="function")Z("open-terminal-tab");if(typeof _.onOpenVncTab==="function")Z("open-vnc-tab");if(typeof _.onToggleTerminalDock==="function")Z("toggle-terminal-dock",{label:_.terminalVisible?"Hide terminal dock":"Show terminal dock",description:_.terminalVisible?"Hide the terminal dock.":"Show the terminal dock."});return Z("open-settings"),$}function wK(_){if(_==="agent")return"Agents";if(_==="workspace")return"Workspace";return"Slash commands"}function cM(_){if(_?.imageUrl)return U`<img class="timeline-quick-actions-item-avatar" src=${_.imageUrl} alt="" aria-hidden="true" />`;return U`<span class="timeline-quick-actions-item-placeholder" aria-hidden="true">${_?.visualHint||""}</span>`}function y8(_,$){return U`
        <span class="timeline-quick-actions-keyhint">
            <kbd>${$}</kbd>
            <span>${_}</span>
        </span>
    `}function hM(_){let $=new URL(window.location.href);$.searchParams.set("chat_jid",_),$.searchParams.set("chat_only","1");let j=document.createElement("a");j.href=$.toString(),j.target="_blank",j.rel="noopener",j.style.display="none",document.body.appendChild(j),j.click(),j.remove()}function IK({activeChatAgents:_=[],currentChatJid:$="web:default",workspaceOpen:j=!1,chatOnlyMode:Z=!1,terminalVisible:X=!1,onSwitchChat:G,onToggleWorkspace:q,onOpenTerminalTab:Q,onOpenVncTab:K,onToggleTerminalDock:V,onPrefillCompose:Y}){let[N,F]=C(!1),[B,D]=C(""),[z,H]=C(0),[W,M]=C([]),[E,L]=C({workspaceCommands:null,slashCommands:null}),x=g(null),I=g(null),J=R(async()=>{try{let y=await F6();L(e$(y?.settings))}catch{L({workspaceCommands:null,slashCommands:null})}},[]);b(()=>{J()},[J]),b(()=>{let y=!1;return B6($).then((A)=>{if(y)return;M(Array.isArray(A?.commands)?A.commands:[])}).catch(()=>{if(y)return;M([])}),()=>{y=!0}},[$]);let k=G0(()=>mM({workspaceOpen:j,chatOnlyMode:Z,terminalVisible:X,onOpenTerminalTab:Q,onOpenVncTab:K,onToggleTerminalDock:V}),[Z,Q,K,V,X,j]),O=G0(()=>dQ({agents:_,workspaceCommands:k,slashCommands:W,settings:E,query:B}),[_,B,E,W,k]);if(b(()=>{if(O.length===0){H(-1);return}if(!B.trim()){H(0);return}let y=B.toLowerCase().replace(/^[@/]+/,"").trim();if(!y){H(0);return}let A=0,P=0;for(let f=0;f<O.length;f++){let u=O[f],c=(u.title||"").toLowerCase().replace(/^[@/]+/,"");if(c===y){A=f;break}let r=0;if(c.startsWith(y))r=3;else if(c.includes(y))r=2;else if((u.subtitle||"").toLowerCase().includes(y))r=1;if(r>P)P=r,A=f}H(A)},[O,B]),b(()=>{if(!N)return;requestAnimationFrame(()=>I.current?.focus?.())},[N]),b(()=>{let y=(P)=>{if(!N){if(!vM(P))return;P.preventDefault(),D(String(P.key||"")),H(0),F(!0);return}if(P.key==="Escape"){P.preventDefault(),F(!1),D("");return}if(P.key==="ArrowDown"){P.preventDefault(),H((f)=>O.length>0?(f+1+O.length)%O.length:0);return}if(P.key==="ArrowUp"){P.preventDefault(),H((f)=>O.length>0?(f-1+O.length)%O.length:0);return}if(P.key==="Enter"&&O[z]){P.preventDefault();let f=O[z],u=P.altKey;if(f){if(f.kind==="agent"&&f.chatJid)if(u)hM(f.chatJid);else G?.(f.chatJid);else if(f.kind==="workspace"&&f.commandId){if(f.commandId==="toggle-workspace"||f.commandId==="open-explorer")q?.();if(f.commandId==="toggle-chat-only")yK(Z);if(f.commandId==="open-terminal-tab")Q?.();if(f.commandId==="open-vnc-tab")K?.();if(f.commandId==="toggle-terminal-dock")V?.();if(f.commandId==="open-settings")window.dispatchEvent(new CustomEvent("piclaw:open-settings"))}else if(f.kind==="slash"&&f.commandName)Y?.(f.commandName)}F(!1),D("")}},A=(P)=>{if(!N)return;if(x.current?.contains(P.target))return;F(!1),D("")};return window.addEventListener("keydown",y,!0),document.addEventListener("pointerdown",A,!0),()=>{window.removeEventListener("keydown",y,!0),document.removeEventListener("pointerdown",A,!0)}},[Z,z,O,Q,K,Y,G,V,q,N]),b(()=>{let y=(A)=>{let P=e$(A?.detail?.settings);if(A?.detail?.settings){L(P);return}J()};return window.addEventListener("focus",y),window.addEventListener("piclaw:quick-actions-settings-updated",y),()=>{window.removeEventListener("focus",y),window.removeEventListener("piclaw:quick-actions-settings-updated",y)}},[J]),!N)return null;let T=null;return U`
        <div class="timeline-quick-actions-portal">
            <div class="timeline-quick-actions-overlay">
                <div class="timeline-quick-actions" ref=${x}>
                    <div class="timeline-quick-actions-header">
                        <div class="timeline-quick-actions-search-row">
                            <input
                                ref=${I}
                                class="timeline-quick-actions-input"
                                type="text"
                                value=${B}
                                placeholder="Type to jump to an agent, workspace action, or slash command…"
                                onInput=${(y)=>{D(y.currentTarget?.value||""),H(0)}}
                            />
                            <div class="timeline-quick-actions-hints" aria-hidden="true">
                                ${y8("Move","↑↓")}
                                ${y8("Select","↵")}
                                ${y8("Pop out","Alt+↵")}
                                ${y8("Close","Esc")}
                            </div>
                        </div>
                    </div>
                    <div class="timeline-quick-actions-list">
                        ${O.length===0&&U`<div class="timeline-quick-actions-empty">No quick actions match.</div>`}
                        ${O.map((y,A)=>{let P=y.kind!==T;return T=y.kind,U`
                                ${P&&U`<div class="timeline-quick-actions-section">${wK(y.kind)}</div>`}
                                <button
                                    key=${y.key}
                                    type="button"
                                    class=${`timeline-quick-actions-item timeline-quick-actions-item-${y.kind}${A===z?" active":""}`}
                                    onMouseEnter=${null}
                                    onClick=${()=>{if(y.kind==="agent"&&y.chatJid)G?.(y.chatJid);if(y.kind==="workspace"&&y.commandId==="toggle-workspace")q?.();if(y.kind==="workspace"&&y.commandId==="open-explorer")q?.();if(y.kind==="workspace"&&y.commandId==="toggle-chat-only")yK(Z);if(y.kind==="workspace"&&y.commandId==="open-terminal-tab")Q?.();if(y.kind==="workspace"&&y.commandId==="open-vnc-tab")K?.();if(y.kind==="workspace"&&y.commandId==="toggle-terminal-dock")V?.();if(y.kind==="workspace"&&y.commandId==="open-settings")window.dispatchEvent(new CustomEvent("piclaw:open-settings"));if(y.kind==="slash"&&y.commandName)Y?.(y.commandName);F(!1),D("")}}
                                >
                                    <span class="timeline-quick-actions-item-media">
                                        ${cM(y)}
                                    </span>
                                    <span class="timeline-quick-actions-item-copy">
                                        <span class="timeline-quick-actions-item-title-row">
                                            <span class="timeline-quick-actions-item-title">${y.title}</span>
                                            ${y.actionHint?U`<span class="timeline-quick-actions-item-action-hint">${y.actionHint}</span>`:null}
                                        </span>
                                        <span class="timeline-quick-actions-item-subtitle">${y.subtitle}</span>
                                    </span>
                                    <span class="timeline-quick-actions-item-category">${y.categoryLabel||wK(y.kind)}</span>
                                </button>
                            `})}
                    </div>
                </div>
            </div>
        </div>
    `}M0();function xK({workspaceOpen:_,toggleWorkspace:$,chatOnlyMode:j,onOpenTerminalTab:Z,onOpenVncTab:X,onToggleTerminal:G,terminalVisible:q}){let[Q,K]=C(!1),[V,Y]=C({top:8,left:8}),N=()=>{if(typeof document>"u")return 0;let M=document.createElement("div");M.style.cssText="position:fixed;top:0;left:0;width:0;height:env(safe-area-inset-top,0px);visibility:hidden;pointer-events:none",document.body.appendChild(M);let E=M.offsetHeight;return M.remove(),E},F=g(null),B=g(null),D=g(null);b(()=>{if(typeof document>"u")return;let M=document.createElement("div");return M.className="timeline-menu-portal in-chat",document.body.appendChild(M),D.current=M,()=>{M.remove(),D.current=null}},[]),b(()=>{let M=()=>{let x=N(),I=x>0?x+4:8;if(_){let J=document.querySelector(".workspace-sidebar");if(J){let k=J.getBoundingClientRect();Y({top:k.top+I,left:k.left+8})}}else Y({top:I,left:8})};M();let E=new ResizeObserver(M),L=document.querySelector(".workspace-sidebar");if(L)E.observe(L);return window.addEventListener("resize",M),()=>{E.disconnect(),window.removeEventListener("resize",M)}},[_]),b(()=>{if(D.current)D.current.className=`timeline-menu-portal ${_?"in-workspace":"in-chat"}`},[_]),b(()=>{if(!D.current)return;let M=D.current.style;M.top=`${V.top}px`,M.left=`${V.left}px`,M.right="auto"},[V]),b(()=>{if(!Q)return;let M=(E)=>{if(F.current?.contains(E.target))return;if(B.current?.contains(E.target))return;K(!1)};return document.addEventListener("mousedown",M,!0),()=>document.removeEventListener("mousedown",M,!0)},[Q]),b(()=>{if(!Q)return;let M=(E)=>{if(E.key==="Escape")K(!1)};return document.addEventListener("keydown",M),()=>document.removeEventListener("keydown",M)},[Q]),b(()=>{K(!1)},[_]);let z=R((M)=>{K(!1),M?.()},[]),H=R(()=>{let M=new URL(window.location.href);if(j)M.searchParams.delete("chat_only");else M.searchParams.set("chat_only","1");window.location.href=M.toString()},[j]),W=U`
        <button ref=${B} class=${`timeline-menu-btn${Q?" active":""}`}
            onClick=${()=>K((M)=>!M)} title="Menu" aria-label="Menu"
            aria-haspopup="menu" aria-expanded=${Q?"true":"false"}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
        </button>
        ${Q&&U`
            <div class="workspace-menu-dropdown timeline-menu-dropdown" ref=${F} role="menu">
                <button class="workspace-menu-item" role="menuitem" disabled=${j} onClick=${()=>z($)}>
                    ${_?"Hide workspace":"Show workspace"}
                </button>
                ${!_&&!j&&U`
                    <button class="workspace-menu-item" role="menuitem" onClick=${()=>z(()=>{$()})}>
                        Open explorer
                    </button>
                `}
                <button class=${`workspace-menu-item${j?" active":""}`} role="menuitem" onClick=${()=>z(H)}>
                    ${j?"Exit chat-only mode":"Chat-only mode"}
                </button>

                ${(Z||X||G)&&U`<div class="workspace-menu-separator"></div>`}
                ${Z&&U`<button class="workspace-menu-item" role="menuitem" disabled=${j} onClick=${()=>z(Z)}>Open terminal in tab</button>`}
                ${X&&U`<button class="workspace-menu-item" role="menuitem" disabled=${j} onClick=${()=>z(X)}>Open VNC in tab</button>`}
                ${G&&!j&&_&&U`<button class="workspace-menu-item" role="menuitem" onClick=${()=>z(G)}>${q?"Hide terminal dock":"Show terminal dock"}</button>`}

                <div class="workspace-menu-separator"></div>
                <button class="workspace-menu-item" role="menuitem" onClick=${()=>z(()=>window.dispatchEvent(new CustomEvent("piclaw:open-settings")))}>Settings</button>
            </div>
        `}
    `;return Z5(()=>{if(D.current)H$(W,D.current)}),null}M0();y1();var CK="PiClaw";function zj(_,$,j=!1){let Z=_||"PiClaw",X=Z.charAt(0).toUpperCase(),G=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],q=X.charCodeAt(0)%G.length,Q=G[q],K=Z.trim().toLowerCase(),V=typeof $==="string"?$.trim():"",Y=V?V:null,N=j||K==="PiClaw".toLowerCase()||K==="pi";return{letter:X,color:Q,image:Y||(N?"/static/icon-192.png":null)}}function PK(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function fK(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function RK(_){if(!_)return null;if(typeof document<"u"){let G=document.documentElement,q=G?.dataset?.colorTheme||"",Q=G?.dataset?.tint||"",K=getComputedStyle(G).getPropertyValue("--accent-color")?.trim();if(K&&(Q||q&&q!=="default"))return K}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Z=0;for(let G=0;G<j.length;G+=1)Z=(Z*31+j.charCodeAt(G))%2147483647;let X=Math.abs(Z)%$.length;return $[X]}function Hj(..._){for(let $ of _)if(typeof $==="string"&&$.trim())return $.trim();return null}function lM(_){if(_.startsWith('"')&&_.endsWith('"')||_.startsWith("'")&&_.endsWith("'"))return _.slice(1,-1);return _}function SK(_){if(typeof _!=="string"||!_.trim())return null;let $=_.match(/^\s*cd\s+(.+?)(?:\s*(?:&&|;|\n))/s);if(!$?.[1])return null;return lM($[1].trim())||null}function bK(_,$){let j=$&&typeof $==="object"?$:null;if(!j)return null;let Z=Hj(j.cwd,j.working_directory,j.workingDirectory);if(Z)return Z;let X=Hj(j.project_dir,j.projectDir,j.repo_path,j.repoPath);if(X)return X;let G=Hj(j.command),q=SK(G);if(q)return q;if(Array.isArray(j.commands))for(let Q of j.commands){let K=SK(Q);if(K)return K}return null}M0();var gK={right:"3 2 8 5 3 8",down:"2 3 8 3 5 8",up:"2 7 8 7 5 2",left:"7 2 2 5 7 8"};function uK(_){return _==="down"||_==="up"||_==="left"?_:"right"}function vK(_,$=""){return["ui-disclosure-triangle",`ui-disclosure-triangle-${_}`,$.trim()].filter(Boolean).join(" ")}function $$(_="right",$=""){let j=uK(_);return U`
    <svg class=${vK(j,$)} viewBox="0 0 10 10" aria-hidden="true" focusable="false">
      <polygon points=${gK[j]}></polygon>
    </svg>
  `}function Wj(_="right",$=""){let j=uK(_);return`<svg class="${vK(j,$)}" viewBox="0 0 10 10" aria-hidden="true" focusable="false"><polygon points="${gK[j]}"></polygon></svg>`}var pM=U`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>
`,rM=U`
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
        <path d="M6 3v12"></path>
        <circle cx="18" cy="6" r="3"></circle>
        <circle cx="6" cy="18" r="3"></circle>
        <path d="M18 9a9 9 0 0 1-9 9"></path>
    </svg>
`,nM=U`
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M12 7v5l3 2"></path>
    </svg>
`,dM=1e4,mK=132;function oM(_,$=mK){let j=Number.isFinite($)&&$>0?Math.floor($):mK;return String(_||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`).map((Z)=>Z.length>j?`${Z.slice(0,j)}…`:Z).join(`
`)}function iM(_){return(Array.isArray(_)?_:_&&Array.isArray(_.status_hints)?_.status_hints:[]).filter((j)=>j&&typeof j==="object").map((j,Z)=>({key:typeof j.key==="string"&&j.key.trim()?j.key.trim():`hint-${Z}`,iconSvg:typeof j.icon_svg==="string"?j.icon_svg.trim():"",label:typeof j.label==="string"?j.label.trim():"",title:typeof j.title==="string"?j.title.trim():""})).filter((j)=>j.iconSvg&&j.label)}function sM(_){if(!(_ instanceof Set)||_.size===0)return null;let $=Array.from(_.values());for(let j=$.length-1;j>=0;j-=1){let Z=$[j];if(Z==="thought"||Z==="draft")return Z}return null}function aM(_){if(!Array.isArray(_)||_.length===0)return[];let $=new Map([["ssh",0]]);return _.map((j,Z)=>({hint:j,index:Z})).sort((j,Z)=>{let X=$.get(j.hint?.key)??100,G=$.get(Z.hint?.key)??100;if(X!==G)return X-G;return j.index-Z.index}).map((j)=>j.hint)}function tM(_,$){let j=typeof _==="string"?_.trim():"",Z=typeof $==="string"?$.trim():"";return[j?j.split(/[\\/]+/).filter(Boolean).pop()||j:"",Z].filter(Boolean).join(" • ")}function cK(_){if(!_||typeof _!=="object")return!1;let $=typeof _.type==="string"?_.type:"",j=Boolean(_.last_activity||_.lastActivity),Z=$==="tool_call"||$==="tool_status"||Boolean(_.tool_name||_.tool_args);if(!j&&!Z)return!1;return d$(_)!==null}function hK(_){if(!_||typeof _!=="object")return!1;return _.type==="intent"&&s2(_)!==null}function eM(_,$=Date.now()){if(!Number.isFinite(_))return!1;return $-_>=dM}function _k(_,$=Date.now()){if(!cK(_))return null;let j=d$(_);if(j===null||!eM(j,$))return null;let Z=sK(new Date(j).toISOString(),$);return Z?`${Z} ago`:null}function $k(_,$=Date.now()){if(!hK(_))return null;if(s2(_)===null)return null;return A6(_,$)}function lK(_){return typeof _==="string"&&/^streaming output\.{3}$/i.test(_.trim())}function jk(_){if(typeof _!=="string")return"";return _.replace(/[…]+/g,".").replace(/\s+/g," ").trim().replace(/[\s:;,.!?-]+$/g,"").toLowerCase()}function Zk(_){if(!_||typeof _!=="object")return!1;let $=typeof _.type==="string"?_.type:"";return $==="tool_call"||$==="tool_status"||Boolean(_.tool_name||_.toolName||_.tool_args||_.toolArgs)}function pK(_){if(!Zk(_))return"";let $=_?.status||_?.tool_status||_?.toolStatus;if(lK($))return"";return jk($)}function rK(_,$){let j=typeof _==="string"?_:"",Z=typeof $==="string"?$.trim():"";if(!j||!Z)return j;let X=Z.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");return j.replace(new RegExp(`\\s*[:—-]\\s*${X}\\s*$`,"i"),"")}function w8(_){return _?U`<span class="agent-tool-status-pill">${_}</span>`:null}function nK(_){let $=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"";if($)return $;let j=typeof(_?.tool_name||_?.toolName)==="string"?String(_.tool_name||_.toolName).trim():"";if(!j)return"";let[Z]=oK(_);return Z?`${j}: ${Z}`:j}function Xk(_,$={}){let j=$?.isLastActivity??Boolean(_?.last_activity||_?.lastActivity),Z=nK(_),X=_?.status,G="";if(_?.type==="plan")G=Z?`Planning: ${Z}`:"Planning...";else if(_?.type==="tool_call")G=Z?`Running: ${Z}`:"Running tool...";else if(_?.type==="tool_status")G=Z&&lK(X)?Z:Z?`${Z}: ${X||"Working..."}`:X||"Working...";else if(_?.type==="error")G=Z||"Agent error";else G=Z||X||"Working...";if(!j)return G;if(G&&G!=="Working...")return`Recent activity: ${G}`;return"Last activity"}function Gk(_){let $=_?.tool_name||_?.toolName||"";return typeof $==="string"?$.trim().toLowerCase():""}function qk(_){let $=typeof _==="string"?_.replace(/\s+/g," ").trim():"";if(!$)return"";let j=120;return $.length>j?`${$.slice(0,j)}…`:$}function dK(_){if(!_)return null;if(typeof _==="string")try{let $=JSON.parse(_);return dK($)}catch{return null}if(typeof _==="object"){let $=_,j=$.arguments||$.input||$.params||$.parameters||$.args||$.payload;return j&&typeof j==="object"?j:$}return null}function oK(_){let $=dK(_?.tool_args||_?.toolArgs);if(!$)return[];let j=[],Z=(X)=>{let G=qk(X);if(G&&!j.includes(G))j.push(G)};if(Z($.command),Array.isArray($.commands))Z($.commands.filter((X)=>typeof X==="string").join(" && "));if(Z($.path||$.filePath||$.target),Array.isArray($.paths))Z($.paths.filter((X)=>typeof X==="string").join(", "));return Z($.fileName||$.filename||$.file),Z($.url),Z($.query),j.sort((X,G)=>G.length-X.length)}function iK(_,$){let j=typeof _==="string"?_:"";if(!j)return null;let Z=oK($);for(let q of Z){let Q=j.indexOf(q);if(Q>=0)return{prefix:j.slice(0,Q),argument:q,suffix:j.slice(Q+q.length)}}let X=Gk($);if(!X)return null;let G=j.match(/^([^:]+:\s*)(.+)$/is);if(!G||G[1].trim().replace(/:$/,"").toLowerCase()!==X)return null;return{prefix:G[1],argument:G[2],suffix:""}}function Qk(_,$){let j=$?.status||$?.tool_status||$?.toolStatus,Z=pK($),X=Z?rK(_,j):typeof _==="string"?_:"",G=nK($),q=iK(G,$);if(!q?.argument)return Z?U`${X} ${w8(Z)}`:X;let Q=X.lastIndexOf(q.argument);if(Q<0)return Z?U`${X} ${w8(Z)}`:X;let K=Q+q.argument.length;return U`
        ${X.slice(0,Q)}<span class="agent-tool-argument">${q.argument}</span>${X.slice(K)}${Z?U` ${w8(Z)}`:""}
    `}function Vk(_,$){let j=iK(_,$);if(!j?.argument)return _;let Z=$?.status||$?.tool_status||$?.toolStatus,X=pK($),G=X?rK(j.suffix||"",Z):j.suffix||"";return U`
        ${j.prefix}<span class="agent-tool-argument">${j.argument}</span>${G}${X?U` ${w8(X)}`:""}
    `}function sK(_,$=Date.now()){if(!_)return null;let j=$-new Date(_).getTime();if(!Number.isFinite(j)||j<0)return null;let Z=Math.floor(j/1000),X=Math.floor(Z/3600),G=Math.floor(Z%3600/60),q=Z%60;if(X>0)return`${X}h ${G}m`;if(G>0)return`${G}m ${q}s`;return`${q}s`}function Oj({status:_,draft:$,plan:j,thought:Z,pendingRequest:X,intent:G,extensionPanels:q=[],pendingPanelActions:Q=new Set,onExtensionPanelAction:K,turnId:V,steerQueued:Y,onPanelToggle:N,showCorePanels:F=!0,showExtensionPanels:B=!0}){let W=(v)=>{if(!v)return{text:"",totalLines:0,fullText:""};if(typeof v==="string"){let H0=v,A0=H0?H0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:H0,totalLines:A0,fullText:H0}}let n=v.text||"",a=v.fullText||v.full_text||n,_0=Number.isFinite(v.totalLines)?v.totalLines:a?a.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:n,totalLines:_0,fullText:a}},M=160,E=(v)=>String(v||"").replace(/<\/?internal>/gi,""),L=(v)=>{if(!v)return 1;return Math.max(1,Math.ceil(v.length/160))},x=(v,n,a,_0={})=>{let H0=(v||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!H0)return{text:"",omitted:0,totalLines:Number.isFinite(a)?a:0,visibleLines:0};let A0=H0.split(`
`),E0=_0.direction==="tail",C0=A0.length>n?(E0?A0.slice(-n):A0.slice(0,n)).join(`
`):H0,k0=Number.isFinite(a)?a:A0.reduce((p0,d0)=>p0+L(d0),0),h0=C0?C0.split(`
`).reduce((p0,d0)=>p0+L(d0),0):0,v0=Math.max(k0-h0,0);return{text:C0,omitted:v0,totalLines:k0,visibleLines:h0}},I=W(j),J=W(Z),k=W($),O=W({text:_?.output_preview||_?.outputPreview||"",fullText:_?.output_preview||_?.outputPreview||"",totalLines:_?.output_total_lines||_?.outputTotalLines}),T=Boolean(I.text)||I.totalLines>0,y=Boolean(J.text)||J.totalLines>0,A=Boolean(k.fullText?.trim()||k.text?.trim()),P=Boolean(O.fullText?.trim()||O.text?.trim()),f=Boolean(_||A||T||y||P||X||G),u=Array.isArray(q)&&q.length>0,[c,r]=C(new Set),[e,m]=C(null),[$0,W0]=C({}),X0=g(new Map),[Z0,q0]=C(()=>Date.now()),D0=(v)=>r((n)=>{let a=new Set(n),_0=!a.has(v);if(_0)a.add(v);else a.delete(v);if(typeof N==="function")N(v,_0);return a});b(()=>{r(new Set),m(null)},[V]),b(()=>{let v={},n=new Set(["thought","draft"]);for(let[a,_0]of X0.current.entries()){if(!_0||typeof _0!=="object")continue;let H0=Number(_0.scrollHeight),A0=Number(_0.clientHeight);if(!Number.isFinite(H0)||!Number.isFinite(A0)||A0<=0)continue;if(H0>A0+1)v[a]=!0;if(n.has(a))_0.scrollTop=Math.max(0,H0-A0)}W0((a)=>{let _0=Object.keys(a||{}).filter((A0)=>a[A0]).sort(),H0=Object.keys(v).sort();if(_0.length===H0.length&&_0.every((A0,E0)=>A0===H0[E0]))return a;return v})},[k.fullText,k.text,J.fullText,J.text,O.fullText,O.text,c]),b(()=>{if(!(Array.isArray(q)&&q.some((a)=>a?.started_at||a?.last_activity_at)))return;let n=setInterval(()=>q0(Date.now()),1000);return()=>clearInterval(n)},[q]);let h=G0(()=>sM(c),[c]);b(()=>{if(!h||typeof document>"u")return;let v=(n)=>{if(n?.defaultPrevented)return;if(n?.key!=="Escape")return;if(n?.altKey||n?.ctrlKey||n?.metaKey||n?.shiftKey)return;let a=n?.target;if(a instanceof Element){if(a.closest?.('input, textarea, select, [contenteditable="true"]'))return;if(a.isContentEditable)return}if(r((_0)=>{if(!(_0 instanceof Set)||!_0.has(h))return _0;let H0=new Set(_0);return H0.delete(h),H0}),typeof N==="function")N(h,!1);n.preventDefault?.(),n.stopPropagation?.()};return document.addEventListener("keydown",v),()=>document.removeEventListener("keydown",v)},[h,N]);let j0=k$(_),Y0=Boolean(_?.last_activity||_?.lastActivity),L0=G0(()=>cK(_),[_]),s=G0(()=>hK(_),[_]),Q0=G0(()=>bK(_?.tool_name,_?.tool_args),[_?.tool_name,_?.tool_args]),[O0,x0]=C(null);b(()=>{if(!Boolean(s||_?.retry_at||_?.retryAt||L0))return;q0(Date.now());let n=setInterval(()=>q0(Date.now()),1000);return()=>clearInterval(n)},[L0,s,_?.retry_at,_?.retryAt,_?.last_event_at,_?.lastEventAt,_?.started_at,_?.startedAt,_?.type,_?.tool_name,_?.tool_args]),b(()=>{if(!(_?.type==="tool_call"||_?.type==="tool_status")||!Q0){x0(null);return}let n=!0;return G9(Q0).then((a)=>{if(!n)return;if(a?.branch)x0({branch:a.branch,repoPath:a.repo_path||null,path:Q0});else x0(null)}).catch(()=>{if(n)x0(null)}),()=>{n=!1}},[_?.type,Q0]);let r0=_?.turn_id||V,l0=RK(r0),n0=(v)=>v,m0=TV(_,{isLastActivity:Y0}),_1=x6(_,{isLastActivity:Y0}),S0=O8({steerQueued:Y,pulsing:m0&&_1==="dot"&&!Y0}),o0=x6(null,{pendingRequest:!0}),c0=(v)=>v==="warning"?"#f59e0b":v==="error"?"var(--danger-color)":v==="success"?"var(--success-color)":l0,$1=G?.kind||"info",i0=c0($1),H1=c0(_?.kind||(j0?"warning":"info")),Q1=Xk(_,{isLastActivity:Y0}),P0=_k(_,Z0),J0=O0?.repoPath||"",z1=O0?.branch||"",G1=O0?tM(J0,z1):"",J1=iM(_?.status_hints||_?.statusHints),F0=G0(()=>aM(J1),[J1]),R0=G0(()=>F0.filter((v)=>v?.key==="ssh"),[F0]),w0=G0(()=>F0.filter((v)=>v?.key!=="ssh"),[F0]);if((!F||!f)&&(!B||!u))return null;let j1=({panelTitle:v,text:n,fullText:a,totalLines:_0,maxLines:H0,titleClass:A0,panelKey:E0})=>{let C0=c.has(E0),k0=a||n||"",h0=E0==="thought"||E0==="draft"?E(k0):k0,v0=typeof H0==="number",p0=E0==="tool-output",d0=v0?x(h0,H0,_0,{direction:p0?"tail":"head"}):{text:h0||"",omitted:0,totalLines:Number.isFinite(_0)?_0:0},I0=p0&&!C0?oM(d0.text):h0;if(!h0&&!(Number.isFinite(d0.totalLines)&&d0.totalLines>0))return null;let T0=`agent-thinking-body${v0?" agent-thinking-body-collapsible":""}`,N1=v0?`--agent-thinking-collapsed-lines: ${H0};`:"",q1=v0&&d0.omitted>0,o=Boolean(E0&&$0[E0]),z0=q1||o,t0=(!C0&&z0||C0&&z0)&&U`
            <button
                class="agent-thinking-truncation"
                onClick=${()=>D0(E0)}
                title=${C0?`Show fewer ${v} lines`:`Show more ${v}`}
            >
                <span class="agent-thinking-truncation-arrow" aria-hidden="true">${$$(C0?"up":"down")}</span>
                <span>${C0?"less":"more…"}</span>
            </button>
        `;return U`
            <div
                class="agent-thinking"
                data-expanded=${C0?"true":"false"}
                data-collapsible=${v0?"true":"false"}
                data-panel-key=${E0||""}
                style=${l0?`--turn-color: ${l0};`:""}
            >
                <div class="agent-thinking-title ${A0||""}">
                    ${l0&&U`<span class=${S0} aria-hidden="true"></span>`}
                    ${v}
                    ${t0}
                </div>
                <div
                    class=${T0}
                    style=${N1}
                    ref=${(C1)=>{if(!E0)return;if(C1)X0.current.set(E0,C1);else X0.current.delete(E0)}}
                    dangerouslySetInnerHTML=${{__html:q6(I0)}}
                />
            </div>
        `},x1=X?.tool_call?.title,K1=x1?`Awaiting approval: ${x1}`:"Awaiting approval",V1=$k(_,Z0),Z1=(v,n,a=null)=>{let _0=a2(v),H0=eq(v,Z0),A0=[a,H0].filter(Boolean).join(" · "),E0=O8({steerQueued:Y,pulsing:k$(v)||Boolean(H0)}),C0=x6(v);return U`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${n?`--turn-color: ${n};`:""}
                title=${v?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${n&&C0==="dot"&&U`<span class=${E0} aria-hidden="true"></span>`}
                    ${C0==="spinner"&&U`<div class="agent-status-spinner" aria-hidden="true"></div>`}
                    <span class="agent-thinking-title-text">${Vk(_0,v)}</span>
                    ${A0&&U`<span class="agent-status-elapsed">${A0}</span>`}
                </div>
                ${v.detail&&U`<div class="agent-thinking-body">${v.detail}</div>`}
            </div>
        `},E1=(v,n,a,_0,H0,A0,E0,C0=8,k0=8)=>{let h0=Math.max(H0-_0,0.000000001),v0=Math.max(n-C0*2,1),p0=Math.max(a-k0*2,1),d0=Math.max(E0-A0,1),I0=E0===A0?n/2:C0+(v.run-A0)/d0*v0,T0=k0+(p0-(v.value-_0)/h0*p0);return{x:I0,y:T0}},c1=(v,n,a,_0,H0,A0,E0,C0=8,k0=8)=>{if(!Array.isArray(v)||v.length===0)return"";return v.map((h0,v0)=>{let{x:p0,y:d0}=E1(h0,n,a,_0,H0,A0,E0,C0,k0);return`${v0===0?"M":"L"} ${p0.toFixed(2)} ${d0.toFixed(2)}`}).join(" ")},g1=(v,n="")=>{if(!Number.isFinite(v))return"—";return`${Math.abs(v)>=100?v.toFixed(0):v.toFixed(2).replace(/\.0+$/,"").replace(/(\.\d*[1-9])0+$/,"$1")}${n}`},O1=["var(--accent-color)","var(--success-color)","var(--warning-color, #f59e0b)","var(--danger-color)"],e1=(v,n)=>{let a=O1;if(!Array.isArray(a)||a.length===0)return"var(--accent-color)";if(a.length===1||!Number.isFinite(n)||n<=1)return a[0];let H0=Math.max(0,Math.min(Number.isFinite(v)?v:0,n-1))/Math.max(1,n-1)*(a.length-1),A0=Math.floor(H0),E0=Math.min(a.length-1,A0+1),C0=H0-A0,k0=a[A0],h0=a[E0];if(!h0||A0===E0||C0<=0.001)return k0;if(C0>=0.999)return h0;let v0=Math.round((1-C0)*1000)/10,p0=Math.round(C0*1000)/10;return`color-mix(in oklab, ${k0} ${v0}%, ${h0} ${p0}%)`},T1=(v,n="autoresearch")=>{let a=Array.isArray(v)?v.map((I0)=>({...I0,points:Array.isArray(I0?.points)?I0.points.filter((T0)=>Number.isFinite(T0?.value)&&Number.isFinite(T0?.run)):[]})).filter((I0)=>I0.points.length>0):[],_0=a.map((I0,T0)=>({...I0,color:e1(T0,a.length)}));if(_0.length===0)return null;let H0=320,A0=120,E0=_0.flatMap((I0)=>I0.points),C0=E0.map((I0)=>I0.value),k0=E0.map((I0)=>I0.run),h0=Math.min(...C0),v0=Math.max(...C0),p0=Math.min(...k0),d0=Math.max(...k0);return U`
            <div class="agent-series-chart agent-series-chart-combined">
                <div class="agent-series-chart-header">
                    <span class="agent-series-chart-title">Tracked variables</span>
                    <span class="agent-series-chart-value">${_0.length} series</span>
                </div>
                <div class="agent-series-chart-plot">
                    <svg class="agent-series-chart-svg" viewBox=${`0 0 ${H0} ${A0}`} preserveAspectRatio="none" aria-hidden="true">
                        ${_0.map((I0)=>{let T0=I0?.key||I0?.label||"series",N1=e?.panelKey===n&&e?.seriesKey===T0;return U`
                                <g key=${T0}>
                                    <path
                                        class=${`agent-series-chart-line${N1?" is-hovered":""}`}
                                        d=${c1(I0.points,H0,A0,h0,v0,p0,d0)}
                                        style=${`--agent-series-color: ${I0.color};`}
                                        onMouseEnter=${()=>m({panelKey:n,seriesKey:T0})}
                                        onMouseLeave=${()=>m((q1)=>q1?.panelKey===n&&q1?.seriesKey===T0?null:q1)}
                                    ></path>
                                </g>
                            `})}
                    </svg>
                    <div class="agent-series-chart-points-layer">
                        ${_0.flatMap((I0)=>{let T0=typeof I0?.unit==="string"?I0.unit:"",N1=I0?.key||I0?.label||"series";return I0.points.map((q1,o)=>{let z0=E1(q1,H0,A0,h0,v0,p0,d0);return U`
                                    <button
                                        key=${`${N1}-point-${o}`}
                                        type="button"
                                        class="agent-series-chart-point-hit"
                                        style=${`--agent-series-color: ${I0.color}; left:${z0.x/H0*100}%; top:${z0.y/A0*100}%;`}
                                        onMouseEnter=${()=>m({panelKey:n,seriesKey:N1,run:q1.run,value:q1.value,unit:T0})}
                                        onMouseLeave=${()=>m((s0)=>s0?.panelKey===n?null:s0)}
                                        onFocus=${()=>m({panelKey:n,seriesKey:N1,run:q1.run,value:q1.value,unit:T0})}
                                        onBlur=${()=>m((s0)=>s0?.panelKey===n?null:s0)}
                                        aria-label=${`${I0?.label||"Series"} ${g1(q1.value,T0)} at run ${q1.run}`}
                                    >
                                        <span class="agent-series-chart-point"></span>
                                    </button>
                                `})})}
                    </div>
                </div>
                <div class="agent-series-legend">
                    ${_0.map((I0)=>{let T0=I0.points[I0.points.length-1]?.value,N1=typeof I0?.unit==="string"?I0.unit:"",q1=I0?.key||I0?.label||"series",o=e?.panelKey===n&&e?.seriesKey===q1?e:null,z0=o&&Number.isFinite(o.value)?o.value:T0,s0=o&&typeof o.unit==="string"?o.unit:N1,t0=o&&Number.isFinite(o.run)?o.run:null;return U`
                            <div key=${`${q1}-legend`} class=${`agent-series-legend-item${o?" is-hovered":""}`} style=${`--agent-series-color: ${I0.color};`}>
                                <span class="agent-series-legend-swatch" style=${`--agent-series-color: ${I0.color};`}></span>
                                <span class="agent-series-legend-label">${I0?.label||"Series"}</span>
                                ${t0!==null&&U`<span class="agent-series-legend-run">run ${t0}</span>`}
                                <span class="agent-series-legend-value">${g1(z0,s0)}</span>
                            </div>
                        `})}
                </div>
            </div>
        `},V0=(v)=>{if(!v)return null;let n=typeof v?.key==="string"?v.key:`panel-${Math.random()}`,a=c.has(n),_0=v?.title||"Extension status",H0=v?.collapsed_text||"",A0=String(v?.state||"").replace(/[-_]+/g," ").replace(/^./,(z0)=>z0.toUpperCase()),E0=c0(v?.state==="completed"?"success":v?.state==="failed"?"error":v?.state==="stopped"?"warning":"info"),C0=O8({steerQueued:Y,pulsing:v?.state==="running"}),k0=typeof v?.detail_markdown==="string"?v.detail_markdown.trim():"",h0=typeof v?.last_run_text==="string"?v.last_run_text.trim():"",v0=typeof v?.tmux_command==="string"?v.tmux_command.trim():"",p0=Array.isArray(v?.series)?v.series:[],d0=Array.isArray(v?.actions)?v.actions:[],I0=v?.started_at?A6(v,Z0):null,T0=H0,N1=Boolean(k0||v0||I0),q1=Boolean(k0||p0.length>0||v0),o=[_0,T0].filter(Boolean).join(" — ");return U`
            <div
                class="agent-thinking agent-thinking-intent agent-thinking-autoresearch"
                aria-live="polite"
                data-expanded=${a?"true":"false"}
                style=${E0?`--turn-color: ${E0};`:""}
                title=${!a?o||_0:""}
            >
                <div class="agent-thinking-header agent-thinking-header-inline">
                    <button
                        class="agent-thinking-title intent agent-thinking-title-clickable"
                        type="button"
                        onClick=${()=>q1?D0(n):null}
                    >
                        ${E0&&U`<span class=${C0} aria-hidden="true"></span>`}
                        <span class="agent-thinking-title-text">${_0}</span>
                        ${T0&&U`<span class="agent-thinking-title-meta">${T0}</span>`}
                        ${I0&&U`<span class="agent-status-elapsed">${I0}</span>`}
                    </button>
                    ${(d0.length>0||q1)&&U`
                        <div class="agent-thinking-tools-inline">
                            ${d0.length>0&&U`
                                <div class="agent-thinking-actions agent-thinking-actions-inline">
                                    ${d0.map((z0)=>{let s0=`${n}:${z0?.key||""}`,t0=Q?.has?.(s0);return U`
                                            <button
                                                key=${s0}
                                                class=${`agent-thinking-action-btn${z0?.tone==="danger"?" danger":""}`}
                                                onClick=${()=>K?.(v,z0)}
                                                disabled=${Boolean(t0)}
                                            >
                                                ${t0?"Working…":z0?.label||"Run"}
                                            </button>
                                        `})}
                                </div>
                            `}
                            ${q1&&U`
                                <button
                                    class="agent-thinking-corner-toggle agent-thinking-corner-toggle-inline"
                                    type="button"
                                    aria-label=${`${a?"Collapse":"Expand"} ${_0}`}
                                    title=${a?"Collapse details":"Expand details"}
                                    onClick=${()=>D0(n)}
                                >
                                    ${$$(a?"down":"up")}
                                </button>
                            `}
                        </div>
                    `}
                </div>
                ${a&&U`
                    <div class=${`agent-thinking-autoresearch-layout${N1?"":" chart-only"}`}>
                        ${N1&&U`
                            <div class="agent-thinking-autoresearch-meta-stack">
                                ${I0&&U`
                                    <div class="agent-thinking-autoresearch-elapsed">
                                        <span title="Experiment duration">⏱ ${I0}</span>
                                        ${v?.last_activity_at&&v?.state==="running"&&U`<span title="Since last activity">⟳ ${sK(v.last_activity_at)} ago</span>`}
                                    </div>
                                `}
                                ${k0&&U`
                                    <div
                                        class="agent-thinking-body agent-thinking-autoresearch-detail"
                                        dangerouslySetInnerHTML=${{__html:q6(k0)}}
                                    />
                                `}
                                ${v0&&U`
                                    <div class="agent-series-chart-command">
                                        <div class="agent-series-chart-command-header">
                                            <span>Attach to session</span>
                                        </div>
                                        <div class="agent-series-chart-command-shell">
                                            <pre class="agent-series-chart-command-code">${v0}</pre>
                                            <button
                                                type="button"
                                                class="agent-series-chart-command-copy"
                                                aria-label="Copy tmux command"
                                                title="Copy tmux command"
                                                onClick=${()=>K?.(v,{key:"copy_tmux",action_type:"autoresearch.copy_tmux",label:"Copy tmux"})}
                                            >
                                                ${pM}
                                            </button>
                                        </div>
                                    </div>
                                `}
                            </div>
                        `}
                        ${p0.length>0?U`
                                <div class="agent-series-chart-stack">
                                    ${T1(p0,n)}
                                    ${h0&&U`<div class="agent-series-chart-note">${h0}</div>`}
                                </div>
                            `:U`<div class="agent-thinking-body agent-thinking-autoresearch-summary">Variable history will appear after the first completed run.</div>`}
                    </div>
                `}
            </div>
        `};return U`
        <div class="agent-status-panel">
            ${F&&G&&Z1(G,i0)}
            ${B&&Array.isArray(q)&&q.map((v)=>V0(v))}
            ${F&&_?.type==="intent"&&Z1(_,H1,V1)}
            ${F&&X&&U`
                <div class="agent-status agent-status-request" aria-live="polite" style=${l0?`--turn-color: ${l0};`:""}>
                    ${o0==="dot"&&U`<span class=${S0} aria-hidden="true"></span>`}
                    ${o0==="spinner"&&U`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${K1}</span>
                </div>
            `}
            ${F&&T&&j1({panelTitle:n0("Planning"),text:I.text,fullText:I.fullText,totalLines:I.totalLines,panelKey:"plan"})}
            ${F&&A&&j1({panelTitle:n0("Draft"),text:k.text,fullText:k.fullText,totalLines:k.totalLines,maxLines:9,titleClass:"thought",panelKey:"draft"})}
            ${F&&y&&j1({panelTitle:n0("Thoughts"),text:J.text,fullText:J.fullText,totalLines:J.totalLines,maxLines:9,titleClass:"thought",panelKey:"thought"})}
            ${F&&P&&j1({panelTitle:n0("Output"),text:O.text,fullText:O.fullText,totalLines:O.totalLines,maxLines:6,titleClass:"tool-output",panelKey:"tool-output"})}
            ${F&&_&&_?.type!=="intent"&&U`
                <div class=${`agent-status${Y0?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}${G1||J1.length>0||P0?" agent-status-multiline":""}`} aria-live="polite" style=${l0?`--turn-color: ${l0};`:""}>
                    ${l0&&m0&&U`<span class=${S0} aria-hidden="true"></span>`}
                    ${_?.type==="error"?U`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:_1==="spinner"&&U`<div class="agent-status-spinner"></div>`}
                    <div class="agent-status-copy">
                        <span class="agent-status-text">${Qk(Q1,_)}</span>
                        ${(G1||F0.length>0||P0)&&U`
                            <span class="agent-status-meta-row">
                                ${R0.map((v)=>U`
                                    <span key=${v.key} class="agent-status-hint-row" title=${v.title||v.label}>
                                        <span class="agent-status-hint-icon" dangerouslySetInnerHTML=${{__html:v.iconSvg}}></span>
                                        <span class="agent-status-hint-label">${v.label}</span>
                                    </span>
                                `)}
                                ${G1&&U`
                                    <span class="agent-status-git-row" title=${Q0||G1}>
                                        <span class="agent-status-git-icon">${rM}</span>
                                        <span class="agent-status-git-label">
                                            ${J0&&U`<span class="agent-status-git-part">${J0}</span>`}
                                            ${J0&&z1&&U`<span class="agent-status-git-separator" aria-hidden="true">•</span>`}
                                            ${z1&&U`<span class="agent-status-git-part">${z1}</span>`}
                                        </span>
                                    </span>
                                `}
                                ${w0.map((v)=>U`
                                    <span key=${v.key} class="agent-status-hint-row" title=${v.title||v.label}>
                                        <span class="agent-status-hint-icon" dangerouslySetInnerHTML=${{__html:v.iconSvg}}></span>
                                        <span class="agent-status-hint-label">${v.label}</span>
                                    </span>
                                `)}
                                ${P0&&U`
                                    <span class="agent-status-hint-row agent-status-activity-row" title=${`${Y0?"Recent activity":"Last event"} ${P0}`}>
                                        <span class="agent-status-hint-icon">${nM}</span>
                                        <span class="agent-status-hint-label">${P0}</span>
                                    </span>
                                `}
                            </span>
                        `}
                    </div>
                </div>
            `}
        </div>
    `}function aK({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Z,options:X,chat_jid:G}=_,q=Z?.title||"Agent Request",Q=Z?.kind||"other",K=Z?.rawInput||{},V=K.command||K.commands&&K.commands[0]||null,Y=K.diff||null,N=K.fileName||K.path||null,F=Z?.description||K.description||K.explanation||null,D=(Array.isArray(Z?.locations)?Z.locations:[]).map((E)=>E?.path).filter((E)=>Boolean(E)),z=Array.from(new Set([N,...D].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Z,options:X});let H=async(E)=>{try{await H5(j,E,G||null),$()}catch(L){console.error("Failed to respond to agent request:",L)}},W=async()=>{try{await j9(q,`Auto-approved: ${q}`),await H5(j,"approved",G||null),$()}catch(E){console.error("Failed to add to whitelist:",E)}},M=X&&X.length>0;return U`
        <div class="agent-request-modal">
            <div class="agent-request-content">
                <div class="agent-request-header">
                    <div class="agent-request-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                    </div>
                    <div class="agent-request-title">${q}</div>
                </div>
                ${(F||V||Y||z.length>0)&&U`
                    <div class="agent-request-body">
                        ${F&&U`
                            <div class="agent-request-description">${F}</div>
                        `}
                        ${z.length>0&&U`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${z.map((E,L)=>U`<li key=${L}>${E}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${V&&U`
                            <pre class="agent-request-command">${V}</pre>
                        `}
                        ${Y&&U`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${Y}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${M?X.map((E)=>U`
                            <button 
                                key=${E.optionId||E.id||String(E)}
                                class="agent-request-btn ${E.kind==="allow_once"||E.kind==="allow_always"?"primary":""}"
                                onClick=${()=>H(E.optionId||E.id||E)}
                            >
                                ${E.name||E.label||E.optionId||E.id||String(E)}
                            </button>
                        `):U`
                        <button class="agent-request-btn primary" onClick=${()=>H("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>H("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${W}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}M0();M0();y1();function f6(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>f6($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${f6(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function tK(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:f6(j)})).filter(($)=>$.value)}function Kk(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function Lj(_){if(!Array.isArray(_))return[];return _.filter(Kk)}function I8(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Z=f6(j);return Z?`Card submission: ${$} — ${Z}`:`Card submission: ${$}`}if(typeof j==="object"){let X=tK(j).map(({key:G,value:q})=>`${G}: ${q}`);return X.length>0?`Card submission: ${$} — ${X.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function eK(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=tK(_.data),Z=j.length>0?j.slice(0,2).map(({key:G,value:q})=>`${G}: ${q}`).join(", "):f6(_.data)||null,X=j.length;return{title:$,summary:Z,fields:j,fieldCount:X,submittedAt:_.submitted_at}}function P1(_){return typeof _==="string"?_.trim():""}function _Y(_){return _.map(($)=>String($||"").trim()).filter(Boolean).join(`

`).replace(/\n{3,}/g,`

`).trim()}function Yk(_,$){let j=[],Z=[],X=[];if(_.forEach((G,q)=>{if(!G||typeof G!=="object")return;let Q=P1(G.type);if(Q==="text"){let K=P1(G.text)||P1(G.content);if(K)j.push(K);return}if(Q==="resource_link"){let K=P1(G.uri),V=P1(G.title)||P1(G.name)||K;if(K&&V)j.push(V===K?K:`[${V}](${K})`);return}if(Q==="resource"){let K=P1(G.title)||P1(G.name)||P1(G.uri)||"Embedded resource",V=P1(G.text);if(V)j.push(`### ${K}

\`\`\`
${V}
\`\`\``);else j.push(`### ${K}`);return}if(Q==="generated_widget"){let K=P1(G.title)||P1(G.name)||"Generated widget",V=P1(G.description)||P1(G.subtitle);j.push(_Y([`### ${K}`,V]));return}if(Q==="adaptive_card"&&P1(G.fallback_text)){j.push(P1(G.fallback_text));return}if(Q==="adaptive_card_submission"){let K=I8(G);if(P1(K))j.push(P1(K));return}if(Q==="file"){let K=P1(G.name)||P1(G.filename)||P1(G.title)||`attachment:${$[q]??q+1}`;Z.push(`- ${K}`);return}if(Q==="image"||!Q){let K=P1(G.name)||P1(G.filename)||P1(G.title)||`attachment:${$[q]??q+1}`;X.push(`- ${K}`)}}),X.length>0)j.push(`Images:
${X.join(`
`)}`);if(Z.length>0)j.push(`Attachments:
${Z.join(`
`)}`);return _Y(j)}function x8(_){let $=_?.data||{},j=typeof $.content==="string"?$.content.replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd():"";if(j.trim())return j;let Z=Array.isArray($.content_blocks)?$.content_blocks:[],X=Array.isArray($.media_ids)?$.media_ids:[];return Yk(Z,X)}function $Y(_,$,j){try{return _.setAttribute($,j),!0}catch(Z){return!1}}function jY(_,$){try{return _[$]=!0,!0}catch(j){return!1}}function ZY(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;if($Y(j,"aria-disabled","true"),$Y(j,"tabindex","-1"),"disabled"in j)jY(j,"disabled");if("readOnly"in j)jY(j,"readOnly")}}function Nk(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Z=j[1].length===3?j[1].split("").map((X)=>`${X}${X}`).join(""):j[1];return{r:parseInt(Z.slice(0,2),16),g:parseInt(Z.slice(2,4),16),b:parseInt(Z.slice(4,6),16)}}function Bk(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Z=Number(j[1]),X=Number(j[2]),G=Number(j[3]);if(![Z,X,G].every((q)=>Number.isFinite(q)))return null;return{r:Z,g:X,b:G}}function XY(_){return Nk(_)||Bk(_)}function C8(_){let $=(G)=>{let q=G/255;return q<=0.03928?q/12.92:((q+0.055)/1.055)**2.4},j=$(_.r),Z=$(_.g),X=$(_.b);return 0.2126*j+0.7152*Z+0.0722*X}function Fk(_,$){let j=Math.max(C8(_),C8($)),Z=Math.min(C8(_),C8($));return(j+0.05)/(Z+0.05)}function Uk(_,$,j="#ffffff"){let Z=XY(_);if(!Z)return j;let X=j,G=-1;for(let q of $){let Q=XY(q);if(!Q)continue;let K=Fk(Z,Q);if(K>G)X=q,G=K}return X}function Jj(){let _=getComputedStyle(document.documentElement),$=(D,z)=>{for(let H of D){let W=_.getPropertyValue(H).trim();if(W)return W}return z},j=$(["--text-primary","--color-text"],"#0f1419"),Z=$(["--text-secondary","--color-text-muted"],"#536471"),X=$(["--bg-primary","--color-bg-primary"],"#ffffff"),G=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),q=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),Q=$(["--accent-color","--color-accent"],"#1d9bf0"),K=$(["--success-color","--color-success"],"#00ba7c"),V=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),Y=$(["--danger-color","--color-error"],"#f4212e"),N=$(["--border-color","--color-border"],"#eff3f4"),F=$(["--font-family"],"system-ui, sans-serif"),B=Uk(Q,[j,X],j);return{fg:j,fgMuted:Z,bgPrimary:X,bg:G,bgEmphasis:q,accent:Q,good:K,warning:V,attention:Y,border:N,fontFamily:F,buttonTextColor:B}}function GY(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Z,accent:X,good:G,warning:q,attention:Q,border:K,fontFamily:V}=Jj();return{fontFamily:V,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:X,subtle:X},good:{default:G,subtle:G},warning:{default:q,subtle:q},attention:{default:Q,subtle:Q}}},emphasis:{backgroundColor:Z,foregroundColors:{default:{default:_,subtle:$},accent:{default:X,subtle:X},good:{default:G,subtle:G},warning:{default:q,subtle:q},attention:{default:Q,subtle:Q}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:K},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var Dk=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),qY=!1,P8=null,QY=!1;function Ej(_){_.querySelector(".adaptive-card-notice")?.remove()}function zk(_,$,j="error"){Ej(_);let Z=document.createElement("div");Z.className=`adaptive-card-notice adaptive-card-notice-${j}`,Z.textContent=$,_.appendChild(Z)}function Hk(_,$=(j)=>V_(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function Wk(_=($)=>V_($,null)){return($,j)=>{try{let Z=Hk($,_);j.outputHtml=Z.outputHtml,j.didProcess=Z.didProcess}catch(Z){console.error("[adaptive-card] Failed to process markdown:",Z),j.outputHtml=String($??""),j.didProcess=!1}}}function Ok(_){if(QY||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=Wk(),QY=!0}async function Lk(){if(qY)return;if(P8)return P8;return P8=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{qY=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),P8}function Jk(){return globalThis.AdaptiveCards}function Ek(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function Ak(_){return Dk.has(_)}function Mj(_){if(!Array.isArray(_))return[];return _.filter(Ek)}function Mk(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",Z=(typeof _?.url==="string"?_.url:"")||void 0,X=_?.data??void 0;return{type:$,title:j,data:X,url:Z,raw:_}}function Aj(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>Aj($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Z])=>`${j}: ${Aj(Z)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function kk(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return Aj($);return typeof $==="string"?$:String($)}function Tk(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Z=(X)=>{if(Array.isArray(X))return X.map((Q)=>Z(Q));if(!X||typeof X!=="object")return X;let q={...X};if(typeof q.id==="string"&&q.id in j&&String(q.type||"").startsWith("Input."))q.value=kk(q.type,j[q.id],q);for(let[Q,K]of Object.entries(q))if(Array.isArray(K)||K&&typeof K==="object")q[Q]=Z(K);return q};return Z(_)}function yk(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function wk(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Z=j&&typeof j.title==="string"?j.title.trim():"",X=yk(_.completed_at||j?.submitted_at),G=[Z||null,X||null].filter(Boolean).join(" · ")||null;return{label:$,detail:G}}async function VY(_,$,j){if(!Ak($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await Lk()}catch(Z){return console.error("[adaptive-card] Failed to load SDK:",Z),!1}try{let Z=Jk();Ok(Z);let X=new Z.AdaptiveCard,G=Jj();X.hostConfig=new Z.HostConfig(GY());let q=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,Q=$.state==="active"?$.payload:Tk($.payload,q);X.parse(Q),X.onExecuteAction=(Y)=>{let N=Mk(Y);if(j?.onAction)Ej(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(N)).catch((F)=>{console.error("[adaptive-card] Action failed:",F);let B=F instanceof Error?F.message:String(F||"Action failed.");zk(_,B||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",N)};let K=X.render();if(!K)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",G.buttonTextColor);let V=wk($);if(V){_.classList.add("adaptive-card-finished");let Y=document.createElement("div");Y.className=`adaptive-card-status adaptive-card-status-${$.state}`;let N=document.createElement("span");if(N.className="adaptive-card-status-label",N.textContent=V.label,Y.appendChild(N),V.detail){let F=document.createElement("span");F.className="adaptive-card-status-detail",F.textContent=V.detail,Y.appendChild(F)}_.appendChild(Y)}if(Ej(_),_.appendChild(K),V)ZY(K);return!0}catch(Z){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Z),!1}}M0();e2();function KY({src:_,onClose:$}){return b(()=>{let j=(Z)=>{if(Z.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),U`
        <${o$} className="image-modal-portal-root">
            <div class="image-modal" onClick=${$}>
                <img src=${_} alt="Full size" />
            </div>
        </${o$}>
    `}var f8=0,kj=null,R6={activePostId:null,speaking:!1},Tj=new Set;function wj(_={}){return _.window??(typeof window<"u"?window:null)}function YY(_={}){return wj(_)?.speechSynthesis||null}function yj(){let _={...R6};for(let $ of Tj)try{$(_)}catch(j){console.warn("[post-speech] playback listener failed:",j)}}function Ij(){return{...R6}}function NY(_){if(typeof _!=="function")return()=>{};return Tj.add(_),_(Ij()),()=>Tj.delete(_)}function BY(_={}){let $=wj(_);return Boolean($&&$.speechSynthesis&&typeof $.SpeechSynthesisUtterance==="function")}function FY(_){let $=x8(_);if(!$)return"";return String($).replace(/```[\s\S]*?```/g," Code block omitted. ").replace(/`([^`]+)`/g,"$1").replace(/!\[([^\]]*)\]\(([^)]+)\)/g,"$1").replace(/\[([^\]]+)\]\(([^)]+)\)/g,"$1").replace(/^#{1,6}\s+/gm,"").replace(/^>\s?/gm,"").replace(/^[-*+]\s+/gm,"• ").replace(/\n{3,}/g,`

`).replace(/\n\n+/g,". ").replace(/\s+/g," ").replace(/\s+([.,;:!?])/g,"$1").trim().slice(0,1600)}function UY(_={}){let $=YY(_);if(f8+=1,kj=null,R6={activePostId:null,speaking:!1},$)try{$.cancel()}catch(j){console.warn("[post-speech] cancel failed:",j)}yj()}function DY(_,$,j={}){let Z=wj(j),X=YY(j);if(!Z||!X||typeof Z.SpeechSynthesisUtterance!=="function")return!1;let G=String($||"").trim();if(!G)return!1;let q=f8+1;f8=q;try{X.cancel()}catch{}let Q=new Z.SpeechSynthesisUtterance(G);kj=Q,R6={activePostId:_,speaking:!0},yj();let K=()=>{if(q!==f8)return;kj=null,R6={activePostId:null,speaking:!1},yj()};Q.onend=K,Q.onerror=K;try{return X.speak(Q),!0}catch(V){return console.warn("[post-speech] speak failed:",V),K(),!1}}async function HY(_,$){try{return await _?.writeText?.($),!0}catch(j){return!1}}function xj(_,$){let j=typeof $?.text==="string"?$.text:"",Z=typeof $?.html==="string"?$.html:"";if(!_||!j||typeof _.createElement!=="function"||typeof _.execCommand!=="function")return!1;let X=null,G=!1,q=(Q)=>{let K=Q?.clipboardData;if(!K||typeof K.setData!=="function")return;if(K.setData("text/plain",j),Z)K.setData("text/html",Z);if(typeof Q.preventDefault==="function")Q.preventDefault();G=!0};try{if(X=_.createElement("textarea"),X.value=j,typeof X.setAttribute==="function")X.setAttribute("readonly","");if(X.style)X.style.position="fixed",X.style.opacity="0",X.style.pointerEvents="none";if(_.body?.appendChild?.(X),typeof X.select==="function")X.select();if(typeof X.setSelectionRange==="function")X.setSelectionRange(0,X.value.length);_.addEventListener?.("copy",q,!0);let Q=_.execCommand("copy");return Boolean(G||Q)}catch{return!1}finally{if(_.removeEventListener?.("copy",q,!0),X)_.body?.removeChild?.(X)}}function zY(_){if(!_||typeof _!=="object")return null;let $=_;if(typeof $.nodeType==="number"&&$.nodeType===3)return $.parentNode||null;return $}function WY(_,$){let j=_?.clipboardData,Z=$?.root,X=$?.selection;if(!j||typeof j.setData!=="function"||!Z||!X)return!1;if(X.isCollapsed)return!1;let G=!1;if(Number(X.rangeCount||0)>0&&typeof X.getRangeAt==="function")try{let K=X.getRangeAt(0);if(K&&typeof K.intersectsNode==="function")G=Boolean(K.intersectsNode(Z))}catch{G=!1}if(!G&&typeof Z.contains==="function"){let K=zY(X.anchorNode),V=zY(X.focusNode);G=Boolean(K&&Z.contains(K)||V&&Z.contains(V))}if(!G)return!1;let Q=typeof X.toString==="function"?String(X.toString()||"").replace(/\u00a0/g," "):"";if(!Q)return!1;return j.setData("text/plain",Q),_?.preventDefault?.(),!0}function OY(_,$){try{return Boolean(_?.getItem?.($))}catch(j){return!1}}function LY(_,$,j){try{return _?.setItem?.($,j),!0}catch(Z){return!1}}function JY(_,$){let j=typeof _==="string"&&_.trim()?_.trim():null;if(j)return j;if(!$)return null;try{return new URL($).hostname}catch(Z){return $}}function Ik({mediaId:_,onPreview:$}){let[j,Z]=C(null);if(b(()=>{l2(_).then(Z).catch((V)=>{console.warn("[post] Failed to load attachment metadata for file card:",_,V)})},[_]),!j)return null;let X=j.filename||"file",G=j.metadata?.size,q=G?t1(G):"",K=P6(j.content_type,j.filename)!=="unsupported";return U`
        <div class="file-attachment" onClick=${(V)=>V.stopPropagation()}>
            <a href=${v_(_)} download=${X} class="file-attachment-main">
                <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                </svg>
                <div class="file-info">
                    <span class="file-name">${X}</span>
                    <span class="file-meta-row">
                        ${q&&U`<span class="file-size">${q}</span>`}
                        ${j.content_type&&U`<span class="file-size">${j.content_type}</span>`}
                    </span>
                </div>
                <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
            </a>
            ${K&&U`
                <button
                    class="file-attachment-preview"
                    type="button"
                    onClick=${(V)=>{V.preventDefault(),V.stopPropagation(),$?.({mediaId:_,info:j})}}
                >
                    Preview
                </button>
            `}
        </div>
    `}function xk(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="recovery_marker"&&$.recovered)}function Ck(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="timeout_marker"&&($.timed_out??!0))}function Pk(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="turn_outcome_marker")}function fk(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="peer_message")}function Rk(_){return String(_||"").split(/[:/]/).filter(Boolean).pop()||"agent"}function EY(_){let $=fk(_)[0]||null;if(!$)return null;let j=typeof $.source_chat_jid==="string"?$.source_chat_jid.trim():"",Z=typeof $.source_agent_name==="string"&&$.source_agent_name.trim()?$.source_agent_name.trim():Rk(j),X=typeof $.target_chat_jid==="string"?$.target_chat_jid.trim():"",G=typeof $.target_agent_name==="string"?$.target_agent_name.trim():"",q=typeof $.body==="string"?$.body:"";return{block:$,sourceChatJid:j,sourceAgentName:Z,targetChatJid:X,targetAgentName:G,body:q}}function Sk(_,$){let j=EY($),Z=typeof _==="string"?_:"";if(!j)return Z;if(j.body&&j.body.trim())return j.body;let X=j.sourceAgentName?j.sourceAgentName.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"):"[^\\s>]+",G=j.sourceChatJid?j.sourceChatJid.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"):"[^>\\n]+";return Z.replace(new RegExp(`^from:\\s+@${X}\\s+<jid:${G}>\\s*\\n\\n`,"i"),"")||Z}var bk={context_recover:"context limit exceeded",rate_limit:"rate limit hit",api_error:"API error",timeout:"request timeout",overloaded:"service overloaded",connection:"connection error"};function gk(_){let $=Number(_?.attempts_used||0),j=String(_?.classifier||"").trim(),Z=bk[j]||(j?j.replace(/_/g," "):""),X=["Recovered automatically"];if($>1)X[0]=`Recovered after ${$} attempts`;if(Z)X.push(Z);return X.join(" — ")}function uk(_){let $=typeof _?.tool_action_summary==="string"?_.tool_action_summary.trim():"",j=_?.draft_recovered?" Showing recovered draft.":"";return $?`Turn timed out — ${$}${j}`:`Turn timed out before the model finished responding${j}`}function vk({marker:_}){let[$,j]=C(!1),Z=R((N)=>{N.stopPropagation(),j((F)=>!F)},[]),X=typeof _?.title==="string"?_.title.trim():"",G=typeof _?.detail==="string"?_.detail.trim():"",q=typeof _?.tool_action_summary==="string"?_.tool_action_summary.trim():"",Q=_?.draft_recovered,K=String(_?.severity||"warning"),V=q||X||String(_?.label||_?.kind||"issue"),Y=Boolean(G||X&&q);return U`
        <div class=${`post-outcome-pill post-outcome-pill-${K}`}>
            <div class="post-outcome-pill-header" onClick=${Y?Z:void 0}>
                ${Y&&U`
                    <span class="post-outcome-pill-toggle" aria-hidden="true">${$$($?"down":"right")}</span>
                `}
                <span class="post-outcome-pill-label">${V}</span>
                ${Q&&U`<span class="post-outcome-pill-badge">draft recovered</span>`}
            </div>
            ${$&&Y&&U`
                <div class="post-outcome-pill-detail">
                    ${X&&U`<div><strong>${X}</strong></div>`}
                    ${G&&G!==X&&U`<div>${G}</div>`}
                </div>
            `}
        </div>
    `}function mk({attachment:_,onPreview:$}){let j=Number(_?.id),[Z,X]=C(null);b(()=>{if(!Number.isFinite(j))return;l2(j).then(X).catch((Y)=>{console.warn("[post] Failed to load attachment metadata for attachment pill:",j,Y)});return},[j]);let G=Z?.filename||_.label||`attachment-${_.id}`,q=Number.isFinite(j)?v_(j):null,Q=P6(Z?.content_type,Z?.filename||_?.label),K=T8(Q),V=Q!=="unsupported";return U`
        <span class="attachment-pill" title=${G}>
            ${q?U`
                    <a href=${q} download=${G} class="attachment-pill-main" onClick=${(Y)=>Y.stopPropagation()}>
                        <${U_}
                            prefix="post"
                            label=${_.label}
                            title=${G}
                        />
                    </a>
                `:U`
                    <${U_}
                        prefix="post"
                        label=${_.label}
                        title=${G}
                    />
                `}
            ${Number.isFinite(j)&&Z&&V&&U`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${K}
                    onClick=${(Y)=>{Y.preventDefault(),Y.stopPropagation(),$?.({mediaId:j,info:Z})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function R8({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Z}=_,X=Z?C4(Z):null;return U`
        <div class="content-annotations">
            ${$&&$.length>0&&U`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof j==="number"&&U`
                <span class="content-annotation">Priority: ${j}</span>
            `}
            ${X&&U`
                <span class="content-annotation">Updated: ${X}</span>
            `}
        </div>
    `}function ck({block:_}){let $=_.title||_.name||_.uri,j=_.description,Z=_.size?t1(_.size):"",X=_.mime_type||"",G=pk(X),q=k4(_.uri);return U`
        <a
            href=${q||"#"}
            class="resource-link"
            target=${q?"_blank":void 0}
            rel=${q?"noopener noreferrer":void 0}
            onClick=${(Q)=>Q.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${G}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${j&&U`<div class="resource-link-description">${j}</div>`}
                <div class="resource-link-meta">
                    ${X&&U`<span>${X}</span>`}
                    ${Z&&U`<span>${Z}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function hk({block:_}){let[$,j]=C(!1),Z=_.uri||"Embedded resource",X=_.text||"",G=Boolean(_.data),q=_.mime_type||"";return U`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(Q)=>{Q.preventDefault(),Q.stopPropagation(),j(!$)}}>
                ${$$($?"down":"right")} ${Z}
            </button>
            ${$&&U`
                ${X&&U`<pre class="resource-embed-content">${X}</pre>`}
                ${G&&U`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${q&&U`<span class="resource-embed-blob-meta">${q}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(Q)=>{Q.preventDefault(),Q.stopPropagation();let K=new Blob([Uint8Array.from(atob(_.data),(N)=>N.charCodeAt(0))],{type:q||"application/octet-stream"}),V=URL.createObjectURL(K),Y=document.createElement("a");Y.href=V,Y.download=Z.split("/").pop()||"resource",Y.click(),URL.revokeObjectURL(V)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function lk({block:_,post:$,onOpenWidget:j}){if(!_)return null;let Z=Fj(_,$),X=aV(_),G=Z?.artifact?.kind||_?.artifact?.kind||_?.kind||null,q=Z?.title||_.title||_.name||"Generated widget",Q=Z?.description||_.description||_.subtitle||"",K=_.open_label||"Open widget",V=g(!1),Y=(N)=>{if(N)N.preventDefault(),N.stopPropagation();if(!Z)return;j?.(Z)};return b(()=>{if(!_?.auto_open||!Z||!X||V.current)return;let N=$?.timestamp?new Date($.timestamp).getTime():0;if(N&&Date.now()-N>1e4)return;let F=`widget_opened_${_.widget_id||$?.id||""}`;if(OY(sessionStorage,F))return;V.current=!0,LY(sessionStorage,F,"1"),j?.(Z)},[_?.auto_open,Z,X]),U`
        <div class="generated-widget-launch" onClick=${(N)=>N.stopPropagation()}>
            <div class="generated-widget-launch-header">
                <div class="generated-widget-launch-eyebrow">Generated widget${G?` • ${String(G).toUpperCase()}`:""}</div>
                <div class="generated-widget-launch-title">${q}</div>
            </div>
            ${Q&&U`<div class="generated-widget-launch-description">${Q}</div>`}
            <div class="generated-widget-launch-actions">
                <button
                    class="generated-widget-launch-btn"
                    type="button"
                    disabled=${!X}
                    onClick=${Y}
                    title=${X?"Open widget in a floating pane with a zen-mode toggle":"Unsupported widget artifact"}
                >
                    ${K}
                </button>
                <span class="generated-widget-launch-note">
                    ${X?"Opens in a dismissible floating pane with a zen-mode toggle.":"This widget artifact is missing or unsupported."}
                </span>
            </div>
        </div>
    `}function pk(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function rk(_){let $=k4(_,{allowDataImage:!0});return $?{backgroundImage:`url("${$}")`}:void 0}function nk({preview:_}){let $=k4(_.url),j=rk(_.image),Z=JY(_.site_name,$);return U`
        <a
            href=${$||"#"}
            class="link-preview ${j?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(X)=>X.stopPropagation()}
            style=${j}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${Z||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&U`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function dk(_,$){return typeof _==="string"?_:""}var AY=1800,ok=40,ik=24576,sk=16,ak=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,tk=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,ek=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`,_T=`
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
</style>`;function $T(_,$={}){let j=typeof _==="string"?_:"",Z=j?j.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`):[],X=new TextEncoder().encode(j).byteLength,G=Number.isFinite($.lineThreshold)?$.lineThreshold:ok,q=Number.isFinite($.byteThreshold)?$.byteThreshold:ik,Q=Z.length>G||X>q,K=Math.min(Z.length,Number.isFinite($.previewLines)?$.previewLines:sk);return{shouldCollapse:Q,lineCount:Z.length,byteLength:X,visibleLines:K,omittedLines:Math.max(0,Z.length-K)}}async function MY(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(xj(document,{text:$}))return!0;if(await HY(navigator.clipboard,$))return!0;try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Z=document.execCommand("copy");return document.body.removeChild(j),Z}catch{return!1}}async function jT(_){let $=typeof _==="string"?_:"";if(!$)return!1;let j=V_($,null),Z=`<html><head>${_T}</head><body>${j}</body></html>`;if(xj(document,{text:$,html:Z}))return!0;if(navigator.clipboard?.write&&typeof ClipboardItem<"u")try{let X=new ClipboardItem({"text/plain":new Blob([$],{type:"text/plain"}),"text/html":new Blob([Z],{type:"text/html"})});return await navigator.clipboard.write([X]),!0}catch(X){console.warn("[post] Rich clipboard write failed, falling back to plain text copy.",X)}return MY($)}function ZT(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((q)=>q.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Z=[],X=(q)=>{let Q=window.getSelection?.();if(!Q||Q.isCollapsed)return;for(let K of $)if(WY(q,{root:K,selection:Q}))return};document.addEventListener("copy",X,!0),Z.push(()=>document.removeEventListener("copy",X,!0));let G=(q,Q)=>{let K=Q||"idle";if(q.dataset.copyState=K,K==="success")q.innerHTML=tk,q.setAttribute("aria-label","Copied"),q.setAttribute("title","Copied"),q.classList.add("is-success"),q.classList.remove("is-error");else if(K==="error")q.innerHTML=ek,q.setAttribute("aria-label","Copy failed"),q.setAttribute("title","Copy failed"),q.classList.add("is-error"),q.classList.remove("is-success");else q.innerHTML=ak,q.setAttribute("aria-label","Copy code"),q.setAttribute("title","Copy code"),q.classList.remove("is-success","is-error")};return $.forEach((q)=>{let Q=document.createElement("div");Q.className="post-code-block";let K=q.querySelector("code"),V=$T(K?.textContent||"");if(V.shouldCollapse){Q.classList.add("post-code-block-collapsed"),Q.style.setProperty("--post-code-preview-lines",String(V.visibleLines));let F=document.createElement("button");F.type="button",F.className="post-code-expand-btn";let B=()=>{let z=Q.classList.contains("post-code-block-expanded");F.innerHTML=z?`${Wj("up")} <span>Collapse output</span>`:`${Wj("right")} <span>Expand output · ${V.lineCount.toLocaleString()} lines · ${t1(V.byteLength)}${V.omittedLines?` · ${V.omittedLines.toLocaleString()} hidden`:""}</span>`,F.setAttribute("aria-expanded",z?"true":"false")},D=(z)=>{z.preventDefault(),z.stopPropagation(),Q.classList.toggle("post-code-block-expanded"),B()};F.addEventListener("click",D),B(),Q.appendChild(F),Z.push(()=>F.removeEventListener("click",D))}q.parentNode?.insertBefore(Q,q),Q.appendChild(q);let Y=document.createElement("button");Y.type="button",Y.className="post-code-copy-btn",G(Y,"idle"),Q.appendChild(Y);let N=async(F)=>{F.preventDefault(),F.stopPropagation();let D=q.querySelector("code")?.textContent||"",z=await MY(D);G(Y,z?"success":"error");let H=j.get(Y);if(H)clearTimeout(H);let W=setTimeout(()=>{G(Y,"idle"),j.delete(Y)},AY);j.set(Y,W)};Y.addEventListener("click",N),Z.push(()=>{Y.removeEventListener("click",N);let F=j.get(Y);if(F)clearTimeout(F);if(Q.parentNode)Q.parentNode.insertBefore(q,Q),Q.remove()})}),()=>{Z.forEach((q)=>q())}}function kY(_){let $=String(_||"").trim(),j=$.match(/^`([^`]+)`$/);return(j?j[1]:$).trim()}function XT(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let V=0;V<j.length;V+=1)if(j[V].trim()==="Files:"&&j[V+1]&&/^\s*-\s+/.test(j[V+1])){Z=V;break}if(Z===-1)return{content:_,fileRefs:[]};let X=[],G=Z+1;for(;G<j.length;G+=1){let V=j[G];if(/^\s*-\s+/.test(V)){let Y=kY(V.replace(/^\s*-\s+/,"").trim());if(Y)X.push(Y)}else if(!V.trim())break;else break}if(X.length===0)return{content:_,fileRefs:[]};let q=j.slice(0,Z),Q=j.slice(G),K=[...q,...Q].join(`
`);return K=K.replace(/\n{3,}/g,`

`).trim(),{content:K,fileRefs:X}}function GT(_){if(!_)return{content:_,folderRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let V=0;V<j.length;V+=1)if(j[V].trim()==="Folders:"&&j[V+1]&&/^\s*-\s+/.test(j[V+1])){Z=V;break}if(Z===-1)return{content:_,folderRefs:[]};let X=[],G=Z+1;for(;G<j.length;G+=1){let V=j[G];if(/^\s*-\s+/.test(V)){let Y=kY(V.replace(/^\s*-\s+/,"").trim());if(Y)X.push(Y)}else if(!V.trim())break;else break}if(X.length===0)return{content:_,folderRefs:[]};let q=j.slice(0,Z),Q=j.slice(G),K=[...q,...Q].join(`
`);return K=K.replace(/\n{3,}/g,`

`).trim(),{content:K,folderRefs:X}}function qT(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let V=0;V<j.length;V+=1)if(j[V].trim()==="Referenced messages:"&&j[V+1]&&/^\s*-\s+/.test(j[V+1])){Z=V;break}if(Z===-1)return{content:_,messageRefs:[]};let X=[],G=Z+1;for(;G<j.length;G+=1){let V=j[G];if(/^\s*-\s+/.test(V)){let N=V.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(N)X.push(N[1])}else if(!V.trim())break;else break}if(X.length===0)return{content:_,messageRefs:[]};let q=j.slice(0,Z),Q=j.slice(G),K=[...q,...Q].join(`
`);return K=K.replace(/\n{3,}/g,`

`).trim(),{content:K,messageRefs:X}}function QT(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let V=0;V<j.length;V+=1){let Y=j[V].trim();if((Y==="Images:"||Y==="Attachments:")&&j[V+1]&&/^\s*-\s+/.test(j[V+1])){Z=V;break}}if(Z===-1)return{content:_,attachments:[]};let X=[],G=Z+1;for(;G<j.length;G+=1){let V=j[G];if(/^\s*-\s+/.test(V)){let Y=V.replace(/^\s*-\s+/,"").trim(),N=Y.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||Y.match(/^attachment:([^\s]+)\s+(.+)$/i);if(N){let F=N[1],B=(N[2]||"").trim()||F;X.push({id:F,label:B,raw:Y})}else X.push({id:null,label:Y,raw:Y})}else if(!V.trim())break;else break}if(X.length===0)return{content:_,attachments:[]};let q=j.slice(0,Z),Q=j.slice(G),K=[...q,...Q].join(`
`);return K=K.replace(/\n{3,}/g,`

`).trim(),{content:K,attachments:X}}function VT(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function KT(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Z=j.map(VT).sort((Y,N)=>N.length-Y.length),X=new RegExp(`(${Z.join("|")})`,"gi"),G=new RegExp(`^(${Z.join("|")})$`,"i"),q=new DOMParser().parseFromString(_,"text/html"),Q=q.createTreeWalker(q.body,NodeFilter.SHOW_TEXT),K=[],V;while(V=Q.nextNode())K.push(V);for(let Y of K){let N=Y.nodeValue;if(!N||!X.test(N)){X.lastIndex=0;continue}X.lastIndex=0;let F=Y.parentElement;if(F&&F.closest("code, pre, script, style"))continue;let B=N.split(X).filter((z)=>z!=="");if(B.length===0)continue;let D=q.createDocumentFragment();for(let z of B)if(G.test(z)){let H=q.createElement("mark");H.className="search-highlight-term",H.textContent=z,D.appendChild(H)}else D.appendChild(q.createTextNode(z));Y.parentNode.replaceChild(D,Y)}return q.body.innerHTML}function TY({post:_,onClick:$,onHashtagClick:j,onMessageRef:Z,onScrollToMessage:X,agentName:G,agentAvatarUrl:q,userName:Q,userAvatarUrl:K,userAvatarBackground:V,onDelete:Y,isThreadReply:N,isThreadPrev:F,isThreadNext:B,isRemoving:D,highlightQuery:z,onFileRef:H,onOpenWidget:W,onOpenAttachmentPreview:M}){let[E,L]=C(null),[x,I]=C("idle"),[J,k]=C(()=>Ij()),O=g(null),T=g(null),y=_.data,A=y.type==="agent_response",P=Q||"You",f=A?G||CK:P,u=typeof _.chat_agent_name==="string"?_.chat_agent_name.trim():"",c=Boolean(A&&z&&u&&u!==f),r=A?zj(G,q,!0):zj(P,K),e=typeof V==="string"?V.trim().toLowerCase():"",m=!A&&r.image&&(e==="clear"||e==="transparent"),$0=A&&Boolean(r.image),W0=`background-color: ${m||$0?"transparent":r.color}`,X0=y.content_meta,Z0=Boolean(X0?.truncated),q0=Boolean(X0?.preview),D0=Z0&&!q0,h=Z0?{originalLength:Number.isFinite(X0?.original_length)?X0.original_length:y.content?y.content.length:0,maxLength:Number.isFinite(X0?.max_length)?X0.max_length:0}:null,j0=y.content_blocks||[],Y0=y.media_ids||[],L0=EY(j0),s=Boolean(L0?.sourceAgentName),Q0=dk(y.content,y.link_previews);Q0=Sk(Q0,j0);let{content:O0,fileRefs:x0}=XT(Q0),{content:r0,folderRefs:l0}=GT(O0),{content:n0,messageRefs:m0}=qT(r0),_1=(o)=>{o?.preventDefault?.(),o?.stopPropagation?.(),Z?.(_.id,_.chat_jid||null)},S0=(o)=>{if(o.key==="Enter"||o.key===" ")_1(o)},{content:o0,attachments:c0}=QT(n0);Q0=o0;let $1=Mj(j0),i0=Lj(j0),Q1=xk(j0)[0]||null,J0=Ck(j0)[0]||null,G1=Pk(j0)[0]||null,J1=$1.length===1&&typeof $1[0]?.fallback_text==="string"?$1[0].fallback_text.trim():"",F0=i0.length===1?I8(i0[0]).trim():"",R0=Boolean(J1)&&Q0?.trim()===J1||Boolean(F0)&&Q0?.trim()===F0,w0=Boolean(Q0)&&!D0&&!R0,j1=typeof z==="string"?z.trim():"",x1=G0(()=>{if(!Q0||R0)return"";let o=V_(Q0,j);return j1?KT(o,j1):o},[Q0,R0,j1]),K1=G0(()=>x8(_),[_]),V1=G0(()=>BY(),[]),Z1=G0(()=>FY(_),[_]),E1=Boolean(J.speaking&&J.activePostId===_.id),c1=(o,z0)=>{o.stopPropagation(),L(v_(z0))},g1=(o)=>{M?.(o)},O1=(o)=>{o.stopPropagation(),Y?.(_)},e1=async(o)=>{o.stopPropagation();let z0=await jT(K1);if(I(z0?"success":"error"),T.current)clearTimeout(T.current);T.current=setTimeout(()=>{T.current=null,I("idle")},AY)},T1=(o)=>{if(o.stopPropagation(),E1){UY();return}DY(_.id,Z1)},V0=(o,z0)=>{let s0=new Set;if(!o||z0.length===0)return{content:o,usedIds:s0};return{content:o.replace(/attachment:([^\s)"']+)/g,(C1,Z_,A1,N_)=>{let p1=Z_.replace(/^\/+/,""),M_=z0.find((M1)=>M1.name&&M1.name.toLowerCase()===p1.toLowerCase()&&!s0.has(M1.id))||z0.find((M1)=>!s0.has(M1.id));if(!M_)return C1;if(s0.add(M_.id),N_.slice(Math.max(0,A1-2),A1)==="](")return`/media/${M_.id}`;return M_.name||"attachment"}),usedIds:s0}},v=[],n=[],a=[],_0=[],H0=[],A0=[],E0=[],C0=0;if(j0.length>0)j0.forEach((o)=>{if(o?.type==="text"&&o.annotations)E0.push(o.annotations);if(o?.type==="generated_widget")A0.push(o);else if(o?.type==="resource_link")_0.push(o);else if(o?.type==="resource")H0.push(o);else if(o?.type==="file"){let z0=Y0[C0++];if(z0)n.push(z0),a.push({id:z0,name:o?.name||o?.filename||o?.title})}else if(o?.type==="image"||!o?.type){let z0=Y0[C0++];if(z0){let s0=typeof o?.mime_type==="string"?o.mime_type:void 0;v.push({id:z0,annotations:o?.annotations,mimeType:s0}),a.push({id:z0,name:o?.name||o?.filename||o?.title})}}});else if(Y0.length>0){let o=c0.length>0;Y0.forEach((z0,s0)=>{let t0=c0[s0]||null;if(a.push({id:z0,name:t0?.label||null}),o)n.push(z0);else v.push({id:z0,annotations:null})})}if(c0.length>0)c0.forEach((o)=>{if(!o?.id)return;let z0=a.find((s0)=>String(s0.id)===String(o.id));if(z0&&!z0.name)z0.name=o.label});let{content:k0,usedIds:h0}=V0(Q0,a);Q0=k0;let v0=v.filter(({id:o})=>!h0.has(o)),p0=n.filter((o)=>!h0.has(o)),d0=c0.length>0?c0.map((o,z0)=>({id:o.id||`attachment-${z0+1}`,label:o.label||`attachment-${z0+1}`})):a.map((o,z0)=>({id:o.id,label:o.name||`attachment-${z0+1}`})),I0=G0(()=>Mj(j0),[j0]),T0=G0(()=>Lj(j0),[j0]),N1=G0(()=>{return I0.map((o)=>`${o.card_id}:${o.state}`).join("|")},[I0]);b(()=>{if(!O.current)return;return A$(O.current),ZT(O.current)},[x1]),b(()=>{return NY((o)=>{k(o)})},[]),b(()=>()=>{if(T.current)clearTimeout(T.current)},[]);let q1=g(null);return b(()=>{if(!q1.current||I0.length===0)return;let o=q1.current;o.innerHTML="";for(let z0 of I0){let s0=document.createElement("div");o.appendChild(s0),VY(s0,z0,{onAction:async(t0)=>{if(t0.type==="Action.OpenUrl"){let C1=k4(t0.url||"");if(!C1)throw Error("Invalid URL");window.open(C1,"_blank","noopener,noreferrer");return}if(t0.type==="Action.Submit"){await $9({post_id:_.id,thread_id:y.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:z0.card_id,action:{type:t0.type,title:t0.title||"",data:t0.data}});return}console.warn("[post] unsupported adaptive card action:",t0.type,t0)}}).catch((t0)=>{console.error("[post] adaptive card render error:",t0),s0.textContent=z0.fallback_text||"Card failed to render."})}},[N1,_.id]),U`
        <div id=${`post-${_.id}`} class="post ${A?"agent-post":""} ${N?"thread-reply":""} ${F?"thread-prev":""} ${B?"thread-next":""} ${D?"removing":""}" onClick=${$}>
            <div class="post-avatar ${A?"agent-avatar":""} ${r.image?"has-image":""}" style=${W0}>
                ${r.image?U`<img src=${r.image} alt=${f} />`:r.letter}
            </div>
            <div class="post-body">
                <div class="post-actions">
                    ${A&&V1&&Z1&&U`
                        <button
                            class=${`post-action-btn post-speak-btn${E1?" is-active":""}`}
                            type="button"
                            title=${E1?"Stop reading aloud":"Read aloud"}
                            aria-label=${E1?"Stop reading aloud":"Read aloud"}
                            onClick=${T1}
                        >
                            ${E1?U`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="6" y="6" width="12" height="12" rx="2"></rect></svg>`:U`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M11 5 6 9H3v6h3l5 4z"></path><path d="M15.5 8.5a5 5 0 0 1 0 7"></path><path d="M18 6a8.5 8.5 0 0 1 0 12"></path></svg>`}
                        </button>
                    `}
                    <button
                        class=${`post-action-btn post-copy-btn${x==="success"?" is-success":x==="error"?" is-error":""}`}
                        type="button"
                        title=${x==="success"?"Copied":x==="error"?"Copy failed":"Copy message"}
                        aria-label=${x==="success"?"Copied":x==="error"?"Copy failed":"Copy message"}
                        onClick=${e1}
                        disabled=${!K1}
                    >
                        ${x==="success"?U`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20 6L9 17l-5-5"></path></svg>`:x==="error"?U`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9"></circle><path d="M9 9l6 6M15 9l-6 6"></path></svg>`:U`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="9" y="9" width="10" height="10" rx="2"></rect><path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path></svg>`}
                    </button>
                    <button
                        class="post-action-btn post-delete-btn"
                        type="button"
                        title="Delete message"
                        aria-label="Delete message"
                        onClick=${O1}
                    >
                        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div class="post-meta">
                    <span class="post-author">${f}</span>
                    ${s&&U`
                        <span
                            class="post-chat-agent-tag"
                            title=${`From ${L0?.sourceChatJid||""}`.trim()}
                        >
                            @${L0?.sourceAgentName}
                        </span>
                    `}
                    ${c&&U`
                        <span
                            class="post-chat-agent-tag"
                            role="button"
                            tabIndex="0"
                            style="cursor:pointer"
                            title=${`Open ${u} and reference this message`}
                            onClick=${_1}
                            onKeyDown=${S0}
                        >
                            @${u}
                        </span>
                    `}
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${_1}>${Fq(_.timestamp)}</a>
                    ${Q1&&U`
                        <span
                            class="post-recovery-chip"
                            title=${gk(Q1)}
                        >
                            recovered
                        </span>
                    `}
                    ${J0&&U`
                        <span
                            class="post-recovery-chip post-timeout-chip"
                            title=${uk(J0)}
                        >
                            timeout
                        </span>
                    `}
                    ${G1&&U`
                        <span
                            class=${`post-recovery-chip post-outcome-chip post-outcome-chip-${String(G1.severity||"warning")}${G1.kind==="tool_budget"?" post-outcome-chip-tool-budget":""}`}
                            title=${String(G1.label||G1.kind||"issue")}
                        >
                            ${String(G1.label||G1.kind||"issue")}
                        </span>
                    `}
                </div>
                ${G1&&U`
                    <${vk} marker=${G1} />
                `}
                ${D0&&h&&U`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${W6(h.originalLength)} chars
                            ${h.maxLength?U` • Display limit: ${W6(h.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${q0&&h&&U`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${W6(h.maxLength)} of ${W6(h.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(x0.length>0||l0.length>0||m0.length>0||d0.length>0)&&U`
                    <div class="post-file-refs">
                        ${m0.map((o)=>{let z0=(s0)=>{if(s0.preventDefault(),s0.stopPropagation(),X)X(o,_.chat_jid||null);else{let t0=document.getElementById("post-"+o);if(t0)t0.scrollIntoView({behavior:"smooth",block:"center"}),t0.classList.add("post-highlight"),setTimeout(()=>t0.classList.remove("post-highlight"),2000)}};return U`
                                <a href=${`#msg-${o}`} class="post-msg-pill-link" onClick=${z0}>
                                    <${U_}
                                        prefix="post"
                                        label=${"msg:"+o}
                                        title=${"Message "+o}
                                        icon="message"
                                        onClick=${z0}
                                    />
                                </a>
                            `})}
                        ${x0.map((o)=>{let z0=o.split("/").pop()||o;return U`
                                <${U_}
                                    prefix="post"
                                    label=${z0}
                                    title=${o}
                                    onClick=${()=>H?.(o)}
                                />
                            `})}
                        ${l0.map((o)=>{let z0=o.split("/").pop()||o;return U`
                                <${U_}
                                    prefix="post"
                                    label=${z0}
                                    title=${o}
                                    icon="folder"
                                />
                            `})}
                        ${d0.map((o)=>U`
                            <${mk}
                                key=${o.id}
                                attachment=${o}
                                onPreview=${g1}
                            />
                        `)}
                    </div>
                `}
                ${w0&&U`
                    <div 
                        ref=${O}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:x1}}
                        onClick=${(o)=>{if(o.target.classList.contains("hashtag")){o.preventDefault(),o.stopPropagation();let z0=o.target.dataset.hashtag;if(z0)j?.(z0)}else if(o.target.tagName==="IMG")o.preventDefault(),o.stopPropagation(),L(o.target.src)}}
                    />
                `}
                ${I0.length>0&&U`
                    <div ref=${q1} class="post-adaptive-cards" />
                `}
                ${T0.length>0&&U`
                    <div class="post-adaptive-card-submissions">
                        ${T0.map((o,z0)=>{let s0=eK(o),t0=`${o.card_id}-${z0}`;return U`
                                <div key=${t0} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${s0.title}</span>
                                        </div>
                                    </div>
                                    ${s0.fields.length>0&&U`
                                        <div class="adaptive-card-submission-fields">
                                            ${s0.fields.map((C1)=>U`
                                                <span class="adaptive-card-submission-field" title=${`${C1.key}: ${C1.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${C1.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${C1.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${C4(s0.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${A0.length>0&&U`
                    <div class="generated-widget-launches">
                        ${A0.map((o,z0)=>U`
                            <${lk}
                                key=${o.widget_id||o.id||`${_.id}-widget-${z0}`}
                                block=${o}
                                post=${_}
                                onOpenWidget=${W}
                            />
                        `)}
                    </div>
                `}
                ${E0.length>0&&U`
                    ${E0.map((o,z0)=>U`
                        <${R8} key=${z0} annotations=${o} />
                    `)}
                `}
                ${v0.length>0&&U`
                    <div class="media-preview">
                        ${v0.map(({id:o,mimeType:z0})=>{let t0=typeof z0==="string"&&z0.toLowerCase().startsWith("image/svg")?v_(o):Z9(o);return U`
                                <img
                                    key=${o}
                                    src=${t0}
                                    alt="Media"
                                    loading="lazy"
                                    decoding="async"
                                    onClick=${(C1)=>c1(C1,o)}
                                />
                            `})}
                    </div>
                `}
                ${v0.length>0&&U`
                    ${v0.map(({annotations:o},z0)=>U`
                        ${o&&U`<${R8} key=${z0} annotations=${o} />`}
                    `)}
                `}
                ${p0.length>0&&U`
                    <div class="file-attachments">
                        ${p0.map((o)=>U`
                            <${Ik} key=${o} mediaId=${o} onPreview=${g1} />
                        `)}
                    </div>
                `}
                ${_0.length>0&&U`
                    <div class="resource-links">
                        ${_0.map((o,z0)=>U`
                            <div key=${z0}>
                                <${ck} block=${o} />
                                <${R8} annotations=${o.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${H0.length>0&&U`
                    <div class="resource-embeds">
                        ${H0.map((o,z0)=>U`
                            <div key=${z0}>
                                <${hk} block=${o} />
                                <${R8} annotations=${o.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${y.link_previews?.length>0&&U`
                    <div class="link-previews">
                        ${y.link_previews.map((o,z0)=>U`
                            <${nk} key=${z0} preview=${o} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${E&&U`<${KY} src=${E} onClose=${()=>L(null)} />`}

    `}function yY({posts:_,hasMore:$,onLoadMore:j,onPostClick:Z,onHashtagClick:X,onMessageRef:G,onScrollToMessage:q,onFileRef:Q,onOpenWidget:K,onOpenAttachmentPreview:V,emptyMessage:Y,timelineRef:N,agents:F,user:B,onDeletePost:D,reverse:z=!0,removingPostIds:H,searchQuery:W}){let[M,E]=C(!1),L=g(null),x=typeof IntersectionObserver<"u",I=R(async()=>{if(!j||!$||M)return;E(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{E(!1)}},[$,M,j]),J=R((u)=>{let{scrollTop:c,scrollHeight:r,clientHeight:e}=u.target,m=z?r-e-c:c,$0=Math.max(300,e);if(m<$0)I()},[z,I]);b(()=>{if(!x)return;let u=L.current,c=N?.current;if(!u||!c)return;let r=300,e=new IntersectionObserver((m)=>{for(let $0 of m){if(!$0.isIntersecting)continue;I()}},{root:c,rootMargin:`${r}px 0px ${r}px 0px`,threshold:0});return e.observe(u),()=>e.disconnect()},[x,$,j,N,I]);let k=g(I);if(k.current=I,b(()=>{if(x)return;if(!N?.current)return;let{scrollTop:u,scrollHeight:c,clientHeight:r}=N.current,e=z?c-r-u:u,m=Math.max(300,r);if(e<m)k.current?.()},[x,_,$,z,N]),b(()=>{if(!N?.current)return;if(!$||M)return;let{scrollTop:u,scrollHeight:c,clientHeight:r}=N.current,e=z?c-r-u:u,m=Math.max(300,r);if(c<=r+1||e<m)k.current?.()},[_,$,M,z,N]),!_)return U`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return U`
            <div class="timeline" ref=${N}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${Y||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let O=_.slice().sort((u,c)=>u.id-c.id),T=(u)=>{let c=u?.data?.thread_id;if(c===null||c===void 0||c==="")return null;let r=Number(c);return Number.isFinite(r)?r:null},y=new Map;for(let u=0;u<O.length;u+=1){let c=O[u],r=Number(c?.id),e=T(c);if(e!==null){let m=y.get(e)||{anchorIndex:-1,replyIndexes:[]};m.replyIndexes.push(u),y.set(e,m)}else if(Number.isFinite(r)){let m=y.get(r)||{anchorIndex:-1,replyIndexes:[]};m.anchorIndex=u,y.set(r,m)}}let A=new Map;for(let[u,c]of y.entries()){let r=new Set;if(c.anchorIndex>=0)r.add(c.anchorIndex);for(let e of c.replyIndexes)r.add(e);A.set(u,Array.from(r).sort((e,m)=>e-m))}let P=O.map((u,c)=>{let r=T(u);if(r===null)return{hasThreadPrev:!1,hasThreadNext:!1};let e=A.get(r);if(!e||e.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let m=e.indexOf(c);if(m<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:m>0,hasThreadNext:m<e.length-1}}),f=U`<div class="timeline-sentinel" ref=${L}></div>`;return U`
        <div class="timeline ${z?"reverse":"normal"}" ref=${N} onScroll=${J}>
            <div class="timeline-content">
                ${z?f:null}
                ${O.map((u,c)=>{let r=Boolean(u.data?.thread_id&&u.data.thread_id!==u.id),e=H?.has?.(u.id),m=P[c]||{};return U`
                    <${TY}
                        key=${u.id}
                        post=${u}
                        isThreadReply=${r}
                        isThreadPrev=${m.hasThreadPrev}
                        isThreadNext=${m.hasThreadNext}
                        isRemoving=${e}
                        highlightQuery=${W}
                        agentName=${PK(u.data?.agent_id,F||{})}
                        agentAvatarUrl=${fK(u.data?.agent_id,F||{})}
                        userName=${B?.name||B?.user_name}
                        userAvatarUrl=${B?.avatar_url||B?.avatarUrl||B?.avatar}
                        userAvatarBackground=${B?.avatar_background||B?.avatarBackground}
                        onClick=${()=>Z?.(u)}
                        onHashtagClick=${X}
                        onMessageRef=${G}
                        onScrollToMessage=${q}
                        onFileRef=${Q}
                        onOpenWidget=${K}
                        onDelete=${D}
                        onOpenAttachmentPreview=${V}
                    />
                `})}
                ${z?null:f}
            </div>
        </div>
    `}M0();y1();function wY(_){try{return _?.focus?.(),_?.select?.(),!0}catch($){return!1}}var S8="workspaceExplorerScale",YT=["compact","default","comfortable"],NT=new Set(YT),BT={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function IY(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return NT.has(j)?j:$}function Cj(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Z=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Z&&j}}function FT(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function UT(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function Pj(_={}){let $=FT(_),j=_.stored?IY(_.stored,$):$;return UT(j,_)}function xY(_){return BT[IY(_)]}g9();function DT(_){if(!_||_.kind!=="text")return!1;let $=Number(_.size);return!Number.isFinite($)||$<=262144}function fj(_,$){let j=String(_||"").trim();if(!j||j.endsWith("/"))return!1;if(typeof $!=="function")return!1;let Z=$({path:j,mode:"edit"});if(!Z||typeof Z!=="object")return!1;return Z.id!=="editor"}function CY(_,$,j={}){let Z=j.resolvePane;if(fj(_,Z))return!0;return DT($)}var fY="piclawPwaDisplayScalePercent",Rj="piclaw:pwa-display-scale-changed";var RY=20,SY=115,bY=5;function S6(_=typeof window<"u"?window:null){return _&&typeof _==="object"?_:null}function zT(_){return _?.navigator||(typeof navigator<"u"?navigator:null)}function PY(_){if(typeof _==="number")return Number.isFinite(_)?_:null;if(typeof _!=="string")return null;let $=_.trim();if(!$)return null;let j=$.endsWith("%")?$.slice(0,-1):$,Z=Number(j);if(!Number.isFinite(Z))return null;return Z>0&&Z<=2?Z*100:Z}function b8(_,$=100){let Z=PY(_)??PY($)??100;return Math.min(115,Math.max(20,Math.round(Z)))}function HT(_){return(b8(_)/100).toFixed(2).replace(/0+$/,"").replace(/\.$/,"")}function b6(_=typeof window<"u"?window:null){let $=S6(_);try{return b8($?.localStorage?.getItem("piclawPwaDisplayScalePercent"))}catch{return 100}}function WT(_=typeof window<"u"?window:null){let $=S6(_),j=zT($),Z=String(j?.userAgent||"");if(!/Android/i.test(Z))return!1;try{return["standalone","fullscreen","minimal-ui"].some((X)=>Boolean($?.matchMedia?.(`(display-mode: ${X})`)?.matches))}catch{return!1}}function OT(_,$={}){let j=b8(_);if(!$.applies||j===100)return"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover";let Z=HT(j);return`width=device-width, initial-scale=${Z}, minimum-scale=${Z}, maximum-scale=${Z}, user-scalable=no, viewport-fit=cover`}function gY(_=typeof window<"u"?window:null){let $=S6(_),j=b6($),Z=WT($)&&j!==100,X=OT(j,{applies:Z});return $?.document?.querySelector?.('meta[name="viewport"]')?.setAttribute?.("content",X),{percent:j,applied:Z,content:X}}function uY(_,$=typeof window<"u"?window:null){let j=S6($),Z=b8(_);try{j?.localStorage?.setItem("piclawPwaDisplayScalePercent",String(Z))}catch(X){console.warn("[pwa-display-scale] Unable to persist scale preference; applying in-memory value only.",X)}if(gY(j),j?.dispatchEvent){let X=typeof CustomEvent==="function"?new CustomEvent("piclaw:pwa-display-scale-changed",{detail:{percent:Z}}):{type:"piclaw:pwa-display-scale-changed",detail:{percent:Z}};j.dispatchEvent(X)}return Z}function vY(_=typeof window<"u"?window:null){let $=S6(_);if(!$?.addEventListener)return;let j=()=>gY($);j();let Z=(q)=>{if(!q||q.key===null||q.key==="piclawPwaDisplayScalePercent")j()},X=()=>j();$.addEventListener("storage",Z),$.addEventListener("focus",j),$.addEventListener("piclaw:pwa-display-scale-changed",X);let G=["standalone","fullscreen","minimal-ui"].map((q)=>{try{return $.matchMedia?.(`(display-mode: ${q})`)}catch{return null}}).filter(Boolean);for(let q of G)if(q.addEventListener)q.addEventListener("change",j);else if(q.addListener)q.addListener(j);return()=>{$.removeEventListener("storage",Z),$.removeEventListener("focus",j),$.removeEventListener("piclaw:pwa-display-scale-changed",X);for(let q of G)if(q.removeEventListener)q.removeEventListener("change",j);else if(q.removeListener)q.removeListener(j)}}var pY=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function LT(_){let $=String(_||"").trim();if(!$||$.endsWith("/"))return!1;return fj($,(j)=>Y1.resolve(j))}function rY(_,$,j,Z=0,X=[]){if(!j&&pY(_))return X;if(!_)return X;if(X.push({node:_,depth:Z}),_.type==="dir"&&_.children&&$.has(_.path))for(let G of _.children)rY(G,$,j,Z+1,X);return X}function mY(_,$,j){if(!_)return"";let Z=[],X=(G)=>{if(!j&&pY(G))return;if(Z.push(G.type==="dir"?`d:${G.path}`:`f:${G.path}`),G.children&&$?.has(G.path))for(let q of G.children)X(q)};return X(_),Z.join("|")}function uj(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Z=Array.isArray($.children)?$.children:null;if(!Z)return _;let X=j?new Map(j.map((Q)=>[Q?.path,Q])):new Map,G=!j||j.length!==Z.length,q=Z.map((Q)=>{let K=uj(X.get(Q.path),Q);if(K!==X.get(Q.path))G=!0;return K});return G?{...$,children:q}:_}function bj(_,$,j){if(!_)return _;if(_.path===$)return uj(_,j);if(!Array.isArray(_.children))return _;let Z=!1,X=_.children.map((G)=>{let q=bj(G,$,j);if(q!==G)Z=!0;return q});return Z?{..._,children:X}:_}var nY=4,Sj=14,JT=16;function dY(_){if(!_)return 0;if(_.type==="file"){let Z=Math.max(0,Number(_.size)||0);return _.__bytes=Z,Z}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Z of $)j+=dY(Z);return _.__bytes=j,j}function oY(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Z={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=nY)return Z;let X=Array.isArray(_.children)?_.children:[],G=[];for(let Q of X){let K=Math.max(0,Number(Q?.__bytes??Q?.size??0));if(K<=0)continue;if(Q.type==="dir")G.push({kind:"dir",node:Q,size:K});else G.push({kind:"file",name:Q.name,path:Q.path,size:K})}G.sort((Q,K)=>K.size-Q.size);let q=G;if(G.length>Sj){let Q=G.slice(0,Sj-1),K=G.slice(Sj-1),V=K.reduce((Y,N)=>Y+N.size,0);Q.push({kind:"other",name:`+${K.length} more`,path:`${Z.path}/[other]`,size:V}),q=Q}return Z.children=q.map((Q)=>{if(Q.kind==="dir")return oY(Q.node,$+1);return{name:Q.name,path:Q.path,size:Q.size,children:[]}}),Z}function cY(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function iY(_,$,j){let Z=((_+Math.PI/2)*180/Math.PI+360)%360,X=j?Math.max(30,70-$*10):Math.max(34,66-$*8),G=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Z.toFixed(1)} ${X}% ${G}%)`}function g8(_,$,j,Z){return{x:_+j*Math.cos(Z),y:$+j*Math.sin(Z)}}function vj(_,$,j,Z,X,G){let q=Math.PI*2-0.0001,Q=G-X>q?X+q:G,K=g8(_,$,Z,X),V=g8(_,$,Z,Q),Y=g8(_,$,j,Q),N=g8(_,$,j,X),F=Q-X>Math.PI?1:0;return[`M ${K.x.toFixed(3)} ${K.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${F} 1 ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,`L ${Y.x.toFixed(3)} ${Y.y.toFixed(3)}`,`A ${j} ${j} 0 ${F} 0 ${N.x.toFixed(3)} ${N.y.toFixed(3)}`,"Z"].join(" ")}var sY={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function aY(_,$,j){let Z=[],X=[],G=Math.max(0,Number($)||0),q=(Q,K,V,Y)=>{let N=Array.isArray(Q?.children)?Q.children:[];if(!N.length)return;let F=Math.max(0,Number(Q.size)||0);if(F<=0)return;let B=V-K,D=K;N.forEach((z,H)=>{let W=Math.max(0,Number(z.size)||0);if(W<=0)return;let M=W/F,E=D,L=H===N.length-1?V:D+B*M;if(D=L,L-E<0.003)return;let x=sY[Y];if(x){let I=iY(E,Y,j);if(Z.push({key:z.path,path:z.path,label:z.name,size:W,color:I,depth:Y,startAngle:E,endAngle:L,innerRadius:x[0],outerRadius:x[1],d:vj(120,120,x[0],x[1],E,L)}),Y===1)X.push({key:z.path,name:z.name,size:W,pct:G>0?W/G*100:0,color:I})}if(Y<nY)q(z,E,L,Y+1)})};return q(_,-Math.PI/2,Math.PI*3/2,1),{segments:Z,legend:X}}function gj(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Z of j){let X=gj(Z,$);if(X)return X}return null}function tY(_,$,j,Z){if(!j||j<=0)return{segments:[],legend:[]};let X=sY[1];if(!X)return{segments:[],legend:[]};let G=-Math.PI/2,q=Math.PI*3/2,Q=iY(G,1,Z),V=`${$||"."}/[files]`;return{segments:[{key:V,path:V,label:_,size:j,color:Q,depth:1,startAngle:G,endAngle:q,innerRadius:X[0],outerRadius:X[1],d:vj(120,120,X[0],X[1],G,q)}],legend:[{key:V,name:_,size:j,pct:100,color:Q}]}}function hY(_,$=!1,j=!1){if(!_)return null;let Z=dY(_),X=oY(_,0),G=X.size||Z,{segments:q,legend:Q}=aY(X,G,j);if(!q.length&&G>0){let K=tY("[files]",X.path,G,j);q=K.segments,Q=K.legend}return{root:X,totalSize:G,segments:q,legend:Q,truncated:$,isDarkTheme:j}}function ET({payload:_}){if(!_)return null;let[$,j]=C(null),[Z,X]=C(_?.root?.path||"."),[G,q]=C(()=>[_?.root?.path||"."]),[Q,K]=C(!1);b(()=>{let T=_?.root?.path||".";X(T),q([T]),j(null)},[_?.root?.path,_?.totalSize]),b(()=>{if(!Z)return;K(!0);let T=setTimeout(()=>K(!1),180);return()=>clearTimeout(T)},[Z]);let V=G0(()=>{return gj(_.root,Z)||_.root},[_?.root,Z]),Y=V?.size||_.totalSize||0,{segments:N,legend:F}=G0(()=>{let T=aY(V,Y,_.isDarkTheme);if(T.segments.length>0)return T;if(Y<=0)return T;let y=V?.children?.length?"Total":"[files]";return tY(y,V?.path||_?.root?.path||".",Y,_.isDarkTheme)},[V,Y,_.isDarkTheme,_?.root?.path]),[B,D]=C(N),z=g(new Map),H=g(0);b(()=>{let T=z.current,y=new Map(N.map((u)=>[u.key,u])),A=performance.now(),P=220,f=(u)=>{let c=Math.min(1,(u-A)/220),r=c*(2-c),e=N.map((m)=>{let W0=T.get(m.key)||{startAngle:m.startAngle,endAngle:m.startAngle,innerRadius:m.innerRadius,outerRadius:m.innerRadius},X0=(j0,Y0)=>j0+(Y0-j0)*r,Z0=X0(W0.startAngle,m.startAngle),q0=X0(W0.endAngle,m.endAngle),D0=X0(W0.innerRadius,m.innerRadius),h=X0(W0.outerRadius,m.outerRadius);return{...m,d:vj(120,120,D0,h,Z0,q0)}});if(D(e),c<1)H.current=requestAnimationFrame(f)};if(H.current)cancelAnimationFrame(H.current);return H.current=requestAnimationFrame(f),z.current=y,()=>{if(H.current)cancelAnimationFrame(H.current)}},[N]);let W=B.length?B:N,M=Y>0?t1(Y):"0 B",E=V?.name||"",x=(E&&E!=="."?E:"Total")||"Total",I=M,J=G.length>1,k=(T)=>{if(!T?.path)return;let y=gj(_.root,T.path);if(!y||!Array.isArray(y.children)||y.children.length===0)return;q((A)=>[...A,y.path]),X(y.path),j(null)},O=()=>{if(!J)return;q((T)=>{let y=T.slice(0,-1);return X(y[y.length-1]||_?.root?.path||"."),y}),j(null)};return U`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${Q?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${V?.path||_?.root?.path||"."}`}
                data-segments=${W.length}
                data-base-size=${Y}>
                ${W.map((T)=>U`
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
                        onClick=${()=>k(T)}
                    >
                        <title>${T.label} — ${t1(T.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${J?" is-drill":""}`}
                    onClick=${O}
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${x}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${I}</text>
                </g>
            </svg>
            ${F.length>0&&U`
                <div class="workspace-folder-starburst-legend">
                    ${F.slice(0,8).map((T)=>U`
                        <div key=${T.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${T.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${T.name}>${T.name}</span>
                            <span class="workspace-folder-starburst-size">${t1(T.size)}</span>
                            <span class="workspace-folder-starburst-pct">${T.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&U`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function lY(_){if(typeof document>"u"||!_)return;let $=document.createElement("a");$.href=_,$.setAttribute("download",""),$.rel="noopener",$.style.display="none",document.body.appendChild($),$.click(),$.remove()}function eY(_){switch(_?.state){case"indexing":return"Indexing workspace…";case"ready":return"Workspace index ready";case"stale":return"Workspace index may be stale";case"failed":return"Workspace index failed";case"never_indexed":return"Workspace index not built yet";default:return"Checking workspace index…"}}function AT(_){if(!_)return"Workspace index status";let $=[eY(_)];if(_.last_indexed_at)$.push(`Last indexed: ${_.last_indexed_at}`);if(typeof _.indexed_file_count==="number")$.push(`Indexed files: ${_.indexed_file_count}`);if(Array.isArray(_.roots)&&_.roots.length)$.push(`Roots: ${_.roots.join(", ")}`);if(_.last_error)$.push(`Error: ${_.last_error}`);return $.join(`
`)}function MT(_){let $=_?.target;if($&&typeof $==="object")return $;return $?.parentElement||null}function kT(_){return Boolean(_?.closest?.(".workspace-node-icon, .workspace-label-text"))}function TT(_,$=null){let j=MT(_),Z=j?.closest?.(".workspace-row");if(!Z)return null;let X=Z.dataset.type,G=Z.dataset.path;if(!G||G===".")return null;if($===G)return null;let q=_?.touches?.[0];if(!q)return null;return{type:X,path:G,dragPath:kT(j)?G:null,startX:q.clientX,startY:q.clientY}}function _N({onFileSelect:_,onFolderSelect:$,visible:j=!0,active:Z=void 0,onOpenEditor:X,onOpenTerminalTab:G,onOpenVncTab:q,onToggleTerminal:Q,terminalVisible:K=!1}){let[V,Y]=C(null),[N,F]=C(new Set(["."])),[B,D]=C(null),[z,H]=C(null),[W,M]=C(""),[E,L]=C(null),[,x]=C(null),[I,J]=C(!0),[k,O]=C(!1),[T,y]=C(null),[A,P]=C(()=>L$("workspaceShowHidden",!1)),[f,u]=C(!1),[c,r]=C(null),[e,m]=C(null),[$0,W0]=C(null),[X0,Z0]=C(!1),[q0,D0]=C(null),[h,j0]=C(null),[Y0,L0]=C(null),[s,Q0]=C(!1),[O0,x0]=C(()=>E5()),[r0,l0]=C(()=>cY()),[n0,m0]=C(()=>Pj({stored:E_(S8),...Cj()})),[_1,S0]=C(()=>b6()),[o0,c0]=C(()=>String(b6())),[$1,i0]=C(!1),H1=Math.max(15000,(Number(O0?.refreshIntervalSec)||60)*1000),Q1=Math.max(0,Number(O0?.folderPreviewDepth)||0),P0=g(N),J0=g(""),z1=g(null),G1=g(0),J1=g(new Set),F0=g(null),R0=g(null),w0=g(new Map),j1=g(_),x1=g($),K1=g(X),V1=g(null),Z1=g(null),E1=g(null),c1=g(null),g1=g(null),O1=g(null),e1=g("."),T1=g(0),V0=g({path:null,dragging:!1,startX:0,startY:0}),v=g({path:null,dragging:!1,startX:0,startY:0}),n=g({path:null,timer:0}),a=g(!1),_0=g(0),H0=g(new Map),A0=g(null),E0=g(null),C0=g(null),k0=g(null),h0=g(null),v0=g(null),p0=g(A),d0=g(j),I0=g(Z??j),T0=g(0),N1=g($0),q1=g(f),o=g(c),z0=g(null),s0=g({x:0,y:0}),t0=g(0),C1=g(null),Z_=g(B),A1=g(z),N_=g(null),p1=g(E);j1.current=_,x1.current=$,K1.current=X,b(()=>{P0.current=N},[N]),b(()=>{p0.current=A},[A]),b(()=>{d0.current=j},[j]),b(()=>{I0.current=Z??j},[Z,j]),b(()=>{N1.current=$0},[$0]);let W1=R(()=>{if(!T1.current)return;clearTimeout(T1.current),T1.current=0},[]);b(()=>()=>W1(),[W1]),b(()=>{if(typeof window>"u")return;let S=()=>{m0(Pj({stored:E_(S8),...Cj()}))};S();let l=()=>S(),d=()=>S(),t=(K0)=>{if(!K0||K0.key===null||K0.key===S8)S()};window.addEventListener("resize",l),window.addEventListener("focus",d),window.addEventListener("storage",t);let U0=window.matchMedia?.("(pointer: coarse)"),N0=window.matchMedia?.("(hover: none)"),y0=(K0,a0)=>{if(!K0)return;if(K0.addEventListener)K0.addEventListener("change",a0);else if(K0.addListener)K0.addListener(a0)},b0=(K0,a0)=>{if(!K0)return;if(K0.removeEventListener)K0.removeEventListener("change",a0);else if(K0.removeListener)K0.removeListener(a0)};return y0(U0,l),y0(N0,l),()=>{window.removeEventListener("resize",l),window.removeEventListener("focus",d),window.removeEventListener("storage",t),b0(U0,l),b0(N0,l)}},[]),b(()=>{if(typeof window>"u")return;let S=()=>{let d=b6();S0(d),c0(String(d))},l=(d)=>{if(!d||d.key===null||d.key===fY)S()};return window.addEventListener("focus",S),window.addEventListener("storage",l),window.addEventListener(Rj,S),()=>{window.removeEventListener("focus",S),window.removeEventListener("storage",l),window.removeEventListener(Rj,S)}},[]),b(()=>{if(typeof window>"u")return;let S=()=>{x0(E5())},l=(U0)=>{if(!U0||U0.key===null||U0.key===V8||U0.key===K8)S()},d=()=>S(),t=(U0)=>{let N0=U0?.detail?.settings;if(N0&&typeof N0==="object"){x0({refreshIntervalSec:Number(N0.refreshIntervalSec)||60,folderPreviewDepth:Math.max(0,Number(N0.folderPreviewDepth)||0)});return}S()};return window.addEventListener("focus",d),window.addEventListener("storage",l),window.addEventListener(Q8,t),()=>{window.removeEventListener("focus",d),window.removeEventListener("storage",l),window.removeEventListener(Q8,t)}},[]),b(()=>{let S=(l)=>{let d=l?.detail?.path;if(!d)return;let t=d.split("/"),U0=[];for(let N0=1;N0<t.length;N0++)U0.push(t.slice(0,N0).join("/"));if(U0.length)F((N0)=>{let y0=new Set(N0);y0.add(".");for(let b0 of U0)y0.add(b0);return y0});D(d),requestAnimationFrame(()=>{let N0=document.querySelector(`[data-path="${CSS.escape(d)}"]`);if(N0)N0.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",S),()=>window.removeEventListener("workspace-reveal-path",S)},[]),b(()=>{q1.current=f},[f]),b(()=>{o.current=c},[c]),b(()=>{Z_.current=B},[B]),b(()=>{A1.current=z},[z]),b(()=>{p1.current=E},[E]),b(()=>{if(typeof window>"u"||typeof document>"u")return;let S=()=>l0(cY());S();let l=window.matchMedia?.("(prefers-color-scheme: dark)"),d=()=>S();if(l?.addEventListener)l.addEventListener("change",d);else if(l?.addListener)l.addListener(d);let t=typeof MutationObserver<"u"?new MutationObserver(()=>S()):null;if(t?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)t?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(l?.removeEventListener)l.removeEventListener("change",d);else if(l?.removeListener)l.removeListener(d);t?.disconnect()}},[]),b(()=>{if(!z)return;let S=g1.current;if(!S)return;let l=requestAnimationFrame(()=>{wY(S)});return()=>cancelAnimationFrame(l)},[z]),b(()=>{if(!$1)return;let S=(d)=>{let t=d?.target;if(!(t instanceof Element))return;if(h0.current?.contains(t))return;if(v0.current?.contains(t))return;i0(!1)},l=(d)=>{if(d?.key==="Escape")i0(!1),v0.current?.focus?.()};return document.addEventListener("mousedown",S),document.addEventListener("touchstart",S,{passive:!0}),document.addEventListener("keydown",l),()=>{document.removeEventListener("mousedown",S),document.removeEventListener("touchstart",S),document.removeEventListener("keydown",l)}},[$1]);let M_=async(S,l={})=>{let d=Boolean(l?.autoOpen),t=String(S||"").trim();O(!0),L(null),x(null);try{let U0=await V9(t,20000);if(d&&t&&CY(t,U0,{resolvePane:(N0)=>Y1.resolve(N0)}))return K1.current?.(t,U0),U0;return L(U0),U0}catch(U0){let N0={error:U0.message||"Failed to load preview"};return L(N0),N0}finally{O(!1)}};V1.current=M_;let a1=R(async()=>{try{let S=await q9("all");return L0(S),S}catch(S){return console.warn("[workspace-explorer] Failed to load workspace index status:",S),null}},[]);R0.current=a1;let M1=R(()=>{R0.current?.()},[]),Q4=async()=>{if(!d0.current)return;try{let S=await U6("",1,p0.current),l=mY(S.root,P0.current,p0.current);if(l===J0.current){J(!1);return}if(J0.current=l,z1.current=S.root,!G1.current)G1.current=requestAnimationFrame(()=>{G1.current=0,Y((d)=>uj(d,z1.current)),J(!1)})}catch(S){y(S.message||"Failed to load workspace"),J(!1)}},I$=async(S)=>{if(!S)return;if(J1.current.has(S))return;J1.current.add(S);try{let l=await U6(S,1,p0.current);Y((d)=>bj(d,S,l.root))}catch(l){y(l.message||"Failed to load workspace")}finally{J1.current.delete(S)}};Z1.current=I$;let r1=R(()=>{let S=B;if(!S)return".";let l=w0.current?.get(S);if(l&&l.type==="dir")return l.path;if(S==="."||!S.includes("/"))return".";let d=S.split("/");return d.pop(),d.join("/")||"."},[B]),B_=R((S)=>{let l=S?.closest?.(".workspace-row");if(!l)return null;let d=l.dataset.path,t=l.dataset.type;if(!d)return null;if(t==="dir")return d;if(d.includes("/")){let U0=d.split("/");return U0.pop(),U0.join("/")||"."}return"."},[]),U1=R((S)=>{return B_(S?.target||null)},[B_]),h1=R((S)=>{N1.current=S,W0(S)},[]),u1=R(()=>{let S=n.current;if(S?.timer)clearTimeout(S.timer);n.current={path:null,timer:0}},[]),X_=R((S)=>{if(!S||S==="."){u1();return}let l=w0.current?.get(S);if(!l||l.type!=="dir"){u1();return}if(P0.current?.has(S)){u1();return}if(n.current?.path===S)return;u1();let d=setTimeout(()=>{n.current={path:null,timer:0},Z1.current?.(S),F((t)=>{let U0=new Set(t);return U0.add(S),U0})},600);n.current={path:S,timer:d}},[u1]),m_=R((S,l)=>{if(s0.current={x:S,y:l},t0.current)return;t0.current=requestAnimationFrame(()=>{t0.current=0;let d=z0.current;if(!d)return;let t=s0.current;d.style.transform=`translate(${t.x+12}px, ${t.y+12}px)`})},[]),c_=R((S)=>{if(!S)return;let d=(w0.current?.get(S)?.name||S.split("/").pop()||S).trim();if(!d)return;m({path:S,label:d})},[]),G$=R(()=>{if(m(null),t0.current)cancelAnimationFrame(t0.current),t0.current=0;if(z0.current)z0.current.style.transform="translate(-9999px, -9999px)"},[]),x$=R((S)=>{if(!S)return".";let l=w0.current?.get(S);if(l&&l.type==="dir")return l.path;if(S==="."||!S.includes("/"))return".";let d=S.split("/");return d.pop(),d.join("/")||"."},[]),l1=R(()=>{H(null),M("")},[]),R1=R((S)=>{if(!S)return;let d=(w0.current?.get(S)?.name||S.split("/").pop()||S).trim();if(!d||S===".")return;H(S),M(d)},[]),r4=R(async()=>{let S=A1.current;if(!S)return;let l=(W||"").trim();if(!l){l1();return}let d=w0.current?.get(S),t=(d?.name||S.split("/").pop()||S).trim();if(l===t){l1();return}try{let N0=(await N9(S,l))?.path||S,y0=S.includes("/")?S.split("/").slice(0,-1).join("/")||".":".";if(l1(),y(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:S,newPath:N0,type:d?.type||"file"}})),d?.type==="dir")F((b0)=>{let K0=new Set;for(let a0 of b0)if(a0===S)K0.add(N0);else if(a0.startsWith(`${S}/`))K0.add(`${N0}${a0.slice(S.length)}`);else K0.add(a0);return K0});if(D(N0),d?.type==="dir")L(null),O(!1),x(null);else V1.current?.(N0);Z1.current?.(y0),M1()}catch(U0){y(U0?.message||"Failed to rename file")}},[l1,W,M1]),O_=R(async(S)=>{let t=S||".";for(let U0=0;U0<50;U0+=1){let y0=`untitled${U0===0?"":`-${U0}`}.md`;try{let K0=(await Y9(t,y0,""))?.path||(t==="."?y0:`${t}/${y0}`);if(t&&t!==".")F((a0)=>new Set([...a0,t]));D(K0),y(null),Z1.current?.(t),V1.current?.(K0),M1();return}catch(b0){if(b0?.status===409||b0?.code==="file_exists")continue;y(b0?.message||"Failed to create file");return}}y("Failed to create file (untitled name already in use).")},[]),F_=R((S)=>{if(S?.stopPropagation?.(),X0)return;let l=x$(Z_.current);O_(l)},[X0,x$,O_]);b(()=>{if(typeof window>"u")return;let S=(l)=>{let d=l?.detail?.updates||[];if(!Array.isArray(d)||d.length===0)return;Y((b0)=>{let K0=b0;for(let a0 of d){if(!a0?.root)continue;if(!K0||a0.path==="."||!a0.path)K0=a0.root;else K0=bj(K0,a0.path,a0.root)}if(K0)J0.current=mY(K0,P0.current,p0.current);return J(!1),K0});let t=Z_.current;if(Boolean(t)&&d.some((b0)=>{let K0=b0?.path||"";if(!K0||K0===".")return!0;return t===K0||t.startsWith(`${K0}/`)||K0.startsWith(`${t}/`)}))H0.current.clear();if(M1(),!t||!p1.current)return;let N0=w0.current?.get(t);if(N0&&N0.type==="dir")return;if(d.some((b0)=>{let K0=b0?.path||"";if(!K0||K0===".")return!0;return t===K0||t.startsWith(`${K0}/`)}))V1.current?.(t)};return window.addEventListener("workspace-update",S),()=>window.removeEventListener("workspace-update",S)},[]),F0.current=Q4;let q$=g(()=>{if(typeof window>"u")return;let S=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),l=I0.current??d0.current,d=document.visibilityState!=="hidden"&&(l||S.matches&&d0.current);D6(d,p0.current).catch((t)=>{console.debug("[workspace-explorer] Workspace visibility ping failed.",t,{visible:d,showHidden:p0.current})})}).current,D_=g(0),I_=g(()=>{if(D_.current)clearTimeout(D_.current);D_.current=setTimeout(()=>{D_.current=0,q$()},250)}).current;b(()=>{if(d0.current)F0.current?.(),R0.current?.();I_()},[j,Z]),b(()=>{F0.current(),R0.current?.();let S=setInterval(()=>{F0.current(),R0.current?.()},H1);return()=>clearInterval(S)},[H1]),b(()=>{q$();let S=E4("previewHeight",null),l=Number.isFinite(S)?Math.min(Math.max(S,80),600):280;if(_0.current=l,E1.current)E1.current.style.setProperty("--preview-height",`${l}px`);let d=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),t=()=>I_();if(d.addEventListener)d.addEventListener("change",t);else if(d.addListener)d.addListener(t);return document.addEventListener("visibilitychange",t),()=>{if(G1.current)cancelAnimationFrame(G1.current),G1.current=0;if(d.removeEventListener)d.removeEventListener("change",t);else if(d.removeListener)d.removeListener(t);if(document.removeEventListener("visibilitychange",t),D_.current)clearTimeout(D_.current),D_.current=0;D6(!1,p0.current).catch((U0)=>{console.debug("[workspace-explorer] Workspace visibility teardown ping failed.",U0,{showHidden:p0.current})})}},[]);let x_=G0(()=>rY(V,N,A),[V,N,A]),Q$=G0(()=>new Map(x_.map((S)=>[S.node.path,S.node])),[x_]),C$=G0(()=>xY(n0),[n0]);w0.current=Q$;let k1=(B?w0.current.get(B):null)?.type==="dir";b(()=>{if(!B||!k1){j0(null),A0.current=null,E0.current=null;return}if(Q1<=0){j0({loading:!1,error:null,payload:null,disabled:!0}),A0.current=null,E0.current=null;return}let S=B,l=`${A?"hidden":"visible"}:${Q1}:${B}`,d=H0.current,t=d.get(l);if(t?.root){d.delete(l),d.set(l,t);let y0=hY(t.root,Boolean(t.truncated),r0);if(y0)A0.current=y0,E0.current=B,j0({loading:!1,error:null,payload:y0,disabled:!1});return}let U0=A0.current,N0=E0.current;j0({loading:!0,error:null,payload:N0===B?U0:null,disabled:!1}),U6(B,Q1,A).then((y0)=>{if(Z_.current!==S)return;let b0={root:y0?.root,truncated:Boolean(y0?.truncated)};d.delete(l),d.set(l,b0);while(d.size>JT){let a0=d.keys().next().value;if(!a0)break;d.delete(a0)}let K0=hY(b0.root,b0.truncated,r0);A0.current=K0,E0.current=B,j0({loading:!1,error:null,payload:K0,disabled:!1})}).catch((y0)=>{if(Z_.current!==S)return;j0({loading:!1,error:y0?.message||"Failed to load folder size chart",payload:N0===B?U0:null,disabled:!1})})},[B,k1,A,r0,Q1]);let C_=Boolean(E&&E.kind==="text"&&!k1&&(!E.size||E.size<=262144)),n4=C_?"Open in editor":E?.size>262144?"File too large to edit":"File is not editable",V4=Boolean(B&&!k1&&LT(B)),P$=Boolean(B&&B!=="."),h_=Boolean(B&&!k1),V$=Boolean(B&&!k1),K$=B&&k1?n2(B,A):null,g5=eY(Y0),u5=AT(Y0),K4=Y0?.state||"never_indexed",Y4=K4!=="ready",__=R(()=>i0(!1),[]),d4=R((S)=>{c0(String(S?.currentTarget?.value??""))},[]),f$=R((S)=>{let l=uY(S);S0(l),c0(String(l))},[]),o4=R((S)=>{f$(S?.currentTarget?.value)},[f$]),v5=R((S)=>{if(S?.key==="Enter")f$(S?.currentTarget?.value),S?.currentTarget?.blur?.()},[f$]),S1=R(async(S)=>{__();try{await S?.()}catch(l){console.warn("[workspace-explorer] Header menu action failed:",l)}},[__]),m5=R(async(S)=>{S?.stopPropagation?.(),Q0(!0),L0((l)=>({scope:"all",last_indexed_at:l?.last_indexed_at||null,last_error:null,indexed_file_count:l?.indexed_file_count||0,roots:l?.roots||[],updated_at:l?.updated_at||null,state:"indexing"}));try{let l=await Q9("all");L0(l),y(null),J0.current="",F0.current?.()}catch(l){let d=l?.message||"Failed to reindex workspace";L0((t)=>({scope:"all",last_indexed_at:t?.last_indexed_at||null,last_error:d,indexed_file_count:t?.indexed_file_count||0,roots:t?.roots||[],updated_at:t?.updated_at||null,state:"failed"})),y(d)}finally{Q0(!1)}},[]);b(()=>{let S=C0.current;if(k0.current)k0.current.dispose(),k0.current=null;if(!S)return;if(S.innerHTML="",!B||k1||!E||E.error)return;let l={path:B,content:typeof E.text==="string"?E.text:void 0,mtime:E.mtime,size:E.size,preview:E,mode:"view"},d=Y1.resolve(l)||Y1.get("workspace-preview-default");if(!d)return;let t=d.mount(S,l);return k0.current=t,()=>{if(k0.current===t)t.dispose(),k0.current=null;S.innerHTML=""}},[B,k1,E]);let l_=(S)=>{let l=S?.target;if(l instanceof Element)return l;return l?.parentElement||null},k_=(S)=>{return Boolean(S?.closest?.(".workspace-node-icon, .workspace-label-text"))},i4=(S)=>{if(!S)return!1;if(S.closest?.('input, textarea, [contenteditable="true"]'))return!0;return Boolean(S.isContentEditable)},N4=g((S)=>{let l=l_(S),d=l?.closest?.("[data-path]");if(!d)return;let t=d.dataset.path;if(!t||t===".")return;let U0=Boolean(l?.closest?.("button"))||Boolean(l?.closest?.("a"))||Boolean(l?.closest?.("input")),N0=Boolean(l?.closest?.(".workspace-caret"));if(U0||N0)return;if(A1.current===t)return;R1(t)}).current,B4=g((S)=>{if(a.current){a.current=!1;return}let l=l_(S),d=l?.closest?.("[data-path]");if(c1.current?.focus?.(),!d)return;let t=d.dataset.path,U0=d.dataset.type,N0=Boolean(l?.closest?.(".workspace-caret")),y0=Boolean(l?.closest?.("button"))||Boolean(l?.closest?.("a"))||Boolean(l?.closest?.("input")),b0=Z_.current===t,K0=A1.current;if(K0){if(K0===t)return;l1()}if(U0==="dir"){if(N_.current=null,D(t),L(null),x(null),O(!1),!P0.current.has(t))Z1.current?.(t);if(b0&&!N0)return;F((o1)=>{let G_=new Set(o1);if(G_.has(t))G_.delete(t);else G_.add(t);return G_})}else{N_.current=null,D(t);let a0=w0.current.get(t);if(a0)j1.current?.(a0.path,a0);if(!y0&&!N0)V1.current?.(t)}}).current,T_=g(()=>{J0.current="",F0.current(),R0.current?.(),Array.from(P0.current||[]).filter((l)=>l&&l!==".").forEach((l)=>Z1.current?.(l))}).current,$_=g(()=>{N_.current=null,D(null),L(null),x(null),O(!1)}).current,s4=g(()=>{P((S)=>{let l=!S;if(typeof window<"u")B1("workspaceShowHidden",String(l));return p0.current=l,D6(!0,l).catch((t)=>{console.debug("[workspace-explorer] Workspace visibility refresh after toggling hidden files failed.",t,{showHidden:l})}),J0.current="",F0.current?.(),Array.from(P0.current||[]).filter((t)=>t&&t!==".").forEach((t)=>Z1.current?.(t)),l})}).current,F4=g((S)=>{if(l_(S)?.closest?.("[data-path]"))return;$_()}).current,p_=R(async(S)=>{if(!S)return;let l=S.split("/").pop()||S;if(!window.confirm(`Delete "${l}"? This cannot be undone.`))return;try{await F9(S);let t=S.includes("/")?S.split("/").slice(0,-1).join("/")||".":".";if(Z_.current===S)$_();Z1.current?.(t),y(null),M1()}catch(t){L((U0)=>({...U0||{},error:t.message||"Failed to delete file"}))}},[$_]),n1=R((S)=>{let l=c1.current;if(!l||!S||typeof CSS>"u"||typeof CSS.escape!=="function")return;l.querySelector(`[data-path="${CSS.escape(S)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),c5=R((S)=>{let l=l_(S);if(A1.current||i4(l))return;let d=x_;if(!d||d.length===0)return;let t=B?d.findIndex((U0)=>U0.node.path===B):-1;if(S.key==="ArrowDown"){S.preventDefault();let U0=Math.min(t+1,d.length-1),N0=d[U0];if(!N0)return;if(D(N0.node.path),N0.node.type!=="dir")j1.current?.(N0.node.path,N0.node),V1.current?.(N0.node.path);else L(null),O(!1),x(null);n1(N0.node.path);return}if(S.key==="ArrowUp"){S.preventDefault();let U0=t<=0?0:t-1,N0=d[U0];if(!N0)return;if(D(N0.node.path),N0.node.type!=="dir")j1.current?.(N0.node.path,N0.node),V1.current?.(N0.node.path);else L(null),O(!1),x(null);n1(N0.node.path);return}if(S.key==="ArrowRight"&&t>=0){let U0=d[t];if(U0?.node?.type==="dir"&&!N.has(U0.node.path))S.preventDefault(),Z1.current?.(U0.node.path),F((N0)=>new Set([...N0,U0.node.path]));return}if(S.key==="ArrowLeft"&&t>=0){let U0=d[t];if(U0?.node?.type==="dir"&&N.has(U0.node.path))S.preventDefault(),F((N0)=>{let y0=new Set(N0);return y0.delete(U0.node.path),y0});return}if(S.key==="Enter"&&t>=0){S.preventDefault();let U0=d[t];if(!U0)return;let N0=U0.node.path;if(U0.node.type==="dir"){if(!P0.current.has(N0))Z1.current?.(N0);F((b0)=>{let K0=new Set(b0);if(K0.has(N0))K0.delete(N0);else K0.add(N0);return K0}),L(null),x(null),O(!1)}else j1.current?.(N0,U0.node),V1.current?.(N0);return}if((S.key==="Delete"||S.key==="Backspace")&&t>=0){let U0=d[t];if(!U0||U0.node.type==="dir")return;S.preventDefault(),p_(U0.node.path);return}if(S.key==="Escape")S.preventDefault(),$_()},[$_,p_,N,x_,n1,B]),a4=R((S)=>{let l=TT(S,A1.current);if(!l)return;V0.current={path:l.dragPath,dragging:!1,startX:l.startX,startY:l.startY}},[]),r_=R(()=>{let S=V0.current;if(S?.dragging&&S.path){let l=N1.current||r1(),d=C1.current;if(typeof d==="function")d(S.path,l)}V0.current={path:null,dragging:!1,startX:0,startY:0},T0.current=0,u(!1),r(null),h1(null),u1(),G$()},[r1,G$,h1,u1]),d6=R((S)=>{let l=V0.current,d=S?.touches?.[0];if(!d||!l?.path)return;let t=Math.abs(d.clientX-l.startX),U0=Math.abs(d.clientY-l.startY),N0=t>8||U0>8;if(!l.dragging&&N0)l.dragging=!0,u(!0),r("move"),c_(l.path);if(l.dragging){S.preventDefault(),m_(d.clientX,d.clientY);let y0=document.elementFromPoint(d.clientX,d.clientY),b0=B_(y0)||r1();if(N1.current!==b0)h1(b0);X_(b0)}},[B_,r1,c_,m_,h1,X_]),d1=g((S)=>{S.preventDefault();let l=E1.current;if(!l)return;let d=S.clientY,t=_0.current||280,U0=S.currentTarget;U0.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let N0=d,y0=(K0)=>{N0=K0.clientY;let a0=l.clientHeight-80,o1=Math.min(Math.max(t-(K0.clientY-d),80),a0);l.style.setProperty("--preview-height",`${o1}px`),_0.current=o1},b0=()=>{let K0=l.clientHeight-80,a0=Math.min(Math.max(t-(N0-d),80),K0);_0.current=a0,U0.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",B1("previewHeight",String(Math.round(a0))),document.removeEventListener("mousemove",y0),document.removeEventListener("mouseup",b0)};document.addEventListener("mousemove",y0),document.addEventListener("mouseup",b0)}).current,U3=g((S)=>{S.preventDefault();let l=E1.current;if(!l)return;let d=S.touches[0];if(!d)return;let t=d.clientY,U0=_0.current||280,N0=S.currentTarget;N0.classList.add("dragging"),document.body.style.userSelect="none";let y0=(K0)=>{let a0=K0.touches[0];if(!a0)return;K0.preventDefault();let o1=l.clientHeight-80,G_=Math.min(Math.max(U0-(a0.clientY-t),80),o1);l.style.setProperty("--preview-height",`${G_}px`),_0.current=G_},b0=()=>{N0.classList.remove("dragging"),document.body.style.userSelect="",B1("previewHeight",String(Math.round(_0.current||U0))),document.removeEventListener("touchmove",y0),document.removeEventListener("touchend",b0),document.removeEventListener("touchcancel",b0)};document.addEventListener("touchmove",y0,{passive:!1}),document.addEventListener("touchend",b0),document.addEventListener("touchcancel",b0)}).current,o6=R((S=B)=>{if(!S)return;lY(r2(S))},[B]),L_=async()=>{if(!B||k1)return;await p_(B)},Y$=(S)=>{return Array.from(S?.dataTransfer?.types||[]).includes("Files")},t4=R((S)=>{if(!Y$(S))return;if(S.preventDefault(),T0.current+=1,!q1.current)u(!0);r("upload");let l=U1(S)||r1();h1(l),X_(l)},[r1,U1,h1,X_]),R$=R((S)=>{if(!Y$(S))return;if(S.preventDefault(),S.dataTransfer)S.dataTransfer.dropEffect="copy";if(!q1.current)u(!0);if(o.current!=="upload")r("upload");let l=U1(S)||r1();if(N1.current!==l)h1(l);X_(l)},[r1,U1,h1,X_]),S$=R((S)=>{if(!Y$(S))return;if(S.preventDefault(),T0.current=Math.max(0,T0.current-1),T0.current===0)u(!1),r(null),h1(null),u1()},[h1,u1]),N$=R(async(S,l=".")=>{let d=Array.from(S||[]);if(d.length===0)return;let t=l&&l!==""?l:".",U0=t!=="."?t:"workspace root";W1(),Z0(!0),D0({current:0,total:d.length,name:"",percent:0,done:!1,error:null});try{let N0=null;for(let y0=0;y0<d.length;y0++){let b0=d[y0],K0=b0?.name||`file ${y0+1}`;D0((o1)=>({...o1,current:y0+1,name:K0,percent:0}));let a0=(o1)=>D0((G_)=>({...G_,percent:o1.percent}));try{N0=await p2(b0,t,{onProgress:a0})}catch(o1){let G_=o1?.status,g$=o1?.code;if(G_===409||g$==="file_exists"){if(!window.confirm(`"${K0}" already exists in ${U0}. Overwrite?`))continue;N0=await p2(b0,t,{overwrite:!0,onProgress:a0})}else throw o1}}if(N0?.path)N_.current=N0.path,D(N0.path),V1.current?.(N0.path);Z1.current?.(t),M1(),D0((y0)=>({...y0,done:!0})),W1(),T1.current=window.setTimeout(()=>{T1.current=0,D0(null)},1500)}catch(N0){y(N0.message||"Failed to upload file"),D0((y0)=>y0?{...y0,error:N0.message||"Upload failed"}:null),W1(),T1.current=window.setTimeout(()=>{T1.current=0,D0(null)},4000)}finally{Z0(!1)}},[W1]),B$=R(async(S,l)=>{if(!S)return;let d=w0.current?.get(S);if(!d)return;let t=l&&l!==""?l:".",U0=S.includes("/")?S.split("/").slice(0,-1).join("/")||".":".";if(t===U0)return;try{let y0=(await B9(S,t))?.path||S;if(d.type==="dir")F((b0)=>{let K0=new Set;for(let a0 of b0)if(a0===S)K0.add(y0);else if(a0.startsWith(`${S}/`))K0.add(`${y0}${a0.slice(S.length)}`);else K0.add(a0);return K0});if(D(y0),d.type==="dir")L(null),O(!1),x(null);else V1.current?.(y0);Z1.current?.(U0),Z1.current?.(t),M1()}catch(N0){y(N0?.message||"Failed to move entry")}},[]);C1.current=B$;let F$=R(async(S)=>{if(!Y$(S))return;S.preventDefault(),T0.current=0,u(!1),r(null),W0(null),u1();let l=Array.from(S?.dataTransfer?.files||[]);if(l.length===0)return;let d=N1.current||U1(S)||r1();await N$(l,d)},[r1,U1,N$]),U4=R((S)=>{if(S?.stopPropagation?.(),X0)return;let l=S?.currentTarget?.dataset?.uploadTarget||".";e1.current=l,O1.current?.click()},[X0]),b$=R((S)=>{S?.preventDefault?.(),S?.stopPropagation?.();let l=S?.currentTarget?.dataset?.folderHintTarget||Z_.current||".";if(!l)return;x1.current?.(l,w0.current.get(l))},[]),P_=R(()=>{if(X0)return;let S=Z_.current,l=S?w0.current?.get(S):null;e1.current=l?.type==="dir"?l.path:".",O1.current?.click()},[X0]),i6=R(()=>{S1(()=>F_(null))},[S1,F_]),U$=R(()=>{S1(()=>P_())},[S1,P_]),s6=R(()=>{S1(()=>T_())},[S1,T_]),h5=R(()=>{S1(()=>s4())},[S1,s4]),l5=R(()=>{if(!B||!V4)return;S1(()=>K1.current?.(B,E))},[S1,B,V4,E]),p5=R(()=>{if(!B||!C_)return;S1(()=>K1.current?.(B,E))},[S1,B,C_,E]),D3=R(()=>{if(!B||B===".")return;S1(()=>R1(B))},[S1,B,R1]),a6=R(()=>{if(!B||k1)return;S1(()=>L_())},[S1,B,k1,L_]),t6=R(()=>{if(!B||k1)return;S1(()=>o6())},[S1,B,k1,o6]),e6=R(()=>{if(!K$)return;__(),lY(K$)},[__,K$]),z3=R(()=>{__(),G?.()},[__,G]),_2=R(()=>{__(),q?.()},[__,q]),H3=R(()=>{__(),Q?.()},[__,Q]),D4=R((S)=>{if(!S||S.button!==0)return;let l=S.currentTarget;if(!l||!l.dataset)return;let d=l.dataset.path;if(!d||d===".")return;if(A1.current===d)return;let t=l_(S);if(t?.closest?.("button, a, input, .workspace-caret"))return;if(!k_(t))return;S.preventDefault(),v.current={path:d,dragging:!1,startX:S.clientX,startY:S.clientY};let U0=(y0)=>{let b0=v.current;if(!b0?.path)return;let K0=Math.abs(y0.clientX-b0.startX),a0=Math.abs(y0.clientY-b0.startY),o1=K0>4||a0>4;if(!b0.dragging&&o1)b0.dragging=!0,a.current=!0,u(!0),r("move"),c_(b0.path),m_(y0.clientX,y0.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(b0.dragging){y0.preventDefault(),m_(y0.clientX,y0.clientY);let G_=document.elementFromPoint(y0.clientX,y0.clientY),g$=B_(G_)||r1();if(N1.current!==g$)h1(g$);X_(g$)}},N0=()=>{document.removeEventListener("mousemove",U0),document.removeEventListener("mouseup",N0);let y0=v.current;if(y0?.dragging&&y0.path){let b0=N1.current||r1(),K0=C1.current;if(typeof K0==="function")K0(y0.path,b0)}v.current={path:null,dragging:!1,startX:0,startY:0},T0.current=0,u(!1),r(null),h1(null),u1(),G$(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{a.current=!1},0)};document.addEventListener("mousemove",U0),document.addEventListener("mouseup",N0)},[B_,r1,c_,m_,G$,h1,X_,u1]),f_=R(async(S)=>{let l=Array.from(S?.target?.files||[]);if(l.length===0)return;let d=e1.current||".";if(await N$(l,d),e1.current=".",S?.target)S.target.value=""},[N$]);return U`
        <aside
            class=${`workspace-sidebar${f?" workspace-drop-active":""}`}
            data-workspace-scale=${n0}
            ref=${E1}
            onDragEnter=${t4}
            onDragOver=${R$}
            onDragLeave=${S$}
            onDrop=${F$}
        >
            <input type="file" multiple style="display:none" ref=${O1} onChange=${f_} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${v0}
                            class=${`workspace-menu-button${$1?" active":""}`}
                            onClick=${(S)=>{S.stopPropagation(),i0((l)=>!l)}}
                            title="Workspace actions"
                            aria-label="Workspace actions"
                            aria-haspopup="menu"
                            aria-expanded=${$1?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${$1&&U`
                            <div class="workspace-menu-dropdown" ref=${h0} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${i6} disabled=${X0}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${U$} disabled=${X0}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${s6}>Refresh tree</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${()=>S1(()=>m5())} disabled=${s}>
                                    ${s?"Reindexing workspace…":"Reindex workspace"}
                                </button>
                                <button class=${`workspace-menu-item${A?" active":""}`} role="menuitem" onClick=${h5}>
                                    ${A?"Hide hidden files":"Show hidden files"}
                                </button>
                                <div class="workspace-menu-scale-control" role="none">
                                    <label for="workspace-pwa-display-scale">Scale</label>
                                    <div class="workspace-menu-scale-input-wrap">
                                        <input
                                            id="workspace-pwa-display-scale"
                                            class="workspace-menu-scale-input"
                                            type="number"
                                            inputmode="numeric"
                                            min=${RY}
                                            max=${SY}
                                            step=${bY}
                                            value=${o0}
                                            aria-label=${`PWA display scale percentage, currently ${_1}%`}
                                            onClick=${(S)=>S.stopPropagation()}
                                            onInput=${d4}
                                            onChange=${o4}
                                            onBlur=${o4}
                                            onKeyDown=${v5}
                                        />
                                        <span aria-hidden="true">%</span>
                                    </div>
                                </div>

                                ${(G||q||Q)&&U`<div class="workspace-menu-separator"></div>`}
                                ${G&&U`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${z3}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${q&&U`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${_2}>
                                        Open VNC in tab
                                    </button>
                                `}
                                ${Q&&U`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${H3}>
                                        ${K?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}

                                ${B&&U`<div class="workspace-menu-separator"></div>`}
                                ${V4&&U`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${l5}>Open in tab</button>
                                `}
                                ${B&&!k1&&U`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${p5} disabled=${!C_}>Open in editor</button>
                                `}
                                ${P$&&U`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${D3}>Rename selected</button>
                                `}
                                ${V$&&U`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${t6}>Download selected file</button>
                                `}
                                ${K$&&U`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${e6}>Download selected folder (zip)</button>
                                `}
                                ${h_&&U`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${a6}>Delete selected file</button>
                                `}
                                <div class="workspace-menu-separator"></div>
                                <button class="workspace-menu-item" role="menuitem" onClick=${()=>{i0(!1),window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:{section:"workspace"}}))}}>Settings</button>
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${F_} title="New file" disabled=${X0}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${T_} title="Refresh tree">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            ${Y4&&U`
                <div class="workspace-index-status-row">
                    <div class=${`workspace-index-status-chip state-${K4}`} title=${u5}>
                        <span class="workspace-index-status-dot" aria-hidden="true"></span>
                        <span>${g5}</span>
                    </div>
                </div>
            `}
            <div class="workspace-tree" onClick=${F4}>
                ${q0&&U`
                    <div class="workspace-upload-strip">
                        <div class="workspace-upload-strip-text">
                            ${q0.error?U`<span class="workspace-upload-strip-error">${q0.error}</span>`:q0.done?U`<span>Done</span>`:U`<span>${q0.total>1?`Uploading ${q0.current}/${q0.total}: ${q0.name}`:`Uploading ${q0.name}`}${q0.percent>0?` (${q0.percent}%)`:"…"}</span>`}
                        </div>
                        ${!q0.done&&!q0.error&&U`
                            <div class="workspace-upload-strip-bar">
                                <div class="workspace-upload-strip-fill" style=${`width:${q0.percent||0}%`}></div>
                            </div>
                        `}
                    </div>
                `}
                ${I&&U`<div class="workspace-loading">Loading…</div>`}
                ${T&&U`<div class="workspace-error">${T}</div>`}
                ${V&&U`
                    <div
                        class="workspace-tree-list"
                        ref=${c1}
                        tabIndex="0"
                        onClick=${B4}
                        onDblClick=${N4}
                        onKeyDown=${c5}
                        onTouchStart=${a4}
                        onTouchEnd=${r_}
                        onTouchMove=${d6}
                        onTouchCancel=${r_}
                    >
                        ${x_.map(({node:S,depth:l})=>{let d=S.type==="dir",t=S.path===B,U0=S.path===z,N0=d&&N.has(S.path),y0=$0&&S.path===$0,b0=Array.isArray(S.children)&&S.children.length>0?S.children.length:Number(S.child_count)||0;return U`
                                <div
                                    key=${S.path}
                                    class=${`workspace-row${t?" selected":""}${y0?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+l*C$.indentPx}px`}}
                                    data-path=${S.path}
                                    data-type=${S.type}
                                    onMouseDown=${D4}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${d?$$(N0?"down":"right"):null}
                                    </span>
                                    <svg class=${`workspace-node-icon${d?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${d?U`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:U`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${U0?U`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${g1}
                                                value=${W}
                                                onInput=${(K0)=>M(K0?.target?.value||"")}
                                                onKeyDown=${(K0)=>{if(K0.stopPropagation(),K0.key==="Enter")K0.preventDefault(),r4();else if(K0.key==="Escape")K0.preventDefault(),l1()}}
                                                onBlur=${l1}
                                                onClick=${(K0)=>K0.stopPropagation()}
                                            />
                                        `:U`<span class="workspace-label"><span class="workspace-label-text">${S.name}</span></span>`}
                                    ${d&&!N0&&b0>0&&U`
                                        <span class="workspace-count">${b0}</span>
                                    `}
                                    ${d&&U`
                                        <button
                                            class="workspace-folder-upload"
                                            data-folder-hint-target=${S.path}
                                            title="Add folder hint to compose"
                                            aria-label=${`Add folder hint for ${S.path}`}
                                            onClick=${b$}
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
                                            onClick=${U4}
                                            disabled=${X0}
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
            ${B&&U`
                <div class="workspace-preview-splitter-h" onMouseDown=${d1} onTouchStart=${U3}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${B}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${F_} title="New file" disabled=${X0}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!k1&&U`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>C_&&K1.current?.(B,E)}
                                    title=${n4}
                                    disabled=${!C_}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${L_}
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
                            ${k1?U`
                                    <button
                                        class="workspace-download"
                                        data-folder-hint-target=${B}
                                        onClick=${b$}
                                        title="Add folder hint to compose"
                                        aria-label=${`Add folder hint for ${B}`}
                                    >
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                                            <path d="M12 11v6"/>
                                            <path d="M9 14h6"/>
                                        </svg>
                                    </button>
                                    <button class="workspace-download" onClick=${P_}
                                        title="Upload files to this folder" disabled=${X0}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${n2(B,A)} download
                                        title="Download folder as zip" onClick=${(S)=>S.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:U`<a class="workspace-download" href=${r2(B)} download
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
                    ${k&&U`<div class="workspace-loading">Loading preview…</div>`}
                    ${E?.error&&U`<div class="workspace-error">${E.error}</div>`}
                    ${k1&&U`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${h?.disabled&&U`<div class="workspace-preview-text">Folder size preview scanning is disabled in Workspace settings.</div>`}
                        ${h?.loading&&U`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${h?.error&&U`<div class="workspace-error">${h.error}</div>`}
                        ${h?.payload&&h.payload.segments?.length>0&&U`
                            <${ET} payload=${h.payload} />
                        `}
                        ${h?.payload&&(!h.payload.segments||h.payload.segments.length===0)&&U`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${E&&!E.error&&!k1&&U`
                        <div class="workspace-preview-body" ref=${C0}></div>
                    `}
                </div>
            `}
            ${e&&U`
                <div class="workspace-drag-ghost" ref=${z0}>${e.label}</div>
            `}
        </aside>
    `}M0();var yT=new Set(["html-viewer","kanban-editor","mindmap-editor"]);function u8(_,$,j){let Z=String(_||"").trim();if(!Z)return null;if($)return $;if(typeof j!=="function")return null;return j({path:Z,mode:"edit"})?.id||null}function $N(_,$,j){let Z=u8(_,$,j);return Z!=null&&yT.has(Z)}function jN(_,$,j){return u8(_,$,j)==="html-viewer"?"Edit":"Edit Source"}function ZN(_,$,j){return u8(_,$,j)==="editor"}var wT=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,IT=/\.(csv|tsv)$/i,xT=/\.pdf$/i,CT=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function PT(_,{hasPopOutTab:$=!1}={}){let j=typeof _==="string"?_.trim():"";if(!j)return null;let Z=NK(j,{hasPopOutTab:$});if(Z)return Z;if(wT.test(j)){let X="/workspace/raw?path="+encodeURIComponent(j),G=j.split("/").pop()||"document";return"/office-viewer/?url="+encodeURIComponent(X)+"&name="+encodeURIComponent(G)}if(IT.test(j))return"/data-viewer/?path="+encodeURIComponent(j);if(xT.test(j))return"/workspace/raw?path="+encodeURIComponent(j);if(CT.test(j))return"/image-viewer/?path="+encodeURIComponent(j);return null}function XN({tabs:_,activeId:$,onActivate:j,onClose:Z,onCloseOthers:X,onCloseAll:G,onTogglePin:q,onTogglePreview:Q,onToggleDiff:K,onEditSource:V,previewTabs:Y,diffTabs:N,paneOverrides:F,detachedTabs:B,onReattachTab:D,onToggleDock:z,dockVisible:H,onToggleZen:W,zenMode:M,onPopOutTab:E}){let[L,x]=C(null),I=g(null);b(()=>{if(!L)return;let m=($0)=>{if($0.type==="keydown"&&$0.key!=="Escape")return;x(null)};return document.addEventListener("click",m),document.addEventListener("keydown",m),()=>{document.removeEventListener("click",m),document.removeEventListener("keydown",m)}},[L]),b(()=>{let m=($0)=>{if($0.ctrlKey&&$0.key==="Tab"){if($0.preventDefault(),!_.length)return;let W0=_.findIndex((X0)=>X0.id===$);if($0.shiftKey){let X0=_[(W0-1+_.length)%_.length];j?.(X0.id)}else{let X0=_[(W0+1)%_.length];j?.(X0.id)}return}if(($0.ctrlKey||$0.metaKey)&&$0.key==="w"){let W0=document.querySelector(".editor-pane");if(W0&&W0.contains(document.activeElement)){if($0.preventDefault(),$)Z?.($)}}};return document.addEventListener("keydown",m),()=>document.removeEventListener("keydown",m)},[_,$,j,Z]);let J=R((m,$0)=>{if(m.button===0){j?.($0);return}if(m.button===1)m.preventDefault(),Z?.($0)},[j,Z]),k=R((m,$0)=>{if(m.defaultPrevented)return;if(m.button===0)j?.($0)},[j]),O=R((m,$0)=>{m.preventDefault(),x({id:$0,x:m.clientX,y:m.clientY})},[]),T=R((m)=>{m.stopPropagation()},[]),y=R((m,$0)=>{m.preventDefault(),m.stopPropagation(),Z?.($0)},[Z]);b(()=>{if(!$||!I.current)return;let m=I.current.querySelector(".tab-item.active");if(m)m.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]);let A=R((m)=>{if(!(F instanceof Map))return null;return F.get(m)||null},[F]),P=G0(()=>_.find((m)=>m.id===L?.id)||null,[L?.id,_]),f=G0(()=>{let m=L?.id;if(!m)return!1;return $N(m,A(m),($0)=>Y1.resolve($0))},[L?.id,A]),u=G0(()=>{let m=L?.id;if(!m)return"Edit Source";return jN(m,A(m),($0)=>Y1.resolve($0))},[L?.id,A]),c=G0(()=>{let m=L?.id;if(!m||!(B instanceof Map))return!1;return B.has(m)},[L?.id,B]),r=G0(()=>{let m=L?.id;if(!m||!(N instanceof Set))return!1;return N.has(m)},[L?.id,N]),e=G0(()=>{let m=L?.id;if(!m)return!1;let $0=_.find((X0)=>X0.id===m)||null;if(!$0)return!1;return ZN(m,A(m),(X0)=>Y1.resolve(X0))&&Boolean($0.dirty||r)},[L?.id,r,A,_]);if(!_.length)return null;return U`
        <div class="tab-strip" ref=${I} role="tablist">
            ${_.map((m)=>U`
                <div
                    key=${m.id}
                    class=${`tab-item${m.id===$?" active":""}${m.dirty?" dirty":""}${m.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${m.id===$}
                    title=${m.path}
                    onMouseDown=${($0)=>J($0,m.id)}
                    onClick=${($0)=>k($0,m.id)}
                    onContextMenu=${($0)=>O($0,m.id)}
                >
                    ${m.pinned&&U`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${m.label}</span>
                    ${B instanceof Map&&B.has(m.id)&&U`
                        <span class="tab-detached-badge" aria-label="Detached" title="Open in separate window">↗</span>
                    `}
                    <button
                        type="button"
                        class="tab-close"
                        onPointerDown=${T}
                        onMouseDown=${T}
                        onClick=${($0)=>y($0,m.id)}
                        title=${m.dirty?"Unsaved changes":"Close"}
                        aria-label=${m.dirty?"Unsaved changes":`Close ${m.label}`}
                    >
                        ${m.dirty?U`<span class="tab-dirty-dot" aria-hidden="true"></span>`:U`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${z&&U`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${H?" active":""}`}
                    onClick=${z}
                    title=${`${H?"Hide":"Show"} terminal (Ctrl+\`)`}
                    aria-label=${`${H?"Hide":"Show"} terminal`}
                    aria-pressed=${H?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="1.75" y="2.25" width="12.5" height="11.5" rx="2"/>
                        <polyline points="4.5 5.25 7 7.75 4.5 10.25"/>
                        <line x1="8.5" y1="10.25" x2="11.5" y2="10.25"/>
                    </svg>
                </button>
            `}
            ${W&&U`
                <button
                    class=${`tab-strip-zen-toggle${M?" active":""}`}
                    onClick=${W}
                    title=${`${M?"Exit":"Enter"} zen mode (Ctrl+Shift+Z)`}
                    aria-label=${`${M?"Exit":"Enter"} zen mode`}
                    aria-pressed=${M?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        ${M?U`<polyline points="4 8 1.5 8 1.5 1.5 14.5 1.5 14.5 8 12 8"/><polyline points="4 8 1.5 8 1.5 14.5 14.5 14.5 14.5 8 12 8"/>`:U`<polyline points="5.5 1.5 1.5 1.5 1.5 5.5"/><polyline points="10.5 1.5 14.5 1.5 14.5 5.5"/><polyline points="5.5 14.5 1.5 14.5 1.5 10.5"/><polyline points="10.5 14.5 14.5 14.5 14.5 10.5"/>`}
                    </svg>
                </button>
            `}
        </div>
        ${L&&U`
            <div class="tab-context-menu" style=${{left:L.x+"px",top:L.y+"px"}}>
                <button onClick=${()=>{Z?.(L.id),x(null)}}>Close</button>
                <button onClick=${()=>{X?.(L.id),x(null)}}>Close Others</button>
                <button onClick=${()=>{G?.(),x(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{q?.(L.id),x(null)}}>
                    ${P?.pinned?"Unpin":"Pin"}
                </button>
                ${f&&V&&U`
                    <button onClick=${()=>{V(L.id),x(null)}}>${u}</button>
                `}
                ${c&&D&&U`
                    <button onClick=${()=>{D(L.id),x(null)}}>Reattach</button>
                `}
                ${E&&!c&&U`
                    <button onClick=${()=>{let m=_.find(($0)=>$0.id===L.id);E(L.id,m?.label),x(null)}}>Open in Window</button>
                `}
                ${e&&K&&U`
                    <hr />
                    <button onClick=${()=>{j?.(L.id),K(L.id),x(null)}}>${r?"Hide Diff":"Compare to Saved"}</button>
                `}
                ${Q&&/\.(md|mdx|markdown)$/i.test(L.id)&&U`
                    <hr />
                    <button onClick=${()=>{Q(L.id),x(null)}}>
                        ${Y?.has(L.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${(()=>{let m=PT(L.id,{hasPopOutTab:typeof E==="function"});if(!m)return null;return U`
                        <hr />
                        <button onClick=${()=>{window.open(m,"_blank","noopener"),x(null)}}>Open in New Tab</button>
                    `})()}
            </div>
        `}
    `}M0();y1();j8();function v4(_,$=30){let j=Array.isArray(_)?_.map((Z)=>Number(Z)).filter((Z)=>Number.isFinite(Z)):[];return j.length>$?j.slice(j.length-$):j}function v8(_,$=30){return v4(_,$).map((j)=>Math.max(0,Math.min(100,j)))}function y5(_,$=56,j=16,Z={}){let X=v4(_);if(X.length===0)return"";let G=Number.isFinite(Z.min)?Number(Z.min):Math.min(...X),q=Number.isFinite(Z.max)?Number(Z.max):Math.max(...X);if(!(q>G)){let Q=(j/2).toFixed(2);return`M 0 ${Q} L ${$} ${Q}`}if(X.length===1){let Q=(X[0]-G)/(q-G),K=(j-Q*j).toFixed(2);return`M 0 ${K} L ${$} ${K}`}return X.map((Q,K)=>{let V=K/(X.length-1||1)*$,Y=(Q-G)/(q-G),N=j-Y*j;return`${K===0?"M":"L"} ${V.toFixed(2)} ${N.toFixed(2)}`}).join(" ")}function j4(_){return`${Math.round(Number(_)||0)}%`}function mj(_){let $=Number(_);if(!Number.isFinite($)||$<=0)return"0B";let j=["B","K","M","G","T"],Z=0,X=$;while(X>=1024&&Z<j.length-1)X/=1024,Z+=1;let G=X>=100||Z===0?0:X>=10?0:1;return`${X.toFixed(G)}${j[Z]}`}function fT(_){let $=[`CPU ${j4(_?.cpu_percent)}`,`RAM ${j4(_?.ram_percent)}`];if(Number(_?.buffer_cache_bytes)>0)$.push(`BUF ${mj(_?.buffer_cache_bytes)}`);if(qN(_))$.push(`VRAM ${j4(_?.vram_percent)}`);if(Number.isFinite(Number(_?.swap_percent))&&Number(_?.swap_total_bytes)>0)$.push(`SWP ${j4(_?.swap_percent)}`);return $.join(" • ")}function GN(_){return Number(_?.process_memory?.vm_rss_bytes)>0?Number(_.process_memory.vm_rss_bytes):Number(_?.process_memory?.rss_bytes)||0}function RT(_){return GN(_)>0&&v4(_?.process_rss_series_bytes).length>0}function qN(_){return _?.vram_percent!==null&&_?.vram_percent!==void 0&&Number.isFinite(Number(_?.vram_percent))&&Number(_?.vram_total_bytes)>0&&Number(_?.vram_used_bytes)>=0&&v4(_?.vram_series).length>0}function ST(){if(typeof window>"u"||typeof window.matchMedia!=="function")return!1;return window.matchMedia("(max-width: 900px)").matches}function QN({mode:_="overlay"}){let[$,j]=C(()=>M6(!1)),[Z,X]=C(()=>GQ(!1)),[G,q]=C(()=>ST()),[Q,K]=C({cpu_percent:0,ram_percent:0,swap_percent:null,cpu_series:[],ram_series:[],swap_series:[],vram_percent:null,vram_series:[],vram_total_bytes:0,vram_used_bytes:0,gpu_provider:null,buffer_cache_bytes:null,buffer_cache_series_bytes:[],process_rss_series_bytes:[],process_memory:{rss_bytes:0,vm_rss_bytes:null},swap_total_bytes:0,swap_used_bytes:0,sample_interval_ms:2000,platform:""}),[V,Y]=C(!1);b(()=>{let y=(P)=>{j(Boolean(P?.detail?.enabled))},A=(P)=>{X(Boolean(P?.detail?.collapsed))};return window.addEventListener(R4,y),window.addEventListener($8,A),()=>{window.removeEventListener(R4,y),window.removeEventListener($8,A)}},[]),b(()=>{if(typeof window>"u"||typeof window.matchMedia!=="function")return;let y=window.matchMedia("(max-width: 900px)"),A=()=>q(Boolean(y.matches));if(A(),typeof y.addEventListener==="function")return y.addEventListener("change",A),()=>y.removeEventListener("change",A);return y.addListener(A),()=>y.removeListener(A)},[]);let F=_==="overlay";b(()=>{if(!$||!F)return;let y=!1,A=0,P=async()=>{Y((f)=>f||Q.cpu_series.length>0?f:!0);try{let f=await g7();if(y)return;K({cpu_percent:Number(f?.cpu_percent)||0,ram_percent:Number(f?.ram_percent)||0,swap_percent:Number.isFinite(Number(f?.swap_percent))?Number(f?.swap_percent):null,vram_percent:Number.isFinite(Number(f?.vram_percent))?Number(f?.vram_percent):null,cpu_series:v8(f?.cpu_series),ram_series:v8(f?.ram_series),swap_series:v8(f?.swap_series),vram_series:v8(f?.vram_series),vram_total_bytes:Number(f?.vram_total_bytes)||0,vram_used_bytes:Number(f?.vram_used_bytes)||0,gpu_provider:typeof f?.gpu_provider==="string"&&f.gpu_provider.trim()?f.gpu_provider.trim():null,buffer_cache_bytes:Number.isFinite(Number(f?.buffer_cache_bytes))?Number(f?.buffer_cache_bytes):null,buffer_cache_series_bytes:v4(f?.buffer_cache_series_bytes),process_rss_series_bytes:v4(f?.process_rss_series_bytes),process_memory:{rss_bytes:Number(f?.process_memory?.rss_bytes)||0,vm_rss_bytes:Number.isFinite(Number(f?.process_memory?.vm_rss_bytes))?Number(f?.process_memory?.vm_rss_bytes):null},swap_total_bytes:Number(f?.swap_total_bytes)||0,swap_used_bytes:Number(f?.swap_used_bytes)||0,sample_interval_ms:Number(f?.sample_interval_ms)||2000,platform:String(f?.platform||"")})}catch{if(y)return}finally{if(!y)Y(!1)}};return P(),A=window.setInterval(()=>{if(document?.visibilityState==="hidden")return;P()},Math.max(1000,Number(Q.sample_interval_ms)||2000)),()=>{if(y=!0,A)window.clearInterval(A)}},[$,F]);let B=G0(()=>y5(Q.cpu_series,56,16,{min:0,max:100}),[Q.cpu_series]),D=G0(()=>y5(Q.ram_series,56,16,{min:0,max:100}),[Q.ram_series]),z=G0(()=>y5(Q.swap_series,56,16,{min:0,max:100}),[Q.swap_series]),H=G0(()=>y5(Q.vram_series,56,16,{min:0,max:100}),[Q.vram_series]),W=G0(()=>y5(Q.buffer_cache_series_bytes),[Q.buffer_cache_series_bytes]),M=G0(()=>y5(Q.process_rss_series_bytes),[Q.process_rss_series_bytes]),E=Number(Q.buffer_cache_bytes)>0&&v4(Q.buffer_cache_series_bytes).length>0,L=Number.isFinite(Number(Q.swap_percent))&&Q.swap_total_bytes>0,x=qN(Q),I=GN(Q),J=RT(Q),k=G0(()=>fT(Q),[Q]);if(!$||!F)return null;let O=Z?"Show system meters":V?"Updating system meters… Click to collapse.":"System meters — click to collapse.",T=(y)=>{y?.stopPropagation?.();let A=!Z;X(A),y9(A)};return U`
        <div class=${`system-meters-hud system-meters-hud-${_}${Z?" is-collapsed":""}`} aria-live="polite">
            <button
                class="system-meters-card"
                type="button"
                title=${O}
                aria-label=${O}
                aria-expanded=${Z?"false":"true"}
                onClick=${T}
            >
                ${Z?U`<span class="system-meters-collapse-tab" aria-hidden="true">${$$("left")}</span>`:G?U`<span class="system-meters-compact-summary">${k}</span>`:U`
                            <div class="system-meters-row cpu">
                                <span class="system-meters-label">CPU</span>
                                <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                    <path d=${B}></path>
                                </svg>
                                <span class="system-meters-value">${j4(Q.cpu_percent)}</span>
                            </div>
                            <div class="system-meters-row ram">
                                <span class="system-meters-label">RAM</span>
                                <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                    <path d=${D}></path>
                                </svg>
                                <span class="system-meters-value">${j4(Q.ram_percent)}</span>
                            </div>
                            ${J&&U`
                                <div class="system-meters-row rss">
                                    <span class="system-meters-label">RSS</span>
                                    <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                        <path d=${M}></path>
                                    </svg>
                                    <span class="system-meters-value">${mj(I)}</span>
                                </div>
                            `}
                            ${x&&U`
                                <div class="system-meters-row vram" title=${Q.gpu_provider?`GPU telemetry: ${Q.gpu_provider}`:"GPU memory telemetry"}>
                                    <span class="system-meters-label">VRAM</span>
                                    <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                        <path d=${H}></path>
                                    </svg>
                                    <span class="system-meters-value">${j4(Q.vram_percent)}</span>
                                </div>
                            `}
                            ${E&&U`
                                <div class="system-meters-row buf">
                                    <span class="system-meters-label">BUF</span>
                                    <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                        <path d=${W}></path>
                                    </svg>
                                    <span class="system-meters-value">${mj(Q.buffer_cache_bytes)}</span>
                                </div>
                            `}
                            ${L&&U`
                                <div class="system-meters-row swap">
                                    <span class="system-meters-label">SWP</span>
                                    <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                        <path d=${z}></path>
                                    </svg>
                                    <span class="system-meters-value">${j4(Q.swap_percent)}</span>
                                </div>
                            `}
                        `}
            </button>
        </div>
    `}function bT(_){let{workspaceOpen:$,editorOpen:j,chatOnlyMode:Z,zenMode:X}=_;return`app-shell${$?"":" workspace-collapsed"}${j?" editor-open":""}${Z?" chat-only":""}${X?" zen-mode":""}`}function gT(_){let $=_?.user_message?.id??_?.row_id;if($===null||$===void 0||$==="")return null;let j=Number($);return Number.isFinite(j)?j:null}function uT(_){let{id:$,scrollToBottom:j,getElementById:Z=(V)=>document.getElementById(V),scheduleRaf:X=(V)=>requestAnimationFrame(V),scheduleTimeout:G=(V,Y)=>{setTimeout(V,Y)},maxAttempts:q=12}=_,Q=(V)=>{V.scrollIntoView({behavior:"smooth",block:"center"}),V.classList.add("post-highlight"),G(()=>V.classList.remove("post-highlight"),2000)},K=(V)=>{let Y=Z(`post-${$}`);if(Y){Q(Y);return}if(V<=0){j?.();return}X(()=>{G(()=>K(V-1),40)})};K(q)}function vT(_){let{response:$,viewStateRef:j,scrollToBottom:Z,scrollPostedMessage:X=(K)=>uT({id:K,scrollToBottom:Z})}=_,{searchQuery:G,searchOpen:q}=j.current||{};if(G||q)return;let Q=gT($);if(Q){X(Q);return}Z()}function VN(_){let{appShellRef:$,workspaceOpen:j,editorOpen:Z,chatOnlyMode:X,zenMode:G,isRenameBranchFormOpen:q,closeRenameCurrentBranchForm:Q,handleRenameCurrentBranch:K,renameBranchNameDraft:V,renameBranchNameInputRef:Y,setRenameBranchNameDraft:N,renameBranchDraftState:F,isRenamingBranch:B,addFileRef:D,addFolderRef:z,openEditor:H,openTerminalTab:W,openVncTab:M,hasDockPanes:E,toggleDock:L,dockVisible:x,handleSplitterMouseDown:I,handleSplitterTouchStart:J,showEditorPaneContainer:k,tabStripTabs:O,tabStripActiveId:T,handleTabActivate:y,handleTabClose:A,handleTabCloseOthers:P,handleTabCloseAll:f,handleTabTogglePin:u,handleTabTogglePreview:c,handleTabToggleDiff:r,handleTabEditSource:e,handleReattachPane:m,previewTabs:$0,diffTabs:W0,tabPaneOverrides:X0,toggleZenMode:Z0,handlePopOutPane:q0,isWebAppMode:D0,editorContainerRef:h,editorInstanceRef:j0,detachedTabs:Y0,activeDetachedTab:L0,detachedDockPane:s,handleDockSplitterMouseDown:Q0,handleDockSplitterTouchStart:O0,TERMINAL_TAB_PATH:x0,dockContainerRef:r0,handleEditorSplitterMouseDown:l0,handleEditorSplitterTouchStart:n0,searchQuery:m0,isIOSDevice:_1,currentBranchRecord:S0,currentChatJid:o0,currentChatBranches:c0,handleBranchPickerChange:$1,formatBranchPickerLabel:i0,openRenameCurrentBranchForm:H1,handlePruneCurrentBranch:Q1,handlePurgeArchivedBranch:P0,currentHashtag:J0,handleBackToTimeline:z1,activeSearchScopeLabel:G1,oobePanelState:J1,composePrefillRequest:F0,requestComposePrefill:R0,handleOobeSetupProvider:w0,handleOobeShowModelPicker:j1,handleOobeOpenWorkspace:x1,handleDismissProviderMissingOobe:K1,handleCompleteProviderReadyOobe:V1,posts:Z1,isMainTimelineView:E1,hasMore:c1,loadMore:g1,timelineRef:O1,handleHashtagClick:e1,addMessageRef:T1,scrollToMessage:V0,openFileFromPill:v,openTimelineFileFromPill:n,handleDeletePost:a,handleOpenFloatingWidget:_0,agents:H0,userProfile:A0,removingPostIds:E0,agentStatus:C0,isCompactionStatus:k0,agentDraft:h0,agentPlan:v0,agentThought:p0,pendingRequest:d0,intentToast:I0,currentTurnId:T0,steerQueued:N1,handlePanelToggle:q1,btwSession:o,closeBtwPanel:z0,handleBtwRetry:s0,handleBtwInject:t0,floatingWidget:C1,handleCloseFloatingWidget:Z_,handleFloatingWidgetEvent:A1,attachmentPreview:N_,setAttachmentPreview:p1,extensionStatusPanels:W1,pendingExtensionPanelActions:M_,handleExtensionPanelAction:a1,searchOpen:M1,followupQueueItems:Q4,handleInjectQueuedFollowup:I$,handleRemoveQueuedFollowup:r1,handleMoveQueuedFollowup:B_,viewStateRef:U1,loadPosts:h1,scrollToBottom:u1,searchScope:X_,handleSearch:m_,handleSearchScopeChange:c_,setSearchScope:G$,enterSearchMode:x$,exitSearchMode:l1,fileRefs:R1,removeFileRef:r4,clearFileRefs:O_,setFileRefsFromCompose:F_,folderRefs:q$,removeFolderRef:D_,clearFolderRefs:I_,setFolderRefsFromCompose:x_,messageRefs:Q$,removeMessageRef:C$,clearMessageRefs:F3,setMessageRefsFromCompose:k1,handleCreateSessionFromCompose:C_,handleCreateRootSessionFromCompose:n4,handleRestoreBranch:V4,attachActiveEditorFile:P$,followupQueueCount:h_,handleBtwIntercept:V$,handleMessageResponse:K$,handleComposeSubmitError:g5,isComposeBoxAgentActive:u5,activeChatAgents:K4,connectionStatus:Y4,stateAccessFailed:__,activeModel:d4,agentModelsPayload:f$,activeModelUsage:o4,activeThinkingLevel:v5,supportsThinking:S1,contextUsage:m5,extensionWorkingState:l_,notificationsEnabled:k_,notificationPermission:i4,handleToggleNotifications:N4,setActiveModel:B4,applyModelState:T_,setPendingRequest:$_,pendingRequestRef:s4,toggleWorkspace:F4}=_,p_=()=>{if(_1())return;u1()};return U`
    <div class=${bT({workspaceOpen:j,editorOpen:Z,chatOnlyMode:X,zenMode:G})} ref=${$}>
      <${QN} mode="overlay" />
      ${q&&U`
        <div class="rename-branch-overlay" onPointerDown=${(n1)=>{if(n1.target===n1.currentTarget)Q()}}>
          <form
            class="rename-branch-panel"
            onSubmit=${(n1)=>{n1.preventDefault(),K(V)}}
          >
            <div class="rename-branch-title">Rename session</div>
            <input
              ref=${Y}
              value=${V}
              onInput=${(n1)=>{let c5=n1.currentTarget?.value??"";N(String(c5))}}
              onKeyDown=${(n1)=>{if(n1.key==="Escape")n1.preventDefault(),Q()}}
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
                onClick=${Q}
                disabled=${B}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      `}
      ${!X&&U`
        <${_N}
          onFileSelect=${D}
          onFolderSelect=${z}
          visible=${j}
          active=${j||Z}
          onOpenEditor=${H}
          onOpenTerminalTab=${W}
          onOpenVncTab=${M}
          onToggleTerminal=${E?L:void 0}
          terminalVisible=${Boolean(E&&x)}
        />
        <button
          class=${`workspace-toggle-tab${j?" open":" closed"}`}
          onClick=${F4}
          title=${j?"Hide workspace":"Show workspace"}
          aria-label=${j?"Hide workspace":"Show workspace"}
        >
          <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="6 3 11 8 6 13" />
          </svg>
        </button>
        <div class="workspace-splitter" onMouseDown=${I} onTouchStart=${J}></div>
      `}
      ${k&&U`
        <div class="editor-pane-container">
          ${G&&U`<div class="zen-hover-zone"></div>`}
          ${Z&&U`
            <${XN}
              tabs=${O}
              activeId=${T}
              onActivate=${y}
              onClose=${A}
              onCloseOthers=${P}
              onCloseAll=${f}
              onTogglePin=${u}
              onTogglePreview=${c}
              onToggleDiff=${r}
              onEditSource=${e}
              previewTabs=${$0}
              diffTabs=${W0}
              paneOverrides=${X0}
              detachedTabs=${Y0}
              onReattachTab=${m}
              onToggleDock=${E?L:void 0}
              dockVisible=${E&&x}
              onToggleZen=${Z0}
              zenMode=${G}
              onPopOutTab=${D0?void 0:q0}
            />
          `}
          ${Z&&L0&&U`
            <div class="editor-pane-host editor-pane-detached-host">
              <div class="editor-empty-state">
                <div class="editor-empty-state-title">${L0.label||L0.panePath||"Detached pane"}</div>
                <div class="editor-empty-state-body">This pane is detached into another window.</div>
                <div class="editor-empty-state-actions">
                  <button class="editor-empty-state-button" onClick=${()=>m(L0.panePath)}>Reattach here</button>
                </div>
              </div>
            </div>
          `}
          ${Z&&!L0&&U`<div class="editor-pane-host" ref=${h}></div>`}
          ${Z&&!L0&&T&&$0.has(T)&&U`
            <${U8}
              getContent=${()=>j0.current?.getContent?.()}
              subscribeContentChange=${(n1)=>j0.current?.onContentChange?.(n1)}
              path=${T}
              onClose=${()=>c(T)}
            />
          `}
          ${E&&x&&U`<div class="dock-splitter" onMouseDown=${Q0} onTouchStart=${O0}></div>`}
          ${E&&U`<div class=${`dock-panel${x?"":" hidden"}${Z?"":" standalone"}`}>
            <div class="dock-panel-header">
              <span class="dock-panel-title">Terminal</span>
              <div class="dock-panel-actions">
                ${!D0&&!s&&U`
                  <button class="dock-panel-action" onClick=${()=>q0(x0,"Terminal")} title="Open terminal in window" aria-label="Open terminal in window">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2.25" y="2.25" width="8.5" height="8.5" rx="1.5"/>
                      <path d="M8.5 2.25h5.25v5.25"/>
                      <path d="M13.75 2.25 7.75 8.25"/>
                    </svg>
                  </button>
                `}
                ${s&&U`
                  <button class="dock-panel-action" onClick=${()=>m(x0)} title="Reattach terminal" aria-label="Reattach terminal">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2.25" y="2.25" width="11.5" height="11.5" rx="1.5"/>
                      <path d="M5.25 8h5.5"/>
                      <path d="M8 5.25v5.5"/>
                    </svg>
                  </button>
                `}
                <button class="dock-panel-close" onClick=${L} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                  <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                    <line x1="4" y1="4" x2="12" y2="12"/>
                    <line x1="12" y1="4" x2="4" y2="12"/>
                  </svg>
                </button>
              </div>
            </div>
            ${s?U`
                <div class="dock-panel-body dock-panel-body-detached">
                  <div class="editor-empty-state">
                    <div class="editor-empty-state-title">Terminal detached</div>
                    <div class="editor-empty-state-body">The terminal is open in another window.</div>
                    <div class="editor-empty-state-actions">
                      <button class="editor-empty-state-button" onClick=${()=>m(x0)}>Reattach here</button>
                    </div>
                  </div>
                </div>
              `:U`<div class="dock-panel-body" ref=${r0}></div>`}
          </div>`}
        </div>
        <div class="editor-splitter" onMouseDown=${l0} onTouchStart=${n0}></div>
      `}
      <${xK}
        workspaceOpen=${j}
        toggleWorkspace=${F4}
        chatOnlyMode=${X}
        onOpenTerminalTab=${W}
        onOpenVncTab=${M}
        onToggleTerminal=${E?L:void 0}
        terminalVisible=${Boolean(E&&x)}
      />
      <${IK}
        activeChatAgents=${K4}
        currentChatJid=${o0}
        workspaceOpen=${j}
        chatOnlyMode=${X}
        terminalVisible=${Boolean(E&&x)}
        onSwitchChat=${$1}
        onToggleWorkspace=${F4}
        onOpenTerminalTab=${W}
        onOpenVncTab=${M}
        onToggleTerminalDock=${E?L:void 0}
        onPrefillCompose=${R0}
      />
      <div class="container">
        ${m0&&_1()&&U`<div class="search-results-spacer"></div>`}
        ${(J0||m0)&&U`
          <div class="hashtag-header">
            <button class="back-btn" onClick=${z1}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <span>${J0?`#${J0}`:`Search: ${m0} · ${G1}`}</span>
          </div>
        `}
        ${J1?.kind&&J1.kind!=="hidden"&&U`
          <${mV}
            kind=${J1.kind}
            onSetupProvider=${w0}
            onShowModelPicker=${j1}
            onOpenWorkspace=${x1}
            onDismiss=${J1.kind==="provider-missing"?K1:V1}
          />
        `}
        <${yY}
          posts=${Z1}
          hasMore=${E1?c1:!1}
          onLoadMore=${E1?g1:void 0}
          timelineRef=${O1}
          onHashtagClick=${e1}
          onMessageRef=${T1}
          onScrollToMessage=${V0}
          onFileRef=${n||v}
          onPostClick=${void 0}
          onDeletePost=${a}
          onOpenWidget=${_0}
          onOpenAttachmentPreview=${p1}
          emptyMessage=${J0?`No posts with #${J0}`:m0?`No results for "${m0}"`:void 0}
          agents=${H0}
          user=${A0}
          reverse=${E1}
          removingPostIds=${E0}
          searchQuery=${m0}
        />
        <${Oj}
          status=${k0(C0)?null:C0}
          draft=${h0}
          plan=${v0}
          thought=${p0}
          pendingRequest=${d0}
          intent=${I0}
          turnId=${T0}
          steerQueued=${N1}
          onPanelToggle=${q1}
          showExtensionPanels=${!1}
        />
        <${nV}
          session=${o}
          onClose=${z0}
          onRetry=${s0}
          onInject=${t0}
        />
        <${QK}
          widget=${C1}
          onClose=${Z_}
          onWidgetEvent=${A1}
        />
        ${N_&&U`
          <${TK}
            mediaId=${N_.mediaId}
            info=${N_.info}
            onClose=${()=>p1(null)}
          />
        `}
        <${zV} />
        <${Oj}
          extensionPanels=${Array.from(W1.values())}
          pendingPanelActions=${M_}
          onExtensionPanelAction=${a1}
          turnId=${T0}
          steerQueued=${N1}
          onPanelToggle=${q1}
          showCorePanels=${!1}
        />
        <${vV}
          onPost=${(n1)=>{vT({response:n1,viewStateRef:U1,scrollToBottom:u1})}}
          onFocus=${p_}
          searchMode=${M1}
          searchScope=${X_}
          onSearch=${m_}
          onSearchScopeChange=${c_||G$}
          onEnterSearch=${x$}
          onExitSearch=${l1}
          fileRefs=${R1}
          onRemoveFileRef=${r4}
          onClearFileRefs=${O_}
          onSetFileRefs=${F_}
          folderRefs=${q$}
          onRemoveFolderRef=${D_}
          onClearFolderRefs=${I_}
          onSetFolderRefs=${x_}
          messageRefs=${Q$}
          onRemoveMessageRef=${C$}
          onClearMessageRefs=${F3}
          onSetMessageRefs=${k1}
          onSwitchChat=${$1}
          onRenameSession=${K}
          isRenameSessionInProgress=${B}
          onCreateSession=${C_}
          onCreateRootSession=${n4}
          onDeleteSession=${Q1}
          onPurgeArchivedSession=${P0}
          onRestoreSession=${V4}
          activeEditorPath=${X?null:T}
          onAttachEditorFile=${X?void 0:P$}
          onOpenFilePill=${v}
          followupQueueCount=${h_}
          followupQueueItems=${Q4}
          onInjectQueuedFollowup=${I$}
          onRemoveQueuedFollowup=${r1}
          onMoveQueuedFollowup=${B_}
          onSubmitIntercept=${V$}
          onMessageResponse=${K$}
          onSubmitError=${g5}
          isAgentActive=${u5}
          activeChatAgents=${K4}
          currentChatJid=${o0}
          connectionStatus=${Y4}
          stateAccessFailed=${__}
          activeModel=${d4}
          agentModelsPayload=${f$}
          modelUsage=${o4}
          thinkingLevel=${v5}
          supportsThinking=${S1}
          contextUsage=${m5}
          notificationsEnabled=${k_}
          notificationPermission=${i4}
          onToggleNotifications=${N4}
          onModelChange=${B4}
          onModelStateChange=${T_}
          statusNotice=${k0(C0)?C0:null}
          extensionWorkingState=${l_}
          prefillRequest=${F0}
        />
        <${aK}
          request=${d0}
          onRespond=${()=>{$_(null),s4.current=null}}
        />
      </div>
    </div>
  `}function KN(_){let{branchLoaderMode:$,panePopoutMode:j,branchLoaderState:Z,panePopoutOptions:X,mainShellOptions:G,renderers:q}=_,Q=OV({branchLoaderMode:$,panePopoutMode:j}),K=q?.renderBranchLoaderMode||LV,V=q?.renderPanePopoutMode||JV,Y=q?.renderMainShell||VN;if(Q==="branch-loader")return K(Z);if(Q==="pane-popout")return V(X);return Y(G)}var c8="piclaw_btw_session",NN=900,YN="__piclawRenameBranchFormLock__";function mT(){try{return import.meta.url}catch{return null}}function cj(_){let $=typeof _==="string"?_.trim().toLowerCase():"";return $==="1"||$==="true"||$==="yes"}function cT(_){try{let $=_?new URL(_).searchParams.get("v"):null;return $&&$.trim()?$.trim():null}catch{return null}}function m8(_,$,j=""){let Z=_?.get?.($);return Z&&Z.trim()?Z.trim():j}function BN(_={}){let $=_.importMetaUrl===void 0?mT():_.importMetaUrl,j=_.document===void 0?typeof document<"u"?document:null:_.document,Z=_.origin===void 0?typeof window<"u"?window.location.origin:"http://localhost":_.origin||"http://localhost",X=cT($);if(X)return X;try{let q=Array.from(j?.querySelectorAll?.('script[type="module"][src]')||[]).find((V)=>String(V?.getAttribute?.("src")||"").includes("/static/dist/app.bundle.js"))?.getAttribute?.("src")||"";if(!q)return null;let K=new URL(q,Z).searchParams.get("v");return K&&K.trim()?K.trim():null}catch{return null}}function FN(_={}){let $=_.window===void 0?typeof window<"u"?window:null:_.window;if(!$)return null;let j=$[YN];if(j&&typeof j==="object")return j;let Z={inFlight:!1,cooldownUntil:0};return $[YN]=Z,Z}function UN(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function DN(_={}){let $=typeof _.readItem==="function"?_.readItem:E_,j=_.storageKey||c8,Z=$(j);if(!Z)return null;try{let X=JSON.parse(Z);if(!X||typeof X!=="object")return null;let G=typeof X.question==="string"?X.question:"",q=typeof X.answer==="string"?X.answer:"",Q=typeof X.thinking==="string"?X.thinking:"",K=typeof X.error==="string"&&X.error.trim()?X.error:null,V=X.status==="running"?"error":X.status==="success"||X.status==="error"?X.status:"success";return{question:G,answer:q,thinking:Q,error:V==="error"?K||"BTW stream interrupted. You can retry.":K,model:null,status:V}}catch{return null}}function zN(_,$={}){let j=$.defaultChatJid||"web:default",Z=m8(_,"chat_jid",j),X=cj(_?.get?.("chat_only")||_?.get?.("chat-only")),G=cj(_?.get?.("pane_popout")),q=m8(_,"pane_path"),Q=m8(_,"pane_label"),K=cj(_?.get?.("branch_loader")),V=m8(_,"branch_source_chat_jid",Z);return{currentChatJid:Z,chatOnlyMode:X,panePopoutMode:G,panePopoutPath:q,panePopoutLabel:Q,branchLoaderMode:K,branchLoaderSourceChatJid:V}}function HN(_,$){let j=Array.isArray(_)?_:[];return j.find((Z)=>Z?.id===$)||j[0]||null}function WN(_,$){if(!$||!_||typeof _.get!=="function")return null;return _.get($)||null}function hj(_,$,j){return _||$?.label||j||"Pane"}function ON(_,$,j){return`${hj(_,$,j)} · PiClaw`}function LN(_,$,j,Z){let X=Array.isArray(_)?_.length:0,G=Boolean(Z&&$?.has?.(Z)),q=Boolean(Z&&j?.has?.(Z));return X>1||G||q}function JN(_,$){let j=typeof _==="string"?_:"";return j===$||j.startsWith(`${$}/`)}function EN(_,$,j,Z){return _===$&&!j||Z}function AN(_,$,j,Z,X){return _||!$&&(j||Z&&X)}y1();function hT(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function Y_(_,$,j){let Z=_?.[$];return typeof Z==="function"?Z:hT($,j)}var MN=!1,kN=!1,TN=!1;function lT(_){if(!_||typeof _.setOptions!=="function")return;_.setOptions({breaks:!0,gfm:!0})}function pT(_=typeof window<"u"?window:null){if(!_||kN)return;let $=(j)=>{let Z=String(j?.message||j?.error?.message||"").trim();if(!/ResizeObserver loop (completed with undelivered notifications|limit exceeded)/i.test(Z)){if(!(Z==="Script error."&&(j?.lineno===0||!j?.filename)))return}j.preventDefault?.(),j.stopImmediatePropagation?.()};_.addEventListener("error",$,!0),kN=!0}function rT(){Y1.register(m3),Y1.register(z9),Y1.register(D9),Y1.register(H9),Y1.register(W9),Y1.register(O9),Y1.register(L9),Y1.register(E9),Y1.register(L7),c3(),Y1.register(o3),Y1.register(i3)}function nT(_=typeof window<"u"?window:null){if(!_||TN)return;if(!_.isSecureContext)return;if(!("serviceWorker"in _.navigator))return;TN=!0,_.navigator.serviceWorker.register("/sw.js").catch(($)=>{console.warn("Failed to register app service worker:",$)})}async function yN(){if(MN)return;let _=typeof window<"u"?window:null,$=_?_?.marked:null;if(lT($),pT(_),Dj(_),_)try{let j=await Promise.resolve().then(() => (M0(),nZ));_.__piclawPreactHtm=j,_.__piclawPreact=j}catch(j){}rT(),await DK(_),nT(_),MN=!0}function dT(_=H6){return{searchPosts:_.searchPosts,deletePost:_.deletePost,getAgents:_.getAgents,getAgentThought:_.getAgentThought,setAgentThoughtVisibility:_.setAgentThoughtVisibility,getAgentStatus:_.getAgentStatus,getWorkspaceFile:_.getWorkspaceFile,getThread:_.getThread,getTimeline:_.getTimeline,sendAgentMessage:_.sendAgentMessage,forkChatBranch:_.forkChatBranch,getAgentContext:Y_(_,"getAgentContext",null),getAutoresearchStatus:Y_(_,"getAutoresearchStatus",null),stopAutoresearch:Y_(_,"stopAutoresearch",{status:"ok"}),dismissAutoresearch:Y_(_,"dismissAutoresearch",{status:"ok"}),getAgentModels:Y_(_,"getAgentModels",{current:null,models:[]}),completeInstanceOobe:Y_(_,"completeInstanceOobe",{status:"ok"}),getActiveChatAgents:Y_(_,"getActiveChatAgents",{chats:[]}),getChatBranches:Y_(_,"getChatBranches",{chats:[]}),renameChatBranch:Y_(_,"renameChatBranch",null),pruneChatBranch:Y_(_,"pruneChatBranch",null),restoreChatBranch:Y_(_,"restoreChatBranch",null),getAgentQueueState:Y_(_,"getAgentQueueState",{count:0}),steerAgentQueueItem:Y_(_,"steerAgentQueueItem",{removed:!1,queued:"steer"}),removeAgentQueueItem:Y_(_,"removeAgentQueueItem",{removed:!1}),streamSidePrompt:Y_(_,"streamSidePrompt",null)}}var wN=dT(H6);function IN(_){let{routing:$,paneRuntime:j,splitters:Z,branchPaneActions:X,timelineViewActions:G,composeReferenceActions:q,sidepanelActions:Q,shellState:K,agentState:V,composeState:Y,modelState:N}=_,F={appShellRef:K.appShellRef,editorOpen:K.editorOpen,hidePanePopoutControls:j.hidePanePopoutControls,panePopoutHasMenuActions:j.panePopoutHasMenuActions,panePopoutTitle:j.panePopoutTitle,tabStripTabs:K.tabStripTabs,tabStripActiveId:K.tabStripActiveId,handleTabActivate:K.handleTabActivate,previewTabs:K.previewTabs,diffTabs:K.diffTabs,handleTabTogglePreview:K.handleTabTogglePreview,handleTabToggleDiff:K.handleTabToggleDiff,editorContainerRef:j.editorContainerRef,getPaneContent:()=>j.editorInstanceRef?.current?.getContent?.(),subscribePaneContentChange:(D)=>j.editorInstanceRef?.current?.onContentChange?.(D),panePopoutPath:K.panePopoutPath,canReattachPane:j.canReattachPanePopout,handleReattachPane:j.requestPanePopoutReattach},B={appShellRef:K.appShellRef,workspaceOpen:K.workspaceOpen,editorOpen:K.editorOpen,chatOnlyMode:K.chatOnlyMode,zenMode:j.zenMode,isRenameBranchFormOpen:K.isRenameBranchFormOpen,closeRenameCurrentBranchForm:X.closeRenameCurrentBranchForm,handleRenameCurrentBranch:X.handleRenameCurrentBranch,renameBranchNameDraft:K.renameBranchNameDraft,renameBranchNameInputRef:K.renameBranchNameInputRef,setRenameBranchNameDraft:K.setRenameBranchNameDraft,renameBranchDraftState:K.renameBranchDraftState,isRenamingBranch:K.isRenamingBranch,hasDockPanes:j.hasDockPanes,toggleDock:j.toggleDock,dockVisible:j.dockVisible,showEditorPaneContainer:j.showEditorPaneContainer,toggleZenMode:j.toggleZenMode,isWebAppMode:K.isWebAppMode,editorContainerRef:j.editorContainerRef,editorInstanceRef:j.editorInstanceRef,dockContainerRef:j.dockContainerRef,detachedTabs:j.detachedTabs,activeDetachedTab:j.activeDetachedTab,detachedDockPane:j.detachedDockPane,TERMINAL_TAB_PATH:K.TERMINAL_TAB_PATH,isIOSDevice:K.isIOSDevice,currentBranchRecord:K.currentBranchRecord,currentChatJid:K.currentChatJid,currentChatBranches:K.currentChatBranches,formatBranchPickerLabel:K.formatBranchPickerLabel,activeSearchScopeLabel:K.activeSearchScopeLabel,currentHashtag:K.currentHashtag,searchQuery:K.searchQuery,oobePanelState:K.oobePanelState,composePrefillRequest:K.composePrefillRequest,requestComposePrefill:K.requestComposePrefill,handleOobeSetupProvider:K.handleOobeSetupProvider,handleOobeShowModelPicker:K.handleOobeShowModelPicker,handleOobeOpenWorkspace:K.handleOobeOpenWorkspace,handleDismissProviderMissingOobe:K.handleDismissProviderMissingOobe,handleCompleteProviderReadyOobe:K.handleCompleteProviderReadyOobe,posts:K.posts,hasMore:K.hasMore,loadMore:K.loadMore,timelineRef:K.timelineRef,agents:K.agents,userProfile:K.userProfile,removingPostIds:K.removingPostIds,extensionStatusPanels:K.extensionStatusPanels,pendingExtensionPanelActions:K.pendingExtensionPanelActions,searchOpen:K.searchOpen,followupQueueItems:K.followupQueueItems,viewStateRef:K.viewStateRef,loadPosts:K.loadPosts,scrollToBottom:K.scrollToBottom,searchScope:K.searchScope,tabStripTabs:K.tabStripTabs,tabStripActiveId:K.tabStripActiveId,handleTabActivate:K.handleTabActivate,previewTabs:K.previewTabs,diffTabs:K.diffTabs,handleTabTogglePreview:K.handleTabTogglePreview,handleTabToggleDiff:K.handleTabToggleDiff,panePopoutPath:K.panePopoutPath,tabPaneOverrides:K.tabPaneOverrides,handleTabClose:K.handleTabClose,handleTabCloseOthers:K.handleTabCloseOthers,handleTabCloseAll:K.handleTabCloseAll,handleTabTogglePin:K.handleTabTogglePin,handleTabEditSource:K.handleTabEditSource,handleReattachPane:j.reattachPane,openEditor:K.openEditor,openTerminalTab:K.openTerminalTab,openVncTab:K.openVncTab,fileRefs:Y.fileRefs,folderRefs:Y.folderRefs,messageRefs:Y.messageRefs,followupQueueCount:Y.followupQueueCount,attachmentPreview:Y.attachmentPreview,setAttachmentPreview:Y.setAttachmentPreview,extensionWorkingState:Y.extensionWorkingState,activeChatAgents:N.activeChatAgents,connectionStatus:N.connectionStatus,stateAccessFailed:N.stateAccessFailed,activeModel:N.activeModel,activeModelUsage:N.activeModelUsage,activeThinkingLevel:N.activeThinkingLevel,supportsThinking:N.supportsThinking,contextUsage:N.contextUsage,notificationsEnabled:N.notificationsEnabled,notificationPermission:N.notificationPermission,handleToggleNotifications:N.handleToggleNotifications,setActiveModel:N.setActiveModel,applyModelState:N.applyModelState,setPendingRequest:V.setPendingRequest,pendingRequestRef:V.pendingRequestRef,...Z,...X,...G,...q,...Q,...V,...Y,...N};return{branchLoaderMode:$.branchLoaderMode,panePopoutMode:$.panePopoutMode,branchLoaderState:$.branchLoaderState,panePopoutOptions:F,mainShellOptions:B}}function oT(_){let{steerQueuedTurnId:$,currentTurnId:j,agentStatus:Z}=_;return Boolean($&&$===(Z?.turn_id||j))}function xN(_){let $=oT({steerQueuedTurnId:_.agentState.steerQueuedTurnId,currentTurnId:_.agentState.currentTurnId,agentStatus:_.agentState.agentStatus});return IN({routing:{branchLoaderMode:_.routeState.branchLoaderMode,panePopoutMode:_.routeState.panePopoutMode,branchLoaderState:_.surface.branchLoaderState},paneRuntime:_.paneRuntime,splitters:_.splitters,branchPaneActions:_.orchestration.branchPaneActions,timelineViewActions:_.orchestration.timelineViewActions,composeReferenceActions:_.interaction.composeReferenceActions,sidepanelActions:_.orchestration.sidepanelActions,shellState:{appShellRef:_.surface.appShellRef,workspaceOpen:_.surface.workspaceOpen,editorOpen:_.editorState.editorOpen,chatOnlyMode:_.routeState.chatOnlyMode,isRenameBranchFormOpen:_.surface.isRenameBranchFormOpen,renameBranchNameDraft:_.surface.renameBranchNameDraft,renameBranchNameInputRef:_.surface.renameBranchNameInputRef,setRenameBranchNameDraft:_.surface.setRenameBranchNameDraft,renameBranchDraftState:_.surface.renameBranchDraftState,isRenamingBranch:_.surface.isRenamingBranch,isWebAppMode:_.surface.isWebAppMode,TERMINAL_TAB_PATH:_.helpers.terminalTabPath,isIOSDevice:_.helpers.isIOSDevice,currentBranchRecord:_.surface.currentBranchRecord,currentChatJid:_.routeState.currentChatJid,currentChatBranches:_.surface.currentChatBranches,formatBranchPickerLabel:_.helpers.formatBranchPickerLabel,activeSearchScopeLabel:_.surface.activeSearchScopeLabel,currentHashtag:_.surface.currentHashtag,searchQuery:_.surface.searchQuery,oobePanelState:_.surface.oobePanelState,composePrefillRequest:_.surface.composePrefillRequest,requestComposePrefill:_.surface.requestComposePrefill,handleOobeSetupProvider:_.surface.handleOobeSetupProvider,handleOobeShowModelPicker:_.surface.handleOobeShowModelPicker,handleOobeOpenWorkspace:_.surface.handleOobeOpenWorkspace,handleDismissProviderMissingOobe:_.surface.handleDismissProviderMissingOobe,handleCompleteProviderReadyOobe:_.surface.handleCompleteProviderReadyOobe,posts:_.timeline.posts,hasMore:_.timeline.hasMore,loadMore:_.timeline.loadMore,timelineRef:_.surface.timelineRef,agents:_.surface.agents,userProfile:_.surface.userProfile,removingPostIds:_.surface.removingPostIds,extensionStatusPanels:_.surface.extensionStatusPanels,pendingExtensionPanelActions:_.surface.pendingExtensionPanelActions,searchOpen:_.surface.searchOpen,followupQueueItems:_.surface.followupQueueItems,viewStateRef:_.surface.viewStateRef,loadPosts:_.timeline.loadPosts,scrollToBottom:_.timeline.scrollToBottom,searchScope:_.surface.searchScope,tabStripTabs:_.editorState.tabStripTabs,tabStripActiveId:_.editorState.tabStripActiveId,handleTabActivate:_.editorState.handleTabActivate,previewTabs:_.editorState.previewTabs,diffTabs:_.editorState.diffTabs,handleTabTogglePreview:_.editorState.handleTabTogglePreview,handleTabToggleDiff:_.editorState.handleTabToggleDiff,panePopoutPath:_.routeState.panePopoutPath,tabPaneOverrides:_.editorState.tabPaneOverrides,handleTabClose:_.editorState.handleTabClose,handleTabCloseOthers:_.editorState.handleTabCloseOthers,handleTabCloseAll:_.editorState.handleTabCloseAll,handleTabTogglePin:_.editorState.handleTabTogglePin,handleTabEditSource:_.editorState.handleTabEditSource,openEditor:_.editorState.openEditor,openTerminalTab:_.paneRuntime.openTerminalTab,openVncTab:_.paneRuntime.openVncTab},agentState:{agentStatus:_.agentState.agentStatus,isCompactionStatus:_.agentState.isCompactionStatus,agentDraft:_.agentState.agentDraft,agentPlan:_.agentState.agentPlan,agentThought:_.agentState.agentThought,pendingRequest:_.agentState.pendingRequest,intentToast:_.surface.intentToast,currentTurnId:_.agentState.currentTurnId,steerQueued:$,handlePanelToggle:_.interaction.handlePanelToggle,setPendingRequest:_.agentState.setPendingRequest,pendingRequestRef:_.agentState.pendingRequestRef,handleInjectQueuedFollowup:_.orchestration.followupActions.handleInjectQueuedFollowup,handleRemoveQueuedFollowup:_.orchestration.followupActions.handleRemoveQueuedFollowup,handleMoveQueuedFollowup:_.orchestration.followupActions.handleMoveQueuedFollowup},composeState:{btwSession:_.surface.btwSession,floatingWidget:_.surface.floatingWidget,fileRefs:_.surface.fileRefs,folderRefs:_.surface.folderRefs,messageRefs:_.surface.messageRefs,followupQueueCount:_.surface.followupQueueCount,attachmentPreview:_.surface.attachmentPreview,setAttachmentPreview:_.surface.setAttachmentPreview,handleMessageResponse:_.orchestration.followupActions.handleMessageResponse,isComposeBoxAgentActive:_.orchestration.isComposeBoxAgentActive,extensionWorkingState:_.surface.extensionWorkingState},modelState:{activeChatAgents:_.surface.activeChatAgents,connectionStatus:_.surface.connectionStatus,stateAccessFailed:_.surface.stateAccessFailed,activeModel:_.surface.activeModel,agentModelsPayload:_.surface.agentModelsPayload,activeModelUsage:_.surface.activeModelUsage,activeThinkingLevel:_.surface.activeThinkingLevel,supportsThinking:_.surface.supportsThinking,contextUsage:_.surface.contextUsage,notificationsEnabled:_.surface.notificationsEnabled,notificationPermission:_.surface.notificationPermission,handleToggleNotifications:_.surface.handleToggleNotifications,setActiveModel:_.surface.setActiveModel,applyModelState:_.orchestration.chatRefreshLifecycle.applyModelState}})}M0();var PN="(min-width: 1024px) and (orientation: landscape)";function lj(_=typeof window<"u"?window:null){return _&&typeof _==="object"?_:null}function CN(_,$){let j=lj(_);if(!j?.localStorage?.getItem)return null;try{let Z=j.localStorage.getItem($);if(Z===null)return null;return Z==="true"}catch{return null}}function iT(_,$,j){let Z=lj(_);if(!Z?.localStorage?.setItem)return;try{Z.localStorage.setItem($,String(Boolean(j)))}catch{return}}function g6(_=typeof window<"u"?window:null){let $=lj(_);if(!$?.matchMedia)return"desktop";return $.matchMedia("(min-width: 1024px) and (orientation: landscape)").matches?"desktop":"narrow"}function fN(_){return _==="narrow"?"workspaceOpen.narrow":"workspaceOpen.desktop"}function RN(_={}){let{runtime:$=typeof window<"u"?window:null,bucket:j=null,allowLegacyFallback:Z=!1,defaultValue:X=!1}=_,G=j||g6($),q=fN(G),Q=CN($,q);if(typeof Q==="boolean")return Q;if(Z&&G==="desktop"){let K=CN($,"workspaceOpen");if(typeof K==="boolean")return K}return X}function SN(_,$={}){let{runtime:j=typeof window<"u"?window:null,bucket:Z=null}=$,X=Z||g6(j);iT(j,fN(X),Boolean(_))}X6();var sT=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function bN(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let X=()=>{_(b_({window:j,navigator:Z}))};X();let q=sT.map((Q)=>{try{return j.matchMedia?.(Q)??null}catch{return null}}).filter(Boolean).map((Q)=>{if(typeof Q.addEventListener==="function")return Q.addEventListener("change",X),()=>Q.removeEventListener("change",X);if(typeof Q.addListener==="function")return Q.addListener(X),()=>Q.removeListener(X);return()=>{}});return j.addEventListener?.("focus",X),j.addEventListener?.("pageshow",X),()=>{for(let Q of q)Q();j.removeEventListener?.("focus",X),j.removeEventListener?.("pageshow",X)}}function h8(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.document??(typeof document<"u"?document:null);if(!j||!Z||typeof _!=="function")return()=>{};let X=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",X),j.addEventListener?.("pageshow",X),Z.addEventListener?.("visibilitychange",X),()=>{j.removeEventListener?.("focus",X),j.removeEventListener?.("pageshow",X),Z.removeEventListener?.("visibilitychange",X)}}function gN(_={}){return b_(_)&&J2(_)}function aT(_){let $=_?.activeElement;if(!$)return!1;let j=String($.tagName||$.nodeName||"").toLowerCase();if(j==="textarea"||j==="select")return!0;if(j==="input"){let Z=String($.type||"text").toLowerCase();return!["button","checkbox","color","file","hidden","image","radio","range","reset","submit"].includes(Z)}if($.isContentEditable===!0)return!0;if(typeof $.closest==="function")try{return Boolean($.closest('[contenteditable="true"], [contenteditable="plaintext-only"]'))}catch(Z){console.debug("[mobile-viewport] Ignoring activeElement.closest failure during keyboard detection.",Z)}return!1}function tT(_={},$={}){let j=_.window??(typeof window<"u"?window:null),Z=Number(j?.visualViewport?.height||0),X=Number(j?.innerHeight||0),G=Number.isFinite(Z)&&Z>0,q=Number.isFinite(X)&&X>0;if(G){if($.keyboardActive===!0)return Math.round(Z);if($.ignoreStandaloneChromeGap===!0&&q&&X>Z)return Math.round(X);return Math.round(Z)}if(q)return Math.round(X);return null}function eT(_){let $=Number(_?.screen?.width||0),j=Number(_?.screen?.height||0);if(!Number.isFinite($)||!Number.isFinite(j)||$<=0||j<=0)return null;let Z=Number(_?.innerWidth||0),X=Number(_?.innerHeight||0),G=Number.isFinite(Z)&&Number.isFinite(X)&&Z>X;return Math.round(G?Math.min($,j):Math.max($,j))}function _y(_){let $=Number(_?.visualViewport?.height||0);if(!Number.isFinite($)||$<=0)return!1;let j=Number(_?.innerHeight||0);if(Number.isFinite(j)&&j>0){if($<j-20)return!0}let Z=eT(_);if(Z&&Z>0){let X=Math.max(120,Math.round(Z*0.16));return $<Z-X}return!1}function $y(_={},$={}){if(!gN(_))return null;let j=_.window??(typeof window<"u"?window:null),Z=_.document??(typeof document<"u"?document:null);if(!j||!Z?.documentElement)return null;let G=aT(Z)&&_y(j),q=tT({window:j},{ignoreStandaloneChromeGap:!0,keyboardActive:G});if(G){if(q&&q>0)Z.documentElement.style.setProperty("--app-height",`${q}px`)}else Z.documentElement.style.setProperty("--app-height","100vh");if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch(Q){console.debug("[mobile-viewport] Ignoring scrollTo failure during standalone viewport reset.",Q)}try{if(Z.scrollingElement)Z.scrollingElement.scrollTop=0,Z.scrollingElement.scrollLeft=0;if(Z.documentElement)Z.documentElement.scrollTop=0,Z.documentElement.scrollLeft=0;if(Z.body)Z.body.scrollTop=0,Z.body.scrollLeft=0}catch(Q){console.debug("[mobile-viewport] Ignoring DOM scroll reset failure during standalone viewport sync.",Q)}}return q}function uN(_={}){if(!gN(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};j.documentElement?.style?.setProperty?.("--app-height","100vh");let Z=0,X=new Set,G=()=>{if(Z)$.cancelAnimationFrame?.(Z),Z=0;for(let D of X)$.clearTimeout?.(D);X.clear()},q=()=>{Z=0,$y({window:$,document:j})},Q=()=>{if(Z)$.cancelAnimationFrame?.(Z);Z=$.requestAnimationFrame?.(q)??0},K=()=>{Q();for(let D of[80,220,420]){let z=$.setTimeout?.(()=>{X.delete(z),Q()},D);if(z!=null)X.add(z)}},V=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;K()},Y=()=>{try{if(typeof $.scrollTo==="function")$.scrollTo(0,0);if(j.scrollingElement)j.scrollingElement.scrollTop=0,j.scrollingElement.scrollLeft=0;if(j.documentElement)j.documentElement.scrollTop=0,j.documentElement.scrollLeft=0;if(j.body)j.body.scrollTop=0,j.body.scrollLeft=0}catch(D){console.debug("[mobile-viewport] Ignoring scroll reset failure.",D)}},N=()=>{Y(),K();for(let D of[16,50,100,200]){let z=$.setTimeout?.(()=>{X.delete(z),Y()},D);if(z!=null)X.add(z)}},F=()=>{Y(),K();for(let D of[16,50,100]){let z=$.setTimeout?.(()=>{X.delete(z),Y()},D);if(z!=null)X.add(z)}},B=$.visualViewport;return K(),$.addEventListener("focus",K),$.addEventListener("pageshow",K),$.addEventListener("resize",K),$.addEventListener("orientationchange",K),j.addEventListener("visibilitychange",V),j.addEventListener("focusin",N,!0),j.addEventListener("focusout",F,!0),B?.addEventListener?.("resize",K),B?.addEventListener?.("scroll",Y),()=>{G(),$.removeEventListener("focus",K),$.removeEventListener("pageshow",K),$.removeEventListener("resize",K),$.removeEventListener("orientationchange",K),j.removeEventListener("visibilitychange",V),j.removeEventListener("focusin",N,!0),j.removeEventListener("focusout",F,!0),B?.removeEventListener?.("resize",K),B?.removeEventListener?.("scroll",Y)}}var pj="resume-layout-settling",jy=220,w5=new WeakMap;function Zy(_){if(!_){B1(c8,"");return}B1(c8,JSON.stringify({question:_.question||"",answer:_.answer||"",thinking:_.thinking||"",error:_.error||null,status:_.status||"success"}))}function Xy(_={}){if(_.panePopoutMode)return!1;let $=typeof _.search==="string"?_.search:"";return!/(?:^|[?&])pane_popout=1(?:&|$)/.test($)}function Gy(_,$={}){if(!_)return()=>{};let{durationMs:j=jy,scheduleTimeout:Z=setTimeout,clearScheduledTimeout:X=clearTimeout}=$,G=w5.get(_);if(G)X(G);_.classList.add(pj);let q=Z(()=>{if(w5.get(_)===q)_.classList.remove(pj),w5.delete(_)},j);return w5.set(_,q),()=>{let Q=w5.get(_);if(Q)X(Q),w5.delete(_);_.classList.remove(pj)}}function qy(_,$){if(!_?.getElementById)return;let j=encodeURIComponent(String($||"0")),Z={"dynamic-manifest":`/manifest.json?v=${j}`,"dynamic-favicon":`/favicon.ico?v=${j}`,"dynamic-apple-touch-icon":`/apple-touch-icon.png?v=${j}`,"dynamic-apple-touch-icon-180":`/apple-touch-icon-180x180.png?v=${j}`,"dynamic-apple-touch-icon-167":`/apple-touch-icon-167x167.png?v=${j}`,"dynamic-apple-touch-icon-152":`/apple-touch-icon-152x152.png?v=${j}`,"dynamic-apple-touch-icon-precomposed":`/apple-touch-icon-precomposed.png?v=${j}`};for(let[X,G]of Object.entries(Z)){let q=_.getElementById(X);if(q&&q.href!==G)q.href=G}}function vN(_){let{isRenameBranchFormOpen:$,renameBranchNameInputRef:j,appShellRef:Z,setIsWebAppMode:X,workspaceOpen:G,setWorkspaceOpen:q,btwSession:Q,agents:K,agentsRef:V,currentChatJid:Y,activeChatJidRef:N,userProfile:F,userProfileRef:B,brandingRef:D,panePopoutMode:z=!1}=_;sq(30000),b(()=>{if(!$)return;requestAnimationFrame(()=>{if($)j.current?.focus?.(),j.current?.select?.()})},[$,j]),b(()=>dG(),[]),b(()=>bN(X),[X]),b(()=>{let M=()=>{},E=h8(()=>{C7(),M(),M=Gy(Z.current)});return()=>{E(),M()}},[Z]);let H=g(g6());return b(()=>{SN(G,{bucket:H.current})},[G]),b(()=>{if(typeof window>"u"||!window.matchMedia)return;let M=window.matchMedia(PN),E=()=>{let L=g6(window);if(H.current===L)return;let x=H.current;if(H.current=L,x==="desktop"&&L==="narrow")q(!1)};if(M.addEventListener)M.addEventListener("change",E);else if(M.addListener)M.addListener(E);return()=>{if(M.removeEventListener)M.removeEventListener("change",E);else if(M.removeListener)M.removeListener(E)}},[q]),b(()=>uN(),[]),b(()=>{Zy(Q)},[Q]),b(()=>{V.current=K||{}},[K,V]),b(()=>{N.current=Y},[N,Y]),b(()=>{B.current=F||{name:"You",avatar_url:null,avatar_background:null}},[F,B]),{applyBranding:R((M,E,L=null)=>{if(typeof document>"u")return;let x=(M||"").trim()||"PiClaw";if(D.current.title!==x){if(Xy({panePopoutMode:z,search:typeof window<"u"?window.location.search:""})){document.title=x;let J=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(J&&J.getAttribute("content")!==x)J.setAttribute("content",x)}D.current.title=x}let I=E?`${E}|${L||""}`:"";if(D.current.avatarBase!==I){D.current.avatarBase=I;let J=L||Date.now();qy(document,J)}},[D])}}M0();function mN(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen&&!$.autoOpenEditor)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function rj(_){if(typeof _==="string")return _.trim();if(typeof _==="number")return Number.isFinite(_)?String(_):"";if(typeof _==="bigint")return String(_);return""}function l8(_,$){let j=Array.isArray(_)?_:[],Z=rj($);if(!Z)return j;if(j.includes(Z))return j;return[...j,Z]}function p8(_,$){let j=Array.isArray(_)?_:[],Z=rj($);if(!Z)return j;if(!j.includes(Z))return j;return j.filter((X)=>X!==Z)}function r8(_){if(!Array.isArray(_))return[];let $=[],j=new Set;for(let Z of _){let X=rj(Z);if(!X||j.has(X))continue;j.add(X),$.push(X)}return $}async function cN(_){let{hashtag:$,setCurrentHashtag:j,setPosts:Z,loadPosts:X}=_;j($),Z(null),await X($)}async function hN(_){let{setCurrentHashtag:$,setSearchQuery:j,setPosts:Z,loadPosts:X}=_;$(null),j(null),Z(null),await X()}async function nj(_){let{query:$,scope:j,currentChatJid:Z,currentRootChatJid:X,searchPosts:G,setSearchScope:q,setSearchQuery:Q,setCurrentHashtag:K,setPosts:V,setHasMore:Y}=_,N=typeof $==="string"?$.trim():"";if(!N)return;let F=j==="root"||j==="all"?j:"current";q(F),Q(N),K(null),V(null);try{let B=await G(N,50,0,Z,F,X,_.filters);V(Array.isArray(B?.results)?B.results:[]),Y(!1)}catch(B){console.error("Failed to search:",B),V([])}}async function lN(_){let{post:$,posts:j,currentChatJid:Z,deletePost:X,preserveTimelineScrollTop:G,setPosts:q,setRemovingPostIds:Q,hasMoreRef:K,loadMoreRef:V,confirm:Y=(W)=>window.confirm(W),showAlert:N=(W)=>alert(W),scheduleTimeout:F=(W,M)=>{setTimeout(W,M)}}=_;if(!$)return;let B=$.id,D=typeof $?.chat_jid==="string"&&$.chat_jid.trim()?$.chat_jid.trim():Z,z=j?.filter((W)=>W?.data?.thread_id===B&&W?.id!==B).length||0;if(z>0){if(!Y(`Delete this message and its ${z} replies?`))return}let H=(W)=>{if(!W.length)return;Q((M)=>{let E=new Set(M);return W.forEach((L)=>E.add(L)),E}),F(()=>{if(G(()=>{q((M)=>M?M.filter((E)=>!W.includes(E.id)):M)}),Q((M)=>{let E=new Set(M);return W.forEach((L)=>E.delete(L)),E}),K.current)V.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let W=await X(B,z>0,D);if(W?.ids?.length)H(W.ids)}catch(W){let M=W instanceof Error?W.message:String(W||"");if(z===0&&M.includes("Replies exist")){if(!Y("Delete this message and its replies?"))return;let L=await X(B,!0,D);if(L?.ids?.length)H(L.ids);return}console.error("Failed to delete post:",W),N(`Failed to delete message: ${M}`)}}async function pN(_){let{id:$,targetChatJid:j,currentChatJid:Z,getThread:X,setPosts:G,getElementById:q=(N)=>document.getElementById(N),scheduleRaf:Q=(N)=>requestAnimationFrame(N),scheduleTimeout:K=(N,F)=>{setTimeout(N,F)}}=_,V=(N)=>{N.scrollIntoView({behavior:"smooth",block:"center"}),N.classList.add("post-highlight"),K(()=>N.classList.remove("post-highlight"),2000)},Y=q(`post-${$}`);if(Y){V(Y);return}try{let N=typeof j==="string"&&j.trim()?j.trim():Z,B=(await X($,N))?.thread?.[0];if(!B)return;G((D)=>{if(!D)return[B];if(D.some((z)=>z.id===B.id))return D;return[...D,B]}),Q(()=>{K(()=>{let D=q(`post-${$}`);if(D)V(D)},50)})}catch(N){console.error("[scrollToMessage] Failed to fetch message",$,N)}}function Qy(_){if(typeof _==="string"&&_.trim())return _.trim();return"Could not send your message."}function Vy(_){let{id:$,targetChatJid:j=null,currentChatJid:Z,currentHashtag:X=null,searchQuery:G=null,searchOpen:q=!1,setCurrentHashtag:Q,setSearchQuery:K,setSearchOpen:V,setMessageRefs:Y,navigate:N,chatOnlyMode:F,baseHref:B=typeof window<"u"?window.location.href:"http://localhost/"}=_,D=String($??"").trim();if(!D)return!1;let z=typeof j==="string"&&j.trim()?j.trim():Z,H=z!==Z,W=Boolean(q||G||X);if(!H&&!W)return Y((M)=>l8(M,D)),!0;if(Y([D]),Q?.(null),K?.(null),V?.(!1),H&&typeof N==="function"){let M=w_(B,z,{chatOnly:F});N(M)}return!0}function rN(_){let{setIntentToast:$,intentToastTimerRef:j,editorOpen:Z,openEditor:X,resolvePane:G,tabStripActiveId:q,setFileRefs:Q,setFolderRefs:K,setMessageRefs:V,currentChatJid:Y,currentHashtag:N,searchQuery:F,searchOpen:B,setCurrentHashtag:D,setSearchQuery:z,setSearchOpen:H,navigate:W,chatOnlyMode:M,baseHref:E,getThread:L,setPosts:x}=_,I=R(()=>{if(j.current)clearTimeout(j.current),j.current=null;$(null)},[j,$]);b(()=>{return()=>{I()}},[I]);let J=R((h)=>{Q((j0)=>l8(j0,h))},[Q]),k=R((h)=>{Q((j0)=>p8(j0,h))},[Q]),O=R(()=>{Q([])},[Q]),T=R((h)=>{Q(r8(h))},[Q]),y=R((h)=>{K((j0)=>l8(j0,h))},[K]),A=R((h)=>{K((j0)=>p8(j0,h))},[K]),P=R(()=>{K([])},[K]),f=R((h)=>{K(r8(h))},[K]),u=R((h,j0=null,Y0="info",L0=3000)=>{I(),$({title:h,detail:j0||null,kind:Y0||"info"}),j.current=setTimeout(()=>{$((s)=>s?.title===h?null:s)},L0)},[I,j,$]),c=R((h,{autoOpenEditor:j0=!1}={})=>{let Y0=mN(h,{editorOpen:Z,autoOpenEditor:j0,resolvePane:G});if(Y0.kind==="open"){X(Y0.path);return}if(Y0.kind==="toast")u(Y0.title,Y0.detail,Y0.level)},[Z,X,G,u]),r=R((h)=>{c(h,{autoOpenEditor:!1})},[c]),e=R((h)=>{c(h,{autoOpenEditor:!0})},[c]),m=R(()=>{let h=q;if(h)J(h)},[J,q]),$0=R((h,j0=null)=>{Vy({id:h,targetChatJid:j0,currentChatJid:Y,currentHashtag:N,searchQuery:F,searchOpen:B,setCurrentHashtag:D,setSearchQuery:z,setSearchOpen:H,setMessageRefs:V,navigate:W,chatOnlyMode:M,baseHref:E})},[E,M,Y,N,W,B,F,D,V,H,z]),W0=R(async(h,j0=null)=>{await pN({id:h,targetChatJid:j0,currentChatJid:Y,getThread:L,setPosts:x})},[Y,L,x]),X0=R((h)=>{V((j0)=>p8(j0,h))},[V]),Z0=R(()=>{V([])},[V]),q0=R((h)=>{V(r8(h))},[V]),D0=R((h)=>{u("Compose failed",Qy(h),"error",5000)},[u]);return{clearIntentToast:I,addFileRef:J,removeFileRef:k,clearFileRefs:O,setFileRefsFromCompose:T,addFolderRef:y,removeFolderRef:A,clearFolderRefs:P,setFolderRefsFromCompose:f,showIntentToast:u,openFileFromPill:r,openTimelineFileFromPill:e,attachActiveEditorFile:m,addMessageRef:$0,scrollToMessage:W0,removeMessageRef:X0,clearMessageRefs:Z0,setMessageRefsFromCompose:q0,handleComposeSubmitError:D0}}M0();async function nN(_){let{panelKey:$,expanded:j,currentTurnIdRef:Z,thoughtExpandedRef:X,draftExpandedRef:G,setAgentThoughtVisibility:q,getAgentThought:Q,thoughtBufferRef:K,draftBufferRef:V,setAgentThought:Y,setAgentDraft:N}=_;if($!=="thought"&&$!=="draft")return;let F=Z.current;if($==="thought"){if(X.current=j,F)try{await q(F,"thought",j)}catch(B){console.warn("Failed to update thought visibility:",B)}if(!j)return;try{let B=F?await Q(F,"thought"):null;if(B?.text)K.current=B.text;Y((D)=>({...D||{text:"",totalLines:0},fullText:K.current||D?.fullText||"",totalLines:Number.isFinite(B?.total_lines)?B.total_lines:D?.totalLines||0}))}catch(B){console.warn("Failed to fetch full thought:",B)}return}if(G.current=j,F)try{await q(F,"draft",j)}catch(B){console.warn("Failed to update draft visibility:",B)}if(!j)return;try{let B=F?await Q(F,"draft"):null;if(B?.text)V.current=B.text;N((D)=>({...D||{text:"",totalLines:0},fullText:V.current||D?.fullText||"",totalLines:Number.isFinite(B?.total_lines)?B.total_lines:D?.totalLines||0}))}catch(B){console.warn("Failed to fetch full draft:",B)}}function Ky(_){if(!_)return _;if(!(_.last_activity||_.lastActivity))return _;let{last_activity:$,lastActivity:j,...Z}=_;return Z}function Yy(_){if(!_||typeof _!=="object")return{type:"active",last_activity:!0};return{..._,last_activity:!0}}function dN(_){let{lastActivityTtlMs:$,lastActivityTimerRef:j,lastActivityTokenRef:Z,lastAgentEventRef:X,lastSilenceNoticeRef:G,isAgentRunningRef:q,setIsAgentTurnActive:Q,setAgentStatus:K,draftBufferRef:V,thoughtBufferRef:Y,pendingRequestRef:N,lastAgentResponseRef:F,currentTurnIdRef:B,steerQueuedTurnIdRef:D,agentStatusRef:z,silentRecoveryRef:H,thoughtExpandedRef:W,draftExpandedRef:M,setCurrentTurnId:E,setSteerQueuedTurnId:L,currentTurnIdRefForPanel:x,setAgentThoughtVisibility:I,getAgentThought:J,setAgentThought:k,setAgentDraft:O}=_,T=R((c={})=>{let r=Number(c.atMs),e=Number.isFinite(r)&&r>0?r:Date.now();if(X.current=e,c.running)q.current=!0,Q((m)=>m?m:!0);if(c.clearSilence)G.current=0},[q,X,G,Q]),y=R(()=>{if(j.current)clearTimeout(j.current),j.current=null;Z.current=0},[j,Z]);b(()=>()=>{y()},[y]);let A=R(()=>{y(),K((c)=>Ky(c))},[y,K]),P=R((c)=>{if(!c)return;y();let r=Date.now();Z.current=r,K(Yy(c)),j.current=setTimeout(()=>{if(Z.current!==r)return;K((e)=>{if(!e||!(e.last_activity||e.lastActivity))return e;return null})},$)},[y,j,Z,$,K]),f=R(()=>{q.current=!1,Q(!1),X.current=null,G.current=0,V.current="",Y.current="",N.current=null,F.current=null,B.current=null,D.current=null,z.current=null,H.current={inFlight:!1,lastAttemptAt:0,turnId:null},y(),E(null),L(null),W.current=!1,M.current=!1},[z,y,B,V,M,q,X,F,G,N,E,Q,L,H,D,Y,W]),u=R(async(c,r)=>{await nN({panelKey:c,expanded:r,currentTurnIdRef:x,thoughtExpandedRef:W,draftExpandedRef:M,setAgentThoughtVisibility:I,getAgentThought:J,thoughtBufferRef:Y,draftBufferRef:V,setAgentThought:k,setAgentDraft:O})},[x,V,M,J,O,k,I,Y,W]);return{noteAgentActivity:T,clearLastActivityTimer:y,clearLastActivityFlag:A,showLastActivity:P,clearAgentRunState:f,handlePanelToggle:u}}M0();function n8(_){return _?{..._}:{text:"",totalLines:0}}function oN(_){return Array.isArray(_)?_.map(($)=>({...$})):[]}function Ny(_){return{inFlight:Boolean(_?.inFlight),lastAttemptAt:Number(_?.lastAttemptAt||0),turnId:typeof _?.turnId==="string"?_.turnId:null}}function By(){return{agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}}function iN(_){return{agentStatus:_.agentStatus,agentDraft:n8(_.agentDraft),agentPlan:_.agentPlan||"",agentThought:n8(_.agentThought),pendingRequest:_.pendingRequest,currentTurnId:_.currentTurnId||null,steerQueuedTurnId:_.steerQueuedTurnId||null,isAgentTurnActive:Boolean(_.isAgentTurnActive),followupQueueItems:oN(_.followupQueueItems),activeModel:_.activeModel,activeThinkingLevel:_.activeThinkingLevel,supportsThinking:Boolean(_.supportsThinking),activeModelUsage:_.activeModelUsage,contextUsage:_.contextUsage,isAgentRunning:Boolean(_.isAgentRunning),wasAgentActive:Boolean(_.wasAgentActive),draftBuffer:_.draftBuffer||"",thoughtBuffer:_.thoughtBuffer||"",lastAgentEvent:_.lastAgentEvent||null,lastSilenceNotice:Number(_.lastSilenceNotice||0),lastAgentResponse:_.lastAgentResponse||null,currentTurnIdRef:_.currentTurnIdRef||null,steerQueuedTurnIdRef:_.steerQueuedTurnIdRef||null,thoughtExpanded:Boolean(_.thoughtExpanded),draftExpanded:Boolean(_.draftExpanded),agentStatusRef:_.agentStatusRef||null,silentRecovery:Ny(_.silentRecovery)}}function sN(_){let $=_.snapshot||By(),{refs:j,setters:Z}=_;return _.clearLastActivityTimer?.(),j.isAgentRunningRef.current=Boolean($.isAgentRunning),j.wasAgentActiveRef.current=Boolean($.wasAgentActive),Z.setIsAgentTurnActive(Boolean($.isAgentTurnActive)),j.lastAgentEventRef.current=$.lastAgentEvent||null,j.lastSilenceNoticeRef.current=Number($.lastSilenceNotice||0),j.draftBufferRef.current=$.draftBuffer||"",j.thoughtBufferRef.current=$.thoughtBuffer||"",j.pendingRequestRef.current=$.pendingRequest||null,j.lastAgentResponseRef.current=$.lastAgentResponse||null,j.currentTurnIdRef.current=$.currentTurnIdRef||null,j.steerQueuedTurnIdRef.current=$.steerQueuedTurnIdRef||null,j.agentStatusRef.current=$.agentStatusRef||null,j.silentRecoveryRef.current=$.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},j.thoughtExpandedRef.current=Boolean($.thoughtExpanded),j.draftExpandedRef.current=Boolean($.draftExpanded),Z.setAgentStatus($.agentStatus||null),Z.setAgentDraft(n8($.agentDraft)),Z.setAgentPlan($.agentPlan||""),Z.setAgentThought(n8($.agentThought)),Z.setPendingRequest($.pendingRequest||null),Z.setCurrentTurnId($.currentTurnId||null),Z.setSteerQueuedTurnId($.steerQueuedTurnId||null),Z.setFollowupQueueItems(oN($.followupQueueItems)),Z.setActiveModel($.activeModel||null),Z.setActiveThinkingLevel($.activeThinkingLevel||null),Z.setSupportsThinking(Boolean($.supportsThinking)),Z.setActiveModelUsage($.activeModelUsage??null),Z.setContextUsage($.contextUsage??null),$}function dj(_){return String(_||"").trim()||"web:default"}function aN({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function Fy(_){return aN(_)}function Uy(_){let $=String(_?.data?.content||"").trim();if($)return $.replace(/\s+/g," ").slice(0,200);if((Array.isArray(_?.data?.content_blocks)?_.data.content_blocks:[]).length>0)return"Sent an attachment.";return""}function tN(_){let{isAgentTurnActive:$,steerQueuedTurnId:j,currentTurnId:Z,steerQueuedTurnIdRef:X,setSteerQueuedTurnId:G,agentStatus:q,agentDraft:Q,agentPlan:K,agentThought:V,pendingRequest:Y,pendingRequestRef:N,followupQueueItems:F,activeModel:B,activeThinkingLevel:D,supportsThinking:z,activeModelUsage:H,contextUsage:W,isAgentRunningRef:M,wasAgentActiveRef:E,draftBufferRef:L,thoughtBufferRef:x,lastAgentEventRef:I,lastSilenceNoticeRef:J,lastAgentResponseRef:k,currentTurnIdRef:O,thoughtExpandedRef:T,draftExpandedRef:y,agentStatusRef:A,silentRecoveryRef:P,clearLastActivityTimer:f,setIsAgentTurnActive:u,setAgentStatus:c,setAgentDraft:r,setAgentPlan:e,setAgentThought:m,setPendingRequest:$0,setCurrentTurnId:W0,setFollowupQueueItems:X0,setActiveModel:Z0,setActiveThinkingLevel:q0,setSupportsThinking:D0,setActiveModelUsage:h,setContextUsage:j0,lastNotifiedIdRef:Y0,agentsRef:L0,notify:s,shouldNotifyLocallyForChat:Q0}=_,O0=R((m0)=>{if(!Fy({remainingQueueCount:m0,steerQueuedTurnId:X.current,currentTurnId:O.current,isAgentTurnActive:$}))return;X.current=null,G(null)},[$,O,G,X]),x0=R(()=>iN({agentStatus:q,agentDraft:Q,agentPlan:K,agentThought:V,pendingRequest:Y,currentTurnId:Z,steerQueuedTurnId:j,isAgentTurnActive:$,followupQueueItems:F,activeModel:B,activeThinkingLevel:D,supportsThinking:z,activeModelUsage:H,contextUsage:W,isAgentRunning:M.current,wasAgentActive:E.current,draftBuffer:L.current,thoughtBuffer:x.current,lastAgentEvent:I.current,lastSilenceNotice:J.current,lastAgentResponse:k.current,currentTurnIdRef:O.current,steerQueuedTurnIdRef:X.current,thoughtExpanded:T.current,draftExpanded:y.current,agentStatusRef:A.current,silentRecovery:P.current}),[B,H,D,Q,K,q,V,W,Z,F,$,Y,j,z,M,E,L,x,I,J,k,O,X,T,y,A,P]),r0=R((m0)=>{sN({snapshot:m0,clearLastActivityTimer:f,refs:{isAgentRunningRef:M,wasAgentActiveRef:E,lastAgentEventRef:I,lastSilenceNoticeRef:J,draftBufferRef:L,thoughtBufferRef:x,pendingRequestRef:N,lastAgentResponseRef:k,currentTurnIdRef:O,steerQueuedTurnIdRef:X,agentStatusRef:A,silentRecoveryRef:P,thoughtExpandedRef:T,draftExpandedRef:y},setters:{setIsAgentTurnActive:u,setAgentStatus:c,setAgentDraft:r,setAgentPlan:e,setAgentThought:m,setPendingRequest:$0,setCurrentTurnId:W0,setSteerQueuedTurnId:G,setFollowupQueueItems:X0,setActiveModel:Z0,setActiveThinkingLevel:q0,setSupportsThinking:D0,setActiveModelUsage:h,setContextUsage:j0}})},[A,f,O,L,y,M,I,k,J,N,Z0,h,q0,r,e,c,m,j0,W0,X0,u,$0,G,D0,P,X,x,T,E]),l0=R((m0)=>{if(!m0)return;if(O.current===m0)return;O.current=m0,P.current={inFlight:!1,lastAttemptAt:0,turnId:m0},W0(m0),X.current=null,G(null),L.current="",x.current="",r({text:"",totalLines:0}),e(""),m({text:"",totalLines:0}),$0(null),N.current=null,k.current=null,T.current=!1,y.current=!1},[O,L,y,k,N,r,e,m,W0,$0,G,P,X,x,T]),n0=R((m0)=>{let _1=k.current;if(!_1||!_1.post)return;if(m0&&_1.turnId&&_1.turnId!==m0)return;let S0=_1.post,o0=typeof S0?.chat_jid==="string"&&S0.chat_jid.trim()?S0.chat_jid.trim():"";if(!o0||!Q0(o0))return;if(S0.id&&Y0.current===S0.id)return;let c0=Uy(S0);if(!c0)return;Y0.current=S0.id||Y0.current,k.current=null;let $1=L0.current||{},H1=(S0?.data?.agent_id?$1[S0.data.agent_id]:null)?.name||"Pi";s(H1,c0,{sourceLabel:"Local"})},[L0,k,Y0,s,Q0]);return{clearQueuedSteerStateIfStale:O0,snapshotCurrentChatPaneState:x0,restoreChatPaneState:r0,setActiveTurn:l0,notifyForFinalResponse:n0}}M0();function d8(_){return _?.turn_id||_?.turnId||null}function I5(_){if(typeof _?.text!=="string"||!_.text)return null;let $=Number.isFinite(_?.totalLines)?Number(_.totalLines):Number.isFinite(_?.total_lines)?Number(_.total_lines):0;return{text:_.text,totalLines:$}}function oj(_,$){return typeof _?.text==="string"&&_.text.length>=$.length}function ij(_,$){return Number.isFinite($)?Number($):_?_.replace(/\r\n/g,`
`).split(`
`).length:0}function o8(_,$){return{text:_,totalLines:ij(_,$)}}function sj(_,$){return{text:$?.text||"",totalLines:aq(_),fullText:_}}function eN(_,$,j){return j==="replace"?$:`${_||""}${$}`}function _B(_,$){let j=_||"";if($?.reset)j="";if($?.delta)j+=String($.delta);return j}function $B(_,$){let j=_||"";if($?.reset)j="";if(typeof $?.delta==="string")j+=$.delta;return j}function j$(_){return!_?.currentHashtag&&!_?.searchQuery&&!_?.searchOpen}function jB(_,$,j){return Boolean($&&j&&(_==="new_post"||_==="new_reply"||_==="agent_response"))}function aj(_,$){return _&&$}function ZB(_,$){if(!Array.isArray(_)||_.length===0)return[$];if(_.some((j)=>j?.id===$?.id))return _;return[..._,$]}function XB(_,$){if(!Array.isArray(_))return _;if(!_.some((j)=>j?.id===$?.id))return _;return _.map((j)=>j?.id===$?.id?$:j)}function GB(_,$){if(!Array.isArray(_))return _;let j=Array.isArray($)?$:[];if(j.length===0)return _;let Z=new Set(j),X=_.filter((G)=>!Z.has(G?.id));return X.length===_.length?_:X}var Dy={message:null,indicator:null,visible:!0};function qB(_){if(!_||typeof _!=="object")return Dy;let $=_;return{message:typeof $.message==="string"&&$.message.trim()?$.message.trim():null,indicator:$.indicator&&typeof $.indicator==="object"?$.indicator:null,visible:$.visible!==!1}}async function QB(_){let{currentChatJid:$,getAgentStatus:j,activeChatJidRef:Z,wasAgentActiveRef:X,viewStateRef:G,refreshTimeline:q,clearAgentRunState:Q,agentStatusRef:K,pendingRequestRef:V,thoughtBufferRef:Y,draftBufferRef:N,setAgentStatus:F,setAgentDraft:B,setAgentPlan:D,setAgentThought:z,setPendingRequest:H,setExtensionWorkingState:W,setActiveTurn:M,noteAgentActivity:E,clearLastActivityFlag:L,onStateAccessResult:x}=_,I=$;try{let J=await j(I);if(x?.(!1),Z.current!==I)return null;if(!J||J.status!=="active"||!J.data){if(X.current&&j$(G.current))q();return X.current=!1,Q(),K.current=null,F(null),B({text:"",totalLines:0}),D(""),z({text:"",totalLines:0}),W(qB(J?.extension_working)),H(null),V.current=null,J??null}X.current=!0;let k=J.data;K.current=k;let O=d8(k);if(O)M(O);E({running:!0,clearSilence:!0,atMs:d$(k)??Date.now()}),L(),F(k),W(qB(J.extension_working));let T=I5(J.thought);if(T)z((A)=>{if(oj(A,T.text))return A;return Y.current=T.text,T});let y=I5(J.draft);if(y)B((A)=>{if(oj(A,y.text))return A;return N.current=y.text,y});return J}catch(J){return x?.(!0),console.warn("Failed to fetch agent status:",J),null}}async function VB(_){let{isAgentRunningRef:$,pendingRequestRef:j,currentTurnIdRef:Z,silentRecoveryRef:X,silenceRefreshMs:G,viewStateRef:q,refreshTimeline:Q,refreshQueueState:K,refreshAgentStatus:V,now:Y=()=>Date.now()}=_;if(!$.current)return null;if(j.current)return null;let N=Z.current||null,F=X.current,B=Y();if(F.inFlight)return null;if(F.turnId===N&&B-F.lastAttemptAt<G)return null;F.inFlight=!0,F.lastAttemptAt=B,F.turnId=N;try{if(j$(q.current))await Q();return await K(),await V()}finally{F.inFlight=!1}}function zy(_){if(!_||typeof _!=="object")return!1;let $=typeof _.type==="string"?_.type:"";if($==="tool_call"||$==="tool_status"||$==="intent")return!0;return Boolean(_.tool_name||_.tool_args)}function KB(_){let{isAgentRunningRef:$,pendingRequestRef:j,lastAgentEventRef:Z,lastSilenceNoticeRef:X,agentStatusRef:G,silenceWarningMs:q,silenceFinalizeMs:Q,silenceRefreshMs:K,isCompactionStatus:V,setAgentStatus:Y,reconcileSilentTurn:N,now:F=()=>Date.now()}=_;if(!$.current)return;if(j.current)return;let B=Z.current;if(!B)return;let D=F(),z=D-B,H=G.current,W=V(H),M=zy(H);if(z>=Q){if(!W&&!M)Y({type:"waiting",title:"Re-syncing after a quiet period…"});N();return}if(z>=q&&D-X.current>=K){if(!W&&!M){let E=Math.floor(z/1000);Y({type:"waiting",title:`Waiting for model… No events for ${E}s`})}X.current=D,N()}}function Hy(_){if(!_||typeof _!=="object")return null;let $=typeof _.type==="string"?_.type:"",j=typeof _.title==="string"&&_.title.trim()?_.title.trim():null,Z=typeof _.tool_name==="string"&&_.tool_name.trim()?_.tool_name.trim():null,X=typeof _.status==="string"&&_.status.trim()?_.status.trim():null;if($==="tool_call")return{summary:`Timed out while running ${j||Z||"tool"}`,title:j,toolName:Z,statusText:X};if($==="tool_status"){let G=j||Z||"tool";return{summary:X?`Timed out after ${G}: ${X}`:`Timed out after ${G}`,title:j,toolName:Z,statusText:X}}if(Z||j)return{summary:`Timed out after ${j||Z||"tool"}`,title:j,toolName:Z,statusText:X};return null}function YB(_){let{isAgentRunningRef:$,lastSilenceNoticeRef:j,lastAgentEventRef:Z,currentTurnIdRef:X,thoughtExpandedRef:G,draftExpandedRef:q,draftBufferRef:Q,thoughtBufferRef:K,pendingRequestRef:V,lastAgentResponseRef:Y,agentStatusRef:N,stalledPostIdRef:F,scrollToBottomRef:B,setCurrentTurnId:D,setAgentDraft:z,setAgentPlan:H,setAgentThought:W,setPendingRequest:M,setAgentStatus:E,setPosts:L,dedupePosts:x,now:I=()=>Date.now(),nowIso:J=()=>new Date().toISOString()}=_;if(!$.current)return;let k=Hy(N.current);$.current=!1,j.current=0,Z.current=null,N.current=null,X.current=null,D(null),G.current=!1,q.current=!1;let O=(Q.current||"").trim();if(Q.current="",K.current="",H(""),W({text:"",totalLines:0}),M(null),V.current=null,Y.current=null,!O){z({text:"",totalLines:0}),E({type:"error",title:"Response stalled - No content received"});return}z({text:O,totalLines:ij(O,null),fullText:O});let T=O,y=I(),A=J(),P={id:y,timestamp:A,data:{type:"agent_response",content:T,content_blocks:[{type:"timeout_marker",timed_out:!0,title:"Timed out",tool_action_summary:k?.summary||"",tool_title:k?.title||"",tool_name:k?.toolName||"",tool_status:k?.statusText||"",draft_recovered:!0}],agent_id:"default",is_local_stall:!0}};F.current=y,L((f)=>f?x([...f,P]):[P]),B.current?.(),E(null)}function Wy(_){let{stalledPostIdRef:$,setPosts:j}=_,Z=$.current;if(!Z)return;j((X)=>X?X.filter((G)=>G.id!==Z):X),$.current=null}function Oy(_){YB(_)}function NB(_){let{viewStateRef:$,currentHashtag:j,searchQuery:Z,searchOpen:X}=_;b(()=>{$.current={currentHashtag:j,searchQuery:Z,searchOpen:X}},[j,X,Z,$])}function BB(_){let{stalledPostIdRef:$,setPosts:j,isAgentRunningRef:Z,lastSilenceNoticeRef:X,lastAgentEventRef:G,currentTurnIdRef:q,thoughtExpandedRef:Q,draftExpandedRef:K,draftBufferRef:V,thoughtBufferRef:Y,pendingRequestRef:N,lastAgentResponseRef:F,agentStatusRef:B,scrollToBottomRef:D,setCurrentTurnId:z,setAgentDraft:H,setAgentPlan:W,setAgentThought:M,setPendingRequest:E,setAgentStatus:L,dedupePosts:x}=_,I=R(()=>{Wy({stalledPostIdRef:$,setPosts:j})},[j,$]),J=R(()=>{Oy({isAgentRunningRef:Z,lastSilenceNoticeRef:X,lastAgentEventRef:G,currentTurnIdRef:q,thoughtExpandedRef:Q,draftExpandedRef:K,draftBufferRef:V,thoughtBufferRef:Y,pendingRequestRef:N,lastAgentResponseRef:F,agentStatusRef:B,stalledPostIdRef:$,scrollToBottomRef:D,setCurrentTurnId:z,setAgentDraft:H,setAgentPlan:W,setAgentThought:M,setPendingRequest:E,setAgentStatus:L,setPosts:j,dedupePosts:x})},[q,x,V,K,Z,G,F,B,X,N,D,H,W,L,M,z,E,j,$,Y,Q]);return{removeStalledPost:I,finalizeStalledResponse:J}}function Ly(_){let{removeFileRefRef:$,composeReferenceActions:j}=_;$.current=j.removeFileRef||null}function Jy(_){return{applyBranding:_.applyBranding,composeReferenceActions:_.composeReferenceActions,..._.agentActivity,..._.chatPaneRuntime,recoveryCallbacks:_.recoveryCallbacks}}function FB(_){let{environment:$,composeReferences:j,agentActivity:Z,chatPaneRuntime:X,recovery:G,viewState:q,removeFileRefRef:Q}=_,{applyBranding:K}=vN($),V=rN(j);Ly({removeFileRefRef:Q,composeReferenceActions:V});let Y=dN(Z),N=tN({...X,clearLastActivityTimer:Y.clearLastActivityTimer}),F=BB(G);return NB(q),Jy({applyBranding:K,composeReferenceActions:V,agentActivity:Y,chatPaneRuntime:N,recoveryCallbacks:F})}M0();M0();y1();var i8=new Map,tj=new Map;function UB(){return Date.now()}function u6(_){return String(_||"").trim()}function DB(_,$=600000){return Boolean(_&&UB()-_.cachedAt<=$)}function Ey(_){while(_.size>24){let $=_.keys().next().value;if(!$)break;_.delete($)}}function zB(_,$){return i8.delete(_),i8.set(_,$),Ey(i8),$}function s8(_,$){let j=u6(_);if(!j)return null;let Z={posts:Array.isArray($?.posts)?$.posts:[],has_more:Boolean($?.has_more),cachedAt:UB()};return zB(j,Z)}function ej(_,$={}){let j=u6(_);if(!j)return null;let Z=Number.isFinite($.maxAgeMs)?Number($.maxAgeMs):600000,X=i8.get(j)||null;if(!DB(X,Z))return null;return zB(j,X)}function HB(_,$,j=5){if(!Array.isArray(_))return[];let Z=u6($),X=Number.isFinite(j)?Math.max(1,Math.min(8,Number(j))):5,G=new Set,q=[];for(let Q of _){let K=u6(Q?.chat_jid);if(!K||K===Z||G.has(K))continue;if(G.add(K),q.push(K),q.length>=X)break}return q}async function WB(_){let $=Array.from(new Set((_.chatJids||[]).map((Q)=>u6(Q)).filter(Boolean)));if($.length===0)return;let j=Number.isFinite(_.maxAgeMs)?Number(_.maxAgeMs):600000,Z=Number.isFinite(_.maxConcurrent)?Math.max(1,Math.min(4,Number(_.maxConcurrent))):2,X=$.filter((Q)=>!DB(ej(Q,{maxAgeMs:j}),j)),G=0,q=Array.from({length:Math.min(Z,X.length)},async()=>{while(G<X.length){let Q=X[G++],K=tj.get(Q);if(K){await K;continue}let V=(async()=>{try{let Y=await _.fetchTimeline(Q);s8(Q,Y)}catch(Y){console.debug("[app-timeline-cache] Ignoring timeline prewarm failure for a best-effort background fetch.",Y,{chatJid:Q})}finally{tj.delete(Q)}})();tj.set(Q,V),await V}});await Promise.all(q)}function OB(_,$){let j=Array.isArray(_)?_:[],Z=Array.isArray($)?$:null;if(!Z)return j;if(Z.length===0)return Z;if(j.length===0)return Z;let X=1/0;for(let q of Z){let Q=q?.id;if(typeof Q==="number"&&Number.isFinite(Q)&&Q<X)X=Q}if(!Number.isFinite(X))return W5([...Z,...j]);let G=j.filter((q)=>{let Q=q?.id;return typeof Q==="number"&&Number.isFinite(Q)&&Q<X});return W5([...Z,...G])}function LB({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null,currentHashtag:Z=null,searchQuery:X=null}){let[G,q]=C(null),[Q,K]=C(!1),V=g(!1),Y=g(null),N=g(!1),F=g(null),B=g(null),D=g(0),z=g(0);b(()=>{V.current=Q},[Q]),b(()=>{B.current=G},[G]);let H=!Z&&!X,W=g(H);b(()=>{W.current=H},[H]),b(()=>{D.current+=1,q(null),B.current=null,F.current=null,N.current=!1,V.current=!1,K(!1),z.current=0},[j]);let M=R((k,O)=>{if(!H)return;s8(j,{posts:Array.isArray(k)?k:[],has_more:Boolean(O)})},[j,H]),E=R((k,O)=>{B.current=Array.isArray(k)?k:[],V.current=Boolean(O),q(B.current),K(V.current),M(B.current,V.current)},[M]),L=R(async(k=null)=>{let O=D.current;try{if(k){let P=await b7(k,50,0,j);if(O!==D.current)return;q(P.posts),K(!1);return}let T=(P)=>{if(O!==D.current)return;let f=Array.isArray(P?.posts)?P.posts:[],u=Boolean(P?.has_more);E(f,u)},y=ej(j);if(y){E(y.posts,y.has_more);let P=z.current;r$(10,null,j).then((f)=>{if(O!==D.current||z.current!==P)return;if(!W.current)return;let u=Array.isArray(f?.posts)?f.posts:[],c=Boolean(f?.has_more);E(OB(B.current,u),c)}).catch((f)=>{if(O!==D.current)return;console.error("Failed to refresh cached timeline:",f)});return}let A=await r$(10,null,j);T(A)}catch(T){if(O!==D.current)return;throw console.error("Failed to load posts:",T),T}},[j,E]),x=R(async()=>{let k=D.current;try{let O=await r$(10,null,j);if(k!==D.current)return;E(OB(B.current,O?.posts),Boolean(O?.has_more))}catch(O){if(k!==D.current)return;console.error("Failed to refresh timeline:",O)}},[j,E]),I=R(async(k={})=>{let O=D.current,T=B.current;if(!T||T.length===0)return;if(N.current)return;let{preserveScroll:y=!0,preserveMode:A="top",allowRepeat:P=!1}=k,f=(r)=>{if(!y){r();return}if(A==="top")$(r);else _(r)},c=T.slice().sort((r,e)=>r.id-e.id)[0]?.id;if(!Number.isFinite(c))return;if(!P&&F.current===c)return;N.current=!0,F.current=c;try{let r=await r$(10,c,j);if(O!==D.current)return;if(z.current+=1,r.posts.length>0)f(()=>{let e=W5([...r.posts,...B.current||[]]);E(e,r.has_more)});else E(B.current||[],!1)}catch(r){if(O!==D.current)return;console.error("Failed to load more posts:",r)}finally{if(O===D.current)N.current=!1}},[j,_,$,E]);b(()=>{Y.current=I},[I]);let J=R((k)=>{q((O)=>{let T=typeof k==="function"?k(O):k;if(B.current=T,Array.isArray(T)){if(z.current+=1,H)s8(j,{posts:T,has_more:V.current})}return T})},[j,H]);return{posts:G,setPosts:J,hasMore:Q,setHasMore:K,hasMoreRef:V,loadPosts:L,refreshTimeline:x,loadMore:I,loadMoreRef:Y,loadingMoreRef:N,lastBeforeIdRef:F}}M0();function Ay(_){if(!_?.data?.is_bot_message)return!1;let $=_.data.content;return $==="Queued as a follow-up (one-at-a-time)."||$==="⁣"}function JB(_,$){if(!_||!Array.isArray(_))return _;let j=new Set($||[]),Z=_.filter((X)=>!j.has(X?.id)&&!Ay(X));return Z.length===_.length?_:Z}function EB(_,$){let j=$||new Set;return Array.isArray(_)?_.map((Z)=>({...Z})).filter((Z)=>!j.has(Z.row_id)):[]}function AB(_,$){if(!Array.isArray(_)||!Array.isArray($))return!1;return _.length===$.length&&_.every((j,Z)=>j?.row_id===$[Z]?.row_id)}function Z4(_,$){let j=Array.isArray(_)&&$!=null?_.filter((Z)=>Z?.row_id!==$):Array.isArray(_)?[..._]:[];return{items:j,remainingQueueCount:j.length}}function MB(_,$){let j=Array.isArray(_)?_:[],Z=$?.row_id,X=$?.content;if(Z==null||typeof X!=="string"||!X.trim())return j;if(j.some((G)=>G?.row_id===Z))return j;return[...j,{row_id:Z,content:X,timestamp:$?.timestamp||null,thread_id:$?.thread_id??null}]}function kB(_){if(!_||typeof _!=="object")return!1;if(_.queued==="followup"||_.queued==="steer")return!0;let $=_.command;return Boolean($&&typeof $==="object"&&($.queued_followup||$.queued_steer))}function My(_,$=150){return Math.abs(_)<=$}function TB(_){let{timelineRef:$,viewStateRef:j,followupQueueRowIdsRef:Z}=_,X=R(()=>{let K=$.current;if(!K)return;if(My(K.scrollTop))K.scrollTop=0},[$]),G=R((K)=>{let V=$.current;if(!V||typeof K!=="function"){K?.();return}let{currentHashtag:Y,searchQuery:N,searchOpen:F}=j.current||{},B=!((N||F)&&!Y),D=B?V.scrollHeight-V.scrollTop:V.scrollTop;K(),requestAnimationFrame(()=>{let z=$.current;if(!z)return;if(B){let H=Math.max(z.scrollHeight-D,0);z.scrollTop=H}else{let H=Math.max(z.scrollHeight-z.clientHeight,0),W=Math.min(D,H);z.scrollTop=W}})},[$,j]),q=R((K)=>{let V=$.current;if(!V||typeof K!=="function"){K?.();return}let Y=V.scrollTop;K(),requestAnimationFrame(()=>{let N=$.current;if(!N)return;let F=Math.max(N.scrollHeight-N.clientHeight,0);N.scrollTop=Math.min(Y,F)})},[$]),Q=R((K)=>{return JB(K,Z.current)},[Z]);return{scrollToBottom:X,preserveTimelineScroll:G,preserveTimelineScrollTop:q,filterQueuedPosts:Q}}function ky(_){let{rawPosts:$,filterQueuedPosts:j}=_;return j($)}function Ty(_){_.scrollToBottomRef.current=_.scrollToBottom}function yB(_){let{timelineRef:$,viewStateRef:j,followupQueueRowIdsRef:Z,currentChatJid:X,currentHashtag:G,searchQuery:q,followupQueueItems:Q}=_,K=g(null),{scrollToBottom:V,preserveTimelineScroll:Y,preserveTimelineScrollTop:N,filterQueuedPosts:F}=TB({timelineRef:$,viewStateRef:j,followupQueueRowIdsRef:Z});Ty({scrollToBottomRef:K,scrollToBottom:V});let{posts:B,setPosts:D,hasMore:z,setHasMore:H,hasMoreRef:W,loadPosts:M,refreshTimeline:E,loadMore:L,loadMoreRef:x}=LB({preserveTimelineScroll:Y,preserveTimelineScrollTop:N,chatJid:X,currentHashtag:G,searchQuery:q}),I=G0(()=>ky({rawPosts:B,followupQueueItems:Q,filterQueuedPosts:F}),[F,Q,B]);return{scrollToBottomRef:K,scrollToBottom:V,preserveTimelineScroll:Y,preserveTimelineScrollTop:N,rawPosts:B,setPosts:D,hasMore:z,setHasMore:H,hasMoreRef:W,loadPosts:M,refreshTimeline:E,loadMore:L,loadMoreRef:x,posts:I}}M0();function yy(_){let{currentHashtag:$,searchQuery:j,searchOpen:Z}=_;return!$&&!j&&!Z}function wB(_){let{currentHashtag:$,searchQuery:j,searchOpen:Z,searchScope:X,currentChatJid:G,currentRootChatJid:q,posts:Q,loadPosts:K,searchPosts:V,setCurrentHashtag:Y,setSearchQuery:N,setSearchOpen:F,setSearchScope:B,setPosts:D,setHasMore:z,preserveTimelineScrollTop:H,setRemovingPostIds:W,deletePost:M,hasMoreRef:E,loadMoreRef:L}=_,x=R(async(P)=>{await cN({hashtag:P,setCurrentHashtag:Y,setPosts:D,loadPosts:K})},[K,Y,D]),I=R(async()=>{await hN({setCurrentHashtag:Y,setSearchQuery:N,setPosts:D,loadPosts:K})},[K,Y,D,N]),J=R(async(P,f=X,u)=>{await nj({query:P,scope:f,currentChatJid:G,currentRootChatJid:q,searchPosts:V,setSearchScope:B,setSearchQuery:N,setCurrentHashtag:Y,setPosts:D,setHasMore:z,filters:u})},[G,q,V,X,Y,z,D,N,B]),k=R((P)=>{if(B(P),j&&j.trim())nj({query:j,scope:P,currentChatJid:G,currentRootChatJid:q,searchPosts:V,setSearchScope:B,setSearchQuery:N,setCurrentHashtag:Y,setPosts:D,setHasMore:z})},[G,q,V,j,Y,z,D,N,B]),O=R(()=>{F(!0),N(null),Y(null),B("current"),D([])},[Y,D,F,N,B]),T=R(()=>{F(!1),N(null),K()},[K,F,N]),y=G0(()=>yy({currentHashtag:$,searchQuery:j,searchOpen:Z}),[$,Z,j]),A=R(async(P)=>{await lN({post:P,posts:Q,currentChatJid:G,deletePost:M,preserveTimelineScrollTop:H,setPosts:D,setRemovingPostIds:W,hasMoreRef:E,loadMoreRef:L})},[G,M,E,L,Q,H,D,W]);return{handleHashtagClick:x,handleBackToTimeline:I,handleSearch:J,handleSearchScopeChange:k,enterSearchMode:O,exitSearchMode:T,isMainTimelineView:y,handleDeletePost:A}}M0();function _Z(_){if(!Array.isArray(_?.content))return null;return _.content.find((j)=>j?.type==="status_panel"&&j?.panel)?.panel||null}function IB(_,$){let j=new Map(_),Z=_Z($);if(typeof $?.key==="string"&&$.key&&Z)j.set($.key,Z);else j.delete("autoresearch");return j}function xB(_,$){let j=typeof $?.key==="string"?$.key:"";if(!j)return _;let Z=new Map(_),X=_Z($);if($?.options?.remove||!X)Z.delete(j);else Z.set(j,X);return Z}function CB(_){if(_?.options?.remove)return!0;return _Z(_)?.state!=="running"}function $Z(_,$){return`${_}:${$}`}function PB(_,$,j){let Z=$Z($,j);if(_.has(Z))return _;let X=new Set(_);return X.add(Z),X}function fB(_,$){if(!_.has($))return _;let j=new Set(_);return j.delete($),j}function a8(_,$){if(_.size===0)return _;let j=`${$}:`,Z=new Set(Array.from(_).filter((X)=>!String(X).startsWith(j)));return Z.size===_.size?_:Z}async function RB(_){let $=typeof _.action?.action_type==="string"?_.action.action_type:"",j=typeof _.action?.key==="string"?_.action.key:"";if($==="autoresearch.stop")return await _.stopAutoresearch(_.currentChatJid,{generateReport:!0}),{refreshAutoresearchStatus:!0};if($==="autoresearch.dismiss")return await _.dismissAutoresearch(_.currentChatJid),{refreshAutoresearchStatus:!0};if($==="autoresearch.copy_tmux"){let Z=typeof _.panel?.tmux_command==="string"?_.panel.tmux_command.trim():"";if(!Z)throw Error("No tmux command available.");return await _.writeClipboard(Z),{refreshAutoresearchStatus:!1,toast:{title:"Copied",detail:"tmux command copied to clipboard.",kind:"success"}}}throw Error(`Unsupported panel action: ${$||j}`)}var SB="piclaw:ctx:";function X4(_){if(!_||typeof _!=="object")return null;let $=_,j=$.tokens==null?null:Number($.tokens),Z=$.contextWindow==null?null:Number($.contextWindow),X=$.percent==null?null:Number($.percent);return{tokens:Number.isFinite(j)?j:null,contextWindow:Number.isFinite(Z)?Z:null,percent:Number.isFinite(X)?X:null}}function m4(_,$){let j=X4(_),Z=X4($);if(!j&&!Z)return!0;if(!j||!Z)return!1;return j.tokens===Z.tokens&&j.contextWindow===Z.contextWindow&&j.percent===Z.percent}function x5(_,$){if(!_||!$||typeof $!=="object")return;if($.percent==null)return;try{B1(SB+_,JSON.stringify($))}catch(Z){console.debug("[app-status-refresh] Ignoring best-effort context usage persistence failure.",Z,{chatJid:_})}}function bB(_){if(!_)return null;return C2(SB+_)}async function gB(_){let{currentChatJid:$,queueRefreshGenRef:j,activeChatJidRef:Z,dismissedQueueRowIdsRef:X,getAgentQueueState:G,setFollowupQueueItems:q,clearQueuedSteerStateIfStale:Q}=_,K=++j.current,V=$;try{let Y=await G(V);if(K!==j.current)return;if(Z.current!==V)return;let N=X.current,F=Array.isArray(Y?.items)?Y.items:[],B=EB(F,N);if(B.length){q((D)=>AB(D,B)?D:B);return}if(F.length>0)return;N.clear(),Q(0),q((D)=>D.length===0?D:[])}catch{if(K!==j.current)return;if(Z.current!==V)return;q((Y)=>Y.length===0?Y:[])}}async function uB(_){let{currentChatJid:$,activeChatJidRef:j,getAgentContext:Z,setContextUsage:X}=_,G=$;try{let q=X4(await Z(G));if(j.current!==G)return;if(q&&q.percent!=null)X((Q)=>m4(Q,q)?Q:q),x5(G,q)}catch(q){if(j.current!==G)return;console.warn("Failed to fetch agent context:",q)}}async function vB(_){let{currentChatJid:$,activeChatJidRef:j,getAutoresearchStatus:Z,setExtensionStatusPanels:X,setPendingExtensionPanelActions:G}=_,q=$;try{let Q=await Z(q);if(j.current!==q)return;X((K)=>IB(K,Q)),G((K)=>a8(K,"autoresearch"))}catch(Q){if(j.current!==q)return;console.warn("Failed to fetch autoresearch status:",Q)}}function mB(_){let{refreshModelState:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:Z,refreshQueueState:X,refreshContextUsage:G,refreshAutoresearchStatus:q}=_;$(),j(),Z(),X(),G(),q()}function cB(_){let{viewStateRef:$,refreshTimeline:j,refreshModelAndQueueState:Z}=_;if(j$($.current))j();Z()}Y6();var t8=new Map,e8=new Map,wy=250,hB=1500,lB=300000;function C5(){if(typeof performance<"u"&&typeof performance.now==="function")return performance.now();return Date.now()}function Iy(_,$){return`${_}:${$}`}function xy(_){for(let[$,j]of e8.entries())if(_-j>lB)e8.delete($)}function Cy(_){for(let[$,j]of t8.entries()){if(j.inFlight)continue;if(!Number.isFinite(j.lastCompletedAt)||_-j.lastCompletedAt>lB)t8.delete($)}}function pB(_=C5()){xy(_),Cy(_)}function rB(_){let{chatJid:$,nowMs:j=C5()}=_;if(!$)return;e8.set($,j),pB(j)}function v6(_,$=hB,j=C5()){if(!_)return!1;let Z=e8.get(_);if(!Number.isFinite(Z))return!1;return j-Number(Z)<=$}async function w$(_){let{kind:$,chatJid:j,run:Z,cooldownMs:X=wy,activationWindowMs:G=hB,nowMs:q=C5()}=_;pB(q);let Q=Iy($,j),K=t8.get(Q)||{inFlight:null,lastCompletedAt:Number.NaN,lastValue:null};if(t8.set(Q,K),K.inFlight)return await K.inFlight;if(Boolean(v2("thread-switch",j)||v6(j,G,q))&&Number.isFinite(K.lastCompletedAt)&&q-K.lastCompletedAt<=X)return K.lastValue;let Y=Promise.resolve().then(Z).then((N)=>{return K.lastCompletedAt=C5(),K.lastValue=N??null,K.inFlight=null,N}).catch((N)=>{throw K.lastCompletedAt=C5(),K.inFlight=null,N});return K.inFlight=Y,await Y}function nB(_){let{serverVersion:$,currentAppAssetVersion:j,staleUiVersionRef:Z,staleUiReloadScheduledRef:X,tabStoreHasUnsaved:G,isAgentRunningRef:q,pendingRequestRef:Q,showIntentToast:K}=_,V=typeof $==="string"&&$.trim()?$.trim():null;if(!V||!j||V===j)return!1;if(Z.current===V)return!0;Z.current=V;let Y=typeof document<"u"?String(document.querySelector(".compose-box textarea")?.value||"").trim():"";if(!G()&&!Y&&!q.current&&!Q.current&&!X.current);return K("New UI available","Reload this page to apply the latest interface update.","warning",8000),!0}function jZ(_){let{currentHashtag:$,searchQuery:j,searchOpen:Z}=_||{};return!$&&!j&&!Z}function dB(_){let{currentChatJid:$,status:j,setConnectionStatus:Z,setAgentStatus:X,setAgentDraft:G,setAgentPlan:q,setAgentThought:Q,setPendingRequest:K,pendingRequestRef:V,clearAgentRunState:Y,hasConnectedOnceRef:N,viewStateRef:F,refreshTimeline:B,refreshAgentStatus:D,refreshQueueState:z,refreshContextUsage:H}=_;if(Z(j),j!=="connected"){X(null),G({text:"",totalLines:0}),q(""),Q({text:"",totalLines:0}),K(null),V.current=null,Y();return}if(!N.current){if(N.current=!0,X(null),G({text:"",totalLines:0}),q(""),Q({text:"",totalLines:0}),K(null),V.current=null,Y(),v6($))return;if(jZ(F.current))B();D(),z(),H();return}if(jZ(F.current))B();D(),z(),H()}function oB(_){let{viewStateRef:$,isAgentActive:j,refreshTimeline:Z,refreshQueueState:X,refreshAgentStatus:G,refreshContextUsage:q,refreshAutoresearchStatus:Q}=_,K=jZ($.current);if(j){if(K)Z();X(),G(),q(),Q();return}if(K)Z();G(),q(),Q()}function Py(_){return Math.min(1000,Math.max(100,Math.floor(_/2)))}function iB(_){let{currentChatJid:$,activeChatJidRef:j,queueRefreshGenRef:Z,dismissedQueueRowIdsRef:X,getAgentQueueState:G,setFollowupQueueItems:q,clearQueuedSteerStateIfStale:Q,getAgentContext:K,setContextUsage:V,getAutoresearchStatus:Y,setExtensionStatusPanels:N,setPendingExtensionPanelActions:F,getAgentStatus:B,wasAgentActiveRef:D,viewStateRef:z,refreshTimeline:H,clearAgentRunState:W,agentStatusRef:M,pendingRequestRef:E,thoughtBufferRef:L,draftBufferRef:x,setAgentStatus:I,setAgentDraft:J,setAgentPlan:k,setAgentThought:O,setPendingRequest:T,setExtensionWorkingState:y,setActiveTurn:A,noteAgentActivity:P,clearLastActivityFlag:f,isAgentRunningRef:u,currentTurnIdRef:c,silentRecoveryRef:r,silenceRefreshMs:e,lastAgentEventRef:m,lastSilenceNoticeRef:$0,silenceWarningMs:W0,silenceFinalizeMs:X0,isCompactionStatus:Z0,serverVersionContext:q0,setConnectionStatus:D0,setStateAccessFailed:h,setPendingRequestForConnection:j0,hasConnectedOnceRef:Y0}=_,L0=R(()=>{return w$({kind:"queue-state",chatJid:$,run:async()=>{return await gB({currentChatJid:$,queueRefreshGenRef:Z,activeChatJidRef:j,dismissedQueueRowIdsRef:X,getAgentQueueState:G,setFollowupQueueItems:q,clearQueuedSteerStateIfStale:Q}),null}})},[j,Q,$,X,G,Z,q]),s=R(async()=>{await w$({kind:"context-usage",chatJid:$,run:async()=>{return await uB({currentChatJid:$,activeChatJidRef:j,getAgentContext:K,setContextUsage:V}),null}})},[j,$,K,V]),Q0=R(async()=>{await w$({kind:"autoresearch-status",chatJid:$,run:async()=>{return await vB({currentChatJid:$,activeChatJidRef:j,getAutoresearchStatus:Y,setExtensionStatusPanels:N,setPendingExtensionPanelActions:F}),null}})},[j,$,Y,N,F]),O0=R(async()=>{return await w$({kind:"agent-status",chatJid:$,run:async()=>{return await QB({currentChatJid:$,getAgentStatus:B,activeChatJidRef:j,wasAgentActiveRef:D,viewStateRef:z,refreshTimeline:H,clearAgentRunState:W,agentStatusRef:M,pendingRequestRef:E,thoughtBufferRef:L,draftBufferRef:x,setAgentStatus:I,setAgentDraft:J,setAgentPlan:k,setAgentThought:O,setPendingRequest:T,setExtensionWorkingState:y,setActiveTurn:A,noteAgentActivity:P,clearLastActivityFlag:f,onStateAccessResult:h})}})},[j,M,W,f,$,x,B,P,E,H,A,J,k,I,O,T,y,h,L,z,D]),x0=R(async()=>{return await VB({isAgentRunningRef:u,pendingRequestRef:E,currentTurnIdRef:c,silentRecoveryRef:r,silenceRefreshMs:e,viewStateRef:z,refreshTimeline:H,refreshQueueState:L0,refreshAgentStatus:O0})},[c,u,E,O0,L0,H,e,r,z]);b(()=>{let n0=Py(W0),m0=setInterval(()=>{KB({isAgentRunningRef:u,pendingRequestRef:E,lastAgentEventRef:m,lastSilenceNoticeRef:$0,agentStatusRef:M,silenceWarningMs:W0,silenceFinalizeMs:X0,silenceRefreshMs:e,isCompactionStatus:Z0,setAgentStatus:I,reconcileSilentTurn:x0})},n0);return()=>clearInterval(m0)},[M,u,Z0,m,$0,E,x0,I,X0,e,W0]);let r0=R((n0)=>{return nB({serverVersion:n0,...q0})},[q0]),l0=R((n0)=>{if(n0==="connected")h(!1);dB({currentChatJid:$,status:n0,setConnectionStatus:D0,setAgentStatus:I,setAgentDraft:J,setAgentPlan:k,setAgentThought:O,setPendingRequest:j0,pendingRequestRef:E,clearAgentRunState:W,hasConnectedOnceRef:Y0,viewStateRef:z,refreshTimeline:H,refreshAgentStatus:O0,refreshQueueState:L0,refreshContextUsage:s})},[W,$,Y0,E,O0,s,L0,H,J,k,I,O,D0,j0,h,z]);return{refreshQueueState:L0,refreshContextUsage:s,refreshAutoresearchStatus:Q0,refreshAgentStatus:O0,handleUiVersionDrift:r0,handleConnectionStatusChange:l0}}M0();function m6(_){return typeof _==="string"}function c6(_){return typeof _==="string"&&_.trim().length>0}function _3(_){if(!c6(_))return 0;let $=Date.parse(_);return Number.isFinite($)?$:0}function ZZ(_){if(!Array.isArray(_))return[];return _.filter(($)=>c6($?.chat_jid)&&c6($?.agent_name))}function sB(_){if(!Array.isArray(_))return[];return _.filter(($)=>m6($?.chat_jid)&&m6($?.agent_name))}function aB(_,$,j){if(!Array.isArray($)||$.length===0)return Array.isArray(_)?_:[];let Z=new Map;if(Array.isArray(_)){for(let q of _)if(m6(q?.chat_jid))Z.set(q.chat_jid,q)}let X=$.map((q)=>{if(!m6(q?.chat_jid))return q;let Q=Z.get(q.chat_jid);return Q?{...q,...Q,is_active:Q.is_active??q.is_active}:q}),G=m6(j)?j:"";return X.sort((q,Q)=>{if(q.chat_jid===G&&Q.chat_jid!==G)return-1;if(Q.chat_jid===G&&q.chat_jid!==G)return 1;let K=Boolean(q.archived_at),V=Boolean(Q.archived_at);if(K!==V)return K?1:-1;if(Boolean(q.is_active)!==Boolean(Q.is_active))return q.is_active?-1:1;let Y=_3(q.updated_at)||_3(q.created_at),N=_3(Q.updated_at)||_3(Q.created_at);if(Y!==N)return N-Y;let F=c6(q.agent_name)?q.agent_name.trim():"",B=c6(Q.agent_name)?Q.agent_name.trim():"",D=F.localeCompare(B,void 0,{sensitivity:"base"});if(D!==0)return D;return String(q.chat_jid).localeCompare(String(Q.chat_jid))}),X}var fy={hasModel:!1,model:void 0,hasThinkingLevel:!1,thinkingLevel:null,thinkingLevelLabel:null,hasSupportsThinking:!1,supportsThinking:!1,hasProviderUsage:!1,providerUsage:null};function tB(_){if(!_||typeof _!=="object")return fy;let $=_.model??_.current;return{hasModel:$!==void 0,model:$,hasThinkingLevel:_.thinking_level!==void 0,thinkingLevel:_.thinking_level??null,thinkingLevelLabel:_.thinking_level_label??_.thinking_level??null,hasSupportsThinking:_.supports_thinking!==void 0,supportsThinking:Boolean(_.supports_thinking),hasProviderUsage:_.provider_usage!==void 0,providerUsage:_.provider_usage??null}}function eB(_){let j=(Array.isArray(_)?_:[]).find((Z)=>Z?.id==="default");return{name:j?.name,avatarUrl:j?.avatar_url}}function _F(_,$){if(!_||typeof _!=="object")return null;let j=_.agent_id;if(!j)return null;let Z=String(j),X=_.agent_name,G=_.agent_avatar;if(!X&&G===void 0)return null;let q=$||{id:Z},Q=q.name||null,K=q.avatar_url??q.avatarUrl??q.avatar??null,V=!1,Y=!1;if(X&&X!==q.name)Q=X,V=!0;if(G!==void 0){let N=typeof G==="string"?G.trim():null,F=typeof K==="string"?K.trim():null,B=N||null;if(B!==(F||null))K=B,Y=!0}if(!V&&!Y)return null;return{agentId:Z,nameChanged:V,avatarChanged:Y,resolvedName:Q,resolvedAvatar:K}}function $F(_,$){let j=typeof $?.name==="string"&&$.name.trim()?$.name.trim():"You",Z=typeof $?.avatar_url==="string"?$.avatar_url.trim():null,X=typeof $?.avatar_background==="string"&&$.avatar_background.trim()?$.avatar_background.trim():null;if(_.name===j&&_.avatar_url===Z&&_.avatar_background===X)return _;return{name:j,avatar_url:Z,avatar_background:X}}function jF(_,$){if(!$||typeof $!=="object")return _;let j=$.user_name??$.userName,Z=$.user_avatar??$.userAvatar,X=$.user_avatar_background??$.userAvatarBackground;if(j===void 0&&Z===void 0&&X===void 0)return _;let G=typeof j==="string"&&j.trim()?j.trim():_.name||"You",q=Z===void 0?_.avatar_url:typeof Z==="string"&&Z.trim()?Z.trim():null,Q=X===void 0?_.avatar_background:typeof X==="string"&&X.trim()?X.trim():null;if(_.name===G&&_.avatar_url===q&&_.avatar_background===Q)return _;return{name:G,avatar_url:q,avatar_background:Q}}async function XF(_){let{getAgents:$,setAgents:j,setUserProfile:Z,applyBranding:X}=_;try{let G=await $();j(iq(G));let q=G?.user||{};Z((K)=>$F(K,q));let Q=eB(G?.agents);X(Q.name,Q.avatarUrl)}catch(G){console.warn("Failed to load agents:",G)}}function GF(_){let{payload:$,agentsRef:j,setAgents:Z,applyBranding:X}=_,G=_F($,$?.agent_id?j.current?.[String($.agent_id)]||{id:String($.agent_id)}:null);if(!G)return;if(Z((q)=>{let K={...q[G.agentId]||{id:G.agentId}};if(G.nameChanged)K.name=G.resolvedName;if(G.avatarChanged)K.avatar_url=G.resolvedAvatar;return{...q,[G.agentId]:K}}),G.agentId==="default")X(G.resolvedName,G.resolvedAvatar,G.avatarChanged?Date.now():null)}function qF(_){let{payload:$,setUserProfile:j}=_;j((Z)=>jF(Z,$))}function ZF(_,$){if(Object.is(_,$))return!0;try{return JSON.stringify(_)===JSON.stringify($)}catch{return!1}}function QF(_){let{payload:$,setActiveModel:j,setActiveThinkingLevel:Z,setSupportsThinking:X,setActiveModelUsage:G,setAgentModelsPayload:q,setHasLoadedAgentModels:Q}=_;if($&&typeof $==="object")q?.((V)=>ZF(V,$)?V:$),Q?.(!0);let K=tB($);if(K.hasModel)j((V)=>Object.is(V,K.model)?V:K.model);if(K.hasThinkingLevel){let V=K.thinkingLevelLabel??K.thinkingLevel;Z((Y)=>Object.is(Y,V)?Y:V)}if(K.hasSupportsThinking)X((V)=>V===K.supportsThinking?V:K.supportsThinking);if(K.hasProviderUsage)G((V)=>ZF(V,K.providerUsage)?V:K.providerUsage)}async function VF(_){let{currentChatJid:$,getActiveChatAgents:j,getChatBranches:Z,activeChatJidRef:X,setActiveChatAgents:G}=_,q=$;try{let[Q,K]=await Promise.all([j().catch(()=>({chats:[]})),Z(null,{includeArchived:!0}).catch(()=>({chats:[]}))]);if(X.current!==q)return[];let V=ZZ(Q?.chats),Y=ZZ(K?.chats),N=aB(V,Y,q);return G(N),N}catch{if(X.current!==q)return[];return G([]),[]}}async function KF(_){let{currentRootChatJid:$,getChatBranches:j,setCurrentChatBranches:Z}=_;try{let X=await j($);Z(sB(X?.chats))}catch{Z([])}}function YF(_){let{response:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:Z,refreshContextUsage:X,refreshAutoresearchStatus:G,refreshQueueState:q}=_;if(!$||typeof $!=="object")return;if(j(),Z(),X(),G(),kB($))q()}function NF(_){let{readStoredNumber:$,sidebarWidthRef:j,shellElement:Z,minWidth:X=160,maxWidth:G=600,fallbackWidth:q=280}=_,Q=$("sidebarWidth",null),K=Number.isFinite(Q)?Math.min(Math.max(Number(Q),X),G):q;if(j.current=K,Z)Z.style.setProperty("--sidebar-width",`${K}px`);return K}async function BF(_){let{currentHashtag:$,searchQuery:j,searchScope:Z,currentChatJid:X,currentRootChatJid:G,loadPosts:q,searchPosts:Q,setPosts:K,setHasMore:V,scrollToBottom:Y,isCancelled:N,scheduleRaf:F=(L)=>{if(typeof requestAnimationFrame==="function"){requestAnimationFrame(L);return}setTimeout(L,0)},scheduleTimeout:B=(L,x)=>{setTimeout(L,x)},onTimelineLoadStart:D,onTimelineDataReady:z,onTimelineFirstPaint:H,onTimelineError:W}=_,M=(L)=>{if(N())return;F(()=>{if(N())return;F(()=>{if(N())return;H?.(L)})})},E=()=>{if(N())return;F(()=>{if(N())return;B(()=>{if(N())return;Y()},0)})};if($){D?.({mode:"hashtag",hashtag:$});try{if(await q($),N())return;z?.({mode:"hashtag",hashtag:$}),M({mode:"hashtag"})}catch(L){if(N())return;throw W?.(L,{mode:"hashtag",hashtag:$}),L}return}if(j){D?.({mode:"search",searchQuery:j,searchScope:Z});try{let L=await Q(j,50,0,X,Z,G);if(N())return;K(Array.isArray(L?.results)?L.results:[]),V(!1),z?.({mode:"search",resultCount:Array.isArray(L?.results)?L.results.length:0}),M({mode:"search"})}catch(L){if(N())return;W?.(L,{mode:"search",searchQuery:j,searchScope:Z}),console.error("Failed to search:",L),K([]),V(!1)}return}D?.({mode:"timeline"});try{if(await q(),N())return;z?.({mode:"timeline"}),M({mode:"timeline"}),E()}catch(L){if(N())return;W?.(L,{mode:"timeline"}),console.error("Failed to load timeline:",L)}}Y6();y1();function Ry(_){let{refreshModelAndQueueState:$,refreshModelState:j,refreshActiveChatAgents:Z,refreshCurrentChatBranches:X,refreshQueueState:G,runImmediately:q=!0,intervalMs:Q=60000,scheduleInterval:K=(N,F)=>setInterval(N,F),clearScheduledInterval:V=(N)=>clearInterval(N)}=_;if(q)$();let Y=K(()=>{j(),Z(),X(),G()},Q);return()=>{V(Y)}}function Sy(_){let{refreshModelState:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:Z,refreshQueueState:X,refreshContextUsage:G,refreshAutoresearchStatus:q,prewarmLimit:Q=5}=_;$(),j({prewarmRecent:!0,prewarmLimit:Q}),Z(),X(),G(),q()}function by(_){let $=HB(_.chats,_.currentChatJid,_.prewarmLimit??5);if($.length===0)return;WB({chatJids:$,fetchTimeline:_.fetchTimeline??((j)=>r$(10,null,j))})}function FF(_){let{getAgents:$,setAgents:j,setUserProfile:Z,applyBranding:X,readStoredNumber:G,sidebarWidthRef:q,appShellRef:Q,currentChatJid:K,currentRootChatJid:V,getAgentModels:Y,getAgentContext:N,getActiveChatAgents:F,getChatBranches:B,activeChatJidRef:D,setActiveChatAgents:z,setCurrentChatBranches:H,setActiveModel:W,setActiveThinkingLevel:M,setSupportsThinking:E,setActiveModelUsage:L,setAgentModelsPayload:x,setHasLoadedAgentModels:I,agentsRef:J,refreshQueueState:k,refreshContextUsage:O,refreshAutoresearchStatus:T,setContextUsage:y,setExtensionWorkingState:A}=_,P=R(async()=>{await XF({getAgents:$,setAgents:j,setUserProfile:Z,applyBranding:X})},[X,$,j,Z]);b(()=>{P(),NF({readStoredNumber:G,sidebarWidthRef:q,shellElement:Q.current,maxWidth:L6(Number.POSITIVE_INFINITY)})},[Q,P,G,q]);let f=R((Z0)=>{QF({payload:Z0,setActiveModel:W,setActiveThinkingLevel:M,setSupportsThinking:E,setActiveModelUsage:L,setAgentModelsPayload:x,setHasLoadedAgentModels:I})},[W,L,M,x,I,E]),u=R(()=>v2("thread-switch",K),[K]),c=R(()=>{return w$({kind:"model-state",chatJid:K,run:async()=>{let Z0=u();if(Z0)K_(Z0,"runtime-hydration-start",{phase:"model-state"});let q0=K;try{let[h,j0]=await Promise.all([(async()=>{let L0=Z0||u();if(L0)K_(L0,"model-request-start",{chatJid:q0});let s=await Y(q0);if(L0)K_(L0,"model-request-ready",{chatJid:q0,hasCurrent:Boolean(s?.current),modelCount:Array.isArray(s?.models)?s.models.length:0});return s})(),N(q0).catch(()=>null)]);if(D.current&&D.current!==q0)return null;f(h);let Y0=X4(j0);if(Y0&&Y0.percent!=null)y((L0)=>m4(L0,Y0)?L0:Y0),x5(q0,Y0)}catch{if(D.current&&D.current!==q0)return null;f(null)}let D0=Z0||u();if(D0)K_(D0,"runtime-hydration-ready",{chatJid:K}),m2(D0,["runtime-hydration-ready","timeline-first-paint"],"settled",{chatJid:K});return null}})},[D,f,K,N,Y,u,y]);b(()=>{rB({chatJid:K}),W(null),M(null),E(!1),L(null),I(!1),x(null),A({message:null,indicator:null,visible:!0});let Z0=bB(K);if(Z0)y(Z0);else y(null);c()},[K,c,W,L,M,x,y,A,I,E]);let r=R((Z0)=>{GF({payload:Z0,agentsRef:J,setAgents:j,applyBranding:X})},[J,X,j]),e=R((Z0)=>{qF({payload:Z0,setUserProfile:Z})},[Z]),m=R((Z0)=>{let q0=Boolean(Z0?.prewarmRecent),D0=Number.isFinite(Z0?.prewarmLimit)?Number(Z0?.prewarmLimit):5;return w$({kind:"active-chat-agents",chatJid:K,run:async()=>{let h=u(),j0=await VF({currentChatJid:K,getActiveChatAgents:async()=>{if(h)K_(h,"active-chat-list-request-start",{chatJid:K});let Y0=await F(K);if(h)K_(h,"active-chat-list-request-ready",{rowCount:Array.isArray(Y0?.chats)?Y0.chats.length:0});return Y0},getChatBranches:async(Y0,L0)=>{if(h)K_(h,"branch-list-request-start",{rootChatJid:Y0});let s=await B(Y0,L0);if(h)K_(h,"branch-list-request-ready",{rootChatJid:Y0,rowCount:Array.isArray(s?.chats)?s.chats.length:0});return s},activeChatJidRef:D,setActiveChatAgents:z});if(q0)by({chats:j0,currentChatJid:K,prewarmLimit:D0});return null}})},[D,K,F,B,u,z]),$0=R(()=>{return w$({kind:"current-chat-branches",chatJid:K,run:async()=>{let Z0=u();return await KF({currentRootChatJid:V,getChatBranches:async(q0,D0)=>{if(Z0)K_(Z0,"root-branch-request-start",{rootChatJid:q0});let h=await B(q0,D0);if(Z0)K_(Z0,"root-branch-request-ready",{rootChatJid:q0,rowCount:Array.isArray(h?.chats)?h.chats.length:0});return h},setCurrentChatBranches:H}),null}})},[K,V,B,u,H]),W0=R(()=>{mB({refreshModelState:c,refreshActiveChatAgents:m,refreshCurrentChatBranches:$0,refreshQueueState:k,refreshContextUsage:O,refreshAutoresearchStatus:T})},[m,T,O,$0,c,k]),X0=R(()=>{Sy({refreshModelState:c,refreshActiveChatAgents:m,refreshCurrentChatBranches:$0,refreshQueueState:k,refreshContextUsage:O,refreshAutoresearchStatus:T,prewarmLimit:5})},[m,T,O,$0,c,k]);return b(()=>Ry({refreshModelAndQueueState:W0,refreshModelState:c,refreshActiveChatAgents:m,refreshCurrentChatBranches:$0,refreshQueueState:k,runImmediately:!1}),[m,$0,W0,c,k]),b(()=>{let Z0=setInterval(()=>{c()},5000);return()=>clearInterval(Z0)},[c]),{updateAgentProfile:r,updateUserProfile:e,applyModelState:f,refreshModelState:c,refreshActiveChatAgents:m,refreshCurrentChatBranches:$0,refreshModelAndQueueState:W0,refreshPostPaintThreadState:X0}}M0();function gy(_,$){let j=W_(_);return Boolean(_&&j===$)}function P5(_,$,j){if(!gy(_,$))return _;return{..._,runtimeState:{..._?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:{},...j}}}function UF(_,$){return{..._,openedAt:$}}function DF(_){let $=W_(_);return{nextWidget:null,dismissedSessionKey:_?.source==="live"&&$?$:null}}function zF(_,$,j){let Z=sV({...$,...$&&$.status?{}:{status:j.fallbackStatus||"streaming"}});if(!Z)return _;let X=W_(Z);if(X&&j.dismissedSessionKeys?.has(X))return _;let G=W_(_),q=Boolean(X&&G&&X===G),Q={...q&&_?.artifact?_.artifact:{},...Z.artifact||{}};return{...q&&_?_:{},...Z,artifact:Q,source:"live",originChatJid:Z.originChatJid||j.currentChatJid,openedAt:q&&_?.openedAt?_.openedAt:j.updatedAt,liveUpdatedAt:j.updatedAt}}function HF(_,$){if(!_||_?.source!=="live")return _||null;let j=W_($),Z=W_(_);if(j&&Z&&j!==Z)return _;return null}function WF(_,$,j){return P5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,lastSubmitAt:j.submittedAt,lastHostUpdate:{type:"submit_pending",submittedAt:j.submittedAt,preview:j.submissionText||null}})}function XZ(_,$,j){if(j.errorMessage)return P5(_,$,{lastHostUpdate:{type:"submit_failed",submittedAt:j.submittedAt,preview:j.submissionText,error:j.errorMessage}});return P5(_,$,{lastHostUpdate:{type:j.queued==="followup"?"submit_queued":"submit_sent",submittedAt:j.submittedAt,preview:j.submissionText,queued:j.queued||null}})}function OF(_,$,j){return P5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,...j.kind==="widget.ready"?{readyAt:j.eventAt,lastHostUpdate:{type:"ready_ack",at:j.eventAt}}:{},...j.kind==="widget.request_refresh"?{lastRefreshRequestAt:j.eventAt,refreshCount:j.nextRefreshCount,lastHostUpdate:{type:j.shouldBuildDashboard?"refresh_building":"refresh_ack",at:j.eventAt,count:j.nextRefreshCount,echo:j.payload||null}}:{}})}function LF(_,$,j){return P5(_,$,{dashboard:j.dashboard,lastHostUpdate:{type:"refresh_dashboard",at:j.at,count:j.count,echo:j.echo||null}})}function JF(_,$,j){return P5(_,$,{lastHostUpdate:{type:"refresh_failed",at:j.at,count:j.count,error:j.errorMessage}})}Y6();function uy(_){let{setExtensionStatusPanels:$,setPendingExtensionPanelActions:j,setExtensionWorkingState:Z}=_;$(new Map),j(new Set),Z({message:null,indicator:null,visible:!0})}function EF(_){let{refreshAgentStatus:$,refreshPostPaintThreadState:j}=_;j(),$()}function AF(_){let{currentChatJid:$,currentRootChatJid:j,currentHashtag:Z,searchQuery:X,searchScope:G,loadPosts:q,searchPosts:Q,setPosts:K,setHasMore:V,scrollToBottom:Y,setExtensionStatusPanels:N,setPendingExtensionPanelActions:F,setExtensionWorkingState:B,paneStateOwnerChatJidRef:D,chatPaneStateByChatRef:z,snapshotCurrentChatPaneState:H,restoreChatPaneState:W,dismissedQueueRowIdsRef:M,refreshAgentStatus:E,viewStateRef:L,refreshTimeline:x,refreshModelAndQueueState:I,refreshPostPaintThreadState:J,setFloatingWidget:k,dismissedLiveWidgetKeysRef:O}=_;b(()=>{uy({setExtensionStatusPanels:N,setPendingExtensionPanelActions:F,setExtensionWorkingState:B})},[$,N,F,B]),b(()=>{let A=!1,P=Qq("thread-switch",$,{currentRootChatJid:j,currentHashtag:Z||null,searchQuery:X||null,searchScope:G});return K_(P,"route-effect-start",{currentChatJid:$,currentRootChatJid:j}),BF({currentHashtag:Z,searchQuery:X,searchScope:G,currentChatJid:$,currentRootChatJid:j,loadPosts:q,searchPosts:Q,setPosts:K,setHasMore:V,scrollToBottom:Y,isCancelled:()=>A,onTimelineLoadStart:(f)=>{K_(P,"timeline-load-start",f||null)},onTimelineDataReady:(f)=>{K_(P,"timeline-data-ready",f||null)},onTimelineFirstPaint:(f)=>{K_(P,"timeline-first-paint",f||null),m2(P,["runtime-hydration-ready","timeline-first-paint"],"settled",f||null),EF({refreshAgentStatus:E,refreshPostPaintThreadState:J})},onTimelineError:(f,u)=>{Vq(P,f,"timeline-load-failed",u||null),EF({refreshAgentStatus:E,refreshPostPaintThreadState:J})}}),()=>{A=!0,Kq(P,"route-effect-cancelled",{currentChatJid:$})}},[$,Z,X,G,j,q,Y,Q,V,K,E,J]),b(()=>{let A=D.current||$;z.current.set(A,H())},[z,$,D,H]),b(()=>{let A=D.current||$;if(A===$)return;z.current.set(A,H()),D.current=$,M.current.clear(),W(z.current.get($)||null)},[z,$,M,D,W,H]);let T=R(()=>{cB({viewStateRef:L,refreshTimeline:x,refreshModelAndQueueState:I})},[I,x,L]),y=R((A,P="streaming")=>{let f=new Date().toISOString();k((u)=>zF(u,A,{fallbackStatus:P,currentChatJid:$,dismissedSessionKeys:O.current,updatedAt:f}))},[$,O,k]);return{refreshCurrentView:T,applyLiveGeneratedWidgetUpdate:y}}M0();M0();y1();function vy({sse:_,onWake:$},j={}){let Z=j.window??(typeof window<"u"?window:null),X=j.document??(typeof document<"u"?document:null);if(!Z||!X||!_)return()=>{};let G=()=>{if(typeof _.forceReconnect==="function"){_.forceReconnect();return}_.reconnectIfNeeded()},q=typeof j.useFocusReconnect==="boolean"?j.useFocusReconnect:!E6(),Q=X.visibilityState&&X.visibilityState!=="visible",K=()=>{if(X.visibilityState&&X.visibilityState!=="visible")return Q=!0,!0;return!1},V=()=>{if(K())return;if(Q)Q=!1,G(),$?.()},Y=()=>{if(K())return;if(Q){V();return}if(q)_.reconnectIfNeeded()},N=()=>{V()},F=()=>{V()};return Z.addEventListener("focus",Y),Z.addEventListener("pageshow",N),X.addEventListener("visibilitychange",F),()=>{Z.removeEventListener("focus",Y),Z.removeEventListener("pageshow",N),X.removeEventListener("visibilitychange",F)}}function MF({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Z,chatJid:X}){let G=g(_);G.current=_;let q=g($);q.current=$;let Q=g(j);Q.current=j;let K=g(Z);K.current=Z,b(()=>{let V=new d2((N,F)=>G.current(N,F),(N)=>q.current(N),{chatJid:X});V.connect();let Y=vy({sse:V,onWake:()=>K.current?.()});return()=>{Y(),V.disconnect()}},[X])}X6();j8();function c4(_,$){return Boolean(_)&&Boolean($)&&_!==$}function f5(_,$){return Boolean(_)&&!Boolean($)}function kF(_,$){return _||$||null}function TF(_){switch(_){case"generated_widget_open":return{kind:"update",fallbackStatus:"loading",shouldAdoptTurn:!0};case"generated_widget_delta":return{kind:"update",fallbackStatus:"streaming",shouldAdoptTurn:!0};case"generated_widget_final":return{kind:"update",fallbackStatus:"final",shouldAdoptTurn:!0};case"generated_widget_error":return{kind:"update",fallbackStatus:"error",shouldAdoptTurn:!1};case"generated_widget_close":return{kind:"close",fallbackStatus:null,shouldAdoptTurn:!1};default:return{kind:null,fallbackStatus:null,shouldAdoptTurn:!1}}}function R5(_,$){let j=$?.row_id??$?.id;if(j==null||typeof j!=="string"&&typeof j!=="number")return null;let Z=Z4(_,j);return{rowId:j,items:Z.items,remainingQueueCount:Z.remainingQueueCount}}function GZ(_){if(_==="steer")return{title:"Failed to steer message",detail:"The queued message could not be sent as steering."};return{title:"Failed to remove message",detail:"The queued message could not be removed."}}function my(_,$){return typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():$}function yF(_,$,j){return{isStatusPanelWidgetEvent:_==="extension_ui_widget"&&$?.options?.surface==="status-panel",eventChatJid:my($,j),panelKey:typeof $?.key==="string"?$.key:""}}function cy(_,$){if(_!=="extension_ui_working_indicator")return;if(!Array.isArray($?.frames))return{mode:"default",frames:[],intervalMs:null};let j=$.frames.filter((G)=>typeof G==="string"),Z=$.interval_ms??$.intervalMs,X=typeof Z==="number"&&Number.isFinite(Z)&&Z>0?Z:null;if(j.length===0)return{mode:"hidden",frames:[],intervalMs:X};return{mode:"custom",frames:j,intervalMs:X}}function wF(_,$,j){if($==="extension_ui_working_visible"){let X=j?.visible!==!1;if(X===_.visible)return;return{..._,visible:X}}if($==="extension_ui_working")return{message:typeof j?.message==="string"&&j.message.trim()?j.message.trim():null,indicator:_.indicator,visible:_.visible};if($==="extension_ui_status"){if(j?.key==="context_usage")return;return{message:typeof j?.text==="string"&&j.text.trim()?j.text.trim():null,indicator:_.indicator,visible:_.visible}}let Z=cy($,j);if(Z===void 0)return;return{message:_.message,indicator:Z,visible:_.visible}}function IF(_,$){if(_!=="extension_ui_status")return null;if($?.key!=="context_usage")return null;let j=typeof $?.text==="string"?$.text.trim():"";if(!j)return null;try{let Z=JSON.parse(j);if(!Z||typeof Z!=="object")return null;let X=Z,G=X.tokens==null?null:Number(X.tokens),q=X.contextWindow==null?null:Number(X.contextWindow),Q=X.percent==null?null:Number(X.percent);return{tokens:Number.isFinite(G)?G:null,contextWindow:Number.isFinite(q)?q:null,percent:Number.isFinite(Q)?Q:null,estimated:X.estimated===!0,source:typeof X.source==="string"?X.source:null,phase:typeof X.phase==="string"?X.phase:null}}catch{return null}}function xF(_,$){if(_==="extension_ui_notify"&&typeof $?.message==="string")return{title:$.message,detail:null,kind:typeof $?.type==="string"&&$.type.trim()?$.type:"info"};if(_==="extension_ui_error"){let j=$?.error;return{title:"Extension UI error",detail:typeof j==="string"?j:j&&typeof j==="object"&&typeof j.error==="string"?j.error:j?String(j):"Unknown extension error",kind:"error",durationMs:5000}}return null}var hy=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_working_indicator","extension_ui_working_visible","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function CF(_){return hy.has(String(_||"").trim())}function ly(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function $3(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Z={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Z})),j.dispatchEvent(new CustomEvent(ly(_),{detail:Z})),!0}function PF(_,$,j){let Z=$?.turn_id,X=$?.chat_jid,G=typeof X==="string"&&X.trim()?X.trim():null,q=_==="connected"||_==="workspace_update";return{turnId:Z,eventChatJid:G,isGlobalUiEvent:q,isCurrentChatEvent:G?G===j:q}}function fF(_){return _==="agent_draft_delta"||_==="agent_thought_delta"||_==="agent_draft"||_==="agent_thought"}function RF(_,$,j){let{currentChatJid:Z,updateAgentProfile:X,updateUserProfile:G,currentTurnIdRef:q,activeChatJidRef:Q,pendingRequestRef:K,draftBufferRef:V,thoughtBufferRef:Y,previewResyncPendingRef:N,previewResyncGenerationRef:F,steerQueuedTurnIdRef:B,thoughtExpandedRef:D,draftExpandedRef:z,draftThrottleRef:H,thoughtThrottleRef:W,viewStateRef:M,followupQueueItemsRef:E,dismissedQueueRowIdsRef:L,scrollToBottomRef:x,hasMoreRef:I,loadMoreRef:J,lastAgentResponseRef:k,wasAgentActiveRef:O,setActiveTurn:T,applyLiveGeneratedWidgetUpdate:y,setFloatingWidget:A,clearLastActivityFlag:P,handleUiVersionDrift:f,setAgentStatus:u,setAgentDraft:c,setAgentPlan:r,setAgentThought:e,setPendingRequest:m,clearAgentRunState:$0,getAgentStatus:W0,noteAgentActivity:X0,showLastActivity:Z0,refreshTimeline:q0,refreshModelAndQueueState:D0,refreshActiveChatAgents:h,refreshCurrentChatBranches:j0,notifyForFinalResponse:Y0,setContextUsage:L0,refreshContextUsage:s,refreshQueueState:Q0,setFollowupQueueItems:O0,clearQueuedSteerStateIfStale:x0,setSteerQueuedTurnId:r0,applyModelState:l0,getAgentContext:n0,setExtensionStatusPanels:m0,setPendingExtensionPanelActions:_1,setExtensionWorkingState:S0,refreshActiveEditorFromWorkspace:o0,showIntentToast:c0,removeStalledPost:$1,setPosts:i0,preserveTimelineScrollTop:H1,openEditor:Q1}=j,{turnId:P0,isCurrentChatEvent:J0}=PF(_,$,Z);if(J0)X($),G($);if(_==="ui_theme"){U5($);return}if(_==="ui_meters"){w9($);return}if(_==="ui_open_tab"){let F0=typeof $?.path==="string"?$.path.trim():"",R0=typeof $?.label==="string"?$.label.trim():void 0;if(F0==="piclaw://settings"){let w0=typeof $?.section==="string"?$.section.trim():"";window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:w0?{section:w0}:void 0}));return}if(F0&&typeof Q1==="function")Q1(F0,R0?{label:R0}:void 0);return}let z1=TF(_);if(z1.kind==="update"){if(!J0)return;if(z1.shouldAdoptTurn&&f5(P0,q.current))T(P0);y($,z1.fallbackStatus||"streaming");return}if(z1.kind==="close"){if(!J0)return;A((F0)=>HF(F0,$));return}if(_?.startsWith("agent_")&&!fF(_))P();if(_==="connected"){if(f($?.app_asset_version))return;if($?.ui_theme){let w0=$.ui_theme.theme||"default",j1=$.ui_theme.tint||null;U5({theme:w0,tint:j1})}if($?.ui_meters)w9($.ui_meters);let F0=F.current+1;if(F.current=F0,N.current=!0,V.current="",Y.current="",u(null),c({text:"",totalLines:0}),r(""),e({text:"",totalLines:0}),S0({message:null,indicator:null,visible:!0}),m(null),K.current=null,$0(),v6(Z)){if(F.current===F0)N.current=!1;return}let R0=Z;if(W0(R0).then((w0)=>{if(Q.current!==R0)return;if(!w0||w0.status!=="active"||!w0.data)return;let j1=w0.data,x1=d8(j1);if(x1)T(x1);u(j1),X0({clearSilence:!0,atMs:d$(j1)??Date.now()}),Z0(j1);let K1=I5(w0.thought);if(K1)Y.current=K1.text,e(K1);let V1=I5(w0.draft);if(V1)V.current=V1.text,c(V1)}).catch((w0)=>{console.warn("Failed to fetch agent status:",w0)}).finally(()=>{if(F.current===F0)N.current=!1}),j$(M.current))q0();D0();return}if(_==="agent_status"){if(!J0){if($?.type==="done"||$?.type==="error")h(),j0();return}let F0=X4($.context_usage);if(F0&&F0.percent!=null)L0((R0)=>m4(R0,F0)?R0:F0),x5(Z,F0);if($.type==="context_usage")return;if($.type==="done"||$.type==="error"){if(c4(P0,q.current))return;if($.type==="done"){if(Y0(P0||q.current),j$(M.current))q0()}if(s(),O.current=!1,$0(),L.current.clear(),h(),D0(),c({text:"",totalLines:0}),r(""),e({text:"",totalLines:0}),S0({message:null,indicator:null,visible:!0}),m(null),$.type==="error")u({type:"error",title:$.title||"Agent error"}),setTimeout(()=>u(null),8000);else u(null)}else{if(P0)T(P0);if(X0({running:!0,clearSilence:!0,atMs:d$($)??Date.now()}),$.type==="thinking")V.current="",Y.current="",c({text:"",totalLines:0}),r(""),e({text:"",totalLines:0});u($)}return}if(_==="agent_steer_queued"){if(!J0)return;if(c4(P0,q.current))return;let F0=kF(P0,q.current);if(!F0)return;B.current=F0,r0(F0);return}if(_==="agent_followup_queued"){if(!J0)return;O0((F0)=>MB(F0,$)),Q0();return}if(_==="agent_followup_consumed"){if(!J0)return;let F0=R5(E.current,$);if(F0)x0(F0.remainingQueueCount),O0((R0)=>Z4(R0,F0.rowId).items);if(Q0(),j$(M.current))q0();return}if(_==="agent_followup_removed"){if(!J0)return;let F0=R5(E.current,$);if(F0)L.current.add(F0.rowId),x0(F0.remainingQueueCount),O0((R0)=>Z4(R0,F0.rowId).items);Q0();return}if(_==="agent_draft_delta"){if(!J0)return;if(N.current)return;if(c4(P0,q.current))return;if(f5(P0,q.current))T(P0);X0({running:!0,clearSilence:!0}),V.current=_B(V.current,$);let F0=Date.now();if(!H.current||F0-H.current>=100){H.current=F0;let R0=V.current;if(z.current)c((w0)=>sj(R0,w0));else c(o8(R0,null))}return}if(_==="agent_draft"){if(!J0)return;if(N.current)return;if(c4(P0,q.current))return;if(f5(P0,q.current))T(P0);X0({running:!0,clearSilence:!0});let F0=$.text||"",R0=$.mode||($.kind==="plan"?"replace":"append");if($.kind==="plan")r((w0)=>eN(w0,F0,R0));else if(!z.current)V.current=F0,c(o8(F0,$.total_lines));return}if(_==="agent_thought_delta"){if(!J0)return;if(N.current)return;if(c4(P0,q.current))return;if(f5(P0,q.current))T(P0);X0({running:!0,clearSilence:!0}),Y.current=$B(Y.current,$);let F0=Date.now();if(D.current&&(!W.current||F0-W.current>=100)){W.current=F0;let R0=Y.current;e((w0)=>sj(R0,w0))}return}if(_==="agent_thought"){if(!J0)return;if(N.current)return;if(c4(P0,q.current))return;if(f5(P0,q.current))T(P0);X0({running:!0,clearSilence:!0});let F0=$.text||"";if(!D.current)Y.current=F0,e(o8(F0,$.total_lines));return}if(_==="model_changed"){if(!J0)return;l0($);let F0=Z;n0(F0).then((R0)=>{if(Q.current!==F0)return;let w0=X4(R0);if(w0&&w0.percent!=null)L0((j1)=>m4(j1,w0)?j1:w0),x5(F0,w0)}).catch(()=>{if(Q.current!==F0)return});return}let G1=yF(_,$,Z);if(G1.isStatusPanelWidgetEvent){if(G1.eventChatJid!==Z)return;if(!G1.panelKey)return;if(m0((F0)=>xB(F0,$)),CB($))_1((F0)=>a8(F0,G1.panelKey));$3(_,$);return}if(_==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:$}));o0($?.updates);return}if(CF(_)){if(_==="extension_ui_title"){h(),j0(),$3(_,$);return}if(!J0)return;let F0=IF(_,$);if(F0&&F0.percent!=null)L0((w0)=>m4(w0,F0)?w0:F0);S0((w0)=>{return wF(w0,_,$)??w0}),$3(_,$);let R0=xF(_,$);if(R0)c0(R0.title,R0.detail,R0.kind,R0.durationMs);return}let J1=j$(M.current);if(_==="agent_response"){if(!J0)return;S0({message:null,indicator:null,visible:!0}),$1(),k.current={post:$,turnId:q.current}}if(jB(_,J0,J1))i0((F0)=>ZB(F0,$)),x.current?.();if(_==="interaction_updated"){if(!aj(J0,J1))return;i0((F0)=>XB(F0,$))}if(_==="interaction_deleted"){if(!aj(J0,J1))return;let F0=$?.ids||[];if(F0.length){if(H1(()=>{i0((R0)=>GB(R0,F0))}),I.current)J.current?.({preserveScroll:!0,preserveMode:"top"})}}}function py(_){return _?15000:60000}function SF(_){let{currentChatJid:$,posts:j,scrollToMessage:Z,handleConnectionStatusChange:X,loadPosts:G,refreshCurrentView:q,updateAgentProfile:Q,updateUserProfile:K,currentTurnIdRef:V,activeChatJidRef:Y,pendingRequestRef:N,draftBufferRef:F,thoughtBufferRef:B,previewResyncPendingRef:D,previewResyncGenerationRef:z,steerQueuedTurnIdRef:H,thoughtExpandedRef:W,draftExpandedRef:M,draftThrottleRef:E,thoughtThrottleRef:L,viewStateRef:x,followupQueueItemsRef:I,dismissedQueueRowIdsRef:J,scrollToBottomRef:k,hasMoreRef:O,loadMoreRef:T,lastAgentResponseRef:y,wasAgentActiveRef:A,setActiveTurn:P,applyLiveGeneratedWidgetUpdate:f,setFloatingWidget:u,clearLastActivityFlag:c,handleUiVersionDrift:r,setAgentStatus:e,setAgentDraft:m,setAgentPlan:$0,setAgentThought:W0,setPendingRequest:X0,clearAgentRunState:Z0,getAgentStatus:q0,noteAgentActivity:D0,showLastActivity:h,refreshTimeline:j0,refreshModelAndQueueState:Y0,refreshActiveChatAgents:L0,refreshCurrentChatBranches:s,notifyForFinalResponse:Q0,setContextUsage:O0,refreshContextUsage:x0,refreshQueueState:r0,setFollowupQueueItems:l0,clearQueuedSteerStateIfStale:n0,setSteerQueuedTurnId:m0,applyModelState:_1,getAgentContext:S0,setExtensionStatusPanels:o0,setPendingExtensionPanelActions:c0,setExtensionWorkingState:$1,refreshActiveEditorFromWorkspace:i0,showIntentToast:H1,removeStalledPost:Q1,setPosts:P0,preserveTimelineScrollTop:J0,openEditor:z1,finalizeStalledResponse:G1,connectionStatus:J1,agentStatus:F0,refreshAgentStatus:R0,refreshAutoresearchStatus:w0}=_,j1=R((K1,V1)=>{RF(K1,V1,{currentChatJid:$,updateAgentProfile:Q,updateUserProfile:K,currentTurnIdRef:V,activeChatJidRef:Y,pendingRequestRef:N,draftBufferRef:F,thoughtBufferRef:B,previewResyncPendingRef:D,previewResyncGenerationRef:z,steerQueuedTurnIdRef:H,thoughtExpandedRef:W,draftExpandedRef:M,draftThrottleRef:E,thoughtThrottleRef:L,viewStateRef:x,followupQueueItemsRef:I,dismissedQueueRowIdsRef:J,scrollToBottomRef:k,hasMoreRef:O,loadMoreRef:T,lastAgentResponseRef:y,wasAgentActiveRef:A,setActiveTurn:P,applyLiveGeneratedWidgetUpdate:f,setFloatingWidget:u,clearLastActivityFlag:c,handleUiVersionDrift:r,setAgentStatus:e,setAgentDraft:m,setAgentPlan:$0,setAgentThought:W0,setPendingRequest:X0,clearAgentRunState:Z0,getAgentStatus:q0,noteAgentActivity:D0,showLastActivity:h,refreshTimeline:j0,refreshModelAndQueueState:Y0,refreshActiveChatAgents:L0,refreshCurrentChatBranches:s,notifyForFinalResponse:Q0,setContextUsage:O0,refreshContextUsage:x0,refreshQueueState:r0,setFollowupQueueItems:l0,clearQueuedSteerStateIfStale:n0,setSteerQueuedTurnId:m0,applyModelState:_1,getAgentContext:S0,setExtensionStatusPanels:o0,setPendingExtensionPanelActions:c0,setExtensionWorkingState:$1,refreshActiveEditorFromWorkspace:i0,showIntentToast:H1,removeStalledPost:Q1,setPosts:P0,preserveTimelineScrollTop:J0,openEditor:z1})},[Y,f,_1,Z0,c,n0,$,V,J,F,M,E,I,S0,q0,r,O,y,T,D0,Q0,N,J0,z,D,L0,i0,x0,s,Y0,r0,j0,Q1,k,P,m,$0,e,W0,O0,o0,$1,u,l0,c0,X0,P0,m0,H1,h,H,B,W,L,Q,K,x,A,z1]);b(()=>{if(typeof window>"u")return;let K1=window.__PICLAW_TEST_API||{};return K1.emit=j1,K1.reset=()=>{Q1(),Z0(),e(null),m({text:"",totalLines:0}),$0(""),W0({text:"",totalLines:0}),$1({message:null,indicator:null,visible:!0}),X0(null)},K1.finalize=()=>G1(),window.__PICLAW_TEST_API=K1,()=>{if(window.__PICLAW_TEST_API===K1)window.__PICLAW_TEST_API=void 0}},[Z0,G1,j1,Q1,m,$0,e,W0,$1,X0]),MF({handleSseEvent:j1,handleConnectionStatusChange:X,loadPosts:G,onWake:q,chatJid:$}),b(()=>{if(!j||j.length===0)return;let K1=location.hash;if(!K1||!K1.startsWith("#msg-"))return;let V1=K1.slice(5);Z(V1),history.replaceState(null,"",location.pathname+location.search)},[j,Z]);let x1=F0!==null;b(()=>{if(J1!=="connected")return;let K1=py(x1),V1=setInterval(()=>{oB({viewStateRef:x,isAgentActive:x1,refreshTimeline:j0,refreshQueueState:r0,refreshAgentStatus:R0,refreshContextUsage:x0,refreshAutoresearchStatus:w0})},K1);return()=>clearInterval(V1)},[J1,x1,R0,w0,x0,r0,j0,x]),b(()=>{return h8(()=>{R0(),x0(),r0(),w0()})},[R0,w0,x0,r0])}function ry(_){return{currentChatJid:_.currentChatJid,activeChatJidRef:_.activeChatJidRef,queueRefreshGenRef:_.queueRefreshGenRef,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,getAgentQueueState:_.getAgentQueueState,setFollowupQueueItems:_.setFollowupQueueItems,clearQueuedSteerStateIfStale:_.clearQueuedSteerStateIfStale,getAgentContext:_.getAgentContext,setContextUsage:_.setContextUsage,getAutoresearchStatus:_.getAutoresearchStatus,setExtensionStatusPanels:_.setExtensionStatusPanels,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,getAgentStatus:_.getAgentStatus,wasAgentActiveRef:_.wasAgentActiveRef,viewStateRef:_.viewStateRef,refreshTimeline:_.refreshTimeline,clearAgentRunState:_.clearAgentRunState,agentStatusRef:_.agentStatusRef,pendingRequestRef:_.pendingRequestRef,thoughtBufferRef:_.thoughtBufferRef,draftBufferRef:_.draftBufferRef,setAgentStatus:_.setAgentStatus,setAgentDraft:_.setAgentDraft,setAgentPlan:_.setAgentPlan,setAgentThought:_.setAgentThought,setPendingRequest:_.setPendingRequest,setExtensionWorkingState:_.setExtensionWorkingState,setActiveTurn:_.setActiveTurn,noteAgentActivity:_.noteAgentActivity,clearLastActivityFlag:_.clearLastActivityFlag,isAgentRunningRef:_.isAgentRunningRef,currentTurnIdRef:_.currentTurnIdRef,silentRecoveryRef:_.silentRecoveryRef,silenceRefreshMs:_.silenceRefreshMs,lastAgentEventRef:_.lastAgentEventRef,lastSilenceNoticeRef:_.lastSilenceNoticeRef,silenceWarningMs:_.silenceWarningMs,silenceFinalizeMs:_.silenceFinalizeMs,isCompactionStatus:_.isCompactionStatus,serverVersionContext:_.serverVersionContext,setConnectionStatus:_.setConnectionStatus,setStateAccessFailed:_.setStateAccessFailed,setPendingRequestForConnection:_.setPendingRequest,hasConnectedOnceRef:_.hasConnectedOnceRef}}function ny(_){return{getAgents:_.getAgents,setAgents:_.setAgents,setUserProfile:_.setUserProfile,applyBranding:_.applyBranding,readStoredNumber:_.readStoredNumber,sidebarWidthRef:_.sidebarWidthRef,appShellRef:_.appShellRef,currentChatJid:_.currentChatJid,currentRootChatJid:_.currentRootChatJid,getAgentModels:_.getAgentModels,getAgentContext:_.getAgentContext,getActiveChatAgents:_.getActiveChatAgents,getChatBranches:_.getChatBranches,activeChatJidRef:_.activeChatJidRef,setActiveChatAgents:_.setActiveChatAgents,setCurrentChatBranches:_.setCurrentChatBranches,setActiveModel:_.setActiveModel,setActiveThinkingLevel:_.setActiveThinkingLevel,setSupportsThinking:_.setSupportsThinking,setActiveModelUsage:_.setActiveModelUsage,setAgentModelsPayload:_.setAgentModelsPayload,setHasLoadedAgentModels:_.setHasLoadedAgentModels,agentsRef:_.agentsRef,refreshQueueState:_.refreshQueueState,refreshContextUsage:_.refreshContextUsage,refreshAutoresearchStatus:_.refreshAutoresearchStatus,setContextUsage:_.setContextUsage,setExtensionWorkingState:_.setExtensionWorkingState}}function dy(_){return{currentChatJid:_.currentChatJid,currentRootChatJid:_.currentRootChatJid,currentHashtag:_.currentHashtag,searchQuery:_.searchQuery,searchScope:_.searchScope,loadPosts:_.loadPosts,searchPosts:_.searchPosts,setPosts:_.setPosts,setHasMore:_.setHasMore,scrollToBottom:_.scrollToBottom,setExtensionStatusPanels:_.setExtensionStatusPanels,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,setExtensionWorkingState:_.setExtensionWorkingState,paneStateOwnerChatJidRef:_.paneStateOwnerChatJidRef,chatPaneStateByChatRef:_.chatPaneStateByChatRef,snapshotCurrentChatPaneState:_.snapshotCurrentChatPaneState,restoreChatPaneState:_.restoreChatPaneState,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,refreshQueueState:_.refreshQueueState,refreshAgentStatus:_.refreshAgentStatus,refreshContextUsage:_.refreshContextUsage,viewStateRef:_.viewStateRef,refreshTimeline:_.refreshTimeline,refreshModelAndQueueState:_.refreshModelAndQueueState,refreshPostPaintThreadState:_.refreshPostPaintThreadState,setFloatingWidget:_.setFloatingWidget,dismissedLiveWidgetKeysRef:_.dismissedLiveWidgetKeysRef}}function oy(_){return{currentChatJid:_.currentChatJid,posts:_.posts,scrollToMessage:_.scrollToMessage,handleConnectionStatusChange:_.handleConnectionStatusChange,loadPosts:_.loadPosts,refreshCurrentView:_.refreshCurrentView,updateAgentProfile:_.updateAgentProfile,updateUserProfile:_.updateUserProfile,currentTurnIdRef:_.currentTurnIdRef,activeChatJidRef:_.activeChatJidRef,pendingRequestRef:_.pendingRequestRef,draftBufferRef:_.draftBufferRef,thoughtBufferRef:_.thoughtBufferRef,previewResyncPendingRef:_.previewResyncPendingRef,previewResyncGenerationRef:_.previewResyncGenerationRef,steerQueuedTurnIdRef:_.steerQueuedTurnIdRef,thoughtExpandedRef:_.thoughtExpandedRef,draftExpandedRef:_.draftExpandedRef,draftThrottleRef:_.draftThrottleRef,thoughtThrottleRef:_.thoughtThrottleRef,viewStateRef:_.viewStateRef,followupQueueItemsRef:_.followupQueueItemsRef,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,scrollToBottomRef:_.scrollToBottomRef,hasMoreRef:_.hasMoreRef,loadMoreRef:_.loadMoreRef,lastAgentResponseRef:_.lastAgentResponseRef,wasAgentActiveRef:_.wasAgentActiveRef,setActiveTurn:_.setActiveTurn,applyLiveGeneratedWidgetUpdate:_.applyLiveGeneratedWidgetUpdate,setFloatingWidget:_.setFloatingWidget,clearLastActivityFlag:_.clearLastActivityFlag,handleUiVersionDrift:_.handleUiVersionDrift,setAgentStatus:_.setAgentStatus,setAgentDraft:_.setAgentDraft,setAgentPlan:_.setAgentPlan,setAgentThought:_.setAgentThought,setPendingRequest:_.setPendingRequest,clearAgentRunState:_.clearAgentRunState,getAgentStatus:_.getAgentStatus,noteAgentActivity:_.noteAgentActivity,showLastActivity:_.showLastActivity,refreshTimeline:_.refreshTimeline,refreshModelAndQueueState:_.refreshModelAndQueueState,refreshActiveChatAgents:_.refreshActiveChatAgents,refreshCurrentChatBranches:_.refreshCurrentChatBranches,notifyForFinalResponse:_.notifyForFinalResponse,setContextUsage:_.setContextUsage,refreshContextUsage:_.refreshContextUsage,refreshQueueState:_.refreshQueueState,setFollowupQueueItems:_.setFollowupQueueItems,clearQueuedSteerStateIfStale:_.clearQueuedSteerStateIfStale,setSteerQueuedTurnId:_.setSteerQueuedTurnId,applyModelState:_.applyModelState,getAgentContext:_.getAgentContext,setExtensionStatusPanels:_.setExtensionStatusPanels,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,setExtensionWorkingState:_.setExtensionWorkingState,refreshActiveEditorFromWorkspace:_.refreshActiveEditorFromWorkspace,showIntentToast:_.showIntentToast,removeStalledPost:_.removeStalledPost,setPosts:_.setPosts,preserveTimelineScrollTop:_.preserveTimelineScrollTop,finalizeStalledResponse:_.finalizeStalledResponse,connectionStatus:_.connectionStatus,agentStatus:_.agentStatus,refreshAgentStatus:_.refreshAgentStatus,refreshAutoresearchStatus:_.refreshAutoresearchStatus}}function bF(_){let $=iB(ry(_)),j=FF(ny({..._,refreshQueueState:$.refreshQueueState,refreshContextUsage:$.refreshContextUsage,refreshAutoresearchStatus:$.refreshAutoresearchStatus})),Z=AF(dy({..._,refreshQueueState:$.refreshQueueState,refreshAgentStatus:$.refreshAgentStatus,refreshContextUsage:$.refreshContextUsage,refreshModelAndQueueState:j.refreshModelAndQueueState,refreshPostPaintThreadState:j.refreshPostPaintThreadState}));return SF(oy({..._,handleConnectionStatusChange:$.handleConnectionStatusChange,handleUiVersionDrift:$.handleUiVersionDrift,refreshCurrentView:Z.refreshCurrentView,updateAgentProfile:j.updateAgentProfile,updateUserProfile:j.updateUserProfile,applyLiveGeneratedWidgetUpdate:Z.applyLiveGeneratedWidgetUpdate,refreshModelAndQueueState:j.refreshModelAndQueueState,refreshActiveChatAgents:j.refreshActiveChatAgents,refreshCurrentChatBranches:j.refreshCurrentChatBranches,refreshContextUsage:$.refreshContextUsage,refreshQueueState:$.refreshQueueState,applyModelState:j.applyModelState,refreshAgentStatus:$.refreshAgentStatus,refreshAutoresearchStatus:$.refreshAutoresearchStatus})),{agentStatusLifecycle:$,chatRefreshLifecycle:j,viewRefreshLifecycle:Z}}M0();var gF="piclaw:pane-host-transfer:",iy=300000;function uF(_){try{return _?.localStorage??null}catch{return null}}function vF(_){return typeof _==="string"?_.trim():""}function mF(_){if(!_||typeof _!=="object"||Array.isArray(_))return null;return _}function sy(_=Date.now()){return`pane-transfer-${_.toString(36)}-${Math.random().toString(36).slice(2,10)}`}function ay(_,$){try{return _?.removeItem($),!0}catch(j){return!1}}function ty(_,$=globalThis,j=Date.now()){let Z=uF($),X=vF(_?.path),G=mF(_?.payload);if(!Z||!X||!G)return null;let q=sy(j);try{return Z.setItem(`${gF}${q}`,JSON.stringify({path:X,payload:G,capturedAt:j})),q}catch{return null}}function qZ(_,$=globalThis,j=Date.now()){let Z=typeof _==="string"?_.trim():"",X=uF($);if(!Z||!X)return null;let G=`${gF}${Z}`,q="";try{q=X.getItem(G)||""}catch{return null}if(!q)return null;ay(X,G);try{let Q=JSON.parse(q),K=typeof Q?.capturedAt==="number"&&Number.isFinite(Q.capturedAt)?Q.capturedAt:j;if(K+iy<j)return null;let V=vF(Q?.path),Y=mF(Q?.payload);if(!V||!Y)return null;return{path:V,payload:Y,capturedAt:K}}catch{return null}}function j3(_,$=globalThis,j=Date.now()){let Z=ty(_,$,j);return Z?{pane_transfer:Z}:null}function cF(_=globalThis,$=Date.now()){let j=X5("pane_transfer",_);return qZ(j,_,$)}function h4(_){return typeof _==="string"?_.trim():""}function ey(_){return Boolean(_)&&typeof _.get==="function"&&typeof _.set==="function"&&typeof _.delete==="function"&&typeof _.entries==="function"}function QZ(_){if(!_)return null;let $=_.__piclawPaneLiveTransferRegistry__;if(ey($))return $;let j=new Map;return _.__piclawPaneLiveTransferRegistry__=j,j}function _w(_){try{return _?.(),!0}catch($){return!1}}function S5(_,$=typeof window<"u"?window:null){let j=QZ($),Z=h4(_?.panePath),X=h4(_?.paneInstanceId),G=h4(_?.paneWindowId);if(!j||!Z||!X||!G||typeof _?.instance?.moveHost!=="function")return!1;return j.set(G,{..._,panePath:Z,paneInstanceId:X,paneWindowId:G,registeredAt:typeof _?.registeredAt==="number"?_.registeredAt:Date.now()}),!0}function hF(_,$=typeof window<"u"?window:null){let j=QZ($),Z=h4(_);if(!j||!Z)return;for(let[X,G]of j.entries())if(G?.panePath===Z)j.delete(X)}async function lF(_,$,j,Z){let X=QZ(_),G=h4($?.panePath),q=h4($?.paneInstanceId),Q=h4($?.paneWindowId);if(!X||!G||!q||!Q)return null;let K=X.get(Q)||null;if(!K)return null;if(K.panePath!==G||K.paneInstanceId!==q)return null;if(typeof K.instance?.moveHost!=="function")return null;if(!await K.instance.moveHost(j,Z))return null;return X.delete(Q),_w(K.releaseSourceHost),K.instance}q8();function h6(_){if(!_||typeof _!=="object")return!1;let $=_;if(typeof $.closest==="function"&&$.closest('input, textarea, select, [contenteditable="true"], .compose-box, .compose-model-popup, .compose-session-popup'))return!0;return Boolean($.isContentEditable)}function pF(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Z=_?.openTab,X=_?.editSource,G=_?.popOutPane,q=(Y)=>{let N=Y?.detail?.path,F=typeof Y?.detail?.label==="string"&&Y.detail.label.trim()?Y.detail.label.trim():void 0;if(N)Z?.(N,F)},Q=(Y)=>{let N=Y?.detail?.path,F=typeof Y?.detail?.label==="string"&&Y.detail.label.trim()?Y.detail.label.trim():void 0;if(N)X?.(N,F)},K=(Y)=>{let N=Y?.detail?.path,F=typeof Y?.detail?.label==="string"&&Y.detail.label.trim()?Y.detail.label.trim():void 0;if(N)G?.(N,F)},V=["pane:open-tab","office-viewer:open-tab","data-viewer:open-tab","pdf-viewer:open-tab","image-viewer:open-tab","video-viewer:open-tab","html-viewer:open-tab","mindmap:open-tab","vnc:open-tab"];return V.forEach((Y)=>j.addEventListener(Y,q)),j.addEventListener("html-viewer:edit-source",Q),j.addEventListener("pane:popout",K),()=>{V.forEach((Y)=>j.removeEventListener(Y,q)),j.removeEventListener("html-viewer:edit-source",Q),j.removeEventListener("pane:popout",K)}}function rF(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Z=(X)=>{if(h6(X?.target))return;if(!y$(X,"toggleDock"))return;X.preventDefault?.(),_?.()};return j.addEventListener("keydown",Z),()=>j.removeEventListener("keydown",Z)}function nF(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Z=_?.toggleZenMode,X=_?.exitZenMode,G=typeof _?.isZenModeActive==="function"?_.isZenModeActive:()=>Boolean(_?.zenMode),q=(Q)=>{if(y$(Q,"toggleZenMode")){Q.preventDefault?.(),Z?.();return}if(h6(Q?.target))return;if(Q?.key==="Escape"&&G())Q.preventDefault?.(),X?.()};return j.addEventListener("keydown",q),()=>j.removeEventListener("keydown",q)}function dF(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Z=(X)=>{if(h6(X?.target))return;if(y$(X,"previousChat")){X.preventDefault?.(),_?.previousChat?.();return}if(y$(X,"nextChat"))X.preventDefault?.(),_?.nextChat?.()};return j.addEventListener("keydown",Z),()=>j.removeEventListener("keydown",Z)}function oF(_={}){let $=_.document??(typeof document<"u"?document:null);if(!$)return()=>{};let j=(Z)=>{if(h6(Z?.target))return;if(!y$(Z,"openSettings"))return;Z.preventDefault(),_$()};return $.addEventListener("keydown",j),()=>$.removeEventListener("keydown",j)}function iF(_={}){let $=_.document??(typeof document<"u"?document:null);if(!$)return()=>{};let j=(Z)=>{if(h6(Z?.target))return;if(!y$(Z,"openHelp"))return;Z.preventDefault(),_$({section:"keyboard"})};return $.addEventListener("keydown",j),()=>$.removeEventListener("keydown",j)}function sF(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,renameBranchInFlight:Z,renameBranchLockUntil:X,getFormLock:G,setRenameBranchNameDraft:q,setIsRenameBranchFormOpen:Q,now:K=Date.now()}=_;if(!$||!j?.chat_jid)return!1;let V=G?.()||null;if(!V)return!1;if(Z||K<Number(X||0)||V.inFlight||K<Number(V.cooldownUntil||0))return!1;return q?.(j.agent_name||""),Q?.(!0),!0}function aF(_){let{setIsRenameBranchFormOpen:$,setRenameBranchNameDraft:j}=_;$?.(!1),j?.("")}async function tF(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,nextName:Z,openRenameForm:X,renameBranchInFlightRef:G,renameBranchLockUntilRef:q,getFormLock:Q,setIsRenamingBranch:K,renameChatBranch:V,refreshActiveChatAgents:Y,refreshCurrentChatBranches:N,navigate:F,baseHref:B,chatOnlyMode:D,showIntentToast:z,closeRenameForm:H,now:W=()=>Date.now()}=_;if(!$||!j?.chat_jid)return!1;if(typeof Z!=="string")return X?.(),!1;let M=W(),E=Q?.()||null;if(!E)return!1;if(G.current||M<Number(q.current||0)||E.inFlight||M<Number(E.cooldownUntil||0))return!1;G.current=!0,E.inFlight=!0,K?.(!0);try{let L=j.agent_name||"",x=H8(Z,L);if(!x.canSubmit)return z?.("Could not rename session",x.message||"Enter a valid session handle.","warning",4000),!1;let I=x.normalized||L,J=await V(j.chat_jid,{agentName:I});await Promise.allSettled([Y?.(),N?.()]);let k=J?.branch?.agent_name||I||L;return z?.("Session renamed",`@${k}`,"info",3500),H?.(),!0}catch(L){let x=L instanceof Error?L.message:String(L||"Could not rename session."),I=/already in use/i.test(x||"")?`${x} Switch to or restore that existing session from the session manager.`:x;return z?.("Could not rename session",I||"Could not rename session.","warning",5000),!1}finally{G.current=!1,K?.(!1);let L=W()+NN;q.current=L;let x=Q?.()||null;if(x)x.inFlight=!1,x.cooldownUntil=L}}async function eF(_){let{hasWindow:$=typeof window<"u",targetChatJid:j=null,currentChatJid:Z,currentBranchRecord:X,currentChatBranches:G=[],activeChatAgents:q=[],pruneChatBranch:Q,refreshActiveChatAgents:K,refreshCurrentChatBranches:V,showIntentToast:Y,baseHref:N,chatOnlyMode:F,navigate:B,confirm:D=(k)=>window.confirm(k)}=_;if(!$)return!1;let z=typeof j==="string"&&j.trim()?j.trim():"",H=typeof Z==="string"&&Z.trim()?Z.trim():"",W=z||X?.chat_jid||H;if(!W)return Y?.("Could not prune branch","No active session is selected yet.","warning",4000),!1;let M=(X?.chat_jid===W?X:null)||G.find((k)=>k?.chat_jid===W)||q.find((k)=>k?.chat_jid===W)||null,E=M?.chat_jid===(M?.root_chat_jid||M?.chat_jid),L=Boolean(E&&W==="web:default"),x=Boolean(E&&G.some((k)=>{let O=typeof k?.chat_jid==="string"?k.chat_jid.trim():"",T=typeof k?.root_chat_jid==="string"?k.root_chat_jid.trim():O;return O&&O!==W&&T===W&&!k?.archived_at}));if(L)return Y?.("Cannot archive session","The default chat session cannot be archived.","warning",4000),!1;if(x)return Y?.("Cannot archive session","Archive or delete the child branch sessions first.","warning",4500),!1;let I=`@${M?.agent_name||W}${M?.chat_jid?` — ${M.chat_jid}`:""}`;if(!D(E?`Archive ${I}?

This removes the session from the session picker. Chat history is preserved.`:`Prune ${I}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return!1;try{await Q(W),await Promise.allSettled([K?.(),V?.()]);let k=E?"web:default":M?.root_chat_jid||"web:default";Y?.(E?"Session archived":"Branch pruned",`${I} has been archived.`,"info",3000);let O=w_(N,k,{chatOnly:F});return B?.(O),!0}catch(k){let O=k instanceof Error?k.message:String(k||"Could not prune branch.");return Y?.("Could not prune branch",O||"Could not prune branch.","warning",5000),!1}}async function _U(_){let{targetChatJid:$,purgeChatBranch:j,currentChatBranches:Z=[],refreshActiveChatAgents:X,refreshCurrentChatBranches:G,showIntentToast:q,confirm:Q=(z)=>window.confirm(z)}=_,K=typeof $==="string"?$.trim():"";if(!K||typeof j!=="function")return!1;let V=Z.find((z)=>z?.chat_jid===K)||null;if(!Boolean(V?.archived_at))return q?.("Could not delete branch","Only archived sessions can be permanently deleted.","warning",4500),!1;let N=Boolean(V?.chat_jid&&V.chat_jid===(V.root_chat_jid||V.chat_jid)),F=`@${V?.agent_name||K}`;if(!Q(`Permanently delete ${F}?

This removes all chat history, token usage, cursor state, scheduled tasks, and session files for this ${N?"session":"branch"}. It cannot be undone.`))return!1;try{return await j(K),await Promise.allSettled([X?.(),G?.()]),q?.(N?"Archived session deleted":"Archived branch deleted",`${F} was permanently deleted.`,"info",4000),!0}catch(z){let H=z instanceof Error?z.message:String(z||`Could not permanently delete archived ${N?"session":"branch"}.`);return q?.("Could not delete branch",H||`Could not permanently delete archived ${N?"session":"branch"}.`,"warning",5000),!1}}async function $U(_){let{targetChatJid:$,restoreChatBranch:j,currentChatBranches:Z=[],refreshActiveChatAgents:X,refreshCurrentChatBranches:G,showIntentToast:q,baseHref:Q,chatOnlyMode:K,navigate:V}=_,Y=typeof $==="string"?$.trim():"";if(!Y||typeof j!=="function")return!1;try{let N=Z.find((W)=>W?.chat_jid===Y)||null,F=await j(Y);await Promise.allSettled([X?.(),G?.()]);let B=F?.branch,D=typeof B?.chat_jid==="string"&&B.chat_jid.trim()?B.chat_jid.trim():Y,z=kV(N?.agent_name,B?.agent_name,D);q?.("Branch restored",z,"info",4200);let H=w_(Q,D,{chatOnly:K});return V?.(H),!0}catch(N){let F=N instanceof Error?N.message:String(N||"Could not restore branch.");return q?.("Could not restore branch",F||"Could not restore branch.","warning",5000),!1}}async function jU(_){let{branchLoaderSourceChatJid:$,forkChatBranch:j,setBranchLoaderState:Z,navigate:X,baseHref:G,isCancelled:q=()=>!1}=_;try{Z?.({status:"running",message:"Preparing a new chat branch…"});let Q=await j($);if(q())return!1;let K=Q?.branch,V=typeof K?.chat_jid==="string"&&K.chat_jid.trim()?K.chat_jid.trim():null;if(!V)throw Error("Branch fork did not return a chat id.");let Y=w_(G,V,{chatOnly:!0});return X?.(Y,{replace:!0}),!0}catch(Q){if(q())return!1;return Z?.({status:"error",message:O4(Q)}),!1}}function XU(_){let{hasWindow:$=typeof window<"u",nextChatJid:j,currentChatJid:Z,chatOnlyMode:X,currentHref:G,navigate:q}=_;if(!$)return!1;let Q=typeof j==="string"?j.trim():"";if(!Q||Q===Z)return!1;let K=w_(G,Q,{chatOnly:X});return q?.(K),!0}function $w(_){return typeof _==="string"?_.trim():""}function jw(_){return new Promise(($)=>setTimeout($,_))}async function ZU(_,$){if(typeof _?.beforeDetachFromHost!=="function")return;await _.beforeDetachFromHost({path:$,target:"popout"})}async function GU(_){let{panePath:$,tabStripActiveId:j,editorInstanceRef:Z,dockInstanceRef:X,terminalTabPath:G,activateTab:q,getActiveTabId:Q,resolveTab:K,buildEditorPopoutTransfer:V}=_,Y=$===G&&Boolean(K?.($));if($===G&&!Y){let z=X.current;if(await ZU(z,$),typeof z?.preparePopoutTransfer!=="function")return null;return await z.preparePopoutTransfer()}let N=()=>$w(Q?.()??j),F=N(),B=Z.current;if(F!==$)q?.($);let D=F===$?Z.current:null;if(typeof D?.preparePopoutTransfer!=="function")for(let z=0;z<12;z+=1){if(z>0)await jw(16);else await Promise.resolve();let H=N(),W=Z.current,M=H===$,E=W!==B;if(!M||typeof W?.preparePopoutTransfer!=="function")continue;if(F===$||E||z>0){D=W;break}}if(await ZU(D,$),typeof D?.preparePopoutTransfer==="function"){let z=await D.preparePopoutTransfer();if(z)return z}return V?.($)??null}function qU(_){let{panePath:$,terminalTabPath:j,dockVisible:Z,resolveTab:X,closeTab:G,setDockVisible:q}=_,Q=X($);if(Q&&!Q.dirty){G($);return}if($===j&&Z)q(!1)}function QU(_){let{hasWindow:$=typeof window<"u",editorOpen:j,shellElement:Z,editorWidthRef:X,dockHeightRef:G,sidebarWidthRef:q,readStoredNumber:Q}=_;if(!j||!$||!Z)return;if(!X.current){let K=Q("editorWidth",null),V=q.current||280,Y=Number.isFinite(K)?Number(K):V;X.current=J6(Y,typeof window<"u"?window.innerWidth:0,q.current||0)}if(Z.style.setProperty("--editor-width",`${X.current}px`),!G.current){let K=Q("dockHeight",null);G.current=Number.isFinite(K)?Number(K):200}Z.style.setProperty("--dock-height",`${G.current}px`)}y1();async function VU(_){if(typeof _!=="function")return null;try{return await _()}catch{return null}}async function KU(_){let{currentChatJid:$,chatOnlyMode:j,forkChatBranch:Z,refreshActiveChatAgents:X,refreshCurrentChatBranches:G,showIntentToast:q,navigate:Q,baseHref:K}=_;if(typeof Q==="function")try{let V=_7(K,$,{chatOnly:j});return Q(V),!0}catch(V){return q?.("Could not create branch",O4(V),"warning",5000),!1}try{let Y=(await Z($))?.branch,N=typeof Y?.chat_jid==="string"&&Y.chat_jid.trim()?Y.chat_jid.trim():null;if(!N)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([X?.(),G?.()]);let F=Y?.agent_name?`@${Y.agent_name}`:N;q?.("New branch created",`Switched to ${F}.`,"info",2500);let B=w_(K,N,{chatOnly:j});return Q?.(B),!0}catch(V){return q?.("Could not create branch",O4(V),"warning",5000),!1}}async function YU(_){let{rootName:$,chatOnlyMode:j,createRootChatSession:Z,refreshActiveChatAgents:X,refreshCurrentChatBranches:G,showIntentToast:q,navigate:Q,baseHref:K}=_,V=String($||"").trim();if(!V)return!1;try{let F=(await(typeof Z==="function"?Z:s7)(V))?.branch,B=typeof F?.chat_jid==="string"&&F.chat_jid.trim()?F.chat_jid.trim():null;if(!B)throw Error("Root session creation did not return a chat id.");await Promise.allSettled([X?.(),G?.()]);let D=F?.agent_name?`@${F.agent_name}`:B;q?.("Root session created",`Switched to ${D}.`,"info",2500);let z=w_(K,B,{chatOnly:j});return Q?.(z),!0}catch(Y){return q?.("Could not create root session",O4(Y),"warning",5000),!1}}async function NU(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,path:Z,label:X,showIntentToast:G,resolveSourceTransfer:q,closeSourcePaneIfTransferred:Q,onPaneWindowOpened:K,currentChatJid:V,baseHref:Y}=_;if(!$||j)return!1;let N=typeof Z==="string"&&Z.trim()?Z.trim():"";if(!N)return!1;let F=WX(N);if(!F)return G?.("Could not open pane window","Opening pane windows is unavailable in standalone webapp mode.","warning",5000),!1;let B=s3(F);if(!B)return G?.("Could not open pane window","The browser blocked opening a new tab or window.","warning",5000),!1;a3(B,{title:typeof X==="string"&&X.trim()?`Opening ${X}…`:"Opening pane…",message:"Preparing a standalone pane window. This should only take a moment."});try{let D=await q?.(N),z=Boolean(D&&Object.keys(D).length>0),H=HX(Y,N,{label:typeof X==="string"&&X.trim()?X.trim():void 0,chatJid:V,params:D});if(t3(B,H),K?.(N,B,D||null),z&&!K)Q?.(N);return!0}catch(D){e3(B);let z=D instanceof Error?D.message:"Could not transfer pane state to the new window.";return G?.("Could not open pane window",z,"warning",5000),!1}}async function BU(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,currentChatJid:Z,currentRootChatJid:X,forkChatBranch:G,getActiveChatAgents:q,getChatBranches:Q,setActiveChatAgents:K,setCurrentChatBranches:V,showIntentToast:Y,baseHref:N}=_;if(!$||j)return!1;let F=zX(Z);if(!F)return Y?.("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000),!1;if(F.mode==="tab"){let D=_7(N,Z,{chatOnly:!0});if(!window.open(D,F.target))return Y?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;return!0}let B=s3(F);if(!B)return Y?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;a3(B,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let z=(await G(Z))?.branch,H=typeof z?.chat_jid==="string"&&z.chat_jid.trim()?z.chat_jid.trim():null;if(!H)throw Error("Branch fork did not return a chat id.");let W=await VU(()=>q?.());if(W)K?.(Array.isArray(W?.chats)?W.chats:[]);let M=await VU(()=>Q?.(X));if(M)V?.(Array.isArray(M?.chats)?M.chats:[]);let E=w_(N,H,{chatOnly:!0});return t3(B,E),!0}catch(D){return e3(B),Y?.("Could not open branch window",O4(D),"error",5000),!1}}function Zw(_){_(($)=>!$)}function Xw(_){let{nextChatJid:$,currentChatJid:j,chatOnlyMode:Z,navigate:X,hasWindow:G=typeof window<"u",currentHref:q=G?window.location.href:"http://localhost/"}=_;return XU({hasWindow:G,nextChatJid:$,currentChatJid:j,chatOnlyMode:Z,currentHref:q,navigate:X})}function Gw(_){let{currentBranchRecord:$,renameBranchInFlight:j,renameBranchLockUntil:Z,getFormLock:X,setRenameBranchNameDraft:G,setIsRenameBranchFormOpen:q,hasWindow:Q=typeof window<"u"}=_;return sF({hasWindow:Q,currentBranchRecord:$,renameBranchInFlight:j,renameBranchLockUntil:Z,getFormLock:X,setRenameBranchNameDraft:G,setIsRenameBranchFormOpen:q})}function qw(_){aF(_)}async function Qw(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...Z}=_;await tF({hasWindow:$,baseHref:String(j||"").trim()||($?window.location.href:"http://localhost/"),...Z})}async function Vw(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...Z}=_;await eF({hasWindow:$,baseHref:j,...Z})}async function Kw(_){await _U(_)}async function Yw(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...Z}=_;await $U({baseHref:j,...Z})}function Nw(_){let{branchLoaderMode:$,branchLoaderSourceChatJid:j,forkChatBranch:Z,setBranchLoaderState:X,navigate:G,hasWindow:q=typeof window<"u",baseHref:Q=q?window.location.href:"http://localhost/",runBranchLoaderImpl:K=jU}=_;if(!$||!q)return;let V=!1;return K({branchLoaderSourceChatJid:j,forkChatBranch:Z,setBranchLoaderState:X,navigate:G,baseHref:Q,isCancelled:()=>V}),()=>{V=!0}}async function Bw(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...Z}=_;await KU({baseHref:j,...Z})}async function Fw(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...Z}=_;await YU({baseHref:j,...Z})}async function Uw(_){let{isWebAppMode:$,path:j,label:Z,showIntentToast:X,currentChatJid:G,activateTab:q,tabStripActiveId:Q,editorInstanceRef:K,dockInstanceRef:V,terminalTabPath:Y,tabPaneOverrides:N,buildPaneDetachTransfer:F,registerDetachedPaneWindow:B,dockVisible:D,resolveTab:z,closeTab:H,setDockVisible:W,hasWindow:M=typeof window<"u",baseHref:E=M?window.location.href:"http://localhost/"}=_,L=F?.(j)||null;return await NU({hasWindow:M,isWebAppMode:$,path:j,label:Z,showIntentToast:X,currentChatJid:G,baseHref:E,resolveSourceTransfer:async(x)=>{let I=await GU({panePath:x,activateTab:q,getActiveTabId:()=>e0.getActiveId(),tabStripActiveId:Q,editorInstanceRef:K,dockInstanceRef:V,terminalTabPath:Y,resolveTab:z,buildEditorPopoutTransfer:(T)=>{if(!T||T===Y)return null;let y=K.current,A=typeof y?.getContent==="function"?y.getContent():void 0,P=typeof y?.isDirty==="function"?y.isDirty():!1,f=N instanceof Map?N.get(T)||null:null,u=e0.getViewState(T)||null;return W2({path:T,content:P?A:void 0,paneOverrideId:f,viewState:u})}}),J=x===Y&&!z(x)?V.current:K.current,k=typeof J?.exportHostTransferState==="function"?J.exportHostTransferState():null,O=k?j3({path:x,payload:k}):null;if(L?.paneInstanceId&&L?.paneWindowId&&J&&x!==Y&&k?.kind!=="terminal")S5({panePath:x,paneInstanceId:L.paneInstanceId,paneWindowId:L.paneWindowId,instance:J,releaseSourceHost:()=>{if(x===Y){if(V.current===J)V.current=null;if(K.current===J)K.current=null;return}if(K.current===J)K.current=null}});return{...I||{},...O||{},...L?.params||{}}},onPaneWindowOpened:B?(x,I,J)=>{B(x,Z,I,J)}:void 0,closeSourcePaneIfTransferred:B?void 0:(x)=>{qU({panePath:x,terminalTabPath:Y,dockVisible:D,resolveTab:z,closeTab:H,setDockVisible:W})}})}function Dw(_){let{openEditor:$,popOutPane:j,watchPaneOpenEventsImpl:Z=pF}=_;return Z({openTab:(X,G)=>$(X,G?{label:G}:void 0),editSource:(X,G)=>$(X,{...G?{label:G}:{},paneOverrideId:"editor"}),popOutPane:(X,G)=>{j(X,G)}})}async function zw(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...Z}=_;await BU({hasWindow:$,baseHref:j,...Z})}function Hw(_){let{hasWindow:$=typeof window<"u",...j}=_;QU({hasWindow:$,...j})}function FU(_){let{setWorkspaceOpen:$,currentChatJid:j,chatOnlyMode:Z,navigate:X,currentBranchRecord:G,renameBranchInFlightRef:q,renameBranchLockUntilRef:Q,getFormLock:K,setRenameBranchNameDraft:V,setIsRenameBranchFormOpen:Y,setIsRenamingBranch:N,renameChatBranch:F,refreshActiveChatAgents:B,refreshCurrentChatBranches:D,showIntentToast:z,currentChatBranches:H,activeChatAgents:W,pruneChatBranch:M,purgeChatBranch:E,restoreChatBranch:L,branchLoaderMode:x,branchLoaderSourceChatJid:I,forkChatBranch:J,createRootChatSession:k,setBranchLoaderState:O,currentRootChatJid:T,isWebAppMode:y,getActiveChatAgents:A,getChatBranches:P,setActiveChatAgents:f,setCurrentChatBranches:u,openEditor:c,activateTab:r,tabStripActiveId:e,editorInstanceRef:m,dockInstanceRef:$0,terminalTabPath:W0,tabPaneOverrides:X0,buildPaneDetachTransfer:Z0,registerDetachedPaneWindow:q0,dockVisible:D0,resolveTab:h,closeTab:j0,setDockVisible:Y0,editorOpen:L0,shellElement:s,editorWidthRef:Q0,dockHeightRef:O0,sidebarWidthRef:x0,readStoredNumber:r0}=_,l0=R(()=>{Zw($)},[$]),n0=R((J0)=>{Xw({nextChatJid:J0,currentChatJid:j,chatOnlyMode:Z,navigate:X})},[Z,j,X]),m0=R(()=>{Gw({currentBranchRecord:G,renameBranchInFlight:q.current,renameBranchLockUntil:Q.current,getFormLock:K,setRenameBranchNameDraft:V,setIsRenameBranchFormOpen:Y})},[G,K,q,Q,Y,V]),_1=R(()=>{qw({setIsRenameBranchFormOpen:Y,setRenameBranchNameDraft:V})},[Y,V]),S0=R(async(J0)=>{await Qw({currentBranchRecord:G,nextName:J0,openRenameForm:m0,renameBranchInFlightRef:q,renameBranchLockUntilRef:Q,getFormLock:K,setIsRenamingBranch:N,renameChatBranch:F,refreshActiveChatAgents:B,refreshCurrentChatBranches:D,navigate:X,chatOnlyMode:Z,showIntentToast:z,closeRenameForm:_1})},[_1,G,Z,K,X,m0,B,D,q,Q,F,N,z]),o0=R(async(J0=null)=>{await Vw({targetChatJid:J0,currentChatJid:j,currentBranchRecord:G,currentChatBranches:H,activeChatAgents:W,pruneChatBranch:M,refreshActiveChatAgents:B,refreshCurrentChatBranches:D,showIntentToast:z,chatOnlyMode:Z,navigate:X})},[W,Z,G,H,j,X,M,B,D,z]),c0=R(async(J0)=>{await Kw({targetChatJid:J0,purgeChatBranch:E,currentChatBranches:H,refreshActiveChatAgents:B,refreshCurrentChatBranches:D,showIntentToast:z})},[H,E,B,D,z]),$1=R(async(J0)=>{await Yw({targetChatJid:J0,restoreChatBranch:L,currentChatBranches:H,refreshActiveChatAgents:B,refreshCurrentChatBranches:D,showIntentToast:z,chatOnlyMode:Z,navigate:X})},[Z,H,X,B,D,L,z]);b(()=>Nw({branchLoaderMode:x,branchLoaderSourceChatJid:I,forkChatBranch:J,setBranchLoaderState:O,navigate:X}),[x,I,J,X,O]);let i0=R(async()=>{await Bw({currentChatJid:j,chatOnlyMode:Z,forkChatBranch:J,refreshActiveChatAgents:B,refreshCurrentChatBranches:D,showIntentToast:z,navigate:X})},[Z,j,J,X,B,D,z]),H1=R(async(J0)=>{await Fw({rootName:J0,chatOnlyMode:Z,createRootChatSession:k,refreshActiveChatAgents:B,refreshCurrentChatBranches:D,showIntentToast:z,navigate:X})},[Z,k,X,B,D,z]),Q1=R(async(J0,z1)=>{return await Uw({isWebAppMode:y,path:J0,label:z1,showIntentToast:z,currentChatJid:j,activateTab:r,tabStripActiveId:e,editorInstanceRef:m,dockInstanceRef:$0,terminalTabPath:W0,tabPaneOverrides:X0,buildPaneDetachTransfer:Z0,registerDetachedPaneWindow:q0,dockVisible:D0,resolveTab:h,closeTab:j0,setDockVisible:Y0})},[r,Z0,j0,j,$0,D0,m,y,q0,h,Y0,z,X0,e,W0]);b(()=>Dw({openEditor:c,popOutPane:(J0,z1)=>{Q1(J0,z1)}}),[Q1,c]);let P0=R(async()=>{await zw({isWebAppMode:y,currentChatJid:j,currentRootChatJid:T,forkChatBranch:J,getActiveChatAgents:A,getChatBranches:P,setActiveChatAgents:f,setCurrentChatBranches:u,showIntentToast:z})},[j,T,J,A,P,y,f,u,z]);return b(()=>{Hw({editorOpen:L0,shellElement:s,editorWidthRef:Q0,dockHeightRef:O0,sidebarWidthRef:x0,readStoredNumber:r0})},[O0,L0,Q0,r0,s,x0]),{toggleWorkspace:l0,handleBranchPickerChange:n0,openRenameCurrentBranchForm:m0,closeRenameCurrentBranchForm:_1,handleRenameCurrentBranch:S0,handlePruneCurrentBranch:o0,handlePurgeArchivedBranch:c0,handleRestoreBranch:$1,handleCreateSessionFromCompose:i0,handleCreateRootSessionFromCompose:H1,handlePopOutPane:Q1,handlePopOutChat:P0}}M0();function G4(_){return _.status==="fulfilled"?_.value:null}function Z3(_){return Math.max(0,Math.min(100,_))}function UU(_){let $=Array.isArray(_.timelinePayload?.posts)?_.timelinePayload.posts:Array.isArray(_.rawPosts)?_.rawPosts:[],j=$.length?$[$.length-1]:null,Z=$.filter((H)=>H?.data?.is_bot_message).length,X=$.filter((H)=>!H?.data?.is_bot_message).length,G=Number(_.queuePayload?.count??_.followupQueueItems?.length??0)||0,q=Array.isArray(_.activeChatsPayload?.chats)?_.activeChatsPayload.chats.length:Array.isArray(_.activeChatAgents)?_.activeChatAgents.length:0,Q=Array.isArray(_.branchesPayload?.chats)?_.branchesPayload.chats.length:Array.isArray(_.currentChatBranches)?_.currentChatBranches.length:0,K=Number(_.contextPayload?.percent??_.contextUsage?.percent??0)||0,V=Number(_.contextPayload?.tokens??_.contextUsage?.tokens??0)||0,Y=Number(_.contextPayload?.contextWindow??_.contextUsage?.contextWindow??0)||0,N=_.modelsPayload?.current??_.activeModel??null,F=_.modelsPayload?.thinking_level??_.activeThinkingLevel??null,B=_.modelsPayload?.supports_thinking??_.supportsThinking,D=_.statusPayload?.status||(_.isAgentTurnActive?"active":"idle"),z=_.statusPayload?.data?.type||_.statusPayload?.type||null;return{generatedAt:_.generatedAt,request:_.request,chat:{currentChatJid:_.currentChatJid,rootChatJid:_.currentRootChatJid,activeChats:q,branches:Q},agent:{status:D,phase:z,running:Boolean(_.isAgentTurnActive)},model:{current:N,thinkingLevel:F,supportsThinking:Boolean(B)},context:{tokens:V,contextWindow:Y,percent:K},queue:{count:G},timeline:{loadedPosts:$.length,botPosts:Z,userPosts:X,latestPostId:j?.id??null,latestTimestamp:j?.timestamp??null},bars:[{key:"context",label:"Context",value:Z3(Math.round(K))},{key:"queue",label:"Queue",value:Z3(G*18)},{key:"activeChats",label:"Active chats",value:Z3(q*12)},{key:"posts",label:"Timeline load",value:Z3($.length*5)}]}}function DU(_){if(_==="followup")return{title:"Widget submission queued",detail:"The widget message was queued because the agent is busy.",kind:"info",durationMs:3500};return{title:"Widget submission sent",detail:"The widget message was sent to the chat.",kind:"info",durationMs:3500}}function zU(_){return{title:"Widget submission failed",detail:_||"Could not send the widget message.",kind:"warning",durationMs:5000}}function HU(_,$){return{shouldBuildDashboard:_?.buildDashboard!==!1,nextRefreshCount:Number($||0)+1}}function WU(){return{title:"Dashboard built",detail:"Live dashboard state pushed into the widget.",kind:"info",durationMs:3000}}function OU(_){return{title:"Dashboard build failed",detail:_||"Could not build dashboard.",kind:"warning",durationMs:5000}}function LU(){return{title:"Widget refresh requested",detail:"The widget received a host acknowledgement update.",kind:"info",durationMs:3000}}async function JU(_){let{requestPayload:$=null,currentChatJid:j,currentRootChatJid:Z,getAgentStatus:X,getAgentContext:G,getAgentQueueState:q,getAgentModels:Q,getActiveChatAgents:K,getChatBranches:V,getTimeline:Y,rawPosts:N,activeChatAgents:F,currentChatBranches:B,contextUsage:D,followupQueueItems:z,activeModel:H,activeThinkingLevel:W,supportsThinking:M,isAgentTurnActive:E}=_,[L,x,I,J,k,O,T]=await Promise.allSettled([X(j),G(j),q(j),Q(j),K(),V(Z),Y(20,null,j)]);return UU({generatedAt:new Date().toISOString(),request:$,currentChatJid:j,currentRootChatJid:Z,statusPayload:G4(L),contextPayload:G4(x),queuePayload:G4(I),modelsPayload:G4(J),activeChatsPayload:G4(k),branchesPayload:G4(O),timelinePayload:G4(T),rawPosts:N,activeChatAgents:F,currentChatBranches:B,contextUsage:D,followupQueueItems:z,activeModel:H,activeThinkingLevel:W,supportsThinking:M,isAgentTurnActive:E})}function EU(_){let{queuedItem:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:Z,currentChatJid:X,refreshQueueState:G,setFollowupQueueItems:q,showIntentToast:Q,steerAgentQueueItem:K}=_,V=R5(j.current,$);if(!V)return;let{rowId:Y}=V;Z.current.add(Y),q((N)=>Z4(N,Y).items),K(Y,dj(X)).then(()=>{G()}).catch((N)=>{console.warn("[queue] Failed to steer queued item:",N);let F=GZ("steer");Q(F.title,F.detail,"warning"),Z.current.delete(Y),G()})}function AU(_){let{queuedItem:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:Z,currentChatJid:X,refreshQueueState:G,setFollowupQueueItems:q,showIntentToast:Q,clearQueuedSteerStateIfStale:K,removeAgentQueueItem:V}=_,Y=R5(j.current,$);if(!Y)return;let{rowId:N}=Y;Z.current.add(N),K?.(Y.remainingQueueCount),q((F)=>Z4(F,N).items),V(N,dj(X)).then(()=>{G()}).catch((F)=>{console.warn("[queue] Failed to remove queued item:",F);let B=GZ("remove");Q(B.title,B.detail,"warning"),Z.current.delete(N),G()})}function MU(_){let{widget:$,dismissedLiveWidgetKeysRef:j,setFloatingWidget:Z}=_;if(!$||typeof $!=="object")return;let X=W_($);if(X)j.current.delete(X);Z(UF($,new Date().toISOString()))}function kU(_){let{dismissedLiveWidgetKeysRef:$,setFloatingWidget:j}=_;j((Z)=>{let X=DF(Z);if(X.dismissedSessionKey)$.current.add(X.dismissedSessionKey);return X.nextWidget})}function TU(_){let{event:$,widget:j,currentChatJid:Z,isComposeBoxAgentActive:X,setFloatingWidget:G,handleCloseFloatingWidget:q,handleMessageResponse:Q,showIntentToast:K,sendAgentMessage:V,buildFloatingWidgetDashboardSnapshot:Y}=_,N=typeof $?.kind==="string"?$.kind:"",F=W_(j);if(!N||!F)return;if(N==="widget.close"){q();return}if(N==="widget.submit"){let B=_K($?.payload),D=$K($?.payload),z=new Date().toISOString();if(G((H)=>WF(H,F,{kind:N,payload:$?.payload||null,submittedAt:z,submissionText:B})),!B){if(K("Widget submission received","The widget submitted data without a message payload yet.","info",3500),D)q();return}(async()=>{try{let H=await V("default",B,null,[],X?"queue":null,Z);Q(H),G((M)=>XZ(M,F,{submittedAt:z,submissionText:B,queued:H?.queued||null}));let W=DU(H?.queued);if(K(W.title,W.detail,W.kind,W.durationMs),D)q()}catch(H){G((M)=>XZ(M,F,{submittedAt:z,submissionText:B,errorMessage:H?.message||"Could not send the widget message."}));let W=zU(H?.message);K(W.title,W.detail,W.kind,W.durationMs)}})();return}if(N==="widget.ready"||N==="widget.request_refresh"){let B=new Date().toISOString(),D=HU($?.payload||null,j?.runtimeState?.refreshCount);if(G((z)=>OF(z,F,{kind:N,payload:$?.payload||null,eventAt:B,nextRefreshCount:D.nextRefreshCount,shouldBuildDashboard:D.shouldBuildDashboard})),N==="widget.request_refresh")if(D.shouldBuildDashboard)(async()=>{try{let z=await Y($?.payload||null);G((W)=>LF(W,F,{dashboard:z,at:new Date().toISOString(),count:D.nextRefreshCount,echo:$?.payload||null}));let H=WU();K(H.title,H.detail,H.kind,H.durationMs)}catch(z){G((W)=>JF(W,F,{errorMessage:z?.message||"Could not build dashboard.",at:new Date().toISOString(),count:D.nextRefreshCount}));let H=OU(z?.message);K(H.title,H.detail,H.kind,H.durationMs)}})();else{let z=LU();K(z.title,z.detail,z.kind,z.durationMs)}}}function Ww(_,$=EU){$(_)}function Ow(_,$=AU){$(_)}function Lw(_,$,j=YF){j({response:_,refreshActiveChatAgents:$.refreshActiveChatAgents,refreshCurrentChatBranches:$.refreshCurrentChatBranches,refreshContextUsage:$.refreshContextUsage,refreshAutoresearchStatus:$.refreshAutoresearchStatus,refreshQueueState:$.refreshQueueState})}function yU(_){let{currentChatJid:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:Z,refreshQueueState:X,setFollowupQueueItems:G,showIntentToast:q,clearQueuedSteerStateIfStale:Q,steerAgentQueueItem:K,removeAgentQueueItem:V,refreshActiveChatAgents:Y,refreshCurrentChatBranches:N,refreshContextUsage:F,refreshAutoresearchStatus:B}=_,D=R((M)=>{Ww({queuedItem:M,followupQueueItemsRef:j,dismissedQueueRowIdsRef:Z,currentChatJid:$,refreshQueueState:X,setFollowupQueueItems:G,showIntentToast:q,steerAgentQueueItem:K,removeAgentQueueItem:V})},[$,Z,j,X,V,G,q,K]),z=R((M)=>{Ow({queuedItem:M,followupQueueItemsRef:j,dismissedQueueRowIdsRef:Z,currentChatJid:$,refreshQueueState:X,setFollowupQueueItems:G,showIntentToast:q,clearQueuedSteerStateIfStale:Q,steerAgentQueueItem:K,removeAgentQueueItem:V})},[Q,$,Z,j,X,V,G,q,K]),H=R(async(M,E)=>{G((L)=>{if(!Array.isArray(L)||M<0||E<0||M>=L.length||E>=L.length||M===E)return L;let x=[...L],[I]=x.splice(M,1);return x.splice(E,0,I),x});try{let{reorderAgentQueueItem:L}=await Promise.resolve().then(() => (y1(),H6));await L(M,E,$)}catch(L){console.warn("Failed to persist queue reorder:",L),X()}},[$,X,G]),W=R((M)=>{Lw(M,{refreshActiveChatAgents:Y,refreshCurrentChatBranches:N,refreshContextUsage:F,refreshAutoresearchStatus:B,refreshQueueState:X})},[Y,B,F,N,X]);return{handleInjectQueuedFollowup:D,handleRemoveQueuedFollowup:z,handleMoveQueuedFollowup:H,handleMessageResponse:W}}M0();function wU(_){let{btwAbortRef:$,setBtwSession:j}=_;if($.current)$.current.abort(),$.current=null;j(null)}async function IU(_){let{question:$,currentChatJid:j,streamSidePrompt:Z,resolveBtwChatJid:X,showIntentToast:G,btwAbortRef:q,setBtwSession:Q}=_,K=String($||"").trim();if(!K)return G("BTW needs a question","Usage: /btw <question>","warning"),!0;if(q.current)q.current.abort();let V=new AbortController;q.current=V,Q({question:K,answer:"",thinking:"",error:null,model:null,status:"running"});try{let Y=await Z(K,{signal:V.signal,chatJid:X(j),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(N)=>{if(N==="side_prompt_start")Q((F)=>F?{...F,status:"running"}:F)},onThinkingDelta:(N)=>{Q((F)=>F?{...F,thinking:`${F.thinking||""}${N||""}`}:F)},onTextDelta:(N)=>{Q((F)=>F?{...F,answer:`${F.answer||""}${N||""}`}:F)}});if(q.current!==V)return!0;Q((N)=>N?{...N,answer:Y?.result||N.answer||"",thinking:Y?.thinking||N.thinking||"",model:Y?.model||null,status:"success",error:null}:N)}catch(Y){if(V.signal.aborted)return!0;Q((N)=>N?{...N,status:"error",error:Y?.payload?.error||Y?.message||"BTW request failed."}:N)}finally{if(q.current===V)q.current=null}return!0}async function xU(_){let{content:$,parseBtwCommand:j,closeBtwPanel:Z,runBtwPrompt:X,showIntentToast:G}=_,q=j($);if(!q)return!1;if(q.type==="help")return G("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(q.type==="clear")return Z(),G("BTW cleared","Closed the side conversation panel.","info"),!0;if(q.type==="ask")return await X(q.question),!0;return!1}async function CU(_){let{btwSession:$,buildBtwInjectionText:j,isComposeBoxAgentActive:Z,currentChatJid:X,sendAgentMessage:G,handleMessageResponse:q,showIntentToast:Q}=_,K=j($);if(!K)return!1;try{let V=await G("default",K,null,[],Z?"queue":null,X);return q(V),Q(V?.queued==="followup"?"BTW queued":"BTW injected",V?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500),!0}catch(V){return Q("BTW inject failed",V?.message||"Could not inject BTW answer into chat.","warning"),!1}}async function Jw(_){let $=typeof _==="string"?_:"";if(!$)return!1;let j=null;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch(Z){j=Z}try{let Z=document.createElement("textarea");Z.value=$,Z.setAttribute("readonly",""),Z.style.position="fixed",Z.style.opacity="0",Z.style.pointerEvents="none",document.body.appendChild(Z),Z.select(),Z.setSelectionRange(0,Z.value.length);let X=document.execCommand("copy");return document.body.removeChild(Z),X}catch(Z){return console.debug("[sidepanel] Clipboard copy failed after falling back from navigator.clipboard.",Z,{clipboardApiAvailable:Boolean(navigator.clipboard?.writeText),clipboardApiError:j}),!1}}function Ew(_){let{dismissedLiveWidgetKeysRef:$,setFloatingWidget:j}=_;$.current.clear(),j(null)}function PU(_){let{currentChatJid:$,currentRootChatJid:j,isComposeBoxAgentActive:Z,showIntentToast:X,setPendingExtensionPanelActions:G,refreshAutoresearchStatus:q,stopAutoresearch:Q,dismissAutoresearch:K,streamSidePrompt:V,btwAbortRef:Y,btwSession:N,setBtwSession:F,sendAgentMessage:B,handleMessageResponse:D,dismissedLiveWidgetKeysRef:z,setFloatingWidget:H,getAgentStatus:W,getAgentContext:M,getAgentQueueState:E,getAgentModels:L,getActiveChatAgents:x,getChatBranches:I,getTimeline:J,rawPosts:k,activeChatAgents:O,currentChatBranches:T,contextUsage:y,followupQueueItemsRef:A,activeModel:P,activeThinkingLevel:f,supportsThinking:u,isAgentTurnActive:c}=_,r=R(async(j0,Y0)=>{let L0=typeof j0?.key==="string"?j0.key:"",s=typeof Y0?.key==="string"?Y0.key:"",Q0=$Z(L0,s);if(!L0||!s)return;G((O0)=>PB(O0,L0,s));try{let O0=await RB({panel:j0,action:Y0,currentChatJid:$,stopAutoresearch:Q,dismissAutoresearch:K,writeClipboard:async(x0)=>{if(!await Jw(x0))throw Error("Clipboard access is unavailable.")}});if(O0.refreshAutoresearchStatus)q();if(O0.toast)X(O0.toast.title,O0.toast.detail,O0.toast.kind,O0.toast.durationMs)}catch(O0){X("Panel action failed",O0?.message||"Could not complete that action.","warning")}finally{G((O0)=>fB(O0,Q0))}},[$,K,q,G,X,Q]),e=R(()=>{wU({btwAbortRef:Y,setBtwSession:F})},[Y,F]),m=R(async(j0)=>{return await IU({question:j0,currentChatJid:$,streamSidePrompt:V,resolveBtwChatJid:hV,showIntentToast:X,btwAbortRef:Y,setBtwSession:F})},[Y,$,F,X,V]),$0=R(async({content:j0})=>{return await xU({content:j0,parseBtwCommand:cV,closeBtwPanel:e,runBtwPrompt:m,showIntentToast:X})},[e,m,X]),W0=R(()=>{if(N?.question)m(N.question)},[N,m]),X0=R(async()=>{await CU({btwSession:N,buildBtwInjectionText:rV,isComposeBoxAgentActive:Z,currentChatJid:$,sendAgentMessage:B,handleMessageResponse:D,showIntentToast:X})},[N,$,D,Z,B,X]),Z0=R(async(j0=null)=>{return JU({requestPayload:j0,currentChatJid:$,currentRootChatJid:j,getAgentStatus:W,getAgentContext:M,getAgentQueueState:E,getAgentModels:L,getActiveChatAgents:x,getChatBranches:I,getTimeline:J,rawPosts:k,activeChatAgents:O,currentChatBranches:T,contextUsage:y,followupQueueItems:A.current,activeModel:P,activeThinkingLevel:f,supportsThinking:u,isAgentTurnActive:c})},[O,P,f,y,T,$,j,A,x,M,L,E,W,I,J,c,k,u]),q0=R((j0)=>{MU({widget:j0,dismissedLiveWidgetKeysRef:z,setFloatingWidget:H})},[z,H]),D0=R(()=>{kU({dismissedLiveWidgetKeysRef:z,setFloatingWidget:H})},[z,H]),h=R((j0,Y0)=>{TU({event:j0,widget:Y0,currentChatJid:$,isComposeBoxAgentActive:Z,setFloatingWidget:H,handleCloseFloatingWidget:D0,handleMessageResponse:D,showIntentToast:X,sendAgentMessage:B,buildFloatingWidgetDashboardSnapshot:Z0})},[Z0,$,D0,D,Z,B,H,X]);return b(()=>{Ew({dismissedLiveWidgetKeysRef:z,setFloatingWidget:H})},[$,z,H]),{handleExtensionPanelAction:r,closeBtwPanel:e,handleBtwIntercept:$0,handleBtwRetry:W0,handleBtwInject:X0,handleOpenFloatingWidget:q0,handleCloseFloatingWidget:D0,handleFloatingWidgetEvent:h}}M0();function Aw(_){let{hasDockPanes:$,chatOnlyMode:j}=_;return Boolean($&&!j)}function Mw(_){return!_}function fU(_){let{hasDockPanes:$,chatOnlyMode:j,toggleDock:Z,toggleZenMode:X,exitZenMode:G,zenMode:q,previousChat:Q,nextChat:K}=_;b(()=>{if(!Aw({hasDockPanes:$,chatOnlyMode:j}))return;return rF(Z)},[j,$,Z]),b(()=>{if(!Mw(j))return;return nF({toggleZenMode:X,exitZenMode:G,zenMode:q,isZenModeActive:()=>q})},[j,G,X,q]),b(()=>{if(typeof Q!=="function"&&typeof K!=="function")return;return dF({previousChat:Q,nextChat:K})},[K,Q]),b(()=>iF(),[]),b(()=>oF(),[])}function kw(_){return Boolean(_&&typeof _.closest==="function")}function RU(_=typeof window<"u"?window:null){if(!_||typeof _.getSelection!=="function")return!1;try{let $=_.getSelection();if(!$||$.isCollapsed)return!1;return String($.toString()||"").trim().length>0}catch{return!1}}function Tw(){return{active:!1,horizontalLocked:!1,cancelled:!1,startX:0,startY:0,lastX:0,lastY:0,startedAt:0}}function yw(){return{lastTriggeredAt:0,accumX:0}}function VZ(_){if(!_)return;_.active=!1,_.horizontalLocked=!1,_.cancelled=!1,_.startX=0,_.startY=0,_.lastX=0,_.lastY=0,_.startedAt=0}var ww=["input","textarea","select","button","label","a[href]",'[contenteditable="true"]','[role="button"]',"[data-no-chat-swipe]",".compose-box",".compose-model-popup",".compose-session-popup",".workspace-explorer",".editor-pane-container",".dock-panel",".terminal-pane-content",".attachment-preview-modal",".rename-branch-overlay",".agent-request-modal",".adaptive-card-container",".adaptive-card-container input",".adaptive-card-container textarea",".adaptive-card-container select",".adaptive-card-container button"].join(", "),Iw=[".agent-thinking",".agent-status-panel",".agent-thinking-intent"].join(", ");function SU(_){if(!_||!kw(_))return!1;let $=_.closest(ww);if(!$)return!0;return Boolean($.closest(Iw))}function gU(_,$){if(!Array.isArray(_))return $?[$]:[];let j=new Set,Z=_.filter((G)=>Boolean(G&&typeof G==="object")).filter((G)=>{let q=typeof G.chat_jid==="string"?G.chat_jid.trim():"";if(!q||j.has(q))return!1;if(G.archived_at)return!1;return j.add(q),!0});Z.sort((G,q)=>{if(Boolean(G.is_active)!==Boolean(q.is_active))return G.is_active?-1:1;return String(G.chat_jid).localeCompare(String(q.chat_jid))});let X=Z.map((G)=>String(G.chat_jid).trim());if($&&!j.has($))X.unshift($);return X}function KZ(_){let $=gU(_.candidates,_.currentChatJid);if($.length<=1)return null;let j=$.indexOf(_.currentChatJid);if(j<0)return $[0]??null;let Z=_.direction==="next"?(j+1)%$.length:(j-1+$.length)%$.length;return $[Z]??null}function bU(_,$){let j=_.find((X)=>X.chat_jid===$);if(!j)return $.replace(/^[^:]+:/,"");return(typeof j.agent_name==="string"?j.agent_name.trim():"")||$.replace(/^[^:]+:/,"")}function xw(_){let $=gU(_.candidates,_.currentChatJid);if($.length<=1)return{prev:null,next:null};let j=$.indexOf(_.currentChatJid);if(j<0)return{prev:null,next:null};let Z=$[(j-1+$.length)%$.length],X=$[(j+1)%$.length];return{prev:{chatJid:Z,name:bU(_.candidates,Z)},next:{chatJid:X,name:bU(_.candidates,X)}}}function Cw(_){let $=Number.isFinite(_.minDistancePx)?Number(_.minDistancePx):72,j=Number.isFinite(_.axisRatio)?Number(_.axisRatio):1.35;return Math.abs(_.dx)>=$&&Math.abs(_.dx)>Math.abs(_.dy)*j}function Pw(_){let $=document.querySelector(".chat-swipe-indicator");if(!$)$=document.createElement("div"),$.className="chat-swipe-indicator",$.innerHTML='<span class="chat-swipe-chevron"></span><span class="chat-swipe-name"></span>',document.body.appendChild($);return $}function fw(_,$,j,Z){let X=Math.abs($),G=Math.min(X/100,1),q=X>=72;_.style.display="flex",_.style.opacity=String(Math.min(G*2.5,1)),_.classList.toggle("chat-swipe-indicator--ready",q);let Q=$<0,K=Q?Z.next:Z.prev,V=_.querySelector(".chat-swipe-chevron");if(V)V.textContent=Q?"›":"‹",V.style.order=Q?"2":"0";let Y=_.querySelector(".chat-swipe-name");if(Y)Y.textContent=K?.name??""}function l6(_){_.style.display="none",_.style.opacity="0"}function uU(_){let{timelineRef:$,activeChatAgents:j,currentChatJid:Z,onSwitch:X,isIOSDevice:G,isLikelySafari:q}=_,Q=$.current;if(!Q)return()=>{};let K=G(),V=typeof q==="function"?q():!1;if(!K&&!V)return()=>{};let Y=Tw(),N=yw(),F=null,B={prev:null,next:null},D=!1;function z(){B=xw({candidates:j,currentChatJid:Z})}z();function H(){if(!F)F=Pw(Q);return F}function W(k){let O=k==="next"?B.next:B.prev;if(O)X(O.chatJid)}function M(k){D=String(k.pointerType||"").toLowerCase()==="pen"}function E(k){if(VZ(Y),z(),!K)return;if(k.touches.length!==1)return;if(D)return;if(RU())return;if(!SU(k.target))return;let O=k.touches[0];Y.active=!0,Y.startX=O.clientX,Y.startY=O.clientY,Y.lastX=O.clientX,Y.lastY=O.clientY,Y.startedAt=Date.now()}function L(k){if(!Y.active||Y.cancelled)return;if(RU()){Y.cancelled=!0,l6(H());return}let O=k.touches[0];if(!O)return;Y.lastX=O.clientX,Y.lastY=O.clientY;let T=Y.lastX-Y.startX,y=Y.lastY-Y.startY;if(!Y.horizontalLocked){if(Math.abs(y)>16&&Math.abs(y)>=Math.abs(T)){Y.cancelled=!0,l6(H());return}if(Math.abs(T)>12&&Math.abs(T)>Math.abs(y)*1.15)Y.horizontalLocked=!0}if(Y.horizontalLocked){if(k.cancelable)k.preventDefault();fw(H(),T,Q.clientWidth,B)}}function x(){if(!Y.active)return;let k=Y.lastX-Y.startX,O=Y.lastY-Y.startY,T=!Y.cancelled&&Cw({dx:k,dy:O});if(l6(H()),VZ(Y),T)W(k<0?"next":"prev")}function I(){l6(H()),VZ(Y)}function J(k){if(K)return;if(!V)return;if(!SU(k.target))return;let{deltaX:O,deltaY:T}=k;if(!Number.isFinite(O)||Math.abs(O)<72)return;if(Math.abs(O)<=Math.abs(T)*1.35)return;if(k.cancelable)k.preventDefault();let y=Date.now();if(y-N.lastTriggeredAt<450)return;N.lastTriggeredAt=y,W(O>0?"next":"prev")}return Q.addEventListener("pointerdown",M,{passive:!0}),Q.addEventListener("touchstart",E,{passive:!0}),Q.addEventListener("touchmove",L,{passive:!1}),Q.addEventListener("touchend",x,{passive:!0}),Q.addEventListener("touchcancel",I,{passive:!0}),Q.addEventListener("wheel",J,{passive:!1}),()=>{if(Q.removeEventListener("pointerdown",M),Q.removeEventListener("touchstart",E),Q.removeEventListener("touchmove",L),Q.removeEventListener("touchend",x),Q.removeEventListener("touchcancel",I),Q.removeEventListener("wheel",J),F)l6(F),F.remove(),F=null}}function Rw(_){return{currentChatJid:_.currentChatJid,followupQueueItemsRef:_.followupQueueItemsRef,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,refreshQueueState:_.refreshQueueState,setFollowupQueueItems:_.setFollowupQueueItems,showIntentToast:_.showIntentToast,clearQueuedSteerStateIfStale:_.clearQueuedSteerStateIfStale,steerAgentQueueItem:_.steerAgentQueueItem,removeAgentQueueItem:_.removeAgentQueueItem,refreshActiveChatAgents:_.refreshActiveChatAgents,refreshCurrentChatBranches:_.refreshCurrentChatBranches,refreshContextUsage:_.refreshContextUsage,refreshAutoresearchStatus:_.refreshAutoresearchStatus}}function Sw(_){return{currentChatJid:_.currentChatJid,currentRootChatJid:_.currentRootChatJid,isComposeBoxAgentActive:_.isComposeBoxAgentActive,showIntentToast:_.showIntentToast,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,refreshAutoresearchStatus:_.refreshAutoresearchStatus,stopAutoresearch:_.stopAutoresearch,dismissAutoresearch:_.dismissAutoresearch,streamSidePrompt:_.streamSidePrompt,btwAbortRef:_.btwAbortRef,btwSession:_.btwSession,setBtwSession:_.setBtwSession,sendAgentMessage:_.sendAgentMessage,handleMessageResponse:_.handleMessageResponse,dismissedLiveWidgetKeysRef:_.dismissedLiveWidgetKeysRef,setFloatingWidget:_.setFloatingWidget,getAgentStatus:_.getAgentStatus,getAgentContext:_.getAgentContext,getAgentQueueState:_.getAgentQueueState,getAgentModels:_.getAgentModels,getActiveChatAgents:_.getActiveChatAgents,getChatBranches:_.getChatBranches,getTimeline:_.getTimeline,rawPosts:_.rawPosts,activeChatAgents:_.activeChatAgents,currentChatBranches:_.currentChatBranches,contextUsage:_.contextUsage,followupQueueItemsRef:_.followupQueueItemsRef,activeModel:_.activeModel,activeThinkingLevel:_.activeThinkingLevel,supportsThinking:_.supportsThinking,isAgentTurnActive:_.isAgentTurnActive}}function bw(_){return{setWorkspaceOpen:_.setWorkspaceOpen,currentChatJid:_.currentChatJid,chatOnlyMode:_.chatOnlyMode,navigate:_.navigate,currentBranchRecord:_.currentBranchRecord,renameBranchInFlightRef:_.renameBranchInFlightRef,renameBranchLockUntilRef:_.renameBranchLockUntilRef,getFormLock:_.getFormLock,setRenameBranchNameDraft:_.setRenameBranchNameDraft,setIsRenameBranchFormOpen:_.setIsRenameBranchFormOpen,setIsRenamingBranch:_.setIsRenamingBranch,renameChatBranch:_.renameChatBranch,refreshActiveChatAgents:_.refreshActiveChatAgents,refreshCurrentChatBranches:_.refreshCurrentChatBranches,showIntentToast:_.showIntentToast,currentChatBranches:_.currentChatBranches,activeChatAgents:_.activeChatAgents,pruneChatBranch:_.pruneChatBranch,purgeChatBranch:_.purgeChatBranch,restoreChatBranch:_.restoreChatBranch,branchLoaderMode:_.branchLoaderMode,branchLoaderSourceChatJid:_.branchLoaderSourceChatJid,forkChatBranch:_.forkChatBranch,createRootChatSession:_.createRootChatSession,setBranchLoaderState:_.setBranchLoaderState,currentRootChatJid:_.currentRootChatJid,isWebAppMode:_.isWebAppMode,getActiveChatAgents:_.getActiveChatAgents,getChatBranches:_.getChatBranches,setActiveChatAgents:_.setActiveChatAgents,setCurrentChatBranches:_.setCurrentChatBranches,openEditor:_.openEditor,activateTab:_.activateTab,tabStripActiveId:_.tabStripActiveId,editorInstanceRef:_.editorInstanceRef,dockInstanceRef:_.dockInstanceRef,terminalTabPath:_.terminalTabPath,tabPaneOverrides:_.tabPaneOverrides,buildPaneDetachTransfer:_.buildPaneDetachTransfer,registerDetachedPaneWindow:_.registerDetachedPaneWindow,dockVisible:_.dockVisible,resolveTab:_.resolveTab,closeTab:_.closeTab,setDockVisible:_.setDockVisible,editorOpen:_.editorOpen,shellElement:_.shellElement,editorWidthRef:_.editorWidthRef,dockHeightRef:_.dockHeightRef,sidebarWidthRef:_.sidebarWidthRef,readStoredNumber:_.readStoredNumber}}function gw(_){return{hasDockPanes:_.hasDockPanes,chatOnlyMode:_.chatOnlyMode,toggleDock:_.toggleDock,toggleZenMode:_.toggleZenMode,exitZenMode:_.exitZenMode,zenMode:_.zenMode,previousChat:()=>{let $=KZ({candidates:_.activeChatAgents,currentChatJid:_.currentChatJid,direction:"prev"});if($)_.handleBranchPickerChange?.($)},nextChat:()=>{let $=KZ({candidates:_.activeChatAgents,currentChatJid:_.currentChatJid,direction:"next"});if($)_.handleBranchPickerChange?.($)}}}function vU(_){let $=yU(Rw(_)),j=PU(Sw({..._,handleMessageResponse:$.handleMessageResponse})),Z=FU(bw(_));return fU(gw({..._,handleBranchPickerChange:Z.handleBranchPickerChange})),{followupActions:$,sidepanelActions:j,branchPaneActions:Z}}function uw(_,$){return Boolean(_||$!==null)}function vw(_){return{..._.agentStatusLifecycleBundle,..._.actionBundle,timelineViewActions:_.timelineViewActions,isComposeBoxAgentActive:_.isComposeBoxAgentActive}}function mw(_,$){let{routeState:j,searchState:Z,shellState:X,timeline:G,interaction:q,paneRuntime:Q,refs:K,setters:V,services:Y,helpers:N}=_;return{currentChatJid:j.currentChatJid,activeChatJidRef:K.activeChatJidRef,queueRefreshGenRef:K.queueRefreshGenRef,dismissedQueueRowIdsRef:K.dismissedQueueRowIdsRef,getAgentQueueState:Y.getAgentQueueState,setFollowupQueueItems:V.setFollowupQueueItems,clearQueuedSteerStateIfStale:q.clearQueuedSteerStateIfStale,getAgentContext:Y.getAgentContext,setContextUsage:V.setContextUsage,getAutoresearchStatus:Y.getAutoresearchStatus,setExtensionStatusPanels:V.setExtensionStatusPanels,setPendingExtensionPanelActions:V.setPendingExtensionPanelActions,setExtensionWorkingState:V.setExtensionWorkingState,getAgentStatus:Y.getAgentStatus,wasAgentActiveRef:K.wasAgentActiveRef,viewStateRef:K.viewStateRef,refreshTimeline:G.refreshTimeline,clearAgentRunState:q.clearAgentRunState,agentStatusRef:K.agentStatusRef,pendingRequestRef:K.pendingRequestRef,thoughtBufferRef:K.thoughtBufferRef,draftBufferRef:K.draftBufferRef,previewResyncPendingRef:K.previewResyncPendingRef,previewResyncGenerationRef:K.previewResyncGenerationRef,setAgentStatus:V.setAgentStatus,setAgentDraft:V.setAgentDraft,setAgentPlan:V.setAgentPlan,setAgentThought:V.setAgentThought,setPendingRequest:V.setPendingRequest,setExtensionWorkingState:V.setExtensionWorkingState,setActiveTurn:q.setActiveTurn,noteAgentActivity:q.noteAgentActivity,showLastActivity:q.showLastActivity,clearLastActivityFlag:q.clearLastActivityFlag,isAgentRunningRef:K.isAgentRunningRef,currentTurnIdRef:K.currentTurnIdRef,silentRecoveryRef:K.silentRecoveryRef,silenceRefreshMs:Y.silenceRefreshMs,lastAgentEventRef:K.lastAgentEventRef,lastSilenceNoticeRef:K.lastSilenceNoticeRef,silenceWarningMs:Y.silenceWarningMs,silenceFinalizeMs:Y.silenceFinalizeMs,isCompactionStatus:Y.isCompactionStatus,serverVersionContext:{currentAppAssetVersion:Y.currentAppAssetVersion,staleUiVersionRef:K.staleUiVersionRef,staleUiReloadScheduledRef:K.staleUiReloadScheduledRef,tabStoreHasUnsaved:Y.tabStoreHasUnsaved,isAgentRunningRef:K.isAgentRunningRef,pendingRequestRef:K.pendingRequestRef,showIntentToast:$},setConnectionStatus:V.setConnectionStatus,setStateAccessFailed:V.setStateAccessFailed,hasConnectedOnceRef:K.hasConnectedOnceRef,getAgents:Y.getAgents,setAgents:V.setAgents,setUserProfile:V.setUserProfile,applyBranding:q.applyBranding,readStoredNumber:N.readStoredNumber,sidebarWidthRef:K.sidebarWidthRef,appShellRef:K.appShellRef,currentRootChatJid:j.currentRootChatJid,getAgentModels:Y.getAgentModels,getActiveChatAgents:Y.getActiveChatAgents,getChatBranches:Y.getChatBranches,setActiveChatAgents:V.setActiveChatAgents,setCurrentChatBranches:V.setCurrentChatBranches,setActiveModel:V.setActiveModel,setActiveThinkingLevel:V.setActiveThinkingLevel,setSupportsThinking:V.setSupportsThinking,setActiveModelUsage:V.setActiveModelUsage,setAgentModelsPayload:V.setAgentModelsPayload,setHasLoadedAgentModels:V.setHasLoadedAgentModels,agentsRef:K.agentsRef,currentHashtag:Z.currentHashtag,searchQuery:Z.searchQuery,searchScope:Z.searchScope,loadPosts:G.loadPosts,searchPosts:Y.searchPosts,setPosts:G.setPosts,setHasMore:G.setHasMore,scrollToBottom:G.scrollToBottom,paneStateOwnerChatJidRef:K.paneStateOwnerChatJidRef,chatPaneStateByChatRef:K.chatPaneStateByChatRef,snapshotCurrentChatPaneState:q.snapshotCurrentChatPaneState,restoreChatPaneState:q.restoreChatPaneState,setFloatingWidget:V.setFloatingWidget,dismissedLiveWidgetKeysRef:K.dismissedLiveWidgetKeysRef,posts:G.posts,scrollToMessage:q.composeReferenceActions.scrollToMessage,draftThrottleRef:K.draftThrottleRef,thoughtThrottleRef:K.thoughtThrottleRef,followupQueueItemsRef:K.followupQueueItemsRef,scrollToBottomRef:G.scrollToBottomRef,hasMoreRef:G.hasMoreRef,loadMoreRef:G.loadMoreRef,lastAgentResponseRef:K.lastAgentResponseRef,notifyForFinalResponse:q.notifyForFinalResponse,setSteerQueuedTurnId:V.setSteerQueuedTurnId,refreshActiveEditorFromWorkspace:Q.refreshActiveEditorFromWorkspace,showIntentToast:$,removeStalledPost:q.recoveryCallbacks.removeStalledPost,preserveTimelineScrollTop:G.preserveTimelineScrollTop,finalizeStalledResponse:()=>{V.setExtensionWorkingState({message:null,indicator:null,visible:!0}),q.recoveryCallbacks.finalizeStalledResponse()},connectionStatus:X.connectionStatus,agentStatus:Y.agentStatus,thoughtExpandedRef:K.thoughtExpandedRef,draftExpandedRef:K.draftExpandedRef,steerQueuedTurnIdRef:K.steerQueuedTurnIdRef}}function mU(_){let{routeState:$,searchState:j,shellState:Z,timeline:X,interaction:G,paneRuntime:q,refs:Q,setters:K,services:V,helpers:Y}=_,N=G.composeReferenceActions.showIntentToast,F=wB({currentHashtag:j.currentHashtag,searchQuery:j.searchQuery,searchOpen:j.searchOpen,searchScope:j.searchScope,currentChatJid:$.currentChatJid,currentRootChatJid:$.currentRootChatJid,posts:X.posts,loadPosts:X.loadPosts,searchPosts:V.searchPosts,setCurrentHashtag:j.setCurrentHashtag,setSearchQuery:j.setSearchQuery,setSearchOpen:j.setSearchOpen,setSearchScope:j.setSearchScope,setPosts:X.setPosts,setHasMore:X.setHasMore,preserveTimelineScrollTop:X.preserveTimelineScrollTop,setRemovingPostIds:K.setRemovingPostIds,deletePost:V.deletePost,hasMoreRef:X.hasMoreRef,loadMoreRef:X.loadMoreRef}),B=bF(mw(_,N)),D=uw(V.isAgentTurnActive,V.agentStatus),z=vU({currentChatJid:$.currentChatJid,followupQueueItemsRef:Q.followupQueueItemsRef,dismissedQueueRowIdsRef:Q.dismissedQueueRowIdsRef,setFollowupQueueItems:K.setFollowupQueueItems,showIntentToast:N,clearQueuedSteerStateIfStale:G.clearQueuedSteerStateIfStale,steerAgentQueueItem:V.steerAgentQueueItem,removeAgentQueueItem:V.removeAgentQueueItem,refreshQueueState:B.agentStatusLifecycle.refreshQueueState,refreshActiveChatAgents:B.chatRefreshLifecycle.refreshActiveChatAgents,refreshCurrentChatBranches:B.chatRefreshLifecycle.refreshCurrentChatBranches,refreshContextUsage:B.agentStatusLifecycle.refreshContextUsage,refreshAutoresearchStatus:B.agentStatusLifecycle.refreshAutoresearchStatus,currentRootChatJid:$.currentRootChatJid,isComposeBoxAgentActive:D,setPendingExtensionPanelActions:K.setPendingExtensionPanelActions,stopAutoresearch:V.stopAutoresearch,dismissAutoresearch:V.dismissAutoresearch,streamSidePrompt:V.streamSidePrompt,btwAbortRef:Q.btwAbortRef,btwSession:Z.btwSession,setBtwSession:K.setBtwSession,sendAgentMessage:V.sendAgentMessage,dismissedLiveWidgetKeysRef:Q.dismissedLiveWidgetKeysRef,setFloatingWidget:K.setFloatingWidget,getAgentStatus:V.getAgentStatus,getAgentContext:V.getAgentContext,getAgentQueueState:V.getAgentQueueState,getAgentModels:V.getAgentModels,getActiveChatAgents:V.getActiveChatAgents,getChatBranches:V.getChatBranches,getTimeline:V.getTimeline,rawPosts:X.rawPosts,activeChatAgents:Z.activeChatAgents,currentChatBranches:Z.currentChatBranches,contextUsage:Z.contextUsage,activeModel:Z.activeModel,activeThinkingLevel:Z.activeThinkingLevel,supportsThinking:Z.supportsThinking,isAgentTurnActive:V.isAgentTurnActive,chatOnlyMode:$.chatOnlyMode,navigate:$.navigate,setWorkspaceOpen:Z.setWorkspaceOpen,currentBranchRecord:Z.currentBranchRecord,renameBranchInFlightRef:Q.renameBranchInFlightRef,renameBranchLockUntilRef:Q.renameBranchLockUntilRef,getFormLock:Y.getFormLock,setRenameBranchNameDraft:K.setRenameBranchNameDraft,setIsRenameBranchFormOpen:K.setIsRenameBranchFormOpen,setIsRenamingBranch:K.setIsRenamingBranch,renameChatBranch:V.renameChatBranch,pruneChatBranch:V.pruneChatBranch,purgeChatBranch:V.purgeChatBranch,restoreChatBranch:V.restoreChatBranch,branchLoaderMode:$.branchLoaderMode,branchLoaderSourceChatJid:$.branchLoaderSourceChatJid,forkChatBranch:V.forkChatBranch,createRootChatSession:V.createRootChatSession,setBranchLoaderState:K.setBranchLoaderState,isWebAppMode:$.isWebAppMode,setActiveChatAgents:K.setActiveChatAgents,setCurrentChatBranches:K.setCurrentChatBranches,openEditor:V.openEditor,tabStripActiveId:V.tabStripActiveId,editorInstanceRef:q.editorInstanceRef,dockInstanceRef:q.dockInstanceRef,terminalTabPath:V.terminalTabPath,tabPaneOverrides:V.tabPaneOverrides,buildPaneDetachTransfer:q.buildPaneDetachTransfer,registerDetachedPaneWindow:q.registerDetachedPaneWindow,dockVisible:q.dockVisible,resolveTab:V.resolveTab,closeTab:V.closeTab,setDockVisible:q.setDockVisible,editorOpen:V.editorOpen,shellElement:Q.appShellRef.current,editorWidthRef:Q.editorWidthRef,dockHeightRef:Q.dockHeightRef,sidebarWidthRef:Q.sidebarWidthRef,readStoredNumber:Y.readStoredNumber,hasDockPanes:q.hasDockPanes,toggleDock:q.toggleDock,toggleZenMode:q.toggleZenMode,exitZenMode:q.exitZenMode,zenMode:q.zenMode});return vw({agentStatusLifecycleBundle:B,actionBundle:z,timelineViewActions:F,isComposeBoxAgentActive:D})}M0();y1();M0();function cU(_){try{return _?.focus?.(),!0}catch($){return!1}}function p6(_,$){if(!_||!$)return null;try{return _.getItem($)}catch{return null}}function YZ(_,$,j){if(!_||!$)return;try{_.setItem($,j)}catch{return}}function hU(_,$){if(!_||!$)return;try{_.removeItem($)}catch{return}}function lU(_="piclaw"){try{if(typeof crypto<"u"&&typeof crypto.randomUUID==="function")return`${_}-${crypto.randomUUID()}`}catch($){console.debug("[notification-delivery-coordinator] crypto.randomUUID threw; falling back to Math.random-based id.",$)}return`${_}-${Math.random().toString(36).slice(2)}-${Date.now().toString(36)}`}function q4(_=typeof window<"u"?window:null){let $=_?.localStorage,j=p6($,"piclaw.notifications.deviceId");if(j)return j;let Z=lU("device");return YZ($,"piclaw.notifications.deviceId",Z),p6($,"piclaw.notifications.deviceId")||Z}function r6(_=typeof window<"u"?window:null){let $=_?.sessionStorage,j=p6($,"piclaw.notifications.clientId");if(j)return j;let Z=_?.__PICLAW_NOTIFICATION_CLIENT_ID__;if(typeof Z==="string"&&Z.trim())return Z.trim();let X=lU("client");if(YZ($,"piclaw.notifications.clientId",X),_)_.__PICLAW_NOTIFICATION_CLIENT_ID__=p6($,"piclaw.notifications.clientId")||X;return _?.__PICLAW_NOTIFICATION_CLIENT_ID__||X}function pU(_,$){return`piclaw.notifications.presence.${String(_||"").trim()}:${String($||"").trim()}`}function NZ(_={}){let $=_.runtimeWindow??(typeof window<"u"?window:null),j=_.runtimeDocument??(typeof document<"u"?document:null),Z=typeof _.chatJid==="string"&&_.chatJid.trim()?_.chatJid.trim():"",X=typeof _.deviceId==="string"&&_.deviceId.trim()?_.deviceId.trim():q4($),G=typeof _.clientId==="string"&&_.clientId.trim()?_.clientId.trim():r6($),q=Number.isFinite(_.updatedAtMs)?Number(_.updatedAtMs):Date.now(),Q=Boolean(typeof j?.hasFocus==="function"?j.hasFocus():!0),V=String(j?.visibilityState||"").trim().toLowerCase()==="hidden"?"hidden":"visible";return{deviceId:X,clientId:G,chatJid:Z,visibilityState:V,hasFocus:Q,updatedAtMs:q}}function rU(_,$=typeof window<"u"?window:null){let j=$?.localStorage,Z=typeof _?.deviceId==="string"?_.deviceId.trim():"",X=typeof _?.clientId==="string"?_.clientId.trim():"",G=typeof _?.chatJid==="string"?_.chatJid.trim():"";if(!j||!Z||!X||!G)return!1;return YZ(j,pU(Z,X),JSON.stringify({deviceId:Z,clientId:X,chatJid:G,visibilityState:_.visibilityState==="hidden"?"hidden":"visible",hasFocus:Boolean(_.hasFocus),updatedAtMs:Number.isFinite(_.updatedAtMs)?Number(_.updatedAtMs):Date.now()})),!0}function nU(_,$=typeof window<"u"?window:null){let j=$?.localStorage,Z=typeof _?.deviceId==="string"?_.deviceId.trim():"",X=typeof _?.clientId==="string"?_.clientId.trim():"";if(!j||!Z||!X)return!1;return hU(j,pU(Z,X)),!0}function cw(_={}){let $=_.runtimeWindow??(typeof window<"u"?window:null),j=$?.localStorage,Z=typeof _.deviceId==="string"&&_.deviceId.trim()?_.deviceId.trim():q4($),X=Number.isFinite(_.nowMs)?Number(_.nowMs):Date.now(),G=Number.isFinite(_.ttlMs)?Number(_.ttlMs):120000;if(!j||!Z)return[];let q=`piclaw.notifications.presence.${Z}:`,Q=[],K=[];for(let V=0;V<j.length;V+=1){let Y=j.key(V);if(!Y||!Y.startsWith(q))continue;let N=p6(j,Y);if(!N){K.push(Y);continue}try{let F=JSON.parse(N),B=Number(F?.updatedAtMs);if(!Number.isFinite(B)||X-B>G){K.push(Y);continue}let D=typeof F?.chatJid==="string"?F.chatJid.trim():"",z=typeof F?.clientId==="string"?F.clientId.trim():"";if(!D||!z){K.push(Y);continue}Q.push({deviceId:Z,clientId:z,chatJid:D,visibilityState:F?.visibilityState==="hidden"?"hidden":"visible",hasFocus:Boolean(F?.hasFocus),updatedAtMs:B})}catch{K.push(Y)}}return K.forEach((V)=>hU(j,V)),Q.sort((V,Y)=>V.clientId.localeCompare(Y.clientId))}function dU(_={}){let $=NZ(_),j=$.chatJid;if(!j)return!1;let Z=cw({runtimeWindow:_.runtimeWindow,deviceId:$.deviceId,nowMs:$.updatedAtMs,ttlMs:_.ttlMs}).filter((q)=>q.chatJid===j&&q.clientId!==$.clientId),X=[$,...Z];if(X.some((q)=>q.visibilityState==="visible"))return!1;let G=[...X].sort((q,Q)=>q.clientId.localeCompare(Q.clientId))[0]||null;return Boolean(G&&G.clientId===$.clientId)}function hw(_=typeof window<"u"?window:null){return Boolean(_?.__PICLAW_NOTIFICATION_SOURCE_LABELS_ENABLED__)}function lw(_,$="",j=typeof window<"u"?window:null){let Z=typeof _==="string"&&_.trim()?_.trim():"PiClaw",X=hw(j)&&typeof $==="string"?$.trim():"";return X?`${Z} [${X}]`:Z}function pw(_){let $=String(_||"").replace(/-/g,"+").replace(/_/g,"/"),j=$.padEnd(Math.ceil($.length/4)*4,"="),Z=atob(j),X=new Uint8Array(Z.length);for(let G=0;G<Z.length;G+=1)X[G]=Z.charCodeAt(G);return X}function X3(_=typeof window<"u"?window:null){if(!_||!_.isSecureContext)return!1;return"serviceWorker"in _.navigator&&"PushManager"in _}async function iU(_){return await _.navigator.serviceWorker.register("/sw.js",{updateViaCache:"none"}),await _.navigator.serviceWorker.ready}async function rw(_){let $=await iU(_),j=await $.pushManager.getSubscription();if(j)return j;let Z=await a7(),X=typeof Z?.publicKey==="string"?Z.publicKey.trim():"";if(!X)throw Error("Missing web push public key.");return $.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:pw(X)})}async function oU(_,$){if(!X3(_))return!1;let j=await rw(_);return await t7(j.toJSON?j.toJSON():j,{deviceId:$}),!0}async function nw(_,$){if(!X3(_))return!1;let Z=await(await iU(_)).pushManager.getSubscription();if(!Z)return!1;let X=Z.toJSON?Z.toJSON():Z;try{await e7(X,{deviceId:$})}catch(G){console.warn("Failed to remove web push subscription from the server:",G)}try{await Z.unsubscribe()}catch(G){console.warn("Failed to unsubscribe from web push notifications:",G)}return!0}function dw(_,$={}){let j=$.runtimeWindow??(typeof window<"u"?window:null);if(!j?.fetch)return Promise.resolve(!1);return j.fetch("/agent/push/presence",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_),keepalive:Boolean($.keepalive)}).then(()=>!0).catch(()=>!1)}function ow(_,$=typeof window<"u"?window:null){try{if($?.navigator?.sendBeacon){let j=new Blob([JSON.stringify(_)],{type:"application/json"});return $.navigator.sendBeacon("/agent/push/presence",j)}}catch(j){console.debug("[use-notifications] Ignoring sendBeacon failure for best-effort notification presence teardown.",j,{hasNavigator:Boolean($?.navigator)})}return!1}function sU(_={}){let $=typeof _?.chatJid==="string"&&_.chatJid.trim()?_.chatJid.trim():"web:default",[j,Z]=C(!1),[X,G]=C("default"),q=g(!1),Q=g(null),K=g(null);b(()=>{let B=L$("notificationsEnabled",!1);if(q.current=B,Z(B),typeof window<"u")Q.current=q4(window),K.current=r6(window);if(typeof Notification>"u")return;let D=Notification.permission;if(G(D),D==="denied"&&B){q.current=!1,Z(!1),B1("notificationsEnabled","false");return}if(D==="granted"&&B&&typeof window<"u"&&X3(window))oU(window,Q.current||q4(window)).catch((z)=>{console.warn("Failed to refresh stored web push subscription:",z)})},[]),b(()=>{q.current=j},[j]),b(()=>{if(typeof window>"u"||typeof document>"u")return;let B=Q.current||q4(window),D=K.current||r6(window);Q.current=B,K.current=D;let z=(E=!0,L="fetch")=>{let x=NZ({chatJid:$,runtimeWindow:window,runtimeDocument:document,deviceId:B,clientId:D});if(E)rU(x,window);else nU({deviceId:B,clientId:D},window);let I={device_id:B,client_id:D,chat_jid:$,visibility_state:x.visibilityState,has_focus:x.hasFocus,active:E};if(!E&&L==="beacon"&&ow(I,window))return;dw(I,{runtimeWindow:window,keepalive:!E||L==="keepalive"})},H=()=>z(!0),W=()=>z(!1,"beacon");z(!0);let M=setInterval(()=>z(!0),15000);return document.addEventListener("visibilitychange",H),window.addEventListener("focus",H),window.addEventListener("blur",H),window.addEventListener("pageshow",H),window.addEventListener("pagehide",W),window.addEventListener("beforeunload",W),()=>{clearInterval(M),document.removeEventListener("visibilitychange",H),window.removeEventListener("focus",H),window.removeEventListener("blur",H),window.removeEventListener("pageshow",H),window.removeEventListener("pagehide",W),window.removeEventListener("beforeunload",W),z(!1,"beacon")}},[$]);let V=R(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let B=Notification.requestPermission();if(B&&typeof B.then==="function")return B;return Promise.resolve(B)}catch(B){return console.debug("[use-notifications] Notification permission request threw; returning default permission state.",B),Promise.resolve("default")}},[]),Y=R(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){G("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let z=await V();if(G(z||"default"),z!=="granted"){q.current=!1,Z(!1),B1("notificationsEnabled","false");return}}let B=!q.current;q.current=B,Z(B),B1("notificationsEnabled",String(B));let D=Q.current||q4(window);if(Q.current=D,X3(window))try{if(B)await oU(window,D);else await nw(window,D)}catch(z){if(console.warn("Failed to sync web push notifications:",z),B)alert("Notifications were enabled, but web push setup failed. If you are on iPhone or iPad, reopen PiClaw from the Home Screen and try again.")}},[V]),N=R((B,D,z={})=>{if(!q.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let H=new Notification(lw(B,z?.sourceLabel||"",window),{body:D});return H.onclick=()=>{cU(window)},!0}catch(H){return console.debug("[use-notifications] Local notification creation failed.",H,{title:typeof B==="string"?B:null}),!1}},[]),F=R((B)=>{if(typeof window>"u"||typeof document>"u")return!1;return dU({chatJid:typeof B==="string"&&B.trim()?B.trim():$,runtimeWindow:window,runtimeDocument:document,deviceId:Q.current||q4(window),clientId:K.current||r6(window)})},[$]);return{notificationsEnabled:j,notificationPermission:X,toggleNotifications:Y,notify:N,shouldNotifyLocallyForChat:F}}function iw(_){let{activeChatAgents:$,currentChatBranches:j,currentChatJid:Z}=_,X=j.find((G)=>G?.chat_jid===Z);if(X)return X;return $.find((G)=>G?.chat_jid===Z)||null}function sw(_){return{status:_?"running":"idle",message:_?"Preparing a new chat branch…":""}}function aw(_,$){let j=typeof $?.root_chat_jid==="string"?$.root_chat_jid.trim():"";if(j)return j;let Z=typeof _==="string"?_.trim():"";if(!Z)return"web:default";let X=Z.indexOf(":branch:");if(X<=0)return Z;return Z.slice(0,X)||Z}function aU(_){let{currentChatJid:$,branchLoaderMode:j}=_,[Z,X]=C("disconnected"),[G,q]=C(!1),[Q,K]=C(()=>b_()),[V,Y]=C(null),[N,F]=C(null),[B,D]=C(!1),[z,H]=C("current"),[W,M]=C([]),[E,L]=C([]),[x,I]=C([]),[J,k]=C(null),[O,T]=C({}),[y,A]=C(null),[P,f]=C(null),[u,c]=C(!1),[r,e]=C(null),[m,$0]=C(null),[W0,X0]=C(!1),[Z0,q0]=C([]),[D0,h]=C([]),[j0,Y0]=C(null),[L0,s]=C(()=>new Map),[Q0,O0]=C(()=>new Set),[x0,r0]=C(()=>({message:null,indicator:null,visible:!0})),[l0,n0]=C([]),[m0,_1]=C(!1),[S0,o0]=C(()=>DN()),[c0,$1]=C(null),[i0,H1]=C(null),Q1=g(new Set),P0=G0(()=>iw({activeChatAgents:Z0,currentChatBranches:D0,currentChatJid:$}),[Z0,D0,$]),J0=G0(()=>aw($,P0),[P0,$]),z1=UN(z),[G1,J1]=C(()=>sw(j)),F0=l0.length,R0=g(new Set),w0=g([]),j1=g(new Set),x1=g(0),K1=g({inFlight:!1,lastAttemptAt:0,turnId:null});R0.current=new Set(l0.map((X_)=>X_.row_id)),w0.current=l0;let{notificationsEnabled:V1,notificationPermission:Z1,toggleNotifications:E1,notify:c1,shouldNotifyLocallyForChat:g1}=sU({chatJid:$}),[O1,e1]=C(()=>new Set),[T1,V0]=C(()=>RN({allowLegacyFallback:!0,defaultValue:!1})),[v,n]=C({name:"You",avatar_url:null,avatar_background:null}),a=g(null),_0=g(!1),H0=g(!1),A0=g(!1),E0=g(null),C0=g($),k0=g(new Map),h0=g($),v0=g(0),p0=g(0),d0=g({}),I0=g({name:null,avatar_url:null}),T0=g({currentHashtag:null,searchQuery:null,searchOpen:!1}),N1=g(null),q1=g(null),o=g(0),z0=g(0),s0=g(0),t0=g(null),C1=g(null),Z_=g(null),A1=g(null),N_=g(0),p1=g({title:null,avatarBase:null}),W1=g(null),M_=g(!1),[a1,M1]=C(!1),Q4=g(0),[I$,r1]=C(!1),[B_,U1]=C(""),h1=G0(()=>H8(B_,P0?.agent_name||""),[P0?.agent_name,B_]),u1=g(null);return{connectionStatus:Z,setConnectionStatus:X,stateAccessFailed:G,setStateAccessFailed:q,isWebAppMode:Q,setIsWebAppMode:K,currentHashtag:V,setCurrentHashtag:Y,searchQuery:N,setSearchQuery:F,searchOpen:B,setSearchOpen:D,searchScope:z,setSearchScope:H,fileRefs:W,setFileRefs:M,folderRefs:E,setFolderRefs:L,messageRefs:x,setMessageRefs:I,intentToast:J,setIntentToast:k,agents:O,setAgents:T,activeModel:y,setActiveModel:A,activeThinkingLevel:P,setActiveThinkingLevel:f,supportsThinking:u,setSupportsThinking:c,activeModelUsage:r,setActiveModelUsage:e,agentModelsPayload:m,setAgentModelsPayload:$0,hasLoadedAgentModels:W0,setHasLoadedAgentModels:X0,activeChatAgents:Z0,setActiveChatAgents:q0,currentChatBranches:D0,setCurrentChatBranches:h,contextUsage:j0,setContextUsage:Y0,extensionStatusPanels:L0,setExtensionStatusPanels:s,pendingExtensionPanelActions:Q0,setPendingExtensionPanelActions:O0,extensionWorkingState:x0,setExtensionWorkingState:r0,followupQueueItems:l0,setFollowupQueueItems:n0,isAgentTurnActive:m0,setIsAgentTurnActive:_1,btwSession:S0,setBtwSession:o0,floatingWidget:c0,setFloatingWidget:$1,attachmentPreview:i0,setAttachmentPreview:H1,dismissedLiveWidgetKeysRef:Q1,currentBranchRecord:P0,currentRootChatJid:J0,activeSearchScopeLabel:z1,branchLoaderState:G1,setBranchLoaderState:J1,followupQueueCount:F0,followupQueueRowIdsRef:R0,followupQueueItemsRef:w0,dismissedQueueRowIdsRef:j1,queueRefreshGenRef:x1,silentRecoveryRef:K1,notificationsEnabled:V1,notificationPermission:Z1,handleToggleNotifications:E1,notify:c1,shouldNotifyLocallyForChat:g1,removingPostIds:O1,setRemovingPostIds:e1,workspaceOpen:T1,setWorkspaceOpen:V0,userProfile:v,setUserProfile:n,staleUiVersionRef:a,staleUiReloadScheduledRef:_0,hasConnectedOnceRef:H0,wasAgentActiveRef:A0,agentStatusRef:E0,activeChatJidRef:C0,chatPaneStateByChatRef:k0,paneStateOwnerChatJidRef:h0,draftThrottleRef:v0,thoughtThrottleRef:p0,agentsRef:d0,userProfileRef:I0,viewStateRef:T0,timelineRef:N1,appShellRef:q1,sidebarWidthRef:o,editorWidthRef:z0,dockHeightRef:s0,lastNotifiedIdRef:t0,lastAgentResponseRef:C1,btwAbortRef:Z_,lastActivityTimerRef:A1,lastActivityTokenRef:N_,brandingRef:p1,intentToastTimerRef:W1,renameBranchInFlightRef:M_,isRenamingBranch:a1,setIsRenamingBranch:M1,renameBranchLockUntilRef:Q4,isRenameBranchFormOpen:I$,setIsRenameBranchFormOpen:r1,renameBranchNameDraft:B_,setRenameBranchNameDraft:U1,renameBranchDraftState:h1,renameBranchNameInputRef:u1}}M0();M0();function tw(_,$,j,Z){if(!(_ instanceof Map)||_.size===0||!$||!j)return _;let X=!1,G=new Map;for(let[q,Q]of _.entries()){let K=q;if(Z==="dir"){if(q===$)K=j,X=!0;else if(q.startsWith(`${$}/`))K=`${j}${q.slice($.length)}`,X=!0}else if(q===$)K=j,X=!0;G.set(K,Q)}return X?G:_}function tU(_,$,j,Z){if(!(_ instanceof Set)||_.size===0||!$||!j)return _;let X=!1,G=new Set;for(let q of _.values()){let Q=q;if(Z==="dir"){if(q===$)Q=j,X=!0;else if(q.startsWith(`${$}/`))Q=`${j}${q.slice($.length)}`,X=!0}else if(q===$)Q=j,X=!0;G.add(Q)}return X?G:_}function eU({onTabClosed:_}={}){let $=g(_);$.current=_;let[j,Z]=C(()=>e0.getTabs()),[X,G]=C(()=>e0.getActiveId()),[q,Q]=C(()=>e0.getTabs().length>0);b(()=>{return e0.onChange((A,P)=>{Z(A),G(P),Q(A.length>0)})},[]);let[K,V]=C(()=>new Set),[Y,N]=C(()=>new Set),[F,B]=C(()=>new Map),D=R((A)=>{V((P)=>{let f=new Set(P);if(f.has(A))f.delete(A);else f.add(A);return f})},[]),z=R((A)=>{V((P)=>{if(!P.has(A))return P;let f=new Set(P);return f.delete(A),f})},[]),H=R((A)=>{N((P)=>{if(!P.has(A))return P;let f=new Set(P);return f.delete(A),f})},[]),W=R((A)=>{B((P)=>{if(!P.has(A))return P;let f=new Map(P);return f.delete(A),f})},[]),M=R((A,P={})=>{if(!A)return;let f=typeof P?.paneOverrideId==="string"&&P.paneOverrideId.trim()?P.paneOverrideId.trim():null,u={path:A,mode:"edit"};try{if(!(f?Y1.get(f):Y1.resolve(u))){if(!Y1.get("editor")){console.warn(`[openEditor] No pane handler for: ${A}`);return}}}catch(m){console.warn(`[openEditor] paneRegistry.resolve() error for "${A}":`,m)}let c=typeof P?.label==="string"&&P.label.trim()?P.label.trim():void 0,r=P?.viewState&&typeof P.viewState==="object"?P.viewState:null,e=P?.diffMode==="saved"?"saved":null;if(e0.open(A,c),r)e0.saveViewState(A,r);if(f)B((m)=>{if(m.get(A)===f)return m;let $0=new Map(m);return $0.set(A,f),$0});if(e==="saved")N((m)=>{if(m.has(A))return m;let $0=new Set(m);return $0.add(A),$0})},[]),E=R(()=>{let A=e0.getActiveId();if(A){let P=e0.get(A);if(P?.dirty){if(!window.confirm(`"${P.label}" has unsaved changes. Close anyway?`))return}e0.close(A),z(A),H(A),W(A),$.current?.(A)}},[H,W,z]),L=R((A)=>{let P=e0.get(A);if(P?.dirty){if(!window.confirm(`"${P.label}" has unsaved changes. Close anyway?`))return}e0.close(A),z(A),H(A),W(A),$.current?.(A)},[H,W,z]),x=R((A)=>{e0.activate(A)},[]),I=R((A)=>{let P=e0.getTabs().filter((c)=>c.id!==A&&!c.pinned),f=P.filter((c)=>c.dirty).length;if(f>0){if(!window.confirm(`${f} unsaved tab${f>1?"s":""} will be closed. Continue?`))return}let u=P.map((c)=>c.id);e0.closeOthers(A),u.forEach((c)=>{z(c),H(c),W(c),$.current?.(c)})},[H,W,z]),J=R(()=>{let A=e0.getTabs().filter((u)=>!u.pinned),P=A.filter((u)=>u.dirty).length;if(P>0){if(!window.confirm(`${P} unsaved tab${P>1?"s":""} will be closed. Continue?`))return}let f=A.map((u)=>u.id);e0.closeAll(),f.forEach((u)=>{z(u),H(u),W(u),$.current?.(u)})},[H,W,z]),k=R((A)=>{e0.togglePin(A)},[]),O=R((A)=>{if(!A)return;N((P)=>{let f=new Set(P);if(f.has(A))f.delete(A);else f.add(A);return f}),e0.activate(A)},[]),T=R((A)=>{if(!A)return;B((P)=>{if(P.get(A)==="editor")return P;let f=new Map(P);return f.set(A,"editor"),f}),e0.activate(A)},[]),y=R(()=>{let A=e0.getActiveId();if(A)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:A}}))},[]);return b(()=>{let A=(P)=>{let{oldPath:f,newPath:u,type:c}=P.detail||{};if(!f||!u)return;if(c==="dir"){for(let r of e0.getTabs())if(r.path===f||r.path.startsWith(`${f}/`)){let e=`${u}${r.path.slice(f.length)}`;e0.rename(r.id,e)}}else e0.rename(f,u);V((r)=>tU(r,f,u,c)),N((r)=>tU(r,f,u,c)),B((r)=>tw(r,f,u,c))};return window.addEventListener("workspace-file-renamed",A),()=>window.removeEventListener("workspace-file-renamed",A)},[]),b(()=>{let A=(P)=>{if(e0.hasUnsaved())P.preventDefault(),P.returnValue=""};return window.addEventListener("beforeunload",A),()=>window.removeEventListener("beforeunload",A)},[]),{editorOpen:q,tabStripTabs:j,tabStripActiveId:X,previewTabs:K,diffTabs:Y,tabPaneOverrides:F,openEditor:M,closeEditor:E,handleTabClose:L,handleTabActivate:x,handleTabCloseOthers:I,handleTabCloseAll:J,handleTabTogglePin:k,handleTabTogglePreview:D,handleTabToggleDiff:O,handleTabEditSource:T,revealInExplorer:y}}M0();function Z$(_){return typeof _==="string"&&_.trim()?_.trim():null}function ew(_=globalThis){try{return typeof _?.crypto?.randomUUID==="function"?_.crypto.randomUUID():null}catch($){return null}}function l4(_="pane"){let $=ew();if($)return`${_}-${$}`;return`${_}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}function _D(_){let $=Z$(_?.paneInstanceId),j=Z$(_?.paneWindowId);if(!$||!j)return{};let Z=Z$(_?.paneSourceWindowId);return{pane_instance_id:$,pane_window_id:j,...Z?{pane_source_window_id:Z}:{}}}function $D(_={}){let $=new URLSearchParams(_.search||"");return{panePath:Z$($.get("pane_path"))||Z$(_.panePath),paneLabel:Z$($.get("pane_label"))||Z$(_.paneLabel),paneInstanceId:Z$($.get("pane_instance_id")),paneWindowId:Z$($.get("pane_window_id")),paneSourceWindowId:Z$($.get("pane_source_window_id"))}}function p4(_){return Boolean(_?.panePath&&_?.paneInstanceId&&_?.paneWindowId)}function X$(_){return typeof _==="string"&&_.trim()?_.trim():null}function jD(_){let $=X$(_?.panePath),j=X$(_?.paneInstanceId),Z=X$(_?.ownerWindowId);if(!$||!j||!Z)return null;let X=X$(_?.now)||new Date().toISOString();return{panePath:$,paneInstanceId:j,ownerWindowId:Z,detachedAt:X,requestedAt:X,label:X$(_?.label),sourceWindowId:X$(_?.sourceWindowId)}}function BZ(_,$){if(!_||!$)return!1;return X$($.panePath)===_.panePath&&X$($.paneInstanceId)===_.paneInstanceId&&X$($.paneWindowId)===_.ownerWindowId}function FZ(_,$){if(!_)return null;return{panePath:_.panePath,paneInstanceId:_.paneInstanceId,ownerWindowId:_.ownerWindowId,detachedAt:X$($)||new Date().toISOString(),label:_.label||null}}function G3(_){try{return _?.close?.(),!0}catch($){return!1}}function UZ(_,$,j){try{return _?.postMessage?.($,j),!0}catch(Z){return!1}}function _I(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return!1;if(_.openTabIds?.has($))return!0;if(_.pendingDetachedTabPaths?.has?.($))return!0;if(_.detachedTabPaths?.has?.($))return!0;if($===_.terminalTabPath)return Boolean(_.hasPendingDetachedDockPane||_.hasDetachedDockPane);return!1}function ZD(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return;let j=_?.sourceHost==="dock"?"dock":"tab";if($===_.terminalTabPath&&j==="dock"){_.setDockVisible?.(!1);return}_.closeTab?.($)}var $I=400;function jI(_){let $=Array.isArray(_?.changed_paths)?_.changed_paths.map((Z)=>typeof Z==="string"?Z.trim():"").filter(Boolean):[];if($.length>0)return $;let j=typeof _?.path==="string"?_.path.trim():"";return j?[j]:["."]}function ZI(_,$){if(!_)return!1;if(!Array.isArray($)||$.length===0)return!0;return $.some((j)=>{return jI(j).some((X)=>X==="."||X===_)})}async function XD(_,$){if(typeof _?.afterAttachToHost!=="function")return;await _.afterAttachToHost($)}function XI(_=typeof document<"u"?document:null){if(!_)return!0;let $=typeof _.visibilityState==="string"?_.visibilityState:"";return!$||$==="visible"}function V3(_=typeof navigator<"u"?navigator:null){if(!_)return!1;let $=String(_.userAgent||""),j=String(_.vendor||""),Z=/AppleWebKit/i.test($),X=/Safari/i.test($),G=/Chrome|Chromium|CriOS|EdgiOS|EdgA|Edg\//i.test($),q=/FxiOS/i.test($);return Z&&(j.includes("Apple")||X)&&!G&&!q}function GD(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return!1;if($!==_.terminalTabPath)return!1;if((_?.reason==="message"?"message":"closed-window")==="closed-window")return!0;return _?.allowLiveTransfer===!1}function q3(_){if(!GD(_))return!1;return V3(_?.runtimeNavigator)}function Q3(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$||$!==_?.terminalTabPath)return!1;return V3(_?.runtimeNavigator)}function b5(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return!1;return $!==_?.terminalTabPath}function GI(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return null;let j=_?.runtime??globalThis,Z=typeof _?.nowMs==="number"?_.nowMs:Date.now(),X=typeof _?.paneInstanceId==="string"?_.paneInstanceId.trim():"",G=typeof _?.paneOverrideId==="string"?_.paneOverrideId.trim():"",q=typeof _?.terminalTabPath==="string"?_.terminalTabPath:"piclaw://terminal",Q=_?.allowLiveTransfer!==!1,K=_?.instance||null,V=typeof K?.exportHostTransferState==="function"?K.exportHostTransferState():null,Y=$===q,N=V&&!Y?j3({path:$,payload:V},j,Z):null,F=null;if($!==q){let B=V&&typeof V==="object"?typeof V.mtime==="string"?V.mtime:V.mtime===null?null:void 0:void 0,D=typeof K?.isDirty==="function"?K.isDirty():!1,z=typeof K?.getContent==="function"?K.getContent():void 0;F=W2({path:$,content:D?z:void 0,mtime:B,paneOverrideId:G||null,viewState:_?.viewState||null},j,Z)}return{type:"piclaw-pane-reattach-request",panePath:$,...X?{paneInstanceId:X}:{},...F?.editor_popout?{editorPopoutToken:F.editor_popout}:{},...N?.pane_transfer?{paneTransferToken:N.pane_transfer}:{},...Y&&V?{paneTransferPayload:V}:{},...Q?{}:{allowLiveTransfer:!1}}}function qI(_){let $=typeof _?.payload?.panePath==="string"?_.payload.panePath.trim():"";if(!$)return null;let j=_?.runtime??globalThis,Z=typeof _?.nowMs==="number"?_.nowMs:Date.now(),X=typeof _?.payload?.paneInstanceId==="string"&&_.payload.paneInstanceId.trim()?_.payload.paneInstanceId.trim():null,G=typeof _?.payload?.editorPopoutToken==="string"?_.payload.editorPopoutToken.trim():"",q=typeof _?.payload?.paneTransferToken==="string"?_.payload.paneTransferToken.trim():"",Q=_?.payload?.paneTransferPayload&&typeof _.payload.paneTransferPayload==="object"&&!Array.isArray(_.payload.paneTransferPayload)?_.payload.paneTransferPayload:null,K=G?h3(G,j,Z):null,V=Q?{panePath:$,path:$,payload:Q,capturedAt:Z}:q?qZ(q,j,Z):null;return{panePath:$,paneInstanceId:X,editorTransfer:K?.path===$?K:null,hostTransfer:V?.path===$?V:null,allowLiveTransfer:_?.payload?.allowLiveTransfer!==!1}}function qD(_){let{panePopoutMode:$,panePopoutPath:j,panePopoutLabel:Z,chatOnlyMode:X,editorOpen:G,tabStripTabs:q,tabStripActiveId:Q,previewTabs:K,diffTabs:V,tabPaneOverrides:Y,terminalTabPath:N,vncTabPrefix:F,openEditor:B,closeEditor:D,getWorkspaceFile:z}=_,H=g(null),W=g(null),M=g(null),E=g(null),L=g((()=>{if(!$)return null;let V0=X5("editor_popout");return h3(V0)})()),x=g((()=>{if(!$)return null;return cF()})()),I=g($D({search:typeof window<"u"?window.location.search:"",panePath:j,paneLabel:Z})),J=g(I.current.paneWindowId||l4("pane-window")),k=g(new Map),O=g(new Map),T=g(new Map),y=g(new Map),A=g(!1),P=g(new Map),f=g(l4("pane-instance")),u=g(new Map),c=g(new Map),r=g(new Set),[e,m]=C(()=>new Map),$0=g(e);$0.current=e;let[W0,X0]=C(()=>new Map),Z0=g(W0);Z0.current=W0;let[q0,D0]=C(null),h=g(q0);h.current=q0;let[j0,Y0]=C(null),L0=g(j0);L0.current=j0;let s=Y1.getDockPanes().length>0,[Q0,O0]=C(!1),x0=R(()=>O0((V0)=>!V0),[]),r0=R(()=>{B(N,{label:"Terminal"})},[B,N]),l0=R(()=>{B(F,{label:"VNC"})},[B,F]),n0=R((V0)=>{let v=typeof V0==="string"?V0.trim():"";if(!v)return l4("pane-instance");if(v===N&&!e0.get(v)){if(!f.current)f.current=l4("pane-instance");return f.current}let a=P.current.get(v);if(a)return a;let _0=l4("pane-instance");return P.current.set(v,_0),_0},[N]),m0=G0(()=>!$&&Q?W0.get(Q)||null:null,[W0,$,Q]),_1=!$?j0:null,S0=R((V0)=>{if(!V0)return;hF(V0),c.current.delete(V0),r.current.delete(V0),D0((v)=>v?.panePath===V0?null:v),m((v)=>{if(!v.has(V0))return v;let n=new Map(v);return n.delete(V0),n})},[]),o0=R((V0)=>{if(!V0)return;u.current.delete(V0),c.current.delete(V0),r.current.delete(V0),S0(V0),Y0((v)=>v?.panePath===V0?null:v),X0((v)=>{if(!v.has(V0))return v;let n=new Map(v);return n.delete(V0),n})},[S0]),c0=R((V0,v={})=>{let n=typeof V0==="string"?V0.trim():"";if(!n)return!1;if(Q3({panePath:n,terminalTabPath:N}))return!1;let a=u.current.get(n),_0=Boolean(Z0.current.get(n)),H0=Boolean(L0.current?.panePath===n);if(o0(n),n===N&&H0&&!_0)O0(!0);else if(n===N&&_0)B(n,{label:"Terminal"});else if(e0.get(n))e0.activate(n);else B(n);if(v.closeDetachedWindow!==!1&&a&&typeof a.close==="function")G3(a);return!0},[o0,B,O0,N]),$1=R(()=>{if($)return;if(!XI())return;let V0=Date.now();for(let[v,n]of c.current.entries()){if(n>V0)continue;c.current.delete(v),c0(v,{closeDetachedWindow:!1})}},[$,c0]),i0=R((V0,v={})=>{let n=typeof V0==="string"?V0.trim():"";if(!n)return!1;let a={panePath:n,terminalTabPath:N,allowLiveTransfer:v.allowLiveTransfer,reason:v.reason};if(q3(a))return u.current.delete(n),c.current.delete(n),r.current.add(n),!0;if(!GD(a))return c0(n,{closeDetachedWindow:!1});return c.current.set(n,Date.now()+$I),$1(),!0},[$1,c0,N]),H1=R((V0)=>{let v=typeof V0==="string"?V0.trim():"";if(!v)return null;let n=n0(v),a=l4("pane-window");return{paneInstanceId:n,paneWindowId:a,params:_D({paneInstanceId:n,paneWindowId:a,paneSourceWindowId:J.current})}},[n0]),Q1=R((V0,v,n,a)=>{let _0=typeof V0==="string"?V0.trim():"";if(!_0||!a)return;let H0=jD({panePath:_0,paneInstanceId:a.pane_instance_id,ownerWindowId:a.pane_window_id,sourceWindowId:a.pane_source_window_id,label:v});if(!H0)return;if(u.current.set(_0,n||null),_0===N&&!e0.get(_0)){D0(H0);return}m((E0)=>{let C0=new Map(E0);return C0.set(_0,H0),C0})},[N]),P0=R((V0,v)=>{let n=typeof V0?.panePath==="string"?V0.panePath.trim():"";if(!n)return!1;let a=u.current.get(n);if(a&&v&&a!==v)return!1;let _0=$0.current.get(n)||null;if(BZ(_0,V0)){let k0=W.current,h0=b5({panePath:n,terminalTabPath:N});if(h0&&k0&&typeof k0.moveHost==="function")S5({panePath:n,paneInstanceId:_0.paneInstanceId,paneWindowId:_0.ownerWindowId,instance:k0,releaseSourceHost:()=>{if(W.current===k0)W.current=null}});if(h0&&W.current)W.current=null;let v0=FZ(_0);if(!v0)return!1;return m((p0)=>{if(!p0.has(n))return p0;let d0=new Map(p0);return d0.delete(n),d0}),X0((p0)=>{let d0=new Map(p0);return d0.set(n,v0),d0}),ZD({panePath:n,terminalTabPath:N,closeTab:(p0)=>e0.close(p0),sourceHost:"tab"}),!0}if(n!==N)return!1;let H0=h.current,A0=E.current,E0=b5({panePath:n,terminalTabPath:N});if(E0&&H0&&A0&&typeof A0.moveHost==="function")S5({panePath:n,paneInstanceId:H0.paneInstanceId,paneWindowId:H0.ownerWindowId,instance:A0,releaseSourceHost:()=>{if(E.current===A0)E.current=null}});if(E0&&E.current)E.current=null;if(!BZ(H0,V0))return!1;let C0=FZ(H0);if(!C0)return!1;return D0(null),Y0(C0),ZD({panePath:n,terminalTabPath:N,setDockVisible:O0,sourceHost:"dock"}),!0},[O0,N]),J0=R((V0=!1,v=!0)=>{if(!$)return!1;let n=I.current;if(!p4(n))return!1;if(typeof window>"u"||!window.opener||window.opener.closed)return!1;if(A.current){if(V0)G3(window);return!0}let a=n.panePath||j,_0=a===N?E.current||W.current:W.current,H0=v&&b5({panePath:a,terminalTabPath:N}),A0=GI({panePath:a,paneInstanceId:n.paneInstanceId,paneOverrideId:a===N?null:typeof Y?.get==="function"?Y.get(a)||null:null,terminalTabPath:N,viewState:a===N?null:e0.getViewState(a)||null,allowLiveTransfer:H0,instance:_0});if(!A0)return!1;if(H0&&A0.paneTransferToken&&typeof _0?.moveHost==="function"){if(E.current===_0)E.current=null;if(W.current===_0)W.current=null}if(!UZ(window.opener,A0,window.location.origin))return!1;if(A.current=!0,V0)G3(window);return!0},[$,j,Y,N]),z1=R(()=>J0(!0,!0),[J0]);b(()=>{if(!$||typeof window>"u")return;let V0=()=>{let v=I.current,n=p4(v)?v.panePath||j||"":"";if(q3({panePath:n,terminalTabPath:N,allowLiveTransfer:!1,reason:"closed-window"}))return;J0(!1,!1)};return window.addEventListener("pagehide",V0),window.addEventListener("beforeunload",V0),()=>{window.removeEventListener("pagehide",V0),window.removeEventListener("beforeunload",V0)}},[$,J0]);let G1=G0(()=>HN(q,Q),[Q,q]),J1=G0(()=>WN(Y,Q),[Y,Q]),F0=G0(()=>hj(Z,G1,j),[G1,Z,j]),R0=G0(()=>Q&&V.has(Q)?"saved":null,[V,Q]),w0=g(R0);b(()=>{w0.current=R0},[R0]);let j1=G0(()=>LN(q,K,V,Q),[V,K,Q,q]),x1=G0(()=>JN(j,F),[j,F]),K1=G0(()=>EN(j,N,j1,x1),[x1,j1,j,N]),V1=AN($,X,G,s,Q0),[Z1,E1]=C(!1),c1=g(!1),g1=R(()=>{if(!G||X)return;if(c1.current=Q0,Q0)O0(!1);E1(!0)},[X,Q0,G]),O1=R(()=>{if(!Z1)return;if(E1(!1),c1.current)O0(!0),c1.current=!1},[Z1]),e1=R(()=>{if(Z1){O1();return}g1()},[g1,O1,Z1]);b(()=>{if(Z1&&!G)O1()},[G,O1,Z1]),b(()=>{let V0=new Set(q.map((a)=>a.id)),v=new Set($0.current.keys()),n=new Set(Z0.current.keys());for(let a of Array.from(P.current.keys()))if(!_I({panePath:a,openTabIds:V0,pendingDetachedTabPaths:v,detachedTabPaths:n,terminalTabPath:N,hasPendingDetachedDockPane:Boolean(h.current),hasDetachedDockPane:Boolean(L0.current)}))P.current.delete(a)},[q,N]),b(()=>{if($||typeof window>"u")return;let V0=(v)=>{if(v.origin!==window.location.origin)return;let n=v.data;if(!n||typeof n!=="object")return;if(n.type==="piclaw-pane-detach-claim"){P0({panePath:n.panePath,paneInstanceId:n.paneInstanceId,paneWindowId:n.paneWindowId},v.source);return}if(n.type!=="piclaw-pane-reattach-request")return;let a=qI({payload:n}),_0=a?.panePath||"";if(!_0)return;if(a?.editorTransfer)k.current.set(_0,a.editorTransfer);if(a?.hostTransfer)if(O.current.set(_0,a.hostTransfer),a.allowLiveTransfer&&v.source)T.current.set(_0,v.source);else T.current.delete(_0);let H0=Z0.current.get(_0)||null,A0=_0===N?L0.current:null,E0=b5({panePath:_0,terminalTabPath:N}),C0=H0||A0;if(!C0)return;if(a?.paneInstanceId&&a.paneInstanceId!==C0.paneInstanceId)return;if(Q3({panePath:_0,terminalTabPath:N})){T.current.delete(_0),y.current.delete(_0),O.current.delete(_0),k.current.delete(_0);return}if(a?.hostTransfer&&a.allowLiveTransfer&&E0)y.current.set(_0,{panePath:_0,paneInstanceId:C0.paneInstanceId,paneWindowId:C0.ownerWindowId});else y.current.delete(_0);if(q3({panePath:_0,terminalTabPath:N,allowLiveTransfer:a?.allowLiveTransfer,reason:"message"})){T.current.delete(_0),u.current.delete(_0),c.current.delete(_0),r.current.add(_0);return}i0(_0,{allowLiveTransfer:a?.allowLiveTransfer,reason:"message"})};return window.addEventListener("message",V0),()=>window.removeEventListener("message",V0)},[P0,$,i0,N]),b(()=>{if($||typeof window>"u"||typeof document>"u")return;let V0=()=>$1();window.addEventListener("focus",V0),window.addEventListener("pageshow",V0),document.addEventListener("visibilitychange",V0);let v=setInterval(()=>{$1();for(let[n,a]of u.current.entries()){if(!a||!a.closed)continue;if(n===N?Boolean(h.current):$0.current.has(n)){u.current.delete(n),S0(n);continue}if(Q3({panePath:n,terminalTabPath:N})){o0(n);continue}if(q3({panePath:n,terminalTabPath:N,allowLiveTransfer:!1,reason:"closed-window"})){u.current.delete(n),c.current.delete(n),r.current.add(n);continue}if(r.current.has(n)){u.current.delete(n);continue}i0(n,{allowLiveTransfer:!1,reason:"closed-window"})}},750);return()=>{window.removeEventListener("focus",V0),window.removeEventListener("pageshow",V0),document.removeEventListener("visibilitychange",V0),clearInterval(v)}},[o0,S0,$1,$,i0,N]),b(()=>{if(!$||!j)return;if(e0.getActiveId()===j)return;let v=L.current?.path===j?L.current:null,n=x.current?.path===j?x.current:null;B(j,{...Z?{label:Z}:{},...v?.paneOverrideId?{paneOverrideId:v.paneOverrideId}:{},...v?.viewState?{viewState:v.viewState}:{},...n?.payload?.diffMode?{diffMode:n.payload.diffMode}:{}})},[B,Z,$,j]),b(()=>{if(!$)return;let V0=I.current;if(!p4(V0))return;if(typeof window>"u"||!window.opener||window.opener.closed)return;UZ(window.opener,{type:"piclaw-pane-detach-claim",panePath:V0.panePath,paneInstanceId:V0.paneInstanceId,paneWindowId:V0.paneWindowId},window.location.origin)},[$]),b(()=>{let V0=H.current;if(!V0)return;if(W.current)W.current.dispose(),W.current=null;let v=Q;if(!v)return;if(!$&&m0?.panePath===v){V0.innerHTML="";return}let n=L.current?.path===v?L.current:null,a=k.current.get(v)||null,_0=n||a,H0=x.current?.path===v?x.current:null,A0=O.current.get(v)||null,E0=H0||A0,C0=J1||_0?.paneOverrideId||null,k0=E0?.payload?{...E0.payload}:null;if(w0.current)k0={...k0||{},diffMode:w0.current};else if(k0&&"diffMode"in k0)delete k0.diffMode;let h0={path:v,mode:"edit",..._0?.content!==void 0?{content:_0.content}:{},..._0?.mtime!==void 0?{mtime:_0.mtime}:{},...k0?{transferState:k0}:{}},v0=(C0?Y1.get(C0):null)||Y1.resolve(h0)||Y1.get("editor");if(!v0){V0.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let p0=null,d0=!1,I0=(T0)=>{p0=T0,W.current=T0,T0.onDirtyChange?.((o)=>{e0.setDirty(v,o)}),T0.onSaveRequest?.(()=>{}),T0.onClose?.(()=>{D()});let N1=e0.getViewState(v);if(N1&&typeof T0.restoreViewState==="function")requestAnimationFrame(()=>T0.restoreViewState(N1));if(typeof T0.onViewStateChange==="function")T0.onViewStateChange((o)=>{e0.saveViewState(v,o)});let q1=I.current;if($&&p4(q1)&&typeof T0?.moveHost==="function"&&b5({panePath:v,terminalTabPath:N}))S5({panePath:v,paneInstanceId:q1.paneInstanceId||"",paneWindowId:q1.paneWindowId||"",instance:T0,releaseSourceHost:()=>{if(E.current===T0)E.current=null;if(W.current===T0)W.current=null}});XD(T0,{path:v,hostMode:$?"popout":"main",transferState:k0}).catch((o)=>{console.warn("[pane-attach] afterAttachToHost failed:",o)}),requestAnimationFrame(()=>T0.focus?.())};return(async()=>{let T0=I.current,N1=$&&p4(T0)&&T0.panePath===v?{panePath:v,paneInstanceId:T0.paneInstanceId||"",paneWindowId:T0.paneWindowId||""}:null,q1=y.current.get(v)||null,o=b5({panePath:v,terminalTabPath:N})?N1||q1:null,z0=$?typeof window<"u"&&window.opener&&!window.opener.closed?window.opener:null:T.current.get(v)||null,s0=$?"popout":"main";if(E0&&o&&z0)try{let t0=await lF(z0,o,V0,{path:v,hostMode:s0,transferState:k0});if(!d0&&t0){if(I0(t0),n)L.current=null;if(a)k.current.delete(v);if(H0)x.current=null;if(A0)O.current.delete(v);T.current.delete(v),y.current.delete(v);return}}catch(t0){console.warn("[pane-live-transfer] Failed to claim live pane instance:",t0)}if(d0)return;if(I0(v0.mount(V0,h0)),n)L.current=null;if(a)k.current.delete(v);if(H0)x.current=null;if(A0)O.current.delete(v);T.current.delete(v),y.current.delete(v)})(),()=>{if(d0=!0,W.current===p0)p0.dispose(),W.current=null}},[m0,J1,D,$,Q]),b(()=>{let V0=Q,v=W.current;if(!V0||typeof v?.setDiffMode!=="function")return;v.setDiffMode(R0)},[R0,Q]);let T1=R(async(V0)=>{let v=typeof Q==="string"?Q.trim():"",n=W.current;if(!v||!n?.setContent)return;if(typeof n.isDirty==="function"&&n.isDirty())return;if(!ZI(v,V0))return;try{let a=await z(v,1e6,"edit"),_0=typeof a?.text==="string"?a.text:"",H0=typeof a?.mtime==="string"&&a.mtime.trim()?a.mtime.trim():new Date().toISOString();n.setContent(_0,H0)}catch(a){console.warn("[workspace_update] Failed to refresh active pane:",a)}},[z,Q]);return b(()=>{let V0=M.current;if(E.current)E.current.dispose(),E.current=null;if(!V0||!s||!Q0)return;if(!$&&_1?.panePath===N){V0.innerHTML="";return}let v=Y1.getDockPanes()[0];if(!v){V0.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let n=x.current?.path===N?x.current:null,a=O.current.get(N)||null,_0=n||a,H0=v.mount(V0,{mode:"view",..._0?.payload?{transferState:_0.payload}:{}});if(E.current=H0,XD(H0,{path:N,hostMode:$?"popout":"main",transferState:_0?.payload||null}).catch((A0)=>{console.warn("[pane-attach] afterAttachToHost failed:",A0)}),n)x.current=null;if(a)O.current.delete(N);return requestAnimationFrame(()=>H0.focus?.()),()=>{if(E.current===H0)H0.dispose(),E.current=null}},[_1,Q0,s,$,N]),{editorContainerRef:H,editorInstanceRef:W,dockContainerRef:M,dockInstanceRef:E,hasDockPanes:s,dockVisible:Q0,setDockVisible:O0,toggleDock:x0,openTerminalTab:r0,openVncTab:l0,panePopoutTitle:F0,panePopoutHasMenuActions:j1,hidePanePopoutControls:K1,showEditorPaneContainer:V1,zenMode:Z1,exitZenMode:O1,toggleZenMode:e1,refreshActiveEditorFromWorkspace:T1,detachedTabs:W0,activeDetachedTab:m0,detachedDockPane:_1,buildPaneDetachTransfer:H1,registerDetachedPaneWindow:Q1,reattachPane:c0,requestPanePopoutReattach:z1,canReattachPanePopout:$&&p4(I.current)&&!Q3({panePath:j||"",terminalTabPath:N})}}function QI(_){return{removeFileRefRef:_.removeFileRefRef,editorState:_.editorState,paneRuntime:_.paneRuntime}}function QD(_){let $=g(null),j=eU({onTabClosed:(X)=>$.current?.(X)}),Z=qD({panePopoutMode:_.panePopoutMode,panePopoutPath:_.panePopoutPath,panePopoutLabel:_.panePopoutLabel,chatOnlyMode:_.chatOnlyMode,editorOpen:j.editorOpen,tabStripTabs:j.tabStripTabs,tabStripActiveId:j.tabStripActiveId,previewTabs:j.previewTabs,diffTabs:j.diffTabs,tabPaneOverrides:j.tabPaneOverrides,terminalTabPath:_.terminalTabPath,vncTabPrefix:_.vncTabPrefix,openEditor:j.openEditor,closeEditor:j.closeEditor,getWorkspaceFile:_.getWorkspaceFile});return QI({removeFileRefRef:$,editorState:j,paneRuntime:Z})}y1();var Y3=1280,N3=820;function K3(_){if(typeof _!=="number"||!Number.isFinite(_)||_<=0)return null;return _}function n6(_){return typeof _==="string"&&_.trim()?_.trim():null}function VI(_){let $=n6(_);if(!$)return!1;if($.startsWith("/")||$.startsWith("\\"))return!1;if($.includes("://"))return!1;if($==="."||$===".."||$.startsWith("../"))return!1;return!0}function KI(_){if(_.isMobile)return!1;let $=K3(_.windowWidth),j=K3(_.windowHeight);if($===null||j===null)return!1;if($<Y3||j<N3)return!1;let Z=K3(_.screenWidth),X=K3(_.screenHeight);if(Z!==null&&Z<Y3)return!1;if(X!==null&&X<N3)return!1;return!0}function YI(_){let $=_?.navigator,j=String($?.userAgent||""),Z=Number($?.maxTouchPoints||0);return(typeof _?.matchMedia==="function"?Boolean(_.matchMedia("(pointer: coarse)")?.matches):!1)||Z>1||/Android|iPhone|iPad|iPod/i.test(j)}function NI(_){if(!_||_.kind!=="custom")return null;let $=n6(_.request_id),j=_.options&&typeof _.options==="object"?_.options:null;if(!$||!j||j.action!=="open_workspace_file")return null;let Z=n6(j.path);if(!VI(Z))return null;let X=j.target==="tab"?"tab":"popout";return{requestId:$,chatJid:n6(_.chat_jid),path:Z,label:n6(j.label),target:X}}async function BI(_,$,j){await H5(_,$,j||void 0)}async function VD(_,$){let j=NI(_?.detail?.payload);if(!j)return!1;if(j.chatJid&&j.chatJid!==$.currentChatJid)return!1;let Z=$.respond||BI,X=$.windowObject||(typeof window<"u"?window:void 0),G={width:Number(X?.innerWidth||0)||void 0,height:Number(X?.innerHeight||0)||void 0},q={width:Y3,height:N3};if(j.target==="popout"){if(!KI({windowWidth:X?.innerWidth,windowHeight:X?.innerHeight,screenWidth:X?.screen?.availWidth,screenHeight:X?.screen?.availHeight,isMobile:YI(X)}))return $.showIntentToast?.("Editor popout unavailable",`Need at least ${Y3}×${N3} viewport space for a separate editor window.`,"warning",4500),await Z(j.requestId,{ok:!1,opened:!1,reason:"insufficient_screen_space",detail:"Browser viewport is too small for a separate editor window.",target:j.target,path:j.path,viewport:G,minimum_viewport:q},j.chatJid),!0;let K=await $.popOutPane(j.path,j.label);return await Z(j.requestId,{ok:K,opened:K,reason:K?void 0:"popout_failed",detail:K?void 0:"The browser blocked the editor popout window.",target:j.target,path:j.path},j.chatJid),!0}return $.openEditor(j.path),await Z(j.requestId,{ok:!0,opened:!0,target:j.target,path:j.path},j.chatJid),!0}var DZ="piclaw:oobe:provider-missing:dismissed";function FI(_){if(!_||typeof _!=="object")return 0;let $=Array.isArray(_.model_options)?_.model_options.filter(Boolean):[];if($.length>0)return $.length;return(Array.isArray(_.models)?_.models.filter((Z)=>typeof Z==="string"&&Z.trim()):[]).length}function UI(_){if(!_||typeof _!=="object")return!1;let $=_.current;return typeof $==="string"&&$.trim().length>0}function KD(_){let{panePopoutMode:$=!1,modelsLoaded:j,modelPayload:Z,providerMissingDismissed:X=!1}=_,G=FI(Z),q=G>0,Q=UI(Z),K=q||Q;if($||!j)return{kind:"hidden",hasAvailableModels:q,availableModelCount:G,hasConfiguredModelHint:Q};if(K)return{kind:"hidden",hasAvailableModels:q,availableModelCount:G,hasConfiguredModelHint:Q};return{kind:X?"hidden":"provider-missing",hasAvailableModels:q,availableModelCount:G,hasConfiguredModelHint:Q}}var DI=BN();vY();await yN();var{searchPosts:zI,deletePost:HI,getAgents:WI,getAgentThought:YD,setAgentThoughtVisibility:ND,getAgentStatus:OI,getAgentContext:LI,getAutoresearchStatus:JI,stopAutoresearch:EI,dismissAutoresearch:AI,getAgentModels:MI,getActiveChatAgents:kI,getChatBranches:TI,renameChatBranch:yI,pruneChatBranch:wI,purgeChatBranch:II,restoreChatBranch:xI,getAgentQueueState:CI,steerAgentQueueItem:PI,removeAgentQueueItem:fI,streamSidePrompt:RI,getWorkspaceFile:SI,getThread:bI,getTimeline:gI,sendAgentMessage:uI,forkChatBranch:vI,createRootChatSession:mI}=wN;function cI({locationParams:_,navigate:$}){let{currentChatJid:j,chatOnlyMode:Z,panePopoutMode:X,panePopoutPath:G,panePopoutLabel:q,branchLoaderMode:Q,branchLoaderSourceChatJid:K}=G0(()=>zN(_),[_]);b(()=>{if(typeof window>"u")return;window.__piclawCurrentChatJid=j,window.dispatchEvent?.(new CustomEvent("piclaw:current-chat-changed",{detail:{chatJid:j}}))},[j]);let V=aU({currentChatJid:j,branchLoaderMode:Q}),[Y,N]=C(()=>L$(DZ,!1)),[F,B]=C(null),D=R((S0)=>{let o0=typeof S0==="string"?S0:"";if(!o0.trim())return;B({token:`prefill-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`,text:o0})},[]),{agentStatus:z,setAgentStatus:H,agentDraft:W,setAgentDraft:M,agentPlan:E,setAgentPlan:L,agentThought:x,setAgentThought:I,pendingRequest:J,setPendingRequest:k,currentTurnId:O,setCurrentTurnId:T,steerQueuedTurnId:y,setSteerQueuedTurnId:A,lastAgentEventRef:P,lastSilenceNoticeRef:f,isAgentRunningRef:u,draftBufferRef:c,thoughtBufferRef:r,previewResyncPendingRef:e,previewResyncGenerationRef:m,pendingRequestRef:$0,stalledPostIdRef:W0,currentTurnIdRef:X0,steerQueuedTurnIdRef:Z0,thoughtExpandedRef:q0,draftExpandedRef:D0}=bq(),h=QD({panePopoutMode:X,panePopoutPath:G,panePopoutLabel:q,chatOnlyMode:Z,terminalTabPath:q5,vncTabPrefix:e_,getWorkspaceFile:SI}),j0=yB({timelineRef:V.timelineRef,viewStateRef:V.viewStateRef,followupQueueRowIdsRef:V.followupQueueRowIdsRef,currentChatJid:j,currentHashtag:V.currentHashtag,searchQuery:V.searchQuery,followupQueueItems:V.followupQueueItems,onIdentity:R((S0)=>{if(!S0)return;let{assistant_name:o0,assistant_avatar_url:c0}=S0;if(o0||c0)V.setAgents((P0)=>{let J0=P0.default||{id:"default"},z1=o0&&!J0.name,G1=c0&&!J0.avatar_url;if(!z1&&!G1)return P0;return{...P0,["default"]:{...J0,...z1?{name:o0}:{},...G1?{avatar_url:c0}:{}}}});let{user_name:$1,user_avatar_url:i0,user_avatar_background:H1}=S0;if($1||i0||H1)V.setUserProfile((Q1)=>{let P0=$1&&!Q1.name,J0=i0&&!Q1.avatar_url,z1=H1&&!Q1.avatar_background;if(!P0&&!J0&&!z1)return Q1;return{...Q1,...P0?{name:$1}:{},...J0?{avatar_url:i0}:{},...z1?{avatar_background:H1}:{}}})},[V.setAgents,V.setUserProfile])}),Y0=FB({environment:{isRenameBranchFormOpen:V.isRenameBranchFormOpen,renameBranchNameInputRef:V.renameBranchNameInputRef,appShellRef:V.appShellRef,setIsWebAppMode:V.setIsWebAppMode,workspaceOpen:V.workspaceOpen,setWorkspaceOpen:V.setWorkspaceOpen,btwSession:V.btwSession,agents:V.agents,agentsRef:V.agentsRef,currentChatJid:j,activeChatJidRef:V.activeChatJidRef,userProfile:V.userProfile,userProfileRef:V.userProfileRef,brandingRef:V.brandingRef,panePopoutMode:X},composeReferences:{setIntentToast:V.setIntentToast,intentToastTimerRef:V.intentToastTimerRef,editorOpen:h.editorState.editorOpen,openEditor:h.editorState.openEditor,resolvePane:(S0)=>Y1.resolve(S0),tabStripActiveId:h.editorState.tabStripActiveId,setFileRefs:V.setFileRefs,setFolderRefs:V.setFolderRefs,setMessageRefs:V.setMessageRefs,currentChatJid:j,currentHashtag:V.currentHashtag,searchQuery:V.searchQuery,searchOpen:V.searchOpen,setCurrentHashtag:V.setCurrentHashtag,setSearchQuery:V.setSearchQuery,setSearchOpen:V.setSearchOpen,navigate:$,chatOnlyMode:Z,getThread:bI,setPosts:j0.setPosts},agentActivity:{lastActivityTtlMs:oq,lastActivityTimerRef:V.lastActivityTimerRef,lastActivityTokenRef:V.lastActivityTokenRef,lastAgentEventRef:P,lastSilenceNoticeRef:f,isAgentRunningRef:u,setIsAgentTurnActive:V.setIsAgentTurnActive,setAgentStatus:H,draftBufferRef:c,thoughtBufferRef:r,pendingRequestRef:$0,lastAgentResponseRef:V.lastAgentResponseRef,currentTurnIdRef:X0,steerQueuedTurnIdRef:Z0,agentStatusRef:V.agentStatusRef,silentRecoveryRef:V.silentRecoveryRef,thoughtExpandedRef:q0,draftExpandedRef:D0,setCurrentTurnId:T,setSteerQueuedTurnId:A,currentTurnIdRefForPanel:X0,setAgentThoughtVisibility:ND,getAgentThought:YD,setAgentThought:I,setAgentDraft:M},chatPaneRuntime:{isAgentTurnActive:V.isAgentTurnActive,steerQueuedTurnId:y,currentTurnId:O,steerQueuedTurnIdRef:Z0,setSteerQueuedTurnId:A,agentStatus:z,agentDraft:W,agentPlan:E,agentThought:x,pendingRequest:J,pendingRequestRef:$0,followupQueueItems:V.followupQueueItems,activeModel:V.activeModel,activeThinkingLevel:V.activeThinkingLevel,supportsThinking:V.supportsThinking,activeModelUsage:V.activeModelUsage,contextUsage:V.contextUsage,isAgentRunningRef:u,wasAgentActiveRef:V.wasAgentActiveRef,draftBufferRef:c,thoughtBufferRef:r,lastAgentEventRef:P,lastSilenceNoticeRef:f,lastAgentResponseRef:V.lastAgentResponseRef,currentTurnIdRef:X0,thoughtExpandedRef:q0,draftExpandedRef:D0,agentStatusRef:V.agentStatusRef,silentRecoveryRef:V.silentRecoveryRef,setIsAgentTurnActive:V.setIsAgentTurnActive,setAgentStatus:H,setAgentDraft:M,setAgentPlan:L,setAgentThought:I,setPendingRequest:k,setCurrentTurnId:T,setFollowupQueueItems:V.setFollowupQueueItems,setActiveModel:V.setActiveModel,setActiveThinkingLevel:V.setActiveThinkingLevel,setSupportsThinking:V.setSupportsThinking,setActiveModelUsage:V.setActiveModelUsage,setContextUsage:V.setContextUsage,lastNotifiedIdRef:V.lastNotifiedIdRef,agentsRef:V.agentsRef,notify:V.notify,shouldNotifyLocallyForChat:V.shouldNotifyLocallyForChat},recovery:{isAgentRunningRef:u,lastSilenceNoticeRef:f,lastAgentEventRef:P,currentTurnIdRef:X0,thoughtExpandedRef:q0,draftExpandedRef:D0,draftBufferRef:c,thoughtBufferRef:r,pendingRequestRef:$0,lastAgentResponseRef:V.lastAgentResponseRef,agentStatusRef:V.agentStatusRef,stalledPostIdRef:W0,scrollToBottomRef:j0.scrollToBottomRef,setCurrentTurnId:T,setAgentDraft:M,setAgentPlan:L,setAgentThought:I,setPendingRequest:k,setAgentStatus:H,setPosts:j0.setPosts,dedupePosts:W5},viewState:{viewStateRef:V.viewStateRef,currentHashtag:V.currentHashtag,searchQuery:V.searchQuery,searchOpen:V.searchOpen},removeFileRefRef:h.removeFileRefRef}),L0=pq({appShellRef:V.appShellRef,sidebarWidthRef:V.sidebarWidthRef,editorWidthRef:V.editorWidthRef,dockHeightRef:V.dockHeightRef}),{chatRefreshLifecycle:s,timelineViewActions:Q0,isComposeBoxAgentActive:O0,followupActions:x0,sidepanelActions:r0,branchPaneActions:l0}=mU({routeState:{currentChatJid:j,currentRootChatJid:V.currentRootChatJid,chatOnlyMode:Z,navigate:$,branchLoaderMode:Q,branchLoaderSourceChatJid:K,isWebAppMode:V.isWebAppMode},searchState:{currentHashtag:V.currentHashtag,setCurrentHashtag:V.setCurrentHashtag,searchQuery:V.searchQuery,setSearchQuery:V.setSearchQuery,searchOpen:V.searchOpen,setSearchOpen:V.setSearchOpen,searchScope:V.searchScope,setSearchScope:V.setSearchScope},shellState:{activeChatAgents:V.activeChatAgents,currentChatBranches:V.currentChatBranches,currentBranchRecord:V.currentBranchRecord,contextUsage:V.contextUsage,activeModel:V.activeModel,activeThinkingLevel:V.activeThinkingLevel,supportsThinking:V.supportsThinking,activeModelUsage:V.activeModelUsage,connectionStatus:V.connectionStatus,notificationsEnabled:V.notificationsEnabled,notificationPermission:V.notificationPermission,workspaceOpen:V.workspaceOpen,setWorkspaceOpen:V.setWorkspaceOpen,userProfile:V.userProfile,agents:V.agents,removingPostIds:V.removingPostIds,btwSession:V.btwSession},timeline:j0,interaction:Y0,paneRuntime:h.paneRuntime,refs:{activeChatJidRef:V.activeChatJidRef,queueRefreshGenRef:V.queueRefreshGenRef,dismissedQueueRowIdsRef:V.dismissedQueueRowIdsRef,wasAgentActiveRef:V.wasAgentActiveRef,viewStateRef:V.viewStateRef,agentStatusRef:V.agentStatusRef,pendingRequestRef:$0,thoughtBufferRef:r,draftBufferRef:c,previewResyncPendingRef:e,previewResyncGenerationRef:m,isAgentRunningRef:u,currentTurnIdRef:X0,silentRecoveryRef:V.silentRecoveryRef,lastAgentEventRef:P,lastSilenceNoticeRef:f,staleUiVersionRef:V.staleUiVersionRef,staleUiReloadScheduledRef:V.staleUiReloadScheduledRef,hasConnectedOnceRef:V.hasConnectedOnceRef,sidebarWidthRef:V.sidebarWidthRef,appShellRef:V.appShellRef,agentsRef:V.agentsRef,paneStateOwnerChatJidRef:V.paneStateOwnerChatJidRef,chatPaneStateByChatRef:V.chatPaneStateByChatRef,dismissedLiveWidgetKeysRef:V.dismissedLiveWidgetKeysRef,draftThrottleRef:V.draftThrottleRef,thoughtThrottleRef:V.thoughtThrottleRef,followupQueueItemsRef:V.followupQueueItemsRef,lastAgentResponseRef:V.lastAgentResponseRef,thoughtExpandedRef:q0,draftExpandedRef:D0,steerQueuedTurnIdRef:Z0,btwAbortRef:V.btwAbortRef,renameBranchInFlightRef:V.renameBranchInFlightRef,renameBranchLockUntilRef:V.renameBranchLockUntilRef,editorWidthRef:V.editorWidthRef,dockHeightRef:V.dockHeightRef},setters:{setFollowupQueueItems:V.setFollowupQueueItems,setContextUsage:V.setContextUsage,setExtensionStatusPanels:V.setExtensionStatusPanels,setPendingExtensionPanelActions:V.setPendingExtensionPanelActions,setExtensionWorkingState:V.setExtensionWorkingState,setAgentStatus:H,setAgentDraft:M,setAgentPlan:L,setAgentThought:I,setPendingRequest:k,setConnectionStatus:V.setConnectionStatus,setStateAccessFailed:V.setStateAccessFailed,setAgents:V.setAgents,setUserProfile:V.setUserProfile,setActiveChatAgents:V.setActiveChatAgents,setCurrentChatBranches:V.setCurrentChatBranches,setActiveModel:V.setActiveModel,setActiveThinkingLevel:V.setActiveThinkingLevel,setSupportsThinking:V.setSupportsThinking,setActiveModelUsage:V.setActiveModelUsage,setAgentModelsPayload:V.setAgentModelsPayload,setHasLoadedAgentModels:V.setHasLoadedAgentModels,setHasMore:j0.setHasMore,setFloatingWidget:V.setFloatingWidget,setSteerQueuedTurnId:A,setRemovingPostIds:V.setRemovingPostIds,setBtwSession:V.setBtwSession,setWorkspaceOpen:V.setWorkspaceOpen,setRenameBranchNameDraft:V.setRenameBranchNameDraft,setIsRenameBranchFormOpen:V.setIsRenameBranchFormOpen,setIsRenamingBranch:V.setIsRenamingBranch},services:{searchPosts:zI,deletePost:HI,getAgentQueueState:CI,getAgentContext:LI,getAutoresearchStatus:JI,getAgentStatus:OI,getAgents:WI,getAgentModels:MI,getActiveChatAgents:kI,getChatBranches:TI,getTimeline:gI,stopAutoresearch:EI,dismissAutoresearch:AI,streamSidePrompt:RI,sendAgentMessage:uI,renameChatBranch:yI,pruneChatBranch:wI,purgeChatBranch:II,restoreChatBranch:xI,forkChatBranch:vI,createRootChatSession:mI,steerAgentQueueItem:PI,removeAgentQueueItem:fI,getAgentThought:YD,setAgentThoughtVisibility:ND,silenceRefreshMs:dq,silenceWarningMs:rq,silenceFinalizeMs:nq,isCompactionStatus:k$,currentAppAssetVersion:DI,tabStoreHasUnsaved:()=>e0.hasUnsaved(),agentStatus:z,isAgentTurnActive:V.isAgentTurnActive,openEditor:h.editorState.openEditor,activateTab:h.editorState.handleTabActivate,tabStripActiveId:h.editorState.tabStripActiveId,terminalTabPath:q5,resolveTab:(S0)=>e0.get(S0),closeTab:h.editorState.handleTabClose,editorOpen:h.editorState.editorOpen},helpers:{getFormLock:FN,readStoredNumber:E4}});b(()=>{return uU({timelineRef:V.timelineRef,activeChatAgents:V.activeChatAgents,currentChatJid:j,onSwitch:(S0)=>l0.handleBranchPickerChange(S0),isIOSDevice:E6,isLikelySafari:V3})},[V.timelineRef,V.activeChatAgents,j,l0.handleBranchPickerChange]);let n0=G0(()=>KD({panePopoutMode:X,modelsLoaded:V.hasLoadedAgentModels,modelPayload:V.agentModelsPayload,providerMissingDismissed:Y}),[X,V.hasLoadedAgentModels,V.agentModelsPayload,Y]),m0=R(()=>{DV()},[]),_1=R(()=>{N(!0),B1(DZ,"true")},[]);return b(()=>{if(!X||typeof document>"u")return;document.title=ON(q,h.paneRuntime.activePaneTab,G)},[h.paneRuntime.activePaneTab,q,X,G]),b(()=>{if(typeof window>"u")return;let S0=(o0)=>{VD(o0,{currentChatJid:j,openEditor:h.editorState.openEditor,popOutPane:l0.handlePopOutPane,showIntentToast:Y0.composeReferenceActions.showIntentToast})};return window.addEventListener("piclaw-extension-ui:request",S0),()=>{window.removeEventListener("piclaw-extension-ui:request",S0)}},[l0.handlePopOutPane,j,Y0.composeReferenceActions.showIntentToast,h.editorState.openEditor]),KN(xN({routeState:{branchLoaderMode:Q,panePopoutMode:X,currentChatJid:j,chatOnlyMode:Z,panePopoutPath:G},paneRuntime:h.paneRuntime,splitters:L0,orchestration:{branchPaneActions:l0,timelineViewActions:Q0,sidepanelActions:r0,followupActions:x0,chatRefreshLifecycle:s,isComposeBoxAgentActive:O0},interaction:Y0,timeline:j0,surface:{...V,oobePanelState:n0,composePrefillRequest:F,requestComposePrefill:D,handleOobeSetupProvider:m0,handleOobeShowModelPicker:m0,handleOobeOpenWorkspace:m0,handleDismissProviderMissingOobe:_1},editorState:h.editorState,agentState:{agentStatus:z,agentDraft:W,agentPlan:E,agentThought:x,pendingRequest:J,currentTurnId:O,steerQueuedTurnId:y,setPendingRequest:k,pendingRequestRef:$0,isCompactionStatus:k$},helpers:{formatBranchPickerLabel:W8,isIOSDevice:E6,terminalTabPath:q5}}))}function hI(){let{locationParams:_,navigate:$}=HV();return U`<${cI} locationParams=${_} navigate=${$} />`}var B3=document.getElementById("app");if(typeof window<"u")window.__PICLAW_APP_BOOTED__=!1;if(B3){if(H$(null,B3),B3.replaceChildren(),H$(U`<${hI} />`,B3),typeof window<"u")window.__PICLAW_APP_BOOTED__=!0}

//# debugId=D4DB944A2988612D64756E2164756E21
//# sourceMappingURL=app.bundle.js.map
