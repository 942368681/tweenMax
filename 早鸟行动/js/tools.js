//鼠标滚轮函数
function addMouseWheel(obj){
	obj.onmousewheel=fn;
	obj.addEventListener('DOMMouseScroll',fn);
	function fn(ev){
		if (onOff1 && onOff2) {
			onOff1=false;
			var pos=parseFloat(getComputedStyle(box).margin);
			var s=null;
			var onOff=null;
			if (ev.wheelDelta) {
				if (ev.wheelDelta>0) {
					onOff=true;
				} else{
					onOff=false;
				}
			} else{
				if (ev.detail<0) {
					onOff=true;
				} else{
					onOff=false;
				}
			}
			if (onOff) {
				s=pos+h;
				if (s>0) {
					s=0;
				}
				obj.style.marginTop=s+'px';
				n--;
				if (n<0) {
					n=0;
				}
				for (var i=0;i<btns.length;i++) {
					btns[i].className='btn';
				}
				btns[n].className='btn active';
				setTimeout(function (){
					onOff1=true;
				},1000);
			} else{
				s=pos-h;
				if (s<-(3*h)) {
					s=-(3*h);
				}
				obj.style.marginTop=s+'px';
				n++;
				if (n>3) {
					n=3;
				}
				for (var i=0;i<btns.length;i++) {
					btns[i].className='btn';
				}
				btns[n].className='btn active';
				setTimeout(function (){
					onOff1=true;
				},1000);
			}
		} else{
			ev.preventDefault();
		}
		setTimeout(function (){
			location.hash='h='+n;
		},1000);
	};
};
//按钮点击函数
function btnClick(){
	for (var i=0;i<btns.length;i++) {
		btns[i].index=i;
		btns[i].onclick=function (){
			onOff2=false;
			for (var j=0;j<btns.length;j++) {
				btns[j].className='btn';
			}
			this.className='btn active';
			box.style.marginTop=-(this.index*h)+'px';
			n=this.index;
			setTimeout(function (){
				onOff2=true;
				location.hash='h='+n;
			},1000);
		};
	}
};
//第一页
//两角樱花出现
function showFlo1(){
	var zuoshang=document.getElementsByClassName('zuoshang')[0];
	var w=parseFloat(getComputedStyle(zuoshang).width)-10;
	var h=parseFloat(getComputedStyle(zuoshang).height)-10;
	var t=new TimelineMax();
	t.set('.zuoshang',{
		autoAlpha:0.2
	})
	t.to('.zuoshang',2,{
		x:w,
		y:h,
		autoAlpha:1
	})
};
function showFlo2(){
	var youxia=document.getElementsByClassName('youxia')[0];
	var w=parseFloat(getComputedStyle(youxia).width)-10;
	var h=parseFloat(getComputedStyle(youxia).height)-10;
	var t=new TimelineMax();
	t.set('.youxia',{
		autoAlpha:0.2
	})
	t.to('.youxia',2,{
		x:-w,
		y:-h,
		autoAlpha:1,
		onComplete:function (){
			showList();
		}
	})
};
//樱花飘动
function fly1(){
	var t=new TimelineMax();
	t.set('.flo:nth-of-type(1)',{transformPerspective:1000,transformOrigin:'center',x:0,y:0,rotationX:0,rotationY:0})
	t.to('.flo:nth-of-type(1)',1,{
		autoAlpha:1,
		onComplete:function (){
			t.staggerTo('.flo:nth-of-type(1)',6,{
				rotationX:250,
				rotationY:180,
				ease:Linear.easeIn,
				cycle:{
					bezier:function (){
						return [
							{x:180,y:120},
							{x:350,y:150},
							{x:600,y:280},
							{x:1000,y:560},
							{x:1200,y:800}
						]
					}
				},
				onComplete:function (){
					this.target.style.transition=1+'s';
					this.target.style.opacity=0;
					setTimeout(function (a){
						a.style.cssText='';
					},1000,this.target);
				}
			})
		}
	})
};
function fly2(){
	var t=new TimelineMax();
	t.set('.flo:nth-of-type(2)',{transformPerspective:1000,transformOrigin:'center',x:0,y:0,rotationX:0,rotationY:0})
	t.to('.flo:nth-of-type(2)',1,{
		autoAlpha:1,
		onComplete:function (){
			t.staggerTo('.flo:nth-of-type(2)',6,{
				rotationX:250,
				rotationY:180,
				ease:Linear.easeIn,
				cycle:{
					bezier:function (){
						return [
							{x:180,y:120},
							{x:350,y:150},
							{x:500,y:280},
							{x:700,y:180},
							{x:1000,y:100}
						]
					}
				},
				onComplete:function (){
					this.target.style.transition=1+'s';
					this.target.style.opacity=0;
					setTimeout(function (a){
						a.style.cssText='';
					},1000,this.target);
				}
			})
		}
	})
};
function fly3(){
	var t=new TimelineMax();
	t.set('.flo:nth-of-type(3)',{transformPerspective:1000,transformOrigin:'center',x:0,y:0,rotationX:0,rotationY:0})
	t.to('.flo:nth-of-type(3)',1,{
		autoAlpha:1,
		onComplete:function (){
			t.staggerTo('.flo:nth-of-type(3)',6,{
				rotationX:60,
				rotationY:180,
				ease:Linear.easeIn,
				cycle:{
					bezier:function (){
						return [
							{x:160,y:100},
							{x:340,y:140},
							{x:480,y:240},
							{x:660,y:190},
							{x:1000,y:100}
						]
					}
				},
				onComplete:function (){
					this.target.style.transition=1+'s';
					this.target.style.opacity=0;
					setTimeout(function (a){
						a.style.cssText='';
					},1000,this.target);
				}
			})
		}
	})
};
//图片出现
function showList(){
	getPic();
	var n=0;
	var t=new TimelineMax();
	t.set('.list2 li',{
		transformPerspective:1000,
		transformOrigin:'center top',
		autoAlpha:0,
		scale:0
	});
	t.staggerTo('.list2 li',0.5,{
		autoAlpha:1,
		scale:1,
		ease:Linear.easeOut,
		onComplete:function (){
			n++;
			if (n==6) {
				fly1();
				fly2();
				fly3();
				setInterval(function (){
					fly1();
					fly2();
					fly3();
				},8000);
				jiage();
				jialebi();
			}
		}
	},0.25)
};
//加勒比
function jialebi(){
	onOff3=false;
	var s=parseFloat(w)*0.55;
	var w1=parseFloat(w)*0.36;
	var t=new TimelineMax();
	t.set('.jialebi',{
		transiton:0,
		autoAlpha:0.2
	})
	t.to('.jialebi',2,{
		x:s,
		autoAlpha:0.6,
		ease:Bounce.easeOut,
		onComplete:function (){
			t.to('.jialebi',0.5,{
				scale:1.1,
				ease:Linear.easeOut,
				onComplete:function (){
					t.to('.jialebi',0.5,{
						scale:1,
						autoAlpha:1,
						ease:Linear.easeOut,
						onComplete:function (){
							onOff3=true;
							t.to('.caidai',1,{
								width:w1,
								ease:Expo.easeOut,
								onComplete:function (){
									baiye();
									tab1();
									onOff5=true;
								}
							})
						}
					})
				}
			})
		}
	})
};
//加勒比移入移出
function onjialebi(){
	var jialebi=document.getElementsByClassName('jialebi')[0];
	jialebi.onmouseover=function (){
		if (onOff3) {
			this.style.transition=0.5+'s';
			this.style.marginLeft=10+'px';
		}
	};
	jialebi.onmouseout=function (){
		if (onOff3) {
			this.style.marginLeft=0+'px';
		}
	};
};
//生成中间图片
function getPic(){
	var li=document.getElementsByClassName('list2')[0].getElementsByTagName('li')[4];
	var h=parseFloat(getComputedStyle(li).height);
	var s=h/12;
	var x=li.offsetWidth;
	var y=li.offsetHeight;
	var str='';
	for (var i=0;i<12;i++) {
		str+='<div></div>';				
	}
	li.innerHTML=str;
	var divs=li.getElementsByTagName('div');
	for (var i=0;i<divs.length;i++) {
		divs[i].style.height=s+'px';
		divs[i].style.backgroundImage='url('+arrImg1[0]+')';
		divs[i].style.backgroundPosition=0+' '+(i*(-s))+'px';
		divs[i].style.backgroundSize=''+x+'px '+y+'px';
	}
};
//百叶
function baiye(){
	var onOff=true;
	var li=document.getElementsByClassName('list2')[0].getElementsByTagName('li')[4];
	var divs=li.getElementsByTagName('div');
	var t=new TimelineMax();
	t.set('.list2 li:nth-of-type(5) div',{transformPerspective:1000,transformOrigin:'center top'})
	function fn(num){
		var s=0;
		t.staggerTo('.list2 li:nth-of-type(5) div',0.5,{
			rotationX:90,
			onComplete:function (){
				s++;
				if (s==12) {
					for (var i=0;i<divs.length;i++) {
						divs[i].style.backgroundImage='url('+arrImg1[num]+')';
						divs[i].style.backgroundPosition=0+' '+(i*-19)+'px';
					}
				}
			}
		},0.05)
		t.staggerTo('#box div',0.5,{
			rotationX:0
		},0.05)
	};
	fn(1);
	setInterval(function (){
		if (onOff) {
			fn(0);
		} else{
			fn(1);
		}
		onOff=!onOff;
	},5000);
};
//图片切换
function tab1(){
	var onOff1=false;
	var onOff2=false;
	var onOff3=false;
	var t=new TimelineMax();
	var li1=document.getElementsByClassName('list2')[0].getElementsByTagName('li')[1];
	var li2=document.getElementsByClassName('list2')[0].getElementsByTagName('li')[3];
	var li3=document.getElementsByClassName('list2')[0].getElementsByTagName('li')[5];
	function fn1(){
		t.set('.list2 li:nth-of-type(2)',{
			transformPerspective:1000,
			transformOrigin:'center',
		})
		t.to('.list2 li:nth-of-type(2)',1,{
			rotationX:90,
			onComplete:function (){
				if (onOff1) {
					li1.style.backgroundImage='url('+arrImg2[0]+')';
				} else{
					li1.style.backgroundImage='';					
				}
				t.to('.list2 li:nth-of-type(2)',1,{
					rotationX:0,
					onComplete:function (){
						t.set('.list2 li:nth-of-type(4)',{
							transformPerspective:1000,
							transformOrigin:'center',
						})
						t.to('.list2 li:nth-of-type(4)',1,{
							rotationX:90,
							onComplete:function (){
								if (onOff2) {
									li2.style.backgroundImage='url('+arrImg2[1]+')';
								} else{
									li2.style.backgroundImage='';					
								}
								t.to('.list2 li:nth-of-type(4)',1,{
									rotationX:0,
									onComplete:function (){
										t.set('.list2 li:nth-of-type(6)',{
											transformPerspective:1000,
											transformOrigin:'center',
										})
										t.to('.list2 li:nth-of-type(6)',1,{
											rotationX:90,
											onComplete:function (){
												if (onOff3) {
													li3.style.backgroundImage='url('+arrImg2[2]+')';
												} else{
													li3.style.backgroundImage='';					
												}
												t.to('.list2 li:nth-of-type(6)',1,{
													rotationX:0
												})
											}
										})
									}
								})
							}
						})
					}
				})
			}
		})
	};
	setInterval(function (){
		fn1();
		onOff1=!onOff1;
		onOff2=!onOff2;
		onOff3=!onOff3;
	},8000);
};
//价格
function jiage(){
	var t=new TimelineMax();
	t.set('.circle',{
		transiton:0,
	})
	t.to('.circle',2,{
		rotationZ:360,
		scale:1,
		autoAlpha:0.6,
		ease:Circ.easeOut,
		onComplete:function (){
			t.to('.circle',0.5,{
				scale:1.1,
				ease:Linear.easeOut,
				onComplete:function (){
					t.to('.circle',0.5,{
						scale:1,
						autoAlpha:1,
						ease:Linear.easeOut,
						onComplete:function (){
							onOff4=true;
						}
					})
				}
			})
		}
	})
};
//价格移入
function onjiage(){
	var jiage=document.getElementsByClassName('circle')[0];
	jiage.onmouseover=function (){
		if (onOff4) {
			this.style.transition=0.5+'s';
			this.style.transform='scale(1.1)';
		}
	};
	jiage.onmouseout=function (){
		if (onOff4) {
			this.style.transform='scale(1)';
		}
	};
};
//第一屏鼠标跟随
function follow(){
	var con1=document.getElementsByClassName('con1')[0];
	var w=con1.offsetWidth;
	var h=con1.offsetHeight;
	con1.onmousemove=function (ev){
		var x=ev.clientX;
		var y=ev.clientY;
		if (onOff5) {
			con1.style.left=(x-w/2)+'px';
			con1.style.top=(y-h/2)+'px';
			if (parseFloat(con1.style.left)<-10) {
				con1.style.left=-10+'px';
			}
			if (parseFloat(con1.style.left)>10) {
				con1.style.left=10+'px';
			}
			if (parseFloat(con1.style.top)<-10) {
				con1.style.top=-10+'px';
			}
			if (parseFloat(con1.style.top)>10) {
				con1.style.top=10+'px';
			}
		}
	};
};
//第二屏框内生成div
function getDiv(n){
	var txt1=document.getElementsByClassName('txt1')[n];
	var txt2=document.getElementsByClassName('txt2')[n];
	var divs=txt2.getElementsByTagName('div');
	var h=txt2.offsetHeight/10;
	var x=txt2.offsetWidth;
	var y=txt2.offsetHeight;
	var str='';
	for (var i=0;i<10;i++) {
		str+='<div></div>';
	}
	txt2.innerHTML=str;
	var divs=txt2.getElementsByTagName('div');
	for (var i=0;i<divs.length;i++) {
		divs[i].style.height=h+'px';
		divs[i].style.backgroundImage='url(img/con2/txt2.png)';
		divs[i].style.backgroundPosition=0+' '+(i*-(h))+'px';
		divs[i].style.backgroundColor='rgba(255,207,229,0.8)';
		divs[i].style.backgroundSize=''+x+'px '+y+'px';
	}
	var t=new TimelineMax();
	t.set(divs,{
		rotationX:90
	})
	txt1.style.transition='';
	txt1.style.borderColor='rgba(255,207,229,0)';
};
//第二屏txt效果
function showTxt(num){
	var n=0;
	var txt1=document.getElementsByClassName('txt1')[num];
	var txt2=document.getElementsByClassName('txt2')[num];
	var divs=txt2.getElementsByTagName('div');
	var t=new TimelineMax();
	t.set(divs,{
		transformPerspective:100,
		transformOrigin:'center top'
	})
	t.staggerTo(divs,0.2,{
		rotationX:0,
		onComplete:function (){
			n++;
			if (n==10) {
				txt1.style.transition=1+'s';
				txt1.style.borderColor='rgba(255,207,229,0.8)';
			}
			tab();
		}
	},0.1)
};
//第二屏左右切换
function tab(){
	next.onclick=function (){
		num1++;
		if (num1>lis1.length-1) {
			num1=0
		}
		getDiv(num1);
		var t=new TimelineMax();
		t.to('.list1',1,{
			left:-w*num1,
			onComplete:function (){
				showTxt(num1);
			}
		})
	};
	prev.onclick=function (){
		num1--;
		if (num1<0) {
			num1=lis1.length-1
		}
		getDiv(num1);
		var t=new TimelineMax();
		t.to('.list1',1,{
			left:-w*num1,
			onComplete:function (){
				showTxt(num1);
			}
		})
	}
};
//第三屏点击导航
function navClick(){
	var list3=document.getElementsByClassName('list3')[0];
	var lis=list3.getElementsByTagName('li');
	for (var i=0;i<lis.length;i++) {
		lis[i].onOff=true;
	}
	lis[0].onOff=false;
	var is=list3.getElementsByTagName('i');
	var title=document.getElementsByClassName('title')[0];
	var h2=title.getElementsByTagName('h2')[0];
	var h3=title.getElementsByTagName('h3')[0];
	var t=new TimelineMax();
	t.set('.list4 li',{
		transformPerspective:600,
		transformOrigin:'center',
	})
	for (var i=0;i<lis.length-1;i++) {
		lis[i].index=i;
		lis[i].onclick=function (){
			if (onOff7) {
				onOff7=false;
				if (this.onOff) {
					for (var i=0;i<lis.length;i++) {
						lis[i].onOff=true;
					}
					this.onOff=false;
					for (var j=0;j<is.length;j++) {
						is[j].style.display='none';
					}
					is[this.index].style.display='block';
					h2.innerText=data1[this.index].t1;
					h3.innerText=data1[this.index].t2;
					tabPic(this.index);
				}
			}
		};
	}
};
//第三屏图片切换效果
function tabPic(n){
	var list4=document.getElementsByClassName('list4')[0];
	var lis4=list4.getElementsByTagName('li');
	for (var i=0;i<lis4.length;i++) {
		lis4[i].style.transition='';
	}
	var t=new TimelineMax();
	var num1=0;
	var num2=0;
	t.staggerTo('.list4 li',1,{
		z:200,
		autoAlpha:0,
		onComplete:function (){
			num1++;
			if (num1==6) {
				var list4=document.getElementsByClassName('list4')[0];
				var lis4=list4.getElementsByTagName('li');
				for (var i=0;i<lis4.length;i++) {
					lis4[i].style.backgroundImage='url('+data[n][i]+')';
				}
				t.staggerTo('.list4 li',1,{
					z:0,
					autoAlpha:1,
					onComplete:function (){
						num2++;
						if (num2==6) {
							onOff7=true;
							onlis4();
						}
					}
				},0.1)
			}
		}
	},0.1)
};
//第三屏鼠标移入效果
function onlis4(){
	var list4=document.getElementsByClassName('list4')[0];
	var lis4=list4.getElementsByTagName('li');
	for (var i=0;i<lis4.length;i++) {
		lis4[i].style.transition=1+'s';
	}
	for (var i=0;i<lis4.length;i++) {
		lis4[i].index=i;
		lis4[i].onmouseover=function (){
			for (var i=0;i<lis4.length;i++) {
				if (i==this.index) {
					continue;
				}
				lis4[i].style.opacity=0.2;
			}
		}
		lis4[i].onmouseout=function (){
			for (var i=0;i<lis4.length;i++) {
				lis4[i].style.opacity=1;
			}
		}
	}
};
//点击前往
function go(){
	for (var i=0;i<lis5.length;i++) {
		lis5[i].style.background=lis5[i].back1;
	}
	num2=2;
	txt3.innerHTML=arrTxt[num2];
	var t=new TimelineMax();
	t.to('.more',0.5,{
		scale:3,
		autoAlpha:0,
		onComplete:function (){
			t.set('.more',{
				scale:1,
				autoAlpha:1
			})
			h4.style.display='none';
			more.style.display='none';
			con2.style.display='block';
			block.style.display='block';
			t.set('.block',{
				transformPerspective:100,
				transformOrigin:'center',
				z:-400
			})
			t.to('.block',0.5,{
				z:0,
				onComplete:function (){
					close();
					tabPic1();
					onmove();
				}
			})
		}
	})
};
//第四屏弹出层关闭
function close(){
	var cha=document.getElementsByClassName('cha')[0];
	cha.onclick=function (){
		var t=new TimelineMax();
		t.set('.block',{
			transformPerspective:100,
			transformOrigin:'center',
			z:0
		})
		t.to('.block',0.5,{
			z:-800,
			ease:Linear.easeIn,
			onComplete:function (){
				block.style.display='none';
				con2.style.display='none';
			}
		},0.2)
		h4.style.display='block';
		more.style.display='block';
		onOff8=true;
	}
	cha.onmouseover=function (){
		var t=new TimelineMax();
		t.set('.cha',{
			rotationZ:0
		})
		t.to('.cha',1,{
			rotationZ:360
		})
	}
};
//第四屏弹出层图片切换
function tabPic1(){
	var prev1=document.getElementsByClassName('prev1')[0];
	var next1=document.getElementsByClassName('next1')[0];
	next1.onclick=function (){
		right();
	};
	prev1.onclick=function (){
		left();
	};
};
//点击下一张
function right(){
	var list5=document.getElementsByClassName('list5')[0];
	var lis5=list5.getElementsByTagName('li');
	var mar=parseFloat(getComputedStyle(lis5[2]).marginRight);
	var w=parseFloat(getComputedStyle(lis5[1]).width);
	var s=mar+w;
	num2++;
	if (num2>4) {
		num2=0;
	}
	for (var i=0;i<lis5.length;i++) {
		lis5[i].back=getComputedStyle(lis5[i]).background;
	}
	var t=new TimelineMax();
	t.to('.list5 li:nth-of-type(3)',0.5,{
		scale:1
	})
	t.to('.txt3',0.2,{
		autoAlpha:0,
		onComplete:function (){
			txt3.innerHTML=arrTxt[num2];
		}
	})
	t.to('.list5',0.5,{
		x:-s,
		onComplete:function (){
			t.set('.list5',{
				x:0
			})
			for (var i=0;i<lis5.length;i++) {
				var n=i+1;
				if (n>4) {
					n=0;
				}
				lis5[i].style.background=lis5[n].back;
			}
			t.to('.list5 li:nth-of-type(3)',0.5,{
				scale:1.2,
				onComplete:function (){
					t.to('.txt3',0.2,{
						autoAlpha:1
					})
				}
			})
		}
	})
};
//点击上一张
function left(){
	var list5=document.getElementsByClassName('list5')[0];
	var lis5=list5.getElementsByTagName('li');
	var mar=parseFloat(getComputedStyle(lis5[2]).marginRight);
	var w=parseFloat(getComputedStyle(lis5[1]).width);
	var s=mar+w;
	num2--;
	if (num2<0) {
		num2=4;
	}
	for (var i=0;i<lis5.length;i++) {
		lis5[i].back=getComputedStyle(lis5[i]).background;
	}
	var t=new TimelineMax();
	t.to('.list5 li:nth-of-type(3)',0.5,{
		scale:1
	})
	t.to('.txt3',0.2,{
		autoAlpha:0,
		onComplete:function (){
			txt3.innerHTML=arrTxt[num2];
		}
	})
	t.to('.list5',0.5,{
		x:s,
		onComplete:function (){
			t.set('.list5',{
				x:0
			})
			for (var i=0;i<lis5.length;i++) {
				var n=i-1;
				if (n<0) {
					n=4;
				}
				lis5[i].style.background=lis5[n].back;
			}
			t.to('.list5 li:nth-of-type(3)',0.5,{
				scale:1.2,
				onComplete:function (){
					t.to('.txt3',0.2,{
						autoAlpha:1
					})
				}
			})
		}
	})
};
//第四屏弹出层鼠标滑动图片切换
function onmove(){
	var oli=list5.getElementsByTagName('li')[2];
	var w=oli.offsetWidth;
	var s=w/3;
	list5.onmousedown=function (ev){
		ev.preventDefault();
		var x1=ev.clientX;
		list5.onmousemove=function (ev){
			ev.preventDefault();
			var x2=ev.clientX;
			var x=x2-x1;
			if (x>=s) {
				list5.onmousemove=null;
				left();
			}
			if (x<-s) {
				list5.onmousemove=null;
				right();
			}
		};
	}
	list5.onmouseup=function (){
		list5.onmousemove=null;
		list5.onmouseup=null;
	}
};
