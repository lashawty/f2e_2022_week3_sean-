const loading=function(){gsap.timeline().to(".rocket",{top:"0",yPercent:"-30",scale:0,duration:5}).to(".rocket-firing",{top:"0",yPercent:"-30",scale:0,duration:5},"<").to(".star-field",{opacity:0,duration:5},"<").to(".bg-star",{opacity:1,duration:5},"<").to(".welcome",{opacity:1,duration:5}).to(".welcome-content",{text:"哈囉，歡迎加入 TT 資訊！<br >在正式加入專案開發之前，需要請你先了解 Scrum 的流程與精神！<br >請接受挑戰任務，成功通過 Scrum 新手村的挑戰任務吧～",duration:10,ease:"none"},"<").to(".challenge-accepted",{opacity:1,duration:.1})},transition=function(t,e){gsap.to(".cube",{opacity:"1",ease:"none",duration:1}),gsap.to(".cube",{opacity:"0",ease:"none",duration:1,delay:2}),setTimeout((()=>{t.hide(),gsap.to(t[0],{opacity:0}),e.show()}),1500)},mouse=()=>{const t=document.querySelector(".mouse");new Cotton(t,{speed:1})},showNext=function(t,e,n,i){transition(t,e),setTimeout((()=>{transitionNextElement(n,i)}),1500)},transitionNextElement=(t,e)=>{gsap.to(t,{opacity:1,delay:2,duration:5}),gsap.to(".nav-rocket",{xPercent:e,delay:3,duration:3})},clickEvent=(t,e,n,i)=>{Observer.create({target:t,type:"pointer",onClick:()=>showNext(e,n,n,i)})};clickEvent.init=()=>{clickEvent(".challenge-accepted",$(".welcome"),$(".introduction"),11),clickEvent(".intro-prev",$(".introduction"),$(".welcome"),0),clickEvent(".intro-next",$(".introduction"),$(".product-owner"),22),clickEvent(".po-prev",$(".product-owner"),$(".introduction"),11),clickEvent(".po-next",$(".product-owner"),$(".drag-game"),33),clickEvent(".drag-prev",$(".drag-game"),$(".product-owner"),22),clickEvent(".game-next",$(".drag-game"),$(".sprint-explain"),44),clickEvent(".explain-prev",$(".sprint-explain"),$(".drag-game"),33),clickEvent(".explain-next",$(".sprint-explain"),$(".sprint-list"),55),clickEvent(".list-prev",$(".sprint-list"),$(".sprint-explain"),44),clickEvent(".list-next",$(".sprint-list"),$(".sprint-now"),66),clickEvent(".sprint-prev",$(".sprint-now"),$(".sprint-list"),55),clickEvent(".sprint-next",$(".sprint-now"),$(".sprint-drag"),77),clickEvent(".sd-prev",$(".sprint-drag"),$(".sprint-now"),66),clickEvent(".sd-next",$(".sprint-drag"),$(".reflect"),88),clickEvent(".reflect-prev",$(".reflect"),$(".sprint-drag"),77),clickEvent(".reflect-next",$(".reflect"),$(".congrats"),105)},clickEvent.init(),mouse(),gsap.timeline().to(".rocket",{top:"0",yPercent:"-30",scale:0,duration:5}).to(".rocket-firing",{top:"0",yPercent:"-30",scale:0,duration:5},"<").to(".star-field",{opacity:0,duration:5},"<").to(".bg-star",{opacity:1,duration:5},"<").to(".welcome",{opacity:1,duration:5}).to(".welcome-content",{text:"哈囉，歡迎加入 TT 資訊！<br >在正式加入專案開發之前，需要請你先了解 Scrum 的流程與精神！<br >請接受挑戰任務，成功通過 Scrum 新手村的挑戰任務吧～",duration:10,ease:"none"},"<").to(".challenge-accepted",{opacity:1,duration:.1});
//# sourceMappingURL=app-dist.js.map