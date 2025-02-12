'use client'

import Head from 'next/head'

export default function Home() {
  return (
    <div style={containerStyle}>
      <Head>
        <title>CV Online Sabila Nadjah Ma'ripah</title>
        <meta name="description" content="CV Online Sabila Nadjah Ma'ripah" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header style={headerStyle}>
        <h1 style={mainTitleStyle}>CV Online Sabila Nadjah Ma'ripah</h1>
        <p style={subTitleStyle}>Selamat datang di website pribadi saya. Temukan informasi tentang keterampilan, layanan, dan portofolio saya.</p>
      </header>

      <section id="about" style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Tentang Saya</h2>
        <div style={imageWrapperStyle}>
          <img
            src="/path-to-your-photo.jpg"
            alt="Sabila Nadjah Ma'ripah"
            style={imageStyle}
          />
        </div>
        <p style={sectionContentStyle}>
          Halo, saya Sabila Nadjah Ma'ripah, seorang pengembang web yang bersemangat dalam menciptakan situs web yang indah dan fungsional. 
          Saya menguasai berbagai teknologi web, seperti JavaScript, React, dan Next.js. Saya juga selalu bersemangat untuk mempelajari teknologi baru dan meningkatkan keterampilan saya.
        </p>
      </section>

      <section id="skills" style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Keterampilan</h2>
        <ul style={skillsListStyle}>
          <li style={skillItem}>JavaScript (ES6+)</li>
          <li style={skillItem}>React.js</li>
          <li style={skillItem}>Next.js</li>
          <li style={skillItem}>CSS & HTML</li>
          <li style={skillItem}>Node.js</li>
          <li style={skillItem}>Git & Pengendalian Versi</li>
        </ul>
      </section>

      <section id="services" style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Layanan</h2>
        <div style={serviceBoxContainer}>
          <div style={serviceBox}>
            <h3 style={serviceTitle}>Pengembangan Web</h3>
            <p style={serviceDescription}>Membangun situs web yang responsif dan dinamis menggunakan teknologi web modern.</p>
          </div>
          <div style={serviceBox}>
            <h3 style={serviceTitle}>Desain UI/UX</h3>
            <p style={serviceDescription}>Menciptakan antarmuka pengguna yang ramah dan pengalaman pengguna yang luar biasa.</p>
          </div>
          <div style={serviceBox}>
            <h3 style={serviceTitle}>Konsultasi</h3>
            <p style={serviceDescription}>Memberikan saran ahli mengenai strategi pengembangan web dan teknologi terkini.</p>
          </div>
        </div>
      </section>

      <section id="portfolio" style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Portofolio</h2>
        <div style={portfolioBoxContainer}>
          <div style={portfolioBox}>
            <h3>Proyek 1</h3>
            <p>Aplikasi web untuk melacak tugas dan tujuan harian pengguna.</p>
          </div>
          <div style={portfolioBox}>
            <h3>Proyek 2</h3>
            <p>Platform e-commerce responsif untuk bisnis kecil menjual produk mereka.</p>
          </div>
          <div style={portfolioBox}>
            <h3>Proyek 3</h3>
            <p>Blog pribadi yang dibangun dengan Next.js untuk berbagi pengalaman dan pemikiran saya.</p>
          </div>
        </div>
      </section>

      <section id="contact" style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Kontak</h2>
        <p style={sectionContentStyle}>
          Jika Anda ingin menghubungi saya, silakan kirimkan pesan melalui formulir di bawah ini.
        </p>
        <form style={formStyle}>
          <input type="text" placeholder="Nama Anda" required style={inputStyle} />
          <input type="email" placeholder="Email Anda" required style={inputStyle} />
          <textarea placeholder="Pesan Anda" required style={textareaStyle}></textarea>
          <button type="submit" style={buttonStyle}>Kirim Pesan</button>
        </form>
      </section>

      <footer style={footerStyle}>
        <p style={footerText}>© 2025 Sabila Nadjah Ma'ripah</p>
      </footer>
    </div>
  )
}

const containerStyle = {
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#E0F7FA',  // Latar belakang biru pastel yang lembut
  minHeight: '100vh',
  color: '#3e4e5e',
}

const headerStyle = {
  textAlign: 'center',
  marginBottom: '50px',
}

const mainTitleStyle = {
  fontSize: '3rem',
  marginBottom: '10px',
  color: '#3e4e5e',
}

const subTitleStyle = {
  color: '#6c7c7a',
  fontSize: '1.2rem',
}

const sectionStyle = {
  marginBottom: '50px',
}

const sectionTitleStyle = {
  color: '#3e4e5e',
  marginBottom: '10px',
  fontSize: '2rem',
}

const sectionContentStyle = {
  color: '#4a5b5d',
  fontSize: '1.2rem',
  maxWidth: '800px',
  margin: '0 auto',
}

const imageWrapperStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '20px',
}

const imageStyle = {
  borderRadius: '50%',
  width: '150px',
  height: '150px',
  objectFit: 'cover',
  border: '4px solid #a8d1e7',
}

const skillsListStyle = {
  listStyleType: 'none',
  padding: 0,
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '20px',
}

const skillItem = {
  backgroundColor: '#fff',
  padding: '10px',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  color: '#4a5b5d',
}

const serviceBoxContainer = {
  display: 'flex',
  justifyContent: 'space-between',
}

const serviceBox = {
  width: '30%',
  padding: '20px',
  backgroundColor: '#B2EBF2', // Latar belakang biru muda lembut
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
}

const serviceTitle = {
  color: '#5c6d6e',
}

const serviceDescription = {
  color: '#4a5b5d',
}

const portfolioBoxContainer = {
  display: 'flex',
  justifyContent: 'space-between',
}

const portfolioBox = {
  width: '30%',
  padding: '20px',
  backgroundColor: '#B2EBF2', // Latar belakang biru muda lembut
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
}

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  maxWidth: '400px',
  margin: '0 auto',
}

const inputStyle = {
  padding: '10px',
  fontSize: '1rem',
  border: '1px solid #ddd',
  borderRadius: '5px',
}

const textareaStyle = {
  padding: '10px',
  fontSize: '1rem',
  border: '1px solid #ddd',
  borderRadius: '5px',
}

const buttonStyle = {
  padding: '10px',
  backgroundColor: '#3e4e5e',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
}

const footerStyle = {
  textAlign: 'center',
  marginTop: '50px',
}

const footerText = {
  color: '#6c7c7a',
}
