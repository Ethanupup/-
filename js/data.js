// 日期工具
const today = new Date();
const pad = n => String(n).padStart(2, '0');
const iso = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
function daysUntil(date) { return Math.ceil((new Date(date + 'T23:59:59') - new Date()) / 86400000); }
function escapeHtml(s) { return String(s || '').replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[m])); }

// 載入預設資料
let tasks = JSON.parse(localStorage.getItem('ethan_os_tasks') || 'null') || [];
let projects = JSON.parse(localStorage.getItem('ethan_os_projects') || 'null') || [];
let kpi = JSON.parse(localStorage.getItem('ethan_os_kpi') || 'null') || { target: '', revenue: '', orders: '', aov: '' };
const aiPrompts = [
  ['📝 社群文案', '家長痛點／情境貼文', '你是資深親子內容行銷企劃。請針對以下商品，以家長真實生活情境切入，寫出有畫面、好讀、不過度銷售的社群貼文。商品：'],
  ['📣 LINE 文案', '500字內活動推播', '你是會員行銷企劃。請將以下活動資訊整理成適合 LINE 官方帳號的推播文案，先抓家長痛點，再交代利益與行動誘因，控制在500字內。活動：'],
  ['🎯 活動企劃', '提升客單價／轉換', '你是親子電商活動企劃。請針對以下商品或活動，提出3個低複雜度、高轉換的玩法，並說明家長為什麼會想買。'],
  ['📊 行銷分析', '找出問題與下一步', '你是行銷數據分析師。請分析以下數據，找出最值得注意的3個問題，並提出下一步具體行動。數據：']
];

function saveAll() {
  localStorage.setItem('ethan_os_tasks', JSON.stringify(tasks));
  localStorage.setItem('ethan_os_projects', JSON.stringify(projects));
  localStorage.setItem('ethan_os_kpi', JSON.stringify(kpi));
}

// 業績資料庫
let salesData = JSON.parse(localStorage.getItem('ethan_sales_data') || 'null') || [];
function ensureSalesDataShape() {
  if (!Array.isArray(salesData)) salesData = [];
  salesData = salesData.map((r, i) => ({
    id: r.id || (Date.now() + i),
    period: r.period || `第${i + 1}期`,
    channel: r.channel || "未分類",
    revenue: Number(r.revenue) || 0,
    orders: Number(r.orders) || 0,
    aov: Number(r.orders) ? Math.round((Number(r.revenue) || 0) / Number(r.orders)) : 0,
    books: Number(r.books) || 0,
    top1: r.top1 || "",
    top2: r.top2 || "",
    top3: r.top3 || ""
  }));
}
function saveSalesStorage() { localStorage.setItem('ethan_sales_data', JSON.stringify(salesData)); }
ensureSalesDataShape();
