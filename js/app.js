// ...前面的 UI 操作方法都保留不變...

function openSalesModal() {
  ['mSalesPeriod', 'mSalesChannel', 'mSalesRevenue', 'mSalesOrders', 'mSalesBooks', 'mSalesTop1', 'mSalesTop2', 'mSalesTop3'].forEach(id => {
    const el = document.getElementById(id); if (el) el.value = '';
  });
  openModal('salesModal');
}
function showPage(id, btn) {
  document.querySelectorAll('.page').forEach(x => x.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(x => x.classList.remove('active'));
  document.getElementById(id).classList.add('active'); btn.classList.add('active');
  if (id === 'sales') { renderEnhancedSalesEditor(); updateSalesExtensionSummary(); renderSales(); }
  if (id === 'calendarPage') renderCalendar();
  if (id === 'aiPage') renderAI();
  if (id === 'kpiPage') renderKpi();
  if (id === 'projects') { renderProjects(); renderTasks(); }
}
function renderTasksPage() { renderTasks(); }

function renderAll() {
  renderTop(); renderPriority(); renderProjects(); renderTasks();
  renderKpi(); renderAI(); renderCalendar();
  if(typeof renderEnhancedSalesEditor === 'function') {
      renderEnhancedSalesEditor(); 
      updateSalesExtensionSummary(); 
      renderSales();
  }
}
renderAll();
