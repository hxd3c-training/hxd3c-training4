// ��ʾ���ݺ���
function showContent(title) {
    const contentArea = document.getElementById('contentArea');
    
    // ���⴦��LKJ2000��ʾ������֪
    if (title === 'LKJ2000��ʾ������֪') {
        const contentHTML = `
            <div class="lkj2000-container">
                <h3>${title}</h3>
                <div class="lkj2000-content">
                    <div class="lkj2000-image">
                        <img src="lkj2000-display.jpg.png" alt="LKJ2000��ʾ����" width="100%">
                    </div>
                    <div class="lkj2000-controls">
                        <div class="control-item" onclick="playAudio()">
                            <div class="control-icon audio-icon"></div>
                            <div class="control-text">�������</div>
                        </div>
                        <div class="control-item" onclick="showLearningMaterials()">
                            <div class="control-icon document-icon"></div>
                            <div class="control-text">ѧϰ����</div>
                        </div>
                        <div class="control-item" onclick="showModuleTest()">
                            <div class="control-icon test-icon"></div>
                            <div class="control-text">ģ�����</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- ��Ƶ����??-->
            <div id="audioPlayer" class="audio-player">
                <h4>��Ƶ����</h4>
                <audio id="audioElement" controls>
                    <source src="audio.mp3.mp3" type="audio/mpeg">
                    �����������֧����Ƶ����
                  </audio>
                <button class="close-btn" onclick="closeAudioPlayer()">�ر�</button>
            </div>
            
            <!-- ѧϰ���ϵ��� -->
            <div id="learningMaterials" class="learning-materials">
                <div class="materials-content">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <h4>ѧϰ����</h4>
                        <button class="close-btn" onclick="closeLearningMaterials()">�ر�</button>
                    </div>
                    <div class="pdf-container">
                        <embed src="��ʾ����ʶ���빦�ܼ���ʹ??pdf" type="application/pdf" width="100%" height="850px">
                    </div>
                </div>
            </div>
            
            <!-- ģ����Ե��� -->
            <div id="moduleTest" class="learning-materials">
                <div class="materials-content">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <h4>ģ����� - �����ƶ������ƶ���??/h4>
                        <button class="close-btn" onclick="closeModuleTest()">�ر�</button>
                    </div>
                    <div id="testContainer">
                        <div id="questionContainer"></div>
                        <div id="feedbackContainer" style="display: none; margin: 20px 0; padding: 15px; border-radius: 8px;"></div>
                        <div id="scoreContainer" style="display: none; margin: 20px 0; text-align: center;">
                            <h3>���Խ��</h3>
                            <p>�÷�??span id="finalScore">0</span>/100</p>
                            <button class="close-btn" onclick="restartTest()">���²���</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        contentArea.innerHTML = contentHTML;
    } else if (title === 'EBV �����ƶ�����֪') {
        const contentHTML = `
            <div class="lkj2000-container">
                <h3>${title}</h3>
                <div class="lkj2000-content">
                    <div class="image-slider-container">
                        <div class="image-slider">
                            <div class="lkj2000-image">
                                <img src="EBV�����ƶ���.jpg" alt="EBV�����ƶ���">
                            </div>
                            <div class="lkj2000-image">
                                <img src="LCDM��ʾ??jpg" alt="LCDM�ƶ���ʾ??>
                            </div>
                        </div>
                    </div>
                    <div class="lkj2000-controls">
                        <div class="control-item" onclick="playAudio()">
                            <div class="control-icon audio-icon"></div>
                            <div class="control-text">�������</div>
                        </div>
                        <div class="control-item" onclick="showLearningMaterials()">
                            <div class="control-icon document-icon"></div>
                            <div class="control-text">ѧϰ����</div>
                        </div>
                        <div class="control-item" onclick="showModuleTest()">
                            <div class="control-icon test-icon"></div>
                            <div class="control-text">ģ�����</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- ��Ƶ����??-->
            <div id="audioPlayer" class="audio-player">
                <h4>��Ƶ����</h4>
                <audio id="audioElement" controls>
                    <source src="audio.mp3.mp3" type="audio/mpeg">
                    �����������֧����Ƶ����
                 </audio>
                <button class="close-btn" onclick="closeAudioPlayer()">�ر�</button>
            </div>
            
            <!-- ѧϰ���ϵ��� -->
            <div id="learningMaterials" class="learning-materials">
                <div class="materials-content">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <h4>ѧϰ����</h4>
                        <button class="close-btn" onclick="closeLearningMaterials()">�ر�</button>
                    </div>
                    <div class="pdf-container">
                        <embed src="��ʾ����ʶ���빦�ܼ���ʹ??pdf" type="application/pdf" width="100%" height="850px">
                    </div>
                </div>
            </div>
            
            <!-- ģ����Ե��� -->
            <div id="moduleTest" class="learning-materials">
                <div class="materials-content">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <h4>ģ����� - �����ƶ������ƶ���??/h4>
                        <button class="close-btn" onclick="closeModuleTest()">�ر�</button>
                    </div>
                    <div id="testContainer">
                        <div id="questionContainer"></div>
                        <div id="feedbackContainer" style="display: none; margin: 20px 0; padding: 15px; border-radius: 8px;"></div>
                        <div id="scoreContainer" style="display: none; margin: 20px 0; text-align: center;">
                            <h3>���Խ��</h3>
                            <p>�÷�??span id="finalScore">0</span>/100</p>
                            <button class="close-btn" onclick="restartTest()">���²���</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        contentArea.innerHTML = contentHTML;
    } else if (title === '����ʽ��ť��??) {
        const contentHTML = `
            <div class="interactive-buttons-container">
                <h3>${title}</h3>
                <div class="interactive-buttons-wrapper">
                    <div class="image-map-container">
                        <img src="lkj2000-display.jpg.png" alt="LKJ2000��ť���" width="100%">
                        <!-- ���ǲ㰴??-->
                        <div class="overlay-buttons">
                            <!-- ��һ�а�??-->
                            <div class="overlay-button" style="left: 2%; top: 10%; width: 8%; height: 35%;" 
                                 onmouseover="showButtonInfo('����'); this.style.backgroundColor='rgba(255, 0, 0, 0.3)'" 
                                 onmouseout="clearButtonInfo(); this.style.backgroundColor='transparent'"
                                 onclick="showButtonInfo('����')">
                            </div>
                            <div class="overlay-button" style="left: 10%; top: 10%; width: 8%; height: 35%;" 
                                 onmouseover="showButtonInfo('����'); this.style.backgroundColor='rgba(255, 255, 0, 0.3)'" 
                                 onmouseout="clearButtonInfo(); this.style.backgroundColor='transparent'"
                                 onclick="showButtonInfo('����')">
                            </div>
                            <div class="overlay-button" style="left: 18%; top: 10%; width: 8%; height: 35%;" 
                                 onmouseover="showButtonInfo('��ǰ'); this.style.backgroundColor='rgba(0, 0, 255, 0.3)'" 
                                 onmouseout="clearButtonInfo(); this.style.backgroundColor='transparent'"
                                 onclick="showButtonInfo('��ǰ')">
                            </div>
                            <div class="overlay-button" style="left: 26%; top: 10%; width: 8%; height: 35%;" 
                                 onmouseover="showButtonInfo('����'); this.style.backgroundColor='rgba(0, 0, 255, 0.3)'" 
                                 onmouseout="clearButtonInfo(); this.style.backgroundColor='transparent'"
                                 onclick="showButtonInfo('����')">
                            </div>
                            <div class="overlay-button" style="left: 34%; top: 10%; width: 8%; height: 35%;" 
                                 onmouseover="showButtonInfo('��λ'); this.style.backgroundColor='rgba(0, 0, 255, 0.3)'" 
                                 onmouseout="clearButtonInfo(); this.style.backgroundColor='transparent'"
                                 onclick="showButtonInfo('��λ')">
                            </div>
                            <div class="overlay-button" style="left: 42%; top: 10%; width: 8%; height: 35%;" 
                                 onmouseover="showButtonInfo('��·??); this.style.backgroundColor='rgba(0, 0, 255, 0.3)'" 
                                 onmouseout="clearButtonInfo(); this.style.backgroundColor='transparent'"
                                 onclick="showButtonInfo('��·??)">
                            </div>
                            <div class="overlay-button" style="left: 50%; top: 10%; width: 8%; height: 35%;" 
                                 onmouseover="showButtonInfo('����'); this.style.backgroundColor='rgba(0, 0, 255, 0.3)'" 
                                 onmouseout="clearButtonInfo(); this.style.backgroundColor='transparent'"
                                 onclick="showButtonInfo('����')">
                            </div>
                            <div class="overlay-button" style="left: 58%; top: 10%; width: 8%; height: 35%;" 
                                 onmouseover="showButtonInfo('��ѯ'); this.style.backgroundColor='rgba(255, 255, 255, 0.3)'" 
                                 onmouseout="clearButtonInfo(); this.style.backgroundColor='transparent'"
                                 onclick="showButtonInfo('��ѯ')">
                            </div>
                            <div class="overlay-button" style="left: 66%; top: 10%; width: 8%; height: 35%;" 
                                 onmouseover="showButtonInfo('??); this.style.backgroundColor='rgba(255, 255, 255, 0.3)'" 
                                 onmouseout="clearButtonInfo(); this.style.backgroundColor='transparent'"
                                 onclick="showButtonInfo('??)">
                            </div>
                            <div class="overlay-button" style="left: 74%; top: 10%; width: 8%; height: 35%;" 
                                 onmouseover="showButtonInfo('ת��'); this.style.backgroundColor='rgba(255, 255, 255, 0.3)'" 
                                 onmouseout="clearButtonInfo(); this.style.backgroundColor='transparent'"
                                 onclick="showButtonInfo('ת��')">
                            </div>
                            <div class="overlay-button" style="left: 82%; top: 10%; width: 8%; height: 35%;" 
                                 onmouseover="showButtonInfo('�趨'); this.style.backgroundColor='rgba(255, 255, 255, 0.3)'" 
                                 onmouseout="clearButtonInfo(); this.style.backgroundColor='transparent'"
                                 onclick="showButtonInfo('�趨')">
                            </div>
                            
                            <!-- �ڶ��а�??-->
                            <div class="overlay-button" style="left: 10%; top: 60%; width: 8%; height: 35%;" 
                                 onmouseover="showButtonInfo('����'); this.style.backgroundColor='rgba(0, 255, 0, 0.3)'" 
                                 onmouseout="clearButtonInfo(); this.style.backgroundColor='transparent'"
                                 onclick="showButtonInfo('����')">
                            </div>
                            <div class="overlay-button" style="left: 18%; top: 60%; width: 8%; height: 35%;" 
                                 onmouseover="showButtonInfo('���'); this.style.backgroundColor='rgba(0, 0, 255, 0.3)'" 
                                 onmouseout="clearButtonInfo(); this.style.backgroundColor='transparent'"
                                 onclick="showButtonInfo('���')">
                            </div>
                            <div class="overlay-button" style="left: 26%; top: 60%; width: 8%; height: 35%;" 
                                 onmouseover="showButtonInfo('��??); this.style.backgroundColor='rgba(0, 0, 255, 0.3)'" 
                                 onmouseout="clearButtonInfo(); this.style.backgroundColor='transparent'"
                                 onclick="showButtonInfo('��??)">
                            </div>
                            <div class="overlay-button" style="left: 34%; top: 60%; width: 8%; height: 35%;" 
                                 onmouseover="showButtonInfo('�Զ�У��'); this.style.backgroundColor='rgba(0, 0, 255, 0.3)'" 
                                 onmouseout="clearButtonInfo(); this.style.backgroundColor='transparent'"
                                 onclick="showButtonInfo('�Զ�У��')">
                            </div>
                            <div class="overlay-button" style="left: 42%; top: 60%; width: 8%; height: 35%;" 
                                 onmouseover="showButtonInfo('����??); this.style.backgroundColor='rgba(0, 0, 255, 0.3)'" 
                                 onmouseout="clearButtonInfo(); this.style.backgroundColor='transparent'"
                                 onclick="showButtonInfo('����??)">
                            </div>
                            <div class="overlay-button" style="left: 50%; top: 60%; width: 8%; height: 35%;" 
                                 onmouseover="showButtonInfo('Ѳ��'); this.style.backgroundColor='rgba(0, 0, 255, 0.3)'" 
                                 onmouseout="clearButtonInfo(); this.style.backgroundColor='transparent'"
                                 onclick="showButtonInfo('Ѳ��')">
                            </div>
                            <div class="overlay-button" style="left: 58%; top: 60%; width: 8%; height: 35%;" 
                                 onmouseover="showButtonInfo('??); this.style.backgroundColor='rgba(255, 255, 255, 0.3)'" 
                                 onmouseout="clearButtonInfo(); this.style.backgroundColor='transparent'"
                                 onclick="showButtonInfo('??)">
                            </div>
                            <div class="overlay-button" style="left: 66%; top: 60%; width: 8%; height: 35%;" 
                                 onmouseover="showButtonInfo('??); this.style.backgroundColor='rgba(255, 255, 255, 0.3)'" 
                                 onmouseout="clearButtonInfo(); this.style.backgroundColor='transparent'"
                                 onclick="showButtonInfo('??)">
                            </div>
                            <div class="overlay-button" style="left: 74%; top: 60%; width: 8%; height: 35%;" 
                                 onmouseover="showButtonInfo('??); this.style.backgroundColor='rgba(255, 255, 255, 0.3)'" 
                                 onmouseout="clearButtonInfo(); this.style.backgroundColor='transparent'"
                                 onclick="showButtonInfo('??)">
                            </div>
                            <div class="overlay-button" style="left: 82%; top: 60%; width: 8%; height: 35%;" 
                                 onmouseover="showButtonInfo('ȷ��'); this.style.backgroundColor='rgba(255, 0, 0, 0.3)'" 
                                 onmouseout="clearButtonInfo(); this.style.backgroundColor='transparent'"
                                 onclick="showButtonInfo('ȷ��')">
                            </div>
                        </div>
                    </div>
                </div>
                <div id="buttonInfo" class="button-info">
                    <h4>��ť��Ϣ</h4>
                    <p>�������ͣ�ڰ�ť�ϲ鿴��ϸ��??/p>
                </div>
            </div>
        `;
        contentArea.innerHTML = contentHTML;
    } else if (title === '���ü�ʱ����') {
        const contentHTML = `
            <div class="video-wall-container">
                <h3>${title}</h3>
                <div class="film-strip-container">
                    <div class="film-strip">
                        <div class="film-body">
                            <!-- ��Ƭ���� -->
                            <div class="film-content">
                                <!-- �����ݿ� -->
                                <div class="film-perforations top">
                                    <div class="perforation"></div>
                                    <div class="perforation"></div>
                                    <div class="perforation"></div>
                                    <div class="perforation"></div>
                                    <div class="perforation"></div>
                                    <div class="perforation"></div>
                                    <div class="perforation"></div>
                                    <div class="perforation"></div>
                                    <div class="perforation"></div>
                                    <div class="perforation"></div>
                                </div>
                                
                                <!-- ��Ƶ??-->
                                <div class="film-frames">
                                    <!-- ��Ƶ?? -->
                                    <div class="film-frame">
                                        <div class="frame-type">C-400</div>
                                        <div class="frame-number">14</div>
                                        <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=train%20braking%20system%20demonstration%2C%20professional%20training%20video%20thumbnail%2C%20clear%20image&image_size=landscape_16_9" alt="�����ƶ�����ʾ��" class="video-thumbnail">
                                        <div class="video-overlay" onclick="openVideoPlayer('�����ƶ�����ʾ��')">
                                            <div class="play-button">??/div>
                                            <div class="video-title">�����ƶ�����ʾ��</div>
                                        </div>
                                    </div>
                                    
                                    <!-- ��Ƶ?? -->
                                    <div class="film-frame">
                                        <div class="frame-type">PFRM</div>
                                        <div class="frame-number">15</div>
                                        <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=emergency%20braking%20procedure%2C%20train%20driver%20training%2C%20professional%20video%20thumbnail&image_size=landscape_16_9" alt="����ƶ������?? class="video-thumbnail">
                                        <div class="video-overlay" onclick="openVideoPlayer('����ƶ������??)">
                                            <div class="play-button">??/div>
                                            <div class="video-title">����ƶ������??/div>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- �ײ��ݿ� -->
                                <div class="film-perforations bottom">
                                    <div class="perforation"></div>
                                    <div class="perforation"></div>
                                    <div class="perforation"></div>
                                    <div class="perforation"></div>
                                    <div class="perforation"></div>
                                    <div class="perforation"></div>
                                    <div class="perforation"></div>
                                    <div class="perforation"></div>
                                    <div class="perforation"></div>
                                    <div class="perforation"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- ��Ƶ��������??-->
            <div id="videoPlayer" class="video-player-popup">
                <div class="video-player-content">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                        <h4 id="videoTitle">��Ƶ����</h4>
                        <button class="close-btn" onclick="closeVideoPlayer()">�ر�</button>
                    </div>
                    <div class="video-player">
                        <video id="videoElement" controls width="100%" height="auto">
                            <source src="your-video.mp4" type="video/mp4">
                            �����������֧����Ƶ����
                        </video>
                    </div>
                </div>
            </div>
        `;
        contentArea.innerHTML = contentHTML;
    } else {
        // ����ͨ������չʾHTML
        const contentHTML = `
            <div class="content-display">
                <h3>${title}</h3>
                <p>��ѡ���ˣ�${title}</p>
                <p>����??{title}����ϸ����չʾ����??/p>
                <p>�����Ը���ʵ��������������Ӿ���Ŀμ����ݡ���Ƶ��ͼƬ�ȶ�ý���ز�??/p>
            </div>
        `;
        
        // ������������
        contentArea.innerHTML = contentHTML;
    }
}

