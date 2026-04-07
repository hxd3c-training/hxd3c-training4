// 显示内容函数
function showContent(title) {
    const contentArea = document.getElementById('contentArea');
    
    // 特殊处理课程导学与学习目标
    if (title === '课程导学与学习目标') {
        const contentHTML = `
            <div class="course-intro-container">
                <h3>${title}</h3>
                <div class="mind-map-container">
                    <img src="图片1.png" alt="课程导学思维导图" width="100%">
                </div>
            </div>
        `;
        contentArea.innerHTML = contentHTML;
    } 
    // 特殊处理技能训练
    else if (title === '技能训练') {
        const contentHTML = `
            <div class="course-intro-container">
                <h3>${title}</h3>
                <div class="video-container">
                    <video controls width="100%" height="auto">
                        <source src="4月6日 (1)(1).mp4" type="video/mp4">
                        您的浏览器不支持视频播放
                    </video>
                </div>
            </div>
        `;
        contentArea.innerHTML = contentHTML;
    }
    // 特殊处理考核标准
    else if (title === '考核标准') {
        const contentHTML = `
            <div class="course-intro-container">
                <h3>${title}</h3>
                <div class="pdf-container" style="width: 100%; height: 800px; overflow: auto;">
                        <div class="pdf-controls">
                            <button onclick="window.open('电力机车制动解除操作实训课程（单人单张）评分表(1).pdf', '_blank')" class="download-btn">查看PDF</button>
                        </div>
                        <div id="pdf-viewer-1"></div>
                    </div>
            </div>
        `;
        contentArea.innerHTML = contentHTML;
    }
    // 特殊处理事故案例
    else if (title === '事故案例') {
        const contentHTML = `
            <div class="course-intro-container">
                <h3>${title}</h3>
                <div class="video-container">
                    <video controls width="100%" height="auto">
                        <source src="4月7日.mp4" type="video/mp4">
                        您的浏览器不支持视频播放
                    </video>
                </div>
            </div>
        `;
        contentArea.innerHTML = contentHTML;
    }
    // 特殊处理常用制动规范缓解
    else if (title === '常用制动规范缓解') {
        const contentHTML = `
            <div class="course-intro-container">
                <h3>${title}</h3>
                <div class="video-container">
                    <video controls width="100%" height="auto">
                        <source src="4月7日(1).mp4" type="video/mp4">
                        您的浏览器不支持视频播放
                    </video>
                </div>
            </div>
        `;
        contentArea.innerHTML = contentHTML;
    }
    // 特殊处理紧急制动缓解操作
    else if (title === '紧急制动缓解操作') {
        const contentHTML = `
            <div class="course-intro-container">
                <h3>${title}</h3>
                <div class="video-container">
                    <video controls width="100%" height="auto">
                        <source src="4月7日 (4).mp4" type="video/mp4">
                        您的浏览器不支持视频播放
                    </video>
                </div>
            </div>
        `;
        contentArea.innerHTML = contentHTML;
    }
    // 特殊处理触发制动监控显示
    else if (title === '触发制动监控显示') {
        const contentHTML = `
            <div class="course-intro-container">
                <h3>${title}</h3>
                <div class="video-buttons-container">
                    <button onclick="playBrakeVideo('常用制动触发')" class="brake-video-button">
                        <div class="button-icon">🚦</div>
                        <div class="button-text">常用制动触发</div>
                    </button>
                    <button onclick="playBrakeVideo('常用制动缓解')" class="brake-video-button">
                        <div class="button-icon">✅</div>
                        <div class="button-text">常用制动缓解</div>
                    </button>
                    <button onclick="playBrakeVideo('紧急制动触发')" class="brake-video-button">
                        <div class="button-icon">🚨</div>
                        <div class="button-text">紧急制动触发</div>
                    </button>
                    <button onclick="playBrakeVideo('紧急制动缓解')" class="brake-video-button">
                        <div class="button-icon">🛑</div>
                        <div class="button-text">紧急制动缓解</div>
                    </button>
                </div>
                <div id="brakeVideoPlayer" style="display: none; margin-top: 30px;">
                    <div class="video-container-with-close">
                        <button onclick="hideBrakeVideo()" class="close-video-button">×</button>
                        <video id="brakeVideo" controls width="100%" height="auto"></video>
                    </div>
                    <button onclick="hideBrakeVideo()" class="back-button" style="margin-top: 15px;">返回选择</button>
                </div>
            </div>
        `;
        contentArea.innerHTML = contentHTML;
    }
    // 特殊处理易错点解析
    else if (title === '易错点解析') {
        const contentHTML = `
            <div class="course-intro-container">
                <h3>${title}</h3>
                <div class="video-container">
                    <video controls width="100%" height="auto">
                        <source src="4月6日 (1)(6).mp4" type="video/mp4">
                        您的浏览器不支持视频播放
                    </video>
                </div>
            </div>
        `;
        contentArea.innerHTML = contentHTML;
    }
    // 特殊处理学习目标
    else if (title === '学习目标') {
        const contentHTML = `
            <div class="course-intro-container">
                <h3>${title}</h3>
                <div class="video-container">
                    <div class="video-poster" onclick="openVideoPopup('4月6日 (1).mp4')">
                        <img src="学习目标.png" alt="视频封面" class="video-thumbnail">
                        <div class="play-button-overlay">
                            <div class="play-icon">▶</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- 视频播放器弹窗 -->
            <div id="videoPlayer" class="video-player-popup">
                <div class="video-player-content">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                        <h4 id="videoTitle">视频播放</h4>
                        <button class="close-btn" onclick="closeVideoPopup()">关闭</button>
                    </div>
                    <div class="video-player">
                        <video id="videoElement" controls width="100%" height="auto">
                            <source src="4月6日 (1).mp4" type="video/mp4">
                            您的浏览器不支持视频播放
                        </video>
                    </div>
                </div>
            </div>
        `;
        contentArea.innerHTML = contentHTML;
    } 
    // 特殊处理LKJ2000显示界面认知
    else if (title === 'LKJ2000显示界面认知') {
        const contentHTML = `
            <div class="lkj2000-container">
                <h3>${title}</h3>
                <div class="lkj2000-content">
                    <div class="lkj2000-image">
                        <img src="lkj2000-display.jpg.png" alt="LKJ2000显示界面" width="100%">
                    </div>
                    <div class="lkj2000-controls">
                        <div class="control-item" onclick="playAudio()">
                            <div class="control-icon audio-icon"></div>
                            <div class="control-text">点击聆听</div>
                        </div>
                        <div class="control-item" onclick="showLearningMaterials()">
                            <div class="control-icon document-icon"></div>
                            <div class="control-text">学习资料</div>
                        </div>
                        <div class="control-item" onclick="showModuleTest()">
                            <div class="control-icon test-icon"></div>
                            <div class="control-text">模块测试</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- 音频播放器 -->
            <div id="audioPlayer" class="audio-player">
                <h4>音频播放</h4>
                <audio id="audioElement" controls>
                    <source src="audio.mp3.mp3" type="audio/mpeg">
                    您的浏览器不支持音频播放
                </audio>
                <button class="close-btn" onclick="closeAudioPlayer()">关闭</button>
            </div>
            
            <!-- 学习资料弹窗 -->
            <div id="learningMaterials" class="learning-materials">
                <div class="materials-content">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <h4>学习资料</h4>
                        <button class="close-btn" onclick="closeLearningMaterials()">关闭</button>
                    </div>
                    <div class="pdf-container">
                        <div class="pdf-controls">
                            <button onclick="window.open('显示界面识读与功能键的使用.pdf', '_blank')" class="download-btn">查看PDF</button>
                        </div>
                        <div id="pdf-viewer-2"></div>
                    </div>
                </div>
            </div>
            
            <!-- 模块测试弹窗 -->
            <div id="moduleTest" class="learning-materials">
                <div class="materials-content">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <h4>理论知识自测</h4>
                        <button class="close-btn" onclick="closeModuleTest()">关闭</button>
                    </div>
                    <div id="testContainer">
                        <div id="questionContainer"></div>
                        <div id="feedbackContainer" style="display: none; margin: 20px 0; padding: 15px; border-radius: 8px;"></div>
                        <div id="scoreContainer" style="display: none; margin: 20px 0; text-align: center;">
                            <h3>测试结果</h3>
                            <p>得分：<span id="finalScore">0</span>/100</p>
                            <button class="close-btn" onclick="restartTest()">重新测试</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        contentArea.innerHTML = contentHTML;
    } else if (title === '司机控制器认知') {
        const contentHTML = `
            <div class="lkj2000-container">
                <h3>${title}</h3>
                <div class="lkj2000-content">
                    <div class="lkj2000-image">
                        <img src="c7ba6efdce1b222955b862165f2db610.jpg" alt="调速手柄" width="100%">
                    </div>

                </div>
            </div>
            
            <!-- 音频播放器 -->
            <div id="audioPlayer" class="audio-player">
                <h4>音频播放</h4>
                <audio id="audioElement" controls>
                    <source src="audio.mp3.mp3" type="audio/mpeg">
                    您的浏览器不支持音频播放
                 </audio>
                <button class="close-btn" onclick="closeAudioPlayer()">关闭</button>
            </div>
            
            <!-- 学习资料弹窗 -->
            <div id="learningMaterials" class="learning-materials">
                <div class="materials-content">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <h4>学习资料</h4>
                        <button class="close-btn" onclick="closeLearningMaterials()">关闭</button>
                    </div>
                    <div class="pdf-container">
                        <div class="pdf-controls">
                            <button onclick="window.open('EBV电子制动阀.pdf', '_blank')" class="download-btn">查看PDF</button>
                        </div>
                        <div id="pdf-viewer-3"></div>
                    </div>
                </div>
            </div>
            
            <!-- 模块测试弹窗 -->
            <div id="moduleTest" class="learning-materials">
                <div class="materials-content">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <h4>理论知识自测</h4>
                        <button class="close-btn" onclick="closeModuleTest()">关闭</button>
                    </div>
                    <div id="testContainer">
                        <div id="questionContainer"></div>
                        <div id="feedbackContainer" style="display: none; margin: 20px 0; padding: 15px; border-radius: 8px;"></div>
                        <div id="scoreContainer" style="display: none; margin: 20px 0; text-align: center;">
                            <h3>测试结果</h3>
                            <p>得分：<span id="finalScore">0</span>/100</p>
                            <button class="close-btn" onclick="restartTest()">重新测试</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        contentArea.innerHTML = contentHTML;
    } else if (title === 'EBV及制动显示屏认知') {
        const contentHTML = `
            <div class="lkj2000-container">
                <h3>${title}</h3>
                <div class="lkj2000-content">
                    <div class="image-slider-container">
                        <div class="image-slider">
                            <div class="lkj2000-image">
                                <img src="EBV电子制动阀.jpg" alt="EBV电子制动阀">
                            </div>
                            <div class="lkj2000-image">
                                <img src="LCDM显示屏.jpg" alt="LCDM制动显示屏">
                            </div>
                        </div>
                    </div>
                    <div class="lkj2000-controls">
                        <div class="control-item" onclick="playAudio()">
                            <div class="control-icon audio-icon"></div>
                            <div class="control-text">点击聆听</div>
                        </div>
                        <div class="control-item" onclick="showLearningMaterials()">
                            <div class="control-icon document-icon"></div>
                            <div class="control-text">学习资料</div>
                        </div>
                        <div class="control-item" onclick="showModuleTest()">
                            <div class="control-icon test-icon"></div>
                            <div class="control-text">模块测试</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- 音频播放器 -->
            <div id="audioPlayer" class="audio-player">
                <h4>音频播放</h4>
                <audio id="audioElement" controls>
                    <source src="audio.mp3.mp3" type="audio/mpeg">
                    您的浏览器不支持音频播放
                 </audio>
                <button class="close-btn" onclick="closeAudioPlayer()">关闭</button>
            </div>
            
            <!-- 学习资料弹窗 -->
            <div id="learningMaterials" class="learning-materials">
                <div class="materials-content">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <h4>学习资料</h4>
                        <button class="close-btn" onclick="closeLearningMaterials()">关闭</button>
                    </div>
                    <div class="pdf-container">
                        <div class="pdf-controls">
                            <button onclick="window.open('EBV电子制动阀.pdf', '_blank')" class="download-btn">查看PDF</button>
                        </div>
                        <div id="pdf-viewer-3"></div>
                    </div>
                </div>
            </div>
            
            <!-- 模块测试弹窗 -->
            <div id="moduleTest" class="learning-materials">
                <div class="materials-content">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <h4>理论知识自测</h4>
                        <button class="close-btn" onclick="closeModuleTest()">关闭</button>
                    </div>
                    <div id="testContainer">
                        <div id="questionContainer"></div>
                        <div id="feedbackContainer" style="display: none; margin: 20px 0; padding: 15px; border-radius: 8px;"></div>
                        <div id="scoreContainer" style="display: none; margin: 20px 0; text-align: center;">
                            <h3>测试结果</h3>
                            <p>得分：<span id="finalScore">0</span>/100</p>
                            <button class="close-btn" onclick="restartTest()">重新测试</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        contentArea.innerHTML = contentHTML;
    } else if (title === '交互式按钮操作') {
        const contentHTML = `
            <div class="interactive-buttons-container">
                <h3>${title}</h3>
                <div class="interactive-buttons-wrapper">
                    <div class="image-map-container">
                        <img src="lkj2000-display.jpg.png" alt="LKJ2000按钮面板" width="100%">
                        <!-- 覆盖层按钮 -->
                        <div class="overlay-buttons">
                            <!-- 第一行按钮 -->
                            <div class="overlay-button" style="left: 2%; top: 10%; width: 8%; height: 35%;" 
                                 onmouseover="showButtonInfo('警惕'); this.style.backgroundColor='rgba(255, 0, 0, 0.3)'" 
                                 onmouseout="clearButtonInfo(); this.style.backgroundColor='transparent'"
                                 onclick="showButtonInfo('警惕')">
                            </div>
                            <div class="overlay-button" style="left: 10%; top: 10%; width: 8%; height: 35%;" 
                                 onmouseover="showButtonInfo('解锁'); this.style.backgroundColor='rgba(255, 255, 0, 0.3)'" 
                                 onmouseout="clearButtonInfo(); this.style.backgroundColor='transparent'"
                                 onclick="showButtonInfo('解锁')">
                            </div>
                            <div class="overlay-button" style="left: 18%; top: 10%; width: 8%; height: 35%;" 
                                 onmouseover="showButtonInfo('向前'); this.style.backgroundColor='rgba(0, 0, 255, 0.3)'" 
                                 onmouseout="clearButtonInfo(); this.style.backgroundColor='transparent'"
                                 onclick="showButtonInfo('向前')">
                            </div>
                            <div class="overlay-button" style="left: 26%; top: 10%; width: 8%; height: 35%;" 
                                 onmouseover="showButtonInfo('调车'); this.style.backgroundColor='rgba(0, 0, 255, 0.3)'" 
                                 onmouseout="clearButtonInfo(); this.style.backgroundColor='transparent'"
                                 onclick="showButtonInfo('调车')">
                            </div>
                            <div class="overlay-button" style="left: 34%; top: 10%; width: 8%; height: 35%;" 
                                 onmouseover="showButtonInfo('车位'); this.style.backgroundColor='rgba(0, 0, 255, 0.3)'" 
                                 onmouseout="clearButtonInfo(); this.style.backgroundColor='transparent'"
                                 onclick="showButtonInfo('车位')">
                            </div>
                            <div class="overlay-button" style="left: 42%; top: 10%; width: 8%; height: 35%;" 
                                 onmouseover="showButtonInfo('进路号'); this.style.backgroundColor='rgba(0, 0, 255, 0.3)'" 
                                 onmouseout="clearButtonInfo(); this.style.backgroundColor='transparent'"
                                 onclick="showButtonInfo('进路号')">
                            </div>
                            <div class="overlay-button" style="left: 50%; top: 10%; width: 8%; height: 35%;" 
                                 onmouseover="showButtonInfo('定标'); this.style.backgroundColor='rgba(0, 0, 255, 0.3)'" 
                                 onmouseout="clearButtonInfo(); this.style.backgroundColor='transparent'"
                                 onclick="showButtonInfo('定标')">
                            </div>
                            <div class="overlay-button" style="left: 58%; top: 10%; width: 8%; height: 35%;" 
                                 onmouseover="showButtonInfo('查询'); this.style.backgroundColor='rgba(255, 255, 255, 0.3)'" 
                                 onmouseout="clearButtonInfo(); this.style.backgroundColor='transparent'"
                                 onclick="showButtonInfo('查询')">
                            </div>
                            <div class="overlay-button" style="left: 66%; top: 10%; width: 8%; height: 35%;" 
                                 onmouseover="showButtonInfo('上'); this.style.backgroundColor='rgba(255, 255, 255, 0.3)'" 
                                 onmouseout="clearButtonInfo(); this.style.backgroundColor='transparent'"
                                 onclick="showButtonInfo('上')">
                            </div>
                            <div class="overlay-button" style="left: 74%; top: 10%; width: 8%; height: 35%;" 
                                 onmouseover="showButtonInfo('转储'); this.style.backgroundColor='rgba(255, 255, 255, 0.3)'" 
                                 onmouseout="clearButtonInfo(); this.style.backgroundColor='transparent'"
                                 onclick="showButtonInfo('转储')">
                            </div>
                            <div class="overlay-button" style="left: 82%; top: 10%; width: 8%; height: 35%;" 
                                 onmouseover="showButtonInfo('设定'); this.style.backgroundColor='rgba(255, 255, 255, 0.3)'" 
                                 onmouseout="clearButtonInfo(); this.style.backgroundColor='transparent'"
                                 onclick="showButtonInfo('设定')">
                            </div>
                            
                            <!-- 第二行按钮 -->
                            <div class="overlay-button" style="left: 10%; top: 60%; width: 8%; height: 35%;" 
                                 onmouseover="showButtonInfo('缓解'); this.style.backgroundColor='rgba(0, 255, 0, 0.3)'" 
                                 onmouseout="clearButtonInfo(); this.style.backgroundColor='transparent'"
                                 onclick="showButtonInfo('缓解')">
                            </div>
                            <div class="overlay-button" style="left: 18%; top: 60%; width: 8%; height: 35%;" 
                                 onmouseover="showButtonInfo('向后'); this.style.backgroundColor='rgba(0, 0, 255, 0.3)'" 
                                 onmouseout="clearButtonInfo(); this.style.backgroundColor='transparent'"
                                 onclick="showButtonInfo('向后')">
                            </div>
                            <div class="overlay-button" style="left: 26%; top: 60%; width: 8%; height: 35%;" 
                                 onmouseover="showButtonInfo('开车'); this.style.backgroundColor='rgba(0, 0, 255, 0.3)'" 
                                 onmouseout="clearButtonInfo(); this.style.backgroundColor='transparent'"
                                 onclick="showButtonInfo('开车')">
                            </div>
                            <div class="overlay-button" style="left: 34%; top: 60%; width: 8%; height: 35%;" 
                                 onmouseover="showButtonInfo('自动校正'); this.style.backgroundColor='rgba(0, 0, 255, 0.3)'" 
                                 onmouseout="clearButtonInfo(); this.style.backgroundColor='transparent'"
                                 onclick="showButtonInfo('自动校正')">
                            </div>
                            <div class="overlay-button" style="left: 42%; top: 60%; width: 8%; height: 35%;" 
                                 onmouseover="showButtonInfo('出入库'); this.style.backgroundColor='rgba(0, 0, 255, 0.3)'" 
                                 onmouseout="clearButtonInfo(); this.style.backgroundColor='transparent'"
                                 onclick="showButtonInfo('出入库')">
                            </div>
                            <div class="overlay-button" style="left: 50%; top: 60%; width: 8%; height: 35%;" 
                                 onmouseover="showButtonInfo('巡检'); this.style.backgroundColor='rgba(0, 0, 255, 0.3)'" 
                                 onmouseout="clearButtonInfo(); this.style.backgroundColor='transparent'"
                                 onclick="showButtonInfo('巡检')">
                            </div>
                            <div class="overlay-button" style="left: 58%; top: 60%; width: 8%; height: 35%;" 
                                 onmouseover="showButtonInfo('左'); this.style.backgroundColor='rgba(255, 255, 255, 0.3)'" 
                                 onmouseout="clearButtonInfo(); this.style.backgroundColor='transparent'"
                                 onclick="showButtonInfo('左')">
                            </div>
                            <div class="overlay-button" style="left: 66%; top: 60%; width: 8%; height: 35%;" 
                                 onmouseover="showButtonInfo('下'); this.style.backgroundColor='rgba(255, 255, 255, 0.3)'" 
                                 onmouseout="clearButtonInfo(); this.style.backgroundColor='transparent'"
                                 onclick="showButtonInfo('下')">
                            </div>
                            <div class="overlay-button" style="left: 74%; top: 60%; width: 8%; height: 35%;" 
                                 onmouseover="showButtonInfo('右'); this.style.backgroundColor='rgba(255, 255, 255, 0.3)'" 
                                 onmouseout="clearButtonInfo(); this.style.backgroundColor='transparent'"
                                 onclick="showButtonInfo('右')">
                            </div>
                            <div class="overlay-button" style="left: 82%; top: 60%; width: 8%; height: 35%;" 
                                 onmouseover="showButtonInfo('确认'); this.style.backgroundColor='rgba(255, 0, 0, 0.3)'" 
                                 onmouseout="clearButtonInfo(); this.style.backgroundColor='transparent'"
                                 onclick="showButtonInfo('确认')">
                            </div>
                        </div>
                    </div>
                </div>
                <div id="buttonInfo" class="button-info">
                    <h4>按钮信息</h4>
                    <p>将鼠标悬停在按钮上查看详细信息</p>
                </div>
            </div>
        `;
        contentArea.innerHTML = contentHTML;
    } else if (title === '步骤排序闯关') {
        const contentHTML = `
            <div class="sorting-challenge-container">
                <h3>${title}</h3>
                
                <!-- 关卡选择 -->
                <div class="level-selector">
                    <button class="level-btn active" onclick="switchLevel(1)">常用制动缓解</button>
                    <button class="level-btn" onclick="switchLevel(2)" disabled>紧急制动缓解</button>
                </div>
                
                <!-- 关卡内容 -->
                <div id="level1" class="level-content active">
                    <h4>常用制动缓解步骤排序</h4>
                    <div class="instructions">
                        <p><strong>答题说明：</strong></p>
                        <p>1. 请将左侧打乱的步骤卡片拖放到右侧对应的步骤槽中，按正确顺序排列。</p>
                        <p>2. 拖放完成后点击"检查答案"验证排序是否正确。</p>
                        <p>3. 如果排序错误，可以点击"重置"按钮重新开始。</p>
                        <p>4. <strong style="color: #ff6b6b;">注意：回答正确才能进入下一关！</strong></p>
                    </div>
                    <div class="sorting-area">
                        <div class="source-container" id="source1">
                            <div class="step-card" draggable="true" data-step="2">按压缓解键</div>
                            <div class="step-card" draggable="true" data-step="1">将司机控制器打至零位</div>
                            <div class="step-card" draggable="true" data-step="4">将自动制动阀打至运转位</div>
                            <div class="step-card" draggable="true" data-step="3">自动制动阀打至抑制位</div>
                        </div>
                        
                        <div class="target-container" id="target1">
                            <div class="target-slot" data-position="1">步骤1</div>
                            <div class="target-slot" data-position="2">步骤2</div>
                            <div class="target-slot" data-position="3">步骤3</div>
                            <div class="target-slot" data-position="4">步骤4</div>
                        </div>
                    </div>
                    
                    <div class="feedback-container">
                        <div id="feedback1"></div>
                        <div style="display: flex; gap: 10px; justify-content: center; margin-top: 15px;">
                            <button class="check-btn" onclick="checkLevel(1)">检查答案</button>
                            <button class="reset-btn" onclick="resetLevel(1)">重置</button>
                        </div>
                    </div>
                </div>
                
                <div id="level2" class="level-content">
                    <h4>紧急制动缓解步骤排序</h4>
                    <div class="instructions">
                        <p><strong>答题说明：</strong></p>
                        <p>1. 请将左侧打乱的步骤卡片拖放到右侧对应的步骤槽中，按正确顺序排列。</p>
                        <p>2. 拖放完成后点击"检查答案"验证排序是否正确。</p>
                        <p>3. 如果排序错误，可以点击"重置"按钮重新开始。</p>
                    </div>
                    <div class="sorting-area">
                        <div class="source-container" id="source2">
                            <div class="step-card" draggable="true" data-step="3">将自动制动阀打至运转位</div>
                            <div class="step-card" draggable="true" data-step="1">将司机控制器打至零位</div>
                            <div class="step-card" draggable="true" data-step="2">将自动制动阀打至紧急位</div>
                        </div>
                        
                        <div class="target-container" id="target2">
                            <div class="target-slot" data-position="1">步骤1</div>
                            <div class="target-slot" data-position="2">步骤2</div>
                            <div class="target-slot" data-position="3">步骤3</div>
                        </div>
                    </div>
                    
                    <div class="feedback-container">
                        <div id="feedback2"></div>
                        <div style="display: flex; gap: 10px; justify-content: center; margin-top: 15px;">
                            <button class="check-btn" onclick="checkLevel(2)">检查答案</button>
                            <button class="reset-btn" onclick="resetLevel(2)">重置</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        contentArea.innerHTML = contentHTML;
    } else if (title === '岗课赛证考点') {
        const contentHTML = `
            <div class="container" style="padding: 40px;">
                <div style="display: flex; gap: 30px; align-items: flex-start;">
                    <div style="flex: 1; background-color: rgba(255, 255, 255, 0.9); padding: 30px; border-radius: 12px; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);">
                        <h4 style="color: var(--primary-color); margin-bottom: 20px; text-align: center;">岗课赛证考点</h4>
                        <div class="pdf-container" style="width: 100%; height: 800px; overflow: auto;">
                            <div class="pdf-controls">
                                <button onclick="window.open('考核大纲.pdf', '_blank')" class="download-btn">查看PDF</button>
                            </div>
                            <div id="pdf-viewer-4"></div>
                        </div>
                    </div>
                    
                    <!-- 触发按钮 -->
                    <div class="control-item" onclick="showCrewAssessmentOutline()" style="flex-shrink: 0;">
                        <div class="control-icon" style="background-color: #ff6b6b;">📋</div>
                        <div class="control-text">2026年乘务员考核大纲</div>
                    </div>
                </div>
            </div>
        `;
        contentArea.innerHTML = contentHTML;
    } else if (title === '课堂即时测评') {
        const contentHTML = `
            <div class="video-wall-container">
                <h3>${title}</h3>
                
                <div style="display: flex; align-items: center; gap: 40px; justify-content: center;">
                    <div class="film-strip-container">
                    <div class="film-strip-image">
                        <img src="生成胶卷丝带背景墙(2).png" alt="胶片" class="film-background">
                        <!-- 视频框1 -->
                        <div class="film-frame-container film-frame-1">
                            <video class="film-video" muted autoplay loop>
                                <source src="首页视频.mp4" type="video/mp4">
                            </video>
                            <div class="video-overlay" onclick="openVideoPlayer('常用制动操作示范')">
                                <div class="play-button">▶</div>
                                <div class="video-title">常用制动操作示范</div>
                            </div>
                        </div>
                        <!-- 视频框2 -->
                        <div class="film-frame-container film-frame-2">
                            <video class="film-video" muted autoplay loop>
                                <source src="练习二.mp4" type="video/mp4">
                            </video>
                            <div class="video-overlay" onclick="openVideoPlayer('紧急制动解除流程')">
                                <div class="play-button">▶</div>
                                <div class="video-title">紧急制动解除流程</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- 理论知识自测按钮 -->
                <div class="control-item" onclick="showModuleTest()" style="flex-shrink: 0;">
                    <div class="control-text">理论知识自测</div>
                    <div class="control-icon test-icon" style="background-color: #ff6b6b;">🧠</div>
                </div>
            </div>
            
            <!-- 模块测试弹窗 -->
            <div id="moduleTest" class="learning-materials">
                <div class="materials-content">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <h4>理论知识自测</h4>
                        <button class="close-btn" onclick="closeModuleTest()">关闭</button>
                    </div>
                    <div id="testContainer">
                        <div id="questionContainer"></div>
                        <div id="feedbackContainer" style="display: none; margin: 20px 0; padding: 15px; border-radius: 8px;"></div>
                        <div id="scoreContainer" style="display: none; margin: 20px 0; text-align: center;">
                            <h3>测试结果</h3>
                            <p>得分：<span id="finalScore">0</span>/100</p>
                            <button class="close-btn" onclick="restartTest()">重新测试</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- 视频播放器弹窗 -->
            <div id="videoPlayer" class="video-player-popup">
                <div class="video-player-content">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                        <h4 id="videoTitle">视频播放</h4>
                        <button class="close-btn" onclick="closeVideoPlayer()">关闭</button>
                    </div>
                    <div class="video-player">
                        <video id="videoElement" controls width="100%" height="auto">
                            <source src="首页视频.mp4" type="video/mp4">
                            您的浏览器不支持视频播放
                        </video>
                    </div>
                </div>
            </div>
        `;
        contentArea.innerHTML = contentHTML;
    } else {
        // 创建通用内容展示HTML
        const contentHTML = `
            <div class="content-display">
                <h3>${title}</h3>
                <p>您选择了：${title}</p>
                <p>这里是${title}的详细内容展示区域。</p>
                <p>您可以根据实际需求在这里添加具体的课件内容、视频、图片等多媒体素材。</p>
            </div>
        `;
        
        // 更新内容区域
        contentArea.innerHTML = contentHTML;
    }
}

