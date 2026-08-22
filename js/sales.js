// 業績模組功能
function updateSalesExtensionSummary() {
  const rev = salesData.reduce((s, r) => s + Number(r.revenue || 0), 0);
  const orders = salesData.reduce((s, r) => s + Number(r.orders || 0), 0);
  const countEl = document.getElementById('salesInputCount');
  if(countEl) countEl.textContent = salesData.length;
  const revEl = document.getElementById('salesInputRevenueSum');
  if(revEl) revEl.textContent = '$' + rev.toLocaleString();
  const aovEl = document.getElementById('salesInputAovAvg');
  if(aovEl) aovEl.textContent = '$' + (orders ? Math.round(rev / orders) : 0).toLocaleString();
}

function saveSalesData() {
  const period = (document.getElementById('mSalesPeriod').value || '').trim();
  if (!period) { alert('請先輸入期間（例如：8月第一週）'); return; }
  const revenue = Number(document.getElementById('mSalesRevenue').value) || 0;
  const orders = Number(document.getElementById('mSalesOrders').value) || 0;
  
  salesData.push({
    id: Date.now(),
    period,
    channel: (document.getElementById('mSalesChannel').value || '未分類').trim() || '未分類',
    revenue, orders, aov: orders ? Math.round(revenue / orders) : 0,
    books: Number(document.getElementById('mSalesBooks').value) || 0,
    top1: (document.getElementById('mSalesTop1').value || '').trim(),
    top2: (document.getElementById('mSalesTop2').value || '').trim(),
    top3: (document.getElementById('mSalesTop3').value || '').trim()
  });
  
  saveSalesStorage();
  closeModal('salesModal');
  renderEnhancedSalesEditor();
  updateSalesExtensionSummary();
  renderSales();
}

function addSalesRowEnhanced() {
  salesData.push({ id: Date.now(), period: '新期間', channel: '未分類', revenue: 0, orders: 0, aov: 0, books: 0, top1: '', top2: '', top3: '' });
  saveSalesStorage(); renderEnhancedSalesEditor(); updateSalesExtensionSummary(); renderSales();
}

function deleteSalesEnhanced(id) {
  if (!confirm('確定刪除這筆業績資料？')) return;
  salesData = salesData.filter(r => r.id !== id);
  saveSalesStorage(); renderEnhancedSalesEditor(); updateSalesExtensionSummary(); renderSales();
}

function updateSalesEnhanced(id, key, value) {
  const r = salesData.find(x => x.id === id); if (!r) return;
  if (['period', 'channel', 'top1', 'top2', 'top3'].includes(key)) r[key] = value;
  else r[key] = Number(value) || 0;
  if (key === 'revenue' || key === 'orders') r.aov = r.orders ? Math.round(r.revenue / r.orders) : 0;
  saveSalesStorage(); renderEnhancedSalesEditor(); updateSalesExtensionSummary(); renderSales();
}

function refreshEnhancedChannel() {
  const s = document.getElementById('salesQuickChannel'); if (!s) return;
  const current = s.value || 'all';
  const channels = [...new Set(salesData.map(r => r.channel || '未分類'))];
  s.innerHTML = '<option value="all">全部通路</option>' + channels.map(c => `<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join('');
  if (channels.includes(current)) s.value = current;
}

function renderEnhancedSalesEditor() {
  ensureSalesDataShape(); refreshEnhancedChannel();
  const searchEl = document.getElementById('salesQuickSearch');
  if(!searchEl) return;
  const q = (searchEl.value || '').toLowerCase().trim();
  const channel = document.getElementById('salesQuickChannel').value || 'all';
  const sort = document.getElementById('salesQuickSort').value || 'dateAsc';
  let rows = salesData.filter(r => {
    const hay = `${r.period} ${r.channel} ${r.top1} ${r.top2} ${r.top3}`.toLowerCase();
    return hay.includes(q) && (channel === 'all' || (r.channel || '未分類') === channel);
  });
  rows.sort((a, b) => {
    if (sort === 'revenueDesc') return Number(b.revenue) - Number(a.revenue);
    if (sort === 'revenueAsc') return Number(a.revenue) - Number(b.revenue);
    if (sort === 'dateDesc') return String(b.period).localeCompare(String(a.period));
    return String(a.period).localeCompare(String(b.period));
  });
  const tbody = document.getElementById('enhancedSalesEditorRows');
  if(!tbody) return;
  tbody.innerHTML = rows.length ? rows.map(r => `
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
    </tr>`).join('') : '<tr><td colspan="10" class="empty">沒有符合條件的資料。</td></tr>';
  updateSalesExtensionSummary();
}

function saveSalesEnhanced() { ensureSalesDataShape(); saveSalesStorage(); renderSales(); alert('業績資料已儲存。'); }

function exportSalesCSVEnhanced() {
  ensureSalesDataShape();
  const rows = [['期間', '通路', '營業額', '訂單數', '客單價', '總冊數', 'Top 1', 'Top 2', 'Top 3'],
  ...salesData.map(r => [r.period, r.channel, r.revenue, r.orders, r.aov, r.books, r.top1, r.top2, r.top3])];
  const csv = rows.map(row => row.map(v => `"${String(v || '').replace(/"/g, '""')}"`).join(',')).join('\n');
  const blob = new Blob(["\ufeff" + csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob), a = document.createElement('a');
  a.href = url; a.download = 'Ethan_業績資料.csv'; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
}