// ��ʾ��ӭҳ�溯�� - ��ʾ��Ƶ
function showWelcome() {
    const contentArea = document.getElementById('contentArea');
    
    // ������Ƶ����HTML
    const videoHTML = `
        <!-- ��Ƶ����??-->
        <div class="video-container">
            <video controls autoplay muted loop width="100%" height="auto">
                <source src="your-video.mp4" type="video/mp4">
                �����������֧����Ƶ����
            </video>
        </div>
    `;
    
    // ������������
    contentArea.innerHTML = videoHTML;
}

// ������Ƶ����
function playAudio() {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.style.display = 'block';
}

// �ر���Ƶ��������??function closeAudioPlayer() {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.style.display = 'none';
    // ��ͣ��Ƶ
    const audioElement = document.getElementById('audioElement');
    if (audioElement) {
        audioElement.pause();
    }
}

// ��ʾѧϰ���Ϻ���
function showLearningMaterials() {
    const learningMaterials = document.getElementById('learningMaterials');
    learningMaterials.style.display = 'flex';
}

// �ر�ѧϰ���Ϻ���
function closeLearningMaterials() {
    const learningMaterials = document.getElementById('learningMaterials');
    learningMaterials.style.display = 'none';
}

// PDF��������
function searchInPDF() {
    const searchTerm = document.getElementById('searchInput').value;
    if (!searchTerm) {
        alert('�����������ؼ���');
        return;
    }
    
    const pdfEmbed = document.getElementById('pdfDocument');
    
    // ����ʹ�������PDF�鿴������������
    if (pdfEmbed.contentWindow && pdfEmbed.contentWindow.find) {
        pdfEmbed.contentWindow.find(searchTerm);
    } else if (pdfEmbed.contentDocument && pdfEmbed.contentDocument.find) {
        pdfEmbed.contentDocument.find(searchTerm);
    } else {
        // ����������֧��ֱ����������ʾ��??        alert('������������ܲ�֧��PDF�����������ܣ��볢��ʹ��PDF�鿴������������');
    }
}

