document.addEventListener('DOMContentLoaded', function() {
    // DOM Element Lookups
    const elements = {
        quoteTextarea: document.getElementById('quote-textarea'),
        nameInput: document.getElementById('name-input'),
        dateInput: document.getElementById('date-input'),
        cardTitleInput: document.getElementById('card-title-input'),
        bookTitleInput: document.getElementById('book-title-input'),
        authorInput: document.getElementById('author-input'),
        imageUploadInput: document.getElementById('image-upload-input'),
        imagePreview: document.getElementById('image-preview'),
        imageContainer: document.getElementById('image-container'),
        
        displayQuote: document.getElementById('quote-content'),
        displayName: document.getElementById('display-name'),
        displayDate: document.getElementById('display-date'),
        cardTitleDisplay: document.getElementById('card-title-display'),
        displayBookTitle: document.getElementById('display-book-title'),
        displayAuthor: document.getElementById('display-author'),
        
        titleFont: document.getElementById('title-font'),
        titleColor: document.getElementById('title-color'),
        titlePreview: document.getElementById('title-preview'),
        textFont: document.getElementById('text-font'),
        textColor: document.getElementById('text-color'),
        textPreview: document.getElementById('text-preview'),
        bgColor: document.getElementById('bg-color'),
        bgPreview: document.getElementById('bg-preview'),
        accentColor: document.getElementById('accent-color'),
        accentPreview: document.getElementById('accent-preview'),
        
        outputContainer: document.getElementById('output-container'),
        outputImage: document.getElementById('output-image'),
        downloadLink: document.getElementById('download-link'),
        
        generateBtn: document.getElementById('generate-btn'),
        exportBtn: document.getElementById('export-btn'),
        randomExampleBtn: document.getElementById('random-example-btn'),
        uploadBtn: document.getElementById('upload-btn'),
        quoteOptions: document.querySelectorAll('.quote-option'),
    };

    function setCurrentDate() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        elements.dateInput.value = `${year}-${month}-${day}`;
        updateCardDate();
    }

    function updateCardDate() {
        if (!elements.dateInput.value) return;
        const date = new Date(elements.dateInput.value);
        elements.displayDate.textContent = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    }
    
    function updateCard() {
        elements.displayQuote.textContent = elements.quoteTextarea.value || "æ­¤å¤æ¾ç¤ºææåå®¹...";
        elements.displayName.textContent = elements.nameInput.value || "æå½è";
        elements.cardTitleDisplay.textContent = elements.cardTitleInput.value || "å¡çæ é¢";
        elements.displayBookTitle.textContent = elements.bookTitleInput.value || "ä¹¦ç±æ é¢";
        elements.displayAuthor.textContent = elements.authorInput.value || "ä½èå§å";
        
        updateCardDate();
        
        elements.cardTitleDisplay.style.fontFamily = elements.titleFont.value;
        elements.cardTitleDisplay.style.color = elements.titleColor.value;
        elements.displayQuote.style.fontFamily = elements.textFont.value;
        elements.displayQuote.style.color = elements.textColor.value;
        
        const cardElement = document.querySelector('.card');
        cardElement.style.backgroundColor = elements.bgColor.value;
        document.querySelector('.card-footer').style.borderTop = `1px solid ${elements.textColor.value}33`;
        
        cardElement.style.transform = 'scale(0.98)';
        setTimeout(() => { cardElement.style.transform = 'scale(1)'; }, 200);
    }
    
    function initColorPreview() {
        elements.titlePreview.style.backgroundColor = elements.titleColor.value;
        elements.textPreview.style.backgroundColor = elements.textColor.value;
        elements.bgPreview.style.backgroundColor = elements.bgColor.value;
        elements.accentPreview.style.backgroundColor = elements.accentColor.value;
    }
    
    function exportToPNG() {
        const card = document.getElementById('card');
        elements.exportBtn.textContent = 'æ­£å¨çæå¾ç...';
        elements.exportBtn.disabled = true;
        
        html2canvas(card, { scale: 4, backgroundColor: null, useCORS: true })
            .then(canvas => {
                elements.outputImage.src = canvas.toDataURL('image/png');
                elements.outputContainer.style.display = 'block';
                elements.downloadLink.href = elements.outputImage.src;
                elements.downloadLink.download = `è¯»èå¡ç_${Date.now()}.png`;
            })
            .finally(() => {
                elements.exportBtn.textContent = 'å¯¼åºä¸ºé«æ¸å¾ç';
                elements.exportBtn.disabled = false;
                elements.outputContainer.scrollIntoView({ behavior: 'smooth' });
            });
    }

    function loadRandomExample() {
        elements.cardTitleInput.value = "è´ææä¸çå¹³å¡çä½ ";
        elements.nameInput.value = "ä¸ä½è¯»è";
        elements.bookTitleInput.value = "æçæ¥å°±æ¯é«å±±";
        elements.authorInput.value = "ä½å";
        elements.quoteTextarea.value = "æçæ¥å°±æ¯é«å±±èéæºªæµï¼ææ¬²äºç¾¤å³°ä¹å·ä¿¯è§å¹³åº¸çæ²å£ï¼æçæ¥å°±æ¯äººæ°èéèè¥ï¼æç«å¨ä¼äººä¹è©ä¿¯è§åå¾®çæ¦å¤«ã";
        elements.titleFont.value = "'Ma Shan Zheng', cursive";
        elements.textFont.value = "'Noto Serif SC', serif";
        elements.titleColor.value = "#3a1c71";
        elements.textColor.value = "#3a1c71";
        elements.bgColor.value = "#ffffff";
        elements.accentColor.value = "#8a5dff";
        
        initColorPreview();
        updateCard();
    }
    
    function handleImageUpload(event) {
        const file = event.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = e => {
            const imgHtml = `<img src="${e.target.result}" alt="é¢è§">`;
            elements.imagePreview.innerHTML = imgHtml;
            elements.imageContainer.innerHTML = imgHtml;
        };
        reader.readAsDataURL(file);
    }
    
    // Event Listeners
    elements.generateBtn.addEventListener('click', updateCard);
    elements.exportBtn.addEventListener('click', exportToPNG);
    elements.randomExampleBtn.addEventListener('click', loadRandomExample);
    elements.dateInput.addEventListener('change', updateCardDate);
    
    [elements.titleColor, elements.textColor, elements.bgColor, elements.accentColor].forEach(picker => {
        picker.addEventListener('input', initColorPreview);
    });
    
    elements.quoteOptions.forEach(option => {
        option.addEventListener('click', function() {
            elements.quoteTextarea.value = this.getAttribute('data-quote');
            this.style.backgroundColor = 'rgba(138, 93, 255, 0.2)';
            setTimeout(() => { this.style.backgroundColor = ''; }, 500);
        });
    });
    
    elements.uploadBtn.addEventListener('click', () => elements.imageUploadInput.click());
    elements.imageUploadInput.addEventListener('change', handleImageUpload);
    
    // Initializer calls
    setCurrentDate();
    initColorPreview();
    updateCard();
});
