// app/Nagoric.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Citizen {
  _id?: string;
  name: string;
  fatherName?: string;
  motherName?: string;
  nationalId: string;
  mobilenumber: number;
  wardNumber: number;
  occupation?: string;
  bloodGroup?: string;
  photoUrl?: string;
  createdAt?: string;
  updatedAt?: string;
}

// API বেস URL
const API_BASE_URL = "http://localhost:5000/api";

export default function Nagoric() {
  const [citizens, setCitizens] = useState<Citizen[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    motherName: "",
    nationalId: "",
    mobilenumber: "",
    wardNumber: "",
    occupation: "",
    bloodGroup: "",
  });
  const [photoFile, setPhotoFile] = useState<File | null>(null);

  // ✅ নাগরিক লোড (GET)
  const fetchCitizens = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/citizens`);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setCitizens(data);
    } catch (error) {
      console.error("Error fetching citizens:", error);
      setMessage({ type: "error", text: "❌ নাগরিক তালিকা লোড করতে সমস্যা হয়েছে!" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCitizens();
  }, []);

  // ✅ সার্চ ফাংশন
  const handleSearch = async (searchTerm: string) => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/citizens/search?query=${encodeURIComponent(searchTerm)}`);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      
      // পুরো পৌরসভা ভিত্তিক তালিকা
      setCitizens(data.allCitizens);
      
      // আপনি চাইলে ওয়ার্ড ভিত্তিক তালিকাও ব্যবহার করতে পারেন:
      // setCitizensByWard(data.byWard);
    } catch (error) {
      console.error("Error searching citizens:", error);
      setMessage({ type: "error", text: "❌ সার্চ করতে সমস্যা হয়েছে!" });
    } finally {
      setLoading(false);
    }
  };

  // ✅ ফর্ম সাবমিট (POST)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    // ফর্ম ডেটা ভ্যালিডেশন
    if (!formData.name || !formData.nationalId || !formData.wardNumber) {
      setMessage({ type: "error", text: "❌ নাম, জাতীয় ID এবং ওয়ার্ড নম্বর অবশ্যই填写 করতে হবে!" });
      return;
    }

    // ফাইল সাইজ চেক
    if (!photoFile) {
      setMessage({ type: "error", text: "❌ অবশ্যই একটি ছবি আপলোড করতে হবে!" });
      return;
    }

    // FormData বানানো
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value) formDataToSend.append(key, value);
    });
    
    if (photoFile) {
      formDataToSend.append("photo", photoFile);
    }

    try {
      const res = await fetch(`${API_BASE_URL}/citizens`, {
        method: "POST",
        body: formDataToSend,
      });

      if (!res.ok) {
        const errorData = await res.json();
        setMessage({ type: "error", text: "❌ " + errorData.error });
        return;
      }

      const newCitizen = await res.json();
      setCitizens([newCitizen, ...citizens]);
      setFormData({
        name: "",
        fatherName: "",
        motherName: "",
        nationalId: "",
        mobilenumber: "",
        wardNumber: "",
        occupation: "",
        bloodGroup: "",
      });
      setPhotoFile(null);
      setMessage({ type: "success", text: "✅ নাগরিকের তথ্য সফলভাবে যুক্ত হয়েছে!" });
    } catch (error) {
      console.error("Error adding citizen:", error);
      setMessage({ type: "error", text: "❌ সার্ভারের সাথে সংযোগ ব্যর্থ হয়েছে!" });
    }
  };

  // ✅ সার্চ ইনপুট পরিবর্তন হলে
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    
    // যদি খালি থাকে, সব নাগরিক দেখাবে
    if (value === "") {
      fetchCitizens();
    } else {
      //否则搜索
      handleSearch(value);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-center text-purple-700">
        নাগরিক তথ্য সংগ্রহ
      </h1>

      {/* মেসেজ */}
      {message && (
        <div
          className={`p-3 rounded-lg text-center font-medium ${
            message.type === "success"
              ? "bg-green-100 text-green-700 border border-green-300"
              : "bg-red-100 text-red-700 border border-red-300"
          }`}
        >
          {message.text}
        </div>
      )}

      {/* সার্চ এবং নাগরিক তথ্য বাটন */}
      <div className="flex justify-center items-center space-x-2 mb-4">
        <input
          type="text"
          placeholder="সার্চ করুন (যেমন: ডাক্তার, A+, ওয়ার্ড ৩)"
          className="w-full md:w-1/2 border rounded-lg p-2 shadow"
          value={search}
          onChange={handleSearchChange}
        />
        <button
          onClick={fetchCitizens}
          className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition"
        >
          নাগরিক তথ্য
        </button>
      </div>

      {/* ফর্ম */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-purple-50 p-4 rounded-xl shadow-lg"
      >
        <input
          type="text"
          placeholder="নাম *"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="বাবার নাম"
          value={formData.fatherName}
          onChange={(e) =>
            setFormData({ ...formData, fatherName: e.target.value })
          }
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="মায়ের নাম"
          value={formData.motherName}
          onChange={(e) =>
            setFormData({ ...formData, motherName: e.target.value })
          }
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="ন্যাশনাল আইডি *"
          value={formData.nationalId}
          onChange={(e) =>
            setFormData({ ...formData, nationalId: e.target.value })
          }
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="মোবাইল নাম্বার *"
          value={formData.mobilenumber}
          onChange={(e) =>
            setFormData({ ...formData, mobilenumber: e.target.value })
          }
          className="border p-2 rounded"
          required
        />
        <input
          type="number"
          placeholder="ওয়ার্ড নাম্বার *"
          value={formData.wardNumber}
          onChange={(e) =>
            setFormData({ ...formData, wardNumber: e.target.value })
          }
          className="border p-2 rounded"
          min="1"
          max="9"
          required
        />
        <input
          type="text"
          placeholder="পেশা"
          value={formData.occupation}
          onChange={(e) =>
            setFormData({ ...formData, occupation: e.target.value })
          }
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="ব্লাড গ্রুপ"
          value={formData.bloodGroup}
          onChange={(e) =>
            setFormData({ ...formData, bloodGroup: e.target.value })
          }
          className="border p-2 rounded"
        />
        {/* ফাইল ইনপুট */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            ছবি আপলোড * (100x100 পিক্সেল)
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setPhotoFile(e.target.files?.[0] || null)}
            className="border p-2 rounded w-full"
            required
          />
          {photoFile && (
            <p className="text-sm text-gray-500 mt-1">Selected: {photoFile.name}</p>
          )}
        </div>

        <button
          type="submit"
          className="md:col-span-2 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
        >
          তথ্য সংরক্ষণ
        </button>
      </form>

      {/* নাগরিক তালিকা */}
      {loading ? (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-2">⏳ লোড হচ্ছে...</p>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-semibold mb-4">নাগরিক তালিকা ({citizens.length} জন)</h2>
          {citizens.length === 0 ? (
            <div className="text-center py-8 bg-gray-50 rounded-lg">
              <p className="text-gray-500">কোন নাগরিক পাওয়া যায়নি</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {citizens.map((c) => (
                <div
                  key={c._id}
                  className="bg-white shadow rounded-xl p-4 border hover:shadow-lg transition"
                >
                  <div className="flex items-center space-x-3">
                    {c.photoUrl ? (
                      <Image
                        src={`http://localhost:5000${c.photoUrl}`}
                        alt={c.name}
                        width={80}
                        height={80}
                        className="rounded-full border object-cover"
                      />
                    ) : (
                      <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400">No Image</span>
                      </div>
                    )}
                    <div>
                      <h2 className="font-bold text-lg">{c.name}</h2>
                      <p className="text-sm text-gray-600">
                        ওয়ার্ড: {c.wardNumber}
                      </p>
                      <p className="text-sm text-gray-600">
                        পেশা: {c.occupation || "N/A"} | রক্ত: {c.bloodGroup || "N/A"}
                      </p>
                      <p className="text-sm text-gray-600">
                        মোবাইল: {c.mobilenumber }
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    পিতা: {c.fatherName || "N/A"}, মাতা: {c.motherName || "N/A"}, NID:{" "}
                    {c.nationalId}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}