// ...前面的 UI 操作方法都保留不變...

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
