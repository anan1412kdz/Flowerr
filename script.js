function openEnvelope() {
    const envelope = document.querySelector('.envelope');
    envelope.classList.add('open');

    // Thực hiện các thao tác tiếp theo sau khi mở thư
    setTimeout(() => {
        alert("Bức thư đã được mở! Bạn có thể thực hiện các thao tác tiếp theo ở đây.");
        // Thêm các thao tác tiếp theo tại đây
    }, 1000); // Đợi 1 giây để animation hoàn thành
}