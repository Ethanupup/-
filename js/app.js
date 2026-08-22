// UI 操作方法
function openModal(id) { document.getElementById(id).style.display = 'flex'; }
function closeModal(id) { document.getElementById(id).style.display = 'none'; }

function openTaskModal() { 
  document.getElementById('fTaskDate').value = iso(new Date(Date.now() + 3 * 86400000)); 
  openModal('taskModal'); 
}

function openProjectModal() { 
  document.getElementById('fProjectDate').value = iso(new Date(Date.now() + 30 * 86400000)); 
  openModal('projectModal'); 
}

function openKpiModal() {
  document.getElementById('fTarget').value = kpi.target; 
  document.getElementById('fRevenue').value = kpi.revenue; 
  document.getElementById('fOrders').value = kpi.orders; 
  document.getElementById('fAov').value = kpi.aov; 
  openModal('kpiModal');
}

function openSalesModal() {
  ['mSalesPeriod', 'mSalesChannel', 'mSalesRevenue', 'mSalesOrders', 'mSalesBooks', 'mSalesTop1', 'mSalesTop2', 'mSalesTop3'].forEach(id => {
    const el = document.getElementById(id); if (el) el.value = '';
  });
  openModal('salesModal');
}

function saveTask() {
  const title = document.getElementById('fTaskTitle').value.trim(); 
  if (!title) { alert('請輸入任務名稱'); return; }
  tasks.push({ 
    id: Date.now(), 
    title, 
    project: document.getElementById('fTaskProject').value.trim() || '未分類', 
    date: document.getElementById('fTaskDate').value, 
    status: document.getElementById('fTaskStatus').value, 
    priority: document.getElementById('fTaskPriority').value 
  });
  saveAll(); closeModal('taskModal'); 
  document.getElementById('fTaskTitle').value = ''; 
  document.getElementById('fTaskProject').value = ''; 
  renderAll();
}

function saveProject() {
  const name = document.getElementById('fProjectName').value.trim(); 
  if (!name) { alert('請輸入專案名稱'); return; }
  projects.push({ 
    id: Date.now(), 
    name, 
    date: document.getElementById('fProjectDate').value, 
    progress: Math.max(0, Math.min(100, Number(document.getElementById('fProjectProgress').value) || 0)) 
  });
  saveAll(); closeModal('projectModal'); renderAll(); 
  document.getElementById('fProjectName').value = '';
}

function saveKpi() { 
  kpi = { 
    target: document.getElementById('fTarget').value, 
    revenue: document.getElementById('fRevenue').value, 
    orders: document.getElementById('fOrders').value, 
    aov: document.getElementById('fAov').value 
  }; 
  saveAll(); closeModal('kpiModal'); renderAll(); 
}

function priorityLabel(p) { return p === 'high' ? '高' : p === 'medium' ? '中' : '低'; }
function statusLabel(s) { return s === 'todo' ? '待辦' : s === 'doing' ? '進行中' : '完成'; }

function renderTop() {
  const unfinished = tasks.filter(t => t.status !== 'done'); 
  const due = unfinished.filter(t => daysUntil(t.date) <= 7).length;
  document.getElementById('todayCount').textContent = unfinished.length; 
  document.getElementById('weekDue').textContent = due; 
  document.getElementById('projectCount').textContent = projects.length;
  
  const targetEl = document.getElementById('targetValue');
  if(targetEl) targetEl.textContent = kpi.target ? Number(kpi.target).toLocaleString() : '—'; 
  
  const hintEl = document.getElementById('targetHint');
  if(hintEl) hintEl.textContent = kpi.target && kpi.revenue ? `目前 ${Math.round(Number(kpi.revenue) / Number(kpi.target) * 100)}%` : '可自行設定';
  
  const dateEl = document.getElementById('todayText');
  if(dateEl) dateEl.textContent = `${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()}（${['日', '一', '二', '三', '四', '五', '六'][today.getDay()]}）`;
}