// Ƕ���ĵ�����
function embedDocument() {
    const docLink = document.getElementById('docLink').value;
    const documentDisplay = document.getElementById('documentDisplay');
    
    if (docLink) {
        // ����Ƿ���PDF����
        if (docLink.includes('.pdf')) {
            documentDisplay.innerHTML = `
                <h5>�ĵ�Ԥ��??/h5>
                <embed src="${docLink}" type="application/pdf" width="100%" height="400px">
            `;
        } else if (docLink.includes('.doc') || docLink.includes('.docx')) {
            // ����Word�ĵ���ʹ��Google DocsԤ��
            const googleDocsUrl = `https://docs.google.com/gview?url=${encodeURIComponent(docLink)}&embedded=true`;
            documentDisplay.innerHTML = `
                <h5>�ĵ�Ԥ��??/h5>
                <iframe src="${googleDocsUrl}" width="100%" height="400px" frameborder="0"></iframe>
            `;
        } else {
            // ������������
            documentDisplay.innerHTML = `
                <h5>�ĵ�����??/h5>
                <a href="${docLink}" target="_blank">������ĵ�</a>
            `;
        }
    } else {
        documentDisplay.innerHTML = '<p>�������ĵ���??/p>';
    }
}

// �����ļ��ϴ�
document.addEventListener('change', function(e) {
    if (e.target.id === 'fileUpload') {
        const file = e.target.files[0];
        const documentDisplay = document.getElementById('documentDisplay');
        
        if (file) {
            // ����ļ���??            if (file.type === 'application/pdf') {
                const reader = new FileReader();
                reader.onload = function(e) {
                    documentDisplay.innerHTML = `
                        <h5>�ĵ�Ԥ��??/h5>
                        <embed src="${e.target.result}" type="application/pdf" width="100%" height="400px">
                    `;
                };
                reader.readAsDataURL(file);
            } else if (file.type.includes('word') || file.name.includes('.doc') || file.name.includes('.docx')) {
                documentDisplay.innerHTML = `
                    <h5>�ļ��ϴ��ɹ�??/h5>
                    <p>�ļ�����${file.name}</p>
                    <p>�ļ���С??{(file.size / 1024).toFixed(2)} KB</p>
                    <p>ע�⣺Word�ĵ���Ҫ���غ�鿴</p>
                `;
            } else {
                documentDisplay.innerHTML = `
                    <h5>�ļ��ϴ��ɹ�??/h5>
                    <p>�ļ�����${file.name}</p>
                    <p>�ļ���С??{(file.size / 1024).toFixed(2)} KB</p>
                `;
            }
        }
    }
});

