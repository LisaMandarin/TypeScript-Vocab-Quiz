import QuizForm from "@/components/QuizForm";
import Link from "next/link";

export default function QuizPage() {
  return (
    <div className="flex flex-col items-center min-h-screen m-4">
      <h1 className="block font-black text-5xl">
        <Link href="/">
          Vocab Quiz
        </Link>
      </h1>
      <h3 className="block font-normal text-2xl">
        Quiz Time
      </h3>
      <QuizForm />
    </div>
  );
}
