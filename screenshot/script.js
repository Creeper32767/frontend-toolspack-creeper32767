document.addEventListener('DOMContentLoaded', () => {
    // --- Get DOM Elements ---
    const urlInput = document.getElementById('url-input');
    const pasteBtn = document.getElementById('paste-btn');
    const loadBtn = document.getElementById('load-btn');
    const captureBtn = document.getElementById('capture-btn');
    const iframe = document.getElementById('preview-iframe');
    
    const statusMessage = document.getElementById('status-message');
    const progressBar = document.getElementById('progress-bar');
    const downloadLink = document.getElementById('download-link');

    let currentUrl = '';

    // --- Helper function to update status ---
    const updateStatus = (message, showProgress = false, showDownload = false, showCapture = false) => {
        statusMessage.innerHTML = message;
        progressBar.style.display = showProgress ? 'block' : 'none';
        downloadLink.style.display = showDownload ? 'block' : 'none';
        captureBtn.style.display = showCapture ? 'inline-block' : 'none';
    };

    // --- Paste from clipboard ---
    pasteBtn.addEventListener('click', async () => {
        try {
            const text = await navigator.clipboard.readText();
            urlInput.value = text;
            updateStatus('链接已成功粘贴！');
        } catch (err) {
            console.error('Failed to read clipboard contents: ', err);
            updateStatus('无法读取剪贴板。请确保您已授予权限。');
        }
    });

    // --- Step 1: Load the website into the iframe ---
    loadBtn.addEventListener('click', () => {
        const url = urlInput.value.trim();
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            updateStatus('错误：请输入一个有效的、以 http:// 或 https:// 开头的网址。');
            return;
        }
        currentUrl = url;

        updateStatus('正在加载目标网页...', true);
        progressBar.value = 0; // Show indeterminate progress while loading
        iframe.src = 'about:blank';
        iframe.src = url;

        const loadTimeout = setTimeout(() => {
            updateStatus(`错误：加载超时。目标网站 (<code>${url}</code>) 可能禁止了嵌入。`);
        }, 20000);

        iframe.onload = () => {
            clearTimeout(loadTimeout);
            updateStatus('网页加载成功！请与下方页面交互，并在合适的时机点击按钮生成快照。', false, false, true);
        };
        
        iframe.onerror = () => {
             clearTimeout(loadTimeout);
             updateStatus(`错误：加载失败。目标网站 (<code>${url}</code>) 明确拒绝了连接。`);
        };
    });

    // --- Step 2: Capture the current state on button click ---
    captureBtn.addEventListener('click', () => {
        updateStatus('准备捕获...', true, false, false);
        progressBar.value = 0;
        
        const iframeDoc = iframe.contentWindow.document;
        const captureWidth = iframeDoc.documentElement.scrollWidth;
        const captureHeight = iframeDoc.documentElement.scrollHeight;

        html2canvas(iframeDoc.body, {
            width: captureWidth,
            height: captureHeight,
            useCORS: true,
            allowTaint: true,
            windowWidth: captureWidth,
            windowHeight: captureHeight,
            onprogress: (progress) => {
                const percent = Math.round(progress * 100);
                statusMessage.textContent = `正在渲染元素... ${percent}%`;
                progressBar.value = progress;
            }
        }).then(canvas => {
            downloadLink.href = canvas.toDataURL('image/png');
            try {
                const domain = new URL(currentUrl).hostname;
                downloadLink.download = `snapshot-${domain}-${Date.now()}.png`;
            } catch (e) {
                downloadLink.download = `snapshot-${Date.now()}.png`;
            }
            updateStatus('快照生成成功！您可以下载图片了。', false, true, true);
        }).catch(error => {
            console.error('html2canvas error:', error);
            updateStatus('错误：生成图片失败。可能是由于网站内容的安全限制。', false, false, true);
        });
    });
});
