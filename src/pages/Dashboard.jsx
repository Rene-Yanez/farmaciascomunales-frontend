import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Bar } from "react-chartjs-2"
import {
  FiDollarSign,
  FiBox,
  FiUsers,
  FiAlertCircle,
} from "react-icons/fi"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const data = {
  labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
  datasets: [
    {
      label: "Ventas Mensuales ($)",
      data: [250000, 300000, 280000, 320000, 270000, 290000],
      backgroundColor: "#3b82f6",
    },
  ],
}

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Histórico de Ventas",
    },
  },
}

function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-6">
      <h1 className="text-3xl font-bold text-center text-blue-900 mb-10">Panel General</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
        <div className="bg-white shadow-lg rounded-xl p-6 border border-blue-100 flex items-center space-x-4">
          <FiDollarSign className="text-4xl text-green-600" />
          <div>
            <p className="text-sm text-blue-500">Ventas totales</p>
            <p className="text-xl font-semibold text-blue-900">$1.230.000</p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6 border border-blue-100 flex items-center space-x-4">
          <FiBox className="text-4xl text-yellow-600" />
          <div>
            <p className="text-sm text-blue-500">Productos en stock</p>
            <p className="text-xl font-semibold text-blue-900">352</p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6 border border-blue-100 flex items-center space-x-4">
          <FiUsers className="text-4xl text-purple-600" />
          <div>
            <p className="text-sm text-blue-500">Beneficiarios registrados</p>
            <p className="text-xl font-semibold text-blue-900">89</p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6 border border-blue-100 flex items-center space-x-4">
          <FiAlertCircle className="text-4xl text-red-600" />
          <div>
            <p className="text-sm text-blue-500">Alertas activas</p>
            <p className="text-xl font-semibold text-blue-900">4</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-white border border-blue-100 rounded-xl shadow p-6">
        <Bar options={options} data={data} />
      </div>
    </div>
  )
}

export default Dashboard