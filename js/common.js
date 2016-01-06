/**
 * 
 * @authors Benu (slimeball@foxmail.com)
 * @date    2014-09-15 10:28:10
 * @version AME盒子通用JS
 */
$(function(){
	$(".z_subnav li:odd").css("background","#b9a15b");
	$(".left_nav img").on("tap",function(){
		$(".z_subnav").toggle();
	});
});

// 二级目录

window.onload=function (){
var nav = document.getElementById("z_nav");
var links = nav.getElementsByTagName("li");
var lilen = nav.getElementsByTagName("a");
var currenturl = document.location.href;
var last = 0;
for (var i=0;i<links.length;i++)
{
var linkurl = lilen[i].getAttribute("href");
if(currenturl.indexOf(linkurl)!=-1)
{
last = i;
links[last].className = "selected";
}
}
}
//导航hover


$(function(){
var selected_li = $(".z_box_choose01 li");
	selected_li.on("tap",function(){
		var selected_index = selected_li.index(this);
		$(this).addClass("z_box_selected")
		.siblings().removeClass("z_box_selected");

		 $(".z_yellow_arrow01 a").eq(selected_index).show()
		 .siblings().hide();
	});
});
$(function(){
var selected_li = $(".z_box_choose02 li");
	selected_li.on("tap",function(){
		var selected_index = selected_li.index(this);
		$(this).addClass("z_box_selected")
		.siblings().removeClass("z_box_selected");

		 $(".z_yellow_arrow02 a").eq(selected_index).show()
		 .siblings().hide();
	});
});
$(function(){
var selected_li = $(".z_box_choose03 li");
	selected_li.on("tap",function(){
		var selected_index = selected_li.index(this);
		$(this).addClass("z_box_selected")
		.siblings().removeClass("z_box_selected");

		 $(".z_yellow_arrow03 a").eq(selected_index).show()
		 .siblings().hide();
	});
});
$(function(){
var selected_li = $(".z_box_choose04 li");
	selected_li.on("tap",function(){
		var selected_index = selected_li.index(this);
		$(this).addClass("z_box_selected")
		.siblings().removeClass("z_box_selected");

		 $(".z_yellow_arrow04 a").eq(selected_index).show()
		 .siblings().hide();
	});
});
$(function(){
var selected_li = $(".z_box_choose05 li");
	selected_li.on("tap",function(){
		var selected_index = selected_li.index(this);
		$(this).addClass("z_box_selected")
		.siblings().removeClass("z_box_selected");

		 $(".z_yellow_arrow05 a").eq(selected_index).show()
		 .siblings().hide();
	});
});
// 套餐选择