// ������Ŀ����
const testQuestions = [
    {
        question: '�����������ƶ�ʱ����ʾ��״̬���е��ĸ�ָʾ�ƻ�����??,
        options: ['A. ����ƶ���', 'B. �����ƶ�??, 'C. ж��??, 'D. ����??],
        correctAnswer: 'B',
        explanation: '���������ƶ�ʱ����ʾ��״̬���еĳ����ƶ��ƻ�������ʾ˾���Ѵ��������ƶ�??
    },
    {
        question: '����������ƶ�ʱ����ʾ��״̬���е��ĸ�ָʾ�ƻ�����??,
        options: ['A. �����ƶ�??, 'B. ����ƶ���', 'C. ж��??, 'D. ����??],
        correctAnswer: 'B',
        explanation: '��������ƶ�ʱ����ʾ��״̬���еĽ���ƶ��ƻ�������ʾ˾���Ѵ�������ƶ�??
    },
    {
        question: '������ж��ʱ����ʾ��״̬���е��ĸ�ָʾ�ƻ�����??,
        options: ['A. �����ƶ�??, 'B. ����ƶ���', 'C. ж��??, 'D. ����??],
        correctAnswer: 'C',
        explanation: '����ж��ʱ����ʾ��״̬���е�ж�صƻ�������ʾ�����ѽ���ж��״̬??
    },
    {
        question: '��������ƶ�ʱ��Ӧ�ð�ѹ�ĸ���ť??,
        options: ['A. ����ƶ���??, 'B. ���ⰴť', 'C. ж�ذ�ť', 'D. �ƶ���ť'],
        correctAnswer: 'B',
        explanation: '��������ƶ�ʱ��˾����Ҫ��ѹ���ⰴť��ʹ���������ƶ�״̬??
    },
    {
        question: '�����ƶ�������ʱ����ʾ��������ʲô״̬��',
        options: ['A. ����ƶ�״??, 'B. �����ƶ�״??, 'C. ж��״??, 'D. ��������״??],
        correctAnswer: 'B',
        explanation: '�����ƶ��������ʾ�����Ѵ��������ƶ������ڳ����ƶ�״̬??
    },
    {
        question: '����ƶ�������ʱ����ʾ��������ʲô״̬��',
        options: ['A. �����ƶ�״??, 'B. ����ƶ�״??, 'C. ж��״??, 'D. ��������״??],
        correctAnswer: 'B',
        explanation: '����ƶ��������ʾ�����Ѵ�������ƶ������ڽ���ƶ�״̬??
    },
    {
        question: 'ж�ص�����ʱ����ʾ��������ʲô״̬��',
        options: ['A. �����ƶ�״??, 'B. ����ƶ�״??, 'C. ж��״??, 'D. ��������״??],
        correctAnswer: 'C',
        explanation: 'ж�ص������ʾ�����Ѵ���ж�أ�����ж��״̬??
    },
    {
        question: '��HXD3C�͵��������У������ƶ��Ľ����ʽ�ǣ�',
        options: ['A. �Զ����', 'B. ��ѹ���ⰴť', 'C. �ȴ�һ��ʱ����Զ����', 'D. �رյ�Դ'],
        correctAnswer: 'B',
        explanation: '��HXD3C�͵��������У������ƶ���Ҫ˾���ֶ���ѹ���ⰴť���ܽ��??
    },
    {
        question: '����ʾ��״̬���г����ƶ�������ʱ������������״̬��??,
        options: ['A. ������??, 'B. ������??, 'C. ֹͣ����', 'D. ������??],
        correctAnswer: 'B',
        explanation: '�����ƶ��������ʾ��������ʵʩ�ƶ������ڼ�������״̬??
    },
    {
        question: '��LKJ2000��ʾ�����У��ĸ�ָʾ�������ʾ�������ڳ����ƶ�״̬��',
        options: ['A. ����ƶ���', 'B. �����ƶ�??, 'C. ж��??, 'D. ����??],
        correctAnswer: 'B',
        explanation: '��LKJ2000��ʾ�����У������ƶ��������ʾ�������ڳ����ƶ�״̬??
    }
];

// ��ʾģ����Ժ���
function showModuleTest() {
    const moduleTest = document.getElementById('moduleTest');
    moduleTest.style.display = 'flex';
    initTest();
}

// �ر�ģ����Ժ���
function closeModuleTest() {
    const moduleTest = document.getElementById('moduleTest');
    moduleTest.style.display = 'none';
}

// ��ʼ����??let currentQuestionIndex = 0;
let score = 0;

function initTest() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('feedbackContainer').style.display = 'none';
    document.getElementById('scoreContainer').style.display = 'none';
    showQuestion(currentQuestionIndex);
}

// ��ʾ��Ŀ
function showQuestion(index) {
    const questionContainer = document.getElementById('questionContainer');
    const question = testQuestions[index];
    
    let optionsHTML = '';
    question.options.forEach((option, i) => {
        const optionLetter = String.fromCharCode(65 + i);
        optionsHTML += `
            <div class="option" onclick="answerQuestion('${optionLetter}')" style="padding: 15px; margin: 10px 0; background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 8px; cursor: pointer; transition: all 0.3s ease;">
                ${option}
            </div>
        `;
    });
    
    questionContainer.innerHTML = `
        <div style="margin-bottom: 20px;">
            <h5>??${index + 1} �⣺${question.question}</h5>
        </div>
        <div style="margin-bottom: 20px;">
            ${optionsHTML}
        </div>
    `;
}

// �ش�����
function answerQuestion(selectedAnswer) {
    const question = testQuestions[currentQuestionIndex];
    const feedbackContainer = document.getElementById('feedbackContainer');
    
    if (selectedAnswer === question.correctAnswer) {
        score += 10;
        feedbackContainer.innerHTML = `
            <div style="background-color: #d4edda; color: #155724; border: 1px solid #c3e6cb; padding: 15px; border-radius: 8px;">
                <h5>�ش���ȷ??/h5>
                <p>${question.explanation}</p>
            </div>
        `;
        // ���Ŵ����Ч
        playSound('correct');
    } else {
        feedbackContainer.innerHTML = `
            <div style="background-color: #f8d7da; color: #721c24; border: 1px solid #f5c6cb; padding: 15px; border-radius: 8px;">
                <h5>�ش����??/h5>
                <p>��ȷ���ǣ�${question.correctAnswer}</p>
                <p>${question.explanation}</p>
            </div>
        `;
        // ���Ŵ����Ч
        playSound('wrong');
    }
    
    feedbackContainer.style.display = 'block';
    
    // �ӳ���ʾ��һ??    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex< testQuestions.length) {
            showQuestion(currentQuestionIndex);
            feedbackContainer.style.display = 'none';
        } else {
            showScore();
        }
    }, 3000);
}

// ��ʾ�÷�
function showScore() {
    const questionContainer = document.getElementById('questionContainer');
    const feedbackContainer = document.getElementById('feedbackContainer');
    const scoreContainer = document.getElementById('scoreContainer');
    const finalScore = document.getElementById('finalScore');
    
    questionContainer.innerHTML = '';
    feedbackContainer.style.display = 'none';
    scoreContainer.style.display = 'block';
    finalScore.textContent = score;
}

// ���²���
function restartTest() {
    initTest();
}

// ������Ч
function playSound(type) {
    try {
        // ������Ƶ����??        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        if (type === 'correct') {
            // ��ף��Ч - ��������??            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    const oscillator = audioContext.createOscillator();
                    const gainNode = audioContext.createGain();
                    
                    oscillator.connect(gainNode);
                    gainNode.connect(audioContext.destination);
                    
                    oscillator.frequency.setValueAtTime(440 + i * 100, audioContext.currentTime);
                    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
                    
                    oscillator.start(audioContext.currentTime);
                    oscillator.stop(audioContext.currentTime + 0.2);
                }, i * 100);
            }
        } else {
            // �ź���Ч - �½�����??            for (let i = 0; i < 3; i++) {
                setTimeout(() => {
                    const oscillator = audioContext.createOscillator();
                    const gainNode = audioContext.createGain();
                    
                    oscillator.connect(gainNode);
                    gainNode.connect(audioContext.destination);
                    
                    oscillator.frequency.setValueAtTime(600 - i * 150, audioContext.currentTime);
                    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
                    
                    oscillator.start(audioContext.currentTime);
                    oscillator.stop(audioContext.currentTime + 0.3);
                }, i * 150);
            }
        }
    } catch (e) {
        console.log('��Ч����ʧ��:', e);
    }
}

