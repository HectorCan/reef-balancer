(this["webpackJsonpreef-balancer"]=this["webpackJsonpreef-balancer"]||[]).push([[0],{43:function(A,e,t){},54:function(A,e,t){},57:function(A,e,t){"use strict";t.r(e);for(var r=t(4),n=t.n(r),o=t(28),g=t.n(o),c=t(37),I=t(8),s=(t(43),t(21)),a=t(11),u=t(10),b=t(7),f=t.p+"static/media/pink.7b266517.png",w=t.p+"static/media/purple.3faadb6a.png",C=t.p+"static/media/green.3eb5a8d9.png",i=t.p+"static/media/red.da6f9966.png",O=t.p+"static/media/light-orange.69129bf9.png",d=(t(54),t(6)),j=[],v=1;v<=12;v++)j.push(v);var E=function(){return Object(d.jsx)(d.Fragment,{children:j.map((function(A){return Object(d.jsx)("div",{className:"bubble bubble--".concat(A)},A)}))})},l=t(32),Q=Object(u.withFilters)(u.Container,{colorOverlay:l.a}),B=Object(u.withFilters)(u.Container,{matrix:b.u.ColorMatrixFilter}),M=t.p+"static/media/sea_pixel.cc710cf0.png",m=new b.q.from(M,{scaleMode:b.l.LINEAR}),S=function(A){var e=A.screenWidth,t=A.screenHeight,r=A.filters;return Object(d.jsx)(B,{matrix:{enabled:!0},apply:function(A){return A.matrix.sepia()},children:Object(d.jsx)(u.Sprite,{texture:m,width:e,height:t,filters:r})})},x=t(33),p=t(34),q=t(38),X=t(36),h=function(A){return Object(d.jsx)(u.Sprite,{x:A.coral.x,y:A.coral.y,scale:A.coral.scale,texture:A.coral.texture,interactive:!0,buttonMode:!0,click:function(){return e=A.coral.goTo,void(window.location.href+=e);var e}})},y=function(A){Object(q.a)(t,A);var e=Object(X.a)(t);function t(){return Object(x.a)(this,t),e.apply(this,arguments)}return Object(p.a)(t,[{key:"render",value:function(){return Object(d.jsx)(u.Container,{filters:this.props.filters,children:Object(d.jsx)(Q,{colorOverlay:{color:4073990,alpha:.7},children:this.props.corals.map((function(A,e){return Object(d.jsx)(h,{coral:A},e)}))})})}}]),t}(n.a.Component),z=y,D=t.p+"static/media/texture-clouds.2e58b356.jpg",V=new b.q.from(D),P=function(A){var e=A.screenWidth,t=A.screenHeight,r=A.displacementRef;return Object(d.jsx)(u.Sprite,{width:e,height:t,texture:V,ref:r})},W={Pink:f,Purple:w,Green:C,Red:i,Orange:O},Y=window.innerWidth,H=window.innerHeight,k=[{x:Y/2-480,y:H/2-10,scale:.7,texture:new b.q.from(W.Purple),goTo:"shooter"},{x:Y/2-320,y:H/2+50,scale:.75,texture:new b.q.from(W.Pink),goTo:"shooter"},{x:Y/2+610,y:H/2+40,scale:.5,texture:new b.q.from(W.Green),goTo:"hidenseek"},{x:Y/2+450,y:H/2+90,scale:.75,texture:new b.q.from(W.Orange),goTo:"hidenseek"},{x:-60,y:H/2+50,scale:.75,texture:new b.q.from(W.Red),goTo:"metal-slug"}],L=function(){var A=Object(r.useState)([]),e=Object(a.a)(A,2),t=e[0],n=e[1],o=Object(r.useRef)(null),g=Object(r.useRef)(null);return Object(r.useEffect)((function(){var A=new b.u.DisplacementFilter(o.current);return o.current.texture.baseTexture.wrapMode=b.t.REPEAT,o.current.scale.x=10,o.current.scale.y=10,n((function(e){return[].concat(Object(s.a)(e),[A])})),g.current=requestAnimationFrame((function A(){o.current.x+=3,o.current.y+=2,g.current=requestAnimationFrame(A)})),function(){return cancelAnimationFrame(g.current)}}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(u.Stage,{width:Y,height:H,children:[Object(d.jsx)(S,{screenWidth:Y,screenHeight:H,filters:t}),Object(d.jsx)(P,{screenWidth:Y,screenHeight:H,displacementRef:o}),Object(d.jsx)(z,{filters:t,corals:k})]}),Object(d.jsx)(E,{})]})},J=t(24),F=t.n(J),T=t(35),G=t(13),U=t(16),N=["x","y","texture"],Z=function(A){var e=A.x,t=A.y,r=A.texture,n=Object(U.a)(A,N);return Object(d.jsx)(u.Sprite,Object(G.a)(Object(G.a)({x:e,y:t},n),{},{texture:r}))},K=t.p+"static/media/pezLeon_pixel.14f80038.png",R=["x","y","direction"],_=new b.q.from(K),$=function(A){var e=A.x,t=A.y,r=A.direction,n=Object(U.a)(A,R);return Object(d.jsx)(Z,Object(G.a)({x:e,y:t,texture:_,scale:{x:.2*r,y:.2}},n))},AA=["x","y","direction"],eA=new b.q.from("data:image/png;base64,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"),tA=function(A){var e=A.x,t=A.y,r=A.direction,n=Object(U.a)(A,AA);return Object(d.jsx)(Z,Object(G.a)({x:e,y:t,scale:{x:.3*r,y:.3},texture:eA},n))},rA=t.p+"static/media/red_pixel.1abfc416.png",nA=["x","y"],oA=new b.q.from(rA),gA=function(A){var e=A.x,t=A.y;Object(U.a)(A,nA);return Object(d.jsx)(Z,{x:e,y:t,texture:oA,width:30,height:30,scale:.2})},cA=new b.q.from("data:image/png;base64,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"),IA=new b.q.from("data:image/png;base64,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"),sA=function(A){var e=n.a.useState(!0),t=Object(a.a)(e,2),r=t[0],o=t[1];return Object(d.jsx)(u.Sprite,{x:A.x,y:A.y,texture:r?cA:IA,scale:.12,interactive:!0,buttonMode:!0,pointerdown:function(){return o((function(A){return!A})),void(r?b.r.shared.stop():b.r.shared.start())}})},aA=new b.q.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAYAAADnRuK4AAAABmJLR0QA/wD/AP+gvaeTAAAE9ElEQVR4nO3dTYhVZRzH8a86ohXZi5hJRSkRvYMlRdGL1CIoXLSICiJahG2Cdkm7lm6KahPRIohighalQdCiCKQg1KQIeiGCEMnJkKJCq1FbnLlRt9G5c///5zxn5nw/8Nu4eO45/+fnnTPce86AJEmSJEmSJEmSpD65DtgJHJrJjpl/k05pCbANmAZODOU4sB1YWu3o1GlnAm/y/+IMZydwdqVjVEddBnzB3OUZ5GvgqipHqs7ZAvzM6OUZ5FfgvgrHq45YBjwNHGP+5fn3ddHzwETLx67KVgPvMX5xhvMhsLbVM1A1G4HvyCvPIPuBG1s8D1XwEPA7+eUZ5CjwaGtno9asoLlWKVWc4bwKnNbKmam4C4CPaa88g+wBLm7h/FTQrcAPtF+eQQ4BdxY/SxWxFfiTeuUZ5C+aj0eWlD1dZVkJvEL94gxnEjij4HkrwaXA59Qvy8nyJXBFsbNXyN3AYeqXZK78AtxbaAYaw+ArGJGPJNqOXw3piFXAW9QvxLh5FzgnfSoaybXAt9QvQTTfA5uSZ6M5PAj8Rv3Nz8oR4JHUCWlWEzTXDrU3vFReApanTUv/sQZ4n/qbXDq7gHVJM9OM62muFWpvbls5ANycMjmxFfiD+pvadgYfgWhMK4CXqb+RtfMacHpwlr1zEfAJ9TevK9kHrA9NtEc2A1PU37Su5SfgrsBcF70lwBM0P/trb1ZX40cgJzHqXaGmyTt4d+w/5ntXqGnyDXD1GPNeVMa9K9Q06e3dsRl3hZomg7tje/MRSPZdoaZJL+6OLXVXqGmyqO+OfZjmawu1h7zYc2Rm1ovKNpqf1bWH26dsH2lnFoDnqD/MvubZEfan056i/hD7nifn3KWO2oI/trqQ48A9c+zV2ErdbrsW+Iwe/Fq5QByiuQnhYPbCpT6UexHL0yVrgBdqH8SobqP+27aZPbecYt864yPqD8rMnl2n2LexZF8DbQQ+TV5TuTYBe7MWy74Gejx5PeV7LHOxzHegZTRfRV2duKbyHQbOo/kmRFjmO9BNWJ6F4FzghqzFMgt0e+JaKmtz1kKZBbomcS2VlfZV2MwCXZm4lspK+0tDmQVak7iWykrbq8wCrUpcS2WdlbVQ5q/xJxLXUnkpe+8djgqxQAqxQAqxQAqxQAqxQAqxQAqxQAqxQAqxQAqxQAqxQAqxQAqxQAqxQAqxQAqxQAqxQAqxQAqxQAqxQAqxQAqxQAqZqH0AlR0FPgC+ovlDd/OxHLgcuANYmXxcvVT78W3zzevA+QnnvQ6Y7MD5zDedU3sg80mJJ7gvtCfyd07tgYyafTRPU8u2jObZ2LXPr9UC9fEi+hmSHu825NjM2r3Sx4crXAgcKLj2/kJrZ0vZ+z4WaIIy70DQ/BibLrR2Ngs0plJ/H2SgV3Po4zWQElkghVgghVgghVgghVgghVgghVgghVgghVgghVgghVgghVgghVgghVgghVgghVgghVgghVgghVgghVgghVgghVgghVgghVgghWQWqNTtwpnaOMZezSGzQD8mrlXKwRZeo1dzyCzQnsS1Stndwmv0ag6ZBZpMXKuUN1p4DecwpqXAXuo/eetk2U07vzQ4h4ANwBT1hzScKeCSguc9zDkEbKBb/wN3A+uLnvHsnEPAUuABYAfN4+SmaW9Q0zOv+TZwP3Xfrp2DJEmSJEmSJEmSJEmS2vQ33uoWL2Jha/cAAAAASUVORK5CYII="),uA=function(A){return Object(d.jsx)(u.Sprite,{x:A.x,y:A.y,texture:aA,scale:.42,interactive:!0,buttonMode:!0,pointerdown:function(){return e=A.goTo,void(window.location.href=e);var e}})},bA=window.innerWidth,fA=window.innerHeight,wA=function(A,e,t){var r=e.direction;return e.stepX=0,e.stepY=0,(A.KeyS||A.ArrowDown)&&(A.KeyW||A.ArrowUp)?e.stepY=0:((A.KeyW||A.ArrowUp)&&e.y>400&&(e.stepY=-5),(A.KeyS||A.ArrowDown)&&e.y<fA-150&&(e.stepY=5)),(A.KeyA||A.ArrowLeft)&&(A.KeyD||A.ArrowRight)?e.stepX=0:((A.KeyA||A.ArrowLeft)&&e.x>50&&(e.stepX=-10,e.direction=1),(A.KeyD||A.ArrowRight)&&e.x<bA-50&&(e.stepX=10,e.direction=-1)),e.x=e.x+e.stepX*t,e.y=e.y+e.stepY*t,r!==e.direction&&(e.x=e.x+-70*e.direction),e},CA=function(A,e,t,r,n,o){A.Space&&n&&e.length<5&&(o(!1),setTimeout((function(){o(!0)}),1e3),e.push(Object(G.a)(Object(G.a)({},t),{},{direction:1,stepX:0,stepY:5})));var g=[];return e.forEach((function(A){A.y=A.y-A.stepY*r,A.y>-100&&g.push(A)})),g},iA=function(A,e){var t=A.x-(1===A.direction?40:120),r=A.x+(1===A.direction?70:-20),n=A.y-40,o=A.y+60,g=-1;return e.forEach((function(A,e){if(A.y>n&&A.y<o&&A.x>t&&A.x<r)return g=e,!1})),g},OA=t(25),dA=t.p+"static/media/bg-sea-1.8303efed.mp3",jA=void 0,vA=window.innerWidth,EA=window.innerHeight,lA=30,QA=null;var BA=new OA.Howl({src:dA,autoplay:!1,loop:!0,volume:lA/100}),MA=function(){var A=function(){for(var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,e=[],t=0;t<A;t++){var r=10*Math.random()>5?-1:1,n=10*Math.random()>5?-1:1;e.push({x:Math.floor(Math.random()*vA-400+200),y:Math.floor(200*Math.random()),stepX:(1*Math.random()+.3)*r,stepY:(1*Math.random()+.2)*n,caught:!1,direction:r})}return e}(8),e=Object(r.useState)(A),t=Object(a.a)(e,2),n=t[0],o=t[1],g=Object(r.useState)([]),c=Object(a.a)(g,2),I=c[0],f=c[1],w=Object(r.useState)({x:vA/2,y:EA/3*2,stepX:0,stepY:0,direction:1}),C=Object(a.a)(w,2),i=C[0],O=C[1],j=Object(r.useState)([]),v=Object(a.a)(j,2),l=v[0],Q=v[1],B=Object(r.useState)({}),M=Object(a.a)(B,2),m=M[0],x=M[1],p=Object(r.useState)(!0),q=Object(a.a)(p,2),X=q[0],h=q[1],y=Object(r.useRef)(null),z=Object(r.useRef)(null);Object(r.useEffect)((function(){var A=function(){var A=Object(T.a)(F.a.mark((function A(e){var t,r,g,c;return F.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:r=wA(t=m,i,e),g=[],c=CA(t,I,i,e,X,h),n.forEach((function(A){var t=A.stepX,r=A.stepY,n=A.x,o=A.y;(A.x<200&&A.stepX<0||A.x>vA-200&&A.stepX>0)&&(t*=-1),(A.y<10&&A.stepY<0||A.y>300&&A.stepY>0)&&(r*=-1),n=A.x+5*A.stepX*e,o=A.y+A.stepY*e;var I=t>0?1:-1;A.direction!==I&&(n+=-120*I);var s=iA(A,c);-1!==s?c.splice(s,1):g.push(Object(G.a)(Object(G.a)({},A),{},{x:Math.abs(n),y:Math.abs(o),stepX:t,stepY:r,direction:I}))})),O(r),f(c),o(g);case 8:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}();return b.r.shared.add(A,jA),function(){b.r.shared.remove(A,jA)}})),Object(r.useEffect)((function(){var A=new b.u.DisplacementFilter(y.current);return y.current.texture.baseTexture.wrapMode=b.t.REPEAT,y.current.scale.x=10,y.current.scale.y=10,Q((function(e){return[].concat(Object(s.a)(e),[A])})),z.current=requestAnimationFrame((function A(){y.current.x+=2,y.current.y+=1,z.current=requestAnimationFrame(A)})),function(){return cancelAnimationFrame(z.current)}}),[]),Object(r.useEffect)((function(){return BA.play(),function(){BA.stop()}}),[]);return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{id:"ui"}),Object(d.jsxs)(u.Stage,{onKeyDown:function(A){var e=Object(G.a)({},m);e[A.code]=!0,x(e)},tabIndex:"0",onKeyUp:function(A){var e=Object(G.a)({},m);delete e[A.code],x(e)},width:vA,height:EA,children:[Object(d.jsx)(S,{screenWidth:vA,screenHeight:EA,filters:l}),Object(d.jsx)(P,{screenWidth:vA,screenHeight:EA,displacementRef:y}),Object(d.jsxs)(u.Container,{filters:l,children:[n.map((function(A,e){return Object(d.jsx)($,{x:A.x,y:A.y,direction:A.direction},e)})),I.map((function(A,e){return Object(d.jsx)(gA,{x:A.x,y:A.y},e)})),Object(d.jsx)(tA,{x:i.x,y:i.y,direction:i.direction})]}),Object(d.jsx)(sA,{x:50,y:10}),Object(d.jsx)(uA,{x:130,y:10,goTo:"/"})]}),Object(d.jsx)("input",{type:"number",name:"volume",min:"1",max:"100",value:lA,onChange:function(A){lA=parseInt(A.target.value),clearTimeout(QA),QA=setTimeout((function(){OA.Howler.volume(lA/100)}),1e3)},style:{position:"absolute",top:10,left:200}}),Object(d.jsx)(E,{})]})};var mA=function(){return Object(d.jsx)(c.a,{children:Object(d.jsxs)(I.c,{children:[Object(d.jsx)(I.a,{path:"/",element:Object(d.jsx)(L,{})}),Object(d.jsx)(I.a,{path:"shooter",element:Object(d.jsx)(MA,{})}),Object(d.jsx)(I.a,{path:"*",element:Object(d.jsx)("div",{children:"Not Found"})})]})})};g.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(mA,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.4328f157.chunk.js.map