// 显示欢迎页面函数 - 显示视频封面
function showWelcome() {
    const contentArea = document.getElementById('contentArea');
    
    // 创建视频封面HTML
    const videoHTML = `
        <!-- 视频播放器 -->
        <div class="video-container">
            <div class="video-poster" onclick="openVideoPopup('首页视频.mp4')">
                <img src="4月6日-封面.jpg" alt="视频封面" class="video-thumbnail">
                <div class="play-button-overlay">
                    <div class="play-icon">▶</div>
                </div>
            </div>
        </div>
    `;
    
    // 更新内容区域
    contentArea.innerHTML = videoHTML;
}

// 弹窗播放视频函数
function openVideoPopup(videoPath) {
    const popupHTML = `
        <div class="video-popup-overlay" onclick="closeVideoPopup()">
            <div class="video-popup" onclick="event.stopPropagation()">
                <div class="popup-header">
                    <h4>视频播放</h4>
                    <button class="close-btn" onclick="closeVideoPopup()">×</button>
                </div>
                <div class="popup-content">
                    <video controls width="100%" height="auto">
                        <source src="${videoPath}" type="video/mp4">
                        您的浏览器不支持视频播放
                    </video>
                </div>
            </div>
        </div>
    `;
    
    // 创建弹窗元素
    const popupDiv = document.createElement('div');
    popupDiv.innerHTML = popupHTML;
    popupDiv.id = 'videoPopup';
    
    // 添加到页面
    document.body.appendChild(popupDiv);
    
    // 自动播放视频
    setTimeout(() => {
        const video = popupDiv.querySelector('video');
        if (video) {
            video.play().catch(e => {
                console.log('视频播放失败:', e);
            });
        }
    }, 100);
}

