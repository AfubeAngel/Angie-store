import Link from "next/link";
import { lusitana } from "./ui/fonts";
import Image from "next/image";
import AcmeLogo from "./ui/acme-logo";

export default function Home() {
	return (
		<main className="flex flex-col p-3">
			<div className="bg-blue-500 p-1 w-full h-40 rounded-lg mb-5 flex">
				<span className="flex items-end bottom-0">
					<AcmeLogo />
				</span>
			</div>
			<section className="flex flex-col md:flex-row md:gap-2 lg:gap-5 h-[calc(100vh-212px)]">
				<div className="md:basis-1/3 border-1 flex flex-col justify-center rounded bg-gray-50 px-5 py-5">
					<div>
						<p className="`${lusitana.className}` text-l text-gray-800 md:text-xl leading-loose md:leading-normal sm:text-sm mb-7 lg:px-10 md:px-3">
							<strong>Welcome to Acme.</strong> This is the
							example for the{" "}
							<a
								className="text-blue-700"
								href="https://nextjs.org/learn"
							>
								{" "}
								Next.js Learn Course,
							</a>{" "}
							brought to you by Vercel.
						</p>
					</div>
					<div className="border-2 bg-blue-500 text-white flex items-center self-start text-sm hover:bg-blue-400 rounded-lg ml-3 px-5 py-4 md:px-3 lg:ml-9 box-content h-3 w-25 hover:cursor-pointer">
						<div className="flex gap-4">
							Log In<span>&#8594;</span>
						</div>
					</div>
				</div>
				<div className="md:basis-2/3 flex justify-center p-7 sm:px-5 md:px-10 md:py-15">
					<Image
						src="/hero-desktop.png"
						width={1000}
						height={760}
						className="hidden md:block"
						alt="desktop-image"
					/>
					<Image
						src="/hero-mobile.png"
						width={560}
						height={620}
						className="md:hidden"
						alt="desktop-image"
					/>
				</div>
			</section>
		</main>
		//   <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
	);
}
