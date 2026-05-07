document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.video-banner');
    
    if (container) {
        // Criação do elemento de vídeo
        const video = document.createElement('video');
        
        // Configurações essenciais para vídeo de fundo
        video.src = 'media/bannerhome.mp4'; // Substitua pelo caminho do seu arquivo de vídeo
        video.autoplay = true;
        video.loop = true;
        video.muted = true; // Necessário para o autoplay funcionar na maioria dos navegadores
        video.playsInline = true; // Importante para compatibilidade em dispositivos móveis
        
        // Adiciona o vídeo ao container
        container.appendChild(video);
    }
});