// 关闭视频弹窗函数
function closeVideoPopup() {
    const popup = document.getElementById('videoPopup');
    if (popup) {
        popup.remove();
    }
}

// 计算得分函数
function calculateScores() {
    const rows = document.querySelectorAll('.assessment-table tbody tr:not(:last-child)');
    let totalScore = 0;
    
    rows.forEach((row, index) => {
        const inputs = row.querySelectorAll('.score-input');
        const finalScoreCell = row.querySelector('.final-score');
        
        let sum = 0;
        let count = 0;
        
        inputs.forEach(input => {
            const value = parseFloat(input.value);
            if (!isNaN(value)) {
                sum += value;
                count++;
            }
        });
        
        const average = count > 0 ? Math.round(sum / count) : 0;
        finalScoreCell.textContent = average;
        totalScore += average;
    });
    
    document.querySelector('.total-score').textContent = totalScore;
}

// 重置评分函数
function resetScores() {
    const inputs = document.querySelectorAll('.score-input');
    inputs.forEach(input => {
        input.value = '';
    });
    
    const finalScores = document.querySelectorAll('.final-score');
    finalScores.forEach(cell => {
        cell.textContent = '-';
    });
    
    document.querySelector('.total-score').textContent = '0';
}

// 显示乘务员考核大纲函数
function showCrewAssessmentOutline() {
    const contentHTML = `
        <div class="container" style="padding: 40px;">
            <div style="background-color: rgba(255, 255, 255, 0.9); padding: 30px; border-radius: 12px; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px;">
                    <h4 style="color: var(--primary-color); margin: 0;">2026年乘务员考核大纲</h4>
                    <button class="close-btn" onclick="showContent('岗课赛证考点')">返回</button>
                </div>
                
                <div style="text-align: center; margin-bottom: 30px;">
                    <h5 style="color: var(--primary-color); margin-bottom: 20px;">请选择要查看的文档</h5>
                    
                    <div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;">
                        <!-- 第一个PDF选项 -->
                        <div class="control-item" onclick="showPDFDocument('2026年铁路机车车辆驾驶人员资格考试大纲-专用铁路及铁路专用线不跨线作业范围.pdf', '专用铁路及铁路专用线不跨线作业范围')">
                            <div class="control-icon" style="background-color: #0056b3;">🚂</div>
                            <div class="control-text">专用铁路及铁路专用线不跨线作业范围</div>
                        </div>
                        
                        <!-- 第二个PDF选项 -->
                        <div class="control-item" onclick="showPDFDocument('2026年铁路机车车辆驾驶人员资格考试大纲-国铁营业线作业范围.pdf', '国铁营业线作业范围')">
                            <div class="control-icon" style="background-color: #28a745;">🛤️</div>
                            <div class="control-text">国铁营业线作业范围</div>
                        </div>
                        
                        <!-- 第三个PDF选项 -->
                        <div class="control-item" onclick="showPDFDocument('2026年铁路机车车辆驾驶人员资格考试大纲-城际及市域（郊）铁路不跨线作业范围(1).pdf', '城际及市域（郊）铁路不跨线作业范围')">
                            <div class="control-icon" style="background-color: #ff6b6b;">🏙️</div>
                            <div class="control-text">城际及市域（郊）铁路不跨线作业范围</div>
                        </div>
                    </div>
                </div>
                
                <!-- PDF显示区域 -->
                <div id="pdfDisplayArea" style="display: none;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                        <h5 id="pdfTitle" style="color: var(--primary-color); margin: 0;"></h5>
                        <button class="close-btn" onclick="hidePDFDocument()">关闭文档</button>
                    </div>
                    <div class="pdf-container" style="width: 100%; height: 800px; overflow: auto;">
                        <div id="pdf-viewer-5"></div>
                    </div>
                </div>
            </div>
        </div>
    `;
    contentArea.innerHTML = contentHTML;
}

