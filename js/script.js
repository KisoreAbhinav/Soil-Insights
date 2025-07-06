
const readerBtn = document.getElementById('reader-btn');
const editorBtn = document.getElementById('editor-btn');
const readerForm = document.getElementById('reader-form');
const editorForm = document.getElementById('editor-form');

readerBtn.addEventListener('click', () => {
  readerForm.style.display = 'block';
  editorForm.style.display = 'none';
});

editorBtn.addEventListener('click', () => {
  editorForm.style.display = 'block';
  readerForm.style.display = 'none';
});

document.getElementById('editor-login-btn').addEventListener('click', () => {
  const id = document.getElementById('editor-id').value;
  const pass = document.getElementById('editor-pass').value;
  if (id === 'BMW' && pass === 'BMW') {
    alert('✅ Welcome, Editor!');
    // window.location.href = 'page2.html';
  } else {
    alert('❌ Wrong password or ID');
  }
});

document.getElementById('reader-login-btn').addEventListener('click', () => {
  alert('✅ Welcome, Reader!');
  // window.location.href = 'page2.html';
});

const text = `In Bihar’s plains, the fertile soil lies deep, <br>
Cradling seeds where silent rivers weep.<br>
Loamy beds and clay embrace the grain,<br>
Harvests rise with every monsoon rain.`;

const typewriter = document.getElementById('typewriter');

let i = 0;
const speed = 30;

function type() {
  if (i < text.length) {
    if (text[i] === '<') {
      // Handle <br>
      const br = document.createElement('br');
      typewriter.appendChild(br);
      while (text[i] !== '>' && i < text.length) i++;
      i++; // skip '>'
    } else {
      const char = text[i] === ' ' ? '&nbsp;' : text[i];
      const span = document.createElement('span');
      span.innerHTML = char;
      span.classList.add('fade-char');
      typewriter.appendChild(span);
      i++;
    }
    setTimeout(type, speed);
  }
}

type();

