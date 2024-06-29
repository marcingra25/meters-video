document.getElementById('srtForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let speed = parseFloat(document.getElementById('speed').value);
    let distance = parseFloat(document.getElementById('distance').value);

    let total_seconds = 600; // 10 minut
    let srt_content = "";

    for (let i = 0; i < total_seconds; i++) {
        let start_time = i;
        let end_time = i + 0.5;
        let start_time_str = `00:00:${start_time.toString().padStart(2, '0')},000`;
        let end_time_str = `00:00:${end_time.toString().padStart(2, '0')},000`;
        let current_distance = (speed * start_time).toFixed(2);

        srt_content += `${i + 1}\n${start_time_str} --> ${end_time_str}\n${current_distance} meters\n\n`;
    }

    let blob = new Blob([srt_content], { type: 'text/plain' });
    let link = document.getElementById('downloadLink');
    link.href = URL.createObjectURL(blob);
    link.download = 'subtitles.srt';
    link.style.display = 'block';
});
