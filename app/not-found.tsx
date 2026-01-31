import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="mx-auto px-4 py-9 sm:px-6 md:px-28 md:py-16">
      <h2 className="mb-5 text-3xl font-bold">Not Found</h2>
      <p>Could not find requested resource</p>
      <Link
        href="/"
        className="my-7 inline-block bg-zinc-700 px-6 py-3 text-white hover:opacity-80"
      >
        Return Home
      </Link>
    </div>
  )
}
