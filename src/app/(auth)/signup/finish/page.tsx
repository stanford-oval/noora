export default function FinishSignUp() {
  return <div className="h-screen py-12 flex flex-col justify-center">
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="vertical space-y-2 text-center text-gray-500">
        <h1 className="text-lg text-gray-700 font-semibold">Check your email</h1>
        <div>
          <div>Almost done!</div>
          <div className="mt-1">Finish signing up by clicking on the confirmation link sent to your email.</div>
        </div>
      </div>
    </div>
  </div>
}