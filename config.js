/* ===== Mia 小遊戲 C-1.2.0-測試版 1：網站設定只要改這一個檔案（index、admin、倒數撕日曆共用） ===== */
window.MIA_PLAY_CONFIG = {
  PLAY_GAS_URL: 'https://script.google.com/macros/s/AKfycbyKo4Ac2EnY6PF6tdM0bGmJno5e95-sEUbpG8x4v8vKHNxJzLpixhb_gUDq8m5K9PgYSQ/exec',   // 互動網站自己的 Apps Script 網址（部署步驟第二步拿到的）
  LINE_LOGIN_CHANNEL_ID: '2012624805',   // 和網站 A、B 相同
  PLAY_URL: 'https://psnw0925-creator.github.io/mia-play/',   // 這個網站（Mia 小遊戲）的網址，最後要有 /
  MAIN_URL: 'https://psnw0925-creator.github.io/mia-booking/',   // 網站 A（Mia 預約）
  CARE_URL: 'https://psnw0925-creator.github.io/mia-care/',   // 網站 B（Mia 陪伴）
  LINE_OA_ID: '@923uxnos',   // 官方帳號 ID
  MAIN_ADMIN_URL: 'https://psnw0925-creator.github.io/mia-booking/admin.html',   // 預約後台
  CARE_ADMIN_URL: 'https://psnw0925-creator.github.io/mia-care/admin.html'   // 陪伴後台
};
