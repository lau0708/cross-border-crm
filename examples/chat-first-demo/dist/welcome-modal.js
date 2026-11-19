(function () {
  "use strict";
  if (!document || !document.body) { return; }

  var overlay = document.createElement("div");
  overlay.className = "demo-gate";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.innerHTML =
    '<div class="demo-gate-card">' +
      '<button class="demo-gate-close" type="button" aria-label="关闭">×</button>' +
      '<img class="demo-gate-avatar" src="welcome-avatar.png" alt="刘悦 Lau 头像" />' +
      '<span class="demo-gate-badge">只读演示 · 无需登录</span>' +
      '<h2 class="demo-gate-title">PiNative CRM 交互演示</h2>' +
      '<p class="demo-gate-sub">Agent 原生 CRM 工作台 · 全部为虚构数据</p>' +
      '<div class="demo-gate-divider"></div>' +
      '<div class="demo-gate-meta">刘悦 Lau 个人项目集 · <a href="https://lau0708.github.io/" target="_blank" rel="noopener">lau0708.github.io</a></div>' +
      '<div class="demo-gate-note">仅供展示与学习，无商业用途</div>' +
      '<p class="demo-gate-disclaimer">演示中所有客户、价格、日期与审批均为虚构；模型部分为脱敏的历史录制回放，页面不发起任何模型或第三方请求。</p>' +
      '<button class="demo-gate-enter" type="button">开始浏览</button>' +
    '</div>';
  document.body.appendChild(overlay);

  function close() {
    if (overlay && overlay.parentNode) { overlay.parentNode.removeChild(overlay); }
  }
  var enter = overlay.querySelector(".demo-gate-enter");
  var closeBtn = overlay.querySelector(".demo-gate-close");
  if (enter) { enter.addEventListener("click", close); }
  if (closeBtn) { closeBtn.addEventListener("click", close); }
  overlay.addEventListener("click", function (event) {
    if (event.target === overlay) { close(); }
  });
})();