function renderPriority() {
  const list = document.getElementById('priorityList');
  if(!list) return;
  let arr = tasks.filter(t => t.status !== 'done').sort((a, b) => { 
    const p = { high: 0, medium: 1, low: 2 }; return p[a.priority] - p[b.priority] || a.date.localeCompare(b.date); 
  }).slice(0, 6);
  list.innerHTML = arr.length ? arr.map(t => {
    const d = daysUntil(t.date); 
    const cls = t.priority === 'high' ? 'red' : t.priority === 'medium' ? 'orange' : 'green'; 
    const due = d < 0 ? `逾期 ${Math.abs(d)} 天` : d === 0 ? '今天到期' : `還有 ${d} 天`;
    return `<div class="focus"><div class="priority ${cls}"></div><div class="focus-main"><strong>${escapeHtml(t.title)} <span class="badge ${t.priority === 'high' ? 'red' : t.priority === 'medium' ? 'orange' : ''}">${priorityLabel(t.priority)}</span></strong><small>${escapeHtml(t.project)}｜${t.date}｜${due}</small></div><button class="btn secondary" onclick="finishTask(${t.id})">完成</button></div>`;
  }).join('') : '<div class="empty">目前沒有待處理事項 🎉</div>';
}

function renderProjects() {
  const el = document.getElementById('projectGridPage');
  if(!el) return;
  el.innerHTML = projects.map(p => `<div class="project">
 <div class="project-head"><h3>${escapeHtml(p.name)}</h3><button class="btn secondary" onclick="deleteProject(${p.id})">刪除</button></div>
 <p>截止：${p.date}｜${daysUntil(p.date) >= 0 ? '剩 ' + daysUntil(p.date) + ' 天' : '已逾期'}</p>
 <div class="progress"><span style="width:${p.progress}%"></span></div>
 <div class="project-footer"><span>進度 ${p.progress}%</span><span>${tasks.filter(t => t.project === p.name && t.status !== 'done').length} 個未完成</span></div>
 </div>`).join('');
}

function renderTasks() {
  const searchEl = document.getElementById('taskSearchPage');
  if(!searchEl) return;
  const q = searchEl.value.toLowerCase(); 
  const s = document.getElementById('taskStatusPage').value;
  const p = document.getElementById('taskPriorityPage').value;
  let arr = tasks.filter(t => (s === 'all' || t.status === s) && (p === 'all' || t.priority === p) && (`${t.title} ${t.project}`.toLowerCase().includes(q))); 
  arr.sort((a, b) => a.date.localeCompare(b.date));
  
  const el = document.getElementById('taskListPage');
  el.innerHTML = arr.length ? arr.map(t => {
    const c = t.priority === 'high' ? 'red' : t.priority === 'medium' ? 'orange' : '';
    return `<div class="task"><div class="task-bar ${c}"></div><div><div class="task-title">${escapeHtml(t.title)}</div><div class="task-meta">${escapeHtml(t.project)}｜截止 ${t.date}｜${statusLabel(t.status)}｜${priorityLabel(t.priority)}優先</div></div><button class="btn secondary" onclick="cycleStatus(${t.id})">${t.status === 'done' ? '恢復待辦' : '狀態'}</button></div>`;
  }).join('') : '<div class="empty">沒有符合條件的任務。</div>';
}

function cycleStatus(id) { const t = tasks.find(x => x.id === id); if (!t) return; t.status = t.status === 'todo' ? 'doing' : t.status === 'doing' ? 'done' : 'todo'; saveAll(); renderAll(); }
function finishTask(id) { const t = tasks.find(x => x.id === id); if (t) t.status = 'done'; saveAll(); renderAll(); }
function deleteProject(id) { if (confirm('確定刪除這個專案？')) { projects = projects.filter(p => p.id !== id); saveAll(); renderAll(); } }

