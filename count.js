window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#sanbyaku').addEventListener('click', function() {
        const val = document.querySelector('#input').value;
        

        // 変数の初期化
        let len0 = val.length;
        let len = val.replace(/[\n\s　]/g, "").length; //スペースを数えない

        
           // 文字列の長さを得る
        const max = 300;
        let len2 = len - max;
        let res = '';


        // 文字数によって分岐
        if (len <= max) {
            res = ` 文字数は${len}文字でOKです！スペースを含めると${len0}文字です。`;
           
        } else  {
            res = `${len}文字です！ ${len2}文字オーバーです。スペースを含めると${len0}文字です。`;
           
        } 
        

        document.querySelector('#output').innerHTML = res;
    });

    document.querySelector('#yonhyaku').addEventListener('click', function(){
        const val = document.querySelector('#input').value;

        let len0 = val.length;
        let len = val.replace(/[\n\s　]/g, "").length;   // 文字列の長さを得る
        const max = 400;
        let len2 = len - max;
        let res = '';

        // 文字数によって分岐
        if (len <= max) {
            res = `文字数は${len}文字でOKです！スペースを含めると${len0}文字です。`;
           
        } else  {
            res = `${len}文字です！ ${len2}文字オーバーです。スペースを含めると${len0}文字です。`;
           
        } 
        document.querySelector('#output').innerHTML = res;
    });


    document.querySelector('#nihyaku').addEventListener('click', function(){
        const val = document.querySelector('#input').value;

        let len0 = val.length;
        let len = val.replace(/[\n\s　]/g, "").length;   // 文字列の長さを得る
        const max = 200;
        let len2 = len - max;
        let res = '';

        // 文字数によって分岐
        if (len <= max) {
            res = `文字数は${len}文字でOKです！スペースを含めると${len0}文字です。`;
           
        } else  {
            res = `${len}文字です！ ${len2}文字オーバーです。スペースを含めると${len0}文字です。`;
           
        } 
        document.querySelector('#output').innerHTML = res;
    });

    
    
});
function clearTextarea() {
    var textareaForm = document.getElementById("input");
  textareaForm.value = '';
}



function load() {
    if(!localStorage.getItem('mydata')) {
    alert("保存データはありません");
    } else {
    mydata = localStorage.getItem('mydata');
    document.getElementById("mydata_in").value = mydata;
    }
    }
    
    // 保存
function save() {
    var mydata = document.getElementById("mydata_in").value;
    localStorage.setItem('mydata', mydata);
    alert("保存しました！");
    }
    // 確認
    function view() {
    if(!localStorage.getItem('mydata')) {
    alert("保存データはありません");
    } else {
    mydata = localStorage.getItem('mydata');
    document.getElementById("mydata_out").innerText = mydata;
    }
    }
    



    const copy = () => {
        // テキストエリアの文字を取得
        const txt = document.getElementById("input").value;
        console.log(txt);
      
        // クリップボードにコピー
        navigator.clipboard.writeText(txt);

        alert("コピーしました！");
      };
