export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="flex space-x-2 justify-center items-center">
        <div className="h-8 w-8 bg-orange-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="h-8 w-8 bg-orange-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="h-8 w-8 bg-orange-500 rounded-full animate-bounce"></div>
      </div>
      <p className="mt-8 text-lg font-medium text-gray-600">Memuat data...</p>
    </div>
  );
}