// 显示PDF文档函数
function showPDFDocument(pdfPath, pdfTitle) {
    const pdfDisplayArea = document.getElementById('pdfDisplayArea');
    const pdfTitleElement = document.getElementById('pdfTitle');
    
    pdfTitleElement.textContent = pdfTitle;
    pdfDisplayArea.style.display = 'block';
    
    // 使用PDF.js渲染PDF
    renderPDFWithPDFJS(pdfPath, 'pdf-viewer-5');
}

// 隐藏PDF文档函数
function hidePDFDocument() {
    const pdfDisplayArea = document.getElementById('pdfDisplayArea');
    const pdfViewer = document.getElementById('pdf-viewer-5');
    
    // 清空PDF查看器
    if (pdfViewer) {
        pdfViewer.innerHTML = '';
    }
    pdfDisplayArea.style.display = 'none';
}

// 播放音频函数
function playAudio() {
    const audioPlayer = document.getElementById('audioPlayer');
    const audioElement = document.getElementById('audioElement');
    
    // 获取当前页面标题
    const currentTitle = document.querySelector('h3').textContent;
    
    // 根据当前页面设置音频文件
    if (currentTitle === 'EBV及制动显示屏认知') {
        audioElement.src = '4月6日 (2).mp3';
    } else {
        audioElement.src = 'audio.mp3.mp3';
    }
    
    audioPlayer.style.display = 'block';
}

