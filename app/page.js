// pages/index.js
import React from 'react';

const dataMahasiswa = [
  { no: 1, nim: '123456', nama: 'John Doe', gender: 'Laki-laki', prodi: 'Informatika', kelas: 'A', semester: 3, alamat: 'Jl. Raya No. 1', hobby: 'Membaca', citaCita: 'Software Engineer' },
  { no: 2, nim: '234567', nama: 'Jane Smith', gender: 'Perempuan', prodi: 'Teknik Elektro', kelas: 'B', semester: 2, alamat: 'Jl. Melati No. 2', hobby: 'Menulis', citaCita: 'Electrical Engineer' },
  { no: 3, nim: '345678', nama: 'Alice Johnson', gender: 'Perempuan', prodi: 'Desain Komunikasi Visual', kelas: 'C', semester: 4, alamat: 'Jl. Merdeka No. 3', hobby: 'Fotografi', citaCita: 'Desainer Grafis' },
  { no: 4, nim: '456789', nama: 'Michael Brown', gender: 'Laki-laki', prodi: 'Teknik Mesin', kelas: 'D', semester: 5, alamat: 'Jl. Pahlawan No. 4', hobby: 'Olahraga', citaCita: 'Mechanical Engineer' },
  { no: 5, nim: '567890', nama: 'Emily White', gender: 'Perempuan', prodi: 'Bioteknologi', kelas: 'E', semester: 6, alamat: 'Jl. Jendral No. 5', hobby: 'Menyanyi', citaCita: 'Biotechnologist' },
  { no: 6, nim: '678901', nama: 'David Green', gender: 'Laki-laki', prodi: 'Sistem Informasi', kelas: 'F', semester: 4, alamat: 'Jl. Kemenangan No. 6', hobby: 'Bermain Game', citaCita: 'IT Specialist' },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-900 p-6 flex justify-center items-center">
      <div className="w-full max-w-7xl bg-white shadow-xl rounded-xl p-6">

        {/* UI untuk Desktop (Table) */}
        <div className="hidden lg:block">
          <h1 className="text-4xl font-extrabold text-center text-white mb-8">Data Mahasiswa - Desktop View</h1>
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-gradient-to-r from-blue-800 to-blue-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left text-lg font-semibold">No</th>
                <th className="px-6 py-4 text-left text-lg font-semibold">NIM</th>
                <th className="px-6 py-4 text-left text-lg font-semibold">Nama</th>
                <th className="px-6 py-4 text-left text-lg font-semibold">Gender</th>
                <th className="px-6 py-4 text-left text-lg font-semibold">Prodi</th>
                <th className="px-6 py-4 text-left text-lg font-semibold">Kelas</th>
                <th className="px-6 py-4 text-left text-lg font-semibold">Semester</th>
                <th className="px-6 py-4 text-left text-lg font-semibold">Alamat</th>
                <th className="px-6 py-4 text-left text-lg font-semibold">Hobby</th>
                <th className="px-6 py-4 text-left text-lg font-semibold">Cita-cita</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              {dataMahasiswa.map((mahasiswa) => (
                <tr
                  key={mahasiswa.nim}
                  className="hover:bg-blue-100 transition-all duration-200 ease-in-out"
                >
                  <td className="px-6 py-4 text-sm">{mahasiswa.no}</td>
                  <td className="px-6 py-4 text-sm">{mahasiswa.nim}</td>
                  <td className="px-6 py-4 text-sm">{mahasiswa.nama}</td>
                  <td className="px-6 py-4 text-sm">{mahasiswa.gender}</td>
                  <td className="px-6 py-4 text-sm">{mahasiswa.prodi}</td>
                  <td className="px-6 py-4 text-sm">{mahasiswa.kelas}</td>
                  <td className="px-6 py-4 text-sm">{mahasiswa.semester}</td>
                  <td className="px-6 py-4 text-sm">{mahasiswa.alamat}</td>
                  <td className="px-6 py-4 text-sm">{mahasiswa.hobby}</td>
                  <td className="px-6 py-4 text-sm">{mahasiswa.citaCita}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* UI untuk Mobile (Grid) */}
        <div className="lg:hidden">
          <h1 className="text-4xl font-extrabold text-center text-white mb-6">Data Mahasiswa - Mobile View</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {dataMahasiswa.map((mahasiswa) => (
              <div
                key={mahasiswa.nim}
                className="bg-white shadow-xl rounded-xl p-6 flex flex-col items-center hover:scale-105 transition-all duration-200 ease-in-out"
              >
                <div className="text-xl font-semibold text-gray-800 mb-2">{mahasiswa.nama}</div>
                <div className="text-sm text-gray-600">NIM: {mahasiswa.nim}</div>
                <div className="text-sm text-gray-600">Gender: {mahasiswa.gender}</div>
                <div className="text-sm text-gray-600">Prodi: {mahasiswa.prodi}</div>
                <div className="text-sm text-gray-600">Kelas: {mahasiswa.kelas}</div>
                <div className="text-sm text-gray-600">Semester: {mahasiswa.semester}</div>
                <div className="text-sm text-gray-600">Alamat: {mahasiswa.alamat}</div>
                <div className="text-sm text-gray-600">Hobby: {mahasiswa.hobby}</div>
                <div className="text-sm text-gray-600">Cita-cita: {mahasiswa.citaCita}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