// ��ʾ��ť��Ϣ����
function showButtonInfo(buttonName) {
    const buttonInfo = document.getElementById('buttonInfo');
    const buttonDetails = {
        '����': '���谴ť��������˾��ע���г���ȫ����ֹƣ�ͼ�ʻ??,
        '����': '������ť���ڽ��LKJ2000��ĳЩ����״̬??,
        '��ǰ': '��ǰ��ť���ڵ�����ʾ���ϵ���ʾ���ݣ���Ӧ����????,
        '����': '������ť���ڽ������ģʽ����Ӧ���ּ�2??,
        '��λ': '��λ��ť�������û������λ��Ϣ����Ӧ����????,
        '��·??: '��·�Ű�ť����������޸Ľ�·��ţ���Ӧ���ּ�4??,
        '����': '���갴ť���������й����б���ض�λ�ã���Ӧ���ּ�5??,
        '��ѯ': '��ѯ��ť���ڲ鿴�����������ݺ���Ϣ??,
        '??: '�Ϸ���������ڲ˵���ѡ��������ѡ��??,
        'ת��': 'ת����ť���ڽ�LKJ2000���������ݵ���??,
        '�趨': '�趨��ť���ڽ���������ý���??,
        '����': '���ⰴť���ڽ�������ƶ�״̬??,
        '���': '���ť���ڵ�����ʾ���ϵ���ʾ���ݣ���Ӧ����????,
        '��??: '������ť��������������У���Ӧ����????,
        '�Զ�У��': '�Զ�У����ť�����Զ�У��ĳЩ��������Ӧ���ּ�8??,
        '����??: '����ⰴť���ڽ�������ģʽ����Ӧ���ּ�9??,
        'Ѳ��': 'Ѳ�찴ť���ڽ���Ѳ��ģʽ����Ӧ���ּ�0??,
        '??: '����������ڲ˵���ѡ��������ѡ��??,
        '??: '�·���������ڲ˵���ѡ��������ѡ��??,
        '??: '�ҷ���������ڲ˵���ѡ��������ѡ��??,
        'ȷ��': 'ȷ�ϰ�ť����ȷ��ѡ����������Ϣ??
    };
    
    const details = buttonDetails[buttonName] || '������ϸ��Ϣ';
    buttonInfo.innerHTML = `
        <h4>��ť��Ϣ</h4>
        <p><strong>��ť����??/strong>${buttonName}</p>
        <p><strong>����˵��??/strong>${details}</p>
    `;
}

// �����ť��Ϣ����
function clearButtonInfo() {
    const buttonInfo = document.getElementById('buttonInfo');
    buttonInfo.innerHTML = `
        <h4>��ť��Ϣ</h4>
        <p>�������ͣ�ڰ�ť�ϲ鿴��ϸ��??/p>
    `;
}

// ����Ƶ����??function openVideoPlayer(videoTitle) {
    const videoPlayer = document.getElementById('videoPlayer');
    const videoTitleElement = document.getElementById('videoTitle');
    videoTitleElement.textContent = videoTitle;
    videoPlayer.style.display = 'flex';
}

// �ر���Ƶ����??function closeVideoPlayer() {
    const videoPlayer = document.getElementById('videoPlayer');
    const videoElement = document.getElementById('videoElement');
    videoPlayer.style.display = 'none';
    videoElement.pause();
}

// ҳ�������ɺ�ִ??window.onload = function() {
    console.log('HXD3C�͵��������ƶ��쳣�����밲ȫ�г�ʵѵ�μ�');
    console.log('ҳ��������');
};
