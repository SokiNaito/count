window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#sanbyaku').addEventListener('click', function() {
        const val = document.querySelector('#input').value;

        // 変数の初期化
        let len = val.length;   // 文字列の長さを得る
        const max = 300;
        let len2 = len - max;
        let res = '';

        // 文字数によって分岐
        if (len <= max) {
            res = `文字数はOKです! 文字数は${len}です。`;
        } else {
            res = `文字数が長すぎます！ ${len2}文字オーバーです。`;
        }

        document.querySelector('#output').innerHTML = res;
    });

    document.querySelector('#yonhyaku').addEventListener('click', function(){
        const val = document.querySelector('#input').value;

        let len = val.length;   // 文字列の長さを得る
        const max = 400;
        let len2 = len - max;
        let res = '';

        // 文字数によって分岐
        if (len <= max) {
            res = `文字数はOKです! 文字数は${len}です。`;
        } else {
            res = `文字数が長すぎます！ ${len2}文字オーバーです。`;
        }
        document.querySelector('#output').innerHTML = res;
    });


    document.querySelector('#nihyaku').addEventListener('click', function(){
        const val = document.querySelector('#input').value;

        let len = val.length;   // 文字列の長さを得る
        const max = 200;
        let len2 = len - max;
        let res = '';

        // 文字数によって分岐
        if (len <= max) {
            res = `文字数はOKです! 文字数は${len}です。`;
        } else {
            res = `文字数が長すぎます！ ${len2}文字オーバーです。`;
        }
        document.querySelector('#output').innerHTML = res;
    });


});
