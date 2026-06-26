/* 憬春書院 - 共通スクリプト */
(function () {
  // スマホ用スライドメニュー
  var openBtn = document.getElementById('open');
  var closeBtn = document.getElementById('close');
  var overlay = document.querySelector('.overlay');

  if (openBtn && overlay) {
    openBtn.addEventListener('click', function () { overlay.classList.add('show'); });
  }
  if (closeBtn && overlay) {
    closeBtn.addEventListener('click', function () { overlay.classList.remove('show'); });
  }
  if (overlay) {
    overlay.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { overlay.classList.remove('show'); });
    });
  }

  // トップページ：スクロールでヘッダーを和紙色に切り替え
  var header = document.querySelector('header');
  if (header && document.body.classList.contains('home')) {
    var onScroll = function () {
      header.classList.toggle('scrolled', window.scrollY > window.innerHeight * 0.7);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ナビが入りきらないときはハンバーガーメニューに切替
  var pcMenu = document.querySelector('.pc-menu');
  var spMenu = document.querySelector('.sp-menu');

  function checkNavFit() {
    if (!pcMenu || !spMenu || !header) return;
    pcMenu.style.display = '';
    spMenu.style.display = '';
    if (getComputedStyle(pcMenu).display === 'none') return;
    var lis = pcMenu.querySelectorAll('nav ul li');
    if (!lis.length) return;
    var headerRight = header.getBoundingClientRect().right - 32;
    var lastRight = lis[lis.length - 1].getBoundingClientRect().right;
    if (lastRight > headerRight) {
      pcMenu.style.display = 'none';
      spMenu.style.display = 'block';
    }
  }

  checkNavFit();
  window.addEventListener('resize', checkNavFit);
})();
