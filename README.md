<!DOCTYPE html>
<html lang="zh-TW">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Ethan｜行銷企劃 OS</title>
<style>
:root{
  --bg:#f5f6f8;--card:#fff;--navy:#172554;--blue:#3157c8;--blue2:#eaf0ff;
  --yellow:#f5b942;--green:#159570;--green2:#e8f7f2;--red:#d94b4b;--red2:#fff0f0;
  --orange:#e67e22;--orange2:#fff5e9;--text:#202534;--muted:#70798b;--line:#e5e8ef;
  --shadow:0 4px 18px rgba(25,35,60,.07);--radius:14px;
}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--text);font-family:"Noto Sans TC","Microsoft JhengHei",Arial,sans-serif}
button,input,select,textarea{font:inherit}
button{cursor:pointer}
.topbar{background:linear-gradient(135deg,#172554,#263f91);color:#fff;padding:18px 28px;position:sticky;top:0;z-index:20;box-shadow:0 3px 15px rgba(0,0,0,.12)}
.topbar-inner{max-width:1500px;margin:auto;display:flex;align-items:center;justify-content:space-between;gap:20px}
.brand h1{margin:0;font-size:22px}.brand small{opacity:.75}
.tools{display:flex;gap:8px;flex-wrap:wrap;justify-content:flex-end}
.tools a{color:#fff;text-decoration:none;background:rgba(255,255,255,.12);padding:8px 12px;border-radius:9px;font-size:13px}
.tools a:hover{background:var(--yellow);color:var(--navy)}
.container{max-width:1500px;margin:auto;padding:22px}
.grid{display:grid;grid-template-columns:minmax(0,2fr) minmax(320px,1fr);gap:20px}
.card{background:var(--card);border:1px solid var(--line);border-radius:var(--radius);padding:20px;box-shadow:var(--shadow);margin-bottom:20px}
.section-title{display:flex;align-items:center;justify-content:space-between;margin-bottom:15px}
.section-title h2{font-size:18px;margin:0}.section-title span{font-size:12px;color:var(--muted)}
.btn{border:0;border-radius:8px;padding:8px 12px;background:var(--navy);color:#fff}.btn.secondary{background:#eef1f6;color:var(--text)}.btn.danger{background:var(--red)}
.metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.metric{padding:15px;border:1px solid var(--line);border-radius:11px;background:#fbfcfe}
.metric .label{font-size:12px;color:var(--muted)}.metric .value{font-size:24px;font-weight:800;margin:5px 0}.metric .hint{font-size:12px}
.good{color:var(--green)}.warn{color:var(--orange)}.bad{color:var(--red)}
.progress{height:7px;background:#edf0f5;border-radius:99px;overflow:hidden;margin-top:9px}.progress span{display:block;height:100%;background:var(--blue)}
.focus-list{display:grid;gap:10px}
.focus{display:flex;align-items:center;gap:12px;padding:12px;border:1px solid var(--line);border-radius:10px}
.priority{width:9px;height:42px;border-radius:6px;background:var(--blue)}.priority.red{background:var(--red)}.priority.orange{background:var(--orange)}.priority.green{background:var(--green)}
.focus-main{flex:1}.focus-main strong{display:block}.focus-main small{color:var(--muted)}
.badge{display:inline-block;padding:4px 7px;border-radius:7px;font-size:11px;font-weight:700;background:var(--blue2);color:var(--blue);margin-left:5px}.badge.red{background:var(--red2);color:var(--red)}.badge.orange{background:var(--orange2);color:var(--orange)}
.project-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.project{border:1px solid var(--line);border-radius:11px;padding:14px}.project-head{display:flex;justify-content:space-between;gap:10px}.project h3{font-size:15px;margin:0}.project p{font-size:12px;color:var(--muted);margin:7px 0}.project-footer{display:flex;justify-content:space-between;font-size:12px;margin-top:9px;color:var(--muted)}
.task-toolbar{display:flex;gap:8px;margin-bottom:12px}.task-toolbar input,.task-toolbar select,.modal input,.modal select,.modal textarea{border:1px solid var(--line);border-radius:8px;padding:9px;background:#fff}
.task-toolbar input{flex:1}
.task-list{display:grid;gap:8px}.task{display:grid;grid-template-columns:9px 1fr auto;gap:12px;align-items:center;padding:11px;border:1px solid var(--line);border-radius:10px}.task-bar{height:38px;border-radius:6px;background:var(--blue)}.task-bar.red{background:var(--red)}.task-bar.orange{background:var(--orange)}.task-title{font-weight:700;font-size:14px}.task-meta{font-size:12px;color:var(--muted);margin-top:4px}
.calendar{display:grid;grid-template-columns:repeat(7,1fr);gap:5px}.cal-head{text-align:center;color:var(--muted);font-size:11px;padding:5px}.cal-day{min-height:72px;border:1px solid var(--line);border-radius:8px;padding:7px;background:#fff;font-size:12px}.cal-day.today{border:2px solid var(--yellow);background:#fffaf0}.cal-day em{display:block;font-style:normal;margin-top:5px;font-size:10px;color:var(--blue);font-weight:700}
.ai-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:9px}.ai-btn{border:1px solid var(--line);background:#fafbfe;border-radius:10px;padding:12px;text-align:left}.ai-btn strong{display:block}.ai-btn small{color:var(--muted)}
.quick-notes{width:100%;min-height:180px;border:1px solid var(--line);border-radius:10px;padding:12px;resize:vertical;line-height:1.7}
.table-wrap{overflow:auto}.data-table{width:100%;border-collapse:collapse;font-size:13px}.data-table th,.data-table td{padding:10px;border-bottom:1px solid var(--line);text-align:left}.data-table th{color:var(--muted);font-weight:600}
.empty{text-align:center;color:var(--muted);padding:20px}.footer{text-align:center;color:var(--muted);font-size:12px;padding:10px 0 25px}
.modal-bg{display:none;position:fixed;inset:0;background:rgba(10,18,40,.45);z-index:50;align-items:center;justify-content:center;padding:20px}.modal{background:#fff;border-radius:14px;padding:20px;width:min(500px,100%);box-shadow:0 20px 60px rgba(0,0,0,.2)}.modal h3{margin-top:0}.form{display:grid;gap:10px}.form label{font-size:12px;color:var(--muted)}.form input,.form select,.form textarea{width:100%}.modal-actions{display:flex;justify-content:flex-end;gap:8px;margin-top:15px}
@media(max-width:1050px){.grid{grid-template-columns:1fr}.metrics{grid-template-columns:repeat(2,1fr)}}
@media(max-width:700px){.container{padding:12px}.metrics,.project-grid,.ai-grid{grid-template-columns:1fr}.topbar-inner{align-items:flex-start;flex-direction:column}.tools{justify-content:flex-start}.task{grid-template-columns:7px 1fr}.task .btn{grid-column:2}.calendar{gap:3px}.cal-day{min-height:55px}}

/* --- 分頁版工作區 --- */
.tabs{position:sticky;top:0;z-index:20;background:var(--bg);padding-top:8px;display:flex;gap:8px;overflow:auto;padding:0 0 14px;margin-bottom:4px}
.tab{border:1px solid var(--line);background:#fff;color:var(--muted);padding:10px 16px;border-radius:10px;font-weight:700;white-space:nowrap}
.tab.active{background:var(--navy);color:#fff;border-color:var(--navy)}
.page{display:none}.page.active{display:block}
.subgrid{display:grid;grid-template-columns:1.4fr 1fr;gap:20px}
.chart-box{min-height:320px;border:1px dashed var(--line);border-radius:12px;padding:16px;background:#fbfcfe}
.chart-title{font-weight:800;margin-bottom:10px}
.chart-svg{width:100%;height:260px;display:block}
.compare-table{width:100%;border-collapse:collapse;font-size:13px}
.compare-table th,.compare-table td{padding:10px;border-bottom:1px solid var(--line);text-align:right}
.compare-table th:first-child,.compare-table td:first-child{text-align:left}
.input-table{width:100%;border-collapse:collapse}
.input-table th,.input-table td{padding:8px;border-bottom:1px solid var(--line)}
.input-table input{width:100%;border:1px solid var(--line);border-radius:7px;padding:8px}
.small-note{font-size:12px;color:var(--muted);line-height:1.6}
.sales-kpis{display:grid;grid-template-columns:repeat(5,1fr);gap:10px}
.sales-kpi{padding:14px;border:1px solid var(--line);border-radius:11px;background:#fff}
.sales-kpi .label{font-size:11px;color:var(--muted)}.sales-kpi .value{font-size:21px;font-weight:800;margin-top:5px}
.rank-list{display:grid;gap:8px}.rank{display:flex;align-items:center;gap:10px;padding:10px;border:1px solid var(--line);border-radius:9px}
.rank-num{width:28px;height:28px;border-radius:50%;display:grid;place-items:center;background:var(--blue2);color:var(--blue);font-weight:800}
@media(max-width:1100px){.sales-kpis{grid-template-columns:repeat(3,1fr)}.subgrid{grid-template-columns:1fr}}
@media(max-width:700px){.sales-kpis{grid-template-columns:repeat(2,1fr)}}

/* ===== 業績擴充模組 ===== */
.sales-editor-grid{display:grid;grid-template-columns:1.2fr 1fr;gap:16px}
.sales-form-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}
.sales-form-grid label{font-size:12px;color:var(--muted)}
.sales-form-grid input,.sales-form-grid select{width:100%;margin-top:5px;border:1px solid var(--line);border-radius:8px;padding:9px;background:#fff}
.sales-form-grid .wide{grid-column:span 2}
.sales-action-row{display:flex;gap:8px;flex-wrap:wrap;justify-content:flex-end;margin-top:12px}
.sales-editor-table{width:100%;border-collapse:collapse;font-size:12px}
.sales-editor-table th,.sales-editor-table td{padding:8px;border-bottom:1px solid var(--line);white-space:nowrap}
.sales-editor-table th{color:var(--muted);font-weight:700;text-align:left}
.sales-editor-table td input{width:100%;min-width:85px;border:1px solid var(--line);border-radius:7px;padding:7px;background:#fff}
.sales-mini-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
.sales-mini{padding:12px;border:1px solid var(--line);border-radius:10px;background:#fbfcfe}
.sales-mini .label{font-size:11px;color:var(--muted)}.sales-mini .value{font-size:19px;font-weight:800;margin-top:4px}
.sales-filter-row{display:flex;gap:8px;flex-wrap:wrap}
.sales-filter-row select,.sales-filter-row input{border:1px solid var(--line);border-radius:8px;padding:9px;background:#fff}
.sales-filter-row input{flex:1;min-width:180px}
.sales-badge{display:inline-block;padding:4px 7px;border-radius:7px;font-size:11px;font-weight:700;background:var(--blue2);color:var(--blue)}
.sales-badge.green{background:var(--green2);color:var(--green)}
.sales-badge.orange{background:var(--orange2);color:var(--orange)}
.sales-help{font-size:12px;color:var(--muted);line-height:1.7}
@media(max-width:1050px){.sales-editor-grid{grid-template-columns:1fr}.sales-form-grid{grid-template-columns:repeat(2,1fr)}}
@media(max-width:700px){.sales-form-grid{grid-template-columns:1fr}.sales-form-grid .wide{grid-column:span 1}.sales-mini-grid{grid-template-columns:1fr}}

</style>
</head>
<body>

<header class="topbar">
  <div class="topbar-inner">
    <div class="brand">
      <h1>🚀 Ethan｜行銷企劃 OS</h1>
      <small>今天先知道該做什麼，再開始做。</small>
    </div>
    <nav class="tools">
      <a href="https://chat.openai.com/" target="_blank">💬 ChatGPT</a>
      <a href="https://gemini.google.com/" target="_blank">✨ Gemini</a>
      <a href="https://www.canva.com/" target="_blank">🎨 Canva</a>
      <a href="https://business.facebook.com/" target="_blank">📊 Meta</a>
      <a href="https://analytics.google.com/" target="_blank">📈 GA4</a>
    </nav>
  </div>
</header>

<main class="container">
  <div class="tabs">
    <button class="tab active" onclick="showPage('dashboard',this)">🏠 工作總覽</button>
    <button class="tab" onclick="showPage('projects',this)">🎯 專案管理</button>
    <button class="tab" onclick="showPage('kpiPage',this)">🎯 KPI 戰情</button>
    <button class="tab" onclick="showPage('sales',this)">📊 業績分析</button>
    <button class="tab" onclick="showPage('calendarPage',this)">📅 行銷行事曆</button>
    <button class="tab" onclick="showPage('aiPage',this)">🧠 AI 工作台</button>
    <button class="tab" onclick="showPage('notesPage',this)">📝 筆記</button>
  </div>

  <div id="dashboard" class="page active">
    <div class="grid">
      <section>
        <div class="card">
          <div class="section-title"><h2>🔥 今日戰情</h2><span id="todayText"></span></div>
          <div class="metrics">
            <div class="metric"><div class="label">今日待辦</div><div class="value" id="todayCount">0</div><div class="hint">尚未完成</div></div>
            <div class="metric"><div class="label">本週到期</div><div class="value" id="weekDue">0</div><div class="hint bad">請優先檢查</div></div>
            <div class="metric"><div class="label">進行中專案</div><div class="value" id="projectCount">0</div><div class="hint">目前戰場</div></div>
            <div class="metric"><div class="label">本月目標</div><div class="value" id="targetValue">—</div><div class="hint" id="targetHint">可自行設定</div></div>
          </div>
        </div>
        <div class="card">
          <div class="section-title"><h2>⚠️ 優先處理</h2><button class="btn" onclick="openTaskModal()">＋ 新增任務</button></div>
          <div id="priorityList" class="focus-list"></div>
        </div>
      </section>
      <aside>
        <div class="card"><div class="section-title"><h2>🧭 快速導航</h2><span>把工作分開，首頁只看戰情</span></div>
          <div class="ai-grid">
            <button class="ai-btn" onclick="showPage('projects',document.querySelectorAll('.tab')[1])"><strong>🎯 專案管理</strong><small>專案、任務、截止日</small></button>
            <button class="ai-btn" onclick="showPage('kpiPage',document.querySelectorAll('.tab')[2])"><strong>🎯 KPI 戰情</strong><small>目標與月度成效</small></button>
            <button class="ai-btn" onclick="showPage('sales',document.querySelectorAll('.tab')[3])"><strong>📊 業績分析</strong><small>營業額、訂單、客單價</small></button>
            <button class="ai-btn" onclick="showPage('calendarPage',document.querySelectorAll('.tab')[4])"><strong>📅 行銷行事曆</strong><small>所有活動與截止日</small></button>
          </div>
        </div>
        <div class="card"><div class="section-title"><h2>💡 今日原則</h2></div><div style="line-height:1.8;font-size:13px;color:var(--muted)"><p>① 首頁只處理「今天要做什麼」。</p><p>② 詳細任務到「專案管理」。</p><p>③ 數字到「KPI／業績分析」。</p><p>④ 活動日期全部到「行銷行事曆」。</p></div></div>
      </aside>
    </div>
  </div>

  <div id="projects" class="page">
    <div class="card">
      <div class="section-title"><h2>🎯 專案管理</h2><button class="btn" onclick="openProjectModal()">＋ 新增專案</button></div>
      <div id="projectGridPage" class="project-grid"></div>
    </div>
    <div class="card">
      <div class="section-title"><h2>📋 任務中心</h2><span>任務與截止日集中管理</span></div>
      <div class="task-toolbar">
        <input id="taskSearchPage" placeholder="搜尋任務..." oninput="renderTasksPage()">
        <select id="taskStatusPage" onchange="renderTasksPage()"><option value="all">全部狀態</option><option value="todo">待辦</option><option value="doing">進行中</option><option value="done">完成</option></select>
        <select id="taskPriorityPage" onchange="renderTasksPage()"><option value="all">全部優先級</option><option value="high">高</option><option value="medium">中</option><option value="low">低</option></select>
      </div>
      <div id="taskListPage" class="task-list"></div>
    </div>
  </div>

  <div id="kpiPage" class="page">
    <div class="card">
      <div class="section-title"><h2>🎯 KPI 戰情</h2><button class="btn secondary" onclick="openKpiModal()">編輯 KPI</button></div>
      <div class="metrics" id="kpiMetrics"></div>
    </div>
    <div class="card"><div class="section-title"><h2>📌 KPI 使用方式</h2><span>這裡只放月度目標與達成狀況</span></div><p class="small-note">營收、訂單數、客單價與目標差距集中在這裡；更細的週期業績、Top 商品與圖表請到「業績分析」。</p></div>
  </div>

  <div id="sales" class="page">
    
    <div class="card">
      <div class="section-title">
        <div>
          <h2>✏️ 業績編輯區</h2>
          <div class="sales-help">直接輸入資料，按「加入資料」後會同步到原本的業績報表。客單價會依「營業額 ÷ 訂單數」自動計算。</div>
        </div>
        <span class="sales-badge">新增功能，不影響原本報表</span>
      </div>

      <div class="sales-editor-grid">
        <div>
          <div class="sales-form-grid">
            <label>期間<input id="salesInputPeriod" placeholder="例如：2026/08 W4"></label>
            <label>通路<input id="salesInputChannel" placeholder="例如：官網／高雄展"></label>
            <label>營業額<input id="salesInputRevenue" type="number" min="0" placeholder="0"></label>
            <label>訂單數<input id="salesInputOrders" type="number" min="0" placeholder="0"></label>
            <label>總冊數<input id="salesInputBooks" type="number" min="0" placeholder="0"></label>
            <label>Top 1<input id="salesInputTop1" placeholder="商品名稱"></label>
            <label>Top 2<input id="salesInputTop2" placeholder="商品名稱"></label>
            <label>Top 3<input id="salesInputTop3" placeholder="商品名稱"></label>
          </div>
          <div class="sales-action-row">
            <button class="btn secondary" onclick="clearSalesInput()">清空</button>
            <button class="btn" onclick="addSalesFromForm()">＋ 加入資料</button>
          </div>
        </div>

        <div>
          <div class="sales-mini-grid">
            <div class="sales-mini"><div class="label">已輸入期間</div><div class="value" id="salesInputCount">0</div></div>
            <div class="sales-mini"><div class="label">資料營業額</div><div class="value" id="salesInputRevenueSum">$0</div></div>
            <div class="sales-mini"><div class="label">平均客單</div><div class="value" id="salesInputAovAvg">$0</div></div>
          </div>
          <div class="sales-help" style="margin-top:12px">
            期間可以填週、月、展期或活動名稱。通路也能自由命名；之後可用篩選器只看某個通路。
          </div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="section-title">
        <div>
          <h2>🧾 業績資料快速編輯</h2>
          <div class="sales-help">直接改表格，圖表與 KPI 會同步更新。</div>
        </div>
        <div class="sales-action-row" style="margin:0">
          <button class="btn secondary" onclick="addSalesRowEnhanced()">＋ 新增一列</button>
          <button class="btn secondary" onclick="exportSalesCSVEnhanced()">⬇ 匯出 CSV</button>
          <button class="btn" onclick="saveSalesEnhanced()">儲存資料</button>
        </div>
      </div>

      <div class="sales-filter-row" style="margin-bottom:12px">
        <input id="salesQuickSearch" placeholder="搜尋期間／通路／Top 商品..." oninput="renderEnhancedSalesEditor()">
        <select id="salesQuickChannel" onchange="renderEnhancedSalesEditor()"><option value="all">全部通路</option></select>
        <select id="salesQuickSort" onchange="renderEnhancedSalesEditor()">
          <option value="dateAsc">期間：舊 → 新</option>
          <option value="dateDesc">期間：新 → 舊</option>
          <option value="revenueDesc">營業額：高 → 低</option>
          <option value="revenueAsc">營業額：低 → 高</option>
        </select>
      </div>

      <div class="table-wrap">
        <table class="sales-editor-table">
          <thead>
            <tr>
              <th>期間</th><th>通路</th><th>營業額</th><th>訂單數</th><th>客單價</th><th>總冊數</th><th>Top 1</th><th>Top 2</th><th>Top 3</th><th>操作</th>
            </tr>
          </thead>
          <tbody id="enhancedSalesEditorRows"></tbody>
        </table>
      </div>
    </div>

<div class="card">
      <div class="section-title">
        <h2>📊 業績分析中心</h2>
        <div><button class="btn secondary" onclick="addSalesRow()">＋ 新增月份</button> <button class="btn" onclick="saveSales()">儲存數據</button></div>
      </div>
      <p class="small-note">可直接輸入每月／每週業績。系統會自動計算客單價，並用目前資料產生業績比較與品類占比圖。Top 1～3 請輸入本週實際熱賣品。</p>
      <div class="sales-kpis" id="salesKpis"></div>
    </div>

    <div class="subgrid">
      <div class="card">
        <div class="section-title"><h2>📈 業績比較</h2><span>營業額趨勢</span></div>
        <div class="chart-box"><div class="chart-title">各期間營業額</div><div id="salesLineChart"></div></div>
      </div>
      <div class="card">
        <div class="section-title"><h2>🥧 業績結構</h2><span>依目前輸入的品類資料</span></div>
        <div class="chart-box"><div class="chart-title">營業額占比</div><div id="salesPieChart"></div></div>
      </div>
    </div>

    <div class="card">
      <div class="section-title"><h2>🧾 業績資料輸入</h2><span>營業額／訂單數／客單價／總冊數／Top 3</span></div>
      <div class="table-wrap">
        <table class="input-table">
          <thead><tr><th>期間</th><th>營業額</th><th>訂單數</th><th>客單價</th><th>總冊數</th><th>本週 Top 1</th><th>本週 Top 2</th><th>本週 Top 3</th><th></th></tr></thead>
          <tbody id="salesRows"></tbody>
        </table>
      </div>
    </div>

    <div class="card">
      <div class="section-title"><h2>🏆 本週 Top 3</h2><span>依最新一筆資料顯示</span></div>
      <div id="top3List" class="rank-list"></div>
    </div>
  </div>

  <div id="calendarPage" class="page">
    <div class="card">
      <div class="section-title"><h2>📅 行銷行事曆</h2><button class="btn" onclick="openTaskModal()">＋ 新增行程</button></div>
      <p class="small-note">行銷活動、展覽、LINE、上架、素材截止日全部集中在這裡。點擊日期即可快速新增任務。</p>
      <div id="calendar" class="calendar"></div>
    </div>
  </div>

  <div id="aiPage" class="page">
    <div class="card"><div class="section-title"><h2>🧠 AI 工作台</h2><span>一鍵複製常用 Prompt</span></div><div class="ai-grid" id="aiGrid"></div></div>
    <div class="card"><div class="section-title"><h2>🔗 工作入口</h2></div><div class="ai-grid">
      <a class="ai-btn" href="https://docs.google.com/spreadsheets/" target="_blank"><strong>📊 Google Sheets</strong><small>數據／排程／報表</small></a>
      <a class="ai-btn" href="https://www.notion.so/" target="_blank"><strong>🗂 Notion</strong><small>企劃／資料庫</small></a>
      <a class="ai-btn" href="https://drive.google.com/" target="_blank"><strong>☁️ Google Drive</strong><small>素材／檔案</small></a>
      <a class="ai-btn" href="https://business.facebook.com/" target="_blank"><strong>📣 Meta Business</strong><small>廣告／粉專</small></a>
    </div></div>
  </div>

  <div id="notesPage" class="page">
    <div class="card">
      <div class="section-title"><h2>📝 快速筆記</h2><button class="btn secondary" onclick="clearNotes()">清空</button></div>
      <textarea id="notesPageBox" class="quick-notes" placeholder="活動靈感、文案、書單、展場玩法，全部先丟進來。"></textarea>
    </div>
  </div>

  <div class="footer">資料儲存在此瀏覽器；之後若要跨裝置使用，可再接 Google Sheets / Supabase。</div>
</main>

<div class="modal-bg" id="taskModal">
  <div class="modal">
    <h3>新增任務</h3>
    <div class="form">
      <label>任務名稱<input id="fTaskTitle" placeholder="例如：9月會員活動 LINE 預熱文案"></label>
      <label>專案<input id="fTaskProject" placeholder="例如：9月會員活動"></label>
      <label>截止日期<input id="fTaskDate" type="date"></label>
      <label>狀態<select id="fTaskStatus"><option value="todo">待辦</option><option value="doing">進行中</option><option value="done">完成</option></select></label>
      <label>優先級<select id="fTaskPriority"><option value="high">高</option><option value="medium" selected>中</option><option value="low">低</option></select></label>
    </div>
    <div class="modal-actions"><button class="btn secondary" onclick="closeModal('taskModal')">取消</button><button class="btn" onclick="saveTask()">儲存</button></div>
  </div>
</div>

<div class="modal-bg" id="projectModal">
  <div class="modal">
    <h3>新增專案</h3>
    <div class="form">
      <label>專案名稱<input id="fProjectName" placeholder="例如：9月開學嚴選"></label>
      <label>截止日期<input id="fProjectDate" type="date"></label>
      <label>進度（0–100）<input id="fProjectProgress" type="number" min="0" max="100" value="0"></label>
    </div>
    <div class="modal-actions"><button class="btn secondary" onclick="closeModal('projectModal')">取消</button><button class="btn" onclick="saveProject()">儲存</button></div>
  </div>
</div>

<div class="modal-bg" id="kpiModal">
  <div class="modal">
    <h3>編輯 KPI</h3>
    <div class="form">
      <label>本月目標<input id="fTarget" placeholder="例如：200000"></label>
      <label>營收<input id="fRevenue" placeholder="例如：128000"></label>
      <label>訂單數<input id="fOrders" placeholder="例如：96"></label>
      <label>客單價<input id="fAov" placeholder="例如：1333"></label>
    </div>
    <div class="modal-actions"><button class="btn secondary" onclick="closeModal('kpiModal')">取消</button><button class="btn" onclick="saveKpi()">儲存</button></div>
  </div>
</div>

<script>

/* ===== 業績擴充功能：保留原 salesData，增加可編輯控制台 ===== */
function ensureSalesDataShape(){
  if(typeof salesData==="undefined") return;
  salesData = salesData.map((r,i)=>({
    id:r.id || (Date.now()+i),
    period:r.period || `第${i+1}期`,
    channel:r.channel || "未分類",
    revenue:Number(r.revenue)||0,
    orders:Number(r.orders)||0,
    aov:Number(r.orders)?Math.round((Number(r.revenue)||0)/Number(r.orders)):0,
    books:Number(r.books)||0,
    top1:r.top1||"",
    top2:r.top2||"",
    top3:r.top3||""
  }));
}
function saveSalesStorage(){ localStorage.setItem('ethan_sales_data',JSON.stringify(salesData)); }
function updateSalesExtensionSummary(){
  if(typeof salesData==="undefined") return;
  const rev=salesData.reduce((s,r)=>s+Number(r.revenue||0),0);
  const orders=salesData.reduce((s,r)=>s+Number(r.orders||0),0);
  const c=document.getElementById('salesInputCount');
  const r=document.getElementById('salesInputRevenueSum');
  const a=document.getElementById('salesInputAovAvg');
  if(c)c.textContent=salesData.length;
  if(r)r.textContent='$'+rev.toLocaleString();
  if(a)a.textContent='$'+(orders?Math.round(rev/orders):0).toLocaleString();
}
function clearSalesInput(){
  ['salesInputPeriod','salesInputChannel','salesInputRevenue','salesInputOrders','salesInputBooks','salesInputTop1','salesInputTop2','salesInputTop3']
    .forEach(id=>{const e=document.getElementById(id);if(e)e.value='';});
}
function addSalesFromForm(){
  if(typeof salesData==="undefined") return;
  const period=(document.getElementById('salesInputPeriod')?.value||'').trim();
  if(!period){alert('請先輸入期間');return;}
  const revenue=Number(document.getElementById('salesInputRevenue')?.value)||0;
  const orders=Number(document.getElementById('salesInputOrders')?.value)||0;
  salesData.push({
    id:Date.now(),
    period,
    channel:(document.getElementById('salesInputChannel')?.value||'未分類').trim()||'未分類',
    revenue,orders,aov:orders?Math.round(revenue/orders):0,
    books:Number(document.getElementById('salesInputBooks')?.value)||0,
    top1:(document.getElementById('salesInputTop1')?.value||'').trim(),
    top2:(document.getElementById('salesInputTop2')?.value||'').trim(),
    top3:(document.getElementById('salesInputTop3')?.value||'').trim()
  });
  saveSalesStorage();
  clearSalesInput();
  renderEnhancedSalesEditor();
  updateSalesExtensionSummary();
  if(typeof renderSales==="function")renderSales();
}
function addSalesRowEnhanced(){
  if(typeof salesData==="undefined")return;
  salesData.push({id:Date.now(),period:'新期間',channel:'未分類',revenue:0,orders:0,aov:0,books:0,top1:'',top2:'',top3:''});
  saveSalesStorage();renderEnhancedSalesEditor();updateSalesExtensionSummary();
  if(typeof renderSales==="function")renderSales();
}
function deleteSalesEnhanced(id){
  if(!confirm('確定刪除這筆業績資料？'))return;
  salesData=salesData.filter(r=>r.id!==id);
  saveSalesStorage();renderEnhancedSalesEditor();updateSalesExtensionSummary();
  if(typeof renderSales==="function")renderSales();
}
function updateSalesEnhanced(id,key,value){
  const r=salesData.find(x=>x.id===id); if(!r)return;
  if(['period','channel','top1','top2','top3'].includes(key)) r[key]=value;
  else r[key]=Number(value)||0;
  if(key==='revenue'||key==='orders') r.aov=r.orders?Math.round(r.revenue/r.orders):0;
  saveSalesStorage();renderEnhancedSalesEditor();updateSalesExtensionSummary();
  if(typeof renderSales==="function")renderSales();
}
function refreshEnhancedChannel(){
  const s=document.getElementById('salesQuickChannel'); if(!s)return;
  const current=s.value||'all';
  const channels=[...new Set(salesData.map(r=>r.channel||'未分類'))];
  s.innerHTML='<option value="all">全部通路</option>'+channels.map(c=>`<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join('');
  if(channels.includes(current))s.value=current;
}
function renderEnhancedSalesEditor(){
  if(typeof salesData==="undefined")return;
  ensureSalesDataShape();
  refreshEnhancedChannel();
  const q=(document.getElementById('salesQuickSearch')?.value||'').toLowerCase().trim();
  const channel=document.getElementById('salesQuickChannel')?.value||'all';
  const sort=document.getElementById('salesQuickSort')?.value||'dateAsc';
  let rows=salesData.filter(r=>{
    const hay=`${r.period} ${r.channel} ${r.top1} ${r.top2} ${r.top3}`.toLowerCase();
    return hay.includes(q)&&(channel==='all'||(r.channel||'未分類')===channel);
  });
  rows.sort((a,b)=>{
    if(sort==='revenueDesc')return Number(b.revenue)-Number(a.revenue);
    if(sort==='revenueAsc')return Number(a.revenue)-Number(b.revenue);
    if(sort==='dateDesc')return String(b.period).localeCompare(String(a.period));
    return String(a.period).localeCompare(String(b.period));
  });
  const tbody=document.getElementById('enhancedSalesEditorRows'); if(!tbody)return;
  tbody.innerHTML=rows.length?rows.map(r=>`
    <tr>
      <td><input value="${escapeHtml(r.period)}" onchange="updateSalesEnhanced(${r.id},'period',this.value)"></td>
      <td><input value="${escapeHtml(r.channel)}" onchange="updateSalesEnhanced(${r.id},'channel',this.value)"></td>
      <td><input type="number" min="0" value="${r.revenue}" onchange="updateSalesEnhanced(${r.id},'revenue',this.value)"></td>
      <td><input type="number" min="0" value="${r.orders}" onchange="updateSalesEnhanced(${r.id},'orders',this.value)"></td>
      <td><input value="${r.aov}" readonly></td>
      <td><input type="number" min="0" value="${r.books}" onchange="updateSalesEnhanced(${r.id},'books',this.value)"></td>
      <td><input value="${escapeHtml(r.top1)}" onchange="updateSalesEnhanced(${r.id},'top1',this.value)"></td>
      <td><input value="${escapeHtml(r.top2)}" onchange="updateSalesEnhanced(${r.id},'top2',this.value)"></td>
      <td><input value="${escapeHtml(r.top3)}" onchange="updateSalesEnhanced(${r.id},'top3',this.value)"></td>
      <td><button class="btn danger" onclick="deleteSalesEnhanced(${r.id})">刪除</button></td>
    </tr>`).join(''):'<tr><td colspan="10" class="empty">沒有符合條件的資料。</td></tr>';
  updateSalesExtensionSummary();
}
function saveSalesEnhanced(){
  ensureSalesDataShape();saveSalesStorage();
  if(typeof renderSales==="function")renderSales();
  alert('業績資料已儲存。');
}
function exportSalesCSVEnhanced(){
  ensureSalesDataShape();
  const rows=[['期間','通路','營業額','訂單數','客單價','總冊數','Top 1','Top 2','Top 3'],
    ...salesData.map(r=>[r.period,r.channel,r.revenue,r.orders,r.aov,r.books,r.top1,r.top2,r.top3])];
  const csv=rows.map(row=>row.map(v=>`"${String(v??'').replace(/"/g,'""')}"`).join(',')).join('\n');
  const blob=new Blob(["\ufeff"+csv],{type:'text/csv;charset=utf-8;'});
  const url=URL.createObjectURL(blob),a=document.createElement('a');
  a.href=url;a.download='Ethan_業績資料.csv';document.body.appendChild(a);a.click();a.remove();URL.revokeObjectURL(url);
}

const today=new Date();
const pad=n=>String(n).padStart(2,'0');
const iso=d=>`${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
const fmt=d=>`${d.getMonth()+1}/${d.getDate()}`;

let tasks=JSON.parse(localStorage.getItem('ethan_os_tasks')||'null')||[
 {id:1,title:'9月儲值會員活動主視覺',project:'9月會員活動',date:'2026-08-20',status:'doing',priority:'high'},
 {id:2,title:'高雄兒少展 LINE 預熱文案',project:'高雄兒少展',date:'2026-08-25',status:'todo',priority:'high'},
 {id:3,title:'整理禾流新品社群素材',project:'新品宣傳',date:'2026-08-22',status:'todo',priority:'medium'},
 {id:4,title:'確認 9 月五折書名單',project:'9月會員活動',date:'2026-08-28',status:'todo',priority:'medium'},
 {id:5,title:'完成本週社群貼文',project:'社群',date:'2026-08-17',status:'doing',priority:'high'}
];
let projects=JSON.parse(localStorage.getItem('ethan_os_projects')||'null')||[
 {id:1,name:'9月會員活動',date:'2026-08-31',progress:55},
 {id:2,name:'高雄兒少展',date:'2026-09-23',progress:25},
 {id:3,name:'台北婦幼展',date:'2026-10-01',progress:10},
 {id:4,name:'禾流新品宣傳',date:'2026-09-15',progress:40}
];
let kpi=JSON.parse(localStorage.getItem('ethan_os_kpi')||'null')||{target:'',revenue:'',orders:'',aov:''};

const aiPrompts=[
 ['📝 社群文案','家長痛點／情境貼文','你是資深親子內容行銷企劃。請針對以下商品，以家長真實生活情境切入，寫出有畫面、好讀、不過度銷售的社群貼文。商品：'],
 ['📣 LINE 文案','500字內活動推播','你是會員行銷企劃。請將以下活動資訊整理成適合 LINE 官方帳號的推播文案，先抓家長痛點，再交代利益與行動誘因，控制在500字內。活動：'],
 ['🎯 活動企劃','提升客單價／轉換','你是親子電商活動企劃。請針對以下商品或活動，提出3個低複雜度、高轉換的玩法，並說明家長為什麼會想買。'],
 ['📚 書單包裝','從需求不是書名出發','你是童書行銷企劃。請把以下書籍重新包裝成「家長需求導向」的書單主題，不要只是列書名，請提出主標、痛點與購買情境。'],
 ['🎪 展場活動','人多也能快速玩','你是大型婦幼／兒少展活動企劃。請設計不需要長時間理解、不容易排隊卡住、能快速完成並帶動購買的現場玩法。商品／主題：'],
 ['📊 行銷分析','找出問題與下一步','你是行銷數據分析師。請分析以下數據，找出最值得注意的3個問題，並提出下一步具體行動。數據：']
];

function saveAll(){
 localStorage.setItem('ethan_os_tasks',JSON.stringify(tasks));
 localStorage.setItem('ethan_os_projects',JSON.stringify(projects));
 localStorage.setItem('ethan_os_kpi',JSON.stringify(kpi));
}
function openModal(id){document.getElementById(id).style.display='flex'}
function closeModal(id){document.getElementById(id).style.display='none'}
function openTaskModal(){document.getElementById('fTaskDate').value=iso(new Date(Date.now()+3*86400000));openModal('taskModal')}
function openProjectModal(){document.getElementById('fProjectDate').value=iso(new Date(Date.now()+30*86400000));openModal('projectModal')}
function openKpiModal(){
 fTarget.value=kpi.target;fRevenue.value=kpi.revenue;fOrders.value=kpi.orders;fAov.value=kpi.aov;openModal('kpiModal')
}
function saveTask(){
 const title=fTaskTitle.value.trim();if(!title)return alert('請輸入任務名稱');
 tasks.push({id:Date.now(),title,project:fTaskProject.value.trim()||'未分類',date:fTaskDate.value,status:fTaskStatus.value,priority:fTaskPriority.value});
 saveAll();closeModal('taskModal');
 fTaskTitle.value='';fTaskProject.value='';
}
function saveProject(){
 const name=fProjectName.value.trim();if(!name)return alert('請輸入專案名稱');
 projects.push({id:Date.now(),name,date:fProjectDate.value,progress:Math.max(0,Math.min(100,Number(fProjectProgress.value)||0))});
 saveAll();closeModal('projectModal');renderAll();fProjectName.value='';
}
function saveKpi(){
 kpi={target:fTarget.value,revenue:fRevenue.value,orders:fOrders.value,aov:fAov.value};
 saveAll();closeModal('kpiModal');renderAll();
}
function priorityLabel(p){return p==='high'?'高':p==='medium'?'中':'低'}
function statusLabel(s){return s==='todo'?'待辦':s==='doing'?'進行中':'完成'}
function daysUntil(date){return Math.ceil((new Date(date+'T23:59:59')-new Date())/86400000)}
function renderTop(){
 const unfinished=tasks.filter(t=>t.status!=='done');
 const due=unfinished.filter(t=>daysUntil(t.date)<=7).length;
 todayCount.textContent=unfinished.length;weekDue.textContent=due;projectCount.textContent=projects.length;
 targetValue.textContent=kpi.target?Number(kpi.target).toLocaleString():'—';
 targetHint.textContent=kpi.target&&kpi.revenue?`目前 ${Math.round(Number(kpi.revenue)/Number(kpi.target)*100)}%`:'可自行設定';
 todayText.textContent=`${today.getFullYear()}/${today.getMonth()+1}/${today.getDate()}（${['日','一','二','三','四','五','六'][today.getDay()]}）`;
}
function renderPriority(){
 const list=document.getElementById('priorityList');
 let arr=tasks.filter(t=>t.status!=='done').sort((a,b)=>{
  const p={high:0,medium:1,low:2};return p[a.priority]-p[b.priority]||a.date.localeCompare(b.date)
 }).slice(0,6);
 list.innerHTML=arr.length?arr.map(t=>{
   const d=daysUntil(t.date);const cls=t.priority==='high'?'red':t.priority==='medium'?'orange':'green';
   const due=d<0?`逾期 ${Math.abs(d)} 天`:d===0?'今天到期':`還有 ${d} 天`;
   return `<div class="focus"><div class="priority ${cls}"></div><div class="focus-main"><strong>${escapeHtml(t.title)} <span class="badge ${t.priority==='high'?'red':t.priority==='medium'?'orange':''}">${priorityLabel(t.priority)}</span></strong><small>${escapeHtml(t.project)}｜${t.date}｜${due}</small></div><button class="btn secondary" onclick="finishTask(${t.id})">完成</button></div>`
 }).join(''):'<div class="empty">目前沒有待處理事項 🎉</div>';
}
function renderProjects(){
 projectGrid.innerHTML=projects.map(p=>`<div class="project">
 <div class="project-head"><h3>${escapeHtml(p.name)}</h3><button class="btn secondary" onclick="deleteProject(${p.id})">刪除</button></div>
 <p>截止：${p.date}｜${daysUntil(p.date)>=0?'剩 '+daysUntil(p.date)+' 天':'已逾期'}</p>
 <div class="progress"><span style="width:${p.progress}%"></span></div>
 <div class="project-footer"><span>進度 ${p.progress}%</span><span>${tasks.filter(t=>t.project===p.name&&t.status!=='done').length} 個未完成</span></div>
 </div>`).join('');
}
function renderTasks(){
 const q=taskSearch.value.toLowerCase();const s=taskStatus.value,p=taskPriority.value;
 let arr=tasks.filter(t=>(s==='all'||t.status===s)&&(p==='all'||t.priority===p)&&(`${t.title} ${t.project}`.toLowerCase().includes(q)));
 arr.sort((a,b)=>a.date.localeCompare(b.date));
 taskList.innerHTML=arr.length?arr.map(t=>{
  const c=t.priority==='high'?'red':t.priority==='medium'?'orange':'';
  return `<div class="task"><div class="task-bar ${c}"></div><div><div class="task-title">${escapeHtml(t.title)}</div><div class="task-meta">${escapeHtml(t.project)}｜截止 ${t.date}｜${statusLabel(t.status)}｜${priorityLabel(t.priority)}優先</div></div><button class="btn secondary" onclick="cycleStatus(${t.id})">${t.status==='done'?'恢復待辦':'移動狀態'}</button></div>`
 }).join(''):'<div class="empty">沒有符合條件的任務。</div>';
}
function cycleStatus(id){
 const t=tasks.find(x=>x.id===id);if(!t)return;
 t.status=t.status==='todo'?'doing':t.status==='doing'?'done':'todo';saveAll();renderAll();
}
function finishTask(id){const t=tasks.find(x=>x.id===id);if(t)t.status='done';saveAll();renderAll()}
function deleteProject(id){if(confirm('確定刪除這個專案？')){projects=projects.filter(p=>p.id!==id);saveAll();renderAll()}}
function renderKpi(){
 const target=Number(kpi.target)||0,revenue=Number(kpi.revenue)||0;
 const pct=target?Math.min(100,Math.round(revenue/target*100)):0;
 kpiMetrics.innerHTML=[
  ['營收',revenue?`$${revenue.toLocaleString()}`:'—',target?`目標 $${target.toLocaleString()}｜${pct}%`:'尚未設定'],
  ['訂單數',kpi.orders||'—','本月累計'],
  ['客單價',kpi.aov?`$${Number(kpi.aov).toLocaleString()}`:'—','可與上月比較'],
  ['目標差距',target?`$${Math.max(0,target-revenue).toLocaleString()}`:'—',target?(revenue>=target?'已達標 🎉':'距離目標'):'尚未設定']
 ].map(x=>`<div class="metric"><div class="label">${x[0]}</div><div class="value">${x[1]}</div><div class="hint">${x[2]}</div></div>`).join('');
}
function renderAI(){
 aiGrid.innerHTML=aiPrompts.map((x,i)=>`<button class="ai-btn" onclick="copyPrompt(${i})"><strong>${x[0]}</strong><small>${x[1]}</small></button>`).join('');
}
async function copyPrompt(i){
 try{await navigator.clipboard.writeText(aiPrompts[i][2]);alert('Prompt 已複製，可以直接貼到 ChatGPT。')}
 catch(e){prompt('請複製以下 Prompt：',aiPrompts[i][2])}
}
function renderCalendar(){
 const el=document.getElementById('calendar');el.innerHTML='';
 const y=today.getFullYear(),m=today.getMonth(),first=new Date(y,m,1).getDay(),days=new Date(y,m+1,0).getDate();
 ['日','一','二','三','四','五','六'].forEach(d=>{el.innerHTML+=`<div class="cal-head">${d}</div>`});
 for(let i=0;i<first;i++)el.innerHTML+='<div></div>';
 for(let d=1;d<=days;d++){
   const date=`${y}-${pad(m+1)}-${pad(d)}`;const ts=tasks.filter(t=>t.date===date&&t.status!=='done');
   el.innerHTML+=`<div class="cal-day ${d===today.getDate()?'today':''}" onclick="addDateTask('${date}')"><strong>${d}</strong>${ts.slice(0,2).map(t=>`<em>• ${escapeHtml(t.title.slice(0,10))}</em>`).join('')}</div>`;
 }
}
function addDateTask(date){
 fTaskDate.value=date;openModal('taskModal');
}
function clearNotes(){if(confirm('確定清空快速筆記？')){notes.value='';localStorage.removeItem('ethan_os_notes')}}
function escapeHtml(s){return String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]))}
notes.value=localStorage.getItem('ethan_os_notes')||'';
notes.addEventListener('input',()=>localStorage.setItem('ethan_os_notes',notes.value));
let salesData=JSON.parse(localStorage.getItem('ethan_sales_data')||'null')||[
 {period:'2026/08 W1',revenue:0,orders:0,aov:0,books:0,top1:'',top2:'',top3:''},
 {period:'2026/08 W2',revenue:0,orders:0,aov:0,books:0,top1:'',top2:'',top3:''},
 {period:'2026/08 W3',revenue:0,orders:0,aov:0,books:0,top1:'',top2:'',top3:''}
];
ensureSalesDataShape();

function showPage(id,btn){
 document.querySelectorAll('.page').forEach(x=>x.classList.remove('active'));
 document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));
 document.getElementById(id).classList.add('active');btn.classList.add('active');
 if(id==='sales'){renderSales();renderEnhancedSalesEditor();updateSalesExtensionSummary();}
 if(id==='calendarPage')renderCalendar();
 if(id==='aiPage')renderAI();
 if(id==='kpiPage')renderKpi();
 if(id==='projects'){renderProjectsPage();renderTasksPage()}
}
function renderProjectsPage(){
 projectGridPage.innerHTML=projects.map(p=>`<div class="project">
 <div class="project-head"><h3>${escapeHtml(p.name)}</h3><button class="btn secondary" onclick="deleteProject(${p.id});renderProjectsPage()">刪除</button></div>
 <p>截止：${p.date}｜${daysUntil(p.date)>=0?'剩 '+daysUntil(p.date)+' 天':'已逾期'}</p>
 <div class="progress"><span style="width:${p.progress}%"></span></div>
 <div class="project-footer"><span>進度 ${p.progress}%</span><span>${tasks.filter(t=>t.project===p.name&&t.status!=='done').length} 個未完成</span></div>
 </div>`).join('');
}
function renderTasksPage(){
 const q=(taskSearchPage.value||'').toLowerCase(),s=taskStatusPage.value,p=taskPriorityPage.value;
 let arr=tasks.filter(t=>(s==='all'||t.status===s)&&(p==='all'||t.priority===p)&&(`${t.title} ${t.project}`.toLowerCase().includes(q))).sort((a,b)=>a.date.localeCompare(b.date));
 taskListPage.innerHTML=arr.length?arr.map(t=>`<div class="task"><div class="task-bar ${t.priority==='high'?'red':t.priority==='medium'?'orange':''}"></div><div><div class="task-title">${escapeHtml(t.title)}</div><div class="task-meta">${escapeHtml(t.project)}｜截止 ${t.date}｜${statusLabel(t.status)}｜${priorityLabel(t.priority)}優先</div></div><button class="btn secondary" onclick="cycleStatus(${t.id});renderTasksPage()">狀態</button></div>`).join(''):'<div class="empty">沒有符合條件的任務。</div>';
}
function addSalesRow(){
 salesData.push({period:'新期間',revenue:0,orders:0,aov:0,books:0,top1:'',top2:'',top3:''});renderSalesRows();
}
function removeSalesRow(i){salesData.splice(i,1);renderSales();saveSales()}
function updateSales(i,key,val){salesData[i][key]=key==='period'||key.startsWith('top')?val:Number(val)||0;if(key==='revenue'||key==='orders')salesData[i].aov=salesData[i].orders?Math.round(salesData[i].revenue/salesData[i].orders):0;renderSales()}
function renderSalesRows(){
 salesRows.innerHTML=salesData.map((r,i)=>`<tr>
 <td><input value="${escapeHtml(r.period)}" onchange="updateSales(${i},'period',this.value)"></td>
 <td><input type="number" value="${r.revenue}" onchange="updateSales(${i},'revenue',this.value)"></td>
 <td><input type="number" value="${r.orders}" onchange="updateSales(${i},'orders',this.value)"></td>
 <td><input value="${r.aov}" readonly></td>
 <td><input type="number" value="${r.books}" onchange="updateSales(${i},'books',this.value)"></td>
 <td><input value="${escapeHtml(r.top1)}" onchange="updateSales(${i},'top1',this.value)"></td>
 <td><input value="${escapeHtml(r.top2)}" onchange="updateSales(${i},'top2',this.value)"></td>
 <td><input value="${escapeHtml(r.top3)}" onchange="updateSales(${i},'top3',this.value)"></td>
 <td><button class="btn danger" onclick="removeSalesRow(${i})">刪</button></td>
 </tr>`).join('');
}
function saveSales(){localStorage.setItem('ethan_sales_data',JSON.stringify(salesData));alert('業績資料已儲存。')}
function renderSales(){
 renderSalesRows();
 const valid=salesData.filter(x=>x.revenue>0||x.orders>0||x.books>0),latest=salesData[salesData.length-1]||{};
 const totalRev=valid.reduce((a,b)=>a+b.revenue,0),totalOrders=valid.reduce((a,b)=>a+b.orders,0),totalBooks=valid.reduce((a,b)=>a+b.books,0);
 salesKpis.innerHTML=[
 ['營業額',`$${totalRev.toLocaleString()}`,'目前資料合計'],
 ['訂單數',totalOrders.toLocaleString(),'目前資料合計'],
 ['客單價',`$${totalOrders?Math.round(totalRev/totalOrders).toLocaleString():'0'}`,'營業額 ÷ 訂單數'],
 ['總冊數',totalBooks.toLocaleString(),'目前資料合計'],
 ['最新期間',latest.period||'—',latest.revenue?`$${latest.revenue.toLocaleString()}`:'尚未輸入']
 ].map(x=>`<div class="sales-kpi"><div class="label">${x[0]}</div><div class="value">${x[1]}</div><div class="small-note">${x[2]}</div></div>`).join('');
 renderSalesLine(valid);renderSalesPie(valid);renderTop3(latest);
}
function renderSalesLine(data){
 if(!data.length){salesLineChart.innerHTML='<div class="empty">先輸入業績資料，就會出現比較圖。</div>';return}
 const max=Math.max(...data.map(x=>x.revenue),1),w=650,h=230,pad=35;
 const pts=data.map((x,i)=>{const px=pad+(data.length===1?0:i*(w-2*pad)/(data.length-1));const py=h-pad-(x.revenue/max)*(h-2*pad);return [px,py,x]});
 const poly=pts.map(x=>`${x[0]},${x[1]}`).join(' ');
 salesLineChart.innerHTML=`<svg class="chart-svg" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none"><line x1="${pad}" y1="${h-pad}" x2="${w-pad}" y2="${h-pad}" stroke="#dfe3ea"/><polyline fill="none" stroke="#3157c8" stroke-width="4" points="${poly}"/>${pts.map(x=>`<circle cx="${x[0]}" cy="${x[1]}" r="5" fill="#3157c8"/><text x="${x[0]}" y="${h-8}" text-anchor="middle" font-size="10" fill="#70798b">${escapeHtml(x[2].period)}</text><text x="${x[0]}" y="${x[1]-10}" text-anchor="middle" font-size="10" fill="#202534">$${Number(x[2].revenue).toLocaleString()}</text>`).join('')}</svg>`;
}
function renderSalesPie(data){
 const total=data.reduce((a,b)=>a+b.revenue,0);
 if(!total){salesPieChart.innerHTML='<div class="empty">目前沒有營業額資料。</div>';return}
 /* 用期間作為結構分布；真正品類資料可在後續再接一個「品類」欄位。 */
 let start=0,cx=120,cy=120,r=90;
 const colors=['#3157c8','#f5b942','#159570','#d94b4b','#8b5cf6','#e67e22'];
 const arc=(a1,a2)=>{const x1=cx+r*Math.cos(a1),y1=cy+r*Math.sin(a1),x2=cx+r*Math.cos(a2),y2=cy+r*Math.sin(a2),large=a2-a1>Math.PI?1:0;return `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2} Z`};
 let svg=`<svg class="chart-svg" viewBox="0 0 420 250"><g transform="translate(0,5)">`;
 data.forEach((x,i)=>{const angle=x.revenue/total*Math.PI*2;svg+=`<path d="${arc(start,start+angle)}" fill="${colors[i%colors.length]}"></path>`;start+=angle});
 svg+='</g><g transform="translate(235,35)">';
 data.forEach((x,i)=>{const y=i*30;svg+=`<rect x="0" y="${y}" width="12" height="12" rx="3" fill="${colors[i%colors.length]}"/><text x="20" y="${y+11}" font-size="11" fill="#202534">${escapeHtml(x.period)} ${Math.round(x.revenue/total*100)}%</text>`});
 svg+='</g></svg>';salesPieChart.innerHTML=svg;
}
function renderTop3(latest){
 const arr=[latest.top1,latest.top2,latest.top3].filter(Boolean);
 top3List.innerHTML=arr.length?arr.map((x,i)=>`<div class="rank"><div class="rank-num">${i+1}</div><strong>${escapeHtml(x)}</strong></div>`).join(''):'<div class="empty">請在最新一筆業績資料輸入本週 Top 1～3。</div>';
}
function renderCalendarPage(){
 const el=calendarPageGrid;el.innerHTML='';
 const y=today.getFullYear(),m=today.getMonth(),first=new Date(y,m,1).getDay(),days=new Date(y,m+1,0).getDate();
 ['日','一','二','三','四','五','六'].forEach(d=>el.innerHTML+=`<div class="cal-head">${d}</div>`);
 for(let i=0;i<first;i++)el.innerHTML+='<div></div>';
 for(let d=1;d<=days;d++){const date=`${y}-${pad(m+1)}-${pad(d)}`,ts=tasks.filter(t=>t.date===date&&t.status!=='done');el.innerHTML+=`<div class="cal-day ${d===today.getDate()?'today':''}" onclick="addDateTask('${date}')"><strong>${d}</strong>${ts.slice(0,3).map(t=>`<em>• ${escapeHtml(t.title.slice(0,12))}</em>`).join('')}</div>`}
}
renderAll();

function renderAll(){renderTop();renderPriority();renderProjects();renderTasks();renderKpi();renderAI();renderCalendar();renderEnhancedSalesEditor();updateSalesExtensionSummary()}
renderAll();
</script>
</body>
</html>
