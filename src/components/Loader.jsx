export const Loader = () => {
  return (
    <div style={{zIndex: 10000}} className="sticky top-0 bg-white">
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin h-10 w-10 border-4 border-gray-300 rounded-full border-t-transparent" />
      </div>
    </div>
  );
}
