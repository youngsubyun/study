//array는 자료간 순서가 존재, object는 순서개념 없음
//array 자료형
var car = ['소나타', 50000, 'white'];

//object 자료형
var car2 = { name : '소나타',price : [50000, 3000, 4000] }// {key : value}
document.querySelector('.car-price').innerHTML = car2['price'][0];

//실제 저장되는 자료들은 value
// console.log(car2['name']);
// console.log(car2.price);

//자주쓰는 셀렉터 변수에 넣어쓰는 것이 좋음
//반복문 사용시 변수 let 사용 

// 버튼0 누르면
// - 모든버튼에 붙은 orange 클래스명 제거
// - 버튼0에 orange 클래스명 추가
// - 모든 div에 붙은 show 클래스명 제거
// - div0에 show 클래스명 추가


//축약할 코드에 변수가 있으면 변수를 파라미터로 바꿔야 함
var btn = $('.tab-button');
var con = $('.tab-content');


//var 선언시 오류남, let으로 선언하는 이유
//:var 변수 범위 -> function var i -> for문 밖에 생성
//:let 변수 범위 -> {} -> for문 안쪽에 생성
// for (let i = 0; i < $('.tab-button').length; i++){
//     $('.tab-button').eq(i).on('click', function(){
//         탭열기(i);
//     });
// }

$('.list').click(function(e){
    탭열기(e.target.dataset.id);
})


function 탭열기(num){
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(num).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(num).addClass('show');
}

$('.form-select').eq(0).on('input', function(){
    var value = $('.form-select').eq(0).val();
    if (value == '셔츠'){
        $('.form-select').eq(1).removeClass('form-hide');
        var 탬플릿 = '<option>95</option> <option>100</option>' ;
        $('.form-select').eq(1).html(탬플릿);
    }else if (value == '바지'){
        $('.form-select').eq(1).removeClass('form-hide');
        var 탬플릿 = '<option>28</option> <option>30</option>' ;
        $('.form-select').eq(1).html(탬플릿);
    } 
    else if (value == '모자') {
        $('.form-select').eq(1).addClass('form-hide');
    }
});