// app/Nagoric.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

interface Citizen {
  id: number;
  name: string;
  father: string;
  mother: string;
  nid: string;
  ward: string;
  occupation: string;
  blood: string;
  photo: string; // URL
}

export default function Nagoric() {
  const [citizens, setCitizens] = useState<Citizen[]>([]);
  const [search, setSearch] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    father: "",
    mother: "",
    nid: "",
    ward: "",
    occupation: "",
    blood: "",
    photo: "",
  });

  // ফর্ম সাবমিট
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newCitizen: Citizen = {
      id: Date.now(),
      ...formData,
    };
    setCitizens([newCitizen, ...citizens]); // নতুন নাগরিক যোগ
    setFormData({
      name: "",
      father: "",
      mother: "",
      nid: "",
      ward: "",
      occupation: "",
      blood: "",
      photo: "",
    });
  };

  // সার্চ ফিল্টার
  const filteredCitizens = citizens.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.occupation.toLowerCase().includes(search.toLowerCase()) ||
      c.blood.toLowerCase().includes(search.toLowerCase()) ||
      c.ward.includes(search)
  );

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-center text-purple-700">
        নাগরিক তথ্য সংগ্রহ
      </h1>

      {/* সার্চ বক্স */}
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="সার্চ করুন (যেমন: ডাক্তার, A+, ওয়ার্ড ৩)"
          className="w-full md:w-1/2 border rounded-lg p-2 shadow"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* নাগরিক ফর্ম */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-purple-50 p-4 rounded-xl shadow-lg"
      >
        <input
          type="text"
          placeholder="নাম"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="বাবার নাম"
          value={formData.father}
          onChange={(e) => setFormData({ ...formData, father: e.target.value })}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="মায়ের নাম"
          value={formData.mother}
          onChange={(e) => setFormData({ ...formData, mother: e.target.value })}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="ন্যাশনাল আইডি নাম্বার"
          value={formData.nid}
          onChange={(e) => setFormData({ ...formData, nid: e.target.value })}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="ওয়ার্ড নাম্বার"
          value={formData.ward}
          onChange={(e) => setFormData({ ...formData, ward: e.target.value })}
          className="border p-2 rounded"
          min="1"
          max="9"
        />
        <input
          type="text"
          placeholder="পেশা (যেমন: ডাক্তার, শিক্ষক)"
          value={formData.occupation}
          onChange={(e) =>
            setFormData({ ...formData, occupation: e.target.value })
          }
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="ব্লাড গ্রুপ (যেমন: A+)"
          value={formData.blood}
          onChange={(e) => setFormData({ ...formData, blood: e.target.value })}
          className="border p-2 rounded"
        />
        <input
          type="url"
          placeholder="ছবির লিংক (80x80)"
          value={formData.photo}
          onChange={(e) => setFormData({ ...formData, photo: e.target.value })}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="md:col-span-2 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
        >
          তথ্য সংরক্ষণ
        </button>
      </form>

      {/* নাগরিক তালিকা */}
      <div className="grid md:grid-cols-3 gap-4">
        {filteredCitizens.map((c) => (
          <div
            key={c.id}
            className="bg-white shadow rounded-xl p-4 border hover:shadow-lg transition"
          >
            <div className="flex items-center space-x-3">
              {c.photo && (
                <Image
                  src={c.photo}
                  alt={c.name}
                  width={80}
                  height={80}
                  className="rounded-full border"
                />
              )}
              <div>
                <h2 className="font-bold text-lg">{c.name}</h2>
                <p className="text-sm text-gray-600">ওয়ার্ড: {c.ward}</p>
                <p className="text-sm text-gray-600">
                  পেশা: {c.occupation} | রক্ত: {c.blood}
                </p>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              পিতা: {c.father}, মাতা: {c.mother}, NID: {c.nid}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
