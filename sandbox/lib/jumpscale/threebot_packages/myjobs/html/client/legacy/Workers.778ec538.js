import{_ as r,a as t,b as a,c,i as e,s as n,d as s,S as o,e as i,t as l,f as u,A as f,g as h,h as v,j as d,k as E,l as k,m as T,I as w,J as p,o as N,p as g,z as A,F as m,x as R,G as b,w as W,K as D,L as I,r as _,n as H,y as L,M as G}from"./index.ac27d65c.js";import{_ as U,a as F}from"./asyncToGenerator.e4bc0cb4.js";import{g as S,f as O}from"./common.7c624c1d.js";import{S as V}from"./Spinner.38020c36.js";function x(r,t,a){var c=Object.create(r);return c.worker=t[a],c.i=a,c}function y(r){var t,a=new V({});return{c:function(){a.$$.fragment.c()},l:function(r){a.$$.fragment.l(r)},m:function(r,c){_(a,r,c),t=!0},p:H,i:function(r){t||(W(a.$$.fragment,r),t=!0)},o:function(r){R(a.$$.fragment,r),t=!1},d:function(r){L(a,r)}}}function B(r){var t,a,c;return{c:function(){t=i("div"),a=i("h2"),c=l("There is no Workers matching your criteria")},l:function(r){t=h(r,"DIV",{},!1);var e=v(t);a=h(e,"H2",{},!1);var n=v(a);c=d(n,"There is no Workers matching your criteria"),n.forEach(E),e.forEach(E)},m:function(r,e){N(r,t,e),g(t,a),g(a,c)},p:H,i:H,o:H,d:function(r){r&&E(t)}}}function $(r){for(var t,a,c,e,n,s,o,f,w,p,A,m,R,b,W,D,I,_,L,U,F,S,O,V,y,B,$,j,P,J,C,K,Y,z,q,Q,X,Z=r.workers,rr=[],tr=0;tr<Z.length;tr+=1)rr[tr]=M(x(r,Z,tr));return{c:function(){t=i("div"),a=i("div"),c=i("div"),e=i("table"),n=i("thead"),s=i("tr"),o=i("th"),f=l("#"),w=u(),p=i("th"),A=l("State"),m=u(),R=i("th"),b=l("Halt"),W=u(),D=i("th"),I=l("Pid"),_=u(),L=i("th"),U=l("Current Job"),F=u(),S=i("th"),O=l("Last Update"),V=u(),y=i("th"),B=l("Time Start"),$=u(),j=i("th"),P=l("Timeout"),J=u(),C=i("th"),K=l("Type"),Y=u(),z=i("th"),q=l("Error"),Q=u(),X=i("tbody");for(var r=0;r<rr.length;r+=1)rr[r].c();this.h()},l:function(r){t=h(r,"DIV",{},!1);var i=v(t);a=h(i,"DIV",{class:!0},!1);var l=v(a);c=h(l,"DIV",{class:!0},!1);var u=v(c);e=h(u,"TABLE",{class:!0},!1);var T=v(e);n=h(T,"THEAD",{},!1);var N=v(n);s=h(N,"TR",{},!1);var g=v(s);o=h(g,"TH",{scope:!0},!1);var H=v(o);f=d(H,"#"),H.forEach(E),w=k(g),p=h(g,"TH",{scope:!0},!1);var G=v(p);A=d(G,"State"),G.forEach(E),m=k(g),R=h(g,"TH",{scope:!0},!1);var x=v(R);b=d(x,"Halt"),x.forEach(E),W=k(g),D=h(g,"TH",{scope:!0},!1);var M=v(D);I=d(M,"Pid"),M.forEach(E),_=k(g),L=h(g,"TH",{scope:!0},!1);var Z=v(L);U=d(Z,"Current Job"),Z.forEach(E),F=k(g),S=h(g,"TH",{scope:!0},!1);var tr=v(S);O=d(tr,"Last Update"),tr.forEach(E),V=k(g),y=h(g,"TH",{scope:!0},!1);var ar=v(y);B=d(ar,"Time Start"),ar.forEach(E),$=k(g),j=h(g,"TH",{scope:!0},!1);var cr=v(j);P=d(cr,"Timeout"),cr.forEach(E),J=k(g),C=h(g,"TH",{scope:!0},!1);var er=v(C);K=d(er,"Type"),er.forEach(E),Y=k(g),z=h(g,"TH",{scope:!0},!1);var nr=v(z);q=d(nr,"Error"),nr.forEach(E),g.forEach(E),N.forEach(E),Q=k(T),X=h(T,"TBODY",{},!1);for(var sr=v(X),or=0;or<rr.length;or+=1)rr[or].l(sr);sr.forEach(E),T.forEach(E),u.forEach(E),l.forEach(E),i.forEach(E),this.h()},h:function(){T(o,"scope","col"),T(p,"scope","col"),T(R,"scope","col"),T(D,"scope","col"),T(L,"scope","col"),T(S,"scope","col"),T(y,"scope","col"),T(j,"scope","col"),T(C,"scope","col"),T(z,"scope","col"),T(e,"class","table table-striped"),T(c,"class","col-sm-12"),T(a,"class","row mt-5")},m:function(r,i){N(r,t,i),g(t,a),g(a,c),g(c,e),g(e,n),g(n,s),g(s,o),g(o,f),g(s,w),g(s,p),g(p,A),g(s,m),g(s,R),g(R,b),g(s,W),g(s,D),g(D,I),g(s,_),g(s,L),g(L,U),g(s,F),g(s,S),g(S,O),g(s,V),g(s,y),g(y,B),g(s,$),g(s,j),g(j,P),g(s,J),g(s,C),g(C,K),g(s,Y),g(s,z),g(z,q),g(e,Q),g(e,X);for(var l=0;l<rr.length;l+=1)rr[l].m(X,null)},p:function(r,t){if(r.workers||r.state){var a;for(Z=t.workers,a=0;a<Z.length;a+=1){var c=x(t,Z,a);rr[a]?rr[a].p(r,c):(rr[a]=M(c),rr[a].c(),rr[a].m(X,null))}for(;a<rr.length;a+=1)rr[a].d(1);rr.length=Z.length}},i:H,o:H,d:function(r){r&&E(t),G(rr,r)}}}function j(r){var t,a,c,e=r.worker.state+"";return{c:function(){t=i("td"),a=i("span"),c=l(e),this.h()},l:function(r){t=h(r,"TD",{},!1);var n=v(t);a=h(n,"SPAN",{class:!0},!1);var s=v(a);c=d(s,e),s.forEach(E),n.forEach(E),this.h()},h:function(){T(a,"class","badge badge-warning")},m:function(r,e){N(r,t,e),g(t,a),g(a,c)},p:function(r,t){r.workers&&e!==(e=t.worker.state+"")&&A(c,e)},d:function(r){r&&E(t)}}}function P(r){var t,a,c,e=r.worker.state+"";return{c:function(){t=i("td"),a=i("span"),c=l(e),this.h()},l:function(r){t=h(r,"TD",{},!1);var n=v(t);a=h(n,"SPAN",{class:!0},!1);var s=v(a);c=d(s,e),s.forEach(E),n.forEach(E),this.h()},h:function(){T(a,"class","badge badge-dark")},m:function(r,e){N(r,t,e),g(t,a),g(a,c)},p:function(r,t){r.workers&&e!==(e=t.worker.state+"")&&A(c,e)},d:function(r){r&&E(t)}}}function J(r){var t,a,c,e=r.worker.state+"";return{c:function(){t=i("td"),a=i("span"),c=l(e),this.h()},l:function(r){t=h(r,"TD",{},!1);var n=v(t);a=h(n,"SPAN",{class:!0},!1);var s=v(a);c=d(s,e),s.forEach(E),n.forEach(E),this.h()},h:function(){T(a,"class","badge badge-secondary")},m:function(r,e){N(r,t,e),g(t,a),g(a,c)},p:function(r,t){r.workers&&e!==(e=t.worker.state+"")&&A(c,e)},d:function(r){r&&E(t)}}}function C(r){var t,a,c,e=r.worker.state+"";return{c:function(){t=i("td"),a=i("span"),c=l(e),this.h()},l:function(r){t=h(r,"TD",{},!1);var n=v(t);a=h(n,"SPAN",{class:!0},!1);var s=v(a);c=d(s,e),s.forEach(E),n.forEach(E),this.h()},h:function(){T(a,"class","badge badge-info")},m:function(r,e){N(r,t,e),g(t,a),g(a,c)},p:function(r,t){r.workers&&e!==(e=t.worker.state+"")&&A(c,e)},d:function(r){r&&E(t)}}}function K(r){var t,a,c,e=r.worker.state+"";return{c:function(){t=i("td"),a=i("span"),c=l(e),this.h()},l:function(r){t=h(r,"TD",{},!1);var n=v(t);a=h(n,"SPAN",{class:!0},!1);var s=v(a);c=d(s,e),s.forEach(E),n.forEach(E),this.h()},h:function(){T(a,"class","badge badge-primary")},m:function(r,e){N(r,t,e),g(t,a),g(a,c)},p:function(r,t){r.workers&&e!==(e=t.worker.state+"")&&A(c,e)},d:function(r){r&&E(t)}}}function Y(r){var t,a,c,e=r.worker.state+"";return{c:function(){t=i("td"),a=i("span"),c=l(e),this.h()},l:function(r){t=h(r,"TD",{},!1);var n=v(t);a=h(n,"SPAN",{class:!0},!1);var s=v(a);c=d(s,e),s.forEach(E),n.forEach(E),this.h()},h:function(){T(a,"class","badge badge-danger")},m:function(r,e){N(r,t,e),g(t,a),g(a,c)},p:function(r,t){r.workers&&e!==(e=t.worker.state+"")&&A(c,e)},d:function(r){r&&E(t)}}}function z(r){var t,a,c,e=r.worker.state+"";return{c:function(){t=i("td"),a=i("span"),c=l(e),this.h()},l:function(r){t=h(r,"TD",{},!1);var n=v(t);a=h(n,"SPAN",{class:!0},!1);var s=v(a);c=d(s,e),s.forEach(E),n.forEach(E),this.h()},h:function(){T(a,"class","badge badge-success")},m:function(r,e){N(r,t,e),g(t,a),g(a,c)},p:function(r,t){r.workers&&e!==(e=t.worker.state+"")&&A(c,e)},d:function(r){r&&E(t)}}}function M(r){var t,a,c,e,n,s,o,f,T,w,p,m,R,b,W,D,I,_,H,L,G,U,F,S,O,V,x,y,B,$=r.worker.id+"",M=r.worker.halt+"",q=r.worker.pid+"",Q=r.worker.current_job+"",X=r.worker.last_update+"",Z=r.worker.time_start+"",rr=r.worker.timeout+"",tr=r.worker.type+"",ar=r.worker.error+"";function cr(r,t){return t.worker.state==t.state.RESULT?z:t.worker.state==t.state.ERROR?Y:t.worker.state==t.state.NEW?K:t.worker.state==t.state.RUNNING?C:t.worker.state==t.state.HALTED?J:t.worker.state==t.state.WAITING?P:j}var er=cr(0,r),nr=er(r);return{c:function(){t=i("tr"),a=i("td"),c=l($),e=u(),nr.c(),n=u(),s=i("td"),o=l(M),f=u(),T=i("td"),w=l(q),p=u(),m=i("td"),R=l(Q),b=u(),W=i("td"),D=l(X),I=u(),_=i("td"),H=l(Z),L=u(),G=i("td"),U=l(rr),F=u(),S=i("td"),O=l(tr),V=u(),x=i("td"),y=l(ar),B=u()},l:function(r){t=h(r,"TR",{},!1);var i=v(t);a=h(i,"TD",{},!1);var l=v(a);c=d(l,$),l.forEach(E),e=k(i),nr.l(i),n=k(i),s=h(i,"TD",{},!1);var u=v(s);o=d(u,M),u.forEach(E),f=k(i),T=h(i,"TD",{},!1);var N=v(T);w=d(N,q),N.forEach(E),p=k(i),m=h(i,"TD",{},!1);var g=v(m);R=d(g,Q),g.forEach(E),b=k(i),W=h(i,"TD",{},!1);var A=v(W);D=d(A,X),A.forEach(E),I=k(i),_=h(i,"TD",{},!1);var j=v(_);H=d(j,Z),j.forEach(E),L=k(i),G=h(i,"TD",{},!1);var P=v(G);U=d(P,rr),P.forEach(E),F=k(i),S=h(i,"TD",{},!1);var J=v(S);O=d(J,tr),J.forEach(E),V=k(i),x=h(i,"TD",{},!1);var C=v(x);y=d(C,ar),C.forEach(E),B=k(i),i.forEach(E)},m:function(r,i){N(r,t,i),g(t,a),g(a,c),g(t,e),nr.m(t,null),g(t,n),g(t,s),g(s,o),g(t,f),g(t,T),g(T,w),g(t,p),g(t,m),g(m,R),g(t,b),g(t,W),g(W,D),g(t,I),g(t,_),g(_,H),g(t,L),g(t,G),g(G,U),g(t,F),g(t,S),g(S,O),g(t,V),g(t,x),g(x,y),g(t,B)},p:function(r,a){r.workers&&$!==($=a.worker.id+"")&&A(c,$),er===(er=cr(0,a))&&nr?nr.p(r,a):(nr.d(1),(nr=er(a))&&(nr.c(),nr.m(t,n))),r.workers&&M!==(M=a.worker.halt+"")&&A(o,M),r.workers&&q!==(q=a.worker.pid+"")&&A(w,q),r.workers&&Q!==(Q=a.worker.current_job+"")&&A(R,Q),r.workers&&X!==(X=a.worker.last_update+"")&&A(D,X),r.workers&&Z!==(Z=a.worker.time_start+"")&&A(H,Z),r.workers&&rr!==(rr=a.worker.timeout+"")&&A(U,rr),r.workers&&tr!==(tr=a.worker.type+"")&&A(O,tr),r.workers&&ar!==(ar=a.worker.error+"")&&A(y,ar)},d:function(r){r&&E(t),nr.d()}}}function q(r){var t,a,c,e,n,s,o,I,_,H,L,G,U,F,S,O,V,x,j,P,J,C,K,Y,z,M,q,Q,X,Z,rr,tr,ar,cr,er,nr,sr,or,ir,lr,ur,fr,hr,vr,dr,Er,kr,Tr,wr,pr,Nr,gr,Ar,mr,Rr,br,Wr,Dr,Ir,_r,Hr,Lr,Gr,Ur,Fr,Sr,Or,Vr,xr,yr,Br,$r,jr,Pr,Jr,Cr,Kr,Yr,zr,Mr,qr,Qr,Xr,Zr,rt,tt,at,ct,et,nt,st,ot,it,lt,ut,ft,ht,vt=r.workers.length+"",dt=r.counters.new+"",Et=r.counters.success+"",kt=r.counters.error+"",Tt=r.counters.warning+"",wt=r.counters.running+"",pt=r.counters.halted+"",Nt=r.counters.waiting+"",gt=[$,B,y],At=[];function mt(r,t){return(null==st||r.filteredWorkers||r.isAllWorkersAvailable)&&(st=!!(t.filteredWorkers()&&t.filteredWorkers().length>0&&t.isAllWorkersAvailable)),st?0:((null==ot||r.filteredWorkers||r.isAllWorkersAvailable)&&(ot=!(0!=t.filteredWorkers().length||!t.isAllWorkersAvailable)),ot?1:t.isAllWorkersAvailable?-1:2)}return~(it=mt(null,r))&&(lt=At[it]=gt[it](r)),{c:function(){t=i("h1"),a=l("Workers"),c=u(),e=i("div"),n=i("div"),s=i("button"),o=l("All"),I=u(),_=i("div"),H=i("button"),L=l("New"),G=u(),U=i("div"),F=i("button"),S=l("Success"),O=u(),V=i("div"),x=i("button"),j=l("Failure"),P=u(),J=i("div"),C=i("button"),K=l("Warning"),Y=u(),z=i("div"),M=i("button"),q=l("Running"),Q=u(),X=i("div"),Z=i("button"),rr=l("Halted"),tr=u(),ar=i("div"),cr=i("button"),er=l("Waiting"),nr=u(),sr=i("div"),or=i("div"),ir=i("table"),lr=i("thead"),ur=i("tr"),fr=i("th"),hr=l("Total"),vr=u(),dr=i("th"),Er=l("New"),kr=u(),Tr=i("th"),wr=l("Success"),pr=u(),Nr=i("th"),gr=l("Failure"),Ar=u(),mr=i("th"),Rr=l("Warning"),br=u(),Wr=i("th"),Dr=l("Running"),Ir=u(),_r=i("th"),Hr=l("Halted"),Lr=u(),Gr=i("th"),Ur=l("Waiting"),Fr=u(),Sr=i("tbody"),Or=i("td"),Vr=l(vt),xr=u(),yr=i("td"),Br=l(dt),$r=u(),jr=i("td"),Pr=l(Et),Jr=u(),Cr=i("td"),Kr=l(kt),Yr=u(),zr=i("td"),Mr=l(Tt),qr=u(),Qr=i("td"),Xr=l(wt),Zr=u(),rt=i("td"),tt=l(pt),at=u(),ct=i("td"),et=l(Nt),nt=u(),lt&&lt.c(),ut=f(),this.h()},l:function(r){t=h(r,"H1",{},!1);var i=v(t);a=d(i,"Workers"),i.forEach(E),c=k(r),e=h(r,"DIV",{class:!0},!1);var l=v(e);n=h(l,"DIV",{class:!0},!1);var u=v(n);s=h(u,"BUTTON",{class:!0},!1);var T=v(s);o=d(T,"All"),T.forEach(E),u.forEach(E),I=k(l),_=h(l,"DIV",{class:!0},!1);var w=v(_);H=h(w,"BUTTON",{class:!0},!1);var p=v(H);L=d(p,"New"),p.forEach(E),w.forEach(E),G=k(l),U=h(l,"DIV",{class:!0},!1);var N=v(U);F=h(N,"BUTTON",{class:!0},!1);var g=v(F);S=d(g,"Success"),g.forEach(E),N.forEach(E),O=k(l),V=h(l,"DIV",{class:!0},!1);var A=v(V);x=h(A,"BUTTON",{class:!0},!1);var m=v(x);j=d(m,"Failure"),m.forEach(E),A.forEach(E),P=k(l),J=h(l,"DIV",{class:!0},!1);var R=v(J);C=h(R,"BUTTON",{class:!0},!1);var b=v(C);K=d(b,"Warning"),b.forEach(E),R.forEach(E),Y=k(l),z=h(l,"DIV",{class:!0},!1);var W=v(z);M=h(W,"BUTTON",{class:!0},!1);var D=v(M);q=d(D,"Running"),D.forEach(E),W.forEach(E),Q=k(l),X=h(l,"DIV",{class:!0},!1);var y=v(X);Z=h(y,"BUTTON",{class:!0},!1);var B=v(Z);rr=d(B,"Halted"),B.forEach(E),y.forEach(E),tr=k(l),ar=h(l,"DIV",{class:!0},!1);var $=v(ar);cr=h($,"BUTTON",{class:!0},!1);var st=v(cr);er=d(st,"Waiting"),st.forEach(E),$.forEach(E),l.forEach(E),nr=k(r),sr=h(r,"DIV",{class:!0},!1);var ot=v(sr);or=h(ot,"DIV",{class:!0},!1);var it=v(or);ir=h(it,"TABLE",{class:!0},!1);var ft=v(ir);lr=h(ft,"THEAD",{},!1);var ht=v(lr);ur=h(ht,"TR",{},!1);var gt=v(ur);fr=h(gt,"TH",{class:!0,scope:!0},!1);var At=v(fr);hr=d(At,"Total"),At.forEach(E),vr=k(gt),dr=h(gt,"TH",{class:!0,scope:!0},!1);var mt=v(dr);Er=d(mt,"New"),mt.forEach(E),kr=k(gt),Tr=h(gt,"TH",{class:!0,scope:!0},!1);var Rt=v(Tr);wr=d(Rt,"Success"),Rt.forEach(E),pr=k(gt),Nr=h(gt,"TH",{class:!0,scope:!0},!1);var bt=v(Nr);gr=d(bt,"Failure"),bt.forEach(E),Ar=k(gt),mr=h(gt,"TH",{class:!0,scope:!0},!1);var Wt=v(mr);Rr=d(Wt,"Warning"),Wt.forEach(E),br=k(gt),Wr=h(gt,"TH",{class:!0,scope:!0},!1);var Dt=v(Wr);Dr=d(Dt,"Running"),Dt.forEach(E),Ir=k(gt),_r=h(gt,"TH",{class:!0,scope:!0},!1);var It=v(_r);Hr=d(It,"Halted"),It.forEach(E),Lr=k(gt),Gr=h(gt,"TH",{class:!0,scope:!0},!1);var _t=v(Gr);Ur=d(_t,"Waiting"),_t.forEach(E),gt.forEach(E),ht.forEach(E),Fr=k(ft),Sr=h(ft,"TBODY",{class:!0},!1);var Ht=v(Sr);Or=h(Ht,"TD",{},!1);var Lt=v(Or);Vr=d(Lt,vt),Lt.forEach(E),xr=k(Ht),yr=h(Ht,"TD",{},!1);var Gt=v(yr);Br=d(Gt,dt),Gt.forEach(E),$r=k(Ht),jr=h(Ht,"TD",{},!1);var Ut=v(jr);Pr=d(Ut,Et),Ut.forEach(E),Jr=k(Ht),Cr=h(Ht,"TD",{},!1);var Ft=v(Cr);Kr=d(Ft,kt),Ft.forEach(E),Yr=k(Ht),zr=h(Ht,"TD",{},!1);var St=v(zr);Mr=d(St,Tt),St.forEach(E),qr=k(Ht),Qr=h(Ht,"TD",{},!1);var Ot=v(Qr);Xr=d(Ot,wt),Ot.forEach(E),Zr=k(Ht),rt=h(Ht,"TD",{},!1);var Vt=v(rt);tt=d(Vt,pt),Vt.forEach(E),at=k(Ht),ct=h(Ht,"TD",{},!1);var xt=v(ct);et=d(xt,Nt),xt.forEach(E),Ht.forEach(E),ft.forEach(E),it.forEach(E),ot.forEach(E),nt=k(r),lt&&lt.l(r),ut=f(),this.h()},h:function(){T(s,"class","btn"),w(s,"active",r.currentFilter===r.state.ALL),T(n,"class","mr-3"),T(H,"class","btn"),w(H,"active",r.currentFilter===r.state.NEW),T(_,"class","mr-3"),T(F,"class","btn"),w(F,"active",r.currentFilter===r.state.RESULT),T(U,"class","mr-3"),T(x,"class","btn"),w(x,"active",r.currentFilter===r.state.ERROR),T(V,"class","mr-3"),T(C,"class","btn"),w(C,"active",r.currentFilter===r.state.WARNING),T(J,"class","mr-3"),T(M,"class","btn"),w(M,"active",r.currentFilter===r.state.RUNNING),T(z,"class","mr-3"),T(Z,"class","btn"),w(Z,"active",r.currentFilter===r.state.HALTED),T(X,"class","mr-3"),T(cr,"class","btn"),w(cr,"active",r.currentFilter===r.state.WAITING),T(ar,"class","mr-3"),T(e,"class","d-flex justify-content-start"),T(fr,"class","text-center"),T(fr,"scope","col"),T(dr,"class","text-center"),T(dr,"scope","col"),T(Tr,"class","text-center"),T(Tr,"scope","col"),T(Nr,"class","text-center"),T(Nr,"scope","col"),T(mr,"class","text-center"),T(mr,"scope","col"),T(Wr,"class","text-center"),T(Wr,"scope","col"),T(_r,"class","text-center"),T(_r,"scope","col"),T(Gr,"class","text-center"),T(Gr,"scope","col"),T(Sr,"class","text-center"),T(ir,"class","table table-striped"),T(or,"class","col-sm-12"),T(sr,"class","row mt-5"),ht=[p(s,"click",r.click_handler),p(H,"click",r.click_handler_1),p(F,"click",r.click_handler_2),p(x,"click",r.click_handler_3),p(C,"click",r.click_handler_4),p(M,"click",r.click_handler_5),p(Z,"click",r.click_handler_6),p(cr,"click",r.click_handler_7)]},m:function(r,i){N(r,t,i),g(t,a),N(r,c,i),N(r,e,i),g(e,n),g(n,s),g(s,o),g(e,I),g(e,_),g(_,H),g(H,L),g(e,G),g(e,U),g(U,F),g(F,S),g(e,O),g(e,V),g(V,x),g(x,j),g(e,P),g(e,J),g(J,C),g(C,K),g(e,Y),g(e,z),g(z,M),g(M,q),g(e,Q),g(e,X),g(X,Z),g(Z,rr),g(e,tr),g(e,ar),g(ar,cr),g(cr,er),N(r,nr,i),N(r,sr,i),g(sr,or),g(or,ir),g(ir,lr),g(lr,ur),g(ur,fr),g(fr,hr),g(ur,vr),g(ur,dr),g(dr,Er),g(ur,kr),g(ur,Tr),g(Tr,wr),g(ur,pr),g(ur,Nr),g(Nr,gr),g(ur,Ar),g(ur,mr),g(mr,Rr),g(ur,br),g(ur,Wr),g(Wr,Dr),g(ur,Ir),g(ur,_r),g(_r,Hr),g(ur,Lr),g(ur,Gr),g(Gr,Ur),g(ir,Fr),g(ir,Sr),g(Sr,Or),g(Or,Vr),g(Sr,xr),g(Sr,yr),g(yr,Br),g(Sr,$r),g(Sr,jr),g(jr,Pr),g(Sr,Jr),g(Sr,Cr),g(Cr,Kr),g(Sr,Yr),g(Sr,zr),g(zr,Mr),g(Sr,qr),g(Sr,Qr),g(Qr,Xr),g(Sr,Zr),g(Sr,rt),g(rt,tt),g(Sr,at),g(Sr,ct),g(ct,et),N(r,nt,i),~it&&At[it].m(r,i),N(r,ut,i),ft=!0},p:function(r,t){(r.currentFilter||r.state)&&(w(s,"active",t.currentFilter===t.state.ALL),w(H,"active",t.currentFilter===t.state.NEW),w(F,"active",t.currentFilter===t.state.RESULT),w(x,"active",t.currentFilter===t.state.ERROR),w(C,"active",t.currentFilter===t.state.WARNING),w(M,"active",t.currentFilter===t.state.RUNNING),w(Z,"active",t.currentFilter===t.state.HALTED),w(cr,"active",t.currentFilter===t.state.WAITING)),ft&&!r.workers||vt===(vt=t.workers.length+"")||A(Vr,vt),ft&&!r.counters||dt===(dt=t.counters.new+"")||A(Br,dt),ft&&!r.counters||Et===(Et=t.counters.success+"")||A(Pr,Et),ft&&!r.counters||kt===(kt=t.counters.error+"")||A(Kr,kt),ft&&!r.counters||Tt===(Tt=t.counters.warning+"")||A(Mr,Tt),ft&&!r.counters||wt===(wt=t.counters.running+"")||A(Xr,wt),ft&&!r.counters||pt===(pt=t.counters.halted+"")||A(tt,pt),ft&&!r.counters||Nt===(Nt=t.counters.waiting+"")||A(et,Nt);var a=it;(it=mt(r,t))===a?~it&&At[it].p(r,t):(lt&&(m(),R(At[a],1,1,function(){At[a]=null}),b()),~it?((lt=At[it])||(lt=At[it]=gt[it](t)).c(),W(lt,1),lt.m(ut.parentNode,ut)):lt=null)},i:function(r){ft||(W(lt),ft=!0)},o:function(r){R(lt),ft=!1},d:function(r){r&&(E(t),E(c),E(e),E(nr),E(sr),E(nt)),~it&&At[it].d(r),r&&E(ut),D(ht)}}}function Q(r,t,a){var c={RESULT:"OK",ERROR:"ERROR",NEW:"NEW",HALTED:"HALTED",WAITING:"WAITING",RUNNING:"RUNNING",WARNING:"WARNING",ALL:"all"},e=!1,n={success:0,error:0,new:0,running:0,halted:0,waiting:0,warning:0},s=c.ALL,o=[];function i(){o.forEach(function(r){r.state==c.RESULT?a("counters",n.success++,n):r.state==c.ERROR?a("counters",n.error++,n):r.state==c.NEW?a("counters",n.new++,n):r.state==c.RUNNING?a("counters",n.running++,n):r.state==c.HALTED?a("counters",n.halted++,n):r.state==c.WAITING?a("counters",n.waiting++,n):r.state==c.WARNING&&a("counters",n.warning++,n)})}function l(r){a("currentFilter",s=r)}function u(r){var t=[];return o.forEach(function(a){a.state==r&&t.push(a)}),t}I(U(F.mark(function r(){return F.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:a("isAllWorkersAvailable",e=!1),S().then(function(r){r&&(a("isAllWorkersAvailable",e=!0),a("workers",o=r.data.workers),o.forEach(function(r){r.state=r.state.toUpperCase(),r.error&&(r.error=JSON.stringify(r.error)),r.time_start=O(r.time_start),r.last_update=O(r.last_update)}),i())}).catch(function(r){console.log(r)});case 2:case"end":return r.stop()}},r)})));var f;return r.$$.update=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{currentFilter:1,workers:1};(r.currentFilter||r.workers)&&a("filteredWorkers",f=function(){return a("counters",n={success:0,error:0,new:0,running:0,halted:0,waiting:0,warning:0}),i(),s==c.ALL?o:s==c.RESULT?u(c.RESULT):s==c.ERROR?u(c.ERROR):s==c.NEW?u(c.NEW):s==c.RUNNING?u(c.RUNNING):s==c.HALTED?u(c.HALTED):s==c.WARNING?u(c.WARNING):s==c.WAITING?u(c.WAITING):void 0})},{state:c,isAllWorkersAvailable:e,counters:n,currentFilter:s,workers:o,updateFilter:l,filteredWorkers:f,click_handler:function(){return l(c.ALL)},click_handler_1:function(){return l(c.NEW)},click_handler_2:function(){return l(c.RESULT)},click_handler_3:function(){return l(c.ERROR)},click_handler_4:function(){return l(c.WARNING)},click_handler_5:function(){return l(c.RUNNING)},click_handler_6:function(){return l(c.HALTED)},click_handler_7:function(){return l(c.WAITING)}}}var X=function(i){function l(r){var o;return t(this,l),o=a(this,c(l).call(this)),e(s(o),r,Q,q,n,[]),o}return r(l,o),l}();export{X as W};
