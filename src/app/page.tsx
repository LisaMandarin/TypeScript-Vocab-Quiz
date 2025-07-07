import VocabForm from "../components/VocabForm";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen m-4">
      <h1 className="block font-black text-5xl">
        <Link href="/">
          Vocab Quiz
        </Link>
      </h1>
      <h3 className="block font-normal text-2xl">
        Take quizzes by your own vocabulary and definitions
      </h3>
      <VocabForm />
    </div>
  );
}
