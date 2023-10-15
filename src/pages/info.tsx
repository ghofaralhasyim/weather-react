import performance from '../assets/img/performance-audit.png'
const Info: React.FC = () => {
  return (
    <main className="pt-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto max-w-4xl px-4 bg-white shadow-lg shadow-gray-200 rounded-md py-8">
          <h1 className="font-poppins text-xl font-bold text-gray-700 capitalize mb-4">About the page</h1>
          <h2 className="font-poppins text-gray-700 font-semibold">Instruction</h2>
          <div className="text-gray-600 mt-2">
            <ul className="pl-2">
              <li>- Use <b>create-react-app</b> to create new React app & save it in public repository.</li>
              <li>- Use API to get weather information for <b>Plaza Indonesia</b> at the current moment.</li>
              <li>- Can use any libraries for the styling.</li>
            </ul>
        </div>
        <h2 className="font-poppins text-gray-700 font-semibold my-2">Approach to solve</h2>
        <div className="text-gray-600">
           <p>
          Dikarenakan dalam instruksi tidak dijelaskan secara detail visualisasi dan fungsionalitas web-app yang dibuat, diputuskan untuk membuat <i><b>web-app advertising based on weather information</b></i> dengan fungsionalitas sebagai berikut:
          </p>
          <ul className="pl-2 py-2">
            <li>- User dapat memperoleh informasi weather pada titik koordinat Plaza Indonesia.</li>
            <li>- Visualisasi untuk menggambarkan informasi weather.</li>
            <li>- Terdapat <b>ads</b> yang disesuaikan dengan kondisi weather. Menggunakan logic sederhana, apabila hujan / suhu dibawah 20 akan menampilkan ads berkaitan dengan minuman hangat. Sebaliknya, jika cuaca panas akan menampilkan ads minuman dingin.</li>
            <li>- Dengan asumsi web-app akan terus ditampilkan, data secara berkala akan diupdate (refetch) dengan durasi 1menit.</li>
            <li>- Visualisasi akan menyesuaikan waktu malam atau siang hari.</li>
          </ul>
        </div>
        <h2 className="font-poppins text-gray-700 font-semibold my-2">Technical Documentation</h2>
        <div className="text-gray-600">
          <p>Stack yang digunakan untuk web-app ini adalah sebagai berikut:</p>
          <ul className="pl-2 py-2">
            <li>- Vite React Typescript</li>
            <li>- React Router</li>
            <li>- Axios</li>
            <li>- Tailwindcss</li>
          </ul>
          <p>API : <b><a href="https://open-meteo.com" target="blank" className="underline text-blue-500">open-meteo.com</a></b></p>
          <p>Deployment : <b><a href="https://vercell.com" target="blank" className="underline text-blue-500">vercell.com</a></b></p>
         </div>
        <h2 className="font-poppins text-gray-700 font-semibold my-2">
          Performance
        </h2>
        <img src={performance} alt="performance test" />
        </div>
    </main>
  )
}

export default Info
