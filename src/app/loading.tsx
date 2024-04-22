function Loading() {
  // full screen page, small loading spinner in the center
  return <div className="flex items-center justify-center h-screen bg-gray-100">
    <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-noora-primary"></div>
  </div>
}

export default Loading;