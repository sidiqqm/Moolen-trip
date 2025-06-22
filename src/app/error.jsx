"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, Home } from "lucide-react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="max-w-md text-center">
        <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-4" />
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Terjadi Kesalahan
        </h2>
        <p className="text-gray-600 mb-6">
          Maaf, terjadi kesalahan saat memuat halaman.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Coba Lagi
          </button>
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
          >
            <Home className="mr-2 h-5 w-5" />
            Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}