export const Loader = () => {
  return (
    <div style={{ zIndex: 10000 }} className="sticky top-0 bg-white">
      <div className="flex h-screen items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-transparent" />
      </div>
    </div>
  )
}
