p=prompt,f="Informe a data ",n=p(f+"atual: "),n+="/"+p(f+"de nascimento: "),n=n.split`/`,u=n[0],d=n[1],q=n[3],c=n[4],m=d-c,d=u-q,y=n[2]-n[5],i=m*30+d,d<c||d==c&&u<q?0:y--,i=u>q?360-i:i,i<0?i*=-1:0;alert(`Idade: ${y} Anos\nFaltam ${i} dias, ${i?"espere":"Parabéns"}!`)