function renderSales() {
  const valid = salesData.filter(x => x.revenue > 0 || x.orders > 0 || x.books > 0);
  const latest = salesData[salesData.length - 1] || {};
  const totalRev = valid.reduce((a, b) => a + b.revenue, 0);
  const totalOrders = valid.reduce((a, b) => a + b.orders, 0);
  const totalBooks = valid.reduce((a, b) => a + b.books, 0);
  
  const kpisEl = document.getElementById('salesKpis');
  if(kpisEl) {
      kpisEl.innerHTML = [
        ['總營業額', `$${totalRev.toLocaleString()}`, '目前資料合計'],
        ['總訂單數', totalOrders.toLocaleString(), '目前資料合計'],
        ['平均客單', `$${totalOrders ? Math.round(totalRev / totalOrders).toLocaleString() : '0'}`, '營業額 ÷ 訂單數'],
        ['總冊數', totalBooks.toLocaleString(), '目前資料合計'],
        ['最新輸入', latest.period || '—', latest.revenue ? `$${latest.revenue.toLocaleString()}` : '尚未輸入']
      ].map(x => `<div class="sales-kpi"><div class="label">${x[0]}</div><div class="value">${x[1]}</div><div class="small-note">${x[2]}</div></div>`).join('');
  }
  renderSalesLine(valid); renderSalesPie(valid); renderTop3(latest);
}

function renderSalesLine(data) {
  const chart = document.getElementById('salesLineChart');
  if(!chart) return;
  if (!data.length) { chart.innerHTML = '<div class="empty">先輸入業績資料，就會出現比較圖。</div>'; return; }
  const max = Math.max(...data.map(x => x.revenue), 1), w = 650, h = 230, pad = 35;
  const pts = data.map((x, i) => { const px = pad + (data.length === 1 ? 0 : i * (w - 2 * pad) / (data.length - 1)); const py = h - pad - (x.revenue / max) * (h - 2 * pad); return [px, py, x]; });
  const poly = pts.map(x => `${x[0]},${x[1]}`).join(' ');
  chart.innerHTML = `<svg class="chart-svg" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none"><line x1="${pad}" y1="${h - pad}" x2="${w - pad}" y2="${h - pad}" stroke="#dfe3ea"/><polyline fill="none" stroke="#3157c8" stroke-width="4" points="${poly}"/>${pts.map(x => `<circle cx="${x[0]}" cy="${x[1]}" r="5" fill="#3157c8"/><text x="${x[0]}" y="${h - 8}" text-anchor="middle" font-size="10" fill="#70798b">${escapeHtml(x[2].period)}</text><text x="${x[0]}" y="${x[1] - 10}" text-anchor="middle" font-size="10" fill="#202534">$${Number(x[2].revenue).toLocaleString()}</text>`).join('')}</svg>`;
}

function renderSalesPie(data) {
  const chart = document.getElementById('salesPieChart');
  if(!chart) return;
  const total = data.reduce((a, b) => a + b.revenue, 0);
  if (!total) { chart.innerHTML = '<div class="empty">目前沒有營業額資料。</div>'; return; }
  let start = 0, cx = 120, cy = 120, r = 90;
  const colors = ['#3157c8', '#f5b942', '#159570', '#d94b4b', '#8b5cf6', '#e67e22'];
  const arc = (a1, a2) => { const x1 = cx + r * Math.cos(a1), y1 = cy + r * Math.sin(a1), x2 = cx + r * Math.cos(a2), y2 = cy + r * Math.sin(a2), large = a2 - a1 > Math.PI ? 1 : 0; return `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2} Z`; };
  let svg = `<svg class="chart-svg" viewBox="0 0 420 250"><g transform="translate(0,5)">`;
  data.forEach((x, i) => { const angle = x.revenue / total * Math.PI * 2; svg += `<path d="${arc(start, start + angle)}" fill="${colors[i % colors.length]}"></path>`; start += angle; });
  svg += '</g><g transform="translate(235,35)">';
  data.forEach((x, i) => { const y = i * 30; svg += `<rect x="0" y="${y}" width="12" height="12" rx="3" fill="${colors[i % colors.length]}"/><text x="20" y="${y + 11}" font-size="11" fill="#202534">${escapeHtml(x.period)} ${Math.round(x.revenue / total * 100)}%</text>`; });
  svg += '</g></svg>'; chart.innerHTML = svg;
}

function renderTop3(latest) {
  const el = document.getElementById('top3List');
  if(!el) return;
  const arr = [latest.top1, latest.top2, latest.top3].filter(Boolean);
  el.innerHTML = arr.length ? arr.map((x, i) => `<div class="rank"><div class="rank-num">${i + 1}</div><strong>${escapeHtml(x)}</strong></div>`).join('') : '<div class="empty">請在最新一筆業績資料輸入本週 Top 1～3。</div>';
}
