"use client";

import Image from 'next/image'
import Calculator from './calculator';

export default function Home() {
  return (
    <main className="h-[100vh] w-[100vw] bg-slate-900 p-4">
      <Calculator />
    </main>
  )
}
