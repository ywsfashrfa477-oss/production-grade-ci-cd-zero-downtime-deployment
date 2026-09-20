const checkButton = document.querySelector('#check-health');
const lastCheck = document.querySelector('#last-check');
const checkResult = document.querySelector('#check-result');
const apiStatus = document.querySelector('#api-status');
const version = document.querySelector('#version');

checkButton.addEventListener('click', async () => {
  checkButton.disabled = true;
  checkButton.querySelector('span').textContent = 'Checking...';

  try {
    const response = await fetch('/api/health');
    const data = await response.json();
    const checkedAt = new Date(data.timestamp);

    version.textContent = `v${data.version}`;
    lastCheck.textContent = checkedAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    checkResult.textContent = 'healthy response received';
    apiStatus.textContent = 'API responding';
  } catch {
    lastCheck.textContent = 'failed';
    checkResult.textContent = 'unable to reach API';
    apiStatus.textContent = 'API unavailable';
  } finally {
    checkButton.disabled = false;
    checkButton.querySelector('span').textContent = 'Run health check';
  }
});