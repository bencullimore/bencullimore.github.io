// --- DYNAMIC CLUSTER CONNECTIONS SCRIPT ---
(function() {
    const canvas = document.getElementById('matrixCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const wrapper = document.getElementById('patternWrapper');

    const columns = 6;
    const rows = 5;
    const dots = [];
    
    const COLOR_GREEN = '#838531'; 
    const COLOR_PINK = '#ff4cb2';  

    let baseRadius = 6;
    let lineWidth = 2;

    function buildGridSystem() {
        const displayWidth = wrapper.clientWidth;
        const displayHeight = wrapper.clientHeight;

        canvas.width = displayWidth * window.devicePixelRatio;
        canvas.height = displayHeight * window.devicePixelRatio;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

        baseRadius = Math.max(5, displayWidth * 0.022);
        lineWidth = Math.max(1.5, displayWidth * 0.005);

        const xSpacing = displayWidth / (columns + 1);
        const ySpacing = displayHeight / (rows + 1);

        let index = 0;
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < columns; c++) {
                if (dots[index]) {
                    dots[index].x = xSpacing * (c + 1);
                    dots[index].y = ySpacing * (r + 1);
                } else {
                    dots.push({
                        x: xSpacing * (c + 1),
                        y: ySpacing * (r + 1),
                        isPink: false,
                        targetScale: 1,
                        currentScale: 1,
                        row: r,
                        col: c
                    });
                }
                index++;
            }
        }
    }

    function triggerRandomCluster() {
        dots.forEach(dot => {
            dot.isPink = false;
            dot.targetScale = 1;
        });

        const clusterSize = Math.floor(Math.random() * 4) + 2; 
        const seedIndex = Math.floor(Math.random() * dots.length);
        const cluster = [dots[seedIndex]];
        
        dots[seedIndex].isPink = true;
        dots[seedIndex].targetScale = 1.25;

        while (cluster.length < clusterSize) {
            const parent = cluster[Math.floor(Math.random() * cluster.length)];
            const neighbors = dots.filter(d => {
                if (d.isPink) return false;
                const isHorizontal = Math.abs(d.col - parent.col) === 1 && d.row === parent.row;
                const isVertical = Math.abs(d.row - parent.row) === 1 && d.col - parent.col === 0;
                return isHorizontal || isVertical;
            });

            if (neighbors.length > 0) {
                const chosen = neighbors[Math.floor(Math.random() * neighbors.length)];
                chosen.isPink = true;
                chosen.targetScale = 1.25;
                cluster.push(chosen);
            } else {
                break;
            }
        }
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

        ctx.beginPath();
        ctx.strokeStyle = COLOR_PINK;
        ctx.lineWidth = lineWidth;
        
        for (let i = 0; i < dots.length; i++) {
            for (let j = i + 1; j < dots.length; j++) {
                if (dots[i].isPink && dots[j].isPink) {
                    const distRow = Math.abs(dots[i].row - dots[j].row);
                    const distCol = Math.abs(dots[i].col - dots[j].col);
                    if ((distRow === 1 && distCol === 0) || (distRow === 0 && distCol === 1)) {
                        ctx.moveTo(dots[i].x, dots[i].y);
                        ctx.lineTo(dots[j].x, dots[j].y);
                    }
                }
            }
        }
        ctx.stroke();

        dots.forEach(dot => {
            dot.currentScale += (dot.targetScale - dot.currentScale) * 0.12;

            ctx.beginPath();
            ctx.fillStyle = dot.isPink ? COLOR_PINK : COLOR_GREEN;
            ctx.arc(dot.x, dot.y, baseRadius * dot.currentScale, 0, Math.PI * 2);
            ctx.fill();
            
            if (dot.isPink) {
                ctx.strokeStyle = '#050505';
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        });

        requestAnimationFrame(draw);
    }

    const resizeObserver = new ResizeObserver(() => {
        buildGridSystem();
    });
    resizeObserver.observe(wrapper);

    buildGridSystem();
    draw();

    triggerRandomCluster();
    setInterval(triggerRandomCluster, 2600);
})();

// --- WIREFRAME GLOBE ROTATION ENGINE ---
(function() {
    const canvas = document.getElementById('globeCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const wrapper = document.getElementById('globeWrapper');

    const STROKE_COLOR = '#076c00'; // Match blueprint profile forest green
    const lineCount = 10; 
    let rotationAngle = 0;
    const speed = 0.005;  

    function resizeGlobe() {
        const displayWidth = wrapper.clientWidth - 32;
        const displayHeight = wrapper.clientHeight - 32;

        canvas.width = displayWidth * window.devicePixelRatio;
        canvas.height = displayHeight * window.devicePixelRatio;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }

    function drawGlobe() {
        const w = canvas.clientWidth;
        const h = canvas.clientHeight;
        ctx.clearRect(0, 0, w, h);

        const centerX = w / 2;
        const centerY = h / 2;
        
        const radiusX = w * 0.44; 
        const radiusY = h * 0.38; 

        ctx.strokeStyle = STROKE_COLOR;
        ctx.lineWidth = Math.max(1.2, w * 0.005);
        ctx.lineCap = 'round';

        // 1. Latitude Rings
        const latFractions = [-0.5, 0, 0.5];
        latFractions.forEach(fraction => {
            ctx.beginPath();
            const yPos = centerY + radiusY * fraction;
            const widthFactor = Math.sqrt(1 - fraction * fraction);
            const currentRadiusX = radiusX * widthFactor;
            ctx.ellipse(centerX, yPos, currentRadiusX, radiusY * 0.015, 0, 0, Math.PI * 2);
            ctx.stroke();
        });

        // 2. Rotating Longitude Meridians
        rotationAngle += speed;
        for (let i = 0; i < lineCount; i++) {
            const baseAngle = (i / lineCount) * Math.PI;
            const currentAngle = baseAngle + rotationAngle;
            const depthScale = Math.sin(currentAngle);

            ctx.beginPath();
            ctx.ellipse(centerX, centerY, radiusX * Math.abs(depthScale), radiusY, 0, 0, Math.PI * 2);
            ctx.stroke();
        }

        // 3. Silhouette Frame Ring
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, Math.PI * 2);
        ctx.lineWidth = Math.max(1.8, w * 0.006);
        ctx.stroke();

        requestAnimationFrame(drawGlobe);
    }

    const resizeObserver = new ResizeObserver(() => {
        resizeGlobe();
    });
    resizeObserver.observe(wrapper);

    resizeGlobe();
    drawGlobe();
})();


// Inside your requestAnimationFrame loop check:
function drawMatrix() {
    // If user prefers reduced motion, render frame 0 once and drop out of loop
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        renderStaticFrame(); // Render one static snapshot
        return; 
    }
    
    // ... rest of your animation steps
    requestAnimationFrame(drawMatrix);
}
