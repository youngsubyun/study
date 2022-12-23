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

var pants = [28, 30, 32, 34];
var shirts = [95, 100, 105];

$('.form-select').eq(0).on('input', function(){
    var value = $('.form-select').eq(0).val();
    if (value == '셔츠'){
        $('.form-select').eq(1).removeClass('form-hide');
        $('.form-select').eq(1).html('');
        shirts.forEach(function(data){
            console.log(data);
            $('.form-select').eq(1).append('<option>' + data + '</option>');
        });
    }else if (value == '바지'){
        $('.form-select').eq(1).removeClass('form-hide');
        $('.form-select').eq(1).html('');
        pants.forEach(function(a){
            $('.form-select').eq(1).append('<option>' + a + '</option>')
        });
    } 
    else if (value == '모자') {
        $('.form-select').eq(1).addClass('form-hide');
    }
});

var obj = {name : 'kim', age : 20}

for (var key in obj){
    console.log(obj[key]);
}

//array 실력향상 과제
// var 출석부 = ['흥민', '영희', '철수', '재석'];

// function 이름찾기(a){
//     for (var i = 0; i <= 출석부.length; i++){
//         if (a == 출석부[i]){
//             console.log('있어요');
//         }
//     }
// }

//구구단
// for (var k = 2; k < 10; k++){
//     for (var i = 1; i < 10; i++){
//         console.log(k * i);
//     }
// }

//평균점수 계산기
// var arr = [10, 20, 30, 40 ,50];
// var result = 0;

// for (var i = 0; i < 5; i++){
//     result = result + arr[i];
// }

// function 함수(arr, b){
//     if (result / arr.length < b){
//         console.log('오름');
//     } else {
//         console.log('내림');
//     }
// }

//ajax로 GET(서버 데이터 가져올 때) 요청하는 법 
// $.get('https://codingapple1.github.io/hello.txt')
// .done(function(data){
//     console.log(data);
// }).fail(function(){
//     console.log('t');
// }) //ajax 실패시 코드 실행

// $.get('https://codingapple1.github.io/price.json')
// .done(function(data){
//     console.log(data.price);
// })

//fetch 브라우저 기본 함수를 사용해서 ajax 가능
//JSON : object, array 보내고 싶으면 문자처럼 만들어야 함
//ex) "{"price" : 50000}"
// fetch('https://codingapple1.github.io/price.json')
// .then(res => res.json()) //받아온 JSON을 object로 바꿔주는 기능
// .then(data => {
//     console.log(data)
// })
// .catch(error => {
//     console.log(error)
// })