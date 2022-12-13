//자주쓰는 셀렉터 변수에 넣어쓰는 것이 좋음
//반복문 사용시 변수 let 사용 
var btn = $('.tab-button');
var con = $('.tab-content');

for (let i = 0; i <=document.getElementsByTagName('div').length; i++){
    btn.eq(i).on('click', function(){
        btn.removeClass('orange');
        btn.eq(i).addClass('orange');
        con.removeClass('show');
        con.eq(i).addClass('show');
    });
}