// 关闭音频播放器函数
function closeAudioPlayer() {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.style.display = 'none';
    // 暂停音频
    const audioElement = document.getElementById('audioElement');
    if (audioElement) {
        audioElement.pause();
    }
}

// 显示学习资料函数
function showLearningMaterials() {
    const learningMaterials = document.getElementById('learningMaterials');
    learningMaterials.style.display = 'flex';
}

// 关闭学习资料函数
function closeLearningMaterials() {
    const learningMaterials = document.getElementById('learningMaterials');
    learningMaterials.style.display = 'none';
}

// PDF搜索函数
function searchInPDF() {
    const searchTerm = document.getElementById('searchInput').value;
    if (!searchTerm) {
        alert('请输入搜索关键词');
        return;
    }
    
    const pdfEmbed = document.getElementById('pdfDocument');
    
    // 尝试使用浏览器PDF查看器的搜索功能
    if (pdfEmbed.contentWindow && pdfEmbed.contentWindow.find) {
        pdfEmbed.contentWindow.find(searchTerm);
    } else if (pdfEmbed.contentDocument && pdfEmbed.contentDocument.find) {
        pdfEmbed.contentDocument.find(searchTerm);
    } else {
        // 如果浏览器不支持直接搜索，提示用户
        alert('您的浏览器可能不支持PDF内置搜索功能，请尝试使用PDF查看器的搜索功能');
    }
}

// 嵌入文档函数
function embedDocument() {
    const docLink = document.getElementById('docLink').value;
    const documentDisplay = document.getElementById('documentDisplay');
    
    if (docLink) {
        // 检查是否是PDF链接
        if (docLink.includes('.pdf')) {
            documentDisplay.innerHTML = `
                <h5>文档预览：</h5>
                <embed src="${docLink}" type="application/pdf" width="100%" height="400px">
            `;
        } else if (docLink.includes('.doc') || docLink.includes('.docx')) {
            // 对于Word文档，使用Google Docs预览
            const googleDocsUrl = `https://docs.google.com/gview?url=${encodeURIComponent(docLink)}&embedded=true`;
            documentDisplay.innerHTML = `
                <h5>文档预览：</h5>
                <iframe src="${googleDocsUrl}" width="100%" height="400px" frameborder="0"></iframe>
            `;
        } else {
            // 其他链接类型
            documentDisplay.innerHTML = `
                <h5>文档链接：</h5>
                <a href="${docLink}" target="_blank">点击打开文档</a>
            `;
        }
    } else {
        documentDisplay.innerHTML = '<p>请输入文档链接</p>';
    }
}

// 监听文件上传
document.addEventListener('change', function(e) {
    if (e.target.id === 'fileUpload') {
        const file = e.target.files[0];
        const documentDisplay = document.getElementById('documentDisplay');
        
        if (file) {
            // 检查文件类型
            if (file.type === 'application/pdf') {
                const reader = new FileReader();
                reader.onload = function(e) {
                    documentDisplay.innerHTML = `
                        <h5>文档预览：</h5>
                        <embed src="${e.target.result}" type="application/pdf" width="100%" height="400px">
                    `;
                };
                reader.readAsDataURL(file);
            } else if (file.type.includes('word') || file.name.includes('.doc') || file.name.includes('.docx')) {
                documentDisplay.innerHTML = `
                    <h5>文件上传成功：</h5>
                    <p>文件名：${file.name}</p>
                    <p>文件大小：${(file.size / 1024).toFixed(2)} KB</p>
                    <p>注意：Word文档需要下载后查看</p>
                `;
            } else {
                documentDisplay.innerHTML = `
                    <h5>文件上传成功：</h5>
                    <p>文件名：${file.name}</p>
                    <p>文件大小：${(file.size / 1024).toFixed(2)} KB</p>
                `;
            }
        }
    }
});

// LKJ2000测试题目数据
const lkj2000TestQuestions = [
    {
        question: 'LKJ2000 装置中，执行常用制动后缓解的按键是（）',
        options: ['A. 解锁', 'B. 缓解', 'C. 警惕', 'D. 确认'],
        correctAnswer: 'B',
        explanation: '执行常用制动后缓解的按键是缓解键。'
    },
    {
        question: '显示屏右侧状态灯中，"常用"灯点亮表示装置（）',
        options: ['A. 发出紧急制动指令', 'B. 发出常用制动指令', 'C. 处于降级状态', 'D. 系统故障'],
        correctAnswer: 'B',
        explanation: '显示屏右侧状态灯中，"常用"灯点亮表示装置发出常用制动指令。'
    },
    {
        question: '显示屏右侧"紧急"灯点亮表示（）',
        options: ['A. 装置发出紧急制动指令', 'B. 常用制动中', 'C. 正在缓解', 'D. 调车状态'],
        correctAnswer: 'A',
        explanation: '显示屏右侧"紧急"灯点亮表示装置发出紧急制动指令。'
    },
    {
        question: '以下哪个按键不能用于缓解制动（）',
        options: ['A. 缓解键', 'B. 警惕键', 'C. 设定键', 'D. 警惕应答按钮'],
        correctAnswer: 'C',
        explanation: '设定键不能用于缓解制动，缓解键、警惕键和警惕应答按钮都可以用于缓解制动。'
    },
    {
        question: '装置发出紧急制动时，状态显示区会点亮的指示灯是（）',
        options: ['A. 常用', 'B. 卸载', 'C. 紧急', 'D. 解锁'],
        correctAnswer: 'C',
        explanation: '装置发出紧急制动时，状态显示区会点亮紧急指示灯。'
    }
];