function renderKpi() {
  const target = Number(kpi.target) || 0, revenue = Number(kpi.revenue) || 0; 
  const pct = target ? Math.min(100, Math.round(revenue / target * 100)) : 0;
  const el = document.getElementById('kpiMetrics');
  if(el) {
    el.innerHTML = [
      ['營收', revenue ? `$${revenue.toLocaleString()}` : '—', target ? `目標 $${target.toLocaleString()}｜${pct}%` : '尚未設定'],
      ['訂單數', kpi.orders || '—', '本月累計'],
      ['客單價', kpi.aov ? `$${Number(kpi.aov).toLocaleString()}` : '—', '可與上月比較'],
      ['目標差距', target ? `$${Math.max(0, target - revenue).toLocaleString()}` : '—', target ? (revenue >= target ? '已達標 🎉' : '距離目標') : '尚未設定']
    ].map(x => `<div class="metric"><div class="label">${x[0]}</div><div class="value">${x[1]}</div><div class="hint">${x[2]}</div></div>`).join('');
  }
}

function renderAI() { 
  const el = document.getElementById('aiGrid');
  if(el) el.innerHTML = aiPrompts.map((x, i) => `<button class="ai-btn" onclick="copyPrompt(${i})"><strong>${x[0]}</strong><small>${x[1]}</small></button>`).join(''); 
}

async function copyPrompt(i) { 
  try { await navigator.clipboard.writeText(aiPrompts[i][2]); alert('Prompt 已複製，可以直接貼到 ChatGPT。'); } 
  catch (e) { prompt('請複製以下 Prompt：', aiPrompts[i][2]); } 
}

function renderCalendar() {
  const el = document.getElementById('calendar'); 
  if(!el) return;
  el.innerHTML = '';
  const y = today.getFullYear(), m = today.getMonth(), first = new Date(y, m, 1).getDay(), days = new Date(y, m + 1, 0).getDate();
  ['日', '一', '二', '三', '四', '五', '六'].forEach(d => { el.innerHTML += `<div class="cal-head">${d}</div>`; });
  for (let i = 0; i < first; i++) el.innerHTML += '<div></div>';
  for (let d = 1; d <= days; d++) {
    const date = `${y}-${pad(m + 1)}-${pad(d)}`; const ts = tasks.filter(t => t.date === date && t.status !== 'done');
    el.innerHTML += `<div class="cal-day ${d === today.getDate() ? 'today' : ''}" onclick="addDateTask('${date}')"><strong>${d}</strong>${ts.slice(0, 2).map(t => `<em>• ${escapeHtml(t.title.slice(0, 10))}</em>`).join('')}</div>`;
  }
}
function addDateTask(date) { document.getElementById('fTaskDate').value = date; openModal('taskModal'); }

const notesBox = document.getElementById('notesPageBox');
function clearNotes() { if (confirm('確定清空快速筆記？')) { notesBox.value = ''; localStorage.removeItem('ethan_os_notes'); } }
if(notesBox) { 
  notesBox.value = localStorage.getItem('ethan_os_notes') || ''; 
  notesBox.addEventListener('input', () => localStorage.setItem('ethan_os_notes', notesBox.value)); 
}

function showPage(id, btn) {
  document.querySelectorAll('.page').forEach(x => x.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(x => x.classList.remove('active'));
  document.getElementById(id).classList.add('active'); 
  btn.classList.add('active');
  
  if (id === 'sales') { 
    if(typeof renderEnhancedSalesEditor === 'function') renderEnhancedSalesEditor(); 
    if(typeof updateSalesExtensionSummary === 'function') updateSalesExtensionSummary(); 
    if(typeof renderSales === 'function') renderSales(); 
  }
  if (id === 'calendarPage') renderCalendar();
  if (id === 'aiPage') renderAI();
  if (id === 'kpiPage') renderKpi();
  if (id === 'projects') { renderProjects(); renderTasks(); }
}
function renderTasksPage() { renderTasks(); }

function renderAll() {
  renderTop(); 
  renderPriority(); 
  renderProjects(); 
  renderTasks();
  renderKpi(); 
  renderAI(); 
  renderCalendar();
  if(typeof renderEnhancedSalesEditor === 'function') {
      renderEnhancedSalesEditor(); 
      updateSalesExtensionSummary(); 
      renderSales();
  }
}
renderAll();
