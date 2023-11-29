window.addEventListener('DOMContentLoaded', function() {

    document.querySelector('#nihyaku').addEventListener('click', function(){
        const val = document.querySelector('#input').value;

        let len0 = val.length; //スペースも1文字としてカウント
        let len = val.replace(/[\n\s　]/g, "").length;   // スペースを数えない
        let N = len0 - len ; //スペースの数
        const max = 200;
        let len2 = len - max;
        let res = '';

        // 文字数によって分岐
        if (len0 <= max) {
            res = `${len}/${max}文字でOKです！スペース込みだと${len0}/${max}文字です。`;
            
        } else if(len0 >= max && len <= max){
            res = `スペースを含めて${len0}文字です。スペースが${N}文字含まれています。`;
        }
        else  {
            res = `${len}/${max}文字です！ ${len2}文字オーバーです。スペースを含めると${len0}/${max}文字です。`;
           
        } 
        document.querySelector('#output').innerHTML = res;
    });


    document.querySelector('#sanbyaku').addEventListener('click', function() {
        const val = document.querySelector('#input').value;
        

        let len0 = val.length; //スペースも1文字としてカウント
        let len = val.replace(/[\n\s　]/g, "").length;   // スペースを数えない
        let N = len0 - len ; //スペースの数
        const max = 200;
        let len2 = len - max;
        let res = '';


        // 文字数によって分岐
        if (len0 <= max) {
            res = `${len}/${max}文字でOKです！スペース込みだと${len0}/${max}文字です。`;
            
        } else if(len0 >= max && len <= max){
            res = `スペースを含めて${len0}文字です。スペースが${N}文字含まれています。`;
        }
        else  {
            res = `${len}/${max}文字です！ ${len2}文字オーバーです。スペースを含めると${len0}/${max}文字です。`;
           
        } 
        

        document.querySelector('#output').innerHTML = res;
    });

    document.querySelector('#yonhyaku').addEventListener('click', function(){
        const val = document.querySelector('#input').value;

        let len0 = val.length; //スペースも1文字としてカウント
        let len = val.replace(/[\n\s　]/g, "").length;   // スペースを数えない
        let N = len0 - len ; //スペースの数
        const max = 200;
        let len2 = len - max;
        let res = '';

        // 文字数によって分岐
        if (len0 <= max) {
            res = `${len}/${max}文字でOKです！スペース込みだと${len0}/${max}文字です。`;
            
        } else if(len0 >= max && len <= max){
            res = `スペースを含めて${len0}文字です。スペースが${N}文字含まれています。`;
        }
        else  {
            res = `${len}/${max}文字です！ ${len2}文字オーバーです。スペースを含めると${len0}/${max}文字です。`;
           
        } 
        document.querySelector('#output').innerHTML = res;
    });



    
    
});
function clearTextarea() {
    var textareaForm = document.getElementById("input");
  textareaForm.value = '';
}

//----------------------------文章保存-------------------------------//

function load() {
   /* if(!localStorage.getItem('mydata')) {
    alert("保存データはありません");
    } else {*/
    mydata = localStorage.getItem('mydata');
    document.getElementById("mydata_in").value = mydata;

    mydataSecond = localStorage.getItem('mydataSecond');
    document.getElementById("mydataSecond_in").value = mydataSecond;

    mydataThird = localStorage.getItem('mydataThird');
    document.getElementById("mydataThird_in").value = mydataThird;
    }
    
    
    // 保存
function save() {
    var mydata = document.getElementById("mydata_in").value;
    localStorage.setItem('mydata', mydata);
    alert("保存しました！");
    
    var mydataSecond = document.getElementById("mydataSecond_in").value;
    localStorage.setItem('mydataSecond', mydataSecond);


    var mydataThird = document.getElementById("mydataThird_in").value;
    localStorage.setItem('mydataThird', mydataThird);
   
    }



    


    
        

    



    const copy = () => {
        // テキストエリアの文字を取得
        const txt = document.getElementById("input").value;
        console.log(txt);
      
        // クリップボードにコピー
        navigator.clipboard.writeText(txt);

        alert("コピーしました！");
      };
