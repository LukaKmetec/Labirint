function risi() {
    let x = 0, y = 1;
    const speed = 10; 
    const points = [
        234, 2, 234, 10, 218, 10, 218, 26, 186, 26, 186, 10, 154, 10, 154, 58, 138, 58, 138, 42,
        122, 42, 122, 58, 106, 58, 106, 90, 74, 90, 74, 106, 90, 106, 90, 154, 106, 154, 106, 106,
        122, 106, 122, 90, 138, 90, 138, 106, 154, 106, 154, 74, 170, 74, 170, 90, 218, 90, 218, 106,
        250, 106, 250, 122, 282, 122, 282, 90, 298, 90, 298, 138, 282, 138, 282, 170, 250, 170,
        250, 186, 234, 186, 234, 202, 218, 202, 218, 218, 186, 218, 186, 202, 202, 202, 202, 186,
        218, 186, 218, 170, 234, 170, 234, 154, 266, 154, 266, 138, 234, 138, 234, 122, 202, 122,
        202, 106, 170, 106, 170, 138, 154, 138, 154, 122, 138, 122, 138, 186, 154, 186, 154, 202,
        138, 202, 138, 234, 154, 234, 154, 250, 170, 250, 170, 234, 218, 234, 218, 250, 266, 250,
        266, 266, 234, 266, 234, 282, 250, 282, 250, 298, 234, 298, 234, 314, 282, 314, 282, 282,
        298, 282, 298, 314, 314, 314, 314, 298, 330, 298, 330, 282, 346, 282, 346, 234, 362, 234,
        362, 250, 394, 250, 394, 266, 410, 266, 410, 298, 426, 298, 426, 314, 410, 314, 410, 362,
        378, 362, 378, 378, 362, 378, 362, 426, 346, 426, 346, 442, 330, 442, 330, 426, 266, 426,
        266, 442, 234, 442, 234, 458, 266, 458, 266, 474, 250, 474, 250, 482
    ];

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    const resetCanvas = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        x = 0;
        y = 1;
    };

    const drawSegment = () => {
        if (x < points.length - 2) {
            const startX = points[x];
            const startY = points[y];
            const endX = points[x + 2];
            const endY = points[y + 2];

            
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.lineTo(endX, endY);
            ctx.strokeStyle = "rgb(255, 255, 0)";
            ctx.lineWidth = 5;
            ctx.stroke();
            ctx.closePath();

            x += 2;
            y += 2;
        } else {
            clearInterval(interval);
            document.getElementById("resetiraj").disabled = false;
        }
    };

    let interval;

    document.getElementById("startaj").addEventListener("click", () => {
        resetCanvas();
        document.getElementById("resetiraj").disabled = true;
        interval = setInterval(drawSegment, 100);
        risi();
    });
}

function resetiraj(){
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
};
