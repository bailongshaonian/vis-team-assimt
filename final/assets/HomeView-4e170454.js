import{o as K,a as B,c as T,d as Q,b as U}from"./index-857d3783.js";const ee={id:"canvas",width:1e3,height:800},F=10,te=26,d=800,le=0,ae=1,re=1,oe=-750,ne=1,ce=0,ie={__name:"Cloud3D",setup(W){const i=[{text:"冒险",size:1005,color:"rgba(95,158,160"},{text:"RPG",size:514,color:"rgba(72,209, 204"},{text:"格斗",size:157,color:"rgba(0 ,191 ,255"},{text:"独立游戏",size:282,color:"rgba(70, 130 ,180"},{text:"回合制策略",size:99,color:"rgba(72, 209 ,204"},{text:"平台",size:329,color:"rgba(0, 139, 139"},{text:"模拟",size:125,color:"rgba(65 ,105, 225"},{text:"策略",size:142,color:"rgba(175, 238 ,238"},{text:"益智",size:174,color:"rgba(135, 206 ,235"},{text:"射击",size:351,color:"rgba(100 ,149 ,237"},{text:"音乐",size:24,color:"rgba(72 ,209 ,204"},{text:"战斗",size:72,color:"rgba(0 ,139 ,139"},{text:"街机",size:72,color:"rgba(0 ,191, 255"},{text:"视觉小说",size:70,color:"rgba(0, 139, 139"},{text:"卡牌与棋盘游戏",size:16,color:"rgba(135, 206 ,235"},{text:"战术",size:50,color:"rgba(65, 105, 225"},{text:"赛车",size:42,color:"rgba(70, 130, 180"},{text:"点击",size:46,color:"rgba(135, 206 ,235"},{text:"MOBA",size:3,color:"rgba(135 ,206, 250"},{text:"体育",size:25,color:"rgba(176, 196, 222"},{text:"实时策略",size:10,color:"rgba(135, 206, 235"},{text:"问答/小知识",size:4,color:"rgba(135, 206, 235"},{text:"弹球",size:1,color:"rgba(70, 130, 18"}];let X=Math.max(...i.map(a=>a.size)),Y=Math.min(...i.map(a=>a.size));const u=-3-d;let x=0,r={},o={},g=400,I=g-2,b,f=0;const E=2*Math.PI/1500;let P,j,S,e,z,Z,m,p,c,v,M,h,_,w,y;function H(){const a=document.getElementById("canvas");a.width=window.innerWidth*.9,a.height=window.innerHeight*.9;const n=a.getContext("2d"),k=a.width,A=a.height,R=k/2,D=A/2;P=.4,j=.4,S=.4,C();function C(){if(window.requestAnimationFrame(C),x++,x>=1)for(x=0,v=0;v<re;v++){M=Math.random()*2*Math.PI,h=Math.acos(Math.random()*2-1),_=d*Math.sin(h)*Math.cos(M),w=d*Math.sin(h)*Math.sin(M),y=d*Math.cos(h);let t=L(_,le+w,u+y,.002*_,.002*w,.002*y);t.attack=50,t.hold=50,t.decay=100,t.initValue=0,t.holdValue=ne,t.lastValue=0,t.stuckTime=90+Math.random()*20,t.accelX=0,t.accelY=ce,t.accelZ=0}for(f=(f+E)%(2*Math.PI),m=Math.sin(f),p=Math.cos(f),n.fillStyle="#121212",n.fillRect(0,0,k,A),e=r.first;e!==null;){Z=e.next,e.age++,e.age>e.stuckTime&&(e.velX+=e.accelX+P*(Math.random()*2-1),e.velY+=e.accelY+j*(Math.random()*2-1),e.velZ+=e.accelZ+S*(Math.random()*2-1),e.x+=e.velX,e.y+=e.velY,e.z+=e.velZ);let t=p*e.x+m*(e.z-u),s=-m*e.x+p*(e.z-u)+u;b=ae*g/(g-s),e.projX=t*b+R,e.projY=e.y*b+D,e.age<e.attack+e.hold+e.decay?e.age<e.attack?e.alpha=(e.holdValue-e.initValue)/e.attack*e.age+e.initValue:e.age<e.attack+e.hold?e.alpha=e.holdValue:e.age<e.attack+e.hold+e.decay&&(e.alpha=(e.lastValue-e.holdValue)/e.decay*(e.age-e.attack-e.hold)+e.holdValue):e.dead=!0,e.projX>k||e.projX<0||e.projY<0||e.projY>A||s>I?z=!0:z=!1,z||e.dead?$(e):(c=1-s/oe,c=c>1?1:c<0?0:c,n.font=`${e.fontSize}px 微软雅黑`,n.fillStyle=e.color+c*e.alpha+")",n.fillText(e.flake,e.projX,e.projY),n.beginPath(),n.closePath(),n.fill()),e=Z}}function L(t,s,q,G,N,O){let l;o.first!=null?(l=o.first,l.next!=null?(o.first=l.next,l.next.prev=null):o.first=null):l={},r.first==null?(r.first=l,l.prev=null,l.next=null):(l.next=r.first,r.first.prev=l,r.first=l,l.prev=null),l.x=t,l.y=s,l.z=q,l.velX=G,l.velY=N,l.velZ=O,l.age=0,l.dead=!1;let V=i[Math.floor(Math.random()*i.length)];l.flake=V.text;let J=(V.size-Y)/(X-Y);return l.fontSize=F+J*(te-F),l.color=V.color,Math.random()<.5?l.right=!0:l.right=!1,l}function $(t){r.first===t?t.next!==null?(t.next.prev=null,r.first=t.next):r.first=null:t.next==null?t.prev.next=null:(t.prev.next=t.next,t.next.prev=t.prev),o.first==null?(o.first=t,t.prev=null,t.next=null):(t.next=o.first,o.first.prev=t,o.first=t,t.prev=null)}}return K(()=>{H()}),(a,n)=>(B(),T("canvas",ee))}},ue=Q({__name:"HomeView",setup(W){return(i,X)=>(B(),T("main",null,[U(ie)]))}});export{ue as default};
