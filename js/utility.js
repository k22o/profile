accordion = {
    
    // 対象の要素の子要素のheightを自身のmax-heightとする
    settingMaxHeight: function(openContent) {
            
        const buffer = 50;
        const nowHeight = openContent.clientHeight; // 今の高さ
        const targetHeight = openContent.children[0].clientHeight + buffer; // 子の高さにバッファーを追加

        openContent.style.maxHeight = nowHeight === 0 ? `${targetHeight}px` : 0;

    },
    
    init: function() {

        const acds = document.querySelectorAll('.acd-title')

        // 読み込み時にOpenが設定されていた場合
        for (let i=0; i<acds.length; i++) {
            if(acds[i].className.split(' ').indexOf('open') != '-1') {
                const openContent = acds[i].nextElementSibling;
                this.settingMaxHeight(openContent);    
            }
        }

        // クリック時の応答
        for (let i=0; i<acds.length; i++) {
            acds[i].addEventListener('click', () => {
                acds[i].classList.toggle('open');

                const openContent = acds[i].nextElementSibling;
                this.settingMaxHeight(openContent);
            }, false)    
        }
    }
}

accordion.init()
