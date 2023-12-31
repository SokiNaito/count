window.addEventListener('DOMContentLoaded', function() {

//------------ストップウォッチ------------//
let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timeRef = document.querySelector(".timer-display");
let int = null;


document.getElementById("start-timer").addEventListener('click', () => {
    if(int !== null){
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});

document.getElementById("pause-timer").addEventListener("click", () => {
    clearInterval(int);
});

document.getElementById("reset-timer").addEventListener('click', () => {
    clearInterval(int);
    [millisecnds, seconds, minutes, hours] = [0, 0, 0, 0];
    timeRef.innerHTML = " 00 : 00 : 00 : 000";
});

function displayTimer () {
    milliseconds += 10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
    
    if(seconds == 60) {
        seconds = 0;
        minutes++;
    
    if(minutes == 60){
        minutes = 0;
        hours++;
    }
}
    }
let h = hours < 10 ? "0" + hours : hours;
let m = minutes < 10 ? "0" + minutes : minutes;
let s = seconds < 10 ? "0" + seconds : seconds;
let ms = milliseconds < 10
? "00" + milliseconds
: milliseconds < 100
? "0" + milliseconds
: milliseconds;

timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}










  //-----------経過時間----------//
  const displayNone = document.querySelector('.display_none');
		const dis_none_bt = document.querySelector('.dis_none_bt');
		dis_none_bt.addEventListener('click' ,  () => {
		if(displayNone.classList.contains('active')){
			dis_none_bt.textContent ='▼経過時間▼';
			displayNone.style.display = 'none';
			displayNone.classList.remove('active');
		}else {
			dis_none_bt.textContent ='▲経過時間▲';
			displayNone.style.display = 'block';
			displayNone.classList.add('active');
		}
	});


//----------リアルタイムカウント--------//
  const textArea = document.querySelector('#input');
  const length = document.querySelector('.length');
  //テキストエリアに入力された文字数をリアルタイムでカウント
  textArea.addEventListener('input' , () => {
    length.textContent = textArea.value.length;
  }, false);
  

  
  
  //200文字制限ボタン
  document.querySelector('#nihyaku').addEventListener('click', function(){
      const val = document.querySelector('#input').value;

      let wordCount = val.length; //スペースも1文字としてカウント
      let wordCountNoSpace = val.replace(/[\n\s　]/g, "").length;   // スペースをカウントしない
      let space = wordCount - wordCountNoSpace ; //スペースの数
      ; //スペースの数
      const max = 200;
      let len = wordCount - max;
      let len2 = max - wordCount;
      let res = '';

      if (wordCount == 0 && wordCountNoSpace == 0) {
          res = `文字が入力されていません`;
      }else if(wordCount == max && space ==0){
          res = `ピッタリ<span style="color:red";><b>${max}</b></span>文字です！`;
      }else if(wordCount <= max && space !== 0){
          res = `あと<span style="color:red";><b>${len2}</b></span>文字入力できます。スペースが<span style="color:red";>${space}</span>文字含まれています。`;
      }else if(wordCount <= max){
       res =  `あと<span style="color:red";><b>${len2}</b></span>文字入力できます。`;
      } else if(wordCount > max){
          res = `<span style="color:red";><b>${len}</b>文字オーバーしています。</span>`;
      }
      document.querySelector('#output').innerHTML = res;
  });



  //300文字制限ボタン
  document.querySelector('#sanbyaku').addEventListener('click', function() {
      const val = document.querySelector('#input').value;
      
      let wordCount = val.length; //スペースも1文字としてカウント
      let wordCountNoSpace = val.replace(/[\n\s　]/g, "").length;   // スペースをカウントしない
      let space = wordCount - wordCountNoSpace ; //スペースの数
      ; //スペースの数
      const max = 300;
      let len = wordCount - max;
      let len2 = max - wordCount;
      let res = '';

      if (wordCount == 0 && wordCountNoSpace == 0) {
        res = `文字が入力されていません`;
    }else if(wordCount == max && space ==0){
        res = `ピッタリ<span style="color:red";><b>${max}</b></span>文字です！`;
    }else if(wordCount <= max && space !== 0){
        res = `あと<span style="color:red";><b>${len2}</b></span>文字入力できます。スペースが<span style="color:red";>${space}</span>文字含まれています。`;
    }else if(wordCount <= max){
     res =  `あと<span style="color:red";><b>${len2}</b></span>文字入力できます。`;
    } else if(wordCount > max){
        res = `<span style="color:red";><b>${len}</b>文字オーバーしています。</span>`;
    }
      document.querySelector('#output').innerHTML = res;
  });




  //400文字制限ボタン
  document.querySelector('#yonhyaku').addEventListener('click', function(){
      const val = document.querySelector('#input').value;

      let wordCount = val.length; //スペースも1文字としてカウント
      let wordCountNoSpace = val.replace(/[\n\s　]/g, "").length;   // スペースをカウントしない
      let space = wordCount - wordCountNoSpace ; //スペースの数
      ; //スペースの数
      const max = 400;
      let len = wordCount - max;
      let len2 = max - wordCount;
      let res = '';

      if (wordCount == 0 && wordCountNoSpace == 0) {
        res = `文字が入力されていません`;
    }else if(wordCount == max && space ==0){
        res = `ピッタリ<span style="color:red";><b>${max}</b></span>文字です！`;
    }else if(wordCount <= max && space !== 0){
        res = `あと<span style="color:red";><b>${len2}</b></span>文字入力できます。スペースが<span style="color:red";><b>${space}</b></span>文字含まれています。`;
    }else if(wordCount <= max){
     res =  `あと<span style="color:red";><b>${len2}</b></span>文字入力できます。`;
    } else if(wordCount > max){
        res = `<span style="color:red";><b>${len}</b>文字オーバーしています。</span>`;
    }
      document.querySelector('#output').innerHTML = res;
  });
});