// EBV测试题目数据
const ebvTestQuestions = [
    {
        question: '自动制动手柄抑制位的作用不包括（）',
        options: ['A. 提供全制动', 'B. 抑制超速/安全惩罚制动', 'C. 惩罚制动复位', 'D. 仅控制机车制动缸'],
        correctAnswer: 'D',
        explanation: '自动制动手柄抑制位的作用包括提供全制动、抑制超速/安全惩罚制动、惩罚制动复位，但不包括仅控制机车制动缸。'
    },
    {
        question: '自动制动手柄置于紧急制动位时，EBV内部会动作的部件是（）',
        options: ['A. 电磁阀', 'B. 机械阀（放风阀）', 'C. 传感器', 'D. 继电器'],
        correctAnswer: 'B',
        explanation: '自动制动手柄置于紧急制动位时，EBV内部的机械阀（放风阀）会动作。'
    },
    {
        question: '非操纵端 EBV 自动制动手柄必须锁定在（）',
        options: ['A. 运转位', 'B. 初制动位', 'C. 重联位', 'D. 全制动位'],
        correctAnswer: 'C',
        explanation: '非操纵端 EBV 自动制动手柄必须锁定在重联位。'
    },
    {
        question: '自动制动手柄运转位的核心作用是（）',
        options: ['A. 施加制动', 'B. 缓解制动', 'C. 保持制动', 'D. 紧急制动'],
        correctAnswer: 'B',
        explanation: '自动制动手柄运转位的核心作用是缓解制动。'
    }
];

// 显示模块测试函数
function showModuleTest() {
    const moduleTest = document.getElementById('moduleTest');
    moduleTest.style.display = 'flex';
    initTest();
}

// 关闭模块测试函数
function closeModuleTest() {
    const moduleTest = document.getElementById('moduleTest');
    moduleTest.style.display = 'none';
}

// 初始化测试
let currentQuestionIndex = 0;
let score = 0;
let currentTestQuestions;

function initTest() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('feedbackContainer').style.display = 'none';
    document.getElementById('scoreContainer').style.display = 'none';
    
    // 根据当前页面选择正确的测试题数组
    const currentTitle = document.querySelector('h3').textContent;
    if (currentTitle === 'LKJ2000显示界面认知') {
        currentTestQuestions = lkj2000TestQuestions;
    } else if (currentTitle === 'EBV及制动显示屏认知') {
        currentTestQuestions = ebvTestQuestions;
    } else {
        currentTestQuestions = ebvTestQuestions; // 默认使用EBV测试题
    }
    
    showQuestion(currentQuestionIndex);
}

