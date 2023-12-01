window.addEventListener('DOMContentLoaded', function() {

    const textArea = document.querySelector('#input');
    const length = document.querySelector('.length');
    textArea.addEventListener('input' , () => {
      length.textContent = textArea.value.length;
    }, false);
    
    
    
    
    
    
    //200文字制限ボタン
    document.querySelector('#nihyaku').addEventListener('click', function(){
        const val = document.querySelector('#input').value;

        let len0 = val.length; //スペースも1文字としてカウント
        let len = val.replace(/[\n\s　]/g, "").length;   // スペースを数えない
        let N = len0 - len ; //スペースの数
        const max = 200;
        let len2 = len - max;
        let res = '';

        
        if (len0 == 0 && len == 0) {
            res = `文字が入力されていません`;
            
        } else if(len0 >= max && len <= max){
            res = `スペースを含めて${len0}文字です。スペースが${N}文字含まれています。`;
        }else if(len0 <= max){
            res = `${len}/${max}文字でOKです！スペース込みだと${len0}/${max}文字です。`;
        }
        else  {
            res = `${len}/${max}文字です！ ${len2}文字オーバーです。スペースを含めると${len0}/${max}文字です。`;
           
        } 
        document.querySelector('#output').innerHTML = res;
    });



    //300文字制限ボタン
    document.querySelector('#sanbyaku').addEventListener('click', function() {
        const val = document.querySelector('#input').value;
        

        let len0 = val.length; //スペースも1文字としてカウント
        let len = val.replace(/[\n\s　]/g, "").length;   // スペースを数えない
        let N = len0 - len ; //スペースの数
        const max = 300;
        let len2 = len - max;
        let res = '';


        // 文字数によって分岐
        if (len0 == 0 && len == 0) {
            res = `文字が入力されていません`;
            
        } else if(len0 >= max && len <= max){
            res = `スペースを含めて${len0}文字です。スペースが${N}文字含まれています。`;
        }else if(len0 <= max){
            res = `${len}/${max}文字でOKです！スペース込みだと${len0}/${max}文字です。`;
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
        const max = 400;
        let len2 = len - max;
        let res = '';

        // 文字数によって分岐
        if (len0 == 0 && len == 0) {
            res = `文字が入力されていません`;
            
        } else if(len0 >= max && len <= max){
            res = `スペースを含めて${len0}文字です。スペースが${N}文字含まれています。`;
        }else if(len0 <= max){
            res = `${len}/${max}文字でOKです！スペース込みだと${len0}/${max}文字です。`;
        }
        else  {
            res = `${len}/${max}文字です！ ${len2}文字オーバーです。スペースを含めると${len0}/${max}文字です。`;
           
        } 
        document.querySelector('#output').innerHTML = res;
    });



    
    
});


//クリアボタン
function clearTextarea() {
    let textareaForm = document.getElementById("input");
    const length = document.querySelector('.length');
    if(window.confirm('本当にクリアしますか？')){
        textareaForm.value = '';
        length.textContent = 0;
        res = '';
    } else{
        window.alert('クリアされませんでした'); 
    }
    document.querySelector('#output').innerHTML = res;
};


//コピーボタン
const copy = () => {
    const txt = document.getElementById("input").value;
    console.log(txt);
  
    
    navigator.clipboard.writeText(txt);
    alert("コピーしました！");
  };



  function updateProgressBar() {
    const textArea = document.getElementById('input').value;
    const progressBar = document.getElementById('progressBar');

    const maxLength = 200;
    const percentage = (textArea.length / maxLength) * 200;
    progressBar.value = percentage;

    if (textArea.length > maxLength) {
        progressBar.style.backgroundColor = 'red';
      } else {
        progressBar.style.backgroundColor = '';  // Reset the color
      }
  }


  function updateProgressBarThird() {
    const textArea = document.getElementById('input').value;
    const progressBar = document.getElementById('progressBarThird');

    const maxLength = 300;
    const percentage = (textArea.length / maxLength) * 300;
    progressBar.value = percentage;

    if (textArea.length > maxLength) {
        progressBar.style.backgroundColor= 'red';
      } else {
        progressBar.style.backgroundColor = '';  // Reset the color
      }
  }

  function updateProgressBarFourth() {
    const textArea = document.getElementById('input').value;
    const progressBar = document.getElementById('updateProgressBarFourth');

    const maxLength = 400;
    const percentage = (textArea.length / maxLength) * 400;
    progressBar.value = percentage;

    if (textArea.length > maxLength) {
        progressBar.style.backgroundColor = 'red';
      } else {
        progressBar.style.backgroundColor = '';  // Reset the color
      }
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
