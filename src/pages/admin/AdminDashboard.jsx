import React, { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AdminDashboard = () => {
  const [totalBookings, setTotalBookings] = useState(0);
  const [uniqueUsers, setUniqueUsers] = useState(0);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchBookingData = async () => {
      const querySnapshot = await getDocs(collection(db, "bookings"));

      const userSet = new Set();
      const bookingsPerDay = {};

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        userSet.add(data.userId);

        const date = new Date(data.date?.seconds * 1000).toLocaleDateString();
        bookingsPerDay[date] = (bookingsPerDay[date] || 0) + 1;
      });

      setTotalBookings(querySnapshot.size);
      setUniqueUsers(userSet.size);

      // Convert to chart data format
      const chartArray = Object.entries(bookingsPerDay).map(
        ([date, count]) => ({
          date,
          count,
        })
      );
      setChartData(chartArray);
    };

    fetchBookingData();
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold">Total Test Bookings</h2>
            <p className="text-4xl mt-2 text-green-600">{totalBookings}</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold">Unique Users Who Booked</h2>
            <p className="text-4xl mt-2 text-blue-600">{uniqueUsers}</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Bookings Over Time</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <XAxis dataKey="date" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="count" fill="#4f46e5" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AdminDashboard;
