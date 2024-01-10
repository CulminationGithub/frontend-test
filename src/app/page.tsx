import Image from 'next/image'
import Input from '../components/input';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Image
          src="/culmination-logo.png"
          alt="Culmination Logo"
          width={100}
          height={24}
          priority
        />
        <p>Get started in the README. We look forward to seeing your work!</p>
    </main>
  )
}