// 显示题目
function showQuestion(index) {
    const questionContainer = document.getElementById('questionContainer');
    const question = currentTestQuestions[index];
    
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
            <h5>第 ${index + 1} 题：${question.question}</h5>
        </div>
        <div style="margin-bottom: 20px;">
            ${optionsHTML}
        </div>
    `;
}

// 回答问题
function answerQuestion(selectedAnswer) {
    const question = currentTestQuestions[currentQuestionIndex];
    const feedbackContainer = document.getElementById('feedbackContainer');
    
    if (selectedAnswer === question.correctAnswer) {
        score += 10;
        feedbackContainer.innerHTML = `
            <div style="background-color: #d4edda; color: #155724; border: 1px solid #c3e6cb; padding: 15px; border-radius: 8px;">
                <h5>回答正确！😊</h5>
                <p>${question.explanation}</p>
            </div>
        `;
        // 播放答对音效
        playSound('correct');
        // 显示笑脸动画
        showEmojiAnimation('😊');
    } else {
        feedbackContainer.innerHTML = `
            <div style="background-color: #f8d7da; color: #721c24; border: 1px solid #f5c6cb; padding: 15px; border-radius: 8px;">
                <h5>回答错误！😢</h5>
                <p>正确答案是：${question.correctAnswer}</p>
                <p>${question.explanation}</p>
            </div>
        `;
        // 播放答错音效
        playSound('wrong');
        // 显示哭脸动画
        showEmojiAnimation('😢');
    }
    
    feedbackContainer.style.display = 'block';
    
    // 延迟显示下一题
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < currentTestQuestions.length) {
            showQuestion(currentQuestionIndex);
            feedbackContainer.style.display = 'none';
        } else {
            showScore();
        }
    }, 3000);
}

// 显示得分
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

// 重新测试
function restartTest() {
    initTest();
}

// 播放音效
function playSound(type) {
    try {
        // 创建音频上下文
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        if (type === 'correct') {
            // 庆祝音效 - 更加夸张的上升音调
            for (let i = 0; i< 8; i++) {
                setTimeout(() =>{
                    const oscillator = audioContext.createOscillator();
                    const gainNode = audioContext.createGain();
                    
                    oscillator.connect(gainNode);
                    gainNode.connect(audioContext.destination);
                    
                    // 使用明亮的三角波
                    oscillator.type = 'triangle';
                    // 更大的音程跳跃
                    oscillator.frequency.setValueAtTime(330 + i * 150, audioContext.currentTime);
                    // 更大的音量
                    gainNode.gain.setValueAtTime(0.6, audioContext.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.25);
                    
                    oscillator.start(audioContext.currentTime);
                    oscillator.stop(audioContext.currentTime + 0.25);
                }, i * 80);
            }
            
            // 添加额外的华丽音效
            setTimeout(() => {
                for (let i = 0; i< 5; i++) {
                    setTimeout(() =>{
                        const oscillator = audioContext.createOscillator();
                        const gainNode = audioContext.createGain();
                        
                        oscillator.connect(gainNode);
                        gainNode.connect(audioContext.destination);
                        
                        oscillator.type = 'sine';
                        oscillator.frequency.setValueAtTime(880 + Math.random() * 220, audioContext.currentTime);
                        gainNode.gain.setValueAtTime(0.4, audioContext.currentTime);
                        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);
                        
                        oscillator.start(audioContext.currentTime);
                        oscillator.stop(audioContext.currentTime + 0.15);
                    }, i * 50);
                }
            }, 640);
        } else if (type === 'wrong') {
            // 遗憾音效 - 更加夸张的下降音调
            for (let i = 0; i< 6; i++) {
                setTimeout(() =>{
                    const oscillator = audioContext.createOscillator();
                    const gainNode = audioContext.createGain();
                    
                    oscillator.connect(gainNode);
                    gainNode.connect(audioContext.destination);
                    
                    // 使用沉闷的锯齿波
                    oscillator.type = 'sawtooth';
                    // 更大的下降幅度
                    oscillator.frequency.setValueAtTime(880 - i * 200, audioContext.currentTime);
                    // 更大的音量
                    gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.35);
                    
                    oscillator.start(audioContext.currentTime);
                    oscillator.stop(audioContext.currentTime + 0.35);
                }, i * 100);
            }
            
            // 添加额外的低沉音效
            setTimeout(() => {
                for (let i = 0; i< 3; i++) {
                    setTimeout(() =>{
                        const oscillator = audioContext.createOscillator();
                        const gainNode = audioContext.createGain();
                        
                        oscillator.connect(gainNode);
                        gainNode.connect(audioContext.destination);
                        
                        oscillator.type = 'square';
                        oscillator.frequency.setValueAtTime(110 + i * 55, audioContext.currentTime);
                        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
                        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
                        
                        oscillator.start(audioContext.currentTime);
                        oscillator.stop(audioContext.currentTime + 0.5);
                    }, i * 200);
                }
            }, 600);
        } else if (type === 'victory') {
            // 胜利音效 - 更加浮夸的旋律
            const notes = [523, 587, 659, 784, 784, 659, 587, 523, 659, 784, 880, 988, 988, 880, 784, 659];
            notes.forEach((note, index) =>{
                setTimeout(() => {
                    const oscillator = audioContext.createOscillator();
                    const gainNode = audioContext.createGain();
                    
                    oscillator.connect(gainNode);
                    gainNode.connect(audioContext.destination);
                    
                    // 使用三角波更加明亮
                    oscillator.type = 'triangle';
                    oscillator.frequency.setValueAtTime(note, audioContext.currentTime);
                    
                    // 更大的音量和更华丽的效果
                    gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4);
                    
                    oscillator.start(audioContext.currentTime);
                    oscillator.stop(audioContext.currentTime + 0.4);
                }, index * 200);
            });
            
            // 添加额外的华丽音效
            setTimeout(() => {
                for (let i = 0; i< 10; i++) {
                    setTimeout(() =>{
                        const oscillator = audioContext.createOscillator();
                        const gainNode = audioContext.createGain();
                        
                        oscillator.connect(gainNode);
                        gainNode.connect(audioContext.destination);
                        
                        oscillator.type = 'sine';
                        oscillator.frequency.setValueAtTime(880 + Math.random() * 440, audioContext.currentTime);
                        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
                        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
                        
                        oscillator.start(audioContext.currentTime);
                        oscillator.stop(audioContext.currentTime + 0.2);
                    }, i * 50);
                }
            }, notes.length * 200);
        }
    } catch (e) {
        console.log('音效播放失败:', e);
    }
}

// 显示按钮信息函数
function showButtonInfo(buttonName) {
    const buttonInfo = document.getElementById('buttonInfo');
    const buttonDetails = {
        '警惕': '警惕按钮用于提醒司机注意行车安全，防止疲劳驾驶。',
        '解锁': '解锁按钮用于解除LKJ2000的某些限制状态。',
        '向前': '向前按钮用于调整显示屏上的显示内容，对应数字键1。',
        '调车': '调车按钮用于进入调车模式，对应数字键2。',
        '车位': '车位按钮用于设置或调整车位信息，对应数字键3。',
        '进路号': '进路号按钮用于输入或修改进路编号，对应数字键4。',
        '定标': '定标按钮用于在运行过程中标记特定位置，对应数字键5。',
        '查询': '查询按钮用于查看各种运行数据和信息。',
        '上': '上方向键用于在菜单或选项中向上选择。',
        '转储': '转储按钮用于将LKJ2000的运行数据导出。',
        '设定': '设定按钮用于进入参数设置界面。',
        '缓解': '缓解按钮用于解除常用制动状态。',
        '向后': '向后按钮用于调整显示屏上的显示内容，对应数字键6。',
        '开车': '开车按钮用于启动机车运行，对应数字键7。',
        '自动校正': '自动校正按钮用于自动校正某些参数，对应数字键8。',
        '出入库': '出入库按钮用于进入出入库模式，对应数字键9。',
        '巡检': '巡检按钮用于进入巡检模式，对应数字键0。',
        '左': '左方向键用于在菜单或选项中向左选择。',
        '下': '下方向键用于在菜单或选项中向下选择。',
        '右': '右方向键用于在菜单或选项中向右选择。',
        '确认': '确认按钮用于确认选择或输入的信息。'
    };
    
    const details = buttonDetails[buttonName] || '暂无详细信息';
    buttonInfo.innerHTML = `
        <h4>按钮信息</h4>
        <p><strong>按钮名称：</strong>${buttonName}</p>
        <p><strong>功能说明：</strong>${details}</p>
    `;
}

// 清除按钮信息函数
function clearButtonInfo() {
    const buttonInfo = document.getElementById('buttonInfo');
    buttonInfo.innerHTML = `
        <h4>按钮信息</h4>
        <p>将鼠标悬停在按钮上查看详细信息</p>
    `;
}

// 打开视频播放器
function openVideoPlayer(videoTitle) {
    const videoPlayer = document.getElementById('videoPlayer');
    const videoTitleElement = document.getElementById('videoTitle');
    const videoElement = document.getElementById('videoElement');
    
    videoTitleElement.textContent = videoTitle;
    
    // 暂停当前视频并重置
    videoElement.pause();
    videoElement.currentTime = 0;
    
    // 根据视频标题设置对应的视频源
    if (videoTitle === '常用制动操作示范') {
        videoElement.src = '练习1.mp4';
    } else if (videoTitle === '紧急制动解除流程') {
        videoElement.src = '练习二.mp4';
    }
    
    // 强制重新加载视频
    videoElement.load();
    
    videoPlayer.style.display = 'flex';
}

// 关闭视频播放器
function closeVideoPlayer() {
    const videoPlayer = document.getElementById('videoPlayer');
    const videoElement = document.getElementById('videoElement');
    videoPlayer.style.display = 'none';
    videoElement.pause();
    videoElement.currentTime = 0;
}

// 步骤排序闯关功能
let draggedItem = null;
let level1Completed = false;

// 初始化拖放功能
function initDragAndDrop() {
    const cards = document.querySelectorAll('.step-card');
    const slots = document.querySelectorAll('.target-slot');
    
    cards.forEach(card => {
        card.addEventListener('dragstart', handleDragStart);
        card.addEventListener('dragend', handleDragEnd);
    });
    
    slots.forEach(slot => {
        slot.addEventListener('dragover', handleDragOver);
        slot.addEventListener('drop', handleDrop);
        slot.addEventListener('dragenter', handleDragEnter);
        slot.addEventListener('dragleave', handleDragLeave);
    });
}

function handleDragStart(e) {
    draggedItem = this;
    setTimeout(() => this.style.opacity = '0.5', 0);
}

function handleDragEnd(e) {
    this.style.opacity = '1';
    document.querySelectorAll('.target-slot').forEach(slot => {
        slot.style.backgroundColor = '';
    });
}

function handleDragOver(e) {
    e.preventDefault();
    return false;
}

function handleDragEnter(e) {
    e.preventDefault();
    this.style.backgroundColor = 'rgba(0, 123, 255, 0.1)';
}

function handleDragLeave(e) {
    this.style.backgroundColor = '';
}

function handleDrop(e) {
    e.preventDefault();
    this.style.backgroundColor = '';
    
    if (this.querySelector('.step-card')) {
        return;
    }
    
    this.appendChild(draggedItem);
    draggedItem = null;
}

// 切换关卡
function switchLevel(level) {
    document.querySelectorAll('.level-content').forEach(content => {
        content.classList.remove('active');
    });
    document.querySelectorAll('.level-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    document.getElementById('level' + level).classList.add('active');
    document.querySelectorAll('.level-btn')[level - 1].classList.add('active');
    
    // 重新初始化拖放功能
    setTimeout(() => {
        initDragAndDrop();
    }, 100);
}

// 显示表情动画
function showEmojiAnimation(emoji) {
    const emojiElement = document.createElement('div');
    emojiElement.className = 'emoji-animation';
    emojiElement.textContent = emoji;
    const container = document.querySelector('.container');
    container.appendChild(emojiElement);
    
    // 动画结束后移除元素
    setTimeout(() => {
        emojiElement.remove();
    }, 2000);
}

// 使用PDF.js渲染PDF文档
function renderPDFWithPDFJS(pdfPath, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    // 清空容器
    container.innerHTML = '<div class="loading-message">正在加载PDF文档...</div>';
    
    // 设置PDF.js工作器
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js';
    
    // 获取PDF文档
    pdfjsLib.getDocument(pdfPath).promise.then(pdf => {
        container.innerHTML = '';
        
        // 渲染每一页
        for (let i = 1; i <= pdf.numPages; i++) {
            const pageContainer = document.createElement('div');
            pageContainer.className = 'pdf-page';
            
            const canvas = document.createElement('canvas');
            pageContainer.appendChild(canvas);
            container.appendChild(pageContainer);
            
            // 渲染页面
            pdf.getPage(i).then(page => {
                const viewport = page.getViewport({ scale: 1.5 });
                canvas.height = viewport.height;
                canvas.width = viewport.width;
                
                const renderContext = {
                    canvasContext: canvas.getContext('2d'),
                    viewport: viewport
                };
                
                page.render(renderContext);
            });
        }
    }).catch(error => {
        container.innerHTML = '<div class="error-message">PDF加载失败，请点击"查看PDF"按钮查看</div>';
        console.error('PDF加载失败:', error);
    });
}

// 播放语音提示
function speak(text) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.lang = 'zh-CN';
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}

// 检查答案
function checkLevel(level) {
    const targetContainer = document.getElementById('target' + level);
    const slots = targetContainer.querySelectorAll('.target-slot');
    let allCorrect = true;
    
    slots.forEach((slot, index) => {
        const card = slot.querySelector('.step-card');
        if (!card) {
            allCorrect = false;
            return;
        }
        
        const expectedStep = index + 1;
        const actualStep = parseInt(card.getAttribute('data-step'));
        
        if (actualStep !== expectedStep) {
            allCorrect = false;
        }
    });
    
    const feedback = document.getElementById('feedback' + level);
    
    if (allCorrect) {
        // 播放正确音效
        playSound('correct');
        
        // 播放语音提示
        speak('恭喜你回答正确');
        
        // 显示笑脸动画
        showEmojiAnimation('😊');
        
        feedback.innerHTML = '<div class="success-message">✓ 恭喜！步骤排序正确！</div>';
        
        if (level === 1) {
            level1Completed = true;
            document.querySelectorAll('.level-btn')[1].disabled = false;
            setTimeout(() => {
                switchLevel(2);
            }, 1500);
        } else {
            feedback.innerHTML += '<div class="success-message">🎉 恭喜您完成所有关卡！</div>';
            
            // 播放胜利音乐
            playSound('victory');
            
            // 显示庆祝效果
            showCelebration();
        }
    } else {
        // 播放错误音效
        playSound('wrong');
        
        // 播放语音提示
        speak('回答错误，再来一遍');
        
        // 显示哭脸动画
        showEmojiAnimation('😢');
        
        feedback.innerHTML = '<div class="error-message">✗ 步骤排序不正确，请重新排序！</div>';
    }
}

// 重置关卡
function resetLevel(level) {
    const sourceContainer = document.getElementById('source' + level);
    const targetContainer = document.getElementById('target' + level);
    const feedback = document.getElementById('feedback' + level);
    
    // 将所有卡片从目标槽中移回源容器
    const cards = targetContainer.querySelectorAll('.step-card');
    cards.forEach(card => {
        sourceContainer.appendChild(card);
    });
    
    // 清空反馈信息
    feedback.innerHTML = '';
    
    // 重新初始化拖放功能
    initDragAndDrop();
}

// 显示庆祝效果
function showCelebration() {
    const celebrationContainer = document.createElement('div');
    celebrationContainer.className = 'celebration-container';
    document.body.appendChild(celebrationContainer);
    
    // 创建100个彩带粒子
    for (let i = 0; i< 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        
        // 随机颜色
        const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#FFFFFF'];
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // 随机大小
        const size = Math.random() * 10 + 5;
        confetti.style.width = size + 'px';
        confetti.style.height = size + 'px';
        
        // 随机位置
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-20px';
        
        // 随机动画延迟和持续时间
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        
        celebrationContainer.appendChild(confetti);
    }
    
    // 创建烟花效果
    for (let i = 0; i < 20; i++) {
        setTimeout(() =>{
            createFirework();
        }, i * 500);
    }
    
    // 3秒后移除庆祝效果
    setTimeout(() => {
        celebrationContainer.remove();
    }, 5000);
}

// 创建烟花效果
function createFirework() {
    const firework = document.createElement('div');
    firework.className = 'firework';
    
    // 随机位置
    firework.style.left = Math.random() * 100 + '%';
    firework.style.top = Math.random() * 50 + '%';
    
    document.body.appendChild(firework);
    
    // 2秒后移除烟花
    setTimeout(() => {
        firework.remove();
    }, 2000);
}

// 在页面内容加载完成后初始化拖放功能
document.addEventListener('DOMContentLoaded', function() {
    // 监听内容区域变化
    const contentArea = document.getElementById('contentArea');
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                // 检查是否包含步骤排序闯关内容
                if (contentArea.querySelector('.sorting-challenge-container')) {
                    setTimeout(() => {
                        initDragAndDrop();
                    }, 100);
                }
                // 检查是否包含PDF查看器
                if (contentArea.querySelector('[id^="pdf-viewer-"]')) {
                    setTimeout(() => {
                        renderPDFsWhenReady();
                    }, 100);
                }
            }
        });
    });
    
    observer.observe(contentArea, { childList: true, subtree: true });
});

// 当内容显示完成后渲染PDF
function renderPDFsWhenReady() {
    // 检查并渲染各个PDF查看器
    if (document.getElementById('pdf-viewer-1')) {
        renderPDFWithPDFJS('电力机车制动解除操作实训课程（单人单张）评分表(1).pdf', 'pdf-viewer-1');
    }
    if (document.getElementById('pdf-viewer-2')) {
        renderPDFWithPDFJS('显示界面识读与功能键的使用.pdf', 'pdf-viewer-2');
    }
    if (document.getElementById('pdf-viewer-3')) {
        renderPDFWithPDFJS('EBV电子制动阀.pdf', 'pdf-viewer-3');
    }
    if (document.getElementById('pdf-viewer-4')) {
        renderPDFWithPDFJS('考核大纲.pdf', 'pdf-viewer-4');
    }
}

// 播放制动视频
function playBrakeVideo(videoType) {
    const buttonsContainer = document.querySelector('.video-buttons-container');
    const videoPlayer = document.getElementById('brakeVideoPlayer');
    const videoElement = document.getElementById('brakeVideo');
    
    // 隐藏按钮容器，显示视频播放器
    buttonsContainer.style.display = 'none';
    videoPlayer.style.display = 'block';
    
    // 根据视频类型设置视频源
    let videoSrc = '';
    switch(videoType) {
        case '常用制动触发':
            videoSrc = '常用制动报警-1.mp4';
            break;
        case '常用制动缓解':
            videoSrc = '常用制动解除-1.mp4';
            break;
        case '紧急制动触发':
            videoSrc = '紧急制动报警-1.mp4';
            break;
        case '紧急制动缓解':
            videoSrc = '紧急制动解除-1.mp4';
            break;
        default:
            videoSrc = '';
    }
    
    if (videoSrc) {
        videoElement.src = videoSrc;
        videoElement.load();
    }
}

// 隐藏制动视频
function hideBrakeVideo() {
    const buttonsContainer = document.querySelector('.video-buttons-container');
    const videoPlayer = document.getElementById('brakeVideoPlayer');
    const videoElement = document.getElementById('brakeVideo');
    
    // 暂停视频并重置
    if (videoElement) {
        videoElement.pause();
        videoElement.currentTime = 0;
        videoElement.src = '';
    }
    
    // 显示按钮容器，隐藏视频播放器
    buttonsContainer.style.display = 'flex';
    videoPlayer.style.display = 'none';
}

// 页面加载完成后执行
window.onload = function() {
    console.log('HXD3C型电力机车制动异常处置与安全行车实训课件');
    console.log('页面加载完成');
    checkScreenOrientation();
};

// 检测屏幕方向
function checkScreenOrientation() {
    // 仅在移动设备上处理
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // 监听屏幕方向变化
        window.addEventListener('orientationchange', function() {
            handleScreenRotation();
        });
        
        // 初始检查
        handleScreenRotation();
    }
}

// 处理屏幕旋转
function handleScreenRotation() {
    const isPortrait = window.innerHeight > window.innerWidth;
    const container = document.querySelector('.container');
    
    if (isPortrait) {
        // 竖屏状态：旋转容器90度并缩小显示
        container.style.transform = 'rotate(90deg) scale(0.8)';
        container.style.transformOrigin = 'center center';
        container.style.width = (window.innerHeight * 1.2) + 'px';
        container.style.height = 'auto';
        container.style.position = 'fixed';
        container.style.top = '50%';
        container.style.left = '50%';
        container.style.marginTop = '-' + (container.offsetHeight / 2) + 'px';
        container.style.marginLeft = '-' + (container.offsetWidth / 2) + 'px';
        container.style.overflow = 'auto';
        container.style.zIndex = '1';
        container.style.maxHeight = 'none';
        container.style.maxWidth = 'none';
        
        // 设置body样式
        document.body.style.overflow = 'auto';
        document.body.style.width = (window.innerHeight * 1.2) + 'px';
        document.body.style.height = 'auto';
        document.body.style.minHeight = window.innerWidth + 'px';
        document.body.style.maxHeight = 'none';
        document.body.style.maxWidth = 'none';
        
        // 强制重新计算布局
        setTimeout(() => {
            container.style.height = container.scrollHeight + 'px';
        }, 100);
    } else {
        // 横屏状态：恢复正常
        container.style.transform = '';
        container.style.transformOrigin = '';
        container.style.width = '';
        container.style.height = '';
        container.style.position = '';
        container.style.top = '';
        container.style.left = '';
        container.style.overflow = '';
        container.style.zIndex = '';
        
        // 恢复body样式
        document.body.style.overflow = '';
        document.body.style.width = '';
        document.body.style.height = '';
        document.body.style.minHeight = '';
        document.body.style.maxHeight = '';
        document.body.style.maxWidth = '';
    }
}
