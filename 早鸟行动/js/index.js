//获取全局变量
var btns=document.getElementsByClassName('btn');
var box=document.getElementById('box');
var cons=box.getElementsByClassName('con');
var con1=document.getElementsByClassName('con1')[0];
var list1=document.getElementsByClassName('list1')[0];
var lis1=list1.getElementsByTagName('li');
//适应屏幕尺寸，设置初始样式
var w=document.body.clientWidth;
var h=document.documentElement.clientHeight;//950
for (var i=0;i<cons.length;i++) {
	cons[i].style.width=w+'px';
	cons[i].style.height=h+'px';
	cons[i].style.backgroundSize=''+w+'px '+h+'px';
}
con1.style.width=w+'px';
con1.style.height=h+'px';
list1.style.width=(lis1.length*w)+'px';
list1.style.height=h+'px';
for (var i=0;i<lis1.length;i++) {
	lis1[i].style.width=w+'px';
	lis1[i].style.height=h+'px';
	lis1[i].style.backgroundSize=''+w+'px '+h+'px';
}
btns[0].className='btn active';
//第二屏按钮垂直位置
var prev=document.getElementsByClassName('prev')[0];
var next=document.getElementsByClassName('next')[0];
prev.style.top=h/2-prev.offsetHeight/2+'px';
next.style.top=h/2-next.offsetHeight/2+'px';
//记录页数
var n=0;
//记录第二屏页数
var num1=0;
//第四屏弹出层计数
var num2=2;
//鼠标滚轮开关
var onOff1=true;
//页钮点击开关
var onOff2=true;
//加勒比移入开关
var onOff3=false;
//价格移入开关
var onOff4=false;
//第一屏鼠标移动跟随开关
var onOff5=false;
//第二屏鼠标移动跟随开关
var onOff6=false;
//第三屏导航点击开关
var onOff7=false;
//第四屏点击开关
var onOff8=true;
//全局调用滚轮函数
addMouseWheel(box);
//全局调用按钮点击函数
btnClick();
//开局第一页樱花
showFlo1();
showFlo2();
//开局第一页加勒比移入
onjialebi();
//开局第一页价格移入
onjiage();
//第一屏鼠标移动跟随
follow();
//全局调用第三屏导航点击
navClick();
//hash值改变
window.onhashchange=function (){
	var h=location.hash.split('=')[1];
	if (h==1) {
		getDiv(0);
		showTxt(0);
	} else{
		getDiv(0);
		list1.style.left=0;
		num1=0;
	}
	if (h==2) {
		//第三屏初始
		var list4=document.getElementsByClassName('list4')[0];
		var lis4=list4.getElementsByTagName('li');
		var list3=document.getElementsByClassName('list3')[0];
		var lis3=list3.getElementsByTagName('li');
		var i=list3.getElementsByTagName('i');
		for (var j=0;j<i.length;j++) {
			i[j].style.display='none';
		}
		i[0].style.display='block';
		for (var i=0;i<lis4.length;i++) {
			lis4[i].style.backgroundImage='url('+data[0][i]+')';
			lis4[i].style.transition='';
		}
		var t=new TimelineMax();
		var num=0;
		t.set('.list4 li',{
			transformPerspective:500,
			transformOrigin:'center',
			z:200,
			autoAlpha:0
		})
		t.staggerTo('.list4 li',1,{
			z:0,
			autoAlpha:1,
			onComplete:function (){
				num++;
				if (num==6) {
					navClick();
					onOff7=true;
					onlis4();
				}
			}
		},0.1)
	}
	con2.style.display='none';
	block.style.display='none';
	h4.style.display='block';
	more.style.display='block';
	onOff8=true;
	num2=2;
};
//第四屏遮罩层
var con2=document.getElementsByClassName('con2')[0];
con2.style.width=w+'px';
con2.style.height=h+'px';
//点击前往
var list5=document.getElementsByClassName('list5')[0];
var lis5=list5.getElementsByTagName('li');
for (var i=0;i<lis5.length;i++) {
	lis5[i].back1=getComputedStyle(lis5[i]).background;
}
var more=document.getElementsByClassName('more')[0];
var block=document.getElementsByClassName('block')[0];
var h4=document.getElementsByTagName('h4')[0];
var txt3=document.getElementsByClassName('txt3')[0];
more.onclick=function (){
	if (onOff8) {
		onOff8=false;		
		go();
	}
};