//クリアボタン
function func1() {
    if(window.confirm('本当にクリアしますか？')) {
      document.location.reload();
  }else{
      window.alert('クリアされませんでした'); 
  }
}

//コピーボタン
const copy = () => {
  const txt = document.getElementById("input").value;
  console.log(txt);
  navigator.clipboard.writeText(txt);
  alert("コピーしました！");
};


//200文字バー
function updateProgressBar() {
  const textArea = document.getElementById('input').value;
  const progressBar = document.getElementById('progressBar');

  const maxLength = 200;
  const percentage = (textArea.length / maxLength) * 200;
  const percentage2 = Math.floor((textArea.length / maxLength) * 100);
  progressBar.value = percentage;

  if (textArea.length > maxLength) {
      progressBar.style.backgroundColor = 'red';
    }else {
      progressBar.style.backgroundColor = '';  // Reset the color
    }
    document.querySelector('#parsent').innerHTML = `${percentage2}%`;
};



//300文字バー
function updateProgressBarThird() {
  const textArea = document.getElementById('input').value;
  const progressBarThird = document.getElementById('progressBarThird');
  
  const maxLength = 300;
  const percentage = (textArea.length / maxLength) * 300;
  const percentage3 = Math.floor((textArea.length / maxLength) * 100);
  progressBarThird.value = percentage;

  if (textArea.length > maxLength) {
      progressBarThird.style.backgroundColor= 'red';
    }else {
      progressBarThird.style.backgroundColor = '';  // Reset the color
    }
    document.querySelector('#parsent300').innerHTML = `${percentage3}%`;
};


//400文字バー
function updateProgressBarFourth() {
  const textArea = document.getElementById('input').value;
  const updateProgressBarFourth = document.getElementById('updateProgressBarFourth');

  const maxLength = 400;
  const percentage = (textArea.length / maxLength) * 400;
  const percentage4 = Math.floor((textArea.length / maxLength) * 100);
  updateProgressBarFourth.value = percentage;

  if (textArea.length > maxLength) {
      updateProgressBarFourth.style.backgroundColor = 'red';
    }else {
      updateProgressBarFourth.style.backgroundColor = '';  // Reset the color
    }
    document.querySelector('#parsent400').innerHTML = `${percentage4}%`;
};



//----------------------------文章保存-------------------------------//
window.onload = function() {
  loadSavedText();
};

// テキストエリアを追加する関数
function addTextArea() {
  let textareaContainer = document.getElementById('textareaContainer');
  let wrapper = document.createElement('div');
  wrapper.className = 'textarea-wrapper';
  
  let textarea = document.createElement('textarea');
  let deleteButton = document.createElement('button');
  deleteButton.textContent = '削除';
  deleteButton.className = 'delete-button';
  deleteButton.onclick = function() {
    wrapper.remove();
  };
 
  wrapper.appendChild(textarea);
  wrapper.appendChild(deleteButton);
  textareaContainer.appendChild(wrapper);
};





// テキストを保存する関数
function saveText() {

  let textareaWrappers = document.querySelectorAll('.textarea-wrapper');
  let texts = [];

  textareaWrappers.forEach(function(wrapper) {
    let textarea = wrapper.querySelector('textarea');
    texts.push(textarea.value);
  });

  // ローカルストレージに保存
  localStorage.setItem('savedTexts', JSON.stringify(texts));
  alert('テキストが保存されました！');
};

// 保存されたテキストを読み込む関数
function loadSavedText() {
  

  //let textareaContainer = document.getElementById('textareaContainer');
  let savedTexts = localStorage.getItem('savedTexts');

  if (savedTexts) {
    savedTexts = JSON.parse(savedTexts);

    savedTexts.forEach(function(text) {
      addTextAreaWithText(text);
    });
}};


// テキストを指定してテキストエリアを追加する関数
function addTextAreaWithText(text) {
  let textareaContainer = document.getElementById('textareaContainer');
  let wrapper = document.createElement('div');
  wrapper.className = 'textarea-wrapper';

  let textarea = document.createElement('textarea');
  textarea.value = text;

  let deleteButton = document.createElement('button');
  deleteButton.textContent = '削除';
  deleteButton.className = 'delete-button';
  deleteButton.onclick = function() {
    
    if(window.confirm('本当に削除しますか？')) {
      wrapper.remove();
  }else{
      window.alert('削除されませんでした'); 
  }};

  wrapper.appendChild(textarea);
  wrapper.appendChild(deleteButton);
  textareaContainer.appendChild(wrapper);

}
