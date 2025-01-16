
import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader";

const LeaderBoard = () => {
  const [Data, setData] = useState([]);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refetch, setRefetch] = useState(false); // Refetch toggle state

  const headers = {
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`https://leaderboard-backend-6h44.onrender.com/api/users/all`, {
          headers,
        });
        setData(response.data);
      } catch (error) {
        console.error("Error fetching leaderboard data:", error);
      }
    };

    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `https://leaderboard-backend-6h44.onrender.com/api/users/single`,
          {
            headers,
          }
        );
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    // Fetch data concurrently
    const fetchAllData = async () => {
      setLoading(true);
      await Promise.all([fetchUsers(), fetchUser()]);
      setLoading(false);
    };

    fetchAllData();
  }, [refetch]); // Depend on refetch state

  const claimPoint = async () => {
    try {
      const response = await axios.post(
        `https://leaderboard-backend-6h44.onrender.com/api/users/claim`,
        {},
        { headers }
      );
      setUserData(response.data);
      setRefetch((prev) => !prev); // Toggle refetch state
    } catch (error) {
      console.error("Error claiming points:", error);
    }
  };

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="h-auto flex flex-col justify-center items-center bg-gray-100">
      {/* User Data Section */}
      <div className="flex justify-center items-center gap-4 mt-10">
        {userData && (
          <div className="border border-gray-400 bg-blue-100 p-4 rounded shadow-md">
            <h1>Name: {userData.name}</h1>
            <h2>Total points: {userData.totalPoints}</h2>
            <button
              onClick={claimPoint}
              className="px-2 py-1 mt-3 border bg-gray-600 text-white border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300"
            >
              Claim Points
            </button>
          </div>
        )}

        {/* Top 3 Ranks */}
        {Data.length >= 3 && (
          <div className="flex flex-col md:flex-row gap-4">
            <div className="border border-gray-400 bg-blue-100 p-4 rounded shadow-md">
              Second Rank
              <h2 className="text-center">{Data[1]?.name}</h2>
            </div>
            <div className="border border-gray-400 bg-green-100 p-4 rounded shadow-md">
              First Rank
              <h2 className="text-center">{Data[0]?.name}</h2>
            </div>
            <div className="border border-gray-400 bg-yellow-100 p-4 rounded shadow-md">
              Third Rank
              <h2 className="text-center">{Data[2]?.name}</h2>
            </div>
          </div>
        )}
      </div>

      {/* Leaderboard Table */}
      <div className="w-full h-auto max-w-4xl mt-10">
        <div className="rounded-lg shadow-lg overflow-hidden bg-white">
          {/* Table Header */}
          <div className="grid grid-cols-3 text-center text-white bg-gray-600 p-4">
            <p>Name</p>
            <p>Points</p>
            <p>Rank</p>
          </div>
          {/* Table Rows */}
          {Data.length > 0 ? (
            Data.map((item, index) => (
              <div
                className="grid grid-cols-3 text-center items-center p-4 border-b border-gray-300 hover:bg-gray-200"
                key={index}
              >
                <p className="text-gray-900">{item.name}</p>
                <p className="text-gray-900">{item.totalPoints}</p>
                <p className="text-gray-900">{index + 1}</p>
              </div>
            ))
          ) : (
            <div className="text-center p-4 text-gray-600">
              No data available.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
