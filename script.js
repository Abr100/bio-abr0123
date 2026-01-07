// Data mudah disunting: ganti nilai sesuai profil Anda
const profile = {
  handle: "A B R.",
  tiktok: "https://www.tiktok.com/@tiktok.abr",
  discord: "https://discord.gg/xPt3cR4TD6",
  sociabuzz: "https://sociabuzz.com/a_b_r/tribe",
  saweria: "https://saweria.co/ABR0123",
  whatsapp: "https://www.whatsapp.com/channel/0029Vaz0niQ002T2Vwv8fn41",
  bio: "MINECRAFT STREAMER AND CONTENT CREATOR",
  avatar: "assets/Profiletiktok.png"
}

// Render data ke halaman
document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('displayName').textContent = profile.handle;
  document.getElementById('bio').textContent = profile.bio;
  document.getElementById('avatar').src = profile.avatar;

  const links = document.getElementById('links');
  links.querySelectorAll('a').forEach(a=>{
    const text = a.textContent.toLowerCase();
    if(text.includes('tiktok')) a.href = profile.tiktok;
    if(text.includes('discord')) a.href = profile.discord;
    if(text.includes('sociabuzz')) a.href = profile.sociabuzz;
    if(text.includes('saweria')) a.href = profile.saweria;
    if(text.includes('whatsapp')) a.href = profile.whatsapp;
  });

  document.getElementById('copyBtn').addEventListener('click', async ()=>{
    const text = window.location.href;
    try{
      await navigator.clipboard.writeText(text);
      const btn = document.getElementById('copyBtn');
      const orig = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-check"></i> Tersalin!';
      setTimeout(()=> btn.innerHTML = orig,2000);
    }catch(e){
      alert('Gagal menyalin. Silakan salin manual: ' + text);
    }
  });
});
